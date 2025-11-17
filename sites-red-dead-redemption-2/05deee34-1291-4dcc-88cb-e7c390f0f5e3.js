try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "05deee34-1291-4dcc-88cb-e7c390f0f5e3", e._sentryDebugIdIdentifier = "sentry-dbid-05deee34-1291-4dcc-88cb-e7c390f0f5e3")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-red-dead-redemption-2",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_red_dead_redemption_2 = self.webpackChunk_rockstargames_sites_red_dead_redemption_2 || []).push([
  [8970], {
    28423: (e, t, a) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var l = a(78322).__importDefault(a(33688));
      Object.defineProperty(Intl, "ListFormat", {
        value: l.default,
        writable: !0,
        enumerable: !1,
        configurable: !0
      })
    },
    33688: (e, t, a) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var l = a(78322),
        n = a(62306),
        r = a(74578);

      function o(e, t) {
        if (!(e instanceof _)) throw new TypeError("Method Intl.ListFormat.prototype.".concat(t, " called on incompatible receiver ").concat(String(e)))
      }

      function i(e) {
        if ("object" != typeof e) return [];
        for (var t, a = [], l = e[Symbol.iterator](); !(t = l.next()).done;) {
          if ("string" != typeof t.value) {
            var n = t.value;
            throw new TypeError("Iterable yielded ".concat(n, " which is not a string"))
          }
          a.push(t.value)
        }
        return a
      }

      function s(e, t, a) {
        var l = a.length;
        if (0 === l) return [];
        if (2 === l) return c((0, n.getInternalSlot)(e, t, "templatePair"), {
          0: {
            type: "element",
            value: a[0]
          },
          1: {
            type: "element",
            value: a[1]
          }
        });
        for (var r = {
            type: "element",
            value: a[l - 1]
          }, o = l - 2; o >= 0;) r = c(0 === o ? (0, n.getInternalSlot)(e, t, "templateStart") : o < l - 2 ? (0, n.getInternalSlot)(e, t, "templateMiddle") : (0, n.getInternalSlot)(e, t, "templateEnd"), {
          0: {
            type: "element",
            value: a[o]
          },
          1: r
        }), o--;
        return r
      }

      function c(e, t) {
        for (var a = [], l = 0, r = (0, n.PartitionPattern)(e); l < r.length; l++) {
          var o = r[l],
            i = o.type;
          if ((0, n.isLiteralPart)(o)) a.push({
            type: "literal",
            value: o.value
          });
          else {
            (0, n.invariant)(i in t, "".concat(i, " is missing from placables"));
            var s = t[i];
            Array.isArray(s) ? a.push.apply(a, s) : a.push(s)
          }
        }
        return a
      }
      var _ = function() {
        function e(t, a) {
          if (!(this && this instanceof e ? this.constructor : void 0)) throw new TypeError("Intl.ListFormat must be called with 'new'");
          (0, n.setInternalSlot)(e.__INTERNAL_SLOT_MAP__, this, "initializedListFormat", !0);
          var l = (0, n.CanonicalizeLocaleList)(t),
            o = Object.create(null),
            i = (0, n.GetOptionsObject)(a),
            s = (0, n.GetOption)(i, "localeMatcher", "string", ["best fit", "lookup"], "best fit");
          o.localeMatcher = s;
          var c = e.localeData,
            _ = (0, r.ResolveLocale)(e.availableLocales, l, o, e.relevantExtensionKeys, c, e.getDefaultLocale);
          (0, n.setInternalSlot)(e.__INTERNAL_SLOT_MAP__, this, "locale", _.locale);
          var d = (0, n.GetOption)(i, "type", "string", ["conjunction", "disjunction", "unit"], "conjunction");
          (0, n.setInternalSlot)(e.__INTERNAL_SLOT_MAP__, this, "type", d);
          var f = (0, n.GetOption)(i, "style", "string", ["long", "short", "narrow"], "long");
          (0, n.setInternalSlot)(e.__INTERNAL_SLOT_MAP__, this, "style", f);
          var u = _.dataLocale,
            p = c[u];
          (0, n.invariant)(!!p, "Missing locale data for ".concat(u));
          var y = p[d][f];
          (0, n.setInternalSlot)(e.__INTERNAL_SLOT_MAP__, this, "templatePair", y.pair), (0, n.setInternalSlot)(e.__INTERNAL_SLOT_MAP__, this, "templateStart", y.start), (0, n.setInternalSlot)(e.__INTERNAL_SLOT_MAP__, this, "templateMiddle", y.middle), (0, n.setInternalSlot)(e.__INTERNAL_SLOT_MAP__, this, "templateEnd", y.end)
        }
        return e.prototype.format = function(t) {
          o(this, "format");
          var a = "",
            l = s(e.__INTERNAL_SLOT_MAP__, this, i(t));
          if (!Array.isArray(l)) return l.value;
          for (var n = 0, r = l; n < r.length; n++) a += r[n].value;
          return a
        }, e.prototype.formatToParts = function(t) {
          o(this, "format");
          var a = s(e.__INTERNAL_SLOT_MAP__, this, i(t));
          if (!Array.isArray(a)) return [a];
          for (var n = [], r = 0, c = a; r < c.length; r++) {
            var _ = c[r];
            n.push(l.__assign({}, _))
          }
          return n
        }, e.prototype.resolvedOptions = function() {
          return o(this, "resolvedOptions"), {
            locale: (0, n.getInternalSlot)(e.__INTERNAL_SLOT_MAP__, this, "locale"),
            type: (0, n.getInternalSlot)(e.__INTERNAL_SLOT_MAP__, this, "type"),
            style: (0, n.getInternalSlot)(e.__INTERNAL_SLOT_MAP__, this, "style")
          }
        }, e.supportedLocalesOf = function(t, a) {
          return (0, n.SupportedLocales)(e.availableLocales, (0, n.CanonicalizeLocaleList)(t), a)
        }, e.__addLocaleData = function() {
          for (var t = [], a = 0; a < arguments.length; a++) t[a] = arguments[a];
          for (var l = 0, n = t; l < n.length; l++) {
            var r = n[l],
              o = r.data,
              i = r.locale,
              s = new Intl.Locale(i).minimize().toString();
            e.localeData[i] = e.localeData[s] = o, e.availableLocales.add(s), e.availableLocales.add(i), e.__defaultLocale || (e.__defaultLocale = s)
          }
        }, e.getDefaultLocale = function() {
          return e.__defaultLocale
        }, e.localeData = {}, e.availableLocales = new Set, e.__defaultLocale = "", e.relevantExtensionKeys = [], e.polyfilled = !0, e.__INTERNAL_SLOT_MAP__ = new WeakMap, e
      }();
      t.default = _;
      try {
        "undefined" != typeof Symbol && Object.defineProperty(_.prototype, Symbol.toStringTag, {
          value: "Intl.ListFormat",
          writable: !1,
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(_.prototype.constructor, "length", {
          value: 0,
          writable: !1,
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(_.supportedLocalesOf, "length", {
          value: 1,
          writable: !1,
          enumerable: !1,
          configurable: !0
        })
      } catch (e) {}
    }
  }
]);