try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "673cd2ed-3e80-49ac-a77b-88aaf8f9010b", e._sentryDebugIdIdentifier = "sentry-dbid-673cd2ed-3e80-49ac-a77b-88aaf8f9010b")
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
  [2454], {
    31613(e, a, t) {
      t.d(a, ["F", 0, () => {
        const e = window.location.hostname.split(".");
        return e.slice(e.length - 2).join(".")
      }])
    },
    32454(e, a, t) {
      t.d(a, {
        OD: () => o,
        lv: () => i,
        wC: () => n,
        PE: () => D,
        rB: () => d,
        tC: () => w.t,
        yh: () => k,
        Ap: () => u,
        Xs: () => B,
        kx: () => C,
        rJ: () => A,
        nR: () => f,
        pT: () => v,
        lV: () => E,
        p0: () => m,
        PA: () => s,
        My: () => g
      }), t(39793);
      const s = ({
          element: e
        }) => {
          const a = setInterval(() => e.scrollIntoView({
              behavior: "smooth",
              block: "center",
              inline: "center"
            }), 100),
            t = e => {
              e.target === document && (clearInterval(a), document.removeEventListener("scroll", t))
            };
          document.addEventListener("scroll", t)
        },
        n = ({
          paramName: e = "section"
        } = {}) => {
          const a = new URLSearchParams(document.location.search),
            t = document.getElementById(a.get(e) || e);
          t && (s({
            element: t
          }), r(t))
        },
        r = e => {
          const a = ["a", "button", "input", "textarea", "select", "details", '[tabindex]:not([tabindex="-1"])'];
          if (a.includes(e.nodeName.toLowerCase())) e.focus();
          else {
            const t = e?.querySelectorAll(a.join(", "));
            if (t?.length) {
              const e = [...t].find(e => !e?.hasAttribute("disabled"));
              e?.focus()
            }
          }
        };
      class o {
        name;
        friendlyName;
        id;
        onlineService;
        aliasOnlineService;
        alias;
        constructor(e, a, t, s, n = null, r = null) {
          this.name = e, this.friendlyName = a, this.id = t, this.onlineService = s, this.aliasOnlineService = n, this.alias = r
        }
      }
      const i = Object.freeze({
          pc: new o("pc", "PC Legacy", 8, "sc"),
          ps: new o("ps", "PlayStation", 3, "np", "ps"),
          ps3: new o("ps3", "PlayStation 3", 2, "np", "ps"),
          ps4: new o("ps4", "PlayStation 4", 11, "np", "ps"),
          ps5: new o("ps5", "PlayStation 5", 20, "np", "ps"),
          xbox: new o("xbox", "Xbox", 4, "xbl"),
          xbox360: new o("xbox360", "Xbox 360", 1, "xbl"),
          xboxone: new o("xboxone", "Xbox One", 12, "xbl"),
          xboxsx: new o("xboxsx", "Xbox Series X|S", 21, "xbl", null, "xboxseriesxs"),
          switch: new o("switch", "Nintendo Switch™", 18, "nintendoswitch"),
          nintendoswitch: new o("nintendoswitch", "Nintendo Switch™", 18, "nintendoswitch"),
          applestore: new o("applestore", "App Store", 102, "applestore"),
          googleplay: new o("googleplay", "Google Play", 1023, "googleplay"),
          appStore: new o("app_store", "App Store", 102, "applestore"),
          googlePlay: new o("ggle_play", "Google Play", 1023, "googleplay"),
          pcalt: new o("pcalt", "PC Enhanced", 22, "sc")
        }),
        l = Object.freeze(Object.values(i));

      function d(e) {
        if (!e) return;
        if (e instanceof o) return e;
        const a = e.toString().toLowerCase();
        return l.find(e => a === e.name || a === e.id.toString() || a === e.friendlyName.toLowerCase() || a === e.onlineService?.toLowerCase() || a === e.aliasOnlineService?.toLowerCase() || a === e.alias?.toLowerCase())
      }
      var c = t(23058),
        p = t(31613);
      const u = e => {
          const a = document.cookie.split("; "),
            t = `${e}=`,
            s = a.find(e => e.startsWith(t)),
            n = s?.substring(t.length, s.length);
          return n
        },
        g = (e, a) => {
          e && void 0 !== a && (0, c.canStoreCookie)(e) && u(e) !== a && (document.cookie = `${e}=${a}; domain=${(0,p.F)()}; path=/;`)
        };
      var F = t(36244);
      const y = Object.values(F.d),
        h = ["0", "1", "2", "3"],
        b = {
          [F.d.BL]: {
            0: {
              background: {
                solid: "#18182D",
                surface: "#070810",
                stops1: "#1F1F38",
                stops2: "#18182D",
                stops3: "#111222",
                stops4: "#0C0D1B"
              },
              alias: {
                text: {
                  primary: "#E5DDFF",
                  secondary: "#D9D1F6",
                  tertiary: "#CCC2F5"
                },
                foreground: {
                  primary: "#E5DDFF",
                  secondary: "#CCC2F5",
                  tertiary: "#B1A1E8",
                  subdued: "#988BD0"
                }
              },
              accent: {
                primary: "#FFB2C6",
                primaryHover: "#FC97B1",
                secondary: "#ADB5FF"
              },
              highlight: {
                light: "#FFF9CB"
              },
              sublevels: {
                1: "#1F1F38",
                2: "#252644"
              },
              adaptive: {
                scale: {
                  base: {
                    2200: "#FDFBFF"
                  }
                }
              }
            },
            1: {
              background: {
                solid: "#252644",
                surface: "#111222",
                stops1: "#2F2E52",
                stops2: "#252644",
                stops3: "#1F1F38",
                stops4: "#18182D"
              },
              alias: {
                text: {
                  primary: "#F1EAFF",
                  secondary: "#E5DDFF",
                  tertiary: "#D9D1F6"
                },
                foreground: {
                  primary: "#F1EAFF",
                  secondary: "#D9D1F6",
                  tertiary: "#C1B3F0",
                  subdued: "#A596DB"
                }
              },
              accent: {
                primary: "#FFB2C6",
                primaryHover: "#FC97B1",
                secondary: "#ADB5FF"
              },
              highlight: {
                light: "#FFF9CB"
              },
              sublevels: {
                1: "#2F2E52",
                2: "#38365D"
              },
              adaptive: {
                scale: {
                  base: {
                    2200: "#FDFBFF"
                  }
                }
              }
            },
            2: {
              background: {
                solid: "#38365D",
                surface: "#1F1F38",
                stops1: "#433F6A",
                stops2: "#38365D",
                stops3: "#2F2E52",
                stops4: "#252644"
              },
              alias: {
                text: {
                  primary: "#FBF4FF",
                  secondary: "#F1EAFF",
                  tertiary: "#E5DDFF"
                },
                foreground: {
                  primary: "#FBF4FF",
                  secondary: "#E5DDFF",
                  tertiary: "#CCC2F5",
                  subdued: "#B1A1E8"
                }
              },
              accent: {
                primary: "#FFB2C6",
                primaryHover: "#FC97B1",
                secondary: "#ADB5FF"
              },
              highlight: {
                light: "#FFF9CB"
              },
              sublevels: {
                1: "#433F6A",
                2: "#4E4A7B"
              },
              adaptive: {
                scale: {
                  base: {
                    2200: "#FDFBFF"
                  }
                }
              }
            },
            3: {
              background: {
                solid: "#4E4A7B",
                surface: "#2F2E52",
                stops1: "#5A5589",
                stops2: "#4E4A7B",
                stops3: "#433F6A",
                stops4: "#38365D"
              },
              alias: {
                text: {
                  primary: "#FDFBFF",
                  secondary: "#FBF4FF",
                  tertiary: "#F1EAFF"
                },
                foreground: {
                  primary: "#FDFBFF",
                  secondary: "#F1EAFF",
                  tertiary: "#D9D1F6",
                  subdued: "#C1B3F0"
                }
              },
              accent: {
                primary: "#FFB2C6",
                primaryHover: "#FC97B1",
                secondary: "#ADB5FF"
              },
              highlight: {
                light: "#FFF9CB"
              },
              sublevels: {
                1: "#5A5589",
                2: "#655F97"
              },
              adaptive: {
                scale: {
                  base: {
                    2200: "#FDFBFF"
                  }
                }
              }
            }
          }
        },
        m = e => {
          const {
            themeName: a,
            themeLevel: t
          } = e;
          if ("string" != typeof(s = a) || !y.includes(s) || !(e => "string" == typeof e && h.includes(e))(t)) return null;
          var s;
          const n = b[a]?.[t];
          return (e => {
            if (!e || "object" != typeof e) return !1;
            const a = e;
            return Boolean(a.background?.solid && a.background?.surface && a.background?.stops1 && a.background?.stops2 && a.background?.stops3 && a.background?.stops4 && a.alias.text?.primary && a.alias.text?.secondary && a.alias.text?.tertiary && a.alias.foreground?.primary && a.alias.foreground?.secondary && a.alias.foreground?.tertiary && a.alias.foreground?.subdued && a.accent?.primary && a.accent?.primaryHover && a.accent?.secondary && a.highlight?.light && a.sublevels?.[1] && a.sublevels?.[2] && a.adaptive?.scale?.base?.[2200])
          })(n) ? {
            themeName: a,
            themeLevel: t,
            definition: n
          } : null
        },
        f = e => {
          const a = m(e);
          var t;
          if (a) return {
            "--theme-background": (t = a.definition).background.solid,
            "--theme-background-surface": t.background.surface,
            "--theme-adaptive-gradient-background": `linear-gradient(189deg, ${t.background.stops1} 0.55%, ${t.background.stops2} 30.38%, ${t.background.stops3} 65.19%, ${t.background.stops4} 100%)`,
            "--theme-alias-text-primary": t.alias.text.primary,
            "--theme-alias-text-secondary": t.alias.text.secondary,
            "--theme-alias-text-tertiary": t.alias.text.tertiary,
            "--theme-alias-foreground-primary": t.alias.foreground.primary,
            "--theme-alias-foreground-secondary": t.alias.foreground.secondary,
            "--theme-alias-foreground-tertiary": t.alias.foreground.tertiary,
            "--theme-alias-foreground-subdued": t.alias.foreground.subdued,
            "--theme-accent-primary": t.accent.primary,
            "--theme-accent-primary-hover": t.accent.primaryHover,
            "--theme-accent-secondary": t.accent.secondary,
            "--theme-highlight-light": t.highlight.light,
            "--theme-sublevels-1": t.sublevels[1],
            "--theme-sublevels-2": t.sublevels[2],
            "--theme-off-white": t.adaptive.scale.base[2200],
            background: "var(--theme-adaptive-gradient-background, var(--theme-background))"
          }
        };
      var w = t(49345);
      const v = e => e.keys().forEach(e),
        x = [{
          key: "dev",
          path: "https://media-dev-rockstargames-com.akamaized.net"
        }, {
          key: "prod",
          path: "https://media-rockstargames-com.akamaized.net"
        }],
        k = (e = !0) => x.filter(a => a.key === (e ? "prod" : "dev"))[0]?.path ?? null,
        D = e => {
          e.preventDefault();
          const a = e.currentTarget.href,
            t = (e => {
              const a = new URL(e).pathname.split("/"),
                t = a[a.length - 1];
              return decodeURIComponent(t)
            })(a);
          fetch(a, {
            method: "GET",
            headers: {}
          }).then(e => e.arrayBuffer()).then(e => {
            const a = window.URL.createObjectURL(new Blob([e])),
              s = document.createElement("a");
            s.href = a, s.setAttribute("download", t), document.body.appendChild(s), s.click(), document.body.removeChild(s)
          }).catch(e => {
            console.log(e)
          })
        },
        B = () => [i.xbox360.name, i.xboxone.name, i.ps3.name, i.ps4.name, i.pc.name],
        C = () => [i.xboxsx.name, i.ps5.name, i.pcalt.name],
        E = e => C().includes(e),
        A = e => {
          const a = new Map([
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
          return a.has(e) ? a.get(e) : e
        }
    },
    36244(e, a, t) {
      t.d(a, ["d", 0, {
        BL: "bl"
      }])
    }
  }
]);