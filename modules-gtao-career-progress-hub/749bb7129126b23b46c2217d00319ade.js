! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      o = (new Error).stack;
    o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "8f339d30-a3b1-47fd-86d5-579c685e9342", e._sentryDebugIdIdentifier = "sentry-dbid-8f339d30-a3b1-47fd-86d5-579c685e9342")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "63eddca94fa9726ada78d0c14030f13fd7020af7",
  packageName: "@rockstargames/modules-gtao-career-progress-hub",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "63eddca94fa9726ada78d0c14030f13fd7020af7"
}, (self.webpackChunk_rockstargames_modules_gtao_career_progress_hub = self.webpackChunk_rockstargames_modules_gtao_career_progress_hub || []).push([
  [280], {
    4660: (e, o, s) => {
      "use strict";
      s.r(o), s.d(o, {
        FormattedMessage: () => t.c,
        IntlProvider: () => l.C_,
        createDevLocaleHook: () => r.c,
        createIntl: () => n.y,
        defineMessages: () => a.Os,
        englishLocale: () => u.u,
        getLocale: () => d.c,
        localeCookieHandler: () => c.c,
        locales: () => u.c,
        splitLocale: () => b.c,
        useIntl: () => i.c,
        withIntl: () => l.eO
      });
      var t = s(8640),
        n = s(9428),
        a = s(6656),
        i = s(5844),
        l = s(3583),
        r = s(1292),
        d = s(4560),
        c = s(8612),
        u = s(3916),
        b = s(9423),
        m = s(4932),
        p = {};
      for (const e in m)["default", "FormattedMessage", "IntlProvider", "createDevLocaleHook", "createIntl", "defineMessages", "englishLocale", "getLocale", "localeCookieHandler", "locales", "splitLocale", "useIntl", "withIntl"].indexOf(e) < 0 && (p[e] = () => m[e]);
      s.d(o, p)
    },
    3583: (e, o, s) => {
      "use strict";
      s.d(o, {
        C_: () => r,
        eO: () => d
      });
      var t = s(8200),
        n = s(3483),
        a = s(4560),
        i = s(9423),
        l = s(3480);
      const r = e => {
        let {
          locales: o,
          lang: s,
          children: a
        } = e;
        const r = (0, t.useMemo)((() => (0, i.c)(s)), [s]),
          d = (0, t.useMemo)((() => function(e, o) {
            return e?.[o] ?? {}
          }(o, r[1])), [s, o]);
        return (0, l.jsx)(n.c, {
          messages: d,
          locale: r[0],
          defaultLocale: "en",
          children: a
        }, r[0])
      };

      function d(e, o) {
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
    4932: () => {},
    1292: (e, o, s) => {
      "use strict";
      s.d(o, {
        c: () => i
      });
      var t = s(3061),
        n = s(8200),
        a = s(9423);
      const i = e => {
        if (!e.us || 0 === Object.keys(e?.us).length) throw new Error("createDevLocaleHook requires at least a 'us' key with definitions");
        return () => {
          const o = (0, t.useLocale)(),
            s = (0, n.useMemo)((() => (0, a.c)(o)), [o]);
          return e?.[s[1]] ?? e.us
        }
      }
    },
    4560: (e, o, s) => {
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
      var n = s(8612),
        a = s(3916);
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
          })) >= 0));
          return {
            ...t[n >= 0 ? n : 0],
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
        })(e), l = a.u, [r, d] = (0, n.c)(`rockstarweb_lang.${o.cookieIdentifier}`, s ?? void 0);
        let c = l;
        return c = "www" === o.currentSite?.site ? a.c.find((e => e.subdomaincom === i)) || a.c.find((e => e.subdomaincom === s)) || l : a.c.find((e => e.iso === r)) || l, [c, d]
      }
    },
    8612: (e, o, s) => {
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
    3916: (e, o, s) => {
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
    9423: (e, o, s) => {
      "use strict";

      function t(e) {
        let [o, s] = e.split(/[-_]/);
        return s = s.toLowerCase(), "cn" === s && (s = "hans"), [o, s]
      }
      s.d(o, {
        c: () => t
      })
    }
  }
]);
//# sourceMappingURL=749bb7129126b23b46c2217d00319ade.js.map