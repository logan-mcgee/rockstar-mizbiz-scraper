try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "dad7f450-399d-4464-b6c6-f16d36a2aec9", e._sentryDebugIdIdentifier = "sentry-dbid-dad7f450-399d-4464-b6c6-f16d36a2aec9")
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
  var d = {};
  return Object.defineProperty(d, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      Object.keys(e).forEach(function(a) {
        d[a] = e[a]
      })
    }],
    execute: function() {
      e((() => {
        var e, r, t, c, f, n, o = {
            17411: (e, a, d) => {
              const r = d(77027).y;
              a.w = function(e) {
                if (e || (e = 1), !d.y.meta || !d.y.meta.url) throw console.error("__system_context__", d.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                d.p = r(d.y.meta.url, e)
              }
            },
            25136: e => {
              "use strict";
              e.exports = d
            },
            28419: (e, a, d) => {
              (0, d(17411).w)(1)
            },
            77027: (e, a, d) => {
              a.y = function(e, a) {
                var d = document.createElement("a");
                d.href = e;
                for (var r = "/" === d.pathname[0] ? d.pathname : "/" + d.pathname, t = 0, c = r.length; t !== a && c >= 0;) "/" === r[--c] && t++;
                if (t !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + t + ") in the URL path " + e);
                var f = r.slice(0, c + 1);
                return d.protocol + "//" + d.host + f
              };
              Number.isInteger
            },
            85819: (e, a, d) => {
              "use strict";
              var r = {
                  "./index": () => Promise.all([d.e(3004), d.e(832), d.e(2065), d.e(5523), d.e(9403), d.e(9763), d.e(8745), d.e(1127), d.e(8429), d.e(6088), d.e(1556), d.e(6990), d.e(2169), d.e(8032)]).then(() => () => d(98032))
                },
                t = (e, a) => (d.R = a, a = d.o(r, e) ? r[e]() : Promise.resolve().then(() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                }), d.R = void 0, a),
                c = (e, a) => {
                  if (d.S) {
                    var r = "default",
                      t = d.S[r];
                    if (t && t !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return d.S[r] = e, d.I(r, a)
                  }
                };
              d.d(a, {
                get: () => t,
                init: () => c
              })
            },
            93032: (e, a, d) => {
              d(28419)
            }
          },
          b = {};

        function i(e) {
          var a = b[e];
          if (void 0 !== a) return a.exports;
          var d = b[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return o[e].call(d.exports, d, d.exports, i), d.loaded = !0, d.exports
        }
        return i.m = o, i.c = b, i.y = a, i.amdO = {}, i.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return i.d(a, {
            a
          }), a
        }, r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, i.t = function(a, d) {
          if (1 & d && (a = this(a)), 8 & d) return a;
          if ("object" == typeof a && a) {
            if (4 & d && a.__esModule) return a;
            if (16 & d && "function" == typeof a.then) return a
          }
          var t = Object.create(null);
          i.r(t);
          var c = {};
          e = e || [null, r({}), r([]), r(r)];
          for (var f = 2 & d && a;
            ("object" == typeof f || "function" == typeof f) && !~e.indexOf(f); f = r(f)) Object.getOwnPropertyNames(f).forEach(e => c[e] = () => a[e]);
          return c.default = () => a, i.d(t, c), t
        }, i.d = (e, a) => {
          for (var d in a) i.o(a, d) && !i.o(e, d) && Object.defineProperty(e, d, {
            enumerable: !0,
            get: a[d]
          })
        }, i.f = {}, i.e = e => Promise.all(Object.keys(i.f).reduce((a, d) => (i.f[d](e, a), a), [])), i.u = e => "js/" + {
          68: "678e6b6873f476aab2065195c7e17a2f",
          131: "6a025c9cf03539eeff6ea440818f12ec",
          173: "4b359eeea7e310b3ef165d61828e25cb",
          278: "24470aedb0ac2d291bc0604e9408f0a3",
          299: "8abf5226c7f2d081f878357f8b33c430",
          314: "747d8b9240d5e56de3dbe5d5cd4a5d81",
          439: "b93e47c429b9d64a542ff0ec8f5c51ed",
          662: "e20a8b8389c3cc449c342cab4c678ed6",
          824: "3399d6bbc718ac4a39b8ddf8b572f595",
          832: "f7fad6eb3b4cb21f8f6248a526e8b93e",
          907: "85ad74c964ad18d8810e31bfb9f58c70",
          1054: "1677393ac92899d67c6197623654f789",
          1098: "b0c9671724dadd34d4edc8f5d4b58cde",
          1242: "4ae51d94ac7b28782051dcbf43a8bdec",
          1758: "ceeedcdff357c6fc8726c0aa6c67be29",
          1822: "5ba47a46849f1808080db1de581d00d1",
          1868: "36a1034faea91e64aa4ad31ea6bfb07f",
          2065: "9011ab0f8dab43e04a83b63e7cc1bf5b",
          2156: "80c6e644346d70a21bda83142e7715e1",
          2169: "f371397c53cfb53ca8097e5af605fe32",
          2171: "1acfa7be9db8faf0e30ebf232206816e",
          2217: "2b395677d190175c587fd3cd974c96d8",
          2221: "864a972dc2d12253a916bd1514b7f9ec",
          2234: "a067b2f8886859bdc7597affb4c8c762",
          2243: "7f1876234267b5a5ee64dac9e5efaa0d",
          2306: "57ce3bb004795d9a8e74242c61f94456",
          2319: "cf32dcd04be5bfae24675e8d03da8eea",
          2347: "ecc72c52bf003b2a9e98ea577f7cfd6a",
          2365: "d435c4b65b4e1a29ad8e17bd786631cf",
          2398: "a6a0300c77cc87fc3e1a6f6d185c855c",
          2466: "0af5e158d47245d98b7b9763c4012e74",
          2508: "e45207af742b56aef28dc6011711a63c",
          2642: "776d1fda26f021153771f1a8fdcf2f43",
          2678: "ee41d56067dff6b2159fa228da3a088a",
          2787: "337423247a808ed5c0ed442bdbe0cf5d",
          2853: "65f93eb2b5cda00c8e3e319c8fd6bf64",
          2864: "27dc859ea89fa8f0dc5e9152233e8053",
          3004: "294e524e77cb8a88a228bfadad766eb0",
          3034: "01ea5ddddd98cbbbf6d5975791fea64b",
          3197: "0c93dbfde245d25b6e4c95c38e6e0d3e",
          3343: "c27413c330e409839dcc9d527f6f6621",
          3370: "e21a9f6a13c98d4b172bdb53288d5eb3",
          3475: "fe8eef68c0a88b576a8b3fd0cffe5bc2",
          3486: "0d3b7f76cfa0333375a009222d97c94b",
          3608: "cb8124e4402998273c75bf605217b7df",
          3697: "6c86bc0123620703a72dc2f507e667e1",
          3885: "63a051368c6940cb56d0f326b0c7acb9",
          3896: "e48c91808ace9e8cedfc16803b08be55",
          3941: "8656cbb26147c409717ef15645cc22df",
          4011: "946922db6b47b09812787cb7d625e547",
          4057: "44b382b1493d6031cf28530f3381d51a",
          4232: "a63bbbfac99c83069f340c1e3d635a97",
          4528: "b938056b5991753258f75df415858f8e",
          4578: "adfb667c710ec019e90edb325bce6afe",
          4598: "9a06e0f92af356b84042974659f8514a",
          4621: "94557a6f84d76f90b2dbd7beca86ed3d",
          4700: "f88f8b8271c3c97ea9040c6f6ac43622",
          4710: "ae7a8e78523fce625f343555cabaed89",
          4731: "af39f6bb9734b974547c37b12b362d07",
          4799: "0a35a4c0731e93c04a5b88de34ad06b6",
          4851: "6ae19a969770938133323afe8a2f8789",
          4861: "360d7e80447db58efeaa2b9a42543923",
          4913: "2b268f718d25f0c254fb1fe984e25117",
          5018: "e30b4938427e3996aaf7060f81327599",
          5076: "85188c850342cfc29c3b1e71192aacba",
          5233: "779ef0db6960301f98bd372df8a96683",
          5259: "5113c110dbcff7139e5e9049eb30afd4",
          5265: "066c9398ac8128098ea5a8f01d030430",
          5389: "2a0bec0e98f0e2c01990bd9b339011d2",
          5415: "fc1720a1833ce0ce851a0e3754f8c940",
          5523: "0d55dd4836684a9b1860b4010c9ea091",
          5530: "f1918feb370ae750152852a332dbca8e",
          5542: "d1a02bf0ff89eda1f1ba04b7d94bca54",
          5639: "d9b03cdee6c652d56920585f9acc0ae5",
          5663: "3fb82de9afa93aad5fbd1290dc305d77",
          5742: "1c747dc8557bfe38c8c556474072f580",
          5830: "c90fbb2da41c218a624106a7b077e358",
          5832: "3547f506e99c98af2fa97af07165b88e",
          6088: "dde0fdd19d247e0759ccc6fdd898d4e5",
          6267: "03a8cc6b5eecdcc1effc29591c25c25d",
          6280: "c21fa46deef5af0a5a58e9a4892ab645",
          6285: "e3fe3f4828c222f9d02056f1b7ae9292",
          6361: "bc665165a024d95889d2573b5eaa934c",
          6471: "4e66e6ebf6d9421b09a7d7dc9979add0",
          6664: "58e3a0332b4cc5b669607591b74cba98",
          6879: "2d1fe11c59d1cb1fbff60756aae19fcc",
          6891: "c4da6979bdad087751a70aaeeacec143",
          6997: "2e99c2be8a8e240009a4447e0af6207d",
          7010: "905c0ff380e8a504dbee14a8fa9722d1",
          7073: "c48874201ac5f91069406b8415f0c2c4",
          7407: "075b73d64839e22aab58ff87328e1911",
          7436: "4d4fbc3e065d26b1e2e75994f12d01bc",
          7452: "01e66a0dc1266f0136ba7bda372daf02",
          7453: "33bcc10a19877baf7491878bb54a76b8",
          7557: "06df4d9a6ee05da60271844d88cbbb93",
          7970: "c08f1ec15f7e15090a80770116abb825",
          8032: "2599b7c1b3c188cc0319e767f7dcf116",
          8272: "6c5d6681b14cf39de440626a0fa03649",
          8325: "6ac48ee655ddb6404c98e66757ee7e9d",
          8391: "6c985819c76cd5ed2d199a0028e1106f",
          8431: "2708f1d94a4e0da0981dbd7aae39f77f",
          8745: "094d8ed56b627bdb3ef7cf3415c4b127",
          8755: "1e4d0ffe2a688d92f5200b1ffb4b6a44",
          8845: "f89ff596fbd31d28faada49c3254d026",
          8880: "c75285c07f1d6acc293e91fd86b1b6b7",
          8938: "0c26cad881075c6a73753e8eb1409be2",
          8970: "c88272301fbae233c3e054d5b9aac938",
          9022: "3c7eeec3e54c3883012780a8cdbba47f",
          9028: "0e1096b3e5e082a79105c3a86ef6bf9b",
          9126: "f3ed91f110cdf24ce631e52a4802e7ca",
          9377: "09f3dedfb85c3d4f28e22bd6b6046ea8",
          9403: "b69f982761230c100defae9c5fd84648",
          9615: "8f1b0508845c164044920b3103c2ab03",
          9760: "c8ec22f36a35201da36bd52d1ff78e98",
          9763: "a3829c9183614599cd6e4be9253c2ef5",
          9936: "309b564e7f8d0a06ba2b1530c009d1c1",
          9990: "abf2d64b39ed202871fe54f50b03bf63"
        } [e] + ".js", i.miniCssF = e => "css/" + {
          1913: "c1eb0999629396bc2adecd5b07d203b7",
          2217: "34b3f5465a92bac15ce2a811712ab3bf",
          3608: "c1eb0999629396bc2adecd5b07d203b7",
          4598: "34b3f5465a92bac15ce2a811712ab3bf",
          5542: "34020f0afbe473d157664cc7fcdfd572",
          8032: "ee92674f8b48502905dbc873bde78d37"
        } [e] + ".css", i.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), i.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), t = {}, c = "@rockstargames/sites-red-dead-redemption-2:", i.l = (e, a, d, r) => {
          if (t[e]) t[e].push(a);
          else {
            var f, n;
            if (void 0 !== d)
              for (var o = document.getElementsByTagName("script"), b = 0; b < o.length; b++) {
                var s = o[b];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == c + d) {
                  f = s;
                  break
                }
              }
            f || (n = !0, (f = document.createElement("script")).charset = "utf-8", f.timeout = 120, i.nc && f.setAttribute("nonce", i.nc), f.setAttribute("data-webpack", c + d), f.src = e), t[e] = [a];
            var l = (a, d) => {
                f.onerror = f.onload = null, clearTimeout(u);
                var r = t[e];
                if (delete t[e], f.parentNode && f.parentNode.removeChild(f), r && r.forEach(e => e(d)), a) return a(d)
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
          8032: [31879]
        }, n = {
          31879: ["default", "./index", 25136]
        }, i.f.remotes = (e, a) => {
          i.o(f, e) && f[e].forEach(e => {
            var d = i.R;
            d || (d = []);
            var r = n[e];
            if (!(d.indexOf(r) >= 0)) {
              if (d.push(r), r.p) return a.push(r.p);
              var t = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + r[1] + '" from ' + r[2]), i.m[e] = () => {
                    throw a
                  }, r.p = 0
                },
                c = (e, d, c, f, n, o) => {
                  try {
                    var b = e(d, c);
                    if (!b || !b.then) return n(b, f, o);
                    var i = b.then(e => n(e, f), t);
                    if (!o) return i;
                    a.push(r.p = i)
                  } catch (e) {
                    t(e)
                  }
                },
                f = (e, a, t) => c(a.get, r[1], d, 0, o, t),
                o = a => {
                  r.p = 1, i.m[e] = e => {
                    e.exports = a()
                  }
                };
              c(i, r[2], 0, 0, (e, a, d) => e ? c(i.I, r[0], 0, e, f, d) : t(), 1)
            }
          })
        }, (() => {
          i.S = {};
          var e = {},
            a = {};
          i.I = (d, r) => {
            r || (r = []);
            var t = a[d];
            if (t || (t = a[d] = {}), !(r.indexOf(t) >= 0)) {
              if (r.push(t), e[d]) return e[d];
              i.o(i.S, d) || (i.S[d] = {});
              var c = i.S[d],
                f = "@rockstargames/sites-red-dead-redemption-2",
                n = (e, a, d, r) => {
                  var t = c[e] = c[e] || {},
                    n = t[a];
                  (!n || !n.loaded && (!r != !n.eager ? r : f > n.from)) && (t[a] = {
                    get: d,
                    from: f,
                    eager: !!r
                  })
                },
                o = [];
              return "default" === d && (n("@foundry/icons", "5.17.3", () => Promise.all([i.e(3004), i.e(5523), i.e(4232), i.e(1127), i.e(8429), i.e(1556), i.e(3608)]).then(() => () => i(34232))), n("@foundry/react", "5.17.3", () => Promise.all([i.e(3004), i.e(2787), i.e(832), i.e(5523), i.e(5542), i.e(9403), i.e(1127), i.e(8429), i.e(1556), i.e(4531)]).then(() => () => i(5542))), n("@rsgweb/locale-tools", "0.0.0", () => Promise.all([i.e(3004), i.e(2787), i.e(1127), i.e(2319)]).then(() => () => i(2319))), n("@rsgweb/modules-core-agegate", "0.0.0", () => Promise.all([i.e(832), i.e(2065), i.e(9763), i.e(2508), i.e(1127), i.e(6088), i.e(2169), i.e(2217)]).then(() => () => i(42217))), n("@rsgweb/utils", "0.0.0", () => Promise.all([i.e(3004), i.e(832), i.e(2065), i.e(4057), i.e(1127), i.e(6088), i.e(6990), i.e(2853)]).then(() => () => i(42853))), n("clsx", "2.1.1", () => i.e(439).then(() => () => i(10439))), n("lodash", "4.17.21", () => i.e(5076).then(() => () => i(15076))), n("react-dom", "18.3.1", () => Promise.all([i.e(1098), i.e(1127)]).then(() => () => i(71098))), n("react-router-dom", "6.30.1", () => Promise.all([i.e(5389), i.e(1127), i.e(8429)]).then(() => () => i(15389))), n("react", "18.3.1", () => i.e(8431).then(() => () => i(48431))), (() => {
                var e = e => {
                  return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                  var a
                };
                try {
                  var a = i(25136);
                  if (!a) return;
                  var t = e => e && e.init && e.init(i.S[d], r);
                  if (a.then) return o.push(a.then(t, e));
                  var c = t(a);
                  if (c && c.then) return o.push(c.catch(e))
                } catch (a) {
                  e(a)
                }
              })()), o.length ? e[d] = Promise.all(o).then(() => e[d] = 1) : e[d] = 1
            }
          }
        })(), (() => {
          var e;
          i.g.importScripts && (e = i.g.location + "");
          var a = i.g.document;
          if (!e && a && (a.currentScript && "SCRIPT" === a.currentScript.tagName.toUpperCase() && (e = a.currentScript.src), !e)) {
            var d = a.getElementsByTagName("script");
            if (d.length)
              for (var r = d.length - 1; r > -1 && (!e || !/^http(s?):/.test(e));) e = d[r--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), i.p = e
        })(), (() => {
          var e = e => {
              var a = e => e.split(".").map(e => +e == e ? +e : e),
                d = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                r = d[1] ? a(d[1]) : [];
              return d[2] && (r.length++, r.push.apply(r, a(d[2]))), d[3] && (r.push([]), r.push.apply(r, a(d[3]))), r
            },
            a = e => {
              var d = e[0],
                r = "";
              if (1 === e.length) return "*";
              if (d + .5) {
                r += 0 == d ? ">=" : -1 == d ? "<" : 1 == d ? "^" : 2 == d ? "~" : d > 0 ? "=" : "!=";
                for (var t = 1, c = 1; c < e.length; c++) t--, r += "u" == (typeof(n = e[c]))[0] ? "-" : (t > 0 ? "." : "") + (t = 2, n);
                return r
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
            d = (a, r) => {
              if (0 in a) {
                r = e(r);
                var t = a[0],
                  c = t < 0;
                c && (t = -t - 1);
                for (var f = 0, n = 1, o = !0;; n++, f++) {
                  var b, i, s = n < a.length ? (typeof a[n])[0] : "";
                  if (f >= r.length || "o" == (i = (typeof(b = r[f]))[0])) return !o || ("u" == s ? n > t && !c : "" == s != c);
                  if ("u" == i) {
                    if (!o || "u" != s) return !1
                  } else if (o)
                    if (s == i)
                      if (n <= t) {
                        if (b != a[n]) return !1
                      } else {
                        if (c ? b > a[n] : b < a[n]) return !1;
                        b != a[n] && (o = !1)
                      }
                  else if ("s" != s && "n" != s) {
                    if (c || n <= t) return !1;
                    o = !1, n--
                  } else {
                    if (n <= t || i < s != c) return !1;
                    o = !1
                  } else "s" != s && "n" != s && (o = !1, n--)
                }
              }
              var l = [],
                u = l.pop.bind(l);
              for (f = 1; f < a.length; f++) {
                var h = a[f];
                l.push(1 == h ? u() | u() : 2 == h ? u() & u() : h ? d(h, r) : !u())
              }
              return !!u()
            },
            r = (a, d, r) => {
              var t = r ? (e => Object.keys(e).reduce((a, d) => (e[d].eager && (a[d] = e[d]), a), {}))(a[d]) : a[d];
              return Object.keys(t).reduce((a, d) => !a || !t[a].loaded && ((a, d) => {
                a = e(a), d = e(d);
                for (var r = 0;;) {
                  if (r >= a.length) return r < d.length && "u" != (typeof d[r])[0];
                  var t = a[r],
                    c = (typeof t)[0];
                  if (r >= d.length) return "u" == c;
                  var f = d[r],
                    n = (typeof f)[0];
                  if (c != n) return "o" == c && "n" == n || "s" == n || "u" == c;
                  if ("o" != c && "u" != c && t != f) return t < f;
                  r++
                }
              })(a, d) ? d : a, 0)
            },
            t = (e, a, d) => d ? d() : ((e, a) => (e => {
              throw new Error(e)
            })("Shared module " + a + " doesn't exist in shared scope " + e))(e, a),
            c = (e => function(a, d, r, t, c) {
              var f = i.I(a);
              return f && f.then && !r ? f.then(e.bind(e, a, i.S[a], d, !1, t, c)) : e(a, i.S[a], d, r, t, c)
            })((e, c, f, n, o, b) => {
              if (!((e, a) => e && i.o(e, a))(c, f)) return t(e, f, b);
              var s, l, u = r(c, f, n);
              return d(o, u) || (l = ((e, d, r, t) => "Unsatisfied version " + r + " from " + (r && e[d][r].from) + " of shared singleton module " + d + " (required " + a(t) + ")")(c, f, u, o), "undefined" != typeof console && console.warn && console.warn(l)), (s = c[f][u]).loaded = 1, s.get()
            }),
            f = {},
            n = {
              71127: () => c("default", "react", !1, [1, 18, 2, 0], () => i.e(8431).then(() => () => i(48431))),
              18429: () => c("default", "react-dom", !1, [1, 18, 2, 0], () => i.e(1098).then(() => () => i(71098))),
              10181: () => c("default", "react-router-dom", !1, [1, 6, 11, 2], () => Promise.all([i.e(5389), i.e(8429)]).then(() => () => i(15389))),
              10336: () => c("default", "lodash", !1, [1, 4, 17, 21], () => i.e(5076).then(() => () => i(15076))),
              1556: () => c("default", "clsx", !1, [1, 2, 1, 1], () => i.e(439).then(() => () => i(10439))),
              56990: () => c("default", "@rsgweb/locale-tools", !1, [4, 0, 0, 0], () => Promise.all([i.e(2787), i.e(7557)]).then(() => () => i(2319))),
              58136: () => c("default", "@rsgweb/utils", !1, [4, 0, 0, 0], () => Promise.all([i.e(3004), i.e(4057), i.e(6990), i.e(2853)]).then(() => () => i(42853))),
              48974: () => c("default", "@rsgweb/modules-core-agegate", !1, [4, 0, 0, 0], () => Promise.all([i.e(2508), i.e(4598)]).then(() => () => i(42217))),
              93231: () => c("default", "@foundry/react", !1, [2, 5, 17], () => Promise.all([i.e(2787), i.e(5542), i.e(4531)]).then(() => () => i(5542))),
              84531: () => c("default", "@foundry/icons", !1, [2, 5, 17], () => Promise.all([i.e(4232), i.e(1913)]).then(() => () => i(34232)))
            },
            o = {
              1127: [71127],
              1556: [1556],
              2169: [58136],
              4531: [84531],
              6088: [10181, 10336],
              6990: [56990],
              8032: [48974, 93231],
              8429: [18429]
            },
            b = {};
          i.f.consumes = (e, a) => {
            i.o(o, e) && o[e].forEach(e => {
              if (i.o(f, e)) return a.push(f[e]);
              if (!b[e]) {
                var d = a => {
                  f[e] = 0, i.m[e] = d => {
                    delete i.c[e], d.exports = a()
                  }
                };
                b[e] = !0;
                var r = a => {
                  delete f[e], i.m[e] = d => {
                    throw delete i.c[e], a
                  }
                };
                try {
                  var t = n[e]();
                  t.then ? a.push(f[e] = t.then(d).catch(r)) : d(t)
                } catch (e) {
                  r(e)
                }
              }
            })
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              5082: 0
            };
            i.f.miniCss = (a, d) => {
              e[a] ? d.push(e[a]) : 0 !== e[a] && {
                1913: 1,
                2217: 1,
                3608: 1,
                4598: 1,
                5542: 1,
                8032: 1
              } [a] && d.push(e[a] = (e => new Promise((a, d) => {
                var r = i.miniCssF(e),
                  t = i.p + r;
                if (((e, a) => {
                    for (var d = document.getElementsByTagName("link"), r = 0; r < d.length; r++) {
                      var t = (f = d[r]).getAttribute("data-href") || f.getAttribute("href");
                      if ("stylesheet" === f.rel && (t === e || t === a)) return f
                    }
                    var c = document.getElementsByTagName("style");
                    for (r = 0; r < c.length; r++) {
                      var f;
                      if ((t = (f = c[r]).getAttribute("data-href")) === e || t === a) return f
                    }
                  })(r, t)) return a();
                ((e, a, d, r, t) => {
                  var c = document.createElement("link");
                  c.rel = "stylesheet", c.type = "text/css", i.nc && (c.nonce = i.nc), c.onerror = c.onload = d => {
                    if (c.onerror = c.onload = null, "load" === d.type) r();
                    else {
                      var f = d && d.type,
                        n = d && d.target && d.target.href || a,
                        o = new Error("Loading CSS chunk " + e + " failed.\n(" + f + ": " + n + ")");
                      o.name = "ChunkLoadError", o.code = "CSS_CHUNK_LOAD_FAILED", o.type = f, o.request = n, c.parentNode && c.parentNode.removeChild(c), t(o)
                    }
                  }, c.href = a, document.head.appendChild(c)
                })(e, t, 0, a, d)
              }))(a).then(() => {
                e[a] = 0
              }, d => {
                throw delete e[a], d
              }))
            }
          }
        })(), (() => {
          var e = {
            5082: 0
          };
          i.f.j = (a, d) => {
            var r = i.o(e, a) ? e[a] : void 0;
            if (0 !== r)
              if (r) d.push(r[2]);
              else if (/^(1(127|556|913)|4531|6990|8429)$/.test(a)) e[a] = 0;
            else {
              var t = new Promise((d, t) => r = e[a] = [d, t]);
              d.push(r[2] = t);
              var c = i.p + i.u(a),
                f = new Error;
              i.l(c, d => {
                if (i.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
                  var t = d && ("load" === d.type ? "missing" : d.type),
                    c = d && d.target && d.target.src;
                  f.message = "Loading chunk " + a + " failed.\n(" + t + ": " + c + ")", f.name = "ChunkLoadError", f.type = t, f.request = c, r[1](f)
                }
              }, "chunk-" + a, a)
            }
          };
          var a = (a, d) => {
              var r, t, [c, f, n] = d,
                o = 0;
              if (c.some(a => 0 !== e[a])) {
                for (r in f) i.o(f, r) && (i.m[r] = f[r]);
                n && n(i)
              }
              for (a && a(d); o < c.length; o++) t = c[o], i.o(e, t) && e[t] && e[t][0](), e[t] = 0
            },
            d = self.webpackChunk_rockstargames_sites_red_dead_redemption_2 = self.webpackChunk_rockstargames_sites_red_dead_redemption_2 || [];
          d.forEach(a.bind(null, 0)), d.push = a.bind(null, d.push.bind(d))
        })(), i.nc = void 0, i(93032), i(85819)
      })())
    }
  }
});