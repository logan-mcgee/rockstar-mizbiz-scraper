try {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    e = (new t.Error).stack;
  e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "5f57eb24-77a9-4d5a-bc72-e9cf2bd5c1d2", t._sentryDebugIdIdentifier = "sentry-dbid-5f57eb24-77a9-4d5a-bc72-e9cf2bd5c1d2")
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
  [7946], {
    87946(t, e, n) {
      n.r(e), n.d(e, {
        add: () => f,
        addBusinessDays: () => w,
        addDays: () => d,
        addHours: () => b,
        addISOWeekYears: () => F,
        addMilliseconds: () => y,
        addMinutes: () => W,
        addMonths: () => l,
        addQuarters: () => I,
        addSeconds: () => P,
        addWeeks: () => E,
        addYears: () => C,
        areIntervalsOverlapping: () => q,
        clamp: () => L,
        closestIndexTo: () => R,
        closestTo: () => X,
        compareAsc: () => j,
        compareDesc: () => B,
        constructFrom: () => u,
        constructNow: () => z,
        daysToWeeks: () => A,
        differenceInBusinessDays: () => _,
        differenceInCalendarDays: () => O,
        differenceInCalendarISOWeekYears: () => J,
        differenceInCalendarISOWeeks: () => K,
        differenceInCalendarMonths: () => V,
        differenceInCalendarQuarters: () => et,
        differenceInCalendarWeeks: () => nt,
        differenceInCalendarYears: () => rt,
        differenceInDays: () => at,
        differenceInHours: () => st,
        differenceInISOWeekYears: () => ct,
        differenceInMilliseconds: () => dt,
        differenceInMinutes: () => lt,
        differenceInMonths: () => gt,
        differenceInQuarters: () => wt,
        differenceInSeconds: () => yt,
        differenceInWeeks: () => bt,
        differenceInYears: () => pt,
        eachDayOfInterval: () => Dt,
        eachHourOfInterval: () => xt,
        eachMinuteOfInterval: () => Tt,
        eachMonthOfInterval: () => kt,
        eachQuarterOfInterval: () => St,
        eachWeekOfInterval: () => Yt,
        eachWeekendOfInterval: () => Ot,
        eachWeekendOfMonth: () => Ht,
        eachWeekendOfYear: () => It,
        eachYearOfInterval: () => Pt,
        endOfDay: () => ft,
        endOfDecade: () => Et,
        endOfHour: () => Ct,
        endOfISOWeek: () => $t,
        endOfISOWeekYear: () => Qt,
        endOfMinute: () => Lt,
        endOfMonth: () => ht,
        endOfQuarter: () => Rt,
        endOfSecond: () => Xt,
        endOfToday: () => jt,
        endOfTomorrow: () => Bt,
        endOfWeek: () => qt,
        endOfYear: () => Ft,
        endOfYesterday: () => zt,
        format: () => ve,
        formatDate: () => ve,
        formatDistance: () => Ye,
        formatDistanceStrict: () => Oe,
        formatDistanceToNow: () => Ne,
        formatDistanceToNowStrict: () => He,
        formatDuration: () => We,
        formatISO: () => Ie,
        formatISO9075: () => Pe,
        formatISODuration: () => Ee,
        formatRFC3339: () => Ce,
        formatRFC7231: () => Qe,
        formatRelative: () => Le,
        formatters: () => se,
        fromUnixTime: () => Re,
        getDate: () => Xe,
        getDay: () => je,
        getDayOfYear: () => te,
        getDaysInMonth: () => Be,
        getDaysInYear: () => Ae,
        getDecade: () => Ge,
        getDefaultOptions: () => Ue,
        getHours: () => Ze,
        getISODay: () => _e,
        getISOWeek: () => ee,
        getISOWeekYear: () => k,
        getISOWeeksInYear: () => Je,
        getMilliseconds: () => Ke,
        getMinutes: () => Ve,
        getMonth: () => tn,
        getOverlappingDaysInIntervals: () => en,
        getQuarter: () => tt,
        getSeconds: () => nn,
        getTime: () => rn,
        getUnixTime: () => an,
        getWeek: () => ae,
        getWeekOfMonth: () => on,
        getWeekYear: () => ne,
        getWeeksInMonth: () => un,
        getYear: () => cn,
        hoursToMilliseconds: () => dn,
        hoursToMinutes: () => ln,
        hoursToSeconds: () => fn,
        interval: () => hn,
        intervalToDuration: () => mn,
        intlFormat: () => gn,
        intlFormatDistance: () => wn,
        isAfter: () => yn,
        isBefore: () => bn,
        isDate: () => U,
        isEqual: () => pn,
        isExists: () => Mn,
        isFirstDayOfMonth: () => Dn,
        isFriday: () => xn,
        isFuture: () => Tn,
        isLastDayOfMonth: () => mt,
        isLeapYear: () => ze,
        isMatch: () => Tr,
        isMonday: () => kr,
        isPast: () => vr,
        isSameDay: () => G,
        isSameHour: () => Yr,
        isSameISOWeek: () => Nr,
        isSameISOWeekYear: () => Hr,
        isSameMinute: () => Wr,
        isSameMonth: () => Ir,
        isSameQuarter: () => Pr,
        isSameSecond: () => Cr,
        isSameWeek: () => Or,
        isSameYear: () => qr,
        isSaturday: () => h,
        isSunday: () => m,
        isThisHour: () => $r,
        isThisISOWeek: () => Qr,
        isThisMinute: () => Lr,
        isThisMonth: () => Rr,
        isThisQuarter: () => Xr,
        isThisSecond: () => jr,
        isThisWeek: () => Br,
        isThisYear: () => zr,
        isThursday: () => Ar,
        isToday: () => Gr,
        isTomorrow: () => Ur,
        isTuesday: () => Zr,
        isValid: () => Z,
        isWednesday: () => _r,
        isWeekend: () => g,
        isWithinInterval: () => Jr,
        isYesterday: () => Vr,
        lastDayOfDecade: () => ta,
        lastDayOfISOWeek: () => na,
        lastDayOfISOWeekYear: () => ra,
        lastDayOfMonth: () => sn,
        lastDayOfQuarter: () => aa,
        lastDayOfWeek: () => ea,
        lastDayOfYear: () => oa,
        lightFormat: () => da,
        lightFormatters: () => ie,
        longFormatters: () => he,
        max: () => $,
        milliseconds: () => la,
        millisecondsToHours: () => fa,
        millisecondsToMinutes: () => ha,
        millisecondsToSeconds: () => ma,
        min: () => Q,
        minutesToHours: () => ga,
        minutesToMilliseconds: () => wa,
        minutesToSeconds: () => ya,
        monthsToQuarters: () => ba,
        monthsToYears: () => pa,
        nextDay: () => Ma,
        nextFriday: () => Da,
        nextMonday: () => xa,
        nextSaturday: () => Ta,
        nextSunday: () => ka,
        nextThursday: () => va,
        nextTuesday: () => Sa,
        nextWednesday: () => Ya,
        parse: () => Dr,
        parseISO: () => Oa,
        parseJSON: () => qa,
        parsers: () => mr,
        previousDay: () => $a,
        previousFriday: () => Qa,
        previousMonday: () => La,
        previousSaturday: () => Ra,
        previousSunday: () => Xa,
        previousThursday: () => ja,
        previousTuesday: () => Ba,
        previousWednesday: () => za,
        quartersToMonths: () => Aa,
        quartersToYears: () => Ga,
        roundToNearestHours: () => Ua,
        roundToNearestMinutes: () => Za,
        secondsToHours: () => _a,
        secondsToMilliseconds: () => Ja,
        secondsToMinutes: () => Ka,
        set: () => to,
        setDate: () => eo,
        setDay: () => fr,
        setDayOfYear: () => no,
        setDefaultOptions: () => ro,
        setHours: () => ao,
        setISODay: () => hr,
        setISOWeek: () => cr,
        setISOWeekYear: () => H,
        setMilliseconds: () => oo,
        setMinutes: () => io,
        setMonth: () => Va,
        setQuarter: () => so,
        setSeconds: () => uo,
        setWeek: () => ur,
        setWeekYear: () => co,
        setYear: () => lo,
        startOfDay: () => Y,
        startOfDecade: () => fo,
        startOfHour: () => Sr,
        startOfISOWeek: () => T,
        startOfISOWeekYear: () => N,
        startOfMinute: () => Fr,
        startOfMonth: () => Nt,
        startOfQuarter: () => vt,
        startOfSecond: () => Er,
        startOfToday: () => ho,
        startOfTomorrow: () => mo,
        startOfWeek: () => x,
        startOfWeekYear: () => re,
        startOfYear: () => Wt,
        startOfYesterday: () => go,
        sub: () => yo,
        subBusinessDays: () => bo,
        subDays: () => Kr,
        subHours: () => po,
        subISOWeekYears: () => ut,
        subMilliseconds: () => Mo,
        subMinutes: () => Do,
        subMonths: () => wo,
        subQuarters: () => xo,
        subSeconds: () => To,
        subWeeks: () => ko,
        subYears: () => vo,
        toDate: () => c,
        transpose: () => kn,
        weeksToDays: () => So,
        yearsToDays: () => Yo,
        yearsToMonths: () => Oo,
        yearsToQuarters: () => No
      });
      const r = 365.2425,
        a = (Math.pow(10, 8), 6048e5),
        o = 864e5,
        i = 36e5,
        s = Symbol.for("constructDateFrom");

      function u(t, e) {
        return "function" == typeof t ? t(e) : t && "object" == typeof t && s in t ? t[s](e) : t instanceof Date ? new t.constructor(e) : new Date(e)
      }

      function c(t, e) {
        return u(e || t, t)
      }

      function d(t, e, n) {
        const r = c(t, n?.in);
        return isNaN(e) ? u(n?.in || t, NaN) : e ? (r.setDate(r.getDate() + e), r) : r
      }

      function l(t, e, n) {
        const r = c(t, n?.in);
        if (isNaN(e)) return u(n?.in || t, NaN);
        if (!e) return r;
        const a = r.getDate(),
          o = u(n?.in || t, r.getTime());
        return o.setMonth(r.getMonth() + e + 1, 0), a >= o.getDate() ? o : (r.setFullYear(o.getFullYear(), o.getMonth(), a), r)
      }

      function f(t, e, n) {
        const {
          years: r = 0,
          months: a = 0,
          weeks: o = 0,
          days: i = 0,
          hours: s = 0,
          minutes: f = 0,
          seconds: h = 0
        } = e, m = c(t, n?.in), g = a || r ? l(m, a + 12 * r) : m, w = i || o ? d(g, i + 7 * o) : g, y = 1e3 * (h + 60 * (f + 60 * s));
        return u(n?.in || t, +w + y)
      }

      function h(t, e) {
        return 6 === c(t, e?.in).getDay()
      }

      function m(t, e) {
        return 0 === c(t, e?.in).getDay()
      }

      function g(t, e) {
        const n = c(t, e?.in).getDay();
        return 0 === n || 6 === n
      }

      function w(t, e, n) {
        const r = c(t, n?.in),
          a = g(r, n);
        if (isNaN(e)) return u(n?.in, NaN);
        const o = r.getHours(),
          i = e < 0 ? -1 : 1,
          s = Math.trunc(e / 5);
        r.setDate(r.getDate() + 7 * s);
        let d = Math.abs(e % 5);
        for (; d > 0;) r.setDate(r.getDate() + i), g(r, n) || (d -= 1);
        return a && g(r, n) && 0 !== e && (h(r, n) && r.setDate(r.getDate() + (i < 0 ? 2 : -1)), m(r, n) && r.setDate(r.getDate() + (i < 0 ? 1 : -2))), r.setHours(o), r
      }

      function y(t, e, n) {
        return u(n?.in || t, +c(t) + e)
      }

      function b(t, e, n) {
        return y(t, e * i, n)
      }
      let p = {};

      function M() {
        return p
      }

      function D(t) {
        p = t
      }

      function x(t, e) {
        const n = M(),
          r = e?.weekStartsOn ?? e?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0,
          a = c(t, e?.in),
          o = a.getDay(),
          i = (o < r ? 7 : 0) + o - r;
        return a.setDate(a.getDate() - i), a.setHours(0, 0, 0, 0), a
      }

      function T(t, e) {
        return x(t, {
          ...e,
          weekStartsOn: 1
        })
      }

      function k(t, e) {
        const n = c(t, e?.in),
          r = n.getFullYear(),
          a = u(n, 0);
        a.setFullYear(r + 1, 0, 4), a.setHours(0, 0, 0, 0);
        const o = T(a),
          i = u(n, 0);
        i.setFullYear(r, 0, 4), i.setHours(0, 0, 0, 0);
        const s = T(i);
        return n.getTime() >= o.getTime() ? r + 1 : n.getTime() >= s.getTime() ? r : r - 1
      }

      function v(t) {
        const e = c(t),
          n = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
        return n.setUTCFullYear(e.getFullYear()), +t - +n
      }

      function S(t, ...e) {
        const n = u.bind(null, t || e.find(t => "object" == typeof t));
        return e.map(n)
      }

      function Y(t, e) {
        const n = c(t, e?.in);
        return n.setHours(0, 0, 0, 0), n
      }

      function O(t, e, n) {
        const [r, a] = S(n?.in, t, e), i = Y(r), s = Y(a), u = +i - v(i), c = +s - v(s);
        return Math.round((u - c) / o)
      }

      function N(t, e) {
        const n = k(t, e),
          r = u(e?.in || t, 0);
        return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), T(r)
      }

      function H(t, e, n) {
        let r = c(t, n?.in);
        const a = O(r, N(r, n)),
          o = u(n?.in || t, 0);
        return o.setFullYear(e, 0, 4), o.setHours(0, 0, 0, 0), r = N(o), r.setDate(r.getDate() + a), r
      }

      function F(t, e, n) {
        return H(t, k(t, n) + e, n)
      }

      function W(t, e, n) {
        const r = c(t, n?.in);
        return r.setTime(r.getTime() + 6e4 * e), r
      }

      function I(t, e, n) {
        return l(t, 3 * e, n)
      }

      function P(t, e, n) {
        return y(t, 1e3 * e, n)
      }

      function E(t, e, n) {
        return d(t, 7 * e, n)
      }

      function C(t, e, n) {
        return l(t, 12 * e, n)
      }

      function q(t, e, n) {
        const [r, a] = [+c(t.start, n?.in), +c(t.end, n?.in)].sort((t, e) => t - e), [o, i] = [+c(e.start, n?.in), +c(e.end, n?.in)].sort((t, e) => t - e);
        return n?.inclusive ? r <= i && o <= a : r < i && o < a
      }

      function $(t, e) {
        let n, r = e?.in;
        return t.forEach(t => {
          r || "object" != typeof t || (r = u.bind(null, t));
          const e = c(t, r);
          (!n || n < e || isNaN(+e)) && (n = e)
        }), u(r, n || NaN)
      }

      function Q(t, e) {
        let n, r = e?.in;
        return t.forEach(t => {
          r || "object" != typeof t || (r = u.bind(null, t));
          const e = c(t, r);
          (!n || n > e || isNaN(+e)) && (n = e)
        }), u(r, n || NaN)
      }

      function L(t, e, n) {
        const [r, a, o] = S(n?.in, t, e.start, e.end);
        return Q([$([r, a], n), o], n)
      }

      function R(t, e) {
        const n = +c(t);
        if (isNaN(n)) return NaN;
        let r, a;
        return e.forEach((t, e) => {
          const o = c(t);
          if (isNaN(+o)) return r = NaN, void(a = NaN);
          const i = Math.abs(n - +o);
          (null == r || i < a) && (r = e, a = i)
        }), r
      }

      function X(t, e, n) {
        const [r, ...a] = S(n?.in, t, ...e), o = R(r, a);
        return "number" == typeof o && isNaN(o) ? u(r, NaN) : void 0 !== o ? a[o] : void 0
      }

      function j(t, e) {
        const n = +c(t) - +c(e);
        return n < 0 ? -1 : n > 0 ? 1 : n
      }

      function B(t, e) {
        const n = +c(t) - +c(e);
        return n > 0 ? -1 : n < 0 ? 1 : n
      }

      function z(t) {
        return u(t, Date.now())
      }

      function A(t) {
        const e = Math.trunc(t / 7);
        return 0 === e ? 0 : e
      }

      function G(t, e, n) {
        const [r, a] = S(n?.in, t, e);
        return +Y(r) === +Y(a)
      }

      function U(t) {
        return t instanceof Date || "object" == typeof t && "[object Date]" === Object.prototype.toString.call(t)
      }

      function Z(t) {
        return !(!U(t) && "number" != typeof t || isNaN(+c(t)))
      }

      function _(t, e, n) {
        const [r, a] = S(n?.in, t, e);
        if (!Z(r) || !Z(a)) return NaN;
        const o = O(r, a),
          i = o < 0 ? -1 : 1,
          s = Math.trunc(o / 7);
        let u = 5 * s,
          c = d(a, 7 * s);
        for (; !G(r, c);) u += g(c, n) ? 0 : i, c = d(c, i);
        return 0 === u ? 0 : u
      }

      function J(t, e, n) {
        const [r, a] = S(n?.in, t, e);
        return k(r, n) - k(a, n)
      }

      function K(t, e, n) {
        const [r, o] = S(n?.in, t, e), i = T(r), s = T(o), u = +i - v(i), c = +s - v(s);
        return Math.round((u - c) / a)
      }

      function V(t, e, n) {
        const [r, a] = S(n?.in, t, e);
        return 12 * (r.getFullYear() - a.getFullYear()) + (r.getMonth() - a.getMonth())
      }

      function tt(t, e) {
        const n = c(t, e?.in);
        return Math.trunc(n.getMonth() / 3) + 1
      }

      function et(t, e, n) {
        const [r, a] = S(n?.in, t, e);
        return 4 * (r.getFullYear() - a.getFullYear()) + (tt(r) - tt(a))
      }

      function nt(t, e, n) {
        const [r, o] = S(n?.in, t, e), i = x(r, n), s = x(o, n), u = +i - v(i), c = +s - v(s);
        return Math.round((u - c) / a)
      }

      function rt(t, e, n) {
        const [r, a] = S(n?.in, t, e);
        return r.getFullYear() - a.getFullYear()
      }

      function at(t, e, n) {
        const [r, a] = S(n?.in, t, e), o = ot(r, a), i = Math.abs(O(r, a));
        r.setDate(r.getDate() - o * i);
        const s = o * (i - Number(ot(r, a) === -o));
        return 0 === s ? 0 : s
      }

      function ot(t, e) {
        const n = t.getFullYear() - e.getFullYear() || t.getMonth() - e.getMonth() || t.getDate() - e.getDate() || t.getHours() - e.getHours() || t.getMinutes() - e.getMinutes() || t.getSeconds() - e.getSeconds() || t.getMilliseconds() - e.getMilliseconds();
        return n < 0 ? -1 : n > 0 ? 1 : n
      }

      function it(t) {
        return e => {
          const n = (t ? Math[t] : Math.trunc)(e);
          return 0 === n ? 0 : n
        }
      }

      function st(t, e, n) {
        const [r, a] = S(n?.in, t, e), o = (+r - +a) / i;
        return it(n?.roundingMethod)(o)
      }

      function ut(t, e, n) {
        return F(t, -e, n)
      }

      function ct(t, e, n) {
        const [r, a] = S(n?.in, t, e), o = j(r, a), i = Math.abs(J(r, a, n)), s = ut(r, o * i, n), u = o * (i - Number(j(s, a) === -o));
        return 0 === u ? 0 : u
      }

      function dt(t, e) {
        return +c(t) - +c(e)
      }

      function lt(t, e, n) {
        const r = dt(t, e) / 6e4;
        return it(n?.roundingMethod)(r)
      }

      function ft(t, e) {
        const n = c(t, e?.in);
        return n.setHours(23, 59, 59, 999), n
      }

      function ht(t, e) {
        const n = c(t, e?.in),
          r = n.getMonth();
        return n.setFullYear(n.getFullYear(), r + 1, 0), n.setHours(23, 59, 59, 999), n
      }

      function mt(t, e) {
        const n = c(t, e?.in);
        return +ft(n, e) === +ht(n, e)
      }

      function gt(t, e, n) {
        const [r, a, o] = S(n?.in, t, t, e), i = j(a, o), s = Math.abs(V(a, o));
        if (s < 1) return 0;
        1 === a.getMonth() && a.getDate() > 27 && a.setDate(30), a.setMonth(a.getMonth() - i * s);
        let u = j(a, o) === -i;
        mt(r) && 1 === s && 1 === j(r, o) && (u = !1);
        const c = i * (s - +u);
        return 0 === c ? 0 : c
      }

      function wt(t, e, n) {
        const r = gt(t, e, n) / 3;
        return it(n?.roundingMethod)(r)
      }

      function yt(t, e, n) {
        const r = dt(t, e) / 1e3;
        return it(n?.roundingMethod)(r)
      }

      function bt(t, e, n) {
        const r = at(t, e, n) / 7;
        return it(n?.roundingMethod)(r)
      }

      function pt(t, e, n) {
        const [r, a] = S(n?.in, t, e), o = j(r, a), i = Math.abs(rt(r, a));
        r.setFullYear(1584), a.setFullYear(1584);
        const s = o * (i - +(j(r, a) === -o));
        return 0 === s ? 0 : s
      }

      function Mt(t, e) {
        const [n, r] = S(t, e.start, e.end);
        return {
          start: n,
          end: r
        }
      }

      function Dt(t, e) {
        const {
          start: n,
          end: r
        } = Mt(e?.in, t);
        let a = +n > +r;
        const o = a ? +n : +r,
          i = a ? r : n;
        i.setHours(0, 0, 0, 0);
        let s = e?.step ?? 1;
        if (!s) return [];
        s < 0 && (s = -s, a = !a);
        const c = [];
        for (; + i <= o;) c.push(u(n, i)), i.setDate(i.getDate() + s), i.setHours(0, 0, 0, 0);
        return a ? c.reverse() : c
      }

      function xt(t, e) {
        const {
          start: n,
          end: r
        } = Mt(e?.in, t);
        let a = +n > +r;
        const o = a ? +n : +r,
          i = a ? r : n;
        i.setMinutes(0, 0, 0);
        let s = e?.step ?? 1;
        if (!s) return [];
        s < 0 && (s = -s, a = !a);
        const c = [];
        for (; + i <= o;) c.push(u(n, i)), i.setHours(i.getHours() + s);
        return a ? c.reverse() : c
      }

      function Tt(t, e) {
        const {
          start: n,
          end: r
        } = Mt(e?.in, t);
        n.setSeconds(0, 0);
        let a = +n > +r;
        const o = a ? +n : +r;
        let i = a ? r : n,
          s = e?.step ?? 1;
        if (!s) return [];
        s < 0 && (s = -s, a = !a);
        const c = [];
        for (; + i <= o;) c.push(u(n, i)), i = W(i, s);
        return a ? c.reverse() : c
      }

      function kt(t, e) {
        const {
          start: n,
          end: r
        } = Mt(e?.in, t);
        let a = +n > +r;
        const o = a ? +n : +r,
          i = a ? r : n;
        i.setHours(0, 0, 0, 0), i.setDate(1);
        let s = e?.step ?? 1;
        if (!s) return [];
        s < 0 && (s = -s, a = !a);
        const c = [];
        for (; + i <= o;) c.push(u(n, i)), i.setMonth(i.getMonth() + s);
        return a ? c.reverse() : c
      }

      function vt(t, e) {
        const n = c(t, e?.in),
          r = n.getMonth(),
          a = r - r % 3;
        return n.setMonth(a, 1), n.setHours(0, 0, 0, 0), n
      }

      function St(t, e) {
        const {
          start: n,
          end: r
        } = Mt(e?.in, t);
        let a = +n > +r;
        const o = a ? +vt(n) : +vt(r);
        let i = vt(a ? r : n),
          s = e?.step ?? 1;
        if (!s) return [];
        s < 0 && (s = -s, a = !a);
        const c = [];
        for (; + i <= o;) c.push(u(n, i)), i = I(i, s);
        return a ? c.reverse() : c
      }

      function Yt(t, e) {
        const {
          start: n,
          end: r
        } = Mt(e?.in, t);
        let a = +n > +r;
        const o = x(a ? r : n, e),
          i = x(a ? n : r, e);
        o.setHours(15), i.setHours(15);
        const s = +i.getTime();
        let c = o,
          d = e?.step ?? 1;
        if (!d) return [];
        d < 0 && (d = -d, a = !a);
        const l = [];
        for (; + c <= s;) c.setHours(0), l.push(u(n, c)), c = E(c, d), c.setHours(15);
        return a ? l.reverse() : l
      }

      function Ot(t, e) {
        const {
          start: n,
          end: r
        } = Mt(e?.in, t), a = Dt({
          start: n,
          end: r
        }, e), o = [];
        let i = 0;
        for (; i < a.length;) {
          const t = a[i++];
          g(t) && o.push(u(n, t))
        }
        return o
      }

      function Nt(t, e) {
        const n = c(t, e?.in);
        return n.setDate(1), n.setHours(0, 0, 0, 0), n
      }

      function Ht(t, e) {
        return Ot({
          start: Nt(t, e),
          end: ht(t, e)
        }, e)
      }

      function Ft(t, e) {
        const n = c(t, e?.in),
          r = n.getFullYear();
        return n.setFullYear(r + 1, 0, 0), n.setHours(23, 59, 59, 999), n
      }

      function Wt(t, e) {
        const n = c(t, e?.in);
        return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n
      }

      function It(t, e) {
        return Ot({
          start: Wt(t, e),
          end: Ft(t, e)
        }, e)
      }

      function Pt(t, e) {
        const {
          start: n,
          end: r
        } = Mt(e?.in, t);
        let a = +n > +r;
        const o = a ? +n : +r,
          i = a ? r : n;
        i.setHours(0, 0, 0, 0), i.setMonth(0, 1);
        let s = e?.step ?? 1;
        if (!s) return [];
        s < 0 && (s = -s, a = !a);
        const c = [];
        for (; + i <= o;) c.push(u(n, i)), i.setFullYear(i.getFullYear() + s);
        return a ? c.reverse() : c
      }

      function Et(t, e) {
        const n = c(t, e?.in),
          r = n.getFullYear(),
          a = 9 + 10 * Math.floor(r / 10);
        return n.setFullYear(a, 11, 31), n.setHours(23, 59, 59, 999), n
      }

      function Ct(t, e) {
        const n = c(t, e?.in);
        return n.setMinutes(59, 59, 999), n
      }

      function qt(t, e) {
        const n = M(),
          r = e?.weekStartsOn ?? e?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0,
          a = c(t, e?.in),
          o = a.getDay(),
          i = 6 + (o < r ? -7 : 0) - (o - r);
        return a.setDate(a.getDate() + i), a.setHours(23, 59, 59, 999), a
      }

      function $t(t, e) {
        return qt(t, {
          ...e,
          weekStartsOn: 1
        })
      }

      function Qt(t, e) {
        const n = k(t, e),
          r = u(e?.in || t, 0);
        r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
        const a = T(r, e);
        return a.setMilliseconds(a.getMilliseconds() - 1), a
      }

      function Lt(t, e) {
        const n = c(t, e?.in);
        return n.setSeconds(59, 999), n
      }

      function Rt(t, e) {
        const n = c(t, e?.in),
          r = n.getMonth(),
          a = r - r % 3 + 3;
        return n.setMonth(a, 0), n.setHours(23, 59, 59, 999), n
      }

      function Xt(t, e) {
        const n = c(t, e?.in);
        return n.setMilliseconds(999), n
      }

      function jt(t) {
        return ft(Date.now(), t)
      }

      function Bt(t) {
        const e = z(t?.in),
          n = e.getFullYear(),
          r = e.getMonth(),
          a = e.getDate(),
          o = z(t?.in);
        return o.setFullYear(n, r, a + 1), o.setHours(23, 59, 59, 999), t?.in ? t.in(o) : o
      }

      function zt(t) {
        const e = z(t?.in),
          n = u(t?.in, 0);
        return n.setFullYear(e.getFullYear(), e.getMonth(), e.getDate() - 1), n.setHours(23, 59, 59, 999), n
      }
      const At = {
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

      function Gt(t) {
        return (e = {}) => {
          const n = e.width ? String(e.width) : t.defaultWidth;
          return t.formats[n] || t.formats[t.defaultWidth]
        }
      }
      const Ut = {
          date: Gt({
            formats: {
              full: "EEEE, MMMM do, y",
              long: "MMMM do, y",
              medium: "MMM d, y",
              short: "MM/dd/yyyy"
            },
            defaultWidth: "full"
          }),
          time: Gt({
            formats: {
              full: "h:mm:ss a zzzz",
              long: "h:mm:ss a z",
              medium: "h:mm:ss a",
              short: "h:mm a"
            },
            defaultWidth: "full"
          }),
          dateTime: Gt({
            formats: {
              full: "{{date}} 'at' {{time}}",
              long: "{{date}} 'at' {{time}}",
              medium: "{{date}}, {{time}}",
              short: "{{date}}, {{time}}"
            },
            defaultWidth: "full"
          })
        },
        Zt = {
          lastWeek: "'last' eeee 'at' p",
          yesterday: "'yesterday at' p",
          today: "'today at' p",
          tomorrow: "'tomorrow at' p",
          nextWeek: "eeee 'at' p",
          other: "P"
        };

      function _t(t) {
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

      function Jt(t) {
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
      var Kt;
      const Vt = {
        code: "en-US",
        formatDistance: (t, e, n) => {
          let r;
          const a = At[t];
          return r = "string" == typeof a ? a : 1 === e ? a.one : a.other.replace("{{count}}", e.toString()), n?.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r
        },
        formatLong: Ut,
        formatRelative: (t, e, n, r) => Zt[t],
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
          era: _t({
            values: {
              narrow: ["B", "A"],
              abbreviated: ["BC", "AD"],
              wide: ["Before Christ", "Anno Domini"]
            },
            defaultWidth: "wide"
          }),
          quarter: _t({
            values: {
              narrow: ["1", "2", "3", "4"],
              abbreviated: ["Q1", "Q2", "Q3", "Q4"],
              wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
            },
            defaultWidth: "wide",
            argumentCallback: t => t - 1
          }),
          month: _t({
            values: {
              narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
              abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
              wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
            },
            defaultWidth: "wide"
          }),
          day: _t({
            values: {
              narrow: ["S", "M", "T", "W", "T", "F", "S"],
              short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
              abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
              wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
            },
            defaultWidth: "wide"
          }),
          dayPeriod: _t({
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
          ordinalNumber: (Kt = {
            matchPattern: /^(\d+)(th|st|nd|rd)?/i,
            parsePattern: /\d+/i,
            valueCallback: t => parseInt(t, 10)
          }, (t, e = {}) => {
            const n = t.match(Kt.matchPattern);
            if (!n) return null;
            const r = n[0],
              a = t.match(Kt.parsePattern);
            if (!a) return null;
            let o = Kt.valueCallback ? Kt.valueCallback(a[0]) : a[0];
            return o = e.valueCallback ? e.valueCallback(o) : o, {
              value: o,
              rest: t.slice(r.length)
            }
          }),
          era: Jt({
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
          quarter: Jt({
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
          month: Jt({
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
          day: Jt({
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
          dayPeriod: Jt({
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

      function te(t, e) {
        const n = c(t, e?.in);
        return O(n, Wt(n)) + 1
      }

      function ee(t, e) {
        const n = c(t, e?.in),
          r = +T(n) - +N(n);
        return Math.round(r / a) + 1
      }

      function ne(t, e) {
        const n = c(t, e?.in),
          r = n.getFullYear(),
          a = M(),
          o = e?.firstWeekContainsDate ?? e?.locale?.options?.firstWeekContainsDate ?? a.firstWeekContainsDate ?? a.locale?.options?.firstWeekContainsDate ?? 1,
          i = u(e?.in || t, 0);
        i.setFullYear(r + 1, 0, o), i.setHours(0, 0, 0, 0);
        const s = x(i, e),
          d = u(e?.in || t, 0);
        d.setFullYear(r, 0, o), d.setHours(0, 0, 0, 0);
        const l = x(d, e);
        return +n >= +s ? r + 1 : +n >= +l ? r : r - 1
      }

      function re(t, e) {
        const n = M(),
          r = e?.firstWeekContainsDate ?? e?.locale?.options?.firstWeekContainsDate ?? n.firstWeekContainsDate ?? n.locale?.options?.firstWeekContainsDate ?? 1,
          a = ne(t, e),
          o = u(e?.in || t, 0);
        return o.setFullYear(a, 0, r), o.setHours(0, 0, 0, 0), x(o, e)
      }

      function ae(t, e) {
        const n = c(t, e?.in),
          r = +x(n, e) - +re(n, e);
        return Math.round(r / a) + 1
      }

      function oe(t, e) {
        return (t < 0 ? "-" : "") + Math.abs(t).toString().padStart(e, "0")
      }
      const ie = {
          y(t, e) {
            const n = t.getFullYear(),
              r = n > 0 ? n : 1 - n;
            return oe("yy" === e ? r % 100 : r, e.length)
          },
          M(t, e) {
            const n = t.getMonth();
            return "M" === e ? String(n + 1) : oe(n + 1, 2)
          },
          d: (t, e) => oe(t.getDate(), e.length),
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
          h: (t, e) => oe(t.getHours() % 12 || 12, e.length),
          H: (t, e) => oe(t.getHours(), e.length),
          m: (t, e) => oe(t.getMinutes(), e.length),
          s: (t, e) => oe(t.getSeconds(), e.length),
          S(t, e) {
            const n = e.length,
              r = t.getMilliseconds();
            return oe(Math.trunc(r * Math.pow(10, n - 3)), e.length)
          }
        },
        se = {
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
            return ie.y(t, e)
          },
          Y: function(t, e, n, r) {
            const a = ne(t, r),
              o = a > 0 ? a : 1 - a;
            return "YY" === e ? oe(o % 100, 2) : "Yo" === e ? n.ordinalNumber(o, {
              unit: "year"
            }) : oe(o, e.length)
          },
          R: function(t, e) {
            return oe(k(t), e.length)
          },
          u: function(t, e) {
            return oe(t.getFullYear(), e.length)
          },
          Q: function(t, e, n) {
            const r = Math.ceil((t.getMonth() + 1) / 3);
            switch (e) {
              case "Q":
                return String(r);
              case "QQ":
                return oe(r, 2);
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
                return oe(r, 2);
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
                return ie.M(t, e);
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
                return oe(r + 1, 2);
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
            const a = ae(t, r);
            return "wo" === e ? n.ordinalNumber(a, {
              unit: "week"
            }) : oe(a, e.length)
          },
          I: function(t, e, n) {
            const r = ee(t);
            return "Io" === e ? n.ordinalNumber(r, {
              unit: "week"
            }) : oe(r, e.length)
          },
          d: function(t, e, n) {
            return "do" === e ? n.ordinalNumber(t.getDate(), {
              unit: "date"
            }) : ie.d(t, e)
          },
          D: function(t, e, n) {
            const r = te(t);
            return "Do" === e ? n.ordinalNumber(r, {
              unit: "dayOfYear"
            }) : oe(r, e.length)
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
                return oe(o, 2);
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
                return oe(o, e.length);
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
                return oe(a, e.length);
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
            return ie.h(t, e)
          },
          H: function(t, e, n) {
            return "Ho" === e ? n.ordinalNumber(t.getHours(), {
              unit: "hour"
            }) : ie.H(t, e)
          },
          K: function(t, e, n) {
            const r = t.getHours() % 12;
            return "Ko" === e ? n.ordinalNumber(r, {
              unit: "hour"
            }) : oe(r, e.length)
          },
          k: function(t, e, n) {
            let r = t.getHours();
            return 0 === r && (r = 24), "ko" === e ? n.ordinalNumber(r, {
              unit: "hour"
            }) : oe(r, e.length)
          },
          m: function(t, e, n) {
            return "mo" === e ? n.ordinalNumber(t.getMinutes(), {
              unit: "minute"
            }) : ie.m(t, e)
          },
          s: function(t, e, n) {
            return "so" === e ? n.ordinalNumber(t.getSeconds(), {
              unit: "second"
            }) : ie.s(t, e)
          },
          S: function(t, e) {
            return ie.S(t, e)
          },
          X: function(t, e, n) {
            const r = t.getTimezoneOffset();
            if (0 === r) return "Z";
            switch (e) {
              case "X":
                return ce(r);
              case "XXXX":
              case "XX":
                return de(r);
              default:
                return de(r, ":")
            }
          },
          x: function(t, e, n) {
            const r = t.getTimezoneOffset();
            switch (e) {
              case "x":
                return ce(r);
              case "xxxx":
              case "xx":
                return de(r);
              default:
                return de(r, ":")
            }
          },
          O: function(t, e, n) {
            const r = t.getTimezoneOffset();
            switch (e) {
              case "O":
              case "OO":
              case "OOO":
                return "GMT" + ue(r, ":");
              default:
                return "GMT" + de(r, ":")
            }
          },
          z: function(t, e, n) {
            const r = t.getTimezoneOffset();
            switch (e) {
              case "z":
              case "zz":
              case "zzz":
                return "GMT" + ue(r, ":");
              default:
                return "GMT" + de(r, ":")
            }
          },
          t: function(t, e, n) {
            return oe(Math.trunc(+t / 1e3), e.length)
          },
          T: function(t, e, n) {
            return oe(+t, e.length)
          }
        };

      function ue(t, e = "") {
        const n = t > 0 ? "-" : "+",
          r = Math.abs(t),
          a = Math.trunc(r / 60),
          o = r % 60;
        return 0 === o ? n + String(a) : n + String(a) + e + oe(o, 2)
      }

      function ce(t, e) {
        return t % 60 == 0 ? (t > 0 ? "-" : "+") + oe(Math.abs(t) / 60, 2) : de(t, e)
      }

      function de(t, e = "") {
        const n = t > 0 ? "-" : "+",
          r = Math.abs(t);
        return n + oe(Math.trunc(r / 60), 2) + e + oe(r % 60, 2)
      }
      const le = (t, e) => {
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
        fe = (t, e) => {
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
        he = {
          p: fe,
          P: (t, e) => {
            const n = t.match(/(P+)(p+)?/) || [],
              r = n[1],
              a = n[2];
            if (!a) return le(t, e);
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
            return o.replace("{{date}}", le(r, e)).replace("{{time}}", fe(a, e))
          }
        },
        me = /^D+$/,
        ge = /^Y+$/,
        we = ["D", "DD", "YY", "YYYY"];

      function ye(t) {
        return me.test(t)
      }

      function be(t) {
        return ge.test(t)
      }

      function pe(t, e, n) {
        const r = function(t, e, n) {
          const r = "Y" === t[0] ? "years" : "days of the month";
          return `Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`
        }(t, e, n);
        if (console.warn(r), we.includes(t)) throw new RangeError(r)
      }
      const Me = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
        De = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
        xe = /^'([^]*?)'?$/,
        Te = /''/g,
        ke = /[a-zA-Z]/;

      function ve(t, e, n) {
        const r = M(),
          a = n?.locale ?? r.locale ?? Vt,
          o = n?.firstWeekContainsDate ?? n?.locale?.options?.firstWeekContainsDate ?? r.firstWeekContainsDate ?? r.locale?.options?.firstWeekContainsDate ?? 1,
          i = n?.weekStartsOn ?? n?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0,
          s = c(t, n?.in);
        if (!Z(s)) throw new RangeError("Invalid time value");
        let u = e.match(De).map(t => {
          const e = t[0];
          return "p" === e || "P" === e ? (0, he[e])(t, a.formatLong) : t
        }).join("").match(Me).map(t => {
          if ("''" === t) return {
            isToken: !1,
            value: "'"
          };
          const e = t[0];
          if ("'" === e) return {
            isToken: !1,
            value: Se(t)
          };
          if (se[e]) return {
            isToken: !0,
            value: t
          };
          if (e.match(ke)) throw new RangeError("Format string contains an unescaped latin alphabet character `" + e + "`");
          return {
            isToken: !1,
            value: t
          }
        });
        a.localize.preprocessor && (u = a.localize.preprocessor(s, u));
        const d = {
          firstWeekContainsDate: o,
          weekStartsOn: i,
          locale: a
        };
        return u.map(r => {
          if (!r.isToken) return r.value;
          const o = r.value;
          return (!n?.useAdditionalWeekYearTokens && be(o) || !n?.useAdditionalDayOfYearTokens && ye(o)) && pe(o, e, String(t)), (0, se[o[0]])(s, o, a.localize, d)
        }).join("")
      }

      function Se(t) {
        const e = t.match(xe);
        return e ? e[1].replace(Te, "'") : t
      }

      function Ye(t, e, n) {
        const r = M(),
          a = n?.locale ?? r.locale ?? Vt,
          o = j(t, e);
        if (isNaN(o)) throw new RangeError("Invalid time value");
        const i = Object.assign({}, n, {
            addSuffix: n?.addSuffix,
            comparison: o
          }),
          [s, u] = S(n?.in, ...o > 0 ? [e, t] : [t, e]),
          c = yt(u, s),
          d = (v(u) - v(s)) / 1e3,
          l = Math.round((c - d) / 60);
        let f;
        if (l < 2) return n?.includeSeconds ? c < 5 ? a.formatDistance("lessThanXSeconds", 5, i) : c < 10 ? a.formatDistance("lessThanXSeconds", 10, i) : c < 20 ? a.formatDistance("lessThanXSeconds", 20, i) : c < 40 ? a.formatDistance("halfAMinute", 0, i) : c < 60 ? a.formatDistance("lessThanXMinutes", 1, i) : a.formatDistance("xMinutes", 1, i) : 0 === l ? a.formatDistance("lessThanXMinutes", 1, i) : a.formatDistance("xMinutes", l, i);
        if (l < 45) return a.formatDistance("xMinutes", l, i);
        if (l < 90) return a.formatDistance("aboutXHours", 1, i);
        if (l < 1440) {
          const t = Math.round(l / 60);
          return a.formatDistance("aboutXHours", t, i)
        }
        if (l < 2520) return a.formatDistance("xDays", 1, i);
        if (l < 43200) {
          const t = Math.round(l / 1440);
          return a.formatDistance("xDays", t, i)
        }
        if (l < 86400) return f = Math.round(l / 43200), a.formatDistance("aboutXMonths", f, i);
        if (f = gt(u, s), f < 12) {
          const t = Math.round(l / 43200);
          return a.formatDistance("xMonths", t, i)
        } {
          const t = f % 12,
            e = Math.trunc(f / 12);
          return t < 3 ? a.formatDistance("aboutXYears", e, i) : t < 9 ? a.formatDistance("overXYears", e, i) : a.formatDistance("almostXYears", e + 1, i)
        }
      }

      function Oe(t, e, n) {
        const r = M(),
          a = n?.locale ?? r.locale ?? Vt,
          o = j(t, e);
        if (isNaN(o)) throw new RangeError("Invalid time value");
        const i = Object.assign({}, n, {
            addSuffix: n?.addSuffix,
            comparison: o
          }),
          [s, u] = S(n?.in, ...o > 0 ? [e, t] : [t, e]),
          c = it(n?.roundingMethod ?? "round"),
          d = u.getTime() - s.getTime(),
          l = d / 6e4,
          f = (d - (v(u) - v(s))) / 6e4,
          h = n?.unit;
        let m;
        if (m = h || (l < 1 ? "second" : l < 60 ? "minute" : l < 1440 ? "hour" : f < 43200 ? "day" : f < 525600 ? "month" : "year"), "second" === m) {
          const t = c(d / 1e3);
          return a.formatDistance("xSeconds", t, i)
        }
        if ("minute" === m) {
          const t = c(l);
          return a.formatDistance("xMinutes", t, i)
        }
        if ("hour" === m) {
          const t = c(l / 60);
          return a.formatDistance("xHours", t, i)
        }
        if ("day" === m) {
          const t = c(f / 1440);
          return a.formatDistance("xDays", t, i)
        }
        if ("month" === m) {
          const t = c(f / 43200);
          return 12 === t && "month" !== h ? a.formatDistance("xYears", 1, i) : a.formatDistance("xMonths", t, i)
        } {
          const t = c(f / 525600);
          return a.formatDistance("xYears", t, i)
        }
      }

      function Ne(t, e) {
        return Ye(t, z(t), e)
      }

      function He(t, e) {
        return Oe(t, z(t), e)
      }
      const Fe = ["years", "months", "weeks", "days", "hours", "minutes", "seconds"];

      function We(t, e) {
        const n = M(),
          r = e?.locale ?? n.locale ?? Vt,
          a = e?.format ?? Fe,
          o = e?.zero ?? !1,
          i = e?.delimiter ?? " ";
        return r.formatDistance ? a.reduce((e, n) => {
          const a = `x${n.replace(/(^.)/,t=>t.toUpperCase())}`,
            i = t[n];
          return void 0 !== i && (o || t[n]) ? e.concat(r.formatDistance(a, i)) : e
        }, []).join(i) : ""
      }

      function Ie(t, e) {
        const n = c(t, e?.in);
        if (isNaN(+n)) throw new RangeError("Invalid time value");
        const r = e?.format ?? "extended",
          a = e?.representation ?? "complete";
        let o = "",
          i = "";
        const s = "extended" === r ? "-" : "",
          u = "extended" === r ? ":" : "";
        if ("time" !== a) {
          const t = oe(n.getDate(), 2),
            e = oe(n.getMonth() + 1, 2);
          o = `${oe(n.getFullYear(),4)}${s}${e}${s}${t}`
        }
        if ("date" !== a) {
          const t = n.getTimezoneOffset();
          if (0 !== t) {
            const e = Math.abs(t);
            i = `${t<0?"+":"-"}${oe(Math.trunc(e/60),2)}:${oe(e%60,2)}`
          } else i = "Z";
          o = `${o}${""===o?"":"T"}${[oe(n.getHours(),2),oe(n.getMinutes(),2),oe(n.getSeconds(),2)].join(u)}${i}`
        }
        return o
      }

      function Pe(t, e) {
        const n = c(t, e?.in);
        if (!Z(n)) throw new RangeError("Invalid time value");
        const r = e?.format ?? "extended",
          a = e?.representation ?? "complete";
        let o = "";
        const i = "extended" === r ? "-" : "",
          s = "extended" === r ? ":" : "";
        if ("time" !== a) {
          const t = oe(n.getDate(), 2),
            e = oe(n.getMonth() + 1, 2);
          o = `${oe(n.getFullYear(),4)}${i}${e}${i}${t}`
        }
        return "date" !== a && (o = `${o}${""===o?"":" "}${oe(n.getHours(),2)}${s}${oe(n.getMinutes(),2)}${s}${oe(n.getSeconds(),2)}`), o
      }

      function Ee(t) {
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

      function Ce(t, e) {
        const n = c(t, e?.in);
        if (!Z(n)) throw new RangeError("Invalid time value");
        const r = e?.fractionDigits ?? 0,
          a = oe(n.getDate(), 2),
          o = oe(n.getMonth() + 1, 2),
          i = n.getFullYear(),
          s = oe(n.getHours(), 2),
          u = oe(n.getMinutes(), 2),
          d = oe(n.getSeconds(), 2);
        let l = "";
        if (r > 0) {
          const t = n.getMilliseconds();
          l = "." + oe(Math.trunc(t * Math.pow(10, r - 3)), r)
        }
        let f = "";
        const h = n.getTimezoneOffset();
        if (0 !== h) {
          const t = Math.abs(h);
          f = `${h<0?"+":"-"}${oe(Math.trunc(t/60),2)}:${oe(t%60,2)}`
        } else f = "Z";
        return `${i}-${o}-${a}T${s}:${u}:${d}${l}${f}`
      }
      const qe = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        $e = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

      function Qe(t) {
        const e = c(t);
        if (!Z(e)) throw new RangeError("Invalid time value");
        return `${qe[e.getUTCDay()]}, ${oe(e.getUTCDate(),2)} ${$e[e.getUTCMonth()]} ${e.getUTCFullYear()} ${oe(e.getUTCHours(),2)}:${oe(e.getUTCMinutes(),2)}:${oe(e.getUTCSeconds(),2)} GMT`
      }

      function Le(t, e, n) {
        const [r, a] = S(n?.in, t, e), o = M(), i = n?.locale ?? o.locale ?? Vt, s = n?.weekStartsOn ?? n?.locale?.options?.weekStartsOn ?? o.weekStartsOn ?? o.locale?.options?.weekStartsOn ?? 0, u = O(r, a);
        if (isNaN(u)) throw new RangeError("Invalid time value");
        let c;
        return c = u < -6 ? "other" : u < -1 ? "lastWeek" : u < 0 ? "yesterday" : u < 1 ? "today" : u < 2 ? "tomorrow" : u < 7 ? "nextWeek" : "other", ve(r, i.formatRelative(c, r, a, {
          locale: i,
          weekStartsOn: s
        }), {
          locale: i,
          weekStartsOn: s
        })
      }

      function Re(t, e) {
        return c(1e3 * t, e?.in)
      }

      function Xe(t, e) {
        return c(t, e?.in).getDate()
      }

      function je(t, e) {
        return c(t, e?.in).getDay()
      }

      function Be(t, e) {
        const n = c(t, e?.in),
          r = n.getFullYear(),
          a = n.getMonth(),
          o = u(n, 0);
        return o.setFullYear(r, a + 1, 0), o.setHours(0, 0, 0, 0), o.getDate()
      }

      function ze(t, e) {
        const n = c(t, e?.in).getFullYear();
        return n % 400 == 0 || n % 4 == 0 && n % 100 != 0
      }

      function Ae(t, e) {
        const n = c(t, e?.in);
        return Number.isNaN(+n) ? NaN : ze(n) ? 366 : 365
      }

      function Ge(t, e) {
        const n = c(t, e?.in).getFullYear();
        return 10 * Math.floor(n / 10)
      }

      function Ue() {
        return Object.assign({}, M())
      }

      function Ze(t, e) {
        return c(t, e?.in).getHours()
      }

      function _e(t, e) {
        const n = c(t, e?.in).getDay();
        return 0 === n ? 7 : n
      }

      function Je(t, e) {
        const n = N(t, e),
          r = +N(E(n, 60)) - +n;
        return Math.round(r / a)
      }

      function Ke(t) {
        return c(t).getMilliseconds()
      }

      function Ve(t, e) {
        return c(t, e?.in).getMinutes()
      }

      function tn(t, e) {
        return c(t, e?.in).getMonth()
      }

      function en(t, e) {
        const [n, r] = [+c(t.start), +c(t.end)].sort((t, e) => t - e), [a, i] = [+c(e.start), +c(e.end)].sort((t, e) => t - e);
        if (!(n < i && a < r)) return 0;
        const s = a < n ? n : a,
          u = s - v(s),
          d = i > r ? r : i,
          l = d - v(d);
        return Math.ceil((l - u) / o)
      }

      function nn(t) {
        return c(t).getSeconds()
      }

      function rn(t) {
        return +c(t)
      }

      function an(t) {
        return Math.trunc(+c(t) / 1e3)
      }

      function on(t, e) {
        const n = M(),
          r = e?.weekStartsOn ?? e?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0,
          a = Xe(c(t, e?.in));
        if (isNaN(a)) return NaN;
        let o = r - je(Nt(t, e));
        o <= 0 && (o += 7);
        const i = a - o;
        return Math.ceil(i / 7) + 1
      }

      function sn(t, e) {
        const n = c(t, e?.in),
          r = n.getMonth();
        return n.setFullYear(n.getFullYear(), r + 1, 0), n.setHours(0, 0, 0, 0), c(n, e?.in)
      }

      function un(t, e) {
        const n = c(t, e?.in);
        return nt(sn(n, e), Nt(n, e), e) + 1
      }

      function cn(t, e) {
        return c(t, e?.in).getFullYear()
      }

      function dn(t) {
        return Math.trunc(t * i)
      }

      function ln(t) {
        return Math.trunc(60 * t)
      }

      function fn(t) {
        return Math.trunc(3600 * t)
      }

      function hn(t, e, n) {
        const [r, a] = S(n?.in, t, e);
        if (isNaN(+r)) throw new TypeError("Start date is invalid");
        if (isNaN(+a)) throw new TypeError("End date is invalid");
        if (n?.assertPositive && +r > +a) throw new TypeError("End date must be after start date");
        return {
          start: r,
          end: a
        }
      }

      function mn(t, e) {
        const {
          start: n,
          end: r
        } = Mt(e?.in, t), a = {}, o = pt(r, n);
        o && (a.years = o);
        const i = f(n, {
            years: a.years
          }),
          s = gt(r, i);
        s && (a.months = s);
        const u = f(i, {
            months: a.months
          }),
          c = at(r, u);
        c && (a.days = c);
        const d = f(u, {
            days: a.days
          }),
          l = st(r, d);
        l && (a.hours = l);
        const h = f(d, {
            hours: a.hours
          }),
          m = lt(r, h);
        m && (a.minutes = m);
        const g = yt(r, f(h, {
          minutes: a.minutes
        }));
        return g && (a.seconds = g), a
      }

      function gn(t, e, n) {
        let r;
        var a;
        return void 0 === (a = e) || "locale" in a ? n = e : r = e, new Intl.DateTimeFormat(n?.locale, r).format(c(t))
      }

      function wn(t, e, n) {
        let r, a = 0;
        const [o, i] = S(n?.in, t, e);
        if (n?.unit) r = n?.unit, "second" === r ? a = yt(o, i) : "minute" === r ? a = lt(o, i) : "hour" === r ? a = st(o, i) : "day" === r ? a = O(o, i) : "week" === r ? a = nt(o, i) : "month" === r ? a = V(o, i) : "quarter" === r ? a = et(o, i) : "year" === r && (a = rt(o, i));
        else {
          const t = yt(o, i);
          Math.abs(t) < 60 ? (a = yt(o, i), r = "second") : Math.abs(t) < 3600 ? (a = lt(o, i), r = "minute") : Math.abs(t) < 86400 && Math.abs(O(o, i)) < 1 ? (a = st(o, i), r = "hour") : Math.abs(t) < 604800 && (a = O(o, i)) && Math.abs(a) < 7 ? r = "day" : Math.abs(t) < 2629746 ? (a = nt(o, i), r = "week") : Math.abs(t) < 7889238 ? (a = V(o, i), r = "month") : Math.abs(t) < 31556952 && et(o, i) < 4 ? (a = et(o, i), r = "quarter") : (a = rt(o, i), r = "year")
        }
        return new Intl.RelativeTimeFormat(n?.locale, {
          numeric: "auto",
          ...n
        }).format(a, r)
      }

      function yn(t, e) {
        return +c(t) > +c(e)
      }

      function bn(t, e) {
        return +c(t) < +c(e)
      }

      function pn(t, e) {
        return +c(t) === +c(e)
      }

      function Mn(t, e, n) {
        const r = new Date(t, e, n);
        return r.getFullYear() === t && r.getMonth() === e && r.getDate() === n
      }

      function Dn(t, e) {
        return 1 === c(t, e?.in).getDate()
      }

      function xn(t, e) {
        return 5 === c(t, e?.in).getDay()
      }

      function Tn(t) {
        return +c(t) > Date.now()
      }

      function kn(t, e) {
        const n = function(t) {
          return "function" == typeof t && t.prototype?.constructor === t
        }(e) ? new e(0) : u(e, 0);
        return n.setFullYear(t.getFullYear(), t.getMonth(), t.getDate()), n.setHours(t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()), n
      }
      class vn {
        subPriority = 0;
        validate(t, e) {
          return !0
        }
      }
      class Sn extends vn {
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
      class Yn extends vn {
        priority = 10;
        subPriority = -1;
        constructor(t, e) {
          super(), this.context = t || (t => u(e, t))
        }
        set(t, e) {
          return e.timestampIsSet ? t : u(t, kn(t, this.context))
        }
      }
      class On {
        run(t, e, n, r) {
          const a = this.parse(t, e, n, r);
          return a ? {
            setter: new Sn(a.value, this.validate, this.set, this.priority, this.subPriority),
            rest: a.rest
          } : null
        }
        validate(t, e, n) {
          return !0
        }
      }
      const Nn = /^(1[0-2]|0?\d)/,
        Hn = /^(3[0-1]|[0-2]?\d)/,
        Fn = /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
        Wn = /^(5[0-3]|[0-4]?\d)/,
        In = /^(2[0-3]|[0-1]?\d)/,
        Pn = /^(2[0-4]|[0-1]?\d)/,
        En = /^(1[0-1]|0?\d)/,
        Cn = /^(1[0-2]|0?\d)/,
        qn = /^[0-5]?\d/,
        $n = /^[0-5]?\d/,
        Qn = /^\d/,
        Ln = /^\d{1,2}/,
        Rn = /^\d{1,3}/,
        Xn = /^\d{1,4}/,
        jn = /^-?\d+/,
        Bn = /^-?\d/,
        zn = /^-?\d{1,2}/,
        An = /^-?\d{1,3}/,
        Gn = /^-?\d{1,4}/,
        Un = /^([+-])(\d{2})(\d{2})?|Z/,
        Zn = /^([+-])(\d{2})(\d{2})|Z/,
        _n = /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
        Jn = /^([+-])(\d{2}):(\d{2})|Z/,
        Kn = /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/;

      function Vn(t, e) {
        return t ? {
          value: e(t.value),
          rest: t.rest
        } : t
      }

      function tr(t, e) {
        const n = e.match(t);
        return n ? {
          value: parseInt(n[0], 10),
          rest: e.slice(n[0].length)
        } : null
      }

      function er(t, e) {
        const n = e.match(t);
        if (!n) return null;
        if ("Z" === n[0]) return {
          value: 0,
          rest: e.slice(1)
        };
        const r = "+" === n[1] ? 1 : -1,
          a = n[2] ? parseInt(n[2], 10) : 0,
          o = n[3] ? parseInt(n[3], 10) : 0,
          s = n[5] ? parseInt(n[5], 10) : 0;
        return {
          value: r * (a * i + 6e4 * o + 1e3 * s),
          rest: e.slice(n[0].length)
        }
      }

      function nr(t) {
        return tr(jn, t)
      }

      function rr(t, e) {
        switch (t) {
          case 1:
            return tr(Qn, e);
          case 2:
            return tr(Ln, e);
          case 3:
            return tr(Rn, e);
          case 4:
            return tr(Xn, e);
          default:
            return tr(new RegExp("^\\d{1," + t + "}"), e)
        }
      }

      function ar(t, e) {
        switch (t) {
          case 1:
            return tr(Bn, e);
          case 2:
            return tr(zn, e);
          case 3:
            return tr(An, e);
          case 4:
            return tr(Gn, e);
          default:
            return tr(new RegExp("^-?\\d{1," + t + "}"), e)
        }
      }

      function or(t) {
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

      function ir(t, e) {
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

      function sr(t) {
        return t % 400 == 0 || t % 4 == 0 && t % 100 != 0
      }

      function ur(t, e, n) {
        const r = c(t, n?.in),
          a = ae(r, n) - e;
        return r.setDate(r.getDate() - 7 * a), c(r, n?.in)
      }

      function cr(t, e, n) {
        const r = c(t, n?.in),
          a = ee(r, n) - e;
        return r.setDate(r.getDate() - 7 * a), r
      }
      const dr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        lr = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

      function fr(t, e, n) {
        const r = M(),
          a = n?.weekStartsOn ?? n?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0,
          o = c(t, n?.in),
          i = o.getDay(),
          s = 7 - a;
        return d(o, e < 0 || e > 6 ? e - (i + s) % 7 : ((e % 7 + 7) % 7 + s) % 7 - (i + s) % 7, n)
      }

      function hr(t, e, n) {
        const r = c(t, n?.in);
        return d(r, e - _e(r, n), n)
      }
      const mr = {
          G: new class extends On {
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
          y: new class extends On {
            priority = 130;
            incompatibleTokens = ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"];
            parse(t, e, n) {
              const r = t => ({
                year: t,
                isTwoDigitYear: "yy" === e
              });
              switch (e) {
                case "y":
                  return Vn(rr(4, t), r);
                case "yo":
                  return Vn(n.ordinalNumber(t, {
                    unit: "year"
                  }), r);
                default:
                  return Vn(rr(e.length, t), r)
              }
            }
            validate(t, e) {
              return e.isTwoDigitYear || e.year > 0
            }
            set(t, e, n) {
              const r = t.getFullYear();
              if (n.isTwoDigitYear) {
                const e = ir(n.year, r);
                return t.setFullYear(e, 0, 1), t.setHours(0, 0, 0, 0), t
              }
              const a = "era" in e && 1 !== e.era ? 1 - n.year : n.year;
              return t.setFullYear(a, 0, 1), t.setHours(0, 0, 0, 0), t
            }
          },
          Y: new class extends On {
            priority = 130;
            parse(t, e, n) {
              const r = t => ({
                year: t,
                isTwoDigitYear: "YY" === e
              });
              switch (e) {
                case "Y":
                  return Vn(rr(4, t), r);
                case "Yo":
                  return Vn(n.ordinalNumber(t, {
                    unit: "year"
                  }), r);
                default:
                  return Vn(rr(e.length, t), r)
              }
            }
            validate(t, e) {
              return e.isTwoDigitYear || e.year > 0
            }
            set(t, e, n, r) {
              const a = ne(t, r);
              if (n.isTwoDigitYear) {
                const e = ir(n.year, a);
                return t.setFullYear(e, 0, r.firstWeekContainsDate), t.setHours(0, 0, 0, 0), x(t, r)
              }
              const o = "era" in e && 1 !== e.era ? 1 - n.year : n.year;
              return t.setFullYear(o, 0, r.firstWeekContainsDate), t.setHours(0, 0, 0, 0), x(t, r)
            }
            incompatibleTokens = ["y", "R", "u", "Q", "q", "M", "L", "I", "d", "D", "i", "t", "T"]
          },
          R: new class extends On {
            priority = 130;
            parse(t, e) {
              return ar("R" === e ? 4 : e.length, t)
            }
            set(t, e, n) {
              const r = u(t, 0);
              return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), T(r)
            }
            incompatibleTokens = ["G", "y", "Y", "u", "Q", "q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]
          },
          u: new class extends On {
            priority = 130;
            parse(t, e) {
              return ar("u" === e ? 4 : e.length, t)
            }
            set(t, e, n) {
              return t.setFullYear(n, 0, 1), t.setHours(0, 0, 0, 0), t
            }
            incompatibleTokens = ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]
          },
          Q: new class extends On {
            priority = 120;
            parse(t, e, n) {
              switch (e) {
                case "Q":
                case "QQ":
                  return rr(e.length, t);
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
          q: new class extends On {
            priority = 120;
            parse(t, e, n) {
              switch (e) {
                case "q":
                case "qq":
                  return rr(e.length, t);
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
          M: new class extends On {
            incompatibleTokens = ["Y", "R", "q", "Q", "L", "w", "I", "D", "i", "e", "c", "t", "T"];
            priority = 110;
            parse(t, e, n) {
              const r = t => t - 1;
              switch (e) {
                case "M":
                  return Vn(tr(Nn, t), r);
                case "MM":
                  return Vn(rr(2, t), r);
                case "Mo":
                  return Vn(n.ordinalNumber(t, {
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
          L: new class extends On {
            priority = 110;
            parse(t, e, n) {
              const r = t => t - 1;
              switch (e) {
                case "L":
                  return Vn(tr(Nn, t), r);
                case "LL":
                  return Vn(rr(2, t), r);
                case "Lo":
                  return Vn(n.ordinalNumber(t, {
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
          w: new class extends On {
            priority = 100;
            parse(t, e, n) {
              switch (e) {
                case "w":
                  return tr(Wn, t);
                case "wo":
                  return n.ordinalNumber(t, {
                    unit: "week"
                  });
                default:
                  return rr(e.length, t)
              }
            }
            validate(t, e) {
              return e >= 1 && e <= 53
            }
            set(t, e, n, r) {
              return x(ur(t, n, r), r)
            }
            incompatibleTokens = ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "i", "t", "T"]
          },
          I: new class extends On {
            priority = 100;
            parse(t, e, n) {
              switch (e) {
                case "I":
                  return tr(Wn, t);
                case "Io":
                  return n.ordinalNumber(t, {
                    unit: "week"
                  });
                default:
                  return rr(e.length, t)
              }
            }
            validate(t, e) {
              return e >= 1 && e <= 53
            }
            set(t, e, n) {
              return T(cr(t, n))
            }
            incompatibleTokens = ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]
          },
          d: new class extends On {
            priority = 90;
            subPriority = 1;
            parse(t, e, n) {
              switch (e) {
                case "d":
                  return tr(Hn, t);
                case "do":
                  return n.ordinalNumber(t, {
                    unit: "date"
                  });
                default:
                  return rr(e.length, t)
              }
            }
            validate(t, e) {
              const n = sr(t.getFullYear()),
                r = t.getMonth();
              return n ? e >= 1 && e <= lr[r] : e >= 1 && e <= dr[r]
            }
            set(t, e, n) {
              return t.setDate(n), t.setHours(0, 0, 0, 0), t
            }
            incompatibleTokens = ["Y", "R", "q", "Q", "w", "I", "D", "i", "e", "c", "t", "T"]
          },
          D: new class extends On {
            priority = 90;
            subpriority = 1;
            parse(t, e, n) {
              switch (e) {
                case "D":
                case "DD":
                  return tr(Fn, t);
                case "Do":
                  return n.ordinalNumber(t, {
                    unit: "date"
                  });
                default:
                  return rr(e.length, t)
              }
            }
            validate(t, e) {
              return sr(t.getFullYear()) ? e >= 1 && e <= 366 : e >= 1 && e <= 365
            }
            set(t, e, n) {
              return t.setMonth(0, n), t.setHours(0, 0, 0, 0), t
            }
            incompatibleTokens = ["Y", "R", "q", "Q", "M", "L", "w", "I", "d", "E", "i", "e", "c", "t", "T"]
          },
          E: new class extends On {
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
              return (t = fr(t, n, r)).setHours(0, 0, 0, 0), t
            }
            incompatibleTokens = ["D", "i", "e", "c", "t", "T"]
          },
          e: new class extends On {
            priority = 90;
            parse(t, e, n, r) {
              const a = t => {
                const e = 7 * Math.floor((t - 1) / 7);
                return (t + r.weekStartsOn + 6) % 7 + e
              };
              switch (e) {
                case "e":
                case "ee":
                  return Vn(rr(e.length, t), a);
                case "eo":
                  return Vn(n.ordinalNumber(t, {
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
              return (t = fr(t, n, r)).setHours(0, 0, 0, 0), t
            }
            incompatibleTokens = ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "c", "t", "T"]
          },
          c: new class extends On {
            priority = 90;
            parse(t, e, n, r) {
              const a = t => {
                const e = 7 * Math.floor((t - 1) / 7);
                return (t + r.weekStartsOn + 6) % 7 + e
              };
              switch (e) {
                case "c":
                case "cc":
                  return Vn(rr(e.length, t), a);
                case "co":
                  return Vn(n.ordinalNumber(t, {
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
              return (t = fr(t, n, r)).setHours(0, 0, 0, 0), t
            }
            incompatibleTokens = ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "e", "t", "T"]
          },
          i: new class extends On {
            priority = 90;
            parse(t, e, n) {
              const r = t => 0 === t ? 7 : t;
              switch (e) {
                case "i":
                case "ii":
                  return rr(e.length, t);
                case "io":
                  return n.ordinalNumber(t, {
                    unit: "day"
                  });
                case "iii":
                  return Vn(n.day(t, {
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
                  return Vn(n.day(t, {
                    width: "narrow",
                    context: "formatting"
                  }), r);
                case "iiiiii":
                  return Vn(n.day(t, {
                    width: "short",
                    context: "formatting"
                  }) || n.day(t, {
                    width: "narrow",
                    context: "formatting"
                  }), r);
                default:
                  return Vn(n.day(t, {
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
              return (t = hr(t, n)).setHours(0, 0, 0, 0), t
            }
            incompatibleTokens = ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "E", "e", "c", "t", "T"]
          },
          a: new class extends On {
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
              return t.setHours(or(n), 0, 0, 0), t
            }
            incompatibleTokens = ["b", "B", "H", "k", "t", "T"]
          },
          b: new class extends On {
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
              return t.setHours(or(n), 0, 0, 0), t
            }
            incompatibleTokens = ["a", "B", "H", "k", "t", "T"]
          },
          B: new class extends On {
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
              return t.setHours(or(n), 0, 0, 0), t
            }
            incompatibleTokens = ["a", "b", "t", "T"]
          },
          h: new class extends On {
            priority = 70;
            parse(t, e, n) {
              switch (e) {
                case "h":
                  return tr(Cn, t);
                case "ho":
                  return n.ordinalNumber(t, {
                    unit: "hour"
                  });
                default:
                  return rr(e.length, t)
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
          H: new class extends On {
            priority = 70;
            parse(t, e, n) {
              switch (e) {
                case "H":
                  return tr(In, t);
                case "Ho":
                  return n.ordinalNumber(t, {
                    unit: "hour"
                  });
                default:
                  return rr(e.length, t)
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
          K: new class extends On {
            priority = 70;
            parse(t, e, n) {
              switch (e) {
                case "K":
                  return tr(En, t);
                case "Ko":
                  return n.ordinalNumber(t, {
                    unit: "hour"
                  });
                default:
                  return rr(e.length, t)
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
          k: new class extends On {
            priority = 70;
            parse(t, e, n) {
              switch (e) {
                case "k":
                  return tr(Pn, t);
                case "ko":
                  return n.ordinalNumber(t, {
                    unit: "hour"
                  });
                default:
                  return rr(e.length, t)
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
          m: new class extends On {
            priority = 60;
            parse(t, e, n) {
              switch (e) {
                case "m":
                  return tr(qn, t);
                case "mo":
                  return n.ordinalNumber(t, {
                    unit: "minute"
                  });
                default:
                  return rr(e.length, t)
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
          s: new class extends On {
            priority = 50;
            parse(t, e, n) {
              switch (e) {
                case "s":
                  return tr($n, t);
                case "so":
                  return n.ordinalNumber(t, {
                    unit: "second"
                  });
                default:
                  return rr(e.length, t)
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
          S: new class extends On {
            priority = 30;
            parse(t, e) {
              return Vn(rr(e.length, t), t => Math.trunc(t * Math.pow(10, 3 - e.length)))
            }
            set(t, e, n) {
              return t.setMilliseconds(n), t
            }
            incompatibleTokens = ["t", "T"]
          },
          X: new class extends On {
            priority = 10;
            parse(t, e) {
              switch (e) {
                case "X":
                  return er(Un, t);
                case "XX":
                  return er(Zn, t);
                case "XXXX":
                  return er(_n, t);
                case "XXXXX":
                  return er(Kn, t);
                default:
                  return er(Jn, t)
              }
            }
            set(t, e, n) {
              return e.timestampIsSet ? t : u(t, t.getTime() - v(t) - n)
            }
            incompatibleTokens = ["t", "T", "x"]
          },
          x: new class extends On {
            priority = 10;
            parse(t, e) {
              switch (e) {
                case "x":
                  return er(Un, t);
                case "xx":
                  return er(Zn, t);
                case "xxxx":
                  return er(_n, t);
                case "xxxxx":
                  return er(Kn, t);
                default:
                  return er(Jn, t)
              }
            }
            set(t, e, n) {
              return e.timestampIsSet ? t : u(t, t.getTime() - v(t) - n)
            }
            incompatibleTokens = ["t", "T", "X"]
          },
          t: new class extends On {
            priority = 40;
            parse(t) {
              return nr(t)
            }
            set(t, e, n) {
              return [u(t, 1e3 * n), {
                timestampIsSet: !0
              }]
            }
            incompatibleTokens = "*"
          },
          T: new class extends On {
            priority = 20;
            parse(t) {
              return nr(t)
            }
            set(t, e, n) {
              return [u(t, n), {
                timestampIsSet: !0
              }]
            }
            incompatibleTokens = "*"
          }
        },
        gr = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
        wr = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
        yr = /^'([^]*?)'?$/,
        br = /''/g,
        pr = /\S/,
        Mr = /[a-zA-Z]/;

      function Dr(t, e, n, r) {
        const a = () => u(r?.in || n, NaN),
          o = Ue(),
          i = r?.locale ?? o.locale ?? Vt,
          s = r?.firstWeekContainsDate ?? r?.locale?.options?.firstWeekContainsDate ?? o.firstWeekContainsDate ?? o.locale?.options?.firstWeekContainsDate ?? 1,
          d = r?.weekStartsOn ?? r?.locale?.options?.weekStartsOn ?? o.weekStartsOn ?? o.locale?.options?.weekStartsOn ?? 0;
        if (!e) return t ? a() : c(n, r?.in);
        const l = {
            firstWeekContainsDate: s,
            weekStartsOn: d,
            locale: i
          },
          f = [new Yn(r?.in, n)],
          h = e.match(wr).map(t => {
            const e = t[0];
            return e in he ? (0, he[e])(t, i.formatLong) : t
          }).join("").match(gr),
          m = [];
        for (let n of h) {
          !r?.useAdditionalWeekYearTokens && be(n) && pe(n, e, t), !r?.useAdditionalDayOfYearTokens && ye(n) && pe(n, e, t);
          const o = n[0],
            s = mr[o];
          if (s) {
            const {
              incompatibleTokens: e
            } = s;
            if (Array.isArray(e)) {
              const t = m.find(t => e.includes(t.token) || t.token === o);
              if (t) throw new RangeError(`The format string mustn't contain \`${t.fullToken}\` and \`${n}\` at the same time`)
            } else if ("*" === s.incompatibleTokens && m.length > 0) throw new RangeError(`The format string mustn't contain \`${n}\` and any other token at the same time`);
            m.push({
              token: o,
              fullToken: n
            });
            const r = s.run(t, n, i.match, l);
            if (!r) return a();
            f.push(r.setter), t = r.rest
          } else {
            if (o.match(Mr)) throw new RangeError("Format string contains an unescaped latin alphabet character `" + o + "`");
            if ("''" === n ? n = "'" : "'" === o && (n = xr(n)), 0 !== t.indexOf(n)) return a();
            t = t.slice(n.length)
          }
        }
        if (t.length > 0 && pr.test(t)) return a();
        const g = f.map(t => t.priority).sort((t, e) => e - t).filter((t, e, n) => n.indexOf(t) === e).map(t => f.filter(e => e.priority === t).sort((t, e) => e.subPriority - t.subPriority)).map(t => t[0]);
        let w = c(n, r?.in);
        if (isNaN(+w)) return a();
        const y = {};
        for (const t of g) {
          if (!t.validate(w, l)) return a();
          const e = t.set(w, y, l);
          Array.isArray(e) ? (w = e[0], Object.assign(y, e[1])) : w = e
        }
        return w
      }

      function xr(t) {
        return t.match(yr)[1].replace(br, "'")
      }

      function Tr(t, e, n) {
        return Z(Dr(t, e, new Date, n))
      }

      function kr(t, e) {
        return 1 === c(t, e?.in).getDay()
      }

      function vr(t) {
        return +c(t) < Date.now()
      }

      function Sr(t, e) {
        const n = c(t, e?.in);
        return n.setMinutes(0, 0, 0), n
      }

      function Yr(t, e, n) {
        const [r, a] = S(n?.in, t, e);
        return +Sr(r) === +Sr(a)
      }

      function Or(t, e, n) {
        const [r, a] = S(n?.in, t, e);
        return +x(r, n) === +x(a, n)
      }

      function Nr(t, e, n) {
        return Or(t, e, {
          ...n,
          weekStartsOn: 1
        })
      }

      function Hr(t, e, n) {
        const [r, a] = S(n?.in, t, e);
        return +N(r) === +N(a)
      }

      function Fr(t, e) {
        const n = c(t, e?.in);
        return n.setSeconds(0, 0), n
      }

      function Wr(t, e) {
        return +Fr(t) === +Fr(e)
      }

      function Ir(t, e, n) {
        const [r, a] = S(n?.in, t, e);
        return r.getFullYear() === a.getFullYear() && r.getMonth() === a.getMonth()
      }

      function Pr(t, e, n) {
        const [r, a] = S(n?.in, t, e);
        return +vt(r) === +vt(a)
      }

      function Er(t, e) {
        const n = c(t, e?.in);
        return n.setMilliseconds(0), n
      }

      function Cr(t, e) {
        return +Er(t) === +Er(e)
      }

      function qr(t, e, n) {
        const [r, a] = S(n?.in, t, e);
        return r.getFullYear() === a.getFullYear()
      }

      function $r(t, e) {
        return Yr(c(t, e?.in), z(e?.in || t))
      }

      function Qr(t, e) {
        return Nr(u(e?.in || t, t), z(e?.in || t))
      }

      function Lr(t) {
        return Wr(t, z(t))
      }

      function Rr(t, e) {
        return Ir(u(e?.in || t, t), z(e?.in || t))
      }

      function Xr(t, e) {
        return Pr(u(e?.in || t, t), z(e?.in || t))
      }

      function jr(t) {
        return Cr(t, z(t))
      }

      function Br(t, e) {
        return Or(u(e?.in || t, t), z(e?.in || t), e)
      }

      function zr(t, e) {
        return qr(u(e?.in || t, t), z(e?.in || t))
      }

      function Ar(t, e) {
        return 4 === c(t, e?.in).getDay()
      }

      function Gr(t, e) {
        return G(u(e?.in || t, t), z(e?.in || t))
      }

      function Ur(t, e) {
        return G(t, d(z(e?.in || t), 1), e)
      }

      function Zr(t, e) {
        return 2 === c(t, e?.in).getDay()
      }

      function _r(t, e) {
        return 3 === c(t, e?.in).getDay()
      }

      function Jr(t, e, n) {
        const r = +c(t, n?.in),
          [a, o] = [+c(e.start, n?.in), +c(e.end, n?.in)].sort((t, e) => t - e);
        return r >= a && r <= o
      }

      function Kr(t, e, n) {
        return d(t, -e, n)
      }

      function Vr(t, e) {
        return G(u(e?.in || t, t), Kr(z(e?.in || t), 1))
      }

      function ta(t, e) {
        const n = c(t, e?.in),
          r = n.getFullYear(),
          a = 9 + 10 * Math.floor(r / 10);
        return n.setFullYear(a + 1, 0, 0), n.setHours(0, 0, 0, 0), c(n, e?.in)
      }

      function ea(t, e) {
        const n = M(),
          r = e?.weekStartsOn ?? e?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0,
          a = c(t, e?.in),
          o = a.getDay(),
          i = 6 + (o < r ? -7 : 0) - (o - r);
        return a.setHours(0, 0, 0, 0), a.setDate(a.getDate() + i), a
      }

      function na(t, e) {
        return ea(t, {
          ...e,
          weekStartsOn: 1
        })
      }

      function ra(t, e) {
        const n = k(t, e),
          r = u(e?.in || t, 0);
        r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
        const a = T(r, e);
        return a.setDate(a.getDate() - 1), a
      }

      function aa(t, e) {
        const n = c(t, e?.in),
          r = n.getMonth(),
          a = r - r % 3 + 3;
        return n.setMonth(a, 0), n.setHours(0, 0, 0, 0), n
      }

      function oa(t, e) {
        const n = c(t, e?.in),
          r = n.getFullYear();
        return n.setFullYear(r + 1, 0, 0), n.setHours(0, 0, 0, 0), n
      }
      const ia = /(\w)\1*|''|'(''|[^'])+('|$)|./g,
        sa = /^'([^]*?)'?$/,
        ua = /''/g,
        ca = /[a-zA-Z]/;

      function da(t, e) {
        const n = c(t);
        if (!Z(n)) throw new RangeError("Invalid time value");
        const r = e.match(ia);
        return r ? r.map(t => {
          if ("''" === t) return "'";
          const e = t[0];
          if ("'" === e) return function(t) {
            const e = t.match(sa);
            return e ? e[1].replace(ua, "'") : t
          }(t);
          const r = ie[e];
          if (r) return r(n, t);
          if (e.match(ca)) throw new RangeError("Format string contains an unescaped latin alphabet character `" + e + "`");
          return t
        }).join("") : ""
      }

      function la({
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

      function fa(t) {
        const e = t / i;
        return Math.trunc(e)
      }

      function ha(t) {
        const e = t / 6e4;
        return Math.trunc(e)
      }

      function ma(t) {
        const e = t / 1e3;
        return Math.trunc(e)
      }

      function ga(t) {
        const e = t / 60;
        return Math.trunc(e)
      }

      function wa(t) {
        return Math.trunc(6e4 * t)
      }

      function ya(t) {
        return Math.trunc(60 * t)
      }

      function ba(t) {
        const e = t / 3;
        return Math.trunc(e)
      }

      function pa(t) {
        const e = t / 12;
        return Math.trunc(e)
      }

      function Ma(t, e, n) {
        let r = e - je(t, n);
        return r <= 0 && (r += 7), d(t, r, n)
      }

      function Da(t, e) {
        return Ma(t, 5, e)
      }

      function xa(t, e) {
        return Ma(t, 1, e)
      }

      function Ta(t, e) {
        return Ma(t, 6, e)
      }

      function ka(t, e) {
        return Ma(t, 0, e)
      }

      function va(t, e) {
        return Ma(t, 4, e)
      }

      function Sa(t, e) {
        return Ma(t, 2, e)
      }

      function Ya(t, e) {
        return Ma(t, 3, e)
      }

      function Oa(t, e) {
        const n = () => u(e?.in, NaN),
          r = e?.additionalDigits ?? 2,
          a = function(t) {
            const e = {},
              n = t.split(Na.dateTimeDelimiter);
            let r;
            if (n.length > 2) return e;
            if (/:/.test(n[0]) ? r = n[0] : (e.date = n[0], r = n[1], Na.timeZoneDelimiter.test(e.date) && (e.date = t.split(Na.timeZoneDelimiter)[0], r = t.substr(e.date.length, t.length))), r) {
              const t = Na.timezone.exec(r);
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
            const n = t.match(Ha);
            if (!n) return new Date(NaN);
            const r = !!n[4],
              a = Ia(n[1]),
              o = Ia(n[2]) - 1,
              i = Ia(n[3]),
              s = Ia(n[4]),
              u = Ia(n[5]) - 1;
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
                return e >= 0 && e <= 11 && n >= 1 && n <= (Ea[e] || (Ca(t) ? 29 : 28))
              }(e, o, i) && function(t, e) {
                return e >= 1 && e <= (Ca(t) ? 366 : 365)
              }(e, a) ? (t.setUTCFullYear(e, o, Math.max(a, i)), t) : new Date(NaN)
            }
          }(t.restDateString, t.year)
        }
        if (!o || isNaN(+o)) return n();
        const s = +o;
        let d, l = 0;
        if (a.time && (l = function(t) {
            const e = t.match(Fa);
            if (!e) return NaN;
            const n = Pa(e[1]),
              r = Pa(e[2]),
              a = Pa(e[3]);
            return function(t, e, n) {
              return 24 === t ? 0 === e && 0 === n : n >= 0 && n < 60 && e >= 0 && e < 60 && t >= 0 && t < 25
            }(n, r, a) ? n * i + 6e4 * r + 1e3 * a : NaN
          }(a.time), isNaN(l))) return n();
        if (!a.timezone) {
          const t = new Date(s + l),
            n = c(0, e?.in);
          return n.setFullYear(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()), n.setHours(t.getUTCHours(), t.getUTCMinutes(), t.getUTCSeconds(), t.getUTCMilliseconds()), n
        }
        return d = function(t) {
          if ("Z" === t) return 0;
          const e = t.match(Wa);
          if (!e) return 0;
          const n = "+" === e[1] ? -1 : 1,
            r = parseInt(e[2]),
            a = e[3] && parseInt(e[3]) || 0;
          return function(t, e) {
            return e >= 0 && e <= 59
          }(0, a) ? n * (r * i + 6e4 * a) : NaN
        }(a.timezone), isNaN(d) ? n() : c(s + l + d, e?.in)
      }
      const Na = {
          dateTimeDelimiter: /[T ]/,
          timeZoneDelimiter: /[Z ]/i,
          timezone: /([Z+-].*)$/
        },
        Ha = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,
        Fa = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,
        Wa = /^([+-])(\d{2})(?::?(\d{2}))?$/;

      function Ia(t) {
        return t ? parseInt(t) : 1
      }

      function Pa(t) {
        return t && parseFloat(t.replace(",", ".")) || 0
      }
      const Ea = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

      function Ca(t) {
        return t % 400 == 0 || t % 4 == 0 && t % 100 != 0
      }

      function qa(t, e) {
        const n = t.match(/(\d{4})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2}):(\d{2})(?:\.(\d{0,7}))?(?:Z|(.)(\d{2}):?(\d{2})?)?/);
        return c(n ? Date.UTC(+n[1], +n[2] - 1, +n[3], +n[4] - (+n[9] || 0) * ("-" == n[8] ? -1 : 1), +n[5] - (+n[10] || 0) * ("-" == n[8] ? -1 : 1), +n[6], +((n[7] || "0") + "00").substring(0, 3)) : NaN, e?.in)
      }

      function $a(t, e, n) {
        let r = je(t, n) - e;
        return r <= 0 && (r += 7), Kr(t, r, n)
      }

      function Qa(t, e) {
        return $a(t, 5, e)
      }

      function La(t, e) {
        return $a(t, 1, e)
      }

      function Ra(t, e) {
        return $a(t, 6, e)
      }

      function Xa(t, e) {
        return $a(t, 0, e)
      }

      function ja(t, e) {
        return $a(t, 4, e)
      }

      function Ba(t, e) {
        return $a(t, 2, e)
      }

      function za(t, e) {
        return $a(t, 3, e)
      }

      function Aa(t) {
        return Math.trunc(3 * t)
      }

      function Ga(t) {
        const e = t / 4;
        return Math.trunc(e)
      }

      function Ua(t, e) {
        const n = e?.nearestTo ?? 1;
        if (n < 1 || n > 12) return u(e?.in || t, NaN);
        const r = c(t, e?.in),
          a = r.getMinutes() / 60,
          o = r.getSeconds() / 60 / 60,
          i = r.getMilliseconds() / 1e3 / 60 / 60,
          s = r.getHours() + a + o + i,
          d = it(e?.roundingMethod ?? "round")(s / n) * n;
        return r.setHours(d, 0, 0, 0), r
      }

      function Za(t, e) {
        const n = e?.nearestTo ?? 1;
        if (n < 1 || n > 30) return u(t, NaN);
        const r = c(t, e?.in),
          a = r.getSeconds() / 60,
          o = r.getMilliseconds() / 1e3 / 60,
          i = r.getMinutes() + a + o,
          s = it(e?.roundingMethod ?? "round")(i / n) * n;
        return r.setMinutes(s, 0, 0), r
      }

      function _a(t) {
        const e = t / 3600;
        return Math.trunc(e)
      }

      function Ja(t) {
        return 1e3 * t
      }

      function Ka(t) {
        const e = t / 60;
        return Math.trunc(e)
      }

      function Va(t, e, n) {
        const r = c(t, n?.in),
          a = r.getFullYear(),
          o = r.getDate(),
          i = u(n?.in || t, 0);
        i.setFullYear(a, e, 15), i.setHours(0, 0, 0, 0);
        const s = Be(i);
        return r.setMonth(e, Math.min(o, s)), r
      }

      function to(t, e, n) {
        let r = c(t, n?.in);
        return isNaN(+r) ? u(n?.in || t, NaN) : (null != e.year && r.setFullYear(e.year), null != e.month && (r = Va(r, e.month)), null != e.date && r.setDate(e.date), null != e.hours && r.setHours(e.hours), null != e.minutes && r.setMinutes(e.minutes), null != e.seconds && r.setSeconds(e.seconds), null != e.milliseconds && r.setMilliseconds(e.milliseconds), r)
      }

      function eo(t, e, n) {
        const r = c(t, n?.in);
        return r.setDate(e), r
      }

      function no(t, e, n) {
        const r = c(t, n?.in);
        return r.setMonth(0), r.setDate(e), r
      }

      function ro(t) {
        const e = {},
          n = M();
        for (const t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
        for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && (void 0 === t[n] ? delete e[n] : e[n] = t[n]);
        D(e)
      }

      function ao(t, e, n) {
        const r = c(t, n?.in);
        return r.setHours(e), r
      }

      function oo(t, e, n) {
        const r = c(t, n?.in);
        return r.setMilliseconds(e), r
      }

      function io(t, e, n) {
        const r = c(t, n?.in);
        return r.setMinutes(e), r
      }

      function so(t, e, n) {
        const r = c(t, n?.in),
          a = e - (Math.trunc(r.getMonth() / 3) + 1);
        return Va(r, r.getMonth() + 3 * a)
      }

      function uo(t, e, n) {
        const r = c(t, n?.in);
        return r.setSeconds(e), r
      }

      function co(t, e, n) {
        const r = M(),
          a = n?.firstWeekContainsDate ?? n?.locale?.options?.firstWeekContainsDate ?? r.firstWeekContainsDate ?? r.locale?.options?.firstWeekContainsDate ?? 1,
          o = O(c(t, n?.in), re(t, n), n),
          i = u(n?.in || t, 0);
        i.setFullYear(e, 0, a), i.setHours(0, 0, 0, 0);
        const s = re(i, n);
        return s.setDate(s.getDate() + o), s
      }

      function lo(t, e, n) {
        const r = c(t, n?.in);
        return isNaN(+r) ? u(n?.in || t, NaN) : (r.setFullYear(e), r)
      }

      function fo(t, e) {
        const n = c(t, e?.in),
          r = n.getFullYear(),
          a = 10 * Math.floor(r / 10);
        return n.setFullYear(a, 0, 1), n.setHours(0, 0, 0, 0), n
      }

      function ho(t) {
        return Y(Date.now(), t)
      }

      function mo(t) {
        const e = z(t?.in),
          n = e.getFullYear(),
          r = e.getMonth(),
          a = e.getDate(),
          o = u(t?.in, 0);
        return o.setFullYear(n, r, a + 1), o.setHours(0, 0, 0, 0), o
      }

      function go(t) {
        const e = z(t?.in),
          n = e.getFullYear(),
          r = e.getMonth(),
          a = e.getDate(),
          o = z(t?.in);
        return o.setFullYear(n, r, a - 1), o.setHours(0, 0, 0, 0), o
      }

      function wo(t, e, n) {
        return l(t, -e, n)
      }

      function yo(t, e, n) {
        const {
          years: r = 0,
          months: a = 0,
          weeks: o = 0,
          days: i = 0,
          hours: s = 0,
          minutes: c = 0,
          seconds: d = 0
        } = e, l = Kr(wo(t, a + 12 * r, n), i + 7 * o, n), f = 1e3 * (d + 60 * (c + 60 * s));
        return u(n?.in || t, +l - f)
      }

      function bo(t, e, n) {
        return w(t, -e, n)
      }

      function po(t, e, n) {
        return b(t, -e, n)
      }

      function Mo(t, e, n) {
        return y(t, -e, n)
      }

      function Do(t, e, n) {
        return W(t, -e, n)
      }

      function xo(t, e, n) {
        return I(t, -e, n)
      }

      function To(t, e, n) {
        return P(t, -e, n)
      }

      function ko(t, e, n) {
        return E(t, -e, n)
      }

      function vo(t, e, n) {
        return C(t, -e, n)
      }

      function So(t) {
        return Math.trunc(7 * t)
      }

      function Yo(t) {
        return Math.trunc(t * r)
      }

      function Oo(t) {
        return Math.trunc(12 * t)
      }

      function No(t) {
        return Math.trunc(4 * t)
      }
    }
  }
]);