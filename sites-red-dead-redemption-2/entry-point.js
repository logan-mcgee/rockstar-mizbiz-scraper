try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "4ff0af25-6780-433d-9036-4c87fe5508cf", e._sentryDebugIdIdentifier = "sentry-dbid-4ff0af25-6780-433d-9036-4c87fe5508cf")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-red-dead-redemption-2",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/modules-core-videoplayer"], function(e, a) {
  var r = {};
  return Object.defineProperty(r, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      r.default = e.default || e, Object.keys(e).forEach(function(a) {
        r[a] = e[a]
      })
    }],
    execute: function() {
      e((() => {
        var e, t, d, c, f, n, o = {
            20154(e, a, r) {
              (0, r(89160).w)(1)
            },
            89160(e, a, r) {
              const t = r(51908).y;
              a.w = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = t(r.y.meta.url, e)
              }
            },
            35649(e, a, r) {
              r(20154)
            },
            51908(e, a, r) {
              a.y = function(e, a) {
                var r = document.createElement("a");
                r.href = e;
                for (var t = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, d = 0, c = t.length; d !== a && c >= 0;) "/" === t[--c] && d++;
                if (d !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + d + ") in the URL path " + e);
                var f = t.slice(0, c + 1);
                return r.protocol + "//" + r.host + f
              };
              Number.isInteger
            },
            85819(e, a, r) {
              "use strict";
              var t = {
                  "./index": () => Promise.all([r.e(9512), r.e(4597), r.e(5684), r.e(5959), r.e(3374), r.e(7033), r.e(8925), r.e(3082), r.e(4017), r.e(5997), r.e(1270), r.e(7892), r.e(1389)]).then(() => () => r(11389))
                },
                d = (e, a) => (r.R = a, a = r.o(t, e) ? t[e]() : Promise.resolve().then(() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                }), r.R = void 0, a),
                c = (e, a) => {
                  if (r.S) {
                    var t = "default",
                      d = r.S[t];
                    if (d && d !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return r.S[t] = e, r.I(t, a)
                  }
                };
              r.d(a, {
                get: () => d,
                init: () => c
              })
            },
            25136(e) {
              "use strict";
              e.exports = r
            }
          },
          b = {};

        function i(e) {
          var a = b[e];
          if (void 0 !== a) return a.exports;
          var r = b[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return o[e].call(r.exports, r, r.exports, i), r.loaded = !0, r.exports
        }
        return i.m = o, i.c = b, i.y = a, i.amdO = {}, i.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return i.d(a, {
            a
          }), a
        }, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, i.t = function(a, r) {
          if (1 & r && (a = this(a)), 8 & r) return a;
          if ("object" == typeof a && a) {
            if (4 & r && a.__esModule) return a;
            if (16 & r && "function" == typeof a.then) return a
          }
          var d = Object.create(null);
          i.r(d);
          var c = {};
          e = e || [null, t({}), t([]), t(t)];
          for (var f = 2 & r && a;
            ("object" == typeof f || "function" == typeof f) && !~e.indexOf(f); f = t(f)) Object.getOwnPropertyNames(f).forEach(e => c[e] = () => a[e]);
          return c.default = () => a, i.d(d, c), d
        }, i.d = (e, a) => {
          for (var r in a) i.o(a, r) && !i.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: a[r]
          })
        }, i.f = {}, i.e = e => Promise.all(Object.keys(i.f).reduce((a, r) => (i.f[r](e, a), a), [])), i.u = e => "js/" + {
          131: "1a6df2de7a49ab064c3123a32a01c113",
          162: "451cd44762883a57deff47b5e187447a",
          194: "e9ad555cef792662587725428749ad2e",
          277: "783ed0a9873bc15dd975f63ce5c4c29c",
          278: "4577525926cce9e1deb72d7b82b10c04",
          299: "fe462c117ddf361f15c8cd2ff77c7ceb",
          312: "52e06b8fa5c5d4211dc3253cf54368c4",
          314: "58d2321ef816698dc33d72e226a238d4",
          662: "9f98e4284325111e7a006302f48f94ab",
          755: "52eb08a65394e121c60ea499b50beeac",
          824: "35304c83d595c3d2853d84c7643ed698",
          906: "752f03d21014a70d2a9689338d99dcb6",
          907: "756e0eafc63b87e67f2f131694b56fc0",
          951: "1b184f45b234423d402f5de921917b3b",
          1054: "a3c15f7a56037bce00752b6b88ed9744",
          1242: "b404ee7e2bb2660a2e53caa1df662d0b",
          1276: "91dec0c3ce803998d97d620840ffa185",
          1389: "8efbe68d24b8fd7b5fb34c4878ae36d0",
          1822: "d89ffb587f2288281815c0fa6c3f40c1",
          1868: "9a96bc4a28a079a93f162326065ed32c",
          2e3: "1b978fc6698d3c2cdf7b6c1a47f01105",
          2062: "f033cb222953fb6f13840626c41f21b3",
          2156: "effa9c5ebf9aa2a3f870e3f4efe305ce",
          2171: "9fc816d5f4daf721ea49d5d4a66e6b8b",
          2221: "7b63e265a1584a0d181c93ba14638214",
          2243: "aff82ba154a0b180d022f064c658b988",
          2347: "6bde7843c3b35f589b0b886797dd5683",
          2365: "3d6c1afe0a03421ad4e6b4abedd323f1",
          2398: "5e4fe8bdcf22fcc3d308e095a8659296",
          2466: "82a1baa620364ebfed8fbe4b05d66b5b",
          2497: "1a34547f546144f0f8d82b966feba632",
          2571: "5cadd28021ec64dc7f5c88169e5fefe6",
          2581: "ead90ef86154d61e9a9804be716139ad",
          2631: "ccce24846db90bdcce0f4fa1f241e36f",
          2642: "97dd304ca8d3a4b521407ddd385f9296",
          2678: "2eaa16cc8313ee79d5cca15539bc04c3",
          2680: "5d86ba30b60e0597134e96e9947b5f02",
          2864: "ed95176c549259b6339c4be2204406ef",
          3034: "a0a0519527bfcbbbf3c125c656f6a869",
          3197: "c1e8eac911c845824606af43a28fd610",
          3343: "636695df5fb4c0e84a121c1ab182fce4",
          3370: "b2c14135f96cdaadec8cabe07d2190af",
          3374: "6fc4d26f00bf189b83fa157b42dd9e19",
          3475: "c8446fbe71fe5171c6ee29f2ad01ad13",
          3486: "8d8b9d3ae4a6fba855642ab530c8ce4b",
          3694: "26bd02f2fc94566833b4160ce43797d4",
          3697: "f9e8e9b6025c101e686fa493c5426f79",
          3884: "34fec8f68ab3433b999d5e85a5c5e458",
          3885: "0a6a0c87a96bb563ede242bdae9920ce",
          3941: "de5328693eb6544c8a37e2e3bd565cd8",
          4011: "14eb45e58960468bd48ce303f7a49bff",
          4078: "462dcf6bb6172231a057e515d805a5c3",
          4269: "577f1d45345bf61f2bef6e708843dde6",
          4528: "6acb0ce8933e1702a38a9c4c114992fc",
          4537: "8ea9cdc4aa8f7be1aa88b208f1c1f42e",
          4597: "27d98efc56e4335c4d3ae0c2640c3b47",
          4621: "3c16acd2f86ecad8e73dea2f48e495af",
          4700: "acaa3ca7d6799d7b767bde4084813202",
          4710: "8e3d59902bbec5153a8f1be24f331096",
          4731: "5fe1950a14767f9c8cbd026675ef1a0e",
          4799: "b388d275c48acd912ac00384af79f9e7",
          4851: "e8b8afe8c57798ac9e2d000bae082cb4",
          4861: "ad4eb9c4fbf0b7f6755afbfce178615b",
          4913: "f6dfb0df0ed1d0e9b03c2603ac8f1474",
          4921: "6151243e684a8974ab72ef49e69e518f",
          5018: "bbb4673d93e2caa5d16280b00c03aae5",
          5056: "5ff4d4da12746da69fa9f39c292b9121",
          5233: "2d6f27b07d702cf284c9fab02724fe20",
          5259: "aae5f745a5a32468d4c72208795abdda",
          5519: "d68f172ead65a8634d5639283d717b84",
          5530: "44720912ea7cbd8b84ea79c9bd87bef0",
          5537: "fe3db9f42a0297f1bf9bc7af3fc945be",
          5639: "9047798530a407f613f64c6e695b4629",
          5663: "2cdb7af361c80caddd8c1c00f59ef6bb",
          5684: "5956467d4eaf442d513102b4f347d6a5",
          5742: "3102368141eee1d2cc47c024b42df65c",
          5830: "9d4ec8aba26e68fe6289a9044a8dff34",
          5832: "380271181dd46a7eea36b340e87003e8",
          5906: "71e2149014e8bf3abe45f538eecfaa17",
          5959: "53844d02b644ad35e2f4e499f95a51f9",
          5997: "8d2783843abc797b1f9d0cc9c8510a92",
          6048: "44bc7a76b8c518ee352539a827aca67d",
          6267: "e87e2017587877839c86161b6e08a082",
          6280: "c8ebfc49ad47a231a89ad593b9f12814",
          6285: "0686652cdd6b8a9c271aa337cb7a220d",
          6361: "c9454c5581f2a15be04ae8873325344f",
          6664: "4aab74611a84870309d65d310a6c29ba",
          6879: "1d84b7efdfc0b573ee1fa2b772982358",
          6891: "e9a9565eaeef41a705c9bab0e82e5860",
          6997: "fe5516771adcbc7c11221a215a10d6c2",
          7010: "5fb2f023b8deb6751c2ff9b7d740fc0b",
          7033: "f1471060cb5133e9bb803a87fae4fffe",
          7073: "2889f622f9031841ba61084626391cab",
          7436: "1e93bc1de2c923c86f7a6f0f54ad471f",
          7452: "70edccf922359837c9df60daebcdb76b",
          7453: "9f10e8e11a8bef5c262c0fb235d36299",
          7645: "3e865aec743f318a15225c3580e7447f",
          7813: "2e1317b417dea3574648f1858a18908c",
          7892: "651a7196014c0e20fd3c5d33389dd774",
          7970: "b76a80d7f03a07dad59dd61c6b73c0da",
          8272: "f215735b17d1a5df088d0db79c883390",
          8391: "9d374ac0a721761cb87bb05b7e60f7e2",
          8679: "8fbcc5d580f0db5a0c327ae6b58a4525",
          8683: "9724d8b19d2d947173b25dc3453ddcf7",
          8755: "9ee6fec008958749c8020c311fab8d8d",
          8880: "845d5a9c558e945ad553f9db4c8860d9",
          8925: "126ba2df986cf46c0893555953e20ae1",
          8970: "b821c64a6b3a08a694fd50207eb8da2f",
          9022: "a19e8bca41ceb82a1ba8dba2ddeda69a",
          9024: "2bbd7f24f1bc809fb9b1f056b0717cdb",
          9028: "5ab216d4cb4eaa86e38b26d7e18ae9ba",
          9126: "c0282b2a7b9240fa7e6719efd745ba9b",
          9377: "45b4c8a786869beb75b0b04979d11bfa",
          9512: "a787d94ab98d10c0b747d6e6ea312683",
          9615: "0f5391fee78948bcb285497a39589bb9",
          9936: "61006e4cb70906ee64ca187613b9b2ba",
          9990: "45e1db1598721e9ab03c14d41c47cbb1"
        } [e] + ".js", i.miniCssF = e => "css/" + {
          312: "7c575cc0a210038808b12a81bf37629b",
          1389: "9200a82bd73dcd2126a58ecad12612c8",
          2680: "68e10351293e1cb623f94152132387b0",
          3317: "7c575cc0a210038808b12a81bf37629b",
          5537: "68e10351293e1cb623f94152132387b0",
          9024: "9ba1aa5f40713c0eff7a8fa5c9e89c40"
        } [e] + ".css", i.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), i.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), d = {}, c = "@rockstargames/sites-red-dead-redemption-2:", i.l = (e, a, r, t) => {
          if (d[e]) d[e].push(a);
          else {
            var f, n;
            if (void 0 !== r)
              for (var o = document.getElementsByTagName("script"), b = 0; b < o.length; b++) {
                var s = o[b];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == c + r) {
                  f = s;
                  break
                }
              }
            f || (n = !0, (f = document.createElement("script")).charset = "utf-8", i.nc && f.setAttribute("nonce", i.nc), f.setAttribute("data-webpack", c + r), f.src = e), d[e] = [a];
            var l = (a, r) => {
                f.onerror = f.onload = null, clearTimeout(u);
                var t = d[e];
                if (delete d[e], f.parentNode && f.parentNode.removeChild(f), t && t.forEach(e => e(r)), a) return a(r)
              },
              u = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: f
              }), 12e4);
            f.onerror = l.bind(null, f.onerror), f.onload = l.bind(null, f.onload), n && document.head.appendChild(f)
          }
        }, i.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, i.nmd = e => (e.paths = [], e.children || (e.children = []), e), f = {
          1389: [31879]
        }, n = {
          31879: ["default", "./index", 25136]
        }, i.f.remotes = (e, a) => {
          i.o(f, e) && f[e].forEach(e => {
            var r = i.R;
            r || (r = []);
            var t = n[e];
            if (!(r.indexOf(t) >= 0)) {
              if (r.push(t), t.p) return a.push(t.p);
              var d = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + t[1] + '" from ' + t[2]), i.m[e] = () => {
                    throw a
                  }, t.p = 0
                },
                c = (e, r, c, f, n, o) => {
                  try {
                    var b = e(r, c);
                    if (!b || !b.then) return n(b, f, o);
                    var i = b.then(e => n(e, f), d);
                    if (!o) return i;
                    a.push(t.p = i)
                  } catch (e) {
                    d(e)
                  }
                },
                f = (e, a, d) => c(a.get, t[1], r, 0, o, d),
                o = a => {
                  t.p = 1, i.m[e] = e => {
                    e.exports = a()
                  }
                };
              c(i, t[2], 0, 0, (e, a, r) => e ? c(i.I, t[0], 0, e, f, r) : d(), 1)
            }
          })
        }, (() => {
          i.S = {};
          var e = {},
            a = {};
          i.I = (r, t) => {
            t || (t = []);
            var d = a[r];
            if (d || (d = a[r] = {}), !(t.indexOf(d) >= 0)) {
              if (t.push(d), e[r]) return e[r];
              i.o(i.S, r) || (i.S[r] = {});
              var c = i.S[r],
                f = "@rockstargames/sites-red-dead-redemption-2",
                n = (e, a, r, t) => {
                  var d = c[e] = c[e] || {},
                    n = d[a];
                  (!n || !n.loaded && (!t != !n.eager ? t : f > n.from)) && (d[a] = {
                    get: r,
                    from: f,
                    eager: !!t
                  })
                },
                o = [];
              return "default" === r && (n("@foundry/icons", "5.24.3", () => Promise.all([i.e(9512), i.e(5959), i.e(5906), i.e(3082), i.e(4017), i.e(1270), i.e(312)]).then(() => () => i(35906))), n("@foundry/react", "5.24.3", () => Promise.all([i.e(9512), i.e(2497), i.e(4597), i.e(5959), i.e(9024), i.e(3374), i.e(3082), i.e(4017), i.e(1270), i.e(1324)]).then(() => () => i(89024))), n("@rsgweb/locale-tools", "0.0.0", () => Promise.all([i.e(9512), i.e(2497), i.e(3082), i.e(7813)]).then(() => () => i(57813))), n("@rsgweb/modules-core-agegate", "0.0.0", () => Promise.all([i.e(4597), i.e(5684), i.e(7033), i.e(1276), i.e(3082), i.e(5997), i.e(7892), i.e(2680)]).then(() => () => i(299))), n("@rsgweb/utils", "0.0.0-development", () => Promise.all([i.e(9512), i.e(4597), i.e(5684), i.e(5519), i.e(3082), i.e(5997), i.e(6048)]).then(() => () => i(36048))), n("clsx", "2.1.1", () => i.e(4921).then(() => () => i(4921))), n("lodash", "4.18.1", () => i.e(2631).then(() => () => i(2631))), n("react-dom", "18.3.1", () => Promise.all([i.e(162), i.e(3082)]).then(() => () => i(30162))), n("react-router-dom", "6.30.3", () => Promise.all([i.e(4269), i.e(3082), i.e(4017)]).then(() => () => i(74269))), n("react", "18.3.1", () => i.e(2581).then(() => () => i(22581))), (() => {
                var e = e => {
                  return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                  var a
                };
                try {
                  var a = i(25136);
                  if (!a) return;
                  var d = e => e && e.init && e.init(i.S[r], t);
                  if (a.then) return o.push(a.then(d, e));
                  var c = d(a);
                  if (c && c.then) return o.push(c.catch(e))
                } catch (a) {
                  e(a)
                }
              })()), o.length ? e[r] = Promise.all(o).then(() => e[r] = 1) : e[r] = 1
            }
          }
        })(), (() => {
          var e;
          i.g.importScripts && (e = i.g.location + "");
          var a = i.g.document;
          if (!e && a && (a.currentScript && "SCRIPT" === a.currentScript.tagName.toUpperCase() && (e = a.currentScript.src), !e)) {
            var r = a.getElementsByTagName("script");
            if (r.length)
              for (var t = r.length - 1; t > -1 && (!e || !/^http(s?):/.test(e));) e = r[t--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), i.p = e
        })(), (() => {
          var e = e => {
              var a = e => e.split(".").map(e => +e == e ? +e : e),
                r = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                t = r[1] ? a(r[1]) : [];
              return r[2] && (t.length++, t.push.apply(t, a(r[2]))), r[3] && (t.push([]), t.push.apply(t, a(r[3]))), t
            },
            a = e => {
              var r = e[0],
                t = "";
              if (1 === e.length) return "*";
              if (r + .5) {
                t += 0 == r ? ">=" : -1 == r ? "<" : 1 == r ? "^" : 2 == r ? "~" : r > 0 ? "=" : "!=";
                for (var d = 1, c = 1; c < e.length; c++) d--, t += "u" == (typeof(n = e[c]))[0] ? "-" : (d > 0 ? "." : "") + (d = 2, n);
                return t
              }
              var f = [];
              for (c = 1; c < e.length; c++) {
                var n = e[c];
                f.push(0 === n ? "not(" + o() + ")" : 1 === n ? "(" + o() + " || " + o() + ")" : 2 === n ? f.pop() + " " + f.pop() : a(n))
              }
              return o();

              function o() {
                return f.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            r = (a, t) => {
              if (0 in a) {
                t = e(t);
                var d = a[0],
                  c = d < 0;
                c && (d = -d - 1);
                for (var f = 0, n = 1, o = !0;; n++, f++) {
                  var b, i, s = n < a.length ? (typeof a[n])[0] : "";
                  if (f >= t.length || "o" == (i = (typeof(b = t[f]))[0])) return !o || ("u" == s ? n > d && !c : "" == s != c);
                  if ("u" == i) {
                    if (!o || "u" != s) return !1
                  } else if (o)
                    if (s == i)
                      if (n <= d) {
                        if (b != a[n]) return !1
                      } else {
                        if (c ? b > a[n] : b < a[n]) return !1;
                        b != a[n] && (o = !1)
                      }
                  else if ("s" != s && "n" != s) {
                    if (c || n <= d) return !1;
                    o = !1, n--
                  } else {
                    if (n <= d || i < s != c) return !1;
                    o = !1
                  } else "s" != s && "n" != s && (o = !1, n--)
                }
              }
              var l = [],
                u = l.pop.bind(l);
              for (f = 1; f < a.length; f++) {
                var p = a[f];
                l.push(1 == p ? u() | u() : 2 == p ? u() & u() : p ? r(p, t) : !u())
              }
              return !!u()
            },
            t = (a, r, t) => {
              var d = t ? (e => Object.keys(e).reduce((a, r) => (e[r].eager && (a[r] = e[r]), a), {}))(a[r]) : a[r];
              return Object.keys(d).reduce((a, r) => !a || !d[a].loaded && ((a, r) => {
                a = e(a), r = e(r);
                for (var t = 0;;) {
                  if (t >= a.length) return t < r.length && "u" != (typeof r[t])[0];
                  var d = a[t],
                    c = (typeof d)[0];
                  if (t >= r.length) return "u" == c;
                  var f = r[t],
                    n = (typeof f)[0];
                  if (c != n) return "o" == c && "n" == n || "s" == n || "u" == c;
                  if ("o" != c && "u" != c && d != f) return d < f;
                  t++
                }
              })(a, r) ? r : a, 0)
            },
            d = (e, a, r) => r ? r() : ((e, a) => (e => {
              throw new Error(e)
            })("Shared module " + a + " doesn't exist in shared scope " + e))(e, a),
            c = (e => function(a, r, t, d, c) {
              var f = i.I(a);
              return f && f.then && !t ? f.then(e.bind(e, a, i.S[a], r, !1, d, c)) : e(a, i.S[a], r, t, d, c)
            })((e, c, f, n, o, b) => {
              if (!((e, a) => e && i.o(e, a))(c, f)) return d(e, f, b);
              var s, l, u = t(c, f, n);
              return r(o, u) || (l = ((e, r, t, d) => "Unsatisfied version " + t + " from " + (t && e[r][t].from) + " of shared singleton module " + r + " (required " + a(d) + ")")(c, f, u, o), "undefined" != typeof console && console.warn && console.warn(l)), (s = c[f][u]).loaded = 1, s.get()
            }),
            f = {},
            n = {
              93082: () => c("default", "react", !1, [0], () => i.e(2581).then(() => () => i(22581))),
              84017: () => c("default", "react-dom", !1, [1, 18, 2, 0], () => i.e(162).then(() => () => i(30162))),
              36416: () => c("default", "react-router-dom", !1, [0], () => Promise.all([i.e(4269), i.e(4017)]).then(() => () => i(74269))),
              42909: () => c("default", "@rsgweb/locale-tools", !1, [0], () => Promise.all([i.e(9512), i.e(2497), i.e(194)]).then(() => () => i(57813))),
              69646: () => c("default", "lodash", !1, [1, 4, 18, 1], () => i.e(2631).then(() => () => i(2631))),
              81270: () => c("default", "clsx", !1, [1, 2, 1, 1], () => i.e(4921).then(() => () => i(4921))),
              13331: () => c("default", "@rsgweb/utils", !1, [0], () => Promise.all([i.e(9512), i.e(5519), i.e(6048)]).then(() => () => i(36048))),
              30013: () => c("default", "@foundry/react", !1, [0], () => Promise.all([i.e(2497), i.e(9024), i.e(1324)]).then(() => () => i(89024))),
              87613: () => c("default", "@rsgweb/modules-core-agegate", !1, [0], () => Promise.all([i.e(1276), i.e(5537)]).then(() => () => i(299))),
              21324: () => c("default", "@foundry/icons", !1, [0], () => Promise.all([i.e(5906), i.e(3317)]).then(() => () => i(35906)))
            },
            o = {
              1270: [81270],
              1324: [21324],
              1389: [30013, 87613],
              3082: [93082],
              4017: [84017],
              5997: [36416, 42909, 69646],
              7892: [13331]
            },
            b = {};
          i.f.consumes = (e, a) => {
            i.o(o, e) && o[e].forEach(e => {
              if (i.o(f, e)) return a.push(f[e]);
              if (!b[e]) {
                var r = a => {
                  f[e] = 0, i.m[e] = r => {
                    delete i.c[e], r.exports = a()
                  }
                };
                b[e] = !0;
                var t = a => {
                  delete f[e], i.m[e] = r => {
                    throw delete i.c[e], a
                  }
                };
                try {
                  var d = n[e]();
                  d.then ? a.push(f[e] = d.then(r).catch(t)) : r(d)
                } catch (e) {
                  t(e)
                }
              }
            })
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              5082: 0
            };
            i.f.miniCss = (a, r) => {
              e[a] ? r.push(e[a]) : 0 !== e[a] && {
                312: 1,
                1389: 1,
                2680: 1,
                3317: 1,
                5537: 1,
                9024: 1
              } [a] && r.push(e[a] = (e => new Promise((a, r) => {
                var t = i.miniCssF(e),
                  d = i.p + t;
                if (((e, a) => {
                    for (var r = document.getElementsByTagName("link"), t = 0; t < r.length; t++) {
                      var d = (f = r[t]).getAttribute("data-href") || f.getAttribute("href");
                      if ("stylesheet" === f.rel && (d === e || d === a)) return f
                    }
                    var c = document.getElementsByTagName("style");
                    for (t = 0; t < c.length; t++) {
                      var f;
                      if ((d = (f = c[t]).getAttribute("data-href")) === e || d === a) return f
                    }
                  })(t, d)) return a();
                ((e, a, r, t, d) => {
                  var c = document.createElement("link");
                  c.rel = "stylesheet", c.type = "text/css", i.nc && (c.nonce = i.nc), c.onerror = c.onload = r => {
                    if (c.onerror = c.onload = null, "load" === r.type) t();
                    else {
                      var f = r && r.type,
                        n = r && r.target && r.target.href || a,
                        o = new Error("Loading CSS chunk " + e + " failed.\n(" + f + ": " + n + ")");
                      o.name = "ChunkLoadError", o.code = "CSS_CHUNK_LOAD_FAILED", o.type = f, o.request = n, c.parentNode && c.parentNode.removeChild(c), d(o)
                    }
                  }, c.href = a, document.head.appendChild(c)
                })(e, d, 0, a, r)
              }))(a).then(() => {
                e[a] = 0
              }, r => {
                throw delete e[a], r
              }))
            }
          }
        })(), (() => {
          var e = {
            5082: 0
          };
          i.f.j = (a, r) => {
            var t = i.o(e, a) ? e[a] : void 0;
            if (0 !== t)
              if (t) r.push(t[2]);
              else if (/^((33|40)17|1270|1324|3082)$/.test(a)) e[a] = 0;
            else {
              var d = new Promise((r, d) => t = e[a] = [r, d]);
              r.push(t[2] = d);
              var c = i.p + i.u(a),
                f = new Error;
              i.l(c, r => {
                if (i.o(e, a) && (0 !== (t = e[a]) && (e[a] = void 0), t)) {
                  var d = r && ("load" === r.type ? "missing" : r.type),
                    c = r && r.target && r.target.src;
                  f.message = "Loading chunk " + a + " failed.\n(" + d + ": " + c + ")", f.name = "ChunkLoadError", f.type = d, f.request = c, t[1](f)
                }
              }, "chunk-" + a, a)
            }
          };
          var a = (a, r) => {
              var t, d, [c, f, n] = r,
                o = 0;
              if (c.some(a => 0 !== e[a])) {
                for (t in f) i.o(f, t) && (i.m[t] = f[t]);
                n && n(i)
              }
              for (a && a(r); o < c.length; o++) d = c[o], i.o(e, d) && e[d] && e[d][0](), e[d] = 0
            },
            r = self.webpackChunk_rockstargames_sites_red_dead_redemption_2 = self.webpackChunk_rockstargames_sites_red_dead_redemption_2 || [];
          r.forEach(a.bind(null, 0)), r.push = a.bind(null, r.push.bind(r))
        })(), i.nc = void 0, i(35649), i(85819)
      })())
    }
  }
});