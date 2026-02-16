try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    o = (new e.Error).stack;
  o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "af77c261-d2d5-4d62-89f0-7207fe63b3c5", e._sentryDebugIdIdentifier = "sentry-dbid-af77c261-d2d5-4d62-89f0-7207fe63b3c5")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-legacy",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || []).push([
  [5859, 8240], {
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

      function r(e) {
        if (!t.o(s, e)) return Promise.resolve().then(() => {
          var o = new Error("Cannot find module '" + e + "'");
          throw o.code = "MODULE_NOT_FOUND", o
        });
        var o = s[e],
          r = o[0];
        return t.e(o[1]).then(() => t.t(r, 23))
      }
      r.keys = () => Object.keys(s), r.id = 5267, e.exports = r
    },
    12841: (e, o, t) => {
      "use strict";
      t.r(o), t.d(o, {
        FormattedMessage: () => r.A,
        POSIXLocales: () => h,
        ReactIntlProviderForMocking: () => a.A,
        createDevLocaleHook: () => E,
        createIntl: () => n.E,
        defineMessages: () => s.YK,
        englishLocale: () => b,
        getCookieValueByName: () => p,
        getLocale: () => g,
        linkWithLocale: () => L,
        localeCookieHandler: () => m,
        locales: () => w,
        onLanguageChange: () => j,
        splitLocale: () => O,
        useIntl: () => i.A,
        withIntl: () => $
      });
      var s = t(24944),
        r = t(62486),
        n = t(47497),
        i = t(30597),
        a = t(9872),
        l = t(42295),
        c = t(62229),
        u = t(79867);
      const d = (e, o) => {
          if (!e || !o) return void console.log(`Couldn't set cookie (${e}) to value (${o})`);
          const t = window.location.hostname.split("."),
            s = t.slice(t.length - 2).join(".");
          document.cookie = `${e}=${o}; domain=${s}; path=/;`
        },
        p = e => {
          const o = document.cookie.split("; "),
            t = `${e}=`,
            s = o.find(e => e.startsWith(t)),
            r = s?.substring(t.length, s.length);
          return r
        },
        m = (e, o, t = !1) => {
          const s = p(e);
          return s && !t || d(e, o), [s, (r = e, e => {
            d(r, e)
          })];
          var r
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
        h = ["de_de", "fr_fr", "it_it", "ja_jp", "ru_ru", "es_es", "es_mx", "pt_br", "ko_kr", "zh_tw", "pl_pl", "zh_hans"],
        w = f,
        g = () => {
          const {
            location: e
          } = window, o = (0, u.A)(), t = (e => {
            const o = w.map(e => e.subdomaincom),
              t = e.pathname.substring(1).split("/"),
              s = "detect-locals" === t[0] ? 1 : 0;
            return -1 !== o.indexOf(t[s]) ? t[s] : null
          })(e), s = (e => {
            const o = e.search.substring(1).split("&").find(e => e.startsWith("lang"));
            return o?.split("=")[1]
          })(e), r = b;
          let n = r;
          const i = `rockstarweb_lang.${o.cookieIdentifier}`,
            a = p(i);
          n = o.currentSite?.site === u.C.www ? w.find(e => e.subdomaincom === s) || w.find(e => e.subdomaincom === t) || r : w.find(e => e.iso === a) || r;
          const [, l] = m(i, n.iso);
          return [n, l]
        };
      var k = t(55422);
      const _ = () => "en-US";

      function y(e) {
        const o = e.split("-");
        return (0, k.A)(o[1] ? o[0] : e, ["relativetimeformat", "pluralrules", "listformat"])
      }

      function v(e, o) {
        return e[o] ?? {}
      }

      function $(e, o, t, s) {
        return r => {
          const n = (0, c.useMemo)(() => {
            if (o) return function(e, o) {
              return function(e, o) {
                const t = o ?? g()[0].iso ?? _(),
                  [, s] = [y(t), v(e, t)];
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
          }, [t]);
          return (0, l.jsx)(a.A, {
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

      function O(e) {
        let [o, t] = e.split(/[-_]/), s = t?.toLowerCase();
        return "cn" === s && (s = "hans"), o && t || (o = "en", s = "us"), [o, s]
      }
      const E = e => {
          if (!e.us || 0 === Object.keys(e?.us).length) throw new Error("createDevLocaleHook requires at least a 'us' key with definitions");
          return () => {
            const [{
              iso: o
            }] = g(), [t, s] = O(o);
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
                isSubdomain: i,
                isLocaleInUrl: a,
                fieldName: l,
                externalPaths: c
              }] of Object.entries(x)) {
              if (!n.test(e.toLowerCase())) continue;
              const u = t[r];
              if (!u) continue;
              let d = "";
              "en" !== o.subdomaincom && a && (d = `/${o[l||"subdomaincom"]}`, "circoloco" === r && "/" === s.pathname && (d += "/"));
              const p = s.host.split(".");
              let m = "";
              return "www" !== r || c?.some(e => e.test(s.pathname)) ? (m += `https://${u}`, m += i ? `.${p.at(-2)}.${p.at(-1)}` : `.${p.at(-1)}`, {
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
        j = ({
          selectedLocale: e,
          track: o,
          parent: t = ""
        }) => {
          const s = (0, u.A)(),
            [, r] = g(),
            {
              subdomaincom: n,
              iso: i
            } = e,
            a = (e => {
              let o = location.pathname.replace(/^\/|\/$/g, "");
              const t = o.split("/");
              return w.map(e => e.subdomaincom).includes(t[0]) && (o = t.slice(1).join("/")), s.currentSite?.site === u.C.www ? "en" === e ? `${window.location.origin}/${o}${location.search}` : `${window.location.origin}/${e}/${o}${location.search}` : `${window.location.origin}/${o}${location.search}`
            })(n);
          o?.({
            event: "cta_other",
            link_url: a,
            text: n,
            element_placement: t?.toLowerCase()
          }), r(i), window.location.href = a
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
        "./ko": [53620, 9028],
        "./pl": [31645, 1242],
        "./pt": [93669, 7970],
        "./ru": [81520, 7453],
        "./zh": [23907, 8880]
      };

      function r(e) {
        if (!t.o(s, e)) return Promise.resolve().then(() => {
          var o = new Error("Cannot find module '" + e + "'");
          throw o.code = "MODULE_NOT_FOUND", o
        });
        var o = s[e],
          r = o[0];
        return t.e(o[1]).then(() => t.t(r, 23))
      }
      r.keys = () => Object.keys(s), r.id = 33019, e.exports = r
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

      function r(e) {
        if (!t.o(s, e)) return Promise.resolve().then(() => {
          var o = new Error("Cannot find module '" + e + "'");
          throw o.code = "MODULE_NOT_FOUND", o
        });
        var o = s[e],
          r = o[0];
        return t.e(o[1]).then(() => t.t(r, 23))
      }
      r.keys = () => Object.keys(s), r.id = 38525, e.exports = r
    },
    42295: (e, o, t) => {
      "use strict";
      e.exports = t(69245)
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

      function r(e) {
        if (!t.o(s, e)) return Promise.resolve().then(() => {
          var o = new Error("Cannot find module '" + e + "'");
          throw o.code = "MODULE_NOT_FOUND", o
        });
        var o = s[e],
          r = o[0];
        return t.e(o[1]).then(() => t.t(r, 23))
      }
      r.keys = () => Object.keys(s), r.id = 63514, e.exports = r
    },
    69245: (e, o, t) => {
      "use strict";
      var s = t(62229),
        r = Symbol.for("react.element"),
        n = Symbol.for("react.fragment"),
        i = Object.prototype.hasOwnProperty,
        a = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function c(e, o, t) {
        var s, n = {},
          c = null,
          u = null;
        for (s in void 0 !== t && (c = "" + t), void 0 !== o.key && (c = "" + o.key), void 0 !== o.ref && (u = o.ref), o) i.call(o, s) && !l.hasOwnProperty(s) && (n[s] = o[s]);
        if (e && e.defaultProps)
          for (s in o = e.defaultProps) void 0 === n[s] && (n[s] = o[s]);
        return {
          $$typeof: r,
          type: e,
          key: c,
          ref: u,
          props: n,
          _owner: a.current
        }
      }
      o.Fragment = n, o.jsx = c, o.jsxs = c
    },
    79867: (e, o, t) => {
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
          } = window, t = o.hostname.substring(0, o.hostname.indexOf(".rockstargames.com")), s = r.findIndex(o => Object.entries(o.sites).findIndex(([o, s]) => s === t && (e = {
            site: o,
            subDomain: s
          }, !0)) >= 0), n = r[s >= 0 ? s : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...n,
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

      function r(e) {
        if (!t.o(s, e)) return Promise.resolve().then(() => {
          var o = new Error("Cannot find module '" + e + "'");
          throw o.code = "MODULE_NOT_FOUND", o
        });
        var o = s[e],
          r = o[0];
        return t.e(o[1]).then(() => t.t(r, 23))
      }
      r.keys = () => Object.keys(s), r.id = 94375, e.exports = r
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

      function r(e) {
        if (!t.o(s, e)) return Promise.resolve().then(() => {
          var o = new Error("Cannot find module '" + e + "'");
          throw o.code = "MODULE_NOT_FOUND", o
        });
        var o = s[e],
          r = o[0];
        return t.e(o[1]).then(() => t.t(r, 23))
      }
      r.keys = () => Object.keys(s), r.id = 94819, e.exports = r
    }
  }
]);