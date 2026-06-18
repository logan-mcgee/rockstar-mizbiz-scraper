try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    o = (new e.Error).stack;
  o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "64c050b9-e5fe-4004-af37-a3508a757949", e._sentryDebugIdIdentifier = "sentry-dbid-64c050b9-e5fe-4004-af37-a3508a757949")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-red-dead-online",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_red_dead_online = self.webpackChunk_rockstargames_sites_red_dead_online || []).push([
  [221, 602], {
    76602(e, o, s) {
      s.r(o), s.d(o, {
        FormattedMessage: () => i.A,
        POSIXLocales: () => w,
        ReactIntlProviderForMocking: () => r.A,
        createDevLocaleHook: () => $,
        createIntl: () => n.E,
        defineMessages: () => t.YK,
        englishLocale: () => f,
        getCookieValueByName: () => p,
        getLocale: () => g,
        linkWithLocale: () => y,
        localeCookieHandler: () => m,
        locales: () => h,
        onLanguageChange: () => I,
        splitLocale: () => k,
        useIntl: () => a.A,
        withIntl: () => _
      });
      var t = s(57338),
        n = s(73747),
        i = s(13124),
        a = s(74775),
        r = s(54422),
        l = s(39793),
        c = s(93082),
        d = s(47279);
      const u = (e, o) => {
          if (!e || !o) return void console.log(`Couldn't set cookie (${e}) to value (${o})`);
          const s = window.location.hostname.split("."),
            t = s.slice(s.length - 2).join(".");
          document.cookie = `${e}=${o}; domain=${t}; path=/;`
        },
        p = e => {
          const o = document.cookie.split("; "),
            s = `${e}=`,
            t = o.find(e => e.startsWith(s)),
            n = t?.substring(s.length, t.length);
          return n
        },
        m = (e, o, s = !1) => {
          const t = p(e);
          return t && !s || u(e, o), [t, (n = e, e => {
            u(n, e)
          })];
          var n
        },
        b = [{
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
        f = b[0],
        w = ["de_de", "fr_fr", "it_it", "ja_jp", "ru_ru", "es_es", "es_mx", "pt_br", "ko_kr", "zh_tw", "pl_pl", "zh_hans"],
        h = b,
        g = () => {
          const {
            location: e
          } = window, o = (0, d.A)(), s = (e => {
            const o = h.map(e => e.subdomaincom),
              s = e.pathname.substring(1).split("/"),
              t = "detect-locals" === s[0] ? 1 : 0;
            return -1 !== o.indexOf(s[t]) ? s[t] : null
          })(e), t = (e => {
            const o = e.search.substring(1).split("&").find(e => e.startsWith("lang"));
            return o?.split("=")[1]
          })(e), n = f;
          let i;
          const a = `rockstarweb_lang.${o.cookieIdentifier}`,
            r = p(a);
          i = o.currentSite?.site === d.C.www ? h.find(e => e.subdomaincom === t) || h.find(e => e.subdomaincom === s) || n : h.find(e => e.iso === r) || n;
          const [, l] = m(a, i.iso);
          return [i, l]
        };

      function _(e, o, s, t) {
        return n => {
          const i = (0, c.useMemo)(() => {
            if (o) return function(e, o) {
              return function(e, o) {
                const s = o ?? g()[0].iso ?? "en-US",
                  t = function(e, o) {
                    return e[o] ?? {}
                  }(e, s);
                var n;
                return {
                  rsLocale: s,
                  locale: s,
                  messages: (n = t, {
                    ...n
                  })
                }
              }(e, o)
            }(o, s)
          }, [s]);
          return (0, l.jsx)(r.A, {
            locale: i?.locale || "en-US",
            messages: {
              ...i?.messages
            },
            onError: t,
            children: i && (0, l.jsx)(e, {
              ...n
            })
          }, "intl-provider")
        }
      }

      function k(e) {
        let [o, s] = e.split(/[-_]/), t = s?.toLowerCase();
        return "cn" === t && (t = "hans"), o && s || (o = "en", t = "us"), [o, t]
      }
      const $ = e => {
          if (!e.us || 0 === Object.keys(e?.us).length) throw new Error("createDevLocaleHook requires at least a 'us' key with definitions");
          return () => {
            const [{
              iso: o
            }] = g(), [s, t] = k(o);
            return e?.[t] ?? e.us
          }
        },
        x = {
          socialClub: {
            regex: /(\/\/)socialclub.rockstargames.com(.*?)$/,
            isSubdomain: !0,
            isLocaleInUrl: !1
          },
          store: {
            regex: /(\/\/)store.rockstargames.com(.*?)$/,
            isSubdomain: !0,
            isLocaleInUrl: !0,
            fieldName: "store"
          },
          supportNew: {
            regex: /(\/\/)support.rockstargames.com(.*?)$/,
            isSubdomain: !0,
            isLocaleInUrl: !1
          },
          circoloco: {
            regex: /(\/\/)(www\.)?circolocorecords.com(.*?)$/,
            isSubdomain: !1,
            isLocaleInUrl: !0,
            fieldName: "subdomaincom"
          },
          www: {
            regex: /(\/\/)(www\.)?rockstargames.com(.*?)$/,
            isSubdomain: !0,
            isLocaleInUrl: !0,
            fieldName: "subdomaincom",
            externalPaths: [/^\/VI($|\/)(.*?)/i]
          }
        },
        y = e => {
          const [o] = g(), {
            sites: s
          } = (0, d.A)();
          let t;
          try {
            t = new URL(e)
          } catch {
            t = null
          }
          if (t)
            for (const [n, {
                regex: i,
                isSubdomain: a,
                isLocaleInUrl: r,
                fieldName: l,
                externalPaths: c
              }] of Object.entries(x)) {
              if (!i.test(e.toLowerCase())) continue;
              const d = s[n];
              if (!d) continue;
              let u = "";
              "en" !== o.subdomaincom && r && (u = `/${o[l||"subdomaincom"]}`, "circoloco" === n && "/" === t.pathname && (u += "/"));
              const p = t.host.split(".");
              let m = "";
              return "www" !== n || c?.some(e => e.test(t.pathname)) ? ("www" !== n && (m += `https://${d}`, m += a ? `.${p.at(-2)}.${p.at(-1)}` : `.${p.at(-1)}`), {
                link: `${m}${u}${"/"===t.pathname?"":t.pathname}${t.search}${t.hash}`,
                isExternal: !0
              }) : {
                link: `${m}${"/"===t.pathname?"":t.pathname}${t.search}${t.hash}`,
                isExternal: !1
              }
            }
          return /^http(s):\/\//.test(e) ? {
            link: e,
            isExternal: !0
          } : {
            link: e?.startsWith("/") ? e : `/${e}`,
            isExternal: !1
          }
        },
        I = ({
          selectedLocale: e,
          track: o,
          parent: s = ""
        }) => {
          const t = (0, d.A)(),
            [, n] = g(),
            {
              subdomaincom: i,
              iso: a
            } = e,
            r = (e => {
              let o = location.pathname.replace(/^\/|\/$/g, "");
              const s = o.split("/");
              return h.map(e => e.subdomaincom).includes(s[0]) && (o = s.slice(1).join("/")), t.currentSite?.site === d.C.www ? "en" === e ? `${window.location.origin}/${o}${location.search}` : `${window.location.origin}/${e}/${o}${location.search}` : `${window.location.origin}/${o}${location.search}`
            })(i);
          o?.({
            event: "cta_other",
            link_url: r,
            text: i,
            element_placement: s?.toLowerCase()
          }), n(a), window.location.assign(r)
        }
    },
    47279(e, o, s) {
      s.d(o, {
        A: () => r,
        C: () => i
      });
      var t = s(68861),
        n = s(50573);
      const i = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store",
          circoloco: "circoloco",
          supportNew: "support"
        },
        a = [{
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
        r = () => {
          let e;
          const {
            location: o
          } = window, s = o.hostname.substring(0, o.hostname.indexOf(".rockstargames.com")), i = a.findIndex(o => Object.entries(o.sites).findIndex(([o, t]) => t === s && (e = {
            site: o,
            subDomain: t
          }, !0)) >= 0), r = a[i >= 0 ? i : 0], l = a.find(e => e.id === r.fallbackEnvironment);
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), (0, n.A)((0, t.A)({}, l, {
            currentSite: e
          }, r), "fallbackEnvironment")
        }
    }
  }
]);