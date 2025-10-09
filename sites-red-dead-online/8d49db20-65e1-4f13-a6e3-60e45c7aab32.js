try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    o = (new e.Error).stack;
  o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "8d49db20-65e1-4f13-a6e3-60e45c7aab32", e._sentryDebugIdIdentifier = "sentry-dbid-8d49db20-65e1-4f13-a6e3-60e45c7aab32")
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
  [8240], {
    5267: (e, o, t) => {
      var s = {
        "./de": [406, 299],
        "./en": [20874, 5663],
        "./es": [4013, 5530],
        "./fr": [84965, 2466],
        "./it": [48596, 7073],
        "./ja": [24656, 4621],
        "./ko": [75451, 824],
        "./pl": [86273, 2398],
        "./pt": [16585, 9126],
        "./ru": [77284, 3697],
        "./zh": [11615, 1868]
      };

      function n(e) {
        if (!t.o(s, e)) return Promise.resolve().then((() => {
          var o = new Error("Cannot find module '" + e + "'");
          throw o.code = "MODULE_NOT_FOUND", o
        }));
        var o = s[e],
          n = o[0];
        return t.e(o[1]).then((() => t.t(n, 23)))
      }
      n.keys = () => Object.keys(s), n.id = 5267, e.exports = n
    },
    12841: (e, o, t) => {
      "use strict";
      t.r(o), t.d(o, {
        FormattedMessage: () => n.A,
        POSIXLocales: () => w,
        ReactIntlProviderForMocking: () => a.A,
        createDevLocaleHook: () => O,
        createIntl: () => r.E,
        defineMessages: () => s.YK,
        englishLocale: () => b,
        getCookieValueByName: () => m,
        getLocale: () => g,
        linkWithLocale: () => L,
        localeCookieHandler: () => p,
        locales: () => h,
        onLanguageChange: () => j,
        splitLocale: () => E,
        useIntl: () => i.A,
        withIntl: () => v
      });
      var s = t(24944),
        n = t(62486),
        r = t(47497),
        i = t(30597),
        a = t(9872),
        l = t(42295),
        c = t(62229),
        d = t(79867);
      const u = (e, o) => {
          if (!e || !o) return void console.log(`Couldn't set cookie (${e}) to value (${o})`);
          const t = window.location.hostname.split("."),
            s = t.slice(t.length - 2).join(".");
          document.cookie = `${e}=${o}; domain=${s}; path=/;`
        },
        m = e => {
          const o = document.cookie.split("; "),
            t = `${e}=`,
            s = o.find((e => e.startsWith(t))),
            n = s?.substring(t.length, s.length);
          return n
        },
        p = (e, o, t = !1) => {
          const s = m(e);
          return s && !t || u(e, o), [s, (n = e, e => {
            u(n, e)
          })];
          var n
        },
        f = [{
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
        b = f[0],
        w = ["de_de", "fr_fr", "it_it", "ja_jp", "ru_ru", "es_es", "es_mx", "pt_br", "ko_kr", "zh_tw", "pl_pl", "zh_hans"],
        h = f,
        g = () => {
          const {
            location: e
          } = window, o = (0, d.A)(), t = (e => {
            const o = h.map((e => e.subdomaincom)),
              t = e.pathname.substring(1).split("/"),
              s = "detect-locals" === t[0] ? 1 : 0;
            return -1 !== o.indexOf(t[s]) ? t[s] : null
          })(e), s = (e => {
            const o = e.search.substring(1).split("&").find((e => e.startsWith("lang")));
            return o?.split("=")[1]
          })(e), n = b;
          let r = n;
          const i = `rockstarweb_lang.${o.cookieIdentifier}`,
            a = m(i);
          r = o.currentSite?.site === d.C.www ? h.find((e => e.subdomaincom === s)) || h.find((e => e.subdomaincom === t)) || n : h.find((e => e.iso === a)) || n;
          const [, l] = p(i, r.iso);
          return [r, l]
        };
      var k = t(55422);
      const _ = () => "en-US";

      function y(e) {
        const o = e.split("-");
        return (0, k.A)(o[1] ? o[0] : e, ["relativetimeformat", "pluralrules", "listformat"])
      }

      function $(e, o) {
        return e[o] ?? {}
      }

      function v(e, o, t, s) {
        return n => {
          const r = (0, c.useMemo)((() => {
            if (o) return function(e, o) {
              return function(e, o) {
                const t = o ?? g()[0].iso ?? _(),
                  [, s] = [y(t), $(e, t)];
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
          }), [t]);
          return (0, l.jsx)(a.A, {
            locale: r?.locale || _(),
            messages: {
              ...r?.messages
            },
            onError: s,
            children: r && (0, l.jsx)(e, {
              ...n
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
          } = (0, d.A)();
          let s;
          try {
            s = new URL(e)
          } catch {
            s = null
          }
          if (s)
            for (const [n, {
                regex: r,
                isSubdomain: i,
                isLocaleInUrl: a,
                fieldName: l,
                externalPaths: c
              }] of Object.entries(x)) {
              if (!r.test(e.toLowerCase())) continue;
              const d = t[n];
              if (!d) continue;
              let u = "";
              "en" !== o.subdomaincom && a && (u = `/${o[l||"subdomaincom"]}`, "circoloco" === n && "/" === s.pathname && (u += "/"));
              const m = s.host.split(".");
              let p = "";
              return "www" !== n || c?.some((e => e.test(s.pathname))) ? (p += `https://${d}`, p += i ? `.${m.at(-2)}.${m.at(-1)}` : `.${m.at(-1)}`, {
                link: `${p}${u}${"/"===s.pathname?"":s.pathname}${s.search}`,
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
          const s = (0, d.A)(),
            [, n] = g(),
            {
              subdomaincom: r,
              iso: i
            } = e,
            a = (e => {
              let o = location.pathname.replace(/^\/|\/$/g, "");
              const t = o.split("/");
              return h.map((e => e.subdomaincom)).includes(t[0]) && (o = t.slice(1).join("/")), s.currentSite?.site === d.C.www ? "en" === e ? `${window.location.origin}/${o}${location.search}` : `${window.location.origin}/${e}/${o}${location.search}` : `${window.location.origin}/${o}${location.search}`
            })(r);
          o?.({
            event: "cta_other",
            link_url: a,
            text: r,
            element_placement: t?.toLowerCase()
          }), n(i), window.location.href = a
        }
    },
    33019: (e, o, t) => {
      var s = {
        "./de": [62666, 6879],
        "./en": [89390, 2243],
        "./es": [28697, 278],
        "./fr": [87185, 9022],
        "./it": [31872, 2365],
        "./ja": [3476, 9377],
        "./ko": [31239, 9028],
        "./pl": [31645, 1242],
        "./pt": [93669, 7970],
        "./ru": [81520, 7453],
        "./zh": [23907, 8880]
      };

      function n(e) {
        if (!t.o(s, e)) return Promise.resolve().then((() => {
          var o = new Error("Cannot find module '" + e + "'");
          throw o.code = "MODULE_NOT_FOUND", o
        }));
        var o = s[e],
          n = o[0];
        return t.e(o[1]).then((() => t.t(n, 23)))
      }
      n.keys = () => Object.keys(s), n.id = 33019, e.exports = n
    },
    38525: (e, o, t) => {
      var s = {
        "./de": [55149, 9990],
        "./en": [78517, 1822],
        "./es": [16258, 2347],
        "./fr": [36170, 131],
        "./it": [45583, 8272],
        "./ja": [25571, 7436],
        "./ko": [78284, 2221],
        "./pl": [79682, 2171],
        "./pt": [22762, 8755],
        "./ru": [41007, 2864],
        "./zh": [78548, 3197]
      };

      function n(e) {
        if (!t.o(s, e)) return Promise.resolve().then((() => {
          var o = new Error("Cannot find module '" + e + "'");
          throw o.code = "MODULE_NOT_FOUND", o
        }));
        var o = s[e],
          n = o[0];
        return t.e(o[1]).then((() => t.t(n, 23)))
      }
      n.keys = () => Object.keys(s), n.id = 38525, e.exports = n
    },
    63514: (e, o, t) => {
      var s = {
        "./de": [1367, 4710],
        "./en": [80579, 3486],
        "./es": [47304, 4011],
        "./fr": [22436, 4851],
        "./it": [80665, 9936],
        "./ja": [89729, 2156],
        "./ko": [45414, 3885],
        "./pl": [54156, 6891],
        "./pt": [772, 3475],
        "./ru": [88501, 4528],
        "./zh": [68282, 4861]
      };

      function n(e) {
        if (!t.o(s, e)) return Promise.resolve().then((() => {
          var o = new Error("Cannot find module '" + e + "'");
          throw o.code = "MODULE_NOT_FOUND", o
        }));
        var o = s[e],
          n = o[0];
        return t.e(o[1]).then((() => t.t(n, 23)))
      }
      n.keys = () => Object.keys(s), n.id = 63514, e.exports = n
    },
    79867: (e, o, t) => {
      "use strict";
      t.d(o, {
        A: () => r,
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
        n = [{
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
          } = window, t = o.hostname.substring(0, o.hostname.indexOf(".rockstargames.com")), s = n.findIndex((o => Object.entries(o.sites).findIndex((([o, s]) => s === t && (e = {
            site: o,
            subDomain: s
          }, !0))) >= 0)), r = n[s >= 0 ? s : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...r,
            currentSite: e
          }
        }
    },
    94375: (e, o, t) => {
      var s = {
        "./de": [11464, 5639],
        "./en": [73872, 6267],
        "./es": [36507, 5742],
        "./fr": [90031, 2678],
        "./it": [19006, 6997],
        "./ja": [53142, 6361],
        "./ko": [82189, 7452],
        "./pl": [86283, 2642],
        "./pt": [6515, 3034],
        "./ru": [7746, 3941],
        "./zh": [84333, 5832]
      };

      function n(e) {
        if (!t.o(s, e)) return Promise.resolve().then((() => {
          var o = new Error("Cannot find module '" + e + "'");
          throw o.code = "MODULE_NOT_FOUND", o
        }));
        var o = s[e],
          n = o[0];
        return t.e(o[1]).then((() => t.t(n, 23)))
      }
      n.keys = () => Object.keys(s), n.id = 94375, e.exports = n
    },
    94819: (e, o, t) => {
      var s = {
        "./de": [17894, 5259],
        "./en": [61658, 4799],
        "./es": [28637, 3370],
        "./fr": [83157, 7010],
        "./it": [89060, 4913],
        "./ja": [6688, 6285],
        "./ko": [64907, 6664],
        "./pl": [78097, 1054],
        "./pt": [68953, 662],
        "./ru": [87924, 5233],
        "./zh": [76975, 4700]
      };

      function n(e) {
        if (!t.o(s, e)) return Promise.resolve().then((() => {
          var o = new Error("Cannot find module '" + e + "'");
          throw o.code = "MODULE_NOT_FOUND", o
        }));
        var o = s[e],
          n = o[0];
        return t.e(o[1]).then((() => t.t(n, 23)))
      }
      n.keys = () => Object.keys(s), n.id = 94819, e.exports = n
    }
  }
]);