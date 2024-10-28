! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "c1acac5c-2f98-4549-b37e-00c83caad70e", e._sentryDebugIdIdentifier = "sentry-dbid-c1acac5c-2f98-4549-b37e-00c83caad70e")
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
  [353, 6632], {
    26516: (e, a, r) => {
      var s = r(71403),
        t = Symbol.for("react.element"),
        c = Symbol.for("react.fragment"),
        o = Object.prototype.hasOwnProperty,
        l = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        d = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function i(e, a, r) {
        var s, c = {},
          i = null,
          n = null;
        for (s in void 0 !== r && (i = "" + r), void 0 !== a.key && (i = "" + a.key), void 0 !== a.ref && (n = a.ref), a) o.call(a, s) && !d.hasOwnProperty(s) && (c[s] = a[s]);
        if (e && e.defaultProps)
          for (s in a = e.defaultProps) void 0 === c[s] && (c[s] = a[s]);
        return {
          $$typeof: t,
          type: e,
          key: i,
          ref: n,
          props: c,
          _owner: l.current
        }
      }
      a.Fragment = c, a.jsx = i, a.jsxs = i
    },
    46632: (e, a, r) => {
      e.exports = r(26516)
    },
    85184: (e, a, r) => {
      r.r(a), r.d(a, {
        default: () => i
      });
      var s = r(60285),
        t = r(26371),
        c = r(74401),
        o = r(42756);
      const l = {
        title: "rockstargames-modules-core-newswire-articleca3619ec694712f8ef44a0673cc5cd2a",
        main: "rockstargames-modules-core-newswire-articleb604683b1b1cf1316f5cf35ce2fe4b31",
        breadcrumbs: "rockstargames-modules-core-newswire-articled1965b8d8252ea2aaac5bde77b3bcef0"
      };
      var d = r(46632);
      const i = (0, o.withTranslations)((e => {
        let {
          children: a,
          intro: r,
          image: i = {},
          style: n = {},
          t: m,
          className: f = "",
          variant: b = null
        } = e, u = {};
        void 0 !== n.toggleInvertSeparator && (u = {
          "--breadcrumb-separator-filter-invert": n.toggleInvertSeparator ? "invert(0)" : "invert(1)"
        });
        const g = (0, o.useNewswirePost)(),
          w = {},
          p = w?.meta?.title ?? g?.title,
          _ = w?.meta?.subtitle ?? g?.subtitle,
          y = _ ? (0, d.jsx)("h3", {
            "data-context": "newswire-subtitle",
            children: _
          }) : "",
          k = [{
            text: m("Newswire"),
            to: "/newswire"
          }],
          {
            src: h
          } = (0, c.useImageParser)(i),
          x = (0, d.jsxs)(d.Fragment, {
            children: [(0, d.jsx)("time", {
              dateTime: g.created,
              children: g.created_formatted
            }), r ? (0, d.jsx)(t.A, {
              item: r
            }) : "", a]
          });
        g?.primary_tags?.length && k.push({
          text: g.primary_tags[0].name,
          to: `/newswire?tag_id=${g.primary_tags[0].id}`
        }), g?.secondary_tags?.length && k.push({
          text: g.secondary_tags[0].name,
          to: `/newswire?tag_id=${g.secondary_tags[0].id}`
        });
        const j = (0, d.jsx)("div", {
          className: l.breadcrumbs,
          children: k.map((e => (0, d.jsx)(s.A, {
            to: e.to,
            children: e.text
          }, e.to)))
        });
        return h?.desktop && (n.background = `url(${h.desktop}) center/cover no-repeat`), (0, d.jsx)("div", {
          className: [f, l.title].join(" "),
          style: {
            ...n,
            ...u
          },
          children: "separated" === b ? (0, d.jsxs)(d.Fragment, {
            children: [(0, d.jsxs)("header", {
              "data-context": "title",
              children: [j, (0, d.jsx)("h1", {
                children: p
              })]
            }), (0, d.jsxs)("footer", {
              "data-context": "title",
              children: [y, x]
            })]
          }) : (0, d.jsxs)(d.Fragment, {
            children: [j, (0, d.jsxs)("div", {
              className: l.main,
              children: [(0, d.jsx)("h1", {
                children: p
              }), y]
            }), x]
          })
        })
      }))
    },
    26371: (e, a, r) => {
      r.d(a, {
        A: () => n
      });
      var s = r(74401),
        t = r(2024),
        c = r(63672),
        o = r(63303);
      const l = "rockstargames-modules-core-newswire-articlefa6885b15a718acb24f48949c52e31f1";
      var d = r(46632);
      const i = e => {
          let {
            to: a,
            children: r
          } = e;
          return a ? (0, d.jsx)("a", {
            href: a,
            target: "_blank",
            rel: "noreferrer",
            children: r
          }) : r
        },
        n = e => {
          let {
            item: a,
            className: r = ""
          } = e;
          return (0, d.jsxs)("div", {
            className: (0, s.classList)("rockstargames-modules-core-newswire-articleef9e6981551ac5ce250ebff8b18d7a29", r),
            children: [a.title && (0, d.jsx)(i, {
              to: a?.href ?? a?.to,
              children: (0, d.jsx)("h3", {
                children: a.title
              })
            }), Array.isArray(a?.description?.content) ? a.description.content?.map(((e, a) => e?.unorderedList ? (0, d.jsx)(c.A, {
              columns: e.unorderedList.columns ?? null,
              style: {
                "--unordered-list-padding": "var(--grid-gap-static-sm)",
                "--unordered-list-margin-bottom": ".5rem"
              },
              noImg: !0,
              list: e.unorderedList.list
            }, a) : e?.image ? (0, d.jsx)(t.A, {
              image: e.image,
              className: e?.className,
              ariaLabel: e.image?.ariaLabel
            }, a) : e?.separator ? (0, d.jsx)("div", {
              style: {
                margin: `${e.separator.spacing} 0`
              },
              children: (0, d.jsx)(o.A, {})
            }, a) : (0, d.jsx)("p", {
              children: (0, d.jsx)("span", {
                className: l,
                dangerouslySetInnerHTML: {
                  __html: e
                }
              })
            }, a))) : (0, d.jsx)("span", {
              className: l,
              dangerouslySetInnerHTML: {
                __html: a.description
              }
            })]
          })
        }
    },
    63303: (e, a, r) => {
      r.d(a, {
        A: () => c
      });
      const s = {
        hr: "rockstargames-modules-core-newswire-articlef5cd418ab2ef6a89df6c95d2caa06ba8",
        redLine: "rockstargames-modules-core-newswire-articlef8b44ef9bbd3e7feb22bf79cc009b16e",
        gtao: "rockstargames-modules-core-newswire-articlec442f7264db862a7cca6d9a56dacc205"
      };
      var t = r(46632);
      const c = e => {
        let {
          style: a,
          className: r = "",
          type: c
        } = e;
        return (0, t.jsx)("div", {
          style: a,
          className: [s.hr, s[c], r].join(" ")
        })
      }
    },
    63672: (e, a, r) => {
      r.d(a, {
        A: () => m
      });
      var s = r(71403),
        t = r(61631),
        c = r.n(t),
        o = r(74401),
        l = r(42756);
      const d = {
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
      var i = r(46632);
      const {
        sanitize: n
      } = c(), m = e => {
        let {
          list: a,
          string: r,
          starColor: t,
          style: c,
          className: m,
          game: f,
          noImg: b,
          columns: u,
          mobileColumns: g
        } = e;
        const [w, p] = (0, s.useState)(null), _ = r ? r.split("_#_") : a;
        return (0, s.useEffect)((() => {
          p(a)
        }), [a]), r || a ? u && w ? (0, i.jsx)("div", {
          className: d.grid,
          style: {
            "--unordered-list-grid-column": u,
            "--unordered-list-grid-column-mobile": g ?? u
          },
          children: (0, i.jsx)("ul", {
            style: (0, l.safeStyles)(c),
            className: (0, o.classList)(d.itemList, d.noImg, d[t], d[f]),
            children: w.map(((e, a) => (0, i.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: n(e.content)
              }
            }, a)))
          })
        }) : (0, i.jsx)("ul", {
          style: (0, l.safeStyles)(c),
          className: (0, o.classList)(d.itemList, d.custom, b ? d.noImg : "", t ? d[t] : "", f ? d[f] : "", m ?? ""),
          children: _.map(((e, a) => (0, i.jsx)("li", {
            dangerouslySetInnerHTML: {
              __html: n(e?.content ?? e)
            }
          }, a)))
        }) : null
      }
    },
    2024: (e, a, r) => {
      r.d(a, {
        A: () => d
      });
      var s = r(28089),
        t = r(42756);
      const c = "rockstargames-modules-core-newswire-articleeb64520e04e486931cd65dc5b3fa61e8";
      var o = r(46632);
      const l = e => {
          let {
            alt: a,
            className: s,
            src: c,
            style: l
          } = e;
          const [d, i] = (0, t.usePreloadImg)(c);
          let n = c;
          !1 === d && ("rockstargames-modules-core-newswire-articleee609f31f3685766122c2c6fc0ef0710" === s && (n = r(14572)), n = r(8820));
          const {
            width: m,
            height: f
          } = i, b = {
            "--aspect-ratio": Number.isNaN(m / f) ? "" : m / f,
            ...l
          };
          return (0, o.jsx)("img", {
            src: n,
            className: s ?? "",
            alt: a,
            style: b
          })
        },
        d = e => {
          let {
            className: a,
            style: d = {},
            image: i = {},
            imageStyle: n = {}
          } = e, {
            alt: m,
            src: f
          } = (0, s.useImageParser)(i);
          const {
            isMobile: b
          } = (0, t.useWindowResize)();
          f.desktop || f.mobile || (m = "", f = {
            mobile: r(14572),
            desktop: r(8820)
          });
          let u = i.frame ? `${i.frame} ${c}` : c;
          return (0, o.jsx)("div", {
            className: u,
            style: d,
            children: (0, o.jsx)(l, {
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
    8820: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8787df71c723ebe44f82fd13ed216e09.jpg"
    },
    14572: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61ae357c3bfbabb5d765e9a7c794d08f.png"
    }
  }
]);