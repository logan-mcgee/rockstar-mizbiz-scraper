try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    o = (new e.Error).stack;
  o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "8043b890-e75d-4490-9ca9-23a2cea25fc5", e._sentryDebugIdIdentifier = "sentry-dbid-8043b890-e75d-4490-9ca9-23a2cea25fc5")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-gta-tv",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_tv = self.webpackChunk_rockstargames_sites_gta_tv || []).push([
  [4776], {
    5267: (e, o, t) => {
      var s = {
        "./de": [406, 299],
        "./en": [20874, 5663],
        "./es": [4013, 5530],
        "./fr": [84965, 2466],
        "./it": [48596, 7073],
        "./ja": [24656, 4621],
        "./ko": [75451, 824],
        "./pl": [86273, 2398],
        "./pt": [16585, 9126],
        "./ru": [77284, 3697],
        "./zh": [11615, 1868]
      };

      function r(e) {
        if (!t.o(s, e)) return Promise.resolve().then(() => {
          var o = new Error("Cannot find module '" + e + "'");
          throw o.code = "MODULE_NOT_FOUND", o
        });
        var o = s[e],
          r = o[0];
        return t.e(o[1]).then(() => t.t(r, 23))
      }
      r.keys = () => Object.keys(s), r.id = 5267, e.exports = r
    },
    33019: (e, o, t) => {
      var s = {
        "./de": [62666, 6879],
        "./en": [89390, 2243],
        "./es": [28697, 278],
        "./fr": [87185, 9022],
        "./it": [31872, 2365],
        "./ja": [3476, 9377],
        "./ko": [31239, 9028],
        "./pl": [31645, 1242],
        "./pt": [93669, 7970],
        "./ru": [81520, 7453],
        "./zh": [23907, 8880]
      };

      function r(e) {
        if (!t.o(s, e)) return Promise.resolve().then(() => {
          var o = new Error("Cannot find module '" + e + "'");
          throw o.code = "MODULE_NOT_FOUND", o
        });
        var o = s[e],
          r = o[0];
        return t.e(o[1]).then(() => t.t(r, 23))
      }
      r.keys = () => Object.keys(s), r.id = 33019, e.exports = r
    },
    38525: (e, o, t) => {
      var s = {
        "./de": [55149, 9990],
        "./en": [78517, 1822],
        "./es": [16258, 2347],
        "./fr": [36170, 131],
        "./it": [45583, 8272],
        "./ja": [25571, 7436],
        "./ko": [78284, 2221],
        "./pl": [79682, 2171],
        "./pt": [22762, 8755],
        "./ru": [41007, 2864],
        "./zh": [78548, 3197]
      };

      function r(e) {
        if (!t.o(s, e)) return Promise.resolve().then(() => {
          var o = new Error("Cannot find module '" + e + "'");
          throw o.code = "MODULE_NOT_FOUND", o
        });
        var o = s[e],
          r = o[0];
        return t.e(o[1]).then(() => t.t(r, 23))
      }
      r.keys = () => Object.keys(s), r.id = 38525, e.exports = r
    },
    63514: (e, o, t) => {
      var s = {
        "./de": [1367, 4710],
        "./en": [80579, 3486],
        "./es": [47304, 4011],
        "./fr": [22436, 4851],
        "./it": [80665, 9936],
        "./ja": [89729, 2156],
        "./ko": [45414, 3885],
        "./pl": [54156, 6891],
        "./pt": [772, 3475],
        "./ru": [88501, 4528],
        "./zh": [68282, 4861]
      };

      function r(e) {
        if (!t.o(s, e)) return Promise.resolve().then(() => {
          var o = new Error("Cannot find module '" + e + "'");
          throw o.code = "MODULE_NOT_FOUND", o
        });
        var o = s[e],
          r = o[0];
        return t.e(o[1]).then(() => t.t(r, 23))
      }
      r.keys = () => Object.keys(s), r.id = 63514, e.exports = r
    },
    79867: (e, o, t) => {
      "use strict";
      t.d(o, {
        A: () => d,
        C: () => a
      });
      var s = t(56265),
        r = t.n(s),
        n = t(41972),
        i = t.n(n);
      const a = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store",
          circoloco: "circoloco",
          supportNew: "support"
        },
        u = [{
          id: "prod",
          sites: {
            www: "www",
            socialClub: "socialclub",
            support: "support",
            store: "store",
            circoloco: "circolocorecords",
            supportNew: "support"
          },
          cookieIdentifier: "prod"
        }],
        d = () => {
          let e;
          const {
            location: o
          } = window, t = o.hostname.substring(0, o.hostname.indexOf(".rockstargames.com")), s = u.findIndex(o => Object.entries(o.sites).findIndex(([o, s]) => s === t && (e = {
            site: o,
            subDomain: s
          }, !0)) >= 0), n = u[s >= 0 ? s : 0], a = u.find(e => e.id === n.fallbackEnvironment);
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), i()(r()({}, a, {
            currentSite: e
          }, n), "fallbackEnvironment")
        }
    },
    88613: (e, o, t) => {
      "use strict";
      t.d(o, {
        YK: () => s.YK,
        JK: () => m,
        tz: () => r.A,
        QY: () => g
      });
      var s = t(24944),
        r = t(30597),
        n = t(42295),
        i = t(71127),
        a = t(95696),
        u = t(55422),
        d = t(79867);
      const l = (e, o) => {
          if (!e || !o) return void console.log(`Couldn't set cookie (${e}) to value (${o})`);
          const t = window.location.hostname.split("."),
            s = t.slice(t.length - 2).join(".");
          document.cookie = `${e}=${o}; domain=${s}; path=/;`
        },
        c = e => {
          const o = document.cookie.split("; "),
            t = `${e}=`,
            s = o.find(e => e.startsWith(t)),
            r = s?.substring(t.length, s.length);
          return r
        },
        p = [{
          label: "English",
          subdomain: "en-US",
          subdomaincom: "en",
          support: "us",
          iso: "en-US",
          store: "en"
        }, {
          label: "Deutsch",
          subdomain: "de",
          subdomaincom: "de",
          support: "de",
          iso: "de-DE",
          store: "de"
        }, {
          label: "Español",
          subdomain: "es",
          subdomaincom: "es",
          support: "es",
          iso: "es-ES",
          store: "es"
        }, {
          label: "Español Latinoamérica",
          subdomain: "es-mx",
          subdomaincom: "mx",
          support: "es-mx",
          iso: "es-MX",
          store: "es-419"
        }, {
          label: "Français",
          subdomain: "fr",
          subdomaincom: "fr",
          support: "fr",
          iso: "fr-FR",
          store: "fr"
        }, {
          label: "Italiano",
          subdomain: "it",
          subdomaincom: "it",
          support: "it",
          iso: "it-IT",
          store: "it"
        }, {
          label: "日本語",
          subdomain: "ja",
          subdomaincom: "jp",
          support: "jp",
          iso: "ja-JP",
          store: "ja"
        }, {
          label: "한국어",
          subdomain: "ko",
          subdomaincom: "kr",
          support: "kr",
          iso: "ko-KR",
          store: "ko"
        }, {
          label: "Polski",
          subdomain: "pl",
          subdomaincom: "pl",
          support: "pl",
          iso: "pl-PL",
          store: "pl"
        }, {
          label: "Português do Brasil",
          subdomain: "pt",
          subdomaincom: "br",
          support: "br",
          iso: "pt-BR",
          store: "pt-BR"
        }, {
          label: "Русский",
          subdomain: "ru",
          subdomaincom: "ru",
          support: "ru",
          iso: "ru-RU",
          store: "ru"
        }, {
          label: "繁體中文",
          subdomain: "zh",
          subdomaincom: "tw",
          support: "tw",
          iso: "zh-TW",
          store: "zh-Hant"
        }, {
          label: "简体中文",
          subdomain: "zh-cn",
          subdomaincom: "zh",
          support: "zh",
          iso: "zh-CN",
          store: "zh-CN"
        }],
        f = p[0],
        b = p,
        m = () => {
          const {
            location: e
          } = window, o = (0, d.A)(), t = (e => {
            const o = b.map(e => e.subdomaincom),
              t = e.pathname.substring(1).split("/"),
              s = "detect-locals" === t[0] ? 1 : 0;
            return -1 !== o.indexOf(t[s]) ? t[s] : null
          })(e), s = (e => {
            const o = e.search.substring(1).split("&").find(e => e.startsWith("lang"));
            return o?.split("=")[1]
          })(e), r = f;
          let n;
          const i = `rockstarweb_lang.${o.cookieIdentifier}`,
            a = c(i);
          n = o.currentSite?.site === d.C.www ? b.find(e => e.subdomaincom === s) || b.find(e => e.subdomaincom === t) || r : b.find(e => e.iso === a) || r;
          const [, u] = ((e, o, t = !1) => {
            const s = c(e);
            return s && !t || l(e, o), [s, (r = e, e => {
              l(r, e)
            })];
            var r
          })(i, n.iso);
          return [n, u]
        },
        w = () => "en-US";

      function h(e) {
        const o = e.split("-");
        return (0, u.A)(o[1] ? o[0] : e, ["relativetimeformat", "pluralrules", "listformat"])
      }

      function k(e, o) {
        return e[o] ?? {}
      }

      function g(e, o, t, s) {
        return r => {
          const u = (0, i.useMemo)(() => {
            if (o) return function(e, o) {
              return function(e, o) {
                const t = o ?? m()[0].iso ?? w(),
                  [, s] = [h(t), k(e, t)];
                var r;
                return {
                  rsLocale: t,
                  locale: t,
                  messages: (r = s, {
                    ...r
                  })
                }
              }(e, o)
            }(o, t)
          }, [t]);
          return (0, n.jsx)(a.A, {
            locale: u?.locale || w(),
            messages: {
              ...u?.messages
            },
            onError: s,
            children: u && (0, n.jsx)(e, {
              ...r
            })
          }, "intl-provider")
        }
      }
    },
    94375: (e, o, t) => {
      var s = {
        "./de": [11464, 5639],
        "./en": [73872, 6267],
        "./es": [36507, 5742],
        "./fr": [90031, 2678],
        "./it": [19006, 6997],
        "./ja": [53142, 6361],
        "./ko": [82189, 7452],
        "./pl": [86283, 2642],
        "./pt": [6515, 3034],
        "./ru": [7746, 3941],
        "./zh": [84333, 5832]
      };

      function r(e) {
        if (!t.o(s, e)) return Promise.resolve().then(() => {
          var o = new Error("Cannot find module '" + e + "'");
          throw o.code = "MODULE_NOT_FOUND", o
        });
        var o = s[e],
          r = o[0];
        return t.e(o[1]).then(() => t.t(r, 23))
      }
      r.keys = () => Object.keys(s), r.id = 94375, e.exports = r
    },
    94819: (e, o, t) => {
      var s = {
        "./de": [17894, 5259],
        "./en": [61658, 4799],
        "./es": [28637, 3370],
        "./fr": [83157, 7010],
        "./it": [89060, 4913],
        "./ja": [6688, 6285],
        "./ko": [64907, 6664],
        "./pl": [78097, 1054],
        "./pt": [68953, 662],
        "./ru": [87924, 5233],
        "./zh": [76975, 4700]
      };

      function r(e) {
        if (!t.o(s, e)) return Promise.resolve().then(() => {
          var o = new Error("Cannot find module '" + e + "'");
          throw o.code = "MODULE_NOT_FOUND", o
        });
        var o = s[e],
          r = o[0];
        return t.e(o[1]).then(() => t.t(r, 23))
      }
      r.keys = () => Object.keys(s), r.id = 94819, e.exports = r
    }
  }
]);