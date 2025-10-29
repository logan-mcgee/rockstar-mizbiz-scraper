try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "305d6466-25da-4b6f-bfa3-816bba3d8b19", e._sentryDebugIdIdentifier = "sentry-dbid-305d6466-25da-4b6f-bfa3-816bba3d8b19")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-gta-trilogy",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/modules-core-videoplayer"], (function(e, a) {
  var t = {};
  return Object.defineProperty(t, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      Object.keys(e).forEach((function(a) {
        t[a] = e[a]
      }))
    }],
    execute: function() {
      e((() => {
        var e, r, f, c, d, n, o = {
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
                  "./index": () => Promise.all([t.e(4910), t.e(7662), t.e(2229), t.e(7583), t.e(1657)]).then((() => () => t(9249)))
                },
                f = (e, a) => (t.R = a, a = t.o(r, e) ? r[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), t.R = void 0, a),
                c = (e, a) => {
                  if (t.S) {
                    var r = "default",
                      f = t.S[r];
                    if (f && f !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return t.S[r] = e, t.I(r, a)
                  }
                };
              t.d(a, {
                get: () => f,
                init: () => c
              })
            },
            7027: (e, a, t) => {
              a.y = function(e, a) {
                var t = document.createElement("a");
                t.href = e;
                for (var r = "/" === t.pathname[0] ? t.pathname : "/" + t.pathname, f = 0, c = r.length; f !== a && c >= 0;) "/" === r[--c] && f++;
                if (f !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + f + ") in the URL path " + e);
                var d = r.slice(0, c + 1);
                return t.protocol + "//" + t.host + d
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
          var f = Object.create(null);
          b.r(f);
          var c = {};
          e = e || [null, r({}), r([]), r(r)];
          for (var d = 2 & t && a;
            ("object" == typeof d || "function" == typeof d) && !~e.indexOf(d); d = r(d)) Object.getOwnPropertyNames(d).forEach((e => c[e] = () => a[e]));
          return c.default = () => a, b.d(f, c), f
        }, b.d = (e, a) => {
          for (var t in a) b.o(a, t) && !b.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: a[t]
          })
        }, b.f = {}, b.e = e => Promise.all(Object.keys(b.f).reduce(((a, t) => (b.f[t](e, a), a)), [])), b.u = e => "js/" + {
          131: "e11a5cd59a91bbffdaf64d3a7953c902",
          278: "f9955b42c5cbe16520ffdf47521a5adc",
          299: "655fe711537af07ba7b879e5e6a1d7d2",
          314: "eb3db7dae7e2be26f1437e06e4f2e72c",
          439: "9c261cab8912a59af3af480dc68acc9a",
          450: "36c25e8da54cd27206f9eec590756ea7",
          662: "ef23a1b413e89bc1f6dd91d8c3983066",
          824: "5fc55239d130496e72a19f50a765f390",
          907: "c1ca2ac5e4913329398d8d9b9cc36bc2",
          1054: "39b55ac2a75b63f9db3d855f834e46f8",
          1242: "c1fe890d8113087cb8e43b7c85de567b",
          1657: "496c495054485be599148c8cea84d465",
          1822: "85eb9687c0af5b355a22a547332571d7",
          1868: "129bb4fc5dc3913e365f3c91709cb705",
          2156: "720ef8ca06c434f11fd909d85b423f3e",
          2171: "058e8ff73c04763458cf37aac71bbe12",
          2221: "04d253abd5106765a65170ba7bab9d6f",
          2243: "c725c8cd5e89634c54fe6e8525286d10",
          2306: "8cd4d2d784858986673c04d7a54ce363",
          2347: "a8bbdcd0bc51188a0b15c63064e527f0",
          2365: "f9fb7143bf0ddbd66083b6109d5acec5",
          2398: "d662bc89ece34b80e945e6b0f35cb3bf",
          2466: "af12fb36151cc217bbf612f80e7ed674",
          2562: "bd6b54b612c6eef228fcb497121551b4",
          2642: "8ec626985d79249b61b9ca67f53f1236",
          2678: "635c010c5deb918ccb73ab649d7c8be4",
          2864: "fd1179fb00519416f67d08833c26f611",
          3034: "48a415205d3fbe344a61632c084e14ac",
          3197: "15bfc6dcf03eb29c27e38412ba170aae",
          3343: "86b0d5fcc8ad0a15204dd237ffb965ed",
          3370: "258096aeedee01e65c26a394c22b53cb",
          3475: "a4ed8ae8ebfcff3eeaa91aeec57e21e9",
          3486: "e78eb49fa8462d0daa2ed3bc9ed72ee2",
          3697: "ac6cb13cd3583bc205ccc6d3607c40b2",
          3885: "4a9ec3984ba00ec5eb79688b772ac055",
          3941: "8f763384b270aae36a18bbfa516b3291",
          4011: "8fe6cd33bd6a861b77bb623262717402",
          4528: "e24f70c5b3e51c7f41c04ea3b7ee2e21",
          4578: "265c227f60d2747bb6830d7c476c5ce9",
          4621: "bc89212dee2542f0ea21f202e8e2e027",
          4700: "6e5c1fc79fb17570b7a7a0636e1f70d7",
          4710: "71f0a00fd7572817b413e51114707e50",
          4731: "35a500d004043232d9d03ad3988bb164",
          4799: "1a839d76390d3e40b1016a2220dc13b2",
          4851: "d31741c0e7942bbdb06ae759a6d7d9d9",
          4861: "7a1fe085a41358b370a077fa0fdf5792",
          4910: "c93f95ec6517c67110d28565b25080f2",
          4913: "095d63a8732acdbe523b22047e137cab",
          5018: "6fc6b20fa47592daf09276c9002591ea",
          5233: "8c7577a1c46ccf4559c42739ce7a9f95",
          5259: "483b3232653f4e3d2170384e23687d1b",
          5389: "f62cc5cbd11963049bbac29cc39940e0",
          5530: "d29270e9f3ebbfb06ad31c3f1c7bd9e4",
          5639: "baf715c0c1b9cf2f4ec98f69676b9458",
          5663: "d65de5d87a0e53f3ff47e7c1dee38318",
          5742: "e369791b580c7239576cc965b7824278",
          5830: "0df9d2b511262c40f58dd3d11dee6ae5",
          5832: "a47cdb1a810526eae7c2016d85dc73e7",
          5912: "df881efbd50562a71680b48bf10dad46",
          6267: "241f797f7ab648d4b79cdb4ff5135bc8",
          6280: "5c19e64e92e1869caac5ba6fb2ef9164",
          6285: "e10061745e12ac6e132e18e7256276a6",
          6361: "4ede773c1d47c5dc4e97df8184a2cce8",
          6664: "15be05802099d25d2486e57ecd55d4cb",
          6879: "3c32ae48e5cee9bbc0c9d5f8c152b28f",
          6891: "3f381df3a7744931fd2325a49a8f8b53",
          6997: "a5f76e45160fe3f6908383824c7da22a",
          7010: "d131e0ec8322e9cc64b3eca360b4abf1",
          7073: "a682d0b8b144fc269d0efe1f7932d5a4",
          7436: "9e8be3f8dc2583d3aeb7108a1c1bc1eb",
          7452: "3f6b40139bc5d9f9a7c94305e2179bb0",
          7453: "f06aaf460a99e8b717aa787b38d80fbc",
          7583: "866d94b81dcbae1513fb250371452314",
          7662: "65c2d5411bfda04ded81216a21193d8a",
          7970: "1c870a30dc5f1ce70882a32119a58f03",
          8240: "b27a0b8924e3a124736ff581548e2098",
          8272: "afb360123eeaa7b00e088003cd74ad2d",
          8322: "961ca87063ec54bf390699ca9643835b",
          8391: "1113040188091ea1c96ac2e2f55363d9",
          8431: "e238b8cfbecbfe2735b605ee0740dd23",
          8659: "9267dfbf5cf18685b2bc8bc7a57fe7e3",
          8755: "befb7df1f864a0e393ecd15c27dbd355",
          8880: "58e79014a384e2e90ce1b6212a55b92d",
          8970: "93b0d04175d7956dc77a04956ebb060f",
          9022: "58aaa2a17dfa39f78ec06492923603c7",
          9028: "3300c61c17acd09f3941689eb0496068",
          9126: "dc4041fd9e2c80cddf400824aaac77d1",
          9377: "dd36843b0c089415087c20f2edaab213",
          9587: "6b01124a5cd6de89aebb6fa06d5bd0c8",
          9615: "e0e26b5173e5e1c4541f07fd7abecd17",
          9757: "7a5e946e36e43b004bf7e4c606291534",
          9936: "6e1be66627d451139afcda70e0b8c4ec",
          9975: "51aa5fb11cb83839dc80e33d386b578c",
          9990: "e6edea8fd13577e2faac762ce8425929"
        } [e] + ".js", b.miniCssF = e => "css/e78c3ee290f204e2b3dd5bed2b3ce7fc.css", b.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), b.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), f = {}, c = "@rockstargames/sites-gta-trilogy:", b.l = (e, a, t, r) => {
          if (f[e]) f[e].push(a);
          else {
            var d, n;
            if (void 0 !== t)
              for (var o = document.getElementsByTagName("script"), i = 0; i < o.length; i++) {
                var s = o[i];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == c + t) {
                  d = s;
                  break
                }
              }
            d || (n = !0, (d = document.createElement("script")).charset = "utf-8", d.timeout = 120, b.nc && d.setAttribute("nonce", b.nc), d.setAttribute("data-webpack", c + t), d.src = e), f[e] = [a];
            var l = (a, t) => {
                d.onerror = d.onload = null, clearTimeout(u);
                var r = f[e];
                if (delete f[e], d.parentNode && d.parentNode.removeChild(d), r && r.forEach((e => e(t))), a) return a(t)
              },
              u = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: d
              }), 12e4);
            d.onerror = l.bind(null, d.onerror), d.onload = l.bind(null, d.onload), n && document.head.appendChild(d)
          }
        }, b.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, b.nmd = e => (e.paths = [], e.children || (e.children = []), e), d = {
          1657: [1879]
        }, n = {
          1879: ["default", "./index", 5136]
        }, b.f.remotes = (e, a) => {
          b.o(d, e) && d[e].forEach((e => {
            var t = b.R;
            t || (t = []);
            var r = n[e];
            if (!(t.indexOf(r) >= 0)) {
              if (t.push(r), r.p) return a.push(r.p);
              var f = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + r[1] + '" from ' + r[2]), b.m[e] = () => {
                    throw a
                  }, r.p = 0
                },
                c = (e, t, c, d, n, o) => {
                  try {
                    var i = e(t, c);
                    if (!i || !i.then) return n(i, d, o);
                    var b = i.then((e => n(e, d)), f);
                    if (!o) return b;
                    a.push(r.p = b)
                  } catch (e) {
                    f(e)
                  }
                },
                d = (e, a, f) => c(a.get, r[1], t, 0, o, f),
                o = a => {
                  r.p = 1, b.m[e] = e => {
                    e.exports = a()
                  }
                };
              c(b, r[2], 0, 0, ((e, a, t) => e ? c(b.I, r[0], 0, e, d, t) : f()), 1)
            }
          }))
        }, (() => {
          b.S = {};
          var e = {},
            a = {};
          b.I = (t, r) => {
            r || (r = []);
            var f = a[t];
            if (f || (f = a[t] = {}), !(r.indexOf(f) >= 0)) {
              if (r.push(f), e[t]) return e[t];
              b.o(b.S, t) || (b.S[t] = {});
              var c = b.S[t],
                d = "@rockstargames/sites-gta-trilogy",
                n = (e, a, t, r) => {
                  var f = c[e] = c[e] || {},
                    n = f[a];
                  (!n || !n.loaded && (!r != !n.eager ? r : d > n.from)) && (f[a] = {
                    get: t,
                    from: d,
                    eager: !!r
                  })
                },
                o = [];
              return "default" === t && (n("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([b.e(9587), b.e(2229), b.e(9975)]).then((() => () => b(2841))))), n("@rsgweb/utils", "1.0.0", (() => Promise.all([b.e(450), b.e(4910), b.e(2229), b.e(9757), b.e(7583)]).then((() => () => b(9757))))), n("clsx", "2.1.1", (() => b.e(439).then((() => () => b(439))))), n("framer-motion", "7.10.3", (() => Promise.all([b.e(5912), b.e(2229), b.e(8322)]).then((() => () => b(5912))))), n("react-router-dom", "6.30.0", (() => Promise.all([b.e(5389), b.e(2229)]).then((() => () => b(5389))))), n("react", "18.2.0", (() => b.e(8659).then((() => () => b(8659))))), n("react", "18.3.1", (() => b.e(8431).then((() => () => b(8431))))), n("usehooks-ts", "2.16.0", (() => Promise.all([b.e(2562), b.e(2229)]).then((() => () => b(2562))))), (() => {
                var e = e => {
                  return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                  var a
                };
                try {
                  var a = b(5136);
                  if (!a) return;
                  var f = e => e && e.init && e.init(b.S[t], r);
                  if (a.then) return o.push(a.then(f, e));
                  var c = f(a);
                  if (c && c.then) return o.push(c.catch(e))
                } catch (a) {
                  e(a)
                }
              })()), o.length ? e[t] = Promise.all(o).then((() => e[t] = 1)) : e[t] = 1
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
              var a = e => e.split(".").map((e => +e == e ? +e : e)),
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
                for (var f = 1, c = 1; c < e.length; c++) f--, r += "u" == (typeof(n = e[c]))[0] ? "-" : (f > 0 ? "." : "") + (f = 2, n);
                return r
              }
              var d = [];
              for (c = 1; c < e.length; c++) {
                var n = e[c];
                d.push(0 === n ? "not(" + o() + ")" : 1 === n ? "(" + o() + " || " + o() + ")" : 2 === n ? d.pop() + " " + d.pop() : a(n))
              }
              return o();

              function o() {
                return d.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            t = (a, r) => {
              if (0 in a) {
                r = e(r);
                var f = a[0],
                  c = f < 0;
                c && (f = -f - 1);
                for (var d = 0, n = 1, o = !0;; n++, d++) {
                  var i, b, s = n < a.length ? (typeof a[n])[0] : "";
                  if (d >= r.length || "o" == (b = (typeof(i = r[d]))[0])) return !o || ("u" == s ? n > f && !c : "" == s != c);
                  if ("u" == b) {
                    if (!o || "u" != s) return !1
                  } else if (o)
                    if (s == b)
                      if (n <= f) {
                        if (i != a[n]) return !1
                      } else {
                        if (c ? i > a[n] : i < a[n]) return !1;
                        i != a[n] && (o = !1)
                      }
                  else if ("s" != s && "n" != s) {
                    if (c || n <= f) return !1;
                    o = !1, n--
                  } else {
                    if (n <= f || b < s != c) return !1;
                    o = !1
                  } else "s" != s && "n" != s && (o = !1, n--)
                }
              }
              var l = [],
                u = l.pop.bind(l);
              for (d = 1; d < a.length; d++) {
                var p = a[d];
                l.push(1 == p ? u() | u() : 2 == p ? u() & u() : p ? t(p, r) : !u())
              }
              return !!u()
            },
            r = (a, r, f, c) => {
              var d = c ? (e => Object.keys(e).reduce(((a, t) => (e[t].eager && (a[t] = e[t]), a)), {}))(a[r]) : a[r];
              return (r = Object.keys(d).reduce(((a, r) => !t(f, r) || a && !((a, t) => {
                a = e(a), t = e(t);
                for (var r = 0;;) {
                  if (r >= a.length) return r < t.length && "u" != (typeof t[r])[0];
                  var f = a[r],
                    c = (typeof f)[0];
                  if (r >= t.length) return "u" == c;
                  var d = t[r],
                    n = (typeof d)[0];
                  if (c != n) return "o" == c && "n" == n || "s" == n || "u" == c;
                  if ("o" != c && "u" != c && f != d) return f < d;
                  r++
                }
              })(a, r) ? a : r), 0)) && d[r]
            },
            f = e => {
              throw new Error(e)
            },
            c = (e => function(a, t, r, f, c) {
              var d = b.I(a);
              return d && d.then && !r ? d.then(e.bind(e, a, b.S[a], t, !1, f, c)) : e(a, b.S[a], t, r, f, c)
            })(((e, t, c, d, n, o) => {
              if (!((e, a) => e && b.o(e, a))(t, c)) return ((e, a, t) => t ? t() : ((e, a) => f("Shared module " + a + " doesn't exist in shared scope " + e))(e, a))(e, c, o);
              var i, s = r(t, c, n, d);
              return s ? ((i = s).loaded = 1, i.get()) : o ? o() : void f(((e, t, r, f, c) => {
                var d = e[r];
                return "No satisfying version (" + a(f) + ")" + (c ? " for eager consumption" : "") + " of shared module " + r + " found in shared scope " + t + ".\nAvailable versions: " + Object.keys(d).map((e => e + " from " + d[e].from)).join(", ")
              })(t, e, c, n, d))
            })),
            d = {},
            n = {
              2229: () => c("default", "react", !1, [1, 18, 2, 0], (() => b.e(8431).then((() => () => b(8431))))),
              1788: () => c("default", "@rsgweb/locale-tools", !1, [1, "workspace:^"], (() => Promise.all([b.e(9587), b.e(8240)]).then((() => () => b(2841))))),
              9623: () => c("default", "react-router-dom", !1, [1, 6, 11, 2], (() => b.e(5389).then((() => () => b(5389))))),
              1913: () => c("default", "react", !1, [1, 18, 2, 0], (() => b.e(8659).then((() => () => b(8659))))),
              3582: () => c("default", "framer-motion", !1, [1, 7, 5, 1], (() => b.e(5912).then((() => () => b(5912))))),
              4572: () => c("default", "clsx", !1, [1, 2, 1, 1], (() => b.e(439).then((() => () => b(439))))),
              5587: () => c("default", "usehooks-ts", !1, [1, 2, 7, 2], (() => b.e(2562).then((() => () => b(2562))))),
              5966: () => c("default", "@rsgweb/utils", !1, [1, "workspace:^"], (() => Promise.all([b.e(450), b.e(9757)]).then((() => () => b(9757)))))
            },
            o = {
              1657: [1913, 3582, 4572, 5587, 5966],
              2229: [2229],
              7583: [1788, 9623]
            },
            i = {};
          b.f.consumes = (e, a) => {
            b.o(o, e) && o[e].forEach((e => {
              if (b.o(d, e)) return a.push(d[e]);
              if (!i[e]) {
                var t = a => {
                  d[e] = 0, b.m[e] = t => {
                    delete b.c[e], t.exports = a()
                  }
                };
                i[e] = !0;
                var r = a => {
                  delete d[e], b.m[e] = t => {
                    throw delete b.c[e], a
                  }
                };
                try {
                  var f = n[e]();
                  f.then ? a.push(d[e] = f.then(t).catch(r)) : t(f)
                } catch (e) {
                  r(e)
                }
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              7060: 0
            };
            b.f.miniCss = (a, t) => {
              e[a] ? t.push(e[a]) : 0 !== e[a] && {
                1657: 1
              } [a] && t.push(e[a] = (e => new Promise(((a, t) => {
                var r = b.miniCssF(e),
                  f = b.p + r;
                if (((e, a) => {
                    for (var t = document.getElementsByTagName("link"), r = 0; r < t.length; r++) {
                      var f = (d = t[r]).getAttribute("data-href") || d.getAttribute("href");
                      if ("stylesheet" === d.rel && (f === e || f === a)) return d
                    }
                    var c = document.getElementsByTagName("style");
                    for (r = 0; r < c.length; r++) {
                      var d;
                      if ((f = (d = c[r]).getAttribute("data-href")) === e || f === a) return d
                    }
                  })(r, f)) return a();
                ((e, a, t, r, f) => {
                  var c = document.createElement("link");
                  c.rel = "stylesheet", c.type = "text/css", b.nc && (c.nonce = b.nc), c.onerror = c.onload = t => {
                    if (c.onerror = c.onload = null, "load" === t.type) r();
                    else {
                      var d = t && t.type,
                        n = t && t.target && t.target.href || a,
                        o = new Error("Loading CSS chunk " + e + " failed.\n(" + d + ": " + n + ")");
                      o.name = "ChunkLoadError", o.code = "CSS_CHUNK_LOAD_FAILED", o.type = d, o.request = n, c.parentNode && c.parentNode.removeChild(c), f(o)
                    }
                  }, c.href = a, document.head.appendChild(c)
                })(e, f, 0, a, t)
              })))(a).then((() => {
                e[a] = 0
              }), (t => {
                throw delete e[a], t
              })))
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
              var f = new Promise(((t, f) => r = e[a] = [t, f]));
              t.push(r[2] = f);
              var c = b.p + b.u(a),
                d = new Error;
              b.l(c, (t => {
                if (b.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
                  var f = t && ("load" === t.type ? "missing" : t.type),
                    c = t && t.target && t.target.src;
                  d.message = "Loading chunk " + a + " failed.\n(" + f + ": " + c + ")", d.name = "ChunkLoadError", d.type = f, d.request = c, r[1](d)
                }
              }), "chunk-" + a, a)
            } else e[a] = 0
          };
          var a = (a, t) => {
              var r, f, [c, d, n] = t,
                o = 0;
              if (c.some((a => 0 !== e[a]))) {
                for (r in d) b.o(d, r) && (b.m[r] = d[r]);
                n && n(b)
              }
              for (a && a(t); o < c.length; o++) f = c[o], b.o(e, f) && e[f] && e[f][0](), e[f] = 0
            },
            t = self.webpackChunk_rockstargames_sites_gta_trilogy = self.webpackChunk_rockstargames_sites_gta_trilogy || [];
          t.forEach(a.bind(null, 0)), t.push = a.bind(null, t.push.bind(t))
        })(), b(3032), b(5819)
      })())
    }
  }
}));