! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "da0a0f7e-4506-4e9e-9415-e67499dfd003", e._sentryDebugIdIdentifier = "sentry-dbid-da0a0f7e-4506-4e9e-9415-e67499dfd003")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-careers",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_careers = self.webpackChunk_rockstargames_sites_careers || []).push([
  [986, 605], {
    9986: (e, t, o) => {
      "use strict";
      o.r(t), o.d(t, {
        FormattedMessage: () => s.A,
        IntlProvider: () => i.Kq,
        POSIXLocales: () => d.FN,
        createDevLocaleHook: () => l.A,
        createIntl: () => n.E,
        defineMessages: () => a.YK,
        englishLocale: () => d.Vm,
        getLocale: () => c.A,
        locales: () => d.Ay,
        splitLocale: () => u.A,
        useIntl: () => r.A,
        withIntl: () => i.QY
      });
      var s = o(3160),
        n = o(8924),
        a = o(5129),
        r = o(3075),
        i = o(823),
        l = o(4685),
        c = o(5478),
        d = o(8203),
        u = o(1631),
        p = o(9995),
        m = {};
      for (const e in p)["default", "FormattedMessage", "IntlProvider", "POSIXLocales", "createDevLocaleHook", "createIntl", "defineMessages", "englishLocale", "getLocale", "locales", "splitLocale", "useIntl", "withIntl"].indexOf(e) < 0 && (m[e] = () => p[e]);
      o.d(t, m)
    },
    823: (e, t, o) => {
      "use strict";
      o.d(t, {
        Kq: () => l,
        QY: () => c
      });
      var s = o(2229),
        n = o(7042),
        a = o(5478),
        r = o(1631),
        i = o(8096);
      const l = e => {
        let {
          locales: t,
          lang: o,
          children: a
        } = e;
        const [l, c] = (0, s.useMemo)((() => (0, r.A)(o)), [o]), d = (0, s.useMemo)((() => function(e, t) {
          return e?.[t] ?? {}
        }(t, c)), [o, t]);
        return (0, i.jsx)(n.A, {
          messages: d,
          locale: l,
          defaultLocale: "en",
          children: a
        })
      };

      function c(e, t) {
        return o => {
          const [{
            iso: s
          }] = (0, a.A)();
          return (0, i.jsx)(l, {
            locales: t,
            lang: s,
            children: (0, i.jsx)(e, {
              ...o
            })
          })
        }
      }
    },
    9995: () => {},
    4685: (e, t, o) => {
      "use strict";
      o.d(t, {
        A: () => a
      });
      var s = o(5478),
        n = o(1631);
      const a = e => {
        if (!e.us || 0 === Object.keys(e?.us).length) throw new Error("createDevLocaleHook requires at least a 'us' key with definitions");
        return () => {
          const [{
            iso: t
          }] = (0, s.A)(), [o, a] = (0, n.A)(t);
          return e?.[a] ?? e.us
        }
      }
    },
    5478: (e, t, o) => {
      "use strict";
      o.d(t, {
        A: () => r
      });
      var s = o(5138),
        n = o(1207),
        a = o(8203);
      const r = () => {
        const {
          location: e
        } = window, t = (0, s.A)(), o = (e => {
          const t = a.Ay.map((e => e.subdomaincom)),
            o = e.pathname.substring(1).split("/"),
            s = "detect-locals" === o[0] ? 1 : 0;
          return -1 !== t.indexOf(o[s]) ? o[s] : null
        })(e), r = (e => {
          const t = e.search.substring(1).split("&").find((e => e.startsWith("lang")));
          return t?.split("=")[1]
        })(e), i = a.Vm;
        let l = i;
        const c = `rockstarweb_lang.${t.cookieIdentifier}`;
        if (t.currentSite?.site === s.C.www) l = a.Ay.find((e => e.subdomaincom === r)) || a.Ay.find((e => e.subdomaincom === o)) || i;
        else {
          const e = (0, n.Ap)(c);
          l = a.Ay.find((t => t.iso === e)) || i
        }
        return [l, (e => t => {
          (0, n.My)(e, t)
        })(c)]
      }
    },
    8203: (e, t, o) => {
      "use strict";
      o.d(t, {
        Ay: () => r,
        FN: () => a,
        Vm: () => n
      });
      const s = [{
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
        n = s[1],
        a = ["de_de", "fr_fr", "it_it", "ja_jp", "ru_ru", "es_es", "es_mx", "pt_br", "ko_kr", "zh_tw", "pl_pl", "zh_hans"],
        r = s
    },
    1631: (e, t, o) => {
      "use strict";

      function s(e) {
        const t = e.split(/[-_]/)[1];
        let o = e.split(/[-_]/)[0],
          s = t?.toLowerCase();
        return "cn" === s && (s = "hans"), o && t || (o = "en", s = "us"), [o, s]
      }
      o.d(t, {
        A: () => s
      })
    },
    5138: (e, t, o) => {
      "use strict";
      o.d(t, {
        A: () => a,
        C: () => s
      });
      const s = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store"
        },
        n = [{
          id: "prod",
          sites: {
            www: "www",
            socialClub: "socialclub",
            support: "support",
            store: "store"
          },
          cookieIdentifier: "prod"
        }],
        a = () => {
          let e;
          const {
            location: t
          } = window, o = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), s = n.findIndex((t => Object.entries(t.sites).findIndex((t => {
            let [s, n] = t;
            return n === o && (e = {
              site: s,
              subDomain: n
            }, !0)
          })) >= 0)), a = n[s >= 0 ? s : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...a,
            currentSite: e
          }
        }
    },
    1207: (e, t, o) => {
      "use strict";
      o.d(t, {
        OD: () => r,
        lv: () => i,
        pP: () => d,
        wC: () => n,
        PE: () => w,
        rB: () => c,
        yh: () => h,
        Ap: () => p,
        Xs: () => g,
        kx: () => y,
        rJ: () => k,
        pT: () => b,
        lV: () => x,
        PA: () => s,
        My: () => m
      }), o(6188);
      const s = e => {
          let {
            element: t
          } = e;
          const o = setInterval((() => t.scrollIntoView({
              behavior: "smooth",
              block: "center",
              inline: "center"
            })), 100),
            s = e => {
              e.target === document && (clearInterval(o), document.removeEventListener("scroll", s))
            };
          document.addEventListener("scroll", s)
        },
        n = function() {
          let {
            paramName: e = "section"
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          const t = new URLSearchParams(document.location.search),
            o = document.getElementById(t.get(e) || e);
          o && (s({
            element: o
          }), a(o))
        },
        a = e => {
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
      class r {
        constructor(e, t, o) {
          let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
          this.name = e, this.friendlyName = t, this.id = o, this.alias = s
        }
      }
      const i = Object.freeze({
          pc: new r("pc", "PC", 8),
          ps: new r("ps", "PlayStation", 3),
          ps3: new r("ps3", "PlayStation 3", 2),
          ps4: new r("ps4", "PlayStation 4", 11),
          ps5: new r("ps5", "PlayStation 5", 20),
          xbox: new r("xbox", "Xbox", 4),
          xbox360: new r("xbox360", "Xbox 360", 1),
          xboxone: new r("xboxone", "Xbox One", 12),
          xboxsx: new r("xboxsx", "Xbox Series X|S", 21, "xboxseriesxs"),
          switch: new r("switch", "Nintendo Switch™", 18),
          nintendoswitch: new r("nintendoswitch", "Nintendo Switch™", 18),
          applestore: new r("applestore", "App Store", 102),
          googleplay: new r("googleplay", "Google Play", 1023),
          appStore: new r("app_store", "App Store", 102),
          googlePlay: new r("ggle_play", "Google Play", 1023)
        }),
        l = Object.freeze(Object.values(i));

      function c(e) {
        if (!e) return;
        if (e instanceof r) return e;
        const t = e.toString().toLowerCase();
        return l.find((e => t === e.name || t === e.id.toString() || t === e.friendlyName.toLowerCase() || t === e.alias?.toLowerCase()))
      }
      const d = function() {
        for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++) t[o] = arguments[o];
        return [...t].filter(Boolean).join(" ")
      };
      var u = o(4511);
      const p = e => {
          const t = document.cookie.split("; "),
            o = `${e}=`,
            s = t.find((e => e.startsWith(o))),
            n = s?.substring(o.length, s.length);
          return n
        },
        m = (e, t) => {
          e && void 0 !== t && (0, u.canStoreCookie)(e) && p(e) !== t && (document.cookie = `${e}=${t}; domain=${(()=>{const e=window.location.hostname.split(".");return e.slice(e.length-2).join(".")})()}; path=/;`)
        };
      o(8096);
      const b = e => e.keys().forEach(e),
        f = [{
          key: "dev",
          path: "https://media-dev-rockstargames-com.akamaized.net"
        }, {
          key: "prod",
          path: "https://media-rockstargames-com.akamaized.net"
        }],
        h = function() {
          let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          return f.filter((t => t.key === (e ? "prod" : "dev")))[0]?.path ?? null
        },
        w = e => {
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
              s = document.createElement("a");
            s.href = t, s.setAttribute("download", o), document.body.appendChild(s), s.click(), document.body.removeChild(s)
          })).catch((e => {
            console.log(e)
          }))
        },
        g = () => [i.xbox360.name, i.xboxone.name, i.ps3.name, i.ps4.name, i.pc.name],
        y = () => [i.xboxsx.name, i.ps5.name],
        x = e => y().includes(e),
        k = e => {
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