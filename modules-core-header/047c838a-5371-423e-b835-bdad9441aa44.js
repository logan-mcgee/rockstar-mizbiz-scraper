try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    o = (new e.Error).stack;
  o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "047c838a-5371-423e-b835-bdad9441aa44", e._sentryDebugIdIdentifier = "sentry-dbid-047c838a-5371-423e-b835-bdad9441aa44")
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
  [784, 2174, 4555, 6936, 8403, 9793], {
    94931(e, o, s) {
      var t = s(4637),
        a = Symbol.for("react.element"),
        n = Symbol.for("react.fragment"),
        r = Object.prototype.hasOwnProperty,
        i = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function c(e, o, s) {
        var t, n = {},
          c = null,
          u = null;
        for (t in void 0 !== s && (c = "" + s), void 0 !== o.key && (c = "" + o.key), void 0 !== o.ref && (u = o.ref), o) r.call(o, t) && !l.hasOwnProperty(t) && (n[t] = o[t]);
        if (e && e.defaultProps)
          for (t in o = e.defaultProps) void 0 === n[t] && (n[t] = o[t]);
        return {
          $$typeof: a,
          type: e,
          key: c,
          ref: u,
          props: n,
          _owner: i.current
        }
      }
      o.Fragment = n, o.jsx = c, o.jsxs = c
    },
    39793(e, o, s) {
      e.exports = s(94931)
    },
    68403(e, o, s) {
      s.r(o), s.d(o, {
        FormattedMessage: () => c,
        POSIXLocales: () => k,
        ReactIntlProviderForMocking: () => p.A,
        createDevLocaleHook: () => E,
        createIntl: () => d.E,
        defineMessages: () => u.YK,
        englishLocale: () => _,
        getCookieValueByName: () => w,
        getLocale: () => x,
        linkWithLocale: () => L,
        localeCookieHandler: () => g,
        locales: () => y,
        onLanguageChange: () => S,
        splitLocale: () => v,
        useIntl: () => r.A,
        withIntl: () => $
      });
      var t = s(51177),
        a = s(4637),
        n = s(2603),
        r = s(74775);

      function i(e) {
        var o = (0, r.A)(),
          s = o.formatMessage,
          t = o.textComponent,
          n = void 0 === t ? a.Fragment : t,
          i = e.id,
          l = e.description,
          c = e.defaultMessage,
          u = e.values,
          d = e.children,
          p = e.tagName,
          m = void 0 === p ? n : p,
          b = s({
            id: i,
            description: l,
            defaultMessage: c
          }, u, {
            ignoreTag: e.ignoreTag
          });
        return "function" == typeof d ? d(Array.isArray(b) ? b : [b]) : m ? a.createElement(m, null, b) : a.createElement(a.Fragment, null, b)
      }
      i.displayName = "FormattedMessage";
      var l = a.memo(i, function(e, o) {
        var s = e.values,
          a = (0, t.Tt)(e, ["values"]),
          r = o.values,
          i = (0, t.Tt)(o, ["values"]);
        return (0, n.bN)(r, s) && (0, n.bN)(a, i)
      });
      l.displayName = "MemoizedFormattedMessage";
      const c = l;
      var u = s(57338),
        d = s(73747),
        p = s(54422),
        m = s(39793),
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
            a = t?.substring(s.length, t.length);
          return a
        },
        g = (e, o, s = !1) => {
          const t = w(e);
          return t && !s || f(e, o), [t, (a = e, e => {
            f(a, e)
          })];
          var a
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
        _ = h[0],
        k = ["de_de", "fr_fr", "it_it", "ja_jp", "ru_ru", "es_es", "es_mx", "pt_br", "ko_kr", "zh_tw", "pl_pl", "zh_hans"],
        y = h,
        x = () => {
          const {
            location: e
          } = window, o = (0, b.A)(), s = (e => {
            const o = y.map(e => e.subdomaincom),
              s = e.pathname.substring(1).split("/"),
              t = "detect-locals" === s[0] ? 1 : 0;
            return -1 !== o.indexOf(s[t]) ? s[t] : null
          })(e), t = (e => {
            const o = e.search.substring(1).split("&").find(e => e.startsWith("lang"));
            return o?.split("=")[1]
          })(e), a = _;
          let n;
          const r = `rockstarweb_lang.${o.cookieIdentifier}`,
            i = w(r);
          n = o.currentSite?.site === b.C.www ? y.find(e => e.subdomaincom === t) || y.find(e => e.subdomaincom === s) || a : y.find(e => e.iso === i) || a;
          const [, l] = g(r, n.iso);
          return [n, l]
        };

      function $(e, o, s, t) {
        return n => {
          const r = (0, a.useMemo)(() => {
            if (o) return function(e, o) {
              return function(e, o) {
                const s = o ?? x()[0].iso ?? "en-US",
                  t = function(e, o) {
                    return e[o] ?? {}
                  }(e, s);
                var a;
                return {
                  rsLocale: s,
                  locale: s,
                  messages: (a = t, {
                    ...a
                  })
                }
              }(e, o)
            }(o, s)
          }, [s]);
          return (0, m.jsx)(p.A, {
            locale: r?.locale || "en-US",
            messages: {
              ...r?.messages
            },
            onError: t,
            children: r && (0, m.jsx)(e, {
              ...n
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
            for (const [a, {
                regex: n,
                isSubdomain: r,
                isLocaleInUrl: i,
                fieldName: l,
                externalPaths: c
              }] of Object.entries(I)) {
              if (!n.test(e.toLowerCase())) continue;
              const u = s[a];
              if (!u) continue;
              let d = "";
              "en" !== o.subdomaincom && i && (d = `/${o[l||"subdomaincom"]}`, "circoloco" === a && "/" === t.pathname && (d += "/"));
              const p = t.host.split(".");
              let m = "";
              return "www" !== a || c?.some(e => e.test(t.pathname)) ? ("www" !== a && (m += `https://${u}`, m += r ? `.${p.at(-2)}.${p.at(-1)}` : `.${p.at(-1)}`), {
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
        S = ({
          selectedLocale: e,
          track: o,
          parent: s = ""
        }) => {
          const t = (0, b.A)(),
            [, a] = x(),
            {
              subdomaincom: n,
              iso: r
            } = e,
            i = (e => {
              let o = location.pathname.replace(/^\/|\/$/g, "");
              const s = o.split("/");
              return y.map(e => e.subdomaincom).includes(s[0]) && (o = s.slice(1).join("/")), t.currentSite?.site === b.C.www ? "en" === e ? `${window.location.origin}/${o}${location.search}` : `${window.location.origin}/${e}/${o}${location.search}` : `${window.location.origin}/${o}${location.search}`
            })(n);
          o?.({
            event: "cta_other",
            link_url: i,
            text: n,
            element_placement: s?.toLowerCase()
          }), a(r), window.location.assign(i)
        }
    },
    47279(e, o, s) {
      s.d(o, {
        A: () => i,
        C: () => n
      });
      var t = s(68861),
        a = s(50573);
      const n = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store",
          circoloco: "circoloco",
          supportNew: "support"
        },
        r = [{
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
        i = () => {
          let e;
          const {
            location: o
          } = window, s = o.hostname.substring(0, o.hostname.indexOf(".rockstargames.com")), n = r.findIndex(o => Object.entries(o.sites).findIndex(([o, t]) => t === s && (e = {
            site: o,
            subDomain: t
          }, !0)) >= 0), i = r[n >= 0 ? n : 0], l = r.find(e => e.id === i.fallbackEnvironment);
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), (0, a.A)((0, t.A)({}, l, {
            currentSite: e
          }, i), "fallbackEnvironment")
        }
    }
  }
]);