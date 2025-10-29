try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    o = (new e.Error).stack;
  o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "f2a63cb9-f815-46a3-9ca4-9845e1451b9d", e._sentryDebugIdIdentifier = "sentry-dbid-f2a63cb9-f815-46a3-9ca4-9845e1451b9d")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-careers",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_careers = self.webpackChunk_rockstargames_sites_careers || []).push([
  [8240], {
    2841: (e, o, t) => {
      "use strict";
      t.r(o), t.d(o, {
        FormattedMessage: () => r.A,
        POSIXLocales: () => w,
        ReactIntlProviderForMocking: () => i.A,
        createDevLocaleHook: () => O,
        createIntl: () => n.E,
        defineMessages: () => s.YK,
        englishLocale: () => f,
        getCookieValueByName: () => m,
        getLocale: () => g,
        linkWithLocale: () => L,
        localeCookieHandler: () => p,
        locales: () => h,
        onLanguageChange: () => j,
        splitLocale: () => E,
        useIntl: () => a.A,
        withIntl: () => v
      });
      var s = t(4944),
        r = t(2486),
        n = t(7497),
        a = t(597),
        i = t(9872),
        l = t(2295),
        c = t(2229),
        u = t(9867);
      const d = (e, o) => {
          if (!e || !o) return void console.log(`Couldn't set cookie (${e}) to value (${o})`);
          const t = window.location.hostname.split("."),
            s = t.slice(t.length - 2).join(".");
          document.cookie = `${e}=${o}; domain=${s}; path=/;`
        },
        m = e => {
          const o = document.cookie.split("; "),
            t = `${e}=`,
            s = o.find((e => e.startsWith(t))),
            r = s?.substring(t.length, s.length);
          return r
        },
        p = (e, o, t = !1) => {
          const s = m(e);
          return s && !t || d(e, o), [s, (r = e, e => {
            d(r, e)
          })];
          var r
        },
        b = [{
          label: "English",
          subdomain: "en-US",
          subdomaincom: "en",
          support: "us",
          iso: "en-US",
          store: "en"
        }, {
          label: "Deutsch",
          subdomain: "de",
          subdomaincom: "de",
          support: "de",
          iso: "de-DE",
          store: "de"
        }, {
          label: "Español",
          subdomain: "es",
          subdomaincom: "es",
          support: "es",
          iso: "es-ES",
          store: "es"
        }, {
          label: "Español Latinoamérica",
          subdomain: "es-mx",
          subdomaincom: "mx",
          support: "es-mx",
          iso: "es-MX",
          store: "es-419"
        }, {
          label: "Français",
          subdomain: "fr",
          subdomaincom: "fr",
          support: "fr",
          iso: "fr-FR",
          store: "fr"
        }, {
          label: "Italiano",
          subdomain: "it",
          subdomaincom: "it",
          support: "it",
          iso: "it-IT",
          store: "it"
        }, {
          label: "日本語",
          subdomain: "ja",
          subdomaincom: "jp",
          support: "jp",
          iso: "ja-JP",
          store: "ja"
        }, {
          label: "한국어",
          subdomain: "ko",
          subdomaincom: "kr",
          support: "kr",
          iso: "ko-KR",
          store: "ko"
        }, {
          label: "Polski",
          subdomain: "pl",
          subdomaincom: "pl",
          support: "pl",
          iso: "pl-PL",
          store: "pl"
        }, {
          label: "Português do Brasil",
          subdomain: "pt",
          subdomaincom: "br",
          support: "br",
          iso: "pt-BR",
          store: "pt-BR"
        }, {
          label: "Русский",
          subdomain: "ru",
          subdomaincom: "ru",
          support: "ru",
          iso: "ru-RU",
          store: "ru"
        }, {
          label: "繁體中文",
          subdomain: "zh",
          subdomaincom: "tw",
          support: "tw",
          iso: "zh-TW",
          store: "zh-Hant"
        }, {
          label: "简体中文",
          subdomain: "zh-cn",
          subdomaincom: "zh",
          support: "zh",
          iso: "zh-CN",
          store: "zh-CN"
        }],
        f = b[0],
        w = ["de_de", "fr_fr", "it_it", "ja_jp", "ru_ru", "es_es", "es_mx", "pt_br", "ko_kr", "zh_tw", "pl_pl", "zh_hans"],
        h = b,
        g = () => {
          const {
            location: e
          } = window, o = (0, u.A)(), t = (e => {
            const o = h.map((e => e.subdomaincom)),
              t = e.pathname.substring(1).split("/"),
              s = "detect-locals" === t[0] ? 1 : 0;
            return -1 !== o.indexOf(t[s]) ? t[s] : null
          })(e), s = (e => {
            const o = e.search.substring(1).split("&").find((e => e.startsWith("lang")));
            return o?.split("=")[1]
          })(e), r = f;
          let n = r;
          const a = `rockstarweb_lang.${o.cookieIdentifier}`,
            i = m(a);
          n = o.currentSite?.site === u.C.www ? h.find((e => e.subdomaincom === s)) || h.find((e => e.subdomaincom === t)) || r : h.find((e => e.iso === i)) || r;
          const [, l] = p(a, n.iso);
          return [n, l]
        };
      var k = t(5422);
      const _ = () => "en-US";

      function y(e) {
        const o = e.split("-");
        return (0, k.A)(o[1] ? o[0] : e, ["relativetimeformat", "pluralrules", "listformat"])
      }

      function $(e, o) {
        return e[o] ?? {}
      }

      function v(e, o, t, s) {
        return r => {
          const n = (0, c.useMemo)((() => {
            if (o) return function(e, o) {
              return function(e, o) {
                const t = o ?? g()[0].iso ?? _(),
                  [, s] = [y(t), $(e, t)];
                var r;
                return {
                  rsLocale: t,
                  locale: t,
                  messages: (r = s, {
                    ...r
                  })
                }
              }(e, o)
            }(o, t)
          }), [t]);
          return (0, l.jsx)(i.A, {
            locale: n?.locale || _(),
            messages: {
              ...n?.messages
            },
            onError: s,
            children: n && (0, l.jsx)(e, {
              ...r
            })
          }, "intl-provider")
        }
      }

      function E(e) {
        let [o, t] = e.split(/[-_]/), s = t?.toLowerCase();
        return "cn" === s && (s = "hans"), o && t || (o = "en", s = "us"), [o, s]
      }
      const O = e => {
          if (!e.us || 0 === Object.keys(e?.us).length) throw new Error("createDevLocaleHook requires at least a 'us' key with definitions");
          return () => {
            const [{
              iso: o
            }] = g(), [t, s] = E(o);
            return e?.[s] ?? e.us
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
        L = e => {
          const [o] = g(), {
            sites: t
          } = (0, u.A)();
          let s;
          try {
            s = new URL(e)
          } catch {
            s = null
          }
          if (s)
            for (const [r, {
                regex: n,
                isSubdomain: a,
                isLocaleInUrl: i,
                fieldName: l,
                externalPaths: c
              }] of Object.entries(x)) {
              if (!n.test(e.toLowerCase())) continue;
              const u = t[r];
              if (!u) continue;
              let d = "";
              "en" !== o.subdomaincom && i && (d = `/${o[l||"subdomaincom"]}`, "circoloco" === r && "/" === s.pathname && (d += "/"));
              const m = s.host.split(".");
              let p = "";
              return "www" !== r || c?.some((e => e.test(s.pathname))) ? (p += `https://${u}`, p += a ? `.${m.at(-2)}.${m.at(-1)}` : `.${m.at(-1)}`, {
                link: `${p}${d}${"/"===s.pathname?"":s.pathname}${s.search}`,
                isExternal: !0
              }) : {
                link: `${p}${"/"===s.pathname?"":s.pathname}${s.search}`,
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
        j = ({
          selectedLocale: e,
          track: o,
          parent: t = ""
        }) => {
          const s = (0, u.A)(),
            [, r] = g(),
            {
              subdomaincom: n,
              iso: a
            } = e,
            i = (e => {
              let o = location.pathname.replace(/^\/|\/$/g, "");
              const t = o.split("/");
              return h.map((e => e.subdomaincom)).includes(t[0]) && (o = t.slice(1).join("/")), s.currentSite?.site === u.C.www ? "en" === e ? `${window.location.origin}/${o}${location.search}` : `${window.location.origin}/${e}/${o}${location.search}` : `${window.location.origin}/${o}${location.search}`
            })(n);
          o?.({
            event: "cta_other",
            link_url: i,
            text: n,
            element_placement: t?.toLowerCase()
          }), r(a), window.location.href = i
        }
    },
    3019: (e, o, t) => {
      var s = {
        "./de": [2666, 6879],
        "./en": [9390, 2243],
        "./es": [8697, 278],
        "./fr": [7185, 9022],
        "./it": [1872, 2365],
        "./ja": [3476, 9377],
        "./ko": [1239, 9028],
        "./pl": [1645, 1242],
        "./pt": [3669, 7970],
        "./ru": [1520, 7453],
        "./zh": [3907, 8880]
      };

      function r(e) {
        if (!t.o(s, e)) return Promise.resolve().then((() => {
          var o = new Error("Cannot find module '" + e + "'");
          throw o.code = "MODULE_NOT_FOUND", o
        }));
        var o = s[e],
          r = o[0];
        return t.e(o[1]).then((() => t.t(r, 23)))
      }
      r.keys = () => Object.keys(s), r.id = 3019, e.exports = r
    },
    3514: (e, o, t) => {
      var s = {
        "./de": [1367, 4710],
        "./en": [579, 3486],
        "./es": [7304, 4011],
        "./fr": [2436, 4851],
        "./it": [665, 9936],
        "./ja": [9729, 2156],
        "./ko": [5414, 3885],
        "./pl": [4156, 6891],
        "./pt": [8391, 3475],
        "./ru": [8501, 4528],
        "./zh": [8282, 4861]
      };

      function r(e) {
        if (!t.o(s, e)) return Promise.resolve().then((() => {
          var o = new Error("Cannot find module '" + e + "'");
          throw o.code = "MODULE_NOT_FOUND", o
        }));
        var o = s[e],
          r = o[0];
        return t.e(o[1]).then((() => t.t(r, 23)))
      }
      r.keys = () => Object.keys(s), r.id = 3514, e.exports = r
    },
    4375: (e, o, t) => {
      var s = {
        "./de": [1464, 5639],
        "./en": [3872, 6267],
        "./es": [6507, 5742],
        "./fr": [31, 2678],
        "./it": [6625, 6997],
        "./ja": [3142, 6361],
        "./ko": [2189, 7452],
        "./pl": [6283, 2642],
        "./pt": [6515, 3034],
        "./ru": [7746, 3941],
        "./zh": [4333, 3451]
      };

      function r(e) {
        if (!t.o(s, e)) return Promise.resolve().then((() => {
          var o = new Error("Cannot find module '" + e + "'");
          throw o.code = "MODULE_NOT_FOUND", o
        }));
        var o = s[e],
          r = o[0];
        return t.e(o[1]).then((() => t.t(r, 23)))
      }
      r.keys = () => Object.keys(s), r.id = 4375, e.exports = r
    },
    4819: (e, o, t) => {
      var s = {
        "./de": [7894, 5259],
        "./en": [1658, 4799],
        "./es": [8637, 3370],
        "./fr": [3157, 7010],
        "./it": [9060, 4913],
        "./ja": [6688, 6285],
        "./ko": [4907, 6664],
        "./pl": [8097, 1054],
        "./pt": [8953, 662],
        "./ru": [7924, 5233],
        "./zh": [6975, 4700]
      };

      function r(e) {
        if (!t.o(s, e)) return Promise.resolve().then((() => {
          var o = new Error("Cannot find module '" + e + "'");
          throw o.code = "MODULE_NOT_FOUND", o
        }));
        var o = s[e],
          r = o[0];
        return t.e(o[1]).then((() => t.t(r, 23)))
      }
      r.keys = () => Object.keys(s), r.id = 4819, e.exports = r
    },
    7648: (e, o, t) => {
      var s = {
        "./de": [406, 299],
        "./en": [874, 5663],
        "./es": [4013, 5530],
        "./fr": [4965, 2466],
        "./it": [8596, 7073],
        "./ja": [4656, 4621],
        "./ko": [5451, 824],
        "./pl": [6273, 2398],
        "./pt": [6585, 9126],
        "./ru": [7284, 3697],
        "./zh": [1615, 1868]
      };

      function r(e) {
        if (!t.o(s, e)) return Promise.resolve().then((() => {
          var o = new Error("Cannot find module '" + e + "'");
          throw o.code = "MODULE_NOT_FOUND", o
        }));
        var o = s[e],
          r = o[0];
        return t.e(o[1]).then((() => t.t(r, 23)))
      }
      r.keys = () => Object.keys(s), r.id = 7648, e.exports = r
    },
    8525: (e, o, t) => {
      var s = {
        "./de": [5149, 9990],
        "./en": [8517, 1822],
        "./es": [3877, 2347],
        "./fr": [6170, 131],
        "./it": [5583, 8272],
        "./ja": [5571, 7436],
        "./ko": [8284, 2221],
        "./pl": [9682, 2171],
        "./pt": [2762, 8755],
        "./ru": [1007, 2864],
        "./zh": [8548, 3197]
      };

      function r(e) {
        if (!t.o(s, e)) return Promise.resolve().then((() => {
          var o = new Error("Cannot find module '" + e + "'");
          throw o.code = "MODULE_NOT_FOUND", o
        }));
        var o = s[e],
          r = o[0];
        return t.e(o[1]).then((() => t.t(r, 23)))
      }
      r.keys = () => Object.keys(s), r.id = 8525, e.exports = r
    },
    9867: (e, o, t) => {
      "use strict";
      t.d(o, {
        A: () => n,
        C: () => s
      });
      const s = {
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
        n = () => {
          let e;
          const {
            location: o
          } = window, t = o.hostname.substring(0, o.hostname.indexOf(".rockstargames.com")), s = r.findIndex((o => Object.entries(o.sites).findIndex((([o, s]) => s === t && (e = {
            site: o,
            subDomain: s
          }, !0))) >= 0)), n = r[s >= 0 ? s : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...n,
            currentSite: e
          }
        }
    }
  }
]);