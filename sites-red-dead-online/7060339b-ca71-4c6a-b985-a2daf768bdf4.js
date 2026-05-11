try {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    e = (new t.Error).stack;
  e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "7060339b-ca71-4c6a-b985-a2daf768bdf4", t._sentryDebugIdIdentifier = "sentry-dbid-7060339b-ca71-4c6a-b985-a2daf768bdf4")
} catch (t) {} {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[(new t.Error).stack] = Object.assign({}, t._sentryModuleMetadata[(new t.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-red-dead-online",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_red_dead_online = self.webpackChunk_rockstargames_sites_red_dead_online || []).push([
  [7910], {
    57910(t, e, n) {
      n.r(e), n.d(e, {
        add: () => b,
        addBusinessDays: () => x,
        addDays: () => w,
        addHours: () => k,
        addISOWeekYears: () => q,
        addMilliseconds: () => T,
        addMinutes: () => $,
        addMonths: () => y,
        addQuarters: () => Q,
        addSeconds: () => L,
        addWeeks: () => R,
        addYears: () => X,
        areIntervalsOverlapping: () => j,
        clamp: () => A,
        closestIndexTo: () => G,
        closestTo: () => U,
        compareAsc: () => Z,
        compareDesc: () => _,
        constructFrom: () => m,
        constructNow: () => J,
        daysToWeeks: () => K,
        differenceInBusinessDays: () => nt,
        differenceInCalendarDays: () => P,
        differenceInCalendarISOWeekYears: () => rt,
        differenceInCalendarISOWeeks: () => at,
        differenceInCalendarMonths: () => ot,
        differenceInCalendarQuarters: () => st,
        differenceInCalendarWeeks: () => ut,
        differenceInCalendarYears: () => ct,
        differenceInDays: () => dt,
        differenceInHours: () => ht,
        differenceInISOWeekYears: () => gt,
        differenceInMilliseconds: () => wt,
        differenceInMinutes: () => yt,
        differenceInMonths: () => Dt,
        differenceInQuarters: () => xt,
        differenceInSeconds: () => Tt,
        differenceInWeeks: () => kt,
        differenceInYears: () => vt,
        eachDayOfInterval: () => Yt,
        eachHourOfInterval: () => Ot,
        eachMinuteOfInterval: () => Nt,
        eachMonthOfInterval: () => Ht,
        eachQuarterOfInterval: () => Wt,
        eachWeekOfInterval: () => It,
        eachWeekendOfInterval: () => Pt,
        eachWeekendOfMonth: () => Ct,
        eachWeekendOfYear: () => Qt,
        eachYearOfInterval: () => Lt,
        endOfDay: () => bt,
        endOfDecade: () => Rt,
        endOfHour: () => Xt,
        endOfISOWeek: () => Bt,
        endOfISOWeekYear: () => zt,
        endOfMinute: () => At,
        endOfMonth: () => pt,
        endOfQuarter: () => Gt,
        endOfSecond: () => Ut,
        endOfToday: () => Zt,
        endOfTomorrow: () => _t,
        endOfWeek: () => jt,
        endOfYear: () => qt,
        endOfYesterday: () => Jt,
        format: () => Fe,
        formatDate: () => Fe,
        formatDistance: () => Ie,
        formatDistanceStrict: () => Pe,
        formatDistanceToNow: () => Ee,
        formatDistanceToNowStrict: () => Ce,
        formatDuration: () => $e,
        formatISO: () => Qe,
        formatISO9075: () => Le,
        formatISODuration: () => Re,
        formatRFC3339: () => Xe,
        formatRFC7231: () => ze,
        formatRelative: () => Ae,
        formatters: () => he,
        fromUnixTime: () => Ge,
        getDate: () => Ue,
        getDay: () => Ze,
        getDayOfYear: () => ie,
        getDaysInMonth: () => _e,
        getDaysInYear: () => Ke,
        getDecade: () => Ve,
        getDefaultOptions: () => tn,
        getHours: () => en,
        getISODay: () => nn,
        getISOWeek: () => se,
        getISOWeekYear: () => H,
        getISOWeeksInYear: () => rn,
        getMilliseconds: () => an,
        getMinutes: () => on,
        getMonth: () => sn,
        getOverlappingDaysInIntervals: () => un,
        getQuarter: () => it,
        getSeconds: () => cn,
        getTime: () => dn,
        getUnixTime: () => ln,
        getWeek: () => de,
        getWeekOfMonth: () => fn,
        getWeekYear: () => ue,
        getWeeksInMonth: () => mn,
        getYear: () => gn,
        hoursToMilliseconds: () => wn,
        hoursToMinutes: () => yn,
        hoursToSeconds: () => bn,
        interval: () => pn,
        intervalToDuration: () => Mn,
        intlFormat: () => Dn,
        intlFormatDistance: () => xn,
        isAfter: () => Tn,
        isBefore: () => kn,
        isDate: () => tt,
        isEqual: () => vn,
        isExists: () => Sn,
        isFirstDayOfMonth: () => Yn,
        isFriday: () => On,
        isFuture: () => Nn,
        isLastDayOfMonth: () => Mt,
        isLeapYear: () => Je,
        isMatch: () => Nr,
        isMonday: () => Hr,
        isPast: () => Fr,
        isSameDay: () => V,
        isSameHour: () => Ir,
        isSameISOWeek: () => Er,
        isSameISOWeekYear: () => Cr,
        isSameMinute: () => $r,
        isSameMonth: () => Qr,
        isSameQuarter: () => Lr,
        isSameSecond: () => Xr,
        isSameWeek: () => Pr,
        isSameYear: () => jr,
        isSaturday: () => p,
        isSunday: () => M,
        isThisHour: () => Br,
        isThisISOWeek: () => zr,
        isThisMinute: () => Ar,
        isThisMonth: () => Gr,
        isThisQuarter: () => Ur,
        isThisSecond: () => Zr,
        isThisWeek: () => _r,
        isThisYear: () => Jr,
        isThursday: () => Kr,
        isToday: () => Vr,
        isTomorrow: () => ta,
        isTuesday: () => ea,
        isValid: () => et,
        isWednesday: () => na,
        isWeekend: () => D,
        isWithinInterval: () => ra,
        isYesterday: () => oa,
        lastDayOfDecade: () => ia,
        lastDayOfISOWeek: () => ua,
        lastDayOfISOWeekYear: () => ca,
        lastDayOfMonth: () => hn,
        lastDayOfQuarter: () => da,
        lastDayOfWeek: () => sa,
        lastDayOfYear: () => la,
        lightFormat: () => wa,
        lightFormatters: () => fe,
        longFormatters: () => pe,
        max: () => B,
        milliseconds: () => ya,
        millisecondsToHours: () => ba,
        millisecondsToMinutes: () => pa,
        millisecondsToSeconds: () => Ma,
        min: () => z,
        minutesToHours: () => Da,
        minutesToMilliseconds: () => xa,
        minutesToSeconds: () => Ta,
        monthsToQuarters: () => ka,
        monthsToYears: () => va,
        nextDay: () => Sa,
        nextFriday: () => Ya,
        nextMonday: () => Oa,
        nextSaturday: () => Na,
        nextSunday: () => Ha,
        nextThursday: () => Fa,
        nextTuesday: () => Wa,
        nextWednesday: () => Ia,
        parse: () => Yr,
        parseISO: () => Pa,
        parseJSON: () => ja,
        parsers: () => Mr,
        previousDay: () => Ba,
        previousFriday: () => za,
        previousMonday: () => Aa,
        previousSaturday: () => Ga,
        previousSunday: () => Ua,
        previousThursday: () => Za,
        previousTuesday: () => _a,
        previousWednesday: () => Ja,
        quartersToMonths: () => Ka,
        quartersToYears: () => Va,
        roundToNearestHours: () => to,
        roundToNearestMinutes: () => eo,
        secondsToHours: () => no,
        secondsToMilliseconds: () => ro,
        secondsToMinutes: () => ao,
        set: () => io,
        setDate: () => so,
        setDay: () => br,
        setDayOfYear: () => uo,
        setDefaultOptions: () => co,
        setHours: () => lo,
        setISODay: () => pr,
        setISOWeek: () => gr,
        setISOWeekYear: () => C,
        setMilliseconds: () => fo,
        setMinutes: () => ho,
        setMonth: () => oo,
        setQuarter: () => mo,
        setSeconds: () => go,
        setWeek: () => mr,
        setWeekYear: () => wo,
        setYear: () => yo,
        startOfDay: () => I,
        startOfDecade: () => bo,
        startOfHour: () => Wr,
        startOfISOWeek: () => N,
        startOfISOWeekYear: () => E,
        startOfMinute: () => qr,
        startOfMonth: () => Et,
        startOfQuarter: () => Ft,
        startOfSecond: () => Rr,
        startOfToday: () => po,
        startOfTomorrow: () => Mo,
        startOfWeek: () => O,
        startOfWeekYear: () => ce,
        startOfYear: () => $t,
        startOfYesterday: () => Do,
        sub: () => To,
        subBusinessDays: () => ko,
        subDays: () => aa,
        subHours: () => vo,
        subISOWeekYears: () => mt,
        subMilliseconds: () => So,
        subMinutes: () => Yo,
        subMonths: () => xo,
        subQuarters: () => Oo,
        subSeconds: () => No,
        subWeeks: () => Ho,
        subYears: () => Fo,
        toDate: () => g,
        transpose: () => Hn,
        weeksToDays: () => Wo,
        yearsToDays: () => Io,
        yearsToMonths: () => Po,
        yearsToQuarters: () => Eo
      });
      const r = 365.2425,
        a = (Math.pow(10, 8), 6048e5),
        o = 864e5,
        i = 6e4,
        s = 36e5,
        u = 1e3,
        c = 525600,
        d = 43200,
        l = 1440,
        f = 3600,
        h = Symbol.for("constructDateFrom");

      function m(t, e) {
        return "function" == typeof t ? t(e) : t && "object" == typeof t && h in t ? t[h](e) : t instanceof Date ? new t.constructor(e) : new Date(e)
      }

      function g(t, e) {
        return m(e || t, t)
      }

      function w(t, e, n) {
        const r = g(t, n?.in);
        return isNaN(e) ? m(n?.in || t, NaN) : e ? (r.setDate(r.getDate() + e), r) : r
      }

      function y(t, e, n) {
        const r = g(t, n?.in);
        if (isNaN(e)) return m(n?.in || t, NaN);
        if (!e) return r;
        const a = r.getDate(),
          o = m(n?.in || t, r.getTime());
        return o.setMonth(r.getMonth() + e + 1, 0), a >= o.getDate() ? o : (r.setFullYear(o.getFullYear(), o.getMonth(), a), r)
      }

      function b(t, e, n) {
        const {
          years: r = 0,
          months: a = 0,
          weeks: o = 0,
          days: i = 0,
          hours: s = 0,
          minutes: u = 0,
          seconds: c = 0
        } = e, d = g(t, n?.in), l = a || r ? y(d, a + 12 * r) : d, f = i || o ? w(l, i + 7 * o) : l, h = 1e3 * (c + 60 * (u + 60 * s));
        return m(n?.in || t, +f + h)
      }

      function p(t, e) {
        return 6 === g(t, e?.in).getDay()
      }

      function M(t, e) {
        return 0 === g(t, e?.in).getDay()
      }

      function D(t, e) {
        const n = g(t, e?.in).getDay();
        return 0 === n || 6 === n
      }

      function x(t, e, n) {
        const r = g(t, n?.in),
          a = D(r, n);
        if (isNaN(e)) return m(n?.in, NaN);
        const o = r.getHours(),
          i = e < 0 ? -1 : 1,
          s = Math.trunc(e / 5);
        r.setDate(r.getDate() + 7 * s);
        let u = Math.abs(e % 5);
        for (; u > 0;) r.setDate(r.getDate() + i), D(r, n) || (u -= 1);
        return a && D(r, n) && 0 !== e && (p(r, n) && r.setDate(r.getDate() + (i < 0 ? 2 : -1)), M(r, n) && r.setDate(r.getDate() + (i < 0 ? 1 : -2))), r.setHours(o), r
      }

      function T(t, e, n) {
        return m(n?.in || t, +g(t) + e)
      }

      function k(t, e, n) {
        return T(t, e * s, n)
      }
      let v = {};

      function S() {
        return v
      }

      function Y(t) {
        v = t
      }

      function O(t, e) {
        const n = S(),
          r = e?.weekStartsOn ?? e?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0,
          a = g(t, e?.in),
          o = a.getDay(),
          i = (o < r ? 7 : 0) + o - r;
        return a.setDate(a.getDate() - i), a.setHours(0, 0, 0, 0), a
      }

      function N(t, e) {
        return O(t, {
          ...e,
          weekStartsOn: 1
        })
      }

      function H(t, e) {
        const n = g(t, e?.in),
          r = n.getFullYear(),
          a = m(n, 0);
        a.setFullYear(r + 1, 0, 4), a.setHours(0, 0, 0, 0);
        const o = N(a),
          i = m(n, 0);
        i.setFullYear(r, 0, 4), i.setHours(0, 0, 0, 0);
        const s = N(i);
        return n.getTime() >= o.getTime() ? r + 1 : n.getTime() >= s.getTime() ? r : r - 1
      }

      function F(t) {
        const e = g(t),
          n = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
        return n.setUTCFullYear(e.getFullYear()), +t - +n
      }

      function W(t, ...e) {
        const n = m.bind(null, t || e.find(t => "object" == typeof t));
        return e.map(n)
      }

      function I(t, e) {
        const n = g(t, e?.in);
        return n.setHours(0, 0, 0, 0), n
      }

      function P(t, e, n) {
        const [r, a] = W(n?.in, t, e), i = I(r), s = I(a), u = +i - F(i), c = +s - F(s);
        return Math.round((u - c) / o)
      }

      function E(t, e) {
        const n = H(t, e),
          r = m(e?.in || t, 0);
        return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), N(r)
      }

      function C(t, e, n) {
        let r = g(t, n?.in);
        const a = P(r, E(r, n)),
          o = m(n?.in || t, 0);
        return o.setFullYear(e, 0, 4), o.setHours(0, 0, 0, 0), r = E(o), r.setDate(r.getDate() + a), r
      }

      function q(t, e, n) {
        return C(t, H(t, n) + e, n)
      }

      function $(t, e, n) {
        const r = g(t, n?.in);
        return r.setTime(r.getTime() + e * i), r
      }

      function Q(t, e, n) {
        return y(t, 3 * e, n)
      }

      function L(t, e, n) {
        return T(t, 1e3 * e, n)
      }

      function R(t, e, n) {
        return w(t, 7 * e, n)
      }

      function X(t, e, n) {
        return y(t, 12 * e, n)
      }

      function j(t, e, n) {
        const [r, a] = [+g(t.start, n?.in), +g(t.end, n?.in)].sort((t, e) => t - e), [o, i] = [+g(e.start, n?.in), +g(e.end, n?.in)].sort((t, e) => t - e);
        return n?.inclusive ? r <= i && o <= a : r < i && o < a
      }

      function B(t, e) {
        let n, r = e?.in;
        return t.forEach(t => {
          r || "object" != typeof t || (r = m.bind(null, t));
          const e = g(t, r);
          (!n || n < e || isNaN(+e)) && (n = e)
        }), m(r, n || NaN)
      }

      function z(t, e) {
        let n, r = e?.in;
        return t.forEach(t => {
          r || "object" != typeof t || (r = m.bind(null, t));
          const e = g(t, r);
          (!n || n > e || isNaN(+e)) && (n = e)
        }), m(r, n || NaN)
      }

      function A(t, e, n) {
        const [r, a, o] = W(n?.in, t, e.start, e.end);
        return z([B([r, a], n), o], n)
      }

      function G(t, e) {
        const n = +g(t);
        if (isNaN(n)) return NaN;
        let r, a;
        return e.forEach((t, e) => {
          const o = g(t);
          if (isNaN(+o)) return r = NaN, void(a = NaN);
          const i = Math.abs(n - +o);
          (null == r || i < a) && (r = e, a = i)
        }), r
      }

      function U(t, e, n) {
        const [r, ...a] = W(n?.in, t, ...e), o = G(r, a);
        return "number" == typeof o && isNaN(o) ? m(r, NaN) : void 0 !== o ? a[o] : void 0
      }

      function Z(t, e) {
        const n = +g(t) - +g(e);
        return n < 0 ? -1 : n > 0 ? 1 : n
      }

      function _(t, e) {
        const n = +g(t) - +g(e);
        return n > 0 ? -1 : n < 0 ? 1 : n
      }

      function J(t) {
        return m(t, Date.now())
      }

      function K(t) {
        const e = Math.trunc(t / 7);
        return 0 === e ? 0 : e
      }

      function V(t, e, n) {
        const [r, a] = W(n?.in, t, e);
        return +I(r) === +I(a)
      }

      function tt(t) {
        return t instanceof Date || "object" == typeof t && "[object Date]" === Object.prototype.toString.call(t)
      }

      function et(t) {
        return !(!tt(t) && "number" != typeof t || isNaN(+g(t)))
      }

      function nt(t, e, n) {
        const [r, a] = W(n?.in, t, e);
        if (!et(r) || !et(a)) return NaN;
        const o = P(r, a),
          i = o < 0 ? -1 : 1,
          s = Math.trunc(o / 7);
        let u = 5 * s,
          c = w(a, 7 * s);
        for (; !V(r, c);) u += D(c, n) ? 0 : i, c = w(c, i);
        return 0 === u ? 0 : u
      }

      function rt(t, e, n) {
        const [r, a] = W(n?.in, t, e);
        return H(r, n) - H(a, n)
      }

      function at(t, e, n) {
        const [r, o] = W(n?.in, t, e), i = N(r), s = N(o), u = +i - F(i), c = +s - F(s);
        return Math.round((u - c) / a)
      }

      function ot(t, e, n) {
        const [r, a] = W(n?.in, t, e);
        return 12 * (r.getFullYear() - a.getFullYear()) + (r.getMonth() - a.getMonth())
      }

      function it(t, e) {
        const n = g(t, e?.in);
        return Math.trunc(n.getMonth() / 3) + 1
      }

      function st(t, e, n) {
        const [r, a] = W(n?.in, t, e);
        return 4 * (r.getFullYear() - a.getFullYear()) + (it(r) - it(a))
      }

      function ut(t, e, n) {
        const [r, o] = W(n?.in, t, e), i = O(r, n), s = O(o, n), u = +i - F(i), c = +s - F(s);
        return Math.round((u - c) / a)
      }

      function ct(t, e, n) {
        const [r, a] = W(n?.in, t, e);
        return r.getFullYear() - a.getFullYear()
      }

      function dt(t, e, n) {
        const [r, a] = W(n?.in, t, e), o = lt(r, a), i = Math.abs(P(r, a));
        r.setDate(r.getDate() - o * i);
        const s = o * (i - Number(lt(r, a) === -o));
        return 0 === s ? 0 : s
      }

      function lt(t, e) {
        const n = t.getFullYear() - e.getFullYear() || t.getMonth() - e.getMonth() || t.getDate() - e.getDate() || t.getHours() - e.getHours() || t.getMinutes() - e.getMinutes() || t.getSeconds() - e.getSeconds() || t.getMilliseconds() - e.getMilliseconds();
        return n < 0 ? -1 : n > 0 ? 1 : n
      }

      function ft(t) {
        return e => {
          const n = (t ? Math[t] : Math.trunc)(e);
          return 0 === n ? 0 : n
        }
      }

      function ht(t, e, n) {
        const [r, a] = W(n?.in, t, e), o = (+r - +a) / s;
        return ft(n?.roundingMethod)(o)
      }

      function mt(t, e, n) {
        return q(t, -e, n)
      }

      function gt(t, e, n) {
        const [r, a] = W(n?.in, t, e), o = Z(r, a), i = Math.abs(rt(r, a, n)), s = mt(r, o * i, n), u = o * (i - Number(Z(s, a) === -o));
        return 0 === u ? 0 : u
      }

      function wt(t, e) {
        return +g(t) - +g(e)
      }

      function yt(t, e, n) {
        const r = wt(t, e) / i;
        return ft(n?.roundingMethod)(r)
      }

      function bt(t, e) {
        const n = g(t, e?.in);
        return n.setHours(23, 59, 59, 999), n
      }

      function pt(t, e) {
        const n = g(t, e?.in),
          r = n.getMonth();
        return n.setFullYear(n.getFullYear(), r + 1, 0), n.setHours(23, 59, 59, 999), n
      }

      function Mt(t, e) {
        const n = g(t, e?.in);
        return +bt(n, e) === +pt(n, e)
      }

      function Dt(t, e, n) {
        const [r, a, o] = W(n?.in, t, t, e), i = Z(a, o), s = Math.abs(ot(a, o));
        if (s < 1) return 0;
        1 === a.getMonth() && a.getDate() > 27 && a.setDate(30), a.setMonth(a.getMonth() - i * s);
        let u = Z(a, o) === -i;
        Mt(r) && 1 === s && 1 === Z(r, o) && (u = !1);
        const c = i * (s - +u);
        return 0 === c ? 0 : c
      }

      function xt(t, e, n) {
        const r = Dt(t, e, n) / 3;
        return ft(n?.roundingMethod)(r)
      }

      function Tt(t, e, n) {
        const r = wt(t, e) / 1e3;
        return ft(n?.roundingMethod)(r)
      }

      function kt(t, e, n) {
        const r = dt(t, e, n) / 7;
        return ft(n?.roundingMethod)(r)
      }

      function vt(t, e, n) {
        const [r, a] = W(n?.in, t, e), o = Z(r, a), i = Math.abs(ct(r, a));
        r.setFullYear(1584), a.setFullYear(1584);
        const s = o * (i - +(Z(r, a) === -o));
        return 0 === s ? 0 : s
      }

      function St(t, e) {
        const [n, r] = W(t, e.start, e.end);
        return {
          start: n,
          end: r
        }
      }

      function Yt(t, e) {
        const {
          start: n,
          end: r
        } = St(e?.in, t);
        let a = +n > +r;
        const o = a ? +n : +r,
          i = a ? r : n;
        i.setHours(0, 0, 0, 0);
        let s = e?.step ?? 1;
        if (!s) return [];
        s < 0 && (s = -s, a = !a);
        const u = [];
        for (; + i <= o;) u.push(m(n, i)), i.setDate(i.getDate() + s), i.setHours(0, 0, 0, 0);
        return a ? u.reverse() : u
      }

      function Ot(t, e) {
        const {
          start: n,
          end: r
        } = St(e?.in, t);
        let a = +n > +r;
        const o = a ? +n : +r,
          i = a ? r : n;
        i.setMinutes(0, 0, 0);
        let s = e?.step ?? 1;
        if (!s) return [];
        s < 0 && (s = -s, a = !a);
        const u = [];
        for (; + i <= o;) u.push(m(n, i)), i.setHours(i.getHours() + s);
        return a ? u.reverse() : u
      }

      function Nt(t, e) {
        const {
          start: n,
          end: r
        } = St(e?.in, t);
        n.setSeconds(0, 0);
        let a = +n > +r;
        const o = a ? +n : +r;
        let i = a ? r : n,
          s = e?.step ?? 1;
        if (!s) return [];
        s < 0 && (s = -s, a = !a);
        const u = [];
        for (; + i <= o;) u.push(m(n, i)), i = $(i, s);
        return a ? u.reverse() : u
      }

      function Ht(t, e) {
        const {
          start: n,
          end: r
        } = St(e?.in, t);
        let a = +n > +r;
        const o = a ? +n : +r,
          i = a ? r : n;
        i.setHours(0, 0, 0, 0), i.setDate(1);
        let s = e?.step ?? 1;
        if (!s) return [];
        s < 0 && (s = -s, a = !a);
        const u = [];
        for (; + i <= o;) u.push(m(n, i)), i.setMonth(i.getMonth() + s);
        return a ? u.reverse() : u
      }

      function Ft(t, e) {
        const n = g(t, e?.in),
          r = n.getMonth(),
          a = r - r % 3;
        return n.setMonth(a, 1), n.setHours(0, 0, 0, 0), n
      }

      function Wt(t, e) {
        const {
          start: n,
          end: r
        } = St(e?.in, t);
        let a = +n > +r;
        const o = a ? +Ft(n) : +Ft(r);
        let i = Ft(a ? r : n),
          s = e?.step ?? 1;
        if (!s) return [];
        s < 0 && (s = -s, a = !a);
        const u = [];
        for (; + i <= o;) u.push(m(n, i)), i = Q(i, s);
        return a ? u.reverse() : u
      }

      function It(t, e) {
        const {
          start: n,
          end: r
        } = St(e?.in, t);
        let a = +n > +r;
        const o = O(a ? r : n, e),
          i = O(a ? n : r, e);
        o.setHours(15), i.setHours(15);
        const s = +i.getTime();
        let u = o,
          c = e?.step ?? 1;
        if (!c) return [];
        c < 0 && (c = -c, a = !a);
        const d = [];
        for (; + u <= s;) u.setHours(0), d.push(m(n, u)), u = R(u, c), u.setHours(15);
        return a ? d.reverse() : d
      }

      function Pt(t, e) {
        const {
          start: n,
          end: r
        } = St(e?.in, t), a = Yt({
          start: n,
          end: r
        }, e), o = [];
        let i = 0;
        for (; i < a.length;) {
          const t = a[i++];
          D(t) && o.push(m(n, t))
        }
        return o
      }

      function Et(t, e) {
        const n = g(t, e?.in);
        return n.setDate(1), n.setHours(0, 0, 0, 0), n
      }

      function Ct(t, e) {
        return Pt({
          start: Et(t, e),
          end: pt(t, e)
        }, e)
      }

      function qt(t, e) {
        const n = g(t, e?.in),
          r = n.getFullYear();
        return n.setFullYear(r + 1, 0, 0), n.setHours(23, 59, 59, 999), n
      }

      function $t(t, e) {
        const n = g(t, e?.in);
        return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n
      }

      function Qt(t, e) {
        return Pt({
          start: $t(t, e),
          end: qt(t, e)
        }, e)
      }

      function Lt(t, e) {
        const {
          start: n,
          end: r
        } = St(e?.in, t);
        let a = +n > +r;
        const o = a ? +n : +r,
          i = a ? r : n;
        i.setHours(0, 0, 0, 0), i.setMonth(0, 1);
        let s = e?.step ?? 1;
        if (!s) return [];
        s < 0 && (s = -s, a = !a);
        const u = [];
        for (; + i <= o;) u.push(m(n, i)), i.setFullYear(i.getFullYear() + s);
        return a ? u.reverse() : u
      }

      function Rt(t, e) {
        const n = g(t, e?.in),
          r = n.getFullYear(),
          a = 9 + 10 * Math.floor(r / 10);
        return n.setFullYear(a, 11, 31), n.setHours(23, 59, 59, 999), n
      }

      function Xt(t, e) {
        const n = g(t, e?.in);
        return n.setMinutes(59, 59, 999), n
      }

      function jt(t, e) {
        const n = S(),
          r = e?.weekStartsOn ?? e?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0,
          a = g(t, e?.in),
          o = a.getDay(),
          i = 6 + (o < r ? -7 : 0) - (o - r);
        return a.setDate(a.getDate() + i), a.setHours(23, 59, 59, 999), a
      }

      function Bt(t, e) {
        return jt(t, {
          ...e,
          weekStartsOn: 1
        })
      }

      function zt(t, e) {
        const n = H(t, e),
          r = m(e?.in || t, 0);
        r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
        const a = N(r, e);
        return a.setMilliseconds(a.getMilliseconds() - 1), a
      }

      function At(t, e) {
        const n = g(t, e?.in);
        return n.setSeconds(59, 999), n
      }

      function Gt(t, e) {
        const n = g(t, e?.in),
          r = n.getMonth(),
          a = r - r % 3 + 3;
        return n.setMonth(a, 0), n.setHours(23, 59, 59, 999), n
      }

      function Ut(t, e) {
        const n = g(t, e?.in);
        return n.setMilliseconds(999), n
      }

      function Zt(t) {
        return bt(Date.now(), t)
      }

      function _t(t) {
        const e = J(t?.in),
          n = e.getFullYear(),
          r = e.getMonth(),
          a = e.getDate(),
          o = J(t?.in);
        return o.setFullYear(n, r, a + 1), o.setHours(23, 59, 59, 999), t?.in ? t.in(o) : o
      }

      function Jt(t) {
        const e = J(t?.in),
          n = m(t?.in, 0);
        return n.setFullYear(e.getFullYear(), e.getMonth(), e.getDate() - 1), n.setHours(23, 59, 59, 999), n
      }
      const Kt = {
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

      function Vt(t) {
        return (e = {}) => {
          const n = e.width ? String(e.width) : t.defaultWidth;
          return t.formats[n] || t.formats[t.defaultWidth]
        }
      }
      const te = {
          date: Vt({
            formats: {
              full: "EEEE, MMMM do, y",
              long: "MMMM do, y",
              medium: "MMM d, y",
              short: "MM/dd/yyyy"
            },
            defaultWidth: "full"
          }),
          time: Vt({
            formats: {
              full: "h:mm:ss a zzzz",
              long: "h:mm:ss a z",
              medium: "h:mm:ss a",
              short: "h:mm a"
            },
            defaultWidth: "full"
          }),
          dateTime: Vt({
            formats: {
              full: "{{date}} 'at' {{time}}",
              long: "{{date}} 'at' {{time}}",
              medium: "{{date}}, {{time}}",
              short: "{{date}}, {{time}}"
            },
            defaultWidth: "full"
          })
        },
        ee = {
          lastWeek: "'last' eeee 'at' p",
          yesterday: "'yesterday at' p",
          today: "'today at' p",
          tomorrow: "'tomorrow at' p",
          nextWeek: "eeee 'at' p",
          other: "P"
        };

      function ne(t) {
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

      function re(t) {
        return (e, n = {}) => {
          const r = n.width,
            a = r && t.matchPatterns[r] || t.matchPatterns[t.defaultMatchWidth],
            o = e.match(a);
          if (!o) return null;
          const i = o[0],
            s = r && t.parsePatterns[r] || t.parsePatterns[t.defaultParseWidth],
            u = Array.isArray(s) ? function(t, e) {
              for (let n = 0; n < t.length; n++)
                if (e(t[n])) return n
            }(s, t => t.test(i)) : function(t, e) {
              for (const n in t)
                if (Object.prototype.hasOwnProperty.call(t, n) && e(t[n])) return n
            }(s, t => t.test(i));
          let c;
          return c = t.valueCallback ? t.valueCallback(u) : u, c = n.valueCallback ? n.valueCallback(c) : c, {
            value: c,
            rest: e.slice(i.length)
          }
        }
      }
      var ae;
      const oe = {
        code: "en-US",
        formatDistance: (t, e, n) => {
          let r;
          const a = Kt[t];
          return r = "string" == typeof a ? a : 1 === e ? a.one : a.other.replace("{{count}}", e.toString()), n?.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r
        },
        formatLong: te,
        formatRelative: (t, e, n, r) => ee[t],
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
          era: ne({
            values: {
              narrow: ["B", "A"],
              abbreviated: ["BC", "AD"],
              wide: ["Before Christ", "Anno Domini"]
            },
            defaultWidth: "wide"
          }),
          quarter: ne({
            values: {
              narrow: ["1", "2", "3", "4"],
              abbreviated: ["Q1", "Q2", "Q3", "Q4"],
              wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
            },
            defaultWidth: "wide",
            argumentCallback: t => t - 1
          }),
          month: ne({
            values: {
              narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
              abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
              wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
            },
            defaultWidth: "wide"
          }),
          day: ne({
            values: {
              narrow: ["S", "M", "T", "W", "T", "F", "S"],
              short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
              abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
              wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
            },
            defaultWidth: "wide"
          }),
          dayPeriod: ne({
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
          ordinalNumber: (ae = {
            matchPattern: /^(\d+)(th|st|nd|rd)?/i,
            parsePattern: /\d+/i,
            valueCallback: t => parseInt(t, 10)
          }, (t, e = {}) => {
            const n = t.match(ae.matchPattern);
            if (!n) return null;
            const r = n[0],
              a = t.match(ae.parsePattern);
            if (!a) return null;
            let o = ae.valueCallback ? ae.valueCallback(a[0]) : a[0];
            return o = e.valueCallback ? e.valueCallback(o) : o, {
              value: o,
              rest: t.slice(r.length)
            }
          }),
          era: re({
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
          quarter: re({
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
          month: re({
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
          day: re({
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
          dayPeriod: re({
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

      function ie(t, e) {
        const n = g(t, e?.in);
        return P(n, $t(n)) + 1
      }

      function se(t, e) {
        const n = g(t, e?.in),
          r = +N(n) - +E(n);
        return Math.round(r / a) + 1
      }

      function ue(t, e) {
        const n = g(t, e?.in),
          r = n.getFullYear(),
          a = S(),
          o = e?.firstWeekContainsDate ?? e?.locale?.options?.firstWeekContainsDate ?? a.firstWeekContainsDate ?? a.locale?.options?.firstWeekContainsDate ?? 1,
          i = m(e?.in || t, 0);
        i.setFullYear(r + 1, 0, o), i.setHours(0, 0, 0, 0);
        const s = O(i, e),
          u = m(e?.in || t, 0);
        u.setFullYear(r, 0, o), u.setHours(0, 0, 0, 0);
        const c = O(u, e);
        return +n >= +s ? r + 1 : +n >= +c ? r : r - 1
      }

      function ce(t, e) {
        const n = S(),
          r = e?.firstWeekContainsDate ?? e?.locale?.options?.firstWeekContainsDate ?? n.firstWeekContainsDate ?? n.locale?.options?.firstWeekContainsDate ?? 1,
          a = ue(t, e),
          o = m(e?.in || t, 0);
        return o.setFullYear(a, 0, r), o.setHours(0, 0, 0, 0), O(o, e)
      }

      function de(t, e) {
        const n = g(t, e?.in),
          r = +O(n, e) - +ce(n, e);
        return Math.round(r / a) + 1
      }

      function le(t, e) {
        return (t < 0 ? "-" : "") + Math.abs(t).toString().padStart(e, "0")
      }
      const fe = {
          y(t, e) {
            const n = t.getFullYear(),
              r = n > 0 ? n : 1 - n;
            return le("yy" === e ? r % 100 : r, e.length)
          },
          M(t, e) {
            const n = t.getMonth();
            return "M" === e ? String(n + 1) : le(n + 1, 2)
          },
          d: (t, e) => le(t.getDate(), e.length),
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
          h: (t, e) => le(t.getHours() % 12 || 12, e.length),
          H: (t, e) => le(t.getHours(), e.length),
          m: (t, e) => le(t.getMinutes(), e.length),
          s: (t, e) => le(t.getSeconds(), e.length),
          S(t, e) {
            const n = e.length,
              r = t.getMilliseconds();
            return le(Math.trunc(r * Math.pow(10, n - 3)), e.length)
          }
        },
        he = {
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
            return fe.y(t, e)
          },
          Y: function(t, e, n, r) {
            const a = ue(t, r),
              o = a > 0 ? a : 1 - a;
            return "YY" === e ? le(o % 100, 2) : "Yo" === e ? n.ordinalNumber(o, {
              unit: "year"
            }) : le(o, e.length)
          },
          R: function(t, e) {
            return le(H(t), e.length)
          },
          u: function(t, e) {
            return le(t.getFullYear(), e.length)
          },
          Q: function(t, e, n) {
            const r = Math.ceil((t.getMonth() + 1) / 3);
            switch (e) {
              case "Q":
                return String(r);
              case "QQ":
                return le(r, 2);
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
                return le(r, 2);
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
                return fe.M(t, e);
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
                return le(r + 1, 2);
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
            const a = de(t, r);
            return "wo" === e ? n.ordinalNumber(a, {
              unit: "week"
            }) : le(a, e.length)
          },
          I: function(t, e, n) {
            const r = se(t);
            return "Io" === e ? n.ordinalNumber(r, {
              unit: "week"
            }) : le(r, e.length)
          },
          d: function(t, e, n) {
            return "do" === e ? n.ordinalNumber(t.getDate(), {
              unit: "date"
            }) : fe.d(t, e)
          },
          D: function(t, e, n) {
            const r = ie(t);
            return "Do" === e ? n.ordinalNumber(r, {
              unit: "dayOfYear"
            }) : le(r, e.length)
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
                return le(o, 2);
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
                return le(o, e.length);
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
                return le(a, e.length);
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
            return fe.h(t, e)
          },
          H: function(t, e, n) {
            return "Ho" === e ? n.ordinalNumber(t.getHours(), {
              unit: "hour"
            }) : fe.H(t, e)
          },
          K: function(t, e, n) {
            const r = t.getHours() % 12;
            return "Ko" === e ? n.ordinalNumber(r, {
              unit: "hour"
            }) : le(r, e.length)
          },
          k: function(t, e, n) {
            let r = t.getHours();
            return 0 === r && (r = 24), "ko" === e ? n.ordinalNumber(r, {
              unit: "hour"
            }) : le(r, e.length)
          },
          m: function(t, e, n) {
            return "mo" === e ? n.ordinalNumber(t.getMinutes(), {
              unit: "minute"
            }) : fe.m(t, e)
          },
          s: function(t, e, n) {
            return "so" === e ? n.ordinalNumber(t.getSeconds(), {
              unit: "second"
            }) : fe.s(t, e)
          },
          S: function(t, e) {
            return fe.S(t, e)
          },
          X: function(t, e, n) {
            const r = t.getTimezoneOffset();
            if (0 === r) return "Z";
            switch (e) {
              case "X":
                return ge(r);
              case "XXXX":
              case "XX":
                return we(r);
              default:
                return we(r, ":")
            }
          },
          x: function(t, e, n) {
            const r = t.getTimezoneOffset();
            switch (e) {
              case "x":
                return ge(r);
              case "xxxx":
              case "xx":
                return we(r);
              default:
                return we(r, ":")
            }
          },
          O: function(t, e, n) {
            const r = t.getTimezoneOffset();
            switch (e) {
              case "O":
              case "OO":
              case "OOO":
                return "GMT" + me(r, ":");
              default:
                return "GMT" + we(r, ":")
            }
          },
          z: function(t, e, n) {
            const r = t.getTimezoneOffset();
            switch (e) {
              case "z":
              case "zz":
              case "zzz":
                return "GMT" + me(r, ":");
              default:
                return "GMT" + we(r, ":")
            }
          },
          t: function(t, e, n) {
            return le(Math.trunc(+t / 1e3), e.length)
          },
          T: function(t, e, n) {
            return le(+t, e.length)
          }
        };

      function me(t, e = "") {
        const n = t > 0 ? "-" : "+",
          r = Math.abs(t),
          a = Math.trunc(r / 60),
          o = r % 60;
        return 0 === o ? n + String(a) : n + String(a) + e + le(o, 2)
      }

      function ge(t, e) {
        return t % 60 == 0 ? (t > 0 ? "-" : "+") + le(Math.abs(t) / 60, 2) : we(t, e)
      }

      function we(t, e = "") {
        const n = t > 0 ? "-" : "+",
          r = Math.abs(t);
        return n + le(Math.trunc(r / 60), 2) + e + le(r % 60, 2)
      }
      const ye = (t, e) => {
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
        be = (t, e) => {
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
        pe = {
          p: be,
          P: (t, e) => {
            const n = t.match(/(P+)(p+)?/) || [],
              r = n[1],
              a = n[2];
            if (!a) return ye(t, e);
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
            return o.replace("{{date}}", ye(r, e)).replace("{{time}}", be(a, e))
          }
        },
        Me = /^D+$/,
        De = /^Y+$/,
        xe = ["D", "DD", "YY", "YYYY"];

      function Te(t) {
        return Me.test(t)
      }

      function ke(t) {
        return De.test(t)
      }

      function ve(t, e, n) {
        const r = function(t, e, n) {
          const r = "Y" === t[0] ? "years" : "days of the month";
          return `Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`
        }(t, e, n);
        if (console.warn(r), xe.includes(t)) throw new RangeError(r)
      }
      const Se = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
        Ye = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
        Oe = /^'([^]*?)'?$/,
        Ne = /''/g,
        He = /[a-zA-Z]/;

      function Fe(t, e, n) {
        const r = S(),
          a = n?.locale ?? r.locale ?? oe,
          o = n?.firstWeekContainsDate ?? n?.locale?.options?.firstWeekContainsDate ?? r.firstWeekContainsDate ?? r.locale?.options?.firstWeekContainsDate ?? 1,
          i = n?.weekStartsOn ?? n?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0,
          s = g(t, n?.in);
        if (!et(s)) throw new RangeError("Invalid time value");
        let u = e.match(Ye).map(t => {
          const e = t[0];
          return "p" === e || "P" === e ? (0, pe[e])(t, a.formatLong) : t
        }).join("").match(Se).map(t => {
          if ("''" === t) return {
            isToken: !1,
            value: "'"
          };
          const e = t[0];
          if ("'" === e) return {
            isToken: !1,
            value: We(t)
          };
          if (he[e]) return {
            isToken: !0,
            value: t
          };
          if (e.match(He)) throw new RangeError("Format string contains an unescaped latin alphabet character `" + e + "`");
          return {
            isToken: !1,
            value: t
          }
        });
        a.localize.preprocessor && (u = a.localize.preprocessor(s, u));
        const c = {
          firstWeekContainsDate: o,
          weekStartsOn: i,
          locale: a
        };
        return u.map(r => {
          if (!r.isToken) return r.value;
          const o = r.value;
          return (!n?.useAdditionalWeekYearTokens && ke(o) || !n?.useAdditionalDayOfYearTokens && Te(o)) && ve(o, e, String(t)), (0, he[o[0]])(s, o, a.localize, c)
        }).join("")
      }

      function We(t) {
        const e = t.match(Oe);
        return e ? e[1].replace(Ne, "'") : t
      }

      function Ie(t, e, n) {
        const r = S(),
          a = n?.locale ?? r.locale ?? oe,
          o = Z(t, e);
        if (isNaN(o)) throw new RangeError("Invalid time value");
        const i = Object.assign({}, n, {
            addSuffix: n?.addSuffix,
            comparison: o
          }),
          [s, u] = W(n?.in, ...o > 0 ? [e, t] : [t, e]),
          c = Tt(u, s),
          f = (F(u) - F(s)) / 1e3,
          h = Math.round((c - f) / 60);
        let m;
        if (h < 2) return n?.includeSeconds ? c < 5 ? a.formatDistance("lessThanXSeconds", 5, i) : c < 10 ? a.formatDistance("lessThanXSeconds", 10, i) : c < 20 ? a.formatDistance("lessThanXSeconds", 20, i) : c < 40 ? a.formatDistance("halfAMinute", 0, i) : c < 60 ? a.formatDistance("lessThanXMinutes", 1, i) : a.formatDistance("xMinutes", 1, i) : 0 === h ? a.formatDistance("lessThanXMinutes", 1, i) : a.formatDistance("xMinutes", h, i);
        if (h < 45) return a.formatDistance("xMinutes", h, i);
        if (h < 90) return a.formatDistance("aboutXHours", 1, i);
        if (h < l) {
          const t = Math.round(h / 60);
          return a.formatDistance("aboutXHours", t, i)
        }
        if (h < 2520) return a.formatDistance("xDays", 1, i);
        if (h < d) {
          const t = Math.round(h / l);
          return a.formatDistance("xDays", t, i)
        }
        if (h < 86400) return m = Math.round(h / d), a.formatDistance("aboutXMonths", m, i);
        if (m = Dt(u, s), m < 12) {
          const t = Math.round(h / d);
          return a.formatDistance("xMonths", t, i)
        } {
          const t = m % 12,
            e = Math.trunc(m / 12);
          return t < 3 ? a.formatDistance("aboutXYears", e, i) : t < 9 ? a.formatDistance("overXYears", e, i) : a.formatDistance("almostXYears", e + 1, i)
        }
      }

      function Pe(t, e, n) {
        const r = S(),
          a = n?.locale ?? r.locale ?? oe,
          o = Z(t, e);
        if (isNaN(o)) throw new RangeError("Invalid time value");
        const s = Object.assign({}, n, {
            addSuffix: n?.addSuffix,
            comparison: o
          }),
          [u, f] = W(n?.in, ...o > 0 ? [e, t] : [t, e]),
          h = ft(n?.roundingMethod ?? "round"),
          m = f.getTime() - u.getTime(),
          g = m / i,
          w = (m - (F(f) - F(u))) / i,
          y = n?.unit;
        let b;
        if (b = y || (g < 1 ? "second" : g < 60 ? "minute" : g < l ? "hour" : w < d ? "day" : w < c ? "month" : "year"), "second" === b) {
          const t = h(m / 1e3);
          return a.formatDistance("xSeconds", t, s)
        }
        if ("minute" === b) {
          const t = h(g);
          return a.formatDistance("xMinutes", t, s)
        }
        if ("hour" === b) {
          const t = h(g / 60);
          return a.formatDistance("xHours", t, s)
        }
        if ("day" === b) {
          const t = h(w / l);
          return a.formatDistance("xDays", t, s)
        }
        if ("month" === b) {
          const t = h(w / d);
          return 12 === t && "month" !== y ? a.formatDistance("xYears", 1, s) : a.formatDistance("xMonths", t, s)
        } {
          const t = h(w / c);
          return a.formatDistance("xYears", t, s)
        }
      }

      function Ee(t, e) {
        return Ie(t, J(t), e)
      }

      function Ce(t, e) {
        return Pe(t, J(t), e)
      }
      const qe = ["years", "months", "weeks", "days", "hours", "minutes", "seconds"];

      function $e(t, e) {
        const n = S(),
          r = e?.locale ?? n.locale ?? oe,
          a = e?.format ?? qe,
          o = e?.zero ?? !1,
          i = e?.delimiter ?? " ";
        return r.formatDistance ? a.reduce((e, n) => {
          const a = `x${n.replace(/(^.)/,t=>t.toUpperCase())}`,
            i = t[n];
          return void 0 !== i && (o || t[n]) ? e.concat(r.formatDistance(a, i)) : e
        }, []).join(i) : ""
      }

      function Qe(t, e) {
        const n = g(t, e?.in);
        if (isNaN(+n)) throw new RangeError("Invalid time value");
        const r = e?.format ?? "extended",
          a = e?.representation ?? "complete";
        let o = "",
          i = "";
        const s = "extended" === r ? "-" : "",
          u = "extended" === r ? ":" : "";
        if ("time" !== a) {
          const t = le(n.getDate(), 2),
            e = le(n.getMonth() + 1, 2);
          o = `${le(n.getFullYear(),4)}${s}${e}${s}${t}`
        }
        if ("date" !== a) {
          const t = n.getTimezoneOffset();
          if (0 !== t) {
            const e = Math.abs(t);
            i = `${t<0?"+":"-"}${le(Math.trunc(e/60),2)}:${le(e%60,2)}`
          } else i = "Z";
          o = `${o}${""===o?"":"T"}${[le(n.getHours(),2),le(n.getMinutes(),2),le(n.getSeconds(),2)].join(u)}${i}`
        }
        return o
      }

      function Le(t, e) {
        const n = g(t, e?.in);
        if (!et(n)) throw new RangeError("Invalid time value");
        const r = e?.format ?? "extended",
          a = e?.representation ?? "complete";
        let o = "";
        const i = "extended" === r ? "-" : "",
          s = "extended" === r ? ":" : "";
        if ("time" !== a) {
          const t = le(n.getDate(), 2),
            e = le(n.getMonth() + 1, 2);
          o = `${le(n.getFullYear(),4)}${i}${e}${i}${t}`
        }
        return "date" !== a && (o = `${o}${""===o?"":" "}${le(n.getHours(),2)}${s}${le(n.getMinutes(),2)}${s}${le(n.getSeconds(),2)}`), o
      }

      function Re(t) {
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

      function Xe(t, e) {
        const n = g(t, e?.in);
        if (!et(n)) throw new RangeError("Invalid time value");
        const r = e?.fractionDigits ?? 0,
          a = le(n.getDate(), 2),
          o = le(n.getMonth() + 1, 2),
          i = n.getFullYear(),
          s = le(n.getHours(), 2),
          u = le(n.getMinutes(), 2),
          c = le(n.getSeconds(), 2);
        let d = "";
        if (r > 0) {
          const t = n.getMilliseconds();
          d = "." + le(Math.trunc(t * Math.pow(10, r - 3)), r)
        }
        let l = "";
        const f = n.getTimezoneOffset();
        if (0 !== f) {
          const t = Math.abs(f);
          l = `${f<0?"+":"-"}${le(Math.trunc(t/60),2)}:${le(t%60,2)}`
        } else l = "Z";
        return `${i}-${o}-${a}T${s}:${u}:${c}${d}${l}`
      }
      const je = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        Be = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

      function ze(t) {
        const e = g(t);
        if (!et(e)) throw new RangeError("Invalid time value");
        return `${je[e.getUTCDay()]}, ${le(e.getUTCDate(),2)} ${Be[e.getUTCMonth()]} ${e.getUTCFullYear()} ${le(e.getUTCHours(),2)}:${le(e.getUTCMinutes(),2)}:${le(e.getUTCSeconds(),2)} GMT`
      }

      function Ae(t, e, n) {
        const [r, a] = W(n?.in, t, e), o = S(), i = n?.locale ?? o.locale ?? oe, s = n?.weekStartsOn ?? n?.locale?.options?.weekStartsOn ?? o.weekStartsOn ?? o.locale?.options?.weekStartsOn ?? 0, u = P(r, a);
        if (isNaN(u)) throw new RangeError("Invalid time value");
        let c;
        return c = u < -6 ? "other" : u < -1 ? "lastWeek" : u < 0 ? "yesterday" : u < 1 ? "today" : u < 2 ? "tomorrow" : u < 7 ? "nextWeek" : "other", Fe(r, i.formatRelative(c, r, a, {
          locale: i,
          weekStartsOn: s
        }), {
          locale: i,
          weekStartsOn: s
        })
      }

      function Ge(t, e) {
        return g(1e3 * t, e?.in)
      }

      function Ue(t, e) {
        return g(t, e?.in).getDate()
      }

      function Ze(t, e) {
        return g(t, e?.in).getDay()
      }

      function _e(t, e) {
        const n = g(t, e?.in),
          r = n.getFullYear(),
          a = n.getMonth(),
          o = m(n, 0);
        return o.setFullYear(r, a + 1, 0), o.setHours(0, 0, 0, 0), o.getDate()
      }

      function Je(t, e) {
        const n = g(t, e?.in).getFullYear();
        return n % 400 == 0 || n % 4 == 0 && n % 100 != 0
      }

      function Ke(t, e) {
        const n = g(t, e?.in);
        return Number.isNaN(+n) ? NaN : Je(n) ? 366 : 365
      }

      function Ve(t, e) {
        const n = g(t, e?.in).getFullYear();
        return 10 * Math.floor(n / 10)
      }

      function tn() {
        return Object.assign({}, S())
      }

      function en(t, e) {
        return g(t, e?.in).getHours()
      }

      function nn(t, e) {
        const n = g(t, e?.in).getDay();
        return 0 === n ? 7 : n
      }

      function rn(t, e) {
        const n = E(t, e),
          r = +E(R(n, 60)) - +n;
        return Math.round(r / a)
      }

      function an(t) {
        return g(t).getMilliseconds()
      }

      function on(t, e) {
        return g(t, e?.in).getMinutes()
      }

      function sn(t, e) {
        return g(t, e?.in).getMonth()
      }

      function un(t, e) {
        const [n, r] = [+g(t.start), +g(t.end)].sort((t, e) => t - e), [a, i] = [+g(e.start), +g(e.end)].sort((t, e) => t - e);
        if (!(n < i && a < r)) return 0;
        const s = a < n ? n : a,
          u = s - F(s),
          c = i > r ? r : i,
          d = c - F(c);
        return Math.ceil((d - u) / o)
      }

      function cn(t) {
        return g(t).getSeconds()
      }

      function dn(t) {
        return +g(t)
      }

      function ln(t) {
        return Math.trunc(+g(t) / 1e3)
      }

      function fn(t, e) {
        const n = S(),
          r = e?.weekStartsOn ?? e?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0,
          a = Ue(g(t, e?.in));
        if (isNaN(a)) return NaN;
        let o = r - Ze(Et(t, e));
        o <= 0 && (o += 7);
        const i = a - o;
        return Math.ceil(i / 7) + 1
      }

      function hn(t, e) {
        const n = g(t, e?.in),
          r = n.getMonth();
        return n.setFullYear(n.getFullYear(), r + 1, 0), n.setHours(0, 0, 0, 0), g(n, e?.in)
      }

      function mn(t, e) {
        const n = g(t, e?.in);
        return ut(hn(n, e), Et(n, e), e) + 1
      }

      function gn(t, e) {
        return g(t, e?.in).getFullYear()
      }

      function wn(t) {
        return Math.trunc(t * s)
      }

      function yn(t) {
        return Math.trunc(60 * t)
      }

      function bn(t) {
        return Math.trunc(t * f)
      }

      function pn(t, e, n) {
        const [r, a] = W(n?.in, t, e);
        if (isNaN(+r)) throw new TypeError("Start date is invalid");
        if (isNaN(+a)) throw new TypeError("End date is invalid");
        if (n?.assertPositive && +r > +a) throw new TypeError("End date must be after start date");
        return {
          start: r,
          end: a
        }
      }

      function Mn(t, e) {
        const {
          start: n,
          end: r
        } = St(e?.in, t), a = {}, o = vt(r, n);
        o && (a.years = o);
        const i = b(n, {
            years: a.years
          }),
          s = Dt(r, i);
        s && (a.months = s);
        const u = b(i, {
            months: a.months
          }),
          c = dt(r, u);
        c && (a.days = c);
        const d = b(u, {
            days: a.days
          }),
          l = ht(r, d);
        l && (a.hours = l);
        const f = b(d, {
            hours: a.hours
          }),
          h = yt(r, f);
        h && (a.minutes = h);
        const m = Tt(r, b(f, {
          minutes: a.minutes
        }));
        return m && (a.seconds = m), a
      }

      function Dn(t, e, n) {
        let r;
        var a;
        return void 0 === (a = e) || "locale" in a ? n = e : r = e, new Intl.DateTimeFormat(n?.locale, r).format(g(t))
      }

      function xn(t, e, n) {
        let r, a = 0;
        const [o, i] = W(n?.in, t, e);
        if (n?.unit) r = n?.unit, "second" === r ? a = Tt(o, i) : "minute" === r ? a = yt(o, i) : "hour" === r ? a = ht(o, i) : "day" === r ? a = P(o, i) : "week" === r ? a = ut(o, i) : "month" === r ? a = ot(o, i) : "quarter" === r ? a = st(o, i) : "year" === r && (a = ct(o, i));
        else {
          const t = Tt(o, i);
          Math.abs(t) < 60 ? (a = Tt(o, i), r = "second") : Math.abs(t) < f ? (a = yt(o, i), r = "minute") : Math.abs(t) < 86400 && Math.abs(P(o, i)) < 1 ? (a = ht(o, i), r = "hour") : Math.abs(t) < 604800 && (a = P(o, i)) && Math.abs(a) < 7 ? r = "day" : Math.abs(t) < 2629746 ? (a = ut(o, i), r = "week") : Math.abs(t) < 7889238 ? (a = ot(o, i), r = "month") : Math.abs(t) < 31556952 && st(o, i) < 4 ? (a = st(o, i), r = "quarter") : (a = ct(o, i), r = "year")
        }
        return new Intl.RelativeTimeFormat(n?.locale, {
          numeric: "auto",
          ...n
        }).format(a, r)
      }

      function Tn(t, e) {
        return +g(t) > +g(e)
      }

      function kn(t, e) {
        return +g(t) < +g(e)
      }

      function vn(t, e) {
        return +g(t) === +g(e)
      }

      function Sn(t, e, n) {
        const r = new Date(t, e, n);
        return r.getFullYear() === t && r.getMonth() === e && r.getDate() === n
      }

      function Yn(t, e) {
        return 1 === g(t, e?.in).getDate()
      }

      function On(t, e) {
        return 5 === g(t, e?.in).getDay()
      }

      function Nn(t) {
        return +g(t) > Date.now()
      }

      function Hn(t, e) {
        const n = function(t) {
          return "function" == typeof t && t.prototype?.constructor === t
        }(e) ? new e(0) : m(e, 0);
        return n.setFullYear(t.getFullYear(), t.getMonth(), t.getDate()), n.setHours(t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()), n
      }
      class Fn {
        subPriority = 0;
        validate(t, e) {
          return !0
        }
      }
      class Wn extends Fn {
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
      class In extends Fn {
        priority = 10;
        subPriority = -1;
        constructor(t, e) {
          super(), this.context = t || (t => m(e, t))
        }
        set(t, e) {
          return e.timestampIsSet ? t : m(t, Hn(t, this.context))
        }
      }
      class Pn {
        run(t, e, n, r) {
          const a = this.parse(t, e, n, r);
          return a ? {
            setter: new Wn(a.value, this.validate, this.set, this.priority, this.subPriority),
            rest: a.rest
          } : null
        }
        validate(t, e, n) {
          return !0
        }
      }
      const En = /^(1[0-2]|0?\d)/,
        Cn = /^(3[0-1]|[0-2]?\d)/,
        qn = /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
        $n = /^(5[0-3]|[0-4]?\d)/,
        Qn = /^(2[0-3]|[0-1]?\d)/,
        Ln = /^(2[0-4]|[0-1]?\d)/,
        Rn = /^(1[0-1]|0?\d)/,
        Xn = /^(1[0-2]|0?\d)/,
        jn = /^[0-5]?\d/,
        Bn = /^[0-5]?\d/,
        zn = /^\d/,
        An = /^\d{1,2}/,
        Gn = /^\d{1,3}/,
        Un = /^\d{1,4}/,
        Zn = /^-?\d+/,
        _n = /^-?\d/,
        Jn = /^-?\d{1,2}/,
        Kn = /^-?\d{1,3}/,
        Vn = /^-?\d{1,4}/,
        tr = /^([+-])(\d{2})(\d{2})?|Z/,
        er = /^([+-])(\d{2})(\d{2})|Z/,
        nr = /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
        rr = /^([+-])(\d{2}):(\d{2})|Z/,
        ar = /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/;

      function or(t, e) {
        return t ? {
          value: e(t.value),
          rest: t.rest
        } : t
      }

      function ir(t, e) {
        const n = e.match(t);
        return n ? {
          value: parseInt(n[0], 10),
          rest: e.slice(n[0].length)
        } : null
      }

      function sr(t, e) {
        const n = e.match(t);
        if (!n) return null;
        if ("Z" === n[0]) return {
          value: 0,
          rest: e.slice(1)
        };
        const r = "+" === n[1] ? 1 : -1,
          a = n[2] ? parseInt(n[2], 10) : 0,
          o = n[3] ? parseInt(n[3], 10) : 0,
          c = n[5] ? parseInt(n[5], 10) : 0;
        return {
          value: r * (a * s + o * i + c * u),
          rest: e.slice(n[0].length)
        }
      }

      function ur(t) {
        return ir(Zn, t)
      }

      function cr(t, e) {
        switch (t) {
          case 1:
            return ir(zn, e);
          case 2:
            return ir(An, e);
          case 3:
            return ir(Gn, e);
          case 4:
            return ir(Un, e);
          default:
            return ir(new RegExp("^\\d{1," + t + "}"), e)
        }
      }

      function dr(t, e) {
        switch (t) {
          case 1:
            return ir(_n, e);
          case 2:
            return ir(Jn, e);
          case 3:
            return ir(Kn, e);
          case 4:
            return ir(Vn, e);
          default:
            return ir(new RegExp("^-?\\d{1," + t + "}"), e)
        }
      }

      function lr(t) {
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

      function fr(t, e) {
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

      function hr(t) {
        return t % 400 == 0 || t % 4 == 0 && t % 100 != 0
      }

      function mr(t, e, n) {
        const r = g(t, n?.in),
          a = de(r, n) - e;
        return r.setDate(r.getDate() - 7 * a), g(r, n?.in)
      }

      function gr(t, e, n) {
        const r = g(t, n?.in),
          a = se(r, n) - e;
        return r.setDate(r.getDate() - 7 * a), r
      }
      const wr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        yr = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

      function br(t, e, n) {
        const r = S(),
          a = n?.weekStartsOn ?? n?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0,
          o = g(t, n?.in),
          i = o.getDay(),
          s = 7 - a;
        return w(o, e < 0 || e > 6 ? e - (i + s) % 7 : ((e % 7 + 7) % 7 + s) % 7 - (i + s) % 7, n)
      }

      function pr(t, e, n) {
        const r = g(t, n?.in);
        return w(r, e - nn(r, n), n)
      }
      const Mr = {
          G: new class extends Pn {
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
          y: new class extends Pn {
            priority = 130;
            incompatibleTokens = ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"];
            parse(t, e, n) {
              const r = t => ({
                year: t,
                isTwoDigitYear: "yy" === e
              });
              switch (e) {
                case "y":
                  return or(cr(4, t), r);
                case "yo":
                  return or(n.ordinalNumber(t, {
                    unit: "year"
                  }), r);
                default:
                  return or(cr(e.length, t), r)
              }
            }
            validate(t, e) {
              return e.isTwoDigitYear || e.year > 0
            }
            set(t, e, n) {
              const r = t.getFullYear();
              if (n.isTwoDigitYear) {
                const e = fr(n.year, r);
                return t.setFullYear(e, 0, 1), t.setHours(0, 0, 0, 0), t
              }
              const a = "era" in e && 1 !== e.era ? 1 - n.year : n.year;
              return t.setFullYear(a, 0, 1), t.setHours(0, 0, 0, 0), t
            }
          },
          Y: new class extends Pn {
            priority = 130;
            parse(t, e, n) {
              const r = t => ({
                year: t,
                isTwoDigitYear: "YY" === e
              });
              switch (e) {
                case "Y":
                  return or(cr(4, t), r);
                case "Yo":
                  return or(n.ordinalNumber(t, {
                    unit: "year"
                  }), r);
                default:
                  return or(cr(e.length, t), r)
              }
            }
            validate(t, e) {
              return e.isTwoDigitYear || e.year > 0
            }
            set(t, e, n, r) {
              const a = ue(t, r);
              if (n.isTwoDigitYear) {
                const e = fr(n.year, a);
                return t.setFullYear(e, 0, r.firstWeekContainsDate), t.setHours(0, 0, 0, 0), O(t, r)
              }
              const o = "era" in e && 1 !== e.era ? 1 - n.year : n.year;
              return t.setFullYear(o, 0, r.firstWeekContainsDate), t.setHours(0, 0, 0, 0), O(t, r)
            }
            incompatibleTokens = ["y", "R", "u", "Q", "q", "M", "L", "I", "d", "D", "i", "t", "T"]
          },
          R: new class extends Pn {
            priority = 130;
            parse(t, e) {
              return dr("R" === e ? 4 : e.length, t)
            }
            set(t, e, n) {
              const r = m(t, 0);
              return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), N(r)
            }
            incompatibleTokens = ["G", "y", "Y", "u", "Q", "q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]
          },
          u: new class extends Pn {
            priority = 130;
            parse(t, e) {
              return dr("u" === e ? 4 : e.length, t)
            }
            set(t, e, n) {
              return t.setFullYear(n, 0, 1), t.setHours(0, 0, 0, 0), t
            }
            incompatibleTokens = ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]
          },
          Q: new class extends Pn {
            priority = 120;
            parse(t, e, n) {
              switch (e) {
                case "Q":
                case "QQ":
                  return cr(e.length, t);
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
          q: new class extends Pn {
            priority = 120;
            parse(t, e, n) {
              switch (e) {
                case "q":
                case "qq":
                  return cr(e.length, t);
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
          M: new class extends Pn {
            incompatibleTokens = ["Y", "R", "q", "Q", "L", "w", "I", "D", "i", "e", "c", "t", "T"];
            priority = 110;
            parse(t, e, n) {
              const r = t => t - 1;
              switch (e) {
                case "M":
                  return or(ir(En, t), r);
                case "MM":
                  return or(cr(2, t), r);
                case "Mo":
                  return or(n.ordinalNumber(t, {
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
          L: new class extends Pn {
            priority = 110;
            parse(t, e, n) {
              const r = t => t - 1;
              switch (e) {
                case "L":
                  return or(ir(En, t), r);
                case "LL":
                  return or(cr(2, t), r);
                case "Lo":
                  return or(n.ordinalNumber(t, {
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
          w: new class extends Pn {
            priority = 100;
            parse(t, e, n) {
              switch (e) {
                case "w":
                  return ir($n, t);
                case "wo":
                  return n.ordinalNumber(t, {
                    unit: "week"
                  });
                default:
                  return cr(e.length, t)
              }
            }
            validate(t, e) {
              return e >= 1 && e <= 53
            }
            set(t, e, n, r) {
              return O(mr(t, n, r), r)
            }
            incompatibleTokens = ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "i", "t", "T"]
          },
          I: new class extends Pn {
            priority = 100;
            parse(t, e, n) {
              switch (e) {
                case "I":
                  return ir($n, t);
                case "Io":
                  return n.ordinalNumber(t, {
                    unit: "week"
                  });
                default:
                  return cr(e.length, t)
              }
            }
            validate(t, e) {
              return e >= 1 && e <= 53
            }
            set(t, e, n) {
              return N(gr(t, n))
            }
            incompatibleTokens = ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]
          },
          d: new class extends Pn {
            priority = 90;
            subPriority = 1;
            parse(t, e, n) {
              switch (e) {
                case "d":
                  return ir(Cn, t);
                case "do":
                  return n.ordinalNumber(t, {
                    unit: "date"
                  });
                default:
                  return cr(e.length, t)
              }
            }
            validate(t, e) {
              const n = hr(t.getFullYear()),
                r = t.getMonth();
              return n ? e >= 1 && e <= yr[r] : e >= 1 && e <= wr[r]
            }
            set(t, e, n) {
              return t.setDate(n), t.setHours(0, 0, 0, 0), t
            }
            incompatibleTokens = ["Y", "R", "q", "Q", "w", "I", "D", "i", "e", "c", "t", "T"]
          },
          D: new class extends Pn {
            priority = 90;
            subpriority = 1;
            parse(t, e, n) {
              switch (e) {
                case "D":
                case "DD":
                  return ir(qn, t);
                case "Do":
                  return n.ordinalNumber(t, {
                    unit: "date"
                  });
                default:
                  return cr(e.length, t)
              }
            }
            validate(t, e) {
              return hr(t.getFullYear()) ? e >= 1 && e <= 366 : e >= 1 && e <= 365
            }
            set(t, e, n) {
              return t.setMonth(0, n), t.setHours(0, 0, 0, 0), t
            }
            incompatibleTokens = ["Y", "R", "q", "Q", "M", "L", "w", "I", "d", "E", "i", "e", "c", "t", "T"]
          },
          E: new class extends Pn {
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
              return (t = br(t, n, r)).setHours(0, 0, 0, 0), t
            }
            incompatibleTokens = ["D", "i", "e", "c", "t", "T"]
          },
          e: new class extends Pn {
            priority = 90;
            parse(t, e, n, r) {
              const a = t => {
                const e = 7 * Math.floor((t - 1) / 7);
                return (t + r.weekStartsOn + 6) % 7 + e
              };
              switch (e) {
                case "e":
                case "ee":
                  return or(cr(e.length, t), a);
                case "eo":
                  return or(n.ordinalNumber(t, {
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
              return (t = br(t, n, r)).setHours(0, 0, 0, 0), t
            }
            incompatibleTokens = ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "c", "t", "T"]
          },
          c: new class extends Pn {
            priority = 90;
            parse(t, e, n, r) {
              const a = t => {
                const e = 7 * Math.floor((t - 1) / 7);
                return (t + r.weekStartsOn + 6) % 7 + e
              };
              switch (e) {
                case "c":
                case "cc":
                  return or(cr(e.length, t), a);
                case "co":
                  return or(n.ordinalNumber(t, {
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
              return (t = br(t, n, r)).setHours(0, 0, 0, 0), t
            }
            incompatibleTokens = ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "e", "t", "T"]
          },
          i: new class extends Pn {
            priority = 90;
            parse(t, e, n) {
              const r = t => 0 === t ? 7 : t;
              switch (e) {
                case "i":
                case "ii":
                  return cr(e.length, t);
                case "io":
                  return n.ordinalNumber(t, {
                    unit: "day"
                  });
                case "iii":
                  return or(n.day(t, {
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
                  return or(n.day(t, {
                    width: "narrow",
                    context: "formatting"
                  }), r);
                case "iiiiii":
                  return or(n.day(t, {
                    width: "short",
                    context: "formatting"
                  }) || n.day(t, {
                    width: "narrow",
                    context: "formatting"
                  }), r);
                default:
                  return or(n.day(t, {
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
              return (t = pr(t, n)).setHours(0, 0, 0, 0), t
            }
            incompatibleTokens = ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "E", "e", "c", "t", "T"]
          },
          a: new class extends Pn {
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
              return t.setHours(lr(n), 0, 0, 0), t
            }
            incompatibleTokens = ["b", "B", "H", "k", "t", "T"]
          },
          b: new class extends Pn {
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
              return t.setHours(lr(n), 0, 0, 0), t
            }
            incompatibleTokens = ["a", "B", "H", "k", "t", "T"]
          },
          B: new class extends Pn {
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
              return t.setHours(lr(n), 0, 0, 0), t
            }
            incompatibleTokens = ["a", "b", "t", "T"]
          },
          h: new class extends Pn {
            priority = 70;
            parse(t, e, n) {
              switch (e) {
                case "h":
                  return ir(Xn, t);
                case "ho":
                  return n.ordinalNumber(t, {
                    unit: "hour"
                  });
                default:
                  return cr(e.length, t)
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
          H: new class extends Pn {
            priority = 70;
            parse(t, e, n) {
              switch (e) {
                case "H":
                  return ir(Qn, t);
                case "Ho":
                  return n.ordinalNumber(t, {
                    unit: "hour"
                  });
                default:
                  return cr(e.length, t)
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
          K: new class extends Pn {
            priority = 70;
            parse(t, e, n) {
              switch (e) {
                case "K":
                  return ir(Rn, t);
                case "Ko":
                  return n.ordinalNumber(t, {
                    unit: "hour"
                  });
                default:
                  return cr(e.length, t)
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
          k: new class extends Pn {
            priority = 70;
            parse(t, e, n) {
              switch (e) {
                case "k":
                  return ir(Ln, t);
                case "ko":
                  return n.ordinalNumber(t, {
                    unit: "hour"
                  });
                default:
                  return cr(e.length, t)
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
          m: new class extends Pn {
            priority = 60;
            parse(t, e, n) {
              switch (e) {
                case "m":
                  return ir(jn, t);
                case "mo":
                  return n.ordinalNumber(t, {
                    unit: "minute"
                  });
                default:
                  return cr(e.length, t)
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
          s: new class extends Pn {
            priority = 50;
            parse(t, e, n) {
              switch (e) {
                case "s":
                  return ir(Bn, t);
                case "so":
                  return n.ordinalNumber(t, {
                    unit: "second"
                  });
                default:
                  return cr(e.length, t)
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
          S: new class extends Pn {
            priority = 30;
            parse(t, e) {
              return or(cr(e.length, t), t => Math.trunc(t * Math.pow(10, 3 - e.length)))
            }
            set(t, e, n) {
              return t.setMilliseconds(n), t
            }
            incompatibleTokens = ["t", "T"]
          },
          X: new class extends Pn {
            priority = 10;
            parse(t, e) {
              switch (e) {
                case "X":
                  return sr(tr, t);
                case "XX":
                  return sr(er, t);
                case "XXXX":
                  return sr(nr, t);
                case "XXXXX":
                  return sr(ar, t);
                default:
                  return sr(rr, t)
              }
            }
            set(t, e, n) {
              return e.timestampIsSet ? t : m(t, t.getTime() - F(t) - n)
            }
            incompatibleTokens = ["t", "T", "x"]
          },
          x: new class extends Pn {
            priority = 10;
            parse(t, e) {
              switch (e) {
                case "x":
                  return sr(tr, t);
                case "xx":
                  return sr(er, t);
                case "xxxx":
                  return sr(nr, t);
                case "xxxxx":
                  return sr(ar, t);
                default:
                  return sr(rr, t)
              }
            }
            set(t, e, n) {
              return e.timestampIsSet ? t : m(t, t.getTime() - F(t) - n)
            }
            incompatibleTokens = ["t", "T", "X"]
          },
          t: new class extends Pn {
            priority = 40;
            parse(t) {
              return ur(t)
            }
            set(t, e, n) {
              return [m(t, 1e3 * n), {
                timestampIsSet: !0
              }]
            }
            incompatibleTokens = "*"
          },
          T: new class extends Pn {
            priority = 20;
            parse(t) {
              return ur(t)
            }
            set(t, e, n) {
              return [m(t, n), {
                timestampIsSet: !0
              }]
            }
            incompatibleTokens = "*"
          }
        },
        Dr = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
        xr = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
        Tr = /^'([^]*?)'?$/,
        kr = /''/g,
        vr = /\S/,
        Sr = /[a-zA-Z]/;

      function Yr(t, e, n, r) {
        const a = () => m(r?.in || n, NaN),
          o = tn(),
          i = r?.locale ?? o.locale ?? oe,
          s = r?.firstWeekContainsDate ?? r?.locale?.options?.firstWeekContainsDate ?? o.firstWeekContainsDate ?? o.locale?.options?.firstWeekContainsDate ?? 1,
          u = r?.weekStartsOn ?? r?.locale?.options?.weekStartsOn ?? o.weekStartsOn ?? o.locale?.options?.weekStartsOn ?? 0;
        if (!e) return t ? a() : g(n, r?.in);
        const c = {
            firstWeekContainsDate: s,
            weekStartsOn: u,
            locale: i
          },
          d = [new In(r?.in, n)],
          l = e.match(xr).map(t => {
            const e = t[0];
            return e in pe ? (0, pe[e])(t, i.formatLong) : t
          }).join("").match(Dr),
          f = [];
        for (let n of l) {
          !r?.useAdditionalWeekYearTokens && ke(n) && ve(n, e, t), !r?.useAdditionalDayOfYearTokens && Te(n) && ve(n, e, t);
          const o = n[0],
            s = Mr[o];
          if (s) {
            const {
              incompatibleTokens: e
            } = s;
            if (Array.isArray(e)) {
              const t = f.find(t => e.includes(t.token) || t.token === o);
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
            if (o.match(Sr)) throw new RangeError("Format string contains an unescaped latin alphabet character `" + o + "`");
            if ("''" === n ? n = "'" : "'" === o && (n = Or(n)), 0 !== t.indexOf(n)) return a();
            t = t.slice(n.length)
          }
        }
        if (t.length > 0 && vr.test(t)) return a();
        const h = d.map(t => t.priority).sort((t, e) => e - t).filter((t, e, n) => n.indexOf(t) === e).map(t => d.filter(e => e.priority === t).sort((t, e) => e.subPriority - t.subPriority)).map(t => t[0]);
        let w = g(n, r?.in);
        if (isNaN(+w)) return a();
        const y = {};
        for (const t of h) {
          if (!t.validate(w, c)) return a();
          const e = t.set(w, y, c);
          Array.isArray(e) ? (w = e[0], Object.assign(y, e[1])) : w = e
        }
        return w
      }

      function Or(t) {
        return t.match(Tr)[1].replace(kr, "'")
      }

      function Nr(t, e, n) {
        return et(Yr(t, e, new Date, n))
      }

      function Hr(t, e) {
        return 1 === g(t, e?.in).getDay()
      }

      function Fr(t) {
        return +g(t) < Date.now()
      }

      function Wr(t, e) {
        const n = g(t, e?.in);
        return n.setMinutes(0, 0, 0), n
      }

      function Ir(t, e, n) {
        const [r, a] = W(n?.in, t, e);
        return +Wr(r) === +Wr(a)
      }

      function Pr(t, e, n) {
        const [r, a] = W(n?.in, t, e);
        return +O(r, n) === +O(a, n)
      }

      function Er(t, e, n) {
        return Pr(t, e, {
          ...n,
          weekStartsOn: 1
        })
      }

      function Cr(t, e, n) {
        const [r, a] = W(n?.in, t, e);
        return +E(r) === +E(a)
      }

      function qr(t, e) {
        const n = g(t, e?.in);
        return n.setSeconds(0, 0), n
      }

      function $r(t, e) {
        return +qr(t) === +qr(e)
      }

      function Qr(t, e, n) {
        const [r, a] = W(n?.in, t, e);
        return r.getFullYear() === a.getFullYear() && r.getMonth() === a.getMonth()
      }

      function Lr(t, e, n) {
        const [r, a] = W(n?.in, t, e);
        return +Ft(r) === +Ft(a)
      }

      function Rr(t, e) {
        const n = g(t, e?.in);
        return n.setMilliseconds(0), n
      }

      function Xr(t, e) {
        return +Rr(t) === +Rr(e)
      }

      function jr(t, e, n) {
        const [r, a] = W(n?.in, t, e);
        return r.getFullYear() === a.getFullYear()
      }

      function Br(t, e) {
        return Ir(g(t, e?.in), J(e?.in || t))
      }

      function zr(t, e) {
        return Er(m(e?.in || t, t), J(e?.in || t))
      }

      function Ar(t) {
        return $r(t, J(t))
      }

      function Gr(t, e) {
        return Qr(m(e?.in || t, t), J(e?.in || t))
      }

      function Ur(t, e) {
        return Lr(m(e?.in || t, t), J(e?.in || t))
      }

      function Zr(t) {
        return Xr(t, J(t))
      }

      function _r(t, e) {
        return Pr(m(e?.in || t, t), J(e?.in || t), e)
      }

      function Jr(t, e) {
        return jr(m(e?.in || t, t), J(e?.in || t))
      }

      function Kr(t, e) {
        return 4 === g(t, e?.in).getDay()
      }

      function Vr(t, e) {
        return V(m(e?.in || t, t), J(e?.in || t))
      }

      function ta(t, e) {
        return V(t, w(J(e?.in || t), 1), e)
      }

      function ea(t, e) {
        return 2 === g(t, e?.in).getDay()
      }

      function na(t, e) {
        return 3 === g(t, e?.in).getDay()
      }

      function ra(t, e, n) {
        const r = +g(t, n?.in),
          [a, o] = [+g(e.start, n?.in), +g(e.end, n?.in)].sort((t, e) => t - e);
        return r >= a && r <= o
      }

      function aa(t, e, n) {
        return w(t, -e, n)
      }

      function oa(t, e) {
        return V(m(e?.in || t, t), aa(J(e?.in || t), 1))
      }

      function ia(t, e) {
        const n = g(t, e?.in),
          r = n.getFullYear(),
          a = 9 + 10 * Math.floor(r / 10);
        return n.setFullYear(a + 1, 0, 0), n.setHours(0, 0, 0, 0), g(n, e?.in)
      }

      function sa(t, e) {
        const n = S(),
          r = e?.weekStartsOn ?? e?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0,
          a = g(t, e?.in),
          o = a.getDay(),
          i = 6 + (o < r ? -7 : 0) - (o - r);
        return a.setHours(0, 0, 0, 0), a.setDate(a.getDate() + i), a
      }

      function ua(t, e) {
        return sa(t, {
          ...e,
          weekStartsOn: 1
        })
      }

      function ca(t, e) {
        const n = H(t, e),
          r = m(e?.in || t, 0);
        r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
        const a = N(r, e);
        return a.setDate(a.getDate() - 1), a
      }

      function da(t, e) {
        const n = g(t, e?.in),
          r = n.getMonth(),
          a = r - r % 3 + 3;
        return n.setMonth(a, 0), n.setHours(0, 0, 0, 0), n
      }

      function la(t, e) {
        const n = g(t, e?.in),
          r = n.getFullYear();
        return n.setFullYear(r + 1, 0, 0), n.setHours(0, 0, 0, 0), n
      }
      const fa = /(\w)\1*|''|'(''|[^'])+('|$)|./g,
        ha = /^'([^]*?)'?$/,
        ma = /''/g,
        ga = /[a-zA-Z]/;

      function wa(t, e) {
        const n = g(t);
        if (!et(n)) throw new RangeError("Invalid time value");
        const r = e.match(fa);
        return r ? r.map(t => {
          if ("''" === t) return "'";
          const e = t[0];
          if ("'" === e) return function(t) {
            const e = t.match(ha);
            return e ? e[1].replace(ma, "'") : t
          }(t);
          const r = fe[e];
          if (r) return r(n, t);
          if (e.match(ga)) throw new RangeError("Format string contains an unescaped latin alphabet character `" + e + "`");
          return t
        }).join("") : ""
      }

      function ya({
        years: t,
        months: e,
        weeks: n,
        days: a,
        hours: o,
        minutes: i,
        seconds: s
      }) {
        let u = 0;
        t && (u += t * r), e && (u += 30.436875 * e), n && (u += 7 * n), a && (u += a);
        let c = 24 * u * 60 * 60;
        return o && (c += 60 * o * 60), i && (c += 60 * i), s && (c += s), Math.trunc(1e3 * c)
      }

      function ba(t) {
        const e = t / s;
        return Math.trunc(e)
      }

      function pa(t) {
        const e = t / i;
        return Math.trunc(e)
      }

      function Ma(t) {
        const e = t / u;
        return Math.trunc(e)
      }

      function Da(t) {
        const e = t / 60;
        return Math.trunc(e)
      }

      function xa(t) {
        return Math.trunc(t * i)
      }

      function Ta(t) {
        return Math.trunc(60 * t)
      }

      function ka(t) {
        const e = t / 3;
        return Math.trunc(e)
      }

      function va(t) {
        const e = t / 12;
        return Math.trunc(e)
      }

      function Sa(t, e, n) {
        let r = e - Ze(t, n);
        return r <= 0 && (r += 7), w(t, r, n)
      }

      function Ya(t, e) {
        return Sa(t, 5, e)
      }

      function Oa(t, e) {
        return Sa(t, 1, e)
      }

      function Na(t, e) {
        return Sa(t, 6, e)
      }

      function Ha(t, e) {
        return Sa(t, 0, e)
      }

      function Fa(t, e) {
        return Sa(t, 4, e)
      }

      function Wa(t, e) {
        return Sa(t, 2, e)
      }

      function Ia(t, e) {
        return Sa(t, 3, e)
      }

      function Pa(t, e) {
        const n = () => m(e?.in, NaN),
          r = e?.additionalDigits ?? 2,
          a = function(t) {
            const e = {},
              n = t.split(Ea.dateTimeDelimiter);
            let r;
            if (n.length > 2) return e;
            if (/:/.test(n[0]) ? r = n[0] : (e.date = n[0], r = n[1], Ea.timeZoneDelimiter.test(e.date) && (e.date = t.split(Ea.timeZoneDelimiter)[0], r = t.substr(e.date.length, t.length))), r) {
              const t = Ea.timezone.exec(r);
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
            const n = t.match(Ca);
            if (!n) return new Date(NaN);
            const r = !!n[4],
              a = Qa(n[1]),
              o = Qa(n[2]) - 1,
              i = Qa(n[3]),
              s = Qa(n[4]),
              u = Qa(n[5]) - 1;
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
                return e >= 0 && e <= 11 && n >= 1 && n <= (Ra[e] || (Xa(t) ? 29 : 28))
              }(e, o, i) && function(t, e) {
                return e >= 1 && e <= (Xa(t) ? 366 : 365)
              }(e, a) ? (t.setUTCFullYear(e, o, Math.max(a, i)), t) : new Date(NaN)
            }
          }(t.restDateString, t.year)
        }
        if (!o || isNaN(+o)) return n();
        const u = +o;
        let c, d = 0;
        if (a.time && (d = function(t) {
            const e = t.match(qa);
            if (!e) return NaN;
            const n = La(e[1]),
              r = La(e[2]),
              a = La(e[3]);
            return function(t, e, n) {
              return 24 === t ? 0 === e && 0 === n : n >= 0 && n < 60 && e >= 0 && e < 60 && t >= 0 && t < 25
            }(n, r, a) ? n * s + r * i + 1e3 * a : NaN
          }(a.time), isNaN(d))) return n();
        if (!a.timezone) {
          const t = new Date(u + d),
            n = g(0, e?.in);
          return n.setFullYear(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()), n.setHours(t.getUTCHours(), t.getUTCMinutes(), t.getUTCSeconds(), t.getUTCMilliseconds()), n
        }
        return c = function(t) {
          if ("Z" === t) return 0;
          const e = t.match($a);
          if (!e) return 0;
          const n = "+" === e[1] ? -1 : 1,
            r = parseInt(e[2]),
            a = e[3] && parseInt(e[3]) || 0;
          return function(t, e) {
            return e >= 0 && e <= 59
          }(0, a) ? n * (r * s + a * i) : NaN
        }(a.timezone), isNaN(c) ? n() : g(u + d + c, e?.in)
      }
      const Ea = {
          dateTimeDelimiter: /[T ]/,
          timeZoneDelimiter: /[Z ]/i,
          timezone: /([Z+-].*)$/
        },
        Ca = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,
        qa = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,
        $a = /^([+-])(\d{2})(?::?(\d{2}))?$/;

      function Qa(t) {
        return t ? parseInt(t) : 1
      }

      function La(t) {
        return t && parseFloat(t.replace(",", ".")) || 0
      }
      const Ra = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

      function Xa(t) {
        return t % 400 == 0 || t % 4 == 0 && t % 100 != 0
      }

      function ja(t, e) {
        const n = t.match(/(\d{4})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2}):(\d{2})(?:\.(\d{0,7}))?(?:Z|(.)(\d{2}):?(\d{2})?)?/);
        return g(n ? Date.UTC(+n[1], +n[2] - 1, +n[3], +n[4] - (+n[9] || 0) * ("-" == n[8] ? -1 : 1), +n[5] - (+n[10] || 0) * ("-" == n[8] ? -1 : 1), +n[6], +((n[7] || "0") + "00").substring(0, 3)) : NaN, e?.in)
      }

      function Ba(t, e, n) {
        let r = Ze(t, n) - e;
        return r <= 0 && (r += 7), aa(t, r, n)
      }

      function za(t, e) {
        return Ba(t, 5, e)
      }

      function Aa(t, e) {
        return Ba(t, 1, e)
      }

      function Ga(t, e) {
        return Ba(t, 6, e)
      }

      function Ua(t, e) {
        return Ba(t, 0, e)
      }

      function Za(t, e) {
        return Ba(t, 4, e)
      }

      function _a(t, e) {
        return Ba(t, 2, e)
      }

      function Ja(t, e) {
        return Ba(t, 3, e)
      }

      function Ka(t) {
        return Math.trunc(3 * t)
      }

      function Va(t) {
        const e = t / 4;
        return Math.trunc(e)
      }

      function to(t, e) {
        const n = e?.nearestTo ?? 1;
        if (n < 1 || n > 12) return m(e?.in || t, NaN);
        const r = g(t, e?.in),
          a = r.getMinutes() / 60,
          o = r.getSeconds() / 60 / 60,
          i = r.getMilliseconds() / 1e3 / 60 / 60,
          s = r.getHours() + a + o + i,
          u = ft(e?.roundingMethod ?? "round")(s / n) * n;
        return r.setHours(u, 0, 0, 0), r
      }

      function eo(t, e) {
        const n = e?.nearestTo ?? 1;
        if (n < 1 || n > 30) return m(t, NaN);
        const r = g(t, e?.in),
          a = r.getSeconds() / 60,
          o = r.getMilliseconds() / 1e3 / 60,
          i = r.getMinutes() + a + o,
          s = ft(e?.roundingMethod ?? "round")(i / n) * n;
        return r.setMinutes(s, 0, 0), r
      }

      function no(t) {
        const e = t / f;
        return Math.trunc(e)
      }

      function ro(t) {
        return t * u
      }

      function ao(t) {
        const e = t / 60;
        return Math.trunc(e)
      }

      function oo(t, e, n) {
        const r = g(t, n?.in),
          a = r.getFullYear(),
          o = r.getDate(),
          i = m(n?.in || t, 0);
        i.setFullYear(a, e, 15), i.setHours(0, 0, 0, 0);
        const s = _e(i);
        return r.setMonth(e, Math.min(o, s)), r
      }

      function io(t, e, n) {
        let r = g(t, n?.in);
        return isNaN(+r) ? m(n?.in || t, NaN) : (null != e.year && r.setFullYear(e.year), null != e.month && (r = oo(r, e.month)), null != e.date && r.setDate(e.date), null != e.hours && r.setHours(e.hours), null != e.minutes && r.setMinutes(e.minutes), null != e.seconds && r.setSeconds(e.seconds), null != e.milliseconds && r.setMilliseconds(e.milliseconds), r)
      }

      function so(t, e, n) {
        const r = g(t, n?.in);
        return r.setDate(e), r
      }

      function uo(t, e, n) {
        const r = g(t, n?.in);
        return r.setMonth(0), r.setDate(e), r
      }

      function co(t) {
        const e = {},
          n = S();
        for (const t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
        for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && (void 0 === t[n] ? delete e[n] : e[n] = t[n]);
        Y(e)
      }

      function lo(t, e, n) {
        const r = g(t, n?.in);
        return r.setHours(e), r
      }

      function fo(t, e, n) {
        const r = g(t, n?.in);
        return r.setMilliseconds(e), r
      }

      function ho(t, e, n) {
        const r = g(t, n?.in);
        return r.setMinutes(e), r
      }

      function mo(t, e, n) {
        const r = g(t, n?.in),
          a = e - (Math.trunc(r.getMonth() / 3) + 1);
        return oo(r, r.getMonth() + 3 * a)
      }

      function go(t, e, n) {
        const r = g(t, n?.in);
        return r.setSeconds(e), r
      }

      function wo(t, e, n) {
        const r = S(),
          a = n?.firstWeekContainsDate ?? n?.locale?.options?.firstWeekContainsDate ?? r.firstWeekContainsDate ?? r.locale?.options?.firstWeekContainsDate ?? 1,
          o = P(g(t, n?.in), ce(t, n), n),
          i = m(n?.in || t, 0);
        i.setFullYear(e, 0, a), i.setHours(0, 0, 0, 0);
        const s = ce(i, n);
        return s.setDate(s.getDate() + o), s
      }

      function yo(t, e, n) {
        const r = g(t, n?.in);
        return isNaN(+r) ? m(n?.in || t, NaN) : (r.setFullYear(e), r)
      }

      function bo(t, e) {
        const n = g(t, e?.in),
          r = n.getFullYear(),
          a = 10 * Math.floor(r / 10);
        return n.setFullYear(a, 0, 1), n.setHours(0, 0, 0, 0), n
      }

      function po(t) {
        return I(Date.now(), t)
      }

      function Mo(t) {
        const e = J(t?.in),
          n = e.getFullYear(),
          r = e.getMonth(),
          a = e.getDate(),
          o = m(t?.in, 0);
        return o.setFullYear(n, r, a + 1), o.setHours(0, 0, 0, 0), o
      }

      function Do(t) {
        const e = J(t?.in),
          n = e.getFullYear(),
          r = e.getMonth(),
          a = e.getDate(),
          o = J(t?.in);
        return o.setFullYear(n, r, a - 1), o.setHours(0, 0, 0, 0), o
      }

      function xo(t, e, n) {
        return y(t, -e, n)
      }

      function To(t, e, n) {
        const {
          years: r = 0,
          months: a = 0,
          weeks: o = 0,
          days: i = 0,
          hours: s = 0,
          minutes: u = 0,
          seconds: c = 0
        } = e, d = aa(xo(t, a + 12 * r, n), i + 7 * o, n), l = 1e3 * (c + 60 * (u + 60 * s));
        return m(n?.in || t, +d - l)
      }

      function ko(t, e, n) {
        return x(t, -e, n)
      }

      function vo(t, e, n) {
        return k(t, -e, n)
      }

      function So(t, e, n) {
        return T(t, -e, n)
      }

      function Yo(t, e, n) {
        return $(t, -e, n)
      }

      function Oo(t, e, n) {
        return Q(t, -e, n)
      }

      function No(t, e, n) {
        return L(t, -e, n)
      }

      function Ho(t, e, n) {
        return R(t, -e, n)
      }

      function Fo(t, e, n) {
        return X(t, -e, n)
      }

      function Wo(t) {
        return Math.trunc(7 * t)
      }

      function Io(t) {
        return Math.trunc(t * r)
      }

      function Po(t) {
        return Math.trunc(12 * t)
      }

      function Eo(t) {
        return Math.trunc(4 * t)
      }
    }
  }
]);