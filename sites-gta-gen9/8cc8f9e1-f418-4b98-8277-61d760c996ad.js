! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "8cc8f9e1-f418-4b98-8277-61d760c996ad", e._sentryDebugIdIdentifier = "sentry-dbid-8cc8f9e1-f418-4b98-8277-61d760c996ad")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta-gen9",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [6083, 8464], {
    2661: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4639a2711d1bca49a87c302784050ee3.png"
    },
    6083: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, {
        default: () => y
      });
      var a = s(99217),
        r = s(85239),
        d = s(60882);
      const n = {
        padding: "rockstargames-sites-gta-gen9ac767e959939b4d56b2358cb263d07ad",
        carouselWrapper: "rockstargames-sites-gta-gen9fabefc39343f6c494eb3d049757d89c5",
        carouselTitle: "rockstargames-sites-gta-gen9e9e0ef1bfc3699b1e50c33dd0ce8e76a"
      };
      var c = s(25854);
      const i = e => {
          let {
            to: t,
            children: s
          } = e;
          return t ? (0, c.jsx)("a", {
            href: t,
            target: "_blank",
            children: s
          }) : s
        },
        l = e => {
          let {
            items: t = [],
            text: s = {},
            style: l,
            className: o = "",
            id: g = null
          } = e;
          return t?.length ? (0, c.jsxs)("div", {
            id: g,
            "data-testid": `carousel${o&&`-${o}`}-group-of-items`,
            children: [(0, c.jsx)(d.A, {
              style: l,
              className: [o, n.carouselWrapper].join(" "),
              children: t.map((e => (0, c.jsxs)("div", {
                id: e?.id ?? null,
                children: [(0, c.jsx)(r.A, {
                  image: e?.image,
                  badge: e?.badge ?? e?.image?.badge,
                  badgeType: "badge3",
                  role: e?.role ?? e?.image?.role,
                  splitter: e?.splitter ?? e?.image?.splitter,
                  type: e?.type,
                  ariaLabel: e?.image?.ariaLabel ?? e.description,
                  style: e?.style,
                  className: [n.img, e?.className].join(" ")
                }), e.title && (0, c.jsx)(i, {
                  to: e?.to,
                  children: (0, c.jsx)("h4", {
                    className: n.carouselTitle,
                    children: e.title
                  })
                }), e.description && (0, c.jsx)("span", {
                  className: n.description,
                  dangerouslySetInnerHTML: {
                    __html: e.description
                  }
                })]
              }, e?.key ?? e?.title)))
            }), s?.title || s?.description ? (0, c.jsx)("div", {
              className: n.padding,
              style: s?.style ?? {},
              children: (0, c.jsx)(a.A, {
                item: s
              })
            }) : ""]
          }) : null
        };
      var o = s(31879),
        g = s.n(o),
        m = s(92440),
        f = s(95966);
      const u = e => {
          let {
            impressionTracking: t,
            gtm: s = {},
            children: a
          } = e;
          return t?.shouldTrack ? (0, c.jsx)(m.InViewTracker, {
            threshold: t?.threshold,
            gtm: s,
            children: a
          }) : a
        },
        b = e => {
          let {
            to: t,
            children: s
          } = e;
          return t ? (0, c.jsx)("a", {
            href: t,
            target: "_blank",
            rel: "noreferrer",
            children: s
          }) : s
        },
        p = e => {
          let {
            item: t
          } = e;
          return t?.videoId ? (0, c.jsx)(g(), {
            context: "site",
            autoplay: !1,
            id: t.videoId
          }) : (0, c.jsx)(r.A, {
            image: t?.image,
            badge: t?.badge ?? t?.image?.badge,
            badgeType: "badge3",
            role: t?.role ?? t?.image?.role,
            splitter: t?.splitter ?? t?.image?.splitter,
            ariaLabel: t?.image?.ariaLabel,
            style: t?.style,
            className: t?.className
          })
        },
        h = e => {
          let {
            items: t,
            style: s = {},
            className: r = "",
            id: d = null
          } = e;
          return (0, c.jsx)("div", {
            style: s,
            className: (0, f.classList)("rockstargames-sites-gta-gen9d38af92e8657708abd3dc5295e62476c", r),
            id: d,
            "data-testid": "standard-group-of-items",
            children: t.map((e => (0, c.jsx)(u, {
              impressionTracking: e?.impressionTracking,
              gtm: e?.gtm,
              children: (0, c.jsx)(b, {
                to: e?.to,
                children: (0, c.jsxs)("div", {
                  className: (0, f.classList)("rockstargames-sites-gta-gen9a9b63d3aa2f18fa6c84b19c8993a7893", e.className),
                  style: e?.style ?? {},
                  ...e?.props,
                  children: [e?.image || e?.videoId ? (0, c.jsx)(p, {
                    item: e
                  }) : "", e.title || e.description ? (0, c.jsx)(a.A, {
                    item: e,
                    className: "rockstargames-sites-gta-gen9bc47d354556b20071313d2c1ccc3debd"
                  }) : ""]
                })
              })
            }, e.key)))
          })
        },
        y = e => {
          let {
            children: t = null,
            text: s = {},
            items: a = [],
            renderTemplate: r = "",
            style: d = {},
            id: n = null,
            ...i
          } = e;
          if (!a.length) return null;
          switch (r) {
            case "carousel":
              return (0, c.jsx)(l, {
                text: s,
                items: a,
                style: d,
                id: n,
                children: t
              });
            case "carousel-panorama":
              return (0, c.jsx)(l, {
                text: s,
                items: a,
                style: d,
                className: "panorama",
                id: n,
                children: t
              });
            default:
              return (0, c.jsx)(h, {
                items: a,
                style: d,
                id: n,
                ...i,
                children: t
              })
          }
        }
    },
    7502: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/48754c6fc2f75b0554098423f2bda6d1.png"
    },
    9333: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8787df71c723ebe44f82fd13ed216e09.jpg"
    },
    10632: (e, t, s) => {
      "use strict";
      s.d(t, {
        A: () => i
      });
      var a = s(75385),
        r = s(83659);
      const d = {
        badge: "rockstargames-sites-gta-gen9b7268b0e907630904b6689af83fee8e3",
        badgeSizeUpdate: "rockstargames-sites-gta-gen9ce8632d7464b556158a1d549f653498c",
        badge2: "rockstargames-sites-gta-gen9d08ce7145bc9562355a3984f8ccc9313",
        badge3: "rockstargames-sites-gta-gen9c7c60cfb12b6e9be68893c60814b3ed7"
      };
      var n = s(25854);
      const c = e => {
          let {
            wrapper: t,
            children: s,
            role: a,
            splitter: r
          } = e;
          return r || a ? t(s) : s
        },
        i = e => {
          let {
            badge: t,
            badgeType: i,
            role: l,
            splitter: o
          } = e;
          const g = [];
          return o ? t.split(o).map(((e, t) => g.push(e))) : g.push(t), (0, n.jsxs)(c, {
            splitter: o,
            role: l,
            wrapper: e => (0, n.jsx)("div", {
              className: `${d.badge} ${i?d[i]:""} `,
              children: e
            }),
            children: [(0, n.jsx)(n.Fragment, {
              children: l && (0, n.jsx)(a.A, {
                image: {
                  alt: l,
                  desktop: s(65287)(`./${l}.png`)
                }
              })
            }), (0, n.jsx)(r.A, {
              className: `${o||l?"":d.badge} ${i?d[i]:""}`,
              min: 8,
              max: 1e3,
              mode: o || l ? "single" : "multi",
              children: g[0]
            }), (0, n.jsx)(n.Fragment, {
              children: g.shift() && o && g.length >= 1 && (0, n.jsx)(r.A, {
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
    16386: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/898794daaec68a69ef5ec4afaefe1948.png"
    },
    24970: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e111377ba943e9eefaa9204f77c77093.png"
    },
    27538: (e, t, s) => {
      "use strict";
      s.d(t, {
        i: () => l,
        o: () => i
      });
      var a = s(62229),
        r = s(95966),
        d = s(25854);
      const n = (0, r.setContextItem)({
          context: (0, a.createContext)(),
          key: "tinaPayloadContext"
        }),
        {
          Provider: c
        } = n,
        i = e => {
          let {
            children: t,
            payload: s
          } = e;
          return (0, d.jsx)(c, {
            value: s,
            children: t
          })
        },
        l = () => (0, a.useContext)(n)
    },
    28839: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61ae357c3bfbabb5d765e9a7c794d08f.png"
    },
    38558: (e, t, s) => {
      "use strict";
      s.d(t, {
        C1: () => i,
        S1: () => c,
        XC: () => m,
        jS: () => l,
        qg: () => o,
        z0: () => g
      });
      var a = s(62229),
        r = s(95966),
        d = s(27538);
      const n = e => {
          if (!e) return null;
          const {
            hostname: t,
            pathname: s
          } = new URL(e, (0, r.getCdnPrefix)(!0));
          return "/" === s ? null : (t.endsWith(".akamaized.net"), e)
        },
        c = e => {
          let {
            alt: t = null,
            mobile: s = null,
            desktop: c = null,
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
            const t = null !== l,
              s = e?.previewSrc ?? e ?? null;
            if (null === s || "string" != typeof s) return null;
            if (s.startsWith("http")) return n(s);
            const a = `${t?(0,r.getCdnPrefix)(f):""}${s}`;
            return n(a)
          }), [f, l]);
          return {
            alt: t,
            ariaLabel: i,
            src: {
              mobile: b(l?.[g]?.mobile ?? l?.en_us?.mobile ?? s),
              desktop: b(l?.[g]?.desktop ?? l?.en_us?.desktop ?? c)
            }
          }
        },
        i = e => {
          const t = (0, d.i)() ?? {},
            {
              meta: s = {}
            } = t,
            [c, i] = (0, a.useState)(s?.cdn ?? s?.prod ?? !1);
          return (0, a.useEffect)((() => {
            i(s?.cdn ?? s?.prod ?? !1)
          }), [s]), e ? e?.startsWith("http") ? n(e) : n(`${(0,r.getCdnPrefix)(c)}${e}`) : null
        },
        l = () => {
          const e = (0, d.i)() ?? {},
            {
              meta: t = {}
            } = e,
            s = (0, a.useMemo)((() => t?.cdn ?? t?.prod ?? !1), [t]);
          return (0, a.useCallback)((function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const a = t?.prod ?? s;
            return e ? e?.startsWith("http") ? n(e) : n(`${(0,r.getCdnPrefix)(a)}${e}`) : null
          }), [s])
        },
        o = e => e.full_src,
        g = e => {
          const t = e?.previewSrc ?? e?.preview_src ?? e;
          return t?.startsWith("http") ? t : `${(0,r.getCdnPrefix)(!1)}${t}`
        },
        m = e => e.meta.uploads_directory
    },
    38635: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6e77bb0f25a6ea37e8d831b12df9fa3c.png"
    },
    39311: (e, t, s) => {
      "use strict";
      s.d(t, {
        A: () => i
      });
      const a = {
        randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto)
      };
      let r;
      const d = new Uint8Array(16);

      function n() {
        if (!r && (r = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !r)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return r(d)
      }
      const c = [];
      for (let e = 0; e < 256; ++e) c.push((e + 256).toString(16).slice(1));
      const i = function(e, t, s) {
        if (a.randomUUID && !t && !e) return a.randomUUID();
        const r = (e = e || {}).random || (e.rng || n)();
        if (r[6] = 15 & r[6] | 64, r[8] = 63 & r[8] | 128, t) {
          s = s || 0;
          for (let e = 0; e < 16; ++e) t[s + e] = r[e];
          return t
        }
        return function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          return c[e[t + 0]] + c[e[t + 1]] + c[e[t + 2]] + c[e[t + 3]] + "-" + c[e[t + 4]] + c[e[t + 5]] + "-" + c[e[t + 6]] + c[e[t + 7]] + "-" + c[e[t + 8]] + c[e[t + 9]] + "-" + c[e[t + 10]] + c[e[t + 11]] + c[e[t + 12]] + c[e[t + 13]] + c[e[t + 14]] + c[e[t + 15]]
        }(r)
      }
    },
    60882: (e, t, s) => {
      "use strict";
      s.d(t, {
        A: () => f
      });
      var a = s(62229),
        r = s(43851),
        d = s(39311),
        n = s(95966);
      const c = {
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
      var i = s(99217),
        l = s(85239),
        o = s(25854);
      const g = e => {
          let {
            item: t
          } = e;
          return (0, o.jsxs)("div", {
            children: [(0, o.jsx)(l.A, {
              image: t?.image,
              badge: t?.badge ?? t?.image?.badge,
              badgeType: "badge3",
              role: t?.role ?? t?.image?.role,
              splitter: t?.splitter ?? t?.image?.splitter,
              type: t?.type,
              ariaLabel: t?.image?.ariaLabel ?? t.description,
              style: t?.style,
              className: (0, n.classList)(c.img, t?.className)
            }), (t?.title || t?.description) && (0, o.jsx)(i.A, {
              item: t
            })]
          })
        },
        m = e => {
          let {
            current: t,
            total: s
          } = e;
          return (0, o.jsx)("div", {
            className: "swiper-scrollbar",
            style: {
              "--current-slide": t,
              "--total-slides": s
            },
            children: (0, o.jsx)("div", {
              className: "swiper-scrollbar-drag"
            })
          })
        },
        f = e => {
          let {
            children: t,
            items: s = [],
            style: l = {},
            noInfiniteScroll: f = !1,
            className: u = "",
            renderTemplate: b = "standard",
            text: p,
            customSpaceBetween: h = null,
            centerSlides: y = !0,
            centeredSlidesBounds: k = !1
          } = e;
          const [x, j] = (0, a.useState)(0), _ = (0, a.useMemo)((() => t && Array.isArray(t) ? t.map((() => (0, d.A)())) : null), [t]);
          if (!(s && 0 !== s?.length || t)) return null;
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
            className: (0, n.classList)(c.deprecatedCarousel, c[b], c[`infinite_${!f}`], t ? c.renderedWithChildren : "", u),
            style: l,
            children: [(0, o.jsxs)(r.RC, {
              loop: !f,
              grabCursor: !0,
              centeredSlides: y,
              centerInsufficientSlides: y,
              slidesPerView: "auto",
              speed: 700,
              breakpoints: v,
              onUpdate: () => j(0),
              onActiveIndexChange: e => j(e?.realIndex ?? 0),
              centeredSlidesBounds: k,
              children: [(0, o.jsx)("div", {
                className: c.trackWrapper,
                children: (0, o.jsxs)("div", {
                  className: c.track,
                  children: [s?.map((e => (0, o.jsx)(r.qr, {
                    children: (0, o.jsx)(g, {
                      item: e
                    })
                  }, e.key))), t && t.map(((e, t) => e && (0, o.jsx)(r.qr, {
                    children: e
                  }, _ && _[t])))]
                })
              }), (0, o.jsx)(m, {
                current: x,
                total: t ? t.length : s.length
              })]
            }), (p?.title || p?.description) && (0, o.jsx)(i.A, {
              item: p
            })]
          })
        }
    },
    65287: (e, t, s) => {
      var a = {
        "./bounty.png": 7502,
        "./collector.png": 24970,
        "./moonshiner.png": 2661,
        "./naturalist.png": 16386,
        "./trader.png": 38635
      };

      function r(e) {
        var t = d(e);
        return s(t)
      }

      function d(e) {
        if (!s.o(a, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        }
        return a[e]
      }
      r.keys = function() {
        return Object.keys(a)
      }, r.resolve = d, e.exports = r, r.id = 65287
    },
    70818: (e, t, s) => {
      "use strict";
      s.d(t, {
        A: () => o
      });
      var a = s(62229),
        r = s(17048),
        d = s.n(r),
        n = s(95966);
      const c = {
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
      var i = s(25854);
      const {
        sanitize: l
      } = d(), o = e => {
        let {
          list: t,
          string: s,
          starColor: r,
          style: d,
          className: o,
          game: g,
          noImg: m,
          columns: f,
          mobileColumns: u
        } = e;
        const [b, p] = (0, a.useState)(null), h = s ? s.split("_#_") : t;
        if ((0, a.useEffect)((() => {
            p(t)
          }), [t]), !s && !t) return null;
        const y = {
          color: d?.color
        };
        return delete d?.color, f && b ? (0, i.jsx)("div", {
          className: c.grid,
          style: {
            "--unordered-list-grid-column": f,
            "--unordered-list-grid-column-mobile": u ?? f
          },
          children: (0, i.jsx)("ul", {
            className: (0, n.classList)(c.itemList, c.noImg, c[r], c[g]),
            style: (0, n.safeStyles)(d),
            children: b.map(((e, t) => (0, i.jsx)("li", {
              style: y,
              dangerouslySetInnerHTML: {
                __html: l(e.content)
              }
            }, t)))
          })
        }) : (0, i.jsx)("ul", {
          style: (0, n.safeStyles)(d),
          className: (0, n.classList)(c.itemList, c.custom, m ? c.noImg : "", r ? c[r] : "", g ? c[g] : "", o ?? ""),
          children: h.map(((e, t) => (0, i.jsx)("li", {
            dangerouslySetInnerHTML: {
              __html: l(e?.content ?? e)
            }
          }, t)))
        })
      }
    },
    75385: (e, t, s) => {
      "use strict";
      s.d(t, {
        A: () => i
      });
      var a = s(38558),
        r = s(95966);
      const d = "rockstargames-sites-gta-gen9c8dc03880ce2e12f3fdea5b5b587f27f";
      var n = s(25854);
      const c = e => {
          let {
            alt: t,
            className: a,
            src: d,
            style: c
          } = e;
          const [i, l] = (0, r.usePreloadImg)(d);
          let o = d;
          !1 === i && ("rockstargames-sites-gta-gen9a6a06e2d5c4f1811ea39d17312ca2e67" === a && (o = s(28839)), o = s(9333));
          const {
            width: g,
            height: m
          } = l, f = {
            "--aspect-ratio": Number.isNaN(g / m) ? "" : g / m,
            ...c
          };
          return (0, n.jsx)("img", {
            src: o,
            className: a ?? "",
            alt: t,
            style: f
          })
        },
        i = e => {
          let {
            className: t,
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
            mobile: s(28839),
            desktop: s(9333)
          });
          let u = l.frame ? `${l.frame} ${d}` : d;
          return (0, n.jsx)("div", {
            className: u,
            style: i,
            children: (0, n.jsx)(c, {
              style: {
                ...o,
                ...l?.style
              },
              src: f ? m.mobile || m.desktop : m?.desktop || m?.mobile,
              alt: g,
              className: t
            })
          })
        }
    },
    83659: (e, t, s) => {
      "use strict";
      s.d(t, {
        A: () => n
      });
      var a = s(62229),
        r = s(90069),
        d = s(25854);
      const n = e => {
        let {
          children: t,
          ...s
        } = e;
        const [n, c] = (0, a.useState)(!1);
        return (0, d.jsx)(r.zb, {
          ...s,
          onReady: () => {
            document.fonts.ready.then((() => {
              c(!0)
            }))
          },
          children: t
        })
      }
    },
    83933: (e, t, s) => {
      "use strict";
      s.d(t, {
        A: () => d
      });
      const a = {
        hr: "rockstargames-sites-gta-gen9dc7b1bc141e132d4ee9b7bf9d55c573a",
        redLine: "rockstargames-sites-gta-gen9d4d968b41ef87926b0b6318e8647738b",
        gtao: "rockstargames-sites-gta-gen9f66c75c6e882da85fef31e4211ca0be2"
      };
      var r = s(25854);
      const d = e => {
        let {
          style: t,
          className: s = "",
          type: d = ""
        } = e;
        return (0, r.jsx)("div", {
          style: t,
          className: [a.hr, a[d], s].join(" ")
        })
      }
    },
    85239: (e, t, s) => {
      "use strict";
      s.d(t, {
        A: () => l
      });
      var a = s(62229),
        r = s(95966),
        d = s(10632),
        n = s(75385);
      var c = s(25854);
      const i = e => {
          let {
            hero: t,
            children: s
          } = e;
          return t ? (0, c.jsx)("div", {
            className: "rockstargames-sites-gta-gen9a429886d721550d02521f7f5c9de7f5b",
            children: s
          }) : s
        },
        l = e => {
          let {
            badge: t = null,
            badgeType: s,
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
            if (g?.badge || g?.discountTxt || t || l) return (0, c.jsx)(d.A, {
              badge: g?.discountTxt ?? g?.badge ?? t ?? l,
              badgeType: s,
              splitter: g?.splitter ?? o,
              role: g?.role ?? b
            })
          }), [t, s, l, g, b, o]);
          return (0, c.jsx)(i, {
            hero: p,
            children: (0, c.jsx)("figure", {
              children: (0, c.jsxs)("div", {
                className: (0, r.classList)("rockstargames-sites-gta-gen9d9ac792281efe15bcd4589b028d1c27b", p ? "rockstargames-sites-gta-gen9e430c4662cd185f58259d4a8d8b322de" : "", u?.hiddenMobile ? "hiddenMobile" : "", u?.hiddenLarge ? "hiddenLarge" : "", u?.className, f),
                style: (0, r.safeStyles)({
                  ...m,
                  ...u?.style
                }),
                ...u,
                children: [(0, c.jsx)(n.A, {
                  image: g,
                  className: f
                }), h, g?.caption && (0, c.jsx)("figcaption", {
                  dangerouslySetInnerHTML: {
                    __html: g.caption
                  }
                })]
              })
            })
          })
        }
    },
    99217: (e, t, s) => {
      "use strict";
      s.d(t, {
        A: () => o
      });
      var a = s(95966),
        r = s(75385),
        d = s(70818),
        n = s(83933);
      const c = "rockstargames-sites-gta-gen9acd27eff2209196752622710f7b27558";
      var i = s(25854);
      const l = e => {
          let {
            to: t,
            children: s
          } = e;
          return t ? (0, i.jsx)("a", {
            href: t,
            target: "_blank",
            rel: "noreferrer",
            children: s
          }) : s
        },
        o = e => {
          let {
            item: t,
            className: s = ""
          } = e;
          return (0, i.jsxs)("div", {
            className: (0, a.classList)("rockstargames-sites-gta-gen9f8bc9589974046cdac4a2264be12d2df", s),
            children: [t.title && (0, i.jsx)(l, {
              to: t?.href ?? t?.to,
              children: (0, i.jsx)("h3", {
                children: t.title
              })
            }), Array.isArray(t?.description?.content) ? t.description.content?.map(((e, t) => e?.unorderedList ? (0, i.jsx)(d.A, {
              columns: e.unorderedList.columns ?? null,
              style: {
                "--unordered-list-padding": "var(--grid-gap-static-sm)",
                "--unordered-list-margin-bottom": ".5rem"
              },
              noImg: !0,
              list: e.unorderedList.list
            }, t) : e?.image ? (0, i.jsx)(r.A, {
              image: e.image,
              className: e?.className
            }, t) : e?.separator ? (0, i.jsx)("div", {
              style: {
                margin: `${e.separator.spacing} 0`
              },
              children: (0, i.jsx)(n.A, {})
            }, t) : (0, i.jsx)("p", {
              children: (0, i.jsx)("span", {
                className: c,
                dangerouslySetInnerHTML: {
                  __html: e
                }
              })
            }, t))) : (0, i.jsx)("span", {
              className: c,
              dangerouslySetInnerHTML: {
                __html: t.description
              }
            })]
          })
        }
    }
  }
]);