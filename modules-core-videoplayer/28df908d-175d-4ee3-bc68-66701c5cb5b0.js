! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "28df908d-175d-4ee3-bc68-66701c5cb5b0", e._sentryDebugIdIdentifier = "sentry-dbid-28df908d-175d-4ee3-bc68-66701c5cb5b0")
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
}, (self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [3736], {
    33736: (e, t, n) => {
      let r;
      n.r(t), n.d(t, {
        NIL: () => R,
        parse: () => b,
        stringify: () => d,
        v1: () => g,
        v3: () => A,
        v4: () => D,
        v5: () => C,
        validate: () => s,
        version: () => G
      });
      const o = new Uint8Array(16);

      function a() {
        if (!r && (r = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !r)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return r(o)
      }
      const l = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,
        s = function(e) {
          return "string" == typeof e && l.test(e)
        },
        c = [];
      for (let e = 0; e < 256; ++e) c.push((e + 256).toString(16).slice(1));

      function i(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return c[e[t + 0]] + c[e[t + 1]] + c[e[t + 2]] + c[e[t + 3]] + "-" + c[e[t + 4]] + c[e[t + 5]] + "-" + c[e[t + 6]] + c[e[t + 7]] + "-" + c[e[t + 8]] + c[e[t + 9]] + "-" + c[e[t + 10]] + c[e[t + 11]] + c[e[t + 12]] + c[e[t + 13]] + c[e[t + 14]] + c[e[t + 15]]
      }
      const d = function(e) {
        const t = i(e, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0);
        if (!s(t)) throw TypeError("Stringified UUID is invalid");
        return t
      };
      let u, f, y = 0,
        p = 0;
      const g = function(e, t, n) {
          let r = t && n || 0;
          const o = t || new Array(16);
          let l = (e = e || {}).node || u,
            s = void 0 !== e.clockseq ? e.clockseq : f;
          if (null == l || null == s) {
            const t = e.random || (e.rng || a)();
            null == l && (l = u = [1 | t[0], t[1], t[2], t[3], t[4], t[5]]), null == s && (s = f = 16383 & (t[6] << 8 | t[7]))
          }
          let c = void 0 !== e.msecs ? e.msecs : Date.now(),
            d = void 0 !== e.nsecs ? e.nsecs : p + 1;
          const g = c - y + (d - p) / 1e4;
          if (g < 0 && void 0 === e.clockseq && (s = s + 1 & 16383), (g < 0 || c > y) && void 0 === e.nsecs && (d = 0), d >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
          y = c, p = d, f = s, c += 122192928e5;
          const b = (1e4 * (268435455 & c) + d) % 4294967296;
          o[r++] = b >>> 24 & 255, o[r++] = b >>> 16 & 255, o[r++] = b >>> 8 & 255, o[r++] = 255 & b;
          const h = c / 4294967296 * 1e4 & 268435455;
          o[r++] = h >>> 8 & 255, o[r++] = 255 & h, o[r++] = h >>> 24 & 15 | 16, o[r++] = h >>> 16 & 255, o[r++] = s >>> 8 | 128, o[r++] = 255 & s;
          for (let e = 0; e < 6; ++e) o[r + e] = l[e];
          return t || i(o)
        },
        b = function(e) {
          if (!s(e)) throw TypeError("Invalid UUID");
          let t;
          const n = new Uint8Array(16);
          return n[0] = (t = parseInt(e.slice(0, 8), 16)) >>> 24, n[1] = t >>> 16 & 255, n[2] = t >>> 8 & 255, n[3] = 255 & t, n[4] = (t = parseInt(e.slice(9, 13), 16)) >>> 8, n[5] = 255 & t, n[6] = (t = parseInt(e.slice(14, 18), 16)) >>> 8, n[7] = 255 & t, n[8] = (t = parseInt(e.slice(19, 23), 16)) >>> 8, n[9] = 255 & t, n[10] = (t = parseInt(e.slice(24, 36), 16)) / 1099511627776 & 255, n[11] = t / 4294967296 & 255, n[12] = t >>> 24 & 255, n[13] = t >>> 16 & 255, n[14] = t >>> 8 & 255, n[15] = 255 & t, n
        };

      function h(e, t, n) {
        function r(e, r, o, a) {
          var l;
          if ("string" == typeof e && (e = function(e) {
              e = unescape(encodeURIComponent(e));
              const t = [];
              for (let n = 0; n < e.length; ++n) t.push(e.charCodeAt(n));
              return t
            }(e)), "string" == typeof r && (r = b(r)), 16 !== (null === (l = r) || void 0 === l ? void 0 : l.length)) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
          let s = new Uint8Array(16 + e.length);
          if (s.set(r), s.set(e, r.length), s = n(s), s[6] = 15 & s[6] | t, s[8] = 63 & s[8] | 128, o) {
            a = a || 0;
            for (let e = 0; e < 16; ++e) o[a + e] = s[e];
            return o
          }
          return i(s)
        }
        try {
          r.name = e
        } catch (e) {}
        return r.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", r.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8", r
      }

      function w(e) {
        return 14 + (e + 64 >>> 9 << 4) + 1
      }

      function v(e, t) {
        const n = (65535 & e) + (65535 & t);
        return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
      }

      function m(e, t, n, r, o, a) {
        return v((l = v(v(t, e), v(r, a))) << (s = o) | l >>> 32 - s, n);
        var l, s
      }

      function M(e, t, n, r, o, a, l) {
        return m(t & n | ~t & r, e, t, o, a, l)
      }

      function U(e, t, n, r, o, a, l) {
        return m(t & r | n & ~r, e, t, o, a, l)
      }

      function I(e, t, n, r, o, a, l) {
        return m(t ^ n ^ r, e, t, o, a, l)
      }

      function _(e, t, n, r, o, a, l) {
        return m(n ^ (t | ~r), e, t, o, a, l)
      }
      const A = h("v3", 48, (function(e) {
          if ("string" == typeof e) {
            const t = unescape(encodeURIComponent(e));
            e = new Uint8Array(t.length);
            for (let n = 0; n < t.length; ++n) e[n] = t.charCodeAt(n)
          }
          return function(e) {
            const t = [],
              n = 32 * e.length,
              r = "0123456789abcdef";
            for (let o = 0; o < n; o += 8) {
              const n = e[o >> 5] >>> o % 32 & 255,
                a = parseInt(r.charAt(n >>> 4 & 15) + r.charAt(15 & n), 16);
              t.push(a)
            }
            return t
          }(function(e, t) {
            e[t >> 5] |= 128 << t % 32, e[w(t) - 1] = t;
            let n = 1732584193,
              r = -271733879,
              o = -1732584194,
              a = 271733878;
            for (let t = 0; t < e.length; t += 16) {
              const l = n,
                s = r,
                c = o,
                i = a;
              n = M(n, r, o, a, e[t], 7, -680876936), a = M(a, n, r, o, e[t + 1], 12, -389564586), o = M(o, a, n, r, e[t + 2], 17, 606105819), r = M(r, o, a, n, e[t + 3], 22, -1044525330), n = M(n, r, o, a, e[t + 4], 7, -176418897), a = M(a, n, r, o, e[t + 5], 12, 1200080426), o = M(o, a, n, r, e[t + 6], 17, -1473231341), r = M(r, o, a, n, e[t + 7], 22, -45705983), n = M(n, r, o, a, e[t + 8], 7, 1770035416), a = M(a, n, r, o, e[t + 9], 12, -1958414417), o = M(o, a, n, r, e[t + 10], 17, -42063), r = M(r, o, a, n, e[t + 11], 22, -1990404162), n = M(n, r, o, a, e[t + 12], 7, 1804603682), a = M(a, n, r, o, e[t + 13], 12, -40341101), o = M(o, a, n, r, e[t + 14], 17, -1502002290), r = M(r, o, a, n, e[t + 15], 22, 1236535329), n = U(n, r, o, a, e[t + 1], 5, -165796510), a = U(a, n, r, o, e[t + 6], 9, -1069501632), o = U(o, a, n, r, e[t + 11], 14, 643717713), r = U(r, o, a, n, e[t], 20, -373897302), n = U(n, r, o, a, e[t + 5], 5, -701558691), a = U(a, n, r, o, e[t + 10], 9, 38016083), o = U(o, a, n, r, e[t + 15], 14, -660478335), r = U(r, o, a, n, e[t + 4], 20, -405537848), n = U(n, r, o, a, e[t + 9], 5, 568446438), a = U(a, n, r, o, e[t + 14], 9, -1019803690), o = U(o, a, n, r, e[t + 3], 14, -187363961), r = U(r, o, a, n, e[t + 8], 20, 1163531501), n = U(n, r, o, a, e[t + 13], 5, -1444681467), a = U(a, n, r, o, e[t + 2], 9, -51403784), o = U(o, a, n, r, e[t + 7], 14, 1735328473), r = U(r, o, a, n, e[t + 12], 20, -1926607734), n = I(n, r, o, a, e[t + 5], 4, -378558), a = I(a, n, r, o, e[t + 8], 11, -2022574463), o = I(o, a, n, r, e[t + 11], 16, 1839030562), r = I(r, o, a, n, e[t + 14], 23, -35309556), n = I(n, r, o, a, e[t + 1], 4, -1530992060), a = I(a, n, r, o, e[t + 4], 11, 1272893353), o = I(o, a, n, r, e[t + 7], 16, -155497632), r = I(r, o, a, n, e[t + 10], 23, -1094730640), n = I(n, r, o, a, e[t + 13], 4, 681279174), a = I(a, n, r, o, e[t], 11, -358537222), o = I(o, a, n, r, e[t + 3], 16, -722521979), r = I(r, o, a, n, e[t + 6], 23, 76029189), n = I(n, r, o, a, e[t + 9], 4, -640364487), a = I(a, n, r, o, e[t + 12], 11, -421815835), o = I(o, a, n, r, e[t + 15], 16, 530742520), r = I(r, o, a, n, e[t + 2], 23, -995338651), n = _(n, r, o, a, e[t], 6, -198630844), a = _(a, n, r, o, e[t + 7], 10, 1126891415), o = _(o, a, n, r, e[t + 14], 15, -1416354905), r = _(r, o, a, n, e[t + 5], 21, -57434055), n = _(n, r, o, a, e[t + 12], 6, 1700485571), a = _(a, n, r, o, e[t + 3], 10, -1894986606), o = _(o, a, n, r, e[t + 10], 15, -1051523), r = _(r, o, a, n, e[t + 1], 21, -2054922799), n = _(n, r, o, a, e[t + 8], 6, 1873313359), a = _(a, n, r, o, e[t + 15], 10, -30611744), o = _(o, a, n, r, e[t + 6], 15, -1560198380), r = _(r, o, a, n, e[t + 13], 21, 1309151649), n = _(n, r, o, a, e[t + 4], 6, -145523070), a = _(a, n, r, o, e[t + 11], 10, -1120210379), o = _(o, a, n, r, e[t + 2], 15, 718787259), r = _(r, o, a, n, e[t + 9], 21, -343485551), n = v(n, l), r = v(r, s), o = v(o, c), a = v(a, i)
            }
            return [n, r, o, a]
          }(function(e) {
            if (0 === e.length) return [];
            const t = 8 * e.length,
              n = new Uint32Array(w(t));
            for (let r = 0; r < t; r += 8) n[r >> 5] |= (255 & e[r / 8]) << r % 32;
            return n
          }(e), 8 * e.length))
        })),
        k = {
          randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto)
        },
        D = function(e, t, n) {
          if (k.randomUUID && !t && !e) return k.randomUUID();
          const r = (e = e || {}).random || (e.rng || a)();
          if (r[6] = 15 & r[6] | 64, r[8] = 63 & r[8] | 128, t) {
            n = n || 0;
            for (let e = 0; e < 16; ++e) t[n + e] = r[e];
            return t
          }
          return i(r)
        };

      function E(e, t, n, r) {
        switch (e) {
          case 0:
            return t & n ^ ~t & r;
          case 1:
          case 3:
            return t ^ n ^ r;
          case 2:
            return t & n ^ t & r ^ n & r
        }
      }

      function T(e, t) {
        return e << t | e >>> 32 - t
      }
      const C = h("v5", 80, (function(e) {
          const t = [1518500249, 1859775393, 2400959708, 3395469782],
            n = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
          if ("string" == typeof e) {
            const t = unescape(encodeURIComponent(e));
            e = [];
            for (let n = 0; n < t.length; ++n) e.push(t.charCodeAt(n))
          } else Array.isArray(e) || (e = Array.prototype.slice.call(e));
          e.push(128);
          const r = e.length / 4 + 2,
            o = Math.ceil(r / 16),
            a = new Array(o);
          for (let t = 0; t < o; ++t) {
            const n = new Uint32Array(16);
            for (let r = 0; r < 16; ++r) n[r] = e[64 * t + 4 * r] << 24 | e[64 * t + 4 * r + 1] << 16 | e[64 * t + 4 * r + 2] << 8 | e[64 * t + 4 * r + 3];
            a[t] = n
          }
          a[o - 1][14] = 8 * (e.length - 1) / Math.pow(2, 32), a[o - 1][14] = Math.floor(a[o - 1][14]), a[o - 1][15] = 8 * (e.length - 1) & 4294967295;
          for (let e = 0; e < o; ++e) {
            const r = new Uint32Array(80);
            for (let t = 0; t < 16; ++t) r[t] = a[e][t];
            for (let e = 16; e < 80; ++e) r[e] = T(r[e - 3] ^ r[e - 8] ^ r[e - 14] ^ r[e - 16], 1);
            let o = n[0],
              l = n[1],
              s = n[2],
              c = n[3],
              i = n[4];
            for (let e = 0; e < 80; ++e) {
              const n = Math.floor(e / 20),
                a = T(o, 5) + E(n, l, s, c) + i + t[n] + r[e] >>> 0;
              i = c, c = s, s = T(l, 30) >>> 0, l = o, o = a
            }
            n[0] = n[0] + o >>> 0, n[1] = n[1] + l >>> 0, n[2] = n[2] + s >>> 0, n[3] = n[3] + c >>> 0, n[4] = n[4] + i >>> 0
          }
          return [n[0] >> 24 & 255, n[0] >> 16 & 255, n[0] >> 8 & 255, 255 & n[0], n[1] >> 24 & 255, n[1] >> 16 & 255, n[1] >> 8 & 255, 255 & n[1], n[2] >> 24 & 255, n[2] >> 16 & 255, n[2] >> 8 & 255, 255 & n[2], n[3] >> 24 & 255, n[3] >> 16 & 255, n[3] >> 8 & 255, 255 & n[3], n[4] >> 24 & 255, n[4] >> 16 & 255, n[4] >> 8 & 255, 255 & n[4]]
        })),
        R = "00000000-0000-0000-0000-000000000000",
        G = function(e) {
          if (!s(e)) throw TypeError("Invalid UUID");
          return parseInt(e.slice(14, 15), 16)
        }
    }
  }
]);