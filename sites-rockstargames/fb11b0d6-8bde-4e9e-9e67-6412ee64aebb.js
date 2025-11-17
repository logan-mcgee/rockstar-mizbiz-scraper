try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    r = (new e.Error).stack;
  r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "fb11b0d6-8bde-4e9e-9e67-6412ee64aebb", e._sentryDebugIdIdentifier = "sentry-dbid-fb11b0d6-8bde-4e9e-9e67-6412ee64aebb")
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
        zp: () => b
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
          r && (n = n.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, n)
        }
        return t
      }

      function a(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? o(t, !0).forEach(function(r) {
            i(e, r, t[r])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : o(t).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
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
          return (0, n.useEffect)(function() {
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
          }, []), a({}, o, {
            setNetworkStatus: c
          })
        },
        b = function() {
          return {
            unsupported: c = !("undefined" != typeof navigator && "connection" in navigator && "saveData" in navigator.connection),
            saveData: c ? arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null : !0 === navigator.connection.saveData
          }
        };
      if (u = !("undefined" != typeof navigator && "deviceMemory" in navigator)) l = {
        unsupported: u
      };
      else {
        var d = "memory" in performance ? performance.memory : null;
        l = {
          unsupported: u,
          deviceMemory: navigator.deviceMemory,
          totalJSHeapSize: d ? d.totalJSHeapSize : null,
          usedJSHeapSize: d ? d.usedJSHeapSize : null,
          jsHeapSizeLimit: d ? d.jsHeapSizeLimit : null
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
          b = "name",
          d = "type",
          p = "vendor",
          w = "version",
          m = "architecture",
          y = "console",
          h = "mobile",
          v = "tablet",
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
          I = "Honor",
          M = "Huawei",
          z = "LG",
          C = "Microsoft",
          D = "Motorola",
          N = "Nvidia",
          R = "OnePlus",
          q = "Opera",
          U = "OPPO",
          B = "Samsung",
          L = "Sharp",
          F = "Sony",
          H = "Xiaomi",
          $ = "Zebra",
          V = "Facebook",
          G = "Chromium OS",
          W = "Mac OS",
          X = " Browser",
          J = function(e) {
            for (var r = {}, t = 0; t < e.length; t++) r[e[t].toUpperCase()] = e[t];
            return r
          },
          Z = function(e, r) {
            return typeof e === u && -1 !== K(r).indexOf(K(e))
          },
          K = function(e) {
            return e.toLowerCase()
          },
          Y = function(e, r) {
            if (typeof e === u) return e = e.replace(/^\s\s*/, ""), typeof r === s ? e : e.substring(0, 500)
          },
          Q = function(e, r) {
            for (var t, n, i, s, u, l, f = 0; f < r.length && !u;) {
              var b = r[f],
                d = r[f + 1];
              for (t = n = 0; t < b.length && !u && b[t];)
                if (u = b[t++].exec(e))
                  for (i = 0; i < d.length; i++) l = u[++n], typeof(s = d[i]) === c && s.length > 0 ? 2 === s.length ? typeof s[1] == a ? this[s[0]] = s[1].call(this, l) : this[s[0]] = s[1] : 3 === s.length ? typeof s[1] !== a || s[1].exec && s[1].test ? this[s[0]] = l ? l.replace(s[1], s[2]) : o : this[s[0]] = l ? s[1].call(this, l, s[2]) : o : 4 === s.length && (this[s[0]] = l ? s[3].call(this, l.replace(s[1], s[2])) : o) : this[s] = l || o;
              f += 2
            }
          },
          ee = function(e, r) {
            for (var t in r)
              if (typeof r[t] === c && r[t].length > 0) {
                for (var n = 0; n < r[t].length; n++)
                  if (Z(r[t][n], e)) return "?" === t ? o : t
              } else if (Z(r[t], e)) return "?" === t ? o : t;
            return r.hasOwnProperty("*") ? r["*"] : e
          },
          re = {
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
          te = {
            browser: [
              [/\b(?:crmo|crios)\/([\w\.]+)/i],
              [w, [b, "Chrome"]],
              [/edg(?:e|ios|a)?\/([\w\.]+)/i],
              [w, [b, "Edge"]],
              [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
              [b, w],
              [/opios[\/ ]+([\w\.]+)/i],
              [w, [b, q + " Mini"]],
              [/\bop(?:rg)?x\/([\w\.]+)/i],
              [w, [b, q + " GX"]],
              [/\bopr\/([\w\.]+)/i],
              [w, [b, q]],
              [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
              [w, [b, "Baidu"]],
              [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
              [w, [b, "Maxthon"]],
              [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i, /(heytap|ovi|115)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
              [b, w],
              [/quark(?:pc)?\/([-\w\.]+)/i],
              [w, [b, "Quark"]],
              [/\bddg\/([\w\.]+)/i],
              [w, [b, "DuckDuckGo"]],
              [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
              [w, [b, "UC" + P]],
              [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
              [w, [b, "WeChat"]],
              [/konqueror\/([\w\.]+)/i],
              [w, [b, "Konqueror"]],
              [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
              [w, [b, "IE"]],
              [/ya(?:search)?browser\/([\w\.]+)/i],
              [w, [b, "Yandex"]],
              [/slbrowser\/([\w\.]+)/i],
              [w, [b, "Smart Lenovo " + P]],
              [/(avast|avg)\/([\w\.]+)/i],
              [
                [b, /(.+)/, "$1 Secure " + P], w
              ],
              [/\bfocus\/([\w\.]+)/i],
              [w, [b, T + " Focus"]],
              [/\bopt\/([\w\.]+)/i],
              [w, [b, q + " Touch"]],
              [/coc_coc\w+\/([\w\.]+)/i],
              [w, [b, "Coc Coc"]],
              [/dolfin\/([\w\.]+)/i],
              [w, [b, "Dolphin"]],
              [/coast\/([\w\.]+)/i],
              [w, [b, q + " Coast"]],
              [/miuibrowser\/([\w\.]+)/i],
              [w, [b, "MIUI" + X]],
              [/fxios\/([\w\.-]+)/i],
              [w, [b, T]],
              [/\bqihoobrowser\/?([\w\.]*)/i],
              [w, [b, "360"]],
              [/\b(qq)\/([\w\.]+)/i],
              [
                [b, /(.+)/, "$1Browser"], w
              ],
              [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
              [
                [b, /(.+)/, "$1" + X], w
              ],
              [/samsungbrowser\/([\w\.]+)/i],
              [w, [b, B + " Internet"]],
              [/metasr[\/ ]?([\d\.]+)/i],
              [w, [b, "Sogou Explorer"]],
              [/(sogou)mo\w+\/([\d\.]+)/i],
              [
                [b, "Sogou Mobile"], w
              ],
              [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],
              [b, w],
              [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
              [b],
              [/ome\/([\w\.]+) \w* ?(iron) saf/i, /ome\/([\w\.]+).+qihu (360)[es]e/i],
              [w, b],
              [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
              [
                [b, V], w
              ],
              [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /(daum)apps[\/ ]([\w\.]+)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
              [b, w],
              [/\bgsa\/([\w\.]+) .*safari\//i],
              [w, [b, "GSA"]],
              [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
              [w, [b, "TikTok"]],
              [/headlesschrome(?:\/([\w\.]+)| )/i],
              [w, [b, E + " Headless"]],
              [/ wv\).+(chrome)\/([\w\.]+)/i],
              [
                [b, E + " WebView"], w
              ],
              [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
              [w, [b, "Android " + P]],
              [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
              [b, w],
              [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
              [w, [b, "Mobile Safari"]],
              [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
              [w, b],
              [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
              [b, [w, ee, {
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
              [b, w],
              [/(navigator|netscape\d?)\/([-\w\.]+)/i],
              [
                [b, "Netscape"], w
              ],
              [/(wolvic|librewolf)\/([\w\.]+)/i],
              [b, w],
              [/mobile vr; rv:([\w\.]+)\).+firefox/i],
              [w, [b, T + " Reality"]],
              [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /\b(links) \(([\w\.]+)/i],
              [b, [w, /_/g, "."]],
              [/(cobalt)\/([\w\.]+)/i],
              [b, [w, /master.|lts./, ""]]
            ],
            cpu: [
              [/\b((amd|x|x86[-_]?|wow|win)64)\b/i],
              [
                [m, "amd64"]
              ],
              [/(ia32(?=;))/i, /\b((i[346]|x)86)(pc)?\b/i],
              [
                [m, "ia32"]
              ],
              [/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],
              [
                [m, "arm64"]
              ],
              [/\b(arm(v[67])?ht?n?[fl]p?)\b/i],
              [
                [m, "armhf"]
              ],
              [/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],
              [
                [m, "arm"]
              ],
              [/((ppc|powerpc)(64)?)( mac|;|\))/i],
              [
                [m, /ower/, "", K]
              ],
              [/ sun4\w[;\)]/i],
              [
                [m, "sparc"]
              ],
              [/\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i],
              [
                [m, K]
              ]
            ],
            device: [
              [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
              [f, [p, B],
                [d, v]
              ],
              [/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]((?!sm-[lr])[-\w]+)/i, /sec-(sgh\w+)/i],
              [f, [p, B],
                [d, h]
              ],
              [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
              [f, [p, O],
                [d, h]
              ],
              [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
              [f, [p, O],
                [d, v]
              ],
              [/(macintosh);/i],
              [f, [p, O]],
              [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
              [f, [p, L],
                [d, h]
              ],
              [/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i],
              [f, [p, I],
                [d, v]
              ],
              [/honor([-\w ]+)[;\)]/i],
              [f, [p, I],
                [d, h]
              ],
              [/\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i],
              [f, [p, M],
                [d, v]
              ],
              [/(?:huawei)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
              [f, [p, M],
                [d, h]
              ],
              [/oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i, /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i],
              [
                [f, /_/g, " "],
                [p, H],
                [d, v]
              ],
              [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i, / ([\w ]+) miui\/v?\d/i],
              [
                [f, /_/g, " "],
                [p, H],
                [d, h]
              ],
              [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
              [f, [p, U],
                [d, h]
              ],
              [/\b(opd2(\d{3}a?))(?: bui|\))/i],
              [f, [p, ee, {
                  OnePlus: ["304", "403", "203"],
                  "*": U
                }],
                [d, v]
              ],
              [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
              [f, [p, "Vivo"],
                [d, h]
              ],
              [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
              [f, [p, "Realme"],
                [d, h]
              ],
              [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
              [f, [p, D],
                [d, h]
              ],
              [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
              [f, [p, D],
                [d, v]
              ],
              [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
              [f, [p, z],
                [d, v]
              ],
              [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv|watch)\w+)/i, /\blg-?([\d\w]+) bui/i],
              [f, [p, z],
                [d, h]
              ],
              [/(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i, /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i],
              [f, [p, "Lenovo"],
                [d, v]
              ],
              [/(nokia) (t[12][01])/i],
              [p, f, [d, v]],
              [/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i, /nokia[-_ ]?(([-\w\. ]*))/i],
              [
                [f, /_/g, " "],
                [d, h],
                [p, "Nokia"]
              ],
              [/(pixel (c|tablet))\b/i],
              [f, [p, A],
                [d, v]
              ],
              [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
              [f, [p, A],
                [d, h]
              ],
              [/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
              [f, [p, F],
                [d, h]
              ],
              [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
              [
                [f, "Xperia Tablet"],
                [p, F],
                [d, v]
              ],
              [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
              [f, [p, R],
                [d, h]
              ],
              [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
              [f, [p, k],
                [d, v]
              ],
              [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
              [
                [f, /(.+)/g, "Fire Phone $1"],
                [p, k],
                [d, h]
              ],
              [/(playbook);[-\w\),; ]+(rim)/i],
              [f, p, [d, v]],
              [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
              [f, [p, j],
                [d, h]
              ],
              [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
              [f, [p, S],
                [d, v]
              ],
              [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
              [f, [p, S],
                [d, h]
              ],
              [/(nexus 9)/i],
              [f, [p, "HTC"],
                [d, v]
              ],
              [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
              [p, [f, /_/g, " "],
                [d, h]
              ],
              [/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i],
              [f, [p, "TCL"],
                [d, v]
              ],
              [/(itel) ((\w+))/i],
              [
                [p, K], f, [d, ee, {
                  tablet: ["p10001l", "w7001"],
                  "*": "mobile"
                }]
              ],
              [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
              [f, [p, "Acer"],
                [d, v]
              ],
              [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
              [f, [p, "Meizu"],
                [d, h]
              ],
              [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
              [f, [p, "Ulefone"],
                [d, h]
              ],
              [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
              [f, [p, "Energizer"],
                [d, h]
              ],
              [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
              [f, [p, "Cat"],
                [d, h]
              ],
              [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
              [f, [p, "Smartfren"],
                [d, h]
              ],
              [/droid.+; (a(?:015|06[35]|142p?))/i],
              [f, [p, "Nothing"],
                [d, h]
              ],
              [/; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i, /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i],
              [f, [p, "Archos"],
                [d, v]
              ],
              [/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i],
              [f, [p, "Archos"],
                [d, h]
              ],
              [/(imo) (tab \w+)/i, /(infinix) (x1101b?)/i],
              [p, f, [d, v]],
              [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i, /; (hmd|imo) ([\w ]+?)(?: bui|\))/i, /(hp) ([\w ]+\w)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i, /(oppo) ?([\w ]+) bui/i],
              [p, f, [d, h]],
              [/(kobo)\s(ereader|touch)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
              [p, f, [d, v]],
              [/(surface duo)/i],
              [f, [p, C],
                [d, v]
              ],
              [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
              [f, [p, "Fairphone"],
                [d, h]
              ],
              [/(u304aa)/i],
              [f, [p, "AT&T"],
                [d, h]
              ],
              [/\bsie-(\w*)/i],
              [f, [p, "Siemens"],
                [d, h]
              ],
              [/\b(rct\w+) b/i],
              [f, [p, "RCA"],
                [d, v]
              ],
              [/\b(venue[\d ]{2,7}) b/i],
              [f, [p, "Dell"],
                [d, v]
              ],
              [/\b(q(?:mv|ta)\w+) b/i],
              [f, [p, "Verizon"],
                [d, v]
              ],
              [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
              [f, [p, "Barnes & Noble"],
                [d, v]
              ],
              [/\b(tm\d{3}\w+) b/i],
              [f, [p, "NuVision"],
                [d, v]
              ],
              [/\b(k88) b/i],
              [f, [p, "ZTE"],
                [d, v]
              ],
              [/\b(nx\d{3}j) b/i],
              [f, [p, "ZTE"],
                [d, h]
              ],
              [/\b(gen\d{3}) b.+49h/i],
              [f, [p, "Swiss"],
                [d, h]
              ],
              [/\b(zur\d{3}) b/i],
              [f, [p, "Swiss"],
                [d, v]
              ],
              [/\b((zeki)?tb.*\b) b/i],
              [f, [p, "Zeki"],
                [d, v]
              ],
              [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
              [
                [p, "Dragon Touch"], f, [d, v]
              ],
              [/\b(ns-?\w{0,9}) b/i],
              [f, [p, "Insignia"],
                [d, v]
              ],
              [/\b((nxa|next)-?\w{0,9}) b/i],
              [f, [p, "NextBook"],
                [d, v]
              ],
              [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
              [
                [p, "Voice"], f, [d, h]
              ],
              [/\b(lvtel\-)?(v1[12]) b/i],
              [
                [p, "LvTel"], f, [d, h]
              ],
              [/\b(ph-1) /i],
              [f, [p, "Essential"],
                [d, h]
              ],
              [/\b(v(100md|700na|7011|917g).*\b) b/i],
              [f, [p, "Envizen"],
                [d, v]
              ],
              [/\b(trio[-\w\. ]+) b/i],
              [f, [p, "MachSpeed"],
                [d, v]
              ],
              [/\btu_(1491) b/i],
              [f, [p, "Rotor"],
                [d, v]
              ],
              [/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],
              [f, [p, N],
                [d, v]
              ],
              [/(sprint) (\w+)/i],
              [p, f, [d, h]],
              [/(kin\.[onetw]{3})/i],
              [
                [f, /\./g, " "],
                [p, C],
                [d, h]
              ],
              [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
              [f, [p, $],
                [d, v]
              ],
              [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
              [f, [p, $],
                [d, h]
              ],
              [/smart-tv.+(samsung)/i],
              [p, [d, g]],
              [/hbbtv.+maple;(\d+)/i],
              [
                [f, /^/, "SmartTV"],
                [p, B],
                [d, g]
              ],
              [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
              [
                [p, z],
                [d, g]
              ],
              [/(apple) ?tv/i],
              [p, [f, O + " TV"],
                [d, g]
              ],
              [/crkey/i],
              [
                [f, E + "cast"],
                [p, A],
                [d, g]
              ],
              [/droid.+aft(\w+)( bui|\))/i],
              [f, [p, k],
                [d, g]
              ],
              [/(shield \w+ tv)/i],
              [f, [p, N],
                [d, g]
              ],
              [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
              [f, [p, L],
                [d, g]
              ],
              [/(bravia[\w ]+)( bui|\))/i],
              [f, [p, F],
                [d, g]
              ],
              [/(mi(tv|box)-?\w+) bui/i],
              [f, [p, H],
                [d, g]
              ],
              [/Hbbtv.*(technisat) (.*);/i],
              [p, f, [d, g]],
              [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
              [
                [p, Y],
                [f, Y],
                [d, g]
              ],
              [/droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i],
              [f, [d, g]],
              [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
              [
                [d, g]
              ],
              [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
              [p, f, [d, y]],
              [/droid.+; (shield)( bui|\))/i],
              [f, [p, N],
                [d, y]
              ],
              [/(playstation \w+)/i],
              [f, [p, F],
                [d, y]
              ],
              [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
              [f, [p, C],
                [d, y]
              ],
              [/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],
              [f, [p, B],
                [d, _]
              ],
              [/((pebble))app/i, /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i],
              [p, f, [d, _]],
              [/(ow(?:19|20)?we?[1-3]{1,3})/i],
              [f, [p, U],
                [d, _]
              ],
              [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
              [f, [p, O],
                [d, _]
              ],
              [/(opwwe\d{3})/i],
              [f, [p, R],
                [d, _]
              ],
              [/(moto 360)/i],
              [f, [p, D],
                [d, _]
              ],
              [/(smartwatch 3)/i],
              [f, [p, F],
                [d, _]
              ],
              [/(g watch r)/i],
              [f, [p, z],
                [d, _]
              ],
              [/droid.+; (wt63?0{2,3})\)/i],
              [f, [p, $],
                [d, _]
              ],
              [/droid.+; (glass) \d/i],
              [f, [p, A],
                [d, _]
              ],
              [/(pico) (4|neo3(?: link|pro)?)/i],
              [p, f, [d, _]],
              [/; (quest( \d| pro)?)/i],
              [f, [p, V],
                [d, _]
              ],
              [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
              [p, [d, x]],
              [/(aeobc)\b/i],
              [f, [p, k],
                [d, x]
              ],
              [/(homepod).+mac os/i],
              [f, [p, O],
                [d, x]
              ],
              [/windows iot/i],
              [
                [d, x]
              ],
              [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
              [f, [d, h]],
              [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
              [f, [d, v]],
              [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
              [
                [d, v]
              ],
              [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
              [
                [d, h]
              ],
              [/droid .+?; ([\w\. -]+)( bui|\))/i],
              [f, [p, "Generic"]]
            ],
            engine: [
              [/windows.+ edge\/([\w\.]+)/i],
              [w, [b, "EdgeHTML"]],
              [/(arkweb)\/([\w\.]+)/i],
              [b, w],
              [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
              [w, [b, "Blink"]],
              [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
              [b, w],
              [/ladybird\//i],
              [
                [b, "LibWeb"]
              ],
              [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
              [w, b]
            ],
            os: [
              [/microsoft (windows) (vista|xp)/i],
              [b, w],
              [/(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i],
              [b, [w, ee, re]],
              [/windows nt 6\.2; (arm)/i, /windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
              [
                [w, ee, re],
                [b, "Windows"]
              ],
              [/[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
              [
                [w, /_/g, "."],
                [b, "iOS"]
              ],
              [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
              [
                [b, W],
                [w, /_/g, "."]
              ],
              [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
              [w, b],
              [/(ubuntu) ([\w\.]+) like android/i],
              [
                [b, /(.+)/, "$1 Touch"], w
              ],
              [/(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/; ]?([\d\.]*)/i],
              [b, w],
              [/\(bb(10);/i],
              [w, [b, j]],
              [/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],
              [w, [b, "Symbian"]],
              [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
              [w, [b, T + " OS"]],
              [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
              [w, [b, "webOS"]],
              [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
              [w, [b, "watchOS"]],
              [/crkey\/([\d\.]+)/i],
              [w, [b, E + "cast"]],
              [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
              [
                [b, G], w
              ],
              [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
              [b, w],
              [/(sunos) ?([\w\.\d]*)/i],
              [
                [b, "Solaris"], w
              ],
              [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
              [b, w]
            ]
          },
          ne = function(e, r) {
            if (typeof e === c && (r = e, e = o), !(this instanceof ne)) return new ne(e, r).getResult();
            var t = typeof i !== s && i.navigator ? i.navigator : o,
              n = e || (t && t.userAgent ? t.userAgent : ""),
              y = t && t.userAgentData ? t.userAgentData : o,
              g = r ? function(e, r) {
                var t = {};
                for (var n in e) r[n] && r[n].length % 2 == 0 ? t[n] = r[n].concat(e[n]) : t[n] = e[n];
                return t
              }(te, r) : te,
              _ = t && t.userAgent == n;
            return this.getBrowser = function() {
              var e, r = {};
              return r[b] = o, r[w] = o, Q.call(r, n, g.browser), r[l] = typeof(e = r[w]) === u ? e.replace(/[^\d\.]/g, "").split(".")[0] : o, _ && t && t.brave && typeof t.brave.isBrave == a && (r[b] = "Brave"), r
            }, this.getCPU = function() {
              var e = {};
              return e[m] = o, Q.call(e, n, g.cpu), e
            }, this.getDevice = function() {
              var e = {};
              return e[p] = o, e[f] = o, e[d] = o, Q.call(e, n, g.device), _ && !e[d] && y && y.mobile && (e[d] = h), _ && "Macintosh" == e[f] && t && typeof t.standalone !== s && t.maxTouchPoints && t.maxTouchPoints > 2 && (e[f] = "iPad", e[d] = v), e
            }, this.getEngine = function() {
              var e = {};
              return e[b] = o, e[w] = o, Q.call(e, n, g.engine), e
            }, this.getOS = function() {
              var e = {};
              return e[b] = o, e[w] = o, Q.call(e, n, g.os), _ && !e[b] && y && y.platform && "Unknown" != y.platform && (e[b] = y.platform.replace(/chrome os/i, G).replace(/macos/i, W)), e
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
              return n = typeof e === u && e.length > 500 ? Y(e, 500) : e, this
            }, this.setUA(n), this
          };
        ne.VERSION = "1.0.41", ne.BROWSER = J([b, w, l]), ne.CPU = J([m]), ne.DEVICE = J([f, p, d, y, h, g, v, _, x]), ne.ENGINE = ne.OS = J([b, w]), typeof r !== s ? (e.exports && (r = e.exports = ne), r.UAParser = ne) : t.amdO ? (n = function() {
          return ne
        }.call(r, t, r, e)) === o || (e.exports = n) : typeof i !== s && (i.UAParser = ne);
        var ie = typeof i !== s && (i.jQuery || i.Zepto);
        if (ie && !ie.ua) {
          var oe = new ne;
          ie.ua = oe.getResult(), ie.ua.get = function() {
            return oe.getUA()
          }, ie.ua.set = function(e) {
            oe.setUA(e);
            var r = oe.getResult();
            for (var t in r) ie.ua[t] = r[t]
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
                return decodeURIComponent(atob(e).replace(/(.)/g, (e, r) => {
                  let t = r.charCodeAt(0).toString(16).toUpperCase();
                  return t.length < 2 && (t = "0" + t), "%" + t
                }))
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
        __addDisposableResource: () => D,
        __assign: () => o,
        __asyncDelegator: () => S,
        __asyncGenerator: () => O,
        __asyncValues: () => j,
        __await: () => k,
        __awaiter: () => p,
        __classPrivateFieldGet: () => M,
        __classPrivateFieldIn: () => C,
        __classPrivateFieldSet: () => z,
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
        __metadata: () => d,
        __param: () => c,
        __propKey: () => f,
        __read: () => v,
        __rest: () => a,
        __rewriteRelativeImportExtension: () => q,
        __runInitializers: () => l,
        __setFunctionName: () => b,
        __spread: () => g,
        __spreadArray: () => x,
        __spreadArrays: () => _,
        __values: () => h,
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
        for (var s, c = n.kind, u = "getter" === c ? "get" : "setter" === c ? "set" : "value", l = !r && e ? n.static ? e : e.prototype : null, f = r || (l ? Object.getOwnPropertyDescriptor(l, n.name) : {}), b = !1, d = t.length - 1; d >= 0; d--) {
          var p = {};
          for (var w in n) p[w] = "access" === w ? {} : n[w];
          for (var w in n.access) p.access[w] = n.access[w];
          p.addInitializer = function(e) {
            if (b) throw new TypeError("Cannot add initializers after decoration has completed");
            o.push(a(e || null))
          };
          var m = (0, t[d])("accessor" === c ? {
            get: f.get,
            set: f.set
          } : f[u], p);
          if ("accessor" === c) {
            if (void 0 === m) continue;
            if (null === m || "object" != typeof m) throw new TypeError("Object expected");
            (s = a(m.get)) && (f.get = s), (s = a(m.set)) && (f.set = s), (s = a(m.init)) && i.unshift(s)
          } else(s = a(m)) && ("field" === c ? i.unshift(s) : f[u] = s)
        }
        l && Object.defineProperty(l, n.name, f), b = !0
      }

      function l(e, r, t) {
        for (var n = arguments.length > 2, i = 0; i < r.length; i++) t = n ? r[i].call(e, t) : r[i].call(e);
        return n ? t : void 0
      }

      function f(e) {
        return "symbol" == typeof e ? e : "".concat(e)
      }

      function b(e, r, t) {
        return "symbol" == typeof r && (r = r.description ? "[".concat(r.description, "]") : ""), Object.defineProperty(e, "name", {
          configurable: !0,
          value: t ? "".concat(t, " ", r) : r
        })
      }

      function d(e, r) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, r)
      }

      function p(e, r, t, n) {
        return new(t || (t = Promise))(function(i, o) {
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
            e.done ? i(e.value) : (r = e.value, r instanceof t ? r : new t(function(e) {
              e(r)
            })).then(a, s)
          }
          c((n = n.apply(e, r || [])).next())
        })
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

      function h(e) {
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

      function v(e, r) {
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
        for (var e = [], r = 0; r < arguments.length; r++) e = e.concat(v(arguments[r]));
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
        return n = Object.create(("function" == typeof AsyncIterator ? AsyncIterator : Object).prototype), a("next"), a("throw"), a("return", function(e) {
          return function(r) {
            return Promise.resolve(r).then(e, u)
          }
        }), n[Symbol.asyncIterator] = function() {
          return this
        }, n;

        function a(e, r) {
          i[e] && (n[e] = function(r) {
            return new Promise(function(t, n) {
              o.push([e, r, t, n]) > 1 || s(e, r)
            })
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
        return r = {}, n("next"), n("throw", function(e) {
          throw e
        }), n("return"), r[Symbol.iterator] = function() {
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
        return t ? t.call(e) : (e = h(e), r = {}, n("next"), n("throw"), n("return"), r[Symbol.asyncIterator] = function() {
          return this
        }, r);

        function n(t) {
          r[t] = e[t] && function(r) {
            return new Promise(function(n, i) {
              ! function(e, r, t, n) {
                Promise.resolve(n).then(function(r) {
                  e({
                    value: r,
                    done: t
                  })
                }, r)
              }(n, i, (r = e[t](r)).done, r.value)
            })
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

      function z(e, r, t, n, i) {
        if ("m" === n) throw new TypeError("Private method is not writable");
        if ("a" === n && !i) throw new TypeError("Private accessor was defined without a setter");
        if ("function" == typeof r ? e !== r || !i : !r.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return "a" === n ? i.call(e, t) : i ? i.value = t : r.set(e, t), t
      }

      function C(e, r) {
        if (null === r || "object" != typeof r && "function" != typeof r) throw new TypeError("Cannot use 'in' operator on non-object");
        return "function" == typeof e ? r === e : e.has(r)
      }

      function D(e, r, t) {
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
              if (t.async) return n |= 2, Promise.resolve(o).then(i, function(e) {
                return r(e), i()
              })
            } else n |= 1
          } catch (e) {
            r(e)
          }
          if (1 === n) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
          if (e.hasError) throw e.error
        }()
      }

      function q(e, r) {
        return "string" == typeof e && /^\.\.?\//.test(e) ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(e, t, n, i, o) {
          return t ? r ? ".jsx" : ".js" : !n || i && o ? n + i + "." + o.toLowerCase() + "js" : e
        }) : e
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
        __setFunctionName: b,
        __metadata: d,
        __awaiter: p,
        __generator: w,
        __createBinding: m,
        __exportStar: y,
        __values: h,
        __read: v,
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
        __classPrivateFieldSet: z,
        __classPrivateFieldIn: C,
        __addDisposableResource: D,
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
        return e.concat(r).map(function(e) {
          return n(e, t)
        })
      }

      function o(e) {
        return Object.keys(e).concat(function(e) {
          return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function(r) {
            return Object.propertyIsEnumerable.call(e, r)
          }) : []
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
          return t.isMergeableObject(e) && o(e).forEach(function(r) {
            i[r] = n(e[r], t)
          }), o(r).forEach(function(o) {
            (function(e, r) {
              return a(e, r) && !(Object.hasOwnProperty.call(e, r) && Object.propertyIsEnumerable.call(e, r))
            })(e, o) || (a(e, o) && t.isMergeableObject(r[o]) ? i[o] = function(e, r) {
              if (!r.customMerge) return s;
              var t = r.customMerge(e);
              return "function" == typeof t ? t : s
            }(o, t)(e[o], r[o], t) : i[o] = n(r[o], t))
          }), i
        }(e, t, c) : n(t, c)
      }
      s.all = function(e, r) {
        if (!Array.isArray(e)) throw new Error("first argument should be an array");
        return e.reduce(function(e, t) {
          return s(e, t, r)
        }, {})
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
        b = "tablet",
        d = "Chrome",
        p = "Firefox",
        w = "Opera",
        m = "Yandex",
        y = "Safari",
        h = "Internet Explorer",
        v = "Edge",
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
        z = function(e) {
          return e.type === f
        },
        C = function(e) {
          return e.type === b
        },
        D = function(e) {
          var r = e.type;
          return r === f || r === b
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
        L = function(e) {
          var r = e.vendor;
          return A(r)
        },
        F = function(e) {
          var r = e.model;
          return A(r)
        },
        H = function(e) {
          var r = e.type;
          return A(r, "browser")
        },
        $ = function(e) {
          return e.name === j
        },
        V = function(e) {
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
          return e.name === d
        },
        Y = function(e) {
          return e.name === p
        },
        Q = function(e) {
          return e.name === g
        },
        ee = function(e) {
          return e.name === v
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
          return r === h || r === _
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
        be = function(e) {
          var r = e.version;
          return A(r)
        },
        de = function() {
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
        he = function() {
          return M("iPod")
        },
        ve = function(e) {
          return A(e)
        };
      var ge = N(s),
        _e = (U(s), q(s)),
        xe = (B(s), ne(a) || me(), Q(a), D(s) || me(), z(s), C(s) || me(), R(s), R(s), $(u), W(u), X(u) || me(), K(a), Y(a), te(a), ie(a), oe(a)),
        ke = (J(u), Z(u), ce(a), ue(a), le(a)),
        Oe = (L(s), F(s), fe(c), be(c), ve(l), ee(a) || pe(l), re(a), H(s), we(), me(), ye(), he(), de(), pe(l), ee(a) && !pe(l));
      V(u), G(u), ae(a), se(a);
      r.C0 = ke, r.lT = xe, r.n8 = Oe, r.UX = ge, r.w = _e
    }
  }
]);