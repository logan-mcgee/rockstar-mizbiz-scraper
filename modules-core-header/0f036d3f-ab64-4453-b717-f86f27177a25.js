try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "0f036d3f-ab64-4453-b717-f86f27177a25", e._sentryDebugIdIdentifier = "sentry-dbid-0f036d3f-ab64-4453-b717-f86f27177a25")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [1800], {
    21152(e, t, r) {
      r.d(t, {
        us: () => n.us
      });
      var n = r(67838);
      r(98065)
    },
    92782(e, t, r) {
      r.d(t, {
        NP: () => n.NP
      });
      var n = r(43870)
    },
    33558(e, t, r) {
      r.d(t, {
        sA: () => mt,
        Dk: () => pt,
        YK: () => gt,
        tz: () => it
      });
      var n = r(4637);

      function i(e, t) {
        const r = t && t.cache ? t.cache : u,
          n = t && t.serializer ? t.serializer : l;
        return (t && t.strategy ? t.strategy : h)(e, {
          cache: r,
          serializer: n
        })
      }

      function s(e, t, r, n) {
        const i = null == (s = n) || "number" == typeof s || "boolean" == typeof s ? n : r(n);
        var s;
        let o = t.get(i);
        return void 0 === o && (o = e.call(this, n), t.set(i, o)), o
      }

      function o(e, t, r) {
        const n = Array.prototype.slice.call(arguments, 3),
          i = r(n);
        let s = t.get(i);
        return void 0 === s && (s = e.apply(this, n), t.set(i, s)), s
      }

      function a(e, t, r, n, i) {
        return r.bind(t, e, n, i)
      }

      function h(e, t) {
        return a(e, this, 1 === e.length ? s : o, t.cache.create(), t.serializer)
      }
      const l = function() {
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
            return a(e, this, o, t.cache.create(), t.serializer)
          },
          monadic: function(e, t) {
            return a(e, this, s, t.cache.create(), t.serializer)
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
      const b = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
        y = /^(@+)?(\+|#+)?[rs]?$/g,
        E = /(\*)(0+)|(#+)(0+)|(0+)/g,
        H = /^(0+)$/;

      function T(e) {
        const t = {};
        return "r" === e[e.length - 1] ? t.roundingPriority = "morePrecision" : "s" === e[e.length - 1] && (t.roundingPriority = "lessPrecision"), e.replace(y, function(e, r, n) {
          return "string" != typeof n ? (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length) : "+" === n ? t.minimumSignificantDigits = r.length : "#" === r[0] ? t.maximumSignificantDigits = r.length : (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length + ("string" == typeof n ? n.length : 0)), ""
        }), t
      }

      function B(e) {
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

      function I(e) {
        let t;
        if ("E" === e[0] && "E" === e[1] ? (t = {
            notation: "engineering"
          }, e = e.slice(2)) : "E" === e[0] && (t = {
            notation: "scientific"
          }, e = e.slice(1)), t) {
          const r = e.slice(0, 2);
          if ("+!" === r ? (t.signDisplay = "always", e = e.slice(2)) : "+?" === r && (t.signDisplay = "exceptZero", e = e.slice(2)), !H.test(e)) throw new Error("Malformed concise eng/scientific notation");
          t.minimumIntegerDigits = e.length
        }
        return t
      }

      function P(e) {
        return B(e) || {}
      }

      function S(e) {
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
                  ...P(t)
                }), {})
              };
              continue;
            case "engineering":
              t = {
                ...t,
                notation: "engineering",
                ...r.options.reduce((e, t) => ({
                  ...e,
                  ...P(t)
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
              r.options[0].replace(E, function(e, r, n, i, s, o) {
                if (r) t.minimumIntegerDigits = n.length;
                else {
                  if (i && s) throw new Error("We currently do not support maximum integer digits");
                  if (o) throw new Error("We currently do not support exact integer digits")
                }
                return ""
              });
              continue
          }
          if (H.test(r.stem)) {
            t.minimumIntegerDigits = r.stem.length;
            continue
          }
          if (b.test(r.stem)) {
            if (r.options.length > 1) throw new RangeError("Fraction-precision stems only accept a single optional option");
            r.stem.replace(b, function(e, r, n, i, s, o) {
              return "*" === n ? t.minimumFractionDigits = r.length : i && "#" === i[0] ? t.maximumFractionDigits = i.length : s && o ? (t.minimumFractionDigits = s.length, t.maximumFractionDigits = s.length + o.length) : (t.minimumFractionDigits = r.length, t.maximumFractionDigits = r.length), ""
            });
            const e = r.options[0];
            "w" === e ? t = {
              ...t,
              trailingZeroDisplay: "stripIfInteger"
            } : e && (t = {
              ...t,
              ...T(e)
            });
            continue
          }
          if (y.test(r.stem)) {
            t = {
              ...t,
              ...T(r.stem)
            };
            continue
          }
          const e = B(r.stem);
          e && (t = {
            ...t,
            ...e
          });
          const n = I(r.stem);
          n && (t = {
            ...t,
            ...n
          })
        }
        return t
      }
      let N = function(e) {
          return e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG", e
        }({}),
        A = function(e) {
          return e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag", e
        }({});

      function _(e) {
        return 0 === e.type
      }

      function w(e) {
        return 1 === e.type
      }

      function L(e) {
        return 2 === e.type
      }

      function v(e) {
        return 3 === e.type
      }

      function M(e) {
        return 4 === e.type
      }

      function R(e) {
        return 5 === e.type
      }

      function D(e) {
        return 6 === e.type
      }

      function O(e) {
        return 7 === e.type
      }

      function C(e) {
        return 8 === e.type
      }

      function F(e) {
        return !(!e || "object" != typeof e || 0 !== e.type)
      }

      function k(e) {
        return !(!e || "object" != typeof e || 1 !== e.type)
      }
      const G = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
        U = {
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

      function x(e) {
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
        return "root" !== r && (n = e.maximize().region), (U[n || ""] || U[r || ""] || U[`${r}-001`] || U["001"])[0]
      }
      const $ = new RegExp(`^${G.source}*`),
        j = new RegExp(`${G.source}*$`);

      function V(e, t) {
        return {
          start: e,
          end: t
        }
      }
      const K = !!Object.fromEntries,
        Z = !!String.prototype.trimStart,
        X = !!String.prototype.trimEnd,
        Y = K ? Object.fromEntries : function(e) {
          const t = {};
          for (const [r, n] of e) t[r] = n;
          return t
        },
        W = Z ? function(e) {
          return e.trimStart()
        } : function(e) {
          return e.replace($, "")
        },
        z = X ? function(e) {
          return e.trimEnd()
        } : function(e) {
          return e.replace(j, "")
        },
        q = new RegExp("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
      var J = class {
        constructor(e, t = {}) {
          this.message = e, this.position = {
            offset: 0,
            line: 1,
            column: 1
          }, this.ignoreTag = !!t.ignoreTag, this.locale = t.locale, this.requiresOtherClause = !!t.requiresOtherClause, this.shouldParseSkeletons = !!t.shouldParseSkeletons
        }
        parse() {
          if (0 !== this.offset()) throw Error("parser can only be used once");
          if (this.message.length > 0) {
            const e = this.message.charCodeAt(0);
            if (35 !== e && 39 !== e && 60 !== e && 123 !== e && 125 !== e) {
              const e = function(e) {
                if (0 === e.length) return null;
                let t = 1,
                  r = 1;
                for (let n = 0; n < e.length;) {
                  const i = e.charCodeAt(n);
                  switch (i) {
                    case 35:
                    case 39:
                    case 60:
                    case 123:
                    case 125:
                      return null
                  }
                  if (10 === i) t++, r = 1, n++;
                  else if (r++, i >= 55296 && i <= 56319 && n + 1 < e.length) {
                    const t = e.charCodeAt(n + 1);
                    n += t >= 56320 && t <= 57343 ? 2 : 1
                  } else n++
                }
                return {
                  offset: e.length,
                  line: t,
                  column: r
                }
              }(this.message);
              if (e) {
                const t = this.clonePosition();
                return this.position = e, {
                  val: [{
                    type: 0,
                    value: this.message,
                    location: V(t, this.clonePosition())
                  }],
                  err: null
                }
              }
            }
          }
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
                  return this.error(26, V(this.clonePosition(), this.clonePosition()))
                }
                if (60 === i && !this.ignoreTag && Q(this.peek() || 0)) {
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
                  type: 7,
                  location: V(e, this.clonePosition())
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
              type: 0,
              value: `<${n}/>`,
              location: V(r, this.clonePosition())
            },
            err: null
          };
          if (this.bumpIf(">")) {
            const i = this.parseMessage(e + 1, t, !0);
            if (i.err) return i;
            const s = i.val,
              o = this.clonePosition();
            if (this.bumpIf("</")) {
              if (this.isEOF() || !Q(this.char())) return this.error(23, V(o, this.clonePosition()));
              const e = this.clonePosition();
              return n !== this.parseTagName() ? this.error(26, V(e, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
                val: {
                  type: 8,
                  value: n,
                  children: s,
                  location: V(r, this.clonePosition())
                },
                err: null
              } : this.error(23, V(o, this.clonePosition())))
            }
            return this.error(27, V(r, this.clonePosition()))
          }
          return this.error(23, V(r, this.clonePosition()))
        }
        parseTagName() {
          const e = this.offset();
          for (this.bump(); !this.isEOF() && ee(this.char());) this.bump();
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
            const s = this.tryParseLeftAngleBracket();
            if (!s) break;
            n += s
          }
          return {
            val: {
              type: 0,
              value: n,
              location: V(r, this.clonePosition())
            },
            err: null
          }
        }
        tryParseLeftAngleBracket() {
          return this.isEOF() || 60 !== this.char() || !this.ignoreTag && (Q(e = this.peek() || 0) || 47 === e) ? null : (this.bump(), "<");
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
          if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(1, V(r, this.clonePosition()));
          if (125 === this.char()) return this.bump(), this.error(2, V(r, this.clonePosition()));
          let n = this.parseIdentifierIfPossible().value;
          if (!n) return this.error(3, V(r, this.clonePosition()));
          if (this.bumpSpace(), this.isEOF()) return this.error(1, V(r, this.clonePosition()));
          switch (this.char()) {
            case 125:
              return this.bump(), {
                val: {
                  type: 1,
                  value: n,
                  location: V(r, this.clonePosition())
                },
                err: null
              };
            case 44:
              return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(1, V(r, this.clonePosition())) : this.parseArgumentOptions(e, t, n, r);
            default:
              return this.error(3, V(r, this.clonePosition()))
          }
        }
        parseIdentifierIfPossible() {
          const e = this.clonePosition(),
            t = this.offset(),
            r = (n = this.message, i = t, q.lastIndex = i, q.exec(n)[1] ?? "");
          var n, i;
          const s = t + r.length;
          return this.bumpTo(s), {
            value: r,
            location: V(e, this.clonePosition())
          }
        }
        parseArgumentOptions(e, t, r, n) {
          let i = this.clonePosition(),
            s = this.parseIdentifierIfPossible().value,
            o = this.clonePosition();
          switch (s) {
            case "":
              return this.error(4, V(i, o));
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
                const n = z(r.val);
                if (0 === n.length) return this.error(6, V(this.clonePosition(), this.clonePosition()));
                e = {
                  style: n,
                  styleLocation: V(t, this.clonePosition())
                }
              }
              const t = this.tryParseArgumentClose(n);
              if (t.err) return t;
              const i = V(n, this.clonePosition());
              if (e && e.style.startsWith("::")) {
                let t = W(e.style.slice(2));
                if ("number" === s) {
                  const n = this.parseNumberSkeletonFromString(t, e.styleLocation);
                  return n.err ? n : {
                    val: {
                      type: 2,
                      value: r,
                      location: i,
                      style: n.val
                    },
                    err: null
                  }
                } {
                  if (0 === t.length) return this.error(10, i);
                  let n = t;
                  return this.locale && (n = function(e, t) {
                    let r = "";
                    for (let n = 0; n < e.length; n++) {
                      const i = e.charAt(n);
                      if ("j" === i) {
                        let s = 0;
                        for (; n + 1 < e.length && e.charAt(n + 1) === i;) s++, n++;
                        let o = 1 + (1 & s),
                          a = s < 2 ? 1 : 3 + (s >> 1),
                          h = "a",
                          l = x(t);
                        for ("H" != l && "k" != l || (a = 0); a-- > 0;) r += h;
                        for (; o-- > 0;) r = l + r
                      } else r += "J" === i ? "H" : i
                    }
                    return r
                  }(t, this.locale)), {
                    val: {
                      type: "date" === s ? 3 : 4,
                      value: r,
                      location: i,
                      style: {
                        type: 1,
                        pattern: n,
                        location: e.styleLocation,
                        parsedOptions: this.shouldParseSkeletons ? p(n) : {}
                      }
                    },
                    err: null
                  }
                }
              }
              return {
                val: {
                  type: "number" === s ? 2 : "date" === s ? 3 : 4,
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
              if (this.bumpSpace(), !this.bumpIf(",")) return this.error(12, V(i, {
                ...i
              }));
              this.bumpSpace();
              let o = this.parseIdentifierIfPossible(),
                a = 0;
              if ("select" !== s && "offset" === o.value) {
                if (!this.bumpIf(":")) return this.error(13, V(this.clonePosition(), this.clonePosition()));
                this.bumpSpace();
                const e = this.tryParseDecimalInteger(13, 14);
                if (e.err) return e;
                this.bumpSpace(), o = this.parseIdentifierIfPossible(), a = e.val
              }
              const h = this.tryParsePluralOrSelectOptions(e, s, t, o);
              if (h.err) return h;
              const l = this.tryParseArgumentClose(n);
              if (l.err) return l;
              const c = V(n, this.clonePosition());
              return "select" === s ? {
                val: {
                  type: 5,
                  value: r,
                  options: Y(h.val),
                  location: c
                },
                err: null
              } : {
                val: {
                  type: 6,
                  value: r,
                  options: Y(h.val),
                  offset: a,
                  pluralType: "plural" === s ? "cardinal" : "ordinal",
                  location: c
                },
                err: null
              }
            }
            default:
              return this.error(5, V(i, o))
          }
        }
        tryParseArgumentClose(e) {
          return this.isEOF() || 125 !== this.char() ? this.error(1, V(e, this.clonePosition())) : (this.bump(), {
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
              if (!this.bumpUntil("'")) return this.error(11, V(e, this.clonePosition()));
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
            return this.error(7, t)
          }
          return {
            val: {
              type: 0,
              tokens: r,
              location: t,
              parsedOptions: this.shouldParseSkeletons ? S(r) : {}
            },
            err: null
          }
        }
        tryParsePluralOrSelectOptions(e, t, r, n) {
          let i = !1;
          const s = [],
            o = new Set;
          let {
            value: a,
            location: h
          } = n;
          for (;;) {
            if (0 === a.length) {
              const e = this.clonePosition();
              if ("select" === t || !this.bumpIf("=")) break; {
                const t = this.tryParseDecimalInteger(16, 19);
                if (t.err) return t;
                h = V(e, this.clonePosition()), a = this.message.slice(e.offset, this.offset())
              }
            }
            if (o.has(a)) return this.error("select" === t ? 21 : 20, h);
            "other" === a && (i = !0), this.bumpSpace();
            const n = this.clonePosition();
            if (!this.bumpIf("{")) return this.error("select" === t ? 17 : 18, V(this.clonePosition(), this.clonePosition()));
            const l = this.parseMessage(e + 1, t, r);
            if (l.err) return l;
            const c = this.tryParseArgumentClose(n);
            if (c.err) return c;
            s.push([a, {
              value: l.val,
              location: V(n, this.clonePosition())
            }]), o.add(a), this.bumpSpace(), ({
              value: a,
              location: h
            } = this.parseIdentifierIfPossible())
          }
          return 0 === s.length ? this.error("select" === t ? 15 : 16, V(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !i ? this.error(22, V(this.clonePosition(), this.clonePosition())) : {
            val: s,
            err: null
          }
        }
        tryParseDecimalInteger(e, t) {
          let r = 1;
          const n = this.clonePosition();
          this.bumpIf("+") || this.bumpIf("-") && (r = -1);
          let i = !1,
            s = 0;
          for (; !this.isEOF();) {
            const e = this.char();
            if (!(e >= 48 && e <= 57)) break;
            i = !0, s = 10 * s + (e - 48), this.bump()
          }
          const o = V(n, this.clonePosition());
          return i ? (s *= r, Number.isSafeInteger(s) ? {
            val: s,
            err: null
          } : this.error(t, o)) : this.error(e, o)
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
          for (; !this.isEOF() && te(this.char());) this.bump()
        }
        peek() {
          if (this.isEOF()) return null;
          const e = this.char(),
            t = this.offset();
          return this.message.charCodeAt(t + (e >= 65536 ? 2 : 1)) ?? null
        }
      };

      function Q(e) {
        return e >= 97 && e <= 122 || e >= 65 && e <= 90
      }

      function ee(e) {
        return 45 === e || 46 === e || e >= 48 && e <= 57 || 95 === e || e >= 97 && e <= 122 || e >= 65 && e <= 90 || 183 == e || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039
      }

      function te(e) {
        return e >= 9 && e <= 13 || 32 === e || 133 === e || e >= 8206 && e <= 8207 || 8232 === e || 8233 === e
      }

      function re(e) {
        e.forEach(e => {
          if (delete e.location, R(e) || D(e))
            for (const t in e.options) delete e.options[t].location, re(e.options[t].value);
          else L(e) && F(e.style) || (v(e) || M(e)) && k(e.style) ? delete e.style.location : C(e) && re(e.children)
        })
      }

      function ne(e, t = {}) {
        t = {
          shouldParseSkeletons: !0,
          requiresOtherClause: !0,
          ...t
        };
        const r = new J(e, t).parse();
        if (r.err) {
          const e = SyntaxError(N[r.err.kind]);
          throw e.location = r.err.location, e.originalMessage = r.err.message, e
        }
        return t?.captureLocation || re(r.val), r.val
      }
      let ie = function(e) {
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
        oe = class extends se {
          constructor(e, t, r, n) {
            super(`Invalid values for "${e}": "${t}". Options are "${Object.keys(r).join('", "')}"`, "INVALID_VALUE", n)
          }
        },
        ae = class extends se {
          constructor(e, t, r) {
            super(`Value for "${e}" must be of type ${t}`, "INVALID_VALUE", r)
          }
        },
        he = class extends se {
          constructor(e, t) {
            super(`The intl string context variable "${e}" was not provided to the string "${t}"`, "MISSING_VALUE", t)
          }
        };

      function le(e) {
        return "function" == typeof e
      }

      function ce(e, t, r, n, i, s, o) {
        if (1 === e.length && _(e[0])) return [{
          type: 0,
          value: e[0].value
        }];
        const a = [];
        for (const h of e) {
          if (_(h)) {
            a.push({
              type: 0,
              value: h.value
            });
            continue
          }
          if (O(h)) {
            "number" == typeof s && a.push({
              type: 0,
              value: r.getNumberFormat(t).format(s)
            });
            continue
          }
          const {
            value: e
          } = h;
          if (!i || !(e in i)) throw new he(e, o);
          let l = i[e];
          if (w(h)) l && "string" != typeof l && "number" != typeof l && "bigint" != typeof l || (l = "string" == typeof l || "number" == typeof l || "bigint" == typeof l ? String(l) : ""), a.push({
            type: "string" == typeof l ? 0 : 1,
            value: l
          });
          else {
            if (v(h)) {
              const e = "string" == typeof h.style ? n.date[h.style] : k(h.style) ? h.style.parsedOptions : void 0;
              a.push({
                type: 0,
                value: r.getDateTimeFormat(t, e).format(l)
              });
              continue
            }
            if (M(h)) {
              const e = "string" == typeof h.style ? n.time[h.style] : k(h.style) ? h.style.parsedOptions : n.time.medium;
              a.push({
                type: 0,
                value: r.getDateTimeFormat(t, e).format(l)
              });
              continue
            }
            if (L(h)) {
              const e = "string" == typeof h.style ? n.number[h.style] : F(h.style) ? h.style.parsedOptions : void 0;
              if (e && e.scale) {
                const t = e.scale || 1;
                if ("bigint" == typeof l) {
                  if (!Number.isInteger(t)) throw new TypeError(`Cannot apply fractional scale ${t} to bigint value. Scale must be an integer when formatting bigint.`);
                  l *= BigInt(t)
                } else l *= t
              }
              a.push({
                type: 0,
                value: r.getNumberFormat(t, e).format(l)
              });
              continue
            }
            if (C(h)) {
              const {
                children: e,
                value: l
              } = h, c = i[l];
              if (!le(c)) throw new ae(l, "function", o);
              let u = c(ce(e, t, r, n, i, s).map(e => e.value));
              Array.isArray(u) || (u = [u]), a.push(...u.map(e => ({
                type: "string" == typeof e ? 0 : 1,
                value: e
              })))
            }
            if (R(h)) {
              const e = l,
                s = (Object.prototype.hasOwnProperty.call(h.options, e) ? h.options[e] : void 0) || h.options.other;
              if (!s) throw new oe(h.value, l, Object.keys(h.options), o);
              a.push(...ce(s.value, t, r, n, i));
              continue
            }
            if (D(h)) {
              const e = `=${l}`;
              let s = Object.prototype.hasOwnProperty.call(h.options, e) ? h.options[e] : void 0;
              if (!s) {
                if (!Intl.PluralRules) throw new se('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', "MISSING_INTL_API", o);
                const e = "bigint" == typeof l ? Number(l) : l,
                  n = r.getPluralRules(t, {
                    type: h.pluralType
                  }).select(e - (h.offset || 0));
                s = (Object.prototype.hasOwnProperty.call(h.options, n) ? h.options[n] : void 0) || h.options.other
              }
              if (!s) throw new oe(h.value, l, Object.keys(h.options), o);
              const c = "bigint" == typeof l ? Number(l) : l;
              a.push(...ce(s.value, t, r, n, i, c - (h.offset || 0)));
              continue
            }
          }
        }
        return (h = a).length < 2 ? h : h.reduce((e, t) => {
          const r = e[e.length - 1];
          return r && 0 === r.type && 0 === t.type ? r.value += t.value : e.push(t), e
        }, []);
        var h
      }

      function ue(e) {
        return {
          create: () => ({
            get: t => e[t],
            set(t, r) {
              e[t] = r
            }
          })
        }
      }
      var me = class e {
          constructor(t, r = e.defaultLocale, n, s) {
            if (this.formatterCache = {
                number: {},
                dateTime: {},
                pluralRules: {}
              }, this.format = e => {
                const t = this.formatToParts(e);
                if (1 === t.length) return t[0].value;
                const r = t.reduce((e, t) => (e.length && 0 === t.type && "string" == typeof e[e.length - 1] ? e[e.length - 1] += t.value : e.push(t.value), e), []);
                return r.length <= 1 ? r[0] || "" : r
              }, this.formatToParts = e => ce(this.ast, this.locales, this.formatters, this.formats, e, void 0, this.message), this.resolvedOptions = () => ({
                locale: this.resolvedLocale?.toString() || Intl.NumberFormat.supportedLocalesOf(this.locales)[0]
              }), this.getAst = () => this.ast, this.locales = r, this.resolvedLocale = e.resolveLocale(r), "string" == typeof t) {
              if (this.message = t, !e.__parse) throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
              const {
                ...r
              } = s || {};
              this.ast = e.__parse(t, {
                ...r,
                locale: this.resolvedLocale
              })
            } else this.ast = t;
            if (!Array.isArray(this.ast)) throw new TypeError("A message must be provided as a String or AST.");
            var o, a;
            this.formats = (o = e.formats, (a = n) ? Object.keys(o).reduce((e, t) => {
              var r, n;
              return e[t] = (r = o[t], (n = a[t]) ? {
                ...r,
                ...n,
                ...Object.keys(r).reduce((e, t) => (e[t] = {
                  ...r[t],
                  ...n[t]
                }, e), {})
              } : r), e
            }, {
              ...o
            }) : o), this.formatters = s && s.formatters || function(e = {
              number: {},
              dateTime: {},
              pluralRules: {}
            }) {
              return {
                getNumberFormat: i((...e) => new Intl.NumberFormat(...e), {
                  cache: ue(e.number),
                  strategy: m.variadic
                }),
                getDateTimeFormat: i((...e) => new Intl.DateTimeFormat(...e), {
                  cache: ue(e.dateTime),
                  strategy: m.variadic
                }),
                getPluralRules: i((...e) => new Intl.PluralRules(...e), {
                  cache: ue(e.pluralRules),
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
            this.__parse = ne
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
        },
        fe = class e extends Error {
          constructor(t, r, n) {
            const i = n ? n instanceof Error ? n : new Error(String(n)) : void 0;
            super(`[@formatjs/intl Error ${t}] ${r}\n${i?`\n${i.message}\n${i.stack}`:""}`), this.code = t, "function" == typeof Error.captureStackTrace && Error.captureStackTrace(this, e)
          }
        },
        pe = class extends fe {
          constructor(e, t) {
            super("UNSUPPORTED_FORMATTER", e, t)
          }
        },
        ge = class extends fe {
          constructor(e, t) {
            super("INVALID_CONFIG", e, t)
          }
        },
        de = class extends fe {
          constructor(e, t) {
            super("MISSING_DATA", e, t)
          }
        },
        be = class extends fe {
          constructor(e, t, r) {
            super("FORMAT_ERROR", `${e}\nLocale: ${t}\n`, r), this.locale = t
          }
        },
        ye = class extends be {
          constructor(e, t, r, n) {
            super(`${e}\nMessageID: ${r?.id}\nDefault Message: ${r?.defaultMessage}\nDescription: ${r?.description}\n`, t, n), this.descriptor = r, this.locale = t
          }
        },
        Ee = class extends fe {
          constructor(e, t) {
            super("MISSING_TRANSLATION", `Missing message: "${e.id}" for locale "${t}", using ${e.defaultMessage?`default message (${"string"==typeof e.defaultMessage?e.defaultMessage:e.defaultMessage.map(e=>e.value??JSON.stringify(e)).join()})`:"id"} as fallback.`), this.descriptor = e
          }
        };

      function He(e, t, r = {}) {
        return t.reduce((t, n) => (n in e ? t[n] = e[n] : n in r && (t[n] = r[n]), t), {})
      }
      const Te = {
        formats: {},
        messages: {},
        timeZone: void 0,
        defaultLocale: "en",
        defaultFormats: {},
        fallbackOnEmptyString: !0,
        onError: e => {},
        onWarn: e => {}
      };

      function Be(e) {
        return {
          create: () => ({
            get: t => e[t],
            set(t, r) {
              e[t] = r
            }
          })
        }
      }

      function Ie(e, t, r, n) {
        const i = e && e[t];
        let s;
        if (i && (s = i[r]), s) return s;
        n(new pe(`No ${t} format named: ${r}`))
      }

      function Pe(e, t) {
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

      function Ne(e, t) {
        if (!t) return e;
        const r = me.formats;
        return {
          ...r,
          ...e,
          date: Se(Pe(r.date, t), Pe(e.date || {}, t)),
          time: Se(Pe(r.time, t), Pe(e.time || {}, t))
        }
      }
      const Ae = ({
          locale: e,
          formats: t,
          messages: r,
          defaultLocale: n,
          defaultFormats: i,
          fallbackOnEmptyString: s,
          onError: o,
          timeZone: a,
          defaultRichTextElements: h
        }, l, c = {
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
          if (Array.isArray(d) && 1 === d.length && d[0].type === A.literal) return d[0].value;
          if (u = {
              ...h,
              ...u
            }, t = Ne(t, a), i = Ne(i, a), !d) {
            if (!1 === s && "" === d) return d;
            if ((!p || e && e.toLowerCase() !== n.toLowerCase()) && o(new Ee(c, e)), p) try {
              return l.getMessageFormat(p, n, i, m).format(u)
            } catch (t) {
              return o(new ye(`Error formatting default message for: "${g}", rendering default message verbatim`, e, c, t)), "string" == typeof p ? p : g
            }
            return g
          }
          try {
            return l.getMessageFormat(d, e, t, {
              formatters: l,
              ...m
            }).format(u)
          } catch (t) {
            o(new ye(`Error formatting message: "${g}", using ${p?"default message":"id"} as fallback.`, e, c, t))
          }
          if (p) try {
            return l.getMessageFormat(p, n, i, m).format(u)
          } catch (t) {
            o(new ye(`Error formatting the default message for: "${g}", rendering message verbatim`, e, c, t))
          }
          return "string" == typeof d ? d : "string" == typeof p ? p : g
        },
        _e = ["formatMatcher", "timeZone", "hour12", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "hourCycle", "dateStyle", "timeStyle", "calendar", "numberingSystem", "fractionalSecondDigits"];

      function we({
        locale: e,
        formats: t,
        onError: r,
        timeZone: n
      }, i, s, o = {}) {
        const {
          format: a
        } = o;
        let h = He(o, _e, {
          ...n && {
            timeZone: n
          },
          ...a && Ie(t, i, a, r)
        });
        return "time" !== i || h.hour || h.minute || h.second || h.timeStyle || h.dateStyle || (h = {
          ...h,
          hour: "numeric",
          minute: "numeric"
        }), s(e, h)
      }

      function Le(e, t, r, n = {}) {
        const i = "string" == typeof r ? new Date(r || 0) : r;
        try {
          return we(e, "date", t, n).format(i)
        } catch (t) {
          e.onError(new be("Error formatting date.", e.locale, t))
        }
        return String(i)
      }

      function ve(e, t, r, n = {}) {
        const i = "string" == typeof r ? new Date(r || 0) : r;
        try {
          return we(e, "time", t, n).format(i)
        } catch (t) {
          e.onError(new be("Error formatting time.", e.locale, t))
        }
        return String(i)
      }

      function Me(e, t, r, n, i = {}) {
        const s = "string" == typeof r ? new Date(r || 0) : r,
          o = "string" == typeof n ? new Date(n || 0) : n;
        try {
          return we(e, "dateTimeRange", t, i).formatRange(s, o)
        } catch (t) {
          e.onError(new be("Error formatting date time range.", e.locale, t))
        }
        return String(s)
      }

      function Re(e, t, r, n = {}) {
        const i = "string" == typeof r ? new Date(r || 0) : r;
        try {
          return we(e, "date", t, n).formatToParts(i)
        } catch (t) {
          e.onError(new be("Error formatting date.", e.locale, t))
        }
        return []
      }

      function De(e, t, r, n = {}) {
        const i = "string" == typeof r ? new Date(r || 0) : r;
        try {
          return we(e, "time", t, n).formatToParts(i)
        } catch (t) {
          e.onError(new be("Error formatting time.", e.locale, t))
        }
        return []
      }
      const Oe = ["style", "type", "fallback", "languageDisplay"];

      function Ce({
        locale: e,
        onError: t
      }, r, n, i) {
        Intl.DisplayNames || t(new se('Intl.DisplayNames is not available in this environment.\nTry polyfilling it using "@formatjs/intl-displaynames"\n', ie.MISSING_INTL_API));
        const s = He(i, Oe);
        try {
          return r(e, s).of(n)
        } catch (r) {
          t(new be("Error formatting display name.", e, r))
        }
      }
      const Fe = ["type", "style"],
        ke = Date.now();

      function Ge(e, t, r, n = {}) {
        const i = Ue(e, t, r, n).reduce((e, t) => {
          const r = t.value;
          return "string" != typeof r ? e.push(r) : "string" == typeof e[e.length - 1] ? e[e.length - 1] += r : e.push(r), e
        }, []);
        return 1 === i.length ? i[0] : 0 === i.length ? "" : i
      }

      function Ue({
        locale: e,
        onError: t
      }, r, n, i = {}) {
        Intl.ListFormat || t(new se('Intl.ListFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-listformat"\n', ie.MISSING_INTL_API));
        const s = He(i, Fe);
        try {
          const t = {},
            i = Array.from(n).map((e, r) => {
              if ("object" == typeof e && null !== e) {
                const n = function(e) {
                  return `${ke}_${e}_${ke}`
                }(r);
                return t[n] = e, n
              }
              return String(e)
            });
          return r(e, s).formatToParts(i).map(e => "literal" === e.type ? e : {
            ...e,
            value: t[e.value] || e.value
          })
        } catch (r) {
          t(new be("Error formatting list.", e, r))
        }
        return n
      }
      const xe = ["type"];

      function $e({
        locale: e,
        onError: t
      }, r, n, i = {}) {
        Intl.PluralRules || t(new se('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', ie.MISSING_INTL_API));
        const s = He(i, xe);
        try {
          return r(e, s).select(n)
        } catch (r) {
          t(new be("Error formatting plural.", e, r))
        }
        return "other"
      }
      const je = ["numeric", "style"];

      function Ve(e, t, r, n, i = {}) {
        n || (n = "second"), Intl.RelativeTimeFormat || e.onError(new se('Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n', ie.MISSING_INTL_API));
        try {
          return function({
            locale: e,
            formats: t,
            onError: r
          }, n, i = {}) {
            const {
              format: s
            } = i;
            return n(e, He(i, je, !!s && Ie(t, "relative", s, r) || {}))
          }(e, t, i).format(r, n)
        } catch (t) {
          e.onError(new be("Error formatting relative time.", e.locale, t))
        }
        return String(r)
      }
      const Ke = ["style", "currency", "unit", "unitDisplay", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "currencyDisplay", "currencySign", "notation", "signDisplay", "unit", "unitDisplay", "numberingSystem", "trailingZeroDisplay", "roundingPriority", "roundingIncrement", "roundingMode"];

      function Ze({
        locale: e,
        formats: t,
        onError: r
      }, n, i = {}) {
        const {
          format: s
        } = i;
        return n(e, He(i, Ke, s && Ie(t, "number", s, r) || {}))
      }

      function Xe(e, t, r, n = {}) {
        try {
          return Ze(e, t, n).format(r)
        } catch (t) {
          e.onError(new be("Error formatting number.", e.locale, t))
        }
        return String(r)
      }

      function Ye(e, t, r, n = {}) {
        try {
          return Ze(e, t, n).formatToParts(r)
        } catch (t) {
          e.onError(new be("Error formatting number.", e.locale, t))
        }
        return []
      }

      function We(e, t) {
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
              s = i((...e) => new Intl.DateTimeFormat(...e), {
                cache: Be(e.dateTime),
                strategy: m.variadic
              }),
              o = i((...e) => new Intl.NumberFormat(...e), {
                cache: Be(e.number),
                strategy: m.variadic
              }),
              a = i((...e) => new Intl.PluralRules(...e), {
                cache: Be(e.pluralRules),
                strategy: m.variadic
              });
            return {
              getDateTimeFormat: s,
              getNumberFormat: o,
              getMessageFormat: i((e, t, r, n) => new me(e, t, r, {
                formatters: {
                  getNumberFormat: o,
                  getDateTimeFormat: s,
                  getPluralRules: a
                },
                ...n
              }), {
                cache: Be(e.message),
                strategy: m.variadic
              }),
              getRelativeTimeFormat: i((...e) => new t(...e), {
                cache: Be(e.relativeTime),
                strategy: m.variadic
              }),
              getPluralRules: a,
              getListFormat: i((...e) => new r(...e), {
                cache: Be(e.list),
                strategy: m.variadic
              }),
              getDisplayNames: i((...e) => new n(...e), {
                cache: Be(e.displayNames),
                strategy: m.variadic
              })
            }
          }(t),
          n = {
            ...Te,
            ...e
          },
          {
            locale: s,
            defaultLocale: o,
            onError: a
          } = n;
        return s ? !Intl.NumberFormat.supportedLocalesOf(s).length && a ? a(new de(`Missing locale data for locale: "${s}" in Intl.NumberFormat. Using default locale: "${o}" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details`)) : !Intl.DateTimeFormat.supportedLocalesOf(s).length && a && a(new de(`Missing locale data for locale: "${s}" in Intl.DateTimeFormat. Using default locale: "${o}" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details`)) : (a && a(new ge(`"locale" was not configured, using "${o}" as fallback. See https://formatjs.github.io/docs/react-intl/api#intlshape for more details`)), n.locale = n.defaultLocale || "en"),
          function(e) {
            var t;
            e.onWarn && e.defaultRichTextElements && "string" == typeof((t = e.messages || {}) ? t[Object.keys(t)[0]] : void 0) && e.onWarn('[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. \nPlease consider using "@formatjs/cli" to pre-compile your messages for performance.\nFor more details see https://formatjs.github.io/docs/getting-started/message-distribution')
          }(n), {
            ...n,
            formatters: r,
            formatNumber: Xe.bind(null, n, r.getNumberFormat),
            formatNumberToParts: Ye.bind(null, n, r.getNumberFormat),
            formatRelativeTime: Ve.bind(null, n, r.getRelativeTimeFormat),
            formatDate: Le.bind(null, n, r.getDateTimeFormat),
            formatDateToParts: Re.bind(null, n, r.getDateTimeFormat),
            formatTime: ve.bind(null, n, r.getDateTimeFormat),
            formatDateTimeRange: Me.bind(null, n, r.getDateTimeFormat),
            formatTimeToParts: De.bind(null, n, r.getDateTimeFormat),
            formatPlural: $e.bind(null, n, r.getPluralRules),
            formatMessage: Ae.bind(null, n, r),
            $t: Ae.bind(null, n, r),
            formatList: Ge.bind(null, n, r.getListFormat),
            formatListToParts: Ue.bind(null, n, r.getListFormat),
            formatDisplayName: Ce.bind(null, n, r.getDisplayNames)
          }
      }
      var ze = r(39793);

      function qe(e, t, r = Error) {
        if (!e) throw new r(t)
      }

      function Je(e) {
        qe(e, "[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")
      }
      const Qe = {
          ...Te,
          textComponent: n.Fragment
        },
        et = e => n.Children.toArray(e).map((e, t) => n.isValidElement(e) ? (0, ze.jsx)(n.Fragment, {
          children: e
        }, t) : e);

      function tt(e, t) {
        if (e === t) return !0;
        if (!e || !t) return !1;
        var r = Object.keys(e),
          n = Object.keys(t),
          i = r.length;
        if (n.length !== i) return !1;
        for (var s = 0; s < i; s++) {
          var o = r[s];
          if (e[o] !== t[o] || !Object.prototype.hasOwnProperty.call(t, o)) return !1
        }
        return !0
      }
      const rt = n.createContext(null),
        nt = rt.Provider;

      function it() {
        const e = n.useContext(rt);
        return Je(e), e
      }
      var st = function(e) {
          return e.formatDate = "FormattedDate", e.formatTime = "FormattedTime", e.formatNumber = "FormattedNumber", e.formatList = "FormattedList", e.formatDisplayName = "FormattedDisplayName", e
        }(st || {}),
        ot = function(e) {
          return e.formatDate = "FormattedDateParts", e.formatTime = "FormattedTimeParts", e.formatNumber = "FormattedNumberParts", e.formatList = "FormattedListParts", e
        }(ot || {});

      function at(e) {
        const t = t => {
          const r = it(),
            {
              value: n,
              children: i,
              ...s
            } = t,
            o = "string" == typeof n ? new Date(n || 0) : n;
          return i("formatDate" === e ? r.formatDateToParts(o, s) : r.formatTimeToParts(o, s))
        };
        return t.displayName = ot[e], t
      }

      function ht(e) {
        const t = t => {
          const r = it(),
            {
              value: i,
              children: s,
              ...o
            } = t,
            a = r[e](i, o);
          return "function" == typeof s ? s(a) : (0, ze.jsx)(r.textComponent || n.Fragment, {
            children: a
          })
        };
        return t.displayName = st[e], t
      }

      function lt(e) {
        return e ? Object.keys(e).reduce((t, r) => {
          const n = e[r];
          var i;
          return t[r] = le(n) ? (i = n, function(e) {
            return i(et(e))
          }) : n, t
        }, {}) : e
      }
      const ct = (e, t, r, n, ...i) => {
        const s = Ae(e, t, r, lt(n), ...i);
        return Array.isArray(s) ? et(s) : s
      };

      function ut(e) {
        const {
          formatMessage: t,
          textComponent: r = n.Fragment
        } = it(), {
          id: i,
          description: s,
          defaultMessage: o,
          values: a,
          children: h,
          tagName: l = r,
          ignoreTag: c
        } = e, u = t({
          id: i,
          description: s,
          defaultMessage: o
        }, a, {
          ignoreTag: c
        });
        return "function" == typeof h ? h(Array.isArray(u) ? u : [u]) : l ? (0, ze.jsx)(l, {
          children: u
        }) : (0, ze.jsx)(ze.Fragment, {
          children: u
        })
      }
      ut.displayName = "FormattedMessage";
      const mt = n.memo(ut, function(e, t) {
        const {
          values: r,
          ...n
        } = e, {
          values: i,
          ...s
        } = t;
        return tt(i, r) && tt(n, s)
      });

      function ft(e) {
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
          s = {};
        for (const t in e) void 0 !== e[t] && (s[t] = e[t]);
        const o = function(e) {
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
          ...Qe,
          ...s
        });
        return r.current && tt(r.current, o) || (r.current = o, i.current = (({
          defaultRichTextElements: e,
          ...t
        }, r) => {
          const n = lt(e),
            i = We({
              ...Qe,
              ...t,
              defaultRichTextElements: n
            }, r),
            s = {
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
            formatMessage: ct.bind(null, s, i.formatters),
            $t: ct.bind(null, s, i.formatters)
          }
        })(o, t.current)), Je(i.current), (0, ze.jsx)(nt, {
          value: i.current,
          children: e.children
        })
      }
      mt.displayName = "MemoizedFormattedMessage", ft.displayName = "IntlProvider";
      const pt = ft;

      function gt(e) {
        return e
      }
      ht("formatDate"), ht("formatTime"), ht("formatNumber"), ht("formatList"), ht("formatDisplayName"), at("formatDate"), at("formatTime")
    }
  }
]);