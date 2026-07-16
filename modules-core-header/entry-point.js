try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "455f7e51-fb76-44c4-9a9f-00b8f9f1e624", e._sentryDebugIdIdentifier = "sentry-dbid-455f7e51-fb76-44c4-9a9f-00b8f9f1e624")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register([], function(e, t) {
  return {
    execute: function() {
      e((() => {
        var e = {
          64801(e, t, a) {
            (0, a(26745).w)(1)
          },
          26745(e, t, a) {
            const r = a(86029).y;
            t.w = function(e) {
              if (e || (e = 1), !a.y.meta || !a.y.meta.url) throw console.error("__system_context__", a.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
              a.p = r(a.y.meta.url, e)
            }
          },
          4010(e, t, a) {
            a(64801)
          },
          86029(e, t, a) {
            t.y = function(e, t) {
              var a = document.createElement("a");
              a.href = e;
              for (var r = "/" === a.pathname[0] ? a.pathname : "/" + a.pathname, n = 0, o = r.length; n !== t && o >= 0;) "/" === r[--o] && n++;
              if (n !== t) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + t + ") is greater than the number of directories (" + n + ") in the URL path " + e);
              var c = r.slice(0, o + 1);
              return a.protocol + "//" + a.host + c
            };
            Number.isInteger
          },
          72892(e, t, a) {
            "use strict";
            const r = {
                "./core": () => Promise.all([a.e(2145), a.e(9167), a.e(6550), a.e(6680), a.e(4637), a.e(1270), a.e(2909), a.e(8019), a.e(3331), a.e(6396)]).then(() => () => a(48996))
              },
              n = (e, t) => (a.R = t, t = a.o(r, e) ? r[e]() : Promise.resolve().then(() => {
                throw new Error('Module "' + e + '" does not exist in container.')
              }), a.R = void 0, t),
              o = (e, t) => {
                if (!a.S) return;
                const r = "default",
                  n = a.S[r];
                if (n && n !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                return a.S[r] = e, a.I(r, t)
              };
            a.d(t, {
              get: () => n,
              init: () => o
            })
          }
        };
        const a = {};

        function r(t) {
          const n = a[t];
          if (void 0 !== n) return n.exports;
          const o = a[t] = {
            id: t,
            loaded: !1,
            exports: {}
          };
          return e[t].call(o.exports, o, o.exports, r), o.loaded = !0, o.exports
        }
        return r.m = e, r.c = a, r.y = t, r.amdO = {}, r.n = e => {
          const t = e && e.__esModule ? () => e.default : () => e;
          return r.d(t, {
            a: t
          }), t
        }, (() => {
          const e = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__;
          let t;
          r.t = function(a, n) {
            if (1 & n && (a = this(a)), 8 & n) return a;
            if ("object" == typeof a && a) {
              if (4 & n && a.__esModule) return a;
              if (16 & n && "function" == typeof a.then) return a
            }
            const o = Object.create(null);
            r.r(o);
            const c = {};
            t = t || [null, e({}), e([]), e(e)];
            for (var d = 2 & n && a;
              ("object" == typeof d || "function" == typeof d) && !~t.indexOf(d); d = e(d)) Object.getOwnPropertyNames(d).forEach(e => c[e] = () => a[e]);
            return c.default = () => a, r.d(o, c), o
          }
        })(), r.d = (e, t) => {
          if (Array.isArray(t))
            for (var a = 0; a < t.length;) {
              var n = t[a++],
                o = t[a++];
              r.o(e, n) ? 0 === o && a++ : 0 === o ? Object.defineProperty(e, n, {
                enumerable: !0,
                value: t[a++]
              }) : Object.defineProperty(e, n, {
                enumerable: !0,
                get: o
              })
            } else
              for (var n in t) r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
              })
        }, r.f = {}, r.e = e => Promise.all(Object.keys(r.f).reduce((t, a) => (r.f[a](e, t), t), [])), r.u = e => "js/" + {
          162: "1f47d5afb554338028293635cceb7f1a",
          241: "be30e37cc25a26b70e38e5d65ac4aa73",
          699: "1137572b2e5be6330325cb2f15c27a72",
          761: "068cf01cfc022e48d9d9f618a84076e5",
          842: "9378a0d005f6040fe3aab2f575d1f958",
          1039: "7a15a2a88ff6b7af0ba861ef3434589c",
          1205: "feffde2f01528688f75d8fd960798b90",
          1644: "e7b1722e7308abed0479961e13929fa9",
          1777: "533d1ffc3327fd69a38cfefa36ae2a75",
          1800: "b3734bdda19e79af3c95eca80bf5889f",
          1869: "de61c89fc96e30af3808e87852fbd85a",
          1915: "ab89a0c6678ed92bda86d65359a393b5",
          2023: "cd31f4894ac9342c23cd00e02c3ccc63",
          2145: "6ecd041ee2c7fba02988ce543351ec97",
          2174: "0da2638fdcbd80dcd7949f80ee6bbf88",
          2321: "f01b04e5235add3fb0cb30fb1ae7f2db",
          2581: "f681773ebc6f322d8811f5478648f83a",
          2622: "6d54cea6936d6717fe13abf132a957f8",
          2841: "0a6610b16aa6a1de253b012d88a6e752",
          3080: "551865fee5ccb9fffb64305aed06c64c",
          3296: "05947be588f0ea189b68981ef15edc14",
          3529: "8eb2f37c9a3bca3d047a64853efc9ce0",
          4296: "47b28d2e9cdd1ed3626f3e68c3969a76",
          4404: "28a4e64d3809831647692a4dd1404b90",
          4429: "e1d6c9586f957c6ec8fe9d0783277b89",
          4446: "7094e4950d379a27cf0a93257bc4fff9",
          4555: "80d30566ab0e69a9b392c8a83cabdf72",
          4592: "958606a02a704bd3e100bb5d156f3054",
          4693: "24f6ca5407aa36dd3dece95efc2faac5",
          4791: "80457b7aa68df52c02730a882232336a",
          4823: "4922d5c98964610d2d85dd4e556b8454",
          4921: "72e7c2e8c62a1172b9f5c948eeef5862",
          5339: "aff4af7bb81e0ecbe9166d50452eed8d",
          5660: "0b5089e789fce9eee3266b32dd9bac95",
          5710: "95bde1fb88759eb73fe3e707249cce98",
          5822: "4c49c2e10a3fb549ed0e6168c63d3c78",
          6325: "89556d568fac1d24abe4f5959a3031d7",
          6396: "245e7f01d70bc3efbb39ae9e6a53c710",
          6445: "2add61e40e07c56f2278ce032cdd2e3f",
          6543: "c6440c6d00c10af74b897639fd6707a1",
          6550: "60a7b002e8d05caa3de8fbaa87dd5c4a",
          6596: "66f5240eb46da75d24330fecf7a5a0e7",
          6680: "abef4229e9479adc70ff4c4985cf2d10",
          6739: "39d0dfe57ef3c8d63b89c69e04925689",
          6755: "1bd009c7727cb12675ce8ddba49edb29",
          6810: "578aa9103d4fb6dfcb81f545ba0d62bd",
          6898: "2822a92cb6150899d9ce2a8e817188bc",
          6918: "0384e6fa26f035cc7847dc9285228547",
          6984: "a0cdb4cc56578291c836096a857d4bed",
          7129: "480e0ce0f996104a92f9e86dfafcd0cc",
          7139: "5b1c2adc277637c38f033dea81b9090b",
          7172: "28fff97ca2dd8b001c16b18ad2c1c2eb",
          7465: "c632f59151cbf2503dd150ff3abb512c",
          7720: "295a65c62997421f9adcd2e54345961a",
          7783: "f7e5f730cc08ea41ccfcd28b8e44fdd1",
          8095: "d9048db28ee6c1b60f50f871f28b2abc",
          8461: "270141196a78c6dad25e0b4c9b7906fb",
          8479: "3d66549613a7961847d2a1e0bcad3deb",
          8706: "61412e0dc42d59b52ce834e5b16280fb",
          8826: "a38e3692d278a5463f590f38dd4d3f3b",
          9046: "c49b1fa8db6d2874e4b4e952d8971d92",
          9120: "416040c4bf7e6eab0b4974fa21fe1421",
          9136: "3875c1319d2babd430865712aacc4fc6",
          9167: "6b5bb96e5080dea963a4e6c5c5ae1995",
          9510: "e72d0df2d4c2319c5bad7ea94a520ac3",
          9538: "d049a5de1342b5db216b2331aafbad30",
          9550: "aa03ebb97265cfa56d01af7ca8ed0cf3",
          9793: "cf4965e009c15ad7d3f7d2542c43bbde",
          9802: "e88601e4ee71a6f6b0ed944e7afe2431"
        } [e] + ".js", r.miniCssF = e => "css/" + {
          787: "60b4a384ad1da4123eed3cda02035b00",
          3080: "60b4a384ad1da4123eed3cda02035b00",
          3868: "9605e4661b50b9d4fc907ee456d15b70",
          5660: "9605e4661b50b9d4fc907ee456d15b70",
          6396: "6cf2cfa51258f7bbc33f7ef4120df583",
          6445: "418522d0d12f72d80b558f9733dd6579",
          6550: "eda7209165962e3eebd3ea435c000fbe",
          8826: "c81d20262580fa6635af5825c270de8e"
        } [e] + ".css", r.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => {
          const e = {},
            t = "@rockstargames/modules-core-header:";
          r.l = (a, n, o, c) => {
            if (e[a]) return void e[a].push(n);
            let d, f;
            if (void 0 !== o) {
              const e = document.getElementsByTagName("script");
              for (var i = 0; i < e.length; i++) {
                const r = e[i];
                if (r.getAttribute("src") == a || r.getAttribute("data-webpack") == t + o) {
                  d = r;
                  break
                }
              }
            }
            d || (f = !0, d = document.createElement("script"), d.charset = "utf-8", r.nc && d.setAttribute("nonce", r.nc), d.setAttribute("data-webpack", t + o), d.src = a), e[a] = [n];
            const l = (t, r) => {
                d.onerror = d.onload = null, clearTimeout(s);
                const n = e[a];
                if (delete e[a], d.parentNode?.removeChild(d), n?.forEach(e => e(r)), t) return t(r)
              },
              s = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: d
              }), 12e4);
            d.onerror = l.bind(null, d.onerror), d.onload = l.bind(null, d.onload), f && document.head.appendChild(d)
          }
        })(), r.r = e => {
          Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, r.nmd = e => (e.paths = [], e.children || (e.children = []), e), (() => {
          const e = {},
            t = {};
          r.f.remotes = (a, n) => {
            r.o(e, a) && e[a].forEach(e => {
              let a = r.R;
              a || (a = []);
              const o = t[e];
              if (a.indexOf(o) >= 0) return;
              if (a.push(o), o.p) return n.push(o.p);
              const c = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + o[1] + '" from ' + o[2]), r.m[e] = () => {
                    throw t
                  }, o.p = 0
                },
                d = (e, t, a, r, d, f) => {
                  try {
                    const i = e(t, a);
                    if (!i?.then) return d(i, r, f); {
                      const e = i.then(e => d(e, r), c);
                      if (!f) return e;
                      n.push(o.p = e)
                    }
                  } catch (e) {
                    c(e)
                  }
                },
                f = (e, t, r) => d(t.get, o[1], a, 0, i, r),
                i = t => {
                  o.p = 1, r.m[e] = e => {
                    e.exports = t()
                  }
                };
              d(r, o[2], 0, 0, (e, t, a) => e ? d(r.I, o[0], 0, e, f, a) : c(), 1)
            })
          }
        })(), (() => {
          r.S = {};
          const e = {},
            t = {};
          r.I = (a, n) => {
            n || (n = []);
            let o = t[a];
            if (o || (o = t[a] = {}), n.indexOf(o) >= 0) return;
            if (n.push(o), e[a]) return e[a];
            r.o(r.S, a) || (r.S[a] = {});
            const c = r.S[a],
              d = "@rockstargames/modules-core-header",
              f = (e, t, a, r) => {
                const n = c[e] = c[e] || {},
                  o = n[t];
                (!o || !o.loaded && (!r != !o.eager ? r : d > o.from)) && (n[t] = {
                  get: a,
                  from: d,
                  eager: !!r
                })
              },
              i = [];
            switch (a) {
              case "default":
                f("@foundry-int/utils", "6.3.0", () => Promise.all([r.e(5710), r.e(1270)]).then(() => () => r(85710))), f("@foundry/icons", "6.3.0", () => Promise.all([r.e(2321), r.e(4637), r.e(373), r.e(9628), r.e(5660)]).then(() => () => r(52321))), f("@radix-ui/react-accordion", "1.2.14", () => Promise.all([r.e(4637), r.e(5170), r.e(2043), r.e(8706)]).then(() => () => r(98706))), f("@radix-ui/react-dialog", "1.1.17", () => Promise.all([r.e(9550), r.e(4637), r.e(5170), r.e(2043), r.e(4108), r.e(9113), r.e(5339)]).then(() => () => r(85339))), f("@radix-ui/react-focus-scope", "1.1.10", () => Promise.all([r.e(4637), r.e(5170), r.e(6739)]).then(() => () => r(96739))), f("@radix-ui/react-id", "1.1.2", () => Promise.all([r.e(4637), r.e(4296)]).then(() => () => r(94296))), f("@radix-ui/react-navigation-menu", "1.2.16", () => Promise.all([r.e(9550), r.e(7139), r.e(4637), r.e(5170), r.e(2043), r.e(373), r.e(9793)]).then(() => () => r(7139))), f("@radix-ui/react-popover", "1.1.17", () => Promise.all([r.e(9550), r.e(8479), r.e(4637), r.e(5170), r.e(2043), r.e(4108), r.e(9113), r.e(241)]).then(() => () => r(60241))), f("@radix-ui/react-portal", "1.1.12", () => Promise.all([r.e(4637), r.e(5170), r.e(6810)]).then(() => () => r(36810))), f("@radix-ui/react-slot", "1.3.0", () => Promise.all([r.e(4637), r.e(7172)]).then(() => () => r(17172))), f("@radix-ui/react-use-controllable-state", "1.2.3", () => Promise.all([r.e(4637), r.e(6755)]).then(() => () => r(66755))), f("@radix-ui/react-visually-hidden", "1.2.6", () => Promise.all([r.e(4637), r.e(5170), r.e(2023)]).then(() => () => r(92023))), f("@rsgweb/locale-tools", "0.0.0", () => Promise.all([r.e(2145), r.e(761), r.e(9167), r.e(4637), r.e(842)]).then(() => () => r(40842))), f("@rsgweb/modules-core-global-navigation", "0.0.0-development", () => Promise.all([r.e(4823), r.e(6445), r.e(6550), r.e(1800), r.e(4637), r.e(5170), r.e(2043), r.e(4108), r.e(373), r.e(9628), r.e(9499), r.e(1270), r.e(8019), r.e(787), r.e(699)]).then(() => () => r(50699))), f("@rsgweb/rockstar-account", "0.0.0", () => Promise.all([r.e(1777), r.e(9167), r.e(6918), r.e(4637), r.e(6596), r.e(2909), r.e(8095), r.e(3331)]).then(() => () => r(58095))), f("@rsgweb/utils", "0.0.0-development", () => Promise.all([r.e(2145), r.e(1777), r.e(9167), r.e(2841), r.e(4637), r.e(6596), r.e(2909), r.e(9802)]).then(() => () => r(9802))), f("@vanilla-extract/recipes", "0.5.7", () => Promise.all([r.e(4823), r.e(7129)]).then(() => () => r(47129))), f("clsx", "2.1.1", () => r.e(4921).then(() => () => r(4921))), f("framer-motion", "12.42.1", () => Promise.all([r.e(5822), r.e(4637), r.e(2174)]).then(() => () => r(95822))), f("gsap", "3.12.5", () => r.e(3529).then(() => () => r(93529))), f("react-dom", "18.3.1", () => Promise.all([r.e(162), r.e(4637)]).then(() => () => r(30162))), f("react-remove-scroll", "2.7.2", () => Promise.all([r.e(3296), r.e(4637)]).then(() => () => r(33296))), f("react", "18.3.1", () => r.e(2581).then(() => () => r(22581))), f("spatial-navigation-polyfill", "1.3.1", () => r.e(4446).then(() => () => r(54446)));
                break;
              case "header":
                f("@foundry/react", "6.3.0", () => Promise.all([r.e(9550), r.e(4823), r.e(6445), r.e(761), r.e(8479), r.e(6550), r.e(8826), r.e(4637), r.e(5170), r.e(2043), r.e(4108), r.e(9113), r.e(373), r.e(9628), r.e(9499), r.e(1270), r.e(5812), r.e(4555)]).then(() => () => r(76445)))
            }
            return e[a] = i.length ? Promise.all(i).then(() => e[a] = 1) : 1
          }
        })(), (() => {
          let e;
          r.g.importScripts && (e = r.g.location + "");
          const t = r.g.document;
          if (!e && t && ("SCRIPT" === t.currentScript?.tagName.toUpperCase() && (e = t.currentScript.src), !e)) {
            const a = t.getElementsByTagName("script");
            if (a.length) {
              let t = a.length - 1;
              for (; t > -1 && (!e || !/^http(s?):/.test(e));) e = a[t--].src
            }
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), r.p = e
        })(), (() => {
          var e = e => {
              var t = e => e.split(".").map(e => +e == e ? +e : e),
                a = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                r = a[1] ? t(a[1]) : [];
              return a[2] && (r.length++, r.push.apply(r, t(a[2]))), a[3] && (r.push([]), r.push.apply(r, t(a[3]))), r
            },
            t = (t, a) => {
              t = e(t), a = e(a);
              for (var r = 0;;) {
                if (r >= t.length) return r < a.length && "u" != (typeof a[r])[0];
                var n = t[r],
                  o = (typeof n)[0];
                if (r >= a.length) return "u" == o;
                var c = a[r],
                  d = (typeof c)[0];
                if (o != d) return "o" == o && "n" == d || "s" == d || "u" == o;
                if ("o" != o && "u" != o && n != c) return n < c;
                r++
              }
            },
            a = e => {
              var t = e[0],
                r = "";
              if (1 === e.length) return "*";
              if (t + .5) {
                r += 0 == t ? ">=" : -1 == t ? "<" : 1 == t ? "^" : 2 == t ? "~" : t > 0 ? "=" : "!=";
                for (var n = 1, o = 1; o < e.length; o++) n--, r += "u" == (typeof(d = e[o]))[0] ? "-" : (n > 0 ? "." : "") + (n = 2, d);
                return r
              }
              var c = [];
              for (o = 1; o < e.length; o++) {
                var d = e[o];
                c.push(0 === d ? "not(" + f() + ")" : 1 === d ? "(" + f() + " || " + f() + ")" : 2 === d ? c.pop() + " " + c.pop() : a(d))
              }
              return f();

              function f() {
                return c.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            n = (t, a) => {
              if (0 in t) {
                a = e(a);
                var r = t[0],
                  o = r < 0;
                o && (r = -r - 1);
                for (var c = 0, d = 1, f = !0;; d++, c++) {
                  var i, l, s = d < t.length ? (typeof t[d])[0] : "";
                  if (c >= a.length || "o" == (l = (typeof(i = a[c]))[0])) return !f || ("u" == s ? d > r && !o : "" == s != o);
                  if ("u" == l) {
                    if (!f || "u" != s) return !1
                  } else if (f)
                    if (s == l)
                      if (d <= r) {
                        if (i != t[d]) return !1
                      } else {
                        if (o ? i > t[d] : i < t[d]) return !1;
                        i != t[d] && (f = !1)
                      }
                  else if ("s" != s && "n" != s) {
                    if (o || d <= r) return !1;
                    f = !1, d--
                  } else {
                    if (d <= r || l < s != o) return !1;
                    f = !1
                  } else "s" != s && "n" != s && (f = !1, d--)
                }
              }
              var u = [],
                b = u.pop.bind(u);
              for (c = 1; c < t.length; c++) {
                var h = t[c];
                u.push(1 == h ? b() | b() : 2 == h ? b() & b() : h ? n(h, a) : !b())
              }
              return !!b()
            };
          const o = (e, t) => e && r.o(e, t),
            c = e => (e.loaded = 1, e.get()),
            d = e => Object.keys(e).reduce((t, a) => (e[a].eager && (t[a] = e[a]), t), {}),
            f = e => function(t, a, n, o, c) {
              const d = r.I(t);
              return d?.then && !n ? d.then(e.bind(e, t, r.S[t], a, !1, o, c)) : e(t, r.S[t], a, n, o, c)
            },
            i = (e, t, a) => a ? a() : ((e, t) => (e => {
              throw new Error(e)
            })("Shared module " + t + " doesn't exist in shared scope " + e))(e, t),
            l = f((e, a, r, n, f) => o(a, r) ? c(((e, a, r) => {
              const n = r ? d(e[a]) : e[a];
              return (a = Object.keys(n).reduce((e, a) => !e || t(e, a) ? a : e, 0)) && n[a]
            })(a, r, n)) : i(e, r, f)),
            s = f((e, r, f, l, s, u) => {
              if (!o(r, f)) return i(e, f, u);
              const b = ((e, a, r) => {
                const n = r ? d(e[a]) : e[a];
                return Object.keys(n).reduce((e, a) => !e || !n[e].loaded && t(e, a) ? a : e, 0)
              })(r, f, l);
              return n(s, b) || (h = ((e, t, r, n) => "Unsatisfied version " + r + " from " + (r && e[t][r].from) + " of shared singleton module " + t + " (required " + a(n) + ")")(r, f, b, s), "undefined" != typeof console && console.warn && console.warn(h)), c(r[f][b]);
              var h
            }),
            u = {},
            b = {
              4637: () => s("default", "react", !1, [1, 18, 2, 0], () => r.e(2581).then(() => () => r(22581))),
              81270: () => s("default", "clsx", !1, [1, 2, 1, 1], () => r.e(4921).then(() => () => r(4921))),
              42909: () => s("default", "@rsgweb/locale-tools", !1, [0], () => Promise.all([r.e(2145), r.e(761), r.e(8461)]).then(() => () => r(40842))),
              88447: () => s("default", "framer-motion", !1, [1, 12, 38, 0], () => r.e(5822).then(() => () => r(95822))),
              96925: () => l("header", "@foundry/react", !1, () => Promise.all([r.e(9550), r.e(4823), r.e(6445), r.e(761), r.e(8479), r.e(8826), r.e(5170), r.e(2043), r.e(4108), r.e(9113), r.e(373), r.e(9628), r.e(9499), r.e(5812)]).then(() => () => r(76445))),
              13331: () => s("default", "@rsgweb/utils", !1, [0], () => Promise.all([r.e(2145), r.e(1777), r.e(2841), r.e(6596), r.e(9802)]).then(() => () => r(9802))),
              37116: () => s("default", "@rsgweb/modules-core-global-navigation", !1, [0], () => Promise.all([r.e(4823), r.e(6445), r.e(1800), r.e(5170), r.e(2043), r.e(4108), r.e(373), r.e(9628), r.e(9499), r.e(3080)]).then(() => () => r(50699))),
              82199: () => s("default", "@rsgweb/rockstar-account", !1, [0], () => Promise.all([r.e(1777), r.e(6918), r.e(6596), r.e(8095)]).then(() => () => r(58095))),
              80373: () => s("default", "@radix-ui/react-visually-hidden", !1, [1, 1, 2, 4], () => Promise.all([r.e(5170), r.e(4404)]).then(() => () => r(92023))),
              39628: () => s("default", "@foundry-int/utils", !1, [0], () => Promise.all([r.e(5710), r.e(1270)]).then(() => () => r(85710))),
              50486: () => s("default", "@radix-ui/react-slot", !1, [1, 1, 2, 4], () => r.e(4791).then(() => () => r(17172))),
              84017: () => s("default", "react-dom", !1, [1, 18, 2, 0], () => r.e(162).then(() => () => r(30162))),
              82449: () => s("default", "@radix-ui/react-id", !1, [1, 1, 1, 1], () => r.e(1915).then(() => () => r(94296))),
              92939: () => s("default", "@radix-ui/react-use-controllable-state", !1, [1, 1, 2, 2], () => r.e(9136).then(() => () => r(66755))),
              2272: () => s("default", "@radix-ui/react-portal", !1, [1, 1, 1, 10], () => r.e(4429).then(() => () => r(36810))),
              76765: () => s("default", "@radix-ui/react-focus-scope", !1, [1, 1, 1, 8], () => r.e(9120).then(() => () => r(96739))),
              59113: () => s("default", "react-remove-scroll", !1, [1, 2, 7, 2], () => r.e(3296).then(() => () => r(33296))),
              372: () => s("default", "@radix-ui/react-dialog", !1, [1, 1, 1, 15], () => Promise.all([r.e(9550), r.e(9113), r.e(7720)]).then(() => () => r(85339))),
              1249: () => s("default", "@vanilla-extract/recipes", !1, [2, 0, 5, 7], () => r.e(9510).then(() => () => r(47129))),
              20357: () => s("default", "@foundry/icons", !1, [0], () => Promise.all([r.e(2321), r.e(3868)]).then(() => () => r(52321))),
              41488: () => s("default", "@radix-ui/react-accordion", !1, [1, 1, 2, 12], () => r.e(6325).then(() => () => r(98706))),
              42913: () => s("default", "@radix-ui/react-popover", !1, [1, 1, 1, 15], () => Promise.all([r.e(9550), r.e(8479), r.e(9113), r.e(2622)]).then(() => () => r(60241))),
              51784: () => s("default", "@radix-ui/react-navigation-menu", !1, [1, 1, 2, 14], () => Promise.all([r.e(9550), r.e(7139)]).then(() => () => r(7139))),
              59066: () => s("default", "spatial-navigation-polyfill", !1, [1, 1, 3, 1], () => r.e(4446).then(() => () => r(54446))),
              35812: () => s("default", "gsap", !1, [0], () => r.e(3529).then(() => () => r(93529)))
            },
            h = {
              373: [80373],
              787: [51784, 59066],
              1270: [81270],
              2043: [82449, 92939],
              2909: [42909],
              3080: [51784, 59066],
              3331: [13331],
              4108: [2272, 76765],
              4637: [4637],
              5170: [50486, 84017],
              5812: [35812],
              6396: [37116, 82199],
              8019: [88447, 96925],
              9113: [59113],
              9499: [372, 1249, 20357, 41488, 42913],
              9628: [39628]
            },
            p = {};
          r.f.consumes = (e, t) => {
            r.o(h, e) && h[e].forEach(e => {
              if (r.o(u, e)) return t.push(u[e]);
              if (!p[e]) {
                const a = t => {
                  u[e] = 0, r.m[e] = a => {
                    delete r.c[e], a.exports = t()
                  }
                };
                p[e] = !0;
                const n = t => {
                  delete u[e], r.m[e] = a => {
                    throw delete r.c[e], t
                  }
                };
                try {
                  const r = b[e]();
                  r.then ? t.push(u[e] = r.then(a).catch(n)) : a(r)
                } catch (e) {
                  n(e)
                }
              }
            })
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              4295: 0
            };
            r.f.miniCss = (t, a) => {
              e[t] ? a.push(e[t]) : 0 !== e[t] && {
                787: 1,
                3080: 1,
                3868: 1,
                5660: 1,
                6396: 1,
                6445: 1,
                6550: 1,
                8826: 1
              } [t] && a.push(e[t] = (e => new Promise((t, a) => {
                var n = r.miniCssF(e),
                  o = r.p + n;
                if (((e, t) => {
                    for (var a = document.getElementsByTagName("link"), r = 0; r < a.length; r++) {
                      var n = (c = a[r]).getAttribute("data-href") || c.getAttribute("href");
                      if ("stylesheet" === c.rel && (n === e || n === t)) return c
                    }
                    var o = document.getElementsByTagName("style");
                    for (r = 0; r < o.length; r++) {
                      var c;
                      if ((n = (c = o[r]).getAttribute("data-href")) === e || n === t) return c
                    }
                  })(n, o)) return t();
                ((e, t, a, n, o) => {
                  var c = document.createElement("link");
                  c.rel = "stylesheet", c.type = "text/css", r.nc && (c.nonce = r.nc), c.onerror = c.onload = a => {
                    if (c.onerror = c.onload = null, "load" === a.type) n();
                    else {
                      var r = a && a.type,
                        d = a && a.target && a.target.href || t,
                        f = new Error("Loading CSS chunk " + e + " failed.\n(" + r + ": " + d + ")");
                      f.name = "ChunkLoadError", f.code = "CSS_CHUNK_LOAD_FAILED", f.type = r, f.request = d, c.parentNode && c.parentNode.removeChild(c), o(f)
                    }
                  }, c.href = t, document.head.appendChild(c)
                })(e, o, 0, t, a)
              }))(t).then(() => {
                e[t] = 0
              }, a => {
                throw delete e[t], a
              }))
            }
          }
        })(), (() => {
          const e = {
            4295: 0
          };
          r.f.j = (t, a) => {
            let n = r.o(e, t) ? e[t] : void 0;
            if (0 !== n)
              if (n) a.push(n[2]);
              else if (/^(3(331|73|868)|9(113|499|628)|(12|51)70|2043|2909|4108|4637|5812|787|8019)$/.test(t)) e[t] = 0;
            else {
              const o = new Promise((a, r) => n = e[t] = [a, r]);
              a.push(n[2] = o);
              const c = r.p + r.u(t),
                d = new Error,
                f = a => {
                  if (r.o(e, t) && (n = e[t], 0 !== n && (e[t] = void 0), n)) {
                    const e = a && ("load" === a.type ? "missing" : a.type),
                      r = a && a.target && a.target.src;
                    d.message = "Loading chunk " + t + " failed.\n(" + e + ": " + r + ")", d.name = "ChunkLoadError", d.type = e, d.request = r, n[1](d)
                  }
                };
              r.l(c, f, "chunk-" + t, t)
            }
          };
          const t = (t, a) => {
              let [n, o, c] = a;
              var d, f, i = 0;
              if (n.some(t => 0 !== e[t])) {
                for (d in o) r.o(o, d) && (r.m[d] = o[d]);
                c && c(r)
              }
              for (t && t(a); i < n.length; i++) f = n[i], r.o(e, f) && e[f] && e[f][0](), e[f] = 0
            },
            a = self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || [];
          a.forEach(t.bind(null, 0)), a.push = t.bind(null, a.push.bind(a))
        })(), r.nc = void 0, r(4010), r(72892)
      })())
    }
  }
});