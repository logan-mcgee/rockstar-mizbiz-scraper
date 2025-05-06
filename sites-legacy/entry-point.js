! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "5150bd30-22e5-4e05-b271-cf7dd2eff9ec", e._sentryDebugIdIdentifier = "sentry-dbid-5150bd30-22e5-4e05-b271-cf7dd2eff9ec")
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
                  "./bootstrap": () => Promise.all([f.e(7868), f.e(9840), f.e(1426), f.e(4116), f.e(7619), f.e(5771), f.e(2229), f.e(9623), f.e(5966), f.e(2246), f.e(4281), f.e(5267), f.e(2440), f.e(842), f.e(2738), f.e(7145), f.e(8156), f.e(9679)]).then((() => () => f(9679))),
                  "./index": () => Promise.all([f.e(7868), f.e(9840), f.e(1426), f.e(4116), f.e(7619), f.e(2229), f.e(9623), f.e(5966), f.e(2246), f.e(4281), f.e(5267), f.e(2440), f.e(842), f.e(2738), f.e(7145), f.e(8156), f.e(9978)]).then((() => () => f(79978))),
                  "./site-routes/Bully": () => Promise.all([f.e(7868), f.e(9840), f.e(1426), f.e(4116), f.e(7619), f.e(2229), f.e(9623), f.e(5966), f.e(2246), f.e(4281), f.e(5267), f.e(2440), f.e(842), f.e(2738), f.e(7145), f.e(8156), f.e(2349), f.e(818)]).then((() => () => f(30818))),
                  "./site-routes/RedDeadRedemption": () => Promise.all([f.e(7868), f.e(9840), f.e(1426), f.e(4116), f.e(7619), f.e(2229), f.e(9623), f.e(5966), f.e(2246), f.e(4281), f.e(5267), f.e(2440), f.e(842), f.e(2738), f.e(7145), f.e(8156), f.e(2349), f.e(8830)]).then((() => () => f(58830))),
                  "./tina": () => Promise.all([f.e(7868), f.e(9840), f.e(1426), f.e(4116), f.e(7619), f.e(2229), f.e(9623), f.e(5966), f.e(2246), f.e(4281), f.e(5267), f.e(2440), f.e(842), f.e(2738), f.e(7145), f.e(8156), f.e(2349)]).then((() => () => f(22349)))
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
          131: "9457ade043dea16c74e4494d565f407e",
          188: "1a2e06d8ce0bbcd794519f6a69ad42ab",
          278: "d8cb5dcc67cc21193d9106cb95373580",
          299: "cbbb0438f08a7e41bd0d8186060bc53e",
          314: "b05f1bdcc4a25f149afb885200003469",
          364: "95d6beb7e450e95450917ea91576fada",
          391: "290a48396e8416535a9f65070195d83a",
          542: "2cea71a61512c89113eaf129a6b75c2f",
          662: "aa955a4d3005e6ba7f9fe4b01bb9b078",
          721: "364e9447c9c9003d6e0dff76617aaa0c",
          818: "955230651f2cec2334149f4b4a669cf5",
          824: "57b5db72ffee2b01585c283c08705fa4",
          842: "3fc78505690568d54bc2cfccd44776f2",
          907: "929a087c5615f052575c3143317abe82",
          1054: "a41c919ff6922a3b20583d7ef028b92c",
          1242: "65cb8a89b10481238615768242b8d860",
          1324: "694b0f543d945f2695ac2ed9c71abd6c",
          1426: "f293470cf4cc152bfb220b3d05666b6f",
          1667: "3ae1725c2a57fea5e9affb64a1dff345",
          1673: "aae7caf11ce12cf824422d047f5ad2a1",
          1720: "9019af1ec3d58dbe499efa02a4223fd9",
          1822: "d86a0ef9cf25f39dcfdf3d608283dfab",
          1868: "2a1eada6fb01df8b41a8c3bc6d10cea6",
          1962: "946f5f5bef71101ac6f30221b2957c45",
          2024: "0208e0c035579849319938bd8d9bb173",
          2156: "3e9af4d4c45ab74b95e8a019792be281",
          2171: "4f9488a8e6fc305bd1c010ea56f7cb2c",
          2221: "5e8c9f1dd662b2359e1559b171409a81",
          2229: "d2d18ecff8d4927cf46bf4f3aa674dc2",
          2243: "3fff15aa5e8307e48cf0bd5dddc5c2e4",
          2246: "f198fc294aec5364d050f8ed3a2e1456",
          2347: "8ecc9658e4be1d09df6c71407e7ce2e5",
          2349: "8640c319ffbb4540da2ea7982924b8b4",
          2365: "5dc6165052b8c8245fbbf3a3271c394c",
          2398: "9ae8e7cbd43e2f7286a320eba2c85e6b",
          2440: "c30750136d805475662f793509d9f4b5",
          2466: "d66ac0065ac1902cab0510316872e0ca",
          2637: "57c72c9d76ddde35c83425fc0325d9d3",
          2642: "8cd168bd844d98bf22d30f7ee869b6a4",
          2678: "12678375468cec9d74dd21f7143b8575",
          2738: "5e5c951d3b969fbec7eb30c5096b56cf",
          2772: "cb699213183f27ca8dadd0e4e7a5f944",
          2781: "ee40b34ef69dc901cea38abd01d71db6",
          2817: "a414b1fb19b72589d395f82ad5f35ba0",
          2864: "a843cb42e59b3a6aa0d28b6f45264d8d",
          3034: "5588b555cd9c1ae8b7272789ba805d25",
          3197: "bb27513ca0db240f7500a4df14cfd8dc",
          3241: "cb176bb257f3d609a1bf26a670c46ad4",
          3343: "b4dbea5207e1865b18613933f5881b43",
          3370: "ea8ef752f0d816e53ef04c214a29c2e0",
          3447: "d2cfaa7f11ec9ee1decd8b50f24cbd87",
          3475: "9a239ed2bf2a353f8e638e360e7e2c03",
          3486: "c89cc5d6ad7af7461bf8da9e740cf00e",
          3557: "c1632a8b650b14b8754fa3e9c1a61dc0",
          3697: "84c73e8913daba690c97cd264c80bcbd",
          3855: "5066c8a1215a78a1c81a06d19e32570f",
          3885: "f618552d4a18aa60380209691f9bba9e",
          3941: "b7493d21204e8de8cfc0e7415e9e60c1",
          4011: "53dc1fb44089675ef243d60489a49aeb",
          4018: "bf83dfbad247ef171488305858f3069e",
          4054: "f27ba75e7a3722c120ec705d6b43145c",
          4116: "2f0cf1ff772348065d9c54319d5cfed8",
          4281: "deef2a08a50dec93ca2b55597dc45107",
          4528: "51d6edfdc9941fedd637c4bc3b0ceb99",
          4621: "2b39ea83b03ffb1ac08050e6f89e0758",
          4700: "aa6462cc3e1861f7d719fb293aa8befd",
          4710: "c64b38c1f5423f4a1c0d0c95a10fbe11",
          4731: "abb38546a1d25432729393ce28bb5589",
          4799: "eb7e80f5e57ba89ea00511ff971bf878",
          4851: "1f809a6052e3ef6f06d104b0a305d775",
          4861: "251b71b1aaf19288c3e5b17e5bc94916",
          4913: "f58dc1a84bc23509113cba2e506d654e",
          4977: "00f615af814769aa9df405dd0d1dd874",
          5018: "d80db5ff550c46e8e081593246d2b610",
          5019: "3fb273570f09a6aed2a60e1754666a29",
          5142: "a09b1ecac4d6c65a35e0afba0f99e0ba",
          5233: "26e7d9eaa0b85c698452f7d683767dc7",
          5254: "d47c6f633c9fec3a357656fd4e8dbb93",
          5259: "d916c860ac2aa3c10a4a0c09ab4183f1",
          5267: "91f2e3d922035e75684df4450dd661be",
          5440: "d84f84361af464828aa0528cace02d9f",
          5530: "ddac65e0f7530a16f9be456c03342517",
          5639: "5348a1e2f95a04f94de14b7a6f67b78c",
          5663: "3b9f117b22db1447d55cda11b6ef3418",
          5742: "44ea8e13d6558899ca18a6a71727d0d1",
          5771: "04f7329961af0efd37213c5d6c4b8cf4",
          5794: "c653f300befb706f1d98eb7a91d73038",
          5830: "8bb3d4d1638fd8a98905e262f0a287df",
          5832: "1fd8faeae7ed08bb6226a7e403a26bf8",
          5833: "4751ca9cf9da5b4c1ec5afa70f1499ee",
          5966: "b5c6d9a6da4ebb8f1f9445c8972b7b0e",
          6267: "8e81136903019970d37b9e88a2b7bbf4",
          6280: "f4d3361d003c5e41c0d8203c63192ad2",
          6285: "1905193c5783788b894b24330a10a333",
          6361: "d054b418921e65a6ea795d0c3bdd4469",
          6383: "414f8da060bdd36e57df3a5be6b642ab",
          6536: "de2ee215afe7b7abee367bc65ef9d2e6",
          6664: "747275e5d94797ef9b7fa142f6365e00",
          6879: "51fc3b1106ad997d368613b50ce59712",
          6891: "3253b7b1e33240cf52b35976a9fb9e5a",
          6997: "f44090a31182d0ce0c0c1aa82a601693",
          7010: "b56ec059970965a89d87b5d81bdb382b",
          7073: "a968fe0b1b3d5c3bbbb1f8e61454c047",
          7145: "c1d60b87acc9fd2c37d8b07e9f5d676c",
          7339: "948087772451978e0c2a3c1721a309e4",
          7436: "7e3b2ff515a363d3632ab648213fb253",
          7452: "00339c4824d27d28890bef4808777709",
          7453: "30d3075609f0d33cef61eea1ce76afb4",
          7619: "86e39ae2c02edaa6d3f9a4870da46d3e",
          7783: "8239c73b628ce6991de5a9b4ca42c84c",
          7868: "b87f170748aeff472327c4b518525b26",
          7970: "84d0937cbe865507955d4cbfcc72b8b3",
          8156: "32dae20a0380bfa762f9f6ed9a91ea6a",
          8272: "b805ea81bbc6092a93f4857bec375410",
          8391: "9eabdd9ae7bb1e7b861ab23217fdd7b5",
          8714: "490e2caf88bfefb06fe1b503d110c1ce",
          8755: "85630d81021d725d79c7829ab240a557",
          8764: "85a3484d68f917d87e702bed45da3020",
          8830: "aec1dbaa508093aa34a375fd50b08546",
          8880: "5a88ed07b2b543e9fbb0d96f40679918",
          8970: "c1211cf3ba519690fbbca4e9421dcc35",
          9022: "4238c6daa74caff90b4a1229aef67207",
          9028: "a5373f63d1c658d563384875c61dd073",
          9126: "cb59a22dfae0cbfd3ff7b803803dc0ee",
          9214: "79b7ad910e0597c0b8fc2fc96270edd0",
          9235: "777b14d83c224db4236e16c7d07f68db",
          9377: "76c5c62bb9536d4c9fe49a8e16e2ed57",
          9540: "44bf03ac4099b5effaff9fd15d030b97",
          9615: "a12ea5986cede80338a39cfbe7fc2df2",
          9623: "b331f66641cca59b2a0c2ff87e976a2b",
          9679: "2b11707795ebc8257aa84e586c567c32",
          9840: "6b8f69fd09e1cd57cf071876c09c094e",
          9873: "33b91e4ab643c1b5630d4d2ddae4c811",
          9936: "e7eae86205211dfaf9ef378b902d90c7",
          9964: "814606ec5b7335da05075960d1399e5f",
          9978: "2e26bd74dc69792bac8684812f8f90ba",
          9990: "aee1958e7345aaf3d52304277f41fb2e"
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
              return "default" === f && (b("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([i.e(2024), i.e(2229), i.e(1673)]).then((() => () => i(85950))))), b("@rsgweb/modules-core-hero", "0.0.0", (() => Promise.all([i.e(2229), i.e(9623), i.e(5966), i.e(4281), i.e(2440), i.e(842), i.e(364), i.e(2781)]).then((() => () => i(29592))))), b("@rsgweb/modules-core-highlights", "0.0.0", (() => Promise.all([i.e(4116), i.e(2229), i.e(4281), i.e(2440), i.e(2738), i.e(7783), i.e(9964)]).then((() => () => i(27783))))), b("@rsgweb/rockstar-account", "0.0.0", (() => Promise.all([i.e(7868), i.e(9840), i.e(1720), i.e(2229), i.e(9623), i.e(5966), i.e(2246), i.e(391)]).then((() => () => i(2772))))), b("@rsgweb/tina", "0.0.0", (() => Promise.all([i.e(7868), i.e(1426), i.e(2229), i.e(5966), i.e(4281), i.e(5267), i.e(8714)]).then((() => () => i(69540))))), b("@rsgweb/utils", "1.0.0", (() => Promise.all([i.e(7868), i.e(9840), i.e(2229), i.e(9623), i.e(2246), i.e(3855)]).then((() => () => i(46323))))), b("focus-trap-react", "10.2.3", (() => Promise.all([i.e(4977), i.e(2229), i.e(7145)]).then((() => () => i(24977))))), b("framer-motion", "10.16.4", (() => Promise.all([i.e(542), i.e(2229)]).then((() => () => i(10542))))), b("framer-motion", "10.16.4", (() => Promise.all([i.e(2637), i.e(2229)]).then((() => () => i(72637))))), b("framer-motion", "7.10.3", (() => Promise.all([i.e(9235), i.e(2229)]).then((() => () => i(19235))))), b("graphql", "16.10.0", (() => i.e(5440).then((() => () => i(55440))))), b("prop-types", "15.8.1", (() => i.e(2817).then((() => () => i(72817))))), b("react-dom", "18.2.0", (() => Promise.all([i.e(5794), i.e(2229)]).then((() => () => i(83413))))), b("react-intersection-observer", "9.10.3", (() => Promise.all([i.e(2229), i.e(6383)]).then((() => () => i(56383))))), b("react-router-dom", "6.17.0", (() => Promise.all([i.e(4018), i.e(2229)]).then((() => () => i(54018))))), b("react", "18.2.0", (() => i.e(3447).then((() => () => i(13447))))), (e => {
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
              87330: () => d("default", "@rsgweb/modules-core-highlights", [1, "workspace:^"], (() => i.e(7783).then((() => () => i(27783))))),
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
              7145: [57145],
              7783: [87052],
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