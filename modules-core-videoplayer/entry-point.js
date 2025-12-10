try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "e6d30618-353f-4820-a6f0-632c0638217f", e._sentryDebugIdIdentifier = "sentry-dbid-e6d30618-353f-4820-a6f0-632c0638217f")
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
        var e, t, r, d, c, f, b, o, n, l, i, s, u, p, h, m, g, y, v, w, k = {
            3032: (e, a, t) => {
              t(8419)
            },
            7027: (e, a, t) => {
              a.y = function(e, a) {
                var t = document.createElement("a");
                t.href = e;
                for (var r = "/" === t.pathname[0] ? t.pathname : "/" + t.pathname, d = 0, c = r.length; d !== a && c >= 0;) "/" === r[--c] && d++;
                if (d !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + d + ") in the URL path " + e);
                var f = r.slice(0, c + 1);
                return t.protocol + "//" + t.host + f
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
                  "./bootstrap": () => t.e(8271).then(() => () => t(8271)),
                  "./index": () => Promise.all([t.e(5473), t.e(2229), t.e(9623), t.e(6188), t.e(5966), t.e(1788), t.e(1569), t.e(2828), t.e(2918), t.e(8517), t.e(1030)]).then(() => () => t(1030)),
                  "./tina": () => Promise.all([t.e(2229), t.e(4853), t.e(6188), t.e(5966), t.e(1788), t.e(1569), t.e(7684)]).then(() => () => t(7684)),
                  "./tinaBlockTemplates": () => Promise.all([t.e(2229), t.e(4853), t.e(6188), t.e(5966), t.e(1788), t.e(1569), t.e(7684)]).then(() => () => t(7684))
                },
                d = (e, a) => (t.R = a, a = t.o(r, e) ? r[e]() : Promise.resolve().then(() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                }), t.R = void 0, a),
                c = (e, a) => {
                  if (t.S) {
                    var r = "default",
                      d = t.S[r];
                    if (d && d !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return t.S[r] = e, t.I(r, a)
                  }
                };
              t.d(a, {
                get: () => d,
                init: () => c
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
          var c = {};
          e = e || [null, t({}), t([]), t(t)];
          for (var f = 2 & r && a;
            ("object" == typeof f || "function" == typeof f) && !~e.indexOf(f); f = t(f)) Object.getOwnPropertyNames(f).forEach(e => c[e] = () => a[e]);
          return c.default = () => a, P.d(d, c), d
        }, P.d = (e, a) => {
          for (var t in a) P.o(a, t) && !P.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: a[t]
          })
        }, P.f = {}, P.e = e => Promise.all(Object.keys(P.f).reduce((a, t) => (P.f[t](e, a), a), [])), P.u = e => "js/" + {
          131: "46492a7e7a2d2d2dfad33d1e6ae96462",
          278: "3ec55c0aa13998ebd3d3200491bfc406",
          299: "bc94855771c7a74ae5fb64024bf513e8",
          314: "276567b47e097d1b9c1b32c7abedaf1b",
          439: "00a0a326b133ac05c5327eb6ec3c1728",
          601: "cfe6daf9e80c23b42daa8adfa5c456ca",
          662: "8a1d4272ab0a00f056559fd535fce276",
          824: "96985d2ae4641aeb0fc5ed5661e83c03",
          907: "23ae955a55932e1e40c52d33df2f1247",
          1030: "1f1bcb8f0dd4a0cd2f06ad34eacb8212",
          1054: "9ad17075bddc5288974b8d0217b3edf7",
          1098: "106cced906fbe814b8c4b2487f4808eb",
          1242: "fd281ba6af7534766d732cb54232113f",
          1254: "3774f29d70857314b9114ceb11838196",
          1703: "ae1ec57de6f854a2d8fe74648d7d3008",
          1773: "9d9c41f231c42d510dfaf0910fa81e77",
          1822: "e66d4289e3ea1aeef614baf2975c02a0",
          1868: "421329ba32e122e105395c8aff2d50d5",
          2156: "5f3a3bdb29ed0aa5de19d1d54f193771",
          2169: "8c10b5ca053309fe45f03ea3cb5c53a1",
          2171: "0ddab80abf8a045d2063a750255734f3",
          2217: "1ec4ed4b8df3525c199b6268c37884bf",
          2221: "d876086363fed7a09cc25494144e54c8",
          2243: "69ff0020bad612da2f50de897703322d",
          2293: "80874768b4b684a8009b1225cc117ca4",
          2306: "095845ffb2a6b2d4d087b7d0a02c6e31",
          2347: "b6523fcc0264e8bcbbfc44f6bb14b913",
          2365: "7f0568e29dddb97ef32f2a2580db5f36",
          2398: "1a2bc82875987ec6bd0e3e489bfa0e8d",
          2466: "f4781b4af99642b3bd2a779366facd5c",
          2635: "0d49275dcd519eb8947df3bc9f07590b",
          2642: "beb752fafa0bb9e11a55e4c2afc06b74",
          2657: "1e42dd34a010557d50361769e4f6c372",
          2678: "aaa82038ea73032a4cd1939c1a7d1e60",
          2864: "2a020f3bf331ec4fa138d8fc04e5c2c0",
          3034: "b2b3f943f7f9c96c707e4928479d5d27",
          3197: "1785d7212364df060023404d7d9980b2",
          3343: "f39da28b9c4befc640d5ad807a0d0fe6",
          3370: "e41664f1e10894bfd388d3573a70d3b8",
          3475: "1caad4bd3dfd8054161e51d003c91f11",
          3486: "56dac835ae02d2cf8469d70063f631ff",
          3697: "3f1fe49481f2462bb9025d7c848d3dde",
          3885: "f0b4176f199df5baf446d7a567cf2791",
          3941: "90cc7f0ac06d269b59f88d63004bcb41",
          4011: "eb61eef3db825f5c4335d36781ef4d2e",
          4154: "3c6cfe3a57b095119d3bb1aa9513df24",
          4528: "2dd9ea6bb9042c9f03ba429e997ceff6",
          4550: "fc686c04a7b1fc05b6afbef93b24d2e1",
          4578: "73a97f1ed9b36592b4c455d4d851091b",
          4598: "dbd8c6481a6a1ca279f0139b1c599c36",
          4621: "2d9281e86684af9cc8c775872a1c7afb",
          4700: "bef95a094494fc859286ae34464f247e",
          4710: "c53e7d44f74a885654b153104b91c986",
          4731: "b7801a030979805818e7fba1f87e2d42",
          4799: "02d0c00b62bc8d29aedafaa517118f70",
          4851: "115a11b6e7a4478de46a034b69922f6f",
          4861: "be895641738266560fab7db02cfc11e7",
          4913: "2b5c283b03220f3a18314c5ec8488124",
          5016: "5b8401c8f6bbe4acc6dcbd68a9b081bd",
          5018: "c2b1474efcbab0f0d349b302ae3de1ff",
          5055: "3712fed13b01b9be00ce310102dce0b2",
          5076: "ea3dcb8126212c21b07931986f9e047c",
          5233: "9feb38594f40edc9e9bd550523e2dae2",
          5259: "186a260b60bed7fc3a997d659444de2c",
          5389: "0c96966a997a39896375420916e68d8d",
          5473: "b0446ec3dbccdfc0f5fa5bb4714d89dc",
          5530: "5d1d55068f2f194ae4b0a260d5bf46e4",
          5639: "f59bcae7ed6dcb7b3a17fee8419146f2",
          5663: "384fc7afcdf66c9e105adb9a9058e523",
          5742: "4bcef087b6c8c67c00ce613ce1bbecae",
          5830: "5b1e73c1c9a00b1a732a796617c32746",
          5832: "195482f0ade46049f972da11926851e2",
          5859: "0039b2d341197f5f487a46ff5f50f6b2",
          6088: "3770dbf3a1b65d45d99e98ab97678bc6",
          6267: "fc97b1b7ecb302e16b8b267449046875",
          6280: "394cc7ed9961248945b6ee6275af9c72",
          6285: "1795f31a00fccb16060726ec70146cb8",
          6361: "18eb725188ca5ef16e013ed788ed6e62",
          6664: "b4fff620aabb51f03aaf979f0a0b2464",
          6879: "8d42ac2289ad5c8551cc719a44015b62",
          6891: "67dc55802dd4404f1037332f4b021987",
          6929: "6005f5b407cbb11691f22f6fd7af6da0",
          6997: "82ba8cf6ed16babab99fd566d4cf0fb6",
          7010: "512c49f779527e3a539f293bf6f33d2b",
          7073: "a0d18f9d72cefcd6e840a8232ef1ac9a",
          7436: "bbb3a0741a3384bd3a2d2f3381b9706c",
          7452: "af701118a9871eb91abbf118286a6146",
          7453: "689c0cb5876f5fc3f6cef1a42d00b3f3",
          7684: "fe323b96218b9085dec453bfd49d1658",
          7731: "5143508c9850946777a2dc7e2835ad29",
          7970: "8b479aacf95efa965570c9b02d2a35f7",
          8240: "b59e72a15dfc50f0c81b0a2a193b2f30",
          8271: "1b5b8e4b5a9b99bfc2f26d077e941c90",
          8272: "4d82e6fda4ae220377840c4f8490367c",
          8284: "99fd320eb724532eaef90958fb94504b",
          8391: "c83c28c08b7683cbcb506031d383caa3",
          8431: "9d9694b0521e0363e8191a9276c42dc2",
          8517: "4be6270a4697523592cb6cad1155a25c",
          8755: "a094c629a156cf175cf6a2c31b0e6f51",
          8880: "262949088740f74bf23fd240ff7a890d",
          8970: "972a581e97330cb5d4b48f21742e0a87",
          9022: "dabd34d2e0e1fea98d3142417b49f3e4",
          9028: "bc5441c0f8fc1f87bdc9bfaaf71490c8",
          9126: "870c377ced25a84fe882261fe8d6e8bb",
          9377: "24b24e1af7013e3de18998043282a4d3",
          9587: "176f26b9ee63bd40948e491d8f6ae9e7",
          9615: "dc093279bcff58cf962db1e1789f0160",
          9719: "b83f0821e76f3323cbf1987ebdf99b40",
          9757: "0ef489ae2cd40f0464719f0aede7fd33",
          9813: "05fd8e7202deb5eb866f02fe6bd56265",
          9936: "c44f640eba3d2e2e9b2d8f67df20e2b8",
          9990: "f0317ac2e0c47432cf1154d1de8014f1"
        } [e] + ".js", P.miniCssF = e => "css/" + {
          1030: "a36e0cbe058ff11dfb786ef49eb77a52",
          2217: "30c5db481d6b25a478ff5719bcbdf03e",
          4598: "30c5db481d6b25a478ff5719bcbdf03e",
          5055: "98d2f7207c07838416399fe63c3fcbc4",
          7684: "0f3056ce40472624d7ee487fbb173c0a",
          8517: "cec199aba328e2c4016dac15ddfea127"
        } [e] + ".css", P.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), P.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), r = {}, d = "@rockstargames/modules-core-videoplayer:", P.l = (e, a, t, c) => {
          if (r[e]) r[e].push(a);
          else {
            var f, b;
            if (void 0 !== t)
              for (var o = document.getElementsByTagName("script"), n = 0; n < o.length; n++) {
                var l = o[n];
                if (l.getAttribute("src") == e || l.getAttribute("data-webpack") == d + t) {
                  f = l;
                  break
                }
              }
            f || (b = !0, (f = document.createElement("script")).charset = "utf-8", f.timeout = 120, P.nc && f.setAttribute("nonce", P.nc), f.setAttribute("data-webpack", d + t), f.src = e), r[e] = [a];
            var i = (a, t) => {
                f.onerror = f.onload = null, clearTimeout(s);
                var d = r[e];
                if (delete r[e], f.parentNode && f.parentNode.removeChild(f), d && d.forEach(e => e(t)), a) return a(t)
              },
              s = setTimeout(i.bind(null, void 0, {
                type: "timeout",
                target: f
              }), 12e4);
            f.onerror = i.bind(null, f.onerror), f.onload = i.bind(null, f.onload), b && document.head.appendChild(f)
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
              var c = P.S[t],
                f = "@rockstargames/modules-core-videoplayer",
                b = (e, a, t, r) => {
                  var d = c[e] = c[e] || {},
                    b = d[a];
                  (!b || !b.loaded && (!r != !b.eager ? r : f > b.from)) && (d[a] = {
                    get: t,
                    from: f,
                    eager: !!r
                  })
                },
                o = [];
              return "default" === t && (b("@gsap/react", "2.1.2", () => Promise.all([P.e(2229), P.e(2828), P.e(4154)]).then(() => () => P(4154))), b("@popperjs/core", "2.11.8", () => P.e(9813).then(() => () => P(9813))), b("@rsgweb/locale-tools", "1.0.0", () => Promise.all([P.e(9587), P.e(2229), P.e(8240)]).then(() => () => P(2841))), b("@rsgweb/modules-core-agegate", "0.0.0", () => Promise.all([P.e(1703), P.e(2229), P.e(5966), P.e(2918), P.e(2217)]).then(() => () => P(2217))), b("@rsgweb/rockstar-account", "0.0.0", () => Promise.all([P.e(2293), P.e(1254), P.e(2229), P.e(9623), P.e(6188), P.e(5966), P.e(6088), P.e(4550)]).then(() => () => P(2169))), b("@rsgweb/utils", "1.0.0", () => Promise.all([P.e(2293), P.e(8284), P.e(2229), P.e(9623), P.e(6188), P.e(1788), P.e(6088), P.e(6565), P.e(9757)]).then(() => () => P(9757))), b("clsx", "2.1.1", () => P.e(439).then(() => () => P(439))), b("graphql", "16.11.0", () => P.e(601).then(() => () => P(601))), b("gsap", "3.12.5", () => P.e(9719).then(() => () => P(9719))), b("hammerjs", "2.0.8", () => P.e(7731).then(() => () => P(7731))), b("lodash", "4.17.21", () => P.e(5076).then(() => () => P(5076))), b("react-dom", "18.3.1", () => Promise.all([P.e(1098), P.e(2229)]).then(() => () => P(1098))), b("react-popper", "2.3.0", () => Promise.all([P.e(2229), P.e(4853), P.e(9005), P.e(2635)]).then(() => () => P(2635))), b("react-router-dom", "6.30.1", () => Promise.all([P.e(5389), P.e(2229), P.e(4853)]).then(() => () => P(5389))), b("react", "18.3.1", () => P.e(8431).then(() => () => P(8431))), b("uuid", "9.0.1", () => P.e(2657).then(() => () => P(2657)))), e[t] = o.length ? Promise.all(o).then(() => e[t] = 1) : 1
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
        })(), c = e => {
          var a = e => e.split(".").map(e => +e == e ? +e : e),
            t = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
            r = t[1] ? a(t[1]) : [];
          return t[2] && (r.length++, r.push.apply(r, a(t[2]))), t[3] && (r.push([]), r.push.apply(r, a(t[3]))), r
        }, f = (e, a) => {
          e = c(e), a = c(a);
          for (var t = 0;;) {
            if (t >= e.length) return t < a.length && "u" != (typeof a[t])[0];
            var r = e[t],
              d = (typeof r)[0];
            if (t >= a.length) return "u" == d;
            var f = a[t],
              b = (typeof f)[0];
            if (d != b) return "o" == d && "n" == b || "s" == b || "u" == d;
            if ("o" != d && "u" != d && r != f) return r < f;
            t++
          }
        }, b = e => {
          var a = e[0],
            t = "";
          if (1 === e.length) return "*";
          if (a + .5) {
            t += 0 == a ? ">=" : -1 == a ? "<" : 1 == a ? "^" : 2 == a ? "~" : a > 0 ? "=" : "!=";
            for (var r = 1, d = 1; d < e.length; d++) r--, t += "u" == (typeof(f = e[d]))[0] ? "-" : (r > 0 ? "." : "") + (r = 2, f);
            return t
          }
          var c = [];
          for (d = 1; d < e.length; d++) {
            var f = e[d];
            c.push(0 === f ? "not(" + o() + ")" : 1 === f ? "(" + o() + " || " + o() + ")" : 2 === f ? c.pop() + " " + c.pop() : b(f))
          }
          return o();

          function o() {
            return c.pop().replace(/^\((.+)\)$/, "$1")
          }
        }, o = (e, a) => {
          if (0 in e) {
            a = c(a);
            var t = e[0],
              r = t < 0;
            r && (t = -t - 1);
            for (var d = 0, f = 1, b = !0;; f++, d++) {
              var n, l, i = f < e.length ? (typeof e[f])[0] : "";
              if (d >= a.length || "o" == (l = (typeof(n = a[d]))[0])) return !b || ("u" == i ? f > t && !r : "" == i != r);
              if ("u" == l) {
                if (!b || "u" != i) return !1
              } else if (b)
                if (i == l)
                  if (f <= t) {
                    if (n != e[f]) return !1
                  } else {
                    if (r ? n > e[f] : n < e[f]) return !1;
                    n != e[f] && (b = !1)
                  }
              else if ("s" != i && "n" != i) {
                if (r || f <= t) return !1;
                b = !1, f--
              } else {
                if (f <= t || l < i != r) return !1;
                b = !1
              } else "s" != i && "n" != i && (b = !1, f--)
            }
          }
          var s = [],
            u = s.pop.bind(s);
          for (d = 1; d < e.length; d++) {
            var p = e[d];
            s.push(1 == p ? u() | u() : 2 == p ? u() & u() : p ? o(p, a) : !u())
          }
          return !!u()
        }, n = (e, a) => e && P.o(e, a), l = e => (e.loaded = 1, e.get()), i = e => Object.keys(e).reduce((a, t) => (e[t].eager && (a[t] = e[t]), a), {}), s = (e, a, t, r) => {
          var d = r ? i(e[a]) : e[a];
          return (a = Object.keys(d).reduce((e, a) => !o(t, a) || e && !f(e, a) ? e : a, 0)) && d[a]
        }, u = (e, a, t, r, d) => {
          var c = e[t];
          return "No satisfying version (" + b(r) + ")" + (d ? " for eager consumption" : "") + " of shared module " + t + " found in shared scope " + a + ".\nAvailable versions: " + Object.keys(c).map(e => e + " from " + c[e].from).join(", ")
        }, p = e => {
          throw new Error(e)
        }, h = (e, a, t) => t ? t() : ((e, a) => p("Shared module " + a + " doesn't exist in shared scope " + e))(e, a), m = (e => function(a, t, r, d, c) {
          var f = P.I(a);
          return f && f.then && !r ? f.then(e.bind(e, a, P.S[a], t, !1, d, c)) : e(a, P.S[a], t, r, d, c)
        })((e, a, t, r, d, c) => {
          if (!n(a, t)) return h(e, t, c);
          var f = s(a, t, d, r);
          return f ? l(f) : c ? c() : void p(u(a, e, t, d, r))
        }), g = {}, y = {
          2229: () => m("default", "react", !1, [1, 18, 2, 0], () => P.e(8431).then(() => () => P(8431))),
          9623: () => m("default", "react-router-dom", !1, [1, 6, 11, 2], () => Promise.all([P.e(5389), P.e(4853)]).then(() => () => P(5389))),
          6188: () => m("default", "lodash", !1, [1, 4, 17, 21], () => P.e(5076).then(() => () => P(5076))),
          5966: () => m("default", "@rsgweb/utils", !1, [1, "workspace:^"], () => Promise.all([P.e(2293), P.e(8284), P.e(9623), P.e(6188), P.e(1788), P.e(6088), P.e(6929)]).then(() => () => P(9757))),
          1788: () => m("default", "@rsgweb/locale-tools", !1, [1, "workspace:^"], () => Promise.all([P.e(9587), P.e(5859)]).then(() => () => P(2841))),
          1569: () => m("default", "uuid", !1, [1, 9, 0, 0], () => P.e(2657).then(() => () => P(2657))),
          2828: () => m("default", "gsap", !1, [4, 3, 12, 5], () => P.e(9719).then(() => () => P(9719))),
          2918: () => m("default", "@rsgweb/rockstar-account", !1, [1, "workspace:^"], () => Promise.all([P.e(2293), P.e(1254), P.e(9623), P.e(6188), P.e(6088), P.e(2169)]).then(() => () => P(2169))),
          4572: () => m("default", "clsx", !1, [1, 2, 1, 1], () => P.e(439).then(() => () => P(439))),
          4848: () => m("default", "hammerjs", !1, [1, 2, 0, 8], () => P.e(7731).then(() => () => P(7731))),
          5971: () => m("default", "react-popper", !1, [1, 2, 3, 0], () => Promise.all([P.e(4853), P.e(9005), P.e(5016)]).then(() => () => P(2635))),
          7224: () => m("default", "@rsgweb/modules-core-agegate", !1, [1, "workspace:^"], () => Promise.all([P.e(1703), P.e(4598)]).then(() => () => P(2217))),
          7654: () => m("default", "@gsap/react", !1, [1, 2, 1, 0], () => P.e(1773).then(() => () => P(4154))),
          4853: () => m("default", "react-dom", !1, [1, 18, 2, 0], () => P.e(1098).then(() => () => P(1098))),
          6565: () => m("default", "graphql", !1, [1, 16, 9, 0], () => P.e(601).then(() => () => P(601))),
          9005: () => m("default", "@popperjs/core", !1, [1, 2, 11, 7], () => P.e(9813).then(() => () => P(9813)))
        }, v = {
          1569: [1569],
          1788: [1788],
          2229: [2229],
          2828: [2828],
          2918: [2918],
          4853: [4853],
          5966: [5966],
          6188: [6188],
          6565: [6565],
          6929: [6565],
          8517: [4572, 4848, 5971, 7224, 7654],
          9005: [9005],
          9623: [9623]
        }, w = {}, P.f.consumes = (e, a) => {
          P.o(v, e) && v[e].forEach(e => {
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
          })
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
                5055: 1,
                7684: 1,
                8517: 1
              } [a] && t.push(e[a] = (e => new Promise((a, t) => {
                var r = P.miniCssF(e),
                  d = P.p + r;
                if (((e, a) => {
                    for (var t = document.getElementsByTagName("link"), r = 0; r < t.length; r++) {
                      var d = (f = t[r]).getAttribute("data-href") || f.getAttribute("href");
                      if ("stylesheet" === f.rel && (d === e || d === a)) return f
                    }
                    var c = document.getElementsByTagName("style");
                    for (r = 0; r < c.length; r++) {
                      var f;
                      if ((d = (f = c[r]).getAttribute("data-href")) === e || d === a) return f
                    }
                  })(r, d)) return a();
                ((e, a, t, r, d) => {
                  var c = document.createElement("link");
                  c.rel = "stylesheet", c.type = "text/css", P.nc && (c.nonce = P.nc), c.onerror = c.onload = t => {
                    if (c.onerror = c.onload = null, "load" === t.type) r();
                    else {
                      var f = t && t.type,
                        b = t && t.target && t.target.href || a,
                        o = new Error("Loading CSS chunk " + e + " failed.\n(" + f + ": " + b + ")");
                      o.name = "ChunkLoadError", o.code = "CSS_CHUNK_LOAD_FAILED", o.type = f, o.request = b, c.parentNode && c.parentNode.removeChild(c), d(o)
                    }
                  }, c.href = a, document.head.appendChild(c)
                })(e, d, 0, a, t)
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
          P.f.j = (a, t) => {
            var r = P.o(e, a) ? e[a] : void 0;
            if (0 !== r)
              if (r) t.push(r[2]);
              else if (/^(2(229|828|918)|(17|61)88|1569|4853|5966|6565|9005|9623)$/.test(a)) e[a] = 0;
            else {
              var d = new Promise((t, d) => r = e[a] = [t, d]);
              t.push(r[2] = d);
              var c = P.p + P.u(a),
                f = new Error;
              P.l(c, t => {
                if (P.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
                  var d = t && ("load" === t.type ? "missing" : t.type),
                    c = t && t.target && t.target.src;
                  f.message = "Loading chunk " + a + " failed.\n(" + d + ": " + c + ")", f.name = "ChunkLoadError", f.type = d, f.request = c, r[1](f)
                }
              }, "chunk-" + a, a)
            }
          };
          var a = (a, t) => {
              var r, d, [c, f, b] = t,
                o = 0;
              if (c.some(a => 0 !== e[a])) {
                for (r in f) P.o(f, r) && (P.m[r] = f[r]);
                b && b(P)
              }
              for (a && a(t); o < c.length; o++) d = c[o], P.o(e, d) && e[d] && e[d][0](), e[d] = 0
            },
            t = self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || [];
          t.forEach(a.bind(null, 0)), t.push = a.bind(null, t.push.bind(t))
        })(), P(3032), P(8157)
      })())
    }
  }
});