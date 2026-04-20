try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "d57599fe-8d25-4209-a7f6-a8f8930145d1", e._sentryDebugIdIdentifier = "sentry-dbid-d57599fe-8d25-4209-a7f6-a8f8930145d1")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-footer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register([], function(e, a) {
  return {
    execute: function() {
      e((() => {
        var e, r, t, f, d, c, o, b, n, i, s, l, u, p, h, m, g, y, v, w, _, k, E, S, P, j = {
            17411: (e, a, r) => {
              const t = r(77027).y;
              a.w = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = t(r.y.meta.url, e)
              }
            },
            28419: (e, a, r) => {
              (0, r(17411).w)(1)
            },
            77027: (e, a, r) => {
              a.y = function(e, a) {
                var r = document.createElement("a");
                r.href = e;
                for (var t = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, f = 0, d = t.length; f !== a && d >= 0;) "/" === t[--d] && f++;
                if (f !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + f + ") in the URL path " + e);
                var c = t.slice(0, d + 1);
                return r.protocol + "//" + r.host + c
              };
              Number.isInteger
            },
            93032: (e, a, r) => {
              r(28419)
            },
            98478: (e, a, r) => {
              "use strict";
              var t = {
                  "./root": () => Promise.all([r.e(3004), r.e(3830), r.e(5602), r.e(1127), r.e(4150), r.e(1571), r.e(2841)]).then(() => () => r(32841))
                },
                f = (e, a) => (r.R = a, a = r.o(t, e) ? t[e]() : Promise.resolve().then(() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                }), r.R = void 0, a),
                d = (e, a) => {
                  if (r.S) {
                    var t = "default",
                      f = r.S[t];
                    if (f && f !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return r.S[t] = e, r.I(t, a)
                  }
                };
              r.d(a, {
                get: () => f,
                init: () => d
              })
            }
          },
          O = {};

        function T(e) {
          var a = O[e];
          if (void 0 !== a) return a.exports;
          var r = O[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return j[e].call(r.exports, r, r.exports, T), r.loaded = !0, r.exports
        }
        return T.m = j, T.c = O, T.y = a, T.amdO = {}, T.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return T.d(a, {
            a
          }), a
        }, r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, T.t = function(a, t) {
          if (1 & t && (a = this(a)), 8 & t) return a;
          if ("object" == typeof a && a) {
            if (4 & t && a.__esModule) return a;
            if (16 & t && "function" == typeof a.then) return a
          }
          var f = Object.create(null);
          T.r(f);
          var d = {};
          e = e || [null, r({}), r([]), r(r)];
          for (var c = 2 & t && a;
            ("object" == typeof c || "function" == typeof c) && !~e.indexOf(c); c = r(c)) Object.getOwnPropertyNames(c).forEach(e => d[e] = () => a[e]);
          return d.default = () => a, T.d(f, d), f
        }, T.d = (e, a) => {
          for (var r in a) T.o(a, r) && !T.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: a[r]
          })
        }, T.f = {}, T.e = e => Promise.all(Object.keys(T.f).reduce((a, r) => (T.f[r](e, a), a), [])), T.u = e => "js/" + {
          68: "134585b3a4338cd1f51d6d44a66738a5",
          131: "5b04819b3380f1a403eebb8f9f95b5e1",
          173: "d035bcc782ca11a566d5e46cee4efc7f",
          278: "eb9fabca2cc1299b99b9ae37f35d204c",
          299: "2bbc01d755417907cdd197a2dd771cd4",
          314: "15a9aba32b40243c804acc24d49e423e",
          539: "f7bfe839e1c5d87433e8a1394cbf31d1",
          662: "bd1f468ce1bc17b18606ade308846aec",
          824: "f5c70abcee8cf29f28d78a97335584cf",
          907: "5052f6be501912313fec12c06de75a25",
          1054: "4cd117d3353526bf4c2417ace110ecc0",
          1098: "bc36d36cc280183c5dbadfbc653587e2",
          1242: "470e4011e72210ec27fb604e5e7ea894",
          1571: "26f03dbd10b2442d9b8c91584c9bbac1",
          1758: "34bc21d93cb8aae0b67ebc942a07cda1",
          1822: "5e503eb02bfc15716e5ec0971e98c068",
          1868: "98786bfd99612a13532e1a5d2860911b",
          1877: "061d998d72d730526b2af5ceba5bc989",
          2156: "ae39465f2942f18b0b7bd0895e517dbe",
          2169: "efb1b44b98154d86436e519301cfaf6e",
          2171: "87860297040ffb0dc90da12b766589bf",
          2221: "30a9f57655abd538dc89e3cce308082e",
          2234: "cf91008b4e23bb08b8ef94ec39c4fde1",
          2243: "a626d384f86e2c8cbb9d48340bdc3cf2",
          2306: "2866f45e9f87429ea76b9fe558118535",
          2309: "2a7656bbb6bbf94e83229b8eede6310b",
          2319: "ff352ce9382b7413a0b4907f6684b8ec",
          2347: "ecd6007c2cfb05bb1ab23cc2ad63eec0",
          2365: "665cf56f08d65caab85b5369405058c5",
          2398: "4fd2bd1d65566f5a2b4303573b50794a",
          2466: "2a3789fdf31172a0d8e26505d7e414f5",
          2642: "fc92f35729f7ba5f4d386db747498d6e",
          2678: "42cd42a87217ca06fc325563243f28a5",
          2787: "505da6134a7751b69194acadade31868",
          2841: "0bdda6a1c62d7132b1e4aacfcf8d1e1c",
          2864: "3f4631bf20968696bc69474bb1d79c26",
          3004: "762c9be3fbb4e8db6c1e6a46ff21642f",
          3034: "f80e75d519a07ccbb450bf69c135753c",
          3197: "565f1c1528a3c80a29243785f72aa8b6",
          3343: "3e6db348d9642c1ed59ead472b87befd",
          3370: "c07f7ab090f09c6422fd5b6709f8584b",
          3475: "2d1d9099429d565c8243a97d9e245c9f",
          3486: "206cff0408e8d037f2ddf23e05b3109c",
          3697: "52a7a3d7a676027bcf49bd0a6da820c8",
          3830: "bcd9cf3e50d77b962dfe404ec48ebbb7",
          3885: "b6ecc6e3090652d5d67ffbe37eb1dfbd",
          3896: "98143f6c0b2290e3366a880314ef884e",
          3941: "2335ff7e19bf2402808f94a6089f3382",
          4011: "170855911ee8086363891109fdb6932c",
          4057: "6c93a8ce5a66da2edb1fd2a59990d62b",
          4528: "aeca3eaaefd5dc6738faeea6a8d1f23b",
          4578: "a570e195b8b2624dd3c10b02452e4d53",
          4621: "76697f433a55222693d62a954966394c",
          4700: "f60081a0c7ac1752e0d9c1ed920e01ff",
          4710: "1b657a16897948cd3fc8b4bce2d1082d",
          4731: "fa819e92bdb31ce7d5061ef88e53c9be",
          4792: "258436afdb6003783c9cb6a26f9a59d5",
          4799: "3cbed50633ecd3d70ce37a0e0602e3c0",
          4851: "78f7b0197a10dd07c9fa5419304ff655",
          4861: "6047c33ee9a55da2f616c7107556c17e",
          4913: "82f8f388e62b99db1d57b8054b505303",
          5018: "be5cedfad3eb578165b3925ded6202db",
          5085: "02efb2d7aa9c6699f7226d1ef0710a55",
          5233: "fb41bac446b8197294f692a2758ee546",
          5259: "74bd132a49e3964e425b81014a910a5b",
          5265: "a1e58bbc5d4e8351df856cdec34b1f2b",
          5389: "ab2983a4cc377d66b56332dc7ee8347b",
          5415: "813efb4ee5ea872dd0cf15cbafa08a7a",
          5530: "a0bb58aecf14f414e554c4e61d6c65e6",
          5602: "5126601ab214297b3c24a6285f7d3a4d",
          5639: "68e45a20719215f2022fe37e9e3d4671",
          5663: "cc25d89d87badf640114548f8e623956",
          5742: "2121f7505cf711168ec576e7a249b275",
          5830: "3b4746f910d645c1dc5e5534415fec90",
          5832: "87ea1ab66a377658a228f56f9a2f678a",
          6267: "34b258475619410a2820a24a7d2e6d2f",
          6280: "06016d6505ca52cbd381c6e55cd79e15",
          6285: "01d4f7519caaea03e94b1d733ba15de6",
          6361: "b7d4f7b4d15cdc67eacd33e4515af8c0",
          6471: "62e87e8fcffe01dc414c38b13f8effcb",
          6664: "6d6700392e16f883556e7599b1d8991f",
          6879: "c719f67adf3c5a344633e4d97ddee72c",
          6891: "cdba3090009492960096f1f75196d2af",
          6997: "87946c2c50ab358448146808778783fc",
          7010: "347d9671131abb0e0926ddfa86fec8b6",
          7073: "ab9513cf19ddff8ecbad881dc5cb1aff",
          7407: "9442274536cfbeae062dee2fd233b866",
          7436: "ce6c7245d88e672c35e596e83d947615",
          7452: "76ccaa1a8ef00529e65057f51d7d06cc",
          7453: "c3150f56a279ada3305fadd46e36d6fa",
          7557: "90d2169e6d19ea7609e6ee73e10c4f84",
          7970: "ff42e7c8bc4906e38e0d723afc27b941",
          8068: "e2e605a77ae5ac375d37256ede5e1e7d",
          8113: "419926b799823a72557a0b0f922461df",
          8272: "c08571fed20a58f2d04d91e6917ea191",
          8325: "19c41e61178604027c58d4bd3d9b7094",
          8391: "6591da9c490eb27aaf9d43b5041d1ddd",
          8431: "dd3659d09dbe411eac9a36fa9b7933d2",
          8745: "065303cd0f45ade9536679989774d40b",
          8755: "44caa9913d892fcc56763cd683e03b71",
          8845: "a18af339d69c30a88c216b828615f1b1",
          8880: "5d161d2a97d0e473770b8011c6ea5b68",
          8938: "51aba099c89b1d144c44a659e8ca221f",
          8970: "b48d3826816b8da36f18bc0fec6dd008",
          9022: "4f48ecd88aed7988a2fd518b8c9c5632",
          9028: "edf61ee8468f47c6f749453f5e3f6044",
          9126: "14fb589ea81f14fda70e67d122ce704c",
          9308: "cc3c2934093cfe9b6372124bf4105590",
          9377: "c3a5ee4064ffd14c539c5c2a23fba2be",
          9588: "2b33644bf82d49273e9da81f5fdc97c0",
          9615: "774c9f099e017a674035a0dbb83bf933",
          9760: "91a8ecd2813cf60cd239b0e5398703de",
          9936: "a5e25f9e29afc1a987e470d2c873f6d9",
          9990: "3fa1a61ec8eb315fe93dd767e7af3e70"
        } [e] + ".js", T.miniCssF = e => "css/" + {
          539: "bea27abf9ea255353b6df2c5f3d271a2",
          1571: "f8c1968ff675df159b6c305e0f588a38",
          2309: "4b67dc8d4b60fc984317a28650d62a68",
          2841: "f5e13731cc7fd6278d56aaf45699d2d3",
          5602: "22f1c31f76e5daa482213b9606d3ec8a"
        } [e] + ".css", T.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), T.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), t = {}, f = "@rockstargames/modules-core-footer:", T.l = (e, a, r, d) => {
          if (t[e]) t[e].push(a);
          else {
            var c, o;
            if (void 0 !== r)
              for (var b = document.getElementsByTagName("script"), n = 0; n < b.length; n++) {
                var i = b[n];
                if (i.getAttribute("src") == e || i.getAttribute("data-webpack") == f + r) {
                  c = i;
                  break
                }
              }
            c || (o = !0, (c = document.createElement("script")).charset = "utf-8", c.timeout = 120, T.nc && c.setAttribute("nonce", T.nc), c.setAttribute("data-webpack", f + r), c.src = e), t[e] = [a];
            var s = (a, r) => {
                c.onerror = c.onload = null, clearTimeout(l);
                var f = t[e];
                if (delete t[e], c.parentNode && c.parentNode.removeChild(c), f && f.forEach(e => e(r)), a) return a(r)
              },
              l = setTimeout(s.bind(null, void 0, {
                type: "timeout",
                target: c
              }), 12e4);
            c.onerror = s.bind(null, c.onerror), c.onload = s.bind(null, c.onload), o && document.head.appendChild(c)
          }
        }, T.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, T.nmd = e => (e.paths = [], e.children || (e.children = []), e), (() => {
          T.S = {};
          var e = {},
            a = {};
          T.I = (r, t) => {
            t || (t = []);
            var f = a[r];
            if (f || (f = a[r] = {}), !(t.indexOf(f) >= 0)) {
              if (t.push(f), e[r]) return e[r];
              T.o(T.S, r) || (T.S[r] = {});
              var d = T.S[r],
                c = "@rockstargames/modules-core-footer",
                o = (e, a, r, t) => {
                  var f = d[e] = d[e] || {},
                    o = f[a];
                  (!o || !o.loaded && (!t != !o.eager ? t : c > o.from)) && (f[a] = {
                    get: r,
                    from: c,
                    eager: !!t
                  })
                },
                b = [];
              switch (r) {
                case "default":
                  o("@rsgweb/locale-tools", "0.0.0", () => Promise.all([T.e(3004), T.e(2787), T.e(1127), T.e(2319)]).then(() => () => T(2319))), o("@rsgweb/modules-core-user-action-menu", "0.0.0", () => Promise.all([T.e(3004), T.e(4792), T.e(8745), T.e(3830), T.e(1877), T.e(1127), T.e(8429), T.e(5085), T.e(4150), T.e(8136), T.e(539), T.e(1571)]).then(() => () => T(95654))), o("@rsgweb/rockstar-account", "0.0.0", () => Promise.all([T.e(4792), T.e(8068), T.e(1127), T.e(5085), T.e(4150), T.e(8136), T.e(8113)]).then(() => () => T(32169))), o("@rsgweb/utils", "0.0.0", () => Promise.all([T.e(3004), T.e(4792), T.e(4057), T.e(1127), T.e(5085), T.e(4150), T.e(9588)]).then(() => () => T(79308))), o("react-dom", "18.3.1", () => Promise.all([T.e(1098), T.e(1127)]).then(() => () => T(71098))), o("react-router-dom", "6.30.1", () => Promise.all([T.e(5389), T.e(1127), T.e(8429)]).then(() => () => T(15389))), o("react", "18.3.1", () => T.e(8431).then(() => () => T(48431)));
                  break;
                case "footer":
                  o("@foundry/react", "5.19.0", () => Promise.all([T.e(3004), T.e(8745), T.e(2787), T.e(3830), T.e(5602), T.e(2309), T.e(1127), T.e(8429)]).then(() => () => T(68669)))
              }
              return e[r] = b.length ? Promise.all(b).then(() => e[r] = 1) : 1
            }
          }
        })(), (() => {
          var e;
          T.g.importScripts && (e = T.g.location + "");
          var a = T.g.document;
          if (!e && a && (a.currentScript && "SCRIPT" === a.currentScript.tagName.toUpperCase() && (e = a.currentScript.src), !e)) {
            var r = a.getElementsByTagName("script");
            if (r.length)
              for (var t = r.length - 1; t > -1 && (!e || !/^http(s?):/.test(e));) e = r[t--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), T.p = e
        })(), d = e => {
          var a = e => e.split(".").map(e => +e == e ? +e : e),
            r = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
            t = r[1] ? a(r[1]) : [];
          return r[2] && (t.length++, t.push.apply(t, a(r[2]))), r[3] && (t.push([]), t.push.apply(t, a(r[3]))), t
        }, c = (e, a) => {
          e = d(e), a = d(a);
          for (var r = 0;;) {
            if (r >= e.length) return r < a.length && "u" != (typeof a[r])[0];
            var t = e[r],
              f = (typeof t)[0];
            if (r >= a.length) return "u" == f;
            var c = a[r],
              o = (typeof c)[0];
            if (f != o) return "o" == f && "n" == o || "s" == o || "u" == f;
            if ("o" != f && "u" != f && t != c) return t < c;
            r++
          }
        }, o = e => {
          var a = e[0],
            r = "";
          if (1 === e.length) return "*";
          if (a + .5) {
            r += 0 == a ? ">=" : -1 == a ? "<" : 1 == a ? "^" : 2 == a ? "~" : a > 0 ? "=" : "!=";
            for (var t = 1, f = 1; f < e.length; f++) t--, r += "u" == (typeof(c = e[f]))[0] ? "-" : (t > 0 ? "." : "") + (t = 2, c);
            return r
          }
          var d = [];
          for (f = 1; f < e.length; f++) {
            var c = e[f];
            d.push(0 === c ? "not(" + b() + ")" : 1 === c ? "(" + b() + " || " + b() + ")" : 2 === c ? d.pop() + " " + d.pop() : o(c))
          }
          return b();

          function b() {
            return d.pop().replace(/^\((.+)\)$/, "$1")
          }
        }, b = (e, a) => {
          if (0 in e) {
            a = d(a);
            var r = e[0],
              t = r < 0;
            t && (r = -r - 1);
            for (var f = 0, c = 1, o = !0;; c++, f++) {
              var n, i, s = c < e.length ? (typeof e[c])[0] : "";
              if (f >= a.length || "o" == (i = (typeof(n = a[f]))[0])) return !o || ("u" == s ? c > r && !t : "" == s != t);
              if ("u" == i) {
                if (!o || "u" != s) return !1
              } else if (o)
                if (s == i)
                  if (c <= r) {
                    if (n != e[c]) return !1
                  } else {
                    if (t ? n > e[c] : n < e[c]) return !1;
                    n != e[c] && (o = !1)
                  }
              else if ("s" != s && "n" != s) {
                if (t || c <= r) return !1;
                o = !1, c--
              } else {
                if (c <= r || i < s != t) return !1;
                o = !1
              } else "s" != s && "n" != s && (o = !1, c--)
            }
          }
          var l = [],
            u = l.pop.bind(l);
          for (f = 1; f < e.length; f++) {
            var p = e[f];
            l.push(1 == p ? u() | u() : 2 == p ? u() & u() : p ? b(p, a) : !u())
          }
          return !!u()
        }, n = (e, a) => e && T.o(e, a), i = e => (e.loaded = 1, e.get()), s = e => Object.keys(e).reduce((a, r) => (e[r].eager && (a[r] = e[r]), a), {}), l = (e, a, r, t) => {
          var f = t ? s(e[a]) : e[a];
          return (a = Object.keys(f).reduce((e, a) => !b(r, a) || e && !c(e, a) ? e : a, 0)) && f[a]
        }, u = (e, a, r) => {
          var t = r ? s(e[a]) : e[a];
          return Object.keys(t).reduce((e, a) => !e || !t[e].loaded && c(e, a) ? a : e, 0)
        }, p = (e, a, r, t) => "Unsatisfied version " + r + " from " + (r && e[a][r].from) + " of shared singleton module " + a + " (required " + o(t) + ")", h = (e, a, r, t, f) => {
          var d = e[r];
          return "No satisfying version (" + o(t) + ")" + (f ? " for eager consumption" : "") + " of shared module " + r + " found in shared scope " + a + ".\nAvailable versions: " + Object.keys(d).map(e => e + " from " + d[e].from).join(", ")
        }, m = e => {
          throw new Error(e)
        }, g = e => {
          "undefined" != typeof console && console.warn && console.warn(e)
        }, v = (e, a, r) => r ? r() : ((e, a) => m("Shared module " + a + " doesn't exist in shared scope " + e))(e, a), w = (y = e => function(a, r, t, f, d) {
          var c = T.I(a);
          return c && c.then && !t ? c.then(e.bind(e, a, T.S[a], r, !1, f, d)) : e(a, T.S[a], r, t, f, d)
        })((e, a, r, t, f, d) => {
          if (!n(a, r)) return v(e, r, d);
          var c = l(a, r, f, t);
          return c ? i(c) : d ? d() : void m(h(a, e, r, f, t))
        }), _ = y((e, a, r, t, f, d) => {
          if (!n(a, r)) return v(e, r, d);
          var c = u(a, r, t);
          return b(f, c) || g(p(a, r, c, f)), i(a[r][c])
        }), k = {}, E = {
          71127: () => _("default", "react", !1, [1, 18, 2, 0], () => T.e(8431).then(() => () => T(48431))),
          10181: () => _("default", "react-router-dom", !1, [1, 6, 11, 2], () => Promise.all([T.e(5389), T.e(8429)]).then(() => () => T(15389))),
          56990: () => _("default", "@rsgweb/locale-tools", !1, [4, 0, 0, 0], () => Promise.all([T.e(3004), T.e(2787), T.e(7557)]).then(() => () => T(2319))),
          61874: () => _("default", "@rsgweb/rockstar-account", !1, [4, 0, 0, 0], () => Promise.all([T.e(4792), T.e(8068), T.e(5085), T.e(8136), T.e(2169)]).then(() => () => T(32169))),
          82559: () => w("footer", "@foundry/react", !1, [2, 5, 19], () => Promise.all([T.e(8745), T.e(2787), T.e(5602), T.e(2309), T.e(8429)]).then(() => () => T(68669))),
          12310: () => _("default", "@rsgweb/modules-core-user-action-menu", !1, [4, 0, 0, 0], () => Promise.all([T.e(4792), T.e(8745), T.e(1877), T.e(8429), T.e(5085), T.e(8136), T.e(539)]).then(() => () => T(95654))),
          18429: () => _("default", "react-dom", !1, [1, 18, 2, 0], () => T.e(1098).then(() => () => T(71098))),
          58136: () => _("default", "@rsgweb/utils", !1, [4, 0, 0, 0], () => Promise.all([T.e(3004), T.e(4057), T.e(9308)]).then(() => () => T(79308)))
        }, S = {
          1127: [71127],
          1571: [61874, 82559],
          2841: [12310],
          4150: [10181, 56990],
          8136: [58136],
          8429: [18429]
        }, P = {}, T.f.consumes = (e, a) => {
          T.o(S, e) && S[e].forEach(e => {
            if (T.o(k, e)) return a.push(k[e]);
            if (!P[e]) {
              var r = a => {
                k[e] = 0, T.m[e] = r => {
                  delete T.c[e], r.exports = a()
                }
              };
              P[e] = !0;
              var t = a => {
                delete k[e], T.m[e] = r => {
                  throw delete T.c[e], a
                }
              };
              try {
                var f = E[e]();
                f.then ? a.push(k[e] = f.then(r).catch(t)) : r(f)
              } catch (e) {
                t(e)
              }
            }
          })
        }, (() => {
          if ("undefined" != typeof document) {
            var e = {
              417: 0
            };
            T.f.miniCss = (a, r) => {
              e[a] ? r.push(e[a]) : 0 !== e[a] && {
                539: 1,
                1571: 1,
                2309: 1,
                2841: 1,
                5602: 1
              } [a] && r.push(e[a] = (e => new Promise((a, r) => {
                var t = T.miniCssF(e),
                  f = T.p + t;
                if (((e, a) => {
                    for (var r = document.getElementsByTagName("link"), t = 0; t < r.length; t++) {
                      var f = (c = r[t]).getAttribute("data-href") || c.getAttribute("href");
                      if ("stylesheet" === c.rel && (f === e || f === a)) return c
                    }
                    var d = document.getElementsByTagName("style");
                    for (t = 0; t < d.length; t++) {
                      var c;
                      if ((f = (c = d[t]).getAttribute("data-href")) === e || f === a) return c
                    }
                  })(t, f)) return a();
                ((e, a, r, t, f) => {
                  var d = document.createElement("link");
                  d.rel = "stylesheet", d.type = "text/css", T.nc && (d.nonce = T.nc), d.onerror = d.onload = r => {
                    if (d.onerror = d.onload = null, "load" === r.type) t();
                    else {
                      var c = r && r.type,
                        o = r && r.target && r.target.href || a,
                        b = new Error("Loading CSS chunk " + e + " failed.\n(" + c + ": " + o + ")");
                      b.name = "ChunkLoadError", b.code = "CSS_CHUNK_LOAD_FAILED", b.type = c, b.request = o, d.parentNode && d.parentNode.removeChild(d), f(b)
                    }
                  }, d.href = a, document.head.appendChild(d)
                })(e, f, 0, a, r)
              }))(a).then(() => {
                e[a] = 0
              }, r => {
                throw delete e[a], r
              }))
            }
          }
        })(), (() => {
          var e = {
            417: 0
          };
          T.f.j = (a, r) => {
            var t = T.o(e, a) ? e[a] : void 0;
            if (0 !== t)
              if (t) r.push(t[2]);
              else if (/^(1127|4150|8136|8429)$/.test(a)) e[a] = 0;
            else {
              var f = new Promise((r, f) => t = e[a] = [r, f]);
              r.push(t[2] = f);
              var d = T.p + T.u(a),
                c = new Error;
              T.l(d, r => {
                if (T.o(e, a) && (0 !== (t = e[a]) && (e[a] = void 0), t)) {
                  var f = r && ("load" === r.type ? "missing" : r.type),
                    d = r && r.target && r.target.src;
                  c.message = "Loading chunk " + a + " failed.\n(" + f + ": " + d + ")", c.name = "ChunkLoadError", c.type = f, c.request = d, t[1](c)
                }
              }, "chunk-" + a, a)
            }
          };
          var a = (a, r) => {
              var t, f, [d, c, o] = r,
                b = 0;
              if (d.some(a => 0 !== e[a])) {
                for (t in c) T.o(c, t) && (T.m[t] = c[t]);
                o && o(T)
              }
              for (a && a(r); b < d.length; b++) f = d[b], T.o(e, f) && e[f] && e[f][0](), e[f] = 0
            },
            r = self.webpackChunk_rockstargames_modules_core_footer = self.webpackChunk_rockstargames_modules_core_footer || [];
          r.forEach(a.bind(null, 0)), r.push = a.bind(null, r.push.bind(r))
        })(), T.nc = void 0, T(93032), T(98478)
      })())
    }
  }
});