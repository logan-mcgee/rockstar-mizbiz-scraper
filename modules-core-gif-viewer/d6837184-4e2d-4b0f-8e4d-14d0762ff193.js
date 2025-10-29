try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "d6837184-4e2d-4b0f-8e4d-14d0762ff193", e._sentryDebugIdIdentifier = "sentry-dbid-d6837184-4e2d-4b0f-8e4d-14d0762ff193")
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
  [3343], {
    1988: (e, a, t) => {
      Object.defineProperty(a, "__esModule", {
        value: !0
      });
      var l = t(4045);
      Object.defineProperty(Intl, "DisplayNames", {
        value: l.DisplayNames,
        enumerable: !1,
        writable: !0,
        configurable: !0
      })
    },
    3790: (e, a, t) => {
      Object.defineProperty(a, "__esModule", {
        value: !0
      }), a.CanonicalCodeForDisplayNames = function(e, a) {
        if ("language" === e) return (0, l.CanonicalizeLocaleList)([a])[0];
        if ("region" === e) {
          if (t = a, !n.test(t)) throw RangeError("invalid region");
          return a.toUpperCase()
        }
        var t, d;
        if ("script" === e) {
          if (d = a, !o.test(d)) throw RangeError("invalid script");
          return "".concat(a[0].toUpperCase()).concat(a.slice(1).toLowerCase())
        }
        if ("calendar" === e) {
          if (! function(e) {
              return i.test(e)
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
      var l = t(5932),
        r = t(6770),
        n = /^([a-z]{2}|[0-9]{3})$/i,
        o = /^[a-z]{4}$/i,
        i = /^[a-z0-9]{3,8}([-_][a-z0-9]{3,8})*$/i
    },
    4045: (e, a, t) => {
      Object.defineProperty(a, "__esModule", {
        value: !0
      }), a.DisplayNames = void 0;
      var l = t(8322),
        r = t(5932),
        n = t(3790),
        o = t(6770),
        i = t(4578),
        d = function() {
          function e(a, t) {
            if (void 0 === this.constructor) throw TypeError("Constructor Intl.DisplayNames requires 'new'");
            var l = (0, r.CanonicalizeLocaleList)(a);
            t = (0, r.GetOptionsObject)(t);
            var n = Object.create(null),
              o = e.localeData,
              d = (0, r.GetOption)(t, "localeMatcher", "string", ["lookup", "best fit"], "best fit");
            n.localeMatcher = d;
            var s = (0, i.ResolveLocale)(Array.from(e.availableLocales), l, n, [], e.localeData, e.getDefaultLocale),
              c = (0, r.GetOption)(t, "style", "string", ["narrow", "short", "long"], "long");
            u(this, "style", c);
            var f = (0, r.GetOption)(t, "type", "string", ["language", "region", "script", "currency", "calendar", "dateTimeField"], void 0);
            if (void 0 === f) throw TypeError('Intl.DisplayNames constructor requires "type" option');
            u(this, "type", f), u(this, "fallback", (0, r.GetOption)(t, "fallback", "string", ["code", "none"], "code")), u(this, "locale", s.locale);
            var p = s.dataLocale,
              g = o[p];
            (0, r.invariant)(!!g, "Missing locale data for ".concat(p)), u(this, "localeData", g), (0, r.invariant)(void 0 !== g, "locale data for ".concat(s.locale, " does not exist."));
            var y = g.types;
            (0, r.invariant)("object" == typeof y && null != y, "invalid types data");
            var v = y[f];
            (0, r.invariant)("object" == typeof v && null != v, "invalid typeFields data");
            var b = (0, r.GetOption)(t, "languageDisplay", "string", ["dialect", "standard"], "dialect");
            if ("language" === f) {
              u(this, "languageDisplay", b);
              var h = y[f][b];
              (0, r.invariant)("object" == typeof h && null != h, "invalid language typeFields data")
            }
            var w = "language" === f ? y[f][b][c] : y[f][c];
            (0, r.invariant)("object" == typeof w && null != w, "invalid styleFields data"), u(this, "fields", w)
          }
          return e.supportedLocalesOf = function(a, t) {
            return (0, r.SupportedLocales)(e.availableLocales, (0, r.CanonicalizeLocaleList)(a), t)
          }, e.__addLocaleData = function() {
            for (var a = [], t = 0; t < arguments.length; t++) a[t] = arguments[t];
            for (var l = 0, r = a; l < r.length; l++) {
              var n = r[l],
                o = n.data,
                i = n.locale,
                d = new Intl.Locale(i).minimize().toString();
              e.localeData[i] = e.localeData[d] = o, e.availableLocales.add(d), e.availableLocales.add(i), e.__defaultLocale || (e.__defaultLocale = d)
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
                    return (0, o.IsValidDateTimeFieldCode)(a)
                }
              }(a, t)) throw RangeError("invalid code for Intl.DisplayNames.prototype.of");
            var l, i = (0, r.getMultiInternalSlots)(s, this, "localeData", "style", "fallback"),
              d = i.localeData,
              u = i.style,
              p = i.fallback,
              g = (0, n.CanonicalCodeForDisplayNames)(a, t);
            if ("language" === a) l = function(e, a, t, l, r) {
              var n = a.types.language[e],
                o = n[t][l] || n.long[l];
              if (void 0 !== o) return o;
              var i = /-([a-z]{2}|\d{3})\b/i.exec(l);
              if (i) {
                var d = l.substring(0, i.index) + l.substring(i.index + i[0].length),
                  s = i[1],
                  c = n[t][d] || n.long[d];
                if (void 0 === c || !s) return c;
                var u = a.types.region,
                  f = u[t][s] || u.long[s];
                if (f || "code" === r) return a.patterns.locale.replace("{0}", c).replace("{1}", f || s)
              }
            }(c(this, "languageDisplay"), d, u, g, p);
            else {
              var y = d.types[a];
              l = y[u][g] || y.long[g]
            }
            return void 0 !== l ? l : "code" === p ? t : void 0
          }, e.prototype.resolvedOptions = function() {
            return f(this, "resolvedOptions"), l.__assign({}, (0, r.getMultiInternalSlots)(s, this, "locale", "style", "type", "fallback", "languageDisplay"))
          }, e.getDefaultLocale = function() {
            return e.__defaultLocale
          }, e.localeData = {}, e.availableLocales = new Set, e.__defaultLocale = "", e.polyfilled = !0, e
        }();
      a.DisplayNames = d;
      try {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(d.prototype, Symbol.toStringTag, {
          value: "Intl.DisplayNames",
          configurable: !0,
          enumerable: !1,
          writable: !1
        }), Object.defineProperty(d, "length", {
          value: 2,
          writable: !1,
          enumerable: !1,
          configurable: !0
        })
      } catch (e) {}
      var s = new WeakMap;

      function c(e, a) {
        return (0, r.getInternalSlot)(s, e, a)
      }

      function u(e, a, t) {
        (0, r.setInternalSlot)(s, e, a, t)
      }

      function f(e, a) {
        if (!(e instanceof d)) throw TypeError("Method Intl.DisplayNames.prototype.".concat(a, " called on incompatible receiver"))
      }
    },
    6770: (e, a) => {
      Object.defineProperty(a, "__esModule", {
        value: !0
      }), a.IsValidDateTimeFieldCode = function(e) {
        return t.indexOf(e) >= 0
      };
      var t = ["era", "year", "quarter", "month", "weekOfYear", "weekday", "day", "dayPeriod", "hour", "minute", "second", "timeZoneName"]
    }
  }
]);