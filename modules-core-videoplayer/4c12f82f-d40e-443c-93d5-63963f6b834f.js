try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "4c12f82f-d40e-443c-93d5-63963f6b834f", e._sentryDebugIdIdentifier = "sentry-dbid-4c12f82f-d40e-443c-93d5-63963f6b834f")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "a42314239c99c13d151b1cd32472b6fee265a6cb",
    packageName: "@rockstargames/modules-core-videoplayer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "a42314239c99c13d151b1cd32472b6fee265a6cb"
}, (self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [8391], {
    6999: (e, t, a) => {
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
      var r = a(64480)
    },
    51586: (e, t, a) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var r = a(23514),
        n = a(64480),
        o = a(99265),
        l = a(80030),
        i = r.__importDefault(a(84170)),
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
            }).map((function(e) {
              return e.value
            })).join("")
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
    62137: (e, t, a) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var r = a(23514).__importDefault(a(51586));
      Object.defineProperty(Intl, "RelativeTimeFormat", {
        value: r.default,
        writable: !0,
        enumerable: !1,
        configurable: !0
      })
    },
    80030: (e, t, a) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.PartitionRelativeTimePattern = function(e, t, a, l) {
        var i = l.getInternalSlots;
        if ((0, r.invariant)("Number" === (0, r.Type)(t), "value must be number, instead got ".concat(typeof t), TypeError), (0, r.invariant)("String" === (0, r.Type)(a), "unit must be number, instead got ".concat(typeof t), TypeError), isNaN(t) || !isFinite(t)) throw new RangeError("Invalid value ".concat(t));
        var u = (0, n.SingularRelativeTimeUnit)(a),
          s = i(e),
          c = s.fields,
          d = s.style,
          f = s.numeric,
          y = s.pluralRules,
          p = s.numberFormat,
          v = u;
        "short" === d ? v = "".concat(u, "-short") : "narrow" === d && (v = "".concat(u, "-narrow")), v in c || (v = u);
        var b = c[v];
        if ("auto" === f && (0, r.ToString)(t) in b) return [{
          type: "literal",
          value: b[(0, r.ToString)(t)]
        }];
        var m = "future";
        ((0, r.SameValue)(t, -0) || t < 0) && (m = "past");
        var g = b[m],
          w = "function" == typeof p.formatToParts ? p.formatToParts(Math.abs(t)) : [{
            type: "literal",
            value: p.format(Math.abs(t)),
            unit: a
          }],
          h = g[y.select(t)];
        return (0, o.MakePartsList)(h, u, w)
      };
      var r = a(64480),
        n = a(6999),
        o = a(96209)
    },
    84170: (e, t) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e) {
        var t = a.get(e);
        return t || (t = Object.create(null), a.set(e, t)), t
      };
      var a = new WeakMap
    },
    96209: (e, t, a) => {
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
      var r = a(64480)
    },
    99265: (e, t, a) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.InitializeRelativeTimeFormat = function(e, t, a, l) {
        var i = l.getInternalSlots,
          u = l.availableLocales,
          s = l.relevantExtensionKeys,
          c = l.localeData,
          d = l.getDefaultLocale,
          f = i(e);
        f.initializedRelativeTimeFormat = !0;
        var y = (0, r.CanonicalizeLocaleList)(t),
          p = Object.create(null),
          v = (0, r.CoerceOptionsToObject)(a),
          b = (0, r.GetOption)(v, "localeMatcher", "string", ["best fit", "lookup"], "best fit");
        p.localeMatcher = b;
        var m = (0, r.GetOption)(v, "numberingSystem", "string", void 0, void 0);
        if (void 0 !== m && !o.test(m)) throw new RangeError("Invalid numbering system ".concat(m));
        p.nu = m;
        var g = (0, n.ResolveLocale)(u, y, p, s, c, d),
          w = g.locale,
          h = g.nu;
        f.locale = w, f.style = (0, r.GetOption)(v, "style", "string", ["long", "narrow", "short"], "long"), f.numeric = (0, r.GetOption)(v, "numeric", "string", ["always", "auto"], "always");
        var _ = c[g.dataLocale];
        return (0, r.invariant)(!!_, "Missing locale data for ".concat(g.dataLocale)), f.fields = _, f.numberFormat = (0, r.createMemoizedNumberFormat)(t), f.pluralRules = (0, r.createMemoizedPluralRules)(t), f.numberingSystem = h, e
      };
      var r = a(64480),
        n = a(27353),
        o = /^[a-z0-9]{3,8}(-[a-z0-9]{3,8})*$/i
    }
  }
]);