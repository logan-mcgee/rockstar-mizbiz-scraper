try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "6eceee53-c331-4bfb-b6f2-04afafee5af2", e._sentryDebugIdIdentifier = "sentry-dbid-6eceee53-c331-4bfb-b6f2-04afafee5af2")
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
  [884, 2649, 5030, 8503], {
    2661: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4639a2711d1bca49a87c302784050ee3.png"
    },
    2906: (e, t, a) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var s = Object.assign || function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = arguments[t];
            for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
          }
          return e
        },
        r = function() {
          function e(e, t) {
            for (var a = 0; a < t.length; a++) {
              var s = t[a];
              s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
            }
          }
          return function(t, a, s) {
            return a && e(t.prototype, a), s && e(t, s), t
          }
        }(),
        n = g(a(62229)),
        i = g(a(97465)),
        o = g(a(11524)),
        c = g(a(52321)),
        d = g(a(92701)),
        l = g(a(51364)),
        u = g(a(34738)),
        f = a(96143);

      function g(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function m(e, t) {
        return e.scrollWidth - 1 <= t
      }

      function p(e, t) {
        return e.scrollHeight - 1 <= t
      }
      var b = function(e) {
        function t(e) {
          ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, t);
          var a = function(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
          }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          return a.state = {
            fontSize: null,
            ready: !1
          }, a.handleWindowResize = function() {
            a.process()
          }, "perfectFit" in e && console.warn("TextFit property perfectFit has been removed."), a.handleWindowResize = (0, l.default)(a.handleWindowResize, e.throttle), a
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
        }(t, e), r(t, [{
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
              a = t.min,
              s = t.max,
              r = t.mode,
              n = t.forceSingleModeWidth,
              i = t.onReady,
              o = this._parent,
              l = this._child,
              g = (0, f.innerWidth)(o),
              b = (0, f.innerHeight)(o);
            if (b <= 0 || isNaN(b)) console.warn("Can not process element without height. Make sure the element is displayed and has a static height.");
            else if (g <= 0 || isNaN(g)) console.warn("Can not process element without width. Make sure the element is displayed and has a static width.");
            else {
              var h = (0, u.default)();
              this.pid = h;
              var y = function() {
                  return h !== e.pid
                },
                k = "multi" === r ? function() {
                  return p(l, b)
                } : function() {
                  return m(l, g)
                },
                x = "multi" === r ? function() {
                  return m(l, g)
                } : function() {
                  return p(l, b)
                },
                v = void 0,
                j = a,
                _ = s;
              this.setState({
                ready: !1
              }), (0, c.default)([function(t) {
                return (0, d.default)((function() {
                  return j <= _
                }), (function(t) {
                  if (y()) return t(!0);
                  v = parseInt((j + _) / 2, 10), e.setState({
                    fontSize: v
                  }, (function() {
                    return y() ? t(!0) : (k() ? j = v + 1 : _ = v - 1, t())
                  }))
                }), t)
              }, function(t) {
                return "single" === r && n || x() ? t() : (j = a, _ = v, (0, d.default)((function() {
                  return j < _
                }), (function(t) {
                  if (y()) return t(!0);
                  v = parseInt((j + _) / 2, 10), e.setState({
                    fontSize: v
                  }, (function() {
                    return h !== e.pid ? t(!0) : (x() ? j = v + 1 : _ = v - 1, t())
                  }))
                }), t))
              }, function(t) {
                if (v = Math.min(j, _), v = Math.max(v, a), v = Math.min(v, s), v = Math.max(v, 0), y()) return t(!0);
                e.setState({
                  fontSize: v
                }, t)
              }], (function(t) {
                t || y() || e.setState({
                  ready: !0
                }, (function() {
                  return i(v)
                }))
              }))
            }
          }
        }, {
          key: "render",
          value: function() {
            var e = this,
              t = this.props,
              a = t.children,
              r = t.text,
              i = t.style,
              o = (t.min, t.max, t.mode),
              c = (t.forceWidth, t.forceSingleModeWidth, t.throttle, t.autoResize, t.onReady, function(e, t) {
                var a = {};
                for (var s in e) t.indexOf(s) >= 0 || Object.prototype.hasOwnProperty.call(e, s) && (a[s] = e[s]);
                return a
              }(t, ["children", "text", "style", "min", "max", "mode", "forceWidth", "forceSingleModeWidth", "throttle", "autoResize", "onReady"])),
              d = this.state,
              l = d.fontSize,
              u = d.ready,
              f = s({}, i, {
                fontSize: l
              }),
              g = {
                display: u ? "block" : "inline-block"
              };
            return "single" === o && (g.whiteSpace = "nowrap"), n.default.createElement("div", s({
              ref: function(t) {
                return e._parent = t
              },
              style: f
            }, c), n.default.createElement("div", {
              ref: function(t) {
                return e._child = t
              },
              style: g
            }, r && "function" == typeof a ? u ? a(r) : r : a))
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
    4407: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => c
      });
      var s = a(42295),
        r = a(34725),
        n = a(95966);
      const i = "rockstargames-sites-gta-gen9c8dc03880ce2e12f3fdea5b5b587f27f",
        o = ({
          alt: e,
          className: t,
          src: r,
          style: i
        }) => {
          const [o, c] = (0, n.usePreloadImg)(r);
          let d = r;
          !1 === o && ("rockstargames-sites-gta-gen9a6a06e2d5c4f1811ea39d17312ca2e67" === t && (d = a(28839)), d = a(9333));
          const {
            width: l,
            height: u
          } = c, f = {
            "--aspect-ratio": Number.isNaN(l / u) ? "" : l / u,
            ...i
          };
          return (0, s.jsx)("img", {
            src: d,
            className: t ?? "",
            alt: e,
            style: f
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
          } = (0, r.S1)(c);
          const {
            isMobile: f
          } = (0, n.useWindowResize)();
          u.desktop || u.mobile || (l = "", u = {
            mobile: a(28839),
            desktop: a(9333)
          });
          let g = c.frame ? `${c.frame} ${i}` : i;
          return (0, s.jsx)("div", {
            className: g,
            style: t,
            children: (0, s.jsx)(o, {
              style: {
                ...d,
                ...c?.style
              },
              src: f ? u.mobile || u.desktop : u?.desktop || u?.mobile,
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
    8405: (e, t, a) => {
      "use strict";
      var s = a(85126);

      function r() {}

      function n() {}
      n.resetWarningCache = r, e.exports = function() {
        function e(e, t, a, r, n, i) {
          if (i !== s) {
            var o = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw o.name = "Invariant Violation", o
          }
        }

        function t() {
          return e
        }
        e.isRequired = e;
        var a = {
          array: e,
          bigint: e,
          bool: e,
          func: e,
          number: e,
          object: e,
          string: e,
          symbol: e,
          any: e,
          arrayOf: t,
          element: e,
          elementType: e,
          instanceOf: t,
          node: e,
          objectOf: t,
          oneOf: t,
          oneOfType: t,
          shape: t,
          exact: t,
          checkPropTypes: n,
          resetWarningCache: r
        };
        return a.PropTypes = a, a
      }
    },
    9333: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8787df71c723ebe44f82fd13ed216e09.jpg"
    },
    10632: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => u
      });
      var s = a(42295),
        r = a(62229),
        n = a(95966),
        i = a(4572),
        o = a.n(i),
        c = a(84927),
        d = a(4407);
      const l = ({
          hero: e,
          children: t
        }) => e ? (0, s.jsx)("div", {
          className: "rockstargames-sites-gta-gen9a429886d721550d02521f7f5c9de7f5b",
          children: t
        }) : t,
        u = ({
          badge: e = null,
          badgeType: t,
          discountTxt: a,
          splitter: i,
          image: u,
          style: f,
          className: g = "",
          attributes: m = {},
          role: p,
          hero: b = !1
        }) => {
          const h = (0, r.useMemo)((() => {
            if (u?.badge || u?.discountTxt || e || a) return (0, s.jsx)(c.A, {
              badge: u?.discountTxt ?? u?.badge ?? e ?? a,
              badgeType: t,
              splitter: u?.splitter ?? i,
              role: u?.role ?? p
            })
          }), [e, t, a, u, p, i]);
          return (0, s.jsx)(l, {
            hero: b,
            children: (0, s.jsx)("figure", {
              children: (0, s.jsxs)("div", {
                className: o()("rockstargames-sites-gta-gen9d9ac792281efe15bcd4589b028d1c27b", b ? "rockstargames-sites-gta-gen9e430c4662cd185f58259d4a8d8b322de" : "", m?.hiddenMobile ? "hiddenMobile" : "", m?.hiddenLarge ? "hiddenLarge" : "", m?.className, g),
                style: (0, n.safeStyles)({
                  ...f,
                  ...m?.style
                }),
                ...m,
                children: [(0, s.jsx)(d.A, {
                  image: u,
                  className: g
                }), h, u?.caption && (0, s.jsx)("figcaption", {
                  dangerouslySetInnerHTML: {
                    __html: u.caption
                  }
                })]
              })
            })
          })
        }
    },
    11206: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => c
      });
      const s = {
        randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto)
      };
      let r;
      const n = new Uint8Array(16);

      function i() {
        if (!r && (r = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !r)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return r(n)
      }
      const o = [];
      for (let e = 0; e < 256; ++e) o.push((e + 256).toString(16).slice(1));
      const c = function(e, t, a) {
        if (s.randomUUID && !t && !e) return s.randomUUID();
        const r = (e = e || {}).random || (e.rng || i)();
        if (r[6] = 15 & r[6] | 64, r[8] = 63 & r[8] | 128, t) {
          a = a || 0;
          for (let e = 0; e < 16; ++e) t[a + e] = r[e];
          return t
        }
        return function(e, t = 0) {
          return o[e[t + 0]] + o[e[t + 1]] + o[e[t + 2]] + o[e[t + 3]] + "-" + o[e[t + 4]] + o[e[t + 5]] + "-" + o[e[t + 6]] + o[e[t + 7]] + "-" + o[e[t + 8]] + o[e[t + 9]] + "-" + o[e[t + 10]] + o[e[t + 11]] + o[e[t + 12]] + o[e[t + 13]] + o[e[t + 14]] + o[e[t + 15]]
        }(r)
      }
    },
    11524: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e, t) {
        if (e === t) return !0;
        var a = Object.keys(e),
          s = Object.keys(t);
        if (a.length !== s.length) return !1;
        for (var r = Object.prototype.hasOwnProperty, n = 0; n < a.length; n++)
          if (!r.call(t, a[n]) || e[a[n]] !== t[a[n]]) return !1;
        return !0
      }
    },
    16386: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/898794daaec68a69ef5ec4afaefe1948.png"
    },
    24769: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => m
      });
      var s = a(42295),
        r = a(62229),
        n = a(24162),
        i = a(11206),
        o = a(4572),
        c = a.n(o);
      const d = {
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
      var l = a(26708),
        u = a(10632);
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
            className: c()(d.img, e?.className)
          }), (e?.title || e?.description) && (0, s.jsx)(l.A, {
            item: e
          })]
        }),
        g = ({
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
        m = ({
          children: e,
          items: t = [],
          style: a = {},
          noInfiniteScroll: o = !1,
          className: u = "",
          renderTemplate: m = "standard",
          text: p,
          customSpaceBetween: b = null,
          centerSlides: h = !0,
          centeredSlidesBounds: y = !1
        }) => {
          const [k, x] = (0, r.useState)(0), v = (0, r.useMemo)((() => e && Array.isArray(e) ? e.map((() => (0, i.A)())) : null), [e]);
          if (!(t && 0 !== t?.length || e)) return null;
          const j = {
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
          return (0, s.jsxs)("div", {
            className: c()(d.deprecatedCarousel, d[m], d[`infinite_${!o}`], e ? d.renderedWithChildren : "", u),
            style: a,
            children: [(0, s.jsxs)(n.RC, {
              loop: !o,
              grabCursor: !0,
              centeredSlides: h,
              centerInsufficientSlides: h,
              slidesPerView: "auto",
              speed: 700,
              breakpoints: j,
              onUpdate: () => x(0),
              onActiveIndexChange: e => x(e?.realIndex ?? 0),
              centeredSlidesBounds: y,
              children: [(0, s.jsx)("div", {
                className: d.trackWrapper,
                children: (0, s.jsxs)("div", {
                  className: d.track,
                  children: [t?.map((e => (0, s.jsx)(n.qr, {
                    children: (0, s.jsx)(f, {
                      item: e
                    })
                  }, e.key))), e && e.map(((e, t) => e && (0, s.jsx)(n.qr, {
                    children: e
                  }, v && v[t])))]
                })
              }), (0, s.jsx)(g, {
                current: k,
                total: e ? e.length : t.length
              })]
            }), (p?.title || p?.description) && (0, s.jsx)(l.A, {
              item: p
            })]
          })
        }
    },
    24970: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e111377ba943e9eefaa9204f77c77093.png"
    },
    26708: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => u
      });
      var s = a(42295),
        r = a(4572),
        n = a.n(r),
        i = a(4407),
        o = a(93935),
        c = a(79704);
      const d = "rockstargames-sites-gta-gen9acd27eff2209196752622710f7b27558",
        l = ({
          to: e,
          children: t
        }) => e ? (0, s.jsx)("a", {
          href: e,
          target: "_blank",
          rel: "noreferrer",
          children: t
        }) : t,
        u = ({
          item: e,
          className: t = ""
        }) => (0, s.jsxs)("div", {
          className: n()("rockstargames-sites-gta-gen9f8bc9589974046cdac4a2264be12d2df", t),
          children: [e.title && (0, s.jsx)(l, {
            to: e?.href ?? e?.to,
            children: (0, s.jsx)("h3", {
              children: e.title
            })
          }), Array.isArray(e?.description?.content) ? e.description.content?.map(((e, t) => e?.unorderedList ? (0, s.jsx)(o.A, {
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
            children: (0, s.jsx)(c.A, {})
          }, t) : (0, s.jsx)("p", {
            children: (0, s.jsx)("span", {
              className: d,
              dangerouslySetInnerHTML: {
                __html: e
              }
            })
          }, t))) : (0, s.jsx)("span", {
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
    34725: (e, t, a) => {
      "use strict";
      a.d(t, {
        C1: () => c,
        S1: () => o,
        XC: () => f,
        jS: () => d,
        qg: () => l,
        z0: () => u
      });
      var s = a(62229),
        r = a(95966),
        n = a(74767);
      const i = e => {
          if (!e) return null;
          const {
            hostname: t,
            pathname: a
          } = new URL(e, (0, r.getCdnPrefix)(!0));
          return "/" === a ? null : (t.endsWith(".akamaized.net"), e)
        },
        o = ({
          alt: e = null,
          mobile: t = null,
          desktop: a = null,
          ariaLabel: o = null,
          sources: c = null,
          prod: d = null
        }) => {
          const l = (0, r.useLocale)(),
            {
              meta: u = {}
            } = (0, n.i)() ?? {},
            [f, g] = (0, s.useState)(d ?? u?.cdn ?? u?.prod ?? !0);
          (0, s.useEffect)((() => {
            g(d ?? u?.cdn ?? u?.prod ?? !0)
          }), [d, u]);
          const m = (0, s.useCallback)((e => {
            const t = null !== c,
              a = e?.previewSrc ?? e ?? null;
            if (null === a || "string" != typeof a) return null;
            if (a.startsWith("http")) return i(a);
            const s = `${t?(0,r.getCdnPrefix)(f):""}${a}`;
            return i(s)
          }), [f, c]);
          return {
            alt: e,
            ariaLabel: o,
            src: {
              mobile: m(c?.[l]?.mobile ?? c?.en_us?.mobile ?? t),
              desktop: m(c?.[l]?.desktop ?? c?.en_us?.desktop ?? a)
            }
          }
        },
        c = e => {
          const t = (0, n.i)() ?? {},
            {
              meta: a = {}
            } = t,
            [o, c] = (0, s.useState)(a?.cdn ?? a?.prod ?? !1);
          return (0, s.useEffect)((() => {
            c(a?.cdn ?? a?.prod ?? !1)
          }), [a]), e ? e?.startsWith("http") ? i(e) : i(`${(0,r.getCdnPrefix)(o)}${e}`) : null
        },
        d = () => {
          const e = (0, n.i)() ?? {},
            {
              meta: t = {}
            } = e,
            a = (0, s.useMemo)((() => t?.cdn ?? t?.prod ?? !1), [t]);
          return (0, s.useCallback)(((e, t = {}) => {
            const s = t?.prod ?? a;
            return e ? e?.startsWith("http") ? i(e) : i(`${(0,r.getCdnPrefix)(s)}${e}`) : null
          }), [a])
        },
        l = e => e.full_src,
        u = e => {
          const t = e?.previewSrc ?? e?.preview_src ?? e;
          return t?.startsWith("http") ? t : `${(0,r.getCdnPrefix)(!1)}${t}`
        },
        f = e => e.meta.uploads_directory
    },
    34738: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function() {
        return a++
      };
      var a = 0
    },
    38635: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6e77bb0f25a6ea37e8d831b12df9fa3c.png"
    },
    42649: e => {
      var t, a, s = e.exports = {};

      function r() {
        throw new Error("setTimeout has not been defined")
      }

      function n() {
        throw new Error("clearTimeout has not been defined")
      }

      function i(e) {
        if (t === setTimeout) return setTimeout(e, 0);
        if ((t === r || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
        try {
          return t(e, 0)
        } catch (a) {
          try {
            return t.call(null, e, 0)
          } catch (a) {
            return t.call(this, e, 0)
          }
        }
      }! function() {
        try {
          t = "function" == typeof setTimeout ? setTimeout : r
        } catch (e) {
          t = r
        }
        try {
          a = "function" == typeof clearTimeout ? clearTimeout : n
        } catch (e) {
          a = n
        }
      }();
      var o, c = [],
        d = !1,
        l = -1;

      function u() {
        d && o && (d = !1, o.length ? c = o.concat(c) : l = -1, c.length && f())
      }

      function f() {
        if (!d) {
          var e = i(u);
          d = !0;
          for (var t = c.length; t;) {
            for (o = c, c = []; ++l < t;) o && o[l].run();
            l = -1, t = c.length
          }
          o = null, d = !1,
            function(e) {
              if (a === clearTimeout) return clearTimeout(e);
              if ((a === n || !a) && clearTimeout) return a = clearTimeout, clearTimeout(e);
              try {
                return a(e)
              } catch (t) {
                try {
                  return a.call(null, e)
                } catch (t) {
                  return a.call(this, e)
                }
              }
            }(e)
        }
      }

      function g(e, t) {
        this.fun = e, this.array = t
      }

      function m() {}
      s.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var a = 1; a < arguments.length; a++) t[a - 1] = arguments[a];
        c.push(new g(e, t)), 1 !== c.length || d || i(f)
      }, g.prototype.run = function() {
        this.fun.apply(null, this.array)
      }, s.title = "browser", s.browser = !0, s.env = {}, s.argv = [], s.version = "", s.versions = {}, s.on = m, s.addListener = m, s.once = m, s.off = m, s.removeListener = m, s.removeAllListeners = m, s.emit = m, s.prependListener = m, s.prependOnceListener = m, s.listeners = function(e) {
        return []
      }, s.binding = function(e) {
        throw new Error("process.binding is not supported")
      }, s.cwd = function() {
        return "/"
      }, s.chdir = function(e) {
        throw new Error("process.chdir is not supported")
      }, s.umask = function() {
        return 0
      }
    },
    51364: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e, t) {
        var a = void 0,
          s = void 0,
          r = void 0,
          n = void 0,
          i = 0;

        function o() {
          n = 0, i = +new Date, r = e.apply(a, s), a = null, s = null
        }
        return function() {
          a = this, s = arguments;
          var e = new Date - i;
          return n || (e >= t ? o() : n = setTimeout(o, t - e)), r
        }
      }
    },
    52321: (e, t, a) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e, t) {
        var a = [],
          s = 0,
          n = !0;

        function i(e) {
          function s() {
            t && t(e, a)
          }
          n ? r.default.nextTick(s) : s()
        }
        e.length > 0 ? e[0]((function t(r, n) {
          a.push(n), ++s >= e.length || r ? i(r) : e[s](t)
        })) : i(null), n = !1
      };
      var s, r = (s = a(42649)) && s.__esModule ? s : {
        default: s
      }
    },
    55322: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => i
      });
      var s = a(42295),
        r = a(62229),
        n = a(64740);
      const i = ({
        children: e,
        ...t
      }) => {
        const [a, i] = (0, r.useState)(!1);
        return (0, s.jsx)(n.zb, {
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
    64740: (e, t, a) => {
      "use strict";
      t.zb = void 0;
      var s, r = (s = a(2906)) && s.__esModule ? s : {
        default: s
      };
      t.zb = r.default, r.default
    },
    65287: (e, t, a) => {
      var s = {
        "./bounty.png": 7502,
        "./collector.png": 24970,
        "./moonshiner.png": 2661,
        "./naturalist.png": 16386,
        "./trader.png": 38635
      };

      function r(e) {
        var t = n(e);
        return a(t)
      }

      function n(e) {
        if (!a.o(s, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        }
        return s[e]
      }
      r.keys = function() {
        return Object.keys(s)
      }, r.resolve = n, e.exports = r, r.id = 65287
    },
    74767: (e, t, a) => {
      "use strict";
      a.d(t, {
        i: () => c,
        o: () => o
      });
      var s = a(42295),
        r = a(62229);
      const n = (0, a(95966).setContextItem)({
          context: (0, r.createContext)(),
          key: "tinaPayloadContext"
        }),
        {
          Provider: i
        } = n,
        o = ({
          children: e,
          payload: t
        }) => (0, s.jsx)(i, {
          value: t,
          children: e
        }),
        c = () => (0, r.useContext)(n)
    },
    79704: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => n
      });
      var s = a(42295);
      const r = {
          gtao: "rockstargames-sites-gta-gen9f66c75c6e882da85fef31e4211ca0be2",
          hr: "rockstargames-sites-gta-gen9dc7b1bc141e132d4ee9b7bf9d55c573a",
          redLine: "rockstargames-sites-gta-gen9d4d968b41ef87926b0b6318e8647738b"
        },
        n = ({
          style: e,
          className: t = "",
          type: a = ""
        }) => (0, s.jsx)("div", {
          style: e,
          className: [r.hr, r[a], t].join(" ")
        })
    },
    84927: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => c
      });
      var s = a(42295),
        r = a(4407),
        n = a(55322);
      const i = {
          badge: "rockstargames-sites-gta-gen9b7268b0e907630904b6689af83fee8e3",
          badge2: "rockstargames-sites-gta-gen9d08ce7145bc9562355a3984f8ccc9313",
          badge3: "rockstargames-sites-gta-gen9c7c60cfb12b6e9be68893c60814b3ed7",
          badgeSizeUpdate: "rockstargames-sites-gta-gen9ce8632d7464b556158a1d549f653498c"
        },
        o = ({
          wrapper: e,
          children: t,
          role: a,
          splitter: s
        }) => s || a ? e(t) : t,
        c = ({
          badge: e,
          badgeType: t,
          role: c,
          splitter: d
        }) => {
          const l = [];
          return d ? e.split(d).map(((e, t) => l.push(e))) : l.push(e), (0, s.jsxs)(o, {
            splitter: d,
            role: c,
            wrapper: e => (0, s.jsx)("div", {
              className: `${i.badge} ${t?i[t]:""} `,
              children: e
            }),
            children: [(0, s.jsx)(s.Fragment, {
              children: c && (0, s.jsx)(r.A, {
                image: {
                  alt: c,
                  desktop: a(65287)(`./${c}.png`)
                }
              })
            }), (0, s.jsx)(n.A, {
              className: `${d||c?"":i.badge} ${t?i[t]:""}`,
              min: 8,
              max: 1e3,
              mode: d || c ? "single" : "multi",
              children: l[0]
            }), (0, s.jsx)(s.Fragment, {
              children: l.shift() && d && l.length >= 1 && (0, s.jsx)(n.A, {
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
    85126: e => {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
    },
    90884: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        default: () => k
      });
      var s = a(42295),
        r = a(26708),
        n = a(10632),
        i = a(24769);
      const o = {
          carouselTitle: "rockstargames-sites-gta-gen9e9e0ef1bfc3699b1e50c33dd0ce8e76a",
          carouselWrapper: "rockstargames-sites-gta-gen9fabefc39343f6c494eb3d049757d89c5",
          padding: "rockstargames-sites-gta-gen9ac767e959939b4d56b2358cb263d07ad"
        },
        c = ({
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
          id: l = null
        }) => e?.length ? (0, s.jsxs)("div", {
          id: l,
          "data-testid": `carousel${d&&`-${d}`}-group-of-items`,
          children: [(0, s.jsx)(i.A, {
            style: a,
            className: [d, o.carouselWrapper].join(" "),
            children: e.map((e => (0, s.jsxs)("div", {
              id: e?.id ?? null,
              children: [(0, s.jsx)(n.A, {
                image: e?.image,
                badge: e?.badge ?? e?.image?.badge,
                badgeType: "badge3",
                role: e?.role ?? e?.image?.role,
                splitter: e?.splitter ?? e?.image?.splitter,
                type: e?.type,
                ariaLabel: e?.image?.ariaLabel ?? e.description,
                style: e?.style,
                className: [o.img, e?.className].join(" ")
              }), e.title && (0, s.jsx)(c, {
                to: e?.to,
                children: (0, s.jsx)("h4", {
                  className: o.carouselTitle,
                  children: e.title
                })
              }), e.description && (0, s.jsx)("span", {
                className: o.description,
                dangerouslySetInnerHTML: {
                  __html: e.description
                }
              })]
            }, e?.key ?? e?.title)))
          }), t?.title || t?.description ? (0, s.jsx)("div", {
            className: o.padding,
            style: t?.style ?? {},
            children: (0, s.jsx)(r.A, {
              item: t
            })
          }) : ""]
        }) : null;
      var l = a(31879),
        u = a.n(l),
        f = a(92440),
        g = a(4572),
        m = a.n(g);
      const p = ({
          impressionTracking: e,
          gtm: t = {},
          children: a
        }) => e?.shouldTrack ? (0, s.jsx)(f.InViewTracker, {
          threshold: e?.threshold,
          gtm: t,
          children: a
        }) : a,
        b = ({
          to: e,
          children: t
        }) => e ? (0, s.jsx)("a", {
          href: e,
          target: "_blank",
          rel: "noreferrer",
          children: t
        }) : t,
        h = ({
          item: e
        }) => e?.videoId ? (0, s.jsx)(u(), {
          context: "site",
          autoplay: !1,
          id: e.videoId
        }) : (0, s.jsx)(n.A, {
          image: e?.image,
          badge: e?.badge ?? e?.image?.badge,
          badgeType: "badge3",
          role: e?.role ?? e?.image?.role,
          splitter: e?.splitter ?? e?.image?.splitter,
          ariaLabel: e?.image?.ariaLabel,
          style: e?.style,
          className: e?.className
        }),
        y = ({
          items: e,
          style: t = {},
          className: a = "",
          id: n = null
        }) => (0, s.jsx)("div", {
          style: t,
          className: m()("rockstargames-sites-gta-gen9d38af92e8657708abd3dc5295e62476c", a),
          id: n,
          "data-testid": "standard-group-of-items",
          children: e.map((e => (0, s.jsx)(p, {
            impressionTracking: e?.impressionTracking,
            gtm: e?.gtm,
            children: (0, s.jsx)(b, {
              to: e?.to,
              children: (0, s.jsxs)("div", {
                className: m()("rockstargames-sites-gta-gen9a9b63d3aa2f18fa6c84b19c8993a7893", e.className),
                style: e?.style ?? {},
                ...e?.props,
                children: [e?.image || e?.videoId ? (0, s.jsx)(h, {
                  item: e
                }) : "", e.title || e.description ? (0, s.jsx)(r.A, {
                  item: e,
                  className: "rockstargames-sites-gta-gen9bc47d354556b20071313d2c1ccc3debd"
                }) : ""]
              })
            })
          }, e.key)))
        }),
        k = ({
          children: e = null,
          text: t = {},
          items: a = [],
          renderTemplate: r = "",
          style: n = {},
          id: i = null,
          ...o
        }) => {
          if (!a.length) return null;
          switch (r) {
            case "carousel":
              return (0, s.jsx)(d, {
                text: t,
                items: a,
                style: n,
                id: i,
                children: e
              });
            case "carousel-panorama":
              return (0, s.jsx)(d, {
                text: t,
                items: a,
                style: n,
                className: "panorama",
                id: i,
                children: e
              });
            default:
              return (0, s.jsx)(y, {
                items: a,
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
        var s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a;
        e() ? t((function a(r) {
          for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) i[o - 1] = arguments[o];
          r ? s(r) : e.apply(this, i) ? t(a) : s(null)
        })) : s(null)
      };
      var a = function() {}
    },
    93935: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => f
      });
      var s = a(42295),
        r = a(62229),
        n = a(27785),
        i = a.n(n),
        o = a(95966),
        c = a(4572),
        d = a.n(c);
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
          sanitize: u
        } = i(),
        f = ({
          list: e,
          string: t,
          starColor: a,
          style: n,
          className: i,
          game: c,
          noImg: f,
          columns: g,
          mobileColumns: m
        }) => {
          const [p, b] = (0, r.useState)(null), h = t ? t.split("_#_") : e;
          if ((0, r.useEffect)((() => {
              b(e)
            }), [e]), !t && !e) return null;
          const y = {
            color: n?.color
          };
          return delete n?.color, g && p ? (0, s.jsx)("div", {
            className: l.grid,
            style: {
              "--unordered-list-grid-column": g,
              "--unordered-list-grid-column-mobile": m ?? g
            },
            children: (0, s.jsx)("ul", {
              className: d()(l.itemList, l.noImg, l[a], l[c]),
              style: (0, o.safeStyles)(n),
              children: p.map(((e, t) => (0, s.jsx)("li", {
                style: y,
                dangerouslySetInnerHTML: {
                  __html: u(e.content)
                }
              }, t)))
            })
          }) : (0, s.jsx)("ul", {
            style: (0, o.safeStyles)(n),
            className: d()(l.itemList, l.custom, f ? l.noImg : "", a ? l[a] : "", c ? l[c] : "", i ?? ""),
            children: h.map(((e, t) => (0, s.jsx)("li", {
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
    },
    97465: (e, t, a) => {
      e.exports = a(8405)()
    }
  }
]);