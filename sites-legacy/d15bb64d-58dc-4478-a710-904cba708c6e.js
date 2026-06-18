try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "d15bb64d-58dc-4478-a710-904cba708c6e", e._sentryDebugIdIdentifier = "sentry-dbid-d15bb64d-58dc-4478-a710-904cba708c6e")
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
  [5847], {
    77678(e, t, n) {
      n.d(t, {
        F: () => a
      });
      const a = () => {
        const e = window.location.hostname.split(".");
        return e.slice(e.length - 2).join(".")
      }
    },
    32118(e, t, n) {
      n.d(t, {
        t: () => o
      });
      var a = n(42909),
        s = n(39991);
      const o = async ({
        service: e,
        returnUrl: t,
        pingBearer: n
      }) => {
        const [{
          iso: o
        }] = (0, a.getLocale)(), {
          authHost: r,
          clientId: c
        } = (0, s.A)(), i = await n(), l = new URL(`tpa/${e}/link`, `https://${r}.rockstargames.com`);
        return l.searchParams.append("cid", c), l.searchParams.append("lang", o), l.searchParams.append("returnUrl", t ?? window.location.pathname), i && "boolean" != typeof i && "string" == typeof i.bearerToken && l.searchParams.append("accessToken", i.bearerToken), l
      }
    },
    39991(e, t, n) {
      n.d(t, {
        A: () => c
      });
      const a = window?.env?.sc,
        s = window?.env?.marketing,
        o = ({
          apiHost: e,
          authHost: t,
          clientId: n,
          cms: o,
          graphEnv: r,
          queryManifest: c,
          scHost: i,
          hostname: l,
          cdnBase: d,
          key: p,
          marketingAuthTLD: h
        }) => {
          const m = a?.apiHost ?? e,
            u = a?.authHost ?? t,
            g = a?.cdnBase ?? d,
            w = a?.clientId ?? n,
            f = s?.marketingAuthTLD ?? h,
            b = a?.scHost ?? i,
            y = s?.pingBearerEndpoint ?? "auth/ping-bearer.json";
          return {
            apiHost: `https://${m}.rockstargames.com`,
            graphEnv: a?.graphEnv ?? r,
            host: b,
            hostname: l,
            cdnBase: g,
            key: p,
            clientId: w,
            cms: `https://${o}.rockstargames.com/graphql`,
            authHost: u,
            queryManifest: c,
            scBase: `https://${b}.rockstargames.com/`,
            login: `https://${u}.rockstargames.com/connect/authorize/${w}`,
            silentCheck: `https://${u}.rockstargames.com/connect/cors/check/${w}`,
            signup: `https://${u}.rockstargames.com/create/?cid=${w}`,
            gateway: `https://${f}/auth/gateway.json`,
            logout: `https://${f}/auth/sc-auth-logout`,
            pingBearer: `https://${f}/${y}`,
            authCookieName: "BearerToken"
          }
        },
        r = [o({
          key: "prod",
          clientId: "rsg",
          cms: "cms-prod.ros",
          graphEnv: "prod",
          authHost: "signin",
          queryManifest: "https://media-dev-rockstargames-com.akamaized.net/mfe6/prod/pq/persisted-query-manifest.json",
          scHost: "socialclub",
          apiHost: "scapi",
          hostname: /www/,
          cdnBase: "https://s.rsg.sc/sc",
          marketingAuthTLD: "www.rockstargames.com"
        }), o({
          key: "sc-prod",
          clientId: "socialclub",
          cms: "cms-prod.ros",
          graphEnv: "prod",
          authHost: "signin",
          queryManifest: "https://media-dev-rockstargames-com.akamaized.net/mfe6/prod/pq/persisted-query-manifest.json",
          scHost: "socialclub",
          apiHost: "scapi",
          hostname: /^socialclub\./,
          cdnBase: "https://s.rsg.sc/sc",
          marketingAuthTLD: "www.rockstargames.com"
        })],
        c = () => {
          const e = window?.env?.scEnv ?? null;
          if (e) {
            const t = r.find(({
              key: t
            }) => t === e) ?? null;
            if (t) return t
          }
          return r.find(({
            hostname: e
          }) => new RegExp(e).test(document.location.hostname)) || r[0]
        }
    },
    25847(e, t, n) {
      n.d(t, {
        OD: () => r,
        lv: () => c,
        wC: () => s,
        PE: () => k,
        rB: () => l,
        tC: () => g.t,
        yh: () => y,
        Ap: () => h,
        Xs: () => x,
        kx: () => v,
        rJ: () => S,
        pT: () => w,
        lV: () => E,
        PA: () => a,
        My: () => m,
        _e: () => f
      }), n(39793);
      const a = ({
          element: e
        }) => {
          const t = setInterval(() => e.scrollIntoView({
              behavior: "smooth",
              block: "center",
              inline: "center"
            }), 100),
            n = e => {
              e.target === document && (clearInterval(t), document.removeEventListener("scroll", n))
            };
          document.addEventListener("scroll", n)
        },
        s = ({
          paramName: e = "section"
        } = {}) => {
          const t = new URLSearchParams(document.location.search),
            n = document.getElementById(t.get(e) || e);
          n && (a({
            element: n
          }), o(n))
        },
        o = e => {
          const t = ["a", "button", "input", "textarea", "select", "details", '[tabindex]:not([tabindex="-1"])'];
          if (t.includes(e.nodeName.toLowerCase())) e.focus();
          else {
            const n = e?.querySelectorAll(t.join(", "));
            if (n?.length) {
              const e = [...n].find(e => !e?.hasAttribute("disabled"));
              e?.focus()
            }
          }
        };
      class r {
        name;
        friendlyName;
        id;
        onlineService;
        aliasOnlineService;
        alias;
        constructor(e, t, n, a, s = null, o = null) {
          this.name = e, this.friendlyName = t, this.id = n, this.onlineService = a, this.aliasOnlineService = s, this.alias = o
        }
      }
      const c = Object.freeze({
          pc: new r("pc", "PC Legacy", 8, "sc"),
          ps: new r("ps", "PlayStation", 3, "np", "ps"),
          ps3: new r("ps3", "PlayStation 3", 2, "np", "ps"),
          ps4: new r("ps4", "PlayStation 4", 11, "np", "ps"),
          ps5: new r("ps5", "PlayStation 5", 20, "np", "ps"),
          xbox: new r("xbox", "Xbox", 4, "xbl"),
          xbox360: new r("xbox360", "Xbox 360", 1, "xbl"),
          xboxone: new r("xboxone", "Xbox One", 12, "xbl"),
          xboxsx: new r("xboxsx", "Xbox Series X|S", 21, "xbl", null, "xboxseriesxs"),
          switch: new r("switch", "Nintendo Switch™", 18, "nintendoswitch"),
          nintendoswitch: new r("nintendoswitch", "Nintendo Switch™", 18, "nintendoswitch"),
          applestore: new r("applestore", "App Store", 102, "applestore"),
          googleplay: new r("googleplay", "Google Play", 1023, "googleplay"),
          appStore: new r("app_store", "App Store", 102, "applestore"),
          googlePlay: new r("ggle_play", "Google Play", 1023, "googleplay"),
          pcalt: new r("pcalt", "PC Enhanced", 22, "sc")
        }),
        i = Object.freeze(Object.values(c));

      function l(e) {
        if (!e) return;
        if (e instanceof r) return e;
        const t = e.toString().toLowerCase();
        return i.find(e => t === e.name || t === e.id.toString() || t === e.friendlyName.toLowerCase() || t === e.onlineService?.toLowerCase() || t === e.aliasOnlineService?.toLowerCase() || t === e.alias?.toLowerCase())
      }
      var d = n(23058),
        p = n(77678);
      const h = e => {
          const t = document.cookie.split("; "),
            n = `${e}=`,
            a = t.find(e => e.startsWith(n)),
            s = a?.substring(n.length, a.length);
          return s
        },
        m = (e, t) => {
          e && void 0 !== t && (0, d.canStoreCookie)(e) && h(e) !== t && (document.cookie = `${e}=${t}; domain=${(0,p.F)()}; path=/;`)
        };
      var u = n(87605);
      Object.values(u.d), u.d.BL;
      var g = n(32118);
      const w = e => e.keys().forEach(e),
        f = e => e.replace(/(<([^>]+)>)/gi, ""),
        b = [{
          key: "dev",
          path: "https://media-dev-rockstargames-com.akamaized.net"
        }, {
          key: "prod",
          path: "https://media-rockstargames-com.akamaized.net"
        }],
        y = (e = !0) => b.filter(t => t.key === (e ? "prod" : "dev"))[0]?.path ?? null,
        k = e => {
          e.preventDefault();
          const t = e.currentTarget.href,
            n = (e => {
              const t = new URL(e).pathname.split("/"),
                n = t[t.length - 1];
              return decodeURIComponent(n)
            })(t);
          fetch(t, {
            method: "GET",
            headers: {}
          }).then(e => e.arrayBuffer()).then(e => {
            const t = window.URL.createObjectURL(new Blob([e])),
              a = document.createElement("a");
            a.href = t, a.setAttribute("download", n), document.body.appendChild(a), a.click(), document.body.removeChild(a)
          }).catch(e => {
            console.log(e)
          })
        },
        x = () => [c.xbox360.name, c.xboxone.name, c.ps3.name, c.ps4.name, c.pc.name],
        v = () => [c.xboxsx.name, c.ps5.name, c.pcalt.name],
        E = e => v().includes(e),
        S = e => {
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
    },
    87605(e, t, n) {
      n.d(t, {
        d: () => a
      });
      const a = {
        BL: "bl"
      }
    }
  }
]);