! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "fcdae209-e24a-4852-9d73-6dc2d7faab0a", e._sentryDebugIdIdentifier = "sentry-dbid-fcdae209-e24a-4852-9d73-6dc2d7faab0a")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-gtao-license-plate",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_gtao_license_plate = self.webpackChunk_rockstargames_modules_gtao_license_plate || []).push([
  [696], {
    49696: (e, t, a) => {
      function n(e) {
        return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, n(e)
      }
      a.r(t), a.d(t, {
        BlurStack: () => u,
        canvasRGB: () => g,
        canvasRGBA: () => i,
        image: () => f,
        imageDataRGB: () => s,
        imageDataRGBA: () => d
      });
      var r = [512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292, 512, 454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335, 312, 292, 273, 512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298, 284, 271, 259, 496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335, 323, 312, 302, 292, 282, 273, 265, 512, 497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373, 364, 354, 345, 337, 328, 320, 312, 305, 298, 291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465, 456, 446, 437, 428, 420, 412, 404, 396, 388, 381, 374, 367, 360, 354, 347, 341, 335, 329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265, 261, 512, 505, 497, 489, 482, 475, 468, 461, 454, 447, 441, 435, 428, 422, 417, 411, 405, 399, 394, 389, 383, 378, 373, 368, 364, 359, 354, 350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309, 305, 301, 298, 294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259, 257, 507, 501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442, 437, 433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381, 377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335, 332, 329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297, 294, 292, 289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265, 263, 261, 259],
        o = [9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24];

      function f(e, t, a, n, r, o) {
        if ("string" == typeof e && (e = document.getElementById(e)), e && "naturalWidth" in e) {
          var f = r ? "offset" : "natural",
            l = e[f + "Width"],
            d = e[f + "Height"];
          if ("string" == typeof t && (t = document.getElementById(t)), t && "getContext" in t) {
            o || (t.style.width = l + "px", t.style.height = d + "px"), t.width = l, t.height = d;
            var s = t.getContext("2d");
            s.clearRect(0, 0, l, d), s.drawImage(e, 0, 0, e.naturalWidth, e.naturalHeight, 0, 0, l, d), isNaN(a) || a < 1 || (n ? i(t, 0, 0, l, d, a) : g(t, 0, 0, l, d, a))
          }
        }
      }

      function l(e, t, a, r, o) {
        if ("string" == typeof e && (e = document.getElementById(e)), !e || "object" !== n(e) || !("getContext" in e)) throw new TypeError("Expecting canvas with `getContext` method in processCanvasRGB(A) calls!");
        var f = e.getContext("2d");
        try {
          return f.getImageData(t, a, r, o)
        } catch (e) {
          throw new Error("unable to access image data: " + e)
        }
      }

      function i(e, t, a, n, r, o) {
        if (!(isNaN(o) || o < 1)) {
          o |= 0;
          var f = l(e, t, a, n, r);
          f = d(f, 0, 0, n, r, o), e.getContext("2d").putImageData(f, t, a)
        }
      }

      function d(e, t, a, n, f, l) {
        for (var i, d = e.data, g = 2 * l + 1, s = n - 1, b = f - 1, c = l + 1, y = c * (c + 1) / 2, v = new u, p = v, x = 1; x < g; x++) p = p.next = new u, x === c && (i = p);
        p.next = v;
        for (var w = null, m = null, h = 0, _ = 0, E = r[l], I = o[l], k = 0; k < f; k++) {
          p = v;
          for (var C = d[_], B = d[_ + 1], D = d[_ + 2], N = d[_ + 3], R = 0; R < c; R++) p.r = C, p.g = B, p.b = D, p.a = N, p = p.next;
          for (var S = 0, M = 0, G = 0, A = 0, T = c * C, W = c * B, H = c * D, j = c * N, L = y * C, Y = y * B, q = y * D, z = y * N, F = 1; F < c; F++) {
            var J = _ + ((s < F ? s : F) << 2),
              K = d[J],
              O = d[J + 1],
              P = d[J + 2],
              Q = d[J + 3],
              U = c - F;
            L += (p.r = K) * U, Y += (p.g = O) * U, q += (p.b = P) * U, z += (p.a = Q) * U, S += K, M += O, G += P, A += Q, p = p.next
          }
          w = v, m = i;
          for (var V = 0; V < n; V++) {
            var X = z * E >> I;
            if (d[_ + 3] = X, 0 !== X) {
              var Z = 255 / X;
              d[_] = (L * E >> I) * Z, d[_ + 1] = (Y * E >> I) * Z, d[_ + 2] = (q * E >> I) * Z
            } else d[_] = d[_ + 1] = d[_ + 2] = 0;
            L -= T, Y -= W, q -= H, z -= j, T -= w.r, W -= w.g, H -= w.b, j -= w.a;
            var $ = V + l + 1;
            $ = h + ($ < s ? $ : s) << 2, L += S += w.r = d[$], Y += M += w.g = d[$ + 1], q += G += w.b = d[$ + 2], z += A += w.a = d[$ + 3], w = w.next;
            var ee = m,
              te = ee.r,
              ae = ee.g,
              ne = ee.b,
              re = ee.a;
            T += te, W += ae, H += ne, j += re, S -= te, M -= ae, G -= ne, A -= re, m = m.next, _ += 4
          }
          h += n
        }
        for (var oe = 0; oe < n; oe++) {
          var fe = d[_ = oe << 2],
            le = d[_ + 1],
            ie = d[_ + 2],
            de = d[_ + 3],
            ge = c * fe,
            se = c * le,
            ue = c * ie,
            be = c * de,
            ce = y * fe,
            ye = y * le,
            ve = y * ie,
            pe = y * de;
          p = v;
          for (var xe = 0; xe < c; xe++) p.r = fe, p.g = le, p.b = ie, p.a = de, p = p.next;
          for (var we = n, me = 0, he = 0, _e = 0, Ee = 0, Ie = 1; Ie <= l; Ie++) {
            _ = we + oe << 2;
            var ke = c - Ie;
            ce += (p.r = fe = d[_]) * ke, ye += (p.g = le = d[_ + 1]) * ke, ve += (p.b = ie = d[_ + 2]) * ke, pe += (p.a = de = d[_ + 3]) * ke, Ee += fe, me += le, he += ie, _e += de, p = p.next, Ie < b && (we += n)
          }
          _ = oe, w = v, m = i;
          for (var Ce = 0; Ce < f; Ce++) {
            var Be = _ << 2;
            d[Be + 3] = de = pe * E >> I, de > 0 ? (de = 255 / de, d[Be] = (ce * E >> I) * de, d[Be + 1] = (ye * E >> I) * de, d[Be + 2] = (ve * E >> I) * de) : d[Be] = d[Be + 1] = d[Be + 2] = 0, ce -= ge, ye -= se, ve -= ue, pe -= be, ge -= w.r, se -= w.g, ue -= w.b, be -= w.a, Be = oe + ((Be = Ce + c) < b ? Be : b) * n << 2, ce += Ee += w.r = d[Be], ye += me += w.g = d[Be + 1], ve += he += w.b = d[Be + 2], pe += _e += w.a = d[Be + 3], w = w.next, ge += fe = m.r, se += le = m.g, ue += ie = m.b, be += de = m.a, Ee -= fe, me -= le, he -= ie, _e -= de, m = m.next, _ += n
          }
        }
        return e
      }

      function g(e, t, a, n, r, o) {
        if (!(isNaN(o) || o < 1)) {
          o |= 0;
          var f = l(e, t, a, n, r);
          f = s(f, 0, 0, n, r, o), e.getContext("2d").putImageData(f, t, a)
        }
      }

      function s(e, t, a, n, f, l) {
        for (var i, d = e.data, g = 2 * l + 1, s = n - 1, b = f - 1, c = l + 1, y = c * (c + 1) / 2, v = new u, p = v, x = 1; x < g; x++) p = p.next = new u, x === c && (i = p);
        p.next = v;
        for (var w, m, h = null, _ = null, E = r[l], I = o[l], k = 0, C = 0, B = 0; B < f; B++) {
          var D = d[C],
            N = d[C + 1],
            R = d[C + 2],
            S = c * D,
            M = c * N,
            G = c * R,
            A = y * D,
            T = y * N,
            W = y * R;
          p = v;
          for (var H = 0; H < c; H++) p.r = D, p.g = N, p.b = R, p = p.next;
          for (var j = 0, L = 0, Y = 0, q = 1; q < c; q++) w = C + ((s < q ? s : q) << 2), A += (p.r = D = d[w]) * (m = c - q), T += (p.g = N = d[w + 1]) * m, W += (p.b = R = d[w + 2]) * m, j += D, L += N, Y += R, p = p.next;
          h = v, _ = i;
          for (var z = 0; z < n; z++) d[C] = A * E >> I, d[C + 1] = T * E >> I, d[C + 2] = W * E >> I, A -= S, T -= M, W -= G, S -= h.r, M -= h.g, G -= h.b, w = k + ((w = z + l + 1) < s ? w : s) << 2, A += j += h.r = d[w], T += L += h.g = d[w + 1], W += Y += h.b = d[w + 2], h = h.next, S += D = _.r, M += N = _.g, G += R = _.b, j -= D, L -= N, Y -= R, _ = _.next, C += 4;
          k += n
        }
        for (var F = 0; F < n; F++) {
          var J = d[C = F << 2],
            K = d[C + 1],
            O = d[C + 2],
            P = c * J,
            Q = c * K,
            U = c * O,
            V = y * J,
            X = y * K,
            Z = y * O;
          p = v;
          for (var $ = 0; $ < c; $++) p.r = J, p.g = K, p.b = O, p = p.next;
          for (var ee = 0, te = 0, ae = 0, ne = 1, re = n; ne <= l; ne++) C = re + F << 2, V += (p.r = J = d[C]) * (m = c - ne), X += (p.g = K = d[C + 1]) * m, Z += (p.b = O = d[C + 2]) * m, ee += J, te += K, ae += O, p = p.next, ne < b && (re += n);
          C = F, h = v, _ = i;
          for (var oe = 0; oe < f; oe++) d[w = C << 2] = V * E >> I, d[w + 1] = X * E >> I, d[w + 2] = Z * E >> I, V -= P, X -= Q, Z -= U, P -= h.r, Q -= h.g, U -= h.b, w = F + ((w = oe + c) < b ? w : b) * n << 2, V += ee += h.r = d[w], X += te += h.g = d[w + 1], Z += ae += h.b = d[w + 2], h = h.next, P += J = _.r, Q += K = _.g, U += O = _.b, ee -= J, te -= K, ae -= O, _ = _.next, C += n
        }
        return e
      }
      var u = function e() {
        ! function(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), this.r = 0, this.g = 0, this.b = 0, this.a = 0, this.next = null
      }
    }
  }
]);