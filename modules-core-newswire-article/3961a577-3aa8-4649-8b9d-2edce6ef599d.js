! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      s = (new Error).stack;
    s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "3961a577-3aa8-4649-8b9d-2edce6ef599d", e._sentryDebugIdIdentifier = "sentry-dbid-3961a577-3aa8-4649-8b9d-2edce6ef599d")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-newswire-article",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [7605], {
    89986: (e, s, o) => {
      "use strict";
      o.r(s), o.d(s, {
        FormattedMessage: () => t.A,
        IntlProvider: () => r.Kq,
        POSIXLocales: () => u.FN,
        createDevLocaleHook: () => l.A,
        createIntl: () => a.E,
        defineMessages: () => n.YK,
        englishLocale: () => u.Vm,
        getLocale: () => d.A,
        locales: () => u.Ay,
        splitLocale: () => c.A,
        useIntl: () => i.A,
        withIntl: () => r.QY
      });
      var t = o(43160),
        a = o(78924),
        n = o(95129),
        i = o(53075),
        r = o(90823),
        l = o(14685),
        d = o(45478),
        u = o(68203),
        c = o(91631),
        b = o(49995),
        p = {};
      for (const e in b)["default", "FormattedMessage", "IntlProvider", "POSIXLocales", "createDevLocaleHook", "createIntl", "defineMessages", "englishLocale", "getLocale", "locales", "splitLocale", "useIntl", "withIntl"].indexOf(e) < 0 && (p[e] = () => b[e]);
      o.d(s, p)
    },
    90823: (e, s, o) => {
      "use strict";
      o.d(s, {
        Kq: () => l,
        QY: () => d
      });
      var t = o(62229),
        a = o(27042),
        n = o(45478),
        i = o(91631),
        r = o(98096);
      const l = e => {
        let {
          locales: s,
          lang: o,
          children: n
        } = e;
        const [l, d] = (0, t.useMemo)((() => (0, i.A)(o)), [o]), u = (0, t.useMemo)((() => function(e, s) {
          return e?.[s] ?? {}
        }(s, d)), [o, s]);
        return (0, r.jsx)(a.A, {
          messages: u,
          locale: l,
          defaultLocale: "en",
          children: n
        })
      };

      function d(e, s) {
        return o => {
          const [{
            iso: t
          }] = (0, n.A)();
          return (0, r.jsx)(l, {
            locales: s,
            lang: t,
            children: (0, r.jsx)(e, {
              ...o
            })
          })
        }
      }
    },
    49995: () => {},
    14685: (e, s, o) => {
      "use strict";
      o.d(s, {
        A: () => n
      });
      var t = o(45478),
        a = o(91631);
      const n = e => {
        if (!e.us || 0 === Object.keys(e?.us).length) throw new Error("createDevLocaleHook requires at least a 'us' key with definitions");
        return () => {
          const [{
            iso: s
          }] = (0, t.A)(), [o, n] = (0, a.A)(s);
          return e?.[n] ?? e.us
        }
      }
    },
    45478: (e, s, o) => {
      "use strict";
      o.d(s, {
        A: () => i
      });
      var t = o(15138),
        a = o(21207),
        n = o(68203);
      const i = () => {
        const {
          location: e
        } = window, s = (0, t.A)(), o = (e => {
          const s = n.Ay.map((e => e.subdomaincom)),
            o = e.pathname.substring(1).split("/"),
            t = "detect-locals" === o[0] ? 1 : 0;
          return -1 !== s.indexOf(o[t]) ? o[t] : null
        })(e), i = (e => {
          const s = e.search.substring(1).split("&").find((e => e.startsWith("lang")));
          return s?.split("=")[1]
        })(e), r = n.Vm;
        let l = r;
        const d = `rockstarweb_lang.${s.cookieIdentifier}`;
        if (s.currentSite?.site === t.C.www) l = n.Ay.find((e => e.subdomaincom === i)) || n.Ay.find((e => e.subdomaincom === o)) || r;
        else {
          const e = (0, a.Ap)(d);
          l = n.Ay.find((s => s.iso === e)) || r
        }
        return [l, (e => s => {
          (0, a.My)(e, s)
        })(d)]
      }
    },
    68203: (e, s, o) => {
      "use strict";
      o.d(s, {
        Ay: () => i,
        FN: () => n,
        Vm: () => a
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
        a = t[1],
        n = ["de_de", "fr_fr", "it_it", "ja_jp", "ru_ru", "es_es", "es_mx", "pt_br", "ko_kr", "zh_tw", "pl_pl", "zh_hans"],
        i = t
    },
    91631: (e, s, o) => {
      "use strict";

      function t(e) {
        const s = e.split(/[-_]/)[1];
        let o = e.split(/[-_]/)[0],
          t = s?.toLowerCase();
        return "cn" === t && (t = "hans"), o && s || (o = "en", t = "us"), [o, t]
      }
      o.d(s, {
        A: () => t
      })
    },
    15138: (e, s, o) => {
      "use strict";
      o.d(s, {
        A: () => n,
        C: () => t
      });
      const t = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store"
        },
        a = [{
          id: "prod",
          sites: {
            www: "www",
            socialClub: "socialclub",
            support: "support",
            store: "store"
          },
          cookieIdentifier: "prod"
        }],
        n = () => {
          let e;
          const {
            location: s
          } = window, o = s.hostname.substring(0, s.hostname.indexOf(".rockstargames.com")), t = a.findIndex((s => Object.entries(s.sites).findIndex((s => {
            let [t, a] = s;
            return a === o && (e = {
              site: t,
              subDomain: a
            }, !0)
          })) >= 0)), n = a[t >= 0 ? t : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...n,
            currentSite: e
          }
        }
    }
  }
]);