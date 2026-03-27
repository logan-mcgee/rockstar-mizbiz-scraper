try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    r = (new e.Error).stack;
  r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "79892432-832c-4d85-8a71-0a8665823b92", e._sentryDebugIdIdentifier = "sentry-dbid-79892432-832c-4d85-8a71-0a8665823b92")
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
  [907], {
    22004: (e, r, n) => {
      function t(e) {
        return Intl.getCanonicalLocales(e)
      }

      function i(e, r) {
        var n = r.zoneNames,
          t = r.uppercaseLinks,
          i = e.toUpperCase(),
          a = n.reduce(function(e, r) {
            return e[r.toUpperCase()] = r, e
          }, {}),
          u = t[i] || a[i];
        return "Etc/UTC" === u || "Etc/GMT" === u ? "UTC" : u
      }
      n.r(r), n.d(r, {
        ApplyUnsignedRoundingMode: () => Se,
        ArrayCreate: () => k,
        CanonicalizeLocaleList: () => t,
        CanonicalizeTimeZoneName: () => i,
        CoerceOptionsToObject: () => me,
        CollapseNumberRange: () => Ae,
        ComputeExponent: () => Be,
        ComputeExponentForMagnitude: () => Te,
        CurrencyDigits: () => ke,
        DateFromTime: () => J,
        Day: () => Z,
        DayFromYear: () => W,
        DayWithinYear: () => q,
        DaysInYear: () => V,
        FormatApproximately: () => Ve,
        FormatNumeric: () => He,
        FormatNumericRange: () => Je,
        FormatNumericRangeToParts: () => Xe,
        FormatNumericToParts: () => Qe,
        FormatNumericToString: () => je,
        GetNumberOption: () => ge,
        GetOption: () => de,
        GetOptionsObject: () => pe,
        GetStringOrBooleanOption: () => ye,
        GetUnsignedRoundingMode: () => Oe,
        HasOwnProperty: () => _,
        HourFromTime: () => ie,
        InLeapYear: () => H,
        InitializeNumberFormat: () => ur,
        IsSanctionedSimpleUnitIdentifier: () => he,
        IsValidTimeZoneName: () => Fe,
        IsWellFormedCurrencyCode: () => we,
        IsWellFormedUnitIdentifier: () => Ne,
        MinFromTime: () => ae,
        MonthFromTime: () => $,
        OrdinaryHasInstance: () => le,
        PartitionNumberPattern: () => qe,
        PartitionNumberRangePattern: () => $e,
        PartitionPattern: () => or,
        RangePatternType: () => er,
        SANCTIONED_UNITS: () => De,
        SIMPLE_UNITS: () => ve,
        SameValue: () => B,
        SecFromTime: () => ue,
        SetNumberFormatDigitOptions: () => ir,
        SetNumberFormatUnitOptions: () => ar,
        SupportedLocales: () => lr,
        TimeClip: () => L,
        TimeFromYear: () => Y,
        ToIntlMathematicalValue: () => sr,
        ToNumber: () => M,
        ToObject: () => j,
        ToPrimitive: () => se,
        ToRawFixed: () => Me,
        ToRawPrecision: () => Le,
        ToString: () => x,
        Type: () => R,
        WeekDay: () => G,
        YearFromTime: () => K,
        ZERO: () => u,
        _formatToParts: () => Ge,
        createDataProperty: () => S,
        createMemoizedDateTimeFormat: () => T,
        createMemoizedListFormat: () => O,
        createMemoizedLocale: () => P,
        createMemoizedNumberFormat: () => A,
        createMemoizedPluralRules: () => I,
        defineProperty: () => N,
        getInternalSlot: () => F,
        getMultiInternalSlots: () => E,
        invariant: () => C,
        isLiteralPart: () => w,
        isMissingLocaleDataError: () => cr,
        msFromTime: () => ce,
        removeUnitNamespace: () => be,
        setInternalSlot: () => v,
        setMultiInternalSlots: () => h
      });
      var a = n(76582),
        u = (new a.A(10), new a.A(0)),
        o = new a.A(-0),
        l = n(31635);

      function c(e, r) {
        var n = r && r.cache ? r.cache : y,
          t = r && r.serializer ? r.serializer : d;
        return (r && r.strategy ? r.strategy : g)(e, {
          cache: n,
          serializer: t
        })
      }

      function s(e, r, n, t) {
        var i, a = null == (i = t) || "number" == typeof i || "boolean" == typeof i ? t : n(t),
          u = r.get(a);
        return void 0 === u && (u = e.call(this, t), r.set(a, u)), u
      }

      function m(e, r, n) {
        var t = Array.prototype.slice.call(arguments, 3),
          i = n(t),
          a = r.get(i);
        return void 0 === a && (a = e.apply(this, t), r.set(i, a)), a
      }

      function f(e, r, n, t, i) {
        return n.bind(r, e, t, i)
      }

      function g(e, r) {
        return f(e, this, 1 === e.length ? s : m, r.cache.create(), r.serializer)
      }
      var d = function() {
          return JSON.stringify(arguments)
        },
        p = function() {
          function e() {
            this.cache = Object.create(null)
          }
          return e.prototype.get = function(e) {
            return this.cache[e]
          }, e.prototype.set = function(e, r) {
            this.cache[e] = r
          }, e
        }(),
        y = {
          create: function() {
            return new p
          }
        },
        D = {
          variadic: function(e, r) {
            return f(e, this, m, r.cache.create(), r.serializer)
          },
          monadic: function(e, r) {
            return f(e, this, s, r.cache.create(), r.serializer)
          }
        };

      function b(e, r) {
        if ("function" == typeof e.repeat) return e.repeat(r);
        for (var n = new Array(r), t = 0; t < n.length; t++) n[t] = e;
        return n.join("")
      }

      function v(e, r, n, t) {
        e.get(r) || e.set(r, Object.create(null)), e.get(r)[n] = t
      }

      function h(e, r, n) {
        for (var t = 0, i = Object.keys(n); t < i.length; t++) {
          var a = i[t];
          v(e, r, a, n[a])
        }
      }

      function F(e, r, n) {
        return E(e, r, n)[n]
      }

      function E(e, r) {
        for (var n = [], t = 2; t < arguments.length; t++) n[t - 2] = arguments[t];
        var i = e.get(r);
        if (!i) throw new TypeError("".concat(r, " InternalSlot has not been initialized"));
        return n.reduce(function(e, r) {
          return e[r] = i[r], e
        }, Object.create(null))
      }

      function w(e) {
        return "literal" === e.type
      }

      function N(e, r, n) {
        var t = n.value;
        Object.defineProperty(e, r, {
          configurable: !0,
          enumerable: !1,
          writable: !0,
          value: t
        })
      }

      function S(e, r, n) {
        Object.defineProperty(e, r, {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          value: n
        })
      }

      function C(e, r, n) {
        if (void 0 === n && (n = Error), !e) throw new n(r)
      }
      var A = c(function() {
          for (var e, r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
          return new((e = Intl.NumberFormat).bind.apply(e, (0, l.__spreadArray)([void 0], r, !1)))
        }, {
          strategy: D.variadic
        }),
        T = c(function() {
          for (var e, r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
          return new((e = Intl.DateTimeFormat).bind.apply(e, (0, l.__spreadArray)([void 0], r, !1)))
        }, {
          strategy: D.variadic
        }),
        I = c(function() {
          for (var e, r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
          return new((e = Intl.PluralRules).bind.apply(e, (0, l.__spreadArray)([void 0], r, !1)))
        }, {
          strategy: D.variadic
        }),
        P = c(function() {
          for (var e, r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
          return new((e = Intl.Locale).bind.apply(e, (0, l.__spreadArray)([void 0], r, !1)))
        }, {
          strategy: D.variadic
        }),
        O = c(function() {
          for (var e, r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
          return new((e = Intl.ListFormat).bind.apply(e, (0, l.__spreadArray)([void 0], r, !1)))
        }, {
          strategy: D.variadic
        });

      function x(e) {
        if ("symbol" == typeof e) throw TypeError("Cannot convert a Symbol value to a string");
        return String(e)
      }

      function M(e) {
        if ("number" == typeof e) return new a.W(e);
        if (C("bigint" != typeof e && "symbol" != typeof e, "BigInt and Symbol are not supported", TypeError), void 0 === e) return new a.W(NaN);
        if (null === e || 0 === e) return u;
        if (!0 === e) return new a.W(1);
        if ("string" == typeof e) try {
          return new a.W(e)
        } catch (e) {
          return new a.W(NaN)
        }
        C("object" == typeof e, "object expected", TypeError);
        var r = se(e, "number");
        return C("object" != typeof r, "object expected", TypeError), M(r)
      }

      function L(e) {
        return e.isFinite() ? e.abs().greaterThan(8640000000000001) ? new a.W(NaN) : function(e) {
          var r = M(e);
          if (r.isNaN() || r.isZero()) return u;
          if (r.isFinite()) return r;
          var n = r.abs().floor();
          return r.isNegative() && (n = n.negated()), n
        }(e) : new a.W(NaN)
      }

      function j(e) {
        if (null == e) throw new TypeError("undefined/null cannot be converted to object");
        return Object(e)
      }

      function B(e, r) {
        return Object.is ? Object.is(e, r) : e === r ? 0 !== e || 1 / e == 1 / r : e != e && r != r
      }

      function k(e) {
        return new Array(e)
      }

      function _(e, r) {
        return Object.prototype.hasOwnProperty.call(e, r)
      }

      function R(e) {
        return null === e ? "Null" : void 0 === e ? "Undefined" : "function" == typeof e || "object" == typeof e ? "Object" : "number" == typeof e ? "Number" : "boolean" == typeof e ? "Boolean" : "string" == typeof e ? "String" : "symbol" == typeof e ? "Symbol" : "bigint" == typeof e ? "BigInt" : void 0
      }
      var U = 864e5;

      function z(e, r) {
        return e - Math.floor(e / r) * r
      }

      function Z(e) {
        return Math.floor(e / U)
      }

      function G(e) {
        return z(Z(e) + 4, 7)
      }

      function W(e) {
        return Date.UTC(e, 0) / U
      }

      function Y(e) {
        return Date.UTC(e, 0)
      }

      function K(e) {
        return new Date(e).getUTCFullYear()
      }

      function V(e) {
        return e % 4 != 0 ? 365 : e % 100 != 0 ? 366 : e % 400 != 0 ? 365 : 366
      }

      function q(e) {
        return Z(e) - W(K(e))
      }

      function H(e) {
        return 365 === V(K(e)) ? 0 : 1
      }

      function $(e) {
        var r = q(e),
          n = H(e);
        if (r >= 0 && r < 31) return 0;
        if (r < 59 + n) return 1;
        if (r < 90 + n) return 2;
        if (r < 120 + n) return 3;
        if (r < 151 + n) return 4;
        if (r < 181 + n) return 5;
        if (r < 212 + n) return 6;
        if (r < 243 + n) return 7;
        if (r < 273 + n) return 8;
        if (r < 304 + n) return 9;
        if (r < 334 + n) return 10;
        if (r < 365 + n) return 11;
        throw new Error("Invalid time")
      }

      function J(e) {
        var r = q(e),
          n = $(e),
          t = H(e);
        if (0 === n) return r + 1;
        if (1 === n) return r - 30;
        if (2 === n) return r - 58 - t;
        if (3 === n) return r - 89 - t;
        if (4 === n) return r - 119 - t;
        if (5 === n) return r - 150 - t;
        if (6 === n) return r - 180 - t;
        if (7 === n) return r - 211 - t;
        if (8 === n) return r - 242 - t;
        if (9 === n) return r - 272 - t;
        if (10 === n) return r - 303 - t;
        if (11 === n) return r - 333 - t;
        throw new Error("Invalid time")
      }
      var X = 24,
        Q = 60,
        ee = 60,
        re = 1e3,
        ne = re * ee,
        te = ne * Q;

      function ie(e) {
        return z(Math.floor(e / te), X)
      }

      function ae(e) {
        return z(Math.floor(e / ne), Q)
      }

      function ue(e) {
        return z(Math.floor(e / re), ee)
      }

      function oe(e) {
        return "function" == typeof e
      }

      function le(e, r, n) {
        if (!oe(e)) return !1;
        if (null == n ? void 0 : n.boundTargetFunction) return r instanceof(null == n ? void 0 : n.boundTargetFunction);
        if ("object" != typeof r) return !1;
        var t = e.prototype;
        if ("object" != typeof t) throw new TypeError("OrdinaryHasInstance called on an object with an invalid prototype property.");
        return Object.prototype.isPrototypeOf.call(t, r)
      }

      function ce(e) {
        return z(e, re)
      }

      function se(e, r) {
        if ("object" == typeof e && null != e) {
          var n = Symbol.toPrimitive in e ? e[Symbol.toPrimitive] : void 0,
            t = void 0;
          if (void 0 !== n) {
            void 0 === r ? t = "default" : "string" === r ? t = "string" : (C("number" === r, 'preferredType must be "string" or "number"'), t = "number");
            var i = n.call(e, t);
            if ("object" != typeof i) return i;
            throw new TypeError("Cannot convert exotic object to primitive.")
          }
          return void 0 === r && (r = "number"),
            function(e, r) {
              for (var n = 0, t = "string" === r ? ["toString", "valueOf"] : ["valueOf", "toString"]; n < t.length; n++) {
                var i = e[t[n]];
                if (oe(i)) {
                  var a = i.call(e);
                  if ("object" != typeof a) return a
                }
              }
              throw new TypeError("Cannot convert object to primitive value")
            }(e, r)
        }
        return e
      }

      function me(e) {
        return void 0 === e ? Object.create(null) : j(e)
      }

      function fe(e, r, n, t) {
        if (void 0 === e) return t;
        var i = Number(e);
        if (isNaN(i) || i < r || i > n) throw new RangeError("".concat(i, " is outside of range [").concat(r, ", ").concat(n, "]"));
        return Math.floor(i)
      }

      function ge(e, r, n, t, i) {
        return fe(e[r], n, t, i)
      }

      function de(e, r, n, t, i) {
        if ("object" != typeof e) throw new TypeError("Options must be an object");
        var a = e[r];
        if (void 0 !== a) {
          if ("boolean" !== n && "string" !== n) throw new TypeError("invalid type");
          if ("boolean" === n && (a = Boolean(a)), "string" === n && (a = x(a)), void 0 !== t && !t.filter(function(e) {
              return e == a
            }).length) throw new RangeError("".concat(a, " is not within ").concat(t.join(", ")));
          return a
        }
        return i
      }

      function pe(e) {
        if (void 0 === e) return Object.create(null);
        if ("object" == typeof e) return e;
        throw new TypeError("Options must be an object")
      }

      function ye(e, r, n, t, i, a) {
        var u = e[r];
        if (void 0 === u) return a;
        if (!0 === u) return t;
        if (!1 === Boolean(u)) return i;
        if ("true" === (u = x(u)) || "false" === u) return a;
        if (-1 === (n || []).indexOf(u)) throw new RangeError("Invalid value ".concat(u));
        return u
      }
      var De = ["angle-degree", "area-acre", "area-hectare", "concentr-percent", "digital-bit", "digital-byte", "digital-gigabit", "digital-gigabyte", "digital-kilobit", "digital-kilobyte", "digital-megabit", "digital-megabyte", "digital-petabyte", "digital-terabit", "digital-terabyte", "duration-day", "duration-hour", "duration-millisecond", "duration-minute", "duration-month", "duration-second", "duration-week", "duration-year", "length-centimeter", "length-foot", "length-inch", "length-kilometer", "length-meter", "length-mile-scandinavian", "length-mile", "length-millimeter", "length-yard", "mass-gram", "mass-kilogram", "mass-ounce", "mass-pound", "mass-stone", "temperature-celsius", "temperature-fahrenheit", "volume-fluid-ounce", "volume-gallon", "volume-liter", "volume-milliliter"];

      function be(e) {
        return e.slice(e.indexOf("-") + 1)
      }
      var ve = De.map(be);

      function he(e) {
        return ve.indexOf(e) > -1
      }

      function Fe(e, r) {
        var n = r.zoneNamesFromData,
          t = r.uppercaseLinks,
          i = e.toUpperCase(),
          a = new Set,
          u = new Set;
        return n.map(function(e) {
          return e.toUpperCase()
        }).forEach(function(e) {
          return a.add(e)
        }), Object.keys(t).forEach(function(e) {
          u.add(e.toUpperCase()), a.add(t[e].toUpperCase())
        }), a.has(i) || u.has(i)
      }
      var Ee = /[^A-Z]/;

      function we(e) {
        return 3 === (e = e.replace(/([a-z])/g, function(e, r) {
          return r.toUpperCase()
        })).length && !Ee.test(e)
      }

      function Ne(e) {
        if (he(e = e.replace(/([A-Z])/g, function(e, r) {
            return r.toLowerCase()
          }))) return !0;
        var r = e.split("-per-");
        if (2 !== r.length) return !1;
        var n = r[0],
          t = r[1];
        return !(!he(n) || !he(t))
      }

      function Se(e, r, n, t) {
        if (e.eq(r)) return r;
        if (C(r.lessThan(e) && e.lessThan(n), "x should be between r1 and r2 but x=".concat(e, ", r1=").concat(r, ", r2=").concat(n)), "zero" === t) return r;
        if ("infinity" === t) return n;
        var i = e.minus(r),
          a = n.minus(e);
        return i.lessThan(a) ? r : a.lessThan(i) ? n : (C(i.eq(a), "d1 should be equal to d2"), "half-zero" === t ? r : "half-infinity" === t ? n : (C("half-even" === t, "unsignedRoundingMode should be half-even"), r.div(n.minus(r)).mod(2).isZero() ? r : n))
      }
      var Ce = new Set(["unit", "exponentMinusSign", "minusSign", "plusSign", "percentSign", "exponentSeparator", "percent", "percentSign", "currency", "literal"]);

      function Ae(e, r, n) {
        for (var t = (0, n.getInternalSlots)(e), i = t.dataLocaleData.numbers.symbols[t.numberingSystem], a = new RegExp("s?[".concat(i.rangeSign, "]s?")), u = r.findIndex(function(e) {
            return "literal" === e.type && a.test(e.value)
          }), o = [], l = u - 1; l >= 0 && Ce.has(r[l].type); l--) o.unshift(r[l]);
        if (Array.from(o.map(function(e) {
            return e.value
          }).join("")).length > 1) return (c = Array.from(r)).splice(u - o.length, o.length), c;
        var c, s = [];
        for (l = u + 1; l < r.length && Ce.has(r[l].type); l++) s.push(r[l]);
        return Array.from(s.map(function(e) {
          return e.value
        }).join("")).length > 1 ? ((c = Array.from(r)).splice(u + 1, s.length), c) : r
      }

      function Te(e, r) {
        var n = e.notation,
          t = e.dataLocaleData,
          i = e.numberingSystem;
        switch (n) {
          case "standard":
            return 0;
          case "scientific":
            return r.toNumber();
          case "engineering":
            return r.div(3).floor().times(3).toNumber();
          default:
            C("compact" === n, "Invalid notation");
            var u = e.compactDisplay,
              o = e.style,
              l = e.currencyDisplay,
              c = void 0;
            if ("currency" === o && "name" !== l) c = (t.numbers.currency[i] || t.numbers.currency[t.numbers.nu[0]]).short;
            else {
              var s = t.numbers.decimal[i] || t.numbers.decimal[t.numbers.nu[0]];
              c = "long" === u ? s.long : s.short
            }
            if (!c) return 0;
            var m = a.A.pow(10, r).toString(),
              f = Object.keys(c);
            if (m < f[0]) return 0;
            if (m > f[f.length - 1]) return f[f.length - 1].length - 1;
            var g = f.indexOf(m);
            if (-1 === g) return 0;
            var d = f[g];
            return "0" === c[d].other ? 0 : d.length - c[d].other.match(/0+/)[0].length
        }
      }
      a.A.set({
        toExpPos: 100
      });
      var Ie = {
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
        Pe = {
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

      function Oe(e, r) {
        return r ? Ie[e] : Pe[e]
      }

      function xe(e, r) {
        return e.times(a.A.pow(10, -r))
      }

      function Me(e, r, n, t, i) {
        var u, o, l, c, s = n,
          m = function(e, r, n) {
            var t = e.times(a.A.pow(10, r)).floor().div(n).floor().times(n);
            return {
              n1: t,
              r1: xe(t, r)
            }
          }(e, s, t),
          f = m.n1,
          g = m.r1,
          d = function(e, r, n) {
            var t = e.times(a.A.pow(10, r)).ceil().div(n).ceil().times(n);
            return {
              n2: t,
              r2: xe(t, r)
            }
          }(e, s, t),
          p = d.n2,
          y = d.r2;
        if (Se(e, g, y, i).eq(g) ? (u = f, o = g) : (u = p, o = y), l = u.isZero() ? "0" : u.toString(), 0 !== s) {
          var D = l.length;
          D <= s && (l = b("0", s - D + 1) + l, D = s + 1);
          var v = l.slice(0, D - s),
            h = l.slice(l.length - s);
          l = v + "." + h, c = v.length
        } else c = l.length;
        for (var F = n - r; F > 0 && "0" === l[l.length - 1];) l = l.slice(0, l.length - 1), F--;
        return "." === l[l.length - 1] && (l = l.slice(0, l.length - 1)), {
          formattedString: l,
          roundedNumber: o,
          integerDigitsCount: c,
          roundingMagnitude: -s
        }
      }

      function Le(e, r, n, t) {
        var i, o, l, c, s = n;
        if (e.isZero()) i = b("0", s), o = 0, l = u;
        else {
          var m = function(e, r) {
              for (var n = a.A.pow(10, r), t = a.A.pow(10, r - 1), i = e.div(t).log(10).plus(r).minus(1).ceil();;) {
                var u = e.div(a.A.pow(10, i.minus(r).plus(1))).floor();
                if (u.lessThan(n) && u.greaterThanOrEqualTo(t)) {
                  var o = u.times(a.A.pow(10, i.minus(r).plus(1)));
                  if (o.lessThanOrEqualTo(e)) return {
                    n1: u,
                    e1: i,
                    r1: o
                  }
                }
                i = i.minus(1)
              }
            }(e, s),
            f = m.n1,
            g = m.e1,
            d = m.r1,
            p = function(e, r) {
              for (var n = a.A.pow(10, r), t = a.A.pow(10, r - 1), i = e.div(n).log(10).plus(r).minus(1).floor();;) {
                var u = e.div(a.A.pow(10, i.minus(r).plus(1))).ceil();
                if (u.lessThan(n) && u.greaterThanOrEqualTo(t)) {
                  var o = u.times(a.A.pow(10, i.minus(r).plus(1)));
                  if (o.greaterThanOrEqualTo(e)) return {
                    n2: u,
                    e2: i,
                    r2: o
                  }
                }
                i = i.plus(1)
              }
            }(e, s),
            y = p.n2,
            D = p.e2,
            v = p.r2,
            h = void 0;
          Se(e, d, v, t).eq(d) ? (h = f, o = g.toNumber(), l = d) : (h = y, o = D.toNumber(), l = v), i = h.toString()
        }
        if (o >= s - 1 ? (i += b("0", o - s + 1), c = o + 1) : o >= 0 ? (i = i.slice(0, o + 1) + "." + i.slice(i.length - (s - (o + 1))), c = o + 1) : (C(o < 0, "e should be less than 0"), i = "0." + b("0", -o - 1) + i, c = 1), i.includes(".") && n > r) {
          for (var F = n - r; F > 0 && "0" === i[i.length - 1];) i = i.slice(0, i.length - 1), F--;
          "." === i[i.length - 1] && (i = i.slice(0, i.length - 1))
        }
        return {
          formattedString: i,
          roundedNumber: l,
          integerDigitsCount: c,
          roundingMagnitude: o
        }
      }

      function je(e, r) {
        var n, t, i = r;
        i.isZero() && i.isNegative() ? (n = "negative", i = u) : (C(i.isFinite(), "NumberFormatDigitInternalSlots value is not finite"), "negative" == (n = i.lessThan(0) ? "negative" : "positive") && (i = i.negated()));
        var a = e.roundingType,
          l = Oe(e.roundingMode, "negative" === n);
        switch (a) {
          case "significantDigits":
            t = Le(i, e.minimumSignificantDigits, e.maximumSignificantDigits, l);
            break;
          case "fractionDigits":
            t = Me(i, e.minimumFractionDigits, e.maximumFractionDigits, e.roundingIncrement, l);
            break;
          default:
            var c = Le(i, e.minimumSignificantDigits, e.maximumSignificantDigits, l),
              s = Me(i, e.minimumFractionDigits, e.maximumFractionDigits, e.roundingIncrement, l);
            "morePrecision" === e.roundingType ? t = c.roundingMagnitude <= s.roundingMagnitude ? c : s : (C("lessPrecision" === e.roundingType, "Invalid roundingType"), t = c.roundingMagnitude <= s.roundingMagnitude ? s : c)
        }
        i = t.roundedNumber;
        var m = t.formattedString;
        if ("stripIfInteger" === e.trailingZeroDisplay && i.isInteger()) {
          var f = m.indexOf(".");
          f > -1 && (m = m.slice(0, f))
        }
        var g = t.integerDigitsCount,
          d = e.minimumIntegerDigits;
        return g < d && (m = b("0", d - g) + m), "negative" === n && (i = i.isZero() ? o : i.negated()), {
          roundedNumber: i,
          formattedString: m
        }
      }

      function Be(e, r) {
        if (r.isZero()) return [0, 0];
        r.isNegative() && (r = r.negated());
        var n = r.log(10).floor(),
          t = Te(e, n),
          i = je(e, r = r.times(a.A.pow(10, -t)));
        return i.roundedNumber.isZero() || i.roundedNumber.log(10).floor().eq(n.minus(t)) ? [t, n.toNumber()] : [Te(e, n.plus(1)), n.plus(1).toNumber()]
      }

      function ke(e, r) {
        var n = r.currencyDigitsData;
        return _(n, e) ? n[e] : 2
      }
      a.A.set({
        toExpPos: 100
      });
      var _e = /[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20BF\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC1\uFDFC\uFDFD\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDE8\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEE0-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF73\uDF80-\uDFD8\uDFE0-\uDFEB]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDD78\uDD7A-\uDDCB\uDDCD-\uDE53\uDE60-\uDE6D\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6\uDF00-\uDF92\uDF94-\uDFCA]/,
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
        Ue = new RegExp("^".concat(_e.source)),
        ze = new RegExp("".concat(_e.source, "$")),
        Ze = /[#0](?:[\.,][#0]+)*/g;

      function Ge(e, r, n, t) {
        var i, u, o, l = e.sign,
          c = e.exponent,
          s = e.magnitude,
          m = t.notation,
          f = t.style,
          g = t.numberingSystem,
          d = r.numbers.nu[0],
          p = null;
        if ("compact" === m && s && (p = function(e, r, n, t, i, a, u) {
            var o, l, c = e.roundedNumber,
              s = e.sign,
              m = e.magnitude,
              f = String(Math.pow(10, m)),
              g = n.numbers.nu[0];
            if ("currency" === t && "name" !== a) {
              var d = null === (o = ((p = n.numbers.currency)[u] || p[g]).short) || void 0 === o ? void 0 : o[f];
              if (!d) return null;
              l = Ke(r, c.toNumber(), d)
            } else {
              var p, y = ((p = n.numbers.decimal)[u] || p[g])[i][f];
              if (!y) return null;
              l = Ke(r, c.toNumber(), y)
            }
            return "0" === l ? null : l = Ye(l, s).replace(/([^\s;\-\+\d¤]+)/g, "{c:$1}").replace(/0+/, "0")
          }(e, n, r, f, t.compactDisplay, t.currencyDisplay, g)), "currency" === f && "name" !== t.currencyDisplay) {
          var y = r.currencies[t.currency];
          if (y) switch (t.currencyDisplay) {
            case "code":
              u = t.currency;
              break;
            case "symbol":
              u = y.symbol;
              break;
            default:
              u = y.narrow
          } else u = t.currency
        }
        o = p || ("decimal" === f || "unit" === f || "currency" === f && "name" === t.currencyDisplay ? Ye((r.numbers.decimal[g] || r.numbers.decimal[d]).standard, l) : Ye("currency" === f ? (b = r.numbers.currency[g] || r.numbers.currency[d])[t.currencySign] : r.numbers.percent[g] || r.numbers.percent[d], l));
        var D = Ze.exec(o)[0];
        if (o = o.replace(Ze, "{0}").replace(/'(.)'/g, "$1"), "currency" === f && "name" !== t.currencyDisplay) {
          var b, v = (b = r.numbers.currency[g] || r.numbers.currency[d]).currencySpacing.afterInsertBetween;
          v && !ze.test(u) && (o = o.replace("¤{0}", "¤".concat(v, "{0}")));
          var h = b.currencySpacing.beforeInsertBetween;
          h && !Ue.test(u) && (o = o.replace("{0}¤", "{0}".concat(h, "¤")))
        }
        for (var F = o.split(/({c:[^}]+}|\{0\}|[¤%\-\+])/g), E = [], w = r.numbers.symbols[g] || r.numbers.symbols[d], N = 0, S = F; N < S.length; N++)
          if (W = S[N]) switch (W) {
            case "{0}":
              E.push.apply(E, We(w, e, m, c, g, !p && (null === (i = t.useGrouping) || void 0 === i || i), D, f, t.roundingIncrement, Oe(t.roundingMode, -1 === l)));
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
                value: u
              });
              break;
            default:
              /^\{c:/.test(W) ? E.push({
                type: "compact",
                value: W.substring(3, W.length - 1)
              }) : E.push({
                type: "literal",
                value: W
              })
          }
        switch (f) {
          case "currency":
            if ("name" === t.currencyDisplay) {
              var C, A = (r.numbers.currency[g] || r.numbers.currency[d]).unitPattern,
                T = r.currencies[t.currency];
              C = T ? Ke(n, e.roundedNumber.times(a.A.pow(10, c)).toNumber(), T.displayName) : t.currency;
              for (var I = [], P = 0, O = A.split(/(\{[01]\})/g); P < O.length; P++) switch (W = O[P]) {
                case "{0}":
                  I.push.apply(I, E);
                  break;
                case "{1}":
                  I.push({
                    type: "currency",
                    value: C
                  });
                  break;
                default:
                  W && I.push({
                    type: "literal",
                    value: W
                  })
              }
              return I
            }
            return E;
          case "unit":
            var x = t.unit,
              M = t.unitDisplay,
              L = r.units.simple[x];
            if (A = void 0, L) A = Ke(n, e.roundedNumber.times(a.A.pow(10, c)).toNumber(), r.units.simple[x][M]);
            else {
              var j = x.split("-per-"),
                B = j[0],
                k = j[1];
              L = r.units.simple[B];
              var _ = Ke(n, e.roundedNumber.times(a.A.pow(10, c)).toNumber(), r.units.simple[B][M]),
                R = r.units.simple[k].perUnit[M];
              if (R) A = R.replace("{0}", _);
              else {
                var U = r.units.compound.per[M],
                  z = Ke(n, 1, r.units.simple[k][M]);
                A = A = U.replace("{0}", _).replace("{1}", z.replace("{0}", ""))
              }
            }
            I = [];
            for (var Z = 0, G = A.split(/(\s*\{0\}\s*)/); Z < G.length; Z++) {
              var W = G[Z],
                Y = /^(\s*)\{0\}(\s*)$/.exec(W);
              Y ? (Y[1] && I.push({
                type: "literal",
                value: Y[1]
              }), I.push.apply(I, E), Y[2] && I.push({
                type: "literal",
                value: Y[2]
              })) : W && I.push({
                type: "unit",
                value: W
              })
            }
            return I;
          default:
            return E
        }
      }

      function We(e, r, n, t, i, u, o, l, c, s) {
        var m = [],
          f = r.formattedString,
          g = r.roundedNumber;
        if (g.isNaN()) return [{
          type: "nan",
          value: f
        }];
        if (!g.isFinite()) return [{
          type: "infinity",
          value: f
        }];
        var d = Re[i];
        d && (f = f.replace(/\d/g, function(e) {
          return d[+e] || e
        }));
        var p, y, D = f.indexOf(".");
        D > 0 ? (p = f.slice(0, D), y = f.slice(D + 1)) : p = f;
        var b = !1;
        if ("always" === u ? b = !0 : "min2" === u ? b = g.greaterThanOrEqualTo(1e4) : ("auto" === u || u) && (b = "compact" !== n || g.greaterThanOrEqualTo(1e4)), b) {
          var v = "currency" === l && null != e.currencyGroup ? e.currencyGroup : e.group,
            h = [],
            F = o.split(".")[0].split(","),
            E = 3,
            w = 3;
          F.length > 1 && (E = F[F.length - 1].length), F.length > 2 && (w = F[F.length - 2].length);
          var N = p.length - E;
          if (N > 0) {
            for (h.push(p.slice(N, N + E)), N -= w; N > 0; N -= w) h.push(p.slice(N, N + w));
            h.push(p.slice(0, N + w))
          } else h.push(p);
          for (; h.length > 0;) {
            var S = h.pop();
            m.push({
              type: "integer",
              value: S
            }), h.length > 0 && m.push({
              type: "group",
              value: v
            })
          }
        } else m.push({
          type: "integer",
          value: p
        });
        if (void 0 !== y) {
          var C = "currency" === l && null != e.currencyDecimal ? e.currencyDecimal : e.decimal;
          m.push({
            type: "decimal",
            value: C
          }, {
            type: "fraction",
            value: y
          })
        }
        if (("scientific" === n || "engineering" === n) && g.isFinite()) {
          m.push({
            type: "exponentSeparator",
            value: e.exponential
          }), t < 0 && (m.push({
            type: "exponentMinusSign",
            value: e.minusSign
          }), t = -t);
          var A = Me(new a.A(t), 0, 0, c, s);
          m.push({
            type: "exponentInteger",
            value: A.formattedString
          })
        }
        return m
      }

      function Ye(e, r) {
        e.indexOf(";") < 0 && (e = "".concat(e, ";-").concat(e));
        var n = e.split(";"),
          t = n[0],
          i = n[1];
        switch (r) {
          case 0:
            return t;
          case -1:
            return i;
          default:
            return i.indexOf("-") >= 0 ? i.replace(/-/g, "+") : "+".concat(t)
        }
      }

      function Ke(e, r, n) {
        return n[e.select(r)] || n.other
      }

      function Ve(e, r) {
        var n = e.dataLocaleData.numbers.symbols[e.numberingSystem].approximatelySign;
        return r.push({
          type: "approximatelySign",
          value: n
        }), r
      }

      function qe(e, r) {
        var n, t, i, u = r,
          o = 0,
          l = e.pl,
          c = e.dataLocaleData,
          s = e.numberingSystem,
          m = c.numbers.symbols[s] || c.numbers.symbols[c.numbers.nu[0]],
          f = 0;
        if (u.isNaN()) t = m.nan;
        else if (u.isFinite()) {
          u.isZero() || (C(u.isFinite(), "Input must be a mathematical value"), "percent" == e.style && (u = u.times(100)), f = (n = Be(e, u))[0], o = n[1], u = u.times(a.A.pow(10, -f)));
          var g = je(e, u);
          t = g.formattedString, u = g.roundedNumber
        } else t = m.infinity;
        var d = e.signDisplay;
        switch (d) {
          case "never":
            i = 0;
            break;
          case "auto":
            i = u.isPositive() || u.isNaN() ? 0 : -1;
            break;
          case "always":
            i = u.isPositive() || u.isNaN() ? 1 : -1;
            break;
          case "exceptZero":
            i = u.isZero() ? 0 : u.isNegative() ? -1 : 1;
            break;
          default:
            C("negative" === d, 'signDisplay must be "negative"'), i = u.isNegative() && !u.isZero() ? -1 : 0
        }
        return Ge({
          roundedNumber: u,
          formattedString: t,
          exponent: f,
          magnitude: o,
          sign: i
        }, e.dataLocaleData, l, e)
      }

      function He(e, r) {
        return qe(e, r).map(function(e) {
          return e.value
        }).join("")
      }

      function $e(e, r, n, t) {
        var i = t.getInternalSlots;
        C(!r.isNaN() && !n.isNaN(), "Input must be a number", RangeError);
        var a = i(e),
          u = qe(a, r),
          o = qe(a, n);
        if (He(a, r) === He(a, n)) {
          var l = Ve(a, u);
          return l.forEach(function(e) {
            e.source = "shared"
          }), l
        }
        var c = [];
        u.forEach(function(e) {
          e.source = "startRange", c.push(e)
        });
        var s = a.dataLocaleData.numbers.symbols[a.numberingSystem].rangeSign;
        return c.push({
          type: "literal",
          value: s,
          source: "shared"
        }), o.forEach(function(e) {
          e.source = "endRange", c.push(e)
        }), Ae(e, c, {
          getInternalSlots: i
        })
      }

      function Je(e, r, n, t) {
        return $e(e, r, n, {
          getInternalSlots: t.getInternalSlots
        }).map(function(e) {
          return e.value
        }).join("")
      }

      function Xe(e, r, n, t) {
        return $e(e, r, n, {
          getInternalSlots: t.getInternalSlots
        }).map(function(e, r) {
          return {
            type: e.type,
            value: e.value,
            source: e.source,
            result: r.toString()
          }
        })
      }

      function Qe(e, r, n) {
        for (var t = qe(n.getInternalSlots(e), r), i = k(0), a = 0, u = t; a < u.length; a++) {
          var o = u[a];
          i.push({
            type: o.type,
            value: o.value
          })
        }
        return i
      }
      var er, rr, nr = n(38134),
        tr = new Set([1, 2, 5, 10, 20, 25, 50, 100, 200, 250, 500, 1e3, 2e3, 2500, 5e3]);

      function ir(e, r, n, t, i) {
        var a = ge(r, "minimumIntegerDigits", 1, 21, 1),
          u = r.minimumFractionDigits,
          o = r.maximumFractionDigits,
          l = r.minimumSignificantDigits,
          c = r.maximumSignificantDigits;
        e.minimumIntegerDigits = a;
        var s = ge(r, "roundingIncrement", 1, 5e3, 1);
        C(tr.has(s), "Invalid rounding increment value: ".concat(s, ".\nValid values are ").concat(Array.from(tr).join(", "), "."));
        var m = de(r, "roundingMode", "string", ["ceil", "floor", "expand", "trunc", "halfCeil", "halfFloor", "halfExpand", "halfTrunc", "halfEven"], "halfExpand"),
          f = de(r, "roundingPriority", "string", ["auto", "morePrecision", "lessPrecision"], "auto"),
          g = de(r, "trailingZeroDisplay", "string", ["auto", "stripIfInteger"], "auto");
        1 !== s && (t = n), e.roundingIncrement = s, e.roundingMode = m, e.trailingZeroDisplay = g;
        var d = void 0 !== l || void 0 !== c,
          p = void 0 !== u || void 0 !== o,
          y = !0,
          D = !0;
        if ("auto" === f && (y = d, (d || !p && "compact" === i) && (D = !1)), y && (d ? (e.minimumSignificantDigits = fe(l, 1, 21, 1), e.maximumSignificantDigits = fe(c, e.minimumSignificantDigits, 21, 21)) : (e.minimumSignificantDigits = 1, e.maximumSignificantDigits = 21)), D)
          if (p) {
            if (u = fe(u, 0, 100, void 0), o = fe(o, 0, 100, void 0), void 0 === u) C(void 0 !== o, "maximumFractionDigits must be defined"), u = Math.min(n, o);
            else if (void 0 === o) o = Math.max(t, u);
            else if (u > o) throw new RangeError("Invalid range, ".concat(u, " > ").concat(o));
            e.minimumFractionDigits = u, e.maximumFractionDigits = o
          } else e.minimumFractionDigits = n, e.maximumFractionDigits = t;
        y || D ? "morePrecision" === f ? (e.roundingType = "morePrecision", e.roundingPriority = "morePrecision") : "lessPrecision" === f ? (e.roundingType = "lessPrecision", e.roundingPriority = "lessPrecision") : d ? (e.roundingType = "significantDigits", e.roundingPriority = "auto") : (e.roundingType = "fractionDigits", e.roundingPriority = "auto") : (e.minimumFractionDigits = 0, e.maximumFractionDigits = 0, e.minimumSignificantDigits = 1, e.maximumSignificantDigits = 2, e.roundingType = "morePrecision", e.roundingPriority = "morePrecision"), 1 !== s && (C("fractionDigits" === e.roundingType, "Invalid roundingType", TypeError), C(e.maximumFractionDigits === e.minimumFractionDigits, "With roundingIncrement > 1, maximumFractionDigits and minimumFractionDigits must be equal.", RangeError))
      }

      function ar(e, r) {
        void 0 === r && (r = Object.create(null));
        var n = de(r, "style", "string", ["decimal", "percent", "currency", "unit"], "decimal");
        e.style = n;
        var t = de(r, "currency", "string", void 0, void 0);
        C(void 0 === t || we(t), "Malformed currency code", RangeError), C("currency" !== n || void 0 !== t, "currency cannot be undefined", TypeError);
        var i = de(r, "currencyDisplay", "string", ["code", "symbol", "narrowSymbol", "name"], "symbol"),
          a = de(r, "currencySign", "string", ["standard", "accounting"], "standard"),
          u = de(r, "unit", "string", void 0, void 0);
        C(void 0 === u || Ne(u), "Invalid unit argument for Intl.NumberFormat()", RangeError), C("unit" !== n || void 0 !== u, "unit cannot be undefined", TypeError);
        var o = de(r, "unitDisplay", "string", ["short", "narrow", "long"], "short");
        "currency" === n && (e.currency = t.toUpperCase(), e.currencyDisplay = i, e.currencySign = a), "unit" === n && (e.unit = u, e.unitDisplay = o)
      }

      function ur(e, r, n, i) {
        var a = i.getInternalSlots,
          u = i.localeData,
          o = i.availableLocales,
          l = i.numberingSystemNames,
          c = i.getDefaultLocale,
          s = i.currencyDigitsData,
          m = t(r),
          f = me(n),
          g = Object.create(null),
          d = de(f, "localeMatcher", "string", ["lookup", "best fit"], "best fit");
        g.localeMatcher = d;
        var p = de(f, "numberingSystem", "string", void 0, void 0);
        if (void 0 !== p && l.indexOf(p) < 0) throw RangeError("Invalid numberingSystems: ".concat(p));
        g.nu = p;
        var y = (0, nr.ResolveLocale)(Array.from(o), m, g, ["nu"], u, c),
          D = u[y.dataLocale];
        C(!!D, "Missing locale data for ".concat(y.dataLocale));
        var b = a(e);
        b.locale = y.locale, b.dataLocale = y.dataLocale, b.numberingSystem = y.nu, b.dataLocaleData = D, ar(b, f);
        var v, h, F = b.style,
          E = de(f, "notation", "string", ["standard", "scientific", "engineering", "compact"], "standard");
        if (b.notation = E, "currency" === F && "standard" === E) {
          var w = ke(b.currency, {
            currencyDigitsData: s
          });
          v = w, h = w
        } else v = 0, h = "percent" === F ? 0 : 3;
        ir(b, f, v, h, E);
        var N = de(f, "compactDisplay", "string", ["short", "long"], "short"),
          S = "auto";
        "compact" === E && (b.compactDisplay = N, S = "min2");
        var A = ye(f, "useGrouping", ["min2", "auto", "always"], "always", !1, S);
        b.useGrouping = A;
        var T = de(f, "signDisplay", "string", ["auto", "never", "always", "exceptZero", "negative"], "auto");
        return b.signDisplay = T, e
      }

      function or(e) {
        for (var r = [], n = e.indexOf("{"), t = 0, i = 0, a = e.length; n < e.length && n > -1;) C((t = e.indexOf("}", n)) > n, "Invalid pattern ".concat(e)), n > i && r.push({
          type: "literal",
          value: e.substring(i, n)
        }), r.push({
          type: e.substring(n + 1, t),
          value: void 0
        }), i = t + 1, n = e.indexOf("{", i);
        return i < a && r.push({
          type: "literal",
          value: e.substring(i, a)
        }), r
      }

      function lr(e, r, n) {
        return void 0 !== n && de(n = j(n), "localeMatcher", "string", ["lookup", "best fit"], "best fit"), (0, nr.LookupSupportedLocales)(Array.from(e), r)
      }

      function cr(e) {
        return "MISSING_LOCALE_DATA" === e.type
      }

      function sr(e) {
        var r = se(e, "number");
        if ("bigint" == typeof r) return new a.A(r);
        if (void 0 === r) return new a.A(NaN);
        if (!0 === r) return new a.A(1);
        if (!1 === r) return new a.A(0);
        if (null === r) return new a.A(0);
        try {
          return new a.A(r)
        } catch (e) {
          return new a.A(NaN)
        }
      }
      rr = Error, (0, l.__extends)(function() {
          var e = null !== rr && rr.apply(this, arguments) || this;
          return e.type = "MISSING_LOCALE_DATA", e
        }, rr),
        function(e) {
          e.startRange = "startRange", e.shared = "shared", e.endRange = "endRange"
        }(er || (er = {}))
    },
    31666: (e, r) => {
      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.numberingSystemNames = void 0, r.numberingSystemNames = ["adlm", "ahom", "arab", "arabext", "armn", "armnlow", "bali", "beng", "bhks", "brah", "cakm", "cham", "cyrl", "deva", "diak", "ethi", "fullwide", "gara", "geor", "gong", "gonm", "grek", "greklow", "gujr", "gukh", "guru", "hanidays", "hanidec", "hans", "hansfin", "hant", "hantfin", "hebr", "hmng", "hmnp", "java", "jpan", "jpanfin", "jpanyear", "kali", "kawi", "khmr", "knda", "krai", "lana", "lanatham", "laoo", "latn", "lepc", "limb", "mathbold", "mathdbl", "mathmono", "mathsanb", "mathsans", "mlym", "modi", "mong", "mroo", "mtei", "mymr", "mymrepka", "mymrpao", "mymrshan", "mymrtlng", "nagm", "newa", "nkoo", "olck", "onao", "orya", "osma", "outlined", "rohg", "roman", "romanlow", "saur", "segment", "shrd", "sind", "sinh", "sora", "sund", "sunu", "takr", "talu", "taml", "tamldec", "telu", "thai", "tibt", "tirh", "tnsa", "vaii", "wara", "wcho"]
    },
    34882: (e, r, n) => {
      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.NumberFormat = void 0;
      var t = n(31635),
        i = n(22004),
        a = n(53606),
        u = n(31666),
        o = t.__importDefault(n(46915)),
        l = ["locale", "numberingSystem", "style", "currency", "currencyDisplay", "currencySign", "unit", "unitDisplay", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "useGrouping", "notation", "compactDisplay", "signDisplay"];

      function c(e) {
        return (0, i.FormatNumericToParts)(this, (0, i.ToIntlMathematicalValue)(e), {
          getInternalSlots: o.default
        })
      }
      r.NumberFormat = function(e, n) {
        if (!this || !(0, i.OrdinaryHasInstance)(r.NumberFormat, this)) return new r.NumberFormat(e, n);
        (0, i.InitializeNumberFormat)(this, e, n, {
          getInternalSlots: o.default,
          localeData: r.NumberFormat.localeData,
          availableLocales: r.NumberFormat.availableLocales,
          getDefaultLocale: r.NumberFormat.getDefaultLocale,
          currencyDigitsData: a.currencyDigitsData,
          numberingSystemNames: u.numberingSystemNames
        });
        var t = (0, o.default)(this),
          l = t.dataLocale,
          c = r.NumberFormat.localeData[l];
        return (0, i.invariant)(void 0 !== c, "Cannot load locale-dependent data for ".concat(l, ".")), t.pl = (0, i.createMemoizedPluralRules)(l, {
          minimumFractionDigits: t.minimumFractionDigits,
          maximumFractionDigits: t.maximumFractionDigits,
          minimumIntegerDigits: t.minimumIntegerDigits,
          minimumSignificantDigits: t.minimumSignificantDigits,
          maximumSignificantDigits: t.maximumSignificantDigits
        }), this
      };
      try {
        Object.defineProperty(c, "name", {
          value: "formatToParts",
          enumerable: !1,
          writable: !1,
          configurable: !0
        })
      } catch (e) {}(0, i.defineProperty)(r.NumberFormat.prototype, "formatToParts", {
        value: c
      }), (0, i.defineProperty)(r.NumberFormat.prototype, "formatRange", {
        value: function(e, r) {
          return (0, i.FormatNumericRange)(this, (0, i.ToIntlMathematicalValue)(e), (0, i.ToIntlMathematicalValue)(r), {
            getInternalSlots: o.default
          })
        }
      }), (0, i.defineProperty)(r.NumberFormat.prototype, "formatRangeToParts", {
        value: function(e, r) {
          return (0, i.FormatNumericRangeToParts)(this, (0, i.ToIntlMathematicalValue)(e), (0, i.ToIntlMathematicalValue)(r), {
            getInternalSlots: o.default
          })
        }
      }), (0, i.defineProperty)(r.NumberFormat.prototype, "resolvedOptions", {
        value: function() {
          if ("object" != typeof this || !(0, i.OrdinaryHasInstance)(r.NumberFormat, this)) throw TypeError("Method Intl.NumberFormat.prototype.resolvedOptions called on incompatible receiver");
          for (var e = (0, o.default)(this), n = {}, t = 0, a = l; t < a.length; t++) {
            var u = a[t],
              c = e[u];
            void 0 !== c && (n[u] = c)
          }
          return "morePrecision" === e.roundingType ? n.roundingPriority = "morePrecision" : "lessPrecision" === e.roundingType ? n.roundingPriority = "lessPrecision" : n.roundingPriority = "auto", n
        }
      });
      var s = {
        enumerable: !1,
        configurable: !0,
        get: function() {
          if ("object" != typeof this || !(0, i.OrdinaryHasInstance)(r.NumberFormat, this)) throw TypeError("Intl.NumberFormat format property accessor called on incompatible receiver");
          var e = (0, o.default)(this),
            n = e.boundFormat;
          if (void 0 === n) {
            n = function(r) {
              return (0, i.FormatNumeric)(e, (0, i.ToIntlMathematicalValue)(r))
            };
            try {
              Object.defineProperty(n, "name", {
                configurable: !0,
                enumerable: !1,
                writable: !1,
                value: ""
              })
            } catch (e) {}
            e.boundFormat = n
          }
          return n
        }
      };
      try {
        Object.defineProperty(s.get, "name", {
          configurable: !0,
          enumerable: !1,
          writable: !1,
          value: "get format"
        })
      } catch (e) {}
      Object.defineProperty(r.NumberFormat.prototype, "format", s), (0, i.defineProperty)(r.NumberFormat, "supportedLocalesOf", {
        value: function(e, n) {
          return (0, i.SupportedLocales)(r.NumberFormat.availableLocales, (0, i.CanonicalizeLocaleList)(e), n)
        }
      }), r.NumberFormat.__addLocaleData = function() {
        for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
        for (var t = 0, i = e; t < i.length; t++) {
          var a = i[t],
            u = a.data,
            o = a.locale,
            l = new Intl.Locale(o).minimize().toString();
          r.NumberFormat.localeData[o] = r.NumberFormat.localeData[l] = u, r.NumberFormat.availableLocales.add(l), r.NumberFormat.availableLocales.add(o), r.NumberFormat.__defaultLocale || (r.NumberFormat.__defaultLocale = l)
        }
      }, r.NumberFormat.__addUnitData = function(e, n) {
        var t = r.NumberFormat.localeData[e];
        if (!t) throw new Error('Locale data for "'.concat(e, '" has not been loaded in NumberFormat. \nPlease __addLocaleData before adding additional unit data'));
        for (var i in n.simple) t.units.simple[i] = n.simple[i];
        for (var i in n.compound) t.units.compound[i] = n.compound[i]
      }, r.NumberFormat.__defaultLocale = "", r.NumberFormat.localeData = {}, r.NumberFormat.availableLocales = new Set, r.NumberFormat.getDefaultLocale = function() {
        return r.NumberFormat.__defaultLocale
      }, r.NumberFormat.polyfilled = !0;
      try {
        "undefined" != typeof Symbol && Object.defineProperty(r.NumberFormat.prototype, Symbol.toStringTag, {
          configurable: !0,
          enumerable: !1,
          writable: !1,
          value: "Intl.NumberFormat"
        }), Object.defineProperty(r.NumberFormat.prototype.constructor, "length", {
          configurable: !0,
          enumerable: !1,
          writable: !1,
          value: 0
        }), Object.defineProperty(r.NumberFormat.supportedLocalesOf, "length", {
          configurable: !0,
          enumerable: !1,
          writable: !1,
          value: 1
        }), Object.defineProperty(r.NumberFormat, "prototype", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: r.NumberFormat.prototype
        })
      } catch (e) {}
    },
    46915: (e, r) => {
      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = function(e) {
        var r = n.get(e);
        return r || (r = Object.create(null), n.set(e, r)), r
      };
      var n = new WeakMap
    },
    53606: (e, r) => {
      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.currencyDigitsData = void 0, r.currencyDigitsData = {
        ADP: 0,
        AFN: 0,
        ALL: 0,
        AMD: 2,
        BHD: 3,
        BIF: 0,
        BYN: 2,
        BYR: 0,
        CAD: 2,
        CHF: 2,
        CLF: 4,
        CLP: 0,
        COP: 2,
        CRC: 2,
        CZK: 2,
        DEFAULT: 2,
        DJF: 0,
        DKK: 2,
        ESP: 0,
        GNF: 0,
        GYD: 2,
        HUF: 2,
        IDR: 2,
        IQD: 0,
        IRR: 0,
        ISK: 0,
        ITL: 0,
        JOD: 3,
        JPY: 0,
        KMF: 0,
        KPW: 0,
        KRW: 0,
        KWD: 3,
        LAK: 0,
        LBP: 0,
        LUF: 0,
        LYD: 3,
        MGA: 0,
        MGF: 0,
        MMK: 0,
        MNT: 2,
        MRO: 0,
        MUR: 2,
        NOK: 2,
        OMR: 3,
        PKR: 2,
        PYG: 0,
        RSD: 0,
        RWF: 0,
        SEK: 2,
        SLE: 2,
        SLL: 0,
        SOS: 0,
        STD: 0,
        SYP: 0,
        TMM: 0,
        TND: 3,
        TRL: 0,
        TWD: 2,
        TZS: 2,
        UGX: 0,
        UYI: 0,
        UYW: 4,
        UZS: 2,
        VEF: 2,
        VND: 0,
        VUV: 0,
        XAF: 0,
        XOF: 0,
        XPF: 0,
        YER: 0,
        ZMK: 0,
        ZWD: 0
      }
    },
    57633: (e, r, n) => {
      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.toLocaleString = function(e, r, n) {
        return new t.NumberFormat(r, n).format(e)
      };
      var t = n(34882)
    },
    72979: (e, r, n) => {
      Object.defineProperty(r, "__esModule", {
        value: !0
      });
      var t = n(34882),
        i = n(57633),
        a = n(22004);
      (0, a.defineProperty)(Intl, "NumberFormat", {
        value: t.NumberFormat
      }), (0, a.defineProperty)(Number.prototype, "toLocaleString", {
        value: function(e, r) {
          return (0, i.toLocaleString)(this, e, r)
        }
      })
    }
  }
]);