try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "ebddfbab-c58e-4eae-93ce-4d5968b4bd4a", e._sentryDebugIdIdentifier = "sentry-dbid-ebddfbab-c58e-4eae-93ce-4d5968b4bd4a")
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
  [1208, 2066], {
    40055(e, t, r) {
      "use strict";
      var n = r(42528);

      function a() {}

      function o() {}
      o.resetWarningCache = a, e.exports = function() {
        function e(e, t, r, a, o, s) {
          if (s !== n) {
            var i = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw i.name = "Invariant Violation", i
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
          checkPropTypes: o,
          resetWarningCache: a
        };
        return r.PropTypes = r, r
      }
    },
    60331(e, t, r) {
      e.exports = r(40055)()
    },
    42528(e) {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
    },
    97734(e, t, r) {
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
        o = p(r(93082)),
        s = p(r(60331)),
        i = p(r(48824)),
        l = p(r(4413)),
        c = p(r(88769)),
        d = p(r(47232)),
        u = p(r(40054)),
        f = r(42483);

      function p(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function m(e, t) {
        return e.scrollWidth - 1 <= t
      }

      function h(e, t) {
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
              o = t.forceSingleModeWidth,
              s = t.onReady,
              i = this._parent,
              d = this._child,
              p = (0, f.innerWidth)(i),
              b = (0, f.innerHeight)(i);
            if (b <= 0 || isNaN(b)) console.warn("Can not process element without height. Make sure the element is displayed and has a static height.");
            else if (p <= 0 || isNaN(p)) console.warn("Can not process element without width. Make sure the element is displayed and has a static width.");
            else {
              var g = (0, u.default)();
              this.pid = g;
              var y = function() {
                  return g !== e.pid
                },
                w = "multi" === a ? function() {
                  return h(d, b)
                } : function() {
                  return m(d, p)
                },
                v = "multi" === a ? function() {
                  return m(d, p)
                } : function() {
                  return h(d, b)
                },
                x = void 0,
                k = r,
                _ = n;
              this.setState({
                ready: !1
              }), (0, l.default)([function(t) {
                return (0, c.default)(function() {
                  return k <= _
                }, function(t) {
                  if (y()) return t(!0);
                  x = parseInt((k + _) / 2, 10), e.setState({
                    fontSize: x
                  }, function() {
                    return y() ? t(!0) : (w() ? k = x + 1 : _ = x - 1, t())
                  })
                }, t)
              }, function(t) {
                return "single" === a && o || v() ? t() : (k = r, _ = x, (0, c.default)(function() {
                  return k < _
                }, function(t) {
                  if (y()) return t(!0);
                  x = parseInt((k + _) / 2, 10), e.setState({
                    fontSize: x
                  }, function() {
                    return g !== e.pid ? t(!0) : (v() ? k = x + 1 : _ = x - 1, t())
                  })
                }, t))
              }, function(t) {
                if (x = Math.min(k, _), x = Math.max(x, r), x = Math.min(x, n), x = Math.max(x, 0), y()) return t(!0);
                e.setState({
                  fontSize: x
                }, t)
              }], function(t) {
                t || y() || e.setState({
                  ready: !0
                }, function() {
                  return s(x)
                })
              })
            }
          }
        }, {
          key: "render",
          value: function() {
            var e = this,
              t = this.props,
              r = t.children,
              a = t.text,
              s = t.style,
              i = (t.min, t.max, t.mode),
              l = (t.forceWidth, t.forceSingleModeWidth, t.throttle, t.autoResize, t.onReady, function(e, t) {
                var r = {};
                for (var n in e) t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]);
                return r
              }(t, ["children", "text", "style", "min", "max", "mode", "forceWidth", "forceSingleModeWidth", "throttle", "autoResize", "onReady"])),
              c = this.state,
              d = c.fontSize,
              u = c.ready,
              f = n({}, s, {
                fontSize: d
              }),
              p = {
                display: u ? "block" : "inline-block"
              };
            return "single" === i && (p.whiteSpace = "nowrap"), o.default.createElement("div", n({
              ref: function(t) {
                return e._parent = t
              },
              style: f
            }, l), o.default.createElement("div", {
              ref: function(t) {
                return e._child = t
              },
              style: p
            }, a && "function" == typeof r ? u ? r(a) : a : r))
          }
        }]), t
      }(o.default.Component);
      b.propTypes = {
        children: s.default.node,
        text: s.default.string,
        min: s.default.number,
        max: s.default.number,
        mode: s.default.oneOf(["single", "multi"]),
        forceSingleModeWidth: s.default.bool,
        throttle: s.default.number,
        onReady: s.default.func
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
    42816(e, t, r) {
      "use strict";
      t.zb = void 0;
      var n, a = (n = r(97734)) && n.__esModule ? n : {
        default: n
      };
      t.zb = a.default, a.default
    },
    42483(e, t) {
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
    4413(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e, t) {
        var r = [],
          n = 0,
          o = !0;

        function s(e) {
          function n() {
            t && t(e, r)
          }
          o ? a.default.nextTick(n) : n()
        }
        e.length > 0 ? e[0](function t(a, o) {
          r.push(o), ++n >= e.length || a ? s(a) : e[n](t)
        }) : s(null), o = !1
      };
      var n, a = (n = r(43431)) && n.__esModule ? n : {
        default: n
      }
    },
    48824(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e, t) {
        if (e === t) return !0;
        var r = Object.keys(e),
          n = Object.keys(t);
        if (r.length !== n.length) return !1;
        for (var a = Object.prototype.hasOwnProperty, o = 0; o < r.length; o++)
          if (!a.call(t, r[o]) || e[r[o]] !== t[r[o]]) return !1;
        return !0
      }
    },
    47232(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e, t) {
        var r = void 0,
          n = void 0,
          a = void 0,
          o = void 0,
          s = 0;

        function i() {
          o = 0, s = +new Date, a = e.apply(r, n), r = null, n = null
        }
        return function() {
          r = this, n = arguments;
          var e = new Date - s;
          return o || (e >= t ? i() : o = setTimeout(i, t - e)), a
        }
      }
    },
    40054(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function() {
        return r++
      };
      var r = 0
    },
    88769(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r;
        e() ? t(function r(a) {
          for (var o = arguments.length, s = Array(o > 1 ? o - 1 : 0), i = 1; i < o; i++) s[i - 1] = arguments[i];
          a ? n(a) : e.apply(this, s) ? t(r) : n(null)
        }) : n(null)
      };
      var r = function() {}
    },
    85622(e, t, r) {
      "use strict";
      r.d(t, {
        A: () => s
      });
      var n = r(39793),
        a = r(93082),
        o = r(42816);
      const s = ({
        children: e,
        ...t
      }) => {
        const [, r] = (0, a.useState)(!1);
        return (0, n.jsx)(o.zb, {
          ...t,
          onReady: () => {
            document.fonts.ready.then(() => {
              r(!0)
            })
          },
          children: e
        })
      }
    },
    76862(e, t, r) {
      "use strict";
      r.d(t, {
        A: () => l
      });
      var n = r(39793),
        a = r(95967),
        o = r(85622);
      const s = {
          badge: "rockstargames-modules-core-newswire-articleb7268b0e907630904b6689af83fee8e3",
          badge2: "rockstargames-modules-core-newswire-articled08ce7145bc9562355a3984f8ccc9313",
          badge3: "rockstargames-modules-core-newswire-articlec7c60cfb12b6e9be68893c60814b3ed7",
          badgeSizeUpdate: "rockstargames-modules-core-newswire-articlece8632d7464b556158a1d549f653498c"
        },
        i = ({
          wrapper: e,
          children: t,
          role: r,
          splitter: n
        }) => n || r ? e(t) : t,
        l = ({
          badge: e,
          badgeType: t,
          role: l,
          splitter: c
        }) => {
          const d = [];
          return c ? e.split(c).map(e => d.push(e)) : d.push(e), (0, n.jsxs)(i, {
            splitter: c,
            role: l,
            wrapper: e => (0, n.jsx)("div", {
              className: `${s.badge} ${t?s[t]:""} `,
              children: e
            }),
            children: [(0, n.jsx)(n.Fragment, {
              children: l && (0, n.jsx)(a.A, {
                image: {
                  alt: l,
                  desktop: r(65287)(`./${l}.png`)
                }
              })
            }), (0, n.jsx)(o.A, {
              className: `${c||l?"":s.badge} ${t?s[t]:""}`,
              min: 8,
              max: 1e3,
              mode: c || l ? "single" : "multi",
              children: d[0]
            }), (0, n.jsx)(n.Fragment, {
              children: d.shift() && c && d.length >= 1 && (0, n.jsx)(o.A, {
                min: 8,
                max: 1e3,
                mode: "single",
                forceSingleModeWidth: !0,
                children: d.join(" ")
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
      var n = r(39793),
        a = r(93082),
        o = r(13331),
        s = r(81270),
        i = r(76862),
        l = r(95967);
      const c = ({
          hero: e,
          children: t
        }) => e ? (0, n.jsx)("div", {
          className: "rockstargames-modules-core-newswire-articlea429886d721550d02521f7f5c9de7f5b",
          children: t
        }) : t,
        d = ({
          badge: e = null,
          badgeType: t,
          discountTxt: r,
          splitter: d,
          image: u,
          style: f,
          className: p = "",
          attributes: m = {},
          role: h,
          hero: b = !1
        }) => {
          const g = (0, a.useMemo)(() => {
            if (u?.badge || u?.discountTxt || e || r) return (0, n.jsx)(i.A, {
              badge: u?.discountTxt ?? u?.badge ?? e ?? r,
              badgeType: t,
              splitter: u?.splitter ?? d,
              role: u?.role ?? h
            })
          }, [e, t, r, u, h, d]);
          return (0, n.jsx)(c, {
            hero: b,
            children: (0, n.jsx)("figure", {
              children: (0, n.jsxs)("div", {
                className: (0, s.default)("rockstargames-modules-core-newswire-articled9ac792281efe15bcd4589b028d1c27b", b ? "rockstargames-modules-core-newswire-articlee430c4662cd185f58259d4a8d8b322de" : "", m?.hiddenMobile ? "hiddenMobile" : "", m?.hiddenLarge ? "hiddenLarge" : "", m?.className, p),
                style: (0, o.safeStyles)({
                  ...f,
                  ...m?.style
                }),
                ...m,
                children: [(0, n.jsx)(l.A, {
                  role: u?.accessibleRole,
                  image: u,
                  className: p
                }), g, u?.caption && (0, n.jsx)("figcaption", {
                  dangerouslySetInnerHTML: {
                    __html: u.caption
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
      var n = r(39793),
        a = r(25993),
        o = r(13331);
      const s = ({
          alt: e,
          className: t,
          src: a,
          role: s,
          style: i
        }) => {
          const [l, c] = (0, o.usePreloadImg)(a);
          let d = a;
          !1 === l && (d = r(9333));
          const {
            width: u,
            height: f
          } = c, p = {
            "--aspect-ratio": Number.isNaN(u / f) ? "" : u / f,
            ...i
          };
          return (0, n.jsx)("img", {
            src: d,
            className: t ?? "",
            alt: e,
            style: p,
            role: s
          })
        },
        i = "rockstargames-modules-core-newswire-articlec8dc03880ce2e12f3fdea5b5b587f27f",
        l = ({
          className: e,
          style: t = {},
          image: l = {},
          imageStyle: c = {},
          role: d = "img"
        }) => {
          let {
            alt: u,
            src: f
          } = (0, a.S1)(l);
          const {
            isMobile: p
          } = (0, o.useWindowResize)(), m = p ? f.imageMobileStyle : f.imageDesktopStyle;
          f.desktop || f.mobile || (u = "", f = {
            mobile: r(28839),
            desktop: r(9333)
          });
          let h = l.frame ? `${l.frame} ${i}` : i;
          return (0, n.jsx)("div", {
            className: h,
            style: t,
            children: (0, n.jsx)(s, {
              style: {
                ...c,
                ...l?.style,
                ...m
              },
              src: p ? f.mobile || f.desktop : f?.desktop || f?.mobile,
              alt: u,
              role: d,
              className: e
            })
          })
        }
    },
    42066(e, t, r) {
      "use strict";
      r.r(t), r.d(t, {
        default: () => b
      });
      var n = r(39793),
        a = r(93082),
        o = r(50662),
        s = r(14653),
        i = r(35906),
        l = r(44453),
        c = r(81270);
      const d = {
          active: "rockstargames-modules-core-newswire-articleff176766f8bcd61f0d409caa3d43cdef",
          backgroundContent: "rockstargames-modules-core-newswire-articlefbee414bfae93f3621f4445ff9c4bf7c",
          bottom: "rockstargames-modules-core-newswire-articlee515362b60fbd4b87445a327de93234e",
          customPagination: "rockstargames-modules-core-newswire-articled4781b21716aa12e5b05f8f31172f10b",
          fadeIn: "rockstargames-modules-core-newswire-articlebd483b684147d4885faa226c74eb7d1d",
          foregroundContent: "rockstargames-modules-core-newswire-articlefee922e055933776f0d9fc3b3ee8aaab",
          left: "rockstargames-modules-core-newswire-articleca8f1364250e53c94ffb4a0147702b20",
          nextBtn: "rockstargames-modules-core-newswire-articlef973aaa2cc8eeceebc88bd5deaadfa74",
          panoramaCarouselWrapper: "rockstargames-modules-core-newswire-articleb4ada92c1921a931c699aafbbfb90d13",
          prevBtn: "rockstargames-modules-core-newswire-articleb13b550f10699e799bf6296b708e9473",
          right: "rockstargames-modules-core-newswire-articleada7cdbc241d461551ac775229986a37",
          slideContent: "rockstargames-modules-core-newswire-articled8c6874e2f33425124e575a60fa339ab",
          slotContainer: "rockstargames-modules-core-newswire-articlef7f1e5026f11d0cc5e371f990c3620e7",
          "swiper-navigation-disabled": "rockstargames-modules-core-newswire-articled20ad0b7e7720a75082106c87130274f",
          "swiper-preloader-spin": "rockstargames-modules-core-newswire-articledfaec79c93eeafe2c26c2f2e0c576afd",
          "swiper-rtl": "rockstargames-modules-core-newswire-articlec658d9e1c69cce7a4a70ef2d52858eba",
          top: "rockstargames-modules-core-newswire-articleec807ccbb44eb584b15097ea4127de46"
        },
        u = ({
          shouldFade: e,
          condition: t,
          className: r,
          children: a
        }) => (0, n.jsx)("div", {
          className: (0, c.default)(r, e ? d.fadeIn : "", t ? d.active : ""),
          children: a
        }),
        f = ({
          currentSlide: e,
          prevRef: t,
          nextRef: r
        }) => (0, n.jsxs)("div", {
          className: d.customPagination,
          children: [(0, n.jsx)("button", {
            type: "button",
            className: d.prevBtn,
            ref: t,
            "aria-label": "Previous Slide",
            children: (0, n.jsx)(i.ChevronLeft, {
              label: "Previous Slide",
              size: "LG"
            })
          }), (0, n.jsx)("span", {
            children: e?.itemName ?? "Item"
          }), (0, n.jsx)("button", {
            type: "button",
            className: d.nextBtn,
            ref: r,
            "aria-label": "Next Slide",
            children: (0, n.jsx)(i.ChevronRight, {
              label: "Next Slide",
              size: "LG"
            })
          })]
        }),
        p = ({
          item: e,
          vertical: t,
          horizontal: r
        }) => e && e?.content ? (0, n.jsx)(u, {
          shouldFade: e?.fadeIn,
          condition: e?.fadeIn,
          className: (0, c.default)(d.slot, d[t], d[r]),
          children: (0, n.jsx)(l.A, {
            ...e.content[0]
          })
        }) : null,
        m = ({
          active: e = !1,
          backgroundContent: t,
          foregroundContent: r
        }) => (0, n.jsxs)("div", {
          className: d.slideContent,
          children: [t && (0, n.jsx)(u, {
            shouldFade: t?.fadeIn,
            condition: e,
            children: (0, n.jsx)("div", {
              className: d.backgroundContent,
              children: (0, n.jsx)(l.A, {
                ...t.imageWithBadge
              })
            })
          }), r && (0, n.jsx)(u, {
            shouldFade: r?.fadeIn,
            condition: e,
            children: (0, n.jsx)("div", {
              className: d.foregroundContent,
              children: (0, n.jsx)(l.A, {
                ...r.imageWithBadge
              })
            })
          })]
        }),
        h = ({
          loop: e = !0,
          grabCursor: t = !0,
          centeredSlides: r = !0,
          slides: i = null
        }) => {
          const [l, u] = (0, a.useState)(null), h = (0, a.useRef)(null), b = (0, a.useRef)(null), [g, y] = (0, a.useState)();
          return (0, a.useEffect)(() => {
            y({
              nextEl: b.current,
              prevEl: h.current
            })
          }, [b, h]), i ? (0, n.jsx)("div", {
            className: d.panoramaCarouselWrapper,
            children: (0, n.jsxs)(s.RC, {
              loop: e,
              grabCursor: t,
              centeredSlides: r,
              slidesPerView: 1,
              spaceBetween: 0,
              modules: [o.Vx],
              navigation: g,
              pagination: !1,
              speed: 700,
              onActiveIndexChange: e => {
                u(i[e?.realIndex ?? 0])
              },
              onInit: e => {
                e.params.navigation.prevEl = h.current, e.params.navigation.nextEl = b.current, e?.navigation.init(), e?.navigation.update()
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
              children: [(0, n.jsxs)("div", {
                className: (0, c.default)(d.slotContainer, d.top),
                children: [(0, n.jsx)(p, {
                  item: l?.topLeftSlot,
                  vertical: "top",
                  horizontal: "left"
                }), (0, n.jsx)(p, {
                  item: l?.topCenterSlot,
                  vertical: "top",
                  horizontal: "center"
                }), (0, n.jsx)(p, {
                  item: l?.topRightSlot,
                  vertical: "top",
                  horizontal: "right"
                })]
              }), i.map(e => (0, n.jsx)(s.qr, {
                children: ({
                  isActive: t
                }) => (0, n.jsx)(m, {
                  active: t,
                  ...e
                })
              }, e?.key)), (0, n.jsxs)("div", {
                className: (0, c.default)(d.slotContainer, d.bottom),
                children: [(0, n.jsx)(p, {
                  item: l?.bottomLeftSlot,
                  vertical: "bottom",
                  horizontal: "left"
                }), (0, n.jsx)(p, {
                  item: l?.bottomRightSlot,
                  vertical: "bottom",
                  horizontal: "right"
                })]
              }), (0, n.jsx)(f, {
                currentSlide: l,
                prevRef: h,
                nextRef: b
              })]
            })
          }) : null
        },
        b = ({
          type: e = null,
          className: t,
          style: r,
          panoramaCarousel: a
        }) => {
          return e ? (o = h, s = a, (0, n.jsx)(o, {
            className: t,
            style: r,
            ...s
          })) : null;
          var o, s
        }
    },
    54563(e, t, r) {
      "use strict";
      r.d(t, {
        i: () => l,
        o: () => i
      });
      var n = r(39793),
        a = r(93082);
      const o = (0, r(13331).setContextItem)({
          context: (0, a.createContext)(),
          key: "tinaPayloadContext"
        }),
        {
          Provider: s
        } = o,
        i = ({
          children: e,
          payload: t
        }) => (0, n.jsx)(s, {
          value: t,
          children: e
        }),
        l = () => (0, a.useContext)(o)
    },
    25993(e, t, r) {
      "use strict";
      r.d(t, {
        C1: () => l,
        S1: () => i,
        XC: () => f,
        jS: () => c,
        qg: () => d,
        z0: () => u
      });
      var n = r(93082),
        a = r(13331),
        o = r(54563);
      const s = e => {
          if (!e) return null;
          const {
            hostname: t,
            pathname: r
          } = new URL(e, (0, a.getCdnPrefix)(!0));
          return "/" === r ? null : (t.endsWith(".akamaized.net"), e)
        },
        i = ({
          alt: e = null,
          mobile: t = null,
          imageMobileStyle: r = {},
          desktop: i = null,
          imageDesktopStyle: l = {},
          ariaLabel: c = null,
          sources: d = null,
          prod: u = null
        }) => {
          const f = (0, a.useLocale)(),
            {
              meta: p = {}
            } = (0, o.i)() ?? {},
            [m, h] = (0, n.useState)(u ?? p?.cdn ?? p?.prod ?? !0);
          (0, n.useEffect)(() => {
            h(u ?? p?.cdn ?? p?.prod ?? !0)
          }, [u, p]);
          const b = (0, n.useCallback)(e => {
            const t = null !== d,
              r = e?.previewSrc ?? e ?? null;
            if (null === r || "string" != typeof r) return null;
            if (r.startsWith("http")) return s(r);
            const n = `${t?(0,a.getCdnPrefix)(m):""}${r}`;
            return s(n)
          }, [m, d]);
          return {
            alt: e,
            ariaLabel: c,
            src: {
              mobile: b(d?.[f]?.mobile ?? d?.en_us?.mobile ?? t),
              imageMobileStyle: d?.[f]?.imageMobileStyle ?? d?.en_us?.imageMobileStyle ?? r,
              imageDesktopStyle: d?.[f]?.imageDesktopStyle ?? d?.en_us?.imageDesktopStyle ?? l,
              desktop: b(d?.[f]?.desktop ?? d?.en_us?.desktop ?? i)
            }
          }
        },
        l = e => {
          const t = (0, o.i)() ?? {},
            {
              meta: r = {}
            } = t,
            [i, l] = (0, n.useState)(r?.cdn ?? r?.prod ?? !1);
          return (0, n.useEffect)(() => {
            l(r?.cdn ?? r?.prod ?? !1)
          }, [r]), e ? e?.startsWith("http") ? s(e) : s(`${(0,a.getCdnPrefix)(i)}${e}`) : null
        },
        c = () => {
          const e = (0, o.i)() ?? {},
            {
              meta: t = {}
            } = e,
            r = (0, n.useMemo)(() => t?.cdn ?? t?.prod ?? !1, [t]);
          return (0, n.useCallback)((e, t = {}) => {
            const n = t?.prod ?? r;
            return e ? e?.startsWith("http") ? s(e) : s(`${(0,a.getCdnPrefix)(n)}${e}`) : null
          }, [r])
        },
        d = e => e.full_src,
        u = e => {
          const t = e?.previewSrc ?? e?.preview_src ?? e;
          return t?.startsWith("http") ? t : `${(0,a.getCdnPrefix)(!1)}${t}`
        },
        f = e => e.meta.uploads_directory
    },
    65287(e, t, r) {
      var n = {
        "./bounty.png": 7502,
        "./collector.png": 24970,
        "./moonshiner.png": 2661,
        "./naturalist.png": 16386,
        "./trader.png": 38635
      };

      function a(e) {
        var t = o(e);
        return r(t)
      }

      function o(e) {
        if (!r.o(n, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        }
        return n[e]
      }
      a.keys = function() {
        return Object.keys(n)
      }, a.resolve = o, e.exports = a, a.id = 65287
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