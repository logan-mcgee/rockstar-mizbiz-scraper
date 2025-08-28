try {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    e = (new t.Error).stack;
  e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "08f6365f-b936-4f7e-8ecb-84fad642fad0", t._sentryDebugIdIdentifier = "sentry-dbid-08f6365f-b936-4f7e-8ecb-84fad642fad0")
} catch (t) {} {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[(new t.Error).stack] = Object.assign({}, t._sentryModuleMetadata[(new t.Error).stack], {
    release: "1abf2adfc44dda687079577dcca1257a51fb3eb0",
    packageName: "@rockstargames/sites-red-dead-online",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "1abf2adfc44dda687079577dcca1257a51fb3eb0"
}, (self.webpackChunk_rockstargames_sites_red_dead_online = self.webpackChunk_rockstargames_sites_red_dead_online || []).push([
  [9048], {
    49048: (t, e, n) => {
      n.r(e), n.d(e, {
        add: () => N,
        addBusinessDays: () => I,
        addDays: () => Y,
        addHours: () => E,
        addISOWeekYears: () => U,
        addMilliseconds: () => P,
        addMinutes: () => Z,
        addMonths: () => O,
        addQuarters: () => _,
        addSeconds: () => J,
        addWeeks: () => K,
        addYears: () => V,
        areIntervalsOverlapping: () => tt,
        clamp: () => rt,
        closestIndexTo: () => at,
        closestTo: () => ot,
        compareAsc: () => it,
        compareDesc: () => st,
        constructFrom: () => v,
        constructNow: () => ut,
        daysToWeeks: () => ct,
        differenceInBusinessDays: () => ht,
        differenceInCalendarDays: () => z,
        differenceInCalendarISOWeekYears: () => mt,
        differenceInCalendarISOWeeks: () => gt,
        differenceInCalendarMonths: () => wt,
        differenceInCalendarQuarters: () => bt,
        differenceInCalendarWeeks: () => pt,
        differenceInCalendarYears: () => Mt,
        differenceInDays: () => Dt,
        differenceInHours: () => kt,
        differenceInISOWeekYears: () => St,
        differenceInMilliseconds: () => Yt,
        differenceInMinutes: () => Ot,
        differenceInMonths: () => Wt,
        differenceInQuarters: () => It,
        differenceInSeconds: () => Pt,
        differenceInWeeks: () => Et,
        differenceInYears: () => Ct,
        eachDayOfInterval: () => $t,
        eachHourOfInterval: () => Qt,
        eachMinuteOfInterval: () => Lt,
        eachMonthOfInterval: () => Rt,
        eachQuarterOfInterval: () => jt,
        eachWeekOfInterval: () => Bt,
        eachWeekendOfInterval: () => zt,
        eachWeekendOfMonth: () => Gt,
        eachWeekendOfYear: () => _t,
        eachYearOfInterval: () => Jt,
        endOfDay: () => Nt,
        endOfDecade: () => Kt,
        endOfHour: () => Vt,
        endOfISOWeek: () => ee,
        endOfISOWeekYear: () => ne,
        endOfMinute: () => re,
        endOfMonth: () => Ht,
        endOfQuarter: () => ae,
        endOfSecond: () => oe,
        endOfToday: () => ie,
        endOfTomorrow: () => se,
        endOfWeek: () => te,
        endOfYear: () => Ut,
        endOfYesterday: () => ue,
        format: () => Xe,
        formatDate: () => Xe,
        formatDistance: () => Be,
        formatDistanceStrict: () => ze,
        formatDistanceToNow: () => Ae,
        formatDistanceToNowStrict: () => Ge,
        formatDuration: () => Ze,
        formatISO: () => _e,
        formatISO9075: () => Je,
        formatISODuration: () => Ke,
        formatRFC3339: () => Ve,
        formatRFC7231: () => nn,
        formatRelative: () => rn,
        formatters: () => ke,
        fromUnixTime: () => an,
        getDate: () => on,
        getDay: () => sn,
        getDayOfYear: () => ye,
        getDaysInMonth: () => un,
        getDaysInYear: () => dn,
        getDecade: () => ln,
        getDefaultOptions: () => fn,
        getHours: () => hn,
        getISODay: () => mn,
        getISOWeek: () => be,
        getISOWeekYear: () => R,
        getISOWeeksInYear: () => gn,
        getMilliseconds: () => wn,
        getMinutes: () => yn,
        getMonth: () => bn,
        getOverlappingDaysInIntervals: () => pn,
        getQuarter: () => yt,
        getSeconds: () => Mn,
        getTime: () => Dn,
        getUnixTime: () => xn,
        getWeek: () => De,
        getWeekOfMonth: () => Tn,
        getWeekYear: () => pe,
        getWeeksInMonth: () => vn,
        getYear: () => Sn,
        hoursToMilliseconds: () => Yn,
        hoursToMinutes: () => On,
        hoursToSeconds: () => Nn,
        interval: () => Hn,
        intervalToDuration: () => Fn,
        intlFormat: () => Wn,
        intlFormatDistance: () => In,
        isAfter: () => Pn,
        isBefore: () => En,
        isDate: () => lt,
        isEqual: () => Cn,
        isExists: () => qn,
        isFirstDayOfMonth: () => $n,
        isFriday: () => Qn,
        isFuture: () => Ln,
        isLastDayOfMonth: () => Ft,
        isLeapYear: () => cn,
        isMatch: () => Qr,
        isMonday: () => Lr,
        isPast: () => Rr,
        isSameDay: () => dt,
        isSameHour: () => jr,
        isSameISOWeek: () => zr,
        isSameISOWeekYear: () => Ar,
        isSameMinute: () => Ur,
        isSameMonth: () => Zr,
        isSameQuarter: () => _r,
        isSameSecond: () => Kr,
        isSameWeek: () => Br,
        isSameYear: () => Vr,
        isSaturday: () => H,
        isSunday: () => F,
        isThisHour: () => ta,
        isThisISOWeek: () => ea,
        isThisMinute: () => na,
        isThisMonth: () => ra,
        isThisQuarter: () => aa,
        isThisSecond: () => oa,
        isThisWeek: () => ia,
        isThisYear: () => sa,
        isThursday: () => ua,
        isToday: () => ca,
        isTomorrow: () => da,
        isTuesday: () => la,
        isValid: () => ft,
        isWednesday: () => fa,
        isWeekend: () => W,
        isWithinInterval: () => ha,
        isYesterday: () => ga,
        lastDayOfDecade: () => wa,
        lastDayOfISOWeek: () => ba,
        lastDayOfISOWeekYear: () => pa,
        lastDayOfMonth: () => kn,
        lastDayOfQuarter: () => Ma,
        lastDayOfWeek: () => ya,
        lastDayOfYear: () => Da,
        lightFormat: () => Sa,
        lightFormatters: () => Te,
        longFormatters: () => He,
        max: () => et,
        milliseconds: () => Ya,
        millisecondsToHours: () => Oa,
        millisecondsToMinutes: () => Na,
        millisecondsToSeconds: () => Ha,
        min: () => nt,
        minutesToHours: () => Fa,
        minutesToMilliseconds: () => Wa,
        minutesToSeconds: () => Ia,
        monthsToQuarters: () => Pa,
        monthsToYears: () => Ea,
        nextDay: () => Ca,
        nextFriday: () => qa,
        nextMonday: () => $a,
        nextSaturday: () => Qa,
        nextSunday: () => La,
        nextThursday: () => Ra,
        nextTuesday: () => Xa,
        nextWednesday: () => ja,
        parse: () => $r,
        parseISO: () => Ba,
        parseJSON: () => Va,
        parsers: () => Fr,
        previousDay: () => to,
        previousFriday: () => eo,
        previousMonday: () => no,
        previousSaturday: () => ro,
        previousSunday: () => ao,
        previousThursday: () => oo,
        previousTuesday: () => io,
        previousWednesday: () => so,
        quartersToMonths: () => uo,
        quartersToYears: () => co,
        roundToNearestHours: () => lo,
        roundToNearestMinutes: () => fo,
        secondsToHours: () => ho,
        secondsToMilliseconds: () => mo,
        secondsToMinutes: () => go,
        set: () => yo,
        setDate: () => bo,
        setDay: () => Nr,
        setDayOfYear: () => po,
        setDefaultOptions: () => Mo,
        setHours: () => Do,
        setISODay: () => Hr,
        setISOWeek: () => Sr,
        setISOWeekYear: () => G,
        setMilliseconds: () => xo,
        setMinutes: () => To,
        setMonth: () => wo,
        setQuarter: () => ko,
        setSeconds: () => vo,
        setWeek: () => vr,
        setWeekYear: () => So,
        setYear: () => Yo,
        startOfDay: () => B,
        startOfDecade: () => Oo,
        startOfHour: () => Xr,
        startOfISOWeek: () => L,
        startOfISOWeekYear: () => A,
        startOfMinute: () => Gr,
        startOfMonth: () => At,
        startOfQuarter: () => Xt,
        startOfSecond: () => Jr,
        startOfToday: () => No,
        startOfTomorrow: () => Ho,
        startOfWeek: () => Q,
        startOfWeekYear: () => Me,
        startOfYear: () => Zt,
        startOfYesterday: () => Fo,
        sub: () => Io,
        subBusinessDays: () => Po,
        subDays: () => ma,
        subHours: () => Eo,
        subISOWeekYears: () => vt,
        subMilliseconds: () => Co,
        subMinutes: () => qo,
        subMonths: () => Wo,
        subQuarters: () => $o,
        subSeconds: () => Qo,
        subWeeks: () => Lo,
        subYears: () => Ro,
        toDate: () => S,
        transpose: () => Rn,
        weeksToDays: () => Xo,
        yearsToDays: () => jo,
        yearsToMonths: () => Bo,
        yearsToQuarters: () => zo
      });
      const r = 7,
        a = 365.2425,
        o = (Math.pow(10, 8), 6048e5),
        i = 864e5,
        s = 6e4,
        u = 36e5,
        c = 1e3,
        d = 525600,
        l = 43200,
        f = 1440,
        h = 60,
        m = 3,
        g = 12,
        w = 4,
        y = 3600,
        b = 60,
        p = 24 * y,
        M = 7 * p,
        D = p * a,
        x = D / 12,
        T = 3 * x,
        k = Symbol.for("constructDateFrom");

      function v(t, e) {
        return "function" == typeof t ? t(e) : t && "object" == typeof t && k in t ? t[k](e) : t instanceof Date ? new t.constructor(e) : new Date(e)
      }

      function S(t, e) {
        return v(e || t, t)
      }

      function Y(t, e, n) {
        const r = S(t, n?.in);
        return isNaN(e) ? v(n?.in || t, NaN) : e ? (r.setDate(r.getDate() + e), r) : r
      }

      function O(t, e, n) {
        const r = S(t, n?.in);
        if (isNaN(e)) return v(n?.in || t, NaN);
        if (!e) return r;
        const a = r.getDate(),
          o = v(n?.in || t, r.getTime());
        return o.setMonth(r.getMonth() + e + 1, 0), a >= o.getDate() ? o : (r.setFullYear(o.getFullYear(), o.getMonth(), a), r)
      }

      function N(t, e, n) {
        const {
          years: r = 0,
          months: a = 0,
          weeks: o = 0,
          days: i = 0,
          hours: s = 0,
          minutes: u = 0,
          seconds: c = 0
        } = e, d = S(t, n?.in), l = a || r ? O(d, a + 12 * r) : d, f = i || o ? Y(l, i + 7 * o) : l, h = 1e3 * (c + 60 * (u + 60 * s));
        return v(n?.in || t, +f + h)
      }

      function H(t, e) {
        return 6 === S(t, e?.in).getDay()
      }

      function F(t, e) {
        return 0 === S(t, e?.in).getDay()
      }

      function W(t, e) {
        const n = S(t, e?.in).getDay();
        return 0 === n || 6 === n
      }

      function I(t, e, n) {
        const r = S(t, n?.in),
          a = W(r, n);
        if (isNaN(e)) return v(n?.in, NaN);
        const o = r.getHours(),
          i = e < 0 ? -1 : 1,
          s = Math.trunc(e / 5);
        r.setDate(r.getDate() + 7 * s);
        let u = Math.abs(e % 5);
        for (; u > 0;) r.setDate(r.getDate() + i), W(r, n) || (u -= 1);
        return a && W(r, n) && 0 !== e && (H(r, n) && r.setDate(r.getDate() + (i < 0 ? 2 : -1)), F(r, n) && r.setDate(r.getDate() + (i < 0 ? 1 : -2))), r.setHours(o), r
      }

      function P(t, e, n) {
        return v(n?.in || t, +S(t) + e)
      }

      function E(t, e, n) {
        return P(t, e * u, n)
      }
      let C = {};

      function q() {
        return C
      }

      function $(t) {
        C = t
      }

      function Q(t, e) {
        const n = q(),
          r = e?.weekStartsOn ?? e?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0,
          a = S(t, e?.in),
          o = a.getDay(),
          i = (o < r ? 7 : 0) + o - r;
        return a.setDate(a.getDate() - i), a.setHours(0, 0, 0, 0), a
      }

      function L(t, e) {
        return Q(t, {
          ...e,
          weekStartsOn: 1
        })
      }

      function R(t, e) {
        const n = S(t, e?.in),
          r = n.getFullYear(),
          a = v(n, 0);
        a.setFullYear(r + 1, 0, 4), a.setHours(0, 0, 0, 0);
        const o = L(a),
          i = v(n, 0);
        i.setFullYear(r, 0, 4), i.setHours(0, 0, 0, 0);
        const s = L(i);
        return n.getTime() >= o.getTime() ? r + 1 : n.getTime() >= s.getTime() ? r : r - 1
      }

      function X(t) {
        const e = S(t),
          n = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
        return n.setUTCFullYear(e.getFullYear()), +t - +n
      }

      function j(t, ...e) {
        const n = v.bind(null, t || e.find((t => "object" == typeof t)));
        return e.map(n)
      }

      function B(t, e) {
        const n = S(t, e?.in);
        return n.setHours(0, 0, 0, 0), n
      }

      function z(t, e, n) {
        const [r, a] = j(n?.in, t, e), o = B(r), s = B(a), u = +o - X(o), c = +s - X(s);
        return Math.round((u - c) / i)
      }

      function A(t, e) {
        const n = R(t, e),
          r = v(e?.in || t, 0);
        return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), L(r)
      }

      function G(t, e, n) {
        let r = S(t, n?.in);
        const a = z(r, A(r, n)),
          o = v(n?.in || t, 0);
        return o.setFullYear(e, 0, 4), o.setHours(0, 0, 0, 0), r = A(o), r.setDate(r.getDate() + a), r
      }

      function U(t, e, n) {
        return G(t, R(t, n) + e, n)
      }

      function Z(t, e, n) {
        const r = S(t, n?.in);
        return r.setTime(r.getTime() + e * s), r
      }

      function _(t, e, n) {
        return O(t, 3 * e, n)
      }

      function J(t, e, n) {
        return P(t, 1e3 * e, n)
      }

      function K(t, e, n) {
        return Y(t, 7 * e, n)
      }

      function V(t, e, n) {
        return O(t, 12 * e, n)
      }

      function tt(t, e, n) {
        const [r, a] = [+S(t.start, n?.in), +S(t.end, n?.in)].sort(((t, e) => t - e)), [o, i] = [+S(e.start, n?.in), +S(e.end, n?.in)].sort(((t, e) => t - e));
        return n?.inclusive ? r <= i && o <= a : r < i && o < a
      }

      function et(t, e) {
        let n, r = e?.in;
        return t.forEach((t => {
          r || "object" != typeof t || (r = v.bind(null, t));
          const e = S(t, r);
          (!n || n < e || isNaN(+e)) && (n = e)
        })), v(r, n || NaN)
      }

      function nt(t, e) {
        let n, r = e?.in;
        return t.forEach((t => {
          r || "object" != typeof t || (r = v.bind(null, t));
          const e = S(t, r);
          (!n || n > e || isNaN(+e)) && (n = e)
        })), v(r, n || NaN)
      }

      function rt(t, e, n) {
        const [r, a, o] = j(n?.in, t, e.start, e.end);
        return nt([et([r, a], n), o], n)
      }

      function at(t, e) {
        const n = +S(t);
        if (isNaN(n)) return NaN;
        let r, a;
        return e.forEach(((t, e) => {
          const o = S(t);
          if (isNaN(+o)) return r = NaN, void(a = NaN);
          const i = Math.abs(n - +o);
          (null == r || i < a) && (r = e, a = i)
        })), r
      }

      function ot(t, e, n) {
        const [r, ...a] = j(n?.in, t, ...e), o = at(r, a);
        return "number" == typeof o && isNaN(o) ? v(r, NaN) : void 0 !== o ? a[o] : void 0
      }

      function it(t, e) {
        const n = +S(t) - +S(e);
        return n < 0 ? -1 : n > 0 ? 1 : n
      }

      function st(t, e) {
        const n = +S(t) - +S(e);
        return n > 0 ? -1 : n < 0 ? 1 : n
      }

      function ut(t) {
        return v(t, Date.now())
      }

      function ct(t) {
        const e = Math.trunc(t / r);
        return 0 === e ? 0 : e
      }

      function dt(t, e, n) {
        const [r, a] = j(n?.in, t, e);
        return +B(r) == +B(a)
      }

      function lt(t) {
        return t instanceof Date || "object" == typeof t && "[object Date]" === Object.prototype.toString.call(t)
      }

      function ft(t) {
        return !(!lt(t) && "number" != typeof t || isNaN(+S(t)))
      }

      function ht(t, e, n) {
        const [r, a] = j(n?.in, t, e);
        if (!ft(r) || !ft(a)) return NaN;
        const o = z(r, a),
          i = o < 0 ? -1 : 1,
          s = Math.trunc(o / 7);
        let u = 5 * s,
          c = Y(a, 7 * s);
        for (; !dt(r, c);) u += W(c, n) ? 0 : i, c = Y(c, i);
        return 0 === u ? 0 : u
      }

      function mt(t, e, n) {
        const [r, a] = j(n?.in, t, e);
        return R(r, n) - R(a, n)
      }

      function gt(t, e, n) {
        const [r, a] = j(n?.in, t, e), i = L(r), s = L(a), u = +i - X(i), c = +s - X(s);
        return Math.round((u - c) / o)
      }

      function wt(t, e, n) {
        const [r, a] = j(n?.in, t, e);
        return 12 * (r.getFullYear() - a.getFullYear()) + (r.getMonth() - a.getMonth())
      }

      function yt(t, e) {
        const n = S(t, e?.in);
        return Math.trunc(n.getMonth() / 3) + 1
      }

      function bt(t, e, n) {
        const [r, a] = j(n?.in, t, e);
        return 4 * (r.getFullYear() - a.getFullYear()) + (yt(r) - yt(a))
      }

      function pt(t, e, n) {
        const [r, a] = j(n?.in, t, e), i = Q(r, n), s = Q(a, n), u = +i - X(i), c = +s - X(s);
        return Math.round((u - c) / o)
      }

      function Mt(t, e, n) {
        const [r, a] = j(n?.in, t, e);
        return r.getFullYear() - a.getFullYear()
      }

      function Dt(t, e, n) {
        const [r, a] = j(n?.in, t, e), o = xt(r, a), i = Math.abs(z(r, a));
        r.setDate(r.getDate() - o * i);
        const s = o * (i - Number(xt(r, a) === -o));
        return 0 === s ? 0 : s
      }

      function xt(t, e) {
        const n = t.getFullYear() - e.getFullYear() || t.getMonth() - e.getMonth() || t.getDate() - e.getDate() || t.getHours() - e.getHours() || t.getMinutes() - e.getMinutes() || t.getSeconds() - e.getSeconds() || t.getMilliseconds() - e.getMilliseconds();
        return n < 0 ? -1 : n > 0 ? 1 : n
      }

      function Tt(t) {
        return e => {
          const n = (t ? Math[t] : Math.trunc)(e);
          return 0 === n ? 0 : n
        }
      }

      function kt(t, e, n) {
        const [r, a] = j(n?.in, t, e), o = (+r - +a) / u;
        return Tt(n?.roundingMethod)(o)
      }

      function vt(t, e, n) {
        return U(t, -e, n)
      }

      function St(t, e, n) {
        const [r, a] = j(n?.in, t, e), o = it(r, a), i = Math.abs(mt(r, a, n)), s = vt(r, o * i, n), u = o * (i - Number(it(s, a) === -o));
        return 0 === u ? 0 : u
      }

      function Yt(t, e) {
        return +S(t) - +S(e)
      }

      function Ot(t, e, n) {
        const r = Yt(t, e) / s;
        return Tt(n?.roundingMethod)(r)
      }

      function Nt(t, e) {
        const n = S(t, e?.in);
        return n.setHours(23, 59, 59, 999), n
      }

      function Ht(t, e) {
        const n = S(t, e?.in),
          r = n.getMonth();
        return n.setFullYear(n.getFullYear(), r + 1, 0), n.setHours(23, 59, 59, 999), n
      }

      function Ft(t, e) {
        const n = S(t, e?.in);
        return +Nt(n, e) == +Ht(n, e)
      }

      function Wt(t, e, n) {
        const [r, a, o] = j(n?.in, t, t, e), i = it(a, o), s = Math.abs(wt(a, o));
        if (s < 1) return 0;
        1 === a.getMonth() && a.getDate() > 27 && a.setDate(30), a.setMonth(a.getMonth() - i * s);
        let u = it(a, o) === -i;
        Ft(r) && 1 === s && 1 === it(r, o) && (u = !1);
        const c = i * (s - +u);
        return 0 === c ? 0 : c
      }

      function It(t, e, n) {
        const r = Wt(t, e, n) / 3;
        return Tt(n?.roundingMethod)(r)
      }

      function Pt(t, e, n) {
        const r = Yt(t, e) / 1e3;
        return Tt(n?.roundingMethod)(r)
      }

      function Et(t, e, n) {
        const r = Dt(t, e, n) / 7;
        return Tt(n?.roundingMethod)(r)
      }

      function Ct(t, e, n) {
        const [r, a] = j(n?.in, t, e), o = it(r, a), i = Math.abs(Mt(r, a));
        r.setFullYear(1584), a.setFullYear(1584);
        const s = o * (i - +(it(r, a) === -o));
        return 0 === s ? 0 : s
      }

      function qt(t, e) {
        const [n, r] = j(t, e.start, e.end);
        return {
          start: n,
          end: r
        }
      }

      function $t(t, e) {
        const {
          start: n,
          end: r
        } = qt(e?.in, t);
        let a = +n > +r;
        const o = a ? +n : +r,
          i = a ? r : n;
        i.setHours(0, 0, 0, 0);
        let s = e?.step ?? 1;
        if (!s) return [];
        s < 0 && (s = -s, a = !a);
        const u = [];
        for (; + i <= o;) u.push(v(n, i)), i.setDate(i.getDate() + s), i.setHours(0, 0, 0, 0);
        return a ? u.reverse() : u
      }

      function Qt(t, e) {
        const {
          start: n,
          end: r
        } = qt(e?.in, t);
        let a = +n > +r;
        const o = a ? +n : +r,
          i = a ? r : n;
        i.setMinutes(0, 0, 0);
        let s = e?.step ?? 1;
        if (!s) return [];
        s < 0 && (s = -s, a = !a);
        const u = [];
        for (; + i <= o;) u.push(v(n, i)), i.setHours(i.getHours() + s);
        return a ? u.reverse() : u
      }

      function Lt(t, e) {
        const {
          start: n,
          end: r
        } = qt(e?.in, t);
        n.setSeconds(0, 0);
        let a = +n > +r;
        const o = a ? +n : +r;
        let i = a ? r : n,
          s = e?.step ?? 1;
        if (!s) return [];
        s < 0 && (s = -s, a = !a);
        const u = [];
        for (; + i <= o;) u.push(v(n, i)), i = Z(i, s);
        return a ? u.reverse() : u
      }

      function Rt(t, e) {
        const {
          start: n,
          end: r
        } = qt(e?.in, t);
        let a = +n > +r;
        const o = a ? +n : +r,
          i = a ? r : n;
        i.setHours(0, 0, 0, 0), i.setDate(1);
        let s = e?.step ?? 1;
        if (!s) return [];
        s < 0 && (s = -s, a = !a);
        const u = [];
        for (; + i <= o;) u.push(v(n, i)), i.setMonth(i.getMonth() + s);
        return a ? u.reverse() : u
      }

      function Xt(t, e) {
        const n = S(t, e?.in),
          r = n.getMonth(),
          a = r - r % 3;
        return n.setMonth(a, 1), n.setHours(0, 0, 0, 0), n
      }

      function jt(t, e) {
        const {
          start: n,
          end: r
        } = qt(e?.in, t);
        let a = +n > +r;
        const o = a ? +Xt(n) : +Xt(r);
        let i = Xt(a ? r : n),
          s = e?.step ?? 1;
        if (!s) return [];
        s < 0 && (s = -s, a = !a);
        const u = [];
        for (; + i <= o;) u.push(v(n, i)), i = _(i, s);
        return a ? u.reverse() : u
      }

      function Bt(t, e) {
        const {
          start: n,
          end: r
        } = qt(e?.in, t);
        let a = +n > +r;
        const o = Q(a ? r : n, e),
          i = Q(a ? n : r, e);
        o.setHours(15), i.setHours(15);
        const s = +i.getTime();
        let u = o,
          c = e?.step ?? 1;
        if (!c) return [];
        c < 0 && (c = -c, a = !a);
        const d = [];
        for (; + u <= s;) u.setHours(0), d.push(v(n, u)), u = K(u, c), u.setHours(15);
        return a ? d.reverse() : d
      }

      function zt(t, e) {
        const {
          start: n,
          end: r
        } = qt(e?.in, t), a = $t({
          start: n,
          end: r
        }, e), o = [];
        let i = 0;
        for (; i < a.length;) {
          const t = a[i++];
          W(t) && o.push(v(n, t))
        }
        return o
      }

      function At(t, e) {
        const n = S(t, e?.in);
        return n.setDate(1), n.setHours(0, 0, 0, 0), n
      }

      function Gt(t, e) {
        return zt({
          start: At(t, e),
          end: Ht(t, e)
        }, e)
      }

      function Ut(t, e) {
        const n = S(t, e?.in),
          r = n.getFullYear();
        return n.setFullYear(r + 1, 0, 0), n.setHours(23, 59, 59, 999), n
      }

      function Zt(t, e) {
        const n = S(t, e?.in);
        return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n
      }

      function _t(t, e) {
        return zt({
          start: Zt(t, e),
          end: Ut(t, e)
        }, e)
      }

      function Jt(t, e) {
        const {
          start: n,
          end: r
        } = qt(e?.in, t);
        let a = +n > +r;
        const o = a ? +n : +r,
          i = a ? r : n;
        i.setHours(0, 0, 0, 0), i.setMonth(0, 1);
        let s = e?.step ?? 1;
        if (!s) return [];
        s < 0 && (s = -s, a = !a);
        const u = [];
        for (; + i <= o;) u.push(v(n, i)), i.setFullYear(i.getFullYear() + s);
        return a ? u.reverse() : u
      }

      function Kt(t, e) {
        const n = S(t, e?.in),
          r = n.getFullYear(),
          a = 9 + 10 * Math.floor(r / 10);
        return n.setFullYear(a, 11, 31), n.setHours(23, 59, 59, 999), n
      }

      function Vt(t, e) {
        const n = S(t, e?.in);
        return n.setMinutes(59, 59, 999), n
      }

      function te(t, e) {
        const n = q(),
          r = e?.weekStartsOn ?? e?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0,
          a = S(t, e?.in),
          o = a.getDay(),
          i = 6 + (o < r ? -7 : 0) - (o - r);
        return a.setDate(a.getDate() + i), a.setHours(23, 59, 59, 999), a
      }

      function ee(t, e) {
        return te(t, {
          ...e,
          weekStartsOn: 1
        })
      }

      function ne(t, e) {
        const n = R(t, e),
          r = v(e?.in || t, 0);
        r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
        const a = L(r, e);
        return a.setMilliseconds(a.getMilliseconds() - 1), a
      }

      function re(t, e) {
        const n = S(t, e?.in);
        return n.setSeconds(59, 999), n
      }

      function ae(t, e) {
        const n = S(t, e?.in),
          r = n.getMonth(),
          a = r - r % 3 + 3;
        return n.setMonth(a, 0), n.setHours(23, 59, 59, 999), n
      }

      function oe(t, e) {
        const n = S(t, e?.in);
        return n.setMilliseconds(999), n
      }

      function ie(t) {
        return Nt(Date.now(), t)
      }

      function se(t) {
        const e = ut(t?.in),
          n = e.getFullYear(),
          r = e.getMonth(),
          a = e.getDate(),
          o = ut(t?.in);
        return o.setFullYear(n, r, a + 1), o.setHours(23, 59, 59, 999), t?.in ? t.in(o) : o
      }

      function ue(t) {
        const e = ut(t?.in),
          n = v(t?.in, 0);
        return n.setFullYear(e.getFullYear(), e.getMonth(), e.getDate() - 1), n.setHours(23, 59, 59, 999), n
      }
      const ce = {
        lessThanXSeconds: {
          one: "less than a second",
          other: "less than {{count}} seconds"
        },
        xSeconds: {
          one: "1 second",
          other: "{{count}} seconds"
        },
        halfAMinute: "half a minute",
        lessThanXMinutes: {
          one: "less than a minute",
          other: "less than {{count}} minutes"
        },
        xMinutes: {
          one: "1 minute",
          other: "{{count}} minutes"
        },
        aboutXHours: {
          one: "about 1 hour",
          other: "about {{count}} hours"
        },
        xHours: {
          one: "1 hour",
          other: "{{count}} hours"
        },
        xDays: {
          one: "1 day",
          other: "{{count}} days"
        },
        aboutXWeeks: {
          one: "about 1 week",
          other: "about {{count}} weeks"
        },
        xWeeks: {
          one: "1 week",
          other: "{{count}} weeks"
        },
        aboutXMonths: {
          one: "about 1 month",
          other: "about {{count}} months"
        },
        xMonths: {
          one: "1 month",
          other: "{{count}} months"
        },
        aboutXYears: {
          one: "about 1 year",
          other: "about {{count}} years"
        },
        xYears: {
          one: "1 year",
          other: "{{count}} years"
        },
        overXYears: {
          one: "over 1 year",
          other: "over {{count}} years"
        },
        almostXYears: {
          one: "almost 1 year",
          other: "almost {{count}} years"
        }
      };

      function de(t) {
        return (e = {}) => {
          const n = e.width ? String(e.width) : t.defaultWidth;
          return t.formats[n] || t.formats[t.defaultWidth]
        }
      }
      const le = {
          date: de({
            formats: {
              full: "EEEE, MMMM do, y",
              long: "MMMM do, y",
              medium: "MMM d, y",
              short: "MM/dd/yyyy"
            },
            defaultWidth: "full"
          }),
          time: de({
            formats: {
              full: "h:mm:ss a zzzz",
              long: "h:mm:ss a z",
              medium: "h:mm:ss a",
              short: "h:mm a"
            },
            defaultWidth: "full"
          }),
          dateTime: de({
            formats: {
              full: "{{date}} 'at' {{time}}",
              long: "{{date}} 'at' {{time}}",
              medium: "{{date}}, {{time}}",
              short: "{{date}}, {{time}}"
            },
            defaultWidth: "full"
          })
        },
        fe = {
          lastWeek: "'last' eeee 'at' p",
          yesterday: "'yesterday at' p",
          today: "'today at' p",
          tomorrow: "'tomorrow at' p",
          nextWeek: "eeee 'at' p",
          other: "P"
        };

      function he(t) {
        return (e, n) => {
          let r;
          if ("formatting" === (n?.context ? String(n.context) : "standalone") && t.formattingValues) {
            const e = t.defaultFormattingWidth || t.defaultWidth,
              a = n?.width ? String(n.width) : e;
            r = t.formattingValues[a] || t.formattingValues[e]
          } else {
            const e = t.defaultWidth,
              a = n?.width ? String(n.width) : t.defaultWidth;
            r = t.values[a] || t.values[e]
          }
          return r[t.argumentCallback ? t.argumentCallback(e) : e]
        }
      }

      function me(t) {
        return (e, n = {}) => {
          const r = n.width,
            a = r && t.matchPatterns[r] || t.matchPatterns[t.defaultMatchWidth],
            o = e.match(a);
          if (!o) return null;
          const i = o[0],
            s = r && t.parsePatterns[r] || t.parsePatterns[t.defaultParseWidth],
            u = Array.isArray(s) ? function(t) {
              for (let e = 0; e < t.length; e++)
                if (t[e].test(i)) return e
            }(s) : function(t) {
              for (const e in t)
                if (Object.prototype.hasOwnProperty.call(t, e) && t[e].test(i)) return e
            }(s);
          let c;
          return c = t.valueCallback ? t.valueCallback(u) : u, c = n.valueCallback ? n.valueCallback(c) : c, {
            value: c,
            rest: e.slice(i.length)
          }
        }
      }
      var ge;
      const we = {
        code: "en-US",
        formatDistance: (t, e, n) => {
          let r;
          const a = ce[t];
          return r = "string" == typeof a ? a : 1 === e ? a.one : a.other.replace("{{count}}", e.toString()), n?.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r
        },
        formatLong: le,
        formatRelative: (t, e, n, r) => fe[t],
        localize: {
          ordinalNumber: (t, e) => {
            const n = Number(t),
              r = n % 100;
            if (r > 20 || r < 10) switch (r % 10) {
              case 1:
                return n + "st";
              case 2:
                return n + "nd";
              case 3:
                return n + "rd"
            }
            return n + "th"
          },
          era: he({
            values: {
              narrow: ["B", "A"],
              abbreviated: ["BC", "AD"],
              wide: ["Before Christ", "Anno Domini"]
            },
            defaultWidth: "wide"
          }),
          quarter: he({
            values: {
              narrow: ["1", "2", "3", "4"],
              abbreviated: ["Q1", "Q2", "Q3", "Q4"],
              wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
            },
            defaultWidth: "wide",
            argumentCallback: t => t - 1
          }),
          month: he({
            values: {
              narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
              abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
              wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
            },
            defaultWidth: "wide"
          }),
          day: he({
            values: {
              narrow: ["S", "M", "T", "W", "T", "F", "S"],
              short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
              abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
              wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
            },
            defaultWidth: "wide"
          }),
          dayPeriod: he({
            values: {
              narrow: {
                am: "a",
                pm: "p",
                midnight: "mi",
                noon: "n",
                morning: "morning",
                afternoon: "afternoon",
                evening: "evening",
                night: "night"
              },
              abbreviated: {
                am: "AM",
                pm: "PM",
                midnight: "midnight",
                noon: "noon",
                morning: "morning",
                afternoon: "afternoon",
                evening: "evening",
                night: "night"
              },
              wide: {
                am: "a.m.",
                pm: "p.m.",
                midnight: "midnight",
                noon: "noon",
                morning: "morning",
                afternoon: "afternoon",
                evening: "evening",
                night: "night"
              }
            },
            defaultWidth: "wide",
            formattingValues: {
              narrow: {
                am: "a",
                pm: "p",
                midnight: "mi",
                noon: "n",
                morning: "in the morning",
                afternoon: "in the afternoon",
                evening: "in the evening",
                night: "at night"
              },
              abbreviated: {
                am: "AM",
                pm: "PM",
                midnight: "midnight",
                noon: "noon",
                morning: "in the morning",
                afternoon: "in the afternoon",
                evening: "in the evening",
                night: "at night"
              },
              wide: {
                am: "a.m.",
                pm: "p.m.",
                midnight: "midnight",
                noon: "noon",
                morning: "in the morning",
                afternoon: "in the afternoon",
                evening: "in the evening",
                night: "at night"
              }
            },
            defaultFormattingWidth: "wide"
          })
        },
        match: {
          ordinalNumber: (ge = {
            matchPattern: /^(\d+)(th|st|nd|rd)?/i,
            parsePattern: /\d+/i,
            valueCallback: t => parseInt(t, 10)
          }, (t, e = {}) => {
            const n = t.match(ge.matchPattern);
            if (!n) return null;
            const r = n[0],
              a = t.match(ge.parsePattern);
            if (!a) return null;
            let o = ge.valueCallback ? ge.valueCallback(a[0]) : a[0];
            return o = e.valueCallback ? e.valueCallback(o) : o, {
              value: o,
              rest: t.slice(r.length)
            }
          }),
          era: me({
            matchPatterns: {
              narrow: /^(b|a)/i,
              abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
              wide: /^(before christ|before common era|anno domini|common era)/i
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              any: [/^b/i, /^(a|c)/i]
            },
            defaultParseWidth: "any"
          }),
          quarter: me({
            matchPatterns: {
              narrow: /^[1234]/i,
              abbreviated: /^q[1234]/i,
              wide: /^[1234](th|st|nd|rd)? quarter/i
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              any: [/1/i, /2/i, /3/i, /4/i]
            },
            defaultParseWidth: "any",
            valueCallback: t => t + 1
          }),
          month: me({
            matchPatterns: {
              narrow: /^[jfmasond]/i,
              abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
              wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
              any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
            },
            defaultParseWidth: "any"
          }),
          day: me({
            matchPatterns: {
              narrow: /^[smtwf]/i,
              short: /^(su|mo|tu|we|th|fr|sa)/i,
              abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
              wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
              any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
            },
            defaultParseWidth: "any"
          }),
          dayPeriod: me({
            matchPatterns: {
              narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
              any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
            },
            defaultMatchWidth: "any",
            parsePatterns: {
              any: {
                am: /^a/i,
                pm: /^p/i,
                midnight: /^mi/i,
                noon: /^no/i,
                morning: /morning/i,
                afternoon: /afternoon/i,
                evening: /evening/i,
                night: /night/i
              }
            },
            defaultParseWidth: "any"
          })
        },
        options: {
          weekStartsOn: 0,
          firstWeekContainsDate: 1
        }
      };

      function ye(t, e) {
        const n = S(t, e?.in);
        return z(n, Zt(n)) + 1
      }

      function be(t, e) {
        const n = S(t, e?.in),
          r = +L(n) - +A(n);
        return Math.round(r / o) + 1
      }

      function pe(t, e) {
        const n = S(t, e?.in),
          r = n.getFullYear(),
          a = q(),
          o = e?.firstWeekContainsDate ?? e?.locale?.options?.firstWeekContainsDate ?? a.firstWeekContainsDate ?? a.locale?.options?.firstWeekContainsDate ?? 1,
          i = v(e?.in || t, 0);
        i.setFullYear(r + 1, 0, o), i.setHours(0, 0, 0, 0);
        const s = Q(i, e),
          u = v(e?.in || t, 0);
        u.setFullYear(r, 0, o), u.setHours(0, 0, 0, 0);
        const c = Q(u, e);
        return +n >= +s ? r + 1 : +n >= +c ? r : r - 1
      }

      function Me(t, e) {
        const n = q(),
          r = e?.firstWeekContainsDate ?? e?.locale?.options?.firstWeekContainsDate ?? n.firstWeekContainsDate ?? n.locale?.options?.firstWeekContainsDate ?? 1,
          a = pe(t, e),
          o = v(e?.in || t, 0);
        return o.setFullYear(a, 0, r), o.setHours(0, 0, 0, 0), Q(o, e)
      }

      function De(t, e) {
        const n = S(t, e?.in),
          r = +Q(n, e) - +Me(n, e);
        return Math.round(r / o) + 1
      }

      function xe(t, e) {
        return (t < 0 ? "-" : "") + Math.abs(t).toString().padStart(e, "0")
      }
      const Te = {
          y(t, e) {
            const n = t.getFullYear(),
              r = n > 0 ? n : 1 - n;
            return xe("yy" === e ? r % 100 : r, e.length)
          },
          M(t, e) {
            const n = t.getMonth();
            return "M" === e ? String(n + 1) : xe(n + 1, 2)
          },
          d: (t, e) => xe(t.getDate(), e.length),
          a(t, e) {
            const n = t.getHours() / 12 >= 1 ? "pm" : "am";
            switch (e) {
              case "a":
              case "aa":
                return n.toUpperCase();
              case "aaa":
                return n;
              case "aaaaa":
                return n[0];
              default:
                return "am" === n ? "a.m." : "p.m."
            }
          },
          h: (t, e) => xe(t.getHours() % 12 || 12, e.length),
          H: (t, e) => xe(t.getHours(), e.length),
          m: (t, e) => xe(t.getMinutes(), e.length),
          s: (t, e) => xe(t.getSeconds(), e.length),
          S(t, e) {
            const n = e.length,
              r = t.getMilliseconds();
            return xe(Math.trunc(r * Math.pow(10, n - 3)), e.length)
          }
        },
        ke = {
          G: function(t, e, n) {
            const r = t.getFullYear() > 0 ? 1 : 0;
            switch (e) {
              case "G":
              case "GG":
              case "GGG":
                return n.era(r, {
                  width: "abbreviated"
                });
              case "GGGGG":
                return n.era(r, {
                  width: "narrow"
                });
              default:
                return n.era(r, {
                  width: "wide"
                })
            }
          },
          y: function(t, e, n) {
            if ("yo" === e) {
              const e = t.getFullYear(),
                r = e > 0 ? e : 1 - e;
              return n.ordinalNumber(r, {
                unit: "year"
              })
            }
            return Te.y(t, e)
          },
          Y: function(t, e, n, r) {
            const a = pe(t, r),
              o = a > 0 ? a : 1 - a;
            return "YY" === e ? xe(o % 100, 2) : "Yo" === e ? n.ordinalNumber(o, {
              unit: "year"
            }) : xe(o, e.length)
          },
          R: function(t, e) {
            return xe(R(t), e.length)
          },
          u: function(t, e) {
            return xe(t.getFullYear(), e.length)
          },
          Q: function(t, e, n) {
            const r = Math.ceil((t.getMonth() + 1) / 3);
            switch (e) {
              case "Q":
                return String(r);
              case "QQ":
                return xe(r, 2);
              case "Qo":
                return n.ordinalNumber(r, {
                  unit: "quarter"
                });
              case "QQQ":
                return n.quarter(r, {
                  width: "abbreviated",
                  context: "formatting"
                });
              case "QQQQQ":
                return n.quarter(r, {
                  width: "narrow",
                  context: "formatting"
                });
              default:
                return n.quarter(r, {
                  width: "wide",
                  context: "formatting"
                })
            }
          },
          q: function(t, e, n) {
            const r = Math.ceil((t.getMonth() + 1) / 3);
            switch (e) {
              case "q":
                return String(r);
              case "qq":
                return xe(r, 2);
              case "qo":
                return n.ordinalNumber(r, {
                  unit: "quarter"
                });
              case "qqq":
                return n.quarter(r, {
                  width: "abbreviated",
                  context: "standalone"
                });
              case "qqqqq":
                return n.quarter(r, {
                  width: "narrow",
                  context: "standalone"
                });
              default:
                return n.quarter(r, {
                  width: "wide",
                  context: "standalone"
                })
            }
          },
          M: function(t, e, n) {
            const r = t.getMonth();
            switch (e) {
              case "M":
              case "MM":
                return Te.M(t, e);
              case "Mo":
                return n.ordinalNumber(r + 1, {
                  unit: "month"
                });
              case "MMM":
                return n.month(r, {
                  width: "abbreviated",
                  context: "formatting"
                });
              case "MMMMM":
                return n.month(r, {
                  width: "narrow",
                  context: "formatting"
                });
              default:
                return n.month(r, {
                  width: "wide",
                  context: "formatting"
                })
            }
          },
          L: function(t, e, n) {
            const r = t.getMonth();
            switch (e) {
              case "L":
                return String(r + 1);
              case "LL":
                return xe(r + 1, 2);
              case "Lo":
                return n.ordinalNumber(r + 1, {
                  unit: "month"
                });
              case "LLL":
                return n.month(r, {
                  width: "abbreviated",
                  context: "standalone"
                });
              case "LLLLL":
                return n.month(r, {
                  width: "narrow",
                  context: "standalone"
                });
              default:
                return n.month(r, {
                  width: "wide",
                  context: "standalone"
                })
            }
          },
          w: function(t, e, n, r) {
            const a = De(t, r);
            return "wo" === e ? n.ordinalNumber(a, {
              unit: "week"
            }) : xe(a, e.length)
          },
          I: function(t, e, n) {
            const r = be(t);
            return "Io" === e ? n.ordinalNumber(r, {
              unit: "week"
            }) : xe(r, e.length)
          },
          d: function(t, e, n) {
            return "do" === e ? n.ordinalNumber(t.getDate(), {
              unit: "date"
            }) : Te.d(t, e)
          },
          D: function(t, e, n) {
            const r = ye(t);
            return "Do" === e ? n.ordinalNumber(r, {
              unit: "dayOfYear"
            }) : xe(r, e.length)
          },
          E: function(t, e, n) {
            const r = t.getDay();
            switch (e) {
              case "E":
              case "EE":
              case "EEE":
                return n.day(r, {
                  width: "abbreviated",
                  context: "formatting"
                });
              case "EEEEE":
                return n.day(r, {
                  width: "narrow",
                  context: "formatting"
                });
              case "EEEEEE":
                return n.day(r, {
                  width: "short",
                  context: "formatting"
                });
              default:
                return n.day(r, {
                  width: "wide",
                  context: "formatting"
                })
            }
          },
          e: function(t, e, n, r) {
            const a = t.getDay(),
              o = (a - r.weekStartsOn + 8) % 7 || 7;
            switch (e) {
              case "e":
                return String(o);
              case "ee":
                return xe(o, 2);
              case "eo":
                return n.ordinalNumber(o, {
                  unit: "day"
                });
              case "eee":
                return n.day(a, {
                  width: "abbreviated",
                  context: "formatting"
                });
              case "eeeee":
                return n.day(a, {
                  width: "narrow",
                  context: "formatting"
                });
              case "eeeeee":
                return n.day(a, {
                  width: "short",
                  context: "formatting"
                });
              default:
                return n.day(a, {
                  width: "wide",
                  context: "formatting"
                })
            }
          },
          c: function(t, e, n, r) {
            const a = t.getDay(),
              o = (a - r.weekStartsOn + 8) % 7 || 7;
            switch (e) {
              case "c":
                return String(o);
              case "cc":
                return xe(o, e.length);
              case "co":
                return n.ordinalNumber(o, {
                  unit: "day"
                });
              case "ccc":
                return n.day(a, {
                  width: "abbreviated",
                  context: "standalone"
                });
              case "ccccc":
                return n.day(a, {
                  width: "narrow",
                  context: "standalone"
                });
              case "cccccc":
                return n.day(a, {
                  width: "short",
                  context: "standalone"
                });
              default:
                return n.day(a, {
                  width: "wide",
                  context: "standalone"
                })
            }
          },
          i: function(t, e, n) {
            const r = t.getDay(),
              a = 0 === r ? 7 : r;
            switch (e) {
              case "i":
                return String(a);
              case "ii":
                return xe(a, e.length);
              case "io":
                return n.ordinalNumber(a, {
                  unit: "day"
                });
              case "iii":
                return n.day(r, {
                  width: "abbreviated",
                  context: "formatting"
                });
              case "iiiii":
                return n.day(r, {
                  width: "narrow",
                  context: "formatting"
                });
              case "iiiiii":
                return n.day(r, {
                  width: "short",
                  context: "formatting"
                });
              default:
                return n.day(r, {
                  width: "wide",
                  context: "formatting"
                })
            }
          },
          a: function(t, e, n) {
            const r = t.getHours() / 12 >= 1 ? "pm" : "am";
            switch (e) {
              case "a":
              case "aa":
                return n.dayPeriod(r, {
                  width: "abbreviated",
                  context: "formatting"
                });
              case "aaa":
                return n.dayPeriod(r, {
                  width: "abbreviated",
                  context: "formatting"
                }).toLowerCase();
              case "aaaaa":
                return n.dayPeriod(r, {
                  width: "narrow",
                  context: "formatting"
                });
              default:
                return n.dayPeriod(r, {
                  width: "wide",
                  context: "formatting"
                })
            }
          },
          b: function(t, e, n) {
            const r = t.getHours();
            let a;
            switch (a = 12 === r ? "noon" : 0 === r ? "midnight" : r / 12 >= 1 ? "pm" : "am", e) {
              case "b":
              case "bb":
                return n.dayPeriod(a, {
                  width: "abbreviated",
                  context: "formatting"
                });
              case "bbb":
                return n.dayPeriod(a, {
                  width: "abbreviated",
                  context: "formatting"
                }).toLowerCase();
              case "bbbbb":
                return n.dayPeriod(a, {
                  width: "narrow",
                  context: "formatting"
                });
              default:
                return n.dayPeriod(a, {
                  width: "wide",
                  context: "formatting"
                })
            }
          },
          B: function(t, e, n) {
            const r = t.getHours();
            let a;
            switch (a = r >= 17 ? "evening" : r >= 12 ? "afternoon" : r >= 4 ? "morning" : "night", e) {
              case "B":
              case "BB":
              case "BBB":
                return n.dayPeriod(a, {
                  width: "abbreviated",
                  context: "formatting"
                });
              case "BBBBB":
                return n.dayPeriod(a, {
                  width: "narrow",
                  context: "formatting"
                });
              default:
                return n.dayPeriod(a, {
                  width: "wide",
                  context: "formatting"
                })
            }
          },
          h: function(t, e, n) {
            if ("ho" === e) {
              let e = t.getHours() % 12;
              return 0 === e && (e = 12), n.ordinalNumber(e, {
                unit: "hour"
              })
            }
            return Te.h(t, e)
          },
          H: function(t, e, n) {
            return "Ho" === e ? n.ordinalNumber(t.getHours(), {
              unit: "hour"
            }) : Te.H(t, e)
          },
          K: function(t, e, n) {
            const r = t.getHours() % 12;
            return "Ko" === e ? n.ordinalNumber(r, {
              unit: "hour"
            }) : xe(r, e.length)
          },
          k: function(t, e, n) {
            let r = t.getHours();
            return 0 === r && (r = 24), "ko" === e ? n.ordinalNumber(r, {
              unit: "hour"
            }) : xe(r, e.length)
          },
          m: function(t, e, n) {
            return "mo" === e ? n.ordinalNumber(t.getMinutes(), {
              unit: "minute"
            }) : Te.m(t, e)
          },
          s: function(t, e, n) {
            return "so" === e ? n.ordinalNumber(t.getSeconds(), {
              unit: "second"
            }) : Te.s(t, e)
          },
          S: function(t, e) {
            return Te.S(t, e)
          },
          X: function(t, e, n) {
            const r = t.getTimezoneOffset();
            if (0 === r) return "Z";
            switch (e) {
              case "X":
                return Se(r);
              case "XXXX":
              case "XX":
                return Ye(r);
              default:
                return Ye(r, ":")
            }
          },
          x: function(t, e, n) {
            const r = t.getTimezoneOffset();
            switch (e) {
              case "x":
                return Se(r);
              case "xxxx":
              case "xx":
                return Ye(r);
              default:
                return Ye(r, ":")
            }
          },
          O: function(t, e, n) {
            const r = t.getTimezoneOffset();
            switch (e) {
              case "O":
              case "OO":
              case "OOO":
                return "GMT" + ve(r, ":");
              default:
                return "GMT" + Ye(r, ":")
            }
          },
          z: function(t, e, n) {
            const r = t.getTimezoneOffset();
            switch (e) {
              case "z":
              case "zz":
              case "zzz":
                return "GMT" + ve(r, ":");
              default:
                return "GMT" + Ye(r, ":")
            }
          },
          t: function(t, e, n) {
            return xe(Math.trunc(+t / 1e3), e.length)
          },
          T: function(t, e, n) {
            return xe(+t, e.length)
          }
        };

      function ve(t, e = "") {
        const n = t > 0 ? "-" : "+",
          r = Math.abs(t),
          a = Math.trunc(r / 60),
          o = r % 60;
        return 0 === o ? n + String(a) : n + String(a) + e + xe(o, 2)
      }

      function Se(t, e) {
        return t % 60 == 0 ? (t > 0 ? "-" : "+") + xe(Math.abs(t) / 60, 2) : Ye(t, e)
      }

      function Ye(t, e = "") {
        const n = t > 0 ? "-" : "+",
          r = Math.abs(t);
        return n + xe(Math.trunc(r / 60), 2) + e + xe(r % 60, 2)
      }
      const Oe = (t, e) => {
          switch (t) {
            case "P":
              return e.date({
                width: "short"
              });
            case "PP":
              return e.date({
                width: "medium"
              });
            case "PPP":
              return e.date({
                width: "long"
              });
            default:
              return e.date({
                width: "full"
              })
          }
        },
        Ne = (t, e) => {
          switch (t) {
            case "p":
              return e.time({
                width: "short"
              });
            case "pp":
              return e.time({
                width: "medium"
              });
            case "ppp":
              return e.time({
                width: "long"
              });
            default:
              return e.time({
                width: "full"
              })
          }
        },
        He = {
          p: Ne,
          P: (t, e) => {
            const n = t.match(/(P+)(p+)?/) || [],
              r = n[1],
              a = n[2];
            if (!a) return Oe(t, e);
            let o;
            switch (r) {
              case "P":
                o = e.dateTime({
                  width: "short"
                });
                break;
              case "PP":
                o = e.dateTime({
                  width: "medium"
                });
                break;
              case "PPP":
                o = e.dateTime({
                  width: "long"
                });
                break;
              default:
                o = e.dateTime({
                  width: "full"
                })
            }
            return o.replace("{{date}}", Oe(r, e)).replace("{{time}}", Ne(a, e))
          }
        },
        Fe = /^D+$/,
        We = /^Y+$/,
        Ie = ["D", "DD", "YY", "YYYY"];

      function Pe(t) {
        return Fe.test(t)
      }

      function Ee(t) {
        return We.test(t)
      }

      function Ce(t, e, n) {
        const r = function(t, e, n) {
          const r = "Y" === t[0] ? "years" : "days of the month";
          return `Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`
        }(t, e, n);
        if (console.warn(r), Ie.includes(t)) throw new RangeError(r)
      }
      const qe = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
        $e = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
        Qe = /^'([^]*?)'?$/,
        Le = /''/g,
        Re = /[a-zA-Z]/;

      function Xe(t, e, n) {
        const r = q(),
          a = n?.locale ?? r.locale ?? we,
          o = n?.firstWeekContainsDate ?? n?.locale?.options?.firstWeekContainsDate ?? r.firstWeekContainsDate ?? r.locale?.options?.firstWeekContainsDate ?? 1,
          i = n?.weekStartsOn ?? n?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0,
          s = S(t, n?.in);
        if (!ft(s)) throw new RangeError("Invalid time value");
        let u = e.match($e).map((t => {
          const e = t[0];
          return "p" === e || "P" === e ? (0, He[e])(t, a.formatLong) : t
        })).join("").match(qe).map((t => {
          if ("''" === t) return {
            isToken: !1,
            value: "'"
          };
          const e = t[0];
          if ("'" === e) return {
            isToken: !1,
            value: je(t)
          };
          if (ke[e]) return {
            isToken: !0,
            value: t
          };
          if (e.match(Re)) throw new RangeError("Format string contains an unescaped latin alphabet character `" + e + "`");
          return {
            isToken: !1,
            value: t
          }
        }));
        a.localize.preprocessor && (u = a.localize.preprocessor(s, u));
        const c = {
          firstWeekContainsDate: o,
          weekStartsOn: i,
          locale: a
        };
        return u.map((r => {
          if (!r.isToken) return r.value;
          const o = r.value;
          return (!n?.useAdditionalWeekYearTokens && Ee(o) || !n?.useAdditionalDayOfYearTokens && Pe(o)) && Ce(o, e, String(t)), (0, ke[o[0]])(s, o, a.localize, c)
        })).join("")
      }

      function je(t) {
        const e = t.match(Qe);
        return e ? e[1].replace(Le, "'") : t
      }

      function Be(t, e, n) {
        const r = q(),
          a = n?.locale ?? r.locale ?? we,
          o = it(t, e);
        if (isNaN(o)) throw new RangeError("Invalid time value");
        const i = Object.assign({}, n, {
            addSuffix: n?.addSuffix,
            comparison: o
          }),
          [s, u] = j(n?.in, ...o > 0 ? [e, t] : [t, e]),
          c = Pt(u, s),
          d = (X(u) - X(s)) / 1e3,
          h = Math.round((c - d) / 60);
        let m;
        if (h < 2) return n?.includeSeconds ? c < 5 ? a.formatDistance("lessThanXSeconds", 5, i) : c < 10 ? a.formatDistance("lessThanXSeconds", 10, i) : c < 20 ? a.formatDistance("lessThanXSeconds", 20, i) : c < 40 ? a.formatDistance("halfAMinute", 0, i) : c < 60 ? a.formatDistance("lessThanXMinutes", 1, i) : a.formatDistance("xMinutes", 1, i) : 0 === h ? a.formatDistance("lessThanXMinutes", 1, i) : a.formatDistance("xMinutes", h, i);
        if (h < 45) return a.formatDistance("xMinutes", h, i);
        if (h < 90) return a.formatDistance("aboutXHours", 1, i);
        if (h < f) {
          const t = Math.round(h / 60);
          return a.formatDistance("aboutXHours", t, i)
        }
        if (h < 2520) return a.formatDistance("xDays", 1, i);
        if (h < l) {
          const t = Math.round(h / f);
          return a.formatDistance("xDays", t, i)
        }
        if (h < 2 * l) return m = Math.round(h / l), a.formatDistance("aboutXMonths", m, i);
        if (m = Wt(u, s), m < 12) {
          const t = Math.round(h / l);
          return a.formatDistance("xMonths", t, i)
        } {
          const t = m % 12,
            e = Math.trunc(m / 12);
          return t < 3 ? a.formatDistance("aboutXYears", e, i) : t < 9 ? a.formatDistance("overXYears", e, i) : a.formatDistance("almostXYears", e + 1, i)
        }
      }

      function ze(t, e, n) {
        const r = q(),
          a = n?.locale ?? r.locale ?? we,
          o = it(t, e);
        if (isNaN(o)) throw new RangeError("Invalid time value");
        const i = Object.assign({}, n, {
            addSuffix: n?.addSuffix,
            comparison: o
          }),
          [u, c] = j(n?.in, ...o > 0 ? [e, t] : [t, e]),
          h = Tt(n?.roundingMethod ?? "round"),
          m = c.getTime() - u.getTime(),
          g = m / s,
          w = (m - (X(c) - X(u))) / s,
          y = n?.unit;
        let b;
        if (b = y || (g < 1 ? "second" : g < 60 ? "minute" : g < f ? "hour" : w < l ? "day" : w < d ? "month" : "year"), "second" === b) {
          const t = h(m / 1e3);
          return a.formatDistance("xSeconds", t, i)
        }
        if ("minute" === b) {
          const t = h(g);
          return a.formatDistance("xMinutes", t, i)
        }
        if ("hour" === b) {
          const t = h(g / 60);
          return a.formatDistance("xHours", t, i)
        }
        if ("day" === b) {
          const t = h(w / f);
          return a.formatDistance("xDays", t, i)
        }
        if ("month" === b) {
          const t = h(w / l);
          return 12 === t && "month" !== y ? a.formatDistance("xYears", 1, i) : a.formatDistance("xMonths", t, i)
        } {
          const t = h(w / d);
          return a.formatDistance("xYears", t, i)
        }
      }

      function Ae(t, e) {
        return Be(t, ut(t), e)
      }

      function Ge(t, e) {
        return ze(t, ut(t), e)
      }
      const Ue = ["years", "months", "weeks", "days", "hours", "minutes", "seconds"];

      function Ze(t, e) {
        const n = q(),
          r = e?.locale ?? n.locale ?? we,
          a = e?.format ?? Ue,
          o = e?.zero ?? !1,
          i = e?.delimiter ?? " ";
        return r.formatDistance ? a.reduce(((e, n) => {
          const a = `x${n.replace(/(^.)/,(t=>t.toUpperCase()))}`,
            i = t[n];
          return void 0 !== i && (o || t[n]) ? e.concat(r.formatDistance(a, i)) : e
        }), []).join(i) : ""
      }

      function _e(t, e) {
        const n = S(t, e?.in);
        if (isNaN(+n)) throw new RangeError("Invalid time value");
        const r = e?.format ?? "extended",
          a = e?.representation ?? "complete";
        let o = "",
          i = "";
        const s = "extended" === r ? "-" : "",
          u = "extended" === r ? ":" : "";
        if ("time" !== a) {
          const t = xe(n.getDate(), 2),
            e = xe(n.getMonth() + 1, 2);
          o = `${xe(n.getFullYear(),4)}${s}${e}${s}${t}`
        }
        if ("date" !== a) {
          const t = n.getTimezoneOffset();
          if (0 !== t) {
            const e = Math.abs(t);
            i = `${t<0?"+":"-"}${xe(Math.trunc(e/60),2)}:${xe(e%60,2)}`
          } else i = "Z";
          o = `${o}${""===o?"":"T"}${[xe(n.getHours(),2),xe(n.getMinutes(),2),xe(n.getSeconds(),2)].join(u)}${i}`
        }
        return o
      }

      function Je(t, e) {
        const n = S(t, e?.in);
        if (!ft(n)) throw new RangeError("Invalid time value");
        const r = e?.format ?? "extended",
          a = e?.representation ?? "complete";
        let o = "";
        const i = "extended" === r ? "-" : "",
          s = "extended" === r ? ":" : "";
        if ("time" !== a) {
          const t = xe(n.getDate(), 2),
            e = xe(n.getMonth() + 1, 2);
          o = `${xe(n.getFullYear(),4)}${i}${e}${i}${t}`
        }
        return "date" !== a && (o = `${o}${""===o?"":" "}${xe(n.getHours(),2)}${s}${xe(n.getMinutes(),2)}${s}${xe(n.getSeconds(),2)}`), o
      }

      function Ke(t) {
        const {
          years: e = 0,
          months: n = 0,
          days: r = 0,
          hours: a = 0,
          minutes: o = 0,
          seconds: i = 0
        } = t;
        return `P${e}Y${n}M${r}DT${a}H${o}M${i}S`
      }

      function Ve(t, e) {
        const n = S(t, e?.in);
        if (!ft(n)) throw new RangeError("Invalid time value");
        const r = e?.fractionDigits ?? 0,
          a = xe(n.getDate(), 2),
          o = xe(n.getMonth() + 1, 2),
          i = n.getFullYear(),
          s = xe(n.getHours(), 2),
          u = xe(n.getMinutes(), 2),
          c = xe(n.getSeconds(), 2);
        let d = "";
        if (r > 0) {
          const t = n.getMilliseconds();
          d = "." + xe(Math.trunc(t * Math.pow(10, r - 3)), r)
        }
        let l = "";
        const f = n.getTimezoneOffset();
        if (0 !== f) {
          const t = Math.abs(f);
          l = `${f<0?"+":"-"}${xe(Math.trunc(t/60),2)}:${xe(t%60,2)}`
        } else l = "Z";
        return `${i}-${o}-${a}T${s}:${u}:${c}${d}${l}`
      }
      const tn = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        en = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

      function nn(t) {
        const e = S(t);
        if (!ft(e)) throw new RangeError("Invalid time value");
        return `${tn[e.getUTCDay()]}, ${xe(e.getUTCDate(),2)} ${en[e.getUTCMonth()]} ${e.getUTCFullYear()} ${xe(e.getUTCHours(),2)}:${xe(e.getUTCMinutes(),2)}:${xe(e.getUTCSeconds(),2)} GMT`
      }

      function rn(t, e, n) {
        const [r, a] = j(n?.in, t, e), o = q(), i = n?.locale ?? o.locale ?? we, s = n?.weekStartsOn ?? n?.locale?.options?.weekStartsOn ?? o.weekStartsOn ?? o.locale?.options?.weekStartsOn ?? 0, u = z(r, a);
        if (isNaN(u)) throw new RangeError("Invalid time value");
        let c;
        return c = u < -6 ? "other" : u < -1 ? "lastWeek" : u < 0 ? "yesterday" : u < 1 ? "today" : u < 2 ? "tomorrow" : u < 7 ? "nextWeek" : "other", Xe(r, i.formatRelative(c, r, a, {
          locale: i,
          weekStartsOn: s
        }), {
          locale: i,
          weekStartsOn: s
        })
      }

      function an(t, e) {
        return S(1e3 * t, e?.in)
      }

      function on(t, e) {
        return S(t, e?.in).getDate()
      }

      function sn(t, e) {
        return S(t, e?.in).getDay()
      }

      function un(t, e) {
        const n = S(t, e?.in),
          r = n.getFullYear(),
          a = n.getMonth(),
          o = v(n, 0);
        return o.setFullYear(r, a + 1, 0), o.setHours(0, 0, 0, 0), o.getDate()
      }

      function cn(t, e) {
        const n = S(t, e?.in).getFullYear();
        return n % 400 == 0 || n % 4 == 0 && n % 100 != 0
      }

      function dn(t, e) {
        const n = S(t, e?.in);
        return Number.isNaN(+n) ? NaN : cn(n) ? 366 : 365
      }

      function ln(t, e) {
        const n = S(t, e?.in).getFullYear();
        return 10 * Math.floor(n / 10)
      }

      function fn() {
        return Object.assign({}, q())
      }

      function hn(t, e) {
        return S(t, e?.in).getHours()
      }

      function mn(t, e) {
        const n = S(t, e?.in).getDay();
        return 0 === n ? 7 : n
      }

      function gn(t, e) {
        const n = A(t, e),
          r = +A(K(n, 60)) - +n;
        return Math.round(r / o)
      }

      function wn(t) {
        return S(t).getMilliseconds()
      }

      function yn(t, e) {
        return S(t, e?.in).getMinutes()
      }

      function bn(t, e) {
        return S(t, e?.in).getMonth()
      }

      function pn(t, e) {
        const [n, r] = [+S(t.start), +S(t.end)].sort(((t, e) => t - e)), [a, o] = [+S(e.start), +S(e.end)].sort(((t, e) => t - e));
        if (!(n < o && a < r)) return 0;
        const s = a < n ? n : a,
          u = s - X(s),
          c = o > r ? r : o,
          d = c - X(c);
        return Math.ceil((d - u) / i)
      }

      function Mn(t) {
        return S(t).getSeconds()
      }

      function Dn(t) {
        return +S(t)
      }

      function xn(t) {
        return Math.trunc(+S(t) / 1e3)
      }

      function Tn(t, e) {
        const n = q(),
          r = e?.weekStartsOn ?? e?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0,
          a = on(S(t, e?.in));
        if (isNaN(a)) return NaN;
        let o = r - sn(At(t, e));
        o <= 0 && (o += 7);
        const i = a - o;
        return Math.ceil(i / 7) + 1
      }

      function kn(t, e) {
        const n = S(t, e?.in),
          r = n.getMonth();
        return n.setFullYear(n.getFullYear(), r + 1, 0), n.setHours(0, 0, 0, 0), S(n, e?.in)
      }

      function vn(t, e) {
        const n = S(t, e?.in);
        return pt(kn(n, e), At(n, e), e) + 1
      }

      function Sn(t, e) {
        return S(t, e?.in).getFullYear()
      }

      function Yn(t) {
        return Math.trunc(t * u)
      }

      function On(t) {
        return Math.trunc(t * h)
      }

      function Nn(t) {
        return Math.trunc(t * y)
      }

      function Hn(t, e, n) {
        const [r, a] = j(n?.in, t, e);
        if (isNaN(+r)) throw new TypeError("Start date is invalid");
        if (isNaN(+a)) throw new TypeError("End date is invalid");
        if (n?.assertPositive && +r > +a) throw new TypeError("End date must be after start date");
        return {
          start: r,
          end: a
        }
      }

      function Fn(t, e) {
        const {
          start: n,
          end: r
        } = qt(e?.in, t), a = {}, o = Ct(r, n);
        o && (a.years = o);
        const i = N(n, {
            years: a.years
          }),
          s = Wt(r, i);
        s && (a.months = s);
        const u = N(i, {
            months: a.months
          }),
          c = Dt(r, u);
        c && (a.days = c);
        const d = N(u, {
            days: a.days
          }),
          l = kt(r, d);
        l && (a.hours = l);
        const f = N(d, {
            hours: a.hours
          }),
          h = Ot(r, f);
        h && (a.minutes = h);
        const m = Pt(r, N(f, {
          minutes: a.minutes
        }));
        return m && (a.seconds = m), a
      }

      function Wn(t, e, n) {
        let r;
        var a;
        return void 0 === (a = e) || "locale" in a ? n = e : r = e, new Intl.DateTimeFormat(n?.locale, r).format(S(t))
      }

      function In(t, e, n) {
        let r, a = 0;
        const [o, i] = j(n?.in, t, e);
        if (n?.unit) r = n?.unit, "second" === r ? a = Pt(o, i) : "minute" === r ? a = Ot(o, i) : "hour" === r ? a = kt(o, i) : "day" === r ? a = z(o, i) : "week" === r ? a = pt(o, i) : "month" === r ? a = wt(o, i) : "quarter" === r ? a = bt(o, i) : "year" === r && (a = Mt(o, i));
        else {
          const t = Pt(o, i);
          Math.abs(t) < b ? (a = Pt(o, i), r = "second") : Math.abs(t) < y ? (a = Ot(o, i), r = "minute") : Math.abs(t) < p && Math.abs(z(o, i)) < 1 ? (a = kt(o, i), r = "hour") : Math.abs(t) < M && (a = z(o, i)) && Math.abs(a) < 7 ? r = "day" : Math.abs(t) < x ? (a = pt(o, i), r = "week") : Math.abs(t) < T ? (a = wt(o, i), r = "month") : Math.abs(t) < D && bt(o, i) < 4 ? (a = bt(o, i), r = "quarter") : (a = Mt(o, i), r = "year")
        }
        return new Intl.RelativeTimeFormat(n?.locale, {
          numeric: "auto",
          ...n
        }).format(a, r)
      }

      function Pn(t, e) {
        return +S(t) > +S(e)
      }

      function En(t, e) {
        return +S(t) < +S(e)
      }

      function Cn(t, e) {
        return +S(t) == +S(e)
      }

      function qn(t, e, n) {
        const r = new Date(t, e, n);
        return r.getFullYear() === t && r.getMonth() === e && r.getDate() === n
      }

      function $n(t, e) {
        return 1 === S(t, e?.in).getDate()
      }

      function Qn(t, e) {
        return 5 === S(t, e?.in).getDay()
      }

      function Ln(t) {
        return +S(t) > Date.now()
      }

      function Rn(t, e) {
        const n = function(t) {
          return "function" == typeof t && t.prototype?.constructor === t
        }(e) ? new e(0) : v(e, 0);
        return n.setFullYear(t.getFullYear(), t.getMonth(), t.getDate()), n.setHours(t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()), n
      }
      class Xn {
        subPriority = 0;
        validate(t, e) {
          return !0
        }
      }
      class jn extends Xn {
        constructor(t, e, n, r, a) {
          super(), this.value = t, this.validateValue = e, this.setValue = n, this.priority = r, a && (this.subPriority = a)
        }
        validate(t, e) {
          return this.validateValue(t, this.value, e)
        }
        set(t, e, n) {
          return this.setValue(t, e, this.value, n)
        }
      }
      class Bn extends Xn {
        priority = 10;
        subPriority = -1;
        constructor(t, e) {
          super(), this.context = t || (t => v(e, t))
        }
        set(t, e) {
          return e.timestampIsSet ? t : v(t, Rn(t, this.context))
        }
      }
      class zn {
        run(t, e, n, r) {
          const a = this.parse(t, e, n, r);
          return a ? {
            setter: new jn(a.value, this.validate, this.set, this.priority, this.subPriority),
            rest: a.rest
          } : null
        }
        validate(t, e, n) {
          return !0
        }
      }
      const An = /^(1[0-2]|0?\d)/,
        Gn = /^(3[0-1]|[0-2]?\d)/,
        Un = /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
        Zn = /^(5[0-3]|[0-4]?\d)/,
        _n = /^(2[0-3]|[0-1]?\d)/,
        Jn = /^(2[0-4]|[0-1]?\d)/,
        Kn = /^(1[0-1]|0?\d)/,
        Vn = /^(1[0-2]|0?\d)/,
        tr = /^[0-5]?\d/,
        er = /^[0-5]?\d/,
        nr = /^\d/,
        rr = /^\d{1,2}/,
        ar = /^\d{1,3}/,
        or = /^\d{1,4}/,
        ir = /^-?\d+/,
        sr = /^-?\d/,
        ur = /^-?\d{1,2}/,
        cr = /^-?\d{1,3}/,
        dr = /^-?\d{1,4}/,
        lr = /^([+-])(\d{2})(\d{2})?|Z/,
        fr = /^([+-])(\d{2})(\d{2})|Z/,
        hr = /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
        mr = /^([+-])(\d{2}):(\d{2})|Z/,
        gr = /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/;

      function wr(t, e) {
        return t ? {
          value: e(t.value),
          rest: t.rest
        } : t
      }

      function yr(t, e) {
        const n = e.match(t);
        return n ? {
          value: parseInt(n[0], 10),
          rest: e.slice(n[0].length)
        } : null
      }

      function br(t, e) {
        const n = e.match(t);
        if (!n) return null;
        if ("Z" === n[0]) return {
          value: 0,
          rest: e.slice(1)
        };
        const r = "+" === n[1] ? 1 : -1,
          a = n[2] ? parseInt(n[2], 10) : 0,
          o = n[3] ? parseInt(n[3], 10) : 0,
          i = n[5] ? parseInt(n[5], 10) : 0;
        return {
          value: r * (a * u + o * s + i * c),
          rest: e.slice(n[0].length)
        }
      }

      function pr(t) {
        return yr(ir, t)
      }

      function Mr(t, e) {
        switch (t) {
          case 1:
            return yr(nr, e);
          case 2:
            return yr(rr, e);
          case 3:
            return yr(ar, e);
          case 4:
            return yr(or, e);
          default:
            return yr(new RegExp("^\\d{1," + t + "}"), e)
        }
      }

      function Dr(t, e) {
        switch (t) {
          case 1:
            return yr(sr, e);
          case 2:
            return yr(ur, e);
          case 3:
            return yr(cr, e);
          case 4:
            return yr(dr, e);
          default:
            return yr(new RegExp("^-?\\d{1," + t + "}"), e)
        }
      }

      function xr(t) {
        switch (t) {
          case "morning":
            return 4;
          case "evening":
            return 17;
          case "pm":
          case "noon":
          case "afternoon":
            return 12;
          default:
            return 0
        }
      }

      function Tr(t, e) {
        const n = e > 0,
          r = n ? e : 1 - e;
        let a;
        if (r <= 50) a = t || 100;
        else {
          const e = r + 50;
          a = t + 100 * Math.trunc(e / 100) - (t >= e % 100 ? 100 : 0)
        }
        return n ? a : 1 - a
      }

      function kr(t) {
        return t % 400 == 0 || t % 4 == 0 && t % 100 != 0
      }

      function vr(t, e, n) {
        const r = S(t, n?.in),
          a = De(r, n) - e;
        return r.setDate(r.getDate() - 7 * a), S(r, n?.in)
      }

      function Sr(t, e, n) {
        const r = S(t, n?.in),
          a = be(r, n) - e;
        return r.setDate(r.getDate() - 7 * a), r
      }
      const Yr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        Or = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

      function Nr(t, e, n) {
        const r = q(),
          a = n?.weekStartsOn ?? n?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0,
          o = S(t, n?.in),
          i = o.getDay(),
          s = 7 - a;
        return Y(o, e < 0 || e > 6 ? e - (i + s) % 7 : ((e % 7 + 7) % 7 + s) % 7 - (i + s) % 7, n)
      }

      function Hr(t, e, n) {
        const r = S(t, n?.in);
        return Y(r, e - mn(r, n), n)
      }
      const Fr = {
          G: new class extends zn {
            priority = 140;
            parse(t, e, n) {
              switch (e) {
                case "G":
                case "GG":
                case "GGG":
                  return n.era(t, {
                    width: "abbreviated"
                  }) || n.era(t, {
                    width: "narrow"
                  });
                case "GGGGG":
                  return n.era(t, {
                    width: "narrow"
                  });
                default:
                  return n.era(t, {
                    width: "wide"
                  }) || n.era(t, {
                    width: "abbreviated"
                  }) || n.era(t, {
                    width: "narrow"
                  })
              }
            }
            set(t, e, n) {
              return e.era = n, t.setFullYear(n, 0, 1), t.setHours(0, 0, 0, 0), t
            }
            incompatibleTokens = ["R", "u", "t", "T"]
          },
          y: new class extends zn {
            priority = 130;
            incompatibleTokens = ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"];
            parse(t, e, n) {
              const r = t => ({
                year: t,
                isTwoDigitYear: "yy" === e
              });
              switch (e) {
                case "y":
                  return wr(Mr(4, t), r);
                case "yo":
                  return wr(n.ordinalNumber(t, {
                    unit: "year"
                  }), r);
                default:
                  return wr(Mr(e.length, t), r)
              }
            }
            validate(t, e) {
              return e.isTwoDigitYear || e.year > 0
            }
            set(t, e, n) {
              const r = t.getFullYear();
              if (n.isTwoDigitYear) {
                const e = Tr(n.year, r);
                return t.setFullYear(e, 0, 1), t.setHours(0, 0, 0, 0), t
              }
              const a = "era" in e && 1 !== e.era ? 1 - n.year : n.year;
              return t.setFullYear(a, 0, 1), t.setHours(0, 0, 0, 0), t
            }
          },
          Y: new class extends zn {
            priority = 130;
            parse(t, e, n) {
              const r = t => ({
                year: t,
                isTwoDigitYear: "YY" === e
              });
              switch (e) {
                case "Y":
                  return wr(Mr(4, t), r);
                case "Yo":
                  return wr(n.ordinalNumber(t, {
                    unit: "year"
                  }), r);
                default:
                  return wr(Mr(e.length, t), r)
              }
            }
            validate(t, e) {
              return e.isTwoDigitYear || e.year > 0
            }
            set(t, e, n, r) {
              const a = pe(t, r);
              if (n.isTwoDigitYear) {
                const e = Tr(n.year, a);
                return t.setFullYear(e, 0, r.firstWeekContainsDate), t.setHours(0, 0, 0, 0), Q(t, r)
              }
              const o = "era" in e && 1 !== e.era ? 1 - n.year : n.year;
              return t.setFullYear(o, 0, r.firstWeekContainsDate), t.setHours(0, 0, 0, 0), Q(t, r)
            }
            incompatibleTokens = ["y", "R", "u", "Q", "q", "M", "L", "I", "d", "D", "i", "t", "T"]
          },
          R: new class extends zn {
            priority = 130;
            parse(t, e) {
              return Dr("R" === e ? 4 : e.length, t)
            }
            set(t, e, n) {
              const r = v(t, 0);
              return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), L(r)
            }
            incompatibleTokens = ["G", "y", "Y", "u", "Q", "q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]
          },
          u: new class extends zn {
            priority = 130;
            parse(t, e) {
              return Dr("u" === e ? 4 : e.length, t)
            }
            set(t, e, n) {
              return t.setFullYear(n, 0, 1), t.setHours(0, 0, 0, 0), t
            }
            incompatibleTokens = ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]
          },
          Q: new class extends zn {
            priority = 120;
            parse(t, e, n) {
              switch (e) {
                case "Q":
                case "QQ":
                  return Mr(e.length, t);
                case "Qo":
                  return n.ordinalNumber(t, {
                    unit: "quarter"
                  });
                case "QQQ":
                  return n.quarter(t, {
                    width: "abbreviated",
                    context: "formatting"
                  }) || n.quarter(t, {
                    width: "narrow",
                    context: "formatting"
                  });
                case "QQQQQ":
                  return n.quarter(t, {
                    width: "narrow",
                    context: "formatting"
                  });
                default:
                  return n.quarter(t, {
                    width: "wide",
                    context: "formatting"
                  }) || n.quarter(t, {
                    width: "abbreviated",
                    context: "formatting"
                  }) || n.quarter(t, {
                    width: "narrow",
                    context: "formatting"
                  })
              }
            }
            validate(t, e) {
              return e >= 1 && e <= 4
            }
            set(t, e, n) {
              return t.setMonth(3 * (n - 1), 1), t.setHours(0, 0, 0, 0), t
            }
            incompatibleTokens = ["Y", "R", "q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]
          },
          q: new class extends zn {
            priority = 120;
            parse(t, e, n) {
              switch (e) {
                case "q":
                case "qq":
                  return Mr(e.length, t);
                case "qo":
                  return n.ordinalNumber(t, {
                    unit: "quarter"
                  });
                case "qqq":
                  return n.quarter(t, {
                    width: "abbreviated",
                    context: "standalone"
                  }) || n.quarter(t, {
                    width: "narrow",
                    context: "standalone"
                  });
                case "qqqqq":
                  return n.quarter(t, {
                    width: "narrow",
                    context: "standalone"
                  });
                default:
                  return n.quarter(t, {
                    width: "wide",
                    context: "standalone"
                  }) || n.quarter(t, {
                    width: "abbreviated",
                    context: "standalone"
                  }) || n.quarter(t, {
                    width: "narrow",
                    context: "standalone"
                  })
              }
            }
            validate(t, e) {
              return e >= 1 && e <= 4
            }
            set(t, e, n) {
              return t.setMonth(3 * (n - 1), 1), t.setHours(0, 0, 0, 0), t
            }
            incompatibleTokens = ["Y", "R", "Q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]
          },
          M: new class extends zn {
            incompatibleTokens = ["Y", "R", "q", "Q", "L", "w", "I", "D", "i", "e", "c", "t", "T"];
            priority = 110;
            parse(t, e, n) {
              const r = t => t - 1;
              switch (e) {
                case "M":
                  return wr(yr(An, t), r);
                case "MM":
                  return wr(Mr(2, t), r);
                case "Mo":
                  return wr(n.ordinalNumber(t, {
                    unit: "month"
                  }), r);
                case "MMM":
                  return n.month(t, {
                    width: "abbreviated",
                    context: "formatting"
                  }) || n.month(t, {
                    width: "narrow",
                    context: "formatting"
                  });
                case "MMMMM":
                  return n.month(t, {
                    width: "narrow",
                    context: "formatting"
                  });
                default:
                  return n.month(t, {
                    width: "wide",
                    context: "formatting"
                  }) || n.month(t, {
                    width: "abbreviated",
                    context: "formatting"
                  }) || n.month(t, {
                    width: "narrow",
                    context: "formatting"
                  })
              }
            }
            validate(t, e) {
              return e >= 0 && e <= 11
            }
            set(t, e, n) {
              return t.setMonth(n, 1), t.setHours(0, 0, 0, 0), t
            }
          },
          L: new class extends zn {
            priority = 110;
            parse(t, e, n) {
              const r = t => t - 1;
              switch (e) {
                case "L":
                  return wr(yr(An, t), r);
                case "LL":
                  return wr(Mr(2, t), r);
                case "Lo":
                  return wr(n.ordinalNumber(t, {
                    unit: "month"
                  }), r);
                case "LLL":
                  return n.month(t, {
                    width: "abbreviated",
                    context: "standalone"
                  }) || n.month(t, {
                    width: "narrow",
                    context: "standalone"
                  });
                case "LLLLL":
                  return n.month(t, {
                    width: "narrow",
                    context: "standalone"
                  });
                default:
                  return n.month(t, {
                    width: "wide",
                    context: "standalone"
                  }) || n.month(t, {
                    width: "abbreviated",
                    context: "standalone"
                  }) || n.month(t, {
                    width: "narrow",
                    context: "standalone"
                  })
              }
            }
            validate(t, e) {
              return e >= 0 && e <= 11
            }
            set(t, e, n) {
              return t.setMonth(n, 1), t.setHours(0, 0, 0, 0), t
            }
            incompatibleTokens = ["Y", "R", "q", "Q", "M", "w", "I", "D", "i", "e", "c", "t", "T"]
          },
          w: new class extends zn {
            priority = 100;
            parse(t, e, n) {
              switch (e) {
                case "w":
                  return yr(Zn, t);
                case "wo":
                  return n.ordinalNumber(t, {
                    unit: "week"
                  });
                default:
                  return Mr(e.length, t)
              }
            }
            validate(t, e) {
              return e >= 1 && e <= 53
            }
            set(t, e, n, r) {
              return Q(vr(t, n, r), r)
            }
            incompatibleTokens = ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "i", "t", "T"]
          },
          I: new class extends zn {
            priority = 100;
            parse(t, e, n) {
              switch (e) {
                case "I":
                  return yr(Zn, t);
                case "Io":
                  return n.ordinalNumber(t, {
                    unit: "week"
                  });
                default:
                  return Mr(e.length, t)
              }
            }
            validate(t, e) {
              return e >= 1 && e <= 53
            }
            set(t, e, n) {
              return L(Sr(t, n))
            }
            incompatibleTokens = ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]
          },
          d: new class extends zn {
            priority = 90;
            subPriority = 1;
            parse(t, e, n) {
              switch (e) {
                case "d":
                  return yr(Gn, t);
                case "do":
                  return n.ordinalNumber(t, {
                    unit: "date"
                  });
                default:
                  return Mr(e.length, t)
              }
            }
            validate(t, e) {
              const n = kr(t.getFullYear()),
                r = t.getMonth();
              return n ? e >= 1 && e <= Or[r] : e >= 1 && e <= Yr[r]
            }
            set(t, e, n) {
              return t.setDate(n), t.setHours(0, 0, 0, 0), t
            }
            incompatibleTokens = ["Y", "R", "q", "Q", "w", "I", "D", "i", "e", "c", "t", "T"]
          },
          D: new class extends zn {
            priority = 90;
            subpriority = 1;
            parse(t, e, n) {
              switch (e) {
                case "D":
                case "DD":
                  return yr(Un, t);
                case "Do":
                  return n.ordinalNumber(t, {
                    unit: "date"
                  });
                default:
                  return Mr(e.length, t)
              }
            }
            validate(t, e) {
              return kr(t.getFullYear()) ? e >= 1 && e <= 366 : e >= 1 && e <= 365
            }
            set(t, e, n) {
              return t.setMonth(0, n), t.setHours(0, 0, 0, 0), t
            }
            incompatibleTokens = ["Y", "R", "q", "Q", "M", "L", "w", "I", "d", "E", "i", "e", "c", "t", "T"]
          },
          E: new class extends zn {
            priority = 90;
            parse(t, e, n) {
              switch (e) {
                case "E":
                case "EE":
                case "EEE":
                  return n.day(t, {
                    width: "abbreviated",
                    context: "formatting"
                  }) || n.day(t, {
                    width: "short",
                    context: "formatting"
                  }) || n.day(t, {
                    width: "narrow",
                    context: "formatting"
                  });
                case "EEEEE":
                  return n.day(t, {
                    width: "narrow",
                    context: "formatting"
                  });
                case "EEEEEE":
                  return n.day(t, {
                    width: "short",
                    context: "formatting"
                  }) || n.day(t, {
                    width: "narrow",
                    context: "formatting"
                  });
                default:
                  return n.day(t, {
                    width: "wide",
                    context: "formatting"
                  }) || n.day(t, {
                    width: "abbreviated",
                    context: "formatting"
                  }) || n.day(t, {
                    width: "short",
                    context: "formatting"
                  }) || n.day(t, {
                    width: "narrow",
                    context: "formatting"
                  })
              }
            }
            validate(t, e) {
              return e >= 0 && e <= 6
            }
            set(t, e, n, r) {
              return (t = Nr(t, n, r)).setHours(0, 0, 0, 0), t
            }
            incompatibleTokens = ["D", "i", "e", "c", "t", "T"]
          },
          e: new class extends zn {
            priority = 90;
            parse(t, e, n, r) {
              const a = t => {
                const e = 7 * Math.floor((t - 1) / 7);
                return (t + r.weekStartsOn + 6) % 7 + e
              };
              switch (e) {
                case "e":
                case "ee":
                  return wr(Mr(e.length, t), a);
                case "eo":
                  return wr(n.ordinalNumber(t, {
                    unit: "day"
                  }), a);
                case "eee":
                  return n.day(t, {
                    width: "abbreviated",
                    context: "formatting"
                  }) || n.day(t, {
                    width: "short",
                    context: "formatting"
                  }) || n.day(t, {
                    width: "narrow",
                    context: "formatting"
                  });
                case "eeeee":
                  return n.day(t, {
                    width: "narrow",
                    context: "formatting"
                  });
                case "eeeeee":
                  return n.day(t, {
                    width: "short",
                    context: "formatting"
                  }) || n.day(t, {
                    width: "narrow",
                    context: "formatting"
                  });
                default:
                  return n.day(t, {
                    width: "wide",
                    context: "formatting"
                  }) || n.day(t, {
                    width: "abbreviated",
                    context: "formatting"
                  }) || n.day(t, {
                    width: "short",
                    context: "formatting"
                  }) || n.day(t, {
                    width: "narrow",
                    context: "formatting"
                  })
              }
            }
            validate(t, e) {
              return e >= 0 && e <= 6
            }
            set(t, e, n, r) {
              return (t = Nr(t, n, r)).setHours(0, 0, 0, 0), t
            }
            incompatibleTokens = ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "c", "t", "T"]
          },
          c: new class extends zn {
            priority = 90;
            parse(t, e, n, r) {
              const a = t => {
                const e = 7 * Math.floor((t - 1) / 7);
                return (t + r.weekStartsOn + 6) % 7 + e
              };
              switch (e) {
                case "c":
                case "cc":
                  return wr(Mr(e.length, t), a);
                case "co":
                  return wr(n.ordinalNumber(t, {
                    unit: "day"
                  }), a);
                case "ccc":
                  return n.day(t, {
                    width: "abbreviated",
                    context: "standalone"
                  }) || n.day(t, {
                    width: "short",
                    context: "standalone"
                  }) || n.day(t, {
                    width: "narrow",
                    context: "standalone"
                  });
                case "ccccc":
                  return n.day(t, {
                    width: "narrow",
                    context: "standalone"
                  });
                case "cccccc":
                  return n.day(t, {
                    width: "short",
                    context: "standalone"
                  }) || n.day(t, {
                    width: "narrow",
                    context: "standalone"
                  });
                default:
                  return n.day(t, {
                    width: "wide",
                    context: "standalone"
                  }) || n.day(t, {
                    width: "abbreviated",
                    context: "standalone"
                  }) || n.day(t, {
                    width: "short",
                    context: "standalone"
                  }) || n.day(t, {
                    width: "narrow",
                    context: "standalone"
                  })
              }
            }
            validate(t, e) {
              return e >= 0 && e <= 6
            }
            set(t, e, n, r) {
              return (t = Nr(t, n, r)).setHours(0, 0, 0, 0), t
            }
            incompatibleTokens = ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "e", "t", "T"]
          },
          i: new class extends zn {
            priority = 90;
            parse(t, e, n) {
              const r = t => 0 === t ? 7 : t;
              switch (e) {
                case "i":
                case "ii":
                  return Mr(e.length, t);
                case "io":
                  return n.ordinalNumber(t, {
                    unit: "day"
                  });
                case "iii":
                  return wr(n.day(t, {
                    width: "abbreviated",
                    context: "formatting"
                  }) || n.day(t, {
                    width: "short",
                    context: "formatting"
                  }) || n.day(t, {
                    width: "narrow",
                    context: "formatting"
                  }), r);
                case "iiiii":
                  return wr(n.day(t, {
                    width: "narrow",
                    context: "formatting"
                  }), r);
                case "iiiiii":
                  return wr(n.day(t, {
                    width: "short",
                    context: "formatting"
                  }) || n.day(t, {
                    width: "narrow",
                    context: "formatting"
                  }), r);
                default:
                  return wr(n.day(t, {
                    width: "wide",
                    context: "formatting"
                  }) || n.day(t, {
                    width: "abbreviated",
                    context: "formatting"
                  }) || n.day(t, {
                    width: "short",
                    context: "formatting"
                  }) || n.day(t, {
                    width: "narrow",
                    context: "formatting"
                  }), r)
              }
            }
            validate(t, e) {
              return e >= 1 && e <= 7
            }
            set(t, e, n) {
              return (t = Hr(t, n)).setHours(0, 0, 0, 0), t
            }
            incompatibleTokens = ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "E", "e", "c", "t", "T"]
          },
          a: new class extends zn {
            priority = 80;
            parse(t, e, n) {
              switch (e) {
                case "a":
                case "aa":
                case "aaa":
                  return n.dayPeriod(t, {
                    width: "abbreviated",
                    context: "formatting"
                  }) || n.dayPeriod(t, {
                    width: "narrow",
                    context: "formatting"
                  });
                case "aaaaa":
                  return n.dayPeriod(t, {
                    width: "narrow",
                    context: "formatting"
                  });
                default:
                  return n.dayPeriod(t, {
                    width: "wide",
                    context: "formatting"
                  }) || n.dayPeriod(t, {
                    width: "abbreviated",
                    context: "formatting"
                  }) || n.dayPeriod(t, {
                    width: "narrow",
                    context: "formatting"
                  })
              }
            }
            set(t, e, n) {
              return t.setHours(xr(n), 0, 0, 0), t
            }
            incompatibleTokens = ["b", "B", "H", "k", "t", "T"]
          },
          b: new class extends zn {
            priority = 80;
            parse(t, e, n) {
              switch (e) {
                case "b":
                case "bb":
                case "bbb":
                  return n.dayPeriod(t, {
                    width: "abbreviated",
                    context: "formatting"
                  }) || n.dayPeriod(t, {
                    width: "narrow",
                    context: "formatting"
                  });
                case "bbbbb":
                  return n.dayPeriod(t, {
                    width: "narrow",
                    context: "formatting"
                  });
                default:
                  return n.dayPeriod(t, {
                    width: "wide",
                    context: "formatting"
                  }) || n.dayPeriod(t, {
                    width: "abbreviated",
                    context: "formatting"
                  }) || n.dayPeriod(t, {
                    width: "narrow",
                    context: "formatting"
                  })
              }
            }
            set(t, e, n) {
              return t.setHours(xr(n), 0, 0, 0), t
            }
            incompatibleTokens = ["a", "B", "H", "k", "t", "T"]
          },
          B: new class extends zn {
            priority = 80;
            parse(t, e, n) {
              switch (e) {
                case "B":
                case "BB":
                case "BBB":
                  return n.dayPeriod(t, {
                    width: "abbreviated",
                    context: "formatting"
                  }) || n.dayPeriod(t, {
                    width: "narrow",
                    context: "formatting"
                  });
                case "BBBBB":
                  return n.dayPeriod(t, {
                    width: "narrow",
                    context: "formatting"
                  });
                default:
                  return n.dayPeriod(t, {
                    width: "wide",
                    context: "formatting"
                  }) || n.dayPeriod(t, {
                    width: "abbreviated",
                    context: "formatting"
                  }) || n.dayPeriod(t, {
                    width: "narrow",
                    context: "formatting"
                  })
              }
            }
            set(t, e, n) {
              return t.setHours(xr(n), 0, 0, 0), t
            }
            incompatibleTokens = ["a", "b", "t", "T"]
          },
          h: new class extends zn {
            priority = 70;
            parse(t, e, n) {
              switch (e) {
                case "h":
                  return yr(Vn, t);
                case "ho":
                  return n.ordinalNumber(t, {
                    unit: "hour"
                  });
                default:
                  return Mr(e.length, t)
              }
            }
            validate(t, e) {
              return e >= 1 && e <= 12
            }
            set(t, e, n) {
              const r = t.getHours() >= 12;
              return r && n < 12 ? t.setHours(n + 12, 0, 0, 0) : r || 12 !== n ? t.setHours(n, 0, 0, 0) : t.setHours(0, 0, 0, 0), t
            }
            incompatibleTokens = ["H", "K", "k", "t", "T"]
          },
          H: new class extends zn {
            priority = 70;
            parse(t, e, n) {
              switch (e) {
                case "H":
                  return yr(_n, t);
                case "Ho":
                  return n.ordinalNumber(t, {
                    unit: "hour"
                  });
                default:
                  return Mr(e.length, t)
              }
            }
            validate(t, e) {
              return e >= 0 && e <= 23
            }
            set(t, e, n) {
              return t.setHours(n, 0, 0, 0), t
            }
            incompatibleTokens = ["a", "b", "h", "K", "k", "t", "T"]
          },
          K: new class extends zn {
            priority = 70;
            parse(t, e, n) {
              switch (e) {
                case "K":
                  return yr(Kn, t);
                case "Ko":
                  return n.ordinalNumber(t, {
                    unit: "hour"
                  });
                default:
                  return Mr(e.length, t)
              }
            }
            validate(t, e) {
              return e >= 0 && e <= 11
            }
            set(t, e, n) {
              return t.getHours() >= 12 && n < 12 ? t.setHours(n + 12, 0, 0, 0) : t.setHours(n, 0, 0, 0), t
            }
            incompatibleTokens = ["h", "H", "k", "t", "T"]
          },
          k: new class extends zn {
            priority = 70;
            parse(t, e, n) {
              switch (e) {
                case "k":
                  return yr(Jn, t);
                case "ko":
                  return n.ordinalNumber(t, {
                    unit: "hour"
                  });
                default:
                  return Mr(e.length, t)
              }
            }
            validate(t, e) {
              return e >= 1 && e <= 24
            }
            set(t, e, n) {
              const r = n <= 24 ? n % 24 : n;
              return t.setHours(r, 0, 0, 0), t
            }
            incompatibleTokens = ["a", "b", "h", "H", "K", "t", "T"]
          },
          m: new class extends zn {
            priority = 60;
            parse(t, e, n) {
              switch (e) {
                case "m":
                  return yr(tr, t);
                case "mo":
                  return n.ordinalNumber(t, {
                    unit: "minute"
                  });
                default:
                  return Mr(e.length, t)
              }
            }
            validate(t, e) {
              return e >= 0 && e <= 59
            }
            set(t, e, n) {
              return t.setMinutes(n, 0, 0), t
            }
            incompatibleTokens = ["t", "T"]
          },
          s: new class extends zn {
            priority = 50;
            parse(t, e, n) {
              switch (e) {
                case "s":
                  return yr(er, t);
                case "so":
                  return n.ordinalNumber(t, {
                    unit: "second"
                  });
                default:
                  return Mr(e.length, t)
              }
            }
            validate(t, e) {
              return e >= 0 && e <= 59
            }
            set(t, e, n) {
              return t.setSeconds(n, 0), t
            }
            incompatibleTokens = ["t", "T"]
          },
          S: new class extends zn {
            priority = 30;
            parse(t, e) {
              return wr(Mr(e.length, t), (t => Math.trunc(t * Math.pow(10, 3 - e.length))))
            }
            set(t, e, n) {
              return t.setMilliseconds(n), t
            }
            incompatibleTokens = ["t", "T"]
          },
          X: new class extends zn {
            priority = 10;
            parse(t, e) {
              switch (e) {
                case "X":
                  return br(lr, t);
                case "XX":
                  return br(fr, t);
                case "XXXX":
                  return br(hr, t);
                case "XXXXX":
                  return br(gr, t);
                default:
                  return br(mr, t)
              }
            }
            set(t, e, n) {
              return e.timestampIsSet ? t : v(t, t.getTime() - X(t) - n)
            }
            incompatibleTokens = ["t", "T", "x"]
          },
          x: new class extends zn {
            priority = 10;
            parse(t, e) {
              switch (e) {
                case "x":
                  return br(lr, t);
                case "xx":
                  return br(fr, t);
                case "xxxx":
                  return br(hr, t);
                case "xxxxx":
                  return br(gr, t);
                default:
                  return br(mr, t)
              }
            }
            set(t, e, n) {
              return e.timestampIsSet ? t : v(t, t.getTime() - X(t) - n)
            }
            incompatibleTokens = ["t", "T", "X"]
          },
          t: new class extends zn {
            priority = 40;
            parse(t) {
              return pr(t)
            }
            set(t, e, n) {
              return [v(t, 1e3 * n), {
                timestampIsSet: !0
              }]
            }
            incompatibleTokens = "*"
          },
          T: new class extends zn {
            priority = 20;
            parse(t) {
              return pr(t)
            }
            set(t, e, n) {
              return [v(t, n), {
                timestampIsSet: !0
              }]
            }
            incompatibleTokens = "*"
          }
        },
        Wr = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
        Ir = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
        Pr = /^'([^]*?)'?$/,
        Er = /''/g,
        Cr = /\S/,
        qr = /[a-zA-Z]/;

      function $r(t, e, n, r) {
        const a = () => v(r?.in || n, NaN),
          o = fn(),
          i = r?.locale ?? o.locale ?? we,
          s = r?.firstWeekContainsDate ?? r?.locale?.options?.firstWeekContainsDate ?? o.firstWeekContainsDate ?? o.locale?.options?.firstWeekContainsDate ?? 1,
          u = r?.weekStartsOn ?? r?.locale?.options?.weekStartsOn ?? o.weekStartsOn ?? o.locale?.options?.weekStartsOn ?? 0;
        if (!e) return t ? a() : S(n, r?.in);
        const c = {
            firstWeekContainsDate: s,
            weekStartsOn: u,
            locale: i
          },
          d = [new Bn(r?.in, n)],
          l = e.match(Ir).map((t => {
            const e = t[0];
            return e in He ? (0, He[e])(t, i.formatLong) : t
          })).join("").match(Wr),
          f = [];
        for (let n of l) {
          !r?.useAdditionalWeekYearTokens && Ee(n) && Ce(n, e, t), !r?.useAdditionalDayOfYearTokens && Pe(n) && Ce(n, e, t);
          const o = n[0],
            s = Fr[o];
          if (s) {
            const {
              incompatibleTokens: e
            } = s;
            if (Array.isArray(e)) {
              const t = f.find((t => e.includes(t.token) || t.token === o));
              if (t) throw new RangeError(`The format string mustn't contain \`${t.fullToken}\` and \`${n}\` at the same time`)
            } else if ("*" === s.incompatibleTokens && f.length > 0) throw new RangeError(`The format string mustn't contain \`${n}\` and any other token at the same time`);
            f.push({
              token: o,
              fullToken: n
            });
            const r = s.run(t, n, i.match, c);
            if (!r) return a();
            d.push(r.setter), t = r.rest
          } else {
            if (o.match(qr)) throw new RangeError("Format string contains an unescaped latin alphabet character `" + o + "`");
            if ("''" === n ? n = "'" : "'" === o && (n = n.match(Pr)[1].replace(Er, "'")), 0 !== t.indexOf(n)) return a();
            t = t.slice(n.length)
          }
        }
        if (t.length > 0 && Cr.test(t)) return a();
        const h = d.map((t => t.priority)).sort(((t, e) => e - t)).filter(((t, e, n) => n.indexOf(t) === e)).map((t => d.filter((e => e.priority === t)).sort(((t, e) => e.subPriority - t.subPriority)))).map((t => t[0]));
        let m = S(n, r?.in);
        if (isNaN(+m)) return a();
        const g = {};
        for (const t of h) {
          if (!t.validate(m, c)) return a();
          const e = t.set(m, g, c);
          Array.isArray(e) ? (m = e[0], Object.assign(g, e[1])) : m = e
        }
        return m
      }

      function Qr(t, e, n) {
        return ft($r(t, e, new Date, n))
      }

      function Lr(t, e) {
        return 1 === S(t, e?.in).getDay()
      }

      function Rr(t) {
        return +S(t) < Date.now()
      }

      function Xr(t, e) {
        const n = S(t, e?.in);
        return n.setMinutes(0, 0, 0), n
      }

      function jr(t, e, n) {
        const [r, a] = j(n?.in, t, e);
        return +Xr(r) == +Xr(a)
      }

      function Br(t, e, n) {
        const [r, a] = j(n?.in, t, e);
        return +Q(r, n) == +Q(a, n)
      }

      function zr(t, e, n) {
        return Br(t, e, {
          ...n,
          weekStartsOn: 1
        })
      }

      function Ar(t, e, n) {
        const [r, a] = j(n?.in, t, e);
        return +A(r) == +A(a)
      }

      function Gr(t, e) {
        const n = S(t, e?.in);
        return n.setSeconds(0, 0), n
      }

      function Ur(t, e) {
        return +Gr(t) == +Gr(e)
      }

      function Zr(t, e, n) {
        const [r, a] = j(n?.in, t, e);
        return r.getFullYear() === a.getFullYear() && r.getMonth() === a.getMonth()
      }

      function _r(t, e, n) {
        const [r, a] = j(n?.in, t, e);
        return +Xt(r) == +Xt(a)
      }

      function Jr(t, e) {
        const n = S(t, e?.in);
        return n.setMilliseconds(0), n
      }

      function Kr(t, e) {
        return +Jr(t) == +Jr(e)
      }

      function Vr(t, e, n) {
        const [r, a] = j(n?.in, t, e);
        return r.getFullYear() === a.getFullYear()
      }

      function ta(t, e) {
        return jr(S(t, e?.in), ut(e?.in || t))
      }

      function ea(t, e) {
        return zr(v(e?.in || t, t), ut(e?.in || t))
      }

      function na(t) {
        return Ur(t, ut(t))
      }

      function ra(t, e) {
        return Zr(v(e?.in || t, t), ut(e?.in || t))
      }

      function aa(t, e) {
        return _r(v(e?.in || t, t), ut(e?.in || t))
      }

      function oa(t) {
        return Kr(t, ut(t))
      }

      function ia(t, e) {
        return Br(v(e?.in || t, t), ut(e?.in || t), e)
      }

      function sa(t, e) {
        return Vr(v(e?.in || t, t), ut(e?.in || t))
      }

      function ua(t, e) {
        return 4 === S(t, e?.in).getDay()
      }

      function ca(t, e) {
        return dt(v(e?.in || t, t), ut(e?.in || t))
      }

      function da(t, e) {
        return dt(t, Y(ut(e?.in || t), 1), e)
      }

      function la(t, e) {
        return 2 === S(t, e?.in).getDay()
      }

      function fa(t, e) {
        return 3 === S(t, e?.in).getDay()
      }

      function ha(t, e, n) {
        const r = +S(t, n?.in),
          [a, o] = [+S(e.start, n?.in), +S(e.end, n?.in)].sort(((t, e) => t - e));
        return r >= a && r <= o
      }

      function ma(t, e, n) {
        return Y(t, -e, n)
      }

      function ga(t, e) {
        return dt(v(e?.in || t, t), ma(ut(e?.in || t), 1))
      }

      function wa(t, e) {
        const n = S(t, e?.in),
          r = n.getFullYear(),
          a = 9 + 10 * Math.floor(r / 10);
        return n.setFullYear(a + 1, 0, 0), n.setHours(0, 0, 0, 0), S(n, e?.in)
      }

      function ya(t, e) {
        const n = q(),
          r = e?.weekStartsOn ?? e?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0,
          a = S(t, e?.in),
          o = a.getDay(),
          i = 6 + (o < r ? -7 : 0) - (o - r);
        return a.setHours(0, 0, 0, 0), a.setDate(a.getDate() + i), a
      }

      function ba(t, e) {
        return ya(t, {
          ...e,
          weekStartsOn: 1
        })
      }

      function pa(t, e) {
        const n = R(t, e),
          r = v(e?.in || t, 0);
        r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
        const a = L(r, e);
        return a.setDate(a.getDate() - 1), a
      }

      function Ma(t, e) {
        const n = S(t, e?.in),
          r = n.getMonth(),
          a = r - r % 3 + 3;
        return n.setMonth(a, 0), n.setHours(0, 0, 0, 0), n
      }

      function Da(t, e) {
        const n = S(t, e?.in),
          r = n.getFullYear();
        return n.setFullYear(r + 1, 0, 0), n.setHours(0, 0, 0, 0), n
      }
      const xa = /(\w)\1*|''|'(''|[^'])+('|$)|./g,
        Ta = /^'([^]*?)'?$/,
        ka = /''/g,
        va = /[a-zA-Z]/;

      function Sa(t, e) {
        const n = S(t);
        if (!ft(n)) throw new RangeError("Invalid time value");
        const r = e.match(xa);
        return r ? r.map((t => {
          if ("''" === t) return "'";
          const e = t[0];
          if ("'" === e) return function(t) {
            const e = t.match(Ta);
            return e ? e[1].replace(ka, "'") : t
          }(t);
          const r = Te[e];
          if (r) return r(n, t);
          if (e.match(va)) throw new RangeError("Format string contains an unescaped latin alphabet character `" + e + "`");
          return t
        })).join("") : ""
      }

      function Ya({
        years: t,
        months: e,
        weeks: n,
        days: r,
        hours: o,
        minutes: i,
        seconds: s
      }) {
        let u = 0;
        t && (u += t * a), e && (u += e * (a / 12)), n && (u += 7 * n), r && (u += r);
        let c = 24 * u * 60 * 60;
        return o && (c += 60 * o * 60), i && (c += 60 * i), s && (c += s), Math.trunc(1e3 * c)
      }

      function Oa(t) {
        const e = t / u;
        return Math.trunc(e)
      }

      function Na(t) {
        const e = t / s;
        return Math.trunc(e)
      }

      function Ha(t) {
        const e = t / c;
        return Math.trunc(e)
      }

      function Fa(t) {
        const e = t / h;
        return Math.trunc(e)
      }

      function Wa(t) {
        return Math.trunc(t * s)
      }

      function Ia(t) {
        return Math.trunc(t * b)
      }

      function Pa(t) {
        const e = t / m;
        return Math.trunc(e)
      }

      function Ea(t) {
        const e = t / g;
        return Math.trunc(e)
      }

      function Ca(t, e, n) {
        let r = e - sn(t, n);
        return r <= 0 && (r += 7), Y(t, r, n)
      }

      function qa(t, e) {
        return Ca(t, 5, e)
      }

      function $a(t, e) {
        return Ca(t, 1, e)
      }

      function Qa(t, e) {
        return Ca(t, 6, e)
      }

      function La(t, e) {
        return Ca(t, 0, e)
      }

      function Ra(t, e) {
        return Ca(t, 4, e)
      }

      function Xa(t, e) {
        return Ca(t, 2, e)
      }

      function ja(t, e) {
        return Ca(t, 3, e)
      }

      function Ba(t, e) {
        const n = () => v(e?.in, NaN),
          r = e?.additionalDigits ?? 2,
          a = function(t) {
            const e = {},
              n = t.split(za.dateTimeDelimiter);
            let r;
            if (n.length > 2) return e;
            if (/:/.test(n[0]) ? r = n[0] : (e.date = n[0], r = n[1], za.timeZoneDelimiter.test(e.date) && (e.date = t.split(za.timeZoneDelimiter)[0], r = t.substr(e.date.length, t.length))), r) {
              const t = za.timezone.exec(r);
              t ? (e.time = r.replace(t[1], ""), e.timezone = t[1]) : e.time = r
            }
            return e
          }(t);
        let o;
        if (a.date) {
          const t = function(t, e) {
            const n = new RegExp("^(?:(\\d{4}|[+-]\\d{" + (4 + e) + "})|(\\d{2}|[+-]\\d{" + (2 + e) + "})$)"),
              r = t.match(n);
            if (!r) return {
              year: NaN,
              restDateString: ""
            };
            const a = r[1] ? parseInt(r[1]) : null,
              o = r[2] ? parseInt(r[2]) : null;
            return {
              year: null === o ? a : 100 * o,
              restDateString: t.slice((r[1] || r[2]).length)
            }
          }(a.date, r);
          o = function(t, e) {
            if (null === e) return new Date(NaN);
            const n = t.match(Aa);
            if (!n) return new Date(NaN);
            const r = !!n[4],
              a = Za(n[1]),
              o = Za(n[2]) - 1,
              i = Za(n[3]),
              s = Za(n[4]),
              u = Za(n[5]) - 1;
            if (r) return function(t, e, n) {
              return e >= 1 && e <= 53 && n >= 0 && n <= 6
            }(0, s, u) ? function(t, e, n) {
              const r = new Date(0);
              r.setUTCFullYear(t, 0, 4);
              const a = 7 * (e - 1) + n + 1 - (r.getUTCDay() || 7);
              return r.setUTCDate(r.getUTCDate() + a), r
            }(e, s, u) : new Date(NaN); {
              const t = new Date(0);
              return function(t, e, n) {
                return e >= 0 && e <= 11 && n >= 1 && n <= (Ja[e] || (Ka(t) ? 29 : 28))
              }(e, o, i) && function(t, e) {
                return e >= 1 && e <= (Ka(t) ? 366 : 365)
              }(e, a) ? (t.setUTCFullYear(e, o, Math.max(a, i)), t) : new Date(NaN)
            }
          }(t.restDateString, t.year)
        }
        if (!o || isNaN(+o)) return n();
        const i = +o;
        let c, d = 0;
        if (a.time && (d = function(t) {
            const e = t.match(Ga);
            if (!e) return NaN;
            const n = _a(e[1]),
              r = _a(e[2]),
              a = _a(e[3]);
            return function(t, e, n) {
              return 24 === t ? 0 === e && 0 === n : n >= 0 && n < 60 && e >= 0 && e < 60 && t >= 0 && t < 25
            }(n, r, a) ? n * u + r * s + 1e3 * a : NaN
          }(a.time), isNaN(d))) return n();
        if (!a.timezone) {
          const t = new Date(i + d),
            n = S(0, e?.in);
          return n.setFullYear(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()), n.setHours(t.getUTCHours(), t.getUTCMinutes(), t.getUTCSeconds(), t.getUTCMilliseconds()), n
        }
        return c = function(t) {
          if ("Z" === t) return 0;
          const e = t.match(Ua);
          if (!e) return 0;
          const n = "+" === e[1] ? -1 : 1,
            r = parseInt(e[2]),
            a = e[3] && parseInt(e[3]) || 0;
          return function(t, e) {
            return e >= 0 && e <= 59
          }(0, a) ? n * (r * u + a * s) : NaN
        }(a.timezone), isNaN(c) ? n() : S(i + d + c, e?.in)
      }
      const za = {
          dateTimeDelimiter: /[T ]/,
          timeZoneDelimiter: /[Z ]/i,
          timezone: /([Z+-].*)$/
        },
        Aa = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,
        Ga = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,
        Ua = /^([+-])(\d{2})(?::?(\d{2}))?$/;

      function Za(t) {
        return t ? parseInt(t) : 1
      }

      function _a(t) {
        return t && parseFloat(t.replace(",", ".")) || 0
      }
      const Ja = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

      function Ka(t) {
        return t % 400 == 0 || t % 4 == 0 && t % 100 != 0
      }

      function Va(t, e) {
        const n = t.match(/(\d{4})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2}):(\d{2})(?:\.(\d{0,7}))?(?:Z|(.)(\d{2}):?(\d{2})?)?/);
        return S(n ? Date.UTC(+n[1], +n[2] - 1, +n[3], +n[4] - (+n[9] || 0) * ("-" == n[8] ? -1 : 1), +n[5] - (+n[10] || 0) * ("-" == n[8] ? -1 : 1), +n[6], +((n[7] || "0") + "00").substring(0, 3)) : NaN, e?.in)
      }

      function to(t, e, n) {
        let r = sn(t, n) - e;
        return r <= 0 && (r += 7), ma(t, r, n)
      }

      function eo(t, e) {
        return to(t, 5, e)
      }

      function no(t, e) {
        return to(t, 1, e)
      }

      function ro(t, e) {
        return to(t, 6, e)
      }

      function ao(t, e) {
        return to(t, 0, e)
      }

      function oo(t, e) {
        return to(t, 4, e)
      }

      function io(t, e) {
        return to(t, 2, e)
      }

      function so(t, e) {
        return to(t, 3, e)
      }

      function uo(t) {
        return Math.trunc(t * m)
      }

      function co(t) {
        const e = t / w;
        return Math.trunc(e)
      }

      function lo(t, e) {
        const n = e?.nearestTo ?? 1;
        if (n < 1 || n > 12) return v(e?.in || t, NaN);
        const r = S(t, e?.in),
          a = r.getMinutes() / 60,
          o = r.getSeconds() / 60 / 60,
          i = r.getMilliseconds() / 1e3 / 60 / 60,
          s = r.getHours() + a + o + i,
          u = Tt(e?.roundingMethod ?? "round")(s / n) * n;
        return r.setHours(u, 0, 0, 0), r
      }

      function fo(t, e) {
        const n = e?.nearestTo ?? 1;
        if (n < 1 || n > 30) return v(t, NaN);
        const r = S(t, e?.in),
          a = r.getSeconds() / 60,
          o = r.getMilliseconds() / 1e3 / 60,
          i = r.getMinutes() + a + o,
          s = Tt(e?.roundingMethod ?? "round")(i / n) * n;
        return r.setMinutes(s, 0, 0), r
      }

      function ho(t) {
        const e = t / y;
        return Math.trunc(e)
      }

      function mo(t) {
        return t * c
      }

      function go(t) {
        const e = t / b;
        return Math.trunc(e)
      }

      function wo(t, e, n) {
        const r = S(t, n?.in),
          a = r.getFullYear(),
          o = r.getDate(),
          i = v(n?.in || t, 0);
        i.setFullYear(a, e, 15), i.setHours(0, 0, 0, 0);
        const s = un(i);
        return r.setMonth(e, Math.min(o, s)), r
      }

      function yo(t, e, n) {
        let r = S(t, n?.in);
        return isNaN(+r) ? v(n?.in || t, NaN) : (null != e.year && r.setFullYear(e.year), null != e.month && (r = wo(r, e.month)), null != e.date && r.setDate(e.date), null != e.hours && r.setHours(e.hours), null != e.minutes && r.setMinutes(e.minutes), null != e.seconds && r.setSeconds(e.seconds), null != e.milliseconds && r.setMilliseconds(e.milliseconds), r)
      }

      function bo(t, e, n) {
        const r = S(t, n?.in);
        return r.setDate(e), r
      }

      function po(t, e, n) {
        const r = S(t, n?.in);
        return r.setMonth(0), r.setDate(e), r
      }

      function Mo(t) {
        const e = {},
          n = q();
        for (const t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
        for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && (void 0 === t[n] ? delete e[n] : e[n] = t[n]);
        $(e)
      }

      function Do(t, e, n) {
        const r = S(t, n?.in);
        return r.setHours(e), r
      }

      function xo(t, e, n) {
        const r = S(t, n?.in);
        return r.setMilliseconds(e), r
      }

      function To(t, e, n) {
        const r = S(t, n?.in);
        return r.setMinutes(e), r
      }

      function ko(t, e, n) {
        const r = S(t, n?.in),
          a = e - (Math.trunc(r.getMonth() / 3) + 1);
        return wo(r, r.getMonth() + 3 * a)
      }

      function vo(t, e, n) {
        const r = S(t, n?.in);
        return r.setSeconds(e), r
      }

      function So(t, e, n) {
        const r = q(),
          a = n?.firstWeekContainsDate ?? n?.locale?.options?.firstWeekContainsDate ?? r.firstWeekContainsDate ?? r.locale?.options?.firstWeekContainsDate ?? 1,
          o = z(S(t, n?.in), Me(t, n), n),
          i = v(n?.in || t, 0);
        i.setFullYear(e, 0, a), i.setHours(0, 0, 0, 0);
        const s = Me(i, n);
        return s.setDate(s.getDate() + o), s
      }

      function Yo(t, e, n) {
        const r = S(t, n?.in);
        return isNaN(+r) ? v(n?.in || t, NaN) : (r.setFullYear(e), r)
      }

      function Oo(t, e) {
        const n = S(t, e?.in),
          r = n.getFullYear(),
          a = 10 * Math.floor(r / 10);
        return n.setFullYear(a, 0, 1), n.setHours(0, 0, 0, 0), n
      }

      function No(t) {
        return B(Date.now(), t)
      }

      function Ho(t) {
        const e = ut(t?.in),
          n = e.getFullYear(),
          r = e.getMonth(),
          a = e.getDate(),
          o = v(t?.in, 0);
        return o.setFullYear(n, r, a + 1), o.setHours(0, 0, 0, 0), o
      }

      function Fo(t) {
        const e = ut(t?.in),
          n = e.getFullYear(),
          r = e.getMonth(),
          a = e.getDate(),
          o = ut(t?.in);
        return o.setFullYear(n, r, a - 1), o.setHours(0, 0, 0, 0), o
      }

      function Wo(t, e, n) {
        return O(t, -e, n)
      }

      function Io(t, e, n) {
        const {
          years: r = 0,
          months: a = 0,
          weeks: o = 0,
          days: i = 0,
          hours: s = 0,
          minutes: u = 0,
          seconds: c = 0
        } = e, d = ma(Wo(t, a + 12 * r, n), i + 7 * o, n), l = 1e3 * (c + 60 * (u + 60 * s));
        return v(n?.in || t, +d - l)
      }

      function Po(t, e, n) {
        return I(t, -e, n)
      }

      function Eo(t, e, n) {
        return E(t, -e, n)
      }

      function Co(t, e, n) {
        return P(t, -e, n)
      }

      function qo(t, e, n) {
        return Z(t, -e, n)
      }

      function $o(t, e, n) {
        return _(t, -e, n)
      }

      function Qo(t, e, n) {
        return J(t, -e, n)
      }

      function Lo(t, e, n) {
        return K(t, -e, n)
      }

      function Ro(t, e, n) {
        return V(t, -e, n)
      }

      function Xo(t) {
        return Math.trunc(t * r)
      }

      function jo(t) {
        return Math.trunc(t * a)
      }

      function Bo(t) {
        return Math.trunc(t * g)
      }

      function zo(t) {
        return Math.trunc(t * w)
      }
    }
  }
]);