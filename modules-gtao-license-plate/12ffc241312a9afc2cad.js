"use strict";
(self.webpackChunk_rockstargames_modules_gtao_license_plate = self.webpackChunk_rockstargames_modules_gtao_license_plate || []).push([
  [550], {
    9550: (t, r, a) => {
      function e(t) {
        return e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
          return typeof t
        } : function(t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, e(t)
      }
      a.r(r), a.d(r, {
        BlurStack: () => u,
        canvasRGB: () => c,
        canvasRGBA: () => g,
        image: () => i,
        imageDataRGB: () => l,
        imageDataRGBA: () => s
      });
      var n = [512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292, 512, 454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335, 312, 292, 273, 512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298, 284, 271, 259, 496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335, 323, 312, 302, 292, 282, 273, 265, 512, 497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373, 364, 354, 345, 337, 328, 320, 312, 305, 298, 291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465, 456, 446, 437, 428, 420, 412, 404, 396, 388, 381, 374, 367, 360, 354, 347, 341, 335, 329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265, 261, 512, 505, 497, 489, 482, 475, 468, 461, 454, 447, 441, 435, 428, 422, 417, 411, 405, 399, 394, 389, 383, 378, 373, 368, 364, 359, 354, 350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309, 305, 301, 298, 294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259, 257, 507, 501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442, 437, 433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381, 377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335, 332, 329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297, 294, 292, 289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265, 263, 261, 259],
        o = [9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24];

      function i(t, r, a, e, n, o) {
        if ("string" == typeof t && (t = document.getElementById(t)), t && "naturalWidth" in t) {
          var i = n ? "offset" : "natural",
            f = t[i + "Width"],
            s = t[i + "Height"];
          if ("string" == typeof r && (r = document.getElementById(r)), r && "getContext" in r) {
            o || (r.style.width = f + "px", r.style.height = s + "px"), r.width = f, r.height = s;
            var l = r.getContext("2d");
            l.clearRect(0, 0, f, s), l.drawImage(t, 0, 0, t.naturalWidth, t.naturalHeight, 0, 0, f, s), isNaN(a) || a < 1 || (e ? g(r, 0, 0, f, s, a) : c(r, 0, 0, f, s, a))
          }
        }
      }

      function f(t, r, a, n, o) {
        if ("string" == typeof t && (t = document.getElementById(t)), !t || "object" !== e(t) || !("getContext" in t)) throw new TypeError("Expecting canvas with `getContext` method in processCanvasRGB(A) calls!");
        var i = t.getContext("2d");
        try {
          return i.getImageData(r, a, n, o)
        } catch (t) {
          throw new Error("unable to access image data: " + t)
        }
      }

      function g(t, r, a, e, n, o) {
        if (!(isNaN(o) || o < 1)) {
          o |= 0;
          var i = f(t, r, a, e, n);
          i = s(i, 0, 0, e, n, o), t.getContext("2d").putImageData(i, r, a)
        }
      }

      function s(t, r, a, e, i, f) {
        for (var g, s = t.data, c = 2 * f + 1, l = e - 1, v = i - 1, b = f + 1, x = b * (b + 1) / 2, h = new u, m = h, y = 1; y < c; y++) m = m.next = new u, y === b && (g = m);
        m.next = h;
        for (var d = null, p = null, w = 0, C = 0, _ = n[f], B = o[f], k = 0; k < i; k++) {
          m = h;
          for (var E = s[C], I = s[C + 1], N = s[C + 2], R = s[C + 3], S = 0; S < b; S++) m.r = E, m.g = I, m.b = N, m.a = R, m = m.next;
          for (var D = 0, G = 0, A = 0, W = 0, H = b * E, T = b * I, j = b * N, q = b * R, z = x * E, F = x * I, J = x * N, K = x * R, L = 1; L < b; L++) {
            var M = C + ((l < L ? l : L) << 2),
              O = s[M],
              P = s[M + 1],
              Q = s[M + 2],
              U = s[M + 3],
              V = b - L;
            z += (m.r = O) * V, F += (m.g = P) * V, J += (m.b = Q) * V, K += (m.a = U) * V, D += O, G += P, A += Q, W += U, m = m.next
          }
          d = h, p = g;
          for (var X = 0; X < e; X++) {
            var Y = K * _ >> B;
            if (s[C + 3] = Y, 0 !== Y) {
              var Z = 255 / Y;
              s[C] = (z * _ >> B) * Z, s[C + 1] = (F * _ >> B) * Z, s[C + 2] = (J * _ >> B) * Z
            } else s[C] = s[C + 1] = s[C + 2] = 0;
            z -= H, F -= T, J -= j, K -= q, H -= d.r, T -= d.g, j -= d.b, q -= d.a;
            var $ = X + f + 1;
            $ = w + ($ < l ? $ : l) << 2, z += D += d.r = s[$], F += G += d.g = s[$ + 1], J += A += d.b = s[$ + 2], K += W += d.a = s[$ + 3], d = d.next;
            var tt = p,
              rt = tt.r,
              at = tt.g,
              et = tt.b,
              nt = tt.a;
            H += rt, T += at, j += et, q += nt, D -= rt, G -= at, A -= et, W -= nt, p = p.next, C += 4
          }
          w += e
        }
        for (var ot = 0; ot < e; ot++) {
          var it = s[C = ot << 2],
            ft = s[C + 1],
            gt = s[C + 2],
            st = s[C + 3],
            ct = b * it,
            lt = b * ft,
            ut = b * gt,
            vt = b * st,
            bt = x * it,
            xt = x * ft,
            ht = x * gt,
            mt = x * st;
          m = h;
          for (var yt = 0; yt < b; yt++) m.r = it, m.g = ft, m.b = gt, m.a = st, m = m.next;
          for (var dt = e, pt = 0, wt = 0, Ct = 0, _t = 0, Bt = 1; Bt <= f; Bt++) {
            C = dt + ot << 2;
            var kt = b - Bt;
            bt += (m.r = it = s[C]) * kt, xt += (m.g = ft = s[C + 1]) * kt, ht += (m.b = gt = s[C + 2]) * kt, mt += (m.a = st = s[C + 3]) * kt, _t += it, pt += ft, wt += gt, Ct += st, m = m.next, Bt < v && (dt += e)
          }
          C = ot, d = h, p = g;
          for (var Et = 0; Et < i; Et++) {
            var It = C << 2;
            s[It + 3] = st = mt * _ >> B, st > 0 ? (st = 255 / st, s[It] = (bt * _ >> B) * st, s[It + 1] = (xt * _ >> B) * st, s[It + 2] = (ht * _ >> B) * st) : s[It] = s[It + 1] = s[It + 2] = 0, bt -= ct, xt -= lt, ht -= ut, mt -= vt, ct -= d.r, lt -= d.g, ut -= d.b, vt -= d.a, It = ot + ((It = Et + b) < v ? It : v) * e << 2, bt += _t += d.r = s[It], xt += pt += d.g = s[It + 1], ht += wt += d.b = s[It + 2], mt += Ct += d.a = s[It + 3], d = d.next, ct += it = p.r, lt += ft = p.g, ut += gt = p.b, vt += st = p.a, _t -= it, pt -= ft, wt -= gt, Ct -= st, p = p.next, C += e
          }
        }
        return t
      }

      function c(t, r, a, e, n, o) {
        if (!(isNaN(o) || o < 1)) {
          o |= 0;
          var i = f(t, r, a, e, n);
          i = l(i, 0, 0, e, n, o), t.getContext("2d").putImageData(i, r, a)
        }
      }

      function l(t, r, a, e, i, f) {
        for (var g, s = t.data, c = 2 * f + 1, l = e - 1, v = i - 1, b = f + 1, x = b * (b + 1) / 2, h = new u, m = h, y = 1; y < c; y++) m = m.next = new u, y === b && (g = m);
        m.next = h;
        for (var d, p, w = null, C = null, _ = n[f], B = o[f], k = 0, E = 0, I = 0; I < i; I++) {
          var N = s[E],
            R = s[E + 1],
            S = s[E + 2],
            D = b * N,
            G = b * R,
            A = b * S,
            W = x * N,
            H = x * R,
            T = x * S;
          m = h;
          for (var j = 0; j < b; j++) m.r = N, m.g = R, m.b = S, m = m.next;
          for (var q = 0, z = 0, F = 0, J = 1; J < b; J++) d = E + ((l < J ? l : J) << 2), W += (m.r = N = s[d]) * (p = b - J), H += (m.g = R = s[d + 1]) * p, T += (m.b = S = s[d + 2]) * p, q += N, z += R, F += S, m = m.next;
          w = h, C = g;
          for (var K = 0; K < e; K++) s[E] = W * _ >> B, s[E + 1] = H * _ >> B, s[E + 2] = T * _ >> B, W -= D, H -= G, T -= A, D -= w.r, G -= w.g, A -= w.b, d = k + ((d = K + f + 1) < l ? d : l) << 2, W += q += w.r = s[d], H += z += w.g = s[d + 1], T += F += w.b = s[d + 2], w = w.next, D += N = C.r, G += R = C.g, A += S = C.b, q -= N, z -= R, F -= S, C = C.next, E += 4;
          k += e
        }
        for (var L = 0; L < e; L++) {
          var M = s[E = L << 2],
            O = s[E + 1],
            P = s[E + 2],
            Q = b * M,
            U = b * O,
            V = b * P,
            X = x * M,
            Y = x * O,
            Z = x * P;
          m = h;
          for (var $ = 0; $ < b; $++) m.r = M, m.g = O, m.b = P, m = m.next;
          for (var tt = 0, rt = 0, at = 0, et = 1, nt = e; et <= f; et++) E = nt + L << 2, X += (m.r = M = s[E]) * (p = b - et), Y += (m.g = O = s[E + 1]) * p, Z += (m.b = P = s[E + 2]) * p, tt += M, rt += O, at += P, m = m.next, et < v && (nt += e);
          E = L, w = h, C = g;
          for (var ot = 0; ot < i; ot++) s[d = E << 2] = X * _ >> B, s[d + 1] = Y * _ >> B, s[d + 2] = Z * _ >> B, X -= Q, Y -= U, Z -= V, Q -= w.r, U -= w.g, V -= w.b, d = L + ((d = ot + b) < v ? d : v) * e << 2, X += tt += w.r = s[d], Y += rt += w.g = s[d + 1], Z += at += w.b = s[d + 2], w = w.next, Q += M = C.r, U += O = C.g, V += P = C.b, tt -= M, rt -= O, at -= P, C = C.next, E += e
        }
        return t
      }
      var u = function t() {
        ! function(t, r) {
          if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function")
        }(this, t), this.r = 0, this.g = 0, this.b = 0, this.a = 0, this.next = null
      }
    }
  }
]);