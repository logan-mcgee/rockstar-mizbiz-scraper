try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "0a70fb43-588f-43f7-8c1c-2876f5d951cb", e._sentryDebugIdIdentifier = "sentry-dbid-0a70fb43-588f-43f7-8c1c-2876f5d951cb")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160",
    packageName: "@rockstargames/account-management"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunkaccount_management = self.webpackChunkaccount_management || []).push([
  [8970], {
    16313: (e, n, t) => {
      Object.defineProperty(n, "__esModule", {
        value: !0
      });
      var r = t(31635),
        i = t(67295),
        u = t(8729);

      function a(e, n) {
        if (!(e instanceof s)) throw new TypeError("Method Intl.ListFormat.prototype.".concat(n, " called on incompatible receiver ").concat(String(e)))
      }

      function o(e) {
        if (void 0 === e) return [];
        for (var n = [], t = 0, r = e; t < r.length; t++) {
          var i = r[t];
          if ("string" != typeof i) throw new TypeError("array list[".concat(e.indexOf(i), "] is not type String"));
          n.push(i)
        }
        return n
      }

      function l(e, n, t) {
        var r = t.length;
        if (0 === r) return [];
        if (2 === r) return c((0, i.getInternalSlot)(e, n, "templatePair"), {
          0: {
            type: "element",
            value: t[0]
          },
          1: {
            type: "element",
            value: t[1]
          }
        });
        for (var u = {
            type: "element",
            value: t[r - 1]
          }, a = r - 2; a >= 0;) u = c(0 === a ? (0, i.getInternalSlot)(e, n, "templateStart") : a < r - 2 ? (0, i.getInternalSlot)(e, n, "templateMiddle") : (0, i.getInternalSlot)(e, n, "templateEnd"), {
          0: {
            type: "element",
            value: t[a]
          },
          1: u
        }), a--;
        return u
      }

      function c(e, n) {
        for (var t = [], r = 0, u = (0, i.PartitionPattern)(e); r < u.length; r++) {
          var a = u[r],
            o = a.type;
          if ((0, i.isLiteralPart)(a)) t.push({
            type: "literal",
            value: a.value
          });
          else {
            (0, i.invariant)(o in n, "".concat(o, " is missing from placables"));
            var l = n[o];
            Array.isArray(l) ? t.push.apply(t, l) : t.push(l)
          }
        }
        return t
      }
      var s = function() {
        function e(n, t) {
          if (!(this && this instanceof e ? this.constructor : void 0)) throw new TypeError("Intl.ListFormat must be called with 'new'");
          (0, i.setInternalSlot)(e.__INTERNAL_SLOT_MAP__, this, "initializedListFormat", !0);
          var r = (0, i.CanonicalizeLocaleList)(n),
            a = Object.create(null),
            o = (0, i.GetOptionsObject)(t),
            l = (0, i.GetOption)(o, "localeMatcher", "string", ["best fit", "lookup"], "best fit");
          a.localeMatcher = l;
          var c = e.localeData,
            s = (0, u.ResolveLocale)(e.availableLocales, r, a, e.relevantExtensionKeys, c, e.getDefaultLocale);
          (0, i.setInternalSlot)(e.__INTERNAL_SLOT_MAP__, this, "locale", s.locale);
          var f = (0, i.GetOption)(o, "type", "string", ["conjunction", "disjunction", "unit"], "conjunction");
          (0, i.setInternalSlot)(e.__INTERNAL_SLOT_MAP__, this, "type", f);
          var m = (0, i.GetOption)(o, "style", "string", ["long", "short", "narrow"], "long");
          (0, i.setInternalSlot)(e.__INTERNAL_SLOT_MAP__, this, "style", m);
          var g = s.dataLocale,
            p = c[g];
          (0, i.invariant)(!!p, "Missing locale data for ".concat(g));
          var d = p[f][m];
          (0, i.setInternalSlot)(e.__INTERNAL_SLOT_MAP__, this, "templatePair", d.pair), (0, i.setInternalSlot)(e.__INTERNAL_SLOT_MAP__, this, "templateStart", d.start), (0, i.setInternalSlot)(e.__INTERNAL_SLOT_MAP__, this, "templateMiddle", d.middle), (0, i.setInternalSlot)(e.__INTERNAL_SLOT_MAP__, this, "templateEnd", d.end)
        }
        return e.prototype.format = function(n) {
          a(this, "format");
          var t = "",
            r = l(e.__INTERNAL_SLOT_MAP__, this, o(n));
          if (!Array.isArray(r)) return r.value;
          for (var i = 0, u = r; i < u.length; i++) t += u[i].value;
          return t
        }, e.prototype.formatToParts = function(n) {
          a(this, "format");
          var t = l(e.__INTERNAL_SLOT_MAP__, this, o(n));
          if (!Array.isArray(t)) return [t];
          for (var i = [], u = 0, c = t; u < c.length; u++) {
            var s = c[u];
            i.push(r.__assign({}, s))
          }
          return i
        }, e.prototype.resolvedOptions = function() {
          return a(this, "resolvedOptions"), {
            locale: (0, i.getInternalSlot)(e.__INTERNAL_SLOT_MAP__, this, "locale"),
            type: (0, i.getInternalSlot)(e.__INTERNAL_SLOT_MAP__, this, "type"),
            style: (0, i.getInternalSlot)(e.__INTERNAL_SLOT_MAP__, this, "style")
          }
        }, e.supportedLocalesOf = function(n, t) {
          return (0, i.SupportedLocales)(e.availableLocales, (0, i.CanonicalizeLocaleList)(n), t)
        }, e.__addLocaleData = function() {
          for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];
          for (var r = 0, i = n; r < i.length; r++) {
            var u = i[r],
              a = u.data,
              o = u.locale,
              l = new Intl.Locale(o).minimize().toString();
            e.localeData[o] = e.localeData[l] = a, e.availableLocales.add(l), e.availableLocales.add(o), e.__defaultLocale || (e.__defaultLocale = l)
          }
        }, e.getDefaultLocale = function() {
          return e.__defaultLocale
        }, e.localeData = {}, e.availableLocales = new Set, e.__defaultLocale = "", e.relevantExtensionKeys = [], e.polyfilled = !0, e.__INTERNAL_SLOT_MAP__ = new WeakMap, e
      }();
      n.default = s;
      try {
        "undefined" != typeof Symbol && Object.defineProperty(s.prototype, Symbol.toStringTag, {
          value: "Intl.ListFormat",
          writable: !1,
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(s.prototype.constructor, "length", {
          value: 0,
          writable: !1,
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(s.supportedLocalesOf, "length", {
          value: 1,
          writable: !1,
          enumerable: !1,
          configurable: !0
        })
      } catch (e) {}
    },
    26040: (e, n, t) => {
      Object.defineProperty(n, "__esModule", {
        value: !0
      });
      var r = t(31635).__importDefault(t(16313));
      Object.defineProperty(Intl, "ListFormat", {
        value: r.default,
        writable: !0,
        enumerable: !1,
        configurable: !0
      })
    },
    67295: (e, n, t) => {
      function r(e) {
        return Intl.getCanonicalLocales(e)
      }

      function i(e, n) {
        var t = n.zoneNames,
          r = n.uppercaseLinks,
          i = e.toUpperCase(),
          u = t.reduce(function(e, n) {
            return e[n.toUpperCase()] = n, e
          }, {}),
          a = r[i] || u[i];
        return "Etc/UTC" === a || "Etc/GMT" === a ? "UTC" : a
      }
      t.r(n), t.d(n, {
        ApplyUnsignedRoundingMode: () => Se,
        ArrayCreate: () => j,
        CanonicalizeLocaleList: () => r,
        CanonicalizeTimeZoneName: () => i,
        CoerceOptionsToObject: () => fe,
        CollapseNumberRange: () => Te,
        ComputeExponent: () => Be,
        ComputeExponentForMagnitude: () => Ce,
        CurrencyDigits: () => je,
        DateFromTime: () => J,
        Day: () => Z,
        DayFromYear: () => q,
        DayWithinYear: () => H,
        DaysInYear: () => $,
        FormatApproximately: () => $e,
        FormatNumeric: () => Ve,
        FormatNumericRange: () => Je,
        FormatNumericRangeToParts: () => Qe,
        FormatNumericToParts: () => Xe,
        FormatNumericToString: () => Pe,
        GetNumberOption: () => ge,
        GetOption: () => pe,
        GetOptionsObject: () => de,
        GetStringOrBooleanOption: () => ye,
        GetUnsignedRoundingMode: () => Oe,
        HasOwnProperty: () => k,
        HourFromTime: () => ie,
        InLeapYear: () => V,
        InitializeNumberFormat: () => on,
        IsSanctionedSimpleUnitIdentifier: () => be,
        IsValidTimeZoneName: () => Fe,
        IsWellFormedCurrencyCode: () => we,
        IsWellFormedUnitIdentifier: () => Ae,
        MinFromTime: () => ue,
        MonthFromTime: () => K,
        OrdinaryHasInstance: () => le,
        PartitionNumberPattern: () => He,
        PartitionNumberRangePattern: () => Ke,
        PartitionPattern: () => ln,
        RangePatternType: () => en,
        SANCTIONED_UNITS: () => ve,
        SIMPLE_UNITS: () => he,
        SameValue: () => B,
        SecFromTime: () => ae,
        SetNumberFormatDigitOptions: () => un,
        SetNumberFormatUnitOptions: () => an,
        SupportedLocales: () => cn,
        TimeClip: () => M,
        TimeFromYear: () => W,
        ToIntlMathematicalValue: () => fn,
        ToNumber: () => x,
        ToObject: () => P,
        ToPrimitive: () => se,
        ToRawFixed: () => xe,
        ToRawPrecision: () => Me,
        ToString: () => L,
        Type: () => R,
        WeekDay: () => G,
        YearFromTime: () => Y,
        ZERO: () => a,
        _formatToParts: () => Ge,
        createDataProperty: () => S,
        createMemoizedDateTimeFormat: () => C,
        createMemoizedListFormat: () => O,
        createMemoizedLocale: () => I,
        createMemoizedNumberFormat: () => T,
        createMemoizedPluralRules: () => N,
        defineProperty: () => A,
        getInternalSlot: () => F,
        getMultiInternalSlots: () => E,
        invariant: () => _,
        isLiteralPart: () => w,
        isMissingLocaleDataError: () => sn,
        msFromTime: () => ce,
        removeUnitNamespace: () => De,
        setInternalSlot: () => h,
        setMultiInternalSlots: () => b
      });
      var u = t(76582),
        a = (new u.A(10), new u.A(0)),
        o = new u.A(-0),
        l = t(31635);

      function c(e, n) {
        var t = n && n.cache ? n.cache : y,
          r = n && n.serializer ? n.serializer : p;
        return (n && n.strategy ? n.strategy : g)(e, {
          cache: t,
          serializer: r
        })
      }

      function s(e, n, t, r) {
        var i, u = null == (i = r) || "number" == typeof i || "boolean" == typeof i ? r : t(r),
          a = n.get(u);
        return void 0 === a && (a = e.call(this, r), n.set(u, a)), a
      }

      function f(e, n, t) {
        var r = Array.prototype.slice.call(arguments, 3),
          i = t(r),
          u = n.get(i);
        return void 0 === u && (u = e.apply(this, r), n.set(i, u)), u
      }

      function m(e, n, t, r, i) {
        return t.bind(n, e, r, i)
      }

      function g(e, n) {
        return m(e, this, 1 === e.length ? s : f, n.cache.create(), n.serializer)
      }
      var p = function() {
          return JSON.stringify(arguments)
        },
        d = function() {
          function e() {
            this.cache = Object.create(null)
          }
          return e.prototype.get = function(e) {
            return this.cache[e]
          }, e.prototype.set = function(e, n) {
            this.cache[e] = n
          }, e
        }(),
        y = {
          create: function() {
            return new d
          }
        },
        v = {
          variadic: function(e, n) {
            return m(e, this, f, n.cache.create(), n.serializer)
          },
          monadic: function(e, n) {
            return m(e, this, s, n.cache.create(), n.serializer)
          }
        };

      function D(e, n) {
        if ("function" == typeof e.repeat) return e.repeat(n);
        for (var t = new Array(n), r = 0; r < t.length; r++) t[r] = e;
        return t.join("")
      }

      function h(e, n, t, r) {
        e.get(n) || e.set(n, Object.create(null)), e.get(n)[t] = r
      }

      function b(e, n, t) {
        for (var r = 0, i = Object.keys(t); r < i.length; r++) {
          var u = i[r];
          h(e, n, u, t[u])
        }
      }

      function F(e, n, t) {
        return E(e, n, t)[t]
      }

      function E(e, n) {
        for (var t = [], r = 2; r < arguments.length; r++) t[r - 2] = arguments[r];
        var i = e.get(n);
        if (!i) throw new TypeError("".concat(n, " InternalSlot has not been initialized"));
        return t.reduce(function(e, n) {
          return e[n] = i[n], e
        }, Object.create(null))
      }

      function w(e) {
        return "literal" === e.type
      }

      function A(e, n, t) {
        var r = t.value;
        Object.defineProperty(e, n, {
          configurable: !0,
          enumerable: !1,
          writable: !0,
          value: r
        })
      }

      function S(e, n, t) {
        Object.defineProperty(e, n, {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          value: t
        })
      }

      function _(e, n, t) {
        if (void 0 === t && (t = Error), !e) throw new t(n)
      }
      var T = c(function() {
          for (var e, n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];
          return new((e = Intl.NumberFormat).bind.apply(e, (0, l.__spreadArray)([void 0], n, !1)))
        }, {
          strategy: v.variadic
        }),
        C = c(function() {
          for (var e, n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];
          return new((e = Intl.DateTimeFormat).bind.apply(e, (0, l.__spreadArray)([void 0], n, !1)))
        }, {
          strategy: v.variadic
        }),
        N = c(function() {
          for (var e, n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];
          return new((e = Intl.PluralRules).bind.apply(e, (0, l.__spreadArray)([void 0], n, !1)))
        }, {
          strategy: v.variadic
        }),
        I = c(function() {
          for (var e, n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];
          return new((e = Intl.Locale).bind.apply(e, (0, l.__spreadArray)([void 0], n, !1)))
        }, {
          strategy: v.variadic
        }),
        O = c(function() {
          for (var e, n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];
          return new((e = Intl.ListFormat).bind.apply(e, (0, l.__spreadArray)([void 0], n, !1)))
        }, {
          strategy: v.variadic
        });

      function L(e) {
        if ("symbol" == typeof e) throw TypeError("Cannot convert a Symbol value to a string");
        return String(e)
      }

      function x(e) {
        if ("number" == typeof e) return new u.W(e);
        if (_("bigint" != typeof e && "symbol" != typeof e, "BigInt and Symbol are not supported", TypeError), void 0 === e) return new u.W(NaN);
        if (null === e || 0 === e) return a;
        if (!0 === e) return new u.W(1);
        if ("string" == typeof e) try {
          return new u.W(e)
        } catch (e) {
          return new u.W(NaN)
        }
        _("object" == typeof e, "object expected", TypeError);
        var n = se(e, "number");
        return _("object" != typeof n, "object expected", TypeError), x(n)
      }

      function M(e) {
        return e.isFinite() ? e.abs().greaterThan(8640000000000001) ? new u.W(NaN) : function(e) {
          var n = x(e);
          if (n.isNaN() || n.isZero()) return a;
          if (n.isFinite()) return n;
          var t = n.abs().floor();
          return n.isNegative() && (t = t.negated()), t
        }(e) : new u.W(NaN)
      }

      function P(e) {
        if (null == e) throw new TypeError("undefined/null cannot be converted to object");
        return Object(e)
      }

      function B(e, n) {
        return Object.is ? Object.is(e, n) : e === n ? 0 !== e || 1 / e == 1 / n : e != e && n != n
      }

      function j(e) {
        return new Array(e)
      }

      function k(e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
      }

      function R(e) {
        return null === e ? "Null" : void 0 === e ? "Undefined" : "function" == typeof e || "object" == typeof e ? "Object" : "number" == typeof e ? "Number" : "boolean" == typeof e ? "Boolean" : "string" == typeof e ? "String" : "symbol" == typeof e ? "Symbol" : "bigint" == typeof e ? "BigInt" : void 0
      }
      var z = 864e5;

      function U(e, n) {
        return e - Math.floor(e / n) * n
      }

      function Z(e) {
        return Math.floor(e / z)
      }

      function G(e) {
        return U(Z(e) + 4, 7)
      }

      function q(e) {
        return Date.UTC(e, 0) / z
      }

      function W(e) {
        return Date.UTC(e, 0)
      }

      function Y(e) {
        return new Date(e).getUTCFullYear()
      }

      function $(e) {
        return e % 4 != 0 ? 365 : e % 100 != 0 ? 366 : e % 400 != 0 ? 365 : 366
      }

      function H(e) {
        return Z(e) - q(Y(e))
      }

      function V(e) {
        return 365 === $(Y(e)) ? 0 : 1
      }

      function K(e) {
        var n = H(e),
          t = V(e);
        if (n >= 0 && n < 31) return 0;
        if (n < 59 + t) return 1;
        if (n < 90 + t) return 2;
        if (n < 120 + t) return 3;
        if (n < 151 + t) return 4;
        if (n < 181 + t) return 5;
        if (n < 212 + t) return 6;
        if (n < 243 + t) return 7;
        if (n < 273 + t) return 8;
        if (n < 304 + t) return 9;
        if (n < 334 + t) return 10;
        if (n < 365 + t) return 11;
        throw new Error("Invalid time")
      }

      function J(e) {
        var n = H(e),
          t = K(e),
          r = V(e);
        if (0 === t) return n + 1;
        if (1 === t) return n - 30;
        if (2 === t) return n - 58 - r;
        if (3 === t) return n - 89 - r;
        if (4 === t) return n - 119 - r;
        if (5 === t) return n - 150 - r;
        if (6 === t) return n - 180 - r;
        if (7 === t) return n - 211 - r;
        if (8 === t) return n - 242 - r;
        if (9 === t) return n - 272 - r;
        if (10 === t) return n - 303 - r;
        if (11 === t) return n - 333 - r;
        throw new Error("Invalid time")
      }
      var Q = 24,
        X = 60,
        ee = 60,
        ne = 1e3,
        te = ne * ee,
        re = te * X;

      function ie(e) {
        return U(Math.floor(e / re), Q)
      }

      function ue(e) {
        return U(Math.floor(e / te), X)
      }

      function ae(e) {
        return U(Math.floor(e / ne), ee)
      }

      function oe(e) {
        return "function" == typeof e
      }

      function le(e, n, t) {
        if (!oe(e)) return !1;
        if (null == t ? void 0 : t.boundTargetFunction) return n instanceof(null == t ? void 0 : t.boundTargetFunction);
        if ("object" != typeof n) return !1;
        var r = e.prototype;
        if ("object" != typeof r) throw new TypeError("OrdinaryHasInstance called on an object with an invalid prototype property.");
        return Object.prototype.isPrototypeOf.call(r, n)
      }

      function ce(e) {
        return U(e, ne)
      }

      function se(e, n) {
        if ("object" == typeof e && null != e) {
          var t = Symbol.toPrimitive in e ? e[Symbol.toPrimitive] : void 0,
            r = void 0;
          if (void 0 !== t) {
            void 0 === n ? r = "default" : "string" === n ? r = "string" : (_("number" === n, 'preferredType must be "string" or "number"'), r = "number");
            var i = t.call(e, r);
            if ("object" != typeof i) return i;
            throw new TypeError("Cannot convert exotic object to primitive.")
          }
          return void 0 === n && (n = "number"),
            function(e, n) {
              for (var t = 0, r = "string" === n ? ["toString", "valueOf"] : ["valueOf", "toString"]; t < r.length; t++) {
                var i = e[r[t]];
                if (oe(i)) {
                  var u = i.call(e);
                  if ("object" != typeof u) return u
                }
              }
              throw new TypeError("Cannot convert object to primitive value")
            }(e, n)
        }
        return e
      }

      function fe(e) {
        return void 0 === e ? Object.create(null) : P(e)
      }

      function me(e, n, t, r) {
        if (void 0 === e) return r;
        var i = Number(e);
        if (isNaN(i) || i < n || i > t) throw new RangeError("".concat(i, " is outside of range [").concat(n, ", ").concat(t, "]"));
        return Math.floor(i)
      }

      function ge(e, n, t, r, i) {
        return me(e[n], t, r, i)
      }

      function pe(e, n, t, r, i) {
        if ("object" != typeof e) throw new TypeError("Options must be an object");
        var u = e[n];
        if (void 0 !== u) {
          if ("boolean" !== t && "string" !== t) throw new TypeError("invalid type");
          if ("boolean" === t && (u = Boolean(u)), "string" === t && (u = L(u)), void 0 !== r && !r.filter(function(e) {
              return e == u
            }).length) throw new RangeError("".concat(u, " is not within ").concat(r.join(", ")));
          return u
        }
        return i
      }

      function de(e) {
        if (void 0 === e) return Object.create(null);
        if ("object" == typeof e) return e;
        throw new TypeError("Options must be an object")
      }

      function ye(e, n, t, r, i, u) {
        var a = e[n];
        if (void 0 === a) return u;
        if (!0 === a) return r;
        if (!1 === Boolean(a)) return i;
        if ("true" === (a = L(a)) || "false" === a) return u;
        if (-1 === (t || []).indexOf(a)) throw new RangeError("Invalid value ".concat(a));
        return a
      }
      var ve = ["angle-degree", "area-acre", "area-hectare", "concentr-percent", "digital-bit", "digital-byte", "digital-gigabit", "digital-gigabyte", "digital-kilobit", "digital-kilobyte", "digital-megabit", "digital-megabyte", "digital-petabyte", "digital-terabit", "digital-terabyte", "duration-day", "duration-hour", "duration-millisecond", "duration-minute", "duration-month", "duration-second", "duration-week", "duration-year", "length-centimeter", "length-foot", "length-inch", "length-kilometer", "length-meter", "length-mile-scandinavian", "length-mile", "length-millimeter", "length-yard", "mass-gram", "mass-kilogram", "mass-ounce", "mass-pound", "mass-stone", "temperature-celsius", "temperature-fahrenheit", "volume-fluid-ounce", "volume-gallon", "volume-liter", "volume-milliliter"];

      function De(e) {
        return e.slice(e.indexOf("-") + 1)
      }
      var he = ve.map(De);

      function be(e) {
        return he.indexOf(e) > -1
      }

      function Fe(e, n) {
        var t = n.zoneNamesFromData,
          r = n.uppercaseLinks,
          i = e.toUpperCase(),
          u = new Set,
          a = new Set;
        return t.map(function(e) {
          return e.toUpperCase()
        }).forEach(function(e) {
          return u.add(e)
        }), Object.keys(r).forEach(function(e) {
          a.add(e.toUpperCase()), u.add(r[e].toUpperCase())
        }), u.has(i) || a.has(i)
      }
      var Ee = /[^A-Z]/;

      function we(e) {
        return 3 === (e = e.replace(/([a-z])/g, function(e, n) {
          return n.toUpperCase()
        })).length && !Ee.test(e)
      }

      function Ae(e) {
        if (be(e = e.replace(/([A-Z])/g, function(e, n) {
            return n.toLowerCase()
          }))) return !0;
        var n = e.split("-per-");
        if (2 !== n.length) return !1;
        var t = n[0],
          r = n[1];
        return !(!be(t) || !be(r))
      }

      function Se(e, n, t, r) {
        if (e.eq(n)) return n;
        if (_(n.lessThan(e) && e.lessThan(t), "x should be between r1 and r2 but x=".concat(e, ", r1=").concat(n, ", r2=").concat(t)), "zero" === r) return n;
        if ("infinity" === r) return t;
        var i = e.minus(n),
          u = t.minus(e);
        return i.lessThan(u) ? n : u.lessThan(i) ? t : (_(i.eq(u), "d1 should be equal to d2"), "half-zero" === r ? n : "half-infinity" === r ? t : (_("half-even" === r, "unsignedRoundingMode should be half-even"), n.div(t.minus(n)).mod(2).isZero() ? n : t))
      }
      var _e = new Set(["unit", "exponentMinusSign", "minusSign", "plusSign", "percentSign", "exponentSeparator", "percent", "percentSign", "currency", "literal"]);

      function Te(e, n, t) {
        for (var r = (0, t.getInternalSlots)(e), i = r.dataLocaleData.numbers.symbols[r.numberingSystem], u = new RegExp("s?[".concat(i.rangeSign, "]s?")), a = n.findIndex(function(e) {
            return "literal" === e.type && u.test(e.value)
          }), o = [], l = a - 1; l >= 0 && _e.has(n[l].type); l--) o.unshift(n[l]);
        if (Array.from(o.map(function(e) {
            return e.value
          }).join("")).length > 1) return (c = Array.from(n)).splice(a - o.length, o.length), c;
        var c, s = [];
        for (l = a + 1; l < n.length && _e.has(n[l].type); l++) s.push(n[l]);
        return Array.from(s.map(function(e) {
          return e.value
        }).join("")).length > 1 ? ((c = Array.from(n)).splice(a + 1, s.length), c) : n
      }

      function Ce(e, n) {
        var t = e.notation,
          r = e.dataLocaleData,
          i = e.numberingSystem;
        switch (t) {
          case "standard":
            return 0;
          case "scientific":
            return n.toNumber();
          case "engineering":
            return n.div(3).floor().times(3).toNumber();
          default:
            _("compact" === t, "Invalid notation");
            var a = e.compactDisplay,
              o = e.style,
              l = e.currencyDisplay,
              c = void 0;
            if ("currency" === o && "name" !== l) c = (r.numbers.currency[i] || r.numbers.currency[r.numbers.nu[0]]).short;
            else {
              var s = r.numbers.decimal[i] || r.numbers.decimal[r.numbers.nu[0]];
              c = "long" === a ? s.long : s.short
            }
            if (!c) return 0;
            var f = u.A.pow(10, n).toString(),
              m = Object.keys(c);
            if (f < m[0]) return 0;
            if (f > m[m.length - 1]) return m[m.length - 1].length - 1;
            var g = m.indexOf(f);
            if (-1 === g) return 0;
            var p = m[g];
            return "0" === c[p].other ? 0 : p.length - c[p].other.match(/0+/)[0].length
        }
      }
      u.A.set({
        toExpPos: 100
      });
      var Ne = {
          ceil: "zero",
          floor: "infinity",
          expand: "infinity",
          trunc: "zero",
          halfCeil: "half-zero",
          halfFloor: "half-infinity",
          halfExpand: "half-infinity",
          halfTrunc: "half-zero",
          halfEven: "half-even"
        },
        Ie = {
          ceil: "infinity",
          floor: "zero",
          expand: "infinity",
          trunc: "zero",
          halfCeil: "half-infinity",
          halfFloor: "half-zero",
          halfExpand: "half-infinity",
          halfTrunc: "half-zero",
          halfEven: "half-even"
        };

      function Oe(e, n) {
        return n ? Ne[e] : Ie[e]
      }

      function Le(e, n) {
        return e.times(u.A.pow(10, -n))
      }

      function xe(e, n, t, r, i) {
        var a, o, l, c, s = t,
          f = function(e, n, t) {
            var r = e.times(u.A.pow(10, n)).floor().div(t).floor().times(t);
            return {
              n1: r,
              r1: Le(r, n)
            }
          }(e, s, r),
          m = f.n1,
          g = f.r1,
          p = function(e, n, t) {
            var r = e.times(u.A.pow(10, n)).ceil().div(t).ceil().times(t);
            return {
              n2: r,
              r2: Le(r, n)
            }
          }(e, s, r),
          d = p.n2,
          y = p.r2;
        if (Se(e, g, y, i).eq(g) ? (a = m, o = g) : (a = d, o = y), l = a.isZero() ? "0" : a.toString(), 0 !== s) {
          var v = l.length;
          v <= s && (l = D("0", s - v + 1) + l, v = s + 1);
          var h = l.slice(0, v - s),
            b = l.slice(l.length - s);
          l = h + "." + b, c = h.length
        } else c = l.length;
        for (var F = t - n; F > 0 && "0" === l[l.length - 1];) l = l.slice(0, l.length - 1), F--;
        return "." === l[l.length - 1] && (l = l.slice(0, l.length - 1)), {
          formattedString: l,
          roundedNumber: o,
          integerDigitsCount: c,
          roundingMagnitude: -s
        }
      }

      function Me(e, n, t, r) {
        var i, o, l, c, s = t;
        if (e.isZero()) i = D("0", s), o = 0, l = a;
        else {
          var f = function(e, n) {
              for (var t = u.A.pow(10, n), r = u.A.pow(10, n - 1), i = e.div(r).log(10).plus(n).minus(1).ceil();;) {
                var a = e.div(u.A.pow(10, i.minus(n).plus(1))).floor();
                if (a.lessThan(t) && a.greaterThanOrEqualTo(r)) {
                  var o = a.times(u.A.pow(10, i.minus(n).plus(1)));
                  if (o.lessThanOrEqualTo(e)) return {
                    n1: a,
                    e1: i,
                    r1: o
                  }
                }
                i = i.minus(1)
              }
            }(e, s),
            m = f.n1,
            g = f.e1,
            p = f.r1,
            d = function(e, n) {
              for (var t = u.A.pow(10, n), r = u.A.pow(10, n - 1), i = e.div(t).log(10).plus(n).minus(1).floor();;) {
                var a = e.div(u.A.pow(10, i.minus(n).plus(1))).ceil();
                if (a.lessThan(t) && a.greaterThanOrEqualTo(r)) {
                  var o = a.times(u.A.pow(10, i.minus(n).plus(1)));
                  if (o.greaterThanOrEqualTo(e)) return {
                    n2: a,
                    e2: i,
                    r2: o
                  }
                }
                i = i.plus(1)
              }
            }(e, s),
            y = d.n2,
            v = d.e2,
            h = d.r2,
            b = void 0;
          Se(e, p, h, r).eq(p) ? (b = m, o = g.toNumber(), l = p) : (b = y, o = v.toNumber(), l = h), i = b.toString()
        }
        if (o >= s - 1 ? (i += D("0", o - s + 1), c = o + 1) : o >= 0 ? (i = i.slice(0, o + 1) + "." + i.slice(i.length - (s - (o + 1))), c = o + 1) : (_(o < 0, "e should be less than 0"), i = "0." + D("0", -o - 1) + i, c = 1), i.includes(".") && t > n) {
          for (var F = t - n; F > 0 && "0" === i[i.length - 1];) i = i.slice(0, i.length - 1), F--;
          "." === i[i.length - 1] && (i = i.slice(0, i.length - 1))
        }
        return {
          formattedString: i,
          roundedNumber: l,
          integerDigitsCount: c,
          roundingMagnitude: o
        }
      }

      function Pe(e, n) {
        var t, r, i = n;
        i.isZero() && i.isNegative() ? (t = "negative", i = a) : (_(i.isFinite(), "NumberFormatDigitInternalSlots value is not finite"), "negative" == (t = i.lessThan(0) ? "negative" : "positive") && (i = i.negated()));
        var u = e.roundingType,
          l = Oe(e.roundingMode, "negative" === t);
        switch (u) {
          case "significantDigits":
            r = Me(i, e.minimumSignificantDigits, e.maximumSignificantDigits, l);
            break;
          case "fractionDigits":
            r = xe(i, e.minimumFractionDigits, e.maximumFractionDigits, e.roundingIncrement, l);
            break;
          default:
            var c = Me(i, e.minimumSignificantDigits, e.maximumSignificantDigits, l),
              s = xe(i, e.minimumFractionDigits, e.maximumFractionDigits, e.roundingIncrement, l);
            "morePrecision" === e.roundingType ? r = c.roundingMagnitude <= s.roundingMagnitude ? c : s : (_("lessPrecision" === e.roundingType, "Invalid roundingType"), r = c.roundingMagnitude <= s.roundingMagnitude ? s : c)
        }
        i = r.roundedNumber;
        var f = r.formattedString;
        if ("stripIfInteger" === e.trailingZeroDisplay && i.isInteger()) {
          var m = f.indexOf(".");
          m > -1 && (f = f.slice(0, m))
        }
        var g = r.integerDigitsCount,
          p = e.minimumIntegerDigits;
        return g < p && (f = D("0", p - g) + f), "negative" === t && (i = i.isZero() ? o : i.negated()), {
          roundedNumber: i,
          formattedString: f
        }
      }

      function Be(e, n) {
        if (n.isZero()) return [0, 0];
        n.isNegative() && (n = n.negated());
        var t = n.log(10).floor(),
          r = Ce(e, t),
          i = Pe(e, n = n.times(u.A.pow(10, -r)));
        return i.roundedNumber.isZero() || i.roundedNumber.log(10).floor().eq(t.minus(r)) ? [r, t.toNumber()] : [Ce(e, t.plus(1)), t.plus(1).toNumber()]
      }

      function je(e, n) {
        var t = n.currencyDigitsData;
        return k(t, e) ? t[e] : 2
      }
      u.A.set({
        toExpPos: 100
      });
      var ke = /[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20BF\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC1\uFDFC\uFDFD\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDE8\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEE0-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF73\uDF80-\uDFD8\uDFE0-\uDFEB]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDD78\uDD7A-\uDDCB\uDDCD-\uDE53\uDE60-\uDE6D\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6\uDF00-\uDF92\uDF94-\uDFCA]/,
        Re = {
          adlm: ["𞥐", "𞥑", "𞥒", "𞥓", "𞥔", "𞥕", "𞥖", "𞥗", "𞥘", "𞥙"],
          ahom: ["𑜰", "𑜱", "𑜲", "𑜳", "𑜴", "𑜵", "𑜶", "𑜷", "𑜸", "𑜹"],
          arab: ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"],
          arabext: ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"],
          bali: ["᭐", "᭑", "᭒", "᭓", "᭔", "᭕", "᭖", "᭗", "᭘", "᭙"],
          beng: ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"],
          bhks: ["𑱐", "𑱑", "𑱒", "𑱓", "𑱔", "𑱕", "𑱖", "𑱗", "𑱘", "𑱙"],
          brah: ["𑁦", "𑁧", "𑁨", "𑁩", "𑁪", "𑁫", "𑁬", "𑁭", "𑁮", "𑁯"],
          cakm: ["𑄶", "𑄷", "𑄸", "𑄹", "𑄺", "𑄻", "𑄼", "𑄽", "𑄾", "𑄿"],
          cham: ["꩐", "꩑", "꩒", "꩓", "꩔", "꩕", "꩖", "꩗", "꩘", "꩙"],
          deva: ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"],
          diak: ["𑥐", "𑥑", "𑥒", "𑥓", "𑥔", "𑥕", "𑥖", "𑥗", "𑥘", "𑥙"],
          fullwide: ["０", "１", "２", "３", "４", "５", "６", "７", "８", "９"],
          gong: ["𑶠", "𑶡", "𑶢", "𑶣", "𑶤", "𑶥", "𑶦", "𑶧", "𑶨", "𑶩"],
          gonm: ["𑵐", "𑵑", "𑵒", "𑵓", "𑵔", "𑵕", "𑵖", "𑵗", "𑵘", "𑵙"],
          gujr: ["૦", "૧", "૨", "૩", "૪", "૫", "૬", "૭", "૮", "૯"],
          guru: ["੦", "੧", "੨", "੩", "੪", "੫", "੬", "੭", "੮", "੯"],
          hanidec: ["〇", "一", "二", "三", "四", "五", "六", "七", "八", "九"],
          hmng: ["𖭐", "𖭑", "𖭒", "𖭓", "𖭔", "𖭕", "𖭖", "𖭗", "𖭘", "𖭙"],
          hmnp: ["𞅀", "𞅁", "𞅂", "𞅃", "𞅄", "𞅅", "𞅆", "𞅇", "𞅈", "𞅉"],
          java: ["꧐", "꧑", "꧒", "꧓", "꧔", "꧕", "꧖", "꧗", "꧘", "꧙"],
          kali: ["꤀", "꤁", "꤂", "꤃", "꤄", "꤅", "꤆", "꤇", "꤈", "꤉"],
          khmr: ["០", "១", "២", "៣", "៤", "៥", "៦", "៧", "៨", "៩"],
          knda: ["೦", "೧", "೨", "೩", "೪", "೫", "೬", "೭", "೮", "೯"],
          lana: ["᪀", "᪁", "᪂", "᪃", "᪄", "᪅", "᪆", "᪇", "᪈", "᪉"],
          lanatham: ["᪐", "᪑", "᪒", "᪓", "᪔", "᪕", "᪖", "᪗", "᪘", "᪙"],
          laoo: ["໐", "໑", "໒", "໓", "໔", "໕", "໖", "໗", "໘", "໙"],
          lepc: ["᪐", "᪑", "᪒", "᪓", "᪔", "᪕", "᪖", "᪗", "᪘", "᪙"],
          limb: ["᥆", "᥇", "᥈", "᥉", "᥊", "᥋", "᥌", "᥍", "᥎", "᥏"],
          mathbold: ["𝟎", "𝟏", "𝟐", "𝟑", "𝟒", "𝟓", "𝟔", "𝟕", "𝟖", "𝟗"],
          mathdbl: ["𝟘", "𝟙", "𝟚", "𝟛", "𝟜", "𝟝", "𝟞", "𝟟", "𝟠", "𝟡"],
          mathmono: ["𝟶", "𝟷", "𝟸", "𝟹", "𝟺", "𝟻", "𝟼", "𝟽", "𝟾", "𝟿"],
          mathsanb: ["𝟬", "𝟭", "𝟮", "𝟯", "𝟰", "𝟱", "𝟲", "𝟳", "𝟴", "𝟵"],
          mathsans: ["𝟢", "𝟣", "𝟤", "𝟥", "𝟦", "𝟧", "𝟨", "𝟩", "𝟪", "𝟫"],
          mlym: ["൦", "൧", "൨", "൩", "൪", "൫", "൬", "൭", "൮", "൯"],
          modi: ["𑙐", "𑙑", "𑙒", "𑙓", "𑙔", "𑙕", "𑙖", "𑙗", "𑙘", "𑙙"],
          mong: ["᠐", "᠑", "᠒", "᠓", "᠔", "᠕", "᠖", "᠗", "᠘", "᠙"],
          mroo: ["𖩠", "𖩡", "𖩢", "𖩣", "𖩤", "𖩥", "𖩦", "𖩧", "𖩨", "𖩩"],
          mtei: ["꯰", "꯱", "꯲", "꯳", "꯴", "꯵", "꯶", "꯷", "꯸", "꯹"],
          mymr: ["၀", "၁", "၂", "၃", "၄", "၅", "၆", "၇", "၈", "၉"],
          mymrshan: ["႐", "႑", "႒", "႓", "႔", "႕", "႖", "႗", "႘", "႙"],
          mymrtlng: ["꧰", "꧱", "꧲", "꧳", "꧴", "꧵", "꧶", "꧷", "꧸", "꧹"],
          newa: ["𑑐", "𑑑", "𑑒", "𑑓", "𑑔", "𑑕", "𑑖", "𑑗", "𑑘", "𑑙"],
          nkoo: ["߀", "߁", "߂", "߃", "߄", "߅", "߆", "߇", "߈", "߉"],
          olck: ["᱐", "᱑", "᱒", "᱓", "᱔", "᱕", "᱖", "᱗", "᱘", "᱙"],
          orya: ["୦", "୧", "୨", "୩", "୪", "୫", "୬", "୭", "୮", "୯"],
          osma: ["𐒠", "𐒡", "𐒢", "𐒣", "𐒤", "𐒥", "𐒦", "𐒧", "𐒨", "𐒩"],
          rohg: ["𐴰", "𐴱", "𐴲", "𐴳", "𐴴", "𐴵", "𐴶", "𐴷", "𐴸", "𐴹"],
          saur: ["꣐", "꣑", "꣒", "꣓", "꣔", "꣕", "꣖", "꣗", "꣘", "꣙"],
          segment: ["🯰", "🯱", "🯲", "🯳", "🯴", "🯵", "🯶", "🯷", "🯸", "🯹"],
          shrd: ["𑇐", "𑇑", "𑇒", "𑇓", "𑇔", "𑇕", "𑇖", "𑇗", "𑇘", "𑇙"],
          sind: ["𑋰", "𑋱", "𑋲", "𑋳", "𑋴", "𑋵", "𑋶", "𑋷", "𑋸", "𑋹"],
          sinh: ["෦", "෧", "෨", "෩", "෪", "෫", "෬", "෭", "෮", "෯"],
          sora: ["𑃰", "𑃱", "𑃲", "𑃳", "𑃴", "𑃵", "𑃶", "𑃷", "𑃸", "𑃹"],
          sund: ["᮰", "᮱", "᮲", "᮳", "᮴", "᮵", "᮶", "᮷", "᮸", "᮹"],
          takr: ["𑛀", "𑛁", "𑛂", "𑛃", "𑛄", "𑛅", "𑛆", "𑛇", "𑛈", "𑛉"],
          talu: ["᧐", "᧑", "᧒", "᧓", "᧔", "᧕", "᧖", "᧗", "᧘", "᧙"],
          tamldec: ["௦", "௧", "௨", "௩", "௪", "௫", "௬", "௭", "௮", "௯"],
          telu: ["౦", "౧", "౨", "౩", "౪", "౫", "౬", "౭", "౮", "౯"],
          thai: ["๐", "๑", "๒", "๓", "๔", "๕", "๖", "๗", "๘", "๙"],
          tibt: ["༠", "༡", "༢", "༣", "༤", "༥", "༦", "༧", "༨", "༩"],
          tirh: ["𑓐", "𑓑", "𑓒", "𑓓", "𑓔", "𑓕", "𑓖", "𑓗", "𑓘", "𑓙"],
          vaii: ["ᘠ", "ᘡ", "ᘢ", "ᘣ", "ᘤ", "ᘥ", "ᘦ", "ᘧ", "ᘨ", "ᘩ"],
          wara: ["𑣠", "𑣡", "𑣢", "𑣣", "𑣤", "𑣥", "𑣦", "𑣧", "𑣨", "𑣩"],
          wcho: ["𞋰", "𞋱", "𞋲", "𞋳", "𞋴", "𞋵", "𞋶", "𞋷", "𞋸", "𞋹"]
        },
        ze = new RegExp("^".concat(ke.source)),
        Ue = new RegExp("".concat(ke.source, "$")),
        Ze = /[#0](?:[\.,][#0]+)*/g;

      function Ge(e, n, t, r) {
        var i, a, o, l = e.sign,
          c = e.exponent,
          s = e.magnitude,
          f = r.notation,
          m = r.style,
          g = r.numberingSystem,
          p = n.numbers.nu[0],
          d = null;
        if ("compact" === f && s && (d = function(e, n, t, r, i, u, a) {
            var o, l, c = e.roundedNumber,
              s = e.sign,
              f = e.magnitude,
              m = String(Math.pow(10, f)),
              g = t.numbers.nu[0];
            if ("currency" === r && "name" !== u) {
              var p = null === (o = ((d = t.numbers.currency)[a] || d[g]).short) || void 0 === o ? void 0 : o[m];
              if (!p) return null;
              l = Ye(n, c.toNumber(), p)
            } else {
              var d, y = ((d = t.numbers.decimal)[a] || d[g])[i][m];
              if (!y) return null;
              l = Ye(n, c.toNumber(), y)
            }
            return "0" === l ? null : l = We(l, s).replace(/([^\s;\-\+\d¤]+)/g, "{c:$1}").replace(/0+/, "0")
          }(e, t, n, m, r.compactDisplay, r.currencyDisplay, g)), "currency" === m && "name" !== r.currencyDisplay) {
          var y = n.currencies[r.currency];
          if (y) switch (r.currencyDisplay) {
            case "code":
              a = r.currency;
              break;
            case "symbol":
              a = y.symbol;
              break;
            default:
              a = y.narrow
          } else a = r.currency
        }
        o = d || ("decimal" === m || "unit" === m || "currency" === m && "name" === r.currencyDisplay ? We((n.numbers.decimal[g] || n.numbers.decimal[p]).standard, l) : We("currency" === m ? (D = n.numbers.currency[g] || n.numbers.currency[p])[r.currencySign] : n.numbers.percent[g] || n.numbers.percent[p], l));
        var v = Ze.exec(o)[0];
        if (o = o.replace(Ze, "{0}").replace(/'(.)'/g, "$1"), "currency" === m && "name" !== r.currencyDisplay) {
          var D, h = (D = n.numbers.currency[g] || n.numbers.currency[p]).currencySpacing.afterInsertBetween;
          h && !Ue.test(a) && (o = o.replace("¤{0}", "¤".concat(h, "{0}")));
          var b = D.currencySpacing.beforeInsertBetween;
          b && !ze.test(a) && (o = o.replace("{0}¤", "{0}".concat(b, "¤")))
        }
        for (var F = o.split(/({c:[^}]+}|\{0\}|[¤%\-\+])/g), E = [], w = n.numbers.symbols[g] || n.numbers.symbols[p], A = 0, S = F; A < S.length; A++)
          if (q = S[A]) switch (q) {
            case "{0}":
              E.push.apply(E, qe(w, e, f, c, g, !d && (null === (i = r.useGrouping) || void 0 === i || i), v, m, r.roundingIncrement, Oe(r.roundingMode, -1 === l)));
              break;
            case "-":
              E.push({
                type: "minusSign",
                value: w.minusSign
              });
              break;
            case "+":
              E.push({
                type: "plusSign",
                value: w.plusSign
              });
              break;
            case "%":
              E.push({
                type: "percentSign",
                value: w.percentSign
              });
              break;
            case "¤":
              E.push({
                type: "currency",
                value: a
              });
              break;
            default:
              /^\{c:/.test(q) ? E.push({
                type: "compact",
                value: q.substring(3, q.length - 1)
              }) : E.push({
                type: "literal",
                value: q
              })
          }
        switch (m) {
          case "currency":
            if ("name" === r.currencyDisplay) {
              var _, T = (n.numbers.currency[g] || n.numbers.currency[p]).unitPattern,
                C = n.currencies[r.currency];
              _ = C ? Ye(t, e.roundedNumber.times(u.A.pow(10, c)).toNumber(), C.displayName) : r.currency;
              for (var N = [], I = 0, O = T.split(/(\{[01]\})/g); I < O.length; I++) switch (q = O[I]) {
                case "{0}":
                  N.push.apply(N, E);
                  break;
                case "{1}":
                  N.push({
                    type: "currency",
                    value: _
                  });
                  break;
                default:
                  q && N.push({
                    type: "literal",
                    value: q
                  })
              }
              return N
            }
            return E;
          case "unit":
            var L = r.unit,
              x = r.unitDisplay,
              M = n.units.simple[L];
            if (T = void 0, M) T = Ye(t, e.roundedNumber.times(u.A.pow(10, c)).toNumber(), n.units.simple[L][x]);
            else {
              var P = L.split("-per-"),
                B = P[0],
                j = P[1];
              M = n.units.simple[B];
              var k = Ye(t, e.roundedNumber.times(u.A.pow(10, c)).toNumber(), n.units.simple[B][x]),
                R = n.units.simple[j].perUnit[x];
              if (R) T = R.replace("{0}", k);
              else {
                var z = n.units.compound.per[x],
                  U = Ye(t, 1, n.units.simple[j][x]);
                T = T = z.replace("{0}", k).replace("{1}", U.replace("{0}", ""))
              }
            }
            N = [];
            for (var Z = 0, G = T.split(/(\s*\{0\}\s*)/); Z < G.length; Z++) {
              var q = G[Z],
                W = /^(\s*)\{0\}(\s*)$/.exec(q);
              W ? (W[1] && N.push({
                type: "literal",
                value: W[1]
              }), N.push.apply(N, E), W[2] && N.push({
                type: "literal",
                value: W[2]
              })) : q && N.push({
                type: "unit",
                value: q
              })
            }
            return N;
          default:
            return E
        }
      }

      function qe(e, n, t, r, i, a, o, l, c, s) {
        var f = [],
          m = n.formattedString,
          g = n.roundedNumber;
        if (g.isNaN()) return [{
          type: "nan",
          value: m
        }];
        if (!g.isFinite()) return [{
          type: "infinity",
          value: m
        }];
        var p = Re[i];
        p && (m = m.replace(/\d/g, function(e) {
          return p[+e] || e
        }));
        var d, y, v = m.indexOf(".");
        v > 0 ? (d = m.slice(0, v), y = m.slice(v + 1)) : d = m;
        var D = !1;
        if ("always" === a ? D = !0 : "min2" === a ? D = g.greaterThanOrEqualTo(1e4) : ("auto" === a || a) && (D = "compact" !== t || g.greaterThanOrEqualTo(1e4)), D) {
          var h = "currency" === l && null != e.currencyGroup ? e.currencyGroup : e.group,
            b = [],
            F = o.split(".")[0].split(","),
            E = 3,
            w = 3;
          F.length > 1 && (E = F[F.length - 1].length), F.length > 2 && (w = F[F.length - 2].length);
          var A = d.length - E;
          if (A > 0) {
            for (b.push(d.slice(A, A + E)), A -= w; A > 0; A -= w) b.push(d.slice(A, A + w));
            b.push(d.slice(0, A + w))
          } else b.push(d);
          for (; b.length > 0;) {
            var S = b.pop();
            f.push({
              type: "integer",
              value: S
            }), b.length > 0 && f.push({
              type: "group",
              value: h
            })
          }
        } else f.push({
          type: "integer",
          value: d
        });
        if (void 0 !== y) {
          var _ = "currency" === l && null != e.currencyDecimal ? e.currencyDecimal : e.decimal;
          f.push({
            type: "decimal",
            value: _
          }, {
            type: "fraction",
            value: y
          })
        }
        if (("scientific" === t || "engineering" === t) && g.isFinite()) {
          f.push({
            type: "exponentSeparator",
            value: e.exponential
          }), r < 0 && (f.push({
            type: "exponentMinusSign",
            value: e.minusSign
          }), r = -r);
          var T = xe(new u.A(r), 0, 0, c, s);
          f.push({
            type: "exponentInteger",
            value: T.formattedString
          })
        }
        return f
      }

      function We(e, n) {
        e.indexOf(";") < 0 && (e = "".concat(e, ";-").concat(e));
        var t = e.split(";"),
          r = t[0],
          i = t[1];
        switch (n) {
          case 0:
            return r;
          case -1:
            return i;
          default:
            return i.indexOf("-") >= 0 ? i.replace(/-/g, "+") : "+".concat(r)
        }
      }

      function Ye(e, n, t) {
        return t[e.select(n)] || t.other
      }

      function $e(e, n) {
        var t = e.dataLocaleData.numbers.symbols[e.numberingSystem].approximatelySign;
        return n.push({
          type: "approximatelySign",
          value: t
        }), n
      }

      function He(e, n) {
        var t, r, i, a = n,
          o = 0,
          l = e.pl,
          c = e.dataLocaleData,
          s = e.numberingSystem,
          f = c.numbers.symbols[s] || c.numbers.symbols[c.numbers.nu[0]],
          m = 0;
        if (a.isNaN()) r = f.nan;
        else if (a.isFinite()) {
          a.isZero() || (_(a.isFinite(), "Input must be a mathematical value"), "percent" == e.style && (a = a.times(100)), m = (t = Be(e, a))[0], o = t[1], a = a.times(u.A.pow(10, -m)));
          var g = Pe(e, a);
          r = g.formattedString, a = g.roundedNumber
        } else r = f.infinity;
        var p = e.signDisplay;
        switch (p) {
          case "never":
            i = 0;
            break;
          case "auto":
            i = a.isPositive() || a.isNaN() ? 0 : -1;
            break;
          case "always":
            i = a.isPositive() || a.isNaN() ? 1 : -1;
            break;
          case "exceptZero":
            i = a.isZero() ? 0 : a.isNegative() ? -1 : 1;
            break;
          default:
            _("negative" === p, 'signDisplay must be "negative"'), i = a.isNegative() && !a.isZero() ? -1 : 0
        }
        return Ge({
          roundedNumber: a,
          formattedString: r,
          exponent: m,
          magnitude: o,
          sign: i
        }, e.dataLocaleData, l, e)
      }

      function Ve(e, n) {
        return He(e, n).map(function(e) {
          return e.value
        }).join("")
      }

      function Ke(e, n, t, r) {
        var i = r.getInternalSlots;
        _(!n.isNaN() && !t.isNaN(), "Input must be a number", RangeError);
        var u = i(e),
          a = He(u, n),
          o = He(u, t);
        if (Ve(u, n) === Ve(u, t)) {
          var l = $e(u, a);
          return l.forEach(function(e) {
            e.source = "shared"
          }), l
        }
        var c = [];
        a.forEach(function(e) {
          e.source = "startRange", c.push(e)
        });
        var s = u.dataLocaleData.numbers.symbols[u.numberingSystem].rangeSign;
        return c.push({
          type: "literal",
          value: s,
          source: "shared"
        }), o.forEach(function(e) {
          e.source = "endRange", c.push(e)
        }), Te(e, c, {
          getInternalSlots: i
        })
      }

      function Je(e, n, t, r) {
        return Ke(e, n, t, {
          getInternalSlots: r.getInternalSlots
        }).map(function(e) {
          return e.value
        }).join("")
      }

      function Qe(e, n, t, r) {
        return Ke(e, n, t, {
          getInternalSlots: r.getInternalSlots
        }).map(function(e, n) {
          return {
            type: e.type,
            value: e.value,
            source: e.source,
            result: n.toString()
          }
        })
      }

      function Xe(e, n, t) {
        for (var r = He(t.getInternalSlots(e), n), i = j(0), u = 0, a = r; u < a.length; u++) {
          var o = a[u];
          i.push({
            type: o.type,
            value: o.value
          })
        }
        return i
      }
      var en, nn, tn = t(8729),
        rn = new Set([1, 2, 5, 10, 20, 25, 50, 100, 200, 250, 500, 1e3, 2e3, 2500, 5e3]);

      function un(e, n, t, r, i) {
        var u = ge(n, "minimumIntegerDigits", 1, 21, 1),
          a = n.minimumFractionDigits,
          o = n.maximumFractionDigits,
          l = n.minimumSignificantDigits,
          c = n.maximumSignificantDigits;
        e.minimumIntegerDigits = u;
        var s = ge(n, "roundingIncrement", 1, 5e3, 1);
        _(rn.has(s), "Invalid rounding increment value: ".concat(s, ".\nValid values are ").concat(Array.from(rn).join(", "), "."));
        var f = pe(n, "roundingMode", "string", ["ceil", "floor", "expand", "trunc", "halfCeil", "halfFloor", "halfExpand", "halfTrunc", "halfEven"], "halfExpand"),
          m = pe(n, "roundingPriority", "string", ["auto", "morePrecision", "lessPrecision"], "auto"),
          g = pe(n, "trailingZeroDisplay", "string", ["auto", "stripIfInteger"], "auto");
        1 !== s && (r = t), e.roundingIncrement = s, e.roundingMode = f, e.trailingZeroDisplay = g;
        var p = void 0 !== l || void 0 !== c,
          d = void 0 !== a || void 0 !== o,
          y = !0,
          v = !0;
        if ("auto" === m && (y = p, (p || !d && "compact" === i) && (v = !1)), y && (p ? (e.minimumSignificantDigits = me(l, 1, 21, 1), e.maximumSignificantDigits = me(c, e.minimumSignificantDigits, 21, 21)) : (e.minimumSignificantDigits = 1, e.maximumSignificantDigits = 21)), v)
          if (d) {
            if (a = me(a, 0, 100, void 0), o = me(o, 0, 100, void 0), void 0 === a) _(void 0 !== o, "maximumFractionDigits must be defined"), a = Math.min(t, o);
            else if (void 0 === o) o = Math.max(r, a);
            else if (a > o) throw new RangeError("Invalid range, ".concat(a, " > ").concat(o));
            e.minimumFractionDigits = a, e.maximumFractionDigits = o
          } else e.minimumFractionDigits = t, e.maximumFractionDigits = r;
        y || v ? "morePrecision" === m ? (e.roundingType = "morePrecision", e.roundingPriority = "morePrecision") : "lessPrecision" === m ? (e.roundingType = "lessPrecision", e.roundingPriority = "lessPrecision") : p ? (e.roundingType = "significantDigits", e.roundingPriority = "auto") : (e.roundingType = "fractionDigits", e.roundingPriority = "auto") : (e.minimumFractionDigits = 0, e.maximumFractionDigits = 0, e.minimumSignificantDigits = 1, e.maximumSignificantDigits = 2, e.roundingType = "morePrecision", e.roundingPriority = "morePrecision"), 1 !== s && (_("fractionDigits" === e.roundingType, "Invalid roundingType", TypeError), _(e.maximumFractionDigits === e.minimumFractionDigits, "With roundingIncrement > 1, maximumFractionDigits and minimumFractionDigits must be equal.", RangeError))
      }

      function an(e, n) {
        void 0 === n && (n = Object.create(null));
        var t = pe(n, "style", "string", ["decimal", "percent", "currency", "unit"], "decimal");
        e.style = t;
        var r = pe(n, "currency", "string", void 0, void 0);
        _(void 0 === r || we(r), "Malformed currency code", RangeError), _("currency" !== t || void 0 !== r, "currency cannot be undefined", TypeError);
        var i = pe(n, "currencyDisplay", "string", ["code", "symbol", "narrowSymbol", "name"], "symbol"),
          u = pe(n, "currencySign", "string", ["standard", "accounting"], "standard"),
          a = pe(n, "unit", "string", void 0, void 0);
        _(void 0 === a || Ae(a), "Invalid unit argument for Intl.NumberFormat()", RangeError), _("unit" !== t || void 0 !== a, "unit cannot be undefined", TypeError);
        var o = pe(n, "unitDisplay", "string", ["short", "narrow", "long"], "short");
        "currency" === t && (e.currency = r.toUpperCase(), e.currencyDisplay = i, e.currencySign = u), "unit" === t && (e.unit = a, e.unitDisplay = o)
      }

      function on(e, n, t, i) {
        var u = i.getInternalSlots,
          a = i.localeData,
          o = i.availableLocales,
          l = i.numberingSystemNames,
          c = i.getDefaultLocale,
          s = i.currencyDigitsData,
          f = r(n),
          m = fe(t),
          g = Object.create(null),
          p = pe(m, "localeMatcher", "string", ["lookup", "best fit"], "best fit");
        g.localeMatcher = p;
        var d = pe(m, "numberingSystem", "string", void 0, void 0);
        if (void 0 !== d && l.indexOf(d) < 0) throw RangeError("Invalid numberingSystems: ".concat(d));
        g.nu = d;
        var y = (0, tn.ResolveLocale)(Array.from(o), f, g, ["nu"], a, c),
          v = a[y.dataLocale];
        _(!!v, "Missing locale data for ".concat(y.dataLocale));
        var D = u(e);
        D.locale = y.locale, D.dataLocale = y.dataLocale, D.numberingSystem = y.nu, D.dataLocaleData = v, an(D, m);
        var h, b, F = D.style,
          E = pe(m, "notation", "string", ["standard", "scientific", "engineering", "compact"], "standard");
        if (D.notation = E, "currency" === F && "standard" === E) {
          var w = je(D.currency, {
            currencyDigitsData: s
          });
          h = w, b = w
        } else h = 0, b = "percent" === F ? 0 : 3;
        un(D, m, h, b, E);
        var A = pe(m, "compactDisplay", "string", ["short", "long"], "short"),
          S = "auto";
        "compact" === E && (D.compactDisplay = A, S = "min2");
        var T = ye(m, "useGrouping", ["min2", "auto", "always"], "always", !1, S);
        D.useGrouping = T;
        var C = pe(m, "signDisplay", "string", ["auto", "never", "always", "exceptZero", "negative"], "auto");
        return D.signDisplay = C, e
      }

      function ln(e) {
        for (var n = [], t = e.indexOf("{"), r = 0, i = 0, u = e.length; t < e.length && t > -1;) _((r = e.indexOf("}", t)) > t, "Invalid pattern ".concat(e)), t > i && n.push({
          type: "literal",
          value: e.substring(i, t)
        }), n.push({
          type: e.substring(t + 1, r),
          value: void 0
        }), i = r + 1, t = e.indexOf("{", i);
        return i < u && n.push({
          type: "literal",
          value: e.substring(i, u)
        }), n
      }

      function cn(e, n, t) {
        return void 0 !== t && pe(t = P(t), "localeMatcher", "string", ["lookup", "best fit"], "best fit"), (0, tn.LookupSupportedLocales)(Array.from(e), n)
      }

      function sn(e) {
        return "MISSING_LOCALE_DATA" === e.type
      }

      function fn(e) {
        var n = se(e, "number");
        if ("bigint" == typeof n) return new u.A(n);
        if (void 0 === n) return new u.A(NaN);
        if (!0 === n) return new u.A(1);
        if (!1 === n) return new u.A(0);
        if (null === n) return new u.A(0);
        try {
          return new u.A(n)
        } catch (e) {
          return new u.A(NaN)
        }
      }
      nn = Error, (0, l.__extends)(function() {
          var e = null !== nn && nn.apply(this, arguments) || this;
          return e.type = "MISSING_LOCALE_DATA", e
        }, nn),
        function(e) {
          e.startRange = "startRange", e.shared = "shared", e.endRange = "endRange"
        }(en || (en = {}))
    }
  }
]);