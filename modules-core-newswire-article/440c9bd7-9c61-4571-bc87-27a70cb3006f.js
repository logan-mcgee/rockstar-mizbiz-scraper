try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    o = (new e.Error).stack;
  o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "440c9bd7-9c61-4571-bc87-27a70cb3006f", e._sentryDebugIdIdentifier = "sentry-dbid-440c9bd7-9c61-4571-bc87-27a70cb3006f")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-newswire-article",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [6241, 8622], {
    56848(e, o, t) {
      var r = t(70502),
        s = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0
        },
        n = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0
        },
        a = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0
        },
        i = {};

      function l(e) {
        return r.isMemo(e) ? a : i[e.$$typeof] || s
      }
      i[r.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0
      }, i[r.Memo] = a;
      var c = Object.defineProperty,
        u = Object.getOwnPropertyNames,
        d = Object.getOwnPropertySymbols,
        p = Object.getOwnPropertyDescriptor,
        m = Object.getPrototypeOf,
        f = Object.prototype;
      e.exports = function e(o, t, r) {
        if ("string" != typeof t) {
          if (f) {
            var s = m(t);
            s && s !== f && e(o, s, r)
          }
          var a = u(t);
          d && (a = a.concat(d(t)));
          for (var i = l(o), b = l(t), y = 0; y < a.length; ++y) {
            var w = a[y];
            if (!(n[w] || r && r[w] || b && b[w] || i && i[w])) {
              var g = p(t, w);
              try {
                c(o, w, g)
              } catch (e) {}
            }
          }
        }
        return o
      }
    },
    56458(e, o) {
      var t = "function" == typeof Symbol && Symbol.for,
        r = t ? Symbol.for("react.element") : 60103,
        s = t ? Symbol.for("react.portal") : 60106,
        n = t ? Symbol.for("react.fragment") : 60107,
        a = t ? Symbol.for("react.strict_mode") : 60108,
        i = t ? Symbol.for("react.profiler") : 60114,
        l = t ? Symbol.for("react.provider") : 60109,
        c = t ? Symbol.for("react.context") : 60110,
        u = t ? Symbol.for("react.async_mode") : 60111,
        d = t ? Symbol.for("react.concurrent_mode") : 60111,
        p = t ? Symbol.for("react.forward_ref") : 60112,
        m = t ? Symbol.for("react.suspense") : 60113,
        f = t ? Symbol.for("react.suspense_list") : 60120,
        b = t ? Symbol.for("react.memo") : 60115,
        y = t ? Symbol.for("react.lazy") : 60116,
        w = t ? Symbol.for("react.block") : 60121,
        g = t ? Symbol.for("react.fundamental") : 60117,
        h = t ? Symbol.for("react.responder") : 60118,
        $ = t ? Symbol.for("react.scope") : 60119;

      function _(e) {
        if ("object" == typeof e && null !== e) {
          var o = e.$$typeof;
          switch (o) {
            case r:
              switch (e = e.type) {
                case u:
                case d:
                case n:
                case i:
                case a:
                case m:
                  return e;
                default:
                  switch (e = e && e.$$typeof) {
                    case c:
                    case p:
                    case y:
                    case b:
                    case l:
                      return e;
                    default:
                      return o
                  }
              }
            case s:
              return o
          }
        }
      }

      function k(e) {
        return _(e) === d
      }
      o.AsyncMode = u, o.ConcurrentMode = d, o.ContextConsumer = c, o.ContextProvider = l, o.Element = r, o.ForwardRef = p, o.Fragment = n, o.Lazy = y, o.Memo = b, o.Portal = s, o.Profiler = i, o.StrictMode = a, o.Suspense = m, o.isAsyncMode = function(e) {
        return k(e) || _(e) === u
      }, o.isConcurrentMode = k, o.isContextConsumer = function(e) {
        return _(e) === c
      }, o.isContextProvider = function(e) {
        return _(e) === l
      }, o.isElement = function(e) {
        return "object" == typeof e && null !== e && e.$$typeof === r
      }, o.isForwardRef = function(e) {
        return _(e) === p
      }, o.isFragment = function(e) {
        return _(e) === n
      }, o.isLazy = function(e) {
        return _(e) === y
      }, o.isMemo = function(e) {
        return _(e) === b
      }, o.isPortal = function(e) {
        return _(e) === s
      }, o.isProfiler = function(e) {
        return _(e) === i
      }, o.isStrictMode = function(e) {
        return _(e) === a
      }, o.isSuspense = function(e) {
        return _(e) === m
      }, o.isValidElementType = function(e) {
        return "string" == typeof e || "function" == typeof e || e === n || e === d || e === i || e === a || e === m || e === f || "object" == typeof e && null !== e && (e.$$typeof === y || e.$$typeof === b || e.$$typeof === l || e.$$typeof === c || e.$$typeof === p || e.$$typeof === g || e.$$typeof === h || e.$$typeof === $ || e.$$typeof === w)
      }, o.typeOf = _
    },
    70502(e, o, t) {
      e.exports = t(56458)
    },
    94931(e, o, t) {
      var r = t(93082),
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
    39793(e, o, t) {
      e.exports = t(94931)
    },
    68403(e, o, t) {
      t.r(o), t.d(o, {
        FormattedMessage: () => c,
        POSIXLocales: () => $,
        ReactIntlProviderForMocking: () => p.A,
        createDevLocaleHook: () => v,
        createIntl: () => d.E,
        defineMessages: () => u.YK,
        englishLocale: () => h,
        getCookieValueByName: () => y,
        getLocale: () => k,
        linkWithLocale: () => C,
        localeCookieHandler: () => w,
        locales: () => _,
        onLanguageChange: () => j,
        splitLocale: () => S,
        useIntl: () => a.A,
        withIntl: () => x
      });
      var r = t(51177),
        s = t(93082),
        n = t(2603),
        a = t(74775);

      function i(e) {
        var o = (0, a.A)(),
          t = o.formatMessage,
          r = o.textComponent,
          n = void 0 === r ? s.Fragment : r,
          i = e.id,
          l = e.description,
          c = e.defaultMessage,
          u = e.values,
          d = e.children,
          p = e.tagName,
          m = void 0 === p ? n : p,
          f = t({
            id: i,
            description: l,
            defaultMessage: c
          }, u, {
            ignoreTag: e.ignoreTag
          });
        return "function" == typeof d ? d(Array.isArray(f) ? f : [f]) : m ? s.createElement(m, null, f) : s.createElement(s.Fragment, null, f)
      }
      i.displayName = "FormattedMessage";
      var l = s.memo(i, function(e, o) {
        var t = e.values,
          s = (0, r.Tt)(e, ["values"]),
          a = o.values,
          i = (0, r.Tt)(o, ["values"]);
        return (0, n.bN)(a, t) && (0, n.bN)(s, i)
      });
      l.displayName = "MemoizedFormattedMessage";
      const c = l;
      var u = t(57338),
        d = t(73747),
        p = t(54422),
        m = t(39793),
        f = t(47279);
      const b = (e, o) => {
          if (!e || !o) return void console.log(`Couldn't set cookie (${e}) to value (${o})`);
          const t = window.location.hostname.split("."),
            r = t.slice(t.length - 2).join(".");
          document.cookie = `${e}=${o}; domain=${r}; path=/;`
        },
        y = e => {
          const o = document.cookie.split("; "),
            t = `${e}=`,
            r = o.find(e => e.startsWith(t)),
            s = r?.substring(t.length, r.length);
          return s
        },
        w = (e, o, t = !1) => {
          const r = y(e);
          return r && !t || b(e, o), [r, (s = e, e => {
            b(s, e)
          })];
          var s
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
        h = g[0],
        $ = ["de_de", "fr_fr", "it_it", "ja_jp", "ru_ru", "es_es", "es_mx", "pt_br", "ko_kr", "zh_tw", "pl_pl", "zh_hans"],
        _ = g,
        k = () => {
          const {
            location: e
          } = window, o = (0, f.A)(), t = (e => {
            const o = _.map(e => e.subdomaincom),
              t = e.pathname.substring(1).split("/"),
              r = "detect-locals" === t[0] ? 1 : 0;
            return -1 !== o.indexOf(t[r]) ? t[r] : null
          })(e), r = (e => {
            const o = e.search.substring(1).split("&").find(e => e.startsWith("lang"));
            return o?.split("=")[1]
          })(e), s = h;
          let n;
          const a = `rockstarweb_lang.${o.cookieIdentifier}`,
            i = y(a);
          n = o.currentSite?.site === f.C.www ? _.find(e => e.subdomaincom === r) || _.find(e => e.subdomaincom === t) || s : _.find(e => e.iso === i) || s;
          const [, l] = w(a, n.iso);
          return [n, l]
        };

      function x(e, o, t, r) {
        return n => {
          const a = (0, s.useMemo)(() => {
            if (o) return function(e, o) {
              return function(e, o) {
                const t = o ?? k()[0].iso ?? "en-US",
                  r = function(e, o) {
                    return e[o] ?? {}
                  }(e, t);
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
          }, [t]);
          return (0, m.jsx)(p.A, {
            locale: a?.locale || "en-US",
            messages: {
              ...a?.messages
            },
            onError: r,
            children: a && (0, m.jsx)(e, {
              ...n
            })
          }, "intl-provider")
        }
      }

      function S(e) {
        let [o, t] = e.split(/[-_]/), r = t?.toLowerCase();
        return "cn" === r && (r = "hans"), o && t || (o = "en", r = "us"), [o, r]
      }
      const v = e => {
          if (!e.us || 0 === Object.keys(e?.us).length) throw new Error("createDevLocaleHook requires at least a 'us' key with definitions");
          return () => {
            const [{
              iso: o
            }] = k(), [t, r] = S(o);
            return e?.[r] ?? e.us
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
        C = e => {
          const [o] = k(), {
            sites: t
          } = (0, f.A)();
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
              }] of Object.entries(E)) {
              if (!n.test(e.toLowerCase())) continue;
              const u = t[s];
              if (!u) continue;
              let d = "";
              "en" !== o.subdomaincom && i && (d = `/${o[l||"subdomaincom"]}`, "circoloco" === s && "/" === r.pathname && (d += "/"));
              const p = r.host.split(".");
              let m = "";
              return "www" !== s || c?.some(e => e.test(r.pathname)) ? ("www" !== s && (m += `https://${u}`, m += a ? `.${p.at(-2)}.${p.at(-1)}` : `.${p.at(-1)}`), {
                link: `${m}${d}${"/"===r.pathname?"":r.pathname}${r.search}${r.hash}`,
                isExternal: !0
              }) : {
                link: `${m}${"/"===r.pathname?"":r.pathname}${r.search}${r.hash}`,
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
          const r = (0, f.A)(),
            [, s] = k(),
            {
              subdomaincom: n,
              iso: a
            } = e,
            i = (e => {
              let o = location.pathname.replace(/^\/|\/$/g, "");
              const t = o.split("/");
              return _.map(e => e.subdomaincom).includes(t[0]) && (o = t.slice(1).join("/")), r.currentSite?.site === f.C.www ? "en" === e ? `${window.location.origin}/${o}${location.search}` : `${window.location.origin}/${e}/${o}${location.search}` : `${window.location.origin}/${o}${location.search}`
            })(n);
          o?.({
            event: "cta_other",
            link_url: i,
            text: n,
            element_placement: t?.toLowerCase()
          }), s(a), window.location.assign(i)
        }
    },
    47279(e, o, t) {
      t.d(o, {
        A: () => a,
        C: () => s
      });
      var r = t(40283);
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
        a = () => {
          let e;
          const {
            location: o
          } = window, t = o.hostname.substring(0, o.hostname.indexOf(".rockstargames.com")), s = n.findIndex(o => Object.entries(o.sites).findIndex(([o, r]) => r === t && (e = {
            site: o,
            subDomain: r
          }, !0)) >= 0), a = n[s >= 0 ? s : 0], i = n.find(e => e.id === a.fallbackEnvironment);
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), (0, r.omit)((0, r.merge)({}, i, {
            currentSite: e
          }, a), "fallbackEnvironment")
        }
    }
  }
]);