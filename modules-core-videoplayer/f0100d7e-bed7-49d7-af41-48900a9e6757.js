try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    o = (new e.Error).stack;
  o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "f0100d7e-bed7-49d7-af41-48900a9e6757", e._sentryDebugIdIdentifier = "sentry-dbid-f0100d7e-bed7-49d7-af41-48900a9e6757")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-videoplayer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [35, 416, 793], {
    4931(e, o, s) {
      var t = s(3082),
        n = Symbol.for("react.element"),
        a = Symbol.for("react.fragment"),
        i = Object.prototype.hasOwnProperty,
        r = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function c(e, o, s) {
        var t, a = {},
          c = null,
          u = null;
        for (t in void 0 !== s && (c = "" + s), void 0 !== o.key && (c = "" + o.key), void 0 !== o.ref && (u = o.ref), o) i.call(o, t) && !l.hasOwnProperty(t) && (a[t] = o[t]);
        if (e && e.defaultProps)
          for (t in o = e.defaultProps) void 0 === a[t] && (a[t] = o[t]);
        return {
          $$typeof: n,
          type: e,
          key: c,
          ref: u,
          props: a,
          _owner: r.current
        }
      }
      o.Fragment = a, o.jsx = c, o.jsxs = c
    },
    9793(e, o, s) {
      e.exports = s(4931)
    },
    8416(e, o, s) {
      s.r(o), s.d(o, {
        FormattedMessage: () => a.A,
        POSIXLocales: () => w,
        ReactIntlProviderForMocking: () => r.A,
        createDevLocaleHook: () => y,
        createIntl: () => n.E,
        defineMessages: () => t.YK,
        englishLocale: () => f,
        getCookieValueByName: () => p,
        getLocale: () => g,
        linkWithLocale: () => x,
        localeCookieHandler: () => m,
        locales: () => h,
        onLanguageChange: () => E,
        splitLocale: () => k,
        useIntl: () => i.A,
        withIntl: () => _
      });
      var t = s(4376),
        n = s(2447),
        a = s(3470),
        i = s(8925),
        r = s(6344),
        l = s(9793),
        c = s(3082),
        u = s(4834);
      const d = (e, o) => {
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
          return t && !s || d(e, o), [t, (n = e, e => {
            d(n, e)
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
          } = window, o = (0, u.A)(), s = (e => {
            const o = h.map(e => e.subdomaincom),
              s = e.pathname.substring(1).split("/"),
              t = "detect-locals" === s[0] ? 1 : 0;
            return -1 !== o.indexOf(s[t]) ? s[t] : null
          })(e), t = (e => {
            const o = e.search.substring(1).split("&").find(e => e.startsWith("lang"));
            return o?.split("=")[1]
          })(e), n = f;
          let a;
          const i = `rockstarweb_lang.${o.cookieIdentifier}`,
            r = p(i);
          a = o.currentSite?.site === u.C.www ? h.find(e => e.subdomaincom === t) || h.find(e => e.subdomaincom === s) || n : h.find(e => e.iso === r) || n;
          const [, l] = m(i, a.iso);
          return [a, l]
        };

      function _(e, o, s, t) {
        return n => {
          const a = (0, c.useMemo)(() => {
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
            locale: a?.locale || "en-US",
            messages: {
              ...a?.messages
            },
            onError: t,
            children: a && (0, l.jsx)(e, {
              ...n
            })
          }, "intl-provider")
        }
      }

      function k(e) {
        let [o, s] = e.split(/[-_]/), t = s?.toLowerCase();
        return "cn" === t && (t = "hans"), o && s || (o = "en", t = "us"), [o, t]
      }
      const y = e => {
          if (!e.us || 0 === Object.keys(e?.us).length) throw new Error("createDevLocaleHook requires at least a 'us' key with definitions");
          return () => {
            const [{
              iso: o
            }] = g(), [s, t] = k(o);
            return e?.[t] ?? e.us
          }
        },
        $ = {
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
        x = e => {
          const [o] = g(), {
            sites: s
          } = (0, u.A)();
          let t;
          try {
            t = new URL(e)
          } catch {
            t = null
          }
          if (t)
            for (const [n, {
                regex: a,
                isSubdomain: i,
                isLocaleInUrl: r,
                fieldName: l,
                externalPaths: c
              }] of Object.entries($)) {
              if (!a.test(e.toLowerCase())) continue;
              const u = s[n];
              if (!u) continue;
              let d = "";
              "en" !== o.subdomaincom && r && (d = `/${o[l||"subdomaincom"]}`, "circoloco" === n && "/" === t.pathname && (d += "/"));
              const p = t.host.split(".");
              let m = "";
              return "www" !== n || c?.some(e => e.test(t.pathname)) ? ("www" !== n && (m += `https://${u}`, m += i ? `.${p.at(-2)}.${p.at(-1)}` : `.${p.at(-1)}`), {
                link: `${m}${d}${"/"===t.pathname?"":t.pathname}${t.search}${t.hash}`,
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
        E = ({
          selectedLocale: e,
          track: o,
          parent: s = ""
        }) => {
          const t = (0, u.A)(),
            [, n] = g(),
            {
              subdomaincom: a,
              iso: i
            } = e,
            r = (e => {
              let o = location.pathname.replace(/^\/|\/$/g, "");
              const s = o.split("/");
              return h.map(e => e.subdomaincom).includes(s[0]) && (o = s.slice(1).join("/")), t.currentSite?.site === u.C.www ? "en" === e ? `${window.location.origin}/${o}${location.search}` : `${window.location.origin}/${e}/${o}${location.search}` : `${window.location.origin}/${o}${location.search}`
            })(a);
          o?.({
            event: "cta_other",
            link_url: r,
            text: a,
            element_placement: s?.toLowerCase()
          }), n(i), window.location.assign(r)
        }
    },
    4834(e, o, s) {
      var t = s(283);
      const n = [{
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
      s.d(o, ["A", 0, () => {
        let e;
        const {
          location: o
        } = window, s = o.hostname.substring(0, o.hostname.indexOf(".rockstargames.com")), a = n.findIndex(o => Object.entries(o.sites).findIndex(([o, t]) => t === s && (e = {
          site: o,
          subDomain: t
        }, !0)) >= 0), i = n[a >= 0 ? a : 0], r = n.find(e => e.id === i.fallbackEnvironment);
        return e || (e = {
          site: "www",
          subDomain: "local"
        }), (0, t.omit)((0, t.merge)({}, r, {
          currentSite: e
        }, i), "fallbackEnvironment")
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