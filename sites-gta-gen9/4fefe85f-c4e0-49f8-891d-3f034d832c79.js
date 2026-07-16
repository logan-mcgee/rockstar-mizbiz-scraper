try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "4fefe85f-c4e0-49f8-891d-3f034d832c79", e._sentryDebugIdIdentifier = "sentry-dbid-4fefe85f-c4e0-49f8-891d-3f034d832c79")
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
  [6345, 8726], {
    43623(e, t, a) {
      "use strict";
      a.d(t, {
        A: () => h
      });
      var s = a(39793),
        r = a(93082),
        i = a(14653),
        n = a(44128),
        l = a(73059),
        o = a(31147),
        c = a(39279),
        d = a(81270),
        g = a(46764);
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
      var u = a(49516),
        p = a(98769);
      const f = ({
          item: e
        }) => (0, s.jsxs)("div", {
          children: [(0, s.jsx)(p.A, {
            image: e?.image,
            badge: e?.badge ?? e?.image?.badge,
            badgeType: "badge3",
            role: e?.role ?? e?.image?.role,
            splitter: e?.splitter ?? e?.image?.splitter,
            type: e?.type,
            ariaLabel: e?.image?.ariaLabel ?? e.description,
            style: e?.style,
            className: (0, d.default)(m.img, e?.className)
          }), (e?.title || e?.description) && (0, s.jsx)(u.A, {
            item: e
          })]
        }),
        b = ({
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
        h = ({
          children: e,
          items: t = [],
          style: a = {},
          noInfiniteScroll: p = !1,
          className: h = "",
          renderTemplate: y = "standard",
          text: v,
          customSpaceBetween: x = null,
          centerSlides: k = !0,
          centeredSlidesBounds: w = !1
        }) => {
          const C = (0, g.Ub)("(min-width: 0px) and (max-width: 768px)"),
            [S, j] = (0, r.useState)(0),
            [E, L] = (0, r.useState)(null),
            z = (0, r.useMemo)(() => e && Array.isArray(e) ? e.map(() => (0, c.A)()) : null, [e, C]),
            N = e => {
              if (!e) return;
              let t = 0;
              e.pagination.bullets.forEach((e, a) => {
                e.classList.contains("swiper-pagination-bullet-active") && (t = a)
              }), j(t)
            };
          if (!(t && 0 !== t?.length || e)) return null;
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
            style: a,
            "data-testid": "carousel",
            children: [(0, s.jsxs)(i.RC, {
              modules: [n.A, l.A, o.A],
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
                null != E && clearTimeout(E);
                const t = setTimeout(() => {
                  e.update(), e.updateSize(), e.updateSlides(), e.slideToClosest(), N(e)
                }, 250);
                L(t)
              },
              children: [(0, s.jsx)("div", {
                className: m.trackWrapper,
                children: (0, s.jsxs)("div", {
                  className: m.track,
                  children: [t?.map(e => (0, s.jsx)(i.qr, {
                    children: (0, s.jsx)(f, {
                      item: e
                    })
                  }, e.key)), e && e.map((e, t) => e && (0, s.jsx)(i.qr, {
                    children: e
                  }, z && z[t]))]
                })
              }), (0, s.jsx)(b, {
                current: S,
                total: e ? e.length : t.length
              })]
            }), (v?.title || v?.description) && (0, s.jsx)(u.A, {
              item: v
            })]
          })
        }
    },
    49516(e, t, a) {
      "use strict";
      a.d(t, {
        A: () => d
      });
      var s = a(39793),
        r = a(81270),
        i = a(62012),
        n = a(49852),
        l = a(51299);
      const o = "rockstargames-sites-gta-gen9acd27eff2209196752622710f7b27558",
        c = ({
          to: e,
          children: t
        }) => e ? (0, s.jsx)("a", {
          href: e,
          target: "_blank",
          rel: "noreferrer",
          children: t
        }) : t,
        d = ({
          item: e,
          className: t = ""
        }) => (0, s.jsxs)("div", {
          className: (0, r.default)("rockstargames-sites-gta-gen9f8bc9589974046cdac4a2264be12d2df", t),
          children: [e.title && (0, s.jsx)(c, {
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
    85618(e, t, a) {
      "use strict";
      a.r(t), a.d(t, {
        Root: () => _,
        Text: () => T
      });
      var s = a(39793),
        r = a(93082),
        i = a(69088),
        n = a(33949);
      let l = [],
        o = null;
      const c = "requestAnimationFrame" in window ? (e = {
          sync: !1
        }) => {
          null !== o && window.cancelAnimationFrame(o);
          const t = () => g(l.filter(e => e.dirty && e.active));
          if (e.sync) return t();
          o = window.requestAnimationFrame(t)
        } : () => {},
        d = e => t => {
          l.forEach(t => t.dirty = e), c(t)
        },
        g = e => {
          e.filter(e => !e.styleComputed).forEach(e => {
            e.styleComputed = f(e)
          }), e.filter(b).forEach(h);
          const t = e.filter(p);
          for (let e = 0; e < 2; e++) t.forEach(u), t.forEach(e => {
            h(e), m(e)
          }), t.forEach(y)
        },
        m = e => e.dirty = 0,
        u = e => {
          e.availableWidth = e.element.parentElement?.clientWidth, e.availableHeight = e.element.parentElement?.clientHeight, e.currentWidth = e.element.scrollWidth, e.currentHeight = e.element.scrollHeight, e.previousFontSize = e.currentFontSize, e.currentFontSize = Math.min(Math.min(Math.max(e.minSize, e.availableWidth / e.currentWidth * e.previousFontSize), e.maxSize), Math.min(Math.max(e.minSize, e.availableHeight / e.currentHeight * e.previousFontSize), e.maxSize)), e.whiteSpace = e.multiLine && e.currentFontSize === e.minSize ? "normal" : "nowrap"
        },
        p = e => 2 !== e.dirty || 2 === e.dirty && (e.element.parentElement?.clientWidth !== e.availableWidth || e.element.parentElement?.clientHeight !== e.availableHeight),
        f = e => {
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
        v = (e, t) => a => {
          e.dirty = t, e.active && c(a)
        },
        x = e => () => {
          l = l.filter(t => t.element !== e.element), e.observeMutations && e.observer && e.observer.disconnect(), e.element.style.whiteSpace = e.originalStyle.whiteSpace, e.element.style.display = e.originalStyle.display, e.element.style.fontSize = e.originalStyle.fontSize
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

      function S(e, t) {
        const a = {
          ...C,
          ...t
        };
        a.minSize = Number.isFinite(a.minSize) && a.minSize > 0 ? a.minSize : C.minSize, a.maxSize = Number.isFinite(a.maxSize) && a.maxSize > 0 ? a.maxSize : C.maxSize;
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
            e.observeMutations && (e.observer = new MutationObserver(() => v(e, 1)()), e.observer.observe(e.element, e.observeMutations))
          })(t), l.push(t), {
            element: e,
            fit: v(t, 3),
            unfreeze: k(t),
            freeze: w(t),
            unsubscribe: x(t)
          }
        });
        return c(), s
      }

      function j(e, t = {}) {
        return "string" == typeof e ? S((a = document.querySelectorAll(e), [].slice.call(a)), t) : S([e], t)[0];
        var a
      }
      let E;
      const L = () => {
          window.clearTimeout(E), E = window.setTimeout(d(2), j.observeWindowDelay)
        },
        z = ["resize", "orientationchange"];
      Object.defineProperty(j, "observeWindow", {
        set: e => {
          z.forEach(t => {
            e ? window.addEventListener(t, L) : window.removeEventListener(t, L)
          })
        }
      }), j.observeWindow = !0, j.observeWindowDelay = 100, j.fitAll = d(3);
      const N = j;
      var A = a(46764);
      const M = (0, r.createContext)({
          rootRef: (0, r.createRef)(),
          min: 0,
          max: 0,
          mode: "single"
        }),
        _ = (0, r.forwardRef)(function({
          min: e = 1,
          max: t = 100,
          mode: a = "multi",
          asChild: l,
          testId: o,
          ...c
        }, d) {
          const g = (0, r.useRef)(null),
            m = (0, A.UP)(g, d),
            u = (0, n.mergeProps)({
              "data-testid": o
            }, c),
            p = l ? i.DX : "div";
          return (0, s.jsx)(M.Provider, {
            value: {
              rootRef: g,
              min: e,
              max: t,
              mode: a
            },
            children: (0, s.jsx)(p, {
              ref: m,
              ...u
            })
          })
        }),
        T = (0, r.forwardRef)(function({
          asChild: e,
          testId: t,
          ...a
        }, l) {
          const {
            rootRef: o,
            min: c,
            max: d,
            mode: g
          } = (0, r.useContext)(M), m = (0, r.useRef)(null), u = (0, r.useRef)(null);
          (0, r.useEffect)(() => (u.current = N(m.current, {
            minSize: c,
            maxSize: d,
            multiLine: "multi" === g
          }), () => u.current.unsubscribe()), [c, d, g]), (0, r.useEffect)(() => {
            if (null === o.current || null === u.current) return;
            const e = new ResizeObserver(() => {
              u.current.fit()
            });
            return e.observe(o.current), () => e.disconnect()
          }, [o, u]), (0, r.useEffect)(() => {
            document.fonts.ready.then(() => u.current && u.current.fit())
          }, []);
          const p = (0, A.UP)(m, l),
            f = (0, n.mergeProps)({
              className: "_1gyq4dd0",
              "data-testid": t
            }, a),
            b = e ? i.DX : "div";
          return (0, s.jsx)(b, {
            ref: p,
            ...f
          })
        })
    },
    97990(e, t, a) {
      "use strict";
      a.d(t, {
        A: () => o
      });
      var s = a(39793),
        r = a(62012),
        i = a(85618);
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
          splitter: c
        }) => {
          const d = [];
          return c ? e.split(c).map(e => d.push(e)) : d.push(e), (0, s.jsxs)(l, {
            splitter: c,
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
              className: `${c||o?"":n.badge} ${t?n[t]:""}`,
              min: 8,
              max: 1e3,
              mode: c || o ? "single" : "multi",
              children: (0, s.jsx)(i.Text, {
                children: d[0]
              })
            }), (0, s.jsx)(s.Fragment, {
              children: d.shift() && c && d.length >= 1 && (0, s.jsx)(i.Root, {
                min: 8,
                max: 1e3,
                mode: "single",
                children: (0, s.jsx)(i.Text, {
                  children: d.join(" ")
                })
              })
            })]
          }, "badge-wrapper")
        }
    },
    98769(e, t, a) {
      "use strict";
      a.d(t, {
        A: () => d
      });
      var s = a(39793),
        r = a(93082),
        i = a(13331),
        n = a(81270),
        l = a(97990),
        o = a(62012);
      const c = ({
          hero: e,
          children: t
        }) => e ? (0, s.jsx)("div", {
          className: "rockstargames-sites-gta-gen9a429886d721550d02521f7f5c9de7f5b",
          children: t
        }) : t,
        d = ({
          badge: e = null,
          badgeType: t,
          discountTxt: a,
          splitter: d,
          image: g,
          style: m,
          className: u = "",
          attributes: p = {},
          role: f,
          hero: b = !1
        }) => {
          const h = (0, r.useMemo)(() => {
              if (g?.badge || g?.discountTxt || e || a) return (0, s.jsx)(l.A, {
                badge: g?.discountTxt ?? g?.badge ?? e ?? a,
                badgeType: t,
                splitter: g?.splitter ?? d,
                role: g?.role ?? f
              })
            }, [e, t, a, g, f, d]),
            y = (0, i.isEmptyMarkup)(g?.caption ?? "");
          return (0, s.jsx)(c, {
            hero: b,
            children: (0, s.jsx)("figure", {
              children: (0, s.jsxs)("div", {
                className: (0, n.default)("rockstargames-sites-gta-gen9d9ac792281efe15bcd4589b028d1c27b", b ? "rockstargames-sites-gta-gen9e430c4662cd185f58259d4a8d8b322de" : "", p?.hiddenMobile ? "hiddenMobile" : "", p?.hiddenLarge ? "hiddenLarge" : "", p?.className, u),
                style: (0, i.safeStyles)({
                  ...m,
                  ...p?.style
                }),
                ...p,
                children: [(0, s.jsx)(o.A, {
                  role: g?.accessibleRole,
                  image: g,
                  className: u
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
    51299(e, t, a) {
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
    49852(e, t, a) {
      "use strict";
      a.d(t, {
        A: () => g
      });
      var s = a(39793),
        r = a(93082),
        i = a(50062),
        n = a.n(i),
        l = a(13331),
        o = a(81270);
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
        } = n(),
        g = ({
          list: e,
          string: t,
          starColor: a,
          style: i,
          className: n,
          game: g,
          noImg: m,
          columns: u,
          mobileColumns: p
        }) => {
          const [f, b] = (0, r.useState)(null), h = t ? t.split("_#_") : e;
          if ((0, r.useEffect)(() => {
              b(e)
            }, [e]), !t && !e) return null;
          const y = {
            color: i?.color
          };
          return delete i?.color, u && f ? (0, s.jsx)("div", {
            className: c.grid,
            style: {
              "--unordered-list-grid-column": u,
              "--unordered-list-grid-column-mobile": p ?? u
            },
            children: (0, s.jsx)("ul", {
              className: (0, o.default)(c.itemList, c.noImg, c[a], c[g]),
              style: (0, l.safeStyles)(i),
              children: f.map((e, t) => (0, s.jsx)("li", {
                style: y,
                dangerouslySetInnerHTML: {
                  __html: d(e.content)
                }
              }, t))
            })
          }) : (0, s.jsx)("ul", {
            style: (0, l.safeStyles)(i),
            className: (0, o.default)(c.itemList, c.custom, m ? c.noImg : "", a ? c[a] : "", g ? c[g] : "", n ?? ""),
            children: h.map((e, t) => (0, s.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: d(e?.content ?? e)
              }
            }, t))
          })
        }
    },
    62012(e, t, a) {
      "use strict";
      a.d(t, {
        A: () => o
      });
      var s = a(39793),
        r = a(17301),
        i = a(13331);
      const n = ({
          alt: e,
          className: t,
          src: r,
          role: n,
          style: l
        }) => {
          const [o, c] = (0, i.usePreloadImg)(r);
          let d = r;
          !1 === o && (d = a(9333));
          const {
            width: g,
            height: m
          } = c, u = {
            "--aspect-ratio": Number.isNaN(g / m) ? "" : g / m,
            ...l
          };
          return (0, s.jsx)("img", {
            src: d,
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
          imageStyle: c = {},
          role: d = "img"
        }) => {
          let {
            alt: g,
            src: m
          } = (0, r.useImageParser)(o);
          const {
            isMobile: u
          } = (0, i.useWindowResize)(), p = u ? m.imageMobileStyle : m.imageDesktopStyle;
          m.desktop || m.mobile || (g = "", m = {
            mobile: a(28839),
            desktop: a(9333)
          });
          let f = o.frame ? `${o.frame} ${l}` : l;
          return (0, s.jsx)("div", {
            className: f,
            style: t,
            children: (0, s.jsx)(n, {
              style: {
                ...c,
                ...o?.style,
                ...p
              },
              src: u ? m.mobile || m.desktop : m?.desktop || m?.mobile,
              alt: g,
              role: d,
              className: e
            })
          })
        }
    },
    78726(e, t, a) {
      "use strict";
      a.r(t), a.d(t, {
        default: () => y
      });
      var s = a(39793),
        r = a(49516),
        i = a(98769),
        n = a(43623);
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
        c = ({
          items: e = [],
          text: t = {},
          style: a,
          className: c = "",
          id: d = null
        }) => e?.length ? (0, s.jsxs)("div", {
          id: d,
          "data-testid": `carousel${c&&`-${c}`}-group-of-items`,
          children: [(0, s.jsx)(n.A, {
            style: a,
            className: [c, l.carouselWrapper].join(" "),
            children: e.map(e => (0, s.jsxs)("div", {
              id: e?.id ?? null,
              children: [(0, s.jsx)("div", {
                className: l.imageWrapper,
                tabIndex: 0,
                children: (0, s.jsx)(i.A, {
                  image: e?.image,
                  badge: e?.badge ?? e?.image?.badge,
                  badgeType: "badge3",
                  role: e?.role ?? e?.image?.role,
                  splitter: e?.splitter ?? e?.image?.splitter,
                  type: e?.type,
                  ariaLabel: e?.image?.ariaLabel ?? e.description,
                  style: e?.style,
                  className: [l.img, e?.className].join(" ")
                })
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
      var d = a(31879),
        g = a.n(d),
        m = a(17301),
        u = a(81270);
      const p = ({
          impressionTracking: e,
          gtm: t = {},
          children: a
        }) => e?.shouldTrack ? (0, s.jsx)(m.InViewTracker, {
          threshold: e?.threshold,
          gtm: t,
          children: a
        }) : a,
        f = ({
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
        }) => e?.videoId ? (0, s.jsx)(g(), {
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
          children: e.map(e => (0, s.jsx)(p, {
            impressionTracking: e?.impressionTracking,
            gtm: e?.gtm,
            children: (0, s.jsx)(f, {
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
              return (0, s.jsx)(c, {
                text: t,
                items: a,
                style: i,
                id: n,
                children: e
              });
            case "carousel-panorama":
              return (0, s.jsx)(c, {
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
    65287(e, t, a) {
      const s = {
        "./bounty.png": 7502,
        "./collector.png": 24970,
        "./moonshiner.png": 2661,
        "./naturalist.png": 16386,
        "./trader.png": 38635
      };

      function r(e) {
        const t = i(e);
        return a(t)
      }

      function i(e) {
        if (!a.o(s, e)) {
          const t = new Error("Cannot find module '" + e + "'");
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
    31602(e, t, a) {
      "use strict";
      const s = "undefined" == typeof window;
      a.d(t, ["X", 0, s])
    },
    46764(e, t, a) {
      "use strict";
      a.d(t, {
        sL: () => h,
        UP: () => l,
        ic: () => d,
        iQ: () => m,
        Ub: () => i,
        jt: () => o,
        ZC: () => n,
        rl: () => u
      });
      var s = a(31602),
        r = a(93082);

      function i(e, {
        defaultValue: t = !1,
        initializeWithValue: a = !0
      } = {}) {
        const i = e => s.X || !window.matchMedia ? t : window.matchMedia(e).matches,
          [n, l] = (0, r.useState)(() => a ? i(e) : t);

        function o() {
          l(i(e))
        }
        return (0, r.useEffect)(() => {
          const t = window.matchMedia?.(e);
          return o(), t?.addListener ? t?.addListener(o) : t?.addEventListener("change", o), () => {
            t?.removeListener ? t?.removeListener(o) : t?.removeEventListener("change", o)
          }
        }, [e]), n
      }

      function n(e) {
        const t = (0, r.useRef)({
            value: e,
            prev: void 0
          }),
          a = t.current.value;
        return e !== a && (t.current = {
          value: e,
          prev: a
        }), t.current.prev
      }

      function l(...e) {
        const t = (0, r.useRef)(null);
        return t.current || (t.current = t => {
          e.forEach(e => {
            "function" == typeof e ? e(t) : null != e && (e.current = t)
          })
        }), t.current
      }
      const o = () => i("(prefers-reduced-motion: reduce)", {
        defaultValue: !1,
        initializeWithValue: !0
      });

      function c(e) {
        const t = (0, r.useRef)(e);
        return (0, r.useEffect)(() => {
          t.current = e
        }), (0, r.useMemo)(() => (...e) => t.current?.(...e), [])
      }

      function d({
        prop: e,
        defaultProp: t,
        onChange: a = () => {}
      }) {
        const [s, i] = function({
          defaultProp: e,
          onChange: t
        }) {
          const a = (0, r.useState)(e),
            [s] = a,
            i = (0, r.useRef)(s),
            n = c(t);
          return (0, r.useEffect)(() => {
            i.current !== s && (n(s), i.current = s)
          }, [s, i, n]), a
        }({
          defaultProp: t,
          onChange: a
        }), n = void 0 !== e, l = n ? e : s, o = c(a), d = (0, r.useCallback)(t => {
          if (n) {
            const a = "function" == typeof t ? t(e) : t;
            a !== e && o(a)
          } else i(t)
        }, [n, e, i, o]);
        return [l, d]
      }

      function g(e, t, a, s) {
        const i = (0, r.useRef)(t);
        (0, r.useEffect)(() => {
          i.current = t
        }, [t]), (0, r.useEffect)(() => {
          const t = a?.current ?? window;
          if (!t || !t.addEventListener) return;
          const r = e => {
            i.current(e)
          };
          return t.addEventListener(e, r, s), () => {
            t.removeEventListener(e, r, s)
          }
        }, [e, a?.current, s])
      }
      const m = ({
        ref: e,
        onChange: t,
        onFocusIn: a,
        onFocusOut: s,
        enabled: i = !0
      }) => {
        const [n, l] = (0, r.useState)(!1);
        return g("focusin", e => {
          l(!0), a?.(e), t?.(!0, e)
        }, e), g("focusout", e => {
          l(!1), s?.(e), t?.(!1, e)
        }, e), {
          isFocused: !!i && n
        }
      };

      function u(e = !0) {
        const t = i("screen and (pointer: coarse) and (hover: none)");
        return !!e && t
      }
      var p = a(65756),
        f = a(74571),
        b = a(47460);
      const h = ({
        inert: e,
        className: t,
        onClick: a,
        isLoading: s,
        ...r
      }, i) => {
        const {
          events: n,
          others: l
        } = (0, f.b)(r, {
          onPress: !1
        }), {
          buttonProps: o,
          isPressed: c
        } = (0, p.s)({
          ...l,
          elementType: "button",
          onPress: e => {
            s || (l.onPress?.(e) ?? a?.({
              ...e,
              currentTarget: e.target
            }))
          }
        }, i), d = {
          ...o,
          role: "button",
          "data-pressed": !e && c,
          "data-loading": s,
          "aria-busy": s
        };
        return {
          isPressed: !e && c,
          buttonProps: (0, b.v)(e ? {} : d, {
            ...n,
            className: t
          })
        }
      }
    },
    74571(e, t, a) {
      "use strict";
      a.d(t, {
        b: () => i
      });
      const s = /^(on.*)$/,
        r = /^(onPress.*)$/;

      function i(e, {
        onPress: t
      } = {
        onPress: !0
      }) {
        const a = {},
          i = {};
        for (const n in e) Object.prototype.hasOwnProperty.call(e, n) && (r.test(n) ? t ? a[n] = e[n] : i[n] = e[n] : s.test(n) ? a[n] = e[n] : i[n] = e[n]);
        return {
          events: a,
          others: i
        }
      }
    },
    47460(e, t, a) {
      "use strict";
      a.d(t, {
        v: () => l
      });
      var s = a(81270);
      const r = new Map;

      function i(e, t) {
        if (e === t) return e;
        const a = r.get(e);
        if (a) return a.forEach(e => e(t)), t;
        const s = r.get(t);
        return s ? (s.forEach(t => t(e)), e) : t
      }

      function n(...e) {
        return (...t) => {
          for (const a of e) "function" == typeof a && a(...t)
        }
      }

      function l(...e) {
        const t = {
          ...e[0]
        };
        for (let a = 1; a < e.length; a++) {
          const r = e[a];
          for (const e in r) {
            const a = t[e],
              l = r[e];
            "function" == typeof a && "function" == typeof l && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = n(a, l) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof a || "string" != typeof l ? "id" === e && a && l ? t.id = i(a, l) : t[e] = void 0 !== l ? l : a : t[e] = (0, s.clsx)(a, l)
          }
        }
        return t
      }
    },
    31147(e, t, a) {
      "use strict";
      a.d(t, {
        A: () => n
      });
      var s = a(20219),
        r = a(61122),
        i = a(20212);

      function n(e) {
        let {
          swiper: t,
          extendParams: a,
          on: n,
          emit: l
        } = e;
        const o = "swiper-pagination";
        let c;
        a({
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
        }), t.pagination = {
          el: null,
          bullets: []
        };
        let d = 0;

        function g() {
          return !t.params.pagination.el || !t.pagination.el || Array.isArray(t.pagination.el) && 0 === t.pagination.el.length
        }

        function m(e, a) {
          const {
            bulletActiveClass: s
          } = t.params.pagination;
          e && (e = e[("prev" === a ? "previous" : "next") + "ElementSibling"]) && (e.classList.add(`${s}-${a}`), (e = e[("prev" === a ? "previous" : "next") + "ElementSibling"]) && e.classList.add(`${s}-${a}-${a}`))
        }

        function u(e) {
          const a = e.target.closest((0, s.c)(t.params.pagination.bulletClass));
          if (!a) return;
          e.preventDefault();
          const r = (0, i.i)(a) * t.params.slidesPerGroup;
          if (t.params.loop) {
            if (t.realIndex === r) return;
            const e = (n = t.realIndex, l = r, (l %= o = t.slides.length) === 1 + (n %= o) ? "next" : l === n - 1 ? "previous" : void 0);
            "next" === e ? t.slideNext() : "previous" === e ? t.slidePrev() : t.slideToLoop(r)
          } else t.slideTo(r);
          var n, l, o
        }

        function p() {
          const e = t.rtl,
            a = t.params.pagination;
          if (g()) return;
          let r, n, o = t.pagination.el;
          o = (0, i.m)(o);
          const u = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
            p = t.params.loop ? Math.ceil(u / t.params.slidesPerGroup) : t.snapGrid.length;
          if (t.params.loop ? (n = t.previousRealIndex || 0, r = t.params.slidesPerGroup > 1 ? Math.floor(t.realIndex / t.params.slidesPerGroup) : t.realIndex) : void 0 !== t.snapIndex ? (r = t.snapIndex, n = t.previousSnapIndex) : (n = t.previousIndex || 0, r = t.activeIndex || 0), "bullets" === a.type && t.pagination.bullets && t.pagination.bullets.length > 0) {
            const s = t.pagination.bullets;
            let l, g, u;
            if (a.dynamicBullets && (c = (0, i.h)(s[0], t.isHorizontal() ? "width" : "height", !0), o.forEach(e => {
                e.style[t.isHorizontal() ? "width" : "height"] = c * (a.dynamicMainBullets + 4) + "px"
              }), a.dynamicMainBullets > 1 && void 0 !== n && (d += r - (n || 0), d > a.dynamicMainBullets - 1 ? d = a.dynamicMainBullets - 1 : d < 0 && (d = 0)), l = Math.max(r - d, 0), g = l + (Math.min(s.length, a.dynamicMainBullets) - 1), u = (g + l) / 2), s.forEach(e => {
                const t = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(e => `${a.bulletActiveClass}${e}`)].map(e => "string" == typeof e && e.includes(" ") ? e.split(" ") : e).flat();
                e.classList.remove(...t)
              }), o.length > 1) s.forEach(e => {
              const s = (0, i.i)(e);
              s === r ? e.classList.add(...a.bulletActiveClass.split(" ")) : t.isElement && e.setAttribute("part", "bullet"), a.dynamicBullets && (s >= l && s <= g && e.classList.add(...`${a.bulletActiveClass}-main`.split(" ")), s === l && m(e, "prev"), s === g && m(e, "next"))
            });
            else {
              const e = s[r];
              if (e && e.classList.add(...a.bulletActiveClass.split(" ")), t.isElement && s.forEach((e, t) => {
                  e.setAttribute("part", t === r ? "bullet-active" : "bullet")
                }), a.dynamicBullets) {
                const e = s[l],
                  t = s[g];
                for (let e = l; e <= g; e += 1) s[e] && s[e].classList.add(...`${a.bulletActiveClass}-main`.split(" "));
                m(e, "prev"), m(t, "next")
              }
            }
            if (a.dynamicBullets) {
              const r = Math.min(s.length, a.dynamicMainBullets + 4),
                i = (c * r - c) / 2 - u * c,
                n = e ? "right" : "left";
              s.forEach(e => {
                e.style[t.isHorizontal() ? n : "top"] = `${i}px`
              })
            }
          }
          o.forEach((e, n) => {
            if ("fraction" === a.type && (e.querySelectorAll((0, s.c)(a.currentClass)).forEach(e => {
                e.textContent = a.formatFractionCurrent(r + 1)
              }), e.querySelectorAll((0, s.c)(a.totalClass)).forEach(e => {
                e.textContent = a.formatFractionTotal(p)
              })), "progressbar" === a.type) {
              let i;
              i = a.progressbarOpposite ? t.isHorizontal() ? "vertical" : "horizontal" : t.isHorizontal() ? "horizontal" : "vertical";
              const n = (r + 1) / p;
              let l = 1,
                o = 1;
              "horizontal" === i ? l = n : o = n, e.querySelectorAll((0, s.c)(a.progressbarFillClass)).forEach(e => {
                e.style.transform = `translate3d(0,0,0) scaleX(${l}) scaleY(${o})`, e.style.transitionDuration = `${t.params.speed}ms`
              })
            }
            "custom" === a.type && a.renderCustom ? ((0, i.s)(e, a.renderCustom(t, r + 1, p)), 0 === n && l("paginationRender", e)) : (0 === n && l("paginationRender", e), l("paginationUpdate", e)), t.params.watchOverflow && t.enabled && e.classList[t.isLocked ? "add" : "remove"](a.lockClass)
          })
        }

        function f() {
          const e = t.params.pagination;
          if (g()) return;
          const a = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.grid && t.params.grid.rows > 1 ? t.slides.length / Math.ceil(t.params.grid.rows) : t.slides.length;
          let r = t.pagination.el;
          r = (0, i.m)(r);
          let n = "";
          if ("bullets" === e.type) {
            let s = t.params.loop ? Math.ceil(a / t.params.slidesPerGroup) : t.snapGrid.length;
            t.params.freeMode && t.params.freeMode.enabled && s > a && (s = a);
            for (let a = 0; a < s; a += 1) e.renderBullet ? n += e.renderBullet.call(t, a, e.bulletClass) : n += `<${e.bulletElement} ${t.isElement?'part="bullet"':""} class="${e.bulletClass}"></${e.bulletElement}>`
          }
          "fraction" === e.type && (n = e.renderFraction ? e.renderFraction.call(t, e.currentClass, e.totalClass) : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`), "progressbar" === e.type && (n = e.renderProgressbar ? e.renderProgressbar.call(t, e.progressbarFillClass) : `<span class="${e.progressbarFillClass}"></span>`), t.pagination.bullets = [], r.forEach(a => {
            "custom" !== e.type && (0, i.s)(a, n || ""), "bullets" === e.type && t.pagination.bullets.push(...a.querySelectorAll((0, s.c)(e.bulletClass)))
          }), "custom" !== e.type && l("paginationRender", r[0])
        }

        function b() {
          t.params.pagination = (0, r.c)(t, t.originalParams.pagination, t.params.pagination, {
            el: "swiper-pagination"
          });
          const e = t.params.pagination;
          if (!e.el) return;
          let a;
          "string" == typeof e.el && t.isElement && (a = t.el.querySelector(e.el)), a || "string" != typeof e.el || (a = [...document.querySelectorAll(e.el)]), a || (a = e.el), a && 0 !== a.length && (t.params.uniqueNavElements && "string" == typeof e.el && Array.isArray(a) && a.length > 1 && (a = [...t.el.querySelectorAll(e.el)], a.length > 1 && (a = a.find(e => (0, i.b)(e, ".swiper")[0] === t.el))), Array.isArray(a) && 1 === a.length && (a = a[0]), Object.assign(t.pagination, {
            el: a
          }), a = (0, i.m)(a), a.forEach(a => {
            "bullets" === e.type && e.clickable && a.classList.add(...(e.clickableClass || "").split(" ")), a.classList.add(e.modifierClass + e.type), a.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass), "bullets" === e.type && e.dynamicBullets && (a.classList.add(`${e.modifierClass}${e.type}-dynamic`), d = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && a.classList.add(e.progressbarOppositeClass), e.clickable && a.addEventListener("click", u), t.enabled || a.classList.add(e.lockClass)
          }))
        }

        function h() {
          const e = t.params.pagination;
          if (g()) return;
          let a = t.pagination.el;
          a && (a = (0, i.m)(a), a.forEach(a => {
            a.classList.remove(e.hiddenClass), a.classList.remove(e.modifierClass + e.type), a.classList.remove(t.isHorizontal() ? e.horizontalClass : e.verticalClass), e.clickable && (a.classList.remove(...(e.clickableClass || "").split(" ")), a.removeEventListener("click", u))
          })), t.pagination.bullets && t.pagination.bullets.forEach(t => t.classList.remove(...e.bulletActiveClass.split(" ")))
        }
        n("changeDirection", () => {
          if (!t.pagination || !t.pagination.el) return;
          const e = t.params.pagination;
          let {
            el: a
          } = t.pagination;
          a = (0, i.m)(a), a.forEach(a => {
            a.classList.remove(e.horizontalClass, e.verticalClass), a.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass)
          })
        }), n("init", () => {
          !1 === t.params.pagination.enabled ? y() : (b(), f(), p())
        }), n("activeIndexChange", () => {
          void 0 === t.snapIndex && p()
        }), n("snapIndexChange", () => {
          p()
        }), n("snapGridLengthChange", () => {
          f(), p()
        }), n("destroy", () => {
          h()
        }), n("enable disable", () => {
          let {
            el: e
          } = t.pagination;
          e && (e = (0, i.m)(e), e.forEach(e => e.classList[t.enabled ? "remove" : "add"](t.params.pagination.lockClass)))
        }), n("lock unlock", () => {
          p()
        }), n("click", (e, a) => {
          const s = a.target,
            r = (0, i.m)(t.pagination.el);
          if (t.params.pagination.el && t.params.pagination.hideOnClick && r && r.length > 0 && !s.classList.contains(t.params.pagination.bulletClass)) {
            if (t.navigation && (t.navigation.nextEl && s === t.navigation.nextEl || t.navigation.prevEl && s === t.navigation.prevEl)) return;
            const e = r[0].classList.contains(t.params.pagination.hiddenClass);
            l(!0 === e ? "paginationShow" : "paginationHide"), r.forEach(e => e.classList.toggle(t.params.pagination.hiddenClass))
          }
        });
        const y = () => {
          t.el.classList.add(t.params.pagination.paginationDisabledClass);
          let {
            el: e
          } = t.pagination;
          e && (e = (0, i.m)(e), e.forEach(e => e.classList.add(t.params.pagination.paginationDisabledClass))), h()
        };
        Object.assign(t.pagination, {
          enable: () => {
            t.el.classList.remove(t.params.pagination.paginationDisabledClass);
            let {
              el: e
            } = t.pagination;
            e && (e = (0, i.m)(e), e.forEach(e => e.classList.remove(t.params.pagination.paginationDisabledClass))), b(), f(), p()
          },
          disable: y,
          render: f,
          update: p,
          init: b,
          destroy: h
        })
      }
    },
    20219(e, t, a) {
      "use strict";

      function s(e) {
        return void 0 === e && (e = ""), `.${e.trim().replace(/([\.:!+\/()[\]])/g,"\\$1").replace(/ /g,".")}`
      }
      a.d(t, {
        c: () => s
      })
    }
  }
]);