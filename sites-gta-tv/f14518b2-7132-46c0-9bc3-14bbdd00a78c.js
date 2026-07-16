try {
  let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    s = (new o.Error).stack;
  s && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[s] = "f14518b2-7132-46c0-9bc3-14bbdd00a78c", o._sentryDebugIdIdentifier = "sentry-dbid-f14518b2-7132-46c0-9bc3-14bbdd00a78c")
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
  [320], {
    4320(o, s, e) {
      e.d(s, {
        YK: () => t.YK,
        JK: () => m,
        tz: () => n.A,
        QY: () => f
      });
      var t = e(4376),
        n = e(8925),
        i = e(9793),
        a = e(3082),
        r = e(212),
        l = e(4834);
      const d = (o, s) => {
          if (!o || !s) return void console.log(`Couldn't set cookie (${o}) to value (${s})`);
          const e = window.location.hostname.split("."),
            t = e.slice(e.length - 2).join(".");
          document.cookie = `${o}=${s}; domain=${t}; path=/;`
        },
        u = o => {
          const s = document.cookie.split("; "),
            e = `${o}=`,
            t = s.find(o => o.startsWith(e)),
            n = t?.substring(e.length, t.length);
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
        m = () => {
          const {
            location: o
          } = window, s = (0, l.A)(), e = (o => {
            const s = b.map(o => o.subdomaincom),
              e = o.pathname.substring(1).split("/"),
              t = "detect-locals" === e[0] ? 1 : 0;
            return -1 !== s.indexOf(e[t]) ? e[t] : null
          })(o), t = (o => {
            const s = o.search.substring(1).split("&").find(o => o.startsWith("lang"));
            return s?.split("=")[1]
          })(o), n = p;
          let i;
          const a = `rockstarweb_lang.${s.cookieIdentifier}`,
            r = u(a);
          i = s.currentSite?.site === l.C.www ? b.find(o => o.subdomaincom === t) || b.find(o => o.subdomaincom === e) || n : b.find(o => o.iso === r) || n;
          const [, c] = ((o, s, e = !1) => {
            const t = u(o);
            return t && !e || d(o, s), [t, (n = o, o => {
              d(n, o)
            })];
            var n
          })(a, i.iso);
          return [i, c]
        };

      function f(o, s, e, t) {
        return n => {
          const l = (0, a.useMemo)(() => {
            if (s) return function(o, s) {
              return function(o, s) {
                const e = s ?? m()[0].iso ?? "en-US",
                  t = function(o, s) {
                    return o[s] ?? {}
                  }(o, e);
                var n;
                return {
                  rsLocale: e,
                  locale: e,
                  messages: (n = t, {
                    ...n
                  })
                }
              }(o, s)
            }(s, e)
          }, [e]);
          return (0, i.jsx)(r.A, {
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
    4834(o, s, e) {
      var t = e(8861),
        n = e(573);
      const i = [{
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
      }];
      e.d(s, ["A", 0, () => {
        let o;
        const {
          location: s
        } = window, e = s.hostname.substring(0, s.hostname.indexOf(".rockstargames.com")), a = i.findIndex(s => Object.entries(s.sites).findIndex(([s, t]) => t === e && (o = {
          site: s,
          subDomain: t
        }, !0)) >= 0), r = i[a >= 0 ? a : 0], l = i.find(o => o.id === r.fallbackEnvironment);
        return o || (o = {
          site: "www",
          subDomain: "local"
        }), (0, n.A)((0, t.A)({}, l, {
          currentSite: o
        }, r), "fallbackEnvironment")
      }, "C", 0, {
        www: "www",
        socialClub: "socialClub",
        support: "support",
        store: "store",
        circoloco: "circoloco",
        supportNew: "support"
      }])
    }
  }
]);