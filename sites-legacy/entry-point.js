! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "b8205566-4c08-4062-a1d7-df9245cd06a6", e._sentryDebugIdIdentifier = "sentry-dbid-b8205566-4c08-4062-a1d7-df9245cd06a6")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-legacy",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/modules-core-videoplayer"], (function(e, a) {
  var f = {};
  return Object.defineProperty(f, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      Object.keys(e).forEach((function(a) {
        f[a] = e[a]
      }))
    }],
    execute: function() {
      e((() => {
        var e, d, t, r, c, b, o = {
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
                for (var d = "/" === f.pathname[0] ? f.pathname : "/" + f.pathname, t = 0, r = d.length; t !== a && r >= 0;) "/" === d[--r] && t++;
                if (t !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + t + ") in the URL path " + e);
                var c = d.slice(0, r + 1);
                return f.protocol + "//" + f.host + c
              };
              Number.isInteger
            },
            58639: (e, a, f) => {
              "use strict";
              var d = {
                  "./bootstrap": () => Promise.all([f.e(7868), f.e(9840), f.e(1426), f.e(4116), f.e(3088), f.e(5771), f.e(2229), f.e(9623), f.e(5966), f.e(2246), f.e(4281), f.e(5267), f.e(2440), f.e(842), f.e(2738), f.e(7145), f.e(8156), f.e(9679)]).then((() => () => f(9679))),
                  "./index": () => Promise.all([f.e(7868), f.e(9840), f.e(1426), f.e(4116), f.e(3088), f.e(2229), f.e(9623), f.e(5966), f.e(2246), f.e(4281), f.e(5267), f.e(2440), f.e(842), f.e(2738), f.e(7145), f.e(8156), f.e(9978)]).then((() => () => f(79978))),
                  "./site-routes/Bully": () => Promise.all([f.e(7868), f.e(9840), f.e(1426), f.e(4116), f.e(3088), f.e(2229), f.e(9623), f.e(5966), f.e(2246), f.e(4281), f.e(5267), f.e(2440), f.e(842), f.e(2738), f.e(7145), f.e(8156), f.e(2349), f.e(818)]).then((() => () => f(30818))),
                  "./site-routes/RedDeadRedemption": () => Promise.all([f.e(7868), f.e(9840), f.e(1426), f.e(4116), f.e(3088), f.e(2229), f.e(9623), f.e(5966), f.e(2246), f.e(4281), f.e(5267), f.e(2440), f.e(842), f.e(2738), f.e(7145), f.e(8156), f.e(2349), f.e(8830)]).then((() => () => f(58830))),
                  "./tina": () => Promise.all([f.e(7868), f.e(9840), f.e(1426), f.e(4116), f.e(3088), f.e(2229), f.e(9623), f.e(5966), f.e(2246), f.e(4281), f.e(5267), f.e(2440), f.e(842), f.e(2738), f.e(7145), f.e(8156), f.e(2349)]).then((() => () => f(22349)))
                },
                t = (e, a) => (f.R = a, a = f.o(d, e) ? d[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), f.R = void 0, a),
                r = (e, a) => {
                  if (f.S) {
                    var d = "default",
                      t = f.S[d];
                    if (t && t !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return f.S[d] = e, f.I(d, a)
                  }
                };
              f.d(a, {
                get: () => t,
                init: () => r
              })
            },
            25136: e => {
              "use strict";
              e.exports = f
            }
          },
          n = {};

        function i(e) {
          var a = n[e];
          if (void 0 !== a) return a.exports;
          var f = n[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return o[e].call(f.exports, f, f.exports, i), f.loaded = !0, f.exports
        }
        return i.m = o, i.c = n, i.y = a, i.amdO = {}, i.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return i.d(a, {
            a
          }), a
        }, d = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, i.t = function(a, f) {
          if (1 & f && (a = this(a)), 8 & f) return a;
          if ("object" == typeof a && a) {
            if (4 & f && a.__esModule) return a;
            if (16 & f && "function" == typeof a.then) return a
          }
          var t = Object.create(null);
          i.r(t);
          var r = {};
          e = e || [null, d({}), d([]), d(d)];
          for (var c = 2 & f && a;
            "object" == typeof c && !~e.indexOf(c); c = d(c)) Object.getOwnPropertyNames(c).forEach((e => r[e] = () => a[e]));
          return r.default = () => a, i.d(t, r), t
        }, i.d = (e, a) => {
          for (var f in a) i.o(a, f) && !i.o(e, f) && Object.defineProperty(e, f, {
            enumerable: !0,
            get: a[f]
          })
        }, i.f = {}, i.e = e => Promise.all(Object.keys(i.f).reduce(((a, f) => (i.f[f](e, a), a)), [])), i.u = e => "js/" + {
          131: "ed2ffdd594d052092ee7d829d05cc56c",
          278: "3e6153a9a7e761dba0f06c999d6c634e",
          299: "c2f1eb99208f5f3fa5fed38cb63dd2d9",
          314: "8bfbad46a073a143c3b1a98a01c99c16",
          364: "0e3eba7f65eeda1eac136512bfbe83bf",
          377: "1bdffe64fdcb55d42d859732963276ce",
          391: "07c898db53c60065ffd45ff900a43fbf",
          542: "462382f1b091ca2541ba5248d85c4b62",
          662: "439772bd1102a7a505d15ae44da393a0",
          721: "231b0c0c53d2ce06e123645eb5a92078",
          818: "96a5a8af9e9a587cc3b66af8221afb49",
          824: "fb2c43274ab28f14d15a34a9ef75fc04",
          842: "6a19b755cc6348c54fda7a42f1fc03b3",
          888: "48900fecf0c07eadef0bf7eb62e98f77",
          907: "8687b704262718db1711f52563ac0cae",
          969: "cd57af5a7be1641411d07e31d3766f78",
          1054: "7b20bdc711d76baf02139b327b99a89e",
          1242: "625e54c6f782eec80ce34a6d6c31ec53",
          1426: "e6bffc50eef7edfb69539ce72cc1f948",
          1607: "39174426f6c623f0b1a8581c45ec83bc",
          1673: "65c96fbc90a5055afe8a71eeb7489012",
          1720: "b9ffcd3e77eaa46b639550a5e19ec9da",
          1822: "0d6ecbedcbc53103c3f36f0d44d31a29",
          1868: "f91da66da80dbbdd296d2bd90bd00ee1",
          2024: "f75e4a598b31dbbea6774dcae652e26e",
          2156: "3fefc0aa622aaad89a05803ea4f0bc29",
          2171: "19c4fd6e0800b1db82101b2f2bd6b8e4",
          2221: "476b2b5d76f459c93b149267ddfc295f",
          2229: "d2d18ecff8d4927cf46bf4f3aa674dc2",
          2243: "7a4dd60eefa149dc72f489d4cdba3c3c",
          2246: "33fc49eb96c442cc488a10b6e1d185d7",
          2347: "dd09b047c3c96093dee36d0d10eee0f7",
          2349: "ada7712fdcaa6b0d5fddf798838639bb",
          2365: "e1d9408f401c18e5f45a3b599235fb57",
          2398: "f0ffd08526a763f0c08278de3024eb57",
          2440: "c30750136d805475662f793509d9f4b5",
          2466: "87cb04d319ba88d5930d273fd6f4f71e",
          2637: "fff5877548935489fe929c699aa646ce",
          2642: "2328d01bdb43e6c30f3d9d9a7d216eb2",
          2678: "1a3a7dc57ad87260e67a7d369cb73fb7",
          2738: "5e5c951d3b969fbec7eb30c5096b56cf",
          2772: "16bfd0d9c6c3f6b51a2ca7f4d1777c87",
          2781: "7054ad05565dc1ea49451ba723d345a8",
          2817: "cce816d71ae5ae9663cad0422f44bd80",
          2864: "863cce70c7ccaa6b58d13517efdc5883",
          2941: "f5fac1c674e46f3ad57b5a3093bf64ac",
          3034: "b61cdc0b22fb4cc2520a59ae1641c8cc",
          3088: "b47afa7f92b95239e072ce20c7dbb73d",
          3197: "74cdf506be79553277285c7cb0f35aae",
          3343: "608e611dff9b4a1ffeb746a99aa55382",
          3370: "48986fe4c91cc8392305084b90d77f29",
          3447: "d81dd04e8aa576c93a81d4ae787eda2f",
          3475: "d5a9bf6307400fe9b6268788ad2898df",
          3486: "7eefee47a12798e2c0afb06c97fc1bbf",
          3622: "3334ac410339e7921274bc0ab1ba7789",
          3697: "5be97023be000ef9768969c783d28492",
          3855: "015baf68c2df9a40e036a75d6a0c90fe",
          3885: "c70ad689c21e3824319f80f6803ac77e",
          3941: "4d849a73235ecf9eb68557aa336fa0b9",
          4011: "c5424be294b14dd4c806da0bec84d5cb",
          4018: "e2c36b802207ab099fadfb2a89057a5a",
          4054: "83f907dc6e68a881eccd243e3701c0f7",
          4116: "7f5b9e97d3155122113d2728f96935aa",
          4186: "9e36e4a989e63799787a37a598cfcac8",
          4220: "e2731f00e2491c21e11d9d6fc4572261",
          4281: "deef2a08a50dec93ca2b55597dc45107",
          4528: "b85d5b454a565f7c1a105f18fee60ff6",
          4621: "616b8a5cf0acba3a5510334384e62200",
          4700: "2067872a36238f424c75cb03d4cb0288",
          4710: "93c13a61c441d72767e3fce17c8db4c0",
          4731: "9cfd471ab930ac887951ebca5e7d5c41",
          4799: "aa5421b02f6341cfd5a4cda107bbdba0",
          4851: "54eaf404d46ed4ee65abe4b692043280",
          4861: "313635749f57493830156bcdb52e6af3",
          4913: "e13ed263a7cad852e9d4479fd00944a7",
          4977: "5ebfe0a3fc06840dbfbccfab196d3b86",
          5018: "1475b2c27448ac46ebb951a9203d0184",
          5233: "3bfce91885b556ed7620da2b1105b34f",
          5247: "85672b422066d1322d150556983310cf",
          5254: "91b2fe037493df9f1f7d4beabfed00d6",
          5259: "408063e023272c7c86792f9fd18fcd18",
          5267: "2588ca28783c89279a271428e5469abd",
          5440: "bbcc3145bd55b1e3f757b71f4a56abc5",
          5530: "a256a5a071a6aee856cd81a5892c545b",
          5639: "6b21d4159256a1979b9010ced2bbf723",
          5663: "55e9ad0e3febe0990bec44c2e19d0289",
          5742: "ed247190fe05ab5919f73635dc80b316",
          5771: "585d6417fd59092af3bf5b542f99c10d",
          5794: "0971131fe468493aaaf477bebcb20c47",
          5830: "a23daa1468932866c24f5a721b2fefae",
          5832: "e68db62b6a244b0d53336756b8d91a78",
          5966: "b5c6d9a6da4ebb8f1f9445c8972b7b0e",
          6267: "be4f700fa096c241fb1f9153f9c4166b",
          6280: "7dcef5908b0b7218e023332ffeb16766",
          6285: "fb01e526638d8797f6e4c5b2272f7f06",
          6361: "c9eca4e81042138de12a275994117ded",
          6383: "d4481b50ad13741611c603f4a9d8d34d",
          6497: "92c5514259d02c4a6c4e87bd0ebe0ea2",
          6664: "adf9954e26a3ea6bc493964bb6ab590b",
          6879: "3dedd9189fe2de6ab52ffbd1791d9622",
          6891: "c4f6a43b600904b33a1d66d7a28cea0f",
          6940: "74bea959a5e0dc208b66778bfab99f98",
          6997: "c68729000cd45675417060450556f8cd",
          7010: "0f9f6819f8bcc26fe21fdb399f4df0e8",
          7039: "e058fda5b0486ac0f8570591ab3623a9",
          7073: "19a81e197c92bb5d7baefc04e83c26d9",
          7145: "c1d60b87acc9fd2c37d8b07e9f5d676c",
          7436: "cd1994984f91b3700f6ada8ed13d683b",
          7452: "12ed590b3549715f33a3cd32fa4ec867",
          7453: "e5836438a1e74c73a4e0a9b128a70aeb",
          7868: "f7ec6361fd60e4811a30f56f7bdfd269",
          7970: "1cf1b108bf21d2a8d73bac05226f9b58",
          8156: "677b5c584df3fba797381c933a51d829",
          8272: "7d28e7dd82e61fafde0d9a9af858adf3",
          8391: "27e5b4acb5bc30a380d8d2e404badc69",
          8714: "2c4259dfd98928d05c8d4cb5a0559ae2",
          8755: "eb223c4278118c551c43e5e0f1076152",
          8764: "eee88e2e6b9311aedfca8f9f14091ba5",
          8830: "0e2811fcd9770d5d0bc936633cdbbdbc",
          8880: "b1aa2cb9edb5195d252ac3875933642f",
          8970: "ff01c92a3c025aed8fbfb99e254275b5",
          9022: "89ba859810442dec1fc4b4e74a46aeb9",
          9028: "4b1743cb6175a8a80c292c073ec29e0c",
          9126: "ad297ef14ba026163fb35bfd6633f075",
          9235: "f9a75a8676397db4070c060d05f72337",
          9377: "efa1e6aa41766f1f567e1ba87522c2ad",
          9474: "19eb34255615ae7fd30188274854b683",
          9540: "e02fa37b3a61979d39e19ef71a3c9f1f",
          9615: "677581e6339e24ac2baf5907d142b3f9",
          9623: "b331f66641cca59b2a0c2ff87e976a2b",
          9642: "8006d4799553a8af738e95a1814fd162",
          9679: "0aa6f3d72303f3c0c912b0bbecfd5c16",
          9840: "8869ae12ba70644e755b7b5c0587fae6",
          9936: "43e427c46d18dd78c89651ca1da85411",
          9964: "faaafcd1bbcd5af25ac7f2ce65530652",
          9978: "7f39d67899857f03a3daf7ab353af717",
          9990: "a42f6332f76b8f77d076efde681cd842"
        } [e] + ".js", i.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), i.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), t = {}, r = "@rockstargames/sites-legacy:", i.l = (e, a, f, d) => {
          if (t[e]) t[e].push(a);
          else {
            var c, b;
            if (void 0 !== f)
              for (var o = document.getElementsByTagName("script"), n = 0; n < o.length; n++) {
                var s = o[n];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == r + f) {
                  c = s;
                  break
                }
              }
            c || (b = !0, (c = document.createElement("script")).charset = "utf-8", c.timeout = 120, i.nc && c.setAttribute("nonce", i.nc), c.setAttribute("data-webpack", r + f), c.src = e), t[e] = [a];
            var l = (a, f) => {
                c.onerror = c.onload = null, clearTimeout(u);
                var d = t[e];
                if (delete t[e], c.parentNode && c.parentNode.removeChild(c), d && d.forEach((e => e(f))), a) return a(f)
              },
              u = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: c
              }), 12e4);
            c.onerror = l.bind(null, c.onerror), c.onload = l.bind(null, c.onload), b && document.head.appendChild(c)
          }
        }, i.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, i.nmd = e => (e.paths = [], e.children || (e.children = []), e), c = {
          2349: [17523],
          8156: [31879]
        }, b = {
          17523: ["default", "./tina", 25136],
          31879: ["default", "./index", 25136]
        }, i.f.remotes = (e, a) => {
          i.o(c, e) && c[e].forEach((e => {
            var f = i.R;
            f || (f = []);
            var d = b[e];
            if (!(f.indexOf(d) >= 0)) {
              if (f.push(d), d.p) return a.push(d.p);
              var t = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + d[1] + '" from ' + d[2]), i.m[e] = () => {
                    throw a
                  }, d.p = 0
                },
                r = (e, f, r, c, b, o) => {
                  try {
                    var n = e(f, r);
                    if (!n || !n.then) return b(n, c, o);
                    var i = n.then((e => b(e, c)), t);
                    if (!o) return i;
                    a.push(d.p = i)
                  } catch (e) {
                    t(e)
                  }
                },
                c = (e, a, t) => r(a.get, d[1], f, 0, o, t),
                o = a => {
                  d.p = 1, i.m[e] = e => {
                    e.exports = a()
                  }
                };
              r(i, d[2], 0, 0, ((e, a, f) => e ? r(i.I, d[0], 0, e, c, f) : t()), 1)
            }
          }))
        }, (() => {
          i.S = {};
          var e = {},
            a = {};
          i.I = (f, d) => {
            d || (d = []);
            var t = a[f];
            if (t || (t = a[f] = {}), !(d.indexOf(t) >= 0)) {
              if (d.push(t), e[f]) return e[f];
              i.o(i.S, f) || (i.S[f] = {});
              var r = i.S[f],
                c = "@rockstargames/sites-legacy",
                b = (e, a, f, d) => {
                  var t = r[e] = r[e] || {},
                    b = t[a];
                  (!b || !b.loaded && (!d != !b.eager ? d : c > b.from)) && (t[a] = {
                    get: f,
                    from: c,
                    eager: !!d
                  })
                },
                o = [];
              return "default" === f && (b("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([i.e(2024), i.e(2229), i.e(1673)]).then((() => () => i(85950))))), b("@rsgweb/modules-core-hero", "0.0.0", (() => Promise.all([i.e(2229), i.e(9623), i.e(5966), i.e(4281), i.e(2440), i.e(842), i.e(364), i.e(2781)]).then((() => () => i(29592))))), b("@rsgweb/modules-core-highlights", "0.0.0", (() => Promise.all([i.e(4116), i.e(2229), i.e(4281), i.e(2440), i.e(2738), i.e(6497), i.e(9964)]).then((() => () => i(86497))))), b("@rsgweb/rockstar-account", "0.0.0", (() => Promise.all([i.e(7868), i.e(9840), i.e(1720), i.e(2229), i.e(9623), i.e(5966), i.e(2246), i.e(391)]).then((() => () => i(2772))))), b("@rsgweb/tina", "0.0.0", (() => Promise.all([i.e(7868), i.e(1426), i.e(2229), i.e(5966), i.e(4281), i.e(5267), i.e(8714)]).then((() => () => i(69540))))), b("@rsgweb/utils", "1.0.0", (() => Promise.all([i.e(7868), i.e(9840), i.e(2229), i.e(9623), i.e(2246), i.e(3855)]).then((() => () => i(46323))))), b("focus-trap-react", "10.2.3", (() => Promise.all([i.e(4977), i.e(2229), i.e(7145)]).then((() => () => i(24977))))), b("framer-motion", "10.16.4", (() => Promise.all([i.e(542), i.e(2229)]).then((() => () => i(10542))))), b("framer-motion", "10.16.4", (() => Promise.all([i.e(2637), i.e(2229)]).then((() => () => i(72637))))), b("framer-motion", "7.10.3", (() => Promise.all([i.e(9235), i.e(2229)]).then((() => () => i(19235))))), b("graphql", "16.10.0", (() => i.e(5440).then((() => () => i(55440))))), b("prop-types", "15.8.1", (() => i.e(2817).then((() => () => i(72817))))), b("react-dom", "18.2.0", (() => Promise.all([i.e(5794), i.e(2229)]).then((() => () => i(83413))))), b("react-intersection-observer", "9.10.3", (() => Promise.all([i.e(2229), i.e(6383)]).then((() => () => i(56383))))), b("react-router-dom", "6.17.0", (() => Promise.all([i.e(4018), i.e(2229)]).then((() => () => i(54018))))), b("react", "18.2.0", (() => i.e(3447).then((() => () => i(13447))))), (e => {
                var a = e => {
                  return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                  var a
                };
                try {
                  var t = i(25136);
                  if (!t) return;
                  var r = e => e && e.init && e.init(i.S[f], d);
                  if (t.then) return o.push(t.then(r, a));
                  var c = r(t);
                  if (c && c.then) return o.push(c.catch(a))
                } catch (e) {
                  a(e)
                }
              })()), o.length ? e[f] = Promise.all(o).then((() => e[f] = 1)) : e[f] = 1
            }
          }
        })(), (() => {
          var e;
          i.g.importScripts && (e = i.g.location + "");
          var a = i.g.document;
          if (!e && a && (a.currentScript && (e = a.currentScript.src), !e)) {
            var f = a.getElementsByTagName("script");
            if (f.length)
              for (var d = f.length - 1; d > -1 && (!e || !/^http(s?):/.test(e));) e = f[d--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), i.p = e
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
                var t = f[0],
                  r = t < 0;
                r && (t = -t - 1);
                for (var c = 0, b = 1, o = !0;; b++, c++) {
                  var n, i, s = b < f.length ? (typeof f[b])[0] : "";
                  if (c >= d.length || "o" == (i = (typeof(n = d[c]))[0])) return !o || ("u" == s ? b > t && !r : "" == s != r);
                  if ("u" == i) {
                    if (!o || "u" != s) return !1
                  } else if (o)
                    if (s == i)
                      if (b <= t) {
                        if (n != f[b]) return !1
                      } else {
                        if (r ? n > f[b] : n < f[b]) return !1;
                        n != f[b] && (o = !1)
                      }
                  else if ("s" != s && "n" != s) {
                    if (r || b <= t) return !1;
                    o = !1, b--
                  } else {
                    if (b <= t || i < s != r) return !1;
                    o = !1
                  } else "s" != s && "n" != s && (o = !1, b--)
                }
              }
              var l = [],
                u = l.pop.bind(l);
              for (c = 1; c < f.length; c++) {
                var h = f[c];
                l.push(1 == h ? u() | u() : 2 == h ? u() & u() : h ? a(h, d) : !u())
              }
              return !!u()
            },
            f = (f, d, t) => {
              var r = f[d];
              return (d = Object.keys(r).reduce(((f, d) => !a(t, d) || f && !((a, f) => {
                a = e(a), f = e(f);
                for (var d = 0;;) {
                  if (d >= a.length) return d < f.length && "u" != (typeof f[d])[0];
                  var t = a[d],
                    r = (typeof t)[0];
                  if (d >= f.length) return "u" == r;
                  var c = f[d],
                    b = (typeof c)[0];
                  if (r != b) return "o" == r && "n" == b || "s" == b || "u" == r;
                  if ("o" != r && "u" != r && t != c) return t < c;
                  d++
                }
              })(f, d) ? f : d), 0)) && r[d]
            },
            d = (e => function(a, f, d, t) {
              var r = i.I(a);
              return r && r.then ? r.then(e.bind(e, a, i.S[a], f, d, t)) : e(a, i.S[a], f, d, t)
            })(((e, a, d, t, r) => {
              var c = a && i.o(a, d) && f(a, d, t);
              return c ? (e => (e.loaded = 1, e.get()))(c) : r()
            })),
            t = {},
            r = {
              62229: () => d("default", "react", [1, 18, 2, 0], (() => i.e(3447).then((() => () => i(13447))))),
              9623: () => d("default", "react-router-dom", [1, 6, 11, 2], (() => i.e(4018).then((() => () => i(54018))))),
              95966: () => d("default", "@rsgweb/utils", [1, "workspace:^"], (() => Promise.all([i.e(7868), i.e(9840), i.e(9623), i.e(2246)]).then((() => () => i(46323))))),
              16565: () => d("default", "graphql", [1, 16, 9, 0], (() => i.e(5440).then((() => () => i(55440))))),
              2918: () => d("default", "@rsgweb/rockstar-account", [1, "workspace:^"], (() => Promise.all([i.e(7868), i.e(9840), i.e(1720), i.e(9623), i.e(5966), i.e(2246), i.e(2772)]).then((() => () => i(2772))))),
              81788: () => d("default", "@rsgweb/locale-tools", [1, "workspace:^"], (() => Promise.all([i.e(2024), i.e(4054)]).then((() => () => i(85950))))),
              44853: () => d("default", "react-dom", [1, 18, 2, 0], (() => i.e(5794).then((() => () => i(83413))))),
              92440: () => d("default", "@rsgweb/tina", [1, "workspace:^"], (() => Promise.all([i.e(7868), i.e(1426), i.e(5966), i.e(5267), i.e(9540)]).then((() => () => i(69540))))),
              90660: () => d("default", "framer-motion", [1, 10, 12, 18], (() => i.e(9235).then((() => () => i(19235))))),
              22738: () => d("default", "react-intersection-observer", [1, 9, 10, 3], (() => i.e(8764).then((() => () => i(56383))))),
              57145: () => d("default", "prop-types", [1, 15, 8, 1], (() => i.e(2817).then((() => () => i(72817))))),
              2765: () => d("default", "focus-trap-react", [1, 10, 2, 3], (() => i.e(4977).then((() => () => i(24977))))),
              82849: () => d("default", "framer-motion", [1, 10, 12, 18], (() => i.e(2637).then((() => () => i(72637))))),
              84590: () => d("default", "@rsgweb/modules-core-hero", [1, "workspace:^"], (() => i.e(364).then((() => () => i(29592))))),
              87330: () => d("default", "@rsgweb/modules-core-highlights", [1, "workspace:^"], (() => i.e(6497).then((() => () => i(86497))))),
              87052: () => d("default", "framer-motion", [1, 10, 12, 18], (() => i.e(542).then((() => () => i(10542)))))
            },
            c = {
              842: [90660],
              2229: [62229],
              2246: [16565],
              2440: [92440],
              2738: [22738],
              4281: [2918, 81788],
              5267: [44853],
              5966: [95966],
              6497: [87052],
              7145: [57145],
              8156: [2765, 82849, 84590, 87330],
              9623: [9623]
            },
            b = {};
          i.f.consumes = (e, a) => {
            i.o(c, e) && c[e].forEach((e => {
              if (i.o(t, e)) return a.push(t[e]);
              if (!b[e]) {
                var f = a => {
                  t[e] = 0, i.m[e] = f => {
                    delete i.c[e], f.exports = a()
                  }
                };
                b[e] = !0;
                var d = a => {
                  delete t[e], i.m[e] = f => {
                    throw delete i.c[e], a
                  }
                };
                try {
                  var c = r[e]();
                  c.then ? a.push(t[e] = c.then(f).catch(d)) : f(c)
                } catch (e) {
                  d(e)
                }
              }
            }))
          }
        })(), (() => {
          i.b = document.baseURI || self.location.href;
          var e = {
            8106: 0
          };
          i.f.j = (a, f) => {
            var d = i.o(e, a) ? e[a] : void 0;
            if (0 !== d)
              if (d) f.push(d[2]);
              else if (/^(2(229|440|738)|4281|5966|7145|9623)$/.test(a)) e[a] = 0;
            else {
              var t = new Promise(((f, t) => d = e[a] = [f, t]));
              f.push(d[2] = t);
              var r = i.p + i.u(a),
                c = new Error;
              i.l(r, (f => {
                if (i.o(e, a) && (0 !== (d = e[a]) && (e[a] = void 0), d)) {
                  var t = f && ("load" === f.type ? "missing" : f.type),
                    r = f && f.target && f.target.src;
                  c.message = "Loading chunk " + a + " failed.\n(" + t + ": " + r + ")", c.name = "ChunkLoadError", c.type = t, c.request = r, d[1](c)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, f) => {
              var d, t, r = f[0],
                c = f[1],
                b = f[2],
                o = 0;
              if (r.some((a => 0 !== e[a]))) {
                for (d in c) i.o(c, d) && (i.m[d] = c[d]);
                b && b(i)
              }
              for (a && a(f); o < r.length; o++) t = r[o], i.o(e, t) && e[t] && e[t][0](), e[t] = 0
            },
            f = self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || [];
          f.forEach(a.bind(null, 0)), f.push = a.bind(null, f.push.bind(f))
        })(), i.nc = void 0, i(45408), i(58639)
      })())
    }
  }
}));