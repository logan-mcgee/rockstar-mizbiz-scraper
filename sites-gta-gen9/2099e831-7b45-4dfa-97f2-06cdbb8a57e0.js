try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "2099e831-7b45-4dfa-97f2-06cdbb8a57e0", e._sentryDebugIdIdentifier = "sentry-dbid-2099e831-7b45-4dfa-97f2-06cdbb8a57e0")
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
  [2733, 5114], {
    39299(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => h
      });
      var s = t(39793),
        i = t(93082),
        r = t(14653),
        l = t(44128),
        n = t(73059),
        o = t(31147),
        c = t(39279),
        d = t(81270),
        g = t(9857);
      const m = {
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
      var p = t(63468),
        u = t(19724);
      const f = ({
          item: e
        }) => (0, s.jsxs)("div", {
          children: [(0, s.jsx)(u.A, {
            image: e?.image,
            badge: e?.badge ?? e?.image?.badge,
            badgeType: "badge3",
            role: e?.role ?? e?.image?.role,
            splitter: e?.splitter ?? e?.image?.splitter,
            type: e?.type,
            ariaLabel: e?.image?.ariaLabel ?? e.description,
            style: e?.style,
            className: (0, d.default)(m.img, e?.className)
          }), (e?.title || e?.description) && (0, s.jsx)(p.A, {
            item: e
          })]
        }),
        b = ({
          current: e,
          total: a
        }) => (0, s.jsx)("div", {
          className: "swiper-scrollbar",
          style: {
            "--current-slide": e,
            "--total-slides": a
          },
          children: (0, s.jsx)("div", {
            className: "swiper-scrollbar-drag"
          })
        }),
        h = ({
          children: e,
          items: a = [],
          style: t = {},
          noInfiniteScroll: u = !1,
          className: h = "",
          renderTemplate: y = "standard",
          text: v,
          customSpaceBetween: x = null,
          centerSlides: k = !0,
          centeredSlidesBounds: w = !1
        }) => {
          const C = (0, g.Ub)("(min-width: 0px) and (max-width: 768px)"),
            [S, j] = (0, i.useState)(0),
            [z, L] = (0, i.useState)(null),
            E = (0, i.useMemo)(() => e && Array.isArray(e) ? e.map(() => (0, c.A)()) : null, [e, C]),
            N = e => {
              if (!e) return;
              let a = 0;
              e.pagination.bullets.forEach((e, t) => {
                e.classList.contains("swiper-pagination-bullet-active") && (a = t)
              }), j(a)
            };
          if (!(a && 0 !== a?.length || e)) return null;
          const A = {
            0: {
              spaceBetween: x ?? 16
            },
            1024: {
              spaceBetween: x ?? 18
            },
            1920: {
              spaceBetween: x ?? 20
            },
            2560: {
              spaceBetween: x ?? 22
            }
          };
          return (0, s.jsxs)("div", {
            className: (0, d.default)(m.deprecatedCarousel, m[y], m.infinite_true, e ? m.renderedWithChildren : "", h),
            style: t,
            "data-testid": "carousel",
            children: [(0, s.jsxs)(r.RC, {
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
              centeredSlidesBounds: w,
              slidesPerView: "auto",
              speed: 700,
              breakpoints: A,
              onSlideChange: e => {
                N(e)
              },
              onResize: e => {
                null != z && clearTimeout(z);
                const a = setTimeout(() => {
                  e.update(), e.updateSize(), e.updateSlides(), e.slideToClosest(), N(e)
                }, 250);
                L(a)
              },
              children: [(0, s.jsx)("div", {
                className: m.trackWrapper,
                children: (0, s.jsxs)("div", {
                  className: m.track,
                  children: [a?.map(e => (0, s.jsx)(r.qr, {
                    children: (0, s.jsx)(f, {
                      item: e
                    })
                  }, e.key)), e && e.map((e, a) => e && (0, s.jsx)(r.qr, {
                    children: e
                  }, E && E[a]))]
                })
              }), (0, s.jsx)(b, {
                current: S,
                total: e ? e.length : a.length
              })]
            }), (v?.title || v?.description) && (0, s.jsx)(p.A, {
              item: v
            })]
          })
        }
    },
    63468(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => d
      });
      var s = t(39793),
        i = t(81270),
        r = t(9294),
        l = t(84121),
        n = t(82950);
      const o = "rockstargames-sites-gta-gen9acd27eff2209196752622710f7b27558",
        c = ({
          to: e,
          children: a
        }) => e ? (0, s.jsx)("a", {
          href: e,
          target: "_blank",
          rel: "noreferrer",
          children: a
        }) : a,
        d = ({
          item: e,
          className: a = ""
        }) => (0, s.jsxs)("div", {
          className: (0, i.default)("rockstargames-sites-gta-gen9f8bc9589974046cdac4a2264be12d2df", a),
          children: [e.title && (0, s.jsx)(c, {
            to: e?.href ?? e?.to,
            children: (0, s.jsx)("h3", {
              children: e.title
            })
          }), Array.isArray(e?.description?.content) ? e.description.content?.map((e, a) => e?.unorderedList ? (0, s.jsx)(l.A, {
            columns: e.unorderedList.columns ?? null,
            style: {
              "--unordered-list-padding": "var(--grid-gap-static-sm)",
              "--unordered-list-margin-bottom": ".5rem"
            },
            noImg: !0,
            list: e.unorderedList.list
          }, a) : e?.image ? (0, s.jsx)(r.A, {
            image: e.image,
            className: e?.className
          }, a) : e?.separator ? (0, s.jsx)("div", {
            style: {
              margin: `${e.separator.spacing} 0`
            },
            children: (0, s.jsx)(n.A, {})
          }, a) : (0, s.jsx)("p", {
            children: (0, s.jsx)("span", {
              className: o,
              dangerouslySetInnerHTML: {
                __html: e
              }
            })
          }, a)) : (0, s.jsx)("span", {
            className: o,
            dangerouslySetInnerHTML: {
              __html: e.description
            }
          })]
        })
    },
    89587(e, a, t) {
      "use strict";
      t.r(a), t.d(a, {
        Root: () => M,
        Text: () => T
      });
      var s = t(39793),
        i = t(93082),
        r = t(21297),
        l = t(58912);
      let n = [],
        o = null;
      const c = "requestAnimationFrame" in window ? (e = {
          sync: !1
        }) => {
          null !== o && window.cancelAnimationFrame(o);
          const a = () => g(n.filter(e => e.dirty && e.active));
          if (e.sync) return a();
          o = window.requestAnimationFrame(a)
        } : () => {},
        d = e => a => {
          n.forEach(a => a.dirty = e), c(a)
        },
        g = e => {
          e.filter(e => !e.styleComputed).forEach(e => {
            e.styleComputed = f(e)
          }), e.filter(b).forEach(h);
          const a = e.filter(u);
          for (let e = 0; e < 2; e++) a.forEach(p), a.forEach(e => {
            h(e), m(e)
          }), a.forEach(y)
        },
        m = e => e.dirty = 0,
        p = e => {
          e.availableWidth = e.element.parentElement?.clientWidth, e.availableHeight = e.element.parentElement?.clientHeight, e.currentWidth = e.element.scrollWidth, e.currentHeight = e.element.scrollHeight, e.previousFontSize = e.currentFontSize, e.currentFontSize = Math.min(Math.min(Math.max(e.minSize, e.availableWidth / e.currentWidth * e.previousFontSize), e.maxSize), Math.min(Math.max(e.minSize, e.availableHeight / e.currentHeight * e.previousFontSize), e.maxSize)), e.whiteSpace = e.multiLine && e.currentFontSize === e.minSize ? "normal" : "nowrap"
        },
        u = e => 2 !== e.dirty || 2 === e.dirty && (e.element.parentElement?.clientWidth !== e.availableWidth || e.element.parentElement?.clientHeight !== e.availableHeight),
        f = e => {
          const a = window.getComputedStyle(e.element, null);
          return e.currentFontSize = parseFloat(a.getPropertyValue("font-size")), e.display = a.getPropertyValue("display"), e.whiteSpace = a.getPropertyValue("white-space"), !0
        },
        b = e => {
          let a = !1;
          return !e.preStyleTestCompleted && (/inline-/.test(e.display) || (a = !0, e.display = "inline-block"), "nowrap" !== e.whiteSpace && (a = !0, e.whiteSpace = "nowrap"), e.preStyleTestCompleted = !0, a)
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
        v = (e, a) => t => {
          e.dirty = a, e.active && c(t)
        },
        x = e => () => {
          n = n.filter(a => a.element !== e.element), e.observeMutations && e.observer && e.observer.disconnect(), e.element.style.whiteSpace = e.originalStyle.whiteSpace, e.element.style.display = e.originalStyle.display, e.element.style.fontSize = e.originalStyle.fontSize
        },
        k = e => () => {
          e.active || (e.active = !0, c())
        },
        w = e => () => e.active = !1,
        C = {
          minSize: 16,
          maxSize: 512,
          multiLine: !0,
          observeMutations: {
            subtree: !0,
            childList: !0,
            characterData: !0
          }
        };

      function S(e, a) {
        const t = {
          ...C,
          ...a
        };
        t.minSize = Number.isFinite(t.minSize) && t.minSize > 0 ? t.minSize : C.minSize, t.maxSize = Number.isFinite(t.maxSize) && t.maxSize > 0 ? t.maxSize : C.maxSize;
        const s = e.map(e => {
          const a = {
            ...t,
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
            e.observeMutations && (e.observer = new MutationObserver(() => v(e, 1)()), e.observer.observe(e.element, e.observeMutations))
          })(a), n.push(a), {
            element: e,
            fit: v(a, 3),
            unfreeze: k(a),
            freeze: w(a),
            unsubscribe: x(a)
          }
        });
        return c(), s
      }

      function j(e, a = {}) {
        return "string" == typeof e ? S((t = document.querySelectorAll(e), [].slice.call(t)), a) : S([e], a)[0];
        var t
      }
      let z;
      const L = () => {
          window.clearTimeout(z), z = window.setTimeout(d(2), j.observeWindowDelay)
        },
        E = ["resize", "orientationchange"];
      Object.defineProperty(j, "observeWindow", {
        set: e => {
          E.forEach(a => {
            e ? window.addEventListener(a, L) : window.removeEventListener(a, L)
          })
        }
      }), j.observeWindow = !0, j.observeWindowDelay = 100, j.fitAll = d(3);
      const N = j;
      var A = t(9857);
      const _ = (0, i.createContext)({
          rootRef: (0, i.createRef)(),
          min: 0,
          max: 0,
          mode: "single"
        }),
        M = (0, i.forwardRef)(function({
          min: e = 1,
          max: a = 100,
          mode: t = "multi",
          asChild: n,
          testId: o,
          ...c
        }, d) {
          const g = (0, i.useRef)(null),
            m = (0, A.UP)(g, d),
            p = (0, l.mergeProps)({
              "data-testid": o
            }, c),
            u = n ? r.DX : "div";
          return (0, s.jsx)(_.Provider, {
            value: {
              rootRef: g,
              min: e,
              max: a,
              mode: t
            },
            children: (0, s.jsx)(u, {
              ref: m,
              ...p
            })
          })
        }),
        T = (0, i.forwardRef)(function({
          asChild: e,
          testId: a,
          ...t
        }, n) {
          const {
            rootRef: o,
            min: c,
            max: d,
            mode: g
          } = (0, i.useContext)(_), m = (0, i.useRef)(null), p = (0, i.useRef)(null);
          (0, i.useEffect)(() => (p.current = N(m.current, {
            minSize: c,
            maxSize: d,
            multiLine: "multi" === g
          }), () => p.current.unsubscribe()), [c, d, g]), (0, i.useEffect)(() => {
            if (null === o.current || null === p.current) return;
            const e = new ResizeObserver(() => {
              p.current.fit()
            });
            return e.observe(o.current), () => e.disconnect()
          }, [o, p]), (0, i.useEffect)(() => {
            document.fonts.ready.then(() => p.current && p.current.fit())
          }, []);
          const u = (0, A.UP)(m, n),
            f = (0, l.mergeProps)({
              className: "_1gyq4dd0",
              "data-testid": a
            }, t),
            b = e ? r.DX : "div";
          return (0, s.jsx)(b, {
            ref: u,
            ...f
          })
        })
    },
    21179(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => o
      });
      var s = t(39793),
        i = t(9294),
        r = t(89587);
      const l = {
          badge: "rockstargames-sites-gta-gen9b7268b0e907630904b6689af83fee8e3",
          badge2: "rockstargames-sites-gta-gen9d08ce7145bc9562355a3984f8ccc9313",
          badge3: "rockstargames-sites-gta-gen9c7c60cfb12b6e9be68893c60814b3ed7",
          badgeSizeUpdate: "rockstargames-sites-gta-gen9ce8632d7464b556158a1d549f653498c"
        },
        n = ({
          wrapper: e,
          children: a,
          role: t,
          splitter: s
        }) => s || t ? e(a) : a,
        o = ({
          badge: e,
          badgeType: a,
          role: o,
          splitter: c
        }) => {
          const d = [];
          return c ? e.split(c).map(e => d.push(e)) : d.push(e), (0, s.jsxs)(n, {
            splitter: c,
            role: o,
            wrapper: e => (0, s.jsx)("div", {
              className: `${l.badge} ${a?l[a]:""} `,
              children: e
            }),
            children: [(0, s.jsx)(s.Fragment, {
              children: o && (0, s.jsx)(i.A, {
                image: {
                  alt: o,
                  desktop: t(65287)(`./${o}.png`)
                }
              })
            }), (0, s.jsx)(r.Root, {
              className: `${c||o?"":l.badge} ${a?l[a]:""}`,
              min: 8,
              max: 1e3,
              mode: c || o ? "single" : "multi",
              children: (0, s.jsx)(r.Text, {
                children: d[0]
              })
            }), (0, s.jsx)(s.Fragment, {
              children: d.shift() && c && d.length >= 1 && (0, s.jsx)(r.Root, {
                min: 8,
                max: 1e3,
                mode: "single",
                children: (0, s.jsx)(r.Text, {
                  children: d.join(" ")
                })
              })
            })]
          }, "badge-wrapper")
        }
    },
    19724(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => d
      });
      var s = t(39793),
        i = t(93082),
        r = t(13331),
        l = t(81270),
        n = t(21179),
        o = t(9294);
      const c = ({
          hero: e,
          children: a
        }) => e ? (0, s.jsx)("div", {
          className: "rockstargames-sites-gta-gen9a429886d721550d02521f7f5c9de7f5b",
          children: a
        }) : a,
        d = ({
          badge: e = null,
          badgeType: a,
          discountTxt: t,
          splitter: d,
          image: g,
          style: m,
          className: p = "",
          attributes: u = {},
          role: f,
          hero: b = !1
        }) => {
          const h = (0, i.useMemo)(() => {
              if (g?.badge || g?.discountTxt || e || t) return (0, s.jsx)(n.A, {
                badge: g?.discountTxt ?? g?.badge ?? e ?? t,
                badgeType: a,
                splitter: g?.splitter ?? d,
                role: g?.role ?? f
              })
            }, [e, a, t, g, f, d]),
            y = (0, r.isEmptyMarkup)(g?.caption ?? "");
          return (0, s.jsx)(c, {
            hero: b,
            children: (0, s.jsx)("figure", {
              children: (0, s.jsxs)("div", {
                className: (0, l.default)("rockstargames-sites-gta-gen9d9ac792281efe15bcd4589b028d1c27b", b ? "rockstargames-sites-gta-gen9e430c4662cd185f58259d4a8d8b322de" : "", u?.hiddenMobile ? "hiddenMobile" : "", u?.hiddenLarge ? "hiddenLarge" : "", u?.className, p),
                style: (0, r.safeStyles)({
                  ...m,
                  ...u?.style
                }),
                ...u,
                children: [(0, s.jsx)(o.A, {
                  role: g?.accessibleRole,
                  image: g,
                  className: p
                }), h, !y && (0, s.jsx)("figcaption", {
                  dangerouslySetInnerHTML: {
                    __html: g.caption
                  }
                })]
              })
            })
          })
        }
    },
    82950(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => r
      });
      var s = t(39793);
      const i = {
          gtao: "rockstargames-sites-gta-gen9f66c75c6e882da85fef31e4211ca0be2",
          hr: "rockstargames-sites-gta-gen9dc7b1bc141e132d4ee9b7bf9d55c573a",
          redLine: "rockstargames-sites-gta-gen9d4d968b41ef87926b0b6318e8647738b"
        },
        r = ({
          style: e,
          className: a = "",
          type: t = ""
        }) => (0, s.jsx)("div", {
          style: e,
          className: [i.hr, i[t], a].join(" ")
        })
    },
    84121(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => g
      });
      var s = t(39793),
        i = t(93082),
        r = t(50062),
        l = t.n(r),
        n = t(13331),
        o = t(81270);
      const c = {
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
          sanitize: d
        } = l(),
        g = ({
          list: e,
          string: a,
          starColor: t,
          style: r,
          className: l,
          game: g,
          noImg: m,
          columns: p,
          mobileColumns: u
        }) => {
          const [f, b] = (0, i.useState)(null), h = a ? a.split("_#_") : e;
          if ((0, i.useEffect)(() => {
              b(e)
            }, [e]), !a && !e) return null;
          const y = {
            color: r?.color
          };
          return delete r?.color, p && f ? (0, s.jsx)("div", {
            className: c.grid,
            style: {
              "--unordered-list-grid-column": p,
              "--unordered-list-grid-column-mobile": u ?? p
            },
            children: (0, s.jsx)("ul", {
              className: (0, o.default)(c.itemList, c.noImg, c[t], c[g]),
              style: (0, n.safeStyles)(r),
              children: f.map((e, a) => (0, s.jsx)("li", {
                style: y,
                dangerouslySetInnerHTML: {
                  __html: d(e.content)
                }
              }, a))
            })
          }) : (0, s.jsx)("ul", {
            style: (0, n.safeStyles)(r),
            className: (0, o.default)(c.itemList, c.custom, m ? c.noImg : "", t ? c[t] : "", g ? c[g] : "", l ?? ""),
            children: h.map((e, a) => (0, s.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: d(e?.content ?? e)
              }
            }, a))
          })
        }
    },
    9294(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => o
      });
      var s = t(39793),
        i = t(17301),
        r = t(13331);
      const l = ({
          alt: e,
          className: a,
          src: i,
          role: l,
          style: n
        }) => {
          const [o, c] = (0, r.usePreloadImg)(i);
          let d = i;
          !1 === o && (d = t(9333));
          const {
            width: g,
            height: m
          } = c, p = {
            "--aspect-ratio": Number.isNaN(g / m) ? "" : g / m,
            ...n
          };
          return (0, s.jsx)("img", {
            src: d,
            className: a ?? "",
            alt: e,
            style: p,
            role: l
          })
        },
        n = "rockstargames-sites-gta-gen9c8dc03880ce2e12f3fdea5b5b587f27f",
        o = ({
          className: e,
          style: a = {},
          image: o = {},
          imageStyle: c = {},
          role: d = "img"
        }) => {
          let {
            alt: g,
            src: m
          } = (0, i.useImageParser)(o);
          const {
            isMobile: p
          } = (0, r.useWindowResize)(), u = p ? m.imageMobileStyle : m.imageDesktopStyle;
          m.desktop || m.mobile || (g = "", m = {
            mobile: t(28839),
            desktop: t(9333)
          });
          let f = o.frame ? `${o.frame} ${n}` : n;
          return (0, s.jsx)("div", {
            className: f,
            style: a,
            children: (0, s.jsx)(l, {
              style: {
                ...c,
                ...o?.style,
                ...u
              },
              src: p ? m.mobile || m.desktop : m?.desktop || m?.mobile,
              alt: g,
              role: d,
              className: e
            })
          })
        }
    },
    25114(e, a, t) {
      "use strict";
      t.r(a), t.d(a, {
        default: () => y
      });
      var s = t(39793),
        i = t(63468),
        r = t(19724),
        l = t(39299);
      const n = {
          carouselTitle: "rockstargames-sites-gta-gen9e9e0ef1bfc3699b1e50c33dd0ce8e76a",
          carouselWrapper: "rockstargames-sites-gta-gen9fabefc39343f6c494eb3d049757d89c5",
          padding: "rockstargames-sites-gta-gen9ac767e959939b4d56b2358cb263d07ad"
        },
        o = ({
          to: e,
          children: a
        }) => e ? (0, s.jsx)("a", {
          href: e,
          target: "_blank",
          children: a
        }) : a,
        c = ({
          items: e = [],
          text: a = {},
          style: t,
          className: c = "",
          id: d = null
        }) => e?.length ? (0, s.jsxs)("div", {
          id: d,
          "data-testid": `carousel${c&&`-${c}`}-group-of-items`,
          children: [(0, s.jsx)(l.A, {
            style: t,
            className: [c, n.carouselWrapper].join(" "),
            children: e.map(e => (0, s.jsxs)("div", {
              id: e?.id ?? null,
              children: [(0, s.jsx)("div", {
                className: n.imageWrapper,
                tabIndex: 0,
                children: (0, s.jsx)(r.A, {
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
              }), e.title && (0, s.jsx)(o, {
                to: e?.to,
                children: (0, s.jsx)("h4", {
                  className: n.carouselTitle,
                  children: e.title
                })
              }), e.description && (0, s.jsx)("span", {
                className: n.description,
                dangerouslySetInnerHTML: {
                  __html: e.description
                }
              })]
            }, e?.key ?? e?.title))
          }), a?.title || a?.description ? (0, s.jsx)("div", {
            className: n.padding,
            style: a?.style ?? {},
            children: (0, s.jsx)(i.A, {
              item: a
            })
          }) : ""]
        }) : null;
      var d = t(31879),
        g = t.n(d),
        m = t(17301),
        p = t(81270);
      const u = ({
          impressionTracking: e,
          gtm: a = {},
          children: t
        }) => e?.shouldTrack ? (0, s.jsx)(m.InViewTracker, {
          threshold: e?.threshold,
          gtm: a,
          children: t
        }) : t,
        f = ({
          to: e,
          children: a
        }) => e ? (0, s.jsx)("a", {
          href: e,
          target: "_blank",
          rel: "noreferrer",
          children: a
        }) : a,
        b = ({
          item: e
        }) => e?.videoId ? (0, s.jsx)(g(), {
          context: "site",
          autoplay: !1,
          id: e.videoId
        }) : (0, s.jsx)(r.A, {
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
          className: t = "",
          id: r = null
        }) => (0, s.jsx)("div", {
          style: a,
          className: (0, p.default)("rockstargames-sites-gta-gen9d38af92e8657708abd3dc5295e62476c", t),
          id: r,
          "data-testid": "standard-group-of-items",
          children: e.map(e => (0, s.jsx)(u, {
            impressionTracking: e?.impressionTracking,
            gtm: e?.gtm,
            children: (0, s.jsx)(f, {
              to: e?.to,
              children: (0, s.jsxs)("div", {
                className: (0, p.default)("rockstargames-sites-gta-gen9a9b63d3aa2f18fa6c84b19c8993a7893", e.className),
                style: e?.style ?? {},
                ...e?.props,
                children: [e?.image || e?.videoId ? (0, s.jsx)(b, {
                  item: e
                }) : "", e.title || e.description ? (0, s.jsx)(i.A, {
                  item: e,
                  className: "rockstargames-sites-gta-gen9bc47d354556b20071313d2c1ccc3debd"
                }) : ""]
              })
            })
          }, e.key))
        }),
        y = ({
          children: e = null,
          text: a = {},
          items: t = [],
          renderTemplate: i = "",
          style: r = {},
          id: l = null,
          ...n
        }) => {
          if (!t.length) return null;
          switch (i) {
            case "carousel":
              return (0, s.jsx)(c, {
                text: a,
                items: t,
                style: r,
                id: l,
                children: e
              });
            case "carousel-panorama":
              return (0, s.jsx)(c, {
                text: a,
                items: t,
                style: r,
                className: "panorama",
                id: l,
                children: e
              });
            default:
              return (0, s.jsx)(h, {
                items: t,
                style: r,
                id: l,
                ...n,
                children: e
              })
          }
        }
    },
    65287(e, a, t) {
      const s = {
        "./bounty.png": 7502,
        "./collector.png": 24970,
        "./moonshiner.png": 2661,
        "./naturalist.png": 16386,
        "./trader.png": 38635
      };

      function i(e) {
        const a = r(e);
        return t(a)
      }

      function r(e) {
        if (!t.o(s, e)) {
          const a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      i.keys = function() {
        return Object.keys(s)
      }, i.resolve = r, e.exports = i, i.id = 65287
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
    31147(e, a, t) {
      "use strict";
      t.d(a, {
        A: () => l
      });
      var s = t(20219),
        i = t(61122),
        r = t(20212);

      function l(e) {
        let {
          swiper: a,
          extendParams: t,
          on: l,
          emit: n
        } = e;
        const o = "swiper-pagination";
        let c;
        t({
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

        function g() {
          return !a.params.pagination.el || !a.pagination.el || Array.isArray(a.pagination.el) && 0 === a.pagination.el.length
        }

        function m(e, t) {
          const {
            bulletActiveClass: s
          } = a.params.pagination;
          e && (e = e[("prev" === t ? "previous" : "next") + "ElementSibling"]) && (e.classList.add(`${s}-${t}`), (e = e[("prev" === t ? "previous" : "next") + "ElementSibling"]) && e.classList.add(`${s}-${t}-${t}`))
        }

        function p(e) {
          const t = e.target.closest((0, s.c)(a.params.pagination.bulletClass));
          if (!t) return;
          e.preventDefault();
          const i = (0, r.i)(t) * a.params.slidesPerGroup;
          if (a.params.loop) {
            if (a.realIndex === i) return;
            const e = (l = a.realIndex, n = i, (n %= o = a.slides.length) === 1 + (l %= o) ? "next" : n === l - 1 ? "previous" : void 0);
            "next" === e ? a.slideNext() : "previous" === e ? a.slidePrev() : a.slideToLoop(i)
          } else a.slideTo(i);
          var l, n, o
        }

        function u() {
          const e = a.rtl,
            t = a.params.pagination;
          if (g()) return;
          let i, l, o = a.pagination.el;
          o = (0, r.m)(o);
          const p = a.virtual && a.params.virtual.enabled ? a.virtual.slides.length : a.slides.length,
            u = a.params.loop ? Math.ceil(p / a.params.slidesPerGroup) : a.snapGrid.length;
          if (a.params.loop ? (l = a.previousRealIndex || 0, i = a.params.slidesPerGroup > 1 ? Math.floor(a.realIndex / a.params.slidesPerGroup) : a.realIndex) : void 0 !== a.snapIndex ? (i = a.snapIndex, l = a.previousSnapIndex) : (l = a.previousIndex || 0, i = a.activeIndex || 0), "bullets" === t.type && a.pagination.bullets && a.pagination.bullets.length > 0) {
            const s = a.pagination.bullets;
            let n, g, p;
            if (t.dynamicBullets && (c = (0, r.h)(s[0], a.isHorizontal() ? "width" : "height", !0), o.forEach(e => {
                e.style[a.isHorizontal() ? "width" : "height"] = c * (t.dynamicMainBullets + 4) + "px"
              }), t.dynamicMainBullets > 1 && void 0 !== l && (d += i - (l || 0), d > t.dynamicMainBullets - 1 ? d = t.dynamicMainBullets - 1 : d < 0 && (d = 0)), n = Math.max(i - d, 0), g = n + (Math.min(s.length, t.dynamicMainBullets) - 1), p = (g + n) / 2), s.forEach(e => {
                const a = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(e => `${t.bulletActiveClass}${e}`)].map(e => "string" == typeof e && e.includes(" ") ? e.split(" ") : e).flat();
                e.classList.remove(...a)
              }), o.length > 1) s.forEach(e => {
              const s = (0, r.i)(e);
              s === i ? e.classList.add(...t.bulletActiveClass.split(" ")) : a.isElement && e.setAttribute("part", "bullet"), t.dynamicBullets && (s >= n && s <= g && e.classList.add(...`${t.bulletActiveClass}-main`.split(" ")), s === n && m(e, "prev"), s === g && m(e, "next"))
            });
            else {
              const e = s[i];
              if (e && e.classList.add(...t.bulletActiveClass.split(" ")), a.isElement && s.forEach((e, a) => {
                  e.setAttribute("part", a === i ? "bullet-active" : "bullet")
                }), t.dynamicBullets) {
                const e = s[n],
                  a = s[g];
                for (let e = n; e <= g; e += 1) s[e] && s[e].classList.add(...`${t.bulletActiveClass}-main`.split(" "));
                m(e, "prev"), m(a, "next")
              }
            }
            if (t.dynamicBullets) {
              const i = Math.min(s.length, t.dynamicMainBullets + 4),
                r = (c * i - c) / 2 - p * c,
                l = e ? "right" : "left";
              s.forEach(e => {
                e.style[a.isHorizontal() ? l : "top"] = `${r}px`
              })
            }
          }
          o.forEach((e, l) => {
            if ("fraction" === t.type && (e.querySelectorAll((0, s.c)(t.currentClass)).forEach(e => {
                e.textContent = t.formatFractionCurrent(i + 1)
              }), e.querySelectorAll((0, s.c)(t.totalClass)).forEach(e => {
                e.textContent = t.formatFractionTotal(u)
              })), "progressbar" === t.type) {
              let r;
              r = t.progressbarOpposite ? a.isHorizontal() ? "vertical" : "horizontal" : a.isHorizontal() ? "horizontal" : "vertical";
              const l = (i + 1) / u;
              let n = 1,
                o = 1;
              "horizontal" === r ? n = l : o = l, e.querySelectorAll((0, s.c)(t.progressbarFillClass)).forEach(e => {
                e.style.transform = `translate3d(0,0,0) scaleX(${n}) scaleY(${o})`, e.style.transitionDuration = `${a.params.speed}ms`
              })
            }
            "custom" === t.type && t.renderCustom ? ((0, r.s)(e, t.renderCustom(a, i + 1, u)), 0 === l && n("paginationRender", e)) : (0 === l && n("paginationRender", e), n("paginationUpdate", e)), a.params.watchOverflow && a.enabled && e.classList[a.isLocked ? "add" : "remove"](t.lockClass)
          })
        }

        function f() {
          const e = a.params.pagination;
          if (g()) return;
          const t = a.virtual && a.params.virtual.enabled ? a.virtual.slides.length : a.grid && a.params.grid.rows > 1 ? a.slides.length / Math.ceil(a.params.grid.rows) : a.slides.length;
          let i = a.pagination.el;
          i = (0, r.m)(i);
          let l = "";
          if ("bullets" === e.type) {
            let s = a.params.loop ? Math.ceil(t / a.params.slidesPerGroup) : a.snapGrid.length;
            a.params.freeMode && a.params.freeMode.enabled && s > t && (s = t);
            for (let t = 0; t < s; t += 1) e.renderBullet ? l += e.renderBullet.call(a, t, e.bulletClass) : l += `<${e.bulletElement} ${a.isElement?'part="bullet"':""} class="${e.bulletClass}"></${e.bulletElement}>`
          }
          "fraction" === e.type && (l = e.renderFraction ? e.renderFraction.call(a, e.currentClass, e.totalClass) : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`), "progressbar" === e.type && (l = e.renderProgressbar ? e.renderProgressbar.call(a, e.progressbarFillClass) : `<span class="${e.progressbarFillClass}"></span>`), a.pagination.bullets = [], i.forEach(t => {
            "custom" !== e.type && (0, r.s)(t, l || ""), "bullets" === e.type && a.pagination.bullets.push(...t.querySelectorAll((0, s.c)(e.bulletClass)))
          }), "custom" !== e.type && n("paginationRender", i[0])
        }

        function b() {
          a.params.pagination = (0, i.c)(a, a.originalParams.pagination, a.params.pagination, {
            el: "swiper-pagination"
          });
          const e = a.params.pagination;
          if (!e.el) return;
          let t;
          "string" == typeof e.el && a.isElement && (t = a.el.querySelector(e.el)), t || "string" != typeof e.el || (t = [...document.querySelectorAll(e.el)]), t || (t = e.el), t && 0 !== t.length && (a.params.uniqueNavElements && "string" == typeof e.el && Array.isArray(t) && t.length > 1 && (t = [...a.el.querySelectorAll(e.el)], t.length > 1 && (t = t.find(e => (0, r.b)(e, ".swiper")[0] === a.el))), Array.isArray(t) && 1 === t.length && (t = t[0]), Object.assign(a.pagination, {
            el: t
          }), t = (0, r.m)(t), t.forEach(t => {
            "bullets" === e.type && e.clickable && t.classList.add(...(e.clickableClass || "").split(" ")), t.classList.add(e.modifierClass + e.type), t.classList.add(a.isHorizontal() ? e.horizontalClass : e.verticalClass), "bullets" === e.type && e.dynamicBullets && (t.classList.add(`${e.modifierClass}${e.type}-dynamic`), d = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && t.classList.add(e.progressbarOppositeClass), e.clickable && t.addEventListener("click", p), a.enabled || t.classList.add(e.lockClass)
          }))
        }

        function h() {
          const e = a.params.pagination;
          if (g()) return;
          let t = a.pagination.el;
          t && (t = (0, r.m)(t), t.forEach(t => {
            t.classList.remove(e.hiddenClass), t.classList.remove(e.modifierClass + e.type), t.classList.remove(a.isHorizontal() ? e.horizontalClass : e.verticalClass), e.clickable && (t.classList.remove(...(e.clickableClass || "").split(" ")), t.removeEventListener("click", p))
          })), a.pagination.bullets && a.pagination.bullets.forEach(a => a.classList.remove(...e.bulletActiveClass.split(" ")))
        }
        l("changeDirection", () => {
          if (!a.pagination || !a.pagination.el) return;
          const e = a.params.pagination;
          let {
            el: t
          } = a.pagination;
          t = (0, r.m)(t), t.forEach(t => {
            t.classList.remove(e.horizontalClass, e.verticalClass), t.classList.add(a.isHorizontal() ? e.horizontalClass : e.verticalClass)
          })
        }), l("init", () => {
          !1 === a.params.pagination.enabled ? y() : (b(), f(), u())
        }), l("activeIndexChange", () => {
          void 0 === a.snapIndex && u()
        }), l("snapIndexChange", () => {
          u()
        }), l("snapGridLengthChange", () => {
          f(), u()
        }), l("destroy", () => {
          h()
        }), l("enable disable", () => {
          let {
            el: e
          } = a.pagination;
          e && (e = (0, r.m)(e), e.forEach(e => e.classList[a.enabled ? "remove" : "add"](a.params.pagination.lockClass)))
        }), l("lock unlock", () => {
          u()
        }), l("click", (e, t) => {
          const s = t.target,
            i = (0, r.m)(a.pagination.el);
          if (a.params.pagination.el && a.params.pagination.hideOnClick && i && i.length > 0 && !s.classList.contains(a.params.pagination.bulletClass)) {
            if (a.navigation && (a.navigation.nextEl && s === a.navigation.nextEl || a.navigation.prevEl && s === a.navigation.prevEl)) return;
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
            e && (e = (0, r.m)(e), e.forEach(e => e.classList.remove(a.params.pagination.paginationDisabledClass))), b(), f(), u()
          },
          disable: y,
          render: f,
          update: u,
          init: b,
          destroy: h
        })
      }
    },
    20219(e, a, t) {
      "use strict";

      function s(e) {
        return void 0 === e && (e = ""), `.${e.trim().replace(/([\.:!+\/()[\]])/g,"\\$1").replace(/ /g,".")}`
      }
      t.d(a, {
        c: () => s
      })
    }
  }
]);