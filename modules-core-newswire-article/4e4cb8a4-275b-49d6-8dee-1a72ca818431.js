try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "4e4cb8a4-275b-49d6-8dee-1a72ca818431", e._sentryDebugIdIdentifier = "sentry-dbid-4e4cb8a4-275b-49d6-8dee-1a72ca818431")
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
  [1858, 9477], {
    2661: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4639a2711d1bca49a87c302784050ee3.png"
    },
    2906: (e, t, r) => {
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
        o = m(r(62229)),
        s = m(r(97465)),
        i = m(r(11524)),
        l = m(r(52321)),
        c = m(r(92701)),
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
              o = t.forceSingleModeWidth,
              s = t.onReady,
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
                return (0, c.default)(function() {
                  return k <= _
                }, function(t) {
                  if (w()) return t(!0);
                  x = parseInt((k + _) / 2, 10), e.setState({
                    fontSize: x
                  }, function() {
                    return w() ? t(!0) : (y() ? k = x + 1 : _ = x - 1, t())
                  })
                }, t)
              }, function(t) {
                return "single" === a && o || v() ? t() : (k = r, _ = x, (0, c.default)(function() {
                  return k < _
                }, function(t) {
                  if (w()) return t(!0);
                  x = parseInt((k + _) / 2, 10), e.setState({
                    fontSize: x
                  }, function() {
                    return b !== e.pid ? t(!0) : (v() ? k = x + 1 : _ = x - 1, t())
                  })
                }, t))
              }, function(t) {
                if (x = Math.min(k, _), x = Math.max(x, r), x = Math.min(x, n), x = Math.max(x, 0), w()) return t(!0);
                e.setState({
                  fontSize: x
                }, t)
              }], function(t) {
                t || w() || e.setState({
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
              m = {
                display: u ? "block" : "inline-block"
              };
            return "single" === i && (m.whiteSpace = "nowrap"), o.default.createElement("div", n({
              ref: function(t) {
                return e._parent = t
              },
              style: f
            }, l), o.default.createElement("div", {
              ref: function(t) {
                return e._child = t
              },
              style: m
            }, a && "function" == typeof r ? u ? r(a) : a : r))
          }
        }]), t
      }(o.default.Component);
      g.propTypes = {
        children: s.default.node,
        text: s.default.string,
        min: s.default.number,
        max: s.default.number,
        mode: s.default.oneOf(["single", "multi"]),
        forceSingleModeWidth: s.default.bool,
        throttle: s.default.number,
        onReady: s.default.func
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
    4407: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => l
      });
      var n = r(42295),
        a = r(34725),
        o = r(95966);
      const s = "rockstargames-modules-core-newswire-articlec8dc03880ce2e12f3fdea5b5b587f27f",
        i = ({
          alt: e,
          className: t,
          src: a,
          style: s
        }) => {
          const [i, l] = (0, o.usePreloadImg)(a);
          let c = a;
          !1 === i && ("rockstargames-modules-core-newswire-articlea6a06e2d5c4f1811ea39d17312ca2e67" === t && (c = r(28839)), c = r(9333));
          const {
            width: d,
            height: u
          } = l, f = {
            "--aspect-ratio": Number.isNaN(d / u) ? "" : d / u,
            ...s
          };
          return (0, n.jsx)("img", {
            src: c,
            className: t ?? "",
            alt: e,
            style: f
          })
        },
        l = ({
          className: e,
          style: t = {},
          image: l = {},
          imageStyle: c = {}
        }) => {
          let {
            alt: d,
            src: u
          } = (0, a.S1)(l);
          const {
            isMobile: f
          } = (0, o.useWindowResize)();
          u.desktop || u.mobile || (d = "", u = {
            mobile: r(28839),
            desktop: r(9333)
          });
          let m = l.frame ? `${l.frame} ${s}` : s;
          return (0, n.jsx)("div", {
            className: m,
            style: t,
            children: (0, n.jsx)(i, {
              style: {
                ...c,
                ...l?.style
              },
              src: f ? u.mobile || u.desktop : u?.desktop || u?.mobile,
              alt: d,
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
      var n = r(42295),
        a = r(62229),
        o = r(95966),
        s = r(4572),
        i = r.n(s),
        l = r(84927),
        c = r(4407);
      const d = ({
          hero: e,
          children: t
        }) => e ? (0, n.jsx)("div", {
          className: "rockstargames-modules-core-newswire-articlea429886d721550d02521f7f5c9de7f5b",
          children: t
        }) : t,
        u = ({
          badge: e = null,
          badgeType: t,
          discountTxt: r,
          splitter: s,
          image: u,
          style: f,
          className: m = "",
          attributes: p = {},
          role: h,
          hero: g = !1
        }) => {
          const b = (0, a.useMemo)(() => {
            if (u?.badge || u?.discountTxt || e || r) return (0, n.jsx)(l.A, {
              badge: u?.discountTxt ?? u?.badge ?? e ?? r,
              badgeType: t,
              splitter: u?.splitter ?? s,
              role: u?.role ?? h
            })
          }, [e, t, r, u, h, s]);
          return (0, n.jsx)(d, {
            hero: g,
            children: (0, n.jsx)("figure", {
              children: (0, n.jsxs)("div", {
                className: i()("rockstargames-modules-core-newswire-articled9ac792281efe15bcd4589b028d1c27b", g ? "rockstargames-modules-core-newswire-articlee430c4662cd185f58259d4a8d8b322de" : "", p?.hiddenMobile ? "hiddenMobile" : "", p?.hiddenLarge ? "hiddenLarge" : "", p?.className, m),
                style: (0, o.safeStyles)({
                  ...f,
                  ...p?.style
                }),
                ...p,
                children: [(0, n.jsx)(c.A, {
                  image: u,
                  className: m
                }), b, u?.caption && (0, n.jsx)("figcaption", {
                  dangerouslySetInnerHTML: {
                    __html: u.caption
                  }
                })]
              })
            })
          })
        }
    },
    11524: (e, t) => {
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
    16386: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/898794daaec68a69ef5ec4afaefe1948.png"
    },
    24970: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e111377ba943e9eefaa9204f77c77093.png"
    },
    28839: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61ae357c3bfbabb5d765e9a7c794d08f.png"
    },
    34725: (e, t, r) => {
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
        o = r(74767);
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
          desktop: r = null,
          ariaLabel: i = null,
          sources: l = null,
          prod: c = null
        }) => {
          const d = (0, a.useLocale)(),
            {
              meta: u = {}
            } = (0, o.i)() ?? {},
            [f, m] = (0, n.useState)(c ?? u?.cdn ?? u?.prod ?? !0);
          (0, n.useEffect)(() => {
            m(c ?? u?.cdn ?? u?.prod ?? !0)
          }, [c, u]);
          const p = (0, n.useCallback)(e => {
            const t = null !== l,
              r = e?.previewSrc ?? e ?? null;
            if (null === r || "string" != typeof r) return null;
            if (r.startsWith("http")) return s(r);
            const n = `${t?(0,a.getCdnPrefix)(f):""}${r}`;
            return s(n)
          }, [f, l]);
          return {
            alt: e,
            ariaLabel: i,
            src: {
              mobile: p(l?.[d]?.mobile ?? l?.en_us?.mobile ?? t),
              desktop: p(l?.[d]?.desktop ?? l?.en_us?.desktop ?? r)
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
    52321: (e, t, r) => {
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
      var n, a = (n = r(42649)) && n.__esModule ? n : {
        default: n
      }
    },
    55322: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => s
      });
      var n = r(42295),
        a = r(62229),
        o = r(64740);
      const s = ({
        children: e,
        ...t
      }) => {
        const [r, s] = (0, a.useState)(!1);
        return (0, n.jsx)(o.zb, {
          ...t,
          onReady: () => {
            document.fonts.ready.then(() => {
              s(!0)
            })
          },
          children: e
        })
      }
    },
    64740: (e, t, r) => {
      "use strict";
      t.zb = void 0;
      var n, a = (n = r(2906)) && n.__esModule ? n : {
        default: n
      };
      t.zb = a.default, a.default
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
    74767: (e, t, r) => {
      "use strict";
      r.d(t, {
        i: () => l,
        o: () => i
      });
      var n = r(42295),
        a = r(62229);
      const o = (0, r(95966).setContextItem)({
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
    84927: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => l
      });
      var n = r(42295),
        a = r(4407),
        o = r(55322);
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
          return c ? e.split(c).map((e, t) => d.push(e)) : d.push(e), (0, n.jsxs)(i, {
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
    89477: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, {
        default: () => g
      });
      var n = r(42295),
        a = r(62229),
        o = r(85827),
        s = r(24162),
        i = r(10632),
        l = r(4572),
        c = r.n(l);
      const d = {
          active: "rockstargames-modules-core-newswire-articleff176766f8bcd61f0d409caa3d43cdef",
          backgroundContent: "rockstargames-modules-core-newswire-articlefbee414bfae93f3621f4445ff9c4bf7c",
          bottom: "rockstargames-modules-core-newswire-articlee515362b60fbd4b87445a327de93234e",
          customPagination: "rockstargames-modules-core-newswire-articled4781b21716aa12e5b05f8f31172f10b",
          fadeIn: "rockstargames-modules-core-newswire-articlebd483b684147d4885faa226c74eb7d1d",
          foregroundContent: "rockstargames-modules-core-newswire-articlefee922e055933776f0d9fc3b3ee8aaab",
          left: "rockstargames-modules-core-newswire-articleca8f1364250e53c94ffb4a0147702b20",
          panoramaCarouselWrapper: "rockstargames-modules-core-newswire-articleb4ada92c1921a931c699aafbbfb90d13",
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
          className: c()(r, e ? d.fadeIn : "", t ? d.active : ""),
          children: a
        }),
        f = ({
          currentSlide: e
        }) => (0, n.jsx)("div", {
          className: d.customPagination,
          children: (0, n.jsx)("span", {
            children: e?.itemName ?? "Item"
          })
        }),
        m = ({
          item: e,
          vertical: t,
          horizontal: r
        }) => e && e?.content ? (0, n.jsx)(u, {
          shouldFade: e?.fadeIn,
          condition: e?.fadeIn,
          className: c()(d.slot, d[t], d[r]),
          children: (0, n.jsx)(i.A, {
            ...e.content[0]
          })
        }) : null,
        p = ({
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
              children: (0, n.jsx)(i.A, {
                ...t.imageWithBadge
              })
            })
          }), r && (0, n.jsx)(u, {
            shouldFade: r?.fadeIn,
            condition: e,
            children: (0, n.jsx)("div", {
              className: d.foregroundContent,
              children: (0, n.jsx)(i.A, {
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
          const [l, u] = (0, a.useState)(null);
          return i ? (0, n.jsx)("div", {
            className: d.panoramaCarouselWrapper,
            children: (0, n.jsxs)(s.RC, {
              modules: [o.Vx],
              loop: e,
              grabCursor: t,
              centeredSlides: r,
              slidesPerView: 1,
              spaceBetween: 0,
              navigation: !0,
              pagination: !1,
              speed: 700,
              onActiveIndexChange: e => {
                u(i[e?.realIndex ?? 0])
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
                className: c()(d.slotContainer, d.top),
                children: [(0, n.jsx)(m, {
                  item: l?.topLeftSlot,
                  vertical: "top",
                  horizontal: "left"
                }), (0, n.jsx)(m, {
                  item: l?.topCenterSlot,
                  vertical: "top",
                  horizontal: "center"
                }), (0, n.jsx)(m, {
                  item: l?.topRightSlot,
                  vertical: "top",
                  horizontal: "right"
                })]
              }), i.map(e => (0, n.jsx)(s.qr, {
                children: ({
                  isActive: t
                }) => (0, n.jsx)(p, {
                  active: t,
                  ...e
                })
              }, e?.key)), (0, n.jsxs)("div", {
                className: c()(d.slotContainer, d.bottom),
                children: [(0, n.jsx)(m, {
                  item: l?.bottomLeftSlot,
                  vertical: "bottom",
                  horizontal: "left"
                }), (0, n.jsx)(m, {
                  item: l?.bottomRightSlot,
                  vertical: "bottom",
                  horizontal: "right"
                })]
              }), (0, n.jsx)(f, {
                currentSlide: l
              })]
            })
          }) : null
        },
        g = ({
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
    92701: (e, t) => {
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