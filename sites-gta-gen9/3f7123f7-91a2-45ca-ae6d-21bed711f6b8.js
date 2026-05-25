try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    s = (new e.Error).stack;
  s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "3f7123f7-91a2-45ca-ae6d-21bed711f6b8", e._sentryDebugIdIdentifier = "sentry-dbid-3f7123f7-91a2-45ca-ae6d-21bed711f6b8")
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
  [7377, 9758], {
    75138(e, s, a) {
      "use strict";
      a.d(s, {
        A: () => b
      });
      var t = a(39793),
        r = a(93082),
        d = a(14653),
        i = a(50662),
        n = a(39279),
        c = a(81270),
        l = a(9575);
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
      var g = a(68291),
        m = a(44453);
      const f = ({
          item: e
        }) => (0, t.jsxs)("div", {
          children: [(0, t.jsx)(m.A, {
            image: e?.image,
            badge: e?.badge ?? e?.image?.badge,
            badgeType: "badge3",
            role: e?.role ?? e?.image?.role,
            splitter: e?.splitter ?? e?.image?.splitter,
            type: e?.type,
            ariaLabel: e?.image?.ariaLabel ?? e.description,
            style: e?.style,
            className: (0, c.default)(o.img, e?.className)
          }), (e?.title || e?.description) && (0, t.jsx)(g.A, {
            item: e
          })]
        }),
        u = ({
          current: e,
          total: s
        }) => (0, t.jsx)("div", {
          className: "swiper-scrollbar",
          style: {
            "--current-slide": e,
            "--total-slides": s
          },
          children: (0, t.jsx)("div", {
            className: "swiper-scrollbar-drag"
          })
        }),
        b = ({
          children: e,
          items: s = [],
          style: a = {},
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
            T = e => {
              if (!e) return;
              let s = 0;
              e.pagination.bullets.forEach((e, a) => {
                e.classList.contains("swiper-pagination-bullet-active") && (s = a)
              }), N(s)
            };
          if (!(s && 0 !== s?.length || e)) return null;
          const A = {
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
          return (0, t.jsxs)("div", {
            className: (0, c.default)(o.deprecatedCarousel, o[p], o.infinite_true, e ? o.renderedWithChildren : "", b),
            style: a,
            "data-testid": "carousel",
            children: [(0, t.jsxs)(d.RC, {
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
              breakpoints: A,
              onSlideChange: e => {
                T(e)
              },
              onResize: e => {
                null != w && clearTimeout(w);
                const s = setTimeout(() => {
                  e.update(), e.updateSize(), e.updateSlides(), e.slideToClosest(), T(e)
                }, 250);
                v(s)
              },
              children: [(0, t.jsx)("div", {
                className: o.trackWrapper,
                children: (0, t.jsxs)("div", {
                  className: o.track,
                  children: [s?.map(e => (0, t.jsx)(d.qr, {
                    tabIndex: 0,
                    children: (0, t.jsx)(f, {
                      item: e
                    })
                  }, e.key)), e && e.map((e, s) => e && (0, t.jsx)(d.qr, {
                    children: e
                  }, S && S[s]))]
                })
              }), (0, t.jsx)(u, {
                current: _,
                total: e ? e.length : s.length
              })]
            }), (h?.title || h?.description) && (0, t.jsx)(g.A, {
              item: h
            })]
          })
        }
    },
    68291(e, s, a) {
      "use strict";
      a.d(s, {
        A: () => o
      });
      var t = a(39793),
        r = a(81270),
        d = a(95967),
        i = a(12334),
        n = a(5413);
      const c = "rockstargames-sites-gta-gen9acd27eff2209196752622710f7b27558",
        l = ({
          to: e,
          children: s
        }) => e ? (0, t.jsx)("a", {
          href: e,
          target: "_blank",
          rel: "noreferrer",
          children: s
        }) : s,
        o = ({
          item: e,
          className: s = ""
        }) => (0, t.jsxs)("div", {
          className: (0, r.default)("rockstargames-sites-gta-gen9f8bc9589974046cdac4a2264be12d2df", s),
          children: [e.title && (0, t.jsx)(l, {
            to: e?.href ?? e?.to,
            children: (0, t.jsx)("h3", {
              children: e.title
            })
          }), Array.isArray(e?.description?.content) ? e.description.content?.map((e, s) => e?.unorderedList ? (0, t.jsx)(i.A, {
            columns: e.unorderedList.columns ?? null,
            style: {
              "--unordered-list-padding": "var(--grid-gap-static-sm)",
              "--unordered-list-margin-bottom": ".5rem"
            },
            noImg: !0,
            list: e.unorderedList.list
          }, s) : e?.image ? (0, t.jsx)(d.A, {
            image: e.image,
            className: e?.className
          }, s) : e?.separator ? (0, t.jsx)("div", {
            style: {
              margin: `${e.separator.spacing} 0`
            },
            children: (0, t.jsx)(n.A, {})
          }, s) : (0, t.jsx)("p", {
            children: (0, t.jsx)("span", {
              className: c,
              dangerouslySetInnerHTML: {
                __html: e
              }
            })
          }, s)) : (0, t.jsx)("span", {
            className: c,
            dangerouslySetInnerHTML: {
              __html: e.description
            }
          })]
        })
    },
    85622(e, s, a) {
      "use strict";
      a.d(s, {
        A: () => i
      });
      var t = a(39793),
        r = a(93082),
        d = a(42816);
      const i = ({
        children: e,
        ...s
      }) => {
        const [, a] = (0, r.useState)(!1);
        return (0, t.jsx)(d.zb, {
          ...s,
          onReady: () => {
            document.fonts.ready.then(() => {
              a(!0)
            })
          },
          children: e
        })
      }
    },
    76862(e, s, a) {
      "use strict";
      a.d(s, {
        A: () => c
      });
      var t = a(39793),
        r = a(95967),
        d = a(85622);
      const i = {
          badge: "rockstargames-sites-gta-gen9b7268b0e907630904b6689af83fee8e3",
          badge2: "rockstargames-sites-gta-gen9d08ce7145bc9562355a3984f8ccc9313",
          badge3: "rockstargames-sites-gta-gen9c7c60cfb12b6e9be68893c60814b3ed7",
          badgeSizeUpdate: "rockstargames-sites-gta-gen9ce8632d7464b556158a1d549f653498c"
        },
        n = ({
          wrapper: e,
          children: s,
          role: a,
          splitter: t
        }) => t || a ? e(s) : s,
        c = ({
          badge: e,
          badgeType: s,
          role: c,
          splitter: l
        }) => {
          const o = [];
          return l ? e.split(l).map(e => o.push(e)) : o.push(e), (0, t.jsxs)(n, {
            splitter: l,
            role: c,
            wrapper: e => (0, t.jsx)("div", {
              className: `${i.badge} ${s?i[s]:""} `,
              children: e
            }),
            children: [(0, t.jsx)(t.Fragment, {
              children: c && (0, t.jsx)(r.A, {
                image: {
                  alt: c,
                  desktop: a(65287)(`./${c}.png`)
                }
              })
            }), (0, t.jsx)(d.A, {
              className: `${l||c?"":i.badge} ${s?i[s]:""}`,
              min: 8,
              max: 1e3,
              mode: l || c ? "single" : "multi",
              children: o[0]
            }), (0, t.jsx)(t.Fragment, {
              children: o.shift() && l && o.length >= 1 && (0, t.jsx)(d.A, {
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
    44453(e, s, a) {
      "use strict";
      a.d(s, {
        A: () => o
      });
      var t = a(39793),
        r = a(93082),
        d = a(13331),
        i = a(81270),
        n = a(76862),
        c = a(95967);
      const l = ({
          hero: e,
          children: s
        }) => e ? (0, t.jsx)("div", {
          className: "rockstargames-sites-gta-gen9a429886d721550d02521f7f5c9de7f5b",
          children: s
        }) : s,
        o = ({
          badge: e = null,
          badgeType: s,
          discountTxt: a,
          splitter: o,
          image: g,
          style: m,
          className: f = "",
          attributes: u = {},
          role: b,
          hero: p = !1
        }) => {
          const h = (0, r.useMemo)(() => {
            if (g?.badge || g?.discountTxt || e || a) return (0, t.jsx)(n.A, {
              badge: g?.discountTxt ?? g?.badge ?? e ?? a,
              badgeType: s,
              splitter: g?.splitter ?? o,
              role: g?.role ?? b
            })
          }, [e, s, a, g, b, o]);
          return (0, t.jsx)(l, {
            hero: p,
            children: (0, t.jsx)("figure", {
              children: (0, t.jsxs)("div", {
                className: (0, i.default)("rockstargames-sites-gta-gen9d9ac792281efe15bcd4589b028d1c27b", p ? "rockstargames-sites-gta-gen9e430c4662cd185f58259d4a8d8b322de" : "", u?.hiddenMobile ? "hiddenMobile" : "", u?.hiddenLarge ? "hiddenLarge" : "", u?.className, f),
                style: (0, d.safeStyles)({
                  ...m,
                  ...u?.style
                }),
                ...u,
                children: [(0, t.jsx)(c.A, {
                  role: g?.accessibleRole,
                  image: g,
                  className: f
                }), h, g?.caption && (0, t.jsx)("figcaption", {
                  dangerouslySetInnerHTML: {
                    __html: g.caption
                  }
                })]
              })
            })
          })
        }
    },
    5413(e, s, a) {
      "use strict";
      a.d(s, {
        A: () => d
      });
      var t = a(39793);
      const r = {
          gtao: "rockstargames-sites-gta-gen9f66c75c6e882da85fef31e4211ca0be2",
          hr: "rockstargames-sites-gta-gen9dc7b1bc141e132d4ee9b7bf9d55c573a",
          redLine: "rockstargames-sites-gta-gen9d4d968b41ef87926b0b6318e8647738b"
        },
        d = ({
          style: e,
          className: s = "",
          type: a = ""
        }) => (0, t.jsx)("div", {
          style: e,
          className: [r.hr, r[a], s].join(" ")
        })
    },
    12334(e, s, a) {
      "use strict";
      a.d(s, {
        A: () => g
      });
      var t = a(39793),
        r = a(93082),
        d = a(50062),
        i = a.n(d),
        n = a(13331),
        c = a(81270);
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
        } = i(),
        g = ({
          list: e,
          string: s,
          starColor: a,
          style: d,
          className: i,
          game: g,
          noImg: m,
          columns: f,
          mobileColumns: u
        }) => {
          const [b, p] = (0, r.useState)(null), h = s ? s.split("_#_") : e;
          if ((0, r.useEffect)(() => {
              p(e)
            }, [e]), !s && !e) return null;
          const y = {
            color: d?.color
          };
          return delete d?.color, f && b ? (0, t.jsx)("div", {
            className: l.grid,
            style: {
              "--unordered-list-grid-column": f,
              "--unordered-list-grid-column-mobile": u ?? f
            },
            children: (0, t.jsx)("ul", {
              className: (0, c.default)(l.itemList, l.noImg, l[a], l[g]),
              style: (0, n.safeStyles)(d),
              children: b.map((e, s) => (0, t.jsx)("li", {
                style: y,
                dangerouslySetInnerHTML: {
                  __html: o(e.content)
                }
              }, s))
            })
          }) : (0, t.jsx)("ul", {
            style: (0, n.safeStyles)(d),
            className: (0, c.default)(l.itemList, l.custom, m ? l.noImg : "", a ? l[a] : "", g ? l[g] : "", i ?? ""),
            children: h.map((e, s) => (0, t.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: o(e?.content ?? e)
              }
            }, s))
          })
        }
    },
    95967(e, s, a) {
      "use strict";
      a.d(s, {
        A: () => c
      });
      var t = a(39793),
        r = a(25993),
        d = a(13331);
      const i = ({
          alt: e,
          className: s,
          src: r,
          role: i,
          style: n
        }) => {
          const [c, l] = (0, d.usePreloadImg)(r);
          let o = r;
          !1 === c && (o = a(9333));
          const {
            width: g,
            height: m
          } = l, f = {
            "--aspect-ratio": Number.isNaN(g / m) ? "" : g / m,
            ...n
          };
          return (0, t.jsx)("img", {
            src: o,
            className: s ?? "",
            alt: e,
            style: f,
            role: i
          })
        },
        n = "rockstargames-sites-gta-gen9c8dc03880ce2e12f3fdea5b5b587f27f",
        c = ({
          className: e,
          style: s = {},
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
          } = (0, d.useWindowResize)(), u = f ? m.imageMobileStyle : m.imageDesktopStyle;
          m.desktop || m.mobile || (g = "", m = {
            mobile: a(28839),
            desktop: a(9333)
          });
          let b = c.frame ? `${c.frame} ${n}` : n;
          return (0, t.jsx)("div", {
            className: b,
            style: s,
            children: (0, t.jsx)(i, {
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
    9758(e, s, a) {
      "use strict";
      a.r(s), a.d(s, {
        default: () => y
      });
      var t = a(39793),
        r = a(68291),
        d = a(44453),
        i = a(75138);
      const n = {
          carouselTitle: "rockstargames-sites-gta-gen9e9e0ef1bfc3699b1e50c33dd0ce8e76a",
          carouselWrapper: "rockstargames-sites-gta-gen9fabefc39343f6c494eb3d049757d89c5",
          padding: "rockstargames-sites-gta-gen9ac767e959939b4d56b2358cb263d07ad"
        },
        c = ({
          to: e,
          children: s
        }) => e ? (0, t.jsx)("a", {
          href: e,
          target: "_blank",
          children: s
        }) : s,
        l = ({
          items: e = [],
          text: s = {},
          style: a,
          className: l = "",
          id: o = null
        }) => e?.length ? (0, t.jsxs)("div", {
          id: o,
          "data-testid": `carousel${l&&`-${l}`}-group-of-items`,
          children: [(0, t.jsx)(i.A, {
            style: a,
            className: [l, n.carouselWrapper].join(" "),
            children: e.map(e => (0, t.jsxs)("div", {
              id: e?.id ?? null,
              children: [(0, t.jsx)(d.A, {
                image: e?.image,
                badge: e?.badge ?? e?.image?.badge,
                badgeType: "badge3",
                role: e?.role ?? e?.image?.role,
                splitter: e?.splitter ?? e?.image?.splitter,
                type: e?.type,
                ariaLabel: e?.image?.ariaLabel ?? e.description,
                style: e?.style,
                className: [n.img, e?.className].join(" ")
              }), e.title && (0, t.jsx)(c, {
                to: e?.to,
                children: (0, t.jsx)("h4", {
                  className: n.carouselTitle,
                  children: e.title
                })
              }), e.description && (0, t.jsx)("span", {
                className: n.description,
                dangerouslySetInnerHTML: {
                  __html: e.description
                }
              })]
            }, e?.key ?? e?.title))
          }), s?.title || s?.description ? (0, t.jsx)("div", {
            className: n.padding,
            style: s?.style ?? {},
            children: (0, t.jsx)(r.A, {
              item: s
            })
          }) : ""]
        }) : null;
      var o = a(31879),
        g = a.n(o),
        m = a(17301),
        f = a(81270);
      const u = ({
          impressionTracking: e,
          gtm: s = {},
          children: a
        }) => e?.shouldTrack ? (0, t.jsx)(m.InViewTracker, {
          threshold: e?.threshold,
          gtm: s,
          children: a
        }) : a,
        b = ({
          to: e,
          children: s
        }) => e ? (0, t.jsx)("a", {
          href: e,
          target: "_blank",
          rel: "noreferrer",
          children: s
        }) : s,
        p = ({
          item: e
        }) => e?.videoId ? (0, t.jsx)(g(), {
          context: "site",
          autoplay: !1,
          id: e.videoId
        }) : (0, t.jsx)(d.A, {
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
          className: a = "",
          id: d = null
        }) => (0, t.jsx)("div", {
          style: s,
          className: (0, f.default)("rockstargames-sites-gta-gen9d38af92e8657708abd3dc5295e62476c", a),
          id: d,
          "data-testid": "standard-group-of-items",
          children: e.map(e => (0, t.jsx)(u, {
            impressionTracking: e?.impressionTracking,
            gtm: e?.gtm,
            children: (0, t.jsx)(b, {
              to: e?.to,
              children: (0, t.jsxs)("div", {
                className: (0, f.default)("rockstargames-sites-gta-gen9a9b63d3aa2f18fa6c84b19c8993a7893", e.className),
                style: e?.style ?? {},
                ...e?.props,
                children: [e?.image || e?.videoId ? (0, t.jsx)(p, {
                  item: e
                }) : "", e.title || e.description ? (0, t.jsx)(r.A, {
                  item: e,
                  className: "rockstargames-sites-gta-gen9bc47d354556b20071313d2c1ccc3debd"
                }) : ""]
              })
            })
          }, e.key))
        }),
        y = ({
          children: e = null,
          text: s = {},
          items: a = [],
          renderTemplate: r = "",
          style: d = {},
          id: i = null,
          ...n
        }) => {
          if (!a.length) return null;
          switch (r) {
            case "carousel":
              return (0, t.jsx)(l, {
                text: s,
                items: a,
                style: d,
                id: i,
                children: e
              });
            case "carousel-panorama":
              return (0, t.jsx)(l, {
                text: s,
                items: a,
                style: d,
                className: "panorama",
                id: i,
                children: e
              });
            default:
              return (0, t.jsx)(h, {
                items: a,
                style: d,
                id: i,
                ...n,
                children: e
              })
          }
        }
    },
    54563(e, s, a) {
      "use strict";
      a.d(s, {
        i: () => c,
        o: () => n
      });
      var t = a(39793),
        r = a(93082);
      const d = (0, a(13331).setContextItem)({
          context: (0, r.createContext)(),
          key: "tinaPayloadContext"
        }),
        {
          Provider: i
        } = d,
        n = ({
          children: e,
          payload: s
        }) => (0, t.jsx)(i, {
          value: s,
          children: e
        }),
        c = () => (0, r.useContext)(d)
    },
    25993(e, s, a) {
      "use strict";
      a.d(s, {
        C1: () => c,
        S1: () => n,
        XC: () => m,
        jS: () => l,
        qg: () => o,
        z0: () => g
      });
      var t = a(93082),
        r = a(13331),
        d = a(54563);
      const i = e => {
          if (!e) return null;
          const {
            hostname: s,
            pathname: a
          } = new URL(e, (0, r.getCdnPrefix)(!0));
          return "/" === a ? null : (s.endsWith(".akamaized.net"), e)
        },
        n = ({
          alt: e = null,
          mobile: s = null,
          imageMobileStyle: a = {},
          desktop: n = null,
          imageDesktopStyle: c = {},
          ariaLabel: l = null,
          sources: o = null,
          prod: g = null
        }) => {
          const m = (0, r.useLocale)(),
            {
              meta: f = {}
            } = (0, d.i)() ?? {},
            [u, b] = (0, t.useState)(g ?? f?.cdn ?? f?.prod ?? !0);
          (0, t.useEffect)(() => {
            b(g ?? f?.cdn ?? f?.prod ?? !0)
          }, [g, f]);
          const p = (0, t.useCallback)(e => {
            const s = null !== o,
              a = e?.previewSrc ?? e ?? null;
            if (null === a || "string" != typeof a) return null;
            if (a.startsWith("http")) return i(a);
            const t = `${s?(0,r.getCdnPrefix)(u):""}${a}`;
            return i(t)
          }, [u, o]);
          return {
            alt: e,
            ariaLabel: l,
            src: {
              mobile: p(o?.[m]?.mobile ?? o?.en_us?.mobile ?? s),
              imageMobileStyle: o?.[m]?.imageMobileStyle ?? o?.en_us?.imageMobileStyle ?? a,
              imageDesktopStyle: o?.[m]?.imageDesktopStyle ?? o?.en_us?.imageDesktopStyle ?? c,
              desktop: p(o?.[m]?.desktop ?? o?.en_us?.desktop ?? n)
            }
          }
        },
        c = e => {
          const s = (0, d.i)() ?? {},
            {
              meta: a = {}
            } = s,
            [n, c] = (0, t.useState)(a?.cdn ?? a?.prod ?? !1);
          return (0, t.useEffect)(() => {
            c(a?.cdn ?? a?.prod ?? !1)
          }, [a]), e ? e?.startsWith("http") ? i(e) : i(`${(0,r.getCdnPrefix)(n)}${e}`) : null
        },
        l = () => {
          const e = (0, d.i)() ?? {},
            {
              meta: s = {}
            } = e,
            a = (0, t.useMemo)(() => s?.cdn ?? s?.prod ?? !1, [s]);
          return (0, t.useCallback)((e, s = {}) => {
            const t = s?.prod ?? a;
            return e ? e?.startsWith("http") ? i(e) : i(`${(0,r.getCdnPrefix)(t)}${e}`) : null
          }, [a])
        },
        o = e => e.full_src,
        g = e => {
          const s = e?.previewSrc ?? e?.preview_src ?? e;
          return s?.startsWith("http") ? s : `${(0,r.getCdnPrefix)(!1)}${s}`
        },
        m = e => e.meta.uploads_directory
    },
    39279(e, s, a) {
      "use strict";
      a.d(s, {
        A: () => c
      });
      const t = {
        randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto)
      };
      let r;
      const d = new Uint8Array(16);

      function i() {
        if (!r && (r = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !r)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return r(d)
      }
      const n = [];
      for (let e = 0; e < 256; ++e) n.push((e + 256).toString(16).slice(1));
      const c = function(e, s, a) {
        if (t.randomUUID && !s && !e) return t.randomUUID();
        const r = (e = e || {}).random || (e.rng || i)();
        if (r[6] = 15 & r[6] | 64, r[8] = 63 & r[8] | 128, s) {
          a = a || 0;
          for (let e = 0; e < 16; ++e) s[a + e] = r[e];
          return s
        }
        return function(e, s = 0) {
          return n[e[s + 0]] + n[e[s + 1]] + n[e[s + 2]] + n[e[s + 3]] + "-" + n[e[s + 4]] + n[e[s + 5]] + "-" + n[e[s + 6]] + n[e[s + 7]] + "-" + n[e[s + 8]] + n[e[s + 9]] + "-" + n[e[s + 10]] + n[e[s + 11]] + n[e[s + 12]] + n[e[s + 13]] + n[e[s + 14]] + n[e[s + 15]]
        }(r)
      }
    },
    65287(e, s, a) {
      var t = {
        "./bounty.png": 7502,
        "./collector.png": 24970,
        "./moonshiner.png": 2661,
        "./naturalist.png": 16386,
        "./trader.png": 38635
      };

      function r(e) {
        var s = d(e);
        return a(s)
      }

      function d(e) {
        if (!a.o(t, e)) {
          var s = new Error("Cannot find module '" + e + "'");
          throw s.code = "MODULE_NOT_FOUND", s
        }
        return t[e]
      }
      r.keys = function() {
        return Object.keys(t)
      }, r.resolve = d, e.exports = r, r.id = 65287
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
    }
  }
]);