try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "666b810c-a949-4baf-bc45-6d9e73c51438", e._sentryDebugIdIdentifier = "sentry-dbid-666b810c-a949-4baf-bc45-6d9e73c51438")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-gtao-license-plate",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_gtao_license_plate = self.webpackChunk_rockstargames_modules_gtao_license_plate || []).push([
  [6801], {
    76801: (e, t, a) => {
      function n(e) {
        return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, n(e)
      }
      a.r(t), a.d(t, {
        BlurStack: () => b,
        canvasRGB: () => g,
        canvasRGBA: () => l,
        image: () => i,
        imageDataRGB: () => d,
        imageDataRGBA: () => s
      });
      var r = [512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292, 512, 454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335, 312, 292, 273, 512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298, 284, 271, 259, 496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335, 323, 312, 302, 292, 282, 273, 265, 512, 497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373, 364, 354, 345, 337, 328, 320, 312, 305, 298, 291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465, 456, 446, 437, 428, 420, 412, 404, 396, 388, 381, 374, 367, 360, 354, 347, 341, 335, 329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265, 261, 512, 505, 497, 489, 482, 475, 468, 461, 454, 447, 441, 435, 428, 422, 417, 411, 405, 399, 394, 389, 383, 378, 373, 368, 364, 359, 354, 350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309, 305, 301, 298, 294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259, 257, 507, 501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442, 437, 433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381, 377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335, 332, 329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297, 294, 292, 289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265, 263, 261, 259],
        o = [9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24];

      function i(e, t, a, n, r, o) {
        if ("string" == typeof e && (e = document.getElementById(e)), e && ("HTMLImageElement" !== Object.prototype.toString.call(e).slice(8, -1) || "naturalWidth" in e)) {
          var i = r ? "offset" : "natural",
            f = e[i + "Width"],
            s = e[i + "Height"];
          if ("ImageBitmap" === Object.prototype.toString.call(e).slice(8, -1) && (f = e.width, s = e.height), "string" == typeof t && (t = document.getElementById(t)), t && "getContext" in t) {
            o || (t.style.width = f + "px", t.style.height = s + "px"), t.width = f, t.height = s;
            var d = t.getContext("2d");
            d.clearRect(0, 0, f, s), d.drawImage(e, 0, 0, e.naturalWidth, e.naturalHeight, 0, 0, f, s), isNaN(a) || a < 1 || (n ? l(t, 0, 0, f, s, a) : g(t, 0, 0, f, s, a))
          }
        }
      }

      function f(e, t, a, r, o) {
        if ("string" == typeof e && (e = document.getElementById(e)), !e || "object" !== n(e) || !("getContext" in e)) throw new TypeError("Expecting canvas with `getContext` method in processCanvasRGB(A) calls!");
        var i = e.getContext("2d");
        try {
          return i.getImageData(t, a, r, o)
        } catch (e) {
          throw new Error("unable to access image data: " + e)
        }
      }

      function l(e, t, a, n, r, o) {
        if (!(isNaN(o) || o < 1)) {
          o |= 0;
          var i = f(e, t, a, n, r);
          i = s(i, 0, 0, n, r, o), e.getContext("2d").putImageData(i, t, a)
        }
      }

      function s(e, t, a, n, i, f) {
        for (var l, s = e.data, g = 2 * f + 1, d = n - 1, c = i - 1, u = f + 1, y = u * (u + 1) / 2, p = new b, v = p, h = 1; h < g; h++) v = v.next = new b, h === u && (l = v);
        v.next = p;
        for (var m = null, w = null, x = 0, _ = 0, E = r[f], I = o[f], k = 0; k < i; k++) {
          v = p;
          for (var C = s[_], B = s[_ + 1], S = s[_ + 2], T = s[_ + 3], D = 0; D < u; D++) v.r = C, v.g = B, v.b = S, v.a = T, v = v.next;
          for (var M = 0, N = 0, R = 0, G = 0, j = u * C, A = u * B, H = u * S, O = u * T, W = y * C, L = y * B, Y = y * S, q = y * T, z = 1; z < u; z++) {
            var F = _ + ((d < z ? d : z) << 2),
              J = s[F],
              K = s[F + 1],
              P = s[F + 2],
              Q = s[F + 3],
              U = u - z;
            W += (v.r = J) * U, L += (v.g = K) * U, Y += (v.b = P) * U, q += (v.a = Q) * U, M += J, N += K, R += P, G += Q, v = v.next
          }
          m = p, w = l;
          for (var V = 0; V < n; V++) {
            var X = q * E >>> I;
            if (s[_ + 3] = X, 0 !== X) {
              var Z = 255 / X;
              s[_] = (W * E >>> I) * Z, s[_ + 1] = (L * E >>> I) * Z, s[_ + 2] = (Y * E >>> I) * Z
            } else s[_] = s[_ + 1] = s[_ + 2] = 0;
            W -= j, L -= A, Y -= H, q -= O, j -= m.r, A -= m.g, H -= m.b, O -= m.a;
            var $ = V + f + 1;
            $ = x + ($ < d ? $ : d) << 2, W += M += m.r = s[$], L += N += m.g = s[$ + 1], Y += R += m.b = s[$ + 2], q += G += m.a = s[$ + 3], m = m.next;
            var ee = w,
              te = ee.r,
              ae = ee.g,
              ne = ee.b,
              re = ee.a;
            j += te, A += ae, H += ne, O += re, M -= te, N -= ae, R -= ne, G -= re, w = w.next, _ += 4
          }
          x += n
        }
        for (var oe = 0; oe < n; oe++) {
          var ie = s[_ = oe << 2],
            fe = s[_ + 1],
            le = s[_ + 2],
            se = s[_ + 3],
            ge = u * ie,
            de = u * fe,
            be = u * le,
            ce = u * se,
            ue = y * ie,
            ye = y * fe,
            pe = y * le,
            ve = y * se;
          v = p;
          for (var he = 0; he < u; he++) v.r = ie, v.g = fe, v.b = le, v.a = se, v = v.next;
          for (var me = n, we = 0, xe = 0, _e = 0, Ee = 0, Ie = 1; Ie <= f; Ie++) {
            _ = me + oe << 2;
            var ke = u - Ie;
            ue += (v.r = ie = s[_]) * ke, ye += (v.g = fe = s[_ + 1]) * ke, pe += (v.b = le = s[_ + 2]) * ke, ve += (v.a = se = s[_ + 3]) * ke, Ee += ie, we += fe, xe += le, _e += se, v = v.next, Ie < c && (me += n)
          }
          _ = oe, m = p, w = l;
          for (var Ce = 0; Ce < i; Ce++) {
            var Be = _ << 2;
            s[Be + 3] = se = ve * E >>> I, se > 0 ? (se = 255 / se, s[Be] = (ue * E >>> I) * se, s[Be + 1] = (ye * E >>> I) * se, s[Be + 2] = (pe * E >>> I) * se) : s[Be] = s[Be + 1] = s[Be + 2] = 0, ue -= ge, ye -= de, pe -= be, ve -= ce, ge -= m.r, de -= m.g, be -= m.b, ce -= m.a, Be = oe + ((Be = Ce + u) < c ? Be : c) * n << 2, ue += Ee += m.r = s[Be], ye += we += m.g = s[Be + 1], pe += xe += m.b = s[Be + 2], ve += _e += m.a = s[Be + 3], m = m.next, ge += ie = w.r, de += fe = w.g, be += le = w.b, ce += se = w.a, Ee -= ie, we -= fe, xe -= le, _e -= se, w = w.next, _ += n
          }
        }
        return e
      }

      function g(e, t, a, n, r, o) {
        if (!(isNaN(o) || o < 1)) {
          o |= 0;
          var i = f(e, t, a, n, r);
          i = d(i, 0, 0, n, r, o), e.getContext("2d").putImageData(i, t, a)
        }
      }

      function d(e, t, a, n, i, f) {
        for (var l, s = e.data, g = 2 * f + 1, d = n - 1, c = i - 1, u = f + 1, y = u * (u + 1) / 2, p = new b, v = p, h = 1; h < g; h++) v = v.next = new b, h === u && (l = v);
        v.next = p;
        for (var m, w, x = null, _ = null, E = r[f], I = o[f], k = 0, C = 0, B = 0; B < i; B++) {
          var S = s[C],
            T = s[C + 1],
            D = s[C + 2],
            M = u * S,
            N = u * T,
            R = u * D,
            G = y * S,
            j = y * T,
            A = y * D;
          v = p;
          for (var H = 0; H < u; H++) v.r = S, v.g = T, v.b = D, v = v.next;
          for (var O = 0, W = 0, L = 0, Y = 1; Y < u; Y++) m = C + ((d < Y ? d : Y) << 2), G += (v.r = S = s[m]) * (w = u - Y), j += (v.g = T = s[m + 1]) * w, A += (v.b = D = s[m + 2]) * w, O += S, W += T, L += D, v = v.next;
          x = p, _ = l;
          for (var q = 0; q < n; q++) s[C] = G * E >>> I, s[C + 1] = j * E >>> I, s[C + 2] = A * E >>> I, G -= M, j -= N, A -= R, M -= x.r, N -= x.g, R -= x.b, m = k + ((m = q + f + 1) < d ? m : d) << 2, G += O += x.r = s[m], j += W += x.g = s[m + 1], A += L += x.b = s[m + 2], x = x.next, M += S = _.r, N += T = _.g, R += D = _.b, O -= S, W -= T, L -= D, _ = _.next, C += 4;
          k += n
        }
        for (var z = 0; z < n; z++) {
          var F = s[C = z << 2],
            J = s[C + 1],
            K = s[C + 2],
            P = u * F,
            Q = u * J,
            U = u * K,
            V = y * F,
            X = y * J,
            Z = y * K;
          v = p;
          for (var $ = 0; $ < u; $++) v.r = F, v.g = J, v.b = K, v = v.next;
          for (var ee = 0, te = 0, ae = 0, ne = 1, re = n; ne <= f; ne++) C = re + z << 2, V += (v.r = F = s[C]) * (w = u - ne), X += (v.g = J = s[C + 1]) * w, Z += (v.b = K = s[C + 2]) * w, ee += F, te += J, ae += K, v = v.next, ne < c && (re += n);
          C = z, x = p, _ = l;
          for (var oe = 0; oe < i; oe++) s[m = C << 2] = V * E >>> I, s[m + 1] = X * E >>> I, s[m + 2] = Z * E >>> I, V -= P, X -= Q, Z -= U, P -= x.r, Q -= x.g, U -= x.b, m = z + ((m = oe + u) < c ? m : c) * n << 2, V += ee += x.r = s[m], X += te += x.g = s[m + 1], Z += ae += x.b = s[m + 2], x = x.next, P += F = _.r, Q += J = _.g, U += K = _.b, ee -= F, te -= J, ae -= K, _ = _.next, C += n
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