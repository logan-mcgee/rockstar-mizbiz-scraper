try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "3cc8325f-a957-4fa0-b7ba-ccd6959cf0be", e._sentryDebugIdIdentifier = "sentry-dbid-3cc8325f-a957-4fa0-b7ba-ccd6959cf0be")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-gta-gen9",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [2293], {
    325: (e, t, r) => {
      "use strict";
      var n;
      r.d(t, {
        r: () => c
      });
      var i = r(60276),
        o = r(82540),
        a = r(46026),
        s = !1,
        c = (n || (n = r.t(o, 2))).useSyncExternalStore || function(e, t, r) {
          var n = t();
          !1 === globalThis.__DEV__ || s || n === t() || (s = !0, !1 !== globalThis.__DEV__ && i.V1.error(68));
          var c = o.useState({
              inst: {
                value: n,
                getSnapshot: t
              }
            }),
            l = c[0].inst,
            f = c[1];
          return a.JR ? o.useLayoutEffect((function() {
            Object.assign(l, {
              value: n,
              getSnapshot: t
            }), u(l) && f({
              inst: l
            })
          }), [e, n, t]) : Object.assign(l, {
            value: n,
            getSnapshot: t
          }), o.useEffect((function() {
            return u(l) && f({
              inst: l
            }), e((function() {
              u(l) && f({
                inst: l
              })
            }))
          }), [e]), n
        };

      function u(e) {
        var t = e.value,
          r = e.getSnapshot;
        try {
          return t !== r()
        } catch (e) {
          return !0
        }
      }
    },
    21823: (e, t, r) => {
      "use strict";
      r.d(t, {
        MS: () => c,
        UT: () => u,
        WR: () => s,
        bl: () => i
      });
      var n = r(87552),
        i = new n.DX,
        o = new WeakMap;

      function a(e) {
        var t = o.get(e);
        return t || o.set(e, t = {
          vars: new Set,
          dep: (0, n.yN)()
        }), t
      }

      function s(e) {
        a(e).vars.forEach((function(t) {
          return t.forgetCache(e)
        }))
      }

      function c(e) {
        a(e).vars.forEach((function(t) {
          return t.attachCache(e)
        }))
      }

      function u(e) {
        var t = new Set,
          r = new Set,
          n = function(s) {
            if (arguments.length > 0) {
              if (e !== s) {
                e = s, t.forEach((function(e) {
                  a(e).dep.dirty(n),
                    function(e) {
                      e.broadcastWatches && e.broadcastWatches()
                    }(e)
                }));
                var c = Array.from(r);
                r.clear(), c.forEach((function(t) {
                  return t(e)
                }))
              }
            } else {
              var u = i.getValue();
              u && (o(u), a(u).dep(n))
            }
            return e
          };
        n.onNextChange = function(e) {
          return r.add(e),
            function() {
              r.delete(e)
            }
        };
        var o = n.attachCache = function(e) {
          return t.add(e), a(e).vars.add(n), n
        };
        return n.forgetCache = function(e) {
          return t.delete(e)
        }, n
      }
    },
    25906: (e, t, r) => {
      "use strict";
      r.d(t, {
        M5: () => f,
        XB: () => w,
        xV: () => h,
        zp: () => d
      });
      var n = r(62229);

      function i(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }

      function o(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function a(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? o(r, !0).forEach((function(t) {
            i(e, t, r[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : o(r).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }
      var s, c, u, l, f = function(e) {
          var t, r = {
              unsupported: s = !("undefined" != typeof navigator && "connection" in navigator && "effectiveType" in navigator.connection),
              effectiveConnectionType: s ? e : navigator.connection.effectiveType
            },
            i = function(e) {
              if (Array.isArray(e)) return e
            }(t = (0, n.useState)(r)) || function(e) {
              if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) {
                var t = [],
                  r = !0,
                  n = !1,
                  i = void 0;
                try {
                  for (var o, a = e[Symbol.iterator](); !(r = (o = a.next()).done) && (t.push(o.value), 2 !== t.length); r = !0);
                } catch (e) {
                  n = !0, i = e
                } finally {
                  try {
                    r || null == a.return || a.return()
                  } finally {
                    if (n) throw i
                  }
                }
                return t
              }
            }(t) || function() {
              throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }(),
            o = i[0],
            c = i[1];
          return (0, n.useEffect)((function() {
            if (!s) {
              var e = navigator.connection,
                t = function() {
                  c({
                    effectiveConnectionType: e.effectiveType
                  })
                };
              return e.addEventListener("change", t),
                function() {
                  e.removeEventListener("change", t)
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
        var p = "memory" in performance ? performance.memory : null;
        l = {
          unsupported: u,
          deviceMemory: navigator.deviceMemory,
          totalJSHeapSize: p ? p.totalJSHeapSize : null,
          usedJSHeapSize: p ? p.usedJSHeapSize : null,
          jsHeapSizeLimit: p ? p.jsHeapSizeLimit : null
        }
      }
      var b, w = function(e) {
        return u && e ? a({}, l, {}, e) : a({}, l)
      };
      b = "undefined" != typeof navigator && "hardwareConcurrency" in navigator ? {
        unsupported: !1,
        numberOfLogicalProcessors: navigator.hardwareConcurrency
      } : {
        unsupported: !0
      };
      var h = function() {
        return a({}, b)
      }
    },
    35394: (e, t, r) => {
      "use strict";

      function n() {}
      r.d(t, {
        C: () => i
      });
      class i {
        constructor(e = 1 / 0, t = n) {
          this.max = e, this.dispose = t, this.map = new Map, this.newest = null, this.oldest = null
        }
        has(e) {
          return this.map.has(e)
        }
        get(e) {
          const t = this.getNode(e);
          return t && t.value
        }
        get size() {
          return this.map.size
        }
        getNode(e) {
          const t = this.map.get(e);
          if (t && t !== this.newest) {
            const {
              older: e,
              newer: r
            } = t;
            r && (r.older = e), e && (e.newer = r), t.older = this.newest, t.older.newer = t, t.newer = null, this.newest = t, t === this.oldest && (this.oldest = r)
          }
          return t
        }
        set(e, t) {
          let r = this.getNode(e);
          return r ? r.value = t : (r = {
            key: e,
            value: t,
            newer: null,
            older: this.newest
          }, this.newest && (this.newest.newer = r), this.newest = r, this.oldest = this.oldest || r, this.map.set(e, r), r.value)
        }
        clean() {
          for (; this.oldest && this.map.size > this.max;) this.delete(this.oldest.key)
        }
        delete(e) {
          const t = this.map.get(e);
          return !!t && (t === this.newest && (this.newest = t.older), t === this.oldest && (this.oldest = t.newer), t.newer && (t.newer.older = t.older), t.older && (t.older.newer = t.newer), this.map.delete(e), this.dispose(t.value, e), !0)
        }
      }
    },
    35907: (e, t, r) => {
      "use strict";
      r.d(t, {
        v: () => i
      });
      var n = new Map;

      function i(e) {
        var t = n.get(e) || 1;
        return n.set(e, t + 1), "".concat(e, ":").concat(t, ":").concat(Math.random().toString(36).slice(2))
      }
    },
    40139: function(e, t, r) {
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
          p = "type",
          b = "vendor",
          w = "version",
          h = "architecture",
          y = "console",
          m = "mobile",
          v = "tablet",
          g = "smarttv",
          _ = "wearable",
          k = "embedded",
          x = "Amazon",
          O = "Apple",
          S = "ASUS",
          E = "BlackBerry",
          j = "Browser",
          T = "Chrome",
          P = "Firefox",
          A = "Google",
          C = "Huawei",
          D = "LG",
          M = "Microsoft",
          N = "Motorola",
          I = "Opera",
          z = "Samsung",
          R = "Sharp",
          V = "Sony",
          U = "Xiaomi",
          q = "Zebra",
          L = "Facebook",
          F = "Chromium OS",
          B = "Mac OS",
          H = " Browser",
          W = function(e) {
            for (var t = {}, r = 0; r < e.length; r++) t[e[r].toUpperCase()] = e[r];
            return t
          },
          G = function(e, t) {
            return typeof e === u && -1 !== $(t).indexOf($(e))
          },
          $ = function(e) {
            return e.toLowerCase()
          },
          J = function(e, t) {
            if (typeof e === u) return e = e.replace(/^\s\s*/, ""), typeof t === s ? e : e.substring(0, 500)
          },
          K = function(e, t) {
            for (var r, n, i, s, u, l, f = 0; f < t.length && !u;) {
              var d = t[f],
                p = t[f + 1];
              for (r = n = 0; r < d.length && !u && d[r];)
                if (u = d[r++].exec(e))
                  for (i = 0; i < p.length; i++) l = u[++n], typeof(s = p[i]) === c && s.length > 0 ? 2 === s.length ? typeof s[1] == a ? this[s[0]] = s[1].call(this, l) : this[s[0]] = s[1] : 3 === s.length ? typeof s[1] !== a || s[1].exec && s[1].test ? this[s[0]] = l ? l.replace(s[1], s[2]) : o : this[s[0]] = l ? s[1].call(this, l, s[2]) : o : 4 === s.length && (this[s[0]] = l ? s[3].call(this, l.replace(s[1], s[2])) : o) : this[s] = l || o;
              f += 2
            }
          },
          X = function(e, t) {
            for (var r in t)
              if (typeof t[r] === c && t[r].length > 0) {
                for (var n = 0; n < t[r].length; n++)
                  if (G(t[r][n], e)) return "?" === r ? o : r
              } else if (G(t[r], e)) return "?" === r ? o : r;
            return t.hasOwnProperty("*") ? t["*"] : e
          },
          Y = {
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
          Z = {
            browser: [
              [/\b(?:crmo|crios)\/([\w\.]+)/i],
              [w, [d, "Chrome"]],
              [/edg(?:e|ios|a)?\/([\w\.]+)/i],
              [w, [d, "Edge"]],
              [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
              [d, w],
              [/opios[\/ ]+([\w\.]+)/i],
              [w, [d, I + " Mini"]],
              [/\bop(?:rg)?x\/([\w\.]+)/i],
              [w, [d, I + " GX"]],
              [/\bopr\/([\w\.]+)/i],
              [w, [d, I]],
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
              [w, [d, "UC" + j]],
              [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
              [w, [d, "WeChat"]],
              [/konqueror\/([\w\.]+)/i],
              [w, [d, "Konqueror"]],
              [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
              [w, [d, "IE"]],
              [/ya(?:search)?browser\/([\w\.]+)/i],
              [w, [d, "Yandex"]],
              [/slbrowser\/([\w\.]+)/i],
              [w, [d, "Smart Lenovo " + j]],
              [/(avast|avg)\/([\w\.]+)/i],
              [
                [d, /(.+)/, "$1 Secure " + j], w
              ],
              [/\bfocus\/([\w\.]+)/i],
              [w, [d, P + " Focus"]],
              [/\bopt\/([\w\.]+)/i],
              [w, [d, I + " Touch"]],
              [/coc_coc\w+\/([\w\.]+)/i],
              [w, [d, "Coc Coc"]],
              [/dolfin\/([\w\.]+)/i],
              [w, [d, "Dolphin"]],
              [/coast\/([\w\.]+)/i],
              [w, [d, I + " Coast"]],
              [/miuibrowser\/([\w\.]+)/i],
              [w, [d, "MIUI" + H]],
              [/fxios\/([\w\.-]+)/i],
              [w, [d, P]],
              [/\bqihoobrowser\/?([\w\.]*)/i],
              [w, [d, "360"]],
              [/\b(qq)\/([\w\.]+)/i],
              [
                [d, /(.+)/, "$1Browser"], w
              ],
              [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
              [
                [d, /(.+)/, "$1" + H], w
              ],
              [/samsungbrowser\/([\w\.]+)/i],
              [w, [d, z + " Internet"]],
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
                [d, L], w
              ],
              [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
              [d, w],
              [/\bgsa\/([\w\.]+) .*safari\//i],
              [w, [d, "GSA"]],
              [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
              [w, [d, "TikTok"]],
              [/headlesschrome(?:\/([\w\.]+)| )/i],
              [w, [d, T + " Headless"]],
              [/ wv\).+(chrome)\/([\w\.]+)/i],
              [
                [d, T + " WebView"], w
              ],
              [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
              [w, [d, "Android " + j]],
              [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
              [d, w],
              [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
              [w, [d, "Mobile Safari"]],
              [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
              [w, d],
              [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
              [d, [w, X, {
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
              [w, [d, P + " Reality"]],
              [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i],
              [d, [w, /_/g, "."]],
              [/(cobalt)\/([\w\.]+)/i],
              [d, [w, /master.|lts./, ""]]
            ],
            cpu: [
              [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
              [
                [h, "amd64"]
              ],
              [/(ia32(?=;))/i],
              [
                [h, $]
              ],
              [/((?:i[346]|x)86)[;\)]/i],
              [
                [h, "ia32"]
              ],
              [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
              [
                [h, "arm64"]
              ],
              [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
              [
                [h, "armhf"]
              ],
              [/windows (ce|mobile); ppc;/i],
              [
                [h, "arm"]
              ],
              [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
              [
                [h, /ower/, "", $]
              ],
              [/(sun4\w)[;\)]/i],
              [
                [h, "sparc"]
              ],
              [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],
              [
                [h, $]
              ]
            ],
            device: [
              [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
              [f, [b, z],
                [p, v]
              ],
              [/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]((?!sm-[lr])[-\w]+)/i, /sec-(sgh\w+)/i],
              [f, [b, z],
                [p, m]
              ],
              [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
              [f, [b, O],
                [p, m]
              ],
              [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
              [f, [b, O],
                [p, v]
              ],
              [/(macintosh);/i],
              [f, [b, O]],
              [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
              [f, [b, R],
                [p, m]
              ],
              [/(?:honor)([-\w ]+)[;\)]/i],
              [f, [b, "Honor"],
                [p, m]
              ],
              [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
              [f, [b, C],
                [p, v]
              ],
              [/(?:huawei)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
              [f, [b, C],
                [p, m]
              ],
              [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i],
              [
                [f, /_/g, " "],
                [b, U],
                [p, m]
              ],
              [/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i, /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
              [
                [f, /_/g, " "],
                [b, U],
                [p, v]
              ],
              [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
              [f, [b, "OPPO"],
                [p, m]
              ],
              [/\b(opd2\d{3}a?) bui/i],
              [f, [b, "OPPO"],
                [p, v]
              ],
              [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
              [f, [b, "Vivo"],
                [p, m]
              ],
              [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
              [f, [b, "Realme"],
                [p, m]
              ],
              [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
              [f, [b, N],
                [p, m]
              ],
              [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
              [f, [b, N],
                [p, v]
              ],
              [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
              [f, [b, D],
                [p, v]
              ],
              [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i],
              [f, [b, D],
                [p, m]
              ],
              [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],
              [f, [b, "Lenovo"],
                [p, v]
              ],
              [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
              [
                [f, /_/g, " "],
                [b, "Nokia"],
                [p, m]
              ],
              [/(pixel c)\b/i],
              [f, [b, A],
                [p, v]
              ],
              [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
              [f, [b, A],
                [p, m]
              ],
              [/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
              [f, [b, V],
                [p, m]
              ],
              [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
              [
                [f, "Xperia Tablet"],
                [b, V],
                [p, v]
              ],
              [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
              [f, [b, "OnePlus"],
                [p, m]
              ],
              [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
              [f, [b, x],
                [p, v]
              ],
              [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
              [
                [f, /(.+)/g, "Fire Phone $1"],
                [b, x],
                [p, m]
              ],
              [/(playbook);[-\w\),; ]+(rim)/i],
              [f, b, [p, v]],
              [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
              [f, [b, E],
                [p, m]
              ],
              [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
              [f, [b, S],
                [p, v]
              ],
              [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
              [f, [b, S],
                [p, m]
              ],
              [/(nexus 9)/i],
              [f, [b, "HTC"],
                [p, v]
              ],
              [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
              [b, [f, /_/g, " "],
                [p, m]
              ],
              [/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i],
              [f, [b, "TCL"],
                [p, v]
              ],
              [/(itel) ((\w+))/i],
              [
                [b, $], f, [p, X, {
                  tablet: ["p10001l", "w7001"],
                  "*": "mobile"
                }]
              ],
              [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
              [f, [b, "Acer"],
                [p, v]
              ],
              [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
              [f, [b, "Meizu"],
                [p, m]
              ],
              [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
              [f, [b, "Ulefone"],
                [p, m]
              ],
              [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
              [f, [b, "Energizer"],
                [p, m]
              ],
              [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
              [f, [b, "Cat"],
                [p, m]
              ],
              [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
              [f, [b, "Smartfren"],
                [p, m]
              ],
              [/droid.+; (a(?:015|06[35]|142p?))/i],
              [f, [b, "Nothing"],
                [p, m]
              ],
              [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i, /; (imo) ((?!tab)[\w ]+?)(?: bui|\))/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i],
              [b, f, [p, m]],
              [/(imo) (tab \w+)/i, /(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
              [b, f, [p, v]],
              [/(surface duo)/i],
              [f, [b, M],
                [p, v]
              ],
              [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
              [f, [b, "Fairphone"],
                [p, m]
              ],
              [/(u304aa)/i],
              [f, [b, "AT&T"],
                [p, m]
              ],
              [/\bsie-(\w*)/i],
              [f, [b, "Siemens"],
                [p, m]
              ],
              [/\b(rct\w+) b/i],
              [f, [b, "RCA"],
                [p, v]
              ],
              [/\b(venue[\d ]{2,7}) b/i],
              [f, [b, "Dell"],
                [p, v]
              ],
              [/\b(q(?:mv|ta)\w+) b/i],
              [f, [b, "Verizon"],
                [p, v]
              ],
              [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
              [f, [b, "Barnes & Noble"],
                [p, v]
              ],
              [/\b(tm\d{3}\w+) b/i],
              [f, [b, "NuVision"],
                [p, v]
              ],
              [/\b(k88) b/i],
              [f, [b, "ZTE"],
                [p, v]
              ],
              [/\b(nx\d{3}j) b/i],
              [f, [b, "ZTE"],
                [p, m]
              ],
              [/\b(gen\d{3}) b.+49h/i],
              [f, [b, "Swiss"],
                [p, m]
              ],
              [/\b(zur\d{3}) b/i],
              [f, [b, "Swiss"],
                [p, v]
              ],
              [/\b((zeki)?tb.*\b) b/i],
              [f, [b, "Zeki"],
                [p, v]
              ],
              [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
              [
                [b, "Dragon Touch"], f, [p, v]
              ],
              [/\b(ns-?\w{0,9}) b/i],
              [f, [b, "Insignia"],
                [p, v]
              ],
              [/\b((nxa|next)-?\w{0,9}) b/i],
              [f, [b, "NextBook"],
                [p, v]
              ],
              [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
              [
                [b, "Voice"], f, [p, m]
              ],
              [/\b(lvtel\-)?(v1[12]) b/i],
              [
                [b, "LvTel"], f, [p, m]
              ],
              [/\b(ph-1) /i],
              [f, [b, "Essential"],
                [p, m]
              ],
              [/\b(v(100md|700na|7011|917g).*\b) b/i],
              [f, [b, "Envizen"],
                [p, v]
              ],
              [/\b(trio[-\w\. ]+) b/i],
              [f, [b, "MachSpeed"],
                [p, v]
              ],
              [/\btu_(1491) b/i],
              [f, [b, "Rotor"],
                [p, v]
              ],
              [/(shield[\w ]+) b/i],
              [f, [b, "Nvidia"],
                [p, v]
              ],
              [/(sprint) (\w+)/i],
              [b, f, [p, m]],
              [/(kin\.[onetw]{3})/i],
              [
                [f, /\./g, " "],
                [b, M],
                [p, m]
              ],
              [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
              [f, [b, q],
                [p, v]
              ],
              [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
              [f, [b, q],
                [p, m]
              ],
              [/smart-tv.+(samsung)/i],
              [b, [p, g]],
              [/hbbtv.+maple;(\d+)/i],
              [
                [f, /^/, "SmartTV"],
                [b, z],
                [p, g]
              ],
              [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
              [
                [b, D],
                [p, g]
              ],
              [/(apple) ?tv/i],
              [b, [f, O + " TV"],
                [p, g]
              ],
              [/crkey/i],
              [
                [f, T + "cast"],
                [b, A],
                [p, g]
              ],
              [/droid.+aft(\w+)( bui|\))/i],
              [f, [b, x],
                [p, g]
              ],
              [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
              [f, [b, R],
                [p, g]
              ],
              [/(bravia[\w ]+)( bui|\))/i],
              [f, [b, V],
                [p, g]
              ],
              [/(mitv-\w{5}) bui/i],
              [f, [b, U],
                [p, g]
              ],
              [/Hbbtv.*(technisat) (.*);/i],
              [b, f, [p, g]],
              [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
              [
                [b, J],
                [f, J],
                [p, g]
              ],
              [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
              [
                [p, g]
              ],
              [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
              [b, f, [p, y]],
              [/droid.+; (shield) bui/i],
              [f, [b, "Nvidia"],
                [p, y]
              ],
              [/(playstation [345portablevi]+)/i],
              [f, [b, V],
                [p, y]
              ],
              [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
              [f, [b, M],
                [p, y]
              ],
              [/\b(sm-[lr]\d\d[05][fnuw]?s?)\b/i],
              [f, [b, z],
                [p, _]
              ],
              [/((pebble))app/i],
              [b, f, [p, _]],
              [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
              [f, [b, O],
                [p, _]
              ],
              [/droid.+; (glass) \d/i],
              [f, [b, A],
                [p, _]
              ],
              [/droid.+; (wt63?0{2,3})\)/i],
              [f, [b, q],
                [p, _]
              ],
              [/droid.+; (glass) \d/i],
              [f, [b, A],
                [p, _]
              ],
              [/(pico) (4|neo3(?: link|pro)?)/i],
              [b, f, [p, _]],
              [/; (quest( \d| pro)?)/i],
              [f, [b, L],
                [p, _]
              ],
              [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
              [b, [p, k]],
              [/(aeobc)\b/i],
              [f, [b, x],
                [p, k]
              ],
              [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
              [f, [p, m]],
              [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
              [f, [p, v]],
              [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
              [
                [p, v]
              ],
              [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
              [
                [p, m]
              ],
              [/(android[-\w\. ]{0,9});.+buil/i],
              [f, [b, "Generic"]]
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
              [d, [w, X, Y]],
              [/windows nt 6\.2; (arm)/i, /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
              [
                [w, X, Y],
                [d, "Windows"]
              ],
              [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
              [
                [w, /_/g, "."],
                [d, "iOS"]
              ],
              [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
              [
                [d, B],
                [w, /_/g, "."]
              ],
              [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
              [w, d],
              [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish|openharmony)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i],
              [d, w],
              [/\(bb(10);/i],
              [w, [d, E]],
              [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
              [w, [d, "Symbian"]],
              [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
              [w, [d, P + " OS"]],
              [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
              [w, [d, "webOS"]],
              [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
              [w, [d, "watchOS"]],
              [/crkey\/([\d\.]+)/i],
              [w, [d, T + "cast"]],
              [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
              [
                [d, F], w
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
          Q = function(e, t) {
            if (typeof e === c && (t = e, e = o), !(this instanceof Q)) return new Q(e, t).getResult();
            var r = typeof i !== s && i.navigator ? i.navigator : o,
              n = e || (r && r.userAgent ? r.userAgent : ""),
              y = r && r.userAgentData ? r.userAgentData : o,
              g = t ? function(e, t) {
                var r = {};
                for (var n in e) t[n] && t[n].length % 2 == 0 ? r[n] = t[n].concat(e[n]) : r[n] = e[n];
                return r
              }(Z, t) : Z,
              _ = r && r.userAgent == n;
            return this.getBrowser = function() {
              var e, t = {};
              return t[d] = o, t[w] = o, K.call(t, n, g.browser), t[l] = typeof(e = t[w]) === u ? e.replace(/[^\d\.]/g, "").split(".")[0] : o, _ && r && r.brave && typeof r.brave.isBrave == a && (t[d] = "Brave"), t
            }, this.getCPU = function() {
              var e = {};
              return e[h] = o, K.call(e, n, g.cpu), e
            }, this.getDevice = function() {
              var e = {};
              return e[b] = o, e[f] = o, e[p] = o, K.call(e, n, g.device), _ && !e[p] && y && y.mobile && (e[p] = m), _ && "Macintosh" == e[f] && r && typeof r.standalone !== s && r.maxTouchPoints && r.maxTouchPoints > 2 && (e[f] = "iPad", e[p] = v), e
            }, this.getEngine = function() {
              var e = {};
              return e[d] = o, e[w] = o, K.call(e, n, g.engine), e
            }, this.getOS = function() {
              var e = {};
              return e[d] = o, e[w] = o, K.call(e, n, g.os), _ && !e[d] && y && y.platform && "Unknown" != y.platform && (e[d] = y.platform.replace(/chrome os/i, F).replace(/macos/i, B)), e
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
              return n = typeof e === u && e.length > 500 ? J(e, 500) : e, this
            }, this.setUA(n), this
          };
        Q.VERSION = "1.0.40", Q.BROWSER = W([d, w, l]), Q.CPU = W([h]), Q.DEVICE = W([f, b, p, y, m, g, v, _, k]), Q.ENGINE = Q.OS = W([d, w]), typeof t !== s ? (e.exports && (t = e.exports = Q), t.UAParser = Q) : r.amdO ? (n = function() {
          return Q
        }.call(t, r, t, e)) === o || (e.exports = n) : typeof i !== s && (i.UAParser = Q);
        var ee = typeof i !== s && (i.jQuery || i.Zepto);
        if (ee && !ee.ua) {
          var te = new Q;
          ee.ua = te.getResult(), ee.ua.get = function() {
            return te.getUA()
          }, ee.ua.set = function(e) {
            te.setUA(e);
            var t = te.getResult();
            for (var r in t) ee.ua[r] = t[r]
          }
        }
      }("object" == typeof window ? window : this)
    },
    42887: (e, t, r) => {
      "use strict";
      r.d(t, {
        sc: () => i
      });
      const n = e => async (t, {
        outputFormat: r = "hex"
      } = {}) => {
        "string" == typeof t && (t = (new globalThis.TextEncoder).encode(t));
        const n = await globalThis.crypto.subtle.digest(e, t);
        return "hex" === r ? (e => {
          const t = new DataView(e);
          let r = "";
          for (let e = 0; e < t.byteLength; e += 4) r += t.getUint32(e).toString(16).padStart(8, "0");
          return r
        })(n) : n
      }, i = (n("SHA-1"), n("SHA-256"));
      n("SHA-384"), n("SHA-512")
    },
    46026: (e, t, r) => {
      "use strict";
      r.d(t, {
        En: () => a,
        JR: () => f,
        Sw: () => u,
        et: () => o,
        ol: () => s,
        uJ: () => c
      });
      var n = r(60276),
        i = "ReactNative" == (0, n.no)((function() {
          return navigator.product
        })),
        o = "function" == typeof WeakMap && !(i && !global.HermesInternal),
        a = "function" == typeof WeakSet,
        s = "function" == typeof Symbol && "function" == typeof Symbol.for,
        c = s && Symbol.asyncIterator,
        u = "function" == typeof(0, n.no)((function() {
          return window.document.createElement
        })),
        l = (0, n.no)((function() {
          return navigator.userAgent.indexOf("jsdom") >= 0
        })) || !1,
        f = (u || i) && !l
    },
    46465: (e, t, r) => {
      "use strict";
      r.d(t, {
        p: () => i
      });
      var n = r(35907);

      function i(e, t) {
        void 0 === t && (t = 0);
        var r = (0, n.v)("stringifyForDisplay");
        return JSON.stringify(e, (function(e, t) {
          return void 0 === t ? r : t
        }), t).split(JSON.stringify(r)).join("<undefined>")
      }
    },
    48914: (e, t, r) => {
      "use strict";
      r.d(t, {
        r: () => n
      });
      var n = "3.13.8"
    },
    56926: (e, t, r) => {
      "use strict";
      r.d(t, {
        b: () => s
      });
      const n = () => Object.create(null),
        {
          forEach: i,
          slice: o
        } = Array.prototype,
        {
          hasOwnProperty: a
        } = Object.prototype;
      class s {
        constructor(e = !0, t = n) {
          this.weakness = e, this.makeData = t
        }
        lookup() {
          return this.lookupArray(arguments)
        }
        lookupArray(e) {
          let t = this;
          return i.call(e, (e => t = t.getChildTrie(e))), a.call(t, "data") ? t.data : t.data = this.makeData(o.call(e))
        }
        peek() {
          return this.peekArray(arguments)
        }
        peekArray(e) {
          let t = this;
          for (let r = 0, n = e.length; t && r < n; ++r) {
            const n = t.mapFor(e[r], !1);
            t = n && n.get(e[r])
          }
          return t && t.data
        }
        remove() {
          return this.removeArray(arguments)
        }
        removeArray(e) {
          let t;
          if (e.length) {
            const r = e[0],
              n = this.mapFor(r, !1),
              i = n && n.get(r);
            i && (t = i.removeArray(o.call(e, 1)), i.data || i.weak || i.strong && i.strong.size || n.delete(r))
          } else t = this.data, delete this.data;
          return t
        }
        getChildTrie(e) {
          const t = this.mapFor(e, !0);
          let r = t.get(e);
          return r || t.set(e, r = new s(this.weakness, this.makeData)), r
        }
        mapFor(e, t) {
          return this.weakness && function(e) {
            switch (typeof e) {
              case "object":
                if (null === e) break;
              case "function":
                return !0
            }
            return !1
          }(e) ? this.weak || (t ? this.weak = new WeakMap : void 0) : this.strong || (t ? this.strong = new Map : void 0)
        }
      }
    },
    58128: (e, t, r) => {
      "use strict";
      r.d(t, {
        s: () => i
      });
      class n extends Error {}

      function i(e, t) {
        if ("string" != typeof e) throw new n("Invalid token specified: must be a string");
        t || (t = {});
        const r = !0 === t.header ? 0 : 1,
          i = e.split(".")[r];
        if ("string" != typeof i) throw new n(`Invalid token specified: missing part #${r+1}`);
        let o;
        try {
          o = function(e) {
            let t = e.replace(/-/g, "+").replace(/_/g, "/");
            switch (t.length % 4) {
              case 0:
                break;
              case 2:
                t += "==";
                break;
              case 3:
                t += "=";
                break;
              default:
                throw new Error("base64 string is not of the correct length")
            }
            try {
              return function(e) {
                return decodeURIComponent(atob(e).replace(/(.)/g, ((e, t) => {
                  let r = t.charCodeAt(0).toString(16).toUpperCase();
                  return r.length < 2 && (r = "0" + r), "%" + r
                })))
              }(t)
            } catch (e) {
              return atob(t)
            }
          }(i)
        } catch (e) {
          throw new n(`Invalid token specified: invalid base64 for part #${r+1} (${e.message})`)
        }
        try {
          return JSON.parse(o)
        } catch (e) {
          throw new n(`Invalid token specified: invalid json for part #${r+1} (${e.message})`)
        }
      }
      n.prototype.name = "InvalidTokenError"
    },
    60276: (e, t, r) => {
      "use strict";
      r.d(t, {
        Sf: () => w,
        V1: () => m,
        no: () => b,
        vA: () => v
      });
      var n = r(78322),
        i = "Invariant Violation",
        o = Object.setPrototypeOf,
        a = void 0 === o ? function(e, t) {
          return e.__proto__ = t, e
        } : o,
        s = function(e) {
          function t(r) {
            void 0 === r && (r = i);
            var n = e.call(this, "number" == typeof r ? i + ": " + r + " (see https://github.com/apollographql/invariant-packages)" : r) || this;
            return n.framesToPop = 1, n.name = i, a(n, t.prototype), n
          }
          return (0, n.__extends)(t, e), t
        }(Error);

      function c(e, t) {
        if (!e) throw new s(t)
      }
      var u, l = ["debug", "log", "warn", "error", "silent"],
        f = l.indexOf("log");

      function d(e) {
        return function() {
          if (l.indexOf(e) >= f) return (console[e] || console.log).apply(console, arguments)
        }
      }(u = c || (c = {})).debug = d("debug"), u.log = d("log"), u.warn = d("warn"), u.error = d("error");
      var p = r(48914);

      function b(e) {
        try {
          return e()
        } catch (e) {}
      }
      const w = b((function() {
        return globalThis
      })) || b((function() {
        return window
      })) || b((function() {
        return self
      })) || b((function() {
        return global
      })) || b((function() {
        return b.constructor("return this")()
      }));
      var h = r(46465);

      function y(e) {
        return function(t) {
          for (var r = [], n = 1; n < arguments.length; n++) r[n - 1] = arguments[n];
          if ("number" == typeof t) {
            var i = t;
            (t = k(i)) || (t = x(i, r), r = [])
          }
          e.apply(void 0, [t].concat(r))
        }
      }
      var m = Object.assign((function(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        e || c(e, k(t, r) || x(t, r))
      }), {
        debug: y(c.debug),
        log: y(c.log),
        warn: y(c.warn),
        error: y(c.error)
      });

      function v(e) {
        for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
        return new s(k(e, t) || x(e, t))
      }
      var g = Symbol.for("ApolloErrorMessageHandler_" + p.r);

      function _(e) {
        if ("string" == typeof e) return e;
        try {
          return (0, h.p)(e, 2).slice(0, 1e3)
        } catch (e) {
          return "<non-serializable>"
        }
      }

      function k(e, t) {
        if (void 0 === t && (t = []), e) return w[g] && w[g](e, t.map(_))
      }

      function x(e, t) {
        if (void 0 === t && (t = []), e) return "An error occurred! For more details, see the full error text at https://go.apollo.dev/c/err#".concat(encodeURIComponent(JSON.stringify({
          version: p.r,
          message: e,
          args: t.map(_)
        })))
      }
      globalThis.__DEV__
    },
    78322: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, {
        __addDisposableResource: () => I,
        __assign: () => o,
        __asyncDelegator: () => S,
        __asyncGenerator: () => O,
        __asyncValues: () => E,
        __await: () => x,
        __awaiter: () => b,
        __classPrivateFieldGet: () => D,
        __classPrivateFieldIn: () => N,
        __classPrivateFieldSet: () => M,
        __createBinding: () => h,
        __decorate: () => s,
        __disposeResources: () => R,
        __esDecorate: () => u,
        __exportStar: () => y,
        __extends: () => i,
        __generator: () => w,
        __importDefault: () => C,
        __importStar: () => A,
        __makeTemplateObject: () => j,
        __metadata: () => p,
        __param: () => c,
        __propKey: () => f,
        __read: () => v,
        __rest: () => a,
        __rewriteRelativeImportExtension: () => V,
        __runInitializers: () => l,
        __setFunctionName: () => d,
        __spread: () => g,
        __spreadArray: () => k,
        __spreadArrays: () => _,
        __values: () => m,
        default: () => U
      });
      var n = function(e, t) {
        return n = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function(e, t) {
          e.__proto__ = t
        } || function(e, t) {
          for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
        }, n(e, t)
      };

      function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

        function r() {
          this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
      }
      var o = function() {
        return o = Object.assign || function(e) {
          for (var t, r = 1, n = arguments.length; r < n; r++)
            for (var i in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          return e
        }, o.apply(this, arguments)
      };

      function a(e, t) {
        var r = {};
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var i = 0;
          for (n = Object.getOwnPropertySymbols(e); i < n.length; i++) t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]])
        }
        return r
      }

      function s(e, t, r, n) {
        var i, o = arguments.length,
          a = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, n);
        else
          for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(t, r, a) : i(t, r)) || a);
        return o > 3 && a && Object.defineProperty(t, r, a), a
      }

      function c(e, t) {
        return function(r, n) {
          t(r, n, e)
        }
      }

      function u(e, t, r, n, i, o) {
        function a(e) {
          if (void 0 !== e && "function" != typeof e) throw new TypeError("Function expected");
          return e
        }
        for (var s, c = n.kind, u = "getter" === c ? "get" : "setter" === c ? "set" : "value", l = !t && e ? n.static ? e : e.prototype : null, f = t || (l ? Object.getOwnPropertyDescriptor(l, n.name) : {}), d = !1, p = r.length - 1; p >= 0; p--) {
          var b = {};
          for (var w in n) b[w] = "access" === w ? {} : n[w];
          for (var w in n.access) b.access[w] = n.access[w];
          b.addInitializer = function(e) {
            if (d) throw new TypeError("Cannot add initializers after decoration has completed");
            o.push(a(e || null))
          };
          var h = (0, r[p])("accessor" === c ? {
            get: f.get,
            set: f.set
          } : f[u], b);
          if ("accessor" === c) {
            if (void 0 === h) continue;
            if (null === h || "object" != typeof h) throw new TypeError("Object expected");
            (s = a(h.get)) && (f.get = s), (s = a(h.set)) && (f.set = s), (s = a(h.init)) && i.unshift(s)
          } else(s = a(h)) && ("field" === c ? i.unshift(s) : f[u] = s)
        }
        l && Object.defineProperty(l, n.name, f), d = !0
      }

      function l(e, t, r) {
        for (var n = arguments.length > 2, i = 0; i < t.length; i++) r = n ? t[i].call(e, r) : t[i].call(e);
        return n ? r : void 0
      }

      function f(e) {
        return "symbol" == typeof e ? e : "".concat(e)
      }

      function d(e, t, r) {
        return "symbol" == typeof t && (t = t.description ? "[".concat(t.description, "]") : ""), Object.defineProperty(e, "name", {
          configurable: !0,
          value: r ? "".concat(r, " ", t) : t
        })
      }

      function p(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
      }

      function b(e, t, r, n) {
        return new(r || (r = Promise))((function(i, o) {
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
            var t;
            e.done ? i(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
              e(t)
            }))).then(a, s)
          }
          c((n = n.apply(e, t || [])).next())
        }))
      }

      function w(e, t) {
        var r, n, i, o = {
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
              if (r) throw new TypeError("Generator is already executing.");
              for (; a && (a = 0, s[0] && (o = 0)), o;) try {
                if (r = 1, n && (i = 2 & s[0] ? n.return : s[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, s[1])).done) return i;
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
                s = t.call(e, o)
              } catch (e) {
                s = [6, e], n = 0
              } finally {
                r = i = 0
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
      var h = Object.create ? function(e, t, r, n) {
        void 0 === n && (n = r);
        var i = Object.getOwnPropertyDescriptor(t, r);
        i && !("get" in i ? !t.__esModule : i.writable || i.configurable) || (i = {
          enumerable: !0,
          get: function() {
            return t[r]
          }
        }), Object.defineProperty(e, n, i)
      } : function(e, t, r, n) {
        void 0 === n && (n = r), e[n] = t[r]
      };

      function y(e, t) {
        for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || h(t, e, r)
      }

      function m(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
          r = t && e[t],
          n = 0;
        if (r) return r.call(e);
        if (e && "number" == typeof e.length) return {
          next: function() {
            return e && n >= e.length && (e = void 0), {
              value: e && e[n++],
              done: !e
            }
          }
        };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
      }

      function v(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var n, i, o = r.call(e),
          a = [];
        try {
          for (;
            (void 0 === t || t-- > 0) && !(n = o.next()).done;) a.push(n.value)
        } catch (e) {
          i = {
            error: e
          }
        } finally {
          try {
            n && !n.done && (r = o.return) && r.call(o)
          } finally {
            if (i) throw i.error
          }
        }
        return a
      }

      function g() {
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(v(arguments[t]));
        return e
      }

      function _() {
        for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
        var n = Array(e),
          i = 0;
        for (t = 0; t < r; t++)
          for (var o = arguments[t], a = 0, s = o.length; a < s; a++, i++) n[i] = o[a];
        return n
      }

      function k(e, t, r) {
        if (r || 2 === arguments.length)
          for (var n, i = 0, o = t.length; i < o; i++) !n && i in t || (n || (n = Array.prototype.slice.call(t, 0, i)), n[i] = t[i]);
        return e.concat(n || Array.prototype.slice.call(t))
      }

      function x(e) {
        return this instanceof x ? (this.v = e, this) : new x(e)
      }

      function O(e, t, r) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var n, i = r.apply(e, t || []),
          o = [];
        return n = Object.create(("function" == typeof AsyncIterator ? AsyncIterator : Object).prototype), a("next"), a("throw"), a("return", (function(e) {
          return function(t) {
            return Promise.resolve(t).then(e, u)
          }
        })), n[Symbol.asyncIterator] = function() {
          return this
        }, n;

        function a(e, t) {
          i[e] && (n[e] = function(t) {
            return new Promise((function(r, n) {
              o.push([e, t, r, n]) > 1 || s(e, t)
            }))
          }, t && (n[e] = t(n[e])))
        }

        function s(e, t) {
          try {
            (r = i[e](t)).value instanceof x ? Promise.resolve(r.value.v).then(c, u) : l(o[0][2], r)
          } catch (e) {
            l(o[0][3], e)
          }
          var r
        }

        function c(e) {
          s("next", e)
        }

        function u(e) {
          s("throw", e)
        }

        function l(e, t) {
          e(t), o.shift(), o.length && s(o[0][0], o[0][1])
        }
      }

      function S(e) {
        var t, r;
        return t = {}, n("next"), n("throw", (function(e) {
          throw e
        })), n("return"), t[Symbol.iterator] = function() {
          return this
        }, t;

        function n(n, i) {
          t[n] = e[n] ? function(t) {
            return (r = !r) ? {
              value: x(e[n](t)),
              done: !1
            } : i ? i(t) : t
          } : i
        }
      }

      function E(e) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var t, r = e[Symbol.asyncIterator];
        return r ? r.call(e) : (e = m(e), t = {}, n("next"), n("throw"), n("return"), t[Symbol.asyncIterator] = function() {
          return this
        }, t);

        function n(r) {
          t[r] = e[r] && function(t) {
            return new Promise((function(n, i) {
              ! function(e, t, r, n) {
                Promise.resolve(n).then((function(t) {
                  e({
                    value: t,
                    done: r
                  })
                }), t)
              }(n, i, (t = e[r](t)).done, t.value)
            }))
          }
        }
      }

      function j(e, t) {
        return Object.defineProperty ? Object.defineProperty(e, "raw", {
          value: t
        }) : e.raw = t, e
      }
      var T = Object.create ? function(e, t) {
          Object.defineProperty(e, "default", {
            enumerable: !0,
            value: t
          })
        } : function(e, t) {
          e.default = t
        },
        P = function(e) {
          return P = Object.getOwnPropertyNames || function(e) {
            var t = [];
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[t.length] = r);
            return t
          }, P(e)
        };

      function A(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var r = P(e), n = 0; n < r.length; n++) "default" !== r[n] && h(t, e, r[n]);
        return T(t, e), t
      }

      function C(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function D(e, t, r, n) {
        if ("a" === r && !n) throw new TypeError("Private accessor was defined without a getter");
        if ("function" == typeof t ? e !== t || !n : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
      }

      function M(e, t, r, n, i) {
        if ("m" === n) throw new TypeError("Private method is not writable");
        if ("a" === n && !i) throw new TypeError("Private accessor was defined without a setter");
        if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return "a" === n ? i.call(e, r) : i ? i.value = r : t.set(e, r), r
      }

      function N(e, t) {
        if (null === t || "object" != typeof t && "function" != typeof t) throw new TypeError("Cannot use 'in' operator on non-object");
        return "function" == typeof e ? t === e : e.has(t)
      }

      function I(e, t, r) {
        if (null != t) {
          if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
          var n, i;
          if (r) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            n = t[Symbol.asyncDispose]
          }
          if (void 0 === n) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            n = t[Symbol.dispose], r && (i = n)
          }
          if ("function" != typeof n) throw new TypeError("Object not disposable.");
          i && (n = function() {
            try {
              i.call(this)
            } catch (e) {
              return Promise.reject(e)
            }
          }), e.stack.push({
            value: t,
            dispose: n,
            async: r
          })
        } else r && e.stack.push({
          async: !0
        });
        return t
      }
      var z = "function" == typeof SuppressedError ? SuppressedError : function(e, t, r) {
        var n = new Error(r);
        return n.name = "SuppressedError", n.error = e, n.suppressed = t, n
      };

      function R(e) {
        function t(t) {
          e.error = e.hasError ? new z(t, e.error, "An error was suppressed during disposal.") : t, e.hasError = !0
        }
        var r, n = 0;
        return function i() {
          for (; r = e.stack.pop();) try {
            if (!r.async && 1 === n) return n = 0, e.stack.push(r), Promise.resolve().then(i);
            if (r.dispose) {
              var o = r.dispose.call(r.value);
              if (r.async) return n |= 2, Promise.resolve(o).then(i, (function(e) {
                return t(e), i()
              }))
            } else n |= 1
          } catch (e) {
            t(e)
          }
          if (1 === n) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
          if (e.hasError) throw e.error
        }()
      }

      function V(e, t) {
        return "string" == typeof e && /^\.\.?\//.test(e) ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, (function(e, r, n, i, o) {
          return r ? t ? ".jsx" : ".js" : !n || i && o ? n + i + "." + o.toLowerCase() + "js" : e
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
        __metadata: p,
        __awaiter: b,
        __generator: w,
        __createBinding: h,
        __exportStar: y,
        __values: m,
        __read: v,
        __spread: g,
        __spreadArrays: _,
        __spreadArray: k,
        __await: x,
        __asyncGenerator: O,
        __asyncDelegator: S,
        __asyncValues: E,
        __makeTemplateObject: j,
        __importStar: A,
        __importDefault: C,
        __classPrivateFieldGet: D,
        __classPrivateFieldSet: M,
        __classPrivateFieldIn: N,
        __addDisposableResource: I,
        __disposeResources: R,
        __rewriteRelativeImportExtension: V
      }
    },
    79465: e => {
      "use strict";
      var t = function(e) {
          return function(e) {
            return !!e && "object" == typeof e
          }(e) && ! function(e) {
            var t = Object.prototype.toString.call(e);
            return "[object RegExp]" === t || "[object Date]" === t || function(e) {
              return e.$$typeof === r
            }(e)
          }(e)
        },
        r = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;

      function n(e, t) {
        return !1 !== t.clone && t.isMergeableObject(e) ? s((r = e, Array.isArray(r) ? [] : {}), e, t) : e;
        var r
      }

      function i(e, t, r) {
        return e.concat(t).map((function(e) {
          return n(e, r)
        }))
      }

      function o(e) {
        return Object.keys(e).concat(function(e) {
          return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter((function(t) {
            return Object.propertyIsEnumerable.call(e, t)
          })) : []
        }(e))
      }

      function a(e, t) {
        try {
          return t in e
        } catch (e) {
          return !1
        }
      }

      function s(e, r, c) {
        (c = c || {}).arrayMerge = c.arrayMerge || i, c.isMergeableObject = c.isMergeableObject || t, c.cloneUnlessOtherwiseSpecified = n;
        var u = Array.isArray(r);
        return u === Array.isArray(e) ? u ? c.arrayMerge(e, r, c) : function(e, t, r) {
          var i = {};
          return r.isMergeableObject(e) && o(e).forEach((function(t) {
            i[t] = n(e[t], r)
          })), o(t).forEach((function(o) {
            (function(e, t) {
              return a(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t))
            })(e, o) || (a(e, o) && r.isMergeableObject(t[o]) ? i[o] = function(e, t) {
              if (!t.customMerge) return s;
              var r = t.customMerge(e);
              return "function" == typeof r ? r : s
            }(o, r)(e[o], t[o], r) : i[o] = n(t[o], r))
          })), i
        }(e, r, c) : n(r, c)
      }
      s.all = function(e, t) {
        if (!Array.isArray(e)) throw new Error("first argument should be an array");
        return e.reduce((function(e, r) {
          return s(e, r, t)
        }), {})
      };
      var c = s;
      e.exports = c
    },
    81878: (e, t, r) => {
      "use strict";
      (n = r(62229)) && "object" == typeof n && "default" in n && n.default;
      var n, i = r(40139),
        o = new i,
        a = o.getBrowser(),
        s = (o.getCPU(), o.getDevice()),
        c = o.getEngine(),
        u = o.getOS(),
        l = o.getUA();
      var f = "mobile",
        d = "tablet",
        p = "Chrome",
        b = "Firefox",
        w = "Opera",
        h = "Yandex",
        y = "Safari",
        m = "Internet Explorer",
        v = "Edge",
        g = "Chromium",
        _ = "IE",
        k = "Mobile Safari",
        x = "MIUI Browser",
        O = "Samsung Browser",
        S = "iOS",
        E = "Android",
        j = "Windows Phone",
        T = "Windows",
        P = "Mac OS",
        A = function(e) {
          return e || (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none")
        },
        C = function() {
          return !("undefined" == typeof window || !window.navigator && !navigator) && (window.navigator || navigator)
        },
        D = function(e) {
          var t = C();
          return t && t.platform && (-1 !== t.platform.indexOf(e) || "MacIntel" === t.platform && t.maxTouchPoints > 1 && !window.MSStream)
        },
        M = function(e) {
          return e.type === f
        },
        N = function(e) {
          return e.type === d
        },
        I = function(e) {
          var t = e.type;
          return t === f || t === d
        },
        z = function(e) {
          return "smarttv" === e.type
        },
        R = function(e) {
          return undefined === e.type
        },
        V = function(e) {
          return "wearable" === e.type
        },
        U = function(e) {
          return "console" === e.type
        },
        q = function(e) {
          return "embedded" === e.type
        },
        L = function(e) {
          var t = e.vendor;
          return A(t)
        },
        F = function(e) {
          var t = e.model;
          return A(t)
        },
        B = function(e) {
          var t = e.type;
          return A(t, "browser")
        },
        H = function(e) {
          return e.name === E
        },
        W = function(e) {
          return e.name === T
        },
        G = function(e) {
          return e.name === P
        },
        $ = function(e) {
          return e.name === j
        },
        J = function(e) {
          return e.name === S
        },
        K = function(e) {
          var t = e.version;
          return A(t)
        },
        X = function(e) {
          var t = e.name;
          return A(t)
        },
        Y = function(e) {
          return e.name === p
        },
        Z = function(e) {
          return e.name === b
        },
        Q = function(e) {
          return e.name === g
        },
        ee = function(e) {
          return e.name === v
        },
        te = function(e) {
          return e.name === h
        },
        re = function(e) {
          var t = e.name;
          return t === y || t === k
        },
        ne = function(e) {
          return e.name === k
        },
        ie = function(e) {
          return e.name === w
        },
        oe = function(e) {
          var t = e.name;
          return t === m || t === _
        },
        ae = function(e) {
          return e.name === x
        },
        se = function(e) {
          return e.name === O
        },
        ce = function(e) {
          var t = e.version;
          return A(t)
        },
        ue = function(e) {
          var t = e.major;
          return A(t)
        },
        le = function(e) {
          var t = e.name;
          return A(t)
        },
        fe = function(e) {
          var t = e.name;
          return A(t)
        },
        de = function(e) {
          var t = e.version;
          return A(t)
        },
        pe = function() {
          var e = C(),
            t = e && e.userAgent && e.userAgent.toLowerCase();
          return "string" == typeof t && /electron/.test(t)
        },
        be = function(e) {
          return "string" == typeof e && -1 !== e.indexOf("Edg/")
        },
        we = function() {
          var e = C();
          return e && (/iPad|iPhone|iPod/.test(e.platform) || "MacIntel" === e.platform && e.maxTouchPoints > 1) && !window.MSStream
        },
        he = function() {
          return D("iPad")
        },
        ye = function() {
          return D("iPhone")
        },
        me = function() {
          return D("iPod")
        },
        ve = function(e) {
          return A(e)
        };
      var ge = z(s),
        _e = (U(s), V(s)),
        ke = (q(s), ne(a) || he(), Q(a), I(s) || he(), M(s), N(s) || he(), R(s), R(s), H(u), $(u), J(u) || he(), Y(a), Z(a), re(a), ie(a), oe(a)),
        xe = (K(u), X(u), ce(a), ue(a), le(a)),
        Oe = (L(s), F(s), fe(c), de(c), ve(l), ee(a) || be(l), te(a), B(s), we(), he(), ye(), me(), pe(), be(l), ee(a) && !be(l));
      W(u), G(u), ae(a), se(a);
      t.C0 = xe, t.lT = ke, t.n8 = Oe, t.UX = ge, t.w = _e
    },
    82540: (e, t, r) => {
      "use strict";
      e.exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = void 0, e.exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = void 0, e.exports.__SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = void 0, Object.assign(e.exports, r(62229))
    },
    87552: (e, t, r) => {
      "use strict";
      r.d(t, {
        DX: () => f,
        yN: () => z,
        LV: () => q
      });
      var n = r(56926),
        i = r(35394);
      let o = null;
      const a = {};
      let s = 1;

      function c(e) {
        try {
          return e()
        } catch (e) {}
      }
      const u = "@wry/context:Slot",
        l = c((() => globalThis)) || c((() => global)) || Object.create(null),
        f = l[u] || Array[u] || function(e) {
          try {
            Object.defineProperty(l, u, {
              value: e,
              enumerable: !1,
              writable: !1,
              configurable: !0
            })
          } finally {
            return e
          }
        }(class {
          constructor() {
            this.id = ["slot", s++, Date.now(), Math.random().toString(36).slice(2)].join(":")
          }
          hasValue() {
            for (let e = o; e; e = e.parent)
              if (this.id in e.slots) {
                const t = e.slots[this.id];
                if (t === a) break;
                return e !== o && (o.slots[this.id] = t), !0
              } return o && (o.slots[this.id] = a), !1
          }
          getValue() {
            if (this.hasValue()) return o.slots[this.id]
          }
          withValue(e, t, r, n) {
            const i = {
                __proto__: null,
                [this.id]: e
              },
              a = o;
            o = {
              parent: a,
              slots: i
            };
            try {
              return t.apply(n, r)
            } finally {
              o = a
            }
          }
          static bind(e) {
            const t = o;
            return function() {
              const r = o;
              try {
                return o = t, e.apply(this, arguments)
              } finally {
                o = r
              }
            }
          }
          static noContext(e, t, r) {
            if (!o) return e.apply(r, t); {
              const n = o;
              try {
                return o = null, e.apply(r, t)
              } finally {
                o = n
              }
            }
          }
        }),
        {
          bind: d,
          noContext: p
        } = f,
        b = new f,
        {
          hasOwnProperty: w
        } = Object.prototype,
        h = Array.from || function(e) {
          const t = [];
          return e.forEach((e => t.push(e))), t
        };

      function y(e) {
        const {
          unsubscribe: t
        } = e;
        "function" == typeof t && (e.unsubscribe = void 0, t())
      }
      const m = [];

      function v(e, t) {
        if (!e) throw new Error(t || "assertion failure")
      }

      function g(e, t) {
        const r = e.length;
        return r > 0 && r === t.length && e[r - 1] === t[r - 1]
      }

      function _(e) {
        switch (e.length) {
          case 0:
            throw new Error("unknown value");
          case 1:
            return e[0];
          case 2:
            throw e[1]
        }
      }

      function k(e) {
        return e.slice(0)
      }
      class x {
        constructor(e) {
          this.fn = e, this.parents = new Set, this.childValues = new Map, this.dirtyChildren = null, this.dirty = !0, this.recomputing = !1, this.value = [], this.deps = null, ++x.count
        }
        peek() {
          if (1 === this.value.length && !E(this)) return O(this), this.value[0]
        }
        recompute(e) {
          return v(!this.recomputing, "already recomputing"), O(this), E(this) ? function(e, t) {
            return M(e), b.withValue(e, S, [e, t]),
              function(e, t) {
                if ("function" == typeof e.subscribe) try {
                  y(e), e.unsubscribe = e.subscribe.apply(null, t)
                } catch (t) {
                  return e.setDirty(), !1
                }
                return !0
              }(e, t) && function(e) {
                e.dirty = !1, E(e) || T(e)
              }(e), _(e.value)
          }(this, e) : _(this.value)
        }
        setDirty() {
          this.dirty || (this.dirty = !0, j(this), y(this))
        }
        dispose() {
          this.setDirty(), M(this), P(this, ((e, t) => {
            e.setDirty(), N(e, this)
          }))
        }
        forget() {
          this.dispose()
        }
        dependOn(e) {
          e.add(this), this.deps || (this.deps = m.pop() || new Set), this.deps.add(e)
        }
        forgetDeps() {
          this.deps && (h(this.deps).forEach((e => e.delete(this))), this.deps.clear(), m.push(this.deps), this.deps = null)
        }
      }

      function O(e) {
        const t = b.getValue();
        if (t) return e.parents.add(t), t.childValues.has(e) || t.childValues.set(e, []), E(e) ? A(t, e) : C(t, e), t
      }

      function S(e, t) {
        e.recomputing = !0;
        const {
          normalizeResult: r
        } = e;
        let n;
        r && 1 === e.value.length && (n = k(e.value)), e.value.length = 0;
        try {
          if (e.value[0] = e.fn.apply(null, t), r && n && !g(n, e.value)) try {
            e.value[0] = r(e.value[0], n[0])
          } catch (e) {}
        } catch (t) {
          e.value[1] = t
        }
        e.recomputing = !1
      }

      function E(e) {
        return e.dirty || !(!e.dirtyChildren || !e.dirtyChildren.size)
      }

      function j(e) {
        P(e, A)
      }

      function T(e) {
        P(e, C)
      }

      function P(e, t) {
        const r = e.parents.size;
        if (r) {
          const n = h(e.parents);
          for (let i = 0; i < r; ++i) t(n[i], e)
        }
      }

      function A(e, t) {
        v(e.childValues.has(t)), v(E(t));
        const r = !E(e);
        if (e.dirtyChildren) {
          if (e.dirtyChildren.has(t)) return
        } else e.dirtyChildren = m.pop() || new Set;
        e.dirtyChildren.add(t), r && j(e)
      }

      function C(e, t) {
        v(e.childValues.has(t)), v(!E(t));
        const r = e.childValues.get(t);
        0 === r.length ? e.childValues.set(t, k(t.value)) : g(r, t.value) || e.setDirty(), D(e, t), E(e) || T(e)
      }

      function D(e, t) {
        const r = e.dirtyChildren;
        r && (r.delete(t), 0 === r.size && (m.length < 100 && m.push(r), e.dirtyChildren = null))
      }

      function M(e) {
        e.childValues.size > 0 && e.childValues.forEach(((t, r) => {
          N(e, r)
        })), e.forgetDeps(), v(null === e.dirtyChildren)
      }

      function N(e, t) {
        t.parents.delete(e), e.childValues.delete(t), D(e, t)
      }
      x.count = 0;
      const I = {
        setDirty: !0,
        dispose: !0,
        forget: !0
      };

      function z(e) {
        const t = new Map,
          r = e && e.subscribe;

        function n(e) {
          const n = b.getValue();
          if (n) {
            let i = t.get(e);
            i || t.set(e, i = new Set), n.dependOn(i), "function" == typeof r && (y(i), i.unsubscribe = r(e))
          }
        }
        return n.dirty = function(e, r) {
          const n = t.get(e);
          if (n) {
            const i = r && w.call(I, r) ? r : "setDirty";
            h(n).forEach((e => e[i]())), t.delete(e), y(n)
          }
        }, n
      }
      let R;

      function V(...e) {
        return (R || (R = new n.b("function" == typeof WeakMap))).lookupArray(e)
      }
      const U = new Set;

      function q(e, {
        max: t = Math.pow(2, 16),
        keyArgs: r,
        makeCacheKey: n = V,
        normalizeResult: o,
        subscribe: a,
        cache: s = i.C
      } = Object.create(null)) {
        const c = "function" == typeof s ? new s(t, (e => e.dispose())) : s,
          u = function() {
            const t = n.apply(null, r ? r.apply(null, arguments) : arguments);
            if (void 0 === t) return e.apply(null, arguments);
            let i = c.get(t);
            i || (c.set(t, i = new x(e)), i.normalizeResult = o, i.subscribe = a, i.forget = () => c.delete(t));
            const s = i.recompute(Array.prototype.slice.call(arguments));
            return c.set(t, i), U.add(c), b.hasValue() || (U.forEach((e => e.clean())), U.clear()), s
          };

        function l(e) {
          const t = e && c.get(e);
          t && t.setDirty()
        }

        function f(e) {
          const t = e && c.get(e);
          if (t) return t.peek()
        }

        function d(e) {
          return !!e && c.delete(e)
        }
        return Object.defineProperty(u, "size", {
          get: () => c.size,
          configurable: !1,
          enumerable: !1
        }), Object.freeze(u.options = {
          max: t,
          keyArgs: r,
          makeCacheKey: n,
          normalizeResult: o,
          subscribe: a,
          cache: c
        }), u.dirtyKey = l, u.dirty = function() {
          l(n.apply(null, arguments))
        }, u.peekKey = f, u.peek = function() {
          return f(n.apply(null, arguments))
        }, u.forgetKey = d, u.forget = function() {
          return d(n.apply(null, arguments))
        }, u.makeCacheKey = n, u.getKey = r ? function() {
          return n.apply(null, r.apply(null, arguments))
        } : n, Object.freeze(u)
      }
    },
    93452: (e, t, r) => {
      "use strict";
      r.d(t, {
        q: () => o
      });
      var n = r(82540),
        i = r(325);

      function o(e) {
        return (0, i.r)(n.useCallback((function(t) {
          return e.onNextChange((function r() {
            t(), e.onNextChange(r)
          }))
        }), [e]), e, e)
      }
    }
  }
]);