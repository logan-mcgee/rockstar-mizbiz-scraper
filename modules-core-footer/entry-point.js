try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "7dee9057-0c07-4ab5-8c85-d241b1fcfada", e._sentryDebugIdIdentifier = "sentry-dbid-7dee9057-0c07-4ab5-8c85-d241b1fcfada")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "5186d42ad1acddf97418fd86e38e0b7d3a16e8d4",
    packageName: "@rockstargames/modules-core-footer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "5186d42ad1acddf97418fd86e38e0b7d3a16e8d4"
}, System.register([], (function(e, a) {
  return {
    execute: function() {
      e((() => {
        var e, r, d, t, c, f, o = {
            13218: (e, a, r) => {
              (0, r(77600).w)(1)
            },
            44857: (e, a, r) => {
              r(13218)
            },
            67884: (e, a, r) => {
              a.y = function(e, a) {
                var r = document.createElement("a");
                r.href = e;
                for (var d = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, t = 0, c = d.length; t !== a && c >= 0;) "/" === d[--c] && t++;
                if (t !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + t + ") in the URL path " + e);
                var f = d.slice(0, c + 1);
                return r.protocol + "//" + r.host + f
              };
              Number.isInteger
            },
            77600: (e, a, r) => {
              const d = r(67884).y;
              a.w = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = d(r.y.meta.url, e)
              }
            },
            98478: (e, a, r) => {
              "use strict";
              var d = {
                  "./root": () => Promise.all([r.e(2176), r.e(1780), r.e(1127), r.e(9623), r.e(306), r.e(5966), r.e(3149), r.e(7371)]).then((() => () => r(29896)))
                },
                t = (e, a) => (r.R = a, a = r.o(d, e) ? d[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), r.R = void 0, a),
                c = (e, a) => {
                  if (r.S) {
                    var d = "default",
                      t = r.S[d];
                    if (t && t !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return r.S[d] = e, r.I(d, a)
                  }
                };
              r.d(a, {
                get: () => t,
                init: () => c
              })
            }
          },
          n = {};

        function b(e) {
          var a = n[e];
          if (void 0 !== a) return a.exports;
          var r = n[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return o[e].call(r.exports, r, r.exports, b), r.loaded = !0, r.exports
        }
        return b.m = o, b.c = n, b.y = a, b.amdO = {}, b.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return b.d(a, {
            a
          }), a
        }, r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, b.t = function(a, d) {
          if (1 & d && (a = this(a)), 8 & d) return a;
          if ("object" == typeof a && a) {
            if (4 & d && a.__esModule) return a;
            if (16 & d && "function" == typeof a.then) return a
          }
          var t = Object.create(null);
          b.r(t);
          var c = {};
          e = e || [null, r({}), r([]), r(r)];
          for (var f = 2 & d && a;
            "object" == typeof f && !~e.indexOf(f); f = r(f)) Object.getOwnPropertyNames(f).forEach((e => c[e] = () => a[e]));
          return c.default = () => a, b.d(t, c), t
        }, b.d = (e, a) => {
          for (var r in a) b.o(a, r) && !b.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: a[r]
          })
        }, b.f = {}, b.e = e => Promise.all(Object.keys(b.f).reduce(((a, r) => (b.f[r](e, a), a)), [])), b.u = e => "js/" + {
          131: "ec31b5c37f27db4d1336ef27277f84ae",
          278: "c63f29b5f77535759eb7e8d1fb7d2b67",
          299: "6f25d3532e9b14ce80b373071e1433e7",
          314: "bfa929b230e11883631984f21b2aaae8",
          621: "e8437d75ad627e63646b119e7f9783c3",
          656: "6e5e551dd19e7ac5982a648806d77ad1",
          662: "6653d8a4fb8bd32b6fff92cf06aff211",
          823: "ff7ce7033080aa4ecdda9fdef57c7f4e",
          824: "37ce8d715a1b03012db059a080918797",
          838: "c6bce4ec2068a4d8365d354f66639336",
          907: "f2833d20281edc995abf020a4278671d",
          1054: "074e0d458ed9493ffcc86b282c3f0964",
          1242: "df85566672d67d4a9fa2dc87c63f4c0c",
          1280: "cc85a43b26843fc617ceb53012c4a24a",
          1381: "fd3f644c6e0b737b185fd3410977da31",
          1693: "e5151386257953084c81029da2ac249d",
          1780: "add8d4eb05fcf0854cdbdbf22a780c2f",
          1822: "a2cbdf453e4a6a6a5d62a7dd83ef9498",
          1868: "9203eb8f075b5cc2860060c67d35329e",
          2156: "00c795d9a7543141e08409641e497da6",
          2171: "91023e7d5a8dfd0ebabadc35c229f005",
          2176: "a48cf791941c49c21ee74588982e830b",
          2221: "d100ddd26c2f7726e6ae417e46ca0212",
          2243: "a552a993d005ed5f1bec09c02a3c7b32",
          2347: "1c8c90569ed41781828337bb67173119",
          2365: "cdeca98485d05a985519a476a8467533",
          2398: "5888c24f7ab72e7895b6bd4666dcb325",
          2466: "7d3d5e93c8e3c16265bedf47e2f89344",
          2578: "d53566083ece587e31636f2fc50b2029",
          2642: "3338b9c48a91c29ee0bc17dc9fc0566e",
          2678: "3a05533b062e26ca886ef35517c7b94f",
          2864: "45b89e19722e74ed2564591372307340",
          3002: "158dd5856bbd1524b1bb6dddec0a58bb",
          3034: "3cfbbbdcedfdac26f21dd8d4e96c3219",
          3041: "3d4ffa43aaef440072ad55a73ca83f1e",
          3149: "ffe81cb0f8ae305867f732e93e2bb2cc",
          3197: "0e14ddf7c52e349911c47066baa0c674",
          3218: "5e0b75588ead6ea2a3c54b0bd4dc6d68",
          3343: "1b329d5b5d7e4e5940265fab9c02d2d0",
          3370: "58db31ea10fcd5435cc2ff246a7c6b08",
          3475: "0f90977074e8b7c1a5a964ef80b056dc",
          3486: "dd63b5f5c6c72a327ea401c8f9ebb4cd",
          3586: "006da7e49ddf629375511fe59004c932",
          3663: "c8930907152b702ea041fb4612e51b96",
          3672: "39c9b9064771cef12aae7fc02a5c44c2",
          3697: "0e134aeb38092aadf56bd5a151d4daf8",
          3885: "b5f6a3fd9da8e935da85933384088672",
          3941: "0ba20540e243c5158195f05064685fa8",
          4011: "a3bcdb4883f7d5cf765160f4647bf3e0",
          4105: "17fa8c82e59f272b056a1de3ff9797cf",
          4153: "0a8f0a1ff7c5d3d1e6315db6aaa812ce",
          4480: "4c975d30004bbf53aa16a78fc45c3108",
          4528: "3c8741caa5a5f23fb3d8c6aee2df10d9",
          4621: "0b7d9690f8466d43a95fffd4bc67ad21",
          4684: "185f40090f0a79716a58fef8c5a9a20c",
          4700: "3c87bc9818aa0eee94ce595ffd88360c",
          4710: "7ff9c732b63c633d9b96165acacc7e3c",
          4731: "ae93504eff44ab8b08b29be227f3c5b4",
          4799: "41de3ad3d8a01a0f939bc0c4152e811c",
          4851: "c6dc038a5a07cf8d078180fe1f831cbe",
          4861: "4a756ae26737cf74ca96d8f6ad841043",
          4913: "5cb71e1dce77cfc7a23d86431ad830b1",
          5018: "16842311cf0509cf4292ebdc48aa259b",
          5233: "b45651001f170a94be106646ebd5a127",
          5259: "cb3e5477e664005693068503a42e2661",
          5422: "723da0709bf5076f0bd97a212d35fccd",
          5530: "fa725b11209b0274a65f78d7114b3891",
          5639: "e42aa9a51983c0ea9d9dda0b0951f436",
          5663: "65e38ac867c97fb3bc75d9a47d22cc34",
          5734: "98943e0cd9d2256f577bae14f7278813",
          5742: "2f201894ca71b300eb1f765c39b9b6a9",
          5830: "7679ebd197fad78cd16f8aef13267585",
          5832: "3e9210e5f83acebf879ca4815747bd1c",
          6267: "7452e7b8fe346971b39ce130ec56605f",
          6280: "08c7c79ff5dc5932bdd7551516eb31b4",
          6285: "c2314c9ed5a8ccc23b4eabe71fcec0b7",
          6361: "f0bd6d7848c6bb0211e16753ec8ee78f",
          6497: "7a7865a4138cb52f822eca7954b9032b",
          6664: "2d45e0691fc12ff3db23d5b73203ac1e",
          6879: "191fc79cc7916e231c0204967ab47873",
          6891: "5fa43b6c0b7adef64e1cc795869198b2",
          6997: "f8225d62832343e5dceac03eb0685ddb",
          7010: "a1aaa978a2722b0cad2ddb5d689d30c7",
          7073: "f4bdb506f8ac89c5af5e20c688d0df07",
          7353: "e22638401d151b273161746fe030eb93",
          7371: "3cccfecbeadc7d542e4ac39357b6f1eb",
          7436: "8fa478cef8743e94933113ee261f7a7b",
          7452: "379f9de622324c7a7414a55bb8a3fbb3",
          7453: "cb00afe43c198ba95d36a2d5ae92fb3d",
          7559: "941bd041b1ec3782608d51191f1edd51",
          7609: "d4c3d24ebedc1e7d834cc1012b75342e",
          7709: "b8516fb5d93ab2f9be2bb8b371799754",
          7727: "a8eda123eb6019cf42ad54460c5384e4",
          7893: "0701edd77f5b47560e4f365ecd189df5",
          7895: "5fddf27c1d1317b5eb0baa39acb6da8a",
          7926: "a8e4509f1a551ec1287d7e7c155eabb6",
          7970: "bb111ae69e43e9b2fc924b8c9a087844",
          8272: "a8f809f4ab171e8c378b302d5bccc820",
          8275: "1f7122d5659b5408af2f93a197c00275",
          8391: "3e40493dfbbf4714327482c03a83e69e",
          8457: "274f8016f2de58deba99e19ebd5edc7a",
          8557: "61104507646d658fd9a0d086e59aa1f2",
          8654: "bfcc04e12017caf93ebfcce892c877d1",
          8755: "54a0d9ca018a7cb859470d24c0abf5a9",
          8880: "cfa12cd36038ddf2517bdebee6280a2e",
          8965: "66741e153887046d58bdde0d9b91cff9",
          8970: "de550e6f306afd0aa789183961cd32a3",
          8994: "5328ddb60971e987d87a54e1afe6e70e",
          9022: "5fcef88c9d02f97dd460dee39c65cda6",
          9028: "e51201b995fb765b6bd204905bbb5849",
          9090: "28793ffe7717560e29cf6d79f4f0dab9",
          9126: "fd5783b983df364f2233c88990340dae",
          9377: "a1b13448aff2b4090f09205142b85a97",
          9583: "7180e49c8736b31b2e97999a4a81d97b",
          9615: "e16d9fe705d19977f511b8426f38489d",
          9649: "46ecd270f0bd8e88cc7a00a119da1b4b",
          9936: "6b1b97c52425db30d94a622db45c2989",
          9990: "9fb08290e5eea6add0cf0101154c6327"
        } [e] + ".js", b.miniCssF = e => "css/" + {
          749: "450cc2b1c47be1e723f0b0d53ea4743d",
          1693: "2cea1bcb34a42ce8379d8e653c4c4f66",
          2176: "cea1a81b81d394e799ca4dbdb9603b59",
          7371: "1b6a05f8cdb2244907347e6834e933b8",
          7926: "f1da5b48170e8eff07c31868b9c22f2e"
        } [e] + ".css", b.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), b.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), d = {}, t = "@rockstargames/modules-core-footer:", b.l = (e, a, r, c) => {
          if (d[e]) d[e].push(a);
          else {
            var f, o;
            if (void 0 !== r)
              for (var n = document.getElementsByTagName("script"), i = 0; i < n.length; i++) {
                var s = n[i];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == t + r) {
                  f = s;
                  break
                }
              }
            f || (o = !0, (f = document.createElement("script")).charset = "utf-8", f.timeout = 120, b.nc && f.setAttribute("nonce", b.nc), f.setAttribute("data-webpack", t + r), f.src = e), d[e] = [a];
            var l = (a, r) => {
                f.onerror = f.onload = null, clearTimeout(u);
                var t = d[e];
                if (delete d[e], f.parentNode && f.parentNode.removeChild(f), t && t.forEach((e => e(r))), a) return a(r)
              },
              u = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: f
              }), 12e4);
            f.onerror = l.bind(null, f.onerror), f.onload = l.bind(null, f.onload), o && document.head.appendChild(f)
          }
        }, b.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, b.nmd = e => (e.paths = [], e.children || (e.children = []), e), c = {}, f = {}, b.f.remotes = (e, a) => {
          b.o(c, e) && c[e].forEach((e => {
            var r = b.R;
            r || (r = []);
            var d = f[e];
            if (!(r.indexOf(d) >= 0)) {
              if (r.push(d), d.p) return a.push(d.p);
              var t = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + d[1] + '" from ' + d[2]), b.m[e] = () => {
                    throw a
                  }, d.p = 0
                },
                c = (e, r, c, f, o, n) => {
                  try {
                    var b = e(r, c);
                    if (!b || !b.then) return o(b, f, n);
                    var i = b.then((e => o(e, f)), t);
                    if (!n) return i;
                    a.push(d.p = i)
                  } catch (e) {
                    t(e)
                  }
                },
                o = (e, a, t) => c(a.get, d[1], r, 0, n, t),
                n = a => {
                  d.p = 1, b.m[e] = e => {
                    e.exports = a()
                  }
                };
              c(b, d[2], 0, 0, ((e, a, r) => e ? c(b.I, d[0], 0, e, o, r) : t()), 1)
            }
          }))
        }, (() => {
          b.S = {};
          var e = {},
            a = {};
          b.I = (r, d) => {
            d || (d = []);
            var t = a[r];
            if (t || (t = a[r] = {}), !(d.indexOf(t) >= 0)) {
              if (d.push(t), e[r]) return e[r];
              b.o(b.S, r) || (b.S[r] = {});
              var c = b.S[r],
                f = "@rockstargames/modules-core-footer",
                o = (e, a, r, d) => {
                  var t = c[e] = c[e] || {},
                    o = t[a];
                  (!o || !o.loaded && (!d != !o.eager ? d : f > o.from)) && (t[a] = {
                    get: r,
                    from: f,
                    eager: !!d
                  })
                },
                n = [];
              return "default" === r && (o("@foundry/react", "4.1.5", (() => Promise.all([b.e(7609), b.e(7559), b.e(2176), b.e(1780), b.e(7926), b.e(1127), b.e(2957), b.e(306), b.e(8429)]).then((() => () => b(22875))))), o("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([b.e(7559), b.e(3218), b.e(1127), b.e(838)]).then((() => () => b(35671))))), o("@rsgweb/modules-core-user-action-menu", "0.0.0", (() => Promise.all([b.e(8994), b.e(7609), b.e(1780), b.e(1127), b.e(6497), b.e(9623), b.e(2957), b.e(5966), b.e(1693), b.e(3149), b.e(749)]).then((() => () => b(90660))))), o("@rsgweb/rockstar-account", "0.0.0", (() => Promise.all([b.e(8994), b.e(7709), b.e(1127), b.e(6497), b.e(9623), b.e(5966), b.e(9090)]).then((() => () => b(57895))))), o("@rsgweb/utils", "1.0.0", (() => Promise.all([b.e(8994), b.e(1127), b.e(6497), b.e(9623), b.e(8965)]).then((() => () => b(79819))))), o("react-dom", "18.3.1", (() => Promise.all([b.e(3663), b.e(1127)]).then((() => () => b(53663))))), o("react-dom", "19.1.0", (() => Promise.all([b.e(1127), b.e(5422)]).then((() => () => b(65422))))), o("react-dom", "19.1.0", (() => Promise.all([b.e(1127), b.e(8275)]).then((() => () => b(78275))))), o("react-dom", "19.1.0", (() => Promise.all([b.e(1127), b.e(9649)]).then((() => () => b(19649))))), o("react-dom", "19.1.0", (() => Promise.all([b.e(1127), b.e(621)]).then((() => () => b(90621))))), o("react-router-dom", "6.30.0", (() => Promise.all([b.e(4105), b.e(1127), b.e(2127)]).then((() => () => b(94105))))), o("react", "18.3.1", (() => b.e(8654).then((() => () => b(98654)))))), e[r] = n.length ? Promise.all(n).then((() => e[r] = 1)) : 1
            }
          }
        })(), (() => {
          var e;
          b.g.importScripts && (e = b.g.location + "");
          var a = b.g.document;
          if (!e && a && (a.currentScript && "SCRIPT" === a.currentScript.tagName.toUpperCase() && (e = a.currentScript.src), !e)) {
            var r = a.getElementsByTagName("script");
            if (r.length)
              for (var d = r.length - 1; d > -1 && (!e || !/^http(s?):/.test(e));) e = r[d--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), b.p = e
        })(), (() => {
          var e = e => {
              var a = e => e.split(".").map((e => +e == e ? +e : e)),
                r = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                d = r[1] ? a(r[1]) : [];
              return r[2] && (d.length++, d.push.apply(d, a(r[2]))), r[3] && (d.push([]), d.push.apply(d, a(r[3]))), d
            },
            a = (a, r) => {
              a = e(a), r = e(r);
              for (var d = 0;;) {
                if (d >= a.length) return d < r.length && "u" != (typeof r[d])[0];
                var t = a[d],
                  c = (typeof t)[0];
                if (d >= r.length) return "u" == c;
                var f = r[d],
                  o = (typeof f)[0];
                if (c != o) return "o" == c && "n" == o || "s" == o || "u" == c;
                if ("o" != c && "u" != c && t != f) return t < f;
                d++
              }
            },
            r = e => {
              var a = e[0],
                d = "";
              if (1 === e.length) return "*";
              if (a + .5) {
                d += 0 == a ? ">=" : -1 == a ? "<" : 1 == a ? "^" : 2 == a ? "~" : a > 0 ? "=" : "!=";
                for (var t = 1, c = 1; c < e.length; c++) t--, d += "u" == (typeof(o = e[c]))[0] ? "-" : (t > 0 ? "." : "") + (t = 2, o);
                return d
              }
              var f = [];
              for (c = 1; c < e.length; c++) {
                var o = e[c];
                f.push(0 === o ? "not(" + n() + ")" : 1 === o ? "(" + n() + " || " + n() + ")" : 2 === o ? f.pop() + " " + f.pop() : r(o))
              }
              return n();

              function n() {
                return f.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            d = (a, r) => {
              if (0 in a) {
                r = e(r);
                var t = a[0],
                  c = t < 0;
                c && (t = -t - 1);
                for (var f = 0, o = 1, n = !0;; o++, f++) {
                  var b, i, s = o < a.length ? (typeof a[o])[0] : "";
                  if (f >= r.length || "o" == (i = (typeof(b = r[f]))[0])) return !n || ("u" == s ? o > t && !c : "" == s != c);
                  if ("u" == i) {
                    if (!n || "u" != s) return !1
                  } else if (n)
                    if (s == i)
                      if (o <= t) {
                        if (b != a[o]) return !1
                      } else {
                        if (c ? b > a[o] : b < a[o]) return !1;
                        b != a[o] && (n = !1)
                      }
                  else if ("s" != s && "n" != s) {
                    if (c || o <= t) return !1;
                    n = !1, o--
                  } else {
                    if (o <= t || i < s != c) return !1;
                    n = !1
                  } else "s" != s && "n" != s && (n = !1, o--)
                }
              }
              var l = [],
                u = l.pop.bind(l);
              for (f = 1; f < a.length; f++) {
                var p = a[f];
                l.push(1 == p ? u() | u() : 2 == p ? u() & u() : p ? d(p, r) : !u())
              }
              return !!u()
            },
            t = (e, a) => e && b.o(e, a),
            c = e => (e.loaded = 1, e.get()),
            f = e => Object.keys(e).reduce(((a, r) => (e[r].eager && (a[r] = e[r]), a)), {}),
            o = e => {
              throw new Error(e)
            },
            n = e => function(a, r, d, t, c) {
              var f = b.I(a);
              return f && f.then && !d ? f.then(e.bind(e, a, b.S[a], r, !1, t, c)) : e(a, b.S[a], r, d, t, c)
            },
            i = (e, a, r) => r ? r() : ((e, a) => o("Shared module " + a + " doesn't exist in shared scope " + e))(e, a),
            s = n(((e, n, b, s, l, u) => {
              if (!t(n, b)) return i(e, b, u);
              var p = ((e, r, t, c) => {
                var o = c ? f(e[r]) : e[r];
                return (r = Object.keys(o).reduce(((e, r) => !d(t, r) || e && !a(e, r) ? e : r), 0)) && o[r]
              })(n, b, l, s);
              return p ? c(p) : u ? u() : void o(((e, a, d, t, c) => {
                var f = e[d];
                return "No satisfying version (" + r(t) + ")" + (c ? " for eager consumption" : "") + " of shared module " + d + " found in shared scope " + a + ".\nAvailable versions: " + Object.keys(f).map((e => e + " from " + f[e].from)).join(", ")
              })(n, e, b, l, s))
            })),
            l = n(((e, o, n, b, s, l) => {
              if (!t(o, n)) return i(e, n, l);
              var u, p = ((e, r, d) => {
                var t = d ? f(e[r]) : e[r];
                return Object.keys(t).reduce(((e, r) => !e || !t[e].loaded && a(e, r) ? r : e), 0)
              })(o, n, b);
              return d(s, p) || (u = ((e, a, d, t) => "Unsatisfied version " + d + " from " + (d && e[a][d].from) + " of shared singleton module " + a + " (required " + r(t) + ")")(o, n, p, s), "undefined" != typeof console && console.warn && console.warn(u)), c(o[n][p])
            })),
            u = {},
            p = {
              71127: () => l("default", "react", !1, [1, 18, 2, 0], (() => b.e(8654).then((() => () => b(98654))))),
              9623: () => s("default", "react-router-dom", !1, [1, 6, 11, 2], (() => Promise.all([b.e(4105), b.e(2127)]).then((() => () => b(94105))))),
              30306: () => l("default", "react-dom", !1, [1, 18, 2, 0], (() => b.e(3041).then((() => () => b(65422))))),
              95966: () => s("default", "@rsgweb/utils", !1, [1, "workspace:^"], (() => Promise.all([b.e(8994), b.e(6497)]).then((() => () => b(79819))))),
              2918: () => s("default", "@rsgweb/rockstar-account", !1, [1, "workspace:^"], (() => Promise.all([b.e(8994), b.e(7709), b.e(6497), b.e(7895)]).then((() => () => b(57895))))),
              61898: () => s("default", "@foundry/react", !1, [1, 4, 1, 5], (() => Promise.all([b.e(7609), b.e(7559), b.e(2176), b.e(7926), b.e(2957), b.e(306), b.e(8429)]).then((() => () => b(22875))))),
              81788: () => s("default", "@rsgweb/locale-tools", !1, [1, "workspace:^"], (() => Promise.all([b.e(7559), b.e(3218), b.e(8457)]).then((() => () => b(35671))))),
              20270: () => s("default", "@rsgweb/modules-core-user-action-menu", !1, [1, "workspace:^"], (() => Promise.all([b.e(8994), b.e(7609), b.e(6497), b.e(2957), b.e(1693)]).then((() => () => b(90660))))),
              52957: () => l("default", "react-dom", !1, [1, 18, 2, 0], (() => b.e(656).then((() => () => b(78275))))),
              18429: () => l("default", "react-dom", !1, [1, 18, 2, 0], (() => b.e(3663).then((() => () => b(53663))))),
              22127: () => l("default", "react-dom", !1, [1, 18, 2, 0], (() => b.e(3002).then((() => () => b(90621)))))
            },
            h = {
              306: [30306],
              1127: [71127],
              2127: [22127],
              2957: [52957],
              3149: [2918, 61898, 81788],
              5966: [95966],
              7371: [20270],
              8429: [18429],
              9623: [9623]
            },
            m = {};
          b.f.consumes = (e, a) => {
            b.o(h, e) && h[e].forEach((e => {
              if (b.o(u, e)) return a.push(u[e]);
              if (!m[e]) {
                var r = a => {
                  u[e] = 0, b.m[e] = r => {
                    delete b.c[e], r.exports = a()
                  }
                };
                m[e] = !0;
                var d = a => {
                  delete u[e], b.m[e] = r => {
                    throw delete b.c[e], a
                  }
                };
                try {
                  var t = p[e]();
                  t.then ? a.push(u[e] = t.then(r).catch(d)) : r(t)
                } catch (e) {
                  d(e)
                }
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              417: 0
            };
            b.f.miniCss = (a, r) => {
              e[a] ? r.push(e[a]) : 0 !== e[a] && {
                749: 1,
                1693: 1,
                2176: 1,
                7371: 1,
                7926: 1
              } [a] && r.push(e[a] = (e => new Promise(((a, r) => {
                var d = b.miniCssF(e),
                  t = b.p + d;
                if (((e, a) => {
                    for (var r = document.getElementsByTagName("link"), d = 0; d < r.length; d++) {
                      var t = (f = r[d]).getAttribute("data-href") || f.getAttribute("href");
                      if ("stylesheet" === f.rel && (t === e || t === a)) return f
                    }
                    var c = document.getElementsByTagName("style");
                    for (d = 0; d < c.length; d++) {
                      var f;
                      if ((t = (f = c[d]).getAttribute("data-href")) === e || t === a) return f
                    }
                  })(d, t)) return a();
                ((e, a, r, d, t) => {
                  var c = document.createElement("link");
                  c.rel = "stylesheet", c.type = "text/css", b.nc && (c.nonce = b.nc), c.onerror = c.onload = r => {
                    if (c.onerror = c.onload = null, "load" === r.type) d();
                    else {
                      var f = r && r.type,
                        o = r && r.target && r.target.href || a,
                        n = new Error("Loading CSS chunk " + e + " failed.\n(" + f + ": " + o + ")");
                      n.name = "ChunkLoadError", n.code = "CSS_CHUNK_LOAD_FAILED", n.type = f, n.request = o, c.parentNode && c.parentNode.removeChild(c), t(n)
                    }
                  }, c.href = a, document.head.appendChild(c)
                })(e, t, 0, a, r)
              })))(a).then((() => {
                e[a] = 0
              }), (r => {
                throw delete e[a], r
              })))
            }
          }
        })(), (() => {
          var e = {
            417: 0
          };
          b.f.j = (a, r) => {
            var d = b.o(e, a) ? e[a] : void 0;
            if (0 !== d)
              if (d) r.push(d[2]);
              else if (/^(([12]12|295)7|306|5966|749|8429|9623)$/.test(a)) e[a] = 0;
            else {
              var t = new Promise(((r, t) => d = e[a] = [r, t]));
              r.push(d[2] = t);
              var c = b.p + b.u(a),
                f = new Error;
              b.l(c, (r => {
                if (b.o(e, a) && (0 !== (d = e[a]) && (e[a] = void 0), d)) {
                  var t = r && ("load" === r.type ? "missing" : r.type),
                    c = r && r.target && r.target.src;
                  f.message = "Loading chunk " + a + " failed.\n(" + t + ": " + c + ")", f.name = "ChunkLoadError", f.type = t, f.request = c, d[1](f)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, r) => {
              var d, t, c = r[0],
                f = r[1],
                o = r[2],
                n = 0;
              if (c.some((a => 0 !== e[a]))) {
                for (d in f) b.o(f, d) && (b.m[d] = f[d]);
                o && o(b)
              }
              for (a && a(r); n < c.length; n++) t = c[n], b.o(e, t) && e[t] && e[t][0](), e[t] = 0
            },
            r = self.webpackChunk_rockstargames_modules_core_footer = self.webpackChunk_rockstargames_modules_core_footer || [];
          r.forEach(a.bind(null, 0)), r.push = a.bind(null, r.push.bind(r))
        })(), b.nc = void 0, b(44857), b(98478)
      })())
    }
  }
}));