! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      a = (new e.Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "9b2c99da-3b8a-4b4f-b963-3f1ad1346fdd", e._sentryDebugIdIdentifier = "sentry-dbid-9b2c99da-3b8a-4b4f-b963-3f1ad1346fdd")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta-trilogy",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
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
        var e, r, d, f, c, n, o = {
            3218: (e, a, t) => {
              (0, t(7600).w)(1)
            },
            4857: (e, a, t) => {
              t(3218)
            },
            5136: e => {
              "use strict";
              e.exports = t
            },
            5819: (e, a, t) => {
              "use strict";
              var r = {
                  "./index": () => Promise.all([t.e(5156), t.e(6699), t.e(2229), t.e(6497), t.e(1124)]).then((() => () => t(862)))
                },
                d = (e, a) => (t.R = a, a = t.o(r, e) ? r[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), t.R = void 0, a),
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
            7600: (e, a, t) => {
              const r = t(7884).y;
              a.w = function(e) {
                if (e || (e = 1), !t.y.meta || !t.y.meta.url) throw console.error("__system_context__", t.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                t.p = r(t.y.meta.url, e)
              }
            },
            7884: (e, a, t) => {
              a.y = function(e, a) {
                var t = document.createElement("a");
                t.href = e;
                for (var r = "/" === t.pathname[0] ? t.pathname : "/" + t.pathname, d = 0, f = r.length; d !== a && f >= 0;) "/" === r[--f] && d++;
                if (d !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + d + ") in the URL path " + e);
                var c = r.slice(0, f + 1);
                return t.protocol + "//" + t.host + c
              };
              Number.isInteger
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
          return o[e].call(t.exports, t, t.exports, i), t.loaded = !0, t.exports
        }
        return i.m = o, i.c = b, i.y = a, i.amdO = {}, i.n = e => {
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
          var d = Object.create(null);
          i.r(d);
          var f = {};
          e = e || [null, r({}), r([]), r(r)];
          for (var c = 2 & t && a;
            "object" == typeof c && !~e.indexOf(c); c = r(c)) Object.getOwnPropertyNames(c).forEach((e => f[e] = () => a[e]));
          return f.default = () => a, i.d(d, f), d
        }, i.d = (e, a) => {
          for (var t in a) i.o(a, t) && !i.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: a[t]
          })
        }, i.f = {}, i.e = e => Promise.all(Object.keys(i.f).reduce(((a, t) => (i.f[t](e, a), a)), [])), i.u = e => "js/" + {
          5: "0e7a865aeca2a0ea58f2e2db878e606d",
          131: "76973bc225e96e873b45437a19e3d026",
          278: "73c52acf1ce85f7273510f269ae19ae6",
          299: "c5c7c1b53b88fb3cfc972a92a76470b8",
          314: "2f3a166ee58d50890efdb496f0c13124",
          662: "1bd56a91eea64142fc2d4d1ca1118345",
          824: "8e73dea933bb3d3a73f370031a4cf3ed",
          838: "ff1b119adcfdcfb65262981e7040d038",
          907: "f9a6326e851808c796886fe15f055031",
          1054: "c802f04450e7886f3ffb08176d02b166",
          1124: "c87575208debc1c00b8207616398f51c",
          1242: "3530b2d1705ca5a6ba5bffa729048f8b",
          1822: "9b3fac9780b5cd8b2637b1f23461a0ff",
          1868: "a29c0822a841a69251b02c787b861bfe",
          2156: "8d5dfb024eb38f739529cc8e487bda97",
          2171: "2e318113bbf9b5cdc51aef5bbaa2a52a",
          2221: "5cca46155f150a733d598aa20b586843",
          2243: "f3654304c83b66d9d764e77fdcfecb91",
          2347: "1ee671662c855b8c864a71fc9d7ae94d",
          2365: "1c9aebcc8e832bb7b904ebd0e39126db",
          2398: "02cff0bf4694e3f4c9896d74cc57068f",
          2466: "c7653297339c6712f47461c934d33639",
          2522: "8081d85bb758050f362145d4d9104544",
          2642: "6ed23f90ee033480f7a1f8cd59ca3a56",
          2678: "e1af3b681eb73d107401594aaa521743",
          2810: "3c743645d46058f4b4fc5a29e58326b4",
          2864: "509927a2512d403d58a0be04945c40a3",
          3034: "7658ab9f6634d1cb4602f39af61be04a",
          3197: "5f4826b05509329ff55aecee1dfa68ac",
          3218: "cfd6e0d9d1c3a6bbe3a0a436863e24b0",
          3343: "3b20a28f858726e733f2bcb2a028b554",
          3370: "8fe9f54613a2c8a6d8cafe58e0cd2565",
          3475: "6129a12fd71f244c20f8ab8f55d9d907",
          3486: "902ac72de99208e61a660cb80ba10479",
          3514: "1b0c3e529b53eb870800efc1a214eeca",
          3697: "df098ffb7f1e1fa5cc94c181e9689c48",
          3885: "71f31d386ac56e47f1f4a88facb157e2",
          3941: "6384a716499b11c1a68602b55766aee9",
          4011: "e4627c691ff3b848478e566c4bb4ca28",
          4105: "2b5ea4eba6e87fdca132b55c60c7d7b1",
          4480: "4b1fd35f25d7edaf0f61db5290e62535",
          4528: "5e4319cbaca31a0aedc75f17bb22fb08",
          4621: "4ad3b21352121c7eafc09194af85b245",
          4700: "497602a410fd4ba7971360b083ff5f65",
          4710: "48104e624b6ad3f2779ea6782a51ba74",
          4731: "8eaf524be714093bf79e2259a63c7e07",
          4799: "59cafc58470d14eb5f1c3718f99bc387",
          4851: "52b9c19bd5dd00d4113ff4ffc66d6b16",
          4861: "e5b4f1a54ba645f61164b009f0d2dc24",
          4913: "5f518bd1dc098b2c20a2dc2eb698e1e6",
          5018: "0f0993234d7514136513333ad3eeef52",
          5156: "4753f87abfc31e3d6c6874be421b6812",
          5233: "693a62eb700af70fdc0fd17288df8823",
          5259: "cb2be38be666b07bd1bf2db3eb5f01f8",
          5530: "0e6816e2fe0f4624dee2a0f248d7b9ea",
          5639: "4d246517c991ea119105d43b770b6e35",
          5663: "ef89953c140db78d97d79d8aed52c134",
          5742: "169279b22ccc403c551f8cb99a7c7d02",
          5830: "4ca771589bf45d3b23430caa01815655",
          5832: "604c560970b6d1afb4a1a419a0765259",
          6267: "72ae5c7e9ac26405e241675bd545ac4d",
          6280: "38d6f9d3b12c430ffad06c1536e02fd2",
          6285: "acdfeb712ea16c72b11499b42edc486d",
          6361: "2abcc1e1fb581bee42c3fa427b0e1b9b",
          6497: "f061ada12ca14a3cc623081534aa49c8",
          6664: "620cfabb3467b2f33e834820f287b398",
          6699: "4cdacd926b615b7947d7c206bceca50b",
          6879: "2088373ea732ed075de487cedce99eed",
          6891: "eece40a3792bb3b03e5cc4aac09730ae",
          6997: "5729232560ffa8ce25b1488405d8dabd",
          7010: "f4de55131b1fb557c4979b3c94ae292f",
          7073: "aafda5da8d47f3b0168ba3d0ceb10217",
          7353: "f764e35da87d4653103a5af5389813f7",
          7436: "a3ea4aff5df6478067f43dd4044e2306",
          7452: "83c119a5405264ad57ebfb1409ec3312",
          7453: "8d2976df6d075e9989d6c3df7902d892",
          7485: "5260941e1d0a055bbbf0eeefbbb68756",
          7970: "78e1074de4b89aa167ca5b23e23ad2e8",
          8272: "7e9ecc6f4b5d56b201419535098a0fb6",
          8391: "65a8fd2f412a6fdd7a2476fb3b54e5c8",
          8654: "37f35193aaa1313e7b04b09153746de1",
          8755: "4127d284239ca6bf337a463e8f9c4642",
          8880: "9993e169359a3d705fb545541cdd5947",
          8970: "570cf6afbba65a614797df013a62fa44",
          9022: "71f006bc5673f4e8423158f63b6bdff9",
          9028: "c312783f4faf5cfc72207446035f909d",
          9126: "9414e2941b4cc7e7471be343ecb87985",
          9377: "1dde1c7b8b8ca118a7a6276b9e9b6897",
          9615: "d865e32bbb033a362c274b8984aa4c8b",
          9936: "5ea8b7356de8022ebbb7f80802b77e80",
          9990: "2f4c2bde38d2421acde2cf1b4c01cae8"
        } [e] + ".js", i.miniCssF = e => "css/6a5fe84429bbdc6b0429287f94356eea.css", i.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), i.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), d = {}, f = "@rockstargames/sites-gta-trilogy:", i.l = (e, a, t, r) => {
          if (d[e]) d[e].push(a);
          else {
            var c, n;
            if (void 0 !== t)
              for (var o = document.getElementsByTagName("script"), b = 0; b < o.length; b++) {
                var s = o[b];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == f + t) {
                  c = s;
                  break
                }
              }
            c || (n = !0, (c = document.createElement("script")).charset = "utf-8", c.timeout = 120, i.nc && c.setAttribute("nonce", i.nc), c.setAttribute("data-webpack", f + t), c.src = e), d[e] = [a];
            var l = (a, t) => {
                c.onerror = c.onload = null, clearTimeout(u);
                var r = d[e];
                if (delete d[e], c.parentNode && c.parentNode.removeChild(c), r && r.forEach((e => e(t))), a) return a(t)
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
          1124: [1879]
        }, n = {
          1879: ["default", "./index", 5136]
        }, i.f.remotes = (e, a) => {
          i.o(c, e) && c[e].forEach((e => {
            var t = i.R;
            t || (t = []);
            var r = n[e];
            if (!(t.indexOf(r) >= 0)) {
              if (t.push(r), r.p) return a.push(r.p);
              var d = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + r[1] + '" from ' + r[2]), i.m[e] = () => {
                    throw a
                  }, r.p = 0
                },
                f = (e, t, f, c, n, o) => {
                  try {
                    var b = e(t, f);
                    if (!b || !b.then) return n(b, c, o);
                    var i = b.then((e => n(e, c)), d);
                    if (!o) return i;
                    a.push(r.p = i)
                  } catch (e) {
                    d(e)
                  }
                },
                c = (e, a, d) => f(a.get, r[1], t, 0, o, d),
                o = a => {
                  r.p = 1, i.m[e] = e => {
                    e.exports = a()
                  }
                };
              f(i, r[2], 0, 0, ((e, a, t) => e ? f(i.I, r[0], 0, e, c, t) : d()), 1)
            }
          }))
        }, (() => {
          i.S = {};
          var e = {},
            a = {};
          i.I = (t, r) => {
            r || (r = []);
            var d = a[t];
            if (d || (d = a[t] = {}), !(r.indexOf(d) >= 0)) {
              if (r.push(d), e[t]) return e[t];
              i.o(i.S, t) || (i.S[t] = {});
              var f = i.S[t],
                c = "@rockstargames/sites-gta-trilogy",
                n = (e, a, t, r) => {
                  var d = f[e] = f[e] || {},
                    n = d[a];
                  (!n || !n.loaded && (!r != !n.eager ? r : c > n.from)) && (d[a] = {
                    get: t,
                    from: c,
                    eager: !!r
                  })
                },
                o = [];
              return "default" === t && (n("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([i.e(3218), i.e(2229), i.e(5)]).then((() => () => i(5671))))), n("@rsgweb/utils", "1.0.0", (() => Promise.all([i.e(5156), i.e(2229), i.e(6497)]).then((() => () => i(9819))))), n("framer-motion", "7.10.3", (() => Promise.all([i.e(7485), i.e(2229), i.e(3514)]).then((() => () => i(7485))))), n("react-router-dom", "6.30.0", (() => Promise.all([i.e(4105), i.e(2229)]).then((() => () => i(4105))))), n("react", "18.2.0", (() => i.e(2522).then((() => () => i(141))))), n("react", "18.3.1", (() => i.e(8654).then((() => () => i(8654))))), n("usehooks-ts", "2.16.0", (() => Promise.all([i.e(2810), i.e(2229)]).then((() => () => i(429))))), (() => {
                var e = e => {
                  return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                  var a
                };
                try {
                  var a = i(5136);
                  if (!a) return;
                  var d = e => e && e.init && e.init(i.S[t], r);
                  if (a.then) return o.push(a.then(d, e));
                  var f = d(a);
                  if (f && f.then) return o.push(f.catch(e))
                } catch (a) {
                  e(a)
                }
              })()), o.length ? e[t] = Promise.all(o).then((() => e[t] = 1)) : e[t] = 1
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
                for (var d = 1, f = 1; f < e.length; f++) d--, r += "u" == (typeof(n = e[f]))[0] ? "-" : (d > 0 ? "." : "") + (d = 2, n);
                return r
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
            t = (a, r) => {
              if (0 in a) {
                r = e(r);
                var d = a[0],
                  f = d < 0;
                f && (d = -d - 1);
                for (var c = 0, n = 1, o = !0;; n++, c++) {
                  var b, i, s = n < a.length ? (typeof a[n])[0] : "";
                  if (c >= r.length || "o" == (i = (typeof(b = r[c]))[0])) return !o || ("u" == s ? n > d && !f : "" == s != f);
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
                l.push(1 == p ? u() | u() : 2 == p ? u() & u() : p ? t(p, r) : !u())
              }
              return !!u()
            },
            r = (a, r, d, f) => {
              var c = f ? (e => Object.keys(e).reduce(((a, t) => (e[t].eager && (a[t] = e[t]), a)), {}))(a[r]) : a[r];
              return (r = Object.keys(c).reduce(((a, r) => !t(d, r) || a && !((a, t) => {
                a = e(a), t = e(t);
                for (var r = 0;;) {
                  if (r >= a.length) return r < t.length && "u" != (typeof t[r])[0];
                  var d = a[r],
                    f = (typeof d)[0];
                  if (r >= t.length) return "u" == f;
                  var c = t[r],
                    n = (typeof c)[0];
                  if (f != n) return "o" == f && "n" == n || "s" == n || "u" == f;
                  if ("o" != f && "u" != f && d != c) return d < c;
                  r++
                }
              })(a, r) ? a : r), 0)) && c[r]
            },
            d = e => {
              throw new Error(e)
            },
            f = (e => function(a, t, r, d, f) {
              var c = i.I(a);
              return c && c.then && !r ? c.then(e.bind(e, a, i.S[a], t, !1, d, f)) : e(a, i.S[a], t, r, d, f)
            })(((e, t, f, c, n, o) => {
              if (!((e, a) => e && i.o(e, a))(t, f)) return ((e, a, t) => t ? t() : ((e, a) => d("Shared module " + a + " doesn't exist in shared scope " + e))(e, a))(e, f, o);
              var b, s = r(t, f, n, c);
              return s ? ((b = s).loaded = 1, b.get()) : o ? o() : void d(((e, t, r, d, f) => {
                var c = e[r];
                return "No satisfying version (" + a(d) + ")" + (f ? " for eager consumption" : "") + " of shared module " + r + " found in shared scope " + t + ".\nAvailable versions: " + Object.keys(c).map((e => e + " from " + c[e].from)).join(", ")
              })(t, e, f, n, c))
            })),
            c = {},
            n = {
              2229: () => f("default", "react", !1, [1, 18, 2, 0], (() => i.e(8654).then((() => () => i(8654))))),
              9623: () => f("default", "react-router-dom", !1, [1, 6, 11, 2], (() => i.e(4105).then((() => () => i(4105))))),
              1788: () => f("default", "@rsgweb/locale-tools", !1, [1, "workspace:^"], (() => Promise.all([i.e(3218), i.e(838)]).then((() => () => i(5671))))),
              1913: () => f("default", "react", !1, [1, 18, 2, 0], (() => i.e(2522).then((() => () => i(141))))),
              3582: () => f("default", "framer-motion", !1, [1, 7, 5, 1], (() => i.e(7485).then((() => () => i(7485))))),
              5587: () => f("default", "usehooks-ts", !1, [1, 2, 7, 2], (() => i.e(2810).then((() => () => i(429))))),
              5966: () => f("default", "@rsgweb/utils", !1, [1, "workspace:^"], (() => () => i(9819)))
            },
            o = {
              1124: [1788, 1913, 3582, 5587, 5966],
              2229: [2229],
              6497: [9623]
            },
            b = {};
          i.f.consumes = (e, a) => {
            i.o(o, e) && o[e].forEach((e => {
              if (i.o(c, e)) return a.push(c[e]);
              if (!b[e]) {
                var t = a => {
                  c[e] = 0, i.m[e] = t => {
                    delete i.c[e], t.exports = a()
                  }
                };
                b[e] = !0;
                var r = a => {
                  delete c[e], i.m[e] = t => {
                    throw delete i.c[e], a
                  }
                };
                try {
                  var d = n[e]();
                  d.then ? a.push(c[e] = d.then(t).catch(r)) : t(d)
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
            i.f.miniCss = (a, t) => {
              e[a] ? t.push(e[a]) : 0 !== e[a] && {
                1124: 1
              } [a] && t.push(e[a] = (e => new Promise(((a, t) => {
                var r = i.miniCssF(e),
                  d = i.p + r;
                if (((e, a) => {
                    for (var t = document.getElementsByTagName("link"), r = 0; r < t.length; r++) {
                      var d = (c = t[r]).getAttribute("data-href") || c.getAttribute("href");
                      if ("stylesheet" === c.rel && (d === e || d === a)) return c
                    }
                    var f = document.getElementsByTagName("style");
                    for (r = 0; r < f.length; r++) {
                      var c;
                      if ((d = (c = f[r]).getAttribute("data-href")) === e || d === a) return c
                    }
                  })(r, d)) return a();
                ((e, a, t, r, d) => {
                  var f = document.createElement("link");
                  f.rel = "stylesheet", f.type = "text/css", i.nc && (f.nonce = i.nc), f.onerror = f.onload = t => {
                    if (f.onerror = f.onload = null, "load" === t.type) r();
                    else {
                      var c = t && t.type,
                        n = t && t.target && t.target.href || a,
                        o = new Error("Loading CSS chunk " + e + " failed.\n(" + c + ": " + n + ")");
                      o.name = "ChunkLoadError", o.code = "CSS_CHUNK_LOAD_FAILED", o.type = c, o.request = n, f.parentNode && f.parentNode.removeChild(f), d(o)
                    }
                  }, f.href = a, document.head.appendChild(f)
                })(e, d, 0, a, t)
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
          i.f.j = (a, t) => {
            var r = i.o(e, a) ? e[a] : void 0;
            if (0 !== r)
              if (r) t.push(r[2]);
              else if (2229 != a) {
              var d = new Promise(((t, d) => r = e[a] = [t, d]));
              t.push(r[2] = d);
              var f = i.p + i.u(a),
                c = new Error;
              i.l(f, (t => {
                if (i.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
                  var d = t && ("load" === t.type ? "missing" : t.type),
                    f = t && t.target && t.target.src;
                  c.message = "Loading chunk " + a + " failed.\n(" + d + ": " + f + ")", c.name = "ChunkLoadError", c.type = d, c.request = f, r[1](c)
                }
              }), "chunk-" + a, a)
            } else e[a] = 0
          };
          var a = (a, t) => {
              var r, d, f = t[0],
                c = t[1],
                n = t[2],
                o = 0;
              if (f.some((a => 0 !== e[a]))) {
                for (r in c) i.o(c, r) && (i.m[r] = c[r]);
                n && n(i)
              }
              for (a && a(t); o < f.length; o++) d = f[o], i.o(e, d) && e[d] && e[d][0](), e[d] = 0
            },
            t = self.webpackChunk_rockstargames_sites_gta_trilogy = self.webpackChunk_rockstargames_sites_gta_trilogy || [];
          t.forEach(a.bind(null, 0)), t.push = a.bind(null, t.push.bind(t))
        })(), i(4857), i(5819)
      })())
    }
  }
}));