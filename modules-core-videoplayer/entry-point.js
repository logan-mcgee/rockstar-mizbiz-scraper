try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "40804f25-82ac-4836-9fc1-17eff3e0c029", e._sentryDebugIdIdentifier = "sentry-dbid-40804f25-82ac-4836-9fc1-17eff3e0c029")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-videoplayer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register([], function(e, a) {
  return {
    execute: function() {
      e((() => {
        var e, t, d, r, f, c, o, n, b, l, i, s, u, p, h, m, g, y, v, w, _, k = {
            17411: (e, a, t) => {
              const d = t(77027).y;
              a.w = function(e) {
                if (e || (e = 1), !t.y.meta || !t.y.meta.url) throw console.error("__system_context__", t.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                t.p = d(t.y.meta.url, e)
              }
            },
            28419: (e, a, t) => {
              (0, t(17411).w)(1)
            },
            58157: (e, a, t) => {
              "use strict";
              var d = {
                  "./bootstrap": () => t.e(8271).then(() => () => t(8271)),
                  "./index": () => Promise.all([t.e(3004), t.e(5473), t.e(1127), t.e(6990), t.e(181), t.e(336), t.e(8136), t.e(9023), t.e(994), t.e(1874), t.e(8517), t.e(1030)]).then(() => () => t(21030)),
                  "./tina": () => Promise.all([t.e(1127), t.e(6990), t.e(8429), t.e(336), t.e(8136), t.e(9023), t.e(4365)]).then(() => () => t(44365)),
                  "./tinaBlockTemplates": () => Promise.all([t.e(1127), t.e(6990), t.e(8429), t.e(336), t.e(8136), t.e(9023), t.e(4365)]).then(() => () => t(44365))
                },
                r = (e, a) => (t.R = a, a = t.o(d, e) ? d[e]() : Promise.resolve().then(() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                }), t.R = void 0, a),
                f = (e, a) => {
                  if (t.S) {
                    var d = "default",
                      r = t.S[d];
                    if (r && r !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return t.S[d] = e, t.I(d, a)
                  }
                };
              t.d(a, {
                get: () => r,
                init: () => f
              })
            },
            77027: (e, a, t) => {
              a.y = function(e, a) {
                var t = document.createElement("a");
                t.href = e;
                for (var d = "/" === t.pathname[0] ? t.pathname : "/" + t.pathname, r = 0, f = d.length; r !== a && f >= 0;) "/" === d[--f] && r++;
                if (r !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + r + ") in the URL path " + e);
                var c = d.slice(0, f + 1);
                return t.protocol + "//" + t.host + c
              };
              Number.isInteger
            },
            93032: (e, a, t) => {
              t(28419)
            }
          },
          P = {};

        function E(e) {
          var a = P[e];
          if (void 0 !== a) return a.exports;
          var t = P[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return k[e].call(t.exports, t, t.exports, E), t.loaded = !0, t.exports
        }
        return E.m = k, E.c = P, E.y = a, E.amdO = {}, E.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return E.d(a, {
            a
          }), a
        }, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, E.t = function(a, d) {
          if (1 & d && (a = this(a)), 8 & d) return a;
          if ("object" == typeof a && a) {
            if (4 & d && a.__esModule) return a;
            if (16 & d && "function" == typeof a.then) return a
          }
          var r = Object.create(null);
          E.r(r);
          var f = {};
          e = e || [null, t({}), t([]), t(t)];
          for (var c = 2 & d && a;
            ("object" == typeof c || "function" == typeof c) && !~e.indexOf(c); c = t(c)) Object.getOwnPropertyNames(c).forEach(e => f[e] = () => a[e]);
          return f.default = () => a, E.d(r, f), r
        }, E.d = (e, a) => {
          for (var t in a) E.o(a, t) && !E.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: a[t]
          })
        }, E.f = {}, E.e = e => Promise.all(Object.keys(E.f).reduce((a, t) => (E.f[t](e, a), a), [])), E.u = e => "js/" + {
          131: "e859bdef25d747ab733e4d5ca4c2844b",
          278: "9bc06a98b73093692a1b95e0fe4b3be3",
          299: "e9774570a31558e209f837d1a55eaceb",
          314: "6e87e5a51494796a3895c83a9841344e",
          439: "54b38f590523f31dd134d8f6e78f69e3",
          601: "5ec4faf5fedb4d469825ad7b0721e798",
          662: "44743baedccd975e0f9827dddfc9b8ad",
          824: "872af1d017028f889577978d91f15639",
          907: "1e09a2347122e567064fa2c16eeebd7d",
          1030: "6dec150001139f02b8dac69a9eeca661",
          1054: "622497a7a386ec6095b52a332c18d56b",
          1098: "108cca33a6bdbe15a04432bbf911cb68",
          1242: "161d48e9020a75026719a38c03a12663",
          1254: "600f584a1c05f7f4177d2b64c32ad79a",
          1703: "d1cfa11330ed2f4630894ce36c92cce3",
          1773: "be2f13e13bd6faba7c5e9053b5ec15df",
          1822: "5c80fd1d1fcc2c052593bbdc1d3b8b03",
          1868: "39b0648715c35d98e0a5db20753623af",
          2156: "4f20c8cfb6403f0969751455ab376823",
          2169: "24ac0f9745d456cd35ff4a1926cf0a47",
          2171: "1d6a61877287db88f5948461a5336e16",
          2217: "ce82ef513e3f6b47833fc863c4b239d5",
          2221: "6ab328f68c457dc4a01c88a43d03f5fa",
          2243: "661290225447099eb4e81676b84b2ce3",
          2306: "91e97072ba03ebc8361d7e856a1d0a92",
          2347: "8a79e9f2bcae175f3c5dcbbb3f47cf0c",
          2365: "ab32265558c63fcca069de3025e2bde8",
          2398: "a99dde2ec683f8f211977b2fc0c68536",
          2466: "1b4a3127b3958a63613b93a0eb48981e",
          2635: "dc354d2019608afc1bff364ea4304ffc",
          2642: "3448acdc8a08bc14a33579047dd569dd",
          2657: "f91963c8700502483e3a3ad590c84790",
          2678: "680c344cb64f854b35e041188196988b",
          2864: "0518f927d6cdcc3e09756242b667f9f4",
          3004: "b839660ece30f2c57eb8ee817db87cec",
          3034: "1807b0eb7b3be5286314ba5ef069e9b8",
          3197: "b0e30142065d7994c3d079265746f2aa",
          3343: "b9bfd4e2f298c7650cf798170ca77931",
          3370: "67d84b1c4cebf7e59912faff2705222b",
          3475: "4266b6742127bbb61f01c3d4aebbe869",
          3486: "97305670c771439e084a6f5a66879901",
          3697: "e9f132da3ae00ba0e6ab655f8e4d9416",
          3885: "802d0205346a17300ed42344f2c1e40b",
          3941: "6f9fbf202f25b0bfb3736f4ae510fac2",
          4011: "c7ec3d118acfc6bf6438d223750296f1",
          4154: "2d34ec9f0fd70b9bb339d138c9963e4e",
          4365: "6b0a4d8b9cafb75bdbeeaf003d506c23",
          4528: "4022791b97ec852ef70c6ad4a0fc6034",
          4550: "61ed672a338f39bbbc6c10da5b8f123f",
          4554: "e5362caae55a97317c682df84250c7e2",
          4578: "77844cc6dec73bdcd0bd250373fbebe8",
          4598: "43d97dd49c62642ff08837019e401357",
          4621: "215dd9302a669b81d92e3172ab65ea1b",
          4700: "6f85d494126efafbc47af5bcd6afb410",
          4710: "090973ef2cc15bf92e684fd300785cbd",
          4731: "18eb97b274e1ee75fed27e7670dd230c",
          4799: "626097370d1fc44c5b2b206f398ab1c3",
          4851: "66d6bcaa820c1972113f26945c96a383",
          4861: "9f0e9acf5ff61670db556c4931d7cdf6",
          4913: "a268092c8121a62425a3f09c97b987fa",
          4931: "8f34502106ffccb641a27a788dc6eec2",
          5016: "35574db1ec078af8cc05279cafbe3af5",
          5018: "8422e8a0b26faa3b2ba509e7dff40fe0",
          5055: "df64b9d34b1d13443cac9ab9d8fde9f2",
          5076: "494f53613ffa11d5b81eb4c8dbee45d3",
          5085: "b54b84d2ea1c55124835298fb3db5288",
          5233: "bc8ded10da594ebb8994f79aee5dfcba",
          5259: "2e7f4f1158ee597a6d9a92c14c1a41e8",
          5389: "cceb661d75c8718c13a90c0a06930019",
          5473: "a1de6b08357a93c0c73777d98f34e56e",
          5530: "c668da779cbb1b7a95182259480d09e0",
          5639: "2ada6c4ff63281c3e69b1672bfa7505b",
          5663: "5a192a7af02320f4122429f8f72a3cab",
          5742: "96ca79c6891eb183ced1964824a3cb18",
          5830: "fcccd388b82cef9b17f7b0bb15101a40",
          5832: "3c7679695430d4fc02b749cfa25a787a",
          5859: "78e9e382405fb9981a0082827bf26105",
          6267: "e4c018255d185eb9bdb37e276c693c77",
          6280: "d61d80be86e14f369dec4b227d358656",
          6285: "9a6764eec1f4dd27f739d5322f0c589a",
          6361: "75d379cc88bfa92043f47d316c3e5dac",
          6664: "b18d754e71dec817b286c36b5d9f7e38",
          6879: "cafd9978845587221cbff9d827b15398",
          6891: "046445d84fd720c320e1e62bd055cd80",
          6997: "a4b50c374ccf7217f9b91b463ab76f43",
          7010: "2d267e4a9569c701db30cca5ffbd677d",
          7073: "45cd99b6c2eee1eddc6fa66b6240d21f",
          7129: "55a192fa1249b9b64f4f1d2c77f0aefc",
          7436: "93df067a6b0baa87f9374c5b5f22e1b5",
          7452: "0a20ca0f37558b7f22a847343790c87a",
          7453: "bccff744fc1ae0cab2920ee7e50f47d9",
          7731: "957f0d0e576aba7d59e3b70e36855e77",
          7970: "ad2fd3927a77bfc2bf1a1a88d1b6d3de",
          8240: "9ba95f0443a8beac8a0649d17cf3f6aa",
          8271: "ce4d5b7c7a5f55019aaec6bbc30a9004",
          8272: "84e9d9e2c7f947b6f90eb1b1ddf0a21e",
          8391: "dce6cb1ee006f1c865a9df1a8a9a38ee",
          8431: "d03f85731bbea8a293baf319a5edc2b6",
          8517: "6780236c5b002077d61375c07d14e33a",
          8755: "4cce99c91c090fac51224f10fa69decd",
          8880: "b0bdbf3ce31e60152a570c27fef2739c",
          8970: "479195a61177208d013df7bfc19ec35f",
          9022: "77b32ab24bbffabcb530093030961dca",
          9028: "fc61eb9c7c20555606975ea460bad357",
          9126: "b63be6c35c7373817403c52c9bca8b82",
          9308: "01e83c30da1352adda092b0d8dfb3340",
          9377: "516dfe52d14adff7afbe670992db1a48",
          9587: "606615ab7c33967d083f494d560a00bb",
          9615: "7d27a2f9f03fb1cd05fe282f22a92bb9",
          9719: "d1abcabd1184b27bef6661a0aac1505f",
          9813: "618747d830f0b8caaa54f241cf76f303",
          9936: "533dfa6f2c8b81739bfc6e9e5c822858",
          9990: "896861871ed24d1ab6ee3c3a9b6c1dba"
        } [e] + ".js", E.miniCssF = e => "css/" + {
          1030: "a36e0cbe058ff11dfb786ef49eb77a52",
          2217: "f0250584e5d937b9e0ffb3bda09ef392",
          4365: "0f3056ce40472624d7ee487fbb173c0a",
          4598: "f0250584e5d937b9e0ffb3bda09ef392",
          5055: "98d2f7207c07838416399fe63c3fcbc4",
          8517: "5449c0d1c9fc1b7ee33e81657b7beec1"
        } [e] + ".css", E.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), E.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), d = {}, r = "@rockstargames/modules-core-videoplayer:", E.l = (e, a, t, f) => {
          if (d[e]) d[e].push(a);
          else {
            var c, o;
            if (void 0 !== t)
              for (var n = document.getElementsByTagName("script"), b = 0; b < n.length; b++) {
                var l = n[b];
                if (l.getAttribute("src") == e || l.getAttribute("data-webpack") == r + t) {
                  c = l;
                  break
                }
              }
            c || (o = !0, (c = document.createElement("script")).charset = "utf-8", c.timeout = 120, E.nc && c.setAttribute("nonce", E.nc), c.setAttribute("data-webpack", r + t), c.src = e), d[e] = [a];
            var i = (a, t) => {
                c.onerror = c.onload = null, clearTimeout(s);
                var r = d[e];
                if (delete d[e], c.parentNode && c.parentNode.removeChild(c), r && r.forEach(e => e(t)), a) return a(t)
              },
              s = setTimeout(i.bind(null, void 0, {
                type: "timeout",
                target: c
              }), 12e4);
            c.onerror = i.bind(null, c.onerror), c.onload = i.bind(null, c.onload), o && document.head.appendChild(c)
          }
        }, E.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, E.nmd = e => (e.paths = [], e.children || (e.children = []), e), (() => {
          E.S = {};
          var e = {},
            a = {};
          E.I = (t, d) => {
            d || (d = []);
            var r = a[t];
            if (r || (r = a[t] = {}), !(d.indexOf(r) >= 0)) {
              if (d.push(r), e[t]) return e[t];
              E.o(E.S, t) || (E.S[t] = {});
              var f = E.S[t],
                c = "@rockstargames/modules-core-videoplayer",
                o = (e, a, t, d) => {
                  var r = f[e] = f[e] || {},
                    o = r[a];
                  (!o || !o.loaded && (!d != !o.eager ? d : c > o.from)) && (r[a] = {
                    get: t,
                    from: c,
                    eager: !!d
                  })
                },
                n = [];
              return "default" === t && (o("@gsap/react", "2.1.2", () => Promise.all([E.e(1127), E.e(994), E.e(4154)]).then(() => () => E(44154))), o("@popperjs/core", "2.11.8", () => E.e(9813).then(() => () => E(19813))), o("@rsgweb/locale-tools", "0.0.0", () => Promise.all([E.e(3004), E.e(9587), E.e(1127), E.e(8240)]).then(() => () => E(12841))), o("@rsgweb/modules-core-agegate", "0.0.0", () => Promise.all([E.e(1703), E.e(1127), E.e(8136), E.e(1874), E.e(2217)]).then(() => () => E(42217))), o("@rsgweb/rockstar-account", "0.0.0", () => Promise.all([E.e(7129), E.e(1254), E.e(1127), E.e(6990), E.e(181), E.e(336), E.e(8136), E.e(5085), E.e(4550)]).then(() => () => E(32169))), o("@rsgweb/utils", "0.0.0", () => Promise.all([E.e(3004), E.e(7129), E.e(4931), E.e(1127), E.e(6990), E.e(181), E.e(336), E.e(5085), E.e(811), E.e(9308)]).then(() => () => E(79308))), o("clsx", "2.1.1", () => E.e(439).then(() => () => E(10439))), o("graphql", "16.11.0", () => E.e(601).then(() => () => E(30601))), o("gsap", "3.12.5", () => E.e(9719).then(() => () => E(79719))), o("hammerjs", "2.0.8", () => E.e(7731).then(() => () => E(87731))), o("lodash", "4.17.21", () => E.e(5076).then(() => () => E(15076))), o("react-dom", "18.3.1", () => Promise.all([E.e(1098), E.e(1127)]).then(() => () => E(71098))), o("react-popper", "2.3.0", () => Promise.all([E.e(1127), E.e(8429), E.e(4041), E.e(2635)]).then(() => () => E(62635))), o("react-router-dom", "6.30.1", () => Promise.all([E.e(5389), E.e(1127), E.e(8429)]).then(() => () => E(15389))), o("react", "18.3.1", () => E.e(8431).then(() => () => E(48431))), o("uuid", "9.0.1", () => E.e(2657).then(() => () => E(62657)))), e[t] = n.length ? Promise.all(n).then(() => e[t] = 1) : 1
            }
          }
        })(), (() => {
          var e;
          E.g.importScripts && (e = E.g.location + "");
          var a = E.g.document;
          if (!e && a && (a.currentScript && "SCRIPT" === a.currentScript.tagName.toUpperCase() && (e = a.currentScript.src), !e)) {
            var t = a.getElementsByTagName("script");
            if (t.length)
              for (var d = t.length - 1; d > -1 && (!e || !/^http(s?):/.test(e));) e = t[d--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), E.p = e
        })(), f = e => {
          var a = e => e.split(".").map(e => +e == e ? +e : e),
            t = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
            d = t[1] ? a(t[1]) : [];
          return t[2] && (d.length++, d.push.apply(d, a(t[2]))), t[3] && (d.push([]), d.push.apply(d, a(t[3]))), d
        }, c = (e, a) => {
          e = f(e), a = f(a);
          for (var t = 0;;) {
            if (t >= e.length) return t < a.length && "u" != (typeof a[t])[0];
            var d = e[t],
              r = (typeof d)[0];
            if (t >= a.length) return "u" == r;
            var c = a[t],
              o = (typeof c)[0];
            if (r != o) return "o" == r && "n" == o || "s" == o || "u" == r;
            if ("o" != r && "u" != r && d != c) return d < c;
            t++
          }
        }, o = e => {
          var a = e[0],
            t = "";
          if (1 === e.length) return "*";
          if (a + .5) {
            t += 0 == a ? ">=" : -1 == a ? "<" : 1 == a ? "^" : 2 == a ? "~" : a > 0 ? "=" : "!=";
            for (var d = 1, r = 1; r < e.length; r++) d--, t += "u" == (typeof(c = e[r]))[0] ? "-" : (d > 0 ? "." : "") + (d = 2, c);
            return t
          }
          var f = [];
          for (r = 1; r < e.length; r++) {
            var c = e[r];
            f.push(0 === c ? "not(" + n() + ")" : 1 === c ? "(" + n() + " || " + n() + ")" : 2 === c ? f.pop() + " " + f.pop() : o(c))
          }
          return n();

          function n() {
            return f.pop().replace(/^\((.+)\)$/, "$1")
          }
        }, n = (e, a) => {
          if (0 in e) {
            a = f(a);
            var t = e[0],
              d = t < 0;
            d && (t = -t - 1);
            for (var r = 0, c = 1, o = !0;; c++, r++) {
              var b, l, i = c < e.length ? (typeof e[c])[0] : "";
              if (r >= a.length || "o" == (l = (typeof(b = a[r]))[0])) return !o || ("u" == i ? c > t && !d : "" == i != d);
              if ("u" == l) {
                if (!o || "u" != i) return !1
              } else if (o)
                if (i == l)
                  if (c <= t) {
                    if (b != e[c]) return !1
                  } else {
                    if (d ? b > e[c] : b < e[c]) return !1;
                    b != e[c] && (o = !1)
                  }
              else if ("s" != i && "n" != i) {
                if (d || c <= t) return !1;
                o = !1, c--
              } else {
                if (c <= t || l < i != d) return !1;
                o = !1
              } else "s" != i && "n" != i && (o = !1, c--)
            }
          }
          var s = [],
            u = s.pop.bind(s);
          for (r = 1; r < e.length; r++) {
            var p = e[r];
            s.push(1 == p ? u() | u() : 2 == p ? u() & u() : p ? n(p, a) : !u())
          }
          return !!u()
        }, b = (e, a) => e && E.o(e, a), l = e => (e.loaded = 1, e.get()), i = e => Object.keys(e).reduce((a, t) => (e[t].eager && (a[t] = e[t]), a), {}), s = (e, a, t) => {
          var d = t ? i(e[a]) : e[a];
          return Object.keys(d).reduce((e, a) => !e || !d[e].loaded && c(e, a) ? a : e, 0)
        }, u = (e, a, t, d) => "Unsatisfied version " + t + " from " + (t && e[a][t].from) + " of shared singleton module " + a + " (required " + o(d) + ")", p = e => {
          throw new Error(e)
        }, h = e => {
          "undefined" != typeof console && console.warn && console.warn(e)
        }, m = (e, a, t) => t ? t() : ((e, a) => p("Shared module " + a + " doesn't exist in shared scope " + e))(e, a), g = (e => function(a, t, d, r, f) {
          var c = E.I(a);
          return c && c.then && !d ? c.then(e.bind(e, a, E.S[a], t, !1, r, f)) : e(a, E.S[a], t, d, r, f)
        })((e, a, t, d, r, f) => {
          if (!b(a, t)) return m(e, t, f);
          var c = s(a, t, d);
          return n(r, c) || h(u(a, t, c, r)), l(a[t][c])
        }), y = {}, v = {
          71127: () => g("default", "react", !1, [1, 18, 2, 0], () => E.e(8431).then(() => () => E(48431))),
          56990: () => g("default", "@rsgweb/locale-tools", !1, [4, 0, 0, 0], () => Promise.all([E.e(3004), E.e(9587), E.e(5859)]).then(() => () => E(12841))),
          10181: () => g("default", "react-router-dom", !1, [1, 6, 11, 2], () => Promise.all([E.e(5389), E.e(8429)]).then(() => () => E(15389))),
          10336: () => g("default", "lodash", !1, [1, 4, 17, 21], () => E.e(5076).then(() => () => E(15076))),
          58136: () => g("default", "@rsgweb/utils", !1, [4, 0, 0, 0], () => Promise.all([E.e(3004), E.e(7129), E.e(4931), E.e(6990), E.e(181), E.e(336), E.e(5085), E.e(4554)]).then(() => () => E(79308))),
          69023: () => g("default", "uuid", !1, [1, 9, 0, 0], () => E.e(2657).then(() => () => E(62657))),
          90994: () => g("default", "gsap", !1, [4, "latest", , "licensed"], () => E.e(9719).then(() => () => E(79719))),
          61874: () => g("default", "@rsgweb/rockstar-account", !1, [4, 0, 0, 0], () => Promise.all([E.e(7129), E.e(1254), E.e(6990), E.e(181), E.e(336), E.e(5085), E.e(2169)]).then(() => () => E(32169))),
          1521: () => g("default", "react-popper", !1, [1, 2, 3, 0], () => Promise.all([E.e(8429), E.e(4041), E.e(5016)]).then(() => () => E(62635))),
          1556: () => g("default", "clsx", !1, [1, 2, 1, 1], () => E.e(439).then(() => () => E(10439))),
          39054: () => g("default", "hammerjs", !1, [1, 2, 0, 8], () => E.e(7731).then(() => () => E(87731))),
          48974: () => g("default", "@rsgweb/modules-core-agegate", !1, [4, 0, 0, 0], () => Promise.all([E.e(1703), E.e(4598)]).then(() => () => E(42217))),
          99730: () => g("default", "@gsap/react", !1, [1, 2, 1, 0], () => E.e(1773).then(() => () => E(44154))),
          18429: () => g("default", "react-dom", !1, [1, 18, 2, 0], () => E.e(1098).then(() => () => E(71098))),
          811: () => g("default", "graphql", !1, [1, 16, 9, 0], () => E.e(601).then(() => () => E(30601))),
          24041: () => g("default", "@popperjs/core", !1, [1, 2, 11, 7], () => E.e(9813).then(() => () => E(19813)))
        }, w = {
          181: [10181],
          336: [10336],
          811: [811],
          994: [90994],
          1127: [71127],
          1874: [61874],
          4041: [24041],
          4554: [811],
          6990: [56990],
          8136: [58136],
          8429: [18429],
          8517: [1521, 1556, 39054, 48974, 99730],
          9023: [69023]
        }, _ = {}, E.f.consumes = (e, a) => {
          E.o(w, e) && w[e].forEach(e => {
            if (E.o(y, e)) return a.push(y[e]);
            if (!_[e]) {
              var t = a => {
                y[e] = 0, E.m[e] = t => {
                  delete E.c[e], t.exports = a()
                }
              };
              _[e] = !0;
              var d = a => {
                delete y[e], E.m[e] = t => {
                  throw delete E.c[e], a
                }
              };
              try {
                var r = v[e]();
                r.then ? a.push(y[e] = r.then(t).catch(d)) : t(r)
              } catch (e) {
                d(e)
              }
            }
          })
        }, (() => {
          if ("undefined" != typeof document) {
            var e = {
              7614: 0
            };
            E.f.miniCss = (a, t) => {
              e[a] ? t.push(e[a]) : 0 !== e[a] && {
                1030: 1,
                2217: 1,
                4365: 1,
                4598: 1,
                5055: 1,
                8517: 1
              } [a] && t.push(e[a] = (e => new Promise((a, t) => {
                var d = E.miniCssF(e),
                  r = E.p + d;
                if (((e, a) => {
                    for (var t = document.getElementsByTagName("link"), d = 0; d < t.length; d++) {
                      var r = (c = t[d]).getAttribute("data-href") || c.getAttribute("href");
                      if ("stylesheet" === c.rel && (r === e || r === a)) return c
                    }
                    var f = document.getElementsByTagName("style");
                    for (d = 0; d < f.length; d++) {
                      var c;
                      if ((r = (c = f[d]).getAttribute("data-href")) === e || r === a) return c
                    }
                  })(d, r)) return a();
                ((e, a, t, d, r) => {
                  var f = document.createElement("link");
                  f.rel = "stylesheet", f.type = "text/css", E.nc && (f.nonce = E.nc), f.onerror = f.onload = t => {
                    if (f.onerror = f.onload = null, "load" === t.type) d();
                    else {
                      var c = t && t.type,
                        o = t && t.target && t.target.href || a,
                        n = new Error("Loading CSS chunk " + e + " failed.\n(" + c + ": " + o + ")");
                      n.name = "ChunkLoadError", n.code = "CSS_CHUNK_LOAD_FAILED", n.type = c, n.request = o, f.parentNode && f.parentNode.removeChild(f), r(n)
                    }
                  }, f.href = a, document.head.appendChild(f)
                })(e, r, 0, a, t)
              }))(a).then(() => {
                e[a] = 0
              }, t => {
                throw delete e[a], t
              }))
            }
          }
        })(), (() => {
          var e = {
            7614: 0
          };
          E.f.j = (a, t) => {
            var d = E.o(e, a) ? e[a] : void 0;
            if (0 !== d)
              if (d) t.push(d[2]);
              else if (/^(1(127|81|874)|8(11|136|429)|336|4041|6990|9023|994)$/.test(a)) e[a] = 0;
            else {
              var r = new Promise((t, r) => d = e[a] = [t, r]);
              t.push(d[2] = r);
              var f = E.p + E.u(a),
                c = new Error;
              E.l(f, t => {
                if (E.o(e, a) && (0 !== (d = e[a]) && (e[a] = void 0), d)) {
                  var r = t && ("load" === t.type ? "missing" : t.type),
                    f = t && t.target && t.target.src;
                  c.message = "Loading chunk " + a + " failed.\n(" + r + ": " + f + ")", c.name = "ChunkLoadError", c.type = r, c.request = f, d[1](c)
                }
              }, "chunk-" + a, a)
            }
          };
          var a = (a, t) => {
              var d, r, [f, c, o] = t,
                n = 0;
              if (f.some(a => 0 !== e[a])) {
                for (d in c) E.o(c, d) && (E.m[d] = c[d]);
                o && o(E)
              }
              for (a && a(t); n < f.length; n++) r = f[n], E.o(e, r) && e[r] && e[r][0](), e[r] = 0
            },
            t = self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || [];
          t.forEach(a.bind(null, 0)), t.push = a.bind(null, t.push.bind(t))
        })(), E(93032), E(58157)
      })())
    }
  }
});