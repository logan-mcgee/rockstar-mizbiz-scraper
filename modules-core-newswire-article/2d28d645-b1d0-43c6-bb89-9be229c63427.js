try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "2d28d645-b1d0-43c6-bb89-9be229c63427", e._sentryDebugIdIdentifier = "sentry-dbid-2d28d645-b1d0-43c6-bb89-9be229c63427")
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
  [4865, 8726], {
    43623(e, a, s) {
      s.d(a, {
        A: () => h
      });
      var t = s(39793),
        i = s(93082),
        r = s(14653),
        l = s(44128),
        n = s(73059),
        o = s(31147),
        c = s(39279),
        d = s(81270),
        p = s(56433);
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
      var u = s(49516),
        g = s(98769);
      const f = ({
          item: e
        }) => (0, t.jsxs)("div", {
          children: [(0, t.jsx)(g.A, {
            image: e?.image,
            badge: e?.badge ?? e?.image?.badge,
            badgeType: "badge3",
            role: e?.role ?? e?.image?.role,
            splitter: e?.splitter ?? e?.image?.splitter,
            type: e?.type,
            ariaLabel: e?.image?.ariaLabel ?? e.description,
            style: e?.style,
            className: (0, d.default)(m.img, e?.className)
          }), (e?.title || e?.description) && (0, t.jsx)(u.A, {
            item: e
          })]
        }),
        b = ({
          current: e,
          total: a
        }) => (0, t.jsx)("div", {
          className: "swiper-scrollbar",
          style: {
            "--current-slide": e,
            "--total-slides": a
          },
          children: (0, t.jsx)("div", {
            className: "swiper-scrollbar-drag"
          })
        }),
        h = ({
          children: e,
          items: a = [],
          style: s = {},
          noInfiniteScroll: g = !1,
          className: h = "",
          renderTemplate: y = "standard",
          text: w,
          customSpaceBetween: v = null,
          centerSlides: k = !0,
          centeredSlidesBounds: x = !1
        }) => {
          const E = (0, p.Ub)("(min-width: 0px) and (max-width: 768px)"),
            [C, L] = (0, i.useState)(0),
            [A, j] = (0, i.useState)(null),
            M = (0, i.useMemo)(() => e && Array.isArray(e) ? e.map(() => (0, c.A)()) : null, [e, E]),
            S = e => {
              if (!e) return;
              let a = 0;
              e.pagination.bullets.forEach((e, s) => {
                e.classList.contains("swiper-pagination-bullet-active") && (a = s)
              }), L(a)
            };
          if (!(a && 0 !== a?.length || e)) return null;
          const I = {
            0: {
              spaceBetween: v ?? 16
            },
            1024: {
              spaceBetween: v ?? 18
            },
            1920: {
              spaceBetween: v ?? 20
            },
            2560: {
              spaceBetween: v ?? 22
            }
          };
          return (0, t.jsxs)("div", {
            className: (0, d.default)(m.deprecatedCarousel, m[y], m.infinite_true, e ? m.renderedWithChildren : "", h),
            style: s,
            "data-testid": "carousel",
            children: [(0, t.jsxs)(r.RC, {
              modules: [l.A, n.A, o.A],
              keyboard: {
                enabled: !0,
                onlyInViewport: !0
              },
              a11y: {
                enabled: !0,
                scrollOnFocus: !0
              },
              pagination: {
                enabled: !0
              },
              updateOnWindowResize: !1,
              loop: !1,
              grabCursor: !0,
              centeredSlides: k,
              centerInsufficientSlides: k,
              centeredSlidesBounds: x,
              slidesPerView: "auto",
              speed: 700,
              breakpoints: I,
              onSlideChange: e => {
                S(e)
              },
              onResize: e => {
                null != A && clearTimeout(A);
                const a = setTimeout(() => {
                  e.update(), e.updateSize(), e.updateSlides(), e.slideToClosest(), S(e)
                }, 250);
                j(a)
              },
              children: [(0, t.jsx)("div", {
                className: m.trackWrapper,
                children: (0, t.jsxs)("div", {
                  className: m.track,
                  children: [a?.map(e => (0, t.jsx)(r.qr, {
                    children: (0, t.jsx)(f, {
                      item: e
                    })
                  }, e.key)), e && e.map((e, a) => e && (0, t.jsx)(r.qr, {
                    children: e
                  }, M && M[a]))]
                })
              }), (0, t.jsx)(b, {
                current: C,
                total: e ? e.length : a.length
              })]
            }), (w?.title || w?.description) && (0, t.jsx)(u.A, {
              item: w
            })]
          })
        }
    },
    49516(e, a, s) {
      s.d(a, {
        A: () => d
      });
      var t = s(39793),
        i = s(81270),
        r = s(62012),
        l = s(49852),
        n = s(51299);
      const o = "rockstargames-modules-core-newswire-articleacd27eff2209196752622710f7b27558",
        c = ({
          to: e,
          children: a
        }) => e ? (0, t.jsx)("a", {
          href: e,
          target: "_blank",
          rel: "noreferrer",
          children: a
        }) : a,
        d = ({
          item: e,
          className: a = ""
        }) => (0, t.jsxs)("div", {
          className: (0, i.default)("rockstargames-modules-core-newswire-articlef8bc9589974046cdac4a2264be12d2df", a),
          children: [e.title && (0, t.jsx)(c, {
            to: e?.href ?? e?.to,
            children: (0, t.jsx)("h3", {
              children: e.title
            })
          }), Array.isArray(e?.description?.content) ? e.description.content?.map((e, a) => e?.unorderedList ? (0, t.jsx)(l.A, {
            columns: e.unorderedList.columns ?? null,
            style: {
              "--unordered-list-padding": "var(--grid-gap-static-sm)",
              "--unordered-list-margin-bottom": ".5rem"
            },
            noImg: !0,
            list: e.unorderedList.list
          }, a) : e?.image ? (0, t.jsx)(r.A, {
            image: e.image,
            className: e?.className
          }, a) : e?.separator ? (0, t.jsx)("div", {
            style: {
              margin: `${e.separator.spacing} 0`
            },
            children: (0, t.jsx)(n.A, {})
          }, a) : (0, t.jsx)("p", {
            children: (0, t.jsx)("span", {
              className: o,
              dangerouslySetInnerHTML: {
                __html: e
              }
            })
          }, a)) : (0, t.jsx)("span", {
            className: o,
            dangerouslySetInnerHTML: {
              __html: e.description
            }
          })]
        })
    },
    51299(e, a, s) {
      s.d(a, {
        A: () => r
      });
      var t = s(39793);
      const i = {
          gtao: "rockstargames-modules-core-newswire-articlef66c75c6e882da85fef31e4211ca0be2",
          hr: "rockstargames-modules-core-newswire-articledc7b1bc141e132d4ee9b7bf9d55c573a",
          redLine: "rockstargames-modules-core-newswire-articled4d968b41ef87926b0b6318e8647738b"
        },
        r = ({
          style: e,
          className: a = "",
          type: s = ""
        }) => (0, t.jsx)("div", {
          style: e,
          className: [i.hr, i[s], a].join(" ")
        })
    },
    49852(e, a, s) {
      s.d(a, {
        A: () => p
      });
      var t = s(39793),
        i = s(93082),
        r = s(91681),
        l = s.n(r),
        n = s(13331),
        o = s(81270);
      const c = {
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
          sanitize: d
        } = l(),
        p = ({
          list: e,
          string: a,
          starColor: s,
          style: r,
          className: l,
          game: p,
          noImg: m,
          columns: u,
          mobileColumns: g
        }) => {
          const [f, b] = (0, i.useState)(null), h = a ? a.split("_#_") : e;
          if ((0, i.useEffect)(() => {
              b(e)
            }, [e]), !a && !e) return null;
          const y = {
            color: r?.color
          };
          return delete r?.color, u && f ? (0, t.jsx)("div", {
            className: c.grid,
            style: {
              "--unordered-list-grid-column": u,
              "--unordered-list-grid-column-mobile": g ?? u
            },
            children: (0, t.jsx)("ul", {
              className: (0, o.default)(c.itemList, c.noImg, c[s], c[p]),
              style: (0, n.safeStyles)(r),
              children: f.map((e, a) => (0, t.jsx)("li", {
                style: y,
                dangerouslySetInnerHTML: {
                  __html: d(e.content)
                }
              }, a))
            })
          }) : (0, t.jsx)("ul", {
            style: (0, n.safeStyles)(r),
            className: (0, o.default)(c.itemList, c.custom, m ? c.noImg : "", s ? c[s] : "", p ? c[p] : "", l ?? ""),
            children: h.map((e, a) => (0, t.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: d(e?.content ?? e)
              }
            }, a))
          })
        }
    },
    78726(e, a, s) {
      s.r(a), s.d(a, {
        default: () => y
      });
      var t = s(39793),
        i = s(49516),
        r = s(98769),
        l = s(43623);
      const n = {
          carouselTitle: "rockstargames-modules-core-newswire-articlee9e0ef1bfc3699b1e50c33dd0ce8e76a",
          carouselWrapper: "rockstargames-modules-core-newswire-articlefabefc39343f6c494eb3d049757d89c5",
          padding: "rockstargames-modules-core-newswire-articleac767e959939b4d56b2358cb263d07ad"
        },
        o = ({
          to: e,
          children: a
        }) => e ? (0, t.jsx)("a", {
          href: e,
          target: "_blank",
          children: a
        }) : a,
        c = ({
          items: e = [],
          text: a = {},
          style: s,
          className: c = "",
          id: d = null
        }) => e?.length ? (0, t.jsxs)("div", {
          id: d,
          "data-testid": `carousel${c&&`-${c}`}-group-of-items`,
          children: [(0, t.jsx)(l.A, {
            style: s,
            className: [c, n.carouselWrapper].join(" "),
            children: e.map(e => (0, t.jsxs)("div", {
              id: e?.id ?? null,
              children: [(0, t.jsx)("div", {
                className: n.imageWrapper,
                tabIndex: 0,
                children: (0, t.jsx)(r.A, {
                  image: e?.image,
                  badge: e?.badge ?? e?.image?.badge,
                  badgeType: "badge3",
                  role: e?.role ?? e?.image?.role,
                  splitter: e?.splitter ?? e?.image?.splitter,
                  type: e?.type,
                  ariaLabel: e?.image?.ariaLabel ?? e.description,
                  style: e?.style,
                  className: [n.img, e?.className].join(" ")
                })
              }), e.title && (0, t.jsx)(o, {
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
          }), a?.title || a?.description ? (0, t.jsx)("div", {
            className: n.padding,
            style: a?.style ?? {},
            children: (0, t.jsx)(i.A, {
              item: a
            })
          }) : ""]
        }) : null;
      var d = s(31879),
        p = s.n(d),
        m = s(17301),
        u = s(81270);
      const g = ({
          impressionTracking: e,
          gtm: a = {},
          children: s
        }) => e?.shouldTrack ? (0, t.jsx)(m.InViewTracker, {
          threshold: e?.threshold,
          gtm: a,
          children: s
        }) : s,
        f = ({
          to: e,
          children: a
        }) => e ? (0, t.jsx)("a", {
          href: e,
          target: "_blank",
          rel: "noreferrer",
          children: a
        }) : a,
        b = ({
          item: e
        }) => e?.videoId ? (0, t.jsx)(p(), {
          context: "site",
          autoplay: !1,
          id: e.videoId
        }) : (0, t.jsx)(r.A, {
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
          style: a = {},
          className: s = "",
          id: r = null
        }) => (0, t.jsx)("div", {
          style: a,
          className: (0, u.default)("rockstargames-modules-core-newswire-articled38af92e8657708abd3dc5295e62476c", s),
          id: r,
          "data-testid": "standard-group-of-items",
          children: e.map(e => (0, t.jsx)(g, {
            impressionTracking: e?.impressionTracking,
            gtm: e?.gtm,
            children: (0, t.jsx)(f, {
              to: e?.to,
              children: (0, t.jsxs)("div", {
                className: (0, u.default)("rockstargames-modules-core-newswire-articlea9b63d3aa2f18fa6c84b19c8993a7893", e.className),
                style: e?.style ?? {},
                ...e?.props,
                children: [e?.image || e?.videoId ? (0, t.jsx)(b, {
                  item: e
                }) : "", e.title || e.description ? (0, t.jsx)(i.A, {
                  item: e,
                  className: "rockstargames-modules-core-newswire-articlebc47d354556b20071313d2c1ccc3debd"
                }) : ""]
              })
            })
          }, e.key))
        }),
        y = ({
          children: e = null,
          text: a = {},
          items: s = [],
          renderTemplate: i = "",
          style: r = {},
          id: l = null,
          ...n
        }) => {
          if (!s.length) return null;
          switch (i) {
            case "carousel":
              return (0, t.jsx)(c, {
                text: a,
                items: s,
                style: r,
                id: l,
                children: e
              });
            case "carousel-panorama":
              return (0, t.jsx)(c, {
                text: a,
                items: s,
                style: r,
                className: "panorama",
                id: l,
                children: e
              });
            default:
              return (0, t.jsx)(h, {
                items: s,
                style: r,
                id: l,
                ...n,
                children: e
              })
          }
        }
    },
    39279(e, a, s) {
      s.d(a, {
        A: () => o
      });
      const t = {
        randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto)
      };
      let i;
      const r = new Uint8Array(16);

      function l() {
        if (!i && (i = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !i)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return i(r)
      }
      const n = [];
      for (let e = 0; e < 256; ++e) n.push((e + 256).toString(16).slice(1));
      const o = function(e, a, s) {
        if (t.randomUUID && !a && !e) return t.randomUUID();
        const i = (e = e || {}).random || (e.rng || l)();
        if (i[6] = 15 & i[6] | 64, i[8] = 63 & i[8] | 128, a) {
          s = s || 0;
          for (let e = 0; e < 16; ++e) a[s + e] = i[e];
          return a
        }
        return function(e, a = 0) {
          return n[e[a + 0]] + n[e[a + 1]] + n[e[a + 2]] + n[e[a + 3]] + "-" + n[e[a + 4]] + n[e[a + 5]] + "-" + n[e[a + 6]] + n[e[a + 7]] + "-" + n[e[a + 8]] + n[e[a + 9]] + "-" + n[e[a + 10]] + n[e[a + 11]] + n[e[a + 12]] + n[e[a + 13]] + n[e[a + 14]] + n[e[a + 15]]
        }(i)
      }
    },
    73059(e, a, s) {
      s.d(a, {
        A: () => l
      });
      var t = s(37015),
        i = s(20219),
        r = s(20212);

      function l(e) {
        let {
          swiper: a,
          extendParams: s,
          on: l
        } = e;
        s({
          a11y: {
            enabled: !0,
            notificationClass: "swiper-notification",
            prevSlideMessage: "Previous slide",
            nextSlideMessage: "Next slide",
            firstSlideMessage: "This is the first slide",
            lastSlideMessage: "This is the last slide",
            paginationBulletMessage: "Go to slide {{index}}",
            slideLabelMessage: "{{index}} / {{slidesLength}}",
            containerMessage: null,
            containerRoleDescriptionMessage: null,
            containerRole: null,
            itemRoleDescriptionMessage: null,
            slideRole: "group",
            id: null,
            scrollOnFocus: !0
          }
        }), a.a11y = {
          clicked: !1
        };
        let n, o, c = null,
          d = (new Date).getTime();

        function p(e) {
          const a = c;
          0 !== a.length && (0, r.s)(a, e)
        }

        function m(e) {
          (e = (0, r.m)(e)).forEach(e => {
            e.setAttribute("tabIndex", "0")
          })
        }

        function u(e) {
          (e = (0, r.m)(e)).forEach(e => {
            e.setAttribute("tabIndex", "-1")
          })
        }

        function g(e, a) {
          (e = (0, r.m)(e)).forEach(e => {
            e.setAttribute("role", a)
          })
        }

        function f(e, a) {
          (e = (0, r.m)(e)).forEach(e => {
            e.setAttribute("aria-roledescription", a)
          })
        }

        function b(e, a) {
          (e = (0, r.m)(e)).forEach(e => {
            e.setAttribute("aria-label", a)
          })
        }

        function h(e) {
          (e = (0, r.m)(e)).forEach(e => {
            e.setAttribute("aria-disabled", !0)
          })
        }

        function y(e) {
          (e = (0, r.m)(e)).forEach(e => {
            e.setAttribute("aria-disabled", !1)
          })
        }

        function w(e) {
          if (13 !== e.keyCode && 32 !== e.keyCode) return;
          const s = a.params.a11y,
            t = e.target;
          if (!a.pagination || !a.pagination.el || t !== a.pagination.el && !a.pagination.el.contains(e.target) || e.target.matches((0, i.c)(a.params.pagination.bulletClass))) {
            if (a.navigation && a.navigation.prevEl && a.navigation.nextEl) {
              const e = (0, r.m)(a.navigation.prevEl);
              (0, r.m)(a.navigation.nextEl).includes(t) && (a.isEnd && !a.params.loop || a.slideNext(), a.isEnd ? p(s.lastSlideMessage) : p(s.nextSlideMessage)), e.includes(t) && (a.isBeginning && !a.params.loop || a.slidePrev(), a.isBeginning ? p(s.firstSlideMessage) : p(s.prevSlideMessage))
            }
            a.pagination && t.matches((0, i.c)(a.params.pagination.bulletClass)) && t.click()
          }
        }

        function v() {
          return a.pagination && a.pagination.bullets && a.pagination.bullets.length
        }

        function k() {
          return v() && a.params.pagination.clickable
        }
        const x = (e, a, s) => {
            m(e), "BUTTON" !== e.tagName && (g(e, "button"), e.addEventListener("keydown", w)), b(e, s),
              function(e, a) {
                (e = (0, r.m)(e)).forEach(e => {
                  e.setAttribute("aria-controls", a)
                })
              }(e, a)
          },
          E = e => {
            o && o !== e.target && !o.contains(e.target) && (n = !0), a.a11y.clicked = !0
          },
          C = () => {
            n = !1, requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                a.destroyed || (a.a11y.clicked = !1)
              })
            })
          },
          L = e => {
            d = (new Date).getTime()
          },
          A = e => {
            if (a.a11y.clicked || !a.params.a11y.scrollOnFocus) return;
            if ((new Date).getTime() - d < 100) return;
            const s = e.target.closest(`.${a.params.slideClass}, swiper-slide`);
            if (!s || !a.slides.includes(s)) return;
            o = s;
            const t = a.slides.indexOf(s) === a.activeIndex,
              i = a.params.watchSlidesProgress && a.visibleSlides && a.visibleSlides.includes(s);
            t || i || e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents || (a.isHorizontal() ? a.el.scrollLeft = 0 : a.el.scrollTop = 0, requestAnimationFrame(() => {
              n || (a.params.loop ? a.slideToLoop(a.getSlideIndexWhenGrid(parseInt(s.getAttribute("data-swiper-slide-index"))), 0) : a.slideTo(a.getSlideIndexWhenGrid(a.slides.indexOf(s)), 0), n = !1)
            }))
          },
          j = () => {
            const e = a.params.a11y;
            e.itemRoleDescriptionMessage && f(a.slides, e.itemRoleDescriptionMessage), e.slideRole && g(a.slides, e.slideRole);
            const s = a.slides.length;
            e.slideLabelMessage && a.slides.forEach((t, i) => {
              const r = a.params.loop ? parseInt(t.getAttribute("data-swiper-slide-index"), 10) : i;
              b(t, e.slideLabelMessage.replace(/\{\{index\}\}/, r + 1).replace(/\{\{slidesLength\}\}/, s))
            })
          };
        l("beforeInit", () => {
          c = (0, r.c)("span", a.params.a11y.notificationClass), c.setAttribute("aria-live", "assertive"), c.setAttribute("aria-atomic", "true")
        }), l("afterInit", () => {
          a.params.a11y.enabled && (() => {
            const e = a.params.a11y;
            a.el.append(c);
            const s = a.el;
            e.containerRoleDescriptionMessage && f(s, e.containerRoleDescriptionMessage), e.containerMessage && b(s, e.containerMessage), e.containerRole && g(s, e.containerRole);
            const i = a.wrapperEl,
              l = e.id || i.getAttribute("id") || `swiper-wrapper-${n=16,void 0===n&&(n=16),"x".repeat(n).replace(/x/g,()=>Math.round(16*Math.random()).toString(16))}`;
            var n;
            const o = a.params.autoplay && a.params.autoplay.enabled ? "off" : "polite";
            var d, p;
            d = i, p = l, (d = (0, r.m)(d)).forEach(e => {
                e.setAttribute("id", p)
              }),
              function(e, a) {
                (e = (0, r.m)(e)).forEach(e => {
                  e.setAttribute("aria-live", a)
                })
              }(i, o), j();
            let {
              nextEl: m,
              prevEl: u
            } = a.navigation ? a.navigation : {};
            m = (0, r.m)(m), u = (0, r.m)(u), m && m.forEach(a => x(a, l, e.nextSlideMessage)), u && u.forEach(a => x(a, l, e.prevSlideMessage)), k() && (0, r.m)(a.pagination.el).forEach(e => {
              e.addEventListener("keydown", w)
            }), (0, t.g)().addEventListener("visibilitychange", L), a.el.addEventListener("focus", A, !0), a.el.addEventListener("focus", A, !0), a.el.addEventListener("pointerdown", E, !0), a.el.addEventListener("pointerup", C, !0)
          })()
        }), l("slidesLengthChange snapGridLengthChange slidesGridLengthChange", () => {
          a.params.a11y.enabled && j()
        }), l("fromEdge toEdge afterInit lock unlock", () => {
          a.params.a11y.enabled && function() {
            if (a.params.loop || a.params.rewind || !a.navigation) return;
            const {
              nextEl: e,
              prevEl: s
            } = a.navigation;
            s && (a.isBeginning ? (h(s), u(s)) : (y(s), m(s))), e && (a.isEnd ? (h(e), u(e)) : (y(e), m(e)))
          }()
        }), l("paginationUpdate", () => {
          a.params.a11y.enabled && function() {
            const e = a.params.a11y;
            v() && a.pagination.bullets.forEach(s => {
              a.params.pagination.clickable && (m(s), a.params.pagination.renderBullet || (g(s, "button"), b(s, e.paginationBulletMessage.replace(/\{\{index\}\}/, (0, r.i)(s) + 1)))), s.matches((0, i.c)(a.params.pagination.bulletActiveClass)) ? s.setAttribute("aria-current", "true") : s.removeAttribute("aria-current")
            })
          }()
        }), l("destroy", () => {
          a.params.a11y.enabled && function() {
            c && c.remove();
            let {
              nextEl: e,
              prevEl: s
            } = a.navigation ? a.navigation : {};
            e = (0, r.m)(e), s = (0, r.m)(s), e && e.forEach(e => e.removeEventListener("keydown", w)), s && s.forEach(e => e.removeEventListener("keydown", w)), k() && (0, r.m)(a.pagination.el).forEach(e => {
              e.removeEventListener("keydown", w)
            }), (0, t.g)().removeEventListener("visibilitychange", L), a.el && "string" != typeof a.el && (a.el.removeEventListener("focus", A, !0), a.el.removeEventListener("pointerdown", E, !0), a.el.removeEventListener("pointerup", C, !0))
          }()
        })
      }
    },
    44128(e, a, s) {
      s.d(a, {
        A: () => r
      });
      var t = s(37015),
        i = s(20212);

      function r(e) {
        let {
          swiper: a,
          extendParams: s,
          on: r,
          emit: l
        } = e;
        const n = (0, t.g)(),
          o = (0, t.a)();

        function c(e) {
          if (!a.enabled) return;
          const {
            rtlTranslate: s
          } = a;
          let t = e;
          t.originalEvent && (t = t.originalEvent);
          const r = t.keyCode || t.charCode,
            c = a.params.keyboard.pageUpDown,
            d = c && 33 === r,
            p = c && 34 === r,
            m = 37 === r,
            u = 39 === r,
            g = 38 === r,
            f = 40 === r;
          if (!a.allowSlideNext && (a.isHorizontal() && u || a.isVertical() && f || p)) return !1;
          if (!a.allowSlidePrev && (a.isHorizontal() && m || a.isVertical() && g || d)) return !1;
          if (!(t.shiftKey || t.altKey || t.ctrlKey || t.metaKey || n.activeElement && (n.activeElement.isContentEditable || n.activeElement.nodeName && ("input" === n.activeElement.nodeName.toLowerCase() || "textarea" === n.activeElement.nodeName.toLowerCase())))) {
            if (a.params.keyboard.onlyInViewport && (d || p || m || u || g || f)) {
              let e = !1;
              if ((0, i.b)(a.el, `.${a.params.slideClass}, swiper-slide`).length > 0 && 0 === (0, i.b)(a.el, `.${a.params.slideActiveClass}`).length) return;
              const t = a.el,
                r = t.clientWidth,
                l = t.clientHeight,
                n = o.innerWidth,
                c = o.innerHeight,
                d = (0, i.d)(t);
              s && (d.left -= t.scrollLeft);
              const p = [
                [d.left, d.top],
                [d.left + r, d.top],
                [d.left, d.top + l],
                [d.left + r, d.top + l]
              ];
              for (let a = 0; a < p.length; a += 1) {
                const s = p[a];
                if (s[0] >= 0 && s[0] <= n && s[1] >= 0 && s[1] <= c) {
                  if (0 === s[0] && 0 === s[1]) continue;
                  e = !0
                }
              }
              if (!e) return
            }
            a.isHorizontal() ? ((d || p || m || u) && (t.preventDefault ? t.preventDefault() : t.returnValue = !1), ((p || u) && !s || (d || m) && s) && a.slideNext(), ((d || m) && !s || (p || u) && s) && a.slidePrev()) : ((d || p || g || f) && (t.preventDefault ? t.preventDefault() : t.returnValue = !1), (p || f) && a.slideNext(), (d || g) && a.slidePrev()), l("keyPress", r)
          }
        }

        function d() {
          a.keyboard.enabled || (n.addEventListener("keydown", c), a.keyboard.enabled = !0)
        }

        function p() {
          a.keyboard.enabled && (n.removeEventListener("keydown", c), a.keyboard.enabled = !1)
        }
        a.keyboard = {
          enabled: !1
        }, s({
          keyboard: {
            enabled: !1,
            onlyInViewport: !0,
            pageUpDown: !0
          }
        }), r("init", () => {
          a.params.keyboard.enabled && d()
        }), r("destroy", () => {
          a.keyboard.enabled && p()
        }), Object.assign(a.keyboard, {
          enable: d,
          disable: p
        })
      }
    },
    31147(e, a, s) {
      s.d(a, {
        A: () => l
      });
      var t = s(20219),
        i = s(61122),
        r = s(20212);

      function l(e) {
        let {
          swiper: a,
          extendParams: s,
          on: l,
          emit: n
        } = e;
        const o = "swiper-pagination";
        let c;
        s({
          pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: e => e,
            formatFractionTotal: e => e,
            bulletClass: `${o}-bullet`,
            bulletActiveClass: `${o}-bullet-active`,
            modifierClass: `${o}-`,
            currentClass: `${o}-current`,
            totalClass: `${o}-total`,
            hiddenClass: `${o}-hidden`,
            progressbarFillClass: `${o}-progressbar-fill`,
            progressbarOppositeClass: `${o}-progressbar-opposite`,
            clickableClass: `${o}-clickable`,
            lockClass: `${o}-lock`,
            horizontalClass: `${o}-horizontal`,
            verticalClass: `${o}-vertical`,
            paginationDisabledClass: `${o}-disabled`
          }
        }), a.pagination = {
          el: null,
          bullets: []
        };
        let d = 0;

        function p() {
          return !a.params.pagination.el || !a.pagination.el || Array.isArray(a.pagination.el) && 0 === a.pagination.el.length
        }

        function m(e, s) {
          const {
            bulletActiveClass: t
          } = a.params.pagination;
          e && (e = e[("prev" === s ? "previous" : "next") + "ElementSibling"]) && (e.classList.add(`${t}-${s}`), (e = e[("prev" === s ? "previous" : "next") + "ElementSibling"]) && e.classList.add(`${t}-${s}-${s}`))
        }

        function u(e) {
          const s = e.target.closest((0, t.c)(a.params.pagination.bulletClass));
          if (!s) return;
          e.preventDefault();
          const i = (0, r.i)(s) * a.params.slidesPerGroup;
          if (a.params.loop) {
            if (a.realIndex === i) return;
            const e = (l = a.realIndex, n = i, (n %= o = a.slides.length) === 1 + (l %= o) ? "next" : n === l - 1 ? "previous" : void 0);
            "next" === e ? a.slideNext() : "previous" === e ? a.slidePrev() : a.slideToLoop(i)
          } else a.slideTo(i);
          var l, n, o
        }

        function g() {
          const e = a.rtl,
            s = a.params.pagination;
          if (p()) return;
          let i, l, o = a.pagination.el;
          o = (0, r.m)(o);
          const u = a.virtual && a.params.virtual.enabled ? a.virtual.slides.length : a.slides.length,
            g = a.params.loop ? Math.ceil(u / a.params.slidesPerGroup) : a.snapGrid.length;
          if (a.params.loop ? (l = a.previousRealIndex || 0, i = a.params.slidesPerGroup > 1 ? Math.floor(a.realIndex / a.params.slidesPerGroup) : a.realIndex) : void 0 !== a.snapIndex ? (i = a.snapIndex, l = a.previousSnapIndex) : (l = a.previousIndex || 0, i = a.activeIndex || 0), "bullets" === s.type && a.pagination.bullets && a.pagination.bullets.length > 0) {
            const t = a.pagination.bullets;
            let n, p, u;
            if (s.dynamicBullets && (c = (0, r.h)(t[0], a.isHorizontal() ? "width" : "height", !0), o.forEach(e => {
                e.style[a.isHorizontal() ? "width" : "height"] = c * (s.dynamicMainBullets + 4) + "px"
              }), s.dynamicMainBullets > 1 && void 0 !== l && (d += i - (l || 0), d > s.dynamicMainBullets - 1 ? d = s.dynamicMainBullets - 1 : d < 0 && (d = 0)), n = Math.max(i - d, 0), p = n + (Math.min(t.length, s.dynamicMainBullets) - 1), u = (p + n) / 2), t.forEach(e => {
                const a = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(e => `${s.bulletActiveClass}${e}`)].map(e => "string" == typeof e && e.includes(" ") ? e.split(" ") : e).flat();
                e.classList.remove(...a)
              }), o.length > 1) t.forEach(e => {
              const t = (0, r.i)(e);
              t === i ? e.classList.add(...s.bulletActiveClass.split(" ")) : a.isElement && e.setAttribute("part", "bullet"), s.dynamicBullets && (t >= n && t <= p && e.classList.add(...`${s.bulletActiveClass}-main`.split(" ")), t === n && m(e, "prev"), t === p && m(e, "next"))
            });
            else {
              const e = t[i];
              if (e && e.classList.add(...s.bulletActiveClass.split(" ")), a.isElement && t.forEach((e, a) => {
                  e.setAttribute("part", a === i ? "bullet-active" : "bullet")
                }), s.dynamicBullets) {
                const e = t[n],
                  a = t[p];
                for (let e = n; e <= p; e += 1) t[e] && t[e].classList.add(...`${s.bulletActiveClass}-main`.split(" "));
                m(e, "prev"), m(a, "next")
              }
            }
            if (s.dynamicBullets) {
              const i = Math.min(t.length, s.dynamicMainBullets + 4),
                r = (c * i - c) / 2 - u * c,
                l = e ? "right" : "left";
              t.forEach(e => {
                e.style[a.isHorizontal() ? l : "top"] = `${r}px`
              })
            }
          }
          o.forEach((e, l) => {
            if ("fraction" === s.type && (e.querySelectorAll((0, t.c)(s.currentClass)).forEach(e => {
                e.textContent = s.formatFractionCurrent(i + 1)
              }), e.querySelectorAll((0, t.c)(s.totalClass)).forEach(e => {
                e.textContent = s.formatFractionTotal(g)
              })), "progressbar" === s.type) {
              let r;
              r = s.progressbarOpposite ? a.isHorizontal() ? "vertical" : "horizontal" : a.isHorizontal() ? "horizontal" : "vertical";
              const l = (i + 1) / g;
              let n = 1,
                o = 1;
              "horizontal" === r ? n = l : o = l, e.querySelectorAll((0, t.c)(s.progressbarFillClass)).forEach(e => {
                e.style.transform = `translate3d(0,0,0) scaleX(${n}) scaleY(${o})`, e.style.transitionDuration = `${a.params.speed}ms`
              })
            }
            "custom" === s.type && s.renderCustom ? ((0, r.s)(e, s.renderCustom(a, i + 1, g)), 0 === l && n("paginationRender", e)) : (0 === l && n("paginationRender", e), n("paginationUpdate", e)), a.params.watchOverflow && a.enabled && e.classList[a.isLocked ? "add" : "remove"](s.lockClass)
          })
        }

        function f() {
          const e = a.params.pagination;
          if (p()) return;
          const s = a.virtual && a.params.virtual.enabled ? a.virtual.slides.length : a.grid && a.params.grid.rows > 1 ? a.slides.length / Math.ceil(a.params.grid.rows) : a.slides.length;
          let i = a.pagination.el;
          i = (0, r.m)(i);
          let l = "";
          if ("bullets" === e.type) {
            let t = a.params.loop ? Math.ceil(s / a.params.slidesPerGroup) : a.snapGrid.length;
            a.params.freeMode && a.params.freeMode.enabled && t > s && (t = s);
            for (let s = 0; s < t; s += 1) e.renderBullet ? l += e.renderBullet.call(a, s, e.bulletClass) : l += `<${e.bulletElement} ${a.isElement?'part="bullet"':""} class="${e.bulletClass}"></${e.bulletElement}>`
          }
          "fraction" === e.type && (l = e.renderFraction ? e.renderFraction.call(a, e.currentClass, e.totalClass) : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`), "progressbar" === e.type && (l = e.renderProgressbar ? e.renderProgressbar.call(a, e.progressbarFillClass) : `<span class="${e.progressbarFillClass}"></span>`), a.pagination.bullets = [], i.forEach(s => {
            "custom" !== e.type && (0, r.s)(s, l || ""), "bullets" === e.type && a.pagination.bullets.push(...s.querySelectorAll((0, t.c)(e.bulletClass)))
          }), "custom" !== e.type && n("paginationRender", i[0])
        }

        function b() {
          a.params.pagination = (0, i.c)(a, a.originalParams.pagination, a.params.pagination, {
            el: "swiper-pagination"
          });
          const e = a.params.pagination;
          if (!e.el) return;
          let s;
          "string" == typeof e.el && a.isElement && (s = a.el.querySelector(e.el)), s || "string" != typeof e.el || (s = [...document.querySelectorAll(e.el)]), s || (s = e.el), s && 0 !== s.length && (a.params.uniqueNavElements && "string" == typeof e.el && Array.isArray(s) && s.length > 1 && (s = [...a.el.querySelectorAll(e.el)], s.length > 1 && (s = s.find(e => (0, r.b)(e, ".swiper")[0] === a.el))), Array.isArray(s) && 1 === s.length && (s = s[0]), Object.assign(a.pagination, {
            el: s
          }), s = (0, r.m)(s), s.forEach(s => {
            "bullets" === e.type && e.clickable && s.classList.add(...(e.clickableClass || "").split(" ")), s.classList.add(e.modifierClass + e.type), s.classList.add(a.isHorizontal() ? e.horizontalClass : e.verticalClass), "bullets" === e.type && e.dynamicBullets && (s.classList.add(`${e.modifierClass}${e.type}-dynamic`), d = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && s.classList.add(e.progressbarOppositeClass), e.clickable && s.addEventListener("click", u), a.enabled || s.classList.add(e.lockClass)
          }))
        }

        function h() {
          const e = a.params.pagination;
          if (p()) return;
          let s = a.pagination.el;
          s && (s = (0, r.m)(s), s.forEach(s => {
            s.classList.remove(e.hiddenClass), s.classList.remove(e.modifierClass + e.type), s.classList.remove(a.isHorizontal() ? e.horizontalClass : e.verticalClass), e.clickable && (s.classList.remove(...(e.clickableClass || "").split(" ")), s.removeEventListener("click", u))
          })), a.pagination.bullets && a.pagination.bullets.forEach(a => a.classList.remove(...e.bulletActiveClass.split(" ")))
        }
        l("changeDirection", () => {
          if (!a.pagination || !a.pagination.el) return;
          const e = a.params.pagination;
          let {
            el: s
          } = a.pagination;
          s = (0, r.m)(s), s.forEach(s => {
            s.classList.remove(e.horizontalClass, e.verticalClass), s.classList.add(a.isHorizontal() ? e.horizontalClass : e.verticalClass)
          })
        }), l("init", () => {
          !1 === a.params.pagination.enabled ? y() : (b(), f(), g())
        }), l("activeIndexChange", () => {
          void 0 === a.snapIndex && g()
        }), l("snapIndexChange", () => {
          g()
        }), l("snapGridLengthChange", () => {
          f(), g()
        }), l("destroy", () => {
          h()
        }), l("enable disable", () => {
          let {
            el: e
          } = a.pagination;
          e && (e = (0, r.m)(e), e.forEach(e => e.classList[a.enabled ? "remove" : "add"](a.params.pagination.lockClass)))
        }), l("lock unlock", () => {
          g()
        }), l("click", (e, s) => {
          const t = s.target,
            i = (0, r.m)(a.pagination.el);
          if (a.params.pagination.el && a.params.pagination.hideOnClick && i && i.length > 0 && !t.classList.contains(a.params.pagination.bulletClass)) {
            if (a.navigation && (a.navigation.nextEl && t === a.navigation.nextEl || a.navigation.prevEl && t === a.navigation.prevEl)) return;
            const e = i[0].classList.contains(a.params.pagination.hiddenClass);
            n(!0 === e ? "paginationShow" : "paginationHide"), i.forEach(e => e.classList.toggle(a.params.pagination.hiddenClass))
          }
        });
        const y = () => {
          a.el.classList.add(a.params.pagination.paginationDisabledClass);
          let {
            el: e
          } = a.pagination;
          e && (e = (0, r.m)(e), e.forEach(e => e.classList.add(a.params.pagination.paginationDisabledClass))), h()
        };
        Object.assign(a.pagination, {
          enable: () => {
            a.el.classList.remove(a.params.pagination.paginationDisabledClass);
            let {
              el: e
            } = a.pagination;
            e && (e = (0, r.m)(e), e.forEach(e => e.classList.remove(a.params.pagination.paginationDisabledClass))), b(), f(), g()
          },
          disable: y,
          render: f,
          update: g,
          init: b,
          destroy: h
        })
      }
    },
    20219(e, a, s) {
      function t(e) {
        return void 0 === e && (e = ""), `.${e.trim().replace(/([\.:!+\/()[\]])/g,"\\$1").replace(/ /g,".")}`
      }
      s.d(a, {
        c: () => t
      })
    }
  }
]);