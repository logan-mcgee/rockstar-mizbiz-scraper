try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "bbbfe835-233c-4c9d-b24d-a3b3e6428ceb", e._sentryDebugIdIdentifier = "sentry-dbid-bbbfe835-233c-4c9d-b24d-a3b3e6428ceb")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "e9ec16f9fe241f7e8169df2a1c5f1f8c74b65018",
    packageName: "@rockstargames/sites-gta-gen9",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "e9ec16f9fe241f7e8169df2a1c5f1f8c74b65018"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [1023, 3404, 7547, 9928], {
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
          s = Object.keys(t);
        if (r.length !== s.length) return !1;
        for (var a = Object.prototype.hasOwnProperty, n = 0; n < r.length; n++)
          if (!a.call(t, r[n]) || e[r[n]] !== t[r[n]]) return !1;
        return !0
      }
    },
    4246: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e, t) {
        var s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r;
        e() ? t((function r(a) {
          for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) i[o - 1] = arguments[o];
          a ? s(a) : e.apply(this, i) ? t(r) : s(null)
        })) : s(null)
      };
      var r = function() {}
    },
    6451: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e, t) {
        var r = void 0,
          s = void 0,
          a = void 0,
          n = void 0,
          i = 0;

        function o() {
          n = 0, i = +new Date, a = e.apply(r, s), r = null, s = null
        }
        return function() {
          r = this, s = arguments;
          var e = new Date - i;
          return n || (e >= t ? o() : n = setTimeout(o, t - e)), a
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
    13404: e => {
      var t, r, s = e.exports = {};

      function a() {
        throw new Error("setTimeout has not been defined")
      }

      function n() {
        throw new Error("clearTimeout has not been defined")
      }

      function i(e) {
        if (t === setTimeout) return setTimeout(e, 0);
        if ((t === a || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
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
          t = "function" == typeof setTimeout ? setTimeout : a
        } catch (e) {
          t = a
        }
        try {
          r = "function" == typeof clearTimeout ? clearTimeout : n
        } catch (e) {
          r = n
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

      function g(e, t) {
        this.fun = e, this.array = t
      }

      function m() {}
      s.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
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
    16046: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => g
      });
      var s = r(62229),
        a = r(23205),
        n = r(59740),
        i = r(95966);
      const o = {
        deprecatedCarousel: "rockstargames-sites-gta-gen9a531264d5417d2198d4e14aa72335af1",
        "swiper-scrollbar-disabled": "rockstargames-sites-gta-gen9ee2324d6dd93a95776b1e2d14d0f529d",
        "swiper-horizontal": "rockstargames-sites-gta-gen9b823bbff86d38da8cb611a7c3367d8fe",
        "swiper-vertical": "rockstargames-sites-gta-gen9d29252354bbbfe413678daff5223169d",
        renderedWithChildren: "rockstargames-sites-gta-gen9ad7696edafa3086969e7aaece4f09b4f",
        panorama: "rockstargames-sites-gta-gen9ff63f8addff8d036ca0b65fa495e1653",
        img: "rockstargames-sites-gta-gen9d8e66128b4fef1ea164350cd535e2d68",
        hideMobile: "rockstargames-sites-gta-gen9f3445a74a067bd92ff94b521cb0bdc07",
        hideLarge: "rockstargames-sites-gta-gen9a6c9173aa5a8fe31a062251352a9d711",
        imageAreaBg: "rockstargames-sites-gta-gen9dcb2b41007683141579697bb4a8658ba",
        infinite_false: "rockstargames-sites-gta-gen9b85758ee99a52896b94130d002e821c7",
        track: "rockstargames-sites-gta-gen9c7c21df4f7f83a73f79dd7913aa87832",
        perico: "rockstargames-sites-gta-gen9aa50a9164fd0296b1196d441233cc348",
        dotsSlide: "rockstargames-sites-gta-gen9b8fd11776fba32f9663bbb6292a5c901",
        siblings: "rockstargames-sites-gta-gen9f4c50c0daadf81cd292587fcfea1339d",
        active: "rockstargames-sites-gta-gen9fdc2ec652cbb7469f602e73cd10ef997",
        "swiper-preloader-spin": "rockstargames-sites-gta-gen9c39b97f81c73d75dc4e013fde14aff18"
      };
      var c = r(19991),
        d = r(80195),
        l = r(70954);
      const u = e => {
          let {
            item: t
          } = e;
          return (0, l.jsxs)("div", {
            children: [(0, l.jsx)(d.A, {
              image: t?.image,
              badge: t?.badge ?? t?.image?.badge,
              badgeType: "badge3",
              role: t?.role ?? t?.image?.role,
              splitter: t?.splitter ?? t?.image?.splitter,
              type: t?.type,
              ariaLabel: t?.image?.ariaLabel ?? t.description,
              style: t?.style,
              className: (0, i.classList)(o.img, t?.className)
            }), (t?.title || t?.description) && (0, l.jsx)(c.A, {
              item: t
            })]
          })
        },
        f = e => {
          let {
            current: t,
            total: r
          } = e;
          return (0, l.jsx)("div", {
            className: "swiper-scrollbar",
            style: {
              "--current-slide": t,
              "--total-slides": r
            },
            children: (0, l.jsx)("div", {
              className: "swiper-scrollbar-drag"
            })
          })
        },
        g = e => {
          let {
            children: t,
            items: r = [],
            style: d = {},
            noInfiniteScroll: g = !1,
            className: m = "",
            renderTemplate: p = "standard",
            text: b,
            customSpaceBetween: h = null,
            centerSlides: y = !0,
            centeredSlidesBounds: k = !1
          } = e;
          const [v, x] = (0, s.useState)(0), j = (0, s.useMemo)((() => t && Array.isArray(t) ? t.map((() => (0, n.A)())) : null), [t]);
          if (!(r && 0 !== r?.length || t)) return null;
          const _ = {
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
          return (0, l.jsxs)("div", {
            className: (0, i.classList)(o.deprecatedCarousel, o[p], o[`infinite_${!g}`], t ? o.renderedWithChildren : "", m),
            style: d,
            children: [(0, l.jsxs)(a.RC, {
              loop: !g,
              grabCursor: !0,
              centeredSlides: y,
              centerInsufficientSlides: y,
              slidesPerView: "auto",
              speed: 700,
              breakpoints: _,
              onUpdate: () => x(0),
              onActiveIndexChange: e => x(e?.realIndex ?? 0),
              centeredSlidesBounds: k,
              children: [(0, l.jsx)("div", {
                className: o.trackWrapper,
                children: (0, l.jsxs)("div", {
                  className: o.track,
                  children: [r?.map((e => (0, l.jsx)(a.qr, {
                    children: (0, l.jsx)(u, {
                      item: e
                    })
                  }, e.key))), t && t.map(((e, t) => e && (0, l.jsx)(a.qr, {
                    children: e
                  }, j && j[t])))]
                })
              }), (0, l.jsx)(f, {
                current: v,
                total: t ? t.length : r.length
              })]
            }), (b?.title || b?.description) && (0, l.jsx)(c.A, {
              item: b
            })]
          })
        }
    },
    16386: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/898794daaec68a69ef5ec4afaefe1948.png"
    },
    18626: (e, t, r) => {
      e.exports = r(69364)()
    },
    19991: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => l
      });
      var s = r(95966),
        a = r(40118),
        n = r(40908),
        i = r(33011);
      const o = "rockstargames-sites-gta-gen9acd27eff2209196752622710f7b27558";
      var c = r(70954);
      const d = e => {
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
        l = e => {
          let {
            item: t,
            className: r = ""
          } = e;
          return (0, c.jsxs)("div", {
            className: (0, s.classList)("rockstargames-sites-gta-gen9f8bc9589974046cdac4a2264be12d2df", r),
            children: [t.title && (0, c.jsx)(d, {
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
            }, t) : e?.image ? (0, c.jsx)(a.A, {
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
    },
    22154: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => i
      });
      var s = r(62229),
        a = r(82777),
        n = r(70954);
      const i = e => {
        let {
          children: t,
          ...r
        } = e;
        const [i, o] = (0, s.useState)(!1);
        return (0, n.jsx)(a.zb, {
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
    24970: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e111377ba943e9eefaa9204f77c77093.png"
    },
    28839: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61ae357c3bfbabb5d765e9a7c794d08f.png"
    },
    33011: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => n
      });
      const s = {
        hr: "rockstargames-sites-gta-gen9dc7b1bc141e132d4ee9b7bf9d55c573a",
        redLine: "rockstargames-sites-gta-gen9d4d968b41ef87926b0b6318e8647738b",
        gtao: "rockstargames-sites-gta-gen9f66c75c6e882da85fef31e4211ca0be2"
      };
      var a = r(70954);
      const n = e => {
        let {
          style: t,
          className: r = "",
          type: n = ""
        } = e;
        return (0, a.jsx)("div", {
          style: t,
          className: [s.hr, s[n], r].join(" ")
        })
      }
    },
    38635: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6e77bb0f25a6ea37e8d831b12df9fa3c.png"
    },
    40118: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => c
      });
      var s = r(72405),
        a = r(95966);
      const n = "rockstargames-sites-gta-gen9c8dc03880ce2e12f3fdea5b5b587f27f";
      var i = r(70954);
      const o = e => {
          let {
            alt: t,
            className: s,
            src: n,
            style: o
          } = e;
          const [c, d] = (0, a.usePreloadImg)(n);
          let l = n;
          !1 === c && ("rockstargames-sites-gta-gen9a6a06e2d5c4f1811ea39d17312ca2e67" === s && (l = r(28839)), l = r(9333));
          const {
            width: u,
            height: f
          } = d, g = {
            "--aspect-ratio": Number.isNaN(u / f) ? "" : u / f,
            ...o
          };
          return (0, i.jsx)("img", {
            src: l,
            className: s ?? "",
            alt: t,
            style: g
          })
        },
        c = e => {
          let {
            className: t,
            style: c = {},
            image: d = {},
            imageStyle: l = {}
          } = e, {
            alt: u,
            src: f
          } = (0, s.S1)(d);
          const {
            isMobile: g
          } = (0, a.useWindowResize)();
          f.desktop || f.mobile || (u = "", f = {
            mobile: r(28839),
            desktop: r(9333)
          });
          let m = d.frame ? `${d.frame} ${n}` : n;
          return (0, i.jsx)("div", {
            className: m,
            style: c,
            children: (0, i.jsx)(o, {
              style: {
                ...l,
                ...d?.style
              },
              src: g ? f.mobile || f.desktop : f?.desktop || f?.mobile,
              alt: u,
              className: t
            })
          })
        }
    },
    40908: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => l
      });
      var s = r(62229),
        a = r(30340),
        n = r.n(a),
        i = r(95966);
      const o = {
        pillBtn: "rockstargames-sites-gta-gen9d45dcc8e4008f8620987ea3033e4373d",
        selected: "rockstargames-sites-gta-gen9de1852cf9b8b4b71bcc67f8e66552c46",
        grid: "rockstargames-sites-gta-gen9c157d94760f0476ea06aa04da4e86727",
        itemList: "rockstargames-sites-gta-gen9a1ccd04246730848111c4868ccba6294",
        gtaplus: "rockstargames-sites-gta-gen9c5d92b0365dc60e6b93d321e9139e9f3",
        rdo: "rockstargames-sites-gta-gen9cc490e805fe55ab86a3ec5df2a5131e3",
        noImg: "rockstargames-sites-gta-gen9b239e263450a84fffba43a94c194d606",
        gtao: "rockstargames-sites-gta-gen9f4bc90102d24f73cb2d45d3821bfd32e",
        custom: "rockstargames-sites-gta-gen9ef5369875ddc5d9d7ad36eadc8afab2e",
        yellow: "rockstargames-sites-gta-gen9bdb57ca410954012dfd4711c67fc2a18",
        hotPink: "rockstargames-sites-gta-gen9fa9be84c85fca4e66b2489e1e52a2e6a",
        red: "rockstargames-sites-gta-gen9c446b758dbe82ad97444174f4d0b4abe",
        turquoise: "rockstargames-sites-gta-gen9b03c0798d8655dd98518b2f0dc002f06",
        purple: "rockstargames-sites-gta-gen9f14d63f28dd73c05cf950a08d8b8f501",
        teal: "rockstargames-sites-gta-gen9a0aaa124176430b6ad4f959cf136e7a3",
        blue: "rockstargames-sites-gta-gen9df5c0d39e32be4e6977bb1d638ed2340",
        green: "rockstargames-sites-gta-gen9ea2d0d0e1e32d8e48d79a0ad80a4c8ac",
        darkRed: "rockstargames-sites-gta-gen9a6a078bd68ef39e719c21e5db6329642",
        darkBlue: "rockstargames-sites-gta-gen9aa460ec14f75c93c2ba386a115ea407c",
        goldenrod: "rockstargames-sites-gta-gen9a55d762df7035a2394c9ffbfcbf1a0db",
        skull: "rockstargames-sites-gta-gen9a034e7482e8f28c66ec657f72bb93749"
      };
      var c = r(70954);
      const {
        sanitize: d
      } = n(), l = e => {
        let {
          list: t,
          string: r,
          starColor: a,
          style: n,
          className: l,
          game: u,
          noImg: f,
          columns: g,
          mobileColumns: m
        } = e;
        const [p, b] = (0, s.useState)(null), h = r ? r.split("_#_") : t;
        if ((0, s.useEffect)((() => {
            b(t)
          }), [t]), !r && !t) return null;
        const y = {
          color: n?.color
        };
        return delete n?.color, g && p ? (0, c.jsx)("div", {
          className: o.grid,
          style: {
            "--unordered-list-grid-column": g,
            "--unordered-list-grid-column-mobile": m ?? g
          },
          children: (0, c.jsx)("ul", {
            className: (0, i.classList)(o.itemList, o.noImg, o[a], o[u]),
            style: (0, i.safeStyles)(n),
            children: p.map(((e, t) => (0, c.jsx)("li", {
              style: y,
              dangerouslySetInnerHTML: {
                __html: d(e.content)
              }
            }, t)))
          })
        }) : (0, c.jsx)("ul", {
          style: (0, i.safeStyles)(n),
          className: (0, i.classList)(o.itemList, o.custom, f ? o.noImg : "", a ? o[a] : "", u ? o[u] : "", l ?? ""),
          children: h.map(((e, t) => (0, c.jsx)("li", {
            dangerouslySetInnerHTML: {
              __html: d(e?.content ?? e)
            }
          }, t)))
        })
      }
    },
    46511: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var s = Object.assign || function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
          }
          return e
        },
        a = function() {
          function e(e, t) {
            for (var r = 0; r < t.length; r++) {
              var s = t[r];
              s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
            }
          }
          return function(t, r, s) {
            return r && e(t.prototype, r), s && e(t, s), t
          }
        }(),
        n = g(r(62229)),
        i = g(r(18626)),
        o = g(r(2851)),
        c = g(r(88694)),
        d = g(r(4246)),
        l = g(r(6451)),
        u = g(r(93677)),
        f = r(67354);

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
        }(t, e), a(t, [{
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
              s = t.max,
              a = t.mode,
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
                k = "multi" === a ? function() {
                  return p(l, b)
                } : function() {
                  return m(l, g)
                },
                v = "multi" === a ? function() {
                  return m(l, g)
                } : function() {
                  return p(l, b)
                },
                x = void 0,
                j = r,
                _ = s;
              this.setState({
                ready: !1
              }), (0, c.default)([function(t) {
                return (0, d.default)((function() {
                  return j <= _
                }), (function(t) {
                  if (y()) return t(!0);
                  x = parseInt((j + _) / 2, 10), e.setState({
                    fontSize: x
                  }, (function() {
                    return y() ? t(!0) : (k() ? j = x + 1 : _ = x - 1, t())
                  }))
                }), t)
              }, function(t) {
                return "single" === a && n || v() ? t() : (j = r, _ = x, (0, d.default)((function() {
                  return j < _
                }), (function(t) {
                  if (y()) return t(!0);
                  x = parseInt((j + _) / 2, 10), e.setState({
                    fontSize: x
                  }, (function() {
                    return h !== e.pid ? t(!0) : (v() ? j = x + 1 : _ = x - 1, t())
                  }))
                }), t))
              }, function(t) {
                if (x = Math.min(j, _), x = Math.max(x, r), x = Math.min(x, s), x = Math.max(x, 0), y()) return t(!0);
                e.setState({
                  fontSize: x
                }, t)
              }], (function(t) {
                t || y() || e.setState({
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
              a = t.text,
              i = t.style,
              o = (t.min, t.max, t.mode),
              c = (t.forceWidth, t.forceSingleModeWidth, t.throttle, t.autoResize, t.onReady, function(e, t) {
                var r = {};
                for (var s in e) t.indexOf(s) >= 0 || Object.prototype.hasOwnProperty.call(e, s) && (r[s] = e[s]);
                return r
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
            }, a && "function" == typeof r ? u ? r(a) : a : r))
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
    50911: (e, t, r) => {
      "use strict";
      r.d(t, {
        i: () => d,
        o: () => c
      });
      var s = r(62229),
        a = r(95966),
        n = r(70954);
      const i = (0, a.setContextItem)({
          context: (0, s.createContext)(),
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
        d = () => (0, s.useContext)(i)
    },
    59740: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => c
      });
      const s = {
        randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto)
      };
      let a;
      const n = new Uint8Array(16);

      function i() {
        if (!a && (a = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !a)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return a(n)
      }
      const o = [];
      for (let e = 0; e < 256; ++e) o.push((e + 256).toString(16).slice(1));
      const c = function(e, t, r) {
        if (s.randomUUID && !t && !e) return s.randomUUID();
        const a = (e = e || {}).random || (e.rng || i)();
        if (a[6] = 15 & a[6] | 64, a[8] = 63 & a[8] | 128, t) {
          r = r || 0;
          for (let e = 0; e < 16; ++e) t[r + e] = a[e];
          return t
        }
        return function(e, t = 0) {
          return o[e[t + 0]] + o[e[t + 1]] + o[e[t + 2]] + o[e[t + 3]] + "-" + o[e[t + 4]] + o[e[t + 5]] + "-" + o[e[t + 6]] + o[e[t + 7]] + "-" + o[e[t + 8]] + o[e[t + 9]] + "-" + o[e[t + 10]] + o[e[t + 11]] + o[e[t + 12]] + o[e[t + 13]] + o[e[t + 14]] + o[e[t + 15]]
        }(a)
      }
    },
    59928: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, {
        default: () => y
      });
      var s = r(19991),
        a = r(80195),
        n = r(16046);
      const i = {
        padding: "rockstargames-sites-gta-gen9ac767e959939b4d56b2358cb263d07ad",
        carouselWrapper: "rockstargames-sites-gta-gen9fabefc39343f6c494eb3d049757d89c5",
        carouselTitle: "rockstargames-sites-gta-gen9e9e0ef1bfc3699b1e50c33dd0ce8e76a"
      };
      var o = r(70954);
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
        d = e => {
          let {
            items: t = [],
            text: r = {},
            style: d,
            className: l = "",
            id: u = null
          } = e;
          return t?.length ? (0, o.jsxs)("div", {
            id: u,
            "data-testid": `carousel${l&&`-${l}`}-group-of-items`,
            children: [(0, o.jsx)(n.A, {
              style: d,
              className: [l, i.carouselWrapper].join(" "),
              children: t.map((e => (0, o.jsxs)("div", {
                id: e?.id ?? null,
                children: [(0, o.jsx)(a.A, {
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
              children: (0, o.jsx)(s.A, {
                item: r
              })
            }) : ""]
          }) : null
        };
      var l = r(31879),
        u = r.n(l),
        f = r(92440),
        g = r(95966);
      const m = e => {
          let {
            impressionTracking: t,
            gtm: r = {},
            children: s
          } = e;
          return t?.shouldTrack ? (0, o.jsx)(f.InViewTracker, {
            threshold: t?.threshold,
            gtm: r,
            children: s
          }) : s
        },
        p = e => {
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
          }) : (0, o.jsx)(a.A, {
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
            className: a = "",
            id: n = null
          } = e;
          return (0, o.jsx)("div", {
            style: r,
            className: (0, g.classList)("rockstargames-sites-gta-gen9d38af92e8657708abd3dc5295e62476c", a),
            id: n,
            "data-testid": "standard-group-of-items",
            children: t.map((e => (0, o.jsx)(m, {
              impressionTracking: e?.impressionTracking,
              gtm: e?.gtm,
              children: (0, o.jsx)(p, {
                to: e?.to,
                children: (0, o.jsxs)("div", {
                  className: (0, g.classList)("rockstargames-sites-gta-gen9a9b63d3aa2f18fa6c84b19c8993a7893", e.className),
                  style: e?.style ?? {},
                  ...e?.props,
                  children: [e?.image || e?.videoId ? (0, o.jsx)(b, {
                    item: e
                  }) : "", e.title || e.description ? (0, o.jsx)(s.A, {
                    item: e,
                    className: "rockstargames-sites-gta-gen9bc47d354556b20071313d2c1ccc3debd"
                  }) : ""]
                })
              })
            }, e.key)))
          })
        },
        y = e => {
          let {
            children: t = null,
            text: r = {},
            items: s = [],
            renderTemplate: a = "",
            style: n = {},
            id: i = null,
            ...c
          } = e;
          if (!s.length) return null;
          switch (a) {
            case "carousel":
              return (0, o.jsx)(d, {
                text: r,
                items: s,
                style: n,
                id: i,
                children: t
              });
            case "carousel-panorama":
              return (0, o.jsx)(d, {
                text: r,
                items: s,
                style: n,
                className: "panorama",
                id: i,
                children: t
              });
            default:
              return (0, o.jsx)(h, {
                items: s,
                style: n,
                id: i,
                ...c,
                children: t
              })
          }
        }
    },
    60540: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => c
      });
      var s = r(40118),
        a = r(22154);
      const n = {
        badge: "rockstargames-sites-gta-gen9b7268b0e907630904b6689af83fee8e3",
        badgeSizeUpdate: "rockstargames-sites-gta-gen9ce8632d7464b556158a1d549f653498c",
        badge2: "rockstargames-sites-gta-gen9d08ce7145bc9562355a3984f8ccc9313",
        badge3: "rockstargames-sites-gta-gen9c7c60cfb12b6e9be68893c60814b3ed7"
      };
      var i = r(70954);
      const o = e => {
          let {
            wrapper: t,
            children: r,
            role: s,
            splitter: a
          } = e;
          return a || s ? t(r) : r
        },
        c = e => {
          let {
            badge: t,
            badgeType: c,
            role: d,
            splitter: l
          } = e;
          const u = [];
          return l ? t.split(l).map(((e, t) => u.push(e))) : u.push(t), (0, i.jsxs)(o, {
            splitter: l,
            role: d,
            wrapper: e => (0, i.jsx)("div", {
              className: `${n.badge} ${c?n[c]:""} `,
              children: e
            }),
            children: [(0, i.jsx)(i.Fragment, {
              children: d && (0, i.jsx)(s.A, {
                image: {
                  alt: d,
                  desktop: r(65287)(`./${d}.png`)
                }
              })
            }), (0, i.jsx)(a.A, {
              className: `${l||d?"":n.badge} ${c?n[c]:""}`,
              min: 8,
              max: 1e3,
              mode: l || d ? "single" : "multi",
              children: u[0]
            }), (0, i.jsx)(i.Fragment, {
              children: u.shift() && l && u.length >= 1 && (0, i.jsx)(a.A, {
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
      var s = {
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
        if (!r.o(s, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        }
        return s[e]
      }
      a.keys = function() {
        return Object.keys(s)
      }, a.resolve = n, e.exports = a, a.id = 65287
    },
    66915: e => {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
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
    69364: (e, t, r) => {
      "use strict";
      var s = r(66915);

      function a() {}

      function n() {}
      n.resetWarningCache = a, e.exports = function() {
        function e(e, t, r, a, n, i) {
          if (i !== s) {
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
          resetWarningCache: a
        };
        return r.PropTypes = r, r
      }
    },
    72405: (e, t, r) => {
      "use strict";
      r.d(t, {
        C1: () => c,
        S1: () => o,
        XC: () => f,
        jS: () => d,
        qg: () => l,
        z0: () => u
      });
      var s = r(62229),
        a = r(95966),
        n = r(50911);
      const i = e => {
          if (!e) return null;
          const {
            hostname: t,
            pathname: r
          } = new URL(e, (0, a.getCdnPrefix)(!0));
          return "/" === r ? null : (t.endsWith(".akamaized.net"), e)
        },
        o = e => {
          let {
            alt: t = null,
            mobile: r = null,
            desktop: o = null,
            ariaLabel: c = null,
            sources: d = null,
            prod: l = null
          } = e;
          const u = (0, a.useLocale)(),
            {
              meta: f = {}
            } = (0, n.i)() ?? {},
            [g, m] = (0, s.useState)(l ?? f?.cdn ?? f?.prod ?? !0);
          (0, s.useEffect)((() => {
            m(l ?? f?.cdn ?? f?.prod ?? !0)
          }), [l, f]);
          const p = (0, s.useCallback)((e => {
            const t = null !== d,
              r = e?.previewSrc ?? e ?? null;
            if (null === r || "string" != typeof r) return null;
            if (r.startsWith("http")) return i(r);
            const s = `${t?(0,a.getCdnPrefix)(g):""}${r}`;
            return i(s)
          }), [g, d]);
          return {
            alt: t,
            ariaLabel: c,
            src: {
              mobile: p(d?.[u]?.mobile ?? d?.en_us?.mobile ?? r),
              desktop: p(d?.[u]?.desktop ?? d?.en_us?.desktop ?? o)
            }
          }
        },
        c = e => {
          const t = (0, n.i)() ?? {},
            {
              meta: r = {}
            } = t,
            [o, c] = (0, s.useState)(r?.cdn ?? r?.prod ?? !1);
          return (0, s.useEffect)((() => {
            c(r?.cdn ?? r?.prod ?? !1)
          }), [r]), e ? e?.startsWith("http") ? i(e) : i(`${(0,a.getCdnPrefix)(o)}${e}`) : null
        },
        d = () => {
          const e = (0, n.i)() ?? {},
            {
              meta: t = {}
            } = e,
            r = (0, s.useMemo)((() => t?.cdn ?? t?.prod ?? !1), [t]);
          return (0, s.useCallback)((function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const s = t?.prod ?? r;
            return e ? e?.startsWith("http") ? i(e) : i(`${(0,a.getCdnPrefix)(s)}${e}`) : null
          }), [r])
        },
        l = e => e.full_src,
        u = e => {
          const t = e?.previewSrc ?? e?.preview_src ?? e;
          return t?.startsWith("http") ? t : `${(0,a.getCdnPrefix)(!1)}${t}`
        },
        f = e => e.meta.uploads_directory
    },
    80195: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => d
      });
      var s = r(62229),
        a = r(95966),
        n = r(60540),
        i = r(40118);
      var o = r(70954);
      const c = e => {
          let {
            hero: t,
            children: r
          } = e;
          return t ? (0, o.jsx)("div", {
            className: "rockstargames-sites-gta-gen9a429886d721550d02521f7f5c9de7f5b",
            children: r
          }) : r
        },
        d = e => {
          let {
            badge: t = null,
            badgeType: r,
            discountTxt: d,
            splitter: l,
            image: u,
            style: f,
            className: g = "",
            attributes: m = {},
            role: p,
            hero: b = !1
          } = e;
          const h = (0, s.useMemo)((() => {
            if (u?.badge || u?.discountTxt || t || d) return (0, o.jsx)(n.A, {
              badge: u?.discountTxt ?? u?.badge ?? t ?? d,
              badgeType: r,
              splitter: u?.splitter ?? l,
              role: u?.role ?? p
            })
          }), [t, r, d, u, p, l]);
          return (0, o.jsx)(c, {
            hero: b,
            children: (0, o.jsx)("figure", {
              children: (0, o.jsxs)("div", {
                className: (0, a.classList)("rockstargames-sites-gta-gen9d9ac792281efe15bcd4589b028d1c27b", b ? "rockstargames-sites-gta-gen9e430c4662cd185f58259d4a8d8b322de" : "", m?.hiddenMobile ? "hiddenMobile" : "", m?.hiddenLarge ? "hiddenLarge" : "", m?.className, g),
                style: (0, a.safeStyles)({
                  ...f,
                  ...m?.style
                }),
                ...m,
                children: [(0, o.jsx)(i.A, {
                  image: u,
                  className: g
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
    82777: (e, t, r) => {
      "use strict";
      t.zb = void 0;
      var s, a = (s = r(46511)) && s.__esModule ? s : {
        default: s
      };
      t.zb = a.default, a.default
    },
    88694: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e, t) {
        var r = [],
          s = 0,
          n = !0;

        function i(e) {
          function s() {
            t && t(e, r)
          }
          n ? a.default.nextTick(s) : s()
        }
        e.length > 0 ? e[0]((function t(a, n) {
          r.push(n), ++s >= e.length || a ? i(a) : e[s](t)
        })) : i(null), n = !1
      };
      var s, a = (s = r(13404)) && s.__esModule ? s : {
        default: s
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