try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "1f9efa87-0029-4390-afe0-78c62f1449b3", e._sentryDebugIdIdentifier = "sentry-dbid-1f9efa87-0029-4390-afe0-78c62f1449b3")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "1abf2adfc44dda687079577dcca1257a51fb3eb0",
    packageName: "@rockstargames/sites-careers",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "1abf2adfc44dda687079577dcca1257a51fb3eb0"
}, (self.webpackChunk_rockstargames_sites_careers = self.webpackChunk_rockstargames_sites_careers || []).push([
  [9368], {
    9368: (e, d, a) => {
      a.r(d), a.d(d, {
        LookupSupportedLocales: () => g,
        ResolveLocale: () => f,
        match: () => m
      });
      var n = a(1299),
        r = {
          supplemental: {
            languageMatching: {
              "written-new": [{
                paradigmLocales: {
                  _locales: "en en_GB es es_419 pt_BR pt_PT"
                }
              }, {
                $enUS: {
                  _value: "AS+CA+GU+MH+MP+PH+PR+UM+US+VI"
                }
              }, {
                $cnsar: {
                  _value: "HK+MO"
                }
              }, {
                $americas: {
                  _value: "019"
                }
              }, {
                $maghreb: {
                  _value: "MA+DZ+TN+LY+MR+EH"
                }
              }, {
                no: {
                  _desired: "nb",
                  _distance: "1"
                }
              }, {
                bs: {
                  _desired: "hr",
                  _distance: "4"
                }
              }, {
                bs: {
                  _desired: "sh",
                  _distance: "4"
                }
              }, {
                hr: {
                  _desired: "sh",
                  _distance: "4"
                }
              }, {
                sr: {
                  _desired: "sh",
                  _distance: "4"
                }
              }, {
                aa: {
                  _desired: "ssy",
                  _distance: "4"
                }
              }, {
                de: {
                  _desired: "gsw",
                  _distance: "4",
                  _oneway: "true"
                }
              }, {
                de: {
                  _desired: "lb",
                  _distance: "4",
                  _oneway: "true"
                }
              }, {
                no: {
                  _desired: "da",
                  _distance: "8"
                }
              }, {
                nb: {
                  _desired: "da",
                  _distance: "8"
                }
              }, {
                ru: {
                  _desired: "ab",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "ach",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                nl: {
                  _desired: "af",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "ak",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "am",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                es: {
                  _desired: "ay",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                ru: {
                  _desired: "az",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                ur: {
                  _desired: "bal",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                ru: {
                  _desired: "be",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "bem",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                hi: {
                  _desired: "bh",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "bn",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                zh: {
                  _desired: "bo",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                fr: {
                  _desired: "br",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                es: {
                  _desired: "ca",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                fil: {
                  _desired: "ceb",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "chr",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                ar: {
                  _desired: "ckb",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                fr: {
                  _desired: "co",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                fr: {
                  _desired: "crs",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                sk: {
                  _desired: "cs",
                  _distance: "20"
                }
              }, {
                en: {
                  _desired: "cy",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "ee",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "eo",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                es: {
                  _desired: "eu",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                da: {
                  _desired: "fo",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                nl: {
                  _desired: "fy",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "ga",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "gaa",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "gd",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                es: {
                  _desired: "gl",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                es: {
                  _desired: "gn",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                hi: {
                  _desired: "gu",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "ha",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "haw",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                fr: {
                  _desired: "ht",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                ru: {
                  _desired: "hy",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "ia",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "ig",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "is",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                id: {
                  _desired: "jv",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "ka",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                fr: {
                  _desired: "kg",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                ru: {
                  _desired: "kk",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "km",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "kn",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "kri",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                tr: {
                  _desired: "ku",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                ru: {
                  _desired: "ky",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                it: {
                  _desired: "la",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "lg",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                fr: {
                  _desired: "ln",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "lo",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "loz",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                fr: {
                  _desired: "lua",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                hi: {
                  _desired: "mai",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "mfe",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                fr: {
                  _desired: "mg",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "mi",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "ml",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                ru: {
                  _desired: "mn",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                hi: {
                  _desired: "mr",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                id: {
                  _desired: "ms",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "mt",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "my",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "ne",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                nb: {
                  _desired: "nn",
                  _distance: "20"
                }
              }, {
                no: {
                  _desired: "nn",
                  _distance: "20"
                }
              }, {
                en: {
                  _desired: "nso",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "ny",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "nyn",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                fr: {
                  _desired: "oc",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "om",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "or",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "pa",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "pcm",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "ps",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                es: {
                  _desired: "qu",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                de: {
                  _desired: "rm",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "rn",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                fr: {
                  _desired: "rw",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                hi: {
                  _desired: "sa",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "sd",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "si",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "sn",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "so",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "sq",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "st",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                id: {
                  _desired: "su",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "sw",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "ta",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "te",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                ru: {
                  _desired: "tg",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "ti",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                ru: {
                  _desired: "tk",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "tlh",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "tn",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "to",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                ru: {
                  _desired: "tt",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "tum",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                zh: {
                  _desired: "ug",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                ru: {
                  _desired: "uk",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "ur",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                ru: {
                  _desired: "uz",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                fr: {
                  _desired: "wo",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "xh",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "yi",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "yo",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                zh: {
                  _desired: "za",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                en: {
                  _desired: "zu",
                  _distance: "30",
                  _oneway: "true"
                }
              }, {
                ar: {
                  _desired: "aao",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ar: {
                  _desired: "abh",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ar: {
                  _desired: "abv",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ar: {
                  _desired: "acm",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ar: {
                  _desired: "acq",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ar: {
                  _desired: "acw",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ar: {
                  _desired: "acx",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ar: {
                  _desired: "acy",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ar: {
                  _desired: "adf",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ar: {
                  _desired: "aeb",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ar: {
                  _desired: "aec",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ar: {
                  _desired: "afb",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ar: {
                  _desired: "ajp",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ar: {
                  _desired: "apc",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ar: {
                  _desired: "apd",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ar: {
                  _desired: "arq",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ar: {
                  _desired: "ars",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ar: {
                  _desired: "ary",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ar: {
                  _desired: "arz",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ar: {
                  _desired: "auz",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ar: {
                  _desired: "avl",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ar: {
                  _desired: "ayh",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ar: {
                  _desired: "ayl",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ar: {
                  _desired: "ayn",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ar: {
                  _desired: "ayp",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ar: {
                  _desired: "bbz",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ar: {
                  _desired: "pga",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ar: {
                  _desired: "shu",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ar: {
                  _desired: "ssh",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                az: {
                  _desired: "azb",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                et: {
                  _desired: "vro",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ff: {
                  _desired: "ffm",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ff: {
                  _desired: "fub",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ff: {
                  _desired: "fue",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ff: {
                  _desired: "fuf",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ff: {
                  _desired: "fuh",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ff: {
                  _desired: "fui",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ff: {
                  _desired: "fuq",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ff: {
                  _desired: "fuv",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                gn: {
                  _desired: "gnw",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                gn: {
                  _desired: "gui",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                gn: {
                  _desired: "gun",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                gn: {
                  _desired: "nhd",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                iu: {
                  _desired: "ikt",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                kln: {
                  _desired: "enb",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                kln: {
                  _desired: "eyo",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                kln: {
                  _desired: "niq",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                kln: {
                  _desired: "oki",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                kln: {
                  _desired: "pko",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                kln: {
                  _desired: "sgc",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                kln: {
                  _desired: "tec",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                kln: {
                  _desired: "tuy",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                kok: {
                  _desired: "gom",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                kpe: {
                  _desired: "gkp",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                luy: {
                  _desired: "ida",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                luy: {
                  _desired: "lkb",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                luy: {
                  _desired: "lko",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                luy: {
                  _desired: "lks",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                luy: {
                  _desired: "lri",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                luy: {
                  _desired: "lrm",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                luy: {
                  _desired: "lsm",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                luy: {
                  _desired: "lto",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                luy: {
                  _desired: "lts",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                luy: {
                  _desired: "lwg",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                luy: {
                  _desired: "nle",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                luy: {
                  _desired: "nyd",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                luy: {
                  _desired: "rag",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                lv: {
                  _desired: "ltg",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                mg: {
                  _desired: "bhr",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                mg: {
                  _desired: "bjq",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                mg: {
                  _desired: "bmm",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                mg: {
                  _desired: "bzc",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                mg: {
                  _desired: "msh",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                mg: {
                  _desired: "skg",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                mg: {
                  _desired: "tdx",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                mg: {
                  _desired: "tkg",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                mg: {
                  _desired: "txy",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                mg: {
                  _desired: "xmv",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                mg: {
                  _desired: "xmw",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                mn: {
                  _desired: "mvf",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "bjn",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "btj",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "bve",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "bvu",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "coa",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "dup",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "hji",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "id",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "jak",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "jax",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "kvb",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "kvr",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "kxd",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "lce",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "lcf",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "liw",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "max",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "meo",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "mfa",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "mfb",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "min",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "mqg",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "msi",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "mui",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "orn",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "ors",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "pel",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "pse",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "tmw",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "urk",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "vkk",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "vkt",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "xmm",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "zlm",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ms: {
                  _desired: "zmi",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ne: {
                  _desired: "dty",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                om: {
                  _desired: "gax",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                om: {
                  _desired: "hae",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                om: {
                  _desired: "orc",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                or: {
                  _desired: "spv",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ps: {
                  _desired: "pbt",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                ps: {
                  _desired: "pst",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qub",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qud",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "quf",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qug",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "quh",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "quk",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qul",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qup",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qur",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qus",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "quw",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qux",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "quy",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qva",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qvc",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qve",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qvh",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qvi",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qvj",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qvl",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qvm",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qvn",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qvo",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qvp",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qvs",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qvw",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qvz",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qwa",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qwc",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qwh",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qws",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qxa",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qxc",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qxh",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qxl",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qxn",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qxo",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qxp",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qxr",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qxt",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qxu",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                qu: {
                  _desired: "qxw",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                sc: {
                  _desired: "sdc",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                sc: {
                  _desired: "sdn",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                sc: {
                  _desired: "sro",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                sq: {
                  _desired: "aae",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                sq: {
                  _desired: "aat",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                sq: {
                  _desired: "aln",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                syr: {
                  _desired: "aii",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                uz: {
                  _desired: "uzs",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                yi: {
                  _desired: "yih",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                zh: {
                  _desired: "cdo",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                zh: {
                  _desired: "cjy",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                zh: {
                  _desired: "cpx",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                zh: {
                  _desired: "czh",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                zh: {
                  _desired: "czo",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                zh: {
                  _desired: "gan",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                zh: {
                  _desired: "hak",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                zh: {
                  _desired: "hsn",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                zh: {
                  _desired: "lzh",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                zh: {
                  _desired: "mnp",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                zh: {
                  _desired: "nan",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                zh: {
                  _desired: "wuu",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                zh: {
                  _desired: "yue",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                "*": {
                  _desired: "*",
                  _distance: "80"
                }
              }, {
                "en-Latn": {
                  _desired: "am-Ethi",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                "ru-Cyrl": {
                  _desired: "az-Latn",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                "en-Latn": {
                  _desired: "bn-Beng",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                "zh-Hans": {
                  _desired: "bo-Tibt",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                "ru-Cyrl": {
                  _desired: "hy-Armn",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                "en-Latn": {
                  _desired: "ka-Geor",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                "en-Latn": {
                  _desired: "km-Khmr",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                "en-Latn": {
                  _desired: "kn-Knda",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                "en-Latn": {
                  _desired: "lo-Laoo",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                "en-Latn": {
                  _desired: "ml-Mlym",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                "en-Latn": {
                  _desired: "my-Mymr",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                "en-Latn": {
                  _desired: "ne-Deva",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                "en-Latn": {
                  _desired: "or-Orya",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                "en-Latn": {
                  _desired: "pa-Guru",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                "en-Latn": {
                  _desired: "ps-Arab",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                "en-Latn": {
                  _desired: "sd-Arab",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                "en-Latn": {
                  _desired: "si-Sinh",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                "en-Latn": {
                  _desired: "ta-Taml",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                "en-Latn": {
                  _desired: "te-Telu",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                "en-Latn": {
                  _desired: "ti-Ethi",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                "ru-Cyrl": {
                  _desired: "tk-Latn",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                "en-Latn": {
                  _desired: "ur-Arab",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                "ru-Cyrl": {
                  _desired: "uz-Latn",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                "en-Latn": {
                  _desired: "yi-Hebr",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                "sr-Cyrl": {
                  _desired: "sr-Latn",
                  _distance: "5"
                }
              }, {
                "zh-Hans": {
                  _desired: "za-Latn",
                  _distance: "10",
                  _oneway: "true"
                }
              }, {
                "zh-Hans": {
                  _desired: "zh-Hani",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                "zh-Hant": {
                  _desired: "zh-Hani",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                "ar-Arab": {
                  _desired: "ar-Latn",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                "bn-Beng": {
                  _desired: "bn-Latn",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                "gu-Gujr": {
                  _desired: "gu-Latn",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                "hi-Deva": {
                  _desired: "hi-Latn",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                "kn-Knda": {
                  _desired: "kn-Latn",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                "ml-Mlym": {
                  _desired: "ml-Latn",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                "mr-Deva": {
                  _desired: "mr-Latn",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                "ta-Taml": {
                  _desired: "ta-Latn",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                "te-Telu": {
                  _desired: "te-Latn",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                "zh-Hans": {
                  _desired: "zh-Latn",
                  _distance: "20",
                  _oneway: "true"
                }
              }, {
                "ja-Jpan": {
                  _desired: "ja-Latn",
                  _distance: "5",
                  _oneway: "true"
                }
              }, {
                "ja-Jpan": {
                  _desired: "ja-Hani",
                  _distance: "5",
                  _oneway: "true"
                }
              }, {
                "ja-Jpan": {
                  _desired: "ja-Hira",
                  _distance: "5",
                  _oneway: "true"
                }
              }, {
                "ja-Jpan": {
                  _desired: "ja-Kana",
                  _distance: "5",
                  _oneway: "true"
                }
              }, {
                "ja-Jpan": {
                  _desired: "ja-Hrkt",
                  _distance: "5",
                  _oneway: "true"
                }
              }, {
                "ja-Hrkt": {
                  _desired: "ja-Hira",
                  _distance: "5",
                  _oneway: "true"
                }
              }, {
                "ja-Hrkt": {
                  _desired: "ja-Kana",
                  _distance: "5",
                  _oneway: "true"
                }
              }, {
                "ko-Kore": {
                  _desired: "ko-Hani",
                  _distance: "5",
                  _oneway: "true"
                }
              }, {
                "ko-Kore": {
                  _desired: "ko-Hang",
                  _distance: "5",
                  _oneway: "true"
                }
              }, {
                "ko-Kore": {
                  _desired: "ko-Jamo",
                  _distance: "5",
                  _oneway: "true"
                }
              }, {
                "ko-Hang": {
                  _desired: "ko-Jamo",
                  _distance: "5",
                  _oneway: "true"
                }
              }, {
                "*-*": {
                  _desired: "*-*",
                  _distance: "50"
                }
              }, {
                "ar-*-$maghreb": {
                  _desired: "ar-*-$maghreb",
                  _distance: "4"
                }
              }, {
                "ar-*-$!maghreb": {
                  _desired: "ar-*-$!maghreb",
                  _distance: "4"
                }
              }, {
                "ar-*-*": {
                  _desired: "ar-*-*",
                  _distance: "5"
                }
              }, {
                "en-*-$enUS": {
                  _desired: "en-*-$enUS",
                  _distance: "4"
                }
              }, {
                "en-*-GB": {
                  _desired: "en-*-$!enUS",
                  _distance: "3"
                }
              }, {
                "en-*-$!enUS": {
                  _desired: "en-*-$!enUS",
                  _distance: "4"
                }
              }, {
                "en-*-*": {
                  _desired: "en-*-*",
                  _distance: "5"
                }
              }, {
                "es-*-$americas": {
                  _desired: "es-*-$americas",
                  _distance: "4"
                }
              }, {
                "es-*-$!americas": {
                  _desired: "es-*-$!americas",
                  _distance: "4"
                }
              }, {
                "es-*-*": {
                  _desired: "es-*-*",
                  _distance: "5"
                }
              }, {
                "pt-*-$americas": {
                  _desired: "pt-*-$americas",
                  _distance: "4"
                }
              }, {
                "pt-*-$!americas": {
                  _desired: "pt-*-$!americas",
                  _distance: "4"
                }
              }, {
                "pt-*-*": {
                  _desired: "pt-*-*",
                  _distance: "5"
                }
              }, {
                "zh-Hant-$cnsar": {
                  _desired: "zh-Hant-$cnsar",
                  _distance: "4"
                }
              }, {
                "zh-Hant-$!cnsar": {
                  _desired: "zh-Hant-$!cnsar",
                  _distance: "4"
                }
              }, {
                "zh-Hant-*": {
                  _desired: "zh-Hant-*",
                  _distance: "5"
                }
              }, {
                "*-*-*": {
                  _desired: "*-*-*",
                  _distance: "4"
                }
              }]
            }
          }
        },
        _ = {
          "001": ["001", "001-status-grouping", "002", "005", "009", "011", "013", "014", "015", "017", "018", "019", "021", "029", "030", "034", "035", "039", "053", "054", "057", "061", "142", "143", "145", "150", "151", "154", "155", "AC", "AD", "AE", "AF", "AG", "AI", "AL", "AM", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", "AX", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BL", "BM", "BN", "BO", "BQ", "BR", "BS", "BT", "BV", "BW", "BY", "BZ", "CA", "CC", "CD", "CF", "CG", "CH", "CI", "CK", "CL", "CM", "CN", "CO", "CP", "CQ", "CR", "CU", "CV", "CW", "CX", "CY", "CZ", "DE", "DG", "DJ", "DK", "DM", "DO", "DZ", "EA", "EC", "EE", "EG", "EH", "ER", "ES", "ET", "EU", "EZ", "FI", "FJ", "FK", "FM", "FO", "FR", "GA", "GB", "GD", "GE", "GF", "GG", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HK", "HM", "HN", "HR", "HT", "HU", "IC", "ID", "IE", "IL", "IM", "IN", "IO", "IQ", "IR", "IS", "IT", "JE", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KR", "KW", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MK", "ML", "MM", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "QO", "RE", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SD", "SE", "SG", "SH", "SI", "SJ", "SK", "SL", "SM", "SN", "SO", "SR", "SS", "ST", "SV", "SX", "SY", "SZ", "TA", "TC", "TD", "TF", "TG", "TH", "TJ", "TK", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UM", "UN", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WF", "WS", "XK", "YE", "YT", "ZA", "ZM", "ZW"],
          "002": ["002", "002-status-grouping", "011", "014", "015", "017", "018", "202", "AO", "BF", "BI", "BJ", "BW", "CD", "CF", "CG", "CI", "CM", "CV", "DJ", "DZ", "EA", "EG", "EH", "ER", "ET", "GA", "GH", "GM", "GN", "GQ", "GW", "IC", "IO", "KE", "KM", "LR", "LS", "LY", "MA", "MG", "ML", "MR", "MU", "MW", "MZ", "NA", "NE", "NG", "RE", "RW", "SC", "SD", "SH", "SL", "SN", "SO", "SS", "ST", "SZ", "TD", "TF", "TG", "TN", "TZ", "UG", "YT", "ZA", "ZM", "ZW"],
          "003": ["003", "013", "021", "029", "AG", "AI", "AW", "BB", "BL", "BM", "BQ", "BS", "BZ", "CA", "CR", "CU", "CW", "DM", "DO", "GD", "GL", "GP", "GT", "HN", "HT", "JM", "KN", "KY", "LC", "MF", "MQ", "MS", "MX", "NI", "PA", "PM", "PR", "SV", "SX", "TC", "TT", "US", "VC", "VG", "VI"],
          "005": ["005", "AR", "BO", "BR", "BV", "CL", "CO", "EC", "FK", "GF", "GS", "GY", "PE", "PY", "SR", "UY", "VE"],
          "009": ["009", "053", "054", "057", "061", "AC", "AQ", "AS", "AU", "CC", "CK", "CP", "CX", "DG", "FJ", "FM", "GU", "HM", "KI", "MH", "MP", "NC", "NF", "NR", "NU", "NZ", "PF", "PG", "PN", "PW", "QO", "SB", "TA", "TK", "TO", "TV", "UM", "VU", "WF", "WS"],
          "011": ["011", "BF", "BJ", "CI", "CV", "GH", "GM", "GN", "GW", "LR", "ML", "MR", "NE", "NG", "SH", "SL", "SN", "TG"],
          "013": ["013", "BZ", "CR", "GT", "HN", "MX", "NI", "PA", "SV"],
          "014": ["014", "BI", "DJ", "ER", "ET", "IO", "KE", "KM", "MG", "MU", "MW", "MZ", "RE", "RW", "SC", "SO", "SS", "TF", "TZ", "UG", "YT", "ZM", "ZW"],
          "015": ["015", "DZ", "EA", "EG", "EH", "IC", "LY", "MA", "SD", "TN"],
          "017": ["017", "AO", "CD", "CF", "CG", "CM", "GA", "GQ", "ST", "TD"],
          "018": ["018", "BW", "LS", "NA", "SZ", "ZA"],
          "019": ["003", "005", "013", "019", "019-status-grouping", "021", "029", "419", "AG", "AI", "AR", "AW", "BB", "BL", "BM", "BO", "BQ", "BR", "BS", "BV", "BZ", "CA", "CL", "CO", "CR", "CU", "CW", "DM", "DO", "EC", "FK", "GD", "GF", "GL", "GP", "GS", "GT", "GY", "HN", "HT", "JM", "KN", "KY", "LC", "MF", "MQ", "MS", "MX", "NI", "PA", "PE", "PM", "PR", "PY", "SR", "SV", "SX", "TC", "TT", "US", "UY", "VC", "VE", "VG", "VI"],
          "021": ["021", "BM", "CA", "GL", "PM", "US"],
          "029": ["029", "AG", "AI", "AW", "BB", "BL", "BQ", "BS", "CU", "CW", "DM", "DO", "GD", "GP", "HT", "JM", "KN", "KY", "LC", "MF", "MQ", "MS", "PR", "SX", "TC", "TT", "VC", "VG", "VI"],
          "030": ["030", "CN", "HK", "JP", "KP", "KR", "MN", "MO", "TW"],
          "034": ["034", "AF", "BD", "BT", "IN", "IR", "LK", "MV", "NP", "PK"],
          "035": ["035", "BN", "ID", "KH", "LA", "MM", "MY", "PH", "SG", "TH", "TL", "VN"],
          "039": ["039", "AD", "AL", "BA", "ES", "GI", "GR", "HR", "IT", "ME", "MK", "MT", "PT", "RS", "SI", "SM", "VA", "XK"],
          "053": ["053", "AU", "CC", "CX", "HM", "NF", "NZ"],
          "054": ["054", "FJ", "NC", "PG", "SB", "VU"],
          "057": ["057", "FM", "GU", "KI", "MH", "MP", "NR", "PW", "UM"],
          "061": ["061", "AS", "CK", "NU", "PF", "PN", "TK", "TO", "TV", "WF", "WS"],
          142: ["030", "034", "035", "142", "143", "145", "AE", "AF", "AM", "AZ", "BD", "BH", "BN", "BT", "CN", "CY", "GE", "HK", "ID", "IL", "IN", "IQ", "IR", "JO", "JP", "KG", "KH", "KP", "KR", "KW", "KZ", "LA", "LB", "LK", "MM", "MN", "MO", "MV", "MY", "NP", "OM", "PH", "PK", "PS", "QA", "SA", "SG", "SY", "TH", "TJ", "TL", "TM", "TR", "TW", "UZ", "VN", "YE"],
          143: ["143", "KG", "KZ", "TJ", "TM", "UZ"],
          145: ["145", "AE", "AM", "AZ", "BH", "CY", "GE", "IL", "IQ", "JO", "KW", "LB", "OM", "PS", "QA", "SA", "SY", "TR", "YE"],
          150: ["039", "150", "151", "154", "155", "AD", "AL", "AT", "AX", "BA", "BE", "BG", "BY", "CH", "CQ", "CZ", "DE", "DK", "EE", "ES", "FI", "FO", "FR", "GB", "GG", "GI", "GR", "HR", "HU", "IE", "IM", "IS", "IT", "JE", "LI", "LT", "LU", "LV", "MC", "MD", "ME", "MK", "MT", "NL", "NO", "PL", "PT", "RO", "RS", "RU", "SE", "SI", "SJ", "SK", "SM", "UA", "VA", "XK"],
          151: ["151", "BG", "BY", "CZ", "HU", "MD", "PL", "RO", "RU", "SK", "UA"],
          154: ["154", "AX", "CQ", "DK", "EE", "FI", "FO", "GB", "GG", "IE", "IM", "IS", "JE", "LT", "LV", "NO", "SE", "SJ"],
          155: ["155", "AT", "BE", "CH", "DE", "FR", "LI", "LU", "MC", "NL"],
          202: ["011", "014", "017", "018", "202", "AO", "BF", "BI", "BJ", "BW", "CD", "CF", "CG", "CI", "CM", "CV", "DJ", "ER", "ET", "GA", "GH", "GM", "GN", "GQ", "GW", "IO", "KE", "KM", "LR", "LS", "MG", "ML", "MR", "MU", "MW", "MZ", "NA", "NE", "NG", "RE", "RW", "SC", "SH", "SL", "SN", "SO", "SS", "ST", "SZ", "TD", "TF", "TG", "TZ", "UG", "YT", "ZA", "ZM", "ZW"],
          419: ["005", "013", "029", "419", "AG", "AI", "AR", "AW", "BB", "BL", "BO", "BQ", "BR", "BS", "BV", "BZ", "CL", "CO", "CR", "CU", "CW", "DM", "DO", "EC", "FK", "GD", "GF", "GP", "GS", "GT", "GY", "HN", "HT", "JM", "KN", "KY", "LC", "MF", "MQ", "MS", "MX", "NI", "PA", "PE", "PR", "PY", "SR", "SV", "SX", "TC", "TT", "UY", "VC", "VE", "VG", "VI"],
          EU: ["AT", "BE", "BG", "CY", "CZ", "DE", "DK", "EE", "ES", "EU", "FI", "FR", "GR", "HR", "HU", "IE", "IT", "LT", "LU", "LV", "MT", "NL", "PL", "PT", "RO", "SE", "SI", "SK"],
          EZ: ["AT", "BE", "CY", "DE", "EE", "ES", "EZ", "FI", "FR", "GR", "IE", "IT", "LT", "LU", "LV", "MT", "NL", "PT", "SI", "SK"],
          QO: ["AC", "AQ", "CP", "DG", "QO", "TA"],
          UN: ["AD", "AE", "AF", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CD", "CF", "CG", "CH", "CI", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ER", "ES", "ET", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IQ", "IR", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MM", "MN", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SD", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SO", "SR", "SS", "ST", "SV", "SY", "SZ", "TD", "TG", "TH", "TJ", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TZ", "UA", "UG", "UN", "US", "UY", "UZ", "VC", "VE", "VN", "VU", "WS", "YE", "ZA", "ZM", "ZW"]
        },
        t = /-u(?:-[0-9a-z]{2,8})+/gi;

      function s(e, d, a) {
        if (void 0 === a && (a = Error), !e) throw new a(d)
      }
      var i, u = 838;

      function o(e, d, a) {
        var r = d.split("-"),
          t = r[0],
          s = r[1],
          i = r[2],
          u = !0;
        if (i && "$" === i[0]) {
          var o = "!" !== i[1],
            c = (o ? a[i.slice(1)] : a[i.slice(2)]).map((function(e) {
              return _[e] || [e]
            })).reduce((function(e, d) {
              return (0, n.__spreadArray)((0, n.__spreadArray)([], e, !0), d, !0)
            }), []);
          u && (u = !(c.indexOf(e.region || "") > -1 != o))
        } else u && (u = !e.region || "*" === i || i === e.region);
        return u && (u = !e.script || "*" === s || s === e.script), u && (u = !e.language || "*" === t || t === e.language), u
      }

      function c(e) {
        return [e.language, e.script, e.region].filter(Boolean).join("-")
      }

      function y(e, d, a) {
        for (var n = 0, r = a.matches; n < r.length; n++) {
          var _ = r[n],
            t = o(e, _.desired, a.matchVariables) && o(d, _.supported, a.matchVariables);
          if (_.oneway || t || (t = o(e, _.supported, a.matchVariables) && o(d, _.desired, a.matchVariables)), t) {
            var s = 10 * _.distance;
            return a.paradigmLocales.indexOf(c(e)) > -1 != a.paradigmLocales.indexOf(c(d)) > -1 ? s - 1 : s
          }
        }
        throw new Error("No matching distance found")
      }

      function w(e, d, a) {
        var _, s, o = [],
          c = d.reduce((function(e, d) {
            var a = d.replace(t, "");
            return o.push(a), e[a] = d, e
          }), {}),
          w = function(e, d, a) {
            void 0 === a && (a = u);
            var _ = 1 / 0,
              t = {
                matchedDesiredLocale: "",
                distances: {}
              };
            return e.forEach((function(e, a) {
              t.distances[e] || (t.distances[e] = {}), d.forEach((function(d) {
                var s = function(e, d) {
                  var a = new Intl.Locale(e).maximize(),
                    _ = new Intl.Locale(d).maximize(),
                    t = {
                      language: a.language,
                      script: a.script || "",
                      region: a.region || ""
                    },
                    s = {
                      language: _.language,
                      script: _.script || "",
                      region: _.region || ""
                    },
                    u = 0,
                    o = function() {
                      var e, d;
                      if (!i) {
                        var a = null === (d = null === (e = r.supplemental.languageMatching["written-new"][0]) || void 0 === e ? void 0 : e.paradigmLocales) || void 0 === d ? void 0 : d._locales.split(" "),
                          _ = r.supplemental.languageMatching["written-new"].slice(1, 5),
                          t = r.supplemental.languageMatching["written-new"].slice(5).map((function(e) {
                            var d = Object.keys(e)[0],
                              a = e[d];
                            return {
                              supported: d,
                              desired: a._desired,
                              distance: +a._distance,
                              oneway: "true" === a.oneway
                            }
                          }), {});
                        i = {
                          matches: t,
                          matchVariables: _.reduce((function(e, d) {
                            var a = Object.keys(d)[0],
                              n = d[a];
                            return e[a.slice(1)] = n._value.split("+"), e
                          }), {}),
                          paradigmLocales: (0, n.__spreadArray)((0, n.__spreadArray)([], a, !0), a.map((function(e) {
                            return new Intl.Locale(e.replace(/_/g, "-")).maximize().toString()
                          })), !0)
                        }
                      }
                      return i
                    }();
                  return t.language !== s.language && (u += y({
                    language: a.language,
                    script: "",
                    region: ""
                  }, {
                    language: _.language,
                    script: "",
                    region: ""
                  }, o)), t.script !== s.script && (u += y({
                    language: a.language,
                    script: t.script,
                    region: ""
                  }, {
                    language: _.language,
                    script: s.script,
                    region: ""
                  }, o)), t.region !== s.region && (u += y(t, s, o)), u
                }(e, d) + 0 + 40 * a;
                t.distances[e][d] = s, s < _ && (_ = s, t.matchedDesiredLocale = e, t.matchedSupportedLocale = d)
              }))
            })), _ >= a && (t.matchedDesiredLocale = void 0, t.matchedSupportedLocale = void 0), t
          }(o, e);
        return w.matchedSupportedLocale && w.matchedDesiredLocale && (_ = w.matchedSupportedLocale, s = c[w.matchedDesiredLocale].slice(w.matchedDesiredLocale.length) || void 0), _ ? {
          locale: _,
          extension: s
        } : {
          locale: a()
        }
      }

      function l(e) {
        return Intl.getCanonicalLocales(e)[0]
      }

      function M(e, d) {
        for (var a = d;;) {
          if (e.indexOf(a) > -1) return a;
          var n = a.lastIndexOf("-");
          if (!~n) return;
          n >= 2 && "-" === a[n - 2] && (n -= 2), a = a.slice(0, n)
        }
      }

      function f(e, d, a, n, r, _) {
        var i, u;
        u = "lookup" === a.localeMatcher ? function(e, d, a) {
          for (var n = {
              locale: ""
            }, r = 0, _ = d; r < _.length; r++) {
            var s = _[r],
              i = s.replace(t, ""),
              u = M(e, i);
            if (u) return n.locale = u, s !== i && (n.extension = s.slice(i.length, s.length)), n
          }
          return n.locale = a(), n
        }(Array.from(e), d, _) : w(Array.from(e), d, _), null == u && (u = {
          locale: _(),
          extension: ""
        });
        var o, c, y = u.locale,
          f = r[y],
          g = {
            locale: "en",
            dataLocale: y
          };
        u.extension ? (o = function(e) {
          s(e === e.toLowerCase(), "Expected extension to be lowercase"), s("-u-" === e.slice(0, 3), "Expected extension to be a Unicode locale extension");
          for (var d, a = [], n = [], r = e.length, _ = 3; _ < r;) {
            var t, i = e.indexOf("-", _);
            t = -1 === i ? r - _ : i - _;
            var u = e.slice(_, _ + t);
            s(t >= 2, "Expected a subtag to have at least 2 characters"), void 0 === d && 2 != t ? -1 === a.indexOf(u) && a.push(u) : 2 === t ? (d = {
              key: u,
              value: ""
            }, void 0 === n.find((function(e) {
              return e.key === (null == d ? void 0 : d.key)
            })) && n.push(d)) : "" === (null == d ? void 0 : d.value) ? d.value = u : (s(void 0 !== d, "Expected keyword to be defined"), d.value += "-" + u), _ += t + 1
          }
          return {
            attributes: a,
            keywords: n
          }
        }(u.extension), c = o.keywords) : c = [];
        for (var m = [], S = function(e) {
            var d = null !== (i = null == f ? void 0 : f[e]) && void 0 !== i ? i : [];
            s(Array.isArray(d), "keyLocaleData for ".concat(e, " must be an array"));
            var n = d[0];
            s(void 0 === n || "string" == typeof n, "value must be a string or undefined");
            var r = void 0,
              _ = c.find((function(d) {
                return d.key === e
              }));
            if (_) {
              var t = _.value;
              "" !== t ? d.indexOf(t) > -1 && (r = {
                key: e,
                value: n = t
              }) : d.indexOf("true") > -1 && (r = {
                key: e,
                value: n = "true"
              })
            }
            var u, o, y = a[e];
            s(null == y || "string" == typeof y, "optionsValue must be a string or undefined"), "string" == typeof y && (u = e.toLowerCase(), o = y.toLowerCase(), s(void 0 !== u, "ukey must be defined"), "" === (y = o) && (y = "true")), y !== n && d.indexOf(y) > -1 && (n = y, r = void 0), r && m.push(r), g[e] = n
          }, L = 0, G = n; L < G.length; L++) S(G[L]);
        return m.length > 0 && (y = function(e, d, a) {
          s(-1 === e.indexOf("-u-"), "Expected locale to not have a Unicode locale extension");
          for (var n = "-u", r = 0, _ = []; r < _.length; r++) {
            n += "-".concat(_[r])
          }
          for (var t = 0, i = a; t < i.length; t++) {
            var u = i[t],
              o = u.key,
              c = u.value;
            n += "-".concat(o), "" !== c && (n += "-".concat(c))
          }
          if ("-u" === n) return l(e);
          var y = e.indexOf("-x-");
          return l(-1 === y ? e + n : e.slice(0, y) + n + e.slice(y))
        }(y, 0, m)), g.locale = y, g
      }

      function g(e, d) {
        for (var a = [], n = 0, r = d; n < r.length; n++) {
          var _ = M(e, r[n].replace(t, ""));
          _ && a.push(_)
        }
        return a
      }

      function m(e, d, a, n) {
        return f(d, (r = e, Intl.getCanonicalLocales(r)), {
          localeMatcher: (null == n ? void 0 : n.algorithm) || "best fit"
        }, [], {}, (function() {
          return a
        })).locale;
        var r
      }
    }
  }
]);