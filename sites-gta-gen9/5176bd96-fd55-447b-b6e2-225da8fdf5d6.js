try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "5176bd96-fd55-447b-b6e2-225da8fdf5d6", e._sentryDebugIdIdentifier = "sentry-dbid-5176bd96-fd55-447b-b6e2-225da8fdf5d6")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "a42314239c99c13d151b1cd32472b6fee265a6cb",
    packageName: "@rockstargames/sites-gta-gen9",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "a42314239c99c13d151b1cd32472b6fee265a6cb"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [1531], {
    950: (e, a, t) => {
      t.r(a), t.d(a, {
        RpCategory: () => l,
        rpCategoryTestIds: () => i
      });
      var s = t(62229),
        r = t(38763);
      var n = t(24036),
        o = t.n(n),
        c = t(25854);
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
            ...f
          } = e;
          const m = d(t),
            g = (0, r.v6)(f, {
              className: o()("rockstargames-sites-gta-gen9f54750ef62f8600000c94f0caba85986", s),
              "data-testid": l
            });
          return (0, c.jsxs)("div", {
            "data-size": "small",
            ref: a,
            ...g,
            children: [(0, c.jsx)("svg", {
              role: "svg",
              "aria-label": n,
              className: "rockstargames-sites-gta-gen9a3beb1e9c88e2938879ea4df25b63eb1",
              "data-rank": d(t),
              "data-testid": "rp-icon",
              width: "44",
              height: "44",
              viewBox: "0 0 44 44",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, c.jsx)("path", {
                d: "M21.8679 0C9.79195 0 0 9.79195 0 21.8679C0 33.9438 9.79195 43.7358 21.8679 43.7358C33.9438 43.7358 43.7358 33.9438 43.7358 21.8679C43.7358 9.79195 33.9438 0 21.8679 0ZM13.6796 17.4457H30.2506C30.4814 20.3007 30.4935 23.508 30.1048 26.9461H13.7889C13.4123 23.4958 13.4244 20.2885 13.6674 17.4457H13.6796ZM33.9681 17.4457H39.508C39.8603 18.8671 40.0668 20.3371 40.0668 21.8679C40.0668 23.6295 39.7995 25.3424 39.3379 26.9582H33.8102C34.1868 23.5201 34.1868 20.325 33.9681 17.4579V17.4457ZM38.208 13.8618H33.5793C33.1541 10.9947 32.5588 8.56492 31.9757 6.68185C34.6363 8.46773 36.7866 10.9582 38.208 13.8618ZM27.2863 4.42217C27.8208 5.73424 29.0721 9.09947 29.8132 13.8618H14.1169C14.9066 8.89294 16.2308 5.46697 16.7046 4.34928C18.3447 3.86333 20.0699 3.59605 21.8679 3.59605C23.7509 3.59605 25.5733 3.88762 27.2863 4.42217ZM12.0273 6.51177C11.432 8.40699 10.8003 10.8975 10.3629 13.8618H5.52772C6.99772 10.861 9.24525 8.32194 12.0273 6.51177ZM4.21564 17.4457H9.94989C9.71906 20.325 9.71906 23.508 10.0714 26.9461H4.38573C3.91192 25.3303 3.6568 23.6295 3.6568 21.8557C3.6568 20.325 3.86333 18.855 4.21564 17.4336V17.4457ZM5.84358 30.5421H10.5816C10.9704 32.7411 11.5049 35.0129 12.246 37.3576C9.57327 35.6811 7.35004 33.3364 5.84358 30.5421ZM16.8626 39.4229C15.672 36.3614 14.8459 33.385 14.3235 30.5421H29.5581C29.0235 33.3728 28.1974 36.3371 27.0068 39.3865C25.3789 39.8724 23.6538 40.1397 21.8679 40.1397C20.082 40.1397 18.4541 39.8846 16.8626 39.4229ZM31.6355 37.2604C32.3645 34.9522 32.9112 32.7168 33.2999 30.5421H37.88C36.3979 33.2756 34.2354 35.5839 31.6355 37.2604Z",
                fill: m
              })
            }), (0, c.jsx)("span", {
              "data-testid": i.RANK_VALUE,
              children: t
            })]
          })
        }))
    },
    10619: (e, a, t) => {
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
      var n = t(25854);
      const o = e => {
          let {
            children: a,
            className: t,
            onClick: s,
            style: r,
            ariaLabel: o
          } = e;
          return (0, n.jsx)("button", {
            className: t,
            onClick: s,
            style: r,
            type: "button",
            "aria-label": o,
            children: a
          })
        },
        c = e => {
          let {
            children: a,
            className: t,
            onClick: r,
            style: o,
            to: c,
            ariaLabel: d
          } = e;
          return (0, n.jsx)(s.NavLink, {
            className: t,
            onClick: r,
            style: o,
            to: c,
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
            onClick: f,
            secondText: m,
            size: g,
            text: b,
            to: p,
            type: u = "",
            ariaLabel: h
          } = e;
          const k = [r.plusButton, r[u] ?? "", r[g] ?? "", r[s] ?? "", t].join(" "),
            x = {
              "--hvr-color": a ?? l,
              "--hvr-bg-color": l ?? a,
              "--hvr-border-color": a ?? l
            },
            v = (0, n.jsxs)(n.Fragment, {
              children: [i ? (0, n.jsx)("img", {
                src: i,
                alt: ""
              }) : "", (0, n.jsxs)("div", {
                className: r.btnText,
                icon: d,
                children: [b, m ? (0, n.jsx)("span", {
                  children: m
                }) : ""]
              })]
            });
          if (p) {
            if (p.startsWith("http")) {
              const e = p.startsWith(document.location.origin) ? "_self" : "_blank";
              return (0, n.jsx)("span", {
                onClick: f,
                onKeyDown: f,
                className: k,
                role: "button",
                "aria-label": h,
                tabIndex: 0,
                children: (0, n.jsx)("a", {
                  href: p,
                  target: e,
                  children: v
                })
              })
            }
            return (0, n.jsx)(c, {
              className: k,
              onClick: f,
              style: {
                ...x
              },
              to: p,
              ariaLabel: h,
              children: v
            })
          }
          return (0, n.jsx)(o, {
            className: k,
            onClick: f,
            style: {
              ...x
            },
            ariaLabel: h,
            children: v
          })
        }
    },
    14804: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8271b67c2f5834856448ca1eef6dba3f.png"
    },
    20930: (e, a, t) => {
      t.r(a), t.d(a, {
        Avatar: () => g,
        Content: () => b,
        PlatformTag: () => u,
        PlatformTagSizes: () => d.YT,
        Platforms: () => d.lv,
        RankContent: () => k,
        Root: () => m,
        RpCategory: () => x,
        TextContent: () => v,
        TopRow: () => p,
        UserName: () => h
      });
      var s = t(62229),
        r = t(30109),
        n = t(38763),
        o = t(24036),
        c = t.n(o),
        d = t(92041),
        i = t(950);
      const l = "rockstargames-sites-gta-gen9b2d75ee6d468c7fde9ad28ba90ca2804";
      var f = t(25854);
      const m = (0, s.forwardRef)((function(e, a) {
          let {
            children: t,
            className: s,
            testId: r,
            ...o
          } = e;
          const d = (0, n.v6)(o, {
            "data-testid": r,
            className: c()("rockstargames-sites-gta-gen9d738b88fa09e0960678501900af6dae1", s)
          });
          return (0, f.jsx)("div", {
            ref: a,
            ...d,
            children: t
          })
        })),
        g = (0, s.forwardRef)((function(e, a) {
          let {
            src: r,
            alt: o,
            testId: c,
            ...d
          } = e;
          const [i, m] = (0, s.useState)(r), g = (0, n.v6)(d, {
            className: "rockstargames-sites-gta-gen9a0e1daf7fc3c029353d5ef13f291348f",
            "data-testid": c
          });
          return r ? (0, f.jsx)("div", {
            ref: a,
            ...g,
            children: (0, f.jsx)("img", {
              className: l,
              src: i,
              alt: o,
              onError: () => m(t(14804))
            })
          }) : (0, f.jsx)("div", {
            ref: a,
            ...g,
            children: (0, f.jsx)("img", {
              className: l,
              src: t(14804),
              alt: o
            })
          })
        })),
        b = (0, s.forwardRef)((function(e, a) {
          let {
            asChild: t,
            testId: s,
            className: o,
            ...d
          } = e;
          const i = t ? r.DX : "div",
            l = (0, n.v6)(d, {
              className: c()("rockstargames-sites-gta-gen9fbe57172570573357e040787d9307835", o),
              "data-testid": s
            });
          return (0, f.jsx)(i, {
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
          const o = (0, n.v6)(r, {
            className: "rockstargames-sites-gta-gen9d9b917b7fb3a2b20d4af0d526ddbb8ff",
            "data-testid": s
          });
          return (0, f.jsx)("div", {
            ref: a,
            ...o,
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
          return (0, f.jsx)(d.Ay, {
            ...s
          })
        },
        h = (0, s.forwardRef)((function(e, a) {
          let {
            children: t,
            testId: s,
            ...r
          } = e;
          const o = (0, n.v6)(r, {
            "data-testid": s
          });
          return (0, f.jsx)("div", {
            className: "rockstargames-sites-gta-gen9cd5023e2864561e1f962ac435e70156b",
            "data-size": "small",
            ...o,
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
          const o = (0, n.v6)(r, {
            "data-testid": t
          });
          return (0, f.jsx)("div", {
            ...o,
            ref: a,
            children: s
          })
        })),
        x = e => {
          let {
            testId: a,
            ...t
          } = e;
          const s = (0, n.v6)(t, {
            "data-testid": a
          });
          return (0, f.jsx)(i.RpCategory, {
            ...s
          })
        },
        v = (0, s.forwardRef)((function(e, a) {
          let {
            asChild: t,
            children: s,
            testId: o,
            ...c
          } = e;
          const d = t ? r.DX : "div",
            i = (0, n.v6)(c, {
              className: "rockstargames-sites-gta-gen9e8daa457f5b09f3a79915a1355aa3332",
              "data-testid": o
            });
          return (0, f.jsx)(d, {
            ref: a,
            ...i,
            children: s
          })
        }))
    },
    30109: (e, a, t) => {
      t.d(a, {
        DX: () => s.DX,
        xV: () => s.xV,
        s6: () => i
      });
      var s = t(23135),
        r = t(25854),
        n = t(62229),
        o = (t(33804), ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce(((e, a) => {
          const t = (0, s.TL)(`Primitive.${a}`),
            o = n.forwardRef(((e, s) => {
              const {
                asChild: n,
                ...o
              } = e, c = n ? t : a;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, r.jsx)(c, {
                ...o,
                ref: s
              })
            }));
          return o.displayName = `Primitive.${a}`, {
            ...e,
            [a]: o
          }
        }), {})),
        c = Object.freeze({
          position: "absolute",
          border: 0,
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          wordWrap: "normal"
        }),
        d = n.forwardRef(((e, a) => (0, r.jsx)(o.span, {
          ...e,
          ref: a,
          style: {
            ...c,
            ...e.style
          }
        })));
      d.displayName = "VisuallyHidden";
      const i = ({
        enabled: e = !0,
        ...a
      }) => {
        const t = e ? d : n.Fragment;
        return (0, r.jsx)(t, {
          ...a
        })
      }
    },
    38763: (e, a, t) => {
      t.d(a, {
        X3: () => s.X,
        AK: () => x,
        bZ: () => f,
        v6: () => d
      });
      var s = t(67915),
        r = t(68879);
      const n = new Map;

      function o(e, a) {
        if (e === a) return e;
        const t = n.get(e);
        if (t) return t.forEach((e => e(a))), a;
        const s = n.get(a);
        return s ? (s.forEach((a => a(e))), e) : a
      }

      function c(...e) {
        return (...a) => {
          for (const t of e) "function" == typeof t && t(...a)
        }
      }

      function d(...e) {
        const a = {
          ...e[0]
        };
        for (let t = 1; t < e.length; t++) {
          const s = e[t];
          for (const e in s) {
            const t = a[e],
              n = s[e];
            "function" == typeof t && "function" == typeof n && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? a[e] = c(t, n) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof t || "string" != typeof n ? "id" === e && t && n ? a.id = o(t, n) : a[e] = void 0 !== n ? n : t : a[e] = (0, r.A)(t, n)
          }
        }
        return a
      }
      const i = /^(on.*)$/,
        l = /^(onPress.*)$/;

      function f(e, {
        onPress: a
      } = {
        onPress: !0
      }) {
        const t = {},
          s = {};
        for (const r in e) Object.prototype.hasOwnProperty.call(e, r) && (l.test(r) ? a ? t[r] = e[r] : s[r] = e[r] : i.test(r) ? t[r] = e[r] : s[r] = e[r]);
        return {
          events: t,
          others: s
        }
      }
      var m;

      function g(e) {
        return e
      }
      t(40323), t(5117), t(74534), t(66573), t(11666), t(96810), t(1571),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(m || (m = {})), Symbol.toStringTag;
      const {
        cbrt: b,
        sqrt: p,
        PI: u
      } = Math, h = (e, a, t, s, r) => {
        const n = a + t * e,
          o = n ** 2 + s;
        if (o > 0) {
          const e = p(o);
          return b(n + e) + b(n - e) - r
        }
        const c = b(p(n * n - o)),
          d = n ? Math.atan(p(-o) / n) : -u / 2;
        let i;
        return i = t < 0 ? (n > 0 ? 2 * u : u) - d : r < 0 ? (n > 0 ? 2 * u : -3 * u) + d : (n > 0 ? 0 : u) + d, 2 * c * Math.cos(i / 3) - r
      }, k = (e, a, t, s) => ((a * e + 3 * t) * e + s) * e;

      function x(e, a, t, s) {
        if (!(0 <= e && e <= 1 && 0 <= t && t <= 1)) throw new Error("Bezier x values must be in [0, 1] range");
        if (e === a && t === s) return g;
        const r = 6 * (3 * e - 3 * t + 1),
          n = 6 * (t - 2 * e),
          o = 3 * e,
          c = r * r,
          d = n * n,
          i = n / r,
          l = 3 * n * o / c - d * n / (c * r),
          f = 2 * o / r - d / c,
          m = f * f * f,
          b = 3 / r,
          p = 3 * a - 3 * s + 1,
          u = s - 2 * a,
          x = 3 * a,
          v = r ? h : g;
        return e => 0 === e || 1 === e ? e : k(v(e, l, b, m, i), p, u, x)
      }
    },
    67915: (e, a, t) => {
      t.d(a, {
        X: () => s
      });
      const s = "undefined" == typeof window
    },
    92041: (e, a, t) => {
      t.d(a, {
        YT: () => c,
        lv: () => d,
        Ay: () => i
      });
      var s = t(25854);
      let r = null,
        n = null,
        o = "";
      r = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/91b881fc47ab8f61e9d3fbb515272656.svg", n = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9822b4be8e173b12a152443a538ee613.svg", o = "PC Legacy";
      let c = function(e) {
          return e.small = "small", e.large = "large", e
        }({}),
        d = function(e) {
          return e.pc = "pc", e.pcAlt = "pcalt", e.ps4 = "ps4", e.ps5 = "ps5", e.ps = "ps", e.np = "np", e.xboxOne = "xboxone", e.xboxSeries = "xboxsx", e.xbox = "xbl", e
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
          const t = a === c.small;
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
            case d.ps:
            case d.np:
              return {
                src: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9360dcc4d2c470d84e308ad6b5e4c037.svg", alt: "PS"
              };
            case d.xbox:
              return {
                src: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c0834bf9f8603f0af3841a1d42cff529.svg", alt: "Xbox"
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
    }
  }
]);