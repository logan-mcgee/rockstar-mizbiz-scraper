! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "db21c378-6ac4-4dd1-b2b7-1bd91103b6aa", e._sentryDebugIdIdentifier = "sentry-dbid-db21c378-6ac4-4dd1-b2b7-1bd91103b6aa")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta-gen9",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [4654, 7005], {
    90250: (e, t, n) => {
      n.d(t, {
        A: () => W
      });
      var a = n(80226),
        r = n(71403),
        s = "right-scroll-bar-position",
        c = "width-before-scroll-bar",
        o = n(26208),
        i = (0, n(23496).f)(),
        l = function() {},
        d = r.forwardRef((function(e, t) {
          var n = r.useRef(null),
            s = r.useState({
              onScrollCapture: l,
              onWheelCapture: l,
              onTouchMoveCapture: l
            }),
            c = s[0],
            d = s[1],
            u = e.forwardProps,
            g = e.children,
            f = e.className,
            m = e.removeScrollBar,
            h = e.enabled,
            b = e.shards,
            p = e.sideCar,
            v = e.noIsolation,
            x = e.inert,
            k = e.allowPinchZoom,
            w = e.as,
            S = void 0 === w ? "div" : w,
            C = e.gapMode,
            y = (0, a.Tt)(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
            j = p,
            _ = (0, o.S)([n, t]),
            T = (0, a.Cl)((0, a.Cl)({}, y), c);
          return r.createElement(r.Fragment, null, h && r.createElement(j, {
            sideCar: i,
            removeScrollBar: m,
            shards: b,
            noIsolation: v,
            inert: x,
            setCallbacks: d,
            allowPinchZoom: !!k,
            lockRef: n,
            gapMode: C
          }), u ? r.cloneElement(r.Children.only(g), (0, a.Cl)((0, a.Cl)({}, T), {
            ref: _
          })) : r.createElement(S, (0, a.Cl)({}, T, {
            className: f,
            ref: _
          }), g))
        }));
      d.defaultProps = {
        enabled: !0,
        removeScrollBar: !0,
        inert: !1
      }, d.classNames = {
        fullWidth: c,
        zeroRight: s
      };
      var u = function(e) {
        var t = e.sideCar,
          n = (0, a.Tt)(e, ["sideCar"]);
        if (!t) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
        var s = t.read();
        if (!s) throw new Error("Sidecar medium not found");
        return r.createElement(s, (0, a.Cl)({}, n))
      };
      u.isSideCarExport = !0;
      var g = function() {
          var e = 0,
            t = null;
          return {
            add: function(a) {
              var r, s;
              0 == e && (t = function() {
                if (!document) return null;
                var e = document.createElement("style");
                e.type = "text/css";
                var t = n.nc;
                return t && e.setAttribute("nonce", t), e
              }()) && (s = a, (r = t).styleSheet ? r.styleSheet.cssText = s : r.appendChild(document.createTextNode(s)), function(e) {
                (document.head || document.getElementsByTagName("head")[0]).appendChild(e)
              }(t)), e++
            },
            remove: function() {
              !--e && t && (t.parentNode && t.parentNode.removeChild(t), t = null)
            }
          }
        },
        f = function() {
          var e, t = (e = g(), function(t, n) {
            r.useEffect((function() {
              return e.add(t),
                function() {
                  e.remove()
                }
            }), [t && n])
          });
          return function(e) {
            var n = e.styles,
              a = e.dynamic;
            return t(n, a), null
          }
        },
        m = {
          left: 0,
          top: 0,
          right: 0,
          gap: 0
        },
        h = function(e) {
          return parseInt(e || "", 10) || 0
        },
        b = f(),
        p = function(e, t, n, a) {
          var r = e.left,
            o = e.top,
            i = e.right,
            l = e.gap;
          return void 0 === n && (n = "margin"), "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(a, ";\n   padding-right: ").concat(l, "px ").concat(a, ";\n  }\n  body {\n    overflow: hidden ").concat(a, ";\n    overscroll-behavior: contain;\n    ").concat([t && "position: relative ".concat(a, ";"), "margin" === n && "\n    padding-left: ".concat(r, "px;\n    padding-top: ").concat(o, "px;\n    padding-right: ").concat(i, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(l, "px ").concat(a, ";\n    "), "padding" === n && "padding-right: ".concat(l, "px ").concat(a, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(s, " {\n    right: ").concat(l, "px ").concat(a, ";\n  }\n  \n  .").concat(c, " {\n    margin-right: ").concat(l, "px ").concat(a, ";\n  }\n  \n  .").concat(s, " .").concat(s, " {\n    right: 0 ").concat(a, ";\n  }\n  \n  .").concat(c, " .").concat(c, " {\n    margin-right: 0 ").concat(a, ";\n  }\n  \n  body {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(l, "px;\n  }\n")
        },
        v = function(e) {
          var t = e.noRelative,
            n = e.noImportant,
            a = e.gapMode,
            s = void 0 === a ? "margin" : a,
            c = r.useMemo((function() {
              return function(e) {
                if (void 0 === e && (e = "margin"), "undefined" == typeof window) return m;
                var t = function(e) {
                    var t = window.getComputedStyle(document.body),
                      n = t["padding" === e ? "paddingLeft" : "marginLeft"],
                      a = t["padding" === e ? "paddingTop" : "marginTop"],
                      r = t["padding" === e ? "paddingRight" : "marginRight"];
                    return [h(n), h(a), h(r)]
                  }(e),
                  n = document.documentElement.clientWidth,
                  a = window.innerWidth;
                return {
                  left: t[0],
                  top: t[1],
                  right: t[2],
                  gap: Math.max(0, a - n + t[2] - t[0])
                }
              }(s)
            }), [s]);
          return r.createElement(b, {
            styles: p(c, !t, s, n ? "" : "!important")
          })
        },
        x = !1;
      if ("undefined" != typeof window) try {
        var k = Object.defineProperty({}, "passive", {
          get: function() {
            return x = !0, !0
          }
        });
        window.addEventListener("test", k, k), window.removeEventListener("test", k, k)
      } catch (e) {
        x = !1
      }
      var w = !!x && {
          passive: !1
        },
        S = function(e, t) {
          var n = window.getComputedStyle(e);
          return "hidden" !== n[t] && !(n.overflowY === n.overflowX && ! function(e) {
            return "TEXTAREA" === e.tagName
          }(e) && "visible" === n[t])
        },
        C = function(e, t) {
          var n = t.ownerDocument,
            a = t;
          do {
            if ("undefined" != typeof ShadowRoot && a instanceof ShadowRoot && (a = a.host), y(e, a)) {
              var r = j(e, a);
              if (r[1] > r[2]) return !0
            }
            a = a.parentNode
          } while (a && a !== n.body);
          return !1
        },
        y = function(e, t) {
          return "v" === e ? function(e) {
            return S(e, "overflowY")
          }(t) : function(e) {
            return S(e, "overflowX")
          }(t)
        },
        j = function(e, t) {
          return "v" === e ? [(n = t).scrollTop, n.scrollHeight, n.clientHeight] : function(e) {
            return [e.scrollLeft, e.scrollWidth, e.clientWidth]
          }(t);
          var n
        },
        _ = function(e) {
          return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
        },
        T = function(e) {
          return [e.deltaX, e.deltaY]
        },
        N = function(e) {
          return e && "current" in e ? e.current : e
        },
        E = function(e) {
          return "\n  .block-interactivity-".concat(e, " {pointer-events: none;}\n  .allow-interactivity-").concat(e, " {pointer-events: all;}\n")
        },
        I = 0,
        R = [];

      function M(e) {
        for (var t = null; null !== e;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
        return t
      }
      const L = (i.useMedium((function(e) {
        var t = r.useRef([]),
          n = r.useRef([0, 0]),
          s = r.useRef(),
          c = r.useState(I++)[0],
          o = r.useState(f)[0],
          i = r.useRef(e);
        r.useEffect((function() {
          i.current = e
        }), [e]), r.useEffect((function() {
          if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(c));
            var t = (0, a.fX)([e.lockRef.current], (e.shards || []).map(N), !0).filter(Boolean);
            return t.forEach((function(e) {
                return e.classList.add("allow-interactivity-".concat(c))
              })),
              function() {
                document.body.classList.remove("block-interactivity-".concat(c)), t.forEach((function(e) {
                  return e.classList.remove("allow-interactivity-".concat(c))
                }))
              }
          }
        }), [e.inert, e.lockRef.current, e.shards]);
        var l = r.useCallback((function(e, t) {
            if ("touches" in e && 2 === e.touches.length) return !i.current.allowPinchZoom;
            var a, r = _(e),
              c = n.current,
              o = "deltaX" in e ? e.deltaX : c[0] - r[0],
              l = "deltaY" in e ? e.deltaY : c[1] - r[1],
              d = e.target,
              u = Math.abs(o) > Math.abs(l) ? "h" : "v";
            if ("touches" in e && "h" === u && "range" === d.type) return !1;
            var g = C(u, d);
            if (!g) return !0;
            if (g ? a = u : (a = "v" === u ? "h" : "v", g = C(u, d)), !g) return !1;
            if (!s.current && "changedTouches" in e && (o || l) && (s.current = a), !a) return !0;
            var f = s.current || a;
            return function(e, t, n, a, r) {
              var s = function(e, t) {
                  return "h" === e && "rtl" === t ? -1 : 1
                }(e, window.getComputedStyle(t).direction),
                c = s * a,
                o = n.target,
                i = t.contains(o),
                l = !1,
                d = c > 0,
                u = 0,
                g = 0;
              do {
                var f = j(e, o),
                  m = f[0],
                  h = f[1] - f[2] - s * m;
                (m || h) && y(e, o) && (u += h, g += m), o = o instanceof ShadowRoot ? o.host : o.parentNode
              } while (!i && o !== document.body || i && (t.contains(o) || t === o));
              return (d && (r && Math.abs(u) < 1 || !r && c > u) || !d && (r && Math.abs(g) < 1 || !r && -c > g)) && (l = !0), l
            }(f, t, e, "h" === f ? o : l, !0)
          }), []),
          d = r.useCallback((function(e) {
            var n = e;
            if (R.length && R[R.length - 1] === o) {
              var a = "deltaY" in n ? T(n) : _(n),
                r = t.current.filter((function(e) {
                  return e.name === n.type && (e.target === n.target || n.target === e.shadowParent) && (t = e.delta, r = a, t[0] === r[0] && t[1] === r[1]);
                  var t, r
                }))[0];
              if (r && r.should) n.cancelable && n.preventDefault();
              else if (!r) {
                var s = (i.current.shards || []).map(N).filter(Boolean).filter((function(e) {
                  return e.contains(n.target)
                }));
                (s.length > 0 ? l(n, s[0]) : !i.current.noIsolation) && n.cancelable && n.preventDefault()
              }
            }
          }), []),
          u = r.useCallback((function(e, n, a, r) {
            var s = {
              name: e,
              delta: n,
              target: a,
              should: r,
              shadowParent: M(a)
            };
            t.current.push(s), setTimeout((function() {
              t.current = t.current.filter((function(e) {
                return e !== s
              }))
            }), 1)
          }), []),
          g = r.useCallback((function(e) {
            n.current = _(e), s.current = void 0
          }), []),
          m = r.useCallback((function(t) {
            u(t.type, T(t), t.target, l(t, e.lockRef.current))
          }), []),
          h = r.useCallback((function(t) {
            u(t.type, _(t), t.target, l(t, e.lockRef.current))
          }), []);
        r.useEffect((function() {
          return R.push(o), e.setCallbacks({
              onScrollCapture: m,
              onWheelCapture: m,
              onTouchMoveCapture: h
            }), document.addEventListener("wheel", d, w), document.addEventListener("touchmove", d, w), document.addEventListener("touchstart", g, w),
            function() {
              R = R.filter((function(e) {
                return e !== o
              })), document.removeEventListener("wheel", d, w), document.removeEventListener("touchmove", d, w), document.removeEventListener("touchstart", g, w)
            }
        }), []);
        var b = e.removeScrollBar,
          p = e.inert;
        return r.createElement(r.Fragment, null, p ? r.createElement(o, {
          styles: E(c)
        }) : null, b ? r.createElement(v, {
          gapMode: e.gapMode
        }) : null)
      })), u);
      var B = r.forwardRef((function(e, t) {
        return r.createElement(d, (0, a.Cl)({}, e, {
          ref: t,
          sideCar: L
        }))
      }));
      B.classNames = d.classNames;
      const W = B
    },
    10294: (e, t, n) => {
      n.r(t), n.d(t, {
        default: () => M
      });
      var a = n(71403),
        r = n(57172),
        s = n(81902),
        c = n(89269),
        o = n(77356),
        i = n(59217),
        l = n(42756),
        d = n(58407),
        u = n(40207),
        g = n(86503),
        f = n(60285),
        m = n(39695),
        h = n(62811),
        b = n(26177),
        p = n(96717),
        v = n(94566),
        x = n(74401);
      const k = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cb04fb2acd10f43aa501729b4d7d26a8.jpg",
        w = {
          pillBtn: "rockstargames-sites-gta-gen9e9d0055988bd29cc9b3774420b49220d",
          selected: "rockstargames-sites-gta-gen9b6cfe7731b5b7ab166fcb167bd54aeec",
          devBtns: "rockstargames-sites-gta-gen9a6c889f3ecad96c4975bc7ed81540491",
          devBtn: "rockstargames-sites-gta-gen9ad51ee33c3002d7f25e3cc0f78b0d873",
          secondary: "rockstargames-sites-gta-gen9a256144bc2091efea308d9a8a377a737",
          interestTrackerWrapper: "rockstargames-sites-gta-gen9eecfe5137cf2e3c4b0478b43be1e74b1",
          interestTracker: "rockstargames-sites-gta-gen9f67885e5391b6550f170fd56628c9906",
          loader: "rockstargames-sites-gta-gen9ca488091d243787a9cd796d97a5f122b",
          moduleImage: "rockstargames-sites-gta-gen9d3f21bc571d3a3f577d26e8b45859648",
          mobileImgContainer: "rockstargames-sites-gta-gen9d2125680dd25c2bcb65f9a0b96f21bb4",
          moduleImageMobile: "rockstargames-sites-gta-gen9e434acbd5507065824fc3af14eb8cc5c",
          slideContainer: "rockstargames-sites-gta-gen9d2fab85526434c79bbc12b6a6c8ffd70",
          contentContainer: "rockstargames-sites-gta-gen9f6613d575229be91073e6d484b77ea5e",
          landingSlide: "rockstargames-sites-gta-gen9d05cfa3ac7384704b98ad107655af47d",
          textContent: "rockstargames-sites-gta-gen9fc8660737bbdc8f86f8a4ea06659a33b",
          successSlide: "rockstargames-sites-gta-gen9d9450f3541952682d19fee00772d0f1c",
          unlinkedSlide: "rockstargames-sites-gta-gen9e562047f95446daace762342785ef53a",
          platformButtonContainer: "rockstargames-sites-gta-gen9e29a7fc3592430425d91c6819a1f7e0d",
          errorSlide: "rockstargames-sites-gta-gen9c041c8746fa1e4df112acc81cf6ab418",
          btnContainer: "rockstargames-sites-gta-gen9fa7395c3112347a96a25294116ae8fb0",
          topContent: "rockstargames-sites-gta-gen9fe62cddec5a5071937238008a67b4a23",
          bottomContent: "rockstargames-sites-gta-gen9c1530db66301c04293eabc59c455f37d",
          legal: "rockstargames-sites-gta-gen9b026b94c1160c03be6bb45b35bd171fd",
          faq: "rockstargames-sites-gta-gen9db46c4596b0b0dabb86776e069d7c6c2",
          faqLink: "rockstargames-sites-gta-gen9be9b8de47c9faf09181849be8ce32a7e",
          badge: "rockstargames-sites-gta-gen9b371557778af375ed631f8db217d4b95",
          hidden: "rockstargames-sites-gta-gen9c25fb97a6b90040828d50ba2bc626d2f",
          visible: "rockstargames-sites-gta-gen9c769fa70a9d7c7218a928525e1fc8aee",
          onScreen: "rockstargames-sites-gta-gen9ac869fcee40b7fecf48190c22b0c28c4",
          offScreen: "rockstargames-sites-gta-gen9bc58c9a458acdf7cedb71748dd2b97cd",
          alert: "rockstargames-sites-gta-gen9fa4b2575f1b0bf395ee8aeac6f921b9f",
          alertText: "rockstargames-sites-gta-gen9e5388eb6491a1a8a455f5da886d315a6",
          errorAlert: "rockstargames-sites-gta-gen9f2485866287b1e7bec17cd9956cc27c4",
          successAlert: "rockstargames-sites-gta-gen9f3e46d7eea7a5fdaa3c792ebefd21612",
          linkMore: "rockstargames-sites-gta-gen9f86c9d4e98312229416ab74287beb871",
          withIcon: "rockstargames-sites-gta-gen9c0502853211d6f38c2201df3324d2f4d",
          btnText: "rockstargames-sites-gta-gen9ea48f4033bbcce9a5f46c7ec3bf592cf",
          swiperWrap: "rockstargames-sites-gta-gen9b64badc5e0122206ecb30b961bf41ce0",
          swiperContainer: "rockstargames-sites-gta-gen9f019ed0ffdb9171e9e607aa2fc5fb907",
          swiperButton: "rockstargames-sites-gta-gen9a2afa4a87ebfd0a1c39fae80e25a3a1b",
          swiperBtnPrev: "rockstargames-sites-gta-gen9f89d35a4a9139e178742b2f663b5334b",
          swiperBtnNext: "rockstargames-sites-gta-gen9e3115ab3e897ab6bf9a95fc3e60aa034"
        };
      var S = n(46632);
      const {
        host: C,
        login: y,
        authHost: j,
        clientId: _
      } = (0, l.getScConfigForOrigin)(), T = "error", N = "landing", E = "success", I = "unlinked", R = e => {
        let {
          legalText: t
        } = e;
        return (0, S.jsx)("div", {
          dangerouslySetInnerHTML: {
            __html: t
          }
        })
      }, M = e => {
        let {
          giftId: t,
          location: n = "gtaplus_site",
          introScreen: M,
          errorScreen: L,
          unlinkedScreen: B,
          successScreen: W,
          jumpLinkId: P,
          legalText: A
        } = e;
        const H = (0, l.useLocale)(),
          $ = {
            errorScreen: {
              btnText: L?.errorButton || "",
              headline: L?.errorHeadline || ""
            },
            introScreen: {
              body: M?.introContent || "",
              btnText: {
                loggedIn: M?.btnTextLoggedIn || "",
                loggedOut: M?.btnTextLoggedOut || ""
              },
              headline: M?.introHeadline || "",
              image: {
                alt: M?.image?.alt || M?.introHeadline || "",
                sources: {
                  desktop: (0, x.useGetCdnSource)(M?.image?.sources?.en_us?.desktop) || null,
                  mobile: (0, x.useGetCdnSource)(M?.image?.sources?.en_us?.mobile) || null
                }
              },
              tag: M?.tag || ""
            },
            legalText: A,
            successScreen: {
              body: W?.successContent || "",
              headline: W?.successHeadline || ""
            },
            unlinkedScreen: {
              body: B?.unlinkedContent || "",
              btnText: B?.unlinkedButtonText || "",
              headline: B?.unlinkedHeadline || ""
            }
          },
          {
            CharacterCard: O
          } = g,
          [F] = (0, r.useSearchParams)(),
          {
            data: U,
            loggedIn: D
          } = (0, u.useRockstarUser)(),
          X = (0, d.useRockstarTokenPing)(),
          Y = `https://${C}.rockstargames.com/settings/linkedaccounts`,
          q = (0, l.toScLocaleString)(H),
          z = (0, p.useIntl)(),
          {
            track: V
          } = (0, u.useGtmTrack)(),
          {
            ref: G,
            inView: Z
          } = (0, i.useInView)({
            threshold: .6
          }),
          Q = 1280,
          J = (0, a.createRef)(),
          K = (0, a.createRef)(),
          ee = (0, a.createRef)(),
          te = (0, a.createRef)(),
          ne = (0, a.createRef)(),
          ae = (0, a.createRef)(),
          [re, se] = (0, a.useState)(),
          [ce, oe] = (0, a.useState)([]),
          [ie, le] = (0, a.useState)(!1),
          [de, ue] = (0, a.useState)(),
          [ge, fe] = (0, a.useState)("hidden"),
          [me, he] = (0, a.useState)("hidden"),
          [be, pe] = (0, a.useState)("hidden"),
          [ve, xe] = (0, a.useState)("hidden"),
          [ke, we] = (0, a.useState)(!1),
          Se = (0, d.useRockstarToken)(),
          [Ce, ye] = (0, a.useState)(N),
          [je, _e] = (0, a.useState)(0),
          [Te, Ne] = (0, a.useState)(0),
          [Ee, Ie] = (0, a.useState)(0),
          [Re, Me] = (0, a.useState)(0),
          [Le, Be] = (0, a.useState)(0),
          [We, Pe] = (0, a.useState)(!1),
          [Ae, He] = (0, a.useState)(!1),
          $e = (0, a.useRef)(null),
          Oe = (0, a.useRef)(null),
          [Fe, Ue] = (0, a.useState)({}),
          [De, Xe] = (0, a.useState)(),
          [Ye, qe] = (0, a.useState)(!1),
          [ze, Ve] = (0, a.useState)(!0),
          [Ge, Ze] = (0, a.useState)($.introScreen.image.sources.mobile || k),
          Qe = `${document.location.pathname}${document.location.search}#${P}`,
          Je = (0, l.usePrevious)(de),
          Ke = (0, l.usePrevious)(D),
          et = () => {
            J.current && Ne(J?.current?.scrollHeight), K.current && Ie(K?.current?.scrollHeight), ee.current && Me(ee?.current?.scrollHeight), te.current && Be(te?.current?.scrollHeight)
          },
          tt = (e, t) => {
            e === N && (ye(N), t && _e(Te), he("onScreen"), fe("hidden"), xe("hidden"), pe("hidden")), e === E && (ye(E), t && _e(Ee), he("offScreen"), fe("visible"), setTimeout((() => {
              he("hidden")
            }), 300), setTimeout((() => {
              fe("onScreen")
            }), 100)), e === T && (ye(T), t && _e(Re), he("offScreen"), xe("visible"), setTimeout((() => {
              he("hidden")
            }), 300), setTimeout((() => {
              xe("onScreen")
            }), 100)), e === I && (ye(I), t && _e(Le), he("offScreen"), pe("visible"), setTimeout((() => {
              he("hidden")
            }), 300), setTimeout((() => {
              pe("onScreen")
            }), 100))
          },
          nt = e => `https://${j}.rockstargames.com/tpa/${e}/link/?cid=${_}&lang=${q}&returnUrl=${encodeURIComponent(Qe)}&accessToken=${Se}`;
        return (0, a.useEffect)((() => {
          const e = () => {
              window.innerWidth > 2560 && "newswire" !== n ? Ze($.introScreen.image.sources.mobile || k) : Ze($.introScreen.image.sources.desktop || k)
            },
            t = () => {
              et(), window.innerWidth <= Q && !ie && (le(!0), tt(Ce, !0)), window.innerWidth > Q && ie && le(!1), e()
            };
          return le(window.innerWidth <= Q), e(), window.addEventListener("resize", t), () => {
            window.removeEventListener("resize", t)
          }
        }), [Ce, ie, J, te, ee, K]), (0, a.useEffect)((() => {
          Ce === E && je !== Ee ? _e(Ee) : Ce === T && je !== Re ? _e(Re) : Ce === N && je !== Te ? _e(Te) : Ce === I && je !== Le && _e(Le)
        }), [Re, Ee, je, Le, Te]), (0, a.useEffect)((() => {
          et(), We && Ce === E && _e(K?.current?.scrollHeight)
        }), [J, te, ee, K]), (0, a.useEffect)((() => {
          const e = U?.characters?.gtao;
          oe(e || [])
        }), [U]), (0, a.useEffect)((() => {
          "boolean" != typeof Je && "boolean" != typeof Ke || de && D && (async () => {
            const {
              result: e
            } = await (0, l.coreScApiFetch)("marketing/engagement/claim/exists", {
              pingBearer: X,
              query: {
                giftUId: t
              }
            });
            se(e), ue(!1)
          })()
        }), [de, D]), (0, a.useEffect)((() => {
          "boolean" == typeof D ? D ? ue(!0) : (ue(!1), he("onScreen")) : ue(!0)
        }), [D]), (0, a.useEffect)((() => {
          re ? (Pe(!0), tt(E, !0)) : "boolean" != typeof re || re || tt(N, !0)
        }), [re]), (0, a.useEffect)((() => {
          Z && !ke && (V({
            element_placement: "WOC",
            event: "page_section_impression"
          }), we(!0))
        }), [Z]), (0, a.useEffect)((() => {
          "onScreen" === ge && V({
            element_placement: "WOC",
            event: "alert_update",
            o_id: t,
            text: "Almost there!"
          })
        }), [ge]), (0, a.useEffect)((() => {
          "onScreen" === be && V({
            element_placement: "WOC",
            event: "alert_error",
            o_id: t,
            text: "No Qualifying Character Found"
          })
        }), [be]), (0, a.useEffect)((() => {
          "onScreen" === ve && V({
            element_placement: "event_label",
            event: "alert_error",
            o_id: t,
            text: "Something went wrong on our end. Please try again in a few minutes."
          })
        }), [ve]), (0, a.useEffect)((() => {
          ae?.current && He(ae.current.scrollWidth >= ae.current.offsetWidth)
        }), [ae]), (0, a.useEffect)((() => {
          Xe({
            nextEl: $e.current,
            prevEl: Oe.current
          })
        }), [Oe, $e]), (0, S.jsx)(S.Fragment, {
          children: (0, S.jsx)("div", {
            className: w.interestTrackerWrapper,
            children: (0, S.jsxs)(o.motion.div, {
              className: [w.interestTracker, de && w.loader].join(" "),
              initial: {
                opacity: 0
              },
              whileInView: {
                opacity: 1
              },
              viewport: {
                margin: "-20%",
                once: !0
              },
              transition: {
                duration: .4,
                ease: "easeIn"
              },
              "data-context": "interestTracker",
              ref: G,
              id: P || "",
              children: [(0, S.jsx)("div", {
                className: w.moduleImage,
                style: {
                  "--engagement-image": `url(${Ge})`
                }
              }), (0, S.jsx)("div", {
                className: [w.slideContainer, de ? w.loader : ""].join(" "),
                ref: ne,
                "data-dev-mode": "disabled",
                style: {
                  "--engagement-height": 0 === je ? "200%" : `${je}px`,
                  height: 0 !== je && ie ? `${je}px` : "auto"
                },
                children: de ? (0, S.jsx)(b.A, {
                  type: "SPINNING"
                }) : (0, S.jsxs)(S.Fragment, {
                  children: [(0, S.jsxs)("div", {
                    className: [w.contentContainer, w[me], w.landingSlide].join(" "),
                    ref: J,
                    children: [(0, S.jsx)("img", {
                      src: $.introScreen.image.sources.mobile || k,
                      className: w.moduleImageMobile,
                      alt: $.introScreen.image.alt
                    }), (0, S.jsxs)("div", {
                      className: w.topContent,
                      children: [(0, S.jsx)("div", {
                        className: w.textContent,
                        children: (0, S.jsxs)("div", {
                          className: w.alert,
                          children: [(0, S.jsx)("div", {
                            className: w.badge,
                            children: $.introScreen.tag
                          }), (0, S.jsxs)("div", {
                            className: w.alertText,
                            children: [(0, S.jsx)("h2", {
                              children: $.introScreen.headline
                            }), (0, S.jsx)("div", {
                              dangerouslySetInnerHTML: {
                                __html: $.introScreen.body
                              }
                            })]
                          })]
                        })
                      }), (0, S.jsx)("div", {
                        className: w.btnContainer,
                        children: (0, S.jsx)(h.A, {
                          text: D ? $.introScreen.btnText.loggedIn : $.introScreen.btnText.loggedOut,
                          onClick: D ? async () => {
                            V({
                              element_placement: "WOC",
                              event: "cta_claim",
                              o_id: t,
                              text: "claim now"
                            });
                            const e = {
                              giftUId: t,
                              location: n,
                              utmCampaign: F.get("utm_campaign"),
                              utmContent: F.get("utm_content"),
                              utmMedium: F.get("utm_medium"),
                              utmSource: F.get("utm_source")
                            };
                            if (ce.length > 0) {
                              const {
                                status: t
                              } = await (0, l.coreScApiFetch)("marketing/engagement/claim/create", {
                                fetchOptions: {
                                  method: "POST"
                                },
                                pingBearer: X,
                                query: e
                              }) ?? [];
                              tt(t ? E : T, !1)
                            } else tt(I, !1)
                          } : () => {
                            const e = `${y}?returnUrl=${encodeURIComponent(Qe)}&lang=${q}`;
                            V({
                              element_placement: "WOC",
                              event: "cta_login",
                              link_url: e,
                              text: "claim now"
                            }), window.location.href = e
                          }
                        })
                      })]
                    }), (0, S.jsx)("div", {
                      className: w.bottomContent,
                      children: (0, S.jsx)("div", {
                        className: w.legal,
                        children: (0, S.jsx)(R, {
                          legalText: $.legalText
                        })
                      })
                    })]
                  }), (0, S.jsxs)("div", {
                    className: [w.contentContainer, w[ge], w.successSlide].join(" "),
                    "data-type": "long",
                    ref: K,
                    children: [(0, S.jsxs)("div", {
                      className: w.topContent,
                      children: [(0, S.jsxs)("div", {
                        className: w.alert,
                        children: [(0, S.jsx)("div", {
                          className: w.successAlert
                        }), (0, S.jsxs)("div", {
                          className: w.alertText,
                          children: [(0, S.jsx)("h3", {
                            children: $.successScreen.headline
                          }), (0, S.jsx)("div", {
                            dangerouslySetInnerHTML: {
                              __html: $.successScreen.body
                            }
                          })]
                        })]
                      }), (0, S.jsxs)("div", {
                        className: w.swiperWrap,
                        children: [(0, S.jsx)("div", {
                          className: w.swiperContainer,
                          ref: ae,
                          "data-hasoverflow": Ae,
                          children: (0, S.jsxs)(s.RC, {
                            loop: !1,
                            grabCursor: Ae,
                            slidesPerView: "auto",
                            speed: 700,
                            navigation: De,
                            modules: [c.Vx],
                            onInit: e => {
                              Ue(e)
                            },
                            children: [ce.map((e => (0, S.jsx)(s.qr, {
                              children: (0, a.createElement)(O, {
                                characterData: e,
                                key: e.mugshotUrl
                              })
                            }, e.mugshotUrl))), (0, S.jsx)(s.qr, {
                              children: (0, S.jsx)(f.A, {
                                className: [w.linkMore, ce.length > 0 ? w.withIcon : ""].join(" "),
                                to: Y,
                                onClick: () => {
                                  V({
                                    element_placement: "WOC",
                                    event: "cta_link_account",
                                    link_url: Y,
                                    text: v.engagement.engagement_link_account.defaultMessage
                                  })
                                },
                                children: (0, S.jsx)("div", {
                                  className: w.btnText,
                                  children: (0, S.jsx)(p.FormattedMessage, {
                                    ...v.engagement.engagement_link_account
                                  })
                                })
                              })
                            }, "linkMore")]
                          })
                        }), (0, S.jsx)("button", {
                          className: w.swiperBtnPrev,
                          "aria-label": "Previous Character",
                          type: "button",
                          ref: Oe,
                          onClick: () => {
                            Fe?.slidePrev(), qe(Fe?.isEnd), Ve(Fe?.isBeginning)
                          },
                          disabled: ze,
                          "data-hidden": !Ae
                        }), (0, S.jsx)("button", {
                          className: w.swiperBtnNext,
                          "aria-label": "Next Character",
                          type: "button",
                          ref: $e,
                          onClick: () => {
                            Fe?.slideNext(), qe(Fe?.isEnd), Ve(Fe?.isBeginning)
                          },
                          disabled: Ye,
                          "data-hidden": !Ae
                        })]
                      })]
                    }), (0, S.jsx)("div", {
                      className: w.legal,
                      children: (0, S.jsx)(R, {
                        legalText: $.legalText
                      })
                    })]
                  }), (0, S.jsxs)("div", {
                    className: [w.contentContainer, w[be], w.unlinkedSlide, w.textContent].join(" "),
                    ref: te,
                    children: [(0, S.jsx)("div", {
                      className: w.textContent,
                      children: (0, S.jsxs)("div", {
                        className: w.platformButtonContainer,
                        children: [(0, S.jsx)("div", {
                          className: w.errorAlert
                        }), (0, S.jsx)("h3", {
                          children: $.unlinkedScreen.headline
                        }), (0, S.jsx)(m.A, {
                          buttonText: z.formatMessage(v.engagement.engagement_link_console_account),
                          platformsAndLinks: [{
                            href: nt("np"),
                            key: "ps",
                            platform: "ps",
                            translated: !0
                          }, {
                            href: nt("xbox"),
                            key: "xbox",
                            platform: "xbox",
                            translated: !0
                          }],
                          trackingType: "link_account",
                          trackingParent: "WOC",
                          target: "_self",
                          trackingOId: t,
                          children: (0, S.jsx)("div", {
                            className: w.alert,
                            children: (0, S.jsx)("div", {
                              className: w.alertText,
                              children: (0, S.jsx)("div", {
                                dangerouslySetInnerHTML: {
                                  __html: $.unlinkedScreen.body
                                }
                              })
                            })
                          })
                        })]
                      })
                    }), (0, S.jsx)("div", {
                      className: w.legal,
                      children: (0, S.jsx)(R, {
                        legalText: $.legalText
                      })
                    })]
                  }), (0, S.jsxs)("div", {
                    className: [w.contentContainer, w[ve], w.errorSlide, w.textContent].join(" "),
                    ref: ee,
                    children: [(0, S.jsxs)("div", {
                      className: w.textContent,
                      children: [(0, S.jsxs)("div", {
                        className: w.alert,
                        children: [(0, S.jsx)("div", {
                          className: w.errorAlert
                        }), (0, S.jsx)("div", {
                          className: w.alertText,
                          children: (0, S.jsx)("h3", {
                            children: $.errorScreen.headline
                          })
                        })]
                      }), (0, S.jsx)(h.A, {
                        text: $.errorScreen.btnText,
                        onClick: () => window.location.reload()
                      })]
                    }), (0, S.jsx)("div", {
                      className: w.legal,
                      children: (0, S.jsx)(R, {
                        legalText: $.legalText
                      })
                    })]
                  })]
                })
              })]
            })
          })
        })
      }
    }
  }
]);