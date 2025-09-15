try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "d01d6186-87d5-4d4c-bd31-47417e385e26", e._sentryDebugIdIdentifier = "sentry-dbid-d01d6186-87d5-4d4c-bd31-47417e385e26")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "7e6a862245c0f03cf7f976b07fd639dca846e391",
    packageName: "@rockstargames/modules-core-newswire-article",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "7e6a862245c0f03cf7f976b07fd639dca846e391"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [884, 8503], {
    2661: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4639a2711d1bca49a87c302784050ee3.png"
    },
    2906: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var a = Object.assign || function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a])
          }
          return e
        },
        s = function() {
          function e(e, t) {
            for (var r = 0; r < t.length; r++) {
              var a = t[r];
              a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
            }
          }
          return function(t, r, a) {
            return r && e(t.prototype, r), a && e(t, a), t
          }
        }(),
        n = f(r(62229)),
        i = f(r(97465)),
        o = f(r(11524)),
        c = f(r(52321)),
        d = f(r(92701)),
        l = f(r(51364)),
        u = f(r(34738)),
        m = r(96143);

      function f(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function p(e, t) {
        return e.scrollWidth - 1 <= t
      }

      function g(e, t) {
        return e.scrollHeight - 1 <= t
      }
      var b = function(e) {
        function t(e) {
          ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, t);
          var r = function(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
          }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          return r.state = {
            fontSize: null,
            ready: !1
          }, r.handleWindowResize = function() {
            r.process()
          }, "perfectFit" in e && console.warn("TextFit property perfectFit has been removed."), r.handleWindowResize = (0, l.default)(r.handleWindowResize, e.throttle), r
        }
        return function(e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, e), s(t, [{
          key: "componentDidMount",
          value: function() {
            this.props.autoResize && window.addEventListener("resize", this.handleWindowResize), this.process()
          }
        }, {
          key: "componentDidUpdate",
          value: function(e) {
            this.state.ready && ((0, o.default)(this.props, e) || this.process())
          }
        }, {
          key: "componentWillUnmount",
          value: function() {
            this.props.autoResize && window.removeEventListener("resize", this.handleWindowResize), this.pid = (0, u.default)()
          }
        }, {
          key: "process",
          value: function() {
            var e = this,
              t = this.props,
              r = t.min,
              a = t.max,
              s = t.mode,
              n = t.forceSingleModeWidth,
              i = t.onReady,
              o = this._parent,
              l = this._child,
              f = (0, m.innerWidth)(o),
              b = (0, m.innerHeight)(o);
            if (b <= 0 || isNaN(b)) console.warn("Can not process element without height. Make sure the element is displayed and has a static height.");
            else if (f <= 0 || isNaN(f)) console.warn("Can not process element without width. Make sure the element is displayed and has a static width.");
            else {
              var h = (0, u.default)();
              this.pid = h;
              var w = function() {
                  return h !== e.pid
                },
                y = "multi" === s ? function() {
                  return g(l, b)
                } : function() {
                  return p(l, f)
                },
                k = "multi" === s ? function() {
                  return p(l, f)
                } : function() {
                  return g(l, b)
                },
                x = void 0,
                v = r,
                j = a;
              this.setState({
                ready: !1
              }), (0, c.default)([function(t) {
                return (0, d.default)((function() {
                  return v <= j
                }), (function(t) {
                  if (w()) return t(!0);
                  x = parseInt((v + j) / 2, 10), e.setState({
                    fontSize: x
                  }, (function() {
                    return w() ? t(!0) : (y() ? v = x + 1 : j = x - 1, t())
                  }))
                }), t)
              }, function(t) {
                return "single" === s && n || k() ? t() : (v = r, j = x, (0, d.default)((function() {
                  return v < j
                }), (function(t) {
                  if (w()) return t(!0);
                  x = parseInt((v + j) / 2, 10), e.setState({
                    fontSize: x
                  }, (function() {
                    return h !== e.pid ? t(!0) : (k() ? v = x + 1 : j = x - 1, t())
                  }))
                }), t))
              }, function(t) {
                if (x = Math.min(v, j), x = Math.max(x, r), x = Math.min(x, a), x = Math.max(x, 0), w()) return t(!0);
                e.setState({
                  fontSize: x
                }, t)
              }], (function(t) {
                t || w() || e.setState({
                  ready: !0
                }, (function() {
                  return i(x)
                }))
              }))
            }
          }
        }, {
          key: "render",
          value: function() {
            var e = this,
              t = this.props,
              r = t.children,
              s = t.text,
              i = t.style,
              o = (t.min, t.max, t.mode),
              c = (t.forceWidth, t.forceSingleModeWidth, t.throttle, t.autoResize, t.onReady, function(e, t) {
                var r = {};
                for (var a in e) t.indexOf(a) >= 0 || Object.prototype.hasOwnProperty.call(e, a) && (r[a] = e[a]);
                return r
              }(t, ["children", "text", "style", "min", "max", "mode", "forceWidth", "forceSingleModeWidth", "throttle", "autoResize", "onReady"])),
              d = this.state,
              l = d.fontSize,
              u = d.ready,
              m = a({}, i, {
                fontSize: l
              }),
              f = {
                display: u ? "block" : "inline-block"
              };
            return "single" === o && (f.whiteSpace = "nowrap"), n.default.createElement("div", a({
              ref: function(t) {
                return e._parent = t
              },
              style: m
            }, c), n.default.createElement("div", {
              ref: function(t) {
                return e._child = t
              },
              style: f
            }, s && "function" == typeof r ? u ? r(s) : s : r))
          }
        }]), t
      }(n.default.Component);
      b.propTypes = {
        children: i.default.node,
        text: i.default.string,
        min: i.default.number,
        max: i.default.number,
        mode: i.default.oneOf(["single", "multi"]),
        forceSingleModeWidth: i.default.bool,
        throttle: i.default.number,
        onReady: i.default.func
      }, b.defaultProps = {
        min: 1,
        max: 100,
        mode: "multi",
        forceSingleModeWidth: !0,
        throttle: 50,
        autoResize: !0,
        onReady: function() {}
      }, t.default = b
    },
    4407: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => c
      });
      var a = r(42295),
        s = r(34725),
        n = r(95966);
      const i = "rockstargames-modules-core-newswire-articlec8dc03880ce2e12f3fdea5b5b587f27f",
        o = ({
          alt: e,
          className: t,
          src: s,
          style: i
        }) => {
          const [o, c] = (0, n.usePreloadImg)(s);
          let d = s;
          !1 === o && ("rockstargames-modules-core-newswire-articlea6a06e2d5c4f1811ea39d17312ca2e67" === t && (d = r(28839)), d = r(9333));
          const {
            width: l,
            height: u
          } = c, m = {
            "--aspect-ratio": Number.isNaN(l / u) ? "" : l / u,
            ...i
          };
          return (0, a.jsx)("img", {
            src: d,
            className: t ?? "",
            alt: e,
            style: m
          })
        },
        c = ({
          className: e,
          style: t = {},
          image: c = {},
          imageStyle: d = {}
        }) => {
          let {
            alt: l,
            src: u
          } = (0, s.S1)(c);
          const {
            isMobile: m
          } = (0, n.useWindowResize)();
          u.desktop || u.mobile || (l = "", u = {
            mobile: r(28839),
            desktop: r(9333)
          });
          let f = c.frame ? `${c.frame} ${i}` : i;
          return (0, a.jsx)("div", {
            className: f,
            style: t,
            children: (0, a.jsx)(o, {
              style: {
                ...d,
                ...c?.style
              },
              src: m ? u.mobile || u.desktop : u?.desktop || u?.mobile,
              alt: l,
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
    10632: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => u
      });
      var a = r(42295),
        s = r(62229),
        n = r(95966),
        i = r(4572),
        o = r.n(i),
        c = r(84927),
        d = r(4407);
      const l = ({
          hero: e,
          children: t
        }) => e ? (0, a.jsx)("div", {
          className: "rockstargames-modules-core-newswire-articlea429886d721550d02521f7f5c9de7f5b",
          children: t
        }) : t,
        u = ({
          badge: e = null,
          badgeType: t,
          discountTxt: r,
          splitter: i,
          image: u,
          style: m,
          className: f = "",
          attributes: p = {},
          role: g,
          hero: b = !1
        }) => {
          const h = (0, s.useMemo)((() => {
            if (u?.badge || u?.discountTxt || e || r) return (0, a.jsx)(c.A, {
              badge: u?.discountTxt ?? u?.badge ?? e ?? r,
              badgeType: t,
              splitter: u?.splitter ?? i,
              role: u?.role ?? g
            })
          }), [e, t, r, u, g, i]);
          return (0, a.jsx)(l, {
            hero: b,
            children: (0, a.jsx)("figure", {
              children: (0, a.jsxs)("div", {
                className: o()("rockstargames-modules-core-newswire-articled9ac792281efe15bcd4589b028d1c27b", b ? "rockstargames-modules-core-newswire-articlee430c4662cd185f58259d4a8d8b322de" : "", p?.hiddenMobile ? "hiddenMobile" : "", p?.hiddenLarge ? "hiddenLarge" : "", p?.className, f),
                style: (0, n.safeStyles)({
                  ...m,
                  ...p?.style
                }),
                ...p,
                children: [(0, a.jsx)(d.A, {
                  image: u,
                  className: f
                }), h, u?.caption && (0, a.jsx)("figcaption", {
                  dangerouslySetInnerHTML: {
                    __html: u.caption
                  }
                })]
              })
            })
          })
        }
    },
    11206: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => c
      });
      const a = {
        randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto)
      };
      let s;
      const n = new Uint8Array(16);

      function i() {
        if (!s && (s = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !s)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return s(n)
      }
      const o = [];
      for (let e = 0; e < 256; ++e) o.push((e + 256).toString(16).slice(1));
      const c = function(e, t, r) {
        if (a.randomUUID && !t && !e) return a.randomUUID();
        const s = (e = e || {}).random || (e.rng || i)();
        if (s[6] = 15 & s[6] | 64, s[8] = 63 & s[8] | 128, t) {
          r = r || 0;
          for (let e = 0; e < 16; ++e) t[r + e] = s[e];
          return t
        }
        return function(e, t = 0) {
          return o[e[t + 0]] + o[e[t + 1]] + o[e[t + 2]] + o[e[t + 3]] + "-" + o[e[t + 4]] + o[e[t + 5]] + "-" + o[e[t + 6]] + o[e[t + 7]] + "-" + o[e[t + 8]] + o[e[t + 9]] + "-" + o[e[t + 10]] + o[e[t + 11]] + o[e[t + 12]] + o[e[t + 13]] + o[e[t + 14]] + o[e[t + 15]]
        }(s)
      }
    },
    11524: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e, t) {
        if (e === t) return !0;
        var r = Object.keys(e),
          a = Object.keys(t);
        if (r.length !== a.length) return !1;
        for (var s = Object.prototype.hasOwnProperty, n = 0; n < r.length; n++)
          if (!s.call(t, r[n]) || e[r[n]] !== t[r[n]]) return !1;
        return !0
      }
    },
    16386: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/898794daaec68a69ef5ec4afaefe1948.png"
    },
    24769: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => p
      });
      var a = r(42295),
        s = r(62229),
        n = r(24162),
        i = r(11206),
        o = r(4572),
        c = r.n(o);
      const d = {
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
      var l = r(26708),
        u = r(10632);
      const m = ({
          item: e
        }) => (0, a.jsxs)("div", {
          children: [(0, a.jsx)(u.A, {
            image: e?.image,
            badge: e?.badge ?? e?.image?.badge,
            badgeType: "badge3",
            role: e?.role ?? e?.image?.role,
            splitter: e?.splitter ?? e?.image?.splitter,
            type: e?.type,
            ariaLabel: e?.image?.ariaLabel ?? e.description,
            style: e?.style,
            className: c()(d.img, e?.className)
          }), (e?.title || e?.description) && (0, a.jsx)(l.A, {
            item: e
          })]
        }),
        f = ({
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
        p = ({
          children: e,
          items: t = [],
          style: r = {},
          noInfiniteScroll: o = !1,
          className: u = "",
          renderTemplate: p = "standard",
          text: g,
          customSpaceBetween: b = null,
          centerSlides: h = !0,
          centeredSlidesBounds: w = !1
        }) => {
          const [y, k] = (0, s.useState)(0), x = (0, s.useMemo)((() => e && Array.isArray(e) ? e.map((() => (0, i.A)())) : null), [e]);
          if (!(t && 0 !== t?.length || e)) return null;
          const v = {
            0: {
              spaceBetween: b ?? 16
            },
            1024: {
              spaceBetween: b ?? 18
            },
            1920: {
              spaceBetween: b ?? 20
            },
            2560: {
              spaceBetween: b ?? 22
            }
          };
          return (0, a.jsxs)("div", {
            className: c()(d.deprecatedCarousel, d[p], d[`infinite_${!o}`], e ? d.renderedWithChildren : "", u),
            style: r,
            children: [(0, a.jsxs)(n.RC, {
              loop: !o,
              grabCursor: !0,
              centeredSlides: h,
              centerInsufficientSlides: h,
              slidesPerView: "auto",
              speed: 700,
              breakpoints: v,
              onUpdate: () => k(0),
              onActiveIndexChange: e => k(e?.realIndex ?? 0),
              centeredSlidesBounds: w,
              children: [(0, a.jsx)("div", {
                className: d.trackWrapper,
                children: (0, a.jsxs)("div", {
                  className: d.track,
                  children: [t?.map((e => (0, a.jsx)(n.qr, {
                    children: (0, a.jsx)(m, {
                      item: e
                    })
                  }, e.key))), e && e.map(((e, t) => e && (0, a.jsx)(n.qr, {
                    children: e
                  }, x && x[t])))]
                })
              }), (0, a.jsx)(f, {
                current: y,
                total: e ? e.length : t.length
              })]
            }), (g?.title || g?.description) && (0, a.jsx)(l.A, {
              item: g
            })]
          })
        }
    },
    24970: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e111377ba943e9eefaa9204f77c77093.png"
    },
    26708: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => u
      });
      var a = r(42295),
        s = r(4572),
        n = r.n(s),
        i = r(4407),
        o = r(93935),
        c = r(79704);
      const d = "rockstargames-modules-core-newswire-articleacd27eff2209196752622710f7b27558",
        l = ({
          to: e,
          children: t
        }) => e ? (0, a.jsx)("a", {
          href: e,
          target: "_blank",
          rel: "noreferrer",
          children: t
        }) : t,
        u = ({
          item: e,
          className: t = ""
        }) => (0, a.jsxs)("div", {
          className: n()("rockstargames-modules-core-newswire-articlef8bc9589974046cdac4a2264be12d2df", t),
          children: [e.title && (0, a.jsx)(l, {
            to: e?.href ?? e?.to,
            children: (0, a.jsx)("h3", {
              children: e.title
            })
          }), Array.isArray(e?.description?.content) ? e.description.content?.map(((e, t) => e?.unorderedList ? (0, a.jsx)(o.A, {
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
            children: (0, a.jsx)(c.A, {})
          }, t) : (0, a.jsx)("p", {
            children: (0, a.jsx)("span", {
              className: d,
              dangerouslySetInnerHTML: {
                __html: e
              }
            })
          }, t))) : (0, a.jsx)("span", {
            className: d,
            dangerouslySetInnerHTML: {
              __html: e.description
            }
          })]
        })
    },
    28839: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61ae357c3bfbabb5d765e9a7c794d08f.png"
    },
    34725: (e, t, r) => {
      "use strict";
      r.d(t, {
        C1: () => c,
        S1: () => o,
        XC: () => m,
        jS: () => d,
        qg: () => l,
        z0: () => u
      });
      var a = r(62229),
        s = r(95966),
        n = r(74767);
      const i = e => {
          if (!e) return null;
          const {
            hostname: t,
            pathname: r
          } = new URL(e, (0, s.getCdnPrefix)(!0));
          return "/" === r ? null : (t.endsWith(".akamaized.net"), e)
        },
        o = ({
          alt: e = null,
          mobile: t = null,
          desktop: r = null,
          ariaLabel: o = null,
          sources: c = null,
          prod: d = null
        }) => {
          const l = (0, s.useLocale)(),
            {
              meta: u = {}
            } = (0, n.i)() ?? {},
            [m, f] = (0, a.useState)(d ?? u?.cdn ?? u?.prod ?? !0);
          (0, a.useEffect)((() => {
            f(d ?? u?.cdn ?? u?.prod ?? !0)
          }), [d, u]);
          const p = (0, a.useCallback)((e => {
            const t = null !== c,
              r = e?.previewSrc ?? e ?? null;
            if (null === r || "string" != typeof r) return null;
            if (r.startsWith("http")) return i(r);
            const a = `${t?(0,s.getCdnPrefix)(m):""}${r}`;
            return i(a)
          }), [m, c]);
          return {
            alt: e,
            ariaLabel: o,
            src: {
              mobile: p(c?.[l]?.mobile ?? c?.en_us?.mobile ?? t),
              desktop: p(c?.[l]?.desktop ?? c?.en_us?.desktop ?? r)
            }
          }
        },
        c = e => {
          const t = (0, n.i)() ?? {},
            {
              meta: r = {}
            } = t,
            [o, c] = (0, a.useState)(r?.cdn ?? r?.prod ?? !1);
          return (0, a.useEffect)((() => {
            c(r?.cdn ?? r?.prod ?? !1)
          }), [r]), e ? e?.startsWith("http") ? i(e) : i(`${(0,s.getCdnPrefix)(o)}${e}`) : null
        },
        d = () => {
          const e = (0, n.i)() ?? {},
            {
              meta: t = {}
            } = e,
            r = (0, a.useMemo)((() => t?.cdn ?? t?.prod ?? !1), [t]);
          return (0, a.useCallback)(((e, t = {}) => {
            const a = t?.prod ?? r;
            return e ? e?.startsWith("http") ? i(e) : i(`${(0,s.getCdnPrefix)(a)}${e}`) : null
          }), [r])
        },
        l = e => e.full_src,
        u = e => {
          const t = e?.previewSrc ?? e?.preview_src ?? e;
          return t?.startsWith("http") ? t : `${(0,s.getCdnPrefix)(!1)}${t}`
        },
        m = e => e.meta.uploads_directory
    },
    34738: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function() {
        return r++
      };
      var r = 0
    },
    38635: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6e77bb0f25a6ea37e8d831b12df9fa3c.png"
    },
    51364: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e, t) {
        var r = void 0,
          a = void 0,
          s = void 0,
          n = void 0,
          i = 0;

        function o() {
          n = 0, i = +new Date, s = e.apply(r, a), r = null, a = null
        }
        return function() {
          r = this, a = arguments;
          var e = new Date - i;
          return n || (e >= t ? o() : n = setTimeout(o, t - e)), s
        }
      }
    },
    52321: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e, t) {
        var r = [],
          a = 0,
          n = !0;

        function i(e) {
          function a() {
            t && t(e, r)
          }
          n ? s.default.nextTick(a) : a()
        }
        e.length > 0 ? e[0]((function t(s, n) {
          r.push(n), ++a >= e.length || s ? i(s) : e[a](t)
        })) : i(null), n = !1
      };
      var a, s = (a = r(42649)) && a.__esModule ? a : {
        default: a
      }
    },
    55322: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => i
      });
      var a = r(42295),
        s = r(62229),
        n = r(64740);
      const i = ({
        children: e,
        ...t
      }) => {
        const [r, i] = (0, s.useState)(!1);
        return (0, a.jsx)(n.zb, {
          ...t,
          onReady: () => {
            document.fonts.ready.then((() => {
              i(!0)
            }))
          },
          children: e
        })
      }
    },
    64740: (e, t, r) => {
      "use strict";
      t.zb = void 0;
      var a, s = (a = r(2906)) && a.__esModule ? a : {
        default: a
      };
      t.zb = s.default, s.default
    },
    65287: (e, t, r) => {
      var a = {
        "./bounty.png": 7502,
        "./collector.png": 24970,
        "./moonshiner.png": 2661,
        "./naturalist.png": 16386,
        "./trader.png": 38635
      };

      function s(e) {
        var t = n(e);
        return r(t)
      }

      function n(e) {
        if (!r.o(a, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        }
        return a[e]
      }
      s.keys = function() {
        return Object.keys(a)
      }, s.resolve = n, e.exports = s, s.id = 65287
    },
    74767: (e, t, r) => {
      "use strict";
      r.d(t, {
        i: () => c,
        o: () => o
      });
      var a = r(42295),
        s = r(62229);
      const n = (0, r(95966).setContextItem)({
          context: (0, s.createContext)(),
          key: "tinaPayloadContext"
        }),
        {
          Provider: i
        } = n,
        o = ({
          children: e,
          payload: t
        }) => (0, a.jsx)(i, {
          value: t,
          children: e
        }),
        c = () => (0, s.useContext)(n)
    },
    79704: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => n
      });
      var a = r(42295);
      const s = {
          gtao: "rockstargames-modules-core-newswire-articlef66c75c6e882da85fef31e4211ca0be2",
          hr: "rockstargames-modules-core-newswire-articledc7b1bc141e132d4ee9b7bf9d55c573a",
          redLine: "rockstargames-modules-core-newswire-articled4d968b41ef87926b0b6318e8647738b"
        },
        n = ({
          style: e,
          className: t = "",
          type: r = ""
        }) => (0, a.jsx)("div", {
          style: e,
          className: [s.hr, s[r], t].join(" ")
        })
    },
    84927: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => c
      });
      var a = r(42295),
        s = r(4407),
        n = r(55322);
      const i = {
          badge: "rockstargames-modules-core-newswire-articleb7268b0e907630904b6689af83fee8e3",
          badge2: "rockstargames-modules-core-newswire-articled08ce7145bc9562355a3984f8ccc9313",
          badge3: "rockstargames-modules-core-newswire-articlec7c60cfb12b6e9be68893c60814b3ed7",
          badgeSizeUpdate: "rockstargames-modules-core-newswire-articlece8632d7464b556158a1d549f653498c"
        },
        o = ({
          wrapper: e,
          children: t,
          role: r,
          splitter: a
        }) => a || r ? e(t) : t,
        c = ({
          badge: e,
          badgeType: t,
          role: c,
          splitter: d
        }) => {
          const l = [];
          return d ? e.split(d).map(((e, t) => l.push(e))) : l.push(e), (0, a.jsxs)(o, {
            splitter: d,
            role: c,
            wrapper: e => (0, a.jsx)("div", {
              className: `${i.badge} ${t?i[t]:""} `,
              children: e
            }),
            children: [(0, a.jsx)(a.Fragment, {
              children: c && (0, a.jsx)(s.A, {
                image: {
                  alt: c,
                  desktop: r(65287)(`./${c}.png`)
                }
              })
            }), (0, a.jsx)(n.A, {
              className: `${d||c?"":i.badge} ${t?i[t]:""}`,
              min: 8,
              max: 1e3,
              mode: d || c ? "single" : "multi",
              children: l[0]
            }), (0, a.jsx)(a.Fragment, {
              children: l.shift() && d && l.length >= 1 && (0, a.jsx)(n.A, {
                min: 8,
                max: 1e3,
                mode: "single",
                forceSingleModeWidth: !0,
                children: l.join(" ")
              })
            })]
          }, "badge-wrapper")
        }
    },
    90884: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, {
        default: () => y
      });
      var a = r(42295),
        s = r(26708),
        n = r(10632),
        i = r(24769);
      const o = {
          carouselTitle: "rockstargames-modules-core-newswire-articlee9e0ef1bfc3699b1e50c33dd0ce8e76a",
          carouselWrapper: "rockstargames-modules-core-newswire-articlefabefc39343f6c494eb3d049757d89c5",
          padding: "rockstargames-modules-core-newswire-articleac767e959939b4d56b2358cb263d07ad"
        },
        c = ({
          to: e,
          children: t
        }) => e ? (0, a.jsx)("a", {
          href: e,
          target: "_blank",
          children: t
        }) : t,
        d = ({
          items: e = [],
          text: t = {},
          style: r,
          className: d = "",
          id: l = null
        }) => e?.length ? (0, a.jsxs)("div", {
          id: l,
          "data-testid": `carousel${d&&`-${d}`}-group-of-items`,
          children: [(0, a.jsx)(i.A, {
            style: r,
            className: [d, o.carouselWrapper].join(" "),
            children: e.map((e => (0, a.jsxs)("div", {
              id: e?.id ?? null,
              children: [(0, a.jsx)(n.A, {
                image: e?.image,
                badge: e?.badge ?? e?.image?.badge,
                badgeType: "badge3",
                role: e?.role ?? e?.image?.role,
                splitter: e?.splitter ?? e?.image?.splitter,
                type: e?.type,
                ariaLabel: e?.image?.ariaLabel ?? e.description,
                style: e?.style,
                className: [o.img, e?.className].join(" ")
              }), e.title && (0, a.jsx)(c, {
                to: e?.to,
                children: (0, a.jsx)("h4", {
                  className: o.carouselTitle,
                  children: e.title
                })
              }), e.description && (0, a.jsx)("span", {
                className: o.description,
                dangerouslySetInnerHTML: {
                  __html: e.description
                }
              })]
            }, e?.key ?? e?.title)))
          }), t?.title || t?.description ? (0, a.jsx)("div", {
            className: o.padding,
            style: t?.style ?? {},
            children: (0, a.jsx)(s.A, {
              item: t
            })
          }) : ""]
        }) : null;
      var l = r(31879),
        u = r.n(l),
        m = r(92440),
        f = r(4572),
        p = r.n(f);
      const g = ({
          impressionTracking: e,
          gtm: t = {},
          children: r
        }) => e?.shouldTrack ? (0, a.jsx)(m.InViewTracker, {
          threshold: e?.threshold,
          gtm: t,
          children: r
        }) : r,
        b = ({
          to: e,
          children: t
        }) => e ? (0, a.jsx)("a", {
          href: e,
          target: "_blank",
          rel: "noreferrer",
          children: t
        }) : t,
        h = ({
          item: e
        }) => e?.videoId ? (0, a.jsx)(u(), {
          context: "site",
          autoplay: !1,
          id: e.videoId
        }) : (0, a.jsx)(n.A, {
          image: e?.image,
          badge: e?.badge ?? e?.image?.badge,
          badgeType: "badge3",
          role: e?.role ?? e?.image?.role,
          splitter: e?.splitter ?? e?.image?.splitter,
          ariaLabel: e?.image?.ariaLabel,
          style: e?.style,
          className: e?.className
        }),
        w = ({
          items: e,
          style: t = {},
          className: r = "",
          id: n = null
        }) => (0, a.jsx)("div", {
          style: t,
          className: p()("rockstargames-modules-core-newswire-articled38af92e8657708abd3dc5295e62476c", r),
          id: n,
          "data-testid": "standard-group-of-items",
          children: e.map((e => (0, a.jsx)(g, {
            impressionTracking: e?.impressionTracking,
            gtm: e?.gtm,
            children: (0, a.jsx)(b, {
              to: e?.to,
              children: (0, a.jsxs)("div", {
                className: p()("rockstargames-modules-core-newswire-articlea9b63d3aa2f18fa6c84b19c8993a7893", e.className),
                style: e?.style ?? {},
                ...e?.props,
                children: [e?.image || e?.videoId ? (0, a.jsx)(h, {
                  item: e
                }) : "", e.title || e.description ? (0, a.jsx)(s.A, {
                  item: e,
                  className: "rockstargames-modules-core-newswire-articlebc47d354556b20071313d2c1ccc3debd"
                }) : ""]
              })
            })
          }, e.key)))
        }),
        y = ({
          children: e = null,
          text: t = {},
          items: r = [],
          renderTemplate: s = "",
          style: n = {},
          id: i = null,
          ...o
        }) => {
          if (!r.length) return null;
          switch (s) {
            case "carousel":
              return (0, a.jsx)(d, {
                text: t,
                items: r,
                style: n,
                id: i,
                children: e
              });
            case "carousel-panorama":
              return (0, a.jsx)(d, {
                text: t,
                items: r,
                style: n,
                className: "panorama",
                id: i,
                children: e
              });
            default:
              return (0, a.jsx)(w, {
                items: r,
                style: n,
                id: i,
                ...o,
                children: e
              })
          }
        }
    },
    92701: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e, t) {
        var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r;
        e() ? t((function r(s) {
          for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) i[o - 1] = arguments[o];
          s ? a(s) : e.apply(this, i) ? t(r) : a(null)
        })) : a(null)
      };
      var r = function() {}
    },
    93935: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => m
      });
      var a = r(42295),
        s = r(62229),
        n = r(2973),
        i = r.n(n),
        o = r(95966),
        c = r(4572),
        d = r.n(c);
      const l = {
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
          sanitize: u
        } = i(),
        m = ({
          list: e,
          string: t,
          starColor: r,
          style: n,
          className: i,
          game: c,
          noImg: m,
          columns: f,
          mobileColumns: p
        }) => {
          const [g, b] = (0, s.useState)(null), h = t ? t.split("_#_") : e;
          if ((0, s.useEffect)((() => {
              b(e)
            }), [e]), !t && !e) return null;
          const w = {
            color: n?.color
          };
          return delete n?.color, f && g ? (0, a.jsx)("div", {
            className: l.grid,
            style: {
              "--unordered-list-grid-column": f,
              "--unordered-list-grid-column-mobile": p ?? f
            },
            children: (0, a.jsx)("ul", {
              className: d()(l.itemList, l.noImg, l[r], l[c]),
              style: (0, o.safeStyles)(n),
              children: g.map(((e, t) => (0, a.jsx)("li", {
                style: w,
                dangerouslySetInnerHTML: {
                  __html: u(e.content)
                }
              }, t)))
            })
          }) : (0, a.jsx)("ul", {
            style: (0, o.safeStyles)(n),
            className: d()(l.itemList, l.custom, m ? l.noImg : "", r ? l[r] : "", c ? l[c] : "", i ?? ""),
            children: h.map(((e, t) => (0, a.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: u(e?.content ?? e)
              }
            }, t)))
          })
        }
    },
    96143: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.innerHeight = function(e) {
        var t = window.getComputedStyle(e, null);
        return t ? e.clientHeight - parseInt(t.getPropertyValue("padding-top"), 10) - parseInt(t.getPropertyValue("padding-bottom"), 10) : e.clientHeight
      }, t.innerWidth = function(e) {
        var t = window.getComputedStyle(e, null);
        return t ? e.clientWidth - parseInt(t.getPropertyValue("padding-left"), 10) - parseInt(t.getPropertyValue("padding-right"), 10) : e.clientWidth
      }
    }
  }
]);