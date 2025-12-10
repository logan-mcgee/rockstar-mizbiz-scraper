try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "ccd6a547-c31c-494c-9211-f4c35e580989", e._sentryDebugIdIdentifier = "sentry-dbid-ccd6a547-c31c-494c-9211-f4c35e580989")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-gif-viewer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_gif_viewer = self.webpackChunk_rockstargames_modules_core_gif_viewer || []).push([
  [8391], {
    1269: (e, t) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e) {
        var t = a.get(e);
        return t || (t = Object.create(null), a.set(e, t)), t
      };
      var a = new WeakMap
    },
    4435: (e, t, a) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.PartitionRelativeTimePattern = function(e, t, a, l) {
        var i = l.getInternalSlots;
        if ((0, r.invariant)("Number" === (0, r.Type)(t), "value must be number, instead got ".concat(typeof t), TypeError), (0, r.invariant)("String" === (0, r.Type)(a), "unit must be number, instead got ".concat(typeof t), TypeError), isNaN(t) || !isFinite(t)) throw new RangeError("Invalid value ".concat(t));
        var u = (0, n.SingularRelativeTimeUnit)(a),
          s = i(e),
          c = s.fields,
          f = s.style,
          d = s.numeric,
          b = s.pluralRules,
          v = s.numberFormat,
          y = u;
        "short" === f ? y = "".concat(u, "-short") : "narrow" === f && (y = "".concat(u, "-narrow")), y in c || (y = u);
        var m = c[y];
        if ("auto" === d && (0, r.ToString)(t) in m) return [{
          type: "literal",
          value: m[(0, r.ToString)(t)]
        }];
        var p = "future";
        ((0, r.SameValue)(t, -0) || t < 0) && (p = "past");
        var g = m[p],
          w = "function" == typeof v.formatToParts ? v.formatToParts(Math.abs(t)) : [{
            type: "literal",
            value: v.format(Math.abs(t)),
            unit: a
          }],
          h = g[b.select(t)];
        return (0, o.MakePartsList)(h, u, w)
      };
      var r = a(5932),
        n = a(6134),
        o = a(8310)
    },
    6134: (e, t, a) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.SingularRelativeTimeUnit = function(e) {
        if ((0, r.invariant)("String" === (0, r.Type)(e), "unit must be a string"), "seconds" === e) return "second";
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
      var r = a(5932)
    },
    6258: (e, t, a) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var r = a(8322).__importDefault(a(6355));
      Object.defineProperty(Intl, "RelativeTimeFormat", {
        value: r.default,
        writable: !0,
        enumerable: !1,
        configurable: !0
      })
    },
    6355: (e, t, a) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var r = a(8322),
        n = a(5932),
        o = a(7008),
        l = a(4435),
        i = r.__importDefault(a(1269)),
        u = function() {
          function e(t, a) {
            if (!(this && this instanceof e ? this.constructor : void 0)) throw new TypeError("Intl.RelativeTimeFormat must be called with 'new'");
            return (0, o.InitializeRelativeTimeFormat)(this, t, a, {
              getInternalSlots: i.default,
              availableLocales: e.availableLocales,
              relevantExtensionKeys: e.relevantExtensionKeys,
              localeData: e.localeData,
              getDefaultLocale: e.getDefaultLocale
            })
          }
          return e.prototype.format = function(e, t) {
            if ("object" != typeof this) throw new TypeError("format was called on a non-object");
            if (!(0, i.default)(this).initializedRelativeTimeFormat) throw new TypeError("format was called on a invalid context");
            return (0, l.PartitionRelativeTimePattern)(this, Number(e), (0, n.ToString)(t), {
              getInternalSlots: i.default
            }).map(function(e) {
              return e.value
            }).join("")
          }, e.prototype.formatToParts = function(e, t) {
            if ("object" != typeof this) throw new TypeError("formatToParts was called on a non-object");
            if (!(0, i.default)(this).initializedRelativeTimeFormat) throw new TypeError("formatToParts was called on a invalid context");
            return (0, l.PartitionRelativeTimePattern)(this, Number(e), (0, n.ToString)(t), {
              getInternalSlots: i.default
            })
          }, e.prototype.resolvedOptions = function() {
            if ("object" != typeof this) throw new TypeError("resolvedOptions was called on a non-object");
            var e = (0, i.default)(this);
            if (!e.initializedRelativeTimeFormat) throw new TypeError("resolvedOptions was called on a invalid context");
            return {
              locale: e.locale,
              style: e.style,
              numeric: e.numeric,
              numberingSystem: e.numberingSystem
            }
          }, e.supportedLocalesOf = function(t, a) {
            return (0, n.SupportedLocales)(e.availableLocales, (0, n.CanonicalizeLocaleList)(t), a)
          }, e.__addLocaleData = function() {
            for (var t = [], a = 0; a < arguments.length; a++) t[a] = arguments[a];
            for (var r = 0, n = t; r < n.length; r++) {
              var o = n[r],
                l = o.data,
                i = o.locale,
                u = new Intl.Locale(i).minimize().toString();
              e.localeData[i] = e.localeData[u] = l, e.availableLocales.add(u), e.availableLocales.add(i), e.__defaultLocale || (e.__defaultLocale = u)
            }
          }, e.getDefaultLocale = function() {
            return e.__defaultLocale
          }, e.localeData = {}, e.availableLocales = new Set, e.__defaultLocale = "", e.relevantExtensionKeys = ["nu"], e.polyfilled = !0, e
        }();
      t.default = u;
      try {
        "undefined" != typeof Symbol && Object.defineProperty(u.prototype, Symbol.toStringTag, {
          value: "Intl.RelativeTimeFormat",
          writable: !1,
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(u.prototype.constructor, "length", {
          value: 0,
          writable: !1,
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(u.supportedLocalesOf, "length", {
          value: 1,
          writable: !1,
          enumerable: !1,
          configurable: !0
        })
      } catch (e) {}
    },
    7008: (e, t, a) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.InitializeRelativeTimeFormat = function(e, t, a, l) {
        var i = l.getInternalSlots,
          u = l.availableLocales,
          s = l.relevantExtensionKeys,
          c = l.localeData,
          f = l.getDefaultLocale,
          d = i(e);
        d.initializedRelativeTimeFormat = !0;
        var b = (0, r.CanonicalizeLocaleList)(t),
          v = Object.create(null),
          y = (0, r.CoerceOptionsToObject)(a),
          m = (0, r.GetOption)(y, "localeMatcher", "string", ["best fit", "lookup"], "best fit");
        v.localeMatcher = m;
        var p = (0, r.GetOption)(y, "numberingSystem", "string", void 0, void 0);
        if (void 0 !== p && !o.test(p)) throw new RangeError("Invalid numbering system ".concat(p));
        v.nu = p;
        var g = (0, n.ResolveLocale)(u, b, v, s, c, f),
          w = g.locale,
          h = g.nu;
        d.locale = w, d.style = (0, r.GetOption)(y, "style", "string", ["long", "narrow", "short"], "long"), d.numeric = (0, r.GetOption)(y, "numeric", "string", ["always", "auto"], "always");
        var _ = c[g.dataLocale];
        return (0, r.invariant)(!!_, "Missing locale data for ".concat(g.dataLocale)), d.fields = _, d.numberFormat = (0, r.createMemoizedNumberFormat)(t), d.pluralRules = (0, r.createMemoizedPluralRules)(t), d.numberingSystem = h, e
      };
      var r = a(5932),
        n = a(4578),
        o = /^[a-z0-9]{3,8}(-[a-z0-9]{3,8})*$/i
    },
    8310: (e, t, a) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.MakePartsList = function(e, t, a) {
        for (var n = [], o = 0, l = (0, r.PartitionPattern)(e); o < l.length; o++) {
          var i = l[o];
          if ("literal" === i.type) n.push({
            type: "literal",
            value: i.value
          });
          else {
            (0, r.invariant)("0" === i.type, "Malformed pattern ".concat(e));
            for (var u = 0, s = a; u < s.length; u++) {
              var c = s[u];
              n.push({
                type: c.type,
                value: c.value,
                unit: t
              })
            }
          }
        }
        return n
      };
      var r = a(5932)
    }
  }
]);