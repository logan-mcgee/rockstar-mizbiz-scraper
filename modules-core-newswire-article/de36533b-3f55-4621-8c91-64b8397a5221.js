try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "de36533b-3f55-4621-8c91-64b8397a5221", e._sentryDebugIdIdentifier = "sentry-dbid-de36533b-3f55-4621-8c91-64b8397a5221")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "1abf2adfc44dda687079577dcca1257a51fb3eb0",
    packageName: "@rockstargames/modules-core-newswire-article",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "1abf2adfc44dda687079577dcca1257a51fb3eb0"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [6489, 8870], {
    2661: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4639a2711d1bca49a87c302784050ee3.png"
    },
    2851: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e, t) {
        if (e === t) return !0;
        var r = Object.keys(e),
          n = Object.keys(t);
        if (r.length !== n.length) return !1;
        for (var a = Object.prototype.hasOwnProperty, s = 0; s < r.length; s++)
          if (!a.call(t, r[s]) || e[r[s]] !== t[r[s]]) return !1;
        return !0
      }
    },
    4246: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r;
        e() ? t((function r(a) {
          for (var s = arguments.length, o = Array(s > 1 ? s - 1 : 0), i = 1; i < s; i++) o[i - 1] = arguments[i];
          a ? n(a) : e.apply(this, o) ? t(r) : n(null)
        })) : n(null)
      };
      var r = function() {}
    },
    6451: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e, t) {
        var r = void 0,
          n = void 0,
          a = void 0,
          s = void 0,
          o = 0;

        function i() {
          s = 0, o = +new Date, a = e.apply(r, n), r = null, n = null
        }
        return function() {
          r = this, n = arguments;
          var e = new Date - o;
          return s || (e >= t ? i() : s = setTimeout(i, t - e)), a
        }
      }
    },
    7502: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/48754c6fc2f75b0554098423f2bda6d1.png"
    },
    8870: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, {
        default: () => h
      });
      var n = r(62229),
        a = r(4394),
        s = r(23205),
        o = r(80195),
        i = r(95966);
      const l = {
        panoramaCarouselWrapper: "rockstargames-modules-core-newswire-articleb4ada92c1921a931c699aafbbfb90d13",
        "swiper-navigation-disabled": "rockstargames-modules-core-newswire-articled20ad0b7e7720a75082106c87130274f",
        "swiper-rtl": "rockstargames-modules-core-newswire-articlec658d9e1c69cce7a4a70ef2d52858eba",
        fadeIn: "rockstargames-modules-core-newswire-articlebd483b684147d4885faa226c74eb7d1d",
        active: "rockstargames-modules-core-newswire-articleff176766f8bcd61f0d409caa3d43cdef",
        customPagination: "rockstargames-modules-core-newswire-articled4781b21716aa12e5b05f8f31172f10b",
        slotContainer: "rockstargames-modules-core-newswire-articlef7f1e5026f11d0cc5e371f990c3620e7",
        top: "rockstargames-modules-core-newswire-articleec807ccbb44eb584b15097ea4127de46",
        left: "rockstargames-modules-core-newswire-articleca8f1364250e53c94ffb4a0147702b20",
        right: "rockstargames-modules-core-newswire-articleada7cdbc241d461551ac775229986a37",
        bottom: "rockstargames-modules-core-newswire-articlee515362b60fbd4b87445a327de93234e",
        slideContent: "rockstargames-modules-core-newswire-articled8c6874e2f33425124e575a60fa339ab",
        backgroundContent: "rockstargames-modules-core-newswire-articlefbee414bfae93f3621f4445ff9c4bf7c",
        foregroundContent: "rockstargames-modules-core-newswire-articlefee922e055933776f0d9fc3b3ee8aaab",
        "swiper-preloader-spin": "rockstargames-modules-core-newswire-articledfaec79c93eeafe2c26c2f2e0c576afd"
      };
      var c = r(70954);
      const d = e => {
          let {
            shouldFade: t,
            condition: r,
            className: n,
            children: a
          } = e;
          return (0, c.jsx)("div", {
            className: (0, i.classList)(n, t ? l.fadeIn : "", r ? l.active : ""),
            children: a
          })
        },
        u = e => {
          let {
            currentSlide: t
          } = e;
          return (0, c.jsx)("div", {
            className: l.customPagination,
            children: (0, c.jsx)("span", {
              children: t?.itemName ?? "Item"
            })
          })
        },
        f = e => {
          let {
            item: t,
            vertical: r,
            horizontal: n
          } = e;
          return t && t?.content ? (0, c.jsx)(d, {
            shouldFade: t?.fadeIn,
            condition: t?.fadeIn,
            className: (0, i.classList)(l.slot, l[r], l[n]),
            children: (0, c.jsx)(o.A, {
              ...t.content[0]
            })
          }) : null
        },
        m = e => {
          let {
            active: t = !1,
            backgroundContent: r,
            foregroundContent: n
          } = e;
          return (0, c.jsxs)("div", {
            className: l.slideContent,
            children: [r && (0, c.jsx)(d, {
              shouldFade: r?.fadeIn,
              condition: t,
              children: (0, c.jsx)("div", {
                className: l.backgroundContent,
                children: (0, c.jsx)(o.A, {
                  ...r.imageWithBadge
                })
              })
            }), n && (0, c.jsx)(d, {
              shouldFade: n?.fadeIn,
              condition: t,
              children: (0, c.jsx)("div", {
                className: l.foregroundContent,
                children: (0, c.jsx)(o.A, {
                  ...n.imageWithBadge
                })
              })
            })]
          })
        },
        p = e => {
          let {
            loop: t = !0,
            grabCursor: r = !0,
            centeredSlides: o = !0,
            slides: d = null
          } = e;
          const [p, h] = (0, n.useState)(null);
          return d ? (0, c.jsx)("div", {
            className: l.panoramaCarouselWrapper,
            children: (0, c.jsxs)(s.RC, {
              modules: [a.Vx],
              loop: t,
              grabCursor: r,
              centeredSlides: o,
              slidesPerView: 1,
              spaceBetween: 0,
              navigation: !0,
              pagination: !1,
              speed: 700,
              onActiveIndexChange: e => {
                h(d[e?.realIndex ?? 0])
              },
              breakpoints: {
                768: {
                  slidesPerView: 1.25
                },
                1024: {
                  slidesPerView: 1.5
                },
                1920: {
                  slidesPerView: 1.75
                }
              },
              children: [(0, c.jsxs)("div", {
                className: (0, i.classList)(l.slotContainer, l.top),
                children: [(0, c.jsx)(f, {
                  item: p?.topLeftSlot,
                  vertical: "top",
                  horizontal: "left"
                }), (0, c.jsx)(f, {
                  item: p?.topCenterSlot,
                  vertical: "top",
                  horizontal: "center"
                }), (0, c.jsx)(f, {
                  item: p?.topRightSlot,
                  vertical: "top",
                  horizontal: "right"
                })]
              }), d.map((e => (0, c.jsx)(s.qr, {
                children: t => {
                  let {
                    isActive: r
                  } = t;
                  return (0, c.jsx)(m, {
                    active: r,
                    ...e
                  })
                }
              }, e?.key))), (0, c.jsxs)("div", {
                className: (0, i.classList)(l.slotContainer, l.bottom),
                children: [(0, c.jsx)(f, {
                  item: p?.bottomLeftSlot,
                  vertical: "bottom",
                  horizontal: "left"
                }), (0, c.jsx)(f, {
                  item: p?.bottomRightSlot,
                  vertical: "bottom",
                  horizontal: "right"
                })]
              }), (0, c.jsx)(u, {
                currentSlide: p
              })]
            })
          }) : null
        },
        h = e => {
          let {
            type: t = null,
            className: r,
            style: n,
            panoramaCarousel: a
          } = e;
          return t ? (s = p, o = a, (0, c.jsx)(s, {
            className: r,
            style: n,
            ...o
          })) : null;
          var s, o
        }
    },
    9333: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8787df71c723ebe44f82fd13ed216e09.jpg"
    },
    16386: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/898794daaec68a69ef5ec4afaefe1948.png"
    },
    22154: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => o
      });
      var n = r(62229),
        a = r(82777),
        s = r(70954);
      const o = e => {
        let {
          children: t,
          ...r
        } = e;
        const [o, i] = (0, n.useState)(!1);
        return (0, s.jsx)(a.zb, {
          ...r,
          onReady: () => {
            document.fonts.ready.then((() => {
              i(!0)
            }))
          },
          children: t
        })
      }
    },
    24970: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e111377ba943e9eefaa9204f77c77093.png"
    },
    28839: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61ae357c3bfbabb5d765e9a7c794d08f.png"
    },
    38635: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6e77bb0f25a6ea37e8d831b12df9fa3c.png"
    },
    40118: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => l
      });
      var n = r(72405),
        a = r(95966);
      const s = "rockstargames-modules-core-newswire-articlec8dc03880ce2e12f3fdea5b5b587f27f";
      var o = r(70954);
      const i = e => {
          let {
            alt: t,
            className: n,
            src: s,
            style: i
          } = e;
          const [l, c] = (0, a.usePreloadImg)(s);
          let d = s;
          !1 === l && ("rockstargames-modules-core-newswire-articlea6a06e2d5c4f1811ea39d17312ca2e67" === n && (d = r(28839)), d = r(9333));
          const {
            width: u,
            height: f
          } = c, m = {
            "--aspect-ratio": Number.isNaN(u / f) ? "" : u / f,
            ...i
          };
          return (0, o.jsx)("img", {
            src: d,
            className: n ?? "",
            alt: t,
            style: m
          })
        },
        l = e => {
          let {
            className: t,
            style: l = {},
            image: c = {},
            imageStyle: d = {}
          } = e, {
            alt: u,
            src: f
          } = (0, n.S1)(c);
          const {
            isMobile: m
          } = (0, a.useWindowResize)();
          f.desktop || f.mobile || (u = "", f = {
            mobile: r(28839),
            desktop: r(9333)
          });
          let p = c.frame ? `${c.frame} ${s}` : s;
          return (0, o.jsx)("div", {
            className: p,
            style: l,
            children: (0, o.jsx)(i, {
              style: {
                ...d,
                ...c?.style
              },
              src: m ? f.mobile || f.desktop : f?.desktop || f?.mobile,
              alt: u,
              className: t
            })
          })
        }
    },
    46511: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n = Object.assign || function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        },
        a = function() {
          function e(e, t) {
            for (var r = 0; r < t.length; r++) {
              var n = t[r];
              n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
          }
          return function(t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t
          }
        }(),
        s = m(r(62229)),
        o = m(r(18626)),
        i = m(r(2851)),
        l = m(r(88694)),
        c = m(r(4246)),
        d = m(r(6451)),
        u = m(r(93677)),
        f = r(67354);

      function m(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function p(e, t) {
        return e.scrollWidth - 1 <= t
      }

      function h(e, t) {
        return e.scrollHeight - 1 <= t
      }
      var g = function(e) {
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
        }(t, e), a(t, [{
          key: "componentDidMount",
          value: function() {
            this.props.autoResize && window.addEventListener("resize", this.handleWindowResize), this.process()
          }
        }, {
          key: "componentDidUpdate",
          value: function(e) {
            this.state.ready && ((0, i.default)(this.props, e) || this.process())
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
              n = t.max,
              a = t.mode,
              s = t.forceSingleModeWidth,
              o = t.onReady,
              i = this._parent,
              d = this._child,
              m = (0, f.innerWidth)(i),
              g = (0, f.innerHeight)(i);
            if (g <= 0 || isNaN(g)) console.warn("Can not process element without height. Make sure the element is displayed and has a static height.");
            else if (m <= 0 || isNaN(m)) console.warn("Can not process element without width. Make sure the element is displayed and has a static width.");
            else {
              var b = (0, u.default)();
              this.pid = b;
              var w = function() {
                  return b !== e.pid
                },
                y = "multi" === a ? function() {
                  return h(d, g)
                } : function() {
                  return p(d, m)
                },
                v = "multi" === a ? function() {
                  return p(d, m)
                } : function() {
                  return h(d, g)
                },
                x = void 0,
                k = r,
                _ = n;
              this.setState({
                ready: !1
              }), (0, l.default)([function(t) {
                return (0, c.default)((function() {
                  return k <= _
                }), (function(t) {
                  if (w()) return t(!0);
                  x = parseInt((k + _) / 2, 10), e.setState({
                    fontSize: x
                  }, (function() {
                    return w() ? t(!0) : (y() ? k = x + 1 : _ = x - 1, t())
                  }))
                }), t)
              }, function(t) {
                return "single" === a && s || v() ? t() : (k = r, _ = x, (0, c.default)((function() {
                  return k < _
                }), (function(t) {
                  if (w()) return t(!0);
                  x = parseInt((k + _) / 2, 10), e.setState({
                    fontSize: x
                  }, (function() {
                    return b !== e.pid ? t(!0) : (v() ? k = x + 1 : _ = x - 1, t())
                  }))
                }), t))
              }, function(t) {
                if (x = Math.min(k, _), x = Math.max(x, r), x = Math.min(x, n), x = Math.max(x, 0), w()) return t(!0);
                e.setState({
                  fontSize: x
                }, t)
              }], (function(t) {
                t || w() || e.setState({
                  ready: !0
                }, (function() {
                  return o(x)
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
              a = t.text,
              o = t.style,
              i = (t.min, t.max, t.mode),
              l = (t.forceWidth, t.forceSingleModeWidth, t.throttle, t.autoResize, t.onReady, function(e, t) {
                var r = {};
                for (var n in e) t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]);
                return r
              }(t, ["children", "text", "style", "min", "max", "mode", "forceWidth", "forceSingleModeWidth", "throttle", "autoResize", "onReady"])),
              c = this.state,
              d = c.fontSize,
              u = c.ready,
              f = n({}, o, {
                fontSize: d
              }),
              m = {
                display: u ? "block" : "inline-block"
              };
            return "single" === i && (m.whiteSpace = "nowrap"), s.default.createElement("div", n({
              ref: function(t) {
                return e._parent = t
              },
              style: f
            }, l), s.default.createElement("div", {
              ref: function(t) {
                return e._child = t
              },
              style: m
            }, a && "function" == typeof r ? u ? r(a) : a : r))
          }
        }]), t
      }(s.default.Component);
      g.propTypes = {
        children: o.default.node,
        text: o.default.string,
        min: o.default.number,
        max: o.default.number,
        mode: o.default.oneOf(["single", "multi"]),
        forceSingleModeWidth: o.default.bool,
        throttle: o.default.number,
        onReady: o.default.func
      }, g.defaultProps = {
        min: 1,
        max: 100,
        mode: "multi",
        forceSingleModeWidth: !0,
        throttle: 50,
        autoResize: !0,
        onReady: function() {}
      }, t.default = g
    },
    50911: (e, t, r) => {
      "use strict";
      r.d(t, {
        i: () => c,
        o: () => l
      });
      var n = r(62229),
        a = r(95966),
        s = r(70954);
      const o = (0, a.setContextItem)({
          context: (0, n.createContext)(),
          key: "tinaPayloadContext"
        }),
        {
          Provider: i
        } = o,
        l = e => {
          let {
            children: t,
            payload: r
          } = e;
          return (0, s.jsx)(i, {
            value: r,
            children: t
          })
        },
        c = () => (0, n.useContext)(o)
    },
    60540: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => l
      });
      var n = r(40118),
        a = r(22154);
      const s = {
        badge: "rockstargames-modules-core-newswire-articleb7268b0e907630904b6689af83fee8e3",
        badgeSizeUpdate: "rockstargames-modules-core-newswire-articlece8632d7464b556158a1d549f653498c",
        badge2: "rockstargames-modules-core-newswire-articled08ce7145bc9562355a3984f8ccc9313",
        badge3: "rockstargames-modules-core-newswire-articlec7c60cfb12b6e9be68893c60814b3ed7"
      };
      var o = r(70954);
      const i = e => {
          let {
            wrapper: t,
            children: r,
            role: n,
            splitter: a
          } = e;
          return a || n ? t(r) : r
        },
        l = e => {
          let {
            badge: t,
            badgeType: l,
            role: c,
            splitter: d
          } = e;
          const u = [];
          return d ? t.split(d).map(((e, t) => u.push(e))) : u.push(t), (0, o.jsxs)(i, {
            splitter: d,
            role: c,
            wrapper: e => (0, o.jsx)("div", {
              className: `${s.badge} ${l?s[l]:""} `,
              children: e
            }),
            children: [(0, o.jsx)(o.Fragment, {
              children: c && (0, o.jsx)(n.A, {
                image: {
                  alt: c,
                  desktop: r(65287)(`./${c}.png`)
                }
              })
            }), (0, o.jsx)(a.A, {
              className: `${d||c?"":s.badge} ${l?s[l]:""}`,
              min: 8,
              max: 1e3,
              mode: d || c ? "single" : "multi",
              children: u[0]
            }), (0, o.jsx)(o.Fragment, {
              children: u.shift() && d && u.length >= 1 && (0, o.jsx)(a.A, {
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
    65287: (e, t, r) => {
      var n = {
        "./bounty.png": 7502,
        "./collector.png": 24970,
        "./moonshiner.png": 2661,
        "./naturalist.png": 16386,
        "./trader.png": 38635
      };

      function a(e) {
        var t = s(e);
        return r(t)
      }

      function s(e) {
        if (!r.o(n, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        }
        return n[e]
      }
      a.keys = function() {
        return Object.keys(n)
      }, a.resolve = s, e.exports = a, a.id = 65287
    },
    67354: (e, t) => {
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
    72405: (e, t, r) => {
      "use strict";
      r.d(t, {
        C1: () => l,
        S1: () => i,
        XC: () => f,
        jS: () => c,
        qg: () => d,
        z0: () => u
      });
      var n = r(62229),
        a = r(95966),
        s = r(50911);
      const o = e => {
          if (!e) return null;
          const {
            hostname: t,
            pathname: r
          } = new URL(e, (0, a.getCdnPrefix)(!0));
          return "/" === r ? null : (t.endsWith(".akamaized.net"), e)
        },
        i = e => {
          let {
            alt: t = null,
            mobile: r = null,
            desktop: i = null,
            ariaLabel: l = null,
            sources: c = null,
            prod: d = null
          } = e;
          const u = (0, a.useLocale)(),
            {
              meta: f = {}
            } = (0, s.i)() ?? {},
            [m, p] = (0, n.useState)(d ?? f?.cdn ?? f?.prod ?? !0);
          (0, n.useEffect)((() => {
            p(d ?? f?.cdn ?? f?.prod ?? !0)
          }), [d, f]);
          const h = (0, n.useCallback)((e => {
            const t = null !== c,
              r = e?.previewSrc ?? e ?? null;
            if (null === r || "string" != typeof r) return null;
            if (r.startsWith("http")) return o(r);
            const n = `${t?(0,a.getCdnPrefix)(m):""}${r}`;
            return o(n)
          }), [m, c]);
          return {
            alt: t,
            ariaLabel: l,
            src: {
              mobile: h(c?.[u]?.mobile ?? c?.en_us?.mobile ?? r),
              desktop: h(c?.[u]?.desktop ?? c?.en_us?.desktop ?? i)
            }
          }
        },
        l = e => {
          const t = (0, s.i)() ?? {},
            {
              meta: r = {}
            } = t,
            [i, l] = (0, n.useState)(r?.cdn ?? r?.prod ?? !1);
          return (0, n.useEffect)((() => {
            l(r?.cdn ?? r?.prod ?? !1)
          }), [r]), e ? e?.startsWith("http") ? o(e) : o(`${(0,a.getCdnPrefix)(i)}${e}`) : null
        },
        c = () => {
          const e = (0, s.i)() ?? {},
            {
              meta: t = {}
            } = e,
            r = (0, n.useMemo)((() => t?.cdn ?? t?.prod ?? !1), [t]);
          return (0, n.useCallback)((function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const n = t?.prod ?? r;
            return e ? e?.startsWith("http") ? o(e) : o(`${(0,a.getCdnPrefix)(n)}${e}`) : null
          }), [r])
        },
        d = e => e.full_src,
        u = e => {
          const t = e?.previewSrc ?? e?.preview_src ?? e;
          return t?.startsWith("http") ? t : `${(0,a.getCdnPrefix)(!1)}${t}`
        },
        f = e => e.meta.uploads_directory
    },
    80195: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => c
      });
      var n = r(62229),
        a = r(95966),
        s = r(60540),
        o = r(40118);
      var i = r(70954);
      const l = e => {
          let {
            hero: t,
            children: r
          } = e;
          return t ? (0, i.jsx)("div", {
            className: "rockstargames-modules-core-newswire-articlea429886d721550d02521f7f5c9de7f5b",
            children: r
          }) : r
        },
        c = e => {
          let {
            badge: t = null,
            badgeType: r,
            discountTxt: c,
            splitter: d,
            image: u,
            style: f,
            className: m = "",
            attributes: p = {},
            role: h,
            hero: g = !1
          } = e;
          const b = (0, n.useMemo)((() => {
            if (u?.badge || u?.discountTxt || t || c) return (0, i.jsx)(s.A, {
              badge: u?.discountTxt ?? u?.badge ?? t ?? c,
              badgeType: r,
              splitter: u?.splitter ?? d,
              role: u?.role ?? h
            })
          }), [t, r, c, u, h, d]);
          return (0, i.jsx)(l, {
            hero: g,
            children: (0, i.jsx)("figure", {
              children: (0, i.jsxs)("div", {
                className: (0, a.classList)("rockstargames-modules-core-newswire-articled9ac792281efe15bcd4589b028d1c27b", g ? "rockstargames-modules-core-newswire-articlee430c4662cd185f58259d4a8d8b322de" : "", p?.hiddenMobile ? "hiddenMobile" : "", p?.hiddenLarge ? "hiddenLarge" : "", p?.className, m),
                style: (0, a.safeStyles)({
                  ...f,
                  ...p?.style
                }),
                ...p,
                children: [(0, i.jsx)(o.A, {
                  image: u,
                  className: m
                }), b, u?.caption && (0, i.jsx)("figcaption", {
                  dangerouslySetInnerHTML: {
                    __html: u.caption
                  }
                })]
              })
            })
          })
        }
    },
    82777: (e, t, r) => {
      "use strict";
      t.zb = void 0;
      var n, a = (n = r(46511)) && n.__esModule ? n : {
        default: n
      };
      t.zb = a.default, a.default
    },
    88694: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e, t) {
        var r = [],
          n = 0,
          s = !0;

        function o(e) {
          function n() {
            t && t(e, r)
          }
          s ? a.default.nextTick(n) : n()
        }
        e.length > 0 ? e[0]((function t(a, s) {
          r.push(s), ++n >= e.length || a ? o(a) : e[n](t)
        })) : o(null), s = !1
      };
      var n, a = (n = r(13404)) && n.__esModule ? n : {
        default: n
      }
    },
    93677: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function() {
        return r++
      };
      var r = 0
    }
  }
]);