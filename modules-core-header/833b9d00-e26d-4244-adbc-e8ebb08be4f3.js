try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    o = (new e.Error).stack;
  o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "833b9d00-e26d-4244-adbc-e8ebb08be4f3", e._sentryDebugIdIdentifier = "sentry-dbid-833b9d00-e26d-4244-adbc-e8ebb08be4f3")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [784], {
    68403(e, o, s) {
      s.r(o), s.d(o, {
        FormattedMessage: () => c,
        POSIXLocales: () => _,
        ReactIntlProviderForMocking: () => m.A,
        createDevLocaleHook: () => E,
        createIntl: () => u.E,
        defineMessages: () => d.YK,
        englishLocale: () => k,
        getCookieValueByName: () => w,
        getLocale: () => x,
        linkWithLocale: () => L,
        localeCookieHandler: () => g,
        locales: () => $,
        onLanguageChange: () => C,
        splitLocale: () => v,
        useIntl: () => i.A,
        withIntl: () => y
      });
      var t = s(51177),
        n = s(4637),
        a = s(2603),
        i = s(74775);

      function r(e) {
        var o = (0, i.A)(),
          s = o.formatMessage,
          t = o.textComponent,
          a = void 0 === t ? n.Fragment : t,
          r = e.id,
          l = e.description,
          c = e.defaultMessage,
          d = e.values,
          u = e.children,
          m = e.tagName,
          p = void 0 === m ? a : m,
          b = s({
            id: r,
            description: l,
            defaultMessage: c
          }, d, {
            ignoreTag: e.ignoreTag
          });
        return "function" == typeof u ? u(Array.isArray(b) ? b : [b]) : p ? n.createElement(p, null, b) : n.createElement(n.Fragment, null, b)
      }
      r.displayName = "FormattedMessage";
      var l = n.memo(r, function(e, o) {
        var s = e.values,
          n = (0, t.Tt)(e, ["values"]),
          i = o.values,
          r = (0, t.Tt)(o, ["values"]);
        return (0, a.bN)(i, s) && (0, a.bN)(n, r)
      });
      l.displayName = "MemoizedFormattedMessage";
      const c = l;
      var d = s(57338),
        u = s(73747),
        m = s(54422),
        p = s(39793),
        b = s(47279);
      const f = (e, o) => {
          if (!e || !o) return void console.log(`Couldn't set cookie (${e}) to value (${o})`);
          const s = window.location.hostname.split("."),
            t = s.slice(s.length - 2).join(".");
          document.cookie = `${e}=${o}; domain=${t}; path=/;`
        },
        w = e => {
          const o = document.cookie.split("; "),
            s = `${e}=`,
            t = o.find(e => e.startsWith(s)),
            n = t?.substring(s.length, t.length);
          return n
        },
        g = (e, o, s = !1) => {
          const t = w(e);
          return t && !s || f(e, o), [t, (n = e, e => {
            f(n, e)
          })];
          var n
        },
        h = [{
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
        k = h[0],
        _ = ["de_de", "fr_fr", "it_it", "ja_jp", "ru_ru", "es_es", "es_mx", "pt_br", "ko_kr", "zh_tw", "pl_pl", "zh_hans"],
        $ = h,
        x = () => {
          const {
            location: e
          } = window, o = (0, b.A)(), s = (e => {
            const o = $.map(e => e.subdomaincom),
              s = e.pathname.substring(1).split("/"),
              t = "detect-locals" === s[0] ? 1 : 0;
            return -1 !== o.indexOf(s[t]) ? s[t] : null
          })(e), t = (e => {
            const o = e.search.substring(1).split("&").find(e => e.startsWith("lang"));
            return o?.split("=")[1]
          })(e), n = k;
          let a;
          const i = `rockstarweb_lang.${o.cookieIdentifier}`,
            r = w(i);
          a = o.currentSite?.site === b.C.www ? $.find(e => e.subdomaincom === t) || $.find(e => e.subdomaincom === s) || n : $.find(e => e.iso === r) || n;
          const [, l] = g(i, a.iso);
          return [a, l]
        };

      function y(e, o, s, t) {
        return a => {
          const i = (0, n.useMemo)(() => {
            if (o) return function(e, o) {
              return function(e, o) {
                const s = o ?? x()[0].iso ?? "en-US",
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
          return (0, p.jsx)(m.A, {
            locale: i?.locale || "en-US",
            messages: {
              ...i?.messages
            },
            onError: t,
            children: i && (0, p.jsx)(e, {
              ...a
            })
          }, "intl-provider")
        }
      }

      function v(e) {
        let [o, s] = e.split(/[-_]/), t = s?.toLowerCase();
        return "cn" === t && (t = "hans"), o && s || (o = "en", t = "us"), [o, t]
      }
      const E = e => {
          if (!e.us || 0 === Object.keys(e?.us).length) throw new Error("createDevLocaleHook requires at least a 'us' key with definitions");
          return () => {
            const [{
              iso: o
            }] = x(), [s, t] = v(o);
            return e?.[t] ?? e.us
          }
        },
        I = {
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
        L = e => {
          const [o] = x(), {
            sites: s
          } = (0, b.A)();
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
              }] of Object.entries(I)) {
              if (!a.test(e.toLowerCase())) continue;
              const d = s[n];
              if (!d) continue;
              let u = "";
              "en" !== o.subdomaincom && r && (u = `/${o[l||"subdomaincom"]}`, "circoloco" === n && "/" === t.pathname && (u += "/"));
              const m = t.host.split(".");
              let p = "";
              return "www" !== n || c?.some(e => e.test(t.pathname)) ? ("www" !== n && (p += `https://${d}`, p += i ? `.${m.at(-2)}.${m.at(-1)}` : `.${m.at(-1)}`), {
                link: `${p}${u}${"/"===t.pathname?"":t.pathname}${t.search}${t.hash}`,
                isExternal: !0
              }) : {
                link: `${p}${"/"===t.pathname?"":t.pathname}${t.search}${t.hash}`,
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
        C = ({
          selectedLocale: e,
          track: o,
          parent: s = ""
        }) => {
          const t = (0, b.A)(),
            [, n] = x(),
            {
              subdomaincom: a,
              iso: i
            } = e,
            r = (e => {
              let o = location.pathname.replace(/^\/|\/$/g, "");
              const s = o.split("/");
              return $.map(e => e.subdomaincom).includes(s[0]) && (o = s.slice(1).join("/")), t.currentSite?.site === b.C.www ? "en" === e ? `${window.location.origin}/${o}${location.search}` : `${window.location.origin}/${e}/${o}${location.search}` : `${window.location.origin}/${o}${location.search}`
            })(a);
          o?.({
            event: "cta_other",
            link_url: r,
            text: a,
            element_placement: s?.toLowerCase()
          }), n(i), window.location.assign(r)
        }
    },
    47279(e, o, s) {
      s.d(o, {
        A: () => r,
        C: () => a
      });
      var t = s(68861),
        n = s(50573);
      const a = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store",
          circoloco: "circoloco",
          supportNew: "support"
        },
        i = [{
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
          } = window, s = o.hostname.substring(0, o.hostname.indexOf(".rockstargames.com")), a = i.findIndex(o => Object.entries(o.sites).findIndex(([o, t]) => t === s && (e = {
            site: o,
            subDomain: t
          }, !0)) >= 0), r = i[a >= 0 ? a : 0], l = i.find(e => e.id === r.fallbackEnvironment);
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