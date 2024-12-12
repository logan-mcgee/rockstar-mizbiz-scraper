! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "7334c5a1-526a-44b1-a748-d9873018016f", e._sentryDebugIdIdentifier = "sentry-dbid-7334c5a1-526a-44b1-a748-d9873018016f")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-newswire-article",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [2553], {
    61651: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => n
      });
      var s = a(71403),
        r = a(40207);
      const i = (0, s.forwardRef)(((e, t) => {
        const {
          threshold: a,
          callback: i,
          children: n,
          requireUser: o
        } = e, {
          track: c
        } = (0, r.useGtmTrack)(o), [l, d] = (0, s.useState)(t?.current);
        return (0, s.useEffect)((() => {
          t?.current && d(t.current)
        }), [t]), ((e, t, a) => {
          const [r, i] = (0, s.useState)({
            scrollDepths: e,
            scrollY: 0
          }), {
            scrollDepths: n,
            scrollY: o
          } = r;
          (0, s.useEffect)((() => {
            "undefined" != typeof window && 0 !== window.pageYOffset && i((e => ({
              ...e,
              scrollY: window.pageYOffset
            })))
          }), []), (0, s.useEffect)((() => {
            i({
              scrollDepths: e,
              scrollY: 0
            })
          }), [window.location.pathname]);
          const c = (0, s.useCallback)((() => {
            const e = document.documentElement,
              s = document.body,
              o = a?.scrollTop || e.scrollTop || s.scrollTop,
              l = a?.scrollHeight || e.scrollHeight || s.scrollHeight,
              {
                clientHeight: d
              } = e,
              m = o / (l - d) * 100;
            if (n) {
              const e = Math.min(...n, l);
              if (m >= e) {
                const s = n.filter((t => t !== e));
                0 === s.length && (a ?? window).removeEventListener("scroll", c), t && t({
                  scrollY: e,
                  scrollPercent: m,
                  remainingDepths: s
                }), i({
                  scrollY: e,
                  scrollDepths: s
                })
              }
            } else i({
              ...r,
              scrollY: m
            })
          }), [n, a, t]);
          (0, s.useEffect)((() => {
            if ("undefined" == typeof window) return;
            const e = a ?? window;
            return e.addEventListener("scroll", c), () => e.removeEventListener("scroll", c)
          }), [c])
        })(a, (e => {
          let {
            scrollY: t
          } = e;
          c({
            event: "page_scroll",
            scroll_depth: t
          }), "function" == typeof i && i(t)
        }), l), n
      }));
      i.displayName = "ScrollTracker";
      const n = i
    },
    7607: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => l
      });
      var s = a(96717),
        r = a(20066);
      const i = (0, s.defineMessages)({
          components_track_list_title: {
            id: "components_track_list_title",
            defaultMessage: "Tracklist"
          }
        }),
        n = {
          bodySmall: "rockstargames-modules-core-newswire-articlec048aacaedc7fb642f38c7f163c193e3"
        };
      var o = a(46632);
      const c = e => {
          let {
            track: t,
            artist: a
          } = e;
          return (0, o.jsxs)("div", {
            className: n.track,
            children: [(0, o.jsx)("p", {
              children: t
            }), (0, o.jsx)("p", {
              className: n.bodySmall,
              children: a
            })]
          })
        },
        l = (0, s.withIntl)((e => {
          let {
            content: t = []
          } = e;
          return (0, o.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articlee6c19f2cdd68a4352e248a8324383aa2",
            children: [(0, o.jsx)("h4", {
              className: "rockstargames-modules-core-newswire-articlecd3895fbae93ba04f1401487f6e6eddf",
              children: (0, o.jsx)(s.FormattedMessage, {
                ...i.components_track_list_title
              })
            }), (0, o.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articleef0cde8b15ded961605237d0e8328a9b",
              children: (0, o.jsx)("div", {
                className: "rockstargames-modules-core-newswire-articlebdd54186db17d27b3daebc4b9d58e09a",
                children: t?.map((e => (0, o.jsx)(c, {
                  track: e.track,
                  artist: e.artist
                }, e.key)))
              })
            })]
          })
        }), r)
    },
    53149: (e, t, a) => {
      "use strict";
      a.d(t, {
        ys: () => ja,
        Ay: () => nr,
        os: () => nr
      });
      let s, r, i, n, o, c, l, d, m, u, g, f = {
          autoSleep: 120,
          force3D: "auto",
          nullTargetWarn: 1,
          units: {
            lineHeight: ""
          }
        },
        p = {
          duration: .5,
          overwrite: !1,
          delay: 0
        },
        h = 1e8,
        b = 1e-8,
        k = 2 * Math.PI,
        v = k / 4,
        w = 0,
        _ = Math.sqrt,
        x = Math.cos,
        y = Math.sin,
        j = e => "string" == typeof e,
        N = e => "function" == typeof e,
        S = e => "number" == typeof e,
        T = e => void 0 === e,
        C = e => "object" == typeof e,
        A = e => !1 !== e,
        I = () => "undefined" != typeof window,
        M = e => N(e) || j(e),
        L = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {},
        E = Array.isArray,
        P = /(?:-?\.?\d|\.)+/gi,
        O = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        z = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        D = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        B = /[+-]=-?[.\d]+/,
        V = /[^,'"\[\]\s]+/gi,
        $ = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
        F = {},
        R = {},
        G = e => (R = ke(e, F)) && _a,
        H = (e, t) => console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()"),
        U = (e, t) => !t && console.warn(e),
        W = (e, t) => e && (F[e] = t) && R && (R[e] = t) || F,
        q = () => 0,
        X = {
          suppressEvents: !0,
          isStart: !0,
          kill: !1
        },
        Y = {
          suppressEvents: !0,
          kill: !1
        },
        Q = {
          suppressEvents: !0
        },
        K = {},
        Z = [],
        J = {},
        ee = {},
        te = {},
        ae = 30,
        se = [],
        re = "",
        ie = e => {
          let t, a, s = e[0];
          if (C(s) || N(s) || (e = [e]), !(t = (s._gsap || {}).harness)) {
            for (a = se.length; a-- && !se[a].targetTest(s););
            t = se[a]
          }
          for (a = e.length; a--;) e[a] && (e[a]._gsap || (e[a]._gsap = new Ot(e[a], t))) || e.splice(a, 1);
          return e
        },
        ne = e => e._gsap || ie(Ye(e))[0]._gsap,
        oe = (e, t, a) => (a = e[t]) && N(a) ? e[t]() : T(a) && e.getAttribute && e.getAttribute(t) || a,
        ce = (e, t) => (e = e.split(",")).forEach(t) || e,
        le = e => Math.round(1e5 * e) / 1e5 || 0,
        de = e => Math.round(1e7 * e) / 1e7 || 0,
        me = (e, t) => {
          let a = t.charAt(0),
            s = parseFloat(t.substr(2));
          return e = parseFloat(e), "+" === a ? e + s : "-" === a ? e - s : "*" === a ? e * s : e / s
        },
        ue = (e, t) => {
          let a = t.length,
            s = 0;
          for (; e.indexOf(t[s]) < 0 && ++s < a;);
          return s < a
        },
        ge = () => {
          let e, t, a = Z.length,
            s = Z.slice(0);
          for (J = {}, Z.length = 0, e = 0; e < a; e++) t = s[e], t && t._lazy && (t.render(t._lazy[0], t._lazy[1], !0)._lazy = 0)
        },
        fe = (e, t, a, s) => {
          Z.length && !r && ge(), e.render(t, a, s || r && t < 0 && (e._initted || e._startAt)), Z.length && !r && ge()
        },
        pe = e => {
          let t = parseFloat(e);
          return (t || 0 === t) && (e + "").match(V).length < 2 ? t : j(e) ? e.trim() : e
        },
        he = e => e,
        be = (e, t) => {
          for (let a in t) a in e || (e[a] = t[a]);
          return e
        },
        ke = (e, t) => {
          for (let a in t) e[a] = t[a];
          return e
        },
        ve = (e, t) => {
          for (let a in t) "__proto__" !== a && "constructor" !== a && "prototype" !== a && (e[a] = C(t[a]) ? ve(e[a] || (e[a] = {}), t[a]) : t[a]);
          return e
        },
        we = (e, t) => {
          let a, s = {};
          for (a in e) a in t || (s[a] = e[a]);
          return s
        },
        _e = e => {
          let t = e.parent || n,
            a = e.keyframes ? (s = E(e.keyframes), (e, t) => {
              for (let a in t) a in e || "duration" === a && s || "ease" === a || (e[a] = t[a])
            }) : be;
          var s;
          if (A(e.inherit))
            for (; t;) a(e, t.vars.defaults), t = t.parent || t._dp;
          return e
        },
        xe = function(e, t) {
          let a, s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "_first",
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "_last",
            i = arguments.length > 4 ? arguments[4] : void 0,
            n = e[r];
          if (i)
            for (a = t[i]; n && n[i] > a;) n = n._prev;
          return n ? (t._next = n._next, n._next = t) : (t._next = e[s], e[s] = t), t._next ? t._next._prev = t : e[r] = t, t._prev = n, t.parent = t._dp = e, t
        },
        ye = function(e, t) {
          let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "_first",
            s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "_last",
            r = t._prev,
            i = t._next;
          r ? r._next = i : e[a] === t && (e[a] = i), i ? i._prev = r : e[s] === t && (e[s] = r), t._next = t._prev = t.parent = null
        },
        je = (e, t) => {
          e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e), e._act = 0
        },
        Ne = (e, t) => {
          if (e && (!t || t._end > e._dur || t._start < 0)) {
            let t = e;
            for (; t;) t._dirty = 1, t = t.parent
          }
          return e
        },
        Se = (e, t, a, s) => e._startAt && (r ? e._startAt.revert(Y) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(t, !0, s)),
        Te = e => !e || e._ts && Te(e.parent),
        Ce = e => e._repeat ? Ae(e._tTime, e = e.duration() + e._rDelay) * e : 0,
        Ae = (e, t) => {
          let a = Math.floor(e /= t);
          return e && a === e ? a - 1 : a
        },
        Ie = (e, t) => (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur),
        Me = e => e._end = de(e._start + (e._tDur / Math.abs(e._ts || e._rts || b) || 0)),
        Le = (e, t) => {
          let a = e._dp;
          return a && a.smoothChildTiming && e._ts && (e._start = de(a._time - (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)), Me(e), a._dirty || Ne(a, e)), e
        },
        Ee = (e, t) => {
          let a;
          if ((t._time || !t._dur && t._initted || t._start < e._time && (t._dur || !t.add)) && (a = Ie(e.rawTime(), t), (!t._dur || Ue(0, t.totalDuration(), a) - t._tTime > b) && t.render(a, !0)), Ne(e, t)._dp && e._initted && e._time >= e._dur && e._ts) {
            if (e._dur < e.duration())
              for (a = e; a._dp;) a.rawTime() >= 0 && a.totalTime(a._tTime), a = a._dp;
            e._zTime = -1e-8
          }
        },
        Pe = (e, t, a, s) => (t.parent && je(t), t._start = de((S(a) ? a : a || e !== n ? Re(e, a, t) : e._time) + t._delay), t._end = de(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)), xe(e, t, "_first", "_last", e._sort ? "_start" : 0), Be(t) || (e._recent = t), s || Ee(e, t), e._ts < 0 && Le(e, e._tTime), e),
        Oe = (e, t) => (F.ScrollTrigger || H("scrollTrigger", t)) && F.ScrollTrigger.create(t, e),
        ze = (e, t, a, s, i) => (Gt(e, t, i), e._initted ? !a && e._pt && !r && (e._dur && !1 !== e.vars.lazy || !e._dur && e.vars.lazy) && m !== xt.frame ? (Z.push(e), e._lazy = [i, s], 1) : void 0 : 1),
        De = e => {
          let {
            parent: t
          } = e;
          return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || De(t))
        },
        Be = e => {
          let {
            data: t
          } = e;
          return "isFromStart" === t || "isStart" === t
        },
        Ve = (e, t, a, s) => {
          let r = e._repeat,
            i = de(t) || 0,
            n = e._tTime / e._tDur;
          return n && !s && (e._time *= i / e._dur), e._dur = i, e._tDur = r ? r < 0 ? 1e10 : de(i * (r + 1) + e._rDelay * r) : i, n > 0 && !s && Le(e, e._tTime = e._tDur * n), e.parent && Me(e), a || Ne(e.parent, e), e
        },
        $e = e => e instanceof Dt ? Ne(e) : Ve(e, e._dur),
        Fe = {
          _start: 0,
          endTime: q,
          totalDuration: q
        },
        Re = (e, t, a) => {
          let s, r, i, n = e.labels,
            o = e._recent || Fe,
            c = e.duration() >= h ? o.endTime(!1) : e._dur;
          return j(t) && (isNaN(t) || t in n) ? (r = t.charAt(0), i = "%" === t.substr(-1), s = t.indexOf("="), "<" === r || ">" === r ? (s >= 0 && (t = t.replace(/=/, "")), ("<" === r ? o._start : o.endTime(o._repeat >= 0)) + (parseFloat(t.substr(1)) || 0) * (i ? (s < 0 ? o : a).totalDuration() / 100 : 1)) : s < 0 ? (t in n || (n[t] = c), n[t]) : (r = parseFloat(t.charAt(s - 1) + t.substr(s + 1)), i && a && (r = r / 100 * (E(a) ? a[0] : a).totalDuration()), s > 1 ? Re(e, t.substr(0, s - 1), a) + r : c + r)) : null == t ? c : +t
        },
        Ge = (e, t, a) => {
          let s, r, i = S(t[1]),
            n = (i ? 2 : 1) + (e < 2 ? 0 : 1),
            o = t[n];
          if (i && (o.duration = t[1]), o.parent = a, e) {
            for (s = o, r = a; r && !("immediateRender" in s);) s = r.vars.defaults || {}, r = A(r.vars.inherit) && r.parent;
            o.immediateRender = A(s.immediateRender), e < 2 ? o.runBackwards = 1 : o.startAt = t[n - 1]
          }
          return new Xt(t[0], o, t[n + 1])
        },
        He = (e, t) => e || 0 === e ? t(e) : t,
        Ue = (e, t, a) => a < e ? e : a > t ? t : a,
        We = (e, t) => j(e) && (t = $.exec(e)) ? t[1] : "",
        qe = [].slice,
        Xe = (e, t) => e && C(e) && "length" in e && (!t && !e.length || e.length - 1 in e && C(e[0])) && !e.nodeType && e !== o,
        Ye = (e, t, a) => i && !t && i.selector ? i.selector(e) : !j(e) || a || !c && yt() ? E(e) ? function(e, t) {
          let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          return e.forEach((e => j(e) && !t || Xe(e, 1) ? a.push(...Ye(e)) : a.push(e))) || a
        }(e, a) : Xe(e) ? qe.call(e, 0) : e ? [e] : [] : qe.call((t || l).querySelectorAll(e), 0),
        Qe = e => (e = Ye(e)[0] || U("Invalid scope") || {}, t => {
          let a = e.current || e.nativeElement || e;
          return Ye(t, a.querySelectorAll ? a : a === e ? U("Invalid scope") || l.createElement("div") : e)
        }),
        Ke = e => e.sort((() => .5 - Math.random())),
        Ze = e => {
          if (N(e)) return e;
          let t = C(e) ? e : {
              each: e
            },
            a = It(t.ease),
            s = t.from || 0,
            r = parseFloat(t.base) || 0,
            i = {},
            n = s > 0 && s < 1,
            o = isNaN(s) || n,
            c = t.axis,
            l = s,
            d = s;
          return j(s) ? l = d = {
            center: .5,
            edges: .5,
            end: 1
          } [s] || 0 : !n && o && (l = s[0], d = s[1]), (e, n, m) => {
            let u, g, f, p, b, k, v, w, x, y = (m || t).length,
              j = i[y];
            if (!j) {
              if (x = "auto" === t.grid ? 0 : (t.grid || [1, h])[1], !x) {
                for (v = -h; v < (v = m[x++].getBoundingClientRect().left) && x < y;);
                x--
              }
              for (j = i[y] = [], u = o ? Math.min(x, y) * l - .5 : s % x, g = x === h ? 0 : o ? y * d / x - .5 : s / x | 0, v = 0, w = h, k = 0; k < y; k++) f = k % x - u, p = g - (k / x | 0), j[k] = b = c ? Math.abs("y" === c ? p : f) : _(f * f + p * p), b > v && (v = b), b < w && (w = b);
              "random" === s && Ke(j), j.max = v - w, j.min = w, j.v = y = (parseFloat(t.amount) || parseFloat(t.each) * (x > y ? y - 1 : c ? "y" === c ? y / x : x : Math.max(x, y / x)) || 0) * ("edges" === s ? -1 : 1), j.b = y < 0 ? r - y : r, j.u = We(t.amount || t.each) || 0, a = a && y < 0 ? Ct(a) : a
            }
            return y = (j[e] - j.min) / j.max || 0, de(j.b + (a ? a(y) : y) * j.v) + j.u
          }
        },
        Je = e => {
          let t = Math.pow(10, ((e + "").split(".")[1] || "").length);
          return a => {
            let s = de(Math.round(parseFloat(a) / e) * e * t);
            return (s - s % 1) / t + (S(a) ? 0 : We(a))
          }
        },
        et = (e, t) => {
          let a, s, r = E(e);
          return !r && C(e) && (a = r = e.radius || h, e.values ? (e = Ye(e.values), (s = !S(e[0])) && (a *= a)) : e = Je(e.increment)), He(t, r ? N(e) ? t => (s = e(t), Math.abs(s - t) <= a ? s : t) : t => {
            let r, i, n = parseFloat(s ? t.x : t),
              o = parseFloat(s ? t.y : 0),
              c = h,
              l = 0,
              d = e.length;
            for (; d--;) s ? (r = e[d].x - n, i = e[d].y - o, r = r * r + i * i) : r = Math.abs(e[d] - n), r < c && (c = r, l = d);
            return l = !a || c <= a ? e[l] : t, s || l === t || S(t) ? l : l + We(t)
          } : Je(e))
        },
        tt = (e, t, a, s) => He(E(e) ? !t : !0 === a ? !!(a = 0) : !s, (() => E(e) ? e[~~(Math.random() * e.length)] : (a = a || 1e-5) && (s = a < 1 ? 10 ** ((a + "").length - 2) : 1) && Math.floor(Math.round((e - a / 2 + Math.random() * (t - e + .99 * a)) / a) * a * s) / s)),
        at = (e, t, a) => He(a, (a => e[~~t(a)])),
        st = function(e, t, a) {
          let s = t - e;
          return E(e) ? at(e, st(0, e.length), t) : He(a, (t => (s + (t - e) % s) % s + e))
        },
        rt = (e, t, a) => {
          let s = t - e,
            r = 2 * s;
          return E(e) ? at(e, rt(0, e.length - 1), t) : He(a, (t => e + ((t = (r + (t - e) % r) % r || 0) > s ? r - t : t)))
        },
        it = e => {
          let t, a, s, r, i = 0,
            n = "";
          for (; ~(t = e.indexOf("random(", i));) s = e.indexOf(")", t), r = "[" === e.charAt(t + 7), a = e.substr(t + 7, s - t - 7).match(r ? V : P), n += e.substr(i, t - i) + tt(r ? a : +a[0], r ? 0 : +a[1], +a[2] || 1e-5), i = s + 1;
          return n + e.substr(i, e.length - i)
        },
        nt = (e, t, a, s, r) => {
          let i = t - e,
            n = s - a;
          return He(r, (t => a + ((t - e) / i * n || 0)))
        },
        ot = (e, t, a, s) => {
          let r = isNaN(e + t) ? 0 : a => (1 - a) * e + a * t;
          if (!r) {
            let i, n, o, c, l, d = j(e),
              m = {};
            if (!0 === a && (s = 1) && (a = null), d) e = {
              p: e
            }, t = {
              p: t
            };
            else if (E(e) && !E(t)) {
              for (o = [], c = e.length, l = c - 2, n = 1; n < c; n++) o.push(ot(e[n - 1], e[n]));
              c--, r = e => {
                e *= c;
                let t = Math.min(l, ~~e);
                return o[t](e - t)
              }, a = t
            } else s || (e = ke(E(e) ? [] : {}, e));
            if (!o) {
              for (i in t) Ft.call(m, e, i, "get", t[i]);
              r = t => sa(t, m) || (d ? e.p : e)
            }
          }
          return He(a, r)
        },
        ct = (e, t, a) => {
          let s, r, i, n = e.labels,
            o = h;
          for (s in n) r = n[s] - t, r < 0 == !!a && r && o > (r = Math.abs(r)) && (i = s, o = r);
          return i
        },
        lt = (e, t, a) => {
          let s, r, n, o = e.vars,
            c = o[t],
            l = i,
            d = e._ctx;
          if (c) return s = o[t + "Params"], r = o.callbackScope || e, a && Z.length && ge(), d && (i = d), n = s ? c.apply(r, s) : c.call(r), i = l, n
        },
        dt = e => (je(e), e.scrollTrigger && e.scrollTrigger.kill(!!r), e.progress() < 1 && lt(e, "onInterrupt"), e),
        mt = [],
        ut = e => {
          if (I() && e) {
            let t = (e = !e.name && e.default || e).name,
              a = N(e),
              s = t && !a && e.init ? function() {
                this._props = []
              } : e,
              r = {
                init: q,
                render: sa,
                add: Ft,
                kill: ia,
                modifier: ra,
                rawVars: 0
              },
              i = {
                targetTest: 0,
                get: 0,
                getSetter: Jt,
                aliases: {},
                register: 0
              };
            if (yt(), e !== s) {
              if (ee[t]) return;
              be(s, be(we(e, r), i)), ke(s.prototype, ke(r, we(e, i))), ee[s.prop = t] = s, e.targetTest && (se.push(s), K[t] = 1), t = ("css" === t ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin"
            }
            W(t, s), e.register && e.register(_a, s, ca)
          } else e && mt.push(e)
        },
        gt = 255,
        ft = {
          aqua: [0, gt, gt],
          lime: [0, gt, 0],
          silver: [192, 192, 192],
          black: [0, 0, 0],
          maroon: [128, 0, 0],
          teal: [0, 128, 128],
          blue: [0, 0, gt],
          navy: [0, 0, 128],
          white: [gt, gt, gt],
          olive: [128, 128, 0],
          yellow: [gt, gt, 0],
          orange: [gt, 165, 0],
          gray: [128, 128, 128],
          purple: [128, 0, 128],
          green: [0, 128, 0],
          red: [gt, 0, 0],
          pink: [gt, 192, 203],
          cyan: [0, gt, gt],
          transparent: [gt, gt, gt, 0]
        },
        pt = (e, t, a) => (6 * (e += e < 0 ? 1 : e > 1 ? -1 : 0) < 1 ? t + (a - t) * e * 6 : e < .5 ? a : 3 * e < 2 ? t + (a - t) * (2 / 3 - e) * 6 : t) * gt + .5 | 0,
        ht = (e, t, a) => {
          let s, r, i, n, o, c, l, d, m, u, g = e ? S(e) ? [e >> 16, e >> 8 & gt, e & gt] : 0 : ft.black;
          if (!g) {
            if ("," === e.substr(-1) && (e = e.substr(0, e.length - 1)), ft[e]) g = ft[e];
            else if ("#" === e.charAt(0)) {
              if (e.length < 6 && (s = e.charAt(1), r = e.charAt(2), i = e.charAt(3), e = "#" + s + s + r + r + i + i + (5 === e.length ? e.charAt(4) + e.charAt(4) : "")), 9 === e.length) return g = parseInt(e.substr(1, 6), 16), [g >> 16, g >> 8 & gt, g & gt, parseInt(e.substr(7), 16) / 255];
              g = [(e = parseInt(e.substr(1), 16)) >> 16, e >> 8 & gt, e & gt]
            } else if ("hsl" === e.substr(0, 3))
              if (g = u = e.match(P), t) {
                if (~e.indexOf("=")) return g = e.match(O), a && g.length < 4 && (g[3] = 1), g
              } else n = +g[0] % 360 / 360, o = +g[1] / 100, c = +g[2] / 100, r = c <= .5 ? c * (o + 1) : c + o - c * o, s = 2 * c - r, g.length > 3 && (g[3] *= 1), g[0] = pt(n + 1 / 3, s, r), g[1] = pt(n, s, r), g[2] = pt(n - 1 / 3, s, r);
            else g = e.match(P) || ft.transparent;
            g = g.map(Number)
          }
          return t && !u && (s = g[0] / gt, r = g[1] / gt, i = g[2] / gt, l = Math.max(s, r, i), d = Math.min(s, r, i), c = (l + d) / 2, l === d ? n = o = 0 : (m = l - d, o = c > .5 ? m / (2 - l - d) : m / (l + d), n = l === s ? (r - i) / m + (r < i ? 6 : 0) : l === r ? (i - s) / m + 2 : (s - r) / m + 4, n *= 60), g[0] = ~~(n + .5), g[1] = ~~(100 * o + .5), g[2] = ~~(100 * c + .5)), a && g.length < 4 && (g[3] = 1), g
        },
        bt = e => {
          let t = [],
            a = [],
            s = -1;
          return e.split(vt).forEach((e => {
            let r = e.match(z) || [];
            t.push(...r), a.push(s += r.length + 1)
          })), t.c = a, t
        },
        kt = (e, t, a) => {
          let s, r, i, n, o = "",
            c = (e + o).match(vt),
            l = t ? "hsla(" : "rgba(",
            d = 0;
          if (!c) return e;
          if (c = c.map((e => (e = ht(e, t, 1)) && l + (t ? e[0] + "," + e[1] + "%," + e[2] + "%," + e[3] : e.join(",")) + ")")), a && (i = bt(e), s = a.c, s.join(o) !== i.c.join(o)))
            for (r = e.replace(vt, "1").split(z), n = r.length - 1; d < n; d++) o += r[d] + (~s.indexOf(d) ? c.shift() || l + "0,0,0,0)" : (i.length ? i : c.length ? c : a).shift());
          if (!r)
            for (r = e.split(vt), n = r.length - 1; d < n; d++) o += r[d] + c[d];
          return o + r[n]
        },
        vt = function() {
          let e, t = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
          for (e in ft) t += "|" + e + "\\b";
          return new RegExp(t + ")", "gi")
        }(),
        wt = /hsl[a]?\(/,
        _t = e => {
          let t, a = e.join(" ");
          if (vt.lastIndex = 0, vt.test(a)) return t = wt.test(a), e[1] = kt(e[1], t), e[0] = kt(e[0], t, bt(e[1])), !0
        },
        xt = function() {
          let e, t, a, s, r, i, n = Date.now,
            m = 500,
            u = 33,
            f = n(),
            p = f,
            h = 1e3 / 240,
            b = h,
            k = [],
            v = a => {
              let o, c, l, d, g = n() - p,
                w = !0 === a;
              if (g > m && (f += g - u), p += g, l = p - f, o = l - b, (o > 0 || w) && (d = ++s.frame, r = l - 1e3 * s.time, s.time = l /= 1e3, b += o + (o >= h ? 4 : h - o), c = 1), w || (e = t(v)), c)
                for (i = 0; i < k.length; i++) k[i](l, r, d, a)
            };
          return s = {
            time: 0,
            frame: 0,
            tick() {
              v(!0)
            },
            deltaRatio: e => r / (1e3 / (e || 60)),
            wake() {
              d && (!c && I() && (o = c = window, l = o.document || {}, F.gsap = _a, (o.gsapVersions || (o.gsapVersions = [])).push(_a.version), G(R || o.GreenSockGlobals || !o.gsap && o || {}), a = o.requestAnimationFrame, mt.forEach(ut)), e && s.sleep(), t = a || (e => setTimeout(e, b - 1e3 * s.time + 1 | 0)), g = 1, v(2))
            },
            sleep() {
              (a ? o.cancelAnimationFrame : clearTimeout)(e), g = 0, t = q
            },
            lagSmoothing(e, t) {
              m = e || 1 / 0, u = Math.min(t || 33, m)
            },
            fps(e) {
              h = 1e3 / (e || 240), b = 1e3 * s.time + h
            },
            add(e, t, a) {
              let r = t ? (t, a, i, n) => {
                e(t, a, i, n), s.remove(r)
              } : e;
              return s.remove(e), k[a ? "unshift" : "push"](r), yt(), r
            },
            remove(e, t) {
              ~(t = k.indexOf(e)) && k.splice(t, 1) && i >= t && i--
            },
            _listeners: k
          }, s
        }(),
        yt = () => !g && xt.wake(),
        jt = {},
        Nt = /^[\d.\-M][\d.\-,\s]/,
        St = /["']/g,
        Tt = e => {
          let t, a, s, r = {},
            i = e.substr(1, e.length - 3).split(":"),
            n = i[0],
            o = 1,
            c = i.length;
          for (; o < c; o++) a = i[o], t = o !== c - 1 ? a.lastIndexOf(",") : a.length, s = a.substr(0, t), r[n] = isNaN(s) ? s.replace(St, "").trim() : +s, n = a.substr(t + 1).trim();
          return r
        },
        Ct = e => t => 1 - e(1 - t),
        At = (e, t) => {
          let a, s = e._first;
          for (; s;) s instanceof Dt ? At(s, t) : !s.vars.yoyoEase || s._yoyo && s._repeat || s._yoyo === t || (s.timeline ? At(s.timeline, t) : (a = s._ease, s._ease = s._yEase, s._yEase = a, s._yoyo = t)), s = s._next
        },
        It = (e, t) => e && (N(e) ? e : jt[e] || (e => {
          let t = (e + "").split("("),
            a = jt[t[0]];
          return a && t.length > 1 && a.config ? a.config.apply(null, ~e.indexOf("{") ? [Tt(t[1])] : (e => {
            let t = e.indexOf("(") + 1,
              a = e.indexOf(")"),
              s = e.indexOf("(", t);
            return e.substring(t, ~s && s < a ? e.indexOf(")", a + 1) : a)
          })(e).split(",").map(pe)) : jt._CE && Nt.test(e) ? jt._CE("", e) : a
        })(e)) || t,
        Mt = function(e, t) {
          let a, s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e => 1 - t(1 - e),
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : e => e < .5 ? t(2 * e) / 2 : 1 - t(2 * (1 - e)) / 2,
            i = {
              easeIn: t,
              easeOut: s,
              easeInOut: r
            };
          return ce(e, (e => {
            jt[e] = F[e] = i, jt[a = e.toLowerCase()] = s;
            for (let t in i) jt[a + ("easeIn" === t ? ".in" : "easeOut" === t ? ".out" : ".inOut")] = jt[e + "." + t] = i[t]
          })), i
        },
        Lt = e => t => t < .5 ? (1 - e(1 - 2 * t)) / 2 : .5 + e(2 * (t - .5)) / 2,
        Et = (e, t, a) => {
          let s = t >= 1 ? t : 1,
            r = (a || (e ? .3 : .45)) / (t < 1 ? t : 1),
            i = r / k * (Math.asin(1 / s) || 0),
            n = e => 1 === e ? 1 : s * 2 ** (-10 * e) * y((e - i) * r) + 1,
            o = "out" === e ? n : "in" === e ? e => 1 - n(1 - e) : Lt(n);
          return r = k / r, o.config = (t, a) => Et(e, t, a), o
        },
        Pt = function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1.70158,
            a = e => e ? --e * e * ((t + 1) * e + t) + 1 : 0,
            s = "out" === e ? a : "in" === e ? e => 1 - a(1 - e) : Lt(a);
          return s.config = t => Pt(e, t), s
        };
      ce("Linear,Quad,Cubic,Quart,Quint,Strong", ((e, t) => {
        let a = t < 5 ? t + 1 : t;
        Mt(e + ",Power" + (a - 1), t ? e => e ** a : e => e, (e => 1 - (1 - e) ** a), (e => e < .5 ? (2 * e) ** a / 2 : 1 - (2 * (1 - e)) ** a / 2))
      })), jt.Linear.easeNone = jt.none = jt.Linear.easeIn, Mt("Elastic", Et("in"), Et("out"), Et()), ((e, t) => {
        let a = a => a < .36363636363636365 ? e * a * a : a < .7272727272727273 ? e * (a - 1.5 / t) ** 2 + .75 : a < .9090909090909092 ? e * (a -= 2.25 / t) * a + .9375 : e * (a - 2.625 / t) ** 2 + .984375;
        Mt("Bounce", (e => 1 - a(1 - e)), a)
      })(7.5625, 2.75), Mt("Expo", (e => e ? 2 ** (10 * (e - 1)) : 0)), Mt("Circ", (e => -(_(1 - e * e) - 1))), Mt("Sine", (e => 1 === e ? 1 : 1 - x(e * v))), Mt("Back", Pt("in"), Pt("out"), Pt()), jt.SteppedEase = jt.steps = F.SteppedEase = {
        config() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            t = arguments.length > 1 ? arguments[1] : void 0,
            a = 1 / e,
            s = e + (t ? 0 : 1),
            r = t ? 1 : 0;
          return e => ((s * Ue(0, .99999999, e) | 0) + r) * a
        }
      }, p.ease = jt["quad.out"], ce("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", (e => re += e + "," + e + "Params,"));
      class Ot {
        constructor(e, t) {
          this.id = w++, e._gsap = this, this.target = e, this.harness = t, this.get = t ? t.get : oe, this.set = t ? t.getSetter : Jt
        }
      }
      class zt {
        constructor(e) {
          this.vars = e, this._delay = +e.delay || 0, (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) && (this._rDelay = e.repeatDelay || 0, this._yoyo = !!e.yoyo || !!e.yoyoEase), this._ts = 1, Ve(this, +e.duration, 1, 1), this.data = e.data, i && (this._ctx = i, i.data.push(this)), g || xt.wake()
        }
        delay(e) {
          return e || 0 === e ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + e - this._delay), this._delay = e, this) : this._delay
        }
        duration(e) {
          return arguments.length ? this.totalDuration(this._repeat > 0 ? e + (e + this._rDelay) * this._repeat : e) : this.totalDuration() && this._dur
        }
        totalDuration(e) {
          return arguments.length ? (this._dirty = 0, Ve(this, this._repeat < 0 ? e : (e - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
        }
        totalTime(e, t) {
          if (yt(), !arguments.length) return this._tTime;
          let a = this._dp;
          if (a && a.smoothChildTiming && this._ts) {
            for (Le(this, e), !a._dp || a.parent || Ee(a, this); a && a.parent;) a.parent._time !== a._start + (a._ts >= 0 ? a._tTime / a._ts : (a.totalDuration() - a._tTime) / -a._ts) && a.totalTime(a._tTime, !0), a = a.parent;
            !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && e < this._tDur || this._ts < 0 && e > 0 || !this._tDur && !e) && Pe(this._dp, this, this._start - this._delay)
          }
          return (this._tTime !== e || !this._dur && !t || this._initted && Math.abs(this._zTime) === b || !e && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = e), fe(this, e, t)), this
        }
        time(e, t) {
          return arguments.length ? this.totalTime(Math.min(this.totalDuration(), e + Ce(this)) % (this._dur + this._rDelay) || (e ? this._dur : 0), t) : this._time
        }
        totalProgress(e, t) {
          return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
        }
        progress(e, t) {
          return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? e : 1 - e) + Ce(this), t) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
        }
        iteration(e, t) {
          let a = this.duration() + this._rDelay;
          return arguments.length ? this.totalTime(this._time + (e - 1) * a, t) : this._repeat ? Ae(this._tTime, a) + 1 : 1
        }
        timeScale(e) {
          if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
          if (this._rts === e) return this;
          let t = this.parent && this._ts ? Ie(this.parent._time, this) : this._tTime;
          return this._rts = +e || 0, this._ts = this._ps || -1e-8 === e ? 0 : this._rts, this.totalTime(Ue(-Math.abs(this._delay), this._tDur, t), !0), Me(this), (e => {
            let t = e.parent;
            for (; t && t.parent;) t._dirty = 1, t.totalDuration(), t = t.parent;
            return e
          })(this)
        }
        paused(e) {
          return arguments.length ? (this._ps !== e && (this._ps = e, e ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (yt(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== b && (this._tTime -= b)))), this) : this._ps
        }
        startTime(e) {
          if (arguments.length) {
            this._start = e;
            let t = this.parent || this._dp;
            return t && (t._sort || !this.parent) && Pe(t, this, e - this._delay), this
          }
          return this._start
        }
        endTime(e) {
          return this._start + (A(e) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
        }
        rawTime(e) {
          let t = this.parent || this._dp;
          return t ? e && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Ie(t.rawTime(e), this) : this._tTime : this._tTime
        }
        revert() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Q,
            t = r;
          return r = e, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(e), this.totalTime(-.01, e.suppressEvents)), "nested" !== this.data && !1 !== e.kill && this.kill(), r = t, this
        }
        globalTime(e) {
          let t = this,
            a = arguments.length ? e : t.rawTime();
          for (; t;) a = t._start + a / (t._ts || 1), t = t._dp;
          return !this.parent && this._sat ? this._sat.vars.immediateRender ? -1 / 0 : this._sat.globalTime(e) : a
        }
        repeat(e) {
          return arguments.length ? (this._repeat = e === 1 / 0 ? -2 : e, $e(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
        }
        repeatDelay(e) {
          if (arguments.length) {
            let t = this._time;
            return this._rDelay = e, $e(this), t ? this.time(t) : this
          }
          return this._rDelay
        }
        yoyo(e) {
          return arguments.length ? (this._yoyo = e, this) : this._yoyo
        }
        seek(e, t) {
          return this.totalTime(Re(this, e), A(t))
        }
        restart(e, t) {
          return this.play().totalTime(e ? -this._delay : 0, A(t))
        }
        play(e, t) {
          return null != e && this.seek(e, t), this.reversed(!1).paused(!1)
        }
        reverse(e, t) {
          return null != e && this.seek(e || this.totalDuration(), t), this.reversed(!0).paused(!1)
        }
        pause(e, t) {
          return null != e && this.seek(e, t), this.paused(!0)
        }
        resume() {
          return this.paused(!1)
        }
        reversed(e) {
          return arguments.length ? (!!e !== this.reversed() && this.timeScale(-this._rts || (e ? -1e-8 : 0)), this) : this._rts < 0
        }
        invalidate() {
          return this._initted = this._act = 0, this._zTime = -1e-8, this
        }
        isActive() {
          let e, t = this.parent || this._dp,
            a = this._start;
          return !(t && !(this._ts && this._initted && t.isActive() && (e = t.rawTime(!0)) >= a && e < this.endTime(!0) - b))
        }
        eventCallback(e, t, a) {
          let s = this.vars;
          return arguments.length > 1 ? (t ? (s[e] = t, a && (s[e + "Params"] = a), "onUpdate" === e && (this._onUpdate = t)) : delete s[e], this) : s[e]
        }
        then(e) {
          let t = this;
          return new Promise((a => {
            let s = N(e) ? e : he,
              r = () => {
                let e = t.then;
                t.then = null, N(s) && (s = s(t)) && (s.then || s === t) && (t.then = e), a(s), t.then = e
              };
            t._initted && 1 === t.totalProgress() && t._ts >= 0 || !t._tTime && t._ts < 0 ? r() : t._prom = r
          }))
        }
        kill() {
          dt(this)
        }
      }
      be(zt.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -1e-8,
        _prom: 0,
        _ps: !1,
        _rts: 1
      });
      class Dt extends zt {
        constructor() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = arguments.length > 1 ? arguments[1] : void 0;
          super(e), this.labels = {}, this.smoothChildTiming = !!e.smoothChildTiming, this.autoRemoveChildren = !!e.autoRemoveChildren, this._sort = A(e.sortChildren), n && Pe(e.parent || n, this, t), e.reversed && this.reverse(), e.paused && this.paused(!0), e.scrollTrigger && Oe(this, e.scrollTrigger)
        }
        to(e, t, a) {
          return Ge(0, arguments, this), this
        }
        from(e, t, a) {
          return Ge(1, arguments, this), this
        }
        fromTo(e, t, a, s) {
          return Ge(2, arguments, this), this
        }
        set(e, t, a) {
          return t.duration = 0, t.parent = this, _e(t).repeatDelay || (t.repeat = 0), t.immediateRender = !!t.immediateRender, new Xt(e, t, Re(this, a), 1), this
        }
        call(e, t, a) {
          return Pe(this, Xt.delayedCall(0, e, t), a)
        }
        staggerTo(e, t, a, s, r, i, n) {
          return a.duration = t, a.stagger = a.stagger || s, a.onComplete = i, a.onCompleteParams = n, a.parent = this, new Xt(e, a, Re(this, r)), this
        }
        staggerFrom(e, t, a, s, r, i, n) {
          return a.runBackwards = 1, _e(a).immediateRender = A(a.immediateRender), this.staggerTo(e, t, a, s, r, i, n)
        }
        staggerFromTo(e, t, a, s, r, i, n, o) {
          return s.startAt = a, _e(s).immediateRender = A(s.immediateRender), this.staggerTo(e, t, s, r, i, n, o)
        }
        render(e, t, a) {
          let s, i, o, c, l, d, m, u, g, f, p, h, k = this._time,
            v = this._dirty ? this.totalDuration() : this._tDur,
            w = this._dur,
            _ = e <= 0 ? 0 : de(e),
            x = this._zTime < 0 != e < 0 && (this._initted || !w);
          if (this !== n && _ > v && e >= 0 && (_ = v), _ !== this._tTime || a || x) {
            if (k !== this._time && w && (_ += this._time - k, e += this._time - k), s = _, g = this._start, u = this._ts, d = !u, x && (w || (k = this._zTime), (e || !t) && (this._zTime = e)), this._repeat) {
              if (p = this._yoyo, l = w + this._rDelay, this._repeat < -1 && e < 0) return this.totalTime(100 * l + e, t, a);
              if (s = de(_ % l), _ === v ? (c = this._repeat, s = w) : (c = ~~(_ / l), c && c === _ / l && (s = w, c--), s > w && (s = w)), f = Ae(this._tTime, l), !k && this._tTime && f !== c && this._tTime - f * l - this._dur <= 0 && (f = c), p && 1 & c && (s = w - s, h = 1), c !== f && !this._lock) {
                let e = p && 1 & f,
                  a = e === (p && 1 & c);
                if (c < f && (e = !e), k = e ? 0 : _ % w ? w : _, this._lock = 1, this.render(k || (h ? 0 : de(c * l)), t, !w)._lock = 0, this._tTime = _, !t && this.parent && lt(this, "onRepeat"), this.vars.repeatRefresh && !h && (this.invalidate()._lock = 1), k && k !== this._time || d !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                if (w = this._dur, v = this._tDur, a && (this._lock = 2, k = e ? w : -1e-4, this.render(k, !0), this.vars.repeatRefresh && !h && this.invalidate()), this._lock = 0, !this._ts && !d) return this;
                At(this, h)
              }
            }
            if (this._hasPause && !this._forcing && this._lock < 2 && (m = ((e, t, a) => {
                let s;
                if (a > t)
                  for (s = e._first; s && s._start <= a;) {
                    if ("isPause" === s.data && s._start > t) return s;
                    s = s._next
                  } else
                    for (s = e._last; s && s._start >= a;) {
                      if ("isPause" === s.data && s._start < t) return s;
                      s = s._prev
                    }
              })(this, de(k), de(s)), m && (_ -= s - (s = m._start))), this._tTime = _, this._time = s, this._act = !u, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = e, k = 0), !k && s && !t && !c && (lt(this, "onStart"), this._tTime !== _)) return this;
            if (s >= k && e >= 0)
              for (i = this._first; i;) {
                if (o = i._next, (i._act || s >= i._start) && i._ts && m !== i) {
                  if (i.parent !== this) return this.render(e, t, a);
                  if (i.render(i._ts > 0 ? (s - i._start) * i._ts : (i._dirty ? i.totalDuration() : i._tDur) + (s - i._start) * i._ts, t, a), s !== this._time || !this._ts && !d) {
                    m = 0, o && (_ += this._zTime = -1e-8);
                    break
                  }
                }
                i = o
              } else {
                i = this._last;
                let n = e < 0 ? e : s;
                for (; i;) {
                  if (o = i._prev, (i._act || n <= i._end) && i._ts && m !== i) {
                    if (i.parent !== this) return this.render(e, t, a);
                    if (i.render(i._ts > 0 ? (n - i._start) * i._ts : (i._dirty ? i.totalDuration() : i._tDur) + (n - i._start) * i._ts, t, a || r && (i._initted || i._startAt)), s !== this._time || !this._ts && !d) {
                      m = 0, o && (_ += this._zTime = n ? -1e-8 : b);
                      break
                    }
                  }
                  i = o
                }
              }
            if (m && !t && (this.pause(), m.render(s >= k ? 0 : -1e-8)._zTime = s >= k ? 1 : -1, this._ts)) return this._start = g, Me(this), this.render(e, t, a);
            this._onUpdate && !t && lt(this, "onUpdate", !0), (_ === v && this._tTime >= this.totalDuration() || !_ && k) && (g !== this._start && Math.abs(u) === Math.abs(this._ts) || this._lock || ((e || !w) && (_ === v && this._ts > 0 || !_ && this._ts < 0) && je(this, 1), t || e < 0 && !k || !_ && !k && v || (lt(this, _ === v && e >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(_ < v && this.timeScale() > 0) && this._prom())))
          }
          return this
        }
        add(e, t) {
          if (S(t) || (t = Re(this, t, e)), !(e instanceof zt)) {
            if (E(e)) return e.forEach((e => this.add(e, t))), this;
            if (j(e)) return this.addLabel(e, t);
            if (!N(e)) return this;
            e = Xt.delayedCall(0, e)
          }
          return this !== e ? Pe(this, e, t) : this
        }
        getChildren() {
          let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            a = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
            s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -h,
            r = [],
            i = this._first;
          for (; i;) i._start >= s && (i instanceof Xt ? t && r.push(i) : (a && r.push(i), e && r.push(...i.getChildren(!0, t, a)))), i = i._next;
          return r
        }
        getById(e) {
          let t = this.getChildren(1, 1, 1),
            a = t.length;
          for (; a--;)
            if (t[a].vars.id === e) return t[a]
        }
        remove(e) {
          return j(e) ? this.removeLabel(e) : N(e) ? this.killTweensOf(e) : (ye(this, e), e === this._recent && (this._recent = this._last), Ne(this))
        }
        totalTime(e, t) {
          return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = de(xt.time - (this._ts > 0 ? e / this._ts : (this.totalDuration() - e) / -this._ts))), super.totalTime(e, t), this._forcing = 0, this) : this._tTime
        }
        addLabel(e, t) {
          return this.labels[e] = Re(this, t), this
        }
        removeLabel(e) {
          return delete this.labels[e], this
        }
        addPause(e, t, a) {
          let s = Xt.delayedCall(0, t || q, a);
          return s.data = "isPause", this._hasPause = 1, Pe(this, s, Re(this, e))
        }
        removePause(e) {
          let t = this._first;
          for (e = Re(this, e); t;) t._start === e && "isPause" === t.data && je(t), t = t._next
        }
        killTweensOf(e, t, a) {
          let s = this.getTweensOf(e, a),
            r = s.length;
          for (; r--;) Bt !== s[r] && s[r].kill(e, t);
          return this
        }
        getTweensOf(e, t) {
          let a, s = [],
            r = Ye(e),
            i = this._first,
            n = S(t);
          for (; i;) i instanceof Xt ? ue(i._targets, r) && (n ? (!Bt || i._initted && i._ts) && i.globalTime(0) <= t && i.globalTime(i.totalDuration()) > t : !t || i.isActive()) && s.push(i) : (a = i.getTweensOf(r, t)).length && s.push(...a), i = i._next;
          return s
        }
        tweenTo(e, t) {
          t = t || {};
          let a, s = this,
            r = Re(s, e),
            {
              startAt: i,
              onStart: n,
              onStartParams: o,
              immediateRender: c
            } = t,
            l = Xt.to(s, be({
              ease: t.ease || "none",
              lazy: !1,
              immediateRender: !1,
              time: r,
              overwrite: "auto",
              duration: t.duration || Math.abs((r - (i && "time" in i ? i.time : s._time)) / s.timeScale()) || b,
              onStart: () => {
                if (s.pause(), !a) {
                  let e = t.duration || Math.abs((r - (i && "time" in i ? i.time : s._time)) / s.timeScale());
                  l._dur !== e && Ve(l, e, 0, 1).render(l._time, !0, !0), a = 1
                }
                n && n.apply(l, o || [])
              }
            }, t));
          return c ? l.render(0) : l
        }
        tweenFromTo(e, t, a) {
          return this.tweenTo(t, be({
            startAt: {
              time: Re(this, e)
            }
          }, a))
        }
        recent() {
          return this._recent
        }
        nextLabel() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._time;
          return ct(this, Re(this, e))
        }
        previousLabel() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._time;
          return ct(this, Re(this, e), 1)
        }
        currentLabel(e) {
          return arguments.length ? this.seek(e, !0) : this.previousLabel(this._time + b)
        }
        shiftChildren(e, t) {
          let a, s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            r = this._first,
            i = this.labels;
          for (; r;) r._start >= s && (r._start += e, r._end += e), r = r._next;
          if (t)
            for (a in i) i[a] >= s && (i[a] += e);
          return Ne(this)
        }
        invalidate(e) {
          let t = this._first;
          for (this._lock = 0; t;) t.invalidate(e), t = t._next;
          return super.invalidate(e)
        }
        clear() {
          let e, t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            a = this._first;
          for (; a;) e = a._next, this.remove(a), a = e;
          return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), Ne(this)
        }
        totalDuration(e) {
          let t, a, s, r = 0,
            i = this,
            o = i._last,
            c = h;
          if (arguments.length) return i.timeScale((i._repeat < 0 ? i.duration() : i.totalDuration()) / (i.reversed() ? -e : e));
          if (i._dirty) {
            for (s = i.parent; o;) t = o._prev, o._dirty && o.totalDuration(), a = o._start, a > c && i._sort && o._ts && !i._lock ? (i._lock = 1, Pe(i, o, a - o._delay, 1)._lock = 0) : c = a, a < 0 && o._ts && (r -= a, (!s && !i._dp || s && s.smoothChildTiming) && (i._start += a / i._ts, i._time -= a, i._tTime -= a), i.shiftChildren(-a, !1, -Infinity), c = 0), o._end > r && o._ts && (r = o._end), o = t;
            Ve(i, i === n && i._time > r ? i._time : r, 1, 1), i._dirty = 0
          }
          return i._tDur
        }
        static updateRoot(e) {
          if (n._ts && (fe(n, Ie(e, n)), m = xt.frame), xt.frame >= ae) {
            ae += f.autoSleep || 120;
            let e = n._first;
            if ((!e || !e._ts) && f.autoSleep && xt._listeners.length < 2) {
              for (; e && !e._ts;) e = e._next;
              e || xt.sleep()
            }
          }
        }
      }
      be(Dt.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
      });
      let Bt, Vt, $t = function(e, t, a, s, r, i, n) {
          let o, c, l, d, m, u, g, f, p = new ca(this._pt, e, t, 0, 1, aa, null, r),
            h = 0,
            b = 0;
          for (p.b = a, p.e = s, a += "", (g = ~(s += "").indexOf("random(")) && (s = it(s)), i && (f = [a, s], i(f, e, t), a = f[0], s = f[1]), c = a.match(D) || []; o = D.exec(s);) d = o[0], m = s.substring(h, o.index), l ? l = (l + 1) % 5 : "rgba(" === m.substr(-5) && (l = 1), d !== c[b++] && (u = parseFloat(c[b - 1]) || 0, p._pt = {
            _next: p._pt,
            p: m || 1 === b ? m : ",",
            s: u,
            c: "=" === d.charAt(1) ? me(u, d) - u : parseFloat(d) - u,
            m: l && l < 4 ? Math.round : 0
          }, h = D.lastIndex);
          return p.c = h < s.length ? s.substring(h, s.length) : "", p.fp = n, (B.test(s) || g) && (p.e = 0), this._pt = p, p
        },
        Ft = function(e, t, a, s, r, i, n, o, c, l) {
          N(s) && (s = s(r || 0, e, i));
          let d, m = e[t],
            u = "get" !== a ? a : N(m) ? c ? e[t.indexOf("set") || !N(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](c) : e[t]() : m,
            g = N(m) ? c ? Kt : Qt : Yt;
          if (j(s) && (~s.indexOf("random(") && (s = it(s)), "=" === s.charAt(1) && (d = me(u, s) + (We(u) || 0), (d || 0 === d) && (s = d))), !l || u !== s || Vt) return isNaN(u * s) || "" === s ? (!m && !(t in e) && H(t, s), $t.call(this, e, t, u, s, g, o || f.stringFilter, c)) : (d = new ca(this._pt, e, t, +u || 0, s - (u || 0), "boolean" == typeof m ? ta : ea, 0, g), c && (d.fp = c), n && d.modifier(n, this, e), this._pt = d)
        },
        Rt = (e, t, a, s, r, i) => {
          let n, o, c, l;
          if (ee[e] && !1 !== (n = new ee[e]).init(r, n.rawVars ? t[e] : ((e, t, a, s, r) => {
              if (N(e) && (e = Ut(e, r, t, a, s)), !C(e) || e.style && e.nodeType || E(e) || L(e)) return j(e) ? Ut(e, r, t, a, s) : e;
              let i, n = {};
              for (i in e) n[i] = Ut(e[i], r, t, a, s);
              return n
            })(t[e], s, r, i, a), a, s, i) && (a._pt = o = new ca(a._pt, r, e, 0, 1, n.render, n, 0, n.priority), a !== u))
            for (c = a._ptLookup[a._targets.indexOf(r)], l = n._props.length; l--;) c[n._props[l]] = o;
          return n
        },
        Gt = (e, t, a) => {
          let i, o, c, l, d, m, u, g, f, k, v, w, _, x = e.vars,
            {
              ease: y,
              startAt: j,
              immediateRender: N,
              lazy: S,
              onUpdate: T,
              onUpdateParams: C,
              callbackScope: I,
              runBackwards: M,
              yoyoEase: L,
              keyframes: E,
              autoRevert: P
            } = x,
            O = e._dur,
            z = e._startAt,
            D = e._targets,
            B = e.parent,
            V = B && "nested" === B.data ? B.vars.targets : D,
            $ = "auto" === e._overwrite && !s,
            F = e.timeline;
          if (F && (!E || !y) && (y = "none"), e._ease = It(y, p.ease), e._yEase = L ? Ct(It(!0 === L ? y : L, p.ease)) : 0, L && e._yoyo && !e._repeat && (L = e._yEase, e._yEase = e._ease, e._ease = L), e._from = !F && !!x.runBackwards, !F || E && !x.stagger) {
            if (g = D[0] ? ne(D[0]).harness : 0, w = g && x[g.prop], i = we(x, K), z && (z._zTime < 0 && z.progress(1), t < 0 && M && N && !P ? z.render(-1, !0) : z.revert(M && O ? Y : X), z._lazy = 0), j) {
              if (je(e._startAt = Xt.set(D, be({
                  data: "isStart",
                  overwrite: !1,
                  parent: B,
                  immediateRender: !0,
                  lazy: !z && A(S),
                  startAt: null,
                  delay: 0,
                  onUpdate: T,
                  onUpdateParams: C,
                  callbackScope: I,
                  stagger: 0
                }, j))), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (r || !N && !P) && e._startAt.revert(Y), N && O && t <= 0 && a <= 0) return void(t && (e._zTime = t))
            } else if (M && O && !z)
              if (t && (N = !1), c = be({
                  overwrite: !1,
                  data: "isFromStart",
                  lazy: N && !z && A(S),
                  immediateRender: N,
                  stagger: 0,
                  parent: B
                }, i), w && (c[g.prop] = w), je(e._startAt = Xt.set(D, c)), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (r ? e._startAt.revert(Y) : e._startAt.render(-1, !0)), e._zTime = t, N) {
                if (!t) return
              } else Gt(e._startAt, b, b);
            for (e._pt = e._ptCache = 0, S = O && A(S) || S && !O, o = 0; o < D.length; o++) {
              if (d = D[o], u = d._gsap || ie(D)[o]._gsap, e._ptLookup[o] = k = {}, J[u.id] && Z.length && ge(), v = V === D ? o : V.indexOf(d), g && !1 !== (f = new g).init(d, w || i, e, v, V) && (e._pt = l = new ca(e._pt, d, f.name, 0, 1, f.render, f, 0, f.priority), f._props.forEach((e => {
                  k[e] = l
                })), f.priority && (m = 1)), !g || w)
                for (c in i) ee[c] && (f = Rt(c, i, e, v, d, V)) ? f.priority && (m = 1) : k[c] = l = Ft.call(e, d, c, "get", i[c], v, V, 0, x.stringFilter);
              e._op && e._op[o] && e.kill(d, e._op[o]), $ && e._pt && (Bt = e, n.killTweensOf(d, k, e.globalTime(t)), _ = !e.parent, Bt = 0), e._pt && S && (J[u.id] = 1)
            }
            m && oa(e), e._onInit && e._onInit(e)
          }
          e._onUpdate = T, e._initted = (!e._op || e._pt) && !_, E && t <= 0 && F.render(h, !0, !0)
        },
        Ht = (e, t, a, s) => {
          let r, i, n = t.ease || s || "power1.inOut";
          if (E(t)) i = a[e] || (a[e] = []), t.forEach(((e, a) => i.push({
            t: a / (t.length - 1) * 100,
            v: e,
            e: n
          })));
          else
            for (r in t) i = a[r] || (a[r] = []), "ease" === r || i.push({
              t: parseFloat(e),
              v: t[r],
              e: n
            })
        },
        Ut = (e, t, a, s, r) => N(e) ? e.call(t, a, s, r) : j(e) && ~e.indexOf("random(") ? it(e) : e,
        Wt = re + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
        qt = {};
      ce(Wt + ",id,stagger,delay,duration,paused,scrollTrigger", (e => qt[e] = 1));
      class Xt extends zt {
        constructor(e, t, a, r) {
          "number" == typeof t && (a.duration = t, t = a, a = null), super(r ? t : _e(t));
          let i, o, c, l, d, m, u, g, {
              duration: p,
              delay: h,
              immediateRender: b,
              stagger: k,
              overwrite: v,
              keyframes: w,
              defaults: _,
              scrollTrigger: x,
              yoyoEase: y
            } = this.vars,
            j = t.parent || n,
            N = (E(e) || L(e) ? S(e[0]) : "length" in t) ? [e] : Ye(e);
          if (this._targets = N.length ? ie(N) : U("GSAP target " + e + " not found. https://greensock.com", !f.nullTargetWarn) || [], this._ptLookup = [], this._overwrite = v, w || k || M(p) || M(h)) {
            if (t = this.vars, i = this.timeline = new Dt({
                data: "nested",
                defaults: _ || {},
                targets: j && "nested" === j.data ? j.vars.targets : N
              }), i.kill(), i.parent = i._dp = this, i._start = 0, k || M(p) || M(h)) {
              if (l = N.length, u = k && Ze(k), C(k))
                for (d in k) ~Wt.indexOf(d) && (g || (g = {}), g[d] = k[d]);
              for (o = 0; o < l; o++) c = we(t, qt), c.stagger = 0, y && (c.yoyoEase = y), g && ke(c, g), m = N[o], c.duration = +Ut(p, this, o, m, N), c.delay = (+Ut(h, this, o, m, N) || 0) - this._delay, !k && 1 === l && c.delay && (this._delay = h = c.delay, this._start += h, c.delay = 0), i.to(m, c, u ? u(o, m, N) : 0), i._ease = jt.none;
              i.duration() ? p = h = 0 : this.timeline = 0
            } else if (w) {
              _e(be(i.vars.defaults, {
                ease: "none"
              })), i._ease = It(w.ease || t.ease || "none");
              let e, a, s, r = 0;
              if (E(w)) w.forEach((e => i.to(N, e, ">"))), i.duration();
              else {
                for (d in c = {}, w) "ease" === d || "easeEach" === d || Ht(d, w[d], c, w.easeEach);
                for (d in c)
                  for (e = c[d].sort(((e, t) => e.t - t.t)), r = 0, o = 0; o < e.length; o++) a = e[o], s = {
                    ease: a.e,
                    duration: (a.t - (o ? e[o - 1].t : 0)) / 100 * p
                  }, s[d] = a.v, i.to(N, s, r), r += s.duration;
                i.duration() < p && i.to({}, {
                  duration: p - i.duration()
                })
              }
            }
            p || this.duration(p = i.duration())
          } else this.timeline = 0;
          !0 !== v || s || (Bt = this, n.killTweensOf(N), Bt = 0), Pe(j, this, a), t.reversed && this.reverse(), t.paused && this.paused(!0), (b || !p && !w && this._start === de(j._time) && A(b) && Te(this) && "nested" !== j.data) && (this._tTime = -1e-8, this.render(Math.max(0, -h) || 0)), x && Oe(this, x)
        }
        render(e, t, a) {
          let s, i, n, o, c, l, d, m, u, g = this._time,
            f = this._tDur,
            p = this._dur,
            h = e < 0,
            k = e > f - b && !h ? f : e < b ? 0 : e;
          if (p) {
            if (k !== this._tTime || !e || a || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== h) {
              if (s = k, m = this.timeline, this._repeat) {
                if (o = p + this._rDelay, this._repeat < -1 && h) return this.totalTime(100 * o + e, t, a);
                if (s = de(k % o), k === f ? (n = this._repeat, s = p) : (n = ~~(k / o), n && n === k / o && (s = p, n--), s > p && (s = p)), l = this._yoyo && 1 & n, l && (u = this._yEase, s = p - s), c = Ae(this._tTime, o), s === g && !a && this._initted) return this._tTime = k, this;
                n !== c && (m && this._yEase && At(m, l), !this.vars.repeatRefresh || l || this._lock || (this._lock = a = 1, this.render(de(o * n), !0).invalidate()._lock = 0))
              }
              if (!this._initted) {
                if (ze(this, h ? e : s, a, t, k)) return this._tTime = 0, this;
                if (g !== this._time) return this;
                if (p !== this._dur) return this.render(e, t, a)
              }
              if (this._tTime = k, this._time = s, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = d = (u || this._ease)(s / p), this._from && (this.ratio = d = 1 - d), s && !g && !t && !n && (lt(this, "onStart"), this._tTime !== k)) return this;
              for (i = this._pt; i;) i.r(d, i.d), i = i._next;
              m && m.render(e < 0 ? e : !s && l ? -1e-8 : m._dur * m._ease(s / this._dur), t, a) || this._startAt && (this._zTime = e), this._onUpdate && !t && (h && Se(this, e, 0, a), lt(this, "onUpdate")), this._repeat && n !== c && this.vars.onRepeat && !t && this.parent && lt(this, "onRepeat"), k !== this._tDur && k || this._tTime !== k || (h && !this._onUpdate && Se(this, e, 0, !0), (e || !p) && (k === this._tDur && this._ts > 0 || !k && this._ts < 0) && je(this, 1), t || h && !g || !(k || g || l) || (lt(this, k === f ? "onComplete" : "onReverseComplete", !0), this._prom && !(k < f && this.timeScale() > 0) && this._prom()))
            }
          } else((e, t, a, s) => {
            let i, n, o, c = e.ratio,
              l = t < 0 || !t && (!e._start && De(e) && (e._initted || !Be(e)) || (e._ts < 0 || e._dp._ts < 0) && !Be(e)) ? 0 : 1,
              d = e._rDelay,
              m = 0;
            if (d && e._repeat && (m = Ue(0, e._tDur, t), n = Ae(m, d), e._yoyo && 1 & n && (l = 1 - l), n !== Ae(e._tTime, d) && (c = 1 - l, e.vars.repeatRefresh && e._initted && e.invalidate())), l !== c || r || s || e._zTime === b || !t && e._zTime) {
              if (!e._initted && ze(e, t, s, a, m)) return;
              for (o = e._zTime, e._zTime = t || (a ? b : 0), a || (a = t && !o), e.ratio = l, e._from && (l = 1 - l), e._time = 0, e._tTime = m, i = e._pt; i;) i.r(l, i.d), i = i._next;
              t < 0 && Se(e, t, 0, !0), e._onUpdate && !a && lt(e, "onUpdate"), m && e._repeat && !a && e.parent && lt(e, "onRepeat"), (t >= e._tDur || t < 0) && e.ratio === l && (l && je(e, 1), a || r || (lt(e, l ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()))
            } else e._zTime || (e._zTime = t)
          })(this, e, t, a);
          return this
        }
        targets() {
          return this._targets
        }
        invalidate(e) {
          return (!e || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(e), super.invalidate(e)
        }
        resetTo(e, t, a, s) {
          g || xt.wake(), this._ts || this.play();
          let r, i = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
          return this._initted || Gt(this, i), r = this._ease(i / this._dur), ((e, t, a, s, r, i, n) => {
            let o, c, l, d, m = (e._pt && e._ptCache || (e._ptCache = {}))[t];
            if (!m)
              for (m = e._ptCache[t] = [], l = e._ptLookup, d = e._targets.length; d--;) {
                if (o = l[d][t], o && o.d && o.d._pt)
                  for (o = o.d._pt; o && o.p !== t && o.fp !== t;) o = o._next;
                if (!o) return Vt = 1, e.vars[t] = "+=0", Gt(e, n), Vt = 0, 1;
                m.push(o)
              }
            for (d = m.length; d--;) c = m[d], o = c._pt || c, o.s = !s && 0 !== s || r ? o.s + (s || 0) + i * o.c : s, o.c = a - o.s, c.e && (c.e = le(a) + We(c.e)), c.b && (c.b = o.s + We(c.b))
          })(this, e, t, a, s, r, i) ? this.resetTo(e, t, a, s) : (Le(this, 0), this.parent || xe(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
        }
        kill(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "all";
          if (!(e || t && "all" !== t)) return this._lazy = this._pt = 0, this.parent ? dt(this) : this;
          if (this.timeline) {
            let a = this.timeline.totalDuration();
            return this.timeline.killTweensOf(e, t, Bt && !0 !== Bt.vars.overwrite)._first || dt(this), this.parent && a !== this.timeline.totalDuration() && Ve(this, this._dur * this.timeline._tDur / a, 0, 1), this
          }
          let a, s, r, i, n, o, c, l = this._targets,
            d = e ? Ye(e) : l,
            m = this._ptLookup,
            u = this._pt;
          if ((!t || "all" === t) && ((e, t) => {
              let a = e.length,
                s = a === t.length;
              for (; s && a-- && e[a] === t[a];);
              return a < 0
            })(l, d)) return "all" === t && (this._pt = 0), dt(this);
          for ((a = this._op = this._op || [], "all" !== t && (j(t) && (n = {}, ce(t, (e => n[e] = 1)), t = n), t = ((e, t) => {
              let a, s, r, i, n = e[0] ? ne(e[0]).harness : 0,
                o = n && n.aliases;
              if (!o) return t;
              for (s in a = ke({}, t), o)
                if (s in a)
                  for (i = o[s].split(","), r = i.length; r--;) a[i[r]] = a[s];
              return a
            })(l, t)), c = l.length); c--;)
            if (~d.indexOf(l[c]))
              for (n in s = m[c], "all" === t ? (a[c] = t, i = s, r = {}) : (r = a[c] = a[c] || {}, i = t), i) o = s && s[n], o && ("kill" in o.d && !0 !== o.d.kill(n) || ye(this, o, "_pt"), delete s[n]), "all" !== r && (r[n] = 1);
          return this._initted && !this._pt && u && dt(this), this
        }
        static to(e, t) {
          return new Xt(e, t, arguments[2])
        }
        static from(e, t) {
          return Ge(1, arguments)
        }
        static delayedCall(e, t, a, s) {
          return new Xt(t, 0, {
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: e,
            onComplete: t,
            onReverseComplete: t,
            onCompleteParams: a,
            onReverseCompleteParams: a,
            callbackScope: s
          })
        }
        static fromTo(e, t, a) {
          return Ge(2, arguments)
        }
        static set(e, t) {
          return t.duration = 0, t.repeatDelay || (t.repeat = 0), new Xt(e, t)
        }
        static killTweensOf(e, t, a) {
          return n.killTweensOf(e, t, a)
        }
      }
      be(Xt.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
      }), ce("staggerTo,staggerFrom,staggerFromTo", (e => {
        Xt[e] = function() {
          let t = new Dt,
            a = qe.call(arguments, 0);
          return a.splice("staggerFromTo" === e ? 5 : 4, 0, 0), t[e].apply(t, a)
        }
      }));
      let Yt = (e, t, a) => e[t] = a,
        Qt = (e, t, a) => e[t](a),
        Kt = (e, t, a, s) => e[t](s.fp, a),
        Zt = (e, t, a) => e.setAttribute(t, a),
        Jt = (e, t) => N(e[t]) ? Qt : T(e[t]) && e.setAttribute ? Zt : Yt,
        ea = (e, t) => t.set(t.t, t.p, Math.round(1e6 * (t.s + t.c * e)) / 1e6, t),
        ta = (e, t) => t.set(t.t, t.p, !!(t.s + t.c * e), t),
        aa = function(e, t) {
          let a = t._pt,
            s = "";
          if (!e && t.b) s = t.b;
          else if (1 === e && t.e) s = t.e;
          else {
            for (; a;) s = a.p + (a.m ? a.m(a.s + a.c * e) : Math.round(1e4 * (a.s + a.c * e)) / 1e4) + s, a = a._next;
            s += t.c
          }
          t.set(t.t, t.p, s, t)
        },
        sa = function(e, t) {
          let a = t._pt;
          for (; a;) a.r(e, a.d), a = a._next
        },
        ra = function(e, t, a, s) {
          let r, i = this._pt;
          for (; i;) r = i._next, i.p === s && i.modifier(e, t, a), i = r
        },
        ia = function(e) {
          let t, a, s = this._pt;
          for (; s;) a = s._next, s.p === e && !s.op || s.op === e ? ye(this, s, "_pt") : s.dep || (t = 1), s = a;
          return !t
        },
        na = (e, t, a, s) => {
          s.mSet(e, t, s.m.call(s.tween, a, s.mt), s)
        },
        oa = e => {
          let t, a, s, r, i = e._pt;
          for (; i;) {
            for (t = i._next, a = s; a && a.pr > i.pr;) a = a._next;
            (i._prev = a ? a._prev : r) ? i._prev._next = i: s = i, (i._next = a) ? a._prev = i : r = i, i = t
          }
          e._pt = s
        };
      class ca {
        constructor(e, t, a, s, r, i, n, o, c) {
          this.t = t, this.s = s, this.c = r, this.p = a, this.r = i || ea, this.d = n || this, this.set = o || Yt, this.pr = c || 0, this._next = e, e && (e._prev = this)
        }
        modifier(e, t, a) {
          this.mSet = this.mSet || this.set, this.set = na, this.m = e, this.mt = a, this.tween = t
        }
      }
      ce(re + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", (e => K[e] = 1)), F.TweenMax = F.TweenLite = Xt, F.TimelineLite = F.TimelineMax = Dt, n = new Dt({
        sortChildren: !1,
        defaults: p,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
      }), f.stringFilter = _t;
      let la = [],
        da = {},
        ma = [],
        ua = 0,
        ga = 0,
        fa = e => (da[e] || ma).map((e => e())),
        pa = () => {
          let e = Date.now(),
            t = [];
          e - ua > 2 && (fa("matchMediaInit"), la.forEach((e => {
            let a, s, r, i, n = e.queries,
              c = e.conditions;
            for (s in n) a = o.matchMedia(n[s]).matches, a && (r = 1), a !== c[s] && (c[s] = a, i = 1);
            i && (e.revert(), r && t.push(e))
          })), fa("matchMediaRevert"), t.forEach((e => e.onMatch(e))), ua = e, fa("matchMedia"))
        };
      class ha {
        constructor(e, t) {
          this.selector = t && Qe(t), this.data = [], this._r = [], this.isReverted = !1, this.id = ga++, e && this.add(e)
        }
        add(e, t, a) {
          N(e) && (a = t, t = e, e = N);
          let s = this,
            r = function() {
              let e, r = i,
                n = s.selector;
              return r && r !== s && r.data.push(s), a && (s.selector = Qe(a)), i = s, e = t.apply(s, arguments), N(e) && s._r.push(e), i = r, s.selector = n, s.isReverted = !1, e
            };
          return s.last = r, e === N ? r(s) : e ? s[e] = r : r
        }
        ignore(e) {
          let t = i;
          i = null, e(this), i = t
        }
        getTweens() {
          let e = [];
          return this.data.forEach((t => t instanceof ha ? e.push(...t.getTweens()) : t instanceof Xt && !(t.parent && "nested" === t.parent.data) && e.push(t))), e
        }
        clear() {
          this._r.length = this.data.length = 0
        }
        kill(e, t) {
          if (e) {
            let t = this.getTweens();
            this.data.forEach((e => {
              "isFlip" === e.data && (e.revert(), e.getChildren(!0, !0, !1).forEach((e => t.splice(t.indexOf(e), 1))))
            })), t.map((e => ({
              g: e.globalTime(0),
              t: e
            }))).sort(((e, t) => t.g - e.g || -1 / 0)).forEach((t => t.t.revert(e))), this.data.forEach((t => !(t instanceof Xt) && t.revert && t.revert(e))), this._r.forEach((t => t(e, this))), this.isReverted = !0
          } else this.data.forEach((e => e.kill && e.kill()));
          if (this.clear(), t) {
            let e = la.length;
            for (; e--;) la[e].id === this.id && la.splice(e, 1)
          }
        }
        revert(e) {
          this.kill(e || {})
        }
      }
      class ba {
        constructor(e) {
          this.contexts = [], this.scope = e
        }
        add(e, t, a) {
          C(e) || (e = {
            matches: e
          });
          let s, r, n, c = new ha(0, a || this.scope),
            l = c.conditions = {};
          for (r in i && !c.selector && (c.selector = i.selector), this.contexts.push(c), t = c.add("onMatch", t), c.queries = e, e) "all" === r ? n = 1 : (s = o.matchMedia(e[r]), s && (la.indexOf(c) < 0 && la.push(c), (l[r] = s.matches) && (n = 1), s.addListener ? s.addListener(pa) : s.addEventListener("change", pa)));
          return n && t(c), this
        }
        revert(e) {
          this.kill(e || {})
        }
        kill(e) {
          this.contexts.forEach((t => t.kill(e, !0)))
        }
      }
      const ka = {
        registerPlugin() {
          for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
          t.forEach((e => ut(e)))
        },
        timeline: e => new Dt(e),
        getTweensOf: (e, t) => n.getTweensOf(e, t),
        getProperty(e, t, a, s) {
          j(e) && (e = Ye(e)[0]);
          let r = ne(e || {}).get,
            i = a ? he : pe;
          return "native" === a && (a = ""), e ? t ? i((ee[t] && ee[t].get || r)(e, t, a, s)) : (t, a, s) => i((ee[t] && ee[t].get || r)(e, t, a, s)) : e
        },
        quickSetter(e, t, a) {
          if ((e = Ye(e)).length > 1) {
            let s = e.map((e => _a.quickSetter(e, t, a))),
              r = s.length;
            return e => {
              let t = r;
              for (; t--;) s[t](e)
            }
          }
          e = e[0] || {};
          let s = ee[t],
            r = ne(e),
            i = r.harness && (r.harness.aliases || {})[t] || t,
            n = s ? t => {
              let r = new s;
              u._pt = 0, r.init(e, a ? t + a : t, u, 0, [e]), r.render(1, r), u._pt && sa(1, u)
            } : r.set(e, i);
          return s ? n : t => n(e, i, a ? t + a : t, r, 1)
        },
        quickTo(e, t, a) {
          let s = _a.to(e, ke({
              [t]: "+=0.1",
              paused: !0
            }, a || {})),
            r = (e, a, r) => s.resetTo(t, e, a, r);
          return r.tween = s, r
        },
        isTweening: e => n.getTweensOf(e, !0).length > 0,
        defaults: e => (e && e.ease && (e.ease = It(e.ease, p.ease)), ve(p, e || {})),
        config: e => ve(f, e || {}),
        registerEffect(e) {
          let {
            name: t,
            effect: a,
            plugins: s,
            defaults: r,
            extendTimeline: i
          } = e;
          (s || "").split(",").forEach((e => e && !ee[e] && !F[e] && U(t + " effect requires " + e + " plugin."))), te[t] = (e, t, s) => a(Ye(e), be(t || {}, r), s), i && (Dt.prototype[t] = function(e, a, s) {
            return this.add(te[t](e, C(a) ? a : (s = a) && {}, this), s)
          })
        },
        registerEase(e, t) {
          jt[e] = It(t)
        },
        parseEase(e, t) {
          return arguments.length ? It(e, t) : jt
        },
        getById: e => n.getById(e),
        exportRoot() {
          let e, t, a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            s = arguments.length > 1 ? arguments[1] : void 0,
            r = new Dt(a);
          for (r.smoothChildTiming = A(a.smoothChildTiming), n.remove(r), r._dp = 0, r._time = r._tTime = n._time, e = n._first; e;) t = e._next, !s && !e._dur && e instanceof Xt && e.vars.onComplete === e._targets[0] || Pe(r, e, e._start - e._delay), e = t;
          return Pe(n, r, 0), r
        },
        context: (e, t) => e ? new ha(e, t) : i,
        matchMedia: e => new ba(e),
        matchMediaRefresh: () => la.forEach((e => {
          let t, a, s = e.conditions;
          for (a in s) s[a] && (s[a] = !1, t = 1);
          t && e.revert()
        })) || pa(),
        addEventListener(e, t) {
          let a = da[e] || (da[e] = []);
          ~a.indexOf(t) || a.push(t)
        },
        removeEventListener(e, t) {
          let a = da[e],
            s = a && a.indexOf(t);
          s >= 0 && a.splice(s, 1)
        },
        utils: {
          wrap: st,
          wrapYoyo: rt,
          distribute: Ze,
          random: tt,
          snap: et,
          normalize: (e, t, a) => nt(e, t, 0, 1, a),
          getUnit: We,
          clamp: (e, t, a) => He(a, (a => Ue(e, t, a))),
          splitColor: ht,
          toArray: Ye,
          selector: Qe,
          mapRange: nt,
          pipe: function() {
            for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
            return e => t.reduce(((e, t) => t(e)), e)
          },
          unitize: (e, t) => a => e(parseFloat(a)) + (t || We(a)),
          interpolate: ot,
          shuffle: Ke
        },
        install: G,
        effects: te,
        ticker: xt,
        updateRoot: Dt.updateRoot,
        plugins: ee,
        globalTimeline: n,
        core: {
          PropTween: ca,
          globals: W,
          Tween: Xt,
          Timeline: Dt,
          Animation: zt,
          getCache: ne,
          _removeLinkedListItem: ye,
          reverting: () => r,
          context: e => (e && i && (i.data.push(e), e._ctx = i), i),
          suppressOverwrites: e => s = e
        }
      };
      ce("to,from,fromTo,delayedCall,set,killTweensOf", (e => ka[e] = Xt[e])), xt.add(Dt.updateRoot), u = ka.to({}, {
        duration: 0
      });
      let va = (e, t) => {
          let a = e._pt;
          for (; a && a.p !== t && a.op !== t && a.fp !== t;) a = a._next;
          return a
        },
        wa = (e, t) => ({
          name: e,
          rawVars: 1,
          init(e, a, s) {
            s._onInit = e => {
              let s, r;
              if (j(a) && (s = {}, ce(a, (e => s[e] = 1)), a = s), t) {
                for (r in s = {}, a) s[r] = t(a[r]);
                a = s
              }((e, t) => {
                let a, s, r, i = e._targets;
                for (a in t)
                  for (s = i.length; s--;) r = e._ptLookup[s][a], r && (r = r.d) && (r._pt && (r = va(r, a)), r && r.modifier && r.modifier(t[a], e, i[s], a))
              })(e, a)
            }
          }
        });
      const _a = ka.registerPlugin({
        name: "attr",
        init(e, t, a, s, r) {
          let i, n, o;
          for (i in this.tween = a, t) o = e.getAttribute(i) || "", n = this.add(e, "setAttribute", (o || 0) + "", t[i], s, r, 0, 0, i), n.op = i, n.b = o, this._props.push(i)
        },
        render(e, t) {
          let a = t._pt;
          for (; a;) r ? a.set(a.t, a.p, a.b, a) : a.r(e, a.d), a = a._next
        }
      }, {
        name: "endArray",
        init(e, t) {
          let a = t.length;
          for (; a--;) this.add(e, a, e[a] || 0, t[a], 0, 0, 0, 0, 0, 1)
        }
      }, wa("roundProps", Je), wa("modifiers"), wa("snap", et)) || ka;
      Xt.version = Dt.version = _a.version = "3.12.2", d = 1, I() && yt();
      const {
        Power0: xa,
        Power1: ya,
        Power2: ja,
        Power3: Na,
        Power4: Sa,
        Linear: Ta,
        Quad: Ca,
        Cubic: Aa,
        Quart: Ia,
        Quint: Ma,
        Strong: La,
        Elastic: Ea,
        Back: Pa,
        SteppedEase: Oa,
        Bounce: za,
        Sine: Da,
        Expo: Ba,
        Circ: Va
      } = jt;
      let $a, Fa, Ra, Ga, Ha, Ua, Wa, qa, Xa, Ya = {},
        Qa = 180 / Math.PI,
        Ka = Math.PI / 180,
        Za = Math.atan2,
        Ja = /([A-Z])/g,
        es = /(left|right|width|margin|padding|x)/i,
        ts = /[\s,\(]\S/,
        as = {
          autoAlpha: "opacity,visibility",
          scale: "scaleX,scaleY",
          alpha: "opacity"
        },
        ss = (e, t) => t.set(t.t, t.p, Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u, t),
        rs = (e, t) => t.set(t.t, t.p, 1 === e ? t.e : Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u, t),
        is = (e, t) => t.set(t.t, t.p, e ? Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u : t.b, t),
        ns = (e, t) => {
          let a = t.s + t.c * e;
          t.set(t.t, t.p, ~~(a + (a < 0 ? -.5 : .5)) + t.u, t)
        },
        os = (e, t) => t.set(t.t, t.p, e ? t.e : t.b, t),
        cs = (e, t) => t.set(t.t, t.p, 1 !== e ? t.b : t.e, t),
        ls = (e, t, a) => e.style[t] = a,
        ds = (e, t, a) => e.style.setProperty(t, a),
        ms = (e, t, a) => e._gsap[t] = a,
        us = (e, t, a) => e._gsap.scaleX = e._gsap.scaleY = a,
        gs = (e, t, a, s, r) => {
          let i = e._gsap;
          i.scaleX = i.scaleY = a, i.renderTransform(r, i)
        },
        fs = (e, t, a, s, r) => {
          let i = e._gsap;
          i[t] = a, i.renderTransform(r, i)
        },
        ps = "transform",
        hs = ps + "Origin",
        bs = function(e, t) {
          let a = this.target,
            s = a.style;
          if (e in Ya && s) {
            if (this.tfm = this.tfm || {}, "transform" === e) return as.transform.split(",").forEach((e => bs.call(this, e, t)));
            if (~(e = as[e] || e).indexOf(",") ? e.split(",").forEach((e => this.tfm[e] = Os(a, e))) : this.tfm[e] = a._gsap.x ? a._gsap[e] : Os(a, e), this.props.indexOf(ps) >= 0) return;
            a._gsap.svg && (this.svgo = a.getAttribute("data-svg-origin"), this.props.push(hs, t, "")), e = ps
          }(s || t) && this.props.push(e, t, s[e])
        },
        ks = e => {
          e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"))
        },
        vs = function() {
          let e, t, a = this.props,
            s = this.target,
            r = s.style,
            i = s._gsap;
          for (e = 0; e < a.length; e += 3) a[e + 1] ? s[a[e]] = a[e + 2] : a[e + 2] ? r[a[e]] = a[e + 2] : r.removeProperty("--" === a[e].substr(0, 2) ? a[e] : a[e].replace(Ja, "-$1").toLowerCase());
          if (this.tfm) {
            for (t in this.tfm) i[t] = this.tfm[t];
            i.svg && (i.renderTransform(), s.setAttribute("data-svg-origin", this.svgo || "")), e = qa(), e && e.isStart || r[ps] || (ks(r), i.uncache = 1)
          }
        },
        ws = (e, t) => {
          let a = {
            target: e,
            props: [],
            revert: vs,
            save: bs
          };
          return e._gsap || _a.core.getCache(e), t && t.split(",").forEach((e => a.save(e))), a
        },
        _s = (e, t) => {
          let a = Fa.createElementNS ? Fa.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : Fa.createElement(e);
          return a.style ? a : Fa.createElement(e)
        },
        xs = (e, t, a) => {
          let s = getComputedStyle(e);
          return s[t] || s.getPropertyValue(t.replace(Ja, "-$1").toLowerCase()) || s.getPropertyValue(t) || !a && xs(e, js(t) || t, 1) || ""
        },
        ys = "O,Moz,ms,Ms,Webkit".split(","),
        js = (e, t, a) => {
          let s = (t || Ha).style,
            r = 5;
          if (e in s && !a) return e;
          for (e = e.charAt(0).toUpperCase() + e.substr(1); r-- && !(ys[r] + e in s););
          return r < 0 ? null : (3 === r ? "ms" : r >= 0 ? ys[r] : "") + e
        },
        Ns = () => {
          "undefined" != typeof window && window.document && ($a = window, Fa = $a.document, Ra = Fa.documentElement, Ha = _s("div") || {
            style: {}
          }, Ua = _s("div"), ps = js(ps), hs = ps + "Origin", Ha.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Xa = !!js("perspective"), qa = _a.core.reverting, Ga = 1)
        },
        Ss = function(e) {
          let t, a = _s("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
            s = this.parentNode,
            r = this.nextSibling,
            i = this.style.cssText;
          if (Ra.appendChild(a), a.appendChild(this), this.style.display = "block", e) try {
            t = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = Ss
          } catch (e) {} else this._gsapBBox && (t = this._gsapBBox());
          return s && (r ? s.insertBefore(this, r) : s.appendChild(this)), Ra.removeChild(a), this.style.cssText = i, t
        },
        Ts = (e, t) => {
          let a = t.length;
          for (; a--;)
            if (e.hasAttribute(t[a])) return e.getAttribute(t[a])
        },
        Cs = e => {
          let t;
          try {
            t = e.getBBox()
          } catch (a) {
            t = Ss.call(e, !0)
          }
          return t && (t.width || t.height) || e.getBBox === Ss || (t = Ss.call(e, !0)), !t || t.width || t.x || t.y ? t : {
            x: +Ts(e, ["x", "cx", "x1"]) || 0,
            y: +Ts(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
          }
        },
        As = e => !(!e.getCTM || e.parentNode && !e.ownerSVGElement || !Cs(e)),
        Is = (e, t) => {
          if (t) {
            let a = e.style;
            t in Ya && t !== hs && (t = ps), a.removeProperty ? ("ms" !== t.substr(0, 2) && "webkit" !== t.substr(0, 6) || (t = "-" + t), a.removeProperty(t.replace(Ja, "-$1").toLowerCase())) : a.removeAttribute(t)
          }
        },
        Ms = (e, t, a, s, r, i) => {
          let n = new ca(e._pt, t, a, 0, 1, i ? cs : os);
          return e._pt = n, n.b = s, n.e = r, e._props.push(a), n
        },
        Ls = {
          deg: 1,
          rad: 1,
          turn: 1
        },
        Es = {
          grid: 1,
          flex: 1
        },
        Ps = (e, t, a, s) => {
          let r, i, n, o, c = parseFloat(a) || 0,
            l = (a + "").trim().substr((c + "").length) || "px",
            d = Ha.style,
            m = es.test(t),
            u = "svg" === e.tagName.toLowerCase(),
            g = (u ? "client" : "offset") + (m ? "Width" : "Height"),
            f = 100,
            p = "px" === s,
            h = "%" === s;
          return s === l || !c || Ls[s] || Ls[l] ? c : ("px" !== l && !p && (c = Ps(e, t, a, "px")), o = e.getCTM && As(e), !h && "%" !== l || !Ya[t] && !~t.indexOf("adius") ? (d[m ? "width" : "height"] = f + (p ? l : s), i = ~t.indexOf("adius") || "em" === s && e.appendChild && !u ? e : e.parentNode, o && (i = (e.ownerSVGElement || {}).parentNode), i && i !== Fa && i.appendChild || (i = Fa.body), n = i._gsap, n && h && n.width && m && n.time === xt.time && !n.uncache ? le(c / n.width * f) : ((h || "%" === l) && !Es[xs(i, "display")] && (d.position = xs(e, "position")), i === e && (d.position = "static"), i.appendChild(Ha), r = Ha[g], i.removeChild(Ha), d.position = "absolute", m && h && (n = ne(i), n.time = xt.time, n.width = i[g]), le(p ? r * c / f : r && c ? f / r * c : 0))) : (r = o ? e.getBBox()[m ? "width" : "height"] : e[g], le(h ? c / r * f : c / 100 * r)))
        },
        Os = (e, t, a, s) => {
          let r;
          return Ga || Ns(), t in as && "transform" !== t && ~(t = as[t]).indexOf(",") && (t = t.split(",")[0]), Ya[t] && "transform" !== t ? (r = qs(e, s), r = "transformOrigin" !== t ? r[t] : r.svg ? r.origin : Xs(xs(e, hs)) + " " + r.zOrigin + "px") : (r = e.style[t], (!r || "auto" === r || s || ~(r + "").indexOf("calc(")) && (r = $s[t] && $s[t](e, t, a) || xs(e, t) || oe(e, t) || ("opacity" === t ? 1 : 0))), a && !~(r + "").trim().indexOf(" ") ? Ps(e, t, r, a) + a : r
        },
        zs = function(e, t, a, s) {
          if (!a || "none" === a) {
            let s = js(t, e, 1),
              r = s && xs(e, s, 1);
            r && r !== a ? (t = s, a = r) : "borderColor" === t && (a = xs(e, "borderTopColor"))
          }
          let r, i, n, o, c, l, d, m, u, g, p, h, b = new ca(this._pt, e.style, t, 0, 1, aa),
            k = 0,
            v = 0;
          if (b.b = a, b.e = s, a += "", "auto" == (s += "") && (e.style[t] = s, s = xs(e, t) || s, e.style[t] = a), r = [a, s], _t(r), s = r[1], n = (a = r[0]).match(z) || [], h = s.match(z) || [], h.length) {
            for (; i = z.exec(s);) d = i[0], u = s.substring(k, i.index), c ? c = (c + 1) % 5 : "rgba(" !== u.substr(-5) && "hsla(" !== u.substr(-5) || (c = 1), d !== (l = n[v++] || "") && (o = parseFloat(l) || 0, p = l.substr((o + "").length), "=" === d.charAt(1) && (d = me(o, d) + p), m = parseFloat(d), g = d.substr((m + "").length), k = z.lastIndex - g.length, g || (g = g || f.units[t] || p, k === s.length && (s += g, b.e += g)), p !== g && (o = Ps(e, t, l, g) || 0), b._pt = {
              _next: b._pt,
              p: u || 1 === v ? u : ",",
              s: o,
              c: m - o,
              m: c && c < 4 || "zIndex" === t ? Math.round : 0
            });
            b.c = k < s.length ? s.substring(k, s.length) : ""
          } else b.r = "display" === t && "none" === s ? cs : os;
          return B.test(s) && (b.e = 0), this._pt = b, b
        },
        Ds = {
          top: "0%",
          bottom: "100%",
          left: "0%",
          right: "100%",
          center: "50%"
        },
        Bs = e => {
          let t = e.split(" "),
            a = t[0],
            s = t[1] || "50%";
          return "top" !== a && "bottom" !== a && "left" !== s && "right" !== s || (e = a, a = s, s = e), t[0] = Ds[a] || a, t[1] = Ds[s] || s, t.join(" ")
        },
        Vs = (e, t) => {
          if (t.tween && t.tween._time === t.tween._dur) {
            let e, a, s, r = t.t,
              i = r.style,
              n = t.u,
              o = r._gsap;
            if ("all" === n || !0 === n) i.cssText = "", a = 1;
            else
              for (n = n.split(","), s = n.length; --s > -1;) e = n[s], Ya[e] && (a = 1, e = "transformOrigin" === e ? hs : ps), Is(r, e);
            a && (Is(r, ps), o && (o.svg && r.removeAttribute("transform"), qs(r, 1), o.uncache = 1, ks(i)))
          }
        },
        $s = {
          clearProps(e, t, a, s, r) {
            if ("isFromStart" !== r.data) {
              let i = e._pt = new ca(e._pt, t, a, 0, 0, Vs);
              return i.u = s, i.pr = -10, i.tween = r, e._props.push(a), 1
            }
          }
        },
        Fs = [1, 0, 0, 1, 0, 0],
        Rs = {},
        Gs = e => "matrix(1, 0, 0, 1, 0, 0)" === e || "none" === e || !e,
        Hs = e => {
          let t = xs(e, ps);
          return Gs(t) ? Fs : t.substr(7).match(O).map(le)
        },
        Us = (e, t) => {
          let a, s, r, i, n = e._gsap || ne(e),
            o = e.style,
            c = Hs(e);
          return n.svg && e.getAttribute("transform") ? (r = e.transform.baseVal.consolidate().matrix, c = [r.a, r.b, r.c, r.d, r.e, r.f], "1,0,0,1,0,0" === c.join(",") ? Fs : c) : (c !== Fs || e.offsetParent || e === Ra || n.svg || (r = o.display, o.display = "block", a = e.parentNode, a && e.offsetParent || (i = 1, s = e.nextElementSibling, Ra.appendChild(e)), c = Hs(e), r ? o.display = r : Is(e, "display"), i && (s ? a.insertBefore(e, s) : a ? a.appendChild(e) : Ra.removeChild(e))), t && c.length > 6 ? [c[0], c[1], c[4], c[5], c[12], c[13]] : c)
        },
        Ws = (e, t, a, s, r, i) => {
          let n, o, c, l, d = e._gsap,
            m = r || Us(e, !0),
            u = d.xOrigin || 0,
            g = d.yOrigin || 0,
            f = d.xOffset || 0,
            p = d.yOffset || 0,
            h = m[0],
            b = m[1],
            k = m[2],
            v = m[3],
            w = m[4],
            _ = m[5],
            x = t.split(" "),
            y = parseFloat(x[0]) || 0,
            j = parseFloat(x[1]) || 0;
          a ? m !== Fs && (o = h * v - b * k) && (c = y * (v / o) + j * (-k / o) + (k * _ - v * w) / o, l = y * (-b / o) + j * (h / o) - (h * _ - b * w) / o, y = c, j = l) : (n = Cs(e), y = n.x + (~x[0].indexOf("%") ? y / 100 * n.width : y), j = n.y + (~(x[1] || x[0]).indexOf("%") ? j / 100 * n.height : j)), s || !1 !== s && d.smooth ? (w = y - u, _ = j - g, d.xOffset = f + (w * h + _ * k) - w, d.yOffset = p + (w * b + _ * v) - _) : d.xOffset = d.yOffset = 0, d.xOrigin = y, d.yOrigin = j, d.smooth = !!s, d.origin = t, d.originIsAbsolute = !!a, e.style[hs] = "0px 0px", i && (Ms(i, d, "xOrigin", u, y), Ms(i, d, "yOrigin", g, j), Ms(i, d, "xOffset", f, d.xOffset), Ms(i, d, "yOffset", p, d.yOffset)), e.setAttribute("data-svg-origin", y + " " + j)
        },
        qs = (e, t) => {
          let a = e._gsap || new Ot(e);
          if ("x" in a && !t && !a.uncache) return a;
          let s, r, i, n, o, c, l, d, m, u, g, p, h, b, k, v, w, _, x, y, j, N, S, T, C, A, I, M, L, E, P, O, z = e.style,
            D = a.scaleX < 0,
            B = "px",
            V = "deg",
            $ = getComputedStyle(e),
            F = xs(e, hs) || "0";
          return s = r = i = c = l = d = m = u = g = 0, n = o = 1, a.svg = !(!e.getCTM || !As(e)), $.translate && ("none" === $.translate && "none" === $.scale && "none" === $.rotate || (z[ps] = ("none" !== $.translate ? "translate3d(" + ($.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== $.rotate ? "rotate(" + $.rotate + ") " : "") + ("none" !== $.scale ? "scale(" + $.scale.split(" ").join(",") + ") " : "") + ("none" !== $[ps] ? $[ps] : "")), z.scale = z.rotate = z.translate = "none"), b = Us(e, a.svg), a.svg && (a.uncache ? (C = e.getBBox(), F = a.xOrigin - C.x + "px " + (a.yOrigin - C.y) + "px", T = "") : T = !t && e.getAttribute("data-svg-origin"), Ws(e, T || F, !!T || a.originIsAbsolute, !1 !== a.smooth, b)), p = a.xOrigin || 0, h = a.yOrigin || 0, b !== Fs && (_ = b[0], x = b[1], y = b[2], j = b[3], s = N = b[4], r = S = b[5], 6 === b.length ? (n = Math.sqrt(_ * _ + x * x), o = Math.sqrt(j * j + y * y), c = _ || x ? Za(x, _) * Qa : 0, m = y || j ? Za(y, j) * Qa + c : 0, m && (o *= Math.abs(Math.cos(m * Ka))), a.svg && (s -= p - (p * _ + h * y), r -= h - (p * x + h * j))) : (O = b[6], E = b[7], I = b[8], M = b[9], L = b[10], P = b[11], s = b[12], r = b[13], i = b[14], k = Za(O, L), l = k * Qa, k && (v = Math.cos(-k), w = Math.sin(-k), T = N * v + I * w, C = S * v + M * w, A = O * v + L * w, I = N * -w + I * v, M = S * -w + M * v, L = O * -w + L * v, P = E * -w + P * v, N = T, S = C, O = A), k = Za(-y, L), d = k * Qa, k && (v = Math.cos(-k), w = Math.sin(-k), T = _ * v - I * w, C = x * v - M * w, A = y * v - L * w, P = j * w + P * v, _ = T, x = C, y = A), k = Za(x, _), c = k * Qa, k && (v = Math.cos(k), w = Math.sin(k), T = _ * v + x * w, C = N * v + S * w, x = x * v - _ * w, S = S * v - N * w, _ = T, N = C), l && Math.abs(l) + Math.abs(c) > 359.9 && (l = c = 0, d = 180 - d), n = le(Math.sqrt(_ * _ + x * x + y * y)), o = le(Math.sqrt(S * S + O * O)), k = Za(N, S), m = Math.abs(k) > 2e-4 ? k * Qa : 0, g = P ? 1 / (P < 0 ? -P : P) : 0), a.svg && (T = e.getAttribute("transform"), a.forceCSS = e.setAttribute("transform", "") || !Gs(xs(e, ps)), T && e.setAttribute("transform", T))), Math.abs(m) > 90 && Math.abs(m) < 270 && (D ? (n *= -1, m += c <= 0 ? 180 : -180, c += c <= 0 ? 180 : -180) : (o *= -1, m += m <= 0 ? 180 : -180)), t = t || a.uncache, a.x = s - ((a.xPercent = s && (!t && a.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-s) ? -50 : 0))) ? e.offsetWidth * a.xPercent / 100 : 0) + B, a.y = r - ((a.yPercent = r && (!t && a.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-r) ? -50 : 0))) ? e.offsetHeight * a.yPercent / 100 : 0) + B, a.z = i + B, a.scaleX = le(n), a.scaleY = le(o), a.rotation = le(c) + V, a.rotationX = le(l) + V, a.rotationY = le(d) + V, a.skewX = m + V, a.skewY = u + V, a.transformPerspective = g + B, (a.zOrigin = parseFloat(F.split(" ")[2]) || 0) && (z[hs] = Xs(F)), a.xOffset = a.yOffset = 0, a.force3D = f.force3D, a.renderTransform = a.svg ? tr : Xa ? er : Qs, a.uncache = 0, a
        },
        Xs = e => (e = e.split(" "))[0] + " " + e[1],
        Ys = (e, t, a) => {
          let s = We(t);
          return le(parseFloat(t) + parseFloat(Ps(e, "x", a + "px", s))) + s
        },
        Qs = (e, t) => {
          t.z = "0px", t.rotationY = t.rotationX = "0deg", t.force3D = 0, er(e, t)
        },
        Ks = "0deg",
        Zs = "0px",
        Js = ") ",
        er = function(e, t) {
          let {
            xPercent: a,
            yPercent: s,
            x: r,
            y: i,
            z: n,
            rotation: o,
            rotationY: c,
            rotationX: l,
            skewX: d,
            skewY: m,
            scaleX: u,
            scaleY: g,
            transformPerspective: f,
            force3D: p,
            target: h,
            zOrigin: b
          } = t || this, k = "", v = "auto" === p && e && 1 !== e || !0 === p;
          if (b && (l !== Ks || c !== Ks)) {
            let e, t = parseFloat(c) * Ka,
              a = Math.sin(t),
              s = Math.cos(t);
            t = parseFloat(l) * Ka, e = Math.cos(t), r = Ys(h, r, a * e * -b), i = Ys(h, i, -Math.sin(t) * -b), n = Ys(h, n, s * e * -b + b)
          }
          f !== Zs && (k += "perspective(" + f + Js), (a || s) && (k += "translate(" + a + "%, " + s + "%) "), (v || r !== Zs || i !== Zs || n !== Zs) && (k += n !== Zs || v ? "translate3d(" + r + ", " + i + ", " + n + ") " : "translate(" + r + ", " + i + Js), o !== Ks && (k += "rotate(" + o + Js), c !== Ks && (k += "rotateY(" + c + Js), l !== Ks && (k += "rotateX(" + l + Js), d === Ks && m === Ks || (k += "skew(" + d + ", " + m + Js), 1 === u && 1 === g || (k += "scale(" + u + ", " + g + Js), h.style[ps] = k || "translate(0, 0)"
        },
        tr = function(e, t) {
          let a, s, r, i, n, {
              xPercent: o,
              yPercent: c,
              x: l,
              y: d,
              rotation: m,
              skewX: u,
              skewY: g,
              scaleX: f,
              scaleY: p,
              target: h,
              xOrigin: b,
              yOrigin: k,
              xOffset: v,
              yOffset: w,
              forceCSS: _
            } = t || this,
            x = parseFloat(l),
            y = parseFloat(d);
          m = parseFloat(m), u = parseFloat(u), g = parseFloat(g), g && (g = parseFloat(g), u += g, m += g), m || u ? (m *= Ka, u *= Ka, a = Math.cos(m) * f, s = Math.sin(m) * f, r = Math.sin(m - u) * -p, i = Math.cos(m - u) * p, u && (g *= Ka, n = Math.tan(u - g), n = Math.sqrt(1 + n * n), r *= n, i *= n, g && (n = Math.tan(g), n = Math.sqrt(1 + n * n), a *= n, s *= n)), a = le(a), s = le(s), r = le(r), i = le(i)) : (a = f, i = p, s = r = 0), (x && !~(l + "").indexOf("px") || y && !~(d + "").indexOf("px")) && (x = Ps(h, "x", l, "px"), y = Ps(h, "y", d, "px")), (b || k || v || w) && (x = le(x + b - (b * a + k * r) + v), y = le(y + k - (b * s + k * i) + w)), (o || c) && (n = h.getBBox(), x = le(x + o / 100 * n.width), y = le(y + c / 100 * n.height)), n = "matrix(" + a + "," + s + "," + r + "," + i + "," + x + "," + y + ")", h.setAttribute("transform", n), _ && (h.style[ps] = n)
        },
        ar = function(e, t, a, s, r) {
          let i, n, o = 360,
            c = j(r),
            l = parseFloat(r) * (c && ~r.indexOf("rad") ? Qa : 1) - s,
            d = s + l + "deg";
          return c && (i = r.split("_")[1], "short" === i && (l %= o, l !== l % 180 && (l += l < 0 ? o : -360)), "cw" === i && l < 0 ? l = (l + 36e9) % o - ~~(l / o) * o : "ccw" === i && l > 0 && (l = (l - 36e9) % o - ~~(l / o) * o)), e._pt = n = new ca(e._pt, t, a, s, l, rs), n.e = d, n.u = "deg", e._props.push(a), n
        },
        sr = (e, t) => {
          for (let a in t) e[a] = t[a];
          return e
        },
        rr = (e, t, a) => {
          let s, r, i, n, o, c, l, d, m = sr({}, a._gsap),
            u = a.style;
          for (r in m.svg ? (i = a.getAttribute("transform"), a.setAttribute("transform", ""), u[ps] = t, s = qs(a, 1), Is(a, ps), a.setAttribute("transform", i)) : (i = getComputedStyle(a)[ps], u[ps] = t, s = qs(a, 1), u[ps] = i), Ya) i = m[r], n = s[r], i !== n && "perspective,force3D,transformOrigin,svgOrigin".indexOf(r) < 0 && (l = We(i), d = We(n), o = l !== d ? Ps(a, r, i, d) : parseFloat(i), c = parseFloat(n), e._pt = new ca(e._pt, s, r, o, c - o, ss), e._pt.u = d || 0, e._props.push(r));
          sr(s, m)
        };
      ce("padding,margin,Width,Radius", ((e, t) => {
        let a = "Top",
          s = "Right",
          r = "Bottom",
          i = "Left",
          n = (t < 3 ? [a, s, r, i] : [a + i, a + s, r + s, r + i]).map((a => t < 2 ? e + a : "border" + a + e));
        $s[t > 1 ? "border" + e : e] = function(e, t, a, s, r) {
          let i, o;
          if (arguments.length < 4) return i = n.map((t => Os(e, t, a))), o = i.join(" "), 5 === o.split(i[0]).length ? i[0] : o;
          i = (s + "").split(" "), o = {}, n.forEach(((e, t) => o[e] = i[t] = i[t] || i[(t - 1) / 2 | 0])), e.init(t, o, r)
        }
      }));
      const ir = {
        name: "css",
        register: Ns,
        targetTest: e => e.style && e.nodeType,
        init(e, t, a, s, r) {
          let i, n, o, c, l, d, m, u, g, p, h, b, k, v, w, _, x = this._props,
            y = e.style,
            N = a.vars.startAt;
          for (m in Ga || Ns(), this.styles = this.styles || ws(e), _ = this.styles.props, this.tween = a, t)
            if ("autoRound" !== m && (n = t[m], !ee[m] || !Rt(m, t, a, s, e, r)))
              if (l = typeof n, d = $s[m], "function" === l && (n = n.call(a, s, e, r), l = typeof n), "string" === l && ~n.indexOf("random(") && (n = it(n)), d) d(this, e, m, n, a) && (w = 1);
              else if ("--" === m.substr(0, 2)) i = (getComputedStyle(e).getPropertyValue(m) + "").trim(), n += "", vt.lastIndex = 0, vt.test(i) || (u = We(i), g = We(n)), g ? u !== g && (i = Ps(e, m, i, g) + g) : u && (n += u), this.add(y, "setProperty", i, n, s, r, 0, 0, m), x.push(m), _.push(m, 0, y[m]);
          else if ("undefined" !== l) {
            if (N && m in N ? (i = "function" == typeof N[m] ? N[m].call(a, s, e, r) : N[m], j(i) && ~i.indexOf("random(") && (i = it(i)), We(i + "") || (i += f.units[m] || We(Os(e, m)) || ""), "=" === (i + "").charAt(1) && (i = Os(e, m))) : i = Os(e, m), c = parseFloat(i), p = "string" === l && "=" === n.charAt(1) && n.substr(0, 2), p && (n = n.substr(2)), o = parseFloat(n), m in as && ("autoAlpha" === m && (1 === c && "hidden" === Os(e, "visibility") && o && (c = 0), _.push("visibility", 0, y.visibility), Ms(this, y, "visibility", c ? "inherit" : "hidden", o ? "inherit" : "hidden", !o)), "scale" !== m && "transform" !== m && (m = as[m], ~m.indexOf(",") && (m = m.split(",")[0]))), h = m in Ya, h)
              if (this.styles.save(m), b || (k = e._gsap, k.renderTransform && !t.parseTransform || qs(e, t.parseTransform), v = !1 !== t.smoothOrigin && k.smooth, b = this._pt = new ca(this._pt, y, ps, 0, 1, k.renderTransform, k, 0, -1), b.dep = 1), "scale" === m) this._pt = new ca(this._pt, k, "scaleY", k.scaleY, (p ? me(k.scaleY, p + o) : o) - k.scaleY || 0, ss), this._pt.u = 0, x.push("scaleY", m), m += "X";
              else {
                if ("transformOrigin" === m) {
                  _.push(hs, 0, y[hs]), n = Bs(n), k.svg ? Ws(e, n, 0, v, 0, this) : (g = parseFloat(n.split(" ")[2]) || 0, g !== k.zOrigin && Ms(this, k, "zOrigin", k.zOrigin, g), Ms(this, y, m, Xs(i), Xs(n)));
                  continue
                }
                if ("svgOrigin" === m) {
                  Ws(e, n, 1, v, 0, this);
                  continue
                }
                if (m in Rs) {
                  ar(this, k, m, c, p ? me(c, p + n) : n);
                  continue
                }
                if ("smoothOrigin" === m) {
                  Ms(this, k, "smooth", k.smooth, n);
                  continue
                }
                if ("force3D" === m) {
                  k[m] = n;
                  continue
                }
                if ("transform" === m) {
                  rr(this, n, e);
                  continue
                }
              }
            else m in y || (m = js(m) || m);
            if (h || (o || 0 === o) && (c || 0 === c) && !ts.test(n) && m in y) u = (i + "").substr((c + "").length), o || (o = 0), g = We(n) || (m in f.units ? f.units[m] : u), u !== g && (c = Ps(e, m, i, g)), this._pt = new ca(this._pt, h ? k : y, m, c, (p ? me(c, p + o) : o) - c, h || "px" !== g && "zIndex" !== m || !1 === t.autoRound ? ss : ns), this._pt.u = g || 0, u !== g && "%" !== g && (this._pt.b = i, this._pt.r = is);
            else if (m in y) zs.call(this, e, m, i, p ? p + n : n);
            else if (m in e) this.add(e, m, i || e[m], p ? p + n : n, s, r);
            else if ("parseTransform" !== m) {
              H(m, n);
              continue
            }
            h || (m in y ? _.push(m, 0, y[m]) : _.push(m, 1, i || e[m])), x.push(m)
          }
          w && oa(this)
        },
        render(e, t) {
          if (t.tween._time || !qa()) {
            let a = t._pt;
            for (; a;) a.r(e, a.d), a = a._next
          } else t.styles.revert()
        },
        get: Os,
        aliases: as,
        getSetter(e, t, a) {
          let s = as[t];
          return s && s.indexOf(",") < 0 && (t = s), t in Ya && t !== hs && (e._gsap.x || Os(e, "x")) ? a && Wa === a ? "scale" === t ? us : ms : (Wa = a || {}) && ("scale" === t ? gs : fs) : e.style && !T(e.style[t]) ? ls : ~t.indexOf("-") ? ds : Jt(e, t)
        },
        core: {
          _removeProperty: Is,
          _getMatrix: Us
        }
      };
      _a.utils.checkPrefix = js, _a.core.getStyleSaver = ws,
        function(e, t, a, s) {
          let r = ce(e + "," + t + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", (e => {
            Ya[e] = 1
          }));
          ce(t, (e => {
            f.units[e] = "deg", Rs[e] = 1
          })), as[r[13]] = e + "," + t, ce("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", (e => {
            let t = e.split(":");
            as[t[1]] = r[t[0]]
          }))
        }("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY"), ce("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", (e => {
          f.units[e] = "px"
        })), _a.registerPlugin(ir);
      const nr = _a.registerPlugin(ir) || _a;
      nr.core.Tween
    },
    42012: (e, t, a) => {
      "use strict";
      a.d(t, {
        y3: () => fe,
        h7: () => te,
        E$: () => $e
      });
      var s = a(71403),
        r = a(54252),
        i = a.n(r),
        n = a(74401),
        o = a(355),
        c = a(61651),
        l = a(42756),
        d = a(71080);
      var m = a(46632);
      const u = e => {
          let {
            hasTag: t = !1,
            tag: a = null,
            tagStyle: s = null,
            badges: r = []
          } = e;
          return t && a ? (0, m.jsx)("div", {
            className: "rockstargames-modules-core-newswire-articlebc50cd13f1f148dd0772d2a6eee8a913",
            "data-tag-style": s,
            children: a
          }) : t && r && r?.length > 0 ? (0, m.jsx)("div", {
            className: "rockstargames-modules-core-newswire-articled4a1a1e4fc4c16138d3c879bc1864227",
            children: r.map((e => (0, m.jsx)(d.A, {
              ...e
            }, e?.text)))
          }) : null
        },
        g = {
          textOverlay: "rockstargames-modules-core-newswire-articlea9e47a446a239de8e5bd56e77308ddc8",
          content: "rockstargames-modules-core-newswire-articled35747e86fd9b103a5160d7219f01856"
        },
        {
          LiteMotion: f,
          Animations: p
        } = o,
        {
          variants: h,
          transitions: b
        } = p,
        k = e => {
          let {
            title: t,
            hasTag: a,
            tag: s,
            hasDescription: r,
            description: i,
            fadesOut: n = !1,
            badges: o
          } = e;
          return (0, m.jsx)(f, {
            initial: h.fade.out.initial,
            animate: {
              opacity: n ? 0 : 1
            },
            transition: b.fade,
            className: g.textOverlay,
            children: (0, m.jsxs)("div", {
              className: g.content,
              children: [(0, m.jsx)(u, {
                hasTag: a,
                tag: s,
                badges: o?.filter((e => e?.isPrimary))
              }), (0, m.jsx)("h3", {
                children: t
              }), r && i && (0, m.jsx)("div", {
                className: g.description,
                children: i
              })]
            })
          })
        },
        v = e => {
          let {
            title: t,
            showTitle: a = !0,
            showBackground: r = !0,
            tag: i,
            tagStyle: n,
            discountPrice: o,
            originalPrice: c,
            setPricingContainerHeight: l = null
          } = e;
          const d = (0, s.createRef)();
          return (0, s.useEffect)((() => {
            const e = () => {
              d.current && null !== l && l(d.current.clientHeight)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), [d]), (0, m.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articlef721d7192d3e29e64567a729fd8d5985",
            ref: d,
            "data-show-background": r,
            children: [a && (0, m.jsx)("span", {
              className: "rockstargames-modules-core-newswire-articlef390fe2c9338785ce412483a1bac624c",
              children: t
            }), (0, m.jsxs)("div", {
              className: "rockstargames-modules-core-newswire-articlefc5ca7a7cb4da6745e4dbef89b12bfe8",
              children: [(0, m.jsx)("span", {
                className: "rockstargames-modules-core-newswire-articleb7ba435d2cec78951bdb0b812b098b72",
                "data-tag-style": n || "free",
                children: i
              }), (0, m.jsx)("span", {
                className: "rockstargames-modules-core-newswire-articled8c7408e6335e53326bc70a1a065f81b",
                children: o
              }), (0, m.jsx)("span", {
                className: "rockstargames-modules-core-newswire-articlea3632910b63514f6b49539fe45bcccb6",
                children: c
              })]
            })]
          })
        };
      var w = a(90837),
        _ = a(82275),
        x = a(44338),
        y = a(67245),
        j = a(47483),
        N = a(19169),
        S = a(96165),
        T = a(73870);
      const C = {
          ps5: x,
          ps4: _,
          ps: w,
          xboxone: j,
          xbox: N,
          xboxseriesxs: y,
          nintendoswitch: T,
          pc: S,
          googleplay: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2ef574ea2aa502447d579267ff37e251.svg",
          applestore: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c6affc8b37ec4c75486ab6d12b2de395.svg"
        },
        A = e => {
          let {
            title: t,
            showTitle: a = !0,
            showBackground: r = !0,
            platformOptions: i,
            setPricingContainerHeight: n = (() => {}),
            expandedView: o
          } = e;
          const c = (0, s.createRef)();
          return (0, s.useEffect)((() => {
            const e = () => {
              c.current && null !== n && n(c.current.clientHeight)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), [c]), (0, m.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articlee754e3afc303a114f9e28e09c5519a30",
            ref: c,
            "data-show-background": r,
            "data-show-platforms": !o,
            children: [a && (0, m.jsx)("span", {
              className: "rockstargames-modules-core-newswire-articlefd98e3d7af2a583d4338d802666901a5",
              children: t
            }), i?.platformsAndLinks && (0, m.jsxs)("div", {
              className: "rockstargames-modules-core-newswire-articlecbde4b9406c59131d6d4c8d9b2291a84",
              children: [(0, m.jsx)(u, {
                hasTag: i?._memoq?.platformTag,
                tag: i?._memoq?.platformTag,
                tagStyle: i?._memoq?.platformTagStyle
              }), (0, m.jsx)("div", {
                className: "rockstargames-modules-core-newswire-articleb7de0e1798d1a020191fbe44b67f34d2",
                children: i.platformsAndLinks.map((e => {
                  let {
                    platform: t,
                    buttonText: a
                  } = e;
                  return (0, m.jsx)("img", {
                    className: "rockstargames-modules-core-newswire-articleaa5f852c8932dcf689a97496d437f13b",
                    alt: a,
                    src: C[t]
                  }, t)
                }))
              })]
            })]
          })
        },
        I = e => {
          let {
            textOverlayProps: t,
            title: a,
            size: r,
            expandedView: i = !1,
            children: n,
            pricingOptions: o,
            setPricingContainerHeight: c,
            isCoverCard: l = !1,
            platformOptions: d
          } = e;
          const [u] = (e => {
            let {
              hasTextOverlay: t,
              tag: a,
              collapsedHasTag: r,
              description: i,
              collapsedHasDescription: n,
              size: o,
              title: c,
              expandedView: l,
              badges: d
            } = e;
            const [u, g] = (0, s.useState)(null), f = (0, s.useMemo)((() => {
              if (!t) return null;
              const e = "sm" !== o && n;
              return (0, m.jsx)(k, {
                title: c,
                hasTag: r,
                tag: a,
                hasDescription: e,
                description: i,
                fadesOut: l,
                badges: d
              })
            }), [t, a, r, i, n, o, c, l, d]);
            return (0, s.useEffect)((() => {
              g(f)
            }), [f]), [u, g]
          })({
            ...t,
            size: r,
            title: a,
            expandedView: i
          }), g = void 0 !== o?.hasPricingOptions || null !== d;
          return (0, m.jsxs)("header", {
            className: "rockstargames-modules-core-newswire-articlec525342927ce11e37cc24e653e0ffc95",
            "data-is-covercard": l,
            "data-expanded-view": i,
            children: [s.Children.map(n, (e => (0, s.cloneElement)(e, {
              title: a,
              size: r,
              expandedView: i
            }))), u, g && (0, m.jsxs)(m.Fragment, {
              children: [!0 === d?.hasPlatformOptions && (0, m.jsx)(A, {
                title: a,
                platformOptions: d,
                pricingOptions: o,
                setPricingContainerHeight: c,
                expandedView: i
              }), !0 === o?.hasPricingOptions && (0, m.jsx)(v, {
                title: a,
                tag: o?._memoq?.tag,
                tagStyle: o?._memoq?.tagStyle || "free",
                discountPrice: o?._memoq?.discountPrice,
                originalPrice: o?._memoq?.originalPrice,
                setPricingContainerHeight: c
              })]
            })]
          })
        },
        {
          LiteMotion: M,
          Animations: L
        } = o,
        {
          transitions: E
        } = L,
        P = e => {
          let {
            components: t,
            payload: a,
            prod: r,
            size: o,
            title: d,
            initial: g = "initial",
            animate: f = "animate",
            variants: p,
            type: h = null,
            context: b = null,
            textOverlayProps: k,
            className: w,
            children: _,
            theme: x = "none",
            id: y,
            pricingOptions: j,
            pricingContainerHeight: N,
            isCoverCard: S,
            platformOptions: T,
            isProductCard: C = !1
          } = e;
          const A = (0, s.useRef)(),
            L = (0, s.useRef)(),
            {
              tag: P,
              expandedHasTag: O,
              badges: z
            } = k;
          i().set(a, "meta.prod", r);
          const D = _?.props?.images.length > 0;
          let B = (0, m.jsx)("h1", {
            children: d
          });
          return S && (B = null), (0, s.useEffect)((() => {
            const e = () => {
              A.current && A.current.scrollTop > 0 && window.innerWidth >= window.innerHeight && (A.current.scrollTop = 0)
            };
            return window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          }), []), (0, m.jsx)(l.DataLayerProvider, {
            card_id: y,
            card_name: d?.toLowerCase(),
            children: (0, m.jsx)(c.A, {
              threshold: [25, 50, 75, 90, 100],
              trackRef: "long" === h ? A : L,
              children: (0, m.jsxs)(M, {
                ref: A,
                initial: g,
                animate: f,
                variants: p.expanded,
                transition: E.cardOpen,
                className: (0, n.classList)("rockstargames-modules-core-newswire-articledcb84dcfd34616fb0089133acf0c4669", w),
                "data-type": h,
                "data-size": o,
                "data-product": C,
                "data-covercard": S || !1,
                "data-context": b,
                style: {
                  "--product-card-pricing-info-height": `${N||0}px`
                },
                children: [D && (0, m.jsx)(I, {
                  size: o,
                  title: d,
                  textOverlayProps: k,
                  expandedView: !0,
                  pricingOptions: j,
                  platformOptions: T,
                  isCoverCard: S,
                  children: _
                }), (0, m.jsxs)(M, {
                  ref: L,
                  className: "rockstargames-modules-core-newswire-articleeaf357a8d0bae1199142949cbf24e7b9",
                  variants: p.expandedContents,
                  transition: E.afterCardOpen,
                  "data-theme": x,
                  children: [(0, m.jsxs)("div", {
                    className: "rockstargames-modules-core-newswire-articlefc0e079f7c184b912d5a46b037d01b0d",
                    children: [(0, m.jsx)(u, {
                      hasTag: O,
                      tag: P,
                      badges: z
                    }), B, C && (0, m.jsxs)(m.Fragment, {
                      children: [!0 === T?.hasPlatformOptions && (0, m.jsx)("div", {
                        className: "rockstargames-modules-core-newswire-articleb630c7c1f59f91f2ac304af525b6d081",
                        children: (0, m.jsx)(u, {
                          hasTag: T?.hasPlatformOptions,
                          tag: T?._memoq?.platformTag,
                          tagStyle: T?._memoq?.platformTagStyle
                        })
                      }), !0 === j?.hasPricingOptions && (0, m.jsx)(v, {
                        title: d,
                        showTitle: !1,
                        showBackground: !1,
                        tag: j?._memoq?.tag,
                        tagStyle: j?.tagStyle || "free",
                        discountPrice: j?._memoq?.discountPrice,
                        originalPrice: j?._memoq?.originalPrice
                      })]
                    })]
                  }), (0, m.jsx)(n.TinaParser, {
                    components: t,
                    tina: {
                      payload: a
                    }
                  })]
                })]
              })
            })
          })
        };
      var O = a(87839),
        z = a(8999),
        D = a(21450),
        B = a(5217),
        V = a.n(B),
        $ = a(96717),
        F = a(89779),
        R = a(40207);
      const G = "modal-context",
        H = [null, () => null],
        U = window?.[G] ?? (window[G] = (0, s.createContext)(H)),
        W = JSON.parse('{"us":{"card_label_platforms":"{title} on {platformList}","card_label_platforms_tag":"{tag} {title} on {platformList}","card_label_tag":"{tag} {title}"},"de":{"card_label_platforms":"{title} auf {platformList}","card_label_platforms_tag":"{tag} {title} auf {platformList}","card_label_tag":"{tag} {title}"},"es":{"card_label_platforms":"{title} para {platformList}","card_label_platforms_tag":"{tag} {title} para {platformList}","card_label_tag":"{tag} {title}"},"mx":{"card_label_platforms":"{title} en {platformList}","card_label_platforms_tag":"{tag} {title} en {platformList}","card_label_tag":"{tag} {title}"},"fr":{"card_label_platforms":"{title} sur {platformList}","card_label_platforms_tag":"{tag} {title} sur {platformList}","card_label_tag":"{tag} {title}"},"it":{"card_label_platforms":"{title} su {platformList}","card_label_platforms_tag":"{tag} {title} su {platformList}","card_label_tag":"{tag} {title}"},"jp":{"card_label_platforms":"{platformList}版{title}","card_label_platforms_tag":"{tag} {platformList}版 {title}","card_label_tag":"{tag} {title}"},"kr":{"card_label_platforms":"{platformList}용 {title}","card_label_platforms_tag":"{tag} {platformList}용 {title}","card_label_tag":"{tag} {title}"},"pl":{"card_label_platforms":"{title} na {platformList}","card_label_platforms_tag":"{tag} {title} na {platformList}","card_label_tag":"{tag} {title}"},"br":{"card_label_platforms":"{title} para {platformList}","card_label_platforms_tag":"{tag} {title} para {platformList}","card_label_tag":"{tag} {title}"},"ru":{"card_label_platforms":"{title} на {platformList}","card_label_platforms_tag":"{title} ({tag}) на {platformList}","card_label_tag":"{title} ({tag})"},"hans":{"card_label_platforms":"{platformList} 上的 {title}","card_label_platforms_tag":"{tag} {platformList} 上的 {title}","card_label_tag":"{tag} {title}"},"tw":{"card_label_platforms":"{platformList} 上的 {title}","card_label_platforms_tag":"{tag} {platformList} 上的 {title}","card_label_tag":"{tag} {title}"}}'),
        q = (0, $.defineMessages)({
          card_label_platforms: {
            id: "card_label_platforms",
            defaultMessage: "{title} on {platformList}"
          },
          card_label_tag: {
            id: "card_label_tag",
            defaultMessage: "{tag} {title}"
          },
          card_label_platforms_tag: {
            id: "card_label_platforms_tag",
            defaultMessage: "{tag} {title} on {platformList}"
          }
        }),
        X = (0, $.withIntl)((e => {
          let {
            id: t,
            position: a,
            title: r,
            size: i = "md",
            sectionTitle: n = "",
            expandedType: o = null,
            modalProps: c = {
              content: null,
              className: "",
              contentClassName: ""
            },
            className: l,
            children: d,
            isProductCard: u,
            cardIds: g = null,
            theme: f = "none",
            isCoverCard: p,
            platformOptions: h
          } = e;
          const {
            formatMessage: b,
            formatList: k
          } = (0, $.useIntl)(), [v, w] = (0, F.useSearchParams)(), _ = (0, s.useRef)(null), [, x] = (0, s.useContext)(U), {
            track: y
          } = (0, R.useGtmTrack)(), [j, N] = (0, s.useState)(!1), S = () => {
            N(!1), x(null), w({}), y({
              event: "trackPageview"
            })
          }, T = () => {
            if (!c?.content || !_.current || !o || "linkout" === o) return;
            const e = _.current,
              s = window.getComputedStyle(e),
              n = parseInt(s.getPropertyValue("width"), 10),
              l = parseInt(s.getPropertyValue("height"), 10),
              d = e.getBoundingClientRect(),
              {
                content: m,
                className: u,
                contentClassName: p
              } = c,
              h = "fob" === i ? "fob" : "default";
            x({
              content: m,
              onClose: S,
              rect: d,
              width: n,
              height: l,
              className: u,
              contentClassName: p,
              fadeIn: !1,
              cardIds: g,
              theme: f,
              activeId: t,
              gtm: {
                card_id: t,
                card_name: r?.toLowerCase(),
                position: a
              },
              aspectRatio: h,
              cardDimensions: {
                size: i,
                type: o
              }
            }), y({
              event: "trackPageview",
              link_url: window.location.href,
              card_id: t,
              card_name: r?.toLowerCase(),
              position: a
            })
          };
          (0, s.useEffect)((() => {
            j && T()
          }), [j]), (0, s.useEffect)((() => {
            N(v.get("info") === t)
          }), [v.get("info"), t]);
          const C = (0, s.useMemo)((() => {
            const e = h?._memoq?.platformTag || "";
            if (h?.platformsAndLinks?.length > 0) {
              const t = h?.platformsAndLinks?.map((e => {
                  let {
                    buttonText: t
                  } = e;
                  return t
                })),
                a = k(t, {
                  type: "conjunction"
                });
              return e ? b(q.card_label_platforms_tag, {
                tag: e,
                title: r,
                platformList: a
              }) : b(q.card_label_platforms, {
                title: r,
                platformList: a
              })
            }
            return e ? b(q.card_label_tag, {
              tag: e,
              title: r
            }) : r
          }), [h, r]);
          return p || "linkout" === o ? (0, m.jsx)("div", {
            ref: _,
            className: l,
            "data-size": i,
            "data-type": o,
            "data-product": u,
            role: "button",
            "aria-label": C,
            children: d
          }) : (0, m.jsx)("button", {
            ref: _,
            onClick: e => {
              e.preventDefault(), e.stopPropagation(), t ? w({
                info: t
              }) : T(), y({
                event: "card_click",
                element_placement: n?.toLowerCase(),
                position: a,
                card_id: t,
                card_name: r?.toLowerCase(),
                link_url: window.location.href
              })
            },
            className: l,
            "data-size": i,
            "data-type": o,
            "data-product": u,
            tabIndex: "linkout" !== o ? 0 : -1,
            "aria-label": C,
            type: "button",
            children: d
          })
        }), W),
        Y = {
          pillBtn: "rockstargames-modules-core-newswire-articleebdcdd73cdde7ce5626490066de01474",
          selected: "rockstargames-modules-core-newswire-articled058244e6f29505e3c05558039370b54",
          card: "rockstargames-modules-core-newswire-articlec2685d1ff8cc088bfef4c336b1a9f8ae",
          content: "rockstargames-modules-core-newswire-articlee268650dd5a86c01be62eeb552b4e54b",
          expandedContent: "rockstargames-modules-core-newswire-articled19c433e20935d6b1eebff53baa04bb1",
          text: "rockstargames-modules-core-newswire-articlebeee7d7b941675acb2b6b9bf5caf4f33",
          imageHolder: "rockstargames-modules-core-newswire-articlec823ac57eab14be16dd87e168e610d4f",
          coverCardWrapper: "rockstargames-modules-core-newswire-articleef72671ab95bb9290b80637cb3073d29"
        },
        Q = e => {
          let {
            payload: t,
            prod: a,
            images: r,
            size: i,
            title: o,
            initial: c,
            animate: l,
            variants: d,
            id: u,
            position: g,
            sectionTitle: f,
            expandedType: p,
            context: h,
            children: b,
            expandedCardContents: k,
            textOverlayProps: v = {
              hasTextOverlay: !1,
              tag: "",
              collapsedHasTag: !1,
              expandedHasTag: !1,
              description: "",
              collapsedHasDescription: !1
            },
            deckProps: w = {},
            modalProps: _ = [],
            theme: x,
            cardIds: y,
            pricingOptions: j,
            platformOptions: N = null,
            pricingContainerHeight: S,
            isCoverCard: T = !1,
            isProductCard: C = !1
          } = e;
          const A = (0, n.useTinaComponents)(),
            I = (0, s.useMemo)((() => ({
              ...A,
              HTMLElement: O.A,
              ImageWithBadge: z.A,
              Carousel: D.A,
              GroupOfItems: V()
            })), [A]),
            M = (0, s.useMemo)((() => (0, m.jsx)(P, {
              type: p,
              components: I,
              payload: t,
              prod: a,
              images: r,
              size: i,
              title: o,
              context: h,
              textOverlayProps: v,
              initial: c,
              animate: l,
              variants: d,
              theme: x,
              cardIds: y,
              pricingOptions: j,
              id: u,
              pricingContainerHeight: S,
              isCoverCard: T,
              platformOptions: N,
              isProductCard: C,
              children: k
            })), [p, r, a, i, o, v, k, c, l, d, I, t, C]),
            L = [Y.card, T ? Y.coverCardWrapper : ""].join(" ");
          return (0, m.jsx)(X, {
            id: u,
            position: g,
            sectionTitle: f,
            title: o,
            size: i,
            expandedType: p,
            images: r,
            deckProps: w,
            modalProps: {
              content: M,
              ..._
            },
            className: L,
            isProductCard: C,
            cardIds: y,
            theme: x,
            isCoverCard: T,
            platformOptions: N,
            children: b
          })
        };
      var K = a(60285),
        Z = a(2024);
      const J = {
          clrCollapsedCard: "rockstargames-modules-core-newswire-articlefd8a3e4025f5bdb8b4d2a3f4f4fe2134",
          cardContainer: "rockstargames-modules-core-newswire-articlee0f2a97409fc0da53eb41dd7eda2cc1d",
          cardInfo: "rockstargames-modules-core-newswire-articlef36f44f341ab5fcc53f1a40bbd5d204b",
          subtitle: "rockstargames-modules-core-newswire-articleea8380a1bfb197c92d4a5cf18dd7c0d7",
          price: "rockstargames-modules-core-newswire-articlea2f472fdf58c77bb93b0386c70af2589",
          newBadge: "rockstargames-modules-core-newswire-articlef22545e267c507119956ec5075637b95",
          outOfStockBadge: "rockstargames-modules-core-newswire-articlea2fea067473934681dd933a67f0f98bf",
          saleBadge: "rockstargames-modules-core-newswire-articlef494e92b89019387b6e8f10550637438",
          slashedPrice: "rockstargames-modules-core-newswire-articleeae1adc5a72c6de1baa46423f96c066f",
          storeInfo: "rockstargames-modules-core-newswire-articlef7c3bc06f2735e3a75db602e4aabbf5a",
          priceInfo: "rockstargames-modules-core-newswire-articleaa82e6cb0fdecc71128122e6adc37791",
          cardDesc: "rockstargames-modules-core-newswire-articlecb155936ef4888dc38c198b39541f0bd"
        },
        ee = e => {
          let {
            videoUrl: t,
            expandedType: a,
            children: s
          } = e;
          return t && "linkout" === a ? (0, m.jsx)(K.A, {
            to: t,
            children: s
          }) : s
        },
        te = e => {
          let {
            className: t,
            cardType: a,
            title: s,
            image: r,
            subheader: i,
            subtitle: n,
            price: o,
            slashedPrice: c,
            badge: l = null,
            expandedType: d,
            videoUrl: u
          } = e;
          return (0, m.jsx)("div", {
            className: [J.clrCollapsedCard, t].join(" "),
            role: "button",
            tabIndex: 0,
            children: (0, m.jsx)(ee, {
              videoUrl: u,
              expandedType: d,
              children: (0, m.jsxs)("div", {
                className: J.cardContainer,
                "data-type": a,
                children: [(0, m.jsx)("div", {
                  className: J.cardMedia,
                  children: (0, m.jsx)(Z.A, {
                    ...r
                  })
                }), (0, m.jsxs)("div", {
                  className: J.cardInfo,
                  children: [i && (0, m.jsx)("h6", {
                    children: i
                  }), (0, m.jsx)("h5", {
                    children: s
                  }), n && (0, m.jsx)("h6", {
                    className: J.subtitle,
                    children: n
                  }), "store" === a && (0, m.jsxs)("div", {
                    className: J.storeInfo,
                    children: [(0, m.jsx)("p", {
                      className: (() => {
                        switch (l) {
                          case "New":
                            return J.newBadge;
                          case "Sale":
                            return J.saleBadge;
                          case "Out of Stock":
                            return J.outOfStockBadge;
                          default:
                            return ""
                        }
                      })(),
                      children: l
                    }), (0, m.jsxs)("span", {
                      className: J.priceInfo,
                      children: [(0, m.jsx)("p", {
                        className: J.price,
                        children: o
                      }), (0, m.jsx)("p", {
                        className: J.slashedPrice,
                        children: c
                      })]
                    })]
                  })]
                })]
              })
            })
          })
        },
        ae = e => {
          let {
            expandedType: t,
            to: a,
            children: r,
            style: i,
            sectionTitle: n = "",
            id: o,
            cardTitle: c,
            position: l
          } = e;
          const {
            track: d
          } = (0, R.useGtmTrack)(), u = (0, s.useCallback)((() => {
            d({
              event: "card_click",
              link_url: a,
              card_id: o,
              card_name: c,
              element_placement: n.toLowerCase(),
              position: l
            })
          }), [n, a, o, c, n, l]);
          return "linkout" === t && a ? (0, m.jsx)(K.A, {
            to: a,
            style: i,
            target: a?.startsWith("http") ? "_blank" : "_self",
            onClick: u,
            children: r
          }) : r
        };
      var se = a(28089);
      const re = {
          layeredImageFrame: "rockstargames-modules-core-newswire-articlef4291aa18340b383f772137ec9e0c582",
          layered: "rockstargames-modules-core-newswire-articlef48bca962431b0e1cbf30e25dfb23979",
          foreground: "rockstargames-modules-core-newswire-articleb52f487de5963cf5eab84e86c244302b",
          imageMask: "rockstargames-modules-core-newswire-articlef55d22ef90c565718cad7bf6387893a7",
          logo: "rockstargames-modules-core-newswire-articlefa6e98cbad19c314e5759f3aa0a2f9b3",
          "sm-horizontal": "rockstargames-modules-core-newswire-articleb496d31814195834a5e84fa5157ede59"
        },
        {
          LiteMotion: ie,
          Animations: ne
        } = o,
        {
          getVariant: oe,
          variants: ce,
          transitions: le
        } = ne,
        de = e => {
          let {
            image: t,
            i: a,
            prod: s
          } = e;
          const {
            alt: r,
            src: i
          } = (0, se.useImageParser)({
            ...t,
            prod: s
          });
          return (0, m.jsx)("img", {
            src: i.mobile,
            alt: r ?? "",
            style: {
              "--z-index": a
            }
          })
        },
        me = e => {
          let {
            images: t = [],
            className: a = "",
            prod: r = !1,
            expandedView: i = !1,
            style: o = {}
          } = e;
          const [c, l] = (0, s.useState)({
            height: window.innerHeight,
            width: window.innerWidth
          });
          (0, s.useEffect)((() => {
            function e() {
              l({
                height: window.innerHeight,
                width: window.innerWidth
              })
            }
            return window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), [c]);
          const d = (0, s.useMemo)((() => t?.length && 0 !== t.length ? t.map((e => (0, m.jsx)(ie, {
            className: (0, n.classList)(re[e?.specialClass] ?? re.imageMask, re[e?.sizeClass], e?.className),
            variants: oe(e?.specialClass ?? "imageMask", i ? "expanded" : "collapsed"),
            initial: "initial",
            animate: "animate",
            transition: le.cardOpen,
            children: (0, m.jsx)(de, {
              image: e,
              prod: r
            })
          }, e.key))) : null), [t, c, i, r]);
          return (0, m.jsx)(ie, {
            className: (0, n.classList)(re.layeredImageFrame, t.length > 1 ? re.layered : re.flat, a),
            style: o,
            initial: ce.fade.in.initial,
            animate: ce.fade.in.animate,
            transition: le.instantFade,
            "data-expanded-view": i,
            children: d
          })
        },
        ue = {
          clrCardModalContent: "rockstargames-modules-core-newswire-articlebfb45dddcb9390c11ba16607a49ea776",
          expandedCard: "rockstargames-modules-core-newswire-articled8a1f864c20db127067721ebe605540b",
          content: "rockstargames-modules-core-newswire-articled57eaa4a6807e67f6189ae02a1625595",
          details: "rockstargames-modules-core-newswire-articlefd05f61944281a1ef50e21bc30de10f7",
          calloutHeaders: "rockstargames-modules-core-newswire-articlef12819eca617b4b90f2cfd0c5788db65"
        },
        {
          variants: ge
        } = o.Animations,
        fe = e => {
          let {
            id: t,
            content: a,
            size: s = "clr",
            cardType: r = "release",
            title: i,
            subheader: o,
            subtitle: c,
            storeInfo: l = {},
            expandedType: d,
            to: u,
            image: g,
            deckProps: f,
            tina: p = {},
            position: h
          } = e;
          const b = (0, n.useTinaPayload)(),
            k = p?.payload?.meta?.cdn ?? b?.meta?.prod ?? !1,
            v = {
              image: {
                ...g,
                prod: k
              }
            },
            w = [g];
          return (0, m.jsx)(Q, {
            id: t,
            title: i,
            context: "clr-card",
            size: s,
            expandedType: d,
            images: v,
            deckProps: f,
            prod: k,
            position: h,
            modalProps: {
              className: ue.clrCardModal,
              contentClassName: ue.clrCardModalContent
            },
            variants: ge.plainCard,
            payload: {
              content: a
            },
            expandedCardContents: (0, m.jsx)(me, {
              images: w,
              prod: k
            }),
            children: (0, m.jsx)(ae, {
              expandedType: d,
              to: u,
              style: {
                display: "flex"
              },
              children: (0, m.jsx)(te, {
                cardType: r,
                title: i,
                subheader: o,
                subtitle: c,
                image: v,
                expandedType: d,
                price: l?.price,
                slashedPrice: l?.slashedPrice,
                badge: l?.badge
              })
            })
          })
        };
      var pe = a(22545);
      const he = e => {
        let {
          images: t,
          title: a,
          expandedView: r,
          variants: i,
          transition: n
        } = e;
        const o = (0, s.useMemo)((() => t && 0 !== t?.length ? t.map((e => e?.image?.sources ? (0, m.jsx)(z.A, {
          ...e,
          style: {
            "--object-position": e?.objectPosition ?? ""
          }
        }) : null)) : null), [t]);
        return !o?.length || o?.length < 1 ? null : 1 === o.length ? o : (0, m.jsx)(pe.A, {
          slideChildren: o,
          title: a,
          navigation: r,
          thumbsVisible: r,
          spaceBetween: 0,
          variants: i,
          transition: n
        })
      };
      var be = a(14963),
        ke = a.n(be),
        ve = a(63672);
      const we = {
          pillBtn: "rockstargames-modules-core-newswire-articled13aae72f49e86630d46fa6e54e1fbdc",
          selected: "rockstargames-modules-core-newswire-articlebcc7bd9d9a43edf197cc46795d57249b",
          customModalContent: "rockstargames-modules-core-newswire-articleceeb11e5fc712f410c8c4879663640ef"
        },
        {
          transitions: _e,
          variants: xe
        } = o.Animations;
      a(58407), a(72752), a(25180);
      var ye = a(94566);
      const je = (e, t) => {
          let a = getComputedStyle(e).getPropertyValue(t);
          return a = a.replace("px", "").replace("rem", "").replace("em", ""), a = a.replace("vh", "").replace("vw", "").replace("vmin", "").replace("vmax", ""), a = a.replace("ms", "").replace("s", ""), Number(a)
        },
        Ne = e => ({
          x: void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX,
          y: void 0 !== e.changedTouches ? e.changedTouches[0].screenY : e.screenY
        }),
        Se = e => e.scrollHeight > e.clientHeight;

      function Te(e, t) {
        const a = {
          ...e
        };
        return i().forOwn(e, ((e, s) => {
          if ("image" === s) {
            const e = a[s];
            a[s] = {
              ...e,
              prod: t
            }
          } else i().isObject(e) && !i().isArray(e) ? Te(e, t) : i().isArray(e) && (a[s] = e.map((e => i().isObject(e) ? Te(e, t) : e)))
        })), a
      }(0, l.withTranslations)((e => {
        let {
          active: t,
          styles: a,
          title: r,
          itemNumber: i,
          inModalMode: o,
          openModalMode: c,
          element: l,
          upNext: u,
          mobileMode: g,
          refDeck: f,
          components: p,
          tina: h,
          prevPage: b,
          nextPage: k,
          transitionStyle: v,
          selectedItemNumber: w,
          carouselTitle: _,
          sharedDraggingDelta: x,
          setSharedDraggingDelta: y
        } = e;
        const j = (0, $.useIntl)(),
          {
            track: N
          } = (0, R.useGtmTrack)(),
          S = (0, s.createRef)(),
          T = (0, s.createRef)(),
          C = (0, s.createRef)(),
          A = (0, s.createRef)(),
          I = (0, s.createRef)(),
          [M, L] = (0, s.useState)(!1),
          [E, P] = (0, s.useState)(0),
          [O, z] = (0, s.useState)(0),
          [D, B] = (0, s.useState)(0),
          [V, F] = (0, s.useState)(0),
          [G, H] = (0, s.useState)(0),
          [U, W] = (0, s.useState)(!1),
          [q, X] = (0, s.useState)(0),
          [Y, Q] = (0, s.useState)(0),
          [K, Z] = (0, s.useState)(0),
          [J, ee] = (0, s.useState)("700"),
          [te, ae] = (0, s.useState)(-1),
          [re, ie] = (0, s.useState)(0),
          [ne, oe] = (0, s.useState)(0),
          [ce, le] = (0, s.useState)(0),
          [de, me] = (0, s.useState)(!1),
          [ue, ge] = (0, s.useState)(""),
          [fe, pe] = (0, s.useState)(null),
          [he, be] = (0, s.useState)(!1),
          [ve, we] = (0, s.useState)(null),
          [_e, xe] = (0, s.useState)(!1),
          [Ce, Ae] = (0, s.useState)(!1),
          Ie = (0, n.useTinaPayload)(),
          Me = h?.payload?.meta?.cdn ?? !1 ?? Ie?.meta?.prod ?? !1,
          Le = (0, n.useTranslations)({
            payload: h?.payload,
            variables: h?.variables
          }),
          Ee = Le?.meta ?? {},
          Pe = Te(Le?.content?.[0], Me),
          Oe = (0, s.useMemo)((() => Pe?.images?.[0]?.image?.badge), [Pe]),
          ze = (0, s.useMemo)((() => Pe.title ?? r ?? Ee?.title), [r, Ee?.title, Pe.title]),
          De = (0, se.useImageParser)({
            alt: Pe?.images?.[0]?.image?.alt ?? "",
            ariaLabel: Pe?.images?.[0]?.image?.alt ?? "",
            sources: Pe?.images?.[0]?.image?.sources ?? [],
            prod: Me
          }),
          Be = De?.src?.mobile ?? De?.src?.desktop ?? !1,
          Ve = (0, s.useMemo)((() => Ee?.foreignId), [Ee]),
          $e = (0, s.useMemo)((() => Ee?.foreignTitle), [Ee]),
          [Fe, Re] = (0, s.useState)(0),
          [Ge, He] = (0, s.useState)(0),
          [Ue, We] = (0, s.useState)(0),
          [qe, Xe] = (0, s.useState)(0),
          [Ye, Qe] = (0, s.useState)(!1),
          [Ke, Ze] = (0, s.useState)(0),
          [Je, et] = (0, s.useState)(20),
          [tt, at] = (0, s.useState)(null),
          [st, rt] = (0, s.useState)(!1);
        let it = o ? -1 : 0;
        const nt = (0, s.useCallback)((e => {
            if (!0 === U || !o && !g || he) return;
            const t = Ne(e);
            Re(t.x), He(t.y)
          }), [U, o]),
          ot = e => {
            nt(e)
          },
          ct = e => {
            if (!0 === U || 0 === Fe || !o && !g || he) return;
            const t = Ne(e),
              a = t.x > Fe ? 1 : -1,
              s = Math.abs(Fe - t.x);
            o && !g && s > Je ? (rt(!0), ge(a > 0 ? "prev" : "next"), dt()) : (Qe(!0), Ze(s * a), y(s * a))
          },
          lt = e => {
            if (!0 === U || !o && !g || he) return;
            const t = Ne(e),
              a = t.x > Fe ? 1 : -1,
              s = Math.abs(Fe - t.x),
              r = Math.abs(Ge - t.y);
            o && !g ? (dt(), ge("")) : s > Je && r < 25 ? (rt(!0), ge(a > 0 ? "prev" : "next"), dt()) : dt()
          },
          dt = () => {
            W(!0), Re(0), He(0), Qe(!1), Ze(0), y(0)
          },
          mt = e => {
            e ? (o || L(!0), o || g || (clearTimeout(te), ae(setTimeout((() => {
              N({
                event: "card_title_hover",
                card_name: ze,
                card_id: i,
                position: i,
                view_name: `${Ve}/${$e}`,
                source_content_id: Ve,
                source_content_name: $e
              })
            }), 1e3)))) : (o || L(!1), o || g || clearTimeout(te))
          };
        return (0, s.useEffect)((() => {
          let e = q;
          M ? e = 0 : o && !g && (e = q), P(e)
        }), [M, g, o, O, V, Y, K, D, q]), (0, s.useEffect)((() => {
          L(!(!o || !g))
        }), [o, g]), (0, s.useEffect)((() => {
          o && t && N({
            event: "virtualPageview",
            display_type: g ? "mobile" : "desktop",
            view_name: `${Ve}/${ze}`,
            source_content_id: Ve,
            source_content_name: $e
          })
        }), [o, t]), (0, s.useEffect)((() => {
          const e = ke()(((e, t) => {
            let a = 18;
            if (e?.documentElement && (a = je(e?.documentElement, "--root-font-size")), ne !== t.innerHeight && oe(t.innerHeight), f?.current) {
              Z(je(f.current, "--eventDeck-marginSm") * a);
              const e = a * je(f?.current, "--eventDeck-modalGutters"),
                s = t?.innerWidth,
                r = s - 2 * e;
              z(r), A.current && g && B(r), F(je(f.current, "--eventDeck-itemSize") * a), le(je(f.current, "--eventDeck-phaseOneTransitionDuration"));
              const i = je(f?.current, "--eventDeck-itemImageTitleMargins") * a,
                n = T?.current?.clientHeight,
                o = n + i;
              Number.isNaN(o) || X(o), ie(je(f?.current, "--eventDeck-headerHeight") * a)
            }
            let s = Math.min(700, t.innerWidth);
            g || (s = 900), ee(`${s}`)
          }), 300);
          return window.addEventListener("resize", (() => {
            e(document, window)
          })), e(document, window), () => {
            window.removeEventListener("resize", (() => {
              e(document, window)
            }))
          }
        }), [f, g]), (0, s.useEffect)((() => {
          if (S.current) {
            const e = S.current.clientHeight;
            Number.isNaN(e) || Q(e)
          }
        }), [S]), (0, s.useEffect)((() => {
          if (o && g && A.current && (A.current.style.transform = "scale(1) translate3d(0, 0, 0)"), !o && g && A.current) {
            const e = 228 / O;
            A.current.style.transform = `scale(${e}) translate3d(0, 0, 0)`
          }!g && A.current && (A.current.style.transform = null)
        }), [o, g, O, D]), (0, s.useEffect)((() => {
          const e = .5 * O,
            t = ne - re - 3 * K;
          H(O - (e < t ? e : t))
        }), [O, K, ne]), (0, s.useEffect)((() => {
          "next" === ue ? (k(null, !0), ge("")) : "prev" === ue && (b(null, !0), ge(""))
        }), [ue]), (0, s.useEffect)((() => {
          We(0), Xe(0)
        }), [g]), (0, s.useEffect)((() => {
          g ? et(o ? 35 : 20) : o && et(50)
        }), [o, g]), (0, s.useEffect)((() => {
          let e = [],
            t = 0,
            s = 0;
          if (null !== a?.transform) {
            e = a.transform.split(",");
            const r = e[0].split("(");
            t = Number(r[1].replace("px", "")), We(t), s = Number(e[1].replace("px", "")), Xe(s)
          }
        }), [a]), (0, s.useEffect)((() => {
          if (!U) return;
          clearTimeout(fe);
          const e = setTimeout((() => {
            W(!1), Re(0)
          }), 200);
          pe(e)
        }), [U, 200]), (0, s.useEffect)((() => {
          if (!st) return;
          clearTimeout(tt);
          const e = setTimeout((() => {
            rt(!1)
          }), 1e3);
          at(e)
        }), [st]), (0, s.useEffect)((() => {
          o && clearTimeout(te), setTimeout((() => {
            me(!de)
          }), ce)
        }), [o]), (0, s.useEffect)((() => (document.body.addEventListener("mouseleave", dt), () => {
          document.body.removeEventListener("mouseleave", dt)
        })), []), (0, s.useEffect)((() => {
          I.current ? xe(Se(I.current)) : xe(!1), void 0 !== l && l.current ? Ae(Se(l.current)) : Ae(!1)
        }), [l, I, t, o, de]), Pe ? (0, m.jsxs)("div", {
          className: "rockstargames-modules-core-newswire-articlec4090652e3c0a4e1979bb0a36b22b7cd",
          ref: l,
          "data-item-position": i,
          "data-modal-mode": o,
          "data-active-item": t,
          "data-up-next": u,
          "data-transition": Ye || 0 !== x ? "none" : v,
          "data-scrollable": Ce,
          style: {
            ...a,
            transform: o && t && !g ? `translate3d(${Ue+Ke}px, ${qe}px, 0)` : g && !o ? `translate3d(${Ue+x}px, ${qe}px, 0)` : a?.transform
          },
          onClick: e => {
            st || (o ? o && !g && (i < w ? b(e, !0) : i > w && k(e, !0)) : c(e))
          },
          onMouseEnter: () => mt(!0),
          onMouseLeave: () => mt(!1),
          onTouchStart: ot,
          onTouchMove: ct,
          onTouchEnd: lt,
          onMouseDown: ot,
          onMouseMove: ct,
          onMouseUp: lt,
          onKeyUp: e => {
            "Enter" === e.key && (o || c(e))
          },
          tabIndex: it,
          "aria-label": o ? j.formatMessage(ye.card.events_deck_modal_group_label) : ze,
          role: o ? "dialog" : "presentation",
          children: [(0, m.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articleb9c878efb14d25c323e95f01b7a53460",
            "data-full-header": M,
            ref: C,
            style: {
              height: o && g ? `${O}px` : null,
              width: o && g ? `${O}px` : null
            },
            children: [Be && (0, m.jsx)("img", {
              ref: A,
              src: `${De?.src?.mobile??De?.src?.desktop}?im=Resize,width=${J}`,
              alt: De?.alt,
              style: {
                width: 0 !== D && g ? `${D}px` : null,
                height: 0 !== D && g ? `${D}px` : null
              }
            }), (0, m.jsxs)("div", {
              className: "rockstargames-modules-core-newswire-articleba8c09e500ea0845dc20d380e8ec11ca",
              "aria-hidden": "true",
              style: {
                transform: !g || g && o ? `translate3d(0, ${E}px, 0)` : null
              },
              children: [Oe && (0, m.jsx)("div", {
                className: "rockstargames-modules-core-newswire-articlecbbb0470197acdc4f0ec1f567f5c8a42",
                ref: S,
                children: (0, m.jsx)(d.A, {
                  text: Oe
                })
              }), (0, m.jsx)("span", {
                className: "rockstargames-modules-core-newswire-articleaca2b0fbf7c1dbcbf99e53812b9abc8e",
                ref: T,
                "aria-hidden": "true",
                children: ze
              })]
            })]
          }), (0, m.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articlee7defd080518d58f00f72ccc94df53aa",
            ref: I,
            "aria-hidden": !o,
            onScroll: () => {
              be(!0), dt(), clearTimeout(ve);
              const e = setTimeout((() => {
                be(!1)
              }), 100);
              we(e)
            },
            style: {
              top: o && g ? `${O}px` : null,
              width: o && !g && t ? `${G}px` : null,
              touchAction: _e || g ? "unset" : "none"
            },
            children: [ze && (0, m.jsx)("span", {
              className: "rockstargames-modules-core-newswire-articlea8fbffe55d92fc2f04e5e6b8f9267206",
              children: ze
            }), (0, m.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articlee20bd8af5d67954447804e0e21161d3b",
              children: (0, m.jsx)(n.TinaParser, {
                components: p,
                tina: {
                  meta: Ee,
                  payload: {
                    content: Pe?.content
                  }
                }
              })
            })]
          })]
        }) : null
      }));
      const Ce = {
          pillBtn: "rockstargames-modules-core-newswire-articlec484e5a1bcbdd4b338bd6fe49900d6cf",
          selected: "rockstargames-modules-core-newswire-articled65c523327b32d2de08dc996cf9d7071",
          customModalContent: "rockstargames-modules-core-newswire-articlec0a9f620e5c9749f0eebe506acda4122",
          content: "rockstargames-modules-core-newswire-articlecebbc72d1229514723b9d664281b472f"
        },
        {
          variants: Ae
        } = o.Animations;
      a(39613), a(28606), a(55430), a(7607), a(22778);
      const {
        variants: Ie
      } = o.Animations;
      var Me = a(60207);
      var Le = a(76612),
        Ee = a(60444);
      const {
        Gen9CoreCarousel: Pe,
        framer: Oe,
        useTinaModuleFetchByIds: ze,
        withSimpleErrorBoundary: De
      } = Le, Be = {
        Card: e => {
          let {
            id: t,
            title: a,
            content: r,
            size: i = "md",
            expandedType: o = "short",
            textOverlayProps: c = {
              hasTextOverlay: !1,
              tag: "",
              collapsedHasTag: !1,
              expandedHasTag: !1,
              description: "",
              collapsedHasDescription: !1
            },
            images: l = [],
            deckProps: d = {},
            to: u = null,
            tina: g = {},
            position: f = 0,
            sectionTitle: p = "",
            theme: h,
            pricingOptions: b,
            cardIds: k,
            platformOptions: v = null
          } = e;
          const w = (0, n.useTinaPayload)(),
            _ = g?.payload?.meta?.cdn ?? w?.meta?.prod ?? !1,
            [x, y] = (0, s.useState)(d?.size ?? i),
            [j, N] = (0, s.useState)(0),
            S = void 0 !== b?.hasPricingOptions || void 0 !== v?.hasPlatformOptions;
          return (0, s.useEffect)((() => {
            y(d?.size ?? i)
          }), [d?.size, i]), (0, m.jsx)(Q, {
            id: t,
            title: a,
            size: x,
            expandedType: o,
            images: l,
            deckProps: d,
            prod: _,
            payload: {
              content: r,
              meta: {}
            },
            variants: Ae.plainCard,
            textOverlayProps: c,
            modalProps: {
              className: Ce.customModal,
              contentClassName: Ce.customModalContent
            },
            expandedCardContents: (0, m.jsx)(me, {
              images: l,
              prod: _,
              expandedView: !0
            }),
            position: f,
            sectionTitle: p,
            theme: h,
            cardIds: k,
            pricingOptions: b,
            platformOptions: v,
            pricingContainerHeight: j,
            isProductCard: S,
            children: (0, m.jsx)(ae, {
              expandedType: o,
              to: u,
              sectionTitle: p,
              id: t,
              cardTitle: a,
              position: f,
              children: (0, m.jsx)("div", {
                className: Ce.content,
                "data-product": S,
                children: (0, m.jsx)(I, {
                  title: a,
                  size: x,
                  textOverlayProps: c,
                  pricingOptions: b,
                  platformOptions: v,
                  setPricingContainerHeight: N,
                  children: (0, m.jsx)(me, {
                    images: l,
                    prod: _
                  })
                })
              })
            })
          })
        },
        CardWithImageGallery: e => {
          let {
            id: t,
            title: a,
            content: r,
            size: i = "md",
            expandedType: o = "gallery",
            textOverlayProps: c = {
              hasTextOverlay: !1,
              tag: "",
              collapsedHasTag: !1,
              expandedHasTag: !1,
              description: "",
              collapsedHasDescription: !1
            },
            images: l = [],
            deckProps: d = {},
            tina: u = {},
            payload: g,
            position: f = 0,
            sectionTitle: p = "",
            cardIds: h
          } = e;
          const b = (0, n.useTinaPayload)(),
            k = g ?? b,
            v = u?.payload?.meta?.cdn ?? k?.meta?.prod ?? !1,
            w = ((e, t) => e?.map((e => e?.image ? {
              ...e,
              image: {
                ...e.image,
                prod: t
              }
            } : e)))(l, v),
            [_, x] = (0, s.useState)(d?.size ?? i),
            {
              parent: y,
              main: j,
              thumbs: N
            } = xe?.cardWithImageGallery?.gallery ?? {};
          return (0, s.useEffect)((() => {
            x(d?.size ?? i)
          }), [d?.size, i]), (0, m.jsx)(Q, {
            id: t,
            position: f,
            sectionTitle: p,
            payload: {
              content: r,
              meta: {},
              payload: k
            },
            title: a,
            size: _,
            expandedType: o,
            images: w,
            deckProps: d,
            prod: v,
            variants: xe.cardWithImageGallery,
            textOverlayProps: c,
            modalProps: {
              className: we.customModal,
              contentClassName: we.customModalContent
            },
            expandedCardContents: (0, m.jsx)(he, {
              images: w,
              title: a,
              navigation: !0,
              thumbsVisible: !0,
              variants: {
                parent: y,
                main: j,
                thumbs: N
              },
              transition: {
                parent: _e.cardOpen,
                main: _e.cardOpen,
                thumbs: _e.cardOpen
              }
            }),
            cardIds: h,
            children: (0, m.jsx)("div", {
              className: we.content,
              children: (0, m.jsx)(I, {
                title: a,
                size: _,
                textOverlayProps: c,
                children: (0, m.jsx)(he, {
                  images: w,
                  title: a,
                  navigation: !1,
                  thumbsVisible: !1
                })
              })
            })
          })
        },
        TextCard: e => {
          let {
            title: t,
            content: a,
            size: s = "md",
            badgeText: r
          } = e;
          const i = {
            ...(0, n.useTinaComponents)(),
            HTMLElement: O.A,
            UnorderedList: ve.A,
            ListItem: Me.A
          };
          return (0, m.jsx)("div", {
            className: "rockstargames-modules-core-newswire-articled392587df58204b0910e721ef1f3c35c",
            "data-size": s,
            children: (0, m.jsxs)("div", {
              className: "rockstargames-modules-core-newswire-articlea002b98d034f1897c7e1f31327ff08dc",
              children: [r && (0, m.jsx)("div", {
                className: "rockstargames-modules-core-newswire-articled9901d1bb91e1fbc1e857964083fe496",
                children: r
              }), (0, m.jsxs)("div", {
                className: "rockstargames-modules-core-newswire-articlebea322f6e3afa31355668ad164496730",
                children: [t && (0, m.jsx)("h3", {
                  children: t
                }), (0, m.jsx)(n.TinaParser, {
                  components: i,
                  tina: {
                    payload: {
                      content: a
                    }
                  }
                })]
              })]
            })
          })
        },
        ...Le
      };
      var Ve = function(e) {
        return e.extraSmall = "xs", e.small = "sm", e.medium = "md", e.large = "lg", e.extraLarge = "xl", e.frontOfBox = "fob", e.custom = "custom", e
      }(Ve || {});
      const $e = Oe.withFadeIn(De((e => {
        let {
          cards: t = [],
          size: a,
          name: r,
          title: o,
          description: c,
          disclaimer: l,
          customSlidesPerView: d = null,
          theme: u = "none",
          cardSizeBreakpoints: g = {},
          customAspectRatio: f = "3/1",
          titleBadge: p = null,
          id: h = ""
        } = e;
        const b = (0, s.useRef)(null),
          k = i().map(t, "id"),
          v = ze({
            ids: k
          }),
          [w, _] = (0, s.useState)(d),
          [x] = (0, F.useSearchParams)(),
          [y, j] = (0, s.useState)(!1);
        (0, s.useEffect)((() => {
          let e;
          if (e = Ve.frontOfBox, a === e) {
            const e = x.get("section");
            if (e && "games" === e && !y && (j(!0), b.current)) {
              const e = 100;
              window.scrollTo(0, b.current.offsetTop - e)
            }
          }
        }), []), (0, s.useEffect)((() => {
          if (!b.current) return;
          const e = () => {
            const e = d || window.getComputedStyle(b.current).getPropertyValue("--slides-per-view");
            _(e)
          };
          return window.addEventListener("resize", e), e(), () => {
            window.removeEventListener("resize", e)
          }
        }));
        const N = (0, s.useMemo)((() => {
          let e = 0;
          if (!v) return null;
          let t = "blank",
            s = !1;
          return v.forEach((e => {
            "cover-card" === e?.tina?.payload?.meta?.type && (t = e?.id, void 0 !== e?.tina?.payload?.content[0]?.excludeFromModal && (s = e.tina.payload.content[0].excludeFromModal))
          })), v.reduce(((r, c) => {
            if (c) {
              const {
                id: l,
                tina: d
              } = c, g = i().clone(d);
              i().set(g, "payload.meta.id", l);
              let f = k;
              f = k.filter((e => e !== t || e === t && !s)), r.push((0, m.jsx)(n.TinaParser, {
                components: Be,
                tina: g,
                componentProps: {
                  deckProps: {
                    size: a
                  },
                  tina: g,
                  id: l,
                  position: e,
                  sectionTitle: o,
                  theme: u,
                  cardIds: f
                }
              }, l)), e += 1
            }
            return r
          }), [])
        }), [v, a]);
        return (0, m.jsxs)("div", {
          className: "rockstargames-modules-core-newswire-articlecaf46db6464a84ad4990aed75ef74ff1",
          "data-theme": u,
          ref: b,
          id: h,
          children: [(0, m.jsx)(Pe, {
            description: c,
            size: a,
            cardSizeBreakpoints: g,
            slideChildren: N,
            title: o,
            name: r,
            customSlidesPerView: w,
            customAspectRatio: f,
            titleBadge: p,
            theme: u
          }), l && (0, m.jsx)("div", {
            className: "rockstargames-modules-core-newswire-articlee90de79e6e215bde4beeb973696fcc11",
            children: (0, m.jsx)("span", {
              className: "rockstargames-modules-core-newswire-articleceba411e9462491a4758858884a7a601",
              children: (0, m.jsx)(Ee.A, {
                html: l
              })
            })
          })]
        })
      })))
    },
    85184: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        default: () => l
      });
      var s = a(60285),
        r = a(26371),
        i = a(74401),
        n = a(42756);
      const o = {
        title: "rockstargames-modules-core-newswire-articleca3619ec694712f8ef44a0673cc5cd2a",
        main: "rockstargames-modules-core-newswire-articleb604683b1b1cf1316f5cf35ce2fe4b31",
        breadcrumbs: "rockstargames-modules-core-newswire-articled1965b8d8252ea2aaac5bde77b3bcef0"
      };
      var c = a(46632);
      const l = (0, n.withTranslations)((e => {
        let {
          children: t,
          intro: a,
          image: l = {},
          style: d = {},
          t: m,
          className: u = "",
          variant: g = null
        } = e, f = {};
        void 0 !== d.toggleInvertSeparator && (f = {
          "--breadcrumb-separator-filter-invert": d.toggleInvertSeparator ? "invert(0)" : "invert(1)"
        });
        const p = (0, n.useNewswirePost)(),
          h = {},
          b = h?.meta?.title ?? p?.title,
          k = h?.meta?.subtitle ?? p?.subtitle,
          v = k ? (0, c.jsx)("h3", {
            "data-context": "newswire-subtitle",
            children: k
          }) : "",
          w = [{
            text: m("Newswire"),
            to: "/newswire"
          }],
          {
            src: _
          } = (0, i.useImageParser)(l),
          x = (0, c.jsxs)(c.Fragment, {
            children: [(0, c.jsx)("time", {
              dateTime: p.created,
              children: p.created_formatted
            }), a ? (0, c.jsx)(r.A, {
              item: a
            }) : "", t]
          });
        p?.primary_tags?.length && w.push({
          text: p.primary_tags[0].name,
          to: `/newswire?tag_id=${p.primary_tags[0].id}`
        }), p?.secondary_tags?.length && w.push({
          text: p.secondary_tags[0].name,
          to: `/newswire?tag_id=${p.secondary_tags[0].id}`
        });
        const y = (0, c.jsx)("div", {
          className: o.breadcrumbs,
          children: w.map((e => (0, c.jsx)(s.A, {
            to: e.to,
            children: e.text
          }, e.to)))
        });
        return _?.desktop && (d.background = `url(${_.desktop}) center/cover no-repeat`), (0, c.jsx)("div", {
          className: [u, o.title].join(" "),
          style: {
            ...d,
            ...f
          },
          children: "separated" === g ? (0, c.jsxs)(c.Fragment, {
            children: [(0, c.jsxs)("header", {
              "data-context": "title",
              children: [y, (0, c.jsx)("h1", {
                children: b
              })]
            }), (0, c.jsxs)("footer", {
              "data-context": "title",
              children: [v, x]
            })]
          }) : (0, c.jsxs)(c.Fragment, {
            children: [y, (0, c.jsxs)("div", {
              className: o.main,
              children: [(0, c.jsx)("h1", {
                children: b
              }), v]
            }), x]
          })
        })
      }))
    },
    26750: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        AnchorLink: () => o,
        Discounts: () => A,
        Donate: () => E,
        Engagement: () => r(),
        EventInfo: () => H,
        FeaturedEventInfo: () => U,
        FontClip: () => q,
        GamingRewards: () => Z,
        Gen9List: () => se,
        HeroImage: () => re.A,
        NewswireFull: () => oe,
        NewswireTitle: () => F.default,
        PctBar: () => ce,
        Podium: () => me
      });
      var s = a(32503),
        r = a.n(s),
        i = a(71403),
        n = a(46632);
      const o = e => {
        let {
          children: t,
          hash: a
        } = e;
        const s = (0, i.useRef)(null),
          r = window.location.hash?.replace("#", "") === a ? a : null;
        return (0, i.useEffect)((() => {
          r && setTimeout((() => {
            const e = document.getElementById(r);
            e && e.scrollIntoView()
          }), 1e3)
        }), []), (0, n.jsx)("div", {
          ref: s,
          id: a,
          children: t
        })
      };
      var c = a(5217),
        l = a.n(c);
      const d = e => {
        let {
          items: t,
          columns: a = {},
          noCarousel: s = !1,
          noInfiniteScroll: r = !1,
          ...i
        } = e;
        const o = i?.style ?? {};
        return s && (a?.mobile && (o["--mobile-cols"] = a.mobile), a?.desktop && (o["--desktop-cols"] = a.desktop)), (0, n.jsxs)(n.Fragment, {
          children: [i.title && (0, n.jsx)("p", {
            className: "rockstargames-modules-core-newswire-articleaff0b1cbcafd725c58c239e5c027d99c",
            children: i.title
          }), (0, n.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articlef21b886c69c9d2c51f97af89d920996b",
            children: [s && (0, n.jsx)(l(), {
              style: {
                ...o,
                "--grid-gap-dynamic": "2rem 0"
              },
              className: "rockstargames-modules-core-newswire-articlea537ee313e960643c300864d36fccce1",
              renderTemplate: "standard",
              items: t,
              ...i
            }), !s && (0, n.jsx)(y, {
              items: t,
              noInfiniteScroll: r,
              perPage: 2,
              perPageMobile: 1
            })]
          })]
        })
      };
      var m = a(2024),
        u = a(63672),
        g = a(21450),
        f = a(8999),
        p = a(62550);
      const h = {
          limitedGrid: "rockstargames-modules-core-newswire-articled84c2dff4228f60ad6d32e1b56fb9ac1",
          gridCarousel: "rockstargames-modules-core-newswire-articlec8d973199844852aadd8606029f0daa6",
          limitedGridContent: "rockstargames-modules-core-newswire-articlea4b30725303d32828a1961bb3076192c",
          columnsDesktop2: "rockstargames-modules-core-newswire-articlece7233232cec02fec6de50aaba28594f",
          thirdLine: "rockstargames-modules-core-newswire-articlef84ce65d59fb1f61fe1b21deacc57a26",
          gridItem: "rockstargames-modules-core-newswire-articled05ae610f5db877460ee429055991b66",
          columnsDesktop3: "rockstargames-modules-core-newswire-articlec65e6612bac8edac8a80ee9d2c396172",
          columnsDesktop4: "rockstargames-modules-core-newswire-articlef8b062b1ebbe2717b603826b9ef0c0d7",
          extraDiv: "rockstargames-modules-core-newswire-articleebd3336e01812c90af2651b222dae3b2",
          gridText: "rockstargames-modules-core-newswire-articlea2545673c32ee8b79508e2f3670ad7e2",
          noTextFit: "rockstargames-modules-core-newswire-articleaf290b110fcbad08b23df942e44aaf6e",
          coupons: "rockstargames-modules-core-newswire-articlef19e5694de6017a3072b9d164ea0295e",
          imageArea: "rockstargames-modules-core-newswire-articlea11e08e06479988d77fa969507768b0b",
          carouselOnMobile: "rockstargames-modules-core-newswire-articlea97e99cab39ffe39a1c67dd0e96fcb10",
          imageAreaBg: "rockstargames-modules-core-newswire-articlea3925f45e40ce0f75341e297fe1a205e",
          carouselDesc: "rockstargames-modules-core-newswire-articleea2aaab9bc960a201218f7cab12a3779"
        },
        b = e => {
          let {
            to: t,
            children: a
          } = e;
          return t ? (0, n.jsx)("a", {
            href: t,
            target: "_blank",
            rel: "noreferrer",
            children: a
          }) : a
        },
        k = e => {
          let {
            items: t,
            noTextFit: a,
            type: s,
            carouselOnMobile: r,
            columns: o = {
              desktop: 3,
              mobile: 2
            }
          } = e;
          const [c, l] = (0, i.useState)(null), [d, m] = (0, i.useState)(3), u = (0, i.useRef)(null);
          return (0, i.useEffect)((() => {
            const e = window.getComputedStyle(u.current).getPropertyValue("--divisible-desktop"),
              a = () => {
                const t = window.innerWidth;
                m(t <= 767 ? 2 : e)
              };
            if (t?.content.length && t?.content.length >= d) {
              let {
                length: e
              } = t.content;
              const a = [];
              if (e % d != 0) {
                let t = 0;
                do {
                  a.push((0, n.jsx)("div", {
                    className: `${h.gridItem} ${h.extraDiv}`
                  }, "limited-grid-" + t++)), e++
                } while (e % d != 0)
              }
              l(a)
            }
            return window.addEventListener("resize", a), a(), () => window.removeEventListener("resize", a)
          }), [d, u]), (0, n.jsxs)("div", {
            className: `${h.limitedGrid} ${r?h.carouselOnMobile:""}`,
            children: [(0, n.jsxs)("div", {
              ref: u,
              style: {
                "--divisible-desktop": o.desktop,
                "--divisible-mobile": o.mobile
              },
              className: `\n                    ${h.limitedGridContent}\n                    ${2===o.desktop?h.columnsDesktop2:""}\n                    ${3===o.desktop?h.columnsDesktop3:""}\n                    ${o.desktop>=4?h.columnsDesktop4:""}\n                    ${a?h.noTextFit:""}\n                    ${s?h[s]:""}\n                `,
              children: [(0, n.jsx)("div", {
                className: h.thirdLine
              }), t.content.map(((e, t) => (0, n.jsx)("div", {
                className: h.gridItem,
                children: (0, n.jsxs)(b, {
                  to: e?.href ?? e?.to,
                  children: [!a && (0, n.jsx)(p.A, {
                    className: h.gridText,
                    min: 16,
                    max: 1e3,
                    mode: "single",
                    children: e.title
                  }), (0, n.jsx)("div", {
                    className: h.imageArea,
                    children: (0, n.jsx)(f.A, {
                      image: e.image,
                      ariaLabel: e.ariaLabel,
                      badgeType: "badge2",
                      badge: e.badge
                    })
                  }), a && (0, n.jsx)("p", {
                    children: e.title
                  })]
                })
              }, t))), c]
            }), r && (0, n.jsx)("div", {
              className: h.gridCarousel,
              children: (0, n.jsx)(g.A, {
                children: t.content.map(((e, t) => (0, n.jsxs)("div", {
                  children: [(0, n.jsx)("div", {
                    className: `${h.imageArea} ${h.imageAreaBg}`,
                    children: (0, n.jsx)(f.A, {
                      className: s ? h[s] : "",
                      image: e.image,
                      ariaLabel: e.ariaLabel,
                      badgeType: "badge2",
                      badge: e.badge
                    })
                  }), e.title && (0, n.jsx)("p", {
                    className: h.carouselDesc,
                    children: (0, n.jsx)(b, {
                      to: e?.href ?? e?.to,
                      children: e.title
                    })
                  })]
                }, t)))
              })
            })]
          })
        },
        v = e => {
          let {
            items: t = []
          } = e;
          if (!t.length) return null;
          let a = 0,
            s = 0;
          return t.map(((e, t) => {
            if (e.limitedList?.content || e.limitedGridList?.content) {
              const a = [];
              return e.limitedList?.content && a.push((0, n.jsx)(y, {
                items: e.limitedList.content,
                noInfiniteScroll: e?.noInfiniteScroll,
                perPage: e?.perPage
              }, e?.key ?? t)), e.limitedGridList?.content && a.push((0, n.jsx)(k, {
                columns: e.limitedGridList.columns,
                items: e.limitedGridList
              }, e?.key ?? t)), s++, (0, n.jsxs)("div", {
                children: [1 === s && (0, n.jsx)("div", {
                  className: "rockstargames-modules-core-newswire-articleec69a1e1d83f2c9b2d71b4afc2e8d41e",
                  children: (0, n.jsx)("div", {
                    className: "rockstargames-modules-core-newswire-articlef28c9e814f58215db0c40753bd85a265"
                  })
                }), a]
              }, t)
            }
            if (e.discountsList?.content || e.discountsGridList?.content) {
              const s = [];
              return e.discountsList?.content && s.push((0, n.jsx)(y, {
                items: e.discountsList.content,
                noInfiniteScroll: e?.noInfiniteScroll,
                perPage: e?.perPage
              }, e?.key ?? t)), e.discountsGridList?.content && s.push((0, n.jsx)(k, {
                noTextFit: !0,
                carouselOnMobile: !0,
                type: e.type ?? e.discountsGridList.type,
                columns: e.discountsGridList.columns,
                items: e.discountsGridList
              }, e?.key ?? t)), e?.list && s.push((0, n.jsx)(u.A, {
                ...e
              })), a++, (0, n.jsxs)("div", {
                children: [1 === a && (0, n.jsx)("div", {
                  className: "rockstargames-modules-core-newswire-articlea6b9b7f63ef349c57f3045b559b9a238"
                }), s]
              }, t)
            }
            return null
          }))
        };
      var w = a(26371);
      const _ = {
          wrapper: "rockstargames-modules-core-newswire-articleb9164bcc00cfb2322db5b3e1d60407a0",
          discountsCarouselItem: "rockstargames-modules-core-newswire-articleb1db5637574663ac89f33762c188d7eb",
          fontUpdate: "rockstargames-modules-core-newswire-articlea32986414e2f20d413cb21db77e5ddf2",
          discountsCarousel: "rockstargames-modules-core-newswire-articlee049405f569eb7a31b675e4066e535f7",
          singleImage: "rockstargames-modules-core-newswire-articlea34b328fa3d84d357c02b025e41c0352"
        },
        x = e => {
          let {
            wrapper: t,
            children: a,
            length: s
          } = e;
          return s > 1 ? t(a) : a
        },
        y = e => {
          let {
            items: t,
            noInfiniteScroll: a = !1,
            size: s = null,
            perPage: r = null,
            customSlidesPerView: o = null,
            style: c = {}
          } = e;
          const l = (0, i.useRef)(null),
            [d, m] = (0, i.useState)(null),
            [u, p] = (0, i.useState)(s);
          return (0, i.useEffect)((() => {
            !s && r && p(1 === r ? "lg" : "sm"), s || r || (p("lg"), console.error('Error: DiscountsCarousel expects a prop "size" in order to display the correct amount of slides. Defaulting to lg.'))
          }), [s, r]), (0, i.useEffect)((() => {
            if (!l.current) return;
            const e = () => {
              const e = o || window.getComputedStyle(l.current).getPropertyValue("--slides-per-view");
              m(e)
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), [l, o]), t.length ? (0, n.jsx)(x, {
            length: t.length,
            wrapper: e => (0, n.jsx)("div", {
              "data-size": u,
              ref: l,
              className: _.wrapper,
              children: (0, n.jsx)(g.A, {
                className: _.discountsCarousel,
                noInfiniteScroll: a,
                style: {
                  ...c,
                  "--per-page": d,
                  "--carousel-column-gap": "1rem"
                },
                children: e
              })
            }),
            children: t.map(((e, a) => (0, n.jsxs)("div", {
              className: [_.discountsCarouselItem, 1 === t.length ? _.singleImage : ""].join(" "),
              children: [(0, n.jsx)(f.A, {
                ariaLabel: e?.ariaLabel,
                image: e?.image ?? {
                  alt: e?.alt ?? "",
                  desktop: e?.img ?? null,
                  mobile: e?.imgMobile ?? null
                },
                badge: e?.badge ?? e?.image?.badge ?? e.discountTxt,
                splitter: e?.splitter ?? e?.image?.splitter,
                badgeType: "badgeSizeUpdate"
              }), (0, n.jsx)(w.A, {
                className: _.fontUpdate,
                item: e
              })]
            }, e?.key ?? a)))
          }) : (console.error('Error: DiscountsCarousel expects a prop "items" that contains an array of objects.'), null)
        };
      var j = a(28606),
        N = a(87839);
      const S = e => {
          let {
            items: t = [],
            style: a = {}
          } = e;
          return t.length ? (0, n.jsx)(j.A, {
            style: {
              "--grid-gap-dynamic": "var(--grid-gap-static-lg)",
              "--padding-dynamic-tb": "var(--grid-gap-static-lg)",
              "--image-rounding-dynamic": "0",
              ...a
            },
            children: t.map(((e, t) => e?.title_and_description ? (0, n.jsxs)(j.A, {
              context: "readable-text",
              style: {
                textAlign: "left",
                "--grid-gap-dynamic": "var(--grid-gap-static-xs)",
                background: "transparent"
              },
              children: [e?.title_and_description.title && (0, n.jsx)("h1", {
                className: "large",
                children: e.title_and_description.title
              }), e?.title_and_description.description && (0, n.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: e.title_and_description.description
                }
              })]
            }, e?.key ?? t) : e?.limitedList?.content ? (0, n.jsx)(y, {
              items: e.limitedList.content,
              noInfiniteScroll: e?.noInfiniteScroll,
              perPage: e?.perPage,
              size: e?.size
            }, e?.key ?? t) : e?.discountsGridList?.content ? (0, n.jsx)(d, {
              noCarousel: !0,
              columns: e.discountsGridList?.columns,
              items: e.discountsGridList.content
            }, e?.key ?? t) : e?.content ? (0, n.jsx)(N.A, {
              ...e,
              children: e.content
            }, e?.key ?? t) : e?.list ? (0, n.jsx)(u.A, {
              ...e
            }, e?.key ?? t) : void 0))
          }) : null
        },
        T = {
          area: "rockstargames-modules-core-newswire-articlebd369197d34037ca950bc456ae0edbfa",
          btmImg: "rockstargames-modules-core-newswire-articlea96546818d0319df5a2790c88dc1f5ea",
          limitedTopImg: "rockstargames-modules-core-newswire-articlec42389be5e7c869431a648165a5cae18",
          topImg: "rockstargames-modules-core-newswire-articleaffb8cefb29b116795380aa5314d5127"
        },
        C = e => {
          let {
            items: t,
            renderTemplate: a,
            ...s
          } = e;
          switch (a) {
            case "gtav":
            case "gtao":
              return (0, n.jsx)(S, {
                items: t,
                ...s
              });
            case "grid":
              return (0, n.jsx)(d, {
                items: t,
                ...s
              });
            default:
              return (0, n.jsx)(v, {
                items: t
              })
          }
        },
        A = e => {
          let {
            items: t,
            renderTemplate: a,
            style: s,
            ...r
          } = e;
          return (0, n.jsx)("div", {
            className: T.area,
            "data-context": "discounts",
            children: (0, n.jsxs)("div", {
              className: T.discountsContent,
              children: [(0, n.jsx)(C, {
                renderTemplate: a,
                items: t,
                props: r,
                style: s
              }), (0, n.jsx)("div", {
                className: T.btmImg
              })]
            })
          })
        };
      var I = a(61631),
        M = a.n(I);
      const L = {
          donate: "rockstargames-modules-core-newswire-articleff9f3568a504aa9435bb271c905604c6",
          largePaddingSides: "rockstargames-modules-core-newswire-articleeda019a9aff0ac7012c1f9d07452fb57"
        },
        E = e => {
          let {
            text: t
          } = e;
          const {
            sanitize: a
          } = M();
          return (0, n.jsx)("div", {
            className: [L.donate, "normalPaddingTopBottom largePaddingSides"].join(" "),
            children: (0, n.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: a(t)
              }
            })
          })
        };
      var P = a(54252),
        O = a.n(P),
        z = a(74401),
        D = a(64064),
        B = a.n(D),
        V = a(31879),
        $ = a.n(V),
        F = a(85184);
      const R = {
          pillBtn: "rockstargames-modules-core-newswire-articlef9b4575485160d1ee87bf2d85c618500",
          selected: "rockstargames-modules-core-newswire-articlefc0de6978953b2e05ca6256e5df9ddeb",
          event: "rockstargames-modules-core-newswire-articledeb35a20cd305c1c3f58adf38c18a13b",
          featured: "rockstargames-modules-core-newswire-articlec9494ef21ed459fabdebc24519c1880c",
          eventInfo: "rockstargames-modules-core-newswire-articlef0f5b255059bdf027309b512d3f6b154",
          large: "rockstargames-modules-core-newswire-articlec21ddd1ba6d193681ca88e9d03509ad4",
          videoWrapper: "rockstargames-modules-core-newswire-articlefa2fc51439d229dae72eeb8818a0c0c5"
        },
        G = e => {
          let {
            images: t
          } = e;
          return t?.length ? 1 === t.length ? (0, n.jsx)(f.A, {
            ...t[0]
          }) : (0, n.jsx)(g.A, {
            items: t
          }) : null
        },
        H = e => {
          let {
            images: t,
            title: a,
            content: s,
            isFeatured: r = !1,
            className: o = null,
            videoInHeroProps: c,
            hideNewswireTitle: d = !1
          } = e;
          const m = (0, z.useTinaPayload)(),
            u = m?.meta?.prod ?? !1,
            g = (0, z.useTinaComponents)();
          O().set(m, "meta.prod", u);
          let p = c?.gifVideoProps?.hasVideoInHero || !1;
          const h = c?.htmlVideoProps?.id || !1,
            b = !!c?.htmlVideoProps?.hasHtmlVideoInHero && h;
          b && p && (p = !1);
          const k = void 0 === c || !p && !b,
            v = (0, i.useMemo)((() => ({
              ...g,
              HTMLElement: N.A,
              ImageWithBadge: f.A,
              GroupOfItems: l()
            })), [g]);
          return (0, n.jsxs)("div", {
            className: (0, z.classList)(R.event, o),
            children: [p && (0, n.jsx)("div", {
              className: R.videoWrapper,
              children: (0, n.jsx)(B(), {
                hash: {
                  desktop: c?.gifVideoProps?.hash?.desktop,
                  mobile: c?.gifVideoProps?.hash?.mobile
                },
                loop: c?.gifVideoProps?.isLooping
              })
            }), b && h && (0, n.jsx)("div", {
              className: R.videoWrapper,
              children: (0, n.jsx)($(), {
                autoplay: c?.htmlVideoProps?.autoPlay || !1,
                id: h
              })
            }), k && (0, n.jsx)(G, {
              images: t
            }), r && (0, n.jsx)(F.default, {}), (0, n.jsxs)("div", {
              className: R.eventInfo,
              children: [!r && !d && (0, n.jsx)("h3", {
                className: R.eventTitle,
                children: a
              }), (0, n.jsx)(z.TinaParser, {
                components: v,
                tina: {
                  payload: {
                    content: s,
                    meta: {
                      prod: u
                    }
                  }
                }
              })]
            })]
          })
        },
        U = e => (0, n.jsx)(H, {
          ...e,
          className: R.featured,
          isFeatured: !0
        }),
        W = {
          clip: "rockstargames-modules-core-newswire-articlee0224b729307b43a17327188777c3c60",
          redTexture: "rockstargames-modules-core-newswire-articlebbcb053265bd42678ed1086e133ee340",
          greyTexture: "rockstargames-modules-core-newswire-articlea58880949ade673f268f021629ed7bb0"
        },
        q = e => {
          let {
            fontFamily: t = "inherit",
            fontBg: a,
            string: s
          } = e;
          return (0, n.jsx)("span", {
            style: {
              "--font-family-clip": t
            },
            className: [W.clip, W[a]].join(" "),
            children: s
          })
        };
      var X = a(95625),
        Y = a(61841),
        Q = a(70396);
      const K = {
          gamingWrapper: "rockstargames-modules-core-newswire-articlec33afa2532a66477387c16a5b7609e34",
          gamingRewards: "rockstargames-modules-core-newswire-articleb322b28290c4e636c9b32f29917c5142",
          psPlus: "rockstargames-modules-core-newswire-articlee23e4159dabd78b608752229f0d0b72c",
          rightSide: "rockstargames-modules-core-newswire-articlef112487054e57af59822a171d10c37a9",
          primeGamingSocialLogo: "rockstargames-modules-core-newswire-articleec4eb482f8b948a6a76705b272a8d13e",
          gtaPlus: "rockstargames-modules-core-newswire-articleacbc30267860abd5959b92dd3c096bf2",
          plus: "rockstargames-modules-core-newswire-articlec4b85ff28ea81e7439b17ff6769cffa9",
          listArea: "rockstargames-modules-core-newswire-articleaed79f67f607b829c74dccab234aca0a",
          psPlusDefaultImg: "rockstargames-modules-core-newswire-articleeb72969e58b99a2bbe3c86723f8568e4"
        },
        Z = e => {
          let {
            headline: t,
            plainImage: s,
            top: r,
            unorderedList: i,
            bottom: o,
            rewards: c = "primeGaming",
            style: l = {}
          } = e;
          const d = (0, Q.useLocale)();
          return "primeGaming" === c && ["ru", "kr", "ko_kr", "ru_ru"].includes(d) ? null : (0, n.jsx)("div", {
            className: K.gamingWrapper,
            children: (0, n.jsx)("div", {
              className: `${K.gamingRewards} ${K[c]}`,
              style: l,
              children: (0, n.jsxs)(X.A, {
                style: {
                  "--grid-align-items": "center",
                  "--grid-row-gap": "2rem"
                },
                children: [(0, n.jsxs)(Y.A, {
                  children: [t && (0, n.jsx)("h3", {
                    children: t
                  }), "psPlus" === c && (0, n.jsx)("img", {
                    "aria-label": "Playstation Plus Benefit",
                    className: K.primeGamingSocialLogo,
                    src: a(51360)
                  }), "primeGaming" === c && (0, n.jsx)("img", {
                    "aria-label": "Social Club | Prime Gaming",
                    className: K.primeGamingSocialLogo,
                    src: a(32863)
                  }), "gtaPlus" === c && (0, n.jsx)("img", {
                    "aria-label": "GTA Plus",
                    className: K.primeGamingSocialLogo,
                    src: a(71354)
                  }), r?.text && (0, n.jsx)("p", {
                    dangerouslySetInnerHTML: {
                      __html: r.text
                    }
                  }), i?.list && (0, n.jsx)("div", {
                    className: K.listArea,
                    children: (0, n.jsx)(u.A, {
                      className: "gtaPlus" === c ? K.plus : "",
                      ...i,
                      list: i.list,
                      ...i?.attributes
                    })
                  }), o?.text && (0, n.jsx)("p", {
                    dangerouslySetInnerHTML: {
                      __html: o.text
                    }
                  })]
                }), (0, n.jsx)(Y.A, {
                  className: K.rightSide,
                  children: s?.image ? (0, n.jsx)(m.A, {
                    image: s.image
                  }) : (0, n.jsx)("div", {
                    className: K.psPlusDefaultImg
                  })
                })]
              })
            })
          })
        };
      var J = a(42012),
        ee = a(88038),
        te = a(58407),
        ae = a(1956);
      const se = e => {
        let {
          backgroundImages: t,
          deckHash: a = "",
          perPage: s = null
        } = e;
        const [r, o] = (0, i.useState)(null), c = (0, z.useGetCdnSource)(t?.backgroundImg?.full_src ?? null), l = (0, z.useGetCdnSource)(t?.layeredImg?.full_src ?? null), d = (0, i.useRef)(null), {
          data: m,
          error: u
        } = (0, te.useQuery)(ae.TinaModulesInfo, {
          variables: {
            ids: a
          },
          skip: !a
        });
        return (0, i.useEffect)((() => {
          if (m?.tinaModulesInfo) {
            const e = m.tinaModulesInfo[0],
              {
                id: t,
                tina: a
              } = e,
              s = O().clone(a);
            O().set(s, "payload.meta.id", t), o(s)
          }
        }), [m]), m && r ? u ? (0, n.jsx)(ee.A, {
          error: u
        }) : (0, n.jsx)("div", {
          className: "rockstargames-modules-core-newswire-articlee274b3eb1b6b53a4a1a15a8f7e45c32b",
          ref: d,
          style: {
            "--background-image": `url(${c})`,
            "--layered-image": `url(${l})`,
            "--slides-per-view-desktop": s
          },
          children: (0, n.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articleb22f3a069f5ae8392b6f0a125b2fcc7c",
            children: [l ? (0, n.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articlef24111149ce32640ed3990c565f1f663"
            }) : "", (0, n.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articled816468db56e41fe199319fd7f20b8fd",
              children: (0, n.jsx)(z.TinaParser, {
                components: {
                  Deck: J.E$
                },
                tina: r
              })
            })]
          })
        }) : null
      };
      var re = a(26043),
        ie = a(37920),
        ne = a.n(ie);
      const oe = e => {
          let {
            children: t,
            className: a = "",
            style: s,
            game: r
          } = e;
          return (0, i.useEffect)((() => {
            document.fonts.ready.then((() => {
              ne().balanceText()
            }))
          }), [t]), (0, n.jsx)("div", {
            className: ["newswireFull", r, a].join(" "),
            style: s,
            "data-game": r,
            children: t
          })
        },
        ce = e => {
          let {
            pct: t,
            bgColor: a,
            primaryColor: s
          } = e;
          return (0, n.jsx)("div", {
            style: {
              position: "relative",
              width: "100%",
              height: "20px",
              backgroundColor: a
            },
            children: (0, n.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articlebd486f774b8499df78c2751a83ceb906",
              style: {
                backgroundColor: s,
                position: "absolute",
                top: "0",
                left: "0",
                width: `${t}%`,
                height: "100%"
              }
            })
          })
        };
      var le = a(37297),
        de = a(17375);
      const me = e => {
        let {
          title: t,
          desc: a,
          img: s,
          imgMobile: r,
          bgColor: i,
          descPositionBottom: o,
          fontColor: c = "#fff"
        } = e;
        return (0, n.jsxs)(n.Fragment, {
          children: [o ?? (0, n.jsx)(de.A, {
            style: {
              backgroundColor: `${i}`,
              "--padding-top-bottom": "1.75rem"
            },
            className: "normalPaddingTopBottom largePaddingSides",
            children: (0, n.jsxs)(de.A, {
              className: "maxDescArea",
              style: {
                "--desc-h3-margin-bottom": "var(--h-rem-size)"
              },
              children: [(0, n.jsx)("h3", {
                style: {
                  "--color-span": `${c}`
                },
                children: t
              }), (0, n.jsx)("p", {
                children: a
              })]
            })
          }), (0, n.jsxs)(de.A, {
            className: [o ?? "spacing"].join(" "),
            children: [(0, n.jsx)(le.A, {
              className: "hiddenMobile",
              src: s
            }), (0, n.jsx)(le.A, {
              className: "hiddenLarge",
              src: r
            })]
          }), o ? (0, n.jsx)(de.A, {
            style: {
              backgroundColor: `${i}`,
              "--padding-top-bottom": "1.75rem"
            },
            className: "normalPaddingTopBottom largePaddingSides spacing",
            children: (0, n.jsxs)(de.A, {
              className: "maxDescArea",
              style: {
                "--desc-h3-margin-bottom": "var(--h-rem-size)"
              },
              children: [(0, n.jsx)("h3", {
                style: {
                  "--color-span": `${c}`
                },
                children: t
              }), (0, n.jsx)("p", {
                children: a
              })]
            })
          }) : null]
        })
      }
    },
    34983: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => g
      });
      var s = a(71403),
        r = a(59028),
        i = a.n(r),
        n = a(58407),
        o = a(83178);
      const c = {
        player: "rockstargames-modules-core-newswire-articlebb43df423657efcc0f1f38630a24e5e8",
        fixedToBottom: "rockstargames-modules-core-newswire-articlee1f497e3ec34c2fd721b124969e27dd5",
        tracksOpen: "rockstargames-modules-core-newswire-articlee8f2736f0ae21a56045104071a7a9fd7",
        tracks: "rockstargames-modules-core-newswire-articleea84096a931648765b1db46f708f70aa",
        iconBurger: "rockstargames-modules-core-newswire-articleb91aad66a2102668715c5ddaaecede2e",
        trackList: "rockstargames-modules-core-newswire-articlec44536ca7b7fa7236e86c65ae309057e",
        trackActive: "rockstargames-modules-core-newswire-articleac7826f934fc777f58017b1a5752419a",
        trackTitle: "rockstargames-modules-core-newswire-articleaafc522e642572d5ff93c7408b941829",
        trackIndex: "rockstargames-modules-core-newswire-articleb880baa4707c71eb543f905816d8e952",
        controls: "rockstargames-modules-core-newswire-articleff92c8eddfc0a0fa7bc7f444973e4f28",
        controlsCurrentBg: "rockstargames-modules-core-newswire-articlea81d9465f14d65e8e20800d7b25f77d9",
        controlsCurrentBgVisible: "rockstargames-modules-core-newswire-articlec87bd14d2bbc9248d9c197b77454f345",
        controlsTrack: "rockstargames-modules-core-newswire-articlec23bf574089d1af93750f6af8ebb489f",
        controlsTrackTitle: "rockstargames-modules-core-newswire-articlee4b77d29e904f9928cca1de93f5c7745",
        controlsTrackAnimating: "rockstargames-modules-core-newswire-articleba49949a9cd8c22385708f267c625029",
        scrollText: "rockstargames-modules-core-newswire-articlefd9c80e5afaa1ed38ce85f2c3d70eae4",
        controlsTrackArtist: "rockstargames-modules-core-newswire-articlec93c1e5399d9fd5e96ca246fdbfb307b",
        controlsTrackBurger: "rockstargames-modules-core-newswire-articleb4e1a16e3460b40c1aacd92afe219856",
        controlsButtons: "rockstargames-modules-core-newswire-articled136125994c1d0db1449fce51af559ca",
        controlsScrub: "rockstargames-modules-core-newswire-articled3d935648408f71928bd49d2f7c5a9ff",
        controlsPlayPause: "rockstargames-modules-core-newswire-articlef5de7526c8cee98bdd7363fd7f2cf8ae",
        controlsPlayPausePlaying: "rockstargames-modules-core-newswire-articleefb6194f0df966e6c8c759937d2fb826",
        controlsNextTrack: "rockstargames-modules-core-newswire-articlef286e0ce01c5401e56dd579b076f1aae",
        controlsPrevTrack: "rockstargames-modules-core-newswire-articlea56bb7cb4b0e2de481777d1f09c3f2f2",
        controlsScrubTrack: "rockstargames-modules-core-newswire-articleb8f38f45353fa54fcb6f9e2a3d0d5a85"
      };
      var l = a(46632);
      const d = e => {
          let {
            src: t
          } = e;
          return (0, l.jsx)("div", {
            className: c.cover,
            style: {
              background: `url(${t}) center/cover`
            }
          })
        },
        m = e => {
          let {
            timing: t = {
              current: 0,
              duration: 0
            },
            playing: a,
            audioRef: r,
            setPlaying: n,
            tracksOpen: o,
            setTracksOpen: d,
            trackData: m,
            setTrackId: u,
            trackBounds: g,
            setAutoNext: f
          } = e;
          const p = (0, s.useRef)(null),
            h = (0, s.useRef)(null),
            b = (0, s.useRef)(null),
            [k, v] = (0, s.useState)(null),
            [w, _] = (0, s.useState)(!1),
            x = e => {
              const t = new Date(1e3 * e),
                a = t.getUTCMinutes(),
                s = t.getSeconds();
              return `${a.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")}`
            };
          return (0, s.useEffect)((() => {
            if (!h.current || !b.current) return;
            const e = () => {
              b.current && h.current && v(b.current.clientWidth > h.current.clientWidth)
            };
            return window.addEventListener("resize", e), e(), () => window.removeEventListener("resize", e)
          }), [b, h, t]), (0, s.useEffect)((() => {
            if (!p.current || !t?.duration) return;
            let e = null;
            const a = new(i())(p.current),
              s = e => {
                if (p.current) {
                  const a = p.current.clientWidth;
                  if (!p.current.contains(e.srcEvent.target)) return;
                  const s = Math.max(0, e.srcEvent.offsetX),
                    i = Number(s / a * t.duration);
                  r.currentTime = i
                }
              },
              n = () => {
                e ? r.pause() : r.play()
              },
              o = () => {
                e = r.paused, r.pause()
              };
            return a.on("panstart", o), a.on("panleft", s), a.on("panright", s), a.on("panend", n), a.on("tap", s), () => {
              a.off("panstart", o), a.off("panleft", s), a.off("panright", s), a.off("panend", n), a.off("tap", s)
            }
          }), [p.current, t.duration]), (0, s.useEffect)((() => {
            const e = Number(r?.currentTime);
            (a || !isNaN(e) && 0 !== e) && _(!0)
          }), [a, r?.currentTime]), (0, l.jsxs)("div", {
            className: c.controls,
            style: {
              "--track-color": m.color,
              "--track-mix-blend-mode": m.mix_blend_mode,
              "--current-pct": t.current / t.duration
            },
            children: [(0, l.jsx)("div", {
              className: [c.controlsCurrentBg, w ? c.controlsCurrentBgVisible : ""].join(" ")
            }), (0, l.jsx)("div", {
              className: c.controlsTrack,
              ref: h,
              children: (0, l.jsx)("span", {
                className: [c.controlsTrackTitle, k ? c.controlsTrackAnimating : ""].join(" "),
                ref: b,
                children: m.title
              })
            }), (0, l.jsxs)("div", {
              className: c.controlsButtons,
              children: [(0, l.jsx)("div", {
                className: c.controlsPrevTrack,
                onClick: () => {
                  g && (u(g[0]), f(!0), n(!0))
                }
              }), (0, l.jsx)("div", {
                className: [c.controlsPlayPause, a ? c.controlsPlayPausePlaying : ""].join(" "),
                onClick: () => {
                  n(!a)
                }
              }), (0, l.jsx)("div", {
                className: c.controlsNextTrack,
                onClick: () => {
                  g && (u(g[1]), f(!0), n(!0))
                }
              })]
            }), (0, l.jsx)("div", {
              active: o ? "" : null,
              className: c.controlsTrackBurger,
              children: (0, l.jsx)("div", {
                className: c.iconBurger,
                onClick: () => {
                  d(!o)
                }
              })
            }), (0, l.jsxs)("div", {
              className: c.controlsScrub,
              children: [(0, l.jsx)("span", {
                children: x(t.current)
              }), (0, l.jsx)("div", {
                className: c.controlsScrubTrack,
                ref: p
              }), (0, l.jsx)("span", {
                children: x(t.duration)
              })]
            })]
          })
        },
        u = e => {
          let {
            tracks: t,
            trackId: a,
            setTrackId: s,
            tracksOpen: r,
            setTracksOpen: i,
            setPlaying: n,
            setAutoNext: o
          } = e;
          return (0, l.jsxs)("div", {
            className: c.tracks,
            children: [(0, l.jsx)("h4", {
              children: "Tracks"
            }), (0, l.jsx)("div", {
              className: c.trackBurger,
              onClick: () => {
                i(!r)
              }
            }), (0, l.jsx)("div", {
              className: c.trackList,
              children: t.map(((e, t) => (0, l.jsxs)("a", {
                style: {
                  "--highlight-color": e.color
                },
                className: a === e.id ? c.trackActive : "",
                onClick: () => {
                  s(e.id), n(!0), o(!0)
                },
                children: [(0, l.jsx)("span", {
                  className: c.trackIndex,
                  children: String(t + 1).padStart(2, "0")
                }), (0, l.jsx)("span", {
                  className: c.trackTitle,
                  children: e.title
                }), (0, l.jsx)("span", {
                  className: c.trackTime,
                  children: e.duration
                })]
              }, e.id)))
            })]
          })
        },
        g = e => {
          let {
            id: t,
            className: a = ""
          } = e;
          const {
            data: r
          } = (0, n.useQuery)(o.GetAudioAlbum, {
            variables: {
              id: t
            }
          }), [i, g] = (0, s.useState)(), [f, p] = (0, s.useState)(), [h, b] = (0, s.useState)(), [k, v] = (0, s.useState)(!1), [w, _] = (0, s.useState)(!1), [x, y] = (0, s.useState)(new HTMLAudioElement), [j, N] = (0, s.useState)({
            current: 0,
            duration: 0
          }), [S, T] = (0, s.useState)(!0);
          return (0, s.useEffect)((() => {
            const e = "audio",
              t = t => {
                t?.data?.rockstarAudioPlayerPlayTrackId && (p(t.data.rockstarAudioPlayerPlayTrackId), T(!1), _(!0)), w && t?.data?.attentionBlurredElsewhere && t?.data?.from !== e && _(!1)
              };
            return w && window.postMessage({
              attentionBlurredElsewhere: !0,
              from: e
            }), window.addEventListener("message", t, !1), () => window.removeEventListener("message", t, !1)
          }), [w]), (0, s.useEffect)((() => {
            if (!x) return;
            const e = () => {
                isNaN(x.duration) || N({
                  duration: x?.duration ?? 0,
                  current: x?.currentTime ?? 0
                })
              },
              t = () => {
                S && i && p(i[1])
              };
            return x.addEventListener("loadedmetadata", e), x.addEventListener("timeupdate", e), x.addEventListener("ended", t), () => {
              x.removeEventListener("loadedmetadata", e), x.removeEventListener("timeupdate", e), x.removeEventListener("ended", t)
            }
          }), [x, i, S]), (0, s.useEffect)((() => {
            w && window.postMessage({
              attentionBlurredElsewhere: !0,
              from: "audio"
            })
          }), [w]), (0, s.useEffect)((() => {
            x && (w ? x.play() : x.pause(), v(!1))
          }), [w, x, h?.id]), (0, s.useEffect)((() => {
            if (!f) return;
            const {
              tracks: e
            } = r.audioAlbum, t = r.audioAlbum.tracks.findIndex((e => e.id === f));
            g([e[t - 1]?.id ?? e[e.length - 1].id, e[t + 1]?.id ?? e[0].id]), b(e[t])
          }), [f]), (0, s.useEffect)((() => {
            r && p(r.audioAlbum.tracks[0].id)
          }), [r]), h ? (0, l.jsxs)("div", {
            className: [c.player, c[a], k ? c.tracksOpen : ""].join(" "),
            children: [(0, l.jsx)("audio", {
              ref: e => {
                y(e)
              },
              src: h.mp3_src
            }), (0, l.jsx)(u, {
              tracks: r.audioAlbum.tracks,
              setTrackId: p,
              trackId: f,
              tracksOpen: k,
              setTracksOpen: v,
              setPlaying: _,
              setAutoNext: T
            }), (0, l.jsx)(d, {
              src: h.cover_src
            }), (0, l.jsx)(m, {
              setTrackId: p,
              trackBounds: i,
              tracksOpen: k,
              setTracksOpen: v,
              playing: w,
              setPlaying: _,
              timing: j,
              trackData: h,
              audioRef: x,
              setAutoNext: T
            })]
          }) : null
        }
    },
    55430: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => h
      });
      var s = a(71403),
        r = a(300),
        i = a(42756),
        n = a(40207),
        o = a(58407),
        c = a(59781),
        l = a(22778),
        d = a(46632);
      const m = e => {
          let {
            className: t
          } = e;
          return (0, d.jsxs)("svg", {
            className: t,
            width: "16",
            height: "17",
            viewBox: "0 0 16 17",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, d.jsx)("path", {
              d: "M3.33203 8.5H12.6654",
              stroke: "white",
              strokeWidth: "1.33",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }), (0, d.jsx)("path", {
              d: "M8 3.83331L12.6667 8.49998L8 13.1666",
              stroke: "white",
              strokeWidth: "1.33",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })]
          })
        },
        u = {
          pillBtn: "rockstargames-modules-core-newswire-articlee3158363419b66e5afa2264e4928890c",
          selected: "rockstargames-modules-core-newswire-articlea9649249223f164eff11174ffc72616b",
          calloutContainer: "rockstargames-modules-core-newswire-articlee6bd244761fdf3ebe3888539d9942921",
          calloutSection: "rockstargames-modules-core-newswire-articleb1b8c93299158ef7d0f9eb04e14a7a64",
          calloutHeaders: "rockstargames-modules-core-newswire-articlec81810436a5b57307c41f4d7a704b2f7",
          calloutHeaderMargins: "rockstargames-modules-core-newswire-articleb4e1f72dfa9b38f23017e5f8ef48b9cb",
          calloutHeader: "rockstargames-modules-core-newswire-articleb7964754215256201dd703aedca18b6f",
          calloutSubheader: "rockstargames-modules-core-newswire-articleac660fa7995007ed875e03a257e447d7",
          calloutVoteForm: "rockstargames-modules-core-newswire-articlebee0795a36dd5adf822e1e50a7260f3d",
          voteButton: "rockstargames-modules-core-newswire-articleb1baa545566a61b791b696c9ebf560ad",
          upvote: "rockstargames-modules-core-newswire-articleb9c17ddd3e1052acb5097909ae2b07a1",
          downvote: "rockstargames-modules-core-newswire-articlef26b53e66e552183743465cce6a8d3a8",
          active: "rockstargames-modules-core-newswire-articled38a1764483a36e8a1509aee5b88ec31",
          calloutButton: "rockstargames-modules-core-newswire-articleb7eb76afce3c6e686be44c356837b627",
          calloutLink: "rockstargames-modules-core-newswire-articleaefe6c5a233047c943a864cd56a7de2d",
          calloutLinkIcon: "rockstargames-modules-core-newswire-articlea74bf6baa632ad9b5f87efd2043cfed5",
          actionBlock: "rockstargames-modules-core-newswire-articlecc491ddd715196ecd6ef54017ff05ec0",
          actionFooter: "rockstargames-modules-core-newswire-articledb26fed58ce50f4affc114670885721a"
        },
        g = e => {
          let {
            foreign_id: t,
            foreign_type: a
          } = e;
          const {
            track: r
          } = (0, n.useGtmTrack)(), {
            refetch: i
          } = (0, o.useQuery)(c.UserGetVote, {
            skip: !0
          }), [l] = (0, o.useMutation)(c.UserCastVote), [m, g] = (0, s.useState)(null), f = (0, s.useCallback)((e => {
            (async () => {
              if (e === m && null !== m) g(null);
              else {
                g(e), r({
                  event: "cta_" + (e ? "like" : "dislike"),
                  text: `${a} ${t}`
                });
                const s = {
                  foreignId: t,
                  foreignType: a,
                  vote: e
                };
                await l({
                  variables: s
                })
              }
            })()
          }), [t, a, m]);
          return (0, s.useEffect)((() => {
            t && a && (async () => {
              const e = await i({
                foreignId: t,
                foreignType: a
              });
              g(e?.data?.userGetVote?.vote ?? null)
            })()
          }), [t, a]), (0, d.jsxs)("div", {
            className: u.calloutVoteForm,
            children: [(0, d.jsx)("button", {
              "aria-label": "upvote",
              className: [u.upvote, u.voteButton, m ? u.active : ""].join(" "),
              name: "upvote",
              onClick: () => f(!0),
              type: "button"
            }), (0, d.jsx)("button", {
              "aria-label": "downvote",
              className: [u.downvote, u.voteButton, !1 === m ? u.active : ""].join(" "),
              name: "downvote",
              onClick: () => f(!1),
              type: "button"
            })]
          })
        },
        f = e => {
          let {
            action_text: t,
            link: a,
            trackingData: s
          } = e;
          const {
            track: r
          } = (0, n.useGtmTrack)();
          return (0, d.jsx)("a", {
            href: a,
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, d.jsxs)("button", {
              className: u.calloutLink,
              type: "button",
              onClick: s ? () => r({
                ...s
              }) : () => {},
              children: [t, (0, d.jsx)(m, {
                className: u.calloutLinkIcon
              })]
            })
          })
        },
        p = e => {
          let {
            helperText: t,
            linkText: a,
            link: s,
            trackingData: r
          } = e;
          const {
            track: i
          } = (0, n.useGtmTrack)();
          return (0, d.jsxs)("div", {
            className: u.actionFooter,
            children: [t, a && " ", a && (0, d.jsx)("a", {
              href: s ?? "",
              onClick: () => i({
                ...r
              }),
              children: a
            })]
          })
        },
        h = (0, i.withTranslations)((e => {
          let {
            header: t,
            subheader: a,
            type: i,
            action_text: o,
            link: c,
            foreign_id: m = document.location.pathname,
            foreign_type: h = "url",
            className: b = "",
            actionFooterHelperText: k,
            actionFooterLinkText: v,
            actionFooterLink: w,
            trackingData: _ = {},
            actionFooterLinkTrackingData: x = {},
            t: y,
            ...j
          } = e;
          const {
            loggedIn: N
          } = (0, n.useRockstarUser)(), {
            track: S
          } = (0, n.useGtmTrack)(), T = `${document.location.origin}/auth/sc-auth-login?returnUrl=${window.location.pathname}`, {
            ref: C,
            inView: A
          } = (0, r.Wx)({
            threshold: .6
          }), [I, M] = (0, s.useState)(!1);
          let L;
          if ((0, s.useEffect)((() => {
              A && !I && (S({
                event: "page_section_impression",
                element_placement: `callout section - ${j?.sectionName??j?._memoq?.header}`
              }), M(!0))
            }), [A]), !t && !a) return null;
          switch (i) {
            case "vote":
              if (!N) {
                L = (0, d.jsx)(l.A, {
                  to: T,
                  className: u.calloutButton,
                  onClick: _ ? () => S({
                    ..._
                  }) : () => {},
                  children: "Log In"
                });
                break
              }
              L = (0, d.jsx)(g, {
                foreign_id: m,
                foreign_type: h
              });
              break;
            case "button":
              o && c && (L = (0, d.jsx)(l.A, {
                to: c,
                className: u.calloutButton,
                onClick: _ ? () => S({
                  ..._
                }) : () => {},
                children: o
              }));
              break;
            case "link":
              o && c && (L = (0, d.jsx)(f, {
                action_text: o,
                link: c,
                trackingData: _
              }));
              break;
            default:
              L = null
          }
          return (0, d.jsx)("div", {
            className: `${u.calloutContainer} ${b||""}`,
            ref: C,
            children: (0, d.jsxs)("div", {
              className: u.calloutSection,
              children: [(0, d.jsxs)("div", {
                className: [u.calloutHeaders, L ? u.calloutHeaderMargins : ""].join(" "),
                children: [t && (0, d.jsx)("h2", {
                  className: u.calloutHeader,
                  children: y(t)
                }), a && (0, d.jsx)("h3", {
                  className: u.calloutSubheader,
                  children: y(a)
                })]
              }), (0, d.jsxs)("div", {
                className: u.actionBlock,
                children: [L, k && (0, d.jsx)(p, {
                  helperText: k,
                  linkText: v,
                  link: w,
                  trackingData: x
                })]
              })]
            })
          })
        }))
    },
    21450: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => g
      });
      var s = a(71403),
        r = a(74401),
        i = a(81902),
        n = a(41136);
      const o = {
        deprecatedCarousel: "rockstargames-modules-core-newswire-articleeb5df7b3d51dffc4d993ca7abce4e944",
        "swiper-scrollbar-disabled": "rockstargames-modules-core-newswire-articleeb2dda6769a7c20a31e7996ff62e41f8",
        "swiper-horizontal": "rockstargames-modules-core-newswire-articleb11093de3cb4f18ea2d59b8d4d1db44c",
        "swiper-vertical": "rockstargames-modules-core-newswire-articlefa3209fdf995734a1aeeac2cc72cc1ea",
        renderedWithChildren: "rockstargames-modules-core-newswire-articlec9f15e74b3166cd0db40501fcc70e868",
        panorama: "rockstargames-modules-core-newswire-articlef2a7e77af5dff445e978fd575a567508",
        img: "rockstargames-modules-core-newswire-articlef1d3d54c266a20fa0cbe9c342b0d98da",
        hideMobile: "rockstargames-modules-core-newswire-articlee70d5eaa273e4a0a40ee62a308491810",
        hideLarge: "rockstargames-modules-core-newswire-articlebace2af6c822ba7b36b53923629cba0f",
        imageAreaBg: "rockstargames-modules-core-newswire-articlef4bb071e6dad07c75b78ea21269ca662",
        infinite_false: "rockstargames-modules-core-newswire-articled6c3d175b843462bf23a1a1f3af6b095",
        track: "rockstargames-modules-core-newswire-articleb5ff781c4a96bf031e8e7f5e0c9af395",
        perico: "rockstargames-modules-core-newswire-articlebb97d296d17b7e801c6c0719a79463dd",
        dotsSlide: "rockstargames-modules-core-newswire-articledd55a6f93254ed13542089c6f36e0048",
        siblings: "rockstargames-modules-core-newswire-articlea59cf4385528c371a13be9962b67131b",
        active: "rockstargames-modules-core-newswire-articleaa5e195e0c7c6336929553314d52a896",
        "swiper-preloader-spin": "rockstargames-modules-core-newswire-articlec05cc0faa8239c85cdc7d53c7e120e8e"
      };
      var c = a(26371),
        l = a(8999),
        d = a(46632);
      const m = e => {
          let {
            item: t
          } = e;
          return (0, d.jsxs)("div", {
            children: [(0, d.jsx)(l.A, {
              image: t?.image,
              badge: t?.badge ?? t?.image?.badge,
              badgeType: "badge3",
              role: t?.role ?? t?.image?.role,
              splitter: t?.splitter ?? t?.image?.splitter,
              type: t?.type,
              ariaLabel: t?.image?.ariaLabel ?? t.description,
              style: t?.style,
              className: (0, r.classList)(o.img, t?.className)
            }), (t?.title || t?.description) && (0, d.jsx)(c.A, {
              item: t
            })]
          })
        },
        u = e => {
          let {
            current: t,
            total: a
          } = e;
          return (0, d.jsx)("div", {
            className: "swiper-scrollbar",
            style: {
              "--current-slide": t,
              "--total-slides": a
            },
            children: (0, d.jsx)("div", {
              className: "swiper-scrollbar-drag"
            })
          })
        },
        g = e => {
          let {
            children: t,
            items: a = [],
            style: l = {},
            noInfiniteScroll: g = !1,
            className: f = "",
            renderTemplate: p = "standard",
            text: h,
            customSpaceBetween: b = null,
            centerSlides: k = !0,
            centeredSlidesBounds: v = !1
          } = e;
          const [w, _] = (0, s.useState)(0), x = (0, s.useMemo)((() => t && Array.isArray(t) ? t.map((() => (0, n.A)())) : null), [t]);
          if (!(a && 0 !== a?.length || t)) return null;
          const y = {
            0: {
              spaceBetween: b ?? 16
            },
            1024: {
              spaceBetween: b ?? 18
            },
            1920: {
              spaceBetween: b ?? 20
            },
            2560: {
              spaceBetween: b ?? 22
            }
          };
          return (0, d.jsxs)("div", {
            className: (0, r.classList)(o.deprecatedCarousel, o[p], o[`infinite_${!g}`], t ? o.renderedWithChildren : "", f),
            style: l,
            children: [(0, d.jsxs)(i.RC, {
              loop: !g,
              grabCursor: !0,
              centeredSlides: k,
              centerInsufficientSlides: k,
              slidesPerView: "auto",
              speed: 700,
              breakpoints: y,
              onUpdate: () => _(0),
              onActiveIndexChange: e => _(e?.realIndex ?? 0),
              centeredSlidesBounds: v,
              children: [(0, d.jsx)("div", {
                className: o.trackWrapper,
                children: (0, d.jsxs)("div", {
                  className: o.track,
                  children: [a?.map((e => (0, d.jsx)(i.qr, {
                    children: (0, d.jsx)(m, {
                      item: e
                    })
                  }, e.key))), t && t.map(((e, t) => e && (0, d.jsx)(i.qr, {
                    children: e
                  }, x && x[t])))]
                })
              }), (0, d.jsx)(u, {
                current: w,
                total: t ? t.length : a.length
              })]
            }), (h?.title || h?.description) && (0, d.jsx)(c.A, {
              item: h
            })]
          })
        }
    },
    39613: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => w
      });
      var s = a(71403),
        r = a(89779),
        i = a(40207),
        n = a(42756),
        o = a(90837),
        c = a(82275),
        l = a(44338),
        d = a(19169),
        m = a(67245),
        u = a(47483);
      const g = {
          ps: o,
          ps3: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d118a14a73ce72b4687d9eb69724f4d2.svg",
          ps4: c,
          ps5: l,
          nintendoswitch: a(73870),
          xbox: d,
          xboxone: u,
          xboxseriesxs: m,
          xbox360: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c5cee7464423693de19149a4554b3c2.svg",
          pc: a(96165),
          play: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/59c4aadbdbfcdb8d06d7caa54bdc9f60.svg",
          applestore: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/38a6e85fa4a378c5620efa9fde8ff223.svg",
          googleplay: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ca4e52b102306a186549cfd712b1c8f8.svg",
          questionMark: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e6833fa9baf4a5382bdd84b0b7d2c03f.svg",
          default: ""
        },
        f = e => g[e] || null,
        p = {
          pillBtn: "rockstargames-modules-core-newswire-articlebf9c11ff862c409ecb412254932a66d0",
          selected: "rockstargames-modules-core-newswire-articlee07887131c72b6346c408895888f4fa7",
          "clr-button": "rockstargames-modules-core-newswire-articleeb57c2501d6b6fff19ea12014712acae",
          lgMax: "rockstargames-modules-core-newswire-articlee8361180f27f9c36731c815805c69094",
          smMax: "rockstargames-modules-core-newswire-articlec392730b2e06f70a3a1bd646684859e8",
          cta: "rockstargames-modules-core-newswire-articlebc76de01fdd1260e254c482984d2a924",
          label: "rockstargames-modules-core-newswire-articleb81011c72b601075ebe54d7ceaa7d2d8",
          primary: "rockstargames-modules-core-newswire-articledbcf41d5c23e0eaf5089021f4d41c121",
          btnContent: "rockstargames-modules-core-newswire-articlef5e832587747dc414e10ab8e0bd843a9",
          btnIcon: "rockstargames-modules-core-newswire-articlecb0ad8d8dd93218dc12091b883767967",
          border: "rockstargames-modules-core-newswire-articlecd3e884f94660ff9d55194c397a548a2",
          xbox: "rockstargames-modules-core-newswire-articlef591c5444c08121b0514f0c675da1479",
          xboxone: "rockstargames-modules-core-newswire-articlee5124beff89c5b4093a4029a9fee3367",
          xboxseriesxs: "rockstargames-modules-core-newswire-articlee52c94654eb462a8e65aa7607f5e21b5",
          ps: "rockstargames-modules-core-newswire-articlec53b78d3d062ee8d58f63a0acb1df137",
          ps4: "rockstargames-modules-core-newswire-articlef4a27aba1505f555d7cd8c920645245a",
          ps5: "rockstargames-modules-core-newswire-articleb5826d3700572b9bf36874e34d5c2a22",
          pc: "rockstargames-modules-core-newswire-articlec7ee0cfc54be00a8b152c47997ce76ac",
          nintendoswitch: "rockstargames-modules-core-newswire-articlec021d5ee5ee378576089611d038c5520",
          googleplay: "rockstargames-modules-core-newswire-articlea4ccd0de63b104d4aa48c8c3176618f3",
          platformIcon: "rockstargames-modules-core-newswire-articlec4ab0a89b65025cfe63b851116fb3a32",
          lgMin: "rockstargames-modules-core-newswire-articlec4a99972e5e512395e6fca5beaec1904",
          applestore: "rockstargames-modules-core-newswire-articlea13111cbe8acbd75f62da1c53de2c3df",
          borderless: "rockstargames-modules-core-newswire-articlee8f4333859f53dc59092e8b3340842e2",
          icon: "rockstargames-modules-core-newswire-articlec7a3f1a29594b307606d15e6827f63f9",
          "icon-left": "rockstargames-modules-core-newswire-articlebd623c6039c3f4122936775ed4214bd4",
          "icon-right": "rockstargames-modules-core-newswire-articlec79040e66c1f48e302291d8cf1335742",
          disabled: "rockstargames-modules-core-newswire-articled87326174de12b895401f738a23b177a"
        };
      var h = a(72862),
        b = a.n(h),
        k = a(46632);
      const v = e => {
          let {
            platform: t = "",
            altText: a
          } = e;
          const s = t ? f(t) : null,
            r = s ? (0, k.jsx)("img", {
              className: p.platformIcon,
              src: s,
              alt: a
            }) : null;
          return (0, k.jsx)("span", {
            className: [p.btnContent, p.platformButton].join(" "),
            children: r
          })
        },
        w = e => {
          let {
            children: t,
            href: a,
            style: o,
            content: c,
            variant: l = null,
            size: d = "medium",
            icon: m,
            iconPosition: u = "none",
            iconStyle: g,
            badge: h,
            badgeStyle: w,
            platformItem: _,
            platformStyle: x = "border",
            gtm: y = {},
            disabled: j,
            reloadDocument: N = !1,
            className: S
          } = e;
          const {
            track: T
          } = (0, i.useGtmTrack)(), C = (0, n.useDataLayer)(), A = c ?? t, I = (0, n.findPlatform)(_)?.friendlyName, M = (0, s.useMemo)((() => {
            const e = window.location.hostname;
            let t;
            try {
              t = new URL(a)?.hostname
            } catch (a) {
              t = e
            }
            return e === t
          }), [a]), L = (0, s.useCallback)((() => {
            j || T({
              event: "cta_other",
              text: A ?? void 0,
              ...C,
              ...y,
              link_url: a ?? void 0
            })
          }), [y, a, C]), E = () => m ? (0, k.jsx)("span", {
            className: [p.icon, `icon-${u}`].join(" "),
            style: g,
            children: (0, k.jsx)("img", {
              className: p.btnIcon,
              src: f(m) || "",
              alt: `${m} icon`
            })
          }) : null;
          return (0, k.jsx)(r.Link, {
            to: a,
            target: M ? "_self" : "_blank",
            className: b()(p.cta, "platform" === l && _ ? p[_] : "", x && p[x], j ? p.disabled : "", S),
            style: o,
            "data-variant": l,
            "data-size": d,
            onClick: L,
            "aria-label": A,
            reloadDocument: N,
            children: "platform" === l && _ ? (0, k.jsx)(v, {
              platform: _,
              altText: I || A
            }) : (0, k.jsxs)("div", {
              className: p.btnContent,
              children: ["left" === u && E(), (0, k.jsx)("span", {
                className: p.label,
                children: A
              }), "right" === u && E(), h ? (0, k.jsx)("span", {
                className: p.badge,
                style: w,
                children: h
              }) : null]
            })
          })
        }
    },
    26371: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => d
      });
      var s = a(74401),
        r = a(2024),
        i = a(63672),
        n = a(63303);
      const o = "rockstargames-modules-core-newswire-articlefa6885b15a718acb24f48949c52e31f1";
      var c = a(46632);
      const l = e => {
          let {
            to: t,
            children: a
          } = e;
          return t ? (0, c.jsx)("a", {
            href: t,
            target: "_blank",
            rel: "noreferrer",
            children: a
          }) : a
        },
        d = e => {
          let {
            item: t,
            className: a = ""
          } = e;
          return (0, c.jsxs)("div", {
            className: (0, s.classList)("rockstargames-modules-core-newswire-articleef9e6981551ac5ce250ebff8b18d7a29", a),
            children: [t.title && (0, c.jsx)(l, {
              to: t?.href ?? t?.to,
              children: (0, c.jsx)("h3", {
                children: t.title
              })
            }), Array.isArray(t?.description?.content) ? t.description.content?.map(((e, t) => e?.unorderedList ? (0, c.jsx)(i.A, {
              columns: e.unorderedList.columns ?? null,
              style: {
                "--unordered-list-padding": "var(--grid-gap-static-sm)",
                "--unordered-list-margin-bottom": ".5rem"
              },
              noImg: !0,
              list: e.unorderedList.list
            }, t) : e?.image ? (0, c.jsx)(r.A, {
              image: e.image,
              className: e?.className,
              ariaLabel: e.image?.ariaLabel
            }, t) : e?.separator ? (0, c.jsx)("div", {
              style: {
                margin: `${e.separator.spacing} 0`
              },
              children: (0, c.jsx)(n.A, {})
            }, t) : (0, c.jsx)("p", {
              children: (0, c.jsx)("span", {
                className: o,
                dangerouslySetInnerHTML: {
                  __html: e
                }
              })
            }, t))) : (0, c.jsx)("span", {
              className: o,
              dangerouslySetInnerHTML: {
                __html: t.description
              }
            })]
          })
        }
    },
    41074: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => n
      });
      var s = a(71403);
      const r = {
        animateBox: "rockstargames-modules-core-newswire-articlee9374e74c542c1028a2068dfbd1e85a3",
        fadeArea: "rockstargames-modules-core-newswire-articlea63de5cdf9849ac45a0f6b4f7617cfa5",
        visible: "rockstargames-modules-core-newswire-articled7458685114194d602f94e2581de0f08",
        barGrow: "rockstargames-modules-core-newswire-articleb0f4d843b626e3741c9dd38fcb3f56b0",
        bar: "rockstargames-modules-core-newswire-articlea4b99f54f3ce3987765143d8a151360a",
        animateMe: "rockstargames-modules-core-newswire-articlef9c3869a2a1e10490bdfbcb3ee89d7da"
      };
      var i = a(46632);
      const n = e => {
        let {
          children: t,
          style: a
        } = e;
        const n = (0, s.useRef)(null);
        return (0, s.useEffect)((() => {
          new IntersectionObserver((e => {
            e.forEach((e => {
              e.isIntersecting && e.target.classList.add([r.visible])
            }))
          })).observe(n?.current)
        }), []), (0, i.jsx)("div", {
          style: a,
          className: [r.fadeArea].join(" "),
          ref: n,
          children: t
        })
      }
    },
    14522: (e, t, a) => {
      "use strict";
      a.d(t, {
        H: () => d,
        r: () => o
      });
      var s = a(71403),
        r = a(40207),
        i = a(46632);
      const n = e => {
          let {
            impressionTracking: t,
            gtm: a = {},
            children: s
          } = e;
          return t?.shouldTrack ? (0, i.jsx)(d, {
            threshold: t?.threshold,
            gtm: a,
            children: s
          }) : s
        },
        o = (e, t) => a => ((e, t, a) => (0, i.jsx)(n, {
          impressionTracking: a?.impressionTracking,
          gtm: a?.gtm,
          children: (0, i.jsx)(e, {
            ...t
          })
        }))(e, a, t);
      var c = a(42756);
      const l = {
          event: "page_section_impression",
          element_placement: null
        },
        d = e => {
          let {
            threshold: t = .6,
            children: a,
            gtm: n = {}
          } = e;
          const {
            track: o
          } = (0, r.useGtmTrack)(), {
            ref: d,
            scrollTracked: m
          } = (0, c.useScrollTracking)(t);
          return (0, s.useEffect)((() => {
            m && o({
              ...l,
              ...n
            })
          }), [m]), (0, i.jsx)("section", {
            ref: d,
            children: a
          })
        }
    },
    60444: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => i
      });
      var s = a(55636),
        r = a(46632);
      const i = e => {
        let {
          html: t
        } = e;
        return (0, r.jsx)("div", {
          children: (0, s.Ay)(t)
        })
      }
    },
    37017: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => c
      });
      var s = a(71403),
        r = a(89779),
        i = a(58407),
        n = a(42756);
      var o = a(46632);
      const c = (0, n.withTranslations)((e => {
        let {
          t
        } = e;
        const [a] = (0, s.useState)(""), n = (0, r.useNavigate)(), c = (0, i.useMutateState)();
        return (0, o.jsxs)("form", {
          action: "#",
          className: "rockstargames-modules-core-newswire-articleb82052ce07e004075e77261c373bfc50",
          onSubmit: e => {
            e.preventDefault(), c({
              navOpen: !1
            }), document.activeElement?.blur(), n(`/search?q=${e.target.q.value}`)
          },
          role: "search",
          children: [(0, o.jsx)("button", {
            type: "submit",
            role: "button",
            title: "Submit"
          }), (0, o.jsx)("input", {
            autoComplete: "off",
            defaultValue: a,
            enterKeyHint: "search",
            name: "q",
            placeholder: t("Search Rockstar Games")
          })]
        })
      }))
    },
    52983: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => i
      });
      const s = {
        skeleton: "rockstargames-modules-core-newswire-articlef963a1ae95f7f5ac2c5192c3f357b6dc",
        pulse: "rockstargames-modules-core-newswire-articlee00ed88d692bbfc1a301dcfc61a077a9",
        gen9Hero: "rockstargames-modules-core-newswire-articledb0b80177710d337d93bddb97b8a7dea"
      };
      var r = a(46632);
      const i = e => {
        let {
          skeleton: t
        } = e;
        return t ? (0, r.jsx)("div", {
          className: [s.skeleton, s[t]].join(" ")
        }) : null
      }
    },
    22545: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => u
      });
      var s = a(71403),
        r = a(53980),
        i = a(40207),
        n = a(81902),
        o = a(11650);
      const c = "rockstargames-modules-core-newswire-articleeca98eb0b5b84a0c9a2e6d952545a2d5",
        l = "rockstargames-modules-core-newswire-articled3d0b4ecd3bddba96c73f49fcca34ed8";
      var d = a(46632);
      const m = {
          0: {
            spaceBetween: 8
          },
          768: {
            spaceBetween: 16
          },
          1024: {
            spaceBetween: 18
          },
          1920: {
            spaceBetween: 20
          },
          2560: {
            spaceBetween: 22
          }
        },
        u = e => {
          let {
            title: t = "thumbnail gallery",
            thumbsPerView: a = 3,
            loop: u = !1,
            navigation: g = !1,
            slideChildren: f = [],
            variants: p = {
              parent: void 0,
              main: void 0,
              thumbs: void 0
            },
            transition: h = {
              parent: void 0,
              main: void 0,
              thumbs: void 0
            }
          } = e;
          const {
            track: b
          } = (0, i.useGtmTrack)(), [k, v] = (0, s.useState)([o.U1, o.WO, o.dK]), [w, _] = (0, s.useState)(null), [x, y] = (0, s.useState)(null);
          return (0, s.useEffect)((() => {
            const e = [o.U1, o.WO, o.dK];
            g && e.push(o.Vx), v(e)
          }), [g]), (0, s.useEffect)((() => {
            if (!f) return;
            const e = f.map(((e, t) => (0, d.jsx)(n.qr, {
              children: e
            }, Symbol(t).toString())));
            y(e)
          }), [f]), x ? (0, d.jsxs)(r.P.div, {
            className: "rockstargames-modules-core-newswire-articled4f245838b94234f21463a08a8112910",
            variants: p.parent,
            transition: h.parent,
            initial: "initial",
            animate: "animate",
            children: [(0, d.jsx)(r.P.div, {
              className: c,
              variants: p.main,
              transition: h.main,
              initial: "initial",
              animate: "animate",
              children: (0, d.jsx)(n.RC, {
                loop: u,
                navigation: g,
                pagination: {
                  clickable: !0
                },
                thumbs: {
                  swiper: w
                },
                modules: k,
                breakpoints: m,
                className: c,
                onSlideNextTransitionEnd: () => {
                  b({
                    event: "carousel_next",
                    element_placement: t?.toLowerCase() ?? ""
                  })
                },
                onSlidePrevTransitionEnd: () => {
                  b({
                    event: "carousel_previous",
                    element_placement: t?.toLowerCase() ?? ""
                  })
                },
                onSlideChangeTransitionEnd: () => {
                  b({
                    event: "carousel_swipe",
                    element_placement: t?.toLowerCase() ?? ""
                  })
                },
                children: x
              })
            }), (0, d.jsx)(r.P.div, {
              className: l,
              variants: p.thumbs,
              transition: h.thumbs,
              initial: "initial",
              animate: "animate",
              children: (0, d.jsx)(n.RC, {
                threshold: 50,
                onSwiper: _,
                loop: u,
                breakpoints: m,
                slidesPerView: a,
                freeMode: !0,
                watchSlidesProgress: !0,
                modules: k,
                className: l,
                children: x
              })
            })]
          }) : null
        }
    },
    25180: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => d,
        X: () => l
      });
      var s = a(58407),
        r = a(74401),
        i = a(47252),
        n = a(52983),
        o = a(50048),
        c = a(46632);
      const l = e => {
          let {
            id: t = null,
            ids: a = null,
            setTitleDataPath: r = null,
            sync: i = !1
          } = e;
          const n = a ?? [t],
            {
              data: c
            } = (0, s.useQuery)(o.TinaModulesInfo, {
              variables: {
                ids: n,
                sync: i
              },
              setTitleDataPath: r,
              skip: !n.length
            });
          return c?.tinaModulesInfo ?? null
        },
        d = (0, i.A)((e => {
          let {
            components: t = {},
            id: a = null,
            ids: s = null,
            skeleton: i
          } = e;
          const o = l({
            id: a,
            ids: s
          });
          if (!o) return (0, c.jsx)(n.A, {
            skeleton: i
          });
          const d = o?.[0]?.tina;
          return d ? (0, c.jsx)(c.Fragment, {
            children: o.map(((e, a) => {
              let {
                tina: s
              } = e;
              return (0, c.jsx)(r.TinaParser, {
                components: t,
                tina: s,
                componentProps: {
                  tinaModulesInfo: o
                }
              }, a)
            }))
          }) : null
        }))
    },
    71080: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => r
      });
      var s = a(46632);
      const r = e => {
        let {
          text: t,
          style: a
        } = e;
        return (0, s.jsx)("div", {
          className: "rockstargames-modules-core-newswire-articleb61bd7f274fd6d93c4bf33a9284b6b67",
          style: a,
          children: t
        })
      }
    },
    76612: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        A: () => i.A,
        AlertDialog: () => Ce,
        AudioPlayer: () => n.A,
        Badge: () => o.A,
        Brands: () => l,
        Button: () => d.A,
        ButtonGroup: () => g,
        CalloutSection: () => y.A,
        Carousel: () => f.A,
        ConditionalBlock: () => x,
        CookieAB: () => C,
        CountryInputField: () => T,
        Cta: () => A.A,
        DescriptionArea: () => I.A,
        DiscountsBadge: () => M.A,
        DotLoader: () => E,
        Dropdown: () => z,
        Embed: () => V,
        ExpandingPlatformButton: () => $.A,
        FadeInContent: () => F.A,
        GameSiteHeader: () => H,
        Gen9Button: () => u.A,
        Gen9CoreCarousel: () => K,
        Grid: () => D.A,
        HTMLElement: () => oe.A,
        Hero: () => ne,
        HookStore: () => v,
        ImageWithBadge: () => _e.A,
        InViewTracker: () => je.H,
        LanguageSelector: () => ge,
        LayeredImage: () => be,
        Lightbox: () => we,
        LoadingAnimation: () => ms.A,
        MultiSourceImage: () => fe.A,
        NewswireBlocks: () => ze,
        NewswireCard: () => Ae.A,
        NewswireList: () => Le,
        NewswireRelated: () => Ee.A,
        NewswireTag: () => Pe.A,
        OrderedList: () => De.A,
        PackList: () => Ke,
        PackListMenu: () => mt,
        Paging: () => ft,
        ParallaxCacheBuster: () => ht,
        ParallaxInnerLayer: () => vt,
        ParallaxOuterLayer: () => _t,
        ParallaxWrapper: () => kt,
        ProfileSwitcher: () => s,
        PromoModule: () => ha,
        Rating: () => _a,
        ResponsiveFlexBox: () => xa.A,
        ResponsiveFlexItem: () => ya.A,
        ResponsiveGridBox: () => ja.A,
        ResponsiveGridItem: () => Na.A,
        ResponsiveImg: () => Sa.A,
        ResponsiveSection: () => Ta.A,
        RockstarLogo: () => Ca,
        SafeHtml: () => Aa.A,
        ScrollSection: () => Ia,
        ScrollToTop: () => Ma,
        ScrollTracker: () => La.A,
        SearchBox: () => Ea.A,
        Separator: () => Pa.A,
        Skeleton: () => Oa.A,
        SrcsetImage: () => ye,
        StorybookWrapper: () => za,
        TextFit: () => Da.A,
        ThumbsGallery: () => Va.A,
        TinaModuleFetchNRender: () => $a.A,
        TinaWrapper: () => Fa,
        TrackList: () => Ba.A,
        UnorderedList: () => Ra.A,
        UserVote: () => Ua,
        VideoCard: () => r,
        VideoCarousel: () => Za,
        VideoList: () => is,
        VisuallyHidden: () => ns,
        Wasted: () => os.A,
        framer: () => ds,
        useTinaModuleFetchByIds: () => $a.X,
        withInViewTracker: () => je.r,
        withSearchbarErrorBoundary: () => ls,
        withSimpleErrorBoundary: () => Y.A
      });
      var s = {};
      a.r(s), a.d(s, {
        CharacterCard: () => xt.A,
        Menu: () => ma,
        MenuButton: () => fa
      });
      var r = {};
      a.r(r), a.d(r, {
        Art: () => Ya,
        Link: () => Qa
      });
      var i = a(60285),
        n = a(34983),
        o = a(71080);
      var c = a(46632);
      const l = e => {
        let {
          brands: t = []
        } = e;
        return t.length ? (0, c.jsx)("div", {
          className: "rockstargames-modules-core-newswire-articlecde08e212f23b312d5afca7f2ea1105c",
          children: t.map(((e, t) => {
            let {
              brand: a
            } = e;
            return (0, c.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articlec894fe869384587702b5370da072be86",
              "data-brand": a
            }, t)
          }))
        }) : null
      };
      var d = a(22778),
        m = a(74401),
        u = a(62811);
      const g = e => {
        let {
          buttons: t = [],
          className: a
        } = e;
        return t.length ? (0, c.jsx)("div", {
          className: (0, m.classList)("rockstargames-modules-core-newswire-articleb411a36e7fd12ab75861fe560b31b206", a),
          children: t.map(((e, t) => {
            let {
              icon: a,
              title: s,
              to: r
            } = e;
            return s ? (0, c.jsx)(u.A, {
              icon: a,
              text: s,
              to: r
            }, t) : ""
          }))
        }) : null
      };
      var f = a(21450),
        p = a(71403),
        h = a(89779),
        b = a(42756),
        k = a(40207);
      const v = (0, a(86975).FF)(),
        w = e => e.some((e => !e)),
        _ = e => {
          let {
            condition: t = null,
            children: a
          } = e;
          const [s, r] = (0, p.useState)(!1), i = (e => {
            const [t] = (0, h.useSearchParams)(), [a, s] = (0, p.useState)(null), r = (0, k.useRockstarUser)(), {
              loggedIn: i
            } = r, {
              currentCharId: n
            } = (0, k.useRockstarUserState)(), o = (0, k.useIsUserGtaPlus)(r?.data, n);
            return (0, p.useEffect)((() => {
              const a = "true" === t.get("conditionPreview");
              if (!e?.length > 0) return;
              v.applyFilters("preview_conditions", e);
              const r = [];
              return e.forEach((e => {
                const {
                  value: s
                } = e;
                if (a) return "true" === t.get(s) ? (r.push(!0), !0) : (r.push(!1), !1);
                if (w(r)) return !1;
                switch (s) {
                  case "user:is:loggedIn":
                    r.push(!0 === i);
                    break;
                  case "user:not:loggedIn":
                    r.push(!1 === i);
                    break;
                  case "user:is:gtaPlus":
                    r.push(!0 === o);
                    break;
                  case "user:not:gtaPlus":
                    r.push(!1 === o);
                    break;
                  default:
                    r.push(!1)
                }
                return null
              })), s(!w(r)), () => {}
            }), [t, e, o, r, i]), a
          })(t);
          return (0, p.useEffect)((() => {
            r(i)
          }), [i]), (0, p.useMemo)((() => s ? a : null), [s])
        },
        x = (0, b.withTranslations)((e => {
          let {
            children: t
          } = e;
          return p.Children.map(p.Children.toArray(t), (e => (0, c.jsx)(_, {
            ...e?.props
          })))
        }));
      var y = a(55430),
        j = a(46825),
        N = a(86634),
        S = a.n(N);
      const T = e => {
          let {
            isMulti: t,
            allowSelectAll: a,
            label: s,
            miscProps: r
          } = e;
          const [i, n] = (0, p.useState)(""), o = (0, p.useMemo)((() => S()().getData()), []);
          return (0, c.jsx)(j.Ay, {
            unstyled: !0,
            value: i,
            isMulti: t,
            allowSelectAll: a,
            options: o,
            placeholder: s,
            onChange: e => {
              return t = e?.target?.value, void n(t);
              var t
            },
            classNamePrefix: "country-select",
            ...r
          })
        },
        C = e => {
          let {
            cookieName: t,
            cookieValue: a,
            trueComponent: s,
            falseComponent: r
          } = e;
          const i = (e => {
              const t = document.cookie.split("; "),
                a = `${e}=`,
                s = t.find((e => e.startsWith(a)));
              return s?.substring(a.length, s.length)
            })(t),
            n = new URLSearchParams(window.location.search).get(t);
          return n && ((e, t) => {
            e && t && (document.cookie = `${e}=${t}; domain=${(()=>{const e=window.location.hostname.split(".");return e.slice(e.length-2).join(".")})()}; path=/;`)
          })(t, n), i === a || n === a ? s : r
        };
      var A = a(39613),
        I = a(26371),
        M = a(52328);
      const L = "rockstargames-modules-core-newswire-articlec63cfb461217f059c8c25eec09602b30",
        E = e => {
          let {
            color: t
          } = e;
          return (0, c.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articlea481f47ab7e8af4042a665fab5aea27c",
            style: {
              "--loader-color": t
            },
            children: [(0, c.jsx)("div", {
              className: L
            }), (0, c.jsx)("div", {
              className: L
            }), (0, c.jsx)("div", {
              className: L
            })]
          })
        };
      var P = a(64205);
      const O = {
          dropdownWrapper: "rockstargames-modules-core-newswire-articleb951912c02de0e5e881fedd391d04810",
          items: "rockstargames-modules-core-newswire-articleb0a8f220641417f889d4fd6039fe6bac",
          open: "rockstargames-modules-core-newswire-articlef5eb88111734e6e70d34ef2b095c44f6",
          opener: "rockstargames-modules-core-newswire-articleecb577af64f747d0d39cf03939ee3c73",
          secondary: "rockstargames-modules-core-newswire-articleb64c3515fcd91f6b84410bd14640da81"
        },
        z = e => {
          let {
            children: t,
            className: a,
            title: s
          } = e;
          const [r, i] = (0, p.useState)(!1);
          let n = null;
          return n = P.Ay, (0, c.jsx)(n, {
            disabled: !r,
            children: (0, c.jsxs)("div", {
              className: [O.dropdownWrapper, r ? O.open : "", void 0 !== a ? a : ""].join(" "),
              children: [(0, c.jsx)("button", {
                className: O.opener,
                onClick: () => i(!r),
                children: s
              }), r && (0, c.jsx)("div", {
                className: O.items,
                onClick: () => i(!1),
                children: t
              })]
            })
          })
        };
      var D = a(28606);
      const B = e => {
          let {
            caption: t,
            children: a,
            ...s
          } = e;
          return t ? (0, c.jsxs)("figure", {
            ...s,
            children: [a, (0, c.jsx)("figcaption", {
              dangerouslySetInnerHTML: {
                __html: t
              }
            })]
          }) : a
        },
        V = e => {
          let {
            componentTitle: t,
            type: a,
            items: s
          } = e;
          return s?.length ? (0, c.jsx)("div", {
            className: "rockstargames-modules-core-newswire-articled393ab6eb68d416b116b6281abdb5e14",
            type: a,
            children: (0, c.jsxs)(D.A, {
              children: [t && (0, c.jsx)("h3", {
                children: t
              }), (0, c.jsx)(D.A, {
                className: "rockstargames-modules-core-newswire-articleed3ee31cb8e357d795886157f95a742a",
                children: s.map(((e, t) => {
                  return e?.embed ? (0, c.jsx)(B, {
                    caption: e?.caption,
                    children: (0, c.jsx)("div", {
                      className: "rockstargames-modules-core-newswire-articledcf1c30612026a517f59af64d8703bc4",
                      dangerouslySetInnerHTML: {
                        __html: (a = e.embed, a.replace(/&gt;/g, ">").replace(/&lt;/g, "<"))
                      }
                    }, `${e?.key??t}_div`)
                  }, e?.key ?? t) : e?.text ? (0, c.jsx)("p", {
                    dangerouslySetInnerHTML: {
                      __html: e.text
                    }
                  }, e?.key ?? t) : void 0;
                  var a
                }))
              })]
            })
          }) : null
        };
      var $ = a(39695),
        F = a(41074),
        R = a(58407);
      const G = {
          gameSiteHeader: "rockstargames-modules-core-newswire-articlecb7cada84679a7af263e1436675a518a",
          activeNavItem: "rockstargames-modules-core-newswire-articleaa4aa7ed96facb38ed09c72eededb418",
          navHidden: "rockstargames-modules-core-newswire-articleac1cb9d2005f287ed666d334f816f8c5",
          navContent: "rockstargames-modules-core-newswire-articlee5abd79468866e31fdad2780b169f687",
          headerNavOpen: "rockstargames-modules-core-newswire-articleb98508d0923c5bb442c15772fbad9764",
          headerLogo: "rockstargames-modules-core-newswire-articlee666ff4f0b91dfe78991244ac1a759a5",
          bg: "rockstargames-modules-core-newswire-articlecfc6fd456ca2f3e9db06f780f412660f"
        },
        H = e => {
          let {
            buttonText: t = null,
            gameOverrideStyles: a,
            navLinks: s,
            cta: r = "",
            game: i
          } = e;
          const [n, o] = (0, p.useState)(!1), l = (0, R.useMutateState)(), {
            navHidden: d
          } = (0, R.useState)();
          return (0, p.useEffect)((() => {
            l({
              gameSiteNavOpen: n
            })
          }), [n]), (0, p.useEffect)((() => {
            const e = () => {
              o(!1)
            };
            return document.addEventListener("click", e), () => document.removeEventListener("click", e)
          }), []), (0, c.jsxs)("header", {
            "data-game": i,
            className: [G.gameSiteHeader, n ? G.headerNavOpen : "", d ? G.navHidden : "", a.gameSiteHeader, n ? a.headerNavOpen : ""].join(" "),
            children: [(0, c.jsx)("button", {
              className: [G.headerLogo, a.headerLogo].join(" "),
              onClick: e => {
                o(!n), e.nativeEvent.stopImmediatePropagation()
              },
              type: "button",
              "aria-label": "Open Game Site Nav",
              dangerouslySetInnerHTML: {
                __html: t
              }
            }), (0, c.jsx)("div", {
              className: G.bg
            }), (0, c.jsx)("nav", {
              children: (0, c.jsx)("div", {
                className: G.navContent,
                children: s
              })
            }), r]
          })
        };
      var U = a(11650),
        W = a(54252),
        q = a(300),
        X = a(81902),
        Y = a(47252);
      const Q = e => {
          let {
            prevRef: t,
            nextRef: a,
            onNextClicked: s,
            onPrevClicked: r,
            onNextKeyDown: i
          } = e;
          return (0, c.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articled98f432655f19a842390597c4434db06",
            children: [(0, c.jsx)("button", {
              className: "rockstargames-modules-core-newswire-articlec06ca360ce11f2cef7baf8c5fba05a42",
              ref: t,
              onClick: r,
              "aria-label": "Previous",
              role: "button"
            }), (0, c.jsx)("button", {
              className: "rockstargames-modules-core-newswire-articlea4f98606cdef508fbd2e69c5564a92d8",
              ref: a,
              onClick: s,
              onKeyDown: i,
              "aria-label": "Next",
              role: "button"
            })]
          })
        },
        K = (0, Y.A)((e => {
          let {
            description: t,
            slideChildren: a,
            size: s,
            title: r,
            name: i,
            customSlidesPerView: n = null,
            customSpaceBetween: o = null,
            slideClass: l,
            style: d,
            className: u,
            cardSizeBreakpoints: g,
            customAspectRatio: f,
            titleBadge: h,
            theme: b
          } = e;
          const {
            track: v
          } = (0, k.useGtmTrack)(), w = (0, p.useRef)(null), _ = (0, p.useRef)(null), x = (0, p.useRef)(null), [y, j] = (0, p.useState)(null), [N, S] = (0, p.useState)(!1), [T, C] = (0, p.useState)(null), [A, I] = (0, p.useState)(), [M, L] = (0, p.useState)(), {
            ref: E,
            inView: P
          } = (0, q.Wx)({
            threshold: .6
          }), [O, z] = (0, p.useState)(!1), [D, B] = (0, p.useState)(null), [V, $] = (0, p.useState)(!1), [F, R] = (0, p.useState)(0), [G, H] = (0, p.useState)(0);
          (0, p.useEffect)((() => {
            const e = () => {
              $(window.innerWidth < 1024)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), []), (0, p.useEffect)((() => {
            const e = () => {
              A && !(0, W.isEmpty)(A) && A?.height > 0 && A?.height !== F && R(A?.height)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), [A]);
          const Y = {
            0: {
              spaceBetween: o ?? 16
            },
            1024: {
              spaceBetween: o ?? 18
            },
            1920: {
              spaceBetween: o ?? 20
            },
            2560: {
              spaceBetween: o ?? 22
            }
          };
          (0, p.useEffect)((() => {
            if (!w.current) return;
            const e = () => {
              if (w.current) {
                const e = n || Number(window.getComputedStyle(w.current).getPropertyValue("--slides-per-view")),
                  t = n ? 1 : Number(window.getComputedStyle(w.current).getPropertyValue("--slides-per-view-multiplier"));
                C(e * t)
              }
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), [w, n]), (0, p.useEffect)((() => {
            if (!a) return;
            let e = !1;
            a.forEach((t => {
              "cover-card" === t?.props?.tina?.payload?.meta?.type && (e = !0, B(t))
            })), z(e);
            const t = a.map(((e, t) => "cover-card" === e?.props?.tina?.payload?.meta?.type && V ? null : (0, c.jsx)(X.qr, {
              className: "rockstargames-modules-core-newswire-articlef58e79e329504e170dc9cb4595ea011b",
              onFocus: () => J(t),
              children: e
            }, Symbol(t).toString())));
            j(t)
          }), [a, V]), (0, p.useEffect)((() => {
            L({
              nextEl: x.current,
              prevEl: _.current
            })
          }), [x, _]), (0, p.useEffect)((() => {
            P && !N && a && (v({
              event: "page_section_impression",
              element_placement: (i || r).toLowerCase()
            }), S(!0))
          }), [P, a]);
          let K = "custom" === s ? {
            "--custom-aspect-ratio": f,
            ...d
          } : {
            ...d
          };
          const Z = 0 !== F ? `${F}px` : "100%";
          K = {
            ...K,
            "--carousel-cards-height": Z,
            "--carousel-nav-opacity": G
          };
          const J = e => {
            A?.slideTo(e)
          };
          return (0, c.jsxs)("div", {
            className: (0, m.classList)("rockstargames-modules-core-newswire-articled0c3d91603036c852633939015a6cb48", u),
            "data-size": s,
            "data-sm": g?.sm ? g?.sm : s,
            "data-md": g?.md ? g?.md : s,
            "data-lg": g?.lg ? g?.lg : s,
            "data-xl": g?.xl ? g?.xl : s,
            "data-xxl": g?.xxl ? g?.xxl : s,
            "data-has-covercard": O,
            "data-new-carousel-nav": !0,
            "data-theme": b,
            ref: w,
            style: K,
            children: [(0, c.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articleddeb75a59ed783554b94e8298897a1fa",
              ref: E
            }), O && V && (0, c.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articled5f00d41fdd2c864a0eb9e069cf08db0",
              children: D
            }), (0, c.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articlecdc60dbde3f8db6f466aba8a3e19fa96",
              children: (0, c.jsxs)("div", {
                className: "rockstargames-modules-core-newswire-articlefb8e207418c783fc2f53b44c19faedca",
                children: [(0, c.jsxs)("div", {
                  className: "rockstargames-modules-core-newswire-articleb779ba2045a88302079083935c90f7b3",
                  children: [!O && r && (0, c.jsxs)("div", {
                    className: "rockstargames-modules-core-newswire-articleedf90c7c5ee1c79049f5a6442f14c949",
                    children: [(0, c.jsx)("h2", {
                      children: r
                    }), h && (0, c.jsx)("span", {
                      className: "rockstargames-modules-core-newswire-articled7a4aaeb70d68fdee39312192efb990b",
                      children: h
                    })]
                  }), (0, c.jsx)(Q, {
                    prevRef: _,
                    nextRef: x,
                    onNextClicked: () => {},
                    onPrevClicked: () => {},
                    onNextKeyDown: e => {
                      if ("Tab" === e.key && !e.shiftKey) {
                        const t = A?.slides[A?.activeIndex].querySelector('a, button, [role="button"]');
                        t && t?.tabIndex > -1 && (e.preventDefault(), t.focus())
                      }
                    },
                    theme: b
                  })]
                }), t && (0, c.jsx)("div", {
                  className: "rockstargames-modules-core-newswire-articlea1007d13e3a321bb18b5fc667025d545",
                  dangerouslySetInnerHTML: {
                    __html: t
                  }
                })]
              })
            }), T ? (0, c.jsx)(X.RC, {
              slidesPerView: T,
              onInit: e => {
                I(e);
                const t = setInterval((() => {
                  const {
                    height: a
                  } = e;
                  a > 0 && (R(a), H(1), clearInterval(t))
                }), 500)
              },
              grabCursor: !0,
              navigation: M,
              modules: [U.Vx],
              breakpoints: Y,
              slideClass: (0, m.classList)("swiper-slide", l),
              onSlideNextTransitionEnd: () => {
                v({
                  event: "carousel_next",
                  element_placement: r?.toLowerCase() ?? ""
                })
              },
              onSlidePrevTransitionEnd: () => {
                v({
                  event: "carousel_previous",
                  element_placement: r?.toLowerCase() ?? ""
                })
              },
              onSlideChangeTransitionEnd: () => {
                v({
                  event: "carousel_swipe",
                  element_placement: r?.toLowerCase() ?? ""
                })
              },
              children: y
            }) : ""]
          })
        }), null);
      var Z = a(53980);
      const J = {
          pillBtn: "rockstargames-modules-core-newswire-articled008b074498ad02717806cc094b8a780",
          selected: "rockstargames-modules-core-newswire-articlebe9a2e37ec59e339b0d72cd8e5256703",
          hero: "rockstargames-modules-core-newswire-articled1346f9b98fbaac26948e361bd98b4c6",
          images: "rockstargames-modules-core-newswire-articlec9c078a3102a96b26f1bf1f98306384f",
          background: "rockstargames-modules-core-newswire-articlea271224ca2caf56b470059cdb98d9a42",
          gradient: "rockstargames-modules-core-newswire-articleae257e9d159ae9bd7c8685e38ba16f59",
          layered: "rockstargames-modules-core-newswire-articlef663886f051e47ea04f097c85ae6625b",
          content: "rockstargames-modules-core-newswire-articlef9c204f451f3a53bcc307c00eb5f907f",
          descriptions: "rockstargames-modules-core-newswire-articled1bbf288f3fe6c79e658764847d2890a",
          buttonGroup: "rockstargames-modules-core-newswire-articlefb373367ffd03ba01edaf671175244ab",
          ctaBlock: "rockstargames-modules-core-newswire-articled4e5e627f7968400413c3b578b1b3143",
          verticalCtaBlock: "rockstargames-modules-core-newswire-articlea92d2eedbf7a04ac945877a52970eb9c",
          primaryBtn: "rockstargames-modules-core-newswire-articleff921058c7bbf6660b52da746e719577",
          secondaryBtn: "rockstargames-modules-core-newswire-articlea0c587b1487e33b081dc394dfd017fab",
          btnText: "rockstargames-modules-core-newswire-articlebe305ab9e2c27b1458d3e7bb6a9f12e0",
          legalText: "rockstargames-modules-core-newswire-articlef625ffdd1b33a1642aa0dec12efe7897",
          shardsCarousel: "rockstargames-modules-core-newswire-articlee999b9cecfe233bcee8cab8682fb96bf"
        },
        ee = {
          visible: {
            opacity: 1,
            transition: {
              ease: [.5, 0, 0, 1],
              duration: .75,
              when: "beforeChildren",
              delayChildren: .25,
              staggerChildren: .1
            }
          },
          hidden: {
            opacity: 0
          }
        },
        te = {
          visible: {
            opacity: 1,
            y: 0,
            height: "100%",
            overflow: "hidden",
            transition: {
              ease: [.5, 0, 0, 1],
              duration: .75
            }
          },
          hidden: {
            opacity: 0,
            y: 100,
            height: "0%",
            overflow: "hidden"
          }
        },
        ae = e => {
          let {
            title: t = "",
            mobileImg: a,
            desktopImg: s
          } = e;
          const r = (0, m.useGetCdnSource)(a ?? null),
            i = (0, m.useGetCdnSource)(s ?? r);
          return (0, c.jsx)("div", {
            className: J.shard,
            style: {
              "--background-image-mobile": `url(${r})`,
              "--background-image-desktop": `url(${i})`
            },
            children: (0, c.jsx)("h5", {
              children: t
            })
          })
        },
        se = e => {
          let {
            title: t = "Membership Rewards",
            name: a = "Membership Rewards",
            shards: s
          } = e;
          const [r, i] = (0, p.useState)(null);
          return (0, p.useEffect)((() => {
            s && i(s.reduce(((e, t) => {
              if (!t?.shardImg) return e;
              const {
                title: a,
                shardImg: s
              } = t, {
                mobile: r,
                desktop: i
              } = s;
              return e.push((0, c.jsx)(ae, {
                title: a,
                mobileImg: r?.full_src,
                desktopImg: i?.full_src
              })), e
            }), []))
          }), [s]), r ? (0, c.jsx)("div", {
            className: J.shardsCarousel,
            children: (0, c.jsx)(K, {
              title: t,
              name: a,
              slideChildren: r,
              size: "lg",
              customSpaceBetween: 0
            })
          }) : null
        },
        re = e => {
          let {
            animated: t = !1,
            ctas: a = [],
            expandingButtonLabel: s = "Subscribe"
          } = e;
          const [r, i] = (0, p.useState)([]), [n, o] = (0, p.useState)([]);
          return (0, p.useEffect)((() => {
            const {
              expandingButtonsArray: e,
              plainButtonsArray: t
            } = a.reduce(((e, t) => (t.isInExpandingButton ? e.expandingButtonsArray.push({
              href: t.href,
              platform: t.platform,
              buttonText: t.buttonText
            }) : e.plainButtonsArray.push({
              icon: t.platform ?? "",
              title: t.buttonText,
              to: t.href
            }), e)), {
              expandingButtonsArray: [],
              plainButtonsArray: []
            });
            i(e), o(t)
          }), [a]), r.length ? (0, c.jsx)(Z.P.div, {
            variants: t ? te : void 0,
            children: (0, c.jsx)($.A, {
              variant: "gen9",
              buttonText: s,
              platformsAndLinks: r,
              children: !!n.length && (0, c.jsx)(Z.P.div, {
                variants: te,
                children: (0, c.jsx)(g, {
                  buttons: n,
                  className: J.buttonGroup
                })
              })
            })
          }) : (0, c.jsx)(c.Fragment, {
            children: !!n.length && (0, c.jsx)(Z.P.div, {
              variants: te,
              children: (0, c.jsx)(g, {
                buttons: n,
                className: J.buttonGroup
              })
            })
          })
        },
        ie = e => {
          let {
            animated: t = !1,
            brands: a = [],
            cta: s = [],
            ctas: r = [],
            description: i = "",
            expandingButtonLabel: n = "Subscribe",
            legalText: o,
            stackButtons: d,
            title: u = ""
          } = e;
          return (0, c.jsxs)(Z.P.div, {
            className: J.content,
            initial: "hidden",
            animate: "visible",
            variants: t ? ee : void 0,
            children: [(0, c.jsx)(Z.P.div, {
              variants: t ? te : void 0,
              children: (0, c.jsx)(l, {
                brands: a
              })
            }), (u || i) && (0, c.jsxs)(Z.P.div, {
              className: J.descriptions,
              variants: t ? te : void 0,
              children: [u && (0, c.jsx)("h2", {
                dangerouslySetInnerHTML: {
                  __html: u
                }
              }), i && (0, c.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: i
                }
              })]
            }), !!s.length && (0, c.jsx)("div", {
              className: d ? J.verticalCtaBlock : J.ctaBlock,
              children: (0, c.jsx)(m.TinaParser, {
                components: {
                  Cta: A.A,
                  ExpandingPlatformButton: $.A
                },
                tina: {
                  payload: {
                    content: s
                  }
                }
              })
            }), !!r.length && (0, c.jsx)("div", {
              className: J.ctaBlock,
              children: (0, c.jsx)(re, {
                animated: t,
                ctas: r,
                expandingButtonLabel: n
              })
            }), o && (0, c.jsx)(Z.P.div, {
              className: J.legalText,
              variants: t ? te : void 0,
              children: (0, c.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: o
                }
              })
            })]
          })
        },
        ne = e => {
          let {
            animated: t = !1,
            backgroundImage: a,
            brands: s = [],
            className: r,
            ctas: i = [],
            cta: n,
            description: o = "",
            expandingButtonLabel: l = "Subscribe",
            layeredImage: d,
            layeredImageSettings: u,
            legalText: g,
            shardsSection: f = {},
            stackButtons: h = !1,
            theme: k = "gen9",
            title: v = ""
          } = e;
          const {
            breakpoints: w,
            windowWidth: _
          } = (0, b.useWindowResize)(), x = w.xxl.min, y = (e => {
            if (!e) return null;
            const t = {},
              a = new Map([
                ["xsmall", "xs"],
                ["small", "sm"],
                ["medium", "md"],
                ["large", "lg"],
                ["xlarge", "xl"],
                ["horizontal", "--layered-horizontal-offset-"],
                ["vertical", "--layered-vertical-offset-"],
                ["imageWidth", "--layered-image-width-"]
              ]);
            return Object.entries(e).forEach((e => {
              const [s, r] = e;
              if (a.has(s)) {
                const e = a.get(s);
                Object.entries(r).forEach((r => {
                  const [i, n] = r;
                  if (a.has(s) && a.has(i)) {
                    const s = `${a.get(i)}${e}`;
                    t[s] = "imageWidth" !== i ? n ? `${n}px` : "0px" : n ? `${n}vw` : "100vw"
                  }
                }))
              }
            })), t
          })(u), j = (0, m.useGetCdnSource)(a?.mobile?.full_src ?? null), N = (0, m.useGetCdnSource)(a?.desktop?.full_src ?? j), S = (0, m.useGetCdnSource)(d?.mobile?.full_src ?? null), T = (0, m.useGetCdnSource)(d?.desktop?.full_src ?? S), C = (0, p.useMemo)((() => {
            const {
              mobileStyle: e,
              desktopStyle: t,
              style: s
            } = a ?? {};
            return {
              ...s,
              ..._ >= x ? t : e
            }
          }), [_, a?.style, a?.mobileStyle, a?.desktopStyle]);
          return (0, c.jsxs)(Z.P.div, {
            className: (0, m.classList)(J.hero, r),
            style: {
              "--background-image-desktop": `url(${N})`,
              "--background-image-mobile": `url(${j})`,
              "--layered-image-desktop": `url(${T})`,
              "--layered-image-mobile": `url(${S})`
            },
            initial: "hidden",
            animate: "visible",
            variants: t ? ee : void 0,
            "data-type": "hero",
            theme: k,
            children: [(0, c.jsxs)("div", {
              className: J.images,
              children: [N && j ? (0, c.jsx)("div", {
                className: J.background,
                style: C ?? {}
              }) : "", S && T ? (0, c.jsx)("div", {
                className: J.layered,
                style: u ? y : {}
              }) : "", (0, c.jsx)("div", {
                className: J.gradient
              })]
            }), (0, c.jsx)(ie, {
              animated: t,
              brands: s,
              cta: n,
              ctas: i,
              description: o,
              expandingButtonLabel: l,
              legalText: g,
              stackButtons: h,
              title: v
            }), f?.shards && (0, c.jsx)(se, {
              ...f
            })]
          })
        };
      var oe = a(87839),
        ce = a(96717),
        le = a(13963),
        de = a(20066);
      const me = (0, ce.defineMessages)({
          language_selector_default: {
            id: "language_selector_default",
            defaultMessage: "Select a Language"
          }
        }),
        ue = {
          pillBtn: "rockstargames-modules-core-newswire-articlecb792ef8796eaa09f8b5c1ee0230fcd7",
          selected: "rockstargames-modules-core-newswire-articlec951b9f5173e8a37be389854c40995ee",
          scMenuStyles: "rockstargames-modules-core-newswire-articlefa91a55e22ad688cba0bc1210eaf4726",
          languageSelector: "rockstargames-modules-core-newswire-articleb631f2ce92e4a89f8eddebd32e8ed30a",
          open: "rockstargames-modules-core-newswire-articleedc598921a872174190475d0ad016d15",
          linkWrapper: "rockstargames-modules-core-newswire-articlec4b7087d1fcbaad6967e61b84160ff79",
          links: "rockstargames-modules-core-newswire-articlec7d345d5c7e567e0ee75b792d5bdfb88",
          selectBoxWrapper: "rockstargames-modules-core-newswire-articlee3e55a10507405de05ae92006ec0d02b",
          selectBox: "rockstargames-modules-core-newswire-articlec646a2bff16ec3003b027857488cd612",
          selectBoxOption: "rockstargames-modules-core-newswire-articlebcccd1077d13d7fe1585655e5c5f8363"
        },
        ge = (0, ce.withIntl)((e => {
          let {
            theme: t,
            languageSelectorOpened: a,
            setLanguageSelectorOpened: s,
            location: r,
            parent: n = "footer"
          } = e;
          const {
            track: o
          } = (0, k.useGtmTrack)(), l = (0, ce.useIntl)(), [d, m] = (0, ce.getLocale)(), [u, g] = (0, p.useState)(!1), f = (0, p.useMemo)((() => (0, le.A)()), []), h = (0, p.useCallback)((e => {
            let t = r.pathname.replace(/^\/|\/$/g, "");
            const a = t.split("/");
            return ce.locales.map((e => e.subdomaincom)).includes(a[0]) && (t = a.slice(1).join("/")), f.currentSite?.site === le.C.www ? "en" === e ? `${window.location.origin}/${t}${r.search}` : `${window.location.origin}/${e}/${t}${r.search}` : `${window.location.origin}/${t}${r.search}`
          }), [r]), b = (0, p.useRef)(null), [v, w] = (0, p.useState)(0), _ = matchMedia("(hover: none) and (pointer: coarse)").matches, x = e => {
            if (s && s(!1), d.subdomaincom === e || "none" === e) return void(s && s(!1));
            const t = ce.locales.find((t => t.subdomaincom === e));
            if (t) {
              const a = h(e);
              o({
                event: "cta_other",
                link_url: a,
                text: e,
                element_placement: n
              }), m(t.iso), window.location.href = a
            }
          };
          return (0, p.useEffect)((() => {
            void 0 !== a && !1 === a && !0 === u && g(!1)
          }), [a]), (0, p.useEffect)((() => {
            b.current && w(b.current.scrollHeight)
          }), [b]), (0, c.jsxs)("div", {
            className: [ue.languageSelector, u ? ue.open : ""].join(" "),
            "data-theme": t,
            children: [_ && "sc-menu" === t && (0, c.jsx)("div", {
              className: ue.selectBoxWrapper,
              children: (0, c.jsxs)("select", {
                className: ue.selectBox,
                onClick: e => e.stopPropagation(),
                onChange: e => {
                  const t = e.currentTarget.value;
                  x(t)
                },
                "aria-label": l.formatMessage(me.language_selector_default),
                children: [(0, c.jsx)("option", {
                  className: ue.selectBoxOption,
                  value: "none",
                  children: (0, c.jsx)(ce.FormattedMessage, {
                    ...me.language_selector_default
                  })
                }), ce.locales.map((e => {
                  let {
                    label: t,
                    subdomaincom: a
                  } = e;
                  return (0, c.jsx)("option", {
                    className: ue.selectBoxOption,
                    value: a,
                    children: t
                  }, `mobile-${a}`)
                }))]
              })
            }), (!_ || "sc-menu" !== t) && (0, c.jsxs)(c.Fragment, {
              children: [(0, c.jsxs)("button", {
                onClick: e => {
                  e.stopPropagation(), s && s(!u), g(!u)
                },
                type: "button",
                "aria-label": l.formatMessage(me.language_selector_default),
                children: [(0, c.jsx)("i", {}), (0, c.jsx)("span", {
                  children: (0, c.jsx)(ce.FormattedMessage, {
                    ...me.language_selector_default
                  })
                })]
              }), (0, c.jsx)("div", {
                className: ue.linkWrapper,
                ref: b,
                style: {
                  "--ls-linkWrapper-opened-height": `${v}px`
                },
                children: (0, c.jsx)("div", {
                  className: ue.links,
                  children: ce.locales.map((e => {
                    let {
                      subdomaincom: t,
                      label: a
                    } = e;
                    return (0, c.jsx)(i.A, {
                      to: h(t),
                      onClick: (s = t, () => {
                        x(s)
                      }),
                      tabIndex: u ? 0 : -1,
                      children: a
                    }, `desktop-${t}`);
                    var s
                  }))
                })
              })]
            })]
          })
        }), de);
      var fe = a(2024);
      const pe = {
          layeredImage: "rockstargames-modules-core-newswire-articlea29c233d553c5905763bb69412c1ece4",
          layersWrapper: "rockstargames-modules-core-newswire-articleaabf78eb3e1fe545556ad0fa5639296e",
          "hero-lg": "rockstargames-modules-core-newswire-articleca666917bdeaed43fd0a7af7dc30a0f7",
          "hero-md": "rockstargames-modules-core-newswire-articlef0a202fcbf13f1e91157e531ae829ea3",
          "hero-sm": "rockstargames-modules-core-newswire-articlee03dbf5d16aeab81ca65f4cb7e64446f",
          contain: "rockstargames-modules-core-newswire-articlec4c3c929b11e88540e3f19d5715393ec",
          cover: "rockstargames-modules-core-newswire-articleb283d6381c82abf4dde21c57b8fc5f66",
          fill: "rockstargames-modules-core-newswire-articlee9d16b94c1ed476c9346cb6f48f5ad3e",
          "bg-img": "rockstargames-modules-core-newswire-articlee45fabf9c4e04bf3ee27e9c84c50c09b",
          imageLayer: "rockstargames-modules-core-newswire-articleed8d0ad18a62f087629ff5831fa0ac55",
          "layer-lg-height": "rockstargames-modules-core-newswire-articlefaf1d5c6b2fe2ad27d4bb95ba7388f3d",
          "layer-md-height": "rockstargames-modules-core-newswire-articleb41041f11a5ef98325948acc3dec956c",
          "layer-sm-height": "rockstargames-modules-core-newswire-articleba7d5822aa073c9e01cd682d65c18944",
          "layer-xl-height": "rockstargames-modules-core-newswire-articleec2399a1f7e79e9aacba81b242ad0602",
          "layer-xs-height": "rockstargames-modules-core-newswire-articlea6ec38ac99c762fcf0dd99aa2ced8f2b",
          "layer-xxl-height": "rockstargames-modules-core-newswire-articled7c1314e717273dfbb2acd3d5e06e585",
          "layer-lg-width": "rockstargames-modules-core-newswire-articleca0dd7a55a5db5ee358ce51a166e5431",
          "layer-md-width": "rockstargames-modules-core-newswire-articlebd4c246f4f0eaf7173d104ed1e7c2d06",
          "layer-sm-width": "rockstargames-modules-core-newswire-articlefe3f49cba9cc10e4e076a43a6b36b862",
          "layer-xl-width": "rockstargames-modules-core-newswire-articlebde3d6485ac7bb483dcca1ad4e2bbe67",
          "layer-xs-width": "rockstargames-modules-core-newswire-articleb87efd95b330cacd4a5eaecf83528f4d",
          "layer-xxl-width": "rockstargames-modules-core-newswire-articleac872df7985f9d591c85f97c72d451dc",
          "bottom-y": "rockstargames-modules-core-newswire-articled63fdb49c964c28c5e8952cd79a393a0",
          "center-x": "rockstargames-modules-core-newswire-articled248443eb924360a5d1d7211094ea827",
          "center-y": "rockstargames-modules-core-newswire-articlea8d87c765a51d98f0e3a9afd149ed0dc",
          "left-x": "rockstargames-modules-core-newswire-articledcaa6339b43850be2e14967cab730041",
          "right-x": "rockstargames-modules-core-newswire-articleb656d800e3d134bd3a7e273a5f6d7ae6",
          "top-y": "rockstargames-modules-core-newswire-articleadaf230f139f906eb912b58b315406ac",
          border: "rockstargames-modules-core-newswire-articlec73e199a8978fb80895753c9a38fcdff",
          shards: "rockstargames-modules-core-newswire-articlee650a715d6f220ad49bb568768154b0e",
          shards_three: "rockstargames-modules-core-newswire-articleb0c8be28788c6b23cea904bdc60d7e07",
          shards_two: "rockstargames-modules-core-newswire-articlee41252d3a0aee1d229f6bddc20c38d47",
          dual: "rockstargames-modules-core-newswire-articledb575e1d021e69ebb4265a29484e2888"
        },
        he = e => {
          let {
            style: t,
            className: a
          } = e;
          const s = {
              ...t
            },
            r = t["--border-image-source"],
            i = (0, m.useGetCdnSource)(r || null);
          return r && (s["--border-image-source"] = `url(${i})`), (0, c.jsx)("div", {
            className: (0, m.classList)(pe.border, a),
            style: {
              ...s
            }
          })
        },
        be = e => e?.images ? (0, c.jsx)("div", {
          className: (0, m.classList)(pe.layeredImage, pe[e?.variantClass], pe[e?.wrapperSizeClass]),
          style: {
            ...e?.style ?? {}
          },
          children: (0, c.jsxs)("div", {
            className: pe.layersWrapper,
            children: [e?.images?.map(((e, t) => {
              const {
                image: a,
                paddingClass: s,
                imageSizeClass: r,
                objectFitClass: i,
                positionClassX: n,
                positionClassY: o,
                zIndex: l,
                className: d,
                style: u,
                alt: g,
                displayClass: f
              } = e;
              return (0, c.jsx)(fe.A, {
                image: a,
                style: {
                  zIndex: l ?? t + 1
                },
                imageStyle: u,
                className: (0, m.classList)(d, f, pe.imageLayer, pe[s], pe[r], pe[i], pe[n], pe[o]),
                alt: g
              }, l ?? t + 1)
            })), e?.borderImage && (0, c.jsx)(he, {
              style: e?.borderImage,
              className: e?.borderImage?.displayClass
            })]
          })
        }) : null;
      var ke = a(99096),
        ve = a(28089);
      const we = e => {
        const {
          src: t,
          thumbnail: a,
          style: s
        } = e, r = (0, ve.useGetCdnSource)(t), i = (0, ve.useGetCdnSource)(a?.thumbnail ?? ""), n = {
          ...a,
          ...e,
          src: r,
          thumbnail: i
        };
        return (0, c.jsx)("div", {
          style: s,
          className: "rockstargames-modules-core-newswire-articleba57806be35d331458382a4c3554ae11",
          children: (0, c.jsx)(ke.Lightbox, {
            ...n
          })
        })
      };
      var _e = a(8999);
      const xe = {
          pillBtn: "rockstargames-modules-core-newswire-articleeea0db67b0aabf28288b288845324afe",
          selected: "rockstargames-modules-core-newswire-articled1d25362fd730ca979d5ad79de088f89",
          multiSourceContainer: "rockstargames-modules-core-newswire-articledc538bbfc2f407ed9fe840097ccac819",
          multiSourceImage: "rockstargames-modules-core-newswire-articleee782a29692a8eb06db1287a4984c243",
          animatePlaceholder: "rockstargames-modules-core-newswire-articlefbd73f5f70c2ce64aa9c9bd398f1a3b5",
          "loader-keyframes": "rockstargames-modules-core-newswire-articlef6040b2ae96a9b0dcdb2d283c9caff59"
        },
        ye = e => {
          let {
            imageUrl: t,
            className: a,
            alt: s,
            style: r,
            lazy: i = !1,
            decoding: n = "auto",
            sizes: o = [320, 480, 768, 1024, 1440, 1920, 2560]
          } = e;
          const [l, d] = (0, p.useState)(!1);
          return (0, c.jsxs)("div", {
            className: xe.multiSourceContainer,
            children: [!l && (0, c.jsx)("img", {
              className: [a, xe.animatePlaceholder].join(" "),
              src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiBmaWxsPSIjMzMzMzMzIi8+Cjwvc3ZnPgo=",
              sizes: "(max-width: 1024px) 100vw, 1024px",
              alt: "Loading...",
              style: r
            }), (0, c.jsx)("img", {
              className: [xe.multiSourceImage, a].join(" "),
              src: `${t}?im=Resize=1920`,
              srcSet: (m = t, o.map((e => `${m}?im=Resize=${e} ${e}w`)).join(", ")),
              sizes: "(max-width: 400px) 200px, (max-width: 1920px) 100vw, 1920px",
              alt: s ?? "Multi-Source Image",
              style: r,
              onLoad: () => {
                d(!0)
              },
              loading: i ? "lazy" : "eager",
              decoding: n
            })]
          });
          var m
        };
      var je = a(14522);
      const Ne = {
          pillBtn: "rockstargames-modules-core-newswire-articlec9f730df1672c23262c63f94855e2c1f",
          selected: "rockstargames-modules-core-newswire-articlebd235351695ea49ca8a40a734be762f3",
          dialogButton: "rockstargames-modules-core-newswire-articlee3f58ed639bd7c31165cb9e56fb67a3b",
          primary: "rockstargames-modules-core-newswire-articleff6f35f6658334275d17af3aadc230e9",
          secondary: "rockstargames-modules-core-newswire-articlea6e0c90773658027b6dfc0f5be87b91f"
        },
        Se = e => {
          let {
            button: t,
            closeDialog: a,
            style: s = "primary"
          } = e;
          const {
            buttonIcon: r,
            buttonText: i,
            extraClasses: n,
            isDisabled: o,
            isLink: l,
            link: d,
            onClick: m,
            testId: u
          } = t;
          return l ? i && (0, c.jsx)("a", {
            className: [Ne.dialogButton, Ne.link, Ne[s], n].join(" "),
            href: d,
            ...u && {
              "data-testid": u
            },
            children: i
          }) : (0, c.jsx)("button", {
            className: [Ne.dialogButton, Ne[s], n].join(" "),
            disabled: o,
            onClick: e => (e => {
              m && m(), a && a(), e.stopPropagation()
            })(e),
            type: "button",
            value: "cancel",
            "aria-label": i,
            ...u && {
              "data-testid": u
            },
            children: (0, c.jsxs)("span", {
              children: [i, r && (0, c.jsx)("div", {
                className: Ne.ctaIcon
              })]
            })
          })
        },
        Te = {
          pillBtn: "rockstargames-modules-core-newswire-articlea6596047538a8c7840c9b519e55d4b4c",
          selected: "rockstargames-modules-core-newswire-articlec23a38d9820d9c6f6ffc8cf494cca67b",
          dialog: "rockstargames-modules-core-newswire-articlea0524e2689bf1ac5eb313d6f39b15e49",
          "slide-up": "rockstargames-modules-core-newswire-articlefaf82701babd6fd15f45b869930ce6d5",
          "fade-in": "rockstargames-modules-core-newswire-articlea203c39ccc49f119b1904803946daeb5",
          heading: "rockstargames-modules-core-newswire-articleea50c6a81d2a6c75a340cf9a5034f325",
          message: "rockstargames-modules-core-newswire-articlef6957cb9bdbc99eedd86a736458efee1",
          icon: "rockstargames-modules-core-newswire-articlec3cc73e6852a0d0dd82680cfd5bb93bf",
          check: "rockstargames-modules-core-newswire-articleebed32283c454e37e020357dd0abb7f3",
          error: "rockstargames-modules-core-newswire-articlec8e61f39248404819185359c324e35c8",
          mail: "rockstargames-modules-core-newswire-articlee670856605362c02bdd8110f5b382ff8",
          content: "rockstargames-modules-core-newswire-articlecd8f41fce68356058aaff9164d1b6665",
          actions: "rockstargames-modules-core-newswire-articled46819e82811cd9791bb9ecb9790acc7"
        },
        Ce = e => {
          let {
            icon: t,
            title: a,
            secondaryText: s,
            buttons: r,
            showDialog: i,
            onClose: n = (() => {}),
            closeOnOutsideClick: o = !0,
            extraClasses: l
          } = e;
          const d = (0, p.useRef)(null),
            {
              setBodyIsLocked: m
            } = (0, b.useBodyScrollable)("AlertDialog");
          (0, p.useEffect)((() => {
            i && d?.current && (d.current?.showModal?.(), m(!0))
          }), [i]);
          const u = () => {
            m(!1), n(), d.current?.close?.()
          };
          if (i) return (0, c.jsxs)("dialog", {
            ref: d,
            className: Te.dialog,
            onClick: e => (e => {
              if (!e.currentTarget) return;
              const t = e.currentTarget.getBoundingClientRect();
              (t.left > e.clientX || t.right < e.clientX || t.top > e.clientY || t.bottom < e.clientY) && o && (m(!1), n(), e.currentTarget.close())
            })(e),
            "data-testid": "alert-dialog",
            children: [t && (0, c.jsx)("i", {
              className: [Te.icon, Te[t]].join(" ")
            }), (0, c.jsxs)("div", {
              className: [Te.content, l?.content].join(" "),
              children: [(0, c.jsx)("h3", {
                className: [Te.heading, l?.heading].join(" "),
                children: a
              }), s && (0, c.jsx)("div", {
                className: [Te.message, l?.message].join(" "),
                dangerouslySetInnerHTML: {
                  __html: s
                }
              })]
            }), r && (0, c.jsx)("div", {
              className: Te.actions,
              children: r.slice(0, 2).map(((e, t) => (0, c.jsx)(Se, {
                style: 0 === t ? "primary" : "secondary",
                button: e,
                closeDialog: u
              }, e.buttonText)))
            })]
          })
        };
      var Ae = a(72558),
        Ie = a(31955),
        Me = a.n(Ie);
      const Le = (0, b.withTranslations)((e => {
        let {
          section: t = "",
          relativeTo: a = "",
          tagId: s = null,
          metaUrl: r = "/newswire",
          t: i
        } = e;
        const {
          track: n
        } = (0, k.useGtmTrack)(), [o, l] = (0, h.useSearchParams)(), {
          tagId: m = null
        } = (0, h.useParams)(), [u, g] = (0, p.useState)(m ?? s ?? o.get("tag_id")), [f, b] = (0, p.useState)(1), [v, w] = (0, p.useState)(20), [_, x] = (0, p.useState)([]), [y, j] = (0, p.useState)(null), [N, {
          loading: S,
          data: T
        }] = (0, R.useLazyQuery)(Me(), {
          variables: {
            tagId: Number(u),
            page: f,
            metaUrl: r,
            limit: v,
            locale: "en_us"
          }
        });
        return (0, p.useEffect)((() => {
          b(1), x([]), w(20), g(m ?? s ?? o.get("tag_id")), N()
        }), [o.get("tag_id"), m, s]), (0, p.useEffect)((() => {
          const e = _;
          T?.posts?.paging && j(T?.posts?.paging), T?.posts?.results && x(e.concat(T?.posts?.results))
        }), [T]), (0, p.useEffect)((() => {
          (() => {
            const e = o.get("page"),
              t = Number(e ?? 1);
            w(20 * t), N()
          })()
        }), []), _.length ? (0, c.jsxs)("div", {
          "data-testid": "newswire-list",
          children: [(0, c.jsx)(ze, {
            section: t,
            posts: _,
            relativeTo: a,
            noSpecialOrder: null !== u
          }), null !== y && y.nextPage ? (0, c.jsx)(d.A, {
            "data-testid": "more-stories",
            onClick: e => {
              const t = o.get("page"),
                a = Number(t ?? f) + 1;
              b(a), 20 !== v && w(20), N(), l({
                page: String(a)
              }, {
                replace: !0
              }), n({
                event: "cta_learn",
                text: "more stories",
                element_placement: "newswire"
              })
            },
            disabled: S,
            context: "secondary",
            children: i("More Stories")
          }) : ""]
        }) : null
      }));
      var Ee = a(95073),
        Pe = a(31716);
      const Oe = {
          newswireBlocks: "rockstargames-modules-core-newswire-articlec2c8eedd25de7e186655f98b2a8d8960",
          noSpecialOrder: "rockstargames-modules-core-newswire-articlec0d0db9dfc71c9f4f959b9c017b1ae4b"
        },
        ze = (0, b.withGtmTracking)((e => {
          let {
            section: t = "",
            noSpecialOrder: a = !1,
            posts: s,
            gtmTrack: r,
            relativeTo: i
          } = e;
          const [n, o] = (0, p.useState)(null);
          return (0, p.useEffect)((() => {
            if (!s.length) return;
            const e = {
              event: "view_item_list",
              ecommerce: {
                impressions: []
              }
            };
            s.map(((a, s) => {
              e.ecommerce.impressions.push({
                name: a.title,
                id: a.id,
                position: s + 1,
                list: t
              })
            })), r(e), o(s.length)
          }), [s.length]), (0, c.jsx)("div", {
            "data-testid": "newswire-blocks-container",
            className: [Oe.newswireBlocks, a ? Oe.noSpecialOrder : "", Oe.contextHome].join(" "),
            children: s.map(((e, s) => (0, c.jsx)(Ae.A, {
              section: t,
              index: s,
              noSpecialOrder: a,
              post: e,
              focused: s === n
            }, e.id)))
          })
        }));
      var De = a(22941),
        Be = a(53149),
        Ve = a(83277);
      const $e = (e, t) => {
          const a = e.tiers && e.tiers.every((e => e.isComplete)),
            s = t.tiers && t.tiers.every((e => e.isComplete));
          return a && !s ? 1 : !a && s ? -1 : 0
        },
        Fe = (0, ce.defineMessages)({
          pl_card_badge_content_complete: {
            id: "pl_card_badge_content_complete",
            defaultMessage: "Complete"
          }
        }),
        Re = {
          pillBtn: "rockstargames-modules-core-newswire-articlee6891f053f06919f1ef0dc72cafe9ae7",
          selected: "rockstargames-modules-core-newswire-articlee5cce3088e494e8ddb9b0cf5528697a3",
          packCardTierIndicator: "rockstargames-modules-core-newswire-articleeee874b61946e2a65886d622445e1c38",
          tierIndicator: "rockstargames-modules-core-newswire-articlebf9ed66cb83cf9a38bfc6fbb8e105fb7",
          active: "rockstargames-modules-core-newswire-articlecfa711252c08391d3a0f1ecd8728a61a"
        },
        Ge = "TierIndicator:checkList",
        He = e => {
          let {
            tiers: t
          } = e;
          return (0, c.jsx)("div", {
            className: Re.packCardTierIndicator,
            "data-testid": Ge,
            children: t?.map(((e, t) => (0, c.jsx)("div", {
              className: [Re.tierIndicator, e.isComplete ? Re.active : ""].join(" ")
            }, t)))
          })
        },
        Ue = {
          pillBtn: "rockstargames-modules-core-newswire-articlee2e4b892ddcbdb2e09d3c3599a7e6c56",
          selected: "rockstargames-modules-core-newswire-articleff5c3c023fc12b68c6bf92b560c479b1",
          packCard: "rockstargames-modules-core-newswire-articled6ef486c5f60d41c5662b092336c1f52",
          packCardImageBox: "rockstargames-modules-core-newswire-articleeb4637cb1c81d1def1fd92252f90d675",
          packCompleted: "rockstargames-modules-core-newswire-articlefcd5bbd0d1e3ebd45cf2cb372468e62c",
          packCardTextBox: "rockstargames-modules-core-newswire-articlea124ee1b0383d30157e84108cf10b83b",
          badge: "rockstargames-modules-core-newswire-articled42fb1fd7d553d75675a251df2a255ee",
          icon: "rockstargames-modules-core-newswire-articlecbc69eda17393995ac9d41a8b4b531e8",
          label: "rockstargames-modules-core-newswire-articled4649f3812d37e7407503d49dcaaba04"
        },
        We = [{
          isComplete: !1
        }, {
          isComplete: !1
        }, {
          isComplete: !1
        }, {
          isComplete: !1
        }],
        qe = "PackCard:backgroundImage",
        Xe = "PackCard:completeTag",
        Ye = e => {
          let {
            title: t,
            url: a,
            images: s,
            className: r,
            tiers: i,
            onClick: n,
            imageSize: o = 420,
            imageLoaded: l
          } = e;
          const {
            isMobile: d
          } = (0, b.useWindowResize)(), {
            loggedIn: m
          } = (0, k.useRockstarUser)(), {
            selectedCharacterTuple: u
          } = (0, k.useRockstarUserState)(), [g, f] = (0, p.useState)(!1), [v, w] = (0, p.useState)(!1), _ = (0, ce.useIntl)(), x = !!i?.length;
          (0, p.useEffect)((() => {
            if (Array.isArray(u)) {
              const e = u?.[0];
              w((0, b.getGen9Consoles)().includes(e))
            }
          }), [String(u)]), (0, p.useEffect)((() => {
            if (i && i.length > 0) {
              const e = i.some((e => !e.isComplete));
              f(!e)
            } else f(!1)
          }), [i]);
          const y = `${d?s?.mobile:s?.desktop}?im=Resize,height=${o}`;
          return (0, b.usePreloadImg)(y), (0, c.jsx)(h.NavLink, {
            className: [Ue.packCard, r, g ? Ue.packCompleted : ""].join(" "),
            to: a,
            onClick: n,
            children: (0, c.jsxs)("div", {
              className: [Ue.packCardImageBox, l ? Ue.packCardImageLoaded : ""].join(" "),
              style: {
                "--background-image": `url(${y})`
              },
              "data-testid": qe,
              children: [g && (0, c.jsxs)("div", {
                className: Ue.badge,
                "data-testid": Xe,
                children: [(0, c.jsx)("div", {
                  className: Ue.icon
                }), (0, c.jsx)("div", {
                  className: Ue.label,
                  children: _.formatMessage(Fe.pl_card_badge_content_complete)
                })]
              }), (0, c.jsxs)("div", {
                className: Ue.packCardTextBox,
                children: [(0, c.jsx)("h4", {
                  children: t
                }), m && !g && v && (0, c.jsx)(He, {
                  tiers: x ? i : We
                })]
              })]
            })
          })
        },
        Qe = {
          pillBtn: "rockstargames-modules-core-newswire-articlec0607ec9e0a3925181496fc555721e0a",
          selected: "rockstargames-modules-core-newswire-articleff76988869bea7d18917be00339b2434",
          packList: "rockstargames-modules-core-newswire-articleffeeb1f272f99c5cb4711e4956c65f7f",
          headerVisible: "rockstargames-modules-core-newswire-articlef6652e03be6ce55bd8f068900093a707",
          packCard: "rockstargames-modules-core-newswire-articlea53b37fe7ab10b353eceea86123258a1",
          packGrid: "rockstargames-modules-core-newswire-articleb85775dc95fb3881171ee42e49076cbf"
        };
      Be.os.registerPlugin(Ve.L);
      const Ke = e => {
          let {
            isHeaderVisible: t,
            packListItems: a,
            packCardClassName: s = Qe.packCard,
            packListClassName: r = Qe.packList,
            packGridClassName: i = Qe.packGrid,
            selectPackCard: n,
            sortFunction: o = $e
          } = e;
          const l = (0, p.useRef)(null),
            d = [...a].sort(o),
            [m, u] = (0, p.useState)(),
            [g, f] = (0, p.useState)(!1);
          return (0, p.useEffect)((() => {
            if (!0 === g) return;
            clearTimeout(m);
            const e = setTimeout((() => {
              f(!0)
            }), 1e3);
            u(e)
          }), []), (0, Ve.L)((() => {
            if (!1 !== g && l?.current) {
              const e = l.current.children;
              Be.os.to(e, {
                opacity: 1,
                y: 0,
                duration: .5,
                stagger: .05,
                ease: Be.ys.easeInOut
              })
            }
          }), {
            dependencies: [g, a],
            scope: l,
            revertOnUpdate: !0
          }), (0, c.jsx)("div", {
            className: [r, t ? Qe.headerVisible : ""].join(" "),
            "data-testid": "pack-list",
            children: (0, c.jsx)("div", {
              ref: l,
              className: i,
              "data-testid": "pack-grid",
              children: d.map(((e, t) => {
                let {
                  id: a,
                  name: r,
                  title: i,
                  url: o,
                  images: l,
                  tiers: d
                } = e;
                return (0, c.jsx)(Ye, {
                  title: i,
                  url: o,
                  className: s,
                  images: l,
                  tiers: d,
                  onClick: () => ((e, t, a, s, r) => {
                    n(e, t, a, s, r)
                  })(r, i, o, a, t)
                }, i)
              }))
            })
          })
        },
        Ze = {
          pillBtn: "rockstargames-modules-core-newswire-articledb4bf6cb61b2370932e4811235d51afa",
          selected: "rockstargames-modules-core-newswire-articleb691088f1c9719532c68ca7b97487e5b",
          chipButton: "rockstargames-modules-core-newswire-articlebfe6fefc1068ed81c8b38519a854285f"
        },
        Je = e => {
          let {
            title: t,
            onClick: a,
            selected: s
          } = e;
          return (0, c.jsx)("button", {
            type: "button",
            onClick: a,
            tabIndex: 0,
            "aria-label": t,
            className: [Ze.chipButton, s ? Ze.selected : ""].join(" "),
            children: (0, c.jsx)("div", {
              children: t
            })
          })
        };
      var et;

      function tt() {
        return tt = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = arguments[t];
            for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
          }
          return e
        }, tt.apply(this, arguments)
      }
      const at = e => p.createElement("svg", tt({
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        fill: "none"
      }, e), et || (et = p.createElement("path", {
        stroke: "#fff",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "m15 18-6-6 6-6"
      })));
      var st;

      function rt() {
        return rt = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = arguments[t];
            for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
          }
          return e
        }, rt.apply(this, arguments)
      }
      const it = e => p.createElement("svg", rt({
          xmlns: "http://www.w3.org/2000/svg",
          width: 24,
          height: 24,
          fill: "none"
        }, e), st || (st = p.createElement("path", {
          stroke: "#fff",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "m9 18 6-6-6-6"
        }))),
        nt = {
          pillBtn: "rockstargames-modules-core-newswire-articlef5c8cbcdc2408c602e1d5c5ef98091a1",
          selected: "rockstargames-modules-core-newswire-articlef05732bff172f32532936ffdf636a215",
          navScrollButton: "rockstargames-modules-core-newswire-articleef8ca38f98b731ff5dfe07937b1bbe34"
        },
        ot = e => {
          let {
            direction: t,
            className: a,
            ...s
          } = e;
          return (0, c.jsxs)("button", {
            type: "button",
            className: [a, nt.navScrollButton].join(" "),
            ...s,
            children: ["left" === t && (0, c.jsx)(at, {}), "right" === t && (0, c.jsx)(it, {})]
          })
        },
        ct = (0, ce.defineMessages)({
          pln_career_progress_unavailable: {
            id: "pln_career_progress_unavailable",
            defaultMessage: "Sorry, career progress pack cards are currently unavailable."
          },
          pln_career_progress_all_chip_title: {
            id: "pln_career_progress_all_chip_title",
            defaultMessage: "All"
          },
          pln_career_progress_header_signin_label: {
            id: "pln_career_progress_header_signin_label",
            defaultMessage: "Sign In"
          },
          pln_career_progress_header_signup_label: {
            id: "pln_career_progress_header_signup_label",
            defaultMessage: "Create An Account"
          },
          pln_career_progress_header_signup_account: {
            id: "pln_career_progress_header_signup_account",
            defaultMessage: "Don't have an account?"
          },
          pln_career_progress_link_console_account: {
            id: "pln_career_progress_link_console_account",
            defaultMessage: "Link A Game Account"
          },
          pln_career_progress_link_console_account_title: {
            id: "pln_career_progress_link_console_account_title",
            defaultMessage: "Link a GTA Online Character"
          },
          pln_career_progress_link_console_account_description: {
            id: "pln_career_progress_link_console_account_description",
            defaultMessage: "We couldn't find a GTA Online character linked to your Rockstar Games account. Link one or switch to a different Rockstar Games account."
          },
          pln_career_progress_header_tooltip_aria_label: {
            id: "pln_career_progress_header_tooltip_aria_label",
            defaultMessage: "Tiers Info tooltip"
          },
          pln_career_progress_header_title: {
            id: "pln_career_progress_header_title",
            defaultMessage: "Career Progress"
          },
          pln_career_progress_header_body: {
            id: "pln_career_progress_header_body",
            defaultMessage: "Learn more about a huge range of Grand Theft Auto Online updates, and discover special challenges and rewards only available on PS5 and Xbox Series X|S."
          },
          pln_career_progress_header_body_gen9: {
            id: "pln_career_progress_header_body_gen9",
            defaultMessage: "See all the challenges you've completed in your GTA Online Career. You can also discover new ones and earn valuable rewards as you rise through the criminal ranks."
          },
          pln_career_progress_percentage_chart_title: {
            id: "pln_career_progress_percentage_chart_title",
            defaultMessage: "Complete"
          },
          pln_career_progress_percentage_chart_title_full: {
            id: "pln_career_progress_percentage_chart_title_full",
            defaultMessage: "Your career progress is {percentage}% completed."
          },
          pln_scroll_left: {
            id: "pln_scroll_left",
            defaultMessage: "Scroll Left"
          },
          pln_scroll_right: {
            id: "pln_scroll_right",
            defaultMessage: "Scroll Right"
          }
        }),
        lt = {
          pillBtn: "rockstargames-modules-core-newswire-articlec07e609b8b71ab690ceb8c0ce0a10e3b",
          selected: "rockstargames-modules-core-newswire-articleb7277764b073fb1731f97500d63602dd",
          chipsContainer: "rockstargames-modules-core-newswire-articleb12cbbc254604b2d0a9e23a794cc306b",
          chips: "rockstargames-modules-core-newswire-articlefde4c31ca848c29a1064a0fee3686f93",
          nextChipNavButton: "rockstargames-modules-core-newswire-articlee753e2314e48a7d59ead26e77cac50aa",
          previousChipNavButton: "rockstargames-modules-core-newswire-articlece3553d0304e228596f67c2308240648",
          nextNavIcon: "rockstargames-modules-core-newswire-articleef938f00847374bd89f70d0e5b1f97a8",
          previousNavIcon: "rockstargames-modules-core-newswire-articlef750c5a49886ae190c14e52aa026a417"
        },
        dt = e => {
          let {
            navItems: t,
            category: a,
            setCategory: s,
            chipsContainerClass: r = lt.chipsContainer,
            previousChipButtonClass: i = "",
            nextChipBtnClass: n = ""
          } = e;
          const o = (0, ce.useIntl)(),
            {
              track: l
            } = (0, k.useGtmTrack)(),
            {
              pathname: d
            } = (0, h.useLocation)(),
            u = (0, p.useMemo)((() => Math.max(t.findIndex((e => e.name === a)), 0)), [t, d]),
            [g, f] = (0, p.useState)(u),
            [b, v] = (0, p.useState)(!1),
            [w, _] = (0, p.useState)(!1),
            [x, y] = (0, p.useState)(!1),
            j = (0, p.useRef)(null),
            N = (0, p.useRef)(null),
            S = (0, p.useRef)(null),
            T = (0, p.useCallback)(((e, t) => {
              S.current && S.current.slideTo(e), f(e), C(`Career Progress Nav > ${t}`)
            }), [l]),
            C = (e, t) => {
              l({
                event: "component_tab_click",
                text: e.split(">").pop()?.trim() || "",
                link_url: t,
                element_placement: e
              })
            };
          (0, p.useEffect)((() => {
            s(g)
          }), [g]);
          const A = e => {
            e.isEnd ? _(!0) : _(!1), e.isBeginning ? y(!0) : y(!1)
          };
          return (0, p.useEffect)((() => {
            S.current && ((S.current.wrapperEl.clientWidth || 0) > (S.current.el.clientWidth || 0) ? (v(!0), S.current.params.centeredSlides = !0, S.current.params.centeredSlidesBounds = !0) : (v(!1), S.current.params.centeredSlides = !1, S.current.params.centeredSlidesBounds = !1))
          }), [S.current?.wrapperEl?.clientWidth, S.current?.el?.clientWidth]), (0, c.jsxs)("div", {
            className: r,
            children: [!x && b && (0, c.jsx)("div", {
              ref: N,
              className: (0, m.classList)(lt.previousChipNavButton, i),
              children: (0, c.jsx)(ot, {
                direction: "left",
                className: lt.previousNavIcon,
                onClick: () => {
                  S.current && (S.current?.slidePrev(), S.current.isBeginning ? y(!0) : y(!1), l({
                    event: "carousel_previous",
                    element_placement: "career progress page"
                  }))
                },
                "aria-label": o.formatMessage(ct.pln_scroll_left)
              })
            }), (0, c.jsx)("div", {
              className: lt.chips,
              children: (0, c.jsx)(X.RC, {
                onBeforeInit: e => S.current = e,
                onInit: A,
                className: lt.chips,
                direction: "horizontal",
                grabCursor: !0,
                slidesPerView: "auto",
                initialSlide: g,
                onSlideChange: A,
                onResize: A,
                children: t.map(((e, t) => {
                  let {
                    title: a
                  } = e;
                  return (0, c.jsx)(X.qr, {
                    children: (0, c.jsx)(Je, {
                      title: a,
                      onClick: () => T(t, a),
                      selected: g === t
                    })
                  }, a)
                }))
              })
            }), !w && b && (0, c.jsx)("div", {
              ref: j,
              className: (0, m.classList)(lt.nextChipNavButton, n),
              children: (0, c.jsx)(ot, {
                direction: "right",
                className: lt.nextNavIcon,
                onClick: () => {
                  S.current && (S.current?.slideNext(), S.current.isEnd ? _(!0) : _(!1), l({
                    event: "carousel_next",
                    element_placement: "career progress page"
                  }))
                },
                "aria-label": o.formatMessage(ct.pln_scroll_right)
              })
            })]
          })
        },
        mt = e => {
          let {
            navItems: t,
            onNavItemClick: a,
            isOpen: s,
            isHeaderVisible: r
          } = e;
          const {
            track: i
          } = (0, k.useGtmTrack)(), [n, o] = (0, p.useState)(0), l = (0, p.useCallback)(((e, s) => {
            d(`Secondary Nav > ${t[n].title} > ${e}`, s), a()
          }), [t, a, n, i]), d = (e, t) => {
            i({
              event: "nav_click",
              text: e.split(">").pop()?.trim() || "",
              link_url: t,
              element_placement: e
            })
          };
          return (0, c.jsx)(Z.P.div, {
            className: "rockstargames-modules-core-newswire-articleaa2ce15f29ac99fe06895664698bb6cc",
            initial: {
              height: 0
            },
            animate: {
              height: s ? "100dvh" : 0
            },
            transition: {
              ease: "easeInOut",
              duration: .4
            },
            children: (0, c.jsxs)("div", {
              className: "rockstargames-modules-core-newswire-articlef2f85d11f6ee99282db61467ebdbd00f",
              children: [(0, c.jsx)("div", {
                className: "rockstargames-modules-core-newswire-articlec5288c05172905ec86e3fb56c010d6d3",
                children: (0, c.jsx)(dt, {
                  navItems: t,
                  category: t[n]?.name,
                  setCategory: o,
                  nextChipBtnClass: "rockstargames-modules-core-newswire-articlec8a45e31d035c8e867358deea365ceac",
                  previousChipButtonClass: "rockstargames-modules-core-newswire-articlee9684050ab2f4aa408ae565c740cf50c"
                })
              }), (0, c.jsx)("div", {
                className: "rockstargames-modules-core-newswire-articlef1adea94eb32de966a0e622247370f4e",
                children: (0, c.jsx)(Ke, {
                  isHeaderVisible: r,
                  packListItems: t[n]?.subNavItems ?? [],
                  selectPackCard: l
                })
              })]
            })
          })
        },
        ut = "rockstargames-modules-core-newswire-articlec54c374409e11d1429ce99457cbf7441",
        gt = e => {
          let {
            children: t,
            data: a,
            onPageUpdate: s,
            page: r,
            className: i
          } = e;
          return (0, c.jsx)("a", {
            href: "#",
            className: r === a.page ? `rockstargames-modules-core-newswire-articlec0eebf4f915ff9f5cc362e22d6d7d976 ${i??""}` : "",
            onClick: e => {
              e.preventDefault(), s(r)
            },
            children: t
          })
        },
        ft = e => {
          let {
            data: t,
            onPageUpdate: a,
            className: s
          } = e;
          if (1 === t.pageCount) return null;
          const r = Array.from(new Array(Math.min(t.pageCount, 8)), ((e, a) => a + Math.min(Math.max(t.pageCount - 8, 1), Math.max(2, t.page - 4))));
          return (0, c.jsxs)("div", {
            className: `rockstargames-modules-core-newswire-articlea626faab2a5a03e3466dda5c79960575 ${s??""}`,
            children: [t.pageCount > 8 ? (0, c.jsxs)(c.Fragment, {
              children: [(0, c.jsx)(gt, {
                data: t,
                onPageUpdate: a,
                page: 1,
                children: "1"
              }), 2 !== r[0] ? (0, c.jsx)("div", {
                className: ut,
                children: "..."
              }) : ""]
            }) : "", r.map((e => (0, c.jsx)(gt, {
              data: t,
              onPageUpdate: a,
              page: e,
              className: s,
              children: e
            }, e))), t.pageCount > 8 ? (0, c.jsxs)(c.Fragment, {
              children: [r.slice(-1)[0] + 1 < t.pageCount ? (0, c.jsx)("div", {
                className: ut,
                children: "..."
              }) : "", (0, c.jsx)(gt, {
                data: t,
                onPageUpdate: a,
                page: t.pageCount,
                children: t.pageCount
              })]
            }) : ""]
          })
        };
      var pt = a(31805);
      const ht = e => {
          let {
            children: t
          } = e;
          const {
            parallaxController: a
          } = (0, pt.as)();
          return (0, p.useLayoutEffect)((() => {
            if (!a) return;
            const e = setInterval((() => {
              a.update()
            }), 500);
            return () => clearInterval(e)
          }), [a]), t
        },
        bt = {
          parallaxWrapper: "rockstargames-modules-core-newswire-articledb1ab316d17367d31cf94cdde25e463a",
          large: "rockstargames-modules-core-newswire-articled520d28c6e4e797aea99f61c89ad2bd8",
          medium: "rockstargames-modules-core-newswire-articlef008365ee42d37e24e606107346b1c83",
          small: "rockstargames-modules-core-newswire-articlecb5937d1a102ac4a66c4e373e6253946"
        },
        kt = e => {
          let {
            scrollAxis: t = "vertical",
            size: a = "",
            style: s = {},
            children: r
          } = e;
          return (0, c.jsx)(pt.zE, {
            scrollAxis: t,
            children: (0, c.jsx)(ht, {
              children: (0, c.jsx)("div", {
                className: (0, m.classList)(bt.parallaxWrapper, bt[a]),
                style: s,
                "data-context": "parallax-wrapper",
                children: r ? r.map(((e, a) => (0, p.cloneElement)(e, {
                  scrollAxis: t,
                  style: {
                    ...e?.props?.style,
                    zIndex: a
                  }
                }))) : (0, c.jsx)("div", {})
              })
            })
          })
        },
        vt = e => {
          let {
            layers: t = [],
            displayClass: a = "",
            style: s = {}
          } = e;
          const r = (0, m.useGenerateCdnSource)();
          if (!t || !t[0]?.image) return null;
          const i = t.map((e => ({
            ...e,
            props: {
              style: {
                ...e.style
              }
            },
            style: void 0,
            image: r(e?.image ?? null)
          })));
          return (0, c.jsx)(pt.y, {
            className: (0, m.classList)("rockstargames-modules-core-newswire-articleb8c85703a3c76902e49a61a6afcb81bc", a),
            layers: i,
            style: s
          })
        },
        wt = "rockstargames-modules-core-newswire-articlec4aa8e5d29b433c400796d0c493a9a4d",
        _t = e => {
          let {
            minOffset: t = 0,
            maxOffset: a = 0,
            scrollAxis: s = "vertical",
            displayClass: r = "",
            style: i = {},
            children: n
          } = e;
          return "horizontal" === s ? (0, c.jsx)(pt.kQ, {
            x: [t, a],
            className: (0, m.classList)(wt, r),
            styleOuter: i,
            children: n
          }) : (0, c.jsx)(pt.kQ, {
            y: [t, a],
            className: (0, m.classList)(wt, r),
            styleOuter: i,
            children: n
          })
        };
      var xt = a(67446),
        yt = a(90250);
      const jt = (0, R.makeVarNamespace)("@rockstargames/components/profile-switcher"),
        Nt = jt("languageSelectorOpenedReactive", !1),
        St = e => Nt(e),
        Tt = jt("activeSubNavIdReactive", -1),
        Ct = e => Tt(e),
        At = jt("subNavExtraHeightReactive", -1),
        It = e => At(e),
        Mt = jt("scNavOpenedReactive", !0),
        Lt = e => Mt(e),
        Et = jt("charListHiddenReactive", !0),
        Pt = e => Et(e),
        Ot = () => {
          const e = (0, R.useReactiveVar)(Nt),
            t = (0, R.useReactiveVar)(Tt),
            a = (0, R.useReactiveVar)(At),
            s = (0, R.useReactiveVar)(Mt),
            r = (0, R.useReactiveVar)(Et);
          return (0, p.useEffect)((() => {
            r || (e && St(!1), s && (Lt(!1), Ct(-1)))
          }), [r]), (0, p.useEffect)((() => {
            !e && r && (s || Lt(!0))
          }), [e, r]), (0, p.useMemo)((() => ({
            languageSelectorOpened: e,
            setLanguageSelectorOpened: St,
            activeSubNavId: t,
            setActiveSubNavId: Ct,
            subNavExtraHeight: a,
            setSubNavExtraHeight: It,
            scNavOpened: s,
            setScNavOpened: Lt,
            charListHidden: r,
            setCharListHidden: Pt
          })), [e, t, a, s, r])
        };
      var zt = a(39493),
        Dt = a(14963),
        Bt = a.n(Dt);
      const Vt = {
          event: "account_menu_click",
          element_placement: "Account Menu"
        },
        $t = e => ({
          text: e.formatMessage(zt.A.sc_link_help),
          target: "_self",
          ga: {
            ...Vt,
            text: zt.A.sc_link_help.defaultMessage
          },
          dataTestId: "helpButton",
          children: [{
            text: e.formatMessage(zt.A.sc_link_support),
            location: {
              domain: le.C.support,
              path: "/"
            },
            target: "_self",
            ga: {
              ...Vt,
              text: zt.A.sc_link_support.defaultMessage
            },
            dataTestId: "supportLink"
          }, {
            text: e.formatMessage(zt.A.sc_link_legal),
            location: {
              domain: le.C.www,
              path: "/legal"
            },
            target: "_self",
            ga: {
              ...Vt,
              text: zt.A.sc_link_legal.defaultMessage
            },
            dataTestId: "legalLink"
          }, {
            text: e.formatMessage(zt.A.sc_link_privacy_policy),
            location: {
              domain: le.C.www,
              path: "/privacy"
            },
            target: "_self",
            ga: {
              ...Vt,
              text: zt.A.sc_link_privacy_policy.defaultMessage
            },
            dataTestId: "privacyPolicyLink"
          }, {
            text: e.formatMessage(zt.A.sc_link_cookies_policy),
            location: {
              domain: le.C.www,
              path: "/cookies"
            },
            target: "_self",
            ga: {
              ...Vt,
              text: zt.A.sc_link_cookies_policy.defaultMessage
            },
            dataTestId: "cookiesPolicyLink"
          }, {
            text: e.formatMessage(zt.A.sc_link_cookies_settings),
            onClickCallback: e => {
              e.preventDefault(), window.OneTrust?.ToggleInfoDisplay()
            },
            target: "_self",
            ga: {
              ...Vt,
              text: zt.A.sc_link_cookies_settings.defaultMessage
            },
            dataTestId: "cookiesSettingsLink"
          }, {
            text: e.formatMessage(zt.A.sc_link_do_not_sell_my_information),
            location: {
              domain: le.C.www,
              path: "/ccpa"
            },
            target: "_self",
            ga: {
              ...Vt,
              text: zt.A.sc_link_do_not_sell_my_information.defaultMessage
            },
            dataTestId: "doNotSellMyInformationLink"
          }]
        }),
        Ft = e => {
          let {
            to: t,
            target: a,
            className: s,
            onNavigate: r,
            onClick: i,
            reloadDocument: n,
            children: o,
            ...l
          } = e;
          const d = t?.startsWith("http");
          return (0, c.jsx)("a", {
            href: t,
            className: s,
            onClick: e => {
              i?.(e), d || n || (r ? (e.preventDefault(), r(t)) : (e.preventDefault(), window.history.pushState({}, "", t)))
            },
            target: a,
            ...l,
            children: o
          })
        },
        Rt = e => {
          let {
            text: t,
            target: a,
            href: s,
            location: r,
            ga: i,
            dataTestId: n,
            isSubLink: o,
            hasNotifications: l = !1,
            onClickCallback: d = (() => {}),
            tabIndex: m,
            reloadDocument: u = !1,
            onNavigate: g
          } = e;
          const {
            track: f
          } = (0, k.useGtmTrack)(), p = (0, le.A)(), h = (0, ce.useIntl)();
          let b = s;
          r && (b = r.domain === p.currentSite?.site ? r.path : `https://${p.sites[r.domain]}.rockstargames.com${r.path}`);
          const v = {
            ...i,
            link_url: b
          };
          return (0, c.jsxs)(Ft, {
            className: o ? "rockstargames-modules-core-newswire-articlefdaa918acc06706cbe191dedd40974af" : "rockstargames-modules-core-newswire-articlecbc80932118c48d8ec14448d8913d068",
            "data-testid": n || "menuLink",
            title: t,
            to: b,
            target: a,
            rel: "noreferrer",
            reloadDocument: u,
            tabIndex: m,
            onClick: e => {
              f(v), d(e)
            },
            onNavigate: g,
            children: [t, l && (0, c.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articlea2d268c9fb03a7271b47de447d663da9",
              children: (0, c.jsx)("span", {
                className: "rockstargames-modules-core-newswire-articlecf5a6b05c52c6c4faf3236055d4670c3",
                children: h.formatMessage(zt.A.nofications_new)
              })
            })]
          })
        },
        Gt = e => {
          let {
            id: t,
            text: a,
            target: s,
            href: r,
            location: i,
            ga: n,
            hasNotifications: o = !1,
            dataTestId: l,
            children: d = [],
            activeSubNavId: m,
            setActiveSubNavId: u,
            setSubNavExtraHeight: g,
            reloadDocument: f = !1,
            onClickCallback: h = (() => {}),
            onNavigate: v
          } = e;
          const {
            windowWidth: w,
            windowHeight: _
          } = (0, b.useWindowResize)(), {
            track: x
          } = (0, k.useGtmTrack)(), {
            navOpen: y
          } = (0, k.useRockstarUserState)(), j = (0, p.useRef)(null), [N, S] = (0, p.useState)(0), [T, C] = (0, p.useState)(0), [A, I] = (0, p.useState)(!0);
          return (0, p.useEffect)((() => {
            m !== t && !1 === A && I(!0), m === t && I(!1)
          }), [m]), (0, p.useEffect)((() => {
            if (!j.current) return;
            S(j?.current?.scrollHeight);
            const e = window.getComputedStyle(j.current);
            if (e) {
              let t = 16 * parseInt(e.getPropertyValue("--scSubNav-opened-margin"), 10);
              Number.isNaN(t) && (t = 0), C(t)
            }
          }), [j, w, _]), d.length > 0 ? (0, c.jsxs)(c.Fragment, {
            children: [(0, c.jsxs)("button", {
              className: "rockstargames-modules-core-newswire-articleaf10b4154b04475edc11366934576ecd",
              type: "button",
              "data-testid": l || "menuButton",
              title: a,
              tabIndex: y ? 0 : -1,
              "data-children-hidden": A,
              onClick: e => {
                e.stopPropagation(), x(n), m === t ? (u(-1), g(0)) : (u(t), g(N + T + T))
              },
              children: [(0, c.jsx)("span", {
                className: "rockstargames-modules-core-newswire-articlefd722aa4f6d05656ee6e37f952bd13d0",
                children: a
              }), (0, c.jsx)("span", {
                className: "rockstargames-modules-core-newswire-articlebe674f27adc299eab348b49f71429b71"
              })]
            }, a), (0, c.jsx)("nav", {
              className: "rockstargames-modules-core-newswire-articleff1911053a3515534dd825554a85909e",
              ref: j,
              "aria-hidden": A,
              style: {
                height: A ? 0 : `${N}px`
              },
              children: d.map((e => (0, p.createElement)(Rt, {
                ...e,
                isSubLink: !0,
                key: e.text,
                tabIndex: A || !y ? -1 : 0,
                onNavigate: v
              })))
            })]
          }) : (0, c.jsx)(Rt, {
            text: a,
            target: s,
            href: r,
            location: i,
            ga: n,
            hasNotifications: o,
            dataTestId: l,
            isSubLink: !1,
            onClickCallback: h,
            tabIndex: y ? 0 : -1,
            reloadDocument: f,
            onNavigate: v
          })
        },
        Ht = e => {
          let {
            sc: t,
            location: a,
            onNavigate: s
          } = e;
          const {
            windowWidth: r,
            windowHeight: i
          } = (0, b.useWindowResize)(), n = (0, ce.useIntl)(), {
            languageSelectorOpened: o,
            setLanguageSelectorOpened: l,
            activeSubNavId: d,
            setActiveSubNavId: m,
            subNavExtraHeight: u,
            setSubNavExtraHeight: g
          } = Ot(), {
            setSelectedCharacterTuple: f,
            navOpen: h
          } = (0, k.useRockstarUserState)(), v = (0, b.useLocale)(), w = (0, b.toScLocaleString)(v), [_, x] = (0, p.useState)(""), y = `${t.login}?returnUrl=${_}&lang=${w}`, j = `${t.signup}&returnUrl=${_}&lang=${w}`, N = (0, p.useMemo)((() => (0, le.A)()), []), S = (0, p.useMemo)((() => {
            const e = ((e, t, a) => [{
              text: e.formatMessage(zt.A.sc_link_sign_in),
              href: t,
              ga: {
                event: "cta_login",
                text: zt.A.sc_link_sign_in.defaultMessage,
                element_placement: "Account Menu"
              },
              dataTestId: "loginLink"
            }, {
              text: e.formatMessage(zt.A.sc_link_join_social_club),
              href: a,
              ga: {
                event: "cta_signup",
                text: zt.A.sc_link_join_social_club.defaultMessage,
                element_placement: "Account Menu"
              },
              dataTestId: "signUpLink"
            }, $t(e)])(n, y, j);
            return e
          }), [n, y, j, N]), [T, C] = (0, p.useState)(0), A = (0, p.createRef)(), I = () => {
            if (A.current) {
              const {
                current: e
              } = A, t = e?.scrollHeight, a = window.getComputedStyle(e);
              if (a) {
                let e = 16 * parseInt(a.getPropertyValue("--scSubNav-opened-margin"), 10) * 2;
                Number.isNaN(e) && (e = 0), C(t + e)
              } else C(t)
            }
          };
          return (0, p.useEffect)((() => {
            const e = encodeURIComponent(`${a.pathname}${a.search}`);
            x(e)
          }), [JSON.stringify(a)]), (0, p.useEffect)((() => {
            f(!1)
          }), []), (0, p.useEffect)((() => {
            I(), Bt()((() => {
              setTimeout(I, 0)
            }), 300)
          }), [r, i]), (0, c.jsxs)(c.Fragment, {
            children: [(0, c.jsx)("nav", {
              className: "rockstargames-modules-core-newswire-articleb1552e1f97b08ee4337f78fa4486ffac",
              children: (0, c.jsx)("div", {
                className: "rockstargames-modules-core-newswire-articlec5bc9bec611f9f0514176014ce835e1e",
                "data-logged-in": "false",
                ref: A,
                style: {
                  "--scNavWrap-max-height": `${u+T}px`
                },
                children: S.map((e => (0, p.createElement)(Gt, {
                  ...e,
                  activeSubNavId: d,
                  setActiveSubNavId: m,
                  setSubNavExtraHeight: g,
                  onNavigate: s,
                  key: e.text
                })))
              })
            }), (0, c.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articlea6c12c94e8656e88958552d645fe51fe",
              style: {
                visibility: h ? null : "hidden"
              },
              children: (0, c.jsx)(ge, {
                parent: "header",
                theme: "sc-menu",
                languageSelectorOpened: o,
                setLanguageSelectorOpened: e => {
                  m(-1), l(e)
                },
                defaultMessage: "Select a Language",
                location: a
              })
            })]
          })
        };
      var Ut = a(98310),
        Wt = a(73167);
      const qt = {
          pc: "PC",
          ps4: "PS4",
          ps5: "PS5",
          xboxone: "Xbox One",
          xboxsx: "Xbox Series X|S"
        },
        Xt = "CharacterButton:characterName",
        Yt = "CharacterButton:platform",
        Qt = "CharacterButton:avatar",
        Kt = "CharacterButton:rankValue",
        Zt = e => {
          let {
            characterData: t,
            setMobileCardWidth: s,
            tabIndex: r
          } = e;
          const i = (0, ce.useIntl)(),
            {
              currentCharId: n,
              setCurrentCharId: o
            } = (0, k.useRockstarUserState)(),
            {
              track: l
            } = (0, k.useGtmTrack)(),
            d = (0, p.createRef)(),
            {
              platform: m,
              platformUsername: u,
              mugshotUrl: g,
              stats: f
            } = t,
            [h, b] = (0, p.useState)(g),
            [v] = (0, p.useState)(t.index),
            w = (0, Wt.A)(m, "large"),
            _ = n === t.index;
          return (0, p.useEffect)((() => {
            d.current && s && s(d?.current?.offsetWidth)
          }), [d]), (0, c.jsxs)("button", {
            className: "rockstargames-modules-core-newswire-articled76e785563451a50438064ac368aae4b",
            type: "button",
            "aria-hidden": _,
            onClick: e => {
              e.stopPropagation(), o(v), l({
                event: "character_selector_select",
                text: qt[m] ?? "",
                position: v
              })
            },
            ref: d,
            tabIndex: r,
            children: [(0, c.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articlebbdf69fe97471593355fc51ec9a6d13a",
              "data-size": "small",
              children: (0, c.jsx)("img", {
                src: h,
                alt: i.formatMessage(zt.A.profile_selector_mugshot, {
                  userName: u
                }),
                onError: () => {
                  b(a(58989))
                },
                "data-testid": Qt
              })
            }), (0, c.jsxs)("div", {
              className: "rockstargames-modules-core-newswire-articlec0dc303ef48255c09faa4ad2f4e953e7",
              children: [(0, c.jsxs)("div", {
                className: "rockstargames-modules-core-newswire-articlee9fbbbcea66d86dbd58b8548a5f6bea8",
                children: [(0, c.jsx)("img", {
                  src: w.src,
                  alt: w.alt,
                  "data-testid": Yt
                }), (0, c.jsx)("div", {
                  className: "rockstargames-modules-core-newswire-articleb3726d8b480695f64fddc723c6f35205",
                  "data-size": "small",
                  "data-testid": Xt,
                  children: u
                })]
              }), (0, c.jsx)("div", {
                className: "rockstargames-modules-core-newswire-articlea5e3df42966a50f3dd88bbcb57536617",
                children: (0, c.jsxs)("div", {
                  className: "rockstargames-modules-core-newswire-articlea6776312350028898320ba59145a39be",
                  children: [(0, c.jsx)("img", {
                    className: "rockstargames-modules-core-newswire-articleb266652910ad34c0e8e097b212a958f0",
                    src: (0, Ut.A)(parseInt(f.overview.rank.value)),
                    alt: i.formatMessage(zt.A.profile_selector_rp_icon)
                  }), (0, c.jsx)("span", {
                    "data-testid": Kt,
                    children: t.stats.overview.rank.value
                  })]
                })
              })]
            })]
          })
        },
        Jt = {
          pillBtn: "rockstargames-modules-core-newswire-articled9464c4b4d92881abe5578988bd68af7",
          selected: "rockstargames-modules-core-newswire-articlebc0a950bffee0ee9e28213912da51427",
          scProfileDetails: "rockstargames-modules-core-newswire-articleb954455f6ff25f2350e1a0960ba97d3e",
          scAvatar: "rockstargames-modules-core-newswire-articlec15a60de0fc8df4960d84ab96caa8a62",
          scAvatarPlatform: "rockstargames-modules-core-newswire-articlea8f66dccf33827dc81107cae3196cfbe",
          scProfileStats: "rockstargames-modules-core-newswire-articlec91f8623fa10edbeba8c79c7d6b26a28",
          scNames: "rockstargames-modules-core-newswire-articleda83fc27513bcac6a8a31eadc89b1c2c",
          scTagsNames: "rockstargames-modules-core-newswire-articled7ce73d22672e2e2f59e9193c2632531",
          scUserName: "rockstargames-modules-core-newswire-articled5814836ce152affaa22d226819b5b12",
          scCrewName: "rockstargames-modules-core-newswire-articleb7777817be6d756cc2d1585c1377734c",
          scCrewRankBar: "rockstargames-modules-core-newswire-articlea581d240520cf347e5ff5f6a62a36a97",
          scCrewRankBarItem: "rockstargames-modules-core-newswire-articlebdb056c03ef06b99d69426c87cec67c5",
          scProgress: "rockstargames-modules-core-newswire-articledc3020fbe81a916a8da4719ef052c278",
          scRpLevel: "rockstargames-modules-core-newswire-articleb2ea0e0d19182355913368bf7be016b8",
          scRpIcon: "rockstargames-modules-core-newswire-articlef17a712b43b5234c07dc44f674433cf6",
          scMoney: "rockstargames-modules-core-newswire-articlef14849be516f588e1bc9e252a109c76f",
          scCash: "rockstargames-modules-core-newswire-articleb3e35cdc6557f7c3886700245af352dd",
          scBank: "rockstargames-modules-core-newswire-articleec696aafed90a7a4c69dc53da0a5bb36"
        },
        ea = "ProfileCard:characterName",
        ta = "ProfileCard:avatar",
        aa = "ProfileCard:bankValue",
        sa = "ProfileCard:cashValue",
        ra = "ProfileCard:rankValue",
        ia = e => {
          let {
            character: t,
            platformTag: s
          } = e;
          const {
            data: r
          } = (0, k.useRockstarUser)(), {
            track: i
          } = (0, k.useGtmTrack)(), n = (0, ce.useIntl)(), [o, l] = (0, p.useState)([]), [d, m] = (0, p.useState)(null), [u, g] = (0, p.useState)(null), [f, h] = (0, p.useState)(!1), [b, v] = (0, p.useState)(-1), [w, _] = (0, p.useState)([]), [x, y] = (0, p.useState)(0), j = a(58989), [N, S] = (0, p.useState)("0"), [T, C] = (0, p.useState)("0"), A = e => parseInt(e, 10).toLocaleString("en-US", {
            minimumFractionDigits: 0
          }), I = () => {
            L((0, c.jsx)("img", {
              src: j,
              alt: n.formatMessage(zt.A.profile_selector_mugshot, {
                userName: r.nickname
              })
            }))
          }, [M, L] = (0, p.useState)((0, c.jsx)("img", {
            className: Jt.scAvatarImg,
            src: t.mugshotUrl,
            alt: n.formatMessage(zt.A.profile_selector_mugshot, {
              userName: r.nickname
            }),
            onError: I,
            "data-testid": ta
          }));
          (0, p.useEffect)((() => {
            l(r.crews ?? [])
          }), [r.crews]), (0, p.useEffect)((() => {
            L((0, c.jsx)("img", {
              src: t.mugshotUrl,
              alt: r.nickname,
              onError: I,
              "data-testid": ta
            })), S(A(t.stats.overview.bank.value)), C(A(t.stats.overview.cash.value)), y(parseInt(t.stats.overview.rank.value))
          }), [t, r.nickname]), (0, p.useEffect)((() => {
            o && o.forEach((e => {
              !0 === e.isPrimary && (m(e.crewTag), g(e.crewColour), v(e.rankOrder), h(!1), !0 === Object.prototype.hasOwnProperty.call(e, "crewType") && "rockstar" === e.crewType && h(!0))
            }))
          }), [o]), (0, p.useEffect)((() => {
            const e = [];
            if (!f && b > -1)
              for (let t = 5; t > b; t -= 1) e.push((0, c.jsx)("div", {
                className: Jt.scCrewRankBarItem,
                style: {
                  backgroundColor: null !== u ? u : ""
                }
              }, `crewrankbar-${t}`));
            _(e)
          }), [b, f, u]);
          const E = e => {
            e.stopPropagation(), i({
              event: "character_selector_profile_click",
              element_placement: "character selector"
            })
          };
          return (0, c.jsxs)("div", {
            className: Jt.scProfileDetails,
            onClick: E,
            onKeyUp: E,
            role: "button",
            tabIndex: -1,
            children: [(0, c.jsxs)("div", {
              className: Jt.scAvatar,
              children: [M, (0, c.jsx)("div", {
                className: Jt.scAvatarPlatform,
                "data-platform": t.platform,
                children: (0, c.jsx)("img", {
                  src: s.src,
                  alt: s.alt
                })
              })]
            }), (0, c.jsxs)("div", {
              className: Jt.scProfileStats,
              children: [(0, c.jsx)("div", {
                className: Jt.scNames,
                children: (0, c.jsxs)("div", {
                  className: Jt.scTagsNames,
                  children: [(0, c.jsx)("span", {
                    className: Jt.scUserName,
                    "data-testid": ea,
                    children: t.platformUsername
                  }), d && (0, c.jsxs)("span", {
                    className: Jt.scCrewName,
                    "data-arrow-tag": f,
                    children: [d, !f && (0, c.jsx)("div", {
                      className: Jt.scCrewRankBar,
                      children: w
                    })]
                  })]
                })
              }), (0, c.jsxs)("div", {
                className: Jt.scProgress,
                children: [(0, c.jsxs)("div", {
                  className: Jt.scRpLevel,
                  children: [(0, c.jsx)("img", {
                    className: Jt.scRpIcon,
                    src: (0, Ut.A)(x),
                    alt: n.formatMessage(zt.A.profile_selector_rp_icon)
                  }), (0, c.jsx)("span", {
                    "data-testid": ra,
                    children: t.stats.overview.rank.value
                  })]
                }), (0, c.jsxs)("div", {
                  className: Jt.scMoney,
                  children: [(0, c.jsxs)("span", {
                    className: Jt.scCash,
                    "data-testid": sa,
                    children: ["$", T]
                  }), (0, c.jsxs)("span", {
                    className: Jt.scBank,
                    "data-testid": aa,
                    children: ["$", N]
                  })]
                })]
              })]
            })]
          })
        },
        na = (e, t) => {
          const [a, s] = (0, p.useState)(0);
          return (0, p.useEffect)((() => {
            if (e.current) {
              const {
                current: a
              } = e, r = a.getBoundingClientRect(), {
                width: i
              } = r;
              let n = i;
              if (!0 === t) {
                const e = window.getComputedStyle(a);
                n += parseInt(e.marginLeft, 10) + parseInt(e.marginRight, 10)
              }
              s(n)
            }
          }), [e]), a
        },
        oa = e => {
          let {
            dragThreshold: t = 80,
            interactionDelay: a = 1e3,
            mobileGutterWidth: s = 17,
            slideChangeCallback: r = null,
            slideClickCallback: i = null,
            children: n = [],
            disablePager: o = !1,
            disableSwiper: l = !1
          } = e;
          const d = (0, p.createRef)(),
            m = na(d, !1),
            [u, g] = (0, p.useState)(!1),
            [f, h] = (0, p.useState)(0),
            [b, k] = (0, p.useState)(0),
            [v, w] = (0, p.useState)([s]),
            [_, x] = (0, p.useState)(v[0]),
            [y, j] = (0, p.useState)(252),
            [N, S] = (0, p.useState)(0),
            [T, C] = (0, p.useState)([]),
            [A, I] = (0, p.useState)([]),
            [M, L] = (0, p.useState)(!1),
            E = e => {
              if (!0 === u || !0 === l) return;
              const t = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
              k(t)
            },
            P = e => {
              if (!0 === u || 0 === b || !0 === l) return;
              const a = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX,
                s = a > b ? 1 : -1,
                i = Math.abs(b - a);
              i > t ? (s > 0 ? (() => {
                if (!0 === u) return;
                g(!0);
                const e = f - 1 < 0 ? 0 : f - 1;
                h(e), x(v[e]), r && r(e)
              })() : (() => {
                if (!0 === u) return;
                g(!0);
                let e = f + 1 >= v.length ? v.length - 1 : f + 1;
                e < 0 && (e = 0), h(e), x(v[e]), r && r(e)
              })(), k(0)) : x(v[f] + i * s)
            },
            O = () => {
              !0 !== u && !0 !== l && (g(!0), !0 !== u && (x(v[f]), k(0)))
            };
          return (0, p.useEffect)((() => {
            const e = [];
            n.forEach((() => {
              e.push((0, p.createRef)())
            })), C(e)
          }), [n]), (0, p.useEffect)((() => {
            if (T.length < 1) return;
            j(T[0]?.current?.clientWidth || 0);
            const e = T[0]?.current.firstChild,
              t = Number(window.getComputedStyle(e).marginRight.replace("px", "")),
              a = Number(window.getComputedStyle(e).marginLeft.replace("px", ""));
            S(a + t)
          }), [T]), (0, p.useEffect)((() => {
            !1 !== u && setTimeout((() => {
              g(!1)
            }), a)
          }), [u, a]), (0, p.useEffect)((() => {
            w(n.map(((e, t) => (e => {
              let t = 0;
              const a = n.length;
              return 1 === a ? .5 * m - .5 * y - 2 * s + N : (0 === e && (t = s - e * y), e === a - 1 && a > 1 && (t = a * y * -1 + (m - (s - N))), e > 0 && e < a - 1 && (t = e * y * -1 + (.5 * m - .5 * y + .5 * N)), t)
            })(t)))), 1 === n.length ? L(!0) : L(!1)
          }), [d.current, n, m]), (0, p.useEffect)((() => {
            const e = (t = f, n.map(((e, a) => {
              const s = {
                active: !1
              };
              return a === t && (s.active = !0), s
            })));
            var t;
            I(e)
          }), [n, f]), (0, p.useEffect)((() => {
            !0 !== o && !0 !== l || x(v[0])
          }), [l, o, v]), (0, c.jsxs)(c.Fragment, {
            children: [(0, c.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articleab70c3f9c67ecd69d19216a5f4de5049",
              ref: d,
              onTouchStart: E,
              onTouchMove: P,
              onTouchEnd: O,
              onMouseDown: E,
              onMouseMove: P,
              onMouseUp: O,
              onClick: () => {
                null !== i && i(f)
              },
              onKeyPress: () => null,
              tabIndex: -1,
              role: "presentation",
              children: (0, c.jsx)("div", {
                className: "rockstargames-modules-core-newswire-articlea93be1084a583cafa7f3f97a8ce8a6be",
                "data-interaction-blocked": u,
                "data-single-item": M,
                style: {
                  transform: M ? null : `translateX(${_}px)`
                },
                children: n.map(((e, t) => (0, c.jsx)("div", {
                  className: "rockstargames-modules-core-newswire-articlec013369a930e076d1729d086fb51903e",
                  ref: T[t],
                  children: e
                }, `csItem-${e?.props?.characterData?.mugshotUrl}`)))
              })
            }), A.length > 1 && !1 === o && (0, c.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articleda8cfef07bf44e9a44839e2723ec61bb",
              children: A.map((e => (0, c.jsx)("div", {
                className: "rockstargames-modules-core-newswire-articlefe87ea0922034610a1f6cb3a4edbe195",
                "data-active": e.active
              }, e.mugshotUrl)))
            })]
          })
        },
        ca = {
          pillBtn: "rockstargames-modules-core-newswire-articleaa374e2f7806799cb073de8a9b2a2e7d",
          selected: "rockstargames-modules-core-newswire-articled402a10393179390abdaf3684a02f1ba",
          scProfile: "rockstargames-modules-core-newswire-articledde9053261079ebfb5d95975239fe87d",
          scCharacterSelector: "rockstargames-modules-core-newswire-articlec47913b4c686bbbc9a0c8ee6ed7666bf",
          scCharacterSelectBtn: "rockstargames-modules-core-newswire-articlea4f9dafe071f5c9a825bf57348835309",
          open: "rockstargames-modules-core-newswire-articleb1f5708c9a0e35681c54a58f04661c1c",
          scCharacterList: "rockstargames-modules-core-newswire-articlea1d1104b9df769c9237fa1a06633ffe7",
          scNav: "rockstargames-modules-core-newswire-articlea326b0feea8d083ed2265571010d79d3",
          scLanguageSelector: "rockstargames-modules-core-newswire-articled19713d1362bcd54ff539975adbb2ecc",
          scNavHeader: "rockstargames-modules-core-newswire-articlebb74821846f47bbe5fc0896364efd520",
          scNavWrap: "rockstargames-modules-core-newswire-articlea7f1e2d78519eaf099bd43c6ad07abc9"
        },
        la = (0, b.withTranslations)((e => {
          let {
            sc: t,
            charListHidden: a,
            hideCharacterList: s,
            refCharacterListDesktop: r,
            menuPadding: i,
            longCharList: n,
            setLongCharList: o,
            isMobileMode: l,
            setIsMobileMode: d,
            location: m,
            onNavigate: u
          } = e;
          const {
            windowWidth: g,
            windowHeight: f
          } = (0, b.useWindowResize)(), h = (0, ce.useIntl)(), {
            languageSelectorOpened: v,
            setLanguageSelectorOpened: w,
            activeSubNavId: _,
            setActiveSubNavId: x,
            subNavExtraHeight: y,
            setSubNavExtraHeight: j,
            scNavOpened: N,
            setScNavOpened: S
          } = Ot(), [T, C] = (0, p.useState)(""), {
            lsSettings: A
          } = (0, b.useRockstarWebLSSettings)(), {
            track: I
          } = (0, k.useGtmTrack)(), M = (0, R.useRockstarTokenPing)(), {
            data: L,
            loggedIn: E
          } = (0, k.useRockstarUser)(), {
            charactersNeeded: P,
            currentCharId: O,
            hasNotifications: z,
            navOpen: D,
            setCurrentCharId: B,
            setHasNotifications: V,
            setSelectedCharacterTuple: $,
            setUserData: F
          } = (0, k.useRockstarUserState)(), [G, H] = (0, p.useState)(null), [U, W] = (0, p.useState)(null), [q, X] = (0, p.useState)(!1), [Y, Q] = (0, p.useState)(!1), [K, Z] = (0, p.useState)(0), J = (0, p.createRef)(), ee = na(J, !1), te = (0, p.createRef)(), [ae, se] = (0, p.useState)(0), [re, ie] = (0, p.useState)([]), [ne, oe] = (0, p.useState)(244), de = (0, p.useRef)(null), me = (0, p.useMemo)((() => (0, le.A)()), []), ue = (0, p.useMemo)((() => ((e, t, a, s, r) => [{
            text: e.formatMessage(zt.A.sc_link_activity_feed),
            location: {
              domain: le.C.socialClub,
              path: "/"
            },
            target: "_self",
            ga: {
              ...Vt,
              text: zt.A.sc_link_activity_feed.defaultMessage
            },
            dataTestId: "activityFeedLink"
          }, {
            text: e.formatMessage(zt.A.sc_link_account),
            target: "_self",
            dataTestId: "accountButton",
            children: [{
              text: e.formatMessage(zt.A.sc_link_settings),
              location: {
                domain: le.C.socialClub,
                path: "/settings"
              },
              target: "_self",
              ga: {
                ...Vt,
                text: zt.A.sc_link_settings.defaultMessage
              },
              dataTestId: "settingsLink"
            }, {
              text: e.formatMessage(zt.A.sc_link_view_my_profile),
              href: a.profile_link,
              target: "_self",
              ga: {
                ...Vt,
                text: zt.A.sc_link_view_my_profile.defaultMessage
              },
              dataTestId: "viewMyProfileLink"
            }, {
              text: e.formatMessage(zt.A.sc_link_messages),
              location: {
                domain: le.C.socialClub,
                path: "/message"
              },
              target: "_self",
              ga: {
                ...Vt,
                text: zt.A.sc_link_messages.defaultMessage
              },
              dataTestId: "messagesLink"
            }, {
              text: e.formatMessage(zt.A.sc_link_game_activation),
              location: {
                domain: le.C.socialClub,
                path: "/activate"
              },
              target: "_self",
              ga: {
                ...Vt,
                text: zt.A.sc_link_game_activation.defaultMessage
              },
              dataTestId: "gameActivationLink"
            }]
          }, {
            text: e.formatMessage(zt.A.sc_link_notifications),
            location: {
              domain: le.C.socialClub,
              path: "/notifications"
            },
            target: "_self",
            hasNotifications: s,
            ga: {
              ...Vt,
              text: zt.A.sc_link_notifications.defaultMessage,
              location: {
                domain: le.C.socialClub,
                path: "/notifications"
              }
            },
            dataTestId: "notificationsLink"
          }, {
            text: e.formatMessage(zt.A.sc_link_crews),
            location: {
              domain: le.C.socialClub,
              path: `/member/${a.nickname}/crews`
            },
            target: "_self",
            ga: {
              ...Vt,
              text: zt.A.sc_link_crews.defaultMessage
            },
            dataTestId: "crewsLink"
          }, {
            text: e.formatMessage(zt.A.sc_link_friends),
            target: "_self",
            dataTestId: "friendsButton",
            children: [{
              text: e.formatMessage(zt.A.sc_link_my_friends),
              location: {
                domain: le.C.socialClub,
                path: `/member/${a.nickname}/friends`
              },
              target: "_self",
              ga: {
                ...Vt,
                text: zt.A.sc_link_my_friends.defaultMessage
              },
              dataTestId: "myFriendsLink"
            }, {
              text: e.formatMessage(zt.A.sc_link_import_friends),
              location: {
                domain: le.C.socialClub,
                path: "/friends/import"
              },
              target: "_self",
              ga: {
                ...Vt,
                text: zt.A.sc_link_import_friends.defaultMessage
              },
              dataTestId: "importFriendsLink"
            }, {
              text: e.formatMessage(zt.A.sc_link_find_friends),
              location: {
                domain: le.C.socialClub,
                path: "/members"
              },
              target: "_self",
              ga: {
                ...Vt,
                text: zt.A.sc_link_import_friends.defaultMessage
              },
              dataTestId: "findFriendsLink"
            }]
          }, $t(e), {
            text: e.formatMessage(zt.A.sc_link_log_out),
            href: `${t.logout}?returnUrl=${r}`,
            target: "_self",
            reloadDocument: !0,
            ga: {
              ...Vt,
              text: zt.A.sc_link_log_out.defaultMessage
            },
            dataTestId: "logoutButton"
          }])(h, t, L, z, T, window)), [h, t, L, z, T, me]), fe = () => {
            Q(i + ne * K < ee)
          }, pe = () => {
            if (te.current) {
              const {
                current: e
              } = te, t = e?.scrollHeight, a = window.getComputedStyle(e);
              if (a) {
                let e = 16 * parseInt(a.getPropertyValue("--scSubNav-opened-margin"), 10) * 2;
                Number.isNaN(e) && (e = 0), se(t + e)
              } else se(t)
            }
          };
          return (0, p.useEffect)((() => {
            let e = encodeURIComponent(`${document.location.pathname}${document.location.search}`);
            me.currentSite?.site === le.C.socialClub && (e = encodeURIComponent("/")), C(e)
          }), [m]), (0, p.useEffect)((() => {
            ie(L.characters[P] ?? [])
          }), [L, P]), (0, p.useEffect)((() => {
            L && F(L)
          }), [L]), (0, p.useEffect)((() => {
            const e = L?.characters.gtao;
            if (null !== E && !e.length) return void $(!1);
            if (null == O || !e.length) return;
            const t = e?.[O] ?? e?.[0] ?? null;
            $(!!t?.platform && [t.platform, t.characterSlot])
          }), [O, L, E]), (0, p.useEffect)((() => {
            (async () => {
              if (!L?.id) return;
              const {
                count: e
              } = await (0, b.coreScApiFetch)("notification/count", {
                pingBearer: M
              });
              V(e > 0)
            })()
          }), [L]), (0, p.useEffect)((() => {
            fe()
          }), [ne]), (0, p.useEffect)((() => {
            s(!0), d(g < 768), d(g < 768 || f < 649)
          }), [g, f]), (0, p.useEffect)((() => {
            let e = re.length - 1;
            e < 0 && (e = 0), Z(e);
            const t = re.length > 0 ? re[O] ?? re[0] : null;
            if (!t) return;
            const a = null !== t ? (0, Wt.A)(t.platform, "large") : null;
            W(a), H(t), re.length > 1 ? X(!0) : X(!1), o(re.length - 1 > 3)
          }), [O, re]), (0, p.useEffect)((() => {
            fe()
          }), [K, l, g, re]), (0, p.useEffect)((() => {
            pe(), Bt()((() => {
              setTimeout(pe, 0)
            }), 300)
          }), [g, f]), (0, p.useEffect)((() => {
            const e = A?.currentCharId ?? 0;
            e !== O && B(Math.max(0, Math.min(e, re.length - 1)))
          }), [re, A]), (0, c.jsxs)(c.Fragment, {
            children: [null !== G && "gtao" === P && (0, c.jsxs)("div", {
              className: ca.scProfile,
              ref: de,
              tabIndex: -1,
              "aria-label": h.formatMessage(zt.A.profile_selector_profile_card),
              children: [(0, c.jsx)(ia, {
                s: ca,
                character: G,
                platformTag: U
              }), !0 === q && (0, c.jsxs)("div", {
                className: ca.scCharacterSelector,
                children: [(0, c.jsx)("button", {
                  className: ca.scCharacterSelectBtn,
                  "aria-hidden": !D,
                  type: "button",
                  onClick: e => {
                    e.stopPropagation();
                    const t = !a;
                    s(t), I({
                      event: t ? "character_selector_close" : "character_selector_open",
                      element_placement: "character selector"
                    })
                  },
                  "data-list-closed": a,
                  children: (0, c.jsx)("span", {
                    children: (0, c.jsx)(ce.FormattedMessage, {
                      ...zt.A.profile_selector_switch_character
                    })
                  })
                }), !1 === l && (0, c.jsx)("div", {
                  className: ca.scCharacterList,
                  "data-long-list": n,
                  "aria-hidden": a,
                  ref: r,
                  children: re.map((e => (0, c.jsx)(Zt, {
                    tabIndex: a ? -1 : 0,
                    characterData: e,
                    setMobileCardWidth: oe
                  }, e.mugshotUrl)))
                }), !0 === l && (0, c.jsx)("div", {
                  className: ca.scCharacterList,
                  "data-single-item": 2 === re.length,
                  "data-swiper-disabled": Y,
                  "aria-hidden": a,
                  ref: J,
                  children: (0, c.jsx)(oa, {
                    interactionDelay: 350,
                    mobileGutterWidth: 17,
                    dragThreshold: 40,
                    slideChangeCallback: () => {
                      I({
                        event: "carousel_swipe",
                        element_placement: "character selector"
                      })
                    },
                    disablePager: Y,
                    disableSwiper: Y,
                    children: re.filter(((e, t) => t !== O)).map((e => (0, p.createElement)(Zt, {
                      characterData: e,
                      setMobileCardWidth: oe,
                      key: e.mugshotUrl,
                      tabIndex: a ? -1 : 0
                    })))
                  })
                })]
              })]
            }), (0, c.jsxs)("nav", {
              className: ca.scNav,
              "aria-hidden": !D,
              children: [(0, c.jsx)("button", {
                className: ca.scNavHeader,
                type: "button",
                "data-opened": N,
                "data-nav-opened": D,
                tabIndex: N ? -1 : 0,
                onClick: e => {
                  e.stopPropagation(), N || S(!0)
                },
                "data-testid": "playerButton",
                children: (0, c.jsx)("span", {
                  children: L.nickname
                })
              }), (0, c.jsx)("div", {
                className: ca.scNavWrap,
                "data-opened": N,
                "data-logged-in": "true",
                ref: te,
                style: {
                  "--scNavWrap-max-height": `${ae+y}px`
                },
                children: ue.map(((e, t) => (0, p.createElement)(Gt, {
                  ...e,
                  id: t,
                  activeSubNavId: _,
                  setActiveSubNavId: x,
                  setSubNavExtraHeight: j,
                  onNavigate: u,
                  key: e.text
                })))
              })]
            }), (0, c.jsx)("div", {
              className: ca.scLanguageSelector,
              style: {
                visibility: D ? null : "hidden"
              },
              children: (0, c.jsx)(ge, {
                parent: "header",
                theme: "sc-menu",
                languageSelectorOpened: v,
                setLanguageSelectorOpened: w,
                location: m
              })
            })]
          })
        })),
        da = {
          scMenu: "rockstargames-modules-core-newswire-articleebc4c779cfe9d0b7cfd678424e57370c",
          pillBtn: "rockstargames-modules-core-newswire-articlef333ffbc5b9f9d571b81be0a7235190d",
          selected: "rockstargames-modules-core-newswire-articlee3bdabe09c3d1b98b61f3d0484209912",
          navOpen: "rockstargames-modules-core-newswire-articleff929155ac480a9cfa5540dfd3e70ae9",
          dragHandle: "rockstargames-modules-core-newswire-articleba4968108b922dd8165c6e53557f5f2e",
          dragHandleBtn: "rockstargames-modules-core-newswire-articled362ba3eeee50f90600a413c05761431",
          scOverlay: "rockstargames-modules-core-newswire-articled8e443f5d0d9171449f5f1042f80aa17"
        },
        ma = (0, ce.withIntl)((e => {
          let {
            location: t,
            onNavigate: s
          } = e;
          const {
            windowHeight: r
          } = (0, b.useWindowResize)(), i = (0, ce.useIntl)(), {
            languageSelectorOpened: n,
            setLanguageSelectorOpened: o,
            setActiveSubNavId: l,
            scNavOpened: d,
            setScNavOpened: m,
            charListHidden: u,
            setCharListHidden: g
          } = Ot(), [f, h] = (0, p.useState)(!1), {
            navHidden: v = !1
          } = (0, R.useState)(), {
            loggedIn: w
          } = (0, k.useRockstarUser)(), {
            currentCharId: _,
            navOpen: x,
            setNavOpen: y,
            userData: j
          } = (0, k.useRockstarUserState)(), {
            track: N
          } = (0, k.useGtmTrack)(), [S, T] = (0, p.useState)(!1), C = (0, R.useReactiveVar)(k.scConfig), A = (0, p.useRef)(), [I, M] = (0, p.useState)(0), L = (0, p.createRef)(), [E, P] = (0, p.useState)(!1), [O, z] = (0, p.useState)(0), [D, B] = (0, p.useState)(!1), {
            mutateLSSettings: V,
            lsSettings: $
          } = (0, b.useRockstarWebLSSettings)(), F = (0, p.useCallback)((e => {
            g(e), A.current && !0 === e && (A.current.scrollTop = 0)
          }), [A]);
          return (0, p.useEffect)((() => {
            null !== _ && $.currentCharId !== _ && V({
              key: "currentCharId",
              value: _
            }), !1 === w ? V({
              key: "currentCharId",
              value: null
            }) : w && !j && N({
              event: "account_synced"
            })
          }), [_, w]), (0, p.useEffect)((() => {
            A.current && (!1 === u && !1 === S && (A.current.style.height = `${A.current.scrollHeight}px`), !0 === u && (A.current.style.height = null))
          }), [u, A, S]), (0, p.useEffect)((() => {
            const e = () => {
                y(!1), F(!0)
              },
              t = t => {
                const a = L?.current && t?.composedPath().includes(L.current);
                x && !a && e()
              },
              a = t => {
                "Escape" === t.code && e()
              };
            return document.addEventListener("click", t), document.addEventListener("keyup", a), () => {
              document.removeEventListener("click", t), document.removeEventListener("keyup", a)
            }
          }), [L]), (0, p.useEffect)((() => {
            y(!1), F(!0)
          }), [v]), (0, p.useEffect)((() => {
            if (L.current) {
              const {
                current: e
              } = L, t = window.getComputedStyle(e);
              M(parseInt(t.paddingRight, 10) + parseInt(t.paddingLeft, 10))
            }
          }), [L]), (0, p.useEffect)((() => {
            B(window.navigator.userAgent.includes("Mac"))
          }), []), (0, p.useEffect)((() => {
            L.current && h(L?.current?.scrollHeight >= r)
          }), [L, r]), (0, p.useEffect)((() => {
            x || (l(-1), o(!1))
          }), [x]), (0, p.useEffect)((() => {
            n && (u || F(!0), d && (m(!1), l(-1)))
          }), [n]), (0, p.useEffect)((() => {
            d && (n && o(!1), u || F(!0))
          }), [d]), null === w ? null : (0, c.jsxs)(yt.A, {
            enabled: !!x,
            removeScrollBar: !1,
            children: [(0, c.jsxs)("div", {
              className: [da.scMenu, x ? da.navOpen : ""].join(" "),
              "data-logged-in": w,
              "data-mac-browser": D,
              "data-scroll-mode": f,
              ref: L,
              "aria-hidden": !x,
              children: [(0, c.jsx)("button", {
                className: da.dragHandleBtn,
                type: "button",
                onTouchStart: e => {
                  const t = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
                  z(t)
                },
                onTouchMove: e => {
                  if (0 === O) return;
                  const t = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX;
                  Math.abs(O - t) > 1 && (z(0), y(!1))
                },
                children: (0, c.jsx)("img", {
                  className: da.dragHandle,
                  src: a(68128),
                  alt: i.formatMessage(zt.A.sc_menu_drag_handle)
                })
              }), w ? (0, c.jsx)(la, {
                sc: C,
                charListHidden: u,
                hideCharacterList: F,
                refCharacterListDesktop: A,
                menuPadding: I,
                longCharList: S,
                setLongCharList: T,
                isMobileMode: E,
                setIsMobileMode: P,
                location: t,
                onNavigate: s
              }) : (0, c.jsx)(Ht, {
                sc: C,
                navOpen: x,
                location: t,
                onNavigate: s
              })]
            }), (0, c.jsx)("div", {
              className: [da.scOverlay, x ? da.navOpen : ""].join(" "),
              "data-logged-in": w
            })]
          })
        }), de),
        ua = a(58989),
        ga = a(81764),
        fa = (0, ce.withIntl)((e => {
          let {
            setOtherHeaderDropdowns: t
          } = e;
          const a = (0, ce.useIntl)(),
            {
              data: s
            } = (0, k.useRockstarUser)(),
            {
              charactersNeeded: r,
              currentCharId: i,
              navOpen: n,
              setNavOpen: o
            } = (0, k.useRockstarUserState)(),
            {
              track: l
            } = (0, k.useGtmTrack)(),
            [d, m] = (0, p.useState)(null),
            [u, g] = (0, p.useState)(!1),
            [f, h] = (0, p.useState)(null),
            [b, v] = (0, p.useState)(!1),
            [w, _] = (0, p.useState)([]);
          (0, p.useEffect)((() => {
            _(s.characters[r] ?? [])
          }), [s, r]);
          const x = (0, p.useCallback)((e => {
            e.stopPropagation(), o(!n), 1 == !n && t(null), l({
              event: "account_menu_click",
              element_placement: "Account Menu",
              text: n ? "close" : "open"
            })
          }), [n]);
          return (0, p.useEffect)((() => {
            const e = s?.id ?? !1,
              t = e ? (w?.[i]?.mugshotUrl ?? s?.avatar) || ua : ga,
              a = (0, Wt.A)(w?.[i]?.platform, "small") ?? null;
            h(a), m(t), g(e), v(!!w?.[i]?.mugshotUrl)
          }), [s, w, i, ua, ga]), (0, c.jsxs)("button", {
            className: "rockstargames-modules-core-newswire-articledc519cef2feb621e4715bd3fcdf09791",
            "data-img-set": b,
            "aria-label": a.formatMessage(n ? zt.A.sc_menu_close : zt.A.sc_menu_open),
            "aria-expanded": n,
            type: "button",
            onClick: x,
            "data-testid": "avaterMenuButton",
            "data-logged-in": Boolean(u),
            children: [(0, c.jsx)("img", {
              className: "rockstargames-modules-core-newswire-articlece75eaa6d65692d36b60d31f3f660ff0",
              src: d || "",
              onError: () => {
                m(ua)
              },
              alt: s?.nickname || ""
            }), u && null !== f && (0, c.jsx)("img", {
              className: "rockstargames-modules-core-newswire-articleaaf21e74a659089f743bb160bdf95046",
              src: f.src,
              alt: f.alt
            }), u && (0, c.jsx)("div", {
              "data-ui-name": "avatar",
              className: "rockstargames-modules-core-newswire-articlecf6b9e7404c64067bdfef9b79e9eb287",
              "data-platform": w?.[i]?.platform ?? null
            })]
          })
        }), de),
        pa = {
          pillBtn: "rockstargames-modules-core-newswire-articleb03cc125f63972f13ae84119af852edc",
          selected: "rockstargames-modules-core-newswire-articlefbcf46d7ef0b32e64b374eee6e3cda3e",
          promoModule: "rockstargames-modules-core-newswire-articlea586d11bf592ca821d65db7660518322",
          promoModuleImage: "rockstargames-modules-core-newswire-articleccd749d613ceb73aedb825d77d22cd0b",
          gradient: "rockstargames-modules-core-newswire-articlee4f178a3d1e3dfef8b42f73eabd9919e",
          promoModuleContentContainer: "rockstargames-modules-core-newswire-articled8348a62030f7e2f3c7a53cf67bef0f1",
          left: "rockstargames-modules-core-newswire-articlee56a5b7d9a696ea8ca340cc9b67998fc",
          right: "rockstargames-modules-core-newswire-articlec84d09e0c4466d20792d5a9016a00236",
          promoModuleTextContent: "rockstargames-modules-core-newswire-articlebf34746d222495ab8e30cede8de42d71",
          promoModuleWrapper: "rockstargames-modules-core-newswire-articlef6d46a24b050aad98fc3aae387b75586"
        },
        ha = e => {
          let {
            backgroundColor: t,
            brands: a = [],
            description: s = "",
            ctaLabel: r,
            ctaLink: i = "https://rockstargames.com",
            gradient: n = !0,
            image: o,
            imageOrientation: d = "right",
            title: g = "",
            name: f = ""
          } = e;
          const [h, b] = (0, p.useState)(!1), {
            ref: v,
            inView: w
          } = (0, q.Wx)({
            threshold: .6
          }), {
            track: _
          } = (0, k.useGtmTrack)(), x = {
            "--promo-background": t ?? "var(--black-200)",
            "--promo-image": `url(${(0,m.useGetCdnSource)(o)??"var(--promo-background)"})`,
            "--promo-order": "left" === d ? "row" : "row-reverse"
          };
          return (0, p.useEffect)((() => {
            w && !h && (_({
              event: "page_section_impression",
              element_placement: f
            }), b(!0))
          }), [w]), (0, c.jsx)(c.Fragment, {
            children: (0, c.jsx)("div", {
              className: pa.promoModuleWrapper,
              children: (0, c.jsxs)(Z.P.div, {
                className: pa.promoModule,
                style: {
                  ...x
                },
                initial: {
                  opacity: 0
                },
                whileInView: {
                  opacity: 1
                },
                viewport: {
                  margin: "-20%",
                  once: !0
                },
                transition: {
                  ease: "easeIn",
                  duration: .4
                },
                ref: v,
                children: [(0, c.jsx)("div", {
                  className: [pa.promoModuleImage, n ? pa.gradient : "", "left" === d ? pa.left : pa.right].join(" ")
                }), (0, c.jsxs)("div", {
                  className: pa.promoModuleContentContainer,
                  children: [(0, c.jsx)(l, {
                    brands: a,
                    className: pa.promoModuleBrands
                  }), (0, c.jsxs)("div", {
                    className: pa.promoModuleTextContent,
                    children: [g && (0, c.jsx)("h3", {
                      children: g
                    }), s && (0, c.jsx)("p", {
                      children: s
                    })]
                  }), r && (0, c.jsx)(u.A, {
                    to: i,
                    text: r,
                    onClick: () => {
                      _({
                        event: "cta_other",
                        element_placement: "promo module",
                        link_url: i,
                        text: r
                      })
                    }
                  })]
                })]
              })
            })
          })
        },
        ba = {
          rating: "rockstargames-modules-core-newswire-articlea1271bbed316bf567eb67e78d2143808",
          withDescriptors: "rockstargames-modules-core-newswire-articlecba248edc2520d3f1ad195a8495dc1f8",
          withOutDescriptors: "rockstargames-modules-core-newswire-articleff919f7a60b854473b61075a671deb6a",
          text: "rockstargames-modules-core-newswire-articled47cd2b7c7415cb44cddef00b1c9b35f"
        },
        ka = (0, ce.defineMessages)({
          components_ratings_link_alt: {
            id: "components_ratings_link_alt",
            defaultMessage: "Rating: {rating}. Click here learn more about rating systems"
          }
        });
      var va = a(85913);
      const wa = void 0 !== va.GameData ? va.GameData : GameDataDefault;
      (0, b.importAll)(a(4905));
      const _a = (0, Y.A)((0, ce.withIntl)((e => {
        let {
          descriptors: t = null,
          footer: s = null,
          href: r,
          img: n = null,
          titleSlug: o = null,
          style: l = {},
          className: d
        } = e;
        const [m, u] = (0, p.useState)(!1), {
          inView: g
        } = (0, q.Wx)({
          threshold: .6
        }), [f, h] = (0, p.useState)({
          ratingDescriptors: t,
          ratingFooter: s,
          ratingImg: n,
          ratingUrl: r
        }), {
          track: v
        } = (0, k.useGtmTrack)(), w = (0, ce.useIntl)(), {
          data: _
        } = (0, R.useQuery)(wa, {
          variables: {
            titleSlug: o
          },
          skip: !o
        });
        if ((0, p.useEffect)((() => {
            _ && h(_?.game)
          }), [_]), (0, p.useEffect)((() => {
            g && !m && f.img_rating && (v({
              event: "page_section_impression",
              element_placement: "rating"
            }), u(!0))
          }), [g]), !f.ratingImg) return null;
        const x = !!f.ratingDescriptors;
        return (0, c.jsxs)("div", {
          className: [ba.rating, x ? ba.withDescriptors : ba.withOutDescriptors, d || ""].join(" "),
          style: (0, b.safeStyles)(l),
          children: [(0, c.jsx)(i.A, {
            to: f.ratingUrl,
            target: "_blank",
            children: (0, c.jsx)("img", {
              alt: w.formatMessage(ka.components_ratings_link_alt, {
                rating: (y = f.ratingImg, y.replace(/_/g, " ").split(".")[0].toUpperCase())
              }),
              src: a(73983)(`./${f.ratingImg}`)
            })
          }), x && (0, c.jsxs)("div", {
            className: ba.text,
            children: [(0, c.jsx)("p", {
              className: ba.descriptors,
              dangerouslySetInnerHTML: {
                __html: f?.ratingDescriptors?.split(/<br\s?\/?>/).join(", ") || ""
              }
            }), f.ratingFooter && (0, c.jsx)("hr", {}), f.ratingFooter && (0, c.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: f.ratingFooter.replace(/ \//g, ", ")
              }
            })]
          })]
        });
        var y
      }), de));
      var xa = a(43108),
        ya = a(75930),
        ja = a(95625),
        Na = a(61841),
        Sa = a(37297),
        Ta = a(17375);
      const Ca = e => {
        let {
          disableLink: t,
          className: a
        } = e;
        const s = t ? "span" : i.A;
        return (0, c.jsx)(s, {
          className: [t ? "rockstargames-modules-core-newswire-articleba0c20f78999975dfb8d9cff0de44b34" : "rockstargames-modules-core-newswire-articlee5e749488d1daa3beceb8931e09f14e5", a || ""].join(" "),
          alt: "Rockstar Games Home",
          ...!t && {
            to: "/"
          }
        })
      };
      var Aa = a(60444);
      const Ia = e => {
          let {
            thresholds: t,
            onThresholdReached: a,
            children: s
          } = e;
          const [r, i] = (0, p.useState)([]), [n, o] = (0, p.useState)(new Set);
          return (0, p.useEffect)((() => {
            const e = Array.from(new Set(t));
            e.sort(((e, t) => e - t)), i(e)
          }), [t]), (0, c.jsxs)("div", {
            style: {
              position: "relative"
            },
            children: [r.map((e => (0, c.jsx)(q.pL, {
              threshold: e,
              onChange: t => ((e, t) => {
                e && !n.has(t) && o((e => {
                  const s = new Set(e);
                  return r.forEach((e => {
                    e <= t && !s.has(e) && (s.add(e), a(e))
                  })), s
                }))
              })(t, e),
              triggerOnce: !0,
              children: t => {
                let {
                  ref: a
                } = t;
                return (0, c.jsx)("div", {
                  ref: a,
                  style: {
                    height: "1px",
                    position: "absolute",
                    top: 100 * e + "%"
                  }
                })
              }
            }, e))), s]
          })
        },
        Ma = () => {
          const {
            pathname: e
          } = (0, h.useLocation)();
          return (0, p.useEffect)((() => {
            const e = document.scrollingElement || document.documentElement;
            setTimeout((() => {
              e.scrollTop = 0
            }), 0)
          }), [e]), null
        };
      var La = a(61651),
        Ea = a(37017),
        Pa = a(63303),
        Oa = a(52983);
      const za = e => {
        let {
          children: t
        } = e;
        return (0, c.jsx)("div", {
          className: "rockstargames-modules-core-newswire-articleecd6dfa85759d767ab1c7c18f4cfbda7",
          children: (0, c.jsx)("div", {
            className: "rockstargames-modules-core-newswire-articlefffab0d3ace375c65ad804002a45f219",
            children: t
          })
        })
      };
      var Da = a(62550),
        Ba = a(7607),
        Va = a(22545),
        $a = a(25180);
      const Fa = e => {
        let {
          children: t,
          style: a,
          theme: s
        } = e;
        const [r, i] = (0, p.useState)(s);
        return (0, p.useEffect)((() => {
          s && i(s)
        }), [s]), (0, c.jsx)("div", {
          className: "rockstargames-modules-core-newswire-articlea3cc68ab0d512c3d8835ee9abb7a51c4",
          style: a,
          "data-theme": r,
          children: t
        })
      };
      var Ra = a(63672),
        Ga = a(94869);
      const Ha = {
          pillBtn: "rockstargames-modules-core-newswire-articleae56f3a5bf16f1160a0cbc040c7611fa",
          selected: "rockstargames-modules-core-newswire-articled7e34a082f54f22035320df51e8b4ed9",
          userVote: "rockstargames-modules-core-newswire-articlefd538df1ac730062880ff9ca1292dcc4",
          info: "rockstargames-modules-core-newswire-articledd49c22b2bd842d7e8c11ac45b3a536b",
          voteContent: "rockstargames-modules-core-newswire-articleeb3c4c0d7629a1182cd138d3d2e6e081",
          loggedOutButtons: "rockstargames-modules-core-newswire-articled00b4195df0f175083f6aa2a7d847d72",
          voteButtons: "rockstargames-modules-core-newswire-articlefdd10a481e3da0f8e9511b6a577052e0",
          downVote: "rockstargames-modules-core-newswire-articleabdbb2656b0080d66eb4d39b7e1eb38d",
          upVote: "rockstargames-modules-core-newswire-articleea25ed07e937e2efdce0b99d076fbbe1",
          voteButtonActive: "rockstargames-modules-core-newswire-articlec31731d09d8118c6a82fe6edb193dc50"
        },
        Ua = e => {
          let {
            description: t,
            foreign_id: a = document.location.pathname,
            foreign_type: s = "url",
            title: r
          } = e;
          const {
            track: i
          } = (0, k.useGtmTrack)(), {
            loggedIn: n
          } = (0, k.useRockstarUser)(), {
            refetch: o
          } = (0, R.useQuery)(Ga.UserGetVote, {
            skip: !0
          }), [l] = (0, R.useMutation)(Ga.UserCastVote), [d, m] = (0, p.useState)(null), u = (0, p.useCallback)((async e => {
            i({
              event: "cta_" + (e ? "like" : "dislike"),
              text: `${s} ${a}`
            });
            const t = {
                foreign_id: a,
                foreign_type: s,
                vote: e
              },
              r = await l({
                variables: t
              });
            m(r?.data?.userCastVote?.vote ?? null)
          }), [a, s]);
          return (0, p.useEffect)((() => {
            (async () => {
              if (!n || !a || !s) return;
              const e = await o({
                foreign_id: a,
                foreign_type: s
              });
              m(e?.data?.userGetVote?.vote ?? null)
            })()
          }), [a, s, n]), (0, c.jsx)("div", {
            className: Ha.userVote,
            children: (0, c.jsxs)("div", {
              className: Ha.voteContent,
              children: [(0, c.jsxs)("div", {
                className: Ha.info,
                children: [(0, c.jsx)("h3", {
                  children: r
                }), (0, c.jsx)("p", {
                  children: t
                })]
              }), (0, c.jsxs)("div", {
                className: [Ha.voteButtons, n ? "" : Ha.loggedOutButtons].join(" "),
                children: [(0, c.jsx)("button", {
                  onClick: () => u(!0),
                  className: [Ha.upVote, d ? Ha.voteButtonActive : ""].join(" "),
                  type: "button",
                  "aria-label": "Vote up"
                }), (0, c.jsx)("button", {
                  className: [Ha.downVote, !1 === d ? Ha.voteButtonActive : ""].join(" "),
                  onClick: () => u(!1),
                  type: "button",
                  "aria-label": "Vote down"
                })]
              })]
            })
          })
        };
      var Wa = a(59028),
        qa = a.n(Wa);
      const Xa = {
          videoPreview: "rockstargames-modules-core-newswire-articlec6739cc628fda235abe2bafeb30ad7cf",
          card: "rockstargames-modules-core-newswire-articleec6e68ffa1188155be202dfef3f92829",
          info: "rockstargames-modules-core-newswire-articleab8da127fbcdb98f874bc3f1377669a2",
          title: "rockstargames-modules-core-newswire-articlee84fa4b2b140994c96a13607410d30a3",
          screencap: "rockstargames-modules-core-newswire-articlea322c3d2275cedd594a3b17800154066",
          screencapLoaded: "rockstargames-modules-core-newswire-articlef68c57f5459778024e5a98918ae61ab2",
          gameTitle: "rockstargames-modules-core-newswire-articledebff452a4923aded7de826c081bab5d"
        },
        Ya = e => {
          let {
            video: t,
            size: a = 640
          } = e;
          const s = () => t.screencap.includes("akamai") ? `${t.screencap}?im=Resize=${a}` : t.screencap,
            [r] = (0, b.usePreloadImg)(s());
          return (0, c.jsx)("div", {
            className: [Xa.screencap, r ? Xa.screencapLoaded : ""].join(" "),
            style: {
              background: `url(${s()}) center/cover`
            }
          })
        },
        Qa = e => {
          let {
            gameTitleNecessary: t = !0,
            openInNewWindow: a = !1,
            video: s,
            size: r,
            toExplicit: n
          } = e;
          const o = n ?? `/videos/${s.id}`,
            l = {
              className: Xa.videoPreview,
              "data-gtm-category": "Videos",
              "data-gtm-action": "Video Click-through",
              "data-gtm-label": o
            },
            d = (0, c.jsxs)("div", {
              className: Xa.card,
              children: [(0, c.jsx)(Ya, {
                video: s,
                size: r
              }), (0, c.jsxs)("div", {
                className: Xa.info,
                children: [t ? (0, c.jsx)("div", {
                  className: Xa.gameTitle,
                  dangerouslySetInnerHTML: {
                    __html: s.game.title
                  }
                }) : "", (0, c.jsx)("h5", {
                  className: Xa.title,
                  dangerouslySetInnerHTML: {
                    __html: s.title
                  }
                })]
              })]
            });
          return a ? (0, c.jsx)("a", {
            href: o,
            target: "_blank",
            ...l,
            children: d
          }) : (0, c.jsx)(i.A, {
            to: o,
            ...l,
            children: d
          })
        },
        Ka = {
          carousel: "rockstargames-modules-core-newswire-articled8e71d378f6d4a968e8ac7d621e5f32a",
          slidesContent: "rockstargames-modules-core-newswire-articlefb10242b3a108773d6775a7f2a0d9846",
          text: "rockstargames-modules-core-newswire-articlea3f73d86b98d36a296bf8f621f1c340f",
          info: "rockstargames-modules-core-newswire-articlef46d7fc75c302b1d3f4db01d8572bea8",
          active: "rockstargames-modules-core-newswire-articled26d1267cc02f841fee8a874d679aebd",
          title: "rockstargames-modules-core-newswire-articlea879dfc151f7cf8da6bf5642b51436bb",
          gameTitle: "rockstargames-modules-core-newswire-articleb42d96124219141b4dbb454131b8c37b",
          videoTitle: "rockstargames-modules-core-newswire-articlec5ff8983fae65d6a3d7c741360bd3606",
          cta: "rockstargames-modules-core-newswire-articlee25e320fda75ce4076c9fe68b540a2fa",
          track: "rockstargames-modules-core-newswire-articledd0d39c46df512d3eff8ba48e469af0a",
          disableClick: "rockstargames-modules-core-newswire-articleb169e1b67f64de28605dd5056a740584",
          items: "rockstargames-modules-core-newswire-articledddc42d4babcaec339a7c1bd04420e6e",
          dragging: "rockstargames-modules-core-newswire-articlea7313e3ff4e99b5313f8698890d0dd8c",
          dots: "rockstargames-modules-core-newswire-articlee1d7433489996eb9fa890d452ebcb042"
        },
        Za = (0, b.withLocale)((e => {
          let {
            locale: t,
            t: a,
            videos: s
          } = e;
          const {
            track: r
          } = (0, k.useGtmTrack)(), {
            setBodyIsLocked: n
          } = (0, b.useBodyScrollable)("VideoCarousel"), [o, l] = (0, p.useState)(0), [m, u] = (0, p.useState)(0), g = (0, p.useRef)(null), f = (0, p.useRef)(null);
          return (0, p.useEffect)((() => {
            if (!g.current || !f.current) return;
            const e = new(qa())(g.current);
            e.get("press").set({
              time: 0
            }), e.get("tap").set({
              time: 150
            });
            const t = () => "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0,
              a = () => {
                l(o - 1 < 0 ? 0 : o - 1), u(0)
              },
              r = () => {
                const e = o + 1 >= s.length - 1 ? s.length - 1 : o + 1;
                l(e), u(0)
              },
              i = e => {
                u(e.isFinal ? 0 : e.deltaX), "panleft" !== e.additionalEvent && "panright" !== e.additionalEvent || !f.current?.classList.contains(Ka.dragging) || t() && n(!0)
              },
              c = () => {
                t() && n(!1), u(0)
              },
              d = e => {
                "press" === e.type && g.current?.classList.add(`${Ka.disableClick}`), "tap" === e.type && (g.current?.classList.remove(`${Ka.disableClick}`), document.elementFromPoint(e.center.x, e.center.y).click())
              },
              m = () => {
                t() && n(!1), g.current && g.current.classList.remove(`${Ka.disableClick}`)
              },
              p = () => {
                t() && n(!1)
              };
            return f.current.addEventListener("transitionend", p), e.on("swiperight", a), e.on("swipeleft", r), e.on("pan", i), e.on("panend", c), e.on("press tap", d), e.on("pressup", m), () => {
              e.off("swiperight", a), e.off("swipeleft", r), e.off("pan", i), e.off("panend", c), e.off("press tap", d), e.off("pressup", m), f.current && f.current.removeEventListener("transitionend", p), u(0)
            }
          }), [g.current, o]), (0, c.jsxs)("section", {
            className: Ka.carousel,
            children: [(0, c.jsx)("div", {
              className: Ka.track,
              ref: g,
              children: (0, c.jsx)("div", {
                className: `${Ka.items} ${0!==m?Ka.dragging:""}`,
                ref: f,
                style: {
                  transform: `translateX(calc(-${100*o}% + ${m}px))`
                },
                children: s.map(((e, t) => (0, c.jsx)(i.A, {
                  "data-gtm-category": "Carousel",
                  "data-gtm-action": "Click-through screencap",
                  "data-gtm-label": `/videos/${e.id}`,
                  to: `/videos/${e.id}`,
                  className: o === t ? Ka.active : "",
                  role: "link",
                  title: e.title,
                  tabIndex: o === t ? 0 : -1,
                  children: (0, c.jsx)(Ya, {
                    video: e,
                    size: 1280
                  })
                }, e.id)))
              })
            }), (0, c.jsxs)("div", {
              className: Ka.slidesContent,
              children: [(0, c.jsx)("div", {
                className: Ka.text,
                children: s.map(((e, s) => {
                  return (0, c.jsxs)(i.A, {
                    className: [Ka.info, s === o ? Ka.active : ""].join(" "),
                    "data-gtm-category": "Carousel",
                    "data-gtm-action": "Click-through footer",
                    "data-gtm-label": `/videos/${e.id}`,
                    to: `/videos/${e.id}`,
                    role: "link",
                    title: e.title,
                    tabIndex: o === s ? 0 : -1,
                    children: [(0, c.jsxs)("div", {
                      className: Ka.title,
                      children: [(0, c.jsxs)("div", {
                        className: Ka.gameTitle,
                        children: [e.game.title, "fr_fr" === t && " "]
                      }), (0, c.jsx)("h2", {
                        className: Ka.videoTitle,
                        children: e.title
                      })]
                    }), (0, c.jsx)(d.A, {
                      className: Ka.cta,
                      onClick: (n = `/videos/${e.id}`, () => {
                        r({
                          event: "cta_watch_video",
                          text: "watch now",
                          link_url: n,
                          element_placement: "video carousel"
                        })
                      }),
                      children: a("Watch Now")
                    })]
                  }, e.id);
                  var n
                }))
              }), (0, c.jsx)("section", {
                className: Ka.dots,
                "aria-controls": "video-carousel",
                "aria-label": "video carousel buttons",
                role: "group",
                children: s.map(((e, t) => (0, c.jsx)("button", {
                  "aria-label": `Slide ${t+1}`,
                  "data-gtm-category": "Marquee",
                  "data-gtm-action": "Dot click",
                  "data-gtm-label": `Dot clicked to ${t}`,
                  onClick: () => l(t),
                  className: o === t ? Ka.active : "",
                  type: "button"
                }, e.id)))
              })]
            })]
          })
        })),
        Ja = (0, ce.defineMessages)({
          next_button_label: {
            id: "next_button_label",
            defaultMessage: "Next video page"
          },
          previous_button_label: {
            id: "previous_button_label",
            defaultMessage: "Previous video page"
          }
        }),
        es = {
          img: "rockstargames-modules-core-newswire-articlee3f505a2281df28eb1acdf2d586e7fbd",
          wide: "rockstargames-modules-core-newswire-articlec3a6d60e0087f92bbf7062fe2f36e200"
        };
      (0, b.importAll)(a(43202));
      const ts = e => {
          let {
            isWideCard: t = !1,
            size: s = 640,
            title: r,
            titleSlug: i
          } = e;
          const {
            isMobile: n
          } = (0, b.useWindowResize)(), o = (0, p.useMemo)((() => {
            let e = "";
            return t && (e = n ? a(17426)(`./${i}/mobile.png`) : a(65392)(`./${i}/desktop.png`)), e || (e = a(32781)(`./${i}.jpg`), e += `?im=Resize=${s}`), e
          }), [n, i]), [l] = (0, b.usePreloadImg)(o);
          return (0, c.jsx)("div", {
            role: "img",
            "aria-label": r,
            className: [es.img, l ? es.startAnimation : "", t ? es.wide : ""].join(" "),
            style: {
              backgroundImage: `url(${o})`
            }
          })
        },
        as = {
          fobLink: "rockstargames-modules-core-newswire-articlefded54fb94f7325c5a0b57590585b175",
          wide: "rockstargames-modules-core-newswire-articlea9b41f96042bda8a8c77b7b7b10f84d5"
        },
        ss = e => {
          let {
            game: t,
            to: a
          } = e;
          const {
            titleSlug: s,
            urlOfficial: r = ""
          } = t, n = ["VI"].includes(s);
          return (0, c.jsx)(i.A, {
            "data-gtm-category": "Games",
            "data-gtm-action": "Game Click-through",
            "data-gtm-label": s,
            "data-testid": `${s}-gamecard`,
            to: a ?? r,
            target: "_self",
            className: [as.fobLink, n ? as.wide : ""].join(" "),
            reloadDocument: n,
            children: (0, c.jsx)(ts, {
              title: t.title,
              titleSlug: s,
              isWideCard: n
            })
          })
        },
        rs = {
          videoList: "rockstargames-modules-core-newswire-articlea77794780421c410f7ea55ed11ae6340",
          sectionHeader: "rockstargames-modules-core-newswire-articleed556e2220733d99eae5df36ba41f9c7",
          arrowNav: "rockstargames-modules-core-newswire-articleffeb6a2e829d49f94fea4ee7f5a0d2c8",
          items: "rockstargames-modules-core-newswire-articleffe2263cdad39631ef304714ba89465d",
          trackWrapper: "rockstargames-modules-core-newswire-articlecbdef484a85e8f352a06609b394d4da7",
          partial: "rockstargames-modules-core-newswire-articleb33af3fff1e38a693bdc09f20d8e6f81",
          track: "rockstargames-modules-core-newswire-articlef3f263effe27f3c21f2ab822b9ee5dcf",
          arrow: "rockstargames-modules-core-newswire-articlec8012415449630a832011f490b9d2b72",
          previous: "rockstargames-modules-core-newswire-articlef30d899a31937a4cf395643951224469",
          next: "rockstargames-modules-core-newswire-articled9d5a85633fc0f0b7f98219d735e6e05",
          disabled: "rockstargames-modules-core-newswire-articlec806076a1e3e23c77528ee12e32771a3"
        },
        is = (0, ce.withIntl)((e => {
          let {
            vids: t,
            games: a,
            title: s,
            gameTitleNecessary: r
          } = e;
          const i = (0, ce.useIntl)(),
            {
              track: n
            } = (0, k.useGtmTrack)(),
            o = void 0 !== a ? "games" : "videos",
            [l, d] = (0, p.useState)(),
            [u, g] = (0, p.useState)(),
            [f, h] = (0, p.useState)(0),
            b = (0, p.useRef)(null),
            v = (0, p.useRef)(null);
          (0, p.useEffect)((() => {
            g({
              nextEl: v.current,
              prevEl: b.current
            })
          }), [v, b]), (0, p.useEffect)((() => {
            const e = () => {
              const e = e => window.matchMedia(`(max-width: ${e})`).matches;
              let t = 4;
              e("768px") ? t = 1 : e("990px") || e("1440px") ? t = 2.2 : e("1920px") && (t = 3.2), h(t)
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), [f]);
          const w = e => {
            l?.slideTo(e)
          };
          let _;
          return _ = "games" === o ? (0, c.jsx)(c.Fragment, {
            children: a.results.map(((e, t) => "775700as" !== e.id && (0, c.jsx)(X.qr, {
              className: rs.slide,
              onFocus: () => w(t),
              children: (0, c.jsx)(ss, {
                game: e,
                dontOverrideTo: !0,
                to: `/videos?type=game&gameId=${e.id}`
              })
            }, e.id)))
          }) : (0, c.jsx)(c.Fragment, {
            children: t.map(((e, t) => (0, c.jsx)(X.qr, {
              className: rs.slide,
              onFocus: () => w(t),
              children: (0, c.jsx)(Qa, {
                video: e,
                gameTitleNecessary: r
              })
            }, e.id)))
          }), (0, c.jsxs)("section", {
            className: rs.videoList,
            children: [(0, c.jsxs)("h3", {
              className: rs.sectionHeader,
              children: [s, (0, c.jsxs)("div", {
                className: rs.arrowNav,
                children: [(0, c.jsx)("button", {
                  className: [rs.arrow, rs.previous].join(" "),
                  type: "button",
                  ref: b,
                  "aria-label": i.formatMessage(Ja.previous_button_label)
                }), (0, c.jsx)("button", {
                  className: [rs.arrow, rs.next].join(" "),
                  type: "button",
                  ref: v,
                  "aria-label": i.formatMessage(Ja.next_button_label),
                  onKeyDown: e => {
                    if ("Tab" === e.key && !e.shiftKey) {
                      const t = l?.slides[l?.activeIndex].querySelector('a, button, [role="button"]');
                      t && (e.preventDefault(), t.focus())
                    }
                  }
                })]
              })]
            }), (0, c.jsx)("div", {
              className: [rs.items, f % 1 != 0 ? rs.partial : ""].join(" "),
              children: (0, c.jsx)("div", {
                className: rs.trackWrapper,
                children: f && (0, c.jsx)(X.RC, {
                  className: rs.track,
                  slidesPerView: f,
                  spaceBetween: 24,
                  onInit: e => {
                    d(e)
                  },
                  grabCursor: !0,
                  navigation: u,
                  modules: [U.Vx],
                  slideClass: (0, m.classList)("swiper-slide"),
                  onSlideNextTransitionEnd: () => {
                    n({
                      event: "carousel_next",
                      element_placement: s?.toLowerCase() ?? ""
                    })
                  },
                  onSlidePrevTransitionEnd: () => {
                    n({
                      event: "carousel_previous",
                      element_placement: s?.toLowerCase() ?? ""
                    })
                  },
                  onSlideChangeTransitionEnd: () => {
                    n({
                      event: "carousel_swipe",
                      element_placement: s?.toLowerCase() ?? ""
                    })
                  },
                  children: _
                })
              })
            })]
          })
        }), de),
        ns = e => {
          let {
            children: t,
            ...a
          } = e;
          return (0, c.jsx)("span", {
            ...a,
            className: "rockstargames-modules-core-newswire-articlef7f61ab4bc6dd2a49f80662ead7d8a51",
            children: t
          })
        };
      var os = a(88038);
      class cs extends p.Component {
        constructor(e) {
          super(e), this.state = {
            error: {
              code: null,
              message: null
            }
          }
        }
        componentDidUpdate(e) {
          this.props.error && e.error !== this.props.error && this.setState({
            ...this.state,
            error: this.props.error
          })
        }
        static getDerivedStateFromError(e) {
          return {
            error: {
              message: e?.message ? e.toString() : "Something has gone horribly awry.",
              code: e?.code ?? 399
            }
          }
        }
        render() {
          return null !== this.state.error.code ? (0, c.jsx)(os.A, {
            error: this.state.error
          }) : this.props.children
        }
      }
      const ls = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return function(a) {
          return (0, c.jsx)(cs, {
            header: t,
            children: (0, c.jsx)(e, {
              ...a
            })
          })
        }
      };
      var ds = a(355),
        ms = a(26177)
    },
    22778: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => n
      });
      var s = a(60285);
      const r = {
        button: "rockstargames-modules-core-newswire-articlee056494c33cff1fe89431f279fdb6b9a",
        secondary: "rockstargames-modules-core-newswire-articled340cf27f380a4347994e59544432eb3"
      };
      var i = a(46632);
      const n = e => {
        let {
          className: t = "",
          children: a,
          context: n = "",
          to: o,
          onClick: c,
          target: l = "_self",
          ...d
        } = e;
        const m = [r.button, r[n], t].join(" ");
        return o ? (0, i.jsx)(s.A, {
          ...d,
          to: o,
          className: m,
          onClick: c,
          target: l,
          children: a
        }) : (0, i.jsx)("button", {
          ...d,
          type: "button",
          className: m,
          onClick: c,
          children: a
        })
      }
    },
    43108: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => i
      });
      const s = {
        responsiveFlexBox: "rockstargames-modules-core-newswire-articlecef355ba53827b9ec44655c80b247b2e",
        responsiveFlexItem: "rockstargames-modules-core-newswire-articlea8f5d10f689c3d40c8378e3ae8a07517",
        responsiveImage: "rockstargames-modules-core-newswire-articlebee8268780b292e5bc0da0b497e2c28f"
      };
      var r = a(46632);
      const i = e => {
        let {
          children: t,
          className: a,
          style: i
        } = e;
        return (0, r.jsx)("div", {
          className: [s.responsiveFlexBox, void 0 !== a ? a : ""].join(" "),
          style: i,
          children: t
        })
      }
    },
    75930: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => i
      });
      const s = {
        responsiveFlexItem: "rockstargames-modules-core-newswire-articleae579f6183cf73c897e68c8aae5c9d9d"
      };
      var r = a(46632);
      const i = e => {
        let {
          children: t,
          className: a,
          style: i
        } = e;
        return (0, r.jsx)("div", {
          className: [s.responsiveFlexItem, void 0 !== a ? a : ""].join(" "),
          style: i,
          children: t
        })
      }
    },
    28606: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => o
      });
      var s = a(26398),
        r = a(28089),
        i = a(42756);
      var n = a(46632);
      const o = e => {
        let {
          children: t,
          context: a = null,
          game: o,
          image: c = {},
          style: l = {},
          template: d = null,
          theme: m = null,
          reversedOnMobile: u = !1,
          className: g = "",
          id: f = null
        } = e;
        const p = (0, r.useImageParser)(c ?? {}),
          h = {
            ...l
          };
        if (p?.src?.desktop) {
          const e = (c?.style && c?.style["--background-image-size"]) ?? "var(--grid-background-size, cover)",
            t = (c?.style && c?.style["--background-image-repeat"]) ?? "var(--grid-background-repeat, no-repeat)",
            a = `var(--grid-background-position, center)/${e??"cover"}`;
          if (h.background = `url(${p?.src?.desktop}) ${t} ${a}`, c?.style && c?.style["--linear-gradient"]) h.background = `linear-gradient(${c?.style["--linear-gradient"]}), url(${p?.src?.desktop}) ${t} ${a}`;
          else if (c?.style && c?.style["--gradient-height"]) {
            const e = c?.style["--gradient-height"] || "3",
              s = c?.style["--gradient-start-color"] || "var(--background-color, transparent)",
              r = c?.style["--gradient-end-color"] || "var(--background-color, transparent)";
            h.background = `linear-gradient(180deg, ${s}, transparent ${e}%, transparent ${100-e}%, ${r}), url(${p?.src?.desktop}) ${t} ${a}`
          }
        }
        return (0, n.jsx)("div", {
          id: f,
          className: (0, s.classList)("rockstargames-modules-core-newswire-articlef42b4606ed4a5b16b7647ad7b7eb229d", u ? "rockstargames-modules-core-newswire-articleb00444166ce6346d7ca364a75a335ecc" : "", g),
          "data-game": "community" === d ? null : o,
          style: (0, i.safeStyles)(h),
          "data-context": a,
          "data-template": d,
          "data-theme": m,
          children: t
        })
      }
    },
    95625: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => i
      });
      const s = {
        responsiveGridBox: "rockstargames-modules-core-newswire-articlea28c0b7a44e1a2d5fb257161ce36a24f",
        responsiveGridItem: "rockstargames-modules-core-newswire-articlebeddf36313a28976090b5a8b04d2594a"
      };
      var r = a(46632);
      const i = e => {
        let {
          children: t,
          cols: a,
          className: i,
          rows: n,
          style: o
        } = e;
        const c = o ? {
          ...o
        } : {};
        return void 0 !== a && (c.gridTemplateColumns = `repeat(${a}, 1fr)`), void 0 !== n && (c.gridTemplateRows = `repeat(${n}, 1fr)`), (0, r.jsx)("div", {
          className: [s.responsiveGridBox, void 0 !== i ? i : ""].join(" "),
          style: c,
          children: t
        })
      }
    },
    61841: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => i
      });
      const s = {
        responsiveGridBox: "rockstargames-modules-core-newswire-articlea39e7c7140ada0ab28537c8c901e816f",
        responsiveGridItem: "rockstargames-modules-core-newswire-articlebe7a0966e2f0457c1172ac9da99020c6"
      };
      var r = a(46632);
      const i = e => {
        let {
          children: t,
          className: a,
          style: i
        } = e;
        return (0, r.jsx)("div", {
          className: [s.responsiveGridItem, void 0 !== a ? a : ""].join(" "),
          style: i,
          children: t
        })
      }
    },
    87839: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => c
      });
      var s = a(54252),
        r = a.n(s),
        i = a(74401),
        n = a(42756);
      var o = a(46632);
      const c = e => {
        let {
          attributes: t = {},
          children: a,
          className: s = "",
          id: c = "",
          style: l = {}
        } = e;
        return (0, o.jsx)("span", {
          className: (0, i.classList)(s, t?.className, "rockstargames-modules-core-newswire-articlea7f106a8036d74ed9282a741476c6b5a"),
          id: c,
          style: (0, n.safeStyles)(l ?? t?.style ?? {}),
          dangerouslySetInnerHTML: {
            __html: r().unescape(a)
          }
        })
      }
    },
    17375: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => i
      });
      const s = {
        responsiveSection: "rockstargames-modules-core-newswire-articlefb7094e43a166c19080ccfe92ed7420d",
        maxWidth: "rockstargames-modules-core-newswire-articlebdc35dbaa55c59ddd2831fd3ac05c5a7"
      };
      var r = a(46632);
      const i = e => {
        let {
          children: t,
          className: a,
          style: i,
          maxWidth: n
        } = e;
        return (0, r.jsx)("section", {
          className: [s.responsiveSection, void 0 !== a ? a : ""].join(" "),
          style: i,
          children: n ? (0, r.jsx)("div", {
            className: s.maxWidth,
            children: t
          }) : t
        })
      }
    },
    63303: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => i
      });
      const s = {
        hr: "rockstargames-modules-core-newswire-articlef5cd418ab2ef6a89df6c95d2caa06ba8",
        redLine: "rockstargames-modules-core-newswire-articlef8b44ef9bbd3e7feb22bf79cc009b16e",
        gtao: "rockstargames-modules-core-newswire-articlec442f7264db862a7cca6d9a56dacc205"
      };
      var r = a(46632);
      const i = e => {
        let {
          style: t,
          className: a = "",
          type: i
        } = e;
        return (0, r.jsx)("div", {
          style: t,
          className: [s.hr, s[i], a].join(" ")
        })
      }
    },
    47252: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => n
      });
      var s = a(71403);
      var r = a(46632);
      class i extends s.Component {
        constructor(e) {
          super(e), this.state = {
            header: e.header ?? null,
            hidden: e.hidden ?? !1
          }
        }
        static getDerivedStateFromError(e) {
          return {
            error: {
              message: e.message ?? e.toString()
            }
          }
        }
        render() {
          return this?.state?.error?.message && this?.state?.hidden ? null : this?.state?.error?.message ? (0, r.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articlef903c45f8ecc18bd55f702e202f3763a",
            children: [(0, r.jsx)("h1", {
              children: this.state.header ?? "An error occurred."
            }), (0, r.jsx)("span", {
              children: this.state.error.message
            })]
          }) : this.props.children
        }
      }
      const n = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return function(s) {
          return (0, r.jsx)(i, {
            header: t,
            hidden: a,
            children: (0, r.jsx)(e, {
              ...s
            })
          })
        }
      }
    },
    88038: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => c
      });
      var s = a(71403),
        r = a(42756),
        i = a(60285),
        n = a(37017);
      var o = a(46632);
      const c = (0, r.withTranslations)((e => {
        let {
          error: t,
          t: a,
          domain: r = ""
        } = e;
        console.error({
          error: t
        });
        let c = t?.message ?? a("error-404-new");
        c = a("error-404-new");
        const l = t?.code ?? 398,
          d = (0, s.useRef)(null);
        return (0, s.useEffect)((() => {
          d && d?.current && d.current.focus()
        }), [d]), (0, o.jsxs)("div", {
          className: "rockstargames-modules-core-newswire-articled988ce20c420c26fc5e455279bf94cb9",
          children: [(0, o.jsx)("h3", {
            tabIndex: -1,
            ref: d,
            children: `${c} (${l})`
          }), (0, o.jsx)(i.A, {
            to: "/",
            children: a("Home")
          }), "clr" !== r && (0, o.jsx)(n.A, {})]
        })
      }))
    },
    355: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        Animations: () => s,
        LiteMotion: () => d,
        withFadeIn: () => p,
        withFadeUp: () => v
      });
      var s = {};
      a.r(s), a.d(s, {
        getVariant: () => x,
        transitions: () => w,
        variants: () => _
      });
      var r = a(71403),
        i = a(70077),
        n = a(83475),
        o = a(87617),
        c = a(46632);
      const l = (0, r.forwardRef)(((e, t) => {
        const {
          children: a,
          tag: s = "div"
        } = e, r = i.m[s];
        return (0, c.jsx)(n.F, {
          features: o.l,
          children: (0, c.jsx)(r, {
            ref: t,
            ...e,
            children: a
          })
        })
      }));
      l.displayName = "LiteMotion";
      const d = l;
      var m = a(53980);
      const u = {
          visible: {
            opacity: 1
          },
          hidden: {
            opacity: 0
          }
        },
        g = {
          ease: "easeIn",
          duration: .4
        },
        f = e => {
          let {
            children: t
          } = e;
          return (0, c.jsx)(m.P.div, Object.assign({
            className: "rockstargames-modules-core-newswire-articlef0ee4e641f1ac92151be887c9ebb8392",
            variants: u,
            initial: "hidden",
            whileInView: "visible",
            viewport: {
              margin: "-20%",
              once: !0
            },
            transition: g
          }, {
            children: t
          }))
        },
        p = e => t => (0, c.jsx)(f, {
          children: (0, c.jsx)(e, Object.assign({}, t))
        }),
        h = {
          visible: {
            opacity: 1,
            y: 0
          },
          hidden: {
            opacity: 0,
            y: 40
          }
        },
        b = {
          ease: "easeIn",
          duration: .75
        },
        k = e => {
          let {
            children: t
          } = e;
          return (0, c.jsx)(m.P.div, {
            className: "rockstargames-modules-core-newswire-articlea479a10c5475b17a0564b60fecf98c8b",
            variants: h,
            initial: "hidden",
            whileInView: "visible",
            viewport: {
              margin: "-20%",
              once: !0
            },
            transition: b,
            children: t
          })
        },
        v = e => t => (0, c.jsx)(k, {
          children: (0, c.jsx)(e, {
            ...t
          })
        }),
        w = {
          cardOpen: {
            ease: [.77, 0, .175, 1],
            duration: .5
          },
          afterCardOpen: {
            ease: "easeIn",
            duration: .3,
            delay: .5
          },
          fade: {
            ease: "easeIn",
            duration: .3
          },
          instantFade: {
            duration: .05
          }
        },
        _ = {
          plainCard: {
            expanded: {
              initial: {
                gridTemplateColumns: "var(--grid-template-columns-initial)",
                "--card-image-aspect-ratio": "var(--card-image-aspect-ratio-initial)",
                overflow: "visible",
                "--product-card-pricing-info-opacity": 1,
                "--product-card-pricing-info-padding": "var(--padding-sm)"
              },
              animate: {
                gridTemplateColumns: "var(--grid-template-columns-animate)",
                "--card-image-aspect-ratio": "var(--card-image-aspect-ratio-animate)",
                "--product-card-pricing-info-height": 0,
                "--product-card-pricing-info-opacity": 0,
                "--product-card-pricing-info-padding": 0,
                transitionEnd: {
                  overflow: "auto",
                  marginTop: "calc(var(--modal-padding) * -1)",
                  paddingTop: "var(--modal-padding)",
                  height: "calc(100% + var(--modal-padding))"
                }
              },
              hovered: {}
            },
            expandedContents: {
              initial: {
                opacity: 0,
                display: "var(--card-expanded-contents-display-initial)"
              },
              animate: {
                opacity: 1,
                display: "grid"
              }
            }
          },
          cardWithImageGallery: {
            expanded: {
              initial: {
                overflow: "visible",
                gridTemplateColumns: "var(--grid-template-columns-initial)",
                "--card-image-aspect-ratio": "var(--card-image-aspect-ratio-initial)",
                "--gallery-border": "0 solid transparent"
              },
              animate: {
                gridTemplateColumns: "var(--grid-template-columns-animate)",
                "--card-image-aspect-ratio": "var(--card-image-aspect-ratio-animate)",
                transitionEnd: {
                  overflow: "auto",
                  marginTop: "calc(var(--modal-padding) * -1)",
                  paddingTop: "var(--modal-padding)",
                  height: "calc(100% + var(--modal-padding))"
                }
              },
              hovered: {}
            },
            expandedContents: {
              initial: {
                opacity: 0,
                display: "none"
              },
              animate: {
                opacity: 1,
                display: "grid"
              }
            },
            gallery: {
              parent: {
                initial: {
                  gridGap: 0,
                  background: "var(--black-100)"
                },
                animate: {
                  gridGap: "var(--gallery-grid-gap)",
                  background: "var(--black-200)",
                  transitionEnd: {
                    pointerEvents: "all"
                  }
                }
              },
              main: {
                initial: {
                  "--gallery-aspect-ratio": "var(--gallery-aspect-ratio-initial)",
                  "--swiper-pagination-opacity": 0
                },
                animate: {
                  "--gallery-aspect-ratio": "var(--gallery-aspect-ratio-animate)",
                  "--swiper-pagination-opacity": 1
                }
              },
              thumbs: {
                initial: {
                  "--thumb-aspect-ratio": "1/0"
                },
                animate: {
                  "--thumb-aspect-ratio": "1/1"
                }
              }
            }
          },
          imageMask: {
            expanded: {
              initial: {
                borderRadius: "var(--border-radius-md)"
              },
              animate: {
                borderRadius: "var(--card-expanded-border-radius)"
              }
            }
          },
          foreground: {
            expanded: {
              initial: {
                width: "100%"
              },
              animate: {
                width: "var(--card-foreground-layer-width-animate)"
              }
            }
          },
          logo: {
            expanded: {
              initial: {
                "--card-logo-top-initial": "2rem",
                "--card-logo-top-animate": "0%"
              },
              animate: {
                "--card-logo-top-initial": "0rem",
                "--card-logo-top-animate": "50%",
                "--card-logo-marginTop-animate": "calc(var(--card-logo-height) * -1)",
                "--card-logo-y-animate-mobile": "-20%",
                height: "calc(var(--card-logo-height) * 2)",
                x: "var(--card-logo-animate-x)"
              },
              hovered: {}
            }
          },
          fade: {
            in: {
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1
              }
            },
            out: {
              initial: {
                opacity: 1
              },
              animate: {
                opacity: 0
              }
            }
          }
        },
        x = function() {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "collapsed";
          return _[arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "imageMask"][e]
        }
    },
    72558: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => m
      });
      var s = a(71403),
        r = a(89779),
        i = a(42756),
        n = a(40207),
        o = a(60285),
        c = a(31716);
      const l = {
        newswireBlock: "rockstargames-modules-core-newswire-articlea793f470884d207243d6c3caac8ad811",
        info: "rockstargames-modules-core-newswire-articled50f6d2bc5f983c05311292acb4c78a5",
        title: "rockstargames-modules-core-newswire-articlecc389449dc1495fc9c323fc2c547857d",
        newswireBlockNoSpecialOrder: "rockstargames-modules-core-newswire-articleffd167124f27c8e26a147f49c88796e5",
        preview: "rockstargames-modules-core-newswire-articlebbfbcf32c8c892ea29f4178949643475",
        previewMobile: "rockstargames-modules-core-newswire-articlef88852766488b21a28c42d230ea529a1",
        top: "rockstargames-modules-core-newswire-articlefa1a6f4c7d94b94f5af2dc1ac9af79f1",
        startAnimation: "rockstargames-modules-core-newswire-articlee380e8c67066df6f33fc018341ea96e5"
      };
      var d = a(46632);
      const m = e => {
        let {
          section: t = "",
          index: a,
          post: m,
          noSpecialOrder: u = !1,
          focused: g
        } = e;
        const {
          track: f
        } = (0, n.useGtmTrack)(), [p] = (0, r.useSearchParams)(), h = m.preview_images_parsed.newswire_block, b = {
          default: 0 !== a || u ? h.square || h.d16x9 || h._fallback : h.d16x9 || h.square || h._fallback,
          mobile: h.square || h._fallback
        }, [k, v] = (0, i.usePreloadImg)(b.default), w = {
          default: {
            backgroundImage: `url(${b.default})`
          },
          mobile: {
            backgroundImage: `url(${b.mobile})`
          }
        }, _ = (0, s.useCallback)((() => {
          f({
            event: "card_click",
            card_id: m.id,
            card_name: m.name_slug.replace(/-/g, " "),
            link_url: m.url,
            position: a,
            element_placement: t
          })
        }), [m]);
        return (0, d.jsx)(o.A, {
          to: m.url,
          className: [l.newswireBlock, u ? l.newswireBlockNoSpecialOrder : "", null !== k ? l.startAnimation : ""].join(" "),
          focused: g,
          onClick: _,
          children: (0, d.jsxs)(d.Fragment, {
            children: [0 !== a || p.get("tag_id") ? (0, d.jsx)("div", {
              className: l.preview,
              style: w.default
            }) : (0, d.jsxs)(d.Fragment, {
              children: [(0, d.jsx)("div", {
                className: l.previewMobile,
                style: w.mobile
              }), (0, d.jsx)("div", {
                className: l.preview,
                style: w.default
              })]
            }), (0, d.jsxs)("div", {
              className: l.info,
              children: [(0, d.jsxs)("div", {
                className: l.top,
                children: [m.primary_tags.length ? (0, d.jsx)(c.A, {
                  title: m.primary_tags[m.primary_tags.length > 1 && 722 === m.primary_tags[0].id ? 1 : 0].name
                }) : "", (0, d.jsx)("time", {
                  dateTime: m.created,
                  children: m.created_formatted
                })]
              }), (0, d.jsx)("h5", {
                className: l.title,
                dangerouslySetInnerHTML: {
                  __html: m.title
                }
              })]
            })]
          })
        })
      }
    },
    31716: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => n
      });
      var s = a(60285);
      const r = {
        tag: "rockstargames-modules-core-newswire-articleed77774d2704bc0ebc0ac156542ae053"
      };
      var i = a(46632);
      const n = e => {
        let {
          className: t,
          href: a,
          title: n,
          style: o
        } = e;
        const c = (0, i.jsxs)("div", {
          style: o,
          className: [r.tag, t].join(" "),
          children: [(0, i.jsx)("i", {}), n]
        });
        return void 0 !== a ? (0, i.jsx)(s.A, {
          to: a,
          children: c
        }) : c
      }
    },
    95073: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => o
      });
      var s = a(42756),
        r = a(72558);
      const i = {
        pillBtn: "rockstargames-modules-core-newswire-articleafd0af959edb4a463c41ad4e9cc5dadc",
        selected: "rockstargames-modules-core-newswire-articlebcd59aa4a9e88d86a2cbe8d4972f8f51",
        related: "rockstargames-modules-core-newswire-articlea748ad776070dab831edc1f67f66af08",
        posts: "rockstargames-modules-core-newswire-articlec0aa38678decd13ca38886b4547efedd",
        just1post: "rockstargames-modules-core-newswire-articleb1a31ddf7fd4458ee860d354a6a0ac92"
      };
      var n = a(46632);
      const o = (0, s.withTranslations)((e => {
        let {
          posts: t,
          t: a
        } = e;
        return (0, n.jsxs)("section", {
          className: i.related,
          children: [(0, n.jsx)("h2", {
            children: a("Related Stories")
          }), (0, n.jsx)("div", {
            className: [i.posts, 1 === t.length ? i.just1post : ""].join(" "),
            children: t.map((e => (0, n.jsx)(r.A, {
              noSpecialOrder: !0,
              post: e
            }, e.id)))
          })]
        })
      }))
    },
    13963: (e, t, a) => {
      "use strict";
      a.d(t, {
        A: () => i,
        C: () => s
      });
      const s = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store"
        },
        r = [{
          id: "prod",
          sites: {
            www: "www",
            socialClub: "socialclub",
            support: "support",
            store: "store"
          },
          cookieIdentifier: "prod"
        }],
        i = () => {
          let e;
          const {
            location: t
          } = window, a = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), s = r.findIndex((t => Object.entries(t.sites).findIndex((t => {
            let [s, r] = t;
            return r === a && (e = {
              site: s,
              subDomain: r
            }, !0)
          })) >= 0)), i = r[s >= 0 ? s : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...i,
            currentSite: e
          }
        }
    },
    83178: e => {
      var t = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "GetAudioAlbum"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "id"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int"
                }
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "locale"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String"
                }
              }
            },
            directives: []
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "audioAlbum"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "id"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "id"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "locale"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "locale"
                  }
                }
              }],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "title"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "tracks"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "id"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "cover_src"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "mp3_src"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "title"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "color"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "mix_blend_mode"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "duration"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "artist"
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "name"
                          },
                          arguments: [],
                          directives: []
                        }]
                      }
                    }]
                  }
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 340
        }
      };

      function a(e, t) {
        if ("FragmentSpread" === e.kind) t.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var s = e.type;
          "NamedType" === s.kind && t.add(s.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          a(e, t)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          a(e, t)
        })), e.definitions && e.definitions.forEach((function(e) {
          a(e, t)
        }))
      }
      t.loc.source = {
        body: "query GetAudioAlbum($id: Int!, $locale: String!) {\n    audioAlbum(id: $id, locale: $locale) {\n        title\n        tracks {\n            id\n            cover_src\n            mp3_src\n            title\n            color\n            mix_blend_mode\n            duration\n            artist {\n                name\n            }\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function r(e, t) {
        for (var a = 0; a < e.definitions.length; a++) {
          var s = e.definitions[a];
          if (s.name && s.name.value == t) return s
        }
      }
      t.definitions.forEach((function(e) {
        if (e.name) {
          var t = new Set;
          a(e, t), s[e.name.value] = t
        }
      })), e.exports = t, e.exports.GetAudioAlbum = function(e, t) {
        var a = {
          kind: e.kind,
          definitions: [r(e, t)]
        };
        e.hasOwnProperty("loc") && (a.loc = e.loc);
        var i = s[t] || new Set,
          n = new Set,
          o = new Set;
        for (i.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach((function(e) {
            n.has(e) || (n.add(e), (s[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return n.forEach((function(t) {
          var s = r(e, t);
          s && a.definitions.push(s)
        })), a
      }(t, "GetAudioAlbum")
    },
    59781: e => {
      var t = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "UserGetVote"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "foreignId"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String"
                }
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "foreignType"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String"
                }
              }
            },
            directives: []
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "userGetVote"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "foreign_id"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "foreignId"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "foreign_type"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "foreignType"
                  }
                }
              }],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "vote"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }]
          }
        }, {
          kind: "OperationDefinition",
          operation: "mutation",
          name: {
            kind: "Name",
            value: "UserCastVote"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "foreignId"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String"
                }
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "foreignType"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String"
                }
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "vote"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Boolean"
                }
              }
            },
            directives: []
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "userCastVote"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "foreign_id"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "foreignId"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "foreign_type"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "foreignType"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "vote"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "vote"
                  }
                }
              }],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "vote"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 386
        }
      };

      function a(e, t) {
        if ("FragmentSpread" === e.kind) t.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var s = e.type;
          "NamedType" === s.kind && t.add(s.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          a(e, t)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          a(e, t)
        })), e.definitions && e.definitions.forEach((function(e) {
          a(e, t)
        }))
      }
      t.loc.source = {
        body: "query UserGetVote($foreignId: String!, $foreignType: String!) {\n    userGetVote(foreign_id: $foreignId, foreign_type: $foreignType) {\n        vote\n    }\n}\n\nmutation UserCastVote(\n    $foreignId: String!\n    $foreignType: String!\n    $vote: Boolean!\n) {\n    userCastVote(\n        foreign_id: $foreignId\n        foreign_type: $foreignType\n        vote: $vote\n    ) {\n        vote\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function r(e, t) {
        for (var a = 0; a < e.definitions.length; a++) {
          var s = e.definitions[a];
          if (s.name && s.name.value == t) return s
        }
      }

      function i(e, t) {
        var a = {
          kind: e.kind,
          definitions: [r(e, t)]
        };
        e.hasOwnProperty("loc") && (a.loc = e.loc);
        var i = s[t] || new Set,
          n = new Set,
          o = new Set;
        for (i.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach((function(e) {
            n.has(e) || (n.add(e), (s[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return n.forEach((function(t) {
          var s = r(e, t);
          s && a.definitions.push(s)
        })), a
      }
      t.definitions.forEach((function(e) {
        if (e.name) {
          var t = new Set;
          a(e, t), s[e.name.value] = t
        }
      })), e.exports = t, e.exports.UserGetVote = i(t, "UserGetVote"), e.exports.UserCastVote = i(t, "UserCastVote")
    },
    85913: e => {
      var t = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "GameData"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "titleSlug"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String"
                }
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "locale"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String"
                }
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "withMetaTitle"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Boolean"
              }
            },
            defaultValue: {
              kind: "BooleanValue",
              value: !1
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "metaUrl"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String"
              }
            },
            defaultValue: {
              kind: "StringValue",
              value: "/",
              block: !1
            },
            directives: []
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              alias: {
                kind: "Name",
                value: "meta"
              },
              name: {
                kind: "Name",
                value: "metaUrl"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "locale"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "locale"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "domain"
                },
                value: {
                  kind: "StringValue",
                  value: "www",
                  block: !1
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "url"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "metaUrl"
                  }
                }
              }],
              directives: [{
                kind: "Directive",
                name: {
                  kind: "Name",
                  value: "include"
                },
                arguments: [{
                  kind: "Argument",
                  name: {
                    kind: "Name",
                    value: "if"
                  },
                  value: {
                    kind: "Variable",
                    name: {
                      kind: "Name",
                      value: "withMetaTitle"
                    }
                  }
                }]
              }],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "title"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "game"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "titleSlug"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "titleSlug"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "locale"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "locale"
                  }
                }
              }],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "ratingDescriptors"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "ratingFooter"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "ratingImg"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "ratingUrl"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 394
        }
      };

      function a(e, t) {
        if ("FragmentSpread" === e.kind) t.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var s = e.type;
          "NamedType" === s.kind && t.add(s.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          a(e, t)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          a(e, t)
        })), e.definitions && e.definitions.forEach((function(e) {
          a(e, t)
        }))
      }
      t.loc.source = {
        body: 'query GameData(\n    $titleSlug: String!\n    $locale: String!\n    $withMetaTitle: Boolean = false\n    $metaUrl: String = "/"\n) {\n    meta: metaUrl(locale: $locale, domain: "www", url: $metaUrl)\n        @include(if: $withMetaTitle) {\n        title\n    }\n    game(titleSlug: $titleSlug, locale: $locale) {\n        ratingDescriptors\n        ratingFooter\n        ratingImg\n        ratingUrl\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function r(e, t) {
        for (var a = 0; a < e.definitions.length; a++) {
          var s = e.definitions[a];
          if (s.name && s.name.value == t) return s
        }
      }
      t.definitions.forEach((function(e) {
        if (e.name) {
          var t = new Set;
          a(e, t), s[e.name.value] = t
        }
      })), e.exports = t, e.exports.GameData = function(e, t) {
        var a = {
          kind: e.kind,
          definitions: [r(e, t)]
        };
        e.hasOwnProperty("loc") && (a.loc = e.loc);
        var i = s[t] || new Set,
          n = new Set,
          o = new Set;
        for (i.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach((function(e) {
            n.has(e) || (n.add(e), (s[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return n.forEach((function(t) {
          var s = r(e, t);
          s && a.definitions.push(s)
        })), a
      }(t, "GameData")
    },
    94869: e => {
      var t = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "UserGetVote"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "foreign_id"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String"
                }
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "foreign_type"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String"
                }
              }
            },
            directives: []
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "userGetVote"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "foreign_id"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "foreign_id"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "foreign_type"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "foreign_type"
                  }
                }
              }],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "vote"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }]
          }
        }, {
          kind: "OperationDefinition",
          operation: "mutation",
          name: {
            kind: "Name",
            value: "UserCastVote"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "foreign_id"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String"
                }
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "foreign_type"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String"
                }
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "vote"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Boolean"
                }
              }
            },
            directives: []
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "userCastVote"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "foreign_id"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "foreign_id"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "foreign_type"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "foreign_type"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "vote"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "vote"
                  }
                }
              }],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "vote"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 394
        }
      };

      function a(e, t) {
        if ("FragmentSpread" === e.kind) t.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var s = e.type;
          "NamedType" === s.kind && t.add(s.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          a(e, t)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          a(e, t)
        })), e.definitions && e.definitions.forEach((function(e) {
          a(e, t)
        }))
      }
      t.loc.source = {
        body: "query UserGetVote($foreign_id: String!, $foreign_type: String!) {\n    userGetVote(foreign_id: $foreign_id, foreign_type: $foreign_type) {\n        vote\n    }\n}\n\nmutation UserCastVote(\n    $foreign_id: String!\n    $foreign_type: String!\n    $vote: Boolean!\n) {\n    userCastVote(\n        foreign_id: $foreign_id\n        foreign_type: $foreign_type\n        vote: $vote\n    ) {\n        vote\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function r(e, t) {
        for (var a = 0; a < e.definitions.length; a++) {
          var s = e.definitions[a];
          if (s.name && s.name.value == t) return s
        }
      }

      function i(e, t) {
        var a = {
          kind: e.kind,
          definitions: [r(e, t)]
        };
        e.hasOwnProperty("loc") && (a.loc = e.loc);
        var i = s[t] || new Set,
          n = new Set,
          o = new Set;
        for (i.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach((function(e) {
            n.has(e) || (n.add(e), (s[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return n.forEach((function(t) {
          var s = r(e, t);
          s && a.definitions.push(s)
        })), a
      }
      t.definitions.forEach((function(e) {
        if (e.name) {
          var t = new Set;
          a(e, t), s[e.name.value] = t
        }
      })), e.exports = t, e.exports.UserGetVote = i(t, "UserGetVote"), e.exports.UserCastVote = i(t, "UserCastVote")
    },
    31955: (e, t, a) => {
      var s = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "NewswireList"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "locale"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String"
                }
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "page"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int"
                }
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "limit"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int"
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "tagId"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int"
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "metaUrl"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String"
                }
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "cache"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Boolean"
              }
            },
            defaultValue: {
              kind: "BooleanValue",
              value: !0
            },
            directives: []
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              alias: {
                kind: "Name",
                value: "meta"
              },
              name: {
                kind: "Name",
                value: "metaUrl"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "url"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "metaUrl"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "domain"
                },
                value: {
                  kind: "StringValue",
                  value: "www",
                  block: !1
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "locale"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "locale"
                  }
                }
              }],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "title"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "posts"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "page"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "page"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "tagId"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "tagId"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "locale"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "locale"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "limit"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "limit"
                  }
                }
              }],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "paging"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "FragmentSpread",
                      name: {
                        kind: "Name",
                        value: "paging"
                      },
                      directives: []
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "results"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "FragmentSpread",
                      name: {
                        kind: "Name",
                        value: "postFields"
                      },
                      directives: []
                    }]
                  }
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 568
        }
      };
      s.loc.source = {
        body: '#import "@rockstargames/graph-client/operations/fragments/newswire-post.graphql"\n#import "@rockstargames/graph-client/operations/fragments/paging.graphql"\n\nquery NewswireList(\n    $locale: String!\n    $page: Int!\n    $limit: Int\n    $tagId: Int\n    $metaUrl: String!\n    $cache: Boolean = true\n) {\n    meta: metaUrl(url: $metaUrl, domain: "www", locale: $locale) {\n        title\n    }\n    posts(page: $page, tagId: $tagId, locale: $locale, limit: $limit) {\n        paging {\n            ...paging\n        }\n        results {\n            ...postFields\n        }\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var r = {};

      function i(e) {
        return e.filter((function(e) {
          if ("FragmentDefinition" !== e.kind) return !0;
          var t = e.name.value;
          return !r[t] && (r[t] = !0, !0)
        }))
      }

      function n(e, t) {
        if ("FragmentSpread" === e.kind) t.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var a = e.type;
          "NamedType" === a.kind && t.add(a.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          n(e, t)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          n(e, t)
        })), e.definitions && e.definitions.forEach((function(e) {
          n(e, t)
        }))
      }
      s.definitions = s.definitions.concat(i(a(90588).definitions)), s.definitions = s.definitions.concat(i(a(78417).definitions));
      var o = {};

      function c(e, t) {
        for (var a = 0; a < e.definitions.length; a++) {
          var s = e.definitions[a];
          if (s.name && s.name.value == t) return s
        }
      }
      s.definitions.forEach((function(e) {
        if (e.name) {
          var t = new Set;
          n(e, t), o[e.name.value] = t
        }
      })), e.exports = s, e.exports.NewswireList = function(e, t) {
        var a = {
          kind: e.kind,
          definitions: [c(e, t)]
        };
        e.hasOwnProperty("loc") && (a.loc = e.loc);
        var s = o[t] || new Set,
          r = new Set,
          i = new Set;
        for (s.forEach((function(e) {
            i.add(e)
          })); i.size > 0;) {
          var n = i;
          i = new Set, n.forEach((function(e) {
            r.has(e) || (r.add(e), (o[e] || new Set).forEach((function(e) {
              i.add(e)
            })))
          }))
        }
        return r.forEach((function(t) {
          var s = c(e, t);
          s && a.definitions.push(s)
        })), a
      }(s, "NewswireList")
    },
    72752: e => {
      var t = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "TinaModulesList"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "type"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String"
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "orderBy"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String"
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "orderDirection"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String"
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "locale"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String"
                }
              }
            },
            directives: []
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "tinaModulesList"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "type"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "type"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "orderBy"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "orderBy"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "orderDirection"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "orderDirection"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "locale"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "locale"
                  }
                }
              }],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "results"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      alias: {
                        kind: "Name",
                        value: "id"
                      },
                      name: {
                        kind: "Name",
                        value: "id_hash"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "name"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "type"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "tina"
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "id"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "payload"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "variables"
                          },
                          arguments: [],
                          directives: [],
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "keys"
                              },
                              arguments: [],
                              directives: []
                            }]
                          }
                        }]
                      }
                    }]
                  }
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 495
        }
      };

      function a(e, t) {
        if ("FragmentSpread" === e.kind) t.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var s = e.type;
          "NamedType" === s.kind && t.add(s.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          a(e, t)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          a(e, t)
        })), e.definitions && e.definitions.forEach((function(e) {
          a(e, t)
        }))
      }
      t.loc.source = {
        body: "query TinaModulesList(\n    $type: String\n    $orderBy: String\n    $orderDirection: String\n    $locale: String!\n) {\n    tinaModulesList(\n        type: $type\n        orderBy: $orderBy\n        orderDirection: $orderDirection\n        locale: $locale\n    ) {\n        results {\n            id: id_hash\n            name\n            type\n            tina {\n                id\n                payload\n                variables {\n                    keys\n                }\n            }\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function r(e, t) {
        for (var a = 0; a < e.definitions.length; a++) {
          var s = e.definitions[a];
          if (s.name && s.name.value == t) return s
        }
      }
      t.definitions.forEach((function(e) {
        if (e.name) {
          var t = new Set;
          a(e, t), s[e.name.value] = t
        }
      })), e.exports = t, e.exports.TinaModulesList = function(e, t) {
        var a = {
          kind: e.kind,
          definitions: [r(e, t)]
        };
        e.hasOwnProperty("loc") && (a.loc = e.loc);
        var i = s[t] || new Set,
          n = new Set,
          o = new Set;
        for (i.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach((function(e) {
            n.has(e) || (n.add(e), (s[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return n.forEach((function(t) {
          var s = r(e, t);
          s && a.definitions.push(s)
        })), a
      }(t, "TinaModulesList")
    },
    1956: e => {
      var t = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "TinaModulesInfo"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "ids"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String"
                  }
                }
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "locale"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String"
                }
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "sync"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Boolean"
              }
            },
            defaultValue: {
              kind: "BooleanValue",
              value: !1
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "cache"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Boolean"
              }
            },
            defaultValue: {
              kind: "BooleanValue",
              value: !1
            },
            directives: []
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "tinaModulesInfo"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "ids"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "ids"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "locale"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "locale"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "cache"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "cache"
                  }
                }
              }],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  alias: {
                    kind: "Name",
                    value: "id"
                  },
                  name: {
                    kind: "Name",
                    value: "id_hash"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "title"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "title_doc"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "type"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "sync_hash"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "to"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "visible"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "children"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "title"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "id_hash"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "to"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "tina"
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "payload"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "variables"
                          },
                          arguments: [],
                          directives: [],
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "keys"
                              },
                              arguments: [],
                              directives: []
                            }]
                          }
                        }]
                      }
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "tina"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "payload"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "variables"
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "keys"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "_translations"
                          },
                          arguments: [],
                          directives: [{
                            kind: "Directive",
                            name: {
                              kind: "Name",
                              value: "include"
                            },
                            arguments: [{
                              kind: "Argument",
                              name: {
                                kind: "Name",
                                value: "if"
                              },
                              value: {
                                kind: "Variable",
                                name: {
                                  kind: "Name",
                                  value: "sync"
                                }
                              }
                            }]
                          }],
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "locale"
                              },
                              arguments: [],
                              directives: []
                            }, {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "keys"
                              },
                              arguments: [],
                              directives: []
                            }]
                          }
                        }]
                      }
                    }]
                  }
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 742
        }
      };

      function a(e, t) {
        if ("FragmentSpread" === e.kind) t.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var s = e.type;
          "NamedType" === s.kind && t.add(s.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          a(e, t)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          a(e, t)
        })), e.definitions && e.definitions.forEach((function(e) {
          a(e, t)
        }))
      }
      t.loc.source = {
        body: "query TinaModulesInfo(\n    $ids: [String]!\n    $locale: String!\n    $sync: Boolean = false\n    $cache: Boolean = false\n) {\n    tinaModulesInfo(ids: $ids, locale: $locale, cache: $cache) {\n        id: id_hash\n        title\n        title_doc\n        type\n        sync_hash\n        to\n        visible\n        children {\n            title\n            id_hash\n            to\n            tina {\n                payload\n                variables {\n                    keys\n                }\n            }\n        }\n        tina {\n            payload\n            variables {\n                keys\n                _translations @include(if: $sync) {\n                    locale\n                    keys\n                }\n            }\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function r(e, t) {
        for (var a = 0; a < e.definitions.length; a++) {
          var s = e.definitions[a];
          if (s.name && s.name.value == t) return s
        }
      }
      t.definitions.forEach((function(e) {
        if (e.name) {
          var t = new Set;
          a(e, t), s[e.name.value] = t
        }
      })), e.exports = t, e.exports.TinaModulesInfo = function(e, t) {
        var a = {
          kind: e.kind,
          definitions: [r(e, t)]
        };
        e.hasOwnProperty("loc") && (a.loc = e.loc);
        var i = s[t] || new Set,
          n = new Set,
          o = new Set;
        for (i.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach((function(e) {
            n.has(e) || (n.add(e), (s[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return n.forEach((function(t) {
          var s = r(e, t);
          s && a.definitions.push(s)
        })), a
      }(t, "TinaModulesInfo")
    },
    4905: (e, t, a) => {
      var s = {
        "./cero_a.png": 81229,
        "./cero_b.svg": 67073,
        "./cero_c.svg": 31536,
        "./cero_d.svg": 81071,
        "./cero_rp.png": 92628,
        "./cero_z.svg": 40393,
        "./djctq_10.svg": 5251,
        "./djctq_12.svg": 53953,
        "./djctq_14.svg": 56623,
        "./djctq_16.svg": 6141,
        "./djctq_18.svg": 79835,
        "./djctq_er.svg": 47173,
        "./djctq_l.svg": 11524,
        "./esrb_ao.svg": 57902,
        "./esrb_e.svg": 18287,
        "./esrb_e10plus.svg": 33396,
        "./esrb_m.svg": 40871,
        "./esrb_m_ao.svg": 16938,
        "./esrb_rp.svg": 6960,
        "./esrb_rplm17.svg": 58473,
        "./esrb_t.svg": 31470,
        "./fpb_13.svg": 40908,
        "./fpb_16.svg": 497,
        "./fpb_18.svg": 13175,
        "./fpb_pg.svg": 95219,
        "./grac_12.svg": 61482,
        "./grac_15.svg": 68341,
        "./grac_18.svg": 71824,
        "./grac_19.svg": 7361,
        "./grac_a.svg": 5560,
        "./gsrr_0.svg": 45120,
        "./gsrr_12.svg": 24465,
        "./gsrr_15.svg": 42638,
        "./gsrr_18.svg": 32875,
        "./gsrr_6.svg": 82574,
        "./nmc_12.svg": 93911,
        "./nmc_16.svg": 37675,
        "./nmc_18.svg": 58157,
        "./nmc_21.svg": 78525,
        "./nmc_3.svg": 59109,
        "./nmc_7.svg": 62569,
        "./oflc_g.svg": 49809,
        "./oflc_m.svg": 58219,
        "./oflc_ma15.svg": 28718,
        "./oflc_pg.svg": 94509,
        "./oflc_r18.svg": 90615,
        "./pegi_12.svg": 37620,
        "./pegi_16.svg": 87880,
        "./pegi_18.svg": 83454,
        "./pegi_3.svg": 93672,
        "./pegi_4.svg": 96071,
        "./pegi_6.svg": 69493,
        "./pegi_7.svg": 47860,
        "./pegi_rp.png": 97852,
        "./rars_0.svg": 32628,
        "./rars_12.svg": 25757,
        "./rars_16.svg": 80513,
        "./rars_18.svg": 69959,
        "./rars_6.svg": 41514,
        "./usk_0.svg": 20507,
        "./usk_12.svg": 86196,
        "./usk_16.svg": 32008,
        "./usk_18.svg": 27582,
        "./usk_6.svg": 33813,
        "./usk_rp.svg": 77579,
        "./vaci_rp.png": 92674
      };

      function r(e) {
        var t = i(e);
        return a(t)
      }

      function i(e) {
        if (!a.o(s, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        }
        return s[e]
      }
      r.keys = function() {
        return Object.keys(s)
      }, r.resolve = i, e.exports = r, r.id = 4905
    },
    73983: (e, t, a) => {
      var s = {
        "./cero_a.png": 81229,
        "./cero_b.svg": 67073,
        "./cero_c.svg": 31536,
        "./cero_d.svg": 81071,
        "./cero_rp.png": 92628,
        "./cero_z.svg": 40393,
        "./djctq_10.svg": 5251,
        "./djctq_12.svg": 53953,
        "./djctq_14.svg": 56623,
        "./djctq_16.svg": 6141,
        "./djctq_18.svg": 79835,
        "./djctq_er.svg": 47173,
        "./djctq_l.svg": 11524,
        "./esrb_ao.svg": 57902,
        "./esrb_e.svg": 18287,
        "./esrb_e10plus.svg": 33396,
        "./esrb_m.svg": 40871,
        "./esrb_m_ao.svg": 16938,
        "./esrb_rp.svg": 6960,
        "./esrb_rplm17.svg": 58473,
        "./esrb_t.svg": 31470,
        "./fpb_13.svg": 40908,
        "./fpb_16.svg": 497,
        "./fpb_18.svg": 13175,
        "./fpb_pg.svg": 95219,
        "./grac_12.svg": 61482,
        "./grac_15.svg": 68341,
        "./grac_18.svg": 71824,
        "./grac_19.svg": 7361,
        "./grac_a.svg": 5560,
        "./gsrr_0.svg": 45120,
        "./gsrr_12.svg": 24465,
        "./gsrr_15.svg": 42638,
        "./gsrr_18.svg": 32875,
        "./gsrr_6.svg": 82574,
        "./nmc_12.svg": 93911,
        "./nmc_16.svg": 37675,
        "./nmc_18.svg": 58157,
        "./nmc_21.svg": 78525,
        "./nmc_3.svg": 59109,
        "./nmc_7.svg": 62569,
        "./oflc_g.svg": 49809,
        "./oflc_m.svg": 58219,
        "./oflc_ma15.svg": 28718,
        "./oflc_pg.svg": 94509,
        "./oflc_r18.svg": 90615,
        "./pegi_12.svg": 37620,
        "./pegi_16.svg": 87880,
        "./pegi_18.svg": 83454,
        "./pegi_3.svg": 93672,
        "./pegi_4.svg": 96071,
        "./pegi_6.svg": 69493,
        "./pegi_7.svg": 47860,
        "./pegi_rp.png": 97852,
        "./rars_0.svg": 32628,
        "./rars_12.svg": 25757,
        "./rars_16.svg": 80513,
        "./rars_18.svg": 69959,
        "./rars_6.svg": 41514,
        "./usk_0.svg": 20507,
        "./usk_12.svg": 86196,
        "./usk_16.svg": 32008,
        "./usk_18.svg": 27582,
        "./usk_6.svg": 33813,
        "./usk_rp.svg": 77579,
        "./vaci_rp.png": 92674
      };

      function r(e) {
        var t = i(e);
        return a(t)
      }

      function i(e) {
        if (!a.o(s, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        }
        return s[e]
      }
      r.keys = function() {
        return Object.keys(s)
      }, r.resolve = i, e.exports = r, r.id = 73983
    },
    43202: (e, t, a) => {
      var s = {
        "./GTAOnline.jpg": 10046,
        "./GTATrilogy.jpg": 58679,
        "./IV.jpg": 60104,
        "./V.jpg": 15007,
        "./VI/desktop.png": 94699,
        "./VI/mobile.png": 17821,
        "./agent.jpg": 65682,
        "./beaterator.jpg": 45024,
        "./bully-scholarshipedition.jpg": 38910,
        "./bully.jpg": 58205,
        "./chinatownwars.jpg": 48057,
        "./episodesfromlibertycity.jpg": 97955,
        "./grandtheftauto-gba.jpg": 99826,
        "./grandtheftauto3.jpg": 23686,
        "./gta-online.jpg": 34747,
        "./gta-v.jpg": 44342,
        "./gta.jpg": 4019,
        "./gta2.jpg": 32217,
        "./gtacomplete.jpg": 63970,
        "./gtalondon.jpg": 63201,
        "./italianjob.jpg": 27976,
        "./lanoire-vr-case-files.jpg": 57743,
        "./lanoire.jpg": 61451,
        "./lanoire_2.jpg": 67680,
        "./libertycitystories.jpg": 76766,
        "./manhunt.jpg": 61490,
        "./manhunt2.jpg": 85010,
        "./maxpayne.jpg": 85006,
        "./maxpayne2.jpg": 77126,
        "./maxpayne3.jpg": 15651,
        "./midnightclub.jpg": 57741,
        "./midnightclub2.jpg": 85171,
        "./midnightclub3.jpg": 22006,
        "./midnightclubLA-complete.jpg": 89550,
        "./midnightclubLA.jpg": 56204,
        "./oni.jpg": 94417,
        "./rdr-goty.jpg": 56647,
        "./reddeadonline.jpg": 31271,
        "./reddeadredemption.jpg": 51789,
        "./reddeadredemption2.jpg": 7891,
        "./reddeadrevolver.jpg": 73195,
        "./rockstar-games-collection-edition-1.jpg": 93564,
        "./sanandreas.jpg": 9655,
        "./skateanddestroy.jpg": 61748,
        "./smugglersrun.jpg": 40499,
        "./smugglersrun2.jpg": 7737,
        "./smugglersrunwarzones.jpg": 39528,
        "./stateofemergency.jpg": 55582,
        "./tabletennis.jpg": 20724,
        "./theballadofgaytony.jpg": 14786,
        "./thelostanddamned.jpg": 74540,
        "./thewarriors.jpg": 80173,
        "./undeadnightmare.jpg": 81919,
        "./vicecity.jpg": 31527,
        "./vicecitystories.jpg": 43048,
        "./wildmetal.jpg": 51652
      };

      function r(e) {
        var t = i(e);
        return a(t)
      }

      function i(e) {
        if (!a.o(s, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        }
        return s[e]
      }
      r.keys = function() {
        return Object.keys(s)
      }, r.resolve = i, e.exports = r, r.id = 43202
    },
    32781: (e, t, a) => {
      var s = {
        "./GTAOnline.jpg": 10046,
        "./GTATrilogy.jpg": 58679,
        "./IV.jpg": 60104,
        "./V.jpg": 15007,
        "./agent.jpg": 65682,
        "./beaterator.jpg": 45024,
        "./bully-scholarshipedition.jpg": 38910,
        "./bully.jpg": 58205,
        "./chinatownwars.jpg": 48057,
        "./episodesfromlibertycity.jpg": 97955,
        "./grandtheftauto-gba.jpg": 99826,
        "./grandtheftauto3.jpg": 23686,
        "./gta-online.jpg": 34747,
        "./gta-v.jpg": 44342,
        "./gta.jpg": 4019,
        "./gta2.jpg": 32217,
        "./gtacomplete.jpg": 63970,
        "./gtalondon.jpg": 63201,
        "./italianjob.jpg": 27976,
        "./lanoire-vr-case-files.jpg": 57743,
        "./lanoire.jpg": 61451,
        "./lanoire_2.jpg": 67680,
        "./libertycitystories.jpg": 76766,
        "./manhunt.jpg": 61490,
        "./manhunt2.jpg": 85010,
        "./maxpayne.jpg": 85006,
        "./maxpayne2.jpg": 77126,
        "./maxpayne3.jpg": 15651,
        "./midnightclub.jpg": 57741,
        "./midnightclub2.jpg": 85171,
        "./midnightclub3.jpg": 22006,
        "./midnightclubLA-complete.jpg": 89550,
        "./midnightclubLA.jpg": 56204,
        "./oni.jpg": 94417,
        "./rdr-goty.jpg": 56647,
        "./reddeadonline.jpg": 31271,
        "./reddeadredemption.jpg": 51789,
        "./reddeadredemption2.jpg": 7891,
        "./reddeadrevolver.jpg": 73195,
        "./rockstar-games-collection-edition-1.jpg": 93564,
        "./sanandreas.jpg": 9655,
        "./skateanddestroy.jpg": 61748,
        "./smugglersrun.jpg": 40499,
        "./smugglersrun2.jpg": 7737,
        "./smugglersrunwarzones.jpg": 39528,
        "./stateofemergency.jpg": 55582,
        "./tabletennis.jpg": 20724,
        "./theballadofgaytony.jpg": 14786,
        "./thelostanddamned.jpg": 74540,
        "./thewarriors.jpg": 80173,
        "./undeadnightmare.jpg": 81919,
        "./vicecity.jpg": 31527,
        "./vicecitystories.jpg": 43048,
        "./wildmetal.jpg": 51652
      };

      function r(e) {
        var t = i(e);
        return a(t)
      }

      function i(e) {
        if (!a.o(s, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        }
        return s[e]
      }
      r.keys = function() {
        return Object.keys(s)
      }, r.resolve = i, e.exports = r, r.id = 32781
    },
    65392: (e, t, a) => {
      var s = {
        "./VI/desktop.png": 94699
      };

      function r(e) {
        var t = i(e);
        return a(t)
      }

      function i(e) {
        if (!a.o(s, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        }
        return s[e]
      }
      r.keys = function() {
        return Object.keys(s)
      }, r.resolve = i, e.exports = r, r.id = 65392
    },
    17426: (e, t, a) => {
      var s = {
        "./VI/mobile.png": 17821
      };

      function r(e) {
        var t = i(e);
        return a(t)
      }

      function i(e) {
        if (!a.o(s, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        }
        return s[e]
      }
      r.keys = function() {
        return Object.keys(s)
      }, r.resolve = i, e.exports = r, r.id = 17426
    },
    68128: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/44d747ec4a149ad5386114f6b5c60f2d.svg"
    },
    81764: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a29e26aa160e7be7e845708c335b3c39.svg"
    },
    81229: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51b141250a4851d7ec3673d88dbd20a.png"
    },
    67073: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7ac89f9e00ded04ef4b2dd3eaf3e8734.svg"
    },
    31536: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f44dd7aad9d6c62e40a11f51252f59b8.svg"
    },
    81071: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/204116b24cd9e9ab4e71af21b3a96179.svg"
    },
    92628: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/676b3908098d8b19f1019ce361af45ec.png"
    },
    40393: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/03ab76c58ed61a83bf035c923dbe32b2.svg"
    },
    5251: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f468aef6f0b5399d5c0f6b2e95b60cc5.svg"
    },
    53953: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0b31c79d361cfd92e1a405dbbf4890bd.svg"
    },
    56623: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3689ac97526f00a4537e1b38ec82a074.svg"
    },
    6141: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/07f9f9e93ec430813e74cbce545962c4.svg"
    },
    79835: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/608f591c35aff9d47091dd7fe9a8fb13.svg"
    },
    47173: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/198ced82807c854e92e84e23f7434c91.svg"
    },
    11524: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/edf01daa4f0392081705c17a74d8a146.svg"
    },
    57902: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c4dd58f5b5b97796b6c6177de364dd36.svg"
    },
    18287: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/201de0eb81b09ea93aa1aef2a6824b7c.svg"
    },
    33396: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/534078f6307f97ce0d70e0bb885f9d77.svg"
    },
    40871: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f4b0d9409df1e8a420b2118e4e601263.svg"
    },
    16938: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/092865e0ddae5190dc3c0284ee3c21bd.svg"
    },
    6960: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/80dd50a2fa9aae3b5d6effdb2d9c2661.svg"
    },
    58473: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5d471eef7883043fdabe1b3ed17a72b3.svg"
    },
    31470: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/35cf853d7882b090b56837bd08127da1.svg"
    },
    40908: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/72e8749316b4d1f52925b95e075e9c24.svg"
    },
    497: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c2acdad576048f5c48b2ee6a2a2a90a3.svg"
    },
    13175: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f52c5ab315a1ff90360e06372c3f2c0.svg"
    },
    95219: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d1f569db6c94b4f81417f62e91759082.svg"
    },
    61482: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fe262661c6667d97f441e045067f4a0f.svg"
    },
    68341: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1b457cab77cb82e1c05ad12628414576.svg"
    },
    71824: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1a3660d76f39527a79f8a49bb27a74be.svg"
    },
    7361: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1a3660d76f39527a79f8a49bb27a74be.svg"
    },
    5560: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/515f2884036e870905ae53f156692721.svg"
    },
    45120: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a3931a545299e205758648bce29e5c49.svg"
    },
    24465: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/05e9f2f27883d4cbabb3d4e4e16c9c74.svg"
    },
    42638: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f2fc4de3decfa0ac007f6cbd91658a9.svg"
    },
    32875: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cd57122be57f5e3a9dc4d0a0f2503fb1.svg"
    },
    82574: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2d910a48fc0914f58ca80dc0732a7677.svg"
    },
    93911: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6e99540df7fd07d75b08a5fbc02d4815.svg"
    },
    37675: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/937b7a0c5a128c39addf2adeba2d2f23.svg"
    },
    58157: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/46a27d8d16855dcc2a217f48243c6d82.svg"
    },
    78525: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e5792c85d5a88a0b7c75af087e4c6ee2.svg"
    },
    59109: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4da522682784ded3799c5a6f9f8c213a.svg"
    },
    62569: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/29ea20c333709a952c2eb3a2591d435d.svg"
    },
    49809: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7c66fbb7c204e32da80ccb1693d15e00.svg"
    },
    58219: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/954d63889440be17e1ebef30b7026369.svg"
    },
    28718: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2eb8777f38cbd4d721261ad736c1f2e7.svg"
    },
    94509: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6079496697e537802f8a0eb5a83d2e94.svg"
    },
    90615: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a2a19fbf81b03db0fda00839496a3ce5.svg"
    },
    37620: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/129ef1c1a15ffc7afb86ce282e48decb.svg"
    },
    87880: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a2a5d9ca87a5bd107da9bb33d3d718e8.svg"
    },
    83454: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dabd13175cc0894dcb3f942d3d2dab86.svg"
    },
    93672: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/64d281825da1c782681bcc096d693e32.svg"
    },
    96071: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b43dddd485139df895fc531e79c75e68.svg"
    },
    69493: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c01f38f1051e751caa633d533202873c.svg"
    },
    47860: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/27a26f477c8db29df4ceec4517c7f42b.svg"
    },
    97852: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a380d3ce353544a356e8ce48f8586804.png"
    },
    32628: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/bba2f70e014e82b336a9f80625053089.svg"
    },
    25757: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/85250e8a0e5a5a1209f214423f6ebe43.svg"
    },
    80513: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f1a94d5705ae3ddeb4c8c2fde79bfe81.svg"
    },
    69959: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a825976dddc59e33b3ce146ad6cd3d20.svg"
    },
    41514: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/01b0cd4466759aa349ac4036594ab6ae.svg"
    },
    20507: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9c699f3b76c15209c8059f02507e11b5.svg"
    },
    86196: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b48e041f1412ff62c8a92dc424b59aa5.svg"
    },
    32008: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/07362df5a2671c08b232a97d503cd6bf.svg"
    },
    27582: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c3fe2a9610ca8b42807dfa99073d68b3.svg"
    },
    33813: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/056d3bdf1f300bcb7efa4aebcfc5224d.svg"
    },
    77579: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/278e84e5a41407499c43a30f545da3e8.svg"
    },
    92674: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/703a546f7a5109c1e2af87a212135aad.png"
    },
    10046: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5dc0952c9e5beba577aeffe0289478bd.jpg"
    },
    58679: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/214a1cd1a2e7bb8f9b1e5d3846ca2993.jpg"
    },
    60104: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0b01707ef5603a26c1f542088f8f7c09.jpg"
    },
    15007: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ccac790d960f612fa0746c78b8052926.jpg"
    },
    94699: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f1aba112359a3d6747ad694a8c02a07c.png"
    },
    17821: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/26f95aa7677031d8cd56ea75250c7bdd.png"
    },
    65682: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5d66bfe06a724f04c0941073de283297.jpg"
    },
    45024: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1b95ab415fdd8bec89099d433d23e3c7.jpg"
    },
    38910: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5704d117b387578dfebe1290e556f963.jpg"
    },
    58205: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f58d386594d32f34c887da75032c5be.jpg"
    },
    48057: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a8074783730a47af2fe5c2b67ddf7d31.jpg"
    },
    97955: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0281770395dc77e41c1f40559a3d5989.jpg"
    },
    99826: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/15b671d990b1f3f941c6359b3235abf3.jpg"
    },
    23686: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/81001f378e085cd20f8ee0182e23cb7c.jpg"
    },
    34747: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5dc0952c9e5beba577aeffe0289478bd.jpg"
    },
    44342: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ccac790d960f612fa0746c78b8052926.jpg"
    },
    4019: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f34231941013a609948485830c84c072.jpg"
    },
    32217: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/48371205a1d87d858baa85712d1f91bb.jpg"
    },
    63970: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/089fe525338554e2120a1aaaf81766d6.jpg"
    },
    63201: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dbc4dbe3e1d52c3fc405579090868d08.jpg"
    },
    27976: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/809c3d6f72a6752f0ebcc6c92d43db67.jpg"
    },
    57743: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b13400360d3873aa5ed169d38da1ff9f.jpg"
    },
    61451: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b1034f3c525b39db31d9017268a0aeb5.jpg"
    },
    67680: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b1034f3c525b39db31d9017268a0aeb5.jpg"
    },
    76766: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ab528316ca7d31c2b041b62c4ce5dd36.jpg"
    },
    61490: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fa649a5d6b52121271093a7c564cc56a.jpg"
    },
    85010: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/116555df6799e584310484375c97a43f.jpg"
    },
    85006: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fd74a091e2e5765c8769668cc515e494.jpg"
    },
    77126: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0e7d916fcce2bbe9b6419f914f290597.jpg"
    },
    15651: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0f31b4df90bff5bab740485f2d4b8253.jpg"
    },
    57741: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dd4b0f40e745f4347c822594da56a119.jpg"
    },
    85171: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/774943ec47ce732040f48df3943a0a7c.jpg"
    },
    22006: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e8ae1f733bc7d3b05c506de67f4b4f7f.jpg"
    },
    89550: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a549b321910f5308200496f1893c2a5f.jpg"
    },
    56204: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/659db20d7a19cc70a0510c7d197cedf3.jpg"
    },
    94417: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8977d6b170f295068d78c5bbb7b6f02d.jpg"
    },
    56647: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61a79de8dea0228576a18068e4f2660a.jpg"
    },
    31271: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dbc01cf29aa31b9d15a5d06483a0a1a3.jpg"
    },
    51789: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5aa471f90eaff248e0fbef79400cbbf3.jpg"
    },
    7891: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/082b847bcab37655faf903149f80f1e4.jpg"
    },
    73195: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2d3ee871568fd751956d5ea1242a4f2d.jpg"
    },
    93564: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f79f3baf4a020b34cf9d3cf29d71f4e.jpg"
    },
    9655: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/bbcbd2a2bb65ddad76e831c91c17b421.jpg"
    },
    61748: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a69bebbefae64314172002dd2bae0a34.jpg"
    },
    40499: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4393d2466a2f8931669e345898541812.jpg"
    },
    7737: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4a1657ff0ab4e3d45469556ba2f899c3.jpg"
    },
    39528: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/16e65ca64eafabe331ef1d2bef9c6f16.jpg"
    },
    55582: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/404be4f04081372768bb660a6c1991ba.jpg"
    },
    20724: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5df3b2d018d1e8e9b424b9eaebc86b16.jpg"
    },
    14786: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/14448aca4ceaab8680323ce19c963d68.jpg"
    },
    74540: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f9b044c847e4c971c6ac5d096fe3e0eb.jpg"
    },
    80173: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5239707dea0f2f4ea8351f64e6b5a921.jpg"
    },
    81919: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/14312e604f0637a2afd376dd571345d9.jpg"
    },
    31527: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6bf5412b358a42300603159932412051.jpg"
    },
    43048: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c82125e0b20342dba2008b0dcc6d55f6.jpg"
    },
    51652: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5d0b53035bf66e851116bd0244ba6ace.jpg"
    },
    96165: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c050b43f15f34e2cd0592fad6dc48fd.svg"
    },
    90837: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1506c5bba61fa270f73c874e3d60a94f.svg"
    },
    82275: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3f9f55567df4006813f8bf50ad383ea0.svg"
    },
    44338: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6e8f340ded0fd6b0b0d434e8c6c8b75e.svg"
    },
    73870: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/925d3b2d0b0e784c366e20d3f1a660da.svg"
    },
    19169: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d6d2cb861c79506282c6d6cbf1170f81.svg"
    },
    47483: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f91e4753c491fb23c2b364f69480c9e.svg"
    },
    67245: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/205366df6706c3b367fb5ff4f26ab7f3.svg"
    },
    71354: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7563ed0414306d18d4f8401effcab31a.svg"
    },
    51360: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fd3b8222b81c51f8a6ae266c805c98a6.png"
    },
    32863: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f002a20c79ea2264ca52456194ef5b48.svg"
    }
  }
]);