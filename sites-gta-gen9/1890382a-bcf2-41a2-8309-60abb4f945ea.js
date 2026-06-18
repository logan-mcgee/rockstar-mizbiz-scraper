try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "1890382a-bcf2-41a2-8309-60abb4f945ea", e._sentryDebugIdIdentifier = "sentry-dbid-1890382a-bcf2-41a2-8309-60abb4f945ea")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-gta-gen9",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [5847], {
    77678(e, n, t) {
      t.d(n, {
        F: () => a
      });
      const a = () => {
        const e = window.location.hostname.split(".");
        return e.slice(e.length - 2).join(".")
      }
    },
    25847(e, n, t) {
      t.d(n, {
        OD: () => l,
        lv: () => i,
        wC: () => o,
        PE: () => x,
        rB: () => c,
        tC: () => h.t,
        yh: () => y,
        Ap: () => b,
        Xs: () => k,
        kx: () => S,
        rJ: () => _,
        pT: () => g,
        lV: () => v,
        PA: () => a,
        My: () => f,
        _e: () => w
      }), t(39793), t(40283);
      const a = ({
          element: e
        }) => {
          const n = setInterval(() => e.scrollIntoView({
              behavior: "smooth",
              block: "center",
              inline: "center"
            }), 100),
            t = e => {
              e.target === document && (clearInterval(n), document.removeEventListener("scroll", t))
            };
          document.addEventListener("scroll", t)
        },
        o = ({
          paramName: e = "section"
        } = {}) => {
          const n = new URLSearchParams(document.location.search),
            t = document.getElementById(n.get(e) || e);
          t && (a({
            element: t
          }), s(t))
        },
        s = e => {
          const n = ["a", "button", "input", "textarea", "select", "details", '[tabindex]:not([tabindex="-1"])'];
          if (n.includes(e.nodeName.toLowerCase())) e.focus();
          else {
            const t = e?.querySelectorAll(n.join(", "));
            if (t?.length) {
              const e = [...t].find(e => !e?.hasAttribute("disabled"));
              e?.focus()
            }
          }
        };
      class l {
        name;
        friendlyName;
        id;
        onlineService;
        aliasOnlineService;
        alias;
        constructor(e, n, t, a, o = null, s = null) {
          this.name = e, this.friendlyName = n, this.id = t, this.onlineService = a, this.aliasOnlineService = o, this.alias = s
        }
      }
      const i = Object.freeze({
          pc: new l("pc", "PC Legacy", 8, "sc"),
          ps: new l("ps", "PlayStation", 3, "np", "ps"),
          ps3: new l("ps3", "PlayStation 3", 2, "np", "ps"),
          ps4: new l("ps4", "PlayStation 4", 11, "np", "ps"),
          ps5: new l("ps5", "PlayStation 5", 20, "np", "ps"),
          xbox: new l("xbox", "Xbox", 4, "xbl"),
          xbox360: new l("xbox360", "Xbox 360", 1, "xbl"),
          xboxone: new l("xboxone", "Xbox One", 12, "xbl"),
          xboxsx: new l("xboxsx", "Xbox Series X|S", 21, "xbl", null, "xboxseriesxs"),
          switch: new l("switch", "Nintendo Switch™", 18, "nintendoswitch"),
          nintendoswitch: new l("nintendoswitch", "Nintendo Switch™", 18, "nintendoswitch"),
          applestore: new l("applestore", "App Store", 102, "applestore"),
          googleplay: new l("googleplay", "Google Play", 1023, "googleplay"),
          appStore: new l("app_store", "App Store", 102, "applestore"),
          googlePlay: new l("ggle_play", "Google Play", 1023, "googleplay"),
          pcalt: new l("pcalt", "PC Enhanced", 22, "sc")
        }),
        r = Object.freeze(Object.values(i));

      function c(e) {
        if (!e) return;
        if (e instanceof l) return e;
        const n = e.toString().toLowerCase();
        return r.find(e => n === e.name || n === e.id.toString() || n === e.friendlyName.toLowerCase() || n === e.onlineService?.toLowerCase() || n === e.aliasOnlineService?.toLowerCase() || n === e.alias?.toLowerCase())
      }
      var d = t(23058),
        p = t(77678);
      const b = e => {
          const n = document.cookie.split("; "),
            t = `${e}=`,
            a = n.find(e => e.startsWith(t)),
            o = a?.substring(t.length, a.length);
          return o
        },
        f = (e, n) => {
          e && void 0 !== n && (0, d.canStoreCookie)(e) && b(e) !== n && (document.cookie = `${e}=${n}; domain=${(0,p.F)()}; path=/;`)
        };
      var u = t(87605);
      Object.values(u.d), u.d.BL;
      var h = t(32118);
      const g = e => e.keys().forEach(e),
        w = e => e.replace(/(<([^>]+)>)/gi, ""),
        m = [{
          key: "dev",
          path: "https://media-dev-rockstargames-com.akamaized.net"
        }, {
          key: "prod",
          path: "https://media-rockstargames-com.akamaized.net"
        }],
        y = (e = !0) => m.filter(n => n.key === (e ? "prod" : "dev"))[0]?.path ?? null,
        x = e => {
          e.preventDefault();
          const n = e.currentTarget.href,
            t = (e => {
              const n = new URL(e).pathname.split("/"),
                t = n[n.length - 1];
              return decodeURIComponent(t)
            })(n);
          fetch(n, {
            method: "GET",
            headers: {}
          }).then(e => e.arrayBuffer()).then(e => {
            const n = window.URL.createObjectURL(new Blob([e])),
              a = document.createElement("a");
            a.href = n, a.setAttribute("download", t), document.body.appendChild(a), a.click(), document.body.removeChild(a)
          }).catch(e => {
            console.log(e)
          })
        },
        k = () => [i.xbox360.name, i.xboxone.name, i.ps3.name, i.ps4.name, i.pc.name],
        S = () => [i.xboxsx.name, i.ps5.name, i.pcalt.name],
        v = e => S().includes(e),
        _ = e => {
          const n = new Map([
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
          return n.has(e) ? n.get(e) : e
        }
    },
    87605(e, n, t) {
      t.d(n, {
        d: () => a
      });
      const a = {
        BL: "bl"
      }
    }
  }
]);