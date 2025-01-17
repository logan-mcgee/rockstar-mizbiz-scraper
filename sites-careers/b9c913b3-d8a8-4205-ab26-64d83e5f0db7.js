! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      s = (new Error).stack;
    s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "b9c913b3-d8a8-4205-ab26-64d83e5f0db7", e._sentryDebugIdIdentifier = "sentry-dbid-b9c913b3-d8a8-4205-ab26-64d83e5f0db7")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-careers",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_careers = self.webpackChunk_rockstargames_sites_careers || []).push([
  [524], {
    4143: (e, s, o) => {
      "use strict";
      o.r(s), o.d(s, {
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
      var t = o(7047),
        n = o(4952),
        a = o(452),
        i = o(708),
        l = o(120),
        r = o(3480),
        d = o(1134),
        c = o(4677),
        u = o(9186),
        b = o(5136),
        m = o(1272),
        p = {};
      for (const e in m)["default", "FormattedMessage", "IntlProvider", "POSIXLocales", "createDevLocaleHook", "createIntl", "defineMessages", "englishLocale", "getCookieValueByName", "getLocale", "localeCookieHandler", "locales", "splitLocale", "useIntl", "withIntl"].indexOf(e) < 0 && (p[e] = () => m[e]);
      o.d(s, p)
    },
    120: (e, s, o) => {
      "use strict";
      o.d(s, {
        Kq: () => r,
        QY: () => d
      });
      var t = o(1403),
        n = o(3071),
        a = o(1134),
        i = o(5136),
        l = o(6632);
      const r = e => {
        let {
          locales: s,
          lang: o,
          children: a
        } = e;
        const [r, d] = (0, t.useMemo)((() => (0, i.A)(o)), [o]), c = (0, t.useMemo)((() => function(e, s) {
          return e?.[s] ?? {}
        }(s, d)), [o, s]);
        return (0, l.jsx)(n.A, {
          messages: c,
          locale: r,
          defaultLocale: "en",
          children: a
        })
      };

      function d(e, s) {
        return o => {
          const [{
            iso: t
          }] = (0, a.A)();
          return (0, l.jsx)(r, {
            locales: s,
            lang: t,
            children: (0, l.jsx)(e, {
              ...o
            })
          })
        }
      }
    },
    1272: () => {},
    3480: (e, s, o) => {
      "use strict";
      o.d(s, {
        A: () => a
      });
      var t = o(1134),
        n = o(5136);
      const a = e => {
        if (!e.us || 0 === Object.keys(e?.us).length) throw new Error("createDevLocaleHook requires at least a 'us' key with definitions");
        return () => {
          const [{
            iso: s
          }] = (0, t.A)(), [o, a] = (0, n.A)(s);
          return e?.[a] ?? e.us
        }
      }
    },
    1134: (e, s, o) => {
      "use strict";
      o.d(s, {
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
      var n = o(4677),
        a = o(9186);
      const i = () => {
        const {
          location: e
        } = window, s = (() => {
          let e;
          const {
            location: s
          } = window, o = s.hostname.substring(0, s.hostname.indexOf(".rockstargames.com")), n = t.findIndex((s => Object.entries(s.sites).findIndex((s => {
            let [t, n] = s;
            return n === o && (e = {
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
        })(), o = (e => {
          const s = a.Ay.map((e => e.subdomaincom)),
            o = e.pathname.substring(1).split("/"),
            t = "detect-locals" === o[0] ? 1 : 0;
          return -1 !== s.indexOf(o[t]) ? o[t] : null
        })(e), i = (e => {
          const s = e.search.substring(1).split("&").find((e => e.startsWith("lang")));
          return s?.split("=")[1]
        })(e), l = a.Vm;
        let r = l;
        const d = `rockstarweb_lang.${s.cookieIdentifier}`,
          c = (0, n.h)(d);
        r = "www" === s.currentSite?.site ? a.Ay.find((e => e.subdomaincom === i)) || a.Ay.find((e => e.subdomaincom === o)) || l : a.Ay.find((e => e.iso === c)) || l;
        const [u, b] = (0, n.A)(d, r.iso);
        return [r, b]
      }
    },
    4677: (e, s, o) => {
      "use strict";
      o.d(s, {
        A: () => i,
        h: () => a
      });
      const t = (e, s) => {
          e && s ? document.cookie = `${e}=${s}; domain=${n()}; path=/;` : console.log(`Couldn't set cookie (${e}) to value (${s})`)
        },
        n = () => {
          const e = window.location.hostname.split(".");
          return e.slice(e.length - 2).join(".")
        },
        a = e => {
          const s = document.cookie.split("; "),
            o = `${e}=`,
            t = s.find((e => e.startsWith(o))),
            n = t?.substring(o.length, t.length);
          return n
        },
        i = function(e, s) {
          let o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const n = a(e);
          return n && !o || t(e, s), [n, (i = e, e => {
            t(i, e)
          })];
          var i
        }
    },
    9186: (e, s, o) => {
      "use strict";
      o.d(s, {
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
    5136: (e, s, o) => {
      "use strict";

      function t(e) {
        let [s, o] = e.split(/[-_]/), t = o?.toLowerCase();
        return "cn" === t && (t = "hans"), s && o || (s = "en", t = "us"), [s, t]
      }
      o.d(s, {
        A: () => t
      })
    }
  }
]);