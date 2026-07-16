try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    o = (new e.Error).stack;
  o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "f10a06cc-425d-4ff2-9464-d9f7b0753a2b", e._sentryDebugIdIdentifier = "sentry-dbid-f10a06cc-425d-4ff2-9464-d9f7b0753a2b")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-gta-gen9",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [842, 2174, 8461, 9793], {
    94931(e, o, s) {
      var t = s(93082),
        a = Symbol.for("react.element"),
        n = Symbol.for("react.fragment"),
        i = Object.prototype.hasOwnProperty,
        r = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
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
        for (t in void 0 !== s && (c = "" + s), void 0 !== o.key && (c = "" + o.key), void 0 !== o.ref && (u = o.ref), o) i.call(o, t) && !l.hasOwnProperty(t) && (n[t] = o[t]);
        if (e && e.defaultProps)
          for (t in o = e.defaultProps) void 0 === n[t] && (n[t] = o[t]);
        return {
          $$typeof: a,
          type: e,
          key: c,
          ref: u,
          props: n,
          _owner: r.current
        }
      }
      o.Fragment = n, o.jsx = c, o.jsxs = c
    },
    39793(e, o, s) {
      e.exports = s(94931)
    },
    40842(e, o, s) {
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
        useIntl: () => i.A,
        withIntl: () => $
      });
      var t = s(51177),
        a = s(93082),
        n = s(40949),
        i = s(68925);

      function r(e) {
        var o = (0, i.A)(),
          s = o.formatMessage,
          t = o.textComponent,
          n = void 0 === t ? a.Fragment : t,
          r = e.id,
          l = e.description,
          c = e.defaultMessage,
          u = e.values,
          d = e.children,
          p = e.tagName,
          m = void 0 === p ? n : p,
          f = s({
            id: r,
            description: l,
            defaultMessage: c
          }, u, {
            ignoreTag: e.ignoreTag
          });
        return "function" == typeof d ? d(Array.isArray(f) ? f : [f]) : m ? a.createElement(m, null, f) : a.createElement(a.Fragment, null, f)
      }
      r.displayName = "FormattedMessage";
      var l = a.memo(r, function(e, o) {
        var s = e.values,
          a = (0, t.Tt)(e, ["values"]),
          i = o.values,
          r = (0, t.Tt)(o, ["values"]);
        return (0, n.bN)(i, s) && (0, n.bN)(a, r)
      });
      l.displayName = "MemoizedFormattedMessage";
      const c = l;
      var u = s(14376),
        d = s(32447),
        p = s(46344),
        m = s(39793),
        f = s(24834);
      const b = (e, o) => {
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
          return t && !s || b(e, o), [t, (a = e, e => {
            b(a, e)
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
          } = window, o = (0, f.A)(), s = (e => {
            const o = y.map(e => e.subdomaincom),
              s = e.pathname.substring(1).split("/"),
              t = "detect-locals" === s[0] ? 1 : 0;
            return -1 !== o.indexOf(s[t]) ? s[t] : null
          })(e), t = (e => {
            const o = e.search.substring(1).split("&").find(e => e.startsWith("lang"));
            return o?.split("=")[1]
          })(e), a = _;
          let n;
          const i = `rockstarweb_lang.${o.cookieIdentifier}`,
            r = w(i);
          n = o.currentSite?.site === f.C.www ? y.find(e => e.subdomaincom === t) || y.find(e => e.subdomaincom === s) || a : y.find(e => e.iso === r) || a;
          const [, l] = g(i, n.iso);
          return [n, l]
        };

      function $(e, o, s, t) {
        return n => {
          const i = (0, a.useMemo)(() => {
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
            locale: i?.locale || "en-US",
            messages: {
              ...i?.messages
            },
            onError: t,
            children: i && (0, m.jsx)(e, {
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
          } = (0, f.A)();
          let t;
          try {
            t = new URL(e)
          } catch {
            t = null
          }
          if (t)
            for (const [a, {
                regex: n,
                isSubdomain: i,
                isLocaleInUrl: r,
                fieldName: l,
                externalPaths: c
              }] of Object.entries(I)) {
              if (!n.test(e.toLowerCase())) continue;
              const u = s[a];
              if (!u) continue;
              let d = "";
              "en" !== o.subdomaincom && r && (d = `/${o[l||"subdomaincom"]}`, "circoloco" === a && "/" === t.pathname && (d += "/"));
              const p = t.host.split(".");
              let m = "";
              return "www" !== a || c?.some(e => e.test(t.pathname)) ? ("www" !== a && (m += `https://${u}`, m += i ? `.${p.at(-2)}.${p.at(-1)}` : `.${p.at(-1)}`), {
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
          const t = (0, f.A)(),
            [, a] = x(),
            {
              subdomaincom: n,
              iso: i
            } = e,
            r = (e => {
              let o = location.pathname.replace(/^\/|\/$/g, "");
              const s = o.split("/");
              return y.map(e => e.subdomaincom).includes(s[0]) && (o = s.slice(1).join("/")), t.currentSite?.site === f.C.www ? "en" === e ? `${window.location.origin}/${o}${location.search}` : `${window.location.origin}/${e}/${o}${location.search}` : `${window.location.origin}/${o}${location.search}`
            })(n);
          o?.({
            event: "cta_other",
            link_url: r,
            text: n,
            element_placement: s?.toLowerCase()
          }), a(i), window.location.assign(r)
        }
    },
    24834(e, o, s) {
      var t = s(40283);
      const a = [{
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
        } = window, s = o.hostname.substring(0, o.hostname.indexOf(".rockstargames.com")), n = a.findIndex(o => Object.entries(o.sites).findIndex(([o, t]) => t === s && (e = {
          site: o,
          subDomain: t
        }, !0)) >= 0), i = a[n >= 0 ? n : 0], r = a.find(e => e.id === i.fallbackEnvironment);
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