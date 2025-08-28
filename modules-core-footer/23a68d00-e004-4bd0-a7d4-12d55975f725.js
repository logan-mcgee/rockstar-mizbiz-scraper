try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "23a68d00-e004-4bd0-a7d4-12d55975f725", e._sentryDebugIdIdentifier = "sentry-dbid-23a68d00-e004-4bd0-a7d4-12d55975f725")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "1abf2adfc44dda687079577dcca1257a51fb3eb0",
    packageName: "@rockstargames/modules-core-footer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "1abf2adfc44dda687079577dcca1257a51fb3eb0"
}, (self.webpackChunk_rockstargames_modules_core_footer = self.webpackChunk_rockstargames_modules_core_footer || []).push([
  [314], {
    26326: (e, t, a) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.ResolvePlural = function(e, t, a) {
        var n = a.getInternalSlots,
          o = a.PluralRuleSelect,
          i = n(e);
        if ((0, l.invariant)("Object" === (0, l.Type)(i), "pl has to be an object"), (0, l.invariant)("initializedPluralRules" in i, "pluralrules must be initialized"), !t.isFinite()) return "other";
        var u = i.locale,
          s = i.type,
          c = (0, l.FormatNumericToString)(i, t).formattedString;
        return o(u, s, t, (0, r.GetOperands)(c))
      };
      var l = a(20114),
        r = a(37582)
    },
    34523: (e, t) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e) {
        var t = a.get(e);
        return t || (t = Object.create(null), a.set(e, t)), t
      };
      var a = new WeakMap
    },
    37582: (e, t, a) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.GetOperands = function(e) {
        (0, l.invariant)("string" == typeof e, "GetOperands should have been called with a string");
        var t = (0, l.ToNumber)(e);
        (0, l.invariant)(t.isFinite(), "n should be finite");
        var a, r, n, o = e.indexOf("."),
          i = ""; - 1 === o ? (a = t, r = l.ZERO, n = 0) : (a = e.slice(0, o), i = e.slice(o, e.length), r = (0, l.ToNumber)(i), n = i.length);
        var u, s, c = (0, l.ToNumber)(a).abs();
        if (r.isZero()) u = 0, s = l.ZERO;
        else {
          var d = i.replace(/0+$/, "");
          u = d.length, s = (0, l.ToNumber)(d)
        }
        return {
          Number: t,
          IntegerDigits: c.toNumber(),
          NumberOfFractionDigits: n,
          NumberOfFractionDigitsWithoutTrailing: u,
          FractionDigits: r.toNumber(),
          FractionDigitsWithoutTrailing: s.toNumber()
        }
      };
      var l = a(20114)
    },
    71365: (e, t, a) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.PluralRules = void 0;
      var l = a(91299),
        r = a(20114),
        n = a(73079),
        o = a(26326),
        i = l.__importDefault(a(34523));

      function u(e, t) {
        if (!(e instanceof c)) throw new TypeError("Method Intl.PluralRules.prototype.".concat(t, " called on incompatible receiver ").concat(String(e)))
      }

      function s(e, t, a, l) {
        var r = l.IntegerDigits,
          n = l.NumberOfFractionDigits,
          o = l.FractionDigits;
        return c.localeData[e].fn(n ? "".concat(r, ".").concat(o) : r, "ordinal" === t)
      }
      var c = function() {
        function e(t, a) {
          if (!(this && this instanceof e ? this.constructor : void 0)) throw new TypeError("Intl.PluralRules must be called with 'new'");
          return (0, n.InitializePluralRules)(this, t, a, {
            availableLocales: e.availableLocales,
            relevantExtensionKeys: e.relevantExtensionKeys,
            localeData: e.localeData,
            getDefaultLocale: e.getDefaultLocale,
            getInternalSlots: i.default
          })
        }
        return e.prototype.resolvedOptions = function() {
          u(this, "resolvedOptions");
          var t = Object.create(null),
            a = (0, i.default)(this);
          return t.locale = a.locale, t.type = a.type, ["minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits"].forEach((function(e) {
            var l = a[e];
            void 0 !== l && (t[e] = l)
          })), t.pluralCategories = l.__spreadArray([], e.localeData[t.locale].categories[t.type], !0), t
        }, e.prototype.select = function(e) {
          u(this, "select");
          var t = (0, r.ToNumber)(e);
          return (0, o.ResolvePlural)(this, t, {
            getInternalSlots: i.default,
            PluralRuleSelect: s
          })
        }, e.prototype.toString = function() {
          return "[object Intl.PluralRules]"
        }, e.supportedLocalesOf = function(t, a) {
          return (0, r.SupportedLocales)(e.availableLocales, (0, r.CanonicalizeLocaleList)(t), a)
        }, e.__addLocaleData = function() {
          for (var t = [], a = 0; a < arguments.length; a++) t[a] = arguments[a];
          for (var l = 0, r = t; l < r.length; l++) {
            var n = r[l],
              o = n.data,
              i = n.locale;
            e.localeData[i] = o, e.availableLocales.add(i), e.__defaultLocale || (e.__defaultLocale = i)
          }
        }, e.getDefaultLocale = function() {
          return e.__defaultLocale
        }, e.localeData = {}, e.availableLocales = new Set, e.__defaultLocale = "", e.relevantExtensionKeys = [], e.polyfilled = !0, e
      }();
      t.PluralRules = c;
      try {
        "undefined" != typeof Symbol && Object.defineProperty(c.prototype, Symbol.toStringTag, {
          value: "Intl.PluralRules",
          writable: !1,
          enumerable: !1,
          configurable: !0
        });
        try {
          Object.defineProperty(c, "length", {
            value: 0,
            writable: !1,
            enumerable: !1,
            configurable: !0
          })
        } catch (e) {}
        Object.defineProperty(c.prototype.constructor, "length", {
          value: 0,
          writable: !1,
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(c.supportedLocalesOf, "length", {
          value: 1,
          writable: !1,
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(c, "name", {
          value: "PluralRules",
          writable: !1,
          enumerable: !1,
          configurable: !0
        })
      } catch (e) {}
    },
    73079: (e, t, a) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.InitializePluralRules = function(e, t, a, n) {
        var o = n.availableLocales,
          i = n.relevantExtensionKeys,
          u = n.localeData,
          s = n.getDefaultLocale,
          c = n.getInternalSlots,
          d = (0, l.CanonicalizeLocaleList)(t),
          f = Object.create(null),
          b = (0, l.CoerceOptionsToObject)(a),
          g = c(e);
        g.initializedPluralRules = !0;
        var p = (0, l.GetOption)(b, "localeMatcher", "string", ["best fit", "lookup"], "best fit");
        f.localeMatcher = p;
        var y = (0, r.ResolveLocale)(o, d, f, i, u, s);
        return g.locale = y.locale, g.type = (0, l.GetOption)(b, "type", "string", ["cardinal", "ordinal"], "cardinal"), (0, l.SetNumberFormatDigitOptions)(g, b, 0, 3, "standard"), e
      };
      var l = a(20114),
        r = a(39368)
    },
    90652: (e, t, a) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var l = a(71365);
      Object.defineProperty(Intl, "PluralRules", {
        value: l.PluralRules,
        writable: !0,
        enumerable: !1,
        configurable: !0
      })
    }
  }
]);