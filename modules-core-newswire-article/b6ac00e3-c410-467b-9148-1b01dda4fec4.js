try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    s = (new e.Error).stack;
  s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "b6ac00e3-c410-467b-9148-1b01dda4fec4", e._sentryDebugIdIdentifier = "sentry-dbid-b6ac00e3-c410-467b-9148-1b01dda4fec4")
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
  [884, 8503], {
    2661: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4639a2711d1bca49a87c302784050ee3.png"
    },
    4407: (e, s, r) => {
      "use strict";
      r.d(s, {
        A: () => o
      });
      var a = r(42295),
        t = r(34725),
        c = r(58136);
      const i = ({
          alt: e,
          className: s,
          src: t,
          role: i,
          style: d
        }) => {
          const [o, l] = (0, c.usePreloadImg)(t);
          let n = t;
          !1 === o && (n = r(9333));
          const {
            width: m,
            height: u
          } = l, g = {
            "--aspect-ratio": Number.isNaN(m / u) ? "" : m / u,
            ...d
          };
          return (0, a.jsx)("img", {
            src: n,
            className: s ?? "",
            alt: e,
            style: g,
            role: i
          })
        },
        d = "rockstargames-modules-core-newswire-articlec8dc03880ce2e12f3fdea5b5b587f27f",
        o = ({
          className: e,
          style: s = {},
          image: o = {},
          imageStyle: l = {},
          role: n = "img"
        }) => {
          let {
            alt: m,
            src: u
          } = (0, t.S1)(o);
          const {
            isMobile: g
          } = (0, c.useWindowResize)(), f = g ? u.imageMobileStyle : u.imageDesktopStyle;
          u.desktop || u.mobile || (m = "", u = {
            mobile: r(28839),
            desktop: r(9333)
          });
          let b = o.frame ? `${o.frame} ${d}` : d;
          return (0, a.jsx)("div", {
            className: b,
            style: s,
            children: (0, a.jsx)(i, {
              style: {
                ...l,
                ...o?.style,
                ...f
              },
              src: g ? u.mobile || u.desktop : u?.desktop || u?.mobile,
              alt: m,
              role: n,
              className: e
            })
          })
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
    10632: (e, s, r) => {
      "use strict";
      r.d(s, {
        A: () => m
      });
      var a = r(42295),
        t = r(71127),
        c = r(58136),
        i = r(1556),
        d = r.n(i),
        o = r(84927),
        l = r(4407);
      const n = ({
          hero: e,
          children: s
        }) => e ? (0, a.jsx)("div", {
          className: "rockstargames-modules-core-newswire-articlea429886d721550d02521f7f5c9de7f5b",
          children: s
        }) : s,
        m = ({
          badge: e = null,
          badgeType: s,
          discountTxt: r,
          splitter: i,
          image: m,
          style: u,
          className: g = "",
          attributes: f = {},
          role: b,
          hero: p = !1
        }) => {
          const w = (0, t.useMemo)(() => {
            if (m?.badge || m?.discountTxt || e || r) return (0, a.jsx)(o.A, {
              badge: m?.discountTxt ?? m?.badge ?? e ?? r,
              badgeType: s,
              splitter: m?.splitter ?? i,
              role: m?.role ?? b
            })
          }, [e, s, r, m, b, i]);
          return (0, a.jsx)(n, {
            hero: p,
            children: (0, a.jsx)("figure", {
              children: (0, a.jsxs)("div", {
                className: d()("rockstargames-modules-core-newswire-articled9ac792281efe15bcd4589b028d1c27b", p ? "rockstargames-modules-core-newswire-articlee430c4662cd185f58259d4a8d8b322de" : "", f?.hiddenMobile ? "hiddenMobile" : "", f?.hiddenLarge ? "hiddenLarge" : "", f?.className, g),
                style: (0, c.safeStyles)({
                  ...u,
                  ...f?.style
                }),
                ...f,
                children: [(0, a.jsx)(l.A, {
                  role: m?.accessibleRole,
                  image: m,
                  className: g
                }), w, m?.caption && (0, a.jsx)("figcaption", {
                  dangerouslySetInnerHTML: {
                    __html: m.caption
                  }
                })]
              })
            })
          })
        }
    },
    11206: (e, s, r) => {
      "use strict";
      r.d(s, {
        A: () => o
      });
      const a = {
        randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto)
      };
      let t;
      const c = new Uint8Array(16);

      function i() {
        if (!t && (t = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !t)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return t(c)
      }
      const d = [];
      for (let e = 0; e < 256; ++e) d.push((e + 256).toString(16).slice(1));
      const o = function(e, s, r) {
        if (a.randomUUID && !s && !e) return a.randomUUID();
        const t = (e = e || {}).random || (e.rng || i)();
        if (t[6] = 15 & t[6] | 64, t[8] = 63 & t[8] | 128, s) {
          r = r || 0;
          for (let e = 0; e < 16; ++e) s[r + e] = t[e];
          return s
        }
        return function(e, s = 0) {
          return d[e[s + 0]] + d[e[s + 1]] + d[e[s + 2]] + d[e[s + 3]] + "-" + d[e[s + 4]] + d[e[s + 5]] + "-" + d[e[s + 6]] + d[e[s + 7]] + "-" + d[e[s + 8]] + d[e[s + 9]] + "-" + d[e[s + 10]] + d[e[s + 11]] + d[e[s + 12]] + d[e[s + 13]] + d[e[s + 14]] + d[e[s + 15]]
        }(t)
      }
    },
    12919: (e, s, r) => {
      "use strict";
      r.d(s, {
        Ub: () => c
      });
      var a = r(60211),
        t = r(71127);

      function c(e, {
        defaultValue: s = !1,
        initializeWithValue: r = !0
      } = {}) {
        const c = e => a.X || !window.matchMedia ? s : window.matchMedia(e).matches,
          [i, d] = (0, t.useState)(() => r ? c(e) : s);

        function o() {
          d(c(e))
        }
        return (0, t.useEffect)(() => {
          const s = window.matchMedia?.(e);
          return o(), s?.addListener ? s?.addListener(o) : s?.addEventListener("change", o), () => {
            s?.removeListener ? s?.removeListener(o) : s?.removeEventListener("change", o)
          }
        }, [e]), i
      }
      r(51105)
    },
    16386: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/898794daaec68a69ef5ec4afaefe1948.png"
    },
    24769: (e, s, r) => {
      "use strict";
      r.d(s, {
        A: () => p
      });
      var a = r(42295),
        t = r(71127),
        c = r(24162),
        i = r(85827),
        d = r(11206),
        o = r(1556),
        l = r.n(o),
        n = r(12919);
      const m = {
        active: "rockstargames-modules-core-newswire-articlefdc2ec652cbb7469f602e73cd10ef997",
        deprecatedCarousel: "rockstargames-modules-core-newswire-articlea531264d5417d2198d4e14aa72335af1",
        dotsSlide: "rockstargames-modules-core-newswire-articleb8fd11776fba32f9663bbb6292a5c901",
        hideLarge: "rockstargames-modules-core-newswire-articlea6c9173aa5a8fe31a062251352a9d711",
        hideMobile: "rockstargames-modules-core-newswire-articlef3445a74a067bd92ff94b521cb0bdc07",
        imageAreaBg: "rockstargames-modules-core-newswire-articledcb2b41007683141579697bb4a8658ba",
        img: "rockstargames-modules-core-newswire-articled8e66128b4fef1ea164350cd535e2d68",
        infinite_false: "rockstargames-modules-core-newswire-articleb85758ee99a52896b94130d002e821c7",
        panorama: "rockstargames-modules-core-newswire-articleff63f8addff8d036ca0b65fa495e1653",
        perico: "rockstargames-modules-core-newswire-articleaa50a9164fd0296b1196d441233cc348",
        renderedWithChildren: "rockstargames-modules-core-newswire-articlead7696edafa3086969e7aaece4f09b4f",
        siblings: "rockstargames-modules-core-newswire-articlef4c50c0daadf81cd292587fcfea1339d",
        "swiper-horizontal": "rockstargames-modules-core-newswire-articleb823bbff86d38da8cb611a7c3367d8fe",
        "swiper-preloader-spin": "rockstargames-modules-core-newswire-articlec39b97f81c73d75dc4e013fde14aff18",
        "swiper-scrollbar-disabled": "rockstargames-modules-core-newswire-articleee2324d6dd93a95776b1e2d14d0f529d",
        "swiper-vertical": "rockstargames-modules-core-newswire-articled29252354bbbfe413678daff5223169d",
        track: "rockstargames-modules-core-newswire-articlec7c21df4f7f83a73f79dd7913aa87832"
      };
      var u = r(26708),
        g = r(10632);
      const f = ({
          item: e
        }) => (0, a.jsxs)("div", {
          children: [(0, a.jsx)(g.A, {
            image: e?.image,
            badge: e?.badge ?? e?.image?.badge,
            badgeType: "badge3",
            role: e?.role ?? e?.image?.role,
            splitter: e?.splitter ?? e?.image?.splitter,
            type: e?.type,
            ariaLabel: e?.image?.ariaLabel ?? e.description,
            style: e?.style,
            className: l()(m.img, e?.className)
          }), (e?.title || e?.description) && (0, a.jsx)(u.A, {
            item: e
          })]
        }),
        b = ({
          current: e,
          total: s
        }) => (0, a.jsx)("div", {
          className: "swiper-scrollbar",
          style: {
            "--current-slide": e,
            "--total-slides": s
          },
          children: (0, a.jsx)("div", {
            className: "swiper-scrollbar-drag"
          })
        }),
        p = ({
          children: e,
          items: s = [],
          style: r = {},
          noInfiniteScroll: o = !1,
          className: g = "",
          renderTemplate: p = "standard",
          text: w,
          customSpaceBetween: h = null,
          centerSlides: y = !0,
          centeredSlidesBounds: k = !1
        }) => {
          const x = (0, n.Ub)("(min-width: 0px) and (max-width: 768px)"),
            [j, _] = (0, t.useState)(0),
            [v, N] = (0, t.useState)(null),
            S = (0, t.useMemo)(() => e && Array.isArray(e) ? e.map(() => (0, d.A)()) : null, [e, x]),
            A = e => {
              if (!e) return;
              let s = 0;
              e.pagination.bullets.forEach((e, r) => {
                e.classList.contains("swiper-pagination-bullet-active") && (s = r)
              }), _(s)
            };
          if (!(s && 0 !== s?.length || e)) return null;
          const L = {
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
          return (0, a.jsxs)("div", {
            className: l()(m.deprecatedCarousel, m[p], m.infinite_true, e ? m.renderedWithChildren : "", g),
            style: r,
            "data-testid": "carousel",
            children: [(0, a.jsxs)(c.RC, {
              modules: [i.dK, i.Jq],
              pagination: !0,
              a11y: {
                enabled: !0,
                scrollOnFocus: !0
              },
              updateOnWindowResize: !1,
              loop: !1,
              grabCursor: !0,
              centeredSlides: y,
              centerInsufficientSlides: y,
              centeredSlidesBounds: k,
              slidesPerView: "auto",
              speed: 700,
              breakpoints: L,
              onSlideChange: e => {
                A(e)
              },
              onResize: e => {
                null != v && clearTimeout(v);
                const s = setTimeout(() => {
                  e.update(), e.updateSize(), e.updateSlides(), e.slideToClosest(), A(e)
                }, 250);
                N(s)
              },
              children: [(0, a.jsx)("div", {
                className: m.trackWrapper,
                children: (0, a.jsxs)("div", {
                  className: m.track,
                  children: [s?.map(e => (0, a.jsx)(c.qr, {
                    tabIndex: 0,
                    children: (0, a.jsx)(f, {
                      item: e
                    })
                  }, e.key)), e && e.map((e, s) => e && (0, a.jsx)(c.qr, {
                    children: e
                  }, S && S[s]))]
                })
              }), (0, a.jsx)(b, {
                current: j,
                total: e ? e.length : s.length
              })]
            }), (w?.title || w?.description) && (0, a.jsx)(u.A, {
              item: w
            })]
          })
        }
    },
    24970: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e111377ba943e9eefaa9204f77c77093.png"
    },
    26708: (e, s, r) => {
      "use strict";
      r.d(s, {
        A: () => m
      });
      var a = r(42295),
        t = r(1556),
        c = r.n(t),
        i = r(4407),
        d = r(93935),
        o = r(79704);
      const l = "rockstargames-modules-core-newswire-articleacd27eff2209196752622710f7b27558",
        n = ({
          to: e,
          children: s
        }) => e ? (0, a.jsx)("a", {
          href: e,
          target: "_blank",
          rel: "noreferrer",
          children: s
        }) : s,
        m = ({
          item: e,
          className: s = ""
        }) => (0, a.jsxs)("div", {
          className: c()("rockstargames-modules-core-newswire-articlef8bc9589974046cdac4a2264be12d2df", s),
          children: [e.title && (0, a.jsx)(n, {
            to: e?.href ?? e?.to,
            children: (0, a.jsx)("h3", {
              children: e.title
            })
          }), Array.isArray(e?.description?.content) ? e.description.content?.map((e, s) => e?.unorderedList ? (0, a.jsx)(d.A, {
            columns: e.unorderedList.columns ?? null,
            style: {
              "--unordered-list-padding": "var(--grid-gap-static-sm)",
              "--unordered-list-margin-bottom": ".5rem"
            },
            noImg: !0,
            list: e.unorderedList.list
          }, s) : e?.image ? (0, a.jsx)(i.A, {
            image: e.image,
            className: e?.className
          }, s) : e?.separator ? (0, a.jsx)("div", {
            style: {
              margin: `${e.separator.spacing} 0`
            },
            children: (0, a.jsx)(o.A, {})
          }, s) : (0, a.jsx)("p", {
            children: (0, a.jsx)("span", {
              className: l,
              dangerouslySetInnerHTML: {
                __html: e
              }
            })
          }, s)) : (0, a.jsx)("span", {
            className: l,
            dangerouslySetInnerHTML: {
              __html: e.description
            }
          })]
        })
    },
    28839: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61ae357c3bfbabb5d765e9a7c794d08f.png"
    },
    34725: (e, s, r) => {
      "use strict";
      r.d(s, {
        C1: () => o,
        S1: () => d,
        XC: () => u,
        jS: () => l,
        qg: () => n,
        z0: () => m
      });
      var a = r(71127),
        t = r(58136),
        c = r(74767);
      const i = e => {
          if (!e) return null;
          const {
            hostname: s,
            pathname: r
          } = new URL(e, (0, t.getCdnPrefix)(!0));
          return "/" === r ? null : (s.endsWith(".akamaized.net"), e)
        },
        d = ({
          alt: e = null,
          mobile: s = null,
          imageMobileStyle: r = {},
          desktop: d = null,
          imageDesktopStyle: o = {},
          ariaLabel: l = null,
          sources: n = null,
          prod: m = null
        }) => {
          const u = (0, t.useLocale)(),
            {
              meta: g = {}
            } = (0, c.i)() ?? {},
            [f, b] = (0, a.useState)(m ?? g?.cdn ?? g?.prod ?? !0);
          (0, a.useEffect)(() => {
            b(m ?? g?.cdn ?? g?.prod ?? !0)
          }, [m, g]);
          const p = (0, a.useCallback)(e => {
            const s = null !== n,
              r = e?.previewSrc ?? e ?? null;
            if (null === r || "string" != typeof r) return null;
            if (r.startsWith("http")) return i(r);
            const a = `${s?(0,t.getCdnPrefix)(f):""}${r}`;
            return i(a)
          }, [f, n]);
          return {
            alt: e,
            ariaLabel: l,
            src: {
              mobile: p(n?.[u]?.mobile ?? n?.en_us?.mobile ?? s),
              imageMobileStyle: n?.[u]?.imageMobileStyle ?? n?.en_us?.imageMobileStyle ?? r,
              imageDesktopStyle: n?.[u]?.imageDesktopStyle ?? n?.en_us?.imageDesktopStyle ?? o,
              desktop: p(n?.[u]?.desktop ?? n?.en_us?.desktop ?? d)
            }
          }
        },
        o = e => {
          const s = (0, c.i)() ?? {},
            {
              meta: r = {}
            } = s,
            [d, o] = (0, a.useState)(r?.cdn ?? r?.prod ?? !1);
          return (0, a.useEffect)(() => {
            o(r?.cdn ?? r?.prod ?? !1)
          }, [r]), e ? e?.startsWith("http") ? i(e) : i(`${(0,t.getCdnPrefix)(d)}${e}`) : null
        },
        l = () => {
          const e = (0, c.i)() ?? {},
            {
              meta: s = {}
            } = e,
            r = (0, a.useMemo)(() => s?.cdn ?? s?.prod ?? !1, [s]);
          return (0, a.useCallback)((e, s = {}) => {
            const a = s?.prod ?? r;
            return e ? e?.startsWith("http") ? i(e) : i(`${(0,t.getCdnPrefix)(a)}${e}`) : null
          }, [r])
        },
        n = e => e.full_src,
        m = e => {
          const s = e?.previewSrc ?? e?.preview_src ?? e;
          return s?.startsWith("http") ? s : `${(0,t.getCdnPrefix)(!1)}${s}`
        },
        u = e => e.meta.uploads_directory
    },
    38635: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6e77bb0f25a6ea37e8d831b12df9fa3c.png"
    },
    51105: (e, s, r) => {
      "use strict";
      r.d(s, {
        v: () => d
      });
      var a = r(1556);
      const t = new Map;

      function c(e, s) {
        if (e === s) return e;
        const r = t.get(e);
        if (r) return r.forEach(e => e(s)), s;
        const a = t.get(s);
        return a ? (a.forEach(s => s(e)), e) : s
      }

      function i(...e) {
        return (...s) => {
          for (const r of e) "function" == typeof r && r(...s)
        }
      }

      function d(...e) {
        const s = {
          ...e[0]
        };
        for (let r = 1; r < e.length; r++) {
          const t = e[r];
          for (const e in t) {
            const r = s[e],
              d = t[e];
            "function" == typeof r && "function" == typeof d && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? s[e] = i(r, d) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof r || "string" != typeof d ? "id" === e && r && d ? s.id = c(r, d) : s[e] = void 0 !== d ? d : r : s[e] = (0, a.clsx)(r, d)
          }
        }
        return s
      }
    },
    55322: (e, s, r) => {
      "use strict";
      r.d(s, {
        A: () => i
      });
      var a = r(42295),
        t = r(71127),
        c = r(64740);
      const i = ({
        children: e,
        ...s
      }) => {
        const [, r] = (0, t.useState)(!1);
        return (0, a.jsx)(c.zb, {
          ...s,
          onReady: () => {
            document.fonts.ready.then(() => {
              r(!0)
            })
          },
          children: e
        })
      }
    },
    60211: (e, s, r) => {
      "use strict";
      r.d(s, {
        X: () => a
      });
      const a = "undefined" == typeof window
    },
    65287: (e, s, r) => {
      var a = {
        "./bounty.png": 7502,
        "./collector.png": 24970,
        "./moonshiner.png": 2661,
        "./naturalist.png": 16386,
        "./trader.png": 38635
      };

      function t(e) {
        var s = c(e);
        return r(s)
      }

      function c(e) {
        if (!r.o(a, e)) {
          var s = new Error("Cannot find module '" + e + "'");
          throw s.code = "MODULE_NOT_FOUND", s
        }
        return a[e]
      }
      t.keys = function() {
        return Object.keys(a)
      }, t.resolve = c, e.exports = t, t.id = 65287
    },
    74767: (e, s, r) => {
      "use strict";
      r.d(s, {
        i: () => o,
        o: () => d
      });
      var a = r(42295),
        t = r(71127);
      const c = (0, r(58136).setContextItem)({
          context: (0, t.createContext)(),
          key: "tinaPayloadContext"
        }),
        {
          Provider: i
        } = c,
        d = ({
          children: e,
          payload: s
        }) => (0, a.jsx)(i, {
          value: s,
          children: e
        }),
        o = () => (0, t.useContext)(c)
    },
    79704: (e, s, r) => {
      "use strict";
      r.d(s, {
        A: () => c
      });
      var a = r(42295);
      const t = {
          gtao: "rockstargames-modules-core-newswire-articlef66c75c6e882da85fef31e4211ca0be2",
          hr: "rockstargames-modules-core-newswire-articledc7b1bc141e132d4ee9b7bf9d55c573a",
          redLine: "rockstargames-modules-core-newswire-articled4d968b41ef87926b0b6318e8647738b"
        },
        c = ({
          style: e,
          className: s = "",
          type: r = ""
        }) => (0, a.jsx)("div", {
          style: e,
          className: [t.hr, t[r], s].join(" ")
        })
    },
    84927: (e, s, r) => {
      "use strict";
      r.d(s, {
        A: () => o
      });
      var a = r(42295),
        t = r(4407),
        c = r(55322);
      const i = {
          badge: "rockstargames-modules-core-newswire-articleb7268b0e907630904b6689af83fee8e3",
          badge2: "rockstargames-modules-core-newswire-articled08ce7145bc9562355a3984f8ccc9313",
          badge3: "rockstargames-modules-core-newswire-articlec7c60cfb12b6e9be68893c60814b3ed7",
          badgeSizeUpdate: "rockstargames-modules-core-newswire-articlece8632d7464b556158a1d549f653498c"
        },
        d = ({
          wrapper: e,
          children: s,
          role: r,
          splitter: a
        }) => a || r ? e(s) : s,
        o = ({
          badge: e,
          badgeType: s,
          role: o,
          splitter: l
        }) => {
          const n = [];
          return l ? e.split(l).map(e => n.push(e)) : n.push(e), (0, a.jsxs)(d, {
            splitter: l,
            role: o,
            wrapper: e => (0, a.jsx)("div", {
              className: `${i.badge} ${s?i[s]:""} `,
              children: e
            }),
            children: [(0, a.jsx)(a.Fragment, {
              children: o && (0, a.jsx)(t.A, {
                image: {
                  alt: o,
                  desktop: r(65287)(`./${o}.png`)
                }
              })
            }), (0, a.jsx)(c.A, {
              className: `${l||o?"":i.badge} ${s?i[s]:""}`,
              min: 8,
              max: 1e3,
              mode: l || o ? "single" : "multi",
              children: n[0]
            }), (0, a.jsx)(a.Fragment, {
              children: n.shift() && l && n.length >= 1 && (0, a.jsx)(c.A, {
                min: 8,
                max: 1e3,
                mode: "single",
                forceSingleModeWidth: !0,
                children: n.join(" ")
              })
            })]
          }, "badge-wrapper")
        }
    },
    90884: (e, s, r) => {
      "use strict";
      r.r(s), r.d(s, {
        default: () => y
      });
      var a = r(42295),
        t = r(26708),
        c = r(10632),
        i = r(24769);
      const d = {
          carouselTitle: "rockstargames-modules-core-newswire-articlee9e0ef1bfc3699b1e50c33dd0ce8e76a",
          carouselWrapper: "rockstargames-modules-core-newswire-articlefabefc39343f6c494eb3d049757d89c5",
          padding: "rockstargames-modules-core-newswire-articleac767e959939b4d56b2358cb263d07ad"
        },
        o = ({
          to: e,
          children: s
        }) => e ? (0, a.jsx)("a", {
          href: e,
          target: "_blank",
          children: s
        }) : s,
        l = ({
          items: e = [],
          text: s = {},
          style: r,
          className: l = "",
          id: n = null
        }) => e?.length ? (0, a.jsxs)("div", {
          id: n,
          "data-testid": `carousel${l&&`-${l}`}-group-of-items`,
          children: [(0, a.jsx)(i.A, {
            style: r,
            className: [l, d.carouselWrapper].join(" "),
            children: e.map(e => (0, a.jsxs)("div", {
              id: e?.id ?? null,
              children: [(0, a.jsx)(c.A, {
                image: e?.image,
                badge: e?.badge ?? e?.image?.badge,
                badgeType: "badge3",
                role: e?.role ?? e?.image?.role,
                splitter: e?.splitter ?? e?.image?.splitter,
                type: e?.type,
                ariaLabel: e?.image?.ariaLabel ?? e.description,
                style: e?.style,
                className: [d.img, e?.className].join(" ")
              }), e.title && (0, a.jsx)(o, {
                to: e?.to,
                children: (0, a.jsx)("h4", {
                  className: d.carouselTitle,
                  children: e.title
                })
              }), e.description && (0, a.jsx)("span", {
                className: d.description,
                dangerouslySetInnerHTML: {
                  __html: e.description
                }
              })]
            }, e?.key ?? e?.title))
          }), s?.title || s?.description ? (0, a.jsx)("div", {
            className: d.padding,
            style: s?.style ?? {},
            children: (0, a.jsx)(t.A, {
              item: s
            })
          }) : ""]
        }) : null;
      var n = r(31879),
        m = r.n(n),
        u = r(22030),
        g = r(1556),
        f = r.n(g);
      const b = ({
          impressionTracking: e,
          gtm: s = {},
          children: r
        }) => e?.shouldTrack ? (0, a.jsx)(u.InViewTracker, {
          threshold: e?.threshold,
          gtm: s,
          children: r
        }) : r,
        p = ({
          to: e,
          children: s
        }) => e ? (0, a.jsx)("a", {
          href: e,
          target: "_blank",
          rel: "noreferrer",
          children: s
        }) : s,
        w = ({
          item: e
        }) => e?.videoId ? (0, a.jsx)(m(), {
          context: "site",
          autoplay: !1,
          id: e.videoId
        }) : (0, a.jsx)(c.A, {
          image: e?.image,
          badge: e?.badge ?? e?.image?.badge,
          badgeType: "badge3",
          role: e?.role ?? e?.image?.role,
          splitter: e?.splitter ?? e?.image?.splitter,
          ariaLabel: e?.image?.ariaLabel,
          style: e?.style,
          className: e?.className
        }),
        h = ({
          items: e,
          style: s = {},
          className: r = "",
          id: c = null
        }) => (0, a.jsx)("div", {
          style: s,
          className: f()("rockstargames-modules-core-newswire-articled38af92e8657708abd3dc5295e62476c", r),
          id: c,
          "data-testid": "standard-group-of-items",
          children: e.map(e => (0, a.jsx)(b, {
            impressionTracking: e?.impressionTracking,
            gtm: e?.gtm,
            children: (0, a.jsx)(p, {
              to: e?.to,
              children: (0, a.jsxs)("div", {
                className: f()("rockstargames-modules-core-newswire-articlea9b63d3aa2f18fa6c84b19c8993a7893", e.className),
                style: e?.style ?? {},
                ...e?.props,
                children: [e?.image || e?.videoId ? (0, a.jsx)(w, {
                  item: e
                }) : "", e.title || e.description ? (0, a.jsx)(t.A, {
                  item: e,
                  className: "rockstargames-modules-core-newswire-articlebc47d354556b20071313d2c1ccc3debd"
                }) : ""]
              })
            })
          }, e.key))
        }),
        y = ({
          children: e = null,
          text: s = {},
          items: r = [],
          renderTemplate: t = "",
          style: c = {},
          id: i = null,
          ...d
        }) => {
          if (!r.length) return null;
          switch (t) {
            case "carousel":
              return (0, a.jsx)(l, {
                text: s,
                items: r,
                style: c,
                id: i,
                children: e
              });
            case "carousel-panorama":
              return (0, a.jsx)(l, {
                text: s,
                items: r,
                style: c,
                className: "panorama",
                id: i,
                children: e
              });
            default:
              return (0, a.jsx)(h, {
                items: r,
                style: c,
                id: i,
                ...d,
                children: e
              })
          }
        }
    },
    93935: (e, s, r) => {
      "use strict";
      r.d(s, {
        A: () => u
      });
      var a = r(42295),
        t = r(71127),
        c = r(48863),
        i = r.n(c),
        d = r(58136),
        o = r(1556),
        l = r.n(o);
      const n = {
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
        } = i(),
        u = ({
          list: e,
          string: s,
          starColor: r,
          style: c,
          className: i,
          game: o,
          noImg: u,
          columns: g,
          mobileColumns: f
        }) => {
          const [b, p] = (0, t.useState)(null), w = s ? s.split("_#_") : e;
          if ((0, t.useEffect)(() => {
              p(e)
            }, [e]), !s && !e) return null;
          const h = {
            color: c?.color
          };
          return delete c?.color, g && b ? (0, a.jsx)("div", {
            className: n.grid,
            style: {
              "--unordered-list-grid-column": g,
              "--unordered-list-grid-column-mobile": f ?? g
            },
            children: (0, a.jsx)("ul", {
              className: l()(n.itemList, n.noImg, n[r], n[o]),
              style: (0, d.safeStyles)(c),
              children: b.map((e, s) => (0, a.jsx)("li", {
                style: h,
                dangerouslySetInnerHTML: {
                  __html: m(e.content)
                }
              }, s))
            })
          }) : (0, a.jsx)("ul", {
            style: (0, d.safeStyles)(c),
            className: l()(n.itemList, n.custom, u ? n.noImg : "", r ? n[r] : "", o ? n[o] : "", i ?? ""),
            children: w.map((e, s) => (0, a.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: m(e?.content ?? e)
              }
            }, s))
          })
        }
    }
  }
]);