! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      o = (new Error).stack;
    o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "45b9d6aa-1fef-414e-9b00-5d37c1c04603", e._sentryDebugIdIdentifier = "sentry-dbid-45b9d6aa-1fef-414e-9b00-5d37c1c04603")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta-trilogy",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_trilogy = self.webpackChunk_rockstargames_sites_gta_trilogy || []).push([
  [524], {
    6524: (e, o, s) => {
      "use strict";
      s.r(o), s.d(o, {
        FormattedMessage: () => t.A,
        IntlProvider: () => l.Kq,
        POSIXLocales: () => u.FN,
        createDevLocaleHook: () => r.A,
        createIntl: () => n.E,
        defineMessages: () => a.YK,
        englishLocale: () => u.Vm,
        getCookieValueByName: () => c.h,
        getLocale: () => d.A,
        localeCookieHandler: () => c.A,
        locales: () => u.Ay,
        splitLocale: () => b.A,
        useIntl: () => i.A,
        withIntl: () => l.QY
      });
      var t = s(7047),
        n = s(4952),
        a = s(452),
        i = s(708),
        l = s(120),
        r = s(3480),
        d = s(1134),
        c = s(4677),
        u = s(9186),
        b = s(2755),
        m = s(1272),
        p = {};
      for (const e in m)["default", "FormattedMessage", "IntlProvider", "POSIXLocales", "createDevLocaleHook", "createIntl", "defineMessages", "englishLocale", "getCookieValueByName", "getLocale", "localeCookieHandler", "locales", "splitLocale", "useIntl", "withIntl"].indexOf(e) < 0 && (p[e] = () => m[e]);
      s.d(o, p)
    },
    120: (e, o, s) => {
      "use strict";
      s.d(o, {
        Kq: () => r,
        QY: () => d
      });
      var t = s(1403),
        n = s(3071),
        a = s(1134),
        i = s(2755),
        l = s(6632);
      const r = e => {
        let {
          locales: o,
          lang: s,
          children: a
        } = e;
        const [r, d] = (0, t.useMemo)((() => (0, i.A)(s)), [s]), c = (0, t.useMemo)((() => function(e, o) {
          return e?.[o] ?? {}
        }(o, d)), [s, o]);
        return (0, l.jsx)(n.A, {
          messages: c,
          locale: r,
          defaultLocale: "en",
          children: a
        })
      };

      function d(e, o) {
        return s => {
          const [{
            iso: t
          }] = (0, a.A)();
          return (0, l.jsx)(r, {
            locales: o,
            lang: t,
            children: (0, l.jsx)(e, {
              ...s
            })
          })
        }
      }
    },
    1272: () => {},
    3480: (e, o, s) => {
      "use strict";
      s.d(o, {
        A: () => a
      });
      var t = s(1134),
        n = s(2755);
      const a = e => {
        if (!e.us || 0 === Object.keys(e?.us).length) throw new Error("createDevLocaleHook requires at least a 'us' key with definitions");
        return () => {
          const [{
            iso: o
          }] = (0, t.A)(), [s, a] = (0, n.A)(o);
          return e?.[a] ?? e.us
        }
      }
    },
    1134: (e, o, s) => {
      "use strict";
      s.d(o, {
        A: () => i
      });
      const t = [{
        id: "prod",
        sites: {
          www: "www",
          socialClub: "socialclub",
          support: "support",
          store: "store"
        },
        cookieIdentifier: "prod"
      }];
      var n = s(4677),
        a = s(9186);
      const i = () => {
        const {
          location: e
        } = window, o = (() => {
          let e;
          const {
            location: o
          } = window, s = o.hostname.substring(0, o.hostname.indexOf(".rockstargames.com")), n = t.findIndex((o => Object.entries(o.sites).findIndex((o => {
            let [t, n] = o;
            return n === s && (e = {
              site: t,
              subDomain: n
            }, !0)
          })) >= 0)), a = t[n >= 0 ? n : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...a,
            currentSite: e
          }
        })(), s = (e => {
          const o = a.Ay.map((e => e.subdomaincom)),
            s = e.pathname.substring(1).split("/"),
            t = "detect-locals" === s[0] ? 1 : 0;
          return -1 !== o.indexOf(s[t]) ? s[t] : null
        })(e), i = (e => {
          const o = e.search.substring(1).split("&").find((e => e.startsWith("lang")));
          return o?.split("=")[1]
        })(e), l = a.Vm;
        let r = l;
        const d = `rockstarweb_lang.${o.cookieIdentifier}`,
          c = (0, n.h)(d);
        r = "www" === o.currentSite?.site ? a.Ay.find((e => e.subdomaincom === i)) || a.Ay.find((e => e.subdomaincom === s)) || l : a.Ay.find((e => e.iso === c)) || l;
        const [u, b] = (0, n.A)(d, r.iso);
        return [r, b]
      }
    },
    4677: (e, o, s) => {
      "use strict";
      s.d(o, {
        A: () => i,
        h: () => a
      });
      const t = (e, o) => {
          e && o ? document.cookie = `${e}=${o}; domain=${n()}; path=/;` : console.log(`Couldn't set cookie (${e}) to value (${o})`)
        },
        n = () => {
          const e = window.location.hostname.split(".");
          return e.slice(e.length - 2).join(".")
        },
        a = e => {
          const o = document.cookie.split("; "),
            s = `${e}=`,
            t = o.find((e => e.startsWith(s))),
            n = t?.substring(s.length, t.length);
          return n
        },
        i = function(e, o) {
          let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const n = a(e);
          return n && !s || t(e, o), [n, (i = e, e => {
            t(i, e)
          })];
          var i
        }
    },
    9186: (e, o, s) => {
      "use strict";
      s.d(o, {
        Ay: () => i,
        FN: () => a,
        Vm: () => n
      });
      const t = [{
          label: "Deutsch",
          subdomain: "de",
          subdomaincom: "de",
          support: "de",
          iso: "de-DE"
        }, {
          label: "English",
          subdomain: "en-US",
          subdomaincom: "en",
          support: "us",
          iso: "en-US"
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
        n = t[1],
        a = ["de_de", "fr_fr", "it_it", "ja_jp", "ru_ru", "es_es", "es_mx", "pt_br", "ko_kr", "zh_tw", "pl_pl", "zh_hans"],
        i = t
    },
    2755: (e, o, s) => {
      "use strict";

      function t(e) {
        let [o, s] = e.split(/[-_]/), t = s?.toLowerCase();
        return "cn" === t && (t = "hans"), o && s || (o = "en", t = "us"), [o, t]
      }
      s.d(o, {
        A: () => t
      })
    }
  }
]);