try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "ff0f1df3-4051-4d51-8f39-9b07c61ad6e5", e._sentryDebugIdIdentifier = "sentry-dbid-ff0f1df3-4051-4d51-8f39-9b07c61ad6e5")
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
          89863(e, t, a) {
            (0, a(35039).w)(1)
          },
          35039(e, t, a) {
            const r = a(20103).y;
            t.w = function(e) {
              if (e || (e = 1), !a.y.meta || !a.y.meta.url) throw console.error("__system_context__", a.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
              a.p = r(a.y.meta.url, e)
            }
          },
          87732(e, t, a) {
            a(89863)
          },
          20103(e, t, a) {
            t.y = function(e, t) {
              var a = document.createElement("a");
              a.href = e;
              for (var r = "/" === a.pathname[0] ? a.pathname : "/" + a.pathname, n = 0, o = r.length; n !== t && o >= 0;) "/" === r[--o] && n++;
              if (n !== t) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + t + ") is greater than the number of directories (" + n + ") in the URL path " + e);
              var d = r.slice(0, o + 1);
              return a.protocol + "//" + a.host + d
            };
            Number.isInteger
          },
          72892(e, t, a) {
            "use strict";
            const r = {
                "./core": () => Promise.all([a.e(2145), a.e(9167), a.e(9408), a.e(2959), a.e(4637), a.e(1270), a.e(2909), a.e(4249), a.e(3331), a.e(3680)]).then(() => () => a(42760))
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
            const d = {};
            t = t || [null, e({}), e([]), e(e)];
            for (var c = 2 & n && a;
              ("object" == typeof c || "function" == typeof c) && !~t.indexOf(c); c = e(c)) Object.getOwnPropertyNames(c).forEach(e => d[e] = () => a[e]);
            return d.default = () => a, r.d(o, d), o
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
          162: "96161a509454e144ee3eb97fdd84ce6c",
          195: "e022f46a74d084b13f99a0bb627f60ab",
          323: "67f919aca68fc2dd60427bf44f561479",
          519: "ced6f54e2668f99588f2ba1449dec424",
          699: "b19938a5db770fa4fd64977cb40a4e9d",
          761: "023234b567e4194d4355c08d24429af3",
          788: "f36ca393aa484b8de6ac9eab808909c5",
          896: "f6e8be097093d9d340d813ae575edb28",
          1020: "ae8709ec1689fb7716439917e2eb57c5",
          1158: "6a6983dfc4a1a08a93c65673b3c20c3f",
          1613: "ccb1e420b1873b7c694849affbba63d1",
          1692: "afecf2e64d07ccf223cc7574f914c3c8",
          1777: "d047d58c41cddd1d28c2087396b70774",
          1915: "b1656092997dda2187d166a1255c54fc",
          2145: "d35e25c71d356e713d731b775bc70963",
          2174: "fe2ebbb2c27beed481934576eb640d92",
          2410: "48f06304a1bb61caeb301883c22d007e",
          2581: "c9c7b748d93865b5f4c9634f0fa7fd1f",
          2637: "0284067b306795634e4ad41dac1417a1",
          2841: "447a0ade8f703f7bc1e556f06f76c7db",
          2959: "e19d80dca467747c95b59568a45d8be1",
          3080: "a17088856a0d12f3e2d9b87bb3138045",
          3253: "85a41b71b9514645b84dc1866a7ebb03",
          3275: "31515bb860b8662859d03f1c89e0e7d5",
          3296: "367264abe31a4042b17af6aae5006522",
          3529: "97880fbf556b2526707532379051ba2c",
          3633: "b0160d52cdf45469873b35d681a44d31",
          3680: "58736dba1067529fa2309dbb5a1f342b",
          3767: "3b9b253558a30510309e83e8311b03ab",
          3833: "1b649b84cc0ab7c4166c4ebfeec281e2",
          3852: "83acd06f07f88c74cb12f738b405494f",
          4296: "2331f75cbdde69192f3f8624652f6f67",
          4355: "15d54c1d04dcb49915159dbe594440a5",
          4446: "4edfd5283e5589e2cd08c4eff2ed901f",
          4497: "3b77a562a62bf1cadab749810905dd97",
          4555: "9c9c2cbb8ce2c2a133f5dbf590d0d887",
          4590: "3163f14842d8257c2adb6ccc2c0f0702",
          4632: "82acfb03408346bd0be4ae685e21db33",
          4711: "2624f9a7178a60316775d50a5e9c3b3c",
          4791: "5cd7433ce838b421c5ed653294f65c52",
          4823: "c7fbbf795220d9fd47ea7ce0084bd60a",
          4921: "5ead4e943684b6f5a7b9480255299625",
          5018: "c9a443dc570410604d8f5f55b3e7da4a",
          5141: "1a012b9a3a1f08115035b6b9594fee52",
          5887: "8a635b327ddd50193b8ddd31d3a1af0f",
          5962: "e5dab0a08e649800ffb35ab473dc6be5",
          6148: "ee786546ea68506142284efe65a4f44c",
          6382: "9fc9b648b71d123474bb959ead35942e",
          6736: "48acba44ef2e6693d46d1228086a5bff",
          6739: "200fe40cdf514962fde1f12c59582042",
          6755: "aec03699b5d918909732ee18124a7210",
          6918: "bf49feedab9277dc71f79b6349f75c93",
          7129: "558a70f8dc7b9cbc5960d6e3d21d1fd9",
          7172: "acc2218c736661e0317212edb49f5871",
          7377: "5a3e5b680a5f015174128f8c680aea16",
          7421: "40ab71967e4c58835e853abcd57ab0ae",
          7861: "cfaeb9eacd14822df0ef8b9cfbb28953",
          7874: "89af1b24556f5629141caba9fdd183cc",
          8268: "a5779a6b9b77b0da389b04b1004561d7",
          8511: "413f086163e4debb95d0b6dfcc95ba1b",
          8777: "ad3d9613fae13576f51d35b51e65692b",
          9136: "81e7cdf84d417563d07fdb865cbdf096",
          9167: "699748ab76bb6c29a134d1421abca6ae",
          9206: "e0fde2348b8da71e4ec0269dc93c2c3a",
          9408: "fd9f52b283a778451ec7a4c7d022917b",
          9510: "0094f27944ee5e1d968d1d3b9d7827eb",
          9758: "df4a69c2e31bfbade66d251a52d9ed3a",
          9793: "a0b9ea1b63e74c2426382552ffd478fe",
          9802: "5cd303ce9733dfd3ab1c48d9a182c16c"
        } [e] + ".js", r.miniCssF = e => "css/" + {
          82: "9605e4661b50b9d4fc907ee456d15b70",
          3080: "60b4a384ad1da4123eed3cda02035b00",
          3680: "6cf2cfa51258f7bbc33f7ef4120df583",
          3833: "a7177fa2990f63d95d22e00c2ff025ba",
          5141: "418522d0d12f72d80b558f9733dd6579",
          7256: "60b4a384ad1da4123eed3cda02035b00",
          7874: "9605e4661b50b9d4fc907ee456d15b70",
          9408: "eda7209165962e3eebd3ea435c000fbe"
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
          r.l = (a, n, o, d) => {
            if (e[a]) return void e[a].push(n);
            let c, f;
            if (void 0 !== o) {
              const e = document.getElementsByTagName("script");
              for (var i = 0; i < e.length; i++) {
                const r = e[i];
                if (r.getAttribute("src") == a || r.getAttribute("data-webpack") == t + o) {
                  c = r;
                  break
                }
              }
            }
            c || (f = !0, c = document.createElement("script"), c.charset = "utf-8", r.nc && c.setAttribute("nonce", r.nc), c.setAttribute("data-webpack", t + o), c.src = a), e[a] = [n];
            const l = (t, r) => {
                c.onerror = c.onload = null, clearTimeout(s);
                const n = e[a];
                if (delete e[a], c.parentNode?.removeChild(c), n?.forEach(e => e(r)), t) return t(r)
              },
              s = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: c
              }), 12e4);
            c.onerror = l.bind(null, c.onerror), c.onload = l.bind(null, c.onload), f && document.head.appendChild(c)
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
              const d = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + o[1] + '" from ' + o[2]), r.m[e] = () => {
                    throw t
                  }, o.p = 0
                },
                c = (e, t, a, r, c, f) => {
                  try {
                    const i = e(t, a);
                    if (!i?.then) return c(i, r, f); {
                      const e = i.then(e => c(e, r), d);
                      if (!f) return e;
                      n.push(o.p = e)
                    }
                  } catch (e) {
                    d(e)
                  }
                },
                f = (e, t, r) => c(t.get, o[1], a, 0, i, r),
                i = t => {
                  o.p = 1, r.m[e] = e => {
                    e.exports = t()
                  }
                };
              c(r, o[2], 0, 0, (e, t, a) => e ? c(r.I, o[0], 0, e, f, a) : d(), 1)
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
            const d = r.S[a],
              c = "@rockstargames/modules-core-header",
              f = (e, t, a, r) => {
                const n = d[e] = d[e] || {},
                  o = n[t];
                (!o || !o.loaded && (!r != !o.eager ? r : c > o.from)) && (n[t] = {
                  get: a,
                  from: c,
                  eager: !!r
                })
              },
              i = [];
            switch (a) {
              case "default":
                f("@foundry-int/utils", "6.5.0", () => Promise.all([r.e(4791), r.e(1270)]).then(() => () => r(4791))), f("@foundry/icons", "6.5.0", () => Promise.all([r.e(3253), r.e(4637), r.e(1479), r.e(5229), r.e(7874)]).then(() => () => r(63253))), f("@radix-ui/react-accordion", "1.2.16", () => Promise.all([r.e(4637), r.e(5170), r.e(2043), r.e(9802)]).then(() => () => r(69802))), f("@radix-ui/react-dialog", "1.1.19", () => Promise.all([r.e(6382), r.e(4637), r.e(5170), r.e(2043), r.e(3710), r.e(9113), r.e(1158)]).then(() => () => r(1158))), f("@radix-ui/react-focus-scope", "1.1.12", () => Promise.all([r.e(4637), r.e(5170), r.e(4355)]).then(() => () => r(64355))), f("@radix-ui/react-id", "1.1.2", () => Promise.all([r.e(4637), r.e(4296)]).then(() => () => r(94296))), f("@radix-ui/react-navigation-menu", "1.2.18", () => Promise.all([r.e(6382), r.e(1692), r.e(4637), r.e(5170), r.e(2043), r.e(1479), r.e(9793)]).then(() => () => r(61692))), f("@radix-ui/react-popover", "1.1.19", () => Promise.all([r.e(6382), r.e(896), r.e(4637), r.e(5170), r.e(2043), r.e(3710), r.e(9113), r.e(6148)]).then(() => () => r(56148))), f("@radix-ui/react-portal", "1.1.13", () => Promise.all([r.e(4637), r.e(5170), r.e(5887)]).then(() => () => r(18268))), f("@radix-ui/react-slot", "1.3.0", () => Promise.all([r.e(4637), r.e(7172)]).then(() => () => r(17172))), f("@radix-ui/react-use-controllable-state", "1.2.3", () => Promise.all([r.e(4637), r.e(6755)]).then(() => () => r(66755))), f("@radix-ui/react-visually-hidden", "1.2.7", () => Promise.all([r.e(4637), r.e(5170), r.e(5018)]).then(() => () => r(32637))), f("@rsgweb/locale-tools", "0.0.0", () => Promise.all([r.e(2145), r.e(761), r.e(9167), r.e(4637), r.e(7377)]).then(() => () => r(77377))), f("@rsgweb/modules-core-global-navigation", "0.0.0-development", () => Promise.all([r.e(4823), r.e(5141), r.e(9408), r.e(1613), r.e(4637), r.e(5170), r.e(2043), r.e(3710), r.e(1479), r.e(5229), r.e(6404), r.e(1270), r.e(4249), r.e(7256), r.e(699)]).then(() => () => r(50699))), f("@rsgweb/rockstar-account", "0.0.0", () => Promise.all([r.e(1777), r.e(9167), r.e(6918), r.e(4637), r.e(195), r.e(2909), r.e(323), r.e(3331)]).then(() => () => r(323))), f("@rsgweb/utils", "0.0.0-development", () => Promise.all([r.e(2145), r.e(1777), r.e(9167), r.e(2841), r.e(4637), r.e(195), r.e(2909), r.e(519)]).then(() => () => r(40519))), f("@vanilla-extract/recipes", "0.5.7", () => Promise.all([r.e(4823), r.e(7129)]).then(() => () => r(47129))), f("clsx", "2.1.1", () => r.e(4921).then(() => () => r(4921))), f("framer-motion", "12.42.2", () => Promise.all([r.e(6739), r.e(4637), r.e(2174)]).then(() => () => r(36739))), f("gsap", "3.12.5", () => r.e(3529).then(() => () => r(93529))), f("react-dom", "18.3.1", () => Promise.all([r.e(162), r.e(4637)]).then(() => () => r(30162))), f("react-remove-scroll", "2.7.2", () => Promise.all([r.e(3296), r.e(4637)]).then(() => () => r(33296))), f("react", "18.3.1", () => r.e(2581).then(() => () => r(22581))), f("spatial-navigation-polyfill", "1.3.1", () => r.e(4446).then(() => () => r(54446)));
                break;
              case "header":
                f("@foundry/react", "6.5.0", () => Promise.all([r.e(6382), r.e(4823), r.e(5141), r.e(761), r.e(896), r.e(9408), r.e(3833), r.e(4637), r.e(5170), r.e(2043), r.e(3710), r.e(9113), r.e(1479), r.e(5229), r.e(6404), r.e(1270), r.e(5812), r.e(4555)]).then(() => () => r(93833)))
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
                var d = a[r],
                  c = (typeof d)[0];
                if (o != c) return "o" == o && "n" == c || "s" == c || "u" == o;
                if ("o" != o && "u" != o && n != d) return n < d;
                r++
              }
            },
            a = e => {
              var t = e[0],
                r = "";
              if (1 === e.length) return "*";
              if (t + .5) {
                r += 0 == t ? ">=" : -1 == t ? "<" : 1 == t ? "^" : 2 == t ? "~" : t > 0 ? "=" : "!=";
                for (var n = 1, o = 1; o < e.length; o++) n--, r += "u" == (typeof(c = e[o]))[0] ? "-" : (n > 0 ? "." : "") + (n = 2, c);
                return r
              }
              var d = [];
              for (o = 1; o < e.length; o++) {
                var c = e[o];
                d.push(0 === c ? "not(" + f() + ")" : 1 === c ? "(" + f() + " || " + f() + ")" : 2 === c ? d.pop() + " " + d.pop() : a(c))
              }
              return f();

              function f() {
                return d.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            n = (t, a) => {
              if (0 in t) {
                a = e(a);
                var r = t[0],
                  o = r < 0;
                o && (r = -r - 1);
                for (var d = 0, c = 1, f = !0;; c++, d++) {
                  var i, l, s = c < t.length ? (typeof t[c])[0] : "";
                  if (d >= a.length || "o" == (l = (typeof(i = a[d]))[0])) return !f || ("u" == s ? c > r && !o : "" == s != o);
                  if ("u" == l) {
                    if (!f || "u" != s) return !1
                  } else if (f)
                    if (s == l)
                      if (c <= r) {
                        if (i != t[c]) return !1
                      } else {
                        if (o ? i > t[c] : i < t[c]) return !1;
                        i != t[c] && (f = !1)
                      }
                  else if ("s" != s && "n" != s) {
                    if (o || c <= r) return !1;
                    f = !1, c--
                  } else {
                    if (c <= r || l < s != o) return !1;
                    f = !1
                  } else "s" != s && "n" != s && (f = !1, c--)
                }
              }
              var b = [],
                u = b.pop.bind(b);
              for (d = 1; d < t.length; d++) {
                var h = t[d];
                b.push(1 == h ? u() | u() : 2 == h ? u() & u() : h ? n(h, a) : !u())
              }
              return !!u()
            };
          const o = (e, t) => e && r.o(e, t),
            d = e => (e.loaded = 1, e.get()),
            c = e => Object.keys(e).reduce((t, a) => (e[a].eager && (t[a] = e[a]), t), {}),
            f = e => function(t, a, n, o, d) {
              const c = r.I(t);
              return c?.then && !n ? c.then(e.bind(e, t, r.S[t], a, !1, o, d)) : e(t, r.S[t], a, n, o, d)
            },
            i = (e, t, a) => a ? a() : ((e, t) => (e => {
              throw new Error(e)
            })("Shared module " + t + " doesn't exist in shared scope " + e))(e, t),
            l = f((e, a, r, n, f) => o(a, r) ? d(((e, a, r) => {
              const n = r ? c(e[a]) : e[a];
              return (a = Object.keys(n).reduce((e, a) => !e || t(e, a) ? a : e, 0)) && n[a]
            })(a, r, n)) : i(e, r, f)),
            s = f((e, r, f, l, s, b) => {
              if (!o(r, f)) return i(e, f, b);
              const u = ((e, a, r) => {
                const n = r ? c(e[a]) : e[a];
                return Object.keys(n).reduce((e, a) => !e || !n[e].loaded && t(e, a) ? a : e, 0)
              })(r, f, l);
              return n(s, u) || (h = ((e, t, r, n) => "Unsatisfied version " + r + " from " + (r && e[t][r].from) + " of shared singleton module " + t + " (required " + a(n) + ")")(r, f, u, s), "undefined" != typeof console && console.warn && console.warn(h)), d(r[f][u]);
              var h
            }),
            b = {},
            u = {
              4637: () => s("default", "react", !1, [1, 18, 2, 0], () => r.e(2581).then(() => () => r(22581))),
              81270: () => s("default", "clsx", !1, [1, 2, 1, 1], () => r.e(4921).then(() => () => r(4921))),
              42909: () => s("default", "@rsgweb/locale-tools", !1, [0], () => Promise.all([r.e(2145), r.e(761), r.e(9758)]).then(() => () => r(77377))),
              45266: () => s("default", "framer-motion", !1, [1, 12, 38, 0], () => r.e(6739).then(() => () => r(36739))),
              76470: () => l("header", "@foundry/react", !1, () => Promise.all([r.e(6382), r.e(4823), r.e(5141), r.e(761), r.e(896), r.e(3833), r.e(5170), r.e(2043), r.e(3710), r.e(9113), r.e(1479), r.e(5229), r.e(6404), r.e(5812)]).then(() => () => r(93833))),
              13331: () => s("default", "@rsgweb/utils", !1, [0], () => Promise.all([r.e(2145), r.e(1777), r.e(2841), r.e(195), r.e(519)]).then(() => () => r(40519))),
              37116: () => s("default", "@rsgweb/modules-core-global-navigation", !1, [0], () => Promise.all([r.e(4823), r.e(5141), r.e(1613), r.e(5170), r.e(2043), r.e(3710), r.e(1479), r.e(5229), r.e(6404), r.e(3080)]).then(() => () => r(50699))),
              82199: () => s("default", "@rsgweb/rockstar-account", !1, [0], () => Promise.all([r.e(1777), r.e(6918), r.e(195), r.e(323)]).then(() => () => r(323))),
              91479: () => s("default", "@radix-ui/react-visually-hidden", !1, [1, 1, 2, 4], () => Promise.all([r.e(5170), r.e(2637)]).then(() => () => r(32637))),
              95229: () => s("default", "@foundry-int/utils", !1, [0], () => Promise.all([r.e(4791), r.e(1270)]).then(() => () => r(4791))),
              50486: () => s("default", "@radix-ui/react-slot", !1, [1, 1, 2, 4], () => r.e(2410).then(() => () => r(17172))),
              84017: () => s("default", "react-dom", !1, [1, 18, 2, 0], () => r.e(162).then(() => () => r(30162))),
              82449: () => s("default", "@radix-ui/react-id", !1, [1, 1, 1, 1], () => r.e(1915).then(() => () => r(94296))),
              92939: () => s("default", "@radix-ui/react-use-controllable-state", !1, [1, 1, 2, 2], () => r.e(9136).then(() => () => r(66755))),
              64190: () => s("default", "@radix-ui/react-portal", !1, [1, 1, 1, 10], () => r.e(8268).then(() => () => r(18268))),
              95745: () => s("default", "@radix-ui/react-focus-scope", !1, [1, 1, 1, 8], () => r.e(6736).then(() => () => r(64355))),
              59113: () => s("default", "react-remove-scroll", !1, [1, 2, 7, 2], () => r.e(3296).then(() => () => r(33296))),
              1249: () => s("default", "@vanilla-extract/recipes", !1, [2, 0, 5, 7], () => r.e(9510).then(() => () => r(47129))),
              6195: () => s("default", "@radix-ui/react-dialog", !1, [1, 1, 1, 15], () => Promise.all([r.e(6382), r.e(9113), r.e(8777)]).then(() => () => r(1158))),
              14046: () => s("default", "@radix-ui/react-accordion", !1, [1, 1, 2, 12], () => r.e(7421).then(() => () => r(69802))),
              33762: () => s("default", "@foundry/icons", !1, [0], () => Promise.all([r.e(3253), r.e(82)]).then(() => () => r(63253))),
              51858: () => s("default", "@radix-ui/react-popover", !1, [1, 1, 1, 15], () => Promise.all([r.e(6382), r.e(896), r.e(9113), r.e(3767)]).then(() => () => r(56148))),
              50245: () => s("default", "@radix-ui/react-navigation-menu", !1, [1, 1, 2, 14], () => Promise.all([r.e(6382), r.e(1692)]).then(() => () => r(61692))),
              59066: () => s("default", "spatial-navigation-polyfill", !1, [1, 1, 3, 1], () => r.e(4446).then(() => () => r(54446))),
              35812: () => s("default", "gsap", !1, [0], () => r.e(3529).then(() => () => r(93529)))
            },
            h = {
              1270: [81270],
              1479: [91479],
              2043: [82449, 92939],
              2909: [42909],
              3080: [50245, 59066],
              3331: [13331],
              3680: [37116, 82199],
              3710: [64190, 95745],
              4249: [45266, 76470],
              4637: [4637],
              5170: [50486, 84017],
              5229: [95229],
              5812: [35812],
              6404: [1249, 6195, 14046, 33762, 51858],
              7256: [50245, 59066],
              9113: [59113]
            },
            p = {};
          r.f.consumes = (e, t) => {
            r.o(h, e) && h[e].forEach(e => {
              if (r.o(b, e)) return t.push(b[e]);
              if (!p[e]) {
                const a = t => {
                  b[e] = 0, r.m[e] = a => {
                    delete r.c[e], a.exports = t()
                  }
                };
                p[e] = !0;
                const n = t => {
                  delete b[e], r.m[e] = a => {
                    throw delete r.c[e], t
                  }
                };
                try {
                  const r = u[e]();
                  r.then ? t.push(b[e] = r.then(a).catch(n)) : a(r)
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
                82: 1,
                3080: 1,
                3680: 1,
                3833: 1,
                5141: 1,
                7256: 1,
                7874: 1,
                9408: 1
              } [t] && a.push(e[t] = (e => new Promise((t, a) => {
                var n = r.miniCssF(e),
                  o = r.p + n;
                if (((e, t) => {
                    for (var a = document.getElementsByTagName("link"), r = 0; r < a.length; r++) {
                      var n = (d = a[r]).getAttribute("data-href") || d.getAttribute("href");
                      if ("stylesheet" === d.rel && (n === e || n === t)) return d
                    }
                    var o = document.getElementsByTagName("style");
                    for (r = 0; r < o.length; r++) {
                      var d;
                      if ((n = (d = o[r]).getAttribute("data-href")) === e || n === t) return d
                    }
                  })(n, o)) return t();
                ((e, t, a, n, o) => {
                  var d = document.createElement("link");
                  d.rel = "stylesheet", d.type = "text/css", r.nc && (d.nonce = r.nc), d.onerror = d.onload = a => {
                    if (d.onerror = d.onload = null, "load" === a.type) n();
                    else {
                      var r = a && a.type,
                        c = a && a.target && a.target.href || t,
                        f = new Error("Loading CSS chunk " + e + " failed.\n(" + r + ": " + c + ")");
                      f.name = "ChunkLoadError", f.code = "CSS_CHUNK_LOAD_FAILED", f.type = r, f.request = c, d.parentNode && d.parentNode.removeChild(d), o(f)
                    }
                  }, d.href = t, document.head.appendChild(d)
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
              else if (/^(5(170|229|812)|(147|290|424)9|1270|2043|3331|3710|4637|6404|7256|82|9113)$/.test(t)) e[t] = 0;
            else {
              const o = new Promise((a, r) => n = e[t] = [a, r]);
              a.push(n[2] = o);
              const d = r.p + r.u(t),
                c = new Error,
                f = a => {
                  if (r.o(e, t) && (n = e[t], 0 !== n && (e[t] = void 0), n)) {
                    const e = a && ("load" === a.type ? "missing" : a.type),
                      r = a && a.target && a.target.src;
                    c.message = "Loading chunk " + t + " failed.\n(" + e + ": " + r + ")", c.name = "ChunkLoadError", c.type = e, c.request = r, n[1](c)
                  }
                };
              r.l(d, f, "chunk-" + t, t)
            }
          };
          const t = (t, a) => {
              let [n, o, d] = a;
              var c, f, i = 0;
              if (n.some(t => 0 !== e[t])) {
                for (c in o) r.o(o, c) && (r.m[c] = o[c]);
                d && d(r)
              }
              for (t && t(a); i < n.length; i++) f = n[i], r.o(e, f) && e[f] && e[f][0](), e[f] = 0
            },
            a = self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || [];
          a.forEach(t.bind(null, 0)), a.push = t.bind(null, a.push.bind(a))
        })(), r.nc = void 0, r(87732), r(72892)
      })())
    }
  }
});