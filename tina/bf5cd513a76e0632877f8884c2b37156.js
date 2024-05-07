! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = (new Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "2acd9406-495d-4377-9adb-9a5bacfa31c9", e._sentryDebugIdIdentifier = "sentry-dbid-2acd9406-495d-4377-9adb-9a5bacfa31c9")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/tina",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_tina = self.webpackChunk_rockstargames_tina || []).push([
  [378], {
    1378: (e, n, t) => {
      let r;
      t.r(n), t.d(n, {
        NIL: () => S,
        parse: () => h,
        stringify: () => u,
        v1: () => g,
        v3: () => k,
        v4: () => E,
        v5: () => R,
        validate: () => s,
        version: () => N
      });
      const o = new Uint8Array(16);

      function a() {
        if (!r && (r = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !r)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return r(o)
      }
      const c = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,
        s = function(e) {
          return "string" == typeof e && c.test(e)
        },
        i = [];
      for (let e = 0; e < 256; ++e) i.push((e + 256).toString(16).slice(1));

      function l(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return i[e[n + 0]] + i[e[n + 1]] + i[e[n + 2]] + i[e[n + 3]] + "-" + i[e[n + 4]] + i[e[n + 5]] + "-" + i[e[n + 6]] + i[e[n + 7]] + "-" + i[e[n + 8]] + i[e[n + 9]] + "-" + i[e[n + 10]] + i[e[n + 11]] + i[e[n + 12]] + i[e[n + 13]] + i[e[n + 14]] + i[e[n + 15]]
      }
      const u = function(e) {
        const n = l(e, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0);
        if (!s(n)) throw TypeError("Stringified UUID is invalid");
        return n
      };
      let f, d, p = 0,
        y = 0;
      const g = function(e, n, t) {
          let r = n && t || 0;
          const o = n || new Array(16);
          let c = (e = e || {}).node || f,
            s = void 0 !== e.clockseq ? e.clockseq : d;
          if (null == c || null == s) {
            const n = e.random || (e.rng || a)();
            null == c && (c = f = [1 | n[0], n[1], n[2], n[3], n[4], n[5]]), null == s && (s = d = 16383 & (n[6] << 8 | n[7]))
          }
          let i = void 0 !== e.msecs ? e.msecs : Date.now(),
            u = void 0 !== e.nsecs ? e.nsecs : y + 1;
          const g = i - p + (u - y) / 1e4;
          if (g < 0 && void 0 === e.clockseq && (s = s + 1 & 16383), (g < 0 || i > p) && void 0 === e.nsecs && (u = 0), u >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
          p = i, y = u, d = s, i += 122192928e5;
          const h = (1e4 * (268435455 & i) + u) % 4294967296;
          o[r++] = h >>> 24 & 255, o[r++] = h >>> 16 & 255, o[r++] = h >>> 8 & 255, o[r++] = 255 & h;
          const b = i / 4294967296 * 1e4 & 268435455;
          o[r++] = b >>> 8 & 255, o[r++] = 255 & b, o[r++] = b >>> 24 & 15 | 16, o[r++] = b >>> 16 & 255, o[r++] = s >>> 8 | 128, o[r++] = 255 & s;
          for (let e = 0; e < 6; ++e) o[r + e] = c[e];
          return n || l(o)
        },
        h = function(e) {
          if (!s(e)) throw TypeError("Invalid UUID");
          let n;
          const t = new Uint8Array(16);
          return t[0] = (n = parseInt(e.slice(0, 8), 16)) >>> 24, t[1] = n >>> 16 & 255, t[2] = n >>> 8 & 255, t[3] = 255 & n, t[4] = (n = parseInt(e.slice(9, 13), 16)) >>> 8, t[5] = 255 & n, t[6] = (n = parseInt(e.slice(14, 18), 16)) >>> 8, t[7] = 255 & n, t[8] = (n = parseInt(e.slice(19, 23), 16)) >>> 8, t[9] = 255 & n, t[10] = (n = parseInt(e.slice(24, 36), 16)) / 1099511627776 & 255, t[11] = n / 4294967296 & 255, t[12] = n >>> 24 & 255, t[13] = n >>> 16 & 255, t[14] = n >>> 8 & 255, t[15] = 255 & n, t
        };

      function b(e, n, t) {
        function r(e, r, o, a) {
          var c;
          if ("string" == typeof e && (e = function(e) {
              e = unescape(encodeURIComponent(e));
              const n = [];
              for (let t = 0; t < e.length; ++t) n.push(e.charCodeAt(t));
              return n
            }(e)), "string" == typeof r && (r = h(r)), 16 !== (null === (c = r) || void 0 === c ? void 0 : c.length)) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
          let s = new Uint8Array(16 + e.length);
          if (s.set(r), s.set(e, r.length), s = t(s), s[6] = 15 & s[6] | n, s[8] = 63 & s[8] | 128, o) {
            a = a || 0;
            for (let e = 0; e < 16; ++e) o[a + e] = s[e];
            return o
          }
          return l(s)
        }
        try {
          r.name = e
        } catch (e) {}
        return r.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", r.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8", r
      }

      function w(e) {
        return 14 + (e + 64 >>> 9 << 4) + 1
      }

      function v(e, n) {
        const t = (65535 & e) + (65535 & n);
        return (e >> 16) + (n >> 16) + (t >> 16) << 16 | 65535 & t
      }

      function U(e, n, t, r, o, a) {
        return v((c = v(v(n, e), v(r, a))) << (s = o) | c >>> 32 - s, t);
        var c, s
      }

      function I(e, n, t, r, o, a, c) {
        return U(n & t | ~n & r, e, n, o, a, c)
      }

      function m(e, n, t, r, o, a, c) {
        return U(n & r | t & ~r, e, n, o, a, c)
      }

      function A(e, n, t, r, o, a, c) {
        return U(n ^ t ^ r, e, n, o, a, c)
      }

      function _(e, n, t, r, o, a, c) {
        return U(t ^ (n | ~r), e, n, o, a, c)
      }
      const k = b("v3", 48, (function(e) {
          if ("string" == typeof e) {
            const n = unescape(encodeURIComponent(e));
            e = new Uint8Array(n.length);
            for (let t = 0; t < n.length; ++t) e[t] = n.charCodeAt(t)
          }
          return function(e) {
            const n = [],
              t = 32 * e.length,
              r = "0123456789abcdef";
            for (let o = 0; o < t; o += 8) {
              const t = e[o >> 5] >>> o % 32 & 255,
                a = parseInt(r.charAt(t >>> 4 & 15) + r.charAt(15 & t), 16);
              n.push(a)
            }
            return n
          }(function(e, n) {
            e[n >> 5] |= 128 << n % 32, e[w(n) - 1] = n;
            let t = 1732584193,
              r = -271733879,
              o = -1732584194,
              a = 271733878;
            for (let n = 0; n < e.length; n += 16) {
              const c = t,
                s = r,
                i = o,
                l = a;
              t = I(t, r, o, a, e[n], 7, -680876936), a = I(a, t, r, o, e[n + 1], 12, -389564586), o = I(o, a, t, r, e[n + 2], 17, 606105819), r = I(r, o, a, t, e[n + 3], 22, -1044525330), t = I(t, r, o, a, e[n + 4], 7, -176418897), a = I(a, t, r, o, e[n + 5], 12, 1200080426), o = I(o, a, t, r, e[n + 6], 17, -1473231341), r = I(r, o, a, t, e[n + 7], 22, -45705983), t = I(t, r, o, a, e[n + 8], 7, 1770035416), a = I(a, t, r, o, e[n + 9], 12, -1958414417), o = I(o, a, t, r, e[n + 10], 17, -42063), r = I(r, o, a, t, e[n + 11], 22, -1990404162), t = I(t, r, o, a, e[n + 12], 7, 1804603682), a = I(a, t, r, o, e[n + 13], 12, -40341101), o = I(o, a, t, r, e[n + 14], 17, -1502002290), r = I(r, o, a, t, e[n + 15], 22, 1236535329), t = m(t, r, o, a, e[n + 1], 5, -165796510), a = m(a, t, r, o, e[n + 6], 9, -1069501632), o = m(o, a, t, r, e[n + 11], 14, 643717713), r = m(r, o, a, t, e[n], 20, -373897302), t = m(t, r, o, a, e[n + 5], 5, -701558691), a = m(a, t, r, o, e[n + 10], 9, 38016083), o = m(o, a, t, r, e[n + 15], 14, -660478335), r = m(r, o, a, t, e[n + 4], 20, -405537848), t = m(t, r, o, a, e[n + 9], 5, 568446438), a = m(a, t, r, o, e[n + 14], 9, -1019803690), o = m(o, a, t, r, e[n + 3], 14, -187363961), r = m(r, o, a, t, e[n + 8], 20, 1163531501), t = m(t, r, o, a, e[n + 13], 5, -1444681467), a = m(a, t, r, o, e[n + 2], 9, -51403784), o = m(o, a, t, r, e[n + 7], 14, 1735328473), r = m(r, o, a, t, e[n + 12], 20, -1926607734), t = A(t, r, o, a, e[n + 5], 4, -378558), a = A(a, t, r, o, e[n + 8], 11, -2022574463), o = A(o, a, t, r, e[n + 11], 16, 1839030562), r = A(r, o, a, t, e[n + 14], 23, -35309556), t = A(t, r, o, a, e[n + 1], 4, -1530992060), a = A(a, t, r, o, e[n + 4], 11, 1272893353), o = A(o, a, t, r, e[n + 7], 16, -155497632), r = A(r, o, a, t, e[n + 10], 23, -1094730640), t = A(t, r, o, a, e[n + 13], 4, 681279174), a = A(a, t, r, o, e[n], 11, -358537222), o = A(o, a, t, r, e[n + 3], 16, -722521979), r = A(r, o, a, t, e[n + 6], 23, 76029189), t = A(t, r, o, a, e[n + 9], 4, -640364487), a = A(a, t, r, o, e[n + 12], 11, -421815835), o = A(o, a, t, r, e[n + 15], 16, 530742520), r = A(r, o, a, t, e[n + 2], 23, -995338651), t = _(t, r, o, a, e[n], 6, -198630844), a = _(a, t, r, o, e[n + 7], 10, 1126891415), o = _(o, a, t, r, e[n + 14], 15, -1416354905), r = _(r, o, a, t, e[n + 5], 21, -57434055), t = _(t, r, o, a, e[n + 12], 6, 1700485571), a = _(a, t, r, o, e[n + 3], 10, -1894986606), o = _(o, a, t, r, e[n + 10], 15, -1051523), r = _(r, o, a, t, e[n + 1], 21, -2054922799), t = _(t, r, o, a, e[n + 8], 6, 1873313359), a = _(a, t, r, o, e[n + 15], 10, -30611744), o = _(o, a, t, r, e[n + 6], 15, -1560198380), r = _(r, o, a, t, e[n + 13], 21, 1309151649), t = _(t, r, o, a, e[n + 4], 6, -145523070), a = _(a, t, r, o, e[n + 11], 10, -1120210379), o = _(o, a, t, r, e[n + 2], 15, 718787259), r = _(r, o, a, t, e[n + 9], 21, -343485551), t = v(t, c), r = v(r, s), o = v(o, i), a = v(a, l)
            }
            return [t, r, o, a]
          }(function(e) {
            if (0 === e.length) return [];
            const n = 8 * e.length,
              t = new Uint32Array(w(n));
            for (let r = 0; r < n; r += 8) t[r >> 5] |= (255 & e[r / 8]) << r % 32;
            return t
          }(e), 8 * e.length))
        })),
        D = {
          randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto)
        },
        E = function(e, n, t) {
          if (D.randomUUID && !n && !e) return D.randomUUID();
          const r = (e = e || {}).random || (e.rng || a)();
          if (r[6] = 15 & r[6] | 64, r[8] = 63 & r[8] | 128, n) {
            t = t || 0;
            for (let e = 0; e < 16; ++e) n[t + e] = r[e];
            return n
          }
          return l(r)
        };

      function M(e, n, t, r) {
        switch (e) {
          case 0:
            return n & t ^ ~n & r;
          case 1:
          case 3:
            return n ^ t ^ r;
          case 2:
            return n & t ^ n & r ^ t & r
        }
      }

      function C(e, n) {
        return e << n | e >>> 32 - n
      }
      const R = b("v5", 80, (function(e) {
          const n = [1518500249, 1859775393, 2400959708, 3395469782],
            t = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
          if ("string" == typeof e) {
            const n = unescape(encodeURIComponent(e));
            e = [];
            for (let t = 0; t < n.length; ++t) e.push(n.charCodeAt(t))
          } else Array.isArray(e) || (e = Array.prototype.slice.call(e));
          e.push(128);
          const r = e.length / 4 + 2,
            o = Math.ceil(r / 16),
            a = new Array(o);
          for (let n = 0; n < o; ++n) {
            const t = new Uint32Array(16);
            for (let r = 0; r < 16; ++r) t[r] = e[64 * n + 4 * r] << 24 | e[64 * n + 4 * r + 1] << 16 | e[64 * n + 4 * r + 2] << 8 | e[64 * n + 4 * r + 3];
            a[n] = t
          }
          a[o - 1][14] = 8 * (e.length - 1) / Math.pow(2, 32), a[o - 1][14] = Math.floor(a[o - 1][14]), a[o - 1][15] = 8 * (e.length - 1) & 4294967295;
          for (let e = 0; e < o; ++e) {
            const r = new Uint32Array(80);
            for (let n = 0; n < 16; ++n) r[n] = a[e][n];
            for (let e = 16; e < 80; ++e) r[e] = C(r[e - 3] ^ r[e - 8] ^ r[e - 14] ^ r[e - 16], 1);
            let o = t[0],
              c = t[1],
              s = t[2],
              i = t[3],
              l = t[4];
            for (let e = 0; e < 80; ++e) {
              const t = Math.floor(e / 20),
                a = C(o, 5) + M(t, c, s, i) + l + n[t] + r[e] >>> 0;
              l = i, i = s, s = C(c, 30) >>> 0, c = o, o = a
            }
            t[0] = t[0] + o >>> 0, t[1] = t[1] + c >>> 0, t[2] = t[2] + s >>> 0, t[3] = t[3] + i >>> 0, t[4] = t[4] + l >>> 0
          }
          return [t[0] >> 24 & 255, t[0] >> 16 & 255, t[0] >> 8 & 255, 255 & t[0], t[1] >> 24 & 255, t[1] >> 16 & 255, t[1] >> 8 & 255, 255 & t[1], t[2] >> 24 & 255, t[2] >> 16 & 255, t[2] >> 8 & 255, 255 & t[2], t[3] >> 24 & 255, t[3] >> 16 & 255, t[3] >> 8 & 255, 255 & t[3], t[4] >> 24 & 255, t[4] >> 16 & 255, t[4] >> 8 & 255, 255 & t[4]]
        })),
        S = "00000000-0000-0000-0000-000000000000",
        N = function(e) {
          if (!s(e)) throw TypeError("Invalid UUID");
          return parseInt(e.slice(14, 15), 16)
        }
    }
  }
]);