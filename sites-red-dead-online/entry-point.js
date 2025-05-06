! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "062e3fd4-ef60-465b-87a2-f69b09c42756", e._sentryDebugIdIdentifier = "sentry-dbid-062e3fd4-ef60-465b-87a2-f69b09c42756")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-red-dead-online",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/modules-core-newswire-article", "@rockstargames/modules-core-videoplayer"], (function(e, a) {
  var t = {},
    r = {};
  return Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      Object.keys(e).forEach((function(a) {
        t[a] = e[a]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(a) {
        r[a] = e[a]
      }))
    }],
    execute: function() {
      e((() => {
        var e, f, d, c, n, o, b = {
            24075: (e, a, t) => {
              (0, t(47387).w)(1)
            },
            47387: (e, a, t) => {
              const r = t(13099).y;
              a.w = function(e) {
                if (e || (e = 1), !t.y.meta || !t.y.meta.url) throw console.error("__system_context__", t.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                t.p = r(t.y.meta.url, e)
              }
            },
            45408: (e, a, t) => {
              t(24075)
            },
            13099: (e, a, t) => {
              a.y = function(e, a) {
                var t = document.createElement("a");
                t.href = e;
                for (var r = "/" === t.pathname[0] ? t.pathname : "/" + t.pathname, f = 0, d = r.length; f !== a && d >= 0;) "/" === r[--d] && f++;
                if (f !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + f + ") in the URL path " + e);
                var c = r.slice(0, d + 1);
                return t.protocol + "//" + t.host + c
              };
              Number.isInteger
            },
            82021: (e, a, t) => {
              "use strict";
              var r = {
                  "./index": () => Promise.all([t.e(8481), t.e(3681), t.e(6102), t.e(2229), t.e(6682), t.e(1179), t.e(7145), t.e(8155)]).then((() => () => t(38155)))
                },
                f = (e, a) => (t.R = a, a = t.o(r, e) ? r[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), t.R = void 0, a),
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
            66819: e => {
              "use strict";
              e.exports = t
            },
            25136: e => {
              "use strict";
              e.exports = r
            }
          },
          i = {};

        function s(e) {
          var a = i[e];
          if (void 0 !== a) return a.exports;
          var t = i[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return b[e].call(t.exports, t, t.exports, s), t.loaded = !0, t.exports
        }
        return s.m = b, s.c = i, s.y = a, s.amdO = {}, s.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return s.d(a, {
            a
          }), a
        }, f = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, s.t = function(a, t) {
          if (1 & t && (a = this(a)), 8 & t) return a;
          if ("object" == typeof a && a) {
            if (4 & t && a.__esModule) return a;
            if (16 & t && "function" == typeof a.then) return a
          }
          var r = Object.create(null);
          s.r(r);
          var d = {};
          e = e || [null, f({}), f([]), f(f)];
          for (var c = 2 & t && a;
            "object" == typeof c && !~e.indexOf(c); c = f(c)) Object.getOwnPropertyNames(c).forEach((e => d[e] = () => a[e]));
          return d.default = () => a, s.d(r, d), r
        }, s.d = (e, a) => {
          for (var t in a) s.o(a, t) && !s.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: a[t]
          })
        }, s.f = {}, s.e = e => Promise.all(Object.keys(s.f).reduce(((a, t) => (s.f[t](e, a), a)), [])), s.u = e => "js/" + {
          131: "753a26a69589efa6289ce2873dde171d",
          278: "b22cef3b4d17a8824c9f1881e77172ad",
          299: "9760d93cc653b3272a52889e1fa71405",
          314: "6c330f12d19ac9fd273895ac766a5cb9",
          662: "da43924fa0df4a68fd62eac0b9516b06",
          721: "93b929e41dd1f896b82969a4796483df",
          824: "7a59070fc7f2b5b4d0c73faffca82dbd",
          907: "7ed07e4ae60feaf3d5cae7399cfa5e92",
          920: "bbbcdaf37ac9bb68f8adecd1882ed74f",
          1054: "1249b5ccd3826ace6bea0ebd4218385d",
          1179: "d28a0a923f52f9094631afe6340c369a",
          1242: "7b3583ec362b8e6bf0cdcf0d5d39a621",
          1673: "851fb961692163ab18f0751acf435f64",
          1822: "b943fb069437f9a978ff89cb63f556d8",
          1868: "90a8a9ba03ee8c9270b83da853af8e49",
          2024: "f2261151f46d161d9f33956cf04ece07",
          2156: "a166f390c658c9d3f2630d6a9824b524",
          2171: "f379422a63feb4c773b66c660e7b2023",
          2221: "f9649334bc87142c1d683672737371ab",
          2229: "6078f3faa0b6603161b40f1628b60c56",
          2243: "a75d55a2de1ef2eb89a064224ac476db",
          2324: "a0e0bab0ff9db0e12cbda7c5926eac0a",
          2347: "6393c927734b5e989b474b7a17e51ea2",
          2365: "10d661de10350ac2f9acc8f7a27223a4",
          2398: "b2bbac55ed122af41b8fa00b9ee4d6c0",
          2466: "a91cb017b275b339ceef7c653185ff1e",
          2642: "fc6af29c5c35f3e2290b79a7a6955783",
          2678: "e461813d0b434559df5acf2de3b7c500",
          2772: "b6cf2bb14101ea0306a6bfc04a1406d6",
          2817: "55d166ca62775b1351c001a8bcf8ed74",
          2864: "5431500dc5086f36ab9a0f8463715578",
          3034: "c27c6ef194b20376cd0d4a69f2d7f477",
          3197: "d8879b72ef928244b9672f0a5967f083",
          3343: "84cb9ba7f5270800d2ac264ff5f202c4",
          3370: "c2b865bbe8556fac537b7f9fc9a5c337",
          3447: "767690573ecfaf74b6312822f9e76487",
          3475: "2b94f0171b886d1a1dd14ec8e4423b12",
          3486: "fcc1dece97331955644d535b3fa75d20",
          3681: "dadbf73815928f6d42658c0388d18f19",
          3697: "1fae67572b5de6b94399783b790253b6",
          3885: "bf590996a0fd7eb986504bc765fb687f",
          3941: "3e4b39e9947a4e297fca5a4da94b5969",
          4011: "cdf3e3f3045e0cfbdbb89f02b23769b8",
          4018: "085ffed9e09e3d59d52fd0c54ffe8e3d",
          4054: "ea86d347298b1f119af917738ab3ed19",
          4528: "638d48e67a7d9dc616a7e06c5a48faed",
          4621: "fc9b9b43cbcb29c5e06caa3a73e54ac6",
          4700: "2a42b29cac39439ed96f851a256a7f6b",
          4710: "ac2362c6d0601f521b60cb49a70cb7af",
          4731: "8d4f3aa70046540c83c9644e25309d62",
          4781: "b323d29df20aa0f4d95bcfdcf1607105",
          4799: "6b47ff7e7cf151b532595f67a20818fa",
          4851: "4a540f3b85f5d35597f3d1d84d8164e7",
          4861: "3d2297925e1cf04fb189a83d57407078",
          4913: "1673f2014421971650a58abfd695449c",
          5018: "cf6327e5b1c2cdba412b2e9bd537ca8a",
          5233: "eb216aaff41dffb02dda9080a008f9c0",
          5254: "f9c0260382253a19dc82b27e9e907374",
          5259: "c02083de79b6f5f5f60bee3d9c743c64",
          5530: "2c975a7b068a8ceaf7dd7a6b6c33d570",
          5639: "ac49383f1d25a931761718e1cd599d0f",
          5663: "9bd08476f9bac417c043fd3f5c4e5c75",
          5742: "19ca1fca0381253cee45081e15ec9dd8",
          5830: "c81ebbf3a012308aedb3cce62d71f328",
          5832: "966be34bfe7221621cf83be1b145a953",
          6102: "739a7ca4a93e6f283674f4a23a8be886",
          6267: "215f39c90719371a9e53ec9d06079eea",
          6280: "c76c3bc6f70f412da976c1b21f66f164",
          6285: "389b81b014cc78327a4e22c2c530c6cc",
          6361: "098c6eb54c267b0347e9601c3872b8ab",
          6664: "66492bb699040faa4d9603d883f0b438",
          6682: "680c70b725ed40b5f66723653f2806bf",
          6879: "ad8f51affac059d9fc1d854e03ac1cf8",
          6891: "ad4c0639e0460716009c9d1ece668a87",
          6997: "0d53c77d41b7fe0559f773a523dee9e2",
          7010: "c960d95dde6f25e642ffc5f9870857fc",
          7073: "67ffb0edf732903e2e2581ab25304bfa",
          7145: "d3cc9515d8197d3602e685ada13fc8e1",
          7436: "38595f5ff283968a8e7bf9f715a11bfc",
          7452: "0768340c44661c26e37e3c5f2c705685",
          7453: "357002078493b7ba0b51690ce7bf37a4",
          7970: "ee8073a421afb24526aaf7b1827d4e2c",
          8155: "ce9c0f53f191c24300029acb92b23f92",
          8272: "ccbf228aa09f8dc35b1a3ac1f846a52e",
          8391: "99f20982a77ee9bccd79b3308ef713f4",
          8481: "a11e4b1c17e8d0c4865fd2918643cd1c",
          8755: "f832c11f1988451fd29856090c656dde",
          8880: "32323956a14ba0d0467fc2643019578d",
          8970: "ab44862c1cdad331c5e13cca569c2900",
          9022: "6b98464c4eaef69982215e51a4666e72",
          9028: "fae231e5c868c906104b0a670968bf1f",
          9126: "393922320c20773adca2fb92d48da43f",
          9323: "a56f5f0e99d6ede256b027c7f5239df5",
          9377: "389eb75686dbc2f570646cf773e2bd3d",
          9615: "5fdb74f3015db5edbe8c44e58d277e27",
          9936: "9eeef1f88e53f484744d72f51f85a5d9",
          9943: "43cab94a110dde135456da261c09d056",
          9990: "8185cb3fb85c8a2a990234997d9fb37d"
        } [e] + ".js", s.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), s.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), d = {}, c = "@rockstargames/sites-red-dead-online:", s.l = (e, a, t, r) => {
          if (d[e]) d[e].push(a);
          else {
            var f, n;
            if (void 0 !== t)
              for (var o = document.getElementsByTagName("script"), b = 0; b < o.length; b++) {
                var i = o[b];
                if (i.getAttribute("src") == e || i.getAttribute("data-webpack") == c + t) {
                  f = i;
                  break
                }
              }
            f || (n = !0, (f = document.createElement("script")).charset = "utf-8", f.timeout = 120, s.nc && f.setAttribute("nonce", s.nc), f.setAttribute("data-webpack", c + t), f.src = e), d[e] = [a];
            var l = (a, t) => {
                f.onerror = f.onload = null, clearTimeout(u);
                var r = d[e];
                if (delete d[e], f.parentNode && f.parentNode.removeChild(f), r && r.forEach((e => e(t))), a) return a(t)
              },
              u = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: f
              }), 12e4);
            f.onerror = l.bind(null, f.onerror), f.onload = l.bind(null, f.onload), n && document.head.appendChild(f)
          }
        }, s.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, s.nmd = e => (e.paths = [], e.children || (e.children = []), e), n = {
          8155: [9566, 31879]
        }, o = {
          9566: ["default", "./index", 66819],
          31879: ["default", "./index", 25136]
        }, s.f.remotes = (e, a) => {
          s.o(n, e) && n[e].forEach((e => {
            var t = s.R;
            t || (t = []);
            var r = o[e];
            if (!(t.indexOf(r) >= 0)) {
              if (t.push(r), r.p) return a.push(r.p);
              var f = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + r[1] + '" from ' + r[2]), s.m[e] = () => {
                    throw a
                  }, r.p = 0
                },
                d = (e, t, d, c, n, o) => {
                  try {
                    var b = e(t, d);
                    if (!b || !b.then) return n(b, c, o);
                    var i = b.then((e => n(e, c)), f);
                    if (!o) return i;
                    a.push(r.p = i)
                  } catch (e) {
                    f(e)
                  }
                },
                c = (e, a, f) => d(a.get, r[1], t, 0, n, f),
                n = a => {
                  r.p = 1, s.m[e] = e => {
                    e.exports = a()
                  }
                };
              d(s, r[2], 0, 0, ((e, a, t) => e ? d(s.I, r[0], 0, e, c, t) : f()), 1)
            }
          }))
        }, (() => {
          s.S = {};
          var e = {},
            a = {};
          s.I = (t, r) => {
            r || (r = []);
            var f = a[t];
            if (f || (f = a[t] = {}), !(r.indexOf(f) >= 0)) {
              if (r.push(f), e[t]) return e[t];
              s.o(s.S, t) || (s.S[t] = {});
              var d = s.S[t],
                c = "@rockstargames/sites-red-dead-online",
                n = (e, a, t, r) => {
                  var f = d[e] = d[e] || {},
                    n = f[a];
                  (!n || !n.loaded && (!r != !n.eager ? r : c > n.from)) && (f[a] = {
                    get: t,
                    from: c,
                    eager: !!r
                  })
                },
                o = e => {
                  var a = e => {
                    return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                    var a
                  };
                  try {
                    var f = s(e);
                    if (!f) return;
                    var d = e => e && e.init && e.init(s.S[t], r);
                    if (f.then) return b.push(f.then(d, a));
                    var c = d(f);
                    if (c && c.then) return b.push(c.catch(a))
                  } catch (e) {
                    a(e)
                  }
                },
                b = [];
              return "default" === t && (n("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([s.e(2024), s.e(2229), s.e(1673)]).then((() => () => s(85950))))), n("@rsgweb/modules-core-feedback", "1.0.0", (() => Promise.all([s.e(8481), s.e(3681), s.e(2229), s.e(6682), s.e(4781), s.e(1179), s.e(2772)]).then((() => () => s(74781))))), n("@rsgweb/utils", "1.0.0", (() => Promise.all([s.e(8481), s.e(2229), s.e(6682)]).then((() => () => s(17560))))), n("date-fns", "4.1.0", (() => s.e(920).then((() => () => s(60920))))), n("hammerjs", "2.0.8", (() => s.e(9323).then((() => () => s(29323))))), n("prop-types", "15.8.1", (() => s.e(2817).then((() => () => s(72817))))), n("react-focus-lock", "2.9.6", (() => Promise.all([s.e(2229), s.e(7145), s.e(9943)]).then((() => () => s(12324))))), n("react-router-dom", "6.17.0", (() => Promise.all([s.e(4018), s.e(2229)]).then((() => () => s(54018))))), n("react", "18.2.0", (() => s.e(3447).then((() => () => s(13447))))), o(66819), o(25136)), b.length ? e[t] = Promise.all(b).then((() => e[t] = 1)) : e[t] = 1
            }
          }
        })(), (() => {
          var e;
          s.g.importScripts && (e = s.g.location + "");
          var a = s.g.document;
          if (!e && a && (a.currentScript && (e = a.currentScript.src), !e)) {
            var t = a.getElementsByTagName("script");
            if (t.length)
              for (var r = t.length - 1; r > -1 && (!e || !/^http(s?):/.test(e));) e = t[r--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), s.p = e
        })(), (() => {
          var e = e => {
              var a = e => e.split(".").map((e => +e == e ? +e : e)),
                t = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                r = t[1] ? a(t[1]) : [];
              return t[2] && (r.length++, r.push.apply(r, a(t[2]))), t[3] && (r.push([]), r.push.apply(r, a(t[3]))), r
            },
            a = (t, r) => {
              if (0 in t) {
                r = e(r);
                var f = t[0],
                  d = f < 0;
                d && (f = -f - 1);
                for (var c = 0, n = 1, o = !0;; n++, c++) {
                  var b, i, s = n < t.length ? (typeof t[n])[0] : "";
                  if (c >= r.length || "o" == (i = (typeof(b = r[c]))[0])) return !o || ("u" == s ? n > f && !d : "" == s != d);
                  if ("u" == i) {
                    if (!o || "u" != s) return !1
                  } else if (o)
                    if (s == i)
                      if (n <= f) {
                        if (b != t[n]) return !1
                      } else {
                        if (d ? b > t[n] : b < t[n]) return !1;
                        b != t[n] && (o = !1)
                      }
                  else if ("s" != s && "n" != s) {
                    if (d || n <= f) return !1;
                    o = !1, n--
                  } else {
                    if (n <= f || i < s != d) return !1;
                    o = !1
                  } else "s" != s && "n" != s && (o = !1, n--)
                }
              }
              var l = [],
                u = l.pop.bind(l);
              for (c = 1; c < t.length; c++) {
                var p = t[c];
                l.push(1 == p ? u() | u() : 2 == p ? u() & u() : p ? a(p, r) : !u())
              }
              return !!u()
            },
            t = (t, r, f) => {
              var d = t[r];
              return (r = Object.keys(d).reduce(((t, r) => !a(f, r) || t && !((a, t) => {
                a = e(a), t = e(t);
                for (var r = 0;;) {
                  if (r >= a.length) return r < t.length && "u" != (typeof t[r])[0];
                  var f = a[r],
                    d = (typeof f)[0];
                  if (r >= t.length) return "u" == d;
                  var c = t[r],
                    n = (typeof c)[0];
                  if (d != n) return "o" == d && "n" == n || "s" == n || "u" == d;
                  if ("o" != d && "u" != d && f != c) return f < c;
                  r++
                }
              })(t, r) ? t : r), 0)) && d[r]
            },
            r = (e => function(a, t, r, f) {
              var d = s.I(a);
              return d && d.then ? d.then(e.bind(e, a, s.S[a], t, r, f)) : e(a, s.S[a], t, r, f)
            })(((e, a, r, f, d) => {
              var c = a && s.o(a, r) && t(a, r, f);
              return c ? (e => (e.loaded = 1, e.get()))(c) : d()
            })),
            f = {},
            d = {
              62229: () => r("default", "react", [1, 18, 2, 0], (() => s.e(3447).then((() => () => s(13447))))),
              9623: () => r("default", "react-router-dom", [1, 6, 11, 2], (() => s.e(4018).then((() => () => s(54018))))),
              30763: () => r("default", "date-fns", [1, 4, 1, 0], (() => s.e(920).then((() => () => s(60920))))),
              81788: () => r("default", "@rsgweb/locale-tools", [1, "workspace:^"], (() => Promise.all([s.e(2024), s.e(4054)]).then((() => () => s(85950))))),
              95966: () => r("default", "@rsgweb/utils", [1, "workspace:^"], (() => () => s(17560))),
              57145: () => r("default", "prop-types", [1, 15, 8, 1], (() => s.e(2817).then((() => () => s(72817))))),
              994: () => r("default", "@rsgweb/modules-core-feedback", [1, "workspace:^"], (() => s.e(4781).then((() => () => s(74781))))),
              4848: () => r("default", "hammerjs", [1, 2, 0, 8], (() => s.e(9323).then((() => () => s(29323))))),
              95945: () => r("default", "react-focus-lock", [1, 2, 9, 6], (() => s.e(2324).then((() => () => s(12324)))))
            },
            c = {
              1179: [30763, 81788, 95966],
              2229: [62229],
              6682: [9623],
              7145: [57145],
              8155: [994, 4848, 95945]
            },
            n = {};
          s.f.consumes = (e, a) => {
            s.o(c, e) && c[e].forEach((e => {
              if (s.o(f, e)) return a.push(f[e]);
              if (!n[e]) {
                var t = a => {
                  f[e] = 0, s.m[e] = t => {
                    delete s.c[e], t.exports = a()
                  }
                };
                n[e] = !0;
                var r = a => {
                  delete f[e], s.m[e] = t => {
                    throw delete s.c[e], a
                  }
                };
                try {
                  var c = d[e]();
                  c.then ? a.push(f[e] = c.then(t).catch(r)) : t(c)
                } catch (e) {
                  r(e)
                }
              }
            }))
          }
        })(), (() => {
          s.b = document.baseURI || self.location.href;
          var e = {
            129: 0
          };
          s.f.j = (a, t) => {
            var r = s.o(e, a) ? e[a] : void 0;
            if (0 !== r)
              if (r) t.push(r[2]);
              else if (/^(1179|2229|7145)$/.test(a)) e[a] = 0;
            else {
              var f = new Promise(((t, f) => r = e[a] = [t, f]));
              t.push(r[2] = f);
              var d = s.p + s.u(a),
                c = new Error;
              s.l(d, (t => {
                if (s.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
                  var f = t && ("load" === t.type ? "missing" : t.type),
                    d = t && t.target && t.target.src;
                  c.message = "Loading chunk " + a + " failed.\n(" + f + ": " + d + ")", c.name = "ChunkLoadError", c.type = f, c.request = d, r[1](c)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, t) => {
              var r, f, d = t[0],
                c = t[1],
                n = t[2],
                o = 0;
              if (d.some((a => 0 !== e[a]))) {
                for (r in c) s.o(c, r) && (s.m[r] = c[r]);
                n && n(s)
              }
              for (a && a(t); o < d.length; o++) f = d[o], s.o(e, f) && e[f] && e[f][0](), e[f] = 0
            },
            t = self.webpackChunk_rockstargames_sites_red_dead_online = self.webpackChunk_rockstargames_sites_red_dead_online || [];
          t.forEach(a.bind(null, 0)), t.push = a.bind(null, t.push.bind(t))
        })(), s.nc = void 0, s(45408), s(82021)
      })())
    }
  }
}));