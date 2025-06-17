! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      o = (new e.Error).stack;
    o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "57b41fa7-140a-4ac9-943f-5c7e06dcac00", e._sentryDebugIdIdentifier = "sentry-dbid-57b41fa7-140a-4ac9-943f-5c7e06dcac00")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-newswire-article",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [838, 5854, 8457], {
    5267: (e, o, t) => {
      var r = {
        "./de": [45293, 299],
        "./en": [28085, 5663],
        "./es": [46594, 5530],
        "./fr": [43210, 2466],
        "./it": [53135, 7073],
        "./ja": [30115, 4621],
        "./ko": [48140, 824],
        "./pl": [93122, 2398],
        "./pt": [95626, 9126],
        "./ru": [48559, 3697],
        "./zh": [43572, 1868]
      };

      function n(e) {
        if (!t.o(r, e)) return Promise.resolve().then((() => {
          var o = new Error("Cannot find module '" + e + "'");
          throw o.code = "MODULE_NOT_FOUND", o
        }));
        var o = r[e],
          n = o[0];
        return t.e(o[1]).then((() => t.t(n, 23)))
      }
      n.keys = () => Object.keys(r), n.id = 5267, e.exports = n
    },
    25854: (e, o, t) => {
      "use strict";
      e.exports = t(41454)
    },
    33019: (e, o, t) => {
      var r = {
        "./de": [81261, 6879],
        "./en": [47157, 2243],
        "./es": [85813, 278],
        "./fr": [93034, 9022],
        "./it": [68271, 2365],
        "./ja": [66083, 9377],
        "./ko": [61324, 9028],
        "./pl": [29090, 1242],
        "./pt": [14698, 7970],
        "./ru": [63695, 7453],
        "./zh": [47188, 8880]
      };

      function n(e) {
        if (!t.o(r, e)) return Promise.resolve().then((() => {
          var o = new Error("Cannot find module '" + e + "'");
          throw o.code = "MODULE_NOT_FOUND", o
        }));
        var o = r[e],
          n = o[0];
        return t.e(o[1]).then((() => t.t(n, 23)))
      }
      n.keys = () => Object.keys(r), n.id = 33019, e.exports = n
    },
    35671: (e, o, t) => {
      "use strict";
      t.r(o), t.d(o, {
        FormattedMessage: () => n.A,
        POSIXLocales: () => w,
        ReactIntlProviderForMocking: () => i.A,
        createDevLocaleHook: () => j,
        createIntl: () => s.E,
        defineMessages: () => r.YK,
        englishLocale: () => m,
        getCookieValueByName: () => p,
        getLocale: () => _,
        localeCookieHandler: () => f,
        locales: () => h,
        onLanguageChange: () => D,
        splitLocale: () => M,
        useIntl: () => a.A,
        withIntl: () => E
      });
      var r = t(9008),
        n = t(23456),
        s = t(6692),
        a = t(66920),
        i = t(45379),
        l = t(62229),
        u = t(40148),
        d = t(87171);
      const c = (e, o) => {
          e && o ? document.cookie = `${e}=${o}; domain=${(0,d.F)()}; path=/;` : console.log(`Couldn't set cookie (${e}) to value (${o})`)
        },
        p = e => {
          const o = document.cookie.split("; "),
            t = `${e}=`,
            r = o.find((e => e.startsWith(t))),
            n = r?.substring(t.length, r.length);
          return n
        },
        f = function(e, o) {
          let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const r = p(e);
          return r && !t || c(e, o), [r, (n = e, e => {
            c(n, e)
          })];
          var n
        },
        b = [{
          label: "English",
          subdomain: "en-US",
          subdomaincom: "en",
          support: "us",
          iso: "en-US"
        }, {
          label: "Deutsch",
          subdomain: "de",
          subdomaincom: "de",
          support: "de",
          iso: "de-DE"
        }, {
          label: "Español",
          subdomain: "es",
          subdomaincom: "es",
          support: "es",
          iso: "es-ES"
        }, {
          label: "Español Latinoamérica",
          subdomain: "es-mx",
          subdomaincom: "mx",
          support: "es-mx",
          iso: "es-MX"
        }, {
          label: "Français",
          subdomain: "fr",
          subdomaincom: "fr",
          support: "fr",
          iso: "fr-FR"
        }, {
          label: "Italiano",
          subdomain: "it",
          subdomaincom: "it",
          support: "it",
          iso: "it-IT"
        }, {
          label: "日本語",
          subdomain: "ja",
          subdomaincom: "jp",
          support: "jp",
          iso: "ja-JP"
        }, {
          label: "한국어",
          subdomain: "ko",
          subdomaincom: "kr",
          support: "kr",
          iso: "ko-KR"
        }, {
          label: "Polski",
          subdomain: "pl",
          subdomaincom: "pl",
          support: "pl",
          iso: "pl-PL"
        }, {
          label: "Português do Brasil",
          subdomain: "pt",
          subdomaincom: "br",
          support: "br",
          iso: "pt-BR"
        }, {
          label: "Русский",
          subdomain: "ru",
          subdomaincom: "ru",
          support: "ru",
          iso: "ru-RU"
        }, {
          label: "繁體中文",
          subdomain: "zh",
          subdomaincom: "tw",
          support: "tw",
          iso: "zh-TW"
        }, {
          label: "简体中文",
          subdomain: "zh-cn",
          subdomaincom: "zh",
          support: "zh",
          iso: "zh-CN"
        }],
        m = b[0],
        w = ["de_de", "fr_fr", "it_it", "ja_jp", "ru_ru", "es_es", "es_mx", "pt_br", "ko_kr", "zh_tw", "pl_pl", "zh_hans"],
        h = b,
        _ = () => {
          const {
            location: e
          } = window, o = (0, u.A)(), t = (e => {
            const o = h.map((e => e.subdomaincom)),
              t = e.pathname.substring(1).split("/"),
              r = "detect-locals" === t[0] ? 1 : 0;
            return -1 !== o.indexOf(t[r]) ? t[r] : null
          })(e), r = (e => {
            const o = e.search.substring(1).split("&").find((e => e.startsWith("lang")));
            return o?.split("=")[1]
          })(e), n = m;
          let s = n;
          const a = `rockstarweb_lang.${o.cookieIdentifier}`,
            i = p(a);
          s = o.currentSite?.site === u.C.www ? h.find((e => e.subdomaincom === r)) || h.find((e => e.subdomaincom === t)) || n : h.find((e => e.iso === i)) || n;
          const [l, d] = f(a, s.iso);
          return [s, d]
        };
      var g = t(56481);
      const k = () => "en-US";

      function y(e) {
        const o = e.split("-");
        return (0, g.A)(o[1] ? o[0] : e, ["relativetimeformat", "pluralrules", "listformat"])
      }

      function v(e, o) {
        return e[o] ?? {}
      }
      var O = t(25854);

      function E(e, o, t, r) {
        return n => {
          const s = (0, l.useMemo)((() => {
            if (o) return function(e, o) {
              return function(e, o) {
                const t = o ?? _()[0].iso ?? k(),
                  [, r] = [y(t), v(e, t)];
                var n;
                return {
                  rsLocale: t,
                  locale: t,
                  messages: (n = r, {
                    ...n
                  })
                }
              }(e, o)
            }(o, t)
          }), [t]);
          return (0, O.jsx)(i.A, {
            locale: s?.locale || k(),
            messages: {
              ...s?.messages
            },
            onError: r,
            children: s && (0, O.jsx)(e, {
              ...n
            })
          }, "intl-provider")
        }
      }

      function M(e) {
        let [o, t] = e.split(/[-_]/), r = t?.toLowerCase();
        return "cn" === r && (r = "hans"), o && t || (o = "en", r = "us"), [o, r]
      }
      const j = e => {
          if (!e.us || 0 === Object.keys(e?.us).length) throw new Error("createDevLocaleHook requires at least a 'us' key with definitions");
          return () => {
            const [{
              iso: o
            }] = _(), [t, r] = M(o);
            return e?.[r] ?? e.us
          }
        },
        D = e => {
          let {
            selectedLocale: o,
            track: t,
            parent: r = ""
          } = e;
          const n = (0, u.A)(),
            [s, a] = _(),
            {
              subdomaincom: i,
              iso: l
            } = o,
            d = (e => {
              let o = location.pathname.replace(/^\/|\/$/g, "");
              const t = o.split("/");
              return h.map((e => e.subdomaincom)).includes(t[0]) && (o = t.slice(1).join("/")), n.currentSite?.site === u.C.www ? "en" === e ? `${window.location.origin}/${o}${location.search}` : `${window.location.origin}/${e}/${o}${location.search}` : `${window.location.origin}/${o}${location.search}`
            })(i);
          t?.({
            event: "cta_other",
            link_url: d,
            text: i,
            element_placement: r
          }), a(l), window.location.href = d
        }
    },
    38525: (e, o, t) => {
      var r = {
        "./de": [99692, 9990],
        "./en": [58436, 1822],
        "./es": [57911, 2347],
        "./fr": [13691, 131],
        "./it": [79802, 8272],
        "./ja": [33050, 7436],
        "./ko": [8073, 2221],
        "./pl": [70695, 2171],
        "./pt": [71999, 8755],
        "./ru": [81790, 2864],
        "./zh": [42721, 3197]
      };

      function n(e) {
        if (!t.o(r, e)) return Promise.resolve().then((() => {
          var o = new Error("Cannot find module '" + e + "'");
          throw o.code = "MODULE_NOT_FOUND", o
        }));
        var o = r[e],
          n = o[0];
        return t.e(o[1]).then((() => t.t(n, 23)))
      }
      n.keys = () => Object.keys(r), n.id = 38525, e.exports = n
    },
    40148: (e, o, t) => {
      "use strict";
      t.d(o, {
        A: () => s,
        C: () => r
      });
      const r = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store",
          supportNew: "support"
        },
        n = [{
          id: "prod",
          sites: {
            www: "www",
            socialClub: "socialclub",
            support: "support",
            store: "store",
            supportNew: "support"
          },
          cookieIdentifier: "prod"
        }],
        s = () => {
          let e;
          const {
            location: o
          } = window, t = o.hostname.substring(0, o.hostname.indexOf(".rockstargames.com")), r = n.findIndex((o => Object.entries(o.sites).findIndex((o => {
            let [r, n] = o;
            return n === t && (e = {
              site: r,
              subDomain: n
            }, !0)
          })) >= 0)), s = n[r >= 0 ? r : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...s,
            currentSite: e
          }
        }
    },
    41454: (e, o, t) => {
      "use strict";
      var r = t(62229),
        n = Symbol.for("react.element"),
        s = Symbol.for("react.fragment"),
        a = Object.prototype.hasOwnProperty,
        i = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function u(e, o, t) {
        var r, s = {},
          u = null,
          d = null;
        for (r in void 0 !== t && (u = "" + t), void 0 !== o.key && (u = "" + o.key), void 0 !== o.ref && (d = o.ref), o) a.call(o, r) && !l.hasOwnProperty(r) && (s[r] = o[r]);
        if (e && e.defaultProps)
          for (r in o = e.defaultProps) void 0 === s[r] && (s[r] = o[r]);
        return {
          $$typeof: n,
          type: e,
          key: u,
          ref: d,
          props: s,
          _owner: i.current
        }
      }
      o.Fragment = s, o.jsx = u, o.jsxs = u
    },
    63514: (e, o, t) => {
      var r = {
        "./de": [76304, 4710],
        "./en": [53832, 3486],
        "./es": [44579, 4011],
        "./fr": [32951, 4851],
        "./it": [45014, 9936],
        "./ja": [85422, 2156],
        "./ko": [16373, 3885],
        "./pl": [41923, 6891],
        "./pt": [90267, 3475],
        "./ru": [82282, 4528],
        "./zh": [37749, 4861]
      };

      function n(e) {
        if (!t.o(r, e)) return Promise.resolve().then((() => {
          var o = new Error("Cannot find module '" + e + "'");
          throw o.code = "MODULE_NOT_FOUND", o
        }));
        var o = r[e],
          n = o[0];
        return t.e(o[1]).then((() => t.t(n, 23)))
      }
      n.keys = () => Object.keys(r), n.id = 63514, e.exports = n
    },
    87171: (e, o, t) => {
      "use strict";
      t.d(o, {
        F: () => r
      });
      const r = () => {
        const e = window.location.hostname.split(".");
        return e.slice(e.length - 2).join(".")
      }
    },
    94375: (e, o, t) => {
      var r = {
        "./de": [67311, 5639],
        "./en": [2347, 6267],
        "./es": [97376, 5742],
        "./fr": [17084, 2678],
        "./it": [1121, 6997],
        "./ja": [71561, 6361],
        "./ko": [45982, 7452],
        "./pl": [53204, 2642],
        "./pt": [6396, 3034],
        "./ru": [66317, 3941],
        "./zh": [60754, 5832]
      };

      function n(e) {
        if (!t.o(r, e)) return Promise.resolve().then((() => {
          var o = new Error("Cannot find module '" + e + "'");
          throw o.code = "MODULE_NOT_FOUND", o
        }));
        var o = r[e],
          n = o[0];
        return t.e(o[1]).then((() => t.t(n, 23)))
      }
      n.keys = () => Object.keys(r), n.id = 94375, e.exports = n
    },
    94819: (e, o, t) => {
      var r = {
        "./de": [13577, 5259],
        "./en": [71137, 4799],
        "./es": [15494, 3370],
        "./fr": [52974, 7010],
        "./it": [86515, 4913],
        "./ja": [31535, 6285],
        "./ko": [26208, 6664],
        "./pl": [40230, 1054],
        "./pt": [99006, 662],
        "./ru": [40211, 5233],
        "./zh": [98432, 4700]
      };

      function n(e) {
        if (!t.o(r, e)) return Promise.resolve().then((() => {
          var o = new Error("Cannot find module '" + e + "'");
          throw o.code = "MODULE_NOT_FOUND", o
        }));
        var o = r[e],
          n = o[0];
        return t.e(o[1]).then((() => t.t(n, 23)))
      }
      n.keys = () => Object.keys(r), n.id = 94819, e.exports = n
    }
  }
]);