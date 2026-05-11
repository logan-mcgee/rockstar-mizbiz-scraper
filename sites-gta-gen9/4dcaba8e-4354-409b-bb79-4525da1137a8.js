try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "4dcaba8e-4354-409b-bb79-4525da1137a8", e._sentryDebugIdIdentifier = "sentry-dbid-4dcaba8e-4354-409b-bb79-4525da1137a8")
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
  [884, 1078], {
    24769(e, t, s) {
      "use strict";
      s.d(t, {
        A: () => b
      });
      var a = s(42295),
        r = s(71127),
        i = s(24162),
        d = s(85827),
        n = s(11206),
        c = s(1556),
        l = s(46219);
      const o = {
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
      var g = s(26708),
        m = s(10632);
      const f = ({
          item: e
        }) => (0, a.jsxs)("div", {
          children: [(0, a.jsx)(m.A, {
            image: e?.image,
            badge: e?.badge ?? e?.image?.badge,
            badgeType: "badge3",
            role: e?.role ?? e?.image?.role,
            splitter: e?.splitter ?? e?.image?.splitter,
            type: e?.type,
            ariaLabel: e?.image?.ariaLabel ?? e.description,
            style: e?.style,
            className: (0, c.default)(o.img, e?.className)
          }), (e?.title || e?.description) && (0, a.jsx)(g.A, {
            item: e
          })]
        }),
        u = ({
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
          noInfiniteScroll: m = !1,
          className: b = "",
          renderTemplate: p = "standard",
          text: h,
          customSpaceBetween: y = null,
          centerSlides: k = !0,
          centeredSlidesBounds: x = !1
        }) => {
          const j = (0, l.Ub)("(min-width: 0px) and (max-width: 768px)"),
            [_, N] = (0, r.useState)(0),
            [w, v] = (0, r.useState)(null),
            S = (0, r.useMemo)(() => e && Array.isArray(e) ? e.map(() => (0, n.A)()) : null, [e, j]),
            A = e => {
              if (!e) return;
              let t = 0;
              e.pagination.bullets.forEach((e, s) => {
                e.classList.contains("swiper-pagination-bullet-active") && (t = s)
              }), N(t)
            };
          if (!(t && 0 !== t?.length || e)) return null;
          const T = {
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
            className: (0, c.default)(o.deprecatedCarousel, o[p], o.infinite_true, e ? o.renderedWithChildren : "", b),
            style: s,
            "data-testid": "carousel",
            children: [(0, a.jsxs)(i.RC, {
              modules: [d.dK, d.Jq],
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
              breakpoints: T,
              onSlideChange: e => {
                A(e)
              },
              onResize: e => {
                null != w && clearTimeout(w);
                const t = setTimeout(() => {
                  e.update(), e.updateSize(), e.updateSlides(), e.slideToClosest(), A(e)
                }, 250);
                v(t)
              },
              children: [(0, a.jsx)("div", {
                className: o.trackWrapper,
                children: (0, a.jsxs)("div", {
                  className: o.track,
                  children: [t?.map(e => (0, a.jsx)(i.qr, {
                    tabIndex: 0,
                    children: (0, a.jsx)(f, {
                      item: e
                    })
                  }, e.key)), e && e.map((e, t) => e && (0, a.jsx)(i.qr, {
                    children: e
                  }, S && S[t]))]
                })
              }), (0, a.jsx)(u, {
                current: _,
                total: e ? e.length : t.length
              })]
            }), (h?.title || h?.description) && (0, a.jsx)(g.A, {
              item: h
            })]
          })
        }
    },
    26708(e, t, s) {
      "use strict";
      s.d(t, {
        A: () => o
      });
      var a = s(42295),
        r = s(1556),
        i = s(4407),
        d = s(93935),
        n = s(79704);
      const c = "rockstargames-sites-gta-gen9acd27eff2209196752622710f7b27558",
        l = ({
          to: e,
          children: t
        }) => e ? (0, a.jsx)("a", {
          href: e,
          target: "_blank",
          rel: "noreferrer",
          children: t
        }) : t,
        o = ({
          item: e,
          className: t = ""
        }) => (0, a.jsxs)("div", {
          className: (0, r.default)("rockstargames-sites-gta-gen9f8bc9589974046cdac4a2264be12d2df", t),
          children: [e.title && (0, a.jsx)(l, {
            to: e?.href ?? e?.to,
            children: (0, a.jsx)("h3", {
              children: e.title
            })
          }), Array.isArray(e?.description?.content) ? e.description.content?.map((e, t) => e?.unorderedList ? (0, a.jsx)(d.A, {
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
            children: (0, a.jsx)(n.A, {})
          }, t) : (0, a.jsx)("p", {
            children: (0, a.jsx)("span", {
              className: c,
              dangerouslySetInnerHTML: {
                __html: e
              }
            })
          }, t)) : (0, a.jsx)("span", {
            className: c,
            dangerouslySetInnerHTML: {
              __html: e.description
            }
          })]
        })
    },
    55322(e, t, s) {
      "use strict";
      s.d(t, {
        A: () => d
      });
      var a = s(42295),
        r = s(71127),
        i = s(64740);
      const d = ({
        children: e,
        ...t
      }) => {
        const [, s] = (0, r.useState)(!1);
        return (0, a.jsx)(i.zb, {
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
    84927(e, t, s) {
      "use strict";
      s.d(t, {
        A: () => c
      });
      var a = s(42295),
        r = s(4407),
        i = s(55322);
      const d = {
          badge: "rockstargames-sites-gta-gen9b7268b0e907630904b6689af83fee8e3",
          badge2: "rockstargames-sites-gta-gen9d08ce7145bc9562355a3984f8ccc9313",
          badge3: "rockstargames-sites-gta-gen9c7c60cfb12b6e9be68893c60814b3ed7",
          badgeSizeUpdate: "rockstargames-sites-gta-gen9ce8632d7464b556158a1d549f653498c"
        },
        n = ({
          wrapper: e,
          children: t,
          role: s,
          splitter: a
        }) => a || s ? e(t) : t,
        c = ({
          badge: e,
          badgeType: t,
          role: c,
          splitter: l
        }) => {
          const o = [];
          return l ? e.split(l).map(e => o.push(e)) : o.push(e), (0, a.jsxs)(n, {
            splitter: l,
            role: c,
            wrapper: e => (0, a.jsx)("div", {
              className: `${d.badge} ${t?d[t]:""} `,
              children: e
            }),
            children: [(0, a.jsx)(a.Fragment, {
              children: c && (0, a.jsx)(r.A, {
                image: {
                  alt: c,
                  desktop: s(65287)(`./${c}.png`)
                }
              })
            }), (0, a.jsx)(i.A, {
              className: `${l||c?"":d.badge} ${t?d[t]:""}`,
              min: 8,
              max: 1e3,
              mode: l || c ? "single" : "multi",
              children: o[0]
            }), (0, a.jsx)(a.Fragment, {
              children: o.shift() && l && o.length >= 1 && (0, a.jsx)(i.A, {
                min: 8,
                max: 1e3,
                mode: "single",
                forceSingleModeWidth: !0,
                children: o.join(" ")
              })
            })]
          }, "badge-wrapper")
        }
    },
    10632(e, t, s) {
      "use strict";
      s.d(t, {
        A: () => o
      });
      var a = s(42295),
        r = s(71127),
        i = s(13331),
        d = s(1556),
        n = s(84927),
        c = s(4407);
      const l = ({
          hero: e,
          children: t
        }) => e ? (0, a.jsx)("div", {
          className: "rockstargames-sites-gta-gen9a429886d721550d02521f7f5c9de7f5b",
          children: t
        }) : t,
        o = ({
          badge: e = null,
          badgeType: t,
          discountTxt: s,
          splitter: o,
          image: g,
          style: m,
          className: f = "",
          attributes: u = {},
          role: b,
          hero: p = !1
        }) => {
          const h = (0, r.useMemo)(() => {
            if (g?.badge || g?.discountTxt || e || s) return (0, a.jsx)(n.A, {
              badge: g?.discountTxt ?? g?.badge ?? e ?? s,
              badgeType: t,
              splitter: g?.splitter ?? o,
              role: g?.role ?? b
            })
          }, [e, t, s, g, b, o]);
          return (0, a.jsx)(l, {
            hero: p,
            children: (0, a.jsx)("figure", {
              children: (0, a.jsxs)("div", {
                className: (0, d.default)("rockstargames-sites-gta-gen9d9ac792281efe15bcd4589b028d1c27b", p ? "rockstargames-sites-gta-gen9e430c4662cd185f58259d4a8d8b322de" : "", u?.hiddenMobile ? "hiddenMobile" : "", u?.hiddenLarge ? "hiddenLarge" : "", u?.className, f),
                style: (0, i.safeStyles)({
                  ...m,
                  ...u?.style
                }),
                ...u,
                children: [(0, a.jsx)(c.A, {
                  role: g?.accessibleRole,
                  image: g,
                  className: f
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
    79704(e, t, s) {
      "use strict";
      s.d(t, {
        A: () => i
      });
      var a = s(42295);
      const r = {
          gtao: "rockstargames-sites-gta-gen9f66c75c6e882da85fef31e4211ca0be2",
          hr: "rockstargames-sites-gta-gen9dc7b1bc141e132d4ee9b7bf9d55c573a",
          redLine: "rockstargames-sites-gta-gen9d4d968b41ef87926b0b6318e8647738b"
        },
        i = ({
          style: e,
          className: t = "",
          type: s = ""
        }) => (0, a.jsx)("div", {
          style: e,
          className: [r.hr, r[s], t].join(" ")
        })
    },
    93935(e, t, s) {
      "use strict";
      s.d(t, {
        A: () => g
      });
      var a = s(42295),
        r = s(71127),
        i = s(27785),
        d = s.n(i),
        n = s(13331),
        c = s(1556);
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
          sanitize: o
        } = d(),
        g = ({
          list: e,
          string: t,
          starColor: s,
          style: i,
          className: d,
          game: g,
          noImg: m,
          columns: f,
          mobileColumns: u
        }) => {
          const [b, p] = (0, r.useState)(null), h = t ? t.split("_#_") : e;
          if ((0, r.useEffect)(() => {
              p(e)
            }, [e]), !t && !e) return null;
          const y = {
            color: i?.color
          };
          return delete i?.color, f && b ? (0, a.jsx)("div", {
            className: l.grid,
            style: {
              "--unordered-list-grid-column": f,
              "--unordered-list-grid-column-mobile": u ?? f
            },
            children: (0, a.jsx)("ul", {
              className: (0, c.default)(l.itemList, l.noImg, l[s], l[g]),
              style: (0, n.safeStyles)(i),
              children: b.map((e, t) => (0, a.jsx)("li", {
                style: y,
                dangerouslySetInnerHTML: {
                  __html: o(e.content)
                }
              }, t))
            })
          }) : (0, a.jsx)("ul", {
            style: (0, n.safeStyles)(i),
            className: (0, c.default)(l.itemList, l.custom, m ? l.noImg : "", s ? l[s] : "", g ? l[g] : "", d ?? ""),
            children: h.map((e, t) => (0, a.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: o(e?.content ?? e)
              }
            }, t))
          })
        }
    },
    4407(e, t, s) {
      "use strict";
      s.d(t, {
        A: () => c
      });
      var a = s(42295),
        r = s(34725),
        i = s(13331);
      const d = ({
          alt: e,
          className: t,
          src: r,
          role: d,
          style: n
        }) => {
          const [c, l] = (0, i.usePreloadImg)(r);
          let o = r;
          !1 === c && (o = s(9333));
          const {
            width: g,
            height: m
          } = l, f = {
            "--aspect-ratio": Number.isNaN(g / m) ? "" : g / m,
            ...n
          };
          return (0, a.jsx)("img", {
            src: o,
            className: t ?? "",
            alt: e,
            style: f,
            role: d
          })
        },
        n = "rockstargames-sites-gta-gen9c8dc03880ce2e12f3fdea5b5b587f27f",
        c = ({
          className: e,
          style: t = {},
          image: c = {},
          imageStyle: l = {},
          role: o = "img"
        }) => {
          let {
            alt: g,
            src: m
          } = (0, r.S1)(c);
          const {
            isMobile: f
          } = (0, i.useWindowResize)(), u = f ? m.imageMobileStyle : m.imageDesktopStyle;
          m.desktop || m.mobile || (g = "", m = {
            mobile: s(28839),
            desktop: s(9333)
          });
          let b = c.frame ? `${c.frame} ${n}` : n;
          return (0, a.jsx)("div", {
            className: b,
            style: t,
            children: (0, a.jsx)(d, {
              style: {
                ...l,
                ...c?.style,
                ...u
              },
              src: f ? m.mobile || m.desktop : m?.desktop || m?.mobile,
              alt: g,
              role: o,
              className: e
            })
          })
        }
    },
    90884(e, t, s) {
      "use strict";
      s.r(t), s.d(t, {
        default: () => y
      });
      var a = s(42295),
        r = s(26708),
        i = s(10632),
        d = s(24769);
      const n = {
          carouselTitle: "rockstargames-sites-gta-gen9e9e0ef1bfc3699b1e50c33dd0ce8e76a",
          carouselWrapper: "rockstargames-sites-gta-gen9fabefc39343f6c494eb3d049757d89c5",
          padding: "rockstargames-sites-gta-gen9ac767e959939b4d56b2358cb263d07ad"
        },
        c = ({
          to: e,
          children: t
        }) => e ? (0, a.jsx)("a", {
          href: e,
          target: "_blank",
          children: t
        }) : t,
        l = ({
          items: e = [],
          text: t = {},
          style: s,
          className: l = "",
          id: o = null
        }) => e?.length ? (0, a.jsxs)("div", {
          id: o,
          "data-testid": `carousel${l&&`-${l}`}-group-of-items`,
          children: [(0, a.jsx)(d.A, {
            style: s,
            className: [l, n.carouselWrapper].join(" "),
            children: e.map(e => (0, a.jsxs)("div", {
              id: e?.id ?? null,
              children: [(0, a.jsx)(i.A, {
                image: e?.image,
                badge: e?.badge ?? e?.image?.badge,
                badgeType: "badge3",
                role: e?.role ?? e?.image?.role,
                splitter: e?.splitter ?? e?.image?.splitter,
                type: e?.type,
                ariaLabel: e?.image?.ariaLabel ?? e.description,
                style: e?.style,
                className: [n.img, e?.className].join(" ")
              }), e.title && (0, a.jsx)(c, {
                to: e?.to,
                children: (0, a.jsx)("h4", {
                  className: n.carouselTitle,
                  children: e.title
                })
              }), e.description && (0, a.jsx)("span", {
                className: n.description,
                dangerouslySetInnerHTML: {
                  __html: e.description
                }
              })]
            }, e?.key ?? e?.title))
          }), t?.title || t?.description ? (0, a.jsx)("div", {
            className: n.padding,
            style: t?.style ?? {},
            children: (0, a.jsx)(r.A, {
              item: t
            })
          }) : ""]
        }) : null;
      var o = s(31879),
        g = s.n(o),
        m = s(17301),
        f = s(1556);
      const u = ({
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
        p = ({
          item: e
        }) => e?.videoId ? (0, a.jsx)(g(), {
          context: "site",
          autoplay: !1,
          id: e.videoId
        }) : (0, a.jsx)(i.A, {
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
          style: t = {},
          className: s = "",
          id: i = null
        }) => (0, a.jsx)("div", {
          style: t,
          className: (0, f.default)("rockstargames-sites-gta-gen9d38af92e8657708abd3dc5295e62476c", s),
          id: i,
          "data-testid": "standard-group-of-items",
          children: e.map(e => (0, a.jsx)(u, {
            impressionTracking: e?.impressionTracking,
            gtm: e?.gtm,
            children: (0, a.jsx)(b, {
              to: e?.to,
              children: (0, a.jsxs)("div", {
                className: (0, f.default)("rockstargames-sites-gta-gen9a9b63d3aa2f18fa6c84b19c8993a7893", e.className),
                style: e?.style ?? {},
                ...e?.props,
                children: [e?.image || e?.videoId ? (0, a.jsx)(p, {
                  item: e
                }) : "", e.title || e.description ? (0, a.jsx)(r.A, {
                  item: e,
                  className: "rockstargames-sites-gta-gen9bc47d354556b20071313d2c1ccc3debd"
                }) : ""]
              })
            })
          }, e.key))
        }),
        y = ({
          children: e = null,
          text: t = {},
          items: s = [],
          renderTemplate: r = "",
          style: i = {},
          id: d = null,
          ...n
        }) => {
          if (!s.length) return null;
          switch (r) {
            case "carousel":
              return (0, a.jsx)(l, {
                text: t,
                items: s,
                style: i,
                id: d,
                children: e
              });
            case "carousel-panorama":
              return (0, a.jsx)(l, {
                text: t,
                items: s,
                style: i,
                className: "panorama",
                id: d,
                children: e
              });
            default:
              return (0, a.jsx)(h, {
                items: s,
                style: i,
                id: d,
                ...n,
                children: e
              })
          }
        }
    },
    74767(e, t, s) {
      "use strict";
      s.d(t, {
        i: () => c,
        o: () => n
      });
      var a = s(42295),
        r = s(71127);
      const i = (0, s(13331).setContextItem)({
          context: (0, r.createContext)(),
          key: "tinaPayloadContext"
        }),
        {
          Provider: d
        } = i,
        n = ({
          children: e,
          payload: t
        }) => (0, a.jsx)(d, {
          value: t,
          children: e
        }),
        c = () => (0, r.useContext)(i)
    },
    34725(e, t, s) {
      "use strict";
      s.d(t, {
        C1: () => c,
        S1: () => n,
        XC: () => m,
        jS: () => l,
        qg: () => o,
        z0: () => g
      });
      var a = s(71127),
        r = s(13331),
        i = s(74767);
      const d = e => {
          if (!e) return null;
          const {
            hostname: t,
            pathname: s
          } = new URL(e, (0, r.getCdnPrefix)(!0));
          return "/" === s ? null : (t.endsWith(".akamaized.net"), e)
        },
        n = ({
          alt: e = null,
          mobile: t = null,
          imageMobileStyle: s = {},
          desktop: n = null,
          imageDesktopStyle: c = {},
          ariaLabel: l = null,
          sources: o = null,
          prod: g = null
        }) => {
          const m = (0, r.useLocale)(),
            {
              meta: f = {}
            } = (0, i.i)() ?? {},
            [u, b] = (0, a.useState)(g ?? f?.cdn ?? f?.prod ?? !0);
          (0, a.useEffect)(() => {
            b(g ?? f?.cdn ?? f?.prod ?? !0)
          }, [g, f]);
          const p = (0, a.useCallback)(e => {
            const t = null !== o,
              s = e?.previewSrc ?? e ?? null;
            if (null === s || "string" != typeof s) return null;
            if (s.startsWith("http")) return d(s);
            const a = `${t?(0,r.getCdnPrefix)(u):""}${s}`;
            return d(a)
          }, [u, o]);
          return {
            alt: e,
            ariaLabel: l,
            src: {
              mobile: p(o?.[m]?.mobile ?? o?.en_us?.mobile ?? t),
              imageMobileStyle: o?.[m]?.imageMobileStyle ?? o?.en_us?.imageMobileStyle ?? s,
              imageDesktopStyle: o?.[m]?.imageDesktopStyle ?? o?.en_us?.imageDesktopStyle ?? c,
              desktop: p(o?.[m]?.desktop ?? o?.en_us?.desktop ?? n)
            }
          }
        },
        c = e => {
          const t = (0, i.i)() ?? {},
            {
              meta: s = {}
            } = t,
            [n, c] = (0, a.useState)(s?.cdn ?? s?.prod ?? !1);
          return (0, a.useEffect)(() => {
            c(s?.cdn ?? s?.prod ?? !1)
          }, [s]), e ? e?.startsWith("http") ? d(e) : d(`${(0,r.getCdnPrefix)(n)}${e}`) : null
        },
        l = () => {
          const e = (0, i.i)() ?? {},
            {
              meta: t = {}
            } = e,
            s = (0, a.useMemo)(() => t?.cdn ?? t?.prod ?? !1, [t]);
          return (0, a.useCallback)((e, t = {}) => {
            const a = t?.prod ?? s;
            return e ? e?.startsWith("http") ? d(e) : d(`${(0,r.getCdnPrefix)(a)}${e}`) : null
          }, [s])
        },
        o = e => e.full_src,
        g = e => {
          const t = e?.previewSrc ?? e?.preview_src ?? e;
          return t?.startsWith("http") ? t : `${(0,r.getCdnPrefix)(!1)}${t}`
        },
        m = e => e.meta.uploads_directory
    },
    11206(e, t, s) {
      "use strict";
      s.d(t, {
        A: () => c
      });
      const a = {
        randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto)
      };
      let r;
      const i = new Uint8Array(16);

      function d() {
        if (!r && (r = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !r)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return r(i)
      }
      const n = [];
      for (let e = 0; e < 256; ++e) n.push((e + 256).toString(16).slice(1));
      const c = function(e, t, s) {
        if (a.randomUUID && !t && !e) return a.randomUUID();
        const r = (e = e || {}).random || (e.rng || d)();
        if (r[6] = 15 & r[6] | 64, r[8] = 63 & r[8] | 128, t) {
          s = s || 0;
          for (let e = 0; e < 16; ++e) t[s + e] = r[e];
          return t
        }
        return function(e, t = 0) {
          return n[e[t + 0]] + n[e[t + 1]] + n[e[t + 2]] + n[e[t + 3]] + "-" + n[e[t + 4]] + n[e[t + 5]] + "-" + n[e[t + 6]] + n[e[t + 7]] + "-" + n[e[t + 8]] + n[e[t + 9]] + "-" + n[e[t + 10]] + n[e[t + 11]] + n[e[t + 12]] + n[e[t + 13]] + n[e[t + 14]] + n[e[t + 15]]
        }(r)
      }
    },
    65287(e, t, s) {
      var a = {
        "./bounty.png": 7502,
        "./collector.png": 24970,
        "./moonshiner.png": 2661,
        "./naturalist.png": 16386,
        "./trader.png": 38635
      };

      function r(e) {
        var t = i(e);
        return s(t)
      }

      function i(e) {
        if (!s.o(a, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        }
        return a[e]
      }
      r.keys = function() {
        return Object.keys(a)
      }, r.resolve = i, e.exports = r, r.id = 65287
    },
    7502(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/48754c6fc2f75b0554098423f2bda6d1.png"
    },
    24970(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e111377ba943e9eefaa9204f77c77093.png"
    },
    2661(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4639a2711d1bca49a87c302784050ee3.png"
    },
    16386(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/898794daaec68a69ef5ec4afaefe1948.png"
    },
    38635(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6e77bb0f25a6ea37e8d831b12df9fa3c.png"
    },
    9333(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8787df71c723ebe44f82fd13ed216e09.jpg"
    },
    28839(e) {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61ae357c3bfbabb5d765e9a7c794d08f.png"
    },
    60211(e, t, s) {
      "use strict";
      s.d(t, {
        X: () => a
      });
      const a = "undefined" == typeof window
    },
    51105(e, t, s) {
      "use strict";
      s.d(t, {
        v: () => n
      });
      var a = s(1556);
      const r = new Map;

      function i(e, t) {
        if (e === t) return e;
        const s = r.get(e);
        if (s) return s.forEach(e => e(t)), t;
        const a = r.get(t);
        return a ? (a.forEach(t => t(e)), e) : t
      }

      function d(...e) {
        return (...t) => {
          for (const s of e) "function" == typeof s && s(...t)
        }
      }

      function n(...e) {
        const t = {
          ...e[0]
        };
        for (let s = 1; s < e.length; s++) {
          const r = e[s];
          for (const e in r) {
            const s = t[e],
              n = r[e];
            "function" == typeof s && "function" == typeof n && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = d(s, n) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof s || "string" != typeof n ? "id" === e && s && n ? t.id = i(s, n) : t[e] = void 0 !== n ? n : s : t[e] = (0, a.clsx)(s, n)
          }
        }
        return t
      }
    }
  }
]);