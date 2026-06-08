try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    o = (new e.Error).stack;
  o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "3f54154b-d123-457e-90cb-c0bb49c9ae1d", e._sentryDebugIdIdentifier = "sentry-dbid-3f54154b-d123-457e-90cb-c0bb49c9ae1d")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-gta-trilogy",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_trilogy = self.webpackChunk_rockstargames_sites_gta_trilogy || []).push([
  [280, 602, 793], {
    4931(e, o, t) {
      var n = t(3082),
        r = Symbol.for("react.element"),
        s = Symbol.for("react.fragment"),
        i = Object.prototype.hasOwnProperty,
        a = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function c(e, o, t) {
        var n, s = {},
          c = null,
          u = null;
        for (n in void 0 !== t && (c = "" + t), void 0 !== o.key && (c = "" + o.key), void 0 !== o.ref && (u = o.ref), o) i.call(o, n) && !l.hasOwnProperty(n) && (s[n] = o[n]);
        if (e && e.defaultProps)
          for (n in o = e.defaultProps) void 0 === s[n] && (s[n] = o[n]);
        return {
          $$typeof: r,
          type: e,
          key: c,
          ref: u,
          props: s,
          _owner: a.current
        }
      }
      o.Fragment = s, o.jsx = c, o.jsxs = c
    },
    9793(e, o, t) {
      e.exports = t(4931)
    },
    6602(e, o, t) {
      t.r(o), t.d(o, {
        FormattedMessage: () => s.A,
        POSIXLocales: () => w,
        ReactIntlProviderForMocking: () => a.A,
        createDevLocaleHook: () => k,
        createIntl: () => r.E,
        defineMessages: () => n.YK,
        englishLocale: () => m,
        getCookieValueByName: () => d,
        getLocale: () => y,
        linkWithLocale: () => $,
        localeCookieHandler: () => f,
        locales: () => h,
        onLanguageChange: () => v,
        splitLocale: () => _,
        useIntl: () => i.A,
        withIntl: () => g
      });
      var n = t(7338),
        r = t(3747),
        s = t(3124),
        i = t(4775),
        a = t(4422),
        l = t(9793),
        c = t(3082),
        u = t(7279);
      const p = (e, o) => {
          if (!e || !o) return void console.log(`Couldn't set cookie (${e}) to value (${o})`);
          const t = window.location.hostname.split("."),
            n = t.slice(t.length - 2).join(".");
          document.cookie = `${e}=${o}; domain=${n}; path=/;`
        },
        d = e => {
          const o = document.cookie.split("; "),
            t = `${e}=`,
            n = o.find(e => e.startsWith(t)),
            r = n?.substring(t.length, n.length);
          return r
        },
        f = (e, o, t = !1) => {
          const n = d(e);
          return n && !t || p(e, o), [n, (r = e, e => {
            p(r, e)
          })];
          var r
        },
        b = [{
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
        m = b[0],
        w = ["de_de", "fr_fr", "it_it", "ja_jp", "ru_ru", "es_es", "es_mx", "pt_br", "ko_kr", "zh_tw", "pl_pl", "zh_hans"],
        h = b,
        y = () => {
          const {
            location: e
          } = window, o = (0, u.A)(), t = (e => {
            const o = h.map(e => e.subdomaincom),
              t = e.pathname.substring(1).split("/"),
              n = "detect-locals" === t[0] ? 1 : 0;
            return -1 !== o.indexOf(t[n]) ? t[n] : null
          })(e), n = (e => {
            const o = e.search.substring(1).split("&").find(e => e.startsWith("lang"));
            return o?.split("=")[1]
          })(e), r = m;
          let s;
          const i = `rockstarweb_lang.${o.cookieIdentifier}`,
            a = d(i);
          s = o.currentSite?.site === u.C.www ? h.find(e => e.subdomaincom === n) || h.find(e => e.subdomaincom === t) || r : h.find(e => e.iso === a) || r;
          const [, l] = f(i, s.iso);
          return [s, l]
        };

      function g(e, o, t, n) {
        return r => {
          const s = (0, c.useMemo)(() => {
            if (o) return function(e, o) {
              return function(e, o) {
                const t = o ?? y()[0].iso ?? "en-US",
                  n = function(e, o) {
                    return e[o] ?? {}
                  }(e, t);
                var r;
                return {
                  rsLocale: t,
                  locale: t,
                  messages: (r = n, {
                    ...r
                  })
                }
              }(e, o)
            }(o, t)
          }, [t]);
          return (0, l.jsx)(a.A, {
            locale: s?.locale || "en-US",
            messages: {
              ...s?.messages
            },
            onError: n,
            children: s && (0, l.jsx)(e, {
              ...r
            })
          }, "intl-provider")
        }
      }

      function _(e) {
        let [o, t] = e.split(/[-_]/), n = t?.toLowerCase();
        return "cn" === n && (n = "hans"), o && t || (o = "en", n = "us"), [o, n]
      }
      const k = e => {
          if (!e.us || 0 === Object.keys(e?.us).length) throw new Error("createDevLocaleHook requires at least a 'us' key with definitions");
          return () => {
            const [{
              iso: o
            }] = y(), [t, n] = _(o);
            return e?.[n] ?? e.us
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
        $ = e => {
          const [o] = y(), {
            sites: t
          } = (0, u.A)();
          let n;
          try {
            n = new URL(e)
          } catch {
            n = null
          }
          if (n)
            for (const [r, {
                regex: s,
                isSubdomain: i,
                isLocaleInUrl: a,
                fieldName: l,
                externalPaths: c
              }] of Object.entries(x)) {
              if (!s.test(e.toLowerCase())) continue;
              const u = t[r];
              if (!u) continue;
              let p = "";
              "en" !== o.subdomaincom && a && (p = `/${o[l||"subdomaincom"]}`, "circoloco" === r && "/" === n.pathname && (p += "/"));
              const d = n.host.split(".");
              let f = "";
              return "www" !== r || c?.some(e => e.test(n.pathname)) ? ("www" !== r && (f += `https://${u}`, f += i ? `.${d.at(-2)}.${d.at(-1)}` : `.${d.at(-1)}`), {
                link: `${f}${p}${"/"===n.pathname?"":n.pathname}${n.search}${n.hash}`,
                isExternal: !0
              }) : {
                link: `${f}${"/"===n.pathname?"":n.pathname}${n.search}${n.hash}`,
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
        v = ({
          selectedLocale: e,
          track: o,
          parent: t = ""
        }) => {
          const n = (0, u.A)(),
            [, r] = y(),
            {
              subdomaincom: s,
              iso: i
            } = e,
            a = (e => {
              let o = location.pathname.replace(/^\/|\/$/g, "");
              const t = o.split("/");
              return h.map(e => e.subdomaincom).includes(t[0]) && (o = t.slice(1).join("/")), n.currentSite?.site === u.C.www ? "en" === e ? `${window.location.origin}/${o}${location.search}` : `${window.location.origin}/${e}/${o}${location.search}` : `${window.location.origin}/${o}${location.search}`
            })(s);
          o?.({
            event: "cta_other",
            link_url: a,
            text: s,
            element_placement: t?.toLowerCase()
          }), r(i), window.location.assign(a)
        }
    },
    7279(e, o, t) {
      t.d(o, {
        A: () => c,
        C: () => a
      });
      var n = t(4028),
        r = t.n(n),
        s = t(5963),
        i = t.n(s);
      const a = {
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
            location: o
          } = window, t = o.hostname.substring(0, o.hostname.indexOf(".rockstargames.com")), n = l.findIndex(o => Object.entries(o.sites).findIndex(([o, n]) => n === t && (e = {
            site: o,
            subDomain: n
          }, !0)) >= 0), s = l[n >= 0 ? n : 0], a = l.find(e => e.id === s.fallbackEnvironment);
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), i()(r()({}, a, {
            currentSite: e
          }, s), "fallbackEnvironment")
        }
    },
    1177(e, o, t) {
      t.d(o, {
        C6: () => r,
        Cl: () => s,
        Tt: () => i,
        YH: () => l,
        fX: () => c,
        sH: () => a
      });
      var n = function(e, o) {
        return n = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function(e, o) {
          e.__proto__ = o
        } || function(e, o) {
          for (var t in o) Object.prototype.hasOwnProperty.call(o, t) && (e[t] = o[t])
        }, n(e, o)
      };

      function r(e, o) {
        if ("function" != typeof o && null !== o) throw new TypeError("Class extends value " + String(o) + " is not a constructor or null");

        function t() {
          this.constructor = e
        }
        n(e, o), e.prototype = null === o ? Object.create(o) : (t.prototype = o.prototype, new t)
      }
      var s = function() {
        return s = Object.assign || function(e) {
          for (var o, t = 1, n = arguments.length; t < n; t++)
            for (var r in o = arguments[t]) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
          return e
        }, s.apply(this, arguments)
      };

      function i(e, o) {
        var t = {};
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && o.indexOf(n) < 0 && (t[n] = e[n]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var r = 0;
          for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) o.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (t[n[r]] = e[n[r]])
        }
        return t
      }

      function a(e, o, t, n) {
        return new(t || (t = Promise))(function(r, s) {
          function i(e) {
            try {
              l(n.next(e))
            } catch (e) {
              s(e)
            }
          }

          function a(e) {
            try {
              l(n.throw(e))
            } catch (e) {
              s(e)
            }
          }

          function l(e) {
            var o;
            e.done ? r(e.value) : (o = e.value, o instanceof t ? o : new t(function(e) {
              e(o)
            })).then(i, a)
          }
          l((n = n.apply(e, o || [])).next())
        })
      }

      function l(e, o) {
        var t, n, r, s = {
            label: 0,
            sent: function() {
              if (1 & r[0]) throw r[1];
              return r[1]
            },
            trys: [],
            ops: []
          },
          i = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
        return i.next = a(0), i.throw = a(1), i.return = a(2), "function" == typeof Symbol && (i[Symbol.iterator] = function() {
          return this
        }), i;

        function a(a) {
          return function(l) {
            return function(a) {
              if (t) throw new TypeError("Generator is already executing.");
              for (; i && (i = 0, a[0] && (s = 0)), s;) try {
                if (t = 1, n && (r = 2 & a[0] ? n.return : a[0] ? n.throw || ((r = n.return) && r.call(n), 0) : n.next) && !(r = r.call(n, a[1])).done) return r;
                switch (n = 0, r && (a = [2 & a[0], r.value]), a[0]) {
                  case 0:
                  case 1:
                    r = a;
                    break;
                  case 4:
                    return s.label++, {
                      value: a[1],
                      done: !1
                    };
                  case 5:
                    s.label++, n = a[1], a = [0];
                    continue;
                  case 7:
                    a = s.ops.pop(), s.trys.pop();
                    continue;
                  default:
                    if (!((r = (r = s.trys).length > 0 && r[r.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                      s = 0;
                      continue
                    }
                    if (3 === a[0] && (!r || a[1] > r[0] && a[1] < r[3])) {
                      s.label = a[1];
                      break
                    }
                    if (6 === a[0] && s.label < r[1]) {
                      s.label = r[1], r = a;
                      break
                    }
                    if (r && s.label < r[2]) {
                      s.label = r[2], s.ops.push(a);
                      break
                    }
                    r[2] && s.ops.pop(), s.trys.pop();
                    continue
                }
                a = o.call(e, s)
              } catch (e) {
                a = [6, e], n = 0
              } finally {
                t = r = 0
              }
              if (5 & a[0]) throw a[1];
              return {
                value: a[0] ? a[1] : void 0,
                done: !0
              }
            }([a, l])
          }
        }
      }

      function c(e, o, t) {
        if (t || 2 === arguments.length)
          for (var n, r = 0, s = o.length; r < s; r++) !n && r in o || (n || (n = Array.prototype.slice.call(o, 0, r)), n[r] = o[r]);
        return e.concat(n || Array.prototype.slice.call(o))
      }
      Object.create, Object.create, "function" == typeof SuppressedError && SuppressedError
    }
  }
]);