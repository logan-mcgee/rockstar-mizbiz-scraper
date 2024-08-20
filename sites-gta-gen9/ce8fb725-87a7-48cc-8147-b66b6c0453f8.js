! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      s = (new Error).stack;
    s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "ce8fb725-87a7-48cc-8147-b66b6c0453f8", e._sentryDebugIdIdentifier = "sentry-dbid-ce8fb725-87a7-48cc-8147-b66b6c0453f8")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta-gen9",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [6524], {
    24143: (e, s, o) => {
      "use strict";
      o.r(s), o.d(s, {
        FormattedMessage: () => t.A,
        IntlProvider: () => l.Kq,
        POSIXLocales: () => c.FN,
        createDevLocaleHook: () => r.A,
        createIntl: () => n.E,
        defineMessages: () => a.YK,
        englishLocale: () => c.Vm,
        getCookieValueByName: () => d.h,
        getLocale: () => u.A,
        localeCookieHandler: () => d.A,
        locales: () => c.Ay,
        splitLocale: () => b.A,
        useIntl: () => i.A,
        withIntl: () => l.QY
      });
      var t = o(87047),
        n = o(74952),
        a = o(30452),
        i = o(708),
        l = o(80120),
        r = o(93480),
        u = o(70175),
        d = o(64677),
        c = o(29186),
        b = o(95136),
        m = o(31272),
        p = {};
      for (const e in m)["default", "FormattedMessage", "IntlProvider", "POSIXLocales", "createDevLocaleHook", "createIntl", "defineMessages", "englishLocale", "getCookieValueByName", "getLocale", "localeCookieHandler", "locales", "splitLocale", "useIntl", "withIntl"].indexOf(e) < 0 && (p[e] = () => m[e]);
      o.d(s, p)
    },
    80120: (e, s, o) => {
      "use strict";
      o.d(s, {
        Kq: () => r,
        QY: () => u
      });
      var t = o(71403),
        n = o(43071),
        a = o(70175),
        i = o(95136),
        l = o(46632);
      const r = e => {
        let {
          locales: s,
          lang: o,
          children: a
        } = e;
        const r = (0, t.useMemo)((() => (0, i.A)(o)), [o]),
          u = (0, t.useMemo)((() => function(e, s) {
            return e?.[s] ?? {}
          }(s, r[1])), [o, s]);
        return (0, l.jsx)(n.A, {
          messages: u,
          locale: r[0],
          defaultLocale: "en",
          children: a
        }, r[0])
      };

      function u(e, s) {
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
    31272: () => {},
    93480: (e, s, o) => {
      "use strict";
      o.d(s, {
        A: () => i
      });
      var t = o(70396),
        n = o(71403),
        a = o(95136);
      const i = e => {
        if (!e.us || 0 === Object.keys(e?.us).length) throw new Error("createDevLocaleHook requires at least a 'us' key with definitions");
        return () => {
          const s = (0, t.useLocale)(),
            o = (0, n.useMemo)((() => (0, a.A)(s)), [s]);
          return e?.[o[1]] ?? e.us
        }
      }
    },
    70175: (e, s, o) => {
      "use strict";
      o.d(s, {
        A: () => i
      });
      var t = o(13963),
        n = o(64677),
        a = o(29186);
      const i = () => {
        const {
          location: e
        } = window, s = (0, t.A)(), o = (e => {
          const s = a.Ay.map((e => e.subdomaincom)),
            o = e.pathname.substring(1).split("/"),
            t = "detect-locals" === o[0] ? 1 : 0;
          return -1 !== s.indexOf(o[t]) ? o[t] : null
        })(e), i = (e => {
          const s = e.search.substring(1).split("&").find((e => e.startsWith("lang")));
          return s?.split("=")[1]
        })(e), l = a.Vm;
        let r = l;
        const u = `rockstarweb_lang.${s.cookieIdentifier}`,
          d = (0, n.h)(u);
        r = s.currentSite?.site === t.C.www ? a.Ay.find((e => e.subdomaincom === i)) || a.Ay.find((e => e.subdomaincom === o)) || l : a.Ay.find((e => e.iso === d)) || l;
        const [c, b] = (0, n.A)(u, r.iso);
        return [r, b]
      }
    },
    64677: (e, s, o) => {
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
    29186: (e, s, o) => {
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
    95136: (e, s, o) => {
      "use strict";

      function t(e) {
        let [s, o] = e.split(/[-_]/);
        return o = o?.toLowerCase(), "cn" === o && (o = "hans"), s && o || (s = "en", o = "us"), [s, o]
      }
      o.d(s, {
        A: () => t
      })
    },
    13963: (e, s, o) => {
      "use strict";
      o.d(s, {
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
            location: s
          } = window, o = s.hostname.substring(0, s.hostname.indexOf(".rockstargames.com")), t = n.findIndex((s => Object.entries(s.sites).findIndex((s => {
            let [t, n] = s;
            return n === o && (e = {
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