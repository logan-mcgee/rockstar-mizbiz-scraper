! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      o = (new Error).stack;
    o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "f13b54a8-a69e-4091-a728-e48aa194fedc", e._sentryDebugIdIdentifier = "sentry-dbid-f13b54a8-a69e-4091-a728-e48aa194fedc")
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
  [6524], {
    24143: (e, o, s) => {
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
      var t = s(87047),
        n = s(74952),
        a = s(30452),
        i = s(708),
        l = s(80120),
        r = s(93480),
        d = s(70175),
        c = s(64677),
        u = s(29186),
        b = s(95136),
        m = s(31272),
        p = {};
      for (const e in m)["default", "FormattedMessage", "IntlProvider", "POSIXLocales", "createDevLocaleHook", "createIntl", "defineMessages", "englishLocale", "getCookieValueByName", "getLocale", "localeCookieHandler", "locales", "splitLocale", "useIntl", "withIntl"].indexOf(e) < 0 && (p[e] = () => m[e]);
      s.d(o, p)
    },
    80120: (e, o, s) => {
      "use strict";
      s.d(o, {
        Kq: () => r,
        QY: () => d
      });
      var t = s(71403),
        n = s(43071),
        a = s(70175),
        i = s(95136),
        l = s(46632);
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
    31272: () => {},
    93480: (e, o, s) => {
      "use strict";
      s.d(o, {
        A: () => a
      });
      var t = s(70175),
        n = s(95136);
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
    70175: (e, o, s) => {
      "use strict";
      s.d(o, {
        A: () => i
      });
      var t = s(13963),
        n = s(64677),
        a = s(29186);
      const i = () => {
        const {
          location: e
        } = window, o = (0, t.A)(), s = (e => {
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
        r = o.currentSite?.site === t.C.www ? a.Ay.find((e => e.subdomaincom === i)) || a.Ay.find((e => e.subdomaincom === s)) || l : a.Ay.find((e => e.iso === c)) || l;
        const [u, b] = (0, n.A)(d, r.iso);
        return [r, b]
      }
    },
    64677: (e, o, s) => {
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
    29186: (e, o, s) => {
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
    95136: (e, o, s) => {
      "use strict";

      function t(e) {
        let [o, s] = e.split(/[-_]/), t = s?.toLowerCase();
        return "cn" === t && (t = "hans"), o && s || (o = "en", t = "us"), [o, t]
      }
      s.d(o, {
        A: () => t
      })
    },
    13963: (e, o, s) => {
      "use strict";
      s.d(o, {
        A: () => a,
        C: () => t
      });
      const t = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store"
        },
        n = [{
          id: "prod",
          sites: {
            www: "www",
            socialClub: "socialclub",
            support: "support",
            store: "store"
          },
          cookieIdentifier: "prod"
        }],
        a = () => {
          let e;
          const {
            location: o
          } = window, s = o.hostname.substring(0, o.hostname.indexOf(".rockstargames.com")), t = n.findIndex((o => Object.entries(o.sites).findIndex((o => {
            let [t, n] = o;
            return n === s && (e = {
              site: t,
              subDomain: n
            }, !0)
          })) >= 0)), a = n[t >= 0 ? t : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...a,
            currentSite: e
          }
        }
    }
  }
]);