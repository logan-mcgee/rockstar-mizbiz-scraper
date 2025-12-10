try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "5b709889-8cdc-4413-8bab-9e02e6d6b5d5", e._sentryDebugIdIdentifier = "sentry-dbid-5b709889-8cdc-4413-8bab-9e02e6d6b5d5")
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
          131: "d9750c31dd5637e9d7a671ccfd214fd9",
          278: "dd3b946095b1207580a33204d41ff6d6",
          299: "e106b24513198aa0383d75957b05b649",
          314: "efeb2ce0dee353d0aac4ad52b3f3411f",
          426: "be655245cac4cacc1b1f50b777b276f3",
          439: "050316aeaa779484e58fd4e6664b889b",
          662: "e57ee30e592ad6508a0918e38eccc7f3",
          824: "ceffbe92304445aed0b2c8f0d7c9d5c0",
          907: "0fb9de9f29df7dea16f50646f46c4f92",
          1054: "d42396fcbec77b72f0d4fe2d9b2566be",
          1098: "091cd8993d6fec7c476cb26d2eb89146",
          1242: "b8b8546684a9f5b91b5977e22183f64f",
          1822: "a09155dcb2d01cc53957463d887243cf",
          1868: "480c0ccd0b146d42e327237901c200c2",
          2156: "f2e313c8349c0c53dec329d79a7267d8",
          2169: "7b13a5334f8adf2599073edb26a69ab1",
          2171: "6a8dab18a70e78b43b3f770aa01c681e",
          2217: "803bacd0cbc2fe899042160558fde797",
          2221: "1cf205fcb0bfe280655d0705b79db032",
          2243: "cdb61985209303b49f01f88c39a780e4",
          2306: "f390bf304dc33276f58d95038e1f1a80",
          2347: "9d459ac8b690ed81b9fcbcf683667c20",
          2365: "0bde46831470aec2900c63e9355910ab",
          2398: "c403e1e51d157121d9f436e1fee9ef1f",
          2466: "c25b19ef6c0cd22d456d2557c54000ae",
          2508: "f61ea6ebd5680e6d253c572a9ee6035a",
          2642: "83846edb3090c829425aa01134b78c7a",
          2678: "bad00b97f5414b6584441f9f98bc0239",
          2864: "ccc1651d0b85a719803fe7dcc0728cb4",
          3034: "58061910b4381b0fb7f20c448817b7c5",
          3197: "53febdef79109f5534f67ea51db4748d",
          3343: "befe48b81a938b9d9efa2acd60c485df",
          3370: "682a5c3f21724091166ae402df9cea3a",
          3475: "115699f948b5beef5ef73bf4cb357450",
          3486: "71aa20ea8e29a0692a78f7ab05a8808b",
          3697: "3cf101194052b4164a9f7a45dd5cf494",
          3885: "3f8dd174c55bbbfd5aa9b515f0ad9bb3",
          3941: "cbf89b7432f243ab00007e4ce0aa48d3",
          4011: "74cd744e3d6f6a8bf4d7e6c01c5d8dfc",
          4528: "67254fb4602d550480ade699848e18ee",
          4578: "c8739e6e0e57cecdd266f252ffc2bb8c",
          4598: "82c544957a760a34b7dbc378ae2cb05f",
          4621: "7d0342cf0635ce7ac384bf983cf38010",
          4700: "4aa313f546dee88f4b276d250a6d40a2",
          4710: "94082870311132814976051d098d9e97",
          4731: "9e12c349b9d540cb8c80847ed1d32730",
          4799: "e4f2c6da7177e1b11cb238214eacf2e6",
          4851: "bc09ed405dd317c9ea015f452e24b963",
          4861: "a3a049fe9d4d927df6261713d8627694",
          4907: "7e85368d9b946c949c2732523fa26ab0",
          4913: "c6aa4191faba51809378606c6e1b2d26",
          5018: "dbac9e27e9712cf6c2c22cce4fcc66d0",
          5076: "4d78e90eb6d6ea5aec403abbda96df96",
          5233: "3c41b7c1fdfa8d55634a01aa70c2f7e2",
          5259: "96a0b8d8a9cba4c64142846cc95329b4",
          5389: "723606c2f33d2ee7299df43ce7586afe",
          5530: "00303fdf0767e96ae110696f9d0b0b2f",
          5639: "fe9fd02c9f428214bd157e680ebb67e2",
          5663: "4a76f008c83785673c67d5095e1b526a",
          5742: "f07ced64c458138caddc9c7e89f1a0c3",
          5830: "eebe75f51dc1d3092cf01d95bc62af45",
          5832: "4a5a75ca1545f650b78d3fa62f075483",
          6088: "6bc833aa4e390d96261e3760fc8b1113",
          6267: "99277978183cf24f9cae5b89fd9b122a",
          6280: "07aefb3f57b8dbe77647e1dc54a1c886",
          6285: "8aef30cc06c62cf3c6a4d3c6aba77512",
          6361: "297e3fbab0fda26b00b90693877ac1d4",
          6664: "7e4b45f2e71cb7ccdf09353c42281d80",
          6879: "e72cbcb5423c75a7c5318736e3df628d",
          6891: "8ecca2309a0c9964eae55d87f2da2f45",
          6997: "8b35dea0582bf0364dc7829e6c5bd9bb",
          7010: "419883570798fd9f85b393cc57456b11",
          7073: "2adf64d10196d87d75aa77c15424410e",
          7436: "fa86317b05423325f44945dd31341fd6",
          7452: "a098f788c733d6f6dd2f4bf45c64da7c",
          7453: "f5f77233bd401274e28ef24ad4d4514b",
          7814: "6308925763a7eecb725ca5267faf65fc",
          7970: "5177c5f3a63b999542a353408e2584d9",
          8240: "35c617553c79d2ff1c63aaad1e72394c",
          8272: "8016dc061fc18ddd2c2a2197b0c3f370",
          8299: "5e613f6bc1a7af821c43e3aba30a645c",
          8391: "be131bdfdf37b4f37a9809307221f0b4",
          8431: "bd0c2fe391719623e02aa508e0df4d0d",
          8745: "4ba5da3570c9e146d011c74218d6cfed",
          8755: "549cda477bb515be0813a7bc16667ec0",
          8880: "16fa22bef874a62f9dc7b7588b762648",
          8970: "99a8d107a67498a700de6f8b1b304f84",
          9022: "b3f31d93b1cd7e3b4d4dcd201e6d891a",
          9028: "63a8370c14a1724068db5a8284b2fab9",
          9060: "48df3887c1567c0c6d639a6c1d5558f4",
          9126: "ddca4ce2601d260f080f75beb33fdc69",
          9377: "d5657b453ab4d73de1ec29571908ecb5",
          9587: "8ecc3171ca4a072e4b65226855f202f5",
          9615: "cba0e5a55840bf854962bba43819dff5",
          9763: "c390964df784769222b5ad8479b51720",
          9936: "8f47cfc30413b605f306ce6128cb0ec3",
          9975: "7abcf98aa4939b85f30cd4b0832a5aea",
          9990: "3ce66ad2fd5ee9107fe076d44d0510db"
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