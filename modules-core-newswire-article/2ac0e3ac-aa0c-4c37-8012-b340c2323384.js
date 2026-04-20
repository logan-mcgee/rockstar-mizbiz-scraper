try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "2ac0e3ac-aa0c-4c37-8012-b340c2323384", e._sentryDebugIdIdentifier = "sentry-dbid-2ac0e3ac-aa0c-4c37-8012-b340c2323384")
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
  [1871, 9477], {
    2661: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4639a2711d1bca49a87c302784050ee3.png"
    },
    4407: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => c
      });
      var a = r(42295),
        s = r(34725),
        n = r(58136);
      const o = ({
          alt: e,
          className: t,
          src: s,
          role: o,
          style: i
        }) => {
          const [c, l] = (0, n.usePreloadImg)(s);
          let d = s;
          !1 === c && (d = r(9333));
          const {
            width: u,
            height: f
          } = l, m = {
            "--aspect-ratio": Number.isNaN(u / f) ? "" : u / f,
            ...i
          };
          return (0, a.jsx)("img", {
            src: d,
            className: t ?? "",
            alt: e,
            style: m,
            role: o
          })
        },
        i = "rockstargames-modules-core-newswire-articlec8dc03880ce2e12f3fdea5b5b587f27f",
        c = ({
          className: e,
          style: t = {},
          image: c = {},
          imageStyle: l = {},
          role: d = "img"
        }) => {
          let {
            alt: u,
            src: f
          } = (0, s.S1)(c);
          const {
            isMobile: m
          } = (0, n.useWindowResize)(), p = m ? f.imageMobileStyle : f.imageDesktopStyle;
          f.desktop || f.mobile || (u = "", f = {
            mobile: r(28839),
            desktop: r(9333)
          });
          let g = c.frame ? `${c.frame} ${i}` : i;
          return (0, a.jsx)("div", {
            className: g,
            style: t,
            children: (0, a.jsx)(o, {
              style: {
                ...l,
                ...c?.style,
                ...p
              },
              src: m ? f.mobile || f.desktop : f?.desktop || f?.mobile,
              alt: u,
              role: d,
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
    9738: (e, t, r) => {
      var a = r(56130),
        s = r(28593),
        n = r(22909),
        o = Math.max,
        i = Math.min;
      e.exports = function(e, t, r) {
        var c, l, d, u, f, m, p = 0,
          g = !1,
          b = !1,
          h = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");

        function v(t) {
          var r = c,
            a = l;
          return c = l = void 0, p = t, u = e.apply(a, r)
        }

        function x(e) {
          var r = e - m;
          return void 0 === m || r >= t || r < 0 || b && e - p >= d
        }

        function w() {
          var e = s();
          if (x(e)) return y(e);
          f = setTimeout(w, function(e) {
            var r = t - (e - m);
            return b ? i(r, d - (e - p)) : r
          }(e))
        }

        function y(e) {
          return f = void 0, h && c ? v(e) : (c = l = void 0, u)
        }

        function k() {
          var e = s(),
            r = x(e);
          if (c = arguments, l = this, m = e, r) {
            if (void 0 === f) return function(e) {
              return p = e, f = setTimeout(w, t), g ? v(e) : u
            }(m);
            if (b) return clearTimeout(f), f = setTimeout(w, t), v(m)
          }
          return void 0 === f && (f = setTimeout(w, t)), u
        }
        return t = n(t) || 0, a(r) && (g = !!r.leading, d = (b = "maxWait" in r) ? o(n(r.maxWait) || 0, t) : d, h = "trailing" in r ? !!r.trailing : h), k.cancel = function() {
          void 0 !== f && clearTimeout(f), p = 0, c = m = l = f = void 0
        }, k.flush = function() {
          return void 0 === f ? u : y(s())
        }, k
      }
    },
    10533: (e, t, r) => {
      var a = r(86601);
      e.exports = function(e, t, r, s) {
        return s = "function" == typeof s ? s : void 0, null == e ? e : a(e, t, r, s)
      }
    },
    10613: (e, t, r) => {
      var a = r(23117);
      e.exports = function(e, t, r) {
        var s = null == e ? void 0 : a(e, t);
        return void 0 === s ? r : s
      }
    },
    10632: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => u
      });
      var a = r(42295),
        s = r(71127),
        n = r(58136),
        o = r(1556),
        i = r.n(o),
        c = r(84927),
        l = r(4407);
      const d = ({
          hero: e,
          children: t
        }) => e ? (0, a.jsx)("div", {
          className: "rockstargames-modules-core-newswire-articlea429886d721550d02521f7f5c9de7f5b",
          children: t
        }) : t,
        u = ({
          badge: e = null,
          badgeType: t,
          discountTxt: r,
          splitter: o,
          image: u,
          style: f,
          className: m = "",
          attributes: p = {},
          role: g,
          hero: b = !1
        }) => {
          const h = (0, s.useMemo)(() => {
            if (u?.badge || u?.discountTxt || e || r) return (0, a.jsx)(c.A, {
              badge: u?.discountTxt ?? u?.badge ?? e ?? r,
              badgeType: t,
              splitter: u?.splitter ?? o,
              role: u?.role ?? g
            })
          }, [e, t, r, u, g, o]);
          return (0, a.jsx)(d, {
            hero: b,
            children: (0, a.jsx)("figure", {
              children: (0, a.jsxs)("div", {
                className: i()("rockstargames-modules-core-newswire-articled9ac792281efe15bcd4589b028d1c27b", b ? "rockstargames-modules-core-newswire-articlee430c4662cd185f58259d4a8d8b322de" : "", p?.hiddenMobile ? "hiddenMobile" : "", p?.hiddenLarge ? "hiddenLarge" : "", p?.className, m),
                style: (0, n.safeStyles)({
                  ...f,
                  ...p?.style
                }),
                ...p,
                children: [(0, a.jsx)(l.A, {
                  role: u?.accessibleRole,
                  image: u,
                  className: m
                }), h, u?.caption && (0, a.jsx)("figcaption", {
                  dangerouslySetInnerHTML: {
                    __html: u.caption
                  }
                })]
              })
            })
          })
        }
    },
    16386: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/898794daaec68a69ef5ec4afaefe1948.png"
    },
    22909: (e, t, r) => {
      var a = r(87625),
        s = r(56130),
        n = r(25733),
        o = /^[-+]0x[0-9a-f]+$/i,
        i = /^0b[01]+$/i,
        c = /^0o[0-7]+$/i,
        l = parseInt;
      e.exports = function(e) {
        if ("number" == typeof e) return e;
        if (n(e)) return NaN;
        if (s(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = s(t) ? t + "" : t
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = a(e);
        var r = i.test(e);
        return r || c.test(e) ? l(e.slice(2), r ? 2 : 8) : o.test(e) ? NaN : +e
      }
    },
    24970: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e111377ba943e9eefaa9204f77c77093.png"
    },
    28593: (e, t, r) => {
      var a = r(15036);
      e.exports = function() {
        return a.Date.now()
      }
    },
    28839: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61ae357c3bfbabb5d765e9a7c794d08f.png"
    },
    31454: (e, t, r) => {
      var a = r(49192);
      e.exports = function(e) {
        return a(e, 5)
      }
    },
    34725: (e, t, r) => {
      "use strict";
      r.d(t, {
        C1: () => c,
        S1: () => i,
        XC: () => f,
        jS: () => l,
        qg: () => d,
        z0: () => u
      });
      var a = r(71127),
        s = r(58136),
        n = r(74767);
      const o = e => {
          if (!e) return null;
          const {
            hostname: t,
            pathname: r
          } = new URL(e, (0, s.getCdnPrefix)(!0));
          return "/" === r ? null : (t.endsWith(".akamaized.net"), e)
        },
        i = ({
          alt: e = null,
          mobile: t = null,
          imageMobileStyle: r = {},
          desktop: i = null,
          imageDesktopStyle: c = {},
          ariaLabel: l = null,
          sources: d = null,
          prod: u = null
        }) => {
          const f = (0, s.useLocale)(),
            {
              meta: m = {}
            } = (0, n.i)() ?? {},
            [p, g] = (0, a.useState)(u ?? m?.cdn ?? m?.prod ?? !0);
          (0, a.useEffect)(() => {
            g(u ?? m?.cdn ?? m?.prod ?? !0)
          }, [u, m]);
          const b = (0, a.useCallback)(e => {
            const t = null !== d,
              r = e?.previewSrc ?? e ?? null;
            if (null === r || "string" != typeof r) return null;
            if (r.startsWith("http")) return o(r);
            const a = `${t?(0,s.getCdnPrefix)(p):""}${r}`;
            return o(a)
          }, [p, d]);
          return {
            alt: e,
            ariaLabel: l,
            src: {
              mobile: b(d?.[f]?.mobile ?? d?.en_us?.mobile ?? t),
              imageMobileStyle: d?.[f]?.imageMobileStyle ?? d?.en_us?.imageMobileStyle ?? r,
              imageDesktopStyle: d?.[f]?.imageDesktopStyle ?? d?.en_us?.imageDesktopStyle ?? c,
              desktop: b(d?.[f]?.desktop ?? d?.en_us?.desktop ?? i)
            }
          }
        },
        c = e => {
          const t = (0, n.i)() ?? {},
            {
              meta: r = {}
            } = t,
            [i, c] = (0, a.useState)(r?.cdn ?? r?.prod ?? !1);
          return (0, a.useEffect)(() => {
            c(r?.cdn ?? r?.prod ?? !1)
          }, [r]), e ? e?.startsWith("http") ? o(e) : o(`${(0,s.getCdnPrefix)(i)}${e}`) : null
        },
        l = () => {
          const e = (0, n.i)() ?? {},
            {
              meta: t = {}
            } = e,
            r = (0, a.useMemo)(() => t?.cdn ?? t?.prod ?? !1, [t]);
          return (0, a.useCallback)((e, t = {}) => {
            const a = t?.prod ?? r;
            return e ? e?.startsWith("http") ? o(e) : o(`${(0,s.getCdnPrefix)(a)}${e}`) : null
          }, [r])
        },
        d = e => e.full_src,
        u = e => {
          const t = e?.previewSrc ?? e?.preview_src ?? e;
          return t?.startsWith("http") ? t : `${(0,s.getCdnPrefix)(!1)}${t}`
        },
        f = e => e.meta.uploads_directory
    },
    38635: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6e77bb0f25a6ea37e8d831b12df9fa3c.png"
    },
    55322: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => o
      });
      var a = r(42295),
        s = r(71127),
        n = r(64740);
      const o = ({
        children: e,
        ...t
      }) => {
        const [, r] = (0, s.useState)(!1);
        return (0, a.jsx)(n.zb, {
          ...t,
          onReady: () => {
            document.fonts.ready.then(() => {
              r(!0)
            })
          },
          children: e
        })
      }
    },
    65287: (e, t, r) => {
      var a = {
        "./bounty.png": 7502,
        "./collector.png": 24970,
        "./moonshiner.png": 2661,
        "./naturalist.png": 16386,
        "./trader.png": 38635
      };

      function s(e) {
        var t = n(e);
        return r(t)
      }

      function n(e) {
        if (!r.o(a, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        }
        return a[e]
      }
      s.keys = function() {
        return Object.keys(a)
      }, s.resolve = n, e.exports = s, s.id = 65287
    },
    74767: (e, t, r) => {
      "use strict";
      r.d(t, {
        i: () => c,
        o: () => i
      });
      var a = r(42295),
        s = r(71127);
      const n = (0, r(58136).setContextItem)({
          context: (0, s.createContext)(),
          key: "tinaPayloadContext"
        }),
        {
          Provider: o
        } = n,
        i = ({
          children: e,
          payload: t
        }) => (0, a.jsx)(o, {
          value: t,
          children: e
        }),
        c = () => (0, s.useContext)(n)
    },
    75888: e => {
      var t = Math.ceil,
        r = Math.max;
      e.exports = function(e, a, s, n) {
        for (var o = -1, i = r(t((a - e) / (s || 1)), 0), c = Array(i); i--;) c[n ? i : ++o] = e, e += s;
        return c
      }
    },
    84927: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => c
      });
      var a = r(42295),
        s = r(4407),
        n = r(55322);
      const o = {
          badge: "rockstargames-modules-core-newswire-articleb7268b0e907630904b6689af83fee8e3",
          badge2: "rockstargames-modules-core-newswire-articled08ce7145bc9562355a3984f8ccc9313",
          badge3: "rockstargames-modules-core-newswire-articlec7c60cfb12b6e9be68893c60814b3ed7",
          badgeSizeUpdate: "rockstargames-modules-core-newswire-articlece8632d7464b556158a1d549f653498c"
        },
        i = ({
          wrapper: e,
          children: t,
          role: r,
          splitter: a
        }) => a || r ? e(t) : t,
        c = ({
          badge: e,
          badgeType: t,
          role: c,
          splitter: l
        }) => {
          const d = [];
          return l ? e.split(l).map(e => d.push(e)) : d.push(e), (0, a.jsxs)(i, {
            splitter: l,
            role: c,
            wrapper: e => (0, a.jsx)("div", {
              className: `${o.badge} ${t?o[t]:""} `,
              children: e
            }),
            children: [(0, a.jsx)(a.Fragment, {
              children: c && (0, a.jsx)(s.A, {
                image: {
                  alt: c,
                  desktop: r(65287)(`./${c}.png`)
                }
              })
            }), (0, a.jsx)(n.A, {
              className: `${l||c?"":o.badge} ${t?o[t]:""}`,
              min: 8,
              max: 1e3,
              mode: l || c ? "single" : "multi",
              children: d[0]
            }), (0, a.jsx)(a.Fragment, {
              children: d.shift() && l && d.length >= 1 && (0, a.jsx)(n.A, {
                min: 8,
                max: 1e3,
                mode: "single",
                forceSingleModeWidth: !0,
                children: d.join(" ")
              })
            })]
          }, "badge-wrapper")
        }
    },
    85531: e => {
      var t = /\s/;
      e.exports = function(e) {
        for (var r = e.length; r-- && t.test(e.charAt(r)););
        return r
      }
    },
    86601: (e, t, r) => {
      var a = r(56312),
        s = r(78328),
        n = r(21574),
        o = r(56130),
        i = r(81966);
      e.exports = function(e, t, r, c) {
        if (!o(e)) return e;
        for (var l = -1, d = (t = s(t, e)).length, u = d - 1, f = e; null != f && ++l < d;) {
          var m = i(t[l]),
            p = r;
          if ("__proto__" === m || "constructor" === m || "prototype" === m) return e;
          if (l != u) {
            var g = f[m];
            void 0 === (p = c ? c(g, m, f) : void 0) && (p = o(g) ? g : n(t[l + 1]) ? [] : {})
          }
          a(f, m, p), f = f[m]
        }
        return e
      }
    },
    87625: (e, t, r) => {
      var a = r(85531),
        s = /^\s+/;
      e.exports = function(e) {
        return e ? e.slice(0, a(e) + 1).replace(s, "") : e
      }
    },
    89477: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, {
        default: () => h
      });
      var a = r(42295),
        s = r(71127),
        n = r(85827),
        o = r(24162),
        i = r(83613),
        c = r(10632),
        l = r(1556),
        d = r.n(l);
      const u = {
          active: "rockstargames-modules-core-newswire-articleff176766f8bcd61f0d409caa3d43cdef",
          backgroundContent: "rockstargames-modules-core-newswire-articlefbee414bfae93f3621f4445ff9c4bf7c",
          bottom: "rockstargames-modules-core-newswire-articlee515362b60fbd4b87445a327de93234e",
          customPagination: "rockstargames-modules-core-newswire-articled4781b21716aa12e5b05f8f31172f10b",
          fadeIn: "rockstargames-modules-core-newswire-articlebd483b684147d4885faa226c74eb7d1d",
          foregroundContent: "rockstargames-modules-core-newswire-articlefee922e055933776f0d9fc3b3ee8aaab",
          left: "rockstargames-modules-core-newswire-articleca8f1364250e53c94ffb4a0147702b20",
          nextBtn: "rockstargames-modules-core-newswire-articlef973aaa2cc8eeceebc88bd5deaadfa74",
          panoramaCarouselWrapper: "rockstargames-modules-core-newswire-articleb4ada92c1921a931c699aafbbfb90d13",
          prevBtn: "rockstargames-modules-core-newswire-articleb13b550f10699e799bf6296b708e9473",
          right: "rockstargames-modules-core-newswire-articleada7cdbc241d461551ac775229986a37",
          slideContent: "rockstargames-modules-core-newswire-articled8c6874e2f33425124e575a60fa339ab",
          slotContainer: "rockstargames-modules-core-newswire-articlef7f1e5026f11d0cc5e371f990c3620e7",
          "swiper-navigation-disabled": "rockstargames-modules-core-newswire-articled20ad0b7e7720a75082106c87130274f",
          "swiper-preloader-spin": "rockstargames-modules-core-newswire-articledfaec79c93eeafe2c26c2f2e0c576afd",
          "swiper-rtl": "rockstargames-modules-core-newswire-articlec658d9e1c69cce7a4a70ef2d52858eba",
          top: "rockstargames-modules-core-newswire-articleec807ccbb44eb584b15097ea4127de46"
        },
        f = ({
          shouldFade: e,
          condition: t,
          className: r,
          children: s
        }) => (0, a.jsx)("div", {
          className: d()(r, e ? u.fadeIn : "", t ? u.active : ""),
          children: s
        }),
        m = ({
          currentSlide: e,
          prevRef: t,
          nextRef: r
        }) => (0, a.jsxs)("div", {
          className: u.customPagination,
          children: [(0, a.jsx)("button", {
            type: "button",
            className: u.prevBtn,
            ref: t,
            "aria-label": "Previous Slide",
            children: (0, a.jsx)(i.ChevronLeft, {
              label: "Previous Slide",
              size: "LG"
            })
          }), (0, a.jsx)("span", {
            children: e?.itemName ?? "Item"
          }), (0, a.jsx)("button", {
            type: "button",
            className: u.nextBtn,
            ref: r,
            "aria-label": "Next Slide",
            children: (0, a.jsx)(i.ChevronRight, {
              label: "Next Slide",
              size: "LG"
            })
          })]
        }),
        p = ({
          item: e,
          vertical: t,
          horizontal: r
        }) => e && e?.content ? (0, a.jsx)(f, {
          shouldFade: e?.fadeIn,
          condition: e?.fadeIn,
          className: d()(u.slot, u[t], u[r]),
          children: (0, a.jsx)(c.A, {
            ...e.content[0]
          })
        }) : null,
        g = ({
          active: e = !1,
          backgroundContent: t,
          foregroundContent: r
        }) => (0, a.jsxs)("div", {
          className: u.slideContent,
          children: [t && (0, a.jsx)(f, {
            shouldFade: t?.fadeIn,
            condition: e,
            children: (0, a.jsx)("div", {
              className: u.backgroundContent,
              children: (0, a.jsx)(c.A, {
                ...t.imageWithBadge
              })
            })
          }), r && (0, a.jsx)(f, {
            shouldFade: r?.fadeIn,
            condition: e,
            children: (0, a.jsx)("div", {
              className: u.foregroundContent,
              children: (0, a.jsx)(c.A, {
                ...r.imageWithBadge
              })
            })
          })]
        }),
        b = ({
          loop: e = !0,
          grabCursor: t = !0,
          centeredSlides: r = !0,
          slides: i = null
        }) => {
          const [c, l] = (0, s.useState)(null), f = (0, s.useRef)(null), b = (0, s.useRef)(null), [h, v] = (0, s.useState)();
          return (0, s.useEffect)(() => {
            v({
              nextEl: b.current,
              prevEl: f.current
            })
          }, [b, f]), i ? (0, a.jsx)("div", {
            className: u.panoramaCarouselWrapper,
            children: (0, a.jsxs)(o.RC, {
              loop: e,
              grabCursor: t,
              centeredSlides: r,
              slidesPerView: 1,
              spaceBetween: 0,
              modules: [n.Vx],
              navigation: h,
              pagination: !1,
              speed: 700,
              onActiveIndexChange: e => {
                l(i[e?.realIndex ?? 0])
              },
              onInit: e => {
                e.params.navigation.prevEl = f.current, e.params.navigation.nextEl = b.current, e?.navigation.init(), e?.navigation.update()
              },
              breakpoints: {
                768: {
                  slidesPerView: 1.25
                },
                1024: {
                  slidesPerView: 1.5
                },
                1920: {
                  slidesPerView: 1.75
                }
              },
              children: [(0, a.jsxs)("div", {
                className: d()(u.slotContainer, u.top),
                children: [(0, a.jsx)(p, {
                  item: c?.topLeftSlot,
                  vertical: "top",
                  horizontal: "left"
                }), (0, a.jsx)(p, {
                  item: c?.topCenterSlot,
                  vertical: "top",
                  horizontal: "center"
                }), (0, a.jsx)(p, {
                  item: c?.topRightSlot,
                  vertical: "top",
                  horizontal: "right"
                })]
              }), i.map(e => (0, a.jsx)(o.qr, {
                children: ({
                  isActive: t
                }) => (0, a.jsx)(g, {
                  active: t,
                  ...e
                })
              }, e?.key)), (0, a.jsxs)("div", {
                className: d()(u.slotContainer, u.bottom),
                children: [(0, a.jsx)(p, {
                  item: c?.bottomLeftSlot,
                  vertical: "bottom",
                  horizontal: "left"
                }), (0, a.jsx)(p, {
                  item: c?.bottomRightSlot,
                  vertical: "bottom",
                  horizontal: "right"
                })]
              }), (0, a.jsx)(m, {
                currentSlide: c,
                prevRef: f,
                nextRef: b
              })]
            })
          }) : null
        },
        h = ({
          type: e = null,
          className: t,
          style: r,
          panoramaCarousel: s
        }) => {
          return e ? (n = b, o = s, (0, a.jsx)(n, {
            className: t,
            style: r,
            ...o
          })) : null;
          var n, o
        }
    },
    95187: (e, t, r) => {
      var a = r(22909),
        s = 1 / 0;
      e.exports = function(e) {
        return e ? (e = a(e)) === s || e === -1 / 0 ? 17976931348623157e292 * (e < 0 ? -1 : 1) : e == e ? e : 0 : 0 === e ? e : 0
      }
    },
    95362: (e, t, r) => {
      "use strict";
      r.d(t, {
        s: () => o,
        t: () => n
      });
      var a = r(71127);

      function s(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
      }

      function n(...e) {
        return t => {
          let r = !1;
          const a = e.map(e => {
            const a = s(e, t);
            return r || "function" != typeof a || (r = !0), a
          });
          if (r) return () => {
            for (let t = 0; t < a.length; t++) {
              const r = a[t];
              "function" == typeof r ? r() : s(e[t], null)
            }
          }
        }
      }

      function o(...e) {
        return a.useCallback(n(...e), e)
      }
    },
    98312: (e, t, r) => {
      var a = r(99335)();
      e.exports = a
    },
    99335: (e, t, r) => {
      var a = r(75888),
        s = r(4661),
        n = r(95187);
      e.exports = function(e) {
        return function(t, r, o) {
          return o && "number" != typeof o && s(t, r, o) && (r = o = void 0), t = n(t), void 0 === r ? (r = t, t = 0) : r = n(r), o = void 0 === o ? t < r ? 1 : -1 : n(o), a(t, r, o, e)
        }
      }
    }
  }
]);