! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "d0029cdb-ec91-4908-9eaf-124e96db54db", e._sentryDebugIdIdentifier = "sentry-dbid-d0029cdb-ec91-4908-9eaf-124e96db54db")
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
          131: "4439ed6a75d181bf65ad62f4184fd6c7",
          278: "72356748cfba7576723118f898e01c4f",
          299: "ba6cc14fb905aa98d0f104a395ea0057",
          314: "8ced35769923aeb00653ac6b02f75c71",
          364: "9bdeecdaf973a2fd447a0db016a9366f",
          377: "d5c1cf326ad36928492a7403c5c86bbd",
          391: "ef12d1036163e3994e3c283c71bf97a1",
          542: "f36a35c823dc7fb6073738a03c63ea35",
          662: "226ddf2d91f1e9e8c92d19e3d891f396",
          721: "8470a5c0882b6df3c4ebc830ab5fc797",
          818: "5aac59bae51266acaaed7ddbcc7f6e2b",
          824: "b699044073ece3abca3608ec009bd751",
          842: "dc4a4f5e03b081f9853b34951f142e7e",
          888: "7d98f91954935c77b3087f4005ab59b8",
          907: "9ee31211a6d68f7abc718cf593f58360",
          969: "6e08df099d96f02b7d639af7a08733d7",
          1054: "2a49767512150cad8d3377c4d3c7dbdc",
          1242: "36ea9bb7c336fc132be5cdc46df7ed7c",
          1426: "8833c420ae008a0af213e7872ea7ee01",
          1607: "36b3a049d4a9d65389dbf7fe5371a48f",
          1673: "c27e48d40a3d568f98a685bb9fb10e85",
          1720: "9b89f0fbb9408d3d025354344478e91c",
          1822: "41aa942c3081e04c41978e8698997e2b",
          1868: "f698034425987148783f201ef5b963ac",
          2024: "e31651d83d5eeda14dea586f13123be6",
          2156: "f70c7a5324b3abfc8485fe2231bcdf43",
          2171: "98ee4729eb967282d3f773f26b690445",
          2221: "9fce84793829ad3d64bbec7ab3e8a60c",
          2229: "d2d18ecff8d4927cf46bf4f3aa674dc2",
          2243: "a69c1f771713bb9fe608e8c3e4e85bfb",
          2246: "b81bd6a60c38d99369d48507b079a036",
          2347: "9dff3a111f85983aabc6499704135a91",
          2349: "59d983bc6fb868029fe64db0aa374242",
          2365: "79214ce04f4bc00c0c4c6fff0d16ad10",
          2398: "a6a6e69dcb66473e222c4fd0a79888b2",
          2440: "c30750136d805475662f793509d9f4b5",
          2466: "431a305353f07b8bdf12d1525e30b773",
          2637: "0967926bc3efada512951472c5120e3f",
          2642: "2d9788213f14727a6ce1a3c8b7a67cbd",
          2678: "92f6c0a8619543af751df7f7f3656eca",
          2738: "5e5c951d3b969fbec7eb30c5096b56cf",
          2772: "3d48356686b433ddbf87f04e328a8eeb",
          2781: "cbc53d0e233a9bbc206bcab5494f2979",
          2817: "eee1d9b9b3232d3479fcc7bbf5bddc38",
          2864: "3efb365f59eb4355785c7ba3b4c2d5ad",
          2941: "d268ce94327df8b69acd58b58012fd8b",
          3034: "a0bd5f07c5129e78977f4b75e0fd2f95",
          3088: "6586f5bda6240685cdc2b27c1e6c8bac",
          3197: "c8b73c22e37453ec802971a35949fdc4",
          3343: "41dc0bad51806dda2a02f7508d40bece",
          3370: "407653d1ff21f2273e3ed9ec928fc25a",
          3447: "29a642649aef2e76d05cb50cdafcc302",
          3475: "387c3e740bc2272a2e557753f65e8474",
          3486: "3a99657ede74e3e11529b903436adc67",
          3622: "b969f4592fd0845661bf0085923c18a6",
          3697: "c2845c4eb8942f64f0fcafa2c6dbc73f",
          3855: "534c3b160c1270d4531322a69f7a296e",
          3885: "cb80005cb882340ddf16dc90f3014c6d",
          3941: "3fa690eb1d7c64fe1e56f24db80096fc",
          4011: "f31f417e1c5cd6a4842a21d14d3a666d",
          4018: "0c38de9c5a503fa302e0d56587985060",
          4054: "bfd5859184593e22f5a561f30095de93",
          4116: "aa16b68dad6cc37551facecd9671d38b",
          4186: "b75858fc72ed9d2bec980c94c5f420ac",
          4220: "bc6c896fd44c4065b460dcff53ff1586",
          4281: "deef2a08a50dec93ca2b55597dc45107",
          4528: "e04d94b16e5493c69a480495bec2f2ba",
          4621: "81c98a361345fd08b91c7c2d25bd9e9f",
          4700: "5507b26426eab3d2ccf97fbf7ce390cf",
          4710: "a0daddefb979db5e14ebaca1fdf1b723",
          4731: "26a9a0ba7c1803c4bcc45b3e3141dc9c",
          4799: "3723bd539abaf86078ed07fbb7f4fec4",
          4851: "578d1a865e58eec2c13afb89a0b641a2",
          4861: "246b66b52621359007c0970bed9816cc",
          4913: "86c190d1d013355c3d9f03760740a8d6",
          4977: "19327580e1b48865bcb6f9c3a4bc5f6a",
          5018: "1a75db7e8aa4aba045e6b4f2a4a8f073",
          5233: "95731aa4ff56e0dfb5e9cd00df1fcf7a",
          5247: "abfff73ed66403801b53971dfbaee3c8",
          5254: "e8b8fe424dad673a33de942371f8293d",
          5259: "7c743090385f4f32920d817c458a0d53",
          5267: "a1e544af526113e4261170ab4c242ce8",
          5440: "ce58be6281a6df41e5ff0b3a5eef9269",
          5530: "a1caa4ff4bd597edf82e32bb0e2a6803",
          5639: "2d500f96b2ad0e57b27c49eb394d2523",
          5663: "0903928826bd8b19f4beade729b55d9b",
          5742: "c46c307ce8bcaebc459aba942f41afed",
          5771: "cd449cac8fb793ee341be25c34713e88",
          5794: "a462b33bad3f242890514e9d16a7739b",
          5830: "dbb69e2243373c47bb265284d6451618",
          5832: "9fc7533115f5a7a9a3f5cd45b429affc",
          5966: "b5c6d9a6da4ebb8f1f9445c8972b7b0e",
          6267: "ab66c6daae0597ee93bcfbf2180f3598",
          6280: "b3c208888627046fbdc624cf8b610147",
          6285: "80bcd9b4617c6483bb8a1d8c77c163bd",
          6361: "43fc515f792a0c630777829254044992",
          6383: "eafb9ca9c04d1e1ba316f6e8f6aedb60",
          6497: "b322b6fdce0216eab0d6eb8dac659ee7",
          6664: "9da8b55096390272de2e952a829f041c",
          6879: "147538114c4c2c25179fb0b25bb6c7af",
          6891: "cc975475d9314de84ba5b2f853b08bc9",
          6940: "5b699829b55694431b31905a24d439e3",
          6997: "d6853daceeb353df848ef1d5462805de",
          7010: "9c315e5aea4d1c2abc194fa9615774a5",
          7039: "13ee1089ccc588b2971f7a0908d77eea",
          7073: "d4de28642bfb5fd889f148c2028092ee",
          7145: "c1d60b87acc9fd2c37d8b07e9f5d676c",
          7436: "bf73a4d6b5000f2abb05d66b38ec73a3",
          7452: "b08af1b2b2a443c3077a1b55371f9ccf",
          7453: "9ee8f0f05465e1742d5464a44a762e8d",
          7868: "628bdcac5d8b41b72ea56e8b2875dfef",
          7970: "89b5675b13bf826b44fae5ac60671e52",
          8156: "82497308fd61a20a46ce5126e8177f89",
          8272: "e46a74f1dc7380ac7ff5c5ad468ec186",
          8391: "7b40aa5cae10d4724639a9d3f9f3845b",
          8714: "65522d0b4fd9971d815c36a881838850",
          8755: "df6e3f0387bae8a3c14510211b5922be",
          8764: "463ce31517f4c0d09587672f41c162c7",
          8830: "63f88d51779e80a63218004bf8e9f0e6",
          8880: "701462ebe217c0a64707df73f6df07e9",
          8970: "6e036b2898ed44128ae6eb0944cfde93",
          9022: "f584ec3f3bada339a76c25c3441a6a50",
          9028: "4907a2deb392a67f0210e589712c5b0b",
          9126: "9a5a7733ab874f55a01b09c375524a15",
          9235: "7790da3e78e02553092af409a3a4b994",
          9377: "bcf67f4aa93ae34530e8c67d065fadf1",
          9474: "f85fb506c73b60571444b14a087c6450",
          9540: "414300cbecdff05794b65cbcee080f98",
          9615: "93413338e70d3e887d723c13b6a8efed",
          9623: "b331f66641cca59b2a0c2ff87e976a2b",
          9642: "30f55207980b262697d53dd481b5f029",
          9679: "589332a8cf29911a1dab248a96026abf",
          9840: "38473b1d920d05ba58aa10df7d912786",
          9936: "7b5c5aa4a30c8fe767505ee8cda353d1",
          9964: "691c604bfb3e1150fb03284a7a6186f2",
          9978: "f5fc918cf47424e632d8fcfdd160ff6c",
          9990: "9e007fe3cd9d92fafde9ad493be1efc2"
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