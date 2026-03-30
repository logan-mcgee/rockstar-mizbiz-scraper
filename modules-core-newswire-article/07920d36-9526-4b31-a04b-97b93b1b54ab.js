try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "07920d36-9526-4b31-a04b-97b93b1b54ab", e._sentryDebugIdIdentifier = "sentry-dbid-07920d36-9526-4b31-a04b-97b93b1b54ab")
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
  [1858, 9477], {
    2661: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4639a2711d1bca49a87c302784050ee3.png"
    },
    4407: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => c
      });
      var s = a(42295),
        r = a(34725),
        o = a(58136);
      const n = ({
          alt: e,
          className: t,
          src: r,
          role: n,
          style: i
        }) => {
          const [c, l] = (0, o.usePreloadImg)(r);
          let d = r;
          !1 === c && (d = a(9333));
          const {
            width: m,
            height: u
          } = l, f = {
            "--aspect-ratio": Number.isNaN(m / u) ? "" : m / u,
            ...i
          };
          return (0, s.jsx)("img", {
            src: d,
            className: t ?? "",
            alt: e,
            style: f,
            role: n
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
            alt: m,
            src: u
          } = (0, r.S1)(c);
          const {
            isMobile: f
          } = (0, o.useWindowResize)();
          u.desktop || u.mobile || (m = "", u = {
            mobile: a(28839),
            desktop: a(9333)
          });
          let b = c.frame ? `${c.frame} ${i}` : i;
          return (0, s.jsx)("div", {
            className: b,
            style: t,
            children: (0, s.jsx)(n, {
              style: {
                ...l,
                ...c?.style
              },
              src: f ? u.mobile || u.desktop : u?.desktop || u?.mobile,
              alt: m,
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
    10632: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => m
      });
      var s = a(42295),
        r = a(71127),
        o = a(58136),
        n = a(1556),
        i = a.n(n),
        c = a(84927),
        l = a(4407);
      const d = ({
          hero: e,
          children: t
        }) => e ? (0, s.jsx)("div", {
          className: "rockstargames-modules-core-newswire-articlea429886d721550d02521f7f5c9de7f5b",
          children: t
        }) : t,
        m = ({
          badge: e = null,
          badgeType: t,
          discountTxt: a,
          splitter: n,
          image: m,
          style: u,
          className: f = "",
          attributes: b = {},
          role: g,
          hero: p = !1
        }) => {
          const h = (0, r.useMemo)(() => {
            if (m?.badge || m?.discountTxt || e || a) return (0, s.jsx)(c.A, {
              badge: m?.discountTxt ?? m?.badge ?? e ?? a,
              badgeType: t,
              splitter: m?.splitter ?? n,
              role: m?.role ?? g
            })
          }, [e, t, a, m, g, n]);
          return (0, s.jsx)(d, {
            hero: p,
            children: (0, s.jsx)("figure", {
              children: (0, s.jsxs)("div", {
                className: i()("rockstargames-modules-core-newswire-articled9ac792281efe15bcd4589b028d1c27b", p ? "rockstargames-modules-core-newswire-articlee430c4662cd185f58259d4a8d8b322de" : "", b?.hiddenMobile ? "hiddenMobile" : "", b?.hiddenLarge ? "hiddenLarge" : "", b?.className, f),
                style: (0, o.safeStyles)({
                  ...u,
                  ...b?.style
                }),
                ...b,
                children: [(0, s.jsx)(l.A, {
                  role: m?.accessibleRole,
                  image: m,
                  className: f
                }), h, m?.caption && (0, s.jsx)("figcaption", {
                  dangerouslySetInnerHTML: {
                    __html: m.caption
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
    24970: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e111377ba943e9eefaa9204f77c77093.png"
    },
    28839: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61ae357c3bfbabb5d765e9a7c794d08f.png"
    },
    34725: (e, t, a) => {
      "use strict";
      a.d(t, {
        C1: () => c,
        S1: () => i,
        XC: () => u,
        jS: () => l,
        qg: () => d,
        z0: () => m
      });
      var s = a(71127),
        r = a(58136),
        o = a(74767);
      const n = e => {
          if (!e) return null;
          const {
            hostname: t,
            pathname: a
          } = new URL(e, (0, r.getCdnPrefix)(!0));
          return "/" === a ? null : (t.endsWith(".akamaized.net"), e)
        },
        i = ({
          alt: e = null,
          mobile: t = null,
          desktop: a = null,
          ariaLabel: i = null,
          sources: c = null,
          prod: l = null
        }) => {
          const d = (0, r.useLocale)(),
            {
              meta: m = {}
            } = (0, o.i)() ?? {},
            [u, f] = (0, s.useState)(l ?? m?.cdn ?? m?.prod ?? !0);
          (0, s.useEffect)(() => {
            f(l ?? m?.cdn ?? m?.prod ?? !0)
          }, [l, m]);
          const b = (0, s.useCallback)(e => {
            const t = null !== c,
              a = e?.previewSrc ?? e ?? null;
            if (null === a || "string" != typeof a) return null;
            if (a.startsWith("http")) return n(a);
            const s = `${t?(0,r.getCdnPrefix)(u):""}${a}`;
            return n(s)
          }, [u, c]);
          return {
            alt: e,
            ariaLabel: i,
            src: {
              mobile: b(c?.[d]?.mobile ?? c?.en_us?.mobile ?? t),
              desktop: b(c?.[d]?.desktop ?? c?.en_us?.desktop ?? a)
            }
          }
        },
        c = e => {
          const t = (0, o.i)() ?? {},
            {
              meta: a = {}
            } = t,
            [i, c] = (0, s.useState)(a?.cdn ?? a?.prod ?? !1);
          return (0, s.useEffect)(() => {
            c(a?.cdn ?? a?.prod ?? !1)
          }, [a]), e ? e?.startsWith("http") ? n(e) : n(`${(0,r.getCdnPrefix)(i)}${e}`) : null
        },
        l = () => {
          const e = (0, o.i)() ?? {},
            {
              meta: t = {}
            } = e,
            a = (0, s.useMemo)(() => t?.cdn ?? t?.prod ?? !1, [t]);
          return (0, s.useCallback)((e, t = {}) => {
            const s = t?.prod ?? a;
            return e ? e?.startsWith("http") ? n(e) : n(`${(0,r.getCdnPrefix)(s)}${e}`) : null
          }, [a])
        },
        d = e => e.full_src,
        m = e => {
          const t = e?.previewSrc ?? e?.preview_src ?? e;
          return t?.startsWith("http") ? t : `${(0,r.getCdnPrefix)(!1)}${t}`
        },
        u = e => e.meta.uploads_directory
    },
    38635: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6e77bb0f25a6ea37e8d831b12df9fa3c.png"
    },
    55322: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => n
      });
      var s = a(42295),
        r = a(71127),
        o = a(64740);
      const n = ({
        children: e,
        ...t
      }) => {
        const [, a] = (0, r.useState)(!1);
        return (0, s.jsx)(o.zb, {
          ...t,
          onReady: () => {
            document.fonts.ready.then(() => {
              a(!0)
            })
          },
          children: e
        })
      }
    },
    65287: (e, t, a) => {
      var s = {
        "./bounty.png": 7502,
        "./collector.png": 24970,
        "./moonshiner.png": 2661,
        "./naturalist.png": 16386,
        "./trader.png": 38635
      };

      function r(e) {
        var t = o(e);
        return a(t)
      }

      function o(e) {
        if (!a.o(s, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        }
        return s[e]
      }
      r.keys = function() {
        return Object.keys(s)
      }, r.resolve = o, e.exports = r, r.id = 65287
    },
    74767: (e, t, a) => {
      "use strict";
      a.d(t, {
        i: () => c,
        o: () => i
      });
      var s = a(42295),
        r = a(71127);
      const o = (0, a(58136).setContextItem)({
          context: (0, r.createContext)(),
          key: "tinaPayloadContext"
        }),
        {
          Provider: n
        } = o,
        i = ({
          children: e,
          payload: t
        }) => (0, s.jsx)(n, {
          value: t,
          children: e
        }),
        c = () => (0, r.useContext)(o)
    },
    84927: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => c
      });
      var s = a(42295),
        r = a(4407),
        o = a(55322);
      const n = {
          badge: "rockstargames-modules-core-newswire-articleb7268b0e907630904b6689af83fee8e3",
          badge2: "rockstargames-modules-core-newswire-articled08ce7145bc9562355a3984f8ccc9313",
          badge3: "rockstargames-modules-core-newswire-articlec7c60cfb12b6e9be68893c60814b3ed7",
          badgeSizeUpdate: "rockstargames-modules-core-newswire-articlece8632d7464b556158a1d549f653498c"
        },
        i = ({
          wrapper: e,
          children: t,
          role: a,
          splitter: s
        }) => s || a ? e(t) : t,
        c = ({
          badge: e,
          badgeType: t,
          role: c,
          splitter: l
        }) => {
          const d = [];
          return l ? e.split(l).map(e => d.push(e)) : d.push(e), (0, s.jsxs)(i, {
            splitter: l,
            role: c,
            wrapper: e => (0, s.jsx)("div", {
              className: `${n.badge} ${t?n[t]:""} `,
              children: e
            }),
            children: [(0, s.jsx)(s.Fragment, {
              children: c && (0, s.jsx)(r.A, {
                image: {
                  alt: c,
                  desktop: a(65287)(`./${c}.png`)
                }
              })
            }), (0, s.jsx)(o.A, {
              className: `${l||c?"":n.badge} ${t?n[t]:""}`,
              min: 8,
              max: 1e3,
              mode: l || c ? "single" : "multi",
              children: d[0]
            }), (0, s.jsx)(s.Fragment, {
              children: d.shift() && l && d.length >= 1 && (0, s.jsx)(o.A, {
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
    89477: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        default: () => h
      });
      var s = a(42295),
        r = a(71127),
        o = a(85827),
        n = a(24162),
        i = a(34232),
        c = a(10632),
        l = a(1556),
        d = a.n(l);
      const m = {
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
        u = ({
          shouldFade: e,
          condition: t,
          className: a,
          children: r
        }) => (0, s.jsx)("div", {
          className: d()(a, e ? m.fadeIn : "", t ? m.active : ""),
          children: r
        }),
        f = ({
          currentSlide: e,
          prevRef: t,
          nextRef: a
        }) => (0, s.jsxs)("div", {
          className: m.customPagination,
          children: [(0, s.jsx)("button", {
            type: "button",
            className: m.prevBtn,
            ref: t,
            "aria-label": "Previous Slide",
            children: (0, s.jsx)(i.ChevronLeft, {
              label: "Previous Slide",
              size: "LG"
            })
          }), (0, s.jsx)("span", {
            children: e?.itemName ?? "Item"
          }), (0, s.jsx)("button", {
            type: "button",
            className: m.nextBtn,
            ref: a,
            "aria-label": "Next Slide",
            children: (0, s.jsx)(i.ChevronRight, {
              label: "Next Slide",
              size: "LG"
            })
          })]
        }),
        b = ({
          item: e,
          vertical: t,
          horizontal: a
        }) => e && e?.content ? (0, s.jsx)(u, {
          shouldFade: e?.fadeIn,
          condition: e?.fadeIn,
          className: d()(m.slot, m[t], m[a]),
          children: (0, s.jsx)(c.A, {
            ...e.content[0]
          })
        }) : null,
        g = ({
          active: e = !1,
          backgroundContent: t,
          foregroundContent: a
        }) => (0, s.jsxs)("div", {
          className: m.slideContent,
          children: [t && (0, s.jsx)(u, {
            shouldFade: t?.fadeIn,
            condition: e,
            children: (0, s.jsx)("div", {
              className: m.backgroundContent,
              children: (0, s.jsx)(c.A, {
                ...t.imageWithBadge
              })
            })
          }), a && (0, s.jsx)(u, {
            shouldFade: a?.fadeIn,
            condition: e,
            children: (0, s.jsx)("div", {
              className: m.foregroundContent,
              children: (0, s.jsx)(c.A, {
                ...a.imageWithBadge
              })
            })
          })]
        }),
        p = ({
          loop: e = !0,
          grabCursor: t = !0,
          centeredSlides: a = !0,
          slides: i = null
        }) => {
          const [c, l] = (0, r.useState)(null), u = (0, r.useRef)(null), p = (0, r.useRef)(null), [h, w] = (0, r.useState)();
          return (0, r.useEffect)(() => {
            w({
              nextEl: p.current,
              prevEl: u.current
            })
          }, [p, u]), i ? (0, s.jsx)("div", {
            className: m.panoramaCarouselWrapper,
            children: (0, s.jsxs)(n.RC, {
              loop: e,
              grabCursor: t,
              centeredSlides: a,
              slidesPerView: 1,
              spaceBetween: 0,
              modules: [o.Vx],
              navigation: h,
              pagination: !1,
              speed: 700,
              onActiveIndexChange: e => {
                l(i[e?.realIndex ?? 0])
              },
              onInit: e => {
                e.params.navigation.prevEl = u.current, e.params.navigation.nextEl = p.current, e?.navigation.init(), e?.navigation.update()
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
              children: [(0, s.jsxs)("div", {
                className: d()(m.slotContainer, m.top),
                children: [(0, s.jsx)(b, {
                  item: c?.topLeftSlot,
                  vertical: "top",
                  horizontal: "left"
                }), (0, s.jsx)(b, {
                  item: c?.topCenterSlot,
                  vertical: "top",
                  horizontal: "center"
                }), (0, s.jsx)(b, {
                  item: c?.topRightSlot,
                  vertical: "top",
                  horizontal: "right"
                })]
              }), i.map(e => (0, s.jsx)(n.qr, {
                children: ({
                  isActive: t
                }) => (0, s.jsx)(g, {
                  active: t,
                  ...e
                })
              }, e?.key)), (0, s.jsxs)("div", {
                className: d()(m.slotContainer, m.bottom),
                children: [(0, s.jsx)(b, {
                  item: c?.bottomLeftSlot,
                  vertical: "bottom",
                  horizontal: "left"
                }), (0, s.jsx)(b, {
                  item: c?.bottomRightSlot,
                  vertical: "bottom",
                  horizontal: "right"
                })]
              }), (0, s.jsx)(f, {
                currentSlide: c,
                prevRef: u,
                nextRef: p
              })]
            })
          }) : null
        },
        h = ({
          type: e = null,
          className: t,
          style: a,
          panoramaCarousel: r
        }) => {
          return e ? (o = p, n = r, (0, s.jsx)(o, {
            className: t,
            style: a,
            ...n
          })) : null;
          var o, n
        }
    }
  }
]);