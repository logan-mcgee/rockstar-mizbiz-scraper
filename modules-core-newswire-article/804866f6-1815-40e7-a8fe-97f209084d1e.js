try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "804866f6-1815-40e7-a8fe-97f209084d1e", e._sentryDebugIdIdentifier = "sentry-dbid-804866f6-1815-40e7-a8fe-97f209084d1e")
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
  [4453], {
    73951(e, t, r) {
      "use strict";
      r.r(t), r.d(t, {
        Root: () => N,
        Text: () => R
      });
      var i = r(39793),
        a = r(93082),
        n = r(30377),
        s = r(23293);
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
        x = e => () => {
          e.active || (e.active = !0, c())
        },
        v = e => () => e.active = !1,
        k = {
          minSize: 16,
          maxSize: 512,
          multiLine: !0,
          observeMutations: {
            subtree: !0,
            childList: !0,
            characterData: !0
          }
        };

      function z(e, t) {
        const r = {
          ...k,
          ...t
        };
        r.minSize = Number.isFinite(r.minSize) && r.minSize > 0 ? r.minSize : k.minSize, r.maxSize = Number.isFinite(r.maxSize) && r.maxSize > 0 ? r.maxSize : k.maxSize;
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
            unfreeze: x(t),
            freeze: v(t),
            unsubscribe: S(t)
          }
        });
        return c(), i
      }

      function _(e, t = {}) {
        return "string" == typeof e ? z((r = document.querySelectorAll(e), [].slice.call(r)), t) : z([e], t)[0];
        var r
      }
      let M;
      const E = () => {
          window.clearTimeout(M), M = window.setTimeout(d(2), _.observeWindowDelay)
        },
        j = ["resize", "orientationchange"];
      Object.defineProperty(_, "observeWindow", {
        set: e => {
          j.forEach(t => {
            e ? window.addEventListener(t, E) : window.removeEventListener(t, E)
          })
        }
      }), _.observeWindow = !0, _.observeWindowDelay = 100, _.fitAll = d(3);
      const C = _;
      var T = r(94736);
      const F = (0, a.createContext)({
          rootRef: (0, a.createRef)(),
          min: 0,
          max: 0,
          mode: "single"
        }),
        N = (0, a.forwardRef)(function({
          min: e = 1,
          max: t = 100,
          mode: r = "multi",
          asChild: o,
          testId: l,
          ...c
        }, d) {
          const m = (0, a.useRef)(null),
            u = (0, T.UP)(m, d),
            f = (0, s.v6)({
              "data-testid": l
            }, c),
            p = o ? n.DX : "div";
          return (0, i.jsx)(F.Provider, {
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
        R = (0, a.forwardRef)(function({
          asChild: e,
          testId: t,
          ...r
        }, o) {
          const {
            rootRef: l,
            min: c,
            max: d,
            mode: m
          } = (0, a.useContext)(F), u = (0, a.useRef)(null), f = (0, a.useRef)(null);
          (0, a.useEffect)(() => (f.current = C(u.current, {
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
          const p = (0, T.UP)(u, o),
            b = (0, s.v6)({
              className: "p5vfye0",
              "data-testid": t
            }, r),
            g = e ? n.DX : "div";
          return (0, i.jsx)(g, {
            ref: p,
            ...b
          })
        })
    },
    76862(e, t, r) {
      "use strict";
      r.d(t, {
        A: () => l
      });
      var i = r(39793),
        a = r(95967),
        n = r(73951);
      const s = {
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
              className: `${s.badge} ${t?s[t]:""} `,
              children: e
            }),
            children: [(0, i.jsx)(i.Fragment, {
              children: l && (0, i.jsx)(a.A, {
                image: {
                  alt: l,
                  desktop: r(65287)(`./${l}.png`)
                }
              })
            }), (0, i.jsx)(n.Root, {
              className: `${c||l?"":s.badge} ${t?s[t]:""}`,
              min: 8,
              max: 1e3,
              mode: c || l ? "single" : "multi",
              children: (0, i.jsx)(n.Text, {
                children: d[0]
              })
            }), (0, i.jsx)(i.Fragment, {
              children: d.shift() && c && d.length >= 1 && (0, i.jsx)(n.Root, {
                min: 8,
                max: 1e3,
                mode: "single",
                children: (0, i.jsx)(n.Text, {
                  children: d.join(" ")
                })
              })
            })]
          }, "badge-wrapper")
        }
    },
    44453(e, t, r) {
      "use strict";
      r.d(t, {
        A: () => d
      });
      var i = r(39793),
        a = r(93082),
        n = r(13331),
        s = r(81270),
        o = r(76862),
        l = r(95967);
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
            y = (0, n.isEmptyMarkup)(m?.caption ?? "");
          return (0, i.jsx)(c, {
            hero: g,
            children: (0, i.jsx)("figure", {
              children: (0, i.jsxs)("div", {
                className: (0, s.default)("rockstargames-modules-core-newswire-articled9ac792281efe15bcd4589b028d1c27b", g ? "rockstargames-modules-core-newswire-articlee430c4662cd185f58259d4a8d8b322de" : "", p?.hiddenMobile ? "hiddenMobile" : "", p?.hiddenLarge ? "hiddenLarge" : "", p?.className, f),
                style: (0, n.safeStyles)({
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
    95967(e, t, r) {
      "use strict";
      r.d(t, {
        A: () => l
      });
      var i = r(39793),
        a = r(25993),
        n = r(13331);
      const s = ({
          alt: e,
          className: t,
          src: a,
          role: s,
          style: o
        }) => {
          const [l, c] = (0, n.usePreloadImg)(a);
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
            role: s
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
          } = (0, a.S1)(l);
          const {
            isMobile: f
          } = (0, n.useWindowResize)(), p = f ? u.imageMobileStyle : u.imageDesktopStyle;
          u.desktop || u.mobile || (m = "", u = {
            mobile: r(28839),
            desktop: r(9333)
          });
          let b = l.frame ? `${l.frame} ${o}` : o;
          return (0, i.jsx)("div", {
            className: b,
            style: t,
            children: (0, i.jsx)(s, {
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
    54563(e, t, r) {
      "use strict";
      r.d(t, {
        i: () => l,
        o: () => o
      });
      var i = r(39793),
        a = r(93082);
      const n = (0, r(13331).setContextItem)({
          context: (0, a.createContext)(),
          key: "tinaPayloadContext"
        }),
        {
          Provider: s
        } = n,
        o = ({
          children: e,
          payload: t
        }) => (0, i.jsx)(s, {
          value: t,
          children: e
        }),
        l = () => (0, a.useContext)(n)
    },
    25993(e, t, r) {
      "use strict";
      r.d(t, {
        C1: () => l,
        S1: () => o,
        XC: () => u,
        jS: () => c,
        qg: () => d,
        z0: () => m
      });
      var i = r(93082),
        a = r(13331),
        n = r(54563);
      const s = e => {
          if (!e) return null;
          const {
            hostname: t,
            pathname: r
          } = new URL(e, (0, a.getCdnPrefix)(!0));
          return "/" === r ? null : (t.endsWith(".akamaized.net"), e)
        },
        o = ({
          alt: e = null,
          mobile: t = null,
          imageMobileStyle: r = {},
          desktop: o = null,
          imageDesktopStyle: l = {},
          ariaLabel: c = null,
          sources: d = null,
          prod: m = null
        }) => {
          const u = (0, a.useLocale)(),
            {
              meta: f = {}
            } = (0, n.i)() ?? {},
            [p, b] = (0, i.useState)(m ?? f?.cdn ?? f?.prod ?? !0);
          (0, i.useEffect)(() => {
            b(m ?? f?.cdn ?? f?.prod ?? !0)
          }, [m, f]);
          const g = (0, i.useCallback)(e => {
            const t = null !== d,
              r = e?.previewSrc ?? e ?? null;
            if (null === r || "string" != typeof r) return null;
            if (r.startsWith("http")) return s(r);
            const i = `${t?(0,a.getCdnPrefix)(p):""}${r}`;
            return s(i)
          }, [p, d]);
          return {
            alt: e,
            ariaLabel: c,
            src: {
              mobile: g(d?.[u]?.mobile ?? d?.en_us?.mobile ?? t),
              imageMobileStyle: d?.[u]?.imageMobileStyle ?? d?.en_us?.imageMobileStyle ?? r,
              imageDesktopStyle: d?.[u]?.imageDesktopStyle ?? d?.en_us?.imageDesktopStyle ?? l,
              desktop: g(d?.[u]?.desktop ?? d?.en_us?.desktop ?? o)
            }
          }
        },
        l = e => {
          const t = (0, n.i)() ?? {},
            {
              meta: r = {}
            } = t,
            [o, l] = (0, i.useState)(r?.cdn ?? r?.prod ?? !1);
          return (0, i.useEffect)(() => {
            l(r?.cdn ?? r?.prod ?? !1)
          }, [r]), e ? e?.startsWith("http") ? s(e) : s(`${(0,a.getCdnPrefix)(o)}${e}`) : null
        },
        c = () => {
          const e = (0, n.i)() ?? {},
            {
              meta: t = {}
            } = e,
            r = (0, i.useMemo)(() => t?.cdn ?? t?.prod ?? !1, [t]);
          return (0, i.useCallback)((e, t = {}) => {
            const i = t?.prod ?? r;
            return e ? e?.startsWith("http") ? s(e) : s(`${(0,a.getCdnPrefix)(i)}${e}`) : null
          }, [r])
        },
        d = e => e.full_src,
        m = e => {
          const t = e?.previewSrc ?? e?.preview_src ?? e;
          return t?.startsWith("http") ? t : `${(0,a.getCdnPrefix)(!1)}${t}`
        },
        u = e => e.meta.uploads_directory
    },
    65287(e, t, r) {
      var i = {
        "./bounty.png": 7502,
        "./collector.png": 24970,
        "./moonshiner.png": 2661,
        "./naturalist.png": 16386,
        "./trader.png": 38635
      };

      function a(e) {
        var t = n(e);
        return r(t)
      }

      function n(e) {
        if (!r.o(i, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        }
        return i[e]
      }
      a.keys = function() {
        return Object.keys(i)
      }, a.resolve = n, e.exports = a, a.id = 65287
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