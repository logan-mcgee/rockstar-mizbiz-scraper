try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "bc680e91-5a3e-48fb-95f7-126bbc1dee05", e._sentryDebugIdIdentifier = "sentry-dbid-bc680e91-5a3e-48fb-95f7-126bbc1dee05")
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
  [8769], {
    45742(e, t, r) {
      "use strict";
      r.r(t), r.d(t, {
        Root: () => R,
        Text: () => C
      });
      var i = r(39793),
        a = r(93082),
        s = r(69088),
        n = r(7912);
      let o = [],
        l = null;
      const c = "requestAnimationFrame" in window ? (e = {
          sync: !1
        }) => {
          null !== l && window.cancelAnimationFrame(l);
          const t = () => m(o.filter(e => e.dirty && e.active));
          if (e.sync) return t();
          l = window.requestAnimationFrame(t)
        } : () => {},
        d = e => t => {
          o.forEach(t => t.dirty = e), c(t)
        },
        m = e => {
          e.filter(e => !e.styleComputed).forEach(e => {
            e.styleComputed = b(e)
          }), e.filter(g).forEach(h);
          const t = e.filter(p);
          for (let e = 0; e < 2; e++) t.forEach(f), t.forEach(e => {
            h(e), u(e)
          }), t.forEach(y)
        },
        u = e => e.dirty = 0,
        f = e => {
          e.availableWidth = e.element.parentElement?.clientWidth, e.availableHeight = e.element.parentElement?.clientHeight, e.currentWidth = e.element.scrollWidth, e.currentHeight = e.element.scrollHeight, e.previousFontSize = e.currentFontSize, e.currentFontSize = Math.min(Math.min(Math.max(e.minSize, e.availableWidth / e.currentWidth * e.previousFontSize), e.maxSize), Math.min(Math.max(e.minSize, e.availableHeight / e.currentHeight * e.previousFontSize), e.maxSize)), e.whiteSpace = e.multiLine && e.currentFontSize === e.minSize ? "normal" : "nowrap"
        },
        p = e => 2 !== e.dirty || 2 === e.dirty && (e.element.parentElement?.clientWidth !== e.availableWidth || e.element.parentElement?.clientHeight !== e.availableHeight),
        b = e => {
          const t = window.getComputedStyle(e.element, null);
          return e.currentFontSize = parseFloat(t.getPropertyValue("font-size")), e.display = t.getPropertyValue("display"), e.whiteSpace = t.getPropertyValue("white-space"), !0
        },
        g = e => {
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
        w = (e, t) => r => {
          e.dirty = t, e.active && c(r)
        },
        S = e => () => {
          o = o.filter(t => t.element !== e.element), e.observeMutations && e.observer && e.observer.disconnect(), e.element.style.whiteSpace = e.originalStyle.whiteSpace, e.element.style.display = e.originalStyle.display, e.element.style.fontSize = e.originalStyle.fontSize
        },
        v = e => () => {
          e.active || (e.active = !0, c())
        },
        x = e => () => e.active = !1,
        z = {
          minSize: 16,
          maxSize: 512,
          multiLine: !0,
          observeMutations: {
            subtree: !0,
            childList: !0,
            characterData: !0
          }
        };

      function k(e, t) {
        const r = {
          ...z,
          ...t
        };
        r.minSize = Number.isFinite(r.minSize) && r.minSize > 0 ? r.minSize : z.minSize, r.maxSize = Number.isFinite(r.maxSize) && r.maxSize > 0 ? r.maxSize : z.maxSize;
        const i = e.map(e => {
          const t = {
            ...r,
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
            e.observeMutations && (e.observer = new MutationObserver(() => w(e, 1)()), e.observer.observe(e.element, e.observeMutations))
          })(t), o.push(t), {
            element: e,
            fit: w(t, 3),
            unfreeze: v(t),
            freeze: x(t),
            unsubscribe: S(t)
          }
        });
        return c(), i
      }

      function _(e, t = {}) {
        return "string" == typeof e ? k((r = document.querySelectorAll(e), [].slice.call(r)), t) : k([e], t)[0];
        var r
      }
      let E;
      const j = () => {
          window.clearTimeout(E), E = window.setTimeout(d(2), _.observeWindowDelay)
        },
        M = ["resize", "orientationchange"];
      Object.defineProperty(_, "observeWindow", {
        set: e => {
          M.forEach(t => {
            e ? window.addEventListener(t, j) : window.removeEventListener(t, j)
          })
        }
      }), _.observeWindow = !0, _.observeWindowDelay = 100, _.fitAll = d(3);
      const T = _;
      var F = r(56433);
      const N = (0, a.createContext)({
          rootRef: (0, a.createRef)(),
          min: 0,
          max: 0,
          mode: "single"
        }),
        R = (0, a.forwardRef)(function({
          min: e = 1,
          max: t = 100,
          mode: r = "multi",
          asChild: o,
          testId: l,
          ...c
        }, d) {
          const m = (0, a.useRef)(null),
            u = (0, F.UP)(m, d),
            f = (0, n.v6)({
              "data-testid": l
            }, c),
            p = o ? s.DX : "div";
          return (0, i.jsx)(N.Provider, {
            value: {
              rootRef: m,
              min: e,
              max: t,
              mode: r
            },
            children: (0, i.jsx)(p, {
              ref: u,
              ...f
            })
          })
        }),
        C = (0, a.forwardRef)(function({
          asChild: e,
          testId: t,
          ...r
        }, o) {
          const {
            rootRef: l,
            min: c,
            max: d,
            mode: m
          } = (0, a.useContext)(N), u = (0, a.useRef)(null), f = (0, a.useRef)(null);
          (0, a.useEffect)(() => (f.current = T(u.current, {
            minSize: c,
            maxSize: d,
            multiLine: "multi" === m
          }), () => f.current.unsubscribe()), [c, d, m]), (0, a.useEffect)(() => {
            if (null === l.current || null === f.current) return;
            const e = new ResizeObserver(() => {
              f.current.fit()
            });
            return e.observe(l.current), () => e.disconnect()
          }, [l, f]), (0, a.useEffect)(() => {
            document.fonts.ready.then(() => f.current && f.current.fit())
          }, []);
          const p = (0, F.UP)(u, o),
            b = (0, n.v6)({
              className: "p5vfye0",
              "data-testid": t
            }, r),
            g = e ? s.DX : "div";
          return (0, i.jsx)(g, {
            ref: p,
            ...b
          })
        })
    },
    97990(e, t, r) {
      "use strict";
      r.d(t, {
        A: () => l
      });
      var i = r(39793),
        a = r(62012),
        s = r(45742);
      const n = {
          badge: "rockstargames-modules-core-newswire-articleb7268b0e907630904b6689af83fee8e3",
          badge2: "rockstargames-modules-core-newswire-articled08ce7145bc9562355a3984f8ccc9313",
          badge3: "rockstargames-modules-core-newswire-articlec7c60cfb12b6e9be68893c60814b3ed7",
          badgeSizeUpdate: "rockstargames-modules-core-newswire-articlece8632d7464b556158a1d549f653498c"
        },
        o = ({
          wrapper: e,
          children: t,
          role: r,
          splitter: i
        }) => i || r ? e(t) : t,
        l = ({
          badge: e,
          badgeType: t,
          role: l,
          splitter: c
        }) => {
          const d = [];
          return c ? e.split(c).map(e => d.push(e)) : d.push(e), (0, i.jsxs)(o, {
            splitter: c,
            role: l,
            wrapper: e => (0, i.jsx)("div", {
              className: `${n.badge} ${t?n[t]:""} `,
              children: e
            }),
            children: [(0, i.jsx)(i.Fragment, {
              children: l && (0, i.jsx)(a.A, {
                image: {
                  alt: l,
                  desktop: r(65287)(`./${l}.png`)
                }
              })
            }), (0, i.jsx)(s.Root, {
              className: `${c||l?"":n.badge} ${t?n[t]:""}`,
              min: 8,
              max: 1e3,
              mode: c || l ? "single" : "multi",
              children: (0, i.jsx)(s.Text, {
                children: d[0]
              })
            }), (0, i.jsx)(i.Fragment, {
              children: d.shift() && c && d.length >= 1 && (0, i.jsx)(s.Root, {
                min: 8,
                max: 1e3,
                mode: "single",
                children: (0, i.jsx)(s.Text, {
                  children: d.join(" ")
                })
              })
            })]
          }, "badge-wrapper")
        }
    },
    98769(e, t, r) {
      "use strict";
      r.d(t, {
        A: () => d
      });
      var i = r(39793),
        a = r(93082),
        s = r(13331),
        n = r(81270),
        o = r(97990),
        l = r(62012);
      const c = ({
          hero: e,
          children: t
        }) => e ? (0, i.jsx)("div", {
          className: "rockstargames-modules-core-newswire-articlea429886d721550d02521f7f5c9de7f5b",
          children: t
        }) : t,
        d = ({
          badge: e = null,
          badgeType: t,
          discountTxt: r,
          splitter: d,
          image: m,
          style: u,
          className: f = "",
          attributes: p = {},
          role: b,
          hero: g = !1
        }) => {
          const h = (0, a.useMemo)(() => {
              if (m?.badge || m?.discountTxt || e || r) return (0, i.jsx)(o.A, {
                badge: m?.discountTxt ?? m?.badge ?? e ?? r,
                badgeType: t,
                splitter: m?.splitter ?? d,
                role: m?.role ?? b
              })
            }, [e, t, r, m, b, d]),
            y = (0, s.isEmptyMarkup)(m?.caption ?? "");
          return (0, i.jsx)(c, {
            hero: g,
            children: (0, i.jsx)("figure", {
              children: (0, i.jsxs)("div", {
                className: (0, n.default)("rockstargames-modules-core-newswire-articled9ac792281efe15bcd4589b028d1c27b", g ? "rockstargames-modules-core-newswire-articlee430c4662cd185f58259d4a8d8b322de" : "", p?.hiddenMobile ? "hiddenMobile" : "", p?.hiddenLarge ? "hiddenLarge" : "", p?.className, f),
                style: (0, s.safeStyles)({
                  ...u,
                  ...p?.style
                }),
                ...p,
                children: [(0, i.jsx)(l.A, {
                  role: m?.accessibleRole,
                  image: m,
                  className: f
                }), h, !y && (0, i.jsx)("figcaption", {
                  dangerouslySetInnerHTML: {
                    __html: m.caption
                  }
                })]
              })
            })
          })
        }
    },
    62012(e, t, r) {
      "use strict";
      r.d(t, {
        A: () => l
      });
      var i = r(39793),
        a = r(17301),
        s = r(13331);
      const n = ({
          alt: e,
          className: t,
          src: a,
          role: n,
          style: o
        }) => {
          const [l, c] = (0, s.usePreloadImg)(a);
          let d = a;
          !1 === l && (d = r(9333));
          const {
            width: m,
            height: u
          } = c, f = {
            "--aspect-ratio": Number.isNaN(m / u) ? "" : m / u,
            ...o
          };
          return (0, i.jsx)("img", {
            src: d,
            className: t ?? "",
            alt: e,
            style: f,
            role: n
          })
        },
        o = "rockstargames-modules-core-newswire-articlec8dc03880ce2e12f3fdea5b5b587f27f",
        l = ({
          className: e,
          style: t = {},
          image: l = {},
          imageStyle: c = {},
          role: d = "img"
        }) => {
          let {
            alt: m,
            src: u
          } = (0, a.useImageParser)(l);
          const {
            isMobile: f
          } = (0, s.useWindowResize)(), p = f ? u.imageMobileStyle : u.imageDesktopStyle;
          u.desktop || u.mobile || (m = "", u = {
            mobile: r(28839),
            desktop: r(9333)
          });
          let b = l.frame ? `${l.frame} ${o}` : o;
          return (0, i.jsx)("div", {
            className: b,
            style: t,
            children: (0, i.jsx)(n, {
              style: {
                ...c,
                ...l?.style,
                ...p
              },
              src: f ? u.mobile || u.desktop : u?.desktop || u?.mobile,
              alt: m,
              role: d,
              className: e
            })
          })
        }
    },
    65287(e, t, r) {
      const i = {
        "./bounty.png": 7502,
        "./collector.png": 24970,
        "./moonshiner.png": 2661,
        "./naturalist.png": 16386,
        "./trader.png": 38635
      };

      function a(e) {
        const t = s(e);
        return r(t)
      }

      function s(e) {
        if (!r.o(i, e)) {
          const t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        }
        return i[e]
      }
      a.keys = function() {
        return Object.keys(i)
      }, a.resolve = s, e.exports = a, a.id = 65287
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