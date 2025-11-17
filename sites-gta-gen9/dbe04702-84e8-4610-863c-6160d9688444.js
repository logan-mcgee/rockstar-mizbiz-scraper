try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "dbe04702-84e8-4610-863c-6160d9688444", e._sentryDebugIdIdentifier = "sentry-dbid-dbe04702-84e8-4610-863c-6160d9688444")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-gta-gen9",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [998, 3480], {
    91: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        Avatar: () => g,
        Content: () => p,
        PlatformTag: () => b,
        PlatformTagSizes: () => i.YT,
        Platforms: () => i.lv,
        RankContent: () => v,
        Root: () => f,
        RpCategory: () => h,
        TextContent: () => x,
        TopRow: () => u,
        UserName: () => k
      });
      var s = a(42295),
        r = a(62229),
        n = a(32067),
        o = a(75526),
        c = a(4572),
        d = a.n(c),
        i = a(22230),
        m = a(95386);
      const l = "rockstargames-sites-gta-gen9b2d75ee6d468c7fde9ad28ba90ca2804",
        f = (0, r.forwardRef)(function({
          children: e,
          className: t,
          testId: a,
          ...r
        }, n) {
          const c = (0, o.v6)(r, {
            "data-testid": a,
            className: d()("rockstargames-sites-gta-gen9d738b88fa09e0960678501900af6dae1", t)
          });
          return (0, s.jsx)("div", {
            ref: n,
            ...c,
            children: e
          })
        }),
        g = (0, r.forwardRef)(function({
          src: e,
          alt: t,
          testId: n,
          ...c
        }, d) {
          const [i, m] = (0, r.useState)(e), f = (0, o.v6)(c, {
            className: "rockstargames-sites-gta-gen9a0e1daf7fc3c029353d5ef13f291348f",
            "data-testid": n
          });
          return e ? (0, s.jsx)("div", {
            ref: d,
            ...f,
            children: (0, s.jsx)("img", {
              className: l,
              src: i,
              alt: t,
              onError: () => m(a(14804))
            })
          }) : (0, s.jsx)("div", {
            ref: d,
            ...f,
            children: (0, s.jsx)("img", {
              className: l,
              src: a(14804),
              alt: t
            })
          })
        }),
        p = (0, r.forwardRef)(function({
          asChild: e,
          testId: t,
          className: a,
          ...r
        }, c) {
          const i = e ? n.DX : "div",
            m = (0, o.v6)(r, {
              className: d()("rockstargames-sites-gta-gen9fbe57172570573357e040787d9307835", a),
              "data-testid": t
            });
          return (0, s.jsx)(i, {
            ref: c,
            ...m
          })
        }),
        u = (0, r.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, r) {
          const n = (0, o.v6)(a, {
            className: "rockstargames-sites-gta-gen9d9b917b7fb3a2b20d4af0d526ddbb8ff",
            "data-testid": t
          });
          return (0, s.jsx)("div", {
            ref: r,
            ...n,
            children: e
          })
        }),
        b = ({
          testId: e,
          ...t
        }) => {
          const a = (0, o.v6)(t, {
            "data-testid": e
          });
          return (0, s.jsx)(i.Ay, {
            ...a
          })
        },
        k = (0, r.forwardRef)(function({
          children: e,
          testId: t,
          ...a
        }, r) {
          const n = (0, o.v6)(a, {
            "data-testid": t
          });
          return (0, s.jsx)("div", {
            className: "rockstargames-sites-gta-gen9cd5023e2864561e1f962ac435e70156b",
            "data-size": "small",
            ...n,
            ref: r,
            children: e
          })
        }),
        v = (0, r.forwardRef)(function({
          testId: e,
          children: t,
          ...a
        }, r) {
          const n = (0, o.v6)(a, {
            "data-testid": e
          });
          return (0, s.jsx)("div", {
            ...n,
            ref: r,
            children: t
          })
        }),
        h = ({
          testId: e,
          ...t
        }) => {
          const a = (0, o.v6)(t, {
            "data-testid": e
          });
          return (0, s.jsx)(m.RpCategory, {
            ...a
          })
        },
        x = (0, r.forwardRef)(function({
          asChild: e,
          children: t,
          testId: a,
          ...r
        }, c) {
          const d = e ? n.DX : "div",
            i = (0, o.v6)(r, {
              className: "rockstargames-sites-gta-gen9e8daa457f5b09f3a79915a1355aa3332",
              "data-testid": a
            });
          return (0, s.jsx)(d, {
            ref: c,
            ...i,
            children: t
          })
        })
    },
    5328: (e, t, a) => {
      var s = {
        "./applestore.svg": 49733,
        "./googleplay.svg": 62749,
        "./left.svg": 84941,
        "./pc.svg": 39821,
        "./pcalt.svg": 29886,
        "./ps.svg": 65437,
        "./ps3.svg": 33492,
        "./ps4.svg": 65115,
        "./ps5.svg": 23146,
        "./right.svg": 80304,
        "./switch.svg": 22454,
        "./x.svg": 66426,
        "./xbox.svg": 59129,
        "./xboxone.svg": 42659,
        "./xboxseriesxs.svg": 36773
      };

      function r(e) {
        var t = n(e);
        return a(t)
      }

      function n(e) {
        if (!a.o(s, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        }
        return s[e]
      }
      r.keys = function() {
        return Object.keys(s)
      }, r.resolve = n, e.exports = r, r.id = 5328
    },
    14804: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8271b67c2f5834856448ca1eef6dba3f.png"
    },
    22230: (e, t, a) => {
      "use strict";
      a.d(t, {
        YT: () => o,
        lv: () => c,
        Ay: () => d
      });
      var s = a(42295);
      var r = a(4572),
        n = a.n(r);
      var o = function(e) {
          return e.small = "small", e.large = "large", e
        }({}),
        c = function(e) {
          return e.pc = "pc", e.pcAlt = "pcalt", e.ps4 = "ps4", e.ps5 = "ps5", e.ps = "ps", e.np = "np", e.xboxOne = "xboxone", e.xboxSeries = "xboxsx", e.xbox = "xbl", e
        }({});
      const d = ({
        tagSize: e,
        platform: t,
        className: a = ""
      }) => {
        const {
          src: r,
          alt: o
        } = ((e, t) => {
          const a = "small" === t;
          switch (e) {
            case "pc":
              return {
                src: a ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/91b881fc47ab8f61e9d3fbb515272656.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9822b4be8e173b12a152443a538ee613.svg", alt: "PC Legacy"
              };
            case "pcalt":
              return {
                src: a ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1b0c35912b602cae2ecdacb21a992ca7.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0f7ec13ed3fbe1c1389f38d189869ada.svg", alt: "PC Enhanced"
              };
            case "ps4":
              return {
                src: a ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6054f77c4450b075b6059eda658a510d.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/941a1141a404ed211f7d23ed36ccee23.svg", alt: "PS4"
              };
            case "ps5":
              return {
                src: a ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c577e2612120d70330b797e6ee5487d9.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/04d319f216248f3df7f9727df641b832.svg", alt: "PS5"
              };
            case "xboxone":
              return {
                src: a ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c8ee10e269f42d96c58c1eb016717e1.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3e18ef78074a128424a94ab6313dd332.svg", alt: "Xbox One"
              };
            case "xboxsx":
              return {
                src: a ? "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61f1cfebde0508725354fa6c2bdda0b4.svg" : "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c91f19b5ea19868e280034220acf6740.svg", alt: "Xbox Series X|S"
              };
            case "ps":
            case "np":
              return {
                src: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9360dcc4d2c470d84e308ad6b5e4c037.svg", alt: "PS"
              };
            case "xbl":
              return {
                src: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c0834bf9f8603f0af3841a1d42cff529.svg", alt: "Xbox"
              };
            default:
              return {
                src: "", alt: ""
              }
          }
        })(t, e);
        return (0, s.jsx)("img", {
          className: n()("rockstargames-sites-gta-gen9b0ff0045ed0326a46ca1e0867d2050c1", a),
          "data-testid": "platform-tag",
          "data-platform": t,
          "data-tag-size": e,
          src: r,
          alt: o
        })
      }
    },
    22454: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/925d3b2d0b0e784c366e20d3f1a660da.svg"
    },
    23146: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b12e4e9678e7a4ebea34905926feeb90.svg"
    },
    29886: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2921f91628eca684eaf0f91d8b6a5a76.svg"
    },
    32067: (e, t, a) => {
      "use strict";
      a.d(t, {
        DX: () => s.DX,
        xV: () => s.xV
      });
      var s = a(39447);
      a(42295), a(62229)
    },
    33492: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d118a14a73ce72b4687d9eb69724f4d2.svg"
    },
    36773: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5bd8456deb2338503b8fd44786b5fa07.svg"
    },
    39447: (e, t, a) => {
      "use strict";
      a.d(t, {
        DX: () => c,
        Dc: () => m,
        TL: () => o,
        xV: () => l
      });
      var s = a(62229),
        r = a(95362),
        n = a(42295);

      function o(e) {
        const t = d(e),
          a = s.forwardRef((e, a) => {
            const {
              children: r,
              ...o
            } = e, c = s.Children.toArray(r), d = c.find(f);
            if (d) {
              const e = d.props.children,
                r = c.map(t => t === d ? s.Children.count(e) > 1 ? s.Children.only(null) : s.isValidElement(e) ? e.props.children : null : t);
              return (0, n.jsx)(t, {
                ...o,
                ref: a,
                children: s.isValidElement(e) ? s.cloneElement(e, void 0, r) : null
              })
            }
            return (0, n.jsx)(t, {
              ...o,
              ref: a,
              children: r
            })
          });
        return a.displayName = `${e}.Slot`, a
      }
      var c = o("Slot");

      function d(e) {
        const t = s.forwardRef((e, t) => {
          const {
            children: a,
            ...n
          } = e;
          if (s.isValidElement(a)) {
            const e = function(e) {
                let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                  a = t && "isReactWarning" in t && t.isReactWarning;
                return a ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, a = t && "isReactWarning" in t && t.isReactWarning, a ? e.props.ref : e.props.ref || e.ref)
              }(a),
              o = function(e, t) {
                const a = {
                  ...t
                };
                for (const s in t) {
                  const r = e[s],
                    n = t[s];
                  /^on[A-Z]/.test(s) ? r && n ? a[s] = (...e) => {
                    const t = n(...e);
                    return r(...e), t
                  } : r && (a[s] = r) : "style" === s ? a[s] = {
                    ...r,
                    ...n
                  } : "className" === s && (a[s] = [r, n].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...a
                }
              }(n, a.props);
            return a.type !== s.Fragment && (o.ref = t ? (0, r.t)(t, e) : e), s.cloneElement(a, o)
          }
          return s.Children.count(a) > 1 ? s.Children.only(null) : null
        });
        return t.displayName = `${e}.SlotClone`, t
      }
      var i = Symbol("radix.slottable");

      function m(e) {
        const t = ({
          children: e
        }) => (0, n.jsx)(n.Fragment, {
          children: e
        });
        return t.displayName = `${e}.Slottable`, t.__radixId = i, t
      }
      var l = m("Slottable");

      function f(e) {
        return s.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === i
      }
    },
    39821: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c050b43f15f34e2cd0592fad6dc48fd.svg"
    },
    42659: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f91e4753c491fb23c2b364f69480c9e.svg"
    },
    49733: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c6affc8b37ec4c75486ab6d12b2de395.svg"
    },
    59129: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f74e871585118640ffd9ce881181a176.svg"
    },
    62749: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2ef574ea2aa502447d579267ff37e251.svg"
    },
    65115: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3f9f55567df4006813f8bf50ad383ea0.svg"
    },
    65437: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/27ae07e3226006749e6cb6428bc62bb1.svg"
    },
    66426: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7c453a914f0b049334120adfcba614e5.svg"
    },
    75526: (e, t, a) => {
      "use strict";
      a.d(t, {
        v6: () => c
      });
      var s = a(4572);
      const r = new Map;

      function n(e, t) {
        if (e === t) return e;
        const a = r.get(e);
        if (a) return a.forEach(e => e(t)), t;
        const s = r.get(t);
        return s ? (s.forEach(t => t(e)), e) : t
      }

      function o(...e) {
        return (...t) => {
          for (const a of e) "function" == typeof a && a(...t)
        }
      }

      function c(...e) {
        const t = {
          ...e[0]
        };
        for (let a = 1; a < e.length; a++) {
          const r = e[a];
          for (const e in r) {
            const a = t[e],
              c = r[e];
            "function" == typeof a && "function" == typeof c && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = o(a, c) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof a || "string" != typeof c ? "id" === e && a && c ? t.id = n(a, c) : t[e] = void 0 !== c ? c : a : t[e] = (0, s.clsx)(a, c)
          }
        }
        return t
      }
      var d;
      a(98312), a(41972), a(56265), a(31454), a(10533), a(10613), a(9738),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(d || (d = {})), Symbol.toStringTag
    },
    80304: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cf1b78cec82c717ea9c2155ce4093736.svg"
    },
    84941: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3c6134ba61610ead6af640361535e346.svg"
    },
    95362: (e, t, a) => {
      "use strict";
      a.d(t, {
        s: () => o,
        t: () => n
      });
      var s = a(62229);

      function r(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
      }

      function n(...e) {
        return t => {
          let a = !1;
          const s = e.map(e => {
            const s = r(e, t);
            return a || "function" != typeof s || (a = !0), s
          });
          if (a) return () => {
            for (let t = 0; t < s.length; t++) {
              const a = s[t];
              "function" == typeof a ? a() : r(e[t], null)
            }
          }
        }
      }

      function o(...e) {
        return s.useCallback(n(...e), e)
      }
    },
    95386: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        RpCategory: () => m,
        rpCategoryTestIds: () => i
      });
      var s = a(42295),
        r = a(62229),
        n = a(75526);
      var o = a(4572),
        c = a.n(o);
      const d = e => e < 100 ? "#2d6eb9" : e > 99 && e < 500 ? "#b48261" : e > 499 && e < 750 ? "#9699a1" : "#D6B563",
        i = {
          RANK_VALUE: "rpCategory:rankValue"
        },
        m = (0, r.forwardRef)(function({
          rank: e,
          size: t = "large",
          className: a,
          alt: r,
          testId: o,
          ...m
        }, l) {
          const f = d(e),
            g = (0, n.v6)(m, {
              className: c()("rockstargames-sites-gta-gen9f54750ef62f8600000c94f0caba85986", a),
              "data-testid": o
            });
          return (0, s.jsxs)("div", {
            "data-size": t,
            ref: l,
            ...g,
            children: [(0, s.jsx)("svg", {
              role: "svg",
              "aria-label": r,
              className: "rockstargames-sites-gta-gen9a3beb1e9c88e2938879ea4df25b63eb1",
              "data-rank": d(e),
              "data-testid": "rp-icon",
              width: "44",
              height: "44",
              viewBox: "0 0 44 44",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, s.jsx)("path", {
                d: "M21.8679 0C9.79195 0 0 9.79195 0 21.8679C0 33.9438 9.79195 43.7358 21.8679 43.7358C33.9438 43.7358 43.7358 33.9438 43.7358 21.8679C43.7358 9.79195 33.9438 0 21.8679 0ZM13.6796 17.4457H30.2506C30.4814 20.3007 30.4935 23.508 30.1048 26.9461H13.7889C13.4123 23.4958 13.4244 20.2885 13.6674 17.4457H13.6796ZM33.9681 17.4457H39.508C39.8603 18.8671 40.0668 20.3371 40.0668 21.8679C40.0668 23.6295 39.7995 25.3424 39.3379 26.9582H33.8102C34.1868 23.5201 34.1868 20.325 33.9681 17.4579V17.4457ZM38.208 13.8618H33.5793C33.1541 10.9947 32.5588 8.56492 31.9757 6.68185C34.6363 8.46773 36.7866 10.9582 38.208 13.8618ZM27.2863 4.42217C27.8208 5.73424 29.0721 9.09947 29.8132 13.8618H14.1169C14.9066 8.89294 16.2308 5.46697 16.7046 4.34928C18.3447 3.86333 20.0699 3.59605 21.8679 3.59605C23.7509 3.59605 25.5733 3.88762 27.2863 4.42217ZM12.0273 6.51177C11.432 8.40699 10.8003 10.8975 10.3629 13.8618H5.52772C6.99772 10.861 9.24525 8.32194 12.0273 6.51177ZM4.21564 17.4457H9.94989C9.71906 20.325 9.71906 23.508 10.0714 26.9461H4.38573C3.91192 25.3303 3.6568 23.6295 3.6568 21.8557C3.6568 20.325 3.86333 18.855 4.21564 17.4336V17.4457ZM5.84358 30.5421H10.5816C10.9704 32.7411 11.5049 35.0129 12.246 37.3576C9.57327 35.6811 7.35004 33.3364 5.84358 30.5421ZM16.8626 39.4229C15.672 36.3614 14.8459 33.385 14.3235 30.5421H29.5581C29.0235 33.3728 28.1974 36.3371 27.0068 39.3865C25.3789 39.8724 23.6538 40.1397 21.8679 40.1397C20.082 40.1397 18.4541 39.8846 16.8626 39.4229ZM31.6355 37.2604C32.3645 34.9522 32.9112 32.7168 33.2999 30.5421H37.88C36.3979 33.2756 34.2354 35.5839 31.6355 37.2604Z",
                fill: f
              })
            }), (0, s.jsx)("span", {
              className: "rockstargames-sites-gta-gen9d9ea5cdf174033003a8670f31ae66a59",
              "data-testid": i.RANK_VALUE,
              children: e
            })]
          })
        })
    },
    98357: (e, t, a) => {
      "use strict";
      a.d(t, {
        U: () => b,
        A: () => k
      });
      var s = a(42295),
        r = a(62229),
        n = a(9623),
        o = a(62665),
        c = a(51673),
        d = a.n(c),
        i = a(95966),
        m = a(4572),
        l = a.n(m),
        f = a(2918);
      const g = {
          open: {
            opacity: 0,
            transition: {
              ease: "easeOut",
              duration: .3
            }
          },
          closed: {
            opacity: 1,
            transition: {
              ease: "easeOut",
              duration: .9,
              delay: .3
            }
          }
        },
        p = {
          open: {
            "--cta-border-color": "var(--white-15)",
            "--cta-background-color": "rgba(255,255,255,.1)",
            "--cta-background-color-noBlur": "var(--black-100)",
            gridGap: "var(--grid-gap-sm)",
            "--btn-hover-bg-color": "var(--black-15)",
            "--btn-hover-bg-color-noBlur": "var(--black-100)",
            "--btn-hover-font-color": "var(--white-100)",
            "--btn-hover-border-color": "var(--white-15)"
          },
          closed: {
            "--cta-border-color": "var(--white-100)",
            "--cta-background-color": "var(--black-15)",
            "--cta-background-color-noBlur": "var(--black-15)",
            gridGap: 0,
            transition: {
              type: "spring",
              stiffness: 650,
              damping: 45
            },
            transitionEnd: {
              "--btn-hover-bg-color": "var(--white-100)",
              "--btn-hover-bg-color-noBlur": "var(--white-100)",
              "--btn-hover-font-color": "var(--black-100)",
              "--btn-hover-border-color": "var(--white-100)"
            }
          }
        },
        u = {
          applestore: "rockstargames-sites-gta-gen9e68d88a0e9f24a2f0bcf7da8a0e1b388",
          buttonText: "rockstargames-sites-gta-gen9c240c5768c5acdd2bc6022568ef877f0",
          closeButton: "rockstargames-sites-gta-gen9ee432a5defea7b8181973d3a9ad3190b",
          container: "rockstargames-sites-gta-gen9fc8f7fb18de952e853977b6df36af26a",
          content: "rockstargames-sites-gta-gen9b12c469ae4536819db4253c10b2cd11d",
          expandedArea: "rockstargames-sites-gta-gen9e752e3ffffce454f84c993a62a279f87",
          expandedButton: "rockstargames-sites-gta-gen9bb945d977a4db6fdd9206dbfe8581304",
          googleplay: "rockstargames-sites-gta-gen9d0d623dce429f6ae2fd898e1d551257e",
          pc: "rockstargames-sites-gta-gen9ffc20241c500599d4ee134fcffd66961",
          pcalt: "rockstargames-sites-gta-gen9a2ef6590cf9e642c1a2a8c589a792928",
          pillBtn: "rockstargames-sites-gta-gen9ed7115facef4ace39e8c7486e9066fe1",
          platformButton: "rockstargames-sites-gta-gen9fa40c93ee13fdec88bb8dc08ce36353a",
          platformButtons: "rockstargames-sites-gta-gen9e950c05307f67ce36d561a09027fd844",
          ps: "rockstargames-sites-gta-gen9dd89bc9ad4dba162494e28c6358baa41",
          ps4: "rockstargames-sites-gta-gen9ed20f3369b590314810f7996943fdaa4",
          ps5: "rockstargames-sites-gta-gen9f046700558956d566323b32d87c4a54f",
          selected: "rockstargames-sites-gta-gen9e7705468e2dbcfc45d23ef5047671698",
          switch: "rockstargames-sites-gta-gen9e8e3ea0f1d334667f3928f696308060e",
          unexpandedButton: "rockstargames-sites-gta-gen9eaa10e0601812da4ea334974165d92ec",
          xbox: "rockstargames-sites-gta-gen9e6c21e19f66ac6c50547342d3dd72dd4",
          xboxone: "rockstargames-sites-gta-gen9c03015dbaf51a94ba1826bb21f5d040f",
          xboxseriesxs: "rockstargames-sites-gta-gen9dde1b553776bdd59373d22a43479de29"
        },
        b = ({
          buttonText: e = "",
          link: t = "",
          platform: r = "",
          target: o = null,
          onClick: c,
          tabIndex: d,
          ...i
        }) => {
          const m = o ?? (t.startsWith(document.location.origin) ? "_self" : "_blank"),
            l = [u.platformButton, u[r]].join(" "),
            f = r ? a(5328)(`./${r}.svg`) : null,
            g = (0, s.jsxs)(s.Fragment, {
              children: [f ? (0, s.jsx)("img", {
                src: f,
                alt: e
              }) : "", !f && (0, s.jsx)("div", {
                className: u.buttonText,
                children: e
              })]
            });
          return t ? t.startsWith("http") ? (0, s.jsx)("a", {
            href: t,
            className: l,
            target: m,
            onClick: c,
            "aria-label": e,
            tabIndex: d,
            ...i,
            children: g
          }) : (0, s.jsx)(n.NavLink, {
            className: l,
            onClick: c,
            to: t,
            "aria-label": e,
            ...i,
            children: g
          }) : (0, s.jsx)("button", {
            className: l,
            onClick: c,
            "aria-label": e,
            tabIndex: d,
            ...i,
            children: g
          })
        },
        k = ({
          variant: e,
          buttonText: t = "Subscribe",
          buttonClassName: n,
          className: c,
          children: m,
          platformsAndLinks: k = [],
          trackingType: v = "buy",
          trackingParent: h,
          target: x = null,
          trackingOId: _ = null,
          returnUrl: C = null
        }) => {
          const y = (0, i.useRockstarTokenPing)(),
            [w, N] = (0, r.useState)(!1),
            [j, z] = (0, r.useState)(!1),
            [E, T] = (0, r.useState)(200),
            {
              track: R
            } = (0, f.useGtmTrack)(),
            S = (0, r.useRef)(null),
            I = (0, r.useRef)(w),
            L = (0, r.useRef)(null);
          (0, r.useEffect)(() => {
            I.current = w
          }, [w]), (0, r.useEffect)(() => {
            const e = e => {
              I && !S?.current?.contains(e.target) && N(!1)
            };
            document.addEventListener("click", e);
            const t = e => {
              I && "Escape" == e.code && N(!1)
            };
            return document.addEventListener("keydown", t, !1), () => {
              document.removeEventListener("click", e), document.removeEventListener("keydown", t, !1)
            }
          }, []), (0, r.useEffect)(() => {
            const e = () => {
              w && (z(!0), N(!1))
            };
            return window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }, [w]), (0, r.useEffect)(() => {
            if (S?.current) {
              const e = 1e3 * Number(getComputedStyle(S.current).getPropertyValue("--expandingPlatformButton-expandDuration").replace("ms", "").replace("s", ""));
              T(isNaN(e) ? 200 : e)
            }
          }, []), (0, r.useEffect)(() => {
            j && setTimeout(() => {
              z(!1)
            }, E)
          }, [j]);
          const B = ({
            href: e,
            platform: t
          }) => async () => {
            if (e) R({
              element_placement: h?.toLowerCase(),
              event: "cta_store_link",
              link_url: e,
              text: t
            });
            else {
              const e = (0, i.findPlatform)(t)?.onlineService;
              if (e && "sc" !== e) {
                R({
                  element_placement: h?.toLowerCase(),
                  event: "cta_link_account",
                  text: `link ${e}`
                });
                const t = await (0, i.generateTpaLink)({
                  pingBearer: y,
                  returnUrl: C || window.location.pathname,
                  service: e
                });
                window.location.href = t.href
              }
            }
          };
          return (0, s.jsxs)("div", {
            className: l()(u.container, c),
            children: [(0, s.jsx)(o.motion.div, {
              className: u.content,
              animate: w ? "open" : "close",
              variants: g,
              "aria-hidden": !!w,
              children: m
            }), (0, s.jsxs)(o.motion.div, {
              "data-variant": e,
              "data-animating": j,
              className: l()(w ? u.expandedButton : u.unexpandedButton),
              animate: w ? "open" : "closed",
              variants: p,
              initial: !1,
              ref: S,
              children: [(0, s.jsx)(o.motion.button, {
                className: l()(u.buttonText, n),
                "aria-expanded": w,
                onClick: () => {
                  if (z(!0), N(!w), !w) switch (v) {
                    case "select_platform":
                      R({
                        element_placement: h?.toLowerCase(),
                        event: "select_platform",
                        text: t?.toLowerCase() ?? "subscribe"
                      });
                      break;
                    case "link_account":
                      R({
                        element_placement: h?.toLowerCase(),
                        event: "cta_link_account",
                        o_id: _,
                        text: t?.toLowerCase()
                      });
                      break;
                    case "buy":
                      R({
                        element_placement: h?.toLowerCase(),
                        event: "cta_buy",
                        text: t?.toLowerCase() ?? "subscribe"
                      });
                      break;
                    case "store_link":
                      R({
                        element_placement: h?.toLowerCase(),
                        event: "cta_store_link",
                        text: t?.toLowerCase()
                      });
                      break;
                    case "other":
                      R({
                        element_placement: h?.toLowerCase(),
                        event: "cta_other",
                        text: t?.toLowerCase()
                      })
                  }
                },
                tabIndex: w ? -1 : 0,
                children: "string" == typeof t ? t : "Subscribe"
              }), (0, s.jsx)("div", {
                className: u.expandedArea,
                ref: L,
                "data-animate": w ? "open" : "closed",
                "aria-hidden": !w,
                style: {
                  height: w ? L?.current?.scrollHeight : 0
                },
                children: (0, s.jsx)(d(), {
                  active: w,
                  focusTrapOptions: {
                    allowOutsideClick: !0,
                    preventScroll: !0,
                    checkCanFocusTrap: e => new Promise(t => {
                      const a = setInterval(() => {
                        "hidden" !== getComputedStyle(e[0]).visibility && (t(), clearInterval(a))
                      }, 5)
                    })
                  },
                  children: (0, s.jsxs)("div", {
                    children: [(0, s.jsx)("button", {
                      className: u.closeButton,
                      onClick: () => {
                        N(!1), z(!0), R({
                          element_placement: h?.toLowerCase(),
                          event: "cta_other",
                          text: "close expanding platform button"
                        })
                      },
                      "aria-label": "Close",
                      tabIndex: w ? 0 : -1,
                      children: (0, s.jsx)("img", {
                        src: a(66426),
                        alt: "Close"
                      })
                    }), (0, s.jsx)("div", {
                      className: u.platformButtons,
                      children: k.length ? k.map(e => (0, s.jsx)(b, {
                        buttonText: e.buttonText ?? (0, i.findPlatform)(e.platform)?.friendlyName ?? "",
                        link: e.href,
                        platform: e.platform,
                        onClick: B(e),
                        target: x,
                        tabIndex: w ? 0 : -1
                      }, `${e.key}-${e.href}-${e.platform}`)) : ""
                    })]
                  })
                })
              })]
            })]
          })
        }
    }
  }
]);