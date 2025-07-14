try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "04ca6d9a-c978-409b-bd70-6edf092d263f", e._sentryDebugIdIdentifier = "sentry-dbid-04ca6d9a-c978-409b-bd70-6edf092d263f")
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
  [6083, 8464], {
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
      var a, s = (a = r(87144)) && a.__esModule ? a : {
        default: a
      }
    },
    6083: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, {
        default: () => w
      });
      var a = r(99217),
        s = r(85239),
        n = r(60882);
      const i = {
        padding: "rockstargames-modules-core-newswire-articleac767e959939b4d56b2358cb263d07ad",
        carouselWrapper: "rockstargames-modules-core-newswire-articlefabefc39343f6c494eb3d049757d89c5",
        carouselTitle: "rockstargames-modules-core-newswire-articlee9e0ef1bfc3699b1e50c33dd0ce8e76a"
      };
      var o = r(25854);
      const c = e => {
          let {
            to: t,
            children: r
          } = e;
          return t ? (0, o.jsx)("a", {
            href: t,
            target: "_blank",
            children: r
          }) : r
        },
        l = e => {
          let {
            items: t = [],
            text: r = {},
            style: l,
            className: d = "",
            id: u = null
          } = e;
          return t?.length ? (0, o.jsxs)("div", {
            id: u,
            "data-testid": `carousel${d&&`-${d}`}-group-of-items`,
            children: [(0, o.jsx)(n.A, {
              style: l,
              className: [d, i.carouselWrapper].join(" "),
              children: t.map((e => (0, o.jsxs)("div", {
                id: e?.id ?? null,
                children: [(0, o.jsx)(s.A, {
                  image: e?.image,
                  badge: e?.badge ?? e?.image?.badge,
                  badgeType: "badge3",
                  role: e?.role ?? e?.image?.role,
                  splitter: e?.splitter ?? e?.image?.splitter,
                  type: e?.type,
                  ariaLabel: e?.image?.ariaLabel ?? e.description,
                  style: e?.style,
                  className: [i.img, e?.className].join(" ")
                }), e.title && (0, o.jsx)(c, {
                  to: e?.to,
                  children: (0, o.jsx)("h4", {
                    className: i.carouselTitle,
                    children: e.title
                  })
                }), e.description && (0, o.jsx)("span", {
                  className: i.description,
                  dangerouslySetInnerHTML: {
                    __html: e.description
                  }
                })]
              }, e?.key ?? e?.title)))
            }), r?.title || r?.description ? (0, o.jsx)("div", {
              className: i.padding,
              style: r?.style ?? {},
              children: (0, o.jsx)(a.A, {
                item: r
              })
            }) : ""]
          }) : null
        };
      var d = r(31879),
        u = r.n(d),
        m = r(92440),
        f = r(95966);
      const p = e => {
          let {
            impressionTracking: t,
            gtm: r = {},
            children: a
          } = e;
          return t?.shouldTrack ? (0, o.jsx)(m.InViewTracker, {
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
          return t ? (0, o.jsx)("a", {
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
          return t?.videoId ? (0, o.jsx)(u(), {
            context: "site",
            autoplay: !1,
            id: t.videoId
          }) : (0, o.jsx)(s.A, {
            image: t?.image,
            badge: t?.badge ?? t?.image?.badge,
            badgeType: "badge3",
            role: t?.role ?? t?.image?.role,
            splitter: t?.splitter ?? t?.image?.splitter,
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
          return (0, o.jsx)("div", {
            style: r,
            className: (0, f.classList)("rockstargames-modules-core-newswire-articled38af92e8657708abd3dc5295e62476c", s),
            id: n,
            "data-testid": "standard-group-of-items",
            children: t.map((e => (0, o.jsx)(p, {
              impressionTracking: e?.impressionTracking,
              gtm: e?.gtm,
              children: (0, o.jsx)(g, {
                to: e?.to,
                children: (0, o.jsxs)("div", {
                  className: (0, f.classList)("rockstargames-modules-core-newswire-articlea9b63d3aa2f18fa6c84b19c8993a7893", e.className),
                  style: e?.style ?? {},
                  ...e?.props,
                  children: [e?.image || e?.videoId ? (0, o.jsx)(b, {
                    item: e
                  }) : "", e.title || e.description ? (0, o.jsx)(a.A, {
                    item: e,
                    className: "rockstargames-modules-core-newswire-articlebc47d354556b20071313d2c1ccc3debd"
                  }) : ""]
                })
              })
            }, e.key)))
          })
        },
        w = e => {
          let {
            children: t = null,
            text: r = {},
            items: a = [],
            renderTemplate: s = "",
            style: n = {},
            id: i = null,
            ...c
          } = e;
          if (!a.length) return null;
          switch (s) {
            case "carousel":
              return (0, o.jsx)(l, {
                text: r,
                items: a,
                style: n,
                id: i,
                children: t
              });
            case "carousel-panorama":
              return (0, o.jsx)(l, {
                text: r,
                items: a,
                style: n,
                className: "panorama",
                id: i,
                children: t
              });
            default:
              return (0, o.jsx)(h, {
                items: a,
                style: n,
                id: i,
                ...c,
                children: t
              })
          }
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
        A: () => c
      });
      var a = r(75385),
        s = r(83659);
      const n = {
        badge: "rockstargames-modules-core-newswire-articleb7268b0e907630904b6689af83fee8e3",
        badgeSizeUpdate: "rockstargames-modules-core-newswire-articlece8632d7464b556158a1d549f653498c",
        badge2: "rockstargames-modules-core-newswire-articled08ce7145bc9562355a3984f8ccc9313",
        badge3: "rockstargames-modules-core-newswire-articlec7c60cfb12b6e9be68893c60814b3ed7"
      };
      var i = r(25854);
      const o = e => {
          let {
            wrapper: t,
            children: r,
            role: a,
            splitter: s
          } = e;
          return s || a ? t(r) : r
        },
        c = e => {
          let {
            badge: t,
            badgeType: c,
            role: l,
            splitter: d
          } = e;
          const u = [];
          return d ? t.split(d).map(((e, t) => u.push(e))) : u.push(t), (0, i.jsxs)(o, {
            splitter: d,
            role: l,
            wrapper: e => (0, i.jsx)("div", {
              className: `${n.badge} ${c?n[c]:""} `,
              children: e
            }),
            children: [(0, i.jsx)(i.Fragment, {
              children: l && (0, i.jsx)(a.A, {
                image: {
                  alt: l,
                  desktop: r(65287)(`./${l}.png`)
                }
              })
            }), (0, i.jsx)(s.A, {
              className: `${d||l?"":n.badge} ${c?n[c]:""}`,
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
        i: () => l,
        o: () => c
      });
      var a = r(62229),
        s = r(95966),
        n = r(25854);
      const i = (0, s.setContextItem)({
          context: (0, a.createContext)(),
          key: "tinaPayloadContext"
        }),
        {
          Provider: o
        } = i,
        c = e => {
          let {
            children: t,
            payload: r
          } = e;
          return (0, n.jsx)(o, {
            value: r,
            children: t
          })
        },
        l = () => (0, a.useContext)(i)
    },
    28839: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61ae357c3bfbabb5d765e9a7c794d08f.png"
    },
    38558: (e, t, r) => {
      "use strict";
      r.d(t, {
        C1: () => c,
        S1: () => o,
        XC: () => m,
        jS: () => l,
        qg: () => d,
        z0: () => u
      });
      var a = r(62229),
        s = r(95966),
        n = r(27538);
      const i = e => {
          if (!e) return null;
          const {
            hostname: t,
            pathname: r
          } = new URL(e, (0, s.getCdnPrefix)(!0));
          return "/" === r ? null : (t.endsWith(".akamaized.net"), e)
        },
        o = e => {
          let {
            alt: t = null,
            mobile: r = null,
            desktop: o = null,
            ariaLabel: c = null,
            sources: l = null,
            prod: d = null
          } = e;
          const u = (0, s.useLocale)(),
            {
              meta: m = {}
            } = (0, n.i)() ?? {},
            [f, p] = (0, a.useState)(d ?? m?.cdn ?? m?.prod ?? !0);
          (0, a.useEffect)((() => {
            p(d ?? m?.cdn ?? m?.prod ?? !0)
          }), [d, m]);
          const g = (0, a.useCallback)((e => {
            const t = null !== l,
              r = e?.previewSrc ?? e ?? null;
            if (null === r || "string" != typeof r) return null;
            if (r.startsWith("http")) return i(r);
            const a = `${t?(0,s.getCdnPrefix)(f):""}${r}`;
            return i(a)
          }), [f, l]);
          return {
            alt: t,
            ariaLabel: c,
            src: {
              mobile: g(l?.[u]?.mobile ?? l?.en_us?.mobile ?? r),
              desktop: g(l?.[u]?.desktop ?? l?.en_us?.desktop ?? o)
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
        l = () => {
          const e = (0, n.i)() ?? {},
            {
              meta: t = {}
            } = e,
            r = (0, a.useMemo)((() => t?.cdn ?? t?.prod ?? !1), [t]);
          return (0, a.useCallback)((function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const a = t?.prod ?? r;
            return e ? e?.startsWith("http") ? i(e) : i(`${(0,s.getCdnPrefix)(a)}${e}`) : null
          }), [r])
        },
        d = e => e.full_src,
        u = e => {
          const t = e?.previewSrc ?? e?.preview_src ?? e;
          return t?.startsWith("http") ? t : `${(0,s.getCdnPrefix)(!1)}${t}`
        },
        m = e => e.meta.uploads_directory
    },
    38635: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6e77bb0f25a6ea37e8d831b12df9fa3c.png"
    },
    39311: (e, t, r) => {
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
        return function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          return o[e[t + 0]] + o[e[t + 1]] + o[e[t + 2]] + o[e[t + 3]] + "-" + o[e[t + 4]] + o[e[t + 5]] + "-" + o[e[t + 6]] + o[e[t + 7]] + "-" + o[e[t + 8]] + o[e[t + 9]] + "-" + o[e[t + 10]] + o[e[t + 11]] + o[e[t + 12]] + o[e[t + 13]] + o[e[t + 14]] + o[e[t + 15]]
        }(s)
      }
    },
    45675: (e, t, r) => {
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
        i = f(r(61478)),
        o = f(r(95847)),
        c = f(r(3154)),
        l = f(r(66010)),
        d = f(r(79967)),
        u = f(r(88433)),
        m = r(73614);

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
              }), (0, c.default)([function(t) {
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
              o = (t.min, t.max, t.mode),
              c = (t.forceWidth, t.forceSingleModeWidth, t.throttle, t.autoResize, t.onReady, function(e, t) {
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
    57792: (e, t, r) => {
      "use strict";
      var a = r(62983);

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
    60882: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => f
      });
      var a = r(62229),
        s = r(43851),
        n = r(39311),
        i = r(95966);
      const o = {
        deprecatedCarousel: "rockstargames-modules-core-newswire-articlea531264d5417d2198d4e14aa72335af1",
        "swiper-scrollbar-disabled": "rockstargames-modules-core-newswire-articleee2324d6dd93a95776b1e2d14d0f529d",
        "swiper-horizontal": "rockstargames-modules-core-newswire-articleb823bbff86d38da8cb611a7c3367d8fe",
        "swiper-vertical": "rockstargames-modules-core-newswire-articled29252354bbbfe413678daff5223169d",
        renderedWithChildren: "rockstargames-modules-core-newswire-articlead7696edafa3086969e7aaece4f09b4f",
        panorama: "rockstargames-modules-core-newswire-articleff63f8addff8d036ca0b65fa495e1653",
        img: "rockstargames-modules-core-newswire-articled8e66128b4fef1ea164350cd535e2d68",
        hideMobile: "rockstargames-modules-core-newswire-articlef3445a74a067bd92ff94b521cb0bdc07",
        hideLarge: "rockstargames-modules-core-newswire-articlea6c9173aa5a8fe31a062251352a9d711",
        imageAreaBg: "rockstargames-modules-core-newswire-articledcb2b41007683141579697bb4a8658ba",
        infinite_false: "rockstargames-modules-core-newswire-articleb85758ee99a52896b94130d002e821c7",
        track: "rockstargames-modules-core-newswire-articlec7c21df4f7f83a73f79dd7913aa87832",
        perico: "rockstargames-modules-core-newswire-articleaa50a9164fd0296b1196d441233cc348",
        dotsSlide: "rockstargames-modules-core-newswire-articleb8fd11776fba32f9663bbb6292a5c901",
        siblings: "rockstargames-modules-core-newswire-articlef4c50c0daadf81cd292587fcfea1339d",
        active: "rockstargames-modules-core-newswire-articlefdc2ec652cbb7469f602e73cd10ef997",
        "swiper-preloader-spin": "rockstargames-modules-core-newswire-articlec39b97f81c73d75dc4e013fde14aff18"
      };
      var c = r(99217),
        l = r(85239),
        d = r(25854);
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
              className: (0, i.classList)(o.img, t?.className)
            }), (t?.title || t?.description) && (0, d.jsx)(c.A, {
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
          const [k, x] = (0, a.useState)(0), v = (0, a.useMemo)((() => t && Array.isArray(t) ? t.map((() => (0, n.A)())) : null), [t]);
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
            className: (0, i.classList)(o.deprecatedCarousel, o[g], o[`infinite_${!f}`], t ? o.renderedWithChildren : "", p),
            style: l,
            children: [(0, d.jsxs)(s.RC, {
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
                className: o.trackWrapper,
                children: (0, d.jsxs)("div", {
                  className: o.track,
                  children: [r?.map((e => (0, d.jsx)(s.qr, {
                    children: (0, d.jsx)(u, {
                      item: e
                    })
                  }, e.key))), t && t.map(((e, t) => e && (0, d.jsx)(s.qr, {
                    children: e
                  }, v && v[t])))]
                })
              }), (0, d.jsx)(m, {
                current: k,
                total: t ? t.length : r.length
              })]
            }), (b?.title || b?.description) && (0, d.jsx)(c.A, {
              item: b
            })]
          })
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
    66010: (e, t) => {
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
    70818: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => d
      });
      var a = r(62229),
        s = r(2973),
        n = r.n(s),
        i = r(95966);
      const o = {
        pillBtn: "rockstargames-modules-core-newswire-articled45dcc8e4008f8620987ea3033e4373d",
        selected: "rockstargames-modules-core-newswire-articlede1852cf9b8b4b71bcc67f8e66552c46",
        grid: "rockstargames-modules-core-newswire-articlec157d94760f0476ea06aa04da4e86727",
        itemList: "rockstargames-modules-core-newswire-articlea1ccd04246730848111c4868ccba6294",
        gtaplus: "rockstargames-modules-core-newswire-articlec5d92b0365dc60e6b93d321e9139e9f3",
        rdo: "rockstargames-modules-core-newswire-articlecc490e805fe55ab86a3ec5df2a5131e3",
        noImg: "rockstargames-modules-core-newswire-articleb239e263450a84fffba43a94c194d606",
        gtao: "rockstargames-modules-core-newswire-articlef4bc90102d24f73cb2d45d3821bfd32e",
        custom: "rockstargames-modules-core-newswire-articleef5369875ddc5d9d7ad36eadc8afab2e",
        yellow: "rockstargames-modules-core-newswire-articlebdb57ca410954012dfd4711c67fc2a18",
        hotPink: "rockstargames-modules-core-newswire-articlefa9be84c85fca4e66b2489e1e52a2e6a",
        red: "rockstargames-modules-core-newswire-articlec446b758dbe82ad97444174f4d0b4abe",
        turquoise: "rockstargames-modules-core-newswire-articleb03c0798d8655dd98518b2f0dc002f06",
        purple: "rockstargames-modules-core-newswire-articlef14d63f28dd73c05cf950a08d8b8f501",
        teal: "rockstargames-modules-core-newswire-articlea0aaa124176430b6ad4f959cf136e7a3",
        blue: "rockstargames-modules-core-newswire-articledf5c0d39e32be4e6977bb1d638ed2340",
        green: "rockstargames-modules-core-newswire-articleea2d0d0e1e32d8e48d79a0ad80a4c8ac",
        darkRed: "rockstargames-modules-core-newswire-articlea6a078bd68ef39e719c21e5db6329642",
        darkBlue: "rockstargames-modules-core-newswire-articleaa460ec14f75c93c2ba386a115ea407c",
        goldenrod: "rockstargames-modules-core-newswire-articlea55d762df7035a2394c9ffbfcbf1a0db",
        skull: "rockstargames-modules-core-newswire-articlea034e7482e8f28c66ec657f72bb93749"
      };
      var c = r(25854);
      const {
        sanitize: l
      } = n(), d = e => {
        let {
          list: t,
          string: r,
          starColor: s,
          style: n,
          className: d,
          game: u,
          noImg: m,
          columns: f,
          mobileColumns: p
        } = e;
        const [g, b] = (0, a.useState)(null), h = r ? r.split("_#_") : t;
        if ((0, a.useEffect)((() => {
            b(t)
          }), [t]), !r && !t) return null;
        const w = {
          color: n?.color
        };
        return delete n?.color, f && g ? (0, c.jsx)("div", {
          className: o.grid,
          style: {
            "--unordered-list-grid-column": f,
            "--unordered-list-grid-column-mobile": p ?? f
          },
          children: (0, c.jsx)("ul", {
            className: (0, i.classList)(o.itemList, o.noImg, o[s], o[u]),
            style: (0, i.safeStyles)(n),
            children: g.map(((e, t) => (0, c.jsx)("li", {
              style: w,
              dangerouslySetInnerHTML: {
                __html: l(e.content)
              }
            }, t)))
          })
        }) : (0, c.jsx)("ul", {
          style: (0, i.safeStyles)(n),
          className: (0, i.classList)(o.itemList, o.custom, m ? o.noImg : "", s ? o[s] : "", u ? o[u] : "", d ?? ""),
          children: h.map(((e, t) => (0, c.jsx)("li", {
            dangerouslySetInnerHTML: {
              __html: l(e?.content ?? e)
            }
          }, t)))
        })
      }
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
        A: () => c
      });
      var a = r(38558),
        s = r(95966);
      const n = "rockstargames-modules-core-newswire-articlec8dc03880ce2e12f3fdea5b5b587f27f";
      var i = r(25854);
      const o = e => {
          let {
            alt: t,
            className: a,
            src: n,
            style: o
          } = e;
          const [c, l] = (0, s.usePreloadImg)(n);
          let d = n;
          !1 === c && ("rockstargames-modules-core-newswire-articlea6a06e2d5c4f1811ea39d17312ca2e67" === a && (d = r(28839)), d = r(9333));
          const {
            width: u,
            height: m
          } = l, f = {
            "--aspect-ratio": Number.isNaN(u / m) ? "" : u / m,
            ...o
          };
          return (0, i.jsx)("img", {
            src: d,
            className: a ?? "",
            alt: t,
            style: f
          })
        },
        c = e => {
          let {
            className: t,
            style: c = {},
            image: l = {},
            imageStyle: d = {}
          } = e, {
            alt: u,
            src: m
          } = (0, a.S1)(l);
          const {
            isMobile: f
          } = (0, s.useWindowResize)();
          m.desktop || m.mobile || (u = "", m = {
            mobile: r(28839),
            desktop: r(9333)
          });
          let p = l.frame ? `${l.frame} ${n}` : n;
          return (0, i.jsx)("div", {
            className: p,
            style: c,
            children: (0, i.jsx)(o, {
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
    79967: (e, t) => {
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
    83659: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => i
      });
      var a = r(62229),
        s = r(90069),
        n = r(25854);
      const i = e => {
        let {
          children: t,
          ...r
        } = e;
        const [i, o] = (0, a.useState)(!1);
        return (0, n.jsx)(s.zb, {
          ...r,
          onReady: () => {
            document.fonts.ready.then((() => {
              o(!0)
            }))
          },
          children: t
        })
      }
    },
    83933: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => n
      });
      const a = {
        hr: "rockstargames-modules-core-newswire-articledc7b1bc141e132d4ee9b7bf9d55c573a",
        redLine: "rockstargames-modules-core-newswire-articled4d968b41ef87926b0b6318e8647738b",
        gtao: "rockstargames-modules-core-newswire-articlef66c75c6e882da85fef31e4211ca0be2"
      };
      var s = r(25854);
      const n = e => {
        let {
          style: t,
          className: r = "",
          type: n = ""
        } = e;
        return (0, s.jsx)("div", {
          style: t,
          className: [a.hr, a[n], r].join(" ")
        })
      }
    },
    85239: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => l
      });
      var a = r(62229),
        s = r(95966),
        n = r(10632),
        i = r(75385);
      var o = r(25854);
      const c = e => {
          let {
            hero: t,
            children: r
          } = e;
          return t ? (0, o.jsx)("div", {
            className: "rockstargames-modules-core-newswire-articlea429886d721550d02521f7f5c9de7f5b",
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
          const h = (0, a.useMemo)((() => {
            if (u?.badge || u?.discountTxt || t || l) return (0, o.jsx)(n.A, {
              badge: u?.discountTxt ?? u?.badge ?? t ?? l,
              badgeType: r,
              splitter: u?.splitter ?? d,
              role: u?.role ?? g
            })
          }), [t, r, l, u, g, d]);
          return (0, o.jsx)(c, {
            hero: b,
            children: (0, o.jsx)("figure", {
              children: (0, o.jsxs)("div", {
                className: (0, s.classList)("rockstargames-modules-core-newswire-articled9ac792281efe15bcd4589b028d1c27b", b ? "rockstargames-modules-core-newswire-articlee430c4662cd185f58259d4a8d8b322de" : "", p?.hiddenMobile ? "hiddenMobile" : "", p?.hiddenLarge ? "hiddenLarge" : "", p?.className, f),
                style: (0, s.safeStyles)({
                  ...m,
                  ...p?.style
                }),
                ...p,
                children: [(0, o.jsx)(i.A, {
                  image: u,
                  className: f
                }), h, u?.caption && (0, o.jsx)("figcaption", {
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
      var a, s = (a = r(45675)) && a.__esModule ? a : {
        default: a
      };
      t.zb = s.default, s.default
    },
    95847: (e, t) => {
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
    99217: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => d
      });
      var a = r(95966),
        s = r(75385),
        n = r(70818),
        i = r(83933);
      const o = "rockstargames-modules-core-newswire-articleacd27eff2209196752622710f7b27558";
      var c = r(25854);
      const l = e => {
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
        d = e => {
          let {
            item: t,
            className: r = ""
          } = e;
          return (0, c.jsxs)("div", {
            className: (0, a.classList)("rockstargames-modules-core-newswire-articlef8bc9589974046cdac4a2264be12d2df", r),
            children: [t.title && (0, c.jsx)(l, {
              to: t?.href ?? t?.to,
              children: (0, c.jsx)("h3", {
                children: t.title
              })
            }), Array.isArray(t?.description?.content) ? t.description.content?.map(((e, t) => e?.unorderedList ? (0, c.jsx)(n.A, {
              columns: e.unorderedList.columns ?? null,
              style: {
                "--unordered-list-padding": "var(--grid-gap-static-sm)",
                "--unordered-list-margin-bottom": ".5rem"
              },
              noImg: !0,
              list: e.unorderedList.list
            }, t) : e?.image ? (0, c.jsx)(s.A, {
              image: e.image,
              className: e?.className
            }, t) : e?.separator ? (0, c.jsx)("div", {
              style: {
                margin: `${e.separator.spacing} 0`
              },
              children: (0, c.jsx)(i.A, {})
            }, t) : (0, c.jsx)("p", {
              children: (0, c.jsx)("span", {
                className: o,
                dangerouslySetInnerHTML: {
                  __html: e
                }
              })
            }, t))) : (0, c.jsx)("span", {
              className: o,
              dangerouslySetInnerHTML: {
                __html: t.description
              }
            })]
          })
        }
    }
  }
]);