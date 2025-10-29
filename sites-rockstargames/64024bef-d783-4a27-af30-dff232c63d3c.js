try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    r = (new e.Error).stack;
  r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "64024bef-d783-4a27-af30-dff232c63d3c", e._sentryDebugIdIdentifier = "sentry-dbid-64024bef-d783-4a27-af30-dff232c63d3c")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [5059, 8322], {
    25906: (e, r, t) => {
      "use strict";
      t.d(r, {
        M5: () => f,
        XB: () => w,
        xV: () => m,
        zp: () => d
      });
      var n = t(62229);

      function i(e, r, t) {
        return r in e ? Object.defineProperty(e, r, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[r] = t, e
      }

      function o(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r && (n = n.filter((function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          }))), t.push.apply(t, n)
        }
        return t
      }

      function a(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? o(t, !0).forEach((function(r) {
            i(e, r, t[r])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : o(t).forEach((function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          }))
        }
        return e
      }
      var s, c, u, l, f = function(e) {
          var r, t = {
              unsupported: s = !("undefined" != typeof navigator && "connection" in navigator && "effectiveType" in navigator.connection),
              effectiveConnectionType: s ? e : navigator.connection.effectiveType
            },
            i = function(e) {
              if (Array.isArray(e)) return e
            }(r = (0, n.useState)(t)) || function(e) {
              if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) {
                var r = [],
                  t = !0,
                  n = !1,
                  i = void 0;
                try {
                  for (var o, a = e[Symbol.iterator](); !(t = (o = a.next()).done) && (r.push(o.value), 2 !== r.length); t = !0);
                } catch (e) {
                  n = !0, i = e
                } finally {
                  try {
                    t || null == a.return || a.return()
                  } finally {
                    if (n) throw i
                  }
                }
                return r
              }
            }(r) || function() {
              throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }(),
            o = i[0],
            c = i[1];
          return (0, n.useEffect)((function() {
            if (!s) {
              var e = navigator.connection,
                r = function() {
                  c({
                    effectiveConnectionType: e.effectiveType
                  })
                };
              return e.addEventListener("change", r),
                function() {
                  e.removeEventListener("change", r)
                }
            }
          }), []), a({}, o, {
            setNetworkStatus: c
          })
        },
        d = function() {
          return {
            unsupported: c = !("undefined" != typeof navigator && "connection" in navigator && "saveData" in navigator.connection),
            saveData: c ? arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null : !0 === navigator.connection.saveData
          }
        };
      if (u = !("undefined" != typeof navigator && "deviceMemory" in navigator)) l = {
        unsupported: u
      };
      else {
        var b = "memory" in performance ? performance.memory : null;
        l = {
          unsupported: u,
          deviceMemory: navigator.deviceMemory,
          totalJSHeapSize: b ? b.totalJSHeapSize : null,
          usedJSHeapSize: b ? b.usedJSHeapSize : null,
          jsHeapSizeLimit: b ? b.jsHeapSizeLimit : null
        }
      }
      var p, w = function(e) {
        return u && e ? a({}, l, {}, e) : a({}, l)
      };
      p = "undefined" != typeof navigator && "hardwareConcurrency" in navigator ? {
        unsupported: !1,
        numberOfLogicalProcessors: navigator.hardwareConcurrency
      } : {
        unsupported: !0
      };
      var m = function() {
        return a({}, p)
      }
    },
    40139: function(e, r, t) {
      var n;
      ! function(i, o) {
        "use strict";
        var a = "function",
          s = "undefined",
          c = "object",
          u = "string",
          l = "major",
          f = "model",
          d = "name",
          b = "type",
          p = "vendor",
          w = "version",
          m = "architecture",
          y = "console",
          v = "mobile",
          h = "tablet",
          g = "smarttv",
          _ = "wearable",
          x = "embedded",
          k = "Amazon",
          O = "Apple",
          S = "ASUS",
          j = "BlackBerry",
          P = "Browser",
          E = "Chrome",
          T = "Firefox",
          A = "Google",
          I = "Huawei",
          M = "LG",
          C = "Microsoft",
          D = "Motorola",
          z = "Opera",
          N = "Samsung",
          R = "Sharp",
          q = "Sony",
          U = "Xiaomi",
          B = "Zebra",
          F = "Facebook",
          H = "Chromium OS",
          L = "Mac OS",
          V = " Browser",
          $ = function(e) {
            for (var r = {}, t = 0; t < e.length; t++) r[e[t].toUpperCase()] = e[t];
            return r
          },
          G = function(e, r) {
            return typeof e === u && -1 !== W(r).indexOf(W(e))
          },
          W = function(e) {
            return e.toLowerCase()
          },
          X = function(e, r) {
            if (typeof e === u) return e = e.replace(/^\s\s*/, ""), typeof r === s ? e : e.substring(0, 500)
          },
          J = function(e, r) {
            for (var t, n, i, s, u, l, f = 0; f < r.length && !u;) {
              var d = r[f],
                b = r[f + 1];
              for (t = n = 0; t < d.length && !u && d[t];)
                if (u = d[t++].exec(e))
                  for (i = 0; i < b.length; i++) l = u[++n], typeof(s = b[i]) === c && s.length > 0 ? 2 === s.length ? typeof s[1] == a ? this[s[0]] = s[1].call(this, l) : this[s[0]] = s[1] : 3 === s.length ? typeof s[1] !== a || s[1].exec && s[1].test ? this[s[0]] = l ? l.replace(s[1], s[2]) : o : this[s[0]] = l ? s[1].call(this, l, s[2]) : o : 4 === s.length && (this[s[0]] = l ? s[3].call(this, l.replace(s[1], s[2])) : o) : this[s] = l || o;
              f += 2
            }
          },
          Z = function(e, r) {
            for (var t in r)
              if (typeof r[t] === c && r[t].length > 0) {
                for (var n = 0; n < r[t].length; n++)
                  if (G(r[t][n], e)) return "?" === t ? o : t
              } else if (G(r[t], e)) return "?" === t ? o : t;
            return r.hasOwnProperty("*") ? r["*"] : e
          },
          K = {
            ME: "4.90",
            "NT 3.11": "NT3.51",
            "NT 4.0": "NT4.0",
            2e3: "NT 5.0",
            XP: ["NT 5.1", "NT 5.2"],
            Vista: "NT 6.0",
            7: "NT 6.1",
            8: "NT 6.2",
            8.1: "NT 6.3",
            10: ["NT 6.4", "NT 10.0"],
            RT: "ARM"
          },
          Y = {
            browser: [
              [/\b(?:crmo|crios)\/([\w\.]+)/i],
              [w, [d, "Chrome"]],
              [/edg(?:e|ios|a)?\/([\w\.]+)/i],
              [w, [d, "Edge"]],
              [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
              [d, w],
              [/opios[\/ ]+([\w\.]+)/i],
              [w, [d, z + " Mini"]],
              [/\bop(?:rg)?x\/([\w\.]+)/i],
              [w, [d, z + " GX"]],
              [/\bopr\/([\w\.]+)/i],
              [w, [d, z]],
              [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
              [w, [d, "Baidu"]],
              [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
              [w, [d, "Maxthon"]],
              [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i, /(heytap|ovi|115)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
              [d, w],
              [/quark(?:pc)?\/([-\w\.]+)/i],
              [w, [d, "Quark"]],
              [/\bddg\/([\w\.]+)/i],
              [w, [d, "DuckDuckGo"]],
              [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
              [w, [d, "UC" + P]],
              [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
              [w, [d, "WeChat"]],
              [/konqueror\/([\w\.]+)/i],
              [w, [d, "Konqueror"]],
              [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
              [w, [d, "IE"]],
              [/ya(?:search)?browser\/([\w\.]+)/i],
              [w, [d, "Yandex"]],
              [/slbrowser\/([\w\.]+)/i],
              [w, [d, "Smart Lenovo " + P]],
              [/(avast|avg)\/([\w\.]+)/i],
              [
                [d, /(.+)/, "$1 Secure " + P], w
              ],
              [/\bfocus\/([\w\.]+)/i],
              [w, [d, T + " Focus"]],
              [/\bopt\/([\w\.]+)/i],
              [w, [d, z + " Touch"]],
              [/coc_coc\w+\/([\w\.]+)/i],
              [w, [d, "Coc Coc"]],
              [/dolfin\/([\w\.]+)/i],
              [w, [d, "Dolphin"]],
              [/coast\/([\w\.]+)/i],
              [w, [d, z + " Coast"]],
              [/miuibrowser\/([\w\.]+)/i],
              [w, [d, "MIUI" + V]],
              [/fxios\/([\w\.-]+)/i],
              [w, [d, T]],
              [/\bqihoobrowser\/?([\w\.]*)/i],
              [w, [d, "360"]],
              [/\b(qq)\/([\w\.]+)/i],
              [
                [d, /(.+)/, "$1Browser"], w
              ],
              [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
              [
                [d, /(.+)/, "$1" + V], w
              ],
              [/samsungbrowser\/([\w\.]+)/i],
              [w, [d, N + " Internet"]],
              [/metasr[\/ ]?([\d\.]+)/i],
              [w, [d, "Sogou Explorer"]],
              [/(sogou)mo\w+\/([\d\.]+)/i],
              [
                [d, "Sogou Mobile"], w
              ],
              [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],
              [d, w],
              [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
              [d],
              [/ome\/([\w\.]+) \w* ?(iron) saf/i, /ome\/([\w\.]+).+qihu (360)[es]e/i],
              [w, d],
              [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
              [
                [d, F], w
              ],
              [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
              [d, w],
              [/\bgsa\/([\w\.]+) .*safari\//i],
              [w, [d, "GSA"]],
              [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
              [w, [d, "TikTok"]],
              [/headlesschrome(?:\/([\w\.]+)| )/i],
              [w, [d, E + " Headless"]],
              [/ wv\).+(chrome)\/([\w\.]+)/i],
              [
                [d, E + " WebView"], w
              ],
              [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
              [w, [d, "Android " + P]],
              [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
              [d, w],
              [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
              [w, [d, "Mobile Safari"]],
              [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
              [w, d],
              [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
              [d, [w, Z, {
                "1.0": "/8",
                1.2: "/1",
                1.3: "/3",
                "2.0": "/412",
                "2.0.2": "/416",
                "2.0.3": "/417",
                "2.0.4": "/419",
                "?": "/"
              }]],
              [/(webkit|khtml)\/([\w\.]+)/i],
              [d, w],
              [/(navigator|netscape\d?)\/([-\w\.]+)/i],
              [
                [d, "Netscape"], w
              ],
              [/(wolvic|librewolf)\/([\w\.]+)/i],
              [d, w],
              [/mobile vr; rv:([\w\.]+)\).+firefox/i],
              [w, [d, T + " Reality"]],
              [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i],
              [d, [w, /_/g, "."]],
              [/(cobalt)\/([\w\.]+)/i],
              [d, [w, /master.|lts./, ""]]
            ],
            cpu: [
              [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
              [
                [m, "amd64"]
              ],
              [/(ia32(?=;))/i],
              [
                [m, W]
              ],
              [/((?:i[346]|x)86)[;\)]/i],
              [
                [m, "ia32"]
              ],
              [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
              [
                [m, "arm64"]
              ],
              [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
              [
                [m, "armhf"]
              ],
              [/windows (ce|mobile); ppc;/i],
              [
                [m, "arm"]
              ],
              [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
              [
                [m, /ower/, "", W]
              ],
              [/(sun4\w)[;\)]/i],
              [
                [m, "sparc"]
              ],
              [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],
              [
                [m, W]
              ]
            ],
            device: [
              [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
              [f, [p, N],
                [b, h]
              ],
              [/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]((?!sm-[lr])[-\w]+)/i, /sec-(sgh\w+)/i],
              [f, [p, N],
                [b, v]
              ],
              [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
              [f, [p, O],
                [b, v]
              ],
              [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
              [f, [p, O],
                [b, h]
              ],
              [/(macintosh);/i],
              [f, [p, O]],
              [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
              [f, [p, R],
                [b, v]
              ],
              [/(?:honor)([-\w ]+)[;\)]/i],
              [f, [p, "Honor"],
                [b, v]
              ],
              [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
              [f, [p, I],
                [b, h]
              ],
              [/(?:huawei)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
              [f, [p, I],
                [b, v]
              ],
              [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i],
              [
                [f, /_/g, " "],
                [p, U],
                [b, v]
              ],
              [/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i, /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
              [
                [f, /_/g, " "],
                [p, U],
                [b, h]
              ],
              [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
              [f, [p, "OPPO"],
                [b, v]
              ],
              [/\b(opd2\d{3}a?) bui/i],
              [f, [p, "OPPO"],
                [b, h]
              ],
              [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
              [f, [p, "Vivo"],
                [b, v]
              ],
              [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
              [f, [p, "Realme"],
                [b, v]
              ],
              [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
              [f, [p, D],
                [b, v]
              ],
              [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
              [f, [p, D],
                [b, h]
              ],
              [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
              [f, [p, M],
                [b, h]
              ],
              [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i],
              [f, [p, M],
                [b, v]
              ],
              [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],
              [f, [p, "Lenovo"],
                [b, h]
              ],
              [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
              [
                [f, /_/g, " "],
                [p, "Nokia"],
                [b, v]
              ],
              [/(pixel c)\b/i],
              [f, [p, A],
                [b, h]
              ],
              [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
              [f, [p, A],
                [b, v]
              ],
              [/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
              [f, [p, q],
                [b, v]
              ],
              [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
              [
                [f, "Xperia Tablet"],
                [p, q],
                [b, h]
              ],
              [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
              [f, [p, "OnePlus"],
                [b, v]
              ],
              [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
              [f, [p, k],
                [b, h]
              ],
              [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
              [
                [f, /(.+)/g, "Fire Phone $1"],
                [p, k],
                [b, v]
              ],
              [/(playbook);[-\w\),; ]+(rim)/i],
              [f, p, [b, h]],
              [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
              [f, [p, j],
                [b, v]
              ],
              [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
              [f, [p, S],
                [b, h]
              ],
              [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
              [f, [p, S],
                [b, v]
              ],
              [/(nexus 9)/i],
              [f, [p, "HTC"],
                [b, h]
              ],
              [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
              [p, [f, /_/g, " "],
                [b, v]
              ],
              [/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i],
              [f, [p, "TCL"],
                [b, h]
              ],
              [/(itel) ((\w+))/i],
              [
                [p, W], f, [b, Z, {
                  tablet: ["p10001l", "w7001"],
                  "*": "mobile"
                }]
              ],
              [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
              [f, [p, "Acer"],
                [b, h]
              ],
              [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
              [f, [p, "Meizu"],
                [b, v]
              ],
              [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
              [f, [p, "Ulefone"],
                [b, v]
              ],
              [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
              [f, [p, "Energizer"],
                [b, v]
              ],
              [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
              [f, [p, "Cat"],
                [b, v]
              ],
              [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
              [f, [p, "Smartfren"],
                [b, v]
              ],
              [/droid.+; (a(?:015|06[35]|142p?))/i],
              [f, [p, "Nothing"],
                [b, v]
              ],
              [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i, /; (imo) ((?!tab)[\w ]+?)(?: bui|\))/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i],
              [p, f, [b, v]],
              [/(imo) (tab \w+)/i, /(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
              [p, f, [b, h]],
              [/(surface duo)/i],
              [f, [p, C],
                [b, h]
              ],
              [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
              [f, [p, "Fairphone"],
                [b, v]
              ],
              [/(u304aa)/i],
              [f, [p, "AT&T"],
                [b, v]
              ],
              [/\bsie-(\w*)/i],
              [f, [p, "Siemens"],
                [b, v]
              ],
              [/\b(rct\w+) b/i],
              [f, [p, "RCA"],
                [b, h]
              ],
              [/\b(venue[\d ]{2,7}) b/i],
              [f, [p, "Dell"],
                [b, h]
              ],
              [/\b(q(?:mv|ta)\w+) b/i],
              [f, [p, "Verizon"],
                [b, h]
              ],
              [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
              [f, [p, "Barnes & Noble"],
                [b, h]
              ],
              [/\b(tm\d{3}\w+) b/i],
              [f, [p, "NuVision"],
                [b, h]
              ],
              [/\b(k88) b/i],
              [f, [p, "ZTE"],
                [b, h]
              ],
              [/\b(nx\d{3}j) b/i],
              [f, [p, "ZTE"],
                [b, v]
              ],
              [/\b(gen\d{3}) b.+49h/i],
              [f, [p, "Swiss"],
                [b, v]
              ],
              [/\b(zur\d{3}) b/i],
              [f, [p, "Swiss"],
                [b, h]
              ],
              [/\b((zeki)?tb.*\b) b/i],
              [f, [p, "Zeki"],
                [b, h]
              ],
              [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
              [
                [p, "Dragon Touch"], f, [b, h]
              ],
              [/\b(ns-?\w{0,9}) b/i],
              [f, [p, "Insignia"],
                [b, h]
              ],
              [/\b((nxa|next)-?\w{0,9}) b/i],
              [f, [p, "NextBook"],
                [b, h]
              ],
              [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
              [
                [p, "Voice"], f, [b, v]
              ],
              [/\b(lvtel\-)?(v1[12]) b/i],
              [
                [p, "LvTel"], f, [b, v]
              ],
              [/\b(ph-1) /i],
              [f, [p, "Essential"],
                [b, v]
              ],
              [/\b(v(100md|700na|7011|917g).*\b) b/i],
              [f, [p, "Envizen"],
                [b, h]
              ],
              [/\b(trio[-\w\. ]+) b/i],
              [f, [p, "MachSpeed"],
                [b, h]
              ],
              [/\btu_(1491) b/i],
              [f, [p, "Rotor"],
                [b, h]
              ],
              [/(shield[\w ]+) b/i],
              [f, [p, "Nvidia"],
                [b, h]
              ],
              [/(sprint) (\w+)/i],
              [p, f, [b, v]],
              [/(kin\.[onetw]{3})/i],
              [
                [f, /\./g, " "],
                [p, C],
                [b, v]
              ],
              [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
              [f, [p, B],
                [b, h]
              ],
              [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
              [f, [p, B],
                [b, v]
              ],
              [/smart-tv.+(samsung)/i],
              [p, [b, g]],
              [/hbbtv.+maple;(\d+)/i],
              [
                [f, /^/, "SmartTV"],
                [p, N],
                [b, g]
              ],
              [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
              [
                [p, M],
                [b, g]
              ],
              [/(apple) ?tv/i],
              [p, [f, O + " TV"],
                [b, g]
              ],
              [/crkey/i],
              [
                [f, E + "cast"],
                [p, A],
                [b, g]
              ],
              [/droid.+aft(\w+)( bui|\))/i],
              [f, [p, k],
                [b, g]
              ],
              [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
              [f, [p, R],
                [b, g]
              ],
              [/(bravia[\w ]+)( bui|\))/i],
              [f, [p, q],
                [b, g]
              ],
              [/(mitv-\w{5}) bui/i],
              [f, [p, U],
                [b, g]
              ],
              [/Hbbtv.*(technisat) (.*);/i],
              [p, f, [b, g]],
              [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
              [
                [p, X],
                [f, X],
                [b, g]
              ],
              [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
              [
                [b, g]
              ],
              [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
              [p, f, [b, y]],
              [/droid.+; (shield) bui/i],
              [f, [p, "Nvidia"],
                [b, y]
              ],
              [/(playstation [345portablevi]+)/i],
              [f, [p, q],
                [b, y]
              ],
              [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
              [f, [p, C],
                [b, y]
              ],
              [/\b(sm-[lr]\d\d[05][fnuw]?s?)\b/i],
              [f, [p, N],
                [b, _]
              ],
              [/((pebble))app/i],
              [p, f, [b, _]],
              [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
              [f, [p, O],
                [b, _]
              ],
              [/droid.+; (glass) \d/i],
              [f, [p, A],
                [b, _]
              ],
              [/droid.+; (wt63?0{2,3})\)/i],
              [f, [p, B],
                [b, _]
              ],
              [/droid.+; (glass) \d/i],
              [f, [p, A],
                [b, _]
              ],
              [/(pico) (4|neo3(?: link|pro)?)/i],
              [p, f, [b, _]],
              [/; (quest( \d| pro)?)/i],
              [f, [p, F],
                [b, _]
              ],
              [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
              [p, [b, x]],
              [/(aeobc)\b/i],
              [f, [p, k],
                [b, x]
              ],
              [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
              [f, [b, v]],
              [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
              [f, [b, h]],
              [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
              [
                [b, h]
              ],
              [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
              [
                [b, v]
              ],
              [/(android[-\w\. ]{0,9});.+buil/i],
              [f, [p, "Generic"]]
            ],
            engine: [
              [/windows.+ edge\/([\w\.]+)/i],
              [w, [d, "EdgeHTML"]],
              [/(arkweb)\/([\w\.]+)/i],
              [d, w],
              [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
              [w, [d, "Blink"]],
              [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
              [d, w],
              [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
              [w, d]
            ],
            os: [
              [/microsoft (windows) (vista|xp)/i],
              [d, w],
              [/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],
              [d, [w, Z, K]],
              [/windows nt 6\.2; (arm)/i, /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
              [
                [w, Z, K],
                [d, "Windows"]
              ],
              [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
              [
                [w, /_/g, "."],
                [d, "iOS"]
              ],
              [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
              [
                [d, L],
                [w, /_/g, "."]
              ],
              [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
              [w, d],
              [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish|openharmony)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i],
              [d, w],
              [/\(bb(10);/i],
              [w, [d, j]],
              [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
              [w, [d, "Symbian"]],
              [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
              [w, [d, T + " OS"]],
              [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
              [w, [d, "webOS"]],
              [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
              [w, [d, "watchOS"]],
              [/crkey\/([\d\.]+)/i],
              [w, [d, E + "cast"]],
              [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
              [
                [d, H], w
              ],
              [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
              [d, w],
              [/(sunos) ?([\w\.\d]*)/i],
              [
                [d, "Solaris"], w
              ],
              [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
              [d, w]
            ]
          },
          Q = function(e, r) {
            if (typeof e === c && (r = e, e = o), !(this instanceof Q)) return new Q(e, r).getResult();
            var t = typeof i !== s && i.navigator ? i.navigator : o,
              n = e || (t && t.userAgent ? t.userAgent : ""),
              y = t && t.userAgentData ? t.userAgentData : o,
              g = r ? function(e, r) {
                var t = {};
                for (var n in e) r[n] && r[n].length % 2 == 0 ? t[n] = r[n].concat(e[n]) : t[n] = e[n];
                return t
              }(Y, r) : Y,
              _ = t && t.userAgent == n;
            return this.getBrowser = function() {
              var e, r = {};
              return r[d] = o, r[w] = o, J.call(r, n, g.browser), r[l] = typeof(e = r[w]) === u ? e.replace(/[^\d\.]/g, "").split(".")[0] : o, _ && t && t.brave && typeof t.brave.isBrave == a && (r[d] = "Brave"), r
            }, this.getCPU = function() {
              var e = {};
              return e[m] = o, J.call(e, n, g.cpu), e
            }, this.getDevice = function() {
              var e = {};
              return e[p] = o, e[f] = o, e[b] = o, J.call(e, n, g.device), _ && !e[b] && y && y.mobile && (e[b] = v), _ && "Macintosh" == e[f] && t && typeof t.standalone !== s && t.maxTouchPoints && t.maxTouchPoints > 2 && (e[f] = "iPad", e[b] = h), e
            }, this.getEngine = function() {
              var e = {};
              return e[d] = o, e[w] = o, J.call(e, n, g.engine), e
            }, this.getOS = function() {
              var e = {};
              return e[d] = o, e[w] = o, J.call(e, n, g.os), _ && !e[d] && y && y.platform && "Unknown" != y.platform && (e[d] = y.platform.replace(/chrome os/i, H).replace(/macos/i, L)), e
            }, this.getResult = function() {
              return {
                ua: this.getUA(),
                browser: this.getBrowser(),
                engine: this.getEngine(),
                os: this.getOS(),
                device: this.getDevice(),
                cpu: this.getCPU()
              }
            }, this.getUA = function() {
              return n
            }, this.setUA = function(e) {
              return n = typeof e === u && e.length > 500 ? X(e, 500) : e, this
            }, this.setUA(n), this
          };
        Q.VERSION = "1.0.40", Q.BROWSER = $([d, w, l]), Q.CPU = $([m]), Q.DEVICE = $([f, p, b, y, v, g, h, _, x]), Q.ENGINE = Q.OS = $([d, w]), typeof r !== s ? (e.exports && (r = e.exports = Q), r.UAParser = Q) : t.amdO ? (n = function() {
          return Q
        }.call(r, t, r, e)) === o || (e.exports = n) : typeof i !== s && (i.UAParser = Q);
        var ee = typeof i !== s && (i.jQuery || i.Zepto);
        if (ee && !ee.ua) {
          var re = new Q;
          ee.ua = re.getResult(), ee.ua.get = function() {
            return re.getUA()
          }, ee.ua.set = function(e) {
            re.setUA(e);
            var r = re.getResult();
            for (var t in r) ee.ua[t] = r[t]
          }
        }
      }("object" == typeof window ? window : this)
    },
    42887: (e, r, t) => {
      "use strict";
      t.d(r, {
        sc: () => i
      });
      const n = e => async (r, {
        outputFormat: t = "hex"
      } = {}) => {
        "string" == typeof r && (r = (new globalThis.TextEncoder).encode(r));
        const n = await globalThis.crypto.subtle.digest(e, r);
        return "hex" === t ? (e => {
          const r = new DataView(e);
          let t = "";
          for (let e = 0; e < r.byteLength; e += 4) t += r.getUint32(e).toString(16).padStart(8, "0");
          return t
        })(n) : n
      }, i = (n("SHA-1"), n("SHA-256"));
      n("SHA-384"), n("SHA-512")
    },
    58128: (e, r, t) => {
      "use strict";
      t.d(r, {
        s: () => i
      });
      class n extends Error {}

      function i(e, r) {
        if ("string" != typeof e) throw new n("Invalid token specified: must be a string");
        r || (r = {});
        const t = !0 === r.header ? 0 : 1,
          i = e.split(".")[t];
        if ("string" != typeof i) throw new n(`Invalid token specified: missing part #${t+1}`);
        let o;
        try {
          o = function(e) {
            let r = e.replace(/-/g, "+").replace(/_/g, "/");
            switch (r.length % 4) {
              case 0:
                break;
              case 2:
                r += "==";
                break;
              case 3:
                r += "=";
                break;
              default:
                throw new Error("base64 string is not of the correct length")
            }
            try {
              return function(e) {
                return decodeURIComponent(atob(e).replace(/(.)/g, ((e, r) => {
                  let t = r.charCodeAt(0).toString(16).toUpperCase();
                  return t.length < 2 && (t = "0" + t), "%" + t
                })))
              }(r)
            } catch (e) {
              return atob(r)
            }
          }(i)
        } catch (e) {
          throw new n(`Invalid token specified: invalid base64 for part #${t+1} (${e.message})`)
        }
        try {
          return JSON.parse(o)
        } catch (e) {
          throw new n(`Invalid token specified: invalid json for part #${t+1} (${e.message})`)
        }
      }
      n.prototype.name = "InvalidTokenError"
    },
    78322: (e, r, t) => {
      "use strict";
      t.r(r), t.d(r, {
        __addDisposableResource: () => z,
        __assign: () => o,
        __asyncDelegator: () => S,
        __asyncGenerator: () => O,
        __asyncValues: () => j,
        __await: () => k,
        __awaiter: () => p,
        __classPrivateFieldGet: () => M,
        __classPrivateFieldIn: () => D,
        __classPrivateFieldSet: () => C,
        __createBinding: () => m,
        __decorate: () => s,
        __disposeResources: () => R,
        __esDecorate: () => u,
        __exportStar: () => y,
        __extends: () => i,
        __generator: () => w,
        __importDefault: () => I,
        __importStar: () => A,
        __makeTemplateObject: () => P,
        __metadata: () => b,
        __param: () => c,
        __propKey: () => f,
        __read: () => h,
        __rest: () => a,
        __rewriteRelativeImportExtension: () => q,
        __runInitializers: () => l,
        __setFunctionName: () => d,
        __spread: () => g,
        __spreadArray: () => x,
        __spreadArrays: () => _,
        __values: () => v,
        default: () => U
      });
      var n = function(e, r) {
        return n = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function(e, r) {
          e.__proto__ = r
        } || function(e, r) {
          for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t])
        }, n(e, r)
      };

      function i(e, r) {
        if ("function" != typeof r && null !== r) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");

        function t() {
          this.constructor = e
        }
        n(e, r), e.prototype = null === r ? Object.create(r) : (t.prototype = r.prototype, new t)
      }
      var o = function() {
        return o = Object.assign || function(e) {
          for (var r, t = 1, n = arguments.length; t < n; t++)
            for (var i in r = arguments[t]) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
          return e
        }, o.apply(this, arguments)
      };

      function a(e, r) {
        var t = {};
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var i = 0;
          for (n = Object.getOwnPropertySymbols(e); i < n.length; i++) r.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (t[n[i]] = e[n[i]])
        }
        return t
      }

      function s(e, r, t, n) {
        var i, o = arguments.length,
          a = o < 3 ? r : null === n ? n = Object.getOwnPropertyDescriptor(r, t) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, r, t, n);
        else
          for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(r, t, a) : i(r, t)) || a);
        return o > 3 && a && Object.defineProperty(r, t, a), a
      }

      function c(e, r) {
        return function(t, n) {
          r(t, n, e)
        }
      }

      function u(e, r, t, n, i, o) {
        function a(e) {
          if (void 0 !== e && "function" != typeof e) throw new TypeError("Function expected");
          return e
        }
        for (var s, c = n.kind, u = "getter" === c ? "get" : "setter" === c ? "set" : "value", l = !r && e ? n.static ? e : e.prototype : null, f = r || (l ? Object.getOwnPropertyDescriptor(l, n.name) : {}), d = !1, b = t.length - 1; b >= 0; b--) {
          var p = {};
          for (var w in n) p[w] = "access" === w ? {} : n[w];
          for (var w in n.access) p.access[w] = n.access[w];
          p.addInitializer = function(e) {
            if (d) throw new TypeError("Cannot add initializers after decoration has completed");
            o.push(a(e || null))
          };
          var m = (0, t[b])("accessor" === c ? {
            get: f.get,
            set: f.set
          } : f[u], p);
          if ("accessor" === c) {
            if (void 0 === m) continue;
            if (null === m || "object" != typeof m) throw new TypeError("Object expected");
            (s = a(m.get)) && (f.get = s), (s = a(m.set)) && (f.set = s), (s = a(m.init)) && i.unshift(s)
          } else(s = a(m)) && ("field" === c ? i.unshift(s) : f[u] = s)
        }
        l && Object.defineProperty(l, n.name, f), d = !0
      }

      function l(e, r, t) {
        for (var n = arguments.length > 2, i = 0; i < r.length; i++) t = n ? r[i].call(e, t) : r[i].call(e);
        return n ? t : void 0
      }

      function f(e) {
        return "symbol" == typeof e ? e : "".concat(e)
      }

      function d(e, r, t) {
        return "symbol" == typeof r && (r = r.description ? "[".concat(r.description, "]") : ""), Object.defineProperty(e, "name", {
          configurable: !0,
          value: t ? "".concat(t, " ", r) : r
        })
      }

      function b(e, r) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, r)
      }

      function p(e, r, t, n) {
        return new(t || (t = Promise))((function(i, o) {
          function a(e) {
            try {
              c(n.next(e))
            } catch (e) {
              o(e)
            }
          }

          function s(e) {
            try {
              c(n.throw(e))
            } catch (e) {
              o(e)
            }
          }

          function c(e) {
            var r;
            e.done ? i(e.value) : (r = e.value, r instanceof t ? r : new t((function(e) {
              e(r)
            }))).then(a, s)
          }
          c((n = n.apply(e, r || [])).next())
        }))
      }

      function w(e, r) {
        var t, n, i, o = {
            label: 0,
            sent: function() {
              if (1 & i[0]) throw i[1];
              return i[1]
            },
            trys: [],
            ops: []
          },
          a = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
        return a.next = s(0), a.throw = s(1), a.return = s(2), "function" == typeof Symbol && (a[Symbol.iterator] = function() {
          return this
        }), a;

        function s(s) {
          return function(c) {
            return function(s) {
              if (t) throw new TypeError("Generator is already executing.");
              for (; a && (a = 0, s[0] && (o = 0)), o;) try {
                if (t = 1, n && (i = 2 & s[0] ? n.return : s[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, s[1])).done) return i;
                switch (n = 0, i && (s = [2 & s[0], i.value]), s[0]) {
                  case 0:
                  case 1:
                    i = s;
                    break;
                  case 4:
                    return o.label++, {
                      value: s[1],
                      done: !1
                    };
                  case 5:
                    o.label++, n = s[1], s = [0];
                    continue;
                  case 7:
                    s = o.ops.pop(), o.trys.pop();
                    continue;
                  default:
                    if (!((i = (i = o.trys).length > 0 && i[i.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                      o = 0;
                      continue
                    }
                    if (3 === s[0] && (!i || s[1] > i[0] && s[1] < i[3])) {
                      o.label = s[1];
                      break
                    }
                    if (6 === s[0] && o.label < i[1]) {
                      o.label = i[1], i = s;
                      break
                    }
                    if (i && o.label < i[2]) {
                      o.label = i[2], o.ops.push(s);
                      break
                    }
                    i[2] && o.ops.pop(), o.trys.pop();
                    continue
                }
                s = r.call(e, o)
              } catch (e) {
                s = [6, e], n = 0
              } finally {
                t = i = 0
              }
              if (5 & s[0]) throw s[1];
              return {
                value: s[0] ? s[1] : void 0,
                done: !0
              }
            }([s, c])
          }
        }
      }
      var m = Object.create ? function(e, r, t, n) {
        void 0 === n && (n = t);
        var i = Object.getOwnPropertyDescriptor(r, t);
        i && !("get" in i ? !r.__esModule : i.writable || i.configurable) || (i = {
          enumerable: !0,
          get: function() {
            return r[t]
          }
        }), Object.defineProperty(e, n, i)
      } : function(e, r, t, n) {
        void 0 === n && (n = t), e[n] = r[t]
      };

      function y(e, r) {
        for (var t in e) "default" === t || Object.prototype.hasOwnProperty.call(r, t) || m(r, e, t)
      }

      function v(e) {
        var r = "function" == typeof Symbol && Symbol.iterator,
          t = r && e[r],
          n = 0;
        if (t) return t.call(e);
        if (e && "number" == typeof e.length) return {
          next: function() {
            return e && n >= e.length && (e = void 0), {
              value: e && e[n++],
              done: !e
            }
          }
        };
        throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.")
      }

      function h(e, r) {
        var t = "function" == typeof Symbol && e[Symbol.iterator];
        if (!t) return e;
        var n, i, o = t.call(e),
          a = [];
        try {
          for (;
            (void 0 === r || r-- > 0) && !(n = o.next()).done;) a.push(n.value)
        } catch (e) {
          i = {
            error: e
          }
        } finally {
          try {
            n && !n.done && (t = o.return) && t.call(o)
          } finally {
            if (i) throw i.error
          }
        }
        return a
      }

      function g() {
        for (var e = [], r = 0; r < arguments.length; r++) e = e.concat(h(arguments[r]));
        return e
      }

      function _() {
        for (var e = 0, r = 0, t = arguments.length; r < t; r++) e += arguments[r].length;
        var n = Array(e),
          i = 0;
        for (r = 0; r < t; r++)
          for (var o = arguments[r], a = 0, s = o.length; a < s; a++, i++) n[i] = o[a];
        return n
      }

      function x(e, r, t) {
        if (t || 2 === arguments.length)
          for (var n, i = 0, o = r.length; i < o; i++) !n && i in r || (n || (n = Array.prototype.slice.call(r, 0, i)), n[i] = r[i]);
        return e.concat(n || Array.prototype.slice.call(r))
      }

      function k(e) {
        return this instanceof k ? (this.v = e, this) : new k(e)
      }

      function O(e, r, t) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var n, i = t.apply(e, r || []),
          o = [];
        return n = Object.create(("function" == typeof AsyncIterator ? AsyncIterator : Object).prototype), a("next"), a("throw"), a("return", (function(e) {
          return function(r) {
            return Promise.resolve(r).then(e, u)
          }
        })), n[Symbol.asyncIterator] = function() {
          return this
        }, n;

        function a(e, r) {
          i[e] && (n[e] = function(r) {
            return new Promise((function(t, n) {
              o.push([e, r, t, n]) > 1 || s(e, r)
            }))
          }, r && (n[e] = r(n[e])))
        }

        function s(e, r) {
          try {
            (t = i[e](r)).value instanceof k ? Promise.resolve(t.value.v).then(c, u) : l(o[0][2], t)
          } catch (e) {
            l(o[0][3], e)
          }
          var t
        }

        function c(e) {
          s("next", e)
        }

        function u(e) {
          s("throw", e)
        }

        function l(e, r) {
          e(r), o.shift(), o.length && s(o[0][0], o[0][1])
        }
      }

      function S(e) {
        var r, t;
        return r = {}, n("next"), n("throw", (function(e) {
          throw e
        })), n("return"), r[Symbol.iterator] = function() {
          return this
        }, r;

        function n(n, i) {
          r[n] = e[n] ? function(r) {
            return (t = !t) ? {
              value: k(e[n](r)),
              done: !1
            } : i ? i(r) : r
          } : i
        }
      }

      function j(e) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var r, t = e[Symbol.asyncIterator];
        return t ? t.call(e) : (e = v(e), r = {}, n("next"), n("throw"), n("return"), r[Symbol.asyncIterator] = function() {
          return this
        }, r);

        function n(t) {
          r[t] = e[t] && function(r) {
            return new Promise((function(n, i) {
              ! function(e, r, t, n) {
                Promise.resolve(n).then((function(r) {
                  e({
                    value: r,
                    done: t
                  })
                }), r)
              }(n, i, (r = e[t](r)).done, r.value)
            }))
          }
        }
      }

      function P(e, r) {
        return Object.defineProperty ? Object.defineProperty(e, "raw", {
          value: r
        }) : e.raw = r, e
      }
      var E = Object.create ? function(e, r) {
          Object.defineProperty(e, "default", {
            enumerable: !0,
            value: r
          })
        } : function(e, r) {
          e.default = r
        },
        T = function(e) {
          return T = Object.getOwnPropertyNames || function(e) {
            var r = [];
            for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (r[r.length] = t);
            return r
          }, T(e)
        };

      function A(e) {
        if (e && e.__esModule) return e;
        var r = {};
        if (null != e)
          for (var t = T(e), n = 0; n < t.length; n++) "default" !== t[n] && m(r, e, t[n]);
        return E(r, e), r
      }

      function I(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function M(e, r, t, n) {
        if ("a" === t && !n) throw new TypeError("Private accessor was defined without a getter");
        if ("function" == typeof r ? e !== r || !n : !r.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return "m" === t ? n : "a" === t ? n.call(e) : n ? n.value : r.get(e)
      }

      function C(e, r, t, n, i) {
        if ("m" === n) throw new TypeError("Private method is not writable");
        if ("a" === n && !i) throw new TypeError("Private accessor was defined without a setter");
        if ("function" == typeof r ? e !== r || !i : !r.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return "a" === n ? i.call(e, t) : i ? i.value = t : r.set(e, t), t
      }

      function D(e, r) {
        if (null === r || "object" != typeof r && "function" != typeof r) throw new TypeError("Cannot use 'in' operator on non-object");
        return "function" == typeof e ? r === e : e.has(r)
      }

      function z(e, r, t) {
        if (null != r) {
          if ("object" != typeof r && "function" != typeof r) throw new TypeError("Object expected.");
          var n, i;
          if (t) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            n = r[Symbol.asyncDispose]
          }
          if (void 0 === n) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            n = r[Symbol.dispose], t && (i = n)
          }
          if ("function" != typeof n) throw new TypeError("Object not disposable.");
          i && (n = function() {
            try {
              i.call(this)
            } catch (e) {
              return Promise.reject(e)
            }
          }), e.stack.push({
            value: r,
            dispose: n,
            async: t
          })
        } else t && e.stack.push({
          async: !0
        });
        return r
      }
      var N = "function" == typeof SuppressedError ? SuppressedError : function(e, r, t) {
        var n = new Error(t);
        return n.name = "SuppressedError", n.error = e, n.suppressed = r, n
      };

      function R(e) {
        function r(r) {
          e.error = e.hasError ? new N(r, e.error, "An error was suppressed during disposal.") : r, e.hasError = !0
        }
        var t, n = 0;
        return function i() {
          for (; t = e.stack.pop();) try {
            if (!t.async && 1 === n) return n = 0, e.stack.push(t), Promise.resolve().then(i);
            if (t.dispose) {
              var o = t.dispose.call(t.value);
              if (t.async) return n |= 2, Promise.resolve(o).then(i, (function(e) {
                return r(e), i()
              }))
            } else n |= 1
          } catch (e) {
            r(e)
          }
          if (1 === n) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
          if (e.hasError) throw e.error
        }()
      }

      function q(e, r) {
        return "string" == typeof e && /^\.\.?\//.test(e) ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, (function(e, t, n, i, o) {
          return t ? r ? ".jsx" : ".js" : !n || i && o ? n + i + "." + o.toLowerCase() + "js" : e
        })) : e
      }
      const U = {
        __extends: i,
        __assign: o,
        __rest: a,
        __decorate: s,
        __param: c,
        __esDecorate: u,
        __runInitializers: l,
        __propKey: f,
        __setFunctionName: d,
        __metadata: b,
        __awaiter: p,
        __generator: w,
        __createBinding: m,
        __exportStar: y,
        __values: v,
        __read: h,
        __spread: g,
        __spreadArrays: _,
        __spreadArray: x,
        __await: k,
        __asyncGenerator: O,
        __asyncDelegator: S,
        __asyncValues: j,
        __makeTemplateObject: P,
        __importStar: A,
        __importDefault: I,
        __classPrivateFieldGet: M,
        __classPrivateFieldSet: C,
        __classPrivateFieldIn: D,
        __addDisposableResource: z,
        __disposeResources: R,
        __rewriteRelativeImportExtension: q
      }
    },
    79465: e => {
      "use strict";
      var r = function(e) {
          return function(e) {
            return !!e && "object" == typeof e
          }(e) && ! function(e) {
            var r = Object.prototype.toString.call(e);
            return "[object RegExp]" === r || "[object Date]" === r || function(e) {
              return e.$$typeof === t
            }(e)
          }(e)
        },
        t = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;

      function n(e, r) {
        return !1 !== r.clone && r.isMergeableObject(e) ? s((t = e, Array.isArray(t) ? [] : {}), e, r) : e;
        var t
      }

      function i(e, r, t) {
        return e.concat(r).map((function(e) {
          return n(e, t)
        }))
      }

      function o(e) {
        return Object.keys(e).concat(function(e) {
          return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter((function(r) {
            return Object.propertyIsEnumerable.call(e, r)
          })) : []
        }(e))
      }

      function a(e, r) {
        try {
          return r in e
        } catch (e) {
          return !1
        }
      }

      function s(e, t, c) {
        (c = c || {}).arrayMerge = c.arrayMerge || i, c.isMergeableObject = c.isMergeableObject || r, c.cloneUnlessOtherwiseSpecified = n;
        var u = Array.isArray(t);
        return u === Array.isArray(e) ? u ? c.arrayMerge(e, t, c) : function(e, r, t) {
          var i = {};
          return t.isMergeableObject(e) && o(e).forEach((function(r) {
            i[r] = n(e[r], t)
          })), o(r).forEach((function(o) {
            (function(e, r) {
              return a(e, r) && !(Object.hasOwnProperty.call(e, r) && Object.propertyIsEnumerable.call(e, r))
            })(e, o) || (a(e, o) && t.isMergeableObject(r[o]) ? i[o] = function(e, r) {
              if (!r.customMerge) return s;
              var t = r.customMerge(e);
              return "function" == typeof t ? t : s
            }(o, t)(e[o], r[o], t) : i[o] = n(r[o], t))
          })), i
        }(e, t, c) : n(t, c)
      }
      s.all = function(e, r) {
        if (!Array.isArray(e)) throw new Error("first argument should be an array");
        return e.reduce((function(e, t) {
          return s(e, t, r)
        }), {})
      };
      var c = s;
      e.exports = c
    },
    81878: (e, r, t) => {
      "use strict";
      (n = t(62229)) && "object" == typeof n && "default" in n && n.default;
      var n, i = t(40139),
        o = new i,
        a = o.getBrowser(),
        s = (o.getCPU(), o.getDevice()),
        c = o.getEngine(),
        u = o.getOS(),
        l = o.getUA();
      var f = "mobile",
        d = "tablet",
        b = "Chrome",
        p = "Firefox",
        w = "Opera",
        m = "Yandex",
        y = "Safari",
        v = "Internet Explorer",
        h = "Edge",
        g = "Chromium",
        _ = "IE",
        x = "Mobile Safari",
        k = "MIUI Browser",
        O = "Samsung Browser",
        S = "iOS",
        j = "Android",
        P = "Windows Phone",
        E = "Windows",
        T = "Mac OS",
        A = function(e) {
          return e || (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none")
        },
        I = function() {
          return !("undefined" == typeof window || !window.navigator && !navigator) && (window.navigator || navigator)
        },
        M = function(e) {
          var r = I();
          return r && r.platform && (-1 !== r.platform.indexOf(e) || "MacIntel" === r.platform && r.maxTouchPoints > 1 && !window.MSStream)
        },
        C = function(e) {
          return e.type === f
        },
        D = function(e) {
          return e.type === d
        },
        z = function(e) {
          var r = e.type;
          return r === f || r === d
        },
        N = function(e) {
          return "smarttv" === e.type
        },
        R = function(e) {
          return undefined === e.type
        },
        q = function(e) {
          return "wearable" === e.type
        },
        U = function(e) {
          return "console" === e.type
        },
        B = function(e) {
          return "embedded" === e.type
        },
        F = function(e) {
          var r = e.vendor;
          return A(r)
        },
        H = function(e) {
          var r = e.model;
          return A(r)
        },
        L = function(e) {
          var r = e.type;
          return A(r, "browser")
        },
        V = function(e) {
          return e.name === j
        },
        $ = function(e) {
          return e.name === E
        },
        G = function(e) {
          return e.name === T
        },
        W = function(e) {
          return e.name === P
        },
        X = function(e) {
          return e.name === S
        },
        J = function(e) {
          var r = e.version;
          return A(r)
        },
        Z = function(e) {
          var r = e.name;
          return A(r)
        },
        K = function(e) {
          return e.name === b
        },
        Y = function(e) {
          return e.name === p
        },
        Q = function(e) {
          return e.name === g
        },
        ee = function(e) {
          return e.name === h
        },
        re = function(e) {
          return e.name === m
        },
        te = function(e) {
          var r = e.name;
          return r === y || r === x
        },
        ne = function(e) {
          return e.name === x
        },
        ie = function(e) {
          return e.name === w
        },
        oe = function(e) {
          var r = e.name;
          return r === v || r === _
        },
        ae = function(e) {
          return e.name === k
        },
        se = function(e) {
          return e.name === O
        },
        ce = function(e) {
          var r = e.version;
          return A(r)
        },
        ue = function(e) {
          var r = e.major;
          return A(r)
        },
        le = function(e) {
          var r = e.name;
          return A(r)
        },
        fe = function(e) {
          var r = e.name;
          return A(r)
        },
        de = function(e) {
          var r = e.version;
          return A(r)
        },
        be = function() {
          var e = I(),
            r = e && e.userAgent && e.userAgent.toLowerCase();
          return "string" == typeof r && /electron/.test(r)
        },
        pe = function(e) {
          return "string" == typeof e && -1 !== e.indexOf("Edg/")
        },
        we = function() {
          var e = I();
          return e && (/iPad|iPhone|iPod/.test(e.platform) || "MacIntel" === e.platform && e.maxTouchPoints > 1) && !window.MSStream
        },
        me = function() {
          return M("iPad")
        },
        ye = function() {
          return M("iPhone")
        },
        ve = function() {
          return M("iPod")
        },
        he = function(e) {
          return A(e)
        };
      var ge = N(s),
        _e = (U(s), q(s)),
        xe = (B(s), ne(a) || me(), Q(a), z(s) || me(), C(s), D(s) || me(), R(s), R(s), V(u), W(u), X(u) || me(), K(a), Y(a), te(a), ie(a), oe(a)),
        ke = (J(u), Z(u), ce(a), ue(a), le(a)),
        Oe = (F(s), H(s), fe(c), de(c), he(l), ee(a) || pe(l), re(a), L(s), we(), me(), ye(), ve(), be(), pe(l), ee(a) && !pe(l));
      $(u), G(u), ae(a), se(a);
      r.C0 = ke, r.lT = xe, r.n8 = Oe, r.UX = ge, r.w = _e
    }
  }
]);