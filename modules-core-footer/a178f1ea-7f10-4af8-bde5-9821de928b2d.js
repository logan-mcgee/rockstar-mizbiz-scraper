try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    o = (new e.Error).stack;
  o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "a178f1ea-7f10-4af8-bde5-9821de928b2d", e._sentryDebugIdIdentifier = "sentry-dbid-a178f1ea-7f10-4af8-bde5-9821de928b2d")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-footer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_footer = self.webpackChunk_rockstargames_modules_core_footer || []).push([
  [7557], {
    2319: (e, o, t) => {
      "use strict";
      t.r(o), t.d(o, {
        FormattedMessage: () => c,
        POSIXLocales: () => E,
        ReactIntlProviderForMocking: () => m.A,
        createDevLocaleHook: () => U,
        createIntl: () => u.E,
        defineMessages: () => d.YK,
        englishLocale: () => $,
        getCookieValueByName: () => k,
        getLocale: () => P,
        linkWithLocale: () => D,
        localeCookieHandler: () => v,
        locales: () => O,
        onLanguageChange: () => I,
        splitLocale: () => M,
        useIntl: () => r.A,
        withIntl: () => N
      });
      var a = t(78322),
        n = t(71127),
        s = t(55165),
        r = t(30597);

      function l(e) {
        var o = (0, r.A)(),
          t = o.formatMessage,
          a = o.textComponent,
          s = void 0 === a ? n.Fragment : a,
          l = e.id,
          i = e.description,
          c = e.defaultMessage,
          d = e.values,
          u = e.children,
          m = e.tagName,
          f = void 0 === m ? s : m,
          p = t({
            id: l,
            description: i,
            defaultMessage: c
          }, d, {
            ignoreTag: e.ignoreTag
          });
        return "function" == typeof u ? u(Array.isArray(p) ? p : [p]) : f ? n.createElement(f, null, p) : n.createElement(n.Fragment, null, p)
      }
      l.displayName = "FormattedMessage";
      var i = n.memo(l, function(e, o) {
        var t = e.values,
          n = (0, a.__rest)(e, ["values"]),
          r = o.values,
          l = (0, a.__rest)(o, ["values"]);
        return (0, s.bN)(r, t) && (0, s.bN)(n, l)
      });
      i.displayName = "MemoizedFormattedMessage";
      const c = i;
      var d = t(24944),
        u = t(13031),
        m = t(9872),
        f = t(42295);
      const p = {
          getcanonicallocales: {
            should: () => Promise.all([t.e(4578), t.e(5830)]).then(t.bind(t, 61303)),
            polyfill: () => t.e(5018).then(t.bind(t, 46819))
          },
          locale: {
            should: () => Promise.all([t.e(4578), t.e(5830)]).then(t.bind(t, 60206)),
            polyfill: () => t.e(9615).then(t.bind(t, 48634))
          },
          listformat: {
            should: () => Promise.all([t.e(4578), t.e(5830)]).then(t.bind(t, 47913)),
            polyfill: () => Promise.all([t.e(4578), t.e(2306), t.e(8970)]).then(t.bind(t, 28423)),
            locale: e => t(63514)(`./${e}`)
          },
          displaynames: {
            should: () => Promise.all([t.e(4578), t.e(5830)]).then(t.bind(t, 2028)),
            polyfill: () => Promise.all([t.e(4578), t.e(2306), t.e(3343)]).then(t.bind(t, 1988)),
            locale: e => t(94375)(`./${e}`)
          },
          pluralrules: {
            should: () => Promise.all([t.e(4578), t.e(5830)]).then(t.bind(t, 84727)),
            polyfill: () => Promise.all([t.e(4578), t.e(2306), t.e(314)]).then(t.bind(t, 10649)),
            locale: e => t(38525)(`./${e}`)
          },
          numberformat: {
            should: () => Promise.all([t.e(4578), t.e(5830)]).then(t.bind(t, 61610)),
            polyfill: () => Promise.all([t.e(4578), t.e(2306), t.e(907)]).then(t.bind(t, 72694)),
            locale: e => t(5267)(`./${e}`)
          },
          relativetimeformat: {
            should: () => Promise.all([t.e(4578), t.e(5830)]).then(t.bind(t, 79222)),
            polyfill: () => Promise.all([t.e(4578), t.e(2306), t.e(8391)]).then(t.bind(t, 46258)),
            locale: e => t(33019)(`./${e}`)
          },
          datetimeformat: {
            should: () => Promise.all([t.e(4578), t.e(5830)]).then(t.bind(t, 1306)),
            polyfill: () => Promise.all([t.e(4578), t.e(2306), t.e(4731)]).then(t.bind(t, 35334)),
            locale: e => Promise.all([t.e(6280).then(t.t.bind(t, 29989, 23)), t(94819)(`./${e}`)])
          }
        },
        b = {
          getcanonicallocales: ["getcanonicallocales"],
          locale: ["getcanonicallocales", "locale"],
          pluralrules: ["getcanonicallocales", "locale", "pluralrules"],
          numberformat: ["getcanonicallocales", "locale", "pluralrules", "numberformat"],
          relativetimeformat: ["getcanonicallocales", "locale", "pluralrules", "numberformat", "relativetimeformat"],
          datetimeformat: ["getcanonicallocales", "locale", "pluralrules", "numberformat", "datetimeformat"],
          displaynames: ["getcanonicallocales", "locale", "displaynames"],
          listformat: ["getcanonicallocales", "locale", "listformat"]
        },
        h = async (e, o, t) => {
          const {
            shouldPolyfill: a
          } = await e.should();
          return !!a(e.locale ? o : null) && (await e.polyfill(), e.locale && await e.locale(o), !0)
        }, g = async (e, o) => {
          if (!e) throw new Error("Please provide the desired locale");
          if (!o || !o.length) throw new Error(`Please provide the list of polyfills to load, supported ones are: ${Object.keys(b).join(", ")}`);
          const t = [];
          let a = 0;
          for (const n of o) {
            if (!n || !b[n]) throw new Error(`Unsupported polyfill: ${n}. Supported ones are: ${Object.keys(b).join(", ")}`);
            for (const o of b[n]) - 1 === t.indexOf(o) && (await h(p[o], e) && a++, t.push(o))
          }
          return a
        };
      var w = t(79867);
      const y = (e, o) => {
          if (!e || !o) return void console.log(`Couldn't set cookie (${e}) to value (${o})`);
          const t = window.location.hostname.split("."),
            a = t.slice(t.length - 2).join(".");
          document.cookie = `${e}=${o}; domain=${a}; path=/;`
        },
        k = e => {
          const o = document.cookie.split("; "),
            t = `${e}=`,
            a = o.find(e => e.startsWith(t)),
            n = a?.substring(t.length, a.length);
          return n
        },
        v = (e, o, t = !1) => {
          const a = k(e);
          return a && !t || y(e, o), [a, (n = e, e => {
            y(n, e)
          })];
          var n
        },
        _ = [{
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
        $ = _[0],
        E = ["de_de", "fr_fr", "it_it", "ja_jp", "ru_ru", "es_es", "es_mx", "pt_br", "ko_kr", "zh_tw", "pl_pl", "zh_hans"],
        O = _,
        P = () => {
          const {
            location: e
          } = window, o = (0, w.A)(), t = (e => {
            const o = O.map(e => e.subdomaincom),
              t = e.pathname.substring(1).split("/"),
              a = "detect-locals" === t[0] ? 1 : 0;
            return -1 !== o.indexOf(t[a]) ? t[a] : null
          })(e), a = (e => {
            const o = e.search.substring(1).split("&").find(e => e.startsWith("lang"));
            return o?.split("=")[1]
          })(e), n = $;
          let s;
          const r = `rockstarweb_lang.${o.cookieIdentifier}`,
            l = k(r);
          s = o.currentSite?.site === w.C.www ? O.find(e => e.subdomaincom === a) || O.find(e => e.subdomaincom === t) || n : O.find(e => e.iso === l) || n;
          const [, i] = v(r, s.iso);
          return [s, i]
        },
        j = () => "en-US";

      function L(e) {
        const o = e.split("-");
        return g(o[1] ? o[0] : e, ["relativetimeformat", "pluralrules", "listformat"])
      }

      function x(e, o) {
        return e[o] ?? {}
      }

      function N(e, o, t, a) {
        return s => {
          const r = (0, n.useMemo)(() => {
            if (o) return function(e, o) {
              return function(e, o) {
                const t = o ?? P()[0].iso ?? j(),
                  [, a] = [L(t), x(e, t)];
                var n;
                return {
                  rsLocale: t,
                  locale: t,
                  messages: (n = a, {
                    ...n
                  })
                }
              }(e, o)
            }(o, t)
          }, [t]);
          return (0, f.jsx)(m.A, {
            locale: r?.locale || j(),
            messages: {
              ...r?.messages
            },
            onError: a,
            children: r && (0, f.jsx)(e, {
              ...s
            })
          }, "intl-provider")
        }
      }

      function M(e) {
        let [o, t] = e.split(/[-_]/), a = t?.toLowerCase();
        return "cn" === a && (a = "hans"), o && t || (o = "en", a = "us"), [o, a]
      }
      const U = e => {
          if (!e.us || 0 === Object.keys(e?.us).length) throw new Error("createDevLocaleHook requires at least a 'us' key with definitions");
          return () => {
            const [{
              iso: o
            }] = P(), [t, a] = M(o);
            return e?.[a] ?? e.us
          }
        },
        C = {
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
        D = e => {
          const [o] = P(), {
            sites: t
          } = (0, w.A)();
          let a;
          try {
            a = new URL(e)
          } catch {
            a = null
          }
          if (a)
            for (const [n, {
                regex: s,
                isSubdomain: r,
                isLocaleInUrl: l,
                fieldName: i,
                externalPaths: c
              }] of Object.entries(C)) {
              if (!s.test(e.toLowerCase())) continue;
              const d = t[n];
              if (!d) continue;
              let u = "";
              "en" !== o.subdomaincom && l && (u = `/${o[i||"subdomaincom"]}`, "circoloco" === n && "/" === a.pathname && (u += "/"));
              const m = a.host.split(".");
              let f = "";
              return "www" !== n || c?.some(e => e.test(a.pathname)) ? (f += `https://${d}`, f += r ? `.${m.at(-2)}.${m.at(-1)}` : `.${m.at(-1)}`, {
                link: `${f}${u}${"/"===a.pathname?"":a.pathname}${a.search}${a.hash}`,
                isExternal: !0
              }) : {
                link: `${f}${"/"===a.pathname?"":a.pathname}${a.search}${a.hash}`,
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
        I = ({
          selectedLocale: e,
          track: o,
          parent: t = ""
        }) => {
          const a = (0, w.A)(),
            [, n] = P(),
            {
              subdomaincom: s,
              iso: r
            } = e,
            l = (e => {
              let o = location.pathname.replace(/^\/|\/$/g, "");
              const t = o.split("/");
              return O.map(e => e.subdomaincom).includes(t[0]) && (o = t.slice(1).join("/")), a.currentSite?.site === w.C.www ? "en" === e ? `${window.location.origin}/${o}${location.search}` : `${window.location.origin}/${e}/${o}${location.search}` : `${window.location.origin}/${o}${location.search}`
            })(s);
          o?.({
            event: "cta_other",
            link_url: l,
            text: s,
            element_placement: t?.toLowerCase()
          }), n(r), window.location.assign(l)
        }
    },
    5267: (e, o, t) => {
      var a = {
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
        if (!t.o(a, e)) return Promise.resolve().then(() => {
          var o = new Error("Cannot find module '" + e + "'");
          throw o.code = "MODULE_NOT_FOUND", o
        });
        var o = a[e],
          n = o[0];
        return t.e(o[1]).then(() => t.t(n, 23))
      }
      n.keys = () => Object.keys(a), n.id = 5267, e.exports = n
    },
    33019: (e, o, t) => {
      var a = {
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
        if (!t.o(a, e)) return Promise.resolve().then(() => {
          var o = new Error("Cannot find module '" + e + "'");
          throw o.code = "MODULE_NOT_FOUND", o
        });
        var o = a[e],
          n = o[0];
        return t.e(o[1]).then(() => t.t(n, 23))
      }
      n.keys = () => Object.keys(a), n.id = 33019, e.exports = n
    },
    38525: (e, o, t) => {
      var a = {
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
        if (!t.o(a, e)) return Promise.resolve().then(() => {
          var o = new Error("Cannot find module '" + e + "'");
          throw o.code = "MODULE_NOT_FOUND", o
        });
        var o = a[e],
          n = o[0];
        return t.e(o[1]).then(() => t.t(n, 23))
      }
      n.keys = () => Object.keys(a), n.id = 38525, e.exports = n
    },
    63514: (e, o, t) => {
      var a = {
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
        if (!t.o(a, e)) return Promise.resolve().then(() => {
          var o = new Error("Cannot find module '" + e + "'");
          throw o.code = "MODULE_NOT_FOUND", o
        });
        var o = a[e],
          n = o[0];
        return t.e(o[1]).then(() => t.t(n, 23))
      }
      n.keys = () => Object.keys(a), n.id = 63514, e.exports = n
    },
    94375: (e, o, t) => {
      var a = {
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
        if (!t.o(a, e)) return Promise.resolve().then(() => {
          var o = new Error("Cannot find module '" + e + "'");
          throw o.code = "MODULE_NOT_FOUND", o
        });
        var o = a[e],
          n = o[0];
        return t.e(o[1]).then(() => t.t(n, 23))
      }
      n.keys = () => Object.keys(a), n.id = 94375, e.exports = n
    },
    94819: (e, o, t) => {
      var a = {
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
        if (!t.o(a, e)) return Promise.resolve().then(() => {
          var o = new Error("Cannot find module '" + e + "'");
          throw o.code = "MODULE_NOT_FOUND", o
        });
        var o = a[e],
          n = o[0];
        return t.e(o[1]).then(() => t.t(n, 23))
      }
      n.keys = () => Object.keys(a), n.id = 94819, e.exports = n
    }
  }
]);