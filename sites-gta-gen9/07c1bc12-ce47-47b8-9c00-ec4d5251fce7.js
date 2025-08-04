try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    s = (new e.Error).stack;
  s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "07c1bc12-ce47-47b8-9c00-ec4d5251fce7", e._sentryDebugIdIdentifier = "sentry-dbid-07c1bc12-ce47-47b8-9c00-ec4d5251fce7")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "dde524f11ca2e811c948d868f62c7d544de61cc3",
    packageName: "@rockstargames/sites-gta-gen9",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "dde524f11ca2e811c948d868f62c7d544de61cc3"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [7547, 9928], {
    2661: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4639a2711d1bca49a87c302784050ee3.png"
    },
    7502: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/48754c6fc2f75b0554098423f2bda6d1.png"
    },
    9333: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8787df71c723ebe44f82fd13ed216e09.jpg"
    },
    16046: (e, s, t) => {
      "use strict";
      t.d(s, {
        A: () => f
      });
      var a = t(62229),
        r = t(23205),
        d = t(59740),
        c = t(95966);
      const n = {
        deprecatedCarousel: "rockstargames-sites-gta-gen9a531264d5417d2198d4e14aa72335af1",
        "swiper-scrollbar-disabled": "rockstargames-sites-gta-gen9ee2324d6dd93a95776b1e2d14d0f529d",
        "swiper-horizontal": "rockstargames-sites-gta-gen9b823bbff86d38da8cb611a7c3367d8fe",
        "swiper-vertical": "rockstargames-sites-gta-gen9d29252354bbbfe413678daff5223169d",
        renderedWithChildren: "rockstargames-sites-gta-gen9ad7696edafa3086969e7aaece4f09b4f",
        panorama: "rockstargames-sites-gta-gen9ff63f8addff8d036ca0b65fa495e1653",
        img: "rockstargames-sites-gta-gen9d8e66128b4fef1ea164350cd535e2d68",
        hideMobile: "rockstargames-sites-gta-gen9f3445a74a067bd92ff94b521cb0bdc07",
        hideLarge: "rockstargames-sites-gta-gen9a6c9173aa5a8fe31a062251352a9d711",
        imageAreaBg: "rockstargames-sites-gta-gen9dcb2b41007683141579697bb4a8658ba",
        infinite_false: "rockstargames-sites-gta-gen9b85758ee99a52896b94130d002e821c7",
        track: "rockstargames-sites-gta-gen9c7c21df4f7f83a73f79dd7913aa87832",
        perico: "rockstargames-sites-gta-gen9aa50a9164fd0296b1196d441233cc348",
        dotsSlide: "rockstargames-sites-gta-gen9b8fd11776fba32f9663bbb6292a5c901",
        siblings: "rockstargames-sites-gta-gen9f4c50c0daadf81cd292587fcfea1339d",
        active: "rockstargames-sites-gta-gen9fdc2ec652cbb7469f602e73cd10ef997",
        "swiper-preloader-spin": "rockstargames-sites-gta-gen9c39b97f81c73d75dc4e013fde14aff18"
      };
      var i = t(19991),
        l = t(80195),
        o = t(70954);
      const g = e => {
          let {
            item: s
          } = e;
          return (0, o.jsxs)("div", {
            children: [(0, o.jsx)(l.A, {
              image: s?.image,
              badge: s?.badge ?? s?.image?.badge,
              badgeType: "badge3",
              role: s?.role ?? s?.image?.role,
              splitter: s?.splitter ?? s?.image?.splitter,
              type: s?.type,
              ariaLabel: s?.image?.ariaLabel ?? s.description,
              style: s?.style,
              className: (0, c.classList)(n.img, s?.className)
            }), (s?.title || s?.description) && (0, o.jsx)(i.A, {
              item: s
            })]
          })
        },
        m = e => {
          let {
            current: s,
            total: t
          } = e;
          return (0, o.jsx)("div", {
            className: "swiper-scrollbar",
            style: {
              "--current-slide": s,
              "--total-slides": t
            },
            children: (0, o.jsx)("div", {
              className: "swiper-scrollbar-drag"
            })
          })
        },
        f = e => {
          let {
            children: s,
            items: t = [],
            style: l = {},
            noInfiniteScroll: f = !1,
            className: u = "",
            renderTemplate: b = "standard",
            text: p,
            customSpaceBetween: h = null,
            centerSlides: k = !0,
            centeredSlidesBounds: y = !1
          } = e;
          const [x, j] = (0, a.useState)(0), _ = (0, a.useMemo)((() => s && Array.isArray(s) ? s.map((() => (0, d.A)())) : null), [s]);
          if (!(t && 0 !== t?.length || s)) return null;
          const v = {
            0: {
              spaceBetween: h ?? 16
            },
            1024: {
              spaceBetween: h ?? 18
            },
            1920: {
              spaceBetween: h ?? 20
            },
            2560: {
              spaceBetween: h ?? 22
            }
          };
          return (0, o.jsxs)("div", {
            className: (0, c.classList)(n.deprecatedCarousel, n[b], n[`infinite_${!f}`], s ? n.renderedWithChildren : "", u),
            style: l,
            children: [(0, o.jsxs)(r.RC, {
              loop: !f,
              grabCursor: !0,
              centeredSlides: k,
              centerInsufficientSlides: k,
              slidesPerView: "auto",
              speed: 700,
              breakpoints: v,
              onUpdate: () => j(0),
              onActiveIndexChange: e => j(e?.realIndex ?? 0),
              centeredSlidesBounds: y,
              children: [(0, o.jsx)("div", {
                className: n.trackWrapper,
                children: (0, o.jsxs)("div", {
                  className: n.track,
                  children: [t?.map((e => (0, o.jsx)(r.qr, {
                    children: (0, o.jsx)(g, {
                      item: e
                    })
                  }, e.key))), s && s.map(((e, s) => e && (0, o.jsx)(r.qr, {
                    children: e
                  }, _ && _[s])))]
                })
              }), (0, o.jsx)(m, {
                current: x,
                total: s ? s.length : t.length
              })]
            }), (p?.title || p?.description) && (0, o.jsx)(i.A, {
              item: p
            })]
          })
        }
    },
    16386: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/898794daaec68a69ef5ec4afaefe1948.png"
    },
    19991: (e, s, t) => {
      "use strict";
      t.d(s, {
        A: () => o
      });
      var a = t(95966),
        r = t(40118),
        d = t(40908),
        c = t(33011);
      const n = "rockstargames-sites-gta-gen9acd27eff2209196752622710f7b27558";
      var i = t(70954);
      const l = e => {
          let {
            to: s,
            children: t
          } = e;
          return s ? (0, i.jsx)("a", {
            href: s,
            target: "_blank",
            rel: "noreferrer",
            children: t
          }) : t
        },
        o = e => {
          let {
            item: s,
            className: t = ""
          } = e;
          return (0, i.jsxs)("div", {
            className: (0, a.classList)("rockstargames-sites-gta-gen9f8bc9589974046cdac4a2264be12d2df", t),
            children: [s.title && (0, i.jsx)(l, {
              to: s?.href ?? s?.to,
              children: (0, i.jsx)("h3", {
                children: s.title
              })
            }), Array.isArray(s?.description?.content) ? s.description.content?.map(((e, s) => e?.unorderedList ? (0, i.jsx)(d.A, {
              columns: e.unorderedList.columns ?? null,
              style: {
                "--unordered-list-padding": "var(--grid-gap-static-sm)",
                "--unordered-list-margin-bottom": ".5rem"
              },
              noImg: !0,
              list: e.unorderedList.list
            }, s) : e?.image ? (0, i.jsx)(r.A, {
              image: e.image,
              className: e?.className
            }, s) : e?.separator ? (0, i.jsx)("div", {
              style: {
                margin: `${e.separator.spacing} 0`
              },
              children: (0, i.jsx)(c.A, {})
            }, s) : (0, i.jsx)("p", {
              children: (0, i.jsx)("span", {
                className: n,
                dangerouslySetInnerHTML: {
                  __html: e
                }
              })
            }, s))) : (0, i.jsx)("span", {
              className: n,
              dangerouslySetInnerHTML: {
                __html: s.description
              }
            })]
          })
        }
    },
    22154: (e, s, t) => {
      "use strict";
      t.d(s, {
        A: () => c
      });
      var a = t(62229),
        r = t(82777),
        d = t(70954);
      const c = e => {
        let {
          children: s,
          ...t
        } = e;
        const [c, n] = (0, a.useState)(!1);
        return (0, d.jsx)(r.zb, {
          ...t,
          onReady: () => {
            document.fonts.ready.then((() => {
              n(!0)
            }))
          },
          children: s
        })
      }
    },
    24970: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e111377ba943e9eefaa9204f77c77093.png"
    },
    28839: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61ae357c3bfbabb5d765e9a7c794d08f.png"
    },
    33011: (e, s, t) => {
      "use strict";
      t.d(s, {
        A: () => d
      });
      const a = {
        hr: "rockstargames-sites-gta-gen9dc7b1bc141e132d4ee9b7bf9d55c573a",
        redLine: "rockstargames-sites-gta-gen9d4d968b41ef87926b0b6318e8647738b",
        gtao: "rockstargames-sites-gta-gen9f66c75c6e882da85fef31e4211ca0be2"
      };
      var r = t(70954);
      const d = e => {
        let {
          style: s,
          className: t = "",
          type: d = ""
        } = e;
        return (0, r.jsx)("div", {
          style: s,
          className: [a.hr, a[d], t].join(" ")
        })
      }
    },
    38635: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6e77bb0f25a6ea37e8d831b12df9fa3c.png"
    },
    40118: (e, s, t) => {
      "use strict";
      t.d(s, {
        A: () => i
      });
      var a = t(72405),
        r = t(95966);
      const d = "rockstargames-sites-gta-gen9c8dc03880ce2e12f3fdea5b5b587f27f";
      var c = t(70954);
      const n = e => {
          let {
            alt: s,
            className: a,
            src: d,
            style: n
          } = e;
          const [i, l] = (0, r.usePreloadImg)(d);
          let o = d;
          !1 === i && ("rockstargames-sites-gta-gen9a6a06e2d5c4f1811ea39d17312ca2e67" === a && (o = t(28839)), o = t(9333));
          const {
            width: g,
            height: m
          } = l, f = {
            "--aspect-ratio": Number.isNaN(g / m) ? "" : g / m,
            ...n
          };
          return (0, c.jsx)("img", {
            src: o,
            className: a ?? "",
            alt: s,
            style: f
          })
        },
        i = e => {
          let {
            className: s,
            style: i = {},
            image: l = {},
            imageStyle: o = {}
          } = e, {
            alt: g,
            src: m
          } = (0, a.S1)(l);
          const {
            isMobile: f
          } = (0, r.useWindowResize)();
          m.desktop || m.mobile || (g = "", m = {
            mobile: t(28839),
            desktop: t(9333)
          });
          let u = l.frame ? `${l.frame} ${d}` : d;
          return (0, c.jsx)("div", {
            className: u,
            style: i,
            children: (0, c.jsx)(n, {
              style: {
                ...o,
                ...l?.style
              },
              src: f ? m.mobile || m.desktop : m?.desktop || m?.mobile,
              alt: g,
              className: s
            })
          })
        }
    },
    40908: (e, s, t) => {
      "use strict";
      t.d(s, {
        A: () => o
      });
      var a = t(62229),
        r = t(30340),
        d = t.n(r),
        c = t(95966);
      const n = {
        pillBtn: "rockstargames-sites-gta-gen9d45dcc8e4008f8620987ea3033e4373d",
        selected: "rockstargames-sites-gta-gen9de1852cf9b8b4b71bcc67f8e66552c46",
        grid: "rockstargames-sites-gta-gen9c157d94760f0476ea06aa04da4e86727",
        itemList: "rockstargames-sites-gta-gen9a1ccd04246730848111c4868ccba6294",
        gtaplus: "rockstargames-sites-gta-gen9c5d92b0365dc60e6b93d321e9139e9f3",
        rdo: "rockstargames-sites-gta-gen9cc490e805fe55ab86a3ec5df2a5131e3",
        noImg: "rockstargames-sites-gta-gen9b239e263450a84fffba43a94c194d606",
        gtao: "rockstargames-sites-gta-gen9f4bc90102d24f73cb2d45d3821bfd32e",
        custom: "rockstargames-sites-gta-gen9ef5369875ddc5d9d7ad36eadc8afab2e",
        yellow: "rockstargames-sites-gta-gen9bdb57ca410954012dfd4711c67fc2a18",
        hotPink: "rockstargames-sites-gta-gen9fa9be84c85fca4e66b2489e1e52a2e6a",
        red: "rockstargames-sites-gta-gen9c446b758dbe82ad97444174f4d0b4abe",
        turquoise: "rockstargames-sites-gta-gen9b03c0798d8655dd98518b2f0dc002f06",
        purple: "rockstargames-sites-gta-gen9f14d63f28dd73c05cf950a08d8b8f501",
        teal: "rockstargames-sites-gta-gen9a0aaa124176430b6ad4f959cf136e7a3",
        blue: "rockstargames-sites-gta-gen9df5c0d39e32be4e6977bb1d638ed2340",
        green: "rockstargames-sites-gta-gen9ea2d0d0e1e32d8e48d79a0ad80a4c8ac",
        darkRed: "rockstargames-sites-gta-gen9a6a078bd68ef39e719c21e5db6329642",
        darkBlue: "rockstargames-sites-gta-gen9aa460ec14f75c93c2ba386a115ea407c",
        goldenrod: "rockstargames-sites-gta-gen9a55d762df7035a2394c9ffbfcbf1a0db",
        skull: "rockstargames-sites-gta-gen9a034e7482e8f28c66ec657f72bb93749"
      };
      var i = t(70954);
      const {
        sanitize: l
      } = d(), o = e => {
        let {
          list: s,
          string: t,
          starColor: r,
          style: d,
          className: o,
          game: g,
          noImg: m,
          columns: f,
          mobileColumns: u
        } = e;
        const [b, p] = (0, a.useState)(null), h = t ? t.split("_#_") : s;
        if ((0, a.useEffect)((() => {
            p(s)
          }), [s]), !t && !s) return null;
        const k = {
          color: d?.color
        };
        return delete d?.color, f && b ? (0, i.jsx)("div", {
          className: n.grid,
          style: {
            "--unordered-list-grid-column": f,
            "--unordered-list-grid-column-mobile": u ?? f
          },
          children: (0, i.jsx)("ul", {
            className: (0, c.classList)(n.itemList, n.noImg, n[r], n[g]),
            style: (0, c.safeStyles)(d),
            children: b.map(((e, s) => (0, i.jsx)("li", {
              style: k,
              dangerouslySetInnerHTML: {
                __html: l(e.content)
              }
            }, s)))
          })
        }) : (0, i.jsx)("ul", {
          style: (0, c.safeStyles)(d),
          className: (0, c.classList)(n.itemList, n.custom, m ? n.noImg : "", r ? n[r] : "", g ? n[g] : "", o ?? ""),
          children: h.map(((e, s) => (0, i.jsx)("li", {
            dangerouslySetInnerHTML: {
              __html: l(e?.content ?? e)
            }
          }, s)))
        })
      }
    },
    50911: (e, s, t) => {
      "use strict";
      t.d(s, {
        i: () => l,
        o: () => i
      });
      var a = t(62229),
        r = t(95966),
        d = t(70954);
      const c = (0, r.setContextItem)({
          context: (0, a.createContext)(),
          key: "tinaPayloadContext"
        }),
        {
          Provider: n
        } = c,
        i = e => {
          let {
            children: s,
            payload: t
          } = e;
          return (0, d.jsx)(n, {
            value: t,
            children: s
          })
        },
        l = () => (0, a.useContext)(c)
    },
    59740: (e, s, t) => {
      "use strict";
      t.d(s, {
        A: () => i
      });
      const a = {
        randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto)
      };
      let r;
      const d = new Uint8Array(16);

      function c() {
        if (!r && (r = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !r)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return r(d)
      }
      const n = [];
      for (let e = 0; e < 256; ++e) n.push((e + 256).toString(16).slice(1));
      const i = function(e, s, t) {
        if (a.randomUUID && !s && !e) return a.randomUUID();
        const r = (e = e || {}).random || (e.rng || c)();
        if (r[6] = 15 & r[6] | 64, r[8] = 63 & r[8] | 128, s) {
          t = t || 0;
          for (let e = 0; e < 16; ++e) s[t + e] = r[e];
          return s
        }
        return function(e, s = 0) {
          return n[e[s + 0]] + n[e[s + 1]] + n[e[s + 2]] + n[e[s + 3]] + "-" + n[e[s + 4]] + n[e[s + 5]] + "-" + n[e[s + 6]] + n[e[s + 7]] + "-" + n[e[s + 8]] + n[e[s + 9]] + "-" + n[e[s + 10]] + n[e[s + 11]] + n[e[s + 12]] + n[e[s + 13]] + n[e[s + 14]] + n[e[s + 15]]
        }(r)
      }
    },
    59928: (e, s, t) => {
      "use strict";
      t.r(s), t.d(s, {
        default: () => k
      });
      var a = t(19991),
        r = t(80195),
        d = t(16046);
      const c = {
        padding: "rockstargames-sites-gta-gen9ac767e959939b4d56b2358cb263d07ad",
        carouselWrapper: "rockstargames-sites-gta-gen9fabefc39343f6c494eb3d049757d89c5",
        carouselTitle: "rockstargames-sites-gta-gen9e9e0ef1bfc3699b1e50c33dd0ce8e76a"
      };
      var n = t(70954);
      const i = e => {
          let {
            to: s,
            children: t
          } = e;
          return s ? (0, n.jsx)("a", {
            href: s,
            target: "_blank",
            children: t
          }) : t
        },
        l = e => {
          let {
            items: s = [],
            text: t = {},
            style: l,
            className: o = "",
            id: g = null
          } = e;
          return s?.length ? (0, n.jsxs)("div", {
            id: g,
            "data-testid": `carousel${o&&`-${o}`}-group-of-items`,
            children: [(0, n.jsx)(d.A, {
              style: l,
              className: [o, c.carouselWrapper].join(" "),
              children: s.map((e => (0, n.jsxs)("div", {
                id: e?.id ?? null,
                children: [(0, n.jsx)(r.A, {
                  image: e?.image,
                  badge: e?.badge ?? e?.image?.badge,
                  badgeType: "badge3",
                  role: e?.role ?? e?.image?.role,
                  splitter: e?.splitter ?? e?.image?.splitter,
                  type: e?.type,
                  ariaLabel: e?.image?.ariaLabel ?? e.description,
                  style: e?.style,
                  className: [c.img, e?.className].join(" ")
                }), e.title && (0, n.jsx)(i, {
                  to: e?.to,
                  children: (0, n.jsx)("h4", {
                    className: c.carouselTitle,
                    children: e.title
                  })
                }), e.description && (0, n.jsx)("span", {
                  className: c.description,
                  dangerouslySetInnerHTML: {
                    __html: e.description
                  }
                })]
              }, e?.key ?? e?.title)))
            }), t?.title || t?.description ? (0, n.jsx)("div", {
              className: c.padding,
              style: t?.style ?? {},
              children: (0, n.jsx)(a.A, {
                item: t
              })
            }) : ""]
          }) : null
        };
      var o = t(31879),
        g = t.n(o),
        m = t(92440),
        f = t(95966);
      const u = e => {
          let {
            impressionTracking: s,
            gtm: t = {},
            children: a
          } = e;
          return s?.shouldTrack ? (0, n.jsx)(m.InViewTracker, {
            threshold: s?.threshold,
            gtm: t,
            children: a
          }) : a
        },
        b = e => {
          let {
            to: s,
            children: t
          } = e;
          return s ? (0, n.jsx)("a", {
            href: s,
            target: "_blank",
            rel: "noreferrer",
            children: t
          }) : t
        },
        p = e => {
          let {
            item: s
          } = e;
          return s?.videoId ? (0, n.jsx)(g(), {
            context: "site",
            autoplay: !1,
            id: s.videoId
          }) : (0, n.jsx)(r.A, {
            image: s?.image,
            badge: s?.badge ?? s?.image?.badge,
            badgeType: "badge3",
            role: s?.role ?? s?.image?.role,
            splitter: s?.splitter ?? s?.image?.splitter,
            ariaLabel: s?.image?.ariaLabel,
            style: s?.style,
            className: s?.className
          })
        },
        h = e => {
          let {
            items: s,
            style: t = {},
            className: r = "",
            id: d = null
          } = e;
          return (0, n.jsx)("div", {
            style: t,
            className: (0, f.classList)("rockstargames-sites-gta-gen9d38af92e8657708abd3dc5295e62476c", r),
            id: d,
            "data-testid": "standard-group-of-items",
            children: s.map((e => (0, n.jsx)(u, {
              impressionTracking: e?.impressionTracking,
              gtm: e?.gtm,
              children: (0, n.jsx)(b, {
                to: e?.to,
                children: (0, n.jsxs)("div", {
                  className: (0, f.classList)("rockstargames-sites-gta-gen9a9b63d3aa2f18fa6c84b19c8993a7893", e.className),
                  style: e?.style ?? {},
                  ...e?.props,
                  children: [e?.image || e?.videoId ? (0, n.jsx)(p, {
                    item: e
                  }) : "", e.title || e.description ? (0, n.jsx)(a.A, {
                    item: e,
                    className: "rockstargames-sites-gta-gen9bc47d354556b20071313d2c1ccc3debd"
                  }) : ""]
                })
              })
            }, e.key)))
          })
        },
        k = e => {
          let {
            children: s = null,
            text: t = {},
            items: a = [],
            renderTemplate: r = "",
            style: d = {},
            id: c = null,
            ...i
          } = e;
          if (!a.length) return null;
          switch (r) {
            case "carousel":
              return (0, n.jsx)(l, {
                text: t,
                items: a,
                style: d,
                id: c,
                children: s
              });
            case "carousel-panorama":
              return (0, n.jsx)(l, {
                text: t,
                items: a,
                style: d,
                className: "panorama",
                id: c,
                children: s
              });
            default:
              return (0, n.jsx)(h, {
                items: a,
                style: d,
                id: c,
                ...i,
                children: s
              })
          }
        }
    },
    60540: (e, s, t) => {
      "use strict";
      t.d(s, {
        A: () => i
      });
      var a = t(40118),
        r = t(22154);
      const d = {
        badge: "rockstargames-sites-gta-gen9b7268b0e907630904b6689af83fee8e3",
        badgeSizeUpdate: "rockstargames-sites-gta-gen9ce8632d7464b556158a1d549f653498c",
        badge2: "rockstargames-sites-gta-gen9d08ce7145bc9562355a3984f8ccc9313",
        badge3: "rockstargames-sites-gta-gen9c7c60cfb12b6e9be68893c60814b3ed7"
      };
      var c = t(70954);
      const n = e => {
          let {
            wrapper: s,
            children: t,
            role: a,
            splitter: r
          } = e;
          return r || a ? s(t) : t
        },
        i = e => {
          let {
            badge: s,
            badgeType: i,
            role: l,
            splitter: o
          } = e;
          const g = [];
          return o ? s.split(o).map(((e, s) => g.push(e))) : g.push(s), (0, c.jsxs)(n, {
            splitter: o,
            role: l,
            wrapper: e => (0, c.jsx)("div", {
              className: `${d.badge} ${i?d[i]:""} `,
              children: e
            }),
            children: [(0, c.jsx)(c.Fragment, {
              children: l && (0, c.jsx)(a.A, {
                image: {
                  alt: l,
                  desktop: t(65287)(`./${l}.png`)
                }
              })
            }), (0, c.jsx)(r.A, {
              className: `${o||l?"":d.badge} ${i?d[i]:""}`,
              min: 8,
              max: 1e3,
              mode: o || l ? "single" : "multi",
              children: g[0]
            }), (0, c.jsx)(c.Fragment, {
              children: g.shift() && o && g.length >= 1 && (0, c.jsx)(r.A, {
                min: 8,
                max: 1e3,
                mode: "single",
                forceSingleModeWidth: !0,
                children: g.join(" ")
              })
            })]
          }, "badge-wrapper")
        }
    },
    65287: (e, s, t) => {
      var a = {
        "./bounty.png": 7502,
        "./collector.png": 24970,
        "./moonshiner.png": 2661,
        "./naturalist.png": 16386,
        "./trader.png": 38635
      };

      function r(e) {
        var s = d(e);
        return t(s)
      }

      function d(e) {
        if (!t.o(a, e)) {
          var s = new Error("Cannot find module '" + e + "'");
          throw s.code = "MODULE_NOT_FOUND", s
        }
        return a[e]
      }
      r.keys = function() {
        return Object.keys(a)
      }, r.resolve = d, e.exports = r, r.id = 65287
    },
    72405: (e, s, t) => {
      "use strict";
      t.d(s, {
        C1: () => i,
        S1: () => n,
        XC: () => m,
        jS: () => l,
        qg: () => o,
        z0: () => g
      });
      var a = t(62229),
        r = t(95966),
        d = t(50911);
      const c = e => {
          if (!e) return null;
          const {
            hostname: s,
            pathname: t
          } = new URL(e, (0, r.getCdnPrefix)(!0));
          return "/" === t ? null : (s.endsWith(".akamaized.net"), e)
        },
        n = e => {
          let {
            alt: s = null,
            mobile: t = null,
            desktop: n = null,
            ariaLabel: i = null,
            sources: l = null,
            prod: o = null
          } = e;
          const g = (0, r.useLocale)(),
            {
              meta: m = {}
            } = (0, d.i)() ?? {},
            [f, u] = (0, a.useState)(o ?? m?.cdn ?? m?.prod ?? !0);
          (0, a.useEffect)((() => {
            u(o ?? m?.cdn ?? m?.prod ?? !0)
          }), [o, m]);
          const b = (0, a.useCallback)((e => {
            const s = null !== l,
              t = e?.previewSrc ?? e ?? null;
            if (null === t || "string" != typeof t) return null;
            if (t.startsWith("http")) return c(t);
            const a = `${s?(0,r.getCdnPrefix)(f):""}${t}`;
            return c(a)
          }), [f, l]);
          return {
            alt: s,
            ariaLabel: i,
            src: {
              mobile: b(l?.[g]?.mobile ?? l?.en_us?.mobile ?? t),
              desktop: b(l?.[g]?.desktop ?? l?.en_us?.desktop ?? n)
            }
          }
        },
        i = e => {
          const s = (0, d.i)() ?? {},
            {
              meta: t = {}
            } = s,
            [n, i] = (0, a.useState)(t?.cdn ?? t?.prod ?? !1);
          return (0, a.useEffect)((() => {
            i(t?.cdn ?? t?.prod ?? !1)
          }), [t]), e ? e?.startsWith("http") ? c(e) : c(`${(0,r.getCdnPrefix)(n)}${e}`) : null
        },
        l = () => {
          const e = (0, d.i)() ?? {},
            {
              meta: s = {}
            } = e,
            t = (0, a.useMemo)((() => s?.cdn ?? s?.prod ?? !1), [s]);
          return (0, a.useCallback)((function(e) {
            let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const a = s?.prod ?? t;
            return e ? e?.startsWith("http") ? c(e) : c(`${(0,r.getCdnPrefix)(a)}${e}`) : null
          }), [t])
        },
        o = e => e.full_src,
        g = e => {
          const s = e?.previewSrc ?? e?.preview_src ?? e;
          return s?.startsWith("http") ? s : `${(0,r.getCdnPrefix)(!1)}${s}`
        },
        m = e => e.meta.uploads_directory
    },
    80195: (e, s, t) => {
      "use strict";
      t.d(s, {
        A: () => l
      });
      var a = t(62229),
        r = t(95966),
        d = t(60540),
        c = t(40118);
      var n = t(70954);
      const i = e => {
          let {
            hero: s,
            children: t
          } = e;
          return s ? (0, n.jsx)("div", {
            className: "rockstargames-sites-gta-gen9a429886d721550d02521f7f5c9de7f5b",
            children: t
          }) : t
        },
        l = e => {
          let {
            badge: s = null,
            badgeType: t,
            discountTxt: l,
            splitter: o,
            image: g,
            style: m,
            className: f = "",
            attributes: u = {},
            role: b,
            hero: p = !1
          } = e;
          const h = (0, a.useMemo)((() => {
            if (g?.badge || g?.discountTxt || s || l) return (0, n.jsx)(d.A, {
              badge: g?.discountTxt ?? g?.badge ?? s ?? l,
              badgeType: t,
              splitter: g?.splitter ?? o,
              role: g?.role ?? b
            })
          }), [s, t, l, g, b, o]);
          return (0, n.jsx)(i, {
            hero: p,
            children: (0, n.jsx)("figure", {
              children: (0, n.jsxs)("div", {
                className: (0, r.classList)("rockstargames-sites-gta-gen9d9ac792281efe15bcd4589b028d1c27b", p ? "rockstargames-sites-gta-gen9e430c4662cd185f58259d4a8d8b322de" : "", u?.hiddenMobile ? "hiddenMobile" : "", u?.hiddenLarge ? "hiddenLarge" : "", u?.className, f),
                style: (0, r.safeStyles)({
                  ...m,
                  ...u?.style
                }),
                ...u,
                children: [(0, n.jsx)(c.A, {
                  image: g,
                  className: f
                }), h, g?.caption && (0, n.jsx)("figcaption", {
                  dangerouslySetInnerHTML: {
                    __html: g.caption
                  }
                })]
              })
            })
          })
        }
    }
  }
]);