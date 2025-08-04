try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "19b42864-e959-4cc7-8786-19b30f8438e1", e._sentryDebugIdIdentifier = "sentry-dbid-19b42864-e959-4cc7-8786-19b30f8438e1")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "dde524f11ca2e811c948d868f62c7d544de61cc3",
    packageName: "@rockstargames/sites-careers",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "dde524f11ca2e811c948d868f62c7d544de61cc3"
}, (self.webpackChunk_rockstargames_sites_careers = self.webpackChunk_rockstargames_sites_careers || []).push([
  [3343], {
    3199: (e, a, t) => {
      Object.defineProperty(a, "__esModule", {
        value: !0
      }), a.CanonicalCodeForDisplayNames = function(e, a) {
        if ("language" === e) return (0, l.CanonicalizeLocaleList)([a])[0];
        if ("region" === e) {
          if (t = a, !n.test(t)) throw RangeError("invalid region");
          return a.toUpperCase()
        }
        var t, s;
        if ("script" === e) {
          if (s = a, !i.test(s)) throw RangeError("invalid script");
          return "".concat(a[0].toUpperCase()).concat(a.slice(1).toLowerCase())
        }
        if ("calendar" === e) {
          if (! function(e) {
              return o.test(e)
            }(a)) throw RangeError("invalid calendar");
          return a.toLowerCase()
        }
        if ("dateTimeField" === e) {
          if (!(0, r.IsValidDateTimeFieldCode)(a)) throw RangeError("invalid dateTimeField");
          return a
        }
        if ((0, l.invariant)("currency" === e, "invalid type"), !(0, l.IsWellFormedCurrencyCode)(a)) throw RangeError("invalid currency");
        return a.toUpperCase()
      };
      var l = t(114),
        r = t(4703),
        n = /^([a-z]{2}|[0-9]{3})$/i,
        i = /^[a-z]{4}$/i,
        o = /^[a-z0-9]{3,8}([-_][a-z0-9]{3,8})*$/i
    },
    3716: (e, a, t) => {
      Object.defineProperty(a, "__esModule", {
        value: !0
      }), a.DisplayNames = void 0;
      var l = t(1299),
        r = t(114),
        n = t(3199),
        i = t(4703),
        o = t(9368),
        s = function() {
          function e(a, t) {
            if (void 0 === this.constructor) throw TypeError("Constructor Intl.DisplayNames requires 'new'");
            var l = (0, r.CanonicalizeLocaleList)(a);
            t = (0, r.GetOptionsObject)(t);
            var n = Object.create(null),
              i = e.localeData,
              s = (0, r.GetOption)(t, "localeMatcher", "string", ["lookup", "best fit"], "best fit");
            n.localeMatcher = s;
            var d = (0, o.ResolveLocale)(Array.from(e.availableLocales), l, n, [], e.localeData, e.getDefaultLocale),
              c = (0, r.GetOption)(t, "style", "string", ["narrow", "short", "long"], "long");
            u(this, "style", c);
            var f = (0, r.GetOption)(t, "type", "string", ["language", "region", "script", "currency", "calendar", "dateTimeField"], void 0);
            if (void 0 === f) throw TypeError('Intl.DisplayNames constructor requires "type" option');
            u(this, "type", f), u(this, "fallback", (0, r.GetOption)(t, "fallback", "string", ["code", "none"], "code")), u(this, "locale", d.locale);
            var p = d.dataLocale,
              y = i[p];
            (0, r.invariant)(!!y, "Missing locale data for ".concat(p)), u(this, "localeData", y), (0, r.invariant)(void 0 !== y, "locale data for ".concat(d.locale, " does not exist."));
            var g = y.types;
            (0, r.invariant)("object" == typeof g && null != g, "invalid types data");
            var v = g[f];
            (0, r.invariant)("object" == typeof v && null != v, "invalid typeFields data");
            var b = (0, r.GetOption)(t, "languageDisplay", "string", ["dialect", "standard"], "dialect");
            if ("language" === f) {
              u(this, "languageDisplay", b);
              var h = g[f][b];
              (0, r.invariant)("object" == typeof h && null != h, "invalid language typeFields data")
            }
            var w = "language" === f ? g[f][b][c] : g[f][c];
            (0, r.invariant)("object" == typeof w && null != w, "invalid styleFields data"), u(this, "fields", w)
          }
          return e.supportedLocalesOf = function(a, t) {
            return (0, r.SupportedLocales)(e.availableLocales, (0, r.CanonicalizeLocaleList)(a), t)
          }, e.__addLocaleData = function() {
            for (var a = [], t = 0; t < arguments.length; t++) a[t] = arguments[t];
            for (var l = 0, r = a; l < r.length; l++) {
              var n = r[l],
                i = n.data,
                o = n.locale,
                s = new Intl.Locale(o).minimize().toString();
              e.localeData[o] = e.localeData[s] = i, e.availableLocales.add(s), e.availableLocales.add(o), e.__defaultLocale || (e.__defaultLocale = s)
            }
          }, e.prototype.of = function(e) {
            f(this, "of");
            var a = c(this, "type"),
              t = (0, r.ToString)(e);
            if (! function(e, a) {
                switch (e) {
                  case "language":
                    return /^[a-z]{2,3}(-[a-z]{4})?(-([a-z]{2}|\d{3}))?(-([a-z\d]{5,8}|\d[a-z\d]{3}))*$/i.test(a);
                  case "region":
                    return /^([a-z]{2}|\d{3})$/i.test(a);
                  case "script":
                    return /^[a-z]{4}$/i.test(a);
                  case "currency":
                    return (0, r.IsWellFormedCurrencyCode)(a);
                  case "calendar":
                    return /^[a-z0-9]{3,8}([-_][a-z0-9]{3,8})*$/i.test(a);
                  case "dateTimeField":
                    return (0, i.IsValidDateTimeFieldCode)(a)
                }
              }(a, t)) throw RangeError("invalid code for Intl.DisplayNames.prototype.of");
            var l, o = (0, r.getMultiInternalSlots)(d, this, "localeData", "style", "fallback"),
              s = o.localeData,
              u = o.style,
              p = o.fallback,
              y = (0, n.CanonicalCodeForDisplayNames)(a, t);
            if ("language" === a) l = function(e, a, t, l, r) {
              var n = a.types.language[e],
                i = n[t][l] || n.long[l];
              if (void 0 !== i) return i;
              var o = /-([a-z]{2}|\d{3})\b/i.exec(l);
              if (o) {
                var s = l.substring(0, o.index) + l.substring(o.index + o[0].length),
                  d = o[1],
                  c = n[t][s] || n.long[s];
                if (void 0 === c || !d) return c;
                var u = a.types.region,
                  f = u[t][d] || u.long[d];
                if (f || "code" === r) return a.patterns.locale.replace("{0}", c).replace("{1}", f || d)
              }
            }(c(this, "languageDisplay"), s, u, y, p);
            else {
              var g = s.types[a];
              l = g[u][y] || g.long[y]
            }
            return void 0 !== l ? l : "code" === p ? t : void 0
          }, e.prototype.resolvedOptions = function() {
            return f(this, "resolvedOptions"), l.__assign({}, (0, r.getMultiInternalSlots)(d, this, "locale", "style", "type", "fallback", "languageDisplay"))
          }, e.getDefaultLocale = function() {
            return e.__defaultLocale
          }, e.localeData = {}, e.availableLocales = new Set, e.__defaultLocale = "", e.polyfilled = !0, e
        }();
      a.DisplayNames = s;
      try {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(s.prototype, Symbol.toStringTag, {
          value: "Intl.DisplayNames",
          configurable: !0,
          enumerable: !1,
          writable: !1
        }), Object.defineProperty(s, "length", {
          value: 2,
          writable: !1,
          enumerable: !1,
          configurable: !0
        })
      } catch (e) {}
      var d = new WeakMap;

      function c(e, a) {
        return (0, r.getInternalSlot)(d, e, a)
      }

      function u(e, a, t) {
        (0, r.setInternalSlot)(d, e, a, t)
      }

      function f(e, a) {
        if (!(e instanceof s)) throw TypeError("Method Intl.DisplayNames.prototype.".concat(a, " called on incompatible receiver"))
      }
    },
    4703: (e, a) => {
      Object.defineProperty(a, "__esModule", {
        value: !0
      }), a.IsValidDateTimeFieldCode = function(e) {
        return t.indexOf(e) >= 0
      };
      var t = ["era", "year", "quarter", "month", "weekOfYear", "weekday", "day", "dayPeriod", "hour", "minute", "second", "timeZoneName"]
    },
    5915: (e, a, t) => {
      Object.defineProperty(a, "__esModule", {
        value: !0
      });
      var l = t(3716);
      Object.defineProperty(Intl, "DisplayNames", {
        value: l.DisplayNames,
        enumerable: !1,
        writable: !0,
        configurable: !0
      })
    }
  }
]);