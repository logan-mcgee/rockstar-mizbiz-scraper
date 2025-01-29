! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "a8c66d65-6b4d-4ad8-9086-e8d0685cf951", e._sentryDebugIdIdentifier = "sentry-dbid-a8c66d65-6b4d-4ad8-9086-e8d0685cf951")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-newswire-article",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [9986, 8096, 7605], {
    74511: e => {
      function t(e, t) {
        return Object.keys(t).forEach((function(o) {
          "default" === o || "__esModule" === o || e.hasOwnProperty(o) || Object.defineProperty(e, o, {
            enumerable: !0,
            get: function() {
              return t[o]
            }
          })
        })), e
      }

      function o(e, t, o, n) {
        Object.defineProperty(e, t, {
          get: o,
          set: n,
          enumerable: !0,
          configurable: !0
        })
      }
      var n = {};
      o(n, "ONETRUST_LOADED_EVENT", (() => r)), o(n, "WRAPPER_CALLED_EVENT", (() => a)), o(n, "CONSENT_CHANGED_EVENT", (() => i)), o(n, "init", (() => c));
      const s = window.document.currentScript?.nonce,
        r = "ONETRUST_LOADED_EVENT",
        a = "WRAPPER_CALLED_EVENT",
        i = "CONSENT_CHANGED_EVENT";
      let l = !0;

      function c(e) {
        const t = window.document.head,
          o = window.document.createElement("script");
        if (o.setAttribute("id", "onetrust-sdk-stub"), o.setAttribute("src", "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js"), o.setAttribute("type", "text/javascript"), o.setAttribute("charset", "UTF-8"), o.setAttribute("data-document-language", "true"), s && (o.nonce = s), !e) throw new Error("You must specify the OneTrust script ID");
        o.setAttribute("data-domain-script", e), t.insertBefore(o, t.firstChild), window.OptanonWrapper = function() {
          l && (l = !1, window.dispatchEvent(new CustomEvent(r, {
            bubbles: !0
          }))), window.dispatchEvent(new CustomEvent(a, {
            bubbles: !0
          })), window.OneTrust.OnConsentChanged((() => {
            window.dispatchEvent(new CustomEvent(i, {
              bubbles: !0
            }))
          }))
        }
      }
      var d = {};
      o(d, "NoChoiceTransactionType", (() => u)), o(d, "ConfirmedTransactionType", (() => p)), o(d, "canStoreCookie", (() => m));
      const u = "NO_CHOICE",
        p = "CONFIRMED",
        b = {
          AlwaysActive: "always active"
        };

      function m(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (!window.OneTrust) return !1;
        const o = window.OneTrust.GetDomainData(),
          n = o.Groups.find((t => t.Cookies.some((t => t.Name === e))));
        if (!n) {
          const o = `Unable to find ${e} in any OneTrust category. Therefore, we won't store the cookie`;
          return t && t.log(o), !1
        }
        if (n.Status === b.AlwaysActive) return !0;
        const s = o.ConsentIntegrationData.consentPayload.purposes.find((e => e.Id === n.PurposeId));
        return s?.TransactionType === p
      }
      t(e.exports, n), t(e.exports, d)
    },
    45356: (e, t, o) => {
      "use strict";
      var n = o(62229),
        s = Symbol.for("react.element"),
        r = Symbol.for("react.fragment"),
        a = Object.prototype.hasOwnProperty,
        i = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function c(e, t, o) {
        var n, r = {},
          c = null,
          d = null;
        for (n in void 0 !== o && (c = "" + o), void 0 !== t.key && (c = "" + t.key), void 0 !== t.ref && (d = t.ref), t) a.call(t, n) && !l.hasOwnProperty(n) && (r[n] = t[n]);
        if (e && e.defaultProps)
          for (n in t = e.defaultProps) void 0 === r[n] && (r[n] = t[n]);
        return {
          $$typeof: s,
          type: e,
          key: c,
          ref: d,
          props: r,
          _owner: i.current
        }
      }
      t.Fragment = r, t.jsx = c, t.jsxs = c
    },
    98096: (e, t, o) => {
      "use strict";
      e.exports = o(45356)
    },
    89986: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, {
        FormattedMessage: () => n.A,
        IntlProvider: () => i.Kq,
        POSIXLocales: () => d.FN,
        createDevLocaleHook: () => l.A,
        createIntl: () => s.E,
        defineMessages: () => r.YK,
        englishLocale: () => d.Vm,
        getLocale: () => c.A,
        locales: () => d.Ay,
        splitLocale: () => u.A,
        useIntl: () => a.A,
        withIntl: () => i.QY
      });
      var n = o(43160),
        s = o(78924),
        r = o(95129),
        a = o(53075),
        i = o(90823),
        l = o(14685),
        c = o(45478),
        d = o(68203),
        u = o(91631),
        p = o(49995),
        b = {};
      for (const e in p)["default", "FormattedMessage", "IntlProvider", "POSIXLocales", "createDevLocaleHook", "createIntl", "defineMessages", "englishLocale", "getLocale", "locales", "splitLocale", "useIntl", "withIntl"].indexOf(e) < 0 && (b[e] = () => p[e]);
      o.d(t, b)
    },
    90823: (e, t, o) => {
      "use strict";
      o.d(t, {
        Kq: () => l,
        QY: () => c
      });
      var n = o(62229),
        s = o(27042),
        r = o(45478),
        a = o(91631),
        i = o(98096);
      const l = e => {
        let {
          locales: t,
          lang: o,
          children: r
        } = e;
        const [l, c] = (0, n.useMemo)((() => (0, a.A)(o)), [o]), d = (0, n.useMemo)((() => function(e, t) {
          return e?.[t] ?? {}
        }(t, c)), [o, t]);
        return (0, i.jsx)(s.A, {
          messages: d,
          locale: l,
          defaultLocale: "en",
          children: r
        })
      };

      function c(e, t) {
        return o => {
          const [{
            iso: n
          }] = (0, r.A)();
          return (0, i.jsx)(l, {
            locales: t,
            lang: n,
            children: (0, i.jsx)(e, {
              ...o
            })
          })
        }
      }
    },
    49995: () => {},
    14685: (e, t, o) => {
      "use strict";
      o.d(t, {
        A: () => r
      });
      var n = o(45478),
        s = o(91631);
      const r = e => {
        if (!e.us || 0 === Object.keys(e?.us).length) throw new Error("createDevLocaleHook requires at least a 'us' key with definitions");
        return () => {
          const [{
            iso: t
          }] = (0, n.A)(), [o, r] = (0, s.A)(t);
          return e?.[r] ?? e.us
        }
      }
    },
    45478: (e, t, o) => {
      "use strict";
      o.d(t, {
        A: () => a
      });
      var n = o(15138),
        s = o(21207),
        r = o(68203);
      const a = () => {
        const {
          location: e
        } = window, t = (0, n.A)(), o = (e => {
          const t = r.Ay.map((e => e.subdomaincom)),
            o = e.pathname.substring(1).split("/"),
            n = "detect-locals" === o[0] ? 1 : 0;
          return -1 !== t.indexOf(o[n]) ? o[n] : null
        })(e), a = (e => {
          const t = e.search.substring(1).split("&").find((e => e.startsWith("lang")));
          return t?.split("=")[1]
        })(e), i = r.Vm;
        let l = i;
        const c = `rockstarweb_lang.${t.cookieIdentifier}`;
        if (t.currentSite?.site === n.C.www) l = r.Ay.find((e => e.subdomaincom === a)) || r.Ay.find((e => e.subdomaincom === o)) || i;
        else {
          const e = (0, s.Ap)(c);
          l = r.Ay.find((t => t.iso === e)) || i
        }
        return [l, (e => t => {
          (0, s.My)(e, t)
        })(c)]
      }
    },
    68203: (e, t, o) => {
      "use strict";
      o.d(t, {
        Ay: () => a,
        FN: () => r,
        Vm: () => s
      });
      const n = [{
          label: "Deutsch",
          subdomain: "de",
          subdomaincom: "de",
          support: "de",
          iso: "de-DE"
        }, {
          label: "English",
          subdomain: "en-US",
          subdomaincom: "en",
          support: "us",
          iso: "en-US"
        }, {
          label: "Español",
          subdomain: "es",
          subdomaincom: "es",
          support: "es",
          iso: "es-ES"
        }, {
          label: "Español Latinoamérica",
          subdomain: "es-mx",
          subdomaincom: "mx",
          support: "es-mx",
          iso: "es-MX"
        }, {
          label: "Français",
          subdomain: "fr",
          subdomaincom: "fr",
          support: "fr",
          iso: "fr-FR"
        }, {
          label: "Italiano",
          subdomain: "it",
          subdomaincom: "it",
          support: "it",
          iso: "it-IT"
        }, {
          label: "日本語",
          subdomain: "ja",
          subdomaincom: "jp",
          support: "jp",
          iso: "ja-JP"
        }, {
          label: "한국어",
          subdomain: "ko",
          subdomaincom: "kr",
          support: "kr",
          iso: "ko-KR"
        }, {
          label: "Polski",
          subdomain: "pl",
          subdomaincom: "pl",
          support: "pl",
          iso: "pl-PL"
        }, {
          label: "Português do Brasil",
          subdomain: "pt",
          subdomaincom: "br",
          support: "br",
          iso: "pt-BR"
        }, {
          label: "Русский",
          subdomain: "ru",
          subdomaincom: "ru",
          support: "ru",
          iso: "ru-RU"
        }, {
          label: "繁體中文",
          subdomain: "zh",
          subdomaincom: "tw",
          support: "tw",
          iso: "zh-TW"
        }, {
          label: "简体中文",
          subdomain: "zh-cn",
          subdomaincom: "zh",
          support: "zh",
          iso: "zh-CN"
        }],
        s = n[1],
        r = ["de_de", "fr_fr", "it_it", "ja_jp", "ru_ru", "es_es", "es_mx", "pt_br", "ko_kr", "zh_tw", "pl_pl", "zh_hans"],
        a = n
    },
    91631: (e, t, o) => {
      "use strict";

      function n(e) {
        const t = e.split(/[-_]/)[1];
        let o = e.split(/[-_]/)[0],
          n = t?.toLowerCase();
        return "cn" === n && (n = "hans"), o && t || (o = "en", n = "us"), [o, n]
      }
      o.d(t, {
        A: () => n
      })
    },
    15138: (e, t, o) => {
      "use strict";
      o.d(t, {
        A: () => r,
        C: () => n
      });
      const n = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store"
        },
        s = [{
          id: "prod",
          sites: {
            www: "www",
            socialClub: "socialclub",
            support: "support",
            store: "store"
          },
          cookieIdentifier: "prod"
        }],
        r = () => {
          let e;
          const {
            location: t
          } = window, o = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), n = s.findIndex((t => Object.entries(t.sites).findIndex((t => {
            let [n, s] = t;
            return s === o && (e = {
              site: n,
              subDomain: s
            }, !0)
          })) >= 0)), r = s[n >= 0 ? n : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...r,
            currentSite: e
          }
        }
    },
    21207: (e, t, o) => {
      "use strict";
      o.d(t, {
        OD: () => a,
        lv: () => i,
        pP: () => d,
        wC: () => s,
        PE: () => g,
        rB: () => c,
        yh: () => h,
        Ap: () => p,
        Xs: () => y,
        kx: () => _,
        rJ: () => x,
        pT: () => m,
        lV: () => E,
        PA: () => n,
        My: () => b,
        _e: () => f
      }), o(16188);
      const n = e => {
          let {
            element: t
          } = e;
          const o = setInterval((() => t.scrollIntoView({
              behavior: "smooth",
              block: "center",
              inline: "center"
            })), 100),
            n = e => {
              e.target === document && (clearInterval(o), document.removeEventListener("scroll", n))
            };
          document.addEventListener("scroll", n)
        },
        s = function() {
          let {
            paramName: e = "section"
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          const t = new URLSearchParams(document.location.search),
            o = document.getElementById(t.get(e) || e);
          o && (n({
            element: o
          }), r(o))
        },
        r = e => {
          const t = ["a", "button", "input", "textarea", "select", "details", '[tabindex]:not([tabindex="-1"])'];
          if (t.includes(e.nodeName.toLowerCase())) e.focus();
          else {
            const o = e?.querySelectorAll(t.join(", "));
            if (o?.length) {
              const e = [...o].find((e => !e?.hasAttribute("disabled")));
              e?.focus()
            }
          }
        };
      class a {
        constructor(e, t, o) {
          let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
          this.name = e, this.friendlyName = t, this.id = o, this.alias = n
        }
      }
      const i = Object.freeze({
          pc: new a("pc", "PC", 8),
          ps: new a("ps", "PlayStation", 3),
          ps3: new a("ps3", "PlayStation 3", 2),
          ps4: new a("ps4", "PlayStation 4", 11),
          ps5: new a("ps5", "PlayStation 5", 20),
          xbox: new a("xbox", "Xbox", 4),
          xbox360: new a("xbox360", "Xbox 360", 1),
          xboxone: new a("xboxone", "Xbox One", 12),
          xboxsx: new a("xboxsx", "Xbox Series X|S", 21, "xboxseriesxs"),
          switch: new a("switch", "Nintendo Switch™", 18),
          nintendoswitch: new a("nintendoswitch", "Nintendo Switch™", 18),
          applestore: new a("applestore", "App Store", 102),
          googleplay: new a("googleplay", "Google Play", 1023),
          appStore: new a("app_store", "App Store", 102),
          googlePlay: new a("ggle_play", "Google Play", 1023)
        }),
        l = Object.freeze(Object.values(i));

      function c(e) {
        if (!e) return;
        if (e instanceof a) return e;
        const t = e.toString().toLowerCase();
        return l.find((e => t === e.name || t === e.id.toString() || t === e.friendlyName.toLowerCase() || t === e.alias?.toLowerCase()))
      }
      const d = function() {
        for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++) t[o] = arguments[o];
        return [...t].filter(Boolean).join(" ")
      };
      var u = o(74511);
      const p = e => {
          const t = document.cookie.split("; "),
            o = `${e}=`,
            n = t.find((e => e.startsWith(o))),
            s = n?.substring(o.length, n.length);
          return s
        },
        b = (e, t) => {
          e && void 0 !== t && (0, u.canStoreCookie)(e) && p(e) !== t && (document.cookie = `${e}=${t}; domain=${(()=>{const e=window.location.hostname.split(".");return e.slice(e.length-2).join(".")})()}; path=/;`)
        };
      o(98096);
      const m = e => e.keys().forEach(e),
        f = e => e.replace(/(<([^>]+)>)/gi, ""),
        w = [{
          key: "dev",
          path: "https://media-dev-rockstargames-com.akamaized.net"
        }, {
          key: "prod",
          path: "https://media-rockstargames-com.akamaized.net"
        }],
        h = function() {
          let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          return w.filter((t => t.key === (e ? "prod" : "dev")))[0]?.path ?? null
        },
        g = e => {
          e.preventDefault();
          const t = e.currentTarget.href,
            o = (e => {
              const t = new URL(e).pathname.split("/"),
                o = t[t.length - 1];
              return decodeURIComponent(o)
            })(t);
          fetch(t, {
            method: "GET",
            headers: {}
          }).then((e => e.arrayBuffer())).then((e => {
            const t = window.URL.createObjectURL(new Blob([e])),
              n = document.createElement("a");
            n.href = t, n.setAttribute("download", o), document.body.appendChild(n), n.click(), document.body.removeChild(n)
          })).catch((e => {
            console.log(e)
          }))
        },
        y = () => [i.xbox360.name, i.xboxone.name, i.ps3.name, i.ps4.name, i.pc.name],
        _ = () => [i.xboxsx.name, i.ps5.name],
        E = e => _().includes(e),
        x = e => {
          const t = new Map([
            ["en-us", "English (United States)"],
            ["de-de", "Deutsch (Deutschland)"],
            ["fr-fr", "Français (France)"],
            ["fr-ca", "Français (Canada)"],
            ["it-it", "Italiano (Italia)"],
            ["ja-jp", "日本語"],
            ["ru-ru", "Pусский"],
            ["es-es", "Español (España)"],
            ["es-mx", "Español (México)"],
            ["pt-br", "Português (Brasil)"],
            ["ko-kr", "한국어"],
            ["zh-hans", "中文（简体）"],
            ["zh-hant", "中文（繁體）"],
            ["pl-pl", "Polski"]
          ]);
          return t.has(e) ? t.get(e) : e
        }
    }
  }
]);