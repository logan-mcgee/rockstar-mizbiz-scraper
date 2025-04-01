! function() {
  try {
    var n = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      e = (new Error).stack;
    e && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[e] = "f595ef6e-be1e-4b97-91d3-41e7f3610eb9", n._sentryDebugIdIdentifier = "sentry-dbid-f595ef6e-be1e-4b97-91d3-41e7f3610eb9")
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
  [4783], {
    84783: (n, e, a) => {
      "use strict";
      a.r(e), a.d(e, {
        default: () => G
      });
      var i = a(62229),
        t = a(9623),
        r = a(47587),
        s = a(53178),
        o = a.n(s),
        d = a(27835),
        l = a.n(d),
        c = a(17529),
        g = a.n(c),
        m = a(72162),
        p = a.n(m),
        h = a(82510),
        A = a.n(h),
        f = a(90675),
        v = a.n(f),
        u = a(96817),
        b = {};
      b.styleTagTransform = v(), b.setAttributes = p(), b.insert = g().bind(null, "head"), b.domAPI = l(), b.insertStyleElement = A(), o()(u.A, b);
      const k = u.A && u.A.locals ? u.A.locals : void 0;
      var x = a(73855);
      const w = n => {
          let {
            children: e,
            data: a,
            onPageUpdate: i,
            page: t,
            className: r
          } = n;
          return (0, x.jsx)("a", {
            href: "#",
            className: t === a.page ? `${k.active} ${r??""}` : "",
            onClick: n => {
              n.preventDefault(), i(t)
            },
            children: e
          })
        },
        y = n => {
          let {
            data: e,
            onPageUpdate: a,
            className: i
          } = n;
          if (1 === e.pageCount) return null;
          const t = new Array(Math.min(e.pageCount, 8)),
            r = Math.max(e.pageCount - 8, 1),
            s = Math.max(2, e.page - 4),
            o = Array.from(t, ((n, e) => e + Math.min(r, s)));
          return (0, x.jsxs)("div", {
            className: `${k.paging} ${i??""}`,
            children: [e.pageCount > 8 ? (0, x.jsxs)(x.Fragment, {
              children: [(0, x.jsx)(w, {
                data: e,
                onPageUpdate: a,
                page: 1,
                children: "1"
              }), 2 !== o[0] ? (0, x.jsx)("div", {
                className: k.spacer,
                children: "..."
              }) : ""]
            }) : "", o.map((n => (0, x.jsx)(w, {
              data: e,
              onPageUpdate: a,
              page: n,
              className: i,
              children: n
            }, n))), e.pageCount > 8 ? (0, x.jsxs)(x.Fragment, {
              children: [o.slice(-1)[0] + 1 < e.pageCount ? (0, x.jsx)("div", {
                className: k.spacer,
                children: "..."
              }) : "", (0, x.jsx)(w, {
                data: e,
                onPageUpdate: a,
                page: e.pageCount,
                children: e.pageCount
              })]
            }) : ""]
          })
        };
      var C = a(38438),
        N = a(27057),
        B = a(55981),
        z = a(95966),
        S = a(70241),
        F = a(19083),
        D = a(98440),
        E = {};
      E.styleTagTransform = v(), E.setAttributes = p(), E.insert = g().bind(null, "head"), E.domAPI = l(), E.insertStyleElement = A(), o()(D.A, E);
      const _ = D.A && D.A.locals ? D.A.locals : void 0,
        I = n => {
          let {
            loading: e,
            searchResponse: a,
            activeTab: i
          } = n;
          const [s, o] = (0, t.useSearchParams)();
          let d;
          switch (i) {
            case "posts":
              d = a.posts.results.map((n => (0, x.jsx)(r.A, {
                post: n,
                noSpecialOrder: !0
              }, n.id)));
              break;
            case "games":
              d = a.games.results.map((n => (0, x.jsx)(B.N, {
                game: n
              }, n.id)));
              break;
            case "videos":
              d = a.videos.results.map((n => (0, x.jsx)(N.N, {
                video: n
              }, n.id)));
              break;
            default:
              d = null
          }
          return (0, x.jsxs)(x.Fragment, {
            children: [e ? "" : (0, x.jsx)("section", {
              className: _.results,
              children: (0, x.jsx)("div", {
                className: _.items,
                children: d
              })
            }), a[i]?.paging ? (0, x.jsx)("section", {
              className: _.paging,
              children: (0, x.jsx)(y, {
                data: a[i].paging,
                onPageUpdate: n => {
                  o({
                    ...Object.fromEntries([...s]),
                    page: n
                  }), window.scrollTo(0, 0)
                }
              })
            }) : ""]
          })
        },
        G = (0, z.withTranslations)((n => {
          let {
            t: e
          } = n;
          const {
            state: {
              search: a
            },
            setSearch: t,
            setTitle: r
          } = (0, S.b)(), s = (0, z.useQueryParams)(), [o, d] = (0, i.useState)(null), [l, c] = (0, i.useState)({}), [g, m] = (0, i.useState)(s.get("tab") ?? "games"), {
            data: p = {},
            loading: h
          } = (0, z.useQuery)(F.SearchData, {
            variables: l,
            skip: !Object.entries(l).length || !l.q,
            autoSetLoading: !0
          });
          return (0, i.useEffect)((() => {
            const n = {
              q: s.get("q"),
              page: Number(s.get("page") ?? 1),
              withGames: !0,
              withPosts: !0,
              withVideos: !0
            };
            c(n), t(s.get("q"))
          }), [s.get("q"), s.get("page"), s.get("tab"), g]), (0, i.useEffect)((() => {
            const n = Object.entries(p).find((n => {
              let [, e] = n;
              return e?.paging?.count > 0
            }))?.[0];
            m(s.get("tab") ?? n ?? "games")
          }), [p, s.get("tab")]), (0, i.useEffect)((() => {
            void 0 !== p?.games?.paging?.count && (d((p?.games?.paging?.count ?? 0) + (p?.videos?.paging?.count ?? 0) + (p?.posts?.paging?.count ?? 0)), r(p?.meta?.title.replace("%s", a)))
          }), [p, g]), Object.entries(l).length ? l.q ? null === o || h ? null : (0, x.jsxs)("div", {
            className: _.searchIndex,
            children: [(0, x.jsx)("section", {
              className: _.top,
              children: (0, x.jsxs)("div", {
                className: _.text,
                children: [(0, x.jsxs)("h4", {
                  children: [h ? e("search-active") : "", h || o ? h ? "" : e("Search results for:") : e("search-over-empty")]
                }), (0, x.jsx)("h1", {
                  children: e("%s").replace("%s", s.get("q"))
                })]
              })
            }), !h && o ? (0, x.jsx)(I, {
              searchResponse: p,
              searchTerm: a,
              activeTab: g,
              t: e
            }) : ""]
          }) : (0, x.jsx)("div", {
            className: _.searchIndex,
            children: (0, x.jsxs)("section", {
              className: _.top,
              children: [(0, x.jsx)("h3", {
                children: e("Search")
              }), (0, x.jsx)(C.A, {})]
            })
          }) : null
        }))
    },
    96817: (n, e, a) => {
      "use strict";
      a.d(e, {
        A: () => o
      });
      var i = a(42587),
        t = a.n(i),
        r = a(15081),
        s = a.n(r)()(t());
      s.push([n.id, ".rockstargames-sites-rockstargamese480f25872ae2a8b3fcd1e492d838301{grid-gap:.3rem;background:inherit;display:grid;grid-auto-flow:column;justify-content:center;padding:.5rem}.rockstargames-sites-rockstargamese480f25872ae2a8b3fcd1e492d838301 a{color:#fff!important;opacity:.75}.rockstargames-sites-rockstargamese480f25872ae2a8b3fcd1e492d838301 a.rockstargames-sites-rockstargamesb577d5726806ec872ecdb8a46905734f{font-weight:700;opacity:1}.rockstargames-sites-rockstargamese480f25872ae2a8b3fcd1e492d838301 .rockstargames-sites-rockstargamesb013d77f453d7053bbcf06f173ff326c{color:#fff}", "", {
        version: 3,
        sources: ["webpack://./../../buildtime/components/src/Paging/index.less"],
        names: [],
        mappings: "AAAA,mEAII,cAAA,CAHA,kBAAA,CAEA,YAAA,CAEA,qBAAA,CACA,sBAAA,CAJA,aAKJ,CAPA,qEAQQ,oBAAA,CACA,WAER,CADQ,uIAEI,eAAA,CADA,SAIZ,CAfA,sIAgBQ,UAER",
        sourcesContent: [".paging {\n    background: inherit;\n    padding: 0.5rem;\n    display: grid;\n    grid-gap: 0.3rem;\n    grid-auto-flow: column;\n    justify-content: center;\n    a {\n        color: white !important;\n        opacity: 0.75;\n        &.active {\n            opacity: 1;\n            font-weight: 700;\n        }\n    }\n    .spacer {\n        color: white;\n    }\n}\n"],
        sourceRoot: ""
      }]), s.locals = {
        paging: "rockstargames-sites-rockstargamese480f25872ae2a8b3fcd1e492d838301",
        active: "rockstargames-sites-rockstargamesb577d5726806ec872ecdb8a46905734f",
        spacer: "rockstargames-sites-rockstargamesb013d77f453d7053bbcf06f173ff326c"
      };
      const o = s
    },
    98440: (n, e, a) => {
      "use strict";
      a.d(e, {
        A: () => m
      });
      var i = a(42587),
        t = a.n(i),
        r = a(15081),
        s = a.n(r),
        o = a(79908),
        d = a.n(o),
        l = new URL(a(52695), a.b),
        c = s()(t()),
        g = d()(l);
      c.push([n.id, `.rockstargames-sites-rockstargamesa610762ada9e08f6dad4af3d1631cb85{align-items:center;background:var(--white-15);border:none;border-radius:100px;color:var(--white-100);cursor:pointer;display:flex;font-family:var(--font-family-body);font-size:20px;font-style:normal;font-weight:700;justify-content:center;line-height:var(--rem-125);min-width:var(--rem-6);padding:var(--padding-xs) var(--padding-sm);text-align:center;transition:background-color .3s ease-in-out}.rockstargames-sites-rockstargamesa610762ada9e08f6dad4af3d1631cb85 img{height:var(--nav-icon-size);margin-left:var(--grid-gap-xs);transition:filter .3s ease-in-out;width:var(--nav-icon-size)}.rockstargames-sites-rockstargamesa610762ada9e08f6dad4af3d1631cb85:focus,.rockstargames-sites-rockstargamesa610762ada9e08f6dad4af3d1631cb85:hover{background-color:var(--white-40);outline:none}.rockstargames-sites-rockstargamesa610762ada9e08f6dad4af3d1631cb85.rockstargames-sites-rockstargamesca9ca9fb80e0273eb68a5a502f955ecf{background:var(--white-100);color:var(--black-200)}.rockstargames-sites-rockstargamesa610762ada9e08f6dad4af3d1631cb85.rockstargames-sites-rockstargamesca9ca9fb80e0273eb68a5a502f955ecf img{filter:invert()}.rockstargames-sites-rockstargamesc05a5532b55c62d69d60e4937099d7ee,.rockstargames-sites-rockstargamesfd5351e921b874473f5256931420f405{margin:0 auto;max-width:var(--max-width);padding:var(--padding-top-bottom) var(--padding-sides);width:100%}.rockstargames-sites-rockstargamesf0dd8d4498e6c2c72fa698ba6fa3ad15{grid-row-gap:var(--standard-grid-gap);grid-column-gap:var(--standard-grid-gap);display:grid;grid-template-columns:repeat(auto-fill,minmax(330px,1fr))}section.rockstargames-sites-rockstargamescfd48749550b301dcc13f82e4b478494{grid-gap:var(--grid-gap-static-md);display:grid;margin:0 auto var(--grid-gap-static-md);max-width:var(--max-width-static);text-align:center}section.rockstargames-sites-rockstargamescfd48749550b301dcc13f82e4b478494 .rockstargames-sites-rockstargamese054deca2519c2462fc96246266a5fbc{grid-gap:var(--grid-gap-static-sm);display:grid}section.rockstargames-sites-rockstargamescfd48749550b301dcc13f82e4b478494 h4{opacity:.65}section.rockstargames-sites-rockstargamesf97aebb39365d747d6fafb73cd45c602,section.rockstargames-sites-rockstargamescfd48749550b301dcc13f82e4b478494 h1{text-transform:capitalize}section.rockstargames-sites-rockstargamesf97aebb39365d747d6fafb73cd45c602{font-size:var(--font-size-3);font-weight:700;margin-bottom:var(--grid-gap-static-lg);text-align:center}section.rockstargames-sites-rockstargamesf97aebb39365d747d6fafb73cd45c602 a:not(:last-child){margin-right:var(--base-rem-size)}section.rockstargames-sites-rockstargamesf97aebb39365d747d6fafb73cd45c602 a span{font-size:80%;font-weight:400;vertical-align:top}section.rockstargames-sites-rockstargamesf97aebb39365d747d6fafb73cd45c602 a.rockstargames-sites-rockstargamesccce2894c75508dc18668efd3217773c{color:var(--standard-color)}section.rockstargames-sites-rockstargamesa181f90d52be1b1d67d871d5df02c04e{text-align:center}section.rockstargames-sites-rockstargamesa181f90d52be1b1d67d871d5df02c04e:empty{display:none}section.rockstargames-sites-rockstargamesfd11aba08f1048b65f7622be1a6b951d{margin-bottom:var(--section-margin-bottom)}.rockstargames-sites-rockstargamesc05a5532b55c62d69d60e4937099d7ee{--font-family-body:"Chalet";--font-family-h:"ChaletComprime";--font-weight-regular:400;--font-weight-bold:700;--letter-spacing-body:0;--letter-spacing-h:0;--line-height-sm:1;--line-height-md:1.1;--line-height-lg:1.6;--black-200:#000;--black-100:#121212;--black-65:hsla(0,0%,7%,.65);--black-40:hsla(0,0%,7%,.4);--black-15:hsla(0,0%,7%,.15);--text-dark:#2d2d2d;--border-color:#2d2d2d;--white-100:#fff;--white-65:hsla(0,0%,100%,.65);--white-40:hsla(0,0%,100%,.4);--white-15:hsla(0,0%,100%,.15);--text-light:#e8e8e8;--focusring-blue:blue;--red:#e03232;--circoloco-red:#eb1818;--rockstar-gold:#fcaf17;--playstation-blue:#00439c;--microsoft-green:#387a26;--pc-legacy:#b2b2b2;--pc-enhanced:#beb279;--color-h:var(--white-100);--color-body:var(--text-light);--green-light:#c1f7bd;--green-dark:#81da85;--scroll-thumb-color:#7d7d7d;--scroll-track-color:transparent;--max-width-sm:640px;--max-width-md:1088px;--max-width-lg:1920px;--max-width-xl:2560px;--spacing-xxs:0.25rem;--spacing-xs:0.5rem;--spacing-sm:1rem;--spacing-md:2rem;--spacing-lg:4rem;--spacing-xl:8rem;--grid-gap-xxs:var(--spacing-xxs);--grid-gap-xs:var(--spacing-xs);--grid-gap-sm:var(--spacing-sm);--grid-gap-md:var(--spacing-md);--grid-gap-lg:var(--spacing-lg);--grid-gap-xl:var(--spacing-xl);--padding-xxs:var(--spacing-xxs);--padding-xs:var(--spacing-xs);--padding-sm:var(--spacing-sm);--padding-md:var(--spacing-md);--padding-lg:var(--spacing-lg);--padding-xl:var(--spacing-xl);--margin-xxs:var(--spacing-xxs);--margin-xs:var(--spacing-xs);--margin-sm:var(--spacing-sm);--margin-md:var(--spacing-md);--margin-lg:var(--spacing-lg);--margin-xl:var(--spacing-xl);--border-radius-xs:2px;--border-radius-sm:4px;--border-radius-md:8px;--border-radius-lg:16px;--gradient-overlay-bottom:linear-gradient(180.08deg,transparent 25%,rgba(0,0,0,.5) 65%,rgba(0,0,0,.6));--gradient-overlay-right:linear-gradient(270deg,rgba(0,0,0,.9),transparent);--promo-banner-z-index:11500;--font-family-h:HelveticaNowText;grid-gap:1.25rem;display:grid;margin-top:6.25rem;padding-top:3rem}@media (min-width:2560px){.rockstargames-sites-rockstargamesc05a5532b55c62d69d60e4937099d7ee{--max-width-md:1440px}}@media (max-width:767px){.rockstargames-sites-rockstargamesc05a5532b55c62d69d60e4937099d7ee{--spacing-lg:2rem;--spacing-xl:4rem}}@media screen and (min-width:1024px){.rockstargames-sites-rockstargamesc05a5532b55c62d69d60e4937099d7ee{--font-family-h:HelveticaNowDisplayBold;grid-gap:var(--grid-gap-md);margin-top:0}}.rockstargames-sites-rockstargamesc05a5532b55c62d69d60e4937099d7ee section.rockstargames-sites-rockstargamesfceac967d291cff35f4f02b6470aaeaf{align-items:flex-start;display:flex;flex-direction:row}.rockstargames-sites-rockstargamesc05a5532b55c62d69d60e4937099d7ee section.rockstargames-sites-rockstargamesfceac967d291cff35f4f02b6470aaeaf h4{color:var(--white-65,hsla(0,0%,100%,.65))!important;font-weight:400}.rockstargames-sites-rockstargamesc05a5532b55c62d69d60e4937099d7ee section.rockstargames-sites-rockstargamesfceac967d291cff35f4f02b6470aaeaf span.rockstargames-sites-rockstargamesabd912c03567aedfd3da3beefa78746d{text-transform:capitalize}.rockstargames-sites-rockstargamesc05a5532b55c62d69d60e4937099d7ee section.rockstargames-sites-rockstargamesfceac967d291cff35f4f02b6470aaeaf span{color:var(--white-100);font-weight:700}.rockstargames-sites-rockstargamesc05a5532b55c62d69d60e4937099d7ee section.rockstargames-sites-rockstargamesc5393c9061c905c2dabb5d793b7e53cb{grid-gap:var(--grid-gap-sm);align-items:center;display:flex;flex-direction:column}.rockstargames-sites-rockstargamesc05a5532b55c62d69d60e4937099d7ee section.rockstargames-sites-rockstargamesc5393c9061c905c2dabb5d793b7e53cb h4{color:var(--white-100);font-weight:700}.rockstargames-sites-rockstargamesc05a5532b55c62d69d60e4937099d7ee section.rockstargames-sites-rockstargamesc5393c9061c905c2dabb5d793b7e53cb .rockstargames-sites-rockstargamesfa34b9ebc9549a53113be7f80310f6a7{background-color:var(--white-100);height:4rem;-webkit-mask-image:url(${g});mask-image:url(${g});-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-size:contain;mask-size:contain;width:4rem}`, "", {
        version: 3,
        sources: ["webpack://./../../buildtime/legacy-design-system/less/gen9-mixins.less", "webpack://./src/pages/Search/index.less", "webpack://./../../buildtime/legacy-design-system/less/mixins.less", "webpack://./../../buildtime/legacy-design-system/less/gen9-vars.less"],
        names: [],
        mappings: "AA2QA,mEAKI,kBAAA,CAGA,0BAAA,CAFA,WAAA,CACA,mBAAA,CAIA,sBAAA,CAQA,cAAA,CAlBA,YAAA,CAYA,mCAAA,CACA,cAAA,CACA,iBAAA,CACA,eAAA,CAZA,sBAAA,CAaA,0BAAA,CAfA,sBAAA,CACA,2CAAA,CASA,iBAAA,CAQA,2CC9OJ,CD0NA,uEAwBQ,2BAAA,CADA,8BAAA,CAGA,iCAAA,CADA,0BC7OR,CDiPI,kJAEI,gCAAA,CACA,YC/OR,CDkPI,qIAEI,2BAAA,CADA,sBC/OR,CD8OI,yIAKQ,eChPZ,CAhEA,sICuYI,aAAA,CAFA,0BAAA,CAyUA,sDAAA,CAxUA,UD5TJ,CArEA,mEC0TI,qCAAA,CACA,wCAAA,CAFA,YAAA,CAGA,yDDjPJ,CAlEA,0EAGI,kCAAA,CADA,YAAA,CAEA,uCAAA,CAHA,iCAAA,CAIA,iBAoEJ,CAzEA,6IAQQ,kCAAA,CADA,YAsER,CA7EA,6EAWQ,WAqER,CA9DA,uJAJQ,yBA4ER,CAxEA,0EAII,4BAAA,CADA,eAAA,CAFA,uCAAA,CAIA,iBAmEJ,CAjEQ,6FACI,iCAmEZ,CA3EA,iFAWY,aAAA,CAEA,eAAA,CADA,kBAoEZ,CAjEQ,8IACI,2BAmEZ,CA9DA,0EACI,iBAgEJ,CA/DI,gFACI,YAiER,CA9DA,0EACI,0CAgEJ,CA5DA,mEElEA,2BAAA,CACA,gCAAA,CAGA,yBAAA,CACA,sBAAA,CAGA,uBAAA,CACA,oBAAA,CAGA,kBAAA,CACA,oBAAA,CACA,oBAAA,CAGA,gBAAA,CACA,mBAAA,CACA,4BAAA,CACA,2BAAA,CACA,4BAAA,CACA,mBAAA,CACA,sBAAA,CAEA,gBAAA,CACA,8BAAA,CACA,6BAAA,CACA,8BAAA,CACA,oBAAA,CAEA,qBAAA,CACA,aAAA,CACA,uBAAA,CACA,uBAAA,CACA,0BAAA,CACA,yBAAA,CACA,mBAAA,CAEA,qBAAA,CAGA,0BAAA,CACA,8BAAA,CAEA,qBAAA,CACA,oBAAA,CAGA,4BAAA,CACA,gCAAA,CAGA,oBAAA,CACA,qBAAA,CACA,qBAAA,CACA,qBAAA,CAIA,qBAAA,CACA,mBAAA,CACA,iBAAA,CACA,iBAAA,CACA,iBAAA,CACA,iBAAA,CAIA,iCAAA,CACA,+BAAA,CACA,+BAAA,CACA,+BAAA,CACA,+BAAA,CACA,+BAAA,CAGA,gCAAA,CACA,8BAAA,CACA,8BAAA,CACA,8BAAA,CACA,8BAAA,CACA,8BAAA,CAGA,+BAAA,CACA,6BAAA,CACA,6BAAA,CACA,6BAAA,CACA,6BAAA,CACA,6BAAA,CAGA,sBAAA,CACA,sBAAA,CACA,sBAAA,CACA,uBAAA,CAGA,sGAAA,CAMA,2EAAA,CAOA,4BAAA,CF3CI,gCAAA,CAEA,gBAAA,CADA,YAAA,CAEA,kBAAA,CACA,gBAoIJ,CChGI,0BAAA,mECpDE,qBFwJJ,CACF,CCxKI,yBAAA,mECwBI,iBAAA,CAAoB,iBFqJ1B,CACF,CA7II,qCAAA,mEACI,uCAAA,CAEA,2BAAA,CADA,YAiJN,CACF,CA7JA,6IAkBQ,sBAAA,CAFA,YAAA,CACA,kBAiJR,CAlKA,gJAqBY,mDAAA,CACA,eAgJZ,CAtKA,oNAyBY,yBAgJZ,CAzKA,kJA6BY,sBAAA,CADA,eAiJZ,CA7KA,6IAqCQ,2BAAA,CADA,kBAAA,CAFA,YAAA,CACA,qBAgJR,CAnLA,gJAyCY,sBAAA,CADA,eA+IZ,CAvLA,gNA6CY,iCAAA,CAGA,WAAA,CAFA,0DAAA,CAAA,kDAAA,CACA,6BAAA,CAAA,qBAAA,CAGA,yBAAA,CAAA,iBAAA,CADA,UA8IZ",
        sourcesContent: ["@import 'mixins.less';\n\n// Headlines\n.headline-6 () {\n    font-size: calc(var(--font-size-3) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-5 () {\n    font-size: calc(var(--font-size-4) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-4 () {\n    font-size: calc(var(--font-size-5) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3 () {\n    font-size: calc(var(--font-size-6) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3-bold () {\n    .headline-3();\n    font-weight: var(--font-weight-bold);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-2 () {\n    font-size: calc(var(--font-size-7) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-1 () {\n    font-size: calc(var(--font-size-8) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.xLarge () {\n    font-size: calc(var(--font-size-9) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n// Body\n.body-xs () {\n    font-size: var(--font-size-1);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-xs-bold () {\n    .body-xs;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-sm () {\n    font-size: var(--font-size-2);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-sm-bold () {\n    .body-sm;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-md () {\n    font-size: var(--font-size-3);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-md-bold () {\n    .body-md;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-lg () {\n    font-size: var(--font-size-4);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-lg-bold () {\n    .body-lg;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.handleFontDeclarationsGen9() {\n    h1 {\n        .headline-1;\n    }\n    h2 {\n        .headline-2;\n    }\n    h3 {\n        .headline-3;\n    }\n    h4 {\n        .headline-4;\n    }\n    h5 {\n        .headline-5;\n    }\n    p {\n        .body-md;\n    }\n}\n\n.handleMaxWidth(@max-width-default: 1000000px) {\n    width: 100%;\n    max-width: calc(\n        var(--max-width-dynamic, @max-width-default) +\n            var(--padding-dynamic, 0px) * 2\n    ) !important;\n    margin: 0 auto;\n}\n\n.handlePadding(@paddingSides: initial, @paddingTopBottom: initial) {\n    --padding-dynamic: @paddingSides;\n    --padding-dynamic-tb: @paddingTopBottom;\n\n    padding: var(--padding-t, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0) var(--padding-b, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0);\n}\n\n.commonContent() {\n    .handlePadding(var(--padding-sides), 0);\n    .handleMaxWidth(var(--content-max-width));\n}\n\n.backgroundIcon(@icon) {\n    background: url('../icons/@{icon}.svg') no-repeat center/1rem;\n}\n\n@iconBtnConfig: {\n    @small: {\n        size: 2rem;\n    };\n    @large: {\n        size: 3rem;\n    };\n};\n\n.iconBtn(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    background: var(--black-65, rgba(0, 0, 0, 0.65));\n    border: 1px solid var(--white-100, #fff);\n    border-radius: 50%;\n    padding: 0;\n    transition: background 0.3s ease-in-out;\n    &::after {\n        .backgroundIcon(@icon);\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n    }\n\n    &:focus {\n        outline: none;\n        border: none;\n    }\n\n    .isTouchscreen({\n        &:active {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    }, {\n        &:hover,\n        &:focus {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    });\n}\n\n.iconBtnPlain(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    padding: 0;\n\n    &::after {\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n        background: url('../icons/@{icon}.svg') no-repeat center/1.5rem;\n    }\n}\n\n.swiperBtn(@icon) {\n    .iconBtn(@icon, large);\n    background: var(--black-200);\n    border-radius: 0;\n    border: none;\n    &::after {\n        background-size: 1.5rem;\n    }\n}\n\n.pillBtn {\n    display: flex;\n    min-width: var(--rem-6);\n    padding: var(--padding-xs) var(--padding-sm);\n    justify-content: center;\n    align-items: center;\n    border: none;\n    border-radius: 100px;\n    background: var(--white-15);\n    cursor: pointer;\n\n    color: var(--white-100);\n    text-align: center;\n    font-family: var(--font-family-body);\n    font-size: 20px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: var(--rem-125);\n\n    cursor: pointer;\n    transition: background-color 0.3s ease-in-out;\n\n    img {\n        margin-left: var(--grid-gap-xs);\n        height: var(--nav-icon-size);\n        width: var(--nav-icon-size);\n        transition: filter 0.3s ease-in-out;\n    }\n\n    &:hover,\n    &:focus {\n        background-color: var(--white-40);\n        outline: none;\n    }\n\n    &.selected {\n        color: var(--black-200);\n        background: var(--white-100);\n\n        img {\n            filter: invert();\n        }\n    }\n}\n\n.setGen9Root() {\n    --gen9-max-width: 2560px;\n    --content-max-width: var(--gen9-max-width);\n    --padding-sides: var(--padding-lg);\n    --content-padding: 0 var(--padding-sides);\n    flex: 1;\n    display: flex;\n    justify-content: center;\n\n    .xl({\n        --padding-sides: var(--padding-xl);\n    });\n\n    .handleFontDeclarationsGen9();\n}\n\n.scrollFade() {\n    // @note: this is breaking on firefox.\n    mask-image: linear-gradient(\n        to bottom,\n        var(--black-100) calc(100% - 48px),\n        transparent calc(100% + 16px)\n    );\n}\n\n.scrollbar() {\n    /* Firefox */\n    scrollbar-width: auto;\n    scrollbar-color: var(--scroll-thumb-color) var(--scroll-track-color);\n\n    /* Chrome, Edge, and Safari */\n    &::-webkit-scrollbar {\n        width: 8px;\n    }\n    &::-webkit-scrollbar-track {\n        background: transparent;\n    }\n    &::-webkit-scrollbar-thumb {\n        background-color: var(--scroll-thumb-color);\n        border-radius: 10px;\n        border: none;\n    }\n}\n\n.ifElse(@condition, @if-styles, @else-styles) {\n    @media @condition {\n        @if-styles();\n    }\n    @media not (@condition) {\n        @else-styles();\n    }\n}\n\n.isTouchscreen(@if-styles, @else-styles) {\n    .ifElse(~'(pointer: coarse)', @if-styles, @else-styles);\n}\n\n.mobile-landscape(@rules) {\n    @media only screen and (min-width: 480px) and (max-width: 1023px) and (orientation: landscape) {\n        @rules();\n    }\n}\n\n.caret(@color) {\n    .dropdownCaret(@color);\n}\n\n.horizontalScrollFade() {\n    mask-image: linear-gradient(\n        to right,\n        transparent,\n        rgba(0, 0, 0, 0.3) calc(var(--padding-sides) / 2),\n        #000 var(--padding-sides),\n        #000 calc(100% - var(--padding-sides)),\n        rgba(0, 0, 0, 0.3) calc(100% - (var(--padding-sides) / 2)),\n        transparent\n    );\n}\n\n// Accessibility\n.visuallyHidden() {\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    white-space: nowrap;\n    width: 1px;\n}\n", "@import '@rsgweb/legacy-design-system/less/mixins.less';\n@import '@rsgweb/legacy-design-system/less/gen9-mixins.less';\n\n.searchIndex,\n.searchContainer {\n    .standardPage;\n}\n\n.items {\n    .gridMinWidth(\n        330px,\n        var(--standard-grid-gap),\n        var(--standard-grid-gap),\n        'auto-fill'\n    );\n}\n\nsection.top {\n    max-width: var(--max-width-static);\n    display: grid;\n    grid-gap: var(--grid-gap-static-md);\n    margin: 0 auto var(--grid-gap-static-md);\n    text-align: center;\n    .text {\n        display: grid;\n        grid-gap: var(--grid-gap-static-sm);\n    }\n    h4 {\n        opacity: 0.65;\n    }\n    h1 {\n        text-transform: capitalize;\n    }\n}\n\nsection.nav {\n    margin-bottom: var(--grid-gap-static-lg);\n    text-transform: capitalize;\n    font-weight: bold;\n    font-size: var(--font-size-3);\n    text-align: center;\n    a {\n        &:not(:last-child) {\n            margin-right: var(--base-rem-size);\n        }\n        span {\n            font-size: 80%;\n            vertical-align: top;\n            font-weight: 400;\n        }\n        &.active {\n            color: var(--standard-color);\n        }\n    }\n}\n\nsection.paging {\n    text-align: center;\n    &:empty {\n        display: none;\n    }\n}\nsection.results {\n    margin-bottom: var(--section-margin-bottom);\n}\n\n// Global Navigation\n.searchContainer {\n    @import '@rsgweb/legacy-design-system/less/gen9-vars.less';\n\n    --font-family-h: HelveticaNowText;\n    display: grid;\n    grid-gap: 1.25rem;\n    margin-top: 6.25rem;\n    padding-top: 3rem;\n\n    @media screen and (min-width: 1024px) {\n        --font-family-h: HelveticaNowDisplayBold;\n        margin-top: 0;\n        grid-gap: var(--grid-gap-md);\n    }\n\n    section.resultsText {\n        display: flex;\n        flex-direction: row;\n        align-items: flex-start;\n\n        h4 {\n            color: var(--white-65, rgba(255, 255, 255, 0.65)) !important;\n            font-weight: 400;\n        }\n        span.tab {\n            text-transform: capitalize;\n        }\n        span {\n            font-weight: 700;\n            color: var(--white-100);\n        }\n    }\n\n    section.noResults {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        grid-gap: var(--grid-gap-sm);\n\n        h4 {\n            font-weight: 700;\n            color: var(--white-100);\n        }\n\n        .iconAlert {\n            background-color: var(--white-100);\n            mask-image: url('@rsgweb/legacy-design-system/icons/alert-triangle.svg');\n            mask-repeat: no-repeat;\n            height: 4rem;\n            width: 4rem;\n            mask-size: contain;\n        }\n    }\n}\n", "/*\n * New Design System:\n * 1. Breakpoints\n * 2. Typography\n * 3. Variables\n * 4. Utility\n *     4.1 Flex\n *     4.2 Grid\n *     4.3 Max-Width\n *     4.4 Images\n *     4.5 Padding\n *     4.6 Fonts\n *     4.7 Games\n *     4.8 Tina\n *     4.9 Hacks\n * 5. Presentational\n */\n\n/* 1. Breakpoints */\n@screen-sm: 0px;\n@screen-md: 768px;\n@screen-lg: 1024px;\n@screen-xl: 1920px;\n@screen-xxl: 2560px;\n@sm-min-width: @screen-sm;\n@md-min-width: @screen-md;\n@lg-min-width: @screen-lg;\n@xl-min-width: @screen-xl;\n@xxl-min-width: @screen-xxl;\n@sm-max-width: (@md-min-width - 1px);\n@md-max-width: (@lg-min-width - 1px);\n@lg-max-width: (@xl-min-width - 1px);\n@xl-max-width: (@xxl-min-width - 1px);\n\n.sm(@rules) {\n    .smMin(@rules);\n}\n.smMin(@rules) {\n    @media (min-width: @sm-min-width) {\n        @rules();\n    }\n}\n.smMax(@rules) {\n    @media (max-width: @sm-max-width) {\n        @rules();\n    }\n}\n.smOnly(@rules) {\n    @media (min-width: @sm-min-width) and (max-width: @sm-max-width) {\n        @rules();\n    }\n}\n.md(@rules) {\n    .mdMin(@rules);\n}\n.mdMin(@rules) {\n    @media (min-width: @md-min-width) {\n        @rules();\n    }\n}\n.mdMax(@rules) {\n    @media (max-width: @md-max-width) {\n        @rules();\n    }\n}\n.mdOnly(@rules) {\n    @media (min-width: @md-min-width) and (max-width: @md-max-width) {\n        @rules();\n    }\n}\n.lg(@rules) {\n    .lgMin(@rules);\n}\n.lgMin(@rules) {\n    @media (min-width: @lg-min-width) {\n        @rules();\n    }\n}\n.lgMax(@rules) {\n    @media (max-width: @lg-max-width) {\n        @rules();\n    }\n}\n.lgOnly(@rules) {\n    @media (min-width: @lg-min-width) and (max-width: @lg-max-width) {\n        @rules();\n    }\n}\n.xl(@rules) {\n    .xlMin(@rules);\n}\n.xlMin(@rules) {\n    @media (min-width: @xl-min-width) {\n        @rules();\n    }\n}\n.xlMax(@rules) {\n    @media (max-width: @xl-max-width) {\n        @rules();\n    }\n}\n.xlOnly(@rules) {\n    @media (min-width: @xl-min-width) and (max-width: @xl-max-width) {\n        @rules();\n    }\n}\n.xxl(@rules) {\n    .xxlMin(@rules);\n}\n.xxlMin(@rules) {\n    @media (min-width: @xxl-min-width) {\n        @rules();\n    }\n}\n\n.notoBackup(@varName; @stdFont) {\n    @{varName}: @stdFont;\n\n    &:lang(ja_jp) {\n        @{varName}: @stdFont, NotoSansJP;\n    }\n    &:lang(zh_hans) {\n        @{varName}: @stdFont, NotoSansSC;\n    }\n    &:lang(zh_tw) {\n        @{varName}: @stdFont, NotoSansTC;\n    }\n}\n\n/* 2. Typography */\n.handleFontDeclarations() {\n    .notoBackup(--rsg-font-family-std, HelveticaNowText);\n    .notoBackup(--rsg-font-family-h, HelveticaNowDisplayBold);\n    .notoBackup(--gta-font-family-std, Chalet);\n    .notoBackup(--gta-font-family-h, ChaletComprime);\n    .notoBackup(--gta-font-family-badge, Pricedown);\n    .notoBackup(--rdr-font-family-std, HapnaSlabSerif);\n    .notoBackup(--rdr-font-family-h, RDRLino-Regular);\n    .notoBackup(--rdr-font-family-newswire-subtitle, HapnaSlabSerif);\n    .notoBackup(--rdr-area-font, RDRCatalogueBold);\n\n    --header-multiplier: var(--header-numerator, var(--root-font-size)) /\n        var(--root-font-size);\n    font-family: var(--font-family-std, HelveticaNowText);\n    font-weight: var(--font-weight-std, 400);\n    letter-spacing: var(--letter-spacing-std, -0.025em);\n    line-height: var(--line-height-std, 1.6);\n    font-size: calc(var(--root-font-size) * 1px);\n    -webkit-font-smoothing: antialiased;\n\n    h1.large,\n    h1,\n    h2,\n    h3,\n    h4 {\n        font-family: var(--font-family-h, HelveticaNowDisplayBold);\n        letter-spacing: var(--letter-spacing-h, -0.025em);\n    }\n    h1.large,\n    h1 {\n        font-weight: var(--font-weight-h1, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h1, var(--text-transform-h, none));\n        line-height: var(--line-height-h1, var(--line-height-h, 1.1));\n    }\n\n    h1.large {\n        font-size: calc(var(--font-size-8) * var(--header-multiplier));\n    }\n    h1 {\n        font-size: calc(var(--font-size-7) * var(--header-multiplier));\n    }\n    h2 {\n        font-size: calc(var(--font-size-6) * var(--header-multiplier));\n        font-weight: var(--font-weight-h2, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h2, var(--text-transform-h, none));\n        line-height: var(--line-height-h, 1.1);\n    }\n    h3 {\n        font-size: calc(var(--font-size-5) * var(--header-multiplier));\n        font-weight: var(--font-weight-h3, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h3, var(--text-transform-h, none));\n        line-height: var(--line-height-h, 1.1);\n\n        &[data-context='newswire-subtitle'] {\n            font-size: calc(\n                var(--font-size-5) *\n                    var(\n                        --h3-numerator-override-newswire-subtitle,\n                        var(--header-multiplier)\n                    )\n            );\n            font-weight: var(\n                --font-weight-newswire-subtitle,\n                var(--font-weight-h)\n            );\n            font-family: var(\n                --font-family-newswire-subtitle,\n                var(--font-family-h)\n            );\n            text-transform: var(--text-transform-newswire-subtitle);\n        }\n\n        .isRdr({\n            font-weight: var(--font-weight-h3, var(--font-weight-h, 400));\n        });\n    }\n\n    h4,\n    h5,\n    h6 {\n        font-size: calc(var(--font-size-4) * var(--header-multiplier));\n        line-height: var(--line-height-h, 1.1);\n    }\n}\n\n.handleColors() {\n    h1.large,\n    h1 {\n        color: var(--color-h-dynamic, var(--color-h1, var(--color-h, inherit)));\n    }\n    h2 {\n        color: var(--color-h-dynamic, var(--color-h2, var(--color-h, inherit)));\n    }\n    h3 {\n        color: var(--color-h-dynamic, var(--color-h3, var(--color-h, inherit)));\n\n        &[data-context='newswire-subtitle'] {\n            color: var(\n                --color-subtitle-dynamic,\n                var(--color-h-dynamic, var(--color-h3, var(--color-h, inherit)))\n            );\n        }\n    }\n    h4,\n    h5,\n    h6 {\n        color: var(--color-h-dynamic, var(--color-h, inherit));\n    }\n    background-color: var(--background-color, transparent);\n\n    [template='community'] {\n        --time-color: var(--body-color, #2d2d2d);\n        --breadcrumb-separator-filter-invert: invert(0);\n\n        main {\n            color: var(--color-h, #161616);\n        }\n        p {\n            color: var(--body-color, #2d2d2d);\n        }\n    }\n}\n\n/* 3. Variables */\n.resetVariables() {\n    --text-section-max-width: 640px;\n    --base-pixel-size: 12px;\n    --base-rem-size: 0.75rem;\n    --half-rem-size: calc(var(--base-rem-size) / 2);\n    --twice-rem-size: calc(var(--base-rem-size) * 2);\n    --section-margin-bottom: calc(var(--base-rem-size) * 4);\n    --header-height: 80px;\n    --breadcrumbs-height: calc(var(--base-pixel-size) * 3.5);\n    --max-width: 1920px;\n    --standard-color: #fcaf17;\n    --color-h: #ffffff;\n    --body-color: #e8e8e8;\n    --background-color: #0b0b0b;\n    --card-background-color: #000;\n    --border-color: #282828;\n    --privacy-banner-height: 0px;\n    --game-header-height: 50px;\n    --standard-grid-gap: calc(var(--base-rem-size) * 2);\n    --image-margin-bottom: inherit;\n    --image-rounding: 0px;\n    --image-rounding-static: 16px;\n    --image-rounding-static-sm: 8px;\n    --image-rounding-static-xs: 4px;\n\n    --grid-gap-static-xs: 0.5rem;\n    --grid-gap-static-sm: 1rem;\n    --grid-gap-static-md: 2rem;\n    --grid-gap-static-lg: 4rem;\n    --grid-gap-static-xl: 8rem;\n    .smMax({--grid-gap-static-lg: 2rem; --grid-gap-static-xl: 4rem;});\n\n    --max-width-static: 640px;\n    --max-width-static-md: 1088px;\n    --max-width-static-lg: 1920px;\n    --max-width-static-xl: 2560px;\n    .xxlMin({--max-width-static-md: 1440px;});\n\n    --margin-static: 0 0 2rem;\n    --h2-margin: 2rem 0 0 0;\n\n    --padding-sides: var(--grid-gap-static-lg);\n    --padding-top-bottom: var(--padding-sides);\n    --padding-static: var(--padding-sides);\n}\n\n/* 4. Utility */\n/* 4.1 Flex */\n.flex() {\n    display: flex;\n    flex-flow: column;\n}\n.horizontalCenterChildren() {\n    display: flex;\n    justify-content: center;\n}\n.verticalCenterChildren() {\n    display: flex;\n    align-items: center;\n}\n.flexCenterChildren() {\n    .horizontalCenterChildren();\n    .verticalCenterChildren();\n}\n\n/* 4.2 Grid */\n.gridMinWidth(@minWidth: 480px; @rowGap: var(--standard-grid-gap); @colGap: var(--standard-grid-gap); @autoType: 'auto-fit') {\n    display: grid;\n    grid-row-gap: @rowGap;\n    grid-column-gap: @colGap;\n    grid-template-columns: ~'repeat(@{autoType}, minmax(@{minWidth}, 1fr))';\n}\n.gridHideExtraRows(@colGap: var(--standard-grid-gap)) {\n    ::-webkit-scrollbar {\n        display: none;\n    }\n    -ms-overflow-style: none;\n    display: grid;\n    grid-auto-flow: column;\n    grid-column-gap: @colGap;\n    overflow-y: hidden;\n    scroll-snap-type: x mandatory;\n    > * {\n        scroll-snap-align: start;\n    }\n    --per-page: 4;\n    .lgMax({--per-page: 3;});\n    .mdMax({--per-page: 2;});\n    .smMax({--per-page: 1;});\n\n    grid-auto-columns: calc(\n        100% / var(--per-page) - (var(--per-page) - 1) / var(--per-page) *\n            @colGap\n    );\n}\n.gridNumCols(@numInitialItems) {\n    display: grid;\n    grid-gap: var(--standard-grid-gap);\n    .smMax({grid-template-columns: repeat(1, minmax(0px, 1fr)) ;});\n    @media screen and (min-width: @screen-sm) and (max-width: @md-max-width) {\n        grid-template-columns: repeat(2, minmax(0px, 1fr));\n    }\n    @media screen and (min-width: @screen-lg) {\n        grid-template-columns: repeat(4, minmax(0px, 1fr));\n    }\n}\n.gridNumColsSmall(@colGap: var(--padding-top-bottom); @rowGap: var(--padding-top-bottom)) {\n    display: grid;\n    grid-row-gap: @rowGap;\n    grid-column-gap: @colGap;\n    grid-template-columns: repeat(1, minmax(0px, 1fr));\n    .md({grid-template-columns: repeat(2, minmax(0px, 1fr)) ;});\n}\n\n.standardLayoutGridItem(@maxWidth: var(--max-width-static-md), @padding: var(--padding-static)) {\n    .handleMaxWidth(@maxWidth);\n    .handlePadding(@padding);\n}\n\n.handleGridStyles(@grid-gap-dynamic: var(--grid-gap-static-md)) {\n    --grid-gap-dynamic: @grid-gap-dynamic;\n    display: grid;\n    grid-template-columns: repeat(var(--grid-num-columns, 1), minmax(0px, 1fr));\n    grid-template: var(\n        --grid-template-override,\n        auto / repeat(var(--grid-num-columns, 1), minmax(0, 1fr))\n    );\n    grid-gap: var(--grid-gap-dynamic);\n    align-items: var(--grid-align-items);\n    align-content: var(--grid-align-content);\n    align-self: var(--grid-align-self);\n    justify-items: var(--grid-justify-items);\n    justify-content: var(--grid-justify-content);\n    justify-self: var(--grid-justify-self);\n}\n\n/* 4.3 Max-Width */\n.maxWidth(@padding: 0) {\n    max-width: var(--max-width);\n    width: 100%;\n    margin: 0 auto;\n    padding-left: @padding;\n    padding-right: @padding;\n}\n.maxWidthWithNormalPadding() {\n    .maxWidth(var(--padding-sides));\n}\n\n.handleMaxWidth(@max-width-default: 1000000px) {\n    width: 100%;\n    max-width: calc(\n        var(--max-width-dynamic, @max-width-default) +\n            var(--padding-dynamic, 0px) * 2\n    ) !important;\n    margin: 0 auto;\n}\n\n.breakout(@max-width-default: 100vw) {\n    @margin: calc((@max-width-default / 2) * -1);\n    width: @max-width-default;\n    max-width: @max-width-default !important;\n    position: relative;\n    left: 50%;\n    right: 50%;\n    margin-left: @margin;\n    margin-right: @margin;\n}\n\n.fullWidth() {\n    .breakout;\n}\n\n/* 4.4 Images */\n.handleAspectRatio() {\n    --aspect-ratio-default: 1;\n    .lgMin({\n        --aspect-ratio-default: 16/9;\n    });\n\n    position: relative;\n    &:before {\n        content: '';\n        height: 0;\n        width: 100%;\n        display: block;\n        padding-bottom: calc(\n            100% / calc(var(--aspect-ratio, var(--aspect-ratio-default)))\n        );\n    }\n    > * {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n    }\n}\n.setAspectRatio(@ratio) {\n    --aspect-ratio: @ratio;\n    .handleAspectRatio;\n}\n\n.handleParallaxPerspective() {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    overflow-x: hidden;\n    overflow-y: scroll;\n    perspective: var(--parallax-perspective);\n    perspective-origin: 0 0;\n}\n.handleParallaxDistance() {\n    transform: translateZ(var(--parallax-distance))\n        scale(\n            calc(\n                (var(--parallax-perspective) - var(--parallax-distance)) /\n                    var(--parallax-distance)\n            )\n        );\n}\n\n.handleImageRounding() {\n    border-radius: var(--image-rounding-dynamic, 0px);\n}\n\n/* 4.5 Padding */\n.handlePadding(@paddingSides: initial, @paddingTopBottom: initial) {\n    --padding-dynamic: @paddingSides;\n    --padding-dynamic-tb: @paddingTopBottom;\n\n    padding: var(--padding-t, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0) var(--padding-b, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0);\n}\n\n/* 4.6 Fonts */\n.loadFont(@family, @weight: 400, @style: normal, @file: @family) {\n    @font-face {\n        font-family: @family;\n        font-style: @style;\n        font-weight: @weight;\n        src: url('../fonts/@{file}.woff') format('woff');\n    }\n}\n.loadFontWoff2(@family, @weight: 400, @style: normal, @file: @family) {\n    @font-face {\n        font-family: @family;\n        font-style: @style;\n        font-weight: @weight;\n        src: url('../fonts/@{file}.woff2') format('woff2');\n    }\n}\n.fontClip(@backgroundImg) {\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    @backgroundImg();\n}\n\n/* 4.7 Games */\n.gta(@rules) {\n    [data-game^='gta'] {\n        @rules();\n    }\n}\n\n.isGta(@rules) {\n    [data-game^='gta'] & {\n        @rules();\n    }\n}\n\n.rdr(@rules) {\n    [data-game='rdo'],\n    [data-game^='rdr'] {\n        @rules();\n    }\n}\n\n.isRdr(@rules) {\n    [data-game='rdo'] &,\n    [data-game^='rdr'] & {\n        @rules();\n    }\n}\n\n/* 4.8 Tina */\n.tinaTextField() {\n    padding: var(--tina-padding-small);\n    border-radius: var(--tina-radius-small);\n    background: var(--tina-color-grey-0);\n    color: var(--tina-color-grey-10);\n    background-color: var(--tina-color-grey-0);\n    border: 1px solid var(--tina-color-grey-2);\n    box-shadow: 0 0 0 2px transparent;\n    margin-bottom: 14px;\n}\n\n/* 4.9 Hacks */\n.safariBorderRadiusOverflowFix() {\n    // https://stackoverflow.com/questions/49066011/overflow-hidden-with-border-radius-not-working-on-safari\n    -webkit-mask-image: -webkit-radial-gradient(white, black);\n}\n\n.forceGpuRendering() {\n    // https://web.dev/animations-guide/#force\n    transform: translateZ(0);\n}\n\n/* 5. Presentational */\n@locales: en_us, fr_fr, de_de, es_es, es_mx, it_it, pt_br, pl_pl, ru_ru, ja_jp,\n    ko_kr, zh_tw, zh_hans;\n\n.placeholder(@rules) {\n    &::-webkit-input-placeholder {\n        @rules();\n    }\n    &:-moz-placeholder {\n        @rules();\n    }\n    &::-moz-placeholder {\n        @rules();\n    }\n    &:-ms-input-placeholder {\n        @rules();\n    }\n}\n\n.bgImg() {\n    background-size: cover;\n    background-position: center center;\n    background-repeat: no-repeat;\n}\n\n.themeDark() {\n    color: #e8e8e8;\n    --tag-color: #e8e8e8;\n}\n\n.outbound() {\n    content: '';\n    display: inline-block;\n    background-size: 100%;\n    background-repeat: no-repeat;\n    background-position: 0% 50%;\n    vertical-align: baseline;\n    margin-left: var(--grid-gap-static-xs);\n    width: 1rem;\n    height: 1rem;\n    background-image: data-uri('../img/outbound.svg');\n}\n\n.blurryBg() {\n    transition: filter 0.8s;\n    filter: blur(var(--blur-because-in-bg, 0px));\n}\n\n.fancyLink() {\n    position: relative;\n    background: transparent;\n    padding: 0;\n    z-index: 1;\n    @media (min-width: @screen-sm) {\n        transition: all 0.2s ease;\n        &:before {\n            content: '';\n            display: block;\n            position: absolute;\n            bottom: 0;\n            left: -0.1rem;\n            width: calc(100% + 0.2rem);\n            height: 2px;\n            background: var(--body-color);\n            transition: all 0.2s ease;\n            z-index: -1;\n            border-radius: 0.25rem;\n        }\n        &:hover {\n            color: #161616;\n\n            &:before {\n                left: -0.25rem;\n                width: calc(100% + 0.5rem);\n                height: 100%;\n            }\n        }\n    }\n    img {\n        display: block;\n    }\n}\n.stdHover() {\n    transition:\n        color 0.2s ease,\n        opacity 0.2s ease;\n    &:hover {\n        color: var(--standard-color);\n        opacity: 1;\n    }\n}\n.stdIconHover() {\n    &:hover {\n        filter: brightness(0) saturate(100%) invert(76%) sepia(15%)\n            saturate(5173%) hue-rotate(348deg) brightness(105%) contrast(98%);\n    }\n}\n.card() {\n    .handleImageRounding;\n    --image-rounding-dynamic: var(--image-rounding-static-sm);\n    background: var(--card-background-color);\n    overflow: hidden;\n    display: flex;\n    flex-flow: column;\n    transition: transform 0.2s ease;\n    border: 1px solid var(--border-color);\n    .info {\n        .handleGridStyles;\n        --grid-gap-dynamic: var(--grid-gap-static-xs);\n        padding: 2rem 1.5rem;\n        .title {\n            --line-height-h: 1.3;\n            color: var(--color-h);\n        }\n    }\n}\n\n.cardHover() {\n    transition:\n        transform 0.3s cubic-bezier(0, 0, 0.5, 1),\n        box-shadow 0.3s cubic-bezier(0, 0, 0.5, 1);\n    box-shadow: 0px 0px 40px -25px rgba(0, 0, 0, 0);\n\n    &:hover {\n        transform: scale(1.025);\n        box-shadow: 0px 30px 40px -25px rgba(0, 0, 0, 1);\n    }\n}\n\n.cardSecondary() {\n    .card();\n    .info {\n        padding: 1.5rem;\n    }\n    .title {\n        font-size: var(--font-size-3);\n        font-weight: 400;\n    }\n}\n\n.cardTertiary() {\n    .cardSecondary();\n    --image-rounding-dynamic: 0;\n    --card-background-color: transparent;\n    grid-gap: var(--grid-gap-static-sm);\n    overflow: unset;\n    border: none;\n    .info {\n        padding: 0;\n    }\n    .img {\n        .handleImageRounding;\n        --image-rounding-dynamic: var(--image-rounding-static-sm);\n    }\n}\n\n.standardPage() {\n    .maxWidthWithNormalPadding;\n    padding-top: var(--padding-top-bottom);\n    padding-bottom: var(--padding-top-bottom);\n}\n\n.dropdownThing(@defaultDeg: 0deg; @openDeg: 180deg) {\n    position: relative;\n    padding-right: calc(var(--grid-gap-static-xs) + 24px);\n    .dropdownCaret(yellow; @defaultDeg; @openDeg);\n}\n.dropdownCaret(@color; @defaultDeg: 0deg; @openDeg: 180deg) {\n    &:after {\n        display: inline-block;\n        content: '';\n        position: absolute;\n        top: 0;\n        right: 0;\n        @img: '../img/dropdown-@{color}.svg';\n        background-image: data-uri(@img);\n        background-repeat: no-repeat;\n        width: image-width(@img);\n        height: 100%;\n        background-position: center;\n        background-size: 100%;\n        transform: rotate(@defaultDeg);\n        transition: transform 0.3s;\n        .open& {\n            transform: rotate(@openDeg);\n        }\n    }\n}\n\n.sectionHeader() {\n    margin: 0 0 1.5rem;\n    font-size: var(--font-size-5);\n    font-family: var(--font-family-h);\n    font-weight: var(--font-weight-h);\n    --line-height-h: 1.3;\n\n    .xlMin ({\n        font-size: var(--font-size-6);\n    });;\n}\n.sectionHeaderSmall() {\n    .sectionHeader;\n    font-size: var(--font-size-4);\n\n    .xlMin ({\n        font-size: var(--font-size-5);\n    });;\n}\n\n.tag() {\n    color: var(--tag-color, var(--body-color));\n    font-weight: 700;\n    font-size: var(--font-size-2);\n    line-height: 1.6;\n}\n\n.date() {\n    .tag;\n    font-weight: 400;\n    opacity: 0.65;\n}\n.animationFadeInUp() {\n    :global {\n        animation: globalFadeInUp 0.75s;\n        animation-play-state: paused;\n    }\n}\n.animationPaused() {\n    animation-play-state: paused;\n}\n.animationRunning() {\n    animation-play-state: running;\n}\n\n.button() {\n    font-weight: 700;\n    align-self: center;\n    display: inline-block;\n    text-transform: uppercase;\n    background: transparent;\n    border: 1px solid var(--color-h);\n    padding: 1rem 3rem;\n    color: inherit;\n    cursor: pointer;\n    border-radius: 0.25rem;\n    color: var(--color-h);\n    line-height: 100%;\n    transition: all 0.2s ease;\n    &:focus,\n    &:hover {\n        background: var(--standard-color);\n        border-color: var(--standard-color);\n        color: #161616;\n    }\n    &.secondary {\n        .fancyLink;\n        outline: none;\n        border: none;\n        text-transform: none;\n        font-weight: 400;\n        line-height: unset;\n        .smMin ({\n            &:before {\n                background: var(--standard-color);\n                height:4px;\n            }\n            &:focus,\n            &:hover {\n                &:before {\n                    left: -0.5rem;\n                    width: calc(100% + 1rem);\n                    height: 100%;\n                }\n            }\n         });;\n    }\n    &[disabled] {\n        opacity: 0.5;\n    }\n}\n\n.expandToEdges() {\n    margin-top: calc(var(--padding-top-bottom) * -1);\n    margin-left: calc(var(--padding-sides) * -1);\n    width: 100vw;\n    width: calc(100% + calc(var(--padding-sides) * 2));\n}\n\n.shadow(@boxShadow: 0 10px 30px rgba(0, 0, 0, 0.5)) {\n    // border: 1px solid rgba(0, 0, 0, 0.15);\n    box-shadow: @boxShadow;\n}\n.shadowTop() {\n    box-shadow: -3px -3px 6px 0 rgba(0, 0, 0, 0.2);\n}\n\n.aspect-ratio(@width, @height, @selector: div, @pre: ~'') {\n    @supports not (aspect-ratio: @width / @height) {\n        position: relative;\n        &:before {\n            display: block;\n            content: '';\n            width: 100%;\n            padding-top: calc((@height / @width) * 100%);\n        }\n        > @{pre}@{selector} {\n            position: absolute;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            width: 100% !important;\n            height: 100% !important;\n        }\n    }\n\n    @supports (aspect-ratio: @width / @height) {\n        @{pre}@{selector} {\n            aspect-ratio: @width / @height !important;\n            width: 100% !important;\n            height: auto !important;\n        }\n    }\n}\n.unset-aspect-ratio(@selector, @pre: ~'') {\n    @supports not (aspect-ratio: 1/1) {\n        position: unset;\n        &:before {\n            display: none;\n        }\n        > @{pre}@{selector} {\n            position: unset;\n            width: 100% !important;\n            height: unset !important;\n        }\n    }\n\n    @supports (aspect-ratio: 1/1) {\n        @{pre}@{selector} {\n            aspect-ratio: unset !important;\n        }\n    }\n}\n\n.rockstarTypography() {\n    --font-family-std: NeueHelveticaPaneuropean, sans-serif;\n    --leter-spacing-std: 0;\n\n    font-size: var(--font-size-2);\n    font-family: var(--font-family-std);\n    letter-spacing: var(--leter-spacing-std);\n\n    button {\n        letter-spacing: var(--leter-spacing-std);\n    }\n}\n\n.setNodeFontSizing() {\n    // TODO audit this. .5rem is very small.\n    --font-size-1: 0.75rem;\n\n    --font-size-2: 0.75rem;\n    --font-size-3: 1rem;\n    --font-size-4: 1.25rem;\n    --font-size-5: 1.5rem;\n    --font-size-6: 2rem;\n    --font-size-7: 2.5rem;\n    --font-size-8: 3rem;\n    --font-size-9: 4rem;\n    --font-size-10: 5rem;\n}\n\n.setRootFontSizing() {\n    .sm({--root-font-size: 16;});\n    .md({--root-font-size: 18;});\n    .lg({--root-font-size: 20;});\n    .xl({--root-font-size: 22;});\n}\n\n.button-text () {\n    font-size: var(--font-size-4);\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-sm);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    text-transform: uppercase;\n}\n\n.button-text-sm () {\n    .button-text;\n    font-size: var(--font-size-3);\n}\n\n.button-text-md () {\n    .button-text;\n    font-size: var(--font-size-4);\n    padding: 0 var(--padding-md);\n}\n\n.button-text-lg () {\n    .button-text;\n    font-size: var(--font-size-5);\n    padding: 0 var(--padding-lg);\n}\n\n.button-text-xl () {\n    .button-text;\n    font-size: var(--font-size-7);\n    padding: 0 var(--padding-xl);\n}\n\n.cta-button() {\n    @import '../less/gen9-vars';\n\n    --button-text-color-hover: var(--white-100);\n\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    gap: var(--grid-gap-xs, 0.5rem);\n\n    background: var(\n        --button-background-color,\n        var(--black-65, hsla(0, 0%, 7%, 0.65))\n    );\n    border: 1px solid var(--white-100, #fff);\n    border-radius: var(--border-radius-sm, 4px);\n    color: var(--button-text-color, var(--white-100));\n    cursor: pointer;\n    padding: 0 var(--padding-sm);\n\n    width: 100%;\n    height: var(--button-height-3, 3rem);\n\n    transition: all 0.3s ease-in-out;\n\n    &[data-brand='reddeadredemption'],\n    [data-brand='reddeadredemption'] & {\n        --accent-color: #cc0000;\n        --font-family-h: RDRUltra;\n\n        :lang(pl_pl) {\n            --font-family-h: RDRUltra, NeueHelveticaPaneuropean;\n        }\n    }\n\n    &[data-brand='bully'],\n    [data-brand='bully'] & {\n        --accent-color: #f8ad00;\n        --font-family-h: HelveticaNowDisplayBold;\n        --button-background-color: var(--white-100);\n        --button-background-color-hover: var(--accent-color);\n        --button-text-color: var(--black-100);\n        --button-text-color-hover: var(--black-100);\n\n        backdrop-filter: blur(25px);\n        padding: 0 var(--padding-md, 32px);\n    }\n\n    img {\n        height: 1rem;\n        width: auto;\n    }\n\n    .label {\n        .button-text();\n        display: flex;\n        flex-shrink: 0;\n    }\n\n    &.primary {\n        color: var(--black-100);\n        background-color: var(--white-100);\n    }\n\n    &:hover {\n        border-color: var(--accent-color, var(--btn-active-color));\n        background-color: var(--accent-color, var(--btn-active-color));\n        color: var(--button-text-color-hover, var(--btn-active-color));\n\n        &.primary {\n            color: var(--button-text-color-hover, var(--white-100));\n        }\n    }\n\n    @media (min-width: 1280px) {\n        padding: 0 var(--padding-md);\n    }\n\n    @media (min-width: 768px) and (max-width: 1539px) {\n        height: 2.5rem;\n\n        img {\n            height: 1rem;\n        }\n\n        .label {\n            .button-text-sm();\n        }\n    }\n}\n", "// Font Family\n--font-family-body: 'Chalet';\n--font-family-h: 'ChaletComprime';\n\n// Font Weight\n--font-weight-regular: 400;\n--font-weight-bold: 700;\n\n// Letter Spacing\n--letter-spacing-body: 0;\n--letter-spacing-h: 0;\n\n// Line Height\n--line-height-sm: 1;\n--line-height-md: 1.1;\n--line-height-lg: 1.6;\n\n// Colors\n--black-200: #000000;\n--black-100: #121212;\n--black-65: rgba(18, 18, 18, 0.65);\n--black-40: rgba(18, 18, 18, 0.4);\n--black-15: rgba(18, 18, 18, 0.15);\n--text-dark: #2d2d2d;\n--border-color: #2d2d2d;\n\n--white-100: #ffffff;\n--white-65: rgba(255, 255, 255, 0.65);\n--white-40: rgba(255, 255, 255, 0.4);\n--white-15: rgba(255, 255, 255, 0.15);\n--text-light: #e8e8e8;\n\n--focusring-blue: blue;\n--red: #e03232;\n--circoloco-red: #eb1818;\n--rockstar-gold: #fcaf17;\n--playstation-blue: #00439c;\n--microsoft-green: #387a26;\n--pc-legacy: #b2b2b2;\n/* #if PCALT */\n--pc-enhanced: #beb279;\n/* #endif */\n\n--color-h: var(--white-100);\n--color-body: var(--text-light);\n\n--green-light: #c1f7bd;\n--green-dark: #81da85;\n\n// Scrollbar Colors\n--scroll-thumb-color: #7d7d7d;\n--scroll-track-color: transparent;\n\n// Max-Widths\n--max-width-sm: 640px;\n--max-width-md: 1088px;\n--max-width-lg: 1920px;\n--max-width-xl: 2560px;\n.xxl({--max-width-md: 1440px;});\n\n// Spacing\n--spacing-xxs: 0.25rem;\n--spacing-xs: 0.5rem;\n--spacing-sm: 1rem;\n--spacing-md: 2rem;\n--spacing-lg: 4rem;\n--spacing-xl: 8rem;\n.smMax({--spacing-lg: 2rem; --spacing-xl: 4rem;});\n\n// Grid Gap\n--grid-gap-xxs: var(--spacing-xxs);\n--grid-gap-xs: var(--spacing-xs);\n--grid-gap-sm: var(--spacing-sm);\n--grid-gap-md: var(--spacing-md);\n--grid-gap-lg: var(--spacing-lg);\n--grid-gap-xl: var(--spacing-xl);\n\n// Padding\n--padding-xxs: var(--spacing-xxs);\n--padding-xs: var(--spacing-xs);\n--padding-sm: var(--spacing-sm);\n--padding-md: var(--spacing-md);\n--padding-lg: var(--spacing-lg);\n--padding-xl: var(--spacing-xl);\n\n// Margin\n--margin-xxs: var(--spacing-xxs);\n--margin-xs: var(--spacing-xs);\n--margin-sm: var(--spacing-sm);\n--margin-md: var(--spacing-md);\n--margin-lg: var(--spacing-lg);\n--margin-xl: var(--spacing-xl);\n\n// Border Radius\n--border-radius-xs: 2px;\n--border-radius-sm: 4px;\n--border-radius-md: 8px;\n--border-radius-lg: 16px;\n\n// Gradients\n--gradient-overlay-bottom: linear-gradient(\n    180.08deg,\n    rgba(0, 0, 0, 0) 25%,\n    rgba(0, 0, 0, 0.5) 65%,\n    rgba(0, 0, 0, 0.6) 100%\n);\n--gradient-overlay-right: linear-gradient(\n    270deg,\n    rgba(0, 0, 0, 0.9) 0%,\n    rgba(0, 0, 0, 0) 100%\n);\n\n// Z-indicies\n--promo-banner-z-index: 11500;\n"],
        sourceRoot: ""
      }]), c.locals = {
        pillBtn: "rockstargames-sites-rockstargamesa610762ada9e08f6dad4af3d1631cb85",
        selected: "rockstargames-sites-rockstargamesca9ca9fb80e0273eb68a5a502f955ecf",
        searchContainer: "rockstargames-sites-rockstargamesc05a5532b55c62d69d60e4937099d7ee",
        searchIndex: "rockstargames-sites-rockstargamesfd5351e921b874473f5256931420f405",
        items: "rockstargames-sites-rockstargamesf0dd8d4498e6c2c72fa698ba6fa3ad15",
        top: "rockstargames-sites-rockstargamescfd48749550b301dcc13f82e4b478494",
        text: "rockstargames-sites-rockstargamese054deca2519c2462fc96246266a5fbc",
        nav: "rockstargames-sites-rockstargamesf97aebb39365d747d6fafb73cd45c602",
        active: "rockstargames-sites-rockstargamesccce2894c75508dc18668efd3217773c",
        paging: "rockstargames-sites-rockstargamesa181f90d52be1b1d67d871d5df02c04e",
        results: "rockstargames-sites-rockstargamesfd11aba08f1048b65f7622be1a6b951d",
        resultsText: "rockstargames-sites-rockstargamesfceac967d291cff35f4f02b6470aaeaf",
        tab: "rockstargames-sites-rockstargamesabd912c03567aedfd3da3beefa78746d",
        noResults: "rockstargames-sites-rockstargamesc5393c9061c905c2dabb5d793b7e53cb",
        iconAlert: "rockstargames-sites-rockstargamesfa34b9ebc9549a53113be7f80310f6a7"
      };
      const m = c
    },
    19083: n => {
      var e = {
        kind: "Document",
        definitions: [{
          kind: "FragmentDefinition",
          name: {
            kind: "Name",
            value: "postFields"
          },
          typeCondition: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "RockstarGames_Newswire_Model_Entity_Post_o"
            }
          },
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
                value: "url"
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
                value: "name_slug"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "created"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "created_formatted"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "primary_tags"
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
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "name"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "secondary_tags"
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
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "name"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "preview_images_parsed"
              },
              arguments: [],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "newswire_block"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "square"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "d16x9"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "_fallback"
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
          kind: "FragmentDefinition",
          name: {
            kind: "Name",
            value: "paging"
          },
          typeCondition: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "RockstarGames_Cake_Graph_Type_Paging_o"
            }
          },
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "pageCount"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "page"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "count"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "nextPage"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "prevPage"
              },
              arguments: [],
              directives: []
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "perPage"
              },
              arguments: [],
              directives: []
            }]
          }
        }, {
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "SearchData"
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
                value: "q"
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
                value: "page"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int"
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
                value: "withPosts"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Boolean"
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
                value: "withGames"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Boolean"
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
                value: "withVideos"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Boolean"
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
                  value: "url"
                },
                value: {
                  kind: "StringValue",
                  value: "/search/query",
                  block: !1
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
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "games"
              },
              arguments: [{
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
                  value: "page"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "page"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "q"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "q"
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
                    value: "paging"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "FragmentSpread",
                      name: {
                        kind: "Name",
                        value: "paging"
                      },
                      directives: []
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "results"
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
                          value: "withGames"
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
                        value: "titleSlug"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "urlOfficial"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }]
              }
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "posts"
              },
              arguments: [{
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
                  value: "page"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "page"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "q"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "q"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "hideExpired"
                },
                value: {
                  kind: "BooleanValue",
                  value: !1
                }
              }],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "paging"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "FragmentSpread",
                      name: {
                        kind: "Name",
                        value: "paging"
                      },
                      directives: []
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "results"
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
                          value: "withPosts"
                        }
                      }
                    }]
                  }],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "FragmentSpread",
                      name: {
                        kind: "Name",
                        value: "postFields"
                      },
                      directives: []
                    }]
                  }
                }]
              }
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "videos"
              },
              arguments: [{
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
                  value: "page"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "page"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "q"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "q"
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
                    value: "paging"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "FragmentSpread",
                      name: {
                        kind: "Name",
                        value: "paging"
                      },
                      directives: []
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "results"
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
                          value: "withVideos"
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
                        value: "screencap"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "game"
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
                            value: "titleSlug"
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
        }],
        loc: {
          start: 0,
          end: 1514
        }
      };

      function a(n, e) {
        if ("FragmentSpread" === n.kind) e.add(n.name.value);
        else if ("VariableDefinition" === n.kind) {
          var i = n.type;
          "NamedType" === i.kind && e.add(i.name.value)
        }
        n.selectionSet && n.selectionSet.selections.forEach((function(n) {
          a(n, e)
        })), n.variableDefinitions && n.variableDefinitions.forEach((function(n) {
          a(n, e)
        })), n.definitions && n.definitions.forEach((function(n) {
          a(n, e)
        }))
      }
      e.loc.source = {
        body: 'fragment postFields on RockstarGames_Newswire_Model_Entity_Post_o {\n    id: id_hash\n    url\n    title\n    name_slug\n    created\n    created_formatted\n    primary_tags {\n        id\n        name\n    }\n    secondary_tags {\n        id\n        name\n    }\n    preview_images_parsed {\n        newswire_block {\n            square\n            d16x9\n            _fallback\n        }\n    }\n}\nfragment paging on RockstarGames_Cake_Graph_Type_Paging_o {\n    pageCount\n    page\n    count\n    nextPage\n    prevPage\n    perPage\n}\n\nquery SearchData(\n    $locale: String!\n    $q: String!\n    $page: Int!\n    $withPosts: Boolean!\n    $withGames: Boolean!\n    $withVideos: Boolean!\n) {\n    meta: metaUrl(locale: $locale, domain: "www", url: "/search/query") {\n        title\n    }\n    games(locale: $locale, page: $page, q: $q) {\n        paging {\n            ...paging\n        }\n        results @include(if: $withGames) {\n            id\n            title\n            titleSlug\n            urlOfficial\n        }\n    }\n    posts(locale: $locale, page: $page, q: $q, hideExpired: false) {\n        paging {\n            ...paging\n        }\n        results @include(if: $withPosts) {\n            ...postFields\n        }\n    }\n    videos(locale: $locale, page: $page, q: $q) {\n        paging {\n            ...paging\n        }\n        results @include(if: $withVideos) {\n            id\n            title\n            screencap\n            game {\n                id\n                title\n                titleSlug\n            }\n        }\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var i = {};

      function t(n, e) {
        for (var a = 0; a < n.definitions.length; a++) {
          var i = n.definitions[a];
          if (i.name && i.name.value == e) return i
        }
      }

      function r(n, e) {
        var a = {
          kind: n.kind,
          definitions: [t(n, e)]
        };
        n.hasOwnProperty("loc") && (a.loc = n.loc);
        var r = i[e] || new Set,
          s = new Set,
          o = new Set;
        for (r.forEach((function(n) {
            o.add(n)
          })); o.size > 0;) {
          var d = o;
          o = new Set, d.forEach((function(n) {
            s.has(n) || (s.add(n), (i[n] || new Set).forEach((function(n) {
              o.add(n)
            })))
          }))
        }
        return s.forEach((function(e) {
          var i = t(n, e);
          i && a.definitions.push(i)
        })), a
      }
      e.definitions.forEach((function(n) {
        if (n.name) {
          var e = new Set;
          a(n, e), i[n.name.value] = e
        }
      })), n.exports = e, n.exports.postFields = r(e, "postFields"), n.exports.paging = r(e, "paging"), n.exports.SearchData = r(e, "SearchData")
    },
    52695: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2a23741c5dc2fc53b734869f88ff259d.svg"
    }
  }
]);