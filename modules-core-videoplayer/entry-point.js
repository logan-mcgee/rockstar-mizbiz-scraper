! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      a = (new e.Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "2687ee84-97db-4202-922d-577d04dd920d", e._sentryDebugIdIdentifier = "sentry-dbid-2687ee84-97db-4202-922d-577d04dd920d")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-videoplayer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register([], (function(e, a) {
  return {
    execute: function() {
      e((() => {
        var e, t, r, d, f, c, o = {
            13218: (e, a, t) => {
              (0, t(77600).w)(1)
            },
            44857: (e, a, t) => {
              t(13218)
            },
            58157: (e, a, t) => {
              "use strict";
              var r = {
                  "./bootstrap": () => t.e(7706).then((() => () => t(97706))),
                  "./index": () => Promise.all([t.e(1342), t.e(2229), t.e(9623), t.e(6188), t.e(5966), t.e(9010), t.e(3581), t.e(2918), t.e(1120), t.e(4444)]).then((() => () => t(4444))),
                  "./tina": () => Promise.all([t.e(2229), t.e(6188), t.e(5966), t.e(4853), t.e(9010), t.e(8659)]).then((() => () => t(48659))),
                  "./tinaBlockTemplates": () => Promise.all([t.e(2229), t.e(6188), t.e(5966), t.e(4853), t.e(9010), t.e(8659)]).then((() => () => t(48659)))
                },
                d = (e, a) => (t.R = a, a = t.o(r, e) ? r[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), t.R = void 0, a),
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
            67884: (e, a, t) => {
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
            77600: (e, a, t) => {
              const r = t(67884).y;
              a.w = function(e) {
                if (e || (e = 1), !t.y.meta || !t.y.meta.url) throw console.error("__system_context__", t.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                t.p = r(t.y.meta.url, e)
              }
            }
          },
          n = {};

        function b(e) {
          var a = n[e];
          if (void 0 !== a) return a.exports;
          var t = n[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return o[e].call(t.exports, t, t.exports, b), t.loaded = !0, t.exports
        }
        return b.m = o, b.c = n, b.y = a, b.amdO = {}, b.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return b.d(a, {
            a
          }), a
        }, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, b.t = function(a, r) {
          if (1 & r && (a = this(a)), 8 & r) return a;
          if ("object" == typeof a && a) {
            if (4 & r && a.__esModule) return a;
            if (16 & r && "function" == typeof a.then) return a
          }
          var d = Object.create(null);
          b.r(d);
          var f = {};
          e = e || [null, t({}), t([]), t(t)];
          for (var c = 2 & r && a;
            "object" == typeof c && !~e.indexOf(c); c = t(c)) Object.getOwnPropertyNames(c).forEach((e => f[e] = () => a[e]));
          return f.default = () => a, b.d(d, f), d
        }, b.d = (e, a) => {
          for (var t in a) b.o(a, t) && !b.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: a[t]
          })
        }, b.f = {}, b.e = e => Promise.all(Object.keys(b.f).reduce(((a, t) => (b.f[t](e, a), a)), [])), b.u = e => "js/" + {
          19: "a21fbe76ad9ffff67fc773ec3e250495",
          131: "4be913ab43b28dbfa75534c2ceede4bd",
          276: "024d39dea6ed84fe4bc9433b60975408",
          278: "65f5bef66d891395896ae89c143564e7",
          299: "a4d15c77ae5829a810cdc285a2528b80",
          314: "06fa1d275077999011006663f2583a14",
          621: "bc437b61369f27fca6d708f282f530a3",
          662: "5a31c886e1703743c75430d4abece9d5",
          824: "add82e98a440b6c1d374e8be512858f4",
          838: "c4eb992b408b08782c2d36061375ffb5",
          907: "ae129133415c8c18af671fd29c11905a",
          964: "34ee4de669e208e65bdcfa5e21bd49c8",
          1054: "388493da0b886a7a9017c830ae834753",
          1120: "e56d99e4f0a774af3a4553296bca3a99",
          1242: "a84b9204dddfeebf0255257c6a2c0529",
          1342: "b6f2511dcac12c2023102295c98283b6",
          1563: "cf76bce6eee9a2e459f24e7af221e3b6",
          1822: "2fb764aba4ee2763f8fa3ce0e37be76f",
          1868: "486916e21c9ad6a91401f38f0a7c48be",
          2156: "657b385b1e9b4f3c78c6bb54b562743f",
          2171: "a0f2bbdcce532fd2b2a7abbcb96411a4",
          2221: "4f121a3da4950422fcaf87716fba2b8c",
          2243: "75e97fa3660c2623ccc9b93172a60c9a",
          2347: "c38f1b6e7a1eec212f1bf613c49543a2",
          2365: "5ff43d3266f683ef2b59cbb16f340dd0",
          2398: "5bf69cbdd6874ad0788d38afacb63c06",
          2400: "63517e4b48c0944a29cfe94291a51617",
          2466: "bcd0136ef5abef22724dc13ab57a2d2e",
          2642: "0808fb1bc4f49f8357cab36d75c44666",
          2678: "021957491cd4930d401d79c2ecd7a374",
          2864: "6607c795513284e9c92e330bdaf4b58e",
          3002: "9723ae2b3ee55085078b3db3d7d84273",
          3034: "62a0c050f197bdd411be44141c98ecf2",
          3197: "49cba46a998f86a92405a1a85bbb7536",
          3218: "04d59feb5fc222c762a12b9288956a54",
          3222: "0edbdecba1436c990d22e8ae524b0873",
          3343: "5ae0dfaab327c244833a56867f297861",
          3370: "56e78259b018255cbbace6846b15b481",
          3475: "048d7a4cca32dbe2dabdecfa4689d7c1",
          3486: "d2fc576b5d5f33575d7078ae434087c0",
          3663: "9d0cd780c9d4915f33ca3f64610abee2",
          3697: "b02495a64d6600308c43442a3f10912a",
          3736: "48a02d9334592755424c55ba329b3362",
          3885: "431e1781a755d3172b25c743e53b7761",
          3941: "773d2bd8dc02054e12024df77a2eaa6b",
          4011: "c6cd1f149b1b6ad8786dd6249a812463",
          4105: "4fa90e3a6e2a6f6d75db302c9c74a3ff",
          4309: "692068bf22d3ad4dc6f28b0b5e2714ac",
          4444: "ff45dbe2ab480625b9e6abcc47a447fc",
          4480: "3fdc87401f1a9ce6848db977bf919f2a",
          4528: "c821f8c0bb042d7da33f73e7dbe45fc4",
          4546: "d7fb459fb460f72c643348b17d0012fb",
          4621: "019c272229c914e39c08b6421b0d6e66",
          4700: "9ff72808ad4f607f060a4605ce6718fe",
          4710: "187e1795f037f4c95be6e72bc0fdd489",
          4731: "5498fb6cc729ee276e5615c802f8dee4",
          4733: "b76f8df6a66c7a7d593a51e4982df157",
          4799: "4aba6d8a39fd46114e85383e780cb192",
          4851: "a28962830f290795955829d199e3fc7f",
          4861: "ed3db5f5307f048587c643fe86a59b96",
          4913: "e1fd08d9d7ad518a4fe18211d3949975",
          4981: "9906b130232d1c9ddc68c538e81009be",
          5018: "7afd2c38d1307c5a4ea3ceac33a1d01f",
          5233: "29bfb5519bf235bd8e50c7b16fce077a",
          5259: "2bb064f63faf4d12af43b83a7251888f",
          5265: "57d9b30388962df8157cfed14ebcb696",
          5530: "321039ccf133c064467128c7d916d3b4",
          5639: "303858541b77b1fe994533a71a640c76",
          5663: "6d6f8c8ba500c7a93fb118446b2c81d2",
          5742: "4551d46dd73f94da44380ad1206f3462",
          5790: "be621b9b74137446164b403559f9a9d3",
          5830: "5a997f64428a3e3bd70624eddf1e20e9",
          5832: "d708f3f06c586a7fa82852bc4610c65c",
          5854: "1f949a21912aa4964f2881bb55a10017",
          6018: "d9d63b8201d01d3bb767b95cfc4240a5",
          6267: "df44c3a3717355bacffa4055291989dc",
          6280: "40d71feeb7bcb6c00241cf70dfab496b",
          6285: "795173cd50f3e066ecdce87ed1a5ca35",
          6361: "100634aeef29ce1da59c5a5394d90a66",
          6399: "3e1e88268564d41892d5d4230798a4ce",
          6664: "ce0259bc1d43aeb10d82258db6253115",
          6879: "57bec0dc7b9c5841fca4b90803a4bc77",
          6891: "eb9ab914c92bc97f2e507dbaefe48e4e",
          6997: "23eec00cd5e568e91cf9bfc9461ed371",
          7010: "2dd96451a80fddd2f02e65a7df7b81a8",
          7073: "e9409e4f18300c4aa2ef353079a536c5",
          7114: "900cb2226dd3bf62c8b2ad5d79799e0a",
          7353: "27160b878844b1df9b0eccfc311613ce",
          7436: "a3d4910046118fd3f42b103c229500ba",
          7452: "34f9369c694e60dc0edae0e2e7fd4591",
          7453: "9cff97da7b16bce7768b2d8a993b3142",
          7706: "71a81202b38986f4175ac4764db942da",
          7895: "c7e4a874bbb5a59d69e52d57e99c44d4",
          7970: "77ec9584da7f2d7e8c1e9e0b18ca9f08",
          8272: "6da8469835471645a58ed9f444e0d3f0",
          8376: "bfba94c85c2af66e1781322f4822f273",
          8391: "7291b08da3792c21a3ae65339771ffe9",
          8457: "673a4ebffeea5e94ab2d2048bf442f14",
          8583: "fbffc3e9ce04307c9cf68731cea82e80",
          8654: "2128cdabe45df3d86ef3823065736e12",
          8659: "24e9b70ab3c6b9edbad225fa859582cf",
          8728: "5d33cad15d37776128a9706cdffc0fab",
          8755: "042895356a2bad007342f759546b1c61",
          8880: "198f4b468b6a545575f441cab76dab5d",
          8970: "a44166c03a0ad33a1c42f9d2f749015c",
          9022: "ca2ee8a92e62b67971ed8f63ddfd015c",
          9028: "085c2ec49c00bb36ecaf223c3e99e6a7",
          9126: "ed9b0c244753def7615636ed97b3554d",
          9377: "53b781a1ebf860c4903b524a26a8287d",
          9615: "98579a99d6a363cf7b6541cc5009c6e7",
          9936: "80b2b83cdc12a639eb3891a352131e05",
          9990: "354f7cd376e3180070d6f4bd8191692d"
        } [e] + ".js", b.miniCssF = e => "css/" + {
          964: "38e1b65ed42810a0761da8831cc88ac9",
          1120: "d0cc3573b112630833aa0e224d9ef931",
          1563: "a126229ede95b503bfddbd53efcedae3",
          4444: "721e303b208c5f38763aab7a2a9ed1eb",
          8583: "38e1b65ed42810a0761da8831cc88ac9",
          8659: "e1ecfbd5d60b0822f094e505eee8adf4"
        } [e] + ".css", b.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), b.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), r = {}, d = "@rockstargames/modules-core-videoplayer:", b.l = (e, a, t, f) => {
          if (r[e]) r[e].push(a);
          else {
            var c, o;
            if (void 0 !== t)
              for (var n = document.getElementsByTagName("script"), l = 0; l < n.length; l++) {
                var s = n[l];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == d + t) {
                  c = s;
                  break
                }
              }
            c || (o = !0, (c = document.createElement("script")).charset = "utf-8", c.timeout = 120, b.nc && c.setAttribute("nonce", b.nc), c.setAttribute("data-webpack", d + t), c.src = e), r[e] = [a];
            var i = (a, t) => {
                c.onerror = c.onload = null, clearTimeout(u);
                var d = r[e];
                if (delete r[e], c.parentNode && c.parentNode.removeChild(c), d && d.forEach((e => e(t))), a) return a(t)
              },
              u = setTimeout(i.bind(null, void 0, {
                type: "timeout",
                target: c
              }), 12e4);
            c.onerror = i.bind(null, c.onerror), c.onload = i.bind(null, c.onload), o && document.head.appendChild(c)
          }
        }, b.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, b.nmd = e => (e.paths = [], e.children || (e.children = []), e), f = {}, c = {}, b.f.remotes = (e, a) => {
          b.o(f, e) && f[e].forEach((e => {
            var t = b.R;
            t || (t = []);
            var r = c[e];
            if (!(t.indexOf(r) >= 0)) {
              if (t.push(r), r.p) return a.push(r.p);
              var d = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + r[1] + '" from ' + r[2]), b.m[e] = () => {
                    throw a
                  }, r.p = 0
                },
                f = (e, t, f, c, o, n) => {
                  try {
                    var b = e(t, f);
                    if (!b || !b.then) return o(b, c, n);
                    var l = b.then((e => o(e, c)), d);
                    if (!n) return l;
                    a.push(r.p = l)
                  } catch (e) {
                    d(e)
                  }
                },
                o = (e, a, d) => f(a.get, r[1], t, 0, n, d),
                n = a => {
                  r.p = 1, b.m[e] = e => {
                    e.exports = a()
                  }
                };
              f(b, r[2], 0, 0, ((e, a, t) => e ? f(b.I, r[0], 0, e, o, t) : d()), 1)
            }
          }))
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
                c = "@rockstargames/modules-core-videoplayer",
                o = (e, a, t, r) => {
                  var d = f[e] = f[e] || {},
                    o = d[a];
                  (!o || !o.loaded && (!r != !o.eager ? r : c > o.from)) && (d[a] = {
                    get: t,
                    from: c,
                    eager: !!r
                  })
                },
                n = [];
              return "default" === t && (o("@gsap/react", "2.1.2", (() => Promise.all([b.e(2229), b.e(3581), b.e(19)]).then((() => () => b(40019))))), o("@popperjs/core", "2.11.8", (() => b.e(8376).then((() => () => b(78376))))), o("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([b.e(3218), b.e(2229), b.e(838)]).then((() => () => b(35671))))), o("@rsgweb/modules-core-agegate", "0.0.0", (() => Promise.all([b.e(6018), b.e(2229), b.e(5966), b.e(2918), b.e(964)]).then((() => () => b(50964))))), o("@rsgweb/rockstar-account", "0.0.0", (() => Promise.all([b.e(5265), b.e(6399), b.e(2229), b.e(9623), b.e(6188), b.e(5966), b.e(4309), b.e(7895)]).then((() => () => b(57895))))), o("@rsgweb/utils", "1.0.0", (() => Promise.all([b.e(5265), b.e(2229), b.e(9623), b.e(6188), b.e(4309), b.e(5854)]).then((() => () => b(79819))))), o("graphql", "16.11.0", (() => b.e(4546).then((() => () => b(24546))))), o("gsap", "0.0.0", (() => b.e(8728).then((() => () => b(58728))))), o("hammerjs", "2.0.8", (() => b.e(5790).then((() => () => b(35790))))), o("lodash", "4.17.21", (() => b.e(4981).then((() => () => b(4981))))), o("react-dom", "18.3.1", (() => Promise.all([b.e(3663), b.e(2229)]).then((() => () => b(53663))))), o("react-dom", "19.1.0", (() => Promise.all([b.e(2229), b.e(621)]).then((() => () => b(90621))))), o("react-popper", "2.3.0", (() => Promise.all([b.e(2229), b.e(4853), b.e(9005), b.e(4733)]).then((() => () => b(84733))))), o("react-router-dom", "6.30.0", (() => Promise.all([b.e(4105), b.e(2229), b.e(3271)]).then((() => () => b(94105))))), o("react", "18.3.1", (() => b.e(8654).then((() => () => b(98654))))), o("uuid", "9.0.1", (() => b.e(3736).then((() => () => b(33736)))))), e[t] = n.length ? Promise.all(n).then((() => e[t] = 1)) : 1
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
              var a = e => e.split(".").map((e => +e == e ? +e : e)),
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
                for (var d = 1, f = 1; f < e.length; f++) d--, r += "u" == (typeof(o = e[f]))[0] ? "-" : (d > 0 ? "." : "") + (d = 2, o);
                return r
              }
              var c = [];
              for (f = 1; f < e.length; f++) {
                var o = e[f];
                c.push(0 === o ? "not(" + n() + ")" : 1 === o ? "(" + n() + " || " + n() + ")" : 2 === o ? c.pop() + " " + c.pop() : a(o))
              }
              return n();

              function n() {
                return c.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            t = (a, r) => {
              if (0 in a) {
                r = e(r);
                var d = a[0],
                  f = d < 0;
                f && (d = -d - 1);
                for (var c = 0, o = 1, n = !0;; o++, c++) {
                  var b, l, s = o < a.length ? (typeof a[o])[0] : "";
                  if (c >= r.length || "o" == (l = (typeof(b = r[c]))[0])) return !n || ("u" == s ? o > d && !f : "" == s != f);
                  if ("u" == l) {
                    if (!n || "u" != s) return !1
                  } else if (n)
                    if (s == l)
                      if (o <= d) {
                        if (b != a[o]) return !1
                      } else {
                        if (f ? b > a[o] : b < a[o]) return !1;
                        b != a[o] && (n = !1)
                      }
                  else if ("s" != s && "n" != s) {
                    if (f || o <= d) return !1;
                    n = !1, o--
                  } else {
                    if (o <= d || l < s != f) return !1;
                    n = !1
                  } else "s" != s && "n" != s && (n = !1, o--)
                }
              }
              var i = [],
                u = i.pop.bind(i);
              for (c = 1; c < a.length; c++) {
                var p = a[c];
                i.push(1 == p ? u() | u() : 2 == p ? u() & u() : p ? t(p, r) : !u())
              }
              return !!u()
            },
            r = (a, r, d, f) => {
              var c = f ? (e => Object.keys(e).reduce(((a, t) => (e[t].eager && (a[t] = e[t]), a)), {}))(a[r]) : a[r];
              return (r = Object.keys(c).reduce(((a, r) => !t(d, r) || a && !((a, t) => {
                a = e(a), t = e(t);
                for (var r = 0;;) {
                  if (r >= a.length) return r < t.length && "u" != (typeof t[r])[0];
                  var d = a[r],
                    f = (typeof d)[0];
                  if (r >= t.length) return "u" == f;
                  var c = t[r],
                    o = (typeof c)[0];
                  if (f != o) return "o" == f && "n" == o || "s" == o || "u" == f;
                  if ("o" != f && "u" != f && d != c) return d < c;
                  r++
                }
              })(a, r) ? a : r), 0)) && c[r]
            },
            d = e => {
              throw new Error(e)
            },
            f = (e => function(a, t, r, d, f) {
              var c = b.I(a);
              return c && c.then && !r ? c.then(e.bind(e, a, b.S[a], t, !1, d, f)) : e(a, b.S[a], t, r, d, f)
            })(((e, t, f, c, o, n) => {
              if (!((e, a) => e && b.o(e, a))(t, f)) return ((e, a, t) => t ? t() : ((e, a) => d("Shared module " + a + " doesn't exist in shared scope " + e))(e, a))(e, f, n);
              var l, s = r(t, f, o, c);
              return s ? ((l = s).loaded = 1, l.get()) : n ? n() : void d(((e, t, r, d, f) => {
                var c = e[r];
                return "No satisfying version (" + a(d) + ")" + (f ? " for eager consumption" : "") + " of shared module " + r + " found in shared scope " + t + ".\nAvailable versions: " + Object.keys(c).map((e => e + " from " + c[e].from)).join(", ")
              })(t, e, f, o, c))
            })),
            c = {},
            o = {
              62229: () => f("default", "react", !1, [1, 18, 2, 0], (() => b.e(8654).then((() => () => b(98654))))),
              9623: () => f("default", "react-router-dom", !1, [1, 6, 11, 2], (() => Promise.all([b.e(4105), b.e(3271)]).then((() => () => b(94105))))),
              16188: () => f("default", "lodash", !1, [1, 4, 17, 21], (() => b.e(4981).then((() => () => b(4981))))),
              95966: () => f("default", "@rsgweb/utils", !1, [1, "workspace:^"], (() => Promise.all([b.e(5265), b.e(9623), b.e(6188), b.e(4309)]).then((() => () => b(79819))))),
              81569: () => f("default", "uuid", !1, [1, 9, 0, 0], (() => b.e(3736).then((() => () => b(33736))))),
              81788: () => f("default", "@rsgweb/locale-tools", !1, [1, "workspace:^"], (() => Promise.all([b.e(3218), b.e(8457)]).then((() => () => b(35671))))),
              13581: () => f("default", "gsap", !1, [1, "workspace:^"], (() => b.e(8728).then((() => () => b(58728))))),
              2918: () => f("default", "@rsgweb/rockstar-account", !1, [1, "workspace:^"], (() => Promise.all([b.e(5265), b.e(6399), b.e(9623), b.e(6188), b.e(4309), b.e(276)]).then((() => () => b(57895))))),
              4848: () => f("default", "hammerjs", !1, [1, 2, 0, 8], (() => b.e(5790).then((() => () => b(35790))))),
              27654: () => f("default", "@gsap/react", !1, [1, 2, 1, 0], (() => b.e(2400).then((() => () => b(40019))))),
              47224: () => f("default", "@rsgweb/modules-core-agegate", !1, [1, "workspace:^"], (() => Promise.all([b.e(6018), b.e(8583)]).then((() => () => b(50964))))),
              75971: () => f("default", "react-popper", !1, [1, 2, 3, 0], (() => Promise.all([b.e(4853), b.e(9005), b.e(7114)]).then((() => () => b(84733))))),
              44853: () => f("default", "react-dom", !1, [1, 18, 2, 0], (() => b.e(3663).then((() => () => b(53663))))),
              16565: () => f("default", "graphql", !1, [1, 16, 9, 0], (() => b.e(4546).then((() => () => b(24546))))),
              9005: () => f("default", "@popperjs/core", !1, [1, 2, 11, 7], (() => b.e(8376).then((() => () => b(78376))))),
              23271: () => f("default", "react-dom", !1, [1, 18, 2, 0], (() => b.e(3002).then((() => () => b(90621)))))
            },
            n = {
              1120: [4848, 27654, 47224, 75971],
              2229: [62229],
              2918: [2918],
              3271: [23271],
              3581: [13581],
              4309: [16565],
              4853: [44853],
              5966: [95966],
              6188: [16188],
              9005: [9005],
              9010: [81569, 81788],
              9623: [9623]
            },
            l = {};
          b.f.consumes = (e, a) => {
            b.o(n, e) && n[e].forEach((e => {
              if (b.o(c, e)) return a.push(c[e]);
              if (!l[e]) {
                var t = a => {
                  c[e] = 0, b.m[e] = t => {
                    delete b.c[e], t.exports = a()
                  }
                };
                l[e] = !0;
                var r = a => {
                  delete c[e], b.m[e] = t => {
                    throw delete b.c[e], a
                  }
                };
                try {
                  var d = o[e]();
                  d.then ? a.push(c[e] = d.then(t).catch(r)) : t(d)
                } catch (e) {
                  r(e)
                }
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              7614: 0
            };
            b.f.miniCss = (a, t) => {
              e[a] ? t.push(e[a]) : 0 !== e[a] && {
                964: 1,
                1120: 1,
                1563: 1,
                4444: 1,
                8583: 1,
                8659: 1
              } [a] && t.push(e[a] = (e => new Promise(((a, t) => {
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
                        o = t && t.target && t.target.href || a,
                        n = new Error("Loading CSS chunk " + e + " failed.\n(" + c + ": " + o + ")");
                      n.name = "ChunkLoadError", n.code = "CSS_CHUNK_LOAD_FAILED", n.type = c, n.request = o, f.parentNode && f.parentNode.removeChild(f), d(n)
                    }
                  }, f.href = a, document.head.appendChild(f)
                })(e, d, 0, a, t)
              })))(a).then((() => {
                e[a] = 0
              }), (t => {
                throw delete e[a], t
              })))
            }
          }
        })(), (() => {
          var e = {
            7614: 0
          };
          b.f.j = (a, t) => {
            var r = b.o(e, a) ? e[a] : void 0;
            if (0 !== r)
              if (r) t.push(r[2]);
              else if (/^(9(005|010|623)|2229|2918|3271|3581|4853|5966|6188)$/.test(a)) e[a] = 0;
            else {
              var d = new Promise(((t, d) => r = e[a] = [t, d]));
              t.push(r[2] = d);
              var f = b.p + b.u(a),
                c = new Error;
              b.l(f, (t => {
                if (b.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
                  var d = t && ("load" === t.type ? "missing" : t.type),
                    f = t && t.target && t.target.src;
                  c.message = "Loading chunk " + a + " failed.\n(" + d + ": " + f + ")", c.name = "ChunkLoadError", c.type = d, c.request = f, r[1](c)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, t) => {
              var r, d, f = t[0],
                c = t[1],
                o = t[2],
                n = 0;
              if (f.some((a => 0 !== e[a]))) {
                for (r in c) b.o(c, r) && (b.m[r] = c[r]);
                o && o(b)
              }
              for (a && a(t); n < f.length; n++) d = f[n], b.o(e, d) && e[d] && e[d][0](), e[d] = 0
            },
            t = self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || [];
          t.forEach(a.bind(null, 0)), t.push = a.bind(null, t.push.bind(t))
        })(), b(44857), b(58157)
      })())
    }
  }
}));