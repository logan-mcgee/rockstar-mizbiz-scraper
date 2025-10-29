try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "92d56af2-bb75-4b57-9d07-a441e6a225c0", e._sentryDebugIdIdentifier = "sentry-dbid-92d56af2-bb75-4b57-9d07-a441e6a225c0")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-videoplayer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register([], (function(e, a) {
  return {
    execute: function() {
      e((() => {
        var e, t, r, d, f, c, o, b, n, l, s, i, u, p, h, m, g, y, v, w, k = {
            3032: (e, a, t) => {
              t(8419)
            },
            7027: (e, a, t) => {
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
            7411: (e, a, t) => {
              const r = t(7027).y;
              a.w = function(e) {
                if (e || (e = 1), !t.y.meta || !t.y.meta.url) throw console.error("__system_context__", t.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                t.p = r(t.y.meta.url, e)
              }
            },
            8157: (e, a, t) => {
              "use strict";
              var r = {
                  "./bootstrap": () => t.e(8271).then((() => () => t(8271))),
                  "./index": () => Promise.all([t.e(1648), t.e(2229), t.e(9623), t.e(6188), t.e(5966), t.e(1788), t.e(1569), t.e(3581), t.e(2918), t.e(4994), t.e(1030)]).then((() => () => t(1030))),
                  "./tina": () => Promise.all([t.e(2229), t.e(4853), t.e(6188), t.e(5966), t.e(1788), t.e(1569), t.e(7684)]).then((() => () => t(7684))),
                  "./tinaBlockTemplates": () => Promise.all([t.e(2229), t.e(4853), t.e(6188), t.e(5966), t.e(1788), t.e(1569), t.e(7684)]).then((() => () => t(7684)))
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
            8419: (e, a, t) => {
              (0, t(7411).w)(1)
            }
          },
          _ = {};

        function P(e) {
          var a = _[e];
          if (void 0 !== a) return a.exports;
          var t = _[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return k[e].call(t.exports, t, t.exports, P), t.loaded = !0, t.exports
        }
        return P.m = k, P.c = _, P.y = a, P.amdO = {}, P.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return P.d(a, {
            a
          }), a
        }, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, P.t = function(a, r) {
          if (1 & r && (a = this(a)), 8 & r) return a;
          if ("object" == typeof a && a) {
            if (4 & r && a.__esModule) return a;
            if (16 & r && "function" == typeof a.then) return a
          }
          var d = Object.create(null);
          P.r(d);
          var f = {};
          e = e || [null, t({}), t([]), t(t)];
          for (var c = 2 & r && a;
            ("object" == typeof c || "function" == typeof c) && !~e.indexOf(c); c = t(c)) Object.getOwnPropertyNames(c).forEach((e => f[e] = () => a[e]));
          return f.default = () => a, P.d(d, f), d
        }, P.d = (e, a) => {
          for (var t in a) P.o(a, t) && !P.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: a[t]
          })
        }, P.f = {}, P.e = e => Promise.all(Object.keys(P.f).reduce(((a, t) => (P.f[t](e, a), a)), [])), P.u = e => "js/" + {
          131: "83ea0415ccfae51b3561eaad8a6d5e5a",
          278: "d477732fe578994b7f3a6f57f531500c",
          299: "5894d527822a1ab06b89f7f65c103114",
          314: "1cffd8675a7023cd49cf16b40192dbfc",
          439: "f73b55ef6f0c1f6552e94efedd051a06",
          601: "5994ce02334deee66a460c0018c57b99",
          662: "19dced27154772e3e9fa1ecc3ac9ce2f",
          824: "3e344b94e7bb53c86949c1f375565b00",
          907: "8f0d4b491e779696c731de7221e83a0d",
          1030: "ea4eaf5932b4c3844c0f298d353b8bf8",
          1054: "d4b2a294063c4fc965c28fc94aa19c6e",
          1098: "e1f48399dad3278f896563069d911f53",
          1242: "963be94751b297434b20f7cbd8c778fd",
          1254: "c8f96f3e43cf7e40f51a24060873d2b4",
          1648: "e7f236294e373ac4c80ba32988a784f2",
          1703: "c2e2de8fcff14fb6b3e856aefe0a2c57",
          1773: "b567ddc1f864d150a7181f861c459e00",
          1822: "7b8e9429bdc15d01f8822bcb293147d0",
          1868: "500873c3d47a016cd249e951d1e2871e",
          2148: "e2fc852f2694bb5089c23823747cf94e",
          2156: "959064843873511d2f8b2e56554b8712",
          2169: "4bb16967f5dba9a71281909483f7423b",
          2171: "8f9920f85c7e48b3a3aa7ae6607cf811",
          2217: "7b8aff5593502560c80f7d4706cad8a9",
          2221: "3b17300432fe28ea43a0f06de053fd1a",
          2243: "0be159305d76510ecfa9faa33736d1e0",
          2293: "d0f550039e8d94bb033e853d96ce0dc2",
          2306: "4d502258585c77d995f0066734bfed58",
          2347: "954252c6924f73e4a9ea901821ff5677",
          2365: "02b232a8dd30ee9f64c42ff236cf6b7c",
          2398: "43bf38bb8b4ef9073499cf24a751bb2f",
          2466: "6efcf0f3aec0f3ca29f24a3589df1da3",
          2635: "18595ab1e11e8055851b49bdc60ddb9a",
          2642: "6a4e646e77b24412eb15c47b76c26552",
          2657: "96dab5cd45fa7cf61e21ede38822381f",
          2678: "5e38cd592e2c38cb52271c9f7fdc08ac",
          2864: "da3a675430cb98e282a7075308e19946",
          3034: "e2c91a1268192a138283652a36fbef96",
          3197: "37e341c061774f2bb41cde232f2f7562",
          3343: "214b2523ad79ab06775bc7680ce8de78",
          3370: "f21738a8a1330667060978eef161443c",
          3475: "5706eac8d1f26c4e8fd3a44318e68ccb",
          3486: "c659dae67b295f8d0646941ff71d08fb",
          3697: "a0c2692550086588169f019d33ee7a4d",
          3885: "8e25b5036ed8c15c1fa6a49225e87f30",
          3941: "b5e1e3065b4d1e6d122c86bd46c65f2a",
          4011: "d51c5e0e976421d6edfa7a1d7cb2e453",
          4154: "029bc7e999582c606d27a98516402626",
          4271: "3cc768f99b0186cea00a6e38a20e4317",
          4528: "3792097e59705d2156c1bbf7a09aa92d",
          4550: "5667169be37b18ddc6ae7f856939f48b",
          4578: "580e5a6032b068b3b1f37eae1339ce31",
          4598: "ee86f40e7dd888e74bed19883946bd8d",
          4621: "c0797e4ad37bf25ff9e1aa2098357a6a",
          4700: "157361da53d52e59fc7b0e8b1aa056ed",
          4710: "d1c62a892aa09039273cdda8e58d766a",
          4731: "010161ed5be2c385adc5e939b75e6f0b",
          4799: "59d95ba9c5a57d36b0b31b36def95819",
          4851: "58e2554dbdf0af834011c6fa7be789f9",
          4861: "272932c6cc7a3961195442529ee9a683",
          4913: "09e8f246428f13ffcf01ff950fb581b3",
          4994: "7ca5ba683dfdac5f4f8c87b32e5275dc",
          5016: "ba6eb00aa3c43c69514e05b08cac8421",
          5018: "4b8decfd98db6f9ac6109b2c9fdb3e9a",
          5055: "0acfbc04a47a96939525ededf1e2af64",
          5076: "4e1f94d985b1782d7c474408ab173ccf",
          5233: "6e87f43c25fc6555f448f4cf57cc0126",
          5259: "e2f38b9a85ee72ede2336feb4dd00055",
          5389: "58a9340948961e62b8fbeb543649f519",
          5530: "6eb87e68667bfa602c639a6f48936f9d",
          5639: "01246d77c90048a99eec9eacccb8e5b4",
          5663: "fcdedab562ff94939c35ec056f4abdbd",
          5742: "a42b27953c0450a91e1ff8f0d648cbef",
          5830: "57db066227a9fb3f14aa7186af2165a3",
          5832: "c364941e5dcaed95d3ccb2a22048364f",
          5859: "8891b26e99944256bff40cc37e0b51ad",
          6267: "4421ab14144a3b84b7fe9e363e59f57f",
          6280: "1e10d235d34cfd4aabe90ebaeef49c94",
          6285: "e0a076fddf42696b9838656dab4efbf4",
          6361: "815435e393c8bb3eca1fa3e1651a12cc",
          6664: "bb584891b341c54f5a9b98224c1dd099",
          6879: "be9fac61972c8857ea93f9ba6355111a",
          6891: "973e10d2a904083bd9bfb524391b2771",
          6929: "89f09568002710dfeb87c9491ff90987",
          6997: "0d4ddad2172146b042a8aef949ac448f",
          7010: "0995e211008a333e805e0069a975faaf",
          7073: "3c4a4eef7ec1790d558c4b3bea8ef6ec",
          7436: "50d5103028c1a5bca9ac79132eaf39b6",
          7452: "9b1101c183c33452e63ac250ec72e9ae",
          7453: "b0dcee4abea8103a04a9a20081ee34a9",
          7684: "9d3daeef2eddbe589dca161040de19ad",
          7731: "054594ca51f2d30de324aa1b31e4607f",
          7970: "9b5383a8f3a3704a77ffda375b356a85",
          8240: "141ff0dc7f3ac7dd40fcb43cacc58938",
          8271: "1dbc51e823094ec569f4485277e1ab07",
          8272: "8a10d1f135a143bb0a2c58b10a4e45f2",
          8284: "23ba3b3c55a6e186202846962a82e49c",
          8391: "cd471c3e5726cf69c6fdbdeeaf29dc83",
          8431: "242486d4c5d1c681de06e903c4bd9739",
          8755: "352717701d27e557b9e8f23cddb768f6",
          8880: "cdbb0823d9117a0cd96c97e7ed2fa67c",
          8970: "37163051afb0d97af2c1ad705066e1ec",
          9022: "efbf5eb5fcfe473d13eba2cc420e1c47",
          9028: "f5c4c2bba826cb7a5318a4f6a6b5b5fd",
          9126: "0da5339eda689f18274f94207e319ee5",
          9377: "ba02d747498caa6ae1dc62d47793625a",
          9587: "b6ca742ae417c8540ac4e3cc6f164143",
          9615: "8e1a1b9b4b08ff050403db72dd84279f",
          9757: "9ad3d4cf241e0eb36ab30fff4b3e84ef",
          9813: "0a8b3ab89f449ed9f830e2173f96ec48",
          9936: "114bf47709e7bf0a375c27609e0064e2",
          9990: "ebbbad6c47bf5e4ff617c953cb0535b4"
        } [e] + ".js", P.miniCssF = e => "css/" + {
          1030: "3b0ee430328dccdbbcb668dae284f925",
          2217: "30c5db481d6b25a478ff5719bcbdf03e",
          4598: "30c5db481d6b25a478ff5719bcbdf03e",
          4994: "93a17588eeae0e4cdbefd7245c1cef4e",
          5055: "a126229ede95b503bfddbd53efcedae3",
          7684: "e1ecfbd5d60b0822f094e505eee8adf4"
        } [e] + ".css", P.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), P.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), r = {}, d = "@rockstargames/modules-core-videoplayer:", P.l = (e, a, t, f) => {
          if (r[e]) r[e].push(a);
          else {
            var c, o;
            if (void 0 !== t)
              for (var b = document.getElementsByTagName("script"), n = 0; n < b.length; n++) {
                var l = b[n];
                if (l.getAttribute("src") == e || l.getAttribute("data-webpack") == d + t) {
                  c = l;
                  break
                }
              }
            c || (o = !0, (c = document.createElement("script")).charset = "utf-8", c.timeout = 120, P.nc && c.setAttribute("nonce", P.nc), c.setAttribute("data-webpack", d + t), c.src = e), r[e] = [a];
            var s = (a, t) => {
                c.onerror = c.onload = null, clearTimeout(i);
                var d = r[e];
                if (delete r[e], c.parentNode && c.parentNode.removeChild(c), d && d.forEach((e => e(t))), a) return a(t)
              },
              i = setTimeout(s.bind(null, void 0, {
                type: "timeout",
                target: c
              }), 12e4);
            c.onerror = s.bind(null, c.onerror), c.onload = s.bind(null, c.onload), o && document.head.appendChild(c)
          }
        }, P.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, P.nmd = e => (e.paths = [], e.children || (e.children = []), e), (() => {
          P.S = {};
          var e = {},
            a = {};
          P.I = (t, r) => {
            r || (r = []);
            var d = a[t];
            if (d || (d = a[t] = {}), !(r.indexOf(d) >= 0)) {
              if (r.push(d), e[t]) return e[t];
              P.o(P.S, t) || (P.S[t] = {});
              var f = P.S[t],
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
                b = [];
              return "default" === t && (o("@gsap/react", "2.1.2", (() => Promise.all([P.e(2229), P.e(3581), P.e(4154)]).then((() => () => P(4154))))), o("@popperjs/core", "2.11.8", (() => P.e(9813).then((() => () => P(9813))))), o("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([P.e(9587), P.e(2229), P.e(8240)]).then((() => () => P(2841))))), o("@rsgweb/modules-core-agegate", "0.0.0", (() => Promise.all([P.e(1703), P.e(2229), P.e(5966), P.e(2918), P.e(2217)]).then((() => () => P(2217))))), o("@rsgweb/rockstar-account", "0.0.0", (() => Promise.all([P.e(2293), P.e(1254), P.e(2229), P.e(9623), P.e(6188), P.e(5966), P.e(2148), P.e(4550)]).then((() => () => P(2169))))), o("@rsgweb/utils", "1.0.0", (() => Promise.all([P.e(2293), P.e(8284), P.e(2229), P.e(9623), P.e(6188), P.e(1788), P.e(2148), P.e(6565), P.e(9757)]).then((() => () => P(9757))))), o("clsx", "2.1.1", (() => P.e(439).then((() => () => P(439))))), o("graphql", "16.11.0", (() => P.e(601).then((() => () => P(601))))), o("gsap", "0.0.0", (() => P.e(4271).then((() => () => P(4271))))), o("hammerjs", "2.0.8", (() => P.e(7731).then((() => () => P(7731))))), o("lodash", "4.17.21", (() => P.e(5076).then((() => () => P(5076))))), o("react-dom", "18.3.1", (() => Promise.all([P.e(1098), P.e(2229)]).then((() => () => P(1098))))), o("react-popper", "2.3.0", (() => Promise.all([P.e(2229), P.e(4853), P.e(9005), P.e(2635)]).then((() => () => P(2635))))), o("react-router-dom", "6.30.0", (() => Promise.all([P.e(5389), P.e(2229), P.e(4853)]).then((() => () => P(5389))))), o("react", "18.3.1", (() => P.e(8431).then((() => () => P(8431))))), o("uuid", "9.0.1", (() => P.e(2657).then((() => () => P(2657)))))), e[t] = b.length ? Promise.all(b).then((() => e[t] = 1)) : 1
            }
          }
        })(), (() => {
          var e;
          P.g.importScripts && (e = P.g.location + "");
          var a = P.g.document;
          if (!e && a && (a.currentScript && "SCRIPT" === a.currentScript.tagName.toUpperCase() && (e = a.currentScript.src), !e)) {
            var t = a.getElementsByTagName("script");
            if (t.length)
              for (var r = t.length - 1; r > -1 && (!e || !/^http(s?):/.test(e));) e = t[r--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), P.p = e
        })(), f = e => {
          var a = e => e.split(".").map((e => +e == e ? +e : e)),
            t = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
            r = t[1] ? a(t[1]) : [];
          return t[2] && (r.length++, r.push.apply(r, a(t[2]))), t[3] && (r.push([]), r.push.apply(r, a(t[3]))), r
        }, c = (e, a) => {
          e = f(e), a = f(a);
          for (var t = 0;;) {
            if (t >= e.length) return t < a.length && "u" != (typeof a[t])[0];
            var r = e[t],
              d = (typeof r)[0];
            if (t >= a.length) return "u" == d;
            var c = a[t],
              o = (typeof c)[0];
            if (d != o) return "o" == d && "n" == o || "s" == o || "u" == d;
            if ("o" != d && "u" != d && r != c) return r < c;
            t++
          }
        }, o = e => {
          var a = e[0],
            t = "";
          if (1 === e.length) return "*";
          if (a + .5) {
            t += 0 == a ? ">=" : -1 == a ? "<" : 1 == a ? "^" : 2 == a ? "~" : a > 0 ? "=" : "!=";
            for (var r = 1, d = 1; d < e.length; d++) r--, t += "u" == (typeof(c = e[d]))[0] ? "-" : (r > 0 ? "." : "") + (r = 2, c);
            return t
          }
          var f = [];
          for (d = 1; d < e.length; d++) {
            var c = e[d];
            f.push(0 === c ? "not(" + b() + ")" : 1 === c ? "(" + b() + " || " + b() + ")" : 2 === c ? f.pop() + " " + f.pop() : o(c))
          }
          return b();

          function b() {
            return f.pop().replace(/^\((.+)\)$/, "$1")
          }
        }, b = (e, a) => {
          if (0 in e) {
            a = f(a);
            var t = e[0],
              r = t < 0;
            r && (t = -t - 1);
            for (var d = 0, c = 1, o = !0;; c++, d++) {
              var n, l, s = c < e.length ? (typeof e[c])[0] : "";
              if (d >= a.length || "o" == (l = (typeof(n = a[d]))[0])) return !o || ("u" == s ? c > t && !r : "" == s != r);
              if ("u" == l) {
                if (!o || "u" != s) return !1
              } else if (o)
                if (s == l)
                  if (c <= t) {
                    if (n != e[c]) return !1
                  } else {
                    if (r ? n > e[c] : n < e[c]) return !1;
                    n != e[c] && (o = !1)
                  }
              else if ("s" != s && "n" != s) {
                if (r || c <= t) return !1;
                o = !1, c--
              } else {
                if (c <= t || l < s != r) return !1;
                o = !1
              } else "s" != s && "n" != s && (o = !1, c--)
            }
          }
          var i = [],
            u = i.pop.bind(i);
          for (d = 1; d < e.length; d++) {
            var p = e[d];
            i.push(1 == p ? u() | u() : 2 == p ? u() & u() : p ? b(p, a) : !u())
          }
          return !!u()
        }, n = (e, a) => e && P.o(e, a), l = e => (e.loaded = 1, e.get()), s = e => Object.keys(e).reduce(((a, t) => (e[t].eager && (a[t] = e[t]), a)), {}), i = (e, a, t, r) => {
          var d = r ? s(e[a]) : e[a];
          return (a = Object.keys(d).reduce(((e, a) => !b(t, a) || e && !c(e, a) ? e : a), 0)) && d[a]
        }, u = (e, a, t, r, d) => {
          var f = e[t];
          return "No satisfying version (" + o(r) + ")" + (d ? " for eager consumption" : "") + " of shared module " + t + " found in shared scope " + a + ".\nAvailable versions: " + Object.keys(f).map((e => e + " from " + f[e].from)).join(", ")
        }, p = e => {
          throw new Error(e)
        }, h = (e, a, t) => t ? t() : ((e, a) => p("Shared module " + a + " doesn't exist in shared scope " + e))(e, a), m = (e => function(a, t, r, d, f) {
          var c = P.I(a);
          return c && c.then && !r ? c.then(e.bind(e, a, P.S[a], t, !1, d, f)) : e(a, P.S[a], t, r, d, f)
        })(((e, a, t, r, d, f) => {
          if (!n(a, t)) return h(e, t, f);
          var c = i(a, t, d, r);
          return c ? l(c) : f ? f() : void p(u(a, e, t, d, r))
        })), g = {}, y = {
          2229: () => m("default", "react", !1, [1, 18, 2, 0], (() => P.e(8431).then((() => () => P(8431))))),
          9623: () => m("default", "react-router-dom", !1, [1, 6, 11, 2], (() => Promise.all([P.e(5389), P.e(4853)]).then((() => () => P(5389))))),
          6188: () => m("default", "lodash", !1, [1, 4, 17, 21], (() => P.e(5076).then((() => () => P(5076))))),
          5966: () => m("default", "@rsgweb/utils", !1, [1, "workspace:^"], (() => Promise.all([P.e(2293), P.e(8284), P.e(9623), P.e(6188), P.e(1788), P.e(2148), P.e(6929)]).then((() => () => P(9757))))),
          1788: () => m("default", "@rsgweb/locale-tools", !1, [1, "workspace:^"], (() => Promise.all([P.e(9587), P.e(5859)]).then((() => () => P(2841))))),
          1569: () => m("default", "uuid", !1, [1, 9, 0, 0], (() => P.e(2657).then((() => () => P(2657))))),
          3581: () => m("default", "gsap", !1, [1, "workspace:^"], (() => P.e(4271).then((() => () => P(4271))))),
          2918: () => m("default", "@rsgweb/rockstar-account", !1, [1, "workspace:^"], (() => Promise.all([P.e(2293), P.e(1254), P.e(9623), P.e(6188), P.e(2148), P.e(2169)]).then((() => () => P(2169))))),
          4572: () => m("default", "clsx", !1, [1, 2, 1, 1], (() => P.e(439).then((() => () => P(439))))),
          4848: () => m("default", "hammerjs", !1, [1, 2, 0, 8], (() => P.e(7731).then((() => () => P(7731))))),
          5971: () => m("default", "react-popper", !1, [1, 2, 3, 0], (() => Promise.all([P.e(4853), P.e(9005), P.e(5016)]).then((() => () => P(2635))))),
          7224: () => m("default", "@rsgweb/modules-core-agegate", !1, [1, "workspace:^"], (() => Promise.all([P.e(1703), P.e(4598)]).then((() => () => P(2217))))),
          7654: () => m("default", "@gsap/react", !1, [1, 2, 1, 0], (() => P.e(1773).then((() => () => P(4154))))),
          4853: () => m("default", "react-dom", !1, [1, 18, 2, 0], (() => P.e(1098).then((() => () => P(1098))))),
          6565: () => m("default", "graphql", !1, [1, 16, 9, 0], (() => P.e(601).then((() => () => P(601))))),
          9005: () => m("default", "@popperjs/core", !1, [1, 2, 11, 7], (() => P.e(9813).then((() => () => P(9813)))))
        }, v = {
          1569: [1569],
          1788: [1788],
          2229: [2229],
          2918: [2918],
          3581: [3581],
          4853: [4853],
          4994: [4572, 4848, 5971, 7224, 7654],
          5966: [5966],
          6188: [6188],
          6565: [6565],
          6929: [6565],
          9005: [9005],
          9623: [9623]
        }, w = {}, P.f.consumes = (e, a) => {
          P.o(v, e) && v[e].forEach((e => {
            if (P.o(g, e)) return a.push(g[e]);
            if (!w[e]) {
              var t = a => {
                g[e] = 0, P.m[e] = t => {
                  delete P.c[e], t.exports = a()
                }
              };
              w[e] = !0;
              var r = a => {
                delete g[e], P.m[e] = t => {
                  throw delete P.c[e], a
                }
              };
              try {
                var d = y[e]();
                d.then ? a.push(g[e] = d.then(t).catch(r)) : t(d)
              } catch (e) {
                r(e)
              }
            }
          }))
        }, (() => {
          if ("undefined" != typeof document) {
            var e = {
              7614: 0
            };
            P.f.miniCss = (a, t) => {
              e[a] ? t.push(e[a]) : 0 !== e[a] && {
                1030: 1,
                2217: 1,
                4598: 1,
                4994: 1,
                5055: 1,
                7684: 1
              } [a] && t.push(e[a] = (e => new Promise(((a, t) => {
                var r = P.miniCssF(e),
                  d = P.p + r;
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
                  f.rel = "stylesheet", f.type = "text/css", P.nc && (f.nonce = P.nc), f.onerror = f.onload = t => {
                    if (f.onerror = f.onload = null, "load" === t.type) r();
                    else {
                      var c = t && t.type,
                        o = t && t.target && t.target.href || a,
                        b = new Error("Loading CSS chunk " + e + " failed.\n(" + c + ": " + o + ")");
                      b.name = "ChunkLoadError", b.code = "CSS_CHUNK_LOAD_FAILED", b.type = c, b.request = o, f.parentNode && f.parentNode.removeChild(f), d(b)
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
          P.f.j = (a, t) => {
            var r = P.o(e, a) ? e[a] : void 0;
            if (0 !== r)
              if (r) t.push(r[2]);
              else if (/^((178|291|618)8|1569|2229|3581|4853|5966|6565|9005|9623)$/.test(a)) e[a] = 0;
            else {
              var d = new Promise(((t, d) => r = e[a] = [t, d]));
              t.push(r[2] = d);
              var f = P.p + P.u(a),
                c = new Error;
              P.l(f, (t => {
                if (P.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
                  var d = t && ("load" === t.type ? "missing" : t.type),
                    f = t && t.target && t.target.src;
                  c.message = "Loading chunk " + a + " failed.\n(" + d + ": " + f + ")", c.name = "ChunkLoadError", c.type = d, c.request = f, r[1](c)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, t) => {
              var r, d, [f, c, o] = t,
                b = 0;
              if (f.some((a => 0 !== e[a]))) {
                for (r in c) P.o(c, r) && (P.m[r] = c[r]);
                o && o(P)
              }
              for (a && a(t); b < f.length; b++) d = f[b], P.o(e, d) && e[d] && e[d][0](), e[d] = 0
            },
            t = self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || [];
          t.forEach(a.bind(null, 0)), t.push = a.bind(null, t.push.bind(t))
        })(), P(3032), P(8157)
      })())
    }
  }
}));