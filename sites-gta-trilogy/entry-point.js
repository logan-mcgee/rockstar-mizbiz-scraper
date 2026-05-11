try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "10bddce4-352d-45a1-b2a4-3823db6e340f", e._sentryDebugIdIdentifier = "sentry-dbid-10bddce4-352d-45a1-b2a4-3823db6e340f")
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
      t.default = e.default || e, Object.keys(e).forEach(function(a) {
        t[a] = e[a]
      })
    }],
    execute: function() {
      e((() => {
        var e, r, d, f, c, n, o = {
            28419(e, a, t) {
              (0, t(17411).w)(1)
            },
            17411(e, a, t) {
              const r = t(77027).y;
              a.w = function(e) {
                if (e || (e = 1), !t.y.meta || !t.y.meta.url) throw console.error("__system_context__", t.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                t.p = r(t.y.meta.url, e)
              }
            },
            93032(e, a, t) {
              t(28419)
            },
            77027(e, a, t) {
              a.y = function(e, a) {
                var t = document.createElement("a");
                t.href = e;
                for (var r = "/" === t.pathname[0] ? t.pathname : "/" + t.pathname, d = 0, f = r.length; d !== a && f >= 0;) "/" === r[--f] && d++;
                if (d !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + d + ") in the URL path " + e);
                var c = r.slice(0, f + 1);
                return t.protocol + "//" + t.host + c
              };
              Number.isInteger
            },
            85819(e, a, t) {
              "use strict";
              var r = {
                  "./index": () => Promise.all([t.e(6930), t.e(4656), t.e(1127), t.e(7301), t.e(1961)]).then(() => () => t(31961))
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
            25136(e) {
              "use strict";
              e.exports = t
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
            ("object" == typeof c || "function" == typeof c) && !~e.indexOf(c); c = r(c)) Object.getOwnPropertyNames(c).forEach(e => f[e] = () => a[e]);
          return f.default = () => a, i.d(d, f), d
        }, i.d = (e, a) => {
          for (var t in a) i.o(a, t) && !i.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: a[t]
          })
        }, i.f = {}, i.e = e => Promise.all(Object.keys(i.f).reduce((a, t) => (i.f[t](e, a), a), [])), i.u = e => "js/" + {
          131: "74543ef6c2bc72468222f71bf564c713",
          278: "0cf47c52950b71ee36c968a7eb0874f2",
          299: "60c0a686429fdf90488cc5b66426a2f4",
          314: "fc4c5fdfd327564879df60e140e2e076",
          439: "6d00e1f846172f4a8edfe7627fe73cd3",
          637: "fee92b51f3e66e870e5b24e8ffdab0af",
          662: "2212ac9d9390b559b86ff75b7ecbadb4",
          824: "2b6966e52131238e8cab85815fff4dc2",
          907: "ef56ff68ba1c9874b6e26f3bf3264eb9",
          1054: "a4c47c419197cdf66b11918eab76283f",
          1098: "63248f80782392e9d9d990163fccac61",
          1242: "b70837d932408a2a15d9d1397280268d",
          1795: "4cd0aec8c06fabc421f8da43f6a6e293",
          1822: "7f9b6c44f8575c1c55b84e47bc7be72e",
          1837: "2cf6375e93be346bea52c3f5e23a2b26",
          1868: "fb52136447db175d8e11b38e31c522a5",
          1961: "8074208f6c0361316a006222ed63fcda",
          2156: "77b4ae679b6255fa6946ae1020cc64db",
          2171: "c3522c6fa7e5835c623027c61acfc975",
          2221: "0566a76dc29864751714a14aad39b8a2",
          2243: "4333f3273cacf6b38926b93908e5d88a",
          2295: "20bbc3e0627bff9a4aed938cb1705674",
          2347: "58b4509b34e76851b4486cb202bbbc7a",
          2365: "3d7a9e3027ba8b855cf7f08d1d179c0c",
          2398: "ba0f4d66a2b6cd902686ecc424d917b5",
          2466: "a5cc6a369a0c46f4b9685e6a7005b713",
          2562: "8046e378da98a7afd8ba9ec6579aff62",
          2642: "6e2bb2da5328db8494990c51c5f7799e",
          2678: "9bdf15a068ca06d39e3977859395b634",
          2864: "c21d22d8c180d3a5bebb0c2aff48f43c",
          3004: "8c520cc40b7520adaf049be9023894e5",
          3034: "5133eaa5fa94eb3559abffe6bff1eca3",
          3197: "25da4199441f10e3fccae5ea66af5ad8",
          3343: "7f8a670ece4958f022b61eb776dc9144",
          3370: "811c7ae5646931278de25cc9b0ad0dec",
          3475: "ac16b3ad93b4f7619155c6c47e2d4b92",
          3486: "2476345c96fd15901a7cc525e09b726f",
          3697: "09ad25f13b7073c5e3d24354c28be36c",
          3885: "4ede8ee84e2a01675e993fe2b867cd3d",
          3941: "cd29b7d96fc93b4f5e2aed5a531b8a49",
          4011: "697aa3a5f0efd814a8076cefa638d899",
          4218: "83f0528fdfee1cf7780c850ca1dddf84",
          4528: "9b00198c009aeac03c1849d6c1991aba",
          4578: "7fbf1e50288459601c49a77c063bfad1",
          4621: "477670fefb560a7b5a25ef2907181734",
          4656: "75894251741ff00e2fb870a9bf542a7b",
          4700: "362ee4baf4670e462f66afb1ba4b3f32",
          4710: "754df159f5396445116c168ea5ab8d88",
          4731: "a8afc78a9b8f8337b5e411d5a2117d92",
          4799: "8864e50f77d3808e265d5bff5d0af7df",
          4851: "9d96af3f33a796a1ed89e1a6132d1632",
          4861: "d2c94a9e4a63953048107003afdbd181",
          4913: "8c3285d77c68a082d3e74a893cb54ec0",
          5018: "6834e1af2b74fd6f0371fd392f7cccdd",
          5233: "8c7554da3f6cd41bb4cf52ae0698542b",
          5259: "ca2480e0af14d8865f0aa0a038d0a69f",
          5389: "fa34c14e44ecb01c29a0c8330bd19617",
          5530: "476d2cc1e786cb52007350c32f3eff61",
          5639: "190181522a1d851c6c62248f59f48e14",
          5663: "23580a3c29297012c4a45726ac71a5cc",
          5742: "722bbfb1138ce49c2f8b9ea502ef2d88",
          5830: "1ae21826870723d461be5a4361644429",
          5832: "21ba67dd0d41527ce5821b55c901ab6f",
          5932: "88b60d556de7c07dfc616a2b9d140412",
          6267: "11b54bcf275b2eb6fa8a0aa98ab5525d",
          6280: "cfef5b4de844cce5511182b1c4eb61fa",
          6285: "ce742f1bac77ff02d30d9f72be2b078e",
          6361: "b9fc0bc32c1b222e1f2be6270a553b0a",
          6664: "a38f95f5158df1668c06b336769f01d1",
          6879: "96c560abcd54f39982be606bcf23137e",
          6891: "e537e6abd30739a9dbe59ff041921eb7",
          6930: "8af2b25f2dcbe874ab5e63a201bae5bc",
          6997: "61182c0dfd519d544156499a227ab3c5",
          7010: "c003cb44c3798e20e5c56b326258ae60",
          7073: "2f1284c449f89e5a09ee385b0345b7a9",
          7283: "e20a95e7f7014258eeb48dfdc73f0498",
          7301: "1c48ea875ba76f0eae814ecd4c0a2766",
          7436: "5604d0f696feed87bd154483f867f1a4",
          7452: "e23c019a023548fa7013e410a131d5b5",
          7453: "eea5993e600674271818fe981b420d0c",
          7970: "906e78477760fca5483ab87d991e4fb2",
          8272: "7bb5ccd7ae0061b71bb563ad7790d036",
          8391: "d295401af921187a668127caf0dea549",
          8431: "1e0f3de9fd02af0a7be6756fc137ab41",
          8454: "24bdc5442c0a3b79df5d175c05d108ad",
          8755: "60e2d33dea6890b179715e79bdc7f32d",
          8880: "2c13fe2a7ce649db8583da171e97ef26",
          8970: "7df1eb906ced9e93d5dbd5024fe9ee3d",
          9022: "8afaeebc26c0e2c6e16d6a3db4eea1fc",
          9028: "014494a9997643d02516cbd5901c1875",
          9126: "ba5a9482edc266006e16dc92cfb4a497",
          9377: "b76b63c8afae0199f2b61cfffa7c0845",
          9615: "b851175b8e3264ef5a60b6c33f1638a5",
          9936: "44a2480e6636b481999fc499f6f78212",
          9990: "5b231bee6412d3fa33d7739d5c798e79"
        } [e] + ".js", i.miniCssF = e => "css/e83618ae9e6416fc1e9cfead82e5be2f.css", i.g = function() {
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
            c || (n = !0, (c = document.createElement("script")).charset = "utf-8", i.nc && c.setAttribute("nonce", i.nc), c.setAttribute("data-webpack", f + t), c.src = e), d[e] = [a];
            var l = (a, t) => {
                c.onerror = c.onload = null, clearTimeout(u);
                var r = d[e];
                if (delete d[e], c.parentNode && c.parentNode.removeChild(c), r && r.forEach(e => e(t)), a) return a(t)
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
          1961: [31879]
        }, n = {
          31879: ["default", "./index", 25136]
        }, i.f.remotes = (e, a) => {
          i.o(c, e) && c[e].forEach(e => {
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
                    var i = b.then(e => n(e, c), d);
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
              f(i, r[2], 0, 0, (e, a, t) => e ? f(i.I, r[0], 0, e, c, t) : d(), 1)
            }
          })
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
              return "default" === t && (n("@rsgweb/locale-tools", "0.0.0", () => Promise.all([i.e(3004), i.e(1795), i.e(1127), i.e(1837)]).then(() => () => i(12841))), n("@rsgweb/utils", "0.0.0", () => Promise.all([i.e(3004), i.e(8454), i.e(6930), i.e(1127), i.e(7301), i.e(637)]).then(() => () => i(60637))), n("clsx", "2.1.1", () => i.e(439).then(() => () => i(10439))), n("framer-motion", "12.38.0", () => Promise.all([i.e(7283), i.e(1127), i.e(2295)]).then(() => () => i(87283))), n("react-dom", "18.3.1", () => Promise.all([i.e(1098), i.e(1127)]).then(() => () => i(71098))), n("react-router-dom", "6.30.3", () => Promise.all([i.e(5389), i.e(1127), i.e(8429)]).then(() => () => i(15389))), n("react", "18.3.1", () => i.e(8431).then(() => () => i(48431))), n("usehooks-ts", "2.16.0", () => Promise.all([i.e(2562), i.e(1127)]).then(() => () => i(92562))), (() => {
                var e = e => {
                  return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                  var a
                };
                try {
                  var a = i(25136);
                  if (!a) return;
                  var d = e => e && e.init && e.init(i.S[t], r);
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
                var h = a[c];
                l.push(1 == h ? u() | u() : 2 == h ? u() & u() : h ? t(h, r) : !u())
              }
              return !!u()
            },
            r = (a, t, r) => {
              var d = r ? (e => Object.keys(e).reduce((a, t) => (e[t].eager && (a[t] = e[t]), a), {}))(a[t]) : a[t];
              return Object.keys(d).reduce((a, t) => !a || !d[a].loaded && ((a, t) => {
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
              })(a, t) ? t : a, 0)
            },
            d = (e, a, t) => t ? t() : ((e, a) => (e => {
              throw new Error(e)
            })("Shared module " + a + " doesn't exist in shared scope " + e))(e, a),
            f = (e => function(a, t, r, d, f) {
              var c = i.I(a);
              return c && c.then && !r ? c.then(e.bind(e, a, i.S[a], t, !1, d, f)) : e(a, i.S[a], t, r, d, f)
            })((e, f, c, n, o, b) => {
              if (!((e, a) => e && i.o(e, a))(f, c)) return d(e, c, b);
              var s, l, u = r(f, c, n);
              return t(o, u) || (l = ((e, t, r, d) => "Unsatisfied version " + r + " from " + (r && e[t][r].from) + " of shared singleton module " + t + " (required " + a(d) + ")")(f, c, u, o), "undefined" != typeof console && console.warn && console.warn(l)), (s = f[c][u]).loaded = 1, s.get()
            }),
            c = {},
            n = {
              71127: () => f("default", "react", !1, [1, 18, 2, 0], () => i.e(8431).then(() => () => i(48431))),
              10181: () => f("default", "react-router-dom", !1, [1, 6, 11, 2], () => Promise.all([i.e(5389), i.e(8429)]).then(() => () => i(15389))),
              42909: () => f("default", "@rsgweb/locale-tools", !1, [0], () => Promise.all([i.e(3004), i.e(1795), i.e(4218)]).then(() => () => i(12841))),
              1556: () => f("default", "clsx", !1, [1, 2, 1, 1], () => i.e(439).then(() => () => i(10439))),
              8513: () => f("default", "usehooks-ts", !1, [1, 2, 7, 2], () => i.e(2562).then(() => () => i(92562))),
              13331: () => f("default", "@rsgweb/utils", !1, [0], () => Promise.all([i.e(3004), i.e(8454), i.e(637)]).then(() => () => i(60637))),
              48586: () => f("default", "framer-motion", !1, [1, 12, 34, 5], () => i.e(7283).then(() => () => i(87283))),
              18429: () => f("default", "react-dom", !1, [1, 18, 2, 0], () => i.e(1098).then(() => () => i(71098)))
            },
            o = {
              1127: [71127],
              1961: [1556, 8513, 13331, 48586],
              7301: [10181, 42909],
              8429: [18429]
            },
            b = {};
          i.f.consumes = (e, a) => {
            i.o(o, e) && o[e].forEach(e => {
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
            })
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              7060: 0
            };
            i.f.miniCss = (a, t) => {
              e[a] ? t.push(e[a]) : 0 !== e[a] && {
                1961: 1
              } [a] && t.push(e[a] = (e => new Promise((a, t) => {
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
          i.f.j = (a, t) => {
            var r = i.o(e, a) ? e[a] : void 0;
            if (0 !== r)
              if (r) t.push(r[2]);
              else if (/^(1127|8429)$/.test(a)) e[a] = 0;
            else {
              var d = new Promise((t, d) => r = e[a] = [t, d]);
              t.push(r[2] = d);
              var f = i.p + i.u(a),
                c = new Error;
              i.l(f, t => {
                if (i.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
                  var d = t && ("load" === t.type ? "missing" : t.type),
                    f = t && t.target && t.target.src;
                  c.message = "Loading chunk " + a + " failed.\n(" + d + ": " + f + ")", c.name = "ChunkLoadError", c.type = d, c.request = f, r[1](c)
                }
              }, "chunk-" + a, a)
            }
          };
          var a = (a, t) => {
              var r, d, [f, c, n] = t,
                o = 0;
              if (f.some(a => 0 !== e[a])) {
                for (r in c) i.o(c, r) && (i.m[r] = c[r]);
                n && n(i)
              }
              for (a && a(t); o < f.length; o++) d = f[o], i.o(e, d) && e[d] && e[d][0](), e[d] = 0
            },
            t = self.webpackChunk_rockstargames_sites_gta_trilogy = self.webpackChunk_rockstargames_sites_gta_trilogy || [];
          t.forEach(a.bind(null, 0)), t.push = a.bind(null, t.push.bind(t))
        })(), i(93032), i(85819)
      })())
    }
  }
});