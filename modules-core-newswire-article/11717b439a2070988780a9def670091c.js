! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "870e50c9-cb78-4646-be07-16196af55ab4", e._sentryDebugIdIdentifier = "sentry-dbid-870e50c9-cb78-4646-be07-16196af55ab4")
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
  [884, 312, 240], {
    31580: (e, a, t) => {
      var s = t(36056).Symbol;
      e.exports = s
    },
    95992: (e, a, t) => {
      var s = t(31580),
        i = t(78584),
        r = t(49176),
        n = s ? s.toStringTag : void 0;
      e.exports = function(e) {
        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : n && n in Object(e) ? i(e) : r(e)
      }
    },
    96096: (e, a, t) => {
      var s = t(57520),
        i = /^\s+/;
      e.exports = function(e) {
        return e ? e.slice(0, s(e) + 1).replace(i, "") : e
      }
    },
    81044: (e, a, t) => {
      var s = "object" == typeof t.g && t.g && t.g.Object === Object && t.g;
      e.exports = s
    },
    78584: (e, a, t) => {
      var s = t(31580),
        i = Object.prototype,
        r = i.hasOwnProperty,
        n = i.toString,
        o = s ? s.toStringTag : void 0;
      e.exports = function(e) {
        var a = r.call(e, o),
          t = e[o];
        try {
          e[o] = void 0;
          var s = !0
        } catch (e) {}
        var i = n.call(e);
        return s && (a ? e[o] = t : delete e[o]), i
      }
    },
    49176: e => {
      var a = Object.prototype.toString;
      e.exports = function(e) {
        return a.call(e)
      }
    },
    36056: (e, a, t) => {
      var s = t(81044),
        i = "object" == typeof self && self && self.Object === Object && self,
        r = s || i || Function("return this")();
      e.exports = r
    },
    57520: e => {
      var a = /\s/;
      e.exports = function(e) {
        for (var t = e.length; t-- && a.test(e.charAt(t)););
        return t
      }
    },
    69760: (e, a, t) => {
      var s = t(89048),
        i = t(12721),
        r = t(80088),
        n = Math.max,
        o = Math.min;
      e.exports = function(e, a, t) {
        var c, d, l, m, u, f, g = 0,
          p = !1,
          b = !1,
          h = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");

        function w(a) {
          var t = c,
            s = d;
          return c = d = void 0, g = a, m = e.apply(s, t)
        }

        function v(e) {
          var t = e - f;
          return void 0 === f || t >= a || t < 0 || b && e - g >= l
        }

        function k() {
          var e = i();
          if (v(e)) return x(e);
          u = setTimeout(k, function(e) {
            var t = a - (e - f);
            return b ? o(t, l - (e - g)) : t
          }(e))
        }

        function x(e) {
          return u = void 0, h && c ? w(e) : (c = d = void 0, m)
        }

        function y() {
          var e = i(),
            t = v(e);
          if (c = arguments, d = this, f = e, t) {
            if (void 0 === u) return function(e) {
              return g = e, u = setTimeout(k, a), p ? w(e) : m
            }(f);
            if (b) return clearTimeout(u), u = setTimeout(k, a), w(f)
          }
          return void 0 === u && (u = setTimeout(k, a)), m
        }
        return a = r(a) || 0, s(t) && (p = !!t.leading, l = (b = "maxWait" in t) ? n(r(t.maxWait) || 0, a) : l, h = "trailing" in t ? !!t.trailing : h), y.cancel = function() {
          void 0 !== u && clearTimeout(u), g = 0, c = f = d = u = void 0
        }, y.flush = function() {
          return void 0 === u ? m : x(i())
        }, y
      }
    },
    89048: e => {
      e.exports = function(e) {
        var a = typeof e;
        return null != e && ("object" == a || "function" == a)
      }
    },
    72316: e => {
      e.exports = function(e) {
        return null != e && "object" == typeof e
      }
    },
    99464: (e, a, t) => {
      var s = t(95992),
        i = t(72316);
      e.exports = function(e) {
        return "symbol" == typeof e || i(e) && "[object Symbol]" == s(e)
      }
    },
    12721: (e, a, t) => {
      var s = t(36056);
      e.exports = function() {
        return s.Date.now()
      }
    },
    80088: (e, a, t) => {
      var s = t(96096),
        i = t(89048),
        r = t(99464),
        n = /^[-+]0x[0-9a-f]+$/i,
        o = /^0b[01]+$/i,
        c = /^0o[0-7]+$/i,
        d = parseInt;
      e.exports = function(e) {
        if ("number" == typeof e) return e;
        if (r(e)) return NaN;
        if (i(e)) {
          var a = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = i(a) ? a + "" : a
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = s(e);
        var t = o.test(e);
        return t || c.test(e) ? d(e.slice(2), t ? 2 : 8) : n.test(e) ? NaN : +e
      }
    },
    99576: (e, a, t) => {
      "use strict";
      var s = t(51664),
        i = Symbol.for("react.element"),
        r = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        o = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        c = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function d(e, a, t) {
        var s, r = {},
          d = null,
          l = null;
        for (s in void 0 !== t && (d = "" + t), void 0 !== a.key && (d = "" + a.key), void 0 !== a.ref && (l = a.ref), a) n.call(a, s) && !c.hasOwnProperty(s) && (r[s] = a[s]);
        if (e && e.defaultProps)
          for (s in a = e.defaultProps) void 0 === r[s] && (r[s] = a[s]);
        return {
          $$typeof: i,
          type: e,
          key: d,
          ref: l,
          props: r,
          _owner: o.current
        }
      }
      a.Fragment = r, a.jsx = d, a.jsxs = d
    },
    95240: (e, a, t) => {
      "use strict";
      e.exports = t(99576)
    },
    21760: (e, a, t) => {
      "use strict";
      t.d(a, {
        qQ: () => se,
        WU: () => Ne
      });
      var s = t(51664),
        i = t(73660),
        r = t.n(i),
        n = t(57013),
        o = t(1740),
        c = t(9860),
        d = t(45792);
      var l = t(95240);
      const m = e => {
          let {
            hasTag: a = !1,
            tag: t = null,
            tagStyle: s = null,
            badges: i = []
          } = e;
          return a && t ? (0, l.jsx)("div", {
            className: "rockstargames-modules-core-newswire-articlebc50cd13f1f148dd0772d2a6eee8a913",
            "data-tag-style": s,
            children: t
          }) : a && i && i?.length > 0 ? (0, l.jsx)("div", {
            className: "rockstargames-modules-core-newswire-articled4a1a1e4fc4c16138d3c879bc1864227",
            children: i.map((e => (0, l.jsx)(c.Badge, {
              ...e
            }, e?.text)))
          }) : null
        },
        u = {
          textOverlay: "rockstargames-modules-core-newswire-articlea9e47a446a239de8e5bd56e77308ddc8",
          content: "rockstargames-modules-core-newswire-articled35747e86fd9b103a5160d7219f01856"
        },
        {
          LiteMotion: f,
          Animations: g
        } = c.framer,
        {
          variants: p,
          transitions: b
        } = g,
        h = e => {
          let {
            title: a,
            hasTag: t,
            tag: s,
            hasDescription: i,
            description: r,
            fadesOut: n = !1,
            badges: o
          } = e;
          return (0, l.jsx)(f, {
            initial: p.fade.out.initial,
            animate: {
              opacity: n ? 0 : 1
            },
            transition: b.fade,
            className: u.textOverlay,
            children: (0, l.jsxs)("div", {
              className: u.content,
              children: [(0, l.jsx)(m, {
                hasTag: t,
                tag: s,
                badges: o?.filter((e => e?.isPrimary))
              }), (0, l.jsx)("h3", {
                children: a
              }), i && r && (0, l.jsx)("div", {
                className: u.description,
                children: r
              })]
            })
          })
        },
        w = e => {
          let {
            title: a,
            showTitle: t = !0,
            showBackground: i = !0,
            tag: r,
            tagStyle: n,
            discountPrice: o,
            originalPrice: c,
            setPricingContainerHeight: d = null
          } = e;
          const m = (0, s.createRef)();
          return (0, s.useEffect)((() => {
            const e = () => {
              m.current && null !== d && d(m.current.clientHeight)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), [m]), (0, l.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articlef721d7192d3e29e64567a729fd8d5985",
            ref: m,
            "data-show-background": i,
            children: [t && (0, l.jsx)("span", {
              className: "rockstargames-modules-core-newswire-articlef390fe2c9338785ce412483a1bac624c",
              children: a
            }), (0, l.jsxs)("div", {
              className: "rockstargames-modules-core-newswire-articlefc5ca7a7cb4da6745e4dbef89b12bfe8",
              children: [(0, l.jsx)("span", {
                className: "rockstargames-modules-core-newswire-articleb7ba435d2cec78951bdb0b812b098b72",
                "data-tag-style": n || "free",
                children: r
              }), (0, l.jsx)("span", {
                className: "rockstargames-modules-core-newswire-articled8c7408e6335e53326bc70a1a065f81b",
                children: o
              }), (0, l.jsx)("span", {
                className: "rockstargames-modules-core-newswire-articlea3632910b63514f6b49539fe45bcccb6",
                children: c
              })]
            })]
          })
        };
      var v = t(17104),
        k = t(65388),
        x = t(39336),
        y = t(96201),
        j = t(23124),
        N = t(91232),
        S = t(56644);
      const T = {
          ps5: x,
          ps4: k,
          ps: v,
          xboxone: j,
          xbox: N,
          xboxseriesxs: y,
          pc: S,
          googleplay: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2ef574ea2aa502447d579267ff37e251.svg",
          applestore: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c6affc8b37ec4c75486ab6d12b2de395.svg"
        },
        _ = e => {
          let {
            title: a,
            showTitle: t = !0,
            showBackground: i = !0,
            platformOptions: r,
            setPricingContainerHeight: n = (() => {})
          } = e;
          const o = (0, s.createRef)();
          return (0, s.useEffect)((() => {
            const e = () => {
              o.current && null !== n && n(o.current.clientHeight)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), [o]), (0, l.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articlee754e3afc303a114f9e28e09c5519a30",
            ref: o,
            "data-show-background": i,
            children: [t && (0, l.jsx)("span", {
              className: "rockstargames-modules-core-newswire-articlefd98e3d7af2a583d4338d802666901a5",
              children: a
            }), r?.platformsAndLinks && (0, l.jsxs)("div", {
              className: "rockstargames-modules-core-newswire-articlecbde4b9406c59131d6d4c8d9b2291a84",
              children: [(0, l.jsx)(m, {
                hasTag: r?._memoq?.platformTag,
                tag: r?._memoq?.platformTag,
                tagStyle: r?._memoq?.platformTagStyle
              }), (0, l.jsx)("div", {
                className: "rockstargames-modules-core-newswire-articleb7de0e1798d1a020191fbe44b67f34d2",
                children: r.platformsAndLinks.map((e => {
                  let {
                    platform: a,
                    buttonText: t
                  } = e;
                  return (0, l.jsx)("img", {
                    className: "rockstargames-modules-core-newswire-articleaa5f852c8932dcf689a97496d437f13b",
                    alt: t,
                    src: T[a]
                  }, a)
                }))
              })]
            })]
          })
        },
        P = e => {
          let {
            textOverlayProps: a,
            title: t,
            size: i,
            expandedView: r = !1,
            children: n,
            pricingOptions: o,
            setPricingContainerHeight: c,
            isCoverCard: d = !1,
            platformOptions: m
          } = e;
          const [u] = (e => {
            let {
              hasTextOverlay: a,
              tag: t,
              collapsedHasTag: i,
              description: r,
              collapsedHasDescription: n,
              size: o,
              title: c,
              expandedView: d,
              badges: m
            } = e;
            const [u, f] = (0, s.useState)(null), g = (0, s.useMemo)((() => {
              if (!a) return null;
              const e = "sm" !== o && n;
              return (0, l.jsx)(h, {
                title: c,
                hasTag: i,
                tag: t,
                hasDescription: e,
                description: r,
                fadesOut: d,
                badges: m
              })
            }), [a, t, i, r, n, o, c, d, m]);
            return (0, s.useEffect)((() => {
              f(g)
            }), [g]), [u, f]
          })({
            ...a,
            size: i,
            title: t,
            expandedView: r
          }), f = void 0 !== o?.hasPricingOptions || null !== m;
          return (0, l.jsxs)("header", {
            className: "rockstargames-modules-core-newswire-articlec525342927ce11e37cc24e653e0ffc95",
            "data-is-covercard": d,
            "data-expanded-view": r,
            children: [s.Children.map(n, (e => (0, s.cloneElement)(e, {
              title: t,
              size: i,
              expandedView: r
            }))), u, f && (0, l.jsxs)(l.Fragment, {
              children: [!0 === m?.hasPlatformOptions && (0, l.jsx)(_, {
                title: t,
                platformOptions: m,
                pricingOptions: o,
                setPricingContainerHeight: c
              }), !0 === o?.hasPricingOptions && (0, l.jsx)(w, {
                title: t,
                tag: o?._memoq?.tag,
                tagStyle: o?._memoq?.tagStyle || "free",
                discountPrice: o?._memoq?.discountPrice,
                originalPrice: o?._memoq?.originalPrice,
                setPricingContainerHeight: c
              })]
            })]
          })
        },
        {
          LiteMotion: C,
          Animations: I
        } = c.framer,
        {
          transitions: L
        } = I,
        E = e => {
          let {
            components: a,
            payload: t,
            prod: i,
            size: u,
            title: f,
            initial: g = "initial",
            animate: p = "animate",
            variants: b,
            type: h = null,
            context: v = null,
            textOverlayProps: k,
            className: x,
            children: y,
            theme: j = "none",
            cardIds: N,
            id: S,
            pricingOptions: T,
            pricingContainerHeight: _,
            isCoverCard: I,
            platformOptions: E,
            isProductCard: M = !1
          } = e;
          const O = (0, s.useRef)(),
            z = (0, s.useRef)(),
            {
              tag: D,
              expandedHasTag: $,
              badges: F
            } = k;
          r().set(t, "meta.prod", i);
          const [, V] = (0, n.useSearchParams)(), [B, H] = (0, s.useState)(null), R = y?.props?.images.length > 0;
          let G = (0, l.jsx)("h1", {
            children: f
          });
          return I && (G = null), (0, s.useEffect)((() => {
            null !== B && B < N?.length && B > -1 && V({
              info: N[B]
            })
          }), [B, N]), (0, s.useEffect)((() => {
            N?.forEach(((e, a) => {
              e === S && H(a)
            }))
          }), [N, S]), (0, s.useEffect)((() => {
            const e = () => {
              O.current && O.current.scrollTop > 0 && window.innerWidth >= window.innerHeight && (O.current.scrollTop = 0)
            };
            return window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          }), []), (0, l.jsx)(d.DataLayerProvider, {
            card_id: S,
            card_name: f?.toLowerCase(),
            children: (0, l.jsx)(c.ScrollTracker, {
              threshold: [25, 50, 75, 90, 100],
              trackRef: "long" === h ? O : z,
              children: (0, l.jsxs)(C, {
                ref: O,
                initial: g,
                animate: p,
                variants: b.expanded,
                transition: L.cardOpen,
                className: (0, o.classList)("rockstargames-modules-core-newswire-articledcb84dcfd34616fb0089133acf0c4669", x),
                "data-type": h,
                "data-size": u,
                "data-product": M,
                "data-covercard": I || !1,
                "data-context": v,
                style: {
                  "--product-card-pricing-info-height": `${_||0}px`
                },
                children: [R && (0, l.jsx)(P, {
                  size: u,
                  title: f,
                  textOverlayProps: k,
                  expandedView: !0,
                  pricingOptions: T,
                  platformOptions: E,
                  isCoverCard: I,
                  children: y
                }), (0, l.jsxs)(C, {
                  ref: z,
                  className: "rockstargames-modules-core-newswire-articleeaf357a8d0bae1199142949cbf24e7b9",
                  variants: b.expandedContents,
                  transition: L.afterCardOpen,
                  "data-theme": j,
                  children: [(0, l.jsxs)("div", {
                    className: "rockstargames-modules-core-newswire-articlefc0e079f7c184b912d5a46b037d01b0d",
                    children: [(0, l.jsx)(m, {
                      hasTag: $,
                      tag: D,
                      badges: F
                    }), G, M && (0, l.jsxs)(l.Fragment, {
                      children: [!0 === E?.hasPlatformOptions && (0, l.jsx)("div", {
                        className: "rockstargames-modules-core-newswire-articleb630c7c1f59f91f2ac304af525b6d081",
                        children: (0, l.jsx)(m, {
                          hasTag: E?.hasPlatformOptions,
                          tag: E?._memoq?.platformTag,
                          tagStyle: E?._memoq?.platformTagStyle
                        })
                      }), !0 === T?.hasPricingOptions && (0, l.jsx)(w, {
                        title: f,
                        showTitle: !1,
                        showBackground: !1,
                        tag: T?._memoq?.tag,
                        tagStyle: T?.tagStyle || "free",
                        discountPrice: T?._memoq?.discountPrice,
                        originalPrice: T?._memoq?.originalPrice
                      })]
                    })]
                  }), (0, l.jsx)(o.TinaParser, {
                    components: a,
                    tina: {
                      payload: t
                    }
                  })]
                })]
              })
            })
          })
        };
      var M = t(45364),
        O = t.n(M),
        z = t(42836);
      const D = "modal-context",
        $ = [null, () => null],
        F = window?.[D] ?? (window[D] = (0, s.createContext)($)),
        V = e => {
          let {
            id: a,
            position: t,
            title: i,
            size: r = "md",
            sectionTitle: o = "",
            expandedType: c = null,
            modalProps: d = {
              content: null,
              className: "",
              contentClassName: ""
            },
            className: m,
            children: u,
            isProductCard: f,
            cardIds: g = null,
            theme: p = "none",
            isCoverCard: b
          } = e;
          const [h, w] = (0, n.useSearchParams)(), v = (0, s.useRef)(null), [, k] = (0, s.useContext)(F), {
            track: x
          } = (0, z.useGtmTrack)(), [y, j] = (0, s.useState)(!1), N = () => {
            j(!1), k(null), w({}), x({
              event: "trackPageview"
            })
          }, S = () => {
            if (!d?.content || !v.current || !c || "linkout" === c) return;
            const e = v.current,
              s = window.getComputedStyle(e),
              n = parseInt(s.getPropertyValue("width"), 10),
              o = parseInt(s.getPropertyValue("height"), 10),
              l = e.getBoundingClientRect(),
              {
                content: m,
                className: u,
                contentClassName: f
              } = d,
              b = "fob" === r ? "fob" : "default";
            k({
              content: m,
              onClose: N,
              rect: l,
              width: n,
              height: o,
              className: u,
              contentClassName: f,
              fadeIn: !1,
              cardIds: g,
              theme: p,
              gtm: {
                event_label: i?.toLowerCase(),
                card_id: a,
                card_name: i?.toLowerCase(),
                position: t
              },
              aspectRatio: b,
              cardDimensions: {
                size: r,
                type: c
              }
            }), x({
              event: "trackPageview",
              link_url: window.location.href,
              card_id: a,
              card_name: i?.toLowerCase(),
              position: t
            })
          }, T = e => {
            b && "button" !== e.target.type || "linkout" !== c && (e.preventDefault(), e.stopPropagation(), a ? w({
              info: a
            }) : S(), x({
              event: "card_click",
              event_category: "card",
              event_action: "click",
              event_label: o?.toLowerCase(),
              position: t,
              card_id: a,
              card_name: i?.toLowerCase(),
              link_url: window.location.href
            }))
          };
          return (0, s.useEffect)((() => {
            y && S()
          }), [y]), (0, s.useEffect)((() => {
            j(h.get("info") === a)
          }), [h.get("info"), a]), (0, l.jsx)("div", {
            ref: v,
            onClick: T,
            onKeyUp: e => {
              (e => {
                "Enter" === e.code && T(e)
              })(e)
            },
            className: m,
            "data-size": r,
            "data-type": c,
            "data-product": f,
            role: "button",
            tabIndex: "linkout" !== c ? 0 : -1,
            "aria-label": i,
            children: u
          })
        },
        B = {
          pillBtn: "rockstargames-modules-core-newswire-articleebdcdd73cdde7ce5626490066de01474",
          selected: "rockstargames-modules-core-newswire-articled058244e6f29505e3c05558039370b54",
          card: "rockstargames-modules-core-newswire-articlec2685d1ff8cc088bfef4c336b1a9f8ae",
          content: "rockstargames-modules-core-newswire-articlee268650dd5a86c01be62eeb552b4e54b",
          expandedContent: "rockstargames-modules-core-newswire-articled19c433e20935d6b1eebff53baa04bb1",
          text: "rockstargames-modules-core-newswire-articlebeee7d7b941675acb2b6b9bf5caf4f33",
          imageHolder: "rockstargames-modules-core-newswire-articlec823ac57eab14be16dd87e168e610d4f",
          coverCardWrapper: "rockstargames-modules-core-newswire-articleef72671ab95bb9290b80637cb3073d29"
        },
        H = e => {
          let {
            payload: a,
            prod: t,
            images: i,
            size: r,
            title: n,
            initial: d,
            animate: m,
            variants: u,
            id: f,
            position: g,
            sectionTitle: p,
            expandedType: b,
            context: h,
            children: w,
            expandedCardContents: v,
            textOverlayProps: k = {
              hasTextOverlay: !1,
              tag: "",
              collapsedHasTag: !1,
              expandedHasTag: !1,
              description: "",
              collapsedHasDescription: !1
            },
            deckProps: x = {},
            modalProps: y = [],
            theme: j,
            cardIds: N,
            pricingOptions: S,
            platformOptions: T = null,
            pricingContainerHeight: _,
            isCoverCard: P = !1,
            isProductCard: C = !1
          } = e;
          const I = (0, o.useTinaComponents)(),
            L = (0, s.useMemo)((() => ({
              ...I,
              HTMLElement: c.HTMLElement,
              ImageWithBadge: c.ImageWithBadge,
              Carousel: c.Carousel,
              GroupOfItems: O()
            })), [I]),
            M = (0, s.useMemo)((() => (0, l.jsx)(E, {
              type: b,
              components: L,
              payload: a,
              prod: t,
              images: i,
              size: r,
              title: n,
              context: h,
              textOverlayProps: k,
              initial: d,
              animate: m,
              variants: u,
              theme: j,
              cardIds: N,
              pricingOptions: S,
              id: f,
              pricingContainerHeight: _,
              isCoverCard: P,
              platformOptions: T,
              isProductCard: C,
              children: v
            })), [b, i, t, r, n, k, v, d, m, u, L, a, C]),
            z = [B.card, P ? B.coverCardWrapper : ""].join(" ");
          return (0, l.jsx)(V, {
            id: f,
            position: g,
            sectionTitle: p,
            title: n,
            size: r,
            expandedType: b,
            images: i,
            deckProps: x,
            modalProps: {
              content: M,
              ...y
            },
            className: z,
            isProductCard: C,
            cardIds: N,
            theme: j,
            isCoverCard: P,
            children: w
          })
        },
        R = {
          clrCollapsedCard: "rockstargames-modules-core-newswire-articlefd8a3e4025f5bdb8b4d2a3f4f4fe2134",
          cardContainer: "rockstargames-modules-core-newswire-articlee0f2a97409fc0da53eb41dd7eda2cc1d",
          cardInfo: "rockstargames-modules-core-newswire-articlef36f44f341ab5fcc53f1a40bbd5d204b",
          subtitle: "rockstargames-modules-core-newswire-articleea8380a1bfb197c92d4a5cf18dd7c0d7",
          price: "rockstargames-modules-core-newswire-articlea2f472fdf58c77bb93b0386c70af2589",
          newBadge: "rockstargames-modules-core-newswire-articlef22545e267c507119956ec5075637b95",
          outOfStockBadge: "rockstargames-modules-core-newswire-articlea2fea067473934681dd933a67f0f98bf",
          saleBadge: "rockstargames-modules-core-newswire-articlef494e92b89019387b6e8f10550637438",
          slashedPrice: "rockstargames-modules-core-newswire-articleeae1adc5a72c6de1baa46423f96c066f",
          storeInfo: "rockstargames-modules-core-newswire-articlef7c3bc06f2735e3a75db602e4aabbf5a",
          priceInfo: "rockstargames-modules-core-newswire-articleaa82e6cb0fdecc71128122e6adc37791",
          cardDesc: "rockstargames-modules-core-newswire-articlecb155936ef4888dc38c198b39541f0bd"
        },
        G = e => {
          let {
            videoUrl: a,
            expandedType: t,
            children: s
          } = e;
          return a && "linkout" === t ? (0, l.jsx)(c.A, {
            to: a,
            children: s
          }) : s
        },
        A = e => {
          let {
            className: a,
            cardType: t,
            title: s,
            image: i,
            subheader: r,
            subtitle: n,
            price: o,
            slashedPrice: d,
            badge: m = null,
            expandedType: u,
            videoUrl: f
          } = e;
          return (0, l.jsx)("div", {
            className: [R.clrCollapsedCard, a].join(" "),
            role: "button",
            tabIndex: 0,
            children: (0, l.jsx)(G, {
              videoUrl: f,
              expandedType: u,
              children: (0, l.jsxs)("div", {
                className: R.cardContainer,
                "data-type": t,
                children: [(0, l.jsx)("div", {
                  className: R.cardMedia,
                  children: (0, l.jsx)(c.MultiSourceImage, {
                    ...i
                  })
                }), (0, l.jsxs)("div", {
                  className: R.cardInfo,
                  children: [r && (0, l.jsx)("h6", {
                    children: r
                  }), (0, l.jsx)("h5", {
                    children: s
                  }), n && (0, l.jsx)("h6", {
                    className: R.subtitle,
                    children: n
                  }), "store" === t && (0, l.jsxs)("div", {
                    className: R.storeInfo,
                    children: [(0, l.jsx)("p", {
                      className: (() => {
                        switch (m) {
                          case "New":
                            return R.newBadge;
                          case "Sale":
                            return R.saleBadge;
                          case "Out of Stock":
                            return R.outOfStockBadge;
                          default:
                            return ""
                        }
                      })(),
                      children: m
                    }), (0, l.jsxs)("span", {
                      className: R.priceInfo,
                      children: [(0, l.jsx)("p", {
                        className: R.price,
                        children: o
                      }), (0, l.jsx)("p", {
                        className: R.slashedPrice,
                        children: d
                      })]
                    })]
                  })]
                })]
              })
            })
          })
        },
        W = e => {
          let {
            expandedType: a,
            to: t,
            children: s,
            style: i,
            sectionTitle: r = "",
            id: n,
            cardTitle: o,
            position: d
          } = e;
          const {
            track: m
          } = (0, z.useGtmTrack)();
          return "linkout" === a && t ? (0, l.jsx)(c.A, {
            to: t,
            style: i,
            target: t?.startsWith("http") ? "_blank" : "_self",
            onClick: () => m({
              event: "card_click",
              event_action: "click",
              event_category: "card",
              event_label: r,
              link_url: t,
              card_id: n,
              card_name: o,
              element_placement: r,
              position: d
            }),
            children: s
          }) : s
        };
      var U = t(45652);
      const q = {
          layeredImageFrame: "rockstargames-modules-core-newswire-articlef4291aa18340b383f772137ec9e0c582",
          layered: "rockstargames-modules-core-newswire-articlef48bca962431b0e1cbf30e25dfb23979",
          foreground: "rockstargames-modules-core-newswire-articleb52f487de5963cf5eab84e86c244302b",
          imageMask: "rockstargames-modules-core-newswire-articlef55d22ef90c565718cad7bf6387893a7",
          logo: "rockstargames-modules-core-newswire-articlefa6e98cbad19c314e5759f3aa0a2f9b3",
          "sm-horizontal": "rockstargames-modules-core-newswire-articleb496d31814195834a5e84fa5157ede59"
        },
        {
          LiteMotion: Q,
          Animations: Y
        } = c.framer,
        {
          getVariant: K,
          variants: X,
          transitions: J
        } = Y,
        Z = e => {
          let {
            image: a,
            i: t,
            prod: s
          } = e;
          const {
            alt: i,
            src: r
          } = (0, U.useImageParser)({
            ...a,
            prod: s
          });
          return (0, l.jsx)("img", {
            src: r.mobile,
            alt: i ?? "",
            style: {
              "--z-index": t
            }
          })
        },
        ee = e => {
          let {
            images: a = [],
            className: t = "",
            prod: i = !1,
            expandedView: r = !1,
            style: n = {}
          } = e;
          const [c, d] = (0, s.useState)({
            height: window.innerHeight,
            width: window.innerWidth
          });
          (0, s.useEffect)((() => {
            function e() {
              d({
                height: window.innerHeight,
                width: window.innerWidth
              })
            }
            return window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), [c]);
          const m = (0, s.useMemo)((() => a?.length && 0 !== a.length ? a.map((e => (0, l.jsx)(Q, {
            className: (0, o.classList)(q[e?.specialClass] ?? q.imageMask, q[e?.sizeClass], e?.className),
            variants: K(e?.specialClass ?? "imageMask", r ? "expanded" : "collapsed"),
            initial: "initial",
            animate: "animate",
            transition: J.cardOpen,
            children: (0, l.jsx)(Z, {
              image: e,
              prod: i
            })
          }, e.key))) : null), [a, c, r, i]);
          return (0, l.jsx)(Q, {
            className: (0, o.classList)(q.layeredImageFrame, a.length > 1 ? q.layered : q.flat, t),
            style: n,
            initial: X.fade.in.initial,
            animate: X.fade.in.animate,
            transition: J.instantFade,
            "data-expanded-view": r,
            children: m
          })
        },
        ae = {
          clrCardModalContent: "rockstargames-modules-core-newswire-articlebfb45dddcb9390c11ba16607a49ea776",
          expandedCard: "rockstargames-modules-core-newswire-articled8a1f864c20db127067721ebe605540b",
          content: "rockstargames-modules-core-newswire-articled57eaa4a6807e67f6189ae02a1625595",
          details: "rockstargames-modules-core-newswire-articlefd05f61944281a1ef50e21bc30de10f7",
          calloutHeaders: "rockstargames-modules-core-newswire-articlef12819eca617b4b90f2cfd0c5788db65"
        },
        {
          variants: te
        } = c.framer.Animations,
        se = e => {
          let {
            id: a,
            content: t,
            size: s = "clr",
            cardType: i = "release",
            title: r,
            subheader: n,
            subtitle: c,
            storeInfo: d = {},
            expandedType: m,
            to: u,
            image: f,
            deckProps: g,
            tina: p = {},
            position: b
          } = e;
          const h = (0, o.useTinaPayload)(),
            w = p?.payload?.meta?.cdn ?? h?.meta?.prod ?? !1,
            v = {
              image: {
                ...f,
                prod: w
              }
            },
            k = [f];
          return (0, l.jsx)(H, {
            id: a,
            title: r,
            context: "clr-card",
            size: s,
            expandedType: m,
            images: v,
            deckProps: g,
            prod: w,
            position: b,
            modalProps: {
              className: ae.clrCardModal,
              contentClassName: ae.clrCardModalContent
            },
            variants: te.plainCard,
            payload: {
              content: t
            },
            expandedCardContents: (0, l.jsx)(ee, {
              images: k,
              prod: w
            }),
            children: (0, l.jsx)(W, {
              expandedType: m,
              to: u,
              style: {
                display: "flex"
              },
              children: (0, l.jsx)(A, {
                cardType: i,
                title: r,
                subheader: n,
                subtitle: c,
                image: v,
                expandedType: m,
                price: d?.price,
                slashedPrice: d?.slashedPrice,
                badge: d?.badge
              })
            })
          })
        },
        ie = e => {
          let {
            images: a,
            title: t,
            expandedView: i,
            variants: r,
            transition: n
          } = e;
          const o = (0, s.useMemo)((() => a && 0 !== a?.length ? a.map((e => e?.image?.sources ? (0, l.jsx)(c.ImageWithBadge, {
            ...e,
            style: {
              "--object-position": e?.objectPosition ?? ""
            }
          }) : null)) : null), [a]);
          return !o?.length || o?.length < 1 ? null : 1 === o.length ? o : (0, l.jsx)(c.ThumbsGallery, {
            slideChildren: o,
            title: t,
            navigation: i,
            thumbsVisible: i,
            spaceBetween: 0,
            variants: r,
            transition: n
          })
        };
      var re = t(69760),
        ne = t.n(re);
      const oe = {
          pillBtn: "rockstargames-modules-core-newswire-articled13aae72f49e86630d46fa6e54e1fbdc",
          selected: "rockstargames-modules-core-newswire-articlebcc7bd9d9a43edf197cc46795d57249b",
          customModalContent: "rockstargames-modules-core-newswire-articleceeb11e5fc712f410c8c4879663640ef"
        },
        {
          transitions: ce,
          variants: de
        } = c.framer.Animations;
      t(33052), t(95660);
      var le = t(79584),
        me = t(55120);
      const ue = (e, a) => {
          let t = getComputedStyle(e).getPropertyValue(a);
          return t = t.replace("px", "").replace("rem", "").replace("em", ""), t = t.replace("vh", "").replace("vw", "").replace("vmin", "").replace("vmax", ""), t = t.replace("ms", "").replace("s", ""), Number(t)
        },
        fe = e => ({
          x: void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX,
          y: void 0 !== e.changedTouches ? e.changedTouches[0].screenY : e.screenY
        }),
        ge = e => e.scrollHeight > e.clientHeight;

      function pe(e, a) {
        const t = {
          ...e
        };
        return r().forOwn(e, ((e, s) => {
          if ("image" === s) {
            const e = t[s];
            t[s] = {
              ...e,
              prod: a
            }
          } else r().isObject(e) && !r().isArray(e) ? pe(e, a) : r().isArray(e) && (t[s] = e.map((e => r().isObject(e) ? pe(e, a) : e)))
        })), t
      }(0, d.withTranslations)((e => {
        let {
          active: a,
          styles: t,
          title: i,
          itemNumber: r,
          inModalMode: n,
          openModalMode: d,
          element: m,
          upNext: u,
          mobileMode: f,
          refDeck: g,
          components: p,
          tina: b,
          prevPage: h,
          nextPage: w,
          transitionStyle: v,
          selectedItemNumber: k,
          carouselTitle: x,
          sharedDraggingDelta: y,
          setSharedDraggingDelta: j
        } = e;
        const N = (0, le.useIntl)(),
          {
            track: S
          } = (0, z.useGtmTrack)(),
          T = (0, s.createRef)(),
          _ = (0, s.createRef)(),
          P = (0, s.createRef)(),
          C = (0, s.createRef)(),
          I = (0, s.createRef)(),
          [L, E] = (0, s.useState)(!1),
          [M, O] = (0, s.useState)(0),
          [D, $] = (0, s.useState)(0),
          [F, V] = (0, s.useState)(0),
          [B, H] = (0, s.useState)(0),
          [R, G] = (0, s.useState)(0),
          [A, W] = (0, s.useState)(!1),
          [q, Q] = (0, s.useState)(0),
          [Y, K] = (0, s.useState)(0),
          [X, J] = (0, s.useState)(0),
          [Z, ee] = (0, s.useState)("700"),
          [ae, te] = (0, s.useState)(-1),
          [se, ie] = (0, s.useState)(0),
          [re, oe] = (0, s.useState)(0),
          [ce, de] = (0, s.useState)(0),
          [be, he] = (0, s.useState)(!1),
          [we, ve] = (0, s.useState)(""),
          [ke, xe] = (0, s.useState)(null),
          [ye, je] = (0, s.useState)(!1),
          [Ne, Se] = (0, s.useState)(null),
          [Te, _e] = (0, s.useState)(!1),
          [Pe, Ce] = (0, s.useState)(!1),
          Ie = (0, o.useTinaPayload)(),
          Le = b?.payload?.meta?.cdn ?? !1 ?? Ie?.meta?.prod ?? !1,
          Ee = (0, o.useTranslations)({
            payload: b?.payload,
            variables: b?.variables
          }),
          Me = Ee?.meta ?? {},
          Oe = pe(Ee?.content?.[0], Le),
          ze = (0, s.useMemo)((() => Oe?.images?.[0]?.image?.badge), [Oe]),
          De = (0, s.useMemo)((() => Oe.title ?? i ?? Me?.title), [i, Me?.title, Oe.title]),
          $e = (0, U.useImageParser)({
            alt: Oe?.images?.[0]?.image?.alt ?? "",
            ariaLabel: Oe?.images?.[0]?.image?.alt ?? "",
            sources: Oe?.images?.[0]?.image?.sources ?? [],
            prod: Le
          }),
          Fe = $e?.src?.mobile ?? $e?.src?.desktop ?? !1,
          Ve = (0, s.useMemo)((() => Me?.foreignId), [Me]),
          Be = (0, s.useMemo)((() => Me?.foreignTitle), [Me]),
          [He, Re] = (0, s.useState)(0),
          [Ge, Ae] = (0, s.useState)(0),
          [We, Ue] = (0, s.useState)(0),
          [qe, Qe] = (0, s.useState)(0),
          [Ye, Ke] = (0, s.useState)(!1),
          [Xe, Je] = (0, s.useState)(0),
          [Ze, ea] = (0, s.useState)(20),
          [aa, ta] = (0, s.useState)(null),
          [sa, ia] = (0, s.useState)(!1),
          ra = (0, s.useCallback)((e => {
            if (!0 === A || !n && !f || ye) return;
            const a = fe(e);
            Re(a.x), Ae(a.y)
          }), [A, n]),
          na = e => {
            ra(e)
          },
          oa = e => {
            if (!0 === A || 0 === He || !n && !f || ye) return;
            const a = fe(e),
              t = a.x > He ? 1 : -1,
              s = Math.abs(He - a.x);
            n && !f && s > Ze ? (ia(!0), ve(t > 0 ? "prev" : "next"), da()) : (Ke(!0), Je(s * t), j(s * t))
          },
          ca = e => {
            if (!0 === A || !n && !f || ye) return;
            const a = fe(e),
              t = a.x > He ? 1 : -1,
              s = Math.abs(He - a.x),
              i = Math.abs(Ge - a.y);
            n && !f ? (da(), ve("")) : s > Ze && i < 25 ? (ia(!0), ve(t > 0 ? "prev" : "next"), da()) : da()
          },
          da = () => {
            W(!0), Re(0), Ae(0), Ke(!1), Je(0), j(0)
          };
        return (0, s.useEffect)((() => {
          let e = q;
          L ? e = 0 : n && !f && (e = q), O(e)
        }), [L, f, n, D, B, Y, X, F, q]), (0, s.useEffect)((() => {
          E(!(!n || !f))
        }), [n, f]), (0, s.useEffect)((() => {
          n && a && S({
            event: "virtualPageview",
            display_type: f ? "mobile" : "desktop",
            view_name: `${Ve}/${De}`,
            source_content_id: Ve,
            source_content_name: Be
          })
        }), [n, a]), (0, s.useEffect)((() => {
          const e = ne()(((e, a) => {
            let t = 18;
            if (e?.documentElement && (t = ue(e?.documentElement, "--root-font-size")), re !== a.innerHeight && oe(a.innerHeight), g?.current) {
              J(ue(g.current, "--eventDeck-marginSm") * t);
              const e = t * ue(g?.current, "--eventDeck-modalGutters"),
                s = a?.innerWidth,
                i = s - 2 * e;
              $(i), C.current && f && V(i), H(ue(g.current, "--eventDeck-itemSize") * t), de(ue(g.current, "--eventDeck-phaseOneTransitionDuration"));
              const r = ue(g?.current, "--eventDeck-itemImageTitleMargins") * t,
                n = _?.current?.clientHeight,
                o = n + r;
              Number.isNaN(o) || Q(o), ie(ue(g?.current, "--eventDeck-headerHeight") * t)
            }
            let s = Math.min(700, a.innerWidth);
            f || (s = 900), ee(`${s}`)
          }), 300);
          return window.addEventListener("resize", (() => {
            e(document, window)
          })), e(document, window), () => {
            window.removeEventListener("resize", (() => {
              e(document, window)
            }))
          }
        }), [g, f]), (0, s.useEffect)((() => {
          if (T.current) {
            const e = T.current.clientHeight;
            Number.isNaN(e) || K(e)
          }
        }), [T]), (0, s.useEffect)((() => {
          if (n && f && C.current && (C.current.style.transform = "scale(1) translate3d(0, 0, 0)"), !n && f && C.current) {
            const e = 228 / D;
            C.current.style.transform = `scale(${e}) translate3d(0, 0, 0)`
          }!f && C.current && (C.current.style.transform = null)
        }), [n, f, D, F]), (0, s.useEffect)((() => {
          const e = .5 * D,
            a = re - se - 3 * X;
          G(D - (e < a ? e : a))
        }), [D, X, re]), (0, s.useEffect)((() => {
          "next" === we ? (w(null, !0), ve("")) : "prev" === we && (h(null, !0), ve(""))
        }), [we]), (0, s.useEffect)((() => {
          Ue(0), Qe(0)
        }), [f]), (0, s.useEffect)((() => {
          f ? ea(n ? 35 : 20) : n && ea(50)
        }), [n, f]), (0, s.useEffect)((() => {
          let e = [],
            a = 0,
            s = 0;
          if (null !== t?.transform) {
            e = t.transform.split(",");
            const i = e[0].split("(");
            a = Number(i[1].replace("px", "")), Ue(a), s = Number(e[1].replace("px", "")), Qe(s)
          }
        }), [t]), (0, s.useEffect)((() => {
          if (!A) return;
          clearTimeout(ke);
          const e = setTimeout((() => {
            W(!1), Re(0)
          }), 200);
          xe(e)
        }), [A, 200]), (0, s.useEffect)((() => {
          if (!sa) return;
          clearTimeout(aa);
          const e = setTimeout((() => {
            ia(!1)
          }), 1e3);
          ta(e)
        }), [sa]), (0, s.useEffect)((() => {
          n && clearTimeout(ae), setTimeout((() => {
            he(!be)
          }), ce)
        }), [n]), (0, s.useEffect)((() => (document.body.addEventListener("mouseleave", da), () => {
          document.body.removeEventListener("mouseleave", da)
        })), []), (0, s.useEffect)((() => {
          I.current ? _e(ge(I.current)) : _e(!1), void 0 !== m && m.current ? Ce(ge(m.current)) : Ce(!1)
        }), [m, I, a, n, be]), Oe ? (0, l.jsxs)("div", {
          className: "rockstargames-modules-core-newswire-articlec4090652e3c0a4e1979bb0a36b22b7cd",
          ref: m,
          "data-item-position": r,
          "data-modal-mode": n,
          "data-active-item": a,
          "data-up-next": u,
          "data-transition": Ye || 0 !== y ? "none" : v,
          "data-scrollable": Pe,
          style: {
            ...t,
            transform: n && a && !f ? `translate3d(${We+Xe}px, ${qe}px, 0)` : f && !n ? `translate3d(${We+y}px, ${qe}px, 0)` : t?.transform
          },
          onClick: e => {
            sa || (n ? n && !f && (r < k ? h(e, !0) : r > k && w(e, !0)) : d(e))
          },
          onMouseEnter: () => {
            n || E(!0), n || f || (clearTimeout(ae), te(setTimeout((() => {
              S({
                event: "card_title_hover",
                event_category: "card",
                event_action: "title_hover",
                event_label: x,
                card_name: De,
                card_id: r,
                position: r,
                view_name: `${Ve}/${Be}`,
                source_content_id: Ve,
                source_content_name: Be
              })
            }), 1e3)))
          },
          onMouseLeave: () => {
            n || E(!1), n || f || clearTimeout(ae)
          },
          onTouchStart: na,
          onTouchMove: oa,
          onTouchEnd: ca,
          onMouseDown: na,
          onMouseMove: oa,
          onMouseUp: ca,
          onKeyUp: e => {
            "Enter" === e.key && (n || d(e))
          },
          tabIndex: n ? -1 : 0,
          "aria-label": n ? N.formatMessage(me.card.events_deck_modal_group_label) : "",
          role: n ? "dialog" : "presentation",
          children: [(0, l.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articleb9c878efb14d25c323e95f01b7a53460",
            "data-full-header": L,
            ref: P,
            style: {
              height: n && f ? `${D}px` : null,
              width: n && f ? `${D}px` : null
            },
            children: [Fe && (0, l.jsx)("img", {
              ref: C,
              src: `${$e?.src?.mobile??$e?.src?.desktop}?im=Resize,width=${Z}`,
              alt: $e?.alt,
              style: {
                width: 0 !== F && f ? `${F}px` : null,
                height: 0 !== F && f ? `${F}px` : null
              }
            }), (0, l.jsxs)("div", {
              className: "rockstargames-modules-core-newswire-articleba8c09e500ea0845dc20d380e8ec11ca",
              style: {
                transform: !f || f && n ? `translate3d(0, ${M}px, 0)` : null
              },
              children: [ze && (0, l.jsx)("div", {
                className: "rockstargames-modules-core-newswire-articlecbbb0470197acdc4f0ec1f567f5c8a42",
                ref: T,
                children: (0, l.jsx)(c.Badge, {
                  text: ze
                })
              }), (0, l.jsx)("span", {
                className: "rockstargames-modules-core-newswire-articleaca2b0fbf7c1dbcbf99e53812b9abc8e",
                ref: _,
                "aria-hidden": n,
                children: De
              })]
            })]
          }), (0, l.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articlee7defd080518d58f00f72ccc94df53aa",
            ref: I,
            "aria-hidden": !n,
            onScroll: () => {
              je(!0), da(), clearTimeout(Ne);
              const e = setTimeout((() => {
                je(!1)
              }), 100);
              Se(e)
            },
            style: {
              top: n && f ? `${D}px` : null,
              width: n && !f && a ? `${R}px` : null,
              touchAction: Te || f ? "unset" : "none"
            },
            children: [De && (0, l.jsx)("span", {
              className: "rockstargames-modules-core-newswire-articlea8fbffe55d92fc2f04e5e6b8f9267206",
              children: De
            }), (0, l.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articlee20bd8af5d67954447804e0e21161d3b",
              children: (0, l.jsx)(o.TinaParser, {
                components: p,
                tina: {
                  meta: Me,
                  payload: {
                    content: Oe?.content
                  }
                }
              })
            })]
          })]
        }) : null
      }));
      const be = {
          pillBtn: "rockstargames-modules-core-newswire-articlec484e5a1bcbdd4b338bd6fe49900d6cf",
          selected: "rockstargames-modules-core-newswire-articled65c523327b32d2de08dc996cf9d7071",
          customModalContent: "rockstargames-modules-core-newswire-articlec0a9f620e5c9749f0eebe506acda4122",
          content: "rockstargames-modules-core-newswire-articlecebbc72d1229514723b9d664281b472f"
        },
        {
          variants: he
        } = c.framer.Animations,
        {
          variants: we
        } = c.framer.Animations,
        {
          Gen9CoreCarousel: ve,
          framer: ke,
          useTinaModuleFetchByIds: xe,
          withSimpleErrorBoundary: ye
        } = c,
        je = {
          Card: e => {
            let {
              id: a,
              title: t,
              content: i,
              size: r = "md",
              expandedType: n = "short",
              textOverlayProps: c = {
                hasTextOverlay: !1,
                tag: "",
                collapsedHasTag: !1,
                expandedHasTag: !1,
                description: "",
                collapsedHasDescription: !1
              },
              images: d = [],
              deckProps: m = {},
              to: u = null,
              tina: f = {},
              position: g = 0,
              sectionTitle: p = "",
              theme: b,
              pricingOptions: h,
              cardIds: w,
              platformOptions: v = null
            } = e;
            const k = (0, o.useTinaPayload)(),
              x = f?.payload?.meta?.cdn ?? k?.meta?.prod ?? !1,
              [y, j] = (0, s.useState)(m?.size ?? r),
              [N, S] = (0, s.useState)(0),
              T = void 0 !== h?.hasPricingOptions || void 0 !== v?.hasPlatformOptions;
            return (0, s.useEffect)((() => {
              j(m?.size ?? r)
            }), [m?.size, r]), (0, l.jsx)(H, {
              id: a,
              title: t,
              size: y,
              expandedType: n,
              images: d,
              deckProps: m,
              prod: x,
              payload: {
                content: i,
                meta: {}
              },
              variants: he.plainCard,
              textOverlayProps: c,
              modalProps: {
                className: be.customModal,
                contentClassName: be.customModalContent
              },
              expandedCardContents: (0, l.jsx)(ee, {
                images: d,
                prod: x,
                expandedView: !0
              }),
              position: g,
              sectionTitle: p,
              theme: b,
              cardIds: w,
              pricingOptions: h,
              platformOptions: v,
              pricingContainerHeight: N,
              isProductCard: T,
              children: (0, l.jsx)(W, {
                expandedType: n,
                to: u,
                sectionTitle: p,
                id: a,
                cardTitle: t,
                position: g,
                children: (0, l.jsx)("div", {
                  className: be.content,
                  "data-product": T,
                  children: (0, l.jsx)(P, {
                    title: t,
                    size: y,
                    textOverlayProps: c,
                    pricingOptions: h,
                    platformOptions: v,
                    setPricingContainerHeight: S,
                    children: (0, l.jsx)(ee, {
                      images: d,
                      prod: x
                    })
                  })
                })
              })
            })
          },
          CardWithImageGallery: e => {
            let {
              id: a,
              title: t,
              content: i,
              size: r = "md",
              expandedType: n = "gallery",
              textOverlayProps: c = {
                hasTextOverlay: !1,
                tag: "",
                collapsedHasTag: !1,
                expandedHasTag: !1,
                description: "",
                collapsedHasDescription: !1
              },
              images: d = [],
              deckProps: m = {},
              tina: u = {},
              payload: f,
              position: g = 0,
              sectionTitle: p = "",
              cardIds: b
            } = e;
            const h = (0, o.useTinaPayload)(),
              w = f ?? h,
              v = u?.payload?.meta?.cdn ?? w?.meta?.prod ?? !1,
              k = ((e, a) => e?.map((e => e?.image ? {
                ...e,
                image: {
                  ...e.image,
                  prod: a
                }
              } : e)))(d, v),
              [x, y] = (0, s.useState)(m?.size ?? r),
              {
                parent: j,
                main: N,
                thumbs: S
              } = de?.cardWithImageGallery?.gallery ?? {};
            return (0, s.useEffect)((() => {
              y(m?.size ?? r)
            }), [m?.size, r]), (0, l.jsx)(H, {
              id: a,
              position: g,
              sectionTitle: p,
              payload: {
                content: i,
                meta: {},
                payload: w
              },
              title: t,
              size: x,
              expandedType: n,
              images: k,
              deckProps: m,
              prod: v,
              variants: de.cardWithImageGallery,
              textOverlayProps: c,
              modalProps: {
                className: oe.customModal,
                contentClassName: oe.customModalContent
              },
              expandedCardContents: (0, l.jsx)(ie, {
                images: k,
                title: t,
                navigation: !0,
                thumbsVisible: !0,
                variants: {
                  parent: j,
                  main: N,
                  thumbs: S
                },
                transition: {
                  parent: ce.cardOpen,
                  main: ce.cardOpen,
                  thumbs: ce.cardOpen
                }
              }),
              cardIds: b,
              children: (0, l.jsx)("div", {
                className: oe.content,
                children: (0, l.jsx)(P, {
                  title: t,
                  size: x,
                  textOverlayProps: c,
                  children: (0, l.jsx)(ie, {
                    images: k,
                    title: t,
                    navigation: !1,
                    thumbsVisible: !1
                  })
                })
              })
            })
          },
          TextCard: e => {
            let {
              title: a,
              content: t,
              size: s = "md",
              badgeText: i
            } = e;
            const r = {
              ...(0, o.useTinaComponents)(),
              HTMLElement: c.HTMLElement,
              UnorderedList: c.UnorderedList,
              ListItem: c.ListItem
            };
            return (0, l.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articled392587df58204b0910e721ef1f3c35c",
              "data-size": s,
              children: (0, l.jsxs)("div", {
                className: "rockstargames-modules-core-newswire-articlea002b98d034f1897c7e1f31327ff08dc",
                children: [i && (0, l.jsx)("div", {
                  className: "rockstargames-modules-core-newswire-articled9901d1bb91e1fbc1e857964083fe496",
                  children: i
                }), (0, l.jsxs)("div", {
                  className: "rockstargames-modules-core-newswire-articlebea322f6e3afa31355668ad164496730",
                  children: [a && (0, l.jsx)("h3", {
                    children: a
                  }), (0, l.jsx)(o.TinaParser, {
                    components: r,
                    tina: {
                      payload: {
                        content: t
                      }
                    }
                  })]
                })]
              })
            })
          },
          ...c
        },
        Ne = ke.withFadeIn(ye((e => {
          let {
            cards: a = [],
            size: t,
            title: i,
            description: c,
            customSlidesPerView: d = null,
            theme: m = "none",
            cardSizeBreakpoints: u = {},
            customAspectRatio: f = "3/1",
            titleBadge: g = null
          } = e;
          const p = (0, s.useRef)(null),
            b = r().map(a, "id"),
            h = xe({
              ids: b
            }),
            [w, v] = (0, s.useState)(d),
            [k] = (0, n.useSearchParams)(),
            [x, y] = (0, s.useState)(!1);
          (0, s.useEffect)((() => {
            if ("fob" === t) {
              const e = k.get("section");
              if (e && "games" === e && !x && (y(!0), p.current)) {
                const e = 100;
                window.scrollTo(0, p.current.offsetTop - e)
              }
            }
          }), []), (0, s.useEffect)((() => {
            if (!p.current) return;
            const e = () => {
              const e = d || window.getComputedStyle(p.current).getPropertyValue("--slides-per-view");
              v(e)
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }));
          const j = (0, s.useMemo)((() => {
            let e = 0;
            return h ? h.reduce(((a, s) => {
              if (s) {
                const {
                  id: n,
                  tina: c
                } = s, d = r().clone(c);
                r().set(d, "payload.meta.id", n), a.push((0, l.jsx)(o.TinaParser, {
                  components: je,
                  tina: d,
                  componentProps: {
                    deckProps: {
                      size: t
                    },
                    tina: d,
                    id: n,
                    position: e,
                    sectionTitle: i,
                    theme: m,
                    cardIds: b
                  }
                }, n)), e += 1
              }
              return a
            }), []) : null
          }), [h, t]);
          return (0, l.jsx)("div", {
            className: "rockstargames-modules-core-newswire-articlecaf46db6464a84ad4990aed75ef74ff1",
            "data-theme": m,
            ref: p,
            children: (0, l.jsx)(ve, {
              description: c,
              size: t,
              cardSizeBreakpoints: u,
              slideChildren: j,
              title: i,
              customSlidesPerView: w,
              customAspectRatio: f,
              titleBadge: g
            })
          })
        })))
    },
    91312: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        default: () => c
      });
      var s = t(9860),
        i = t(1740),
        r = t(45792);
      const n = {
        title: "rockstargames-modules-core-newswire-articleca3619ec694712f8ef44a0673cc5cd2a",
        main: "rockstargames-modules-core-newswire-articleb604683b1b1cf1316f5cf35ce2fe4b31",
        breadcrumbs: "rockstargames-modules-core-newswire-articled1965b8d8252ea2aaac5bde77b3bcef0"
      };
      var o = t(95240);
      const c = (0, r.withTranslations)((e => {
        let {
          children: a,
          intro: t,
          image: c = {},
          style: d = {},
          t: l,
          className: m = "",
          variant: u = null
        } = e, f = {};
        void 0 !== d.toggleInvertSeparator && (f = {
          "--breadcrumb-separator-filter-invert": d.toggleInvertSeparator ? "invert(0)" : "invert(1)"
        });
        const g = (0, r.useNewswirePost)(),
          p = {},
          b = p?.meta?.title ?? g?.title,
          h = p?.meta?.subtitle ?? g?.subtitle,
          w = h ? (0, o.jsx)("h3", {
            "data-context": "newswire-subtitle",
            children: h
          }) : "",
          v = [{
            text: l("Newswire"),
            to: "/newswire"
          }],
          {
            src: k
          } = (0, i.useImageParser)(c),
          x = (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsx)("time", {
              dateTime: g.created,
              children: g.created_formatted
            }), t ? (0, o.jsx)(s.DescriptionArea, {
              item: t
            }) : "", a]
          });
        g?.primary_tags?.length && v.push({
          text: g.primary_tags[0].name,
          to: `/newswire?tag_id=${g.primary_tags[0].id}`
        }), g?.secondary_tags?.length && v.push({
          text: g.secondary_tags[0].name,
          to: `/newswire?tag_id=${g.secondary_tags[0].id}`
        });
        const y = (0, o.jsx)("div", {
          className: n.breadcrumbs,
          children: v.map((e => (0, o.jsx)(s.A, {
            to: e.to,
            children: e.text
          }, e.to)))
        });
        return k?.desktop && (d.background = `url(${k.desktop}) center/cover no-repeat`), (0, o.jsx)("div", {
          className: [m, n.title].join(" "),
          style: {
            ...d,
            ...f
          },
          children: "separated" === u ? (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsxs)("header", {
              "data-context": "title",
              children: [y, (0, o.jsx)("h1", {
                children: b
              })]
            }), (0, o.jsxs)("footer", {
              "data-context": "title",
              children: [w, x]
            })]
          }) : (0, o.jsxs)(o.Fragment, {
            children: [y, (0, o.jsxs)("div", {
              className: n.main,
              children: [(0, o.jsx)("h1", {
                children: b
              }), w]
            }), x]
          })
        })
      }))
    },
    22052: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        AnchorLink: () => o,
        Discounts: () => y,
        Donate: () => T,
        Engagement: () => i(),
        EventInfo: () => $,
        FeaturedEventInfo: () => F,
        FontClip: () => B,
        GamingRewards: () => G,
        Gen9List: () => q,
        HeroImage: () => Y,
        NewswireFull: () => J,
        NewswireTitle: () => O.default,
        PctBar: () => Z,
        Podium: () => ee
      });
      var s = t(23397),
        i = t.n(s),
        r = t(51664),
        n = t(95240);
      const o = e => {
        let {
          children: a,
          hash: t
        } = e;
        const s = (0, r.useRef)(null),
          i = window.location.hash?.replace("#", "") === t ? t : null;
        return (0, r.useEffect)((() => {
          i && setTimeout((() => {
            const e = document.getElementById(i);
            e && e.scrollIntoView()
          }), 1e3)
        }), []), (0, n.jsx)("div", {
          ref: s,
          id: t,
          children: a
        })
      };
      var c = t(45364),
        d = t.n(c);
      const l = e => {
        let {
          items: a,
          columns: t = {},
          noCarousel: s = !1,
          noInfiniteScroll: i = !1,
          ...r
        } = e;
        const o = r?.style ?? {};
        return s && (t?.mobile && (o["--mobile-cols"] = t.mobile), t?.desktop && (o["--desktop-cols"] = t.desktop)), (0, n.jsxs)(n.Fragment, {
          children: [r.title && (0, n.jsx)("p", {
            className: "rockstargames-modules-core-newswire-articleaff0b1cbcafd725c58c239e5c027d99c",
            children: r.title
          }), (0, n.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articlef21b886c69c9d2c51f97af89d920996b",
            children: [s && (0, n.jsx)(d(), {
              style: {
                ...o,
                "--grid-gap-dynamic": "2rem 0"
              },
              className: "rockstargames-modules-core-newswire-articlea537ee313e960643c300864d36fccce1",
              renderTemplate: "standard",
              items: a,
              ...r
            }), !s && (0, n.jsx)(w, {
              items: a,
              noInfiniteScroll: i,
              perPage: 2,
              perPageMobile: 1
            })]
          })]
        })
      };
      var m = t(9860);
      const u = {
          limitedGrid: "rockstargames-modules-core-newswire-articled84c2dff4228f60ad6d32e1b56fb9ac1",
          gridCarousel: "rockstargames-modules-core-newswire-articlec8d973199844852aadd8606029f0daa6",
          limitedGridContent: "rockstargames-modules-core-newswire-articlea4b30725303d32828a1961bb3076192c",
          columnsDesktop2: "rockstargames-modules-core-newswire-articlece7233232cec02fec6de50aaba28594f",
          thirdLine: "rockstargames-modules-core-newswire-articlef84ce65d59fb1f61fe1b21deacc57a26",
          gridItem: "rockstargames-modules-core-newswire-articled05ae610f5db877460ee429055991b66",
          columnsDesktop3: "rockstargames-modules-core-newswire-articlec65e6612bac8edac8a80ee9d2c396172",
          columnsDesktop4: "rockstargames-modules-core-newswire-articlef8b062b1ebbe2717b603826b9ef0c0d7",
          extraDiv: "rockstargames-modules-core-newswire-articleebd3336e01812c90af2651b222dae3b2",
          gridText: "rockstargames-modules-core-newswire-articlea2545673c32ee8b79508e2f3670ad7e2",
          noTextFit: "rockstargames-modules-core-newswire-articleaf290b110fcbad08b23df942e44aaf6e",
          coupons: "rockstargames-modules-core-newswire-articlef19e5694de6017a3072b9d164ea0295e",
          imageArea: "rockstargames-modules-core-newswire-articlea11e08e06479988d77fa969507768b0b",
          carouselOnMobile: "rockstargames-modules-core-newswire-articlea97e99cab39ffe39a1c67dd0e96fcb10",
          imageAreaBg: "rockstargames-modules-core-newswire-articlea3925f45e40ce0f75341e297fe1a205e",
          carouselDesc: "rockstargames-modules-core-newswire-articleea2aaab9bc960a201218f7cab12a3779"
        },
        f = e => {
          let {
            to: a,
            children: t
          } = e;
          return a ? (0, n.jsx)("a", {
            href: a,
            target: "_blank",
            rel: "noreferrer",
            children: t
          }) : t
        },
        g = e => {
          let {
            items: a,
            noTextFit: t,
            type: s,
            carouselOnMobile: i,
            columns: o = {
              desktop: 3,
              mobile: 2
            }
          } = e;
          const [c, d] = (0, r.useState)(null), [l, g] = (0, r.useState)(3), p = (0, r.useRef)(null);
          return (0, r.useEffect)((() => {
            const e = window.getComputedStyle(p.current).getPropertyValue("--divisible-desktop"),
              t = () => {
                const a = window.innerWidth;
                g(a <= 767 ? 2 : e)
              };
            if (a?.content.length && a?.content.length >= l) {
              let {
                length: e
              } = a.content;
              const t = [];
              if (e % l != 0) {
                let a = 0;
                do {
                  t.push((0, n.jsx)("div", {
                    className: `${u.gridItem} ${u.extraDiv}`
                  }, "limited-grid-" + a++)), e++
                } while (e % l != 0)
              }
              d(t)
            }
            return window.addEventListener("resize", t), t(), () => window.removeEventListener("resize", t)
          }), [l, p]), (0, n.jsxs)("div", {
            className: `${u.limitedGrid} ${i?u.carouselOnMobile:""}`,
            children: [(0, n.jsxs)("div", {
              ref: p,
              style: {
                "--divisible-desktop": o.desktop,
                "--divisible-mobile": o.mobile
              },
              className: `\n                    ${u.limitedGridContent}\n                    ${2===o.desktop?u.columnsDesktop2:""}\n                    ${3===o.desktop?u.columnsDesktop3:""}\n                    ${o.desktop>=4?u.columnsDesktop4:""}\n                    ${t?u.noTextFit:""}\n                    ${s?u[s]:""}\n                `,
              children: [(0, n.jsx)("div", {
                className: u.thirdLine
              }), a.content.map(((e, a) => (0, n.jsx)("div", {
                className: u.gridItem,
                children: (0, n.jsxs)(f, {
                  to: e?.href ?? e?.to,
                  children: [!t && (0, n.jsx)(m.TextFit, {
                    className: u.gridText,
                    min: 16,
                    max: 1e3,
                    mode: "single",
                    children: e.title
                  }), (0, n.jsx)("div", {
                    className: u.imageArea,
                    children: (0, n.jsx)(m.ImageWithBadge, {
                      image: e.image,
                      ariaLabel: e.ariaLabel,
                      badgeType: "badge2",
                      badge: e.badge
                    })
                  }), t && (0, n.jsx)("p", {
                    children: e.title
                  })]
                })
              }, a))), c]
            }), i && (0, n.jsx)("div", {
              className: u.gridCarousel,
              children: (0, n.jsx)(m.Carousel, {
                children: a.content.map(((e, a) => (0, n.jsxs)("div", {
                  children: [(0, n.jsx)("div", {
                    className: `${u.imageArea} ${u.imageAreaBg}`,
                    children: (0, n.jsx)(m.ImageWithBadge, {
                      className: s ? u[s] : "",
                      image: e.image,
                      ariaLabel: e.ariaLabel,
                      badgeType: "badge2",
                      badge: e.badge
                    })
                  }), e.title && (0, n.jsx)("p", {
                    className: u.carouselDesc,
                    children: (0, n.jsx)(f, {
                      to: e?.href ?? e?.to,
                      children: e.title
                    })
                  })]
                }, a)))
              })
            })]
          })
        },
        p = e => {
          let {
            items: a = []
          } = e;
          if (!a.length) return null;
          let t = 0,
            s = 0;
          return a.map(((e, a) => {
            if (e.limitedList?.content || e.limitedGridList?.content) {
              const t = [];
              return e.limitedList?.content && t.push((0, n.jsx)(w, {
                items: e.limitedList.content,
                noInfiniteScroll: e?.noInfiniteScroll,
                perPage: e?.perPage
              }, e?.key ?? a)), e.limitedGridList?.content && t.push((0, n.jsx)(g, {
                columns: e.limitedGridList.columns,
                items: e.limitedGridList
              }, e?.key ?? a)), s++, (0, n.jsxs)("div", {
                children: [1 === s && (0, n.jsx)("div", {
                  className: "rockstargames-modules-core-newswire-articleec69a1e1d83f2c9b2d71b4afc2e8d41e",
                  children: (0, n.jsx)("div", {
                    className: "rockstargames-modules-core-newswire-articlef28c9e814f58215db0c40753bd85a265"
                  })
                }), t]
              }, a)
            }
            if (e.discountsList?.content || e.discountsGridList?.content) {
              const s = [];
              return e.discountsList?.content && s.push((0, n.jsx)(w, {
                items: e.discountsList.content,
                noInfiniteScroll: e?.noInfiniteScroll,
                perPage: e?.perPage
              }, e?.key ?? a)), e.discountsGridList?.content && s.push((0, n.jsx)(g, {
                noTextFit: !0,
                carouselOnMobile: !0,
                type: e.type ?? e.discountsGridList.type,
                columns: e.discountsGridList.columns,
                items: e.discountsGridList
              }, e?.key ?? a)), e?.list && s.push((0, n.jsx)(m.UnorderedList, {
                ...e
              })), t++, (0, n.jsxs)("div", {
                children: [1 === t && (0, n.jsx)("div", {
                  className: "rockstargames-modules-core-newswire-articlea6b9b7f63ef349c57f3045b559b9a238"
                }), s]
              }, a)
            }
            return null
          }))
        },
        b = {
          discountsCarouselItem: "rockstargames-modules-core-newswire-articleb1db5637574663ac89f33762c188d7eb",
          fontUpdate: "rockstargames-modules-core-newswire-articlea32986414e2f20d413cb21db77e5ddf2",
          discountsCarousel: "rockstargames-modules-core-newswire-articlee049405f569eb7a31b675e4066e535f7",
          singleImage: "rockstargames-modules-core-newswire-articlea34b328fa3d84d357c02b025e41c0352"
        },
        h = e => {
          let {
            wrapper: a,
            children: t,
            length: s
          } = e;
          return s > 1 ? a(t) : t
        },
        w = e => {
          let {
            items: a,
            noInfiniteScroll: t = !1,
            size: s = null,
            perPage: i = null,
            customSlidesPerView: o = null,
            style: c = {}
          } = e;
          const d = (0, r.useRef)(null),
            [l, u] = (0, r.useState)(null),
            [f, g] = (0, r.useState)(s);
          return (0, r.useEffect)((() => {
            !s && i && g(1 === i ? "lg" : "sm"), s || i || (g("lg"), console.error('Error: DiscountsCarousel expects a prop "size" in order to display the correct amount of slides. Defaulting to lg.'))
          }), [s, i]), (0, r.useEffect)((() => {
            if (!d.current) return;
            const e = () => {
              const e = o || window.getComputedStyle(d.current).getPropertyValue("--slides-per-view");
              u(e)
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), [d, o]), a.length ? (0, n.jsx)(h, {
            length: a.length,
            wrapper: e => (0, n.jsx)("div", {
              "data-size": f,
              ref: d,
              children: (0, n.jsx)(m.Carousel, {
                className: b.discountsCarousel,
                noInfiniteScroll: t,
                style: {
                  ...c,
                  "--per-page": l,
                  "--carousel-column-gap": "1rem"
                },
                children: e
              })
            }),
            children: a.map(((e, t) => (0, n.jsxs)("div", {
              className: [b.discountsCarouselItem, 1 === a.length ? b.singleImage : ""].join(" "),
              children: [(0, n.jsx)(m.ImageWithBadge, {
                ariaLabel: e?.ariaLabel,
                image: e?.image ?? {
                  alt: e?.alt ?? "",
                  desktop: e?.img ?? null,
                  mobile: e?.imgMobile ?? null
                },
                badge: e?.badge ?? e?.image?.badge ?? e.discountTxt,
                splitter: e?.splitter ?? e?.image?.splitter,
                badgeType: "badgeSizeUpdate"
              }), (0, n.jsx)(m.DescriptionArea, {
                className: b.fontUpdate,
                item: e
              })]
            }, e?.key ?? t)))
          }) : (console.error('Error: DiscountsCarousel expects a prop "items" that contains an array of objects.'), null)
        },
        v = e => {
          let {
            items: a = [],
            style: t = {}
          } = e;
          return a.length ? (0, n.jsx)(m.Grid, {
            style: {
              "--background-color": "#000",
              "--grid-gap-dynamic": "var(--grid-gap-static-lg)",
              "--padding-dynamic-tb": "var(--grid-gap-static-lg)",
              "--image-rounding-dynamic": "0",
              ...t
            },
            children: a.map(((e, a) => e?.title_and_description ? (0, n.jsxs)(m.Grid, {
              context: "readable-text",
              style: {
                textAlign: "left",
                "--grid-gap-dynamic": "var(--grid-gap-static-xs)",
                background: "transparent"
              },
              children: [e?.title_and_description.title && (0, n.jsx)("h1", {
                className: "large",
                children: e.title_and_description.title
              }), e?.title_and_description.description && (0, n.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: e.title_and_description.description
                }
              })]
            }, e?.key ?? a) : e?.limitedList?.content ? (0, n.jsx)(w, {
              items: e.limitedList.content,
              noInfiniteScroll: e?.noInfiniteScroll,
              perPage: e?.perPage,
              size: e?.size
            }, e?.key ?? a) : e?.discountsGridList?.content ? (0, n.jsx)(l, {
              noCarousel: !0,
              columns: e.discountsGridList?.columns,
              items: e.discountsGridList.content
            }, e?.key ?? a) : e?.content ? (0, n.jsx)(m.HTMLElement, {
              ...e,
              children: e.content
            }, e?.key ?? a) : e?.list ? (0, n.jsx)(m.UnorderedList, {
              ...e
            }, e?.key ?? a) : void 0))
          }) : null
        },
        k = {
          area: "rockstargames-modules-core-newswire-articlebd369197d34037ca950bc456ae0edbfa",
          btmImg: "rockstargames-modules-core-newswire-articlea96546818d0319df5a2790c88dc1f5ea",
          limitedTopImg: "rockstargames-modules-core-newswire-articlec42389be5e7c869431a648165a5cae18",
          topImg: "rockstargames-modules-core-newswire-articleaffb8cefb29b116795380aa5314d5127"
        },
        x = e => {
          let {
            items: a,
            renderTemplate: t,
            ...s
          } = e;
          switch (t) {
            case "gtav":
            case "gtao":
              return (0, n.jsx)(v, {
                items: a,
                ...s
              });
            case "grid":
              return (0, n.jsx)(l, {
                items: a,
                ...s
              });
            default:
              return (0, n.jsx)(p, {
                items: a
              })
          }
        },
        y = e => {
          let {
            items: a,
            renderTemplate: t,
            style: s,
            ...i
          } = e;
          return (0, n.jsx)("div", {
            className: k.area,
            "data-context": "discounts",
            children: (0, n.jsxs)("div", {
              className: k.discountsContent,
              children: [(0, n.jsx)(x, {
                renderTemplate: t,
                items: a,
                props: i,
                style: s
              }), (0, n.jsx)("div", {
                className: k.btmImg
              })]
            })
          })
        };
      var j = t(89416),
        N = t.n(j);
      const S = {
          donate: "rockstargames-modules-core-newswire-articleff9f3568a504aa9435bb271c905604c6",
          largePaddingSides: "rockstargames-modules-core-newswire-articleeda019a9aff0ac7012c1f9d07452fb57"
        },
        T = e => {
          let {
            text: a
          } = e;
          const {
            sanitize: t
          } = N();
          return (0, n.jsx)("div", {
            className: [S.donate, "normalPaddingTopBottom largePaddingSides"].join(" "),
            children: (0, n.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: t(a)
              }
            })
          })
        };
      var _ = t(73660),
        P = t.n(_),
        C = t(1740),
        I = t(88460),
        L = t.n(I),
        E = t(84644),
        M = t.n(E),
        O = t(91312);
      const z = {
          pillBtn: "rockstargames-modules-core-newswire-articlef9b4575485160d1ee87bf2d85c618500",
          selected: "rockstargames-modules-core-newswire-articlefc0de6978953b2e05ca6256e5df9ddeb",
          event: "rockstargames-modules-core-newswire-articledeb35a20cd305c1c3f58adf38c18a13b",
          featured: "rockstargames-modules-core-newswire-articlec9494ef21ed459fabdebc24519c1880c",
          eventInfo: "rockstargames-modules-core-newswire-articlef0f5b255059bdf027309b512d3f6b154",
          large: "rockstargames-modules-core-newswire-articlec21ddd1ba6d193681ca88e9d03509ad4",
          videoWrapper: "rockstargames-modules-core-newswire-articlefa2fc51439d229dae72eeb8818a0c0c5"
        },
        D = e => {
          let {
            images: a
          } = e;
          return a?.length ? 1 === a.length ? (0, n.jsx)(m.ImageWithBadge, {
            ...a[0]
          }) : (0, n.jsx)(m.Carousel, {
            items: a
          }) : null
        },
        $ = e => {
          let {
            images: a,
            title: t,
            content: s,
            isFeatured: i = !1,
            className: o = null,
            videoInHeroProps: c,
            hideNewswireTitle: l = !1
          } = e;
          const u = (0, C.useTinaPayload)(),
            f = u?.meta?.prod ?? !1,
            g = (0, C.useTinaComponents)();
          P().set(u, "meta.prod", f);
          let p = c?.gifVideoProps?.hasVideoInHero || !1;
          const b = c?.htmlVideoProps?.id || !1,
            h = !!c?.htmlVideoProps?.hasHtmlVideoInHero && b;
          h && p && (p = !1);
          const w = void 0 === c || !p && !h,
            v = (0, r.useMemo)((() => ({
              ...g,
              HTMLElement: m.HTMLElement,
              ImageWithBadge: m.ImageWithBadge,
              GroupOfItems: d()
            })), [g]);
          return (0, n.jsxs)("div", {
            className: (0, C.classList)(z.event, o),
            children: [p && (0, n.jsx)("div", {
              className: z.videoWrapper,
              children: (0, n.jsx)(L(), {
                hash: {
                  desktop: c?.gifVideoProps?.hash?.desktop,
                  mobile: c?.gifVideoProps?.hash?.mobile
                },
                loop: c?.gifVideoProps?.isLooping
              })
            }), h && b && (0, n.jsx)("div", {
              className: z.videoWrapper,
              children: (0, n.jsx)(M(), {
                autoplay: c?.htmlVideoProps?.autoPlay || !1,
                id: b
              })
            }), w && (0, n.jsx)(D, {
              images: a
            }), i && (0, n.jsx)(O.default, {}), (0, n.jsxs)("div", {
              className: z.eventInfo,
              children: [!i && !l && (0, n.jsx)("h3", {
                className: z.eventTitle,
                children: t
              }), (0, n.jsx)(C.TinaParser, {
                components: v,
                tina: {
                  payload: {
                    content: s,
                    meta: {
                      prod: f
                    }
                  }
                }
              })]
            })]
          })
        },
        F = e => (0, n.jsx)($, {
          ...e,
          className: z.featured,
          isFeatured: !0
        }),
        V = {
          clip: "rockstargames-modules-core-newswire-articlee0224b729307b43a17327188777c3c60",
          redTexture: "rockstargames-modules-core-newswire-articlebbcb053265bd42678ed1086e133ee340",
          greyTexture: "rockstargames-modules-core-newswire-articlea58880949ade673f268f021629ed7bb0"
        },
        B = e => {
          let {
            fontFamily: a = "inherit",
            fontBg: t,
            string: s
          } = e;
          return (0, n.jsx)("span", {
            style: {
              "--font-family-clip": a
            },
            className: [V.clip, V[t]].join(" "),
            children: s
          })
        };
      var H = t(3061);
      const R = {
          gamingWrapper: "rockstargames-modules-core-newswire-articlec33afa2532a66477387c16a5b7609e34",
          gamingRewards: "rockstargames-modules-core-newswire-articleb322b28290c4e636c9b32f29917c5142",
          psPlus: "rockstargames-modules-core-newswire-articlee23e4159dabd78b608752229f0d0b72c",
          rightSide: "rockstargames-modules-core-newswire-articlef112487054e57af59822a171d10c37a9",
          primeGamingSocialLogo: "rockstargames-modules-core-newswire-articleec4eb482f8b948a6a76705b272a8d13e",
          gtaPlus: "rockstargames-modules-core-newswire-articleacbc30267860abd5959b92dd3c096bf2",
          plus: "rockstargames-modules-core-newswire-articlec4b85ff28ea81e7439b17ff6769cffa9",
          listArea: "rockstargames-modules-core-newswire-articleaed79f67f607b829c74dccab234aca0a",
          psPlusDefaultImg: "rockstargames-modules-core-newswire-articleeb72969e58b99a2bbe3c86723f8568e4"
        },
        G = e => {
          let {
            headline: a,
            plainImage: s,
            top: i,
            unorderedList: r,
            bottom: o,
            rewards: c = "primeGaming",
            style: d = {}
          } = e;
          const l = (0, H.useLocale)();
          return "primeGaming" === c && ["ru", "kr", "ko_kr", "ru_ru"].includes(l) ? null : (0, n.jsx)("div", {
            className: R.gamingWrapper,
            children: (0, n.jsx)("div", {
              className: `${R.gamingRewards} ${R[c]}`,
              style: d,
              children: (0, n.jsxs)(m.ResponsiveGridBox, {
                style: {
                  "--grid-align-items": "center",
                  "--grid-row-gap": "2rem"
                },
                children: [(0, n.jsxs)(m.ResponsiveGridItem, {
                  children: [a && (0, n.jsx)("h3", {
                    children: a
                  }), "psPlus" === c && (0, n.jsx)("img", {
                    "aria-label": "Playstation Plus Benefit",
                    className: R.primeGamingSocialLogo,
                    src: t(43844)
                  }), "primeGaming" === c && (0, n.jsx)("img", {
                    "aria-label": "Social Club | Prime Gaming",
                    className: R.primeGamingSocialLogo,
                    src: t(26588)
                  }), "gtaPlus" === c && (0, n.jsx)("img", {
                    "aria-label": "GTA Plus",
                    className: R.primeGamingSocialLogo,
                    src: t(42100)
                  }), i?.text && (0, n.jsx)("p", {
                    dangerouslySetInnerHTML: {
                      __html: i.text
                    }
                  }), r?.list && (0, n.jsx)("div", {
                    className: R.listArea,
                    children: (0, n.jsx)(m.UnorderedList, {
                      className: "gtaPlus" === c ? R.plus : "",
                      ...r,
                      list: r.list,
                      ...r?.attributes
                    })
                  }), o?.text && (0, n.jsx)("p", {
                    dangerouslySetInnerHTML: {
                      __html: o.text
                    }
                  })]
                }), (0, n.jsx)(m.ResponsiveGridItem, {
                  className: R.rightSide,
                  children: s?.image ? (0, n.jsx)(m.MultiSourceImage, {
                    image: s.image
                  }) : (0, n.jsx)("div", {
                    className: R.psPlusDefaultImg
                  })
                })]
              })
            })
          })
        };
      var A = t(21760),
        W = t(33052),
        U = t(38680);
      const q = e => {
          let {
            backgroundImages: a,
            deckHash: t = "",
            perPage: s = null
          } = e;
          const [i, o] = (0, r.useState)(null), c = (0, C.useGetCdnSource)(a?.backgroundImg?.full_src ?? null), d = (0, C.useGetCdnSource)(a?.layeredImg?.full_src ?? null), l = (0, r.useRef)(null), {
            data: u,
            error: f
          } = (0, W.useQuery)(U.TinaModulesInfo, {
            variables: {
              ids: t
            },
            skip: !t
          });
          return (0, r.useEffect)((() => {
            if (u?.tinaModulesInfo) {
              const e = u.tinaModulesInfo[0],
                {
                  id: a,
                  tina: t
                } = e,
                s = P().clone(t);
              P().set(s, "payload.meta.id", a), o(s)
            }
          }), [u]), u && i ? f ? (0, n.jsx)(m.Wasted, {
            error: f
          }) : (0, n.jsx)("div", {
            className: "rockstargames-modules-core-newswire-articlee274b3eb1b6b53a4a1a15a8f7e45c32b",
            ref: l,
            style: {
              "--background-image": `url(${c})`,
              "--layered-image": `url(${d})`,
              "--slides-per-view-desktop": s
            },
            children: (0, n.jsxs)("div", {
              className: "rockstargames-modules-core-newswire-articleb22f3a069f5ae8392b6f0a125b2fcc7c",
              children: [d ? (0, n.jsx)("div", {
                className: "rockstargames-modules-core-newswire-articlef24111149ce32640ed3990c565f1f663"
              }) : "", (0, n.jsx)("div", {
                className: "rockstargames-modules-core-newswire-articled816468db56e41fe199319fd7f20b8fd",
                children: (0, n.jsx)(C.TinaParser, {
                  components: {
                    Deck: A.WU
                  },
                  tina: i
                })
              })]
            })
          }) : null
        },
        Q = {
          hiddenMobile: "rockstargames-modules-core-newswire-articlefcd9b756ec79b800e6e2a874d4952267",
          hiddenLarge: "rockstargames-modules-core-newswire-articlef1e7a1b01f98ac70ad8163ffee4ba650",
          "hidden-sm": "rockstargames-modules-core-newswire-articlef173a012951bcf6271166618a9194d95",
          "show-sm": "rockstargames-modules-core-newswire-articlec865b3fc9496eca4d2b60e4f39cb26b6",
          "hidden-md": "rockstargames-modules-core-newswire-articled373636a89b4a126bd8811fbdf6a8b5a",
          "show-md": "rockstargames-modules-core-newswire-articleb98b287d7b9a9b97f2d424a9ec06eac4",
          "hidden-lg": "rockstargames-modules-core-newswire-articleb4a5056ee672b146ba56a053c0996131",
          "show-lg": "rockstargames-modules-core-newswire-articlea053d2c98542e75ab7996394068ba96e",
          "hidden-xl": "rockstargames-modules-core-newswire-articlea67450e1f1e23eb187faf5bdd7818576",
          "show-xl": "rockstargames-modules-core-newswire-articlefdadc3b48dd33c8d314971f0c4ec768d",
          "hidden-xxl": "rockstargames-modules-core-newswire-articlea6d28df6b16a9ebd36981c24bf0385e6",
          "show-xxl": "rockstargames-modules-core-newswire-articlef16bd7eff092259aa29f77bb430c6cea",
          "full-width": "rockstargames-modules-core-newswire-articleb2703b37afddc64231bad0dbc6dc508e",
          "reverse-mobile": "rockstargames-modules-core-newswire-articlefb8f550bee051c39ae2446a313c6953d",
          "center-children": "rockstargames-modules-core-newswire-articleccd5e5d3fb737dc625dc9f865be73e58",
          "std-padding-mobile-desktop-none": "rockstargames-modules-core-newswire-articlea14d4623ce83550fabc2c0054c12e06c",
          "std-padding-desktop-mobile-none": "rockstargames-modules-core-newswire-articleeef40f8887a7a6f619111caa3133a7e0",
          "horizontal-line": "rockstargames-modules-core-newswire-articleb3c6fa2aa88993c8f208478df68b0da1",
          gold: "rockstargames-modules-core-newswire-articlef3c24bf757a12b65011514e75e247b8c",
          heroImage: "rockstargames-modules-core-newswire-articledf0381460fec48db32dff93b7840826b",
          responsiveImage: "rockstargames-modules-core-newswire-articleab6a895408f1c4da07244f72a48d14d9",
          responsiveVideo: "rockstargames-modules-core-newswire-articlea3faa88c835593aed90c0387fe1655bc"
        },
        Y = e => {
          let {
            alt: a = "",
            className: t = "",
            src: s = {},
            image: i = null,
            video: r = null
          } = e;
          return (0, n.jsxs)("div", {
            className: ((s?.videoPlayerId || s?.gifHash) && Q.heroImage, t),
            children: [s?.mobile && (0, n.jsx)(m.ResponsiveImg, {
              src: s.mobile,
              ariaLabel: a,
              className: [s?.desktop && Q.hiddenLarge, Q.responsiveImage].join(" "),
              noRatioPlease: !0
            }), s?.desktop && (0, n.jsx)(m.ResponsiveImg, {
              src: s.desktop,
              ariaLabel: a,
              className: [s?.mobile && Q.hiddenMobile, Q.responsiveImage].join(" ")
            }), s?.videoPlayerId && (0, n.jsx)("div", {
              className: [Q.responsiveVideo, Q.trailer].join(" "),
              children: (0, n.jsx)(M(), {
                context: "site",
                autoplay: !1,
                id: s.videoPlayerId,
                hero: !0
              })
            }), s?.gifHash && (0, n.jsx)("div", {
              className: Q.responsiveVideo,
              children: (0, n.jsx)(L(), {
                hash: [{
                  desktop: s?.gifHash?.desktop
                }, {
                  mobile: s?.gifHash?.mobile
                }]
              })
            }), i && (0, n.jsx)(m.ImageWithBadge, {
              image: i
            }), r && (0, n.jsx)("div", {
              className: [Q.responsiveVideo, Q.trailer].join(" "),
              children: (0, n.jsx)(M(), {
                context: "site",
                autoplay: r?.autoplay ?? !1,
                id: r.id,
                hero: !0
              })
            })]
          })
        };
      var K = t(22064),
        X = t.n(K);
      const J = e => {
          let {
            children: a,
            className: t = "",
            style: s,
            game: i
          } = e;
          return (0, r.useEffect)((() => {
            document.fonts.ready.then((() => {
              X().balanceText()
            }))
          }), [a]), (0, n.jsx)("div", {
            className: ["newswireFull", i, t].join(" "),
            style: s,
            "data-game": i,
            children: a
          })
        },
        Z = e => {
          let {
            pct: a,
            bgColor: t,
            primaryColor: s
          } = e;
          return (0, n.jsx)("div", {
            style: {
              position: "relative",
              width: "100%",
              height: "20px",
              backgroundColor: t
            },
            children: (0, n.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articlebd486f774b8499df78c2751a83ceb906",
              style: {
                backgroundColor: s,
                position: "absolute",
                top: "0",
                left: "0",
                width: `${a}%`,
                height: "100%"
              }
            })
          })
        },
        ee = e => {
          let {
            title: a,
            desc: t,
            img: s,
            imgMobile: i,
            bgColor: r,
            descPositionBottom: o,
            fontColor: c = "#fff"
          } = e;
          return (0, n.jsxs)(n.Fragment, {
            children: [o ?? (0, n.jsx)(m.ResponsiveSection, {
              style: {
                backgroundColor: `${r}`,
                "--padding-top-bottom": "1.75rem"
              },
              className: "normalPaddingTopBottom largePaddingSides",
              children: (0, n.jsxs)(m.ResponsiveSection, {
                className: "maxDescArea",
                style: {
                  "--desc-h3-margin-bottom": "var(--h-rem-size)"
                },
                children: [(0, n.jsx)("h3", {
                  style: {
                    "--color-span": `${c}`
                  },
                  children: a
                }), (0, n.jsx)("p", {
                  children: t
                })]
              })
            }), (0, n.jsxs)(m.ResponsiveSection, {
              className: [o ?? "spacing"].join(" "),
              children: [(0, n.jsx)(m.ResponsiveImg, {
                className: "hiddenMobile",
                src: s
              }), (0, n.jsx)(m.ResponsiveImg, {
                className: "hiddenLarge",
                src: i
              })]
            }), o ? (0, n.jsx)(m.ResponsiveSection, {
              style: {
                backgroundColor: `${r}`,
                "--padding-top-bottom": "1.75rem"
              },
              className: "normalPaddingTopBottom largePaddingSides spacing",
              children: (0, n.jsxs)(m.ResponsiveSection, {
                className: "maxDescArea",
                style: {
                  "--desc-h3-margin-bottom": "var(--h-rem-size)"
                },
                children: [(0, n.jsx)("h3", {
                  style: {
                    "--color-span": `${c}`
                  },
                  children: a
                }), (0, n.jsx)("p", {
                  children: t
                })]
              })
            }) : null]
          })
        }
    },
    79584: (e, a, t) => {
      "use strict";
      t.d(a, {
        FormattedMessage: () => i.c,
        defineMessages: () => s.Os,
        getLocale: () => p,
        locales: () => f,
        useIntl: () => r.c,
        withIntl: () => w
      });
      var s = t(45052),
        i = t(3832),
        r = t(95688),
        n = t(51664),
        o = t(82936),
        c = t(53592);
      const d = (e, a) => {
          e && a ? document.cookie = `${e}=${a}; domain=${l()}; path=/;` : console.log(`Couldn't set cookie (${e}) to value (${a})`)
        },
        l = () => {
          const e = window.location.hostname.split(".");
          return e.slice(e.length - 2).join(".")
        },
        m = e => {
          const a = document.cookie.split("; "),
            t = `${e}=`,
            s = a.find((e => e.startsWith(t))),
            i = s?.substring(t.length, s.length);
          return i
        },
        u = [{
          label: "Deutsch",
          subdomain: "de",
          subdomaincom: "de",
          support: "de",
          iso: "de-DE"
        }, {
          label: "English",
          subdomain: "en-US",
          subdomaincom: "en",
          support: "us",
          iso: "en-US"
        }, {
          label: "Español",
          subdomain: "es",
          subdomaincom: "es",
          support: "es",
          iso: "es-ES"
        }, {
          label: "Español Latinoamérica",
          subdomain: "es-mx",
          subdomaincom: "mx",
          support: "es-mx",
          iso: "es-MX"
        }, {
          label: "Français",
          subdomain: "fr",
          subdomaincom: "fr",
          support: "fr",
          iso: "fr-FR"
        }, {
          label: "Italiano",
          subdomain: "it",
          subdomaincom: "it",
          support: "it",
          iso: "it-IT"
        }, {
          label: "日本語",
          subdomain: "ja",
          subdomaincom: "jp",
          support: "jp",
          iso: "ja-JP"
        }, {
          label: "한국어",
          subdomain: "ko",
          subdomaincom: "kr",
          support: "kr",
          iso: "ko-KR"
        }, {
          label: "Polski",
          subdomain: "pl",
          subdomaincom: "pl",
          support: "pl",
          iso: "pl-PL"
        }, {
          label: "Português do Brasil",
          subdomain: "pt",
          subdomaincom: "br",
          support: "br",
          iso: "pt-BR"
        }, {
          label: "Русский",
          subdomain: "ru",
          subdomaincom: "ru",
          support: "ru",
          iso: "ru-RU"
        }, {
          label: "繁體中文",
          subdomain: "zh",
          subdomaincom: "tw",
          support: "tw",
          iso: "zh-TW"
        }, {
          label: "简体中文",
          subdomain: "zh-cn",
          subdomaincom: "zh",
          support: "zh",
          iso: "zh-CN"
        }],
        f = u,
        g = u[1],
        p = () => {
          const {
            location: e
          } = window, a = (0, c.c)(), t = (e => {
            const a = f.map((e => e.subdomaincom)),
              t = e.pathname.substring(1).split("/"),
              s = "detect-locals" === t[0] ? 1 : 0;
            return -1 !== a.indexOf(t[s]) ? t[s] : null
          })(e), s = (e => {
            const a = e.search.substring(1).split("&").find((e => e.startsWith("lang")));
            return a?.split("=")[1]
          })(e), i = g;
          let r = i;
          const n = `rockstarweb_lang.${a.cookieIdentifier}`,
            o = m(n);
          r = a.currentSite?.site === c.U.www ? f.find((e => e.subdomaincom === s)) || f.find((e => e.subdomaincom === t)) || i : f.find((e => e.iso === o)) || i;
          const [l, u] = function(e, a) {
            let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            const s = m(e);
            return s && !t || d(e, a), [s, (i = e, e => {
              d(i, e)
            })];
            var i
          }(n, r.iso);
          return [r, u]
        };
      var b = t(95240);
      const h = e => {
        let {
          locales: a,
          lang: t,
          children: s
        } = e;
        const i = (0, n.useMemo)((() => function(e) {
            let [a, t] = e.split(/[-_]/);
            return t = t?.toLowerCase(), "cn" === t && (t = "hans"), a && t || (a = "en", t = "us"), [a, t]
          }(t)), [t]),
          r = (0, n.useMemo)((() => function(e, a) {
            return e?.[a] ?? {}
          }(a, i[1])), [t, a]);
        return (0, b.jsx)(o.c, {
          messages: r,
          locale: i[0],
          defaultLocale: "en",
          children: s
        }, i[0])
      };

      function w(e, a) {
        return t => {
          const [{
            iso: s
          }] = p();
          return (0, b.jsx)(h, {
            locales: a,
            lang: s,
            children: (0, b.jsx)(e, {
              ...t
            })
          })
        }
      }
      t(3061)
    },
    53592: (e, a, t) => {
      "use strict";
      t.d(a, {
        U: () => s,
        c: () => r
      });
      const s = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store"
        },
        i = [{
          id: "prod",
          sites: {
            www: "www",
            socialClub: "socialclub",
            support: "support",
            store: "store"
          },
          cookieIdentifier: "prod"
        }],
        r = () => {
          let e;
          const {
            location: a
          } = window, t = a.hostname.substring(0, a.hostname.indexOf(".rockstargames.com")), s = i.findIndex((a => Object.entries(a.sites).findIndex((a => {
            let [s, i] = a;
            return i === t && (e = {
              site: s,
              subDomain: i
            }, !0)
          })) >= 0)), r = i[s >= 0 ? s : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...r,
            currentSite: e
          }
        }
    },
    95660: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "TinaModulesList"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "type"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String"
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "orderBy"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String"
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "orderDirection"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String"
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "locale"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String"
                }
              }
            },
            directives: []
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "tinaModulesList"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "type"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "type"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "orderBy"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "orderBy"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "orderDirection"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "orderDirection"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "locale"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "locale"
                  }
                }
              }],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "results"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      alias: {
                        kind: "Name",
                        value: "id"
                      },
                      name: {
                        kind: "Name",
                        value: "id_hash"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "name"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "type"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "tina"
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "id"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "payload"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "variables"
                          },
                          arguments: [],
                          directives: [],
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "keys"
                              },
                              arguments: [],
                              directives: []
                            }]
                          }
                        }]
                      }
                    }]
                  }
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 495
        }
      };

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          t(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          t(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          t(e, a)
        }))
      }
      a.loc.source = {
        body: "query TinaModulesList(\n    $type: String\n    $orderBy: String\n    $orderDirection: String\n    $locale: String!\n) {\n    tinaModulesList(\n        type: $type\n        orderBy: $orderBy\n        orderDirection: $orderDirection\n        locale: $locale\n    ) {\n        results {\n            id: id_hash\n            name\n            type\n            tina {\n                id\n                payload\n                variables {\n                    keys\n                }\n            }\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function i(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      })), e.exports = a, e.exports.TinaModulesList = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [i(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var r = s[a] || new Set,
          n = new Set,
          o = new Set;
        for (r.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach((function(e) {
            n.has(e) || (n.add(e), (s[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return n.forEach((function(a) {
          var s = i(e, a);
          s && t.definitions.push(s)
        })), t
      }(a, "TinaModulesList")
    },
    38680: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "TinaModulesInfo"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "ids"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String"
                  }
                }
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "locale"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String"
                }
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "sync"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Boolean"
              }
            },
            defaultValue: {
              kind: "BooleanValue",
              value: !1
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "cache"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Boolean"
              }
            },
            defaultValue: {
              kind: "BooleanValue",
              value: !1
            },
            directives: []
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "tinaModulesInfo"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "ids"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "ids"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "locale"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "locale"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "cache"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "cache"
                  }
                }
              }],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  alias: {
                    kind: "Name",
                    value: "id"
                  },
                  name: {
                    kind: "Name",
                    value: "id_hash"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "title"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "title_doc"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "type"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "sync_hash"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "to"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "visible"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "children"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "title"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "id_hash"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "to"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "tina"
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "payload"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "variables"
                          },
                          arguments: [],
                          directives: [],
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "keys"
                              },
                              arguments: [],
                              directives: []
                            }]
                          }
                        }]
                      }
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "tina"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "payload"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "variables"
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "keys"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "_translations"
                          },
                          arguments: [],
                          directives: [{
                            kind: "Directive",
                            name: {
                              kind: "Name",
                              value: "include"
                            },
                            arguments: [{
                              kind: "Argument",
                              name: {
                                kind: "Name",
                                value: "if"
                              },
                              value: {
                                kind: "Variable",
                                name: {
                                  kind: "Name",
                                  value: "sync"
                                }
                              }
                            }]
                          }],
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "locale"
                              },
                              arguments: [],
                              directives: []
                            }, {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "keys"
                              },
                              arguments: [],
                              directives: []
                            }]
                          }
                        }]
                      }
                    }]
                  }
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 742
        }
      };

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          t(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          t(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          t(e, a)
        }))
      }
      a.loc.source = {
        body: "query TinaModulesInfo(\n    $ids: [String]!\n    $locale: String!\n    $sync: Boolean = false\n    $cache: Boolean = false\n) {\n    tinaModulesInfo(ids: $ids, locale: $locale, cache: $cache) {\n        id: id_hash\n        title\n        title_doc\n        type\n        sync_hash\n        to\n        visible\n        children {\n            title\n            id_hash\n            to\n            tina {\n                payload\n                variables {\n                    keys\n                }\n            }\n        }\n        tina {\n            payload\n            variables {\n                keys\n                _translations @include(if: $sync) {\n                    locale\n                    keys\n                }\n            }\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function i(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      })), e.exports = a, e.exports.TinaModulesInfo = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [i(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var r = s[a] || new Set,
          n = new Set,
          o = new Set;
        for (r.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach((function(e) {
            n.has(e) || (n.add(e), (s[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return n.forEach((function(a) {
          var s = i(e, a);
          s && t.definitions.push(s)
        })), t
      }(a, "TinaModulesInfo")
    },
    56644: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c050b43f15f34e2cd0592fad6dc48fd.svg"
    },
    17104: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1506c5bba61fa270f73c874e3d60a94f.svg"
    },
    65388: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3f9f55567df4006813f8bf50ad383ea0.svg"
    },
    39336: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6e8f340ded0fd6b0b0d434e8c6c8b75e.svg"
    },
    91232: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d6d2cb861c79506282c6d6cbf1170f81.svg"
    },
    23124: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f91e4753c491fb23c2b364f69480c9e.svg"
    },
    96201: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/205366df6706c3b367fb5ff4f26ab7f3.svg"
    },
    42100: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7563ed0414306d18d4f8401effcab31a.svg"
    },
    43844: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fd3b8222b81c51f8a6ae266c805c98a6.png"
    },
    26588: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f002a20c79ea2264ca52456194ef5b48.svg"
    }
  }
]);