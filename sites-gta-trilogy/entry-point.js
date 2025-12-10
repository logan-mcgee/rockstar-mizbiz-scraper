try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "9f542516-359c-4226-9b95-4b7664844733", e._sentryDebugIdIdentifier = "sentry-dbid-9f542516-359c-4226-9b95-4b7664844733")
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
      Object.keys(e).forEach(function(a) {
        t[a] = e[a]
      })
    }],
    execute: function() {
      e((() => {
        var e, r, d, f, n, c, o = {
            3032: (e, a, t) => {
              t(8419)
            },
            5136: e => {
              "use strict";
              e.exports = t
            },
            5819: (e, a, t) => {
              "use strict";
              var r = {
                  "./index": () => Promise.all([t.e(4910), t.e(4656), t.e(2229), t.e(5811), t.e(1657)]).then(() => () => t(9249))
                },
                d = (e, a) => (t.R = a, a = t.o(r, e) ? r[e]() : Promise.resolve().then(() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                }), t.R = void 0, a),
                f = (e, a) => {
                  if (t.S) {
                    var r = "default",
                      d = t.S[r];
                    if (d && d !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return t.S[r] = e, t.I(r, a)
                  }
                };
              t.d(a, {
                get: () => d,
                init: () => f
              })
            },
            7027: (e, a, t) => {
              a.y = function(e, a) {
                var t = document.createElement("a");
                t.href = e;
                for (var r = "/" === t.pathname[0] ? t.pathname : "/" + t.pathname, d = 0, f = r.length; d !== a && f >= 0;) "/" === r[--f] && d++;
                if (d !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + d + ") in the URL path " + e);
                var n = r.slice(0, f + 1);
                return t.protocol + "//" + t.host + n
              };
              Number.isInteger
            },
            7411: (e, a, t) => {
              const r = t(7027).y;
              a.w = function(e) {
                if (e || (e = 1), !t.y.meta || !t.y.meta.url) throw console.error("__system_context__", t.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                t.p = r(t.y.meta.url, e)
              }
            },
            8419: (e, a, t) => {
              (0, t(7411).w)(1)
            }
          },
          i = {};

        function b(e) {
          var a = i[e];
          if (void 0 !== a) return a.exports;
          var t = i[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return o[e].call(t.exports, t, t.exports, b), t.loaded = !0, t.exports
        }
        return b.m = o, b.c = i, b.y = a, b.amdO = {}, b.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return b.d(a, {
            a
          }), a
        }, r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, b.t = function(a, t) {
          if (1 & t && (a = this(a)), 8 & t) return a;
          if ("object" == typeof a && a) {
            if (4 & t && a.__esModule) return a;
            if (16 & t && "function" == typeof a.then) return a
          }
          var d = Object.create(null);
          b.r(d);
          var f = {};
          e = e || [null, r({}), r([]), r(r)];
          for (var n = 2 & t && a;
            ("object" == typeof n || "function" == typeof n) && !~e.indexOf(n); n = r(n)) Object.getOwnPropertyNames(n).forEach(e => f[e] = () => a[e]);
          return f.default = () => a, b.d(d, f), d
        }, b.d = (e, a) => {
          for (var t in a) b.o(a, t) && !b.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: a[t]
          })
        }, b.f = {}, b.e = e => Promise.all(Object.keys(b.f).reduce((a, t) => (b.f[t](e, a), a), [])), b.u = e => "js/" + {
          131: "583f624f3fcddadf4f1f6b36cb5ece88",
          278: "eb8636af2c6f8c536650026f080f3a09",
          299: "cfb637e1eefcea19ee0687059f5398e0",
          314: "3cc776273d3a5feaeba56ec065c5dbf2",
          439: "fe6fd71f1cc46e52c7e2e99ed3b47203",
          450: "2af67ffed1137574477d8566c1e1aee0",
          662: "a94d5862cdd4668db25d3ee6135a929a",
          824: "b7b11625b37cf56741b3e3982000a0d7",
          907: "bba201e6bb8dd79fc5f2fd1ef89fd7cd",
          1054: "6e2de883cef258b207a21b1724886a01",
          1242: "723089befabaa5d92dd422b0997b10cc",
          1657: "f0a8b42a093eb12d8913af7fea1401f1",
          1822: "7abcbe5b7696318b03d87b37c124654c",
          1868: "2653ce7939fa57dbfd6f5a1efe195753",
          2156: "78a8c2fb1ead234dafe8a4ca4188ba43",
          2171: "a02fffdd119b8bf1710f8790637eac7f",
          2221: "afc87d11da576ba23b7b8fde4c88fcc9",
          2243: "c469bb73df12ed75634a75c60615f415",
          2306: "1dad63bafa953bb17371444fb682eeb3",
          2347: "181d744ec71307c6de3560e0d9e024bf",
          2365: "074a378b56f60e42907f39be4310b8cb",
          2398: "71d8b00d0e52e7b2c8e7589d11f8d514",
          2466: "e7f1be012f5ec5255db683c1e0ef7114",
          2562: "a44be1d7ea83e36f98e1d8e271b66f51",
          2642: "146df58082b69588b80d9ff6989a4b35",
          2678: "3c2a4165f272772976657865b0ab0e5a",
          2864: "37a2afb4b8c7d225208d42b347c10cb3",
          3034: "d4ac7d63904d3482cbbb8b2e90f67416",
          3197: "d54971915143445255a209ee11572d72",
          3343: "ccade1dad5c6c9a32d118c777e5c8f67",
          3370: "9d11cb73d70352330a915fd8bea7216a",
          3475: "6a436b1502bba4b12d15540dd37264eb",
          3486: "e41295e9104e8147270641524f4b97b1",
          3697: "9a011fe9df7fe6a45faea736aaabd878",
          3885: "a87c9c867ddced00fdc6f344034eb6e1",
          3941: "3bf0f34cb52df45a2cf8e8c2bf9092cd",
          4011: "ce3710410ed96ad7cbedfc3b79563132",
          4528: "3de826c6ece34316ebab0bc7de527367",
          4578: "c1b0957c64e218b2902b60d176c1b4d8",
          4621: "bdcb73a4735fa58de497aabe458b6043",
          4656: "9ad546527c2ab2ae5d956597661d56ca",
          4700: "e333cbb8d93fb225edcb968b754dccd8",
          4710: "783a23a02212959d77b34c58e55c5416",
          4731: "229ddc27dc6898ba4e607c37445a4a2e",
          4799: "2d44c5f23f1860f2b4d017417d2ed6f4",
          4851: "b64f6210cb25ca08172957f81df709b1",
          4861: "13d3bf9f6f054790d8943f6d38670d0d",
          4910: "9c78bd884b974f6b57005a85a10d5310",
          4913: "1e721f1362e447e32443c9a2686c2a8e",
          5018: "c04f781f23891ad94c991fc082f79167",
          5233: "7f6ee14c45d1197bf179cfd6df8e5fad",
          5259: "663f94fb07beaac9c6655737c22982e7",
          5389: "73854702723970fa2294b8e537498e9e",
          5530: "e544803e37ecc08b527fef8a4937e421",
          5639: "ee4e77b8c5d6cbb45e12f23fe27a25af",
          5663: "78af6004a5f64f83d20c40e788bc002f",
          5742: "30a1b9dc71eb8a8fbb98825ddd89a1f8",
          5811: "77bf8c6efd41160c68d72e67f3cd1eb8",
          5830: "db7d909f4f3d96276b0b97dd39f4805c",
          5832: "ad0349ba6aec3f267c53a5eada591621",
          5912: "faa5a58622012b4dd153d60dcb8a1d5f",
          6267: "3ae1099ff279580561b279ad86f0e64c",
          6280: "e23739413f335f1d7abec0974907f626",
          6285: "d178fb3e10d9581a1c8766153f863961",
          6361: "d7932257785ac6683a93c0556eca072f",
          6664: "82c85c6b54dc7575ee7e6091964a208b",
          6879: "c5cda543490b7c6431e98493ff3bdd1d",
          6891: "cd16dc280dbad7953067151683e92254",
          6997: "79b8f70459253d7f4dc596c8dd34b0b7",
          7010: "2c7070034c24b3361523ae1d347b8adc",
          7073: "60626aa337455fa461806567e3677f97",
          7436: "ea1325126e09a5a66e0a2c6abcb3ed41",
          7452: "cdd98dafd5bc05bea578fe4a1fb41a28",
          7453: "6df2d992f7786a3df9d168d0bf9c310d",
          7970: "ed50c2efeda1fd1563c661f84c6fce44",
          8240: "61f6ea4a935513226b46ada7b7eb349b",
          8272: "31e9edf667cfb1a1fdd0a04fe9108c16",
          8322: "54cfe6aa8d724cbec413bb0145ae6620",
          8391: "ce30f4895848084a1880fe9032d03e1b",
          8431: "106a6f905dc7f64e5aec66094805554c",
          8659: "ba042c1d3c2641bdd857677741b14db2",
          8755: "985b3f8343f408727ee5a89687935249",
          8880: "2ba3592efd4fa41d37ee3a347bd6cfca",
          8970: "3613ed2949461057b2ba98334ff6d429",
          9022: "504c0171762faf42e1cf7cd40410f7bf",
          9028: "fa6e7ff485525e051a40908b80201a42",
          9126: "ee14158504cc5abf8b83393cab7c7fbd",
          9377: "3289aedccefe2ef2cd904555e9344455",
          9587: "c4c4b7e0f1de0e09f240eea211404571",
          9615: "21ab02d3213a4525cd1a65a295a5da3d",
          9757: "8fcbc6b03cefe02e390b2e25e80fc840",
          9936: "5996b670d0541983227c63d3a3ad1b03",
          9975: "4b9bab1ed7ccf51fc2b4fe191ff40222",
          9990: "a3f67032122aae617846ee9b61f86d8d"
        } [e] + ".js", b.miniCssF = e => "css/b00df4b72b841993e7bc5c20ee7ecbac.css", b.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), b.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), d = {}, f = "@rockstargames/sites-gta-trilogy:", b.l = (e, a, t, r) => {
          if (d[e]) d[e].push(a);
          else {
            var n, c;
            if (void 0 !== t)
              for (var o = document.getElementsByTagName("script"), i = 0; i < o.length; i++) {
                var s = o[i];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == f + t) {
                  n = s;
                  break
                }
              }
            n || (c = !0, (n = document.createElement("script")).charset = "utf-8", n.timeout = 120, b.nc && n.setAttribute("nonce", b.nc), n.setAttribute("data-webpack", f + t), n.src = e), d[e] = [a];
            var l = (a, t) => {
                n.onerror = n.onload = null, clearTimeout(u);
                var r = d[e];
                if (delete d[e], n.parentNode && n.parentNode.removeChild(n), r && r.forEach(e => e(t)), a) return a(t)
              },
              u = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: n
              }), 12e4);
            n.onerror = l.bind(null, n.onerror), n.onload = l.bind(null, n.onload), c && document.head.appendChild(n)
          }
        }, b.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, b.nmd = e => (e.paths = [], e.children || (e.children = []), e), n = {
          1657: [1879]
        }, c = {
          1879: ["default", "./index", 5136]
        }, b.f.remotes = (e, a) => {
          b.o(n, e) && n[e].forEach(e => {
            var t = b.R;
            t || (t = []);
            var r = c[e];
            if (!(t.indexOf(r) >= 0)) {
              if (t.push(r), r.p) return a.push(r.p);
              var d = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + r[1] + '" from ' + r[2]), b.m[e] = () => {
                    throw a
                  }, r.p = 0
                },
                f = (e, t, f, n, c, o) => {
                  try {
                    var i = e(t, f);
                    if (!i || !i.then) return c(i, n, o);
                    var b = i.then(e => c(e, n), d);
                    if (!o) return b;
                    a.push(r.p = b)
                  } catch (e) {
                    d(e)
                  }
                },
                n = (e, a, d) => f(a.get, r[1], t, 0, o, d),
                o = a => {
                  r.p = 1, b.m[e] = e => {
                    e.exports = a()
                  }
                };
              f(b, r[2], 0, 0, (e, a, t) => e ? f(b.I, r[0], 0, e, n, t) : d(), 1)
            }
          })
        }, (() => {
          b.S = {};
          var e = {},
            a = {};
          b.I = (t, r) => {
            r || (r = []);
            var d = a[t];
            if (d || (d = a[t] = {}), !(r.indexOf(d) >= 0)) {
              if (r.push(d), e[t]) return e[t];
              b.o(b.S, t) || (b.S[t] = {});
              var f = b.S[t],
                n = "@rockstargames/sites-gta-trilogy",
                c = (e, a, t, r) => {
                  var d = f[e] = f[e] || {},
                    c = d[a];
                  (!c || !c.loaded && (!r != !c.eager ? r : n > c.from)) && (d[a] = {
                    get: t,
                    from: n,
                    eager: !!r
                  })
                },
                o = [];
              return "default" === t && (c("@rsgweb/locale-tools", "1.0.0", () => Promise.all([b.e(9587), b.e(2229), b.e(9975)]).then(() => () => b(2841))), c("@rsgweb/utils", "1.0.0", () => Promise.all([b.e(450), b.e(4910), b.e(2229), b.e(9757), b.e(5811)]).then(() => () => b(9757))), c("clsx", "2.1.1", () => b.e(439).then(() => () => b(439))), c("framer-motion", "7.10.3", () => Promise.all([b.e(5912), b.e(2229), b.e(8322)]).then(() => () => b(5912))), c("react-router-dom", "6.30.1", () => Promise.all([b.e(5389), b.e(2229)]).then(() => () => b(5389))), c("react", "18.2.0", () => b.e(8659).then(() => () => b(8659))), c("react", "18.3.1", () => b.e(8431).then(() => () => b(8431))), c("usehooks-ts", "2.16.0", () => Promise.all([b.e(2562), b.e(2229)]).then(() => () => b(2562))), (() => {
                var e = e => {
                  return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                  var a
                };
                try {
                  var a = b(5136);
                  if (!a) return;
                  var d = e => e && e.init && e.init(b.S[t], r);
                  if (a.then) return o.push(a.then(d, e));
                  var f = d(a);
                  if (f && f.then) return o.push(f.catch(e))
                } catch (a) {
                  e(a)
                }
              })()), o.length ? e[t] = Promise.all(o).then(() => e[t] = 1) : e[t] = 1
            }
          }
        })(), (() => {
          var e;
          b.g.importScripts && (e = b.g.location + "");
          var a = b.g.document;
          if (!e && a && (a.currentScript && "SCRIPT" === a.currentScript.tagName.toUpperCase() && (e = a.currentScript.src), !e)) {
            var t = a.getElementsByTagName("script");
            if (t.length)
              for (var r = t.length - 1; r > -1 && (!e || !/^http(s?):/.test(e));) e = t[r--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), b.p = e
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
                for (var d = 1, f = 1; f < e.length; f++) d--, r += "u" == (typeof(c = e[f]))[0] ? "-" : (d > 0 ? "." : "") + (d = 2, c);
                return r
              }
              var n = [];
              for (f = 1; f < e.length; f++) {
                var c = e[f];
                n.push(0 === c ? "not(" + o() + ")" : 1 === c ? "(" + o() + " || " + o() + ")" : 2 === c ? n.pop() + " " + n.pop() : a(c))
              }
              return o();

              function o() {
                return n.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            t = (a, r) => {
              if (0 in a) {
                r = e(r);
                var d = a[0],
                  f = d < 0;
                f && (d = -d - 1);
                for (var n = 0, c = 1, o = !0;; c++, n++) {
                  var i, b, s = c < a.length ? (typeof a[c])[0] : "";
                  if (n >= r.length || "o" == (b = (typeof(i = r[n]))[0])) return !o || ("u" == s ? c > d && !f : "" == s != f);
                  if ("u" == b) {
                    if (!o || "u" != s) return !1
                  } else if (o)
                    if (s == b)
                      if (c <= d) {
                        if (i != a[c]) return !1
                      } else {
                        if (f ? i > a[c] : i < a[c]) return !1;
                        i != a[c] && (o = !1)
                      }
                  else if ("s" != s && "n" != s) {
                    if (f || c <= d) return !1;
                    o = !1, c--
                  } else {
                    if (c <= d || b < s != f) return !1;
                    o = !1
                  } else "s" != s && "n" != s && (o = !1, c--)
                }
              }
              var l = [],
                u = l.pop.bind(l);
              for (n = 1; n < a.length; n++) {
                var p = a[n];
                l.push(1 == p ? u() | u() : 2 == p ? u() & u() : p ? t(p, r) : !u())
              }
              return !!u()
            },
            r = (a, r, d, f) => {
              var n = f ? (e => Object.keys(e).reduce((a, t) => (e[t].eager && (a[t] = e[t]), a), {}))(a[r]) : a[r];
              return (r = Object.keys(n).reduce((a, r) => !t(d, r) || a && !((a, t) => {
                a = e(a), t = e(t);
                for (var r = 0;;) {
                  if (r >= a.length) return r < t.length && "u" != (typeof t[r])[0];
                  var d = a[r],
                    f = (typeof d)[0];
                  if (r >= t.length) return "u" == f;
                  var n = t[r],
                    c = (typeof n)[0];
                  if (f != c) return "o" == f && "n" == c || "s" == c || "u" == f;
                  if ("o" != f && "u" != f && d != n) return d < n;
                  r++
                }
              })(a, r) ? a : r, 0)) && n[r]
            },
            d = e => {
              throw new Error(e)
            },
            f = (e => function(a, t, r, d, f) {
              var n = b.I(a);
              return n && n.then && !r ? n.then(e.bind(e, a, b.S[a], t, !1, d, f)) : e(a, b.S[a], t, r, d, f)
            })((e, t, f, n, c, o) => {
              if (!((e, a) => e && b.o(e, a))(t, f)) return ((e, a, t) => t ? t() : ((e, a) => d("Shared module " + a + " doesn't exist in shared scope " + e))(e, a))(e, f, o);
              var i, s = r(t, f, c, n);
              return s ? ((i = s).loaded = 1, i.get()) : o ? o() : void d(((e, t, r, d, f) => {
                var n = e[r];
                return "No satisfying version (" + a(d) + ")" + (f ? " for eager consumption" : "") + " of shared module " + r + " found in shared scope " + t + ".\nAvailable versions: " + Object.keys(n).map(e => e + " from " + n[e].from).join(", ")
              })(t, e, f, c, n))
            }),
            n = {},
            c = {
              2229: () => f("default", "react", !1, [1, 18, 2, 0], () => b.e(8431).then(() => () => b(8431))),
              1788: () => f("default", "@rsgweb/locale-tools", !1, [1, "workspace:^"], () => Promise.all([b.e(9587), b.e(8240)]).then(() => () => b(2841))),
              9623: () => f("default", "react-router-dom", !1, [1, 6, 11, 2], () => b.e(5389).then(() => () => b(5389))),
              1913: () => f("default", "react", !1, [1, 18, 2, 0], () => b.e(8659).then(() => () => b(8659))),
              3582: () => f("default", "framer-motion", !1, [1, 7, 5, 1], () => b.e(5912).then(() => () => b(5912))),
              4572: () => f("default", "clsx", !1, [1, 2, 1, 1], () => b.e(439).then(() => () => b(439))),
              5587: () => f("default", "usehooks-ts", !1, [1, 2, 7, 2], () => b.e(2562).then(() => () => b(2562))),
              5966: () => f("default", "@rsgweb/utils", !1, [1, "workspace:^"], () => Promise.all([b.e(450), b.e(9757)]).then(() => () => b(9757)))
            },
            o = {
              1657: [1913, 3582, 4572, 5587, 5966],
              2229: [2229],
              5811: [1788, 9623]
            },
            i = {};
          b.f.consumes = (e, a) => {
            b.o(o, e) && o[e].forEach(e => {
              if (b.o(n, e)) return a.push(n[e]);
              if (!i[e]) {
                var t = a => {
                  n[e] = 0, b.m[e] = t => {
                    delete b.c[e], t.exports = a()
                  }
                };
                i[e] = !0;
                var r = a => {
                  delete n[e], b.m[e] = t => {
                    throw delete b.c[e], a
                  }
                };
                try {
                  var d = c[e]();
                  d.then ? a.push(n[e] = d.then(t).catch(r)) : t(d)
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
            b.f.miniCss = (a, t) => {
              e[a] ? t.push(e[a]) : 0 !== e[a] && {
                1657: 1
              } [a] && t.push(e[a] = (e => new Promise((a, t) => {
                var r = b.miniCssF(e),
                  d = b.p + r;
                if (((e, a) => {
                    for (var t = document.getElementsByTagName("link"), r = 0; r < t.length; r++) {
                      var d = (n = t[r]).getAttribute("data-href") || n.getAttribute("href");
                      if ("stylesheet" === n.rel && (d === e || d === a)) return n
                    }
                    var f = document.getElementsByTagName("style");
                    for (r = 0; r < f.length; r++) {
                      var n;
                      if ((d = (n = f[r]).getAttribute("data-href")) === e || d === a) return n
                    }
                  })(r, d)) return a();
                ((e, a, t, r, d) => {
                  var f = document.createElement("link");
                  f.rel = "stylesheet", f.type = "text/css", b.nc && (f.nonce = b.nc), f.onerror = f.onload = t => {
                    if (f.onerror = f.onload = null, "load" === t.type) r();
                    else {
                      var n = t && t.type,
                        c = t && t.target && t.target.href || a,
                        o = new Error("Loading CSS chunk " + e + " failed.\n(" + n + ": " + c + ")");
                      o.name = "ChunkLoadError", o.code = "CSS_CHUNK_LOAD_FAILED", o.type = n, o.request = c, f.parentNode && f.parentNode.removeChild(f), d(o)
                    }
                  }, f.href = a, document.head.appendChild(f)
                })(e, d, 0, a, t)
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
          b.f.j = (a, t) => {
            var r = b.o(e, a) ? e[a] : void 0;
            if (0 !== r)
              if (r) t.push(r[2]);
              else if (2229 != a) {
              var d = new Promise((t, d) => r = e[a] = [t, d]);
              t.push(r[2] = d);
              var f = b.p + b.u(a),
                n = new Error;
              b.l(f, t => {
                if (b.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
                  var d = t && ("load" === t.type ? "missing" : t.type),
                    f = t && t.target && t.target.src;
                  n.message = "Loading chunk " + a + " failed.\n(" + d + ": " + f + ")", n.name = "ChunkLoadError", n.type = d, n.request = f, r[1](n)
                }
              }, "chunk-" + a, a)
            } else e[a] = 0
          };
          var a = (a, t) => {
              var r, d, [f, n, c] = t,
                o = 0;
              if (f.some(a => 0 !== e[a])) {
                for (r in n) b.o(n, r) && (b.m[r] = n[r]);
                c && c(b)
              }
              for (a && a(t); o < f.length; o++) d = f[o], b.o(e, d) && e[d] && e[d][0](), e[d] = 0
            },
            t = self.webpackChunk_rockstargames_sites_gta_trilogy = self.webpackChunk_rockstargames_sites_gta_trilogy || [];
          t.forEach(a.bind(null, 0)), t.push = a.bind(null, t.push.bind(t))
        })(), b(3032), b(5819)
      })())
    }
  }
});