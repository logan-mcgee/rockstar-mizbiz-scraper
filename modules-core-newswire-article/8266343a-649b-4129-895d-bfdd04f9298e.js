try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "8266343a-649b-4129-895d-bfdd04f9298e", e._sentryDebugIdIdentifier = "sentry-dbid-8266343a-649b-4129-895d-bfdd04f9298e")
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
  [884, 1078], {
    42649(e) {
      var t, r, a = e.exports = {};

      function s() {
        throw new Error("setTimeout has not been defined")
      }

      function n() {
        throw new Error("clearTimeout has not been defined")
      }

      function i(e) {
        if (t === setTimeout) return setTimeout(e, 0);
        if ((t === s || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
        try {
          return t(e, 0)
        } catch (r) {
          try {
            return t.call(null, e, 0)
          } catch (r) {
            return t.call(this, e, 0)
          }
        }
      }! function() {
        try {
          t = "function" == typeof setTimeout ? setTimeout : s
        } catch (e) {
          t = s
        }
        try {
          r = "function" == typeof clearTimeout ? clearTimeout : n
        } catch (e) {
          r = n
        }
      }();
      var o, c = [],
        l = !1,
        d = -1;

      function u() {
        l && o && (l = !1, o.length ? c = o.concat(c) : d = -1, c.length && f())
      }

      function f() {
        if (!l) {
          var e = i(u);
          l = !0;
          for (var t = c.length; t;) {
            for (o = c, c = []; ++d < t;) o && o[d].run();
            d = -1, t = c.length
          }
          o = null, l = !1,
            function(e) {
              if (r === clearTimeout) return clearTimeout(e);
              if ((r === n || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
              try {
                return r(e)
              } catch (t) {
                try {
                  return r.call(null, e)
                } catch (t) {
                  return r.call(this, e)
                }
              }
            }(e)
        }
      }

      function m(e, t) {
        this.fun = e, this.array = t
      }

      function p() {}
      a.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
        c.push(new m(e, t)), 1 !== c.length || l || i(f)
      }, m.prototype.run = function() {
        this.fun.apply(null, this.array)
      }, a.title = "browser", a.browser = !0, a.env = {}, a.argv = [], a.version = "", a.versions = {}, a.on = p, a.addListener = p, a.once = p, a.off = p, a.removeListener = p, a.removeAllListeners = p, a.emit = p, a.prependListener = p, a.prependOnceListener = p, a.listeners = function(e) {
        return []
      }, a.binding = function(e) {
        throw new Error("process.binding is not supported")
      }, a.cwd = function() {
        return "/"
      }, a.chdir = function(e) {
        throw new Error("process.chdir is not supported")
      }, a.umask = function() {
        return 0
      }
    },
    8405(e, t, r) {
      "use strict";
      var a = r(85126);

      function s() {}

      function n() {}
      n.resetWarningCache = s, e.exports = function() {
        function e(e, t, r, s, n, i) {
          if (i !== a) {
            var o = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw o.name = "Invariant Violation", o
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
    97465(e, t, r) {
      e.exports = r(8405)()
    },
    85126(e) {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
    },
    2906(e, t, r) {
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
        n = m(r(71127)),
        i = m(r(97465)),
        o = m(r(11524)),
        c = m(r(52321)),
        l = m(r(92701)),
        d = m(r(51364)),
        u = m(r(34738)),
        f = r(96143);

      function m(e) {
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
              d = this._child,
              m = (0, f.innerWidth)(o),
              b = (0, f.innerHeight)(o);
            if (b <= 0 || isNaN(b)) console.warn("Can not process element without height. Make sure the element is displayed and has a static height.");
            else if (m <= 0 || isNaN(m)) console.warn("Can not process element without width. Make sure the element is displayed and has a static width.");
            else {
              var h = (0, u.default)();
              this.pid = h;
              var y = function() {
                  return h !== e.pid
                },
                w = "multi" === s ? function() {
                  return g(d, b)
                } : function() {
                  return p(d, m)
                },
                k = "multi" === s ? function() {
                  return p(d, m)
                } : function() {
                  return g(d, b)
                },
                x = void 0,
                v = r,
                _ = a;
              this.setState({
                ready: !1
              }), (0, c.default)([function(t) {
                return (0, l.default)(function() {
                  return v <= _
                }, function(t) {
                  if (y()) return t(!0);
                  x = parseInt((v + _) / 2, 10), e.setState({
                    fontSize: x
                  }, function() {
                    return y() ? t(!0) : (w() ? v = x + 1 : _ = x - 1, t())
                  })
                }, t)
              }, function(t) {
                return "single" === s && n || k() ? t() : (v = r, _ = x, (0, l.default)(function() {
                  return v < _
                }, function(t) {
                  if (y()) return t(!0);
                  x = parseInt((v + _) / 2, 10), e.setState({
                    fontSize: x
                  }, function() {
                    return h !== e.pid ? t(!0) : (k() ? v = x + 1 : _ = x - 1, t())
                  })
                }, t))
              }, function(t) {
                if (x = Math.min(v, _), x = Math.max(x, r), x = Math.min(x, a), x = Math.max(x, 0), y()) return t(!0);
                e.setState({
                  fontSize: x
                }, t)
              }], function(t) {
                t || y() || e.setState({
                  ready: !0
                }, function() {
                  return i(x)
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
              s = t.text,
              i = t.style,
              o = (t.min, t.max, t.mode),
              c = (t.forceWidth, t.forceSingleModeWidth, t.throttle, t.autoResize, t.onReady, function(e, t) {
                var r = {};
                for (var a in e) t.indexOf(a) >= 0 || Object.prototype.hasOwnProperty.call(e, a) && (r[a] = e[a]);
                return r
              }(t, ["children", "text", "style", "min", "max", "mode", "forceWidth", "forceSingleModeWidth", "throttle", "autoResize", "onReady"])),
              l = this.state,
              d = l.fontSize,
              u = l.ready,
              f = a({}, i, {
                fontSize: d
              }),
              m = {
                display: u ? "block" : "inline-block"
              };
            return "single" === o && (m.whiteSpace = "nowrap"), n.default.createElement("div", a({
              ref: function(t) {
                return e._parent = t
              },
              style: f
            }, c), n.default.createElement("div", {
              ref: function(t) {
                return e._child = t
              },
              style: m
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
    64740(e, t, r) {
      "use strict";
      t.zb = void 0;
      var a, s = (a = r(2906)) && a.__esModule ? a : {
        default: a
      };
      t.zb = s.default, s.default
    },
    96143(e, t) {
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
    52321(e, t, r) {
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
        e.length > 0 ? e[0](function t(s, n) {
          r.push(n), ++a >= e.length || s ? i(s) : e[a](t)
        }) : i(null), n = !1
      };
      var a, s = (a = r(42649)) && a.__esModule ? a : {
        default: a
      }
    },
    11524(e, t) {
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
    51364(e, t) {
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
    34738(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function() {
        return r++
      };
      var r = 0
    },
    92701(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e, t) {
        var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r;
        e() ? t(function r(s) {
          for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) i[o - 1] = arguments[o];
          s ? a(s) : e.apply(this, i) ? t(r) : a(null)
        }) : a(null)
      };
      var r = function() {}
    },
    69245(e, t, r) {
      "use strict";
      var a = r(71127),
        s = Symbol.for("react.element"),
        n = Symbol.for("react.fragment"),
        i = Object.prototype.hasOwnProperty,
        o = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        c = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, t, r) {
        var a, n = {},
          l = null,
          d = null;
        for (a in void 0 !== r && (l = "" + r), void 0 !== t.key && (l = "" + t.key), void 0 !== t.ref && (d = t.ref), t) i.call(t, a) && !c.hasOwnProperty(a) && (n[a] = t[a]);
        if (e && e.defaultProps)
          for (a in t = e.defaultProps) void 0 === n[a] && (n[a] = t[a]);
        return {
          $$typeof: s,
          type: e,
          key: l,
          ref: d,
          props: n,
          _owner: o.current
        }
      }
      t.Fragment = n, t.jsx = l, t.jsxs = l
    },
    42295(e, t, r) {
      "use strict";
      e.exports = r(69245)
    },
    24769(e, t, r) {
      "use strict";
      r.d(t, {
        A: () => g
      });
      var a = r(42295),
        s = r(71127),
        n = r(24162),
        i = r(85827),
        o = r(11206),
        c = r(1556),
        l = r(46219);
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
      var u = r(26708),
        f = r(10632);
      const m = ({
          item: e
        }) => (0, a.jsxs)("div", {
          children: [(0, a.jsx)(f.A, {
            image: e?.image,
            badge: e?.badge ?? e?.image?.badge,
            badgeType: "badge3",
            role: e?.role ?? e?.image?.role,
            splitter: e?.splitter ?? e?.image?.splitter,
            type: e?.type,
            ariaLabel: e?.image?.ariaLabel ?? e.description,
            style: e?.style,
            className: (0, c.default)(d.img, e?.className)
          }), (e?.title || e?.description) && (0, a.jsx)(u.A, {
            item: e
          })]
        }),
        p = ({
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
        g = ({
          children: e,
          items: t = [],
          style: r = {},
          noInfiniteScroll: f = !1,
          className: g = "",
          renderTemplate: b = "standard",
          text: h,
          customSpaceBetween: y = null,
          centerSlides: w = !0,
          centeredSlidesBounds: k = !1
        }) => {
          const x = (0, l.Ub)("(min-width: 0px) and (max-width: 768px)"),
            [v, _] = (0, s.useState)(0),
            [j, S] = (0, s.useState)(null),
            T = (0, s.useMemo)(() => e && Array.isArray(e) ? e.map(() => (0, o.A)()) : null, [e, x]),
            N = e => {
              if (!e) return;
              let t = 0;
              e.pagination.bullets.forEach((e, r) => {
                e.classList.contains("swiper-pagination-bullet-active") && (t = r)
              }), _(t)
            };
          if (!(t && 0 !== t?.length || e)) return null;
          const M = {
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
          return (0, a.jsxs)("div", {
            className: (0, c.default)(d.deprecatedCarousel, d[b], d.infinite_true, e ? d.renderedWithChildren : "", g),
            style: r,
            "data-testid": "carousel",
            children: [(0, a.jsxs)(n.RC, {
              modules: [i.dK, i.Jq],
              pagination: !0,
              a11y: {
                enabled: !0,
                scrollOnFocus: !0
              },
              updateOnWindowResize: !1,
              loop: !1,
              grabCursor: !0,
              centeredSlides: w,
              centerInsufficientSlides: w,
              centeredSlidesBounds: k,
              slidesPerView: "auto",
              speed: 700,
              breakpoints: M,
              onSlideChange: e => {
                N(e)
              },
              onResize: e => {
                null != j && clearTimeout(j);
                const t = setTimeout(() => {
                  e.update(), e.updateSize(), e.updateSlides(), e.slideToClosest(), N(e)
                }, 250);
                S(t)
              },
              children: [(0, a.jsx)("div", {
                className: d.trackWrapper,
                children: (0, a.jsxs)("div", {
                  className: d.track,
                  children: [t?.map(e => (0, a.jsx)(n.qr, {
                    tabIndex: 0,
                    children: (0, a.jsx)(m, {
                      item: e
                    })
                  }, e.key)), e && e.map((e, t) => e && (0, a.jsx)(n.qr, {
                    children: e
                  }, T && T[t]))]
                })
              }), (0, a.jsx)(p, {
                current: v,
                total: e ? e.length : t.length
              })]
            }), (h?.title || h?.description) && (0, a.jsx)(u.A, {
              item: h
            })]
          })
        }
    },
    26708(e, t, r) {
      "use strict";
      r.d(t, {
        A: () => d
      });
      var a = r(42295),
        s = r(1556),
        n = r(4407),
        i = r(93935),
        o = r(79704);
      const c = "rockstargames-modules-core-newswire-articleacd27eff2209196752622710f7b27558",
        l = ({
          to: e,
          children: t
        }) => e ? (0, a.jsx)("a", {
          href: e,
          target: "_blank",
          rel: "noreferrer",
          children: t
        }) : t,
        d = ({
          item: e,
          className: t = ""
        }) => (0, a.jsxs)("div", {
          className: (0, s.default)("rockstargames-modules-core-newswire-articlef8bc9589974046cdac4a2264be12d2df", t),
          children: [e.title && (0, a.jsx)(l, {
            to: e?.href ?? e?.to,
            children: (0, a.jsx)("h3", {
              children: e.title
            })
          }), Array.isArray(e?.description?.content) ? e.description.content?.map((e, t) => e?.unorderedList ? (0, a.jsx)(i.A, {
            columns: e.unorderedList.columns ?? null,
            style: {
              "--unordered-list-padding": "var(--grid-gap-static-sm)",
              "--unordered-list-margin-bottom": ".5rem"
            },
            noImg: !0,
            list: e.unorderedList.list
          }, t) : e?.image ? (0, a.jsx)(n.A, {
            image: e.image,
            className: e?.className
          }, t) : e?.separator ? (0, a.jsx)("div", {
            style: {
              margin: `${e.separator.spacing} 0`
            },
            children: (0, a.jsx)(o.A, {})
          }, t) : (0, a.jsx)("p", {
            children: (0, a.jsx)("span", {
              className: c,
              dangerouslySetInnerHTML: {
                __html: e
              }
            })
          }, t)) : (0, a.jsx)("span", {
            className: c,
            dangerouslySetInnerHTML: {
              __html: e.description
            }
          })]
        })
    },
    55322(e, t, r) {
      "use strict";
      r.d(t, {
        A: () => i
      });
      var a = r(42295),
        s = r(71127),
        n = r(64740);
      const i = ({
        children: e,
        ...t
      }) => {
        const [, r] = (0, s.useState)(!1);
        return (0, a.jsx)(n.zb, {
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
    84927(e, t, r) {
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
          splitter: l
        }) => {
          const d = [];
          return l ? e.split(l).map(e => d.push(e)) : d.push(e), (0, a.jsxs)(o, {
            splitter: l,
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
              className: `${l||c?"":i.badge} ${t?i[t]:""}`,
              min: 8,
              max: 1e3,
              mode: l || c ? "single" : "multi",
              children: d[0]
            }), (0, a.jsx)(a.Fragment, {
              children: d.shift() && l && d.length >= 1 && (0, a.jsx)(n.A, {
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
    10632(e, t, r) {
      "use strict";
      r.d(t, {
        A: () => d
      });
      var a = r(42295),
        s = r(71127),
        n = r(13331),
        i = r(1556),
        o = r(84927),
        c = r(4407);
      const l = ({
          hero: e,
          children: t
        }) => e ? (0, a.jsx)("div", {
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
          className: m = "",
          attributes: p = {},
          role: g,
          hero: b = !1
        }) => {
          const h = (0, s.useMemo)(() => {
            if (u?.badge || u?.discountTxt || e || r) return (0, a.jsx)(o.A, {
              badge: u?.discountTxt ?? u?.badge ?? e ?? r,
              badgeType: t,
              splitter: u?.splitter ?? d,
              role: u?.role ?? g
            })
          }, [e, t, r, u, g, d]);
          return (0, a.jsx)(l, {
            hero: b,
            children: (0, a.jsx)("figure", {
              children: (0, a.jsxs)("div", {
                className: (0, i.default)("rockstargames-modules-core-newswire-articled9ac792281efe15bcd4589b028d1c27b", b ? "rockstargames-modules-core-newswire-articlee430c4662cd185f58259d4a8d8b322de" : "", p?.hiddenMobile ? "hiddenMobile" : "", p?.hiddenLarge ? "hiddenLarge" : "", p?.className, m),
                style: (0, n.safeStyles)({
                  ...f,
                  ...p?.style
                }),
                ...p,
                children: [(0, a.jsx)(c.A, {
                  role: u?.accessibleRole,
                  image: u,
                  className: m
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
    79704(e, t, r) {
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
    93935(e, t, r) {
      "use strict";
      r.d(t, {
        A: () => u
      });
      var a = r(42295),
        s = r(71127),
        n = r(48863),
        i = r.n(n),
        o = r(13331),
        c = r(1556);
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
          sanitize: d
        } = i(),
        u = ({
          list: e,
          string: t,
          starColor: r,
          style: n,
          className: i,
          game: u,
          noImg: f,
          columns: m,
          mobileColumns: p
        }) => {
          const [g, b] = (0, s.useState)(null), h = t ? t.split("_#_") : e;
          if ((0, s.useEffect)(() => {
              b(e)
            }, [e]), !t && !e) return null;
          const y = {
            color: n?.color
          };
          return delete n?.color, m && g ? (0, a.jsx)("div", {
            className: l.grid,
            style: {
              "--unordered-list-grid-column": m,
              "--unordered-list-grid-column-mobile": p ?? m
            },
            children: (0, a.jsx)("ul", {
              className: (0, c.default)(l.itemList, l.noImg, l[r], l[u]),
              style: (0, o.safeStyles)(n),
              children: g.map((e, t) => (0, a.jsx)("li", {
                style: y,
                dangerouslySetInnerHTML: {
                  __html: d(e.content)
                }
              }, t))
            })
          }) : (0, a.jsx)("ul", {
            style: (0, o.safeStyles)(n),
            className: (0, c.default)(l.itemList, l.custom, f ? l.noImg : "", r ? l[r] : "", u ? l[u] : "", i ?? ""),
            children: h.map((e, t) => (0, a.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: d(e?.content ?? e)
              }
            }, t))
          })
        }
    },
    4407(e, t, r) {
      "use strict";
      r.d(t, {
        A: () => c
      });
      var a = r(42295),
        s = r(34725),
        n = r(13331);
      const i = ({
          alt: e,
          className: t,
          src: s,
          role: i,
          style: o
        }) => {
          const [c, l] = (0, n.usePreloadImg)(s);
          let d = s;
          !1 === c && (d = r(9333));
          const {
            width: u,
            height: f
          } = l, m = {
            "--aspect-ratio": Number.isNaN(u / f) ? "" : u / f,
            ...o
          };
          return (0, a.jsx)("img", {
            src: d,
            className: t ?? "",
            alt: e,
            style: m,
            role: i
          })
        },
        o = "rockstargames-modules-core-newswire-articlec8dc03880ce2e12f3fdea5b5b587f27f",
        c = ({
          className: e,
          style: t = {},
          image: c = {},
          imageStyle: l = {},
          role: d = "img"
        }) => {
          let {
            alt: u,
            src: f
          } = (0, s.S1)(c);
          const {
            isMobile: m
          } = (0, n.useWindowResize)(), p = m ? f.imageMobileStyle : f.imageDesktopStyle;
          f.desktop || f.mobile || (u = "", f = {
            mobile: r(28839),
            desktop: r(9333)
          });
          let g = c.frame ? `${c.frame} ${o}` : o;
          return (0, a.jsx)("div", {
            className: g,
            style: t,
            children: (0, a.jsx)(i, {
              style: {
                ...l,
                ...c?.style,
                ...p
              },
              src: m ? f.mobile || f.desktop : f?.desktop || f?.mobile,
              alt: u,
              role: d,
              className: e
            })
          })
        }
    },
    90884(e, t, r) {
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
        l = ({
          items: e = [],
          text: t = {},
          style: r,
          className: l = "",
          id: d = null
        }) => e?.length ? (0, a.jsxs)("div", {
          id: d,
          "data-testid": `carousel${l&&`-${l}`}-group-of-items`,
          children: [(0, a.jsx)(i.A, {
            style: r,
            className: [l, o.carouselWrapper].join(" "),
            children: e.map(e => (0, a.jsxs)("div", {
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
            }, e?.key ?? e?.title))
          }), t?.title || t?.description ? (0, a.jsx)("div", {
            className: o.padding,
            style: t?.style ?? {},
            children: (0, a.jsx)(s.A, {
              item: t
            })
          }) : ""]
        }) : null;
      var d = r(31879),
        u = r.n(d),
        f = r(17301),
        m = r(1556);
      const p = ({
          impressionTracking: e,
          gtm: t = {},
          children: r
        }) => e?.shouldTrack ? (0, a.jsx)(f.InViewTracker, {
          threshold: e?.threshold,
          gtm: t,
          children: r
        }) : r,
        g = ({
          to: e,
          children: t
        }) => e ? (0, a.jsx)("a", {
          href: e,
          target: "_blank",
          rel: "noreferrer",
          children: t
        }) : t,
        b = ({
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
        h = ({
          items: e,
          style: t = {},
          className: r = "",
          id: n = null
        }) => (0, a.jsx)("div", {
          style: t,
          className: (0, m.default)("rockstargames-modules-core-newswire-articled38af92e8657708abd3dc5295e62476c", r),
          id: n,
          "data-testid": "standard-group-of-items",
          children: e.map(e => (0, a.jsx)(p, {
            impressionTracking: e?.impressionTracking,
            gtm: e?.gtm,
            children: (0, a.jsx)(g, {
              to: e?.to,
              children: (0, a.jsxs)("div", {
                className: (0, m.default)("rockstargames-modules-core-newswire-articlea9b63d3aa2f18fa6c84b19c8993a7893", e.className),
                style: e?.style ?? {},
                ...e?.props,
                children: [e?.image || e?.videoId ? (0, a.jsx)(b, {
                  item: e
                }) : "", e.title || e.description ? (0, a.jsx)(s.A, {
                  item: e,
                  className: "rockstargames-modules-core-newswire-articlebc47d354556b20071313d2c1ccc3debd"
                }) : ""]
              })
            })
          }, e.key))
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
              return (0, a.jsx)(l, {
                text: t,
                items: r,
                style: n,
                id: i,
                children: e
              });
            case "carousel-panorama":
              return (0, a.jsx)(l, {
                text: t,
                items: r,
                style: n,
                className: "panorama",
                id: i,
                children: e
              });
            default:
              return (0, a.jsx)(h, {
                items: r,
                style: n,
                id: i,
                ...o,
                children: e
              })
          }
        }
    },
    74767(e, t, r) {
      "use strict";
      r.d(t, {
        i: () => c,
        o: () => o
      });
      var a = r(42295),
        s = r(71127);
      const n = (0, r(13331).setContextItem)({
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
    34725(e, t, r) {
      "use strict";
      r.d(t, {
        C1: () => c,
        S1: () => o,
        XC: () => f,
        jS: () => l,
        qg: () => d,
        z0: () => u
      });
      var a = r(71127),
        s = r(13331),
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
          imageMobileStyle: r = {},
          desktop: o = null,
          imageDesktopStyle: c = {},
          ariaLabel: l = null,
          sources: d = null,
          prod: u = null
        }) => {
          const f = (0, s.useLocale)(),
            {
              meta: m = {}
            } = (0, n.i)() ?? {},
            [p, g] = (0, a.useState)(u ?? m?.cdn ?? m?.prod ?? !0);
          (0, a.useEffect)(() => {
            g(u ?? m?.cdn ?? m?.prod ?? !0)
          }, [u, m]);
          const b = (0, a.useCallback)(e => {
            const t = null !== d,
              r = e?.previewSrc ?? e ?? null;
            if (null === r || "string" != typeof r) return null;
            if (r.startsWith("http")) return i(r);
            const a = `${t?(0,s.getCdnPrefix)(p):""}${r}`;
            return i(a)
          }, [p, d]);
          return {
            alt: e,
            ariaLabel: l,
            src: {
              mobile: b(d?.[f]?.mobile ?? d?.en_us?.mobile ?? t),
              imageMobileStyle: d?.[f]?.imageMobileStyle ?? d?.en_us?.imageMobileStyle ?? r,
              imageDesktopStyle: d?.[f]?.imageDesktopStyle ?? d?.en_us?.imageDesktopStyle ?? c,
              desktop: b(d?.[f]?.desktop ?? d?.en_us?.desktop ?? o)
            }
          }
        },
        c = e => {
          const t = (0, n.i)() ?? {},
            {
              meta: r = {}
            } = t,
            [o, c] = (0, a.useState)(r?.cdn ?? r?.prod ?? !1);
          return (0, a.useEffect)(() => {
            c(r?.cdn ?? r?.prod ?? !1)
          }, [r]), e ? e?.startsWith("http") ? i(e) : i(`${(0,s.getCdnPrefix)(o)}${e}`) : null
        },
        l = () => {
          const e = (0, n.i)() ?? {},
            {
              meta: t = {}
            } = e,
            r = (0, a.useMemo)(() => t?.cdn ?? t?.prod ?? !1, [t]);
          return (0, a.useCallback)((e, t = {}) => {
            const a = t?.prod ?? r;
            return e ? e?.startsWith("http") ? i(e) : i(`${(0,s.getCdnPrefix)(a)}${e}`) : null
          }, [r])
        },
        d = e => e.full_src,
        u = e => {
          const t = e?.previewSrc ?? e?.preview_src ?? e;
          return t?.startsWith("http") ? t : `${(0,s.getCdnPrefix)(!1)}${t}`
        },
        f = e => e.meta.uploads_directory
    },
    11206(e, t, r) {
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
    65287(e, t, r) {
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
    60211(e, t, r) {
      "use strict";
      r.d(t, {
        X: () => a
      });
      const a = "undefined" == typeof window
    },
    51105(e, t, r) {
      "use strict";
      r.d(t, {
        v: () => o
      });
      var a = r(1556);
      const s = new Map;

      function n(e, t) {
        if (e === t) return e;
        const r = s.get(e);
        if (r) return r.forEach(e => e(t)), t;
        const a = s.get(t);
        return a ? (a.forEach(t => t(e)), e) : t
      }

      function i(...e) {
        return (...t) => {
          for (const r of e) "function" == typeof r && r(...t)
        }
      }

      function o(...e) {
        const t = {
          ...e[0]
        };
        for (let r = 1; r < e.length; r++) {
          const s = e[r];
          for (const e in s) {
            const r = t[e],
              o = s[e];
            "function" == typeof r && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = i(r, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof r || "string" != typeof o ? "id" === e && r && o ? t.id = n(r, o) : t[e] = void 0 !== o ? o : r : t[e] = (0, a.clsx)(r, o)
          }
        }
        return t
      }
    }
  }
]);