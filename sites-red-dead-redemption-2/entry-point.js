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
        var e, r, t, f, c, n, o = {
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
                for (var r = "/" === d.pathname[0] ? d.pathname : "/" + d.pathname, t = 0, f = r.length; t !== a && f >= 0;) "/" === r[--f] && t++;
                if (t !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + t + ") in the URL path " + e);
                var c = r.slice(0, f + 1);
                return d.protocol + "//" + d.host + c
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
                f = (e, a) => {
                  if (d.S) {
                    var r = "default",
                      t = d.S[r];
                    if (t && t !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return d.S[r] = e, d.I(r, a)
                  }
                };
              d.d(a, {
                get: () => t,
                init: () => f
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
          var f = {};
          e = e || [null, r({}), r([]), r(r)];
          for (var c = 2 & d && a;
            ("object" == typeof c || "function" == typeof c) && !~e.indexOf(c); c = r(c)) Object.getOwnPropertyNames(c).forEach(e => f[e] = () => a[e]);
          return f.default = () => a, i.d(t, f), t
        }, i.d = (e, a) => {
          for (var d in a) i.o(a, d) && !i.o(e, d) && Object.defineProperty(e, d, {
            enumerable: !0,
            get: a[d]
          })
        }, i.f = {}, i.e = e => Promise.all(Object.keys(i.f).reduce((a, d) => (i.f[d](e, a), a), [])), i.u = e => "js/" + {
          68: "a214ad9545f6237a72e9941a85c93455",
          131: "9eaf4cfb9f710673867db6bb62d81a31",
          173: "c8dde45b4acc855ac3a4a60c84c7f269",
          278: "6c75e948e2f5655e263893d17398cc59",
          299: "539fce647a55819ee8069c33e60bb4de",
          314: "8f26606569f306549373b45b7f4185e4",
          439: "6895b82e3d45e98ce936bab475a484e9",
          662: "fb77e0c46d58526a45e65a4c1ae61854",
          824: "f62147f55e241433a914cb758ea6fa9e",
          832: "fd69cea9e807bc353815523dcb76077f",
          907: "fd3febb8c0ce5eb9deea2b2ea9d8c627",
          1054: "8ce5415a5ad970491e67ba6d7fa942d4",
          1098: "8b6ed5f67a510d09081917015a1cb706",
          1242: "829a197196b02efffff280d547d232d2",
          1758: "d10660daed396ef653ba90d1dcc719dd",
          1822: "c350a12218547f8280fcebf2d4819ebd",
          1868: "0df046f9fc259778cf5daced11518dcb",
          2065: "2837fa9dbcadf6a09dd33d1b98851e22",
          2156: "948e7ea3cc7f28d71e2a981cc9f11815",
          2169: "6e8fce0d08c86e6fbfc7798ff8be1fc2",
          2171: "8f5a9af0f16aac89e2b59cd8adf36269",
          2217: "6cbbc43455cc21fd36c977044bd2f7b0",
          2221: "1332c9ea357ee5b90dd64d9feca2cf56",
          2234: "5252fe94e27f51cd7cb0b05f7a2e68fe",
          2243: "3a69dacd928f1d93bfa9a3571d48a964",
          2306: "72c7afc74cdc65763f0392a2d44cd99f",
          2319: "7bf01578e15990f2fc9aa221f3499ef7",
          2347: "8eff31333746ee018774d76c7fb40748",
          2365: "e0f43e4747283cfd822b870b71e42857",
          2398: "8229dc4601db9572a5fa81b39f31fe14",
          2466: "f47d55c12a4c24d9952560a9b2532f82",
          2508: "60f9a28c07154e4c842e22c5d9927264",
          2642: "768eef2f2163b5c94430192b71aad217",
          2678: "1408f85b51a8ac20a273f123c67ebdac",
          2787: "e20d3561eddfdcab1f991448828cbbfc",
          2853: "1f8e5b0c1b15807b0e51f4e4674cac09",
          2864: "5ec260cdbe469534e1e1e7dcdccdbccc",
          3004: "2671f992d41bc892918bdc9db69c0b55",
          3034: "13c40f4080a0831975cfb67936a444c0",
          3197: "c9bd7898dcc048787ecb4ffd54ec44a2",
          3343: "388fb0a358841335510051a562e6a4be",
          3370: "5f7aa0ac1e60b60e0174b7b5309a5698",
          3475: "233f23729e6f16b8bfc5736e3b226784",
          3486: "f5202d219447553f914753a08007881d",
          3608: "84441a0fa6adc4eaa170f88a546899d6",
          3697: "3ebf89a97d12ddccb38c578d9dea3925",
          3885: "96c981d9cbef48d159151283ccde5a4f",
          3896: "832ff4367231ea1ac552bd36e63fc20f",
          3941: "2208e7bb4156fe0875d4980eb06b2794",
          4011: "b0dd5b17cf1f0d350d41284106d9cf88",
          4057: "dd161244c36e1b9dde0f4ad179271b29",
          4232: "766eb0c8c74ba48250c3acea05a10ac5",
          4528: "1e6459b4672117d964f0974da600bc49",
          4578: "616b7f5074c79481fa683ef28b8913f2",
          4598: "4cc9cb48973709fcfb234ccf179a65e1",
          4621: "eec0da9f723a76fc66488ee139970e46",
          4700: "a6734009a7de22b39a62ec0b0fbecf08",
          4710: "cf29b9b07351fd5a97133098c3f0aae8",
          4731: "bfeca35feeab474d397c3a89d6b1f1a8",
          4799: "1d8b224c3b536c8c2fe012625bc94419",
          4851: "e7f74afdc1e9b821cdc6e7e26668f351",
          4861: "370ad480ac99625c4bd595db90cd3537",
          4913: "d0d6c8a2325201fba6bc8dd06737994b",
          5018: "81c61e217245840a4f3b710168ed00d3",
          5076: "0e8760760a31ad8267bed0c97d9b6f76",
          5233: "367899c95c551ac4db8d044124544f81",
          5259: "23de78b00fee32d2b42903a220628c69",
          5265: "170167a852b2d98e100c0249763c7d94",
          5389: "6c086efd939801f5a6ecf83cb18e6961",
          5415: "31cccd55d597d7f156540c6058e745a0",
          5523: "a9eef8e0c5f4c74ab723ff65febee103",
          5530: "3c7f28dc074b0857c421f74fe5464957",
          5542: "6ba6481d667ba922c0c8138f34b4b06b",
          5639: "309148b02eeb9de6254fd5c8d06f9d87",
          5663: "367692663d02989359c60b2ac0962d82",
          5742: "05f452c2e76f4d9f6842d62ed2e270d8",
          5830: "da88fae49571968c607cfa4a0cedb917",
          5832: "cf85bff20964570dd647b1785e26eb8c",
          6088: "485355ad5c3a3f00bb42cfa7ab79634f",
          6267: "2a389fc169c1c5c05adc9be973b2193b",
          6280: "30f30b8cbdc92adc45f32f2c81a1c089",
          6285: "b9adf8b94715ff54a63c62c182f8bc9f",
          6361: "eafe3908f0d75742068ee1cd76f9cf36",
          6471: "6760ef01e652e9ecdfba65f0595cbf12",
          6664: "bc0fbbb3fe93abbc912b3a0698902bad",
          6879: "1f5ef53429182d561c3d8b9b690f2f9a",
          6891: "8d944b9a90e547017c34f4d29f76a9c2",
          6997: "9c9ec6a2579c8660b9a247d5b946d816",
          7010: "d15ef8782b4e9906c3fa182e63d5260b",
          7073: "ad0878d8dcae2945f3fbb1d47f74c9d8",
          7407: "5cf0e466aa001ad619e70804040bb4dc",
          7436: "665823f6f99e4061f1c95aa674cdec28",
          7452: "21ebe16ca6ba14505392341712aa3841",
          7453: "b197643794821db5975b1010d2617fd4",
          7557: "e962183abd010f10b7a010f26a0a3660",
          7970: "f0b8d06ef91ea7bcf2faa9ab95244d51",
          8032: "efbcb68fca04b28d0a18fab857c146ad",
          8272: "15e3d0283aa4de0cda2b2651dba9946b",
          8325: "045e9714942343ac0accfb5e4261dc07",
          8391: "7ed4e09671a3e26282bea4582fdcbedc",
          8431: "8512697b51d9f97fedf1b449558e2a1a",
          8745: "012e1341201042a886306128374a77f7",
          8755: "a143c483f815e9f1d648ae8ce28d9474",
          8845: "73a1a6fca67edfb4e63ddc030d0e00fe",
          8880: "466fcb605f190f1d3c8c7c2e3088f8a1",
          8938: "3b7c1d068e26ba4a042bdafc83baaa4a",
          8970: "d1168ef72362bb667a94d1897a454359",
          9022: "3dcae9d525150c4e2263016578be7763",
          9028: "12ec46d943c503ab8876bba42c1aa3c0",
          9126: "486f9766f33cdbde972eb33007e289dd",
          9377: "2e5c5c5860107122284fa6d4c1650383",
          9403: "2f7849ad0031d08fe788e078c7a9f0ae",
          9615: "31ea7241536b7f3475ebc4dd1e8f6f82",
          9760: "a77f20af51641f34dfdffe858317c210",
          9763: "cffd3bc1a7fc8352539388954dd85ae4",
          9936: "57412490fd82b03f244e8420c10ed3b3",
          9990: "ffc4d762ee647afcb9115c735d04070a"
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
        }(), i.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), t = {}, f = "@rockstargames/sites-red-dead-redemption-2:", i.l = (e, a, d, r) => {
          if (t[e]) t[e].push(a);
          else {
            var c, n;
            if (void 0 !== d)
              for (var o = document.getElementsByTagName("script"), b = 0; b < o.length; b++) {
                var s = o[b];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == f + d) {
                  c = s;
                  break
                }
              }
            c || (n = !0, (c = document.createElement("script")).charset = "utf-8", c.timeout = 120, i.nc && c.setAttribute("nonce", i.nc), c.setAttribute("data-webpack", f + d), c.src = e), t[e] = [a];
            var l = (a, d) => {
                c.onerror = c.onload = null, clearTimeout(u);
                var r = t[e];
                if (delete t[e], c.parentNode && c.parentNode.removeChild(c), r && r.forEach(e => e(d)), a) return a(d)
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
          8032: [31879]
        }, n = {
          31879: ["default", "./index", 25136]
        }, i.f.remotes = (e, a) => {
          i.o(c, e) && c[e].forEach(e => {
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
                f = (e, d, f, c, n, o) => {
                  try {
                    var b = e(d, f);
                    if (!b || !b.then) return n(b, c, o);
                    var i = b.then(e => n(e, c), t);
                    if (!o) return i;
                    a.push(r.p = i)
                  } catch (e) {
                    t(e)
                  }
                },
                c = (e, a, t) => f(a.get, r[1], d, 0, o, t),
                o = a => {
                  r.p = 1, i.m[e] = e => {
                    e.exports = a()
                  }
                };
              f(i, r[2], 0, 0, (e, a, d) => e ? f(i.I, r[0], 0, e, c, d) : t(), 1)
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
              var f = i.S[d],
                c = "@rockstargames/sites-red-dead-redemption-2",
                n = (e, a, d, r) => {
                  var t = f[e] = f[e] || {},
                    n = t[a];
                  (!n || !n.loaded && (!r != !n.eager ? r : c > n.from)) && (t[a] = {
                    get: d,
                    from: c,
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
                  var f = t(a);
                  if (f && f.then) return o.push(f.catch(e))
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
                for (var t = 1, f = 1; f < e.length; f++) t--, r += "u" == (typeof(n = e[f]))[0] ? "-" : (t > 0 ? "." : "") + (t = 2, n);
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
            d = (a, r) => {
              if (0 in a) {
                r = e(r);
                var t = a[0],
                  f = t < 0;
                f && (t = -t - 1);
                for (var c = 0, n = 1, o = !0;; n++, c++) {
                  var b, i, s = n < a.length ? (typeof a[n])[0] : "";
                  if (c >= r.length || "o" == (i = (typeof(b = r[c]))[0])) return !o || ("u" == s ? n > t && !f : "" == s != f);
                  if ("u" == i) {
                    if (!o || "u" != s) return !1
                  } else if (o)
                    if (s == i)
                      if (n <= t) {
                        if (b != a[n]) return !1
                      } else {
                        if (f ? b > a[n] : b < a[n]) return !1;
                        b != a[n] && (o = !1)
                      }
                  else if ("s" != s && "n" != s) {
                    if (f || n <= t) return !1;
                    o = !1, n--
                  } else {
                    if (n <= t || i < s != f) return !1;
                    o = !1
                  } else "s" != s && "n" != s && (o = !1, n--)
                }
              }
              var l = [],
                u = l.pop.bind(l);
              for (c = 1; c < a.length; c++) {
                var h = a[c];
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
                    f = (typeof t)[0];
                  if (r >= d.length) return "u" == f;
                  var c = d[r],
                    n = (typeof c)[0];
                  if (f != n) return "o" == f && "n" == n || "s" == n || "u" == f;
                  if ("o" != f && "u" != f && t != c) return t < c;
                  r++
                }
              })(a, d) ? d : a, 0)
            },
            t = (e, a, d) => d ? d() : ((e, a) => (e => {
              throw new Error(e)
            })("Shared module " + a + " doesn't exist in shared scope " + e))(e, a),
            f = (e => function(a, d, r, t, f) {
              var c = i.I(a);
              return c && c.then && !r ? c.then(e.bind(e, a, i.S[a], d, !1, t, f)) : e(a, i.S[a], d, r, t, f)
            })((e, f, c, n, o, b) => {
              if (!((e, a) => e && i.o(e, a))(f, c)) return t(e, c, b);
              var s, l, u = r(f, c, n);
              return d(o, u) || (l = ((e, d, r, t) => "Unsatisfied version " + r + " from " + (r && e[d][r].from) + " of shared singleton module " + d + " (required " + a(t) + ")")(f, c, u, o), "undefined" != typeof console && console.warn && console.warn(l)), (s = f[c][u]).loaded = 1, s.get()
            }),
            c = {},
            n = {
              71127: () => f("default", "react", !1, [1, 18, 2, 0], () => i.e(8431).then(() => () => i(48431))),
              18429: () => f("default", "react-dom", !1, [1, 18, 2, 0], () => i.e(1098).then(() => () => i(71098))),
              10181: () => f("default", "react-router-dom", !1, [1, 6, 11, 2], () => Promise.all([i.e(5389), i.e(8429)]).then(() => () => i(15389))),
              10336: () => f("default", "lodash", !1, [1, 4, 17, 21], () => i.e(5076).then(() => () => i(15076))),
              1556: () => f("default", "clsx", !1, [1, 2, 1, 1], () => i.e(439).then(() => () => i(10439))),
              56990: () => f("default", "@rsgweb/locale-tools", !1, [4, 0, 0, 0], () => Promise.all([i.e(2787), i.e(7557)]).then(() => () => i(2319))),
              58136: () => f("default", "@rsgweb/utils", !1, [4, 0, 0, 0], () => Promise.all([i.e(3004), i.e(4057), i.e(6990), i.e(2853)]).then(() => () => i(42853))),
              48974: () => f("default", "@rsgweb/modules-core-agegate", !1, [4, 0, 0, 0], () => Promise.all([i.e(2508), i.e(4598)]).then(() => () => i(42217))),
              93231: () => f("default", "@foundry/react", !1, [2, 5, 17], () => Promise.all([i.e(2787), i.e(5542), i.e(4531)]).then(() => () => i(5542))),
              84531: () => f("default", "@foundry/icons", !1, [2, 5, 17], () => Promise.all([i.e(4232), i.e(1913)]).then(() => () => i(34232)))
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
              if (i.o(c, e)) return a.push(c[e]);
              if (!b[e]) {
                var d = a => {
                  c[e] = 0, i.m[e] = d => {
                    delete i.c[e], d.exports = a()
                  }
                };
                b[e] = !0;
                var r = a => {
                  delete c[e], i.m[e] = d => {
                    throw delete i.c[e], a
                  }
                };
                try {
                  var t = n[e]();
                  t.then ? a.push(c[e] = t.then(d).catch(r)) : d(t)
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
                      var t = (c = d[r]).getAttribute("data-href") || c.getAttribute("href");
                      if ("stylesheet" === c.rel && (t === e || t === a)) return c
                    }
                    var f = document.getElementsByTagName("style");
                    for (r = 0; r < f.length; r++) {
                      var c;
                      if ((t = (c = f[r]).getAttribute("data-href")) === e || t === a) return c
                    }
                  })(r, t)) return a();
                ((e, a, d, r, t) => {
                  var f = document.createElement("link");
                  f.rel = "stylesheet", f.type = "text/css", i.nc && (f.nonce = i.nc), f.onerror = f.onload = d => {
                    if (f.onerror = f.onload = null, "load" === d.type) r();
                    else {
                      var c = d && d.type,
                        n = d && d.target && d.target.href || a,
                        o = new Error("Loading CSS chunk " + e + " failed.\n(" + c + ": " + n + ")");
                      o.name = "ChunkLoadError", o.code = "CSS_CHUNK_LOAD_FAILED", o.type = c, o.request = n, f.parentNode && f.parentNode.removeChild(f), t(o)
                    }
                  }, f.href = a, document.head.appendChild(f)
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
              var f = i.p + i.u(a),
                c = new Error;
              i.l(f, d => {
                if (i.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
                  var t = d && ("load" === d.type ? "missing" : d.type),
                    f = d && d.target && d.target.src;
                  c.message = "Loading chunk " + a + " failed.\n(" + t + ": " + f + ")", c.name = "ChunkLoadError", c.type = t, c.request = f, r[1](c)
                }
              }, "chunk-" + a, a)
            }
          };
          var a = (a, d) => {
              var r, t, [f, c, n] = d,
                o = 0;
              if (f.some(a => 0 !== e[a])) {
                for (r in c) i.o(c, r) && (i.m[r] = c[r]);
                n && n(i)
              }
              for (a && a(d); o < f.length; o++) t = f[o], i.o(e, t) && e[t] && e[t][0](), e[t] = 0
            },
            d = self.webpackChunk_rockstargames_sites_red_dead_redemption_2 = self.webpackChunk_rockstargames_sites_red_dead_redemption_2 || [];
          d.forEach(a.bind(null, 0)), d.push = a.bind(null, d.push.bind(d))
        })(), i.nc = void 0, i(93032), i(85819)
      })())
    }
  }
});