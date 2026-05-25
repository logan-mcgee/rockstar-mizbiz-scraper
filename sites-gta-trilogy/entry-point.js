try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "d357a6eb-b2c5-448f-b622-dbe87b11464b", e._sentryDebugIdIdentifier = "sentry-dbid-d357a6eb-b2c5-448f-b622-dbe87b11464b")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-gta-trilogy",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/modules-core-videoplayer"], function(e, a) {
  var t = {};
  return Object.defineProperty(t, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      t.default = e.default || e, Object.keys(e).forEach(function(a) {
        t[a] = e[a]
      })
    }],
    execute: function() {
      e((() => {
        var e, r, f, d, n, o, c = {
            20154(e, a, t) {
              (0, t(89160).w)(1)
            },
            89160(e, a, t) {
              const r = t(51908).y;
              a.w = function(e) {
                if (e || (e = 1), !t.y.meta || !t.y.meta.url) throw console.error("__system_context__", t.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                t.p = r(t.y.meta.url, e)
              }
            },
            35649(e, a, t) {
              t(20154)
            },
            51908(e, a, t) {
              a.y = function(e, a) {
                var t = document.createElement("a");
                t.href = e;
                for (var r = "/" === t.pathname[0] ? t.pathname : "/" + t.pathname, f = 0, d = r.length; f !== a && d >= 0;) "/" === r[--d] && f++;
                if (f !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + f + ") in the URL path " + e);
                var n = r.slice(0, d + 1);
                return t.protocol + "//" + t.host + n
              };
              Number.isInteger
            },
            85819(e, a, t) {
              "use strict";
              var r = {
                  "./index": () => Promise.all([t.e(1998), t.e(7863), t.e(3082), t.e(5997), t.e(9658)]).then(() => () => t(69658))
                },
                f = (e, a) => (t.R = a, a = t.o(r, e) ? r[e]() : Promise.resolve().then(() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                }), t.R = void 0, a),
                d = (e, a) => {
                  if (t.S) {
                    var r = "default",
                      f = t.S[r];
                    if (f && f !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return t.S[r] = e, t.I(r, a)
                  }
                };
              t.d(a, {
                get: () => f,
                init: () => d
              })
            },
            25136(e) {
              "use strict";
              e.exports = t
            }
          },
          b = {};

        function i(e) {
          var a = b[e];
          if (void 0 !== a) return a.exports;
          var t = b[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return c[e].call(t.exports, t, t.exports, i), t.loaded = !0, t.exports
        }
        return i.m = c, i.c = b, i.y = a, i.amdO = {}, i.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return i.d(a, {
            a
          }), a
        }, r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, i.t = function(a, t) {
          if (1 & t && (a = this(a)), 8 & t) return a;
          if ("object" == typeof a && a) {
            if (4 & t && a.__esModule) return a;
            if (16 & t && "function" == typeof a.then) return a
          }
          var f = Object.create(null);
          i.r(f);
          var d = {};
          e = e || [null, r({}), r([]), r(r)];
          for (var n = 2 & t && a;
            ("object" == typeof n || "function" == typeof n) && !~e.indexOf(n); n = r(n)) Object.getOwnPropertyNames(n).forEach(e => d[e] = () => a[e]);
          return d.default = () => a, i.d(f, d), f
        }, i.d = (e, a) => {
          for (var t in a) i.o(a, t) && !i.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: a[t]
          })
        }, i.f = {}, i.e = e => Promise.all(Object.keys(i.f).reduce((a, t) => (i.f[t](e, a), a), [])), i.u = e => "js/" + {
          131: "5d1a25918f5e5f4c7281a811df059c1c",
          162: "26eaa38ae6879d167db6afc892b70393",
          278: "a69f8cea459d2f23859ad95576b194b6",
          299: "c55a1427ceb88f641e7ce200f5967906",
          314: "4a984e02557d36d268bb729f8c53ea0b",
          662: "31ba7ec3b417cbbec65b638547579c13",
          824: "49db42f71a76935cf0d02af0e4954d12",
          907: "bf7733c401869111e201ec4cedf2401e",
          951: "f7b225b069eae8465e2af70db2c9c59c",
          1054: "3d2fb96ee2a0b014600f6c589ecf87fc",
          1242: "3107eb034a0a8dce33bc91871f193f34",
          1822: "dbc06a307933eb7f31a28875fa1238d5",
          1868: "6a12ad3228ecf0796eb57ccd363924e7",
          1998: "083e0faf5cb54bb7c9aa4c6c277a3621",
          2156: "0f08b188a8cc9fc93bf57dd7c264eaa1",
          2171: "e5feb86ed49062437cbd9d6ee72b0cba",
          2221: "8e26f210040ad5a61791bc481960a94e",
          2243: "c8ab9eaf65c468ff8d4a3d5b7accee8d",
          2347: "8572620d719686b95ffefcd91c4e5445",
          2365: "8ecda9e98aae659f5a3ca0317e4e51dc",
          2398: "6fb3cbadecbc99a73e257205fdfc7c0e",
          2466: "01dc35ea26d962eb1fb9d8810043fcb4",
          2581: "89b92249870c262b51611e1de722e131",
          2642: "94bc563290981af2e2be6a89451a57b1",
          2678: "2a6fea44a127c0eeacc1be8470da9856",
          2864: "1744652343f90837bf042f9397fe61fb",
          2884: "3193ffbfa7138ec9731672fadc8c8485",
          3034: "04b360893e88c0faec884a1885d8c255",
          3197: "66bc8a3a92f64a9402ca6cf085398f55",
          3343: "12195028328cc9f72f510d006ebfab19",
          3370: "0d52dc29492d6219db1f80ad5c4faebd",
          3475: "a4618df553d4c5524ce66d0c5cd53e58",
          3486: "ed0f5f146c9cada81f7d8b20f1d23946",
          3697: "d5b244c0c366f06fbe4b5c542843121b",
          3885: "85c7953c1ffc8cb95aef7aff4ec614b9",
          3941: "84a9ee3ede53241cf92147947e60e36f",
          4011: "e4c084bbd99bcba77d24d734c758eaaa",
          4269: "e77d3ada7c9edeaae4a031cad569400c",
          4528: "d6d4e7a2f88c9d1965ee7e3f9b7c005f",
          4621: "de74c2cf5dab0c621dc40abb55e59b88",
          4700: "c51838b58bbed0bd48bfdcf1bc9c58ac",
          4710: "9fbc4491ba68bc072ac0e56932176bed",
          4731: "b1dc4fe2af12a95ee35c55292ce9dfed",
          4799: "1709e2ccde155748006ff67fc346ad6b",
          4851: "906197d7c2440830499a038a8c24a061",
          4861: "4f058c4352d35e70dca99d171b780276",
          4913: "367a2e5b1787ccd069958b031e396702",
          4921: "fd545adc9f62cd7ec9e51003ba0ffed6",
          5018: "a6d098c10d3a02d67f808a9207408032",
          5233: "f3916cd3188d55f9d10d4954fd3e2bec",
          5259: "406c95d2e76e062c174863c61472e609",
          5519: "3858833a96306d45091cc06407b70088",
          5530: "c80404110ba450d54f58bc81db686d74",
          5583: "0deabf48d50c0d964aaeeef4c5bcdc71",
          5639: "607ce8fba861f18df7cc0de141990727",
          5663: "c462acc9899e39621101e8691df251c8",
          5742: "657bf5d6b7b6b129170d654127d54935",
          5830: "8b37cb0ca82dec8570ccf32cf371e760",
          5832: "2328a15899645c023979fb93b4209567",
          5997: "1de149871fd589a2487e11fb093f1162",
          6048: "20ea5f421fb1923cb8eb2b45656b3ed2",
          6267: "576a4372a6fcda8ba49a4c26f8e8b315",
          6280: "67756d239a7e065e63964fe6234d776a",
          6285: "36472b5459d28035986643b06ffff79e",
          6361: "ab2276a96ab2f5617b34fd0e67c8544c",
          6663: "ff99e865da5e78eda895791c356be12d",
          6664: "5ef8c51f6ffab8530391f0843f33249f",
          6836: "84e74648499c161dc26a3b11b0efa373",
          6879: "fe4b8fdaeed8d6782e24bf5b6be1cb98",
          6891: "968813256192e20d48c892b3d08cdf12",
          6997: "1b7032799fe792a98a260f228332cccd",
          7010: "d4218596b1365c8216e4f26651738ec8",
          7073: "6a5ac0b26f8a0c83878ddfca14b9b8f1",
          7436: "8d156ee6f8eec6eaaf482e1461e03d92",
          7452: "a9cd315921506d2eee672db23e561410",
          7453: "1fa131ea17f0f2853c7979dff124e703",
          7863: "7bcdbed3eaa698bb0425c078ee3e8ca2",
          7970: "fa20fe107f8a821b6a43e355dd22b8ba",
          8272: "5d69403a7286bb2e79d207fccc32b670",
          8391: "9eaa244613b30cf5a7fe07b1e695925f",
          8646: "694e691b0bcfb699e0d2e8475248b058",
          8679: "425891909e2b2cb455933d588bfb29ad",
          8755: "b5065e3aa000b8e6119eef3b733cf754",
          8880: "439d1165fbca99b64aa390b376ddb1d5",
          8970: "e1336b9106228eaa0a86773572fdcec6",
          9022: "54ea2d8868da7501ddf3b06fc097b724",
          9028: "3502028735317071d46080fb70fd4ceb",
          9126: "891764e4db330da7ad4e9d6c3528fc81",
          9377: "eae5d3ea660a4c0dc6b761cc5ae8e6a2",
          9512: "99794df1d8d4b56368d301aacd69a3d6",
          9615: "4578973795330f3b44ed609d08b15648",
          9658: "1da37901cfd5e5c813888a5c97738c7d",
          9793: "2d50fb1381baff88f3b0673d55a8711d",
          9936: "ee6c7848d9ee8153afa79f8c66fd0b64",
          9990: "784dc85ca80b2e1f3e931df2b268dcb3"
        } [e] + ".js", i.miniCssF = e => "css/e83618ae9e6416fc1e9cfead82e5be2f.css", i.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), i.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), f = {}, d = "@rockstargames/sites-gta-trilogy:", i.l = (e, a, t, r) => {
          if (f[e]) f[e].push(a);
          else {
            var n, o;
            if (void 0 !== t)
              for (var c = document.getElementsByTagName("script"), b = 0; b < c.length; b++) {
                var s = c[b];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == d + t) {
                  n = s;
                  break
                }
              }
            n || (o = !0, (n = document.createElement("script")).charset = "utf-8", i.nc && n.setAttribute("nonce", i.nc), n.setAttribute("data-webpack", d + t), n.src = e), f[e] = [a];
            var l = (a, t) => {
                n.onerror = n.onload = null, clearTimeout(u);
                var r = f[e];
                if (delete f[e], n.parentNode && n.parentNode.removeChild(n), r && r.forEach(e => e(t)), a) return a(t)
              },
              u = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: n
              }), 12e4);
            n.onerror = l.bind(null, n.onerror), n.onload = l.bind(null, n.onload), o && document.head.appendChild(n)
          }
        }, i.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, i.nmd = e => (e.paths = [], e.children || (e.children = []), e), n = {
          9658: [31879]
        }, o = {
          31879: ["default", "./index", 25136]
        }, i.f.remotes = (e, a) => {
          i.o(n, e) && n[e].forEach(e => {
            var t = i.R;
            t || (t = []);
            var r = o[e];
            if (!(t.indexOf(r) >= 0)) {
              if (t.push(r), r.p) return a.push(r.p);
              var f = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + r[1] + '" from ' + r[2]), i.m[e] = () => {
                    throw a
                  }, r.p = 0
                },
                d = (e, t, d, n, o, c) => {
                  try {
                    var b = e(t, d);
                    if (!b || !b.then) return o(b, n, c);
                    var i = b.then(e => o(e, n), f);
                    if (!c) return i;
                    a.push(r.p = i)
                  } catch (e) {
                    f(e)
                  }
                },
                n = (e, a, f) => d(a.get, r[1], t, 0, c, f),
                c = a => {
                  r.p = 1, i.m[e] = e => {
                    e.exports = a()
                  }
                };
              d(i, r[2], 0, 0, (e, a, t) => e ? d(i.I, r[0], 0, e, n, t) : f(), 1)
            }
          })
        }, (() => {
          i.S = {};
          var e = {},
            a = {};
          i.I = (t, r) => {
            r || (r = []);
            var f = a[t];
            if (f || (f = a[t] = {}), !(r.indexOf(f) >= 0)) {
              if (r.push(f), e[t]) return e[t];
              i.o(i.S, t) || (i.S[t] = {});
              var d = i.S[t],
                n = "@rockstargames/sites-gta-trilogy",
                o = (e, a, t, r) => {
                  var f = d[e] = d[e] || {},
                    o = f[a];
                  (!o || !o.loaded && (!r != !o.eager ? r : n > o.from)) && (f[a] = {
                    get: t,
                    from: n,
                    eager: !!r
                  })
                },
                c = [];
              return "default" === t && (o("@rsgweb/locale-tools", "0.0.0", () => Promise.all([i.e(9512), i.e(6836), i.e(3082), i.e(2884)]).then(() => () => i(76602))), o("@rsgweb/utils", "0.0.0-development", () => Promise.all([i.e(9512), i.e(5519), i.e(1998), i.e(3082), i.e(5997), i.e(6048)]).then(() => () => i(36048))), o("clsx", "2.1.1", () => i.e(4921).then(() => () => i(4921))), o("framer-motion", "12.38.0", () => Promise.all([i.e(6663), i.e(3082), i.e(9793)]).then(() => () => i(36663))), o("react-dom", "18.3.1", () => Promise.all([i.e(162), i.e(3082)]).then(() => () => i(30162))), o("react-router-dom", "6.30.3", () => Promise.all([i.e(4269), i.e(3082), i.e(4017)]).then(() => () => i(74269))), o("react", "18.3.1", () => i.e(2581).then(() => () => i(22581))), o("usehooks-ts", "2.16.0", () => Promise.all([i.e(5583), i.e(3082)]).then(() => () => i(55583))), (() => {
                var e = e => {
                  return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                  var a
                };
                try {
                  var a = i(25136);
                  if (!a) return;
                  var f = e => e && e.init && e.init(i.S[t], r);
                  if (a.then) return c.push(a.then(f, e));
                  var d = f(a);
                  if (d && d.then) return c.push(d.catch(e))
                } catch (a) {
                  e(a)
                }
              })()), c.length ? e[t] = Promise.all(c).then(() => e[t] = 1) : e[t] = 1
            }
          }
        })(), (() => {
          var e;
          i.g.importScripts && (e = i.g.location + "");
          var a = i.g.document;
          if (!e && a && (a.currentScript && "SCRIPT" === a.currentScript.tagName.toUpperCase() && (e = a.currentScript.src), !e)) {
            var t = a.getElementsByTagName("script");
            if (t.length)
              for (var r = t.length - 1; r > -1 && (!e || !/^http(s?):/.test(e));) e = t[r--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), i.p = e
        })(), (() => {
          var e = e => {
              var a = e => e.split(".").map(e => +e == e ? +e : e),
                t = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                r = t[1] ? a(t[1]) : [];
              return t[2] && (r.length++, r.push.apply(r, a(t[2]))), t[3] && (r.push([]), r.push.apply(r, a(t[3]))), r
            },
            a = e => {
              var t = e[0],
                r = "";
              if (1 === e.length) return "*";
              if (t + .5) {
                r += 0 == t ? ">=" : -1 == t ? "<" : 1 == t ? "^" : 2 == t ? "~" : t > 0 ? "=" : "!=";
                for (var f = 1, d = 1; d < e.length; d++) f--, r += "u" == (typeof(o = e[d]))[0] ? "-" : (f > 0 ? "." : "") + (f = 2, o);
                return r
              }
              var n = [];
              for (d = 1; d < e.length; d++) {
                var o = e[d];
                n.push(0 === o ? "not(" + c() + ")" : 1 === o ? "(" + c() + " || " + c() + ")" : 2 === o ? n.pop() + " " + n.pop() : a(o))
              }
              return c();

              function c() {
                return n.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            t = (a, r) => {
              if (0 in a) {
                r = e(r);
                var f = a[0],
                  d = f < 0;
                d && (f = -f - 1);
                for (var n = 0, o = 1, c = !0;; o++, n++) {
                  var b, i, s = o < a.length ? (typeof a[o])[0] : "";
                  if (n >= r.length || "o" == (i = (typeof(b = r[n]))[0])) return !c || ("u" == s ? o > f && !d : "" == s != d);
                  if ("u" == i) {
                    if (!c || "u" != s) return !1
                  } else if (c)
                    if (s == i)
                      if (o <= f) {
                        if (b != a[o]) return !1
                      } else {
                        if (d ? b > a[o] : b < a[o]) return !1;
                        b != a[o] && (c = !1)
                      }
                  else if ("s" != s && "n" != s) {
                    if (d || o <= f) return !1;
                    c = !1, o--
                  } else {
                    if (o <= f || i < s != d) return !1;
                    c = !1
                  } else "s" != s && "n" != s && (c = !1, o--)
                }
              }
              var l = [],
                u = l.pop.bind(l);
              for (n = 1; n < a.length; n++) {
                var h = a[n];
                l.push(1 == h ? u() | u() : 2 == h ? u() & u() : h ? t(h, r) : !u())
              }
              return !!u()
            },
            r = (a, t, r) => {
              var f = r ? (e => Object.keys(e).reduce((a, t) => (e[t].eager && (a[t] = e[t]), a), {}))(a[t]) : a[t];
              return Object.keys(f).reduce((a, t) => !a || !f[a].loaded && ((a, t) => {
                a = e(a), t = e(t);
                for (var r = 0;;) {
                  if (r >= a.length) return r < t.length && "u" != (typeof t[r])[0];
                  var f = a[r],
                    d = (typeof f)[0];
                  if (r >= t.length) return "u" == d;
                  var n = t[r],
                    o = (typeof n)[0];
                  if (d != o) return "o" == d && "n" == o || "s" == o || "u" == d;
                  if ("o" != d && "u" != d && f != n) return f < n;
                  r++
                }
              })(a, t) ? t : a, 0)
            },
            f = (e, a, t) => t ? t() : ((e, a) => (e => {
              throw new Error(e)
            })("Shared module " + a + " doesn't exist in shared scope " + e))(e, a),
            d = (e => function(a, t, r, f, d) {
              var n = i.I(a);
              return n && n.then && !r ? n.then(e.bind(e, a, i.S[a], t, !1, f, d)) : e(a, i.S[a], t, r, f, d)
            })((e, d, n, o, c, b) => {
              if (!((e, a) => e && i.o(e, a))(d, n)) return f(e, n, b);
              var s, l, u = r(d, n, o);
              return t(c, u) || (l = ((e, t, r, f) => "Unsatisfied version " + r + " from " + (r && e[t][r].from) + " of shared singleton module " + t + " (required " + a(f) + ")")(d, n, u, c), "undefined" != typeof console && console.warn && console.warn(l)), (s = d[n][u]).loaded = 1, s.get()
            }),
            n = {},
            o = {
              93082: () => d("default", "react", !1, [0], () => i.e(2581).then(() => () => i(22581))),
              36416: () => d("default", "react-router-dom", !1, [0], () => Promise.all([i.e(4269), i.e(4017)]).then(() => () => i(74269))),
              42909: () => d("default", "@rsgweb/locale-tools", !1, [0], () => Promise.all([i.e(9512), i.e(6836), i.e(8646)]).then(() => () => i(76602))),
              13331: () => d("default", "@rsgweb/utils", !1, [0], () => Promise.all([i.e(9512), i.e(5519), i.e(6048)]).then(() => () => i(36048))),
              13517: () => d("default", "framer-motion", !1, [1, 12, 38, 0], () => i.e(6663).then(() => () => i(36663))),
              81270: () => d("default", "clsx", !1, [1, 2, 1, 1], () => i.e(4921).then(() => () => i(4921))),
              96265: () => d("default", "usehooks-ts", !1, [0], () => i.e(5583).then(() => () => i(55583))),
              84017: () => d("default", "react-dom", !1, [1, 18, 2, 0], () => i.e(162).then(() => () => i(30162)))
            },
            c = {
              3082: [93082],
              4017: [84017],
              5997: [36416, 42909],
              9658: [13331, 13517, 81270, 96265]
            },
            b = {};
          i.f.consumes = (e, a) => {
            i.o(c, e) && c[e].forEach(e => {
              if (i.o(n, e)) return a.push(n[e]);
              if (!b[e]) {
                var t = a => {
                  n[e] = 0, i.m[e] = t => {
                    delete i.c[e], t.exports = a()
                  }
                };
                b[e] = !0;
                var r = a => {
                  delete n[e], i.m[e] = t => {
                    throw delete i.c[e], a
                  }
                };
                try {
                  var f = o[e]();
                  f.then ? a.push(n[e] = f.then(t).catch(r)) : t(f)
                } catch (e) {
                  r(e)
                }
              }
            })
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              7060: 0
            };
            i.f.miniCss = (a, t) => {
              e[a] ? t.push(e[a]) : 0 !== e[a] && {
                9658: 1
              } [a] && t.push(e[a] = (e => new Promise((a, t) => {
                var r = i.miniCssF(e),
                  f = i.p + r;
                if (((e, a) => {
                    for (var t = document.getElementsByTagName("link"), r = 0; r < t.length; r++) {
                      var f = (n = t[r]).getAttribute("data-href") || n.getAttribute("href");
                      if ("stylesheet" === n.rel && (f === e || f === a)) return n
                    }
                    var d = document.getElementsByTagName("style");
                    for (r = 0; r < d.length; r++) {
                      var n;
                      if ((f = (n = d[r]).getAttribute("data-href")) === e || f === a) return n
                    }
                  })(r, f)) return a();
                ((e, a, t, r, f) => {
                  var d = document.createElement("link");
                  d.rel = "stylesheet", d.type = "text/css", i.nc && (d.nonce = i.nc), d.onerror = d.onload = t => {
                    if (d.onerror = d.onload = null, "load" === t.type) r();
                    else {
                      var n = t && t.type,
                        o = t && t.target && t.target.href || a,
                        c = new Error("Loading CSS chunk " + e + " failed.\n(" + n + ": " + o + ")");
                      c.name = "ChunkLoadError", c.code = "CSS_CHUNK_LOAD_FAILED", c.type = n, c.request = o, d.parentNode && d.parentNode.removeChild(d), f(c)
                    }
                  }, d.href = a, document.head.appendChild(d)
                })(e, f, 0, a, t)
              }))(a).then(() => {
                e[a] = 0
              }, t => {
                throw delete e[a], t
              }))
            }
          }
        })(), (() => {
          var e = {
            7060: 0
          };
          i.f.j = (a, t) => {
            var r = i.o(e, a) ? e[a] : void 0;
            if (0 !== r)
              if (r) t.push(r[2]);
              else if (/^(3082|4017)$/.test(a)) e[a] = 0;
            else {
              var f = new Promise((t, f) => r = e[a] = [t, f]);
              t.push(r[2] = f);
              var d = i.p + i.u(a),
                n = new Error;
              i.l(d, t => {
                if (i.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
                  var f = t && ("load" === t.type ? "missing" : t.type),
                    d = t && t.target && t.target.src;
                  n.message = "Loading chunk " + a + " failed.\n(" + f + ": " + d + ")", n.name = "ChunkLoadError", n.type = f, n.request = d, r[1](n)
                }
              }, "chunk-" + a, a)
            }
          };
          var a = (a, t) => {
              var r, f, [d, n, o] = t,
                c = 0;
              if (d.some(a => 0 !== e[a])) {
                for (r in n) i.o(n, r) && (i.m[r] = n[r]);
                o && o(i)
              }
              for (a && a(t); c < d.length; c++) f = d[c], i.o(e, f) && e[f] && e[f][0](), e[f] = 0
            },
            t = self.webpackChunk_rockstargames_sites_gta_trilogy = self.webpackChunk_rockstargames_sites_gta_trilogy || [];
          t.forEach(a.bind(null, 0)), t.push = a.bind(null, t.push.bind(t))
        })(), i(35649), i(85819)
      })())
    }
  }
});