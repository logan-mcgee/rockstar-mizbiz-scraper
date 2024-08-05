! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "24f1d98c-d75f-492a-9a6d-41b2d37105be", e._sentryDebugIdIdentifier = "sentry-dbid-24f1d98c-d75f-492a-9a6d-41b2d37105be")
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
  [1450], {
    21450: (e, a, s) => {
      "use strict";
      s.d(a, {
        A: () => b
      });
      var r = s(71403),
        c = s(74401),
        t = s(81902),
        d = s(41136);
      const l = {
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
      var o = s(26371),
        i = s(8999),
        n = s(46632);
      const m = e => {
          let {
            item: a
          } = e;
          return (0, n.jsxs)("div", {
            children: [(0, n.jsx)(i.A, {
              image: a?.image,
              badge: a?.badge ?? a?.image?.badge,
              badgeType: "badge3",
              role: a?.role ?? a?.image?.role,
              splitter: a?.splitter ?? a?.image?.splitter,
              type: a?.type,
              ariaLabel: a?.image?.ariaLabel ?? a.description,
              style: a?.style,
              className: (0, c.classList)(l.img, a?.className)
            }), (a?.title || a?.description) && (0, n.jsx)(o.A, {
              item: a
            })]
          })
        },
        f = e => {
          let {
            current: a,
            total: s
          } = e;
          return (0, n.jsx)("div", {
            className: "swiper-scrollbar",
            style: {
              "--current-slide": a,
              "--total-slides": s
            },
            children: (0, n.jsx)("div", {
              className: "swiper-scrollbar-drag"
            })
          })
        },
        b = e => {
          let {
            children: a,
            items: s = [],
            style: i = {},
            noInfiniteScroll: b = !1,
            className: g = "",
            renderTemplate: u = "standard",
            text: w,
            customSpaceBetween: p = null,
            centerSlides: k = !0,
            centeredSlidesBounds: h = !1
          } = e;
          const [y, x] = (0, r.useState)(0), _ = (0, r.useMemo)((() => a && Array.isArray(a) ? a.map((() => (0, d.A)())) : null), [a]);
          if (!(s && 0 !== s?.length || a)) return null;
          const j = {
            0: {
              spaceBetween: p ?? 16
            },
            1024: {
              spaceBetween: p ?? 18
            },
            1920: {
              spaceBetween: p ?? 20
            },
            2560: {
              spaceBetween: p ?? 22
            }
          };
          return (0, n.jsxs)("div", {
            className: (0, c.classList)(l.deprecatedCarousel, l[u], l[`infinite_${!b}`], a ? l.renderedWithChildren : "", g),
            style: i,
            children: [(0, n.jsxs)(t.RC, {
              loop: !b,
              grabCursor: !0,
              centeredSlides: k,
              centerInsufficientSlides: k,
              slidesPerView: "auto",
              speed: 700,
              breakpoints: j,
              onUpdate: () => x(0),
              onActiveIndexChange: e => x(e?.realIndex ?? 0),
              centeredSlidesBounds: h,
              children: [(0, n.jsx)("div", {
                className: l.trackWrapper,
                children: (0, n.jsxs)("div", {
                  className: l.track,
                  children: [s?.map((e => (0, n.jsx)(t.qr, {
                    children: (0, n.jsx)(m, {
                      item: e
                    })
                  }, e.key))), a && a.map(((e, a) => e && (0, n.jsx)(t.qr, {
                    children: e
                  }, _ && _[a])))]
                })
              }), (0, n.jsx)(f, {
                current: y,
                total: a ? a.length : s.length
              })]
            }), (w?.title || w?.description) && (0, n.jsx)(o.A, {
              item: w
            })]
          })
        }
    },
    26371: (e, a, s) => {
      "use strict";
      s.d(a, {
        A: () => n
      });
      var r = s(74401),
        c = s(2024),
        t = s(63672),
        d = s(63303);
      const l = "rockstargames-modules-core-newswire-articlefa6885b15a718acb24f48949c52e31f1";
      var o = s(46632);
      const i = e => {
          let {
            to: a,
            children: s
          } = e;
          return a ? (0, o.jsx)("a", {
            href: a,
            target: "_blank",
            rel: "noreferrer",
            children: s
          }) : s
        },
        n = e => {
          let {
            item: a,
            className: s = ""
          } = e;
          return (0, o.jsxs)("div", {
            className: (0, r.classList)("rockstargames-modules-core-newswire-articleef9e6981551ac5ce250ebff8b18d7a29", s),
            children: [a.title && (0, o.jsx)(i, {
              to: a?.href ?? a?.to,
              children: (0, o.jsx)("h3", {
                children: a.title
              })
            }), Array.isArray(a?.description?.content) ? a.description.content?.map(((e, a) => e?.unorderedList ? (0, o.jsx)(t.A, {
              columns: e.unorderedList.columns ?? null,
              style: {
                "--unordered-list-padding": "var(--grid-gap-static-sm)",
                "--unordered-list-margin-bottom": ".5rem"
              },
              noImg: !0,
              list: e.unorderedList.list
            }, a) : e?.image ? (0, o.jsx)(c.A, {
              image: e.image,
              className: e?.className,
              ariaLabel: e.image?.ariaLabel
            }, a) : e?.separator ? (0, o.jsx)("div", {
              style: {
                margin: `${e.separator.spacing} 0`
              },
              children: (0, o.jsx)(d.A, {})
            }, a) : (0, o.jsx)("p", {
              children: (0, o.jsx)("span", {
                className: l,
                dangerouslySetInnerHTML: {
                  __html: e
                }
              })
            }, a))) : (0, o.jsx)("span", {
              className: l,
              dangerouslySetInnerHTML: {
                __html: a.description
              }
            })]
          })
        }
    },
    62550: (e, a, s) => {
      "use strict";
      s.d(a, {
        A: () => d
      });
      var r = s(71403),
        c = s(64544),
        t = s(46632);
      const d = e => {
        let {
          children: a,
          ...s
        } = e;
        const [d, l] = (0, r.useState)(!1);
        return (0, t.jsx)(c.zb, {
          ...s,
          onReady: () => {
            document.fonts.ready.then((() => {
              l(!0)
            }))
          },
          children: a
        })
      }
    },
    52328: (e, a, s) => {
      "use strict";
      s.d(a, {
        A: () => o
      });
      var r = s(2024),
        c = s(62550);
      const t = {
        badge: "rockstargames-modules-core-newswire-articlee279e2cebfa338f34b03fd732416e836",
        badgeSizeUpdate: "rockstargames-modules-core-newswire-articled7362a3e27ccaad9d2aadd2f31691340",
        badge2: "rockstargames-modules-core-newswire-articled697f4a5f7c876d5e540a96da1e0ca3a",
        badge3: "rockstargames-modules-core-newswire-articlee1bba3cd4554abbb48a030af24bbada5"
      };
      var d = s(46632);
      const l = e => {
          let {
            wrapper: a,
            children: s,
            role: r,
            splitter: c
          } = e;
          return c || r ? a(s) : s
        },
        o = e => {
          let {
            badge: a,
            badgeType: o,
            role: i,
            splitter: n
          } = e;
          const m = [];
          n ? a.split(n).map(((e, a) => m.push(e))) : m.push(a);
          let f = 100;
          return 2 == m.length && m[1].length < 4 && "off" !== m[1].toLowerCase() && 45, (0, d.jsxs)(l, {
            splitter: n,
            role: i,
            wrapper: e => (0, d.jsx)("div", {
              className: `${t.badge} ${o?t[o]:""} `,
              children: e
            }),
            children: [(0, d.jsx)(d.Fragment, {
              children: i && (0, d.jsx)(r.A, {
                image: {
                  alt: i,
                  desktop: s(45628)(`./${i}.png`)
                }
              })
            }), (0, d.jsx)(c.A, {
              className: `${n||i?"":t.badge} ${o?t[o]:""}`,
              min: 8,
              max: 1e3,
              mode: n || i ? "single" : "multi",
              children: m[0]
            }), (0, d.jsx)(d.Fragment, {
              children: m.shift() && n && m.length >= 1 && (0, d.jsx)(c.A, {
                min: 8,
                max: 1e3,
                mode: "single",
                forceSingleModeWidth: !0,
                children: m.join(" ")
              })
            })]
          }, "badge-wrapper")
        }
    },
    8999: (e, a, s) => {
      "use strict";
      s.d(a, {
        A: () => i
      });
      var r = s(74401),
        c = s(42756),
        t = s(52328),
        d = s(2024);
      var l = s(46632);
      const o = e => {
          let {
            hero: a,
            children: s
          } = e;
          return a ? (0, l.jsx)("div", {
            className: "rockstargames-modules-core-newswire-articleefc561ad30f5dfe75c79d939737650dc",
            children: s
          }) : s
        },
        i = e => {
          let {
            badge: a = null,
            badgeType: s,
            discountTxt: i,
            splitter: n,
            image: m,
            style: f,
            className: b = "",
            attributes: g = {},
            role: u,
            hero: w = !1
          } = e;
          return (0, l.jsx)(o, {
            hero: w,
            children: (0, l.jsx)("figure", {
              children: (0, l.jsxs)("div", {
                className: (0, r.classList)("rockstargames-modules-core-newswire-articlecab262c98c7f5bb3e982d9b075b3c2a8", w ? "rockstargames-modules-core-newswire-articlecefd6d8859aeec1057caed28caa160c3" : "", g?.hiddenMobile ? "hiddenMobile" : "", g?.hiddenLarge ? "hiddenLarge" : "", g?.className, b),
                style: (0, c.safeStyles)({
                  ...f,
                  ...g?.style
                }),
                ...g,
                children: [(0, l.jsx)(d.A, {
                  image: m,
                  className: b
                }), (m?.badge || m?.discountTxt || a || i) && (0, l.jsx)(t.A, {
                  badge: m?.discountTxt ?? m?.badge ?? a ?? i,
                  badgeType: s,
                  splitter: m?.splitter ?? n,
                  role: m?.role ?? u
                }), m?.caption && (0, l.jsx)("figcaption", {
                  dangerouslySetInnerHTML: {
                    __html: m.caption
                  }
                })]
              })
            })
          })
        }
    },
    63303: (e, a, s) => {
      "use strict";
      s.d(a, {
        A: () => t
      });
      const r = {
        hr: "rockstargames-modules-core-newswire-articlef5cd418ab2ef6a89df6c95d2caa06ba8",
        redLine: "rockstargames-modules-core-newswire-articlef8b44ef9bbd3e7feb22bf79cc009b16e",
        gtao: "rockstargames-modules-core-newswire-articlec442f7264db862a7cca6d9a56dacc205"
      };
      var c = s(46632);
      const t = e => {
        let {
          style: a,
          className: s = "",
          type: t
        } = e;
        return (0, c.jsx)("div", {
          style: a,
          className: [r.hr, r[t], s].join(" ")
        })
      }
    },
    63672: (e, a, s) => {
      "use strict";
      s.d(a, {
        A: () => m
      });
      var r = s(71403),
        c = s(61631),
        t = s.n(c),
        d = s(74401),
        l = s(42756);
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
      var i = s(46632);
      const {
        sanitize: n
      } = t(), m = e => {
        let {
          list: a,
          string: s,
          starColor: c,
          style: t,
          className: m,
          game: f,
          noImg: b,
          columns: g,
          mobileColumns: u
        } = e;
        const [w, p] = (0, r.useState)(null), k = s ? s.split("_#_") : a;
        return (0, r.useEffect)((() => {
          p(a)
        }), [a]), s || a ? g && w ? (0, i.jsx)("div", {
          className: o.grid,
          style: {
            "--unordered-list-grid-column": g,
            "--unordered-list-grid-column-mobile": u ?? g
          },
          children: (0, i.jsx)("ul", {
            style: (0, l.safeStyles)(t),
            className: (0, d.classList)(o.itemList, o.noImg, o[c], o[f]),
            children: w.map(((e, a) => (0, i.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: n(e.content)
              }
            }, a)))
          })
        }) : (0, i.jsx)("ul", {
          style: (0, l.safeStyles)(t),
          className: (0, d.classList)(o.itemList, o.custom, b ? o.noImg : "", c ? o[c] : "", f ? o[f] : "", m ?? ""),
          children: k.map(((e, a) => (0, i.jsx)("li", {
            dangerouslySetInnerHTML: {
              __html: n(e?.content ?? e)
            }
          }, a)))
        }) : null
      }
    },
    2024: (e, a, s) => {
      "use strict";
      s.d(a, {
        A: () => o
      });
      var r = s(28089),
        c = s(42756);
      const t = "rockstargames-modules-core-newswire-articleeb64520e04e486931cd65dc5b3fa61e8";
      var d = s(46632);
      const l = e => {
          let {
            alt: a,
            className: r,
            src: t,
            style: l
          } = e;
          const [o, i] = (0, c.usePreloadImg)(t);
          let n = t;
          !1 === o && ("rockstargames-modules-core-newswire-articleee609f31f3685766122c2c6fc0ef0710" === r && (n = s(14572)), n = s(8820));
          const {
            width: m,
            height: f
          } = i, b = {
            "--aspect-ratio": Number.isNaN(m / f) ? "" : m / f,
            ...l
          };
          return (0, d.jsx)("img", {
            src: n,
            className: r ?? "",
            alt: a,
            style: b
          })
        },
        o = e => {
          let {
            className: a,
            style: o = {},
            image: i = {},
            imageStyle: n = {}
          } = e, {
            alt: m,
            src: f
          } = (0, r.useImageParser)(i);
          const {
            isMobile: b
          } = (0, c.useWindowResize)();
          return f.desktop || f.mobile || (m = "", f = {
            mobile: s(14572),
            desktop: s(8820)
          }), (0, d.jsx)("div", {
            className: i.frame ? `${i.frame} ${t}` : t,
            style: o,
            children: (0, d.jsx)(l, {
              style: {
                ...n,
                ...i?.style
              },
              src: b ? f.mobile || f.desktop : f?.desktop || f?.mobile,
              alt: m,
              className: a
            })
          })
        }
    },
    45628: (e, a, s) => {
      var r = {
        "./bounty.png": 89177,
        "./collector.png": 3787,
        "./moonshiner.png": 14022,
        "./naturalist.png": 34629,
        "./trader.png": 22864
      };

      function c(e) {
        var a = t(e);
        return s(a)
      }

      function t(e) {
        if (!s.o(r, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return r[e]
      }
      c.keys = function() {
        return Object.keys(r)
      }, c.resolve = t, e.exports = c, c.id = 45628
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