! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "c8576acd-e8d5-4826-a626-1523c10fb7db", e._sentryDebugIdIdentifier = "sentry-dbid-c8576acd-e8d5-4826-a626-1523c10fb7db")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-footer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register([], (function(e, a) {
  return {
    execute: function() {
      e((() => {
        var e, f, c, d, r, t, b = {
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
                for (var c = "/" === f.pathname[0] ? f.pathname : "/" + f.pathname, d = 0, r = c.length; d !== a && r >= 0;) "/" === c[--r] && d++;
                if (d !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + d + ") in the URL path " + e);
                var t = c.slice(0, r + 1);
                return f.protocol + "//" + f.host + t
              };
              Number.isInteger
            },
            98478: (e, a, f) => {
              "use strict";
              var c = {
                  "./root": () => Promise.all([f.e(40), f.e(7454), f.e(2604), f.e(7168), f.e(5654), f.e(2229), f.e(9623), f.e(4853), f.e(5966), f.e(5311), f.e(1283)]).then((() => () => f(91283)))
                },
                d = (e, a) => (f.R = a, a = f.o(c, e) ? c[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), f.R = void 0, a),
                r = (e, a) => {
                  if (f.S) {
                    var c = "default",
                      d = f.S[c];
                    if (d && d !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return f.S[c] = e, f.I(c, a)
                  }
                };
              f.d(a, {
                get: () => d,
                init: () => r
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
          var d = Object.create(null);
          n.r(d);
          var r = {};
          e = e || [null, f({}), f([]), f(f)];
          for (var t = 2 & c && a;
            "object" == typeof t && !~e.indexOf(t); t = f(t)) Object.getOwnPropertyNames(t).forEach((e => r[e] = () => a[e]));
          return r.default = () => a, n.d(d, r), d
        }, n.d = (e, a) => {
          for (var f in a) n.o(a, f) && !n.o(e, f) && Object.defineProperty(e, f, {
            enumerable: !0,
            get: a[f]
          })
        }, n.f = {}, n.e = e => Promise.all(Object.keys(n.f).reduce(((a, f) => (n.f[f](e, a), a)), [])), n.u = e => "js/" + {
          40: "c32a42b767a56867e0a29a889c842086",
          131: "b8f40e6be9f9e4c5a69ce37f56f542f3",
          278: "fa7e71a31fbd3b86538bdaa867ae1f3e",
          299: "182d969e274c7ced32ce5dcbdc79d5e0",
          314: "e4bc163261a9a6eb0fbc8537a6c0a4ba",
          377: "84ff4d737a0bcc90cb2ebfece4f6c87c",
          601: "b800e09a8bfea4a1e8086d35b16e9741",
          662: "b59299de31e4bf1eccd85e1bc7d9dfb7",
          721: "d0b0a39539904dbd08115bc659f9074e",
          824: "0cce1d59cb0b7b5c2bcbe3bc470eb4a8",
          888: "c2a14aa80e61e33ff8c7658b4a225273",
          907: "72e546ca278087cda6f9ace1c4f0d134",
          969: "89a0dbcfd00cab0af7aa9be1a1550bff",
          1054: "dd8455fc7ea0f16b7723618bfa50f68a",
          1242: "f9c960df9f7ec40018ee4d05fdc39178",
          1283: "e8cad279da7078a4d0d8f1700dfdcdd3",
          1360: "f377b7d99739273adba67502de19cb02",
          1506: "a4080d7538264fad15820082a227498d",
          1607: "41b2abc006ae4d89bb1730c7bbccdd2d",
          1673: "3120a6d001d4c5918aadccf1b6bae9a9",
          1720: "1fe45fb1c522a458b63537e72876a048",
          1734: "73bc6df6dcedc8c31a02cce565ed4e98",
          1796: "7c32251da2293197aa04191d4851d3e2",
          1822: "99e44030a223750740c6b89b62bd0fa8",
          1868: "f4ccc2b528546cf9d53d8e17c471401c",
          2024: "4f8d2c65587da842a417d6c1cd9149c8",
          2156: "5e6ccd0508d1c6fa7847151b18980dba",
          2171: "affc56093154c5a4407eb17717cf015c",
          2221: "1795e1173b34eafaa9d19a7dd53e2e15",
          2229: "5f7443664507c92cb2b814b672ce5625",
          2243: "d7416b9adbea524ed6e2e974ea9a66e7",
          2347: "54bf63f2fdc5a8e1b03b102bafae7e77",
          2365: "17311a89ed674d3b4723fd844497baea",
          2398: "1747b49124dfd60639e14037e16f2044",
          2466: "eb59df79433d0c3f5a7b2022f411f894",
          2604: "f7bd5e3ddb97f3da5b1ae8ac70074569",
          2642: "2a46d934b4046fc20ddefbf11beafedd",
          2678: "f3097d869999abe5237528a03f18f2fc",
          2772: "ad06a9556e4baeb9ca4e95feb523261d",
          2864: "fd4c91e569dbc92c30fce23fd4007243",
          2941: "10bf0b1cc297260e283519e85c75b393",
          3034: "9574d6c1bb8f774246c643bf7b7cb584",
          3095: "0ad0c266a7baa0227271981ec730df15",
          3197: "f4b76bf158ab0765b4d4b6e9b4df07fa",
          3321: "5c44178b248c3c18b5762ca7f09de5d7",
          3343: "7b50260c98cf6d9d7dd69334b4fe1c00",
          3370: "98814ff4360dafb69665c92e72fd8118",
          3447: "a28070fc0af1b7622612a8618fb75db5",
          3475: "f4f11cfc8d4ee4bf420aa6a2dc289248",
          3486: "ca8743fc3ee3a79c8524b48ee6087ecb",
          3622: "3fd77761aaf3a2d42ea47561ff8d390f",
          3697: "ad134613cc6396dc18d3d1caf4e4bbe3",
          3807: "a56f6d48f4a56aa9f15d438c0bf8559d",
          3885: "ff6f44804d31600dfa58183e7ba87632",
          3941: "4a4cff32a0f9edb36a2b3d8fc8335264",
          3951: "ebd76bf274cfe718c96bbcb562c16ce3",
          3980: "f538929139dd35765ea0d8ff390e791e",
          4011: "3e36d5a33b99a0b7f056f1babf29f8d3",
          4018: "e03b1d01323439d0bd1ee3d667abde51",
          4054: "8ed9aacf0749abb5c0b108cac7913253",
          4186: "3e2dc8fca29b4aaef5e0c972f4ccf842",
          4220: "210a646f95eaee51b3b50a3077d67338",
          4389: "077df07bdfdfb58c003e881b087fe1cd",
          4528: "5d4f7c1e76d38b04d1a026596c7b098e",
          4621: "1b3ffbc51d3bdeb4885daa7f218cd8bb",
          4700: "6dc39065ba6505af8c26acb2d4c750e8",
          4710: "5d6e6fb3ed4196f2785f325cac2bece3",
          4731: "381ec55b309a83572dd7f6fe7dcf1a15",
          4799: "2af9b9c38b895a512472c64dcdefc808",
          4851: "8ed2061fa8b567954670ac160ad0b4f7",
          4853: "94de6943d4918ad1b91858da04ba9a68",
          4861: "532bb4dac17a147408f609f50051eb13",
          4913: "2552c4b5d9ce898302e852f2e3ea94ae",
          5018: "4fa7b84b363a887a2ef0308103f9d7d6",
          5233: "a3359de4cd95377efc64a285447ffad8",
          5247: "88dc0c7127e30ec3e4af8044a630910c",
          5254: "e36e1967fbc1b63b0fd44b106b994f29",
          5259: "dde961bc45f9bf109e3e18804fe196a0",
          5311: "001d1a2b81cc96e6bb62cdceabceb92c",
          5416: "727099aea1b07866ee5765cdaf785dc6",
          5530: "aeb8691dc77f5d092202fc27dfd228d1",
          5639: "077371dbf7dd80abb7961e14339e03a3",
          5654: "e0207f71b65fa38af7e2a508a0737f10",
          5663: "f7e2c15426ea4f2667b0f4ba01f080d4",
          5742: "fd12c40e0473133f4ef9063382724312",
          5794: "c615c668fc534c09d14ffdb85df54d58",
          5830: "096a1b089b03fa0df4cf2c1c8f212a5b",
          5832: "6820f02d57a3f7af684ed091a8cb3b58",
          5966: "417e3fa80e840e939300c374387e21a7",
          6131: "bf981a5f047107e3ce412954ed0002d9",
          6267: "298e9d7e2f62579f9919740542cfabd6",
          6280: "e528e215e618cc395edfd313f9e90a88",
          6285: "ce11080baec38a79ff031dd7d2492c47",
          6361: "918c8557f586d2fadbb2fe16a93f510d",
          6638: "c70cadb4bbb76888352608ca71e65e18",
          6664: "b70490b5cc196bfe4b618343ea3a2d98",
          6682: "1099f6890bbac3566a9534d76cbb5957",
          6879: "4b944a0bd6bb283f4d5cea60a2eca7ab",
          6891: "cf97a229f2ffc16d0ce26f476a66eeb8",
          6940: "4f5fba44290ff81b31970a4dd6506000",
          6997: "b3b50558eed7cd80cdd623a733e52787",
          7010: "7ab88b8d1e89ae3de0729e84c9fcdfb0",
          7039: "f0864edb09f86eef9676035c0691e78a",
          7073: "7bf28adc83140cc2e6f0643195452c85",
          7168: "116a485d818a6c16b20c9d8ec728793c",
          7436: "0bab70ebdac7c120d3bc739d13f44e71",
          7452: "940635418bfb56299b62fb7f0675ce0e",
          7453: "33b8bca60529d61f51a2d2ea4acd4117",
          7454: "90bf9c05983b614e6eec90cec2088bd2",
          7599: "68428a005ebbbbb7f6c80fcc4f9b1e58",
          7740: "8f5d986a43355bf8883fb47697277c02",
          7911: "527a0eaa4449a8f1a3a9ce70d1776901",
          7970: "06f24ab4d275697a2248c390996f3a7e",
          8179: "9e698ec5a4c73a2fbcc83c043c05a221",
          8272: "ce4d5da71c0a86e0974257d0b5a975ee",
          8391: "a2d3e9ffcab7850d54acc995f3efa6b4",
          8755: "feb39ccfaee8c5be8c085cbcbbba4e21",
          8880: "d8a027f64dc5a8887c7ea8d8807f4393",
          8885: "79eb3471fedd146aa08d88c00fd591cf",
          8961: "757b38f1d6379a099befae565b82da0a",
          8970: "c8c2acb6e997e970e9b857ca97ea7e4e",
          9022: "f01f42ab382942d447e1dcbe589f77e4",
          9028: "a2aff0dfce75d21f727a9ef60c14212c",
          9126: "9f8d79af2a8b837ccf31231feac0c223",
          9362: "3147e34db419bc8c9fefb236c5bb4e95",
          9377: "84a55c9c88759309f83af5660257555d",
          9474: "445d138a830585c9bc15e6bafe974c1d",
          9615: "dbfa081558c0ffc8588690b43a2e2cc3",
          9623: "f642de34a1ad70eccafbf9b8d4b75dc0",
          9642: "3dda6bcba1df1a8a8068d7046a7a7f6f",
          9686: "c533e03d76d79c5df96747d5fb239233",
          9757: "e0b4c1a967dda6edabd4b8de5623ad2a",
          9842: "d5ea34948c01586a5ca878f10ebc2c69",
          9936: "1ba79ac3acb1dbd415b1f7658a6e0ec5",
          9990: "1882bd7496d2640f7d338f24528c0f88"
        } [e] + ".js", n.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), n.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), c = {}, d = "@rockstargames/modules-core-footer:", n.l = (e, a, f, r) => {
          if (c[e]) c[e].push(a);
          else {
            var t, b;
            if (void 0 !== f)
              for (var o = document.getElementsByTagName("script"), i = 0; i < o.length; i++) {
                var l = o[i];
                if (l.getAttribute("src") == e || l.getAttribute("data-webpack") == d + f) {
                  t = l;
                  break
                }
              }
            t || (b = !0, (t = document.createElement("script")).charset = "utf-8", t.timeout = 120, n.nc && t.setAttribute("nonce", n.nc), t.setAttribute("data-webpack", d + f), t.src = e), c[e] = [a];
            var s = (a, f) => {
                t.onerror = t.onload = null, clearTimeout(u);
                var d = c[e];
                if (delete c[e], t.parentNode && t.parentNode.removeChild(t), d && d.forEach((e => e(f))), a) return a(f)
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
        }, n.nmd = e => (e.paths = [], e.children || (e.children = []), e), r = {}, t = {}, n.f.remotes = (e, a) => {
          n.o(r, e) && r[e].forEach((e => {
            var f = n.R;
            f || (f = []);
            var c = t[e];
            if (!(f.indexOf(c) >= 0)) {
              if (f.push(c), c.p) return a.push(c.p);
              var d = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + c[1] + '" from ' + c[2]), n.m[e] = () => {
                    throw a
                  }, c.p = 0
                },
                r = (e, f, r, t, b, o) => {
                  try {
                    var n = e(f, r);
                    if (!n || !n.then) return b(n, t, o);
                    var i = n.then((e => b(e, t)), d);
                    if (!o) return i;
                    a.push(c.p = i)
                  } catch (e) {
                    d(e)
                  }
                },
                b = (e, a, d) => r(a.get, c[1], f, 0, o, d),
                o = a => {
                  c.p = 1, n.m[e] = e => {
                    e.exports = a()
                  }
                };
              r(n, c[2], 0, 0, ((e, a, f) => e ? r(n.I, c[0], 0, e, b, f) : d()), 1)
            }
          }))
        }, (() => {
          n.S = {};
          var e = {},
            a = {};
          n.I = (f, c) => {
            c || (c = []);
            var d = a[f];
            if (d || (d = a[f] = {}), !(c.indexOf(d) >= 0)) {
              if (c.push(d), e[f]) return e[f];
              n.o(n.S, f) || (n.S[f] = {});
              var r = n.S[f],
                t = "@rockstargames/modules-core-footer",
                b = (e, a, f, c) => {
                  var d = r[e] = r[e] || {},
                    b = d[a];
                  (!b || !b.loaded && (!c != !b.eager ? c : t > b.from)) && (d[a] = {
                    get: f,
                    from: t,
                    eager: !!c
                  })
                },
                o = [];
              return "default" === f && (b("@foundry/react-v4", "4.1.2", (() => Promise.all([n.e(8179), n.e(40), n.e(7454), n.e(8961), n.e(6131), n.e(2229), n.e(4853), n.e(6638)]).then((() => () => n(46131))))), b("@foundry/react", "1.28.2", (() => Promise.all([n.e(8179), n.e(40), n.e(7454), n.e(9842), n.e(2604), n.e(2229), n.e(4853)]).then((() => () => n(5143))))), b("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([n.e(2024), n.e(2229), n.e(1673)]).then((() => () => n(85950))))), b("@rsgweb/modules-core-user-action-menu", "0.0.0", (() => Promise.all([n.e(601), n.e(7454), n.e(8961), n.e(1734), n.e(7168), n.e(2229), n.e(6682), n.e(9623), n.e(4853), n.e(5966), n.e(7911), n.e(5311)]).then((() => () => n(48999))))), b("@rsgweb/rockstar-account", "0.0.0", (() => Promise.all([n.e(601), n.e(1720), n.e(2229), n.e(6682), n.e(9623), n.e(5966), n.e(1796)]).then((() => () => n(2772))))), b("@rsgweb/utils", "1.0.0", (() => Promise.all([n.e(601), n.e(2229), n.e(6682), n.e(9623), n.e(7599)]).then((() => () => n(48267))))), b("react-dom", "18.2.0", (() => Promise.all([n.e(5794), n.e(2229)]).then((() => () => n(5794))))), b("react-router-dom", "6.17.0", (() => Promise.all([n.e(4018), n.e(2229)]).then((() => () => n(54018))))), b("react", "18.2.0", (() => n.e(3447).then((() => () => n(13447)))))), e[f] = o.length ? Promise.all(o).then((() => e[f] = 1)) : 1
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
                var d = f[0],
                  r = d < 0;
                r && (d = -d - 1);
                for (var t = 0, b = 1, o = !0;; b++, t++) {
                  var n, i, l = b < f.length ? (typeof f[b])[0] : "";
                  if (t >= c.length || "o" == (i = (typeof(n = c[t]))[0])) return !o || ("u" == l ? b > d && !r : "" == l != r);
                  if ("u" == i) {
                    if (!o || "u" != l) return !1
                  } else if (o)
                    if (l == i)
                      if (b <= d) {
                        if (n != f[b]) return !1
                      } else {
                        if (r ? n > f[b] : n < f[b]) return !1;
                        n != f[b] && (o = !1)
                      }
                  else if ("s" != l && "n" != l) {
                    if (r || b <= d) return !1;
                    o = !1, b--
                  } else {
                    if (b <= d || i < l != r) return !1;
                    o = !1
                  } else "s" != l && "n" != l && (o = !1, b--)
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
            f = (f, c, d) => {
              var r = f[c];
              return (c = Object.keys(r).reduce(((f, c) => !a(d, c) || f && !((a, f) => {
                a = e(a), f = e(f);
                for (var c = 0;;) {
                  if (c >= a.length) return c < f.length && "u" != (typeof f[c])[0];
                  var d = a[c],
                    r = (typeof d)[0];
                  if (c >= f.length) return "u" == r;
                  var t = f[c],
                    b = (typeof t)[0];
                  if (r != b) return "o" == r && "n" == b || "s" == b || "u" == r;
                  if ("o" != r && "u" != r && d != t) return d < t;
                  c++
                }
              })(f, c) ? f : c), 0)) && r[c]
            },
            c = (e => function(a, f, c, d) {
              var r = n.I(a);
              return r && r.then ? r.then(e.bind(e, a, n.S[a], f, c, d)) : e(a, n.S[a], f, c, d)
            })(((e, a, c, d, r) => {
              var t = a && n.o(a, c) && f(a, c, d);
              return t ? (e => (e.loaded = 1, e.get()))(t) : r()
            })),
            d = {},
            r = {
              62229: () => c("default", "react", [1, 18, 2, 0], (() => n.e(3447).then((() => () => n(13447))))),
              9623: () => c("default", "react-router-dom", [1, 6, 11, 2], (() => n.e(4018).then((() => () => n(54018))))),
              44853: () => c("default", "react-dom", [1, 18, 2, 0], (() => n.e(5794).then((() => () => n(5794))))),
              95966: () => c("default", "@rsgweb/utils", [1, "workspace:^"], (() => Promise.all([n.e(601), n.e(6682)]).then((() => () => n(48267))))),
              2918: () => c("default", "@rsgweb/rockstar-account", [1, "workspace:^"], (() => Promise.all([n.e(601), n.e(1720), n.e(6682), n.e(2772)]).then((() => () => n(2772))))),
              81788: () => c("default", "@rsgweb/locale-tools", [1, "workspace:^"], (() => Promise.all([n.e(2024), n.e(4054)]).then((() => () => n(85950))))),
              20270: () => c("default", "@rsgweb/modules-core-user-action-menu", [1, "workspace:^"], (() => Promise.all([n.e(601), n.e(8961), n.e(1734), n.e(6682), n.e(7911)]).then((() => () => n(48999))))),
              96711: () => c("default", "@foundry/react", [1, 1], (() => Promise.all([n.e(8179), n.e(9842)]).then((() => () => n(5143))))),
              17675: () => c("default", "@foundry/react-v4", [4, "npm:@foundry/react@4", 1, 1], (() => Promise.all([n.e(8179), n.e(40), n.e(6131), n.e(3980)]).then((() => () => n(46131)))))
            },
            t = {
              1283: [20270, 96711],
              2229: [62229],
              4853: [44853],
              5311: [2918, 81788],
              5966: [95966],
              7911: [17675],
              9623: [9623]
            },
            b = {};
          n.f.consumes = (e, a) => {
            n.o(t, e) && t[e].forEach((e => {
              if (n.o(d, e)) return a.push(d[e]);
              if (!b[e]) {
                var f = a => {
                  d[e] = 0, n.m[e] = f => {
                    delete n.c[e], f.exports = a()
                  }
                };
                b[e] = !0;
                var c = a => {
                  delete d[e], n.m[e] = f => {
                    throw delete n.c[e], a
                  }
                };
                try {
                  var t = r[e]();
                  t.then ? a.push(d[e] = t.then(f).catch(c)) : f(t)
                } catch (e) {
                  c(e)
                }
              }
            }))
          }
        })(), (() => {
          n.b = document.baseURI || self.location.href;
          var e = {
            417: 0
          };
          n.f.j = (a, f) => {
            var c = n.o(e, a) ? e[a] : void 0;
            if (0 !== c)
              if (c) f.push(c[2]);
              else if (/^(2229|4853|5966|9623)$/.test(a)) e[a] = 0;
            else {
              var d = new Promise(((f, d) => c = e[a] = [f, d]));
              f.push(c[2] = d);
              var r = n.p + n.u(a),
                t = new Error;
              n.l(r, (f => {
                if (n.o(e, a) && (0 !== (c = e[a]) && (e[a] = void 0), c)) {
                  var d = f && ("load" === f.type ? "missing" : f.type),
                    r = f && f.target && f.target.src;
                  t.message = "Loading chunk " + a + " failed.\n(" + d + ": " + r + ")", t.name = "ChunkLoadError", t.type = d, t.request = r, c[1](t)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, f) => {
              var c, d, r = f[0],
                t = f[1],
                b = f[2],
                o = 0;
              if (r.some((a => 0 !== e[a]))) {
                for (c in t) n.o(t, c) && (n.m[c] = t[c]);
                b && b(n)
              }
              for (a && a(f); o < r.length; o++) d = r[o], n.o(e, d) && e[d] && e[d][0](), e[d] = 0
            },
            f = self.webpackChunk_rockstargames_modules_core_footer = self.webpackChunk_rockstargames_modules_core_footer || [];
          f.forEach(a.bind(null, 0)), f.push = a.bind(null, f.push.bind(f))
        })(), n.nc = void 0, n(45408), n(98478)
      })())
    }
  }
}));