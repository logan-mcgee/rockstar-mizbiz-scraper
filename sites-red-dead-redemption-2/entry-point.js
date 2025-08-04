try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "f815f435-82a3-4db6-a2c6-35c33f515f18", e._sentryDebugIdIdentifier = "sentry-dbid-f815f435-82a3-4db6-a2c6-35c33f515f18")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "dde524f11ca2e811c948d868f62c7d544de61cc3",
    packageName: "@rockstargames/sites-red-dead-redemption-2",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "dde524f11ca2e811c948d868f62c7d544de61cc3"
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
            9944: (e, a, r) => {
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
            21998: (e, a, r) => {
              (0, r(82788).w)(1)
            },
            25136: e => {
              "use strict";
              e.exports = r
            },
            37389: (e, a, r) => {
              r(21998)
            },
            82788: (e, a, r) => {
              const t = r(9944).y;
              a.w = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = t(r.y.meta.url, e)
              }
            },
            85819: (e, a, r) => {
              "use strict";
              var t = {
                  "./index": () => Promise.all([r.e(1537), r.e(7330), r.e(5399), r.e(2229), r.e(8161), r.e(5966), r.e(5524)]).then((() => () => r(75524)))
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
            }
          },
          i = {};

        function b(e) {
          var a = i[e];
          if (void 0 !== a) return a.exports;
          var r = i[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return o[e].call(r.exports, r, r.exports, b), r.loaded = !0, r.exports
        }
        return b.m = o, b.c = i, b.y = a, b.amdO = {}, b.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return b.d(a, {
            a
          }), a
        }, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, b.t = function(a, r) {
          if (1 & r && (a = this(a)), 8 & r) return a;
          if ("object" == typeof a && a) {
            if (4 & r && a.__esModule) return a;
            if (16 & r && "function" == typeof a.then) return a
          }
          var d = Object.create(null);
          b.r(d);
          var f = {};
          e = e || [null, t({}), t([]), t(t)];
          for (var c = 2 & r && a;
            "object" == typeof c && !~e.indexOf(c); c = t(c)) Object.getOwnPropertyNames(c).forEach((e => f[e] = () => a[e]));
          return f.default = () => a, b.d(d, f), d
        }, b.d = (e, a) => {
          for (var r in a) b.o(a, r) && !b.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: a[r]
          })
        }, b.f = {}, b.e = e => Promise.all(Object.keys(b.f).reduce(((a, r) => (b.f[r](e, a), a)), [])), b.u = e => "js/" + {
          114: "b7e42ceffe6cc994114806f7dac01238",
          131: "1c5b9ee3f86295101445c3142e4d22c7",
          278: "97ed1a5f98a07adf16f74fc36745a65e",
          280: "382a7ef577787dca7565b3e922c97665",
          299: "bd5d7a7779829a0a0584c31a03f437ed",
          314: "b8397279e4d5f20fc16b664a4e8b2de3",
          662: "00529a7454f478971e0af5430a6cf78d",
          824: "d517ba4968f134edbf553f2acedd6c60",
          907: "60123953d3a1f981339689f8232270b0",
          1054: "47972f895c76940cb1380be36a3b6723",
          1138: "cbe17ce464619005a556d16482116e0e",
          1154: "0e1d65c13064699f835ce3fdeeba2822",
          1242: "ce726ec0497ae0b4b34f26ca7fc25d6e",
          1325: "79446c497e16344d4db1b7c9863d182f",
          1537: "5b6aaca6139e13f1db8705d55a4f0ff2",
          1822: "7896b9cbddd52c63066649b2eb848584",
          1868: "19f952c8834b32841e89700b58896c80",
          2156: "66b561190f4450dc83ebde1d30482174",
          2171: "1e68050ac750356935733b29642c84ac",
          2221: "e3a0159d358430db23de2e1335282e17",
          2243: "7d390cb1adeb15b3456c706779be839d",
          2315: "32a93c7cfe39a0501a4e57016fe89984",
          2347: "32441541754456830dd274b2e93a3cfe",
          2365: "c8954279cc38eb3f49608b5d779d6f64",
          2398: "69c95639ac3a3cd68dadbfc936f5f609",
          2466: "7f44f0a3ba38f9f51a8f772f8b625ef4",
          2642: "80f2e68b5a24c0e62697b6607b8280db",
          2678: "aade86515279e0ec7de9f55f27e78d06",
          2864: "3f792dc1cce7c864a0817c5150328a2c",
          3034: "4ebc65a55ba824a3e2777cef7adc277c",
          3108: "ea7d69face8c4b716df6e0ca392d5bf7",
          3197: "e79fde4ecf2ac384a03a6b270f66690a",
          3343: "037c929cdac1dd7f2d89566203db5623",
          3370: "9036ecfda6857277ddbaf122de2c18b6",
          3475: "92371e912e81f710b577c3c893b74e0e",
          3486: "f05e9b38bac415759d3d689aef306a1a",
          3697: "3bdbc42eb65ec83edec5c4790aefdfef",
          3885: "33fbc6160d8d92b88038430c835e2d10",
          3941: "36bcc40669c63d88e0b598c8b9d29fb3",
          4011: "d250436b192ca11946f41895c3d71346",
          4528: "dd211fcee934583e797950f4ed6822f8",
          4621: "9d0d052b24200d7463d3c5284452389d",
          4700: "896fc741395855d8bf41e1a77720f966",
          4710: "e8d10cad8f90154e8c2b426db1ed3bed",
          4731: "a84382ddd35379ea8acdaf10f500ace7",
          4799: "3ec2a64efce06466339d992080863529",
          4851: "6df58a97f6a98de30bd7e596750d52f5",
          4861: "7976b9fc6c20a3265be700d87c0a0105",
          4913: "50790c43c2f82b580d952b8870efc796",
          5018: "ef83ff0ca4038b4b563597a87122da62",
          5233: "7fdd7aafb687d52b236185cd8fd07e27",
          5259: "43a924681fef8758301696ce75de7e4e",
          5399: "13369efc20b2afaba9875fd34c1e75a5",
          5524: "69ba21eb6fcccbe32e6298b6512a6b9f",
          5530: "344f4a36b0b663e2c07c37c330f4018f",
          5639: "8cda59faf7f43b5211767ceb08dd9a38",
          5663: "3b6357301564acae3c2044a7cc7ab50c",
          5742: "d0e6564abc2601778639d7a7822f11af",
          5830: "d07cd1cccaf178920ef63d3462901ac3",
          5832: "659dc7be317f55c55b35b094cae6faae",
          6019: "d0665941aa98262f3718ea955b4ef609",
          6267: "ca5c6c0dce4ee436030e2a3279cd989d",
          6280: "7cd436158919d1f92760f905ab053c20",
          6285: "79eed5face80184059295cf52c9f9b77",
          6361: "fcd57e3e5b2c8a74a3ce72f2db334783",
          6664: "99b1c8983dc85849c73d94accf48f1bd",
          6879: "c127a12b2eb2e5db938ca339a34b3451",
          6891: "606622717e978c2ad209c160c43dd8ad",
          6997: "cbd9a881063449d4c43da1ca456a79db",
          7010: "892c221081bdaa28f8efd20bed8a8276",
          7073: "61b3aa37dce49758cf3422e0a872727d",
          7330: "1a5b946e1c97722fb25890d6c6504409",
          7354: "57ebb721c57d5791c74c22a075552bf8",
          7436: "df6cf22c097c550cd96b1be461ca8d88",
          7452: "f1ee049983d2718c9a2b382b25eb8255",
          7453: "e2abf033588a032c93977286a353c045",
          7970: "587cf09372f6a85ab9c275563eb110b8",
          8161: "1364c9c1356bd8e0076d7312dd396cfa",
          8272: "aac1da5407ecfffd17b367b1d2234c38",
          8391: "2ae6a3e12f80dd3dfe1d4deb730f4c17",
          8755: "ca9e55166966517bf5f7a058ea67a8c8",
          8880: "547e8e7b88f2b694d0a9d516a64de002",
          8970: "47e7329a2b4a2dc9d9c9fc590c0fe71d",
          9022: "33434ff2c3226d11e2e2ea8811783c1d",
          9028: "7ce259d24eedcccb7722f8262ad5f597",
          9126: "d47097bf2888f9b69d65c9807fe4eccb",
          9368: "c9702888a8a69911605a7aacb213b47d",
          9377: "beedc16c6491d900c7925cb207eeffab",
          9489: "6dd4adf20639f221d10d0065b5b10480",
          9615: "30c597c43fc80ca7a394fb8c2bc024e9",
          9728: "59d4590fb9649a11ae76051e82c8e872",
          9936: "0aac5e2fef25d1e902edd0a0bd45a5b3",
          9990: "882f63d5ca05acb619fdbb1599fce970"
        } [e] + ".js", b.miniCssF = e => "css/" + {
          1325: "862399b32420b2fbc03810a979eab2e5",
          5524: "5b398003b12b7b4b1d769281f6b4a7ab",
          7354: "862399b32420b2fbc03810a979eab2e5"
        } [e] + ".css", b.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), b.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), d = {}, f = "@rockstargames/sites-red-dead-redemption-2:", b.l = (e, a, r, t) => {
          if (d[e]) d[e].push(a);
          else {
            var c, n;
            if (void 0 !== r)
              for (var o = document.getElementsByTagName("script"), i = 0; i < o.length; i++) {
                var s = o[i];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == f + r) {
                  c = s;
                  break
                }
              }
            c || (n = !0, (c = document.createElement("script")).charset = "utf-8", c.timeout = 120, b.nc && c.setAttribute("nonce", b.nc), c.setAttribute("data-webpack", f + r), c.src = e), d[e] = [a];
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
        }, b.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, b.nmd = e => (e.paths = [], e.children || (e.children = []), e), c = {
          5524: [31879]
        }, n = {
          31879: ["default", "./index", 25136]
        }, b.f.remotes = (e, a) => {
          b.o(c, e) && c[e].forEach((e => {
            var r = b.R;
            r || (r = []);
            var t = n[e];
            if (!(r.indexOf(t) >= 0)) {
              if (r.push(t), t.p) return a.push(t.p);
              var d = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + t[1] + '" from ' + t[2]), b.m[e] = () => {
                    throw a
                  }, t.p = 0
                },
                f = (e, r, f, c, n, o) => {
                  try {
                    var i = e(r, f);
                    if (!i || !i.then) return n(i, c, o);
                    var b = i.then((e => n(e, c)), d);
                    if (!o) return b;
                    a.push(t.p = b)
                  } catch (e) {
                    d(e)
                  }
                },
                c = (e, a, d) => f(a.get, t[1], r, 0, o, d),
                o = a => {
                  t.p = 1, b.m[e] = e => {
                    e.exports = a()
                  }
                };
              f(b, t[2], 0, 0, ((e, a, r) => e ? f(b.I, t[0], 0, e, c, r) : d()), 1)
            }
          }))
        }, (() => {
          b.S = {};
          var e = {},
            a = {};
          b.I = (r, t) => {
            t || (t = []);
            var d = a[r];
            if (d || (d = a[r] = {}), !(t.indexOf(d) >= 0)) {
              if (t.push(d), e[r]) return e[r];
              b.o(b.S, r) || (b.S[r] = {});
              var f = b.S[r],
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
              return "default" === r && (n("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([b.e(2315), b.e(2229), b.e(3108)]).then((() => () => b(67439))))), n("@rsgweb/modules-core-agegate", "0.0.0", (() => Promise.all([b.e(1537), b.e(7330), b.e(280), b.e(2229), b.e(8161), b.e(5966), b.e(7354)]).then((() => () => b(27354))))), n("@rsgweb/utils", "1.0.0", (() => Promise.all([b.e(1537), b.e(2229), b.e(8161)]).then((() => () => b(82261))))), n("lodash", "4.17.21", (() => b.e(9489).then((() => () => b(99489))))), n("react-dom", "18.3.1", (() => Promise.all([b.e(6019), b.e(2229)]).then((() => () => b(66019))))), n("react-router-dom", "6.30.0", (() => Promise.all([b.e(9728), b.e(2229), b.e(4853)]).then((() => () => b(49728))))), n("react", "18.3.1", (() => b.e(1138).then((() => () => b(11138))))), (() => {
                var e = e => {
                  return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                  var a
                };
                try {
                  var a = b(25136);
                  if (!a) return;
                  var d = e => e && e.init && e.init(b.S[r], t);
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
          b.g.importScripts && (e = b.g.location + "");
          var a = b.g.document;
          if (!e && a && (a.currentScript && "SCRIPT" === a.currentScript.tagName.toUpperCase() && (e = a.currentScript.src), !e)) {
            var r = a.getElementsByTagName("script");
            if (r.length)
              for (var t = r.length - 1; t > -1 && (!e || !/^http(s?):/.test(e));) e = r[t--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), b.p = e
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
                  var i, b, s = n < a.length ? (typeof a[n])[0] : "";
                  if (c >= t.length || "o" == (b = (typeof(i = t[c]))[0])) return !o || ("u" == s ? n > d && !f : "" == s != f);
                  if ("u" == b) {
                    if (!o || "u" != s) return !1
                  } else if (o)
                    if (s == b)
                      if (n <= d) {
                        if (i != a[n]) return !1
                      } else {
                        if (f ? i > a[n] : i < a[n]) return !1;
                        i != a[n] && (o = !1)
                      }
                  else if ("s" != s && "n" != s) {
                    if (f || n <= d) return !1;
                    o = !1, n--
                  } else {
                    if (n <= d || b < s != f) return !1;
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
              var c = b.I(a);
              return c && c.then && !t ? c.then(e.bind(e, a, b.S[a], r, !1, d, f)) : e(a, b.S[a], r, t, d, f)
            })(((e, r, f, c, n, o) => {
              if (!((e, a) => e && b.o(e, a))(r, f)) return ((e, a, r) => r ? r() : ((e, a) => d("Shared module " + a + " doesn't exist in shared scope " + e))(e, a))(e, f, o);
              var i, s = t(r, f, n, c);
              return s ? ((i = s).loaded = 1, i.get()) : o ? o() : void d(((e, r, t, d, f) => {
                var c = e[t];
                return "No satisfying version (" + a(d) + ")" + (f ? " for eager consumption" : "") + " of shared module " + t + " found in shared scope " + r + ".\nAvailable versions: " + Object.keys(c).map((e => e + " from " + c[e].from)).join(", ")
              })(r, e, f, n, c))
            })),
            c = {},
            n = {
              62229: () => f("default", "react", !1, [1, 18, 2, 0], (() => b.e(1138).then((() => () => b(11138))))),
              9623: () => f("default", "react-router-dom", !1, [1, 6, 11, 2], (() => Promise.all([b.e(9728), b.e(4853)]).then((() => () => b(49728))))),
              16188: () => f("default", "lodash", !1, [1, 4, 17, 21], (() => b.e(9489).then((() => () => b(99489))))),
              95966: () => f("default", "@rsgweb/utils", !1, [1, "workspace:^"], (() => () => b(82261))),
              47224: () => f("default", "@rsgweb/modules-core-agegate", !1, [1, "workspace:^"], (() => Promise.all([b.e(280), b.e(1325)]).then((() => () => b(27354))))),
              81788: () => f("default", "@rsgweb/locale-tools", !1, [1, "workspace:^"], (() => Promise.all([b.e(2315), b.e(1154)]).then((() => () => b(67439))))),
              44853: () => f("default", "react-dom", !1, [1, 18, 2, 0], (() => b.e(6019).then((() => () => b(66019)))))
            },
            o = {
              2229: [62229],
              4853: [44853],
              5524: [47224, 81788],
              5966: [95966],
              8161: [9623, 16188]
            },
            i = {};
          b.f.consumes = (e, a) => {
            b.o(o, e) && o[e].forEach((e => {
              if (b.o(c, e)) return a.push(c[e]);
              if (!i[e]) {
                var r = a => {
                  c[e] = 0, b.m[e] = r => {
                    delete b.c[e], r.exports = a()
                  }
                };
                i[e] = !0;
                var t = a => {
                  delete c[e], b.m[e] = r => {
                    throw delete b.c[e], a
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
            b.f.miniCss = (a, r) => {
              e[a] ? r.push(e[a]) : 0 !== e[a] && {
                1325: 1,
                5524: 1,
                7354: 1
              } [a] && r.push(e[a] = (e => new Promise(((a, r) => {
                var t = b.miniCssF(e),
                  d = b.p + t;
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
                  f.rel = "stylesheet", f.type = "text/css", b.nc && (f.nonce = b.nc), f.onerror = f.onload = r => {
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
          b.f.j = (a, r) => {
            var t = b.o(e, a) ? e[a] : void 0;
            if (0 !== t)
              if (t) r.push(t[2]);
              else if (/^(2229|4853|5966)$/.test(a)) e[a] = 0;
            else {
              var d = new Promise(((r, d) => t = e[a] = [r, d]));
              r.push(t[2] = d);
              var f = b.p + b.u(a),
                c = new Error;
              b.l(f, (r => {
                if (b.o(e, a) && (0 !== (t = e[a]) && (e[a] = void 0), t)) {
                  var d = r && ("load" === r.type ? "missing" : r.type),
                    f = r && r.target && r.target.src;
                  c.message = "Loading chunk " + a + " failed.\n(" + d + ": " + f + ")", c.name = "ChunkLoadError", c.type = d, c.request = f, t[1](c)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, r) => {
              var t, d, f = r[0],
                c = r[1],
                n = r[2],
                o = 0;
              if (f.some((a => 0 !== e[a]))) {
                for (t in c) b.o(c, t) && (b.m[t] = c[t]);
                n && n(b)
              }
              for (a && a(r); o < f.length; o++) d = f[o], b.o(e, d) && e[d] && e[d][0](), e[d] = 0
            },
            r = self.webpackChunk_rockstargames_sites_red_dead_redemption_2 = self.webpackChunk_rockstargames_sites_red_dead_redemption_2 || [];
          r.forEach(a.bind(null, 0)), r.push = a.bind(null, r.push.bind(r))
        })(), b(37389), b(85819)
      })())
    }
  }
}));