try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    o = (new e.Error).stack;
  o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "7f59540d-21c5-405d-92cd-8a36645f0f1f", e._sentryDebugIdIdentifier = "sentry-dbid-7f59540d-21c5-405d-92cd-8a36645f0f1f")
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
  [784, 8403], {
    94931(e, o, t) {
      var n = t(4637),
        r = Symbol.for("react.element"),
        s = Symbol.for("react.fragment"),
        a = Object.prototype.hasOwnProperty,
        i = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
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
        for (n in void 0 !== t && (c = "" + t), void 0 !== o.key && (c = "" + o.key), void 0 !== o.ref && (u = o.ref), o) a.call(o, n) && !l.hasOwnProperty(n) && (s[n] = o[n]);
        if (e && e.defaultProps)
          for (n in o = e.defaultProps) void 0 === s[n] && (s[n] = o[n]);
        return {
          $$typeof: r,
          type: e,
          key: c,
          ref: u,
          props: s,
          _owner: i.current
        }
      }
      o.Fragment = s, o.jsx = c, o.jsxs = c
    },
    39793(e, o, t) {
      e.exports = t(94931)
    },
    68403(e, o, t) {
      t.r(o), t.d(o, {
        FormattedMessage: () => c,
        POSIXLocales: () => _,
        ReactIntlProviderForMocking: () => d.A,
        createDevLocaleHook: () => O,
        createIntl: () => p.E,
        defineMessages: () => u.YK,
        englishLocale: () => y,
        getCookieValueByName: () => w,
        getLocale: () => x,
        linkWithLocale: () => j,
        localeCookieHandler: () => h,
        locales: () => k,
        onLanguageChange: () => I,
        splitLocale: () => $,
        useIntl: () => a.A,
        withIntl: () => v
      });
      var n = t(51177),
        r = t(4637),
        s = t(2603),
        a = t(74775);

      function i(e) {
        var o = (0, a.A)(),
          t = o.formatMessage,
          n = o.textComponent,
          s = void 0 === n ? r.Fragment : n,
          i = e.id,
          l = e.description,
          c = e.defaultMessage,
          u = e.values,
          p = e.children,
          d = e.tagName,
          f = void 0 === d ? s : d,
          m = t({
            id: i,
            description: l,
            defaultMessage: c
          }, u, {
            ignoreTag: e.ignoreTag
          });
        return "function" == typeof p ? p(Array.isArray(m) ? m : [m]) : f ? r.createElement(f, null, m) : r.createElement(r.Fragment, null, m)
      }
      i.displayName = "FormattedMessage";
      var l = r.memo(i, function(e, o) {
        var t = e.values,
          r = (0, n.Tt)(e, ["values"]),
          a = o.values,
          i = (0, n.Tt)(o, ["values"]);
        return (0, s.bN)(a, t) && (0, s.bN)(r, i)
      });
      l.displayName = "MemoizedFormattedMessage";
      const c = l;
      var u = t(57338),
        p = t(73747),
        d = t(54422),
        f = t(39793),
        m = t(47279);
      const b = (e, o) => {
          if (!e || !o) return void console.log(`Couldn't set cookie (${e}) to value (${o})`);
          const t = window.location.hostname.split("."),
            n = t.slice(t.length - 2).join(".");
          document.cookie = `${e}=${o}; domain=${n}; path=/;`
        },
        w = e => {
          const o = document.cookie.split("; "),
            t = `${e}=`,
            n = o.find(e => e.startsWith(t)),
            r = n?.substring(t.length, n.length);
          return r
        },
        h = (e, o, t = !1) => {
          const n = w(e);
          return n && !t || b(e, o), [n, (r = e, e => {
            b(r, e)
          })];
          var r
        },
        g = [{
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
        y = g[0],
        _ = ["de_de", "fr_fr", "it_it", "ja_jp", "ru_ru", "es_es", "es_mx", "pt_br", "ko_kr", "zh_tw", "pl_pl", "zh_hans"],
        k = g,
        x = () => {
          const {
            location: e
          } = window, o = (0, m.A)(), t = (e => {
            const o = k.map(e => e.subdomaincom),
              t = e.pathname.substring(1).split("/"),
              n = "detect-locals" === t[0] ? 1 : 0;
            return -1 !== o.indexOf(t[n]) ? t[n] : null
          })(e), n = (e => {
            const o = e.search.substring(1).split("&").find(e => e.startsWith("lang"));
            return o?.split("=")[1]
          })(e), r = y;
          let s;
          const a = `rockstarweb_lang.${o.cookieIdentifier}`,
            i = w(a);
          s = o.currentSite?.site === m.C.www ? k.find(e => e.subdomaincom === n) || k.find(e => e.subdomaincom === t) || r : k.find(e => e.iso === i) || r;
          const [, l] = h(a, s.iso);
          return [s, l]
        };

      function v(e, o, t, n) {
        return s => {
          const a = (0, r.useMemo)(() => {
            if (o) return function(e, o) {
              return function(e, o) {
                const t = o ?? x()[0].iso ?? "en-US",
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
          return (0, f.jsx)(d.A, {
            locale: a?.locale || "en-US",
            messages: {
              ...a?.messages
            },
            onError: n,
            children: a && (0, f.jsx)(e, {
              ...s
            })
          }, "intl-provider")
        }
      }

      function $(e) {
        let [o, t] = e.split(/[-_]/), n = t?.toLowerCase();
        return "cn" === n && (n = "hans"), o && t || (o = "en", n = "us"), [o, n]
      }
      const O = e => {
          if (!e.us || 0 === Object.keys(e?.us).length) throw new Error("createDevLocaleHook requires at least a 'us' key with definitions");
          return () => {
            const [{
              iso: o
            }] = x(), [t, n] = $(o);
            return e?.[n] ?? e.us
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
        j = e => {
          const [o] = x(), {
            sites: t
          } = (0, m.A)();
          let n;
          try {
            n = new URL(e)
          } catch {
            n = null
          }
          if (n)
            for (const [r, {
                regex: s,
                isSubdomain: a,
                isLocaleInUrl: i,
                fieldName: l,
                externalPaths: c
              }] of Object.entries(E)) {
              if (!s.test(e.toLowerCase())) continue;
              const u = t[r];
              if (!u) continue;
              let p = "";
              "en" !== o.subdomaincom && i && (p = `/${o[l||"subdomaincom"]}`, "circoloco" === r && "/" === n.pathname && (p += "/"));
              const d = n.host.split(".");
              let f = "";
              return "www" !== r || c?.some(e => e.test(n.pathname)) ? ("www" !== r && (f += `https://${u}`, f += a ? `.${d.at(-2)}.${d.at(-1)}` : `.${d.at(-1)}`), {
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
        I = ({
          selectedLocale: e,
          track: o,
          parent: t = ""
        }) => {
          const n = (0, m.A)(),
            [, r] = x(),
            {
              subdomaincom: s,
              iso: a
            } = e,
            i = (e => {
              let o = location.pathname.replace(/^\/|\/$/g, "");
              const t = o.split("/");
              return k.map(e => e.subdomaincom).includes(t[0]) && (o = t.slice(1).join("/")), n.currentSite?.site === m.C.www ? "en" === e ? `${window.location.origin}/${o}${location.search}` : `${window.location.origin}/${e}/${o}${location.search}` : `${window.location.origin}/${o}${location.search}`
            })(s);
          o?.({
            event: "cta_other",
            link_url: i,
            text: s,
            element_placement: t?.toLowerCase()
          }), r(a), window.location.assign(i)
        }
    },
    47279(e, o, t) {
      t.d(o, {
        A: () => i,
        C: () => s
      });
      var n = t(68861),
        r = t(50573);
      const s = {
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
          } = window, t = o.hostname.substring(0, o.hostname.indexOf(".rockstargames.com")), s = a.findIndex(o => Object.entries(o.sites).findIndex(([o, n]) => n === t && (e = {
            site: o,
            subDomain: n
          }, !0)) >= 0), i = a[s >= 0 ? s : 0], l = a.find(e => e.id === i.fallbackEnvironment);
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), (0, r.A)((0, n.A)({}, l, {
            currentSite: e
          }, i), "fallbackEnvironment")
        }
    },
    51177(e, o, t) {
      t.d(o, {
        C6: () => r,
        Cl: () => s,
        Tt: () => a,
        YH: () => l,
        fX: () => c,
        sH: () => i
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

      function a(e, o) {
        var t = {};
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && o.indexOf(n) < 0 && (t[n] = e[n]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var r = 0;
          for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) o.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (t[n[r]] = e[n[r]])
        }
        return t
      }

      function i(e, o, t, n) {
        return new(t || (t = Promise))(function(r, s) {
          function a(e) {
            try {
              l(n.next(e))
            } catch (e) {
              s(e)
            }
          }

          function i(e) {
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
            })).then(a, i)
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
          a = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
        return a.next = i(0), a.throw = i(1), a.return = i(2), "function" == typeof Symbol && (a[Symbol.iterator] = function() {
          return this
        }), a;

        function i(i) {
          return function(l) {
            return function(i) {
              if (t) throw new TypeError("Generator is already executing.");
              for (; a && (a = 0, i[0] && (s = 0)), s;) try {
                if (t = 1, n && (r = 2 & i[0] ? n.return : i[0] ? n.throw || ((r = n.return) && r.call(n), 0) : n.next) && !(r = r.call(n, i[1])).done) return r;
                switch (n = 0, r && (i = [2 & i[0], r.value]), i[0]) {
                  case 0:
                  case 1:
                    r = i;
                    break;
                  case 4:
                    return s.label++, {
                      value: i[1],
                      done: !1
                    };
                  case 5:
                    s.label++, n = i[1], i = [0];
                    continue;
                  case 7:
                    i = s.ops.pop(), s.trys.pop();
                    continue;
                  default:
                    if (!((r = (r = s.trys).length > 0 && r[r.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                      s = 0;
                      continue
                    }
                    if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                      s.label = i[1];
                      break
                    }
                    if (6 === i[0] && s.label < r[1]) {
                      s.label = r[1], r = i;
                      break
                    }
                    if (r && s.label < r[2]) {
                      s.label = r[2], s.ops.push(i);
                      break
                    }
                    r[2] && s.ops.pop(), s.trys.pop();
                    continue
                }
                i = o.call(e, s)
              } catch (e) {
                i = [6, e], n = 0
              } finally {
                t = r = 0
              }
              if (5 & i[0]) throw i[1];
              return {
                value: i[0] ? i[1] : void 0,
                done: !0
              }
            }([i, l])
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