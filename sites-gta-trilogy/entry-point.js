try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "614cbc23-a7c3-4937-8cbe-01a49931fb48", e._sentryDebugIdIdentifier = "sentry-dbid-614cbc23-a7c3-4937-8cbe-01a49931fb48")
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
            17411: (e, a, t) => {
              const r = t(77027).y;
              a.w = function(e) {
                if (e || (e = 1), !t.y.meta || !t.y.meta.url) throw console.error("__system_context__", t.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                t.p = r(t.y.meta.url, e)
              }
            },
            25136: e => {
              "use strict";
              e.exports = t
            },
            28419: (e, a, t) => {
              (0, t(17411).w)(1)
            },
            77027: (e, a, t) => {
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
            85819: (e, a, t) => {
              "use strict";
              var r = {
                  "./index": () => Promise.all([t.e(6930), t.e(4656), t.e(1127), t.e(5085), t.e(1961)]).then(() => () => t(31961))
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
            93032: (e, a, t) => {
              t(28419)
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
          for (var n = 2 & t && a;
            ("object" == typeof n || "function" == typeof n) && !~e.indexOf(n); n = r(n)) Object.getOwnPropertyNames(n).forEach(e => f[e] = () => a[e]);
          return f.default = () => a, i.d(d, f), d
        }, i.d = (e, a) => {
          for (var t in a) i.o(a, t) && !i.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: a[t]
          })
        }, i.f = {}, i.e = e => Promise.all(Object.keys(i.f).reduce((a, t) => (i.f[t](e, a), a), [])), i.u = e => "js/" + {
          131: "26856e46aa593479e2f87816a59e5db2",
          278: "830d7a19a62aba877067b2886b1351a3",
          299: "2802f4e430f67f829e5a229031750ac7",
          314: "8a549225c3df2fbf6a5711b8828393e5",
          439: "7c8f8ee4256f981e5b771675eed18fc5",
          662: "b4ed9bcb098ac721385150aa8e4ed301",
          824: "c482b250774cea58d0641d89635ea38a",
          907: "f43e5c40578605a1df0787a4a00eca91",
          1054: "1024ac6827a0eef4ea217c0f8b0cd801",
          1098: "850016f0b7e521d33162314acf5c7fce",
          1242: "d256f769dfd0e131691d87bb8fa07889",
          1822: "b9573aa099b8b23a315546635f67a1da",
          1868: "19f77deb194de45ad7ae90ecb8569806",
          1961: "1d92177695e49817f1b01afc8fadcb62",
          2156: "a5fd4a9d51dc63d7d92b7c967dd415a7",
          2171: "aed1eab2ff3844e03436fe05a6b31017",
          2221: "43b08be156b27ba367f68e13cf368d8f",
          2243: "e10f786abc87eb2e9800d0a5c9260800",
          2295: "59c5cbcd7b6b936b3885fd831042d3b2",
          2306: "990ad9291cac348ac8474f3b6f2f5301",
          2347: "b29d66e224bedd17007251ce80041754",
          2365: "5e78a1601e379447303060d61e0d4b26",
          2398: "8adf1bc2401e6033916b902c5e608885",
          2466: "af8971ade4deb57f395c3b10fb6ffff2",
          2562: "00843f7ac266a25de4fa9fc7e8701257",
          2642: "a9913d4c5c29b88c214ab650c1751f7a",
          2678: "201ac6b6edcd98c3dd3b6bfdb42e9831",
          2864: "95c2bd77989cd532f1ad51319c3d1429",
          3004: "8a07b97d28e5b017fba45d6e7f76ed21",
          3034: "38aa545857af081162e9428340317343",
          3197: "9480a144d21ff56e1952c553913493b4",
          3343: "67f71ff2e258f1f01f0b62f37c8ba987",
          3370: "27fe1c044289fe4c0eb8673b61cfbe88",
          3475: "e3e503c24b06d27978b0dd9dcab3cf20",
          3486: "56ffd6cb1ef5eb5326d5c38d25e6610b",
          3697: "c66c8199ee57640fd9b67f3bc1d8e39c",
          3885: "d69b177dab624fac6e53fbb1e6e57128",
          3941: "fa8e769ac6c05cf99216ee2b1dd60e5b",
          4011: "ed1e36f67c37bc5419d29c437b5b44ac",
          4057: "5225a6c2c3b1d4d4ee8815d3cf08395b",
          4528: "2fe5963f1fcc94e63c03e9e978d32111",
          4578: "2c14b2a2626ad178ee89e940009cc635",
          4621: "93ae5f7a9057252170aac8945ec97a0d",
          4656: "2c7fa3dd5e5c60911d0f86f012e909d0",
          4700: "d20fee049fc6d436ab1bc2507a07b0a4",
          4710: "a51c96143a41911f885cdd14ca871724",
          4731: "975ac559fde39d4edc8694ba18be9521",
          4799: "78da67a946ffcaf2b5138a141fcfd41c",
          4851: "bf6d425a7c8e1cfd54823ab45b45387e",
          4861: "67e445071a2a62c5fef681b815f61413",
          4913: "c655621fd77472813dd520a6e22a0772",
          5018: "3988dd3c54d13ff3590e089ffccc9974",
          5085: "86d38a55e7e06690907df1bf8118fb71",
          5233: "07d6223bd5bd8a03fb177fe280f2c714",
          5259: "eba62141d61d5ed208e92567826f8249",
          5288: "8204f00a7b5d771590ef1dcc865cf921",
          5389: "96c8cbff06ed0bac5347861bba40213d",
          5530: "e8441b985a8cb9ae802ab2e54ad5f47c",
          5639: "3980d3df710c6de747010bf5bf72f424",
          5663: "cda42f712bf75ce5827a8932a1e7e2f2",
          5742: "9f026bb7fc39f71d9d897a592efa435d",
          5830: "96e2f4e97ca75d3dcc5d5c62623481f3",
          5832: "14effc66b65b7a9dd30052b395d96202",
          6267: "ca1054eb358dbe0b38d38220e46b710c",
          6280: "a21050230d8023c0789530e5eddfc1cd",
          6285: "b8ddec2e97d428f6ff92213a7cdc17bf",
          6361: "589f1e63e6f8e68d9b3219d91b53bdb9",
          6664: "4de4ff65d2eec0bc99c2670791f3485e",
          6879: "7adbe7b968f4e0788c4c519a2c939f5a",
          6891: "78f71094bfe5652b3f647995142d6ef6",
          6930: "06cf481288e221c73dcb56e6b75a7569",
          6997: "beeb8785bfbd563ffa9b959d0bb3279c",
          7010: "208aca1415451631291a9301be4a32c5",
          7073: "84b2b2c567b2d210932e4c24b2e515dd",
          7436: "97ba30f93d8b3a53a0d91034e60baae3",
          7452: "c08c2785569beb3656a54e9079c3a259",
          7453: "cff533fed83cbfb91e42b9155e4e6507",
          7970: "1d3918b2067e3c3a4039694098be3a46",
          8240: "4724ecb9b5dae72caa63f0f41634ba42",
          8272: "f1786b5c2742c7f62b87a0f8f9fc314b",
          8391: "339e25ac2f7d04ae1fea056fcbc98dfb",
          8431: "d7dcd59afae74374dc61e3bcc9ab3315",
          8755: "0350f9d47487fdaaa3aff100732805d5",
          8880: "7857ee2c8c8f3e1f68b28a3d1ddfb311",
          8970: "3d9ea3d77518afb11c94a5034390afda",
          9022: "dd8e0c34764208a503ed90b10a14921b",
          9028: "a7981dfd6c0a81af2cf3892f187e6909",
          9126: "1a640da30df534ddad6f35a23e199e49",
          9308: "4cfd8d2a2e2c260ed64f415007b9af60",
          9377: "8dbc83215b1d61fa9ec5fe3afda74eb9",
          9587: "0978ad6197c4c9706c86ddb75a90e937",
          9615: "6002a0a1c765a916789d6c45a3db73d0",
          9936: "dc5a7c96e7c5604efc58b7fa011f221a",
          9975: "c04b46d0c18a8fca40cc9ab51904a912",
          9990: "6ad1b2df9c895790fe1a63727aea560b"
        } [e] + ".js", i.miniCssF = e => "css/571dda207b3eaf6da666f9ce8378dcc5.css", i.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), i.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), d = {}, f = "@rockstargames/sites-gta-trilogy:", i.l = (e, a, t, r) => {
          if (d[e]) d[e].push(a);
          else {
            var n, c;
            if (void 0 !== t)
              for (var o = document.getElementsByTagName("script"), b = 0; b < o.length; b++) {
                var s = o[b];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == f + t) {
                  n = s;
                  break
                }
              }
            n || (c = !0, (n = document.createElement("script")).charset = "utf-8", n.timeout = 120, i.nc && n.setAttribute("nonce", i.nc), n.setAttribute("data-webpack", f + t), n.src = e), d[e] = [a];
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
        }, i.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, i.nmd = e => (e.paths = [], e.children || (e.children = []), e), n = {
          1961: [31879]
        }, c = {
          31879: ["default", "./index", 25136]
        }, i.f.remotes = (e, a) => {
          i.o(n, e) && n[e].forEach(e => {
            var t = i.R;
            t || (t = []);
            var r = c[e];
            if (!(t.indexOf(r) >= 0)) {
              if (t.push(r), r.p) return a.push(r.p);
              var d = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + r[1] + '" from ' + r[2]), i.m[e] = () => {
                    throw a
                  }, r.p = 0
                },
                f = (e, t, f, n, c, o) => {
                  try {
                    var b = e(t, f);
                    if (!b || !b.then) return c(b, n, o);
                    var i = b.then(e => c(e, n), d);
                    if (!o) return i;
                    a.push(r.p = i)
                  } catch (e) {
                    d(e)
                  }
                },
                n = (e, a, d) => f(a.get, r[1], t, 0, o, d),
                o = a => {
                  r.p = 1, i.m[e] = e => {
                    e.exports = a()
                  }
                };
              f(i, r[2], 0, 0, (e, a, t) => e ? f(i.I, r[0], 0, e, n, t) : d(), 1)
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
              return "default" === t && (c("@rsgweb/locale-tools", "0.0.0", () => Promise.all([i.e(3004), i.e(9587), i.e(1127), i.e(9975)]).then(() => () => i(12841))), c("@rsgweb/utils", "0.0.0", () => Promise.all([i.e(3004), i.e(4057), i.e(6930), i.e(1127), i.e(5085), i.e(9308)]).then(() => () => i(79308))), c("clsx", "2.1.1", () => i.e(439).then(() => () => i(10439))), c("framer-motion", "12.35.0", () => Promise.all([i.e(5288), i.e(1127), i.e(2295)]).then(() => () => i(45288))), c("react-dom", "18.3.1", () => Promise.all([i.e(1098), i.e(1127)]).then(() => () => i(71098))), c("react-router-dom", "6.30.1", () => Promise.all([i.e(5389), i.e(1127), i.e(8429)]).then(() => () => i(15389))), c("react", "18.3.1", () => i.e(8431).then(() => () => i(48431))), c("usehooks-ts", "2.16.0", () => Promise.all([i.e(2562), i.e(1127)]).then(() => () => i(92562))), (() => {
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
                  var b, i, s = c < a.length ? (typeof a[c])[0] : "";
                  if (n >= r.length || "o" == (i = (typeof(b = r[n]))[0])) return !o || ("u" == s ? c > d && !f : "" == s != f);
                  if ("u" == i) {
                    if (!o || "u" != s) return !1
                  } else if (o)
                    if (s == i)
                      if (c <= d) {
                        if (b != a[c]) return !1
                      } else {
                        if (f ? b > a[c] : b < a[c]) return !1;
                        b != a[c] && (o = !1)
                      }
                  else if ("s" != s && "n" != s) {
                    if (f || c <= d) return !1;
                    o = !1, c--
                  } else {
                    if (c <= d || i < s != f) return !1;
                    o = !1
                  } else "s" != s && "n" != s && (o = !1, c--)
                }
              }
              var l = [],
                u = l.pop.bind(l);
              for (n = 1; n < a.length; n++) {
                var h = a[n];
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
                  var n = t[r],
                    c = (typeof n)[0];
                  if (f != c) return "o" == f && "n" == c || "s" == c || "u" == f;
                  if ("o" != f && "u" != f && d != n) return d < n;
                  r++
                }
              })(a, t) ? t : a, 0)
            },
            d = (e, a, t) => t ? t() : ((e, a) => (e => {
              throw new Error(e)
            })("Shared module " + a + " doesn't exist in shared scope " + e))(e, a),
            f = (e => function(a, t, r, d, f) {
              var n = i.I(a);
              return n && n.then && !r ? n.then(e.bind(e, a, i.S[a], t, !1, d, f)) : e(a, i.S[a], t, r, d, f)
            })((e, f, n, c, o, b) => {
              if (!((e, a) => e && i.o(e, a))(f, n)) return d(e, n, b);
              var s, l, u = r(f, n, c);
              return t(o, u) || (l = ((e, t, r, d) => "Unsatisfied version " + r + " from " + (r && e[t][r].from) + " of shared singleton module " + t + " (required " + a(d) + ")")(f, n, u, o), "undefined" != typeof console && console.warn && console.warn(l)), (s = f[n][u]).loaded = 1, s.get()
            }),
            n = {},
            c = {
              71127: () => f("default", "react", !1, [1, 18, 2, 0], () => i.e(8431).then(() => () => i(48431))),
              10181: () => f("default", "react-router-dom", !1, [1, 6, 11, 2], () => Promise.all([i.e(5389), i.e(8429)]).then(() => () => i(15389))),
              56990: () => f("default", "@rsgweb/locale-tools", !1, [4, 0, 0, 0], () => Promise.all([i.e(3004), i.e(9587), i.e(8240)]).then(() => () => i(12841))),
              1556: () => f("default", "clsx", !1, [1, 2, 1, 1], () => i.e(439).then(() => () => i(10439))),
              8513: () => f("default", "usehooks-ts", !1, [1, 2, 7, 2], () => i.e(2562).then(() => () => i(92562))),
              48586: () => f("default", "framer-motion", !1, [1, 12, 34, 5], () => i.e(5288).then(() => () => i(45288))),
              58136: () => f("default", "@rsgweb/utils", !1, [4, 0, 0, 0], () => Promise.all([i.e(3004), i.e(4057), i.e(9308)]).then(() => () => i(79308))),
              18429: () => f("default", "react-dom", !1, [1, 18, 2, 0], () => i.e(1098).then(() => () => i(71098)))
            },
            o = {
              1127: [71127],
              1961: [1556, 8513, 48586, 58136],
              5085: [10181, 56990],
              8429: [18429]
            },
            b = {};
          i.f.consumes = (e, a) => {
            i.o(o, e) && o[e].forEach(e => {
              if (i.o(n, e)) return a.push(n[e]);
              if (!b[e]) {
                var t = a => {
                  n[e] = 0, i.m[e] = t => {
                    delete i.c[e], t.exports = a()
                  }
                };
                b[e] = !0;
                var r = a => {
                  delete n[e], i.m[e] = t => {
                    throw delete i.c[e], a
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
            i.f.miniCss = (a, t) => {
              e[a] ? t.push(e[a]) : 0 !== e[a] && {
                1961: 1
              } [a] && t.push(e[a] = (e => new Promise((a, t) => {
                var r = i.miniCssF(e),
                  d = i.p + r;
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
                  f.rel = "stylesheet", f.type = "text/css", i.nc && (f.nonce = i.nc), f.onerror = f.onload = t => {
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
          i.f.j = (a, t) => {
            var r = i.o(e, a) ? e[a] : void 0;
            if (0 !== r)
              if (r) t.push(r[2]);
              else if (/^(1127|8429)$/.test(a)) e[a] = 0;
            else {
              var d = new Promise((t, d) => r = e[a] = [t, d]);
              t.push(r[2] = d);
              var f = i.p + i.u(a),
                n = new Error;
              i.l(f, t => {
                if (i.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
                  var d = t && ("load" === t.type ? "missing" : t.type),
                    f = t && t.target && t.target.src;
                  n.message = "Loading chunk " + a + " failed.\n(" + d + ": " + f + ")", n.name = "ChunkLoadError", n.type = d, n.request = f, r[1](n)
                }
              }, "chunk-" + a, a)
            }
          };
          var a = (a, t) => {
              var r, d, [f, n, c] = t,
                o = 0;
              if (f.some(a => 0 !== e[a])) {
                for (r in n) i.o(n, r) && (i.m[r] = n[r]);
                c && c(i)
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