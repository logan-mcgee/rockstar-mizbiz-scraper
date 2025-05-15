! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "44d9fb10-b202-4330-b43c-af4b1f189900", e._sentryDebugIdIdentifier = "sentry-dbid-44d9fb10-b202-4330-b43c-af4b1f189900")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-gtao-license-plate",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_gtao_license_plate = self.webpackChunk_rockstargames_modules_gtao_license_plate || []).push([
  [1010], {
    51010: (e, t, a) => {
      function n(e) {
        return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, n(e)
      }
      a.r(t), a.d(t, {
        BlurStack: () => b,
        canvasRGB: () => s,
        canvasRGBA: () => i,
        image: () => l,
        imageDataRGB: () => g,
        imageDataRGBA: () => d
      });
      var r = [512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292, 512, 454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335, 312, 292, 273, 512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298, 284, 271, 259, 496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335, 323, 312, 302, 292, 282, 273, 265, 512, 497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373, 364, 354, 345, 337, 328, 320, 312, 305, 298, 291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465, 456, 446, 437, 428, 420, 412, 404, 396, 388, 381, 374, 367, 360, 354, 347, 341, 335, 329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265, 261, 512, 505, 497, 489, 482, 475, 468, 461, 454, 447, 441, 435, 428, 422, 417, 411, 405, 399, 394, 389, 383, 378, 373, 368, 364, 359, 354, 350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309, 305, 301, 298, 294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259, 257, 507, 501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442, 437, 433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381, 377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335, 332, 329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297, 294, 292, 289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265, 263, 261, 259],
        o = [9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24];

      function l(e, t, a, n, r, o) {
        if ("string" == typeof e && (e = document.getElementById(e)), e && ("HTMLImageElement" !== Object.prototype.toString.call(e).slice(8, -1) || "naturalWidth" in e)) {
          var l = r ? "offset" : "natural",
            f = e[l + "Width"],
            d = e[l + "Height"];
          if ("ImageBitmap" === Object.prototype.toString.call(e).slice(8, -1) && (f = e.width, d = e.height), "string" == typeof t && (t = document.getElementById(t)), t && "getContext" in t) {
            o || (t.style.width = f + "px", t.style.height = d + "px"), t.width = f, t.height = d;
            var g = t.getContext("2d");
            g.clearRect(0, 0, f, d), g.drawImage(e, 0, 0, e.naturalWidth, e.naturalHeight, 0, 0, f, d), isNaN(a) || a < 1 || (n ? i(t, 0, 0, f, d, a) : s(t, 0, 0, f, d, a))
          }
        }
      }

      function f(e, t, a, r, o) {
        if ("string" == typeof e && (e = document.getElementById(e)), !e || "object" !== n(e) || !("getContext" in e)) throw new TypeError("Expecting canvas with `getContext` method in processCanvasRGB(A) calls!");
        var l = e.getContext("2d");
        try {
          return l.getImageData(t, a, r, o)
        } catch (e) {
          throw new Error("unable to access image data: " + e)
        }
      }

      function i(e, t, a, n, r, o) {
        if (!(isNaN(o) || o < 1)) {
          o |= 0;
          var l = f(e, t, a, n, r);
          l = d(l, 0, 0, n, r, o), e.getContext("2d").putImageData(l, t, a)
        }
      }

      function d(e, t, a, n, l, f) {
        for (var i, d = e.data, s = 2 * f + 1, g = n - 1, u = l - 1, c = f + 1, y = c * (c + 1) / 2, p = new b, v = p, h = 1; h < s; h++) v = v.next = new b, h === c && (i = v);
        v.next = p;
        for (var m = null, w = null, x = 0, _ = 0, M = r[f], E = o[f], I = 0; I < l; I++) {
          v = p;
          for (var k = d[_], G = d[_ + 1], C = d[_ + 2], B = d[_ + 3], S = 0; S < c; S++) v.r = k, v.g = G, v.b = C, v.a = B, v = v.next;
          for (var T = 0, D = 0, N = 0, R = 0, j = c * k, A = c * G, H = c * C, O = c * B, W = y * k, L = y * G, Y = y * C, q = y * B, z = 1; z < c; z++) {
            var F = _ + ((g < z ? g : z) << 2),
              J = d[F],
              K = d[F + 1],
              P = d[F + 2],
              Q = d[F + 3],
              U = c - z;
            W += (v.r = J) * U, L += (v.g = K) * U, Y += (v.b = P) * U, q += (v.a = Q) * U, T += J, D += K, N += P, R += Q, v = v.next
          }
          m = p, w = i;
          for (var V = 0; V < n; V++) {
            var X = q * M >>> E;
            if (d[_ + 3] = X, 0 !== X) {
              var Z = 255 / X;
              d[_] = (W * M >>> E) * Z, d[_ + 1] = (L * M >>> E) * Z, d[_ + 2] = (Y * M >>> E) * Z
            } else d[_] = d[_ + 1] = d[_ + 2] = 0;
            W -= j, L -= A, Y -= H, q -= O, j -= m.r, A -= m.g, H -= m.b, O -= m.a;
            var $ = V + f + 1;
            $ = x + ($ < g ? $ : g) << 2, W += T += m.r = d[$], L += D += m.g = d[$ + 1], Y += N += m.b = d[$ + 2], q += R += m.a = d[$ + 3], m = m.next;
            var ee = w,
              te = ee.r,
              ae = ee.g,
              ne = ee.b,
              re = ee.a;
            j += te, A += ae, H += ne, O += re, T -= te, D -= ae, N -= ne, R -= re, w = w.next, _ += 4
          }
          x += n
        }
        for (var oe = 0; oe < n; oe++) {
          var le = d[_ = oe << 2],
            fe = d[_ + 1],
            ie = d[_ + 2],
            de = d[_ + 3],
            se = c * le,
            ge = c * fe,
            be = c * ie,
            ue = c * de,
            ce = y * le,
            ye = y * fe,
            pe = y * ie,
            ve = y * de;
          v = p;
          for (var he = 0; he < c; he++) v.r = le, v.g = fe, v.b = ie, v.a = de, v = v.next;
          for (var me = n, we = 0, xe = 0, _e = 0, Me = 0, Ee = 1; Ee <= f; Ee++) {
            _ = me + oe << 2;
            var Ie = c - Ee;
            ce += (v.r = le = d[_]) * Ie, ye += (v.g = fe = d[_ + 1]) * Ie, pe += (v.b = ie = d[_ + 2]) * Ie, ve += (v.a = de = d[_ + 3]) * Ie, Me += le, we += fe, xe += ie, _e += de, v = v.next, Ee < u && (me += n)
          }
          _ = oe, m = p, w = i;
          for (var ke = 0; ke < l; ke++) {
            var Ge = _ << 2;
            d[Ge + 3] = de = ve * M >>> E, de > 0 ? (de = 255 / de, d[Ge] = (ce * M >>> E) * de, d[Ge + 1] = (ye * M >>> E) * de, d[Ge + 2] = (pe * M >>> E) * de) : d[Ge] = d[Ge + 1] = d[Ge + 2] = 0, ce -= se, ye -= ge, pe -= be, ve -= ue, se -= m.r, ge -= m.g, be -= m.b, ue -= m.a, Ge = oe + ((Ge = ke + c) < u ? Ge : u) * n << 2, ce += Me += m.r = d[Ge], ye += we += m.g = d[Ge + 1], pe += xe += m.b = d[Ge + 2], ve += _e += m.a = d[Ge + 3], m = m.next, se += le = w.r, ge += fe = w.g, be += ie = w.b, ue += de = w.a, Me -= le, we -= fe, xe -= ie, _e -= de, w = w.next, _ += n
          }
        }
        return e
      }

      function s(e, t, a, n, r, o) {
        if (!(isNaN(o) || o < 1)) {
          o |= 0;
          var l = f(e, t, a, n, r);
          l = g(l, 0, 0, n, r, o), e.getContext("2d").putImageData(l, t, a)
        }
      }

      function g(e, t, a, n, l, f) {
        for (var i, d = e.data, s = 2 * f + 1, g = n - 1, u = l - 1, c = f + 1, y = c * (c + 1) / 2, p = new b, v = p, h = 1; h < s; h++) v = v.next = new b, h === c && (i = v);
        v.next = p;
        for (var m, w, x = null, _ = null, M = r[f], E = o[f], I = 0, k = 0, G = 0; G < l; G++) {
          var C = d[k],
            B = d[k + 1],
            S = d[k + 2],
            T = c * C,
            D = c * B,
            N = c * S,
            R = y * C,
            j = y * B,
            A = y * S;
          v = p;
          for (var H = 0; H < c; H++) v.r = C, v.g = B, v.b = S, v = v.next;
          for (var O = 0, W = 0, L = 0, Y = 1; Y < c; Y++) m = k + ((g < Y ? g : Y) << 2), R += (v.r = C = d[m]) * (w = c - Y), j += (v.g = B = d[m + 1]) * w, A += (v.b = S = d[m + 2]) * w, O += C, W += B, L += S, v = v.next;
          x = p, _ = i;
          for (var q = 0; q < n; q++) d[k] = R * M >>> E, d[k + 1] = j * M >>> E, d[k + 2] = A * M >>> E, R -= T, j -= D, A -= N, T -= x.r, D -= x.g, N -= x.b, m = I + ((m = q + f + 1) < g ? m : g) << 2, R += O += x.r = d[m], j += W += x.g = d[m + 1], A += L += x.b = d[m + 2], x = x.next, T += C = _.r, D += B = _.g, N += S = _.b, O -= C, W -= B, L -= S, _ = _.next, k += 4;
          I += n
        }
        for (var z = 0; z < n; z++) {
          var F = d[k = z << 2],
            J = d[k + 1],
            K = d[k + 2],
            P = c * F,
            Q = c * J,
            U = c * K,
            V = y * F,
            X = y * J,
            Z = y * K;
          v = p;
          for (var $ = 0; $ < c; $++) v.r = F, v.g = J, v.b = K, v = v.next;
          for (var ee = 0, te = 0, ae = 0, ne = 1, re = n; ne <= f; ne++) k = re + z << 2, V += (v.r = F = d[k]) * (w = c - ne), X += (v.g = J = d[k + 1]) * w, Z += (v.b = K = d[k + 2]) * w, ee += F, te += J, ae += K, v = v.next, ne < u && (re += n);
          k = z, x = p, _ = i;
          for (var oe = 0; oe < l; oe++) d[m = k << 2] = V * M >>> E, d[m + 1] = X * M >>> E, d[m + 2] = Z * M >>> E, V -= P, X -= Q, Z -= U, P -= x.r, Q -= x.g, U -= x.b, m = z + ((m = oe + c) < u ? m : u) * n << 2, V += ee += x.r = d[m], X += te += x.g = d[m + 1], Z += ae += x.b = d[m + 2], x = x.next, P += F = _.r, Q += J = _.g, U += K = _.b, ee -= F, te -= J, ae -= K, _ = _.next, k += n
        }
        return e
      }
      var b = function e() {
        ! function(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), this.r = 0, this.g = 0, this.b = 0, this.a = 0, this.next = null
      }
    }
  }
]);