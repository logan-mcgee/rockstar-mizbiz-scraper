! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "25eb2d53-b3c9-4e71-9b21-171eb2036316", e._sentryDebugIdIdentifier = "sentry-dbid-25eb2d53-b3c9-4e71-9b21-171eb2036316")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-videoplayer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register([], (function(e, a) {
  return {
    execute: function() {
      e((() => {
        var e, f, c, r, d, t, b = {
            24075: (e, a, f) => {
              (0, f(47387).w)(1)
            },
            47387: (e, a, f) => {
              const c = f(13099).y;
              a.w = function(e) {
                if (e || (e = 1), !f.y.meta || !f.y.meta.url) throw console.error("__system_context__", f.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                f.p = c(f.y.meta.url, e)
              }
            },
            45408: (e, a, f) => {
              f(24075)
            },
            13099: (e, a, f) => {
              a.y = function(e, a) {
                var f = document.createElement("a");
                f.href = e;
                for (var c = "/" === f.pathname[0] ? f.pathname : "/" + f.pathname, r = 0, d = c.length; r !== a && d >= 0;) "/" === c[--d] && r++;
                if (r !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + r + ") in the URL path " + e);
                var t = c.slice(0, d + 1);
                return f.protocol + "//" + f.host + t
              };
              Number.isInteger
            },
            58157: (e, a, f) => {
              "use strict";
              var c = {
                  "./bootstrap": () => f.e(5672).then((() => () => f(45672))),
                  "./index": () => Promise.all([f.e(8174), f.e(2229), f.e(9623), f.e(6188), f.e(5966), f.e(9010), f.e(3581), f.e(2918), f.e(2319), f.e(7118)]).then((() => () => f(77118))),
                  "./tina": () => Promise.all([f.e(2127), f.e(2229), f.e(6188), f.e(5966), f.e(4853), f.e(9010), f.e(7459)]).then((() => () => f(67459))),
                  "./tinaBlockTemplates": () => Promise.all([f.e(2127), f.e(2229), f.e(6188), f.e(5966), f.e(4853), f.e(9010), f.e(7459)]).then((() => () => f(67459)))
                },
                r = (e, a) => (f.R = a, a = f.o(c, e) ? c[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), f.R = void 0, a),
                d = (e, a) => {
                  if (f.S) {
                    var c = "default",
                      r = f.S[c];
                    if (r && r !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return f.S[c] = e, f.I(c, a)
                  }
                };
              f.d(a, {
                get: () => r,
                init: () => d
              })
            }
          },
          o = {};

        function n(e) {
          var a = o[e];
          if (void 0 !== a) return a.exports;
          var f = o[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return b[e].call(f.exports, f, f.exports, n), f.loaded = !0, f.exports
        }
        return n.m = b, n.c = o, n.y = a, n.amdO = {}, n.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return n.d(a, {
            a
          }), a
        }, f = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, n.t = function(a, c) {
          if (1 & c && (a = this(a)), 8 & c) return a;
          if ("object" == typeof a && a) {
            if (4 & c && a.__esModule) return a;
            if (16 & c && "function" == typeof a.then) return a
          }
          var r = Object.create(null);
          n.r(r);
          var d = {};
          e = e || [null, f({}), f([]), f(f)];
          for (var t = 2 & c && a;
            "object" == typeof t && !~e.indexOf(t); t = f(t)) Object.getOwnPropertyNames(t).forEach((e => d[e] = () => a[e]));
          return d.default = () => a, n.d(r, d), r
        }, n.d = (e, a) => {
          for (var f in a) n.o(a, f) && !n.o(e, f) && Object.defineProperty(e, f, {
            enumerable: !0,
            get: a[f]
          })
        }, n.f = {}, n.e = e => Promise.all(Object.keys(n.f).reduce(((a, f) => (n.f[f](e, a), a)), [])), n.u = e => "js/" + {
          131: "e039a02e91af070d8e188f70caf3b79d",
          278: "62f0c826fa0576c195756ac8718402ad",
          299: "9c6e25ab8d754d74e4d5ce4a46ac616e",
          314: "ddc14fcd46471d4963c1102d85878e9a",
          391: "bc3b2b31b96a34537e7e53256041fb35",
          662: "10c75d58d0c9b5fed0ffb63c87352ec3",
          721: "023db54d141c21bb03ecdc3a05f0fc30",
          824: "3304af61d610402d6d348db1e32a4378",
          907: "9b566c6d8aefb14275c91f70fd384b3d",
          1054: "e50f157e9a50fd1f3bff8c9f14319846",
          1242: "fe8dbe1a7972edf142539409d914f262",
          1247: "2aef65ef00ad239f745f959b1474244f",
          1673: "69f551f826c149d9772f2be3966d7cb1",
          1822: "d7caa3ef7cc0e3829854c90b2b2fb853",
          1868: "dd3cd9b1994ed55fd2668ee7593632e0",
          2024: "5c46d52f378fe03f73dd81d0b061a9ae",
          2127: "8033490d46c189898862521c7c68236e",
          2156: "350012786d7ad7b75a034c4496cc4324",
          2171: "99d18197c054f541535c04d5eb2b3c29",
          2221: "6133f0ccdedcd79d1a73af6b182ded82",
          2229: "694e45c1bdc83f48f126dc7ace434947",
          2243: "f3a71c5d6ad924503cf5895acdf010e9",
          2246: "df8552207e3f4b0e071f16539ea574ae",
          2319: "5ab07330afb9737791588d02807e3d34",
          2347: "d2f4811975152a1b7be874a0ac5fde69",
          2365: "0cdf7bc8fa2c38a8c9ab333bd1179ba2",
          2398: "ad678d99e06c8b416e39133bf8b10833",
          2466: "0b749f3e872e690cf6b96e620aa59f4d",
          2642: "496ea7748c75070adffd6f86c66739fe",
          2678: "9c49a664fd8801c93bf22e4afd43761a",
          2772: "e692e6c3bd9241a4d25f2d421e6a0c2c",
          2864: "df6dd5316f66a3b2ddf662d7d2b76a9f",
          2918: "c48f222def00e0dc340c684a29fdcc11",
          3034: "dbda8fcfb79afaf25f55c550dee91f81",
          3182: "ae6c53061d791bfd7055a765c0e8eec0",
          3197: "a5f22470a419016c98f2016770a81c74",
          3343: "73e4894c0cdfdf799af85cedb427be1b",
          3370: "75df00692253511e457a123c5f287c4e",
          3379: "3656c5ffbef1d9e5a1880f392a7645a3",
          3447: "981e4953ad9e819b2ac18d6c5b0b530a",
          3475: "e0e84a821a504ff3c1c1bf4651a31232",
          3486: "c3b91f005d77c5a3d94dfe885bfc7388",
          3581: "4038d09d8a5a6cab7676fb396cfb6c60",
          3697: "d5d12dda9b5921937526203d0c30f2cc",
          3855: "7dbf6add338ab5d239eca74c23da0f56",
          3885: "a41cdbf27335802e88a2f847d3604d8c",
          3941: "d77974a7b89f341c60bf32bb7f348007",
          4011: "b6a0c2492df6a135fc71d91ffb47c9e9",
          4018: "8ae8fb32603cd610bc00e6f1d235f3e5",
          4054: "6f26ebd5289214b81e79141b0e649a09",
          4528: "ceb16a300627bb51358966b559a76468",
          4621: "b84ec8adcb7a051eb034b7251fa1fdd0",
          4700: "23378c73bae09c930d61a1cfb65c419d",
          4710: "3ba99ef0faf9a8c581c87a08b22b6d93",
          4731: "805fb1401e037e1710d884a5502b0754",
          4799: "8a5972c5631275876fc086497fbd16c8",
          4851: "a19132d90d34ed70aa7cc39c84e2ee53",
          4853: "24fd39970cceb3912231faa6d0c8f8c0",
          4861: "581123392c52d92028055c7732ae922f",
          4869: "6648deb7f9c01f1255bd2fd712671016",
          4913: "37e44eec270b6329ddb9876d1e8dd2fa",
          5018: "cf1896efc2e03035112b69db373c8bb7",
          5233: "82a9c9195282ab79c207d3f556e6b8b7",
          5254: "57c957d08cc67ac8862d2de96dd1d273",
          5259: "05c092431aaf84ad009060a9c1ae97ea",
          5440: "793cb6a238340699d6236ed52e531466",
          5530: "d31d8253ebadc61140d80a019d19e293",
          5639: "b11d984fecfd2bf9caff4872edc583bc",
          5663: "8c179b529b4a554f0752e42110155de5",
          5672: "19542367961683b2f539d154b43c12ad",
          5742: "04d39da4c1811fd7227a237d77036816",
          5771: "26eeaf64786cece375ca953c0789aa6e",
          5794: "666785409668a9dd3b8777e71f644c2f",
          5830: "bac776dc0cac0d4b2fb4026ab3639d90",
          5832: "18ac60a12c2c34aff3bd6c94a1ca97ff",
          5966: "b291de7cefd353995511032eb1a82a4e",
          6022: "47211e5b281a5460cfb018e29ee20d61",
          6188: "fbc5b6848dcceb32ea5990c581a10150",
          6267: "99a81ce0a22c41f07c50bd135e44f076",
          6280: "42eebf1577198dc8cb7a060e0095f0ed",
          6285: "57322d7f3751a6d12fcd9da069fca6e3",
          6349: "e7d3506c353323a0189aceba2c04887f",
          6361: "57839955d3ad680137c0cd10c9e252da",
          6403: "1e4fda43b059c035cd3547e2c70d94b4",
          6664: "e9fc0a3cde2cfe13b3bf25de1cc90d31",
          6879: "be52cc71b9d7e6c464821e9a95b92a45",
          6891: "5be31463420747fcdd453017831ee18c",
          6892: "45f9271ce29f94711b470f28fabfda33",
          6997: "81dc03cd4c0fab65c7383e0e44dfc0a9",
          7010: "2f31f131e5e522720cbe185dcc475382",
          7073: "b2af96a8f01389471f4dd9b8852be40e",
          7118: "bccf4427b0197b59126eabe67300a515",
          7131: "07eb5992af022a74d04b76881889ffea",
          7250: "f07a3a6b670056b42f5dff142d2fee2f",
          7436: "f0e6de1ceb32031fedc1a7d053e59389",
          7452: "a347bb1454a40f2bf68f69bef88d4c5d",
          7453: "93cd27c4e2a3b83b40f15b65864396b5",
          7459: "2a14173bf5891d2a8a11272924075821",
          7868: "c76540852ce8ca726d22c6dc5b176508",
          7970: "c12432a82516eded4d3993e281173db7",
          8174: "cb47d064d1c44e3a48947abc20b82cfb",
          8272: "b6ea8af31a1cd58f6e722f7abb315040",
          8391: "76ae16edaa73fda56bd807618eeef91a",
          8691: "50f3c25e45fe848b0382c1e925941364",
          8730: "cf9d07376c83d50822caa901e3d7277a",
          8755: "cb2986ac07cd2b45edd88b38fba28323",
          8880: "71c63291bb515206aad1eb79c6f8bf46",
          8970: "c7f0faace485ee0b21457afa1f42e01f",
          9005: "72e4c9af03011a4a7af11b5ed527171c",
          9010: "4b5be9bcd3964cf1e944111149aa580e",
          9022: "ae9c067ba9767ee6bdcbc1e40ec469a0",
          9028: "e89d9c2ddc6200f42e2162d2cdeceaae",
          9126: "69cf2995015f588c80083518913fefd7",
          9323: "25aa11255b142d0506085f0b9299b62d",
          9377: "a74aba92be6df3d5321744e3c69766be",
          9512: "34900997451b27576f5c2bebff9ca65d",
          9615: "e23a722c1fdde96f7bc31db4e0889d3d",
          9623: "fb134a5684b6756100e88f7db34936fc",
          9936: "03f07147e517109e451bf03f0acbd4b2",
          9990: "055ba2c90ec23c361b7c4d786aad176f"
        } [e] + ".js", n.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), n.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), c = {}, r = "@rockstargames/modules-core-videoplayer:", n.l = (e, a, f, d) => {
          if (c[e]) c[e].push(a);
          else {
            var t, b;
            if (void 0 !== f)
              for (var o = document.getElementsByTagName("script"), l = 0; l < o.length; l++) {
                var i = o[l];
                if (i.getAttribute("src") == e || i.getAttribute("data-webpack") == r + f) {
                  t = i;
                  break
                }
              }
            t || (b = !0, (t = document.createElement("script")).charset = "utf-8", t.timeout = 120, n.nc && t.setAttribute("nonce", n.nc), t.setAttribute("data-webpack", r + f), t.src = e), c[e] = [a];
            var s = (a, f) => {
                t.onerror = t.onload = null, clearTimeout(u);
                var r = c[e];
                if (delete c[e], t.parentNode && t.parentNode.removeChild(t), r && r.forEach((e => e(f))), a) return a(f)
              },
              u = setTimeout(s.bind(null, void 0, {
                type: "timeout",
                target: t
              }), 12e4);
            t.onerror = s.bind(null, t.onerror), t.onload = s.bind(null, t.onload), b && document.head.appendChild(t)
          }
        }, n.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, n.nmd = e => (e.paths = [], e.children || (e.children = []), e), d = {}, t = {}, n.f.remotes = (e, a) => {
          n.o(d, e) && d[e].forEach((e => {
            var f = n.R;
            f || (f = []);
            var c = t[e];
            if (!(f.indexOf(c) >= 0)) {
              if (f.push(c), c.p) return a.push(c.p);
              var r = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + c[1] + '" from ' + c[2]), n.m[e] = () => {
                    throw a
                  }, c.p = 0
                },
                d = (e, f, d, t, b, o) => {
                  try {
                    var n = e(f, d);
                    if (!n || !n.then) return b(n, t, o);
                    var l = n.then((e => b(e, t)), r);
                    if (!o) return l;
                    a.push(c.p = l)
                  } catch (e) {
                    r(e)
                  }
                },
                b = (e, a, r) => d(a.get, c[1], f, 0, o, r),
                o = a => {
                  c.p = 1, n.m[e] = e => {
                    e.exports = a()
                  }
                };
              d(n, c[2], 0, 0, ((e, a, f) => e ? d(n.I, c[0], 0, e, b, f) : r()), 1)
            }
          }))
        }, (() => {
          n.S = {};
          var e = {},
            a = {};
          n.I = (f, c) => {
            c || (c = []);
            var r = a[f];
            if (r || (r = a[f] = {}), !(c.indexOf(r) >= 0)) {
              if (c.push(r), e[f]) return e[f];
              n.o(n.S, f) || (n.S[f] = {});
              var d = n.S[f],
                t = "@rockstargames/modules-core-videoplayer",
                b = (e, a, f, c) => {
                  var r = d[e] = d[e] || {},
                    b = r[a];
                  (!b || !b.loaded && (!c != !b.eager ? c : t > b.from)) && (r[a] = {
                    get: f,
                    from: t,
                    eager: !!c
                  })
                },
                o = [];
              return "default" === f && (b("@gsap/react", "2.1.0", (() => Promise.all([n.e(2229), n.e(3581), n.e(7250)]).then((() => () => n(27250))))), b("@popperjs/core", "2.11.8", (() => n.e(8691).then((() => () => n(48691))))), b("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([n.e(2024), n.e(2229), n.e(1673)]).then((() => () => n(85950))))), b("@rsgweb/modules-core-agegate", "0.0.0", (() => Promise.all([n.e(1247), n.e(2229), n.e(5966), n.e(2918), n.e(7131)]).then((() => () => n(37131))))), b("@rsgweb/rockstar-account", "0.0.0", (() => Promise.all([n.e(3182), n.e(6403), n.e(2229), n.e(9623), n.e(6188), n.e(5966), n.e(2246), n.e(391)]).then((() => () => n(2772))))), b("@rsgweb/utils", "1.0.0", (() => Promise.all([n.e(3182), n.e(2229), n.e(9623), n.e(6188), n.e(2246), n.e(3855)]).then((() => () => n(48267))))), b("graphql", "16.10.0", (() => n.e(5440).then((() => () => n(55440))))), b("gsap", "0.0.0", (() => n.e(3379).then((() => () => n(33379))))), b("hammerjs", "2.0.8", (() => n.e(9323).then((() => () => n(29323))))), b("lodash", "4.17.21", (() => n.e(7868).then((() => () => n(17868))))), b("react-dom", "18.2.0", (() => Promise.all([n.e(5794), n.e(2229)]).then((() => () => n(5794))))), b("react-popper", "2.3.0", (() => Promise.all([n.e(2229), n.e(4853), n.e(9005), n.e(6349)]).then((() => () => n(76349))))), b("react-router-dom", "6.17.0", (() => Promise.all([n.e(4018), n.e(2229)]).then((() => () => n(54018))))), b("react", "18.2.0", (() => n.e(3447).then((() => () => n(13447))))), b("uuid", "9.0.1", (() => n.e(6022).then((() => () => n(46022)))))), e[f] = o.length ? Promise.all(o).then((() => e[f] = 1)) : 1
            }
          }
        })(), (() => {
          var e;
          n.g.importScripts && (e = n.g.location + "");
          var a = n.g.document;
          if (!e && a && (a.currentScript && (e = a.currentScript.src), !e)) {
            var f = a.getElementsByTagName("script");
            if (f.length)
              for (var c = f.length - 1; c > -1 && (!e || !/^http(s?):/.test(e));) e = f[c--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), n.p = e
        })(), (() => {
          var e = e => {
              var a = e => e.split(".").map((e => +e == e ? +e : e)),
                f = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                c = f[1] ? a(f[1]) : [];
              return f[2] && (c.length++, c.push.apply(c, a(f[2]))), f[3] && (c.push([]), c.push.apply(c, a(f[3]))), c
            },
            a = (f, c) => {
              if (0 in f) {
                c = e(c);
                var r = f[0],
                  d = r < 0;
                d && (r = -r - 1);
                for (var t = 0, b = 1, o = !0;; b++, t++) {
                  var n, l, i = b < f.length ? (typeof f[b])[0] : "";
                  if (t >= c.length || "o" == (l = (typeof(n = c[t]))[0])) return !o || ("u" == i ? b > r && !d : "" == i != d);
                  if ("u" == l) {
                    if (!o || "u" != i) return !1
                  } else if (o)
                    if (i == l)
                      if (b <= r) {
                        if (n != f[b]) return !1
                      } else {
                        if (d ? n > f[b] : n < f[b]) return !1;
                        n != f[b] && (o = !1)
                      }
                  else if ("s" != i && "n" != i) {
                    if (d || b <= r) return !1;
                    o = !1, b--
                  } else {
                    if (b <= r || l < i != d) return !1;
                    o = !1
                  } else "s" != i && "n" != i && (o = !1, b--)
                }
              }
              var s = [],
                u = s.pop.bind(s);
              for (t = 1; t < f.length; t++) {
                var p = f[t];
                s.push(1 == p ? u() | u() : 2 == p ? u() & u() : p ? a(p, c) : !u())
              }
              return !!u()
            },
            f = (f, c, r) => {
              var d = f[c];
              return (c = Object.keys(d).reduce(((f, c) => !a(r, c) || f && !((a, f) => {
                a = e(a), f = e(f);
                for (var c = 0;;) {
                  if (c >= a.length) return c < f.length && "u" != (typeof f[c])[0];
                  var r = a[c],
                    d = (typeof r)[0];
                  if (c >= f.length) return "u" == d;
                  var t = f[c],
                    b = (typeof t)[0];
                  if (d != b) return "o" == d && "n" == b || "s" == b || "u" == d;
                  if ("o" != d && "u" != d && r != t) return r < t;
                  c++
                }
              })(f, c) ? f : c), 0)) && d[c]
            },
            c = (e => function(a, f, c, r) {
              var d = n.I(a);
              return d && d.then ? d.then(e.bind(e, a, n.S[a], f, c, r)) : e(a, n.S[a], f, c, r)
            })(((e, a, c, r, d) => {
              var t = a && n.o(a, c) && f(a, c, r);
              return t ? (e => (e.loaded = 1, e.get()))(t) : d()
            })),
            r = {},
            d = {
              62229: () => c("default", "react", [1, 18, 2, 0], (() => n.e(3447).then((() => () => n(13447))))),
              9623: () => c("default", "react-router-dom", [1, 6, 11, 2], (() => n.e(4018).then((() => () => n(54018))))),
              16188: () => c("default", "lodash", [1, 4, 17, 21], (() => n.e(7868).then((() => () => n(17868))))),
              95966: () => c("default", "@rsgweb/utils", [1, "workspace:^"], (() => Promise.all([n.e(3182), n.e(9623), n.e(6188), n.e(2246)]).then((() => () => n(48267))))),
              81569: () => c("default", "uuid", [1, 9, 0, 0], (() => n.e(6022).then((() => () => n(46022))))),
              81788: () => c("default", "@rsgweb/locale-tools", [1, "workspace:^"], (() => Promise.all([n.e(2024), n.e(4054)]).then((() => () => n(85950))))),
              13581: () => c("default", "gsap", [1, "workspace:^"], (() => n.e(3379).then((() => () => n(33379))))),
              2918: () => c("default", "@rsgweb/rockstar-account", [1, "workspace:^"], (() => Promise.all([n.e(3182), n.e(6403), n.e(9623), n.e(6188), n.e(2246), n.e(2772)]).then((() => () => n(2772))))),
              4848: () => c("default", "hammerjs", [1, 2, 0, 8], (() => n.e(9323).then((() => () => n(29323))))),
              27654: () => c("default", "@gsap/react", [1, 2, 1, 0], (() => n.e(4869).then((() => () => n(27250))))),
              47224: () => c("default", "@rsgweb/modules-core-agegate", [1, "workspace:^"], (() => Promise.all([n.e(1247), n.e(9512)]).then((() => () => n(37131))))),
              75971: () => c("default", "react-popper", [1, 2, 3, 0], (() => Promise.all([n.e(4853), n.e(9005), n.e(8730)]).then((() => () => n(76349))))),
              44853: () => c("default", "react-dom", [1, 18, 2, 0], (() => n.e(5794).then((() => () => n(5794))))),
              16565: () => c("default", "graphql", [1, 16, 9, 0], (() => n.e(5440).then((() => () => n(55440))))),
              9005: () => c("default", "@popperjs/core", [1, 2, 11, 7], (() => n.e(8691).then((() => () => n(48691)))))
            },
            t = {
              2229: [62229],
              2246: [16565],
              2319: [4848, 27654, 47224, 75971],
              2918: [2918],
              3581: [13581],
              4853: [44853],
              5966: [95966],
              6188: [16188],
              9005: [9005],
              9010: [81569, 81788],
              9623: [9623]
            },
            b = {};
          n.f.consumes = (e, a) => {
            n.o(t, e) && t[e].forEach((e => {
              if (n.o(r, e)) return a.push(r[e]);
              if (!b[e]) {
                var f = a => {
                  r[e] = 0, n.m[e] = f => {
                    delete n.c[e], f.exports = a()
                  }
                };
                b[e] = !0;
                var c = a => {
                  delete r[e], n.m[e] = f => {
                    throw delete n.c[e], a
                  }
                };
                try {
                  var t = d[e]();
                  t.then ? a.push(r[e] = t.then(f).catch(c)) : f(t)
                } catch (e) {
                  c(e)
                }
              }
            }))
          }
        })(), (() => {
          n.b = document.baseURI || self.location.href;
          var e = {
            7614: 0
          };
          n.f.j = (a, f) => {
            var c = n.o(e, a) ? e[a] : void 0;
            if (0 !== c)
              if (c) f.push(c[2]);
              else if (/^(9(005|010|623)|2229|2918|3581|4853|5966|6188)$/.test(a)) e[a] = 0;
            else {
              var r = new Promise(((f, r) => c = e[a] = [f, r]));
              f.push(c[2] = r);
              var d = n.p + n.u(a),
                t = new Error;
              n.l(d, (f => {
                if (n.o(e, a) && (0 !== (c = e[a]) && (e[a] = void 0), c)) {
                  var r = f && ("load" === f.type ? "missing" : f.type),
                    d = f && f.target && f.target.src;
                  t.message = "Loading chunk " + a + " failed.\n(" + r + ": " + d + ")", t.name = "ChunkLoadError", t.type = r, t.request = d, c[1](t)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, f) => {
              var c, r, d = f[0],
                t = f[1],
                b = f[2],
                o = 0;
              if (d.some((a => 0 !== e[a]))) {
                for (c in t) n.o(t, c) && (n.m[c] = t[c]);
                b && b(n)
              }
              for (a && a(f); o < d.length; o++) r = d[o], n.o(e, r) && e[r] && e[r][0](), e[r] = 0
            },
            f = self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || [];
          f.forEach(a.bind(null, 0)), f.push = a.bind(null, f.push.bind(f))
        })(), n.nc = void 0, n(45408), n(58157)
      })())
    }
  }
}));