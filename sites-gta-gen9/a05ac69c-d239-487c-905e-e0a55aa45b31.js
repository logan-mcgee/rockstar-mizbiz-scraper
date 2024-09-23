! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "a05ac69c-d239-487c-905e-e0a55aa45b31", e._sentryDebugIdIdentifier = "sentry-dbid-a05ac69c-d239-487c-905e-e0a55aa45b31")
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
  [1450], {
    21450: (e, a, s) => {
      "use strict";
      s.d(a, {
        A: () => b
      });
      var t = s(71403),
        r = s(74401),
        c = s(81902),
        d = s(41136);
      const i = {
        deprecatedCarousel: "rockstargames-sites-gta-gen9eb5df7b3d51dffc4d993ca7abce4e944",
        "swiper-scrollbar-disabled": "rockstargames-sites-gta-gen9eb2dda6769a7c20a31e7996ff62e41f8",
        "swiper-horizontal": "rockstargames-sites-gta-gen9b11093de3cb4f18ea2d59b8d4d1db44c",
        "swiper-vertical": "rockstargames-sites-gta-gen9fa3209fdf995734a1aeeac2cc72cc1ea",
        renderedWithChildren: "rockstargames-sites-gta-gen9c9f15e74b3166cd0db40501fcc70e868",
        panorama: "rockstargames-sites-gta-gen9f2a7e77af5dff445e978fd575a567508",
        img: "rockstargames-sites-gta-gen9f1d3d54c266a20fa0cbe9c342b0d98da",
        hideMobile: "rockstargames-sites-gta-gen9e70d5eaa273e4a0a40ee62a308491810",
        hideLarge: "rockstargames-sites-gta-gen9bace2af6c822ba7b36b53923629cba0f",
        imageAreaBg: "rockstargames-sites-gta-gen9f4bb071e6dad07c75b78ea21269ca662",
        infinite_false: "rockstargames-sites-gta-gen9d6c3d175b843462bf23a1a1f3af6b095",
        track: "rockstargames-sites-gta-gen9b5ff781c4a96bf031e8e7f5e0c9af395",
        perico: "rockstargames-sites-gta-gen9bb97d296d17b7e801c6c0719a79463dd",
        dotsSlide: "rockstargames-sites-gta-gen9dd55a6f93254ed13542089c6f36e0048",
        siblings: "rockstargames-sites-gta-gen9a59cf4385528c371a13be9962b67131b",
        active: "rockstargames-sites-gta-gen9aa5e195e0c7c6336929553314d52a896",
        "swiper-preloader-spin": "rockstargames-sites-gta-gen9c05cc0faa8239c85cdc7d53c7e120e8e"
      };
      var n = s(26371),
        g = s(8999),
        l = s(46632);
      const o = e => {
          let {
            item: a
          } = e;
          return (0, l.jsxs)("div", {
            children: [(0, l.jsx)(g.A, {
              image: a?.image,
              badge: a?.badge ?? a?.image?.badge,
              badgeType: "badge3",
              role: a?.role ?? a?.image?.role,
              splitter: a?.splitter ?? a?.image?.splitter,
              type: a?.type,
              ariaLabel: a?.image?.ariaLabel ?? a.description,
              style: a?.style,
              className: (0, r.classList)(i.img, a?.className)
            }), (a?.title || a?.description) && (0, l.jsx)(n.A, {
              item: a
            })]
          })
        },
        m = e => {
          let {
            current: a,
            total: s
          } = e;
          return (0, l.jsx)("div", {
            className: "swiper-scrollbar",
            style: {
              "--current-slide": a,
              "--total-slides": s
            },
            children: (0, l.jsx)("div", {
              className: "swiper-scrollbar-drag"
            })
          })
        },
        b = e => {
          let {
            children: a,
            items: s = [],
            style: g = {},
            noInfiniteScroll: b = !1,
            className: f = "",
            renderTemplate: p = "standard",
            text: u,
            customSpaceBetween: k = null,
            centerSlides: h = !0,
            centeredSlidesBounds: y = !1
          } = e;
          const [x, j] = (0, t.useState)(0), _ = (0, t.useMemo)((() => a && Array.isArray(a) ? a.map((() => (0, d.A)())) : null), [a]);
          if (!(s && 0 !== s?.length || a)) return null;
          const v = {
            0: {
              spaceBetween: k ?? 16
            },
            1024: {
              spaceBetween: k ?? 18
            },
            1920: {
              spaceBetween: k ?? 20
            },
            2560: {
              spaceBetween: k ?? 22
            }
          };
          return (0, l.jsxs)("div", {
            className: (0, r.classList)(i.deprecatedCarousel, i[p], i[`infinite_${!b}`], a ? i.renderedWithChildren : "", f),
            style: g,
            children: [(0, l.jsxs)(c.RC, {
              loop: !b,
              grabCursor: !0,
              centeredSlides: h,
              centerInsufficientSlides: h,
              slidesPerView: "auto",
              speed: 700,
              breakpoints: v,
              onUpdate: () => j(0),
              onActiveIndexChange: e => j(e?.realIndex ?? 0),
              centeredSlidesBounds: y,
              children: [(0, l.jsx)("div", {
                className: i.trackWrapper,
                children: (0, l.jsxs)("div", {
                  className: i.track,
                  children: [s?.map((e => (0, l.jsx)(c.qr, {
                    children: (0, l.jsx)(o, {
                      item: e
                    })
                  }, e.key))), a && a.map(((e, a) => e && (0, l.jsx)(c.qr, {
                    children: e
                  }, _ && _[a])))]
                })
              }), (0, l.jsx)(m, {
                current: x,
                total: a ? a.length : s.length
              })]
            }), (u?.title || u?.description) && (0, l.jsx)(n.A, {
              item: u
            })]
          })
        }
    },
    26371: (e, a, s) => {
      "use strict";
      s.d(a, {
        A: () => l
      });
      var t = s(74401),
        r = s(2024),
        c = s(63672),
        d = s(63303);
      const i = "rockstargames-sites-gta-gen9fa6885b15a718acb24f48949c52e31f1";
      var n = s(46632);
      const g = e => {
          let {
            to: a,
            children: s
          } = e;
          return a ? (0, n.jsx)("a", {
            href: a,
            target: "_blank",
            rel: "noreferrer",
            children: s
          }) : s
        },
        l = e => {
          let {
            item: a,
            className: s = ""
          } = e;
          return (0, n.jsxs)("div", {
            className: (0, t.classList)("rockstargames-sites-gta-gen9ef9e6981551ac5ce250ebff8b18d7a29", s),
            children: [a.title && (0, n.jsx)(g, {
              to: a?.href ?? a?.to,
              children: (0, n.jsx)("h3", {
                children: a.title
              })
            }), Array.isArray(a?.description?.content) ? a.description.content?.map(((e, a) => e?.unorderedList ? (0, n.jsx)(c.A, {
              columns: e.unorderedList.columns ?? null,
              style: {
                "--unordered-list-padding": "var(--grid-gap-static-sm)",
                "--unordered-list-margin-bottom": ".5rem"
              },
              noImg: !0,
              list: e.unorderedList.list
            }, a) : e?.image ? (0, n.jsx)(r.A, {
              image: e.image,
              className: e?.className,
              ariaLabel: e.image?.ariaLabel
            }, a) : e?.separator ? (0, n.jsx)("div", {
              style: {
                margin: `${e.separator.spacing} 0`
              },
              children: (0, n.jsx)(d.A, {})
            }, a) : (0, n.jsx)("p", {
              children: (0, n.jsx)("span", {
                className: i,
                dangerouslySetInnerHTML: {
                  __html: e
                }
              })
            }, a))) : (0, n.jsx)("span", {
              className: i,
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
      var t = s(71403),
        r = s(64544),
        c = s(46632);
      const d = e => {
        let {
          children: a,
          ...s
        } = e;
        const [d, i] = (0, t.useState)(!1);
        return (0, c.jsx)(r.zb, {
          ...s,
          onReady: () => {
            document.fonts.ready.then((() => {
              i(!0)
            }))
          },
          children: a
        })
      }
    },
    52328: (e, a, s) => {
      "use strict";
      s.d(a, {
        A: () => n
      });
      var t = s(2024),
        r = s(62550);
      const c = {
        badge: "rockstargames-sites-gta-gen9e279e2cebfa338f34b03fd732416e836",
        badgeSizeUpdate: "rockstargames-sites-gta-gen9d7362a3e27ccaad9d2aadd2f31691340",
        badge2: "rockstargames-sites-gta-gen9d697f4a5f7c876d5e540a96da1e0ca3a",
        badge3: "rockstargames-sites-gta-gen9e1bba3cd4554abbb48a030af24bbada5"
      };
      var d = s(46632);
      const i = e => {
          let {
            wrapper: a,
            children: s,
            role: t,
            splitter: r
          } = e;
          return r || t ? a(s) : s
        },
        n = e => {
          let {
            badge: a,
            badgeType: n,
            role: g,
            splitter: l
          } = e;
          const o = [];
          l ? a.split(l).map(((e, a) => o.push(e))) : o.push(a);
          let m = 100;
          return 2 == o.length && o[1].length < 4 && "off" !== o[1].toLowerCase() && 45, (0, d.jsxs)(i, {
            splitter: l,
            role: g,
            wrapper: e => (0, d.jsx)("div", {
              className: `${c.badge} ${n?c[n]:""} `,
              children: e
            }),
            children: [(0, d.jsx)(d.Fragment, {
              children: g && (0, d.jsx)(t.A, {
                image: {
                  alt: g,
                  desktop: s(45628)(`./${g}.png`)
                }
              })
            }), (0, d.jsx)(r.A, {
              className: `${l||g?"":c.badge} ${n?c[n]:""}`,
              min: 8,
              max: 1e3,
              mode: l || g ? "single" : "multi",
              children: o[0]
            }), (0, d.jsx)(d.Fragment, {
              children: o.shift() && l && o.length >= 1 && (0, d.jsx)(r.A, {
                min: 8,
                max: 1e3,
                mode: "single",
                forceSingleModeWidth: !0,
                children: o.join(" ")
              })
            })]
          }, "badge-wrapper")
        }
    },
    8999: (e, a, s) => {
      "use strict";
      s.d(a, {
        A: () => g
      });
      var t = s(74401),
        r = s(42756),
        c = s(52328),
        d = s(2024);
      var i = s(46632);
      const n = e => {
          let {
            hero: a,
            children: s
          } = e;
          return a ? (0, i.jsx)("div", {
            className: "rockstargames-sites-gta-gen9efc561ad30f5dfe75c79d939737650dc",
            children: s
          }) : s
        },
        g = e => {
          let {
            badge: a = null,
            badgeType: s,
            discountTxt: g,
            splitter: l,
            image: o,
            style: m,
            className: b = "",
            attributes: f = {},
            role: p,
            hero: u = !1
          } = e;
          return (0, i.jsx)(n, {
            hero: u,
            children: (0, i.jsx)("figure", {
              children: (0, i.jsxs)("div", {
                className: (0, t.classList)("rockstargames-sites-gta-gen9cab262c98c7f5bb3e982d9b075b3c2a8", u ? "rockstargames-sites-gta-gen9cefd6d8859aeec1057caed28caa160c3" : "", f?.hiddenMobile ? "hiddenMobile" : "", f?.hiddenLarge ? "hiddenLarge" : "", f?.className, b),
                style: (0, r.safeStyles)({
                  ...m,
                  ...f?.style
                }),
                ...f,
                children: [(0, i.jsx)(d.A, {
                  image: o,
                  className: b
                }), (o?.badge || o?.discountTxt || a || g) && (0, i.jsx)(c.A, {
                  badge: o?.discountTxt ?? o?.badge ?? a ?? g,
                  badgeType: s,
                  splitter: o?.splitter ?? l,
                  role: o?.role ?? p
                }), o?.caption && (0, i.jsx)("figcaption", {
                  dangerouslySetInnerHTML: {
                    __html: o.caption
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
        A: () => c
      });
      const t = {
        hr: "rockstargames-sites-gta-gen9f5cd418ab2ef6a89df6c95d2caa06ba8",
        redLine: "rockstargames-sites-gta-gen9f8b44ef9bbd3e7feb22bf79cc009b16e",
        gtao: "rockstargames-sites-gta-gen9c442f7264db862a7cca6d9a56dacc205"
      };
      var r = s(46632);
      const c = e => {
        let {
          style: a,
          className: s = "",
          type: c
        } = e;
        return (0, r.jsx)("div", {
          style: a,
          className: [t.hr, t[c], s].join(" ")
        })
      }
    },
    63672: (e, a, s) => {
      "use strict";
      s.d(a, {
        A: () => o
      });
      var t = s(71403),
        r = s(72956),
        c = s.n(r),
        d = s(74401),
        i = s(42756);
      const n = {
        pillBtn: "rockstargames-sites-gta-gen9a89792e50dfe5470a67f42b9e143c824",
        selected: "rockstargames-sites-gta-gen9bcce8ac50552b225f30d185d876a3e14",
        grid: "rockstargames-sites-gta-gen9ac295ed5b9cb441ed17843b34e83ea17",
        itemList: "rockstargames-sites-gta-gen9caf5589ddeca00ed09213e547674b1f3",
        gtaplus: "rockstargames-sites-gta-gen9b291112adcf994a0f6acadd86f73b78a",
        rdo: "rockstargames-sites-gta-gen9d146e8f862baefb60e91be5aa3c17b6e",
        noImg: "rockstargames-sites-gta-gen9ba9b5ae08642b0213a3f04b3db9a9dac",
        gtao: "rockstargames-sites-gta-gen9b6f2bdfd6a1d57b7ce840f7a56cc510b",
        custom: "rockstargames-sites-gta-gen9af89164a043648d1464686ff13363ee4",
        yellow: "rockstargames-sites-gta-gen9d244b17b74fc46269e8a106a99ab0f87",
        hotPink: "rockstargames-sites-gta-gen9d90b28503318563cfd6059146d1fb6b6",
        red: "rockstargames-sites-gta-gen9c3f8a8706901874d906f94c626be3c1e",
        turquoise: "rockstargames-sites-gta-gen9fe2ec36e92e2bb4d453fdc4b05966418",
        purple: "rockstargames-sites-gta-gen9f5f7baf5b56f5b2ada053a93392bbf7a",
        teal: "rockstargames-sites-gta-gen9f4a229f41cd20f181d810c311416e3f2",
        blue: "rockstargames-sites-gta-gen9f6f689d687bcd482ea2cd2990fd66878",
        green: "rockstargames-sites-gta-gen9ab270f1b4d3ad43e7bc51393b7c5c089",
        darkRed: "rockstargames-sites-gta-gen9dc24ce78d962f3472b06955bf8855103",
        darkBlue: "rockstargames-sites-gta-gen9b354493baac7389b21b511009f287428",
        goldenrod: "rockstargames-sites-gta-gen9e4a078efee11d24c64e93ccf0744a33f",
        skull: "rockstargames-sites-gta-gen9d4581a495de14e6762bb15debe5bb810"
      };
      var g = s(46632);
      const {
        sanitize: l
      } = c(), o = e => {
        let {
          list: a,
          string: s,
          starColor: r,
          style: c,
          className: o,
          game: m,
          noImg: b,
          columns: f,
          mobileColumns: p
        } = e;
        const [u, k] = (0, t.useState)(null), h = s ? s.split("_#_") : a;
        return (0, t.useEffect)((() => {
          k(a)
        }), [a]), s || a ? f && u ? (0, g.jsx)("div", {
          className: n.grid,
          style: {
            "--unordered-list-grid-column": f,
            "--unordered-list-grid-column-mobile": p ?? f
          },
          children: (0, g.jsx)("ul", {
            style: (0, i.safeStyles)(c),
            className: (0, d.classList)(n.itemList, n.noImg, n[r], n[m]),
            children: u.map(((e, a) => (0, g.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: l(e.content)
              }
            }, a)))
          })
        }) : (0, g.jsx)("ul", {
          style: (0, i.safeStyles)(c),
          className: (0, d.classList)(n.itemList, n.custom, b ? n.noImg : "", r ? n[r] : "", m ? n[m] : "", o ?? ""),
          children: h.map(((e, a) => (0, g.jsx)("li", {
            dangerouslySetInnerHTML: {
              __html: l(e?.content ?? e)
            }
          }, a)))
        }) : null
      }
    },
    2024: (e, a, s) => {
      "use strict";
      s.d(a, {
        A: () => n
      });
      var t = s(28089),
        r = s(42756);
      const c = "rockstargames-sites-gta-gen9eb64520e04e486931cd65dc5b3fa61e8";
      var d = s(46632);
      const i = e => {
          let {
            alt: a,
            className: t,
            src: c,
            style: i
          } = e;
          const [n, g] = (0, r.usePreloadImg)(c);
          let l = c;
          !1 === n && ("rockstargames-sites-gta-gen9ee609f31f3685766122c2c6fc0ef0710" === t && (l = s(14572)), l = s(8820));
          const {
            width: o,
            height: m
          } = g, b = {
            "--aspect-ratio": Number.isNaN(o / m) ? "" : o / m,
            ...i
          };
          return (0, d.jsx)("img", {
            src: l,
            className: t ?? "",
            alt: a,
            style: b
          })
        },
        n = e => {
          let {
            className: a,
            style: n = {},
            image: g = {},
            imageStyle: l = {}
          } = e, {
            alt: o,
            src: m
          } = (0, t.useImageParser)(g);
          const {
            isMobile: b
          } = (0, r.useWindowResize)();
          return m.desktop || m.mobile || (o = "", m = {
            mobile: s(14572),
            desktop: s(8820)
          }), (0, d.jsx)("div", {
            className: g.frame ? `${g.frame} ${c}` : c,
            style: n,
            children: (0, d.jsx)(i, {
              style: {
                ...l,
                ...g?.style
              },
              src: b ? m.mobile || m.desktop : m?.desktop || m?.mobile,
              alt: o,
              className: a
            })
          })
        }
    },
    45628: (e, a, s) => {
      var t = {
        "./bounty.png": 89177,
        "./collector.png": 3787,
        "./moonshiner.png": 14022,
        "./naturalist.png": 34629,
        "./trader.png": 22864
      };

      function r(e) {
        var a = c(e);
        return s(a)
      }

      function c(e) {
        if (!s.o(t, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return t[e]
      }
      r.keys = function() {
        return Object.keys(t)
      }, r.resolve = c, e.exports = r, r.id = 45628
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