try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "c2211330-a836-470d-9fa2-0358f779eb47", e._sentryDebugIdIdentifier = "sentry-dbid-c2211330-a836-470d-9fa2-0358f779eb47")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "a42314239c99c13d151b1cd32472b6fee265a6cb",
    packageName: "@rockstargames/modules-core-newswire-article",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "a42314239c99c13d151b1cd32472b6fee265a6cb"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [6681, 9062], {
    2661: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4639a2711d1bca49a87c302784050ee3.png"
    },
    3154: (e, t, r) => {
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
        e.length > 0 ? e[0]((function t(a, o) {
          r.push(o), ++n >= e.length || a ? s(a) : e[n](t)
        })) : s(null), o = !1
      };
      var n, a = (n = r(87144)) && n.__esModule ? n : {
        default: n
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
        A: () => l
      });
      var n = r(75385),
        a = r(83659);
      const o = {
        badge: "rockstargames-modules-core-newswire-articleb7268b0e907630904b6689af83fee8e3",
        badgeSizeUpdate: "rockstargames-modules-core-newswire-articlece8632d7464b556158a1d549f653498c",
        badge2: "rockstargames-modules-core-newswire-articled08ce7145bc9562355a3984f8ccc9313",
        badge3: "rockstargames-modules-core-newswire-articlec7c60cfb12b6e9be68893c60814b3ed7"
      };
      var s = r(25854);
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
          return d ? t.split(d).map(((e, t) => u.push(e))) : u.push(t), (0, s.jsxs)(i, {
            splitter: d,
            role: c,
            wrapper: e => (0, s.jsx)("div", {
              className: `${o.badge} ${l?o[l]:""} `,
              children: e
            }),
            children: [(0, s.jsx)(s.Fragment, {
              children: c && (0, s.jsx)(n.A, {
                image: {
                  alt: c,
                  desktop: r(65287)(`./${c}.png`)
                }
              })
            }), (0, s.jsx)(a.A, {
              className: `${d||c?"":o.badge} ${l?o[l]:""}`,
              min: 8,
              max: 1e3,
              mode: d || c ? "single" : "multi",
              children: u[0]
            }), (0, s.jsx)(s.Fragment, {
              children: u.shift() && d && u.length >= 1 && (0, s.jsx)(a.A, {
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
    16386: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/898794daaec68a69ef5ec4afaefe1948.png"
    },
    24970: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e111377ba943e9eefaa9204f77c77093.png"
    },
    27538: (e, t, r) => {
      "use strict";
      r.d(t, {
        i: () => c,
        o: () => l
      });
      var n = r(62229),
        a = r(95966),
        o = r(25854);
      const s = (0, a.setContextItem)({
          context: (0, n.createContext)(),
          key: "tinaPayloadContext"
        }),
        {
          Provider: i
        } = s,
        l = e => {
          let {
            children: t,
            payload: r
          } = e;
          return (0, o.jsx)(i, {
            value: r,
            children: t
          })
        },
        c = () => (0, n.useContext)(s)
    },
    28839: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61ae357c3bfbabb5d765e9a7c794d08f.png"
    },
    38558: (e, t, r) => {
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
        o = r(27538);
      const s = e => {
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
            } = (0, o.i)() ?? {},
            [p, m] = (0, n.useState)(d ?? f?.cdn ?? f?.prod ?? !0);
          (0, n.useEffect)((() => {
            m(d ?? f?.cdn ?? f?.prod ?? !0)
          }), [d, f]);
          const h = (0, n.useCallback)((e => {
            const t = null !== c,
              r = e?.previewSrc ?? e ?? null;
            if (null === r || "string" != typeof r) return null;
            if (r.startsWith("http")) return s(r);
            const n = `${t?(0,a.getCdnPrefix)(p):""}${r}`;
            return s(n)
          }), [p, c]);
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
          const t = (0, o.i)() ?? {},
            {
              meta: r = {}
            } = t,
            [i, l] = (0, n.useState)(r?.cdn ?? r?.prod ?? !1);
          return (0, n.useEffect)((() => {
            l(r?.cdn ?? r?.prod ?? !1)
          }), [r]), e ? e?.startsWith("http") ? s(e) : s(`${(0,a.getCdnPrefix)(i)}${e}`) : null
        },
        c = () => {
          const e = (0, o.i)() ?? {},
            {
              meta: t = {}
            } = e,
            r = (0, n.useMemo)((() => t?.cdn ?? t?.prod ?? !1), [t]);
          return (0, n.useCallback)((function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const n = t?.prod ?? r;
            return e ? e?.startsWith("http") ? s(e) : s(`${(0,a.getCdnPrefix)(n)}${e}`) : null
          }), [r])
        },
        d = e => e.full_src,
        u = e => {
          const t = e?.previewSrc ?? e?.preview_src ?? e;
          return t?.startsWith("http") ? t : `${(0,a.getCdnPrefix)(!1)}${t}`
        },
        f = e => e.meta.uploads_directory
    },
    38635: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6e77bb0f25a6ea37e8d831b12df9fa3c.png"
    },
    45675: (e, t, r) => {
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
        o = p(r(62229)),
        s = p(r(61478)),
        i = p(r(95847)),
        l = p(r(3154)),
        c = p(r(66010)),
        d = p(r(79967)),
        u = p(r(88433)),
        f = r(73614);

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
              p = (0, f.innerWidth)(i),
              g = (0, f.innerHeight)(i);
            if (g <= 0 || isNaN(g)) console.warn("Can not process element without height. Make sure the element is displayed and has a static height.");
            else if (p <= 0 || isNaN(p)) console.warn("Can not process element without width. Make sure the element is displayed and has a static width.");
            else {
              var b = (0, u.default)();
              this.pid = b;
              var y = function() {
                  return b !== e.pid
                },
                w = "multi" === a ? function() {
                  return h(d, g)
                } : function() {
                  return m(d, p)
                },
                v = "multi" === a ? function() {
                  return m(d, p)
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
                  if (y()) return t(!0);
                  x = parseInt((k + _) / 2, 10), e.setState({
                    fontSize: x
                  }, (function() {
                    return y() ? t(!0) : (w() ? k = x + 1 : _ = x - 1, t())
                  }))
                }), t)
              }, function(t) {
                return "single" === a && o || v() ? t() : (k = r, _ = x, (0, c.default)((function() {
                  return k < _
                }), (function(t) {
                  if (y()) return t(!0);
                  x = parseInt((k + _) / 2, 10), e.setState({
                    fontSize: x
                  }, (function() {
                    return b !== e.pid ? t(!0) : (v() ? k = x + 1 : _ = x - 1, t())
                  }))
                }), t))
              }, function(t) {
                if (x = Math.min(k, _), x = Math.max(x, r), x = Math.min(x, n), x = Math.max(x, 0), y()) return t(!0);
                e.setState({
                  fontSize: x
                }, t)
              }], (function(t) {
                t || y() || e.setState({
                  ready: !0
                }, (function() {
                  return s(x)
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
    57792: (e, t, r) => {
      "use strict";
      var n = r(62983);

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
    61478: (e, t, r) => {
      e.exports = r(57792)()
    },
    62983: e => {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
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
    66010: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r;
        e() ? t((function r(a) {
          for (var o = arguments.length, s = Array(o > 1 ? o - 1 : 0), i = 1; i < o; i++) s[i - 1] = arguments[i];
          a ? n(a) : e.apply(this, s) ? t(r) : n(null)
        })) : n(null)
      };
      var r = function() {}
    },
    73614: (e, t) => {
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
    75385: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => l
      });
      var n = r(38558),
        a = r(95966);
      const o = "rockstargames-modules-core-newswire-articlec8dc03880ce2e12f3fdea5b5b587f27f";
      var s = r(25854);
      const i = e => {
          let {
            alt: t,
            className: n,
            src: o,
            style: i
          } = e;
          const [l, c] = (0, a.usePreloadImg)(o);
          let d = o;
          !1 === l && ("rockstargames-modules-core-newswire-articlea6a06e2d5c4f1811ea39d17312ca2e67" === n && (d = r(28839)), d = r(9333));
          const {
            width: u,
            height: f
          } = c, p = {
            "--aspect-ratio": Number.isNaN(u / f) ? "" : u / f,
            ...i
          };
          return (0, s.jsx)("img", {
            src: d,
            className: n ?? "",
            alt: t,
            style: p
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
            isMobile: p
          } = (0, a.useWindowResize)();
          f.desktop || f.mobile || (u = "", f = {
            mobile: r(28839),
            desktop: r(9333)
          });
          let m = c.frame ? `${c.frame} ${o}` : o;
          return (0, s.jsx)("div", {
            className: m,
            style: l,
            children: (0, s.jsx)(i, {
              style: {
                ...d,
                ...c?.style
              },
              src: p ? f.mobile || f.desktop : f?.desktop || f?.mobile,
              alt: u,
              className: t
            })
          })
        }
    },
    79967: (e, t) => {
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
    83659: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => s
      });
      var n = r(62229),
        a = r(90069),
        o = r(25854);
      const s = e => {
        let {
          children: t,
          ...r
        } = e;
        const [s, i] = (0, n.useState)(!1);
        return (0, o.jsx)(a.zb, {
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
    85239: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => c
      });
      var n = r(62229),
        a = r(95966),
        o = r(10632),
        s = r(75385);
      var i = r(25854);
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
            className: p = "",
            attributes: m = {},
            role: h,
            hero: g = !1
          } = e;
          const b = (0, n.useMemo)((() => {
            if (u?.badge || u?.discountTxt || t || c) return (0, i.jsx)(o.A, {
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
                className: (0, a.classList)("rockstargames-modules-core-newswire-articled9ac792281efe15bcd4589b028d1c27b", g ? "rockstargames-modules-core-newswire-articlee430c4662cd185f58259d4a8d8b322de" : "", m?.hiddenMobile ? "hiddenMobile" : "", m?.hiddenLarge ? "hiddenLarge" : "", m?.className, p),
                style: (0, a.safeStyles)({
                  ...f,
                  ...m?.style
                }),
                ...m,
                children: [(0, i.jsx)(s.A, {
                  image: u,
                  className: p
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
    88433: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function() {
        return r++
      };
      var r = 0
    },
    90069: (e, t, r) => {
      "use strict";
      t.zb = void 0;
      var n, a = (n = r(45675)) && n.__esModule ? n : {
        default: n
      };
      t.zb = a.default, a.default
    },
    95847: (e, t) => {
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
    96681: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, {
        default: () => h
      });
      var n = r(62229),
        a = r(52066),
        o = r(43851),
        s = r(85239),
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
      var c = r(25854);
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
            children: (0, c.jsx)(s.A, {
              ...t.content[0]
            })
          }) : null
        },
        p = e => {
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
                children: (0, c.jsx)(s.A, {
                  ...r.imageWithBadge
                })
              })
            }), n && (0, c.jsx)(d, {
              shouldFade: n?.fadeIn,
              condition: t,
              children: (0, c.jsx)("div", {
                className: l.foregroundContent,
                children: (0, c.jsx)(s.A, {
                  ...n.imageWithBadge
                })
              })
            })]
          })
        },
        m = e => {
          let {
            loop: t = !0,
            grabCursor: r = !0,
            centeredSlides: s = !0,
            slides: d = null
          } = e;
          const [m, h] = (0, n.useState)(null);
          return d ? (0, c.jsx)("div", {
            className: l.panoramaCarouselWrapper,
            children: (0, c.jsxs)(o.RC, {
              modules: [a.Vx],
              loop: t,
              grabCursor: r,
              centeredSlides: s,
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
                  item: m?.topLeftSlot,
                  vertical: "top",
                  horizontal: "left"
                }), (0, c.jsx)(f, {
                  item: m?.topCenterSlot,
                  vertical: "top",
                  horizontal: "center"
                }), (0, c.jsx)(f, {
                  item: m?.topRightSlot,
                  vertical: "top",
                  horizontal: "right"
                })]
              }), d.map((e => (0, c.jsx)(o.qr, {
                children: t => {
                  let {
                    isActive: r
                  } = t;
                  return (0, c.jsx)(p, {
                    active: r,
                    ...e
                  })
                }
              }, e?.key))), (0, c.jsxs)("div", {
                className: (0, i.classList)(l.slotContainer, l.bottom),
                children: [(0, c.jsx)(f, {
                  item: m?.bottomLeftSlot,
                  vertical: "bottom",
                  horizontal: "left"
                }), (0, c.jsx)(f, {
                  item: m?.bottomRightSlot,
                  vertical: "bottom",
                  horizontal: "right"
                })]
              }), (0, c.jsx)(u, {
                currentSlide: m
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
          return t ? (o = m, s = a, (0, c.jsx)(o, {
            className: r,
            style: n,
            ...s
          })) : null;
          var o, s
        }
    }
  }
]);