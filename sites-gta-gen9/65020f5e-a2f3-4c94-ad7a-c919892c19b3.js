try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "65020f5e-a2f3-4c94-ad7a-c919892c19b3", e._sentryDebugIdIdentifier = "sentry-dbid-65020f5e-a2f3-4c94-ad7a-c919892c19b3")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-gta-gen9",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [884, 2649, 4396], {
    2661: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4639a2711d1bca49a87c302784050ee3.png"
    },
    4407: (e, t, s) => {
      "use strict";
      s.d(t, {
        A: () => d
      });
      var a = s(42295),
        r = s(34725),
        n = s(58136);
      const i = ({
          alt: e,
          className: t,
          src: r,
          role: i,
          style: c
        }) => {
          const [d, o] = (0, n.usePreloadImg)(r);
          let l = r;
          !1 === d && (l = s(9333));
          const {
            width: g,
            height: m
          } = o, u = {
            "--aspect-ratio": Number.isNaN(g / m) ? "" : g / m,
            ...c
          };
          return (0, a.jsx)("img", {
            src: l,
            className: t ?? "",
            alt: e,
            style: u,
            role: i
          })
        },
        c = "rockstargames-sites-gta-gen9c8dc03880ce2e12f3fdea5b5b587f27f",
        d = ({
          className: e,
          style: t = {},
          image: d = {},
          imageStyle: o = {},
          role: l = "img"
        }) => {
          let {
            alt: g,
            src: m
          } = (0, r.S1)(d);
          const {
            isMobile: u
          } = (0, n.useWindowResize)(), f = u ? m.imageMobileStyle : m.imageDesktopStyle;
          m.desktop || m.mobile || (g = "", m = {
            mobile: s(28839),
            desktop: s(9333)
          });
          let p = d.frame ? `${d.frame} ${c}` : c;
          return (0, a.jsx)("div", {
            className: p,
            style: t,
            children: (0, a.jsx)(i, {
              style: {
                ...o,
                ...d?.style,
                ...f
              },
              src: u ? m.mobile || m.desktop : m?.desktop || m?.mobile,
              alt: g,
              role: l,
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
    10632: (e, t, s) => {
      "use strict";
      s.d(t, {
        A: () => g
      });
      var a = s(42295),
        r = s(71127),
        n = s(58136),
        i = s(1556),
        c = s.n(i),
        d = s(84927),
        o = s(4407);
      const l = ({
          hero: e,
          children: t
        }) => e ? (0, a.jsx)("div", {
          className: "rockstargames-sites-gta-gen9a429886d721550d02521f7f5c9de7f5b",
          children: t
        }) : t,
        g = ({
          badge: e = null,
          badgeType: t,
          discountTxt: s,
          splitter: i,
          image: g,
          style: m,
          className: u = "",
          attributes: f = {},
          role: p,
          hero: b = !1
        }) => {
          const h = (0, r.useMemo)(() => {
            if (g?.badge || g?.discountTxt || e || s) return (0, a.jsx)(d.A, {
              badge: g?.discountTxt ?? g?.badge ?? e ?? s,
              badgeType: t,
              splitter: g?.splitter ?? i,
              role: g?.role ?? p
            })
          }, [e, t, s, g, p, i]);
          return (0, a.jsx)(l, {
            hero: b,
            children: (0, a.jsx)("figure", {
              children: (0, a.jsxs)("div", {
                className: c()("rockstargames-sites-gta-gen9d9ac792281efe15bcd4589b028d1c27b", b ? "rockstargames-sites-gta-gen9e430c4662cd185f58259d4a8d8b322de" : "", f?.hiddenMobile ? "hiddenMobile" : "", f?.hiddenLarge ? "hiddenLarge" : "", f?.className, u),
                style: (0, n.safeStyles)({
                  ...m,
                  ...f?.style
                }),
                ...f,
                children: [(0, a.jsx)(o.A, {
                  role: g?.accessibleRole,
                  image: g,
                  className: u
                }), h, g?.caption && (0, a.jsx)("figcaption", {
                  dangerouslySetInnerHTML: {
                    __html: g.caption
                  }
                })]
              })
            })
          })
        }
    },
    11206: (e, t, s) => {
      "use strict";
      s.d(t, {
        A: () => d
      });
      const a = {
        randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto)
      };
      let r;
      const n = new Uint8Array(16);

      function i() {
        if (!r && (r = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !r)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return r(n)
      }
      const c = [];
      for (let e = 0; e < 256; ++e) c.push((e + 256).toString(16).slice(1));
      const d = function(e, t, s) {
        if (a.randomUUID && !t && !e) return a.randomUUID();
        const r = (e = e || {}).random || (e.rng || i)();
        if (r[6] = 15 & r[6] | 64, r[8] = 63 & r[8] | 128, t) {
          s = s || 0;
          for (let e = 0; e < 16; ++e) t[s + e] = r[e];
          return t
        }
        return function(e, t = 0) {
          return c[e[t + 0]] + c[e[t + 1]] + c[e[t + 2]] + c[e[t + 3]] + "-" + c[e[t + 4]] + c[e[t + 5]] + "-" + c[e[t + 6]] + c[e[t + 7]] + "-" + c[e[t + 8]] + c[e[t + 9]] + "-" + c[e[t + 10]] + c[e[t + 11]] + c[e[t + 12]] + c[e[t + 13]] + c[e[t + 14]] + c[e[t + 15]]
        }(r)
      }
    },
    12919: (e, t, s) => {
      "use strict";
      s.d(t, {
        Ub: () => n
      });
      var a = s(60211),
        r = s(71127);

      function n(e, {
        defaultValue: t = !1,
        initializeWithValue: s = !0
      } = {}) {
        const n = e => a.X || !window.matchMedia ? t : window.matchMedia(e).matches,
          [i, c] = (0, r.useState)(() => s ? n(e) : t);

        function d() {
          c(n(e))
        }
        return (0, r.useEffect)(() => {
          const t = window.matchMedia?.(e);
          return d(), t?.addListener ? t?.addListener(d) : t?.addEventListener("change", d), () => {
            t?.removeListener ? t?.removeListener(d) : t?.removeEventListener("change", d)
          }
        }, [e]), i
      }
      s(51105)
    },
    16386: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/898794daaec68a69ef5ec4afaefe1948.png"
    },
    24769: (e, t, s) => {
      "use strict";
      s.d(t, {
        A: () => b
      });
      var a = s(42295),
        r = s(71127),
        n = s(24162),
        i = s(85827),
        c = s(11206),
        d = s(1556),
        o = s.n(d),
        l = s(12919);
      const g = {
        active: "rockstargames-sites-gta-gen9fdc2ec652cbb7469f602e73cd10ef997",
        deprecatedCarousel: "rockstargames-sites-gta-gen9a531264d5417d2198d4e14aa72335af1",
        dotsSlide: "rockstargames-sites-gta-gen9b8fd11776fba32f9663bbb6292a5c901",
        hideLarge: "rockstargames-sites-gta-gen9a6c9173aa5a8fe31a062251352a9d711",
        hideMobile: "rockstargames-sites-gta-gen9f3445a74a067bd92ff94b521cb0bdc07",
        imageAreaBg: "rockstargames-sites-gta-gen9dcb2b41007683141579697bb4a8658ba",
        img: "rockstargames-sites-gta-gen9d8e66128b4fef1ea164350cd535e2d68",
        infinite_false: "rockstargames-sites-gta-gen9b85758ee99a52896b94130d002e821c7",
        panorama: "rockstargames-sites-gta-gen9ff63f8addff8d036ca0b65fa495e1653",
        perico: "rockstargames-sites-gta-gen9aa50a9164fd0296b1196d441233cc348",
        renderedWithChildren: "rockstargames-sites-gta-gen9ad7696edafa3086969e7aaece4f09b4f",
        siblings: "rockstargames-sites-gta-gen9f4c50c0daadf81cd292587fcfea1339d",
        "swiper-horizontal": "rockstargames-sites-gta-gen9b823bbff86d38da8cb611a7c3367d8fe",
        "swiper-preloader-spin": "rockstargames-sites-gta-gen9c39b97f81c73d75dc4e013fde14aff18",
        "swiper-scrollbar-disabled": "rockstargames-sites-gta-gen9ee2324d6dd93a95776b1e2d14d0f529d",
        "swiper-vertical": "rockstargames-sites-gta-gen9d29252354bbbfe413678daff5223169d",
        track: "rockstargames-sites-gta-gen9c7c21df4f7f83a73f79dd7913aa87832"
      };
      var m = s(26708),
        u = s(10632);
      const f = ({
          item: e
        }) => (0, a.jsxs)("div", {
          children: [(0, a.jsx)(u.A, {
            image: e?.image,
            badge: e?.badge ?? e?.image?.badge,
            badgeType: "badge3",
            role: e?.role ?? e?.image?.role,
            splitter: e?.splitter ?? e?.image?.splitter,
            type: e?.type,
            ariaLabel: e?.image?.ariaLabel ?? e.description,
            style: e?.style,
            className: o()(g.img, e?.className)
          }), (e?.title || e?.description) && (0, a.jsx)(m.A, {
            item: e
          })]
        }),
        p = ({
          current: e,
          total: t
        }) => (0, a.jsx)("div", {
          className: "swiper-scrollbar",
          style: {
            "--current-slide": e,
            "--total-slides": t
          },
          children: (0, a.jsx)("div", {
            className: "swiper-scrollbar-drag"
          })
        }),
        b = ({
          children: e,
          items: t = [],
          style: s = {},
          noInfiniteScroll: d = !1,
          className: u = "",
          renderTemplate: b = "standard",
          text: h,
          customSpaceBetween: y = null,
          centerSlides: k = !0,
          centeredSlidesBounds: x = !1
        }) => {
          const j = (0, l.Ub)("(min-width: 0px) and (max-width: 768px)"),
            [w, v] = (0, r.useState)(0),
            [_, N] = (0, r.useState)(null),
            T = (0, r.useMemo)(() => e && Array.isArray(e) ? e.map(() => (0, c.A)()) : null, [e, j]),
            S = e => {
              if (!e) return;
              let t = 0;
              e.pagination.bullets.forEach((e, s) => {
                e.classList.contains("swiper-pagination-bullet-active") && (t = s)
              }), v(t)
            };
          if (!(t && 0 !== t?.length || e)) return null;
          const L = {
            0: {
              spaceBetween: y ?? 16
            },
            1024: {
              spaceBetween: y ?? 18
            },
            1920: {
              spaceBetween: y ?? 20
            },
            2560: {
              spaceBetween: y ?? 22
            }
          };
          return (0, a.jsxs)("div", {
            className: o()(g.deprecatedCarousel, g[b], g.infinite_true, e ? g.renderedWithChildren : "", u),
            style: s,
            "data-testid": "carousel",
            children: [(0, a.jsxs)(n.RC, {
              modules: [i.dK, i.Jq],
              pagination: !0,
              a11y: {
                enabled: !0,
                scrollOnFocus: !0
              },
              updateOnWindowResize: !1,
              loop: !1,
              grabCursor: !0,
              centeredSlides: k,
              centerInsufficientSlides: k,
              centeredSlidesBounds: x,
              slidesPerView: "auto",
              speed: 700,
              breakpoints: L,
              onSlideChange: e => {
                S(e)
              },
              onResize: e => {
                null != _ && clearTimeout(_);
                const t = setTimeout(() => {
                  e.update(), e.updateSize(), e.updateSlides(), e.slideToClosest(), S(e)
                }, 250);
                N(t)
              },
              children: [(0, a.jsx)("div", {
                className: g.trackWrapper,
                children: (0, a.jsxs)("div", {
                  className: g.track,
                  children: [t?.map(e => (0, a.jsx)(n.qr, {
                    tabIndex: 0,
                    children: (0, a.jsx)(f, {
                      item: e
                    })
                  }, e.key)), e && e.map((e, t) => e && (0, a.jsx)(n.qr, {
                    children: e
                  }, T && T[t]))]
                })
              }), (0, a.jsx)(p, {
                current: w,
                total: e ? e.length : t.length
              })]
            }), (h?.title || h?.description) && (0, a.jsx)(m.A, {
              item: h
            })]
          })
        }
    },
    24970: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e111377ba943e9eefaa9204f77c77093.png"
    },
    26708: (e, t, s) => {
      "use strict";
      s.d(t, {
        A: () => g
      });
      var a = s(42295),
        r = s(1556),
        n = s.n(r),
        i = s(4407),
        c = s(93935),
        d = s(79704);
      const o = "rockstargames-sites-gta-gen9acd27eff2209196752622710f7b27558",
        l = ({
          to: e,
          children: t
        }) => e ? (0, a.jsx)("a", {
          href: e,
          target: "_blank",
          rel: "noreferrer",
          children: t
        }) : t,
        g = ({
          item: e,
          className: t = ""
        }) => (0, a.jsxs)("div", {
          className: n()("rockstargames-sites-gta-gen9f8bc9589974046cdac4a2264be12d2df", t),
          children: [e.title && (0, a.jsx)(l, {
            to: e?.href ?? e?.to,
            children: (0, a.jsx)("h3", {
              children: e.title
            })
          }), Array.isArray(e?.description?.content) ? e.description.content?.map((e, t) => e?.unorderedList ? (0, a.jsx)(c.A, {
            columns: e.unorderedList.columns ?? null,
            style: {
              "--unordered-list-padding": "var(--grid-gap-static-sm)",
              "--unordered-list-margin-bottom": ".5rem"
            },
            noImg: !0,
            list: e.unorderedList.list
          }, t) : e?.image ? (0, a.jsx)(i.A, {
            image: e.image,
            className: e?.className
          }, t) : e?.separator ? (0, a.jsx)("div", {
            style: {
              margin: `${e.separator.spacing} 0`
            },
            children: (0, a.jsx)(d.A, {})
          }, t) : (0, a.jsx)("p", {
            children: (0, a.jsx)("span", {
              className: o,
              dangerouslySetInnerHTML: {
                __html: e
              }
            })
          }, t)) : (0, a.jsx)("span", {
            className: o,
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
    34725: (e, t, s) => {
      "use strict";
      s.d(t, {
        C1: () => d,
        S1: () => c,
        XC: () => m,
        jS: () => o,
        qg: () => l,
        z0: () => g
      });
      var a = s(71127),
        r = s(58136),
        n = s(74767);
      const i = e => {
          if (!e) return null;
          const {
            hostname: t,
            pathname: s
          } = new URL(e, (0, r.getCdnPrefix)(!0));
          return "/" === s ? null : (t.endsWith(".akamaized.net"), e)
        },
        c = ({
          alt: e = null,
          mobile: t = null,
          imageMobileStyle: s = {},
          desktop: c = null,
          imageDesktopStyle: d = {},
          ariaLabel: o = null,
          sources: l = null,
          prod: g = null
        }) => {
          const m = (0, r.useLocale)(),
            {
              meta: u = {}
            } = (0, n.i)() ?? {},
            [f, p] = (0, a.useState)(g ?? u?.cdn ?? u?.prod ?? !0);
          (0, a.useEffect)(() => {
            p(g ?? u?.cdn ?? u?.prod ?? !0)
          }, [g, u]);
          const b = (0, a.useCallback)(e => {
            const t = null !== l,
              s = e?.previewSrc ?? e ?? null;
            if (null === s || "string" != typeof s) return null;
            if (s.startsWith("http")) return i(s);
            const a = `${t?(0,r.getCdnPrefix)(f):""}${s}`;
            return i(a)
          }, [f, l]);
          return {
            alt: e,
            ariaLabel: o,
            src: {
              mobile: b(l?.[m]?.mobile ?? l?.en_us?.mobile ?? t),
              imageMobileStyle: l?.[m]?.imageMobileStyle ?? l?.en_us?.imageMobileStyle ?? s,
              imageDesktopStyle: l?.[m]?.imageDesktopStyle ?? l?.en_us?.imageDesktopStyle ?? d,
              desktop: b(l?.[m]?.desktop ?? l?.en_us?.desktop ?? c)
            }
          }
        },
        d = e => {
          const t = (0, n.i)() ?? {},
            {
              meta: s = {}
            } = t,
            [c, d] = (0, a.useState)(s?.cdn ?? s?.prod ?? !1);
          return (0, a.useEffect)(() => {
            d(s?.cdn ?? s?.prod ?? !1)
          }, [s]), e ? e?.startsWith("http") ? i(e) : i(`${(0,r.getCdnPrefix)(c)}${e}`) : null
        },
        o = () => {
          const e = (0, n.i)() ?? {},
            {
              meta: t = {}
            } = e,
            s = (0, a.useMemo)(() => t?.cdn ?? t?.prod ?? !1, [t]);
          return (0, a.useCallback)((e, t = {}) => {
            const a = t?.prod ?? s;
            return e ? e?.startsWith("http") ? i(e) : i(`${(0,r.getCdnPrefix)(a)}${e}`) : null
          }, [s])
        },
        l = e => e.full_src,
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
    42649: e => {
      var t, s, a = e.exports = {};

      function r() {
        throw new Error("setTimeout has not been defined")
      }

      function n() {
        throw new Error("clearTimeout has not been defined")
      }

      function i(e) {
        if (t === setTimeout) return setTimeout(e, 0);
        if ((t === r || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
        try {
          return t(e, 0)
        } catch (s) {
          try {
            return t.call(null, e, 0)
          } catch (s) {
            return t.call(this, e, 0)
          }
        }
      }! function() {
        try {
          t = "function" == typeof setTimeout ? setTimeout : r
        } catch (e) {
          t = r
        }
        try {
          s = "function" == typeof clearTimeout ? clearTimeout : n
        } catch (e) {
          s = n
        }
      }();
      var c, d = [],
        o = !1,
        l = -1;

      function g() {
        o && c && (o = !1, c.length ? d = c.concat(d) : l = -1, d.length && m())
      }

      function m() {
        if (!o) {
          var e = i(g);
          o = !0;
          for (var t = d.length; t;) {
            for (c = d, d = []; ++l < t;) c && c[l].run();
            l = -1, t = d.length
          }
          c = null, o = !1,
            function(e) {
              if (s === clearTimeout) return clearTimeout(e);
              if ((s === n || !s) && clearTimeout) return s = clearTimeout, clearTimeout(e);
              try {
                return s(e)
              } catch (t) {
                try {
                  return s.call(null, e)
                } catch (t) {
                  return s.call(this, e)
                }
              }
            }(e)
        }
      }

      function u(e, t) {
        this.fun = e, this.array = t
      }

      function f() {}
      a.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var s = 1; s < arguments.length; s++) t[s - 1] = arguments[s];
        d.push(new u(e, t)), 1 !== d.length || o || i(m)
      }, u.prototype.run = function() {
        this.fun.apply(null, this.array)
      }, a.title = "browser", a.browser = !0, a.env = {}, a.argv = [], a.version = "", a.versions = {}, a.on = f, a.addListener = f, a.once = f, a.off = f, a.removeListener = f, a.removeAllListeners = f, a.emit = f, a.prependListener = f, a.prependOnceListener = f, a.listeners = function(e) {
        return []
      }, a.binding = function(e) {
        throw new Error("process.binding is not supported")
      }, a.cwd = function() {
        return "/"
      }, a.chdir = function(e) {
        throw new Error("process.chdir is not supported")
      }, a.umask = function() {
        return 0
      }
    },
    51105: (e, t, s) => {
      "use strict";
      s.d(t, {
        v: () => c
      });
      var a = s(1556);
      const r = new Map;

      function n(e, t) {
        if (e === t) return e;
        const s = r.get(e);
        if (s) return s.forEach(e => e(t)), t;
        const a = r.get(t);
        return a ? (a.forEach(t => t(e)), e) : t
      }

      function i(...e) {
        return (...t) => {
          for (const s of e) "function" == typeof s && s(...t)
        }
      }

      function c(...e) {
        const t = {
          ...e[0]
        };
        for (let s = 1; s < e.length; s++) {
          const r = e[s];
          for (const e in r) {
            const s = t[e],
              c = r[e];
            "function" == typeof s && "function" == typeof c && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = i(s, c) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof s || "string" != typeof c ? "id" === e && s && c ? t.id = n(s, c) : t[e] = void 0 !== c ? c : s : t[e] = (0, a.clsx)(s, c)
          }
        }
        return t
      }
    },
    55322: (e, t, s) => {
      "use strict";
      s.d(t, {
        A: () => i
      });
      var a = s(42295),
        r = s(71127),
        n = s(64740);
      const i = ({
        children: e,
        ...t
      }) => {
        const [, s] = (0, r.useState)(!1);
        return (0, a.jsx)(n.zb, {
          ...t,
          onReady: () => {
            document.fonts.ready.then(() => {
              s(!0)
            })
          },
          children: e
        })
      }
    },
    60211: (e, t, s) => {
      "use strict";
      s.d(t, {
        X: () => a
      });
      const a = "undefined" == typeof window
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
        var t = n(e);
        return s(t)
      }

      function n(e) {
        if (!s.o(a, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        }
        return a[e]
      }
      r.keys = function() {
        return Object.keys(a)
      }, r.resolve = n, e.exports = r, r.id = 65287
    },
    74767: (e, t, s) => {
      "use strict";
      s.d(t, {
        i: () => d,
        o: () => c
      });
      var a = s(42295),
        r = s(71127);
      const n = (0, s(58136).setContextItem)({
          context: (0, r.createContext)(),
          key: "tinaPayloadContext"
        }),
        {
          Provider: i
        } = n,
        c = ({
          children: e,
          payload: t
        }) => (0, a.jsx)(i, {
          value: t,
          children: e
        }),
        d = () => (0, r.useContext)(n)
    },
    79704: (e, t, s) => {
      "use strict";
      s.d(t, {
        A: () => n
      });
      var a = s(42295);
      const r = {
          gtao: "rockstargames-sites-gta-gen9f66c75c6e882da85fef31e4211ca0be2",
          hr: "rockstargames-sites-gta-gen9dc7b1bc141e132d4ee9b7bf9d55c573a",
          redLine: "rockstargames-sites-gta-gen9d4d968b41ef87926b0b6318e8647738b"
        },
        n = ({
          style: e,
          className: t = "",
          type: s = ""
        }) => (0, a.jsx)("div", {
          style: e,
          className: [r.hr, r[s], t].join(" ")
        })
    },
    84927: (e, t, s) => {
      "use strict";
      s.d(t, {
        A: () => d
      });
      var a = s(42295),
        r = s(4407),
        n = s(55322);
      const i = {
          badge: "rockstargames-sites-gta-gen9b7268b0e907630904b6689af83fee8e3",
          badge2: "rockstargames-sites-gta-gen9d08ce7145bc9562355a3984f8ccc9313",
          badge3: "rockstargames-sites-gta-gen9c7c60cfb12b6e9be68893c60814b3ed7",
          badgeSizeUpdate: "rockstargames-sites-gta-gen9ce8632d7464b556158a1d549f653498c"
        },
        c = ({
          wrapper: e,
          children: t,
          role: s,
          splitter: a
        }) => a || s ? e(t) : t,
        d = ({
          badge: e,
          badgeType: t,
          role: d,
          splitter: o
        }) => {
          const l = [];
          return o ? e.split(o).map(e => l.push(e)) : l.push(e), (0, a.jsxs)(c, {
            splitter: o,
            role: d,
            wrapper: e => (0, a.jsx)("div", {
              className: `${i.badge} ${t?i[t]:""} `,
              children: e
            }),
            children: [(0, a.jsx)(a.Fragment, {
              children: d && (0, a.jsx)(r.A, {
                image: {
                  alt: d,
                  desktop: s(65287)(`./${d}.png`)
                }
              })
            }), (0, a.jsx)(n.A, {
              className: `${o||d?"":i.badge} ${t?i[t]:""}`,
              min: 8,
              max: 1e3,
              mode: o || d ? "single" : "multi",
              children: l[0]
            }), (0, a.jsx)(a.Fragment, {
              children: l.shift() && o && l.length >= 1 && (0, a.jsx)(n.A, {
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
    90884: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, {
        default: () => k
      });
      var a = s(42295),
        r = s(26708),
        n = s(10632),
        i = s(24769);
      const c = {
          carouselTitle: "rockstargames-sites-gta-gen9e9e0ef1bfc3699b1e50c33dd0ce8e76a",
          carouselWrapper: "rockstargames-sites-gta-gen9fabefc39343f6c494eb3d049757d89c5",
          padding: "rockstargames-sites-gta-gen9ac767e959939b4d56b2358cb263d07ad"
        },
        d = ({
          to: e,
          children: t
        }) => e ? (0, a.jsx)("a", {
          href: e,
          target: "_blank",
          children: t
        }) : t,
        o = ({
          items: e = [],
          text: t = {},
          style: s,
          className: o = "",
          id: l = null
        }) => e?.length ? (0, a.jsxs)("div", {
          id: l,
          "data-testid": `carousel${o&&`-${o}`}-group-of-items`,
          children: [(0, a.jsx)(i.A, {
            style: s,
            className: [o, c.carouselWrapper].join(" "),
            children: e.map(e => (0, a.jsxs)("div", {
              id: e?.id ?? null,
              children: [(0, a.jsx)(n.A, {
                image: e?.image,
                badge: e?.badge ?? e?.image?.badge,
                badgeType: "badge3",
                role: e?.role ?? e?.image?.role,
                splitter: e?.splitter ?? e?.image?.splitter,
                type: e?.type,
                ariaLabel: e?.image?.ariaLabel ?? e.description,
                style: e?.style,
                className: [c.img, e?.className].join(" ")
              }), e.title && (0, a.jsx)(d, {
                to: e?.to,
                children: (0, a.jsx)("h4", {
                  className: c.carouselTitle,
                  children: e.title
                })
              }), e.description && (0, a.jsx)("span", {
                className: c.description,
                dangerouslySetInnerHTML: {
                  __html: e.description
                }
              })]
            }, e?.key ?? e?.title))
          }), t?.title || t?.description ? (0, a.jsx)("div", {
            className: c.padding,
            style: t?.style ?? {},
            children: (0, a.jsx)(r.A, {
              item: t
            })
          }) : ""]
        }) : null;
      var l = s(31879),
        g = s.n(l),
        m = s(22030),
        u = s(1556),
        f = s.n(u);
      const p = ({
          impressionTracking: e,
          gtm: t = {},
          children: s
        }) => e?.shouldTrack ? (0, a.jsx)(m.InViewTracker, {
          threshold: e?.threshold,
          gtm: t,
          children: s
        }) : s,
        b = ({
          to: e,
          children: t
        }) => e ? (0, a.jsx)("a", {
          href: e,
          target: "_blank",
          rel: "noreferrer",
          children: t
        }) : t,
        h = ({
          item: e
        }) => e?.videoId ? (0, a.jsx)(g(), {
          context: "site",
          autoplay: !1,
          id: e.videoId
        }) : (0, a.jsx)(n.A, {
          image: e?.image,
          badge: e?.badge ?? e?.image?.badge,
          badgeType: "badge3",
          role: e?.role ?? e?.image?.role,
          splitter: e?.splitter ?? e?.image?.splitter,
          ariaLabel: e?.image?.ariaLabel,
          style: e?.style,
          className: e?.className
        }),
        y = ({
          items: e,
          style: t = {},
          className: s = "",
          id: n = null
        }) => (0, a.jsx)("div", {
          style: t,
          className: f()("rockstargames-sites-gta-gen9d38af92e8657708abd3dc5295e62476c", s),
          id: n,
          "data-testid": "standard-group-of-items",
          children: e.map(e => (0, a.jsx)(p, {
            impressionTracking: e?.impressionTracking,
            gtm: e?.gtm,
            children: (0, a.jsx)(b, {
              to: e?.to,
              children: (0, a.jsxs)("div", {
                className: f()("rockstargames-sites-gta-gen9a9b63d3aa2f18fa6c84b19c8993a7893", e.className),
                style: e?.style ?? {},
                ...e?.props,
                children: [e?.image || e?.videoId ? (0, a.jsx)(h, {
                  item: e
                }) : "", e.title || e.description ? (0, a.jsx)(r.A, {
                  item: e,
                  className: "rockstargames-sites-gta-gen9bc47d354556b20071313d2c1ccc3debd"
                }) : ""]
              })
            })
          }, e.key))
        }),
        k = ({
          children: e = null,
          text: t = {},
          items: s = [],
          renderTemplate: r = "",
          style: n = {},
          id: i = null,
          ...c
        }) => {
          if (!s.length) return null;
          switch (r) {
            case "carousel":
              return (0, a.jsx)(o, {
                text: t,
                items: s,
                style: n,
                id: i,
                children: e
              });
            case "carousel-panorama":
              return (0, a.jsx)(o, {
                text: t,
                items: s,
                style: n,
                className: "panorama",
                id: i,
                children: e
              });
            default:
              return (0, a.jsx)(y, {
                items: s,
                style: n,
                id: i,
                ...c,
                children: e
              })
          }
        }
    },
    93935: (e, t, s) => {
      "use strict";
      s.d(t, {
        A: () => m
      });
      var a = s(42295),
        r = s(71127),
        n = s(27785),
        i = s.n(n),
        c = s(58136),
        d = s(1556),
        o = s.n(d);
      const l = {
          blue: "rockstargames-sites-gta-gen9df5c0d39e32be4e6977bb1d638ed2340",
          custom: "rockstargames-sites-gta-gen9ef5369875ddc5d9d7ad36eadc8afab2e",
          darkBlue: "rockstargames-sites-gta-gen9aa460ec14f75c93c2ba386a115ea407c",
          darkRed: "rockstargames-sites-gta-gen9a6a078bd68ef39e719c21e5db6329642",
          goldenrod: "rockstargames-sites-gta-gen9a55d762df7035a2394c9ffbfcbf1a0db",
          green: "rockstargames-sites-gta-gen9ea2d0d0e1e32d8e48d79a0ad80a4c8ac",
          grid: "rockstargames-sites-gta-gen9c157d94760f0476ea06aa04da4e86727",
          gtao: "rockstargames-sites-gta-gen9f4bc90102d24f73cb2d45d3821bfd32e",
          gtaplus: "rockstargames-sites-gta-gen9c5d92b0365dc60e6b93d321e9139e9f3",
          hotPink: "rockstargames-sites-gta-gen9fa9be84c85fca4e66b2489e1e52a2e6a",
          itemList: "rockstargames-sites-gta-gen9a1ccd04246730848111c4868ccba6294",
          noImg: "rockstargames-sites-gta-gen9b239e263450a84fffba43a94c194d606",
          pillBtn: "rockstargames-sites-gta-gen9d45dcc8e4008f8620987ea3033e4373d",
          purple: "rockstargames-sites-gta-gen9f14d63f28dd73c05cf950a08d8b8f501",
          rdo: "rockstargames-sites-gta-gen9cc490e805fe55ab86a3ec5df2a5131e3",
          red: "rockstargames-sites-gta-gen9c446b758dbe82ad97444174f4d0b4abe",
          selected: "rockstargames-sites-gta-gen9de1852cf9b8b4b71bcc67f8e66552c46",
          skull: "rockstargames-sites-gta-gen9a034e7482e8f28c66ec657f72bb93749",
          teal: "rockstargames-sites-gta-gen9a0aaa124176430b6ad4f959cf136e7a3",
          turquoise: "rockstargames-sites-gta-gen9b03c0798d8655dd98518b2f0dc002f06",
          yellow: "rockstargames-sites-gta-gen9bdb57ca410954012dfd4711c67fc2a18"
        },
        {
          sanitize: g
        } = i(),
        m = ({
          list: e,
          string: t,
          starColor: s,
          style: n,
          className: i,
          game: d,
          noImg: m,
          columns: u,
          mobileColumns: f
        }) => {
          const [p, b] = (0, r.useState)(null), h = t ? t.split("_#_") : e;
          if ((0, r.useEffect)(() => {
              b(e)
            }, [e]), !t && !e) return null;
          const y = {
            color: n?.color
          };
          return delete n?.color, u && p ? (0, a.jsx)("div", {
            className: l.grid,
            style: {
              "--unordered-list-grid-column": u,
              "--unordered-list-grid-column-mobile": f ?? u
            },
            children: (0, a.jsx)("ul", {
              className: o()(l.itemList, l.noImg, l[s], l[d]),
              style: (0, c.safeStyles)(n),
              children: p.map((e, t) => (0, a.jsx)("li", {
                style: y,
                dangerouslySetInnerHTML: {
                  __html: g(e.content)
                }
              }, t))
            })
          }) : (0, a.jsx)("ul", {
            style: (0, c.safeStyles)(n),
            className: o()(l.itemList, l.custom, m ? l.noImg : "", s ? l[s] : "", d ? l[d] : "", i ?? ""),
            children: h.map((e, t) => (0, a.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: g(e?.content ?? e)
              }
            }, t))
          })
        }
    }
  }
]);