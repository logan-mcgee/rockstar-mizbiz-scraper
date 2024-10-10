! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "b902b795-cd0d-487d-913d-6f93320775c2", e._sentryDebugIdIdentifier = "sentry-dbid-b902b795-cd0d-487d-913d-6f93320775c2")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-newswire-article",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [8500, 6119], {
    67366: (e, t, r) => {
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
        n = f(r(71403)),
        i = f(r(37977)),
        c = f(r(52696)),
        o = f(r(51901)),
        l = f(r(66785)),
        d = f(r(28512)),
        u = f(r(54518)),
        m = r(75923);

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
          }, "perfectFit" in e && console.warn("TextFit property perfectFit has been removed."), r.handleWindowResize = (0, d.default)(r.handleWindowResize, e.throttle), r
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
            this.state.ready && ((0, c.default)(this.props, e) || this.process())
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
              c = this._parent,
              d = this._child,
              f = (0, m.innerWidth)(c),
              b = (0, m.innerHeight)(c);
            if (b <= 0 || isNaN(b)) console.warn("Can not process element without height. Make sure the element is displayed and has a static height.");
            else if (f <= 0 || isNaN(f)) console.warn("Can not process element without width. Make sure the element is displayed and has a static width.");
            else {
              var h = (0, u.default)();
              this.pid = h;
              var w = function() {
                  return h !== e.pid
                },
                y = "multi" === s ? function() {
                  return g(d, b)
                } : function() {
                  return p(d, f)
                },
                k = "multi" === s ? function() {
                  return p(d, f)
                } : function() {
                  return g(d, b)
                },
                x = void 0,
                v = r,
                j = a;
              this.setState({
                ready: !1
              }), (0, o.default)([function(t) {
                return (0, l.default)((function() {
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
                return "single" === s && n || k() ? t() : (v = r, j = x, (0, l.default)((function() {
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
              c = (t.min, t.max, t.mode),
              o = (t.forceWidth, t.forceSingleModeWidth, t.throttle, t.autoResize, t.onReady, function(e, t) {
                var r = {};
                for (var a in e) t.indexOf(a) >= 0 || Object.prototype.hasOwnProperty.call(e, a) && (r[a] = e[a]);
                return r
              }(t, ["children", "text", "style", "min", "max", "mode", "forceWidth", "forceSingleModeWidth", "throttle", "autoResize", "onReady"])),
              l = this.state,
              d = l.fontSize,
              u = l.ready,
              m = a({}, i, {
                fontSize: d
              }),
              f = {
                display: u ? "block" : "inline-block"
              };
            return "single" === c && (f.whiteSpace = "nowrap"), n.default.createElement("div", a({
              ref: function(t) {
                return e._parent = t
              },
              style: m
            }, o), n.default.createElement("div", {
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
    64544: (e, t, r) => {
      "use strict";
      t.zb = void 0;
      var a, s = (a = r(67366)) && a.__esModule ? a : {
        default: a
      };
      t.zb = s.default, s.default
    },
    75923: (e, t) => {
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
    51901: (e, t, r) => {
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
      var a, s = (a = r(90098)) && a.__esModule ? a : {
        default: a
      }
    },
    52696: (e, t) => {
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
    28512: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e, t) {
        var r = void 0,
          a = void 0,
          s = void 0,
          n = void 0,
          i = 0;

        function c() {
          n = 0, i = +new Date, s = e.apply(r, a), r = null, a = null
        }
        return function() {
          r = this, a = arguments;
          var e = new Date - i;
          return n || (e >= t ? c() : n = setTimeout(c, t - e)), s
        }
      }
    },
    54518: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function() {
        return r++
      };
      var r = 0
    },
    66785: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e, t) {
        var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r;
        e() ? t((function r(s) {
          for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), c = 1; c < n; c++) i[c - 1] = arguments[c];
          s ? a(s) : e.apply(this, i) ? t(r) : a(null)
        })) : a(null)
      };
      var r = function() {}
    },
    89269: (e, t, r) => {
      "use strict";
      var a = r(17254);

      function s() {}

      function n() {}
      n.resetWarningCache = s, e.exports = function() {
        function e(e, t, r, s, n, i) {
          if (i !== a) {
            var c = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw c.name = "Invariant Violation", c
          }
        }

        function t() {
          return e
        }
        e.isRequired = e;
        var r = {
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
          resetWarningCache: s
        };
        return r.PropTypes = r, r
      }
    },
    37977: (e, t, r) => {
      e.exports = r(89269)()
    },
    17254: e => {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
    },
    41136: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => o
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
      const c = [];
      for (let e = 0; e < 256; ++e) c.push((e + 256).toString(16).slice(1));
      const o = function(e, t, r) {
        if (a.randomUUID && !t && !e) return a.randomUUID();
        const s = (e = e || {}).random || (e.rng || i)();
        if (s[6] = 15 & s[6] | 64, s[8] = 63 & s[8] | 128, t) {
          r = r || 0;
          for (let e = 0; e < 16; ++e) t[r + e] = s[e];
          return t
        }
        return function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          return c[e[t + 0]] + c[e[t + 1]] + c[e[t + 2]] + c[e[t + 3]] + "-" + c[e[t + 4]] + c[e[t + 5]] + "-" + c[e[t + 6]] + c[e[t + 7]] + "-" + c[e[t + 8]] + c[e[t + 9]] + "-" + c[e[t + 10]] + c[e[t + 11]] + c[e[t + 12]] + c[e[t + 13]] + c[e[t + 14]] + c[e[t + 15]]
        }(s)
      }
    },
    18500: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, {
        default: () => w
      });
      var a = r(26371),
        s = r(8999),
        n = r(21450);
      const i = {
        padding: "rockstargames-modules-core-newswire-articlee1811c65983d2df02484c7bd49620f6d",
        carouselWrapper: "rockstargames-modules-core-newswire-articledaf8d6c749fa379c43a098df8a842f62",
        carouselTitle: "rockstargames-modules-core-newswire-articleffab2486abb58ef9090c19d6d5bdd44c"
      };
      var c = r(46632);
      const o = e => {
          let {
            to: t,
            children: r
          } = e;
          return t ? (0, c.jsx)("a", {
            href: t,
            target: "_blank",
            children: r
          }) : r
        },
        l = e => {
          let {
            items: t,
            text: r = {},
            style: l,
            className: d = "",
            id: u = null
          } = e;
          return t?.length ? (0, c.jsxs)("div", {
            id: u,
            children: [(0, c.jsx)(n.A, {
              style: l,
              className: [d, i.carouselWrapper].join(" "),
              children: t.map((e => (0, c.jsxs)("div", {
                id: e?.id ?? null,
                children: [(0, c.jsx)(s.A, {
                  image: e?.image,
                  badge: e?.badge ?? e?.image?.badge,
                  badgeType: "badge3",
                  role: e?.role ?? e?.image?.role,
                  splitter: e?.splitter ?? e?.image?.splitter,
                  type: e?.type,
                  ariaLabel: e?.image?.ariaLabel ?? e.description,
                  style: e?.style,
                  className: [i.img, e?.className].join(" ")
                }), e.title && (0, c.jsx)(o, {
                  to: e?.to,
                  children: (0, c.jsx)("h4", {
                    className: i.carouselTitle,
                    children: e.title
                  })
                }), e.description && (0, c.jsx)("span", {
                  className: i.description,
                  dangerouslySetInnerHTML: {
                    __html: e.description
                  }
                })]
              }, e?.key ?? e?.title)))
            }), r?.title || r?.description ? (0, c.jsx)("div", {
              className: i.padding,
              style: r?.style ?? {},
              children: (0, c.jsx)(a.A, {
                item: r
              })
            }) : ""]
          }) : null
        };
      var d = r(14522),
        u = r(31879),
        m = r.n(u),
        f = r(74401);
      const p = e => {
          let {
            impressionTracking: t,
            gtm: r = {},
            children: a
          } = e;
          return t?.shouldTrack ? (0, c.jsx)(d.H, {
            threshold: t?.threshold,
            gtm: r,
            children: a
          }) : a
        },
        g = e => {
          let {
            to: t,
            children: r
          } = e;
          return t ? (0, c.jsx)("a", {
            href: t,
            target: "_blank",
            rel: "noreferrer",
            children: r
          }) : r
        },
        b = e => {
          let {
            item: t
          } = e;
          return t?.videoId ? (0, c.jsx)(m(), {
            context: "site",
            autoplay: !1,
            id: t.videoId
          }) : (0, c.jsx)(s.A, {
            image: t?.image,
            badge: t?.badge ?? t?.image?.badge,
            badgeType: "badge3",
            role: t?.role ?? t?.image?.role,
            splitter: t?.splitter ?? t?.image?.splitter,
            type: t?.type,
            ariaLabel: t?.image?.ariaLabel,
            style: t?.style,
            className: t?.className
          })
        },
        h = e => {
          let {
            items: t,
            style: r = {},
            className: s = "",
            id: n = null
          } = e;
          return (0, c.jsx)("div", {
            style: r,
            className: (0, f.classList)("rockstargames-modules-core-newswire-articlefbb6b44c6d90c22144e4fbed29bc540b", s),
            id: n,
            children: t.map((e => (0, c.jsx)(p, {
              impressionTracking: e?.impressionTracking,
              gtm: e?.gtm,
              children: (0, c.jsx)(g, {
                to: e?.to,
                children: (0, c.jsxs)("div", {
                  className: (0, f.classList)("rockstargames-modules-core-newswire-articlec6ef137c3cc0ba12d735aedb6db0cae3", e.className),
                  style: e?.style ?? {},
                  ...e?.props,
                  children: [e?.image || e?.videoId ? (0, c.jsx)(b, {
                    item: e
                  }) : "", e.title || e.description ? (0, c.jsx)(a.A, {
                    item: e,
                    className: "rockstargames-modules-core-newswire-articlea953f78a1d15741f11ef44c196dbb9c4"
                  }) : ""]
                })
              })
            }, e.key)))
          })
        },
        w = e => {
          let {
            children: t,
            text: r,
            items: a = [],
            renderTemplate: s,
            style: n,
            id: i = null,
            ...o
          } = e;
          if (!a.length) return null;
          switch (s) {
            case "carousel":
              return (0, c.jsx)(l, {
                text: r,
                items: a,
                style: n,
                id: i,
                children: t
              });
            case "carousel-panorama":
              return (0, c.jsx)(l, {
                text: r,
                items: a,
                style: n,
                className: "panorama",
                id: i,
                children: t
              });
            default:
              return (0, c.jsx)(h, {
                items: a,
                style: n,
                id: i,
                ...o,
                children: t
              })
          }
        }
    },
    21450: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => f
      });
      var a = r(71403),
        s = r(74401),
        n = r(81902),
        i = r(41136);
      const c = {
        deprecatedCarousel: "rockstargames-modules-core-newswire-articleeb5df7b3d51dffc4d993ca7abce4e944",
        "swiper-scrollbar-disabled": "rockstargames-modules-core-newswire-articleeb2dda6769a7c20a31e7996ff62e41f8",
        "swiper-horizontal": "rockstargames-modules-core-newswire-articleb11093de3cb4f18ea2d59b8d4d1db44c",
        "swiper-vertical": "rockstargames-modules-core-newswire-articlefa3209fdf995734a1aeeac2cc72cc1ea",
        renderedWithChildren: "rockstargames-modules-core-newswire-articlec9f15e74b3166cd0db40501fcc70e868",
        panorama: "rockstargames-modules-core-newswire-articlef2a7e77af5dff445e978fd575a567508",
        img: "rockstargames-modules-core-newswire-articlef1d3d54c266a20fa0cbe9c342b0d98da",
        hideMobile: "rockstargames-modules-core-newswire-articlee70d5eaa273e4a0a40ee62a308491810",
        hideLarge: "rockstargames-modules-core-newswire-articlebace2af6c822ba7b36b53923629cba0f",
        imageAreaBg: "rockstargames-modules-core-newswire-articlef4bb071e6dad07c75b78ea21269ca662",
        infinite_false: "rockstargames-modules-core-newswire-articled6c3d175b843462bf23a1a1f3af6b095",
        track: "rockstargames-modules-core-newswire-articleb5ff781c4a96bf031e8e7f5e0c9af395",
        perico: "rockstargames-modules-core-newswire-articlebb97d296d17b7e801c6c0719a79463dd",
        dotsSlide: "rockstargames-modules-core-newswire-articledd55a6f93254ed13542089c6f36e0048",
        siblings: "rockstargames-modules-core-newswire-articlea59cf4385528c371a13be9962b67131b",
        active: "rockstargames-modules-core-newswire-articleaa5e195e0c7c6336929553314d52a896",
        "swiper-preloader-spin": "rockstargames-modules-core-newswire-articlec05cc0faa8239c85cdc7d53c7e120e8e"
      };
      var o = r(26371),
        l = r(8999),
        d = r(46632);
      const u = e => {
          let {
            item: t
          } = e;
          return (0, d.jsxs)("div", {
            children: [(0, d.jsx)(l.A, {
              image: t?.image,
              badge: t?.badge ?? t?.image?.badge,
              badgeType: "badge3",
              role: t?.role ?? t?.image?.role,
              splitter: t?.splitter ?? t?.image?.splitter,
              type: t?.type,
              ariaLabel: t?.image?.ariaLabel ?? t.description,
              style: t?.style,
              className: (0, s.classList)(c.img, t?.className)
            }), (t?.title || t?.description) && (0, d.jsx)(o.A, {
              item: t
            })]
          })
        },
        m = e => {
          let {
            current: t,
            total: r
          } = e;
          return (0, d.jsx)("div", {
            className: "swiper-scrollbar",
            style: {
              "--current-slide": t,
              "--total-slides": r
            },
            children: (0, d.jsx)("div", {
              className: "swiper-scrollbar-drag"
            })
          })
        },
        f = e => {
          let {
            children: t,
            items: r = [],
            style: l = {},
            noInfiniteScroll: f = !1,
            className: p = "",
            renderTemplate: g = "standard",
            text: b,
            customSpaceBetween: h = null,
            centerSlides: w = !0,
            centeredSlidesBounds: y = !1
          } = e;
          const [k, x] = (0, a.useState)(0), v = (0, a.useMemo)((() => t && Array.isArray(t) ? t.map((() => (0, i.A)())) : null), [t]);
          if (!(r && 0 !== r?.length || t)) return null;
          const j = {
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
          return (0, d.jsxs)("div", {
            className: (0, s.classList)(c.deprecatedCarousel, c[g], c[`infinite_${!f}`], t ? c.renderedWithChildren : "", p),
            style: l,
            children: [(0, d.jsxs)(n.RC, {
              loop: !f,
              grabCursor: !0,
              centeredSlides: w,
              centerInsufficientSlides: w,
              slidesPerView: "auto",
              speed: 700,
              breakpoints: j,
              onUpdate: () => x(0),
              onActiveIndexChange: e => x(e?.realIndex ?? 0),
              centeredSlidesBounds: y,
              children: [(0, d.jsx)("div", {
                className: c.trackWrapper,
                children: (0, d.jsxs)("div", {
                  className: c.track,
                  children: [r?.map((e => (0, d.jsx)(n.qr, {
                    children: (0, d.jsx)(u, {
                      item: e
                    })
                  }, e.key))), t && t.map(((e, t) => e && (0, d.jsx)(n.qr, {
                    children: e
                  }, v && v[t])))]
                })
              }), (0, d.jsx)(m, {
                current: k,
                total: t ? t.length : r.length
              })]
            }), (b?.title || b?.description) && (0, d.jsx)(o.A, {
              item: b
            })]
          })
        }
    },
    26371: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => d
      });
      var a = r(74401),
        s = r(2024),
        n = r(63672),
        i = r(63303);
      const c = "rockstargames-modules-core-newswire-articlefa6885b15a718acb24f48949c52e31f1";
      var o = r(46632);
      const l = e => {
          let {
            to: t,
            children: r
          } = e;
          return t ? (0, o.jsx)("a", {
            href: t,
            target: "_blank",
            rel: "noreferrer",
            children: r
          }) : r
        },
        d = e => {
          let {
            item: t,
            className: r = ""
          } = e;
          return (0, o.jsxs)("div", {
            className: (0, a.classList)("rockstargames-modules-core-newswire-articleef9e6981551ac5ce250ebff8b18d7a29", r),
            children: [t.title && (0, o.jsx)(l, {
              to: t?.href ?? t?.to,
              children: (0, o.jsx)("h3", {
                children: t.title
              })
            }), Array.isArray(t?.description?.content) ? t.description.content?.map(((e, t) => e?.unorderedList ? (0, o.jsx)(n.A, {
              columns: e.unorderedList.columns ?? null,
              style: {
                "--unordered-list-padding": "var(--grid-gap-static-sm)",
                "--unordered-list-margin-bottom": ".5rem"
              },
              noImg: !0,
              list: e.unorderedList.list
            }, t) : e?.image ? (0, o.jsx)(s.A, {
              image: e.image,
              className: e?.className,
              ariaLabel: e.image?.ariaLabel
            }, t) : e?.separator ? (0, o.jsx)("div", {
              style: {
                margin: `${e.separator.spacing} 0`
              },
              children: (0, o.jsx)(i.A, {})
            }, t) : (0, o.jsx)("p", {
              children: (0, o.jsx)("span", {
                className: c,
                dangerouslySetInnerHTML: {
                  __html: e
                }
              })
            }, t))) : (0, o.jsx)("span", {
              className: c,
              dangerouslySetInnerHTML: {
                __html: t.description
              }
            })]
          })
        }
    },
    14522: (e, t, r) => {
      "use strict";
      r.d(t, {
        H: () => d,
        r: () => c
      });
      var a = r(71403),
        s = r(40207),
        n = r(46632);
      const i = e => {
          let {
            impressionTracking: t,
            gtm: r = {},
            children: a
          } = e;
          return t?.shouldTrack ? (0, n.jsx)(d, {
            threshold: t?.threshold,
            gtm: r,
            children: a
          }) : a
        },
        c = (e, t) => r => ((e, t, r) => (0, n.jsx)(i, {
          impressionTracking: r?.impressionTracking,
          gtm: r?.gtm,
          children: (0, n.jsx)(e, {
            ...t
          })
        }))(e, r, t);
      var o = r(42756);
      const l = {
          event: "page_section_impression",
          element_placement: null
        },
        d = e => {
          let {
            threshold: t = .6,
            children: r,
            gtm: i = {}
          } = e;
          const {
            track: c
          } = (0, s.useGtmTrack)(), {
            ref: d,
            scrollTracked: u
          } = (0, o.useScrollTracking)(t);
          return (0, a.useEffect)((() => {
            u && c({
              ...l,
              ...i
            })
          }), [u]), (0, n.jsx)("section", {
            ref: d,
            children: r
          })
        }
    },
    62550: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => i
      });
      var a = r(71403),
        s = r(64544),
        n = r(46632);
      const i = e => {
        let {
          children: t,
          ...r
        } = e;
        const [i, c] = (0, a.useState)(!1);
        return (0, n.jsx)(s.zb, {
          ...r,
          onReady: () => {
            document.fonts.ready.then((() => {
              c(!0)
            }))
          },
          children: t
        })
      }
    },
    52328: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => o
      });
      var a = r(2024),
        s = r(62550);
      const n = {
        badge: "rockstargames-modules-core-newswire-articlee279e2cebfa338f34b03fd732416e836",
        badgeSizeUpdate: "rockstargames-modules-core-newswire-articled7362a3e27ccaad9d2aadd2f31691340",
        badge2: "rockstargames-modules-core-newswire-articled697f4a5f7c876d5e540a96da1e0ca3a",
        badge3: "rockstargames-modules-core-newswire-articlee1bba3cd4554abbb48a030af24bbada5"
      };
      var i = r(46632);
      const c = e => {
          let {
            wrapper: t,
            children: r,
            role: a,
            splitter: s
          } = e;
          return s || a ? t(r) : r
        },
        o = e => {
          let {
            badge: t,
            badgeType: o,
            role: l,
            splitter: d
          } = e;
          const u = [];
          d ? t.split(d).map(((e, t) => u.push(e))) : u.push(t);
          let m = 100;
          return 2 == u.length && u[1].length < 4 && "off" !== u[1].toLowerCase() && 45, (0, i.jsxs)(c, {
            splitter: d,
            role: l,
            wrapper: e => (0, i.jsx)("div", {
              className: `${n.badge} ${o?n[o]:""} `,
              children: e
            }),
            children: [(0, i.jsx)(i.Fragment, {
              children: l && (0, i.jsx)(a.A, {
                image: {
                  alt: l,
                  desktop: r(45628)(`./${l}.png`)
                }
              })
            }), (0, i.jsx)(s.A, {
              className: `${d||l?"":n.badge} ${o?n[o]:""}`,
              min: 8,
              max: 1e3,
              mode: d || l ? "single" : "multi",
              children: u[0]
            }), (0, i.jsx)(i.Fragment, {
              children: u.shift() && d && u.length >= 1 && (0, i.jsx)(s.A, {
                min: 8,
                max: 1e3,
                mode: "single",
                forceSingleModeWidth: !0,
                children: u.join(" ")
              })
            })]
          }, "badge-wrapper")
        }
    },
    8999: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => l
      });
      var a = r(74401),
        s = r(42756),
        n = r(52328),
        i = r(2024);
      var c = r(46632);
      const o = e => {
          let {
            hero: t,
            children: r
          } = e;
          return t ? (0, c.jsx)("div", {
            className: "rockstargames-modules-core-newswire-articleefc561ad30f5dfe75c79d939737650dc",
            children: r
          }) : r
        },
        l = e => {
          let {
            badge: t = null,
            badgeType: r,
            discountTxt: l,
            splitter: d,
            image: u,
            style: m,
            className: f = "",
            attributes: p = {},
            role: g,
            hero: b = !1
          } = e;
          return (0, c.jsx)(o, {
            hero: b,
            children: (0, c.jsx)("figure", {
              children: (0, c.jsxs)("div", {
                className: (0, a.classList)("rockstargames-modules-core-newswire-articlecab262c98c7f5bb3e982d9b075b3c2a8", b ? "rockstargames-modules-core-newswire-articlecefd6d8859aeec1057caed28caa160c3" : "", p?.hiddenMobile ? "hiddenMobile" : "", p?.hiddenLarge ? "hiddenLarge" : "", p?.className, f),
                style: (0, s.safeStyles)({
                  ...m,
                  ...p?.style
                }),
                ...p,
                children: [(0, c.jsx)(i.A, {
                  image: u,
                  className: f
                }), (u?.badge || u?.discountTxt || t || l) && (0, c.jsx)(n.A, {
                  badge: u?.discountTxt ?? u?.badge ?? t ?? l,
                  badgeType: r,
                  splitter: u?.splitter ?? d,
                  role: u?.role ?? g
                }), u?.caption && (0, c.jsx)("figcaption", {
                  dangerouslySetInnerHTML: {
                    __html: u.caption
                  }
                })]
              })
            })
          })
        }
    },
    63303: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => n
      });
      const a = {
        hr: "rockstargames-modules-core-newswire-articlef5cd418ab2ef6a89df6c95d2caa06ba8",
        redLine: "rockstargames-modules-core-newswire-articlef8b44ef9bbd3e7feb22bf79cc009b16e",
        gtao: "rockstargames-modules-core-newswire-articlec442f7264db862a7cca6d9a56dacc205"
      };
      var s = r(46632);
      const n = e => {
        let {
          style: t,
          className: r = "",
          type: n
        } = e;
        return (0, s.jsx)("div", {
          style: t,
          className: [a.hr, a[n], r].join(" ")
        })
      }
    },
    63672: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => u
      });
      var a = r(71403),
        s = r(61631),
        n = r.n(s),
        i = r(74401),
        c = r(42756);
      const o = {
        pillBtn: "rockstargames-modules-core-newswire-articlea89792e50dfe5470a67f42b9e143c824",
        selected: "rockstargames-modules-core-newswire-articlebcce8ac50552b225f30d185d876a3e14",
        grid: "rockstargames-modules-core-newswire-articleac295ed5b9cb441ed17843b34e83ea17",
        itemList: "rockstargames-modules-core-newswire-articlecaf5589ddeca00ed09213e547674b1f3",
        gtaplus: "rockstargames-modules-core-newswire-articleb291112adcf994a0f6acadd86f73b78a",
        rdo: "rockstargames-modules-core-newswire-articled146e8f862baefb60e91be5aa3c17b6e",
        noImg: "rockstargames-modules-core-newswire-articleba9b5ae08642b0213a3f04b3db9a9dac",
        gtao: "rockstargames-modules-core-newswire-articleb6f2bdfd6a1d57b7ce840f7a56cc510b",
        custom: "rockstargames-modules-core-newswire-articleaf89164a043648d1464686ff13363ee4",
        yellow: "rockstargames-modules-core-newswire-articled244b17b74fc46269e8a106a99ab0f87",
        hotPink: "rockstargames-modules-core-newswire-articled90b28503318563cfd6059146d1fb6b6",
        red: "rockstargames-modules-core-newswire-articlec3f8a8706901874d906f94c626be3c1e",
        turquoise: "rockstargames-modules-core-newswire-articlefe2ec36e92e2bb4d453fdc4b05966418",
        purple: "rockstargames-modules-core-newswire-articlef5f7baf5b56f5b2ada053a93392bbf7a",
        teal: "rockstargames-modules-core-newswire-articlef4a229f41cd20f181d810c311416e3f2",
        blue: "rockstargames-modules-core-newswire-articlef6f689d687bcd482ea2cd2990fd66878",
        green: "rockstargames-modules-core-newswire-articleab270f1b4d3ad43e7bc51393b7c5c089",
        darkRed: "rockstargames-modules-core-newswire-articledc24ce78d962f3472b06955bf8855103",
        darkBlue: "rockstargames-modules-core-newswire-articleb354493baac7389b21b511009f287428",
        goldenrod: "rockstargames-modules-core-newswire-articlee4a078efee11d24c64e93ccf0744a33f",
        skull: "rockstargames-modules-core-newswire-articled4581a495de14e6762bb15debe5bb810"
      };
      var l = r(46632);
      const {
        sanitize: d
      } = n(), u = e => {
        let {
          list: t,
          string: r,
          starColor: s,
          style: n,
          className: u,
          game: m,
          noImg: f,
          columns: p,
          mobileColumns: g
        } = e;
        const [b, h] = (0, a.useState)(null), w = r ? r.split("_#_") : t;
        return (0, a.useEffect)((() => {
          h(t)
        }), [t]), r || t ? p && b ? (0, l.jsx)("div", {
          className: o.grid,
          style: {
            "--unordered-list-grid-column": p,
            "--unordered-list-grid-column-mobile": g ?? p
          },
          children: (0, l.jsx)("ul", {
            style: (0, c.safeStyles)(n),
            className: (0, i.classList)(o.itemList, o.noImg, o[s], o[m]),
            children: b.map(((e, t) => (0, l.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: d(e.content)
              }
            }, t)))
          })
        }) : (0, l.jsx)("ul", {
          style: (0, c.safeStyles)(n),
          className: (0, i.classList)(o.itemList, o.custom, f ? o.noImg : "", s ? o[s] : "", m ? o[m] : "", u ?? ""),
          children: w.map(((e, t) => (0, l.jsx)("li", {
            dangerouslySetInnerHTML: {
              __html: d(e?.content ?? e)
            }
          }, t)))
        }) : null
      }
    },
    2024: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => o
      });
      var a = r(28089),
        s = r(42756);
      const n = "rockstargames-modules-core-newswire-articleeb64520e04e486931cd65dc5b3fa61e8";
      var i = r(46632);
      const c = e => {
          let {
            alt: t,
            className: a,
            src: n,
            style: c
          } = e;
          const [o, l] = (0, s.usePreloadImg)(n);
          let d = n;
          !1 === o && ("rockstargames-modules-core-newswire-articleee609f31f3685766122c2c6fc0ef0710" === a && (d = r(14572)), d = r(8820));
          const {
            width: u,
            height: m
          } = l, f = {
            "--aspect-ratio": Number.isNaN(u / m) ? "" : u / m,
            ...c
          };
          return (0, i.jsx)("img", {
            src: d,
            className: a ?? "",
            alt: t,
            style: f
          })
        },
        o = e => {
          let {
            className: t,
            style: o = {},
            image: l = {},
            imageStyle: d = {}
          } = e, {
            alt: u,
            src: m
          } = (0, a.useImageParser)(l);
          const {
            isMobile: f
          } = (0, s.useWindowResize)();
          return m.desktop || m.mobile || (u = "", m = {
            mobile: r(14572),
            desktop: r(8820)
          }), (0, i.jsx)("div", {
            className: l.frame ? `${l.frame} ${n}` : n,
            style: o,
            children: (0, i.jsx)(c, {
              style: {
                ...d,
                ...l?.style
              },
              src: f ? m.mobile || m.desktop : m?.desktop || m?.mobile,
              alt: u,
              className: t
            })
          })
        }
    },
    45628: (e, t, r) => {
      var a = {
        "./bounty.png": 89177,
        "./collector.png": 3787,
        "./moonshiner.png": 14022,
        "./naturalist.png": 34629,
        "./trader.png": 22864
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
      }, s.resolve = n, e.exports = s, s.id = 45628
    },
    89177: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/48754c6fc2f75b0554098423f2bda6d1.png"
    },
    3787: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e111377ba943e9eefaa9204f77c77093.png"
    },
    14022: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4639a2711d1bca49a87c302784050ee3.png"
    },
    34629: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/898794daaec68a69ef5ec4afaefe1948.png"
    },
    22864: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6e77bb0f25a6ea37e8d831b12df9fa3c.png"
    },
    8820: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8787df71c723ebe44f82fd13ed216e09.jpg"
    },
    14572: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61ae357c3bfbabb5d765e9a7c794d08f.png"
    }
  }
]);