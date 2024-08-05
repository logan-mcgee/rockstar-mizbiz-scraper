! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      r = (new Error).stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "970fe78b-ecb2-477f-801a-08a1b3d4dc36", e._sentryDebugIdIdentifier = "sentry-dbid-970fe78b-ecb2-477f-801a-08a1b3d4dc36")
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
  [353], {
    26516: (e, r, a) => {
      var s = a(71403),
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

      function i(e, r, a) {
        var s, c = {},
          i = null,
          n = null;
        for (s in void 0 !== a && (i = "" + a), void 0 !== r.key && (i = "" + r.key), void 0 !== r.ref && (n = r.ref), r) o.call(r, s) && !d.hasOwnProperty(s) && (c[s] = r[s]);
        if (e && e.defaultProps)
          for (s in r = e.defaultProps) void 0 === c[s] && (c[s] = r[s]);
        return {
          $$typeof: t,
          type: e,
          key: i,
          ref: n,
          props: c,
          _owner: l.current
        }
      }
      r.Fragment = c, r.jsx = i, r.jsxs = i
    },
    46632: (e, r, a) => {
      e.exports = a(26516)
    },
    85184: (e, r, a) => {
      a.r(r), a.d(r, {
        default: () => i
      });
      var s = a(60285),
        t = a(26371),
        c = a(74401),
        o = a(42756);
      const l = {
        title: "rockstargames-modules-core-newswire-articleca3619ec694712f8ef44a0673cc5cd2a",
        main: "rockstargames-modules-core-newswire-articleb604683b1b1cf1316f5cf35ce2fe4b31",
        breadcrumbs: "rockstargames-modules-core-newswire-articled1965b8d8252ea2aaac5bde77b3bcef0"
      };
      var d = a(46632);
      const i = (0, o.withTranslations)((e => {
        let {
          children: r,
          intro: a,
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
            }), a ? (0, d.jsx)(t.A, {
              item: a
            }) : "", r]
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
    26371: (e, r, a) => {
      a.d(r, {
        A: () => n
      });
      var s = a(74401),
        t = a(2024),
        c = a(63672),
        o = a(63303);
      const l = "rockstargames-modules-core-newswire-articlefa6885b15a718acb24f48949c52e31f1";
      var d = a(46632);
      const i = e => {
          let {
            to: r,
            children: a
          } = e;
          return r ? (0, d.jsx)("a", {
            href: r,
            target: "_blank",
            rel: "noreferrer",
            children: a
          }) : a
        },
        n = e => {
          let {
            item: r,
            className: a = ""
          } = e;
          return (0, d.jsxs)("div", {
            className: (0, s.classList)("rockstargames-modules-core-newswire-articleef9e6981551ac5ce250ebff8b18d7a29", a),
            children: [r.title && (0, d.jsx)(i, {
              to: r?.href ?? r?.to,
              children: (0, d.jsx)("h3", {
                children: r.title
              })
            }), Array.isArray(r?.description?.content) ? r.description.content?.map(((e, r) => e?.unorderedList ? (0, d.jsx)(c.A, {
              columns: e.unorderedList.columns ?? null,
              style: {
                "--unordered-list-padding": "var(--grid-gap-static-sm)",
                "--unordered-list-margin-bottom": ".5rem"
              },
              noImg: !0,
              list: e.unorderedList.list
            }, r) : e?.image ? (0, d.jsx)(t.A, {
              image: e.image,
              className: e?.className,
              ariaLabel: e.image?.ariaLabel
            }, r) : e?.separator ? (0, d.jsx)("div", {
              style: {
                margin: `${e.separator.spacing} 0`
              },
              children: (0, d.jsx)(o.A, {})
            }, r) : (0, d.jsx)("p", {
              children: (0, d.jsx)("span", {
                className: l,
                dangerouslySetInnerHTML: {
                  __html: e
                }
              })
            }, r))) : (0, d.jsx)("span", {
              className: l,
              dangerouslySetInnerHTML: {
                __html: r.description
              }
            })]
          })
        }
    },
    63303: (e, r, a) => {
      a.d(r, {
        A: () => c
      });
      const s = {
        hr: "rockstargames-modules-core-newswire-articlef5cd418ab2ef6a89df6c95d2caa06ba8",
        redLine: "rockstargames-modules-core-newswire-articlef8b44ef9bbd3e7feb22bf79cc009b16e",
        gtao: "rockstargames-modules-core-newswire-articlec442f7264db862a7cca6d9a56dacc205"
      };
      var t = a(46632);
      const c = e => {
        let {
          style: r,
          className: a = "",
          type: c
        } = e;
        return (0, t.jsx)("div", {
          style: r,
          className: [s.hr, s[c], a].join(" ")
        })
      }
    },
    63672: (e, r, a) => {
      a.d(r, {
        A: () => m
      });
      var s = a(71403),
        t = a(61631),
        c = a.n(t),
        o = a(74401),
        l = a(42756);
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
      var i = a(46632);
      const {
        sanitize: n
      } = c(), m = e => {
        let {
          list: r,
          string: a,
          starColor: t,
          style: c,
          className: m,
          game: f,
          noImg: b,
          columns: u,
          mobileColumns: g
        } = e;
        const [w, p] = (0, s.useState)(null), _ = a ? a.split("_#_") : r;
        return (0, s.useEffect)((() => {
          p(r)
        }), [r]), a || r ? u && w ? (0, i.jsx)("div", {
          className: d.grid,
          style: {
            "--unordered-list-grid-column": u,
            "--unordered-list-grid-column-mobile": g ?? u
          },
          children: (0, i.jsx)("ul", {
            style: (0, l.safeStyles)(c),
            className: (0, o.classList)(d.itemList, d.noImg, d[t], d[f]),
            children: w.map(((e, r) => (0, i.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: n(e.content)
              }
            }, r)))
          })
        }) : (0, i.jsx)("ul", {
          style: (0, l.safeStyles)(c),
          className: (0, o.classList)(d.itemList, d.custom, b ? d.noImg : "", t ? d[t] : "", f ? d[f] : "", m ?? ""),
          children: _.map(((e, r) => (0, i.jsx)("li", {
            dangerouslySetInnerHTML: {
              __html: n(e?.content ?? e)
            }
          }, r)))
        }) : null
      }
    },
    2024: (e, r, a) => {
      a.d(r, {
        A: () => d
      });
      var s = a(28089),
        t = a(42756);
      const c = "rockstargames-modules-core-newswire-articleeb64520e04e486931cd65dc5b3fa61e8";
      var o = a(46632);
      const l = e => {
          let {
            alt: r,
            className: s,
            src: c,
            style: l
          } = e;
          const [d, i] = (0, t.usePreloadImg)(c);
          let n = c;
          !1 === d && ("rockstargames-modules-core-newswire-articleee609f31f3685766122c2c6fc0ef0710" === s && (n = a(14572)), n = a(8820));
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
            alt: r,
            style: b
          })
        },
        d = e => {
          let {
            className: r,
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
          return f.desktop || f.mobile || (m = "", f = {
            mobile: a(14572),
            desktop: a(8820)
          }), (0, o.jsx)("div", {
            className: i.frame ? `${i.frame} ${c}` : c,
            style: d,
            children: (0, o.jsx)(l, {
              style: {
                ...n,
                ...i?.style
              },
              src: b ? f.mobile || f.desktop : f?.desktop || f?.mobile,
              alt: m,
              className: r
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