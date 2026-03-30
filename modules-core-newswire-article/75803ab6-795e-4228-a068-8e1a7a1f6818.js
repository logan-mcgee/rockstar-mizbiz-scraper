try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "75803ab6-795e-4228-a068-8e1a7a1f6818", e._sentryDebugIdIdentifier = "sentry-dbid-75803ab6-795e-4228-a068-8e1a7a1f6818")
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
  [2358], {
    2661: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4639a2711d1bca49a87c302784050ee3.png"
    },
    3514: (e, a, s) => {
      "use strict";
      s.d(a, {
        A: () => t
      });
      var n = s(96130),
        i = s(45440);
      const t = (e = {
        parent: "",
        post: null
      }) => ({
        name: "listItem",
        label: "List Item",
        component: "group",
        fields: [(0, n.om)(e), (0, n.z9)({
          name: "content",
          label: "Content",
          component: "text",
          initialValues: ""
        }), (0, n.sE)(e)],
        defaultItem: () => (0, n.Q)({
          content: ""
        }),
        itemProps: e => (0, n.Rv)(e, {
          label: (0, i._e)(`${e?.name??e?.[n.Qw]?.content??"New"} [List Item]`)
        })
      })
    },
    4407: (e, a, s) => {
      "use strict";
      s.d(a, {
        A: () => c
      });
      var n = s(42295),
        i = s(34725),
        t = s(58136);
      const r = ({
          alt: e,
          className: a,
          src: i,
          role: r,
          style: o
        }) => {
          const [c, d] = (0, t.usePreloadImg)(i);
          let l = i;
          !1 === c && (l = s(9333));
          const {
            width: m,
            height: u
          } = d, f = {
            "--aspect-ratio": Number.isNaN(m / u) ? "" : m / u,
            ...o
          };
          return (0, n.jsx)("img", {
            src: l,
            className: a ?? "",
            alt: e,
            style: f,
            role: r
          })
        },
        o = "rockstargames-modules-core-newswire-articlec8dc03880ce2e12f3fdea5b5b587f27f",
        c = ({
          className: e,
          style: a = {},
          image: c = {},
          imageStyle: d = {},
          role: l = "img"
        }) => {
          let {
            alt: m,
            src: u
          } = (0, i.S1)(c);
          const {
            isMobile: f
          } = (0, t.useWindowResize)();
          u.desktop || u.mobile || (m = "", u = {
            mobile: s(28839),
            desktop: s(9333)
          });
          let g = c.frame ? `${c.frame} ${o}` : o;
          return (0, n.jsx)("div", {
            className: g,
            style: a,
            children: (0, n.jsx)(r, {
              style: {
                ...d,
                ...c?.style
              },
              src: f ? u.mobile || u.desktop : u?.desktop || u?.mobile,
              alt: m,
              role: l,
              className: e
            })
          })
        }
    },
    6288: (e, a, s) => {
      "use strict";
      s.d(a, {
        A: () => m
      });
      var n = s(42295),
        i = s(10632),
        t = s(94322),
        r = s(64064),
        o = s.n(r),
        c = s(31879),
        d = s.n(c);
      const l = {
          "center-children": "rockstargames-modules-core-newswire-articlef2fa26d0f173f3d967cd339102390c4a",
          "full-width": "rockstargames-modules-core-newswire-articled506082984d54d056e358cfbc0dde795",
          gold: "rockstargames-modules-core-newswire-articleadff1577bb3952ea5b448144560148e1",
          heroImage: "rockstargames-modules-core-newswire-articled17c20c4aa402388a4d4b23d6ff41a3b",
          "hidden-lg": "rockstargames-modules-core-newswire-articlee53c219095a6cea2942bb53c4bf66259",
          "hidden-md": "rockstargames-modules-core-newswire-articlef1c15a75853dbb6189625b636a6d1baf",
          "hidden-sm": "rockstargames-modules-core-newswire-articlede4a014046acaad99dc53bb2c03f8719",
          "hidden-xl": "rockstargames-modules-core-newswire-articleb104796d98a3d67dde4b44e2c676b08e",
          "hidden-xxl": "rockstargames-modules-core-newswire-articled1034e839209be1d4f103fc2c29bf531",
          hiddenLarge: "rockstargames-modules-core-newswire-articled38319419aba2f42e721ab08a26208fb",
          hiddenMobile: "rockstargames-modules-core-newswire-articlec3a08254db141676fff1ac7bf9484218",
          "horizontal-line": "rockstargames-modules-core-newswire-articleba39f5e2ce30b99a045454ac97a6f707",
          responsiveImage: "rockstargames-modules-core-newswire-articleaa419a38f6bffb372db81c2df3ec23ae",
          responsiveVideo: "rockstargames-modules-core-newswire-articlee70c0545b9c94794421dac5b59959c39",
          "reverse-mobile": "rockstargames-modules-core-newswire-articlefc45ea13bab881368ae51d327eb77243",
          "show-lg": "rockstargames-modules-core-newswire-articlea0529cc3561a81f9b96939b579caa623",
          "show-md": "rockstargames-modules-core-newswire-articled6cabd1c7dce349d9e7e1598ead4503e",
          "show-sm": "rockstargames-modules-core-newswire-articleb540a7274484859d8ab14a6c04f62b4f",
          "show-xl": "rockstargames-modules-core-newswire-articlee13f7a8d45b3fec8db6dedc3321f89f2",
          "show-xxl": "rockstargames-modules-core-newswire-articled350dc14eb32714ed0230fe9f53591cd",
          "std-padding-desktop-mobile-none": "rockstargames-modules-core-newswire-articledeff228b0e0b37e77569d72317854418",
          "std-padding-mobile-desktop-none": "rockstargames-modules-core-newswire-articledef459f80eeef54bcb18d93a9ed91ef7"
        },
        m = ({
          alt: e = "",
          className: a = "",
          src: s = {},
          image: r = null,
          video: c = null
        }) => (0, n.jsxs)("div", {
          className: ((s?.videoPlayerId || s?.gifHash) && l.heroImage, a),
          children: [s?.mobile && (0, n.jsx)(t.A, {
            src: s.mobile,
            ariaLabel: e,
            className: [s?.desktop && l.hiddenLarge, l.responsiveImage].join(" "),
            noRatioPlease: !0
          }), s?.desktop && (0, n.jsx)(t.A, {
            src: s.desktop,
            ariaLabel: e,
            className: [s?.mobile && l.hiddenMobile, l.responsiveImage].join(" ")
          }), s?.videoPlayerId && (0, n.jsx)("div", {
            className: [l.responsiveVideo, l.trailer].join(" "),
            children: (0, n.jsx)(d(), {
              context: "site",
              autoplay: !1,
              id: s.videoPlayerId,
              hero: !0
            })
          }), s?.gifHash && (0, n.jsx)("div", {
            className: l.responsiveVideo,
            children: (0, n.jsx)(o(), {
              hash: [{
                desktop: s?.gifHash?.desktop
              }, {
                mobile: s?.gifHash?.mobile
              }]
            })
          }), r && (0, n.jsx)(i.A, {
            image: r
          }), c && (0, n.jsx)("div", {
            className: [l.responsiveVideo, l.trailer].join(" "),
            children: (0, n.jsx)(d(), {
              context: "site",
              autoplay: c?.autoplay ?? !1,
              id: c.id,
              hero: !0
            })
          })]
        })
    },
    7502: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/48754c6fc2f75b0554098423f2bda6d1.png"
    },
    9333: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8787df71c723ebe44f82fd13ed216e09.jpg"
    },
    10632: (e, a, s) => {
      "use strict";
      s.d(a, {
        A: () => m
      });
      var n = s(42295),
        i = s(71127),
        t = s(58136),
        r = s(1556),
        o = s.n(r),
        c = s(84927),
        d = s(4407);
      const l = ({
          hero: e,
          children: a
        }) => e ? (0, n.jsx)("div", {
          className: "rockstargames-modules-core-newswire-articlea429886d721550d02521f7f5c9de7f5b",
          children: a
        }) : a,
        m = ({
          badge: e = null,
          badgeType: a,
          discountTxt: s,
          splitter: r,
          image: m,
          style: u,
          className: f = "",
          attributes: g = {},
          role: k,
          hero: b = !1
        }) => {
          const p = (0, i.useMemo)(() => {
            if (m?.badge || m?.discountTxt || e || s) return (0, n.jsx)(c.A, {
              badge: m?.discountTxt ?? m?.badge ?? e ?? s,
              badgeType: a,
              splitter: m?.splitter ?? r,
              role: m?.role ?? k
            })
          }, [e, a, s, m, k, r]);
          return (0, n.jsx)(l, {
            hero: b,
            children: (0, n.jsx)("figure", {
              children: (0, n.jsxs)("div", {
                className: o()("rockstargames-modules-core-newswire-articled9ac792281efe15bcd4589b028d1c27b", b ? "rockstargames-modules-core-newswire-articlee430c4662cd185f58259d4a8d8b322de" : "", g?.hiddenMobile ? "hiddenMobile" : "", g?.hiddenLarge ? "hiddenLarge" : "", g?.className, f),
                style: (0, t.safeStyles)({
                  ...u,
                  ...g?.style
                }),
                ...g,
                children: [(0, n.jsx)(d.A, {
                  role: m?.accessibleRole,
                  image: m,
                  className: f
                }), p, m?.caption && (0, n.jsx)("figcaption", {
                  dangerouslySetInnerHTML: {
                    __html: m.caption
                  }
                })]
              })
            })
          })
        }
    },
    12914: (e, a, s) => {
      "use strict";
      s.d(a, {
        F: () => n
      });
      const n = () => {
        const e = window.location.hostname.split(".");
        return e.slice(e.length - 2).join(".")
      }
    },
    16386: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/898794daaec68a69ef5ec4afaefe1948.png"
    },
    24970: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e111377ba943e9eefaa9204f77c77093.png"
    },
    28839: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61ae357c3bfbabb5d765e9a7c794d08f.png"
    },
    38635: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6e77bb0f25a6ea37e8d831b12df9fa3c.png"
    },
    43582: (e, a, s) => {
      "use strict";
      s.d(a, {
        A: () => u
      });
      var n = s(42295),
        i = s(71127),
        t = s(48863),
        r = s.n(t),
        o = s(58136),
        c = s(1556),
        d = s.n(c);
      const l = {
          blue: "rockstargames-modules-core-newswire-articlebffe0939bda9e26ad14f6b01669338a8",
          custom: "rockstargames-modules-core-newswire-articlecc2c26a3dd80cf9db62c4c7f389b7859",
          darkBlue: "rockstargames-modules-core-newswire-articlee2b6f722952b5d61d2a3b725166bfc9b",
          darkRed: "rockstargames-modules-core-newswire-articled44e2fc53f269ccf2b8fbe032ef6cec9",
          goldenrod: "rockstargames-modules-core-newswire-articlea365c5895cfd6c9f94fc994d71ba402c",
          green: "rockstargames-modules-core-newswire-articlef9c1eebf59650cd8ee84191d8fc62874",
          grid: "rockstargames-modules-core-newswire-articlebe627ae18a7bd3cff72d3f11aeed67df",
          gtao: "rockstargames-modules-core-newswire-articleffaf58c543b36fd7fb4efec24b3564bc",
          gtaplus: "rockstargames-modules-core-newswire-articlefbf343ed03c1bd513ea4cadc9726af76",
          hotPink: "rockstargames-modules-core-newswire-articleedb9998d6516a5aa1aece9c07c1768be",
          itemList: "rockstargames-modules-core-newswire-articled9620ae764026da5584e0f0a5886c992",
          noImg: "rockstargames-modules-core-newswire-articlebbb7247d5d7a836d755491e85639f1a3",
          pillBtn: "rockstargames-modules-core-newswire-articlec1ed14af6fceaba7c99728a81676dd92",
          purple: "rockstargames-modules-core-newswire-articlee61db4af0805bb4c9bf820c26ac8a85f",
          rdo: "rockstargames-modules-core-newswire-articleb2194fe129aa210950dcb07b88a28c13",
          red: "rockstargames-modules-core-newswire-articlef674d6037f10af1a1fe41a83c1e5da17",
          selected: "rockstargames-modules-core-newswire-articlee49b5a5fd4ab934ece172fffe9f6577e",
          skull: "rockstargames-modules-core-newswire-articleb2a1c0b367b250fe0606dffece9e1c02",
          teal: "rockstargames-modules-core-newswire-articlea379d41268f4f002d5ac257f67461f1d",
          turquoise: "rockstargames-modules-core-newswire-articlee211b0b8ae00897d696af259b3ddd837",
          yellow: "rockstargames-modules-core-newswire-articlece372826eac3cc73094d69c0c5d9a530"
        },
        {
          sanitize: m
        } = r(),
        u = ({
          list: e,
          string: a,
          starColor: s,
          style: t,
          className: r,
          game: c,
          noImg: u,
          columns: f,
          mobileColumns: g
        }) => {
          const [k, b] = (0, i.useState)(null);
          if ((0, i.useEffect)(() => {
              b(e)
            }, [e]), !a && !e) return null;
          const p = {
            color: t?.color
          };
          return delete t?.color, f && k ? (0, n.jsx)("div", {
            className: l.grid,
            style: {
              "--ordered-list-grid-column": f,
              "--ordered-list-grid-column-mobile": g ?? f
            },
            children: (0, n.jsx)("ol", {
              className: d()(l.itemList, l.noImg, l[s], l[c]),
              style: (0, o.safeStyles)(t),
              children: k.map(e => (0, n.jsx)("li", {
                dangerouslySetInnerHTML: {
                  __html: m(e.content)
                },
                style: p
              }, e.content))
            })
          }) : (0, n.jsx)("ol", {
            style: (0, o.safeStyles)(t),
            className: d()(l.itemList, l.custom, u ? l.noImg : "", s ? l[s] : "", c ? l[c] : "", r ?? ""),
            children: e.map(e => (0, n.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: m(e?.content ?? e)
              }
            }, e?.content))
          })
        }
    },
    45440: (e, a, s) => {
      "use strict";
      s.d(a, {
        OD: () => r,
        lv: () => o,
        wC: () => i,
        PE: () => y,
        rB: () => d,
        tC: () => b,
        yh: () => v,
        Ap: () => u,
        Xs: () => N,
        kx: () => x,
        rJ: () => _,
        pT: () => p,
        lV: () => S,
        PA: () => n,
        My: () => f,
        _e: () => w
      }), s(42295), s(10336);
      const n = ({
          element: e
        }) => {
          const a = setInterval(() => e.scrollIntoView({
              behavior: "smooth",
              block: "center",
              inline: "center"
            }), 100),
            s = e => {
              e.target === document && (clearInterval(a), document.removeEventListener("scroll", s))
            };
          document.addEventListener("scroll", s)
        },
        i = ({
          paramName: e = "section"
        } = {}) => {
          const a = new URLSearchParams(document.location.search),
            s = document.getElementById(a.get(e) || e);
          s && (n({
            element: s
          }), t(s))
        },
        t = e => {
          const a = ["a", "button", "input", "textarea", "select", "details", '[tabindex]:not([tabindex="-1"])'];
          if (a.includes(e.nodeName.toLowerCase())) e.focus();
          else {
            const s = e?.querySelectorAll(a.join(", "));
            if (s?.length) {
              const e = [...s].find(e => !e?.hasAttribute("disabled"));
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
        constructor(e, a, s, n, i = null, t = null) {
          this.name = e, this.friendlyName = a, this.id = s, this.onlineService = n, this.aliasOnlineService = i, this.alias = t
        }
      }
      const o = Object.freeze({
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
        c = Object.freeze(Object.values(o));

      function d(e) {
        if (!e) return;
        if (e instanceof r) return e;
        const a = e.toString().toLowerCase();
        return c.find(e => a === e.name || a === e.id.toString() || a === e.friendlyName.toLowerCase() || a === e.onlineService?.toLowerCase() || a === e.aliasOnlineService?.toLowerCase() || a === e.alias?.toLowerCase())
      }
      var l = s(6306),
        m = s(12914);
      const u = e => {
          const a = document.cookie.split("; "),
            s = `${e}=`,
            n = a.find(e => e.startsWith(s)),
            i = n?.substring(s.length, n.length);
          return i
        },
        f = (e, a) => {
          e && void 0 !== a && (0, l.canStoreCookie)(e) && u(e) !== a && (document.cookie = `${e}=${a}; domain=${(0,m.F)()}; path=/;`)
        };
      var g = s(56990),
        k = s(45547);
      const b = async ({
        service: e,
        returnUrl: a,
        pingBearer: s
      }) => {
        const [{
          iso: n
        }] = (0, g.getLocale)(), {
          authHost: i,
          clientId: t
        } = (0, k.A)(), r = await s(), o = new URL(`tpa/${e}/link`, `https://${i}.rockstargames.com`);
        return o.searchParams.append("cid", t), o.searchParams.append("lang", n), o.searchParams.append("returnUrl", a ?? window.location.pathname), r && "boolean" != typeof r && "string" == typeof r.bearerToken && o.searchParams.append("accessToken", r.bearerToken), o
      }, p = e => e.keys().forEach(e), w = e => e.replace(/(<([^>]+)>)/gi, ""), h = [{
        key: "dev",
        path: "https://media-dev-rockstargames-com.akamaized.net"
      }, {
        key: "prod",
        path: "https://media-rockstargames-com.akamaized.net"
      }], v = (e = !0) => h.filter(a => a.key === (e ? "prod" : "dev"))[0]?.path ?? null, y = e => {
        e.preventDefault();
        const a = e.currentTarget.href,
          s = (e => {
            const a = new URL(e).pathname.split("/"),
              s = a[a.length - 1];
            return decodeURIComponent(s)
          })(a);
        fetch(a, {
          method: "GET",
          headers: {}
        }).then(e => e.arrayBuffer()).then(e => {
          const a = window.URL.createObjectURL(new Blob([e])),
            n = document.createElement("a");
          n.href = a, n.setAttribute("download", s), document.body.appendChild(n), n.click(), document.body.removeChild(n)
        }).catch(e => {
          console.log(e)
        })
      }, N = () => [o.xbox360.name, o.xboxone.name, o.ps3.name, o.ps4.name, o.pc.name], x = () => [o.xboxsx.name, o.ps5.name, o.pcalt.name], S = e => x().includes(e), _ = e => {
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
    45547: (e, a, s) => {
      "use strict";
      s.d(a, {
        A: () => o
      });
      const n = window?.env?.sc,
        i = window?.env?.marketing,
        t = ({
          apiHost: e,
          authHost: a,
          clientId: s,
          cms: t,
          graphEnv: r,
          queryManifest: o,
          scHost: c,
          hostname: d,
          cdnBase: l,
          key: m,
          marketingAuthTLD: u
        }) => {
          const f = n?.apiHost ?? e,
            g = n?.authHost ?? a,
            k = n?.cdnBase ?? l,
            b = n?.clientId ?? s,
            p = i?.marketingAuthTLD ?? u,
            w = n?.scHost ?? c,
            h = i?.pingBearerEndpoint ?? "auth/ping-bearer.json";
          return {
            apiHost: `https://${f}.rockstargames.com`,
            graphEnv: n?.graphEnv ?? r,
            host: w,
            hostname: d,
            cdnBase: k,
            key: m,
            clientId: b,
            cms: `https://${t}.rockstargames.com/graphql`,
            authHost: g,
            queryManifest: o,
            scBase: `https://${w}.rockstargames.com/`,
            login: `https://${g}.rockstargames.com/connect/authorize/${b}`,
            silentCheck: `https://${g}.rockstargames.com/connect/cors/check/${b}`,
            signup: `https://${g}.rockstargames.com/create/?cid=${b}`,
            gateway: `https://${p}/auth/gateway.json`,
            logout: `https://${p}/auth/sc-auth-logout`,
            pingBearer: `https://${p}/${h}`,
            authCookieName: "BearerToken"
          }
        },
        r = [t({
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
        }), t({
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
        o = () => {
          const e = window?.env?.scEnv ?? null;
          if (e) {
            const a = r.find(({
              key: a
            }) => a === e) ?? null;
            if (a) return a
          }
          return r.find(({
            hostname: e
          }) => new RegExp(e).test(document.location.hostname)) || r[0]
        }
    },
    55322: (e, a, s) => {
      "use strict";
      s.d(a, {
        A: () => r
      });
      var n = s(42295),
        i = s(71127),
        t = s(64740);
      const r = ({
        children: e,
        ...a
      }) => {
        const [, s] = (0, i.useState)(!1);
        return (0, n.jsx)(t.zb, {
          ...a,
          onReady: () => {
            document.fonts.ready.then(() => {
              s(!0)
            })
          },
          children: e
        })
      }
    },
    65287: (e, a, s) => {
      var n = {
        "./bounty.png": 7502,
        "./collector.png": 24970,
        "./moonshiner.png": 2661,
        "./naturalist.png": 16386,
        "./trader.png": 38635
      };

      function i(e) {
        var a = t(e);
        return s(a)
      }

      function t(e) {
        if (!s.o(n, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return n[e]
      }
      i.keys = function() {
        return Object.keys(n)
      }, i.resolve = t, e.exports = i, i.id = 65287
    },
    84343: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "TinaModulesList"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "types"
              }
            },
            type: {
              kind: "ListType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String"
                }
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "locale"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String"
                }
              }
            },
            directives: []
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "tinaModulesList"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "types"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "types"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "locale"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "locale"
                  }
                }
              }],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "results"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "id_hash"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "id"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "title"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "type"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }]
              }
            }]
          }
        }, {
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "TinaModulesInfo"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "ids"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String"
                  }
                }
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "locale"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String"
                }
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "sync"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Boolean"
              }
            },
            defaultValue: {
              kind: "BooleanValue",
              value: !1
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "cache"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Boolean"
              }
            },
            defaultValue: {
              kind: "BooleanValue",
              value: !1
            },
            directives: []
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "tinaModulesInfo"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "ids"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "ids"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "locale"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "locale"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "cache"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "cache"
                  }
                }
              }],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  alias: {
                    kind: "Name",
                    value: "id"
                  },
                  name: {
                    kind: "Name",
                    value: "id_hash"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "title"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "title_doc"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "type"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "sync_hash"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "to"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "visible"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "children"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "title"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "id_hash"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "to"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "tina"
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "payload"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "variables"
                          },
                          arguments: [],
                          directives: [],
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "keys"
                              },
                              arguments: [],
                              directives: []
                            }]
                          }
                        }]
                      }
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "tina"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "payload"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "variables"
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "id"
                          },
                          arguments: [],
                          directives: [{
                            kind: "Directive",
                            name: {
                              kind: "Name",
                              value: "include"
                            },
                            arguments: [{
                              kind: "Argument",
                              name: {
                                kind: "Name",
                                value: "if"
                              },
                              value: {
                                kind: "Variable",
                                name: {
                                  kind: "Name",
                                  value: "sync"
                                }
                              }
                            }]
                          }]
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "keys"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "_translations"
                          },
                          arguments: [],
                          directives: [{
                            kind: "Directive",
                            name: {
                              kind: "Name",
                              value: "include"
                            },
                            arguments: [{
                              kind: "Argument",
                              name: {
                                kind: "Name",
                                value: "if"
                              },
                              value: {
                                kind: "Variable",
                                name: {
                                  kind: "Name",
                                  value: "sync"
                                }
                              }
                            }]
                          }],
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "locale"
                              },
                              arguments: [],
                              directives: []
                            }, {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "keys"
                              },
                              arguments: [],
                              directives: []
                            }]
                          }
                        }]
                      }
                    }]
                  }
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 1002
        }
      };

      function s(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var n = e.type;
          "NamedType" === n.kind && a.add(n.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach(function(e) {
          s(e, a)
        }), e.variableDefinitions && e.variableDefinitions.forEach(function(e) {
          s(e, a)
        }), e.definitions && e.definitions.forEach(function(e) {
          s(e, a)
        })
      }
      a.loc.source = {
        body: "query TinaModulesList($types: [String], $locale: String!) {\n    tinaModulesList(types: $types, locale: $locale) {\n        results {\n            id_hash\n            id\n            title\n            type\n        }\n    }\n}\n\nquery TinaModulesInfo(\n    $ids: [String]!\n    $locale: String!\n    $sync: Boolean = false\n    $cache: Boolean = false\n) {\n    tinaModulesInfo(ids: $ids, locale: $locale, cache: $cache) {\n        id: id_hash\n        title\n        title_doc\n        type\n        sync_hash\n        to\n        visible\n        children {\n            title\n            id_hash\n            to\n            tina {\n                payload\n                variables {\n                    keys\n                }\n            }\n        }\n        tina {\n            payload\n            variables {\n                id @include(if: $sync)\n                keys\n                _translations @include(if: $sync) {\n                    locale\n                    keys\n                }\n            }\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var n = {};

      function i(e, a) {
        for (var s = 0; s < e.definitions.length; s++) {
          var n = e.definitions[s];
          if (n.name && n.name.value == a) return n
        }
      }

      function t(e, a) {
        var s = {
          kind: e.kind,
          definitions: [i(e, a)]
        };
        e.hasOwnProperty("loc") && (s.loc = e.loc);
        var t = n[a] || new Set,
          r = new Set,
          o = new Set;
        for (t.forEach(function(e) {
            o.add(e)
          }); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach(function(e) {
            r.has(e) || (r.add(e), (n[e] || new Set).forEach(function(e) {
              o.add(e)
            }))
          })
        }
        return r.forEach(function(a) {
          var n = i(e, a);
          n && s.definitions.push(n)
        }), s
      }
      a.definitions.forEach(function(e) {
        if (e.name) {
          var a = new Set;
          s(e, a), n[e.name.value] = a
        }
      }), e.exports = a, e.exports.TinaModulesList = t(a, "TinaModulesList"), e.exports.TinaModulesInfo = t(a, "TinaModulesInfo")
    },
    84927: (e, a, s) => {
      "use strict";
      s.d(a, {
        A: () => c
      });
      var n = s(42295),
        i = s(4407),
        t = s(55322);
      const r = {
          badge: "rockstargames-modules-core-newswire-articleb7268b0e907630904b6689af83fee8e3",
          badge2: "rockstargames-modules-core-newswire-articled08ce7145bc9562355a3984f8ccc9313",
          badge3: "rockstargames-modules-core-newswire-articlec7c60cfb12b6e9be68893c60814b3ed7",
          badgeSizeUpdate: "rockstargames-modules-core-newswire-articlece8632d7464b556158a1d549f653498c"
        },
        o = ({
          wrapper: e,
          children: a,
          role: s,
          splitter: n
        }) => n || s ? e(a) : a,
        c = ({
          badge: e,
          badgeType: a,
          role: c,
          splitter: d
        }) => {
          const l = [];
          return d ? e.split(d).map(e => l.push(e)) : l.push(e), (0, n.jsxs)(o, {
            splitter: d,
            role: c,
            wrapper: e => (0, n.jsx)("div", {
              className: `${r.badge} ${a?r[a]:""} `,
              children: e
            }),
            children: [(0, n.jsx)(n.Fragment, {
              children: c && (0, n.jsx)(i.A, {
                image: {
                  alt: c,
                  desktop: s(65287)(`./${c}.png`)
                }
              })
            }), (0, n.jsx)(t.A, {
              className: `${d||c?"":r.badge} ${a?r[a]:""}`,
              min: 8,
              max: 1e3,
              mode: d || c ? "single" : "multi",
              children: l[0]
            }), (0, n.jsx)(n.Fragment, {
              children: l.shift() && d && l.length >= 1 && (0, n.jsx)(t.A, {
                min: 8,
                max: 1e3,
                mode: "single",
                forceSingleModeWidth: !0,
                children: l.join(" ")
              })
            })]
          }, "badge-wrapper")
        }
    },
    93935: (e, a, s) => {
      "use strict";
      s.d(a, {
        A: () => u
      });
      var n = s(42295),
        i = s(71127),
        t = s(48863),
        r = s.n(t),
        o = s(58136),
        c = s(1556),
        d = s.n(c);
      const l = {
          blue: "rockstargames-modules-core-newswire-articledf5c0d39e32be4e6977bb1d638ed2340",
          custom: "rockstargames-modules-core-newswire-articleef5369875ddc5d9d7ad36eadc8afab2e",
          darkBlue: "rockstargames-modules-core-newswire-articleaa460ec14f75c93c2ba386a115ea407c",
          darkRed: "rockstargames-modules-core-newswire-articlea6a078bd68ef39e719c21e5db6329642",
          goldenrod: "rockstargames-modules-core-newswire-articlea55d762df7035a2394c9ffbfcbf1a0db",
          green: "rockstargames-modules-core-newswire-articleea2d0d0e1e32d8e48d79a0ad80a4c8ac",
          grid: "rockstargames-modules-core-newswire-articlec157d94760f0476ea06aa04da4e86727",
          gtao: "rockstargames-modules-core-newswire-articlef4bc90102d24f73cb2d45d3821bfd32e",
          gtaplus: "rockstargames-modules-core-newswire-articlec5d92b0365dc60e6b93d321e9139e9f3",
          hotPink: "rockstargames-modules-core-newswire-articlefa9be84c85fca4e66b2489e1e52a2e6a",
          itemList: "rockstargames-modules-core-newswire-articlea1ccd04246730848111c4868ccba6294",
          noImg: "rockstargames-modules-core-newswire-articleb239e263450a84fffba43a94c194d606",
          pillBtn: "rockstargames-modules-core-newswire-articled45dcc8e4008f8620987ea3033e4373d",
          purple: "rockstargames-modules-core-newswire-articlef14d63f28dd73c05cf950a08d8b8f501",
          rdo: "rockstargames-modules-core-newswire-articlecc490e805fe55ab86a3ec5df2a5131e3",
          red: "rockstargames-modules-core-newswire-articlec446b758dbe82ad97444174f4d0b4abe",
          selected: "rockstargames-modules-core-newswire-articlede1852cf9b8b4b71bcc67f8e66552c46",
          skull: "rockstargames-modules-core-newswire-articlea034e7482e8f28c66ec657f72bb93749",
          teal: "rockstargames-modules-core-newswire-articlea0aaa124176430b6ad4f959cf136e7a3",
          turquoise: "rockstargames-modules-core-newswire-articleb03c0798d8655dd98518b2f0dc002f06",
          yellow: "rockstargames-modules-core-newswire-articlebdb57ca410954012dfd4711c67fc2a18"
        },
        {
          sanitize: m
        } = r(),
        u = ({
          list: e,
          string: a,
          starColor: s,
          style: t,
          className: r,
          game: c,
          noImg: u,
          columns: f,
          mobileColumns: g
        }) => {
          const [k, b] = (0, i.useState)(null), p = a ? a.split("_#_") : e;
          if ((0, i.useEffect)(() => {
              b(e)
            }, [e]), !a && !e) return null;
          const w = {
            color: t?.color
          };
          return delete t?.color, f && k ? (0, n.jsx)("div", {
            className: l.grid,
            style: {
              "--unordered-list-grid-column": f,
              "--unordered-list-grid-column-mobile": g ?? f
            },
            children: (0, n.jsx)("ul", {
              className: d()(l.itemList, l.noImg, l[s], l[c]),
              style: (0, o.safeStyles)(t),
              children: k.map((e, a) => (0, n.jsx)("li", {
                style: w,
                dangerouslySetInnerHTML: {
                  __html: m(e.content)
                }
              }, a))
            })
          }) : (0, n.jsx)("ul", {
            style: (0, o.safeStyles)(t),
            className: d()(l.itemList, l.custom, u ? l.noImg : "", s ? l[s] : "", c ? l[c] : "", r ?? ""),
            children: p.map((e, a) => (0, n.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: m(e?.content ?? e)
              }
            }, a))
          })
        }
    },
    94322: (e, a, s) => {
      "use strict";
      s.d(a, {
        A: () => r
      });
      var n = s(42295),
        i = s(58136);
      const t = {
          responsiveImage: "rockstargames-modules-core-newswire-articlef642b754e0efd503262ab7ca0c7b9f5b"
        },
        r = ({
          src: e,
          className: a = "",
          animate: s,
          ariaLabel: r,
          style: o = {}
        }) => {
          const [c, d] = (0, i.usePreloadImg)(e);
          if (!c) return null;
          o.backgroundImage = `url(${e})`;
          const l = {
            ...o
          };
          return d && (l["--aspect-ratio"] = d.width / d.height), (0, n.jsx)("div", {
            role: "img",
            "aria-label": r ?? "R* Games",
            className: [t.responsiveImage, s ? t.animateBox : "", a].join(" "),
            style: l
          })
        }
    }
  }
]);