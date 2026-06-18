try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    o = (new e.Error).stack;
  o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "b3c6b041-506d-44eb-bcd4-968f367e9976", e._sentryDebugIdIdentifier = "sentry-dbid-b3c6b041-506d-44eb-bcd4-968f367e9976")
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
  [784], {
    68403(e, o, t) {
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
        useIntl: () => a.A,
        withIntl: () => x
      });
      var s = t(51177),
        n = t(93082),
        r = t(2603),
        a = t(74775);

      function i(e) {
        var o = (0, a.A)(),
          t = o.formatMessage,
          s = o.textComponent,
          r = void 0 === s ? n.Fragment : s,
          i = e.id,
          l = e.description,
          c = e.defaultMessage,
          u = e.values,
          d = e.children,
          p = e.tagName,
          m = void 0 === p ? r : p,
          b = t({
            id: i,
            description: l,
            defaultMessage: c
          }, u, {
            ignoreTag: e.ignoreTag
          });
        return "function" == typeof d ? d(Array.isArray(b) ? b : [b]) : m ? n.createElement(m, null, b) : n.createElement(n.Fragment, null, b)
      }
      i.displayName = "FormattedMessage";
      var l = n.memo(i, function(e, o) {
        var t = e.values,
          n = (0, s.Tt)(e, ["values"]),
          a = o.values,
          i = (0, s.Tt)(o, ["values"]);
        return (0, r.bN)(a, t) && (0, r.bN)(n, i)
      });
      l.displayName = "MemoizedFormattedMessage";
      const c = l;
      var u = t(57338),
        d = t(73747),
        p = t(54422),
        m = t(39793),
        b = t(47279);
      const f = (e, o) => {
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
          return s && !t || f(e, o), [s, (n = e, e => {
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
        _ = h[0],
        k = ["de_de", "fr_fr", "it_it", "ja_jp", "ru_ru", "es_es", "es_mx", "pt_br", "ko_kr", "zh_tw", "pl_pl", "zh_hans"],
        v = h,
        $ = () => {
          const {
            location: e
          } = window, o = (0, b.A)(), t = (e => {
            const o = v.map(e => e.subdomaincom),
              t = e.pathname.substring(1).split("/"),
              s = "detect-locals" === t[0] ? 1 : 0;
            return -1 !== o.indexOf(t[s]) ? t[s] : null
          })(e), s = (e => {
            const o = e.search.substring(1).split("&").find(e => e.startsWith("lang"));
            return o?.split("=")[1]
          })(e), n = _;
          let r;
          const a = `rockstarweb_lang.${o.cookieIdentifier}`,
            i = g(a);
          r = o.currentSite?.site === b.C.www ? v.find(e => e.subdomaincom === s) || v.find(e => e.subdomaincom === t) || n : v.find(e => e.iso === i) || n;
          const [, l] = w(a, r.iso);
          return [r, l]
        };

      function x(e, o, t, s) {
        return r => {
          const a = (0, n.useMemo)(() => {
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
            locale: a?.locale || "en-US",
            messages: {
              ...a?.messages
            },
            onError: s,
            children: a && (0, m.jsx)(e, {
              ...r
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
          } = (0, b.A)();
          let s;
          try {
            s = new URL(e)
          } catch {
            s = null
          }
          if (s)
            for (const [n, {
                regex: r,
                isSubdomain: a,
                isLocaleInUrl: i,
                fieldName: l,
                externalPaths: c
              }] of Object.entries(E)) {
              if (!r.test(e.toLowerCase())) continue;
              const u = t[n];
              if (!u) continue;
              let d = "";
              "en" !== o.subdomaincom && i && (d = `/${o[l||"subdomaincom"]}`, "circoloco" === n && "/" === s.pathname && (d += "/"));
              const p = s.host.split(".");
              let m = "";
              return "www" !== n || c?.some(e => e.test(s.pathname)) ? ("www" !== n && (m += `https://${u}`, m += a ? `.${p.at(-2)}.${p.at(-1)}` : `.${p.at(-1)}`), {
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
          const s = (0, b.A)(),
            [, n] = $(),
            {
              subdomaincom: r,
              iso: a
            } = e,
            i = (e => {
              let o = location.pathname.replace(/^\/|\/$/g, "");
              const t = o.split("/");
              return v.map(e => e.subdomaincom).includes(t[0]) && (o = t.slice(1).join("/")), s.currentSite?.site === b.C.www ? "en" === e ? `${window.location.origin}/${o}${location.search}` : `${window.location.origin}/${e}/${o}${location.search}` : `${window.location.origin}/${o}${location.search}`
            })(r);
          o?.({
            event: "cta_other",
            link_url: i,
            text: r,
            element_placement: t?.toLowerCase()
          }), n(a), window.location.assign(i)
        }
    },
    47279(e, o, t) {
      t.d(o, {
        A: () => i,
        C: () => r
      });
      var s = t(57202),
        n = t(50573);
      const r = {
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
        i = () => {
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
        }
    },
    50573(e, o, t) {
      t.d(o, {
        A: () => A
      });
      var s = t(20829),
        n = t(70278),
        r = t(73443);
      var a = t(99793);
      const i = function(e, o) {
        return o.length < 2 ? e : (0, a.A)(e, function(e, o, t) {
          var s = -1,
            n = e.length;
          o < 0 && (o = -o > n ? 0 : n + o), (t = t > n ? n : t) < 0 && (t += n), n = o > t ? 0 : t - o >>> 0, o >>>= 0;
          for (var r = Array(n); ++s < n;) r[s] = e[s + o];
          return r
        }(o, 0, -1))
      };
      var l = t(33018),
        c = Object.prototype.hasOwnProperty;
      const u = function(e, o) {
        var t = -1,
          s = (o = (0, r.A)(o, e)).length;
        if (!s) return !0;
        for (; ++t < s;) {
          var n = (0, l.A)(o[t]);
          if ("__proto__" === n && !c.call(e, "__proto__")) return !1;
          if (("constructor" === n || "prototype" === n) && t < s - 1) return !1
        }
        var a = i(e, o);
        return null == a || delete a[(0, l.A)(function(e) {
          var o = null == e ? 0 : e.length;
          return o ? e[o - 1] : void 0
        }(o))]
      };
      var d = t(57502),
        p = t(58634);
      const m = function(e) {
        return (0, p.A)(e) ? void 0 : e
      };
      var b = t(68071),
        f = t(94508),
        g = t(48348),
        w = t(6700),
        h = f.A ? f.A.isConcatSpreadable : void 0;
      const _ = function(e) {
          return (0, w.A)(e) || (0, g.A)(e) || !!(h && e && e[h])
        },
        k = function e(o, t, s, n, r) {
          var a = -1,
            i = o.length;
          for (s || (s = _), r || (r = []); ++a < i;) {
            var l = o[a];
            t > 0 && s(l) ? t > 1 ? e(l, t - 1, s, n, r) : (0, b.A)(r, l) : n || (r[r.length] = l)
          }
          return r
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
        var a = !1;
        o = (0, s.A)(o, function(o) {
          return o = (0, r.A)(o, e), a || (a = o.length > 1), o
        }), (0, d.A)(e, (0, y.A)(e), t), a && (t = (0, n.A)(t, 7, m));
        for (var i = o.length; i--;) u(t, o[i]);
        return t
      }, (0, x.A)((0, $.A)(E, void 0, v), E + ""));
      var E
    }
  }
]);