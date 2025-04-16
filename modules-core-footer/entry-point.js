! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "31dcde46-674b-435a-83a5-dd72de6c9747", e._sentryDebugIdIdentifier = "sentry-dbid-31dcde46-674b-435a-83a5-dd72de6c9747")
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
        var e, d, f, c, r, t, b = {
            24075: (e, a, d) => {
              (0, d(47387).w)(1)
            },
            47387: (e, a, d) => {
              const f = d(13099).y;
              a.w = function(e) {
                if (e || (e = 1), !d.y.meta || !d.y.meta.url) throw console.error("__system_context__", d.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                d.p = f(d.y.meta.url, e)
              }
            },
            45408: (e, a, d) => {
              d(24075)
            },
            13099: (e, a, d) => {
              a.y = function(e, a) {
                var d = document.createElement("a");
                d.href = e;
                for (var f = "/" === d.pathname[0] ? d.pathname : "/" + d.pathname, c = 0, r = f.length; c !== a && r >= 0;) "/" === f[--r] && c++;
                if (c !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + c + ") in the URL path " + e);
                var t = f.slice(0, r + 1);
                return d.protocol + "//" + d.host + t
              };
              Number.isInteger
            },
            98478: (e, a, d) => {
              "use strict";
              var f = {
                  "./root": () => Promise.all([d.e(2475), d.e(9597), d.e(7168), d.e(9043), d.e(2229), d.e(9623), d.e(4853), d.e(5966), d.e(7568), d.e(7793)]).then((() => () => d(77793)))
                },
                c = (e, a) => (d.R = a, a = d.o(f, e) ? f[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), d.R = void 0, a),
                r = (e, a) => {
                  if (d.S) {
                    var f = "default",
                      c = d.S[f];
                    if (c && c !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return d.S[f] = e, d.I(f, a)
                  }
                };
              d.d(a, {
                get: () => c,
                init: () => r
              })
            }
          },
          o = {};

        function n(e) {
          var a = o[e];
          if (void 0 !== a) return a.exports;
          var d = o[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return b[e].call(d.exports, d, d.exports, n), d.loaded = !0, d.exports
        }
        return n.m = b, n.c = o, n.y = a, n.amdO = {}, n.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return n.d(a, {
            a
          }), a
        }, d = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, n.t = function(a, f) {
          if (1 & f && (a = this(a)), 8 & f) return a;
          if ("object" == typeof a && a) {
            if (4 & f && a.__esModule) return a;
            if (16 & f && "function" == typeof a.then) return a
          }
          var c = Object.create(null);
          n.r(c);
          var r = {};
          e = e || [null, d({}), d([]), d(d)];
          for (var t = 2 & f && a;
            "object" == typeof t && !~e.indexOf(t); t = d(t)) Object.getOwnPropertyNames(t).forEach((e => r[e] = () => a[e]));
          return r.default = () => a, n.d(c, r), c
        }, n.d = (e, a) => {
          for (var d in a) n.o(a, d) && !n.o(e, d) && Object.defineProperty(e, d, {
            enumerable: !0,
            get: a[d]
          })
        }, n.f = {}, n.e = e => Promise.all(Object.keys(n.f).reduce(((a, d) => (n.f[d](e, a), a)), [])), n.u = e => "js/" + {
          131: "a12872b3c8b257a489d4c7c1aeaa4db7",
          278: "f6d035e17eccaf1cca4507cb37794b73",
          299: "728c4a352917c05ead4c4dad9a5dec2d",
          314: "7ff6824af85f14ec1872c2ff6a49fc69",
          377: "083c1f6b62d841027fd3090c054b4f68",
          601: "bc96a845d5e0e7b0b839caa4cb225e5e",
          662: "d3afd6c2a018c204602a5f31862fad4b",
          721: "cf9a6c874eb467a06f30ddf67ea11dd5",
          824: "ce76e8d6615e85199323338104d1559b",
          888: "f2700b69f225959bd1d9bcbe8a2f14c7",
          907: "056aeccd67b206a19fc0297abbd8a706",
          969: "3682ce27ee74e5811258c8001f43d2e6",
          1054: "9877f41877d4871106354315d44b6d15",
          1242: "94a77e3783c2cc4186997c46a05b3e40",
          1258: "f69b6dd54e46a54494518d2dea644e03",
          1607: "817dae914919ef23a89395b8ac346b84",
          1673: "2ad2ea572b60986cb5d4129481c6051d",
          1720: "65e03935069fb289d896369893665ccc",
          1796: "5758082875ab230dc64dcc92bb68a84d",
          1822: "e63b4eb358ff83e761d9d4cf0870c70e",
          1868: "c14dd66764d1271a37213e3012d196c1",
          2024: "8fdddb8255c12d3a08574544f80c5594",
          2156: "4e93bccdc4b600e33a991d185c07e6a3",
          2171: "5e3d91b9c54d30a808637d56ec143ece",
          2221: "994ae3be5dcfb04e68a1fc82c03330e5",
          2229: "5f7443664507c92cb2b814b672ce5625",
          2243: "6fec1c9f1100b1cc8eeb0f66f84b02f8",
          2347: "22b355a3ba69827e1f6081c1ee2c8f51",
          2365: "b190ea0aadea52cce3522cacd13d6d1b",
          2398: "8616992ae885112e87b8527e038cf86d",
          2466: "dc621ad483fd14af1b9fe16e0d5e411e",
          2475: "9bd41bff4b9d5c490b056c39301200e8",
          2642: "4763f46f4b9bf3bc25fbb321a82219c3",
          2678: "667012bfd8b8ddcfdff5ebaf893046c7",
          2772: "193b1e23e03ca971d74a5f73abad3b0b",
          2864: "81822eecd45b321245760e3bbeb0090b",
          2941: "66024fab7fd5617e82fb5eb269e37496",
          3034: "8a9635eadb607b1eaa0f457072ee52a1",
          3124: "d42a86426bad3253f6db21989f16d0d2",
          3197: "d26a0cd45dce0466891b1c36c906b4c6",
          3343: "50bdb7516984ea845e9c892dc10e4809",
          3370: "9d3dfccec610375c28d384a860e673e8",
          3447: "64b2d6c4089550abeec3072ef676598a",
          3475: "4d049d3b6e88dfc69388896f834c4721",
          3486: "7cd549b201db01d56cbbcee4a3f004e9",
          3622: "d77916fa619e57fc424de32f50d2bc77",
          3697: "87904cb2df99d5867df1fbdf7bbd75ed",
          3885: "6dc244ea9f44148cb98efd5579ce7a64",
          3941: "40d73bb58346f4f710dd3f8527ca1115",
          4011: "126a54fe26308604cb449a2e7cdd5563",
          4018: "e986b1c149e0cbf71960fc25b255e52b",
          4054: "f88c1234eb93ebb4842e3b0add361e24",
          4186: "a75ac9aef1b14145d4d834bd32a57c82",
          4220: "1560513ef671908180baaca1a6374089",
          4528: "0ff9ffc87482ea17a81107bada64e224",
          4621: "9ebf06c37b75c3ef80030f48321493a9",
          4700: "9bc841699aeccfb4d11731d19a95db2f",
          4710: "3c274df28116a9c7a59f0f2a48a5706b",
          4731: "f43de6e34a7b44330d56b07226b3f1de",
          4799: "8f4e6156f0b3501e68bbef28533bd97d",
          4851: "9e6ea7c2b830e279dfa6ee77051fcfe7",
          4853: "94de6943d4918ad1b91858da04ba9a68",
          4861: "e8eb1d66d2606004b126dd95c203369c",
          4913: "caf2b96b46e6df1cf002367ff6b17ef7",
          5018: "12bbac4bc3fbb4672dafe3b1c761bc63",
          5233: "4e19bf811d9ca0d523d9dfab3e61d3aa",
          5247: "0667976455b8602d2a2ba8409ffb3a8a",
          5254: "9889312d4c44fb6b9ed068d86b7da543",
          5259: "f96fdcd4592c51fa1099aa35e8d59792",
          5530: "6b1fe2660a1371281f5eca73c0b6db97",
          5639: "294cfe92a7279dd370cc6312089bdabf",
          5663: "e89b01af3b3a2cc62b4f636d474bf89e",
          5742: "1fa235a7fbed848bbb83d9bf8f8c3118",
          5794: "da176f2f7943feec082e5c09e457ff4a",
          5830: "a72aa1b82f36308137ac7a22e2024dfe",
          5832: "34c6a3ee1cdbe74e965c3fdc0c37f0ec",
          5966: "417e3fa80e840e939300c374387e21a7",
          6267: "8e96abe4ab348da829e84aac14de6a9e",
          6280: "f3731374d448499373484b83b0a10372",
          6285: "cd7085d31e1d62bb763974db348a3c11",
          6361: "1f6c98d7563528af8f4b35b7b52ba4a6",
          6664: "e5c7f3f36d5ec6647a9b01fb3c434c3e",
          6682: "ec090064e04228f39d21fef828e1065d",
          6879: "919092ab8622c60a429855aa8d43a4ad",
          6891: "fe60b8e6269779abed23c45805071d5f",
          6940: "3e489a1e12c675ca7a01cc5c946db6dd",
          6997: "e3a040289a4d775d3e1214c0710d52e2",
          7010: "5b05d897b630d2eed91502153275a847",
          7039: "66527108275205a7810cc8ef81ba9ead",
          7073: "4947548397cbebfaf803092f0f5ae9ba",
          7168: "5b0ad8bee30452262070f52fa44cd6b3",
          7310: "09c3f8868dd8572ebb37ea87fe594c74",
          7436: "1e28b0e5ca06da643dfa9524222e9c54",
          7452: "c111d135a315c6cbf0436892f5a46e4f",
          7453: "bb7cff3020913411941622b6833fcf70",
          7568: "c041c409f631366a8d3cedb0b02644a0",
          7599: "d4b8039fdbe42f1e8acd8f33b0d2f27f",
          7793: "179471bc38e0a92f0cf69689f51c10d1",
          7970: "a49b342421716770942cbd01f6312e2b",
          8272: "54b2493ce0342f0ab9ea01bb677afabf",
          8391: "23fed3d147ac0d5d1192c23489590c94",
          8755: "fc7116cdb0d8d39da1a46b5f900207b2",
          8880: "bde18ca154f18b34bc8b68a24b02942d",
          8970: "97e4ccc18dad430774eafff7877334d6",
          9022: "23f53d48d4b4dfaee17e6340fbc43516",
          9028: "8f4f27febf6302f1147cffb54c530363",
          9043: "f39b988ef017e2620272a242aa4ddf41",
          9126: "78808f5be156dcc9e5f786091debde05",
          9377: "6dd7de6ee29f9cf2d2fbbc57699003bf",
          9474: "bb3062d0ec658d917988c9aee2dc4592",
          9597: "f64bb9f1d3081dcbfc93a5fef3596ca5",
          9615: "c5431d4a96d8ed1e802c4041ae691720",
          9623: "f642de34a1ad70eccafbf9b8d4b75dc0",
          9642: "283bd3d1f3a9238e7097358748a5f8fe",
          9936: "48672564f952a380cd8cb159c90cb125",
          9990: "0fe2be59f7791d12b6b1147ba3639937"
        } [e] + ".js", n.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), n.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), f = {}, c = "@rockstargames/modules-core-footer:", n.l = (e, a, d, r) => {
          if (f[e]) f[e].push(a);
          else {
            var t, b;
            if (void 0 !== d)
              for (var o = document.getElementsByTagName("script"), i = 0; i < o.length; i++) {
                var s = o[i];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == c + d) {
                  t = s;
                  break
                }
              }
            t || (b = !0, (t = document.createElement("script")).charset = "utf-8", t.timeout = 120, n.nc && t.setAttribute("nonce", n.nc), t.setAttribute("data-webpack", c + d), t.src = e), f[e] = [a];
            var l = (a, d) => {
                t.onerror = t.onload = null, clearTimeout(u);
                var c = f[e];
                if (delete f[e], t.parentNode && t.parentNode.removeChild(t), c && c.forEach((e => e(d))), a) return a(d)
              },
              u = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: t
              }), 12e4);
            t.onerror = l.bind(null, t.onerror), t.onload = l.bind(null, t.onload), b && document.head.appendChild(t)
          }
        }, n.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, n.nmd = e => (e.paths = [], e.children || (e.children = []), e), r = {}, t = {}, n.f.remotes = (e, a) => {
          n.o(r, e) && r[e].forEach((e => {
            var d = n.R;
            d || (d = []);
            var f = t[e];
            if (!(d.indexOf(f) >= 0)) {
              if (d.push(f), f.p) return a.push(f.p);
              var c = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + f[1] + '" from ' + f[2]), n.m[e] = () => {
                    throw a
                  }, f.p = 0
                },
                r = (e, d, r, t, b, o) => {
                  try {
                    var n = e(d, r);
                    if (!n || !n.then) return b(n, t, o);
                    var i = n.then((e => b(e, t)), c);
                    if (!o) return i;
                    a.push(f.p = i)
                  } catch (e) {
                    c(e)
                  }
                },
                b = (e, a, c) => r(a.get, f[1], d, 0, o, c),
                o = a => {
                  f.p = 1, n.m[e] = e => {
                    e.exports = a()
                  }
                };
              r(n, f[2], 0, 0, ((e, a, d) => e ? r(n.I, f[0], 0, e, b, d) : c()), 1)
            }
          }))
        }, (() => {
          n.S = {};
          var e = {},
            a = {};
          n.I = (d, f) => {
            f || (f = []);
            var c = a[d];
            if (c || (c = a[d] = {}), !(f.indexOf(c) >= 0)) {
              if (f.push(c), e[d]) return e[d];
              n.o(n.S, d) || (n.S[d] = {});
              var r = n.S[d],
                t = "@rockstargames/modules-core-footer",
                b = (e, a, d, f) => {
                  var c = r[e] = r[e] || {},
                    b = c[a];
                  (!b || !b.loaded && (!f != !b.eager ? f : t > b.from)) && (c[a] = {
                    get: d,
                    from: t,
                    eager: !!f
                  })
                },
                o = [];
              return "default" === d && (b("@foundry/react-v1", "1.28.2", (() => Promise.all([n.e(1258), n.e(2475), n.e(9597), n.e(7310), n.e(2229), n.e(4853)]).then((() => () => n(27310))))), b("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([n.e(2024), n.e(2229), n.e(1673)]).then((() => () => n(85950))))), b("@rsgweb/modules-core-user-action-menu", "0.0.0", (() => Promise.all([n.e(601), n.e(1258), n.e(9597), n.e(7168), n.e(2229), n.e(6682), n.e(9623), n.e(4853), n.e(5966), n.e(3124), n.e(7568)]).then((() => () => n(29808))))), b("@rsgweb/rockstar-account", "0.0.0", (() => Promise.all([n.e(601), n.e(1720), n.e(2229), n.e(6682), n.e(9623), n.e(5966), n.e(1796)]).then((() => () => n(2772))))), b("@rsgweb/utils", "1.0.0", (() => Promise.all([n.e(601), n.e(2229), n.e(6682), n.e(9623), n.e(7599)]).then((() => () => n(48267))))), b("react-dom", "18.2.0", (() => Promise.all([n.e(5794), n.e(2229)]).then((() => () => n(5794))))), b("react-router-dom", "6.17.0", (() => Promise.all([n.e(4018), n.e(2229)]).then((() => () => n(54018))))), b("react", "18.2.0", (() => n.e(3447).then((() => () => n(13447)))))), e[d] = o.length ? Promise.all(o).then((() => e[d] = 1)) : 1
            }
          }
        })(), (() => {
          var e;
          n.g.importScripts && (e = n.g.location + "");
          var a = n.g.document;
          if (!e && a && (a.currentScript && (e = a.currentScript.src), !e)) {
            var d = a.getElementsByTagName("script");
            if (d.length)
              for (var f = d.length - 1; f > -1 && (!e || !/^http(s?):/.test(e));) e = d[f--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), n.p = e
        })(), (() => {
          var e = e => {
              var a = e => e.split(".").map((e => +e == e ? +e : e)),
                d = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                f = d[1] ? a(d[1]) : [];
              return d[2] && (f.length++, f.push.apply(f, a(d[2]))), d[3] && (f.push([]), f.push.apply(f, a(d[3]))), f
            },
            a = (d, f) => {
              if (0 in d) {
                f = e(f);
                var c = d[0],
                  r = c < 0;
                r && (c = -c - 1);
                for (var t = 0, b = 1, o = !0;; b++, t++) {
                  var n, i, s = b < d.length ? (typeof d[b])[0] : "";
                  if (t >= f.length || "o" == (i = (typeof(n = f[t]))[0])) return !o || ("u" == s ? b > c && !r : "" == s != r);
                  if ("u" == i) {
                    if (!o || "u" != s) return !1
                  } else if (o)
                    if (s == i)
                      if (b <= c) {
                        if (n != d[b]) return !1
                      } else {
                        if (r ? n > d[b] : n < d[b]) return !1;
                        n != d[b] && (o = !1)
                      }
                  else if ("s" != s && "n" != s) {
                    if (r || b <= c) return !1;
                    o = !1, b--
                  } else {
                    if (b <= c || i < s != r) return !1;
                    o = !1
                  } else "s" != s && "n" != s && (o = !1, b--)
                }
              }
              var l = [],
                u = l.pop.bind(l);
              for (t = 1; t < d.length; t++) {
                var p = d[t];
                l.push(1 == p ? u() | u() : 2 == p ? u() & u() : p ? a(p, f) : !u())
              }
              return !!u()
            },
            d = (d, f, c) => {
              var r = d[f];
              return (f = Object.keys(r).reduce(((d, f) => !a(c, f) || d && !((a, d) => {
                a = e(a), d = e(d);
                for (var f = 0;;) {
                  if (f >= a.length) return f < d.length && "u" != (typeof d[f])[0];
                  var c = a[f],
                    r = (typeof c)[0];
                  if (f >= d.length) return "u" == r;
                  var t = d[f],
                    b = (typeof t)[0];
                  if (r != b) return "o" == r && "n" == b || "s" == b || "u" == r;
                  if ("o" != r && "u" != r && c != t) return c < t;
                  f++
                }
              })(d, f) ? d : f), 0)) && r[f]
            },
            f = (e => function(a, d, f, c) {
              var r = n.I(a);
              return r && r.then ? r.then(e.bind(e, a, n.S[a], d, f, c)) : e(a, n.S[a], d, f, c)
            })(((e, a, f, c, r) => {
              var t = a && n.o(a, f) && d(a, f, c);
              return t ? (e => (e.loaded = 1, e.get()))(t) : r()
            })),
            c = {},
            r = {
              62229: () => f("default", "react", [1, 18, 2, 0], (() => n.e(3447).then((() => () => n(13447))))),
              9623: () => f("default", "react-router-dom", [1, 6, 11, 2], (() => n.e(4018).then((() => () => n(54018))))),
              44853: () => f("default", "react-dom", [1, 18, 2, 0], (() => n.e(5794).then((() => () => n(5794))))),
              95966: () => f("default", "@rsgweb/utils", [1, "workspace:^"], (() => Promise.all([n.e(601), n.e(6682)]).then((() => () => n(48267))))),
              2918: () => f("default", "@rsgweb/rockstar-account", [1, "workspace:^"], (() => Promise.all([n.e(601), n.e(1720), n.e(6682), n.e(2772)]).then((() => () => n(2772))))),
              56840: () => f("default", "@foundry/react-v1", [4, "npm:@foundry/react@1", 28, 2], (() => Promise.all([n.e(1258), n.e(2475), n.e(7310)]).then((() => () => n(27310))))),
              81788: () => f("default", "@rsgweb/locale-tools", [1, "workspace:^"], (() => Promise.all([n.e(2024), n.e(4054)]).then((() => () => n(85950))))),
              20270: () => f("default", "@rsgweb/modules-core-user-action-menu", [1, "workspace:^"], (() => Promise.all([n.e(601), n.e(1258), n.e(6682), n.e(3124)]).then((() => () => n(29808)))))
            },
            t = {
              2229: [62229],
              4853: [44853],
              5966: [95966],
              7568: [2918, 56840, 81788],
              7793: [20270],
              9623: [9623]
            },
            b = {};
          n.f.consumes = (e, a) => {
            n.o(t, e) && t[e].forEach((e => {
              if (n.o(c, e)) return a.push(c[e]);
              if (!b[e]) {
                var d = a => {
                  c[e] = 0, n.m[e] = d => {
                    delete n.c[e], d.exports = a()
                  }
                };
                b[e] = !0;
                var f = a => {
                  delete c[e], n.m[e] = d => {
                    throw delete n.c[e], a
                  }
                };
                try {
                  var t = r[e]();
                  t.then ? a.push(c[e] = t.then(d).catch(f)) : d(t)
                } catch (e) {
                  f(e)
                }
              }
            }))
          }
        })(), (() => {
          n.b = document.baseURI || self.location.href;
          var e = {
            417: 0
          };
          n.f.j = (a, d) => {
            var f = n.o(e, a) ? e[a] : void 0;
            if (0 !== f)
              if (f) d.push(f[2]);
              else if (/^(2229|4853|5966|9623)$/.test(a)) e[a] = 0;
            else {
              var c = new Promise(((d, c) => f = e[a] = [d, c]));
              d.push(f[2] = c);
              var r = n.p + n.u(a),
                t = new Error;
              n.l(r, (d => {
                if (n.o(e, a) && (0 !== (f = e[a]) && (e[a] = void 0), f)) {
                  var c = d && ("load" === d.type ? "missing" : d.type),
                    r = d && d.target && d.target.src;
                  t.message = "Loading chunk " + a + " failed.\n(" + c + ": " + r + ")", t.name = "ChunkLoadError", t.type = c, t.request = r, f[1](t)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, d) => {
              var f, c, r = d[0],
                t = d[1],
                b = d[2],
                o = 0;
              if (r.some((a => 0 !== e[a]))) {
                for (f in t) n.o(t, f) && (n.m[f] = t[f]);
                b && b(n)
              }
              for (a && a(d); o < r.length; o++) c = r[o], n.o(e, c) && e[c] && e[c][0](), e[c] = 0
            },
            d = self.webpackChunk_rockstargames_modules_core_footer = self.webpackChunk_rockstargames_modules_core_footer || [];
          d.forEach(a.bind(null, 0)), d.push = a.bind(null, d.push.bind(d))
        })(), n.nc = void 0, n(45408), n(98478)
      })())
    }
  }
}));