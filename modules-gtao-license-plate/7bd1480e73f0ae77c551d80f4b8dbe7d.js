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
        canvasRGBA: () => l,
        image: () => f,
        imageDataRGB: () => s,
        imageDataRGBA: () => i
      });
      var r = [512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292, 512, 454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335, 312, 292, 273, 512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298, 284, 271, 259, 496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335, 323, 312, 302, 292, 282, 273, 265, 512, 497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373, 364, 354, 345, 337, 328, 320, 312, 305, 298, 291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465, 456, 446, 437, 428, 420, 412, 404, 396, 388, 381, 374, 367, 360, 354, 347, 341, 335, 329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265, 261, 512, 505, 497, 489, 482, 475, 468, 461, 454, 447, 441, 435, 428, 422, 417, 411, 405, 399, 394, 389, 383, 378, 373, 368, 364, 359, 354, 350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309, 305, 301, 298, 294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259, 257, 507, 501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442, 437, 433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381, 377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335, 332, 329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297, 294, 292, 289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265, 263, 261, 259],
        o = [9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24];

      function f(e, t, a, n, r, o) {
        if ("string" == typeof e && (e = document.getElementById(e)), e && "naturalWidth" in e) {
          var f = r ? "offset" : "natural",
            d = e[f + "Width"],
            i = e[f + "Height"];
          if ("string" == typeof t && (t = document.getElementById(t)), t && "getContext" in t) {
            o || (t.style.width = d + "px", t.style.height = i + "px"), t.width = d, t.height = i;
            var s = t.getContext("2d");
            s.clearRect(0, 0, d, i), s.drawImage(e, 0, 0, e.naturalWidth, e.naturalHeight, 0, 0, d, i), isNaN(a) || a < 1 || (n ? l(t, 0, 0, d, i, a) : g(t, 0, 0, d, i, a))
          }
        }
      }

      function d(e, t, a, r, o) {
        if ("string" == typeof e && (e = document.getElementById(e)), !e || "object" !== n(e) || !("getContext" in e)) throw new TypeError("Expecting canvas with `getContext` method in processCanvasRGB(A) calls!");
        var f = e.getContext("2d");
        try {
          return f.getImageData(t, a, r, o)
        } catch (e) {
          throw new Error("unable to access image data: " + e)
        }
      }

      function l(e, t, a, n, r, o) {
        if (!(isNaN(o) || o < 1)) {
          o |= 0;
          var f = d(e, t, a, n, r);
          f = i(f, 0, 0, n, r, o), e.getContext("2d").putImageData(f, t, a)
        }
      }

      function i(e, t, a, n, f, d) {
        for (var l, i = e.data, g = 2 * d + 1, s = n - 1, c = f - 1, b = d + 1, y = b * (b + 1) / 2, v = new u, p = v, x = 1; x < g; x++) p = p.next = new u, x === b && (l = p);
        p.next = v;
        for (var w = null, m = null, h = 0, _ = 0, E = r[d], I = o[d], k = 0; k < f; k++) {
          p = v;
          for (var C = i[_], B = i[_ + 1], D = i[_ + 2], N = i[_ + 3], R = 0; R < b; R++) p.r = C, p.g = B, p.b = D, p.a = N, p = p.next;
          for (var S = 0, M = 0, G = 0, A = 0, T = b * C, W = b * B, H = b * D, j = b * N, L = y * C, Y = y * B, q = y * D, z = y * N, F = 1; F < b; F++) {
            var J = _ + ((s < F ? s : F) << 2),
              K = i[J],
              O = i[J + 1],
              P = i[J + 2],
              Q = i[J + 3],
              U = b - F;
            L += (p.r = K) * U, Y += (p.g = O) * U, q += (p.b = P) * U, z += (p.a = Q) * U, S += K, M += O, G += P, A += Q, p = p.next
          }
          w = v, m = l;
          for (var V = 0; V < n; V++) {
            var X = z * E >> I;
            if (i[_ + 3] = X, 0 !== X) {
              var Z = 255 / X;
              i[_] = (L * E >> I) * Z, i[_ + 1] = (Y * E >> I) * Z, i[_ + 2] = (q * E >> I) * Z
            } else i[_] = i[_ + 1] = i[_ + 2] = 0;
            L -= T, Y -= W, q -= H, z -= j, T -= w.r, W -= w.g, H -= w.b, j -= w.a;
            var $ = V + d + 1;
            $ = h + ($ < s ? $ : s) << 2, L += S += w.r = i[$], Y += M += w.g = i[$ + 1], q += G += w.b = i[$ + 2], z += A += w.a = i[$ + 3], w = w.next;
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
          var fe = i[_ = oe << 2],
            de = i[_ + 1],
            le = i[_ + 2],
            ie = i[_ + 3],
            ge = b * fe,
            se = b * de,
            ue = b * le,
            ce = b * ie,
            be = y * fe,
            ye = y * de,
            ve = y * le,
            pe = y * ie;
          p = v;
          for (var xe = 0; xe < b; xe++) p.r = fe, p.g = de, p.b = le, p.a = ie, p = p.next;
          for (var we = n, me = 0, he = 0, _e = 0, Ee = 0, Ie = 1; Ie <= d; Ie++) {
            _ = we + oe << 2;
            var ke = b - Ie;
            be += (p.r = fe = i[_]) * ke, ye += (p.g = de = i[_ + 1]) * ke, ve += (p.b = le = i[_ + 2]) * ke, pe += (p.a = ie = i[_ + 3]) * ke, Ee += fe, me += de, he += le, _e += ie, p = p.next, Ie < c && (we += n)
          }
          _ = oe, w = v, m = l;
          for (var Ce = 0; Ce < f; Ce++) {
            var Be = _ << 2;
            i[Be + 3] = ie = pe * E >> I, ie > 0 ? (ie = 255 / ie, i[Be] = (be * E >> I) * ie, i[Be + 1] = (ye * E >> I) * ie, i[Be + 2] = (ve * E >> I) * ie) : i[Be] = i[Be + 1] = i[Be + 2] = 0, be -= ge, ye -= se, ve -= ue, pe -= ce, ge -= w.r, se -= w.g, ue -= w.b, ce -= w.a, Be = oe + ((Be = Ce + b) < c ? Be : c) * n << 2, be += Ee += w.r = i[Be], ye += me += w.g = i[Be + 1], ve += he += w.b = i[Be + 2], pe += _e += w.a = i[Be + 3], w = w.next, ge += fe = m.r, se += de = m.g, ue += le = m.b, ce += ie = m.a, Ee -= fe, me -= de, he -= le, _e -= ie, m = m.next, _ += n
          }
        }
        return e
      }

      function g(e, t, a, n, r, o) {
        if (!(isNaN(o) || o < 1)) {
          o |= 0;
          var f = d(e, t, a, n, r);
          f = s(f, 0, 0, n, r, o), e.getContext("2d").putImageData(f, t, a)
        }
      }

      function s(e, t, a, n, f, d) {
        for (var l, i = e.data, g = 2 * d + 1, s = n - 1, c = f - 1, b = d + 1, y = b * (b + 1) / 2, v = new u, p = v, x = 1; x < g; x++) p = p.next = new u, x === b && (l = p);
        p.next = v;
        for (var w, m, h = null, _ = null, E = r[d], I = o[d], k = 0, C = 0, B = 0; B < f; B++) {
          var D = i[C],
            N = i[C + 1],
            R = i[C + 2],
            S = b * D,
            M = b * N,
            G = b * R,
            A = y * D,
            T = y * N,
            W = y * R;
          p = v;
          for (var H = 0; H < b; H++) p.r = D, p.g = N, p.b = R, p = p.next;
          for (var j = 0, L = 0, Y = 0, q = 1; q < b; q++) w = C + ((s < q ? s : q) << 2), A += (p.r = D = i[w]) * (m = b - q), T += (p.g = N = i[w + 1]) * m, W += (p.b = R = i[w + 2]) * m, j += D, L += N, Y += R, p = p.next;
          h = v, _ = l;
          for (var z = 0; z < n; z++) i[C] = A * E >> I, i[C + 1] = T * E >> I, i[C + 2] = W * E >> I, A -= S, T -= M, W -= G, S -= h.r, M -= h.g, G -= h.b, w = k + ((w = z + d + 1) < s ? w : s) << 2, A += j += h.r = i[w], T += L += h.g = i[w + 1], W += Y += h.b = i[w + 2], h = h.next, S += D = _.r, M += N = _.g, G += R = _.b, j -= D, L -= N, Y -= R, _ = _.next, C += 4;
          k += n
        }
        for (var F = 0; F < n; F++) {
          var J = i[C = F << 2],
            K = i[C + 1],
            O = i[C + 2],
            P = b * J,
            Q = b * K,
            U = b * O,
            V = y * J,
            X = y * K,
            Z = y * O;
          p = v;
          for (var $ = 0; $ < b; $++) p.r = J, p.g = K, p.b = O, p = p.next;
          for (var ee = 0, te = 0, ae = 0, ne = 1, re = n; ne <= d; ne++) C = re + F << 2, V += (p.r = J = i[C]) * (m = b - ne), X += (p.g = K = i[C + 1]) * m, Z += (p.b = O = i[C + 2]) * m, ee += J, te += K, ae += O, p = p.next, ne < c && (re += n);
          C = F, h = v, _ = l;
          for (var oe = 0; oe < f; oe++) i[w = C << 2] = V * E >> I, i[w + 1] = X * E >> I, i[w + 2] = Z * E >> I, V -= P, X -= Q, Z -= U, P -= h.r, Q -= h.g, U -= h.b, w = F + ((w = oe + b) < c ? w : c) * n << 2, V += ee += h.r = i[w], X += te += h.g = i[w + 1], Z += ae += h.b = i[w + 2], h = h.next, P += J = _.r, Q += K = _.g, U += O = _.b, ee -= J, te -= K, ae -= O, _ = _.next, C += n
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