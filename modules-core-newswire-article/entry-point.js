! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "5eae7287-5e7c-4153-9ee0-361a9ed33d47", e._sentryDebugIdIdentifier = "sentry-dbid-5eae7287-5e7c-4153-9ee0-361a9ed33d47")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-newswire-article",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/modules-core-gif-viewer", "@rockstargames/modules-core-videoplayer"], (function(e, a) {
  var d = {},
    c = {};
  return Object.defineProperty(d, "__esModule", {
    value: !0
  }), Object.defineProperty(c, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      Object.keys(e).forEach((function(a) {
        d[a] = e[a]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(a) {
        c[a] = e[a]
      }))
    }],
    execute: function() {
      e((() => {
        var e, f, r, t, b, o, n = {
            24075: (e, a, d) => {
              (0, d(47387).w)(1)
            },
            47387: (e, a, d) => {
              const c = d(13099).y;
              a.w = function(e) {
                if (e || (e = 1), !d.y.meta || !d.y.meta.url) throw console.error("__system_context__", d.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                d.p = c(d.y.meta.url, e)
              }
            },
            45408: (e, a, d) => {
              d(24075)
            },
            13099: (e, a, d) => {
              a.y = function(e, a) {
                var d = document.createElement("a");
                d.href = e;
                for (var c = "/" === d.pathname[0] ? d.pathname : "/" + d.pathname, f = 0, r = c.length; f !== a && r >= 0;) "/" === c[--r] && f++;
                if (f !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + f + ") in the URL path " + e);
                var t = c.slice(0, r + 1);
                return d.protocol + "//" + d.host + t
              };
              Number.isInteger
            },
            55974: (e, a, d) => {
              "use strict";
              var c = {
                  "./index": () => Promise.all([d.e(6035), d.e(4378), d.e(3717), d.e(7531), d.e(1426), d.e(4394), d.e(7366), d.e(4246), d.e(6330), d.e(2052), d.e(2229), d.e(6188), d.e(6682), d.e(4853), d.e(5966), d.e(1788), d.e(4324), d.e(7539), d.e(5043), d.e(2440), d.e(3547), d.e(636), d.e(6299), d.e(3550)]).then((() => () => d(88468))),
                  "./tinaBlockTemplates": () => Promise.all([d.e(1426), d.e(1269), d.e(2229), d.e(6188), d.e(4853), d.e(5966), d.e(1788), d.e(4324), d.e(7539), d.e(5043), d.e(636), d.e(495)]).then((() => () => d(90495))),
                  "./types": () => Promise.all([d.e(6035), d.e(4378), d.e(3717), d.e(7531), d.e(1426), d.e(4394), d.e(7366), d.e(4246), d.e(6330), d.e(2052), d.e(2229), d.e(6188), d.e(6682), d.e(4853), d.e(5966), d.e(1788), d.e(4324), d.e(7539), d.e(5043), d.e(2440), d.e(3547), d.e(636), d.e(6299), d.e(3550)]).then((() => () => d(11485)))
                },
                f = (e, a) => (d.R = a, a = d.o(c, e) ? c[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), d.R = void 0, a),
                r = (e, a) => {
                  if (d.S) {
                    var c = "default",
                      f = d.S[c];
                    if (f && f !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return d.S[c] = e, d.I(c, a)
                  }
                };
              d.d(a, {
                get: () => f,
                init: () => r
              })
            },
            29441: e => {
              "use strict";
              e.exports = d
            },
            25136: e => {
              "use strict";
              e.exports = c
            }
          },
          i = {};

        function s(e) {
          var a = i[e];
          if (void 0 !== a) return a.exports;
          var d = i[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return n[e].call(d.exports, d, d.exports, s), d.loaded = !0, d.exports
        }
        return s.m = n, s.c = i, s.y = a, s.amdO = {}, s.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return s.d(a, {
            a
          }), a
        }, f = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, s.t = function(a, d) {
          if (1 & d && (a = this(a)), 8 & d) return a;
          if ("object" == typeof a && a) {
            if (4 & d && a.__esModule) return a;
            if (16 & d && "function" == typeof a.then) return a
          }
          var c = Object.create(null);
          s.r(c);
          var r = {};
          e = e || [null, f({}), f([]), f(f)];
          for (var t = 2 & d && a;
            "object" == typeof t && !~e.indexOf(t); t = f(t)) Object.getOwnPropertyNames(t).forEach((e => r[e] = () => a[e]));
          return r.default = () => a, s.d(c, r), c
        }, s.d = (e, a) => {
          for (var d in a) s.o(a, d) && !s.o(e, d) && Object.defineProperty(e, d, {
            enumerable: !0,
            get: a[d]
          })
        }, s.f = {}, s.e = e => Promise.all(Object.keys(s.f).reduce(((a, d) => (s.f[d](e, a), a)), [])), s.u = e => "js/" + {
          131: "12733bc4a8ca16c4020cbeec815cfc75",
          278: "92f27707b7bf7e66191de7d54ff6b224",
          299: "9af9ec69c078ca799460f48acde838f6",
          314: "2e81b7918d4b1190e4fb7f0ff6eba00d",
          377: "491e5728900afe909a6527eb672c739e",
          495: "4b60451777edf6a72ca7c7153ceac279",
          561: "ec9209efeab9d4f302b8865b0ce214e9",
          636: "f8e66f8f2cc596e05ae4863641590344",
          662: "a68d084bb9608c480b74047b402b0f88",
          721: "79fdcab53489faf45b1e8492c748e377",
          824: "c397a01ecb45333b92ca6a23108afe01",
          888: "eb87bd504b2ec41ee713bd29afd38c76",
          907: "e8a7e8ec4fb4634a679b99b3c175e48b",
          969: "5fa5506c034bd39f2ffac44c3e6c0733",
          1054: "af9ed942dc935c7f7c6ce7152f6d4868",
          1242: "57fc3a18ba251a44a3c42a4758df82dd",
          1269: "ca0ab837464703f42655c932ce982623",
          1426: "d5ca6c5607eca6b6b36bed97a692b50c",
          1607: "0ce7738832c6ff965b9557bbf7b13cd7",
          1673: "4fefeec2d474175bdfb3a9c89ac62f4a",
          1788: "557bd1ad020cb1227bbe5acf69b602f2",
          1822: "f80790b4aac7ded4ad40798a4d204e5f",
          1868: "8f65e66ebd1254876462ddcf4bd39afa",
          2024: "b4eda29773c2a3eb4b45a2307983baa9",
          2052: "3c9f4182d48675c53b237540347afa8c",
          2156: "f46aff7695b48f2fa5d2608ec6ebddf3",
          2171: "d35586dc82fc308ef9214ade052ce63f",
          2221: "da5ebb96b6b6734c1131b585251bffbe",
          2229: "07b435f890979de431fa1d64b08dc445",
          2243: "9d931098070ca00be272900ce8398690",
          2339: "a9599fe521d608c7f90f73a42054872a",
          2347: "583aca132702c8fed0ab2bc3c05bc62a",
          2365: "dbb4587e9461d13593bf706b1425096b",
          2398: "21e0cad0c0491cc6ab5af0501712a2ad",
          2440: "99b571f0fe412e698cb8b733555c103e",
          2466: "1c19b8a4f3ffc8351ec4b33db094ed09",
          2642: "2bc8d9563fe97838c5045f19ead2a097",
          2654: "bb7cb4da878752e50883adeea2fefc8d",
          2678: "ff058a1eaaa8d90e8846b4ea0ee07d01",
          2781: "e609e627aa5592d82e6fe8732b97cbf1",
          2860: "b2d9c8e8f5b20d0fde651a8f9a1383ca",
          2864: "c11cac630efa7c44cab0711b7e503f4c",
          2941: "a2b003a012ce8c06f1b6ada4f7d8b7a3",
          3034: "0984004646c7ddce33256c6b6905f436",
          3197: "b1541559aa2ce793076a633b9b5854c7",
          3343: "a6bccb4bb0d07c040cba92e6da3d19a8",
          3365: "599aa5b8cfad0cc345aadf7fa2ae7cb0",
          3370: "2d124e8bbb90aa12b08069db392022d0",
          3447: "b69f13491d2327cad88869e27612360d",
          3475: "8d9294e1481ccd53c7ca50f67792d36f",
          3486: "893493230cb6674a32069697e7598f50",
          3547: "5d3b8dbb0bfc0df813ddfb15bab8b094",
          3550: "f0dbfe7a12011bb3d5d049d2c3c66048",
          3622: "f4ffba5aaacf19604d148e476321e61b",
          3697: "dd27e0df2ae065599fd674d165e31b53",
          3717: "3bfc04f4611ae98158ec161705beec77",
          3855: "139cacbefd6016dfb6af0dec2b6aabbc",
          3881: "473ea7873f0d7f202c0c9f755719b1da",
          3885: "0b7f7d45bc1b8fd6e05a3752f0094c80",
          3941: "c48a0bf3b57f1c898f07b5b389ab2c2c",
          4011: "9c33c87eb0f3afd1a67e4bf30e8df413",
          4018: "9e57471000c5becd18b8ee87b3d103fe",
          4054: "0002fed6fab52f4063ece8452e2f6e96",
          4186: "3709eafbaaa6fda6c5c69786d26b4b0b",
          4220: "09a602580db6eb4662ff1ad58d8ac19c",
          4246: "8830755753626fcc5c514a4d3290cd9e",
          4324: "372a9dcb2abdb51e3da5aacdffee8244",
          4378: "dd689721873e9903c124bf841d34cb73",
          4394: "255b8e45bd9c3b4597b64741d277861e",
          4528: "2aecefddd130620fd2560c7fc9d17baa",
          4621: "c98b1f3123501091cbb5e340e9cbe953",
          4700: "942f3abd82d4206375f619d12b15231d",
          4710: "d06899c017023cb95727eb6fb5078b65",
          4731: "bc8413d1fb06ae709d02301b47465380",
          4799: "0e25e94e569e5af927947ab439c7181d",
          4851: "1455255da2e76c7b9dbec58e827801ab",
          4853: "75c741c5320f8a0ad822ec3e177ee249",
          4861: "d5872752f078074ce92d7d5c3b84af25",
          4864: "8c8c864a6c71a50f25fd7c9606df8108",
          4913: "7121b31f6627464b374d0f889fc2c9e5",
          5018: "364176c6c69a25948922adc0dfe9423e",
          5043: "459003d91c272c9efa6d75fdf3ff99c0",
          5233: "09fc2173d80104029a90358a1449063d",
          5247: "0829f916fa0e061e373793a69f515572",
          5254: "67038b06d1fad97ee4aa4e54cacbc725",
          5259: "ff8fb1b8d60ffec77e62a2f35b1a6b2e",
          5530: "f95c95548eca62b4f1375c4166388e23",
          5639: "7673bb3ff60ec0638777a62e32b146ea",
          5663: "0c9e83d466753f9bd2c3e5c1210adf26",
          5742: "70601c3eb9c1445812de145af4cf9f5e",
          5794: "df12672cb74bd50079d8ac219bfbe740",
          5830: "722c5283ca65f19e384da31a0fa764ad",
          5832: "aec4c9a8ee2d9a6f0e36e4b9cc3c68e5",
          5966: "bfac8804d873085f58d6a18caa968d9a",
          6035: "2fb973c48ac22a4d731ee74c4b21c725",
          6188: "de94ab264084d1f213f45bda8785848b",
          6267: "d1f3d6e2123fb5a59173e0c1c7a8943e",
          6280: "89b2cd60fdfabfa3a2829b2215c680c2",
          6285: "67dd935a6ce61fd585f2364ae1241de2",
          6299: "cd6b26138166679a8e90e26deca9d7f8",
          6330: "f8833a76074516d377949132ccdecda5",
          6361: "3d8d9c0dbfa049b49319c10f9cf02207",
          6664: "82ee56ea5f7f946b6e3c770f1199cbef",
          6682: "f90196e6f8d1b855f40a3855ffab778c",
          6879: "e5da3e175540cd5d9ac1b6f478abbef1",
          6891: "05350b647be5dac7520d546b0c635a74",
          6940: "7dc923d0dae30650b5426685c47f5ded",
          6997: "7e69c11329d2ed48e4a5d2380ae384ff",
          7010: "99c0e472fde270053f8ee2013723ceea",
          7039: "82cb36bebafab7d188cf1431decee84c",
          7073: "cff3efcf62a475883b1a5428cf0a7d28",
          7366: "5d42dd5b8ad76be0cda43b945ce5c77a",
          7436: "ad376eb43dfcd525a0c44540d90e1447",
          7452: "f4befdc3a9dcb55631f77e9c57811fd5",
          7453: "9e6fc64f34068576ebe30520482bfa4b",
          7531: "da0225ca41ee78b3dccaa1abdb84f576",
          7539: "1fd200ff61b1536536ed169976592fc1",
          7568: "2ab786e87d38db191623b4b39346afd5",
          7868: "d10f6116ec786e6c85fbfee89c63e5d7",
          7970: "56b0e36570b2c247bdab13e72784398e",
          8110: "2050382ce528a1bc704d64533f23e491",
          8272: "1fd38630d05d655e8afccc1ba0374f47",
          8391: "39ac787829a8068f8d2e973542e36618",
          8714: "fdde2d4e8b3153da19259903b2a775e2",
          8755: "876be8d6b548dc818cacf41cfd9bf6f5",
          8880: "c548f7ea4a0879d9652d217743463a8f",
          8970: "f18dd956bb594c22c2867b71bc1f393b",
          9022: "d3aaef6c3fa8d27e74e3c09fbf3d4932",
          9028: "c44787987b487ebb5940d53eee704970",
          9126: "8e53f3ad7f686d04e8a320f1013b656d",
          9377: "5f9197fd3216e5e4293f397b9323a111",
          9474: "d6456361e5d77c1f8c2c049486d97e23",
          9540: "b3836df714176b85b9b37a62a1230191",
          9615: "6769a4dcf225c3f714dcb731797ec192",
          9642: "4dc4fc3cf796a229b56fb6f18e88cac4",
          9936: "a6ed649946df519e9bed37516d324061",
          9990: "8af029bd5ad6dc1414cac6231bac4ece"
        } [e] + ".js", s.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), s.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), r = {}, t = "@rockstargames/modules-core-newswire-article:", s.l = (e, a, d, c) => {
          if (r[e]) r[e].push(a);
          else {
            var f, b;
            if (void 0 !== d)
              for (var o = document.getElementsByTagName("script"), n = 0; n < o.length; n++) {
                var i = o[n];
                if (i.getAttribute("src") == e || i.getAttribute("data-webpack") == t + d) {
                  f = i;
                  break
                }
              }
            f || (b = !0, (f = document.createElement("script")).charset = "utf-8", f.timeout = 120, s.nc && f.setAttribute("nonce", s.nc), f.setAttribute("data-webpack", t + d), f.src = e), r[e] = [a];
            var l = (a, d) => {
                f.onerror = f.onload = null, clearTimeout(u);
                var c = r[e];
                if (delete r[e], f.parentNode && f.parentNode.removeChild(f), c && c.forEach((e => e(d))), a) return a(d)
              },
              u = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: f
              }), 12e4);
            f.onerror = l.bind(null, f.onerror), f.onload = l.bind(null, f.onload), b && document.head.appendChild(f)
          }
        }, s.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, s.nmd = e => (e.paths = [], e.children || (e.children = []), e), b = {
          495: [11438, 17523, 44019, 83166],
          636: [64064],
          5043: [31879]
        }, o = {
          11438: ["default", "./tinaBlockTemplates", 29441],
          17523: ["default", "./tina", 25136],
          31879: ["default", "./index", 25136],
          44019: ["default", "./tinaBlockTemplates", 25136],
          64064: ["default", "./index", 29441],
          83166: ["default", "./tina", 29441]
        }, s.f.remotes = (e, a) => {
          s.o(b, e) && b[e].forEach((e => {
            var d = s.R;
            d || (d = []);
            var c = o[e];
            if (!(d.indexOf(c) >= 0)) {
              if (d.push(c), c.p) return a.push(c.p);
              var f = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + c[1] + '" from ' + c[2]), s.m[e] = () => {
                    throw a
                  }, c.p = 0
                },
                r = (e, d, r, t, b, o) => {
                  try {
                    var n = e(d, r);
                    if (!n || !n.then) return b(n, t, o);
                    var i = n.then((e => b(e, t)), f);
                    if (!o) return i;
                    a.push(c.p = i)
                  } catch (e) {
                    f(e)
                  }
                },
                t = (e, a, f) => r(a.get, c[1], d, 0, b, f),
                b = a => {
                  c.p = 1, s.m[e] = e => {
                    e.exports = a()
                  }
                };
              r(s, c[2], 0, 0, ((e, a, d) => e ? r(s.I, c[0], 0, e, t, d) : f()), 1)
            }
          }))
        }, (() => {
          s.S = {};
          var e = {},
            a = {};
          s.I = (d, c) => {
            c || (c = []);
            var f = a[d];
            if (f || (f = a[d] = {}), !(c.indexOf(f) >= 0)) {
              if (c.push(f), e[d]) return e[d];
              s.o(s.S, d) || (s.S[d] = {});
              var r = s.S[d],
                t = "@rockstargames/modules-core-newswire-article",
                b = (e, a, d, c) => {
                  var f = r[e] = r[e] || {},
                    b = f[a];
                  (!b || !b.loaded && (!c != !b.eager ? c : t > b.from)) && (f[a] = {
                    get: d,
                    from: t,
                    eager: !!c
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
                    var r = e => e && e.init && e.init(s.S[d], c);
                    if (f.then) return n.push(f.then(r, a));
                    var t = r(f);
                    if (t && t.then) return n.push(t.catch(a))
                  } catch (e) {
                    a(e)
                  }
                },
                n = [];
              return "default" === d && (b("@foundry/react", "1.25.4", (() => Promise.all([s.e(6035), s.e(7366), s.e(3881), s.e(6330), s.e(2229), s.e(4853), s.e(2781)]).then((() => () => s(23881))))), b("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([s.e(2024), s.e(2229), s.e(1673)]).then((() => () => s(85950))))), b("@rsgweb/modules-core-carousel", "0.0.0", (() => Promise.all([s.e(3717), s.e(4394), s.e(2229), s.e(5966), s.e(4324), s.e(8110), s.e(2654)]).then((() => () => s(88110))))), b("@rsgweb/modules-core-engagement", "0.0.0", (() => Promise.all([s.e(6035), s.e(4378), s.e(3717), s.e(7531), s.e(4394), s.e(7366), s.e(4246), s.e(2229), s.e(6188), s.e(6682), s.e(4853), s.e(5966), s.e(1788), s.e(2440), s.e(2860), s.e(3547)]).then((() => () => s(22860))))), b("@rsgweb/modules-core-group-of-items", "1.0.0", (() => Promise.all([s.e(3717), s.e(2229), s.e(5966), s.e(4324), s.e(5043), s.e(2440), s.e(6299), s.e(7568), s.e(3365)]).then((() => () => s(17568))))), b("@rsgweb/tina", "0.0.0", (() => Promise.all([s.e(6035), s.e(4378), s.e(7531), s.e(1426), s.e(2229), s.e(6188), s.e(6682), s.e(4853), s.e(5966), s.e(1788), s.e(7539), s.e(8714)]).then((() => () => s(69540))))), b("@rsgweb/utils", "1.0.0", (() => Promise.all([s.e(6035), s.e(4378), s.e(2229), s.e(6188), s.e(6682), s.e(3855)]).then((() => () => s(46323))))), b("dompurify", "2.4.7", (() => s.e(561).then((() => () => s(20561))))), b("lodash", "4.17.21", (() => s.e(7868).then((() => () => s(17868))))), b("react-dom", "18.2.0", (() => Promise.all([s.e(5794), s.e(2229)]).then((() => () => s(50556))))), b("react-jsx-parser", "2.2.2", (() => Promise.all([s.e(2339), s.e(2229)]).then((() => () => s(12339))))), b("react-router-dom", "6.17.0", (() => Promise.all([s.e(4018), s.e(2229)]).then((() => () => s(54018))))), b("react", "18.2.0", (() => s.e(3447).then((() => () => s(13447))))), b("text-balancer", "1.0.5", (() => s.e(4864).then((() => () => s(74864))))), o(25136), o(29441)), n.length ? e[d] = Promise.all(n).then((() => e[d] = 1)) : e[d] = 1
            }
          }
        })(), (() => {
          var e;
          s.g.importScripts && (e = s.g.location + "");
          var a = s.g.document;
          if (!e && a && (a.currentScript && (e = a.currentScript.src), !e)) {
            var d = a.getElementsByTagName("script");
            if (d.length)
              for (var c = d.length - 1; c > -1 && (!e || !/^http(s?):/.test(e));) e = d[c--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), s.p = e
        })(), (() => {
          var e = e => {
              var a = e => e.split(".").map((e => +e == e ? +e : e)),
                d = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                c = d[1] ? a(d[1]) : [];
              return d[2] && (c.length++, c.push.apply(c, a(d[2]))), d[3] && (c.push([]), c.push.apply(c, a(d[3]))), c
            },
            a = (d, c) => {
              if (0 in d) {
                c = e(c);
                var f = d[0],
                  r = f < 0;
                r && (f = -f - 1);
                for (var t = 0, b = 1, o = !0;; b++, t++) {
                  var n, i, s = b < d.length ? (typeof d[b])[0] : "";
                  if (t >= c.length || "o" == (i = (typeof(n = c[t]))[0])) return !o || ("u" == s ? b > f && !r : "" == s != r);
                  if ("u" == i) {
                    if (!o || "u" != s) return !1
                  } else if (o)
                    if (s == i)
                      if (b <= f) {
                        if (n != d[b]) return !1
                      } else {
                        if (r ? n > d[b] : n < d[b]) return !1;
                        n != d[b] && (o = !1)
                      }
                  else if ("s" != s && "n" != s) {
                    if (r || b <= f) return !1;
                    o = !1, b--
                  } else {
                    if (b <= f || i < s != r) return !1;
                    o = !1
                  } else "s" != s && "n" != s && (o = !1, b--)
                }
              }
              var l = [],
                u = l.pop.bind(l);
              for (t = 1; t < d.length; t++) {
                var p = d[t];
                l.push(1 == p ? u() | u() : 2 == p ? u() & u() : p ? a(p, c) : !u())
              }
              return !!u()
            },
            d = (d, c, f) => {
              var r = d[c];
              return (c = Object.keys(r).reduce(((d, c) => !a(f, c) || d && !((a, d) => {
                a = e(a), d = e(d);
                for (var c = 0;;) {
                  if (c >= a.length) return c < d.length && "u" != (typeof d[c])[0];
                  var f = a[c],
                    r = (typeof f)[0];
                  if (c >= d.length) return "u" == r;
                  var t = d[c],
                    b = (typeof t)[0];
                  if (r != b) return "o" == r && "n" == b || "s" == b || "u" == r;
                  if ("o" != r && "u" != r && f != t) return f < t;
                  c++
                }
              })(d, c) ? d : c), 0)) && r[c]
            },
            c = (e => function(a, d, c, f) {
              var r = s.I(a);
              return r && r.then ? r.then(e.bind(e, a, s.S[a], d, c, f)) : e(a, s.S[a], d, c, f)
            })(((e, a, c, f, r) => {
              var t = a && s.o(a, c) && d(a, c, f);
              return t ? (e => (e.loaded = 1, e.get()))(t) : r()
            })),
            f = {},
            r = {
              62229: () => c("default", "react", [1, 18, 2, 0], (() => s.e(3447).then((() => () => s(13447))))),
              16188: () => c("default", "lodash", [1, 4, 17, 21], (() => s.e(7868).then((() => () => s(17868))))),
              9623: () => c("default", "react-router-dom", [1, 6, 11, 2], (() => s.e(4018).then((() => () => s(54018))))),
              44853: () => c("default", "react-dom", [1, 18, 2, 0], (() => s.e(5794).then((() => () => s(50556))))),
              95966: () => c("default", "@rsgweb/utils", [1, "workspace:^"], (() => Promise.all([s.e(6035), s.e(4378), s.e(6188), s.e(6682)]).then((() => () => s(46323))))),
              81788: () => c("default", "@rsgweb/locale-tools", [1, "workspace:^"], (() => Promise.all([s.e(2024), s.e(4054)]).then((() => () => s(85950))))),
              2973: () => c("default", "dompurify", [1, 2, 4, 1], (() => s.e(561).then((() => () => s(20561))))),
              92440: () => c("default", "@rsgweb/tina", [1, "workspace:^"], (() => Promise.all([s.e(6035), s.e(4378), s.e(7531), s.e(1426), s.e(6188), s.e(6682), s.e(4853), s.e(1788), s.e(7539), s.e(9540)]).then((() => () => s(69540))))),
              15310: () => c("default", "@rsgweb/modules-core-group-of-items", [1, "workspace:^"], (() => s.e(7568).then((() => () => s(17568))))),
              20206: () => c("default", "@rsgweb/modules-core-engagement", [1, "workspace:^"], (() => s.e(2860).then((() => () => s(22860))))),
              23608: () => c("default", "@rsgweb/modules-core-carousel", [1, "workspace:^"], (() => s.e(8110).then((() => () => s(88110))))),
              57770: () => c("default", "react-jsx-parser", [1, 2, 2, 2], (() => s.e(2339).then((() => () => s(12339))))),
              96711: () => c("default", "@foundry/react", [1, 1], (() => s.e(3881).then((() => () => s(23881))))),
              97384: () => c("default", "text-balancer", [1, 1, 0, 5], (() => s.e(4864).then((() => () => s(74864)))))
            },
            t = {
              1788: [81788],
              2229: [62229],
              2440: [92440],
              3550: [15310, 20206, 23608, 57770, 96711, 97384],
              4853: [44853],
              5043: [2973],
              5966: [95966],
              6188: [16188],
              6682: [9623]
            },
            b = {};
          s.f.consumes = (e, a) => {
            s.o(t, e) && t[e].forEach((e => {
              if (s.o(f, e)) return a.push(f[e]);
              if (!b[e]) {
                var d = a => {
                  f[e] = 0, s.m[e] = d => {
                    delete s.c[e], d.exports = a()
                  }
                };
                b[e] = !0;
                var c = a => {
                  delete f[e], s.m[e] = d => {
                    throw delete s.c[e], a
                  }
                };
                try {
                  var t = r[e]();
                  t.then ? a.push(f[e] = t.then(d).catch(c)) : d(t)
                } catch (e) {
                  c(e)
                }
              }
            }))
          }
        })(), (() => {
          s.b = document.baseURI || self.location.href;
          var e = {
            6947: 0
          };
          s.f.j = (a, d) => {
            var c = s.o(e, a) ? e[a] : void 0;
            if (0 !== c)
              if (c) d.push(c[2]);
              else if (/^((17|61)88|2229|2440|4853|5966)$/.test(a)) e[a] = 0;
            else {
              var f = new Promise(((d, f) => c = e[a] = [d, f]));
              d.push(c[2] = f);
              var r = s.p + s.u(a),
                t = new Error;
              s.l(r, (d => {
                if (s.o(e, a) && (0 !== (c = e[a]) && (e[a] = void 0), c)) {
                  var f = d && ("load" === d.type ? "missing" : d.type),
                    r = d && d.target && d.target.src;
                  t.message = "Loading chunk " + a + " failed.\n(" + f + ": " + r + ")", t.name = "ChunkLoadError", t.type = f, t.request = r, c[1](t)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, d) => {
              var c, f, r = d[0],
                t = d[1],
                b = d[2],
                o = 0;
              if (r.some((a => 0 !== e[a]))) {
                for (c in t) s.o(t, c) && (s.m[c] = t[c]);
                b && b(s)
              }
              for (a && a(d); o < r.length; o++) f = r[o], s.o(e, f) && e[f] && e[f][0](), e[f] = 0
            },
            d = self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || [];
          d.forEach(a.bind(null, 0)), d.push = a.bind(null, d.push.bind(d))
        })(), s.nc = void 0, s(45408), s(55974)
      })())
    }
  }
}));