! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "bfbdf604-76b0-4b57-bfa7-e25bc25c22a6", e._sentryDebugIdIdentifier = "sentry-dbid-bfbdf604-76b0-4b57-bfa7-e25bc25c22a6")
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
        var e, f, d, r, c, t, b = {
            24075: (e, a, f) => {
              (0, f(47387).w)(1)
            },
            47387: (e, a, f) => {
              const d = f(13099).y;
              a.w = function(e) {
                if (e || (e = 1), !f.y.meta || !f.y.meta.url) throw console.error("__system_context__", f.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                f.p = d(f.y.meta.url, e)
              }
            },
            45408: (e, a, f) => {
              f(24075)
            },
            13099: (e, a, f) => {
              a.y = function(e, a) {
                var f = document.createElement("a");
                f.href = e;
                for (var d = "/" === f.pathname[0] ? f.pathname : "/" + f.pathname, r = 0, c = d.length; r !== a && c >= 0;) "/" === d[--c] && r++;
                if (r !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + r + ") in the URL path " + e);
                var t = d.slice(0, c + 1);
                return f.protocol + "//" + f.host + t
              };
              Number.isInteger
            },
            58157: (e, a, f) => {
              "use strict";
              var d = {
                  "./bootstrap": () => f.e(5672).then((() => () => f(45672))),
                  "./index": () => Promise.all([f.e(8174), f.e(2229), f.e(9623), f.e(6188), f.e(5966), f.e(9010), f.e(3581), f.e(2918), f.e(2319), f.e(7118)]).then((() => () => f(77118))),
                  "./tina": () => Promise.all([f.e(2127), f.e(2229), f.e(6188), f.e(5966), f.e(4853), f.e(9010), f.e(7459)]).then((() => () => f(67459))),
                  "./tinaBlockTemplates": () => Promise.all([f.e(2127), f.e(2229), f.e(6188), f.e(5966), f.e(4853), f.e(9010), f.e(7459)]).then((() => () => f(67459)))
                },
                r = (e, a) => (f.R = a, a = f.o(d, e) ? d[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), f.R = void 0, a),
                c = (e, a) => {
                  if (f.S) {
                    var d = "default",
                      r = f.S[d];
                    if (r && r !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return f.S[d] = e, f.I(d, a)
                  }
                };
              f.d(a, {
                get: () => r,
                init: () => c
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
        }, f = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, n.t = function(a, d) {
          if (1 & d && (a = this(a)), 8 & d) return a;
          if ("object" == typeof a && a) {
            if (4 & d && a.__esModule) return a;
            if (16 & d && "function" == typeof a.then) return a
          }
          var r = Object.create(null);
          n.r(r);
          var c = {};
          e = e || [null, f({}), f([]), f(f)];
          for (var t = 2 & d && a;
            "object" == typeof t && !~e.indexOf(t); t = f(t)) Object.getOwnPropertyNames(t).forEach((e => c[e] = () => a[e]));
          return c.default = () => a, n.d(r, c), r
        }, n.d = (e, a) => {
          for (var f in a) n.o(a, f) && !n.o(e, f) && Object.defineProperty(e, f, {
            enumerable: !0,
            get: a[f]
          })
        }, n.f = {}, n.e = e => Promise.all(Object.keys(n.f).reduce(((a, f) => (n.f[f](e, a), a)), [])), n.u = e => "js/" + {
          131: "61e225254c02c2c7656daf4aff1a2bf0",
          278: "6c725c637629245979068b2764b9317f",
          299: "0ba13e6776d9ab488577be71cbbb1644",
          314: "c2b3b166c51844237d417bd3586ab849",
          391: "be486670dd99f6b7de562abc4ae788ec",
          662: "c4bb53afc72e1b6b7e35fac734753eae",
          721: "e9a4ac1ff3ec3daa20986fcb1312a80c",
          824: "1f6e6b185e913c85b3ec211eb6481d09",
          907: "0667b8dca2bb67ccfcd5c5610fb58277",
          1054: "1c88f43f806ff8d65113af9a0e2c2f04",
          1242: "d9078b133efff5fce7957c13a531226e",
          1247: "fa6679b575d049aed19d9cf1a142c715",
          1673: "5870dc906f0f5665e7e5b58109310743",
          1822: "0a181171e4553a5ad0c911221eedcbb6",
          1868: "e93d546158bb58fe39cae35529c0c477",
          2024: "a02bbb2f127de6eb64d8a79cf8170353",
          2127: "3c166108e524063a2473c0c8f1e37fba",
          2156: "eb38a2941335cc5049085cdf4dcd9869",
          2171: "554de8691ff5795c81785399da0f1b1b",
          2221: "083c7e057951a5a62b49ee15a0c9fe21",
          2229: "694e45c1bdc83f48f126dc7ace434947",
          2243: "2b3461fb586695ad75233fb5143ba507",
          2246: "ca687cb67279ac1c537f66e5b395541d",
          2319: "550d5323ccb505f27436098dbb35b330",
          2347: "8415b5b5b40232dc68bad0e296a8e0fe",
          2365: "9e630f7d4cb05ea73c61bc73565d56be",
          2398: "a561704fb6e0126471f51acd69dba56d",
          2466: "25cd5bf8d52394f31678f0b722dba6c1",
          2642: "fa064a33283bc3c25127fce8ec2ea14b",
          2678: "34a1faf88e1663b81e2cd33cd445eabb",
          2772: "cb7b22e32e074a08142056d42060e266",
          2864: "df37919424d3ea4934227884e6f00254",
          2918: "c48f222def00e0dc340c684a29fdcc11",
          3034: "2012467d544677a517248d541238ce0f",
          3182: "9135350915e5fee9949b9b537c5ddba9",
          3197: "54b778bb2a3c9ac239d997bf9248f9e7",
          3343: "68c3deaf9f9e8e5980ccc47eaa84e6be",
          3370: "27fcef7b3ad396aa56052dc97030deda",
          3379: "f43f7267bfec0df41bd35d7214862788",
          3447: "ee249e8ff084611f73585138fbbfc247",
          3475: "96a57095cb2c4640044e231a9e988be7",
          3486: "3b8b92359cce65e8c5c637cab97c478d",
          3581: "4038d09d8a5a6cab7676fb396cfb6c60",
          3697: "aa2655e10ac059e405773848c2543d2f",
          3855: "cb5cfa8d211ceb794ca40820a45498c9",
          3885: "34fb5b4c6625eca275f702d20557a9bf",
          3941: "2dbd4026eeb65f266f4300ef8894a6e1",
          4011: "f494198d43a51078e1ac93d68c8c8932",
          4018: "50532eebda94e3f069cc5e649bc3e63b",
          4054: "38841d4c6d13d041310c75aa4ba9f0e7",
          4528: "80b8e91a393fac0fc092569a46fe8648",
          4621: "cffde82b412c65433bf7925374969387",
          4700: "1ce86492f76d453a64a787a0e4e88428",
          4710: "781088579d9a0f0b1807370c9efb85e1",
          4731: "05ac0354d8a7f86127c262e253a0e8b6",
          4799: "017d2a6ae35d4dd76458609356469994",
          4851: "98b543dd57a4607ecde9ca06c9dfcb6a",
          4853: "24fd39970cceb3912231faa6d0c8f8c0",
          4861: "aa795745a764c29fff9a946a6b65a42b",
          4869: "138f904dee58b95b1d0ff8ff17375c71",
          4913: "27f245cf13154de88e52c104c74536de",
          5018: "15a513a9440b79b7f4863defaaa3e27f",
          5233: "92b566eebd21beb3885e31437df7a215",
          5254: "cb07de59a5aa75499c0dc00047990cba",
          5259: "09d05bc72f700e9a75af87350c88751d",
          5440: "008ed41df75861147a94c3f5a3d84599",
          5530: "6b5e4b347bcb0dc1c8dcebecaee82d4e",
          5639: "404eca88be7f44f7ca428e1cd233104b",
          5663: "7c4a16b0ceb0d246178d3458c93a8274",
          5672: "ce690f843d6dd77ae8675915aaf1940c",
          5742: "5ad06fdaad48aadfb2ae63e56e1a6824",
          5771: "25b3e982690d77f0e7012ab065ad0d59",
          5794: "8b87b537c7e9672f9d7e78540b18ca91",
          5830: "fd93179439f450975856242cbc84235b",
          5832: "8531031837d76bfc1f7b1de3d1606f11",
          5966: "b291de7cefd353995511032eb1a82a4e",
          6022: "169d2464cf4b93fa0302cbcf0fb88d3d",
          6188: "fbc5b6848dcceb32ea5990c581a10150",
          6267: "eaa862f53bfa668afe2db3179ab595c0",
          6280: "12a99ae9c9654e48e58d1f28d0086d5d",
          6285: "0fdcf066bb8100b1370e38a39594f6d2",
          6349: "05673a2868a186cc27f00bf0263875b8",
          6361: "4bf06bb6d1131e6c6322981bc75534f5",
          6403: "5b6a1cad5265bac04deafadeffc5d23a",
          6664: "4889b862dc92b4418c5ccfb09e701551",
          6879: "d5dc79d2079fd14f1543f2fcabe6ce42",
          6891: "f0eb60e67c79810889b6bfa64151f9fa",
          6892: "2280f229485624ace0150fe6c3cfcb22",
          6997: "60b1768d3781c81d6aa2a1e12358a091",
          7010: "f64105151f3768208d453f75489fba74",
          7073: "6a8d2e82fb00b8dc5750a5c811548f63",
          7118: "baf666d2be65baf9b8efcc776c6c3251",
          7131: "6cd2196cef9c440bacddba26d7f8d578",
          7250: "0c79af0bc78b6eb9c8751ac6467134f0",
          7436: "22c1f20eb5ec0b7246eba4bc3d695ced",
          7452: "ac7fb8ff310f7db979419d8b81692822",
          7453: "e171c067858b1cf348e201cadf4c593d",
          7459: "9b73fc199840394356107a69b28f1f9e",
          7868: "9227560f603e964b6ee28ada5d117a4c",
          7970: "910d83d7164f4e628e18d3586faa1e5d",
          8174: "98edbfc2ffc109c28989350def7966e8",
          8272: "4a0f1330434bd05f0e1262d84581ff5c",
          8391: "820b52dcedd253f7d3199897bc4d54ba",
          8691: "65ce11a16a8b5b582c773168a253b384",
          8730: "1bf91e8448ddf444a138b9cf571b70b6",
          8755: "e66de4cfafbe06e9f2ea574b03ed8f0e",
          8880: "f89724b4d0b7d35872c27bc8702ad19f",
          8970: "cabf3e06bb97118b30a8506852ce7012",
          9005: "72e4c9af03011a4a7af11b5ed527171c",
          9010: "4b5be9bcd3964cf1e944111149aa580e",
          9022: "f88f7fdfa12984b813f5c360011af2e5",
          9028: "76b10b1aeb4f44f8aef2b81af462a324",
          9126: "a1c34c6f4bc5b5eb665d104f5621e338",
          9323: "a0d3e9119e396e6150badb3816775387",
          9377: "4c6103bdca3af810540502b53d7412e0",
          9512: "3a0b43bc9e00a0a0d6335db57d5dc6ff",
          9615: "2ffc33612620e4e97d002e5f8497a649",
          9623: "fb134a5684b6756100e88f7db34936fc",
          9936: "94a5e2f35ba423b23d6c8b840d32e4c3",
          9990: "544f808f7866a03c18bbd7cd2aa9ff80"
        } [e] + ".js", n.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), n.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), d = {}, r = "@rockstargames/modules-core-videoplayer:", n.l = (e, a, f, c) => {
          if (d[e]) d[e].push(a);
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
            t || (b = !0, (t = document.createElement("script")).charset = "utf-8", t.timeout = 120, n.nc && t.setAttribute("nonce", n.nc), t.setAttribute("data-webpack", r + f), t.src = e), d[e] = [a];
            var s = (a, f) => {
                t.onerror = t.onload = null, clearTimeout(u);
                var r = d[e];
                if (delete d[e], t.parentNode && t.parentNode.removeChild(t), r && r.forEach((e => e(f))), a) return a(f)
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
        }, n.nmd = e => (e.paths = [], e.children || (e.children = []), e), c = {}, t = {}, n.f.remotes = (e, a) => {
          n.o(c, e) && c[e].forEach((e => {
            var f = n.R;
            f || (f = []);
            var d = t[e];
            if (!(f.indexOf(d) >= 0)) {
              if (f.push(d), d.p) return a.push(d.p);
              var r = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + d[1] + '" from ' + d[2]), n.m[e] = () => {
                    throw a
                  }, d.p = 0
                },
                c = (e, f, c, t, b, o) => {
                  try {
                    var n = e(f, c);
                    if (!n || !n.then) return b(n, t, o);
                    var l = n.then((e => b(e, t)), r);
                    if (!o) return l;
                    a.push(d.p = l)
                  } catch (e) {
                    r(e)
                  }
                },
                b = (e, a, r) => c(a.get, d[1], f, 0, o, r),
                o = a => {
                  d.p = 1, n.m[e] = e => {
                    e.exports = a()
                  }
                };
              c(n, d[2], 0, 0, ((e, a, f) => e ? c(n.I, d[0], 0, e, b, f) : r()), 1)
            }
          }))
        }, (() => {
          n.S = {};
          var e = {},
            a = {};
          n.I = (f, d) => {
            d || (d = []);
            var r = a[f];
            if (r || (r = a[f] = {}), !(d.indexOf(r) >= 0)) {
              if (d.push(r), e[f]) return e[f];
              n.o(n.S, f) || (n.S[f] = {});
              var c = n.S[f],
                t = "@rockstargames/modules-core-videoplayer",
                b = (e, a, f, d) => {
                  var r = c[e] = c[e] || {},
                    b = r[a];
                  (!b || !b.loaded && (!d != !b.eager ? d : t > b.from)) && (r[a] = {
                    get: f,
                    from: t,
                    eager: !!d
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
              for (var d = f.length - 1; d > -1 && (!e || !/^http(s?):/.test(e));) e = f[d--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), n.p = e
        })(), (() => {
          var e = e => {
              var a = e => e.split(".").map((e => +e == e ? +e : e)),
                f = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                d = f[1] ? a(f[1]) : [];
              return f[2] && (d.length++, d.push.apply(d, a(f[2]))), f[3] && (d.push([]), d.push.apply(d, a(f[3]))), d
            },
            a = (f, d) => {
              if (0 in f) {
                d = e(d);
                var r = f[0],
                  c = r < 0;
                c && (r = -r - 1);
                for (var t = 0, b = 1, o = !0;; b++, t++) {
                  var n, l, i = b < f.length ? (typeof f[b])[0] : "";
                  if (t >= d.length || "o" == (l = (typeof(n = d[t]))[0])) return !o || ("u" == i ? b > r && !c : "" == i != c);
                  if ("u" == l) {
                    if (!o || "u" != i) return !1
                  } else if (o)
                    if (i == l)
                      if (b <= r) {
                        if (n != f[b]) return !1
                      } else {
                        if (c ? n > f[b] : n < f[b]) return !1;
                        n != f[b] && (o = !1)
                      }
                  else if ("s" != i && "n" != i) {
                    if (c || b <= r) return !1;
                    o = !1, b--
                  } else {
                    if (b <= r || l < i != c) return !1;
                    o = !1
                  } else "s" != i && "n" != i && (o = !1, b--)
                }
              }
              var s = [],
                u = s.pop.bind(s);
              for (t = 1; t < f.length; t++) {
                var p = f[t];
                s.push(1 == p ? u() | u() : 2 == p ? u() & u() : p ? a(p, d) : !u())
              }
              return !!u()
            },
            f = (f, d, r) => {
              var c = f[d];
              return (d = Object.keys(c).reduce(((f, d) => !a(r, d) || f && !((a, f) => {
                a = e(a), f = e(f);
                for (var d = 0;;) {
                  if (d >= a.length) return d < f.length && "u" != (typeof f[d])[0];
                  var r = a[d],
                    c = (typeof r)[0];
                  if (d >= f.length) return "u" == c;
                  var t = f[d],
                    b = (typeof t)[0];
                  if (c != b) return "o" == c && "n" == b || "s" == b || "u" == c;
                  if ("o" != c && "u" != c && r != t) return r < t;
                  d++
                }
              })(f, d) ? f : d), 0)) && c[d]
            },
            d = (e => function(a, f, d, r) {
              var c = n.I(a);
              return c && c.then ? c.then(e.bind(e, a, n.S[a], f, d, r)) : e(a, n.S[a], f, d, r)
            })(((e, a, d, r, c) => {
              var t = a && n.o(a, d) && f(a, d, r);
              return t ? (e => (e.loaded = 1, e.get()))(t) : c()
            })),
            r = {},
            c = {
              62229: () => d("default", "react", [1, 18, 2, 0], (() => n.e(3447).then((() => () => n(13447))))),
              9623: () => d("default", "react-router-dom", [1, 6, 11, 2], (() => n.e(4018).then((() => () => n(54018))))),
              16188: () => d("default", "lodash", [1, 4, 17, 21], (() => n.e(7868).then((() => () => n(17868))))),
              95966: () => d("default", "@rsgweb/utils", [1, "workspace:^"], (() => Promise.all([n.e(3182), n.e(9623), n.e(6188), n.e(2246)]).then((() => () => n(48267))))),
              81569: () => d("default", "uuid", [1, 9, 0, 0], (() => n.e(6022).then((() => () => n(46022))))),
              81788: () => d("default", "@rsgweb/locale-tools", [1, "workspace:^"], (() => Promise.all([n.e(2024), n.e(4054)]).then((() => () => n(85950))))),
              13581: () => d("default", "gsap", [1, "workspace:^"], (() => n.e(3379).then((() => () => n(33379))))),
              2918: () => d("default", "@rsgweb/rockstar-account", [1, "workspace:^"], (() => Promise.all([n.e(3182), n.e(6403), n.e(9623), n.e(6188), n.e(2246), n.e(2772)]).then((() => () => n(2772))))),
              4848: () => d("default", "hammerjs", [1, 2, 0, 8], (() => n.e(9323).then((() => () => n(29323))))),
              27654: () => d("default", "@gsap/react", [1, 2, 1, 0], (() => n.e(4869).then((() => () => n(27250))))),
              47224: () => d("default", "@rsgweb/modules-core-agegate", [1, "workspace:^"], (() => Promise.all([n.e(1247), n.e(9512)]).then((() => () => n(37131))))),
              75971: () => d("default", "react-popper", [1, 2, 3, 0], (() => Promise.all([n.e(4853), n.e(9005), n.e(8730)]).then((() => () => n(76349))))),
              44853: () => d("default", "react-dom", [1, 18, 2, 0], (() => n.e(5794).then((() => () => n(5794))))),
              16565: () => d("default", "graphql", [1, 16, 9, 0], (() => n.e(5440).then((() => () => n(55440))))),
              9005: () => d("default", "@popperjs/core", [1, 2, 11, 7], (() => n.e(8691).then((() => () => n(48691)))))
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
                var d = a => {
                  delete r[e], n.m[e] = f => {
                    throw delete n.c[e], a
                  }
                };
                try {
                  var t = c[e]();
                  t.then ? a.push(r[e] = t.then(f).catch(d)) : f(t)
                } catch (e) {
                  d(e)
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
            var d = n.o(e, a) ? e[a] : void 0;
            if (0 !== d)
              if (d) f.push(d[2]);
              else if (/^(9(005|010|623)|2229|2918|3581|4853|5966|6188)$/.test(a)) e[a] = 0;
            else {
              var r = new Promise(((f, r) => d = e[a] = [f, r]));
              f.push(d[2] = r);
              var c = n.p + n.u(a),
                t = new Error;
              n.l(c, (f => {
                if (n.o(e, a) && (0 !== (d = e[a]) && (e[a] = void 0), d)) {
                  var r = f && ("load" === f.type ? "missing" : f.type),
                    c = f && f.target && f.target.src;
                  t.message = "Loading chunk " + a + " failed.\n(" + r + ": " + c + ")", t.name = "ChunkLoadError", t.type = r, t.request = c, d[1](t)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, f) => {
              var d, r, c = f[0],
                t = f[1],
                b = f[2],
                o = 0;
              if (c.some((a => 0 !== e[a]))) {
                for (d in t) n.o(t, d) && (n.m[d] = t[d]);
                b && b(n)
              }
              for (a && a(f); o < c.length; o++) r = c[o], n.o(e, r) && e[r] && e[r][0](), e[r] = 0
            },
            f = self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || [];
          f.forEach(a.bind(null, 0)), f.push = a.bind(null, f.push.bind(f))
        })(), n.nc = void 0, n(45408), n(58157)
      })())
    }
  }
}));