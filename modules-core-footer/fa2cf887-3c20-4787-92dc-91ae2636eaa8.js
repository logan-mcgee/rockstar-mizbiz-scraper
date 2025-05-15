! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      n = (new e.Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "fa2cf887-3c20-4787-92dc-91ae2636eaa8", e._sentryDebugIdIdentifier = "sentry-dbid-fa2cf887-3c20-4787-92dc-91ae2636eaa8")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-footer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_footer = self.webpackChunk_rockstargames_modules_core_footer || []).push([
  [4480], {
    64480: (e, n, r) => {
      function t(e) {
        return Intl.getCanonicalLocales(e)
      }

      function i(e, n) {
        var r = n.zoneNames,
          t = n.uppercaseLinks,
          i = e.toUpperCase(),
          u = r.reduce((function(e, n) {
            return e[n.toUpperCase()] = n, e
          }), {}),
          o = t[i] || u[i];
        return "Etc/UTC" === o || "Etc/GMT" === o ? "UTC" : o
      }
      r.r(n), r.d(n, {
        ApplyUnsignedRoundingMode: () => er,
        ArrayCreate: () => dn,
        CanonicalizeLocaleList: () => t,
        CanonicalizeTimeZoneName: () => i,
        CoerceOptionsToObject: () => qn,
        CollapseNumberRange: () => rr,
        ComputeExponent: () => fr,
        ComputeExponentForMagnitude: () => tr,
        CurrencyDigits: () => dr,
        DateFromTime: () => Sn,
        Day: () => vn,
        DayFromYear: () => Dn,
        DayWithinYear: () => En,
        DaysInYear: () => Fn,
        FormatApproximately: () => Fr,
        FormatNumeric: () => Nr,
        FormatNumericRange: () => Sr,
        FormatNumericRangeToParts: () => xr,
        FormatNumericToParts: () => Tr,
        FormatNumericToString: () => lr,
        GetNumberOption: () => Un,
        GetOption: () => zn,
        GetOptionsObject: () => Gn,
        GetStringOrBooleanOption: () => Hn,
        GetUnsignedRoundingMode: () => or,
        HasOwnProperty: () => gn,
        HourFromTime: () => Bn,
        InLeapYear: () => Nn,
        InitializeNumberFormat: () => kr,
        IsSanctionedSimpleUnitIdentifier: () => Yn,
        IsValidTimeZoneName: () => Jn,
        IsWellFormedCurrencyCode: () => Qn,
        IsWellFormedUnitIdentifier: () => Xn,
        MinFromTime: () => Pn,
        MonthFromTime: () => Cn,
        OrdinaryHasInstance: () => jn,
        PartitionNumberPattern: () => Er,
        PartitionNumberRangePattern: () => Cr,
        PartitionPattern: () => _r,
        RangePatternType: () => Ar,
        SANCTIONED_UNITS: () => Wn,
        SIMPLE_UNITS: () => $n,
        SameValue: () => fn,
        SecFromTime: () => kn,
        SetNumberFormatDigitOptions: () => Br,
        SetNumberFormatUnitOptions: () => Pr,
        SupportedLocales: () => jr,
        TimeClip: () => cn,
        TimeFromYear: () => bn,
        ToIntlMathematicalValue: () => Lr,
        ToNumber: () => an,
        ToObject: () => ln,
        ToPrimitive: () => Ln,
        ToRawFixed: () => ar,
        ToRawPrecision: () => cr,
        ToString: () => sn,
        Type: () => mn,
        WeekDay: () => yn,
        YearFromTime: () => wn,
        ZERO: () => Ue,
        _formatToParts: () => yr,
        createDataProperty: () => Xe,
        createMemoizedDateTimeFormat: () => rn,
        createMemoizedListFormat: () => on,
        createMemoizedLocale: () => un,
        createMemoizedNumberFormat: () => nn,
        createMemoizedPluralRules: () => tn,
        defineProperty: () => Qe,
        getInternalSlot: () => Ye,
        getMultiInternalSlots: () => Je,
        invariant: () => en,
        isLiteralPart: () => Ke,
        isMissingLocaleDataError: () => Rr,
        msFromTime: () => Rn,
        removeUnitNamespace: () => Vn,
        setInternalSlot: () => Ve,
        setMultiInternalSlots: () => $e
      });
      var u, o, s = 9e15,
        a = 1e9,
        c = "0123456789abcdef",
        l = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",
        f = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",
        d = {
          precision: 20,
          rounding: 4,
          modulo: 1,
          toExpNeg: -7,
          toExpPos: 21,
          minE: -s,
          maxE: s,
          crypto: !1
        },
        g = !0,
        m = "[DecimalError] ",
        p = m + "Invalid argument: ",
        h = m + "Precision limit exceeded",
        v = m + "crypto unavailable",
        y = "[object Decimal]",
        D = Math.floor,
        b = Math.pow,
        w = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
        F = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
        E = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
        N = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
        C = 1e7,
        S = l.length - 1,
        x = f.length - 1,
        T = {
          toStringTag: y
        };

      function A(e) {
        var n, r, t, i = e.length - 1,
          u = "",
          o = e[0];
        if (i > 0) {
          for (u += o, n = 1; n < i; n++)(r = 7 - (t = e[n] + "").length) && (u += q(r)), u += t;
          (r = 7 - (t = (o = e[n]) + "").length) && (u += q(r))
        } else if (0 === o) return "0";
        for (; o % 10 == 0;) o /= 10;
        return u + o
      }

      function M(e, n, r) {
        if (e !== ~~e || e < n || e > r) throw Error(p + e)
      }

      function I(e, n, r, t) {
        var i, u, o, s;
        for (u = e[0]; u >= 10; u /= 10) --n;
        return --n < 0 ? (n += 7, i = 0) : (i = Math.ceil((n + 1) / 7), n %= 7), u = b(10, 7 - n), s = e[i] % u | 0, null == t ? n < 3 ? (0 == n ? s = s / 100 | 0 : 1 == n && (s = s / 10 | 0), o = r < 4 && 99999 == s || r > 3 && 49999 == s || 5e4 == s || 0 == s) : o = (r < 4 && s + 1 == u || r > 3 && s + 1 == u / 2) && (e[i + 1] / u / 100 | 0) == b(10, n - 2) - 1 || (s == u / 2 || 0 == s) && !(e[i + 1] / u / 100 | 0) : n < 4 ? (0 == n ? s = s / 1e3 | 0 : 1 == n ? s = s / 100 | 0 : 2 == n && (s = s / 10 | 0), o = (t || r < 4) && 9999 == s || !t && r > 3 && 4999 == s) : o = ((t || r < 4) && s + 1 == u || !t && r > 3 && s + 1 == u / 2) && (e[i + 1] / u / 1e3 | 0) == b(10, n - 3) - 1, o
      }

      function O(e, n, r) {
        for (var t, i, u = [0], o = 0, s = e.length; o < s;) {
          for (i = u.length; i--;) u[i] *= n;
          for (u[0] += c.indexOf(e.charAt(o++)), t = 0; t < u.length; t++) u[t] > r - 1 && (void 0 === u[t + 1] && (u[t + 1] = 0), u[t + 1] += u[t] / r | 0, u[t] %= r)
        }
        return u.reverse()
      }
      T.absoluteValue = T.abs = function() {
        var e = new this.constructor(this);
        return e.s < 0 && (e.s = 1), P(e)
      }, T.ceil = function() {
        return P(new this.constructor(this), this.e + 1, 2)
      }, T.clampedTo = T.clamp = function(e, n) {
        var r = this,
          t = r.constructor;
        if (e = new t(e), n = new t(n), !e.s || !n.s) return new t(NaN);
        if (e.gt(n)) throw Error(p + n);
        return r.cmp(e) < 0 ? e : r.cmp(n) > 0 ? n : new t(r)
      }, T.comparedTo = T.cmp = function(e) {
        var n, r, t, i, u = this,
          o = u.d,
          s = (e = new u.constructor(e)).d,
          a = u.s,
          c = e.s;
        if (!o || !s) return a && c ? a !== c ? a : o === s ? 0 : !o ^ a < 0 ? 1 : -1 : NaN;
        if (!o[0] || !s[0]) return o[0] ? a : s[0] ? -c : 0;
        if (a !== c) return a;
        if (u.e !== e.e) return u.e > e.e ^ a < 0 ? 1 : -1;
        for (n = 0, r = (t = o.length) < (i = s.length) ? t : i; n < r; ++n)
          if (o[n] !== s[n]) return o[n] > s[n] ^ a < 0 ? 1 : -1;
        return t === i ? 0 : t > i ^ a < 0 ? 1 : -1
      }, T.cosine = T.cos = function() {
        var e, n, r = this,
          t = r.constructor;
        return r.d ? r.d[0] ? (e = t.precision, n = t.rounding, t.precision = e + Math.max(r.e, r.sd()) + 7, t.rounding = 1, r = function(e, n) {
          var r, t, i;
          if (n.isZero()) return n;
          (t = n.d.length) < 32 ? i = (1 / J(4, r = Math.ceil(t / 3))).toString() : (r = 16, i = "2.3283064365386962890625e-10"), e.precision += r, n = Y(e, 1, n.times(i), new e(1));
          for (var u = r; u--;) {
            var o = n.times(n);
            n = o.times(o).minus(o).times(8).plus(1)
          }
          return e.precision -= r, n
        }(t, K(t, r)), t.precision = e, t.rounding = n, P(2 == o || 3 == o ? r.neg() : r, e, n, !0)) : new t(1) : new t(NaN)
      }, T.cubeRoot = T.cbrt = function() {
        var e, n, r, t, i, u, o, s, a, c, l = this,
          f = l.constructor;
        if (!l.isFinite() || l.isZero()) return new f(l);
        for (g = !1, (u = l.s * b(l.s * l, 1 / 3)) && Math.abs(u) != 1 / 0 ? t = new f(u.toString()) : (r = A(l.d), (u = ((e = l.e) - r.length + 1) % 3) && (r += 1 == u || -2 == u ? "0" : "00"), u = b(r, 1 / 3), e = D((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), (t = new f(r = u == 1 / 0 ? "5e" + e : (r = u.toExponential()).slice(0, r.indexOf("e") + 1) + e)).s = l.s), o = (e = f.precision) + 3;;)
          if (c = (a = (s = t).times(s).times(s)).plus(l), t = B(c.plus(l).times(s), c.plus(a), o + 2, 1), A(s.d).slice(0, o) === (r = A(t.d)).slice(0, o)) {
            if ("9999" != (r = r.slice(o - 3, o + 1)) && (i || "4999" != r)) {
              +r && (+r.slice(1) || "5" != r.charAt(0)) || (P(t, e + 1, 1), n = !t.times(t).times(t).eq(l));
              break
            }
            if (!i && (P(s, e + 1, 0), s.times(s).times(s).eq(l))) {
              t = s;
              break
            }
            o += 4, i = 1
          } return g = !0, P(t, e, f.rounding, n)
      }, T.decimalPlaces = T.dp = function() {
        var e, n = this.d,
          r = NaN;
        if (n) {
          if (r = 7 * ((e = n.length - 1) - D(this.e / 7)), e = n[e])
            for (; e % 10 == 0; e /= 10) r--;
          r < 0 && (r = 0)
        }
        return r
      }, T.dividedBy = T.div = function(e) {
        return B(this, new this.constructor(e))
      }, T.dividedToIntegerBy = T.divToInt = function(e) {
        var n = this.constructor;
        return P(B(this, new n(e), 0, 1, 1), n.precision, n.rounding)
      }, T.equals = T.eq = function(e) {
        return 0 === this.cmp(e)
      }, T.floor = function() {
        return P(new this.constructor(this), this.e + 1, 3)
      }, T.greaterThan = T.gt = function(e) {
        return this.cmp(e) > 0
      }, T.greaterThanOrEqualTo = T.gte = function(e) {
        var n = this.cmp(e);
        return 1 == n || 0 === n
      }, T.hyperbolicCosine = T.cosh = function() {
        var e, n, r, t, i, u = this,
          o = u.constructor,
          s = new o(1);
        if (!u.isFinite()) return new o(u.s ? 1 / 0 : NaN);
        if (u.isZero()) return s;
        r = o.precision, t = o.rounding, o.precision = r + Math.max(u.e, u.sd()) + 4, o.rounding = 1, (i = u.d.length) < 32 ? n = (1 / J(4, e = Math.ceil(i / 3))).toString() : (e = 16, n = "2.3283064365386962890625e-10"), u = Y(o, 1, u.times(n), new o(1), !0);
        for (var a, c = e, l = new o(8); c--;) a = u.times(u), u = s.minus(a.times(l.minus(a.times(l))));
        return P(u, o.precision = r, o.rounding = t, !0)
      }, T.hyperbolicSine = T.sinh = function() {
        var e, n, r, t, i = this,
          u = i.constructor;
        if (!i.isFinite() || i.isZero()) return new u(i);
        if (n = u.precision, r = u.rounding, u.precision = n + Math.max(i.e, i.sd()) + 4, u.rounding = 1, (t = i.d.length) < 3) i = Y(u, 2, i, i, !0);
        else {
          e = (e = 1.4 * Math.sqrt(t)) > 16 ? 16 : 0 | e, i = Y(u, 2, i = i.times(1 / J(5, e)), i, !0);
          for (var o, s = new u(5), a = new u(16), c = new u(20); e--;) o = i.times(i), i = i.times(s.plus(o.times(a.times(o).plus(c))))
        }
        return u.precision = n, u.rounding = r, P(i, n, r, !0)
      }, T.hyperbolicTangent = T.tanh = function() {
        var e, n, r = this,
          t = r.constructor;
        return r.isFinite() ? r.isZero() ? new t(r) : (e = t.precision, n = t.rounding, t.precision = e + 7, t.rounding = 1, B(r.sinh(), r.cosh(), t.precision = e, t.rounding = n)) : new t(r.s)
      }, T.inverseCosine = T.acos = function() {
        var e = this,
          n = e.constructor,
          r = e.abs().cmp(1),
          t = n.precision,
          i = n.rounding;
        return -1 !== r ? 0 === r ? e.isNeg() ? R(n, t, i) : new n(0) : new n(NaN) : e.isZero() ? R(n, t + 4, i).times(.5) : (n.precision = t + 6, n.rounding = 1, e = new n(1).minus(e).div(e.plus(1)).sqrt().atan(), n.precision = t, n.rounding = i, e.times(2))
      }, T.inverseHyperbolicCosine = T.acosh = function() {
        var e, n, r = this,
          t = r.constructor;
        return r.lte(1) ? new t(r.eq(1) ? 0 : NaN) : r.isFinite() ? (e = t.precision, n = t.rounding, t.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4, t.rounding = 1, g = !1, r = r.times(r).minus(1).sqrt().plus(r), g = !0, t.precision = e, t.rounding = n, r.ln()) : new t(r)
      }, T.inverseHyperbolicSine = T.asinh = function() {
        var e, n, r = this,
          t = r.constructor;
        return !r.isFinite() || r.isZero() ? new t(r) : (e = t.precision, n = t.rounding, t.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6, t.rounding = 1, g = !1, r = r.times(r).plus(1).sqrt().plus(r), g = !0, t.precision = e, t.rounding = n, r.ln())
      }, T.inverseHyperbolicTangent = T.atanh = function() {
        var e, n, r, t, i = this,
          u = i.constructor;
        return i.isFinite() ? i.e >= 0 ? new u(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN) : (e = u.precision, n = u.rounding, t = i.sd(), Math.max(t, e) < 2 * -i.e - 1 ? P(new u(i), e, n, !0) : (u.precision = r = t - i.e, i = B(i.plus(1), new u(1).minus(i), r + e, 1), u.precision = e + 4, u.rounding = 1, i = i.ln(), u.precision = e, u.rounding = n, i.times(.5))) : new u(NaN)
      }, T.inverseSine = T.asin = function() {
        var e, n, r, t, i = this,
          u = i.constructor;
        return i.isZero() ? new u(i) : (n = i.abs().cmp(1), r = u.precision, t = u.rounding, -1 !== n ? 0 === n ? ((e = R(u, r + 4, t).times(.5)).s = i.s, e) : new u(NaN) : (u.precision = r + 6, u.rounding = 1, i = i.div(new u(1).minus(i.times(i)).sqrt().plus(1)).atan(), u.precision = r, u.rounding = t, i.times(2)))
      }, T.inverseTangent = T.atan = function() {
        var e, n, r, t, i, u, o, s, a, c = this,
          l = c.constructor,
          f = l.precision,
          d = l.rounding;
        if (c.isFinite()) {
          if (c.isZero()) return new l(c);
          if (c.abs().eq(1) && f + 4 <= x) return (o = R(l, f + 4, d).times(.25)).s = c.s, o
        } else {
          if (!c.s) return new l(NaN);
          if (f + 4 <= x) return (o = R(l, f + 4, d).times(.5)).s = c.s, o
        }
        for (l.precision = s = f + 10, l.rounding = 1, e = r = Math.min(28, s / 7 + 2 | 0); e; --e) c = c.div(c.times(c).plus(1).sqrt().plus(1));
        for (g = !1, n = Math.ceil(s / 7), t = 1, a = c.times(c), o = new l(c), i = c; - 1 !== e;)
          if (i = i.times(a), u = o.minus(i.div(t += 2)), i = i.times(a), void 0 !== (o = u.plus(i.div(t += 2))).d[n])
            for (e = n; o.d[e] === u.d[e] && e--;);
        return r && (o = o.times(2 << r - 1)), g = !0, P(o, l.precision = f, l.rounding = d, !0)
      }, T.isFinite = function() {
        return !!this.d
      }, T.isInteger = T.isInt = function() {
        return !!this.d && D(this.e / 7) > this.d.length - 2
      }, T.isNaN = function() {
        return !this.s
      }, T.isNegative = T.isNeg = function() {
        return this.s < 0
      }, T.isPositive = T.isPos = function() {
        return this.s > 0
      }, T.isZero = function() {
        return !!this.d && 0 === this.d[0]
      }, T.lessThan = T.lt = function(e) {
        return this.cmp(e) < 0
      }, T.lessThanOrEqualTo = T.lte = function(e) {
        return this.cmp(e) < 1
      }, T.logarithm = T.log = function(e) {
        var n, r, t, i, u, o, s, a, c = this,
          l = c.constructor,
          f = l.precision,
          d = l.rounding;
        if (null == e) e = new l(10), n = !0;
        else {
          if (r = (e = new l(e)).d, e.s < 0 || !r || !r[0] || e.eq(1)) return new l(NaN);
          n = e.eq(10)
        }
        if (r = c.d, c.s < 0 || !r || !r[0] || c.eq(1)) return new l(r && !r[0] ? -1 / 0 : 1 != c.s ? NaN : r ? 0 : 1 / 0);
        if (n)
          if (r.length > 1) u = !0;
          else {
            for (i = r[0]; i % 10 == 0;) i /= 10;
            u = 1 !== i
          } if (g = !1, o = H(c, s = f + 5), t = n ? j(l, s + 10) : H(e, s), I((a = B(o, t, s, 1)).d, i = f, d))
          do {
            if (o = H(c, s += 10), t = n ? j(l, s + 10) : H(e, s), a = B(o, t, s, 1), !u) {
              +A(a.d).slice(i + 1, i + 15) + 1 == 1e14 && (a = P(a, f + 1, 0));
              break
            }
          } while (I(a.d, i += 10, d));
        return g = !0, P(a, f, d)
      }, T.minus = T.sub = function(e) {
        var n, r, t, i, u, o, s, a, c, l, f, d, m = this,
          p = m.constructor;
        if (e = new p(e), !m.d || !e.d) return m.s && e.s ? m.d ? e.s = -e.s : e = new p(e.d || m.s !== e.s ? m : NaN) : e = new p(NaN), e;
        if (m.s != e.s) return e.s = -e.s, m.plus(e);
        if (c = m.d, d = e.d, s = p.precision, a = p.rounding, !c[0] || !d[0]) {
          if (d[0]) e.s = -e.s;
          else {
            if (!c[0]) return new p(3 === a ? -0 : 0);
            e = new p(m)
          }
          return g ? P(e, s, a) : e
        }
        if (r = D(e.e / 7), l = D(m.e / 7), c = c.slice(), u = l - r) {
          for ((f = u < 0) ? (n = c, u = -u, o = d.length) : (n = d, r = l, o = c.length), u > (t = Math.max(Math.ceil(s / 7), o) + 2) && (u = t, n.length = 1), n.reverse(), t = u; t--;) n.push(0);
          n.reverse()
        } else {
          for ((f = (t = c.length) < (o = d.length)) && (o = t), t = 0; t < o; t++)
            if (c[t] != d[t]) {
              f = c[t] < d[t];
              break
            } u = 0
        }
        for (f && (n = c, c = d, d = n, e.s = -e.s), o = c.length, t = d.length - o; t > 0; --t) c[o++] = 0;
        for (t = d.length; t > u;) {
          if (c[--t] < d[t]) {
            for (i = t; i && 0 === c[--i];) c[i] = C - 1;
            --c[i], c[t] += C
          }
          c[t] -= d[t]
        }
        for (; 0 === c[--o];) c.pop();
        for (; 0 === c[0]; c.shift()) --r;
        return c[0] ? (e.d = c, e.e = _(c, r), g ? P(e, s, a) : e) : new p(3 === a ? -0 : 0)
      }, T.modulo = T.mod = function(e) {
        var n, r = this,
          t = r.constructor;
        return e = new t(e), !r.d || !e.s || e.d && !e.d[0] ? new t(NaN) : !e.d || r.d && !r.d[0] ? P(new t(r), t.precision, t.rounding) : (g = !1, 9 == t.modulo ? (n = B(r, e.abs(), 0, 3, 1)).s *= e.s : n = B(r, e, 0, t.modulo, 1), n = n.times(e), g = !0, r.minus(n))
      }, T.naturalExponential = T.exp = function() {
        return G(this)
      }, T.naturalLogarithm = T.ln = function() {
        return H(this)
      }, T.negated = T.neg = function() {
        var e = new this.constructor(this);
        return e.s = -e.s, P(e)
      }, T.plus = T.add = function(e) {
        var n, r, t, i, u, o, s, a, c, l, f = this,
          d = f.constructor;
        if (e = new d(e), !f.d || !e.d) return f.s && e.s ? f.d || (e = new d(e.d || f.s === e.s ? f : NaN)) : e = new d(NaN), e;
        if (f.s != e.s) return e.s = -e.s, f.minus(e);
        if (c = f.d, l = e.d, s = d.precision, a = d.rounding, !c[0] || !l[0]) return l[0] || (e = new d(f)), g ? P(e, s, a) : e;
        if (u = D(f.e / 7), t = D(e.e / 7), c = c.slice(), i = u - t) {
          for (i < 0 ? (r = c, i = -i, o = l.length) : (r = l, t = u, o = c.length), i > (o = (u = Math.ceil(s / 7)) > o ? u + 1 : o + 1) && (i = o, r.length = 1), r.reverse(); i--;) r.push(0);
          r.reverse()
        }
        for ((o = c.length) - (i = l.length) < 0 && (i = o, r = l, l = c, c = r), n = 0; i;) n = (c[--i] = c[i] + l[i] + n) / C | 0, c[i] %= C;
        for (n && (c.unshift(n), ++t), o = c.length; 0 == c[--o];) c.pop();
        return e.d = c, e.e = _(c, t), g ? P(e, s, a) : e
      }, T.precision = T.sd = function(e) {
        var n, r = this;
        if (void 0 !== e && e !== !!e && 1 !== e && 0 !== e) throw Error(p + e);
        return r.d ? (n = L(r.d), e && r.e + 1 > n && (n = r.e + 1)) : n = NaN, n
      }, T.round = function() {
        var e = this,
          n = e.constructor;
        return P(new n(e), e.e + 1, n.rounding)
      }, T.sine = T.sin = function() {
        var e, n, r = this,
          t = r.constructor;
        return r.isFinite() ? r.isZero() ? new t(r) : (e = t.precision, n = t.rounding, t.precision = e + Math.max(r.e, r.sd()) + 7, t.rounding = 1, r = function(e, n) {
          var r, t = n.d.length;
          if (t < 3) return n.isZero() ? n : Y(e, 2, n, n);
          r = (r = 1.4 * Math.sqrt(t)) > 16 ? 16 : 0 | r, n = Y(e, 2, n = n.times(1 / J(5, r)), n);
          for (var i, u = new e(5), o = new e(16), s = new e(20); r--;) i = n.times(n), n = n.times(u.plus(i.times(o.times(i).minus(s))));
          return n
        }(t, K(t, r)), t.precision = e, t.rounding = n, P(o > 2 ? r.neg() : r, e, n, !0)) : new t(NaN)
      }, T.squareRoot = T.sqrt = function() {
        var e, n, r, t, i, u, o = this,
          s = o.d,
          a = o.e,
          c = o.s,
          l = o.constructor;
        if (1 !== c || !s || !s[0]) return new l(!c || c < 0 && (!s || s[0]) ? NaN : s ? o : 1 / 0);
        for (g = !1, 0 == (c = Math.sqrt(+o)) || c == 1 / 0 ? (((n = A(s)).length + a) % 2 == 0 && (n += "0"), c = Math.sqrt(n), a = D((a + 1) / 2) - (a < 0 || a % 2), t = new l(n = c == 1 / 0 ? "5e" + a : (n = c.toExponential()).slice(0, n.indexOf("e") + 1) + a)) : t = new l(c.toString()), r = (a = l.precision) + 3;;)
          if (t = (u = t).plus(B(o, u, r + 2, 1)).times(.5), A(u.d).slice(0, r) === (n = A(t.d)).slice(0, r)) {
            if ("9999" != (n = n.slice(r - 3, r + 1)) && (i || "4999" != n)) {
              +n && (+n.slice(1) || "5" != n.charAt(0)) || (P(t, a + 1, 1), e = !t.times(t).eq(o));
              break
            }
            if (!i && (P(u, a + 1, 0), u.times(u).eq(o))) {
              t = u;
              break
            }
            r += 4, i = 1
          } return g = !0, P(t, a, l.rounding, e)
      }, T.tangent = T.tan = function() {
        var e, n, r = this,
          t = r.constructor;
        return r.isFinite() ? r.isZero() ? new t(r) : (e = t.precision, n = t.rounding, t.precision = e + 10, t.rounding = 1, (r = r.sin()).s = 1, r = B(r, new t(1).minus(r.times(r)).sqrt(), e + 10, 0), t.precision = e, t.rounding = n, P(2 == o || 4 == o ? r.neg() : r, e, n, !0)) : new t(NaN)
      }, T.times = T.mul = function(e) {
        var n, r, t, i, u, o, s, a, c, l = this,
          f = l.constructor,
          d = l.d,
          m = (e = new f(e)).d;
        if (e.s *= l.s, !(d && d[0] && m && m[0])) return new f(!e.s || d && !d[0] && !m || m && !m[0] && !d ? NaN : d && m ? 0 * e.s : e.s / 0);
        for (r = D(l.e / 7) + D(e.e / 7), (a = d.length) < (c = m.length) && (u = d, d = m, m = u, o = a, a = c, c = o), u = [], t = o = a + c; t--;) u.push(0);
        for (t = c; --t >= 0;) {
          for (n = 0, i = a + t; i > t;) s = u[i] + m[t] * d[i - t - 1] + n, u[i--] = s % C | 0, n = s / C | 0;
          u[i] = (u[i] + n) % C | 0
        }
        for (; !u[--o];) u.pop();
        return n ? ++r : u.shift(), e.d = u, e.e = _(u, r), g ? P(e, f.precision, f.rounding) : e
      }, T.toBinary = function(e, n) {
        return Q(this, 2, e, n)
      }, T.toDecimalPlaces = T.toDP = function(e, n) {
        var r = this,
          t = r.constructor;
        return r = new t(r), void 0 === e ? r : (M(e, 0, a), void 0 === n ? n = t.rounding : M(n, 0, 8), P(r, e + r.e + 1, n))
      }, T.toExponential = function(e, n) {
        var r, t = this,
          i = t.constructor;
        return void 0 === e ? r = k(t, !0) : (M(e, 0, a), void 0 === n ? n = i.rounding : M(n, 0, 8), r = k(t = P(new i(t), e + 1, n), !0, e + 1)), t.isNeg() && !t.isZero() ? "-" + r : r
      }, T.toFixed = function(e, n) {
        var r, t, i = this,
          u = i.constructor;
        return void 0 === e ? r = k(i) : (M(e, 0, a), void 0 === n ? n = u.rounding : M(n, 0, 8), r = k(t = P(new u(i), e + i.e + 1, n), !1, e + t.e + 1)), i.isNeg() && !i.isZero() ? "-" + r : r
      }, T.toFraction = function(e) {
        var n, r, t, i, u, o, s, a, c, l, f, d, m = this,
          h = m.d,
          v = m.constructor;
        if (!h) return new v(m);
        if (c = r = new v(1), t = a = new v(0), o = (u = (n = new v(t)).e = L(h) - m.e - 1) % 7, n.d[0] = b(10, o < 0 ? 7 + o : o), null == e) e = u > 0 ? n : c;
        else {
          if (!(s = new v(e)).isInt() || s.lt(c)) throw Error(p + s);
          e = s.gt(n) ? u > 0 ? n : c : s
        }
        for (g = !1, s = new v(A(h)), l = v.precision, v.precision = u = 7 * h.length * 2; f = B(s, n, 0, 1, 1), 1 != (i = r.plus(f.times(t))).cmp(e);) r = t, t = i, i = c, c = a.plus(f.times(i)), a = i, i = n, n = s.minus(f.times(i)), s = i;
        return i = B(e.minus(r), t, 0, 1, 1), a = a.plus(i.times(c)), r = r.plus(i.times(t)), a.s = c.s = m.s, d = B(c, t, u, 1).minus(m).abs().cmp(B(a, r, u, 1).minus(m).abs()) < 1 ? [c, t] : [a, r], v.precision = l, g = !0, d
      }, T.toHexadecimal = T.toHex = function(e, n) {
        return Q(this, 16, e, n)
      }, T.toNearest = function(e, n) {
        var r = this,
          t = r.constructor;
        if (r = new t(r), null == e) {
          if (!r.d) return r;
          e = new t(1), n = t.rounding
        } else {
          if (e = new t(e), void 0 === n ? n = t.rounding : M(n, 0, 8), !r.d) return e.s ? r : e;
          if (!e.d) return e.s && (e.s = r.s), e
        }
        return e.d[0] ? (g = !1, r = B(r, e, 0, n, 1).times(e), g = !0, P(r)) : (e.s = r.s, r = e), r
      }, T.toNumber = function() {
        return +this
      }, T.toOctal = function(e, n) {
        return Q(this, 8, e, n)
      }, T.toPower = T.pow = function(e) {
        var n, r, t, i, u, o, s = this,
          a = s.constructor,
          c = +(e = new a(e));
        if (!(s.d && e.d && s.d[0] && e.d[0])) return new a(b(+s, c));
        if ((s = new a(s)).eq(1)) return s;
        if (t = a.precision, u = a.rounding, e.eq(1)) return P(s, t, u);
        if ((n = D(e.e / 7)) >= e.d.length - 1 && (r = c < 0 ? -c : c) <= 9007199254740991) return i = Z(a, s, r, t), e.s < 0 ? new a(1).div(i) : P(i, t, u);
        if ((o = s.s) < 0) {
          if (n < e.d.length - 1) return new a(NaN);
          if (1 & e.d[n] || (o = 1), 0 == s.e && 1 == s.d[0] && 1 == s.d.length) return s.s = o, s
        }
        return (n = 0 != (r = b(+s, c)) && isFinite(r) ? new a(r + "").e : D(c * (Math.log("0." + A(s.d)) / Math.LN10 + s.e + 1))) > a.maxE + 1 || n < a.minE - 1 ? new a(n > 0 ? o / 0 : 0) : (g = !1, a.rounding = s.s = 1, r = Math.min(12, (n + "").length), (i = G(e.times(H(s, t + r)), t)).d && I((i = P(i, t + 5, 1)).d, t, u) && (n = t + 10, +A((i = P(G(e.times(H(s, n + r)), n), n + 5, 1)).d).slice(t + 1, t + 15) + 1 == 1e14 && (i = P(i, t + 1, 0))), i.s = o, g = !0, a.rounding = u, P(i, t, u))
      }, T.toPrecision = function(e, n) {
        var r, t = this,
          i = t.constructor;
        return void 0 === e ? r = k(t, t.e <= i.toExpNeg || t.e >= i.toExpPos) : (M(e, 1, a), void 0 === n ? n = i.rounding : M(n, 0, 8), r = k(t = P(new i(t), e, n), e <= t.e || t.e <= i.toExpNeg, e)), t.isNeg() && !t.isZero() ? "-" + r : r
      }, T.toSignificantDigits = T.toSD = function(e, n) {
        var r = this.constructor;
        return void 0 === e ? (e = r.precision, n = r.rounding) : (M(e, 1, a), void 0 === n ? n = r.rounding : M(n, 0, 8)), P(new r(this), e, n)
      }, T.toString = function() {
        var e = this,
          n = e.constructor,
          r = k(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
        return e.isNeg() && !e.isZero() ? "-" + r : r
      }, T.truncated = T.trunc = function() {
        return P(new this.constructor(this), this.e + 1, 1)
      }, T.valueOf = T.toJSON = function() {
        var e = this,
          n = e.constructor,
          r = k(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
        return e.isNeg() ? "-" + r : r
      };
      var B = function() {
        function e(e, n, r) {
          var t, i = 0,
            u = e.length;
          for (e = e.slice(); u--;) t = e[u] * n + i, e[u] = t % r | 0, i = t / r | 0;
          return i && e.unshift(i), e
        }

        function n(e, n, r, t) {
          var i, u;
          if (r != t) u = r > t ? 1 : -1;
          else
            for (i = u = 0; i < r; i++)
              if (e[i] != n[i]) {
                u = e[i] > n[i] ? 1 : -1;
                break
              } return u
        }

        function r(e, n, r, t) {
          for (var i = 0; r--;) e[r] -= i, i = e[r] < n[r] ? 1 : 0, e[r] = i * t + e[r] - n[r];
          for (; !e[0] && e.length > 1;) e.shift()
        }
        return function(t, i, o, s, a, c) {
          var l, f, d, g, m, p, h, v, y, b, w, F, E, N, S, x, T, A, M, I, O = t.constructor,
            B = t.s == i.s ? 1 : -1,
            k = t.d,
            _ = i.d;
          if (!(k && k[0] && _ && _[0])) return new O(t.s && i.s && (k ? !_ || k[0] != _[0] : _) ? k && 0 == k[0] || !_ ? 0 * B : B / 0 : NaN);
          for (c ? (m = 1, f = t.e - i.e) : (c = C, m = 7, f = D(t.e / m) - D(i.e / m)), M = _.length, T = k.length, b = (y = new O(B)).d = [], d = 0; _[d] == (k[d] || 0); d++);
          if (_[d] > (k[d] || 0) && f--, null == o ? (N = o = O.precision, s = O.rounding) : N = a ? o + (t.e - i.e) + 1 : o, N < 0) b.push(1), p = !0;
          else {
            if (N = N / m + 2 | 0, d = 0, 1 == M) {
              for (g = 0, _ = _[0], N++;
                (d < T || g) && N--; d++) S = g * c + (k[d] || 0), b[d] = S / _ | 0, g = S % _ | 0;
              p = g || d < T
            } else {
              for ((g = c / (_[0] + 1) | 0) > 1 && (_ = e(_, g, c), k = e(k, g, c), M = _.length, T = k.length), x = M, F = (w = k.slice(0, M)).length; F < M;) w[F++] = 0;
              (I = _.slice()).unshift(0), A = _[0], _[1] >= c / 2 && ++A;
              do {
                g = 0, (l = n(_, w, M, F)) < 0 ? (E = w[0], M != F && (E = E * c + (w[1] || 0)), (g = E / A | 0) > 1 ? (g >= c && (g = c - 1), 1 == (l = n(h = e(_, g, c), w, v = h.length, F = w.length)) && (g--, r(h, M < v ? I : _, v, c))) : (0 == g && (l = g = 1), h = _.slice()), (v = h.length) < F && h.unshift(0), r(w, h, F, c), -1 == l && (l = n(_, w, M, F = w.length)) < 1 && (g++, r(w, M < F ? I : _, F, c)), F = w.length) : 0 === l && (g++, w = [0]), b[d++] = g, l && w[0] ? w[F++] = k[x] || 0 : (w = [k[x]], F = 1)
              } while ((x++ < T || void 0 !== w[0]) && N--);
              p = void 0 !== w[0]
            }
            b[0] || b.shift()
          }
          if (1 == m) y.e = f, u = p;
          else {
            for (d = 1, g = b[0]; g >= 10; g /= 10) d++;
            y.e = d + f * m - 1, P(y, a ? o + y.e + 1 : o, s, p)
          }
          return y
        }
      }();

      function P(e, n, r, t) {
        var i, u, o, s, a, c, l, f, d, m = e.constructor;
        e: if (null != n) {
          if (!(f = e.d)) return e;
          for (i = 1, s = f[0]; s >= 10; s /= 10) i++;
          if ((u = n - i) < 0) u += 7, o = n, a = (l = f[d = 0]) / b(10, i - o - 1) % 10 | 0;
          else if ((d = Math.ceil((u + 1) / 7)) >= (s = f.length)) {
            if (!t) break e;
            for (; s++ <= d;) f.push(0);
            l = a = 0, i = 1, o = (u %= 7) - 7 + 1
          } else {
            for (l = s = f[d], i = 1; s >= 10; s /= 10) i++;
            a = (o = (u %= 7) - 7 + i) < 0 ? 0 : l / b(10, i - o - 1) % 10 | 0
          }
          if (t = t || n < 0 || void 0 !== f[d + 1] || (o < 0 ? l : l % b(10, i - o - 1)), c = r < 4 ? (a || t) && (0 == r || r == (e.s < 0 ? 3 : 2)) : a > 5 || 5 == a && (4 == r || t || 6 == r && (u > 0 ? o > 0 ? l / b(10, i - o) : 0 : f[d - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7)), n < 1 || !f[0]) return f.length = 0, c ? (n -= e.e + 1, f[0] = b(10, (7 - n % 7) % 7), e.e = -n || 0) : f[0] = e.e = 0, e;
          if (0 == u ? (f.length = d, s = 1, d--) : (f.length = d + 1, s = b(10, 7 - u), f[d] = o > 0 ? (l / b(10, i - o) % b(10, o) | 0) * s : 0), c)
            for (;;) {
              if (0 == d) {
                for (u = 1, o = f[0]; o >= 10; o /= 10) u++;
                for (o = f[0] += s, s = 1; o >= 10; o /= 10) s++;
                u != s && (e.e++, f[0] == C && (f[0] = 1));
                break
              }
              if (f[d] += s, f[d] != C) break;
              f[d--] = 0, s = 1
            }
          for (u = f.length; 0 === f[--u];) f.pop()
        }
        return g && (e.e > m.maxE ? (e.d = null, e.e = NaN) : e.e < m.minE && (e.e = 0, e.d = [0])), e
      }

      function k(e, n, r) {
        if (!e.isFinite()) return W(e);
        var t, i = e.e,
          u = A(e.d),
          o = u.length;
        return n ? (r && (t = r - o) > 0 ? u = u.charAt(0) + "." + u.slice(1) + q(t) : o > 1 && (u = u.charAt(0) + "." + u.slice(1)), u = u + (e.e < 0 ? "e" : "e+") + e.e) : i < 0 ? (u = "0." + q(-i - 1) + u, r && (t = r - o) > 0 && (u += q(t))) : i >= o ? (u += q(i + 1 - o), r && (t = r - i - 1) > 0 && (u = u + "." + q(t))) : ((t = i + 1) < o && (u = u.slice(0, t) + "." + u.slice(t)), r && (t = r - o) > 0 && (i + 1 === o && (u += "."), u += q(t))), u
      }

      function _(e, n) {
        var r = e[0];
        for (n *= 7; r >= 10; r /= 10) n++;
        return n
      }

      function j(e, n, r) {
        if (n > S) throw g = !0, r && (e.precision = r), Error(h);
        return P(new e(l), n, 1, !0)
      }

      function R(e, n, r) {
        if (n > x) throw Error(h);
        return P(new e(f), n, r, !0)
      }

      function L(e) {
        var n = e.length - 1,
          r = 7 * n + 1;
        if (n = e[n]) {
          for (; n % 10 == 0; n /= 10) r--;
          for (n = e[0]; n >= 10; n /= 10) r++
        }
        return r
      }

      function q(e) {
        for (var n = ""; e--;) n += "0";
        return n
      }

      function Z(e, n, r, t) {
        var i, u = new e(1),
          o = Math.ceil(t / 7 + 4);
        for (g = !1;;) {
          if (r % 2 && X((u = u.times(n)).d, o) && (i = !0), 0 === (r = D(r / 2))) {
            r = u.d.length - 1, i && 0 === u.d[r] && ++u.d[r];
            break
          }
          X((n = n.times(n)).d, o)
        }
        return g = !0, u
      }

      function U(e) {
        return 1 & e.d[e.d.length - 1]
      }

      function z(e, n, r) {
        for (var t, i, u = new e(n[0]), o = 0; ++o < n.length;) {
          if (!(i = new e(n[o])).s) {
            u = i;
            break
          }((t = u.cmp(i)) === r || 0 === t && u.s === r) && (u = i)
        }
        return u
      }

      function G(e, n) {
        var r, t, i, u, o, s, a, c = 0,
          l = 0,
          f = 0,
          d = e.constructor,
          m = d.rounding,
          p = d.precision;
        if (!e.d || !e.d[0] || e.e > 17) return new d(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : NaN);
        for (null == n ? (g = !1, a = p) : a = n, s = new d(.03125); e.e > -2;) e = e.times(s), f += 5;
        for (a += t = Math.log(b(2, f)) / Math.LN10 * 2 + 5 | 0, r = u = o = new d(1), d.precision = a;;) {
          if (u = P(u.times(e), a, 1), r = r.times(++l), A((s = o.plus(B(u, r, a, 1))).d).slice(0, a) === A(o.d).slice(0, a)) {
            for (i = f; i--;) o = P(o.times(o), a, 1);
            if (null != n) return d.precision = p, o;
            if (!(c < 3 && I(o.d, a - t, m, c))) return P(o, d.precision = p, m, g = !0);
            d.precision = a += 10, r = u = s = new d(1), l = 0, c++
          }
          o = s
        }
      }

      function H(e, n) {
        var r, t, i, u, o, s, a, c, l, f, d, m = 1,
          p = e,
          h = p.d,
          v = p.constructor,
          y = v.rounding,
          D = v.precision;
        if (p.s < 0 || !h || !h[0] || !p.e && 1 == h[0] && 1 == h.length) return new v(h && !h[0] ? -1 / 0 : 1 != p.s ? NaN : h ? 0 : p);
        if (null == n ? (g = !1, l = D) : l = n, v.precision = l += 10, t = (r = A(h)).charAt(0), !(Math.abs(u = p.e) < 15e14)) return c = j(v, l + 2, D).times(u + ""), p = H(new v(t + "." + r.slice(1)), l - 10).plus(c), v.precision = D, null == n ? P(p, D, y, g = !0) : p;
        for (; t < 7 && 1 != t || 1 == t && r.charAt(1) > 3;) t = (r = A((p = p.times(e)).d)).charAt(0), m++;
        for (u = p.e, t > 1 ? (p = new v("0." + r), u++) : p = new v(t + "." + r.slice(1)), f = p, a = o = p = B(p.minus(1), p.plus(1), l, 1), d = P(p.times(p), l, 1), i = 3;;) {
          if (o = P(o.times(d), l, 1), A((c = a.plus(B(o, new v(i), l, 1))).d).slice(0, l) === A(a.d).slice(0, l)) {
            if (a = a.times(2), 0 !== u && (a = a.plus(j(v, l + 2, D).times(u + ""))), a = B(a, new v(m), l, 1), null != n) return v.precision = D, a;
            if (!I(a.d, l - 10, y, s)) return P(a, v.precision = D, y, g = !0);
            v.precision = l += 10, c = o = p = B(f.minus(1), f.plus(1), l, 1), d = P(p.times(p), l, 1), i = s = 1
          }
          a = c, i += 2
        }
      }

      function W(e) {
        return String(e.s * e.s / 0)
      }

      function V(e, n) {
        var r, t, i;
        for ((r = n.indexOf(".")) > -1 && (n = n.replace(".", "")), (t = n.search(/e/i)) > 0 ? (r < 0 && (r = t), r += +n.slice(t + 1), n = n.substring(0, t)) : r < 0 && (r = n.length), t = 0; 48 === n.charCodeAt(t); t++);
        for (i = n.length; 48 === n.charCodeAt(i - 1); --i);
        if (n = n.slice(t, i)) {
          if (i -= t, e.e = r = r - t - 1, e.d = [], t = (r + 1) % 7, r < 0 && (t += 7), t < i) {
            for (t && e.d.push(+n.slice(0, t)), i -= 7; t < i;) e.d.push(+n.slice(t, t += 7));
            t = 7 - (n = n.slice(t)).length
          } else t -= i;
          for (; t--;) n += "0";
          e.d.push(+n), g && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]))
        } else e.e = 0, e.d = [0];
        return e
      }

      function $(e, n) {
        var r, t, i, u, o, s, a, c, l;
        if (n.indexOf("_") > -1) {
          if (n = n.replace(/(\d)_(?=\d)/g, "$1"), N.test(n)) return V(e, n)
        } else if ("Infinity" === n || "NaN" === n) return +n || (e.s = NaN), e.e = NaN, e.d = null, e;
        if (F.test(n)) r = 16, n = n.toLowerCase();
        else if (w.test(n)) r = 2;
        else {
          if (!E.test(n)) throw Error(p + n);
          r = 8
        }
        for ((u = n.search(/p/i)) > 0 ? (a = +n.slice(u + 1), n = n.substring(2, u)) : n = n.slice(2), o = (u = n.indexOf(".")) >= 0, t = e.constructor, o && (u = (s = (n = n.replace(".", "")).length) - u, i = Z(t, new t(r), u, 2 * u)), u = l = (c = O(n, r, C)).length - 1; 0 === c[u]; --u) c.pop();
        return u < 0 ? new t(0 * e.s) : (e.e = _(c, l), e.d = c, g = !1, o && (e = B(e, i, 4 * s)), a && (e = e.times(Math.abs(a) < 54 ? b(2, a) : qe.pow(2, a))), g = !0, e)
      }

      function Y(e, n, r, t, i) {
        var u, o, s, a, c = e.precision,
          l = Math.ceil(c / 7);
        for (g = !1, a = r.times(r), s = new e(t);;) {
          if (o = B(s.times(a), new e(n++ * n++), c, 1), s = i ? t.plus(o) : t.minus(o), t = B(o.times(a), new e(n++ * n++), c, 1), void 0 !== (o = s.plus(t)).d[l]) {
            for (u = l; o.d[u] === s.d[u] && u--;);
            if (-1 == u) break
          }
          u = s, s = t, t = o, o = u
        }
        return g = !0, o.d.length = l + 1, o
      }

      function J(e, n) {
        for (var r = e; --n;) r *= e;
        return r
      }

      function K(e, n) {
        var r, t = n.s < 0,
          i = R(e, e.precision, 1),
          u = i.times(.5);
        if ((n = n.abs()).lte(u)) return o = t ? 4 : 1, n;
        if ((r = n.divToInt(i)).isZero()) o = t ? 3 : 2;
        else {
          if ((n = n.minus(r.times(i))).lte(u)) return o = U(r) ? t ? 2 : 3 : t ? 4 : 1, n;
          o = U(r) ? t ? 1 : 4 : t ? 3 : 2
        }
        return n.minus(i).abs()
      }

      function Q(e, n, r, t) {
        var i, o, s, l, f, d, g, m, p, h = e.constructor,
          v = void 0 !== r;
        if (v ? (M(r, 1, a), void 0 === t ? t = h.rounding : M(t, 0, 8)) : (r = h.precision, t = h.rounding), e.isFinite()) {
          for (v ? (i = 2, 16 == n ? r = 4 * r - 3 : 8 == n && (r = 3 * r - 2)) : i = n, (s = (g = k(e)).indexOf(".")) >= 0 && (g = g.replace(".", ""), (p = new h(1)).e = g.length - s, p.d = O(k(p), 10, i), p.e = p.d.length), o = f = (m = O(g, 10, i)).length; 0 == m[--f];) m.pop();
          if (m[0]) {
            if (s < 0 ? o-- : ((e = new h(e)).d = m, e.e = o, m = (e = B(e, p, r, t, 0, i)).d, o = e.e, d = u), s = m[r], l = i / 2, d = d || void 0 !== m[r + 1], d = t < 4 ? (void 0 !== s || d) && (0 === t || t === (e.s < 0 ? 3 : 2)) : s > l || s === l && (4 === t || d || 6 === t && 1 & m[r - 1] || t === (e.s < 0 ? 8 : 7)), m.length = r, d)
              for (; ++m[--r] > i - 1;) m[r] = 0, r || (++o, m.unshift(1));
            for (f = m.length; !m[f - 1]; --f);
            for (s = 0, g = ""; s < f; s++) g += c.charAt(m[s]);
            if (v) {
              if (f > 1)
                if (16 == n || 8 == n) {
                  for (s = 16 == n ? 4 : 3, --f; f % s; f++) g += "0";
                  for (f = (m = O(g, i, n)).length; !m[f - 1]; --f);
                  for (s = 1, g = "1."; s < f; s++) g += c.charAt(m[s])
                } else g = g.charAt(0) + "." + g.slice(1);
              g = g + (o < 0 ? "p" : "p+") + o
            } else if (o < 0) {
              for (; ++o;) g = "0" + g;
              g = "0." + g
            } else if (++o > f)
              for (o -= f; o--;) g += "0";
            else o < f && (g = g.slice(0, o) + "." + g.slice(o))
          } else g = v ? "0p+0" : "0";
          g = (16 == n ? "0x" : 2 == n ? "0b" : 8 == n ? "0o" : "") + g
        } else g = W(e);
        return e.s < 0 ? "-" + g : g
      }

      function X(e, n) {
        if (e.length > n) return e.length = n, !0
      }

      function ee(e) {
        return new this(e).abs()
      }

      function ne(e) {
        return new this(e).acos()
      }

      function re(e) {
        return new this(e).acosh()
      }

      function te(e, n) {
        return new this(e).plus(n)
      }

      function ie(e) {
        return new this(e).asin()
      }

      function ue(e) {
        return new this(e).asinh()
      }

      function oe(e) {
        return new this(e).atan()
      }

      function se(e) {
        return new this(e).atanh()
      }

      function ae(e, n) {
        e = new this(e), n = new this(n);
        var r, t = this.precision,
          i = this.rounding,
          u = t + 4;
        return e.s && n.s ? e.d || n.d ? !n.d || e.isZero() ? (r = n.s < 0 ? R(this, t, i) : new this(0)).s = e.s : !e.d || n.isZero() ? (r = R(this, u, 1).times(.5)).s = e.s : n.s < 0 ? (this.precision = u, this.rounding = 1, r = this.atan(B(e, n, u, 1)), n = R(this, u, 1), this.precision = t, this.rounding = i, r = e.s < 0 ? r.minus(n) : r.plus(n)) : r = this.atan(B(e, n, u, 1)) : (r = R(this, u, 1).times(n.s > 0 ? .25 : .75)).s = e.s : r = new this(NaN), r
      }

      function ce(e) {
        return new this(e).cbrt()
      }

      function le(e) {
        return P(e = new this(e), e.e + 1, 2)
      }

      function fe(e, n, r) {
        return new this(e).clamp(n, r)
      }

      function de(e) {
        if (!e || "object" != typeof e) throw Error(m + "Object expected");
        var n, r, t, i = !0 === e.defaults,
          u = ["precision", 1, a, "rounding", 0, 8, "toExpNeg", -s, 0, "toExpPos", 0, s, "maxE", 0, s, "minE", -s, 0, "modulo", 0, 9];
        for (n = 0; n < u.length; n += 3)
          if (r = u[n], i && (this[r] = d[r]), void 0 !== (t = e[r])) {
            if (!(D(t) === t && t >= u[n + 1] && t <= u[n + 2])) throw Error(p + r + ": " + t);
            this[r] = t
          } if (r = "crypto", i && (this[r] = d[r]), void 0 !== (t = e[r])) {
          if (!0 !== t && !1 !== t && 0 !== t && 1 !== t) throw Error(p + r + ": " + t);
          if (t) {
            if ("undefined" == typeof crypto || !crypto || !crypto.getRandomValues && !crypto.randomBytes) throw Error(v);
            this[r] = !0
          } else this[r] = !1
        }
        return this
      }

      function ge(e) {
        return new this(e).cos()
      }

      function me(e) {
        return new this(e).cosh()
      }

      function pe(e, n) {
        return new this(e).div(n)
      }

      function he(e) {
        return new this(e).exp()
      }

      function ve(e) {
        return P(e = new this(e), e.e + 1, 3)
      }

      function ye() {
        var e, n, r = new this(0);
        for (g = !1, e = 0; e < arguments.length;)
          if ((n = new this(arguments[e++])).d) r.d && (r = r.plus(n.times(n)));
          else {
            if (n.s) return g = !0, new this(1 / 0);
            r = n
          } return g = !0, r.sqrt()
      }

      function De(e) {
        return e instanceof qe || e && e.toStringTag === y || !1
      }

      function be(e) {
        return new this(e).ln()
      }

      function we(e, n) {
        return new this(e).log(n)
      }

      function Fe(e) {
        return new this(e).log(2)
      }

      function Ee(e) {
        return new this(e).log(10)
      }

      function Ne() {
        return z(this, arguments, -1)
      }

      function Ce() {
        return z(this, arguments, 1)
      }

      function Se(e, n) {
        return new this(e).mod(n)
      }

      function xe(e, n) {
        return new this(e).mul(n)
      }

      function Te(e, n) {
        return new this(e).pow(n)
      }

      function Ae(e) {
        var n, r, t, i, u = 0,
          o = new this(1),
          s = [];
        if (void 0 === e ? e = this.precision : M(e, 1, a), t = Math.ceil(e / 7), this.crypto)
          if (crypto.getRandomValues)
            for (n = crypto.getRandomValues(new Uint32Array(t)); u < t;)(i = n[u]) >= 429e7 ? n[u] = crypto.getRandomValues(new Uint32Array(1))[0] : s[u++] = i % 1e7;
          else {
            if (!crypto.randomBytes) throw Error(v);
            for (n = crypto.randomBytes(t *= 4); u < t;)(i = n[u] + (n[u + 1] << 8) + (n[u + 2] << 16) + ((127 & n[u + 3]) << 24)) >= 214e7 ? crypto.randomBytes(4).copy(n, u) : (s.push(i % 1e7), u += 4);
            u = t / 4
          }
        else
          for (; u < t;) s[u++] = 1e7 * Math.random() | 0;
        for (e %= 7, (t = s[--u]) && e && (i = b(10, 7 - e), s[u] = (t / i | 0) * i); 0 === s[u]; u--) s.pop();
        if (u < 0) r = 0, s = [0];
        else {
          for (r = -1; 0 === s[0]; r -= 7) s.shift();
          for (t = 1, i = s[0]; i >= 10; i /= 10) t++;
          t < 7 && (r -= 7 - t)
        }
        return o.e = r, o.d = s, o
      }

      function Me(e) {
        return P(e = new this(e), e.e + 1, this.rounding)
      }

      function Ie(e) {
        return (e = new this(e)).d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN
      }

      function Oe(e) {
        return new this(e).sin()
      }

      function Be(e) {
        return new this(e).sinh()
      }

      function Pe(e) {
        return new this(e).sqrt()
      }

      function ke(e, n) {
        return new this(e).sub(n)
      }

      function _e() {
        var e = 0,
          n = arguments,
          r = new this(n[e]);
        for (g = !1; r.s && ++e < n.length;) r = r.plus(n[e]);
        return g = !0, P(r, this.precision, this.rounding)
      }

      function je(e) {
        return new this(e).tan()
      }

      function Re(e) {
        return new this(e).tanh()
      }

      function Le(e) {
        return P(e = new this(e), e.e + 1, 1)
      }
      T[Symbol.for("nodejs.util.inspect.custom")] = T.toString, T[Symbol.toStringTag] = "Decimal";
      var qe = T.constructor = function e(n) {
        var r, t, i;

        function u(e) {
          var n, r, t, i = this;
          if (!(i instanceof u)) return new u(e);
          if (i.constructor = u, De(e)) return i.s = e.s, void(g ? !e.d || e.e > u.maxE ? (i.e = NaN, i.d = null) : e.e < u.minE ? (i.e = 0, i.d = [0]) : (i.e = e.e, i.d = e.d.slice()) : (i.e = e.e, i.d = e.d ? e.d.slice() : e.d));
          if ("number" == (t = typeof e)) {
            if (0 === e) return i.s = 1 / e < 0 ? -1 : 1, i.e = 0, void(i.d = [0]);
            if (e < 0 ? (e = -e, i.s = -1) : i.s = 1, e === ~~e && e < 1e7) {
              for (n = 0, r = e; r >= 10; r /= 10) n++;
              return void(g ? n > u.maxE ? (i.e = NaN, i.d = null) : n < u.minE ? (i.e = 0, i.d = [0]) : (i.e = n, i.d = [e]) : (i.e = n, i.d = [e]))
            }
            return 0 * e != 0 ? (e || (i.s = NaN), i.e = NaN, void(i.d = null)) : V(i, e.toString())
          }
          if ("string" === t) return 45 === (r = e.charCodeAt(0)) ? (e = e.slice(1), i.s = -1) : (43 === r && (e = e.slice(1)), i.s = 1), N.test(e) ? V(i, e) : $(i, e);
          if ("bigint" === t) return e < 0 ? (e = -e, i.s = -1) : i.s = 1, V(i, e.toString());
          throw Error(p + e)
        }
        if (u.prototype = T, u.ROUND_UP = 0, u.ROUND_DOWN = 1, u.ROUND_CEIL = 2, u.ROUND_FLOOR = 3, u.ROUND_HALF_UP = 4, u.ROUND_HALF_DOWN = 5, u.ROUND_HALF_EVEN = 6, u.ROUND_HALF_CEIL = 7, u.ROUND_HALF_FLOOR = 8, u.EUCLID = 9, u.config = u.set = de, u.clone = e, u.isDecimal = De, u.abs = ee, u.acos = ne, u.acosh = re, u.add = te, u.asin = ie, u.asinh = ue, u.atan = oe, u.atanh = se, u.atan2 = ae, u.cbrt = ce, u.ceil = le, u.clamp = fe, u.cos = ge, u.cosh = me, u.div = pe, u.exp = he, u.floor = ve, u.hypot = ye, u.ln = be, u.log = we, u.log10 = Ee, u.log2 = Fe, u.max = Ne, u.min = Ce, u.mod = Se, u.mul = xe, u.pow = Te, u.random = Ae, u.round = Me, u.sign = Ie, u.sin = Oe, u.sinh = Be, u.sqrt = Pe, u.sub = ke, u.sum = _e, u.tan = je, u.tanh = Re, u.trunc = Le, void 0 === n && (n = {}), n && !0 !== n.defaults)
          for (i = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], r = 0; r < i.length;) n.hasOwnProperty(t = i[r++]) || (n[t] = this[t]);
        return u.config(n), u
      }(d);
      l = new qe(l), f = new qe(f);
      const Ze = qe;
      new Ze(10);
      var Ue = new Ze(0),
        ze = new Ze(-0),
        Ge = r(23514),
        He = r(18289);

      function We(e, n) {
        if ("function" == typeof e.repeat) return e.repeat(n);
        for (var r = new Array(n), t = 0; t < r.length; t++) r[t] = e;
        return r.join("")
      }

      function Ve(e, n, r, t) {
        e.get(n) || e.set(n, Object.create(null)), e.get(n)[r] = t
      }

      function $e(e, n, r) {
        for (var t = 0, i = Object.keys(r); t < i.length; t++) {
          var u = i[t];
          Ve(e, n, u, r[u])
        }
      }

      function Ye(e, n, r) {
        return Je(e, n, r)[r]
      }

      function Je(e, n) {
        for (var r = [], t = 2; t < arguments.length; t++) r[t - 2] = arguments[t];
        var i = e.get(n);
        if (!i) throw new TypeError("".concat(n, " InternalSlot has not been initialized"));
        return r.reduce((function(e, n) {
          return e[n] = i[n], e
        }), Object.create(null))
      }

      function Ke(e) {
        return "literal" === e.type
      }

      function Qe(e, n, r) {
        var t = r.value;
        Object.defineProperty(e, n, {
          configurable: !0,
          enumerable: !1,
          writable: !0,
          value: t
        })
      }

      function Xe(e, n, r) {
        Object.defineProperty(e, n, {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          value: r
        })
      }

      function en(e, n, r) {
        if (void 0 === r && (r = Error), !e) throw new r(n)
      }
      var nn = (0, He.B)((function() {
          for (var e, n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
          return new((e = Intl.NumberFormat).bind.apply(e, (0, Ge.__spreadArray)([void 0], n, !1)))
        }), {
          strategy: He.W.variadic
        }),
        rn = (0, He.B)((function() {
          for (var e, n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
          return new((e = Intl.DateTimeFormat).bind.apply(e, (0, Ge.__spreadArray)([void 0], n, !1)))
        }), {
          strategy: He.W.variadic
        }),
        tn = (0, He.B)((function() {
          for (var e, n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
          return new((e = Intl.PluralRules).bind.apply(e, (0, Ge.__spreadArray)([void 0], n, !1)))
        }), {
          strategy: He.W.variadic
        }),
        un = (0, He.B)((function() {
          for (var e, n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
          return new((e = Intl.Locale).bind.apply(e, (0, Ge.__spreadArray)([void 0], n, !1)))
        }), {
          strategy: He.W.variadic
        }),
        on = (0, He.B)((function() {
          for (var e, n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
          return new((e = Intl.ListFormat).bind.apply(e, (0, Ge.__spreadArray)([void 0], n, !1)))
        }), {
          strategy: He.W.variadic
        });

      function sn(e) {
        if ("symbol" == typeof e) throw TypeError("Cannot convert a Symbol value to a string");
        return String(e)
      }

      function an(e) {
        if ("number" == typeof e) return new qe(e);
        if (en("bigint" != typeof e && "symbol" != typeof e, "BigInt and Symbol are not supported", TypeError), void 0 === e) return new qe(NaN);
        if (null === e || 0 === e) return Ue;
        if (!0 === e) return new qe(1);
        if ("string" == typeof e) try {
          return new qe(e)
        } catch (e) {
          return new qe(NaN)
        }
        en("object" == typeof e, "object expected", TypeError);
        var n = Ln(e, "number");
        return en("object" != typeof n, "object expected", TypeError), an(n)
      }

      function cn(e) {
        return e.isFinite() ? e.abs().greaterThan(8640000000000001) ? new qe(NaN) : function(e) {
          var n = an(e);
          if (n.isNaN() || n.isZero()) return Ue;
          if (n.isFinite()) return n;
          var r = n.abs().floor();
          return n.isNegative() && (r = r.negated()), r
        }(e) : new qe(NaN)
      }

      function ln(e) {
        if (null == e) throw new TypeError("undefined/null cannot be converted to object");
        return Object(e)
      }

      function fn(e, n) {
        return Object.is ? Object.is(e, n) : e === n ? 0 !== e || 1 / e == 1 / n : e != e && n != n
      }

      function dn(e) {
        return new Array(e)
      }

      function gn(e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
      }

      function mn(e) {
        return null === e ? "Null" : void 0 === e ? "Undefined" : "function" == typeof e || "object" == typeof e ? "Object" : "number" == typeof e ? "Number" : "boolean" == typeof e ? "Boolean" : "string" == typeof e ? "String" : "symbol" == typeof e ? "Symbol" : "bigint" == typeof e ? "BigInt" : void 0
      }
      var pn = 864e5;

      function hn(e, n) {
        return e - Math.floor(e / n) * n
      }

      function vn(e) {
        return Math.floor(e / pn)
      }

      function yn(e) {
        return hn(vn(e) + 4, 7)
      }

      function Dn(e) {
        return Date.UTC(e, 0) / pn
      }

      function bn(e) {
        return Date.UTC(e, 0)
      }

      function wn(e) {
        return new Date(e).getUTCFullYear()
      }

      function Fn(e) {
        return e % 4 != 0 ? 365 : e % 100 != 0 ? 366 : e % 400 != 0 ? 365 : 366
      }

      function En(e) {
        return vn(e) - Dn(wn(e))
      }

      function Nn(e) {
        return 365 === Fn(wn(e)) ? 0 : 1
      }

      function Cn(e) {
        var n = En(e),
          r = Nn(e);
        if (n >= 0 && n < 31) return 0;
        if (n < 59 + r) return 1;
        if (n < 90 + r) return 2;
        if (n < 120 + r) return 3;
        if (n < 151 + r) return 4;
        if (n < 181 + r) return 5;
        if (n < 212 + r) return 6;
        if (n < 243 + r) return 7;
        if (n < 273 + r) return 8;
        if (n < 304 + r) return 9;
        if (n < 334 + r) return 10;
        if (n < 365 + r) return 11;
        throw new Error("Invalid time")
      }

      function Sn(e) {
        var n = En(e),
          r = Cn(e),
          t = Nn(e);
        if (0 === r) return n + 1;
        if (1 === r) return n - 30;
        if (2 === r) return n - 58 - t;
        if (3 === r) return n - 89 - t;
        if (4 === r) return n - 119 - t;
        if (5 === r) return n - 150 - t;
        if (6 === r) return n - 180 - t;
        if (7 === r) return n - 211 - t;
        if (8 === r) return n - 242 - t;
        if (9 === r) return n - 272 - t;
        if (10 === r) return n - 303 - t;
        if (11 === r) return n - 333 - t;
        throw new Error("Invalid time")
      }
      var xn = 24,
        Tn = 60,
        An = 60,
        Mn = 1e3,
        In = Mn * An,
        On = In * Tn;

      function Bn(e) {
        return hn(Math.floor(e / On), xn)
      }

      function Pn(e) {
        return hn(Math.floor(e / In), Tn)
      }

      function kn(e) {
        return hn(Math.floor(e / Mn), An)
      }

      function _n(e) {
        return "function" == typeof e
      }

      function jn(e, n, r) {
        if (!_n(e)) return !1;
        if (null == r ? void 0 : r.boundTargetFunction) return n instanceof(null == r ? void 0 : r.boundTargetFunction);
        if ("object" != typeof n) return !1;
        var t = e.prototype;
        if ("object" != typeof t) throw new TypeError("OrdinaryHasInstance called on an object with an invalid prototype property.");
        return Object.prototype.isPrototypeOf.call(t, n)
      }

      function Rn(e) {
        return hn(e, Mn)
      }

      function Ln(e, n) {
        if ("object" == typeof e && null != e) {
          var r = Symbol.toPrimitive in e ? e[Symbol.toPrimitive] : void 0,
            t = void 0;
          if (void 0 !== r) {
            void 0 === n ? t = "default" : "string" === n ? t = "string" : (en("number" === n, 'preferredType must be "string" or "number"'), t = "number");
            var i = r.call(e, t);
            if ("object" != typeof i) return i;
            throw new TypeError("Cannot convert exotic object to primitive.")
          }
          return void 0 === n && (n = "number"),
            function(e, n) {
              for (var r = 0, t = "string" === n ? ["toString", "valueOf"] : ["valueOf", "toString"]; r < t.length; r++) {
                var i = e[t[r]];
                if (_n(i)) {
                  var u = i.call(e);
                  if ("object" != typeof u) return u
                }
              }
              throw new TypeError("Cannot convert object to primitive value")
            }(e, n)
        }
        return e
      }

      function qn(e) {
        return void 0 === e ? Object.create(null) : ln(e)
      }

      function Zn(e, n, r, t) {
        if (void 0 === e) return t;
        var i = Number(e);
        if (isNaN(i) || i < n || i > r) throw new RangeError("".concat(i, " is outside of range [").concat(n, ", ").concat(r, "]"));
        return Math.floor(i)
      }

      function Un(e, n, r, t, i) {
        return Zn(e[n], r, t, i)
      }

      function zn(e, n, r, t, i) {
        if ("object" != typeof e) throw new TypeError("Options must be an object");
        var u = e[n];
        if (void 0 !== u) {
          if ("boolean" !== r && "string" !== r) throw new TypeError("invalid type");
          if ("boolean" === r && (u = Boolean(u)), "string" === r && (u = sn(u)), void 0 !== t && !t.filter((function(e) {
              return e == u
            })).length) throw new RangeError("".concat(u, " is not within ").concat(t.join(", ")));
          return u
        }
        return i
      }

      function Gn(e) {
        if (void 0 === e) return Object.create(null);
        if ("object" == typeof e) return e;
        throw new TypeError("Options must be an object")
      }

      function Hn(e, n, r, t, i, u) {
        var o = e[n];
        if (void 0 === o) return u;
        if (!0 === o) return t;
        if (!1 === Boolean(o)) return i;
        if ("true" === (o = sn(o)) || "false" === o) return u;
        if (-1 === (r || []).indexOf(o)) throw new RangeError("Invalid value ".concat(o));
        return o
      }
      var Wn = ["angle-degree", "area-acre", "area-hectare", "concentr-percent", "digital-bit", "digital-byte", "digital-gigabit", "digital-gigabyte", "digital-kilobit", "digital-kilobyte", "digital-megabit", "digital-megabyte", "digital-petabyte", "digital-terabit", "digital-terabyte", "duration-day", "duration-hour", "duration-millisecond", "duration-minute", "duration-month", "duration-second", "duration-week", "duration-year", "length-centimeter", "length-foot", "length-inch", "length-kilometer", "length-meter", "length-mile-scandinavian", "length-mile", "length-millimeter", "length-yard", "mass-gram", "mass-kilogram", "mass-ounce", "mass-pound", "mass-stone", "temperature-celsius", "temperature-fahrenheit", "volume-fluid-ounce", "volume-gallon", "volume-liter", "volume-milliliter"];

      function Vn(e) {
        return e.slice(e.indexOf("-") + 1)
      }
      var $n = Wn.map(Vn);

      function Yn(e) {
        return $n.indexOf(e) > -1
      }

      function Jn(e, n) {
        var r = n.zoneNamesFromData,
          t = n.uppercaseLinks,
          i = e.toUpperCase(),
          u = new Set,
          o = new Set;
        return r.map((function(e) {
          return e.toUpperCase()
        })).forEach((function(e) {
          return u.add(e)
        })), Object.keys(t).forEach((function(e) {
          o.add(e.toUpperCase()), u.add(t[e].toUpperCase())
        })), u.has(i) || o.has(i)
      }
      var Kn = /[^A-Z]/;

      function Qn(e) {
        return 3 === (e = e.replace(/([a-z])/g, (function(e, n) {
          return n.toUpperCase()
        }))).length && !Kn.test(e)
      }

      function Xn(e) {
        if (Yn(e = e.replace(/([A-Z])/g, (function(e, n) {
            return n.toLowerCase()
          })))) return !0;
        var n = e.split("-per-");
        if (2 !== n.length) return !1;
        var r = n[0],
          t = n[1];
        return !(!Yn(r) || !Yn(t))
      }

      function er(e, n, r, t) {
        if (e.eq(n)) return n;
        if (en(n.lessThan(e) && e.lessThan(r), "x should be between r1 and r2 but x=".concat(e, ", r1=").concat(n, ", r2=").concat(r)), "zero" === t) return n;
        if ("infinity" === t) return r;
        var i = e.minus(n),
          u = r.minus(e);
        return i.lessThan(u) ? n : u.lessThan(i) ? r : (en(i.eq(u), "d1 should be equal to d2"), "half-zero" === t ? n : "half-infinity" === t ? r : (en("half-even" === t, "unsignedRoundingMode should be half-even"), n.div(r.minus(n)).mod(2).isZero() ? n : r))
      }
      var nr = new Set(["unit", "exponentMinusSign", "minusSign", "plusSign", "percentSign", "exponentSeparator", "percent", "percentSign", "currency", "literal"]);

      function rr(e, n, r) {
        for (var t = (0, r.getInternalSlots)(e), i = t.dataLocaleData.numbers.symbols[t.numberingSystem], u = new RegExp("s?[".concat(i.rangeSign, "]s?")), o = n.findIndex((function(e) {
            return "literal" === e.type && u.test(e.value)
          })), s = [], a = o - 1; a >= 0 && nr.has(n[a].type); a--) s.unshift(n[a]);
        if (Array.from(s.map((function(e) {
            return e.value
          })).join("")).length > 1) return (c = Array.from(n)).splice(o - s.length, s.length), c;
        var c, l = [];
        for (a = o + 1; a < n.length && nr.has(n[a].type); a++) l.push(n[a]);
        return Array.from(l.map((function(e) {
          return e.value
        })).join("")).length > 1 ? ((c = Array.from(n)).splice(o + 1, l.length), c) : n
      }

      function tr(e, n) {
        var r = e.notation,
          t = e.dataLocaleData,
          i = e.numberingSystem;
        switch (r) {
          case "standard":
            return 0;
          case "scientific":
            return n.toNumber();
          case "engineering":
            return n.div(3).floor().times(3).toNumber();
          default:
            en("compact" === r, "Invalid notation");
            var u = e.compactDisplay,
              o = e.style,
              s = e.currencyDisplay,
              a = void 0;
            if ("currency" === o && "name" !== s) a = (t.numbers.currency[i] || t.numbers.currency[t.numbers.nu[0]]).short;
            else {
              var c = t.numbers.decimal[i] || t.numbers.decimal[t.numbers.nu[0]];
              a = "long" === u ? c.long : c.short
            }
            if (!a) return 0;
            var l = Ze.pow(10, n).toString(),
              f = Object.keys(a);
            if (l < f[0]) return 0;
            if (l > f[f.length - 1]) return f[f.length - 1].length - 1;
            var d = f.indexOf(l);
            if (-1 === d) return 0;
            var g = f[d];
            return "0" === a[g].other ? 0 : g.length - a[g].other.match(/0+/)[0].length
        }
      }
      Ze.set({
        toExpPos: 100
      });
      var ir = {
          ceil: "zero",
          floor: "infinity",
          expand: "infinity",
          trunc: "zero",
          halfCeil: "half-zero",
          halfFloor: "half-infinity",
          halfExpand: "half-infinity",
          halfTrunc: "half-zero",
          halfEven: "half-even"
        },
        ur = {
          ceil: "infinity",
          floor: "zero",
          expand: "infinity",
          trunc: "zero",
          halfCeil: "half-infinity",
          halfFloor: "half-zero",
          halfExpand: "half-infinity",
          halfTrunc: "half-zero",
          halfEven: "half-even"
        };

      function or(e, n) {
        return n ? ir[e] : ur[e]
      }

      function sr(e, n) {
        return e.times(Ze.pow(10, -n))
      }

      function ar(e, n, r, t, i) {
        var u, o, s, a, c = r,
          l = function(e, n, r) {
            var t = e.times(Ze.pow(10, n)).floor().div(r).floor().times(r);
            return {
              n1: t,
              r1: sr(t, n)
            }
          }(e, c, t),
          f = l.n1,
          d = l.r1,
          g = function(e, n, r) {
            var t = e.times(Ze.pow(10, n)).ceil().div(r).ceil().times(r);
            return {
              n2: t,
              r2: sr(t, n)
            }
          }(e, c, t),
          m = g.n2,
          p = g.r2;
        if (er(e, d, p, i).eq(d) ? (u = f, o = d) : (u = m, o = p), s = u.isZero() ? "0" : u.toString(), 0 !== c) {
          var h = s.length;
          h <= c && (s = We("0", c - h + 1) + s, h = c + 1);
          var v = s.slice(0, h - c),
            y = s.slice(s.length - c);
          s = v + "." + y, a = v.length
        } else a = s.length;
        for (var D = r - n; D > 0 && "0" === s[s.length - 1];) s = s.slice(0, s.length - 1), D--;
        return "." === s[s.length - 1] && (s = s.slice(0, s.length - 1)), {
          formattedString: s,
          roundedNumber: o,
          integerDigitsCount: a,
          roundingMagnitude: -c
        }
      }

      function cr(e, n, r, t) {
        var i, u, o, s, a = r;
        if (e.isZero()) i = We("0", a), u = 0, o = Ue;
        else {
          var c = function(e, n) {
              for (var r = Ze.pow(10, n), t = Ze.pow(10, n - 1), i = e.div(t).log(10).plus(n).minus(1).ceil();;) {
                var u = e.div(Ze.pow(10, i.minus(n).plus(1))).floor();
                if (u.lessThan(r) && u.greaterThanOrEqualTo(t)) {
                  var o = u.times(Ze.pow(10, i.minus(n).plus(1)));
                  if (o.lessThanOrEqualTo(e)) return {
                    n1: u,
                    e1: i,
                    r1: o
                  }
                }
                i = i.minus(1)
              }
            }(e, a),
            l = c.n1,
            f = c.e1,
            d = c.r1,
            g = function(e, n) {
              for (var r = Ze.pow(10, n), t = Ze.pow(10, n - 1), i = e.div(r).log(10).plus(n).minus(1).floor();;) {
                var u = e.div(Ze.pow(10, i.minus(n).plus(1))).ceil();
                if (u.lessThan(r) && u.greaterThanOrEqualTo(t)) {
                  var o = u.times(Ze.pow(10, i.minus(n).plus(1)));
                  if (o.greaterThanOrEqualTo(e)) return {
                    n2: u,
                    e2: i,
                    r2: o
                  }
                }
                i = i.plus(1)
              }
            }(e, a),
            m = g.n2,
            p = g.e2,
            h = g.r2,
            v = void 0;
          er(e, d, h, t).eq(d) ? (v = l, u = f.toNumber(), o = d) : (v = m, u = p.toNumber(), o = h), i = v.toString()
        }
        if (u >= a - 1 ? (i += We("0", u - a + 1), s = u + 1) : u >= 0 ? (i = i.slice(0, u + 1) + "." + i.slice(i.length - (a - (u + 1))), s = u + 1) : (en(u < 0, "e should be less than 0"), i = "0." + We("0", -u - 1) + i, s = 1), i.includes(".") && r > n) {
          for (var y = r - n; y > 0 && "0" === i[i.length - 1];) i = i.slice(0, i.length - 1), y--;
          "." === i[i.length - 1] && (i = i.slice(0, i.length - 1))
        }
        return {
          formattedString: i,
          roundedNumber: o,
          integerDigitsCount: s,
          roundingMagnitude: u
        }
      }

      function lr(e, n) {
        var r, t, i = n;
        i.isZero() && i.isNegative() ? (r = "negative", i = Ue) : (en(i.isFinite(), "NumberFormatDigitInternalSlots value is not finite"), "negative" == (r = i.lessThan(0) ? "negative" : "positive") && (i = i.negated()));
        var u = e.roundingType,
          o = or(e.roundingMode, "negative" === r);
        switch (u) {
          case "significantDigits":
            t = cr(i, e.minimumSignificantDigits, e.maximumSignificantDigits, o);
            break;
          case "fractionDigits":
            t = ar(i, e.minimumFractionDigits, e.maximumFractionDigits, e.roundingIncrement, o);
            break;
          default:
            var s = cr(i, e.minimumSignificantDigits, e.maximumSignificantDigits, o),
              a = ar(i, e.minimumFractionDigits, e.maximumFractionDigits, e.roundingIncrement, o);
            "morePrecision" === e.roundingType ? t = s.roundingMagnitude <= a.roundingMagnitude ? s : a : (en("lessPrecision" === e.roundingType, "Invalid roundingType"), t = s.roundingMagnitude <= a.roundingMagnitude ? a : s)
        }
        i = t.roundedNumber;
        var c = t.formattedString;
        if ("stripIfInteger" === e.trailingZeroDisplay && i.isInteger()) {
          var l = c.indexOf(".");
          l > -1 && (c = c.slice(0, l))
        }
        var f = t.integerDigitsCount,
          d = e.minimumIntegerDigits;
        return f < d && (c = We("0", d - f) + c), "negative" === r && (i = i.isZero() ? ze : i.negated()), {
          roundedNumber: i,
          formattedString: c
        }
      }

      function fr(e, n) {
        if (n.isZero()) return [0, 0];
        n.isNegative() && (n = n.negated());
        var r = n.log(10).floor(),
          t = tr(e, r),
          i = lr(e, n = n.times(Ze.pow(10, -t)));
        return i.roundedNumber.isZero() || i.roundedNumber.log(10).floor().eq(r.minus(t)) ? [t, r.toNumber()] : [tr(e, r.plus(1)), r.plus(1).toNumber()]
      }

      function dr(e, n) {
        var r = n.currencyDigitsData;
        return gn(r, e) ? r[e] : 2
      }
      Ze.set({
        toExpPos: 100
      });
      var gr = /[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20BF\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC1\uFDFC\uFDFD\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDE8\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEE0-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF73\uDF80-\uDFD8\uDFE0-\uDFEB]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDD78\uDD7A-\uDDCB\uDDCD-\uDE53\uDE60-\uDE6D\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6\uDF00-\uDF92\uDF94-\uDFCA]/,
        mr = {
          adlm: ["𞥐", "𞥑", "𞥒", "𞥓", "𞥔", "𞥕", "𞥖", "𞥗", "𞥘", "𞥙"],
          ahom: ["𑜰", "𑜱", "𑜲", "𑜳", "𑜴", "𑜵", "𑜶", "𑜷", "𑜸", "𑜹"],
          arab: ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"],
          arabext: ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"],
          bali: ["᭐", "᭑", "᭒", "᭓", "᭔", "᭕", "᭖", "᭗", "᭘", "᭙"],
          beng: ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"],
          bhks: ["𑱐", "𑱑", "𑱒", "𑱓", "𑱔", "𑱕", "𑱖", "𑱗", "𑱘", "𑱙"],
          brah: ["𑁦", "𑁧", "𑁨", "𑁩", "𑁪", "𑁫", "𑁬", "𑁭", "𑁮", "𑁯"],
          cakm: ["𑄶", "𑄷", "𑄸", "𑄹", "𑄺", "𑄻", "𑄼", "𑄽", "𑄾", "𑄿"],
          cham: ["꩐", "꩑", "꩒", "꩓", "꩔", "꩕", "꩖", "꩗", "꩘", "꩙"],
          deva: ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"],
          diak: ["𑥐", "𑥑", "𑥒", "𑥓", "𑥔", "𑥕", "𑥖", "𑥗", "𑥘", "𑥙"],
          fullwide: ["０", "１", "２", "３", "４", "５", "６", "７", "８", "９"],
          gong: ["𑶠", "𑶡", "𑶢", "𑶣", "𑶤", "𑶥", "𑶦", "𑶧", "𑶨", "𑶩"],
          gonm: ["𑵐", "𑵑", "𑵒", "𑵓", "𑵔", "𑵕", "𑵖", "𑵗", "𑵘", "𑵙"],
          gujr: ["૦", "૧", "૨", "૩", "૪", "૫", "૬", "૭", "૮", "૯"],
          guru: ["੦", "੧", "੨", "੩", "੪", "੫", "੬", "੭", "੮", "੯"],
          hanidec: ["〇", "一", "二", "三", "四", "五", "六", "七", "八", "九"],
          hmng: ["𖭐", "𖭑", "𖭒", "𖭓", "𖭔", "𖭕", "𖭖", "𖭗", "𖭘", "𖭙"],
          hmnp: ["𞅀", "𞅁", "𞅂", "𞅃", "𞅄", "𞅅", "𞅆", "𞅇", "𞅈", "𞅉"],
          java: ["꧐", "꧑", "꧒", "꧓", "꧔", "꧕", "꧖", "꧗", "꧘", "꧙"],
          kali: ["꤀", "꤁", "꤂", "꤃", "꤄", "꤅", "꤆", "꤇", "꤈", "꤉"],
          khmr: ["០", "១", "២", "៣", "៤", "៥", "៦", "៧", "៨", "៩"],
          knda: ["೦", "೧", "೨", "೩", "೪", "೫", "೬", "೭", "೮", "೯"],
          lana: ["᪀", "᪁", "᪂", "᪃", "᪄", "᪅", "᪆", "᪇", "᪈", "᪉"],
          lanatham: ["᪐", "᪑", "᪒", "᪓", "᪔", "᪕", "᪖", "᪗", "᪘", "᪙"],
          laoo: ["໐", "໑", "໒", "໓", "໔", "໕", "໖", "໗", "໘", "໙"],
          lepc: ["᪐", "᪑", "᪒", "᪓", "᪔", "᪕", "᪖", "᪗", "᪘", "᪙"],
          limb: ["᥆", "᥇", "᥈", "᥉", "᥊", "᥋", "᥌", "᥍", "᥎", "᥏"],
          mathbold: ["𝟎", "𝟏", "𝟐", "𝟑", "𝟒", "𝟓", "𝟔", "𝟕", "𝟖", "𝟗"],
          mathdbl: ["𝟘", "𝟙", "𝟚", "𝟛", "𝟜", "𝟝", "𝟞", "𝟟", "𝟠", "𝟡"],
          mathmono: ["𝟶", "𝟷", "𝟸", "𝟹", "𝟺", "𝟻", "𝟼", "𝟽", "𝟾", "𝟿"],
          mathsanb: ["𝟬", "𝟭", "𝟮", "𝟯", "𝟰", "𝟱", "𝟲", "𝟳", "𝟴", "𝟵"],
          mathsans: ["𝟢", "𝟣", "𝟤", "𝟥", "𝟦", "𝟧", "𝟨", "𝟩", "𝟪", "𝟫"],
          mlym: ["൦", "൧", "൨", "൩", "൪", "൫", "൬", "൭", "൮", "൯"],
          modi: ["𑙐", "𑙑", "𑙒", "𑙓", "𑙔", "𑙕", "𑙖", "𑙗", "𑙘", "𑙙"],
          mong: ["᠐", "᠑", "᠒", "᠓", "᠔", "᠕", "᠖", "᠗", "᠘", "᠙"],
          mroo: ["𖩠", "𖩡", "𖩢", "𖩣", "𖩤", "𖩥", "𖩦", "𖩧", "𖩨", "𖩩"],
          mtei: ["꯰", "꯱", "꯲", "꯳", "꯴", "꯵", "꯶", "꯷", "꯸", "꯹"],
          mymr: ["၀", "၁", "၂", "၃", "၄", "၅", "၆", "၇", "၈", "၉"],
          mymrshan: ["႐", "႑", "႒", "႓", "႔", "႕", "႖", "႗", "႘", "႙"],
          mymrtlng: ["꧰", "꧱", "꧲", "꧳", "꧴", "꧵", "꧶", "꧷", "꧸", "꧹"],
          newa: ["𑑐", "𑑑", "𑑒", "𑑓", "𑑔", "𑑕", "𑑖", "𑑗", "𑑘", "𑑙"],
          nkoo: ["߀", "߁", "߂", "߃", "߄", "߅", "߆", "߇", "߈", "߉"],
          olck: ["᱐", "᱑", "᱒", "᱓", "᱔", "᱕", "᱖", "᱗", "᱘", "᱙"],
          orya: ["୦", "୧", "୨", "୩", "୪", "୫", "୬", "୭", "୮", "୯"],
          osma: ["𐒠", "𐒡", "𐒢", "𐒣", "𐒤", "𐒥", "𐒦", "𐒧", "𐒨", "𐒩"],
          rohg: ["𐴰", "𐴱", "𐴲", "𐴳", "𐴴", "𐴵", "𐴶", "𐴷", "𐴸", "𐴹"],
          saur: ["꣐", "꣑", "꣒", "꣓", "꣔", "꣕", "꣖", "꣗", "꣘", "꣙"],
          segment: ["🯰", "🯱", "🯲", "🯳", "🯴", "🯵", "🯶", "🯷", "🯸", "🯹"],
          shrd: ["𑇐", "𑇑", "𑇒", "𑇓", "𑇔", "𑇕", "𑇖", "𑇗", "𑇘", "𑇙"],
          sind: ["𑋰", "𑋱", "𑋲", "𑋳", "𑋴", "𑋵", "𑋶", "𑋷", "𑋸", "𑋹"],
          sinh: ["෦", "෧", "෨", "෩", "෪", "෫", "෬", "෭", "෮", "෯"],
          sora: ["𑃰", "𑃱", "𑃲", "𑃳", "𑃴", "𑃵", "𑃶", "𑃷", "𑃸", "𑃹"],
          sund: ["᮰", "᮱", "᮲", "᮳", "᮴", "᮵", "᮶", "᮷", "᮸", "᮹"],
          takr: ["𑛀", "𑛁", "𑛂", "𑛃", "𑛄", "𑛅", "𑛆", "𑛇", "𑛈", "𑛉"],
          talu: ["᧐", "᧑", "᧒", "᧓", "᧔", "᧕", "᧖", "᧗", "᧘", "᧙"],
          tamldec: ["௦", "௧", "௨", "௩", "௪", "௫", "௬", "௭", "௮", "௯"],
          telu: ["౦", "౧", "౨", "౩", "౪", "౫", "౬", "౭", "౮", "౯"],
          thai: ["๐", "๑", "๒", "๓", "๔", "๕", "๖", "๗", "๘", "๙"],
          tibt: ["༠", "༡", "༢", "༣", "༤", "༥", "༦", "༧", "༨", "༩"],
          tirh: ["𑓐", "𑓑", "𑓒", "𑓓", "𑓔", "𑓕", "𑓖", "𑓗", "𑓘", "𑓙"],
          vaii: ["ᘠ", "ᘡ", "ᘢ", "ᘣ", "ᘤ", "ᘥ", "ᘦ", "ᘧ", "ᘨ", "ᘩ"],
          wara: ["𑣠", "𑣡", "𑣢", "𑣣", "𑣤", "𑣥", "𑣦", "𑣧", "𑣨", "𑣩"],
          wcho: ["𞋰", "𞋱", "𞋲", "𞋳", "𞋴", "𞋵", "𞋶", "𞋷", "𞋸", "𞋹"]
        },
        pr = new RegExp("^".concat(gr.source)),
        hr = new RegExp("".concat(gr.source, "$")),
        vr = /[#0](?:[\.,][#0]+)*/g;

      function yr(e, n, r, t) {
        var i, u, o, s = e.sign,
          a = e.exponent,
          c = e.magnitude,
          l = t.notation,
          f = t.style,
          d = t.numberingSystem,
          g = n.numbers.nu[0],
          m = null;
        if ("compact" === l && c && (m = function(e, n, r, t, i, u, o) {
            var s, a, c = e.roundedNumber,
              l = e.sign,
              f = e.magnitude,
              d = String(Math.pow(10, f)),
              g = r.numbers.nu[0];
            if ("currency" === t && "name" !== u) {
              var m = null === (s = ((p = r.numbers.currency)[o] || p[g]).short) || void 0 === s ? void 0 : s[d];
              if (!m) return null;
              a = wr(n, c.toNumber(), m)
            } else {
              var p, h = ((p = r.numbers.decimal)[o] || p[g])[i][d];
              if (!h) return null;
              a = wr(n, c.toNumber(), h)
            }
            return "0" === a ? null : a = br(a, l).replace(/([^\s;\-\+\d¤]+)/g, "{c:$1}").replace(/0+/, "0")
          }(e, r, n, f, t.compactDisplay, t.currencyDisplay, d)), "currency" === f && "name" !== t.currencyDisplay) {
          var p = n.currencies[t.currency];
          if (p) switch (t.currencyDisplay) {
            case "code":
              u = t.currency;
              break;
            case "symbol":
              u = p.symbol;
              break;
            default:
              u = p.narrow
          } else u = t.currency
        }
        o = m || ("decimal" === f || "unit" === f || "currency" === f && "name" === t.currencyDisplay ? br((n.numbers.decimal[d] || n.numbers.decimal[g]).standard, s) : br("currency" === f ? (v = n.numbers.currency[d] || n.numbers.currency[g])[t.currencySign] : n.numbers.percent[d] || n.numbers.percent[g], s));
        var h = vr.exec(o)[0];
        if (o = o.replace(vr, "{0}").replace(/'(.)'/g, "$1"), "currency" === f && "name" !== t.currencyDisplay) {
          var v, y = (v = n.numbers.currency[d] || n.numbers.currency[g]).currencySpacing.afterInsertBetween;
          y && !hr.test(u) && (o = o.replace("¤{0}", "¤".concat(y, "{0}")));
          var D = v.currencySpacing.beforeInsertBetween;
          D && !pr.test(u) && (o = o.replace("{0}¤", "{0}".concat(D, "¤")))
        }
        for (var b = o.split(/({c:[^}]+}|\{0\}|[¤%\-\+])/g), w = [], F = n.numbers.symbols[d] || n.numbers.symbols[g], E = 0, N = b; E < N.length; E++)
          if (z = N[E]) switch (z) {
            case "{0}":
              w.push.apply(w, Dr(F, e, l, a, d, !m && (null === (i = t.useGrouping) || void 0 === i || i), h, f, t.roundingIncrement, or(t.roundingMode, -1 === s)));
              break;
            case "-":
              w.push({
                type: "minusSign",
                value: F.minusSign
              });
              break;
            case "+":
              w.push({
                type: "plusSign",
                value: F.plusSign
              });
              break;
            case "%":
              w.push({
                type: "percentSign",
                value: F.percentSign
              });
              break;
            case "¤":
              w.push({
                type: "currency",
                value: u
              });
              break;
            default:
              /^\{c:/.test(z) ? w.push({
                type: "compact",
                value: z.substring(3, z.length - 1)
              }) : w.push({
                type: "literal",
                value: z
              })
          }
        switch (f) {
          case "currency":
            if ("name" === t.currencyDisplay) {
              var C, S = (n.numbers.currency[d] || n.numbers.currency[g]).unitPattern,
                x = n.currencies[t.currency];
              C = x ? wr(r, e.roundedNumber.times(Ze.pow(10, a)).toNumber(), x.displayName) : t.currency;
              for (var T = [], A = 0, M = S.split(/(\{[01]\})/g); A < M.length; A++) switch (z = M[A]) {
                case "{0}":
                  T.push.apply(T, w);
                  break;
                case "{1}":
                  T.push({
                    type: "currency",
                    value: C
                  });
                  break;
                default:
                  z && T.push({
                    type: "literal",
                    value: z
                  })
              }
              return T
            }
            return w;
          case "unit":
            var I = t.unit,
              O = t.unitDisplay,
              B = n.units.simple[I];
            if (S = void 0, B) S = wr(r, e.roundedNumber.times(Ze.pow(10, a)).toNumber(), n.units.simple[I][O]);
            else {
              var P = I.split("-per-"),
                k = P[0],
                _ = P[1];
              B = n.units.simple[k];
              var j = wr(r, e.roundedNumber.times(Ze.pow(10, a)).toNumber(), n.units.simple[k][O]),
                R = n.units.simple[_].perUnit[O];
              if (R) S = R.replace("{0}", j);
              else {
                var L = n.units.compound.per[O],
                  q = wr(r, 1, n.units.simple[_][O]);
                S = S = L.replace("{0}", j).replace("{1}", q.replace("{0}", ""))
              }
            }
            T = [];
            for (var Z = 0, U = S.split(/(\s*\{0\}\s*)/); Z < U.length; Z++) {
              var z = U[Z],
                G = /^(\s*)\{0\}(\s*)$/.exec(z);
              G ? (G[1] && T.push({
                type: "literal",
                value: G[1]
              }), T.push.apply(T, w), G[2] && T.push({
                type: "literal",
                value: G[2]
              })) : z && T.push({
                type: "unit",
                value: z
              })
            }
            return T;
          default:
            return w
        }
      }

      function Dr(e, n, r, t, i, u, o, s, a, c) {
        var l = [],
          f = n.formattedString,
          d = n.roundedNumber;
        if (d.isNaN()) return [{
          type: "nan",
          value: f
        }];
        if (!d.isFinite()) return [{
          type: "infinity",
          value: f
        }];
        var g = mr[i];
        g && (f = f.replace(/\d/g, (function(e) {
          return g[+e] || e
        })));
        var m, p, h = f.indexOf(".");
        h > 0 ? (m = f.slice(0, h), p = f.slice(h + 1)) : m = f;
        var v = !1;
        if ("always" === u ? v = !0 : "min2" === u ? v = d.greaterThanOrEqualTo(1e4) : ("auto" === u || u) && (v = "compact" !== r || d.greaterThanOrEqualTo(1e4)), v) {
          var y = "currency" === s && null != e.currencyGroup ? e.currencyGroup : e.group,
            D = [],
            b = o.split(".")[0].split(","),
            w = 3,
            F = 3;
          b.length > 1 && (w = b[b.length - 1].length), b.length > 2 && (F = b[b.length - 2].length);
          var E = m.length - w;
          if (E > 0) {
            for (D.push(m.slice(E, E + w)), E -= F; E > 0; E -= F) D.push(m.slice(E, E + F));
            D.push(m.slice(0, E + F))
          } else D.push(m);
          for (; D.length > 0;) {
            var N = D.pop();
            l.push({
              type: "integer",
              value: N
            }), D.length > 0 && l.push({
              type: "group",
              value: y
            })
          }
        } else l.push({
          type: "integer",
          value: m
        });
        if (void 0 !== p) {
          var C = "currency" === s && null != e.currencyDecimal ? e.currencyDecimal : e.decimal;
          l.push({
            type: "decimal",
            value: C
          }, {
            type: "fraction",
            value: p
          })
        }
        if (("scientific" === r || "engineering" === r) && d.isFinite()) {
          l.push({
            type: "exponentSeparator",
            value: e.exponential
          }), t < 0 && (l.push({
            type: "exponentMinusSign",
            value: e.minusSign
          }), t = -t);
          var S = ar(new Ze(t), 0, 0, a, c);
          l.push({
            type: "exponentInteger",
            value: S.formattedString
          })
        }
        return l
      }

      function br(e, n) {
        e.indexOf(";") < 0 && (e = "".concat(e, ";-").concat(e));
        var r = e.split(";"),
          t = r[0],
          i = r[1];
        switch (n) {
          case 0:
            return t;
          case -1:
            return i;
          default:
            return i.indexOf("-") >= 0 ? i.replace(/-/g, "+") : "+".concat(t)
        }
      }

      function wr(e, n, r) {
        return r[e.select(n)] || r.other
      }

      function Fr(e, n) {
        var r = e.dataLocaleData.numbers.symbols[e.numberingSystem].approximatelySign;
        return n.push({
          type: "approximatelySign",
          value: r
        }), n
      }

      function Er(e, n) {
        var r, t, i, u = n,
          o = 0,
          s = e.pl,
          a = e.dataLocaleData,
          c = e.numberingSystem,
          l = a.numbers.symbols[c] || a.numbers.symbols[a.numbers.nu[0]],
          f = 0;
        if (u.isNaN()) t = l.nan;
        else if (u.isFinite()) {
          u.isZero() || (en(u.isFinite(), "Input must be a mathematical value"), "percent" == e.style && (u = u.times(100)), f = (r = fr(e, u))[0], o = r[1], u = u.times(Ze.pow(10, -f)));
          var d = lr(e, u);
          t = d.formattedString, u = d.roundedNumber
        } else t = l.infinity;
        var g = e.signDisplay;
        switch (g) {
          case "never":
            i = 0;
            break;
          case "auto":
            i = u.isPositive() || u.isNaN() ? 0 : -1;
            break;
          case "always":
            i = u.isPositive() || u.isNaN() ? 1 : -1;
            break;
          case "exceptZero":
            i = u.isZero() ? 0 : u.isNegative() ? -1 : 1;
            break;
          default:
            en("negative" === g, 'signDisplay must be "negative"'), i = u.isNegative() && !u.isZero() ? -1 : 0
        }
        return yr({
          roundedNumber: u,
          formattedString: t,
          exponent: f,
          magnitude: o,
          sign: i
        }, e.dataLocaleData, s, e)
      }

      function Nr(e, n) {
        return Er(e, n).map((function(e) {
          return e.value
        })).join("")
      }

      function Cr(e, n, r, t) {
        var i = t.getInternalSlots;
        en(!n.isNaN() && !r.isNaN(), "Input must be a number", RangeError);
        var u = i(e),
          o = Er(u, n),
          s = Er(u, r);
        if (Nr(u, n) === Nr(u, r)) {
          var a = Fr(u, o);
          return a.forEach((function(e) {
            e.source = "shared"
          })), a
        }
        var c = [];
        o.forEach((function(e) {
          e.source = "startRange", c.push(e)
        }));
        var l = u.dataLocaleData.numbers.symbols[u.numberingSystem].rangeSign;
        return c.push({
          type: "literal",
          value: l,
          source: "shared"
        }), s.forEach((function(e) {
          e.source = "endRange", c.push(e)
        })), rr(e, c, {
          getInternalSlots: i
        })
      }

      function Sr(e, n, r, t) {
        return Cr(e, n, r, {
          getInternalSlots: t.getInternalSlots
        }).map((function(e) {
          return e.value
        })).join("")
      }

      function xr(e, n, r, t) {
        return Cr(e, n, r, {
          getInternalSlots: t.getInternalSlots
        }).map((function(e, n) {
          return {
            type: e.type,
            value: e.value,
            source: e.source,
            result: n.toString()
          }
        }))
      }

      function Tr(e, n, r) {
        for (var t = Er(r.getInternalSlots(e), n), i = dn(0), u = 0, o = t; u < o.length; u++) {
          var s = o[u];
          i.push({
            type: s.type,
            value: s.value
          })
        }
        return i
      }
      var Ar, Mr, Ir = r(27353),
        Or = new Set([1, 2, 5, 10, 20, 25, 50, 100, 200, 250, 500, 1e3, 2e3, 2500, 5e3]);

      function Br(e, n, r, t, i) {
        var u = Un(n, "minimumIntegerDigits", 1, 21, 1),
          o = n.minimumFractionDigits,
          s = n.maximumFractionDigits,
          a = n.minimumSignificantDigits,
          c = n.maximumSignificantDigits;
        e.minimumIntegerDigits = u;
        var l = Un(n, "roundingIncrement", 1, 5e3, 1);
        en(Or.has(l), "Invalid rounding increment value: ".concat(l, ".\nValid values are ").concat(Array.from(Or).join(", "), "."));
        var f = zn(n, "roundingMode", "string", ["ceil", "floor", "expand", "trunc", "halfCeil", "halfFloor", "halfExpand", "halfTrunc", "halfEven"], "halfExpand"),
          d = zn(n, "roundingPriority", "string", ["auto", "morePrecision", "lessPrecision"], "auto"),
          g = zn(n, "trailingZeroDisplay", "string", ["auto", "stripIfInteger"], "auto");
        1 !== l && (t = r), e.roundingIncrement = l, e.roundingMode = f, e.trailingZeroDisplay = g;
        var m = void 0 !== a || void 0 !== c,
          p = void 0 !== o || void 0 !== s,
          h = !0,
          v = !0;
        if ("auto" === d && (h = m, (m || !p && "compact" === i) && (v = !1)), h && (m ? (e.minimumSignificantDigits = Zn(a, 1, 21, 1), e.maximumSignificantDigits = Zn(c, e.minimumSignificantDigits, 21, 21)) : (e.minimumSignificantDigits = 1, e.maximumSignificantDigits = 21)), v)
          if (p) {
            if (o = Zn(o, 0, 100, void 0), s = Zn(s, 0, 100, void 0), void 0 === o) en(void 0 !== s, "maximumFractionDigits must be defined"), o = Math.min(r, s);
            else if (void 0 === s) s = Math.max(t, o);
            else if (o > s) throw new RangeError("Invalid range, ".concat(o, " > ").concat(s));
            e.minimumFractionDigits = o, e.maximumFractionDigits = s
          } else e.minimumFractionDigits = r, e.maximumFractionDigits = t;
        h || v ? "morePrecision" === d ? (e.roundingType = "morePrecision", e.roundingPriority = "morePrecision") : "lessPrecision" === d ? (e.roundingType = "lessPrecision", e.roundingPriority = "lessPrecision") : m ? (e.roundingType = "significantDigits", e.roundingPriority = "auto") : (e.roundingType = "fractionDigits", e.roundingPriority = "auto") : (e.minimumFractionDigits = 0, e.maximumFractionDigits = 0, e.minimumSignificantDigits = 1, e.maximumSignificantDigits = 2, e.roundingType = "morePrecision", e.roundingPriority = "morePrecision"), 1 !== l && (en("fractionDigits" === e.roundingType, "Invalid roundingType", TypeError), en(e.maximumFractionDigits === e.minimumFractionDigits, "With roundingIncrement > 1, maximumFractionDigits and minimumFractionDigits must be equal.", RangeError))
      }

      function Pr(e, n) {
        void 0 === n && (n = Object.create(null));
        var r = zn(n, "style", "string", ["decimal", "percent", "currency", "unit"], "decimal");
        e.style = r;
        var t = zn(n, "currency", "string", void 0, void 0);
        en(void 0 === t || Qn(t), "Malformed currency code", RangeError), en("currency" !== r || void 0 !== t, "currency cannot be undefined", TypeError);
        var i = zn(n, "currencyDisplay", "string", ["code", "symbol", "narrowSymbol", "name"], "symbol"),
          u = zn(n, "currencySign", "string", ["standard", "accounting"], "standard"),
          o = zn(n, "unit", "string", void 0, void 0);
        en(void 0 === o || Xn(o), "Invalid unit argument for Intl.NumberFormat()", RangeError), en("unit" !== r || void 0 !== o, "unit cannot be undefined", TypeError);
        var s = zn(n, "unitDisplay", "string", ["short", "narrow", "long"], "short");
        "currency" === r && (e.currency = t.toUpperCase(), e.currencyDisplay = i, e.currencySign = u), "unit" === r && (e.unit = o, e.unitDisplay = s)
      }

      function kr(e, n, r, i) {
        var u = i.getInternalSlots,
          o = i.localeData,
          s = i.availableLocales,
          a = i.numberingSystemNames,
          c = i.getDefaultLocale,
          l = i.currencyDigitsData,
          f = t(n),
          d = qn(r),
          g = Object.create(null),
          m = zn(d, "localeMatcher", "string", ["lookup", "best fit"], "best fit");
        g.localeMatcher = m;
        var p = zn(d, "numberingSystem", "string", void 0, void 0);
        if (void 0 !== p && a.indexOf(p) < 0) throw RangeError("Invalid numberingSystems: ".concat(p));
        g.nu = p;
        var h = (0, Ir.ResolveLocale)(Array.from(s), f, g, ["nu"], o, c),
          v = o[h.dataLocale];
        en(!!v, "Missing locale data for ".concat(h.dataLocale));
        var y = u(e);
        y.locale = h.locale, y.dataLocale = h.dataLocale, y.numberingSystem = h.nu, y.dataLocaleData = v, Pr(y, d);
        var D, b, w = y.style,
          F = zn(d, "notation", "string", ["standard", "scientific", "engineering", "compact"], "standard");
        if (y.notation = F, "currency" === w && "standard" === F) {
          var E = dr(y.currency, {
            currencyDigitsData: l
          });
          D = E, b = E
        } else D = 0, b = "percent" === w ? 0 : 3;
        Br(y, d, D, b, F);
        var N = zn(d, "compactDisplay", "string", ["short", "long"], "short"),
          C = "auto";
        "compact" === F && (y.compactDisplay = N, C = "min2");
        var S = Hn(d, "useGrouping", ["min2", "auto", "always"], "always", !1, C);
        y.useGrouping = S;
        var x = zn(d, "signDisplay", "string", ["auto", "never", "always", "exceptZero", "negative"], "auto");
        return y.signDisplay = x, e
      }

      function _r(e) {
        for (var n = [], r = e.indexOf("{"), t = 0, i = 0, u = e.length; r < e.length && r > -1;) en((t = e.indexOf("}", r)) > r, "Invalid pattern ".concat(e)), r > i && n.push({
          type: "literal",
          value: e.substring(i, r)
        }), n.push({
          type: e.substring(r + 1, t),
          value: void 0
        }), i = t + 1, r = e.indexOf("{", i);
        return i < u && n.push({
          type: "literal",
          value: e.substring(i, u)
        }), n
      }

      function jr(e, n, r) {
        return void 0 !== r && zn(r = ln(r), "localeMatcher", "string", ["lookup", "best fit"], "best fit"), (0, Ir.LookupSupportedLocales)(Array.from(e), n)
      }

      function Rr(e) {
        return "MISSING_LOCALE_DATA" === e.type
      }

      function Lr(e) {
        var n = Ln(e, "number");
        if ("bigint" == typeof n) return new Ze(n);
        if (void 0 === n) return new Ze(NaN);
        if (!0 === n) return new Ze(1);
        if (!1 === n) return new Ze(0);
        if (null === n) return new Ze(0);
        try {
          return new Ze(n)
        } catch (e) {
          return new Ze(NaN)
        }
      }
      Mr = Error, (0, Ge.__extends)((function() {
          var e = null !== Mr && Mr.apply(this, arguments) || this;
          return e.type = "MISSING_LOCALE_DATA", e
        }), Mr),
        function(e) {
          e.startRange = "startRange", e.shared = "shared", e.endRange = "endRange"
        }(Ar || (Ar = {}))
    }
  }
]);