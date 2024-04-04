! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      o = (new Error).stack;
    o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "b62f3291-6501-4f4a-b005-869fc3c67702", e._sentryDebugIdIdentifier = "sentry-dbid-b62f3291-6501-4f4a-b005-869fc3c67702")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/intl",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_intl = self.webpackChunk_rockstargames_intl || []).push([
  [304], {
    304: (e, o, s) => {
      "use strict";
      s.r(o), s.d(o, {
        FormattedMessage: () => t.c,
        IntlProvider: () => l.C_,
        createDevLocaleHook: () => r.c,
        createIntl: () => n.y,
        defineMessages: () => a.Os,
        englishLocale: () => u.u,
        getLocale: () => c.c,
        localeCookieHandler: () => d.c,
        locales: () => u.c,
        splitLocale: () => b.c,
        useIntl: () => i.c,
        withIntl: () => l.eO
      });
      var t = s(832),
        n = s(188),
        a = s(52),
        i = s(688),
        l = s(676),
        r = s(748),
        c = s(982),
        d = s(320),
        u = s(285),
        b = s(68),
        f = s(388),
        m = {};
      for (const e in f)["default", "FormattedMessage", "IntlProvider", "createDevLocaleHook", "createIntl", "defineMessages", "englishLocale", "getLocale", "localeCookieHandler", "locales", "splitLocale", "useIntl", "withIntl"].indexOf(e) < 0 && (m[e] = () => f[e]);
      s.d(o, m)
    },
    676: (e, o, s) => {
      "use strict";
      s.d(o, {
        C_: () => r,
        eO: () => c
      });
      var t = s(100),
        n = s(852),
        a = s(982),
        i = s(68),
        l = s(240);
      const r = e => {
        let {
          locales: o,
          lang: s,
          children: a
        } = e;
        const r = (0, t.useMemo)((() => (0, i.c)(s)), [s]),
          c = (0, t.useMemo)((() => function(e, o) {
            return e?.[o] ?? {}
          }(o, r[1])), [s, o]);
        return (0, l.jsx)(n.c, {
          messages: c,
          locale: r[0],
          defaultLocale: "en",
          children: a
        }, r[0])
      };

      function c(e, o) {
        return s => {
          const [{
            iso: t
          }] = (0, a.c)();
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
    388: () => {},
    748: (e, o, s) => {
      "use strict";
      s.d(o, {
        c: () => i
      });
      var t = s(61),
        n = s(100),
        a = s(68);
      const i = e => {
        if (!e.us || 0 === Object.keys(e?.us).length) throw new Error("createDevLocaleHook requires at least a 'us' key with definitions");
        return () => {
          const o = (0, t.useLocale)(),
            s = (0, n.useMemo)((() => (0, a.c)(o)), [o]);
          return e?.[s[1]] ?? e.us
        }
      }
    },
    982: (e, o, s) => {
      "use strict";
      s.d(o, {
        c: () => i
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
      var n = s(320),
        a = s(285);
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
          const o = a.c.map((e => e.subdomaincom)),
            s = e.pathname.substring(1).split("/"),
            t = "detect-locals" === s[0] ? 1 : 0;
          return -1 !== o.indexOf(s[t]) ? s[t] : null
        })(e), i = (e => {
          const o = e.search.substring(1).split("&").find((e => e.startsWith("lang")));
          return o?.split("=")[1]
        })(e), l = a.u, [r, c] = (0, n.c)(`rockstarweb_lang.${o.cookieIdentifier}`, s ?? void 0);
        let d = l;
        return d = "www" === o.currentSite?.site ? a.c.find((e => e.subdomaincom === i)) || a.c.find((e => e.subdomaincom === s)) || l : a.c.find((e => e.iso === r)) || l, [d, c]
      }
    },
    320: (e, o, s) => {
      "use strict";
      s.d(o, {
        c: () => a
      });
      const t = (e, o) => {
          e && o ? document.cookie = `${e}=${o}; domain=${n()}; path=/;` : console.log(`Couldn't set cookie (${e}) to value (${o})`)
        },
        n = () => {
          const e = window.location.hostname.split(".");
          return e.slice(e.length - 2).join(".")
        },
        a = function(e, o) {
          let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const n = document.cookie.split("; "),
            a = `${e}=`,
            i = n.find((e => e.startsWith(a))),
            l = i?.substring(a.length, i.length);
          return l && !s || t(e, o), [l, (r = e, e => {
            t(r, e)
          })];
          var r
        }
    },
    285: (e, o, s) => {
      "use strict";
      s.d(o, {
        c: () => n,
        u: () => a
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
        n = t,
        a = t[1]
    },
    68: (e, o, s) => {
      "use strict";

      function t(e) {
        let [o, s] = e.split(/[-_]/);
        return s = s?.toLowerCase(), "cn" === s && (s = "hans"), o && s || (o = "en", s = "us"), [o, s]
      }
      s.d(o, {
        c: () => t
      })
    }
  }
]);