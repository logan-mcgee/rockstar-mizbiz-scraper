try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "02b173e6-b137-4b7d-9037-d22f43a7bb3b", e._sentryDebugIdIdentifier = "sentry-dbid-02b173e6-b137-4b7d-9037-d22f43a7bb3b")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-red-dead-online",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_red_dead_online = self.webpackChunk_rockstargames_sites_red_dead_online || []).push([
  [9192], {
    43091(e, n, t) {
      t.d(n, ["F", 0, () => {
        const e = window.location.hostname.split(".");
        return e.slice(e.length - 2).join(".")
      }])
    },
    29192(e, n, t) {
      t.d(n, {
        OD: () => l,
        lv: () => i,
        wC: () => a,
        PE: () => y,
        rB: () => r,
        tC: () => h.t,
        yh: () => m,
        Ap: () => b,
        Xs: () => x,
        kx: () => k,
        rJ: () => v,
        pT: () => w,
        lV: () => S,
        PA: () => o,
        My: () => u
      }), t(39793);
      const o = ({
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
        a = ({
          paramName: e = "section"
        } = {}) => {
          const n = new URLSearchParams(document.location.search),
            t = document.getElementById(n.get(e) || e);
          t && (o({
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
        constructor(e, n, t, o, a = null, s = null) {
          this.name = e, this.friendlyName = n, this.id = t, this.onlineService = o, this.aliasOnlineService = a, this.alias = s
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
        d = Object.freeze(Object.values(i));

      function r(e) {
        if (!e) return;
        if (e instanceof l) return e;
        const n = e.toString().toLowerCase();
        return d.find(e => n === e.name || n === e.id.toString() || n === e.friendlyName.toLowerCase() || n === e.onlineService?.toLowerCase() || n === e.aliasOnlineService?.toLowerCase() || n === e.alias?.toLowerCase())
      }
      var c = t(23058),
        p = t(43091);
      const b = e => {
          const n = document.cookie.split("; "),
            t = `${e}=`,
            o = n.find(e => e.startsWith(t)),
            a = o?.substring(t.length, o.length);
          return a
        },
        u = (e, n, t) => {
          e && void 0 !== n && ((0, c.canStoreCookie)(e) || t) && b(e) !== n && (document.cookie = `${e}=${n}; domain=${(0,p.F)()}; path=/;`)
        };
      var f = t(78242);
      Object.values(f.d), f.d.BL;
      var h = t(69635);
      const w = e => e.keys().forEach(e),
        g = [{
          key: "dev",
          path: "https://media-dev-rockstargames-com.akamaized.net"
        }, {
          key: "prod",
          path: "https://media-rockstargames-com.akamaized.net"
        }],
        m = (e = !0) => g.filter(n => n.key === (e ? "prod" : "dev"))[0]?.path ?? null,
        y = e => {
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
              o = document.createElement("a");
            o.href = n, o.setAttribute("download", t), document.body.appendChild(o), o.click(), document.body.removeChild(o)
          }).catch(e => {
            console.log(e)
          })
        },
        x = () => [i.xbox360.name, i.xboxone.name, i.ps3.name, i.ps4.name, i.pc.name],
        k = () => [i.xboxsx.name, i.ps5.name, i.pcalt.name],
        S = e => k().includes(e),
        v = e => {
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
    78242(e, n, t) {
      t.d(n, ["d", 0, {
        BL: "bl"
      }])
    }
  }
]);