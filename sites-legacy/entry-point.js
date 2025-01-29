! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "9bdcdc07-8a10-4d76-9178-6a070e5ffd66", e._sentryDebugIdIdentifier = "sentry-dbid-9bdcdc07-8a10-4d76-9178-6a070e5ffd66")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-legacy",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/modules-core-videoplayer"], (function(e, t) {
  var r = {};
  return Object.defineProperty(r, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      Object.keys(e).forEach((function(t) {
        r[t] = e[t]
      }))
    }],
    execute: function() {
      e((() => {
        var e, a, d, f, n, o, c = {
            35144: (e, t, r) => {
              (0, r(13454).w)(1)
            },
            13454: (e, t, r) => {
              const a = r(38294).y;
              t.w = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = a(r.y.meta.url, e)
              }
            },
            23787: (e, t, r) => {
              r(35144)
            },
            38294: (e, t, r) => {
              t.y = function(e, t) {
                var r = document.createElement("a");
                r.href = e;
                for (var a = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, d = 0, f = a.length; d !== t && f >= 0;) "/" === a[--f] && d++;
                if (d !== t) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + t + ") is greater than the number of directories (" + d + ") in the URL path " + e);
                var n = a.slice(0, f + 1);
                return r.protocol + "//" + r.host + n
              };
              Number.isInteger
            },
            58639: (e, t, r) => {
              "use strict";
              var a = {
                  "./bootstrap": () => Promise.all([r.e(1999), r.e(2688), r.e(8370), r.e(7512), r.e(5157), r.e(7196), r.e(3735), r.e(2229), r.e(5966), r.e(9623), r.e(7170), r.e(4281), r.e(600), r.e(2440), r.e(2491), r.e(2738), r.e(7145), r.e(2002), r.e(5861)]).then((() => () => r(35861))),
                  "./index": () => Promise.all([r.e(1999), r.e(2688), r.e(8370), r.e(7512), r.e(5157), r.e(7196), r.e(2229), r.e(5966), r.e(9623), r.e(7170), r.e(4281), r.e(600), r.e(2440), r.e(2491), r.e(2738), r.e(7145), r.e(2002), r.e(6862)]).then((() => () => r(56862))),
                  "./site-routes/Bully": () => Promise.all([r.e(1999), r.e(2688), r.e(8370), r.e(7512), r.e(5157), r.e(7196), r.e(2229), r.e(5966), r.e(9623), r.e(7170), r.e(4281), r.e(600), r.e(2440), r.e(2491), r.e(2738), r.e(7145), r.e(2002), r.e(6258), r.e(4238)]).then((() => () => r(24238))),
                  "./site-routes/RedDeadRedemption": () => Promise.all([r.e(1999), r.e(2688), r.e(8370), r.e(7512), r.e(5157), r.e(7196), r.e(2229), r.e(5966), r.e(9623), r.e(7170), r.e(4281), r.e(600), r.e(2440), r.e(2491), r.e(2738), r.e(7145), r.e(2002), r.e(6258), r.e(6034)]).then((() => () => r(36034))),
                  "./tina": () => Promise.all([r.e(1999), r.e(2688), r.e(8370), r.e(7512), r.e(5157), r.e(7196), r.e(2229), r.e(5966), r.e(9623), r.e(7170), r.e(4281), r.e(600), r.e(2440), r.e(2491), r.e(2738), r.e(7145), r.e(2002), r.e(6258)]).then((() => () => r(26258)))
                },
                d = (e, t) => (r.R = t, t = r.o(a, e) ? a[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), r.R = void 0, t),
                f = (e, t) => {
                  if (r.S) {
                    var a = "default",
                      d = r.S[a];
                    if (d && d !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return r.S[a] = e, r.I(a, t)
                  }
                };
              r.d(t, {
                get: () => d,
                init: () => f
              })
            },
            25136: e => {
              "use strict";
              e.exports = r
            }
          },
          i = {};

        function s(e) {
          var t = i[e];
          if (void 0 !== t) return t.exports;
          var r = i[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return c[e].call(r.exports, r, r.exports, s), r.loaded = !0, r.exports
        }
        return s.m = c, s.c = i, s.y = t, s.amdO = {}, s.n = e => {
          var t = e && e.__esModule ? () => e.default : () => e;
          return s.d(t, {
            a: t
          }), t
        }, a = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, s.t = function(t, r) {
          if (1 & r && (t = this(t)), 8 & r) return t;
          if ("object" == typeof t && t) {
            if (4 & r && t.__esModule) return t;
            if (16 & r && "function" == typeof t.then) return t
          }
          var d = Object.create(null);
          s.r(d);
          var f = {};
          e = e || [null, a({}), a([]), a(a)];
          for (var n = 2 & r && t;
            "object" == typeof n && !~e.indexOf(n); n = a(n)) Object.getOwnPropertyNames(n).forEach((e => f[e] = () => t[e]));
          return f.default = () => t, s.d(d, f), d
        }, s.d = (e, t) => {
          for (var r in t) s.o(t, r) && !s.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
          })
        }, s.f = {}, s.e = e => Promise.all(Object.keys(s.f).reduce(((t, r) => (s.f[r](e, t), t)), [])), s.u = e => "js/" + {
          68: "d6fda1468da06c54755ab06d923eb52b",
          173: "ed21ccf8a1166facb15b821ffecab821",
          282: "01672a24edc8128b772bd118eb1c0673",
          508: "842e5b3b343c948c695358d452af47c1",
          570: "1f2c9269139cd127057f0c4e8f2cba25",
          600: "d1a61fb68e9252aa14fc84043ef11efc",
          601: "94c1f485f0df2c48840c551b28feff5a",
          819: "3fa84493bddd194fc552d332cdac2add",
          1758: "ce21a74213bdad57d461e2f8b44f2c74",
          1927: "ca016025bf721952bea10ad804457d89",
          1999: "2209eaf28bc882bea27cbb6d66e4ccc6",
          2002: "8cb27962a70aa2c0d90115bb2a68b58d",
          2117: "aee985d9f16d72dc3a650072f93af3bb",
          2229: "d2d18ecff8d4927cf46bf4f3aa674dc2",
          2234: "06066cb0597fb800bf7fcf2bf808bf3c",
          2440: "c30750136d805475662f793509d9f4b5",
          2491: "cf888626521c5efafaf51d170bf9b202",
          2647: "04ac951feea1a65f75c5cd8ccdd8654b",
          2688: "28575cbff87194e66ca6094be9442b0f",
          2738: "5e5c951d3b969fbec7eb30c5096b56cf",
          3075: "4f79af7016dd9a48e3bdcb79671080f9",
          3200: "3df4dfb335ea9716d785a187b1b778df",
          3313: "7a535920e8f062cd00717451b8ffd264",
          3565: "6e03454ee715f8384c8223f05ced4700",
          3735: "eb4abaf1bffc5e74b5d71846a609cb4c",
          3896: "4c93043392022d08f634565b794fdcd2",
          4238: "c09bc51f96db34ca3500e49e6ac83c29",
          4281: "deef2a08a50dec93ca2b55597dc45107",
          4498: "8d142eb168b36a87c29917248321c52b",
          4730: "d280830ad0162412f1cc848452b3a6e5",
          5157: "299e1eac3b24ef4a9d58b6a04f139e7c",
          5265: "70d3f821004552989d74906f9cac7f4a",
          5415: "03e573ed2812bda314963bb8026ef345",
          5456: "ef34df267b7ef6d473368d18ef8b520d",
          5796: "6c7f449c2f562b7ae9b1ec29eed36235",
          5861: "4f0b8b8078ed7c7cd4e83338aaf7da57",
          5966: "b5c6d9a6da4ebb8f1f9445c8972b7b0e",
          6034: "a38c5417cb7ae9f028d508d5739dc6dd",
          6258: "6cf9cc0c5e49e6e1ca356744ae754613",
          6404: "7e1b64198e47c04fbe80919856c64ca5",
          6471: "97b363587639dd35d0b60942c41770a1",
          6862: "593e1ecc6102cb3993105b9377ec5abd",
          7145: "c1d60b87acc9fd2c37d8b07e9f5d676c",
          7170: "bb3db2187d7dc92bb2974c8acf4431cd",
          7196: "df3fb5dfd23b2ff8449303ee82d0d7c6",
          7407: "1399437c885fb23bf736559d5677251d",
          7512: "ce3abd4007b4cc21dbef0ad1b41dd2ad",
          7605: "d07755dcaa1f7ab34a9d1a57aa0ddac3",
          7924: "890667e225ead3322ee4d3fad8d3bd44",
          8096: "fd2f0b6222925267bb10885f1a4a1330",
          8189: "33e428b3fc3fb06be5d2fb60896cb0ba",
          8242: "24ba965fafd4a4a03248252c1c832b0d",
          8325: "2b848ee44150f7e3282ae1207b8e3aac",
          8370: "31501680b52dfd6782c1707afa7881e2",
          8384: "c7f05b6efca697b00e99708047317b94",
          8385: "bd5e6068bc8797ca6b7ef6a4504d8d8e",
          8577: "b3918a6fad575cdefb28cede697d0345",
          8845: "9f36409caf09e6da71b6884906014aed",
          8938: "7f2eaf3cc808703466c7bd55178e3260",
          9623: "b331f66641cca59b2a0c2ff87e976a2b",
          9760: "922c0d5aaa449857d0e3f752166c2b01",
          9986: "c2411e8a464e9c4970a3175169345202"
        } [e] + ".js", s.miniCssF = e => "css/" + {
          819: "82b8e41eb90eae7db3adfb9fff54d045",
          2002: "0c843088a3585b0be03659be33f5006e",
          2647: "7b4764475ca420e9ef256cff3db37704",
          3200: "82b8e41eb90eae7db3adfb9fff54d045",
          3313: "6e70c6eb034e182b48671d7b4694e780",
          3565: "acd527f8b8605a84d960f7f210a58825",
          4238: "52e55b769351b6e3f1602fe5d2baacd1",
          5861: "2e2c2d79838c3959e62808fd28ef0e6c",
          6034: "52e55b769351b6e3f1602fe5d2baacd1",
          7196: "7b082508ccf0d5795ef37f651862835d"
        } [e] + ".css", s.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), d = {}, f = "@rockstargames/sites-legacy:", s.l = (e, t, r, a) => {
          if (d[e]) d[e].push(t);
          else {
            var n, o;
            if (void 0 !== r)
              for (var c = document.getElementsByTagName("script"), i = 0; i < c.length; i++) {
                var l = c[i];
                if (l.getAttribute("src") == e || l.getAttribute("data-webpack") == f + r) {
                  n = l;
                  break
                }
              }
            n || (o = !0, (n = document.createElement("script")).charset = "utf-8", n.timeout = 120, s.nc && n.setAttribute("nonce", s.nc), n.setAttribute("data-webpack", f + r), n.src = e), d[e] = [t];
            var b = (t, r) => {
                n.onerror = n.onload = null, clearTimeout(u);
                var a = d[e];
                if (delete d[e], n.parentNode && n.parentNode.removeChild(n), a && a.forEach((e => e(r))), t) return t(r)
              },
              u = setTimeout(b.bind(null, void 0, {
                type: "timeout",
                target: n
              }), 12e4);
            n.onerror = b.bind(null, n.onerror), n.onload = b.bind(null, n.onload), o && document.head.appendChild(n)
          }
        }, s.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, s.nmd = e => (e.paths = [], e.children || (e.children = []), e), n = {
          2002: [31879],
          6258: [17523]
        }, o = {
          17523: ["default", "./tina", 25136],
          31879: ["default", "./index", 25136]
        }, s.f.remotes = (e, t) => {
          s.o(n, e) && n[e].forEach((e => {
            var r = s.R;
            r || (r = []);
            var a = o[e];
            if (!(r.indexOf(a) >= 0)) {
              if (r.push(a), a.p) return t.push(a.p);
              var d = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + a[1] + '" from ' + a[2]), s.m[e] = () => {
                    throw t
                  }, a.p = 0
                },
                f = (e, r, f, n, o, c) => {
                  try {
                    var i = e(r, f);
                    if (!i || !i.then) return o(i, n, c);
                    var s = i.then((e => o(e, n)), d);
                    if (!c) return s;
                    t.push(a.p = s)
                  } catch (e) {
                    d(e)
                  }
                },
                n = (e, t, d) => f(t.get, a[1], r, 0, c, d),
                c = t => {
                  a.p = 1, s.m[e] = e => {
                    e.exports = t()
                  }
                };
              f(s, a[2], 0, 0, ((e, t, r) => e ? f(s.I, a[0], 0, e, n, r) : d()), 1)
            }
          }))
        }, (() => {
          s.S = {};
          var e = {},
            t = {};
          s.I = (r, a) => {
            a || (a = []);
            var d = t[r];
            if (d || (d = t[r] = {}), !(a.indexOf(d) >= 0)) {
              if (a.push(d), e[r]) return e[r];
              s.o(s.S, r) || (s.S[r] = {});
              var f = s.S[r],
                n = "@rockstargames/sites-legacy",
                o = (e, t, r, a) => {
                  var d = f[e] = f[e] || {},
                    o = d[t];
                  (!o || !o.loaded && (!a != !o.eager ? a : n > o.from)) && (d[t] = {
                    get: r,
                    from: n,
                    eager: !!a
                  })
                },
                c = [];
              return "default" === r && (o("@rsgweb/intl", "0.0.0", (() => s.e(7924).then((() => () => s(37924))))), o("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([s.e(1999), s.e(2688), s.e(1927), s.e(2229), s.e(9986)]).then((() => () => s(89986))))), o("@rsgweb/modules-core-hero", "0.0.0", (() => Promise.all([s.e(2229), s.e(5966), s.e(9623), s.e(4281), s.e(2440), s.e(2491), s.e(3313)]).then((() => () => s(86067))))), o("@rsgweb/modules-core-highlights", "0.0.0", (() => Promise.all([s.e(5157), s.e(2229), s.e(4281), s.e(2440), s.e(2738), s.e(2647), s.e(8189)]).then((() => () => s(78189))))), o("@rsgweb/rockstar-account", "0.0.0", (() => Promise.all([s.e(1999), s.e(2688), s.e(8370), s.e(8384), s.e(2229), s.e(5966), s.e(9623), s.e(7170), s.e(3075)]).then((() => () => s(93075))))), o("@rsgweb/tina", "0.0.0", (() => Promise.all([s.e(1999), s.e(7512), s.e(2229), s.e(5966), s.e(4281), s.e(600), s.e(3200)]).then((() => () => s(52437))))), o("@rsgweb/utils", "1.0.0", (() => Promise.all([s.e(1999), s.e(2688), s.e(8370), s.e(2229), s.e(5966), s.e(9623), s.e(7170), s.e(8096)]).then((() => () => s(75811))))), o("focus-trap-react", "10.2.3", (() => Promise.all([s.e(6404), s.e(2229), s.e(7145)]).then((() => () => s(86404))))), o("framer-motion", "10.16.4", (() => Promise.all([s.e(4730), s.e(2229)]).then((() => () => s(74730))))), o("framer-motion", "10.16.4", (() => Promise.all([s.e(8242), s.e(2229)]).then((() => () => s(58242))))), o("framer-motion", "7.10.3", (() => Promise.all([s.e(8385), s.e(2229)]).then((() => () => s(58385))))), o("graphql", "16.10.0", (() => s.e(601).then((() => () => s(30601))))), o("prop-types", "15.8.1", (() => s.e(5796).then((() => () => s(5796))))), o("react-dom", "18.2.0", (() => Promise.all([s.e(8577), s.e(2229)]).then((() => () => s(78577))))), o("react-intersection-observer", "9.10.3", (() => Promise.all([s.e(2229), s.e(4498)]).then((() => () => s(44498))))), o("react-router-dom", "6.17.0", (() => Promise.all([s.e(282), s.e(2229)]).then((() => () => s(70282))))), o("react", "18.2.0", (() => s.e(508).then((() => () => s(50508))))), (e => {
                var t = e => {
                  return t = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(t));
                  var t
                };
                try {
                  var d = s(25136);
                  if (!d) return;
                  var f = e => e && e.init && e.init(s.S[r], a);
                  if (d.then) return c.push(d.then(f, t));
                  var n = f(d);
                  if (n && n.then) return c.push(n.catch(t))
                } catch (e) {
                  t(e)
                }
              })()), c.length ? e[r] = Promise.all(c).then((() => e[r] = 1)) : e[r] = 1
            }
          }
        })(), (() => {
          var e;
          s.g.importScripts && (e = s.g.location + "");
          var t = s.g.document;
          if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
            var r = t.getElementsByTagName("script");
            if (r.length)
              for (var a = r.length - 1; a > -1 && (!e || !/^http(s?):/.test(e));) e = r[a--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), s.p = e
        })(), (() => {
          var e = e => {
              var t = e => e.split(".").map((e => +e == e ? +e : e)),
                r = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                a = r[1] ? t(r[1]) : [];
              return r[2] && (a.length++, a.push.apply(a, t(r[2]))), r[3] && (a.push([]), a.push.apply(a, t(r[3]))), a
            },
            t = (r, a) => {
              if (0 in r) {
                a = e(a);
                var d = r[0],
                  f = d < 0;
                f && (d = -d - 1);
                for (var n = 0, o = 1, c = !0;; o++, n++) {
                  var i, s, l = o < r.length ? (typeof r[o])[0] : "";
                  if (n >= a.length || "o" == (s = (typeof(i = a[n]))[0])) return !c || ("u" == l ? o > d && !f : "" == l != f);
                  if ("u" == s) {
                    if (!c || "u" != l) return !1
                  } else if (c)
                    if (l == s)
                      if (o <= d) {
                        if (i != r[o]) return !1
                      } else {
                        if (f ? i > r[o] : i < r[o]) return !1;
                        i != r[o] && (c = !1)
                      }
                  else if ("s" != l && "n" != l) {
                    if (f || o <= d) return !1;
                    c = !1, o--
                  } else {
                    if (o <= d || s < l != f) return !1;
                    c = !1
                  } else "s" != l && "n" != l && (c = !1, o--)
                }
              }
              var b = [],
                u = b.pop.bind(b);
              for (n = 1; n < r.length; n++) {
                var h = r[n];
                b.push(1 == h ? u() | u() : 2 == h ? u() & u() : h ? t(h, a) : !u())
              }
              return !!u()
            },
            r = (r, a, d) => {
              var f = r[a];
              return (a = Object.keys(f).reduce(((r, a) => !t(d, a) || r && !((t, r) => {
                t = e(t), r = e(r);
                for (var a = 0;;) {
                  if (a >= t.length) return a < r.length && "u" != (typeof r[a])[0];
                  var d = t[a],
                    f = (typeof d)[0];
                  if (a >= r.length) return "u" == f;
                  var n = r[a],
                    o = (typeof n)[0];
                  if (f != o) return "o" == f && "n" == o || "s" == o || "u" == f;
                  if ("o" != f && "u" != f && d != n) return d < n;
                  a++
                }
              })(r, a) ? r : a), 0)) && f[a]
            },
            a = (e => function(t, r, a, d) {
              var f = s.I(t);
              return f && f.then ? f.then(e.bind(e, t, s.S[t], r, a, d)) : e(t, s.S[t], r, a, d)
            })(((e, t, a, d, f) => {
              var n = t && s.o(t, a) && r(t, a, d);
              return n ? (e => (e.loaded = 1, e.get()))(n) : f()
            })),
            d = {},
            f = {
              62229: () => a("default", "react", [1, 18, 2, 0], (() => s.e(508).then((() => () => s(50508))))),
              95966: () => a("default", "@rsgweb/utils", [1, "workspace:^"], (() => Promise.all([s.e(1999), s.e(2688), s.e(8370), s.e(9623), s.e(7170)]).then((() => () => s(75811))))),
              9623: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => s.e(282).then((() => () => s(70282))))),
              16565: () => a("default", "graphql", [1, 16, 9, 0], (() => s.e(601).then((() => () => s(30601))))),
              2918: () => a("default", "@rsgweb/rockstar-account", [1, "workspace:^"], (() => Promise.all([s.e(1999), s.e(2688), s.e(8370), s.e(8384), s.e(5966), s.e(9623), s.e(7170), s.e(5456)]).then((() => () => s(93075))))),
              81788: () => a("default", "@rsgweb/locale-tools", [1, "workspace:^"], (() => Promise.all([s.e(1999), s.e(2688), s.e(1927), s.e(7605)]).then((() => () => s(89986))))),
              44853: () => a("default", "react-dom", [1, 18, 2, 0], (() => s.e(8577).then((() => () => s(78577))))),
              92440: () => a("default", "@rsgweb/tina", [1, "workspace:^"], (() => Promise.all([s.e(1999), s.e(7512), s.e(5966), s.e(600), s.e(819)]).then((() => () => s(52437))))),
              90660: () => a("default", "framer-motion", [1, 10, 12, 18], (() => s.e(8385).then((() => () => s(58385))))),
              22738: () => a("default", "react-intersection-observer", [1, 9, 10, 3], (() => s.e(2117).then((() => () => s(44498))))),
              57145: () => a("default", "prop-types", [1, 15, 8, 1], (() => s.e(5796).then((() => () => s(5796))))),
              2765: () => a("default", "focus-trap-react", [1, 10, 2, 3], (() => s.e(6404).then((() => () => s(86404))))),
              82849: () => a("default", "framer-motion", [1, 10, 12, 18], (() => s.e(8242).then((() => () => s(58242))))),
              84590: () => a("default", "@rsgweb/modules-core-hero", [1, "workspace:^"], (() => s.e(3565).then((() => () => s(86067))))),
              87330: () => a("default", "@rsgweb/modules-core-highlights", [1, "workspace:^"], (() => Promise.all([s.e(2647), s.e(570)]).then((() => () => s(78189))))),
              10066: () => a("default", "@rsgweb/intl", [1, "workspace:^"], (() => s.e(7924).then((() => () => s(37924))))),
              87052: () => a("default", "framer-motion", [1, 10, 12, 18], (() => s.e(4730).then((() => () => s(74730)))))
            },
            n = {
              600: [44853],
              2002: [2765, 82849, 84590, 87330],
              2229: [62229],
              2440: [92440],
              2491: [90660],
              2647: [87052],
              2738: [22738],
              4281: [2918, 81788],
              5861: [10066],
              5966: [95966],
              7145: [57145],
              7170: [16565],
              9623: [9623]
            },
            o = {};
          s.f.consumes = (e, t) => {
            s.o(n, e) && n[e].forEach((e => {
              if (s.o(d, e)) return t.push(d[e]);
              if (!o[e]) {
                var r = t => {
                  d[e] = 0, s.m[e] = r => {
                    delete s.c[e], r.exports = t()
                  }
                };
                o[e] = !0;
                var a = t => {
                  delete d[e], s.m[e] = r => {
                    throw delete s.c[e], t
                  }
                };
                try {
                  var n = f[e]();
                  n.then ? t.push(d[e] = n.then(r).catch(a)) : r(n)
                } catch (e) {
                  a(e)
                }
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              8106: 0
            };
            s.f.miniCss = (t, r) => {
              e[t] ? r.push(e[t]) : 0 !== e[t] && {
                819: 1,
                2002: 1,
                2647: 1,
                3200: 1,
                3313: 1,
                3565: 1,
                4238: 1,
                5861: 1,
                6034: 1,
                7196: 1
              } [t] && r.push(e[t] = (e => new Promise(((t, r) => {
                var a = s.miniCssF(e),
                  d = s.p + a;
                if (((e, t) => {
                    for (var r = document.getElementsByTagName("link"), a = 0; a < r.length; a++) {
                      var d = (n = r[a]).getAttribute("data-href") || n.getAttribute("href");
                      if ("stylesheet" === n.rel && (d === e || d === t)) return n
                    }
                    var f = document.getElementsByTagName("style");
                    for (a = 0; a < f.length; a++) {
                      var n;
                      if ((d = (n = f[a]).getAttribute("data-href")) === e || d === t) return n
                    }
                  })(a, d)) return t();
                ((e, t, r, a, d) => {
                  var f = document.createElement("link");
                  f.rel = "stylesheet", f.type = "text/css", f.onerror = f.onload = r => {
                    if (f.onerror = f.onload = null, "load" === r.type) a();
                    else {
                      var n = r && ("load" === r.type ? "missing" : r.type),
                        o = r && r.target && r.target.href || t,
                        c = new Error("Loading CSS chunk " + e + " failed.\n(" + o + ")");
                      c.code = "CSS_CHUNK_LOAD_FAILED", c.type = n, c.request = o, f.parentNode && f.parentNode.removeChild(f), d(c)
                    }
                  }, f.href = t, document.head.appendChild(f)
                })(e, d, 0, t, r)
              })))(t).then((() => {
                e[t] = 0
              }), (r => {
                throw delete e[t], r
              })))
            }
          }
        })(), (() => {
          var e = {
            8106: 0
          };
          s.f.j = (t, r) => {
            var a = s.o(e, t) ? e[t] : void 0;
            if (0 !== a)
              if (a) r.push(a[2]);
              else if (/^(2(229|440|647|738)|4281|5966|7145|9623)$/.test(t)) e[t] = 0;
            else {
              var d = new Promise(((r, d) => a = e[t] = [r, d]));
              r.push(a[2] = d);
              var f = s.p + s.u(t),
                n = new Error;
              s.l(f, (r => {
                if (s.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
                  var d = r && ("load" === r.type ? "missing" : r.type),
                    f = r && r.target && r.target.src;
                  n.message = "Loading chunk " + t + " failed.\n(" + d + ": " + f + ")", n.name = "ChunkLoadError", n.type = d, n.request = f, a[1](n)
                }
              }), "chunk-" + t, t)
            }
          };
          var t = (t, r) => {
              var a, d, f = r[0],
                n = r[1],
                o = r[2],
                c = 0;
              if (f.some((t => 0 !== e[t]))) {
                for (a in n) s.o(n, a) && (s.m[a] = n[a]);
                o && o(s)
              }
              for (t && t(r); c < f.length; c++) d = f[c], s.o(e, d) && e[d] && e[d][0](), e[d] = 0
            },
            r = self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), s.nc = void 0, s(23787), s(58639)
      })())
    }
  }
}));