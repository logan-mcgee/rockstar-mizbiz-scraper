try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "7a0c0c66-e70e-41da-b8aa-d8a5c600aba5", e._sentryDebugIdIdentifier = "sentry-dbid-7a0c0c66-e70e-41da-b8aa-d8a5c600aba5")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-red-dead-redemption-2",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/modules-core-videoplayer"], function(e, a) {
  var r = {};
  return Object.defineProperty(r, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      Object.keys(e).forEach(function(a) {
        r[a] = e[a]
      })
    }],
    execute: function() {
      e((() => {
        var e, t, d, c, f, n, o = {
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
                for (var t = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, d = 0, c = t.length; d !== a && c >= 0;) "/" === t[--c] && d++;
                if (d !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + d + ") in the URL path " + e);
                var f = t.slice(0, c + 1);
                return r.protocol + "//" + r.host + f
              };
              Number.isInteger
            },
            85819: (e, a, r) => {
              "use strict";
              var t = {
                  "./index": () => Promise.all([r.e(9060), r.e(4907), r.e(9763), r.e(8745), r.e(2229), r.e(6088), r.e(1788), r.e(2169), r.e(7814)]).then(() => () => r(87814))
                },
                d = (e, a) => (r.R = a, a = r.o(t, e) ? t[e]() : Promise.resolve().then(() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                }), r.R = void 0, a),
                c = (e, a) => {
                  if (r.S) {
                    var t = "default",
                      d = r.S[t];
                    if (d && d !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return r.S[t] = e, r.I(t, a)
                  }
                };
              r.d(a, {
                get: () => d,
                init: () => c
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
          var c = {};
          e = e || [null, t({}), t([]), t(t)];
          for (var f = 2 & r && a;
            ("object" == typeof f || "function" == typeof f) && !~e.indexOf(f); f = t(f)) Object.getOwnPropertyNames(f).forEach(e => c[e] = () => a[e]);
          return c.default = () => a, i.d(d, c), d
        }, i.d = (e, a) => {
          for (var r in a) i.o(a, r) && !i.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: a[r]
          })
        }, i.f = {}, i.e = e => Promise.all(Object.keys(i.f).reduce((a, r) => (i.f[r](e, a), a), [])), i.u = e => "js/" + {
          131: "62cc990e06311ed50b9531e78a87c7dd",
          278: "c0fbc74eae7437dbd264faf239420b3c",
          299: "03f8e3ee905fe1c313637aacc0dd7254",
          314: "45313be441586cd357ec18b656d33300",
          426: "8cdf6537bbfe390c26792c48040308c0",
          439: "a219dc4460d1af96cb73570ab99c5991",
          662: "112b6b75fecfac9291ed2e1a5615a040",
          824: "31e6addcd6c88479a7fae0bf44cc2b19",
          907: "1e1ee8ad89cbeb9d105ca71abae54fd4",
          1054: "b5585e547186262d8ff8c88c667197d8",
          1098: "7c4c305bef87e12a1b7dee197e54fcf6",
          1242: "cf446fac05f85ba475559a9c91cdcad9",
          1822: "7907d6fd121223c6cecf8d48e6442c1a",
          1868: "c5749ac6cd37445b339db9a8b7e98064",
          2156: "b00a512cbc42beef7f2b8d4fe7161f57",
          2169: "07e291fa836c1b836c9e9f6a5bf933e0",
          2171: "0b94d16871e6657d543212e1f60c8b32",
          2217: "997a62466db806912a0d85d2233a8d30",
          2221: "a890a9d45c58da02d507069601ab16d1",
          2243: "bf54c08be9b99f77763a9418bd94c1ae",
          2306: "76a4147aff2a10a1f94562cad7461583",
          2347: "c6fda69ad3d829b513eba68997019399",
          2365: "9397fd5aa062009fba3bb1556e23c5e0",
          2398: "0edc5355012ee286cf2af3a9824e37eb",
          2466: "14961912298adafbe739eb574fc4b072",
          2508: "b364a9c79b6da28051664738127c1999",
          2642: "215f57c1e7d56a3181529a1548b80579",
          2678: "dca92122d7daf2bce169b538159e1ef8",
          2864: "6b47ca680c9bc9ec0ea635606e7fce4f",
          3034: "65e1f4715ff3a917967b7638e545f7f1",
          3197: "f74c5b3c0c1974a3f5843b55ff01719b",
          3343: "4f018c16a351c448b2d801efdab03a8a",
          3370: "19981b9fa6115a9069a289bc687e300a",
          3475: "26f7516e16df4221da292adf4b6ef896",
          3486: "f9a70fa1eabca8a32b4455dbf831209f",
          3697: "c5f6c67dca6204bc3fcfdc70e1c69bd4",
          3885: "aa81bfbf04f039cfe110453b04087cf9",
          3941: "9acf10c9e137f6652378ab7853f03ab7",
          4011: "3efd6f7de3b182abe3f89893c99a74f3",
          4528: "eeb3a3e41b330c77fa4595fd474db36b",
          4578: "e338aa7a24d4f2f584c30eb31413fded",
          4598: "942730c0a4034df821b765ed8c01483e",
          4621: "3cac3ff7c6b3811900f8cf82402aad4c",
          4700: "ada710fe20937771388dcf0d5c802a76",
          4710: "4a1a2e251c60f7c841fb45fc3aeac4b2",
          4731: "6346a01a3724da8aa38b8a8f1a567380",
          4799: "ec0363edfbd940fa79f810465218e1d8",
          4851: "08a4831b11d595a3d0c55ecf0089d597",
          4861: "fcfef2af6cf28b23f59c8f68e25a7691",
          4907: "f546abdc65d60468664abf9c43162920",
          4913: "fb4fd85450f29430ced5f858b397a0c1",
          5018: "0c073346e546caa3caa0978b47e83b01",
          5076: "49719623c265bde92fb05f2eafc2c212",
          5233: "7ead8242f1c405fe259a25dbc143006b",
          5259: "86f30aa12749687c279d2bff80c259e5",
          5389: "19144e005752a02d38eff488bbb952c9",
          5530: "27a12c5923accb3ee14a9d251fca9509",
          5639: "c0da4443cfa5f357a58119e4ad862207",
          5663: "92ae10e0e1c659352dfa4d0a8242d6af",
          5742: "98f409da55891d4016c853a452bf8381",
          5830: "df6ca97bbaf63bdbcc3ac72b68d3188a",
          5832: "eafb73ac493d56f98642022bc9203698",
          6088: "b9dbebde5028803ef23828f5a852c98d",
          6267: "84820b46c044b6d98d11f6ff57bf36f2",
          6280: "e144c2b6e302e7546c1b288751fb5cdc",
          6285: "a91ce7ade935ab9f2f5fcf46b04ffef4",
          6361: "29fbe2f21b0706ce4390ae51d47a4021",
          6664: "1c66b435cfa82436d34d9ab500c339d7",
          6879: "3d890b6e90fee1bd37ebd5f5f948f89c",
          6891: "75bf3c7edc9ba05497cd0a310c041d60",
          6997: "7ab7b31643fd31d6ebd8929f3cdf6502",
          7010: "755623310b22f31fa4b23a048630ecfa",
          7073: "dfd9d34621af650d8d33894460373a54",
          7436: "7fd2fc7b7e4daf52e0c71710ef53737b",
          7452: "a91b24a4b9ff84602da7d8a56c0eb4f8",
          7453: "54ec57cbea41a0917f36c0a6abf03602",
          7814: "8003dd5dd3c26d394d293f800987689d",
          7970: "cbc128ea052867f83122a050c1bb94d6",
          8240: "2d2bad28cb9d25bc54f47f75c72f798c",
          8272: "4e6c5a9af0f397a1356ed47a2a7af65b",
          8299: "a74eace7a8dc05e880dfaf2cd66de94e",
          8391: "91a9c2743851b0b92ed7dbc9913f087e",
          8431: "9f07019d68c1c39d79c2d7f6c8f73cee",
          8745: "0b2244b9e16428d10229f642120f5f90",
          8755: "f0178b0d80dfc98c5c7ca6650eaa1914",
          8880: "186d20ce4a06b440e838c484f56b9d97",
          8970: "72b2405f7724f8a1defec76e0115d85d",
          9022: "84b7b957efe5f96b7c1d3d9a258408b1",
          9028: "e6b49dedb75841045f216ab4bd350211",
          9060: "0bd6a72d766855dab3ca88e98db5dfaf",
          9126: "9677f1db3b6cf62439368ab5f001d443",
          9377: "12d3ecf97e37268659c9e45e9c2cd6b4",
          9587: "b58ad3a8cadbbbdb3839a4525b2dc4d2",
          9615: "1f0a43c2597d6c818ad8ed0dff0166fa",
          9763: "1ea75275be4111fb1f87c5aaefa0a29c",
          9936: "e94ac6cea7b7223c558a655d53a2cc0b",
          9975: "ed4558db27e4901bb9f2acde8ec9db4a",
          9990: "d8b434f837a621886307a272698a6263"
        } [e] + ".js", i.miniCssF = e => "css/" + {
          2217: "34b3f5465a92bac15ce2a811712ab3bf",
          4598: "34b3f5465a92bac15ce2a811712ab3bf",
          7814: "d134426a7bab3346c8039eea5ebfe682"
        } [e] + ".css", i.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), i.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), d = {}, c = "@rockstargames/sites-red-dead-redemption-2:", i.l = (e, a, r, t) => {
          if (d[e]) d[e].push(a);
          else {
            var f, n;
            if (void 0 !== r)
              for (var o = document.getElementsByTagName("script"), b = 0; b < o.length; b++) {
                var s = o[b];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == c + r) {
                  f = s;
                  break
                }
              }
            f || (n = !0, (f = document.createElement("script")).charset = "utf-8", f.timeout = 120, i.nc && f.setAttribute("nonce", i.nc), f.setAttribute("data-webpack", c + r), f.src = e), d[e] = [a];
            var l = (a, r) => {
                f.onerror = f.onload = null, clearTimeout(u);
                var t = d[e];
                if (delete d[e], f.parentNode && f.parentNode.removeChild(f), t && t.forEach(e => e(r)), a) return a(r)
              },
              u = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: f
              }), 12e4);
            f.onerror = l.bind(null, f.onerror), f.onload = l.bind(null, f.onload), n && document.head.appendChild(f)
          }
        }, i.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, i.nmd = e => (e.paths = [], e.children || (e.children = []), e), f = {
          7814: [31879]
        }, n = {
          31879: ["default", "./index", 25136]
        }, i.f.remotes = (e, a) => {
          i.o(f, e) && f[e].forEach(e => {
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
                c = (e, r, c, f, n, o) => {
                  try {
                    var b = e(r, c);
                    if (!b || !b.then) return n(b, f, o);
                    var i = b.then(e => n(e, f), d);
                    if (!o) return i;
                    a.push(t.p = i)
                  } catch (e) {
                    d(e)
                  }
                },
                f = (e, a, d) => c(a.get, t[1], r, 0, o, d),
                o = a => {
                  t.p = 1, i.m[e] = e => {
                    e.exports = a()
                  }
                };
              c(i, t[2], 0, 0, (e, a, r) => e ? c(i.I, t[0], 0, e, f, r) : d(), 1)
            }
          })
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
              var c = i.S[r],
                f = "@rockstargames/sites-red-dead-redemption-2",
                n = (e, a, r, t) => {
                  var d = c[e] = c[e] || {},
                    n = d[a];
                  (!n || !n.loaded && (!t != !n.eager ? t : f > n.from)) && (d[a] = {
                    get: r,
                    from: f,
                    eager: !!t
                  })
                },
                o = [];
              return "default" === r && (n("@rsgweb/locale-tools", "1.0.0", () => Promise.all([i.e(9587), i.e(2229), i.e(9975)]).then(() => () => i(12841))), n("@rsgweb/modules-core-agegate", "0.0.0", () => Promise.all([i.e(4907), i.e(9763), i.e(2508), i.e(2229), i.e(6088), i.e(2169), i.e(2217)]).then(() => () => i(42217))), n("@rsgweb/utils", "1.0.0", () => Promise.all([i.e(9060), i.e(4907), i.e(8299), i.e(2229), i.e(6088), i.e(1788), i.e(426)]).then(() => () => i(48045))), n("clsx", "2.1.1", () => i.e(439).then(() => () => i(10439))), n("lodash", "4.17.21", () => i.e(5076).then(() => () => i(15076))), n("react-dom", "18.3.1", () => Promise.all([i.e(1098), i.e(2229)]).then(() => () => i(71098))), n("react-router-dom", "6.30.1", () => Promise.all([i.e(5389), i.e(2229), i.e(4853)]).then(() => () => i(15389))), n("react", "18.3.1", () => i.e(8431).then(() => () => i(48431))), (() => {
                var e = e => {
                  return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                  var a
                };
                try {
                  var a = i(25136);
                  if (!a) return;
                  var d = e => e && e.init && e.init(i.S[r], t);
                  if (a.then) return o.push(a.then(d, e));
                  var c = d(a);
                  if (c && c.then) return o.push(c.catch(e))
                } catch (a) {
                  e(a)
                }
              })()), o.length ? e[r] = Promise.all(o).then(() => e[r] = 1) : e[r] = 1
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
              var a = e => e.split(".").map(e => +e == e ? +e : e),
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
                for (var d = 1, c = 1; c < e.length; c++) d--, t += "u" == (typeof(n = e[c]))[0] ? "-" : (d > 0 ? "." : "") + (d = 2, n);
                return t
              }
              var f = [];
              for (c = 1; c < e.length; c++) {
                var n = e[c];
                f.push(0 === n ? "not(" + o() + ")" : 1 === n ? "(" + o() + " || " + o() + ")" : 2 === n ? f.pop() + " " + f.pop() : a(n))
              }
              return o();

              function o() {
                return f.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            r = (a, t) => {
              if (0 in a) {
                t = e(t);
                var d = a[0],
                  c = d < 0;
                c && (d = -d - 1);
                for (var f = 0, n = 1, o = !0;; n++, f++) {
                  var b, i, s = n < a.length ? (typeof a[n])[0] : "";
                  if (f >= t.length || "o" == (i = (typeof(b = t[f]))[0])) return !o || ("u" == s ? n > d && !c : "" == s != c);
                  if ("u" == i) {
                    if (!o || "u" != s) return !1
                  } else if (o)
                    if (s == i)
                      if (n <= d) {
                        if (b != a[n]) return !1
                      } else {
                        if (c ? b > a[n] : b < a[n]) return !1;
                        b != a[n] && (o = !1)
                      }
                  else if ("s" != s && "n" != s) {
                    if (c || n <= d) return !1;
                    o = !1, n--
                  } else {
                    if (n <= d || i < s != c) return !1;
                    o = !1
                  } else "s" != s && "n" != s && (o = !1, n--)
                }
              }
              var l = [],
                u = l.pop.bind(l);
              for (f = 1; f < a.length; f++) {
                var p = a[f];
                l.push(1 == p ? u() | u() : 2 == p ? u() & u() : p ? r(p, t) : !u())
              }
              return !!u()
            },
            t = (a, t, d, c) => {
              var f = c ? (e => Object.keys(e).reduce((a, r) => (e[r].eager && (a[r] = e[r]), a), {}))(a[t]) : a[t];
              return (t = Object.keys(f).reduce((a, t) => !r(d, t) || a && !((a, r) => {
                a = e(a), r = e(r);
                for (var t = 0;;) {
                  if (t >= a.length) return t < r.length && "u" != (typeof r[t])[0];
                  var d = a[t],
                    c = (typeof d)[0];
                  if (t >= r.length) return "u" == c;
                  var f = r[t],
                    n = (typeof f)[0];
                  if (c != n) return "o" == c && "n" == n || "s" == n || "u" == c;
                  if ("o" != c && "u" != c && d != f) return d < f;
                  t++
                }
              })(a, t) ? a : t, 0)) && f[t]
            },
            d = e => {
              throw new Error(e)
            },
            c = (e => function(a, r, t, d, c) {
              var f = i.I(a);
              return f && f.then && !t ? f.then(e.bind(e, a, i.S[a], r, !1, d, c)) : e(a, i.S[a], r, t, d, c)
            })((e, r, c, f, n, o) => {
              if (!((e, a) => e && i.o(e, a))(r, c)) return ((e, a, r) => r ? r() : ((e, a) => d("Shared module " + a + " doesn't exist in shared scope " + e))(e, a))(e, c, o);
              var b, s = t(r, c, n, f);
              return s ? ((b = s).loaded = 1, b.get()) : o ? o() : void d(((e, r, t, d, c) => {
                var f = e[t];
                return "No satisfying version (" + a(d) + ")" + (c ? " for eager consumption" : "") + " of shared module " + t + " found in shared scope " + r + ".\nAvailable versions: " + Object.keys(f).map(e => e + " from " + f[e].from).join(", ")
              })(r, e, c, n, f))
            }),
            f = {},
            n = {
              62229: () => c("default", "react", !1, [1, 18, 2, 0], () => i.e(8431).then(() => () => i(48431))),
              9623: () => c("default", "react-router-dom", !1, [1, 6, 11, 2], () => Promise.all([i.e(5389), i.e(4853)]).then(() => () => i(15389))),
              16188: () => c("default", "lodash", !1, [1, 4, 17, 21], () => i.e(5076).then(() => () => i(15076))),
              81788: () => c("default", "@rsgweb/locale-tools", !1, [1, "workspace:^"], () => Promise.all([i.e(9587), i.e(8240)]).then(() => () => i(12841))),
              95966: () => c("default", "@rsgweb/utils", !1, [1, "workspace:^"], () => Promise.all([i.e(9060), i.e(8299), i.e(1788), i.e(426)]).then(() => () => i(48045))),
              4572: () => c("default", "clsx", !1, [1, 2, 1, 1], () => i.e(439).then(() => () => i(10439))),
              47224: () => c("default", "@rsgweb/modules-core-agegate", !1, [1, "workspace:^"], () => Promise.all([i.e(2508), i.e(4598)]).then(() => () => i(42217))),
              44853: () => c("default", "react-dom", !1, [1, 18, 2, 0], () => i.e(1098).then(() => () => i(71098)))
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
            i.o(o, e) && o[e].forEach(e => {
              if (i.o(f, e)) return a.push(f[e]);
              if (!b[e]) {
                var r = a => {
                  f[e] = 0, i.m[e] = r => {
                    delete i.c[e], r.exports = a()
                  }
                };
                b[e] = !0;
                var t = a => {
                  delete f[e], i.m[e] = r => {
                    throw delete i.c[e], a
                  }
                };
                try {
                  var d = n[e]();
                  d.then ? a.push(f[e] = d.then(r).catch(t)) : r(d)
                } catch (e) {
                  t(e)
                }
              }
            })
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
              } [a] && r.push(e[a] = (e => new Promise((a, r) => {
                var t = i.miniCssF(e),
                  d = i.p + t;
                if (((e, a) => {
                    for (var r = document.getElementsByTagName("link"), t = 0; t < r.length; t++) {
                      var d = (f = r[t]).getAttribute("data-href") || f.getAttribute("href");
                      if ("stylesheet" === f.rel && (d === e || d === a)) return f
                    }
                    var c = document.getElementsByTagName("style");
                    for (t = 0; t < c.length; t++) {
                      var f;
                      if ((d = (f = c[t]).getAttribute("data-href")) === e || d === a) return f
                    }
                  })(t, d)) return a();
                ((e, a, r, t, d) => {
                  var c = document.createElement("link");
                  c.rel = "stylesheet", c.type = "text/css", i.nc && (c.nonce = i.nc), c.onerror = c.onload = r => {
                    if (c.onerror = c.onload = null, "load" === r.type) t();
                    else {
                      var f = r && r.type,
                        n = r && r.target && r.target.href || a,
                        o = new Error("Loading CSS chunk " + e + " failed.\n(" + f + ": " + n + ")");
                      o.name = "ChunkLoadError", o.code = "CSS_CHUNK_LOAD_FAILED", o.type = f, o.request = n, c.parentNode && c.parentNode.removeChild(c), d(o)
                    }
                  }, c.href = a, document.head.appendChild(c)
                })(e, d, 0, a, r)
              }))(a).then(() => {
                e[a] = 0
              }, r => {
                throw delete e[a], r
              }))
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
              var d = new Promise((r, d) => t = e[a] = [r, d]);
              r.push(t[2] = d);
              var c = i.p + i.u(a),
                f = new Error;
              i.l(c, r => {
                if (i.o(e, a) && (0 !== (t = e[a]) && (e[a] = void 0), t)) {
                  var d = r && ("load" === r.type ? "missing" : r.type),
                    c = r && r.target && r.target.src;
                  f.message = "Loading chunk " + a + " failed.\n(" + d + ": " + c + ")", f.name = "ChunkLoadError", f.type = d, f.request = c, t[1](f)
                }
              }, "chunk-" + a, a)
            }
          };
          var a = (a, r) => {
              var t, d, [c, f, n] = r,
                o = 0;
              if (c.some(a => 0 !== e[a])) {
                for (t in f) i.o(f, t) && (i.m[t] = f[t]);
                n && n(i)
              }
              for (a && a(r); o < c.length; o++) d = c[o], i.o(e, d) && e[d] && e[d][0](), e[d] = 0
            },
            r = self.webpackChunk_rockstargames_sites_red_dead_redemption_2 = self.webpackChunk_rockstargames_sites_red_dead_redemption_2 || [];
          r.forEach(a.bind(null, 0)), r.push = a.bind(null, r.push.bind(r))
        })(), i(93032), i(85819)
      })())
    }
  }
});