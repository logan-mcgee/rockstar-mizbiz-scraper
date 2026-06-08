try {
  let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    e = (new o.Error).stack;
  e && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[e] = "aacb4fb1-7f87-4e3e-9f52-91f3eb7266c6", o._sentryDebugIdIdentifier = "sentry-dbid-aacb4fb1-7f87-4e3e-9f52-91f3eb7266c6")
} catch (o) {} {
  let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  o._sentryModuleMetadata = o._sentryModuleMetadata || {}, o._sentryModuleMetadata[(new o.Error).stack] = Object.assign({}, o._sentryModuleMetadata[(new o.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-gta-tv",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_tv = self.webpackChunk_rockstargames_sites_gta_tv || []).push([
  [174], {
    5174(o, e, s) {
      s.d(e, {
        YK: () => t.YK,
        JK: () => f,
        tz: () => n.A,
        QY: () => m
      });
      var t = s(7338),
        n = s(4775),
        i = s(9793),
        r = s(3082),
        a = s(6285),
        l = s(7279);
      const d = (o, e) => {
          if (!o || !e) return void console.log(`Couldn't set cookie (${o}) to value (${e})`);
          const s = window.location.hostname.split("."),
            t = s.slice(s.length - 2).join(".");
          document.cookie = `${o}=${e}; domain=${t}; path=/;`
        },
        u = o => {
          const e = document.cookie.split("; "),
            s = `${o}=`,
            t = e.find(o => o.startsWith(s)),
            n = t?.substring(s.length, t.length);
          return n
        },
        c = [{
          label: "English",
          subdomain: "en-US",
          subdomaincom: "en",
          support: "us",
          iso: "en-US",
          store: "en",
          posix: "en_us"
        }, {
          label: "Deutsch",
          subdomain: "de",
          subdomaincom: "de",
          support: "de",
          iso: "de-DE",
          store: "de",
          posix: "de_de"
        }, {
          label: "Español",
          subdomain: "es",
          subdomaincom: "es",
          support: "es",
          iso: "es-ES",
          store: "es",
          posix: "es_es"
        }, {
          label: "Español Latinoamérica",
          subdomain: "es-mx",
          subdomaincom: "mx",
          support: "es-mx",
          iso: "es-MX",
          store: "es-419",
          posix: "es_mx"
        }, {
          label: "Français",
          subdomain: "fr",
          subdomaincom: "fr",
          support: "fr",
          iso: "fr-FR",
          store: "fr",
          posix: "fr_fr"
        }, {
          label: "Italiano",
          subdomain: "it",
          subdomaincom: "it",
          support: "it",
          iso: "it-IT",
          store: "it",
          posix: "it_it"
        }, {
          label: "日本語",
          subdomain: "ja",
          subdomaincom: "jp",
          support: "jp",
          iso: "ja-JP",
          store: "ja",
          posix: "ja_jp"
        }, {
          label: "한국어",
          subdomain: "ko",
          subdomaincom: "kr",
          support: "kr",
          iso: "ko-KR",
          store: "ko",
          posix: "ko_kr"
        }, {
          label: "Polski",
          subdomain: "pl",
          subdomaincom: "pl",
          support: "pl",
          iso: "pl-PL",
          store: "pl",
          posix: "pl_pl"
        }, {
          label: "Português do Brasil",
          subdomain: "pt",
          subdomaincom: "br",
          support: "br",
          iso: "pt-BR",
          store: "pt-BR",
          posix: "pt_br"
        }, {
          label: "Русский",
          subdomain: "ru",
          subdomaincom: "ru",
          support: "ru",
          iso: "ru-RU",
          store: "ru",
          posix: "ru_ru"
        }, {
          label: "繁體中文",
          subdomain: "zh",
          subdomaincom: "tw",
          support: "tw",
          iso: "zh-TW",
          store: "zh-Hant",
          posix: "zh_tw"
        }, {
          label: "简体中文",
          subdomain: "zh-cn",
          subdomaincom: "zh",
          support: "zh",
          iso: "zh-CN",
          store: "zh-CN",
          posix: "zh_hans"
        }],
        p = c[0],
        b = c,
        f = () => {
          const {
            location: o
          } = window, e = (0, l.A)(), s = (o => {
            const e = b.map(o => o.subdomaincom),
              s = o.pathname.substring(1).split("/"),
              t = "detect-locals" === s[0] ? 1 : 0;
            return -1 !== e.indexOf(s[t]) ? s[t] : null
          })(o), t = (o => {
            const e = o.search.substring(1).split("&").find(o => o.startsWith("lang"));
            return e?.split("=")[1]
          })(o), n = p;
          let i;
          const r = `rockstarweb_lang.${e.cookieIdentifier}`,
            a = u(r);
          i = e.currentSite?.site === l.C.www ? b.find(o => o.subdomaincom === t) || b.find(o => o.subdomaincom === s) || n : b.find(o => o.iso === a) || n;
          const [, c] = ((o, e, s = !1) => {
            const t = u(o);
            return t && !s || d(o, e), [t, (n = o, o => {
              d(n, o)
            })];
            var n
          })(r, i.iso);
          return [i, c]
        };

      function m(o, e, s, t) {
        return n => {
          const l = (0, r.useMemo)(() => {
            if (e) return function(o, e) {
              return function(o, e) {
                const s = e ?? f()[0].iso ?? "en-US",
                  t = function(o, e) {
                    return o[e] ?? {}
                  }(o, s);
                var n;
                return {
                  rsLocale: s,
                  locale: s,
                  messages: (n = t, {
                    ...n
                  })
                }
              }(o, e)
            }(e, s)
          }, [s]);
          return (0, i.jsx)(a.A, {
            locale: l?.locale || "en-US",
            messages: {
              ...l?.messages
            },
            onError: t,
            children: l && (0, i.jsx)(o, {
              ...n
            })
          }, "intl-provider")
        }
      }
    },
    7279(o, e, s) {
      s.d(e, {
        A: () => d,
        C: () => a
      });
      var t = s(4028),
        n = s.n(t),
        i = s(5963),
        r = s.n(i);
      const a = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store",
          circoloco: "circoloco",
          supportNew: "support"
        },
        l = [{
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
          let o;
          const {
            location: e
          } = window, s = e.hostname.substring(0, e.hostname.indexOf(".rockstargames.com")), t = l.findIndex(e => Object.entries(e.sites).findIndex(([e, t]) => t === s && (o = {
            site: e,
            subDomain: t
          }, !0)) >= 0), i = l[t >= 0 ? t : 0], a = l.find(o => o.id === i.fallbackEnvironment);
          return o || (o = {
            site: "www",
            subDomain: "local"
          }), r()(n()({}, a, {
            currentSite: o
          }, i), "fallbackEnvironment")
        }
    }
  }
]);