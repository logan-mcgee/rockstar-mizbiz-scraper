try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "1181280d-b4a4-4ddc-8565-efc2002d7418", e._sentryDebugIdIdentifier = "sentry-dbid-1181280d-b4a4-4ddc-8565-efc2002d7418")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-videoplayer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [2657], {
    2657: (e, n, t) => {
      let r;
      t.r(n), t.d(n, {
        NIL: () => R,
        parse: () => h,
        stringify: () => l,
        v1: () => g,
        v3: () => k,
        v4: () => E,
        v5: () => C,
        validate: () => a,
        version: () => S
      });
      const o = new Uint8Array(16);

      function s() {
        if (!r && (r = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !r)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return r(o)
      }
      const c = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,
        a = function(e) {
          return "string" == typeof e && c.test(e)
        },
        d = [];
      for (let e = 0; e < 256; ++e) d.push((e + 256).toString(16).slice(1));

      function i(e, n = 0) {
        return d[e[n + 0]] + d[e[n + 1]] + d[e[n + 2]] + d[e[n + 3]] + "-" + d[e[n + 4]] + d[e[n + 5]] + "-" + d[e[n + 6]] + d[e[n + 7]] + "-" + d[e[n + 8]] + d[e[n + 9]] + "-" + d[e[n + 10]] + d[e[n + 11]] + d[e[n + 12]] + d[e[n + 13]] + d[e[n + 14]] + d[e[n + 15]]
      }
      const l = function(e, n = 0) {
        const t = i(e, n);
        if (!a(t)) throw TypeError("Stringified UUID is invalid");
        return t
      };
      let f, u, p = 0,
        y = 0;
      const g = function(e, n, t) {
          let r = n && t || 0;
          const o = n || new Array(16);
          let c = (e = e || {}).node || f,
            a = void 0 !== e.clockseq ? e.clockseq : u;
          if (null == c || null == a) {
            const n = e.random || (e.rng || s)();
            null == c && (c = f = [1 | n[0], n[1], n[2], n[3], n[4], n[5]]), null == a && (a = u = 16383 & (n[6] << 8 | n[7]))
          }
          let d = void 0 !== e.msecs ? e.msecs : Date.now(),
            l = void 0 !== e.nsecs ? e.nsecs : y + 1;
          const g = d - p + (l - y) / 1e4;
          if (g < 0 && void 0 === e.clockseq && (a = a + 1 & 16383), (g < 0 || d > p) && void 0 === e.nsecs && (l = 0), l >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
          p = d, y = l, u = a, d += 122192928e5;
          const h = (1e4 * (268435455 & d) + l) % 4294967296;
          o[r++] = h >>> 24 & 255, o[r++] = h >>> 16 & 255, o[r++] = h >>> 8 & 255, o[r++] = 255 & h;
          const b = d / 4294967296 * 1e4 & 268435455;
          o[r++] = b >>> 8 & 255, o[r++] = 255 & b, o[r++] = b >>> 24 & 15 | 16, o[r++] = b >>> 16 & 255, o[r++] = a >>> 8 | 128, o[r++] = 255 & a;
          for (let e = 0; e < 6; ++e) o[r + e] = c[e];
          return n || i(o)
        },
        h = function(e) {
          if (!a(e)) throw TypeError("Invalid UUID");
          let n;
          const t = new Uint8Array(16);
          return t[0] = (n = parseInt(e.slice(0, 8), 16)) >>> 24, t[1] = n >>> 16 & 255, t[2] = n >>> 8 & 255, t[3] = 255 & n, t[4] = (n = parseInt(e.slice(9, 13), 16)) >>> 8, t[5] = 255 & n, t[6] = (n = parseInt(e.slice(14, 18), 16)) >>> 8, t[7] = 255 & n, t[8] = (n = parseInt(e.slice(19, 23), 16)) >>> 8, t[9] = 255 & n, t[10] = (n = parseInt(e.slice(24, 36), 16)) / 1099511627776 & 255, t[11] = n / 4294967296 & 255, t[12] = n >>> 24 & 255, t[13] = n >>> 16 & 255, t[14] = n >>> 8 & 255, t[15] = 255 & n, t
        };

      function b(e, n, t) {
        function r(e, r, o, s) {
          var c;
          if ("string" == typeof e && (e = function(e) {
              e = unescape(encodeURIComponent(e));
              const n = [];
              for (let t = 0; t < e.length; ++t) n.push(e.charCodeAt(t));
              return n
            }(e)), "string" == typeof r && (r = h(r)), 16 !== (null === (c = r) || void 0 === c ? void 0 : c.length)) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
          let a = new Uint8Array(16 + e.length);
          if (a.set(r), a.set(e, r.length), a = t(a), a[6] = 15 & a[6] | n, a[8] = 63 & a[8] | 128, o) {
            s = s || 0;
            for (let e = 0; e < 16; ++e) o[s + e] = a[e];
            return o
          }
          return i(a)
        }
        try {
          r.name = e
        } catch (e) {}
        return r.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", r.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8", r
      }

      function w(e) {
        return 14 + (e + 64 >>> 9 << 4) + 1
      }

      function m(e, n) {
        const t = (65535 & e) + (65535 & n);
        return (e >> 16) + (n >> 16) + (t >> 16) << 16 | 65535 & t
      }

      function U(e, n, t, r, o, s) {
        return m((c = m(m(n, e), m(r, s))) << (a = o) | c >>> 32 - a, t);
        var c, a
      }

      function v(e, n, t, r, o, s, c) {
        return U(n & t | ~n & r, e, n, o, s, c)
      }

      function I(e, n, t, r, o, s, c) {
        return U(n & r | t & ~r, e, n, o, s, c)
      }

      function A(e, n, t, r, o, s, c) {
        return U(n ^ t ^ r, e, n, o, s, c)
      }

      function _(e, n, t, r, o, s, c) {
        return U(t ^ (n | ~r), e, n, o, s, c)
      }
      const k = b("v3", 48, function(e) {
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
                s = parseInt(r.charAt(t >>> 4 & 15) + r.charAt(15 & t), 16);
              n.push(s)
            }
            return n
          }(function(e, n) {
            e[n >> 5] |= 128 << n % 32, e[w(n) - 1] = n;
            let t = 1732584193,
              r = -271733879,
              o = -1732584194,
              s = 271733878;
            for (let n = 0; n < e.length; n += 16) {
              const c = t,
                a = r,
                d = o,
                i = s;
              t = v(t, r, o, s, e[n], 7, -680876936), s = v(s, t, r, o, e[n + 1], 12, -389564586), o = v(o, s, t, r, e[n + 2], 17, 606105819), r = v(r, o, s, t, e[n + 3], 22, -1044525330), t = v(t, r, o, s, e[n + 4], 7, -176418897), s = v(s, t, r, o, e[n + 5], 12, 1200080426), o = v(o, s, t, r, e[n + 6], 17, -1473231341), r = v(r, o, s, t, e[n + 7], 22, -45705983), t = v(t, r, o, s, e[n + 8], 7, 1770035416), s = v(s, t, r, o, e[n + 9], 12, -1958414417), o = v(o, s, t, r, e[n + 10], 17, -42063), r = v(r, o, s, t, e[n + 11], 22, -1990404162), t = v(t, r, o, s, e[n + 12], 7, 1804603682), s = v(s, t, r, o, e[n + 13], 12, -40341101), o = v(o, s, t, r, e[n + 14], 17, -1502002290), r = v(r, o, s, t, e[n + 15], 22, 1236535329), t = I(t, r, o, s, e[n + 1], 5, -165796510), s = I(s, t, r, o, e[n + 6], 9, -1069501632), o = I(o, s, t, r, e[n + 11], 14, 643717713), r = I(r, o, s, t, e[n], 20, -373897302), t = I(t, r, o, s, e[n + 5], 5, -701558691), s = I(s, t, r, o, e[n + 10], 9, 38016083), o = I(o, s, t, r, e[n + 15], 14, -660478335), r = I(r, o, s, t, e[n + 4], 20, -405537848), t = I(t, r, o, s, e[n + 9], 5, 568446438), s = I(s, t, r, o, e[n + 14], 9, -1019803690), o = I(o, s, t, r, e[n + 3], 14, -187363961), r = I(r, o, s, t, e[n + 8], 20, 1163531501), t = I(t, r, o, s, e[n + 13], 5, -1444681467), s = I(s, t, r, o, e[n + 2], 9, -51403784), o = I(o, s, t, r, e[n + 7], 14, 1735328473), r = I(r, o, s, t, e[n + 12], 20, -1926607734), t = A(t, r, o, s, e[n + 5], 4, -378558), s = A(s, t, r, o, e[n + 8], 11, -2022574463), o = A(o, s, t, r, e[n + 11], 16, 1839030562), r = A(r, o, s, t, e[n + 14], 23, -35309556), t = A(t, r, o, s, e[n + 1], 4, -1530992060), s = A(s, t, r, o, e[n + 4], 11, 1272893353), o = A(o, s, t, r, e[n + 7], 16, -155497632), r = A(r, o, s, t, e[n + 10], 23, -1094730640), t = A(t, r, o, s, e[n + 13], 4, 681279174), s = A(s, t, r, o, e[n], 11, -358537222), o = A(o, s, t, r, e[n + 3], 16, -722521979), r = A(r, o, s, t, e[n + 6], 23, 76029189), t = A(t, r, o, s, e[n + 9], 4, -640364487), s = A(s, t, r, o, e[n + 12], 11, -421815835), o = A(o, s, t, r, e[n + 15], 16, 530742520), r = A(r, o, s, t, e[n + 2], 23, -995338651), t = _(t, r, o, s, e[n], 6, -198630844), s = _(s, t, r, o, e[n + 7], 10, 1126891415), o = _(o, s, t, r, e[n + 14], 15, -1416354905), r = _(r, o, s, t, e[n + 5], 21, -57434055), t = _(t, r, o, s, e[n + 12], 6, 1700485571), s = _(s, t, r, o, e[n + 3], 10, -1894986606), o = _(o, s, t, r, e[n + 10], 15, -1051523), r = _(r, o, s, t, e[n + 1], 21, -2054922799), t = _(t, r, o, s, e[n + 8], 6, 1873313359), s = _(s, t, r, o, e[n + 15], 10, -30611744), o = _(o, s, t, r, e[n + 6], 15, -1560198380), r = _(r, o, s, t, e[n + 13], 21, 1309151649), t = _(t, r, o, s, e[n + 4], 6, -145523070), s = _(s, t, r, o, e[n + 11], 10, -1120210379), o = _(o, s, t, r, e[n + 2], 15, 718787259), r = _(r, o, s, t, e[n + 9], 21, -343485551), t = m(t, c), r = m(r, a), o = m(o, d), s = m(s, i)
            }
            return [t, r, o, s]
          }(function(e) {
            if (0 === e.length) return [];
            const n = 8 * e.length,
              t = new Uint32Array(w(n));
            for (let r = 0; r < n; r += 8) t[r >> 5] |= (255 & e[r / 8]) << r % 32;
            return t
          }(e), 8 * e.length))
        }),
        D = {
          randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto)
        },
        E = function(e, n, t) {
          if (D.randomUUID && !n && !e) return D.randomUUID();
          const r = (e = e || {}).random || (e.rng || s)();
          if (r[6] = 15 & r[6] | 64, r[8] = 63 & r[8] | 128, n) {
            t = t || 0;
            for (let e = 0; e < 16; ++e) n[t + e] = r[e];
            return n
          }
          return i(r)
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

      function T(e, n) {
        return e << n | e >>> 32 - n
      }
      const C = b("v5", 80, function(e) {
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
            s = new Array(o);
          for (let n = 0; n < o; ++n) {
            const t = new Uint32Array(16);
            for (let r = 0; r < 16; ++r) t[r] = e[64 * n + 4 * r] << 24 | e[64 * n + 4 * r + 1] << 16 | e[64 * n + 4 * r + 2] << 8 | e[64 * n + 4 * r + 3];
            s[n] = t
          }
          s[o - 1][14] = 8 * (e.length - 1) / Math.pow(2, 32), s[o - 1][14] = Math.floor(s[o - 1][14]), s[o - 1][15] = 8 * (e.length - 1) & 4294967295;
          for (let e = 0; e < o; ++e) {
            const r = new Uint32Array(80);
            for (let n = 0; n < 16; ++n) r[n] = s[e][n];
            for (let e = 16; e < 80; ++e) r[e] = T(r[e - 3] ^ r[e - 8] ^ r[e - 14] ^ r[e - 16], 1);
            let o = t[0],
              c = t[1],
              a = t[2],
              d = t[3],
              i = t[4];
            for (let e = 0; e < 80; ++e) {
              const t = Math.floor(e / 20),
                s = T(o, 5) + M(t, c, a, d) + i + n[t] + r[e] >>> 0;
              i = d, d = a, a = T(c, 30) >>> 0, c = o, o = s
            }
            t[0] = t[0] + o >>> 0, t[1] = t[1] + c >>> 0, t[2] = t[2] + a >>> 0, t[3] = t[3] + d >>> 0, t[4] = t[4] + i >>> 0
          }
          return [t[0] >> 24 & 255, t[0] >> 16 & 255, t[0] >> 8 & 255, 255 & t[0], t[1] >> 24 & 255, t[1] >> 16 & 255, t[1] >> 8 & 255, 255 & t[1], t[2] >> 24 & 255, t[2] >> 16 & 255, t[2] >> 8 & 255, 255 & t[2], t[3] >> 24 & 255, t[3] >> 16 & 255, t[3] >> 8 & 255, 255 & t[3], t[4] >> 24 & 255, t[4] >> 16 & 255, t[4] >> 8 & 255, 255 & t[4]]
        }),
        R = "00000000-0000-0000-0000-000000000000",
        S = function(e) {
          if (!a(e)) throw TypeError("Invalid UUID");
          return parseInt(e.slice(14, 15), 16)
        }
    }
  }
]);