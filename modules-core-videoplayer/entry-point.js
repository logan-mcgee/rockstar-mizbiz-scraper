try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "99139d03-f4ba-4547-9755-3751099a6f70", e._sentryDebugIdIdentifier = "sentry-dbid-99139d03-f4ba-4547-9755-3751099a6f70")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "7e6a862245c0f03cf7f976b07fd639dca846e391",
    packageName: "@rockstargames/modules-core-videoplayer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "7e6a862245c0f03cf7f976b07fd639dca846e391"
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
          131: "c139beb54d7f04c92d92f3f98d0942cf",
          278: "a0b837e53cf615a5493fdcbc95c726b1",
          299: "7b41bd4e217947f02243324d9e65e38f",
          314: "b9f50e153f27feb66ce43aaa4d44dbdb",
          439: "67a3f625e6578477b5ab13a3fec3218b",
          601: "fc7fce25c25bd2b8b1fc6575102deb4f",
          662: "24a0c8d6cdf2222361a33af31b93f2f0",
          824: "e0dc945d1167c4796e916c26c4ceae6d",
          907: "69827ce0aae6beb13e48aa0dffa16186",
          1030: "2951d942ca8621216145e8b2cc1a4f90",
          1054: "1931ed43616502daf45c87d7f8742d7d",
          1098: "7de92b97e21ce25f2c5f7016f7d8be36",
          1242: "688eb8661b2eee17182a9d85e34044ea",
          1254: "723a46ed23a04d2f954c1407b0224b28",
          1648: "503a92cfc9b5e2419731e2d1facc6157",
          1703: "a0289645edc83b345a1629a212e91816",
          1773: "ece03751007e5510e03cf9ea156babdd",
          1822: "8ce63efded19b1180ff5cb90c661be3a",
          1868: "4e247d8bbac1a053cb4587e5a6131922",
          2148: "19e138f482e1356de1e3f8390d815c19",
          2156: "fabdfaee25d35523cb33c627ffd0e15c",
          2171: "842ed04e3e5123a6037200d9396cac95",
          2217: "c9f6baa72c5d748dc26c79971531571b",
          2221: "f0de6f61435517e0319c51f31073bc84",
          2243: "147f76e4014fb1bd69b457e7feacf220",
          2293: "d556166d9c721d2b50effe6519a99682",
          2306: "bf17592cc403e849dac7b9977aa321ff",
          2347: "8ebe86ed9bb55e3359edf6cbbd026a8d",
          2365: "515039765489adab19bb5bfb2a2a4fd6",
          2398: "28f77226e6fc74b0a2e9ef66b53769d8",
          2466: "615da9a9528c573b21e34c99059f9b11",
          2635: "eabf2446f632b7c474efd04c01a2a642",
          2642: "037dd63d6a3b73ec4eea1c7cdc5e89bf",
          2657: "0dd42a6f0d9a0a6d6e441281d13ef630",
          2678: "7cd6e308f6b6fda2b0123b742e05c0fa",
          2864: "44d4b221ec4e25f57f9bc5c15355d9ac",
          3034: "eb73c7fa26a7367a17dae923453efd2f",
          3197: "b686e45f0acaeb4a39c0ed991c17f9a2",
          3343: "8adda88058dff93bb45b5a72d82e5bad",
          3370: "6eec6cf3a7c8b807445de9fa48170d29",
          3475: "282817cf0b9be09a9645242028ca9485",
          3486: "0655d72f2949ffed3f6fb077861305bf",
          3689: "5926b1227828022016e2539728b1062b",
          3697: "d9620e05d02efc31d4646eb2038661fe",
          3885: "ff8b957bd67168cab75cebda758fe2cc",
          3941: "e879cea7ee6ac4637a558b4d9ca0bf6e",
          4011: "cd39037322b75c3009e6402ad7568f55",
          4154: "f93fb685a1f3799e7b43ec68a57f738c",
          4271: "ae08799f49867fd751dbc1c591f5102b",
          4528: "c5e251096293c3777a0744a4687ad45b",
          4578: "d2f2537147e801b2cec57c2de8404a7c",
          4598: "2ee53e2903ac181f9d095d2e518d5e08",
          4621: "4e72564aa9101a763ca2db0a005d001c",
          4700: "3e9fda4330cf4ab9787d3458263f5b1c",
          4710: "6642bc0e7331873cd8db657718ef7c22",
          4731: "5f02996141414489482eb668d1108802",
          4799: "51aff4623ec8d1cada914eea5e77d1de",
          4851: "9c04aa141b99d9381ad602548c35b657",
          4861: "29ff8acd0e8a4bec90af4764bcb0449f",
          4913: "bf6aafa6012e18bbd8cf8e47d2b36974",
          4994: "ce04d5a39115d101bd87d002303b125d",
          5016: "abf2fc45bee4161dca2b9357f6c70175",
          5018: "3b6e72bb231a1affb29c82a0ee5dd7f5",
          5055: "579d4ec507268d3f0547221d3733be8a",
          5076: "a5fa80d363db400f677f92e3b76374d8",
          5233: "4e569cb2c3045f1e202e94a2e5d8354e",
          5259: "2705d24a87335c6f53105bf648086b8d",
          5389: "928304ffab1ac3c6d282ce6c4b22c98b",
          5530: "636a88180fa23049af91a166c5ab3dbf",
          5639: "aed7838dc723786aa72632dd09a594bc",
          5663: "1b371e19f631fa07f50b1fb6a0933a0a",
          5742: "ef110d81edf511593bbdca0bc39f5512",
          5830: "cf793e46ae3cab6ba83daf2107c080af",
          5832: "5b89c6f82b060f45a6a6c5baaa7b604e",
          5859: "21349e41aac5a8f4e12592599bf601fc",
          6070: "4eaf513eb663eb996d637eeeb9aeada3",
          6267: "1b2086112fd3b70e0649650bb27856ae",
          6280: "e7c19e9c6308351128f7083fdc388e46",
          6285: "89619f133d0c85d270735d029fa6e5c0",
          6361: "bd2050d542969e247e1375d70173bd81",
          6664: "f38355e6968f41a704ad5caa87920684",
          6879: "fb8594023b161dcb6251513fc69fc4f8",
          6891: "52dfe90a7542c1c5647fc51ca6b659c4",
          6929: "5d73b459e8f1885656ba8f96e0040187",
          6997: "fd1a2e817306b56f5f9182055ca42e1b",
          7010: "4fcc61249977f65698c188169b557cf5",
          7073: "ce08d6c99b3dd99c9ccfec9a84fc2b1a",
          7436: "4b9a92dd548fb1d1612def8f851ca949",
          7452: "7ed1f2f9c8739cfd7757ad9b954e1c83",
          7453: "457c5557190464a2f5d6cf5c11ef923e",
          7684: "2f7c3a9fafafa5c28c2ba46bcb840d96",
          7731: "375a0d227eb63179cf32534d3ab3346c",
          7970: "f9fb018e172a3eab5bf8d251f57cb647",
          8240: "27ada140952225fdf1c2b907b3ea0f6f",
          8271: "e313dd7fd7ee805e7ffc9f5408cb3511",
          8272: "5aa2f8b83248de62da5f4b2534f13d2b",
          8284: "e228a2cbf42bdbda6d15f219041fbbf7",
          8391: "fa711e8f18851090eed757ccd735dca6",
          8431: "4b90b49c98680c2a35f1e3bd9d822641",
          8755: "97ba9bc577e7300f09c7485af3e151a9",
          8880: "25e4b57b79904b9fd1b45d19a999bb59",
          8970: "3ee1e3431ea9db72d9f7d45ccc1135bb",
          9022: "88476c8881aec67b70c0436932a75b9d",
          9028: "c883d2c2ee5dd6a3f8838edafabe8feb",
          9126: "56a9245fb4abf765a91ddd8555d0ec0b",
          9377: "0755bfdb26bd84ad733f7c076bdb8456",
          9587: "2bc12bbccf268290dc5637105c518b88",
          9615: "e3357f6c53d430b9ad6663598fe9398e",
          9757: "fde7a8ba2731fdc275c1cab76c60ae39",
          9813: "054f905c59579b68d78bb287c56b9d27",
          9936: "7d5eb586abf290daea3bbe27f8b41ed5",
          9990: "968005a3c816f7ec58c9909b7dbb9f8b"
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
              return "default" === t && (o("@gsap/react", "2.1.2", (() => Promise.all([P.e(2229), P.e(3581), P.e(4154)]).then((() => () => P(4154))))), o("@popperjs/core", "2.11.8", (() => P.e(9813).then((() => () => P(9813))))), o("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([P.e(9587), P.e(2229), P.e(8240)]).then((() => () => P(2841))))), o("@rsgweb/modules-core-agegate", "0.0.0", (() => Promise.all([P.e(1703), P.e(2229), P.e(5966), P.e(2918), P.e(2217)]).then((() => () => P(2217))))), o("@rsgweb/rockstar-account", "0.0.0", (() => Promise.all([P.e(2293), P.e(1254), P.e(2229), P.e(9623), P.e(6188), P.e(5966), P.e(2148), P.e(6070)]).then((() => () => P(6070))))), o("@rsgweb/utils", "1.0.0", (() => Promise.all([P.e(2293), P.e(8284), P.e(2229), P.e(9623), P.e(6188), P.e(1788), P.e(2148), P.e(6565), P.e(9757)]).then((() => () => P(9757))))), o("clsx", "2.1.1", (() => P.e(439).then((() => () => P(439))))), o("graphql", "16.11.0", (() => P.e(601).then((() => () => P(601))))), o("gsap", "0.0.0", (() => P.e(4271).then((() => () => P(4271))))), o("hammerjs", "2.0.8", (() => P.e(7731).then((() => () => P(7731))))), o("lodash", "4.17.21", (() => P.e(5076).then((() => () => P(5076))))), o("react-dom", "18.3.1", (() => Promise.all([P.e(1098), P.e(2229)]).then((() => () => P(1098))))), o("react-popper", "2.3.0", (() => Promise.all([P.e(2229), P.e(4853), P.e(9005), P.e(2635)]).then((() => () => P(2635))))), o("react-router-dom", "6.30.0", (() => Promise.all([P.e(5389), P.e(2229), P.e(4853)]).then((() => () => P(5389))))), o("react", "18.3.1", (() => P.e(8431).then((() => () => P(8431))))), o("uuid", "9.0.1", (() => P.e(2657).then((() => () => P(2657)))))), e[t] = b.length ? Promise.all(b).then((() => e[t] = 1)) : 1
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
          2918: () => m("default", "@rsgweb/rockstar-account", !1, [1, "workspace:^"], (() => Promise.all([P.e(2293), P.e(1254), P.e(9623), P.e(6188), P.e(2148), P.e(3689)]).then((() => () => P(6070))))),
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