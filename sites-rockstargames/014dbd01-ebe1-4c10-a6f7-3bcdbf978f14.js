! function() {
  try {
    var n = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      e = (new Error).stack;
    e && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[e] = "014dbd01-ebe1-4c10-a6f7-3bcdbf978f14", n._sentryDebugIdIdentifier = "sentry-dbid-014dbd01-ebe1-4c10-a6f7-3bcdbf978f14")
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
  [7269], {
    27269: (n, e, a) => {
      "use strict";
      a.r(e), a.d(e, {
        default: () => z
      });
      var t = a(95966),
        i = a(66342),
        r = a(53178),
        o = a.n(r),
        d = a(27835),
        s = a.n(d),
        l = a(17529),
        c = a.n(l),
        g = a(72162),
        m = a.n(g),
        f = a(82510),
        h = a.n(f),
        p = a(90675),
        A = a.n(p),
        v = a(83464),
        b = {};
      b.styleTagTransform = A(), b.setAttributes = m(), b.insert = c().bind(null, "head"), b.domAPI = s(), b.insertStyleElement = h(), o()(v.A, b);
      const u = v.A && v.A.locals ? v.A.locals : void 0;
      var x = a(73855);
      const w = n => {
          let {
            t: e,
            title: a
          } = n;
          return (0, x.jsx)("div", {
            className: [u.hero, u.heroRdr2].join(" "),
            "data-game": a,
            children: (0, x.jsxs)("div", {
              className: u.heroContent,
              children: [(0, x.jsxs)("div", {
                className: u.logos,
                "data-title": a,
                children: [(0, x.jsx)("div", {
                  className: u.logoLeft
                }), (0, x.jsx)("div", {
                  className: u.logoRight
                })]
              }), (0, x.jsx)("p", {
                className: u.description,
                dangerouslySetInnerHTML: {
                  __html: e(`credits.${a}.desc`)
                },
                "data-title": a
              })]
            })
          })
        },
        C = n => {
          let {
            children: e
          } = n;
          return (0, x.jsx)("div", {
            className: u.header,
            children: e
          })
        },
        y = n => {
          let {
            data: e
          } = n;
          return e ? (0, x.jsxs)("div", {
            className: u.creditContent,
            children: [(0, x.jsx)(C, {
              children: (0, x.jsx)("h1", {
                children: "Credits"
              })
            }), (0, x.jsx)("ul", {
              children: e?.map((n => (0, x.jsxs)("li", {
                children: [(0, x.jsx)("span", {
                  className: u.name,
                  children: n.preferred_name
                }), (0, x.jsx)("span", {
                  className: u.position,
                  children: `${n?.business_title?.replace('"',"").trim()}, ${n.division}`
                })]
              }, JSON.stringify(n))))
            })]
          }) : null
        },
        k = n => {
          let {
            data: e
          } = n;
          if (!e) return null;
          const a = e[0]?.static_json;
          return (0, x.jsxs)("div", {
            className: u.originalPeople,
            children: [(0, x.jsx)(C, {
              children: (0, x.jsx)("h2", {
                children: "Original Game Credits"
              })
            }), Object.keys(a.pageContent).map((n => {
              const {
                sections: e
              } = a.pageContent[n];
              return (0, x.jsxs)("div", {
                className: u.creditSection,
                children: [(0, x.jsx)("h3", {
                  children: (t = n, a.scrollerData.find((n => {
                    let {
                      eventName: e
                    } = n;
                    return e === t
                  }))?.title ?? "")
                }), e.map((n => {
                  let {
                    content: e,
                    title: a
                  } = n;
                  return (0, x.jsxs)("div", {
                    className: u.creditSectionInner,
                    children: [(0, x.jsx)("h4", {
                      dangerouslySetInnerHTML: {
                        __html: a
                      }
                    }), (0, x.jsx)("ul", {
                      className: u.creditContentOld,
                      children: e.map((n => (0, x.jsx)("li", {
                        dangerouslySetInnerHTML: {
                          __html: n
                        }
                      }, n)))
                    })]
                  }, a)
                }))]
              }, n);
              var t
            }))]
          })
        },
        z = (0, t.withTranslations)((n => {
          let {
            t: e,
            title: a
          } = n;
          const r = "v" === a,
            {
              data: o
            } = (0, t.useQuery)(i.CreditData, {
              variables: {
                needsIfruit: r,
                title: a
              }
            });
          if (!o) return null;
          const {
            creditsForTitle: d,
            creditsIfruit: s
          } = o;
          return (0, x.jsxs)("div", {
            className: u.allCredits,
            "data-title": a,
            children: [(0, x.jsx)(w, {
              title: a,
              t: e
            }), (0, x.jsx)(y, {
              data: d
            }), "v" === a ? (0, x.jsx)(k, {
              data: s
            }) : ""]
          })
        }))
    },
    83464: (n, e, a) => {
      "use strict";
      a.d(e, {
        A: () => N
      });
      var t = a(42587),
        i = a.n(t),
        r = a(15081),
        o = a.n(r),
        d = a(79908),
        s = a.n(d),
        l = new URL(a(50228), a.b),
        c = new URL(a(20629), a.b),
        g = new URL(a(25558), a.b),
        m = new URL(a(32285), a.b),
        f = new URL(a(56923), a.b),
        h = new URL(a(3990), a.b),
        p = new URL(a(56671), a.b),
        A = new URL(a(80407), a.b),
        v = new URL(a(42288), a.b),
        b = new URL(a(1995), a.b),
        u = o()(i()),
        x = s()(l),
        w = s()(c),
        C = s()(g),
        y = s()(m),
        k = s()(f),
        z = s()(h),
        D = s()(p),
        I = s()(A),
        B = s()(v),
        E = s()(b);
      u.push([n.id, `.rockstargames-sites-rockstargamesefd9a26211d2a6af9bf2ee5f3f1ff1ab{align-items:center;background:var(--white-15);border:none;border-radius:100px;color:var(--white-100);cursor:pointer;display:flex;font-family:var(--font-family-body);font-size:20px;font-style:normal;font-weight:700;justify-content:center;line-height:var(--rem-125);min-width:var(--rem-6);padding:var(--padding-xs) var(--padding-sm);text-align:center;transition:background-color .3s ease-in-out}.rockstargames-sites-rockstargamesefd9a26211d2a6af9bf2ee5f3f1ff1ab img{height:var(--nav-icon-size);margin-left:var(--grid-gap-xs);transition:filter .3s ease-in-out;width:var(--nav-icon-size)}.rockstargames-sites-rockstargamesefd9a26211d2a6af9bf2ee5f3f1ff1ab:focus,.rockstargames-sites-rockstargamesefd9a26211d2a6af9bf2ee5f3f1ff1ab:hover{background-color:var(--white-40);outline:none}.rockstargames-sites-rockstargamesefd9a26211d2a6af9bf2ee5f3f1ff1ab.rockstargames-sites-rockstargamesb8593315bcfc0b018046dfd57cc7876a{background:var(--white-100);color:var(--black-200)}.rockstargames-sites-rockstargamesefd9a26211d2a6af9bf2ee5f3f1ff1ab.rockstargames-sites-rockstargamesb8593315bcfc0b018046dfd57cc7876a img{filter:invert()}@font-face{font-family:ChaletComprime;font-style:normal;font-weight:400;src:url(${x}) format("woff")}@font-face{font-family:RDRLino-Regular;font-style:normal;font-weight:400;src:url(${w}) format("woff")}@font-face{font-family:SIGNPAINTER-HOUSESCRIPT;font-style:normal;font-weight:400;src:url(${C}) format("woff")}@font-face{font-family:DIN Next;font-style:"normal";font-weight:700;src:url(${y}) format("truetype")}.rockstargames-sites-rockstargamesf7a7c76d475bd09c20a29f84955da885{background:var(--background-color)}.rockstargames-sites-rockstargamesf7a7c76d475bd09c20a29f84955da885 ul{list-style:none;margin:0 auto;padding:0!important}.rockstargames-sites-rockstargamesf7a7c76d475bd09c20a29f84955da885[data-title=v]{--font-family-h:ChaletComprime;--position-opacity:0.75;--bg-img:url(${k});--logo-left:url(${z});--logo-right:url(${D});--logo-left-ratio:1.16230366;--logo-right-ratio:1.01315789}.rockstargames-sites-rockstargamesf7a7c76d475bd09c20a29f84955da885[data-title=rdr2]{--font-family-h:RDRLino-Regular;--position-color:#c00;--position-opacity:1;--bg-img:url(${I});--logo-left:url(${B});--logo-right:url(${E});--logo-left-ratio:2.77916667;--logo-right-ratio:2.2;--foo-left:667;--foo-right:528;--foo-left-fr:(667/1195);font-size:1.11631799fr}.rockstargames-sites-rockstargamesf5e04151b0ee11a4ec33543d6e61353c{background:var(--bg-img) bottom /cover no-repeat;color:#fff;display:grid;min-height:calc(100vh - var(--header-height))}@media (min-width:3400px){.rockstargames-sites-rockstargamesf5e04151b0ee11a4ec33543d6e61353c{height:75vh}}.rockstargames-sites-rockstargamesf5e04151b0ee11a4ec33543d6e61353c[data-game=rdr2]{--font-family-std:RDRLino-Regular!important}.rockstargames-sites-rockstargamesbe0588e6483b4c6baaf9fdca3c08d22d{background:var(--logo-left) no-repeat center /contain}.rockstargames-sites-rockstargamesf2d6e1f442642a213a8b067d3c188e06{background:var(--logo-right) no-repeat center /contain}.rockstargames-sites-rockstargamesbe0588e6483b4c6baaf9fdca3c08d22d,.rockstargames-sites-rockstargamesf2d6e1f442642a213a8b067d3c188e06{max-height:240px}[data-title=rdr2] .rockstargames-sites-rockstargamesbe0588e6483b4c6baaf9fdca3c08d22d,[data-title=rdr2] .rockstargames-sites-rockstargamesf2d6e1f442642a213a8b067d3c188e06{max-height:140px}.rockstargames-sites-rockstargamesbd3782823e3d0e7347672ef3f677dc3e{--padding-dynamic:var(--padding-sides);--padding-dynamic-tb:var(--padding-sides);grid-gap:var(--grid-gap-static-md);align-content:center;display:grid;height:100%;padding:var(--padding-t,var(--padding-dynamic-tb,0)) var(--padding-dynamic,0) var(--padding-b,var(--padding-dynamic-tb,0)) var(--padding-dynamic,0);width:100%}@media (min-width:768px){.rockstargames-sites-rockstargamesbd3782823e3d0e7347672ef3f677dc3e{--padding-dynamic:var(--padding-sides);--padding-dynamic-tb:var(--grid-gap-static-xl);padding:var(--padding-t,var(--padding-dynamic-tb,0)) var(--padding-dynamic,0) var(--padding-b,var(--padding-dynamic-tb,0)) var(--padding-dynamic,0)}}@media (min-width:1920px){.rockstargames-sites-rockstargamesbd3782823e3d0e7347672ef3f677dc3e{--padding-dynamic:var(--grid-gap-static-xl);--padding-dynamic-tb:var(--grid-gap-static-xl);grid-gap:var(--grid-gap-static-lg);padding:var(--padding-t,var(--padding-dynamic-tb,0)) var(--padding-dynamic,0) var(--padding-b,var(--padding-dynamic-tb,0)) var(--padding-dynamic,0)}}.rockstargames-sites-rockstargamesd3505d9aab5474e48595b2af055d9cbc{grid-gap:var(--grid-gap-static-lg);--logo-size:30vw;--left-logo:calc(var(--logo-size) * var(--logo-left-ratio));--right-logo:calc(var(--logo-size) * var(--logo-right-ratio));display:grid;grid-template-rows:var(--logo-size);justify-content:center;width:100%}.rockstargames-sites-rockstargamesd3505d9aab5474e48595b2af055d9cbc[data-title=rdr2]{grid-template-columns:1.11631799fr 1fr}.rockstargames-sites-rockstargamesd3505d9aab5474e48595b2af055d9cbc[data-title=v]{grid-template-columns:1.07117008fr 1fr}@media (min-width:768px){.rockstargames-sites-rockstargamesd3505d9aab5474e48595b2af055d9cbc{--logo-size:25vw}}@media (min-width:1024px){.rockstargames-sites-rockstargamesd3505d9aab5474e48595b2af055d9cbc{--logo-size:10rem}}@media (min-width:1920px){.rockstargames-sites-rockstargamesd3505d9aab5474e48595b2af055d9cbc{--logo-size:11.5rem}}@media (min-width:2560px){.rockstargames-sites-rockstargamesd3505d9aab5474e48595b2af055d9cbc{--logo-size:13rem}}.rockstargames-sites-rockstargamesdf14f88f6bdbd500bf797bd76a28005f{--font-size-h2:72px;width:100%}.rockstargames-sites-rockstargamesed2a55697f5418d2a622238739cca6bd{margin:0 auto!important;max-width:800px;text-align:center;text-shadow:2px 2px 6px #000;width:100%}.rockstargames-sites-rockstargamesed2a55697f5418d2a622238739cca6bd[data-title=v]{font-weight:700}.rockstargames-sites-rockstargamesed2a55697f5418d2a622238739cca6bd a{text-decoration:underline!important}@media (min-width:768px){.rockstargames-sites-rockstargamesed2a55697f5418d2a622238739cca6bd{font-size:var(--font-size-4)}}.rockstargames-sites-rockstargamesa5ceeb31417420b65bb64ed995dc4841{--font-weight-h1:400;--font-size-7:3.5rem;grid-gap:4rem;display:grid;font-family:var(--font-family-h);padding:2rem}.rockstargames-sites-rockstargamesa5ceeb31417420b65bb64ed995dc4841 h1{font-size:130%!important;margin-bottom:-.525rem!important;text-align:center;text-transform:uppercase!important}.rockstargames-sites-rockstargamesa5ceeb31417420b65bb64ed995dc4841 ul{grid-gap:1.5rem;display:grid;line-height:1}@media (min-width:768px){.rockstargames-sites-rockstargamesa5ceeb31417420b65bb64ed995dc4841 ul{grid-template-columns:repeat(2,1fr);max-width:75vw}}@media (min-width:1024px){.rockstargames-sites-rockstargamesa5ceeb31417420b65bb64ed995dc4841 ul{grid-template-columns:repeat(3,1fr);max-width:70vw}}.rockstargames-sites-rockstargamesa5ceeb31417420b65bb64ed995dc4841 li{grid-gap:.25rem;align-content:flex-start;display:grid;justify-content:center;justify-items:center;text-align:center}.rockstargames-sites-rockstargamesf4e95ac7ec6e85f321acaf5c2246adf3{grid-column:1/-1}.rockstargames-sites-rockstargamesd02ccc389d442e5433ff5ab6fecc6a09{font-family:var(--font-family-h),"DIN Next";font-size:var(--font-size-4);text-transform:uppercase}.rockstargames-sites-rockstargamescc36f0d36534abd657d69e9381d6de02{color:var(--position-color);font-size:var(--font-size-3);line-height:1.1;opacity:var(--position-opacity)}[data-title=rdr2] .rockstargames-sites-rockstargamescc36f0d36534abd657d69e9381d6de02{font-size:var(--font-size-2)}.rockstargames-sites-rockstargameseb3581889ef26100e095dbfac698d916{--font-family-h:SIGNPAINTER-HOUSESCRIPT;--font-weight-h2:400;--font-weight-h3:400;--text-transform-h3:uppercase;grid-gap:8rem;display:grid;justify-items:center;padding:6rem 1rem;text-align:center}.rockstargames-sites-rockstargameseb3581889ef26100e095dbfac698d916 h2{font-size:72px!important;grid-column:1/-1}@media (max-width:767px){.rockstargames-sites-rockstargameseb3581889ef26100e095dbfac698d916 h2{font-size:var(--font-size-h2-mobile)!important}}.rockstargames-sites-rockstargameseb3581889ef26100e095dbfac698d916 h3{--font-family-h:Chalet;font-size:48px!important;text-transform:uppercase}.rockstargames-sites-rockstargameseb3581889ef26100e095dbfac698d916 h4{--letter-spacing-h:normal;font-size:42px!important;font-weight:400}.rockstargames-sites-rockstargamesaf8ab3ea585e1c8c23ca7ab0b0ff339a{grid-gap:.5rem;display:grid;font-family:ChaletComprime;font-size:36px}.rockstargames-sites-rockstargamesaef86015783d6ce28bb7b88331b9adb6{grid-gap:3rem;display:grid}.rockstargames-sites-rockstargamesb525e8bb6213678232c2815dfc948151{grid-gap:.5rem;display:grid}`, "", {
        version: 3,
        sources: ["webpack://./../../buildtime/legacy-design-system/less/gen9-mixins.less", "webpack://./src/components/Credits/index.less", "webpack://./../../buildtime/legacy-design-system/less/mixins.less"],
        names: [],
        mappings: "AA2QA,mEAKI,kBAAA,CAGA,0BAAA,CAFA,WAAA,CACA,mBAAA,CAIA,sBAAA,CAQA,cAAA,CAlBA,YAAA,CAYA,mCAAA,CACA,cAAA,CACA,iBAAA,CACA,eAAA,CAZA,sBAAA,CAaA,0BAAA,CAfA,sBAAA,CACA,2CAAA,CASA,iBAAA,CAQA,2CC9OJ,CD0NA,uEAwBQ,2BAAA,CADA,8BAAA,CAGA,iCAAA,CADA,0BC7OR,CDiPI,kJAEI,gCAAA,CACA,YC/OR,CDkPI,qIAEI,2BAAA,CADA,sBC/OR,CD8OI,yIAKQ,eChPZ,CCwaI,WACI,0BAAA,CACA,iBAAA,CACA,eAAA,CACA,0DDtaR,CCkaI,WACI,2BAAA,CACA,iBAAA,CACA,eAAA,CACA,0DDhaR,CC4ZI,WACI,mCAAA,CACA,iBAAA,CACA,eAAA,CACA,0DD1ZR,CA9EA,WACI,oBAAA,CACA,mBAAA,CACA,eAAA,CACA,8DAgFJ,CA5EA,mEACI,kCA8EJ,CA/EA,sEAGQ,eAAA,CACA,aAAA,CACA,mBA+ER,CA5EI,iFAII,8BAAA,CACA,uBAAA,CACA,gDAAA,CACA,mDAAA,CACA,oDAAA,CACA,4BAAA,CAGA,6BAyER,CArEI,oFAII,+BAAA,CACA,qBAAA,CACA,oBAAA,CACA,gDAAA,CACA,mDAAA,CACA,oDAAA,CACA,4BAAA,CAGA,sBAAA,CAGA,cAAA,CACA,eAAA,CAIA,wBAAA,CACA,sBA6DR,CA1DA,mEAII,gDAAA,CADA,UAAA,CADA,YAAA,CADA,6CA+DJ,CA1DI,0BAAA,mEACI,WA6DN,CACF,CA5DI,mFACI,2CA8DR,CA3DA,mEACI,qDA6DJ,CA3DA,mEACI,sDA6DJ,CA3DA,sIAEI,gBA6DJ,CA5DI,0KACI,gBA+DR,CA3DA,mEDyEI,sCAAA,CACA,yCAAA,CCtEA,kCAAA,CAEA,oBAAA,CAJA,YAAA,CAGA,WAAA,CDuEA,mJAAA,CCrEA,UA8DJ,CCxGI,yBAAA,mEF4GA,sCAAA,CACA,8CAAA,CAEA,mJCDF,CACF,CC3EI,0BAAA,mEFwEA,2CAAA,CACA,8CAAA,CC7DI,kCAAA,CD+DJ,mJCOF,CACF,CAnEA,mEAGI,kCAAA,CAGA,gBAAA,CAEA,2DAAA,CACA,6DAAA,CARA,YAAA,CAGA,mCAAA,CAFA,sBAAA,CAGA,UAwEJ,CAlEI,oFAOI,sCA8DR,CA3DI,iFAOI,sCAuDR,CCvII,yBAAA,mEDoFI,gBAuDN,CACF,CC1HI,0BAAA,mEDqEI,iBAyDN,CACF,CC7GI,0BAAA,mEDsDI,mBA2DN,CACF,CChGI,0BAAA,mEDuCI,iBA6DN,CACF,CA1DA,mEAEI,mBAAA,CADA,UA6DJ,CAzDA,mEAKI,uBAAA,CADA,eAAA,CAHA,iBAAA,CAEA,4BAAA,CADA,UA8DJ,CA1DI,iFACI,eA4DR,CAnEA,qEAUQ,mCA4DR,CC5KI,yBAAA,mEDmHI,4BA6DN,CACF,CA1DA,mEACI,oBAAA,CACA,oBAAA,CAIA,aAAA,CADA,YAAA,CAFA,gCAAA,CACA,YA8DJ,CAlEA,sEASQ,wBAAA,CAGA,gCAAA,CADA,iBAAA,CADA,kCA8DR,CAxEA,sEAiBQ,eAAA,CADA,YAAA,CADA,aA8DR,CCpMI,yBAAA,sED2IQ,mCAAA,CACI,cA6Dd,CACF,CCxLI,0BAAA,sED8HQ,mCAAA,CACA,cA8DV,CACF,CAzFA,sEAgCQ,eAAA,CACA,wBAAA,CAFA,YAAA,CAGA,sBAAA,CACA,oBAAA,CACA,iBA6DR,CAzDA,mEACI,gBA2DJ,CAzDA,mEACI,2CAAA,CACA,4BAAA,CACA,wBA2DJ,CAxDA,mEAII,2BAAA,CADA,4BAAA,CADA,eAAA,CADA,+BA6DJ,CAzDI,qFACI,4BA2DR,CAtDA,mEACI,uCAAA,CACA,oBAAA,CACA,oBAAA,CACA,6BAAA,CAOA,aAAA,CADA,YAAA,CAFA,oBAAA,CAFA,iBAAA,CAGA,iBAyDJ,CAlEA,sEAcQ,wBAAA,CADA,gBAyDR,CCtQI,yBAAA,sEDgNQ,8CA0DV,CACF,CA3EA,sEAoBQ,sBAAA,CAEA,wBAAA,CADA,wBA2DR,CAhFA,sEA2BQ,yBAAA,CAFA,wBAAA,CACA,eA2DR,CAvDA,mEAEI,cAAA,CADA,YAAA,CAEA,0BAAA,CACA,cAyDJ,CAvDA,mEAEI,aAAA,CADA,YA0DJ,CAtDA,mEAEI,cAAA,CADA,YAyDJ",
        sourcesContent: ["@import 'mixins.less';\n\n// Headlines\n.headline-6 () {\n    font-size: calc(var(--font-size-3) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-5 () {\n    font-size: calc(var(--font-size-4) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-4 () {\n    font-size: calc(var(--font-size-5) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3 () {\n    font-size: calc(var(--font-size-6) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3-bold () {\n    .headline-3();\n    font-weight: var(--font-weight-bold);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-2 () {\n    font-size: calc(var(--font-size-7) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-1 () {\n    font-size: calc(var(--font-size-8) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.xLarge () {\n    font-size: calc(var(--font-size-9) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n// Body\n.body-xs () {\n    font-size: var(--font-size-1);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-xs-bold () {\n    .body-xs;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-sm () {\n    font-size: var(--font-size-2);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-sm-bold () {\n    .body-sm;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-md () {\n    font-size: var(--font-size-3);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-md-bold () {\n    .body-md;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-lg () {\n    font-size: var(--font-size-4);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-lg-bold () {\n    .body-lg;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.handleFontDeclarationsGen9() {\n    h1 {\n        .headline-1;\n    }\n    h2 {\n        .headline-2;\n    }\n    h3 {\n        .headline-3;\n    }\n    h4 {\n        .headline-4;\n    }\n    h5 {\n        .headline-5;\n    }\n    p {\n        .body-md;\n    }\n}\n\n.handleMaxWidth(@max-width-default: 1000000px) {\n    width: 100%;\n    max-width: calc(\n        var(--max-width-dynamic, @max-width-default) +\n            var(--padding-dynamic, 0px) * 2\n    ) !important;\n    margin: 0 auto;\n}\n\n.handlePadding(@paddingSides: initial, @paddingTopBottom: initial) {\n    --padding-dynamic: @paddingSides;\n    --padding-dynamic-tb: @paddingTopBottom;\n\n    padding: var(--padding-t, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0) var(--padding-b, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0);\n}\n\n.commonContent() {\n    .handlePadding(var(--padding-sides), 0);\n    .handleMaxWidth(var(--content-max-width));\n}\n\n.backgroundIcon(@icon) {\n    background: url('../icons/@{icon}.svg') no-repeat center/1rem;\n}\n\n@iconBtnConfig: {\n    @small: {\n        size: 2rem;\n    };\n    @large: {\n        size: 3rem;\n    };\n};\n\n.iconBtn(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    background: var(--black-65, rgba(0, 0, 0, 0.65));\n    border: 1px solid var(--white-100, #fff);\n    border-radius: 50%;\n    padding: 0;\n    transition: background 0.3s ease-in-out;\n    &::after {\n        .backgroundIcon(@icon);\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n    }\n\n    &:focus {\n        outline: none;\n        border: none;\n    }\n\n    .isTouchscreen({\n        &:active {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    }, {\n        &:hover,\n        &:focus {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    });\n}\n\n.iconBtnPlain(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    padding: 0;\n\n    &::after {\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n        background: url('../icons/@{icon}.svg') no-repeat center/1.5rem;\n    }\n}\n\n.swiperBtn(@icon) {\n    .iconBtn(@icon, large);\n    background: var(--black-200);\n    border-radius: 0;\n    border: none;\n    &::after {\n        background-size: 1.5rem;\n    }\n}\n\n.pillBtn {\n    display: flex;\n    min-width: var(--rem-6);\n    padding: var(--padding-xs) var(--padding-sm);\n    justify-content: center;\n    align-items: center;\n    border: none;\n    border-radius: 100px;\n    background: var(--white-15);\n    cursor: pointer;\n\n    color: var(--white-100);\n    text-align: center;\n    font-family: var(--font-family-body);\n    font-size: 20px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: var(--rem-125);\n\n    cursor: pointer;\n    transition: background-color 0.3s ease-in-out;\n\n    img {\n        margin-left: var(--grid-gap-xs);\n        height: var(--nav-icon-size);\n        width: var(--nav-icon-size);\n        transition: filter 0.3s ease-in-out;\n    }\n\n    &:hover,\n    &:focus {\n        background-color: var(--white-40);\n        outline: none;\n    }\n\n    &.selected {\n        color: var(--black-200);\n        background: var(--white-100);\n\n        img {\n            filter: invert();\n        }\n    }\n}\n\n.setGen9Root() {\n    --gen9-max-width: 2560px;\n    --content-max-width: var(--gen9-max-width);\n    --padding-sides: var(--padding-lg);\n    --content-padding: 0 var(--padding-sides);\n    flex: 1;\n    display: flex;\n    justify-content: center;\n\n    .xl({\n        --padding-sides: var(--padding-xl);\n    });\n\n    .handleFontDeclarationsGen9();\n}\n\n.scrollFade() {\n    // @note: this is breaking on firefox.\n    mask-image: linear-gradient(\n        to bottom,\n        var(--black-100) calc(100% - 48px),\n        transparent calc(100% + 16px)\n    );\n}\n\n.scrollbar() {\n    /* Firefox */\n    scrollbar-width: auto;\n    scrollbar-color: var(--scroll-thumb-color) var(--scroll-track-color);\n\n    /* Chrome, Edge, and Safari */\n    &::-webkit-scrollbar {\n        width: 8px;\n    }\n    &::-webkit-scrollbar-track {\n        background: transparent;\n    }\n    &::-webkit-scrollbar-thumb {\n        background-color: var(--scroll-thumb-color);\n        border-radius: 10px;\n        border: none;\n    }\n}\n\n.ifElse(@condition, @if-styles, @else-styles) {\n    @media @condition {\n        @if-styles();\n    }\n    @media not (@condition) {\n        @else-styles();\n    }\n}\n\n.isTouchscreen(@if-styles, @else-styles) {\n    .ifElse(~'(pointer: coarse)', @if-styles, @else-styles);\n}\n\n.mobile-landscape(@rules) {\n    @media only screen and (min-width: 480px) and (max-width: 1023px) and (orientation: landscape) {\n        @rules();\n    }\n}\n\n.caret(@color) {\n    .dropdownCaret(@color);\n}\n\n.horizontalScrollFade() {\n    mask-image: linear-gradient(\n        to right,\n        transparent,\n        rgba(0, 0, 0, 0.3) calc(var(--padding-sides) / 2),\n        #000 var(--padding-sides),\n        #000 calc(100% - var(--padding-sides)),\n        rgba(0, 0, 0, 0.3) calc(100% - (var(--padding-sides) / 2)),\n        transparent\n    );\n}\n\n// Accessibility\n.visuallyHidden() {\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    white-space: nowrap;\n    width: 1px;\n}\n", "@import '@rsgweb/legacy-design-system/less/mixins.less';\n@import '@rsgweb/legacy-design-system/less/gen9-mixins.less';\n\n.loadFont(ChaletComprime, 400, normal, CHALETCOMPRIME-COLOGNESIXTYSC);\n.loadFont(RDRLino-Regular);\n.loadFont(SIGNPAINTER-HOUSESCRIPT);\n\n@font-face {\n    font-family: 'DIN Next';\n    font-style: 'normal';\n    font-weight: 700;\n    src: url('../../../../../buildtime/legacy-design-system/fonts/DINNextW1G-Cn.ttf')\n        format('truetype');\n}\n\n.allCredits {\n    background: var(--background-color);\n    ul {\n        list-style: none;\n        margin: 0 auto;\n        padding: 0 !important;\n    }\n\n    &[data-title='v'] {\n        @leftLogo: './img/gtav.svg';\n        @rightLogo: './img/gtao.svg';\n\n        --font-family-h: ChaletComprime;\n        --position-opacity: 0.75;\n        --bg-img: url('./img/v-bg.jpg');\n        --logo-left: url(@leftLogo);\n        --logo-right: url(@rightLogo);\n        --logo-left-ratio: unit(\n            (image-width(@leftLogo) / image-height(@leftLogo))\n        );\n        --logo-right-ratio: unit(\n            (image-width(@rightLogo) / image-height(@rightLogo))\n        );\n    }\n    &[data-title='rdr2'] {\n        @leftLogo: './img/rdr2.svg';\n        @rightLogo: './img/rdo.svg';\n\n        --font-family-h: RDRLino-Regular;\n        --position-color: #cc0000;\n        --position-opacity: 1;\n        --bg-img: url('./img/rdr2-bg.jpg');\n        --logo-left: url(@leftLogo);\n        --logo-right: url(@rightLogo);\n        --logo-left-ratio: unit(\n            (image-width(@leftLogo) / image-height(@leftLogo))\n        );\n        --logo-right-ratio: unit(\n            (image-width(@rightLogo) / image-height(@rightLogo))\n        );\n        --foo-left: unit(image-width(@leftLogo));\n        --foo-right: unit(image-width(@rightLogo));\n\n        @w: unit(image-width(@leftLogo));\n        @added: @w + unit(image-width(@rightLogo));\n        --foo-left-fr: (@w / @added);\n        font-size: (@w / @added * 2fr);\n    }\n}\n.hero {\n    min-height: calc(100vh - var(--header-height));\n    display: grid;\n    color: #fff;\n    background: var(--bg-img) bottom/cover no-repeat;\n\n    @media (min-width: 3400px) {\n        height: 75vh;\n    }\n    &[data-game='rdr2'] {\n        --font-family-std: RDRLino-Regular !important;\n    }\n}\n.logoLeft {\n    background: var(--logo-left) no-repeat center/contain;\n}\n.logoRight {\n    background: var(--logo-right) no-repeat center/contain;\n}\n.logoLeft,\n.logoRight {\n    max-height: 240px;\n    [data-title='rdr2'] & {\n        max-height: 140px;\n    }\n}\n\n.heroContent {\n    .handlePadding(var(--padding-sides), var(--padding-sides));\n    display: grid;\n    width: 100%;\n    grid-gap: var(--grid-gap-static-md);\n    height: 100%;\n    align-content: center;\n    width: 100%;\n    .md ({\n        .handlePadding(var(--padding-sides), var(--grid-gap-static-xl));\n    });;\n    .xl ({\n        .handlePadding(var(--grid-gap-static-xl), var(--grid-gap-static-xl));\n        grid-gap: var(--grid-gap-static-lg);\n    });;\n}\n\n.logos {\n    display: grid;\n    justify-content: center;\n    grid-gap: var(--grid-gap-static-lg);\n    grid-template-rows: var(--logo-size);\n    width: 100%;\n    --logo-size: 30vw;\n\n    --left-logo: calc(var(--logo-size) * var(--logo-left-ratio));\n    --right-logo: calc(var(--logo-size) * var(--logo-right-ratio));\n\n    &[data-title='rdr2'] {\n        @leftLogo: './img/rdr2.svg';\n        @rightLogo: './img/rdo.svg';\n\n        @w: unit(image-width(@leftLogo));\n        @added: @w + unit(image-width(@rightLogo));\n\n        grid-template-columns: (@w / @added * 2fr) 1fr;\n    }\n\n    &[data-title='v'] {\n        @leftLogo: './img/gtav.svg';\n        @rightLogo: './img/gtao.svg';\n\n        @w: unit(image-width(@leftLogo));\n        @added: @w + unit(image-width(@rightLogo));\n\n        grid-template-columns: (@w / @added * 2fr) 1fr;\n    }\n\n    .md ({\n        --logo-size: 25vw;\n    });;\n    .lg ({\n        --logo-size: 10rem;\n    });;\n    .xl ({\n        --logo-size: 11.5rem;\n    });;\n    .xxl ({\n        --logo-size: 13rem;\n    });;\n}\n\n.header {\n    width: 100%;\n    --font-size-h2: 72px;\n}\n\n.description {\n    text-align: center;\n    width: 100%;\n    text-shadow: 2px 2px 6px black;\n    max-width: 800px;\n    margin: 0 auto !important;\n    &[data-title='v'] {\n        font-weight: 700;\n    }\n    a {\n        text-decoration: underline !important;\n    }\n    .md ({\n        font-size: var(--font-size-4);\n    });;\n}\n\n.creditContent {\n    --font-weight-h1: 400;\n    --font-size-7: 3.5rem;\n    font-family: var(--font-family-h);\n    padding: 2rem;\n    display: grid;\n    grid-gap: 4rem;\n\n    h1 {\n        font-size: 130% !important;\n        text-transform: uppercase !important;\n        text-align: center;\n        margin-bottom: -0.525rem !important;\n    }\n    ul {\n        line-height: 1;\n        display: grid;\n        grid-gap: 1.5rem;\n\n        .md({\n            grid-template-columns: repeat(2, 1fr);\n                max-width: 75vw;\n        });\n\n        .lg({\n            grid-template-columns: repeat(3, 1fr);\n            max-width: 70vw;\n\n        });\n    }\n    li {\n        display: grid;\n        grid-gap: 0.25rem;\n        align-content: flex-start;\n        justify-content: center;\n        justify-items: center;\n        text-align: center;\n    }\n}\n\n.credit {\n    grid-column: 1/-1;\n}\n.name {\n    font-family: var(--font-family-h), 'DIN Next';\n    font-size: var(--font-size-4);\n    text-transform: uppercase;\n}\n\n.position {\n    opacity: var(--position-opacity);\n    line-height: 1.1;\n    font-size: var(--font-size-3);\n    color: var(--position-color);\n    [data-title='rdr2'] & {\n        font-size: var(--font-size-2);\n    }\n}\n\n/* iFruit credits */\n.originalPeople {\n    --font-family-h: SIGNPAINTER-HOUSESCRIPT;\n    --font-weight-h2: 400;\n    --font-weight-h3: 400;\n    --text-transform-h3: uppercase;\n\n    padding: 6rem 1rem;\n    display: grid;\n    justify-items: center;\n    text-align: center;\n    display: grid;\n    grid-gap: 8rem;\n    h2 {\n        grid-column: 1/-1;\n        font-size: 72px !important;\n        .smMax ({\n            font-size: var(--font-size-h2-mobile) !important;\n        });;\n    }\n    h3 {\n        --font-family-h: Chalet;\n        text-transform: uppercase;\n        font-size: 48px !important;\n    }\n    h4 {\n        font-size: 42px !important;\n        font-weight: 400;\n        --letter-spacing-h: normal;\n    }\n}\n.creditContentOld {\n    display: grid;\n    grid-gap: 0.5rem;\n    font-family: 'ChaletComprime';\n    font-size: 36px;\n}\n.creditSection {\n    display: grid;\n    grid-gap: 3rem;\n}\n\n.creditSectionInner {\n    display: grid;\n    grid-gap: 0.5rem;\n}\n", "/*\n * New Design System:\n * 1. Breakpoints\n * 2. Typography\n * 3. Variables\n * 4. Utility\n *     4.1 Flex\n *     4.2 Grid\n *     4.3 Max-Width\n *     4.4 Images\n *     4.5 Padding\n *     4.6 Fonts\n *     4.7 Games\n *     4.8 Tina\n *     4.9 Hacks\n * 5. Presentational\n */\n\n/* 1. Breakpoints */\n@screen-sm: 0px;\n@screen-md: 768px;\n@screen-lg: 1024px;\n@screen-xl: 1920px;\n@screen-xxl: 2560px;\n@sm-min-width: @screen-sm;\n@md-min-width: @screen-md;\n@lg-min-width: @screen-lg;\n@xl-min-width: @screen-xl;\n@xxl-min-width: @screen-xxl;\n@sm-max-width: (@md-min-width - 1px);\n@md-max-width: (@lg-min-width - 1px);\n@lg-max-width: (@xl-min-width - 1px);\n@xl-max-width: (@xxl-min-width - 1px);\n\n.sm(@rules) {\n    .smMin(@rules);\n}\n.smMin(@rules) {\n    @media (min-width: @sm-min-width) {\n        @rules();\n    }\n}\n.smMax(@rules) {\n    @media (max-width: @sm-max-width) {\n        @rules();\n    }\n}\n.smOnly(@rules) {\n    @media (min-width: @sm-min-width) and (max-width: @sm-max-width) {\n        @rules();\n    }\n}\n.md(@rules) {\n    .mdMin(@rules);\n}\n.mdMin(@rules) {\n    @media (min-width: @md-min-width) {\n        @rules();\n    }\n}\n.mdMax(@rules) {\n    @media (max-width: @md-max-width) {\n        @rules();\n    }\n}\n.mdOnly(@rules) {\n    @media (min-width: @md-min-width) and (max-width: @md-max-width) {\n        @rules();\n    }\n}\n.lg(@rules) {\n    .lgMin(@rules);\n}\n.lgMin(@rules) {\n    @media (min-width: @lg-min-width) {\n        @rules();\n    }\n}\n.lgMax(@rules) {\n    @media (max-width: @lg-max-width) {\n        @rules();\n    }\n}\n.lgOnly(@rules) {\n    @media (min-width: @lg-min-width) and (max-width: @lg-max-width) {\n        @rules();\n    }\n}\n.xl(@rules) {\n    .xlMin(@rules);\n}\n.xlMin(@rules) {\n    @media (min-width: @xl-min-width) {\n        @rules();\n    }\n}\n.xlMax(@rules) {\n    @media (max-width: @xl-max-width) {\n        @rules();\n    }\n}\n.xlOnly(@rules) {\n    @media (min-width: @xl-min-width) and (max-width: @xl-max-width) {\n        @rules();\n    }\n}\n.xxl(@rules) {\n    .xxlMin(@rules);\n}\n.xxlMin(@rules) {\n    @media (min-width: @xxl-min-width) {\n        @rules();\n    }\n}\n\n.notoBackup(@varName; @stdFont) {\n    @{varName}: @stdFont;\n\n    &:lang(ja_jp) {\n        @{varName}: @stdFont, NotoSansJP;\n    }\n    &:lang(zh_hans) {\n        @{varName}: @stdFont, NotoSansSC;\n    }\n    &:lang(zh_tw) {\n        @{varName}: @stdFont, NotoSansTC;\n    }\n}\n\n/* 2. Typography */\n.handleFontDeclarations() {\n    .notoBackup(--rsg-font-family-std, HelveticaNowText);\n    .notoBackup(--rsg-font-family-h, HelveticaNowDisplayBold);\n    .notoBackup(--gta-font-family-std, Chalet);\n    .notoBackup(--gta-font-family-h, ChaletComprime);\n    .notoBackup(--gta-font-family-badge, Pricedown);\n    .notoBackup(--rdr-font-family-std, HapnaSlabSerif);\n    .notoBackup(--rdr-font-family-h, RDRLino-Regular);\n    .notoBackup(--rdr-font-family-newswire-subtitle, HapnaSlabSerif);\n    .notoBackup(--rdr-area-font, RDRCatalogueBold);\n\n    --header-multiplier: var(--header-numerator, var(--root-font-size)) /\n        var(--root-font-size);\n    font-family: var(--font-family-std, HelveticaNowText);\n    font-weight: var(--font-weight-std, 400);\n    letter-spacing: var(--letter-spacing-std, -0.025em);\n    line-height: var(--line-height-std, 1.6);\n    font-size: calc(var(--root-font-size) * 1px);\n    -webkit-font-smoothing: antialiased;\n\n    h1.large,\n    h1,\n    h2,\n    h3,\n    h4 {\n        font-family: var(--font-family-h, HelveticaNowDisplayBold);\n        letter-spacing: var(--letter-spacing-h, -0.025em);\n    }\n    h1.large,\n    h1 {\n        font-weight: var(--font-weight-h1, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h1, var(--text-transform-h, none));\n        line-height: var(--line-height-h1, var(--line-height-h, 1.1));\n    }\n\n    h1.large {\n        font-size: calc(var(--font-size-8) * var(--header-multiplier));\n    }\n    h1 {\n        font-size: calc(var(--font-size-7) * var(--header-multiplier));\n    }\n    h2 {\n        font-size: calc(var(--font-size-6) * var(--header-multiplier));\n        font-weight: var(--font-weight-h2, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h2, var(--text-transform-h, none));\n        line-height: var(--line-height-h, 1.1);\n    }\n    h3 {\n        font-size: calc(var(--font-size-5) * var(--header-multiplier));\n        font-weight: var(--font-weight-h3, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h3, var(--text-transform-h, none));\n        line-height: var(--line-height-h, 1.1);\n\n        &[data-context='newswire-subtitle'] {\n            font-size: calc(\n                var(--font-size-5) *\n                    var(\n                        --h3-numerator-override-newswire-subtitle,\n                        var(--header-multiplier)\n                    )\n            );\n            font-weight: var(\n                --font-weight-newswire-subtitle,\n                var(--font-weight-h)\n            );\n            font-family: var(\n                --font-family-newswire-subtitle,\n                var(--font-family-h)\n            );\n            text-transform: var(--text-transform-newswire-subtitle);\n        }\n\n        .isRdr({\n            font-weight: var(--font-weight-h3, var(--font-weight-h, 400));\n        });\n    }\n\n    h4,\n    h5,\n    h6 {\n        font-size: calc(var(--font-size-4) * var(--header-multiplier));\n        line-height: var(--line-height-h, 1.1);\n    }\n}\n\n.handleColors() {\n    h1.large,\n    h1 {\n        color: var(--color-h-dynamic, var(--color-h1, var(--color-h, inherit)));\n    }\n    h2 {\n        color: var(--color-h-dynamic, var(--color-h2, var(--color-h, inherit)));\n    }\n    h3 {\n        color: var(--color-h-dynamic, var(--color-h3, var(--color-h, inherit)));\n\n        &[data-context='newswire-subtitle'] {\n            color: var(\n                --color-subtitle-dynamic,\n                var(--color-h-dynamic, var(--color-h3, var(--color-h, inherit)))\n            );\n        }\n    }\n    h4,\n    h5,\n    h6 {\n        color: var(--color-h-dynamic, var(--color-h, inherit));\n    }\n    background-color: var(--background-color, transparent);\n\n    [template='community'] {\n        --time-color: var(--body-color, #2d2d2d);\n        --breadcrumb-separator-filter-invert: invert(0);\n\n        main {\n            color: var(--color-h, #161616);\n        }\n        p {\n            color: var(--body-color, #2d2d2d);\n        }\n    }\n}\n\n/* 3. Variables */\n.resetVariables() {\n    --text-section-max-width: 640px;\n    --base-pixel-size: 12px;\n    --base-rem-size: 0.75rem;\n    --half-rem-size: calc(var(--base-rem-size) / 2);\n    --twice-rem-size: calc(var(--base-rem-size) * 2);\n    --section-margin-bottom: calc(var(--base-rem-size) * 4);\n    --header-height: 80px;\n    --breadcrumbs-height: calc(var(--base-pixel-size) * 3.5);\n    --max-width: 1920px;\n    --standard-color: #fcaf17;\n    --color-h: #ffffff;\n    --body-color: #e8e8e8;\n    --background-color: #0b0b0b;\n    --card-background-color: #000;\n    --border-color: #282828;\n    --privacy-banner-height: 0px;\n    --game-header-height: 50px;\n    --standard-grid-gap: calc(var(--base-rem-size) * 2);\n    --image-margin-bottom: inherit;\n    --image-rounding: 0px;\n    --image-rounding-static: 16px;\n    --image-rounding-static-sm: 8px;\n    --image-rounding-static-xs: 4px;\n\n    --grid-gap-static-xs: 0.5rem;\n    --grid-gap-static-sm: 1rem;\n    --grid-gap-static-md: 2rem;\n    --grid-gap-static-lg: 4rem;\n    --grid-gap-static-xl: 8rem;\n    .smMax({--grid-gap-static-lg: 2rem; --grid-gap-static-xl: 4rem;});\n\n    --max-width-static: 640px;\n    --max-width-static-md: 1088px;\n    --max-width-static-lg: 1920px;\n    --max-width-static-xl: 2560px;\n    .xxlMin({--max-width-static-md: 1440px;});\n\n    --margin-static: 0 0 2rem;\n    --h2-margin: 2rem 0 0 0;\n\n    --padding-sides: var(--grid-gap-static-lg);\n    --padding-top-bottom: var(--padding-sides);\n    --padding-static: var(--padding-sides);\n}\n\n/* 4. Utility */\n/* 4.1 Flex */\n.flex() {\n    display: flex;\n    flex-flow: column;\n}\n.horizontalCenterChildren() {\n    display: flex;\n    justify-content: center;\n}\n.verticalCenterChildren() {\n    display: flex;\n    align-items: center;\n}\n.flexCenterChildren() {\n    .horizontalCenterChildren();\n    .verticalCenterChildren();\n}\n\n/* 4.2 Grid */\n.gridMinWidth(@minWidth: 480px; @rowGap: var(--standard-grid-gap); @colGap: var(--standard-grid-gap); @autoType: 'auto-fit') {\n    display: grid;\n    grid-row-gap: @rowGap;\n    grid-column-gap: @colGap;\n    grid-template-columns: ~'repeat(@{autoType}, minmax(@{minWidth}, 1fr))';\n}\n.gridHideExtraRows(@colGap: var(--standard-grid-gap)) {\n    ::-webkit-scrollbar {\n        display: none;\n    }\n    -ms-overflow-style: none;\n    display: grid;\n    grid-auto-flow: column;\n    grid-column-gap: @colGap;\n    overflow-y: hidden;\n    scroll-snap-type: x mandatory;\n    > * {\n        scroll-snap-align: start;\n    }\n    --per-page: 4;\n    .lgMax({--per-page: 3;});\n    .mdMax({--per-page: 2;});\n    .smMax({--per-page: 1;});\n\n    grid-auto-columns: calc(\n        100% / var(--per-page) - (var(--per-page) - 1) / var(--per-page) *\n            @colGap\n    );\n}\n.gridNumCols(@numInitialItems) {\n    display: grid;\n    grid-gap: var(--standard-grid-gap);\n    .smMax({grid-template-columns: repeat(1, minmax(0px, 1fr)) ;});\n    @media screen and (min-width: @screen-sm) and (max-width: @md-max-width) {\n        grid-template-columns: repeat(2, minmax(0px, 1fr));\n    }\n    @media screen and (min-width: @screen-lg) {\n        grid-template-columns: repeat(4, minmax(0px, 1fr));\n    }\n}\n.gridNumColsSmall(@colGap: var(--padding-top-bottom); @rowGap: var(--padding-top-bottom)) {\n    display: grid;\n    grid-row-gap: @rowGap;\n    grid-column-gap: @colGap;\n    grid-template-columns: repeat(1, minmax(0px, 1fr));\n    .md({grid-template-columns: repeat(2, minmax(0px, 1fr)) ;});\n}\n\n.standardLayoutGridItem(@maxWidth: var(--max-width-static-md), @padding: var(--padding-static)) {\n    .handleMaxWidth(@maxWidth);\n    .handlePadding(@padding);\n}\n\n.handleGridStyles(@grid-gap-dynamic: var(--grid-gap-static-md)) {\n    --grid-gap-dynamic: @grid-gap-dynamic;\n    display: grid;\n    grid-template-columns: repeat(var(--grid-num-columns, 1), minmax(0px, 1fr));\n    grid-template: var(\n        --grid-template-override,\n        auto / repeat(var(--grid-num-columns, 1), minmax(0, 1fr))\n    );\n    grid-gap: var(--grid-gap-dynamic);\n    align-items: var(--grid-align-items);\n    align-content: var(--grid-align-content);\n    align-self: var(--grid-align-self);\n    justify-items: var(--grid-justify-items);\n    justify-content: var(--grid-justify-content);\n    justify-self: var(--grid-justify-self);\n}\n\n/* 4.3 Max-Width */\n.maxWidth(@padding: 0) {\n    max-width: var(--max-width);\n    width: 100%;\n    margin: 0 auto;\n    padding-left: @padding;\n    padding-right: @padding;\n}\n.maxWidthWithNormalPadding() {\n    .maxWidth(var(--padding-sides));\n}\n\n.handleMaxWidth(@max-width-default: 1000000px) {\n    width: 100%;\n    max-width: calc(\n        var(--max-width-dynamic, @max-width-default) +\n            var(--padding-dynamic, 0px) * 2\n    ) !important;\n    margin: 0 auto;\n}\n\n.breakout(@max-width-default: 100vw) {\n    @margin: calc((@max-width-default / 2) * -1);\n    width: @max-width-default;\n    max-width: @max-width-default !important;\n    position: relative;\n    left: 50%;\n    right: 50%;\n    margin-left: @margin;\n    margin-right: @margin;\n}\n\n.fullWidth() {\n    .breakout;\n}\n\n/* 4.4 Images */\n.handleAspectRatio() {\n    --aspect-ratio-default: 1;\n    .lgMin({\n        --aspect-ratio-default: 16/9;\n    });\n\n    position: relative;\n    &:before {\n        content: '';\n        height: 0;\n        width: 100%;\n        display: block;\n        padding-bottom: calc(\n            100% / calc(var(--aspect-ratio, var(--aspect-ratio-default)))\n        );\n    }\n    > * {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n    }\n}\n.setAspectRatio(@ratio) {\n    --aspect-ratio: @ratio;\n    .handleAspectRatio;\n}\n\n.handleParallaxPerspective() {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    overflow-x: hidden;\n    overflow-y: scroll;\n    perspective: var(--parallax-perspective);\n    perspective-origin: 0 0;\n}\n.handleParallaxDistance() {\n    transform: translateZ(var(--parallax-distance))\n        scale(\n            calc(\n                (var(--parallax-perspective) - var(--parallax-distance)) /\n                    var(--parallax-distance)\n            )\n        );\n}\n\n.handleImageRounding() {\n    border-radius: var(--image-rounding-dynamic, 0px);\n}\n\n/* 4.5 Padding */\n.handlePadding(@paddingSides: initial, @paddingTopBottom: initial) {\n    --padding-dynamic: @paddingSides;\n    --padding-dynamic-tb: @paddingTopBottom;\n\n    padding: var(--padding-t, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0) var(--padding-b, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0);\n}\n\n/* 4.6 Fonts */\n.loadFont(@family, @weight: 400, @style: normal, @file: @family) {\n    @font-face {\n        font-family: @family;\n        font-style: @style;\n        font-weight: @weight;\n        src: url('../fonts/@{file}.woff') format('woff');\n    }\n}\n.loadFontWoff2(@family, @weight: 400, @style: normal, @file: @family) {\n    @font-face {\n        font-family: @family;\n        font-style: @style;\n        font-weight: @weight;\n        src: url('../fonts/@{file}.woff2') format('woff2');\n    }\n}\n.fontClip(@backgroundImg) {\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    @backgroundImg();\n}\n\n/* 4.7 Games */\n.gta(@rules) {\n    [data-game^='gta'] {\n        @rules();\n    }\n}\n\n.isGta(@rules) {\n    [data-game^='gta'] & {\n        @rules();\n    }\n}\n\n.rdr(@rules) {\n    [data-game='rdo'],\n    [data-game^='rdr'] {\n        @rules();\n    }\n}\n\n.isRdr(@rules) {\n    [data-game='rdo'] &,\n    [data-game^='rdr'] & {\n        @rules();\n    }\n}\n\n/* 4.8 Tina */\n.tinaTextField() {\n    padding: var(--tina-padding-small);\n    border-radius: var(--tina-radius-small);\n    background: var(--tina-color-grey-0);\n    color: var(--tina-color-grey-10);\n    background-color: var(--tina-color-grey-0);\n    border: 1px solid var(--tina-color-grey-2);\n    box-shadow: 0 0 0 2px transparent;\n    margin-bottom: 14px;\n}\n\n/* 4.9 Hacks */\n.safariBorderRadiusOverflowFix() {\n    // https://stackoverflow.com/questions/49066011/overflow-hidden-with-border-radius-not-working-on-safari\n    -webkit-mask-image: -webkit-radial-gradient(white, black);\n}\n\n.forceGpuRendering() {\n    // https://web.dev/animations-guide/#force\n    transform: translateZ(0);\n}\n\n/* 5. Presentational */\n@locales: en_us, fr_fr, de_de, es_es, es_mx, it_it, pt_br, pl_pl, ru_ru, ja_jp,\n    ko_kr, zh_tw, zh_hans;\n\n.placeholder(@rules) {\n    &::-webkit-input-placeholder {\n        @rules();\n    }\n    &:-moz-placeholder {\n        @rules();\n    }\n    &::-moz-placeholder {\n        @rules();\n    }\n    &:-ms-input-placeholder {\n        @rules();\n    }\n}\n\n.bgImg() {\n    background-size: cover;\n    background-position: center center;\n    background-repeat: no-repeat;\n}\n\n.themeDark() {\n    color: #e8e8e8;\n    --tag-color: #e8e8e8;\n}\n\n.outbound() {\n    content: '';\n    display: inline-block;\n    background-size: 100%;\n    background-repeat: no-repeat;\n    background-position: 0% 50%;\n    vertical-align: baseline;\n    margin-left: var(--grid-gap-static-xs);\n    width: 1rem;\n    height: 1rem;\n    background-image: data-uri('../img/outbound.svg');\n}\n\n.blurryBg() {\n    transition: filter 0.8s;\n    filter: blur(var(--blur-because-in-bg, 0px));\n}\n\n.fancyLink() {\n    position: relative;\n    background: transparent;\n    padding: 0;\n    z-index: 1;\n    @media (min-width: @screen-sm) {\n        transition: all 0.2s ease;\n        &:before {\n            content: '';\n            display: block;\n            position: absolute;\n            bottom: 0;\n            left: -0.1rem;\n            width: calc(100% + 0.2rem);\n            height: 2px;\n            background: var(--body-color);\n            transition: all 0.2s ease;\n            z-index: -1;\n            border-radius: 0.25rem;\n        }\n        &:hover {\n            color: #161616;\n\n            &:before {\n                left: -0.25rem;\n                width: calc(100% + 0.5rem);\n                height: 100%;\n            }\n        }\n    }\n    img {\n        display: block;\n    }\n}\n.stdHover() {\n    transition:\n        color 0.2s ease,\n        opacity 0.2s ease;\n    &:hover {\n        color: var(--standard-color);\n        opacity: 1;\n    }\n}\n.stdIconHover() {\n    &:hover {\n        filter: brightness(0) saturate(100%) invert(76%) sepia(15%)\n            saturate(5173%) hue-rotate(348deg) brightness(105%) contrast(98%);\n    }\n}\n.card() {\n    .handleImageRounding;\n    --image-rounding-dynamic: var(--image-rounding-static-sm);\n    background: var(--card-background-color);\n    overflow: hidden;\n    display: flex;\n    flex-flow: column;\n    transition: transform 0.2s ease;\n    border: 1px solid var(--border-color);\n    .info {\n        .handleGridStyles;\n        --grid-gap-dynamic: var(--grid-gap-static-xs);\n        padding: 2rem 1.5rem;\n        .title {\n            --line-height-h: 1.3;\n            color: var(--color-h);\n        }\n    }\n}\n\n.cardHover() {\n    transition:\n        transform 0.3s cubic-bezier(0, 0, 0.5, 1),\n        box-shadow 0.3s cubic-bezier(0, 0, 0.5, 1);\n    box-shadow: 0px 0px 40px -25px rgba(0, 0, 0, 0);\n\n    &:hover {\n        transform: scale(1.025);\n        box-shadow: 0px 30px 40px -25px rgba(0, 0, 0, 1);\n    }\n}\n\n.cardSecondary() {\n    .card();\n    .info {\n        padding: 1.5rem;\n    }\n    .title {\n        font-size: var(--font-size-3);\n        font-weight: 400;\n    }\n}\n\n.cardTertiary() {\n    .cardSecondary();\n    --image-rounding-dynamic: 0;\n    --card-background-color: transparent;\n    grid-gap: var(--grid-gap-static-sm);\n    overflow: unset;\n    border: none;\n    .info {\n        padding: 0;\n    }\n    .img {\n        .handleImageRounding;\n        --image-rounding-dynamic: var(--image-rounding-static-sm);\n    }\n}\n\n.standardPage() {\n    .maxWidthWithNormalPadding;\n    padding-top: var(--padding-top-bottom);\n    padding-bottom: var(--padding-top-bottom);\n}\n\n.dropdownThing(@defaultDeg: 0deg; @openDeg: 180deg) {\n    position: relative;\n    padding-right: calc(var(--grid-gap-static-xs) + 24px);\n    .dropdownCaret(yellow; @defaultDeg; @openDeg);\n}\n.dropdownCaret(@color; @defaultDeg: 0deg; @openDeg: 180deg) {\n    &:after {\n        display: inline-block;\n        content: '';\n        position: absolute;\n        top: 0;\n        right: 0;\n        @img: '../img/dropdown-@{color}.svg';\n        background-image: data-uri(@img);\n        background-repeat: no-repeat;\n        width: image-width(@img);\n        height: 100%;\n        background-position: center;\n        background-size: 100%;\n        transform: rotate(@defaultDeg);\n        transition: transform 0.3s;\n        .open& {\n            transform: rotate(@openDeg);\n        }\n    }\n}\n\n.sectionHeader() {\n    margin: 0 0 1.5rem;\n    font-size: var(--font-size-5);\n    font-family: var(--font-family-h);\n    font-weight: var(--font-weight-h);\n    --line-height-h: 1.3;\n\n    .xlMin ({\n        font-size: var(--font-size-6);\n    });;\n}\n.sectionHeaderSmall() {\n    .sectionHeader;\n    font-size: var(--font-size-4);\n\n    .xlMin ({\n        font-size: var(--font-size-5);\n    });;\n}\n\n.tag() {\n    color: var(--tag-color, var(--body-color));\n    font-weight: 700;\n    font-size: var(--font-size-2);\n    line-height: 1.6;\n}\n\n.date() {\n    .tag;\n    font-weight: 400;\n    opacity: 0.65;\n}\n.animationFadeInUp() {\n    :global {\n        animation: globalFadeInUp 0.75s;\n        animation-play-state: paused;\n    }\n}\n.animationPaused() {\n    animation-play-state: paused;\n}\n.animationRunning() {\n    animation-play-state: running;\n}\n\n.button() {\n    font-weight: 700;\n    align-self: center;\n    display: inline-block;\n    text-transform: uppercase;\n    background: transparent;\n    border: 1px solid var(--color-h);\n    padding: 1rem 3rem;\n    color: inherit;\n    cursor: pointer;\n    border-radius: 0.25rem;\n    color: var(--color-h);\n    line-height: 100%;\n    transition: all 0.2s ease;\n    &:focus,\n    &:hover {\n        background: var(--standard-color);\n        border-color: var(--standard-color);\n        color: #161616;\n    }\n    &.secondary {\n        .fancyLink;\n        outline: none;\n        border: none;\n        text-transform: none;\n        font-weight: 400;\n        line-height: unset;\n        .smMin ({\n            &:before {\n                background: var(--standard-color);\n                height:4px;\n            }\n            &:focus,\n            &:hover {\n                &:before {\n                    left: -0.5rem;\n                    width: calc(100% + 1rem);\n                    height: 100%;\n                }\n            }\n         });;\n    }\n    &[disabled] {\n        opacity: 0.5;\n    }\n}\n\n.expandToEdges() {\n    margin-top: calc(var(--padding-top-bottom) * -1);\n    margin-left: calc(var(--padding-sides) * -1);\n    width: 100vw;\n    width: calc(100% + calc(var(--padding-sides) * 2));\n}\n\n.shadow(@boxShadow: 0 10px 30px rgba(0, 0, 0, 0.5)) {\n    // border: 1px solid rgba(0, 0, 0, 0.15);\n    box-shadow: @boxShadow;\n}\n.shadowTop() {\n    box-shadow: -3px -3px 6px 0 rgba(0, 0, 0, 0.2);\n}\n\n.aspect-ratio(@width, @height, @selector: div, @pre: ~'') {\n    @supports not (aspect-ratio: @width / @height) {\n        position: relative;\n        &:before {\n            display: block;\n            content: '';\n            width: 100%;\n            padding-top: calc((@height / @width) * 100%);\n        }\n        > @{pre}@{selector} {\n            position: absolute;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            width: 100% !important;\n            height: 100% !important;\n        }\n    }\n\n    @supports (aspect-ratio: @width / @height) {\n        @{pre}@{selector} {\n            aspect-ratio: @width / @height !important;\n            width: 100% !important;\n            height: auto !important;\n        }\n    }\n}\n.unset-aspect-ratio(@selector, @pre: ~'') {\n    @supports not (aspect-ratio: 1/1) {\n        position: unset;\n        &:before {\n            display: none;\n        }\n        > @{pre}@{selector} {\n            position: unset;\n            width: 100% !important;\n            height: unset !important;\n        }\n    }\n\n    @supports (aspect-ratio: 1/1) {\n        @{pre}@{selector} {\n            aspect-ratio: unset !important;\n        }\n    }\n}\n\n.rockstarTypography() {\n    --font-family-std: NeueHelveticaPaneuropean, sans-serif;\n    --leter-spacing-std: 0;\n\n    font-size: var(--font-size-2);\n    font-family: var(--font-family-std);\n    letter-spacing: var(--leter-spacing-std);\n\n    button {\n        letter-spacing: var(--leter-spacing-std);\n    }\n}\n\n.setNodeFontSizing() {\n    // TODO audit this. .5rem is very small.\n    --font-size-1: 0.75rem;\n\n    --font-size-2: 0.75rem;\n    --font-size-3: 1rem;\n    --font-size-4: 1.25rem;\n    --font-size-5: 1.5rem;\n    --font-size-6: 2rem;\n    --font-size-7: 2.5rem;\n    --font-size-8: 3rem;\n    --font-size-9: 4rem;\n    --font-size-10: 5rem;\n}\n\n.setRootFontSizing() {\n    .sm({--root-font-size: 16;});\n    .md({--root-font-size: 18;});\n    .lg({--root-font-size: 20;});\n    .xl({--root-font-size: 22;});\n}\n\n.button-text () {\n    font-size: var(--font-size-4);\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-sm);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    text-transform: uppercase;\n}\n\n.button-text-sm () {\n    .button-text;\n    font-size: var(--font-size-3);\n}\n\n.button-text-md () {\n    .button-text;\n    font-size: var(--font-size-4);\n    padding: 0 var(--padding-md);\n}\n\n.button-text-lg () {\n    .button-text;\n    font-size: var(--font-size-5);\n    padding: 0 var(--padding-lg);\n}\n\n.button-text-xl () {\n    .button-text;\n    font-size: var(--font-size-7);\n    padding: 0 var(--padding-xl);\n}\n\n.cta-button() {\n    @import '../less/gen9-vars';\n\n    --button-text-color-hover: var(--white-100);\n\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    gap: var(--grid-gap-xs, 0.5rem);\n\n    background: var(\n        --button-background-color,\n        var(--black-65, hsla(0, 0%, 7%, 0.65))\n    );\n    border: 1px solid var(--white-100, #fff);\n    border-radius: var(--border-radius-sm, 4px);\n    color: var(--button-text-color, var(--white-100));\n    cursor: pointer;\n    padding: 0 var(--padding-sm);\n\n    width: 100%;\n    height: var(--button-height-3, 3rem);\n\n    transition: all 0.3s ease-in-out;\n\n    &[data-brand='reddeadredemption'],\n    [data-brand='reddeadredemption'] & {\n        --accent-color: #cc0000;\n        --font-family-h: RDRUltra;\n\n        :lang(pl_pl) {\n            --font-family-h: RDRUltra, NeueHelveticaPaneuropean;\n        }\n    }\n\n    &[data-brand='bully'],\n    [data-brand='bully'] & {\n        --accent-color: #f8ad00;\n        --font-family-h: HelveticaNowDisplayBold;\n        --button-background-color: var(--white-100);\n        --button-background-color-hover: var(--accent-color);\n        --button-text-color: var(--black-100);\n        --button-text-color-hover: var(--black-100);\n\n        backdrop-filter: blur(25px);\n        padding: 0 var(--padding-md, 32px);\n    }\n\n    img {\n        height: 1rem;\n        width: auto;\n    }\n\n    .label {\n        .button-text();\n        display: flex;\n        flex-shrink: 0;\n    }\n\n    &.primary {\n        color: var(--black-100);\n        background-color: var(--white-100);\n    }\n\n    &:hover {\n        border-color: var(--accent-color, var(--btn-active-color));\n        background-color: var(--accent-color, var(--btn-active-color));\n        color: var(--button-text-color-hover, var(--btn-active-color));\n\n        &.primary {\n            color: var(--button-text-color-hover, var(--white-100));\n        }\n    }\n\n    @media (min-width: 1280px) {\n        padding: 0 var(--padding-md);\n    }\n\n    @media (min-width: 768px) and (max-width: 1539px) {\n        height: 2.5rem;\n\n        img {\n            height: 1rem;\n        }\n\n        .label {\n            .button-text-sm();\n        }\n    }\n}\n"],
        sourceRoot: ""
      }]), u.locals = {
        pillBtn: "rockstargames-sites-rockstargamesefd9a26211d2a6af9bf2ee5f3f1ff1ab",
        selected: "rockstargames-sites-rockstargamesb8593315bcfc0b018046dfd57cc7876a",
        allCredits: "rockstargames-sites-rockstargamesf7a7c76d475bd09c20a29f84955da885",
        hero: "rockstargames-sites-rockstargamesf5e04151b0ee11a4ec33543d6e61353c",
        logoLeft: "rockstargames-sites-rockstargamesbe0588e6483b4c6baaf9fdca3c08d22d",
        logoRight: "rockstargames-sites-rockstargamesf2d6e1f442642a213a8b067d3c188e06",
        heroContent: "rockstargames-sites-rockstargamesbd3782823e3d0e7347672ef3f677dc3e",
        logos: "rockstargames-sites-rockstargamesd3505d9aab5474e48595b2af055d9cbc",
        header: "rockstargames-sites-rockstargamesdf14f88f6bdbd500bf797bd76a28005f",
        description: "rockstargames-sites-rockstargamesed2a55697f5418d2a622238739cca6bd",
        creditContent: "rockstargames-sites-rockstargamesa5ceeb31417420b65bb64ed995dc4841",
        credit: "rockstargames-sites-rockstargamesf4e95ac7ec6e85f321acaf5c2246adf3",
        name: "rockstargames-sites-rockstargamesd02ccc389d442e5433ff5ab6fecc6a09",
        position: "rockstargames-sites-rockstargamescc36f0d36534abd657d69e9381d6de02",
        originalPeople: "rockstargames-sites-rockstargameseb3581889ef26100e095dbfac698d916",
        creditContentOld: "rockstargames-sites-rockstargamesaf8ab3ea585e1c8c23ca7ab0b0ff339a",
        creditSection: "rockstargames-sites-rockstargamesaef86015783d6ce28bb7b88331b9adb6",
        creditSectionInner: "rockstargames-sites-rockstargamesb525e8bb6213678232c2815dfc948151"
      };
      const N = u
    },
    66342: n => {
      var e = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "CreditData"
          },
          variableDefinitions: [{
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
              value: !0
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "title"
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
                value: "needsIfruit"
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
              name: {
                kind: "Name",
                value: "creditsForTitle"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "title"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "title"
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
                    value: "business_title"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "division"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "preferred_name"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "creditsIfruit"
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
                      value: "needsIfruit"
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
                    value: "static_json"
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
          end: 277
        }
      };

      function a(n, e) {
        if ("FragmentSpread" === n.kind) e.add(n.name.value);
        else if ("VariableDefinition" === n.kind) {
          var t = n.type;
          "NamedType" === t.kind && e.add(t.name.value)
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
        body: "query CreditData(\n    $cache: Boolean = true\n    $title: String!\n    $needsIfruit: Boolean!\n) {\n    creditsForTitle(title: $title) {\n        business_title\n        division\n        preferred_name\n    }\n    creditsIfruit @include(if: $needsIfruit) {\n        static_json\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var t = {};

      function i(n, e) {
        for (var a = 0; a < n.definitions.length; a++) {
          var t = n.definitions[a];
          if (t.name && t.name.value == e) return t
        }
      }
      e.definitions.forEach((function(n) {
        if (n.name) {
          var e = new Set;
          a(n, e), t[n.name.value] = e
        }
      })), n.exports = e, n.exports.CreditData = function(n, e) {
        var a = {
          kind: n.kind,
          definitions: [i(n, e)]
        };
        n.hasOwnProperty("loc") && (a.loc = n.loc);
        var r = t[e] || new Set,
          o = new Set,
          d = new Set;
        for (r.forEach((function(n) {
            d.add(n)
          })); d.size > 0;) {
          var s = d;
          d = new Set, s.forEach((function(n) {
            o.has(n) || (o.add(n), (t[n] || new Set).forEach((function(n) {
              d.add(n)
            })))
          }))
        }
        return o.forEach((function(e) {
          var t = i(n, e);
          t && a.definitions.push(t)
        })), a
      }(e, "CreditData")
    },
    32285: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/3fe8797afe413a7c8aa3f6841b88aca1.ttf"
    },
    20629: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/a0a8cf635f2f27fc761850d82537fd01.woff"
    },
    25558: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/c0257a179038b1bb283cadde55a79754.woff"
    },
    56671: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/957df389ecb82872649ee4a2d24cfce8.svg"
    },
    3990: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/810cc0e03ed55fec946f09be5c6835a7.svg"
    },
    1995: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/76e71e4362cea80794e0585bb0899a76.svg"
    },
    80407: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9a166befe9687a81dc78d037b632f769.jpg"
    },
    42288: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/65920a68214deec38639190cf9506fd0.svg"
    },
    56923: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2a4552a53cb5a8dcb534bbadad91a2dc.jpg"
    }
  }
]);