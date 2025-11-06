try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "21890c7a-674c-4a7e-8b6d-e50a8b1887b5", e._sentryDebugIdIdentifier = "sentry-dbid-21890c7a-674c-4a7e-8b6d-e50a8b1887b5")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-red-dead-redemption-2",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/modules-core-videoplayer"], (function(e, a) {
  var r = {};
  return Object.defineProperty(r, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      Object.keys(e).forEach((function(a) {
        r[a] = e[a]
      }))
    }],
    execute: function() {
      e((() => {
        var e, t, d, f, c, n, o = {
            17411: (e, a, r) => {
              const t = r(77027).y;
              a.w = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = t(r.y.meta.url, e)
              }
            },
            25136: e => {
              "use strict";
              e.exports = r
            },
            28419: (e, a, r) => {
              (0, r(17411).w)(1)
            },
            77027: (e, a, r) => {
              a.y = function(e, a) {
                var r = document.createElement("a");
                r.href = e;
                for (var t = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, d = 0, f = t.length; d !== a && f >= 0;) "/" === t[--f] && d++;
                if (d !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + d + ") in the URL path " + e);
                var c = t.slice(0, f + 1);
                return r.protocol + "//" + r.host + c
              };
              Number.isInteger
            },
            85819: (e, a, r) => {
              "use strict";
              var t = {
                  "./index": () => Promise.all([r.e(8999), r.e(4907), r.e(9763), r.e(8745), r.e(2229), r.e(6088), r.e(1788), r.e(2169), r.e(7814)]).then((() => () => r(87814)))
                },
                d = (e, a) => (r.R = a, a = r.o(t, e) ? t[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), r.R = void 0, a),
                f = (e, a) => {
                  if (r.S) {
                    var t = "default",
                      d = r.S[t];
                    if (d && d !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return r.S[t] = e, r.I(t, a)
                  }
                };
              r.d(a, {
                get: () => d,
                init: () => f
              })
            },
            93032: (e, a, r) => {
              r(28419)
            }
          },
          b = {};

        function i(e) {
          var a = b[e];
          if (void 0 !== a) return a.exports;
          var r = b[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return o[e].call(r.exports, r, r.exports, i), r.loaded = !0, r.exports
        }
        return i.m = o, i.c = b, i.y = a, i.amdO = {}, i.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return i.d(a, {
            a
          }), a
        }, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, i.t = function(a, r) {
          if (1 & r && (a = this(a)), 8 & r) return a;
          if ("object" == typeof a && a) {
            if (4 & r && a.__esModule) return a;
            if (16 & r && "function" == typeof a.then) return a
          }
          var d = Object.create(null);
          i.r(d);
          var f = {};
          e = e || [null, t({}), t([]), t(t)];
          for (var c = 2 & r && a;
            ("object" == typeof c || "function" == typeof c) && !~e.indexOf(c); c = t(c)) Object.getOwnPropertyNames(c).forEach((e => f[e] = () => a[e]));
          return f.default = () => a, i.d(d, f), d
        }, i.d = (e, a) => {
          for (var r in a) i.o(a, r) && !i.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: a[r]
          })
        }, i.f = {}, i.e = e => Promise.all(Object.keys(i.f).reduce(((a, r) => (i.f[r](e, a), a)), [])), i.u = e => "js/" + {
          131: "0a2975d2d1c4c9340870908986dbe166",
          278: "0ed32d90ff416bf82971f18b4fcb777c",
          299: "1520d0d463ba6743fa8752ef06e185fa",
          314: "d74018af9d60871df9af416f47b6dd41",
          426: "50f1910d41b6355762d5901c4cbf6360",
          439: "59fb0518cdf3e565e12b0eab4e6a9b8d",
          662: "44f4771fd5e6fccfc69a6025e2c3c3ba",
          824: "d5364fec0ca7f630331c04afd96ea43c",
          907: "da5f8dde47a16c1ad3ecbdeb3275df23",
          1054: "69537ba8c67bbdb6e49e47cedcfad2a2",
          1098: "6167d40754332b3c8e2dc995a447c9a1",
          1242: "f66b28d1368d9e748613549730f93fe2",
          1822: "c2ad328f9fce5711b1fc9d12ccefb1e5",
          1868: "1f059cb900c1b255261f20c4e740c150",
          2156: "37c7adcfde7a8a4170dc287ea14b0840",
          2169: "efa40ad7c2b8be588864fc27bf70592f",
          2171: "27b405d8008f22a05344e60c0cf17881",
          2217: "c55319506768600bf24a01f8b9b0f8c0",
          2221: "8f0c552fd99fc0334a1e0435dee30955",
          2243: "11f6be7aca6cbc3eb6213985f220692c",
          2306: "c471ed737e56f3778cc9c53781836dfa",
          2347: "a96151b680992c1758e077e7562fff43",
          2365: "4841c65c2fe58ca2946235398daa5b37",
          2398: "2f26e928aeef47d3e7b987ca01ce23bb",
          2466: "13cfb123e9189dc90296f578b88a6527",
          2508: "7b000deda78495a3f01e2c52df560e4c",
          2642: "e30cf2124bf725f7a692e3e1ec71535b",
          2678: "9467f0480f386e793059ab7518374ff8",
          2864: "1d6245de48f407fd00783ef4cfcde3da",
          3034: "05bb21b3206773510fa04aa769e7c06c",
          3197: "0a01754537bf3d1e0bc595e566651e93",
          3343: "32821b5cf7516048cbe1e736c1a71675",
          3370: "12f0d72a60b76d908d6a0dde50b6c8f6",
          3475: "531514bd96252b17f6063a8173d1e278",
          3486: "89f340a341d7b5619e50938947679dce",
          3697: "c5e32d6ad7e366d53a5d125e0b3f50ff",
          3885: "9881d8561552ffa762dac6a92f9cca1b",
          3941: "772710671290e2e0373a3a2b36f2595e",
          4011: "e1964aa14507547bf022260ae561e80c",
          4528: "3bad83be574f6918f8b1194daa479617",
          4578: "6a2e9b45f93d2581acd72670d9c306df",
          4598: "d056e5504a6a4b9f2dd9bc0061f6dabc",
          4621: "881f4bc59f133d1dffcc758660bac4e4",
          4700: "7907c3707f7e55596b38fcf83d27d4be",
          4710: "067bc301c5a94f60a2224f57fef89367",
          4731: "ce850001451c88f8919b3b3fb64cae2c",
          4799: "cce3d28ba09c17afece2bc566764e4e5",
          4851: "6b8880ecb7eed851e8aed1bf5b51837c",
          4861: "035262042895b89cbafe14dd7ccb2b3b",
          4907: "ae6b15bfe7b5a5ebd5333ca3be358c00",
          4913: "b6761688406339566c3177e4afb6c41e",
          5018: "e1429ad69ecc6be1f7d25592a64db219",
          5076: "dc0175d098e532869dfc85178ae2a4cb",
          5233: "1750ee99a7d4a8ec3a9aee3d5084a258",
          5259: "beaa3776ca0430cc3de3b80f9ae701ca",
          5389: "9b9f020c00c8bacf7d6cb37eb8357182",
          5530: "8639740d6bcdd32cc830f0912476bf91",
          5639: "8199fba3ee65c97ac704abd0a8a36d92",
          5663: "9a3f0b251be76dfec350d453b792fff5",
          5742: "4a2654bdc76c37ee8fd0e5666267e1bf",
          5830: "99358c0f01ae62852aa7b859878af957",
          5832: "b3022850edb16597a0e1372d206896b3",
          6088: "a828b98914d563641d38d22dbdf519d1",
          6267: "3ea7899fa2dc17acf1a3a1505367a223",
          6280: "5bff7f18955d326f27f321f37ce6e8af",
          6285: "8dd62e73e34f12807ab617bfef29cc48",
          6361: "66d4f93f01924368823773889f1f5617",
          6664: "1cb83389484d2a7e019e1f26761542c0",
          6879: "c219bb80c14060fcd3de2b3f6f3430f8",
          6891: "258289d1c3e0af74b6434c742499753c",
          6997: "28eb7540129740b50556f7275c763d07",
          7010: "a176aa3e0759b685f8013be9480c3c52",
          7073: "16fc9e70e67d2c9b67dc1bb9a6bbc5b0",
          7436: "2854c858af162c2aa6cf86b2175089f2",
          7452: "3e429aa0ace31546aa4d08dfb4ba6f00",
          7453: "98f1d1e26f023effff33a6b292a31442",
          7814: "f8405c75c89a3c0f9a060601a589276d",
          7970: "0ce15cb5eac53517f0f51d816b289f2c",
          8240: "8f7d6db80a4c3cf484687e78ee86048b",
          8272: "94074f843e654fd493fdf088dd9a6bc2",
          8299: "90ff7bc6d60168a8ef38f2d925a26bde",
          8391: "2bba1e37c6a7f9af368521b13beb2e23",
          8431: "a14eceaaa7a119b90500ecbeb7eb3a08",
          8745: "295de5e0b54f9b39b29bfb2a33b45703",
          8755: "d25c2ccdf9d5910ece4da8919c2a0d5d",
          8880: "8a8556f6c335df1d12dde3ab913b8ae8",
          8970: "5ba46edced9e1b59690acac7c7887c4e",
          8999: "085f985f303f3f793fb677000351fc27",
          9022: "b9c1ef63f8682642e58713916d25b42c",
          9028: "744b70cb2033bc381389ac422ec2a03b",
          9126: "a48556630d8e9ea9dfeb411601d407b9",
          9377: "3233f0ab5f30a1f9ec85fb62da799c35",
          9587: "471e9693d916abbc6cb8e6f61bd37be2",
          9615: "13afdd560bd6567a86d7b10fff7e5333",
          9763: "66f827de583ace38d3c785203444675b",
          9936: "335efd2bcdc3badcd02852a3e9c4d079",
          9975: "edb2e79503de9efc2c2b54baf5005f5e",
          9990: "d5b162a2208607df6bb155fa46e860a5"
        } [e] + ".js", i.miniCssF = e => "css/" + {
          2217: "34b3f5465a92bac15ce2a811712ab3bf",
          4598: "34b3f5465a92bac15ce2a811712ab3bf",
          7814: "1d70a1140bc2d78df8047c3b23b1ffb1"
        } [e] + ".css", i.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), i.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), d = {}, f = "@rockstargames/sites-red-dead-redemption-2:", i.l = (e, a, r, t) => {
          if (d[e]) d[e].push(a);
          else {
            var c, n;
            if (void 0 !== r)
              for (var o = document.getElementsByTagName("script"), b = 0; b < o.length; b++) {
                var s = o[b];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == f + r) {
                  c = s;
                  break
                }
              }
            c || (n = !0, (c = document.createElement("script")).charset = "utf-8", c.timeout = 120, i.nc && c.setAttribute("nonce", i.nc), c.setAttribute("data-webpack", f + r), c.src = e), d[e] = [a];
            var l = (a, r) => {
                c.onerror = c.onload = null, clearTimeout(u);
                var t = d[e];
                if (delete d[e], c.parentNode && c.parentNode.removeChild(c), t && t.forEach((e => e(r))), a) return a(r)
              },
              u = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: c
              }), 12e4);
            c.onerror = l.bind(null, c.onerror), c.onload = l.bind(null, c.onload), n && document.head.appendChild(c)
          }
        }, i.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, i.nmd = e => (e.paths = [], e.children || (e.children = []), e), c = {
          7814: [31879]
        }, n = {
          31879: ["default", "./index", 25136]
        }, i.f.remotes = (e, a) => {
          i.o(c, e) && c[e].forEach((e => {
            var r = i.R;
            r || (r = []);
            var t = n[e];
            if (!(r.indexOf(t) >= 0)) {
              if (r.push(t), t.p) return a.push(t.p);
              var d = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + t[1] + '" from ' + t[2]), i.m[e] = () => {
                    throw a
                  }, t.p = 0
                },
                f = (e, r, f, c, n, o) => {
                  try {
                    var b = e(r, f);
                    if (!b || !b.then) return n(b, c, o);
                    var i = b.then((e => n(e, c)), d);
                    if (!o) return i;
                    a.push(t.p = i)
                  } catch (e) {
                    d(e)
                  }
                },
                c = (e, a, d) => f(a.get, t[1], r, 0, o, d),
                o = a => {
                  t.p = 1, i.m[e] = e => {
                    e.exports = a()
                  }
                };
              f(i, t[2], 0, 0, ((e, a, r) => e ? f(i.I, t[0], 0, e, c, r) : d()), 1)
            }
          }))
        }, (() => {
          i.S = {};
          var e = {},
            a = {};
          i.I = (r, t) => {
            t || (t = []);
            var d = a[r];
            if (d || (d = a[r] = {}), !(t.indexOf(d) >= 0)) {
              if (t.push(d), e[r]) return e[r];
              i.o(i.S, r) || (i.S[r] = {});
              var f = i.S[r],
                c = "@rockstargames/sites-red-dead-redemption-2",
                n = (e, a, r, t) => {
                  var d = f[e] = f[e] || {},
                    n = d[a];
                  (!n || !n.loaded && (!t != !n.eager ? t : c > n.from)) && (d[a] = {
                    get: r,
                    from: c,
                    eager: !!t
                  })
                },
                o = [];
              return "default" === r && (n("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([i.e(9587), i.e(2229), i.e(9975)]).then((() => () => i(12841))))), n("@rsgweb/modules-core-agegate", "0.0.0", (() => Promise.all([i.e(4907), i.e(9763), i.e(2508), i.e(2229), i.e(6088), i.e(2169), i.e(2217)]).then((() => () => i(42217))))), n("@rsgweb/utils", "1.0.0", (() => Promise.all([i.e(8999), i.e(4907), i.e(8299), i.e(2229), i.e(6088), i.e(1788), i.e(426)]).then((() => () => i(48045))))), n("clsx", "2.1.1", (() => i.e(439).then((() => () => i(10439))))), n("lodash", "4.17.21", (() => i.e(5076).then((() => () => i(15076))))), n("react-dom", "18.3.1", (() => Promise.all([i.e(1098), i.e(2229)]).then((() => () => i(71098))))), n("react-router-dom", "6.30.0", (() => Promise.all([i.e(5389), i.e(2229), i.e(4853)]).then((() => () => i(15389))))), n("react", "18.3.1", (() => i.e(8431).then((() => () => i(48431))))), (() => {
                var e = e => {
                  return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                  var a
                };
                try {
                  var a = i(25136);
                  if (!a) return;
                  var d = e => e && e.init && e.init(i.S[r], t);
                  if (a.then) return o.push(a.then(d, e));
                  var f = d(a);
                  if (f && f.then) return o.push(f.catch(e))
                } catch (a) {
                  e(a)
                }
              })()), o.length ? e[r] = Promise.all(o).then((() => e[r] = 1)) : e[r] = 1
            }
          }
        })(), (() => {
          var e;
          i.g.importScripts && (e = i.g.location + "");
          var a = i.g.document;
          if (!e && a && (a.currentScript && "SCRIPT" === a.currentScript.tagName.toUpperCase() && (e = a.currentScript.src), !e)) {
            var r = a.getElementsByTagName("script");
            if (r.length)
              for (var t = r.length - 1; t > -1 && (!e || !/^http(s?):/.test(e));) e = r[t--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), i.p = e
        })(), (() => {
          var e = e => {
              var a = e => e.split(".").map((e => +e == e ? +e : e)),
                r = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                t = r[1] ? a(r[1]) : [];
              return r[2] && (t.length++, t.push.apply(t, a(r[2]))), r[3] && (t.push([]), t.push.apply(t, a(r[3]))), t
            },
            a = e => {
              var r = e[0],
                t = "";
              if (1 === e.length) return "*";
              if (r + .5) {
                t += 0 == r ? ">=" : -1 == r ? "<" : 1 == r ? "^" : 2 == r ? "~" : r > 0 ? "=" : "!=";
                for (var d = 1, f = 1; f < e.length; f++) d--, t += "u" == (typeof(n = e[f]))[0] ? "-" : (d > 0 ? "." : "") + (d = 2, n);
                return t
              }
              var c = [];
              for (f = 1; f < e.length; f++) {
                var n = e[f];
                c.push(0 === n ? "not(" + o() + ")" : 1 === n ? "(" + o() + " || " + o() + ")" : 2 === n ? c.pop() + " " + c.pop() : a(n))
              }
              return o();

              function o() {
                return c.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            r = (a, t) => {
              if (0 in a) {
                t = e(t);
                var d = a[0],
                  f = d < 0;
                f && (d = -d - 1);
                for (var c = 0, n = 1, o = !0;; n++, c++) {
                  var b, i, s = n < a.length ? (typeof a[n])[0] : "";
                  if (c >= t.length || "o" == (i = (typeof(b = t[c]))[0])) return !o || ("u" == s ? n > d && !f : "" == s != f);
                  if ("u" == i) {
                    if (!o || "u" != s) return !1
                  } else if (o)
                    if (s == i)
                      if (n <= d) {
                        if (b != a[n]) return !1
                      } else {
                        if (f ? b > a[n] : b < a[n]) return !1;
                        b != a[n] && (o = !1)
                      }
                  else if ("s" != s && "n" != s) {
                    if (f || n <= d) return !1;
                    o = !1, n--
                  } else {
                    if (n <= d || i < s != f) return !1;
                    o = !1
                  } else "s" != s && "n" != s && (o = !1, n--)
                }
              }
              var l = [],
                u = l.pop.bind(l);
              for (c = 1; c < a.length; c++) {
                var p = a[c];
                l.push(1 == p ? u() | u() : 2 == p ? u() & u() : p ? r(p, t) : !u())
              }
              return !!u()
            },
            t = (a, t, d, f) => {
              var c = f ? (e => Object.keys(e).reduce(((a, r) => (e[r].eager && (a[r] = e[r]), a)), {}))(a[t]) : a[t];
              return (t = Object.keys(c).reduce(((a, t) => !r(d, t) || a && !((a, r) => {
                a = e(a), r = e(r);
                for (var t = 0;;) {
                  if (t >= a.length) return t < r.length && "u" != (typeof r[t])[0];
                  var d = a[t],
                    f = (typeof d)[0];
                  if (t >= r.length) return "u" == f;
                  var c = r[t],
                    n = (typeof c)[0];
                  if (f != n) return "o" == f && "n" == n || "s" == n || "u" == f;
                  if ("o" != f && "u" != f && d != c) return d < c;
                  t++
                }
              })(a, t) ? a : t), 0)) && c[t]
            },
            d = e => {
              throw new Error(e)
            },
            f = (e => function(a, r, t, d, f) {
              var c = i.I(a);
              return c && c.then && !t ? c.then(e.bind(e, a, i.S[a], r, !1, d, f)) : e(a, i.S[a], r, t, d, f)
            })(((e, r, f, c, n, o) => {
              if (!((e, a) => e && i.o(e, a))(r, f)) return ((e, a, r) => r ? r() : ((e, a) => d("Shared module " + a + " doesn't exist in shared scope " + e))(e, a))(e, f, o);
              var b, s = t(r, f, n, c);
              return s ? ((b = s).loaded = 1, b.get()) : o ? o() : void d(((e, r, t, d, f) => {
                var c = e[t];
                return "No satisfying version (" + a(d) + ")" + (f ? " for eager consumption" : "") + " of shared module " + t + " found in shared scope " + r + ".\nAvailable versions: " + Object.keys(c).map((e => e + " from " + c[e].from)).join(", ")
              })(r, e, f, n, c))
            })),
            c = {},
            n = {
              62229: () => f("default", "react", !1, [1, 18, 2, 0], (() => i.e(8431).then((() => () => i(48431))))),
              9623: () => f("default", "react-router-dom", !1, [1, 6, 11, 2], (() => Promise.all([i.e(5389), i.e(4853)]).then((() => () => i(15389))))),
              16188: () => f("default", "lodash", !1, [1, 4, 17, 21], (() => i.e(5076).then((() => () => i(15076))))),
              81788: () => f("default", "@rsgweb/locale-tools", !1, [1, "workspace:^"], (() => Promise.all([i.e(9587), i.e(8240)]).then((() => () => i(12841))))),
              95966: () => f("default", "@rsgweb/utils", !1, [1, "workspace:^"], (() => Promise.all([i.e(8999), i.e(8299), i.e(1788), i.e(426)]).then((() => () => i(48045))))),
              4572: () => f("default", "clsx", !1, [1, 2, 1, 1], (() => i.e(439).then((() => () => i(10439))))),
              47224: () => f("default", "@rsgweb/modules-core-agegate", !1, [1, "workspace:^"], (() => Promise.all([i.e(2508), i.e(4598)]).then((() => () => i(42217))))),
              44853: () => f("default", "react-dom", !1, [1, 18, 2, 0], (() => i.e(1098).then((() => () => i(71098)))))
            },
            o = {
              1788: [81788],
              2169: [95966],
              2229: [62229],
              4853: [44853],
              6088: [9623, 16188],
              7814: [4572, 47224]
            },
            b = {};
          i.f.consumes = (e, a) => {
            i.o(o, e) && o[e].forEach((e => {
              if (i.o(c, e)) return a.push(c[e]);
              if (!b[e]) {
                var r = a => {
                  c[e] = 0, i.m[e] = r => {
                    delete i.c[e], r.exports = a()
                  }
                };
                b[e] = !0;
                var t = a => {
                  delete c[e], i.m[e] = r => {
                    throw delete i.c[e], a
                  }
                };
                try {
                  var d = n[e]();
                  d.then ? a.push(c[e] = d.then(r).catch(t)) : r(d)
                } catch (e) {
                  t(e)
                }
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              5082: 0
            };
            i.f.miniCss = (a, r) => {
              e[a] ? r.push(e[a]) : 0 !== e[a] && {
                2217: 1,
                4598: 1,
                7814: 1
              } [a] && r.push(e[a] = (e => new Promise(((a, r) => {
                var t = i.miniCssF(e),
                  d = i.p + t;
                if (((e, a) => {
                    for (var r = document.getElementsByTagName("link"), t = 0; t < r.length; t++) {
                      var d = (c = r[t]).getAttribute("data-href") || c.getAttribute("href");
                      if ("stylesheet" === c.rel && (d === e || d === a)) return c
                    }
                    var f = document.getElementsByTagName("style");
                    for (t = 0; t < f.length; t++) {
                      var c;
                      if ((d = (c = f[t]).getAttribute("data-href")) === e || d === a) return c
                    }
                  })(t, d)) return a();
                ((e, a, r, t, d) => {
                  var f = document.createElement("link");
                  f.rel = "stylesheet", f.type = "text/css", i.nc && (f.nonce = i.nc), f.onerror = f.onload = r => {
                    if (f.onerror = f.onload = null, "load" === r.type) t();
                    else {
                      var c = r && r.type,
                        n = r && r.target && r.target.href || a,
                        o = new Error("Loading CSS chunk " + e + " failed.\n(" + c + ": " + n + ")");
                      o.name = "ChunkLoadError", o.code = "CSS_CHUNK_LOAD_FAILED", o.type = c, o.request = n, f.parentNode && f.parentNode.removeChild(f), d(o)
                    }
                  }, f.href = a, document.head.appendChild(f)
                })(e, d, 0, a, r)
              })))(a).then((() => {
                e[a] = 0
              }), (r => {
                throw delete e[a], r
              })))
            }
          }
        })(), (() => {
          var e = {
            5082: 0
          };
          i.f.j = (a, r) => {
            var t = i.o(e, a) ? e[a] : void 0;
            if (0 !== t)
              if (t) r.push(t[2]);
              else if (/^(1788|2229|4853)$/.test(a)) e[a] = 0;
            else {
              var d = new Promise(((r, d) => t = e[a] = [r, d]));
              r.push(t[2] = d);
              var f = i.p + i.u(a),
                c = new Error;
              i.l(f, (r => {
                if (i.o(e, a) && (0 !== (t = e[a]) && (e[a] = void 0), t)) {
                  var d = r && ("load" === r.type ? "missing" : r.type),
                    f = r && r.target && r.target.src;
                  c.message = "Loading chunk " + a + " failed.\n(" + d + ": " + f + ")", c.name = "ChunkLoadError", c.type = d, c.request = f, t[1](c)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, r) => {
              var t, d, [f, c, n] = r,
                o = 0;
              if (f.some((a => 0 !== e[a]))) {
                for (t in c) i.o(c, t) && (i.m[t] = c[t]);
                n && n(i)
              }
              for (a && a(r); o < f.length; o++) d = f[o], i.o(e, d) && e[d] && e[d][0](), e[d] = 0
            },
            r = self.webpackChunk_rockstargames_sites_red_dead_redemption_2 = self.webpackChunk_rockstargames_sites_red_dead_redemption_2 || [];
          r.forEach(a.bind(null, 0)), r.push = a.bind(null, r.push.bind(r))
        })(), i(93032), i(85819)
      })())
    }
  }
}));