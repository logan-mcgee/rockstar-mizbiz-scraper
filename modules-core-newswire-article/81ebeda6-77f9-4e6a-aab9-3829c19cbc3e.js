try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "81ebeda6-77f9-4e6a-aab9-3829c19cbc3e", e._sentryDebugIdIdentifier = "sentry-dbid-81ebeda6-77f9-4e6a-aab9-3829c19cbc3e")
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
  [2860, 4053], {
    75138(e, a, s) {
      s.d(a, {
        A: () => b
      });
      var r = s(39793),
        t = s(93082),
        c = s(14653),
        d = s(50662),
        l = s(39279),
        i = s(81270),
        o = s(28528);
      const n = {
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
      var m = s(68291),
        u = s(44453);
      const f = ({
          item: e
        }) => (0, r.jsxs)("div", {
          children: [(0, r.jsx)(u.A, {
            image: e?.image,
            badge: e?.badge ?? e?.image?.badge,
            badgeType: "badge3",
            role: e?.role ?? e?.image?.role,
            splitter: e?.splitter ?? e?.image?.splitter,
            type: e?.type,
            ariaLabel: e?.image?.ariaLabel ?? e.description,
            style: e?.style,
            className: (0, i.default)(n.img, e?.className)
          }), (e?.title || e?.description) && (0, r.jsx)(m.A, {
            item: e
          })]
        }),
        g = ({
          current: e,
          total: a
        }) => (0, r.jsx)("div", {
          className: "swiper-scrollbar",
          style: {
            "--current-slide": e,
            "--total-slides": a
          },
          children: (0, r.jsx)("div", {
            className: "swiper-scrollbar-drag"
          })
        }),
        b = ({
          children: e,
          items: a = [],
          style: s = {},
          noInfiniteScroll: u = !1,
          className: b = "",
          renderTemplate: w = "standard",
          text: p,
          customSpaceBetween: h = null,
          centerSlides: y = !0,
          centeredSlidesBounds: k = !1
        }) => {
          const x = (0, o.Ub)("(min-width: 0px) and (max-width: 768px)"),
            [j, N] = (0, t.useState)(0),
            [_, v] = (0, t.useState)(null),
            I = (0, t.useMemo)(() => e && Array.isArray(e) ? e.map(() => (0, l.A)()) : null, [e, x]),
            T = e => {
              if (!e) return;
              let a = 0;
              e.pagination.bullets.forEach((e, s) => {
                e.classList.contains("swiper-pagination-bullet-active") && (a = s)
              }), N(a)
            };
          if (!(a && 0 !== a?.length || e)) return null;
          const S = {
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
          return (0, r.jsxs)("div", {
            className: (0, i.default)(n.deprecatedCarousel, n[w], n.infinite_true, e ? n.renderedWithChildren : "", b),
            style: s,
            "data-testid": "carousel",
            children: [(0, r.jsxs)(c.RC, {
              modules: [d.dK, d.Jq],
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
              breakpoints: S,
              onSlideChange: e => {
                T(e)
              },
              onResize: e => {
                null != _ && clearTimeout(_);
                const a = setTimeout(() => {
                  e.update(), e.updateSize(), e.updateSlides(), e.slideToClosest(), T(e)
                }, 250);
                v(a)
              },
              children: [(0, r.jsx)("div", {
                className: n.trackWrapper,
                children: (0, r.jsxs)("div", {
                  className: n.track,
                  children: [a?.map(e => (0, r.jsx)(c.qr, {
                    tabIndex: 0,
                    children: (0, r.jsx)(f, {
                      item: e
                    })
                  }, e.key)), e && e.map((e, a) => e && (0, r.jsx)(c.qr, {
                    children: e
                  }, I && I[a]))]
                })
              }), (0, r.jsx)(g, {
                current: j,
                total: e ? e.length : a.length
              })]
            }), (p?.title || p?.description) && (0, r.jsx)(m.A, {
              item: p
            })]
          })
        }
    },
    68291(e, a, s) {
      s.d(a, {
        A: () => n
      });
      var r = s(39793),
        t = s(81270),
        c = s(95967),
        d = s(12334),
        l = s(5413);
      const i = "rockstargames-modules-core-newswire-articleacd27eff2209196752622710f7b27558",
        o = ({
          to: e,
          children: a
        }) => e ? (0, r.jsx)("a", {
          href: e,
          target: "_blank",
          rel: "noreferrer",
          children: a
        }) : a,
        n = ({
          item: e,
          className: a = ""
        }) => (0, r.jsxs)("div", {
          className: (0, t.default)("rockstargames-modules-core-newswire-articlef8bc9589974046cdac4a2264be12d2df", a),
          children: [e.title && (0, r.jsx)(o, {
            to: e?.href ?? e?.to,
            children: (0, r.jsx)("h3", {
              children: e.title
            })
          }), Array.isArray(e?.description?.content) ? e.description.content?.map((e, a) => e?.unorderedList ? (0, r.jsx)(d.A, {
            columns: e.unorderedList.columns ?? null,
            style: {
              "--unordered-list-padding": "var(--grid-gap-static-sm)",
              "--unordered-list-margin-bottom": ".5rem"
            },
            noImg: !0,
            list: e.unorderedList.list
          }, a) : e?.image ? (0, r.jsx)(c.A, {
            image: e.image,
            className: e?.className
          }, a) : e?.separator ? (0, r.jsx)("div", {
            style: {
              margin: `${e.separator.spacing} 0`
            },
            children: (0, r.jsx)(l.A, {})
          }, a) : (0, r.jsx)("p", {
            children: (0, r.jsx)("span", {
              className: i,
              dangerouslySetInnerHTML: {
                __html: e
              }
            })
          }, a)) : (0, r.jsx)("span", {
            className: i,
            dangerouslySetInnerHTML: {
              __html: e.description
            }
          })]
        })
    },
    5413(e, a, s) {
      s.d(a, {
        A: () => c
      });
      var r = s(39793);
      const t = {
          gtao: "rockstargames-modules-core-newswire-articlef66c75c6e882da85fef31e4211ca0be2",
          hr: "rockstargames-modules-core-newswire-articledc7b1bc141e132d4ee9b7bf9d55c573a",
          redLine: "rockstargames-modules-core-newswire-articled4d968b41ef87926b0b6318e8647738b"
        },
        c = ({
          style: e,
          className: a = "",
          type: s = ""
        }) => (0, r.jsx)("div", {
          style: e,
          className: [t.hr, t[s], a].join(" ")
        })
    },
    12334(e, a, s) {
      s.d(a, {
        A: () => m
      });
      var r = s(39793),
        t = s(93082),
        c = s(91681),
        d = s.n(c),
        l = s(13331),
        i = s(81270);
      const o = {
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
          sanitize: n
        } = d(),
        m = ({
          list: e,
          string: a,
          starColor: s,
          style: c,
          className: d,
          game: m,
          noImg: u,
          columns: f,
          mobileColumns: g
        }) => {
          const [b, w] = (0, t.useState)(null), p = a ? a.split("_#_") : e;
          if ((0, t.useEffect)(() => {
              w(e)
            }, [e]), !a && !e) return null;
          const h = {
            color: c?.color
          };
          return delete c?.color, f && b ? (0, r.jsx)("div", {
            className: o.grid,
            style: {
              "--unordered-list-grid-column": f,
              "--unordered-list-grid-column-mobile": g ?? f
            },
            children: (0, r.jsx)("ul", {
              className: (0, i.default)(o.itemList, o.noImg, o[s], o[m]),
              style: (0, l.safeStyles)(c),
              children: b.map((e, a) => (0, r.jsx)("li", {
                style: h,
                dangerouslySetInnerHTML: {
                  __html: n(e.content)
                }
              }, a))
            })
          }) : (0, r.jsx)("ul", {
            style: (0, l.safeStyles)(c),
            className: (0, i.default)(o.itemList, o.custom, u ? o.noImg : "", s ? o[s] : "", m ? o[m] : "", d ?? ""),
            children: p.map((e, a) => (0, r.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: n(e?.content ?? e)
              }
            }, a))
          })
        }
    },
    44053(e, a, s) {
      s.r(a), s.d(a, {
        default: () => h
      });
      var r = s(39793),
        t = s(68291),
        c = s(44453),
        d = s(75138);
      const l = {
          carouselTitle: "rockstargames-modules-core-newswire-articlee9e0ef1bfc3699b1e50c33dd0ce8e76a",
          carouselWrapper: "rockstargames-modules-core-newswire-articlefabefc39343f6c494eb3d049757d89c5",
          padding: "rockstargames-modules-core-newswire-articleac767e959939b4d56b2358cb263d07ad"
        },
        i = ({
          to: e,
          children: a
        }) => e ? (0, r.jsx)("a", {
          href: e,
          target: "_blank",
          children: a
        }) : a,
        o = ({
          items: e = [],
          text: a = {},
          style: s,
          className: o = "",
          id: n = null
        }) => e?.length ? (0, r.jsxs)("div", {
          id: n,
          "data-testid": `carousel${o&&`-${o}`}-group-of-items`,
          children: [(0, r.jsx)(d.A, {
            style: s,
            className: [o, l.carouselWrapper].join(" "),
            children: e.map(e => (0, r.jsxs)("div", {
              id: e?.id ?? null,
              children: [(0, r.jsx)(c.A, {
                image: e?.image,
                badge: e?.badge ?? e?.image?.badge,
                badgeType: "badge3",
                role: e?.role ?? e?.image?.role,
                splitter: e?.splitter ?? e?.image?.splitter,
                type: e?.type,
                ariaLabel: e?.image?.ariaLabel ?? e.description,
                style: e?.style,
                className: [l.img, e?.className].join(" ")
              }), e.title && (0, r.jsx)(i, {
                to: e?.to,
                children: (0, r.jsx)("h4", {
                  className: l.carouselTitle,
                  children: e.title
                })
              }), e.description && (0, r.jsx)("span", {
                className: l.description,
                dangerouslySetInnerHTML: {
                  __html: e.description
                }
              })]
            }, e?.key ?? e?.title))
          }), a?.title || a?.description ? (0, r.jsx)("div", {
            className: l.padding,
            style: a?.style ?? {},
            children: (0, r.jsx)(t.A, {
              item: a
            })
          }) : ""]
        }) : null;
      var n = s(31879),
        m = s.n(n),
        u = s(17301),
        f = s(81270);
      const g = ({
          impressionTracking: e,
          gtm: a = {},
          children: s
        }) => e?.shouldTrack ? (0, r.jsx)(u.InViewTracker, {
          threshold: e?.threshold,
          gtm: a,
          children: s
        }) : s,
        b = ({
          to: e,
          children: a
        }) => e ? (0, r.jsx)("a", {
          href: e,
          target: "_blank",
          rel: "noreferrer",
          children: a
        }) : a,
        w = ({
          item: e
        }) => e?.videoId ? (0, r.jsx)(m(), {
          context: "site",
          autoplay: !1,
          id: e.videoId
        }) : (0, r.jsx)(c.A, {
          image: e?.image,
          badge: e?.badge ?? e?.image?.badge,
          badgeType: "badge3",
          role: e?.role ?? e?.image?.role,
          splitter: e?.splitter ?? e?.image?.splitter,
          ariaLabel: e?.image?.ariaLabel,
          style: e?.style,
          className: e?.className
        }),
        p = ({
          items: e,
          style: a = {},
          className: s = "",
          id: c = null
        }) => (0, r.jsx)("div", {
          style: a,
          className: (0, f.default)("rockstargames-modules-core-newswire-articled38af92e8657708abd3dc5295e62476c", s),
          id: c,
          "data-testid": "standard-group-of-items",
          children: e.map(e => (0, r.jsx)(g, {
            impressionTracking: e?.impressionTracking,
            gtm: e?.gtm,
            children: (0, r.jsx)(b, {
              to: e?.to,
              children: (0, r.jsxs)("div", {
                className: (0, f.default)("rockstargames-modules-core-newswire-articlea9b63d3aa2f18fa6c84b19c8993a7893", e.className),
                style: e?.style ?? {},
                ...e?.props,
                children: [e?.image || e?.videoId ? (0, r.jsx)(w, {
                  item: e
                }) : "", e.title || e.description ? (0, r.jsx)(t.A, {
                  item: e,
                  className: "rockstargames-modules-core-newswire-articlebc47d354556b20071313d2c1ccc3debd"
                }) : ""]
              })
            })
          }, e.key))
        }),
        h = ({
          children: e = null,
          text: a = {},
          items: s = [],
          renderTemplate: t = "",
          style: c = {},
          id: d = null,
          ...l
        }) => {
          if (!s.length) return null;
          switch (t) {
            case "carousel":
              return (0, r.jsx)(o, {
                text: a,
                items: s,
                style: c,
                id: d,
                children: e
              });
            case "carousel-panorama":
              return (0, r.jsx)(o, {
                text: a,
                items: s,
                style: c,
                className: "panorama",
                id: d,
                children: e
              });
            default:
              return (0, r.jsx)(p, {
                items: s,
                style: c,
                id: d,
                ...l,
                children: e
              })
          }
        }
    },
    39279(e, a, s) {
      s.d(a, {
        A: () => i
      });
      const r = {
        randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto)
      };
      let t;
      const c = new Uint8Array(16);

      function d() {
        if (!t && (t = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !t)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return t(c)
      }
      const l = [];
      for (let e = 0; e < 256; ++e) l.push((e + 256).toString(16).slice(1));
      const i = function(e, a, s) {
        if (r.randomUUID && !a && !e) return r.randomUUID();
        const t = (e = e || {}).random || (e.rng || d)();
        if (t[6] = 15 & t[6] | 64, t[8] = 63 & t[8] | 128, a) {
          s = s || 0;
          for (let e = 0; e < 16; ++e) a[s + e] = t[e];
          return a
        }
        return function(e, a = 0) {
          return l[e[a + 0]] + l[e[a + 1]] + l[e[a + 2]] + l[e[a + 3]] + "-" + l[e[a + 4]] + l[e[a + 5]] + "-" + l[e[a + 6]] + l[e[a + 7]] + "-" + l[e[a + 8]] + l[e[a + 9]] + "-" + l[e[a + 10]] + l[e[a + 11]] + l[e[a + 12]] + l[e[a + 13]] + l[e[a + 14]] + l[e[a + 15]]
        }(t)
      }
    }
  }
]);