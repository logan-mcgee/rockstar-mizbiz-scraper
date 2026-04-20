try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "4a35d6f1-0bbf-4309-92db-c51c9f6fcce9", e._sentryDebugIdIdentifier = "sentry-dbid-4a35d6f1-0bbf-4309-92db-c51c9f6fcce9")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-red-dead-redemption-2",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_red_dead_redemption_2 = self.webpackChunk_rockstargames_sites_red_dead_redemption_2 || []).push([
  [2319, 7557], {
    2319: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, {
        FormattedMessage: () => c,
        POSIXLocales: () => k,
        ReactIntlProviderForMocking: () => d.A,
        createDevLocaleHook: () => D,
        createIntl: () => f.E,
        defineMessages: () => u.YK,
        englishLocale: () => j,
        getCookieValueByName: () => v,
        getLocale: () => E,
        linkWithLocale: () => C,
        localeCookieHandler: () => g,
        locales: () => P,
        onLanguageChange: () => L,
        splitLocale: () => T,
        useIntl: () => i.A,
        withIntl: () => I
      });
      var o = r(78322),
        n = r(71127),
        a = r(55165),
        i = r(30597);

      function s(e) {
        var t = (0, i.A)(),
          r = t.formatMessage,
          o = t.textComponent,
          a = void 0 === o ? n.Fragment : o,
          s = e.id,
          l = e.description,
          c = e.defaultMessage,
          u = e.values,
          f = e.children,
          d = e.tagName,
          p = void 0 === d ? a : d,
          m = r({
            id: s,
            description: l,
            defaultMessage: c
          }, u, {
            ignoreTag: e.ignoreTag
          });
        return "function" == typeof f ? f(Array.isArray(m) ? m : [m]) : p ? n.createElement(p, null, m) : n.createElement(n.Fragment, null, m)
      }
      s.displayName = "FormattedMessage";
      var l = n.memo(s, function(e, t) {
        var r = e.values,
          n = (0, o.__rest)(e, ["values"]),
          i = t.values,
          s = (0, o.__rest)(t, ["values"]);
        return (0, a.bN)(i, r) && (0, a.bN)(n, s)
      });
      l.displayName = "MemoizedFormattedMessage";
      const c = l;
      var u = r(24944),
        f = r(13031),
        d = r(9872),
        p = r(42295);
      const m = {
          getcanonicallocales: {
            should: () => Promise.all([r.e(4578), r.e(5830)]).then(r.bind(r, 61303)),
            polyfill: () => r.e(5018).then(r.bind(r, 46819))
          },
          locale: {
            should: () => Promise.all([r.e(4578), r.e(5830)]).then(r.bind(r, 60206)),
            polyfill: () => r.e(9615).then(r.bind(r, 48634))
          },
          listformat: {
            should: () => Promise.all([r.e(4578), r.e(5830)]).then(r.bind(r, 47913)),
            polyfill: () => Promise.all([r.e(4578), r.e(2306), r.e(8970)]).then(r.bind(r, 28423)),
            locale: e => r(63514)(`./${e}`)
          },
          displaynames: {
            should: () => Promise.all([r.e(4578), r.e(5830)]).then(r.bind(r, 2028)),
            polyfill: () => Promise.all([r.e(4578), r.e(2306), r.e(3343)]).then(r.bind(r, 1988)),
            locale: e => r(94375)(`./${e}`)
          },
          pluralrules: {
            should: () => Promise.all([r.e(4578), r.e(5830)]).then(r.bind(r, 84727)),
            polyfill: () => Promise.all([r.e(4578), r.e(2306), r.e(314)]).then(r.bind(r, 10649)),
            locale: e => r(38525)(`./${e}`)
          },
          numberformat: {
            should: () => Promise.all([r.e(4578), r.e(5830)]).then(r.bind(r, 61610)),
            polyfill: () => Promise.all([r.e(4578), r.e(2306), r.e(907)]).then(r.bind(r, 72694)),
            locale: e => r(5267)(`./${e}`)
          },
          relativetimeformat: {
            should: () => Promise.all([r.e(4578), r.e(5830)]).then(r.bind(r, 79222)),
            polyfill: () => Promise.all([r.e(4578), r.e(2306), r.e(8391)]).then(r.bind(r, 46258)),
            locale: e => r(33019)(`./${e}`)
          },
          datetimeformat: {
            should: () => Promise.all([r.e(4578), r.e(5830)]).then(r.bind(r, 1306)),
            polyfill: () => Promise.all([r.e(4578), r.e(2306), r.e(4731)]).then(r.bind(r, 35334)),
            locale: e => Promise.all([r.e(6280).then(r.t.bind(r, 29989, 23)), r(94819)(`./${e}`)])
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
        h = async (e, t, r) => {
          const {
            shouldPolyfill: o
          } = await e.should();
          return !!o(e.locale ? t : null) && (await e.polyfill(), e.locale && await e.locale(t), !0)
        }, y = async (e, t) => {
          if (!e) throw new Error("Please provide the desired locale");
          if (!t || !t.length) throw new Error(`Please provide the list of polyfills to load, supported ones are: ${Object.keys(b).join(", ")}`);
          const r = [];
          let o = 0;
          for (const n of t) {
            if (!n || !b[n]) throw new Error(`Unsupported polyfill: ${n}. Supported ones are: ${Object.keys(b).join(", ")}`);
            for (const t of b[n]) - 1 === r.indexOf(t) && (await h(m[t], e) && o++, r.push(t))
          }
          return o
        };
      var _ = r(79867);
      const w = (e, t) => {
          if (!e || !t) return void console.log(`Couldn't set cookie (${e}) to value (${t})`);
          const r = window.location.hostname.split("."),
            o = r.slice(r.length - 2).join(".");
          document.cookie = `${e}=${t}; domain=${o}; path=/;`
        },
        v = e => {
          const t = document.cookie.split("; "),
            r = `${e}=`,
            o = t.find(e => e.startsWith(r)),
            n = o?.substring(r.length, o.length);
          return n
        },
        g = (e, t, r = !1) => {
          const o = v(e);
          return o && !r || w(e, t), [o, (n = e, e => {
            w(n, e)
          })];
          var n
        },
        O = [{
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
        j = O[0],
        k = ["de_de", "fr_fr", "it_it", "ja_jp", "ru_ru", "es_es", "es_mx", "pt_br", "ko_kr", "zh_tw", "pl_pl", "zh_hans"],
        P = O,
        E = () => {
          const {
            location: e
          } = window, t = (0, _.A)(), r = (e => {
            const t = P.map(e => e.subdomaincom),
              r = e.pathname.substring(1).split("/"),
              o = "detect-locals" === r[0] ? 1 : 0;
            return -1 !== t.indexOf(r[o]) ? r[o] : null
          })(e), o = (e => {
            const t = e.search.substring(1).split("&").find(e => e.startsWith("lang"));
            return t?.split("=")[1]
          })(e), n = j;
          let a;
          const i = `rockstarweb_lang.${t.cookieIdentifier}`,
            s = v(i);
          a = t.currentSite?.site === _.C.www ? P.find(e => e.subdomaincom === o) || P.find(e => e.subdomaincom === r) || n : P.find(e => e.iso === s) || n;
          const [, l] = g(i, a.iso);
          return [a, l]
        },
        x = () => "en-US";

      function S(e) {
        const t = e.split("-");
        return y(t[1] ? t[0] : e, ["relativetimeformat", "pluralrules", "listformat"])
      }

      function $(e, t) {
        return e[t] ?? {}
      }

      function I(e, t, r, o) {
        return a => {
          const i = (0, n.useMemo)(() => {
            if (t) return function(e, t) {
              return function(e, t) {
                const r = t ?? E()[0].iso ?? x(),
                  [, o] = [S(r), $(e, r)];
                var n;
                return {
                  rsLocale: r,
                  locale: r,
                  messages: (n = o, {
                    ...n
                  })
                }
              }(e, t)
            }(t, r)
          }, [r]);
          return (0, p.jsx)(d.A, {
            locale: i?.locale || x(),
            messages: {
              ...i?.messages
            },
            onError: o,
            children: i && (0, p.jsx)(e, {
              ...a
            })
          }, "intl-provider")
        }
      }

      function T(e) {
        let [t, r] = e.split(/[-_]/), o = r?.toLowerCase();
        return "cn" === o && (o = "hans"), t && r || (t = "en", o = "us"), [t, o]
      }
      const D = e => {
          if (!e.us || 0 === Object.keys(e?.us).length) throw new Error("createDevLocaleHook requires at least a 'us' key with definitions");
          return () => {
            const [{
              iso: t
            }] = E(), [r, o] = T(t);
            return e?.[o] ?? e.us
          }
        },
        N = {
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
        C = e => {
          const [t] = E(), {
            sites: r
          } = (0, _.A)();
          let o;
          try {
            o = new URL(e)
          } catch {
            o = null
          }
          if (o)
            for (const [n, {
                regex: a,
                isSubdomain: i,
                isLocaleInUrl: s,
                fieldName: l,
                externalPaths: c
              }] of Object.entries(N)) {
              if (!a.test(e.toLowerCase())) continue;
              const u = r[n];
              if (!u) continue;
              let f = "";
              "en" !== t.subdomaincom && s && (f = `/${t[l||"subdomaincom"]}`, "circoloco" === n && "/" === o.pathname && (f += "/"));
              const d = o.host.split(".");
              let p = "";
              return "www" !== n || c?.some(e => e.test(o.pathname)) ? (p += `https://${u}`, p += i ? `.${d.at(-2)}.${d.at(-1)}` : `.${d.at(-1)}`, {
                link: `${p}${f}${"/"===o.pathname?"":o.pathname}${o.search}${o.hash}`,
                isExternal: !0
              }) : {
                link: `${p}${"/"===o.pathname?"":o.pathname}${o.search}${o.hash}`,
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
          track: t,
          parent: r = ""
        }) => {
          const o = (0, _.A)(),
            [, n] = E(),
            {
              subdomaincom: a,
              iso: i
            } = e,
            s = (e => {
              let t = location.pathname.replace(/^\/|\/$/g, "");
              const r = t.split("/");
              return P.map(e => e.subdomaincom).includes(r[0]) && (t = r.slice(1).join("/")), o.currentSite?.site === _.C.www ? "en" === e ? `${window.location.origin}/${t}${location.search}` : `${window.location.origin}/${e}/${t}${location.search}` : `${window.location.origin}/${t}${location.search}`
            })(a);
          t?.({
            event: "cta_other",
            link_url: s,
            text: a,
            element_placement: r?.toLowerCase()
          }), n(i), window.location.assign(s)
        }
    },
    5267: (e, t, r) => {
      var o = {
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
        if (!r.o(o, e)) return Promise.resolve().then(() => {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        });
        var t = o[e],
          n = t[0];
        return r.e(t[1]).then(() => r.t(n, 23))
      }
      n.keys = () => Object.keys(o), n.id = 5267, e.exports = n
    },
    33019: (e, t, r) => {
      var o = {
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
        if (!r.o(o, e)) return Promise.resolve().then(() => {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        });
        var t = o[e],
          n = t[0];
        return r.e(t[1]).then(() => r.t(n, 23))
      }
      n.keys = () => Object.keys(o), n.id = 33019, e.exports = n
    },
    38525: (e, t, r) => {
      var o = {
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
        if (!r.o(o, e)) return Promise.resolve().then(() => {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        });
        var t = o[e],
          n = t[0];
        return r.e(t[1]).then(() => r.t(n, 23))
      }
      n.keys = () => Object.keys(o), n.id = 38525, e.exports = n
    },
    42295: (e, t, r) => {
      "use strict";
      e.exports = r(69245)
    },
    63514: (e, t, r) => {
      var o = {
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
        if (!r.o(o, e)) return Promise.resolve().then(() => {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        });
        var t = o[e],
          n = t[0];
        return r.e(t[1]).then(() => r.t(n, 23))
      }
      n.keys = () => Object.keys(o), n.id = 63514, e.exports = n
    },
    69245: (e, t, r) => {
      "use strict";
      var o = r(71127),
        n = Symbol.for("react.element"),
        a = Symbol.for("react.fragment"),
        i = Object.prototype.hasOwnProperty,
        s = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function c(e, t, r) {
        var o, a = {},
          c = null,
          u = null;
        for (o in void 0 !== r && (c = "" + r), void 0 !== t.key && (c = "" + t.key), void 0 !== t.ref && (u = t.ref), t) i.call(t, o) && !l.hasOwnProperty(o) && (a[o] = t[o]);
        if (e && e.defaultProps)
          for (o in t = e.defaultProps) void 0 === a[o] && (a[o] = t[o]);
        return {
          $$typeof: n,
          type: e,
          key: c,
          ref: u,
          props: a,
          _owner: s.current
        }
      }
      t.Fragment = a, t.jsx = c, t.jsxs = c
    },
    78322: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, {
        __addDisposableResource: () => L,
        __assign: () => a,
        __asyncDelegator: () => P,
        __asyncGenerator: () => k,
        __asyncValues: () => E,
        __await: () => j,
        __awaiter: () => m,
        __classPrivateFieldGet: () => D,
        __classPrivateFieldIn: () => C,
        __classPrivateFieldSet: () => N,
        __createBinding: () => h,
        __decorate: () => s,
        __disposeResources: () => R,
        __esDecorate: () => c,
        __exportStar: () => y,
        __extends: () => n,
        __generator: () => b,
        __importDefault: () => T,
        __importStar: () => I,
        __makeTemplateObject: () => x,
        __metadata: () => p,
        __param: () => l,
        __propKey: () => f,
        __read: () => w,
        __rest: () => i,
        __rewriteRelativeImportExtension: () => U,
        __runInitializers: () => u,
        __setFunctionName: () => d,
        __spread: () => v,
        __spreadArray: () => O,
        __spreadArrays: () => g,
        __values: () => _,
        default: () => F
      });
      var o = function(e, t) {
        return o = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function(e, t) {
          e.__proto__ = t
        } || function(e, t) {
          for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
        }, o(e, t)
      };

      function n(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

        function r() {
          this.constructor = e
        }
        o(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
      }
      var a = function() {
        return a = Object.assign || function(e) {
          for (var t, r = 1, o = arguments.length; r < o; r++)
            for (var n in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          return e
        }, a.apply(this, arguments)
      };

      function i(e, t) {
        var r = {};
        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (r[o] = e[o]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var n = 0;
          for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (r[o[n]] = e[o[n]])
        }
        return r
      }

      function s(e, t, r, o) {
        var n, a = arguments.length,
          i = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, r, o);
        else
          for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (i = (a < 3 ? n(i) : a > 3 ? n(t, r, i) : n(t, r)) || i);
        return a > 3 && i && Object.defineProperty(t, r, i), i
      }

      function l(e, t) {
        return function(r, o) {
          t(r, o, e)
        }
      }

      function c(e, t, r, o, n, a) {
        function i(e) {
          if (void 0 !== e && "function" != typeof e) throw new TypeError("Function expected");
          return e
        }
        for (var s, l = o.kind, c = "getter" === l ? "get" : "setter" === l ? "set" : "value", u = !t && e ? o.static ? e : e.prototype : null, f = t || (u ? Object.getOwnPropertyDescriptor(u, o.name) : {}), d = !1, p = r.length - 1; p >= 0; p--) {
          var m = {};
          for (var b in o) m[b] = "access" === b ? {} : o[b];
          for (var b in o.access) m.access[b] = o.access[b];
          m.addInitializer = function(e) {
            if (d) throw new TypeError("Cannot add initializers after decoration has completed");
            a.push(i(e || null))
          };
          var h = (0, r[p])("accessor" === l ? {
            get: f.get,
            set: f.set
          } : f[c], m);
          if ("accessor" === l) {
            if (void 0 === h) continue;
            if (null === h || "object" != typeof h) throw new TypeError("Object expected");
            (s = i(h.get)) && (f.get = s), (s = i(h.set)) && (f.set = s), (s = i(h.init)) && n.unshift(s)
          } else(s = i(h)) && ("field" === l ? n.unshift(s) : f[c] = s)
        }
        u && Object.defineProperty(u, o.name, f), d = !0
      }

      function u(e, t, r) {
        for (var o = arguments.length > 2, n = 0; n < t.length; n++) r = o ? t[n].call(e, r) : t[n].call(e);
        return o ? r : void 0
      }

      function f(e) {
        return "symbol" == typeof e ? e : "".concat(e)
      }

      function d(e, t, r) {
        return "symbol" == typeof t && (t = t.description ? "[".concat(t.description, "]") : ""), Object.defineProperty(e, "name", {
          configurable: !0,
          value: r ? "".concat(r, " ", t) : t
        })
      }

      function p(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
      }

      function m(e, t, r, o) {
        return new(r || (r = Promise))(function(n, a) {
          function i(e) {
            try {
              l(o.next(e))
            } catch (e) {
              a(e)
            }
          }

          function s(e) {
            try {
              l(o.throw(e))
            } catch (e) {
              a(e)
            }
          }

          function l(e) {
            var t;
            e.done ? n(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
              e(t)
            })).then(i, s)
          }
          l((o = o.apply(e, t || [])).next())
        })
      }

      function b(e, t) {
        var r, o, n, a = {
            label: 0,
            sent: function() {
              if (1 & n[0]) throw n[1];
              return n[1]
            },
            trys: [],
            ops: []
          },
          i = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
        return i.next = s(0), i.throw = s(1), i.return = s(2), "function" == typeof Symbol && (i[Symbol.iterator] = function() {
          return this
        }), i;

        function s(s) {
          return function(l) {
            return function(s) {
              if (r) throw new TypeError("Generator is already executing.");
              for (; i && (i = 0, s[0] && (a = 0)), a;) try {
                if (r = 1, o && (n = 2 & s[0] ? o.return : s[0] ? o.throw || ((n = o.return) && n.call(o), 0) : o.next) && !(n = n.call(o, s[1])).done) return n;
                switch (o = 0, n && (s = [2 & s[0], n.value]), s[0]) {
                  case 0:
                  case 1:
                    n = s;
                    break;
                  case 4:
                    return a.label++, {
                      value: s[1],
                      done: !1
                    };
                  case 5:
                    a.label++, o = s[1], s = [0];
                    continue;
                  case 7:
                    s = a.ops.pop(), a.trys.pop();
                    continue;
                  default:
                    if (!((n = (n = a.trys).length > 0 && n[n.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                      a = 0;
                      continue
                    }
                    if (3 === s[0] && (!n || s[1] > n[0] && s[1] < n[3])) {
                      a.label = s[1];
                      break
                    }
                    if (6 === s[0] && a.label < n[1]) {
                      a.label = n[1], n = s;
                      break
                    }
                    if (n && a.label < n[2]) {
                      a.label = n[2], a.ops.push(s);
                      break
                    }
                    n[2] && a.ops.pop(), a.trys.pop();
                    continue
                }
                s = t.call(e, a)
              } catch (e) {
                s = [6, e], o = 0
              } finally {
                r = n = 0
              }
              if (5 & s[0]) throw s[1];
              return {
                value: s[0] ? s[1] : void 0,
                done: !0
              }
            }([s, l])
          }
        }
      }
      var h = Object.create ? function(e, t, r, o) {
        void 0 === o && (o = r);
        var n = Object.getOwnPropertyDescriptor(t, r);
        n && !("get" in n ? !t.__esModule : n.writable || n.configurable) || (n = {
          enumerable: !0,
          get: function() {
            return t[r]
          }
        }), Object.defineProperty(e, o, n)
      } : function(e, t, r, o) {
        void 0 === o && (o = r), e[o] = t[r]
      };

      function y(e, t) {
        for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || h(t, e, r)
      }

      function _(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
          r = t && e[t],
          o = 0;
        if (r) return r.call(e);
        if (e && "number" == typeof e.length) return {
          next: function() {
            return e && o >= e.length && (e = void 0), {
              value: e && e[o++],
              done: !e
            }
          }
        };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
      }

      function w(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var o, n, a = r.call(e),
          i = [];
        try {
          for (;
            (void 0 === t || t-- > 0) && !(o = a.next()).done;) i.push(o.value)
        } catch (e) {
          n = {
            error: e
          }
        } finally {
          try {
            o && !o.done && (r = a.return) && r.call(a)
          } finally {
            if (n) throw n.error
          }
        }
        return i
      }

      function v() {
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(w(arguments[t]));
        return e
      }

      function g() {
        for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
        var o = Array(e),
          n = 0;
        for (t = 0; t < r; t++)
          for (var a = arguments[t], i = 0, s = a.length; i < s; i++, n++) o[n] = a[i];
        return o
      }

      function O(e, t, r) {
        if (r || 2 === arguments.length)
          for (var o, n = 0, a = t.length; n < a; n++) !o && n in t || (o || (o = Array.prototype.slice.call(t, 0, n)), o[n] = t[n]);
        return e.concat(o || Array.prototype.slice.call(t))
      }

      function j(e) {
        return this instanceof j ? (this.v = e, this) : new j(e)
      }

      function k(e, t, r) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var o, n = r.apply(e, t || []),
          a = [];
        return o = Object.create(("function" == typeof AsyncIterator ? AsyncIterator : Object).prototype), i("next"), i("throw"), i("return", function(e) {
          return function(t) {
            return Promise.resolve(t).then(e, c)
          }
        }), o[Symbol.asyncIterator] = function() {
          return this
        }, o;

        function i(e, t) {
          n[e] && (o[e] = function(t) {
            return new Promise(function(r, o) {
              a.push([e, t, r, o]) > 1 || s(e, t)
            })
          }, t && (o[e] = t(o[e])))
        }

        function s(e, t) {
          try {
            (r = n[e](t)).value instanceof j ? Promise.resolve(r.value.v).then(l, c) : u(a[0][2], r)
          } catch (e) {
            u(a[0][3], e)
          }
          var r
        }

        function l(e) {
          s("next", e)
        }

        function c(e) {
          s("throw", e)
        }

        function u(e, t) {
          e(t), a.shift(), a.length && s(a[0][0], a[0][1])
        }
      }

      function P(e) {
        var t, r;
        return t = {}, o("next"), o("throw", function(e) {
          throw e
        }), o("return"), t[Symbol.iterator] = function() {
          return this
        }, t;

        function o(o, n) {
          t[o] = e[o] ? function(t) {
            return (r = !r) ? {
              value: j(e[o](t)),
              done: !1
            } : n ? n(t) : t
          } : n
        }
      }

      function E(e) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var t, r = e[Symbol.asyncIterator];
        return r ? r.call(e) : (e = _(e), t = {}, o("next"), o("throw"), o("return"), t[Symbol.asyncIterator] = function() {
          return this
        }, t);

        function o(r) {
          t[r] = e[r] && function(t) {
            return new Promise(function(o, n) {
              ! function(e, t, r, o) {
                Promise.resolve(o).then(function(t) {
                  e({
                    value: t,
                    done: r
                  })
                }, t)
              }(o, n, (t = e[r](t)).done, t.value)
            })
          }
        }
      }

      function x(e, t) {
        return Object.defineProperty ? Object.defineProperty(e, "raw", {
          value: t
        }) : e.raw = t, e
      }
      var S = Object.create ? function(e, t) {
          Object.defineProperty(e, "default", {
            enumerable: !0,
            value: t
          })
        } : function(e, t) {
          e.default = t
        },
        $ = function(e) {
          return $ = Object.getOwnPropertyNames || function(e) {
            var t = [];
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[t.length] = r);
            return t
          }, $(e)
        };

      function I(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var r = $(e), o = 0; o < r.length; o++) "default" !== r[o] && h(t, e, r[o]);
        return S(t, e), t
      }

      function T(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function D(e, t, r, o) {
        if ("a" === r && !o) throw new TypeError("Private accessor was defined without a getter");
        if ("function" == typeof t ? e !== t || !o : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return "m" === r ? o : "a" === r ? o.call(e) : o ? o.value : t.get(e)
      }

      function N(e, t, r, o, n) {
        if ("m" === o) throw new TypeError("Private method is not writable");
        if ("a" === o && !n) throw new TypeError("Private accessor was defined without a setter");
        if ("function" == typeof t ? e !== t || !n : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return "a" === o ? n.call(e, r) : n ? n.value = r : t.set(e, r), r
      }

      function C(e, t) {
        if (null === t || "object" != typeof t && "function" != typeof t) throw new TypeError("Cannot use 'in' operator on non-object");
        return "function" == typeof e ? t === e : e.has(t)
      }

      function L(e, t, r) {
        if (null != t) {
          if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
          var o, n;
          if (r) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            o = t[Symbol.asyncDispose]
          }
          if (void 0 === o) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            o = t[Symbol.dispose], r && (n = o)
          }
          if ("function" != typeof o) throw new TypeError("Object not disposable.");
          n && (o = function() {
            try {
              n.call(this)
            } catch (e) {
              return Promise.reject(e)
            }
          }), e.stack.push({
            value: t,
            dispose: o,
            async: r
          })
        } else r && e.stack.push({
          async: !0
        });
        return t
      }
      var M = "function" == typeof SuppressedError ? SuppressedError : function(e, t, r) {
        var o = new Error(r);
        return o.name = "SuppressedError", o.error = e, o.suppressed = t, o
      };

      function R(e) {
        function t(t) {
          e.error = e.hasError ? new M(t, e.error, "An error was suppressed during disposal.") : t, e.hasError = !0
        }
        var r, o = 0;
        return function n() {
          for (; r = e.stack.pop();) try {
            if (!r.async && 1 === o) return o = 0, e.stack.push(r), Promise.resolve().then(n);
            if (r.dispose) {
              var a = r.dispose.call(r.value);
              if (r.async) return o |= 2, Promise.resolve(a).then(n, function(e) {
                return t(e), n()
              })
            } else o |= 1
          } catch (e) {
            t(e)
          }
          if (1 === o) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
          if (e.hasError) throw e.error
        }()
      }

      function U(e, t) {
        return "string" == typeof e && /^\.\.?\//.test(e) ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(e, r, o, n, a) {
          return r ? t ? ".jsx" : ".js" : !o || n && a ? o + n + "." + a.toLowerCase() + "js" : e
        }) : e
      }
      const F = {
        __extends: n,
        __assign: a,
        __rest: i,
        __decorate: s,
        __param: l,
        __esDecorate: c,
        __runInitializers: u,
        __propKey: f,
        __setFunctionName: d,
        __metadata: p,
        __awaiter: m,
        __generator: b,
        __createBinding: h,
        __exportStar: y,
        __values: _,
        __read: w,
        __spread: v,
        __spreadArrays: g,
        __spreadArray: O,
        __await: j,
        __asyncGenerator: k,
        __asyncDelegator: P,
        __asyncValues: E,
        __makeTemplateObject: x,
        __importStar: I,
        __importDefault: T,
        __classPrivateFieldGet: D,
        __classPrivateFieldSet: N,
        __classPrivateFieldIn: C,
        __addDisposableResource: L,
        __disposeResources: R,
        __rewriteRelativeImportExtension: U
      }
    },
    79867: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => c,
        C: () => s
      });
      var o = r(56265),
        n = r.n(o),
        a = r(41972),
        i = r.n(a);
      const s = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store",
          circoloco: "circoloco",
          supportNew: "support"
        },
        l = [{
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
        c = () => {
          let e;
          const {
            location: t
          } = window, r = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), o = l.findIndex(t => Object.entries(t.sites).findIndex(([t, o]) => o === r && (e = {
            site: t,
            subDomain: o
          }, !0)) >= 0), a = l[o >= 0 ? o : 0], s = l.find(e => e.id === a.fallbackEnvironment);
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), i()(n()({}, s, {
            currentSite: e
          }, a), "fallbackEnvironment")
        }
    },
    94375: (e, t, r) => {
      var o = {
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
        if (!r.o(o, e)) return Promise.resolve().then(() => {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        });
        var t = o[e],
          n = t[0];
        return r.e(t[1]).then(() => r.t(n, 23))
      }
      n.keys = () => Object.keys(o), n.id = 94375, e.exports = n
    },
    94819: (e, t, r) => {
      var o = {
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
        if (!r.o(o, e)) return Promise.resolve().then(() => {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        });
        var t = o[e],
          n = t[0];
        return r.e(t[1]).then(() => r.t(n, 23))
      }
      n.keys = () => Object.keys(o), n.id = 94819, e.exports = n
    }
  }
]);