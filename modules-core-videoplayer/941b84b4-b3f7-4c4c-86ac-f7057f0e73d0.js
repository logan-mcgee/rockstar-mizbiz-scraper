try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    o = (new e.Error).stack;
  o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "941b84b4-b3f7-4c4c-86ac-f7057f0e73d0", e._sentryDebugIdIdentifier = "sentry-dbid-941b84b4-b3f7-4c4c-86ac-f7057f0e73d0")
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
  [5859, 8240], {
    2295: (e, o, t) => {
      "use strict";
      e.exports = t(9245)
    },
    2841: (e, o, t) => {
      "use strict";
      t.r(o), t.d(o, {
        FormattedMessage: () => s.A,
        POSIXLocales: () => w,
        ReactIntlProviderForMocking: () => i.A,
        createDevLocaleHook: () => E,
        createIntl: () => n.E,
        defineMessages: () => r.YK,
        englishLocale: () => b,
        getCookieValueByName: () => p,
        getLocale: () => k,
        linkWithLocale: () => L,
        localeCookieHandler: () => m,
        locales: () => h,
        onLanguageChange: () => j,
        splitLocale: () => $,
        useIntl: () => a.A,
        withIntl: () => O
      });
      var r = t(4944),
        s = t(2486),
        n = t(7497),
        a = t(597),
        i = t(9872),
        l = t(2295),
        c = t(2229),
        u = t(9867);
      const d = (e, o) => {
          if (!e || !o) return void console.log(`Couldn't set cookie (${e}) to value (${o})`);
          const t = window.location.hostname.split("."),
            r = t.slice(t.length - 2).join(".");
          document.cookie = `${e}=${o}; domain=${r}; path=/;`
        },
        p = e => {
          const o = document.cookie.split("; "),
            t = `${e}=`,
            r = o.find((e => e.startsWith(t))),
            s = r?.substring(t.length, r.length);
          return s
        },
        m = (e, o, t = !1) => {
          const r = p(e);
          return r && !t || d(e, o), [r, (s = e, e => {
            d(s, e)
          })];
          var s
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
        k = () => {
          const {
            location: e
          } = window, o = (0, u.A)(), t = (e => {
            const o = h.map((e => e.subdomaincom)),
              t = e.pathname.substring(1).split("/"),
              r = "detect-locals" === t[0] ? 1 : 0;
            return -1 !== o.indexOf(t[r]) ? t[r] : null
          })(e), r = (e => {
            const o = e.search.substring(1).split("&").find((e => e.startsWith("lang")));
            return o?.split("=")[1]
          })(e), s = b;
          let n = s;
          const a = `rockstarweb_lang.${o.cookieIdentifier}`,
            i = p(a);
          n = o.currentSite?.site === u.C.www ? h.find((e => e.subdomaincom === r)) || h.find((e => e.subdomaincom === t)) || s : h.find((e => e.iso === i)) || s;
          const [, l] = m(a, n.iso);
          return [n, l]
        };
      var g = t(5422);
      const _ = () => "en-US";

      function y(e) {
        const o = e.split("-");
        return (0, g.A)(o[1] ? o[0] : e, ["relativetimeformat", "pluralrules", "listformat"])
      }

      function v(e, o) {
        return e[o] ?? {}
      }

      function O(e, o, t, r) {
        return s => {
          const n = (0, c.useMemo)((() => {
            if (o) return function(e, o) {
              return function(e, o) {
                const t = o ?? k()[0].iso ?? _(),
                  [, r] = [y(t), v(e, t)];
                var s;
                return {
                  rsLocale: t,
                  locale: t,
                  messages: (s = r, {
                    ...s
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
            onError: r,
            children: n && (0, l.jsx)(e, {
              ...s
            })
          }, "intl-provider")
        }
      }

      function $(e) {
        let [o, t] = e.split(/[-_]/), r = t?.toLowerCase();
        return "cn" === r && (r = "hans"), o && t || (o = "en", r = "us"), [o, r]
      }
      const E = e => {
          if (!e.us || 0 === Object.keys(e?.us).length) throw new Error("createDevLocaleHook requires at least a 'us' key with definitions");
          return () => {
            const [{
              iso: o
            }] = k(), [t, r] = $(o);
            return e?.[r] ?? e.us
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
          const [o] = k(), {
            sites: t
          } = (0, u.A)();
          let r;
          try {
            r = new URL(e)
          } catch {
            r = null
          }
          if (r)
            for (const [s, {
                regex: n,
                isSubdomain: a,
                isLocaleInUrl: i,
                fieldName: l,
                externalPaths: c
              }] of Object.entries(x)) {
              if (!n.test(e.toLowerCase())) continue;
              const u = t[s];
              if (!u) continue;
              let d = "";
              "en" !== o.subdomaincom && i && (d = `/${o[l||"subdomaincom"]}`, "circoloco" === s && "/" === r.pathname && (d += "/"));
              const p = r.host.split(".");
              let m = "";
              return "www" !== s || c?.some((e => e.test(r.pathname))) ? (m += `https://${u}`, m += a ? `.${p.at(-2)}.${p.at(-1)}` : `.${p.at(-1)}`, {
                link: `${m}${d}${"/"===r.pathname?"":r.pathname}${r.search}`,
                isExternal: !0
              }) : {
                link: `${m}${"/"===r.pathname?"":r.pathname}${r.search}`,
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
          const r = (0, u.A)(),
            [, s] = k(),
            {
              subdomaincom: n,
              iso: a
            } = e,
            i = (e => {
              let o = location.pathname.replace(/^\/|\/$/g, "");
              const t = o.split("/");
              return h.map((e => e.subdomaincom)).includes(t[0]) && (o = t.slice(1).join("/")), r.currentSite?.site === u.C.www ? "en" === e ? `${window.location.origin}/${o}${location.search}` : `${window.location.origin}/${e}/${o}${location.search}` : `${window.location.origin}/${o}${location.search}`
            })(n);
          o?.({
            event: "cta_other",
            link_url: i,
            text: n,
            element_placement: t?.toLowerCase()
          }), s(a), window.location.href = i
        }
    },
    3019: (e, o, t) => {
      var r = {
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

      function s(e) {
        if (!t.o(r, e)) return Promise.resolve().then((() => {
          var o = new Error("Cannot find module '" + e + "'");
          throw o.code = "MODULE_NOT_FOUND", o
        }));
        var o = r[e],
          s = o[0];
        return t.e(o[1]).then((() => t.t(s, 23)))
      }
      s.keys = () => Object.keys(r), s.id = 3019, e.exports = s
    },
    3514: (e, o, t) => {
      var r = {
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

      function s(e) {
        if (!t.o(r, e)) return Promise.resolve().then((() => {
          var o = new Error("Cannot find module '" + e + "'");
          throw o.code = "MODULE_NOT_FOUND", o
        }));
        var o = r[e],
          s = o[0];
        return t.e(o[1]).then((() => t.t(s, 23)))
      }
      s.keys = () => Object.keys(r), s.id = 3514, e.exports = s
    },
    4375: (e, o, t) => {
      var r = {
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
        "./zh": [4333, 5832]
      };

      function s(e) {
        if (!t.o(r, e)) return Promise.resolve().then((() => {
          var o = new Error("Cannot find module '" + e + "'");
          throw o.code = "MODULE_NOT_FOUND", o
        }));
        var o = r[e],
          s = o[0];
        return t.e(o[1]).then((() => t.t(s, 23)))
      }
      s.keys = () => Object.keys(r), s.id = 4375, e.exports = s
    },
    4819: (e, o, t) => {
      var r = {
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

      function s(e) {
        if (!t.o(r, e)) return Promise.resolve().then((() => {
          var o = new Error("Cannot find module '" + e + "'");
          throw o.code = "MODULE_NOT_FOUND", o
        }));
        var o = r[e],
          s = o[0];
        return t.e(o[1]).then((() => t.t(s, 23)))
      }
      s.keys = () => Object.keys(r), s.id = 4819, e.exports = s
    },
    7648: (e, o, t) => {
      var r = {
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

      function s(e) {
        if (!t.o(r, e)) return Promise.resolve().then((() => {
          var o = new Error("Cannot find module '" + e + "'");
          throw o.code = "MODULE_NOT_FOUND", o
        }));
        var o = r[e],
          s = o[0];
        return t.e(o[1]).then((() => t.t(s, 23)))
      }
      s.keys = () => Object.keys(r), s.id = 7648, e.exports = s
    },
    8525: (e, o, t) => {
      var r = {
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

      function s(e) {
        if (!t.o(r, e)) return Promise.resolve().then((() => {
          var o = new Error("Cannot find module '" + e + "'");
          throw o.code = "MODULE_NOT_FOUND", o
        }));
        var o = r[e],
          s = o[0];
        return t.e(o[1]).then((() => t.t(s, 23)))
      }
      s.keys = () => Object.keys(r), s.id = 8525, e.exports = s
    },
    9245: (e, o, t) => {
      "use strict";
      var r = t(2229),
        s = Symbol.for("react.element"),
        n = Symbol.for("react.fragment"),
        a = Object.prototype.hasOwnProperty,
        i = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function c(e, o, t) {
        var r, n = {},
          c = null,
          u = null;
        for (r in void 0 !== t && (c = "" + t), void 0 !== o.key && (c = "" + o.key), void 0 !== o.ref && (u = o.ref), o) a.call(o, r) && !l.hasOwnProperty(r) && (n[r] = o[r]);
        if (e && e.defaultProps)
          for (r in o = e.defaultProps) void 0 === n[r] && (n[r] = o[r]);
        return {
          $$typeof: s,
          type: e,
          key: c,
          ref: u,
          props: n,
          _owner: i.current
        }
      }
      o.Fragment = n, o.jsx = c, o.jsxs = c
    },
    9867: (e, o, t) => {
      "use strict";
      t.d(o, {
        A: () => n,
        C: () => r
      });
      const r = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store",
          circoloco: "circoloco",
          supportNew: "support"
        },
        s = [{
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
          } = window, t = o.hostname.substring(0, o.hostname.indexOf(".rockstargames.com")), r = s.findIndex((o => Object.entries(o.sites).findIndex((([o, r]) => r === t && (e = {
            site: o,
            subDomain: r
          }, !0))) >= 0)), n = s[r >= 0 ? r : 0];
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