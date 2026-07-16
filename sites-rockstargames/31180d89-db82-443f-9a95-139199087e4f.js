try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    o = (new e.Error).stack;
  o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "31180d89-db82-443f-9a95-139199087e4f", e._sentryDebugIdIdentifier = "sentry-dbid-31180d89-db82-443f-9a95-139199087e4f")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [8461], {
    40842(e, o, t) {
      t.r(o), t.d(o, {
        FormattedMessage: () => c,
        POSIXLocales: () => k,
        ReactIntlProviderForMocking: () => p.A,
        createDevLocaleHook: () => A,
        createIntl: () => d.E,
        defineMessages: () => u.YK,
        englishLocale: () => _,
        getCookieValueByName: () => g,
        getLocale: () => $,
        linkWithLocale: () => I,
        localeCookieHandler: () => w,
        locales: () => v,
        onLanguageChange: () => L,
        splitLocale: () => y,
        useIntl: () => r.A,
        withIntl: () => x
      });
      var s = t(51177),
        n = t(93082),
        a = t(40949),
        r = t(68925);

      function i(e) {
        var o = (0, r.A)(),
          t = o.formatMessage,
          s = o.textComponent,
          a = void 0 === s ? n.Fragment : s,
          i = e.id,
          l = e.description,
          c = e.defaultMessage,
          u = e.values,
          d = e.children,
          p = e.tagName,
          m = void 0 === p ? a : p,
          f = t({
            id: i,
            description: l,
            defaultMessage: c
          }, u, {
            ignoreTag: e.ignoreTag
          });
        return "function" == typeof d ? d(Array.isArray(f) ? f : [f]) : m ? n.createElement(m, null, f) : n.createElement(n.Fragment, null, f)
      }
      i.displayName = "FormattedMessage";
      var l = n.memo(i, function(e, o) {
        var t = e.values,
          n = (0, s.Tt)(e, ["values"]),
          r = o.values,
          i = (0, s.Tt)(o, ["values"]);
        return (0, a.bN)(r, t) && (0, a.bN)(n, i)
      });
      l.displayName = "MemoizedFormattedMessage";
      const c = l;
      var u = t(14376),
        d = t(32447),
        p = t(46344),
        m = t(39793),
        f = t(24834);
      const b = (e, o) => {
          if (!e || !o) return void console.log(`Couldn't set cookie (${e}) to value (${o})`);
          const t = window.location.hostname.split("."),
            s = t.slice(t.length - 2).join(".");
          document.cookie = `${e}=${o}; domain=${s}; path=/;`
        },
        g = e => {
          const o = document.cookie.split("; "),
            t = `${e}=`,
            s = o.find(e => e.startsWith(t)),
            n = s?.substring(t.length, s.length);
          return n
        },
        w = (e, o, t = !1) => {
          const s = g(e);
          return s && !t || b(e, o), [s, (n = e, e => {
            b(n, e)
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
        _ = h[0],
        k = ["de_de", "fr_fr", "it_it", "ja_jp", "ru_ru", "es_es", "es_mx", "pt_br", "ko_kr", "zh_tw", "pl_pl", "zh_hans"],
        v = h,
        $ = () => {
          const {
            location: e
          } = window, o = (0, f.A)(), t = (e => {
            const o = v.map(e => e.subdomaincom),
              t = e.pathname.substring(1).split("/"),
              s = "detect-locals" === t[0] ? 1 : 0;
            return -1 !== o.indexOf(t[s]) ? t[s] : null
          })(e), s = (e => {
            const o = e.search.substring(1).split("&").find(e => e.startsWith("lang"));
            return o?.split("=")[1]
          })(e), n = _;
          let a;
          const r = `rockstarweb_lang.${o.cookieIdentifier}`,
            i = g(r);
          a = o.currentSite?.site === f.C.www ? v.find(e => e.subdomaincom === s) || v.find(e => e.subdomaincom === t) || n : v.find(e => e.iso === i) || n;
          const [, l] = w(r, a.iso);
          return [a, l]
        };

      function x(e, o, t, s) {
        return a => {
          const r = (0, n.useMemo)(() => {
            if (o) return function(e, o) {
              return function(e, o) {
                const t = o ?? $()[0].iso ?? "en-US",
                  s = function(e, o) {
                    return e[o] ?? {}
                  }(e, t);
                var n;
                return {
                  rsLocale: t,
                  locale: t,
                  messages: (n = s, {
                    ...n
                  })
                }
              }(e, o)
            }(o, t)
          }, [t]);
          return (0, m.jsx)(p.A, {
            locale: r?.locale || "en-US",
            messages: {
              ...r?.messages
            },
            onError: s,
            children: r && (0, m.jsx)(e, {
              ...a
            })
          }, "intl-provider")
        }
      }

      function y(e) {
        let [o, t] = e.split(/[-_]/), s = t?.toLowerCase();
        return "cn" === s && (s = "hans"), o && t || (o = "en", s = "us"), [o, s]
      }
      const A = e => {
          if (!e.us || 0 === Object.keys(e?.us).length) throw new Error("createDevLocaleHook requires at least a 'us' key with definitions");
          return () => {
            const [{
              iso: o
            }] = $(), [t, s] = y(o);
            return e?.[s] ?? e.us
          }
        },
        E = {
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
        I = e => {
          const [o] = $(), {
            sites: t
          } = (0, f.A)();
          let s;
          try {
            s = new URL(e)
          } catch {
            s = null
          }
          if (s)
            for (const [n, {
                regex: a,
                isSubdomain: r,
                isLocaleInUrl: i,
                fieldName: l,
                externalPaths: c
              }] of Object.entries(E)) {
              if (!a.test(e.toLowerCase())) continue;
              const u = t[n];
              if (!u) continue;
              let d = "";
              "en" !== o.subdomaincom && i && (d = `/${o[l||"subdomaincom"]}`, "circoloco" === n && "/" === s.pathname && (d += "/"));
              const p = s.host.split(".");
              let m = "";
              return "www" !== n || c?.some(e => e.test(s.pathname)) ? ("www" !== n && (m += `https://${u}`, m += r ? `.${p.at(-2)}.${p.at(-1)}` : `.${p.at(-1)}`), {
                link: `${m}${d}${"/"===s.pathname?"":s.pathname}${s.search}${s.hash}`,
                isExternal: !0
              }) : {
                link: `${m}${"/"===s.pathname?"":s.pathname}${s.search}${s.hash}`,
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
        L = ({
          selectedLocale: e,
          track: o,
          parent: t = ""
        }) => {
          const s = (0, f.A)(),
            [, n] = $(),
            {
              subdomaincom: a,
              iso: r
            } = e,
            i = (e => {
              let o = location.pathname.replace(/^\/|\/$/g, "");
              const t = o.split("/");
              return v.map(e => e.subdomaincom).includes(t[0]) && (o = t.slice(1).join("/")), s.currentSite?.site === f.C.www ? "en" === e ? `${window.location.origin}/${o}${location.search}` : `${window.location.origin}/${e}/${o}${location.search}` : `${window.location.origin}/${o}${location.search}`
            })(a);
          o?.({
            event: "cta_other",
            link_url: i,
            text: a,
            element_placement: t?.toLowerCase()
          }), n(r), window.location.assign(i)
        }
    },
    24834(e, o, t) {
      var s = t(57202),
        n = t(50573);
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
      t.d(o, ["A", 0, () => {
        let e;
        const {
          location: o
        } = window, t = o.hostname.substring(0, o.hostname.indexOf(".rockstargames.com")), r = a.findIndex(o => Object.entries(o.sites).findIndex(([o, s]) => s === t && (e = {
          site: o,
          subDomain: s
        }, !0)) >= 0), i = a[r >= 0 ? r : 0], l = a.find(e => e.id === i.fallbackEnvironment);
        return e || (e = {
          site: "www",
          subDomain: "local"
        }), (0, n.A)((0, s.A)({}, l, {
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
    },
    50573(e, o, t) {
      t.d(o, {
        A: () => A
      });
      var s = t(20829),
        n = t(70278),
        a = t(73443);
      var r = t(99793);
      const i = function(e, o) {
        return o.length < 2 ? e : (0, r.A)(e, function(e, o, t) {
          var s = -1,
            n = e.length;
          o < 0 && (o = -o > n ? 0 : n + o), (t = t > n ? n : t) < 0 && (t += n), n = o > t ? 0 : t - o >>> 0, o >>>= 0;
          for (var a = Array(n); ++s < n;) a[s] = e[s + o];
          return a
        }(o, 0, -1))
      };
      var l = t(33018),
        c = Object.prototype.hasOwnProperty;
      const u = function(e, o) {
        var t = -1,
          s = (o = (0, a.A)(o, e)).length;
        if (!s) return !0;
        for (; ++t < s;) {
          var n = (0, l.A)(o[t]);
          if ("__proto__" === n && !c.call(e, "__proto__")) return !1;
          if (("constructor" === n || "prototype" === n) && t < s - 1) return !1
        }
        var r = i(e, o);
        return null == r || delete r[(0, l.A)(function(e) {
          var o = null == e ? 0 : e.length;
          return o ? e[o - 1] : void 0
        }(o))]
      };
      var d = t(57502),
        p = t(58634);
      const m = function(e) {
        return (0, p.A)(e) ? void 0 : e
      };
      var f = t(68071),
        b = t(94508),
        g = t(48348),
        w = t(6700),
        h = b.A ? b.A.isConcatSpreadable : void 0;
      const _ = function(e) {
          return (0, w.A)(e) || (0, g.A)(e) || !!(h && e && e[h])
        },
        k = function e(o, t, s, n, a) {
          var r = -1,
            i = o.length;
          for (s || (s = _), a || (a = []); ++r < i;) {
            var l = o[r];
            t > 0 && s(l) ? t > 1 ? e(l, t - 1, s, n, a) : (0, f.A)(a, l) : n || (a[a.length] = l)
          }
          return a
        },
        v = function(e) {
          return null != e && e.length ? k(e, 1) : []
        };
      var $ = t(7352),
        x = t(91847);
      var y = t(47016);
      const A = (E = function(e, o) {
        var t = {};
        if (null == e) return t;
        var r = !1;
        o = (0, s.A)(o, function(o) {
          return o = (0, a.A)(o, e), r || (r = o.length > 1), o
        }), (0, d.A)(e, (0, y.A)(e), t), r && (t = (0, n.A)(t, 7, m));
        for (var i = o.length; i--;) u(t, o[i]);
        return t
      }, (0, x.A)((0, $.A)(E, void 0, v), E + ""));
      var E
    }
  }
]);