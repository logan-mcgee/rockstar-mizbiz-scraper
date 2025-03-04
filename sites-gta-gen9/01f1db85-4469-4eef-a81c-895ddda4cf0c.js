! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "01f1db85-4469-4eef-a81c-895ddda4cf0c", e._sentryDebugIdIdentifier = "sentry-dbid-01f1db85-4469-4eef-a81c-895ddda4cf0c")
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
  [9929], {
    72569: (e, a, t) => {
      t.r(a), t.d(a, {
        Avatar: () => g,
        Content: () => b,
        PlatformTag: () => u,
        PlatformTagSizes: () => d.YT,
        Platforms: () => d.lv,
        RankContent: () => k,
        Root: () => f,
        RpCategory: () => v,
        TextContent: () => x,
        TopRow: () => p,
        UserName: () => h
      });
      var s = t(62229),
        r = t(83919),
        n = t(57120),
        c = t(24036),
        o = t.n(c),
        d = t(86450),
        i = t(99244);
      const l = "rockstargames-sites-gta-gen9e0ba97fcc9fbe4c16227b9a8bdc5c3fc";
      var m = t(91029);
      const f = (0, s.forwardRef)((function(e, a) {
          let {
            children: t,
            className: s,
            testId: r,
            ...c
          } = e;
          const d = (0, n.v6)(c, {
            "data-testid": r,
            className: o()("rockstargames-sites-gta-gen9a3f574619eaaed735d4b4f12ca19e2f5", s)
          });
          return (0, m.jsx)("div", {
            ref: a,
            ...d,
            children: t
          })
        })),
        g = (0, s.forwardRef)((function(e, a) {
          let {
            src: r,
            alt: c,
            testId: o,
            ...d
          } = e;
          const [i, f] = (0, s.useState)(r), g = (0, n.v6)(d, {
            className: "rockstargames-sites-gta-gen9e8432011204626e5ba9a831ba5e17973",
            "data-testid": o
          });
          return r ? (0, m.jsx)("div", {
            ref: a,
            ...g,
            children: (0, m.jsx)("img", {
              className: l,
              src: i,
              alt: c,
              onError: () => f(t(82219))
            })
          }) : (0, m.jsx)("div", {
            ref: a,
            ...g,
            children: (0, m.jsx)("img", {
              className: l,
              src: t(82219),
              alt: c
            })
          })
        })),
        b = (0, s.forwardRef)((function(e, a) {
          let {
            asChild: t,
            testId: s,
            className: c,
            ...d
          } = e;
          const i = t ? r.DX : "div",
            l = (0, n.v6)(d, {
              className: o()("rockstargames-sites-gta-gen9f4f3d5f93b2fdeb7f5ec3600010bd78b", c),
              "data-testid": s
            });
          return (0, m.jsx)(i, {
            ref: a,
            ...l
          })
        })),
        p = (0, s.forwardRef)((function(e, a) {
          let {
            children: t,
            testId: s,
            ...r
          } = e;
          const c = (0, n.v6)(r, {
            className: "rockstargames-sites-gta-gen9ac8934b066828c816756ef16b6c46871",
            "data-testid": s
          });
          return (0, m.jsx)("div", {
            ref: a,
            ...c,
            children: t
          })
        })),
        u = e => {
          let {
            testId: a,
            ...t
          } = e;
          const s = (0, n.v6)(t, {
            "data-testid": a
          });
          return (0, m.jsx)(d.Ay, {
            ...s
          })
        },
        h = (0, s.forwardRef)((function(e, a) {
          let {
            children: t,
            testId: s,
            ...r
          } = e;
          const c = (0, n.v6)(r, {
            "data-testid": s
          });
          return (0, m.jsx)("div", {
            className: "rockstargames-sites-gta-gen9dd180f2ef1380a14588d7c8f87698381",
            "data-size": "small",
            ...c,
            ref: a,
            children: t
          })
        })),
        k = (0, s.forwardRef)((function(e, a) {
          let {
            testId: t,
            children: s,
            ...r
          } = e;
          const c = (0, n.v6)(r, {
            "data-testid": t
          });
          return (0, m.jsx)("div", {
            ...c,
            ref: a,
            children: s
          })
        })),
        v = e => {
          let {
            testId: a,
            ...t
          } = e;
          const s = (0, n.v6)(t, {
            "data-testid": a
          });
          return (0, m.jsx)(i.RpCategory, {
            ...s
          })
        },
        x = (0, s.forwardRef)((function(e, a) {
          let {
            asChild: t,
            children: s,
            testId: c,
            ...o
          } = e;
          const d = t ? r.DX : "div",
            i = (0, n.v6)(o, {
              className: "rockstargames-sites-gta-gen9d0405f7670b929c1148ae0cf1ef727c5",
              "data-testid": c
            });
          return (0, m.jsx)(d, {
            ref: a,
            ...i,
            children: s
          })
        }))
    },
    86450: (e, a, t) => {
      t.d(a, {
        YT: () => o,
        lv: () => d,
        Ay: () => i
      });
      var s = t(91029);
      let r = null,
        n = null,
        c = "";
      r = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/91b881fc47ab8f61e9d3fbb515272656.svg", n = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9822b4be8e173b12a152443a538ee613.svg", c = "PC Legacy";
      let o = function(e) {
          return e.small = "small", e.large = "large", e
        }({}),
        d = function(e) {
          return e.pc = "pc", e.pcAlt = "pcalt", e.ps4 = "ps4", e.ps5 = "ps5", e.xboxOne = "xboxone", e.xboxSeries = "xboxsx", e
        }({});
      const i = e => {
        let {
          tagSize: a,
          platform: t
        } = e;
        const {
          src: r,
          alt: n
        } = ((e, a) => {
          const t = a === o.small;
          switch (e) {
            case d.pc:
              return {
                src: t ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/91b881fc47ab8f61e9d3fbb515272656.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9822b4be8e173b12a152443a538ee613.svg", alt: "PC Legacy"
              };
            case d.pcAlt:
              return {
                src: t ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1b0c35912b602cae2ecdacb21a992ca7.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0f7ec13ed3fbe1c1389f38d189869ada.svg", alt: "PC Enhanced"
              };
            case d.ps4:
              return {
                src: t ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6054f77c4450b075b6059eda658a510d.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/941a1141a404ed211f7d23ed36ccee23.svg", alt: "PS4"
              };
            case d.ps5:
              return {
                src: t ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c577e2612120d70330b797e6ee5487d9.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/04d319f216248f3df7f9727df641b832.svg", alt: "PS5"
              };
            case d.xboxOne:
              return {
                src: t ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c8ee10e269f42d96c58c1eb016717e1.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3e18ef78074a128424a94ab6313dd332.svg", alt: "Xbox One"
              };
            case d.xboxSeries:
              return {
                src: t ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61f1cfebde0508725354fa6c2bdda0b4.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c91f19b5ea19868e280034220acf6740.svg", alt: "Xbox Series X|S"
              };
            default:
              return {
                src: "", alt: ""
              }
          }
        })(t, a);
        return (0, s.jsx)("img", {
          className: "rockstargames-sites-gta-gen9b0ff0045ed0326a46ca1e0867d2050c1",
          "data-testid": "platform-tag",
          "data-platform": t,
          "data-tag-size": a,
          src: r,
          alt: n
        })
      }
    },
    99244: (e, a, t) => {
      t.r(a), t.d(a, {
        RpCategory: () => l,
        rpCategoryTestIds: () => i
      });
      var s = t(62229),
        r = t(57120);
      var n = t(24036),
        c = t.n(n),
        o = t(91029);
      const d = e => e < 100 ? "#2d6eb9" : e > 99 && e < 500 ? "#b48261" : e > 499 && e < 750 ? "#9699a1" : "#D6B563",
        i = {
          RANK_VALUE: "rpCategory:rankValue"
        },
        l = (0, s.forwardRef)((function(e, a) {
          let {
            rank: t,
            className: s,
            alt: n,
            testId: l,
            ...m
          } = e;
          const f = d(t),
            g = (0, r.v6)(m, {
              className: c()("rockstargames-sites-gta-gen9f54750ef62f8600000c94f0caba85986", s),
              "data-testid": l
            });
          return (0, o.jsx)("div", {
            ref: a,
            ...g,
            children: (0, o.jsxs)("div", {
              "data-size": "small",
              ref: a,
              ...g,
              children: [(0, o.jsx)("svg", {
                role: "svg",
                "aria-label": n,
                className: "rockstargames-sites-gta-gen9a3beb1e9c88e2938879ea4df25b63eb1",
                "data-rank": d(t),
                "data-testid": "rp-icon",
                width: "44",
                height: "44",
                viewBox: "0 0 44 44",
                xmlns: "http://www.w3.org/2000/svg",
                children: (0, o.jsx)("path", {
                  d: "M21.8679 0C9.79195 0 0 9.79195 0 21.8679C0 33.9438 9.79195 43.7358 21.8679 43.7358C33.9438 43.7358 43.7358 33.9438 43.7358 21.8679C43.7358 9.79195 33.9438 0 21.8679 0ZM13.6796 17.4457H30.2506C30.4814 20.3007 30.4935 23.508 30.1048 26.9461H13.7889C13.4123 23.4958 13.4244 20.2885 13.6674 17.4457H13.6796ZM33.9681 17.4457H39.508C39.8603 18.8671 40.0668 20.3371 40.0668 21.8679C40.0668 23.6295 39.7995 25.3424 39.3379 26.9582H33.8102C34.1868 23.5201 34.1868 20.325 33.9681 17.4579V17.4457ZM38.208 13.8618H33.5793C33.1541 10.9947 32.5588 8.56492 31.9757 6.68185C34.6363 8.46773 36.7866 10.9582 38.208 13.8618ZM27.2863 4.42217C27.8208 5.73424 29.0721 9.09947 29.8132 13.8618H14.1169C14.9066 8.89294 16.2308 5.46697 16.7046 4.34928C18.3447 3.86333 20.0699 3.59605 21.8679 3.59605C23.7509 3.59605 25.5733 3.88762 27.2863 4.42217ZM12.0273 6.51177C11.432 8.40699 10.8003 10.8975 10.3629 13.8618H5.52772C6.99772 10.861 9.24525 8.32194 12.0273 6.51177ZM4.21564 17.4457H9.94989C9.71906 20.325 9.71906 23.508 10.0714 26.9461H4.38573C3.91192 25.3303 3.6568 23.6295 3.6568 21.8557C3.6568 20.325 3.86333 18.855 4.21564 17.4336V17.4457ZM5.84358 30.5421H10.5816C10.9704 32.7411 11.5049 35.0129 12.246 37.3576C9.57327 35.6811 7.35004 33.3364 5.84358 30.5421ZM16.8626 39.4229C15.672 36.3614 14.8459 33.385 14.3235 30.5421H29.5581C29.0235 33.3728 28.1974 36.3371 27.0068 39.3865C25.3789 39.8724 23.6538 40.1397 21.8679 40.1397C20.082 40.1397 18.4541 39.8846 16.8626 39.4229ZM31.6355 37.2604C32.3645 34.9522 32.9112 32.7168 33.2999 30.5421H37.88C36.3979 33.2756 34.2354 35.5839 31.6355 37.2604Z",
                  fill: f
                })
              }), (0, o.jsx)("span", {
                "data-testid": i.RANK_VALUE,
                children: t
              })]
            })
          })
        }))
    },
    79512: (e, a, t) => {
      t.d(a, {
        A: () => d
      });
      var s = t(9623);
      const r = {
        pillBtn: "rockstargames-sites-gta-gen9a76545929bba4f1522661c9f297ea3c5",
        selected: "rockstargames-sites-gta-gen9e5b12527bec7eae7fce9642c9827cc3b",
        plusButton: "rockstargames-sites-gta-gen9b35e9ba36ecaabe08c02c44808110761",
        small: "rockstargames-sites-gta-gen9b3ba679464048120f8440e7ae0d14086",
        btnText: "rockstargames-sites-gta-gen9e146813e6b911567a15379239351bb9f",
        btnTexticon: "rockstargames-sites-gta-gen9add785fa73d6a7f8cdf490add2819974",
        whiteBtn: "rockstargames-sites-gta-gen9d94aba4fb4bae812e14f8715816752c2",
        blackBtn: "rockstargames-sites-gta-gen9d3207a3907ff5e6cc1498c67d5562087",
        transparentBtn: "rockstargames-sites-gta-gen9d4515b6bf9a4c714239cac9e27932235",
        iconBtn: "rockstargames-sites-gta-gen9a305be36306fd7f0977b052ccab54910",
        link: "rockstargames-sites-gta-gen9a73b743df91203999c432aceb1093e62",
        xboxone: "rockstargames-sites-gta-gen9cadebea37980f01b56560143374013b3",
        xboxseriesxs: "rockstargames-sites-gta-gen9c28e2bcbd4ed4fc95b67860cb7033999",
        ps4: "rockstargames-sites-gta-gen9af1b302b53e77d0da20f92de2973fd29",
        ps5: "rockstargames-sites-gta-gen9b5164622a2b180ed2b04eab4d489763b",
        pc: "rockstargames-sites-gta-gen9c4a7b17bb99afb02a9f9b9b133be7844"
      };
      var n = t(91029);
      const c = e => {
          let {
            children: a,
            className: t,
            onClick: s,
            style: r,
            ariaLabel: c
          } = e;
          return (0, n.jsx)("button", {
            className: t,
            onClick: s,
            style: r,
            type: "button",
            "aria-label": c,
            children: a
          })
        },
        o = e => {
          let {
            children: a,
            className: t,
            onClick: r,
            style: c,
            to: o,
            ariaLabel: d
          } = e;
          return (0, n.jsx)(s.NavLink, {
            className: t,
            onClick: r,
            style: c,
            to: o,
            "aria-label": d,
            children: a
          })
        },
        d = e => {
          let {
            btnColor: a = "#fff",
            className: t = "",
            consoleBtn: s,
            icon: d = "",
            img: i,
            labelColor: l = "#000",
            onClick: m,
            secondText: f,
            size: g,
            text: b,
            to: p,
            type: u = "",
            ariaLabel: h
          } = e;
          const k = [r.plusButton, r[u] ?? "", r[g] ?? "", r[s] ?? "", t].join(" "),
            v = {
              "--hvr-color": a ?? l,
              "--hvr-bg-color": l ?? a,
              "--hvr-border-color": a ?? l
            },
            x = (0, n.jsxs)(n.Fragment, {
              children: [i ? (0, n.jsx)("img", {
                src: i,
                alt: ""
              }) : "", (0, n.jsxs)("div", {
                className: r.btnText,
                icon: d,
                children: [b, f ? (0, n.jsx)("span", {
                  children: f
                }) : ""]
              })]
            });
          if (p) {
            if (p.startsWith("http")) {
              const e = p.startsWith(document.location.origin) ? "_self" : "_blank";
              return (0, n.jsx)("span", {
                onClick: m,
                onKeyDown: m,
                className: k,
                role: "button",
                "aria-label": h,
                tabIndex: 0,
                children: (0, n.jsx)("a", {
                  href: p,
                  target: e,
                  children: x
                })
              })
            }
            return (0, n.jsx)(o, {
              className: k,
              onClick: m,
              style: {
                ...v
              },
              to: p,
              ariaLabel: h,
              children: x
            })
          }
          return (0, n.jsx)(c, {
            className: k,
            onClick: m,
            style: {
              ...v
            },
            ariaLabel: h,
            children: x
          })
        }
    },
    82219: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8271b67c2f5834856448ca1eef6dba3f.png"
    },
    83919: (e, a, t) => {
      t.d(a, {
        DX: () => c,
        xV: () => d,
        s6: () => b
      });
      var s = t(18751),
        r = t(62229);

      function n(...e) {
        return a => e.forEach((e => function(e, a) {
          "function" == typeof e ? e(a) : null != e && (e.current = a)
        }(e, a)))
      }
      const c = (0, r.forwardRef)(((e, a) => {
        const {
          children: t,
          ...n
        } = e, c = r.Children.toArray(t), d = c.find(i);
        if (d) {
          const e = d.props.children,
            t = c.map((a => a === d ? r.Children.count(e) > 1 ? r.Children.only(null) : (0, r.isValidElement)(e) ? e.props.children : null : a));
          return (0, r.createElement)(o, (0, s.A)({}, n, {
            ref: a
          }), (0, r.isValidElement)(e) ? (0, r.cloneElement)(e, void 0, t) : null)
        }
        return (0, r.createElement)(o, (0, s.A)({}, n, {
          ref: a
        }), t)
      }));
      c.displayName = "Slot";
      const o = (0, r.forwardRef)(((e, a) => {
        const {
          children: t,
          ...s
        } = e;
        return (0, r.isValidElement)(t) ? (0, r.cloneElement)(t, {
          ...l(s, t.props),
          ref: a ? n(a, t.ref) : t.ref
        }) : r.Children.count(t) > 1 ? r.Children.only(null) : null
      }));
      o.displayName = "SlotClone";
      const d = ({
        children: e
      }) => (0, r.createElement)(r.Fragment, null, e);

      function i(e) {
        return (0, r.isValidElement)(e) && e.type === d
      }

      function l(e, a) {
        const t = {
          ...a
        };
        for (const s in a) {
          const r = e[s],
            n = a[s];
          /^on[A-Z]/.test(s) ? r && n ? t[s] = (...e) => {
            n(...e), r(...e)
          } : r && (t[s] = r) : "style" === s ? t[s] = {
            ...r,
            ...n
          } : "className" === s && (t[s] = [r, n].filter(Boolean).join(" "))
        }
        return {
          ...e,
          ...t
        }
      }
      var m = t(91029);
      t(44853);
      const f = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, a) => {
          const t = (0, r.forwardRef)(((e, t) => {
            const {
              asChild: n,
              ...o
            } = e, d = n ? c : a;
            return (0, r.useEffect)((() => {
              window[Symbol.for("radix-ui")] = !0
            }), []), (0, r.createElement)(d, (0, s.A)({}, o, {
              ref: t
            }))
          }));
          return t.displayName = `Primitive.${a}`, {
            ...e,
            [a]: t
          }
        }), {}),
        g = (0, r.forwardRef)(((e, a) => (0, r.createElement)(f.span, (0, s.A)({}, e, {
          ref: a,
          style: {
            position: "absolute",
            border: 0,
            width: 1,
            height: 1,
            padding: 0,
            margin: -1,
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap",
            wordWrap: "normal",
            ...e.style
          }
        })))),
        b = ({
          enabled: e = !0,
          ...a
        }) => {
          const t = e ? g : r.Fragment;
          return (0, m.jsx)(t, {
            ...a
          })
        }
    },
    18751: (e, a, t) => {
      function s() {
        return s = Object.assign ? Object.assign.bind() : function(e) {
          for (var a = 1; a < arguments.length; a++) {
            var t = arguments[a];
            for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s])
          }
          return e
        }, s.apply(this, arguments)
      }
      t.d(a, {
        A: () => s
      })
    }
  }
]);