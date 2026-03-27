try {
  let n = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    e = (new n.Error).stack;
  e && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[e] = "41ac9b10-a9ab-4053-a6b9-d0719bb1259f", n._sentryDebugIdIdentifier = "sentry-dbid-41ac9b10-a9ab-4053-a6b9-d0719bb1259f")
} catch (n) {} {
  let n = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[(new n.Error).stack] = Object.assign({}, n._sentryModuleMetadata[(new n.Error).stack], {
    release: "sentry-release-id",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160",
    packageName: "@rockstargames/account-management"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunkaccount_management = self.webpackChunkaccount_management || []).push([
  [6582], {
    76582: (n, e, i) => {
      i.d(e, {
        A: () => Cn,
        W: () => Un
      });
      var t, r, s = 9e15,
        o = 1e9,
        u = "0123456789abcdef",
        c = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",
        f = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",
        a = {
          precision: 20,
          rounding: 4,
          modulo: 1,
          toExpNeg: -7,
          toExpPos: 21,
          minE: -s,
          maxE: s,
          crypto: !1
        },
        d = !0,
        l = "[DecimalError] ",
        h = l + "Invalid argument: ",
        g = l + "Precision limit exceeded",
        p = l + "crypto unavailable",
        w = "[object Decimal]",
        m = Math.floor,
        v = Math.pow,
        N = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
        b = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
        y = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
        E = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
        x = 1e7,
        M = c.length - 1,
        q = f.length - 1,
        O = {
          toStringTag: w
        };

      function _(n) {
        var e, i, t, r = n.length - 1,
          s = "",
          o = n[0];
        if (r > 0) {
          for (s += o, e = 1; e < r; e++)(i = 7 - (t = n[e] + "").length) && (s += L(i)), s += t;
          (i = 7 - (t = (o = n[e]) + "").length) && (s += L(i))
        } else if (0 === o) return "0";
        for (; o % 10 == 0;) o /= 10;
        return s + o
      }

      function D(n, e, i) {
        if (n !== ~~n || n < e || n > i) throw Error(h + n)
      }

      function T(n, e, i, t) {
        var r, s, o, u;
        for (s = n[0]; s >= 10; s /= 10) --e;
        return --e < 0 ? (e += 7, r = 0) : (r = Math.ceil((e + 1) / 7), e %= 7), s = v(10, 7 - e), u = n[r] % s | 0, null == t ? e < 3 ? (0 == e ? u = u / 100 | 0 : 1 == e && (u = u / 10 | 0), o = i < 4 && 99999 == u || i > 3 && 49999 == u || 5e4 == u || 0 == u) : o = (i < 4 && u + 1 == s || i > 3 && u + 1 == s / 2) && (n[r + 1] / s / 100 | 0) == v(10, e - 2) - 1 || (u == s / 2 || 0 == u) && !(n[r + 1] / s / 100 | 0) : e < 4 ? (0 == e ? u = u / 1e3 | 0 : 1 == e ? u = u / 100 | 0 : 2 == e && (u = u / 10 | 0), o = (t || i < 4) && 9999 == u || !t && i > 3 && 4999 == u) : o = ((t || i < 4) && u + 1 == s || !t && i > 3 && u + 1 == s / 2) && (n[r + 1] / s / 1e3 | 0) == v(10, e - 3) - 1, o
      }

      function A(n, e, i) {
        for (var t, r, s = [0], o = 0, c = n.length; o < c;) {
          for (r = s.length; r--;) s[r] *= e;
          for (s[0] += u.indexOf(n.charAt(o++)), t = 0; t < s.length; t++) s[t] > i - 1 && (void 0 === s[t + 1] && (s[t + 1] = 0), s[t + 1] += s[t] / i | 0, s[t] %= i)
        }
        return s.reverse()
      }
      O.absoluteValue = O.abs = function() {
        var n = new this.constructor(this);
        return n.s < 0 && (n.s = 1), k(n)
      }, O.ceil = function() {
        return k(new this.constructor(this), this.e + 1, 2)
      }, O.clampedTo = O.clamp = function(n, e) {
        var i = this,
          t = i.constructor;
        if (n = new t(n), e = new t(e), !n.s || !e.s) return new t(NaN);
        if (n.gt(e)) throw Error(h + e);
        return i.cmp(n) < 0 ? n : i.cmp(e) > 0 ? e : new t(i)
      }, O.comparedTo = O.cmp = function(n) {
        var e, i, t, r, s = this,
          o = s.d,
          u = (n = new s.constructor(n)).d,
          c = s.s,
          f = n.s;
        if (!o || !u) return c && f ? c !== f ? c : o === u ? 0 : !o ^ c < 0 ? 1 : -1 : NaN;
        if (!o[0] || !u[0]) return o[0] ? c : u[0] ? -f : 0;
        if (c !== f) return c;
        if (s.e !== n.e) return s.e > n.e ^ c < 0 ? 1 : -1;
        for (e = 0, i = (t = o.length) < (r = u.length) ? t : r; e < i; ++e)
          if (o[e] !== u[e]) return o[e] > u[e] ^ c < 0 ? 1 : -1;
        return t === r ? 0 : t > r ^ c < 0 ? 1 : -1
      }, O.cosine = O.cos = function() {
        var n, e, i = this,
          t = i.constructor;
        return i.d ? i.d[0] ? (n = t.precision, e = t.rounding, t.precision = n + Math.max(i.e, i.sd()) + 7, t.rounding = 1, i = function(n, e) {
          var i, t, r;
          if (e.isZero()) return e;
          (t = e.d.length) < 32 ? r = (1 / Y(4, i = Math.ceil(t / 3))).toString() : (i = 16, r = "2.3283064365386962890625e-10"), n.precision += i, e = J(n, 1, e.times(r), new n(1));
          for (var s = i; s--;) {
            var o = e.times(e);
            e = o.times(o).minus(o).times(8).plus(1)
          }
          return n.precision -= i, e
        }(t, z(t, i)), t.precision = n, t.rounding = e, k(2 == r || 3 == r ? i.neg() : i, n, e, !0)) : new t(1) : new t(NaN)
      }, O.cubeRoot = O.cbrt = function() {
        var n, e, i, t, r, s, o, u, c, f, a = this,
          l = a.constructor;
        if (!a.isFinite() || a.isZero()) return new l(a);
        for (d = !1, (s = a.s * v(a.s * a, 1 / 3)) && Math.abs(s) != 1 / 0 ? t = new l(s.toString()) : (i = _(a.d), (s = ((n = a.e) - i.length + 1) % 3) && (i += 1 == s || -2 == s ? "0" : "00"), s = v(i, 1 / 3), n = m((n + 1) / 3) - (n % 3 == (n < 0 ? -1 : 2)), (t = new l(i = s == 1 / 0 ? "5e" + n : (i = s.toExponential()).slice(0, i.indexOf("e") + 1) + n)).s = a.s), o = (n = l.precision) + 3;;)
          if (f = (c = (u = t).times(u).times(u)).plus(a), t = F(f.plus(a).times(u), f.plus(c), o + 2, 1), _(u.d).slice(0, o) === (i = _(t.d)).slice(0, o)) {
            if ("9999" != (i = i.slice(o - 3, o + 1)) && (r || "4999" != i)) {
              +i && (+i.slice(1) || "5" != i.charAt(0)) || (k(t, n + 1, 1), e = !t.times(t).times(t).eq(a));
              break
            }
            if (!r && (k(u, n + 1, 0), u.times(u).times(u).eq(a))) {
              t = u;
              break
            }
            o += 4, r = 1
          } return d = !0, k(t, n, l.rounding, e)
      }, O.decimalPlaces = O.dp = function() {
        var n, e = this.d,
          i = NaN;
        if (e) {
          if (i = 7 * ((n = e.length - 1) - m(this.e / 7)), n = e[n])
            for (; n % 10 == 0; n /= 10) i--;
          i < 0 && (i = 0)
        }
        return i
      }, O.dividedBy = O.div = function(n) {
        return F(this, new this.constructor(n))
      }, O.dividedToIntegerBy = O.divToInt = function(n) {
        var e = this.constructor;
        return k(F(this, new e(n), 0, 1, 1), e.precision, e.rounding)
      }, O.equals = O.eq = function(n) {
        return 0 === this.cmp(n)
      }, O.floor = function() {
        return k(new this.constructor(this), this.e + 1, 3)
      }, O.greaterThan = O.gt = function(n) {
        return this.cmp(n) > 0
      }, O.greaterThanOrEqualTo = O.gte = function(n) {
        var e = this.cmp(n);
        return 1 == e || 0 === e
      }, O.hyperbolicCosine = O.cosh = function() {
        var n, e, i, t, r, s = this,
          o = s.constructor,
          u = new o(1);
        if (!s.isFinite()) return new o(s.s ? 1 / 0 : NaN);
        if (s.isZero()) return u;
        i = o.precision, t = o.rounding, o.precision = i + Math.max(s.e, s.sd()) + 4, o.rounding = 1, (r = s.d.length) < 32 ? e = (1 / Y(4, n = Math.ceil(r / 3))).toString() : (n = 16, e = "2.3283064365386962890625e-10"), s = J(o, 1, s.times(e), new o(1), !0);
        for (var c, f = n, a = new o(8); f--;) c = s.times(s), s = u.minus(c.times(a.minus(c.times(a))));
        return k(s, o.precision = i, o.rounding = t, !0)
      }, O.hyperbolicSine = O.sinh = function() {
        var n, e, i, t, r = this,
          s = r.constructor;
        if (!r.isFinite() || r.isZero()) return new s(r);
        if (e = s.precision, i = s.rounding, s.precision = e + Math.max(r.e, r.sd()) + 4, s.rounding = 1, (t = r.d.length) < 3) r = J(s, 2, r, r, !0);
        else {
          n = (n = 1.4 * Math.sqrt(t)) > 16 ? 16 : 0 | n, r = J(s, 2, r = r.times(1 / Y(5, n)), r, !0);
          for (var o, u = new s(5), c = new s(16), f = new s(20); n--;) o = r.times(r), r = r.times(u.plus(o.times(c.times(o).plus(f))))
        }
        return s.precision = e, s.rounding = i, k(r, e, i, !0)
      }, O.hyperbolicTangent = O.tanh = function() {
        var n, e, i = this,
          t = i.constructor;
        return i.isFinite() ? i.isZero() ? new t(i) : (n = t.precision, e = t.rounding, t.precision = n + 7, t.rounding = 1, F(i.sinh(), i.cosh(), t.precision = n, t.rounding = e)) : new t(i.s)
      }, O.inverseCosine = O.acos = function() {
        var n = this,
          e = n.constructor,
          i = n.abs().cmp(1),
          t = e.precision,
          r = e.rounding;
        return -1 !== i ? 0 === i ? n.isNeg() ? P(e, t, r) : new e(0) : new e(NaN) : n.isZero() ? P(e, t + 4, r).times(.5) : (e.precision = t + 6, e.rounding = 1, n = new e(1).minus(n).div(n.plus(1)).sqrt().atan(), e.precision = t, e.rounding = r, n.times(2))
      }, O.inverseHyperbolicCosine = O.acosh = function() {
        var n, e, i = this,
          t = i.constructor;
        return i.lte(1) ? new t(i.eq(1) ? 0 : NaN) : i.isFinite() ? (n = t.precision, e = t.rounding, t.precision = n + Math.max(Math.abs(i.e), i.sd()) + 4, t.rounding = 1, d = !1, i = i.times(i).minus(1).sqrt().plus(i), d = !0, t.precision = n, t.rounding = e, i.ln()) : new t(i)
      }, O.inverseHyperbolicSine = O.asinh = function() {
        var n, e, i = this,
          t = i.constructor;
        return !i.isFinite() || i.isZero() ? new t(i) : (n = t.precision, e = t.rounding, t.precision = n + 2 * Math.max(Math.abs(i.e), i.sd()) + 6, t.rounding = 1, d = !1, i = i.times(i).plus(1).sqrt().plus(i), d = !0, t.precision = n, t.rounding = e, i.ln())
      }, O.inverseHyperbolicTangent = O.atanh = function() {
        var n, e, i, t, r = this,
          s = r.constructor;
        return r.isFinite() ? r.e >= 0 ? new s(r.abs().eq(1) ? r.s / 0 : r.isZero() ? r : NaN) : (n = s.precision, e = s.rounding, t = r.sd(), Math.max(t, n) < 2 * -r.e - 1 ? k(new s(r), n, e, !0) : (s.precision = i = t - r.e, r = F(r.plus(1), new s(1).minus(r), i + n, 1), s.precision = n + 4, s.rounding = 1, r = r.ln(), s.precision = n, s.rounding = e, r.times(.5))) : new s(NaN)
      }, O.inverseSine = O.asin = function() {
        var n, e, i, t, r = this,
          s = r.constructor;
        return r.isZero() ? new s(r) : (e = r.abs().cmp(1), i = s.precision, t = s.rounding, -1 !== e ? 0 === e ? ((n = P(s, i + 4, t).times(.5)).s = r.s, n) : new s(NaN) : (s.precision = i + 6, s.rounding = 1, r = r.div(new s(1).minus(r.times(r)).sqrt().plus(1)).atan(), s.precision = i, s.rounding = t, r.times(2)))
      }, O.inverseTangent = O.atan = function() {
        var n, e, i, t, r, s, o, u, c, f = this,
          a = f.constructor,
          l = a.precision,
          h = a.rounding;
        if (f.isFinite()) {
          if (f.isZero()) return new a(f);
          if (f.abs().eq(1) && l + 4 <= q) return (o = P(a, l + 4, h).times(.25)).s = f.s, o
        } else {
          if (!f.s) return new a(NaN);
          if (l + 4 <= q) return (o = P(a, l + 4, h).times(.5)).s = f.s, o
        }
        for (a.precision = u = l + 10, a.rounding = 1, n = i = Math.min(28, u / 7 + 2 | 0); n; --n) f = f.div(f.times(f).plus(1).sqrt().plus(1));
        for (d = !1, e = Math.ceil(u / 7), t = 1, c = f.times(f), o = new a(f), r = f; - 1 !== n;)
          if (r = r.times(c), s = o.minus(r.div(t += 2)), r = r.times(c), void 0 !== (o = s.plus(r.div(t += 2))).d[e])
            for (n = e; o.d[n] === s.d[n] && n--;);
        return i && (o = o.times(2 << i - 1)), d = !0, k(o, a.precision = l, a.rounding = h, !0)
      }, O.isFinite = function() {
        return !!this.d
      }, O.isInteger = O.isInt = function() {
        return !!this.d && m(this.e / 7) > this.d.length - 2
      }, O.isNaN = function() {
        return !this.s
      }, O.isNegative = O.isNeg = function() {
        return this.s < 0
      }, O.isPositive = O.isPos = function() {
        return this.s > 0
      }, O.isZero = function() {
        return !!this.d && 0 === this.d[0]
      }, O.lessThan = O.lt = function(n) {
        return this.cmp(n) < 0
      }, O.lessThanOrEqualTo = O.lte = function(n) {
        return this.cmp(n) < 1
      }, O.logarithm = O.log = function(n) {
        var e, i, t, r, s, o, u, c, f = this,
          a = f.constructor,
          l = a.precision,
          h = a.rounding;
        if (null == n) n = new a(10), e = !0;
        else {
          if (i = (n = new a(n)).d, n.s < 0 || !i || !i[0] || n.eq(1)) return new a(NaN);
          e = n.eq(10)
        }
        if (i = f.d, f.s < 0 || !i || !i[0] || f.eq(1)) return new a(i && !i[0] ? -1 / 0 : 1 != f.s ? NaN : i ? 0 : 1 / 0);
        if (e)
          if (i.length > 1) s = !0;
          else {
            for (r = i[0]; r % 10 == 0;) r /= 10;
            s = 1 !== r
          } if (d = !1, o = V(f, u = l + 5), t = e ? R(a, u + 10) : V(n, u), T((c = F(o, t, u, 1)).d, r = l, h))
          do {
            if (o = V(f, u += 10), t = e ? R(a, u + 10) : V(n, u), c = F(o, t, u, 1), !s) {
              +_(c.d).slice(r + 1, r + 15) + 1 == 1e14 && (c = k(c, l + 1, 0));
              break
            }
          } while (T(c.d, r += 10, h));
        return d = !0, k(c, l, h)
      }, O.minus = O.sub = function(n) {
        var e, i, t, r, s, o, u, c, f, a, l, h, g = this,
          p = g.constructor;
        if (n = new p(n), !g.d || !n.d) return g.s && n.s ? g.d ? n.s = -n.s : n = new p(n.d || g.s !== n.s ? g : NaN) : n = new p(NaN), n;
        if (g.s != n.s) return n.s = -n.s, g.plus(n);
        if (f = g.d, h = n.d, u = p.precision, c = p.rounding, !f[0] || !h[0]) {
          if (h[0]) n.s = -n.s;
          else {
            if (!f[0]) return new p(3 === c ? -0 : 0);
            n = new p(g)
          }
          return d ? k(n, u, c) : n
        }
        if (i = m(n.e / 7), a = m(g.e / 7), f = f.slice(), s = a - i) {
          for ((l = s < 0) ? (e = f, s = -s, o = h.length) : (e = h, i = a, o = f.length), s > (t = Math.max(Math.ceil(u / 7), o) + 2) && (s = t, e.length = 1), e.reverse(), t = s; t--;) e.push(0);
          e.reverse()
        } else {
          for ((l = (t = f.length) < (o = h.length)) && (o = t), t = 0; t < o; t++)
            if (f[t] != h[t]) {
              l = f[t] < h[t];
              break
            } s = 0
        }
        for (l && (e = f, f = h, h = e, n.s = -n.s), o = f.length, t = h.length - o; t > 0; --t) f[o++] = 0;
        for (t = h.length; t > s;) {
          if (f[--t] < h[t]) {
            for (r = t; r && 0 === f[--r];) f[r] = x - 1;
            --f[r], f[t] += x
          }
          f[t] -= h[t]
        }
        for (; 0 === f[--o];) f.pop();
        for (; 0 === f[0]; f.shift()) --i;
        return f[0] ? (n.d = f, n.e = Z(f, i), d ? k(n, u, c) : n) : new p(3 === c ? -0 : 0)
      }, O.modulo = O.mod = function(n) {
        var e, i = this,
          t = i.constructor;
        return n = new t(n), !i.d || !n.s || n.d && !n.d[0] ? new t(NaN) : !n.d || i.d && !i.d[0] ? k(new t(i), t.precision, t.rounding) : (d = !1, 9 == t.modulo ? (e = F(i, n.abs(), 0, 3, 1)).s *= n.s : e = F(i, n, 0, t.modulo, 1), e = e.times(n), d = !0, i.minus(e))
      }, O.naturalExponential = O.exp = function() {
        return B(this)
      }, O.naturalLogarithm = O.ln = function() {
        return V(this)
      }, O.negated = O.neg = function() {
        var n = new this.constructor(this);
        return n.s = -n.s, k(n)
      }, O.plus = O.add = function(n) {
        var e, i, t, r, s, o, u, c, f, a, l = this,
          h = l.constructor;
        if (n = new h(n), !l.d || !n.d) return l.s && n.s ? l.d || (n = new h(n.d || l.s === n.s ? l : NaN)) : n = new h(NaN), n;
        if (l.s != n.s) return n.s = -n.s, l.minus(n);
        if (f = l.d, a = n.d, u = h.precision, c = h.rounding, !f[0] || !a[0]) return a[0] || (n = new h(l)), d ? k(n, u, c) : n;
        if (s = m(l.e / 7), t = m(n.e / 7), f = f.slice(), r = s - t) {
          for (r < 0 ? (i = f, r = -r, o = a.length) : (i = a, t = s, o = f.length), r > (o = (s = Math.ceil(u / 7)) > o ? s + 1 : o + 1) && (r = o, i.length = 1), i.reverse(); r--;) i.push(0);
          i.reverse()
        }
        for ((o = f.length) - (r = a.length) < 0 && (r = o, i = a, a = f, f = i), e = 0; r;) e = (f[--r] = f[r] + a[r] + e) / x | 0, f[r] %= x;
        for (e && (f.unshift(e), ++t), o = f.length; 0 == f[--o];) f.pop();
        return n.d = f, n.e = Z(f, t), d ? k(n, u, c) : n
      }, O.precision = O.sd = function(n) {
        var e, i = this;
        if (void 0 !== n && n !== !!n && 1 !== n && 0 !== n) throw Error(h + n);
        return i.d ? (e = I(i.d), n && i.e + 1 > e && (e = i.e + 1)) : e = NaN, e
      }, O.round = function() {
        var n = this,
          e = n.constructor;
        return k(new e(n), n.e + 1, e.rounding)
      }, O.sine = O.sin = function() {
        var n, e, i = this,
          t = i.constructor;
        return i.isFinite() ? i.isZero() ? new t(i) : (n = t.precision, e = t.rounding, t.precision = n + Math.max(i.e, i.sd()) + 7, t.rounding = 1, i = function(n, e) {
          var i, t = e.d.length;
          if (t < 3) return e.isZero() ? e : J(n, 2, e, e);
          i = (i = 1.4 * Math.sqrt(t)) > 16 ? 16 : 0 | i, e = J(n, 2, e = e.times(1 / Y(5, i)), e);
          for (var r, s = new n(5), o = new n(16), u = new n(20); i--;) r = e.times(e), e = e.times(s.plus(r.times(o.times(r).minus(u))));
          return e
        }(t, z(t, i)), t.precision = n, t.rounding = e, k(r > 2 ? i.neg() : i, n, e, !0)) : new t(NaN)
      }, O.squareRoot = O.sqrt = function() {
        var n, e, i, t, r, s, o = this,
          u = o.d,
          c = o.e,
          f = o.s,
          a = o.constructor;
        if (1 !== f || !u || !u[0]) return new a(!f || f < 0 && (!u || u[0]) ? NaN : u ? o : 1 / 0);
        for (d = !1, 0 == (f = Math.sqrt(+o)) || f == 1 / 0 ? (((e = _(u)).length + c) % 2 == 0 && (e += "0"), f = Math.sqrt(e), c = m((c + 1) / 2) - (c < 0 || c % 2), t = new a(e = f == 1 / 0 ? "5e" + c : (e = f.toExponential()).slice(0, e.indexOf("e") + 1) + c)) : t = new a(f.toString()), i = (c = a.precision) + 3;;)
          if (t = (s = t).plus(F(o, s, i + 2, 1)).times(.5), _(s.d).slice(0, i) === (e = _(t.d)).slice(0, i)) {
            if ("9999" != (e = e.slice(i - 3, i + 1)) && (r || "4999" != e)) {
              +e && (+e.slice(1) || "5" != e.charAt(0)) || (k(t, c + 1, 1), n = !t.times(t).eq(o));
              break
            }
            if (!r && (k(s, c + 1, 0), s.times(s).eq(o))) {
              t = s;
              break
            }
            i += 4, r = 1
          } return d = !0, k(t, c, a.rounding, n)
      }, O.tangent = O.tan = function() {
        var n, e, i = this,
          t = i.constructor;
        return i.isFinite() ? i.isZero() ? new t(i) : (n = t.precision, e = t.rounding, t.precision = n + 10, t.rounding = 1, (i = i.sin()).s = 1, i = F(i, new t(1).minus(i.times(i)).sqrt(), n + 10, 0), t.precision = n, t.rounding = e, k(2 == r || 4 == r ? i.neg() : i, n, e, !0)) : new t(NaN)
      }, O.times = O.mul = function(n) {
        var e, i, t, r, s, o, u, c, f, a = this,
          l = a.constructor,
          h = a.d,
          g = (n = new l(n)).d;
        if (n.s *= a.s, !(h && h[0] && g && g[0])) return new l(!n.s || h && !h[0] && !g || g && !g[0] && !h ? NaN : h && g ? 0 * n.s : n.s / 0);
        for (i = m(a.e / 7) + m(n.e / 7), (c = h.length) < (f = g.length) && (s = h, h = g, g = s, o = c, c = f, f = o), s = [], t = o = c + f; t--;) s.push(0);
        for (t = f; --t >= 0;) {
          for (e = 0, r = c + t; r > t;) u = s[r] + g[t] * h[r - t - 1] + e, s[r--] = u % x | 0, e = u / x | 0;
          s[r] = (s[r] + e) % x | 0
        }
        for (; !s[--o];) s.pop();
        return e ? ++i : s.shift(), n.d = s, n.e = Z(s, i), d ? k(n, l.precision, l.rounding) : n
      }, O.toBinary = function(n, e) {
        return G(this, 2, n, e)
      }, O.toDecimalPlaces = O.toDP = function(n, e) {
        var i = this,
          t = i.constructor;
        return i = new t(i), void 0 === n ? i : (D(n, 0, o), void 0 === e ? e = t.rounding : D(e, 0, 8), k(i, n + i.e + 1, e))
      }, O.toExponential = function(n, e) {
        var i, t = this,
          r = t.constructor;
        return void 0 === n ? i = S(t, !0) : (D(n, 0, o), void 0 === e ? e = r.rounding : D(e, 0, 8), i = S(t = k(new r(t), n + 1, e), !0, n + 1)), t.isNeg() && !t.isZero() ? "-" + i : i
      }, O.toFixed = function(n, e) {
        var i, t, r = this,
          s = r.constructor;
        return void 0 === n ? i = S(r) : (D(n, 0, o), void 0 === e ? e = s.rounding : D(e, 0, 8), i = S(t = k(new s(r), n + r.e + 1, e), !1, n + t.e + 1)), r.isNeg() && !r.isZero() ? "-" + i : i
      }, O.toFraction = function(n) {
        var e, i, t, r, s, o, u, c, f, a, l, g, p = this,
          w = p.d,
          m = p.constructor;
        if (!w) return new m(p);
        if (f = i = new m(1), t = c = new m(0), o = (s = (e = new m(t)).e = I(w) - p.e - 1) % 7, e.d[0] = v(10, o < 0 ? 7 + o : o), null == n) n = s > 0 ? e : f;
        else {
          if (!(u = new m(n)).isInt() || u.lt(f)) throw Error(h + u);
          n = u.gt(e) ? s > 0 ? e : f : u
        }
        for (d = !1, u = new m(_(w)), a = m.precision, m.precision = s = 7 * w.length * 2; l = F(u, e, 0, 1, 1), 1 != (r = i.plus(l.times(t))).cmp(n);) i = t, t = r, r = f, f = c.plus(l.times(r)), c = r, r = e, e = u.minus(l.times(r)), u = r;
        return r = F(n.minus(i), t, 0, 1, 1), c = c.plus(r.times(f)), i = i.plus(r.times(t)), c.s = f.s = p.s, g = F(f, t, s, 1).minus(p).abs().cmp(F(c, i, s, 1).minus(p).abs()) < 1 ? [f, t] : [c, i], m.precision = a, d = !0, g
      }, O.toHexadecimal = O.toHex = function(n, e) {
        return G(this, 16, n, e)
      }, O.toNearest = function(n, e) {
        var i = this,
          t = i.constructor;
        if (i = new t(i), null == n) {
          if (!i.d) return i;
          n = new t(1), e = t.rounding
        } else {
          if (n = new t(n), void 0 === e ? e = t.rounding : D(e, 0, 8), !i.d) return n.s ? i : n;
          if (!n.d) return n.s && (n.s = i.s), n
        }
        return n.d[0] ? (d = !1, i = F(i, n, 0, e, 1).times(n), d = !0, k(i)) : (n.s = i.s, i = n), i
      }, O.toNumber = function() {
        return +this
      }, O.toOctal = function(n, e) {
        return G(this, 8, n, e)
      }, O.toPower = O.pow = function(n) {
        var e, i, t, r, s, o, u = this,
          c = u.constructor,
          f = +(n = new c(n));
        if (!(u.d && n.d && u.d[0] && n.d[0])) return new c(v(+u, f));
        if ((u = new c(u)).eq(1)) return u;
        if (t = c.precision, s = c.rounding, n.eq(1)) return k(u, t, s);
        if ((e = m(n.e / 7)) >= n.d.length - 1 && (i = f < 0 ? -f : f) <= 9007199254740991) return r = U(c, u, i, t), n.s < 0 ? new c(1).div(r) : k(r, t, s);
        if ((o = u.s) < 0) {
          if (e < n.d.length - 1) return new c(NaN);
          if (1 & n.d[e] || (o = 1), 0 == u.e && 1 == u.d[0] && 1 == u.d.length) return u.s = o, u
        }
        return (e = 0 != (i = v(+u, f)) && isFinite(i) ? new c(i + "").e : m(f * (Math.log("0." + _(u.d)) / Math.LN10 + u.e + 1))) > c.maxE + 1 || e < c.minE - 1 ? new c(e > 0 ? o / 0 : 0) : (d = !1, c.rounding = u.s = 1, i = Math.min(12, (e + "").length), (r = B(n.times(V(u, t + i)), t)).d && T((r = k(r, t + 5, 1)).d, t, s) && (e = t + 10, +_((r = k(B(n.times(V(u, e + i)), e), e + 5, 1)).d).slice(t + 1, t + 15) + 1 == 1e14 && (r = k(r, t + 1, 0))), r.s = o, d = !0, c.rounding = s, k(r, t, s))
      }, O.toPrecision = function(n, e) {
        var i, t = this,
          r = t.constructor;
        return void 0 === n ? i = S(t, t.e <= r.toExpNeg || t.e >= r.toExpPos) : (D(n, 1, o), void 0 === e ? e = r.rounding : D(e, 0, 8), i = S(t = k(new r(t), n, e), n <= t.e || t.e <= r.toExpNeg, n)), t.isNeg() && !t.isZero() ? "-" + i : i
      }, O.toSignificantDigits = O.toSD = function(n, e) {
        var i = this.constructor;
        return void 0 === n ? (n = i.precision, e = i.rounding) : (D(n, 1, o), void 0 === e ? e = i.rounding : D(e, 0, 8)), k(new i(this), n, e)
      }, O.toString = function() {
        var n = this,
          e = n.constructor,
          i = S(n, n.e <= e.toExpNeg || n.e >= e.toExpPos);
        return n.isNeg() && !n.isZero() ? "-" + i : i
      }, O.truncated = O.trunc = function() {
        return k(new this.constructor(this), this.e + 1, 1)
      }, O.valueOf = O.toJSON = function() {
        var n = this,
          e = n.constructor,
          i = S(n, n.e <= e.toExpNeg || n.e >= e.toExpPos);
        return n.isNeg() ? "-" + i : i
      };
      var F = function() {
        function n(n, e, i) {
          var t, r = 0,
            s = n.length;
          for (n = n.slice(); s--;) t = n[s] * e + r, n[s] = t % i | 0, r = t / i | 0;
          return r && n.unshift(r), n
        }

        function e(n, e, i, t) {
          var r, s;
          if (i != t) s = i > t ? 1 : -1;
          else
            for (r = s = 0; r < i; r++)
              if (n[r] != e[r]) {
                s = n[r] > e[r] ? 1 : -1;
                break
              } return s
        }

        function i(n, e, i, t) {
          for (var r = 0; i--;) n[i] -= r, r = n[i] < e[i] ? 1 : 0, n[i] = r * t + n[i] - e[i];
          for (; !n[0] && n.length > 1;) n.shift()
        }
        return function(r, s, o, u, c, f) {
          var a, d, l, h, g, p, w, v, N, b, y, E, M, q, O, _, D, T, A, F, S = r.constructor,
            Z = r.s == s.s ? 1 : -1,
            R = r.d,
            P = s.d;
          if (!(R && R[0] && P && P[0])) return new S(r.s && s.s && (R ? !P || R[0] != P[0] : P) ? R && 0 == R[0] || !P ? 0 * Z : Z / 0 : NaN);
          for (f ? (g = 1, d = r.e - s.e) : (f = x, g = 7, d = m(r.e / g) - m(s.e / g)), A = P.length, D = R.length, b = (N = new S(Z)).d = [], l = 0; P[l] == (R[l] || 0); l++);
          if (P[l] > (R[l] || 0) && d--, null == o ? (q = o = S.precision, u = S.rounding) : q = c ? o + (r.e - s.e) + 1 : o, q < 0) b.push(1), p = !0;
          else {
            if (q = q / g + 2 | 0, l = 0, 1 == A) {
              for (h = 0, P = P[0], q++;
                (l < D || h) && q--; l++) O = h * f + (R[l] || 0), b[l] = O / P | 0, h = O % P | 0;
              p = h || l < D
            } else {
              for ((h = f / (P[0] + 1) | 0) > 1 && (P = n(P, h, f), R = n(R, h, f), A = P.length, D = R.length), _ = A, E = (y = R.slice(0, A)).length; E < A;) y[E++] = 0;
              (F = P.slice()).unshift(0), T = P[0], P[1] >= f / 2 && ++T;
              do {
                h = 0, (a = e(P, y, A, E)) < 0 ? (M = y[0], A != E && (M = M * f + (y[1] || 0)), (h = M / T | 0) > 1 ? (h >= f && (h = f - 1), 1 == (a = e(w = n(P, h, f), y, v = w.length, E = y.length)) && (h--, i(w, A < v ? F : P, v, f))) : (0 == h && (a = h = 1), w = P.slice()), (v = w.length) < E && w.unshift(0), i(y, w, E, f), -1 == a && (a = e(P, y, A, E = y.length)) < 1 && (h++, i(y, A < E ? F : P, E, f)), E = y.length) : 0 === a && (h++, y = [0]), b[l++] = h, a && y[0] ? y[E++] = R[_] || 0 : (y = [R[_]], E = 1)
              } while ((_++ < D || void 0 !== y[0]) && q--);
              p = void 0 !== y[0]
            }
            b[0] || b.shift()
          }
          if (1 == g) N.e = d, t = p;
          else {
            for (l = 1, h = b[0]; h >= 10; h /= 10) l++;
            N.e = l + d * g - 1, k(N, c ? o + N.e + 1 : o, u, p)
          }
          return N
        }
      }();

      function k(n, e, i, t) {
        var r, s, o, u, c, f, a, l, h, g = n.constructor;
        n: if (null != e) {
          if (!(l = n.d)) return n;
          for (r = 1, u = l[0]; u >= 10; u /= 10) r++;
          if ((s = e - r) < 0) s += 7, o = e, c = (a = l[h = 0]) / v(10, r - o - 1) % 10 | 0;
          else if ((h = Math.ceil((s + 1) / 7)) >= (u = l.length)) {
            if (!t) break n;
            for (; u++ <= h;) l.push(0);
            a = c = 0, r = 1, o = (s %= 7) - 7 + 1
          } else {
            for (a = u = l[h], r = 1; u >= 10; u /= 10) r++;
            c = (o = (s %= 7) - 7 + r) < 0 ? 0 : a / v(10, r - o - 1) % 10 | 0
          }
          if (t = t || e < 0 || void 0 !== l[h + 1] || (o < 0 ? a : a % v(10, r - o - 1)), f = i < 4 ? (c || t) && (0 == i || i == (n.s < 0 ? 3 : 2)) : c > 5 || 5 == c && (4 == i || t || 6 == i && (s > 0 ? o > 0 ? a / v(10, r - o) : 0 : l[h - 1]) % 10 & 1 || i == (n.s < 0 ? 8 : 7)), e < 1 || !l[0]) return l.length = 0, f ? (e -= n.e + 1, l[0] = v(10, (7 - e % 7) % 7), n.e = -e || 0) : l[0] = n.e = 0, n;
          if (0 == s ? (l.length = h, u = 1, h--) : (l.length = h + 1, u = v(10, 7 - s), l[h] = o > 0 ? (a / v(10, r - o) % v(10, o) | 0) * u : 0), f)
            for (;;) {
              if (0 == h) {
                for (s = 1, o = l[0]; o >= 10; o /= 10) s++;
                for (o = l[0] += u, u = 1; o >= 10; o /= 10) u++;
                s != u && (n.e++, l[0] == x && (l[0] = 1));
                break
              }
              if (l[h] += u, l[h] != x) break;
              l[h--] = 0, u = 1
            }
          for (s = l.length; 0 === l[--s];) l.pop()
        }
        return d && (n.e > g.maxE ? (n.d = null, n.e = NaN) : n.e < g.minE && (n.e = 0, n.d = [0])), n
      }

      function S(n, e, i) {
        if (!n.isFinite()) return j(n);
        var t, r = n.e,
          s = _(n.d),
          o = s.length;
        return e ? (i && (t = i - o) > 0 ? s = s.charAt(0) + "." + s.slice(1) + L(t) : o > 1 && (s = s.charAt(0) + "." + s.slice(1)), s = s + (n.e < 0 ? "e" : "e+") + n.e) : r < 0 ? (s = "0." + L(-r - 1) + s, i && (t = i - o) > 0 && (s += L(t))) : r >= o ? (s += L(r + 1 - o), i && (t = i - r - 1) > 0 && (s = s + "." + L(t))) : ((t = r + 1) < o && (s = s.slice(0, t) + "." + s.slice(t)), i && (t = i - o) > 0 && (r + 1 === o && (s += "."), s += L(t))), s
      }

      function Z(n, e) {
        var i = n[0];
        for (e *= 7; i >= 10; i /= 10) e++;
        return e
      }

      function R(n, e, i) {
        if (e > M) throw d = !0, i && (n.precision = i), Error(g);
        return k(new n(c), e, 1, !0)
      }

      function P(n, e, i) {
        if (e > q) throw Error(g);
        return k(new n(f), e, i, !0)
      }

      function I(n) {
        var e = n.length - 1,
          i = 7 * e + 1;
        if (e = n[e]) {
          for (; e % 10 == 0; e /= 10) i--;
          for (e = n[0]; e >= 10; e /= 10) i++
        }
        return i
      }

      function L(n) {
        for (var e = ""; n--;) e += "0";
        return e
      }

      function U(n, e, i, t) {
        var r, s = new n(1),
          o = Math.ceil(t / 7 + 4);
        for (d = !1;;) {
          if (i % 2 && K((s = s.times(e)).d, o) && (r = !0), 0 === (i = m(i / 2))) {
            i = s.d.length - 1, r && 0 === s.d[i] && ++s.d[i];
            break
          }
          K((e = e.times(e)).d, o)
        }
        return d = !0, s
      }

      function C(n) {
        return 1 & n.d[n.d.length - 1]
      }

      function H(n, e, i) {
        for (var t, r, s = new n(e[0]), o = 0; ++o < e.length;) {
          if (!(r = new n(e[o])).s) {
            s = r;
            break
          }((t = s.cmp(r)) === i || 0 === t && s.s === i) && (s = r)
        }
        return s
      }

      function B(n, e) {
        var i, t, r, s, o, u, c, f = 0,
          a = 0,
          l = 0,
          h = n.constructor,
          g = h.rounding,
          p = h.precision;
        if (!n.d || !n.d[0] || n.e > 17) return new h(n.d ? n.d[0] ? n.s < 0 ? 0 : 1 / 0 : 1 : n.s ? n.s < 0 ? 0 : n : NaN);
        for (null == e ? (d = !1, c = p) : c = e, u = new h(.03125); n.e > -2;) n = n.times(u), l += 5;
        for (c += t = Math.log(v(2, l)) / Math.LN10 * 2 + 5 | 0, i = s = o = new h(1), h.precision = c;;) {
          if (s = k(s.times(n), c, 1), i = i.times(++a), _((u = o.plus(F(s, i, c, 1))).d).slice(0, c) === _(o.d).slice(0, c)) {
            for (r = l; r--;) o = k(o.times(o), c, 1);
            if (null != e) return h.precision = p, o;
            if (!(f < 3 && T(o.d, c - t, g, f))) return k(o, h.precision = p, g, d = !0);
            h.precision = c += 10, i = s = u = new h(1), a = 0, f++
          }
          o = u
        }
      }

      function V(n, e) {
        var i, t, r, s, o, u, c, f, a, l, h, g = 1,
          p = n,
          w = p.d,
          m = p.constructor,
          v = m.rounding,
          N = m.precision;
        if (p.s < 0 || !w || !w[0] || !p.e && 1 == w[0] && 1 == w.length) return new m(w && !w[0] ? -1 / 0 : 1 != p.s ? NaN : w ? 0 : p);
        if (null == e ? (d = !1, a = N) : a = e, m.precision = a += 10, t = (i = _(w)).charAt(0), !(Math.abs(s = p.e) < 15e14)) return f = R(m, a + 2, N).times(s + ""), p = V(new m(t + "." + i.slice(1)), a - 10).plus(f), m.precision = N, null == e ? k(p, N, v, d = !0) : p;
        for (; t < 7 && 1 != t || 1 == t && i.charAt(1) > 3;) t = (i = _((p = p.times(n)).d)).charAt(0), g++;
        for (s = p.e, t > 1 ? (p = new m("0." + i), s++) : p = new m(t + "." + i.slice(1)), l = p, c = o = p = F(p.minus(1), p.plus(1), a, 1), h = k(p.times(p), a, 1), r = 3;;) {
          if (o = k(o.times(h), a, 1), _((f = c.plus(F(o, new m(r), a, 1))).d).slice(0, a) === _(c.d).slice(0, a)) {
            if (c = c.times(2), 0 !== s && (c = c.plus(R(m, a + 2, N).times(s + ""))), c = F(c, new m(g), a, 1), null != e) return m.precision = N, c;
            if (!T(c.d, a - 10, v, u)) return k(c, m.precision = N, v, d = !0);
            m.precision = a += 10, f = o = p = F(l.minus(1), l.plus(1), a, 1), h = k(p.times(p), a, 1), r = u = 1
          }
          c = f, r += 2
        }
      }

      function j(n) {
        return String(n.s * n.s / 0)
      }

      function $(n, e) {
        var i, t, r;
        for ((i = e.indexOf(".")) > -1 && (e = e.replace(".", "")), (t = e.search(/e/i)) > 0 ? (i < 0 && (i = t), i += +e.slice(t + 1), e = e.substring(0, t)) : i < 0 && (i = e.length), t = 0; 48 === e.charCodeAt(t); t++);
        for (r = e.length; 48 === e.charCodeAt(r - 1); --r);
        if (e = e.slice(t, r)) {
          if (r -= t, n.e = i = i - t - 1, n.d = [], t = (i + 1) % 7, i < 0 && (t += 7), t < r) {
            for (t && n.d.push(+e.slice(0, t)), r -= 7; t < r;) n.d.push(+e.slice(t, t += 7));
            t = 7 - (e = e.slice(t)).length
          } else t -= r;
          for (; t--;) e += "0";
          n.d.push(+e), d && (n.e > n.constructor.maxE ? (n.d = null, n.e = NaN) : n.e < n.constructor.minE && (n.e = 0, n.d = [0]))
        } else n.e = 0, n.d = [0];
        return n
      }

      function W(n, e) {
        var i, t, r, s, o, u, c, f, a;
        if (e.indexOf("_") > -1) {
          if (e = e.replace(/(\d)_(?=\d)/g, "$1"), E.test(e)) return $(n, e)
        } else if ("Infinity" === e || "NaN" === e) return +e || (n.s = NaN), n.e = NaN, n.d = null, n;
        if (b.test(e)) i = 16, e = e.toLowerCase();
        else if (N.test(e)) i = 2;
        else {
          if (!y.test(e)) throw Error(h + e);
          i = 8
        }
        for ((s = e.search(/p/i)) > 0 ? (c = +e.slice(s + 1), e = e.substring(2, s)) : e = e.slice(2), o = (s = e.indexOf(".")) >= 0, t = n.constructor, o && (s = (u = (e = e.replace(".", "")).length) - s, r = U(t, new t(i), s, 2 * s)), s = a = (f = A(e, i, x)).length - 1; 0 === f[s]; --s) f.pop();
        return s < 0 ? new t(0 * n.s) : (n.e = Z(f, a), n.d = f, d = !1, o && (n = F(n, r, 4 * u)), c && (n = n.times(Math.abs(c) < 54 ? v(2, c) : Un.pow(2, c))), d = !0, n)
      }

      function J(n, e, i, t, r) {
        var s, o, u, c, f = n.precision,
          a = Math.ceil(f / 7);
        for (d = !1, c = i.times(i), u = new n(t);;) {
          if (o = F(u.times(c), new n(e++ * e++), f, 1), u = r ? t.plus(o) : t.minus(o), t = F(o.times(c), new n(e++ * e++), f, 1), void 0 !== (o = u.plus(t)).d[a]) {
            for (s = a; o.d[s] === u.d[s] && s--;);
            if (-1 == s) break
          }
          s = u, u = t, t = o, o = s
        }
        return d = !0, o.d.length = a + 1, o
      }

      function Y(n, e) {
        for (var i = n; --e;) i *= n;
        return i
      }

      function z(n, e) {
        var i, t = e.s < 0,
          s = P(n, n.precision, 1),
          o = s.times(.5);
        if ((e = e.abs()).lte(o)) return r = t ? 4 : 1, e;
        if ((i = e.divToInt(s)).isZero()) r = t ? 3 : 2;
        else {
          if ((e = e.minus(i.times(s))).lte(o)) return r = C(i) ? t ? 2 : 3 : t ? 4 : 1, e;
          r = C(i) ? t ? 1 : 4 : t ? 3 : 2
        }
        return e.minus(s).abs()
      }

      function G(n, e, i, r) {
        var s, c, f, a, d, l, h, g, p, w = n.constructor,
          m = void 0 !== i;
        if (m ? (D(i, 1, o), void 0 === r ? r = w.rounding : D(r, 0, 8)) : (i = w.precision, r = w.rounding), n.isFinite()) {
          for (m ? (s = 2, 16 == e ? i = 4 * i - 3 : 8 == e && (i = 3 * i - 2)) : s = e, (f = (h = S(n)).indexOf(".")) >= 0 && (h = h.replace(".", ""), (p = new w(1)).e = h.length - f, p.d = A(S(p), 10, s), p.e = p.d.length), c = d = (g = A(h, 10, s)).length; 0 == g[--d];) g.pop();
          if (g[0]) {
            if (f < 0 ? c-- : ((n = new w(n)).d = g, n.e = c, g = (n = F(n, p, i, r, 0, s)).d, c = n.e, l = t), f = g[i], a = s / 2, l = l || void 0 !== g[i + 1], l = r < 4 ? (void 0 !== f || l) && (0 === r || r === (n.s < 0 ? 3 : 2)) : f > a || f === a && (4 === r || l || 6 === r && 1 & g[i - 1] || r === (n.s < 0 ? 8 : 7)), g.length = i, l)
              for (; ++g[--i] > s - 1;) g[i] = 0, i || (++c, g.unshift(1));
            for (d = g.length; !g[d - 1]; --d);
            for (f = 0, h = ""; f < d; f++) h += u.charAt(g[f]);
            if (m) {
              if (d > 1)
                if (16 == e || 8 == e) {
                  for (f = 16 == e ? 4 : 3, --d; d % f; d++) h += "0";
                  for (d = (g = A(h, s, e)).length; !g[d - 1]; --d);
                  for (f = 1, h = "1."; f < d; f++) h += u.charAt(g[f])
                } else h = h.charAt(0) + "." + h.slice(1);
              h = h + (c < 0 ? "p" : "p+") + c
            } else if (c < 0) {
              for (; ++c;) h = "0" + h;
              h = "0." + h
            } else if (++c > d)
              for (c -= d; c--;) h += "0";
            else c < d && (h = h.slice(0, c) + "." + h.slice(c))
          } else h = m ? "0p+0" : "0";
          h = (16 == e ? "0x" : 2 == e ? "0b" : 8 == e ? "0o" : "") + h
        } else h = j(n);
        return n.s < 0 ? "-" + h : h
      }

      function K(n, e) {
        if (n.length > e) return n.length = e, !0
      }

      function Q(n) {
        return new this(n).abs()
      }

      function X(n) {
        return new this(n).acos()
      }

      function nn(n) {
        return new this(n).acosh()
      }

      function en(n, e) {
        return new this(n).plus(e)
      }

      function tn(n) {
        return new this(n).asin()
      }

      function rn(n) {
        return new this(n).asinh()
      }

      function sn(n) {
        return new this(n).atan()
      }

      function on(n) {
        return new this(n).atanh()
      }

      function un(n, e) {
        n = new this(n), e = new this(e);
        var i, t = this.precision,
          r = this.rounding,
          s = t + 4;
        return n.s && e.s ? n.d || e.d ? !e.d || n.isZero() ? (i = e.s < 0 ? P(this, t, r) : new this(0)).s = n.s : !n.d || e.isZero() ? (i = P(this, s, 1).times(.5)).s = n.s : e.s < 0 ? (this.precision = s, this.rounding = 1, i = this.atan(F(n, e, s, 1)), e = P(this, s, 1), this.precision = t, this.rounding = r, i = n.s < 0 ? i.minus(e) : i.plus(e)) : i = this.atan(F(n, e, s, 1)) : (i = P(this, s, 1).times(e.s > 0 ? .25 : .75)).s = n.s : i = new this(NaN), i
      }

      function cn(n) {
        return new this(n).cbrt()
      }

      function fn(n) {
        return k(n = new this(n), n.e + 1, 2)
      }

      function an(n, e, i) {
        return new this(n).clamp(e, i)
      }

      function dn(n) {
        if (!n || "object" != typeof n) throw Error(l + "Object expected");
        var e, i, t, r = !0 === n.defaults,
          u = ["precision", 1, o, "rounding", 0, 8, "toExpNeg", -s, 0, "toExpPos", 0, s, "maxE", 0, s, "minE", -s, 0, "modulo", 0, 9];
        for (e = 0; e < u.length; e += 3)
          if (i = u[e], r && (this[i] = a[i]), void 0 !== (t = n[i])) {
            if (!(m(t) === t && t >= u[e + 1] && t <= u[e + 2])) throw Error(h + i + ": " + t);
            this[i] = t
          } if (i = "crypto", r && (this[i] = a[i]), void 0 !== (t = n[i])) {
          if (!0 !== t && !1 !== t && 0 !== t && 1 !== t) throw Error(h + i + ": " + t);
          if (t) {
            if ("undefined" == typeof crypto || !crypto || !crypto.getRandomValues && !crypto.randomBytes) throw Error(p);
            this[i] = !0
          } else this[i] = !1
        }
        return this
      }

      function ln(n) {
        return new this(n).cos()
      }

      function hn(n) {
        return new this(n).cosh()
      }

      function gn(n, e) {
        return new this(n).div(e)
      }

      function pn(n) {
        return new this(n).exp()
      }

      function wn(n) {
        return k(n = new this(n), n.e + 1, 3)
      }

      function mn() {
        var n, e, i = new this(0);
        for (d = !1, n = 0; n < arguments.length;)
          if ((e = new this(arguments[n++])).d) i.d && (i = i.plus(e.times(e)));
          else {
            if (e.s) return d = !0, new this(1 / 0);
            i = e
          } return d = !0, i.sqrt()
      }

      function vn(n) {
        return n instanceof Un || n && n.toStringTag === w || !1
      }

      function Nn(n) {
        return new this(n).ln()
      }

      function bn(n, e) {
        return new this(n).log(e)
      }

      function yn(n) {
        return new this(n).log(2)
      }

      function En(n) {
        return new this(n).log(10)
      }

      function xn() {
        return H(this, arguments, -1)
      }

      function Mn() {
        return H(this, arguments, 1)
      }

      function qn(n, e) {
        return new this(n).mod(e)
      }

      function On(n, e) {
        return new this(n).mul(e)
      }

      function _n(n, e) {
        return new this(n).pow(e)
      }

      function Dn(n) {
        var e, i, t, r, s = 0,
          u = new this(1),
          c = [];
        if (void 0 === n ? n = this.precision : D(n, 1, o), t = Math.ceil(n / 7), this.crypto)
          if (crypto.getRandomValues)
            for (e = crypto.getRandomValues(new Uint32Array(t)); s < t;)(r = e[s]) >= 429e7 ? e[s] = crypto.getRandomValues(new Uint32Array(1))[0] : c[s++] = r % 1e7;
          else {
            if (!crypto.randomBytes) throw Error(p);
            for (e = crypto.randomBytes(t *= 4); s < t;)(r = e[s] + (e[s + 1] << 8) + (e[s + 2] << 16) + ((127 & e[s + 3]) << 24)) >= 214e7 ? crypto.randomBytes(4).copy(e, s) : (c.push(r % 1e7), s += 4);
            s = t / 4
          }
        else
          for (; s < t;) c[s++] = 1e7 * Math.random() | 0;
        for (n %= 7, (t = c[--s]) && n && (r = v(10, 7 - n), c[s] = (t / r | 0) * r); 0 === c[s]; s--) c.pop();
        if (s < 0) i = 0, c = [0];
        else {
          for (i = -1; 0 === c[0]; i -= 7) c.shift();
          for (t = 1, r = c[0]; r >= 10; r /= 10) t++;
          t < 7 && (i -= 7 - t)
        }
        return u.e = i, u.d = c, u
      }

      function Tn(n) {
        return k(n = new this(n), n.e + 1, this.rounding)
      }

      function An(n) {
        return (n = new this(n)).d ? n.d[0] ? n.s : 0 * n.s : n.s || NaN
      }

      function Fn(n) {
        return new this(n).sin()
      }

      function kn(n) {
        return new this(n).sinh()
      }

      function Sn(n) {
        return new this(n).sqrt()
      }

      function Zn(n, e) {
        return new this(n).sub(e)
      }

      function Rn() {
        var n = 0,
          e = arguments,
          i = new this(e[n]);
        for (d = !1; i.s && ++n < e.length;) i = i.plus(e[n]);
        return d = !0, k(i, this.precision, this.rounding)
      }

      function Pn(n) {
        return new this(n).tan()
      }

      function In(n) {
        return new this(n).tanh()
      }

      function Ln(n) {
        return k(n = new this(n), n.e + 1, 1)
      }
      O[Symbol.for("nodejs.util.inspect.custom")] = O.toString, O[Symbol.toStringTag] = "Decimal";
      var Un = O.constructor = function n(e) {
        var i, t, r;

        function s(n) {
          var e, i, t, r = this;
          if (!(r instanceof s)) return new s(n);
          if (r.constructor = s, vn(n)) return r.s = n.s, void(d ? !n.d || n.e > s.maxE ? (r.e = NaN, r.d = null) : n.e < s.minE ? (r.e = 0, r.d = [0]) : (r.e = n.e, r.d = n.d.slice()) : (r.e = n.e, r.d = n.d ? n.d.slice() : n.d));
          if ("number" == (t = typeof n)) {
            if (0 === n) return r.s = 1 / n < 0 ? -1 : 1, r.e = 0, void(r.d = [0]);
            if (n < 0 ? (n = -n, r.s = -1) : r.s = 1, n === ~~n && n < 1e7) {
              for (e = 0, i = n; i >= 10; i /= 10) e++;
              return void(d ? e > s.maxE ? (r.e = NaN, r.d = null) : e < s.minE ? (r.e = 0, r.d = [0]) : (r.e = e, r.d = [n]) : (r.e = e, r.d = [n]))
            }
            return 0 * n != 0 ? (n || (r.s = NaN), r.e = NaN, void(r.d = null)) : $(r, n.toString())
          }
          if ("string" === t) return 45 === (i = n.charCodeAt(0)) ? (n = n.slice(1), r.s = -1) : (43 === i && (n = n.slice(1)), r.s = 1), E.test(n) ? $(r, n) : W(r, n);
          if ("bigint" === t) return n < 0 ? (n = -n, r.s = -1) : r.s = 1, $(r, n.toString());
          throw Error(h + n)
        }
        if (s.prototype = O, s.ROUND_UP = 0, s.ROUND_DOWN = 1, s.ROUND_CEIL = 2, s.ROUND_FLOOR = 3, s.ROUND_HALF_UP = 4, s.ROUND_HALF_DOWN = 5, s.ROUND_HALF_EVEN = 6, s.ROUND_HALF_CEIL = 7, s.ROUND_HALF_FLOOR = 8, s.EUCLID = 9, s.config = s.set = dn, s.clone = n, s.isDecimal = vn, s.abs = Q, s.acos = X, s.acosh = nn, s.add = en, s.asin = tn, s.asinh = rn, s.atan = sn, s.atanh = on, s.atan2 = un, s.cbrt = cn, s.ceil = fn, s.clamp = an, s.cos = ln, s.cosh = hn, s.div = gn, s.exp = pn, s.floor = wn, s.hypot = mn, s.ln = Nn, s.log = bn, s.log10 = En, s.log2 = yn, s.max = xn, s.min = Mn, s.mod = qn, s.mul = On, s.pow = _n, s.random = Dn, s.round = Tn, s.sign = An, s.sin = Fn, s.sinh = kn, s.sqrt = Sn, s.sub = Zn, s.sum = Rn, s.tan = Pn, s.tanh = In, s.trunc = Ln, void 0 === e && (e = {}), e && !0 !== e.defaults)
          for (r = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], i = 0; i < r.length;) e.hasOwnProperty(t = r[i++]) || (e[t] = this[t]);
        return s.config(e), s
      }(a);
      c = new Un(c), f = new Un(f);
      const Cn = Un
    }
  }
]);