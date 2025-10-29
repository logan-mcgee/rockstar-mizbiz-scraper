try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "39dceb35-0dae-4c95-9ff7-53cd2895955d", e._sentryDebugIdIdentifier = "sentry-dbid-39dceb35-0dae-4c95-9ff7-53cd2895955d")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-gtao-license-plate",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_gtao_license_plate = self.webpackChunk_rockstargames_modules_gtao_license_plate || []).push([
  [314], {
    10649: (e, t, a) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var l = a(39522);
      Object.defineProperty(Intl, "PluralRules", {
        value: l.PluralRules,
        writable: !0,
        enumerable: !1,
        configurable: !0
      })
    },
    17663: (e, t, a) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.GetOperands = function(e) {
        (0, l.invariant)("string" == typeof e, "GetOperands should have been called with a string");
        var t = (0, l.ToNumber)(e);
        (0, l.invariant)(t.isFinite(), "n should be finite");
        var a, n, r, i = e.indexOf("."),
          o = ""; - 1 === i ? (a = t, n = l.ZERO, r = 0) : (a = e.slice(0, i), o = e.slice(i, e.length), n = (0, l.ToNumber)(o), r = o.length);
        var u, c, s = (0, l.ToNumber)(a).abs();
        if (n.isZero()) u = 0, c = l.ZERO;
        else {
          var d = o.replace(/0+$/, "");
          u = d.length, c = (0, l.ToNumber)(d)
        }
        return {
          Number: t,
          IntegerDigits: s.toNumber(),
          NumberOfFractionDigits: r,
          NumberOfFractionDigitsWithoutTrailing: u,
          FractionDigits: n.toNumber(),
          FractionDigitsWithoutTrailing: c.toNumber()
        }
      };
      var l = a(62306)
    },
    36618: (e, t) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e) {
        var t = a.get(e);
        return t || (t = Object.create(null), a.set(e, t)), t
      };
      var a = new WeakMap
    },
    39522: (e, t, a) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.PluralRules = void 0;
      var l = a(78322),
        n = a(62306),
        r = a(73562),
        i = a(58635),
        o = l.__importDefault(a(36618));

      function u(e, t) {
        if (!(e instanceof s)) throw new TypeError("Method Intl.PluralRules.prototype.".concat(t, " called on incompatible receiver ").concat(String(e)))
      }

      function c(e, t, a, l) {
        var n = l.IntegerDigits,
          r = l.NumberOfFractionDigits,
          i = l.FractionDigits;
        return s.localeData[e].fn(r ? "".concat(n, ".").concat(i) : n, "ordinal" === t)
      }
      var s = function() {
        function e(t, a) {
          if (!(this && this instanceof e ? this.constructor : void 0)) throw new TypeError("Intl.PluralRules must be called with 'new'");
          return (0, r.InitializePluralRules)(this, t, a, {
            availableLocales: e.availableLocales,
            relevantExtensionKeys: e.relevantExtensionKeys,
            localeData: e.localeData,
            getDefaultLocale: e.getDefaultLocale,
            getInternalSlots: o.default
          })
        }
        return e.prototype.resolvedOptions = function() {
          u(this, "resolvedOptions");
          var t = Object.create(null),
            a = (0, o.default)(this);
          return t.locale = a.locale, t.type = a.type, ["minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits"].forEach((function(e) {
            var l = a[e];
            void 0 !== l && (t[e] = l)
          })), t.pluralCategories = l.__spreadArray([], e.localeData[t.locale].categories[t.type], !0), t
        }, e.prototype.select = function(e) {
          u(this, "select");
          var t = (0, n.ToNumber)(e);
          return (0, i.ResolvePlural)(this, t, {
            getInternalSlots: o.default,
            PluralRuleSelect: c
          })
        }, e.prototype.toString = function() {
          return "[object Intl.PluralRules]"
        }, e.supportedLocalesOf = function(t, a) {
          return (0, n.SupportedLocales)(e.availableLocales, (0, n.CanonicalizeLocaleList)(t), a)
        }, e.__addLocaleData = function() {
          for (var t = [], a = 0; a < arguments.length; a++) t[a] = arguments[a];
          for (var l = 0, n = t; l < n.length; l++) {
            var r = n[l],
              i = r.data,
              o = r.locale;
            e.localeData[o] = i, e.availableLocales.add(o), e.__defaultLocale || (e.__defaultLocale = o)
          }
        }, e.getDefaultLocale = function() {
          return e.__defaultLocale
        }, e.localeData = {}, e.availableLocales = new Set, e.__defaultLocale = "", e.relevantExtensionKeys = [], e.polyfilled = !0, e
      }();
      t.PluralRules = s;
      try {
        "undefined" != typeof Symbol && Object.defineProperty(s.prototype, Symbol.toStringTag, {
          value: "Intl.PluralRules",
          writable: !1,
          enumerable: !1,
          configurable: !0
        });
        try {
          Object.defineProperty(s, "length", {
            value: 0,
            writable: !1,
            enumerable: !1,
            configurable: !0
          })
        } catch (e) {}
        Object.defineProperty(s.prototype.constructor, "length", {
          value: 0,
          writable: !1,
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(s.supportedLocalesOf, "length", {
          value: 1,
          writable: !1,
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(s, "name", {
          value: "PluralRules",
          writable: !1,
          enumerable: !1,
          configurable: !0
        })
      } catch (e) {}
    },
    58635: (e, t, a) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.ResolvePlural = function(e, t, a) {
        var r = a.getInternalSlots,
          i = a.PluralRuleSelect,
          o = r(e);
        if ((0, l.invariant)("Object" === (0, l.Type)(o), "pl has to be an object"), (0, l.invariant)("initializedPluralRules" in o, "pluralrules must be initialized"), !t.isFinite()) return "other";
        var u = o.locale,
          c = o.type,
          s = (0, l.FormatNumericToString)(o, t).formattedString;
        return i(u, c, t, (0, n.GetOperands)(s))
      };
      var l = a(62306),
        n = a(17663)
    },
    73562: (e, t, a) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.InitializePluralRules = function(e, t, a, r) {
        var i = r.availableLocales,
          o = r.relevantExtensionKeys,
          u = r.localeData,
          c = r.getDefaultLocale,
          s = r.getInternalSlots,
          d = (0, l.CanonicalizeLocaleList)(t),
          f = Object.create(null),
          b = (0, l.CoerceOptionsToObject)(a),
          g = s(e);
        g.initializedPluralRules = !0;
        var p = (0, l.GetOption)(b, "localeMatcher", "string", ["best fit", "lookup"], "best fit");
        f.localeMatcher = p;
        var y = (0, n.ResolveLocale)(i, d, f, o, u, c);
        return g.locale = y.locale, g.type = (0, l.GetOption)(b, "type", "string", ["cardinal", "ordinal"], "cardinal"), (0, l.SetNumberFormatDigitOptions)(g, b, 0, 3, "standard"), e
      };
      var l = a(62306),
        n = a(74578)
    }
  }
]);