! function() {
  try {
    var n = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[a] = "b8885213-21bd-463b-a1f6-5eb9bd67e128", n._sentryDebugIdIdentifier = "sentry-dbid-b8885213-21bd-463b-a1f6-5eb9bd67e128")
  } catch (n) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-rockstargames",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [6274], {
    6274: (n, a, e) => {
      "use strict";
      e.d(a, {
        A: () => F
      });
      var t = e(62229),
        r = e(9623),
        i = e(28223),
        o = e(45768),
        s = e(95966),
        d = e(53178),
        c = e.n(d),
        l = e(27835),
        g = e.n(l),
        m = e(17529),
        f = e.n(m),
        p = e(72162),
        b = e.n(p),
        h = e(82510),
        A = e.n(h),
        u = e(90675),
        k = e.n(u),
        v = e(45378),
        x = {};
      x.styleTagTransform = k(), x.setAttributes = b(), x.insert = f().bind(null, "head"), x.domAPI = g(), x.insertStyleElement = A(), c()(v.A, x);
      const y = v.A && v.A.locals ? v.A.locals : void 0;
      var w = e(73855);
      const C = n => {
        let {
          children: a,
          ...e
        } = n;
        return (0, w.jsx)("span", {
          ...e,
          className: y.visuallyHidden,
          children: a
        })
      };
      var z = e(81788),
        B = e(16893),
        I = e(77869),
        G = {};
      G.styleTagTransform = k(), G.setAttributes = b(), G.insert = f().bind(null, "head"), G.domAPI = g(), G.insertStyleElement = A(), c()(I.A, G);
      const M = I.A && I.A.locals ? I.A.locals : void 0,
        j = (0, s.withTranslations)((n => {
          let {
            t: a
          } = n;
          return (0, w.jsx)(B.A, {
            className: M.cookieSettingsButton,
            onClick: () => window.OneTrust?.ToggleInfoDisplay(),
            children: a("gdpr-settings-button-title")
          })
        })),
        N = (0, z.defineMessages)({
          rockstargames_company_info_us: {
            id: "rockstargames_company_info_us",
            defaultMessage: "United States"
          },
          rockstargames_company_info_br: {
            id: "rockstargames_company_info_br",
            defaultMessage: "Brazil"
          },
          rockstargames_company_info_cz: {
            id: "rockstargames_company_info_cz",
            defaultMessage: "Czech Republic"
          },
          rockstargames_company_info_de: {
            id: "rockstargames_company_info_de",
            defaultMessage: "Germany"
          },
          rockstargames_company_info_es: {
            id: "rockstargames_company_info_es",
            defaultMessage: "Spain"
          },
          rockstargames_company_info_fr: {
            id: "rockstargames_company_info_fr",
            defaultMessage: "France"
          },
          rockstargames_company_info_it: {
            id: "rockstargames_company_info_it",
            defaultMessage: "Italy"
          },
          rockstargames_company_info_jp: {
            id: "rockstargames_company_info_jp",
            defaultMessage: "Japan"
          },
          rockstargames_company_info_kr: {
            id: "rockstargames_company_info_kr",
            defaultMessage: "South Korea"
          },
          rockstargames_company_info_mx: {
            id: "rockstargames_company_info_mx",
            defaultMessage: "Mexico"
          },
          rockstargames_company_info_nl: {
            id: "rockstargames_company_info_nl",
            defaultMessage: "Netherlands"
          },
          rockstargames_company_info_pl: {
            id: "rockstargames_company_info_pl",
            defaultMessage: "Poland"
          },
          rockstargames_company_info_ru: {
            id: "rockstargames_company_info_ru",
            defaultMessage: "Russian Federation"
          },
          rockstargames_company_info_sa: {
            id: "rockstargames_company_info_sa",
            defaultMessage: "Saudi Arabia"
          },
          rockstargames_company_info_tw: {
            id: "rockstargames_company_info_tw",
            defaultMessage: "Taiwan"
          },
          rockstargames_company_info_zh: {
            id: "rockstargames_company_info_zh",
            defaultMessage: "China"
          },
          rockstargames_company_info_display_for_country: {
            id: "rockstargames_company_info_display_for_country",
            defaultMessage: "Display page information for {country}"
          }
        });
      var E = e(20743),
        D = {};
      D.styleTagTransform = k(), D.setAttributes = b(), D.insert = f().bind(null, "head"), D.domAPI = g(), D.insertStyleElement = A(), c()(E.A, D);
      const S = E.A && E.A.locals ? E.A.locals : void 0;
      var Y = e(43053),
        R = e.n(Y);
      const F = (0, i.A)((n => {
        let {
          noCountrySelector: a,
          localeOverride: e,
          titleKey: i,
          jsonType: d,
          metaUrlOverride: c
        } = n;
        const l = (0, z.useIntl)(),
          g = (0, r.useNavigate)(),
          m = (0, r.useLocation)(),
          f = (0, s.useLocale)(),
          p = (0, s.useQueryParams)(),
          b = (0, t.useRef)(),
          h = (n, a) => {
            const e = a ?? n.target.hash,
              t = document.getElementById(e.replace("#", "")),
              r = document.getElementsByName(e.replace("#", ""))?.[0],
              i = t ?? r ?? null,
              o = p.get("country");
            if (n) {
              const a = `${m.pathname}${p.get("country")?`?country=${o}`:""}${e}`;
              g(a), n.preventDefault()
            }
            i && window.scroll(0, i.offsetTop - b.current.getBoundingClientRect().height - 60)
          },
          [A, u] = (0, t.useState)({}),
          {
            data: k,
            loading: v
          } = (0, s.useQuery)(R(), {
            variables: A,
            skip: !Object.entries(A).length,
            autoSetLoading: !0
          });
        (0, t.useEffect)((() => {
          const n = p.get("country") ?? p.get("locale") ?? null,
            t = void 0 === a,
            r = t && null !== n ? n : t && f.split("_").length > 1 ? "hans" === f.split("_")[1] ? f.split("_")[0] : f.split("_")[1] : f,
            i = e || r || "us";
          u({
            jsonType: d,
            jsonLocale: i,
            metaUrl: `/${c??d}`,
            locale: i
          })
        }), [p.get("country"), p.get("locale"), e]), (0, t.useEffect)((() => {
          document.querySelectorAll(".scrollToLink").forEach((n => {
            (n => {
              if (n) {
                const a = p.get("country"),
                  e = n.href.split("#")[1],
                  t = document.getElementsByTagName("base")[0]?.getAttribute("href");
                n.setAttribute("href", `${t}${m.pathname.replace("/","")}${null!==a?`?country=${a}`:""}#${e}`)
              }
            })(n), n.addEventListener("click", (n => {
              h(n, !1)
            }))
          })), "" !== m.hash && setTimeout((() => {
            h(!1, m.hash)
          }), 10)
        }), [k]);
        const {
          content: x
        } = k?.companyInfo ?? "", {
          title: y
        } = k?.meta ?? i ?? "";
        return (0, w.jsxs)("div", {
          className: S.companyInfo,
          "data-locale": A.jsonLocale,
          "data-page": d,
          children: [(0, w.jsxs)("section", {
            className: S.top,
            ref: b,
            children: [(0, w.jsx)("h1", {
              children: y
            }), void 0 !== a && a ? "" : (0, w.jsx)("nav", {
              className: S.nav,
              children: ["us", "br", "cz", "de", "es", "fr", "it", "jp", "kr", "mx", "nl", "pl", "ru", "sa", "tw", "zh"].map(((n, a) => {
                const e = l.formatMessage(N.rockstargames_company_info_display_for_country, {
                  country: l.formatMessage(N[`rockstargames_company_info_${n}`])
                });
                return (0, w.jsx)(o.A, {
                  to: `${m.pathname}?country=${n}`,
                  className: S[n],
                  title: e,
                  children: (0, w.jsx)(C, {
                    children: e
                  })
                }, a)
              }))
            })]
          }), k && !v ? (0, w.jsxs)("section", {
            className: S.content,
            "data-json-type": d,
            children: ["cookies" === d && (0, w.jsx)(j, {}), (0, w.jsx)("span", {
              dangerouslySetInnerHTML: {
                __html: x
              }
            })]
          }) : ""]
        })
      }))
    },
    45378: (n, a, e) => {
      "use strict";
      e.d(a, {
        A: () => s
      });
      var t = e(42587),
        r = e.n(t),
        i = e(15081),
        o = e.n(i)()(r());
      o.push([n.id, ".rockstargames-sites-rockstargamesacd86b7f5778381df8fac4a3f7489f60{clip:rect(0 0 0 0);border:0;height:1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}", "", {
        version: 3,
        sources: ["webpack://./../../buildtime/components/src/VisuallyHidden/index.less"],
        names: [],
        mappings: "AAAA,mEAEI,kBAAA,CADA,QAAA,CAEA,UAAA,CACA,eAAA,CACA,SAAA,CACA,iBAAA,CACA,kBAAA,CACA,SACJ",
        sourcesContent: [".visuallyHidden {\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    white-space: nowrap;\n    width: 1px;\n}"],
        sourceRoot: ""
      }]), o.locals = {
        visuallyHidden: "rockstargames-sites-rockstargamesacd86b7f5778381df8fac4a3f7489f60"
      };
      const s = o
    },
    77869: (n, a, e) => {
      "use strict";
      e.d(a, {
        A: () => s
      });
      var t = e(42587),
        r = e.n(t),
        i = e(15081),
        o = e.n(i)()(r());
      o.push([n.id, "button.rockstargames-sites-rockstargamesda0a715288779aacd0abdacf5a4351ce{align-self:center;width:-moz-max-content;width:max-content}", "", {
        version: 3,
        sources: ["webpack://./src/components/CookieSettingsButton/index.less"],
        names: [],
        mappings: "AAAA,yEACI,iBAAA,CACA,sBAAA,CAAA,iBACJ",
        sourcesContent: ["button.cookieSettingsButton {\n    align-self: center;\n    width: max-content;\n}\n"],
        sourceRoot: ""
      }]), o.locals = {
        cookieSettingsButton: "rockstargames-sites-rockstargamesda0a715288779aacd0abdacf5a4351ce"
      };
      const s = o
    },
    20743: (n, a, e) => {
      "use strict";
      e.d(a, {
        A: () => m
      });
      var t = e(42587),
        r = e.n(t),
        i = e(15081),
        o = e.n(i),
        s = e(79908),
        d = e.n(s),
        c = new URL(e(82268), e.b),
        l = o()(r()),
        g = d()(c);
      l.push([n.id, `.rockstargames-sites-rockstargamesc552797e8c2ab4b813175e9fa1b9ef74{align-items:center;background:var(--white-15);border:none;border-radius:100px;color:var(--white-100);cursor:pointer;display:flex;font-family:var(--font-family-body);font-size:20px;font-style:normal;font-weight:700;justify-content:center;line-height:var(--rem-125);min-width:var(--rem-6);padding:var(--padding-xs) var(--padding-sm);text-align:center;transition:background-color .3s ease-in-out}.rockstargames-sites-rockstargamesc552797e8c2ab4b813175e9fa1b9ef74 img{height:var(--nav-icon-size);margin-left:var(--grid-gap-xs);transition:filter .3s ease-in-out;width:var(--nav-icon-size)}.rockstargames-sites-rockstargamesc552797e8c2ab4b813175e9fa1b9ef74:focus,.rockstargames-sites-rockstargamesc552797e8c2ab4b813175e9fa1b9ef74:hover{background-color:var(--white-40);outline:none}.rockstargames-sites-rockstargamesc552797e8c2ab4b813175e9fa1b9ef74.rockstargames-sites-rockstargamesf57b637a2309d10d2e8290ebaf72a409{background:var(--white-100);color:var(--black-200)}.rockstargames-sites-rockstargamesc552797e8c2ab4b813175e9fa1b9ef74.rockstargames-sites-rockstargamesf57b637a2309d10d2e8290ebaf72a409 img{filter:invert()}.rockstargames-sites-rockstargamese9251e0589829674fbf2fb8bd82f5da4{margin:0 auto;max-width:var(--max-width);padding-bottom:var(--padding-top-bottom);padding-left:var(--padding-sides);padding-right:var(--padding-sides);width:100%}.rockstargames-sites-rockstargamese9251e0589829674fbf2fb8bd82f5da4 section.rockstargames-sites-rockstargamesd0180d1081dba40a242a3660beeabb33{background:var(--background-color);margin:0 auto;max-width:var(--max-width-static-md);text-align:left;z-index:5}.rockstargames-sites-rockstargamese9251e0589829674fbf2fb8bd82f5da4 section.rockstargames-sites-rockstargamesd0180d1081dba40a242a3660beeabb33,[data-page=community-guidelines].rockstargames-sites-rockstargamese9251e0589829674fbf2fb8bd82f5da4 section.rockstargames-sites-rockstargamesd0180d1081dba40a242a3660beeabb33,[data-page=sk-privacy-addendum].rockstargames-sites-rockstargamese9251e0589829674fbf2fb8bd82f5da4 section.rockstargames-sites-rockstargamesd0180d1081dba40a242a3660beeabb33{padding:var(--grid-gap-static-md) 0}.rockstargames-sites-rockstargamese9251e0589829674fbf2fb8bd82f5da4 section.rockstargames-sites-rockstargamesc3bbdddf0ebf23c57a14b8c9deee1d2b{grid-gap:2rem;display:grid;margin:0 auto;max-width:var(--max-width-static-md)}.rockstargames-sites-rockstargamese9251e0589829674fbf2fb8bd82f5da4 section.rockstargames-sites-rockstargamesc3bbdddf0ebf23c57a14b8c9deee1d2b h2{margin:var(--grid-gap-static-lg) 0 var(--grid-gap-static-sm)}.rockstargames-sites-rockstargamese9251e0589829674fbf2fb8bd82f5da4 section.rockstargames-sites-rockstargamesc3bbdddf0ebf23c57a14b8c9deee1d2b p:not(:last-child){margin-bottom:var(--base-rem-size)}.rockstargames-sites-rockstargamese9251e0589829674fbf2fb8bd82f5da4 section.rockstargames-sites-rockstargamesc3bbdddf0ebf23c57a14b8c9deee1d2b li a,.rockstargames-sites-rockstargamese9251e0589829674fbf2fb8bd82f5da4 section.rockstargames-sites-rockstargamesc3bbdddf0ebf23c57a14b8c9deee1d2b p a{background:transparent;display:inline-block;padding:0;position:relative;z-index:1}@media (min-width:0px){.rockstargames-sites-rockstargamese9251e0589829674fbf2fb8bd82f5da4 section.rockstargames-sites-rockstargamesc3bbdddf0ebf23c57a14b8c9deee1d2b li a,.rockstargames-sites-rockstargamese9251e0589829674fbf2fb8bd82f5da4 section.rockstargames-sites-rockstargamesc3bbdddf0ebf23c57a14b8c9deee1d2b p a{transition:all .2s ease}.rockstargames-sites-rockstargamese9251e0589829674fbf2fb8bd82f5da4 section.rockstargames-sites-rockstargamesc3bbdddf0ebf23c57a14b8c9deee1d2b li a:before,.rockstargames-sites-rockstargamese9251e0589829674fbf2fb8bd82f5da4 section.rockstargames-sites-rockstargamesc3bbdddf0ebf23c57a14b8c9deee1d2b p a:before{background:var(--body-color);border-radius:.25rem;bottom:0;content:"";display:block;height:2px;left:-.1rem;position:absolute;transition:all .2s ease;width:calc(100% + .2rem);z-index:-1}.rockstargames-sites-rockstargamese9251e0589829674fbf2fb8bd82f5da4 section.rockstargames-sites-rockstargamesc3bbdddf0ebf23c57a14b8c9deee1d2b li a:hover,.rockstargames-sites-rockstargamese9251e0589829674fbf2fb8bd82f5da4 section.rockstargames-sites-rockstargamesc3bbdddf0ebf23c57a14b8c9deee1d2b p a:hover{color:#161616}.rockstargames-sites-rockstargamese9251e0589829674fbf2fb8bd82f5da4 section.rockstargames-sites-rockstargamesc3bbdddf0ebf23c57a14b8c9deee1d2b li a:hover:before,.rockstargames-sites-rockstargamese9251e0589829674fbf2fb8bd82f5da4 section.rockstargames-sites-rockstargamesc3bbdddf0ebf23c57a14b8c9deee1d2b p a:hover:before{height:100%;left:-.25rem;width:calc(100% + .5rem)}}.rockstargames-sites-rockstargamese9251e0589829674fbf2fb8bd82f5da4 section.rockstargames-sites-rockstargamesc3bbdddf0ebf23c57a14b8c9deee1d2b li a img,.rockstargames-sites-rockstargamese9251e0589829674fbf2fb8bd82f5da4 section.rockstargames-sites-rockstargamesc3bbdddf0ebf23c57a14b8c9deee1d2b p a img{display:block}.rockstargames-sites-rockstargamese9251e0589829674fbf2fb8bd82f5da4 section.rockstargames-sites-rockstargamesc3bbdddf0ebf23c57a14b8c9deee1d2b .browser-cookies a{word-break:break-all}.rockstargames-sites-rockstargamese9251e0589829674fbf2fb8bd82f5da4 .rockstargames-sites-rockstargamescdfa81eab2ffa961d134c6f3962d9df2{display:flex;flex-wrap:wrap;justify-content:flex-start;margin-top:var(--grid-gap-static-sm)}[data-page=community-guidelines].rockstargames-sites-rockstargamese9251e0589829674fbf2fb8bd82f5da4 .rockstargames-sites-rockstargamescdfa81eab2ffa961d134c6f3962d9df2{display:none}.rockstargames-sites-rockstargamese9251e0589829674fbf2fb8bd82f5da4 .rockstargames-sites-rockstargamescdfa81eab2ffa961d134c6f3962d9df2 a{background-image:url(${g});background-position:50%;background-repeat:no-repeat;flex-basis:16px;flex-grow:0;flex-shrink:0;height:13px;margin:5px;width:16px}.rockstargames-sites-rockstargamese9251e0589829674fbf2fb8bd82f5da4 .rockstargames-sites-rockstargamescdfa81eab2ffa961d134c6f3962d9df2 a.rockstargames-sites-rockstargamesb577d27e2379d02659055abbd6b666db{background-position:0 0}.rockstargames-sites-rockstargamese9251e0589829674fbf2fb8bd82f5da4 .rockstargames-sites-rockstargamescdfa81eab2ffa961d134c6f3962d9df2 a.rockstargames-sites-rockstargamesd4eba5ddfaaa55b095a205d939438113{background-position:0 -144px}.rockstargames-sites-rockstargamese9251e0589829674fbf2fb8bd82f5da4 .rockstargames-sites-rockstargamescdfa81eab2ffa961d134c6f3962d9df2 a.rockstargames-sites-rockstargamesc45a04b51ded1c14905f1a7e0f1e67ec{background-position:0 -224px}.rockstargames-sites-rockstargamese9251e0589829674fbf2fb8bd82f5da4 .rockstargames-sites-rockstargamescdfa81eab2ffa961d134c6f3962d9df2 a.rockstargames-sites-rockstargamesc496427e453c5548969da90086b25ea6{background-position:0 -64px}.rockstargames-sites-rockstargamese9251e0589829674fbf2fb8bd82f5da4 .rockstargames-sites-rockstargamescdfa81eab2ffa961d134c6f3962d9df2 a.rockstargames-sites-rockstargamesb775f7b18b8ec09693ba5689001a0b6f{background-position:0 -32px}.rockstargames-sites-rockstargamese9251e0589829674fbf2fb8bd82f5da4 .rockstargames-sites-rockstargamescdfa81eab2ffa961d134c6f3962d9df2 a.rockstargames-sites-rockstargamesc9308ca04e0c61704e1283f9190f0e9d{background-position:0 -48px}.rockstargames-sites-rockstargamese9251e0589829674fbf2fb8bd82f5da4 .rockstargames-sites-rockstargamescdfa81eab2ffa961d134c6f3962d9df2 a.rockstargames-sites-rockstargamesa4d36f86d484e6b8c2744c0ca55dd2bb{background-position:0 -80px}.rockstargames-sites-rockstargamese9251e0589829674fbf2fb8bd82f5da4 .rockstargames-sites-rockstargamescdfa81eab2ffa961d134c6f3962d9df2 a.rockstargames-sites-rockstargamesb4e5e281b6799125f268596cf0cb08ca{background-position:0 -176px}.rockstargames-sites-rockstargamese9251e0589829674fbf2fb8bd82f5da4 .rockstargames-sites-rockstargamescdfa81eab2ffa961d134c6f3962d9df2 a.rockstargames-sites-rockstargamesfa5fe16ccc02f341ab537dd0c36168b3{background-position:0 -192px}.rockstargames-sites-rockstargamese9251e0589829674fbf2fb8bd82f5da4 .rockstargames-sites-rockstargamescdfa81eab2ffa961d134c6f3962d9df2 a.rockstargames-sites-rockstargamesfb82650022fe0adab1844cf27f186ea2{background-position:0 -16px}.rockstargames-sites-rockstargamese9251e0589829674fbf2fb8bd82f5da4 .rockstargames-sites-rockstargamescdfa81eab2ffa961d134c6f3962d9df2 a.rockstargames-sites-rockstargamese492e4ea7d4fb13bd28f14101fb55ea4{background-position:0 -96px}.rockstargames-sites-rockstargamese9251e0589829674fbf2fb8bd82f5da4 .rockstargames-sites-rockstargamescdfa81eab2ffa961d134c6f3962d9df2 a.rockstargames-sites-rockstargamesdc65d9c7dc3484c15c7368c4c8d57305{background-position:0 -128px}.rockstargames-sites-rockstargamese9251e0589829674fbf2fb8bd82f5da4 .rockstargames-sites-rockstargamescdfa81eab2ffa961d134c6f3962d9df2 a.rockstargames-sites-rockstargamesc8848a20bec483fd18e054491bff9d80{background-position:0 -112px}.rockstargames-sites-rockstargamese9251e0589829674fbf2fb8bd82f5da4 .rockstargames-sites-rockstargamescdfa81eab2ffa961d134c6f3962d9df2 a.rockstargames-sites-rockstargamesf6a4c584a3c58d3bb39947f0f80e37b3{background-position:0 -208px}.rockstargames-sites-rockstargamese9251e0589829674fbf2fb8bd82f5da4 .rockstargames-sites-rockstargamescdfa81eab2ffa961d134c6f3962d9df2 a.rockstargames-sites-rockstargamesceb5c9a7eacc6d559d8ba67e78faf262{background-position:0 -160px}.rockstargames-sites-rockstargamese9251e0589829674fbf2fb8bd82f5da4 .rockstargames-sites-rockstargamescdfa81eab2ffa961d134c6f3962d9df2 a.rockstargames-sites-rockstargamesedb6fced472a5e478fd76b932e5536f1{background-position:0 -240px}.rockstargames-sites-rockstargamese9251e0589829674fbf2fb8bd82f5da4 [data-json-type=privacy] span{grid-gap:3rem;display:grid}.rockstargames-sites-rockstargamese9251e0589829674fbf2fb8bd82f5da4 [data-json-type=privacy] span h3{margin-bottom:1rem}.rockstargames-sites-rockstargamese9251e0589829674fbf2fb8bd82f5da4 [data-json-type=sk-privacy-addendum] .pageWrapper{grid-gap:var(--grid-gap-static-sm);display:grid}.rockstargames-sites-rockstargamese9251e0589829674fbf2fb8bd82f5da4 [data-json-type=sk-privacy-addendum] .tableComponent{overflow-x:auto;scrollbar-color:#7d7d7d transparent;scrollbar-width:auto}.rockstargames-sites-rockstargamese9251e0589829674fbf2fb8bd82f5da4 [data-json-type=sk-privacy-addendum] .tableComponent::-webkit-scrollbar{height:8px}.rockstargames-sites-rockstargamese9251e0589829674fbf2fb8bd82f5da4 [data-json-type=sk-privacy-addendum] .tableComponent::-webkit-scrollbar-track{background:transparent}.rockstargames-sites-rockstargamese9251e0589829674fbf2fb8bd82f5da4 [data-json-type=sk-privacy-addendum] .tableComponent::-webkit-scrollbar-thumb{background-color:#7d7d7d;border:none;border-radius:10px}.rockstargames-sites-rockstargamese9251e0589829674fbf2fb8bd82f5da4 [data-json-type=sk-privacy-addendum] table{border:1px solid #e8e8e8;border-collapse:collapse;border-spacing:1px;height:auto;margin-bottom:var(--grid-gap-static-sm);table-layout:auto;text-align:left;width:100%}.rockstargames-sites-rockstargamese9251e0589829674fbf2fb8bd82f5da4 [data-json-type=sk-privacy-addendum] td,.rockstargames-sites-rockstargamese9251e0589829674fbf2fb8bd82f5da4 [data-json-type=sk-privacy-addendum] th{background-color:#0b0b0b;border:1px solid #e8e8e8;color:#e8e8e8;padding:5px}.rockstargames-sites-rockstargamese9251e0589829674fbf2fb8bd82f5da4 [data-json-type=sk-privacy-addendum] ul{margin-top:0}.rockstargames-sites-rockstargamese9251e0589829674fbf2fb8bd82f5da4 [data-json-type=sk-privacy-addendum] .tableComponent p a,.rockstargames-sites-rockstargamese9251e0589829674fbf2fb8bd82f5da4 [data-json-type=sk-privacy-addendum] p a{display:inline;text-decoration:underline}.rockstargames-sites-rockstargamese9251e0589829674fbf2fb8bd82f5da4 [data-json-type=sk-privacy-addendum] .tableComponent p a:before,.rockstargames-sites-rockstargamese9251e0589829674fbf2fb8bd82f5da4 [data-json-type=sk-privacy-addendum] p a:before{display:none!important}.rockstargames-sites-rockstargamese9251e0589829674fbf2fb8bd82f5da4 [data-json-type=sk-privacy-addendum] .tableComponent p a:hover,.rockstargames-sites-rockstargamese9251e0589829674fbf2fb8bd82f5da4 [data-json-type=sk-privacy-addendum] p a:hover{background:unset;color:#e8e8e8!important;cursor:pointer;text-decoration:none}.rockstargames-sites-rockstargamese9251e0589829674fbf2fb8bd82f5da4 [data-json-type=sk-privacy-addendum] .contact span{display:block}`, "", {
        version: 3,
        sources: ["webpack://./../../buildtime/legacy-design-system/less/gen9-mixins.less", "webpack://./src/pages/CompanyInfo/index.less", "webpack://./../../buildtime/legacy-design-system/less/mixins.less"],
        names: [],
        mappings: "AA2QA,mEAKI,kBAAA,CAGA,0BAAA,CAFA,WAAA,CACA,mBAAA,CAIA,sBAAA,CAQA,cAAA,CAlBA,YAAA,CAYA,mCAAA,CACA,cAAA,CACA,iBAAA,CACA,eAAA,CAZA,sBAAA,CAaA,0BAAA,CAfA,sBAAA,CACA,2CAAA,CASA,iBAAA,CAQA,2CC9OJ,CD0NA,uEAwBQ,2BAAA,CADA,8BAAA,CAGA,iCAAA,CADA,0BC7OR,CDiPI,kJAEI,gCAAA,CACA,YC/OR,CDkPI,qIAEI,2BAAA,CADA,sBC/OR,CD8OI,yIAKQ,eChPZ,CAjEA,mECwYI,aAAA,CAFA,0BAAA,CDpYA,wCAAA,CCuYA,iCAAA,CACA,kCAAA,CAHA,UD9TJ,CAzEA,6IAMQ,kCAAA,CAKA,aAAA,CADA,oCAAA,CAFA,eAAA,CACA,SAyER,CArEQ,seARA,mCAiFR,CAtFA,6IAqBQ,aAAA,CACA,YAAA,CAHA,aAAA,CACA,oCAwER,CA5FA,gJAwBY,4DAuEZ,CA/FA,gKA2BY,kCAuEZ,CAlGA,mSCkmBI,sBAAA,CDnkBQ,oBAAA,CCokBR,SAAA,CAFA,iBAAA,CAGA,SD1fJ,CC2fI,uBAAA,mSACI,uBDvfN,CCwfM,iTAQI,4BAAA,CAGA,oBAAA,CAPA,QAAA,CAHA,UAAA,CACA,aAAA,CAKA,UAAA,CAFA,WAAA,CAFA,iBAAA,CAMA,uBAAA,CAHA,wBAAA,CAIA,UDpfV,CCufM,+SACI,aDpfV,CCsfU,6TAGI,WAAA,CAFA,YAAA,CACA,wBDlfd,CACF,CAxIA,2SC+nBQ,aDnfR,CA5IA,gKAsCgB,oBAyGhB,CA/IA,sIA2CQ,YAAA,CAEA,cAAA,CADA,0BAAA,CAEA,oCAuGR,CArGQ,sKACI,YAuGZ,CAxJA,wIA4DY,wDAAA,CAEA,uBAAA,CADA,2BAAA,CARA,eAAA,CAEA,WAAA,CADA,aAAA,CAIA,WAAA,CAFA,UAAA,CACA,UA0GZ,CApGY,0MACI,uBAsGhB,CApGY,0MACI,4BAsGhB,CApGY,0MACI,4BAsGhB,CApGY,0MACI,2BAsGhB,CApGY,0MACI,2BAsGhB,CApGY,0MACI,2BAsGhB,CApGY,0MACI,2BAsGhB,CApGY,0MACI,4BAsGhB,CApGY,0MACI,4BAsGhB,CApGY,0MACI,2BAsGhB,CApGY,0MACI,2BAsGhB,CApGY,0MACI,4BAsGhB,CApGY,0MACI,4BAsGhB,CApGY,0MACI,4BAsGhB,CApGY,0MACI,4BAsGhB,CApGY,0MACI,4BAsGhB,CAnNA,iGAoHQ,aAAA,CADA,YAoGR,CAvNA,oGAsHY,kBAoGZ,CA1NA,qHA6HY,kCAAA,CADA,YAkGZ,CA9NA,wHAiIY,eAAA,CAEA,mCAAA,CADA,oBAkGZ,CA9FY,2IACI,UAgGhB,CA9FY,iJACI,sBAgGhB,CA9FY,iJACI,wBAAA,CAEA,WAAA,CADA,kBAiGhB,CA/OA,8GAoJY,wBAAA,CAIA,wBAAA,CACA,kBAAA,CAJA,WAAA,CAMA,uCAAA,CAJA,iBAAA,CAGA,eAAA,CAJA,UAmGZ,CAzPA,sNAgKY,wBAAA,CADA,wBAAA,CAEA,aAAA,CACA,WAmGZ,CArQA,2GA6KY,YA2FZ,CAxQA,wOAkLY,cAAA,CACA,yBA0FZ,CAzFY,sPACI,sBA4FhB,CA1FY,oPAEI,gBAAA,CACA,uBAAA,CACA,cAAA,CAHA,oBAgGhB,CAxRA,sHAgMY,aA2FZ",
        sourcesContent: ["@import 'mixins.less';\n\n// Headlines\n.headline-6 () {\n    font-size: calc(var(--font-size-3) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-5 () {\n    font-size: calc(var(--font-size-4) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-4 () {\n    font-size: calc(var(--font-size-5) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3 () {\n    font-size: calc(var(--font-size-6) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3-bold () {\n    .headline-3();\n    font-weight: var(--font-weight-bold);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-2 () {\n    font-size: calc(var(--font-size-7) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-1 () {\n    font-size: calc(var(--font-size-8) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.xLarge () {\n    font-size: calc(var(--font-size-9) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n// Body\n.body-xs () {\n    font-size: var(--font-size-1);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-xs-bold () {\n    .body-xs;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-sm () {\n    font-size: var(--font-size-2);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-sm-bold () {\n    .body-sm;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-md () {\n    font-size: var(--font-size-3);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-md-bold () {\n    .body-md;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-lg () {\n    font-size: var(--font-size-4);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-lg-bold () {\n    .body-lg;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.handleFontDeclarationsGen9() {\n    h1 {\n        .headline-1;\n    }\n    h2 {\n        .headline-2;\n    }\n    h3 {\n        .headline-3;\n    }\n    h4 {\n        .headline-4;\n    }\n    h5 {\n        .headline-5;\n    }\n    p {\n        .body-md;\n    }\n}\n\n.handleMaxWidth(@max-width-default: 1000000px) {\n    width: 100%;\n    max-width: calc(\n        var(--max-width-dynamic, @max-width-default) +\n            var(--padding-dynamic, 0px) * 2\n    ) !important;\n    margin: 0 auto;\n}\n\n.handlePadding(@paddingSides: initial, @paddingTopBottom: initial) {\n    --padding-dynamic: @paddingSides;\n    --padding-dynamic-tb: @paddingTopBottom;\n\n    padding: var(--padding-t, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0) var(--padding-b, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0);\n}\n\n.commonContent() {\n    .handlePadding(var(--padding-sides), 0);\n    .handleMaxWidth(var(--content-max-width));\n}\n\n.backgroundIcon(@icon) {\n    background: url('../icons/@{icon}.svg') no-repeat center/1rem;\n}\n\n@iconBtnConfig: {\n    @small: {\n        size: 2rem;\n    };\n    @large: {\n        size: 3rem;\n    };\n};\n\n.iconBtn(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    background: var(--black-65, rgba(0, 0, 0, 0.65));\n    border: 1px solid var(--white-100, #fff);\n    border-radius: 50%;\n    padding: 0;\n    transition: background 0.3s ease-in-out;\n    &::after {\n        .backgroundIcon(@icon);\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n    }\n\n    &:focus {\n        outline: none;\n        border: none;\n    }\n\n    .isTouchscreen({\n        &:active {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    }, {\n        &:hover,\n        &:focus {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    });\n}\n\n.iconBtnPlain(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    padding: 0;\n\n    &::after {\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n        background: url('../icons/@{icon}.svg') no-repeat center/1.5rem;\n    }\n}\n\n.swiperBtn(@icon) {\n    .iconBtn(@icon, large);\n    background: var(--black-200);\n    border-radius: 0;\n    border: none;\n    &::after {\n        background-size: 1.5rem;\n    }\n}\n\n.pillBtn {\n    display: flex;\n    min-width: var(--rem-6);\n    padding: var(--padding-xs) var(--padding-sm);\n    justify-content: center;\n    align-items: center;\n    border: none;\n    border-radius: 100px;\n    background: var(--white-15);\n    cursor: pointer;\n\n    color: var(--white-100);\n    text-align: center;\n    font-family: var(--font-family-body);\n    font-size: 20px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: var(--rem-125);\n\n    cursor: pointer;\n    transition: background-color 0.3s ease-in-out;\n\n    img {\n        margin-left: var(--grid-gap-xs);\n        height: var(--nav-icon-size);\n        width: var(--nav-icon-size);\n        transition: filter 0.3s ease-in-out;\n    }\n\n    &:hover,\n    &:focus {\n        background-color: var(--white-40);\n        outline: none;\n    }\n\n    &.selected {\n        color: var(--black-200);\n        background: var(--white-100);\n\n        img {\n            filter: invert();\n        }\n    }\n}\n\n.setGen9Root() {\n    --gen9-max-width: 2560px;\n    --content-max-width: var(--gen9-max-width);\n    --padding-sides: var(--padding-lg);\n    --content-padding: 0 var(--padding-sides);\n    flex: 1;\n    display: flex;\n    justify-content: center;\n\n    .xl({\n        --padding-sides: var(--padding-xl);\n    });\n\n    .handleFontDeclarationsGen9();\n}\n\n.scrollFade() {\n    // @note: this is breaking on firefox.\n    mask-image: linear-gradient(\n        to bottom,\n        var(--black-100) calc(100% - 48px),\n        transparent calc(100% + 16px)\n    );\n}\n\n.scrollbar() {\n    /* Firefox */\n    scrollbar-width: auto;\n    scrollbar-color: var(--scroll-thumb-color) var(--scroll-track-color);\n\n    /* Chrome, Edge, and Safari */\n    &::-webkit-scrollbar {\n        width: 8px;\n    }\n    &::-webkit-scrollbar-track {\n        background: transparent;\n    }\n    &::-webkit-scrollbar-thumb {\n        background-color: var(--scroll-thumb-color);\n        border-radius: 10px;\n        border: none;\n    }\n}\n\n.ifElse(@condition, @if-styles, @else-styles) {\n    @media @condition {\n        @if-styles();\n    }\n    @media not (@condition) {\n        @else-styles();\n    }\n}\n\n.isTouchscreen(@if-styles, @else-styles) {\n    .ifElse(~'(pointer: coarse)', @if-styles, @else-styles);\n}\n\n.mobile-landscape(@rules) {\n    @media only screen and (min-width: 480px) and (max-width: 1023px) and (orientation: landscape) {\n        @rules();\n    }\n}\n\n.caret(@color) {\n    .dropdownCaret(@color);\n}\n\n.horizontalScrollFade() {\n    mask-image: linear-gradient(\n        to right,\n        transparent,\n        rgba(0, 0, 0, 0.3) calc(var(--padding-sides) / 2),\n        #000 var(--padding-sides),\n        #000 calc(100% - var(--padding-sides)),\n        rgba(0, 0, 0, 0.3) calc(100% - (var(--padding-sides) / 2)),\n        transparent\n    );\n}\n\n// Accessibility\n.visuallyHidden() {\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    white-space: nowrap;\n    width: 1px;\n}\n", "@import '@rsgweb/legacy-design-system/less/gen9-mixins.less';\n\n.companyInfo {\n    .maxWidthWithNormalPadding;\n    padding-bottom: var(--padding-top-bottom);\n\n    section.top {\n        padding: var(--grid-gap-static-md) 0;\n        background: var(--background-color);\n        margin-bottom: var(--base-rem-size);\n        text-align: left;\n        z-index: 5;\n        max-width: var(--max-width-static-md);\n        margin: 0 auto;\n\n        [data-page='community-guidelines']&,\n        [data-page='sk-privacy-addendum']& {\n            padding: var(--grid-gap-static-md) 0;\n        }\n    }\n    section.content {\n        margin: 0 auto;\n        max-width: var(--max-width-static-md);\n        grid-gap: 2rem;\n        display: grid;\n        h2 {\n            margin: var(--grid-gap-static-lg) 0 var(--grid-gap-static-sm);\n        }\n        p:not(:last-child) {\n            margin-bottom: var(--base-rem-size);\n        }\n        p a,\n        li a {\n            display: inline-block;\n            .fancyLink;\n        }\n\n        :global(.browser-cookies) {\n            // The browser links were breaking layout on mobile.\n            a {\n                word-break: break-all;\n            }\n        }\n    }\n    .nav {\n        display: flex;\n        justify-content: flex-start;\n        flex-wrap: wrap;\n        margin-top: var(--grid-gap-static-sm);\n\n        [data-page='community-guidelines']& {\n            display: none;\n        }\n\n        a {\n            flex-basis: 16px;\n            flex-shrink: 0;\n            flex-grow: 0;\n            margin: 5px;\n            width: 16px;\n            height: 13px;\n            @sprite: './img/flags.png';\n            background-image: data-uri(@sprite);\n            background-repeat: no-repeat;\n            background-position: center center;\n            &.us {\n                background-position: 0 0;\n            }\n            &.br {\n                background-position: 0 -144px;\n            }\n            &.cz {\n                background-position: 0 -224px;\n            }\n            &.de {\n                background-position: 0 -64px;\n            }\n            &.es {\n                background-position: 0 -32px;\n            }\n            &.fr {\n                background-position: 0 -48px;\n            }\n            &.it {\n                background-position: 0 -80px;\n            }\n            &.jp {\n                background-position: 0 -176px;\n            }\n            &.kr {\n                background-position: 0 -192px;\n            }\n            &.mx {\n                background-position: 0 -16px;\n            }\n            &.nl {\n                background-position: 0 -96px;\n            }\n            &.pl {\n                background-position: 0 -128px;\n            }\n            &.ru {\n                background-position: 0 -112px;\n            }\n            &.sa {\n                background-position: 0 -208px;\n            }\n            &.tw {\n                background-position: 0 -160px;\n            }\n            &.zh {\n                background-position: 0 -240px;\n            }\n        }\n    }\n\n    [data-json-type='privacy'] span {\n        display: grid;\n        grid-gap: 3rem;\n        h3 {\n            margin-bottom: 1rem;\n        }\n    }\n\n    [data-json-type='sk-privacy-addendum'] {\n        :global(.pageWrapper) {\n            display: grid;\n            grid-gap: var(--grid-gap-static-sm);\n        }\n\n        :global(.tableComponent) {\n            overflow-x: auto;\n            scrollbar-width: auto;\n            scrollbar-color: #7d7d7d transparent;\n\n            /* Chrome, Edge, and Safari */\n            &::-webkit-scrollbar {\n                height: 8px;\n            }\n            &::-webkit-scrollbar-track {\n                background: transparent;\n            }\n            &::-webkit-scrollbar-thumb {\n                background-color: #7d7d7d;\n                border-radius: 10px;\n                border: none;\n            }\n        }\n\n        table {\n            border: 1px solid #e8e8e8;\n            height: auto;\n            width: 100%;\n            table-layout: auto;\n            border-collapse: collapse;\n            border-spacing: 1px;\n            text-align: left;\n            margin-bottom: var(--grid-gap-static-sm);\n        }\n\n        th {\n            border: 1px solid #e8e8e8;\n            background-color: #0b0b0b;\n            color: #e8e8e8;\n            padding: 5px;\n        }\n\n        td {\n            border: 1px solid #e8e8e8;\n            background-color: #0b0b0b;\n            color: #e8e8e8;\n            padding: 5px;\n        }\n\n        ul {\n            margin-top: 0px;\n        }\n\n        p a,\n        :global(.tableComponent p a) {\n            display: inline;\n            text-decoration: underline;\n            &:before {\n                display: none !important;\n            }\n            &:hover {\n                text-decoration: none;\n                background: unset;\n                color: #e8e8e8 !important;\n                cursor: pointer;\n            }\n        }\n\n        :global(.contact) span {\n            display: block;\n        }\n    }\n}\n", "/*\n * New Design System:\n * 1. Breakpoints\n * 2. Typography\n * 3. Variables\n * 4. Utility\n *     4.1 Flex\n *     4.2 Grid\n *     4.3 Max-Width\n *     4.4 Images\n *     4.5 Padding\n *     4.6 Fonts\n *     4.7 Games\n *     4.8 Tina\n *     4.9 Hacks\n * 5. Presentational\n */\n\n/* 1. Breakpoints */\n@screen-sm: 0px;\n@screen-md: 768px;\n@screen-lg: 1024px;\n@screen-xl: 1920px;\n@screen-xxl: 2560px;\n@sm-min-width: @screen-sm;\n@md-min-width: @screen-md;\n@lg-min-width: @screen-lg;\n@xl-min-width: @screen-xl;\n@xxl-min-width: @screen-xxl;\n@sm-max-width: (@md-min-width - 1px);\n@md-max-width: (@lg-min-width - 1px);\n@lg-max-width: (@xl-min-width - 1px);\n@xl-max-width: (@xxl-min-width - 1px);\n\n.sm(@rules) {\n    .smMin(@rules);\n}\n.smMin(@rules) {\n    @media (min-width: @sm-min-width) {\n        @rules();\n    }\n}\n.smMax(@rules) {\n    @media (max-width: @sm-max-width) {\n        @rules();\n    }\n}\n.smOnly(@rules) {\n    @media (min-width: @sm-min-width) and (max-width: @sm-max-width) {\n        @rules();\n    }\n}\n.md(@rules) {\n    .mdMin(@rules);\n}\n.mdMin(@rules) {\n    @media (min-width: @md-min-width) {\n        @rules();\n    }\n}\n.mdMax(@rules) {\n    @media (max-width: @md-max-width) {\n        @rules();\n    }\n}\n.mdOnly(@rules) {\n    @media (min-width: @md-min-width) and (max-width: @md-max-width) {\n        @rules();\n    }\n}\n.lg(@rules) {\n    .lgMin(@rules);\n}\n.lgMin(@rules) {\n    @media (min-width: @lg-min-width) {\n        @rules();\n    }\n}\n.lgMax(@rules) {\n    @media (max-width: @lg-max-width) {\n        @rules();\n    }\n}\n.lgOnly(@rules) {\n    @media (min-width: @lg-min-width) and (max-width: @lg-max-width) {\n        @rules();\n    }\n}\n.xl(@rules) {\n    .xlMin(@rules);\n}\n.xlMin(@rules) {\n    @media (min-width: @xl-min-width) {\n        @rules();\n    }\n}\n.xlMax(@rules) {\n    @media (max-width: @xl-max-width) {\n        @rules();\n    }\n}\n.xlOnly(@rules) {\n    @media (min-width: @xl-min-width) and (max-width: @xl-max-width) {\n        @rules();\n    }\n}\n.xxl(@rules) {\n    .xxlMin(@rules);\n}\n.xxlMin(@rules) {\n    @media (min-width: @xxl-min-width) {\n        @rules();\n    }\n}\n\n.notoBackup(@varName; @stdFont) {\n    @{varName}: @stdFont;\n\n    &:lang(ja_jp) {\n        @{varName}: @stdFont, NotoSansJP;\n    }\n    &:lang(zh_hans) {\n        @{varName}: @stdFont, NotoSansSC;\n    }\n    &:lang(zh_tw) {\n        @{varName}: @stdFont, NotoSansTC;\n    }\n}\n\n/* 2. Typography */\n.handleFontDeclarations() {\n    .notoBackup(--rsg-font-family-std, HelveticaNowText);\n    .notoBackup(--rsg-font-family-h, HelveticaNowDisplayBold);\n    .notoBackup(--gta-font-family-std, Chalet);\n    .notoBackup(--gta-font-family-h, ChaletComprime);\n    .notoBackup(--gta-font-family-badge, Pricedown);\n    .notoBackup(--rdr-font-family-std, HapnaSlabSerif);\n    .notoBackup(--rdr-font-family-h, RDRLino-Regular);\n    .notoBackup(--rdr-font-family-newswire-subtitle, HapnaSlabSerif);\n    .notoBackup(--rdr-area-font, RDRCatalogueBold);\n\n    --header-multiplier: var(--header-numerator, var(--root-font-size)) /\n        var(--root-font-size);\n    font-family: var(--font-family-std, HelveticaNowText);\n    font-weight: var(--font-weight-std, 400);\n    letter-spacing: var(--letter-spacing-std, -0.025em);\n    line-height: var(--line-height-std, 1.6);\n    font-size: calc(var(--root-font-size) * 1px);\n    -webkit-font-smoothing: antialiased;\n\n    h1.large,\n    h1,\n    h2,\n    h3,\n    h4 {\n        font-family: var(--font-family-h, HelveticaNowDisplayBold);\n        letter-spacing: var(--letter-spacing-h, -0.025em);\n    }\n    h1.large,\n    h1 {\n        font-weight: var(--font-weight-h1, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h1, var(--text-transform-h, none));\n        line-height: var(--line-height-h1, var(--line-height-h, 1.1));\n    }\n\n    h1.large {\n        font-size: calc(var(--font-size-8) * var(--header-multiplier));\n    }\n    h1 {\n        font-size: calc(var(--font-size-7) * var(--header-multiplier));\n    }\n    h2 {\n        font-size: calc(var(--font-size-6) * var(--header-multiplier));\n        font-weight: var(--font-weight-h2, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h2, var(--text-transform-h, none));\n        line-height: var(--line-height-h, 1.1);\n    }\n    h3 {\n        font-size: calc(var(--font-size-5) * var(--header-multiplier));\n        font-weight: var(--font-weight-h3, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h3, var(--text-transform-h, none));\n        line-height: var(--line-height-h, 1.1);\n\n        &[data-context='newswire-subtitle'] {\n            font-size: calc(\n                var(--font-size-5) *\n                    var(\n                        --h3-numerator-override-newswire-subtitle,\n                        var(--header-multiplier)\n                    )\n            );\n            font-weight: var(\n                --font-weight-newswire-subtitle,\n                var(--font-weight-h)\n            );\n            font-family: var(\n                --font-family-newswire-subtitle,\n                var(--font-family-h)\n            );\n            text-transform: var(--text-transform-newswire-subtitle);\n        }\n\n        .isRdr({\n            font-weight: var(--font-weight-h3, var(--font-weight-h, 400));\n        });\n    }\n\n    h4,\n    h5,\n    h6 {\n        font-size: calc(var(--font-size-4) * var(--header-multiplier));\n        line-height: var(--line-height-h, 1.1);\n    }\n}\n\n.handleColors() {\n    h1.large,\n    h1 {\n        color: var(--color-h-dynamic, var(--color-h1, var(--color-h, inherit)));\n    }\n    h2 {\n        color: var(--color-h-dynamic, var(--color-h2, var(--color-h, inherit)));\n    }\n    h3 {\n        color: var(--color-h-dynamic, var(--color-h3, var(--color-h, inherit)));\n\n        &[data-context='newswire-subtitle'] {\n            color: var(\n                --color-subtitle-dynamic,\n                var(--color-h-dynamic, var(--color-h3, var(--color-h, inherit)))\n            );\n        }\n    }\n    h4,\n    h5,\n    h6 {\n        color: var(--color-h-dynamic, var(--color-h, inherit));\n    }\n    background-color: var(--background-color, transparent);\n\n    [template='community'] {\n        --time-color: var(--body-color, #2d2d2d);\n        --breadcrumb-separator-filter-invert: invert(0);\n\n        main {\n            color: var(--color-h, #161616);\n        }\n        p {\n            color: var(--body-color, #2d2d2d);\n        }\n    }\n}\n\n/* 3. Variables */\n.resetVariables() {\n    --text-section-max-width: 640px;\n    --base-pixel-size: 12px;\n    --base-rem-size: 0.75rem;\n    --half-rem-size: calc(var(--base-rem-size) / 2);\n    --twice-rem-size: calc(var(--base-rem-size) * 2);\n    --section-margin-bottom: calc(var(--base-rem-size) * 4);\n    --header-height: 80px;\n    --breadcrumbs-height: calc(var(--base-pixel-size) * 3.5);\n    --max-width: 1920px;\n    --standard-color: #fcaf17;\n    --color-h: #ffffff;\n    --body-color: #e8e8e8;\n    --background-color: #0b0b0b;\n    --card-background-color: #000;\n    --border-color: #282828;\n    --privacy-banner-height: 0px;\n    --game-header-height: 50px;\n    --standard-grid-gap: calc(var(--base-rem-size) * 2);\n    --image-margin-bottom: inherit;\n    --image-rounding: 0px;\n    --image-rounding-static: 16px;\n    --image-rounding-static-sm: 8px;\n    --image-rounding-static-xs: 4px;\n\n    --grid-gap-static-xs: 0.5rem;\n    --grid-gap-static-sm: 1rem;\n    --grid-gap-static-md: 2rem;\n    --grid-gap-static-lg: 4rem;\n    --grid-gap-static-xl: 8rem;\n    .smMax({--grid-gap-static-lg: 2rem; --grid-gap-static-xl: 4rem;});\n\n    --max-width-static: 640px;\n    --max-width-static-md: 1088px;\n    --max-width-static-lg: 1920px;\n    --max-width-static-xl: 2560px;\n    .xxlMin({--max-width-static-md: 1440px;});\n\n    --margin-static: 0 0 2rem;\n    --h2-margin: 2rem 0 0 0;\n\n    --padding-sides: var(--grid-gap-static-lg);\n    --padding-top-bottom: var(--padding-sides);\n    --padding-static: var(--padding-sides);\n}\n\n/* 4. Utility */\n/* 4.1 Flex */\n.flex() {\n    display: flex;\n    flex-flow: column;\n}\n.horizontalCenterChildren() {\n    display: flex;\n    justify-content: center;\n}\n.verticalCenterChildren() {\n    display: flex;\n    align-items: center;\n}\n.flexCenterChildren() {\n    .horizontalCenterChildren();\n    .verticalCenterChildren();\n}\n\n/* 4.2 Grid */\n.gridMinWidth(@minWidth: 480px; @rowGap: var(--standard-grid-gap); @colGap: var(--standard-grid-gap); @autoType: 'auto-fit') {\n    display: grid;\n    grid-row-gap: @rowGap;\n    grid-column-gap: @colGap;\n    grid-template-columns: ~'repeat(@{autoType}, minmax(@{minWidth}, 1fr))';\n}\n.gridHideExtraRows(@colGap: var(--standard-grid-gap)) {\n    ::-webkit-scrollbar {\n        display: none;\n    }\n    -ms-overflow-style: none;\n    display: grid;\n    grid-auto-flow: column;\n    grid-column-gap: @colGap;\n    overflow-y: hidden;\n    scroll-snap-type: x mandatory;\n    > * {\n        scroll-snap-align: start;\n    }\n    --per-page: 4;\n    .lgMax({--per-page: 3;});\n    .mdMax({--per-page: 2;});\n    .smMax({--per-page: 1;});\n\n    grid-auto-columns: calc(\n        100% / var(--per-page) - (var(--per-page) - 1) / var(--per-page) *\n            @colGap\n    );\n}\n.gridNumCols(@numInitialItems) {\n    display: grid;\n    grid-gap: var(--standard-grid-gap);\n    .smMax({grid-template-columns: repeat(1, minmax(0px, 1fr)) ;});\n    @media screen and (min-width: @screen-sm) and (max-width: @md-max-width) {\n        grid-template-columns: repeat(2, minmax(0px, 1fr));\n    }\n    @media screen and (min-width: @screen-lg) {\n        grid-template-columns: repeat(4, minmax(0px, 1fr));\n    }\n}\n.gridNumColsSmall(@colGap: var(--padding-top-bottom); @rowGap: var(--padding-top-bottom)) {\n    display: grid;\n    grid-row-gap: @rowGap;\n    grid-column-gap: @colGap;\n    grid-template-columns: repeat(1, minmax(0px, 1fr));\n    .md({grid-template-columns: repeat(2, minmax(0px, 1fr)) ;});\n}\n\n.standardLayoutGridItem(@maxWidth: var(--max-width-static-md), @padding: var(--padding-static)) {\n    .handleMaxWidth(@maxWidth);\n    .handlePadding(@padding);\n}\n\n.handleGridStyles(@grid-gap-dynamic: var(--grid-gap-static-md)) {\n    --grid-gap-dynamic: @grid-gap-dynamic;\n    display: grid;\n    grid-template-columns: repeat(var(--grid-num-columns, 1), minmax(0px, 1fr));\n    grid-template: var(\n        --grid-template-override,\n        auto / repeat(var(--grid-num-columns, 1), minmax(0, 1fr))\n    );\n    grid-gap: var(--grid-gap-dynamic);\n    align-items: var(--grid-align-items);\n    align-content: var(--grid-align-content);\n    align-self: var(--grid-align-self);\n    justify-items: var(--grid-justify-items);\n    justify-content: var(--grid-justify-content);\n    justify-self: var(--grid-justify-self);\n}\n\n/* 4.3 Max-Width */\n.maxWidth(@padding: 0) {\n    max-width: var(--max-width);\n    width: 100%;\n    margin: 0 auto;\n    padding-left: @padding;\n    padding-right: @padding;\n}\n.maxWidthWithNormalPadding() {\n    .maxWidth(var(--padding-sides));\n}\n\n.handleMaxWidth(@max-width-default: 1000000px) {\n    width: 100%;\n    max-width: calc(\n        var(--max-width-dynamic, @max-width-default) +\n            var(--padding-dynamic, 0px) * 2\n    ) !important;\n    margin: 0 auto;\n}\n\n.breakout(@max-width-default: 100vw) {\n    @margin: calc((@max-width-default / 2) * -1);\n    width: @max-width-default;\n    max-width: @max-width-default !important;\n    position: relative;\n    left: 50%;\n    right: 50%;\n    margin-left: @margin;\n    margin-right: @margin;\n}\n\n.fullWidth() {\n    .breakout;\n}\n\n/* 4.4 Images */\n.handleAspectRatio() {\n    --aspect-ratio-default: 1;\n    .lgMin({\n        --aspect-ratio-default: 16/9;\n    });\n\n    position: relative;\n    &:before {\n        content: '';\n        height: 0;\n        width: 100%;\n        display: block;\n        padding-bottom: calc(\n            100% / calc(var(--aspect-ratio, var(--aspect-ratio-default)))\n        );\n    }\n    > * {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n    }\n}\n.setAspectRatio(@ratio) {\n    --aspect-ratio: @ratio;\n    .handleAspectRatio;\n}\n\n.handleParallaxPerspective() {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    overflow-x: hidden;\n    overflow-y: scroll;\n    perspective: var(--parallax-perspective);\n    perspective-origin: 0 0;\n}\n.handleParallaxDistance() {\n    transform: translateZ(var(--parallax-distance))\n        scale(\n            calc(\n                (var(--parallax-perspective) - var(--parallax-distance)) /\n                    var(--parallax-distance)\n            )\n        );\n}\n\n.handleImageRounding() {\n    border-radius: var(--image-rounding-dynamic, 0px);\n}\n\n/* 4.5 Padding */\n.handlePadding(@paddingSides: initial, @paddingTopBottom: initial) {\n    --padding-dynamic: @paddingSides;\n    --padding-dynamic-tb: @paddingTopBottom;\n\n    padding: var(--padding-t, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0) var(--padding-b, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0);\n}\n\n/* 4.6 Fonts */\n.loadFont(@family, @weight: 400, @style: normal, @file: @family) {\n    @font-face {\n        font-family: @family;\n        font-style: @style;\n        font-weight: @weight;\n        src: url('../fonts/@{file}.woff') format('woff');\n    }\n}\n.loadFontWoff2(@family, @weight: 400, @style: normal, @file: @family) {\n    @font-face {\n        font-family: @family;\n        font-style: @style;\n        font-weight: @weight;\n        src: url('../fonts/@{file}.woff2') format('woff2');\n    }\n}\n.fontClip(@backgroundImg) {\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    @backgroundImg();\n}\n\n/* 4.7 Games */\n.gta(@rules) {\n    [data-game^='gta'] {\n        @rules();\n    }\n}\n\n.isGta(@rules) {\n    [data-game^='gta'] & {\n        @rules();\n    }\n}\n\n.rdr(@rules) {\n    [data-game='rdo'],\n    [data-game^='rdr'] {\n        @rules();\n    }\n}\n\n.isRdr(@rules) {\n    [data-game='rdo'] &,\n    [data-game^='rdr'] & {\n        @rules();\n    }\n}\n\n/* 4.8 Tina */\n.tinaTextField() {\n    padding: var(--tina-padding-small);\n    border-radius: var(--tina-radius-small);\n    background: var(--tina-color-grey-0);\n    color: var(--tina-color-grey-10);\n    background-color: var(--tina-color-grey-0);\n    border: 1px solid var(--tina-color-grey-2);\n    box-shadow: 0 0 0 2px transparent;\n    margin-bottom: 14px;\n}\n\n/* 4.9 Hacks */\n.safariBorderRadiusOverflowFix() {\n    // https://stackoverflow.com/questions/49066011/overflow-hidden-with-border-radius-not-working-on-safari\n    -webkit-mask-image: -webkit-radial-gradient(white, black);\n}\n\n.forceGpuRendering() {\n    // https://web.dev/animations-guide/#force\n    transform: translateZ(0);\n}\n\n/* 5. Presentational */\n@locales: en_us, fr_fr, de_de, es_es, es_mx, it_it, pt_br, pl_pl, ru_ru, ja_jp,\n    ko_kr, zh_tw, zh_hans;\n\n.placeholder(@rules) {\n    &::-webkit-input-placeholder {\n        @rules();\n    }\n    &:-moz-placeholder {\n        @rules();\n    }\n    &::-moz-placeholder {\n        @rules();\n    }\n    &:-ms-input-placeholder {\n        @rules();\n    }\n}\n\n.bgImg() {\n    background-size: cover;\n    background-position: center center;\n    background-repeat: no-repeat;\n}\n\n.themeDark() {\n    color: #e8e8e8;\n    --tag-color: #e8e8e8;\n}\n\n.outbound() {\n    content: '';\n    display: inline-block;\n    background-size: 100%;\n    background-repeat: no-repeat;\n    background-position: 0% 50%;\n    vertical-align: baseline;\n    margin-left: var(--grid-gap-static-xs);\n    width: 1rem;\n    height: 1rem;\n    background-image: data-uri('../img/outbound.svg');\n}\n\n.blurryBg() {\n    transition: filter 0.8s;\n    filter: blur(var(--blur-because-in-bg, 0px));\n}\n\n.fancyLink() {\n    position: relative;\n    background: transparent;\n    padding: 0;\n    z-index: 1;\n    @media (min-width: @screen-sm) {\n        transition: all 0.2s ease;\n        &:before {\n            content: '';\n            display: block;\n            position: absolute;\n            bottom: 0;\n            left: -0.1rem;\n            width: calc(100% + 0.2rem);\n            height: 2px;\n            background: var(--body-color);\n            transition: all 0.2s ease;\n            z-index: -1;\n            border-radius: 0.25rem;\n        }\n        &:hover {\n            color: #161616;\n\n            &:before {\n                left: -0.25rem;\n                width: calc(100% + 0.5rem);\n                height: 100%;\n            }\n        }\n    }\n    img {\n        display: block;\n    }\n}\n.stdHover() {\n    transition:\n        color 0.2s ease,\n        opacity 0.2s ease;\n    &:hover {\n        color: var(--standard-color);\n        opacity: 1;\n    }\n}\n.stdIconHover() {\n    &:hover {\n        filter: brightness(0) saturate(100%) invert(76%) sepia(15%)\n            saturate(5173%) hue-rotate(348deg) brightness(105%) contrast(98%);\n    }\n}\n.card() {\n    .handleImageRounding;\n    --image-rounding-dynamic: var(--image-rounding-static-sm);\n    background: var(--card-background-color);\n    overflow: hidden;\n    display: flex;\n    flex-flow: column;\n    transition: transform 0.2s ease;\n    border: 1px solid var(--border-color);\n    .info {\n        .handleGridStyles;\n        --grid-gap-dynamic: var(--grid-gap-static-xs);\n        padding: 2rem 1.5rem;\n        .title {\n            --line-height-h: 1.3;\n            color: var(--color-h);\n        }\n    }\n}\n\n.cardHover() {\n    transition:\n        transform 0.3s cubic-bezier(0, 0, 0.5, 1),\n        box-shadow 0.3s cubic-bezier(0, 0, 0.5, 1);\n    box-shadow: 0px 0px 40px -25px rgba(0, 0, 0, 0);\n\n    &:hover {\n        transform: scale(1.025);\n        box-shadow: 0px 30px 40px -25px rgba(0, 0, 0, 1);\n    }\n}\n\n.cardSecondary() {\n    .card();\n    .info {\n        padding: 1.5rem;\n    }\n    .title {\n        font-size: var(--font-size-3);\n        font-weight: 400;\n    }\n}\n\n.cardTertiary() {\n    .cardSecondary();\n    --image-rounding-dynamic: 0;\n    --card-background-color: transparent;\n    grid-gap: var(--grid-gap-static-sm);\n    overflow: unset;\n    border: none;\n    .info {\n        padding: 0;\n    }\n    .img {\n        .handleImageRounding;\n        --image-rounding-dynamic: var(--image-rounding-static-sm);\n    }\n}\n\n.standardPage() {\n    .maxWidthWithNormalPadding;\n    padding-top: var(--padding-top-bottom);\n    padding-bottom: var(--padding-top-bottom);\n}\n\n.dropdownThing(@defaultDeg: 0deg; @openDeg: 180deg) {\n    position: relative;\n    padding-right: calc(var(--grid-gap-static-xs) + 24px);\n    .dropdownCaret(yellow; @defaultDeg; @openDeg);\n}\n.dropdownCaret(@color; @defaultDeg: 0deg; @openDeg: 180deg) {\n    &:after {\n        display: inline-block;\n        content: '';\n        position: absolute;\n        top: 0;\n        right: 0;\n        @img: '../img/dropdown-@{color}.svg';\n        background-image: data-uri(@img);\n        background-repeat: no-repeat;\n        width: image-width(@img);\n        height: 100%;\n        background-position: center;\n        background-size: 100%;\n        transform: rotate(@defaultDeg);\n        transition: transform 0.3s;\n        .open& {\n            transform: rotate(@openDeg);\n        }\n    }\n}\n\n.sectionHeader() {\n    margin: 0 0 1.5rem;\n    font-size: var(--font-size-5);\n    font-family: var(--font-family-h);\n    font-weight: var(--font-weight-h);\n    --line-height-h: 1.3;\n\n    .xlMin ({\n        font-size: var(--font-size-6);\n    });;\n}\n.sectionHeaderSmall() {\n    .sectionHeader;\n    font-size: var(--font-size-4);\n\n    .xlMin ({\n        font-size: var(--font-size-5);\n    });;\n}\n\n.tag() {\n    color: var(--tag-color, var(--body-color));\n    font-weight: 700;\n    font-size: var(--font-size-2);\n    line-height: 1.6;\n}\n\n.date() {\n    .tag;\n    font-weight: 400;\n    opacity: 0.65;\n}\n.animationFadeInUp() {\n    :global {\n        animation: globalFadeInUp 0.75s;\n        animation-play-state: paused;\n    }\n}\n.animationPaused() {\n    animation-play-state: paused;\n}\n.animationRunning() {\n    animation-play-state: running;\n}\n\n.button() {\n    font-weight: 700;\n    align-self: center;\n    display: inline-block;\n    text-transform: uppercase;\n    background: transparent;\n    border: 1px solid var(--color-h);\n    padding: 1rem 3rem;\n    color: inherit;\n    cursor: pointer;\n    border-radius: 0.25rem;\n    color: var(--color-h);\n    line-height: 100%;\n    transition: all 0.2s ease;\n    &:focus,\n    &:hover {\n        background: var(--standard-color);\n        border-color: var(--standard-color);\n        color: #161616;\n    }\n    &.secondary {\n        .fancyLink;\n        outline: none;\n        border: none;\n        text-transform: none;\n        font-weight: 400;\n        line-height: unset;\n        .smMin ({\n            &:before {\n                background: var(--standard-color);\n                height:4px;\n            }\n            &:focus,\n            &:hover {\n                &:before {\n                    left: -0.5rem;\n                    width: calc(100% + 1rem);\n                    height: 100%;\n                }\n            }\n         });;\n    }\n    &[disabled] {\n        opacity: 0.5;\n    }\n}\n\n.expandToEdges() {\n    margin-top: calc(var(--padding-top-bottom) * -1);\n    margin-left: calc(var(--padding-sides) * -1);\n    width: 100vw;\n    width: calc(100% + calc(var(--padding-sides) * 2));\n}\n\n.shadow(@boxShadow: 0 10px 30px rgba(0, 0, 0, 0.5)) {\n    // border: 1px solid rgba(0, 0, 0, 0.15);\n    box-shadow: @boxShadow;\n}\n.shadowTop() {\n    box-shadow: -3px -3px 6px 0 rgba(0, 0, 0, 0.2);\n}\n\n.aspect-ratio(@width, @height, @selector: div, @pre: ~'') {\n    @supports not (aspect-ratio: @width / @height) {\n        position: relative;\n        &:before {\n            display: block;\n            content: '';\n            width: 100%;\n            padding-top: calc((@height / @width) * 100%);\n        }\n        > @{pre}@{selector} {\n            position: absolute;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            width: 100% !important;\n            height: 100% !important;\n        }\n    }\n\n    @supports (aspect-ratio: @width / @height) {\n        @{pre}@{selector} {\n            aspect-ratio: @width / @height !important;\n            width: 100% !important;\n            height: auto !important;\n        }\n    }\n}\n.unset-aspect-ratio(@selector, @pre: ~'') {\n    @supports not (aspect-ratio: 1/1) {\n        position: unset;\n        &:before {\n            display: none;\n        }\n        > @{pre}@{selector} {\n            position: unset;\n            width: 100% !important;\n            height: unset !important;\n        }\n    }\n\n    @supports (aspect-ratio: 1/1) {\n        @{pre}@{selector} {\n            aspect-ratio: unset !important;\n        }\n    }\n}\n\n.rockstarTypography() {\n    --font-family-std: NeueHelveticaPaneuropean, sans-serif;\n    --leter-spacing-std: 0;\n\n    font-size: var(--font-size-2);\n    font-family: var(--font-family-std);\n    letter-spacing: var(--leter-spacing-std);\n\n    button {\n        letter-spacing: var(--leter-spacing-std);\n    }\n}\n\n.setNodeFontSizing() {\n    // TODO audit this. .5rem is very small.\n    --font-size-1: 0.75rem;\n\n    --font-size-2: 0.75rem;\n    --font-size-3: 1rem;\n    --font-size-4: 1.25rem;\n    --font-size-5: 1.5rem;\n    --font-size-6: 2rem;\n    --font-size-7: 2.5rem;\n    --font-size-8: 3rem;\n    --font-size-9: 4rem;\n    --font-size-10: 5rem;\n}\n\n.setRootFontSizing() {\n    .sm({--root-font-size: 16;});\n    .md({--root-font-size: 18;});\n    .lg({--root-font-size: 20;});\n    .xl({--root-font-size: 22;});\n}\n\n.button-text () {\n    font-size: var(--font-size-4);\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-sm);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    text-transform: uppercase;\n}\n\n.button-text-sm () {\n    .button-text;\n    font-size: var(--font-size-3);\n}\n\n.button-text-md () {\n    .button-text;\n    font-size: var(--font-size-4);\n    padding: 0 var(--padding-md);\n}\n\n.button-text-lg () {\n    .button-text;\n    font-size: var(--font-size-5);\n    padding: 0 var(--padding-lg);\n}\n\n.button-text-xl () {\n    .button-text;\n    font-size: var(--font-size-7);\n    padding: 0 var(--padding-xl);\n}\n\n.cta-button() {\n    @import '../less/gen9-vars';\n\n    --button-text-color-hover: var(--white-100);\n\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    gap: var(--grid-gap-xs, 0.5rem);\n\n    background: var(\n        --button-background-color,\n        var(--black-65, hsla(0, 0%, 7%, 0.65))\n    );\n    border: 1px solid var(--white-100, #fff);\n    border-radius: var(--border-radius-sm, 4px);\n    color: var(--button-text-color, var(--white-100));\n    cursor: pointer;\n    padding: 0 var(--padding-sm);\n\n    width: 100%;\n    height: var(--button-height-3, 3rem);\n\n    transition: all 0.3s ease-in-out;\n\n    &[data-brand='reddeadredemption'],\n    [data-brand='reddeadredemption'] & {\n        --accent-color: #cc0000;\n        --font-family-h: RDRUltra;\n\n        :lang(pl_pl) {\n            --font-family-h: RDRUltra, NeueHelveticaPaneuropean;\n        }\n    }\n\n    &[data-brand='bully'],\n    [data-brand='bully'] & {\n        --accent-color: #f8ad00;\n        --font-family-h: HelveticaNowDisplayBold;\n        --button-background-color: var(--white-100);\n        --button-background-color-hover: var(--accent-color);\n        --button-text-color: var(--black-100);\n        --button-text-color-hover: var(--black-100);\n\n        backdrop-filter: blur(25px);\n        padding: 0 var(--padding-md, 32px);\n    }\n\n    img {\n        height: 1rem;\n        width: auto;\n    }\n\n    .label {\n        .button-text();\n        display: flex;\n        flex-shrink: 0;\n    }\n\n    &.primary {\n        color: var(--black-100);\n        background-color: var(--white-100);\n    }\n\n    &:hover {\n        border-color: var(--accent-color, var(--btn-active-color));\n        background-color: var(--accent-color, var(--btn-active-color));\n        color: var(--button-text-color-hover, var(--btn-active-color));\n\n        &.primary {\n            color: var(--button-text-color-hover, var(--white-100));\n        }\n    }\n\n    @media (min-width: 1280px) {\n        padding: 0 var(--padding-md);\n    }\n\n    @media (min-width: 768px) and (max-width: 1539px) {\n        height: 2.5rem;\n\n        img {\n            height: 1rem;\n        }\n\n        .label {\n            .button-text-sm();\n        }\n    }\n}\n"],
        sourceRoot: ""
      }]), l.locals = {
        pillBtn: "rockstargames-sites-rockstargamesc552797e8c2ab4b813175e9fa1b9ef74",
        selected: "rockstargames-sites-rockstargamesf57b637a2309d10d2e8290ebaf72a409",
        companyInfo: "rockstargames-sites-rockstargamese9251e0589829674fbf2fb8bd82f5da4",
        top: "rockstargames-sites-rockstargamesd0180d1081dba40a242a3660beeabb33",
        content: "rockstargames-sites-rockstargamesc3bbdddf0ebf23c57a14b8c9deee1d2b",
        nav: "rockstargames-sites-rockstargamescdfa81eab2ffa961d134c6f3962d9df2",
        us: "rockstargames-sites-rockstargamesb577d27e2379d02659055abbd6b666db",
        br: "rockstargames-sites-rockstargamesd4eba5ddfaaa55b095a205d939438113",
        cz: "rockstargames-sites-rockstargamesc45a04b51ded1c14905f1a7e0f1e67ec",
        de: "rockstargames-sites-rockstargamesc496427e453c5548969da90086b25ea6",
        es: "rockstargames-sites-rockstargamesb775f7b18b8ec09693ba5689001a0b6f",
        fr: "rockstargames-sites-rockstargamesc9308ca04e0c61704e1283f9190f0e9d",
        it: "rockstargames-sites-rockstargamesa4d36f86d484e6b8c2744c0ca55dd2bb",
        jp: "rockstargames-sites-rockstargamesb4e5e281b6799125f268596cf0cb08ca",
        kr: "rockstargames-sites-rockstargamesfa5fe16ccc02f341ab537dd0c36168b3",
        mx: "rockstargames-sites-rockstargamesfb82650022fe0adab1844cf27f186ea2",
        nl: "rockstargames-sites-rockstargamese492e4ea7d4fb13bd28f14101fb55ea4",
        pl: "rockstargames-sites-rockstargamesdc65d9c7dc3484c15c7368c4c8d57305",
        ru: "rockstargames-sites-rockstargamesc8848a20bec483fd18e054491bff9d80",
        sa: "rockstargames-sites-rockstargamesf6a4c584a3c58d3bb39947f0f80e37b3",
        tw: "rockstargames-sites-rockstargamesceb5c9a7eacc6d559d8ba67e78faf262",
        zh: "rockstargames-sites-rockstargamesedb6fced472a5e478fd76b932e5536f1"
      };
      const m = l
    },
    43053: n => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "CompanyInfo"
          },
          variableDefinitions: [{
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
                value: "jsonLocale"
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
                value: "jsonType"
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
                value: "metaUrl"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String"
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
                value: "companyInfo"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "type"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "jsonType"
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
                    value: "jsonLocale"
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
                    value: "type"
                  },
                  arguments: [],
                  directives: []
                }, {
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
                    value: "content"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }, {
              kind: "Field",
              alias: {
                kind: "Name",
                value: "meta"
              },
              name: {
                kind: "Name",
                value: "metaUrl"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "url"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "metaUrl"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "domain"
                },
                value: {
                  kind: "StringValue",
                  value: "www",
                  block: !1
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
                    value: "title"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 308
        }
      };

      function e(n, a) {
        if ("FragmentSpread" === n.kind) a.add(n.name.value);
        else if ("VariableDefinition" === n.kind) {
          var t = n.type;
          "NamedType" === t.kind && a.add(t.name.value)
        }
        n.selectionSet && n.selectionSet.selections.forEach((function(n) {
          e(n, a)
        })), n.variableDefinitions && n.variableDefinitions.forEach((function(n) {
          e(n, a)
        })), n.definitions && n.definitions.forEach((function(n) {
          e(n, a)
        }))
      }
      a.loc.source = {
        body: 'query CompanyInfo(\n    $locale: String!\n    $jsonLocale: String!\n    $jsonType: String!\n    $metaUrl: String\n) {\n    companyInfo(type: $jsonType, locale: $jsonLocale) {\n        type\n        locale\n        content\n    }\n    meta: metaUrl(url: $metaUrl, domain: "www", locale: $locale) {\n        title\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var t = {};

      function r(n, a) {
        for (var e = 0; e < n.definitions.length; e++) {
          var t = n.definitions[e];
          if (t.name && t.name.value == a) return t
        }
      }
      a.definitions.forEach((function(n) {
        if (n.name) {
          var a = new Set;
          e(n, a), t[n.name.value] = a
        }
      })), n.exports = a, n.exports.CompanyInfo = function(n, a) {
        var e = {
          kind: n.kind,
          definitions: [r(n, a)]
        };
        n.hasOwnProperty("loc") && (e.loc = n.loc);
        var i = t[a] || new Set,
          o = new Set,
          s = new Set;
        for (i.forEach((function(n) {
            s.add(n)
          })); s.size > 0;) {
          var d = s;
          s = new Set, d.forEach((function(n) {
            o.has(n) || (o.add(n), (t[n] || new Set).forEach((function(n) {
              s.add(n)
            })))
          }))
        }
        return o.forEach((function(a) {
          var t = r(n, a);
          t && e.definitions.push(t)
        })), e
      }(a, "CompanyInfo")
    },
    82268: n => {
      "use strict";
      n.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAD+CAYAAAAzvYWTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA25pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjZWNkMGI0OS1lNTExLTk5NGItYjFjZS1kNzkxMTNlYTcyZjMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjJBM0M3RjRGNTUzMTFFNzlDQkRBQTZCQUY5QjU5QjUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjJBM0M3RjNGNTUzMTFFNzlDQkRBQTZCQUY5QjU5QjUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MjNGMUE5REQ1QjFEMTFFNEJEMTFGNkIzNjM2Q0Y0M0QiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MjNGMUE5REU1QjFEMTFFNEJEMTFGNkIzNjM2Q0Y0M0QiLz4gPC9yZGY6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"
    }
  }
]);