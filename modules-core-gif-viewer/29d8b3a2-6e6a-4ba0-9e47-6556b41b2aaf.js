try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "29d8b3a2-6e6a-4ba0-9e47-6556b41b2aaf", e._sentryDebugIdIdentifier = "sentry-dbid-29d8b3a2-6e6a-4ba0-9e47-6556b41b2aaf")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-gif-viewer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_gif_viewer = self.webpackChunk_rockstargames_modules_core_gif_viewer || []).push([
  [591], {
    31613(e, t, n) {
      n.d(t, ["F", 0, () => {
        const e = window.location.hostname.split(".");
        return e.slice(e.length - 2).join(".")
      }])
    },
    52974(e, t, n) {
      var r = n(5942),
        a = n(76597),
        s = n.n(a),
        o = n(82088),
        i = n(91146),
        c = n(3339);
      const {
        apiHost: d
      } = (0, i.A)(), l = (0, c.t)(document.documentElement.lang), u = {};
      n.d(t, ["A", 0, async (e, {
        fetchOptions: t = {},
        finalFetchOptions: n = {},
        query: a = null,
        pingBearer: i,
        requireBearerToken: c = !0,
        useCache: p = !0
      } = {}) => {
        try {
          const {
            bearerToken: h = null
          } = await (i?.()) ?? {}, m = {
            "X-Requested-With": "XMLHttpRequest",
            "X-AMC": !0,
            "Content-Type": "application/json",
            ...l && {
              "X-lang": l
            }
          };
          let g = `${d}/${e}`;
          if (null === a || (0, o.A)(a) || (g += `?${new URLSearchParams(a)}`), !h && c) return null;
          h && (m.Authorization = `Bearer ${h}`);
          const f = {
              headers: m
            },
            w = s().all([f, t, n]),
            y = JSON.stringify({
              ...w,
              url: g
            }),
            v = await (0, r.sc)(y);
          if (p) {
            if (u[v]?.response) return u[v].response;
            if (u[v]?.loading) return {
              error: null,
              result: null
            };
            u[v] = {
              loading: !0
            }
          }
          const b = await fetch(g, w);
          if (!b.ok) throw new Error(`ScApi fetch error for ${e} with status code ${b.status}`);
          const F = await b.json();
          return p && (u[v] = {
            response: F,
            loading: !1
          }), F
        } catch (t) {
          console.error(`ScApi fetch error ${e}:`, t)
        }
      }])
    },
    49345(e, t, n) {
      var r = n(84320),
        a = n(91146);
      n.d(t, ["t", 0, async ({
        service: e,
        returnUrl: t,
        pingBearer: n
      }) => {
        const [{
          iso: s
        }] = (0, r.JK)(), {
          authHost: o,
          clientId: i
        } = (0, a.A)(), c = await n(), d = new URL(`tpa/${e}/link`, `https://${o}.rockstargames.com`);
        return d.searchParams.append("cid", i), d.searchParams.append("lang", s), d.searchParams.append("returnUrl", t ?? window.location.pathname), c && "boolean" != typeof c && "string" == typeof c.bearerToken && d.searchParams.append("accessToken", c.bearerToken), d
      }])
    },
    12658(e, t, n) {
      n.d(t, ["A", 0, () => {
        const e = document.currentScript,
          t = e?.src ? new URL(e.src).origin : "";
        let n = document.getElementsByTagName("base")[0]?.getAttribute("href") ?? `${t}/`;
        return n.endsWith("/") || (n = `${n}/`), n
      }])
    },
    91146(e, t, n) {
      const r = window?.env?.sc,
        a = window?.env?.marketing,
        s = ({
          apiHost: e,
          authHost: t,
          clientId: n,
          cms: s,
          graphEnv: o,
          queryManifest: i,
          scHost: c,
          hostname: d,
          cdnBase: l,
          key: u,
          marketingAuthTLD: p
        }) => {
          const h = r?.apiHost ?? e,
            m = r?.authHost ?? t,
            g = r?.cdnBase ?? l,
            f = r?.clientId ?? n,
            w = a?.marketingAuthTLD ?? p,
            y = r?.scHost ?? c,
            v = a?.pingBearerEndpoint ?? "auth/ping-bearer.json";
          return {
            apiHost: `https://${h}.rockstargames.com`,
            graphEnv: r?.graphEnv ?? o,
            host: y,
            hostname: d,
            cdnBase: g,
            key: u,
            clientId: f,
            cms: `https://${s}.rockstargames.com/graphql`,
            authHost: m,
            queryManifest: i,
            scBase: `https://${y}.rockstargames.com/`,
            login: `https://${m}.rockstargames.com/connect/authorize/${f}`,
            silentCheck: `https://${m}.rockstargames.com/connect/cors/check/${f}`,
            signup: `https://${m}.rockstargames.com/create/?cid=${f}`,
            gateway: `https://${w}/auth/gateway.json`,
            logout: `https://${w}/auth/sc-auth-logout`,
            pingBearer: `https://${w}/${v}`,
            authCookieName: "BearerToken"
          }
        },
        o = [s({
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
        }), s({
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
        })];
      n.d(t, ["A", 0, () => {
        const e = window?.env?.scEnv ?? null;
        if (e) {
          const t = o.find(({
            key: t
          }) => t === e) ?? null;
          if (t) return t
        }
        return o.find(({
          hostname: e
        }) => new RegExp(e).test(document.location.hostname)) || o[0]
      }])
    },
    32454(e, t, n) {
      n.d(t, {
        OD: () => o,
        lv: () => i,
        wC: () => a,
        PE: () => E,
        rB: () => d,
        tC: () => b.t,
        yh: () => x,
        Ap: () => p,
        Xs: () => C,
        kx: () => B,
        rJ: () => S,
        nR: () => v,
        pT: () => F,
        lV: () => A,
        p0: () => y,
        PA: () => r,
        My: () => h
      }), n(39793);
      const r = ({
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
        a = ({
          paramName: e = "section"
        } = {}) => {
          const t = new URLSearchParams(document.location.search),
            n = document.getElementById(t.get(e) || e);
          n && (r({
            element: n
          }), s(n))
        },
        s = e => {
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
      class o {
        name;
        friendlyName;
        id;
        onlineService;
        aliasOnlineService;
        alias;
        constructor(e, t, n, r, a = null, s = null) {
          this.name = e, this.friendlyName = t, this.id = n, this.onlineService = r, this.aliasOnlineService = a, this.alias = s
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
        c = Object.freeze(Object.values(i));

      function d(e) {
        if (!e) return;
        if (e instanceof o) return e;
        const t = e.toString().toLowerCase();
        return c.find(e => t === e.name || t === e.id.toString() || t === e.friendlyName.toLowerCase() || t === e.onlineService?.toLowerCase() || t === e.aliasOnlineService?.toLowerCase() || t === e.alias?.toLowerCase())
      }
      var l = n(23058),
        u = n(31613);
      const p = e => {
          const t = document.cookie.split("; "),
            n = `${e}=`,
            r = t.find(e => e.startsWith(n)),
            a = r?.substring(n.length, r.length);
          return a
        },
        h = (e, t) => {
          e && void 0 !== t && (0, l.canStoreCookie)(e) && p(e) !== t && (document.cookie = `${e}=${t}; domain=${(0,u.F)()}; path=/;`)
        };
      var m = n(36244);
      const g = Object.values(m.d),
        f = ["0", "1", "2", "3"],
        w = {
          [m.d.BL]: {
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
        y = e => {
          const {
            themeName: t,
            themeLevel: n
          } = e;
          if ("string" != typeof(r = t) || !g.includes(r) || !(e => "string" == typeof e && f.includes(e))(n)) return null;
          var r;
          const a = w[t]?.[n];
          return (e => {
            if (!e || "object" != typeof e) return !1;
            const t = e;
            return Boolean(t.background?.solid && t.background?.surface && t.background?.stops1 && t.background?.stops2 && t.background?.stops3 && t.background?.stops4 && t.alias.text?.primary && t.alias.text?.secondary && t.alias.text?.tertiary && t.alias.foreground?.primary && t.alias.foreground?.secondary && t.alias.foreground?.tertiary && t.alias.foreground?.subdued && t.accent?.primary && t.accent?.primaryHover && t.accent?.secondary && t.highlight?.light && t.sublevels?.[1] && t.sublevels?.[2] && t.adaptive?.scale?.base?.[2200])
          })(a) ? {
            themeName: t,
            themeLevel: n,
            definition: a
          } : null
        },
        v = e => {
          const t = y(e);
          var n;
          if (t) return {
            "--theme-background": (n = t.definition).background.solid,
            "--theme-background-surface": n.background.surface,
            "--theme-adaptive-gradient-background": `linear-gradient(189deg, ${n.background.stops1} 0.55%, ${n.background.stops2} 30.38%, ${n.background.stops3} 65.19%, ${n.background.stops4} 100%)`,
            "--theme-alias-text-primary": n.alias.text.primary,
            "--theme-alias-text-secondary": n.alias.text.secondary,
            "--theme-alias-text-tertiary": n.alias.text.tertiary,
            "--theme-alias-foreground-primary": n.alias.foreground.primary,
            "--theme-alias-foreground-secondary": n.alias.foreground.secondary,
            "--theme-alias-foreground-tertiary": n.alias.foreground.tertiary,
            "--theme-alias-foreground-subdued": n.alias.foreground.subdued,
            "--theme-accent-primary": n.accent.primary,
            "--theme-accent-primary-hover": n.accent.primaryHover,
            "--theme-accent-secondary": n.accent.secondary,
            "--theme-highlight-light": n.highlight.light,
            "--theme-sublevels-1": n.sublevels[1],
            "--theme-sublevels-2": n.sublevels[2],
            "--theme-off-white": n.adaptive.scale.base[2200],
            background: "var(--theme-adaptive-gradient-background, var(--theme-background))"
          }
        };
      var b = n(49345);
      const F = e => e.keys().forEach(e),
        k = [{
          key: "dev",
          path: "https://media-dev-rockstargames-com.akamaized.net"
        }, {
          key: "prod",
          path: "https://media-rockstargames-com.akamaized.net"
        }],
        x = (e = !0) => k.filter(t => t.key === (e ? "prod" : "dev"))[0]?.path ?? null,
        E = e => {
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
              r = document.createElement("a");
            r.href = t, r.setAttribute("download", n), document.body.appendChild(r), r.click(), document.body.removeChild(r)
          }).catch(e => {
            console.log(e)
          })
        },
        C = () => [i.xbox360.name, i.xboxone.name, i.ps3.name, i.ps4.name, i.pc.name],
        B = () => [i.xboxsx.name, i.ps5.name, i.pcalt.name],
        A = e => B().includes(e),
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
    17727(e, t, n) {
      const r = () => window.reactContextFactory = window?.reactContextFactory ?? {};
      n.d(t, ["A", 0, ({
        context: e,
        key: t
      }) => (r()?.[t] || (r()[t] = e), r()[t])])
    },
    45075(e, t, n) {
      const r = () => window.reactMakeVarFactory = window?.reactMakeVarFactory ?? {};
      n.d(t, ["A", 0, ({
        key: e,
        value: t,
        domain: n = "default"
      }) => (r()?.[n] || (r()[n] = {}), r()?.[n]?.[e] || (r()[n][e] = t), r()[n][e])])
    },
    3339(e, t, n) {
      n.d(t, ["t", 0, e => {
        const t = e.replace("_", "-");
        return "zh-hans" === t ? "zh-cn" : t
      }])
    },
    56596(e, t, n) {
      n.d(t, {
        RK: () => a,
        gd: () => D,
        vx: () => k,
        sb: () => x,
        Ym: () => o.A,
        CA: () => v.useNewswirePost,
        OG: () => i,
        ZC: () => l,
        sq: () => d,
        Vq: () => A,
        OH: () => w,
        zP: () => y,
        Cb: () => h,
        N6: () => F,
        GA: () => E,
        JE: () => C
      });
      const r = (0, n(12658).A)(),
        a = () => r;
      var s = n(93082),
        o = n(75764);
      const i = e => {
        const [t, n] = (0, s.useState)(null), [r, a] = (0, s.useState)(null), [o, i] = (0, s.useState)({});
        return (0, s.useLayoutEffect)(() => {
          let t = new Image,
            r = !1;
          return t.addEventListener("load", () => {
            i({
              width: t.width,
              height: t.height
            }), t = null, r || n(!0)
          }), t.addEventListener("error", () => {
            t = null, r || (n(!1), a(!0))
          }), t.src = e, () => {
            r = !0, null !== t && (t.src = "")
          }
        }, [e]), [t, o]
      };
      var c = n(99225);
      const d = () => {
          const {
            search: e
          } = (0, c.useLocation)();
          return new URLSearchParams(e)
        },
        l = e => {
          const t = (0, s.useRef)();
          return (0, s.useEffect)(() => {
            t.current = e
          }, [e]), t.current
        };
      var u = n(61295),
        p = n(52974);
      const h = (e, {
        autoFetch: t = !0,
        fetchOptions: n = {},
        query: r = null,
        requireBearerToken: a = !0,
        useCache: o = !0
      }) => {
        const i = (0, u.Es)(),
          [c, d] = (0, s.useState)(null),
          [l, h] = (0, s.useState)(!1),
          [m, g] = (0, s.useState)(null),
          [f, w] = (0, s.useState)(!1),
          y = (0, s.useCallback)(async (t = {}, s = null) => {
            try {
              const {
                fetchOptions: c = {}
              } = t;
              g(null), d(null), h(!0);
              const l = await (0, p.A)(s ?? e, {
                pingBearer: i,
                fetchOptions: n,
                finalFetchOptions: c,
                query: r,
                requireBearerToken: a,
                useCache: o
              });
              return l?.status || g(JSON.stringify(l?.error)), d(l), h(!1), l
            } catch (e) {
              g(String(e)), h(!1)
            } finally {
              w(!0)
            }
            return null
          }, [e, n, r]);
        return (0, s.useEffect)(() => {
          null === c && null === m && !l && t && y()
        }, [t, c, m, l, y]), {
          data: c,
          error: m,
          loading: l,
          fetch: y,
          resolved: f
        }
      };
      var m = n(91146);
      const g = "__RS_CUSTOM_EVENTS__",
        f = e => `rsCustomEvent:${e}`;
      window[g] || (window[g] = {});
      const w = () => {
          const e = (e, t) => {
            if (!e) throw Error("Event name must be provided to work with custom events");
            const n = f(e),
              r = new CustomEvent(n, {
                detail: t
              });
            window[g][n] || (window[g][n] = {
              eventQueue: [],
              subscribers: []
            }), window[g][n].eventQueue.push(r), window[g][n].subscribers.forEach(e => {
              e(r.detail)
            })
          };
          return (0, s.useMemo)(() => ({
            dispatch: e
          }), [])
        },
        y = (e, t) => {
          if (!e) throw Error("Event name must be provided to work with custom events");
          return (0, s.useEffect)(() => {
            const n = f(e);
            return window[g][n] || (window[g][n] = {
              eventQueue: [],
              subscribers: []
            }), window[g][n].subscribers.push(t), window[g][n].eventQueue.forEach(e => {
              t(e.detail)
            }), () => {
              window[g][n].subscribers = window[g][n].subscribers.filter(e => e !== t), 0 === window[g][n].subscribers.length && delete window[g][n]
            }
          }, [e, t]), (0, s.useMemo)(() => ({}), [])
        };
      var v = n(11701),
        b = (n(12509), n(3339));
      const F = e => {
        const {
          signup: t,
          login: n
        } = (0, m.A)(), r = (0, o.A)(), a = (0, b.t)(r);
        let s = "";
        return s += "lang=" + encodeURIComponent(a), s += "&returnUrl=" + encodeURIComponent(e ?? window.location.pathname), {
          signUpUrl: `${t}&${s}`,
          signInUrl: `${n}?${s}`
        }
      };
      n(53634);
      const k = () => {
          const [e, t] = (0, s.useState)();
          return (0, s.useEffect)(() => {
            const e = window.matchMedia("(prefers-reduced-motion: reduce)"),
              n = e => {
                t(e.matches)
              };
            return t(e?.matches), e.addEventListener("change", n), () => {
              e.removeEventListener("change", n)
            }
          }, []), e
        },
        x = () => {
          const [e, t] = (0, s.useState)(!1);
          return (0, s.useEffect)(() => {
            if ("connection" in navigator && "saveData" in navigator.connection) {
              const e = navigator?.connection;
              t(e.saveData);
              const n = () => {
                t(e.saveData)
              };
              return e.addEventListener("change", n), () => {
                e.removeEventListener("change", n)
              }
            }
          }, []), e
        };
      n(6988), navigator, navigator, navigator, navigator;
      const E = e => {
          const [t, n] = (0, s.useState)(!1), r = (0, s.useRef)(null);
          return (0, s.useEffect)(() => {
            const a = () => {
              if (t || !r.current) return;
              const s = r.current,
                {
                  height: o
                } = s.getBoundingClientRect(),
                i = window.innerHeight;
              window.scrollY + i >= s.offsetTop + o * e && (n(!0), window.removeEventListener("scroll", a))
            };
            return window.addEventListener("scroll", a, {
              passive: !0
            }), () => {
              window.removeEventListener("scroll", a)
            }
          }, [t, e]), {
            ref: r,
            scrollTracked: t
          }
        },
        C = (e = 0) => {
          const t = (0, s.useRef)(null),
            [n, r] = (0, s.useState)(!1),
            a = () => {
              const n = t.current;
              if (!n) return;
              const a = n.getBoundingClientRect(),
                s = window.innerHeight || document.documentElement.clientHeight,
                o = (Math.min(a.bottom, s) - Math.max(a.top, 0)) / a.height;
              r(o > e)
            };
          return (0, s.useEffect)(() => {
            a();
            const e = () => requestAnimationFrame(a);
            return window.addEventListener("scroll", e, {
              passive: !0
            }), window.addEventListener("resize", e), () => {
              window.removeEventListener("scroll", e), window.removeEventListener("resize", e)
            }
          }, [e]), {
            ref: t,
            inView: n
          }
        };
      var B = n(84320);
      const A = () => {
        const {
          formatRelativeTime: e
        } = (0, B.tz)();
        return {
          formatRelativeRoundedTime: t => {
            const n = "number" == typeof t ? t : t.getTime(),
              r = Math.round((n - Date.now()) / 1e3),
              a = Math.abs(r),
              {
                unit: s,
                divisor: o
              } = [{
                unit: "second",
                divisor: 1,
                nextCutoff: 60
              }, {
                unit: "minute",
                divisor: 60,
                nextCutoff: 3600
              }, {
                unit: "hour",
                divisor: 3600,
                nextCutoff: 86400
              }, {
                unit: "day",
                divisor: 86400,
                nextCutoff: 604800
              }, {
                unit: "week",
                divisor: 604800,
                nextCutoff: 2592e3
              }, {
                unit: "month",
                divisor: 2592e3,
                nextCutoff: 31536e3
              }].find(e => a < e.nextCutoff) || {
                unit: "year",
                divisor: 31536e3
              },
              i = Math.round(r / o);
            return e(i, s, {
              numeric: "always"
            })
          }
        }
      };
      var S = n(49345);
      const D = () => {
        const e = (0, u.Es)();
        return async ({
          service: t,
          returnUrl: n
        }) => await (0, S.t)({
          service: t,
          returnUrl: n,
          pingBearer: e
        })
      }
    },
    75764(e, t, n) {
      var r = n(18849);
      const a = (0, n(91540).UT)(document.documentElement.lang);
      n.d(t, ["A", 0, () => (0, r.q)(a)])
    },
    61295(e, t, n) {
      n.d(t, {
        ec: () => h,
        e9: () => g,
        Es: () => f,
        bD: () => m
      });
      var r = n(39793),
        a = n(93082),
        s = n(91540),
        o = n(18849),
        i = n(17727),
        c = n(62885),
        d = n(4242),
        l = n(91146);
      const u = {
          token: (0, s.UT)("")
        },
        p = (0, i.A)({
          context: (0, a.createContext)(u),
          key: "utilsTokenProvider"
        }),
        h = ({
          children: e,
          token: t
        }) => (0, r.jsx)(p.Provider, {
          value: {
            token: t
          },
          children: e
        }),
        m = () => {
          const {
            token: e
          } = (0, a.useContext)(p);
          return [e]
        },
        g = () => {
          const [e] = m();
          return (0, o.q)(e)
        },
        f = () => {
          const [e] = m();
          return () => (async ({
            token: e
          }) => {
            const {
              authCookieName: t,
              pingBearer: n
            } = (0, l.A)(), r = e => {
              try {
                const {
                  exp: t = 0
                } = (0, d.s)(e ?? "") ?? {};
                return t - (new Date).getTime() / 1e3 > 0 && e
              } catch {
                return !1
              }
            };
            try {
              const a = r(c.A.get(t)) || r(e?.());
              if (a) return e(a), {
                bearerToken: a
              };
              const s = await fetch(n, {
                  credentials: "include",
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  }
                }),
                o = await s.json();
              return e(o.bearerToken ?? ""), o
            } catch {
              return e(""), !1
            }
          })({
            token: e
          })
        }
    },
    11701(e, t, n) {
      n.r(t);
      var r = n(39793),
        a = n(93082);
      const s = (0, n(17727).A)({
          context: (0, a.createContext)(null),
          key: "newswirePost"
        }),
        {
          Consumer: o
        } = s;
      n.d(t, ["Consumer", 0, o, "Provider", 0, ({
        article: e,
        children: t
      }) => (0, r.jsx)(s.Provider, {
        value: e,
        children: t
      }), "useNewswirePost", 0, () => (0, a.useContext)(s)])
    },
    53634(e, t, n) {
      var r = n(39793),
        a = n(93082),
        s = n(18849),
        o = n(91540),
        i = n(17727);
      const c = {
          xxs: {
            min: 0,
            max: 479
          },
          xs: {
            min: 480,
            max: 767
          },
          sm: {
            min: 768,
            max: 991
          },
          md: {
            min: 992,
            max: 1199
          },
          lg: {
            min: 1200,
            max: 1439
          },
          xl: {
            min: 1440,
            max: 1919
          },
          xxl: {
            min: 1920,
            max: 99999
          }
        },
        d = () => {
          const e = window.innerWidth,
            t = window.innerHeight,
            n = c;
          return Object.keys(c).map(t => {
            const {
              min: r,
              max: a
            } = c[t], s = e >= r && e <= a, o = e >= r;
            n[t] = {
              activeExact: s,
              activeMin: o,
              min: r,
              max: a
            }
          }), {
            isMobile: e < c.sm.min,
            isTablet: e < c.md.max,
            breakpoints: n,
            windowWidth: e,
            windowHeight: t
          }
        },
        l = (0, i.A)({
          context: (0, a.createContext)(d()),
          key: "resizeContext"
        }),
        {
          Consumer: u
        } = l,
        p = (0, o.UT)(d());
      n.d(t, ["G4", 0, () => (0, a.useContext)(l), "uU", 0, ({
        children: e
      }) => {
        const t = (0, s.q)(p);
        return (0, a.useEffect)(() => {
          const e = () => {
            p(d())
          };
          return window.addEventListener("resize", e), () => {
            window.removeEventListener("resize", e)
          }
        }, []), (0, r.jsx)(l.Provider, {
          value: t,
          children: e
        })
      }])
    },
    12509(e, t, n) {
      var r = n(39793),
        a = n(93082),
        s = n(18849),
        o = n(91540),
        i = n(17727);
      const c = (0, n(45075).A)({
          key: "freezeUserShouldSeeMoreReactive",
          value: (0, o.UT)(!1)
        }),
        d = e => c(e),
        l = (0, i.A)({
          context: (0, a.createContext)(null),
          key: "scrollContext"
        });
      n.d(t, ["Ll", 0, () => (0, a.useContext)(l), "N2", 0, ({
        children: e
      }) => {
        const [t, n] = (0, a.useState)(window.pageYOffset), [o, i] = (0, a.useState)(null), [u, p] = (0, a.useState)(!1), h = (0, s.q)(c);
        let m;
        const g = () => {
          p(!0), clearTimeout(m), m = setTimeout(() => {
            p(!1)
          }, 2e3)
        };
        return (0, a.useEffect)(() => {
          let e;
          const t = () => {
            if (h) return void i(!1);
            const t = Math.max(0, window.pageYOffset);
            n(t), u || i(t > 60 && t > e), e = t
          };
          return window.addEventListener("scroll", t), () => {
            window.removeEventListener("scroll", t)
          }
        }, [u, h]), (0, a.useMemo)(() => (0, r.jsx)(l.Provider, {
          value: {
            freezeUserShouldSeeMore: h,
            pageYOffset: t,
            pauseUserShouldSeeMore: g,
            setFreezeUserShouldSeeMore: d,
            userShouldSeeMore: o
          },
          children: e
        }), [h, t, g, o])
      }])
    },
    36244(e, t, n) {
      n.d(t, ["d", 0, {
        BL: "bl"
      }])
    }
  }
]);