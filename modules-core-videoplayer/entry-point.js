! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      a = (new e.Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "bcda7b96-c4dc-4eb9-9fcc-ab8ace8b056d", e._sentryDebugIdIdentifier = "sentry-dbid-bcda7b96-c4dc-4eb9-9fcc-ab8ace8b056d")
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
          19: "9652d3392de32ac29fb86dbae05d9f92",
          131: "63c1b792ce3bcb811c47fe82abeb1338",
          276: "830b687b193312a44db21fdb7f3d8e37",
          278: "e23a7423dd75643b6f8b859c38840780",
          299: "5b58cce415a856a662b16dd329755fe7",
          314: "863a5580182054e0e5be3ca11e245c70",
          621: "f5117e4cbf5a7f6cc22a07da1d64bea6",
          662: "ac436338504e5e05d4c324602470a5e1",
          824: "5bbe957b49afaa4e45bf57b9946dedaf",
          838: "20f4e89ea2147a261a956d7e8ac149e2",
          907: "ca8084a7c794bfd5485f24f55fb1c0a2",
          964: "ffd2ba018629f14545a0f490a095d346",
          1054: "bd18f2222a6792b00a57d9d940dac292",
          1120: "638894876f78e181b9fd5b292803d3d5",
          1242: "6ed8171092be673ae5ac1537c12a8452",
          1342: "31b5f93b06a545451b68f662fe7711f0",
          1563: "050cf9d93fe6853b022f0f90792d3356",
          1822: "74bc5d213fa4ca3bde4b52575c7bdbd5",
          1868: "93a78896a15390a86e30b80679ceba88",
          2156: "8c75e9a1eac566e1db97d820cb16cca7",
          2171: "ca0cbcfc65783cac38143318d5f34e52",
          2221: "98ff08d427995b7be8a8a3c35b92846f",
          2243: "68c9c5e4045394b645afaf801aa2a868",
          2347: "1d6e42868d4509c3925191f99590eff9",
          2365: "3e8a8d037e038a3c8daea460b6440d4b",
          2398: "8215f016eed141225ad2a5c2cbb9b9ae",
          2400: "f87bac715cf05086a7acf9b3289b579e",
          2466: "5b826806200063adc442d87323b75eb6",
          2642: "c0091642636751d7ab6848627d88013d",
          2678: "07986428991f1f830d3981a94d527e66",
          2864: "4061d443e3d758db1666f983bf8c51f8",
          3002: "3a1e991113cbf3c8722eacb23287fb1f",
          3034: "972b3264179e65d33433a39f9d7648f0",
          3197: "b992fe67774f6e2994b4fddf579c449e",
          3218: "2047c4b1d4e57b0b51a72348288eb4b6",
          3222: "664be449e44d573ed4e9b7361ea19dd9",
          3343: "e976e6f8155e9146ffe18c0f8cfbbe66",
          3370: "b7d9b004689e0ce338ec00a960750ddc",
          3475: "e948ec5b076d26f3b5d5adf09815fb1a",
          3486: "ad6c29b232acb7a8a49e6acbbde783a6",
          3663: "4b6d386ed2f65409965ab1adebdb9325",
          3697: "9e480976cda5416f9ce7be5c94cc7afb",
          3736: "59c62ee41c0e6f6c7348e50301777413",
          3885: "fd95cf63db14fb59cdea2bf929720957",
          3941: "776772476b7dcf6407a83fea902cb2dd",
          4011: "7879b75f7f32f85dd935edbf156b9b0b",
          4105: "3d6f13a16af15ab69bda129da672617a",
          4309: "1be624b93157d32dba0e1326d8fef671",
          4444: "ef653478883cf77590d3b577454e2212",
          4480: "9960670f269fdb523dbed63c99de16f4",
          4528: "3bbe138305d23ac97a95cf51197e9830",
          4546: "1aca190ee9fdfef31e8d1fbfc4c5523e",
          4621: "f7816c544916fddf1851d324b6e893bf",
          4700: "d6289824eb45b316b6c242473e32f6c9",
          4710: "892bf736ea7635845bd727dbe1abdb58",
          4731: "408fb86340d0906571da3173d0b6363e",
          4733: "db0507b77c1d5717c3663f8d20e40f4a",
          4799: "67b8f4674bd578f7972557318e6915c3",
          4851: "2b8e62bacc74950c46a26fae5fc9b0de",
          4861: "7ac5102614d594c0a86a4ebd223cb890",
          4913: "9d7b06f1e0f27bff783992c254b117bd",
          4981: "8efc1335adace643e3aceac78d1dcee7",
          5018: "c8ae8cf2eea1d1d906b7a0f379e295cc",
          5233: "a16b0617244f443dd3af80894512f0ac",
          5259: "ef2a498d46be4d01f0dc2c2e9aef1c26",
          5265: "640cebffb5d6f0050604f2c878e43354",
          5530: "bf5da749bc0c5fca8e8d2c0805a81871",
          5639: "6f4fe6afcb84e0a586baf06f24804a4b",
          5663: "e9401ad196546af71b902e0d92da1a20",
          5742: "ed8da04bc4a39ce64811c1da99226fd2",
          5790: "ada3bbc8f9d0b5dd26ae689acb804f98",
          5830: "28a5b2ee9df4e68bea79e3417ef0e356",
          5832: "798eadec2756f65e7164bbe02f5c0e81",
          5854: "eb1f8685abb7ea14896c76ac4b7ee4fa",
          6018: "f0202d6e1e5d049f672d61a05b59cc67",
          6267: "ad75adb8843d082070fb6259836002d7",
          6280: "5807bc34d1f8c66101be68c0a1fc1a10",
          6285: "83b416b8127426a94929c9d0bb6afc77",
          6361: "a5a43e056cd08461790ccbdc33d9605f",
          6399: "11f7b5281631281161ab9c896d9c40dd",
          6664: "de549794765ba284cc51051c13790a3b",
          6879: "ef587a4bfa35a5378af14795a2c060c1",
          6891: "88d8f2c2578dcaa1bcce052320f030d8",
          6997: "7ef5951616bfec717388f0440cdc7a7e",
          7010: "df7c275020b0403eba3cb088fd600fc7",
          7073: "77c609699634a9feacbc416bfe7a9f33",
          7114: "fb95f49f23b2549b79ec93af01e3d7af",
          7353: "d45a341ba20059c8608c6474cc6bd99c",
          7436: "f4da40a71510d6c694427f50bdf70043",
          7452: "ce55417ffcea1f35197e23476c616a92",
          7453: "a3a0a02dcb1546caaf0d6d27e37c0920",
          7706: "a105504ac49b197dbddb57328370ed2d",
          7895: "dedb5bca153436ef8cfb6881fa95f291",
          7970: "7e771a5fad0fc3ae41a2fd09dcdb9bcd",
          8272: "09f66bc6bba50cb957790878050fad84",
          8376: "76480a6104ea1a71d1c44cd29fc6efe8",
          8391: "9d77448b59276c87a527a8d963a42281",
          8457: "f4d77302df72736ddb0b5b346e5bfb27",
          8583: "cdee71d60e1c623c03d604373e04e142",
          8654: "f3cbf2bf92f43ff0e2377edefc0f2b43",
          8659: "c08a8a73d7500e3ed1c217014dc911d7",
          8728: "1ba0782a4875a2f58d4293eb936c8461",
          8755: "f9cb970ae3e3e49a84c0662a31348fcb",
          8880: "5ab88bdf1de19430fe2c687aa1e06200",
          8970: "ceb66723db07682a3629255ae43bdda2",
          9022: "a7ca8bfc45987a9c57b9b446cd7f7ae5",
          9028: "5dd9a6ce9f0c6ad8a37d4e1383196706",
          9126: "7bf71afd82cb3b1c54b9d0dea28e96c4",
          9377: "42e674411e1061741d94b1116896f953",
          9615: "7aab0cff95bcc5c86450ad8c64ea56eb",
          9936: "8c3b9d6d664a68bf1617519dfe686453",
          9990: "bf5075e8a221c627a8b3e36f3585f52b"
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