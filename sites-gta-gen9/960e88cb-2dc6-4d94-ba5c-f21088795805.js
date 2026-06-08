try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "960e88cb-2dc6-4d94-ba5c-f21088795805", e._sentryDebugIdIdentifier = "sentry-dbid-960e88cb-2dc6-4d94-ba5c-f21088795805")
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
  [4053, 6434], {
    75138(e, t, a) {
      "use strict";
      a.d(t, {
        A: () => p
      });
      var s = a(39793),
        r = a(93082),
        i = a(14653),
        n = a(50662),
        l = a(39279),
        o = a(81270),
        d = a(31821);
      const c = {
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
      var m = a(68291),
        g = a(44453);
      const u = ({
          item: e
        }) => (0, s.jsxs)("div", {
          children: [(0, s.jsx)(g.A, {
            image: e?.image,
            badge: e?.badge ?? e?.image?.badge,
            badgeType: "badge3",
            role: e?.role ?? e?.image?.role,
            splitter: e?.splitter ?? e?.image?.splitter,
            type: e?.type,
            ariaLabel: e?.image?.ariaLabel ?? e.description,
            style: e?.style,
            className: (0, o.default)(c.img, e?.className)
          }), (e?.title || e?.description) && (0, s.jsx)(m.A, {
            item: e
          })]
        }),
        f = ({
          current: e,
          total: t
        }) => (0, s.jsx)("div", {
          className: "swiper-scrollbar",
          style: {
            "--current-slide": e,
            "--total-slides": t
          },
          children: (0, s.jsx)("div", {
            className: "swiper-scrollbar-drag"
          })
        }),
        p = ({
          children: e,
          items: t = [],
          style: a = {},
          noInfiniteScroll: g = !1,
          className: p = "",
          renderTemplate: b = "standard",
          text: h,
          customSpaceBetween: y = null,
          centerSlides: x = !0,
          centeredSlidesBounds: k = !1
        }) => {
          const v = (0, d.Ub)("(min-width: 0px) and (max-width: 768px)"),
            [S, w] = (0, r.useState)(0),
            [j, _] = (0, r.useState)(null),
            N = (0, r.useMemo)(() => e && Array.isArray(e) ? e.map(() => (0, l.A)()) : null, [e, v]),
            z = e => {
              if (!e) return;
              let t = 0;
              e.pagination.bullets.forEach((e, a) => {
                e.classList.contains("swiper-pagination-bullet-active") && (t = a)
              }), w(t)
            };
          if (!(t && 0 !== t?.length || e)) return null;
          const C = {
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
          return (0, s.jsxs)("div", {
            className: (0, o.default)(c.deprecatedCarousel, c[b], c.infinite_true, e ? c.renderedWithChildren : "", p),
            style: a,
            "data-testid": "carousel",
            children: [(0, s.jsxs)(i.RC, {
              modules: [n.dK, n.Jq],
              pagination: !0,
              a11y: {
                enabled: !0,
                scrollOnFocus: !0
              },
              updateOnWindowResize: !1,
              loop: !1,
              grabCursor: !0,
              centeredSlides: x,
              centerInsufficientSlides: x,
              centeredSlidesBounds: k,
              slidesPerView: "auto",
              speed: 700,
              breakpoints: C,
              onSlideChange: e => {
                z(e)
              },
              onResize: e => {
                null != j && clearTimeout(j);
                const t = setTimeout(() => {
                  e.update(), e.updateSize(), e.updateSlides(), e.slideToClosest(), z(e)
                }, 250);
                _(t)
              },
              children: [(0, s.jsx)("div", {
                className: c.trackWrapper,
                children: (0, s.jsxs)("div", {
                  className: c.track,
                  children: [t?.map(e => (0, s.jsx)(i.qr, {
                    tabIndex: 0,
                    children: (0, s.jsx)(u, {
                      item: e
                    })
                  }, e.key)), e && e.map((e, t) => e && (0, s.jsx)(i.qr, {
                    children: e
                  }, N && N[t]))]
                })
              }), (0, s.jsx)(f, {
                current: S,
                total: e ? e.length : t.length
              })]
            }), (h?.title || h?.description) && (0, s.jsx)(m.A, {
              item: h
            })]
          })
        }
    },
    68291(e, t, a) {
      "use strict";
      a.d(t, {
        A: () => c
      });
      var s = a(39793),
        r = a(81270),
        i = a(95967),
        n = a(12334),
        l = a(5413);
      const o = "rockstargames-sites-gta-gen9acd27eff2209196752622710f7b27558",
        d = ({
          to: e,
          children: t
        }) => e ? (0, s.jsx)("a", {
          href: e,
          target: "_blank",
          rel: "noreferrer",
          children: t
        }) : t,
        c = ({
          item: e,
          className: t = ""
        }) => (0, s.jsxs)("div", {
          className: (0, r.default)("rockstargames-sites-gta-gen9f8bc9589974046cdac4a2264be12d2df", t),
          children: [e.title && (0, s.jsx)(d, {
            to: e?.href ?? e?.to,
            children: (0, s.jsx)("h3", {
              children: e.title
            })
          }), Array.isArray(e?.description?.content) ? e.description.content?.map((e, t) => e?.unorderedList ? (0, s.jsx)(n.A, {
            columns: e.unorderedList.columns ?? null,
            style: {
              "--unordered-list-padding": "var(--grid-gap-static-sm)",
              "--unordered-list-margin-bottom": ".5rem"
            },
            noImg: !0,
            list: e.unorderedList.list
          }, t) : e?.image ? (0, s.jsx)(i.A, {
            image: e.image,
            className: e?.className
          }, t) : e?.separator ? (0, s.jsx)("div", {
            style: {
              margin: `${e.separator.spacing} 0`
            },
            children: (0, s.jsx)(l.A, {})
          }, t) : (0, s.jsx)("p", {
            children: (0, s.jsx)("span", {
              className: o,
              dangerouslySetInnerHTML: {
                __html: e
              }
            })
          }, t)) : (0, s.jsx)("span", {
            className: o,
            dangerouslySetInnerHTML: {
              __html: e.description
            }
          })]
        })
    },
    57927(e, t, a) {
      "use strict";
      a.r(t), a.d(t, {
        Root: () => A,
        Text: () => M
      });
      var s = a(39793),
        r = a(93082),
        i = a(84173),
        n = a(59236);
      let l = [],
        o = null;
      const d = "requestAnimationFrame" in window ? (e = {
          sync: !1
        }) => {
          null !== o && window.cancelAnimationFrame(o);
          const t = () => m(l.filter(e => e.dirty && e.active));
          if (e.sync) return t();
          o = window.requestAnimationFrame(t)
        } : () => {},
        c = e => t => {
          l.forEach(t => t.dirty = e), d(t)
        },
        m = e => {
          e.filter(e => !e.styleComputed).forEach(e => {
            e.styleComputed = p(e)
          }), e.filter(b).forEach(h);
          const t = e.filter(f);
          for (let e = 0; e < 2; e++) t.forEach(u), t.forEach(e => {
            h(e), g(e)
          }), t.forEach(y)
        },
        g = e => e.dirty = 0,
        u = e => {
          e.availableWidth = e.element.parentElement?.clientWidth, e.availableHeight = e.element.parentElement?.clientHeight, e.currentWidth = e.element.scrollWidth, e.currentHeight = e.element.scrollHeight, e.previousFontSize = e.currentFontSize, e.currentFontSize = Math.min(Math.min(Math.max(e.minSize, e.availableWidth / e.currentWidth * e.previousFontSize), e.maxSize), Math.min(Math.max(e.minSize, e.availableHeight / e.currentHeight * e.previousFontSize), e.maxSize)), e.whiteSpace = e.multiLine && e.currentFontSize === e.minSize ? "normal" : "nowrap"
        },
        f = e => 2 !== e.dirty || 2 === e.dirty && (e.element.parentElement?.clientWidth !== e.availableWidth || e.element.parentElement?.clientHeight !== e.availableHeight),
        p = e => {
          const t = window.getComputedStyle(e.element, null);
          return e.currentFontSize = parseFloat(t.getPropertyValue("font-size")), e.display = t.getPropertyValue("display"), e.whiteSpace = t.getPropertyValue("white-space"), !0
        },
        b = e => {
          let t = !1;
          return !e.preStyleTestCompleted && (/inline-/.test(e.display) || (t = !0, e.display = "inline-block"), "nowrap" !== e.whiteSpace && (t = !0, e.whiteSpace = "nowrap"), e.preStyleTestCompleted = !0, t)
        },
        h = e => {
          e.element.style.whiteSpace = e.whiteSpace, e.element.style.display = e.display, e.element.style.fontSize = e.currentFontSize + "px"
        },
        y = e => {
          e.element.dispatchEvent(new CustomEvent("fit", {
            detail: {
              oldValue: e.previousFontSize,
              newValue: e.currentFontSize,
              scaleFactor: e.currentFontSize / e.previousFontSize
            }
          }))
        },
        x = (e, t) => a => {
          e.dirty = t, e.active && d(a)
        },
        k = e => () => {
          l = l.filter(t => t.element !== e.element), e.observeMutations && e.observer && e.observer.disconnect(), e.element.style.whiteSpace = e.originalStyle.whiteSpace, e.element.style.display = e.originalStyle.display, e.element.style.fontSize = e.originalStyle.fontSize
        },
        v = e => () => {
          e.active || (e.active = !0, d())
        },
        S = e => () => e.active = !1,
        w = {
          minSize: 16,
          maxSize: 512,
          multiLine: !0,
          observeMutations: {
            subtree: !0,
            childList: !0,
            characterData: !0
          }
        };

      function j(e, t) {
        const a = {
          ...w,
          ...t
        };
        a.minSize = Number.isFinite(a.minSize) && a.minSize > 0 ? a.minSize : w.minSize, a.maxSize = Number.isFinite(a.maxSize) && a.maxSize > 0 ? a.maxSize : w.maxSize;
        const s = e.map(e => {
          const t = {
            ...a,
            element: e,
            active: !0,
            styleComputed: !1,
            preStyleTestCompleted: !1,
            dirty: 3,
            originalStyle: {
              whiteSpace: e.style.whiteSpace,
              display: e.style.display,
              fontSize: e.style.fontSize
            }
          };
          return (e => {
            e.observeMutations && (e.observer = new MutationObserver(() => x(e, 1)()), e.observer.observe(e.element, e.observeMutations))
          })(t), l.push(t), {
            element: e,
            fit: x(t, 3),
            unfreeze: v(t),
            freeze: S(t),
            unsubscribe: k(t)
          }
        });
        return d(), s
      }

      function _(e, t = {}) {
        return "string" == typeof e ? j((a = document.querySelectorAll(e), [].slice.call(a)), t) : j([e], t)[0];
        var a
      }
      let N;
      const z = () => {
          window.clearTimeout(N), N = window.setTimeout(c(2), _.observeWindowDelay)
        },
        C = ["resize", "orientationchange"];
      Object.defineProperty(_, "observeWindow", {
        set: e => {
          C.forEach(t => {
            e ? window.addEventListener(t, z) : window.removeEventListener(t, z)
          })
        }
      }), _.observeWindow = !0, _.observeWindowDelay = 100, _.fitAll = c(3);
      const T = _;
      var E = a(31821);
      const L = (0, r.createContext)({
          rootRef: (0, r.createRef)(),
          min: 0,
          max: 0,
          mode: "single"
        }),
        A = (0, r.forwardRef)(function({
          min: e = 1,
          max: t = 100,
          mode: a = "multi",
          asChild: l,
          testId: o,
          ...d
        }, c) {
          const m = (0, r.useRef)(null),
            g = (0, E.UP)(m, c),
            u = (0, n.mergeProps)({
              "data-testid": o
            }, d),
            f = l ? i.DX : "div";
          return (0, s.jsx)(L.Provider, {
            value: {
              rootRef: m,
              min: e,
              max: t,
              mode: a
            },
            children: (0, s.jsx)(f, {
              ref: g,
              ...u
            })
          })
        }),
        M = (0, r.forwardRef)(function({
          asChild: e,
          testId: t,
          ...a
        }, l) {
          const {
            rootRef: o,
            min: d,
            max: c,
            mode: m
          } = (0, r.useContext)(L), g = (0, r.useRef)(null), u = (0, r.useRef)(null);
          (0, r.useEffect)(() => (u.current = T(g.current, {
            minSize: d,
            maxSize: c,
            multiLine: "multi" === m
          }), () => u.current.unsubscribe()), [d, c, m]), (0, r.useEffect)(() => {
            if (null === o.current || null === u.current) return;
            const e = new ResizeObserver(() => {
              u.current.fit()
            });
            return e.observe(o.current), () => e.disconnect()
          }, [o, u]), (0, r.useEffect)(() => {
            document.fonts.ready.then(() => u.current && u.current.fit())
          }, []);
          const f = (0, E.UP)(g, l),
            p = (0, n.mergeProps)({
              className: "_1gyq4dd0",
              "data-testid": t
            }, a),
            b = e ? i.DX : "div";
          return (0, s.jsx)(b, {
            ref: f,
            ...p
          })
        })
    },
    76862(e, t, a) {
      "use strict";
      a.d(t, {
        A: () => o
      });
      var s = a(39793),
        r = a(95967),
        i = a(57927);
      const n = {
          badge: "rockstargames-sites-gta-gen9b7268b0e907630904b6689af83fee8e3",
          badge2: "rockstargames-sites-gta-gen9d08ce7145bc9562355a3984f8ccc9313",
          badge3: "rockstargames-sites-gta-gen9c7c60cfb12b6e9be68893c60814b3ed7",
          badgeSizeUpdate: "rockstargames-sites-gta-gen9ce8632d7464b556158a1d549f653498c"
        },
        l = ({
          wrapper: e,
          children: t,
          role: a,
          splitter: s
        }) => s || a ? e(t) : t,
        o = ({
          badge: e,
          badgeType: t,
          role: o,
          splitter: d
        }) => {
          const c = [];
          return d ? e.split(d).map(e => c.push(e)) : c.push(e), (0, s.jsxs)(l, {
            splitter: d,
            role: o,
            wrapper: e => (0, s.jsx)("div", {
              className: `${n.badge} ${t?n[t]:""} `,
              children: e
            }),
            children: [(0, s.jsx)(s.Fragment, {
              children: o && (0, s.jsx)(r.A, {
                image: {
                  alt: o,
                  desktop: a(65287)(`./${o}.png`)
                }
              })
            }), (0, s.jsx)(i.Root, {
              className: `${d||o?"":n.badge} ${t?n[t]:""}`,
              min: 8,
              max: 1e3,
              mode: d || o ? "single" : "multi",
              children: (0, s.jsx)(i.Text, {
                children: c[0]
              })
            }), (0, s.jsx)(s.Fragment, {
              children: c.shift() && d && c.length >= 1 && (0, s.jsx)(i.Root, {
                min: 8,
                max: 1e3,
                mode: "single",
                children: (0, s.jsx)(i.Text, {
                  children: c.join(" ")
                })
              })
            })]
          }, "badge-wrapper")
        }
    },
    44453(e, t, a) {
      "use strict";
      a.d(t, {
        A: () => c
      });
      var s = a(39793),
        r = a(93082),
        i = a(13331),
        n = a(81270),
        l = a(76862),
        o = a(95967);
      const d = ({
          hero: e,
          children: t
        }) => e ? (0, s.jsx)("div", {
          className: "rockstargames-sites-gta-gen9a429886d721550d02521f7f5c9de7f5b",
          children: t
        }) : t,
        c = ({
          badge: e = null,
          badgeType: t,
          discountTxt: a,
          splitter: c,
          image: m,
          style: g,
          className: u = "",
          attributes: f = {},
          role: p,
          hero: b = !1
        }) => {
          const h = (0, r.useMemo)(() => {
            if (m?.badge || m?.discountTxt || e || a) return (0, s.jsx)(l.A, {
              badge: m?.discountTxt ?? m?.badge ?? e ?? a,
              badgeType: t,
              splitter: m?.splitter ?? c,
              role: m?.role ?? p
            })
          }, [e, t, a, m, p, c]);
          return (0, s.jsx)(d, {
            hero: b,
            children: (0, s.jsx)("figure", {
              children: (0, s.jsxs)("div", {
                className: (0, n.default)("rockstargames-sites-gta-gen9d9ac792281efe15bcd4589b028d1c27b", b ? "rockstargames-sites-gta-gen9e430c4662cd185f58259d4a8d8b322de" : "", f?.hiddenMobile ? "hiddenMobile" : "", f?.hiddenLarge ? "hiddenLarge" : "", f?.className, u),
                style: (0, i.safeStyles)({
                  ...g,
                  ...f?.style
                }),
                ...f,
                children: [(0, s.jsx)(o.A, {
                  role: m?.accessibleRole,
                  image: m,
                  className: u
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
    5413(e, t, a) {
      "use strict";
      a.d(t, {
        A: () => i
      });
      var s = a(39793);
      const r = {
          gtao: "rockstargames-sites-gta-gen9f66c75c6e882da85fef31e4211ca0be2",
          hr: "rockstargames-sites-gta-gen9dc7b1bc141e132d4ee9b7bf9d55c573a",
          redLine: "rockstargames-sites-gta-gen9d4d968b41ef87926b0b6318e8647738b"
        },
        i = ({
          style: e,
          className: t = "",
          type: a = ""
        }) => (0, s.jsx)("div", {
          style: e,
          className: [r.hr, r[a], t].join(" ")
        })
    },
    12334(e, t, a) {
      "use strict";
      a.d(t, {
        A: () => m
      });
      var s = a(39793),
        r = a(93082),
        i = a(50062),
        n = a.n(i),
        l = a(13331),
        o = a(81270);
      const d = {
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
          sanitize: c
        } = n(),
        m = ({
          list: e,
          string: t,
          starColor: a,
          style: i,
          className: n,
          game: m,
          noImg: g,
          columns: u,
          mobileColumns: f
        }) => {
          const [p, b] = (0, r.useState)(null), h = t ? t.split("_#_") : e;
          if ((0, r.useEffect)(() => {
              b(e)
            }, [e]), !t && !e) return null;
          const y = {
            color: i?.color
          };
          return delete i?.color, u && p ? (0, s.jsx)("div", {
            className: d.grid,
            style: {
              "--unordered-list-grid-column": u,
              "--unordered-list-grid-column-mobile": f ?? u
            },
            children: (0, s.jsx)("ul", {
              className: (0, o.default)(d.itemList, d.noImg, d[a], d[m]),
              style: (0, l.safeStyles)(i),
              children: p.map((e, t) => (0, s.jsx)("li", {
                style: y,
                dangerouslySetInnerHTML: {
                  __html: c(e.content)
                }
              }, t))
            })
          }) : (0, s.jsx)("ul", {
            style: (0, l.safeStyles)(i),
            className: (0, o.default)(d.itemList, d.custom, g ? d.noImg : "", a ? d[a] : "", m ? d[m] : "", n ?? ""),
            children: h.map((e, t) => (0, s.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: c(e?.content ?? e)
              }
            }, t))
          })
        }
    },
    95967(e, t, a) {
      "use strict";
      a.d(t, {
        A: () => o
      });
      var s = a(39793),
        r = a(25993),
        i = a(13331);
      const n = ({
          alt: e,
          className: t,
          src: r,
          role: n,
          style: l
        }) => {
          const [o, d] = (0, i.usePreloadImg)(r);
          let c = r;
          !1 === o && (c = a(9333));
          const {
            width: m,
            height: g
          } = d, u = {
            "--aspect-ratio": Number.isNaN(m / g) ? "" : m / g,
            ...l
          };
          return (0, s.jsx)("img", {
            src: c,
            className: t ?? "",
            alt: e,
            style: u,
            role: n
          })
        },
        l = "rockstargames-sites-gta-gen9c8dc03880ce2e12f3fdea5b5b587f27f",
        o = ({
          className: e,
          style: t = {},
          image: o = {},
          imageStyle: d = {},
          role: c = "img"
        }) => {
          let {
            alt: m,
            src: g
          } = (0, r.S1)(o);
          const {
            isMobile: u
          } = (0, i.useWindowResize)(), f = u ? g.imageMobileStyle : g.imageDesktopStyle;
          g.desktop || g.mobile || (m = "", g = {
            mobile: a(28839),
            desktop: a(9333)
          });
          let p = o.frame ? `${o.frame} ${l}` : l;
          return (0, s.jsx)("div", {
            className: p,
            style: t,
            children: (0, s.jsx)(n, {
              style: {
                ...d,
                ...o?.style,
                ...f
              },
              src: u ? g.mobile || g.desktop : g?.desktop || g?.mobile,
              alt: m,
              role: c,
              className: e
            })
          })
        }
    },
    44053(e, t, a) {
      "use strict";
      a.r(t), a.d(t, {
        default: () => y
      });
      var s = a(39793),
        r = a(68291),
        i = a(44453),
        n = a(75138);
      const l = {
          carouselTitle: "rockstargames-sites-gta-gen9e9e0ef1bfc3699b1e50c33dd0ce8e76a",
          carouselWrapper: "rockstargames-sites-gta-gen9fabefc39343f6c494eb3d049757d89c5",
          padding: "rockstargames-sites-gta-gen9ac767e959939b4d56b2358cb263d07ad"
        },
        o = ({
          to: e,
          children: t
        }) => e ? (0, s.jsx)("a", {
          href: e,
          target: "_blank",
          children: t
        }) : t,
        d = ({
          items: e = [],
          text: t = {},
          style: a,
          className: d = "",
          id: c = null
        }) => e?.length ? (0, s.jsxs)("div", {
          id: c,
          "data-testid": `carousel${d&&`-${d}`}-group-of-items`,
          children: [(0, s.jsx)(n.A, {
            style: a,
            className: [d, l.carouselWrapper].join(" "),
            children: e.map(e => (0, s.jsxs)("div", {
              id: e?.id ?? null,
              children: [(0, s.jsx)(i.A, {
                image: e?.image,
                badge: e?.badge ?? e?.image?.badge,
                badgeType: "badge3",
                role: e?.role ?? e?.image?.role,
                splitter: e?.splitter ?? e?.image?.splitter,
                type: e?.type,
                ariaLabel: e?.image?.ariaLabel ?? e.description,
                style: e?.style,
                className: [l.img, e?.className].join(" ")
              }), e.title && (0, s.jsx)(o, {
                to: e?.to,
                children: (0, s.jsx)("h4", {
                  className: l.carouselTitle,
                  children: e.title
                })
              }), e.description && (0, s.jsx)("span", {
                className: l.description,
                dangerouslySetInnerHTML: {
                  __html: e.description
                }
              })]
            }, e?.key ?? e?.title))
          }), t?.title || t?.description ? (0, s.jsx)("div", {
            className: l.padding,
            style: t?.style ?? {},
            children: (0, s.jsx)(r.A, {
              item: t
            })
          }) : ""]
        }) : null;
      var c = a(31879),
        m = a.n(c),
        g = a(17301),
        u = a(81270);
      const f = ({
          impressionTracking: e,
          gtm: t = {},
          children: a
        }) => e?.shouldTrack ? (0, s.jsx)(g.InViewTracker, {
          threshold: e?.threshold,
          gtm: t,
          children: a
        }) : a,
        p = ({
          to: e,
          children: t
        }) => e ? (0, s.jsx)("a", {
          href: e,
          target: "_blank",
          rel: "noreferrer",
          children: t
        }) : t,
        b = ({
          item: e
        }) => e?.videoId ? (0, s.jsx)(m(), {
          context: "site",
          autoplay: !1,
          id: e.videoId
        }) : (0, s.jsx)(i.A, {
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
          className: a = "",
          id: i = null
        }) => (0, s.jsx)("div", {
          style: t,
          className: (0, u.default)("rockstargames-sites-gta-gen9d38af92e8657708abd3dc5295e62476c", a),
          id: i,
          "data-testid": "standard-group-of-items",
          children: e.map(e => (0, s.jsx)(f, {
            impressionTracking: e?.impressionTracking,
            gtm: e?.gtm,
            children: (0, s.jsx)(p, {
              to: e?.to,
              children: (0, s.jsxs)("div", {
                className: (0, u.default)("rockstargames-sites-gta-gen9a9b63d3aa2f18fa6c84b19c8993a7893", e.className),
                style: e?.style ?? {},
                ...e?.props,
                children: [e?.image || e?.videoId ? (0, s.jsx)(b, {
                  item: e
                }) : "", e.title || e.description ? (0, s.jsx)(r.A, {
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
          items: a = [],
          renderTemplate: r = "",
          style: i = {},
          id: n = null,
          ...l
        }) => {
          if (!a.length) return null;
          switch (r) {
            case "carousel":
              return (0, s.jsx)(d, {
                text: t,
                items: a,
                style: i,
                id: n,
                children: e
              });
            case "carousel-panorama":
              return (0, s.jsx)(d, {
                text: t,
                items: a,
                style: i,
                className: "panorama",
                id: n,
                children: e
              });
            default:
              return (0, s.jsx)(h, {
                items: a,
                style: i,
                id: n,
                ...l,
                children: e
              })
          }
        }
    },
    54563(e, t, a) {
      "use strict";
      a.d(t, {
        i: () => o,
        o: () => l
      });
      var s = a(39793),
        r = a(93082);
      const i = (0, a(13331).setContextItem)({
          context: (0, r.createContext)(),
          key: "tinaPayloadContext"
        }),
        {
          Provider: n
        } = i,
        l = ({
          children: e,
          payload: t
        }) => (0, s.jsx)(n, {
          value: t,
          children: e
        }),
        o = () => (0, r.useContext)(i)
    },
    25993(e, t, a) {
      "use strict";
      a.d(t, {
        C1: () => o,
        S1: () => l,
        XC: () => g,
        jS: () => d,
        qg: () => c,
        z0: () => m
      });
      var s = a(93082),
        r = a(13331),
        i = a(54563);
      const n = e => {
          if (!e) return null;
          const {
            hostname: t,
            pathname: a
          } = new URL(e, (0, r.getCdnPrefix)(!0));
          return "/" === a ? null : (t.endsWith(".akamaized.net"), e)
        },
        l = ({
          alt: e = null,
          mobile: t = null,
          imageMobileStyle: a = {},
          desktop: l = null,
          imageDesktopStyle: o = {},
          ariaLabel: d = null,
          sources: c = null,
          prod: m = null
        }) => {
          const g = (0, r.useLocale)(),
            {
              meta: u = {}
            } = (0, i.i)() ?? {},
            [f, p] = (0, s.useState)(m ?? u?.cdn ?? u?.prod ?? !0);
          (0, s.useEffect)(() => {
            p(m ?? u?.cdn ?? u?.prod ?? !0)
          }, [m, u]);
          const b = (0, s.useCallback)(e => {
            const t = null !== c,
              a = e?.previewSrc ?? e ?? null;
            if (null === a || "string" != typeof a) return null;
            if (a.startsWith("http")) return n(a);
            const s = `${t?(0,r.getCdnPrefix)(f):""}${a}`;
            return n(s)
          }, [f, c]);
          return {
            alt: e,
            ariaLabel: d,
            src: {
              mobile: b(c?.[g]?.mobile ?? c?.en_us?.mobile ?? t),
              imageMobileStyle: c?.[g]?.imageMobileStyle ?? c?.en_us?.imageMobileStyle ?? a,
              imageDesktopStyle: c?.[g]?.imageDesktopStyle ?? c?.en_us?.imageDesktopStyle ?? o,
              desktop: b(c?.[g]?.desktop ?? c?.en_us?.desktop ?? l)
            }
          }
        },
        o = e => {
          const t = (0, i.i)() ?? {},
            {
              meta: a = {}
            } = t,
            [l, o] = (0, s.useState)(a?.cdn ?? a?.prod ?? !1);
          return (0, s.useEffect)(() => {
            o(a?.cdn ?? a?.prod ?? !1)
          }, [a]), e ? e?.startsWith("http") ? n(e) : n(`${(0,r.getCdnPrefix)(l)}${e}`) : null
        },
        d = () => {
          const e = (0, i.i)() ?? {},
            {
              meta: t = {}
            } = e,
            a = (0, s.useMemo)(() => t?.cdn ?? t?.prod ?? !1, [t]);
          return (0, s.useCallback)((e, t = {}) => {
            const s = t?.prod ?? a;
            return e ? e?.startsWith("http") ? n(e) : n(`${(0,r.getCdnPrefix)(s)}${e}`) : null
          }, [a])
        },
        c = e => e.full_src,
        m = e => {
          const t = e?.previewSrc ?? e?.preview_src ?? e;
          return t?.startsWith("http") ? t : `${(0,r.getCdnPrefix)(!1)}${t}`
        },
        g = e => e.meta.uploads_directory
    },
    39279(e, t, a) {
      "use strict";
      a.d(t, {
        A: () => o
      });
      const s = {
        randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto)
      };
      let r;
      const i = new Uint8Array(16);

      function n() {
        if (!r && (r = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !r)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return r(i)
      }
      const l = [];
      for (let e = 0; e < 256; ++e) l.push((e + 256).toString(16).slice(1));
      const o = function(e, t, a) {
        if (s.randomUUID && !t && !e) return s.randomUUID();
        const r = (e = e || {}).random || (e.rng || n)();
        if (r[6] = 15 & r[6] | 64, r[8] = 63 & r[8] | 128, t) {
          a = a || 0;
          for (let e = 0; e < 16; ++e) t[a + e] = r[e];
          return t
        }
        return function(e, t = 0) {
          return l[e[t + 0]] + l[e[t + 1]] + l[e[t + 2]] + l[e[t + 3]] + "-" + l[e[t + 4]] + l[e[t + 5]] + "-" + l[e[t + 6]] + l[e[t + 7]] + "-" + l[e[t + 8]] + l[e[t + 9]] + "-" + l[e[t + 10]] + l[e[t + 11]] + l[e[t + 12]] + l[e[t + 13]] + l[e[t + 14]] + l[e[t + 15]]
        }(r)
      }
    },
    65287(e, t, a) {
      var s = {
        "./bounty.png": 7502,
        "./collector.png": 24970,
        "./moonshiner.png": 2661,
        "./naturalist.png": 16386,
        "./trader.png": 38635
      };

      function r(e) {
        var t = i(e);
        return a(t)
      }

      function i(e) {
        if (!a.o(s, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        }
        return s[e]
      }
      r.keys = function() {
        return Object.keys(s)
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
    84173(e, t, a) {
      "use strict";
      a.d(t, {
        DX: () => s.DX,
        xV: () => s.xV,
        s6: () => l
      });
      var s = a(38957),
        r = a(39793),
        i = a(93082),
        n = a(3541);
      const l = ({
        enabled: e = !0,
        ...t
      }) => {
        const a = e ? n.s6 : i.Fragment;
        return (0, r.jsx)(a, {
          ...t
        })
      }
    },
    50446(e, t, a) {
      "use strict";
      a.d(t, {
        s: () => n,
        t: () => i
      });
      var s = a(93082);

      function r(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
      }

      function i(...e) {
        return t => {
          let a = !1;
          const s = e.map(e => {
            const s = r(e, t);
            return a || "function" != typeof s || (a = !0), s
          });
          if (a) return () => {
            for (let t = 0; t < s.length; t++) {
              const a = s[t];
              "function" == typeof a ? a() : r(e[t], null)
            }
          }
        }
      }

      function n(...e) {
        return s.useCallback(i(...e), e)
      }
    },
    20972(e, t, a) {
      "use strict";
      a.d(t, {
        sG: () => n
      });
      var s = a(93082),
        r = (a(84017), a(38957)),
        i = a(39793),
        n = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const a = (0, r.TL)(`Primitive.${t}`),
            n = s.forwardRef((e, s) => {
              const {
                asChild: r,
                ...n
              } = e, l = r ? a : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, i.jsx)(l, {
                ...n,
                ref: s
              })
            });
          return n.displayName = `Primitive.${t}`, {
            ...e,
            [t]: n
          }
        }, {})
    },
    38957(e, t, a) {
      "use strict";
      var s;
      a.d(t, {
        DX: () => m,
        TL: () => c,
        xV: () => p
      });
      var r = a(93082),
        i = a(50446),
        n = a(39793),
        l = Symbol.for("react.lazy"),
        o = (s || (s = a.t(r, 2)))[" use ".trim().toString()];

      function d(e) {
        return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === l && "_payload" in e && "object" == typeof(t = e._payload) && null !== t && "then" in t;
        var t
      }

      function c(e) {
        const t = g(e),
          a = r.forwardRef((e, a) => {
            let {
              children: s,
              ...i
            } = e;
            d(s) && "function" == typeof o && (s = o(s._payload));
            const l = r.Children.toArray(s),
              c = l.find(b);
            if (c) {
              const e = c.props.children,
                s = l.map(t => t === c ? r.Children.count(e) > 1 ? r.Children.only(null) : r.isValidElement(e) ? e.props.children : null : t);
              return (0, n.jsx)(t, {
                ...i,
                ref: a,
                children: r.isValidElement(e) ? r.cloneElement(e, void 0, s) : null
              })
            }
            return (0, n.jsx)(t, {
              ...i,
              ref: a,
              children: s
            })
          });
        return a.displayName = `${e}.Slot`, a
      }
      var m = c("Slot");

      function g(e) {
        const t = r.forwardRef((e, t) => {
          let {
            children: a,
            ...s
          } = e;
          if (d(a) && "function" == typeof o && (a = o(a._payload)), r.isValidElement(a)) {
            const e = function(e) {
                let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                  a = t && "isReactWarning" in t && t.isReactWarning;
                return a ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, a = t && "isReactWarning" in t && t.isReactWarning, a ? e.props.ref : e.props.ref || e.ref)
              }(a),
              n = function(e, t) {
                const a = {
                  ...t
                };
                for (const s in t) {
                  const r = e[s],
                    i = t[s];
                  /^on[A-Z]/.test(s) ? r && i ? a[s] = (...e) => {
                    const t = i(...e);
                    return r(...e), t
                  } : r && (a[s] = r) : "style" === s ? a[s] = {
                    ...r,
                    ...i
                  } : "className" === s && (a[s] = [r, i].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...a
                }
              }(s, a.props);
            return a.type !== r.Fragment && (n.ref = t ? (0, i.t)(t, e) : e), r.cloneElement(a, n)
          }
          return r.Children.count(a) > 1 ? r.Children.only(null) : null
        });
        return t.displayName = `${e}.SlotClone`, t
      }
      var u = Symbol("radix.slottable");

      function f(e) {
        const t = ({
          children: e
        }) => (0, n.jsx)(n.Fragment, {
          children: e
        });
        return t.displayName = `${e}.Slottable`, t.__radixId = u, t
      }
      var p = f("Slottable");

      function b(e) {
        return r.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === u
      }
    },
    3541(e, t, a) {
      "use strict";
      a.d(t, {
        bL: () => o,
        s6: () => l
      });
      var s = a(93082),
        r = a(20972),
        i = a(39793),
        n = Object.freeze({
          position: "absolute",
          border: 0,
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          wordWrap: "normal"
        }),
        l = s.forwardRef((e, t) => (0, i.jsx)(r.sG.span, {
          ...e,
          ref: t,
          style: {
            ...n,
            ...e.style
          }
        }));
      l.displayName = "VisuallyHidden";
      var o = l
    }
  }
]);