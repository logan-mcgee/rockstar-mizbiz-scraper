try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "170aa11c-510a-4f17-acb7-c3aeb7214ed7", e._sentryDebugIdIdentifier = "sentry-dbid-170aa11c-510a-4f17-acb7-c3aeb7214ed7")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-legacy",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || []).push([
  [1795], {
    55422(e, t, r) {
      r.d(t, {
        A: () => s
      });
      const n = {
          getcanonicallocales: {
            should: () => Promise.all([r.e(4578), r.e(5830)]).then(r.bind(r, 61303)),
            polyfill: () => r.e(5018).then(r.bind(r, 46819))
          },
          locale: {
            should: () => Promise.all([r.e(4578), r.e(5830)]).then(r.bind(r, 60206)),
            polyfill: () => r.e(9615).then(r.bind(r, 48634))
          },
          listformat: {
            should: () => Promise.all([r.e(4578), r.e(5830)]).then(r.bind(r, 68727)),
            polyfill: () => Promise.all([r.e(4578), r.e(2306), r.e(8970)]).then(r.bind(r, 57369)),
            locale: e => r(77461)(`./${e}`)
          },
          displaynames: {
            should: () => Promise.all([r.e(4578), r.e(5830)]).then(r.bind(r, 96670)),
            polyfill: () => Promise.all([r.e(4578), r.e(2306), r.e(3343)]).then(r.bind(r, 6826)),
            locale: e => r(61983)(`./${e}`)
          },
          pluralrules: {
            should: () => Promise.all([r.e(4578), r.e(5830)]).then(r.bind(r, 84727)),
            polyfill: () => Promise.all([r.e(4578), r.e(2306), r.e(314)]).then(r.bind(r, 10649)),
            locale: e => r(38525)(`./${e}`)
          },
          numberformat: {
            should: () => Promise.all([r.e(4578), r.e(5830)]).then(r.bind(r, 61610)),
            polyfill: () => Promise.all([r.e(4578), r.e(2306), r.e(907)]).then(r.bind(r, 72694)),
            locale: e => r(5267)(`./${e}`)
          },
          relativetimeformat: {
            should: () => Promise.all([r.e(4578), r.e(5830)]).then(r.bind(r, 79222)),
            polyfill: () => Promise.all([r.e(4578), r.e(2306), r.e(8391)]).then(r.bind(r, 46258)),
            locale: e => r(33019)(`./${e}`)
          },
          datetimeformat: {
            should: () => Promise.all([r.e(4578), r.e(5830)]).then(r.bind(r, 1306)),
            polyfill: () => Promise.all([r.e(4578), r.e(2306), r.e(4731)]).then(r.bind(r, 35334)),
            locale: e => Promise.all([r.e(6280).then(r.t.bind(r, 29989, 23)), r(94819)(`./${e}`)])
          }
        },
        i = {
          getcanonicallocales: ["getcanonicallocales"],
          locale: ["getcanonicallocales", "locale"],
          pluralrules: ["getcanonicallocales", "locale", "pluralrules"],
          numberformat: ["getcanonicallocales", "locale", "pluralrules", "numberformat"],
          relativetimeformat: ["getcanonicallocales", "locale", "pluralrules", "numberformat", "relativetimeformat"],
          datetimeformat: ["getcanonicallocales", "locale", "pluralrules", "numberformat", "datetimeformat"],
          displaynames: ["getcanonicallocales", "locale", "displaynames"],
          listformat: ["getcanonicallocales", "locale", "listformat"]
        },
        o = async (e, t, r) => {
          const {
            shouldPolyfill: n
          } = await e.should();
          return !!n(e.locale ? t : null) && (await e.polyfill(), e.locale && await e.locale(t), !0)
        }, s = async (e, t) => {
          if (!e) throw new Error("Please provide the desired locale");
          if (!t || !t.length) throw new Error(`Please provide the list of polyfills to load, supported ones are: ${Object.keys(i).join(", ")}`);
          const r = [];
          let s = 0;
          for (const a of t) {
            if (!a || !i[a]) throw new Error(`Unsupported polyfill: ${a}. Supported ones are: ${Object.keys(i).join(", ")}`);
            for (const t of i[a]) - 1 === r.indexOf(t) && (await o(n[t], e) && s++, r.push(t))
          }
          return s
        }
    },
    15686(e, t, r) {
      r.d(t, {
        sA: () => Et,
        Dk: () => yt,
        EY: () => gt,
        YK: () => Tt,
        tz: () => at
      });
      var n = r(71127);

      function i(e, t) {
        const r = t && t.cache ? t.cache : u,
          n = t && t.serializer ? t.serializer : h;
        return (t && t.strategy ? t.strategy : l)(e, {
          cache: r,
          serializer: n
        })
      }

      function o(e, t, r, n) {
        const i = null == (o = n) || "number" == typeof o || "boolean" == typeof o ? n : r(n);
        var o;
        let s = t.get(i);
        return void 0 === s && (s = e.call(this, n), t.set(i, s)), s
      }

      function s(e, t, r) {
        const n = Array.prototype.slice.call(arguments, 3),
          i = r(n);
        let o = t.get(i);
        return void 0 === o && (o = e.apply(this, n), t.set(i, o)), o
      }

      function a(e, t, r, n, i) {
        return r.bind(t, e, n, i)
      }

      function l(e, t) {
        return a(e, this, 1 === e.length ? o : s, t.cache.create(), t.serializer)
      }
      const h = function() {
        return JSON.stringify(arguments)
      };
      var c = class {
        constructor() {
          this.cache = Object.create(null)
        }
        get(e) {
          return this.cache[e]
        }
        set(e, t) {
          this.cache[e] = t
        }
      };
      const u = {
          create: function() {
            return new c
          }
        },
        m = {
          variadic: function(e, t) {
            return a(e, this, s, t.cache.create(), t.serializer)
          },
          monadic: function(e, t) {
            return a(e, this, o, t.cache.create(), t.serializer)
          }
        },
        f = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;

      function p(e) {
        const t = {};
        return e.replace(f, e => {
          const r = e.length;
          switch (e[0]) {
            case "G":
              t.era = 4 === r ? "long" : 5 === r ? "narrow" : "short";
              break;
            case "y":
              t.year = 2 === r ? "2-digit" : "numeric";
              break;
            case "Y":
            case "u":
            case "U":
            case "r":
              throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
            case "q":
            case "Q":
              throw new RangeError("`q/Q` (quarter) patterns are not supported");
            case "M":
            case "L":
              t.month = ["numeric", "2-digit", "short", "long", "narrow"][r - 1];
              break;
            case "w":
            case "W":
              throw new RangeError("`w/W` (week) patterns are not supported");
            case "d":
              t.day = ["numeric", "2-digit"][r - 1];
              break;
            case "D":
            case "F":
            case "g":
              throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
            case "E":
              t.weekday = 4 === r ? "long" : 5 === r ? "narrow" : "short";
              break;
            case "e":
              if (r < 4) throw new RangeError("`e..eee` (weekday) patterns are not supported");
              t.weekday = ["short", "long", "narrow", "short"][r - 4];
              break;
            case "c":
              if (r < 4) throw new RangeError("`c..ccc` (weekday) patterns are not supported");
              t.weekday = ["short", "long", "narrow", "short"][r - 4];
              break;
            case "a":
              t.hour12 = !0;
              break;
            case "b":
            case "B":
              throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
            case "h":
              t.hourCycle = "h12", t.hour = ["numeric", "2-digit"][r - 1];
              break;
            case "H":
              t.hourCycle = "h23", t.hour = ["numeric", "2-digit"][r - 1];
              break;
            case "K":
              t.hourCycle = "h11", t.hour = ["numeric", "2-digit"][r - 1];
              break;
            case "k":
              t.hourCycle = "h24", t.hour = ["numeric", "2-digit"][r - 1];
              break;
            case "j":
            case "J":
            case "C":
              throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
            case "m":
              t.minute = ["numeric", "2-digit"][r - 1];
              break;
            case "s":
              t.second = ["numeric", "2-digit"][r - 1];
              break;
            case "S":
            case "A":
              throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
            case "z":
              t.timeZoneName = r < 4 ? "short" : "long";
              break;
            case "Z":
            case "O":
            case "v":
            case "V":
            case "X":
            case "x":
              throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")
          }
          return ""
        }), t
      }
      const g = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;

      function d(e) {
        return e.replace(/^(.*?)-/, "")
      }
      const E = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
        b = /^(@+)?(\+|#+)?[rs]?$/g,
        y = /(\*)(0+)|(#+)(0+)|(0+)/g,
        T = /^(0+)$/;

      function H(e) {
        const t = {};
        return "r" === e[e.length - 1] ? t.roundingPriority = "morePrecision" : "s" === e[e.length - 1] && (t.roundingPriority = "lessPrecision"), e.replace(b, function(e, r, n) {
          return "string" != typeof n ? (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length) : "+" === n ? t.minimumSignificantDigits = r.length : "#" === r[0] ? t.maximumSignificantDigits = r.length : (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length + ("string" == typeof n ? n.length : 0)), ""
        }), t
      }

      function _(e) {
        switch (e) {
          case "sign-auto":
            return {
              signDisplay: "auto"
            };
          case "sign-accounting":
          case "()":
            return {
              currencySign: "accounting"
            };
          case "sign-always":
          case "+!":
            return {
              signDisplay: "always"
            };
          case "sign-accounting-always":
          case "()!":
            return {
              signDisplay: "always", currencySign: "accounting"
            };
          case "sign-except-zero":
          case "+?":
            return {
              signDisplay: "exceptZero"
            };
          case "sign-accounting-except-zero":
          case "()?":
            return {
              signDisplay: "exceptZero", currencySign: "accounting"
            };
          case "sign-never":
          case "+_":
            return {
              signDisplay: "never"
            }
        }
      }

      function B(e) {
        let t;
        if ("E" === e[0] && "E" === e[1] ? (t = {
            notation: "engineering"
          }, e = e.slice(2)) : "E" === e[0] && (t = {
            notation: "scientific"
          }, e = e.slice(1)), t) {
          const r = e.slice(0, 2);
          if ("+!" === r ? (t.signDisplay = "always", e = e.slice(2)) : "+?" === r && (t.signDisplay = "exceptZero", e = e.slice(2)), !T.test(e)) throw new Error("Malformed concise eng/scientific notation");
          t.minimumIntegerDigits = e.length
        }
        return t
      }

      function A(e) {
        return _(e) || {}
      }

      function N(e) {
        let t = {};
        for (const r of e) {
          switch (r.stem) {
            case "percent":
            case "%":
              t.style = "percent";
              continue;
            case "%x100":
              t.style = "percent", t.scale = 100;
              continue;
            case "currency":
              t.style = "currency", t.currency = r.options[0];
              continue;
            case "group-off":
            case ",_":
              t.useGrouping = !1;
              continue;
            case "precision-integer":
            case ".":
              t.maximumFractionDigits = 0;
              continue;
            case "measure-unit":
            case "unit":
              t.style = "unit", t.unit = d(r.options[0]);
              continue;
            case "compact-short":
            case "K":
              t.notation = "compact", t.compactDisplay = "short";
              continue;
            case "compact-long":
            case "KK":
              t.notation = "compact", t.compactDisplay = "long";
              continue;
            case "scientific":
              t = {
                ...t,
                notation: "scientific",
                ...r.options.reduce((e, t) => ({
                  ...e,
                  ...A(t)
                }), {})
              };
              continue;
            case "engineering":
              t = {
                ...t,
                notation: "engineering",
                ...r.options.reduce((e, t) => ({
                  ...e,
                  ...A(t)
                }), {})
              };
              continue;
            case "notation-simple":
              t.notation = "standard";
              continue;
            case "unit-width-narrow":
              t.currencyDisplay = "narrowSymbol", t.unitDisplay = "narrow";
              continue;
            case "unit-width-short":
              t.currencyDisplay = "code", t.unitDisplay = "short";
              continue;
            case "unit-width-full-name":
              t.currencyDisplay = "name", t.unitDisplay = "long";
              continue;
            case "unit-width-iso-code":
              t.currencyDisplay = "symbol";
              continue;
            case "scale":
              t.scale = parseFloat(r.options[0]);
              continue;
            case "rounding-mode-floor":
              t.roundingMode = "floor";
              continue;
            case "rounding-mode-ceiling":
              t.roundingMode = "ceil";
              continue;
            case "rounding-mode-down":
              t.roundingMode = "trunc";
              continue;
            case "rounding-mode-up":
              t.roundingMode = "expand";
              continue;
            case "rounding-mode-half-even":
              t.roundingMode = "halfEven";
              continue;
            case "rounding-mode-half-down":
              t.roundingMode = "halfTrunc";
              continue;
            case "rounding-mode-half-up":
              t.roundingMode = "halfExpand";
              continue;
            case "integer-width":
              if (r.options.length > 1) throw new RangeError("integer-width stems only accept a single optional option");
              r.options[0].replace(y, function(e, r, n, i, o, s) {
                if (r) t.minimumIntegerDigits = n.length;
                else {
                  if (i && o) throw new Error("We currently do not support maximum integer digits");
                  if (s) throw new Error("We currently do not support exact integer digits")
                }
                return ""
              });
              continue
          }
          if (T.test(r.stem)) {
            t.minimumIntegerDigits = r.stem.length;
            continue
          }
          if (E.test(r.stem)) {
            if (r.options.length > 1) throw new RangeError("Fraction-precision stems only accept a single optional option");
            r.stem.replace(E, function(e, r, n, i, o, s) {
              return "*" === n ? t.minimumFractionDigits = r.length : i && "#" === i[0] ? t.maximumFractionDigits = i.length : o && s ? (t.minimumFractionDigits = o.length, t.maximumFractionDigits = o.length + s.length) : (t.minimumFractionDigits = r.length, t.maximumFractionDigits = r.length), ""
            });
            const e = r.options[0];
            "w" === e ? t = {
              ...t,
              trailingZeroDisplay: "stripIfInteger"
            } : e && (t = {
              ...t,
              ...H(e)
            });
            continue
          }
          if (b.test(r.stem)) {
            t = {
              ...t,
              ...H(r.stem)
            };
            continue
          }
          const e = _(r.stem);
          e && (t = {
            ...t,
            ...e
          });
          const n = B(r.stem);
          n && (t = {
            ...t,
            ...n
          })
        }
        return t
      }
      let P = function(e) {
          return e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG", e
        }({}),
        I = function(e) {
          return e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag", e
        }({}),
        S = function(e) {
          return e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime", e
        }({});

      function L(e) {
        return e.type === I.literal
      }

      function R(e) {
        return e.type === I.argument
      }

      function M(e) {
        return e.type === I.number
      }

      function w(e) {
        return e.type === I.date
      }

      function v(e) {
        return e.type === I.time
      }

      function O(e) {
        return e.type === I.select
      }

      function C(e) {
        return e.type === I.plural
      }

      function D(e) {
        return e.type === I.pound
      }

      function F(e) {
        return e.type === I.tag
      }

      function U(e) {
        return !(!e || "object" != typeof e || e.type !== S.number)
      }

      function G(e) {
        return !(!e || "object" != typeof e || e.type !== S.dateTime)
      }
      const k = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
        x = {
          "001": ["H", "h"],
          419: ["h", "H", "hB", "hb"],
          AC: ["H", "h", "hb", "hB"],
          AD: ["H", "hB"],
          AE: ["h", "hB", "hb", "H"],
          AF: ["H", "hb", "hB", "h"],
          AG: ["h", "hb", "H", "hB"],
          AI: ["H", "h", "hb", "hB"],
          AL: ["h", "H", "hB"],
          AM: ["H", "hB"],
          AO: ["H", "hB"],
          AR: ["h", "H", "hB", "hb"],
          AS: ["h", "H"],
          AT: ["H", "hB"],
          AU: ["h", "hb", "H", "hB"],
          AW: ["H", "hB"],
          AX: ["H"],
          AZ: ["H", "hB", "h"],
          BA: ["H", "hB", "h"],
          BB: ["h", "hb", "H", "hB"],
          BD: ["h", "hB", "H"],
          BE: ["H", "hB"],
          BF: ["H", "hB"],
          BG: ["H", "hB", "h"],
          BH: ["h", "hB", "hb", "H"],
          BI: ["H", "h"],
          BJ: ["H", "hB"],
          BL: ["H", "hB"],
          BM: ["h", "hb", "H", "hB"],
          BN: ["hb", "hB", "h", "H"],
          BO: ["h", "H", "hB", "hb"],
          BQ: ["H"],
          BR: ["H", "hB"],
          BS: ["h", "hb", "H", "hB"],
          BT: ["h", "H"],
          BW: ["H", "h", "hb", "hB"],
          BY: ["H", "h"],
          BZ: ["H", "h", "hb", "hB"],
          CA: ["h", "hb", "H", "hB"],
          CC: ["H", "h", "hb", "hB"],
          CD: ["hB", "H"],
          CF: ["H", "h", "hB"],
          CG: ["H", "hB"],
          CH: ["H", "hB", "h"],
          CI: ["H", "hB"],
          CK: ["H", "h", "hb", "hB"],
          CL: ["h", "H", "hB", "hb"],
          CM: ["H", "h", "hB"],
          CN: ["H", "hB", "hb", "h"],
          CO: ["h", "H", "hB", "hb"],
          CP: ["H"],
          CR: ["h", "H", "hB", "hb"],
          CU: ["h", "H", "hB", "hb"],
          CV: ["H", "hB"],
          CW: ["H", "hB"],
          CX: ["H", "h", "hb", "hB"],
          CY: ["h", "H", "hb", "hB"],
          CZ: ["H"],
          DE: ["H", "hB"],
          DG: ["H", "h", "hb", "hB"],
          DJ: ["h", "H"],
          DK: ["H"],
          DM: ["h", "hb", "H", "hB"],
          DO: ["h", "H", "hB", "hb"],
          DZ: ["h", "hB", "hb", "H"],
          EA: ["H", "h", "hB", "hb"],
          EC: ["h", "H", "hB", "hb"],
          EE: ["H", "hB"],
          EG: ["h", "hB", "hb", "H"],
          EH: ["h", "hB", "hb", "H"],
          ER: ["h", "H"],
          ES: ["H", "hB", "h", "hb"],
          ET: ["hB", "hb", "h", "H"],
          FI: ["H"],
          FJ: ["h", "hb", "H", "hB"],
          FK: ["H", "h", "hb", "hB"],
          FM: ["h", "hb", "H", "hB"],
          FO: ["H", "h"],
          FR: ["H", "hB"],
          GA: ["H", "hB"],
          GB: ["H", "h", "hb", "hB"],
          GD: ["h", "hb", "H", "hB"],
          GE: ["H", "hB", "h"],
          GF: ["H", "hB"],
          GG: ["H", "h", "hb", "hB"],
          GH: ["h", "H"],
          GI: ["H", "h", "hb", "hB"],
          GL: ["H", "h"],
          GM: ["h", "hb", "H", "hB"],
          GN: ["H", "hB"],
          GP: ["H", "hB"],
          GQ: ["H", "hB", "h", "hb"],
          GR: ["h", "H", "hb", "hB"],
          GS: ["H", "h", "hb", "hB"],
          GT: ["h", "H", "hB", "hb"],
          GU: ["h", "hb", "H", "hB"],
          GW: ["H", "hB"],
          GY: ["h", "hb", "H", "hB"],
          HK: ["h", "hB", "hb", "H"],
          HN: ["h", "H", "hB", "hb"],
          HR: ["H", "hB"],
          HU: ["H", "h"],
          IC: ["H", "h", "hB", "hb"],
          ID: ["H"],
          IE: ["H", "h", "hb", "hB"],
          IL: ["H", "hB"],
          IM: ["H", "h", "hb", "hB"],
          IN: ["h", "H"],
          IO: ["H", "h", "hb", "hB"],
          IQ: ["h", "hB", "hb", "H"],
          IR: ["hB", "H"],
          IS: ["H"],
          IT: ["H", "hB"],
          JE: ["H", "h", "hb", "hB"],
          JM: ["h", "hb", "H", "hB"],
          JO: ["h", "hB", "hb", "H"],
          JP: ["H", "K", "h"],
          KE: ["hB", "hb", "H", "h"],
          KG: ["H", "h", "hB", "hb"],
          KH: ["hB", "h", "H", "hb"],
          KI: ["h", "hb", "H", "hB"],
          KM: ["H", "h", "hB", "hb"],
          KN: ["h", "hb", "H", "hB"],
          KP: ["h", "H", "hB", "hb"],
          KR: ["h", "H", "hB", "hb"],
          KW: ["h", "hB", "hb", "H"],
          KY: ["h", "hb", "H", "hB"],
          KZ: ["H", "hB"],
          LA: ["H", "hb", "hB", "h"],
          LB: ["h", "hB", "hb", "H"],
          LC: ["h", "hb", "H", "hB"],
          LI: ["H", "hB", "h"],
          LK: ["H", "h", "hB", "hb"],
          LR: ["h", "hb", "H", "hB"],
          LS: ["h", "H"],
          LT: ["H", "h", "hb", "hB"],
          LU: ["H", "h", "hB"],
          LV: ["H", "hB", "hb", "h"],
          LY: ["h", "hB", "hb", "H"],
          MA: ["H", "h", "hB", "hb"],
          MC: ["H", "hB"],
          MD: ["H", "hB"],
          ME: ["H", "hB", "h"],
          MF: ["H", "hB"],
          MG: ["H", "h"],
          MH: ["h", "hb", "H", "hB"],
          MK: ["H", "h", "hb", "hB"],
          ML: ["H"],
          MM: ["hB", "hb", "H", "h"],
          MN: ["H", "h", "hb", "hB"],
          MO: ["h", "hB", "hb", "H"],
          MP: ["h", "hb", "H", "hB"],
          MQ: ["H", "hB"],
          MR: ["h", "hB", "hb", "H"],
          MS: ["H", "h", "hb", "hB"],
          MT: ["H", "h"],
          MU: ["H", "h"],
          MV: ["H", "h"],
          MW: ["h", "hb", "H", "hB"],
          MX: ["h", "H", "hB", "hb"],
          MY: ["hb", "hB", "h", "H"],
          MZ: ["H", "hB"],
          NA: ["h", "H", "hB", "hb"],
          NC: ["H", "hB"],
          NE: ["H"],
          NF: ["H", "h", "hb", "hB"],
          NG: ["H", "h", "hb", "hB"],
          NI: ["h", "H", "hB", "hb"],
          NL: ["H", "hB"],
          NO: ["H", "h"],
          NP: ["H", "h", "hB"],
          NR: ["H", "h", "hb", "hB"],
          NU: ["H", "h", "hb", "hB"],
          NZ: ["h", "hb", "H", "hB"],
          OM: ["h", "hB", "hb", "H"],
          PA: ["h", "H", "hB", "hb"],
          PE: ["h", "H", "hB", "hb"],
          PF: ["H", "h", "hB"],
          PG: ["h", "H"],
          PH: ["h", "hB", "hb", "H"],
          PK: ["h", "hB", "H"],
          PL: ["H", "h"],
          PM: ["H", "hB"],
          PN: ["H", "h", "hb", "hB"],
          PR: ["h", "H", "hB", "hb"],
          PS: ["h", "hB", "hb", "H"],
          PT: ["H", "hB"],
          PW: ["h", "H"],
          PY: ["h", "H", "hB", "hb"],
          QA: ["h", "hB", "hb", "H"],
          RE: ["H", "hB"],
          RO: ["H", "hB"],
          RS: ["H", "hB", "h"],
          RU: ["H"],
          RW: ["H", "h"],
          SA: ["h", "hB", "hb", "H"],
          SB: ["h", "hb", "H", "hB"],
          SC: ["H", "h", "hB"],
          SD: ["h", "hB", "hb", "H"],
          SE: ["H"],
          SG: ["h", "hb", "H", "hB"],
          SH: ["H", "h", "hb", "hB"],
          SI: ["H", "hB"],
          SJ: ["H"],
          SK: ["H"],
          SL: ["h", "hb", "H", "hB"],
          SM: ["H", "h", "hB"],
          SN: ["H", "h", "hB"],
          SO: ["h", "H"],
          SR: ["H", "hB"],
          SS: ["h", "hb", "H", "hB"],
          ST: ["H", "hB"],
          SV: ["h", "H", "hB", "hb"],
          SX: ["H", "h", "hb", "hB"],
          SY: ["h", "hB", "hb", "H"],
          SZ: ["h", "hb", "H", "hB"],
          TA: ["H", "h", "hb", "hB"],
          TC: ["h", "hb", "H", "hB"],
          TD: ["h", "H", "hB"],
          TF: ["H", "h", "hB"],
          TG: ["H", "hB"],
          TH: ["H", "h"],
          TJ: ["H", "h"],
          TL: ["H", "hB", "hb", "h"],
          TM: ["H", "h"],
          TN: ["h", "hB", "hb", "H"],
          TO: ["h", "H"],
          TR: ["H", "hB"],
          TT: ["h", "hb", "H", "hB"],
          TW: ["hB", "hb", "h", "H"],
          TZ: ["hB", "hb", "H", "h"],
          UA: ["H", "hB", "h"],
          UG: ["hB", "hb", "H", "h"],
          UM: ["h", "hb", "H", "hB"],
          US: ["h", "hb", "H", "hB"],
          UY: ["h", "H", "hB", "hb"],
          UZ: ["H", "hB", "h"],
          VA: ["H", "h", "hB"],
          VC: ["h", "hb", "H", "hB"],
          VE: ["h", "H", "hB", "hb"],
          VG: ["h", "hb", "H", "hB"],
          VI: ["h", "hb", "H", "hB"],
          VN: ["H", "h"],
          VU: ["h", "H"],
          WF: ["H", "hB"],
          WS: ["h", "H"],
          XK: ["H", "hB", "h"],
          YE: ["h", "hB", "hb", "H"],
          YT: ["H", "hB"],
          ZA: ["H", "h", "hb", "hB"],
          ZM: ["h", "hb", "H", "hB"],
          ZW: ["H", "h"],
          "af-ZA": ["H", "h", "hB", "hb"],
          "ar-001": ["h", "hB", "hb", "H"],
          "ca-ES": ["H", "h", "hB"],
          "en-001": ["h", "hb", "H", "hB"],
          "en-HK": ["h", "hb", "H", "hB"],
          "en-IL": ["H", "h", "hb", "hB"],
          "en-MY": ["h", "hb", "H", "hB"],
          "es-BR": ["H", "h", "hB", "hb"],
          "es-ES": ["H", "h", "hB", "hb"],
          "es-GQ": ["H", "h", "hB", "hb"],
          "fr-CA": ["H", "h", "hB"],
          "gl-ES": ["H", "h", "hB"],
          "gu-IN": ["hB", "hb", "h", "H"],
          "hi-IN": ["hB", "h", "H"],
          "it-CH": ["H", "h", "hB"],
          "it-IT": ["H", "h", "hB"],
          "kn-IN": ["hB", "h", "H"],
          "ku-SY": ["H", "hB"],
          "ml-IN": ["hB", "h", "H"],
          "mr-IN": ["hB", "hb", "h", "H"],
          "pa-IN": ["hB", "hb", "h", "H"],
          "ta-IN": ["hB", "h", "hb", "H"],
          "te-IN": ["hB", "h", "H"],
          "zu-ZA": ["H", "hB", "hb", "h"]
        };

      function $(e) {
        let t = e.hourCycle;
        if (void 0 === t && e.hourCycles && e.hourCycles.length && (t = e.hourCycles[0]), t) switch (t) {
          case "h24":
            return "k";
          case "h23":
            return "H";
          case "h12":
            return "h";
          case "h11":
            return "K";
          default:
            throw new Error("Invalid hourCycle")
        }
        const r = e.language;
        let n;
        return "root" !== r && (n = e.maximize().region), (x[n || ""] || x[r || ""] || x[`${r}-001`] || x["001"])[0]
      }
      const j = new RegExp(`^${k.source}*`),
        V = new RegExp(`${k.source}*$`);

      function X(e, t) {
        return {
          start: e,
          end: t
        }
      }
      const K = !!Object.fromEntries,
        Z = !!String.prototype.trimStart,
        Y = !!String.prototype.trimEnd,
        W = K ? Object.fromEntries : function(e) {
          const t = {};
          for (const [r, n] of e) t[r] = n;
          return t
        },
        z = Z ? function(e) {
          return e.trimStart()
        } : function(e) {
          return e.replace(j, "")
        },
        q = Y ? function(e) {
          return e.trimEnd()
        } : function(e) {
          return e.replace(V, "")
        },
        J = new RegExp("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
      var Q = class {
        constructor(e, t = {}) {
          this.message = e, this.position = {
            offset: 0,
            line: 1,
            column: 1
          }, this.ignoreTag = !!t.ignoreTag, this.locale = t.locale, this.requiresOtherClause = !!t.requiresOtherClause, this.shouldParseSkeletons = !!t.shouldParseSkeletons
        }
        parse() {
          if (0 !== this.offset()) throw Error("parser can only be used once");
          return this.parseMessage(0, "", !1)
        }
        parseMessage(e, t, r) {
          let n = [];
          for (; !this.isEOF();) {
            const i = this.char();
            if (123 === i) {
              const t = this.parseArgument(e, r);
              if (t.err) return t;
              n.push(t.val)
            } else {
              if (125 === i && e > 0) break;
              if (35 !== i || "plural" !== t && "selectordinal" !== t) {
                if (60 === i && !this.ignoreTag && 47 === this.peek()) {
                  if (r) break;
                  return this.error(P.UNMATCHED_CLOSING_TAG, X(this.clonePosition(), this.clonePosition()))
                }
                if (60 === i && !this.ignoreTag && ee(this.peek() || 0)) {
                  const r = this.parseTag(e, t);
                  if (r.err) return r;
                  n.push(r.val)
                } else {
                  const r = this.parseLiteral(e, t);
                  if (r.err) return r;
                  n.push(r.val)
                }
              } else {
                const e = this.clonePosition();
                this.bump(), n.push({
                  type: I.pound,
                  location: X(e, this.clonePosition())
                })
              }
            }
          }
          return {
            val: n,
            err: null
          }
        }
        parseTag(e, t) {
          const r = this.clonePosition();
          this.bump();
          const n = this.parseTagName();
          if (this.bumpSpace(), this.bumpIf("/>")) return {
            val: {
              type: I.literal,
              value: `<${n}/>`,
              location: X(r, this.clonePosition())
            },
            err: null
          };
          if (this.bumpIf(">")) {
            const i = this.parseMessage(e + 1, t, !0);
            if (i.err) return i;
            const o = i.val,
              s = this.clonePosition();
            if (this.bumpIf("</")) {
              if (this.isEOF() || !ee(this.char())) return this.error(P.INVALID_TAG, X(s, this.clonePosition()));
              const e = this.clonePosition();
              return n !== this.parseTagName() ? this.error(P.UNMATCHED_CLOSING_TAG, X(e, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
                val: {
                  type: I.tag,
                  value: n,
                  children: o,
                  location: X(r, this.clonePosition())
                },
                err: null
              } : this.error(P.INVALID_TAG, X(s, this.clonePosition())))
            }
            return this.error(P.UNCLOSED_TAG, X(r, this.clonePosition()))
          }
          return this.error(P.INVALID_TAG, X(r, this.clonePosition()))
        }
        parseTagName() {
          const e = this.offset();
          for (this.bump(); !this.isEOF() && te(this.char());) this.bump();
          return this.message.slice(e, this.offset())
        }
        parseLiteral(e, t) {
          const r = this.clonePosition();
          let n = "";
          for (;;) {
            const r = this.tryParseQuote(t);
            if (r) {
              n += r;
              continue
            }
            const i = this.tryParseUnquoted(e, t);
            if (i) {
              n += i;
              continue
            }
            const o = this.tryParseLeftAngleBracket();
            if (!o) break;
            n += o
          }
          const i = X(r, this.clonePosition());
          return {
            val: {
              type: I.literal,
              value: n,
              location: i
            },
            err: null
          }
        }
        tryParseLeftAngleBracket() {
          return this.isEOF() || 60 !== this.char() || !this.ignoreTag && (ee(e = this.peek() || 0) || 47 === e) ? null : (this.bump(), "<");
          var e
        }
        tryParseQuote(e) {
          if (this.isEOF() || 39 !== this.char()) return null;
          switch (this.peek()) {
            case 39:
              return this.bump(), this.bump(), "'";
            case 123:
            case 60:
            case 62:
            case 125:
              break;
            case 35:
              if ("plural" === e || "selectordinal" === e) break;
              return null;
            default:
              return null
          }
          this.bump();
          const t = [this.char()];
          for (this.bump(); !this.isEOF();) {
            const e = this.char();
            if (39 === e) {
              if (39 !== this.peek()) {
                this.bump();
                break
              }
              t.push(39), this.bump()
            } else t.push(e);
            this.bump()
          }
          return String.fromCodePoint(...t)
        }
        tryParseUnquoted(e, t) {
          if (this.isEOF()) return null;
          const r = this.char();
          return 60 === r || 123 === r || 35 === r && ("plural" === t || "selectordinal" === t) || 125 === r && e > 0 ? null : (this.bump(), String.fromCodePoint(r))
        }
        parseArgument(e, t) {
          const r = this.clonePosition();
          if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(P.EXPECT_ARGUMENT_CLOSING_BRACE, X(r, this.clonePosition()));
          if (125 === this.char()) return this.bump(), this.error(P.EMPTY_ARGUMENT, X(r, this.clonePosition()));
          let n = this.parseIdentifierIfPossible().value;
          if (!n) return this.error(P.MALFORMED_ARGUMENT, X(r, this.clonePosition()));
          if (this.bumpSpace(), this.isEOF()) return this.error(P.EXPECT_ARGUMENT_CLOSING_BRACE, X(r, this.clonePosition()));
          switch (this.char()) {
            case 125:
              return this.bump(), {
                val: {
                  type: I.argument,
                  value: n,
                  location: X(r, this.clonePosition())
                },
                err: null
              };
            case 44:
              return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(P.EXPECT_ARGUMENT_CLOSING_BRACE, X(r, this.clonePosition())) : this.parseArgumentOptions(e, t, n, r);
            default:
              return this.error(P.MALFORMED_ARGUMENT, X(r, this.clonePosition()))
          }
        }
        parseIdentifierIfPossible() {
          const e = this.clonePosition(),
            t = this.offset(),
            r = (n = this.message, i = t, J.lastIndex = i, J.exec(n)[1] ?? "");
          var n, i;
          const o = t + r.length;
          return this.bumpTo(o), {
            value: r,
            location: X(e, this.clonePosition())
          }
        }
        parseArgumentOptions(e, t, r, n) {
          let i = this.clonePosition(),
            o = this.parseIdentifierIfPossible().value,
            s = this.clonePosition();
          switch (o) {
            case "":
              return this.error(P.EXPECT_ARGUMENT_TYPE, X(i, s));
            case "number":
            case "date":
            case "time": {
              this.bumpSpace();
              let e = null;
              if (this.bumpIf(",")) {
                this.bumpSpace();
                const t = this.clonePosition(),
                  r = this.parseSimpleArgStyleIfPossible();
                if (r.err) return r;
                const n = q(r.val);
                if (0 === n.length) return this.error(P.EXPECT_ARGUMENT_STYLE, X(this.clonePosition(), this.clonePosition()));
                e = {
                  style: n,
                  styleLocation: X(t, this.clonePosition())
                }
              }
              const t = this.tryParseArgumentClose(n);
              if (t.err) return t;
              const i = X(n, this.clonePosition());
              if (e && e.style.startsWith("::")) {
                let t = z(e.style.slice(2));
                if ("number" === o) {
                  const n = this.parseNumberSkeletonFromString(t, e.styleLocation);
                  return n.err ? n : {
                    val: {
                      type: I.number,
                      value: r,
                      location: i,
                      style: n.val
                    },
                    err: null
                  }
                } {
                  if (0 === t.length) return this.error(P.EXPECT_DATE_TIME_SKELETON, i);
                  let n = t;
                  this.locale && (n = function(e, t) {
                    let r = "";
                    for (let n = 0; n < e.length; n++) {
                      const i = e.charAt(n);
                      if ("j" === i) {
                        let o = 0;
                        for (; n + 1 < e.length && e.charAt(n + 1) === i;) o++, n++;
                        let s = 1 + (1 & o),
                          a = o < 2 ? 1 : 3 + (o >> 1),
                          l = "a",
                          h = $(t);
                        for ("H" != h && "k" != h || (a = 0); a-- > 0;) r += l;
                        for (; s-- > 0;) r = h + r
                      } else r += "J" === i ? "H" : i
                    }
                    return r
                  }(t, this.locale));
                  const s = {
                    type: S.dateTime,
                    pattern: n,
                    location: e.styleLocation,
                    parsedOptions: this.shouldParseSkeletons ? p(n) : {}
                  };
                  return {
                    val: {
                      type: "date" === o ? I.date : I.time,
                      value: r,
                      location: i,
                      style: s
                    },
                    err: null
                  }
                }
              }
              return {
                val: {
                  type: "number" === o ? I.number : "date" === o ? I.date : I.time,
                  value: r,
                  location: i,
                  style: e?.style ?? null
                },
                err: null
              }
            }
            case "plural":
            case "selectordinal":
            case "select": {
              const i = this.clonePosition();
              if (this.bumpSpace(), !this.bumpIf(",")) return this.error(P.EXPECT_SELECT_ARGUMENT_OPTIONS, X(i, {
                ...i
              }));
              this.bumpSpace();
              let s = this.parseIdentifierIfPossible(),
                a = 0;
              if ("select" !== o && "offset" === s.value) {
                if (!this.bumpIf(":")) return this.error(P.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, X(this.clonePosition(), this.clonePosition()));
                this.bumpSpace();
                const e = this.tryParseDecimalInteger(P.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, P.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
                if (e.err) return e;
                this.bumpSpace(), s = this.parseIdentifierIfPossible(), a = e.val
              }
              const l = this.tryParsePluralOrSelectOptions(e, o, t, s);
              if (l.err) return l;
              const h = this.tryParseArgumentClose(n);
              if (h.err) return h;
              const c = X(n, this.clonePosition());
              return "select" === o ? {
                val: {
                  type: I.select,
                  value: r,
                  options: W(l.val),
                  location: c
                },
                err: null
              } : {
                val: {
                  type: I.plural,
                  value: r,
                  options: W(l.val),
                  offset: a,
                  pluralType: "plural" === o ? "cardinal" : "ordinal",
                  location: c
                },
                err: null
              }
            }
            default:
              return this.error(P.INVALID_ARGUMENT_TYPE, X(i, s))
          }
        }
        tryParseArgumentClose(e) {
          return this.isEOF() || 125 !== this.char() ? this.error(P.EXPECT_ARGUMENT_CLOSING_BRACE, X(e, this.clonePosition())) : (this.bump(), {
            val: !0,
            err: null
          })
        }
        parseSimpleArgStyleIfPossible() {
          let e = 0;
          const t = this.clonePosition();
          for (; !this.isEOF();) switch (this.char()) {
            case 39: {
              this.bump();
              let e = this.clonePosition();
              if (!this.bumpUntil("'")) return this.error(P.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, X(e, this.clonePosition()));
              this.bump();
              break
            }
            case 123:
              e += 1, this.bump();
              break;
            case 125:
              if (!(e > 0)) return {
                val: this.message.slice(t.offset, this.offset()),
                err: null
              };
              e -= 1;
              break;
            default:
              this.bump()
          }
          return {
            val: this.message.slice(t.offset, this.offset()),
            err: null
          }
        }
        parseNumberSkeletonFromString(e, t) {
          let r = [];
          try {
            r = function(e) {
              if (0 === e.length) throw new Error("Number skeleton cannot be empty");
              const t = e.split(g).filter(e => e.length > 0),
                r = [];
              for (const e of t) {
                let t = e.split("/");
                if (0 === t.length) throw new Error("Invalid number skeleton");
                const [n, ...i] = t;
                for (const e of i)
                  if (0 === e.length) throw new Error("Invalid number skeleton");
                r.push({
                  stem: n,
                  options: i
                })
              }
              return r
            }(e)
          } catch {
            return this.error(P.INVALID_NUMBER_SKELETON, t)
          }
          return {
            val: {
              type: S.number,
              tokens: r,
              location: t,
              parsedOptions: this.shouldParseSkeletons ? N(r) : {}
            },
            err: null
          }
        }
        tryParsePluralOrSelectOptions(e, t, r, n) {
          let i = !1;
          const o = [],
            s = new Set;
          let {
            value: a,
            location: l
          } = n;
          for (;;) {
            if (0 === a.length) {
              const e = this.clonePosition();
              if ("select" === t || !this.bumpIf("=")) break; {
                const t = this.tryParseDecimalInteger(P.EXPECT_PLURAL_ARGUMENT_SELECTOR, P.INVALID_PLURAL_ARGUMENT_SELECTOR);
                if (t.err) return t;
                l = X(e, this.clonePosition()), a = this.message.slice(e.offset, this.offset())
              }
            }
            if (s.has(a)) return this.error("select" === t ? P.DUPLICATE_SELECT_ARGUMENT_SELECTOR : P.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, l);
            "other" === a && (i = !0), this.bumpSpace();
            const n = this.clonePosition();
            if (!this.bumpIf("{")) return this.error("select" === t ? P.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : P.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, X(this.clonePosition(), this.clonePosition()));
            const h = this.parseMessage(e + 1, t, r);
            if (h.err) return h;
            const c = this.tryParseArgumentClose(n);
            if (c.err) return c;
            o.push([a, {
              value: h.val,
              location: X(n, this.clonePosition())
            }]), s.add(a), this.bumpSpace(), ({
              value: a,
              location: l
            } = this.parseIdentifierIfPossible())
          }
          return 0 === o.length ? this.error("select" === t ? P.EXPECT_SELECT_ARGUMENT_SELECTOR : P.EXPECT_PLURAL_ARGUMENT_SELECTOR, X(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !i ? this.error(P.MISSING_OTHER_CLAUSE, X(this.clonePosition(), this.clonePosition())) : {
            val: o,
            err: null
          }
        }
        tryParseDecimalInteger(e, t) {
          let r = 1;
          const n = this.clonePosition();
          this.bumpIf("+") || this.bumpIf("-") && (r = -1);
          let i = !1,
            o = 0;
          for (; !this.isEOF();) {
            const e = this.char();
            if (!(e >= 48 && e <= 57)) break;
            i = !0, o = 10 * o + (e - 48), this.bump()
          }
          const s = X(n, this.clonePosition());
          return i ? (o *= r, Number.isSafeInteger(o) ? {
            val: o,
            err: null
          } : this.error(t, s)) : this.error(e, s)
        }
        offset() {
          return this.position.offset
        }
        isEOF() {
          return this.offset() === this.message.length
        }
        clonePosition() {
          return {
            offset: this.position.offset,
            line: this.position.line,
            column: this.position.column
          }
        }
        char() {
          const e = this.position.offset;
          if (e >= this.message.length) throw Error("out of bound");
          const t = this.message.codePointAt(e);
          if (void 0 === t) throw Error(`Offset ${e} is at invalid UTF-16 code unit boundary`);
          return t
        }
        error(e, t) {
          return {
            val: null,
            err: {
              kind: e,
              message: this.message,
              location: t
            }
          }
        }
        bump() {
          if (this.isEOF()) return;
          const e = this.char();
          10 === e ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += e < 65536 ? 1 : 2)
        }
        bumpIf(e) {
          if (this.message.startsWith(e, this.offset())) {
            for (let t = 0; t < e.length; t++) this.bump();
            return !0
          }
          return !1
        }
        bumpUntil(e) {
          const t = this.offset(),
            r = this.message.indexOf(e, t);
          return r >= 0 ? (this.bumpTo(r), !0) : (this.bumpTo(this.message.length), !1)
        }
        bumpTo(e) {
          if (this.offset() > e) throw Error(`targetOffset ${e} must be greater than or equal to the current offset ${this.offset()}`);
          for (e = Math.min(e, this.message.length);;) {
            const t = this.offset();
            if (t === e) break;
            if (t > e) throw Error(`targetOffset ${e} is at invalid UTF-16 code unit boundary`);
            if (this.bump(), this.isEOF()) break
          }
        }
        bumpSpace() {
          for (; !this.isEOF() && re(this.char());) this.bump()
        }
        peek() {
          if (this.isEOF()) return null;
          const e = this.char(),
            t = this.offset();
          return this.message.charCodeAt(t + (e >= 65536 ? 2 : 1)) ?? null
        }
      };

      function ee(e) {
        return e >= 97 && e <= 122 || e >= 65 && e <= 90
      }

      function te(e) {
        return 45 === e || 46 === e || e >= 48 && e <= 57 || 95 === e || e >= 97 && e <= 122 || e >= 65 && e <= 90 || 183 == e || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039
      }

      function re(e) {
        return e >= 9 && e <= 13 || 32 === e || 133 === e || e >= 8206 && e <= 8207 || 8232 === e || 8233 === e
      }

      function ne(e) {
        e.forEach(e => {
          if (delete e.location, O(e) || C(e))
            for (const t in e.options) delete e.options[t].location, ne(e.options[t].value);
          else M(e) && U(e.style) || (w(e) || v(e)) && G(e.style) ? delete e.style.location : F(e) && ne(e.children)
        })
      }

      function ie(e, t = {}) {
        t = {
          shouldParseSkeletons: !0,
          requiresOtherClause: !0,
          ...t
        };
        const r = new Q(e, t).parse();
        if (r.err) {
          const e = SyntaxError(P[r.err.kind]);
          throw e.location = r.err.location, e.originalMessage = r.err.message, e
        }
        return t?.captureLocation || ne(r.val), r.val
      }
      let oe = function(e) {
        return e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API", e
      }({});
      var se = class extends Error {
          constructor(e, t, r) {
            super(e), this.code = t, this.originalMessage = r
          }
          toString() {
            return `[formatjs Error: ${this.code}] ${this.message}`
          }
        },
        ae = class extends se {
          constructor(e, t, r, n) {
            super(`Invalid values for "${e}": "${t}". Options are "${Object.keys(r).join('", "')}"`, oe.INVALID_VALUE, n)
          }
        },
        le = class extends se {
          constructor(e, t, r) {
            super(`Value for "${e}" must be of type ${t}`, oe.INVALID_VALUE, r)
          }
        },
        he = class extends se {
          constructor(e, t) {
            super(`The intl string context variable "${e}" was not provided to the string "${t}"`, oe.MISSING_VALUE, t)
          }
        };
      let ce = function(e) {
        return e[e.literal = 0] = "literal", e[e.object = 1] = "object", e
      }({});

      function ue(e) {
        return "function" == typeof e
      }

      function me(e, t, r, n, i, o, s) {
        if (1 === e.length && L(e[0])) return [{
          type: ce.literal,
          value: e[0].value
        }];
        const a = [];
        for (const l of e) {
          if (L(l)) {
            a.push({
              type: ce.literal,
              value: l.value
            });
            continue
          }
          if (D(l)) {
            "number" == typeof o && a.push({
              type: ce.literal,
              value: r.getNumberFormat(t).format(o)
            });
            continue
          }
          const {
            value: e
          } = l;
          if (!i || !(e in i)) throw new he(e, s);
          let h = i[e];
          if (R(l)) h && "string" != typeof h && "number" != typeof h && "bigint" != typeof h || (h = "string" == typeof h || "number" == typeof h || "bigint" == typeof h ? String(h) : ""), a.push({
            type: "string" == typeof h ? ce.literal : ce.object,
            value: h
          });
          else {
            if (w(l)) {
              const e = "string" == typeof l.style ? n.date[l.style] : G(l.style) ? l.style.parsedOptions : void 0;
              a.push({
                type: ce.literal,
                value: r.getDateTimeFormat(t, e).format(h)
              });
              continue
            }
            if (v(l)) {
              const e = "string" == typeof l.style ? n.time[l.style] : G(l.style) ? l.style.parsedOptions : n.time.medium;
              a.push({
                type: ce.literal,
                value: r.getDateTimeFormat(t, e).format(h)
              });
              continue
            }
            if (M(l)) {
              const e = "string" == typeof l.style ? n.number[l.style] : U(l.style) ? l.style.parsedOptions : void 0;
              if (e && e.scale) {
                const t = e.scale || 1;
                if ("bigint" == typeof h) {
                  if (!Number.isInteger(t)) throw new TypeError(`Cannot apply fractional scale ${t} to bigint value. Scale must be an integer when formatting bigint.`);
                  h *= BigInt(t)
                } else h *= t
              }
              a.push({
                type: ce.literal,
                value: r.getNumberFormat(t, e).format(h)
              });
              continue
            }
            if (F(l)) {
              const {
                children: e,
                value: h
              } = l, c = i[h];
              if (!ue(c)) throw new le(h, "function", s);
              let u = c(me(e, t, r, n, i, o).map(e => e.value));
              Array.isArray(u) || (u = [u]), a.push(...u.map(e => ({
                type: "string" == typeof e ? ce.literal : ce.object,
                value: e
              })))
            }
            if (O(l)) {
              const e = h,
                o = (Object.prototype.hasOwnProperty.call(l.options, e) ? l.options[e] : void 0) || l.options.other;
              if (!o) throw new ae(l.value, h, Object.keys(l.options), s);
              a.push(...me(o.value, t, r, n, i));
              continue
            }
            if (C(l)) {
              const e = `=${h}`;
              let o = Object.prototype.hasOwnProperty.call(l.options, e) ? l.options[e] : void 0;
              if (!o) {
                if (!Intl.PluralRules) throw new se('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', oe.MISSING_INTL_API, s);
                const e = "bigint" == typeof h ? Number(h) : h,
                  n = r.getPluralRules(t, {
                    type: l.pluralType
                  }).select(e - (l.offset || 0));
                o = (Object.prototype.hasOwnProperty.call(l.options, n) ? l.options[n] : void 0) || l.options.other
              }
              if (!o) throw new ae(l.value, h, Object.keys(l.options), s);
              const c = "bigint" == typeof h ? Number(h) : h;
              a.push(...me(o.value, t, r, n, i, c - (l.offset || 0)));
              continue
            }
          }
        }
        return (l = a).length < 2 ? l : l.reduce((e, t) => {
          const r = e[e.length - 1];
          return r && r.type === ce.literal && t.type === ce.literal ? r.value += t.value : e.push(t), e
        }, []);
        var l
      }

      function fe(e) {
        return {
          create: () => ({
            get: t => e[t],
            set(t, r) {
              e[t] = r
            }
          })
        }
      }
      var pe = class e {
        constructor(t, r = e.defaultLocale, n, o) {
          if (this.formatterCache = {
              number: {},
              dateTime: {},
              pluralRules: {}
            }, this.format = e => {
              const t = this.formatToParts(e);
              if (1 === t.length) return t[0].value;
              const r = t.reduce((e, t) => (e.length && t.type === ce.literal && "string" == typeof e[e.length - 1] ? e[e.length - 1] += t.value : e.push(t.value), e), []);
              return r.length <= 1 ? r[0] || "" : r
            }, this.formatToParts = e => me(this.ast, this.locales, this.formatters, this.formats, e, void 0, this.message), this.resolvedOptions = () => ({
              locale: this.resolvedLocale?.toString() || Intl.NumberFormat.supportedLocalesOf(this.locales)[0]
            }), this.getAst = () => this.ast, this.locales = r, this.resolvedLocale = e.resolveLocale(r), "string" == typeof t) {
            if (this.message = t, !e.__parse) throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
            const {
              ...r
            } = o || {};
            this.ast = e.__parse(t, {
              ...r,
              locale: this.resolvedLocale
            })
          } else this.ast = t;
          if (!Array.isArray(this.ast)) throw new TypeError("A message must be provided as a String or AST.");
          var s, a;
          this.formats = (s = e.formats, (a = n) ? Object.keys(s).reduce((e, t) => {
            var r, n;
            return e[t] = (r = s[t], (n = a[t]) ? {
              ...r,
              ...n,
              ...Object.keys(r).reduce((e, t) => (e[t] = {
                ...r[t],
                ...n[t]
              }, e), {})
            } : r), e
          }, {
            ...s
          }) : s), this.formatters = o && o.formatters || function(e = {
            number: {},
            dateTime: {},
            pluralRules: {}
          }) {
            return {
              getNumberFormat: i((...e) => new Intl.NumberFormat(...e), {
                cache: fe(e.number),
                strategy: m.variadic
              }),
              getDateTimeFormat: i((...e) => new Intl.DateTimeFormat(...e), {
                cache: fe(e.dateTime),
                strategy: m.variadic
              }),
              getPluralRules: i((...e) => new Intl.PluralRules(...e), {
                cache: fe(e.pluralRules),
                strategy: m.variadic
              })
            }
          }(this.formatterCache)
        }
        static {
          this.memoizedDefaultLocale = null
        }
        static get defaultLocale() {
          return e.memoizedDefaultLocale || (e.memoizedDefaultLocale = (new Intl.NumberFormat).resolvedOptions().locale), e.memoizedDefaultLocale
        }
        static {
          this.resolveLocale = e => {
            if (void 0 === Intl.Locale) return;
            const t = Intl.NumberFormat.supportedLocalesOf(e);
            return t.length > 0 ? new Intl.Locale(t[0]) : new Intl.Locale("string" == typeof e ? e : e[0])
          }
        }
        static {
          this.__parse = ie
        }
        static {
          this.formats = {
            number: {
              integer: {
                maximumFractionDigits: 0
              },
              currency: {
                style: "currency"
              },
              percent: {
                style: "percent"
              }
            },
            date: {
              short: {
                month: "numeric",
                day: "numeric",
                year: "2-digit"
              },
              medium: {
                month: "short",
                day: "numeric",
                year: "numeric"
              },
              long: {
                month: "long",
                day: "numeric",
                year: "numeric"
              },
              full: {
                weekday: "long",
                month: "long",
                day: "numeric",
                year: "numeric"
              }
            },
            time: {
              short: {
                hour: "numeric",
                minute: "numeric"
              },
              medium: {
                hour: "numeric",
                minute: "numeric",
                second: "numeric"
              },
              long: {
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
                timeZoneName: "short"
              },
              full: {
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
                timeZoneName: "short"
              }
            }
          }
        }
      };
      let ge = function(e) {
        return e.FORMAT_ERROR = "FORMAT_ERROR", e.UNSUPPORTED_FORMATTER = "UNSUPPORTED_FORMATTER", e.INVALID_CONFIG = "INVALID_CONFIG", e.MISSING_DATA = "MISSING_DATA", e.MISSING_TRANSLATION = "MISSING_TRANSLATION", e
      }({});
      var de = class e extends Error {
          constructor(t, r, n) {
            const i = n ? n instanceof Error ? n : new Error(String(n)) : void 0;
            super(`[@formatjs/intl Error ${t}] ${r}\n${i?`\n${i.message}\n${i.stack}`:""}`), this.code = t, "function" == typeof Error.captureStackTrace && Error.captureStackTrace(this, e)
          }
        },
        Ee = class extends de {
          constructor(e, t) {
            super(ge.UNSUPPORTED_FORMATTER, e, t)
          }
        },
        be = class extends de {
          constructor(e, t) {
            super(ge.INVALID_CONFIG, e, t)
          }
        },
        ye = class extends de {
          constructor(e, t) {
            super(ge.MISSING_DATA, e, t)
          }
        },
        Te = class extends de {
          constructor(e, t, r) {
            super(ge.FORMAT_ERROR, `${e}\nLocale: ${t}\n`, r), this.locale = t
          }
        },
        He = class extends Te {
          constructor(e, t, r, n) {
            super(`${e}\nMessageID: ${r?.id}\nDefault Message: ${r?.defaultMessage}\nDescription: ${r?.description}\n`, t, n), this.descriptor = r, this.locale = t
          }
        },
        _e = class extends de {
          constructor(e, t) {
            super(ge.MISSING_TRANSLATION, `Missing message: "${e.id}" for locale "${t}", using ${e.defaultMessage?`default message (${"string"==typeof e.defaultMessage?e.defaultMessage:e.defaultMessage.map(e=>e.value??JSON.stringify(e)).join()})`:"id"} as fallback.`), this.descriptor = e
          }
        };

      function Be(e, t, r = {}) {
        return t.reduce((t, n) => (n in e ? t[n] = e[n] : n in r && (t[n] = r[n]), t), {})
      }
      const Ae = {
        formats: {},
        messages: {},
        timeZone: void 0,
        defaultLocale: "en",
        defaultFormats: {},
        fallbackOnEmptyString: !0,
        onError: e => {
          console.error(e)
        },
        onWarn: e => {
          console.warn(e)
        }
      };

      function Ne(e) {
        return {
          create: () => ({
            get: t => e[t],
            set(t, r) {
              e[t] = r
            }
          })
        }
      }

      function Pe(e, t, r, n) {
        const i = e && e[t];
        let o;
        if (i && (o = i[r]), o) return o;
        n(new Ee(`No ${t} format named: ${r}`))
      }

      function Ie(e, t) {
        return Object.keys(e).reduce((r, n) => (r[n] = {
          timeZone: t,
          ...e[n]
        }, r), {})
      }

      function Se(e, t) {
        return Object.keys({
          ...e,
          ...t
        }).reduce((r, n) => (r[n] = {
          ...e[n],
          ...t[n]
        }, r), {})
      }

      function Le(e, t) {
        if (!t) return e;
        const r = pe.formats;
        return {
          ...r,
          ...e,
          date: Se(Ie(r.date, t), Ie(e.date || {}, t)),
          time: Se(Ie(r.time, t), Ie(e.time || {}, t))
        }
      }
      const Re = ({
          locale: e,
          formats: t,
          messages: r,
          defaultLocale: n,
          defaultFormats: i,
          fallbackOnEmptyString: o,
          onError: s,
          timeZone: a,
          defaultRichTextElements: l
        }, h, c = {
          id: ""
        }, u, m) => {
          const {
            id: f,
            defaultMessage: p
          } = c;
          ! function(e, t, r = Error) {
            if (!e) throw new r("[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.github.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.github.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.github.io/docs/tooling/linter#enforce-id)\nto autofix this issue")
          }(!!f);
          const g = String(f),
            d = r && Object.prototype.hasOwnProperty.call(r, g) && r[g];
          if (Array.isArray(d) && 1 === d.length && d[0].type === I.literal) return d[0].value;
          if (u = {
              ...l,
              ...u
            }, t = Le(t, a), i = Le(i, a), !d) {
            if (!1 === o && "" === d) return d;
            if ((!p || e && e.toLowerCase() !== n.toLowerCase()) && s(new _e(c, e)), p) try {
              return h.getMessageFormat(p, n, i, m).format(u)
            } catch (t) {
              return s(new He(`Error formatting default message for: "${g}", rendering default message verbatim`, e, c, t)), "string" == typeof p ? p : g
            }
            return g
          }
          try {
            return h.getMessageFormat(d, e, t, {
              formatters: h,
              ...m
            }).format(u)
          } catch (t) {
            s(new He(`Error formatting message: "${g}", using ${p?"default message":"id"} as fallback.`, e, c, t))
          }
          if (p) try {
            return h.getMessageFormat(p, n, i, m).format(u)
          } catch (t) {
            s(new He(`Error formatting the default message for: "${g}", rendering message verbatim`, e, c, t))
          }
          return "string" == typeof d ? d : "string" == typeof p ? p : g
        },
        Me = ["formatMatcher", "timeZone", "hour12", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "hourCycle", "dateStyle", "timeStyle", "calendar", "numberingSystem", "fractionalSecondDigits"];

      function we({
        locale: e,
        formats: t,
        onError: r,
        timeZone: n
      }, i, o, s = {}) {
        const {
          format: a
        } = s;
        let l = Be(s, Me, {
          ...n && {
            timeZone: n
          },
          ...a && Pe(t, i, a, r)
        });
        return "time" !== i || l.hour || l.minute || l.second || l.timeStyle || l.dateStyle || (l = {
          ...l,
          hour: "numeric",
          minute: "numeric"
        }), o(e, l)
      }

      function ve(e, t, r, n = {}) {
        const i = "string" == typeof r ? new Date(r || 0) : r;
        try {
          return we(e, "date", t, n).format(i)
        } catch (t) {
          e.onError(new Te("Error formatting date.", e.locale, t))
        }
        return String(i)
      }

      function Oe(e, t, r, n = {}) {
        const i = "string" == typeof r ? new Date(r || 0) : r;
        try {
          return we(e, "time", t, n).format(i)
        } catch (t) {
          e.onError(new Te("Error formatting time.", e.locale, t))
        }
        return String(i)
      }

      function Ce(e, t, r, n, i = {}) {
        const o = "string" == typeof r ? new Date(r || 0) : r,
          s = "string" == typeof n ? new Date(n || 0) : n;
        try {
          return we(e, "dateTimeRange", t, i).formatRange(o, s)
        } catch (t) {
          e.onError(new Te("Error formatting date time range.", e.locale, t))
        }
        return String(o)
      }

      function De(e, t, r, n = {}) {
        const i = "string" == typeof r ? new Date(r || 0) : r;
        try {
          return we(e, "date", t, n).formatToParts(i)
        } catch (t) {
          e.onError(new Te("Error formatting date.", e.locale, t))
        }
        return []
      }

      function Fe(e, t, r, n = {}) {
        const i = "string" == typeof r ? new Date(r || 0) : r;
        try {
          return we(e, "time", t, n).formatToParts(i)
        } catch (t) {
          e.onError(new Te("Error formatting time.", e.locale, t))
        }
        return []
      }
      const Ue = ["style", "type", "fallback", "languageDisplay"];

      function Ge({
        locale: e,
        onError: t
      }, r, n, i) {
        Intl.DisplayNames || t(new se('Intl.DisplayNames is not available in this environment.\nTry polyfilling it using "@formatjs/intl-displaynames"\n', oe.MISSING_INTL_API));
        const o = Be(i, Ue);
        try {
          return r(e, o).of(n)
        } catch (r) {
          t(new Te("Error formatting display name.", e, r))
        }
      }
      const ke = ["type", "style"],
        xe = Date.now();

      function $e(e, t, r, n = {}) {
        const i = je(e, t, r, n).reduce((e, t) => {
          const r = t.value;
          return "string" != typeof r ? e.push(r) : "string" == typeof e[e.length - 1] ? e[e.length - 1] += r : e.push(r), e
        }, []);
        return 1 === i.length ? i[0] : 0 === i.length ? "" : i
      }

      function je({
        locale: e,
        onError: t
      }, r, n, i = {}) {
        Intl.ListFormat || t(new se('Intl.ListFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-listformat"\n', oe.MISSING_INTL_API));
        const o = Be(i, ke);
        try {
          const t = {},
            i = Array.from(n).map((e, r) => {
              if ("object" == typeof e && null !== e) {
                const n = function(e) {
                  return `${xe}_${e}_${xe}`
                }(r);
                return t[n] = e, n
              }
              return String(e)
            });
          return r(e, o).formatToParts(i).map(e => "literal" === e.type ? e : {
            ...e,
            value: t[e.value] || e.value
          })
        } catch (r) {
          t(new Te("Error formatting list.", e, r))
        }
        return n
      }
      const Ve = ["type"];

      function Xe({
        locale: e,
        onError: t
      }, r, n, i = {}) {
        Intl.PluralRules || t(new se('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', oe.MISSING_INTL_API));
        const o = Be(i, Ve);
        try {
          return r(e, o).select(n)
        } catch (r) {
          t(new Te("Error formatting plural.", e, r))
        }
        return "other"
      }
      const Ke = ["numeric", "style"];

      function Ze(e, t, r, n, i = {}) {
        n || (n = "second"), Intl.RelativeTimeFormat || e.onError(new se('Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n', oe.MISSING_INTL_API));
        try {
          return function({
            locale: e,
            formats: t,
            onError: r
          }, n, i = {}) {
            const {
              format: o
            } = i;
            return n(e, Be(i, Ke, !!o && Pe(t, "relative", o, r) || {}))
          }(e, t, i).format(r, n)
        } catch (t) {
          e.onError(new Te("Error formatting relative time.", e.locale, t))
        }
        return String(r)
      }
      const Ye = ["style", "currency", "unit", "unitDisplay", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "currencyDisplay", "currencySign", "notation", "signDisplay", "unit", "unitDisplay", "numberingSystem", "trailingZeroDisplay", "roundingPriority", "roundingIncrement", "roundingMode"];

      function We({
        locale: e,
        formats: t,
        onError: r
      }, n, i = {}) {
        const {
          format: o
        } = i;
        return n(e, Be(i, Ye, o && Pe(t, "number", o, r) || {}))
      }

      function ze(e, t, r, n = {}) {
        try {
          return We(e, t, n).format(r)
        } catch (t) {
          e.onError(new Te("Error formatting number.", e.locale, t))
        }
        return String(r)
      }

      function qe(e, t, r, n = {}) {
        try {
          return We(e, t, n).formatToParts(r)
        } catch (t) {
          e.onError(new Te("Error formatting number.", e.locale, t))
        }
        return []
      }

      function Je(e, t) {
        const r = function(e = {
            dateTime: {},
            number: {},
            message: {},
            relativeTime: {},
            pluralRules: {},
            list: {},
            displayNames: {}
          }) {
            const t = Intl.RelativeTimeFormat,
              r = Intl.ListFormat,
              n = Intl.DisplayNames,
              o = i((...e) => new Intl.DateTimeFormat(...e), {
                cache: Ne(e.dateTime),
                strategy: m.variadic
              }),
              s = i((...e) => new Intl.NumberFormat(...e), {
                cache: Ne(e.number),
                strategy: m.variadic
              }),
              a = i((...e) => new Intl.PluralRules(...e), {
                cache: Ne(e.pluralRules),
                strategy: m.variadic
              });
            return {
              getDateTimeFormat: o,
              getNumberFormat: s,
              getMessageFormat: i((e, t, r, n) => new pe(e, t, r, {
                formatters: {
                  getNumberFormat: s,
                  getDateTimeFormat: o,
                  getPluralRules: a
                },
                ...n
              }), {
                cache: Ne(e.message),
                strategy: m.variadic
              }),
              getRelativeTimeFormat: i((...e) => new t(...e), {
                cache: Ne(e.relativeTime),
                strategy: m.variadic
              }),
              getPluralRules: a,
              getListFormat: i((...e) => new r(...e), {
                cache: Ne(e.list),
                strategy: m.variadic
              }),
              getDisplayNames: i((...e) => new n(...e), {
                cache: Ne(e.displayNames),
                strategy: m.variadic
              })
            }
          }(t),
          n = {
            ...Ae,
            ...e
          },
          {
            locale: o,
            defaultLocale: s,
            onError: a
          } = n;
        return o ? !Intl.NumberFormat.supportedLocalesOf(o).length && a ? a(new ye(`Missing locale data for locale: "${o}" in Intl.NumberFormat. Using default locale: "${s}" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details`)) : !Intl.DateTimeFormat.supportedLocalesOf(o).length && a && a(new ye(`Missing locale data for locale: "${o}" in Intl.DateTimeFormat. Using default locale: "${s}" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details`)) : (a && a(new be(`"locale" was not configured, using "${s}" as fallback. See https://formatjs.github.io/docs/react-intl/api#intlshape for more details`)), n.locale = n.defaultLocale || "en"),
          function(e) {
            var t;
            e.onWarn && e.defaultRichTextElements && "string" == typeof((t = e.messages || {}) ? t[Object.keys(t)[0]] : void 0) && e.onWarn('[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. \nPlease consider using "@formatjs/cli" to pre-compile your messages for performance.\nFor more details see https://formatjs.github.io/docs/getting-started/message-distribution')
          }(n), {
            ...n,
            formatters: r,
            formatNumber: ze.bind(null, n, r.getNumberFormat),
            formatNumberToParts: qe.bind(null, n, r.getNumberFormat),
            formatRelativeTime: Ze.bind(null, n, r.getRelativeTimeFormat),
            formatDate: ve.bind(null, n, r.getDateTimeFormat),
            formatDateToParts: De.bind(null, n, r.getDateTimeFormat),
            formatTime: Oe.bind(null, n, r.getDateTimeFormat),
            formatDateTimeRange: Ce.bind(null, n, r.getDateTimeFormat),
            formatTimeToParts: Fe.bind(null, n, r.getDateTimeFormat),
            formatPlural: Xe.bind(null, n, r.getPluralRules),
            formatMessage: Re.bind(null, n, r),
            $t: Re.bind(null, n, r),
            formatList: $e.bind(null, n, r.getListFormat),
            formatListToParts: je.bind(null, n, r.getListFormat),
            formatDisplayName: Ge.bind(null, n, r.getDisplayNames)
          }
      }
      var Qe = r(42295);

      function et(e, t, r = Error) {
        if (!e) throw new r(t)
      }

      function tt(e) {
        et(e, "[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")
      }
      const rt = {
          ...Ae,
          textComponent: n.Fragment
        },
        nt = e => n.Children.toArray(e).map((e, t) => n.isValidElement(e) ? (0, Qe.jsx)(n.Fragment, {
          children: e
        }, t) : e);

      function it(e, t) {
        if (e === t) return !0;
        if (!e || !t) return !1;
        var r = Object.keys(e),
          n = Object.keys(t),
          i = r.length;
        if (n.length !== i) return !1;
        for (var o = 0; o < i; o++) {
          var s = r[o];
          if (e[s] !== t[s] || !Object.prototype.hasOwnProperty.call(t, s)) return !1
        }
        return !0
      }
      const ot = n.createContext(null),
        st = ot.Provider;

      function at() {
        const e = n.useContext(ot);
        return tt(e), e
      }
      var lt = function(e) {
          return e.formatDate = "FormattedDate", e.formatTime = "FormattedTime", e.formatNumber = "FormattedNumber", e.formatList = "FormattedList", e.formatDisplayName = "FormattedDisplayName", e
        }(lt || {}),
        ht = function(e) {
          return e.formatDate = "FormattedDateParts", e.formatTime = "FormattedTimeParts", e.formatNumber = "FormattedNumberParts", e.formatList = "FormattedListParts", e
        }(ht || {});
      const ct = e => {
        const t = at(),
          {
            value: r,
            children: n,
            ...i
          } = e;
        return n(t.formatNumberToParts(r, i))
      };

      function ut(e) {
        const t = t => {
          const r = at(),
            {
              value: n,
              children: i,
              ...o
            } = t,
            s = "string" == typeof n ? new Date(n || 0) : n;
          return i("formatDate" === e ? r.formatDateToParts(s, o) : r.formatTimeToParts(s, o))
        };
        return t.displayName = ht[e], t
      }

      function mt(e) {
        const t = t => {
          const r = at(),
            {
              value: i,
              children: o,
              ...s
            } = t,
            a = r[e](i, s);
          return "function" == typeof o ? o(a) : (0, Qe.jsx)(r.textComponent || n.Fragment, {
            children: a
          })
        };
        return t.displayName = lt[e], t
      }

      function ft(e) {
        return e ? Object.keys(e).reduce((t, r) => {
          const n = e[r];
          var i;
          return t[r] = ue(n) ? (i = n, function(e) {
            return i(nt(e))
          }) : n, t
        }, {}) : e
      }
      ct.displayName = "FormattedNumberParts", ct.displayName = "FormattedNumberParts";
      const pt = (e, t, r, n, ...i) => {
          const o = Re(e, t, r, ft(n), ...i);
          return Array.isArray(o) ? nt(o) : o
        },
        gt = ({
          defaultRichTextElements: e,
          ...t
        }, r) => {
          const n = ft(e),
            i = Je({
              ...rt,
              ...t,
              defaultRichTextElements: n
            }, r),
            o = {
              locale: i.locale,
              timeZone: i.timeZone,
              fallbackOnEmptyString: i.fallbackOnEmptyString,
              formats: i.formats,
              defaultLocale: i.defaultLocale,
              defaultFormats: i.defaultFormats,
              messages: i.messages,
              onError: i.onError,
              defaultRichTextElements: n
            };
          return {
            ...i,
            formatMessage: pt.bind(null, o, i.formatters),
            $t: pt.bind(null, o, i.formatters)
          }
        };

      function dt(e) {
        const {
          formatMessage: t,
          textComponent: r = n.Fragment
        } = at(), {
          id: i,
          description: o,
          defaultMessage: s,
          values: a,
          children: l,
          tagName: h = r,
          ignoreTag: c
        } = e, u = t({
          id: i,
          description: o,
          defaultMessage: s
        }, a, {
          ignoreTag: c
        });
        return "function" == typeof l ? l(Array.isArray(u) ? u : [u]) : h ? (0, Qe.jsx)(h, {
          children: u
        }) : (0, Qe.jsx)(Qe.Fragment, {
          children: u
        })
      }
      dt.displayName = "FormattedMessage";
      const Et = n.memo(dt, function(e, t) {
        const {
          values: r,
          ...n
        } = e, {
          values: i,
          ...o
        } = t;
        return it(i, r) && it(n, o)
      });

      function bt(e) {
        const t = n.useRef({
            dateTime: {},
            number: {},
            message: {},
            relativeTime: {},
            pluralRules: {},
            list: {},
            displayNames: {}
          }),
          r = n.useRef(void 0),
          i = n.useRef(void 0),
          o = {};
        for (const t in e) void 0 !== e[t] && (o[t] = e[t]);
        const s = function(e) {
          return {
            locale: e.locale,
            timeZone: e.timeZone,
            fallbackOnEmptyString: e.fallbackOnEmptyString,
            formats: e.formats,
            textComponent: e.textComponent,
            messages: e.messages,
            defaultLocale: e.defaultLocale,
            defaultFormats: e.defaultFormats,
            onError: e.onError,
            onWarn: e.onWarn,
            wrapRichTextChunksInFragment: e.wrapRichTextChunksInFragment,
            defaultRichTextElements: e.defaultRichTextElements
          }
        }({
          ...rt,
          ...o
        });
        return r.current && it(r.current, s) || (r.current = s, i.current = gt(s, t.current)), tt(i.current), (0, Qe.jsx)(st, {
          value: i.current,
          children: e.children
        })
      }
      Et.displayName = "MemoizedFormattedMessage", bt.displayName = "IntlProvider";
      const yt = bt;

      function Tt(e) {
        return e
      }
      mt("formatDate"), mt("formatTime"), mt("formatNumber"), mt("formatList"), mt("formatDisplayName"), ut("formatDate"), ut("formatTime")
    }
  }
]);