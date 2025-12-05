try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "7a90acd4-f820-4d67-a05d-474996eb9ec0", e._sentryDebugIdIdentifier = "sentry-dbid-7a90acd4-f820-4d67-a05d-474996eb9ec0")
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
        var e, r, d, f, c, n, o = {
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
                  "./index": () => Promise.all([t.e(4910), t.e(4656), t.e(2229), t.e(5811), t.e(1657)]).then(() => () => t(9249))
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
            7027: (e, a, t) => {
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
          var d = Object.create(null);
          b.r(d);
          var f = {};
          e = e || [null, r({}), r([]), r(r)];
          for (var c = 2 & t && a;
            ("object" == typeof c || "function" == typeof c) && !~e.indexOf(c); c = r(c)) Object.getOwnPropertyNames(c).forEach(e => f[e] = () => a[e]);
          return f.default = () => a, b.d(d, f), d
        }, b.d = (e, a) => {
          for (var t in a) b.o(a, t) && !b.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: a[t]
          })
        }, b.f = {}, b.e = e => Promise.all(Object.keys(b.f).reduce((a, t) => (b.f[t](e, a), a), [])), b.u = e => "js/" + {
          131: "2af273c62bd794f007c28bfec8462551",
          278: "05734a8b7715bc0f6179fb21fd4d1e41",
          299: "52452e88b58a676a0a5bf75299443729",
          314: "52d40dee61090bda8afbc86799899775",
          439: "80cc0dd587eab06913238cdd003a2629",
          450: "697b52ace4940593506767ee3e2ee168",
          662: "097c0c86ba9ad8e0ebfa111bb148e195",
          824: "828fbb62463d88a8cb5b9adce29e20a0",
          907: "62ddd991856d4623d463c3d422c13883",
          1054: "2217a9c3a9ec80f85f15034a3ff4baad",
          1242: "97083aa53c4a4a37915d74b5c4af76e4",
          1657: "e18c3519104a51c9779bc1d1626885a9",
          1822: "16d521871382da9ca1848fcb41b37452",
          1868: "675f1d8b597b95c683344c9f772ed95c",
          2156: "ea34f7b92a4e4167fde45fce72a02a08",
          2171: "ec007d8f6ba59e1951211fd9e471e74a",
          2221: "3467792903c4a5113822fcf6e8eaefe2",
          2243: "eb5efffdb431ad40990e073fe21ded76",
          2306: "c5ac8b38785107fe6699218287753a23",
          2347: "1b131f71ca97bf94248692f668b3f67a",
          2365: "fd13d763f33535ac3462b610b0caa88b",
          2398: "5ba786595bb126be15e3c1b901948730",
          2466: "ed1b5c06bcfff80b6b67f82f8e40f7cd",
          2562: "a305a39578e225e54134ef48b7b562ff",
          2642: "8dc6f349131c296ed1e48a3135c6896e",
          2678: "abbbe034eb45c120d721d2f5a7455a1e",
          2864: "401f220af39abfbf4ea499241d73ea06",
          3034: "3392f74f06b2d4bd427dc7774d2cbe7f",
          3197: "0565ff571a02bce7f1c48dcff1b588f8",
          3343: "7d5230c08cdf7faa40a0660a8861e962",
          3370: "8513df736fd5a65942146269fb2a253b",
          3475: "96a5ea5a0073c928f363d874251be4d5",
          3486: "cc921766d056fb8de8c221e1e80b2962",
          3697: "36fd9c058d15761603e32fb8155870f8",
          3885: "57dfd5c0989adbc9855140818e9708bd",
          3941: "a9082fc46da85aee95d3bb607443b12d",
          4011: "05902af8af9e0241b34b21b639b77ab0",
          4528: "8038ff1ff40e07ada9eb28c7700abd00",
          4578: "7fdf93cbf1c2d826abecb0d0e187225e",
          4621: "49395e7760df1d77524b0dfba62a732f",
          4656: "86c86c7ff20f0d9ad630bf005bcca54e",
          4700: "8e890f7cbb3b71a568404eb0b3fdeb0f",
          4710: "206b0e575c2f4caf3fc0b3198ddf2f45",
          4731: "13a3f02b123d4bee81ef217926c4bdf6",
          4799: "1e0a337006dd024a97417da943611315",
          4851: "ede80e7c07a7609ebdb8c68db81f4965",
          4861: "1e27f71cab6d0d81d9234c2f0dea08d0",
          4910: "d8516deac36e64b6760e2eea4a9677e2",
          4913: "13dec35791ec516d5972dc0c30070773",
          5018: "069f1d80c38daecc34e4b467e3436256",
          5233: "47d652dc9da3b423e14025deace23f76",
          5259: "cc33edb87951c55e2845817b9265b7ea",
          5389: "737d2595d77d1b5bcc4a199504022cb1",
          5530: "72026eada451afcbb5b584c3a010f4e3",
          5639: "53844eaf6b154fd6bc7f277f6d12d866",
          5663: "f60ba5850de5d7d08c390c2b621dc65d",
          5742: "8e29fba437c4f18725d99c02d49c92c3",
          5811: "7b88ebdcec13be5fc1fe4408700783e3",
          5830: "2717fb9018384100422378859b19eea1",
          5832: "5deea58a50560a10758f88b20c32d4de",
          5912: "47682499cfb313591dc4d99739123e43",
          6267: "ed88fff0a758a58c505b1c68079a754d",
          6280: "f34582e18f251dbbb64ecef9cd2970c1",
          6285: "a3ddd10efe39b8ac7aba7b6cad0d4288",
          6361: "1e75df620b4fe8aab37e793bd1ca2890",
          6664: "a81b87fde0bd7752a63c8dc90d51aa71",
          6879: "1eb792d418949a23e9c7caadc4f2e375",
          6891: "c1aa81fd4370228ae99e522e011e04f8",
          6997: "9874def687565dc34bd7e8ecf4a5530c",
          7010: "91e0ad370abb91ffbc99136591958c4e",
          7073: "6a05f75d9c6a331987774e630e40b9ff",
          7436: "7cb5adb6ce1913ebbcf9a05908d1aeee",
          7452: "9b50913b3cf0d9169184383e020ca7e4",
          7453: "f7f23d0147e96485e23fe3b55982dd0b",
          7970: "df38ab019a90d4082912e29d885d1b87",
          8240: "c9ed7de8a604cf171f56b6016e035462",
          8272: "4da41cfb8a4136f35fbf4c7b91dc7e15",
          8322: "ffe99d941e0b64d7cd41a4998ef9a979",
          8391: "56a963aaa646a897caf05c5b6e536c9d",
          8431: "6347313316204bf4265ba4bbbc4c89cb",
          8659: "acfe4b010f674d88f9b34f815f5a399a",
          8755: "1c85d9d0f0c74978120fc64f39ead059",
          8880: "9b9bb16afb0e36d733253be870654c70",
          8970: "7937f11b486542ca82da6b93fa4a6473",
          9022: "d01e305692a0800e40d4c73ddb4c7ab7",
          9028: "ed07c574b9a9a5669132f4866f4c83d5",
          9126: "fe8a4183ddb2c9ccad084e51660b3e33",
          9377: "0e3ad619f2c7c1c4db2590b5398a3da5",
          9587: "c0b42a2246d0b28afe887e4a21364445",
          9615: "eedc9d9babe11edfbad72ecee624a0fa",
          9757: "c4a3d03d687b24b1f09808af464bfd3a",
          9936: "58b370edce7d4e7b401c08792407b81b",
          9975: "3c39f8f1656177a468811ef99db450d7",
          9990: "17d3ac28a850dc2afcf22cdadf64a587"
        } [e] + ".js", b.miniCssF = e => "css/b00df4b72b841993e7bc5c20ee7ecbac.css", b.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), b.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), d = {}, f = "@rockstargames/sites-gta-trilogy:", b.l = (e, a, t, r) => {
          if (d[e]) d[e].push(a);
          else {
            var c, n;
            if (void 0 !== t)
              for (var o = document.getElementsByTagName("script"), i = 0; i < o.length; i++) {
                var s = o[i];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == f + t) {
                  c = s;
                  break
                }
              }
            c || (n = !0, (c = document.createElement("script")).charset = "utf-8", c.timeout = 120, b.nc && c.setAttribute("nonce", b.nc), c.setAttribute("data-webpack", f + t), c.src = e), d[e] = [a];
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
        }, b.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, b.nmd = e => (e.paths = [], e.children || (e.children = []), e), c = {
          1657: [1879]
        }, n = {
          1879: ["default", "./index", 5136]
        }, b.f.remotes = (e, a) => {
          b.o(c, e) && c[e].forEach(e => {
            var t = b.R;
            t || (t = []);
            var r = n[e];
            if (!(t.indexOf(r) >= 0)) {
              if (t.push(r), r.p) return a.push(r.p);
              var d = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + r[1] + '" from ' + r[2]), b.m[e] = () => {
                    throw a
                  }, r.p = 0
                },
                f = (e, t, f, c, n, o) => {
                  try {
                    var i = e(t, f);
                    if (!i || !i.then) return n(i, c, o);
                    var b = i.then(e => n(e, c), d);
                    if (!o) return b;
                    a.push(r.p = b)
                  } catch (e) {
                    d(e)
                  }
                },
                c = (e, a, d) => f(a.get, r[1], t, 0, o, d),
                o = a => {
                  r.p = 1, b.m[e] = e => {
                    e.exports = a()
                  }
                };
              f(b, r[2], 0, 0, (e, a, t) => e ? f(b.I, r[0], 0, e, c, t) : d(), 1)
            }
          })
        }, (() => {
          b.S = {};
          var e = {},
            a = {};
          b.I = (t, r) => {
            r || (r = []);
            var d = a[t];
            if (d || (d = a[t] = {}), !(r.indexOf(d) >= 0)) {
              if (r.push(d), e[t]) return e[t];
              b.o(b.S, t) || (b.S[t] = {});
              var f = b.S[t],
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
              return "default" === t && (n("@rsgweb/locale-tools", "1.0.0", () => Promise.all([b.e(9587), b.e(2229), b.e(9975)]).then(() => () => b(2841))), n("@rsgweb/utils", "1.0.0", () => Promise.all([b.e(450), b.e(4910), b.e(2229), b.e(9757), b.e(5811)]).then(() => () => b(9757))), n("clsx", "2.1.1", () => b.e(439).then(() => () => b(439))), n("framer-motion", "7.10.3", () => Promise.all([b.e(5912), b.e(2229), b.e(8322)]).then(() => () => b(5912))), n("react-router-dom", "6.30.1", () => Promise.all([b.e(5389), b.e(2229)]).then(() => () => b(5389))), n("react", "18.2.0", () => b.e(8659).then(() => () => b(8659))), n("react", "18.3.1", () => b.e(8431).then(() => () => b(8431))), n("usehooks-ts", "2.16.0", () => Promise.all([b.e(2562), b.e(2229)]).then(() => () => b(2562))), (() => {
                var e = e => {
                  return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                  var a
                };
                try {
                  var a = b(5136);
                  if (!a) return;
                  var d = e => e && e.init && e.init(b.S[t], r);
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
                  var i, b, s = n < a.length ? (typeof a[n])[0] : "";
                  if (c >= r.length || "o" == (b = (typeof(i = r[c]))[0])) return !o || ("u" == s ? n > d && !f : "" == s != f);
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
                l.push(1 == p ? u() | u() : 2 == p ? u() & u() : p ? t(p, r) : !u())
              }
              return !!u()
            },
            r = (a, r, d, f) => {
              var c = f ? (e => Object.keys(e).reduce((a, t) => (e[t].eager && (a[t] = e[t]), a), {}))(a[r]) : a[r];
              return (r = Object.keys(c).reduce((a, r) => !t(d, r) || a && !((a, t) => {
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
              })(a, r) ? a : r, 0)) && c[r]
            },
            d = e => {
              throw new Error(e)
            },
            f = (e => function(a, t, r, d, f) {
              var c = b.I(a);
              return c && c.then && !r ? c.then(e.bind(e, a, b.S[a], t, !1, d, f)) : e(a, b.S[a], t, r, d, f)
            })((e, t, f, c, n, o) => {
              if (!((e, a) => e && b.o(e, a))(t, f)) return ((e, a, t) => t ? t() : ((e, a) => d("Shared module " + a + " doesn't exist in shared scope " + e))(e, a))(e, f, o);
              var i, s = r(t, f, n, c);
              return s ? ((i = s).loaded = 1, i.get()) : o ? o() : void d(((e, t, r, d, f) => {
                var c = e[r];
                return "No satisfying version (" + a(d) + ")" + (f ? " for eager consumption" : "") + " of shared module " + r + " found in shared scope " + t + ".\nAvailable versions: " + Object.keys(c).map(e => e + " from " + c[e].from).join(", ")
              })(t, e, f, n, c))
            }),
            c = {},
            n = {
              2229: () => f("default", "react", !1, [1, 18, 2, 0], () => b.e(8431).then(() => () => b(8431))),
              1788: () => f("default", "@rsgweb/locale-tools", !1, [1, "workspace:^"], () => Promise.all([b.e(9587), b.e(8240)]).then(() => () => b(2841))),
              9623: () => f("default", "react-router-dom", !1, [1, 6, 11, 2], () => b.e(5389).then(() => () => b(5389))),
              1913: () => f("default", "react", !1, [1, 18, 2, 0], () => b.e(8659).then(() => () => b(8659))),
              3582: () => f("default", "framer-motion", !1, [1, 7, 5, 1], () => b.e(5912).then(() => () => b(5912))),
              4572: () => f("default", "clsx", !1, [1, 2, 1, 1], () => b.e(439).then(() => () => b(439))),
              5587: () => f("default", "usehooks-ts", !1, [1, 2, 7, 2], () => b.e(2562).then(() => () => b(2562))),
              5966: () => f("default", "@rsgweb/utils", !1, [1, "workspace:^"], () => Promise.all([b.e(450), b.e(9757)]).then(() => () => b(9757)))
            },
            o = {
              1657: [1913, 3582, 4572, 5587, 5966],
              2229: [2229],
              5811: [1788, 9623]
            },
            i = {};
          b.f.consumes = (e, a) => {
            b.o(o, e) && o[e].forEach(e => {
              if (b.o(c, e)) return a.push(c[e]);
              if (!i[e]) {
                var t = a => {
                  c[e] = 0, b.m[e] = t => {
                    delete b.c[e], t.exports = a()
                  }
                };
                i[e] = !0;
                var r = a => {
                  delete c[e], b.m[e] = t => {
                    throw delete b.c[e], a
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
            b.f.miniCss = (a, t) => {
              e[a] ? t.push(e[a]) : 0 !== e[a] && {
                1657: 1
              } [a] && t.push(e[a] = (e => new Promise((a, t) => {
                var r = b.miniCssF(e),
                  d = b.p + r;
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
                  f.rel = "stylesheet", f.type = "text/css", b.nc && (f.nonce = b.nc), f.onerror = f.onload = t => {
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
          b.f.j = (a, t) => {
            var r = b.o(e, a) ? e[a] : void 0;
            if (0 !== r)
              if (r) t.push(r[2]);
              else if (2229 != a) {
              var d = new Promise((t, d) => r = e[a] = [t, d]);
              t.push(r[2] = d);
              var f = b.p + b.u(a),
                c = new Error;
              b.l(f, t => {
                if (b.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
                  var d = t && ("load" === t.type ? "missing" : t.type),
                    f = t && t.target && t.target.src;
                  c.message = "Loading chunk " + a + " failed.\n(" + d + ": " + f + ")", c.name = "ChunkLoadError", c.type = d, c.request = f, r[1](c)
                }
              }, "chunk-" + a, a)
            } else e[a] = 0
          };
          var a = (a, t) => {
              var r, d, [f, c, n] = t,
                o = 0;
              if (f.some(a => 0 !== e[a])) {
                for (r in c) b.o(c, r) && (b.m[r] = c[r]);
                n && n(b)
              }
              for (a && a(t); o < f.length; o++) d = f[o], b.o(e, d) && e[d] && e[d][0](), e[d] = 0
            },
            t = self.webpackChunk_rockstargames_sites_gta_trilogy = self.webpackChunk_rockstargames_sites_gta_trilogy || [];
          t.forEach(a.bind(null, 0)), t.push = a.bind(null, t.push.bind(t))
        })(), b(3032), b(5819)
      })())
    }
  }
});