! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "66bd844d-d89c-48b4-9a47-343479902431", e._sentryDebugIdIdentifier = "sentry-dbid-66bd844d-d89c-48b4-9a47-343479902431")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-legacy",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || []).push([
  [992], {
    77100: (e, t, a) => {
      "use strict";
      a.d(t, {
        ML: () => Na,
        cp: () => ni,
        w$: () => ni
      });
      let s, i, r, n, c, o, l, d, m, g, u, f = {
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
        _ = 1e8,
        h = 1e-8,
        k = 2 * Math.PI,
        b = k / 4,
        v = 0,
        y = Math.sqrt,
        x = Math.cos,
        w = Math.sin,
        N = e => "string" == typeof e,
        j = e => "function" == typeof e,
        S = e => "number" == typeof e,
        T = e => void 0 === e,
        C = e => "object" == typeof e,
        M = e => !1 !== e,
        I = () => "undefined" != typeof window,
        E = e => j(e) || N(e),
        L = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {},
        z = Array.isArray,
        P = /(?:-?\.?\d|\.)+/gi,
        O = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        A = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        D = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        B = /[+-]=-?[.\d]+/,
        V = /[^,'"\[\]\s]+/gi,
        F = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
        R = {},
        $ = {},
        U = e => ($ = ke(e, R)) && ya,
        G = (e, t) => console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()"),
        H = (e, t) => !t && console.warn(e),
        W = (e, t) => e && (R[e] = t) && $ && ($[e] = t) || R,
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
        K = {
          suppressEvents: !0
        },
        Q = {},
        Z = [],
        J = {},
        ee = {},
        te = {},
        ae = 30,
        se = [],
        ie = "",
        re = e => {
          let t, a, s = e[0];
          if (C(s) || j(s) || (e = [e]), !(t = (s._gsap || {}).harness)) {
            for (a = se.length; a-- && !se[a].targetTest(s););
            t = se[a]
          }
          for (a = e.length; a--;) e[a] && (e[a]._gsap || (e[a]._gsap = new Ot(e[a], t))) || e.splice(a, 1);
          return e
        },
        ne = e => e._gsap || re(Ye(e))[0]._gsap,
        ce = (e, t, a) => (a = e[t]) && j(a) ? e[t]() : T(a) && e.getAttribute && e.getAttribute(t) || a,
        oe = (e, t) => (e = e.split(",")).forEach(t) || e,
        le = e => Math.round(1e5 * e) / 1e5 || 0,
        de = e => Math.round(1e7 * e) / 1e7 || 0,
        me = (e, t) => {
          let a = t.charAt(0),
            s = parseFloat(t.substr(2));
          return e = parseFloat(e), "+" === a ? e + s : "-" === a ? e - s : "*" === a ? e * s : e / s
        },
        ge = (e, t) => {
          let a = t.length,
            s = 0;
          for (; e.indexOf(t[s]) < 0 && ++s < a;);
          return s < a
        },
        ue = () => {
          let e, t, a = Z.length,
            s = Z.slice(0);
          for (J = {}, Z.length = 0, e = 0; e < a; e++) t = s[e], t && t._lazy && (t.render(t._lazy[0], t._lazy[1], !0)._lazy = 0)
        },
        fe = (e, t, a, s) => {
          Z.length && !i && ue(), e.render(t, a, s || i && t < 0 && (e._initted || e._startAt)), Z.length && !i && ue()
        },
        pe = e => {
          let t = parseFloat(e);
          return (t || 0 === t) && (e + "").match(V).length < 2 ? t : N(e) ? e.trim() : e
        },
        _e = e => e,
        he = (e, t) => {
          for (let a in t) a in e || (e[a] = t[a]);
          return e
        },
        ke = (e, t) => {
          for (let a in t) e[a] = t[a];
          return e
        },
        be = (e, t) => {
          for (let a in t) "__proto__" !== a && "constructor" !== a && "prototype" !== a && (e[a] = C(t[a]) ? be(e[a] || (e[a] = {}), t[a]) : t[a]);
          return e
        },
        ve = (e, t) => {
          let a, s = {};
          for (a in e) a in t || (s[a] = e[a]);
          return s
        },
        ye = e => {
          let t = e.parent || n,
            a = e.keyframes ? (s = z(e.keyframes), (e, t) => {
              for (let a in t) a in e || "duration" === a && s || "ease" === a || (e[a] = t[a])
            }) : he;
          var s;
          if (M(e.inherit))
            for (; t;) a(e, t.vars.defaults), t = t.parent || t._dp;
          return e
        },
        xe = function(e, t) {
          let a, s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "_first",
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "_last",
            r = arguments.length > 4 ? arguments[4] : void 0,
            n = e[i];
          if (r)
            for (a = t[r]; n && n[r] > a;) n = n._prev;
          return n ? (t._next = n._next, n._next = t) : (t._next = e[s], e[s] = t), t._next ? t._next._prev = t : e[i] = t, t._prev = n, t.parent = t._dp = e, t
        },
        we = function(e, t) {
          let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "_first",
            s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "_last",
            i = t._prev,
            r = t._next;
          i ? i._next = r : e[a] === t && (e[a] = r), r ? r._prev = i : e[s] === t && (e[s] = i), t._next = t._prev = t.parent = null
        },
        Ne = (e, t) => {
          e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e), e._act = 0
        },
        je = (e, t) => {
          if (e && (!t || t._end > e._dur || t._start < 0)) {
            let t = e;
            for (; t;) t._dirty = 1, t = t.parent
          }
          return e
        },
        Se = (e, t, a, s) => e._startAt && (i ? e._startAt.revert(Y) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(t, !0, s)),
        Te = e => !e || e._ts && Te(e.parent),
        Ce = e => e._repeat ? Me(e._tTime, e = e.duration() + e._rDelay) * e : 0,
        Me = (e, t) => {
          let a = Math.floor(e /= t);
          return e && a === e ? a - 1 : a
        },
        Ie = (e, t) => (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur),
        Ee = e => e._end = de(e._start + (e._tDur / Math.abs(e._ts || e._rts || h) || 0)),
        Le = (e, t) => {
          let a = e._dp;
          return a && a.smoothChildTiming && e._ts && (e._start = de(a._time - (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)), Ee(e), a._dirty || je(a, e)), e
        },
        ze = (e, t) => {
          let a;
          if ((t._time || !t._dur && t._initted || t._start < e._time && (t._dur || !t.add)) && (a = Ie(e.rawTime(), t), (!t._dur || He(0, t.totalDuration(), a) - t._tTime > h) && t.render(a, !0)), je(e, t)._dp && e._initted && e._time >= e._dur && e._ts) {
            if (e._dur < e.duration())
              for (a = e; a._dp;) a.rawTime() >= 0 && a.totalTime(a._tTime), a = a._dp;
            e._zTime = -1e-8
          }
        },
        Pe = (e, t, a, s) => (t.parent && Ne(t), t._start = de((S(a) ? a : a || e !== n ? $e(e, a, t) : e._time) + t._delay), t._end = de(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)), xe(e, t, "_first", "_last", e._sort ? "_start" : 0), Be(t) || (e._recent = t), s || ze(e, t), e._ts < 0 && Le(e, e._tTime), e),
        Oe = (e, t) => (R.ScrollTrigger || G("scrollTrigger", t)) && R.ScrollTrigger.create(t, e),
        Ae = (e, t, a, s, r) => (Ut(e, t, r), e._initted ? !a && e._pt && !i && (e._dur && !1 !== e.vars.lazy || !e._dur && e.vars.lazy) && m !== xt.frame ? (Z.push(e), e._lazy = [r, s], 1) : void 0 : 1),
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
          let i = e._repeat,
            r = de(t) || 0,
            n = e._tTime / e._tDur;
          return n && !s && (e._time *= r / e._dur), e._dur = r, e._tDur = i ? i < 0 ? 1e10 : de(r * (i + 1) + e._rDelay * i) : r, n > 0 && !s && Le(e, e._tTime = e._tDur * n), e.parent && Ee(e), a || je(e.parent, e), e
        },
        Fe = e => e instanceof Dt ? je(e) : Ve(e, e._dur),
        Re = {
          _start: 0,
          endTime: q,
          totalDuration: q
        },
        $e = (e, t, a) => {
          let s, i, r, n = e.labels,
            c = e._recent || Re,
            o = e.duration() >= _ ? c.endTime(!1) : e._dur;
          return N(t) && (isNaN(t) || t in n) ? (i = t.charAt(0), r = "%" === t.substr(-1), s = t.indexOf("="), "<" === i || ">" === i ? (s >= 0 && (t = t.replace(/=/, "")), ("<" === i ? c._start : c.endTime(c._repeat >= 0)) + (parseFloat(t.substr(1)) || 0) * (r ? (s < 0 ? c : a).totalDuration() / 100 : 1)) : s < 0 ? (t in n || (n[t] = o), n[t]) : (i = parseFloat(t.charAt(s - 1) + t.substr(s + 1)), r && a && (i = i / 100 * (z(a) ? a[0] : a).totalDuration()), s > 1 ? $e(e, t.substr(0, s - 1), a) + i : o + i)) : null == t ? o : +t
        },
        Ue = (e, t, a) => {
          let s, i, r = S(t[1]),
            n = (r ? 2 : 1) + (e < 2 ? 0 : 1),
            c = t[n];
          if (r && (c.duration = t[1]), c.parent = a, e) {
            for (s = c, i = a; i && !("immediateRender" in s);) s = i.vars.defaults || {}, i = M(i.vars.inherit) && i.parent;
            c.immediateRender = M(s.immediateRender), e < 2 ? c.runBackwards = 1 : c.startAt = t[n - 1]
          }
          return new Xt(t[0], c, t[n + 1])
        },
        Ge = (e, t) => e || 0 === e ? t(e) : t,
        He = (e, t, a) => a < e ? e : a > t ? t : a,
        We = (e, t) => N(e) && (t = F.exec(e)) ? t[1] : "",
        qe = [].slice,
        Xe = (e, t) => e && C(e) && "length" in e && (!t && !e.length || e.length - 1 in e && C(e[0])) && !e.nodeType && e !== c,
        Ye = (e, t, a) => r && !t && r.selector ? r.selector(e) : !N(e) || a || !o && wt() ? z(e) ? function(e, t) {
          let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          return e.forEach((e => N(e) && !t || Xe(e, 1) ? a.push(...Ye(e)) : a.push(e))) || a
        }(e, a) : Xe(e) ? qe.call(e, 0) : e ? [e] : [] : qe.call((t || l).querySelectorAll(e), 0),
        Ke = e => (e = Ye(e)[0] || H("Invalid scope") || {}, t => {
          let a = e.current || e.nativeElement || e;
          return Ye(t, a.querySelectorAll ? a : a === e ? H("Invalid scope") || l.createElement("div") : e)
        }),
        Qe = e => e.sort((() => .5 - Math.random())),
        Ze = e => {
          if (j(e)) return e;
          let t = C(e) ? e : {
              each: e
            },
            a = It(t.ease),
            s = t.from || 0,
            i = parseFloat(t.base) || 0,
            r = {},
            n = s > 0 && s < 1,
            c = isNaN(s) || n,
            o = t.axis,
            l = s,
            d = s;
          return N(s) ? l = d = {
            center: .5,
            edges: .5,
            end: 1
          } [s] || 0 : !n && c && (l = s[0], d = s[1]), (e, n, m) => {
            let g, u, f, p, h, k, b, v, x, w = (m || t).length,
              N = r[w];
            if (!N) {
              if (x = "auto" === t.grid ? 0 : (t.grid || [1, _])[1], !x) {
                for (b = -_; b < (b = m[x++].getBoundingClientRect().left) && x < w;);
                x--
              }
              for (N = r[w] = [], g = c ? Math.min(x, w) * l - .5 : s % x, u = x === _ ? 0 : c ? w * d / x - .5 : s / x | 0, b = 0, v = _, k = 0; k < w; k++) f = k % x - g, p = u - (k / x | 0), N[k] = h = o ? Math.abs("y" === o ? p : f) : y(f * f + p * p), h > b && (b = h), h < v && (v = h);
              "random" === s && Qe(N), N.max = b - v, N.min = v, N.v = w = (parseFloat(t.amount) || parseFloat(t.each) * (x > w ? w - 1 : o ? "y" === o ? w / x : x : Math.max(x, w / x)) || 0) * ("edges" === s ? -1 : 1), N.b = w < 0 ? i - w : i, N.u = We(t.amount || t.each) || 0, a = a && w < 0 ? Ct(a) : a
            }
            return w = (N[e] - N.min) / N.max || 0, de(N.b + (a ? a(w) : w) * N.v) + N.u
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
          let a, s, i = z(e);
          return !i && C(e) && (a = i = e.radius || _, e.values ? (e = Ye(e.values), (s = !S(e[0])) && (a *= a)) : e = Je(e.increment)), Ge(t, i ? j(e) ? t => (s = e(t), Math.abs(s - t) <= a ? s : t) : t => {
            let i, r, n = parseFloat(s ? t.x : t),
              c = parseFloat(s ? t.y : 0),
              o = _,
              l = 0,
              d = e.length;
            for (; d--;) s ? (i = e[d].x - n, r = e[d].y - c, i = i * i + r * r) : i = Math.abs(e[d] - n), i < o && (o = i, l = d);
            return l = !a || o <= a ? e[l] : t, s || l === t || S(t) ? l : l + We(t)
          } : Je(e))
        },
        tt = (e, t, a, s) => Ge(z(e) ? !t : !0 === a ? !!(a = 0) : !s, (() => z(e) ? e[~~(Math.random() * e.length)] : (a = a || 1e-5) && (s = a < 1 ? 10 ** ((a + "").length - 2) : 1) && Math.floor(Math.round((e - a / 2 + Math.random() * (t - e + .99 * a)) / a) * a * s) / s)),
        at = (e, t, a) => Ge(a, (a => e[~~t(a)])),
        st = function(e, t, a) {
          let s = t - e;
          return z(e) ? at(e, st(0, e.length), t) : Ge(a, (t => (s + (t - e) % s) % s + e))
        },
        it = (e, t, a) => {
          let s = t - e,
            i = 2 * s;
          return z(e) ? at(e, it(0, e.length - 1), t) : Ge(a, (t => e + ((t = (i + (t - e) % i) % i || 0) > s ? i - t : t)))
        },
        rt = e => {
          let t, a, s, i, r = 0,
            n = "";
          for (; ~(t = e.indexOf("random(", r));) s = e.indexOf(")", t), i = "[" === e.charAt(t + 7), a = e.substr(t + 7, s - t - 7).match(i ? V : P), n += e.substr(r, t - r) + tt(i ? a : +a[0], i ? 0 : +a[1], +a[2] || 1e-5), r = s + 1;
          return n + e.substr(r, e.length - r)
        },
        nt = (e, t, a, s, i) => {
          let r = t - e,
            n = s - a;
          return Ge(i, (t => a + ((t - e) / r * n || 0)))
        },
        ct = (e, t, a, s) => {
          let i = isNaN(e + t) ? 0 : a => (1 - a) * e + a * t;
          if (!i) {
            let r, n, c, o, l, d = N(e),
              m = {};
            if (!0 === a && (s = 1) && (a = null), d) e = {
              p: e
            }, t = {
              p: t
            };
            else if (z(e) && !z(t)) {
              for (c = [], o = e.length, l = o - 2, n = 1; n < o; n++) c.push(ct(e[n - 1], e[n]));
              o--, i = e => {
                e *= o;
                let t = Math.min(l, ~~e);
                return c[t](e - t)
              }, a = t
            } else s || (e = ke(z(e) ? [] : {}, e));
            if (!c) {
              for (r in t) Rt.call(m, e, r, "get", t[r]);
              i = t => sa(t, m) || (d ? e.p : e)
            }
          }
          return Ge(a, i)
        },
        ot = (e, t, a) => {
          let s, i, r, n = e.labels,
            c = _;
          for (s in n) i = n[s] - t, i < 0 == !!a && i && c > (i = Math.abs(i)) && (r = s, c = i);
          return r
        },
        lt = (e, t, a) => {
          let s, i, n, c = e.vars,
            o = c[t],
            l = r,
            d = e._ctx;
          if (o) return s = c[t + "Params"], i = c.callbackScope || e, a && Z.length && ue(), d && (r = d), n = s ? o.apply(i, s) : o.call(i), r = l, n
        },
        dt = e => (Ne(e), e.scrollTrigger && e.scrollTrigger.kill(!!i), e.progress() < 1 && lt(e, "onInterrupt"), e),
        mt = [],
        gt = e => {
          if (I() && e) {
            let t = (e = !e.name && e.default || e).name,
              a = j(e),
              s = t && !a && e.init ? function() {
                this._props = []
              } : e,
              i = {
                init: q,
                render: sa,
                add: Rt,
                kill: ra,
                modifier: ia,
                rawVars: 0
              },
              r = {
                targetTest: 0,
                get: 0,
                getSetter: Jt,
                aliases: {},
                register: 0
              };
            if (wt(), e !== s) {
              if (ee[t]) return;
              he(s, he(ve(e, i), r)), ke(s.prototype, ke(i, ve(e, r))), ee[s.prop = t] = s, e.targetTest && (se.push(s), Q[t] = 1), t = ("css" === t ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin"
            }
            W(t, s), e.register && e.register(ya, s, oa)
          } else e && mt.push(e)
        },
        ut = 255,
        ft = {
          aqua: [0, ut, ut],
          lime: [0, ut, 0],
          silver: [192, 192, 192],
          black: [0, 0, 0],
          maroon: [128, 0, 0],
          teal: [0, 128, 128],
          blue: [0, 0, ut],
          navy: [0, 0, 128],
          white: [ut, ut, ut],
          olive: [128, 128, 0],
          yellow: [ut, ut, 0],
          orange: [ut, 165, 0],
          gray: [128, 128, 128],
          purple: [128, 0, 128],
          green: [0, 128, 0],
          red: [ut, 0, 0],
          pink: [ut, 192, 203],
          cyan: [0, ut, ut],
          transparent: [ut, ut, ut, 0]
        },
        pt = (e, t, a) => (6 * (e += e < 0 ? 1 : e > 1 ? -1 : 0) < 1 ? t + (a - t) * e * 6 : e < .5 ? a : 3 * e < 2 ? t + (a - t) * (2 / 3 - e) * 6 : t) * ut + .5 | 0,
        _t = (e, t, a) => {
          let s, i, r, n, c, o, l, d, m, g, u = e ? S(e) ? [e >> 16, e >> 8 & ut, e & ut] : 0 : ft.black;
          if (!u) {
            if ("," === e.substr(-1) && (e = e.substr(0, e.length - 1)), ft[e]) u = ft[e];
            else if ("#" === e.charAt(0)) {
              if (e.length < 6 && (s = e.charAt(1), i = e.charAt(2), r = e.charAt(3), e = "#" + s + s + i + i + r + r + (5 === e.length ? e.charAt(4) + e.charAt(4) : "")), 9 === e.length) return u = parseInt(e.substr(1, 6), 16), [u >> 16, u >> 8 & ut, u & ut, parseInt(e.substr(7), 16) / 255];
              u = [(e = parseInt(e.substr(1), 16)) >> 16, e >> 8 & ut, e & ut]
            } else if ("hsl" === e.substr(0, 3))
              if (u = g = e.match(P), t) {
                if (~e.indexOf("=")) return u = e.match(O), a && u.length < 4 && (u[3] = 1), u
              } else n = +u[0] % 360 / 360, c = +u[1] / 100, o = +u[2] / 100, i = o <= .5 ? o * (c + 1) : o + c - o * c, s = 2 * o - i, u.length > 3 && (u[3] *= 1), u[0] = pt(n + 1 / 3, s, i), u[1] = pt(n, s, i), u[2] = pt(n - 1 / 3, s, i);
            else u = e.match(P) || ft.transparent;
            u = u.map(Number)
          }
          return t && !g && (s = u[0] / ut, i = u[1] / ut, r = u[2] / ut, l = Math.max(s, i, r), d = Math.min(s, i, r), o = (l + d) / 2, l === d ? n = c = 0 : (m = l - d, c = o > .5 ? m / (2 - l - d) : m / (l + d), n = l === s ? (i - r) / m + (i < r ? 6 : 0) : l === i ? (r - s) / m + 2 : (s - i) / m + 4, n *= 60), u[0] = ~~(n + .5), u[1] = ~~(100 * c + .5), u[2] = ~~(100 * o + .5)), a && u.length < 4 && (u[3] = 1), u
        },
        ht = e => {
          let t = [],
            a = [],
            s = -1;
          return e.split(bt).forEach((e => {
            let i = e.match(A) || [];
            t.push(...i), a.push(s += i.length + 1)
          })), t.c = a, t
        },
        kt = (e, t, a) => {
          let s, i, r, n, c = "",
            o = (e + c).match(bt),
            l = t ? "hsla(" : "rgba(",
            d = 0;
          if (!o) return e;
          if (o = o.map((e => (e = _t(e, t, 1)) && l + (t ? e[0] + "," + e[1] + "%," + e[2] + "%," + e[3] : e.join(",")) + ")")), a && (r = ht(e), s = a.c, s.join(c) !== r.c.join(c)))
            for (i = e.replace(bt, "1").split(A), n = i.length - 1; d < n; d++) c += i[d] + (~s.indexOf(d) ? o.shift() || l + "0,0,0,0)" : (r.length ? r : o.length ? o : a).shift());
          if (!i)
            for (i = e.split(bt), n = i.length - 1; d < n; d++) c += i[d] + o[d];
          return c + i[n]
        },
        bt = function() {
          let e, t = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
          for (e in ft) t += "|" + e + "\\b";
          return new RegExp(t + ")", "gi")
        }(),
        vt = /hsl[a]?\(/,
        yt = e => {
          let t, a = e.join(" ");
          if (bt.lastIndex = 0, bt.test(a)) return t = vt.test(a), e[1] = kt(e[1], t), e[0] = kt(e[0], t, ht(e[1])), !0
        },
        xt = function() {
          let e, t, a, s, i, r, n = Date.now,
            m = 500,
            g = 33,
            f = n(),
            p = f,
            _ = 1e3 / 240,
            h = _,
            k = [],
            b = a => {
              let c, o, l, d, u = n() - p,
                v = !0 === a;
              if (u > m && (f += u - g), p += u, l = p - f, c = l - h, (c > 0 || v) && (d = ++s.frame, i = l - 1e3 * s.time, s.time = l /= 1e3, h += c + (c >= _ ? 4 : _ - c), o = 1), v || (e = t(b)), o)
                for (r = 0; r < k.length; r++) k[r](l, i, d, a)
            };
          return s = {
            time: 0,
            frame: 0,
            tick() {
              b(!0)
            },
            deltaRatio: e => i / (1e3 / (e || 60)),
            wake() {
              d && (!o && I() && (c = o = window, l = c.document || {}, R.gsap = ya, (c.gsapVersions || (c.gsapVersions = [])).push(ya.version), U($ || c.GreenSockGlobals || !c.gsap && c || {}), a = c.requestAnimationFrame, mt.forEach(gt)), e && s.sleep(), t = a || (e => setTimeout(e, h - 1e3 * s.time + 1 | 0)), u = 1, b(2))
            },
            sleep() {
              (a ? c.cancelAnimationFrame : clearTimeout)(e), u = 0, t = q
            },
            lagSmoothing(e, t) {
              m = e || 1 / 0, g = Math.min(t || 33, m)
            },
            fps(e) {
              _ = 1e3 / (e || 240), h = 1e3 * s.time + _
            },
            add(e, t, a) {
              let i = t ? (t, a, r, n) => {
                e(t, a, r, n), s.remove(i)
              } : e;
              return s.remove(e), k[a ? "unshift" : "push"](i), wt(), i
            },
            remove(e, t) {
              ~(t = k.indexOf(e)) && k.splice(t, 1) && r >= t && r--
            },
            _listeners: k
          }, s
        }(),
        wt = () => !u && xt.wake(),
        Nt = {},
        jt = /^[\d.\-M][\d.\-,\s]/,
        St = /["']/g,
        Tt = e => {
          let t, a, s, i = {},
            r = e.substr(1, e.length - 3).split(":"),
            n = r[0],
            c = 1,
            o = r.length;
          for (; c < o; c++) a = r[c], t = c !== o - 1 ? a.lastIndexOf(",") : a.length, s = a.substr(0, t), i[n] = isNaN(s) ? s.replace(St, "").trim() : +s, n = a.substr(t + 1).trim();
          return i
        },
        Ct = e => t => 1 - e(1 - t),
        Mt = (e, t) => {
          let a, s = e._first;
          for (; s;) s instanceof Dt ? Mt(s, t) : !s.vars.yoyoEase || s._yoyo && s._repeat || s._yoyo === t || (s.timeline ? Mt(s.timeline, t) : (a = s._ease, s._ease = s._yEase, s._yEase = a, s._yoyo = t)), s = s._next
        },
        It = (e, t) => e && (j(e) ? e : Nt[e] || (e => {
          let t = (e + "").split("("),
            a = Nt[t[0]];
          return a && t.length > 1 && a.config ? a.config.apply(null, ~e.indexOf("{") ? [Tt(t[1])] : (e => {
            let t = e.indexOf("(") + 1,
              a = e.indexOf(")"),
              s = e.indexOf("(", t);
            return e.substring(t, ~s && s < a ? e.indexOf(")", a + 1) : a)
          })(e).split(",").map(pe)) : Nt._CE && jt.test(e) ? Nt._CE("", e) : a
        })(e)) || t,
        Et = function(e, t) {
          let a, s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e => 1 - t(1 - e),
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : e => e < .5 ? t(2 * e) / 2 : 1 - t(2 * (1 - e)) / 2,
            r = {
              easeIn: t,
              easeOut: s,
              easeInOut: i
            };
          return oe(e, (e => {
            Nt[e] = R[e] = r, Nt[a = e.toLowerCase()] = s;
            for (let t in r) Nt[a + ("easeIn" === t ? ".in" : "easeOut" === t ? ".out" : ".inOut")] = Nt[e + "." + t] = r[t]
          })), r
        },
        Lt = e => t => t < .5 ? (1 - e(1 - 2 * t)) / 2 : .5 + e(2 * (t - .5)) / 2,
        zt = (e, t, a) => {
          let s = t >= 1 ? t : 1,
            i = (a || (e ? .3 : .45)) / (t < 1 ? t : 1),
            r = i / k * (Math.asin(1 / s) || 0),
            n = e => 1 === e ? 1 : s * 2 ** (-10 * e) * w((e - r) * i) + 1,
            c = "out" === e ? n : "in" === e ? e => 1 - n(1 - e) : Lt(n);
          return i = k / i, c.config = (t, a) => zt(e, t, a), c
        },
        Pt = function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1.70158,
            a = e => e ? --e * e * ((t + 1) * e + t) + 1 : 0,
            s = "out" === e ? a : "in" === e ? e => 1 - a(1 - e) : Lt(a);
          return s.config = t => Pt(e, t), s
        };
      oe("Linear,Quad,Cubic,Quart,Quint,Strong", ((e, t) => {
        let a = t < 5 ? t + 1 : t;
        Et(e + ",Power" + (a - 1), t ? e => e ** a : e => e, (e => 1 - (1 - e) ** a), (e => e < .5 ? (2 * e) ** a / 2 : 1 - (2 * (1 - e)) ** a / 2))
      })), Nt.Linear.easeNone = Nt.none = Nt.Linear.easeIn, Et("Elastic", zt("in"), zt("out"), zt()), ((e, t) => {
        let a = a => a < .36363636363636365 ? e * a * a : a < .7272727272727273 ? e * (a - 1.5 / t) ** 2 + .75 : a < .9090909090909092 ? e * (a -= 2.25 / t) * a + .9375 : e * (a - 2.625 / t) ** 2 + .984375;
        Et("Bounce", (e => 1 - a(1 - e)), a)
      })(7.5625, 2.75), Et("Expo", (e => e ? 2 ** (10 * (e - 1)) : 0)), Et("Circ", (e => -(y(1 - e * e) - 1))), Et("Sine", (e => 1 === e ? 1 : 1 - x(e * b))), Et("Back", Pt("in"), Pt("out"), Pt()), Nt.SteppedEase = Nt.steps = R.SteppedEase = {
        config() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            t = arguments.length > 1 ? arguments[1] : void 0,
            a = 1 / e,
            s = e + (t ? 0 : 1),
            i = t ? 1 : 0;
          return e => ((s * He(0, .99999999, e) | 0) + i) * a
        }
      }, p.ease = Nt["quad.out"], oe("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", (e => ie += e + "," + e + "Params,"));
      class Ot {
        constructor(e, t) {
          this.id = v++, e._gsap = this, this.target = e, this.harness = t, this.get = t ? t.get : ce, this.set = t ? t.getSetter : Jt
        }
      }
      class At {
        constructor(e) {
          this.vars = e, this._delay = +e.delay || 0, (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) && (this._rDelay = e.repeatDelay || 0, this._yoyo = !!e.yoyo || !!e.yoyoEase), this._ts = 1, Ve(this, +e.duration, 1, 1), this.data = e.data, r && (this._ctx = r, r.data.push(this)), u || xt.wake()
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
          if (wt(), !arguments.length) return this._tTime;
          let a = this._dp;
          if (a && a.smoothChildTiming && this._ts) {
            for (Le(this, e), !a._dp || a.parent || ze(a, this); a && a.parent;) a.parent._time !== a._start + (a._ts >= 0 ? a._tTime / a._ts : (a.totalDuration() - a._tTime) / -a._ts) && a.totalTime(a._tTime, !0), a = a.parent;
            !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && e < this._tDur || this._ts < 0 && e > 0 || !this._tDur && !e) && Pe(this._dp, this, this._start - this._delay)
          }
          return (this._tTime !== e || !this._dur && !t || this._initted && Math.abs(this._zTime) === h || !e && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = e), fe(this, e, t)), this
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
          return arguments.length ? this.totalTime(this._time + (e - 1) * a, t) : this._repeat ? Me(this._tTime, a) + 1 : 1
        }
        timeScale(e) {
          if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
          if (this._rts === e) return this;
          let t = this.parent && this._ts ? Ie(this.parent._time, this) : this._tTime;
          return this._rts = +e || 0, this._ts = this._ps || -1e-8 === e ? 0 : this._rts, this.totalTime(He(-Math.abs(this._delay), this._tDur, t), !0), Ee(this), (e => {
            let t = e.parent;
            for (; t && t.parent;) t._dirty = 1, t.totalDuration(), t = t.parent;
            return e
          })(this)
        }
        paused(e) {
          return arguments.length ? (this._ps !== e && (this._ps = e, e ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (wt(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== h && (this._tTime -= h)))), this) : this._ps
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
          return this._start + (M(e) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
        }
        rawTime(e) {
          let t = this.parent || this._dp;
          return t ? e && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Ie(t.rawTime(e), this) : this._tTime : this._tTime
        }
        revert() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : K,
            t = i;
          return i = e, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(e), this.totalTime(-.01, e.suppressEvents)), "nested" !== this.data && !1 !== e.kill && this.kill(), i = t, this
        }
        globalTime(e) {
          let t = this,
            a = arguments.length ? e : t.rawTime();
          for (; t;) a = t._start + a / (t._ts || 1), t = t._dp;
          return !this.parent && this._sat ? this._sat.vars.immediateRender ? -1 / 0 : this._sat.globalTime(e) : a
        }
        repeat(e) {
          return arguments.length ? (this._repeat = e === 1 / 0 ? -2 : e, Fe(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
        }
        repeatDelay(e) {
          if (arguments.length) {
            let t = this._time;
            return this._rDelay = e, Fe(this), t ? this.time(t) : this
          }
          return this._rDelay
        }
        yoyo(e) {
          return arguments.length ? (this._yoyo = e, this) : this._yoyo
        }
        seek(e, t) {
          return this.totalTime($e(this, e), M(t))
        }
        restart(e, t) {
          return this.play().totalTime(e ? -this._delay : 0, M(t))
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
          return !(t && !(this._ts && this._initted && t.isActive() && (e = t.rawTime(!0)) >= a && e < this.endTime(!0) - h))
        }
        eventCallback(e, t, a) {
          let s = this.vars;
          return arguments.length > 1 ? (t ? (s[e] = t, a && (s[e + "Params"] = a), "onUpdate" === e && (this._onUpdate = t)) : delete s[e], this) : s[e]
        }
        then(e) {
          let t = this;
          return new Promise((a => {
            let s = j(e) ? e : _e,
              i = () => {
                let e = t.then;
                t.then = null, j(s) && (s = s(t)) && (s.then || s === t) && (t.then = e), a(s), t.then = e
              };
            t._initted && 1 === t.totalProgress() && t._ts >= 0 || !t._tTime && t._ts < 0 ? i() : t._prom = i
          }))
        }
        kill() {
          dt(this)
        }
      }
      he(At.prototype, {
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
      class Dt extends At {
        constructor() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = arguments.length > 1 ? arguments[1] : void 0;
          super(e), this.labels = {}, this.smoothChildTiming = !!e.smoothChildTiming, this.autoRemoveChildren = !!e.autoRemoveChildren, this._sort = M(e.sortChildren), n && Pe(e.parent || n, this, t), e.reversed && this.reverse(), e.paused && this.paused(!0), e.scrollTrigger && Oe(this, e.scrollTrigger)
        }
        to(e, t, a) {
          return Ue(0, arguments, this), this
        }
        from(e, t, a) {
          return Ue(1, arguments, this), this
        }
        fromTo(e, t, a, s) {
          return Ue(2, arguments, this), this
        }
        set(e, t, a) {
          return t.duration = 0, t.parent = this, ye(t).repeatDelay || (t.repeat = 0), t.immediateRender = !!t.immediateRender, new Xt(e, t, $e(this, a), 1), this
        }
        call(e, t, a) {
          return Pe(this, Xt.delayedCall(0, e, t), a)
        }
        staggerTo(e, t, a, s, i, r, n) {
          return a.duration = t, a.stagger = a.stagger || s, a.onComplete = r, a.onCompleteParams = n, a.parent = this, new Xt(e, a, $e(this, i)), this
        }
        staggerFrom(e, t, a, s, i, r, n) {
          return a.runBackwards = 1, ye(a).immediateRender = M(a.immediateRender), this.staggerTo(e, t, a, s, i, r, n)
        }
        staggerFromTo(e, t, a, s, i, r, n, c) {
          return s.startAt = a, ye(s).immediateRender = M(s.immediateRender), this.staggerTo(e, t, s, i, r, n, c)
        }
        render(e, t, a) {
          let s, r, c, o, l, d, m, g, u, f, p, _, k = this._time,
            b = this._dirty ? this.totalDuration() : this._tDur,
            v = this._dur,
            y = e <= 0 ? 0 : de(e),
            x = this._zTime < 0 != e < 0 && (this._initted || !v);
          if (this !== n && y > b && e >= 0 && (y = b), y !== this._tTime || a || x) {
            if (k !== this._time && v && (y += this._time - k, e += this._time - k), s = y, u = this._start, g = this._ts, d = !g, x && (v || (k = this._zTime), (e || !t) && (this._zTime = e)), this._repeat) {
              if (p = this._yoyo, l = v + this._rDelay, this._repeat < -1 && e < 0) return this.totalTime(100 * l + e, t, a);
              if (s = de(y % l), y === b ? (o = this._repeat, s = v) : (o = ~~(y / l), o && o === y / l && (s = v, o--), s > v && (s = v)), f = Me(this._tTime, l), !k && this._tTime && f !== o && this._tTime - f * l - this._dur <= 0 && (f = o), p && 1 & o && (s = v - s, _ = 1), o !== f && !this._lock) {
                let e = p && 1 & f,
                  a = e === (p && 1 & o);
                if (o < f && (e = !e), k = e ? 0 : y % v ? v : y, this._lock = 1, this.render(k || (_ ? 0 : de(o * l)), t, !v)._lock = 0, this._tTime = y, !t && this.parent && lt(this, "onRepeat"), this.vars.repeatRefresh && !_ && (this.invalidate()._lock = 1), k && k !== this._time || d !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                if (v = this._dur, b = this._tDur, a && (this._lock = 2, k = e ? v : -1e-4, this.render(k, !0), this.vars.repeatRefresh && !_ && this.invalidate()), this._lock = 0, !this._ts && !d) return this;
                Mt(this, _)
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
              })(this, de(k), de(s)), m && (y -= s - (s = m._start))), this._tTime = y, this._time = s, this._act = !g, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = e, k = 0), !k && s && !t && !o && (lt(this, "onStart"), this._tTime !== y)) return this;
            if (s >= k && e >= 0)
              for (r = this._first; r;) {
                if (c = r._next, (r._act || s >= r._start) && r._ts && m !== r) {
                  if (r.parent !== this) return this.render(e, t, a);
                  if (r.render(r._ts > 0 ? (s - r._start) * r._ts : (r._dirty ? r.totalDuration() : r._tDur) + (s - r._start) * r._ts, t, a), s !== this._time || !this._ts && !d) {
                    m = 0, c && (y += this._zTime = -1e-8);
                    break
                  }
                }
                r = c
              } else {
                r = this._last;
                let n = e < 0 ? e : s;
                for (; r;) {
                  if (c = r._prev, (r._act || n <= r._end) && r._ts && m !== r) {
                    if (r.parent !== this) return this.render(e, t, a);
                    if (r.render(r._ts > 0 ? (n - r._start) * r._ts : (r._dirty ? r.totalDuration() : r._tDur) + (n - r._start) * r._ts, t, a || i && (r._initted || r._startAt)), s !== this._time || !this._ts && !d) {
                      m = 0, c && (y += this._zTime = n ? -1e-8 : h);
                      break
                    }
                  }
                  r = c
                }
              }
            if (m && !t && (this.pause(), m.render(s >= k ? 0 : -1e-8)._zTime = s >= k ? 1 : -1, this._ts)) return this._start = u, Ee(this), this.render(e, t, a);
            this._onUpdate && !t && lt(this, "onUpdate", !0), (y === b && this._tTime >= this.totalDuration() || !y && k) && (u !== this._start && Math.abs(g) === Math.abs(this._ts) || this._lock || ((e || !v) && (y === b && this._ts > 0 || !y && this._ts < 0) && Ne(this, 1), t || e < 0 && !k || !y && !k && b || (lt(this, y === b && e >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(y < b && this.timeScale() > 0) && this._prom())))
          }
          return this
        }
        add(e, t) {
          if (S(t) || (t = $e(this, t, e)), !(e instanceof At)) {
            if (z(e)) return e.forEach((e => this.add(e, t))), this;
            if (N(e)) return this.addLabel(e, t);
            if (!j(e)) return this;
            e = Xt.delayedCall(0, e)
          }
          return this !== e ? Pe(this, e, t) : this
        }
        getChildren() {
          let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            a = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
            s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -_,
            i = [],
            r = this._first;
          for (; r;) r._start >= s && (r instanceof Xt ? t && i.push(r) : (a && i.push(r), e && i.push(...r.getChildren(!0, t, a)))), r = r._next;
          return i
        }
        getById(e) {
          let t = this.getChildren(1, 1, 1),
            a = t.length;
          for (; a--;)
            if (t[a].vars.id === e) return t[a]
        }
        remove(e) {
          return N(e) ? this.removeLabel(e) : j(e) ? this.killTweensOf(e) : (we(this, e), e === this._recent && (this._recent = this._last), je(this))
        }
        totalTime(e, t) {
          return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = de(xt.time - (this._ts > 0 ? e / this._ts : (this.totalDuration() - e) / -this._ts))), super.totalTime(e, t), this._forcing = 0, this) : this._tTime
        }
        addLabel(e, t) {
          return this.labels[e] = $e(this, t), this
        }
        removeLabel(e) {
          return delete this.labels[e], this
        }
        addPause(e, t, a) {
          let s = Xt.delayedCall(0, t || q, a);
          return s.data = "isPause", this._hasPause = 1, Pe(this, s, $e(this, e))
        }
        removePause(e) {
          let t = this._first;
          for (e = $e(this, e); t;) t._start === e && "isPause" === t.data && Ne(t), t = t._next
        }
        killTweensOf(e, t, a) {
          let s = this.getTweensOf(e, a),
            i = s.length;
          for (; i--;) Bt !== s[i] && s[i].kill(e, t);
          return this
        }
        getTweensOf(e, t) {
          let a, s = [],
            i = Ye(e),
            r = this._first,
            n = S(t);
          for (; r;) r instanceof Xt ? ge(r._targets, i) && (n ? (!Bt || r._initted && r._ts) && r.globalTime(0) <= t && r.globalTime(r.totalDuration()) > t : !t || r.isActive()) && s.push(r) : (a = r.getTweensOf(i, t)).length && s.push(...a), r = r._next;
          return s
        }
        tweenTo(e, t) {
          t = t || {};
          let a, s = this,
            i = $e(s, e),
            {
              startAt: r,
              onStart: n,
              onStartParams: c,
              immediateRender: o
            } = t,
            l = Xt.to(s, he({
              ease: t.ease || "none",
              lazy: !1,
              immediateRender: !1,
              time: i,
              overwrite: "auto",
              duration: t.duration || Math.abs((i - (r && "time" in r ? r.time : s._time)) / s.timeScale()) || h,
              onStart: () => {
                if (s.pause(), !a) {
                  let e = t.duration || Math.abs((i - (r && "time" in r ? r.time : s._time)) / s.timeScale());
                  l._dur !== e && Ve(l, e, 0, 1).render(l._time, !0, !0), a = 1
                }
                n && n.apply(l, c || [])
              }
            }, t));
          return o ? l.render(0) : l
        }
        tweenFromTo(e, t, a) {
          return this.tweenTo(t, he({
            startAt: {
              time: $e(this, e)
            }
          }, a))
        }
        recent() {
          return this._recent
        }
        nextLabel() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._time;
          return ot(this, $e(this, e))
        }
        previousLabel() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._time;
          return ot(this, $e(this, e), 1)
        }
        currentLabel(e) {
          return arguments.length ? this.seek(e, !0) : this.previousLabel(this._time + h)
        }
        shiftChildren(e, t) {
          let a, s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            i = this._first,
            r = this.labels;
          for (; i;) i._start >= s && (i._start += e, i._end += e), i = i._next;
          if (t)
            for (a in r) r[a] >= s && (r[a] += e);
          return je(this)
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
          return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), je(this)
        }
        totalDuration(e) {
          let t, a, s, i = 0,
            r = this,
            c = r._last,
            o = _;
          if (arguments.length) return r.timeScale((r._repeat < 0 ? r.duration() : r.totalDuration()) / (r.reversed() ? -e : e));
          if (r._dirty) {
            for (s = r.parent; c;) t = c._prev, c._dirty && c.totalDuration(), a = c._start, a > o && r._sort && c._ts && !r._lock ? (r._lock = 1, Pe(r, c, a - c._delay, 1)._lock = 0) : o = a, a < 0 && c._ts && (i -= a, (!s && !r._dp || s && s.smoothChildTiming) && (r._start += a / r._ts, r._time -= a, r._tTime -= a), r.shiftChildren(-a, !1, -Infinity), o = 0), c._end > i && c._ts && (i = c._end), c = t;
            Ve(r, r === n && r._time > i ? r._time : i, 1, 1), r._dirty = 0
          }
          return r._tDur
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
      he(Dt.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
      });
      let Bt, Vt, Ft = function(e, t, a, s, i, r, n) {
          let c, o, l, d, m, g, u, f, p = new oa(this._pt, e, t, 0, 1, aa, null, i),
            _ = 0,
            h = 0;
          for (p.b = a, p.e = s, a += "", (u = ~(s += "").indexOf("random(")) && (s = rt(s)), r && (f = [a, s], r(f, e, t), a = f[0], s = f[1]), o = a.match(D) || []; c = D.exec(s);) d = c[0], m = s.substring(_, c.index), l ? l = (l + 1) % 5 : "rgba(" === m.substr(-5) && (l = 1), d !== o[h++] && (g = parseFloat(o[h - 1]) || 0, p._pt = {
            _next: p._pt,
            p: m || 1 === h ? m : ",",
            s: g,
            c: "=" === d.charAt(1) ? me(g, d) - g : parseFloat(d) - g,
            m: l && l < 4 ? Math.round : 0
          }, _ = D.lastIndex);
          return p.c = _ < s.length ? s.substring(_, s.length) : "", p.fp = n, (B.test(s) || u) && (p.e = 0), this._pt = p, p
        },
        Rt = function(e, t, a, s, i, r, n, c, o, l) {
          j(s) && (s = s(i || 0, e, r));
          let d, m = e[t],
            g = "get" !== a ? a : j(m) ? o ? e[t.indexOf("set") || !j(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](o) : e[t]() : m,
            u = j(m) ? o ? Qt : Kt : Yt;
          if (N(s) && (~s.indexOf("random(") && (s = rt(s)), "=" === s.charAt(1) && (d = me(g, s) + (We(g) || 0), (d || 0 === d) && (s = d))), !l || g !== s || Vt) return isNaN(g * s) || "" === s ? (!m && !(t in e) && G(t, s), Ft.call(this, e, t, g, s, u, c || f.stringFilter, o)) : (d = new oa(this._pt, e, t, +g || 0, s - (g || 0), "boolean" == typeof m ? ta : ea, 0, u), o && (d.fp = o), n && d.modifier(n, this, e), this._pt = d)
        },
        $t = (e, t, a, s, i, r) => {
          let n, c, o, l;
          if (ee[e] && !1 !== (n = new ee[e]).init(i, n.rawVars ? t[e] : ((e, t, a, s, i) => {
              if (j(e) && (e = Ht(e, i, t, a, s)), !C(e) || e.style && e.nodeType || z(e) || L(e)) return N(e) ? Ht(e, i, t, a, s) : e;
              let r, n = {};
              for (r in e) n[r] = Ht(e[r], i, t, a, s);
              return n
            })(t[e], s, i, r, a), a, s, r) && (a._pt = c = new oa(a._pt, i, e, 0, 1, n.render, n, 0, n.priority), a !== g))
            for (o = a._ptLookup[a._targets.indexOf(i)], l = n._props.length; l--;) o[n._props[l]] = c;
          return n
        },
        Ut = (e, t, a) => {
          let r, c, o, l, d, m, g, u, f, k, b, v, y, x = e.vars,
            {
              ease: w,
              startAt: N,
              immediateRender: j,
              lazy: S,
              onUpdate: T,
              onUpdateParams: C,
              callbackScope: I,
              runBackwards: E,
              yoyoEase: L,
              keyframes: z,
              autoRevert: P
            } = x,
            O = e._dur,
            A = e._startAt,
            D = e._targets,
            B = e.parent,
            V = B && "nested" === B.data ? B.vars.targets : D,
            F = "auto" === e._overwrite && !s,
            R = e.timeline;
          if (R && (!z || !w) && (w = "none"), e._ease = It(w, p.ease), e._yEase = L ? Ct(It(!0 === L ? w : L, p.ease)) : 0, L && e._yoyo && !e._repeat && (L = e._yEase, e._yEase = e._ease, e._ease = L), e._from = !R && !!x.runBackwards, !R || z && !x.stagger) {
            if (u = D[0] ? ne(D[0]).harness : 0, v = u && x[u.prop], r = ve(x, Q), A && (A._zTime < 0 && A.progress(1), t < 0 && E && j && !P ? A.render(-1, !0) : A.revert(E && O ? Y : X), A._lazy = 0), N) {
              if (Ne(e._startAt = Xt.set(D, he({
                  data: "isStart",
                  overwrite: !1,
                  parent: B,
                  immediateRender: !0,
                  lazy: !A && M(S),
                  startAt: null,
                  delay: 0,
                  onUpdate: T,
                  onUpdateParams: C,
                  callbackScope: I,
                  stagger: 0
                }, N))), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (i || !j && !P) && e._startAt.revert(Y), j && O && t <= 0 && a <= 0) return void(t && (e._zTime = t))
            } else if (E && O && !A)
              if (t && (j = !1), o = he({
                  overwrite: !1,
                  data: "isFromStart",
                  lazy: j && !A && M(S),
                  immediateRender: j,
                  stagger: 0,
                  parent: B
                }, r), v && (o[u.prop] = v), Ne(e._startAt = Xt.set(D, o)), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (i ? e._startAt.revert(Y) : e._startAt.render(-1, !0)), e._zTime = t, j) {
                if (!t) return
              } else Ut(e._startAt, h, h);
            for (e._pt = e._ptCache = 0, S = O && M(S) || S && !O, c = 0; c < D.length; c++) {
              if (d = D[c], g = d._gsap || re(D)[c]._gsap, e._ptLookup[c] = k = {}, J[g.id] && Z.length && ue(), b = V === D ? c : V.indexOf(d), u && !1 !== (f = new u).init(d, v || r, e, b, V) && (e._pt = l = new oa(e._pt, d, f.name, 0, 1, f.render, f, 0, f.priority), f._props.forEach((e => {
                  k[e] = l
                })), f.priority && (m = 1)), !u || v)
                for (o in r) ee[o] && (f = $t(o, r, e, b, d, V)) ? f.priority && (m = 1) : k[o] = l = Rt.call(e, d, o, "get", r[o], b, V, 0, x.stringFilter);
              e._op && e._op[c] && e.kill(d, e._op[c]), F && e._pt && (Bt = e, n.killTweensOf(d, k, e.globalTime(t)), y = !e.parent, Bt = 0), e._pt && S && (J[g.id] = 1)
            }
            m && ca(e), e._onInit && e._onInit(e)
          }
          e._onUpdate = T, e._initted = (!e._op || e._pt) && !y, z && t <= 0 && R.render(_, !0, !0)
        },
        Gt = (e, t, a, s) => {
          let i, r, n = t.ease || s || "power1.inOut";
          if (z(t)) r = a[e] || (a[e] = []), t.forEach(((e, a) => r.push({
            t: a / (t.length - 1) * 100,
            v: e,
            e: n
          })));
          else
            for (i in t) r = a[i] || (a[i] = []), "ease" === i || r.push({
              t: parseFloat(e),
              v: t[i],
              e: n
            })
        },
        Ht = (e, t, a, s, i) => j(e) ? e.call(t, a, s, i) : N(e) && ~e.indexOf("random(") ? rt(e) : e,
        Wt = ie + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
        qt = {};
      oe(Wt + ",id,stagger,delay,duration,paused,scrollTrigger", (e => qt[e] = 1));
      class Xt extends At {
        constructor(e, t, a, i) {
          "number" == typeof t && (a.duration = t, t = a, a = null), super(i ? t : ye(t));
          let r, c, o, l, d, m, g, u, {
              duration: p,
              delay: _,
              immediateRender: h,
              stagger: k,
              overwrite: b,
              keyframes: v,
              defaults: y,
              scrollTrigger: x,
              yoyoEase: w
            } = this.vars,
            N = t.parent || n,
            j = (z(e) || L(e) ? S(e[0]) : "length" in t) ? [e] : Ye(e);
          if (this._targets = j.length ? re(j) : H("GSAP target " + e + " not found. https://greensock.com", !f.nullTargetWarn) || [], this._ptLookup = [], this._overwrite = b, v || k || E(p) || E(_)) {
            if (t = this.vars, r = this.timeline = new Dt({
                data: "nested",
                defaults: y || {},
                targets: N && "nested" === N.data ? N.vars.targets : j
              }), r.kill(), r.parent = r._dp = this, r._start = 0, k || E(p) || E(_)) {
              if (l = j.length, g = k && Ze(k), C(k))
                for (d in k) ~Wt.indexOf(d) && (u || (u = {}), u[d] = k[d]);
              for (c = 0; c < l; c++) o = ve(t, qt), o.stagger = 0, w && (o.yoyoEase = w), u && ke(o, u), m = j[c], o.duration = +Ht(p, this, c, m, j), o.delay = (+Ht(_, this, c, m, j) || 0) - this._delay, !k && 1 === l && o.delay && (this._delay = _ = o.delay, this._start += _, o.delay = 0), r.to(m, o, g ? g(c, m, j) : 0), r._ease = Nt.none;
              r.duration() ? p = _ = 0 : this.timeline = 0
            } else if (v) {
              ye(he(r.vars.defaults, {
                ease: "none"
              })), r._ease = It(v.ease || t.ease || "none");
              let e, a, s, i = 0;
              if (z(v)) v.forEach((e => r.to(j, e, ">"))), r.duration();
              else {
                for (d in o = {}, v) "ease" === d || "easeEach" === d || Gt(d, v[d], o, v.easeEach);
                for (d in o)
                  for (e = o[d].sort(((e, t) => e.t - t.t)), i = 0, c = 0; c < e.length; c++) a = e[c], s = {
                    ease: a.e,
                    duration: (a.t - (c ? e[c - 1].t : 0)) / 100 * p
                  }, s[d] = a.v, r.to(j, s, i), i += s.duration;
                r.duration() < p && r.to({}, {
                  duration: p - r.duration()
                })
              }
            }
            p || this.duration(p = r.duration())
          } else this.timeline = 0;
          !0 !== b || s || (Bt = this, n.killTweensOf(j), Bt = 0), Pe(N, this, a), t.reversed && this.reverse(), t.paused && this.paused(!0), (h || !p && !v && this._start === de(N._time) && M(h) && Te(this) && "nested" !== N.data) && (this._tTime = -1e-8, this.render(Math.max(0, -_) || 0)), x && Oe(this, x)
        }
        render(e, t, a) {
          let s, r, n, c, o, l, d, m, g, u = this._time,
            f = this._tDur,
            p = this._dur,
            _ = e < 0,
            k = e > f - h && !_ ? f : e < h ? 0 : e;
          if (p) {
            if (k !== this._tTime || !e || a || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== _) {
              if (s = k, m = this.timeline, this._repeat) {
                if (c = p + this._rDelay, this._repeat < -1 && _) return this.totalTime(100 * c + e, t, a);
                if (s = de(k % c), k === f ? (n = this._repeat, s = p) : (n = ~~(k / c), n && n === k / c && (s = p, n--), s > p && (s = p)), l = this._yoyo && 1 & n, l && (g = this._yEase, s = p - s), o = Me(this._tTime, c), s === u && !a && this._initted) return this._tTime = k, this;
                n !== o && (m && this._yEase && Mt(m, l), !this.vars.repeatRefresh || l || this._lock || (this._lock = a = 1, this.render(de(c * n), !0).invalidate()._lock = 0))
              }
              if (!this._initted) {
                if (Ae(this, _ ? e : s, a, t, k)) return this._tTime = 0, this;
                if (u !== this._time) return this;
                if (p !== this._dur) return this.render(e, t, a)
              }
              if (this._tTime = k, this._time = s, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = d = (g || this._ease)(s / p), this._from && (this.ratio = d = 1 - d), s && !u && !t && !n && (lt(this, "onStart"), this._tTime !== k)) return this;
              for (r = this._pt; r;) r.r(d, r.d), r = r._next;
              m && m.render(e < 0 ? e : !s && l ? -1e-8 : m._dur * m._ease(s / this._dur), t, a) || this._startAt && (this._zTime = e), this._onUpdate && !t && (_ && Se(this, e, 0, a), lt(this, "onUpdate")), this._repeat && n !== o && this.vars.onRepeat && !t && this.parent && lt(this, "onRepeat"), k !== this._tDur && k || this._tTime !== k || (_ && !this._onUpdate && Se(this, e, 0, !0), (e || !p) && (k === this._tDur && this._ts > 0 || !k && this._ts < 0) && Ne(this, 1), t || _ && !u || !(k || u || l) || (lt(this, k === f ? "onComplete" : "onReverseComplete", !0), this._prom && !(k < f && this.timeScale() > 0) && this._prom()))
            }
          } else((e, t, a, s) => {
            let r, n, c, o = e.ratio,
              l = t < 0 || !t && (!e._start && De(e) && (e._initted || !Be(e)) || (e._ts < 0 || e._dp._ts < 0) && !Be(e)) ? 0 : 1,
              d = e._rDelay,
              m = 0;
            if (d && e._repeat && (m = He(0, e._tDur, t), n = Me(m, d), e._yoyo && 1 & n && (l = 1 - l), n !== Me(e._tTime, d) && (o = 1 - l, e.vars.repeatRefresh && e._initted && e.invalidate())), l !== o || i || s || e._zTime === h || !t && e._zTime) {
              if (!e._initted && Ae(e, t, s, a, m)) return;
              for (c = e._zTime, e._zTime = t || (a ? h : 0), a || (a = t && !c), e.ratio = l, e._from && (l = 1 - l), e._time = 0, e._tTime = m, r = e._pt; r;) r.r(l, r.d), r = r._next;
              t < 0 && Se(e, t, 0, !0), e._onUpdate && !a && lt(e, "onUpdate"), m && e._repeat && !a && e.parent && lt(e, "onRepeat"), (t >= e._tDur || t < 0) && e.ratio === l && (l && Ne(e, 1), a || i || (lt(e, l ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()))
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
          u || xt.wake(), this._ts || this.play();
          let i, r = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
          return this._initted || Ut(this, r), i = this._ease(r / this._dur), ((e, t, a, s, i, r, n) => {
            let c, o, l, d, m = (e._pt && e._ptCache || (e._ptCache = {}))[t];
            if (!m)
              for (m = e._ptCache[t] = [], l = e._ptLookup, d = e._targets.length; d--;) {
                if (c = l[d][t], c && c.d && c.d._pt)
                  for (c = c.d._pt; c && c.p !== t && c.fp !== t;) c = c._next;
                if (!c) return Vt = 1, e.vars[t] = "+=0", Ut(e, n), Vt = 0, 1;
                m.push(c)
              }
            for (d = m.length; d--;) o = m[d], c = o._pt || o, c.s = !s && 0 !== s || i ? c.s + (s || 0) + r * c.c : s, c.c = a - c.s, o.e && (o.e = le(a) + We(o.e)), o.b && (o.b = c.s + We(o.b))
          })(this, e, t, a, s, i, r) ? this.resetTo(e, t, a, s) : (Le(this, 0), this.parent || xe(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
        }
        kill(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "all";
          if (!(e || t && "all" !== t)) return this._lazy = this._pt = 0, this.parent ? dt(this) : this;
          if (this.timeline) {
            let a = this.timeline.totalDuration();
            return this.timeline.killTweensOf(e, t, Bt && !0 !== Bt.vars.overwrite)._first || dt(this), this.parent && a !== this.timeline.totalDuration() && Ve(this, this._dur * this.timeline._tDur / a, 0, 1), this
          }
          let a, s, i, r, n, c, o, l = this._targets,
            d = e ? Ye(e) : l,
            m = this._ptLookup,
            g = this._pt;
          if ((!t || "all" === t) && ((e, t) => {
              let a = e.length,
                s = a === t.length;
              for (; s && a-- && e[a] === t[a];);
              return a < 0
            })(l, d)) return "all" === t && (this._pt = 0), dt(this);
          for ((a = this._op = this._op || [], "all" !== t && (N(t) && (n = {}, oe(t, (e => n[e] = 1)), t = n), t = ((e, t) => {
              let a, s, i, r, n = e[0] ? ne(e[0]).harness : 0,
                c = n && n.aliases;
              if (!c) return t;
              for (s in a = ke({}, t), c)
                if (s in a)
                  for (r = c[s].split(","), i = r.length; i--;) a[r[i]] = a[s];
              return a
            })(l, t)), o = l.length); o--;)
            if (~d.indexOf(l[o]))
              for (n in s = m[o], "all" === t ? (a[o] = t, r = s, i = {}) : (i = a[o] = a[o] || {}, r = t), r) c = s && s[n], c && ("kill" in c.d && !0 !== c.d.kill(n) || we(this, c, "_pt"), delete s[n]), "all" !== i && (i[n] = 1);
          return this._initted && !this._pt && g && dt(this), this
        }
        static to(e, t) {
          return new Xt(e, t, arguments[2])
        }
        static from(e, t) {
          return Ue(1, arguments)
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
          return Ue(2, arguments)
        }
        static set(e, t) {
          return t.duration = 0, t.repeatDelay || (t.repeat = 0), new Xt(e, t)
        }
        static killTweensOf(e, t, a) {
          return n.killTweensOf(e, t, a)
        }
      }
      he(Xt.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
      }), oe("staggerTo,staggerFrom,staggerFromTo", (e => {
        Xt[e] = function() {
          let t = new Dt,
            a = qe.call(arguments, 0);
          return a.splice("staggerFromTo" === e ? 5 : 4, 0, 0), t[e].apply(t, a)
        }
      }));
      let Yt = (e, t, a) => e[t] = a,
        Kt = (e, t, a) => e[t](a),
        Qt = (e, t, a, s) => e[t](s.fp, a),
        Zt = (e, t, a) => e.setAttribute(t, a),
        Jt = (e, t) => j(e[t]) ? Kt : T(e[t]) && e.setAttribute ? Zt : Yt,
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
        ia = function(e, t, a, s) {
          let i, r = this._pt;
          for (; r;) i = r._next, r.p === s && r.modifier(e, t, a), r = i
        },
        ra = function(e) {
          let t, a, s = this._pt;
          for (; s;) a = s._next, s.p === e && !s.op || s.op === e ? we(this, s, "_pt") : s.dep || (t = 1), s = a;
          return !t
        },
        na = (e, t, a, s) => {
          s.mSet(e, t, s.m.call(s.tween, a, s.mt), s)
        },
        ca = e => {
          let t, a, s, i, r = e._pt;
          for (; r;) {
            for (t = r._next, a = s; a && a.pr > r.pr;) a = a._next;
            (r._prev = a ? a._prev : i) ? r._prev._next = r: s = r, (r._next = a) ? a._prev = r : i = r, r = t
          }
          e._pt = s
        };
      class oa {
        constructor(e, t, a, s, i, r, n, c, o) {
          this.t = t, this.s = s, this.c = i, this.p = a, this.r = r || ea, this.d = n || this, this.set = c || Yt, this.pr = o || 0, this._next = e, e && (e._prev = this)
        }
        modifier(e, t, a) {
          this.mSet = this.mSet || this.set, this.set = na, this.m = e, this.mt = a, this.tween = t
        }
      }
      oe(ie + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", (e => Q[e] = 1)), R.TweenMax = R.TweenLite = Xt, R.TimelineLite = R.TimelineMax = Dt, n = new Dt({
        sortChildren: !1,
        defaults: p,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
      }), f.stringFilter = yt;
      let la = [],
        da = {},
        ma = [],
        ga = 0,
        ua = 0,
        fa = e => (da[e] || ma).map((e => e())),
        pa = () => {
          let e = Date.now(),
            t = [];
          e - ga > 2 && (fa("matchMediaInit"), la.forEach((e => {
            let a, s, i, r, n = e.queries,
              o = e.conditions;
            for (s in n) a = c.matchMedia(n[s]).matches, a && (i = 1), a !== o[s] && (o[s] = a, r = 1);
            r && (e.revert(), i && t.push(e))
          })), fa("matchMediaRevert"), t.forEach((e => e.onMatch(e))), ga = e, fa("matchMedia"))
        };
      class _a {
        constructor(e, t) {
          this.selector = t && Ke(t), this.data = [], this._r = [], this.isReverted = !1, this.id = ua++, e && this.add(e)
        }
        add(e, t, a) {
          j(e) && (a = t, t = e, e = j);
          let s = this,
            i = function() {
              let e, i = r,
                n = s.selector;
              return i && i !== s && i.data.push(s), a && (s.selector = Ke(a)), r = s, e = t.apply(s, arguments), j(e) && s._r.push(e), r = i, s.selector = n, s.isReverted = !1, e
            };
          return s.last = i, e === j ? i(s) : e ? s[e] = i : i
        }
        ignore(e) {
          let t = r;
          r = null, e(this), r = t
        }
        getTweens() {
          let e = [];
          return this.data.forEach((t => t instanceof _a ? e.push(...t.getTweens()) : t instanceof Xt && !(t.parent && "nested" === t.parent.data) && e.push(t))), e
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
      class ha {
        constructor(e) {
          this.contexts = [], this.scope = e
        }
        add(e, t, a) {
          C(e) || (e = {
            matches: e
          });
          let s, i, n, o = new _a(0, a || this.scope),
            l = o.conditions = {};
          for (i in r && !o.selector && (o.selector = r.selector), this.contexts.push(o), t = o.add("onMatch", t), o.queries = e, e) "all" === i ? n = 1 : (s = c.matchMedia(e[i]), s && (la.indexOf(o) < 0 && la.push(o), (l[i] = s.matches) && (n = 1), s.addListener ? s.addListener(pa) : s.addEventListener("change", pa)));
          return n && t(o), this
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
          t.forEach((e => gt(e)))
        },
        timeline: e => new Dt(e),
        getTweensOf: (e, t) => n.getTweensOf(e, t),
        getProperty(e, t, a, s) {
          N(e) && (e = Ye(e)[0]);
          let i = ne(e || {}).get,
            r = a ? _e : pe;
          return "native" === a && (a = ""), e ? t ? r((ee[t] && ee[t].get || i)(e, t, a, s)) : (t, a, s) => r((ee[t] && ee[t].get || i)(e, t, a, s)) : e
        },
        quickSetter(e, t, a) {
          if ((e = Ye(e)).length > 1) {
            let s = e.map((e => ya.quickSetter(e, t, a))),
              i = s.length;
            return e => {
              let t = i;
              for (; t--;) s[t](e)
            }
          }
          e = e[0] || {};
          let s = ee[t],
            i = ne(e),
            r = i.harness && (i.harness.aliases || {})[t] || t,
            n = s ? t => {
              let i = new s;
              g._pt = 0, i.init(e, a ? t + a : t, g, 0, [e]), i.render(1, i), g._pt && sa(1, g)
            } : i.set(e, r);
          return s ? n : t => n(e, r, a ? t + a : t, i, 1)
        },
        quickTo(e, t, a) {
          let s = ya.to(e, ke({
              [t]: "+=0.1",
              paused: !0
            }, a || {})),
            i = (e, a, i) => s.resetTo(t, e, a, i);
          return i.tween = s, i
        },
        isTweening: e => n.getTweensOf(e, !0).length > 0,
        defaults: e => (e && e.ease && (e.ease = It(e.ease, p.ease)), be(p, e || {})),
        config: e => be(f, e || {}),
        registerEffect(e) {
          let {
            name: t,
            effect: a,
            plugins: s,
            defaults: i,
            extendTimeline: r
          } = e;
          (s || "").split(",").forEach((e => e && !ee[e] && !R[e] && H(t + " effect requires " + e + " plugin."))), te[t] = (e, t, s) => a(Ye(e), he(t || {}, i), s), r && (Dt.prototype[t] = function(e, a, s) {
            return this.add(te[t](e, C(a) ? a : (s = a) && {}, this), s)
          })
        },
        registerEase(e, t) {
          Nt[e] = It(t)
        },
        parseEase(e, t) {
          return arguments.length ? It(e, t) : Nt
        },
        getById: e => n.getById(e),
        exportRoot() {
          let e, t, a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            s = arguments.length > 1 ? arguments[1] : void 0,
            i = new Dt(a);
          for (i.smoothChildTiming = M(a.smoothChildTiming), n.remove(i), i._dp = 0, i._time = i._tTime = n._time, e = n._first; e;) t = e._next, !s && !e._dur && e instanceof Xt && e.vars.onComplete === e._targets[0] || Pe(i, e, e._start - e._delay), e = t;
          return Pe(n, i, 0), i
        },
        context: (e, t) => e ? new _a(e, t) : r,
        matchMedia: e => new ha(e),
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
          wrapYoyo: it,
          distribute: Ze,
          random: tt,
          snap: et,
          normalize: (e, t, a) => nt(e, t, 0, 1, a),
          getUnit: We,
          clamp: (e, t, a) => Ge(a, (a => He(e, t, a))),
          splitColor: _t,
          toArray: Ye,
          selector: Ke,
          mapRange: nt,
          pipe: function() {
            for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
            return e => t.reduce(((e, t) => t(e)), e)
          },
          unitize: (e, t) => a => e(parseFloat(a)) + (t || We(a)),
          interpolate: ct,
          shuffle: Qe
        },
        install: U,
        effects: te,
        ticker: xt,
        updateRoot: Dt.updateRoot,
        plugins: ee,
        globalTimeline: n,
        core: {
          PropTween: oa,
          globals: W,
          Tween: Xt,
          Timeline: Dt,
          Animation: At,
          getCache: ne,
          _removeLinkedListItem: we,
          reverting: () => i,
          context: e => (e && r && (r.data.push(e), e._ctx = r), r),
          suppressOverwrites: e => s = e
        }
      };
      oe("to,from,fromTo,delayedCall,set,killTweensOf", (e => ka[e] = Xt[e])), xt.add(Dt.updateRoot), g = ka.to({}, {
        duration: 0
      });
      let ba = (e, t) => {
          let a = e._pt;
          for (; a && a.p !== t && a.op !== t && a.fp !== t;) a = a._next;
          return a
        },
        va = (e, t) => ({
          name: e,
          rawVars: 1,
          init(e, a, s) {
            s._onInit = e => {
              let s, i;
              if (N(a) && (s = {}, oe(a, (e => s[e] = 1)), a = s), t) {
                for (i in s = {}, a) s[i] = t(a[i]);
                a = s
              }((e, t) => {
                let a, s, i, r = e._targets;
                for (a in t)
                  for (s = r.length; s--;) i = e._ptLookup[s][a], i && (i = i.d) && (i._pt && (i = ba(i, a)), i && i.modifier && i.modifier(t[a], e, r[s], a))
              })(e, a)
            }
          }
        });
      const ya = ka.registerPlugin({
        name: "attr",
        init(e, t, a, s, i) {
          let r, n, c;
          for (r in this.tween = a, t) c = e.getAttribute(r) || "", n = this.add(e, "setAttribute", (c || 0) + "", t[r], s, i, 0, 0, r), n.op = r, n.b = c, this._props.push(r)
        },
        render(e, t) {
          let a = t._pt;
          for (; a;) i ? a.set(a.t, a.p, a.b, a) : a.r(e, a.d), a = a._next
        }
      }, {
        name: "endArray",
        init(e, t) {
          let a = t.length;
          for (; a--;) this.add(e, a, e[a] || 0, t[a], 0, 0, 0, 0, 0, 1)
        }
      }, va("roundProps", Je), va("modifiers"), va("snap", et)) || ka;
      Xt.version = Dt.version = ya.version = "3.12.2", d = 1, I() && wt();
      const {
        Power0: xa,
        Power1: wa,
        Power2: Na,
        Power3: ja,
        Power4: Sa,
        Linear: Ta,
        Quad: Ca,
        Cubic: Ma,
        Quart: Ia,
        Quint: Ea,
        Strong: La,
        Elastic: za,
        Back: Pa,
        SteppedEase: Oa,
        Bounce: Aa,
        Sine: Da,
        Expo: Ba,
        Circ: Va
      } = Nt;
      let Fa, Ra, $a, Ua, Ga, Ha, Wa, qa, Xa, Ya = {},
        Ka = 180 / Math.PI,
        Qa = Math.PI / 180,
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
        is = (e, t) => t.set(t.t, t.p, 1 === e ? t.e : Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u, t),
        rs = (e, t) => t.set(t.t, t.p, e ? Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u : t.b, t),
        ns = (e, t) => {
          let a = t.s + t.c * e;
          t.set(t.t, t.p, ~~(a + (a < 0 ? -.5 : .5)) + t.u, t)
        },
        cs = (e, t) => t.set(t.t, t.p, e ? t.e : t.b, t),
        os = (e, t) => t.set(t.t, t.p, 1 !== e ? t.b : t.e, t),
        ls = (e, t, a) => e.style[t] = a,
        ds = (e, t, a) => e.style.setProperty(t, a),
        ms = (e, t, a) => e._gsap[t] = a,
        gs = (e, t, a) => e._gsap.scaleX = e._gsap.scaleY = a,
        us = (e, t, a, s, i) => {
          let r = e._gsap;
          r.scaleX = r.scaleY = a, r.renderTransform(i, r)
        },
        fs = (e, t, a, s, i) => {
          let r = e._gsap;
          r[t] = a, r.renderTransform(i, r)
        },
        ps = "transform",
        _s = ps + "Origin",
        hs = function(e, t) {
          let a = this.target,
            s = a.style;
          if (e in Ya && s) {
            if (this.tfm = this.tfm || {}, "transform" === e) return as.transform.split(",").forEach((e => hs.call(this, e, t)));
            if (~(e = as[e] || e).indexOf(",") ? e.split(",").forEach((e => this.tfm[e] = Os(a, e))) : this.tfm[e] = a._gsap.x ? a._gsap[e] : Os(a, e), this.props.indexOf(ps) >= 0) return;
            a._gsap.svg && (this.svgo = a.getAttribute("data-svg-origin"), this.props.push(_s, t, "")), e = ps
          }(s || t) && this.props.push(e, t, s[e])
        },
        ks = e => {
          e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"))
        },
        bs = function() {
          let e, t, a = this.props,
            s = this.target,
            i = s.style,
            r = s._gsap;
          for (e = 0; e < a.length; e += 3) a[e + 1] ? s[a[e]] = a[e + 2] : a[e + 2] ? i[a[e]] = a[e + 2] : i.removeProperty("--" === a[e].substr(0, 2) ? a[e] : a[e].replace(Ja, "-$1").toLowerCase());
          if (this.tfm) {
            for (t in this.tfm) r[t] = this.tfm[t];
            r.svg && (r.renderTransform(), s.setAttribute("data-svg-origin", this.svgo || "")), e = qa(), e && e.isStart || i[ps] || (ks(i), r.uncache = 1)
          }
        },
        vs = (e, t) => {
          let a = {
            target: e,
            props: [],
            revert: bs,
            save: hs
          };
          return e._gsap || ya.core.getCache(e), t && t.split(",").forEach((e => a.save(e))), a
        },
        ys = (e, t) => {
          let a = Ra.createElementNS ? Ra.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : Ra.createElement(e);
          return a.style ? a : Ra.createElement(e)
        },
        xs = (e, t, a) => {
          let s = getComputedStyle(e);
          return s[t] || s.getPropertyValue(t.replace(Ja, "-$1").toLowerCase()) || s.getPropertyValue(t) || !a && xs(e, Ns(t) || t, 1) || ""
        },
        ws = "O,Moz,ms,Ms,Webkit".split(","),
        Ns = (e, t, a) => {
          let s = (t || Ga).style,
            i = 5;
          if (e in s && !a) return e;
          for (e = e.charAt(0).toUpperCase() + e.substr(1); i-- && !(ws[i] + e in s););
          return i < 0 ? null : (3 === i ? "ms" : i >= 0 ? ws[i] : "") + e
        },
        js = () => {
          "undefined" != typeof window && window.document && (Fa = window, Ra = Fa.document, $a = Ra.documentElement, Ga = ys("div") || {
            style: {}
          }, Ha = ys("div"), ps = Ns(ps), _s = ps + "Origin", Ga.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Xa = !!Ns("perspective"), qa = ya.core.reverting, Ua = 1)
        },
        Ss = function(e) {
          let t, a = ys("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
            s = this.parentNode,
            i = this.nextSibling,
            r = this.style.cssText;
          if ($a.appendChild(a), a.appendChild(this), this.style.display = "block", e) try {
            t = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = Ss
          } catch (e) {} else this._gsapBBox && (t = this._gsapBBox());
          return s && (i ? s.insertBefore(this, i) : s.appendChild(this)), $a.removeChild(a), this.style.cssText = r, t
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
        Ms = e => !(!e.getCTM || e.parentNode && !e.ownerSVGElement || !Cs(e)),
        Is = (e, t) => {
          if (t) {
            let a = e.style;
            t in Ya && t !== _s && (t = ps), a.removeProperty ? ("ms" !== t.substr(0, 2) && "webkit" !== t.substr(0, 6) || (t = "-" + t), a.removeProperty(t.replace(Ja, "-$1").toLowerCase())) : a.removeAttribute(t)
          }
        },
        Es = (e, t, a, s, i, r) => {
          let n = new oa(e._pt, t, a, 0, 1, r ? os : cs);
          return e._pt = n, n.b = s, n.e = i, e._props.push(a), n
        },
        Ls = {
          deg: 1,
          rad: 1,
          turn: 1
        },
        zs = {
          grid: 1,
          flex: 1
        },
        Ps = (e, t, a, s) => {
          let i, r, n, c, o = parseFloat(a) || 0,
            l = (a + "").trim().substr((o + "").length) || "px",
            d = Ga.style,
            m = es.test(t),
            g = "svg" === e.tagName.toLowerCase(),
            u = (g ? "client" : "offset") + (m ? "Width" : "Height"),
            f = 100,
            p = "px" === s,
            _ = "%" === s;
          return s === l || !o || Ls[s] || Ls[l] ? o : ("px" !== l && !p && (o = Ps(e, t, a, "px")), c = e.getCTM && Ms(e), !_ && "%" !== l || !Ya[t] && !~t.indexOf("adius") ? (d[m ? "width" : "height"] = f + (p ? l : s), r = ~t.indexOf("adius") || "em" === s && e.appendChild && !g ? e : e.parentNode, c && (r = (e.ownerSVGElement || {}).parentNode), r && r !== Ra && r.appendChild || (r = Ra.body), n = r._gsap, n && _ && n.width && m && n.time === xt.time && !n.uncache ? le(o / n.width * f) : ((_ || "%" === l) && !zs[xs(r, "display")] && (d.position = xs(e, "position")), r === e && (d.position = "static"), r.appendChild(Ga), i = Ga[u], r.removeChild(Ga), d.position = "absolute", m && _ && (n = ne(r), n.time = xt.time, n.width = r[u]), le(p ? i * o / f : i && o ? f / i * o : 0))) : (i = c ? e.getBBox()[m ? "width" : "height"] : e[u], le(_ ? o / i * f : o / 100 * i)))
        },
        Os = (e, t, a, s) => {
          let i;
          return Ua || js(), t in as && "transform" !== t && ~(t = as[t]).indexOf(",") && (t = t.split(",")[0]), Ya[t] && "transform" !== t ? (i = qs(e, s), i = "transformOrigin" !== t ? i[t] : i.svg ? i.origin : Xs(xs(e, _s)) + " " + i.zOrigin + "px") : (i = e.style[t], (!i || "auto" === i || s || ~(i + "").indexOf("calc(")) && (i = Fs[t] && Fs[t](e, t, a) || xs(e, t) || ce(e, t) || ("opacity" === t ? 1 : 0))), a && !~(i + "").trim().indexOf(" ") ? Ps(e, t, i, a) + a : i
        },
        As = function(e, t, a, s) {
          if (!a || "none" === a) {
            let s = Ns(t, e, 1),
              i = s && xs(e, s, 1);
            i && i !== a ? (t = s, a = i) : "borderColor" === t && (a = xs(e, "borderTopColor"))
          }
          let i, r, n, c, o, l, d, m, g, u, p, _, h = new oa(this._pt, e.style, t, 0, 1, aa),
            k = 0,
            b = 0;
          if (h.b = a, h.e = s, a += "", "auto" == (s += "") && (e.style[t] = s, s = xs(e, t) || s, e.style[t] = a), i = [a, s], yt(i), s = i[1], n = (a = i[0]).match(A) || [], _ = s.match(A) || [], _.length) {
            for (; r = A.exec(s);) d = r[0], g = s.substring(k, r.index), o ? o = (o + 1) % 5 : "rgba(" !== g.substr(-5) && "hsla(" !== g.substr(-5) || (o = 1), d !== (l = n[b++] || "") && (c = parseFloat(l) || 0, p = l.substr((c + "").length), "=" === d.charAt(1) && (d = me(c, d) + p), m = parseFloat(d), u = d.substr((m + "").length), k = A.lastIndex - u.length, u || (u = u || f.units[t] || p, k === s.length && (s += u, h.e += u)), p !== u && (c = Ps(e, t, l, u) || 0), h._pt = {
              _next: h._pt,
              p: g || 1 === b ? g : ",",
              s: c,
              c: m - c,
              m: o && o < 4 || "zIndex" === t ? Math.round : 0
            });
            h.c = k < s.length ? s.substring(k, s.length) : ""
          } else h.r = "display" === t && "none" === s ? os : cs;
          return B.test(s) && (h.e = 0), this._pt = h, h
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
            let e, a, s, i = t.t,
              r = i.style,
              n = t.u,
              c = i._gsap;
            if ("all" === n || !0 === n) r.cssText = "", a = 1;
            else
              for (n = n.split(","), s = n.length; --s > -1;) e = n[s], Ya[e] && (a = 1, e = "transformOrigin" === e ? _s : ps), Is(i, e);
            a && (Is(i, ps), c && (c.svg && i.removeAttribute("transform"), qs(i, 1), c.uncache = 1, ks(r)))
          }
        },
        Fs = {
          clearProps(e, t, a, s, i) {
            if ("isFromStart" !== i.data) {
              let r = e._pt = new oa(e._pt, t, a, 0, 0, Vs);
              return r.u = s, r.pr = -10, r.tween = i, e._props.push(a), 1
            }
          }
        },
        Rs = [1, 0, 0, 1, 0, 0],
        $s = {},
        Us = e => "matrix(1, 0, 0, 1, 0, 0)" === e || "none" === e || !e,
        Gs = e => {
          let t = xs(e, ps);
          return Us(t) ? Rs : t.substr(7).match(O).map(le)
        },
        Hs = (e, t) => {
          let a, s, i, r, n = e._gsap || ne(e),
            c = e.style,
            o = Gs(e);
          return n.svg && e.getAttribute("transform") ? (i = e.transform.baseVal.consolidate().matrix, o = [i.a, i.b, i.c, i.d, i.e, i.f], "1,0,0,1,0,0" === o.join(",") ? Rs : o) : (o !== Rs || e.offsetParent || e === $a || n.svg || (i = c.display, c.display = "block", a = e.parentNode, a && e.offsetParent || (r = 1, s = e.nextElementSibling, $a.appendChild(e)), o = Gs(e), i ? c.display = i : Is(e, "display"), r && (s ? a.insertBefore(e, s) : a ? a.appendChild(e) : $a.removeChild(e))), t && o.length > 6 ? [o[0], o[1], o[4], o[5], o[12], o[13]] : o)
        },
        Ws = (e, t, a, s, i, r) => {
          let n, c, o, l, d = e._gsap,
            m = i || Hs(e, !0),
            g = d.xOrigin || 0,
            u = d.yOrigin || 0,
            f = d.xOffset || 0,
            p = d.yOffset || 0,
            _ = m[0],
            h = m[1],
            k = m[2],
            b = m[3],
            v = m[4],
            y = m[5],
            x = t.split(" "),
            w = parseFloat(x[0]) || 0,
            N = parseFloat(x[1]) || 0;
          a ? m !== Rs && (c = _ * b - h * k) && (o = w * (b / c) + N * (-k / c) + (k * y - b * v) / c, l = w * (-h / c) + N * (_ / c) - (_ * y - h * v) / c, w = o, N = l) : (n = Cs(e), w = n.x + (~x[0].indexOf("%") ? w / 100 * n.width : w), N = n.y + (~(x[1] || x[0]).indexOf("%") ? N / 100 * n.height : N)), s || !1 !== s && d.smooth ? (v = w - g, y = N - u, d.xOffset = f + (v * _ + y * k) - v, d.yOffset = p + (v * h + y * b) - y) : d.xOffset = d.yOffset = 0, d.xOrigin = w, d.yOrigin = N, d.smooth = !!s, d.origin = t, d.originIsAbsolute = !!a, e.style[_s] = "0px 0px", r && (Es(r, d, "xOrigin", g, w), Es(r, d, "yOrigin", u, N), Es(r, d, "xOffset", f, d.xOffset), Es(r, d, "yOffset", p, d.yOffset)), e.setAttribute("data-svg-origin", w + " " + N)
        },
        qs = (e, t) => {
          let a = e._gsap || new Ot(e);
          if ("x" in a && !t && !a.uncache) return a;
          let s, i, r, n, c, o, l, d, m, g, u, p, _, h, k, b, v, y, x, w, N, j, S, T, C, M, I, E, L, z, P, O, A = e.style,
            D = a.scaleX < 0,
            B = "px",
            V = "deg",
            F = getComputedStyle(e),
            R = xs(e, _s) || "0";
          return s = i = r = o = l = d = m = g = u = 0, n = c = 1, a.svg = !(!e.getCTM || !Ms(e)), F.translate && ("none" === F.translate && "none" === F.scale && "none" === F.rotate || (A[ps] = ("none" !== F.translate ? "translate3d(" + (F.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== F.rotate ? "rotate(" + F.rotate + ") " : "") + ("none" !== F.scale ? "scale(" + F.scale.split(" ").join(",") + ") " : "") + ("none" !== F[ps] ? F[ps] : "")), A.scale = A.rotate = A.translate = "none"), h = Hs(e, a.svg), a.svg && (a.uncache ? (C = e.getBBox(), R = a.xOrigin - C.x + "px " + (a.yOrigin - C.y) + "px", T = "") : T = !t && e.getAttribute("data-svg-origin"), Ws(e, T || R, !!T || a.originIsAbsolute, !1 !== a.smooth, h)), p = a.xOrigin || 0, _ = a.yOrigin || 0, h !== Rs && (y = h[0], x = h[1], w = h[2], N = h[3], s = j = h[4], i = S = h[5], 6 === h.length ? (n = Math.sqrt(y * y + x * x), c = Math.sqrt(N * N + w * w), o = y || x ? Za(x, y) * Ka : 0, m = w || N ? Za(w, N) * Ka + o : 0, m && (c *= Math.abs(Math.cos(m * Qa))), a.svg && (s -= p - (p * y + _ * w), i -= _ - (p * x + _ * N))) : (O = h[6], z = h[7], I = h[8], E = h[9], L = h[10], P = h[11], s = h[12], i = h[13], r = h[14], k = Za(O, L), l = k * Ka, k && (b = Math.cos(-k), v = Math.sin(-k), T = j * b + I * v, C = S * b + E * v, M = O * b + L * v, I = j * -v + I * b, E = S * -v + E * b, L = O * -v + L * b, P = z * -v + P * b, j = T, S = C, O = M), k = Za(-w, L), d = k * Ka, k && (b = Math.cos(-k), v = Math.sin(-k), T = y * b - I * v, C = x * b - E * v, M = w * b - L * v, P = N * v + P * b, y = T, x = C, w = M), k = Za(x, y), o = k * Ka, k && (b = Math.cos(k), v = Math.sin(k), T = y * b + x * v, C = j * b + S * v, x = x * b - y * v, S = S * b - j * v, y = T, j = C), l && Math.abs(l) + Math.abs(o) > 359.9 && (l = o = 0, d = 180 - d), n = le(Math.sqrt(y * y + x * x + w * w)), c = le(Math.sqrt(S * S + O * O)), k = Za(j, S), m = Math.abs(k) > 2e-4 ? k * Ka : 0, u = P ? 1 / (P < 0 ? -P : P) : 0), a.svg && (T = e.getAttribute("transform"), a.forceCSS = e.setAttribute("transform", "") || !Us(xs(e, ps)), T && e.setAttribute("transform", T))), Math.abs(m) > 90 && Math.abs(m) < 270 && (D ? (n *= -1, m += o <= 0 ? 180 : -180, o += o <= 0 ? 180 : -180) : (c *= -1, m += m <= 0 ? 180 : -180)), t = t || a.uncache, a.x = s - ((a.xPercent = s && (!t && a.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-s) ? -50 : 0))) ? e.offsetWidth * a.xPercent / 100 : 0) + B, a.y = i - ((a.yPercent = i && (!t && a.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-i) ? -50 : 0))) ? e.offsetHeight * a.yPercent / 100 : 0) + B, a.z = r + B, a.scaleX = le(n), a.scaleY = le(c), a.rotation = le(o) + V, a.rotationX = le(l) + V, a.rotationY = le(d) + V, a.skewX = m + V, a.skewY = g + V, a.transformPerspective = u + B, (a.zOrigin = parseFloat(R.split(" ")[2]) || 0) && (A[_s] = Xs(R)), a.xOffset = a.yOffset = 0, a.force3D = f.force3D, a.renderTransform = a.svg ? ti : Xa ? ei : Ks, a.uncache = 0, a
        },
        Xs = e => (e = e.split(" "))[0] + " " + e[1],
        Ys = (e, t, a) => {
          let s = We(t);
          return le(parseFloat(t) + parseFloat(Ps(e, "x", a + "px", s))) + s
        },
        Ks = (e, t) => {
          t.z = "0px", t.rotationY = t.rotationX = "0deg", t.force3D = 0, ei(e, t)
        },
        Qs = "0deg",
        Zs = "0px",
        Js = ") ",
        ei = function(e, t) {
          let {
            xPercent: a,
            yPercent: s,
            x: i,
            y: r,
            z: n,
            rotation: c,
            rotationY: o,
            rotationX: l,
            skewX: d,
            skewY: m,
            scaleX: g,
            scaleY: u,
            transformPerspective: f,
            force3D: p,
            target: _,
            zOrigin: h
          } = t || this, k = "", b = "auto" === p && e && 1 !== e || !0 === p;
          if (h && (l !== Qs || o !== Qs)) {
            let e, t = parseFloat(o) * Qa,
              a = Math.sin(t),
              s = Math.cos(t);
            t = parseFloat(l) * Qa, e = Math.cos(t), i = Ys(_, i, a * e * -h), r = Ys(_, r, -Math.sin(t) * -h), n = Ys(_, n, s * e * -h + h)
          }
          f !== Zs && (k += "perspective(" + f + Js), (a || s) && (k += "translate(" + a + "%, " + s + "%) "), (b || i !== Zs || r !== Zs || n !== Zs) && (k += n !== Zs || b ? "translate3d(" + i + ", " + r + ", " + n + ") " : "translate(" + i + ", " + r + Js), c !== Qs && (k += "rotate(" + c + Js), o !== Qs && (k += "rotateY(" + o + Js), l !== Qs && (k += "rotateX(" + l + Js), d === Qs && m === Qs || (k += "skew(" + d + ", " + m + Js), 1 === g && 1 === u || (k += "scale(" + g + ", " + u + Js), _.style[ps] = k || "translate(0, 0)"
        },
        ti = function(e, t) {
          let a, s, i, r, n, {
              xPercent: c,
              yPercent: o,
              x: l,
              y: d,
              rotation: m,
              skewX: g,
              skewY: u,
              scaleX: f,
              scaleY: p,
              target: _,
              xOrigin: h,
              yOrigin: k,
              xOffset: b,
              yOffset: v,
              forceCSS: y
            } = t || this,
            x = parseFloat(l),
            w = parseFloat(d);
          m = parseFloat(m), g = parseFloat(g), u = parseFloat(u), u && (u = parseFloat(u), g += u, m += u), m || g ? (m *= Qa, g *= Qa, a = Math.cos(m) * f, s = Math.sin(m) * f, i = Math.sin(m - g) * -p, r = Math.cos(m - g) * p, g && (u *= Qa, n = Math.tan(g - u), n = Math.sqrt(1 + n * n), i *= n, r *= n, u && (n = Math.tan(u), n = Math.sqrt(1 + n * n), a *= n, s *= n)), a = le(a), s = le(s), i = le(i), r = le(r)) : (a = f, r = p, s = i = 0), (x && !~(l + "").indexOf("px") || w && !~(d + "").indexOf("px")) && (x = Ps(_, "x", l, "px"), w = Ps(_, "y", d, "px")), (h || k || b || v) && (x = le(x + h - (h * a + k * i) + b), w = le(w + k - (h * s + k * r) + v)), (c || o) && (n = _.getBBox(), x = le(x + c / 100 * n.width), w = le(w + o / 100 * n.height)), n = "matrix(" + a + "," + s + "," + i + "," + r + "," + x + "," + w + ")", _.setAttribute("transform", n), y && (_.style[ps] = n)
        },
        ai = function(e, t, a, s, i) {
          let r, n, c = 360,
            o = N(i),
            l = parseFloat(i) * (o && ~i.indexOf("rad") ? Ka : 1) - s,
            d = s + l + "deg";
          return o && (r = i.split("_")[1], "short" === r && (l %= c, l !== l % 180 && (l += l < 0 ? c : -360)), "cw" === r && l < 0 ? l = (l + 36e9) % c - ~~(l / c) * c : "ccw" === r && l > 0 && (l = (l - 36e9) % c - ~~(l / c) * c)), e._pt = n = new oa(e._pt, t, a, s, l, is), n.e = d, n.u = "deg", e._props.push(a), n
        },
        si = (e, t) => {
          for (let a in t) e[a] = t[a];
          return e
        },
        ii = (e, t, a) => {
          let s, i, r, n, c, o, l, d, m = si({}, a._gsap),
            g = a.style;
          for (i in m.svg ? (r = a.getAttribute("transform"), a.setAttribute("transform", ""), g[ps] = t, s = qs(a, 1), Is(a, ps), a.setAttribute("transform", r)) : (r = getComputedStyle(a)[ps], g[ps] = t, s = qs(a, 1), g[ps] = r), Ya) r = m[i], n = s[i], r !== n && "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) < 0 && (l = We(r), d = We(n), c = l !== d ? Ps(a, i, r, d) : parseFloat(r), o = parseFloat(n), e._pt = new oa(e._pt, s, i, c, o - c, ss), e._pt.u = d || 0, e._props.push(i));
          si(s, m)
        };
      oe("padding,margin,Width,Radius", ((e, t) => {
        let a = "Top",
          s = "Right",
          i = "Bottom",
          r = "Left",
          n = (t < 3 ? [a, s, i, r] : [a + r, a + s, i + s, i + r]).map((a => t < 2 ? e + a : "border" + a + e));
        Fs[t > 1 ? "border" + e : e] = function(e, t, a, s, i) {
          let r, c;
          if (arguments.length < 4) return r = n.map((t => Os(e, t, a))), c = r.join(" "), 5 === c.split(r[0]).length ? r[0] : c;
          r = (s + "").split(" "), c = {}, n.forEach(((e, t) => c[e] = r[t] = r[t] || r[(t - 1) / 2 | 0])), e.init(t, c, i)
        }
      }));
      const ri = {
        name: "css",
        register: js,
        targetTest: e => e.style && e.nodeType,
        init(e, t, a, s, i) {
          let r, n, c, o, l, d, m, g, u, p, _, h, k, b, v, y, x = this._props,
            w = e.style,
            j = a.vars.startAt;
          for (m in Ua || js(), this.styles = this.styles || vs(e), y = this.styles.props, this.tween = a, t)
            if ("autoRound" !== m && (n = t[m], !ee[m] || !$t(m, t, a, s, e, i)))
              if (l = typeof n, d = Fs[m], "function" === l && (n = n.call(a, s, e, i), l = typeof n), "string" === l && ~n.indexOf("random(") && (n = rt(n)), d) d(this, e, m, n, a) && (v = 1);
              else if ("--" === m.substr(0, 2)) r = (getComputedStyle(e).getPropertyValue(m) + "").trim(), n += "", bt.lastIndex = 0, bt.test(r) || (g = We(r), u = We(n)), u ? g !== u && (r = Ps(e, m, r, u) + u) : g && (n += g), this.add(w, "setProperty", r, n, s, i, 0, 0, m), x.push(m), y.push(m, 0, w[m]);
          else if ("undefined" !== l) {
            if (j && m in j ? (r = "function" == typeof j[m] ? j[m].call(a, s, e, i) : j[m], N(r) && ~r.indexOf("random(") && (r = rt(r)), We(r + "") || (r += f.units[m] || We(Os(e, m)) || ""), "=" === (r + "").charAt(1) && (r = Os(e, m))) : r = Os(e, m), o = parseFloat(r), p = "string" === l && "=" === n.charAt(1) && n.substr(0, 2), p && (n = n.substr(2)), c = parseFloat(n), m in as && ("autoAlpha" === m && (1 === o && "hidden" === Os(e, "visibility") && c && (o = 0), y.push("visibility", 0, w.visibility), Es(this, w, "visibility", o ? "inherit" : "hidden", c ? "inherit" : "hidden", !c)), "scale" !== m && "transform" !== m && (m = as[m], ~m.indexOf(",") && (m = m.split(",")[0]))), _ = m in Ya, _)
              if (this.styles.save(m), h || (k = e._gsap, k.renderTransform && !t.parseTransform || qs(e, t.parseTransform), b = !1 !== t.smoothOrigin && k.smooth, h = this._pt = new oa(this._pt, w, ps, 0, 1, k.renderTransform, k, 0, -1), h.dep = 1), "scale" === m) this._pt = new oa(this._pt, k, "scaleY", k.scaleY, (p ? me(k.scaleY, p + c) : c) - k.scaleY || 0, ss), this._pt.u = 0, x.push("scaleY", m), m += "X";
              else {
                if ("transformOrigin" === m) {
                  y.push(_s, 0, w[_s]), n = Bs(n), k.svg ? Ws(e, n, 0, b, 0, this) : (u = parseFloat(n.split(" ")[2]) || 0, u !== k.zOrigin && Es(this, k, "zOrigin", k.zOrigin, u), Es(this, w, m, Xs(r), Xs(n)));
                  continue
                }
                if ("svgOrigin" === m) {
                  Ws(e, n, 1, b, 0, this);
                  continue
                }
                if (m in $s) {
                  ai(this, k, m, o, p ? me(o, p + n) : n);
                  continue
                }
                if ("smoothOrigin" === m) {
                  Es(this, k, "smooth", k.smooth, n);
                  continue
                }
                if ("force3D" === m) {
                  k[m] = n;
                  continue
                }
                if ("transform" === m) {
                  ii(this, n, e);
                  continue
                }
              }
            else m in w || (m = Ns(m) || m);
            if (_ || (c || 0 === c) && (o || 0 === o) && !ts.test(n) && m in w) g = (r + "").substr((o + "").length), c || (c = 0), u = We(n) || (m in f.units ? f.units[m] : g), g !== u && (o = Ps(e, m, r, u)), this._pt = new oa(this._pt, _ ? k : w, m, o, (p ? me(o, p + c) : c) - o, _ || "px" !== u && "zIndex" !== m || !1 === t.autoRound ? ss : ns), this._pt.u = u || 0, g !== u && "%" !== u && (this._pt.b = r, this._pt.r = rs);
            else if (m in w) As.call(this, e, m, r, p ? p + n : n);
            else if (m in e) this.add(e, m, r || e[m], p ? p + n : n, s, i);
            else if ("parseTransform" !== m) {
              G(m, n);
              continue
            }
            _ || (m in w ? y.push(m, 0, w[m]) : y.push(m, 1, r || e[m])), x.push(m)
          }
          v && ca(this)
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
          return s && s.indexOf(",") < 0 && (t = s), t in Ya && t !== _s && (e._gsap.x || Os(e, "x")) ? a && Wa === a ? "scale" === t ? gs : ms : (Wa = a || {}) && ("scale" === t ? us : fs) : e.style && !T(e.style[t]) ? ls : ~t.indexOf("-") ? ds : Jt(e, t)
        },
        core: {
          _removeProperty: Is,
          _getMatrix: Hs
        }
      };
      ya.utils.checkPrefix = Ns, ya.core.getStyleSaver = vs,
        function(e, t, a, s) {
          let i = oe(e + "," + t + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", (e => {
            Ya[e] = 1
          }));
          oe(t, (e => {
            f.units[e] = "deg", $s[e] = 1
          })), as[i[13]] = e + "," + t, oe("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", (e => {
            let t = e.split(":");
            as[t[1]] = i[t[0]]
          }))
        }("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY"), oe("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", (e => {
          f.units[e] = "px"
        })), ya.registerPlugin(ri);
      const ni = ya.registerPlugin(ri) || ya;
      ni.core.Tween
    },
    52256: (e, t, a) => {
      "use strict";
      a.d(t, {
        c: () => m
      });
      var s = a(51664),
        i = a(8560),
        r = a.n(i),
        n = a(1740),
        c = a(45792);
      const o = {
        pillBtn: "rockstargames-sites-legacyf87ac9a7d56545847cf4d8ca471b03e6",
        selected: "rockstargames-sites-legacya8ea61e57fd58bfcb99aef7e6d687045",
        grid: "rockstargames-sites-legacya57241f29873f89f89ab8b27994e71c3",
        itemList: "rockstargames-sites-legacydaec3f5ce63d42cb07e3e724737c8361",
        gtaplus: "rockstargames-sites-legacybd78cfb71ed31029ba4279325166bfab",
        rdo: "rockstargames-sites-legacya6244398a800ffddab72c14f717b0eab",
        noImg: "rockstargames-sites-legacye88f741af7d5e0529ff4fb6bb82af04f",
        gtao: "rockstargames-sites-legacyab60d91453348d2e4c090ef3ebb04347",
        custom: "rockstargames-sites-legacyc20e7ba6ceaba3afd37095b172797711",
        yellow: "rockstargames-sites-legacyb16672deedfe102b065925cbe0fb931c",
        hotPink: "rockstargames-sites-legacyd0d01601de7131d9d6d11321b4299e59",
        red: "rockstargames-sites-legacyd1b5397aff94d33b57674b04a3456e03",
        turquoise: "rockstargames-sites-legacyd6541b973ce158c8f2fb81483015211f",
        purple: "rockstargames-sites-legacyf3e34d902681219d4d8490eb164f7727",
        teal: "rockstargames-sites-legacya6c3b6b6a2395eb18a1174294f26f4ea",
        blue: "rockstargames-sites-legacyeade6e843c5afd48d3a8959fb0b88222",
        green: "rockstargames-sites-legacya82c313f8f85fc6304ddb703be2fa271",
        darkRed: "rockstargames-sites-legacyd394c61fdce2bf8894ffb801ee680c2a",
        darkBlue: "rockstargames-sites-legacyf1d73cc00a3ab644aab949183a8298a7",
        goldenrod: "rockstargames-sites-legacycdcb0c5076309a329da2a6e857cc3bdf",
        skull: "rockstargames-sites-legacyba4bd16bff2fbc40616457007b4a7442"
      };
      var l = a(95240);
      const {
        sanitize: d
      } = r(), m = e => {
        let {
          list: t,
          string: a,
          starColor: i,
          style: r,
          className: m,
          game: g,
          noImg: u,
          columns: f,
          mobileColumns: p
        } = e;
        const [_, h] = (0, s.useState)(null);
        return (0, s.useEffect)((() => {
          h(t)
        }), [t]), a || t ? f && _ ? (0, l.jsx)("div", {
          className: o.grid,
          style: {
            "--ordered-list-grid-column": f,
            "--ordered-list-grid-column-mobile": p ?? f
          },
          children: (0, l.jsx)("ol", {
            style: (0, c.safeStyles)(r),
            className: (0, n.classList)(o.itemList, o.noImg, o[i], o[g]),
            children: _.map((e => (0, l.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: d(e.content)
              }
            }, e.content)))
          })
        }) : (0, l.jsx)("ol", {
          style: (0, c.safeStyles)(r),
          className: (0, n.classList)(o.itemList, o.custom, u ? o.noImg : "", i ? o[i] : "", g ? o[g] : "", m ?? ""),
          children: t.map((e => (0, l.jsx)("li", {
            dangerouslySetInnerHTML: {
              __html: d(e?.content ?? e)
            }
          }, e?.content)))
        }) : null
      }
    },
    65419: (e, t, a) => {
      "use strict";
      a.d(t, {
        c: () => m
      });
      var s = a(51664),
        i = a(8560),
        r = a.n(i),
        n = a(1740),
        c = a(45792);
      const o = {
        pillBtn: "rockstargames-sites-legacya89792e50dfe5470a67f42b9e143c824",
        selected: "rockstargames-sites-legacybcce8ac50552b225f30d185d876a3e14",
        grid: "rockstargames-sites-legacyac295ed5b9cb441ed17843b34e83ea17",
        itemList: "rockstargames-sites-legacycaf5589ddeca00ed09213e547674b1f3",
        gtaplus: "rockstargames-sites-legacyb291112adcf994a0f6acadd86f73b78a",
        rdo: "rockstargames-sites-legacyd146e8f862baefb60e91be5aa3c17b6e",
        noImg: "rockstargames-sites-legacyba9b5ae08642b0213a3f04b3db9a9dac",
        gtao: "rockstargames-sites-legacyb6f2bdfd6a1d57b7ce840f7a56cc510b",
        custom: "rockstargames-sites-legacyaf89164a043648d1464686ff13363ee4",
        yellow: "rockstargames-sites-legacyd244b17b74fc46269e8a106a99ab0f87",
        hotPink: "rockstargames-sites-legacyd90b28503318563cfd6059146d1fb6b6",
        red: "rockstargames-sites-legacyc3f8a8706901874d906f94c626be3c1e",
        turquoise: "rockstargames-sites-legacyfe2ec36e92e2bb4d453fdc4b05966418",
        purple: "rockstargames-sites-legacyf5f7baf5b56f5b2ada053a93392bbf7a",
        teal: "rockstargames-sites-legacyf4a229f41cd20f181d810c311416e3f2",
        blue: "rockstargames-sites-legacyf6f689d687bcd482ea2cd2990fd66878",
        green: "rockstargames-sites-legacyab270f1b4d3ad43e7bc51393b7c5c089",
        darkRed: "rockstargames-sites-legacydc24ce78d962f3472b06955bf8855103",
        darkBlue: "rockstargames-sites-legacyb354493baac7389b21b511009f287428",
        goldenrod: "rockstargames-sites-legacye4a078efee11d24c64e93ccf0744a33f",
        skull: "rockstargames-sites-legacyd4581a495de14e6762bb15debe5bb810"
      };
      var l = a(95240);
      const {
        sanitize: d
      } = r(), m = e => {
        let {
          list: t,
          string: a,
          starColor: i,
          style: r,
          className: m,
          game: g,
          noImg: u,
          columns: f,
          mobileColumns: p
        } = e;
        const [_, h] = (0, s.useState)(null), k = a ? a.split("_#_") : t;
        return (0, s.useEffect)((() => {
          h(t)
        }), [t]), a || t ? f && _ ? (0, l.jsx)("div", {
          className: o.grid,
          style: {
            "--unordered-list-grid-column": f,
            "--unordered-list-grid-column-mobile": p ?? f
          },
          children: (0, l.jsx)("ul", {
            style: (0, c.safeStyles)(r),
            className: (0, n.classList)(o.itemList, o.noImg, o[i], o[g]),
            children: _.map(((e, t) => (0, l.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: d(e.content)
              }
            }, t)))
          })
        }) : (0, l.jsx)("ul", {
          style: (0, c.safeStyles)(r),
          className: (0, n.classList)(o.itemList, o.custom, u ? o.noImg : "", i ? o[i] : "", g ? o[g] : "", m ?? ""),
          children: k.map(((e, t) => (0, l.jsx)("li", {
            dangerouslySetInnerHTML: {
              __html: d(e?.content ?? e)
            }
          }, t)))
        }) : null
      }
    },
    18356: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        A: () => f,
        AudioPlayer: () => w,
        Badge: () => N,
        Brands: () => j,
        Button: () => T,
        ButtonGroup: () => z,
        CalloutSection: () => J,
        Carousel: () => V,
        ConditionalBlock: () => H,
        CookieAB: () => ie,
        CountryInputField: () => se,
        Cta: () => pe,
        DescriptionArea: () => je,
        DiscountsBadge: () => Ie,
        DotLoader: () => Le,
        Dropdown: () => Oe,
        Embed: () => Ve,
        ExpandingPlatformButton: () => Xe,
        FadeInContent: () => Ke,
        GameSiteHeader: () => Ze,
        Gen9Button: () => L,
        Gen9CoreCarousel: () => rt,
        Grid: () => De,
        HTMLElement: () => ft,
        Hero: () => ut,
        HookStore: () => $,
        ImageWithBadge: () => wt,
        InViewTracker: () => Mt,
        LanguageSelector: () => kt,
        LayeredImage: () => yt,
        LoadingAnimation: () => Ci,
        MultiSourceImage: () => be,
        NewswireBlocks: () => Ft,
        NewswireCard: () => zt,
        NewswireList: () => At,
        NewswireRelated: () => Bt,
        NewswireTag: () => Et,
        OrderedList: () => Rt.c,
        PackList: () => Zt,
        PackListMenu: () => ga,
        Paging: () => pa,
        ParallaxCacheBuster: () => ha,
        ParallaxInnerLayer: () => va,
        ParallaxOuterLayer: () => xa,
        ParallaxWrapper: () => ba,
        ProfileSwitcher: () => s,
        PromoModule: () => os,
        Rating: () => us,
        ResponsiveFlexBox: () => ps,
        ResponsiveFlexItem: () => hs,
        ResponsiveGridBox: () => bs,
        ResponsiveGridItem: () => ys,
        ResponsiveImg: () => ws,
        ResponsiveSection: () => js,
        RockstarLogo: () => Ss,
        ScrollSection: () => Ts,
        ScrollToTop: () => Cs,
        ScrollTracker: () => Is,
        SearchBox: () => Es,
        Separator: () => xe,
        Skeleton: () => zs,
        SrcsetImage: () => jt,
        TextFit: () => Te,
        ThumbsGallery: () => Rs,
        TinaModuleFetchNRender: () => Gs,
        TinaWrapper: () => Hs,
        TrackList: () => Ds,
        UnorderedList: () => ve.c,
        UserVote: () => Xs,
        VideoCard: () => i,
        VideoCarousel: () => Ks,
        VideoList: () => si,
        VisuallyHidden: () => ii,
        Wasted: () => ri,
        framer: () => n,
        useTinaModuleFetchByIds: () => Us,
        withInViewTracker: () => Tt,
        withSearchbarErrorBoundary: () => di,
        withSimpleErrorBoundary: () => st
      });
      var s = {};
      a.r(s), a.d(s, {
        CharacterCard: () => Ta,
        Menu: () => ss,
        MenuButton: () => ns
      });
      var i = {};
      a.r(i), a.d(i, {
        Art: () => ci,
        Link: () => oi
      });
      var r = {};
      a.r(r), a.d(r, {
        getVariant: () => wi,
        transitions: () => yi,
        variants: () => xi
      });
      var n = {};
      a.r(n), a.d(n, {
        Animations: () => r,
        LiteMotion: () => gi,
        withFadeIn: () => _i,
        withFadeUp: () => vi
      });
      var c = a(51664),
        o = a(41272);
      const l = JSON.parse('{"us":{"aria_label_open_new_window":"(Opens in a new window)","pl_card_badge_content_complete":"Complete","plm_nav_scroll_left":"Scroll Left","plm_nav_scroll_right":"Scroll Right","language_selector_default":"Select a Language","nofications_new":"New notifications","profile_selector_mugshot":"{userName} mugshot","profile_selector_profile_card":"Profile Card","profile_selector_rp_icon":"RP Category","profile_selector_switch_character":"Switch Character","sc_link_account":"Account","sc_link_activity_feed":"Activity Feed","sc_link_cookies_policy":"Cookies Policy","sc_link_cookies_settings":"Cookies Settings","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Do Not Sell My Information","sc_link_find_friends":"Find Friends","sc_link_friends":"Friends","sc_link_game_activation":"Game Activation","sc_link_help":"Help","sc_link_import_friends":"Import Friends","sc_link_join_social_club":"Sign Up","sc_link_legal":"Legal","sc_link_log_out":"Log Out","sc_link_messages":"Messages","sc_link_my_friends":"My Friends","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Privacy Policy","sc_link_settings":"Settings","sc_link_sign_in":"Sign In","sc_link_support":"Support","sc_link_view_my_profile":"View My Profile","sc_menu_close":"Close player menu","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"Open player menu","components_ratings_link_alt":"Rating: {rating}. Click here learn more about rating systems","rp_icon":"RP Category","components_track_list_title":"Tracklist","next_button_label":"Next video page","previous_button_label":"Previous video page"},"de":{"aria_label_open_new_window":"(Öffnet ein neues Fenster)","pl_card_badge_content_complete":"Abgeschlossen","plm_nav_scroll_left":"Links scrollen","plm_nav_scroll_right":"Rechts scrollen","language_selector_default":"Eine Sprache auswählen","nofications_new":"Neue Benachrichtigungen","profile_selector_mugshot":"Verbrecherfoto von {userName}","profile_selector_profile_card":"Profildaten","profile_selector_rp_icon":"RP-Kategorie","profile_selector_switch_character":"Charakter wechseln","sc_link_account":"Konto","sc_link_activity_feed":"Aktivitäten-Feed","sc_link_cookies_policy":"Cookie-Richtlinie","sc_link_cookies_settings":"Cookie-Einstellungen","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Meine Informationen nicht verkaufen","sc_link_find_friends":"Freunde finden","sc_link_friends":"Freunde","sc_link_game_activation":"Spielaktivierung","sc_link_help":"Hilfe","sc_link_import_friends":"Freunde importieren","sc_link_join_social_club":"Registrieren","sc_link_legal":"Rechtliches","sc_link_log_out":"Abmelden","sc_link_messages":"Nachrichten","sc_link_my_friends":"Meine Freunde","sc_link_notifications":"Benachrichtigungen","sc_link_privacy_policy":"Datenschutzrichtlinien","sc_link_settings":"Einstellungen","sc_link_sign_in":"Anmelden","sc_link_support":"Support","sc_link_view_my_profile":"Mein Profil ansehen","sc_menu_close":"Spielermenü schließen","sc_menu_drag_handle":"Menü öffnen bzw. schließen","sc_menu_open":"Spielermenü öffnen","components_ratings_link_alt":"Altersfreigabe: {rating} Klicke hier, um mehr über Altersfreigaben zu erfahren.","rp_icon":"RP-Kategorie","components_track_list_title":"Trackliste","next_button_label":"Nächste Videoseite","previous_button_label":"Vorherige Videoseite"},"es":{"aria_label_open_new_window":"(Se abre en una ventana nueva)","pl_card_badge_content_complete":"Completado","plm_nav_scroll_left":"Desplazar hacia la izquierda","plm_nav_scroll_right":"Desplazar hacia la derecha","language_selector_default":"Selecciona un idioma","nofications_new":"Nuevas notificaciones","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Tarjeta de perfil","profile_selector_rp_icon":"Categoría de RP","profile_selector_switch_character":"Cambiar personaje","sc_link_account":"Cuenta","sc_link_activity_feed":"Actividades","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Ajustes de cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"No quiero que vendáis mis datos","sc_link_find_friends":"Buscar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Activación del juego","sc_link_help":"Ayuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Registrarse","sc_link_legal":"Aviso legal","sc_link_log_out":"Cerrar sesión","sc_link_messages":"Mensajes","sc_link_my_friends":"Mis amigos","sc_link_notifications":"Notificaciones","sc_link_privacy_policy":"Política de privacidad","sc_link_settings":"Ajustes","sc_link_sign_in":"Iniciar sesión","sc_link_support":"Asistencia técnica","sc_link_view_my_profile":"Ver mi perfil","sc_menu_close":"Cerrar menú de jugador","sc_menu_drag_handle":"Arrastrar el controlador del menú","sc_menu_open":"Abrir menú de jugador","components_ratings_link_alt":"Clasificación: {rating}. Haz clic aquí para obtener más información sobre los sistemas de clasificación.","rp_icon":"Categoría de RP","components_track_list_title":"Lista de pistas","next_button_label":"Página de vídeo siguiente","previous_button_label":"Página de vídeo anterior"},"mx":{"aria_label_open_new_window":"(Se abre en una ventana nueva)","pl_card_badge_content_complete":"Completado","plm_nav_scroll_left":"Desplazarse hacia la izquierda","plm_nav_scroll_right":"Desplazarse hacia la derecha","language_selector_default":"Seleccionar un idioma","nofications_new":"Nuevas notificaciones","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Tarjeta del perfil","profile_selector_rp_icon":"Categoría de RP","profile_selector_switch_character":"Cambiar personaje","sc_link_account":"Cuenta","sc_link_activity_feed":"Muro de actividades","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Configuración de cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"No quiero que vendan mis datos","sc_link_find_friends":"Encontrar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Activación de juegos","sc_link_help":"Ayuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Registro","sc_link_legal":"Legal","sc_link_log_out":"Cerrar sesión","sc_link_messages":"Mensajes","sc_link_my_friends":"Mis amigos","sc_link_notifications":"Notificaciones","sc_link_privacy_policy":"Política de privacidad","sc_link_settings":"Configuración","sc_link_sign_in":"Iniciar sesión","sc_link_support":"Soporte","sc_link_view_my_profile":"Ver mi perfil","sc_menu_close":"Cerrar menú del reproductor","sc_menu_drag_handle":"Mover el handle del menú","sc_menu_open":"Abrir menú del reproductor","components_ratings_link_alt":"Clasificación: {rating}. Haz clic aquí para obtener más información sobre el sistema de clasificación.","rp_icon":"Categoría de RP","components_track_list_title":"Lista de canciones","next_button_label":"Página de video siguiente","previous_button_label":"Página de video anterior"},"fr":{"aria_label_open_new_window":"(S’ouvre dans une nouvelle fenêtre)","pl_card_badge_content_complete":"Terminé","plm_nav_scroll_left":"Faire défiler vers la gauche","plm_nav_scroll_right":"Faire défiler vers la droite","language_selector_default":"Sélectionner une langue","nofications_new":"Nouvelles notifications","profile_selector_mugshot":"Photo d\'identité : {userName}","profile_selector_profile_card":"Carte du profil","profile_selector_rp_icon":"Catégorie de RP","profile_selector_switch_character":"Changer de personnage","sc_link_account":"Compte","sc_link_activity_feed":"Fil d\'activités","sc_link_cookies_policy":"Politique en matière de cookies","sc_link_cookies_settings":"Paramètres des cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Ne pas vendre mes informations","sc_link_find_friends":"Trouver des amis","sc_link_friends":"Amis","sc_link_game_activation":"Activation de jeux","sc_link_help":"Aide","sc_link_import_friends":"Importer des amis","sc_link_join_social_club":"S’inscrire","sc_link_legal":"Mentions légales","sc_link_log_out":"Se déconnecter","sc_link_messages":"Messages","sc_link_my_friends":"Mes amis","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Charte de confidentialité","sc_link_settings":"Paramètres","sc_link_sign_in":"Se connecter","sc_link_support":"Assistance","sc_link_view_my_profile":"Voir mon profil","sc_menu_close":"Fermer le menu Joueur","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"Ouvrir le menu Joueur","components_ratings_link_alt":"Classification : {rating}. Cliquez ici pour en savoir plus sur les systèmes de classification.","rp_icon":"Catégorie : RP","components_track_list_title":"Liste des morceaux","next_button_label":"Page vidéo suivante","previous_button_label":"Page vidéo précédente"},"it":{"aria_label_open_new_window":"(Apri in una nuova finestra)","pl_card_badge_content_complete":"Completamento","plm_nav_scroll_left":"Scorri a sinistra","plm_nav_scroll_right":"Scorri a destra","language_selector_default":"Seleziona una lingua","nofications_new":"Nuove notifiche","profile_selector_mugshot":"Foto segnaletica di {userName}","profile_selector_profile_card":"Scheda del profilo","profile_selector_rp_icon":"Categoria RP","profile_selector_switch_character":"Cambia personaggio","sc_link_account":"Account","sc_link_activity_feed":"Feed attività","sc_link_cookies_policy":"Politica sui cookie","sc_link_cookies_settings":"Impostazioni dei cookie","sc_link_crews":"Crew","sc_link_do_not_sell_my_information":"Non vendere le mie informazioni","sc_link_find_friends":"Trova amici","sc_link_friends":"Amici","sc_link_game_activation":"Attivazione gioco","sc_link_help":"Assistenza","sc_link_import_friends":"Importa amici","sc_link_join_social_club":"Registrati","sc_link_legal":"Note legali","sc_link_log_out":"Esci","sc_link_messages":"Messaggi","sc_link_my_friends":"I miei amici","sc_link_notifications":"Notifiche","sc_link_privacy_policy":"Politica sulla privacy","sc_link_settings":"Impostazioni","sc_link_sign_in":"Accedi","sc_link_support":"Supporto","sc_link_view_my_profile":"Visualizza il mio profilo","sc_menu_close":"Chiudi Menu giocatore","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"Apri Menu giocatore","components_ratings_link_alt":"Classificazione: {rating}. Clicca qui per scoprire di più sui sistemi di classificazione","rp_icon":"Categoria RP","components_track_list_title":"Tracklist","next_button_label":"Pagina di video successiva","previous_button_label":"Pagina di video precedente"},"jp":{"aria_label_open_new_window":"(新しいウィンドウで開きます)","pl_card_badge_content_complete":"完了","plm_nav_scroll_left":"左にスクロール","plm_nav_scroll_right":"右にスクロール","language_selector_default":"言語を選択","nofications_new":"新しいお知らせ","profile_selector_mugshot":"{userName}顔写真","profile_selector_profile_card":"プロフィールカード","profile_selector_rp_icon":"RPカテゴリー","profile_selector_switch_character":"キャラクター変更","sc_link_account":"アカウント","sc_link_activity_feed":"アクティビティフィード","sc_link_cookies_policy":"クッキーポリシー","sc_link_cookies_settings":"クッキー設定","sc_link_crews":"クルー","sc_link_do_not_sell_my_information":"個人情報を売らないでください","sc_link_find_friends":"フレンドを検索","sc_link_friends":"フレンド","sc_link_game_activation":"ゲームアクティベーション","sc_link_help":"ヘルプ","sc_link_import_friends":"フレンドをインポート","sc_link_join_social_club":"サインアップ","sc_link_legal":"利用規約","sc_link_log_out":"ログアウト","sc_link_messages":"メッセージ","sc_link_my_friends":"フレンド","sc_link_notifications":"通知","sc_link_privacy_policy":"プライバシーポリシー","sc_link_settings":"設定","sc_link_sign_in":"サインイン","sc_link_support":"サポート","sc_link_view_my_profile":"プロフィールを表示","sc_menu_close":"プレイヤーメニューを閉じる","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"プレイヤーメニューを開く","components_ratings_link_alt":"レーティング:{rating}レーティングについての詳細はこちらをクリックしてください","rp_icon":"RPカテゴリー","components_track_list_title":"トラックリスト","next_button_label":"次のビデオページ","previous_button_label":"前のビデオページ"},"kr":{"aria_label_open_new_window":"(새 창에서 열기)","pl_card_badge_content_complete":"완료","plm_nav_scroll_left":"왼쪽 스크롤","plm_nav_scroll_right":"오른쪽 스크롤","language_selector_default":"언어 선택","nofications_new":"새 알림","profile_selector_mugshot":"{userName} 머그샷","profile_selector_profile_card":"프로필 카드","profile_selector_rp_icon":"RP 카테고리","profile_selector_switch_character":"캐릭터 교체","sc_link_account":"계정","sc_link_activity_feed":"활동 피드","sc_link_cookies_policy":"쿠키 정책","sc_link_cookies_settings":"쿠키 설정","sc_link_crews":"조직","sc_link_do_not_sell_my_information":"내 정보 판매 안 함","sc_link_find_friends":"친구 찾기","sc_link_friends":"친구","sc_link_game_activation":"게임 활성화","sc_link_help":"도움말","sc_link_import_friends":"친구 불러오기","sc_link_join_social_club":"가입","sc_link_legal":"법률 관련","sc_link_log_out":"로그아웃","sc_link_messages":"메시지","sc_link_my_friends":"내 친구","sc_link_notifications":"알림","sc_link_privacy_policy":"개인 정보 보호 정책","sc_link_settings":"설정","sc_link_sign_in":"로그인","sc_link_support":"지원","sc_link_view_my_profile":"내 프로필 보기","sc_menu_close":"플레이어 메뉴 닫기","sc_menu_drag_handle":"드래그 메뉴 핸들","sc_menu_open":"플레이어 메뉴 열기","components_ratings_link_alt":"등급 분류: {rating}. 등급 분류 제도에 대해 더 자세히 알아보려면 여기를 클릭하십시오","rp_icon":"RP 카테고리","components_track_list_title":"트랙리스트","next_button_label":"다음 비디오 페이지","previous_button_label":"이전 비디오 페이지"},"pl":{"aria_label_open_new_window":"(Otwórz w nowym oknie)","pl_card_badge_content_complete":"Ukończono","plm_nav_scroll_left":"Przesuń w lewo","plm_nav_scroll_right":"Przesuń w prawo","language_selector_default":"Wybierz język","nofications_new":"Nowe powiadomienia","profile_selector_mugshot":"Zdjęcie – {userName}","profile_selector_profile_card":"Karta profilu","profile_selector_rp_icon":"Poziom RP","profile_selector_switch_character":"Zmień postać","sc_link_account":"Konto","sc_link_activity_feed":"Zajęcia","sc_link_cookies_policy":"Polityka plików cookie","sc_link_cookies_settings":"Ustawienia plików cookie","sc_link_crews":"Ekipy","sc_link_do_not_sell_my_information":"Zabraniam sprzedaży moich danych","sc_link_find_friends":"Szukaj znajomych","sc_link_friends":"Znajomi","sc_link_game_activation":"Aktywacja gry","sc_link_help":"Pomoc","sc_link_import_friends":"Importuj znajomych","sc_link_join_social_club":"Zarejestruj się","sc_link_legal":"Informacje prawne","sc_link_log_out":"Wyloguj się","sc_link_messages":"Wiadomości","sc_link_my_friends":"Moi znajomi","sc_link_notifications":"Powiadomienia","sc_link_privacy_policy":"Polityka prywatności","sc_link_settings":"Ustawienia","sc_link_sign_in":"Zaloguj się","sc_link_support":"Wsparcie","sc_link_view_my_profile":"Przeglądaj profil","sc_menu_close":"Zamknij menu gracza","sc_menu_drag_handle":"Przeciągnij uchwyt menu","sc_menu_open":"Otwórz menu gracza","components_ratings_link_alt":"Klasyfikacja wiekowa: {rating}. Kliknij tutaj, aby dowiedzieć się więcej o systemie klasyfikacji wiekowej","rp_icon":"Poziom RP","components_track_list_title":"Lista utworów","next_button_label":"Następna strona z filmami","previous_button_label":"Poprzednia strona z filmami"},"br":{"aria_label_open_new_window":"(Abre em uma nova janela)","pl_card_badge_content_complete":"Concluiu","plm_nav_scroll_left":"Rolar para a esquerda","plm_nav_scroll_right":"Rolar para a direita","language_selector_default":"Selecione um idioma","nofications_new":"Novas notificações","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Cartão de perfil","profile_selector_rp_icon":"Categoria de RP","profile_selector_switch_character":"Alternar personagem","sc_link_account":"Conta","sc_link_activity_feed":"Feed de atividade","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Configurações de cookies","sc_link_crews":"Comandos","sc_link_do_not_sell_my_information":"Não vendam a minha informação","sc_link_find_friends":"Encontrar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Ativação de jogos","sc_link_help":"Ajuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Inscrever-se","sc_link_legal":"Aviso legal","sc_link_log_out":"Sair","sc_link_messages":"Mensagens","sc_link_my_friends":"Meus amigos","sc_link_notifications":"Notificações","sc_link_privacy_policy":"Política de Privacidade","sc_link_settings":"Configurações","sc_link_sign_in":"Iniciar sessão","sc_link_support":"Suporte","sc_link_view_my_profile":"Visualizar meu perfil","sc_menu_close":"Fechar menu de jogador","sc_menu_drag_handle":"Arrastar título do menu","sc_menu_open":"Abrir menu de jogador","components_ratings_link_alt":"Classificação Indicativa: {rating}. Clique aqui para saber mais sobre sistemas de classificação indicativa.","rp_icon":"Categoria de RP","components_track_list_title":"Lista de faixas","next_button_label":"Próxima página de vídeos","previous_button_label":"Página anterior de vídeos"},"ru":{"aria_label_open_new_window":"(ссылка откроется в новом окне)","pl_card_badge_content_complete":"Завершено","plm_nav_scroll_left":"Пролистать влево","plm_nav_scroll_right":"Пролистать вправо","language_selector_default":"Выбрать язык","nofications_new":"Новые уведомления","profile_selector_mugshot":"Фотография игрока {userName}","profile_selector_profile_card":"Карта профиля","profile_selector_rp_icon":"Категория опыта","profile_selector_switch_character":"Сменить персонажа","sc_link_account":"Учетная запись","sc_link_activity_feed":"Лента событий","sc_link_cookies_policy":"Политика использования файлов Cookie","sc_link_cookies_settings":"Настройки файлов Cookie","sc_link_crews":"Банды","sc_link_do_not_sell_my_information":"Я запрещаю продавать свою личную информацию","sc_link_find_friends":"Поиск друзей","sc_link_friends":"Друзья","sc_link_game_activation":"Активация игры","sc_link_help":"Помощь","sc_link_import_friends":"Импорт друзей","sc_link_join_social_club":"Регистрация","sc_link_legal":"Юридическая информация","sc_link_log_out":"Выход","sc_link_messages":"Сообщения","sc_link_my_friends":"Мои друзья","sc_link_notifications":"Уведомления","sc_link_privacy_policy":"Политика конфиденциальности","sc_link_settings":"Настройки","sc_link_sign_in":"Войти","sc_link_support":"Поддержка","sc_link_view_my_profile":"Моя учетная запись","sc_menu_close":"Закрыть меню игрока","sc_menu_drag_handle":"Перенести маркер меню","sc_menu_open":"Открыть меню игрока","components_ratings_link_alt":"Рейтинг: {rating}. Нажмите, чтобы узнать больше о системе рейтинга","rp_icon":"Категория опыта","components_track_list_title":"Список песен","next_button_label":"Следующая страница с видео","previous_button_label":"Предыдущая страница с видео"},"hans":{"aria_label_open_new_window":"（在新窗口中打开）","pl_card_badge_content_complete":"完成","plm_nav_scroll_left":"向左滚动","plm_nav_scroll_right":"向右滚动","language_selector_default":"选择一种语言","nofications_new":"新通知","profile_selector_mugshot":"{userName} 面部照片","profile_selector_profile_card":"档案卡","profile_selector_rp_icon":"声望值类别","profile_selector_switch_character":"切换角色","sc_link_account":"账户","sc_link_activity_feed":"活动动态","sc_link_cookies_policy":"Cookie 政策","sc_link_cookies_settings":"Cookie 设置","sc_link_crews":"帮会","sc_link_do_not_sell_my_information":"请勿出售我的信息","sc_link_find_friends":"查找好友","sc_link_friends":"好友","sc_link_game_activation":"游戏激活","sc_link_help":"帮助","sc_link_import_friends":"导入好友","sc_link_join_social_club":"注册","sc_link_legal":"法律声明","sc_link_log_out":"登出","sc_link_messages":"信息","sc_link_my_friends":"我的好友","sc_link_notifications":"通知","sc_link_privacy_policy":"隐私政策","sc_link_settings":"设置","sc_link_sign_in":"登录","sc_link_support":"支持","sc_link_view_my_profile":"查看我的档案","sc_menu_close":"关闭玩家菜单","sc_menu_drag_handle":"拖动菜单处理","sc_menu_open":"打开玩家菜单","components_ratings_link_alt":"评级：{rating}。点击此处了解评级系统的更多详情。","rp_icon":"声望值类别","components_track_list_title":"曲目列表","next_button_label":"下一页视频","previous_button_label":"上一页视频"},"tw":{"aria_label_open_new_window":"（在新視窗開啟）","pl_card_badge_content_complete":"完成","plm_nav_scroll_left":"向左捲動","plm_nav_scroll_right":"向右捲動","language_selector_default":"選擇語言","nofications_new":"新通知","profile_selector_mugshot":"{userName} 罪犯檔案照","profile_selector_profile_card":"資料卡","profile_selector_rp_icon":"聲望值類別","profile_selector_switch_character":"切換角色","sc_link_account":"帳戶","sc_link_activity_feed":"動態活動","sc_link_cookies_policy":"Cookie 政策","sc_link_cookies_settings":"Cookie 設定","sc_link_crews":"幫會","sc_link_do_not_sell_my_information":"不要販售我的個人資料","sc_link_find_friends":"尋找好友","sc_link_friends":"好友","sc_link_game_activation":"遊戲啟用","sc_link_help":"幫助","sc_link_import_friends":"匯入好友","sc_link_join_social_club":"註冊","sc_link_legal":"法律聲明","sc_link_log_out":"登出","sc_link_messages":"訊息","sc_link_my_friends":"我的好友","sc_link_notifications":"通知","sc_link_privacy_policy":"隱私權政策","sc_link_settings":"設定","sc_link_sign_in":"登入","sc_link_support":"支援","sc_link_view_my_profile":"查看我的設定檔","sc_menu_close":"關閉玩家選單","sc_menu_drag_handle":"拖曳選單控點","sc_menu_open":"開啟玩家選單","components_ratings_link_alt":"評分：{rating}。點擊此處以更加了解評分系統","rp_icon":"聲望值類別","components_track_list_title":"曲目清單","next_button_label":"下一個影片頁面","previous_button_label":"上一個影片頁面"}}'),
        d = (0, o.defineMessages)({
          aria_label_open_new_window: {
            id: "aria_label_open_new_window",
            defaultMessage: "(Opens in a new window)"
          }
        });
      var m = a(57013);
      const g = "rockstargames-sites-legacyff481c537a56a6fcdb1be85dfbc8944e";
      var u = a(95240);
      const f = (0, o.withIntl)((e => {
        let {
          children: t,
          to: a = "#",
          alt: s = "",
          autoBlank: i = !1,
          onClick: r = (() => {}),
          focused: n = !1,
          ...l
        } = e;
        const f = (0, c.useRef)(null),
          p = (0, o.useIntl)(),
          _ = !/^(https?|mailto):/i.test(a),
          h = /^#/.test(a),
          k = l?.target ?? (i ? "_blank" : "_self");
        let {
          ...b
        } = l, v = "";
        if ("aria-label" in b && b["aria-label"] && (v = "_blank" === k ? `${b["aria-label"]} ${p.formatMessage(d.aria_label_open_new_window)}` : b["aria-label"]), (0, c.useEffect)((() => {
            n && f?.current && f.current.focus()
          }), [f?.current, n]), h) {
          const e = e => {
            e.preventDefault(), document?.querySelector(`[id='${a.replace("#","")}']`)?.scrollIntoView({
              behavior: "smooth",
              block: "center"
            }), r && r(e)
          };
          return (0, u.jsxs)("a", {
            title: s,
            href: a,
            onClick: e,
            ...b,
            "aria-label": v,
            ref: f,
            children: [t, "_blank" === k && !v && (0, u.jsx)("span", {
              className: g,
              children: p.formatMessage(d.aria_label_open_new_window)
            })]
          })
        }
        if (_) return (0, u.jsxs)(m.NavLink, {
          title: s,
          to: a,
          onClick: r,
          ...b,
          "aria-label": v,
          ref: f,
          children: [t, "_blank" === k && !v && (0, u.jsx)("span", {
            className: g,
            children: p.formatMessage(d.aria_label_open_new_window)
          })]
        });
        const y = Object.keys(b).filter((e => !["activeClassName", "key", "end"].includes(e))).reduce(((e, t) => ({
          ...e,
          [t]: l[t]
        })), {});
        return "function" == typeof y?.className && delete y.className, (0, u.jsxs)("a", {
          href: a,
          title: s,
          onClick: r,
          target: k,
          ...y,
          "aria-label": v,
          ref: f,
          children: [t, "_blank" === k && !v && (0, u.jsx)("span", {
            className: g,
            children: p.formatMessage(d.aria_label_open_new_window)
          })]
        })
      }), l);
      var p = a(65772),
        _ = a.n(p),
        h = a(33052),
        k = a(90048);
      const b = {
          player: "rockstargames-sites-legacybb43df423657efcc0f1f38630a24e5e8",
          fixedToBottom: "rockstargames-sites-legacye1f497e3ec34c2fd721b124969e27dd5",
          tracksOpen: "rockstargames-sites-legacye8f2736f0ae21a56045104071a7a9fd7",
          tracks: "rockstargames-sites-legacyea84096a931648765b1db46f708f70aa",
          iconBurger: "rockstargames-sites-legacyb91aad66a2102668715c5ddaaecede2e",
          trackList: "rockstargames-sites-legacyc44536ca7b7fa7236e86c65ae309057e",
          trackActive: "rockstargames-sites-legacyac7826f934fc777f58017b1a5752419a",
          trackTitle: "rockstargames-sites-legacyaafc522e642572d5ff93c7408b941829",
          trackIndex: "rockstargames-sites-legacyb880baa4707c71eb543f905816d8e952",
          controls: "rockstargames-sites-legacyff92c8eddfc0a0fa7bc7f444973e4f28",
          controlsCurrentBg: "rockstargames-sites-legacya81d9465f14d65e8e20800d7b25f77d9",
          controlsCurrentBgVisible: "rockstargames-sites-legacyc87bd14d2bbc9248d9c197b77454f345",
          controlsTrack: "rockstargames-sites-legacyc23bf574089d1af93750f6af8ebb489f",
          controlsTrackTitle: "rockstargames-sites-legacye4b77d29e904f9928cca1de93f5c7745",
          controlsTrackAnimating: "rockstargames-sites-legacyba49949a9cd8c22385708f267c625029",
          scrollText: "rockstargames-sites-legacyfd9c80e5afaa1ed38ce85f2c3d70eae4",
          controlsTrackArtist: "rockstargames-sites-legacyc93c1e5399d9fd5e96ca246fdbfb307b",
          controlsTrackBurger: "rockstargames-sites-legacyb4e1a16e3460b40c1aacd92afe219856",
          controlsButtons: "rockstargames-sites-legacyd136125994c1d0db1449fce51af559ca",
          controlsScrub: "rockstargames-sites-legacyd3d935648408f71928bd49d2f7c5a9ff",
          controlsPlayPause: "rockstargames-sites-legacyf5de7526c8cee98bdd7363fd7f2cf8ae",
          controlsPlayPausePlaying: "rockstargames-sites-legacyefb6194f0df966e6c8c759937d2fb826",
          controlsNextTrack: "rockstargames-sites-legacyf286e0ce01c5401e56dd579b076f1aae",
          controlsPrevTrack: "rockstargames-sites-legacya56bb7cb4b0e2de481777d1f09c3f2f2",
          controlsScrubTrack: "rockstargames-sites-legacyb8f38f45353fa54fcb6f9e2a3d0d5a85"
        },
        v = e => {
          let {
            src: t
          } = e;
          return (0, u.jsx)("div", {
            className: b.cover,
            style: {
              background: `url(${t}) center/cover`
            }
          })
        },
        y = e => {
          let {
            timing: t = {
              current: 0,
              duration: 0
            },
            playing: a,
            audioRef: s,
            setPlaying: i,
            tracksOpen: r,
            setTracksOpen: n,
            trackData: o,
            setTrackId: l,
            trackBounds: d,
            setAutoNext: m
          } = e;
          const g = (0, c.useRef)(null),
            f = (0, c.useRef)(null),
            p = (0, c.useRef)(null),
            [h, k] = (0, c.useState)(null),
            [v, y] = (0, c.useState)(!1),
            x = e => {
              const t = new Date(1e3 * e),
                a = t.getUTCMinutes(),
                s = t.getSeconds();
              return `${a.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")}`
            };
          return (0, c.useEffect)((() => {
            if (!f.current || !p.current) return;
            const e = () => {
              p.current && f.current && k(p.current.clientWidth > f.current.clientWidth)
            };
            return window.addEventListener("resize", e), e(), () => window.removeEventListener("resize", e)
          }), [p, f, t]), (0, c.useEffect)((() => {
            if (!g.current || !t?.duration) return;
            let e = null;
            const a = new(_())(g.current),
              i = e => {
                if (g.current) {
                  const a = g.current.clientWidth;
                  if (!g.current.contains(e.srcEvent.target)) return;
                  const i = Math.max(0, e.srcEvent.offsetX),
                    r = Number(i / a * t.duration);
                  s.currentTime = r
                }
              },
              r = () => {
                e ? s.pause() : s.play()
              },
              n = () => {
                e = s.paused, s.pause()
              };
            return a.on("panstart", n), a.on("panleft", i), a.on("panright", i), a.on("panend", r), a.on("tap", i), () => {
              a.off("panstart", n), a.off("panleft", i), a.off("panright", i), a.off("panend", r), a.off("tap", i)
            }
          }), [g.current, t.duration]), (0, c.useEffect)((() => {
            const e = Number(s?.currentTime);
            (a || !isNaN(e) && 0 !== e) && y(!0)
          }), [a, s?.currentTime]), (0, u.jsxs)("div", {
            className: b.controls,
            style: {
              "--track-color": o.color,
              "--track-mix-blend-mode": o.mix_blend_mode,
              "--current-pct": t.current / t.duration
            },
            children: [(0, u.jsx)("div", {
              className: [b.controlsCurrentBg, v ? b.controlsCurrentBgVisible : ""].join(" ")
            }), (0, u.jsx)("div", {
              className: b.controlsTrack,
              ref: f,
              children: (0, u.jsx)("span", {
                className: [b.controlsTrackTitle, h ? b.controlsTrackAnimating : ""].join(" "),
                ref: p,
                children: o.title
              })
            }), (0, u.jsxs)("div", {
              className: b.controlsButtons,
              children: [(0, u.jsx)("div", {
                className: b.controlsPrevTrack,
                onClick: () => {
                  d && (l(d[0]), m(!0), i(!0))
                }
              }), (0, u.jsx)("div", {
                className: [b.controlsPlayPause, a ? b.controlsPlayPausePlaying : ""].join(" "),
                onClick: () => {
                  i(!a)
                }
              }), (0, u.jsx)("div", {
                className: b.controlsNextTrack,
                onClick: () => {
                  d && (l(d[1]), m(!0), i(!0))
                }
              })]
            }), (0, u.jsx)("div", {
              active: r ? "" : null,
              className: b.controlsTrackBurger,
              children: (0, u.jsx)("div", {
                className: b.iconBurger,
                onClick: () => {
                  n(!r)
                }
              })
            }), (0, u.jsxs)("div", {
              className: b.controlsScrub,
              children: [(0, u.jsx)("span", {
                children: x(t.current)
              }), (0, u.jsx)("div", {
                className: b.controlsScrubTrack,
                ref: g
              }), (0, u.jsx)("span", {
                children: x(t.duration)
              })]
            })]
          })
        },
        x = e => {
          let {
            tracks: t,
            trackId: a,
            setTrackId: s,
            tracksOpen: i,
            setTracksOpen: r,
            setPlaying: n,
            setAutoNext: c
          } = e;
          return (0, u.jsxs)("div", {
            className: b.tracks,
            children: [(0, u.jsx)("h4", {
              children: "Tracks"
            }), (0, u.jsx)("div", {
              className: b.trackBurger,
              onClick: () => {
                r(!i)
              }
            }), (0, u.jsx)("div", {
              className: b.trackList,
              children: t.map(((e, t) => (0, u.jsxs)("a", {
                style: {
                  "--highlight-color": e.color
                },
                className: a === e.id ? b.trackActive : "",
                onClick: () => {
                  s(e.id), n(!0), c(!0)
                },
                children: [(0, u.jsx)("span", {
                  className: b.trackIndex,
                  children: String(t + 1).padStart(2, "0")
                }), (0, u.jsx)("span", {
                  className: b.trackTitle,
                  children: e.title
                }), (0, u.jsx)("span", {
                  className: b.trackTime,
                  children: e.duration
                })]
              }, e.id)))
            })]
          })
        },
        w = e => {
          let {
            id: t,
            className: a = ""
          } = e;
          const {
            data: s
          } = (0, h.useQuery)(k.GetAudioAlbum, {
            variables: {
              id: t
            }
          }), [i, r] = (0, c.useState)(), [n, o] = (0, c.useState)(), [l, d] = (0, c.useState)(), [m, g] = (0, c.useState)(!1), [f, p] = (0, c.useState)(!1), [_, w] = (0, c.useState)(new HTMLAudioElement), [N, j] = (0, c.useState)({
            current: 0,
            duration: 0
          }), [S, T] = (0, c.useState)(!0);
          return (0, c.useEffect)((() => {
            const e = "audio",
              t = t => {
                t?.data?.rockstarAudioPlayerPlayTrackId && (o(t.data.rockstarAudioPlayerPlayTrackId), T(!1), p(!0)), f && t?.data?.attentionBlurredElsewhere && t?.data?.from !== e && p(!1)
              };
            return f && window.postMessage({
              attentionBlurredElsewhere: !0,
              from: e
            }), window.addEventListener("message", t, !1), () => window.removeEventListener("message", t, !1)
          }), [f]), (0, c.useEffect)((() => {
            if (!_) return;
            const e = () => {
                isNaN(_.duration) || j({
                  duration: _?.duration ?? 0,
                  current: _?.currentTime ?? 0
                })
              },
              t = () => {
                S && i && o(i[1])
              };
            return _.addEventListener("loadedmetadata", e), _.addEventListener("timeupdate", e), _.addEventListener("ended", t), () => {
              _.removeEventListener("loadedmetadata", e), _.removeEventListener("timeupdate", e), _.removeEventListener("ended", t)
            }
          }), [_, i, S]), (0, c.useEffect)((() => {
            f && window.postMessage({
              attentionBlurredElsewhere: !0,
              from: "audio"
            })
          }), [f]), (0, c.useEffect)((() => {
            _ && (f ? _.play() : _.pause(), g(!1))
          }), [f, _, l?.id]), (0, c.useEffect)((() => {
            if (!n) return;
            const {
              tracks: e
            } = s.audioAlbum, t = s.audioAlbum.tracks.findIndex((e => e.id === n));
            r([e[t - 1]?.id ?? e[e.length - 1].id, e[t + 1]?.id ?? e[0].id]), d(e[t])
          }), [n]), (0, c.useEffect)((() => {
            s && o(s.audioAlbum.tracks[0].id)
          }), [s]), l ? (0, u.jsxs)("div", {
            className: [b.player, b[a], m ? b.tracksOpen : ""].join(" "),
            children: [(0, u.jsx)("audio", {
              ref: e => {
                w(e)
              },
              src: l.mp3_src
            }), (0, u.jsx)(x, {
              tracks: s.audioAlbum.tracks,
              setTrackId: o,
              trackId: n,
              tracksOpen: m,
              setTracksOpen: g,
              setPlaying: p,
              setAutoNext: T
            }), (0, u.jsx)(v, {
              src: l.cover_src
            }), (0, u.jsx)(y, {
              setTrackId: o,
              trackBounds: i,
              tracksOpen: m,
              setTracksOpen: g,
              playing: f,
              setPlaying: p,
              timing: N,
              trackData: l,
              audioRef: _,
              setAutoNext: T
            })]
          }) : null
        },
        N = e => {
          let {
            text: t,
            style: a
          } = e;
          return (0, u.jsx)("div", {
            className: "rockstargames-sites-legacyb61bd7f274fd6d93c4bf33a9284b6b67",
            style: a,
            children: t
          })
        },
        j = e => {
          let {
            brands: t = []
          } = e;
          return t.length ? (0, u.jsx)("div", {
            className: "rockstargames-sites-legacycde08e212f23b312d5afca7f2ea1105c",
            children: t.map(((e, t) => {
              let {
                brand: a
              } = e;
              return (0, u.jsx)("div", {
                className: "rockstargames-sites-legacyc894fe869384587702b5370da072be86",
                "data-brand": a
              }, t)
            }))
          }) : null
        },
        S = {
          button: "rockstargames-sites-legacye056494c33cff1fe89431f279fdb6b9a",
          secondary: "rockstargames-sites-legacyd340cf27f380a4347994e59544432eb3"
        },
        T = e => {
          let {
            className: t = "",
            children: a,
            context: s = "",
            to: i,
            onClick: r,
            ...n
          } = e;
          const c = [S.button, S[s], t].join(" ");
          return i ? (0, u.jsx)(f, {
            ...n,
            to: i,
            className: c,
            onClick: r,
            children: a
          }) : (0, u.jsx)("button", {
            ...n,
            type: "button",
            className: c,
            onClick: r,
            children: a
          })
        };
      var C = a(1740);
      const M = {
          pillBtn: "rockstargames-sites-legacyb59962d0e68ccd73b5ee2e571528d469",
          selected: "rockstargames-sites-legacyf5c57dad202e0d6ff855d5a4aca2c804",
          plusButton: "rockstargames-sites-legacycffaf489342637258d28f9b3b718836a",
          small: "rockstargames-sites-legacyb8abf927f0ba0af0d8ac0e9c77690d34",
          btnText: "rockstargames-sites-legacye6e56461bfc2e426c4abc5451cd17284",
          btnTexticon: "rockstargames-sites-legacycef9f9ce913d167a1fe2e7118a407cdd",
          whiteBtn: "rockstargames-sites-legacyb257e0629b9f8e101791d7a948ed15be",
          blackBtn: "rockstargames-sites-legacycb03bccaee79394858682d2ce4d08253",
          transparentBtn: "rockstargames-sites-legacyd0460159a17533d4d23686d7dca76794",
          iconBtn: "rockstargames-sites-legacyac61186c3c22346c9a4ee2cd2820d341",
          link: "rockstargames-sites-legacyc5920e56149b82f20f4db2ad9d397495",
          xboxone: "rockstargames-sites-legacya7057f2e6d398341f57bc462716d0508",
          xboxseriesxs: "rockstargames-sites-legacya693ab5879f34d7dea1737d3172ed4e4",
          ps4: "rockstargames-sites-legacya029ff88fc9aef470aaeef8053f90436",
          ps5: "rockstargames-sites-legacye25638751cf3e7267db23c6a401fcc36",
          pc: "rockstargames-sites-legacye03d92653f19a7ae3c4b3d5137bc9909"
        },
        I = e => {
          let {
            children: t,
            className: a,
            onClick: s,
            style: i,
            ariaLabel: r
          } = e;
          return (0, u.jsx)("button", {
            className: a,
            onClick: s,
            style: i,
            type: "button",
            "aria-label": r,
            children: t
          })
        },
        E = e => {
          let {
            children: t,
            className: a,
            onClick: s,
            style: i,
            to: r,
            ariaLabel: n
          } = e;
          return (0, u.jsx)(m.NavLink, {
            className: a,
            onClick: s,
            style: i,
            to: r,
            "aria-label": n,
            children: t
          })
        },
        L = e => {
          let {
            btnColor: t = "#fff",
            className: a = "",
            consoleBtn: s,
            icon: i = "",
            img: r,
            labelColor: n = "#000",
            onClick: c,
            secondText: o,
            size: l,
            text: d,
            to: m,
            type: g = "",
            ariaLabel: f
          } = e;
          const p = [M.plusButton, M[g] ?? "", M[l] ?? "", M[s] ?? "", a].join(" "),
            _ = {
              "--hvr-color": t ?? n,
              "--hvr-bg-color": n ?? t,
              "--hvr-border-color": t ?? n
            },
            h = (0, u.jsxs)(u.Fragment, {
              children: [r ? (0, u.jsx)("img", {
                src: r,
                alt: ""
              }) : "", (0, u.jsxs)("div", {
                className: M.btnText,
                icon: i,
                children: [d, o ? (0, u.jsx)("span", {
                  children: o
                }) : ""]
              })]
            });
          if (m) {
            if (m.startsWith("http")) {
              const e = m.startsWith(document.location.origin) ? "_self" : "_blank";
              return (0, u.jsx)("span", {
                onClick: c,
                onKeyDown: c,
                className: p,
                role: "button",
                "aria-label": f,
                tabIndex: 0,
                children: (0, u.jsx)("a", {
                  href: m,
                  target: e,
                  children: h
                })
              })
            }
            return (0, u.jsx)(E, {
              className: p,
              onClick: c,
              style: {
                ..._
              },
              to: m,
              ariaLabel: f,
              children: h
            })
          }
          return (0, u.jsx)(I, {
            className: p,
            onClick: c,
            style: {
              ..._
            },
            ariaLabel: f,
            children: h
          })
        },
        z = e => {
          let {
            buttons: t = [],
            className: a
          } = e;
          return t.length ? (0, u.jsx)("div", {
            className: (0, C.classList)("rockstargames-sites-legacyb411a36e7fd12ab75861fe560b31b206", a),
            children: t.map(((e, t) => {
              let {
                icon: a,
                title: s,
                to: i
              } = e;
              return s ? (0, u.jsx)(L, {
                icon: a,
                text: s,
                to: i
              }, t) : ""
            }))
          }) : null
        };
      var P = a(48111),
        O = a(12231);
      const A = {
          deprecatedCarousel: "rockstargames-sites-legacyeb5df7b3d51dffc4d993ca7abce4e944",
          "swiper-scrollbar-disabled": "rockstargames-sites-legacyeb2dda6769a7c20a31e7996ff62e41f8",
          "swiper-horizontal": "rockstargames-sites-legacyb11093de3cb4f18ea2d59b8d4d1db44c",
          "swiper-vertical": "rockstargames-sites-legacyfa3209fdf995734a1aeeac2cc72cc1ea",
          renderedWithChildren: "rockstargames-sites-legacyc9f15e74b3166cd0db40501fcc70e868",
          panorama: "rockstargames-sites-legacyf2a7e77af5dff445e978fd575a567508",
          img: "rockstargames-sites-legacyf1d3d54c266a20fa0cbe9c342b0d98da",
          hideMobile: "rockstargames-sites-legacye70d5eaa273e4a0a40ee62a308491810",
          hideLarge: "rockstargames-sites-legacybace2af6c822ba7b36b53923629cba0f",
          imageAreaBg: "rockstargames-sites-legacyf4bb071e6dad07c75b78ea21269ca662",
          infinite_false: "rockstargames-sites-legacyd6c3d175b843462bf23a1a1f3af6b095",
          track: "rockstargames-sites-legacyb5ff781c4a96bf031e8e7f5e0c9af395",
          perico: "rockstargames-sites-legacybb97d296d17b7e801c6c0719a79463dd",
          dotsSlide: "rockstargames-sites-legacydd55a6f93254ed13542089c6f36e0048",
          siblings: "rockstargames-sites-legacya59cf4385528c371a13be9962b67131b",
          active: "rockstargames-sites-legacyaa5e195e0c7c6336929553314d52a896",
          "swiper-preloader-spin": "rockstargames-sites-legacyc05cc0faa8239c85cdc7d53c7e120e8e"
        },
        D = e => {
          let {
            item: t
          } = e;
          return (0, u.jsxs)("div", {
            children: [(0, u.jsx)(wt, {
              image: t?.image,
              badge: t?.badge ?? t?.image?.badge,
              badgeType: "badge3",
              role: t?.role ?? t?.image?.role,
              splitter: t?.splitter ?? t?.image?.splitter,
              type: t?.type,
              ariaLabel: t?.image?.ariaLabel ?? t.description,
              style: t?.style,
              className: (0, C.classList)(A.img, t?.className)
            }), (t?.title || t?.description) && (0, u.jsx)(je, {
              item: t
            })]
          })
        },
        B = e => {
          let {
            current: t,
            total: a
          } = e;
          return (0, u.jsx)("div", {
            className: "swiper-scrollbar",
            style: {
              "--current-slide": t,
              "--total-slides": a
            },
            children: (0, u.jsx)("div", {
              className: "swiper-scrollbar-drag"
            })
          })
        },
        V = e => {
          let {
            children: t,
            items: a = [],
            style: s = {},
            noInfiniteScroll: i = !1,
            className: r = "",
            renderTemplate: n = "standard",
            text: o,
            customSpaceBetween: l = null,
            centerSlides: d = !0,
            centeredSlidesBounds: m = !1
          } = e;
          const [g, f] = (0, c.useState)(0), p = (0, c.useMemo)((() => t && Array.isArray(t) ? t.map((() => (0, O.c)())) : null), [t]);
          if (!(a && 0 !== a?.length || t)) return null;
          const _ = {
            0: {
              spaceBetween: l ?? 16
            },
            1024: {
              spaceBetween: l ?? 18
            },
            1920: {
              spaceBetween: l ?? 20
            },
            2560: {
              spaceBetween: l ?? 22
            }
          };
          return (0, u.jsxs)("div", {
            className: (0, C.classList)(A.deprecatedCarousel, A[n], A[`infinite_${!i}`], t ? A.renderedWithChildren : "", r),
            style: s,
            children: [(0, u.jsxs)(P.wx, {
              loop: !i,
              grabCursor: !0,
              centeredSlides: d,
              centerInsufficientSlides: d,
              slidesPerView: "auto",
              speed: 700,
              breakpoints: _,
              onUpdate: () => f(0),
              onActiveIndexChange: e => f(e?.realIndex ?? 0),
              centeredSlidesBounds: m,
              children: [(0, u.jsx)("div", {
                className: A.trackWrapper,
                children: (0, u.jsxs)("div", {
                  className: A.track,
                  children: [a?.map((e => (0, u.jsx)(P.Ky, {
                    children: (0, u.jsx)(D, {
                      item: e
                    })
                  }, e.key))), t && t.map(((e, t) => e && (0, u.jsx)(P.Ky, {
                    children: e
                  }, p && p[t])))]
                })
              }), (0, u.jsx)(B, {
                current: g,
                total: t ? t.length : a.length
              })]
            }), (o?.title || o?.description) && (0, u.jsx)(je, {
              item: o
            })]
          })
        };
      var F = a(45792),
        R = a(42836);
      const $ = (0, a(62748).U1)(),
        U = e => e.some((e => !e)),
        G = e => {
          let {
            condition: t = null,
            children: a
          } = e;
          const [s, i] = (0, c.useState)(!1), r = (e => {
            const [t] = (0, m.useSearchParams)(), [a, s] = (0, c.useState)(null), i = (0, R.useRockstarUser)(), {
              loggedIn: r
            } = i, {
              currentCharId: n
            } = (0, R.useRockstarUserState)(), o = (0, R.useIsUserGtaPlus)(i?.data, n);
            return (0, c.useEffect)((() => {
              const a = "true" === t.get("conditionPreview");
              if (!e?.length > 0) return;
              $.applyFilters("preview_conditions", e);
              const i = [];
              return e.forEach((e => {
                const {
                  value: s
                } = e;
                if (a) return "true" === t.get(s) ? (i.push(!0), !0) : (i.push(!1), !1);
                if (U(i)) return !1;
                switch (s) {
                  case "user:is:loggedIn":
                    i.push(!0 === r);
                    break;
                  case "user:not:loggedIn":
                    i.push(!1 === r);
                    break;
                  case "user:is:gtaPlus":
                    i.push(!0 === o);
                    break;
                  case "user:not:gtaPlus":
                    i.push(!1 === o);
                    break;
                  default:
                    i.push(!1)
                }
                return null
              })), s(!U(i)), () => {}
            }), [t, e, o, i, r]), a
          })(t);
          return (0, c.useEffect)((() => {
            i(r)
          }), [r]), (0, c.useMemo)((() => s ? a : null), [s])
        },
        H = (0, F.withTranslations)((e => {
          let {
            children: t
          } = e;
          return c.Children.map(c.Children.toArray(t), (e => (0, u.jsx)(G, {
            ...e?.props
          })))
        }));
      var W = a(17228),
        q = a(58652);
      const X = e => {
          let {
            className: t
          } = e;
          return (0, u.jsxs)("svg", {
            className: t,
            width: "16",
            height: "17",
            viewBox: "0 0 16 17",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, u.jsx)("path", {
              d: "M3.33203 8.5H12.6654",
              stroke: "white",
              strokeWidth: "1.33",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }), (0, u.jsx)("path", {
              d: "M8 3.83331L12.6667 8.49998L8 13.1666",
              stroke: "white",
              strokeWidth: "1.33",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })]
          })
        },
        Y = {
          pillBtn: "rockstargames-sites-legacye3158363419b66e5afa2264e4928890c",
          selected: "rockstargames-sites-legacya9649249223f164eff11174ffc72616b",
          calloutContainer: "rockstargames-sites-legacye6bd244761fdf3ebe3888539d9942921",
          calloutSection: "rockstargames-sites-legacyb1b8c93299158ef7d0f9eb04e14a7a64",
          calloutHeaders: "rockstargames-sites-legacyc81810436a5b57307c41f4d7a704b2f7",
          calloutHeaderMargins: "rockstargames-sites-legacyb4e1f72dfa9b38f23017e5f8ef48b9cb",
          calloutHeader: "rockstargames-sites-legacyb7964754215256201dd703aedca18b6f",
          calloutSubheader: "rockstargames-sites-legacyac660fa7995007ed875e03a257e447d7",
          calloutVoteForm: "rockstargames-sites-legacybee0795a36dd5adf822e1e50a7260f3d",
          voteButton: "rockstargames-sites-legacyb1baa545566a61b791b696c9ebf560ad",
          upvote: "rockstargames-sites-legacyb9c17ddd3e1052acb5097909ae2b07a1",
          downvote: "rockstargames-sites-legacyf26b53e66e552183743465cce6a8d3a8",
          active: "rockstargames-sites-legacyd38a1764483a36e8a1509aee5b88ec31",
          calloutButton: "rockstargames-sites-legacyb7eb76afce3c6e686be44c356837b627",
          calloutLink: "rockstargames-sites-legacyaefe6c5a233047c943a864cd56a7de2d",
          calloutLinkIcon: "rockstargames-sites-legacya74bf6baa632ad9b5f87efd2043cfed5",
          actionBlock: "rockstargames-sites-legacycc491ddd715196ecd6ef54017ff05ec0",
          actionFooter: "rockstargames-sites-legacydb26fed58ce50f4affc114670885721a"
        },
        K = e => {
          let {
            foreign_id: t,
            foreign_type: a
          } = e;
          const {
            track: s
          } = (0, R.useGtmTrack)(), {
            refetch: i
          } = (0, h.useQuery)(q.UserGetVote, {
            skip: !0
          }), [r] = (0, h.useMutation)(q.UserCastVote), [n, o] = (0, c.useState)(null), l = (0, c.useCallback)((e => {
            (async () => {
              if (e === n && null !== n) o(null);
              else {
                o(e), s({
                  event_action: e ? "like" : "dislike",
                  event_category: "cta",
                  event: "cta_" + (e ? "like" : "dislike"),
                  event_label: t
                });
                const i = {
                  foreignId: t,
                  foreignType: a,
                  vote: e
                };
                await r({
                  variables: i
                })
              }
            })()
          }), [t, a, n]);
          return (0, c.useEffect)((() => {
            t && a && (async () => {
              const e = await i({
                foreignId: t,
                foreignType: a
              });
              o(e?.data?.userGetVote?.vote ?? null)
            })()
          }), [t, a]), (0, u.jsxs)("div", {
            className: Y.calloutVoteForm,
            children: [(0, u.jsx)("button", {
              "aria-label": "upvote",
              className: [Y.upvote, Y.voteButton, n ? Y.active : ""].join(" "),
              name: "upvote",
              onClick: () => l(!0),
              type: "button"
            }), (0, u.jsx)("button", {
              "aria-label": "downvote",
              className: [Y.downvote, Y.voteButton, !1 === n ? Y.active : ""].join(" "),
              name: "downvote",
              onClick: () => l(!1),
              type: "button"
            })]
          })
        },
        Q = e => {
          let {
            action_text: t,
            link: a,
            trackingData: s
          } = e;
          const {
            track: i
          } = (0, R.useGtmTrack)();
          return (0, u.jsx)("a", {
            href: a,
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, u.jsxs)("button", {
              className: Y.calloutLink,
              type: "button",
              onClick: s ? () => i({
                ...s
              }) : () => {},
              children: [t, (0, u.jsx)(X, {
                className: Y.calloutLinkIcon
              })]
            })
          })
        },
        Z = e => {
          let {
            helperText: t,
            linkText: a,
            link: s,
            trackingData: i
          } = e;
          const {
            track: r
          } = (0, R.useGtmTrack)();
          return (0, u.jsxs)("div", {
            className: Y.actionFooter,
            children: [t, a && " ", a && (0, u.jsx)("a", {
              href: s ?? "",
              onClick: () => r({
                ...i
              }),
              children: a
            })]
          })
        },
        J = (0, F.withTranslations)((e => {
          let {
            header: t,
            subheader: a,
            type: s,
            action_text: i,
            link: r,
            foreign_id: n = document.location.pathname,
            foreign_type: o = "url",
            className: l = "",
            actionFooterHelperText: d,
            actionFooterLinkText: m,
            actionFooterLink: g,
            trackingData: f = {},
            actionFooterLinkTrackingData: p = {},
            t: _,
            ...h
          } = e;
          const {
            loggedIn: k
          } = (0, R.useRockstarUser)(), {
            track: b
          } = (0, R.useGtmTrack)(), v = `${document.location.origin}/auth/sc-auth-login?returnUrl=${window.location.pathname}`, {
            ref: y,
            inView: x
          } = (0, W.useInView)({
            threshold: .6
          }), [w, N] = (0, c.useState)(!1);
          let j;
          if ((0, c.useEffect)((() => {
              x && !w && (b({
                event: "page_section_impression",
                event_action: "impression",
                event_category: "page_section",
                event_label: "callout section",
                element_placement: `callout section - ${h?.sectionName??h?._memoq?.header}`
              }), N(!0))
            }), [x]), !t && !a) return null;
          switch (s) {
            case "vote":
              if (!k) {
                j = (0, u.jsx)(T, {
                  to: v,
                  className: Y.calloutButton,
                  onClick: f ? () => b({
                    ...f
                  }) : () => {},
                  children: "Log In"
                });
                break
              }
              j = (0, u.jsx)(K, {
                foreign_id: n,
                foreign_type: o
              });
              break;
            case "button":
              i && r && (j = (0, u.jsx)(T, {
                to: r,
                className: Y.calloutButton,
                onClick: f ? () => b({
                  ...f
                }) : () => {},
                children: i
              }));
              break;
            case "link":
              i && r && (j = (0, u.jsx)(Q, {
                action_text: i,
                link: r,
                trackingData: f
              }));
              break;
            default:
              j = null
          }
          return (0, u.jsx)("div", {
            className: `${Y.calloutContainer} ${l||""}`,
            ref: y,
            children: (0, u.jsxs)("div", {
              className: Y.calloutSection,
              children: [(0, u.jsxs)("div", {
                className: [Y.calloutHeaders, j ? Y.calloutHeaderMargins : ""].join(" "),
                children: [t && (0, u.jsx)("h2", {
                  className: Y.calloutHeader,
                  children: _(t)
                }), a && (0, u.jsx)("h3", {
                  className: Y.calloutSubheader,
                  children: _(a)
                })]
              }), (0, u.jsxs)("div", {
                className: Y.actionBlock,
                children: [j, d && (0, u.jsx)(Z, {
                  helperText: d,
                  linkText: m,
                  link: g,
                  trackingData: p
                })]
              })]
            })
          })
        }));
      var ee = a(30300),
        te = a(44236),
        ae = a.n(te);
      const se = e => {
          let {
            isMulti: t,
            allowSelectAll: a,
            label: s,
            miscProps: i
          } = e;
          const [r, n] = (0, c.useState)(""), o = (0, c.useMemo)((() => ae()().getData()), []);
          return (0, u.jsx)(ee.cp, {
            unstyled: !0,
            value: r,
            isMulti: t,
            allowSelectAll: a,
            options: o,
            placeholder: s,
            onChange: e => {
              return t = e?.target?.value, void n(t);
              var t
            },
            classNamePrefix: "country-select",
            ...i
          })
        },
        ie = e => {
          let {
            cookieName: t,
            cookieValue: a,
            trueComponent: s,
            falseComponent: i
          } = e;
          const r = (e => {
              const t = document.cookie.split("; "),
                a = `${e}=`,
                s = t.find((e => e.startsWith(a)));
              return s?.substring(a.length, s.length)
            })(t),
            n = new URLSearchParams(window.location.search).get(t);
          return n && ((e, t) => {
            e && t && (document.cookie = `${e}=${t}; domain=${(()=>{const e=window.location.hostname.split(".");return e.slice(e.length-2).join(".")})()}; path=/;`)
          })(t, n), r === a || n === a ? s : i
        };
      var re = a(53688),
        ne = a(65388),
        ce = a(91232),
        oe = a(23124);
      const le = {
          ps: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1506c5bba61fa270f73c874e3d60a94f.svg",
          ps3: re,
          ps4: ne,
          ps5: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6e8f340ded0fd6b0b0d434e8c6c8b75e.svg",
          switch: a(15588),
          xbox: ce,
          xboxone: oe,
          xboxseriesxs: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/205366df6706c3b367fb5ff4f26ab7f3.svg",
          xbox360: a(82948),
          pc: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c050b43f15f34e2cd0592fad6dc48fd.svg",
          play: a(43352),
          applestore: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/38a6e85fa4a378c5620efa9fde8ff223.svg",
          googleplay: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ca4e52b102306a186549cfd712b1c8f8.svg",
          questionMark: a(85872),
          default: ""
        },
        de = e => le[e] || null,
        me = {
          pillBtn: "rockstargames-sites-legacybf9c11ff862c409ecb412254932a66d0",
          selected: "rockstargames-sites-legacye07887131c72b6346c408895888f4fa7",
          "clr-button": "rockstargames-sites-legacyeb57c2501d6b6fff19ea12014712acae",
          lgMax: "rockstargames-sites-legacye8361180f27f9c36731c815805c69094",
          smMax: "rockstargames-sites-legacyc392730b2e06f70a3a1bd646684859e8",
          cta: "rockstargames-sites-legacybc76de01fdd1260e254c482984d2a924",
          label: "rockstargames-sites-legacyb81011c72b601075ebe54d7ceaa7d2d8",
          primary: "rockstargames-sites-legacydbcf41d5c23e0eaf5089021f4d41c121",
          btnContent: "rockstargames-sites-legacyf5e832587747dc414e10ab8e0bd843a9",
          btnIcon: "rockstargames-sites-legacycb0ad8d8dd93218dc12091b883767967",
          xbox: "rockstargames-sites-legacyf591c5444c08121b0514f0c675da1479",
          xboxone: "rockstargames-sites-legacye5124beff89c5b4093a4029a9fee3367",
          xboxseriesxs: "rockstargames-sites-legacye52c94654eb462a8e65aa7607f5e21b5",
          ps: "rockstargames-sites-legacyc53b78d3d062ee8d58f63a0acb1df137",
          ps4: "rockstargames-sites-legacyf4a27aba1505f555d7cd8c920645245a",
          ps5: "rockstargames-sites-legacyb5826d3700572b9bf36874e34d5c2a22",
          pc: "rockstargames-sites-legacyc7ee0cfc54be00a8b152c47997ce76ac",
          switch: "rockstargames-sites-legacya9b276d1c119e9cd14df54c4459197b0",
          googleplay: "rockstargames-sites-legacya4ccd0de63b104d4aa48c8c3176618f3",
          platformIcon: "rockstargames-sites-legacyc4ab0a89b65025cfe63b851116fb3a32",
          lgMin: "rockstargames-sites-legacyc4a99972e5e512395e6fca5beaec1904",
          applestore: "rockstargames-sites-legacya13111cbe8acbd75f62da1c53de2c3df",
          icon: "rockstargames-sites-legacyc7a3f1a29594b307606d15e6827f63f9",
          "icon-left": "rockstargames-sites-legacybd623c6039c3f4122936775ed4214bd4",
          "icon-right": "rockstargames-sites-legacyc79040e66c1f48e302291d8cf1335742",
          disabled: "rockstargames-sites-legacyd87326174de12b895401f738a23b177a"
        };
      var ge = a(89772),
        ue = a.n(ge);
      const fe = e => {
          let {
            platform: t = "",
            altText: a
          } = e;
          const s = t ? de(t) : null,
            i = s ? (0, u.jsx)("img", {
              className: me.platformIcon,
              src: s,
              alt: a
            }) : null;
          return (0, u.jsx)("span", {
            className: [me.btnContent, me.platformButton].join(" "),
            children: i
          })
        },
        pe = e => {
          let {
            children: t,
            href: a,
            style: s,
            content: i,
            variant: r = null,
            size: n = "medium",
            icon: o,
            iconPosition: l = "none",
            iconStyle: d,
            badge: g,
            badgeStyle: f,
            platformItem: p,
            gtm: _ = {},
            disabled: h,
            reloadDocument: k = !1,
            className: b
          } = e;
          const {
            track: v
          } = (0, R.useGtmTrack)(), y = (0, F.useDataLayer)(), x = i ?? t, w = (0, F.findPlatform)(p)?.friendlyName, N = (0, c.useMemo)((() => {
            const e = window.location.hostname;
            let t;
            try {
              t = new URL(a)?.hostname
            } catch (a) {
              t = e
            }
            return e === t
          }), [a]), j = (0, c.useCallback)((() => {
            h || v({
              event: "cta_other",
              text: x ?? void 0,
              ...y,
              ..._,
              link_url: a ?? void 0
            })
          }), [_, a, y]), S = () => o ? (0, u.jsx)("span", {
            className: [me.icon, `icon-${l}`].join(" "),
            style: d,
            children: (0, u.jsx)("img", {
              className: me.btnIcon,
              src: de(o) || "",
              alt: `${o} icon`
            })
          }) : null;
          return (0, u.jsx)(m.Link, {
            to: a,
            target: N ? "_self" : "_blank",
            className: ue()(me.cta, "platform" === r && p ? me[p] : "", h ? me.disabled : "", b),
            style: s,
            "data-variant": r,
            "data-size": n,
            onClick: j,
            "aria-label": x,
            reloadDocument: k,
            children: "platform" === r && p ? (0, u.jsx)(fe, {
              platform: p,
              altText: w || x
            }) : (0, u.jsxs)("div", {
              className: me.btnContent,
              children: ["left" === l && S(), (0, u.jsx)("span", {
                className: me.label,
                children: x
              }), "right" === l && S(), g ? (0, u.jsx)("span", {
                className: me.badge,
                style: f,
                children: g
              }) : null]
            })
          })
        };
      var _e = a(45652);
      const he = "rockstargames-sites-legacyeb64520e04e486931cd65dc5b3fa61e8",
        ke = e => {
          let {
            alt: t,
            className: s,
            src: i,
            style: r
          } = e;
          const [n, c] = (0, F.usePreloadImg)(i);
          let o = i;
          !1 === n && ("rockstargames-sites-legacyee609f31f3685766122c2c6fc0ef0710" === s && (o = a(61820)), o = a(43976));
          const {
            width: l,
            height: d
          } = c, m = {
            "--aspect-ratio": Number.isNaN(l / d) ? "" : l / d,
            ...r
          };
          return (0, u.jsx)("img", {
            src: o,
            className: s ?? "",
            alt: t,
            style: m
          })
        },
        be = e => {
          let {
            className: t,
            style: s = {},
            image: i = {},
            imageStyle: r = {}
          } = e, {
            alt: n,
            src: c
          } = (0, _e.useImageParser)(i);
          const {
            isMobile: o
          } = (0, F.useWindowResize)();
          return c.desktop || c.mobile || (n = "", c = {
            mobile: a(61820),
            desktop: a(43976)
          }), (0, u.jsx)("div", {
            className: i.frame ? `${i.frame} ${he}` : he,
            style: s,
            children: (0, u.jsx)(ke, {
              style: {
                ...r,
                ...i?.style
              },
              src: o ? c.mobile || c.desktop : c?.desktop || c?.mobile,
              alt: n,
              className: t
            })
          })
        };
      var ve = a(65419);
      const ye = {
          hr: "rockstargames-sites-legacyf5cd418ab2ef6a89df6c95d2caa06ba8",
          redLine: "rockstargames-sites-legacyf8b44ef9bbd3e7feb22bf79cc009b16e",
          gtao: "rockstargames-sites-legacyc442f7264db862a7cca6d9a56dacc205"
        },
        xe = e => {
          let {
            style: t,
            className: a = "",
            type: s
          } = e;
          return (0, u.jsx)("div", {
            style: t,
            className: [ye.hr, ye[s], a].join(" ")
          })
        },
        we = "rockstargames-sites-legacyfa6885b15a718acb24f48949c52e31f1",
        Ne = e => {
          let {
            to: t,
            children: a
          } = e;
          return t ? (0, u.jsx)("a", {
            href: t,
            target: "_blank",
            rel: "noreferrer",
            children: a
          }) : a
        },
        je = e => {
          let {
            item: t,
            className: a = ""
          } = e;
          return (0, u.jsxs)("div", {
            className: (0, C.classList)("rockstargames-sites-legacyef9e6981551ac5ce250ebff8b18d7a29", a),
            children: [t.title && (0, u.jsx)(Ne, {
              to: t?.href ?? t?.to,
              children: (0, u.jsx)("h3", {
                children: t.title
              })
            }), Array.isArray(t?.description?.content) ? t.description.content?.map(((e, t) => e?.unorderedList ? (0, u.jsx)(ve.c, {
              columns: e.unorderedList.columns ?? null,
              style: {
                "--unordered-list-padding": "var(--grid-gap-static-sm)",
                "--unordered-list-margin-bottom": ".5rem"
              },
              noImg: !0,
              list: e.unorderedList.list
            }, t) : e?.image ? (0, u.jsx)(be, {
              image: e.image,
              className: e?.className,
              ariaLabel: e.image?.ariaLabel
            }, t) : e?.separator ? (0, u.jsx)("div", {
              style: {
                margin: `${e.separator.spacing} 0`
              },
              children: (0, u.jsx)(xe, {})
            }, t) : (0, u.jsx)("p", {
              children: (0, u.jsx)("span", {
                className: we,
                dangerouslySetInnerHTML: {
                  __html: e
                }
              })
            }, t))) : (0, u.jsx)("span", {
              className: we,
              dangerouslySetInnerHTML: {
                __html: t.description
              }
            })]
          })
        };
      var Se = a(58936);
      const Te = e => {
          let {
            children: t,
            ...a
          } = e;
          const [s, i] = (0, c.useState)(!1);
          return (0, u.jsx)(Se.cR, {
            ...a,
            onReady: () => {
              document.fonts.ready.then((() => {
                i(!0)
              }))
            },
            children: t
          })
        },
        Ce = {
          badge: "rockstargames-sites-legacye279e2cebfa338f34b03fd732416e836",
          badgeSizeUpdate: "rockstargames-sites-legacyd7362a3e27ccaad9d2aadd2f31691340",
          badge2: "rockstargames-sites-legacyd697f4a5f7c876d5e540a96da1e0ca3a",
          badge3: "rockstargames-sites-legacye1bba3cd4554abbb48a030af24bbada5"
        },
        Me = e => {
          let {
            wrapper: t,
            children: a,
            role: s,
            splitter: i
          } = e;
          return i || s ? t(a) : a
        },
        Ie = e => {
          let {
            badge: t,
            badgeType: s,
            role: i,
            splitter: r
          } = e;
          const n = [];
          r ? t.split(r).map(((e, t) => n.push(e))) : n.push(t);
          let c = 100;
          return 2 == n.length && n[1].length < 4 && "off" !== n[1].toLowerCase() && 45, (0, u.jsxs)(Me, {
            splitter: r,
            role: i,
            wrapper: e => (0, u.jsx)("div", {
              className: `${Ce.badge} ${s?Ce[s]:""} `,
              children: e
            }),
            children: [(0, u.jsx)(u.Fragment, {
              children: i && (0, u.jsx)(be, {
                image: {
                  alt: i,
                  desktop: a(6572)(`./${i}.png`)
                }
              })
            }), (0, u.jsx)(Te, {
              className: `${r||i?"":Ce.badge} ${s?Ce[s]:""}`,
              min: 8,
              max: 1e3,
              mode: r || i ? "single" : "multi",
              children: n[0]
            }), (0, u.jsx)(u.Fragment, {
              children: n.shift() && r && n.length >= 1 && (0, u.jsx)(Te, {
                min: 8,
                max: 1e3,
                mode: "single",
                forceSingleModeWidth: !0,
                children: n.join(" ")
              })
            })]
          }, "badge-wrapper")
        },
        Ee = "rockstargames-sites-legacyc63cfb461217f059c8c25eec09602b30",
        Le = e => {
          let {
            color: t
          } = e;
          return (0, u.jsxs)("div", {
            className: "rockstargames-sites-legacya481f47ab7e8af4042a665fab5aea27c",
            style: {
              "--loader-color": t
            },
            children: [(0, u.jsx)("div", {
              className: Ee
            }), (0, u.jsx)("div", {
              className: Ee
            }), (0, u.jsx)("div", {
              className: Ee
            })]
          })
        };
      var ze = a(43924);
      const Pe = {
          dropdownWrapper: "rockstargames-sites-legacyb951912c02de0e5e881fedd391d04810",
          items: "rockstargames-sites-legacyb0a8f220641417f889d4fd6039fe6bac",
          open: "rockstargames-sites-legacyf5eb88111734e6e70d34ef2b095c44f6",
          opener: "rockstargames-sites-legacyecb577af64f747d0d39cf03939ee3c73",
          secondary: "rockstargames-sites-legacyb64c3515fcd91f6b84410bd14640da81"
        },
        Oe = e => {
          let {
            children: t,
            className: a,
            title: s
          } = e;
          const [i, r] = (0, c.useState)(!1);
          return (0, u.jsx)(ze.cp, {
            disabled: !i,
            children: (0, u.jsxs)("div", {
              className: [Pe.dropdownWrapper, i ? Pe.open : "", void 0 !== a ? a : ""].join(" "),
              children: [(0, u.jsx)("button", {
                className: Pe.opener,
                onClick: () => r(!i),
                children: s
              }), i && (0, u.jsx)("div", {
                className: Pe.items,
                onClick: () => r(!1),
                children: t
              })]
            })
          })
        };
      var Ae = a(95356);
      const De = e => {
          let {
            children: t,
            context: a = null,
            game: s,
            image: i = {},
            style: r = {},
            template: n = null,
            theme: c = null,
            reversedOnMobile: o = !1,
            className: l = "",
            id: d = null
          } = e;
          const m = (0, _e.useImageParser)(i ?? {}),
            g = {
              ...r
            };
          if (m?.src?.desktop) {
            const e = (i?.style && i?.style["--background-image-size"]) ?? "var(--grid-background-size, cover)",
              t = (i?.style && i?.style["--background-image-repeat"]) ?? "var(--grid-background-repeat, no-repeat)",
              a = `var(--grid-background-position, center)/${e??"cover"}`;
            if (g.background = `url(${m?.src?.desktop}) ${t} ${a}`, i?.style && i?.style["--linear-gradient"]) g.background = `linear-gradient(${i?.style["--linear-gradient"]}), url(${m?.src?.desktop}) ${t} ${a}`;
            else if (i?.style && i?.style["--gradient-height"]) {
              const e = i?.style["--gradient-height"] || "3",
                s = i?.style["--gradient-start-color"] || "var(--background-color, transparent)",
                r = i?.style["--gradient-end-color"] || "var(--background-color, transparent)";
              g.background = `linear-gradient(180deg, ${s}, transparent ${e}%, transparent ${100-e}%, ${r}), url(${m?.src?.desktop}) ${t} ${a}`
            }
          }
          return (0, u.jsx)("div", {
            id: d,
            className: (0, Ae.classList)("rockstargames-sites-legacyf42b4606ed4a5b16b7647ad7b7eb229d", o ? "rockstargames-sites-legacyb00444166ce6346d7ca364a75a335ecc" : "", l),
            "data-game": "community" === n ? null : s,
            style: (0, F.safeStyles)(g),
            "data-context": a,
            "data-template": n,
            "data-theme": c,
            children: t
          })
        },
        Be = e => {
          let {
            caption: t,
            children: a,
            ...s
          } = e;
          return t ? (0, u.jsxs)("figure", {
            ...s,
            children: [a, (0, u.jsx)("figcaption", {
              dangerouslySetInnerHTML: {
                __html: t
              }
            })]
          }) : a
        },
        Ve = e => {
          let {
            componentTitle: t,
            type: a,
            items: s
          } = e;
          return s?.length ? (0, u.jsx)("div", {
            className: "rockstargames-sites-legacyd393ab6eb68d416b116b6281abdb5e14",
            type: a,
            children: (0, u.jsxs)(De, {
              children: [t && (0, u.jsx)("h3", {
                children: t
              }), (0, u.jsx)(De, {
                className: "rockstargames-sites-legacyed3ee31cb8e357d795886157f95a742a",
                children: s.map(((e, t) => {
                  return e?.embed ? (0, u.jsx)(Be, {
                    caption: e?.caption,
                    children: (0, u.jsx)("div", {
                      className: "rockstargames-sites-legacydcf1c30612026a517f59af64d8703bc4",
                      dangerouslySetInnerHTML: {
                        __html: (a = e.embed, a.replace(/&gt;/g, ">").replace(/&lt;/g, "<"))
                      }
                    }, `${e?.key??t}_div`)
                  }, e?.key ?? t) : e?.text ? (0, u.jsx)("p", {
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
      var Fe = a(22560);
      const Re = {
          type: "spring",
          stiffness: 650,
          damping: 45
        },
        $e = {
          ease: "easeOut",
          duration: .9,
          delay: .3
        },
        Ue = {
          open: {
            opacity: 0,
            transition: {
              ease: "easeOut",
              duration: .3
            }
          },
          closed: {
            opacity: 1,
            transition: $e
          }
        },
        Ge = {
          open: {
            opacity: 1,
            display: "grid",
            height: "auto",
            transition: {
              opacity: $e,
              height: {
                type: "spring",
                stiffness: 425,
                damping: 40
              }
            }
          },
          closed: {
            opacity: 0,
            height: 0,
            transition: {
              opacity: {
                ease: "easeOut",
                duration: .1
              },
              height: Re
            },
            transitionEnd: {
              display: "none"
            }
          }
        },
        He = {
          open: {
            "--cta-border-color": "var(--white-15)",
            "--cta-background-color": "rgba(255,255,255,.1)",
            "--cta-background-color-noBlur": "var(--black-100)",
            padding: "var(--foundry-global-spacing-dimensions-200)",
            gridGap: "var(--grid-gap-sm)",
            "--btn-hover-bg-color": "var(--black-15)",
            "--btn-hover-bg-color-noBlur": "var(--black-100)",
            "--btn-hover-font-color": "var(--white-100)",
            "--btn-hover-border-color": "var(--white-15)"
          },
          closed: {
            "--cta-border-color": "var(--white-100)",
            "--cta-background-color": "var(--black-15)",
            "--cta-background-color-noBlur": "var(--black-15)",
            padding: "var(--foundry-global-spacing-dimensions-300) var(--foundry-global-spacing-dimensions-600)",
            gridGap: 0,
            transition: Re,
            transitionEnd: {
              "--btn-hover-bg-color": "var(--white-100)",
              "--btn-hover-bg-color-noBlur": "var(--white-100)",
              "--btn-hover-font-color": "var(--black-100)",
              "--btn-hover-border-color": "var(--white-100)"
            }
          }
        },
        We = {
          pillBtn: "rockstargames-sites-legacyba37d7130b54bd53bd309b0cd04717ff",
          selected: "rockstargames-sites-legacyc9c0bba52c010c4e3571f2702eef944b",
          container: "rockstargames-sites-legacybfcd1a0671c127c9135d8c2feac75c34",
          content: "rockstargames-sites-legacya1cf623c9dd51dd05772a395d8311dac",
          expandedButton: "rockstargames-sites-legacyf692df3414cf4d587df1739702e52732",
          unexpandedButton: "rockstargames-sites-legacyba4683b82274b0f8ca98f97fd2b0a1c9",
          buttonText: "rockstargames-sites-legacyc2fb2fb5ec39a5c3b3c14ee6c0505b53",
          expandedArea: "rockstargames-sites-legacydd25aa78f935c7d4cafdb1c8bc6d7932",
          closeButton: "rockstargames-sites-legacyc559c930e0a5a7caa72b3de9a3362a0a",
          platformButtons: "rockstargames-sites-legacyd6bfc47d3110920d77ea2e70dac9c898",
          platformButton: "rockstargames-sites-legacyb04a9bd68b598682a5dbe99dd1a2f06d",
          xbox: "rockstargames-sites-legacyfe4a687dfc69ef746fcbe4184c7a9574",
          xboxone: "rockstargames-sites-legacyb1f46a1ff640d7398e7736e814a5ed8f",
          xboxseriesxs: "rockstargames-sites-legacye23b6f1412ea1ecb8a616b4f25d2888d",
          ps: "rockstargames-sites-legacye0b107bda3c03c1e82c94195bfbc055b",
          ps4: "rockstargames-sites-legacydcf3078cbde57db42e66e6ba4c269fbe",
          ps5: "rockstargames-sites-legacye047116842d7619f0e04a3c9b6dbec13",
          pc: "rockstargames-sites-legacydaa32798c37b9055cd280b838972e63e",
          switch: "rockstargames-sites-legacyae7bc564778d8af6cf5f8a0491ef7dc8"
        },
        qe = e => {
          let {
            buttonText: t = "",
            link: s = "",
            platform: i = "",
            target: r = null,
            onClick: n
          } = e;
          const c = r ?? (s.startsWith(document.location.origin) ? "_self" : "_blank"),
            o = [We.platformButton, We[i]].join(" "),
            l = i ? a(13892)(`./${i}.svg`) : null,
            d = (0, u.jsxs)(u.Fragment, {
              children: [l ? (0, u.jsx)("img", {
                src: l,
                alt: t
              }) : "", !l && (0, u.jsx)("div", {
                className: We.buttonText,
                children: t
              })]
            });
          return s.startsWith("http") ? (0, u.jsx)("a", {
            href: s,
            className: o,
            target: c,
            onClick: n,
            "aria-label": t,
            children: d
          }) : (0, u.jsx)(m.NavLink, {
            className: o,
            onClick: n,
            to: s,
            "aria-label": t,
            children: d
          })
        },
        Xe = e => {
          let {
            variant: t,
            buttonText: s = "Subscribe",
            buttonClassName: i,
            className: r,
            children: n,
            platformsAndLinks: o = [],
            trackingType: l = "buy",
            trackingParent: d,
            target: m = null,
            trackingOId: g = null
          } = e;
          const [f, p] = (0, c.useState)(!1), {
            track: _
          } = (0, R.useGtmTrack)(), h = (0, c.useRef)(null), k = (0, c.useRef)(f);
          (0, c.useEffect)((() => {
            k.current = f
          }), [f]), (0, c.useEffect)((() => {
            const e = e => {
              k && !h?.current?.contains(e.target) && p(!1)
            };
            return document.addEventListener("click", e), () => {
              document.removeEventListener("click", e)
            }
          }), []);
          const b = e => {
            let {
              href: t,
              platform: a
            } = e;
            return () => {
              _({
                element_placement: d,
                event: "cta_store_link",
                link_url: t,
                text: a
              })
            }
          };
          return (0, u.jsxs)("div", {
            className: (0, C.classList)(We.container, r),
            children: [(0, u.jsx)(Fe.motion.div, {
              className: We.content,
              animate: f ? "open" : "close",
              variants: Ue,
              "aria-hidden": !!f,
              children: n
            }), (0, u.jsxs)(Fe.motion.div, {
              "data-variant": t,
              className: ue()(f ? We.expandedButton : We.unexpandedButton),
              animate: f ? "open" : "closed",
              variants: He,
              initial: !1,
              ref: h,
              children: [(0, u.jsx)(Fe.motion.button, {
                className: ue()(We.buttonText, i),
                "aria-expanded": f,
                disabled: f,
                ...!f && {
                  onClick: () => {
                    if (p(!f), !f) switch (l) {
                      case "select_platform":
                        _({
                          element_placement: d,
                          event: "select_platform",
                          event_action: "select_platform",
                          event_category: "cta",
                          event_label: d,
                          text: s?.toLowerCase() ?? "subscribe"
                        });
                        break;
                      case "link_account":
                        _({
                          element_placement: d,
                          event: "cta_link_account",
                          event_action: "link_account",
                          event_category: "cta",
                          event_label: d,
                          o_id: g,
                          text: s?.toLowerCase()
                        });
                        break;
                      case "buy":
                        _({
                          element_placement: d,
                          event: "cta_buy",
                          event_action: "buy",
                          event_category: "cta",
                          event_label: d,
                          text: s?.toLowerCase() ?? "subscribe"
                        });
                        break;
                      case "store_link":
                        _({
                          element_placement: d,
                          event: "cta_store_link",
                          event_action: "store_link",
                          event_category: "cta",
                          event_label: d,
                          text: s?.toLowerCase()
                        });
                        break;
                      case "other":
                        _({
                          element_placement: d,
                          event: "cta_other",
                          event_action: "other",
                          event_category: "cta",
                          event_label: d,
                          text: s?.toLowerCase()
                        })
                    }
                  }
                },
                children: "string" == typeof s ? s : "Subscribe"
              }), (0, u.jsxs)(Fe.motion.div, {
                className: We.expandedArea,
                animate: f ? "open" : "closed",
                variants: Ge,
                initial: !1,
                "aria-hidden": !f,
                children: [(0, u.jsx)("button", {
                  className: We.closeButton,
                  onClick: () => {
                    p(!1), _({
                      element_placement: d,
                      event: "cta_other",
                      text: "close expanding platform button"
                    })
                  },
                  "aria-label": "Close",
                  children: (0, u.jsx)("img", {
                    src: a(72428),
                    alt: "Close"
                  })
                }), (0, u.jsx)("div", {
                  className: We.platformButtons,
                  children: o.length ? o.map((e => (0, u.jsx)(qe, {
                    buttonText: e.buttonText ?? (0, F.findPlatform)(e.platform)?.friendlyName ?? "",
                    link: e.href,
                    platform: e.platform,
                    onClick: b(e),
                    target: m
                  }, `${e.key}-${e.href}-${e.platform}`))) : ""
                })]
              })]
            })]
          })
        },
        Ye = {
          animateBox: "rockstargames-sites-legacye9374e74c542c1028a2068dfbd1e85a3",
          fadeArea: "rockstargames-sites-legacya63de5cdf9849ac45a0f6b4f7617cfa5",
          visible: "rockstargames-sites-legacyd7458685114194d602f94e2581de0f08",
          barGrow: "rockstargames-sites-legacyb0f4d843b626e3741c9dd38fcb3f56b0",
          bar: "rockstargames-sites-legacya4b99f54f3ce3987765143d8a151360a",
          animateMe: "rockstargames-sites-legacyf9c3869a2a1e10490bdfbcb3ee89d7da"
        },
        Ke = e => {
          let {
            children: t,
            style: a
          } = e;
          const s = (0, c.useRef)(null);
          return (0, c.useEffect)((() => {
            new IntersectionObserver((e => {
              e.forEach((e => {
                e.isIntersecting && e.target.classList.add([Ye.visible])
              }))
            })).observe(s?.current)
          }), []), (0, u.jsx)("div", {
            style: a,
            className: [Ye.fadeArea].join(" "),
            ref: s,
            children: t
          })
        },
        Qe = {
          gameSiteHeader: "rockstargames-sites-legacycb7cada84679a7af263e1436675a518a",
          activeNavItem: "rockstargames-sites-legacyaa4aa7ed96facb38ed09c72eededb418",
          navHidden: "rockstargames-sites-legacyac1cb9d2005f287ed666d334f816f8c5",
          navContent: "rockstargames-sites-legacye5abd79468866e31fdad2780b169f687",
          headerNavOpen: "rockstargames-sites-legacyb98508d0923c5bb442c15772fbad9764",
          headerLogo: "rockstargames-sites-legacye666ff4f0b91dfe78991244ac1a759a5",
          bg: "rockstargames-sites-legacycfc6fd456ca2f3e9db06f780f412660f"
        },
        Ze = e => {
          let {
            buttonText: t = null,
            gameOverrideStyles: a,
            navLinks: s,
            cta: i = "",
            game: r
          } = e;
          const [n, o] = (0, c.useState)(!1), l = (0, h.useMutateState)(), {
            navHidden: d
          } = (0, h.useState)();
          return (0, c.useEffect)((() => {
            l({
              gameSiteNavOpen: n
            })
          }), [n]), (0, c.useEffect)((() => {
            const e = () => {
              o(!1)
            };
            return document.addEventListener("click", e), () => document.removeEventListener("click", e)
          }), []), (0, u.jsxs)("header", {
            "data-game": r,
            className: [Qe.gameSiteHeader, n ? Qe.headerNavOpen : "", d ? Qe.navHidden : "", a.gameSiteHeader, n ? a.headerNavOpen : ""].join(" "),
            children: [(0, u.jsx)("button", {
              className: [Qe.headerLogo, a.headerLogo].join(" "),
              onClick: e => {
                o(!n), e.nativeEvent.stopImmediatePropagation()
              },
              type: "button",
              "aria-label": "Open Game Site Nav",
              dangerouslySetInnerHTML: {
                __html: t
              }
            }), (0, u.jsx)("div", {
              className: Qe.bg
            }), (0, u.jsx)("nav", {
              children: (0, u.jsx)("div", {
                className: Qe.navContent,
                children: s
              })
            }), i]
          })
        };
      var Je = a(31403),
        et = a(79784),
        tt = a.n(et);
      class at extends c.Component {
        constructor(e) {
          super(e), this.state = {
            header: e.header ?? null
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
          return this?.state?.error?.message ? (0, u.jsxs)("div", {
            className: "rockstargames-sites-legacyf903c45f8ecc18bd55f702e202f3763a",
            children: [(0, u.jsx)("h1", {
              children: this.state.header ?? "An error occurred."
            }), (0, u.jsx)("span", {
              children: this.state.error.message
            })]
          }) : this.props.children
        }
      }
      const st = function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return function(a) {
            return (0, u.jsx)(at, {
              header: t,
              children: (0, u.jsx)(e, {
                ...a
              })
            })
          }
        },
        it = e => {
          let {
            prevRef: t,
            nextRef: a,
            onNextClicked: s,
            onPrevClicked: i,
            onNextKeyDown: r
          } = e;
          return (0, u.jsxs)("div", {
            className: "rockstargames-sites-legacyd98f432655f19a842390597c4434db06",
            children: [(0, u.jsx)("button", {
              className: "rockstargames-sites-legacyc06ca360ce11f2cef7baf8c5fba05a42",
              ref: t,
              onClick: i,
              "aria-label": "Previous",
              role: "button"
            }), (0, u.jsx)("button", {
              className: "rockstargames-sites-legacya4f98606cdef508fbd2e69c5564a92d8",
              ref: a,
              onClick: s,
              onKeyDown: r,
              "aria-label": "Next",
              role: "button"
            })]
          })
        },
        rt = st((e => {
          let {
            description: t,
            slideChildren: a,
            size: s,
            title: i,
            name: r,
            customSlidesPerView: n = null,
            customSpaceBetween: o = null,
            slideClass: l,
            style: d,
            className: m,
            cardSizeBreakpoints: g,
            customAspectRatio: f,
            titleBadge: p
          } = e;
          const {
            track: _
          } = (0, R.useGtmTrack)(), h = (0, c.useRef)(null), k = (0, c.useRef)(null), b = (0, c.useRef)(null), [v, y] = (0, c.useState)(null), [x, w] = (0, c.useState)(!1), [N, j] = (0, c.useState)(null), [S, T] = (0, c.useState)(), [M, I] = (0, c.useState)(), {
            ref: E,
            inView: L
          } = (0, W.useInView)({
            threshold: .6
          }), [z, O] = (0, c.useState)(!1), [A, D] = (0, c.useState)(null), [B, V] = (0, c.useState)(!1), [F, $] = (0, c.useState)(0), [U, G] = (0, c.useState)(0);
          (0, c.useEffect)((() => {
            const e = () => {
              V(window.innerWidth < 1024)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), []), (0, c.useEffect)((() => {
            const e = () => {
              S && !(0, et.isEmpty)(S) && S?.height > 0 && S?.height !== F && $(S?.height)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), [S]);
          const H = {
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
          (0, c.useEffect)((() => {
            if (!h.current) return;
            const e = () => {
              if (h.current) {
                const e = n || Number(window.getComputedStyle(h.current).getPropertyValue("--slides-per-view")),
                  t = n ? 1 : Number(window.getComputedStyle(h.current).getPropertyValue("--slides-per-view-multiplier"));
                j(e * t)
              }
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), [h, n]), (0, c.useEffect)((() => {
            if (!a) return;
            let e = !1;
            a.forEach((t => {
              "cover-card" === t?.props?.tina?.payload?.meta?.type && (e = !0, D(t))
            })), O(e);
            const t = a.map(((e, t) => "cover-card" === e?.props?.tina?.payload?.meta?.type && B ? null : (0, u.jsx)(P.Ky, {
              className: "rockstargames-sites-legacyf58e79e329504e170dc9cb4595ea011b",
              onFocus: () => Y(t),
              children: e
            }, Symbol(t).toString())));
            y(t)
          }), [a, B]), (0, c.useEffect)((() => {
            I({
              nextEl: b.current,
              prevEl: k.current
            })
          }), [b, k]), (0, c.useEffect)((() => {
            L && !x && a && (_({
              event: "page_section_impression",
              event_action: "impression",
              event_category: "page_section",
              event_label: (r || i).toLowerCase(),
              element_placement: (r || i).toLowerCase()
            }), w(!0))
          }), [L, a]);
          let q = "custom" === s ? {
            "--custom-aspect-ratio": f,
            ...d
          } : {
            ...d
          };
          const X = 0 !== F ? `${F}px` : "100%";
          q = {
            ...q,
            "--carousel-cards-height": X,
            "--carousel-nav-opacity": U
          };
          const Y = e => {
            S?.slideTo(e)
          };
          return (0, u.jsxs)("div", {
            className: (0, C.classList)("rockstargames-sites-legacyd0c3d91603036c852633939015a6cb48", m),
            "data-size": s,
            "data-sm": g?.sm ? g?.sm : s,
            "data-md": g?.md ? g?.md : s,
            "data-lg": g?.lg ? g?.lg : s,
            "data-xl": g?.xl ? g?.xl : s,
            "data-xxl": g?.xxl ? g?.xxl : s,
            "data-has-covercard": z,
            "data-new-carousel-nav": !0,
            ref: h,
            style: q,
            children: [(0, u.jsx)("div", {
              className: "rockstargames-sites-legacyddeb75a59ed783554b94e8298897a1fa",
              ref: E
            }), z && B && (0, u.jsx)("div", {
              className: "rockstargames-sites-legacyd5f00d41fdd2c864a0eb9e069cf08db0",
              children: A
            }), (0, u.jsx)("div", {
              className: "rockstargames-sites-legacycdc60dbde3f8db6f466aba8a3e19fa96",
              children: (0, u.jsxs)("div", {
                className: "rockstargames-sites-legacyfb8e207418c783fc2f53b44c19faedca",
                children: [(0, u.jsxs)("div", {
                  className: "rockstargames-sites-legacyb779ba2045a88302079083935c90f7b3",
                  children: [!z && i && (0, u.jsxs)("div", {
                    className: "rockstargames-sites-legacyedf90c7c5ee1c79049f5a6442f14c949",
                    children: [(0, u.jsx)("h2", {
                      children: i
                    }), p && (0, u.jsx)("span", {
                      className: "rockstargames-sites-legacyd7a4aaeb70d68fdee39312192efb990b",
                      children: p
                    })]
                  }), (0, u.jsx)(it, {
                    prevRef: k,
                    nextRef: b,
                    onNextClicked: () => {},
                    onPrevClicked: () => {},
                    onNextKeyDown: e => {
                      if ("Tab" === e.key && !e.shiftKey) {
                        const t = S?.slides[S?.activeIndex].querySelector('a, button, [role="button"]');
                        t && (e.preventDefault(), t.focus())
                      }
                    }
                  })]
                }), t && (0, u.jsx)("div", {
                  className: "rockstargames-sites-legacya1007d13e3a321bb18b5fc667025d545",
                  dangerouslySetInnerHTML: {
                    __html: t
                  }
                })]
              })
            }), N ? (0, u.jsx)(P.wx, {
              slidesPerView: N,
              onInit: e => {
                T(e);
                const t = setInterval((() => {
                  const {
                    height: a
                  } = e;
                  a > 0 && ($(a), G(1), clearInterval(t))
                }), 500)
              },
              grabCursor: !0,
              navigation: M,
              modules: [Je._2],
              breakpoints: H,
              slideClass: (0, C.classList)("swiper-slide", l),
              onSlideNextTransitionEnd: () => {
                _({
                  event_action: "next",
                  event_category: "carousel",
                  event: "carousel_next",
                  event_label: i?.toLowerCase() ?? "",
                  element_placement: i?.toLowerCase() ?? ""
                })
              },
              onSlidePrevTransitionEnd: () => {
                _({
                  event_action: "previous",
                  event_category: "carousel",
                  event: "carousel_previous",
                  event_label: i?.toLowerCase() ?? "",
                  element_placement: i?.toLowerCase() ?? ""
                })
              },
              onSlideChangeTransitionEnd: () => {
                _({
                  event_action: "swipe",
                  event_category: "carousel",
                  event: "carousel_swipe",
                  event_label: i?.toLowerCase() ?? "",
                  element_placement: i?.toLowerCase() ?? ""
                })
              },
              children: v
            }) : ""]
          })
        }), null),
        nt = {
          pillBtn: "rockstargames-sites-legacyd008b074498ad02717806cc094b8a780",
          selected: "rockstargames-sites-legacybe9a2e37ec59e339b0d72cd8e5256703",
          hero: "rockstargames-sites-legacyd1346f9b98fbaac26948e361bd98b4c6",
          images: "rockstargames-sites-legacyc9c078a3102a96b26f1bf1f98306384f",
          background: "rockstargames-sites-legacya271224ca2caf56b470059cdb98d9a42",
          gradient: "rockstargames-sites-legacyae257e9d159ae9bd7c8685e38ba16f59",
          layered: "rockstargames-sites-legacyf663886f051e47ea04f097c85ae6625b",
          content: "rockstargames-sites-legacyf9c204f451f3a53bcc307c00eb5f907f",
          descriptions: "rockstargames-sites-legacyd1bbf288f3fe6c79e658764847d2890a",
          buttonGroup: "rockstargames-sites-legacyfb373367ffd03ba01edaf671175244ab",
          ctaBlock: "rockstargames-sites-legacyd4e5e627f7968400413c3b578b1b3143",
          primaryBtn: "rockstargames-sites-legacyff921058c7bbf6660b52da746e719577",
          secondaryBtn: "rockstargames-sites-legacya0c587b1487e33b081dc394dfd017fab",
          btnText: "rockstargames-sites-legacybe305ab9e2c27b1458d3e7bb6a9f12e0",
          legalText: "rockstargames-sites-legacyf625ffdd1b33a1642aa0dec12efe7897",
          shardsCarousel: "rockstargames-sites-legacye999b9cecfe233bcee8cab8682fb96bf"
        },
        ct = {
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
        ot = {
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
        lt = e => {
          let {
            title: t = "",
            mobileImg: a,
            desktopImg: s
          } = e;
          const i = (0, C.useGetCdnSource)(a ?? null),
            r = (0, C.useGetCdnSource)(s ?? i);
          return (0, u.jsx)("div", {
            className: nt.shard,
            style: {
              "--background-image-mobile": `url(${i})`,
              "--background-image-desktop": `url(${r})`
            },
            children: (0, u.jsx)("h5", {
              children: t
            })
          })
        },
        dt = e => {
          let {
            title: t = "Membership Rewards",
            name: a = "Membership Rewards",
            shards: s
          } = e;
          const [i, r] = (0, c.useState)(null);
          return (0, c.useEffect)((() => {
            s && r(s.reduce(((e, t) => {
              if (!t?.shardImg) return e;
              const {
                title: a,
                shardImg: s
              } = t, {
                mobile: i,
                desktop: r
              } = s;
              return e.push((0, u.jsx)(lt, {
                title: a,
                mobileImg: i?.full_src,
                desktopImg: r?.full_src
              })), e
            }), []))
          }), [s]), i ? (0, u.jsx)("div", {
            className: nt.shardsCarousel,
            children: (0, u.jsx)(rt, {
              title: t,
              name: a,
              slideChildren: i,
              size: "lg",
              customSpaceBetween: 0
            })
          }) : null
        },
        mt = e => {
          let {
            animated: t = !1,
            ctas: a = [],
            expandingButtonLabel: s = "Subscribe"
          } = e;
          const [i, r] = (0, c.useState)([]), [n, o] = (0, c.useState)([]);
          return (0, c.useEffect)((() => {
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
            r(e), o(t)
          }), [a]), i.length ? (0, u.jsx)(Fe.motion.div, {
            variants: t ? ot : void 0,
            children: (0, u.jsx)(Xe, {
              variant: "gen9",
              buttonText: s,
              platformsAndLinks: i,
              children: !!n.length && (0, u.jsx)(Fe.motion.div, {
                variants: ot,
                children: (0, u.jsx)(z, {
                  buttons: n,
                  className: nt.buttonGroup
                })
              })
            })
          }) : (0, u.jsx)(u.Fragment, {
            children: !!n.length && (0, u.jsx)(Fe.motion.div, {
              variants: ot,
              children: (0, u.jsx)(z, {
                buttons: n,
                className: nt.buttonGroup
              })
            })
          })
        },
        gt = e => {
          let {
            animated: t = !1,
            brands: a = [],
            ctas: s = [],
            cta: i = [],
            description: r = "",
            expandingButtonLabel: n = "Subscribe",
            title: c = "",
            legalText: o
          } = e;
          return (0, u.jsxs)(Fe.motion.div, {
            className: nt.content,
            initial: "hidden",
            animate: "visible",
            variants: t ? ct : void 0,
            children: [(0, u.jsx)(Fe.motion.div, {
              variants: t ? ot : void 0,
              children: (0, u.jsx)(j, {
                brands: a
              })
            }), (c || r) && (0, u.jsxs)(Fe.motion.div, {
              className: nt.descriptions,
              variants: t ? ot : void 0,
              children: [c && (0, u.jsx)("h2", {
                dangerouslySetInnerHTML: {
                  __html: c
                }
              }), r && (0, u.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: r
                }
              })]
            }), !!i.length && (0, u.jsx)("div", {
              className: nt.ctaBlock,
              children: (0, u.jsx)(C.TinaParser, {
                components: {
                  Cta: pe,
                  ExpandingPlatformButton: Xe
                },
                tina: {
                  payload: {
                    content: i
                  }
                }
              })
            }), !!s.length && (0, u.jsx)("div", {
              className: nt.ctaBlock,
              children: (0, u.jsx)(mt, {
                animated: t,
                ctas: s,
                expandingButtonLabel: n
              })
            }), o && (0, u.jsx)(Fe.motion.div, {
              className: nt.legalText,
              variants: t ? ot : void 0,
              children: (0, u.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: o
                }
              })
            })]
          })
        },
        ut = e => {
          let {
            animated: t = !1,
            backgroundImage: a,
            brands: s = [],
            className: i,
            ctas: r = [],
            cta: n,
            description: c = "",
            expandingButtonLabel: o = "Subscribe",
            layeredImage: l,
            layeredImageSettings: d,
            legalText: m,
            shardsSection: g = {},
            theme: f = "gen9",
            title: p = ""
          } = e;
          const _ = (e => {
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
                const [s, i] = e;
                if (a.has(s)) {
                  const e = a.get(s);
                  Object.entries(i).forEach((i => {
                    const [r, n] = i;
                    if (a.has(s) && a.has(r)) {
                      const s = `${a.get(r)}${e}`;
                      t[s] = "imageWidth" !== r ? n ? `${n}px` : "0px" : n ? `${n}vw` : "100vw"
                    }
                  }))
                }
              })), t
            })(d),
            h = (0, C.useGetCdnSource)(a?.mobile?.full_src ?? null),
            k = (0, C.useGetCdnSource)(a?.desktop?.full_src ?? h),
            b = (0, C.useGetCdnSource)(l?.mobile?.full_src ?? null),
            v = (0, C.useGetCdnSource)(l?.desktop?.full_src ?? b);
          return (0, u.jsxs)(Fe.motion.div, {
            className: (0, C.classList)(nt.hero, i),
            style: {
              "--background-image-desktop": `url(${k})`,
              "--background-image-mobile": `url(${h})`,
              "--layered-image-desktop": `url(${v})`,
              "--layered-image-mobile": `url(${b})`
            },
            initial: "hidden",
            animate: "visible",
            variants: t ? ct : void 0,
            "data-type": "hero",
            theme: f,
            children: [(0, u.jsxs)("div", {
              className: nt.images,
              children: [k && h ? (0, u.jsx)("div", {
                className: nt.background,
                style: a?.style ?? {}
              }) : "", b && v ? (0, u.jsx)("div", {
                className: nt.layered,
                style: d ? _ : {}
              }) : "", (0, u.jsx)("div", {
                className: nt.gradient
              })]
            }), (0, u.jsx)(gt, {
              animated: t,
              ctas: r,
              cta: n,
              description: c,
              expandingButtonLabel: o,
              title: p,
              brands: s,
              legalText: m
            }), g?.shards && (0, u.jsx)(dt, {
              ...g
            })]
          })
        },
        ft = e => {
          let {
            children: t,
            attributes: a = {},
            className: s = "",
            style: i = {}
          } = e;
          return (0, u.jsx)("span", {
            className: (0, C.classList)(s, a?.className, "rockstargames-sites-legacya7f106a8036d74ed9282a741476c6b5a"),
            style: (0, F.safeStyles)(i ?? a?.style ?? {}),
            dangerouslySetInnerHTML: {
              __html: tt().unescape(t)
            }
          })
        };
      var pt = a(53592);
      const _t = (0, o.defineMessages)({
          language_selector_default: {
            id: "language_selector_default",
            defaultMessage: "Select a Language"
          }
        }),
        ht = {
          pillBtn: "rockstargames-sites-legacycb792ef8796eaa09f8b5c1ee0230fcd7",
          selected: "rockstargames-sites-legacyc951b9f5173e8a37be389854c40995ee",
          scMenuStyles: "rockstargames-sites-legacyfa91a55e22ad688cba0bc1210eaf4726",
          languageSelector: "rockstargames-sites-legacyb631f2ce92e4a89f8eddebd32e8ed30a",
          open: "rockstargames-sites-legacyedc598921a872174190475d0ad016d15",
          linkWrapper: "rockstargames-sites-legacyc4b7087d1fcbaad6967e61b84160ff79",
          links: "rockstargames-sites-legacyc7d345d5c7e567e0ee75b792d5bdfb88",
          selectBoxWrapper: "rockstargames-sites-legacye3e55a10507405de05ae92006ec0d02b",
          selectBox: "rockstargames-sites-legacyc646a2bff16ec3003b027857488cd612",
          selectBoxOption: "rockstargames-sites-legacybcccd1077d13d7fe1585655e5c5f8363"
        },
        kt = (0, o.withIntl)((e => {
          let {
            theme: t,
            languageSelectorOpened: a,
            setLanguageSelectorOpened: s,
            parent: i = "footer"
          } = e;
          const {
            track: r
          } = (0, R.useGtmTrack)(), n = (0, m.useLocation)(), l = (0, o.useIntl)(), [d, g] = (0, o.getLocale)(), [p, _] = (0, c.useState)(!1), h = (0, c.useMemo)((() => (0, pt.c)()), []), k = (0, c.useCallback)((e => {
            let t = n.pathname;
            const a = t.split("/");
            return o.locales.map((e => e.subdomaincom)).includes(a[0]) && (t = a.slice(1).join("/")), h.currentSite?.site === pt.U.www ? "en" === e ? `${window.location.origin}${t}${n.search}` : `${window.location.origin}/${e}${t}${n.search}` : `${window.location.origin}${t}${n.search}`
          }), [n]), b = (0, c.useRef)(null), [v, y] = (0, c.useState)(0), x = matchMedia("(hover: none) and (pointer: coarse)").matches, w = e => {
            if (s && s(!1), d.subdomaincom === e || "none" === e) return void(s && s(!1));
            const t = o.locales.find((t => t.subdomaincom === e));
            if (t) {
              const a = k(e);
              r({
                event: "cta_other",
                link_url: a,
                text: e,
                element_placement: i
              }), g(t.iso), window.location.href = a
            }
          };
          return (0, c.useEffect)((() => {
            void 0 !== a && !1 === a && !0 === p && _(!1)
          }), [a]), (0, c.useEffect)((() => {
            b.current && y(b.current.scrollHeight)
          }), [b]), (0, u.jsxs)("div", {
            className: [ht.languageSelector, p ? ht.open : ""].join(" "),
            "data-theme": t,
            children: [x && "sc-menu" === t && (0, u.jsx)("div", {
              className: ht.selectBoxWrapper,
              children: (0, u.jsxs)("select", {
                className: ht.selectBox,
                onClick: e => e.stopPropagation(),
                onChange: e => {
                  const t = e.currentTarget.value;
                  w(t)
                },
                "aria-label": l.formatMessage(_t.language_selector_default),
                children: [(0, u.jsx)("option", {
                  className: ht.selectBoxOption,
                  value: "none",
                  children: (0, u.jsx)(o.FormattedMessage, {
                    ..._t.language_selector_default
                  })
                }), o.locales.map((e => {
                  let {
                    label: t,
                    subdomaincom: a
                  } = e;
                  return (0, u.jsx)("option", {
                    className: ht.selectBoxOption,
                    value: a,
                    children: t
                  }, `mobile-${a}`)
                }))]
              })
            }), (!x || "sc-menu" !== t) && (0, u.jsxs)(u.Fragment, {
              children: [(0, u.jsxs)("button", {
                onClick: e => {
                  e.stopPropagation(), s && s(!p), _(!p)
                },
                type: "button",
                "aria-label": l.formatMessage(_t.language_selector_default),
                children: [(0, u.jsx)("i", {}), (0, u.jsx)("span", {
                  children: (0, u.jsx)(o.FormattedMessage, {
                    ..._t.language_selector_default
                  })
                })]
              }), (0, u.jsx)("div", {
                className: ht.linkWrapper,
                ref: b,
                style: {
                  "--ls-linkWrapper-opened-height": `${v}px`
                },
                children: (0, u.jsx)("div", {
                  className: ht.links,
                  children: o.locales.map((e => {
                    let {
                      subdomaincom: t,
                      label: a
                    } = e;
                    return (0, u.jsx)(f, {
                      to: k(t),
                      onClick: (s = t, () => {
                        w(s)
                      }),
                      tabIndex: p ? 0 : -1,
                      children: a
                    }, `desktop-${t}`);
                    var s
                  }))
                })
              })]
            })]
          })
        }), l),
        bt = {
          layeredImage: "rockstargames-sites-legacya29c233d553c5905763bb69412c1ece4",
          layersWrapper: "rockstargames-sites-legacyaabf78eb3e1fe545556ad0fa5639296e",
          "hero-lg": "rockstargames-sites-legacyca666917bdeaed43fd0a7af7dc30a0f7",
          "hero-md": "rockstargames-sites-legacyf0a202fcbf13f1e91157e531ae829ea3",
          "hero-sm": "rockstargames-sites-legacye03dbf5d16aeab81ca65f4cb7e64446f",
          contain: "rockstargames-sites-legacyc4c3c929b11e88540e3f19d5715393ec",
          cover: "rockstargames-sites-legacyb283d6381c82abf4dde21c57b8fc5f66",
          fill: "rockstargames-sites-legacye9d16b94c1ed476c9346cb6f48f5ad3e",
          "bg-img": "rockstargames-sites-legacye45fabf9c4e04bf3ee27e9c84c50c09b",
          imageLayer: "rockstargames-sites-legacyed8d0ad18a62f087629ff5831fa0ac55",
          "layer-lg-height": "rockstargames-sites-legacyfaf1d5c6b2fe2ad27d4bb95ba7388f3d",
          "layer-md-height": "rockstargames-sites-legacyb41041f11a5ef98325948acc3dec956c",
          "layer-sm-height": "rockstargames-sites-legacyba7d5822aa073c9e01cd682d65c18944",
          "layer-xl-height": "rockstargames-sites-legacyec2399a1f7e79e9aacba81b242ad0602",
          "layer-xs-height": "rockstargames-sites-legacya6ec38ac99c762fcf0dd99aa2ced8f2b",
          "layer-xxl-height": "rockstargames-sites-legacyd7c1314e717273dfbb2acd3d5e06e585",
          "layer-lg-width": "rockstargames-sites-legacyca0dd7a55a5db5ee358ce51a166e5431",
          "layer-md-width": "rockstargames-sites-legacybd4c246f4f0eaf7173d104ed1e7c2d06",
          "layer-sm-width": "rockstargames-sites-legacyfe3f49cba9cc10e4e076a43a6b36b862",
          "layer-xl-width": "rockstargames-sites-legacybde3d6485ac7bb483dcca1ad4e2bbe67",
          "layer-xs-width": "rockstargames-sites-legacyb87efd95b330cacd4a5eaecf83528f4d",
          "layer-xxl-width": "rockstargames-sites-legacyac872df7985f9d591c85f97c72d451dc",
          "bottom-y": "rockstargames-sites-legacyd63fdb49c964c28c5e8952cd79a393a0",
          "center-x": "rockstargames-sites-legacyd248443eb924360a5d1d7211094ea827",
          "center-y": "rockstargames-sites-legacya8d87c765a51d98f0e3a9afd149ed0dc",
          "left-x": "rockstargames-sites-legacydcaa6339b43850be2e14967cab730041",
          "right-x": "rockstargames-sites-legacyb656d800e3d134bd3a7e273a5f6d7ae6",
          "top-y": "rockstargames-sites-legacyadaf230f139f906eb912b58b315406ac",
          border: "rockstargames-sites-legacyc73e199a8978fb80895753c9a38fcdff",
          shards: "rockstargames-sites-legacye650a715d6f220ad49bb568768154b0e",
          shards_three: "rockstargames-sites-legacyb0c8be28788c6b23cea904bdc60d7e07",
          shards_two: "rockstargames-sites-legacye41252d3a0aee1d229f6bddc20c38d47",
          dual: "rockstargames-sites-legacydb575e1d021e69ebb4265a29484e2888"
        },
        vt = e => {
          let {
            style: t,
            className: a
          } = e;
          const s = {
              ...t
            },
            i = t["--border-image-source"],
            r = (0, C.useGetCdnSource)(i || null);
          return i && (s["--border-image-source"] = `url(${r})`), (0, u.jsx)("div", {
            className: (0, C.classList)(bt.border, a),
            style: {
              ...s
            }
          })
        },
        yt = e => e?.images ? (0, u.jsx)("div", {
          className: (0, C.classList)(bt.layeredImage, bt[e?.variantClass], bt[e?.wrapperSizeClass]),
          style: {
            ...e?.style ?? {}
          },
          children: (0, u.jsxs)("div", {
            className: bt.layersWrapper,
            children: [e?.images?.map(((e, t) => {
              const {
                image: a,
                paddingClass: s,
                imageSizeClass: i,
                objectFitClass: r,
                positionClassX: n,
                positionClassY: c,
                zIndex: o,
                className: l,
                style: d,
                alt: m,
                displayClass: g
              } = e;
              return (0, u.jsx)(be, {
                image: a,
                style: {
                  zIndex: o ?? t + 1
                },
                imageStyle: d,
                className: (0, C.classList)(l, g, bt.imageLayer, bt[s], bt[i], bt[r], bt[n], bt[c]),
                alt: m
              }, o ?? t + 1)
            })), e?.borderImage && (0, u.jsx)(vt, {
              style: e?.borderImage,
              className: e?.borderImage?.displayClass
            })]
          })
        }) : null,
        xt = e => {
          let {
            hero: t,
            children: a
          } = e;
          return t ? (0, u.jsx)("div", {
            className: "rockstargames-sites-legacyefc561ad30f5dfe75c79d939737650dc",
            children: a
          }) : a
        },
        wt = e => {
          let {
            badge: t = null,
            badgeType: a,
            discountTxt: s,
            splitter: i,
            image: r,
            style: n,
            className: c = "",
            attributes: o = {},
            role: l,
            hero: d = !1
          } = e;
          return (0, u.jsx)(xt, {
            hero: d,
            children: (0, u.jsx)("figure", {
              children: (0, u.jsxs)("div", {
                className: (0, C.classList)("rockstargames-sites-legacycab262c98c7f5bb3e982d9b075b3c2a8", d ? "rockstargames-sites-legacycefd6d8859aeec1057caed28caa160c3" : "", o?.hiddenMobile ? "hiddenMobile" : "", o?.hiddenLarge ? "hiddenLarge" : "", o?.className, c),
                style: (0, F.safeStyles)({
                  ...n,
                  ...o?.style
                }),
                ...o,
                children: [(0, u.jsx)(be, {
                  image: r,
                  className: c
                }), (r?.badge || r?.discountTxt || t || s) && (0, u.jsx)(Ie, {
                  badge: r?.discountTxt ?? r?.badge ?? t ?? s,
                  badgeType: a,
                  splitter: r?.splitter ?? i,
                  role: r?.role ?? l
                }), r?.caption && (0, u.jsx)("figcaption", {
                  dangerouslySetInnerHTML: {
                    __html: r.caption
                  }
                })]
              })
            })
          })
        },
        Nt = {
          pillBtn: "rockstargames-sites-legacyeea0db67b0aabf28288b288845324afe",
          selected: "rockstargames-sites-legacyd1d25362fd730ca979d5ad79de088f89",
          multiSourceContainer: "rockstargames-sites-legacydc538bbfc2f407ed9fe840097ccac819",
          multiSourceImage: "rockstargames-sites-legacyee782a29692a8eb06db1287a4984c243",
          animatePlaceholder: "rockstargames-sites-legacyfbd73f5f70c2ce64aa9c9bd398f1a3b5",
          "loader-keyframes": "rockstargames-sites-legacyf6040b2ae96a9b0dcdb2d283c9caff59"
        },
        jt = e => {
          let {
            imageUrl: t,
            className: a,
            alt: s,
            style: i,
            lazy: r = !1,
            decoding: n = "auto",
            sizes: o = [320, 480, 768, 1024, 1440, 1920, 2560]
          } = e;
          const [l, d] = (0, c.useState)(!1);
          return (0, u.jsxs)("div", {
            className: Nt.multiSourceContainer,
            children: [!l && (0, u.jsx)("img", {
              className: [a, Nt.animatePlaceholder].join(" "),
              src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiBmaWxsPSIjMzMzMzMzIi8+Cjwvc3ZnPgo=",
              sizes: "(max-width: 1024px) 100vw, 1024px",
              alt: "Loading...",
              style: i
            }), (0, u.jsx)("img", {
              className: [Nt.multiSourceImage, a].join(" "),
              src: `${t}?im=Resize=1920`,
              srcSet: (m = t, o.map((e => `${m}?im=Resize=${e} ${e}w`)).join(", ")),
              sizes: "(max-width: 400px) 200px, (max-width: 1920px) 100vw, 1920px",
              alt: s ?? "Multi-Source Image",
              style: i,
              onLoad: () => {
                d(!0)
              },
              loading: r ? "lazy" : "eager",
              decoding: n
            })]
          });
          var m
        },
        St = e => {
          let {
            impressionTracking: t,
            gtm: a = {},
            children: s
          } = e;
          return t?.shouldTrack ? (0, u.jsx)(Mt, {
            threshold: t?.threshold,
            gtm: a,
            children: s
          }) : s
        },
        Tt = (e, t) => a => ((e, t, a) => (0, u.jsx)(St, {
          impressionTracking: a?.impressionTracking,
          gtm: a?.gtm,
          children: (0, u.jsx)(e, {
            ...t
          })
        }))(e, a, t),
        Ct = {
          event: "page_section_impression",
          event_action: "impression",
          event_category: "page_section",
          event_label: null,
          element_placement: null
        },
        Mt = e => {
          let {
            threshold: t = .6,
            children: a,
            gtm: s = {}
          } = e;
          const {
            track: i
          } = (0, R.useGtmTrack)(), {
            ref: r,
            inView: n
          } = (0, W.useInView)({
            threshold: t,
            trackVisibility: !0,
            delay: 100
          }), [o, l] = (0, c.useState)(!1);
          return (0, c.useEffect)((() => {
            n && !o && (i({
              ...Ct,
              ...s
            }), l(!0))
          }), [n, r]), (0, u.jsx)("section", {
            ref: r,
            children: a
          })
        },
        It = {
          tag: "rockstargames-sites-legacyed77774d2704bc0ebc0ac156542ae053"
        },
        Et = e => {
          let {
            className: t,
            href: a,
            title: s,
            style: i
          } = e;
          const r = (0, u.jsxs)("div", {
            style: i,
            className: [It.tag, t].join(" "),
            children: [(0, u.jsx)("i", {}), s]
          });
          return void 0 !== a ? (0, u.jsx)(f, {
            to: a,
            children: r
          }) : r
        },
        Lt = {
          newswireBlock: "rockstargames-sites-legacya793f470884d207243d6c3caac8ad811",
          info: "rockstargames-sites-legacyd50f6d2bc5f983c05311292acb4c78a5",
          title: "rockstargames-sites-legacycc389449dc1495fc9c323fc2c547857d",
          newswireBlockNoSpecialOrder: "rockstargames-sites-legacyffd167124f27c8e26a147f49c88796e5",
          preview: "rockstargames-sites-legacybbfbcf32c8c892ea29f4178949643475",
          previewMobile: "rockstargames-sites-legacyf88852766488b21a28c42d230ea529a1",
          top: "rockstargames-sites-legacyfa1a6f4c7d94b94f5af2dc1ac9af79f1",
          startAnimation: "rockstargames-sites-legacye380e8c67066df6f33fc018341ea96e5"
        },
        zt = e => {
          let {
            section: t = "",
            index: a,
            post: s,
            noSpecialOrder: i = !1,
            focused: r
          } = e;
          const {
            track: n
          } = (0, R.useGtmTrack)(), [o] = (0, m.useSearchParams)(), l = s.preview_images_parsed.newswire_block, d = {
            default: 0 !== a || i ? l.square || l.d16x9 || l._fallback : l.d16x9 || l.square || l._fallback,
            mobile: l.square || l._fallback
          }, [g, p] = (0, F.usePreloadImg)(d.default), _ = {
            default: {
              backgroundImage: `url(${d.default})`
            },
            mobile: {
              backgroundImage: `url(${d.mobile})`
            }
          }, h = (0, c.useCallback)((() => {
            n({
              event: "card_click",
              card_id: s.id,
              card_name: s.name_slug.replace(/-/g, " "),
              link_url: s.url,
              position: a,
              element_placement: t
            })
          }), [s]);
          return (0, u.jsx)(f, {
            to: s.url,
            className: [Lt.newswireBlock, i ? Lt.newswireBlockNoSpecialOrder : "", null !== g ? Lt.startAnimation : ""].join(" "),
            focused: r,
            onClick: h,
            children: (0, u.jsxs)(u.Fragment, {
              children: [0 !== a || o.get("tag_id") ? (0, u.jsx)("div", {
                className: Lt.preview,
                style: _.default
              }) : (0, u.jsxs)(u.Fragment, {
                children: [(0, u.jsx)("div", {
                  className: Lt.previewMobile,
                  style: _.mobile
                }), (0, u.jsx)("div", {
                  className: Lt.preview,
                  style: _.default
                })]
              }), (0, u.jsxs)("div", {
                className: Lt.info,
                children: [(0, u.jsxs)("div", {
                  className: Lt.top,
                  children: [s.primary_tags.length ? (0, u.jsx)(Et, {
                    title: s.primary_tags[s.primary_tags.length > 1 && 722 === s.primary_tags[0].id ? 1 : 0].name
                  }) : "", (0, u.jsx)("time", {
                    dateTime: s.created,
                    children: s.created_formatted
                  })]
                }), (0, u.jsx)("h5", {
                  className: Lt.title,
                  dangerouslySetInnerHTML: {
                    __html: s.title
                  }
                })]
              })]
            })
          })
        };
      var Pt = a(55492),
        Ot = a.n(Pt);
      const At = (0, F.withTranslations)((e => {
          let {
            section: t = "",
            relativeTo: a = "",
            tagId: s = null,
            metaUrl: i = "/newswire",
            t: r
          } = e;
          const {
            track: n
          } = (0, R.useGtmTrack)(), [o] = (0, m.useSearchParams)(), {
            tagId: l = null
          } = (0, m.useParams)(), [d, g] = (0, c.useState)(l ?? s ?? o.get("tag_id")), [f, p] = (0, c.useState)(1), [_, k] = (0, c.useState)([]), [b, v] = (0, c.useState)(null), {
            data: y
          } = (0, h.useQuery)(Ot(), {
            variables: {
              tagId: Number(d),
              page: f,
              metaUrl: i
            },
            autoSetLoading: !0
          });
          return (0, c.useEffect)((() => {
            p(1), k([]), g(l ?? s ?? o.get("tag_id"))
          }), [o.get("tag_id")]), (0, c.useEffect)((() => {
            y && y.posts && y.posts.paging && v(y.posts.paging), y && y.posts && y.posts.results && k(_.concat(y.posts.results))
          }), [y]), _.length ? (0, u.jsxs)(u.Fragment, {
            children: [(0, u.jsx)(Ft, {
              section: t,
              posts: _,
              relativeTo: a,
              noSpecialOrder: null !== d
            }), null !== b && b.nextPage ? (0, u.jsx)(T, {
              onClick: e => {
                p(f + 1), n({
                  event: "cta_learn",
                  text: "more stories",
                  element_placement: "newswire"
                })
              },
              disabled: !1,
              context: "secondary",
              children: r("More Stories")
            }) : ""]
          }) : null
        })),
        Dt = {
          pillBtn: "rockstargames-sites-legacyafd0af959edb4a463c41ad4e9cc5dadc",
          selected: "rockstargames-sites-legacybcd59aa4a9e88d86a2cbe8d4972f8f51",
          related: "rockstargames-sites-legacya748ad776070dab831edc1f67f66af08",
          posts: "rockstargames-sites-legacyc0aa38678decd13ca38886b4547efedd",
          just1post: "rockstargames-sites-legacyb1a31ddf7fd4458ee860d354a6a0ac92"
        },
        Bt = (0, F.withTranslations)((e => {
          let {
            posts: t,
            t: a
          } = e;
          return (0, u.jsxs)("section", {
            className: Dt.related,
            children: [(0, u.jsx)("h2", {
              children: a("Related Stories")
            }), (0, u.jsx)("div", {
              className: [Dt.posts, 1 === t.length ? Dt.just1post : ""].join(" "),
              children: t.map((e => (0, u.jsx)(zt, {
                noSpecialOrder: !0,
                post: e
              }, e.id)))
            })]
          })
        })),
        Vt = {
          newswireBlocks: "rockstargames-sites-legacyc2c8eedd25de7e186655f98b2a8d8960",
          noSpecialOrder: "rockstargames-sites-legacyc0d0db9dfc71c9f4f959b9c017b1ae4b"
        },
        Ft = (0, F.withGtmTracking)((e => {
          let {
            section: t = "",
            noSpecialOrder: a = !1,
            posts: s,
            gtmTrack: i,
            relativeTo: r
          } = e;
          const [n, o] = (0, c.useState)(null);
          return (0, c.useEffect)((() => {
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
            })), i(e), o(s.length)
          }), [s.length]), (0, u.jsx)("div", {
            className: [Vt.newswireBlocks, a ? Vt.noSpecialOrder : "", Vt.contextHome].join(" "),
            children: s.map(((e, s) => (0, u.jsx)(zt, {
              section: t,
              index: s,
              noSpecialOrder: a,
              post: e,
              focused: s === n
            }, e.id)))
          })
        }));
      var Rt = a(52256),
        $t = a(77100),
        Ut = a(84296);
      const Gt = (e, t) => {
          const a = e.tiers && e.tiers.every((e => e.isComplete)),
            s = t.tiers && t.tiers.every((e => e.isComplete));
          return a && !s ? 1 : !a && s ? -1 : 0
        },
        Ht = (0, o.defineMessages)({
          pl_card_badge_content_complete: {
            id: "pl_card_badge_content_complete",
            defaultMessage: "Complete"
          }
        }),
        Wt = {
          pillBtn: "rockstargames-sites-legacye6891f053f06919f1ef0dc72cafe9ae7",
          selected: "rockstargames-sites-legacye5cce3088e494e8ddb9b0cf5528697a3",
          packCardTierIndicator: "rockstargames-sites-legacyeee874b61946e2a65886d622445e1c38",
          tierIndicator: "rockstargames-sites-legacybf9ed66cb83cf9a38bfc6fbb8e105fb7",
          active: "rockstargames-sites-legacycfa711252c08391d3a0f1ecd8728a61a"
        },
        qt = e => {
          let {
            tiers: t
          } = e;
          return (0, u.jsx)("div", {
            className: Wt.packCardTierIndicator,
            children: t?.map(((e, t) => (0, u.jsx)("div", {
              className: [Wt.tierIndicator, e.isComplete ? Wt.active : ""].join(" ")
            }, t)))
          })
        },
        Xt = {
          pillBtn: "rockstargames-sites-legacye2e4b892ddcbdb2e09d3c3599a7e6c56",
          selected: "rockstargames-sites-legacyff5c3c023fc12b68c6bf92b560c479b1",
          packCard: "rockstargames-sites-legacyd6ef486c5f60d41c5662b092336c1f52",
          packCardImageBox: "rockstargames-sites-legacyeb4637cb1c81d1def1fd92252f90d675",
          packCompleted: "rockstargames-sites-legacyfcd5bbd0d1e3ebd45cf2cb372468e62c",
          packCardTextBox: "rockstargames-sites-legacya124ee1b0383d30157e84108cf10b83b",
          badge: "rockstargames-sites-legacyd42fb1fd7d553d75675a251df2a255ee",
          icon: "rockstargames-sites-legacycbc69eda17393995ac9d41a8b4b531e8",
          label: "rockstargames-sites-legacyd4649f3812d37e7407503d49dcaaba04"
        },
        Yt = [{
          isComplete: !1
        }, {
          isComplete: !1
        }, {
          isComplete: !1
        }, {
          isComplete: !1
        }],
        Kt = e => {
          let {
            title: t,
            url: a,
            images: s,
            className: i,
            tiers: r,
            onClick: n,
            imageSize: l = 420,
            imageLoaded: d
          } = e;
          const {
            isMobile: g
          } = (0, F.useWindowResize)(), {
            loggedIn: f
          } = (0, R.useRockstarUser)(), {
            selectedCharacterTuple: p
          } = (0, R.useRockstarUserState)(), [_, h] = (0, c.useState)(!1), [k, b] = (0, c.useState)(d), [v, y] = (0, c.useState)(!1), x = (0, o.useIntl)(), w = !!r?.length;
          (0, c.useEffect)((() => {
            if (Array.isArray(p)) {
              const e = p?.[0];
              y((0, F.getGen9Consoles)().includes(e))
            }
          }), [String(p)]), (0, c.useEffect)((() => {
            if (r && r.length > 0) {
              const e = r.some((e => !e.isComplete));
              h(!e)
            } else h(!1)
          }), [r]);
          const N = `${g?s?.mobile:s?.desktop}?im=Resize,height=${l}`;
          return (0, F.usePreloadImg)(N, (() => b(!0))), (0, u.jsx)(m.NavLink, {
            className: [Xt.packCard, i, _ ? Xt.packCompleted : ""].join(" "),
            to: a,
            onClick: n,
            children: (0, u.jsxs)("div", {
              className: [Xt.packCardImageBox, k ? Xt.packCardImageLoaded : ""].join(" "),
              style: {
                "--background-image": `url(${N})`
              },
              children: [_ && (0, u.jsxs)("div", {
                className: Xt.badge,
                children: [(0, u.jsx)("div", {
                  className: Xt.icon
                }), (0, u.jsx)("div", {
                  className: Xt.label,
                  children: x.formatMessage(Ht.pl_card_badge_content_complete)
                })]
              }), (0, u.jsxs)("div", {
                className: Xt.packCardTextBox,
                children: [(0, u.jsx)("h4", {
                  children: t
                }), f && !_ && v && (0, u.jsx)(qt, {
                  tiers: w ? r : Yt
                })]
              })]
            })
          })
        },
        Qt = {
          pillBtn: "rockstargames-sites-legacyc0607ec9e0a3925181496fc555721e0a",
          selected: "rockstargames-sites-legacyff76988869bea7d18917be00339b2434",
          packList: "rockstargames-sites-legacyffeeb1f272f99c5cb4711e4956c65f7f",
          headerVisible: "rockstargames-sites-legacyf6652e03be6ce55bd8f068900093a707",
          packCard: "rockstargames-sites-legacya53b37fe7ab10b353eceea86123258a1",
          packGrid: "rockstargames-sites-legacyb85775dc95fb3881171ee42e49076cbf"
        };
      $t.w$.registerPlugin(Ut.Q);
      const Zt = e => {
          let {
            isHeaderVisible: t,
            packListItems: a,
            packCardClassName: s = Qt.packCard,
            packListClassName: i = Qt.packList,
            packGridClassName: r = Qt.packGrid,
            selectPackCard: n,
            sortFunction: o = Gt
          } = e;
          const l = (0, c.useRef)(null),
            d = [...a].sort(o),
            [m, g] = (0, c.useState)(),
            [f, p] = (0, c.useState)(!1);
          return (0, c.useEffect)((() => {
            if (!0 === f) return;
            clearTimeout(m);
            const e = setTimeout((() => {
              p(!0)
            }), 1e3);
            g(e)
          }), []), (0, Ut.Q)((() => {
            if (!1 !== f && l?.current) {
              const e = l.current.children;
              $t.w$.to(e, {
                opacity: 1,
                y: 0,
                duration: .5,
                stagger: .05,
                ease: $t.ML.easeInOut
              })
            }
          }), {
            dependencies: [f, a],
            scope: l,
            revertOnUpdate: !0
          }), (0, u.jsx)("div", {
            className: [i, t ? Qt.headerVisible : ""].join(" "),
            "data-testid": "pack-list",
            children: (0, u.jsx)("div", {
              ref: l,
              className: r,
              "data-testid": "pack-grid",
              children: d.map(((e, t) => {
                let {
                  id: a,
                  name: i,
                  title: r,
                  url: c,
                  images: o,
                  tiers: l
                } = e;
                return (0, u.jsx)(Kt, {
                  title: r,
                  url: c,
                  className: s,
                  images: o,
                  tiers: l,
                  onClick: () => ((e, t, a, s, i) => {
                    n(e, t, a, s, i)
                  })(i, r, c, a, t)
                }, r)
              }))
            })
          })
        },
        Jt = {
          pillBtn: "rockstargames-sites-legacydb4bf6cb61b2370932e4811235d51afa",
          selected: "rockstargames-sites-legacyb691088f1c9719532c68ca7b97487e5b",
          chipButton: "rockstargames-sites-legacybfe6fefc1068ed81c8b38519a854285f"
        },
        ea = e => {
          let {
            title: t,
            onClick: a,
            selected: s
          } = e;
          return (0, u.jsx)("button", {
            type: "button",
            onClick: a,
            tabIndex: 0,
            "aria-label": t,
            className: [Jt.chipButton, s ? Jt.selected : ""].join(" "),
            children: (0, u.jsx)("div", {
              children: t
            })
          })
        };
      var ta;

      function aa() {
        return aa = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = arguments[t];
            for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
          }
          return e
        }, aa.apply(this, arguments)
      }
      const sa = e => c.createElement("svg", aa({
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        fill: "none"
      }, e), ta || (ta = c.createElement("path", {
        stroke: "#fff",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "m15 18-6-6 6-6"
      })));
      var ia;

      function ra() {
        return ra = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = arguments[t];
            for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
          }
          return e
        }, ra.apply(this, arguments)
      }
      const na = e => c.createElement("svg", ra({
          xmlns: "http://www.w3.org/2000/svg",
          width: 24,
          height: 24,
          fill: "none"
        }, e), ia || (ia = c.createElement("path", {
          stroke: "#fff",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "m9 18 6-6-6-6"
        }))),
        ca = {
          pillBtn: "rockstargames-sites-legacyf5c8cbcdc2408c602e1d5c5ef98091a1",
          selected: "rockstargames-sites-legacyf05732bff172f32532936ffdf636a215",
          navScrollButton: "rockstargames-sites-legacyef8ca38f98b731ff5dfe07937b1bbe34"
        },
        oa = e => {
          let {
            direction: t,
            className: a,
            ...s
          } = e;
          return (0, u.jsxs)("button", {
            type: "button",
            className: [a, ca.navScrollButton].join(" "),
            ...s,
            children: ["left" === t && (0, u.jsx)(sa, {}), "right" === t && (0, u.jsx)(na, {})]
          })
        },
        la = (0, o.defineMessages)({
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
        da = {
          pillBtn: "rockstargames-sites-legacyc07e609b8b71ab690ceb8c0ce0a10e3b",
          selected: "rockstargames-sites-legacyb7277764b073fb1731f97500d63602dd",
          chipsContainer: "rockstargames-sites-legacyb12cbbc254604b2d0a9e23a794cc306b",
          chips: "rockstargames-sites-legacyfde4c31ca848c29a1064a0fee3686f93",
          nextChipNavButton: "rockstargames-sites-legacye753e2314e48a7d59ead26e77cac50aa",
          previousChipNavButton: "rockstargames-sites-legacyce3553d0304e228596f67c2308240648",
          nextNavIcon: "rockstargames-sites-legacyef938f00847374bd89f70d0e5b1f97a8",
          previousNavIcon: "rockstargames-sites-legacyf750c5a49886ae190c14e52aa026a417"
        },
        ma = e => {
          let {
            navItems: t,
            category: a,
            setCategory: s,
            chipsContainerClass: i = da.chipsContainer,
            previousChipButtonClass: r = "",
            nextChipBtnClass: n = ""
          } = e;
          const l = (0, o.useIntl)(),
            {
              track: d
            } = (0, R.useGtmTrack)(),
            {
              pathname: g
            } = (0, m.useLocation)(),
            f = (0, c.useMemo)((() => Math.max(t.findIndex((e => e.name === a)), 0)), [t, g]),
            [p, _] = (0, c.useState)(f),
            [h, k] = (0, c.useState)(!1),
            [b, v] = (0, c.useState)(!1),
            [y, x] = (0, c.useState)(!1),
            w = (0, c.useRef)(null),
            N = (0, c.useRef)(null),
            j = (0, c.useRef)(null),
            S = (0, c.useCallback)(((e, t) => {
              j.current && j.current.slideTo(e), _(e), T(`Career Progress Nav > ${t}`)
            }), [d]),
            T = (e, t) => {
              d({
                event: "component_tab_click",
                event_action: "click",
                event_category: "tab",
                event_label: e,
                text: e.split(">").pop()?.trim() || "",
                link_url: t,
                element_placement: e
              })
            };
          (0, c.useEffect)((() => {
            s(p)
          }), [p]);
          const M = e => {
            e.isEnd ? v(!0) : v(!1), e.isBeginning ? x(!0) : x(!1)
          };
          return (0, c.useEffect)((() => {
            j.current && ((j.current.wrapperEl.clientWidth || 0) > (j.current.el.clientWidth || 0) ? (k(!0), j.current.params.centeredSlides = !0, j.current.params.centeredSlidesBounds = !0) : (k(!1), j.current.params.centeredSlides = !1, j.current.params.centeredSlidesBounds = !1))
          }), [j.current?.wrapperEl.clientWidth, j.current?.el.clientWidth]), (0, u.jsxs)("div", {
            className: i,
            children: [!y && h && (0, u.jsx)("div", {
              ref: N,
              className: (0, C.classList)(da.previousChipNavButton, r),
              children: (0, u.jsx)(oa, {
                direction: "left",
                className: da.previousNavIcon,
                onClick: () => {
                  j.current && (j.current?.slidePrev(), j.current.isBeginning ? x(!0) : x(!1), d({
                    event: "carousel_previous",
                    event_action: "click",
                    event_category: "carousel",
                    element_placement: "career progress page"
                  }))
                },
                "aria-label": l.formatMessage(la.pln_scroll_left)
              })
            }), (0, u.jsx)("div", {
              className: da.chips,
              children: (0, u.jsx)(P.wx, {
                onBeforeInit: e => j.current = e,
                onInit: M,
                className: da.chips,
                direction: "horizontal",
                grabCursor: !0,
                slidesPerView: "auto",
                initialSlide: p,
                onSlideChange: M,
                onResize: M,
                children: t.map(((e, t) => {
                  let {
                    title: a
                  } = e;
                  return (0, u.jsx)(P.Ky, {
                    children: (0, u.jsx)(ea, {
                      title: a,
                      onClick: () => S(t, a),
                      selected: p === t
                    })
                  }, a)
                }))
              })
            }), !b && h && (0, u.jsx)("div", {
              ref: w,
              className: (0, C.classList)(da.nextChipNavButton, n),
              children: (0, u.jsx)(oa, {
                direction: "right",
                className: da.nextNavIcon,
                onClick: () => {
                  j.current && (j.current?.slideNext(), j.current.isEnd ? v(!0) : v(!1), d({
                    event: "carousel_next",
                    event_action: "click",
                    event_category: "carousel",
                    element_placement: "career progress page"
                  }))
                },
                "aria-label": l.formatMessage(la.pln_scroll_right)
              })
            })]
          })
        },
        ga = e => {
          let {
            navItems: t,
            onNavItemClick: a,
            isOpen: s,
            isHeaderVisible: i
          } = e;
          const {
            track: r
          } = (0, R.useGtmTrack)(), [n, o] = (0, c.useState)(0), l = (0, c.useCallback)(((e, s) => {
            d(`Secondary Nav > ${t[n].title} > ${e}`, s), a()
          }), [t, a, n, r]), d = (e, t) => {
            r({
              event: "nav_click",
              event_action: "click",
              event_category: "nav",
              event_label: e,
              text: e.split(">").pop()?.trim() || "",
              link_url: t,
              element_placement: e
            })
          };
          return (0, u.jsx)(Fe.motion.div, {
            className: "rockstargames-sites-legacyaa2ce15f29ac99fe06895664698bb6cc",
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
            children: (0, u.jsxs)("div", {
              className: "rockstargames-sites-legacyf2f85d11f6ee99282db61467ebdbd00f",
              children: [(0, u.jsx)("div", {
                className: "rockstargames-sites-legacyc5288c05172905ec86e3fb56c010d6d3",
                children: (0, u.jsx)(ma, {
                  navItems: t,
                  category: t[n]?.name,
                  setCategory: o,
                  nextChipBtnClass: "rockstargames-sites-legacyc8a45e31d035c8e867358deea365ceac",
                  prevChipBtnClass: "rockstargames-sites-legacye9684050ab2f4aa408ae565c740cf50c"
                })
              }), (0, u.jsx)("div", {
                className: "rockstargames-sites-legacyf1adea94eb32de966a0e622247370f4e",
                children: (0, u.jsx)(Zt, {
                  isHeaderVisible: i,
                  packListItems: t[n]?.subNavItems ?? [],
                  selectPackCard: l
                })
              })]
            })
          })
        },
        ua = "rockstargames-sites-legacyc54c374409e11d1429ce99457cbf7441",
        fa = e => {
          let {
            children: t,
            data: a,
            onPageUpdate: s,
            page: i,
            className: r
          } = e;
          return (0, u.jsx)("a", {
            href: "#",
            className: i === a.page ? `rockstargames-sites-legacyc0eebf4f915ff9f5cc362e22d6d7d976 ${r??""}` : "",
            onClick: e => {
              e.preventDefault(), s(i)
            },
            children: t
          })
        },
        pa = e => {
          let {
            data: t,
            onPageUpdate: a,
            className: s
          } = e;
          if (1 === t.pageCount) return null;
          const i = Array.from(new Array(Math.min(t.pageCount, 8)), ((e, a) => a + Math.min(Math.max(t.pageCount - 8, 1), Math.max(2, t.page - 4))));
          return (0, u.jsxs)("div", {
            className: `rockstargames-sites-legacya626faab2a5a03e3466dda5c79960575 ${s??""}`,
            children: [t.pageCount > 8 ? (0, u.jsxs)(u.Fragment, {
              children: [(0, u.jsx)(fa, {
                data: t,
                onPageUpdate: a,
                page: 1,
                children: "1"
              }), 2 !== i[0] ? (0, u.jsx)("div", {
                className: ua,
                children: "..."
              }) : ""]
            }) : "", i.map((e => (0, u.jsx)(fa, {
              data: t,
              onPageUpdate: a,
              page: e,
              className: s,
              children: e
            }, e))), t.pageCount > 8 ? (0, u.jsxs)(u.Fragment, {
              children: [i.slice(-1)[0] + 1 < t.pageCount ? (0, u.jsx)("div", {
                className: ua,
                children: "..."
              }) : "", (0, u.jsx)(fa, {
                data: t,
                onPageUpdate: a,
                page: t.pageCount,
                children: t.pageCount
              })]
            }) : ""]
          })
        };
      var _a = a(77616);
      const ha = e => {
          let {
            children: t
          } = e;
          const {
            parallaxController: a
          } = (0, _a.oZ)();
          return (0, c.useLayoutEffect)((() => {
            if (!a) return;
            const e = setInterval((() => {
              a.update()
            }), 500);
            return () => clearInterval(e)
          }), [a]), t
        },
        ka = {
          parallaxWrapper: "rockstargames-sites-legacydb1ab316d17367d31cf94cdde25e463a",
          large: "rockstargames-sites-legacyd520d28c6e4e797aea99f61c89ad2bd8",
          medium: "rockstargames-sites-legacyf008365ee42d37e24e606107346b1c83",
          small: "rockstargames-sites-legacycb5937d1a102ac4a66c4e373e6253946"
        },
        ba = e => {
          let {
            scrollAxis: t = "vertical",
            size: a = "",
            style: s = {},
            children: i
          } = e;
          return (0, u.jsx)(_a.qK, {
            scrollAxis: t,
            children: (0, u.jsx)(ha, {
              children: (0, u.jsx)("div", {
                className: (0, C.classList)(ka.parallaxWrapper, ka[a]),
                style: s,
                "data-context": "parallax-wrapper",
                children: i ? i.map(((e, a) => (0, c.cloneElement)(e, {
                  scrollAxis: t,
                  style: {
                    ...e?.props?.style,
                    zIndex: a
                  }
                }))) : (0, u.jsx)("div", {})
              })
            })
          })
        },
        va = e => {
          let {
            layers: t = [],
            displayClass: a = "",
            style: s = {}
          } = e;
          const i = (0, C.useGenerateCdnSource)();
          if (!t || !t[0]?.image) return null;
          const r = t.map((e => ({
            ...e,
            props: {
              style: {
                ...e.style
              }
            },
            style: void 0,
            image: i(e?.image ?? null)
          })));
          return (0, u.jsx)(_a.Sr, {
            className: (0, C.classList)("rockstargames-sites-legacyb8c85703a3c76902e49a61a6afcb81bc", a),
            layers: r,
            style: s
          })
        },
        ya = "rockstargames-sites-legacyc4aa8e5d29b433c400796d0c493a9a4d",
        xa = e => {
          let {
            minOffset: t = 0,
            maxOffset: a = 0,
            scrollAxis: s = "vertical",
            displayClass: i = "",
            style: r = {},
            children: n
          } = e;
          return "horizontal" === s ? (0, u.jsx)(_a.mw, {
            x: [t, a],
            className: (0, C.classList)(ya, i),
            styleOuter: r,
            children: n
          }) : (0, u.jsx)(_a.mw, {
            y: [t, a],
            className: (0, C.classList)(ya, i),
            styleOuter: r,
            children: n
          })
        },
        wa = (e, t) => {
          switch (e) {
            case "pc":
              return "small" === t ? {
                src: a(66452),
                alt: "PC"
              } : {
                src: a(80804),
                alt: "PC"
              };
            case "ps4":
              return "small" === t ? {
                src: a(14120),
                alt: "PS4"
              } : {
                src: a(70564),
                alt: "PS4"
              };
            case "ps5":
              return "small" === t ? {
                src: a(33788),
                alt: "PS5"
              } : {
                src: a(62756),
                alt: "PS5"
              };
            case "xboxone":
              return "small" === t ? {
                src: a(37284),
                alt: "Xbox One"
              } : {
                src: a(12064),
                alt: "Xbox One"
              };
            case "xboxsx":
              return "small" === t ? {
                src: a(19916),
                alt: "Xbox Series X|S"
              } : {
                src: a(7748),
                alt: "Xbox Series X|S"
              };
            default:
              return {
                src: "", alt: ""
              }
          }
        },
        Na = e => a(e < 100 ? 84184 : e > 99 && e < 500 ? 69450 : e > 499 && e < 750 ? 31216 : 85724),
        ja = (0, o.defineMessages)({
          sc_link_activity_feed: {
            id: "sc_link_activity_feed",
            defaultMessage: "Activity Feed"
          },
          sc_link_account: {
            id: "sc_link_account",
            defaultMessage: "Account"
          },
          sc_link_view_my_profile: {
            id: "sc_link_view_my_profile",
            defaultMessage: "View My Profile"
          },
          sc_link_messages: {
            id: "sc_link_messages",
            defaultMessage: "Messages"
          },
          sc_link_game_activation: {
            id: "sc_link_game_activation",
            defaultMessage: "Game Activation"
          },
          sc_link_notifications: {
            id: "sc_link_notifications",
            defaultMessage: "Notifications"
          },
          sc_link_crews: {
            id: "sc_link_crews",
            defaultMessage: "Crews"
          },
          sc_link_friends: {
            id: "sc_link_friends",
            defaultMessage: "Friends"
          },
          sc_link_my_friends: {
            id: "sc_link_my_friends",
            defaultMessage: "My Friends"
          },
          sc_link_import_friends: {
            id: "sc_link_import_friends",
            defaultMessage: "Import Friends"
          },
          sc_link_find_friends: {
            id: "sc_link_find_friends",
            defaultMessage: "Find Friends"
          },
          sc_link_settings: {
            id: "sc_link_settings",
            defaultMessage: "Settings"
          },
          sc_link_help: {
            id: "sc_link_help",
            defaultMessage: "Help"
          },
          sc_link_support: {
            id: "sc_link_support",
            defaultMessage: "Support"
          },
          sc_link_legal: {
            id: "sc_link_legal",
            defaultMessage: "Legal"
          },
          sc_link_privacy_policy: {
            id: "sc_link_privacy_policy",
            defaultMessage: "Privacy Policy"
          },
          sc_link_cookies_policy: {
            id: "sc_link_cookies_policy",
            defaultMessage: "Cookies Policy"
          },
          sc_link_cookies_settings: {
            id: "sc_link_cookies_settings",
            defaultMessage: "Cookies Settings"
          },
          sc_link_do_not_sell_my_information: {
            id: "sc_link_do_not_sell_my_information",
            defaultMessage: "Do Not Sell My Information"
          },
          sc_link_log_out: {
            id: "sc_link_log_out",
            defaultMessage: "Log Out"
          },
          sc_link_sign_in: {
            id: "sc_link_sign_in",
            defaultMessage: "Sign In"
          },
          sc_link_join_social_club: {
            id: "sc_link_join_social_club",
            defaultMessage: "Sign Up"
          },
          profile_selector_switch_character: {
            id: "profile_selector_switch_character",
            defaultMessage: "Switch Character"
          },
          profile_selector_profile_card: {
            id: "profile_selector_profile_card",
            defaultMessage: "Profile Card"
          },
          profile_selector_mugshot: {
            id: "profile_selector_mugshot",
            defaultMessage: "{userName} mugshot"
          },
          profile_selector_rp_icon: {
            id: "profile_selector_rp_icon",
            defaultMessage: "RP Category"
          },
          sc_menu_drag_handle: {
            id: "sc_menu_drag_handle",
            defaultMessage: "Drag Menu Handle"
          },
          sc_menu_open: {
            id: "sc_menu_open",
            defaultMessage: "Open player menu"
          },
          sc_menu_close: {
            id: "sc_menu_close",
            defaultMessage: "Close player menu"
          },
          language_selector_default: {
            id: "language_selector_default",
            defaultMessage: "Select a Language"
          },
          nofications_new: {
            id: "nofications_new",
            defaultMessage: "New notifications"
          }
        }),
        Sa = {
          pillBtn: "rockstargames-sites-legacye4a42eaa9bfb682035e61ac2e2a34515",
          selected: "rockstargames-sites-legacyeb889d8958be54a67b790d7529530986",
          scCharacterCard: "rockstargames-sites-legacydf279e92086c0d3c96905b3a91b369ed",
          scAvatar: "rockstargames-sites-legacyc1890feda663c93b0f767890394cbdcf",
          scCharNames: "rockstargames-sites-legacye79d7f5515617d849d7d13cd4ff048ce",
          scCharacterStats: "rockstargames-sites-legacyc721f3aeef9e5ae6b98adca1253e4709",
          scUserName: "rockstargames-sites-legacyeabff0cc0139013f5a60fea6f48c56f6",
          scRpLevel: "rockstargames-sites-legacyb1f87c58a800ad546200fbf17e029f35",
          scRpIcon: "rockstargames-sites-legacyf1e0bcba6214698c490b8201bbd850b7"
        },
        Ta = (0, o.withIntl)((e => {
          let {
            characterData: t
          } = e;
          const s = (0, o.useIntl)(),
            {
              platform: i,
              platformUsername: r,
              mugshotUrl: n,
              stats: l
            } = t,
            [d, m] = (0, c.useState)(n),
            g = wa(i, "large");
          return (0, u.jsxs)("div", {
            className: Sa.scCharacterCard,
            children: [(0, u.jsx)("div", {
              className: Sa.scAvatar,
              "data-size": "small",
              children: (0, u.jsx)("img", {
                src: d,
                alt: s.formatMessage(ja.profile_selector_mugshot, {
                  userName: r
                }),
                onError: () => {
                  m(a(71084))
                }
              })
            }), (0, u.jsx)("div", {
              className: Sa.scCharacterStats,
              children: (0, u.jsxs)("div", {
                className: Sa.scCharNames,
                children: [(0, u.jsx)("img", {
                  src: g.src,
                  alt: g.alt
                }), (0, u.jsx)("div", {
                  className: Sa.scUserName,
                  "data-size": "small",
                  children: r
                }), (0, u.jsx)("div", {
                  className: Sa.scRp,
                  children: (0, u.jsxs)("div", {
                    className: Sa.scRpLevel,
                    children: [(0, u.jsx)("img", {
                      className: Sa.scRpIcon,
                      src: Na(l.overview.rank.value),
                      alt: s.formatMessage(ja.profile_selector_rp_icon)
                    }), (0, u.jsx)("span", {
                      children: t.stats.overview.rank.value
                    })]
                  })
                })]
              })
            })]
          })
        }), l);
      var Ca = a(92104);
      const Ma = (0, h.makeVarNamespace)("@rockstargames/components/profile-switcher"),
        Ia = Ma("languageSelectorOpenedReactive", !1),
        Ea = e => Ia(e),
        La = Ma("activeSubNavIdReactive", -1),
        za = e => La(e),
        Pa = Ma("subNavExtraHeightReactive", -1),
        Oa = e => Pa(e),
        Aa = Ma("scNavOpenedReactive", !0),
        Da = e => Aa(e),
        Ba = Ma("charListHiddenReactive", !0),
        Va = e => Ba(e),
        Fa = () => {
          const e = (0, h.useReactiveVar)(Ia),
            t = (0, h.useReactiveVar)(La),
            a = (0, h.useReactiveVar)(Pa),
            s = (0, h.useReactiveVar)(Aa),
            i = (0, h.useReactiveVar)(Ba);
          return (0, c.useEffect)((() => {
            i || (e && Ea(!1), s && (Da(!1), za(-1)))
          }), [i]), (0, c.useEffect)((() => {
            !e && i && (s || Da(!0))
          }), [e, i]), (0, c.useMemo)((() => ({
            languageSelectorOpened: e,
            setLanguageSelectorOpened: Ea,
            activeSubNavId: t,
            setActiveSubNavId: za,
            subNavExtraHeight: a,
            setSubNavExtraHeight: Oa,
            scNavOpened: s,
            setScNavOpened: Da,
            charListHidden: i,
            setCharListHidden: Va
          })), [e, t, a, s, i])
        };
      var Ra = a(69760),
        $a = a.n(Ra),
        Ua = a(9860);
      const Ga = {
          event: "account_menu_click",
          element_placement: "Account Menu"
        },
        Ha = e => ({
          text: e.formatMessage(ja.sc_link_help),
          target: "_self",
          ga: {
            ...Ga,
            text: ja.sc_link_help.defaultMessage
          },
          dataTestId: "helpButton",
          children: [{
            text: e.formatMessage(ja.sc_link_support),
            location: {
              domain: pt.U.support,
              path: "/"
            },
            target: "_self",
            ga: {
              ...Ga,
              text: ja.sc_link_support.defaultMessage
            },
            dataTestId: "supportLink"
          }, {
            text: e.formatMessage(ja.sc_link_legal),
            location: {
              domain: pt.U.www,
              path: "/legal"
            },
            target: "_self",
            ga: {
              ...Ga,
              text: ja.sc_link_legal.defaultMessage
            },
            dataTestId: "legalLink"
          }, {
            text: e.formatMessage(ja.sc_link_privacy_policy),
            location: {
              domain: pt.U.www,
              path: "/privacy"
            },
            target: "_self",
            ga: {
              ...Ga,
              text: ja.sc_link_privacy_policy.defaultMessage
            },
            dataTestId: "privacyPolicyLink"
          }, {
            text: e.formatMessage(ja.sc_link_cookies_policy),
            location: {
              domain: pt.U.www,
              path: "/cookies"
            },
            target: "_self",
            ga: {
              ...Ga,
              text: ja.sc_link_cookies_policy.defaultMessage
            },
            dataTestId: "cookiesPolicyLink"
          }, {
            text: e.formatMessage(ja.sc_link_cookies_settings),
            onClickCallback: e => {
              e.preventDefault(), window.OneTrust?.ToggleInfoDisplay()
            },
            target: "_self",
            ga: {
              ...Ga,
              text: ja.sc_link_cookies_settings.defaultMessage
            },
            dataTestId: "cookiesSettingsLink"
          }, {
            text: e.formatMessage(ja.sc_link_do_not_sell_my_information),
            location: {
              domain: pt.U.www,
              path: "/ccpa"
            },
            target: "_self",
            ga: {
              ...Ga,
              text: ja.sc_link_do_not_sell_my_information.defaultMessage
            },
            dataTestId: "doNotSellMyInformationLink"
          }]
        }),
        Wa = e => {
          let {
            text: t,
            target: a,
            href: s,
            location: i,
            ga: r,
            dataTestId: n,
            isSubLink: c,
            hasNotifications: l = !1,
            onClickCallback: d = (() => {}),
            tabIndex: g,
            reloadDocument: f = !1
          } = e;
          const {
            track: p
          } = (0, R.useGtmTrack)(), _ = (0, pt.c)(), h = (0, o.useIntl)();
          let k = s;
          i && (k = i.domain === _.currentSite?.site ? i.path : `https://${_.sites[i.domain]}.rockstargames.com${i.path}`);
          const b = {
            ...r,
            link_url: k
          };
          return (0, u.jsxs)(m.Link, {
            className: c ? "rockstargames-sites-legacyfdaa918acc06706cbe191dedd40974af" : "rockstargames-sites-legacycbc80932118c48d8ec14448d8913d068",
            "data-testid": n || "menuLink",
            title: t,
            to: k,
            target: a,
            rel: "noreferrer",
            reloadDocument: f,
            tabIndex: g,
            onClick: e => {
              p(b), d(e)
            },
            children: [t, l && (0, u.jsx)("div", {
              className: "rockstargames-sites-legacya2d268c9fb03a7271b47de447d663da9",
              children: (0, u.jsx)("span", {
                className: "rockstargames-sites-legacycf5a6b05c52c6c4faf3236055d4670c3",
                children: h.formatMessage(ja.nofications_new)
              })
            })]
          })
        },
        qa = e => {
          let {
            id: t,
            text: a,
            target: s,
            href: i,
            location: r,
            ga: n,
            hasNotifications: o = !1,
            dataTestId: l,
            children: d = [],
            activeSubNavId: m,
            setActiveSubNavId: g,
            setSubNavExtraHeight: f,
            reloadDocument: p = !1,
            onClickCallback: _ = (() => {})
          } = e;
          const {
            windowWidth: h,
            windowHeight: k
          } = (0, F.useWindowResize)(), {
            track: b
          } = (0, R.useGtmTrack)(), {
            navOpen: v
          } = (0, R.useRockstarUserState)(), y = (0, c.useRef)(null), [x, w] = (0, c.useState)(0), [N, j] = (0, c.useState)(0), [S, T] = (0, c.useState)(!0);
          return (0, c.useEffect)((() => {
            m !== t && !1 === S && T(!0), m === t && T(!1)
          }), [m]), (0, c.useEffect)((() => {
            if (!y.current) return;
            w(y?.current?.scrollHeight);
            const e = window.getComputedStyle(y.current);
            if (e) {
              let t = 16 * parseInt(e.getPropertyValue("--scSubNav-opened-margin"), 10);
              Number.isNaN(t) && (t = 0), j(t)
            }
          }), [y, h, k]), d.length > 0 ? (0, u.jsxs)(u.Fragment, {
            children: [(0, u.jsxs)("button", {
              className: "rockstargames-sites-legacyaf10b4154b04475edc11366934576ecd",
              type: "button",
              "data-testid": l || "menuButton",
              title: a,
              tabIndex: v ? 0 : -1,
              "data-children-hidden": S,
              onClick: e => {
                e.stopPropagation(), b(n), m === t ? (g(-1), f(0)) : (g(t), f(x + N + N))
              },
              children: [(0, u.jsx)("span", {
                className: "rockstargames-sites-legacyfd722aa4f6d05656ee6e37f952bd13d0",
                children: a
              }), (0, u.jsx)("span", {
                className: "rockstargames-sites-legacybe674f27adc299eab348b49f71429b71"
              })]
            }, a), (0, u.jsx)("nav", {
              className: "rockstargames-sites-legacyff1911053a3515534dd825554a85909e",
              ref: y,
              "aria-hidden": S,
              style: {
                height: S ? 0 : `${x}px`
              },
              children: d.map((e => (0, c.createElement)(Wa, {
                ...e,
                isSubLink: !0,
                key: e.text,
                tabIndex: S || !v ? -1 : 0
              })))
            })]
          }) : (0, u.jsx)(Wa, {
            text: a,
            target: s,
            href: i,
            location: r,
            ga: n,
            hasNotifications: o,
            dataTestId: l,
            isSubLink: !1,
            onClickCallback: _,
            tabIndex: v ? 0 : -1,
            reloadDocument: p
          })
        },
        Xa = e => {
          let {
            sc: t
          } = e;
          const {
            windowWidth: a,
            windowHeight: s
          } = (0, F.useWindowResize)(), i = (0, o.useIntl)(), {
            languageSelectorOpened: r,
            setLanguageSelectorOpened: n,
            activeSubNavId: l,
            setActiveSubNavId: d,
            subNavExtraHeight: g,
            setSubNavExtraHeight: f
          } = Fa(), {
            setSelectedCharacterTuple: p,
            navOpen: _
          } = (0, R.useRockstarUserState)(), h = (0, F.useLocale)(), k = (0, F.toScLocaleString)(h), [b, v] = (0, c.useState)(""), y = (0, m.useLocation)(), x = `${t.login}?returnUrl=${b}&lang=${k}`, w = `${t.signup}&returnUrl=${b}&lang=${k}`, N = (0, c.useMemo)((() => (0, pt.c)()), []), j = (0, c.useMemo)((() => {
            const e = ((e, t, a) => [{
              text: e.formatMessage(ja.sc_link_sign_in),
              href: t,
              ga: {
                event: "cta_login",
                text: ja.sc_link_sign_in.defaultMessage,
                element_placement: "Account Menu"
              },
              dataTestId: "loginLink"
            }, {
              text: e.formatMessage(ja.sc_link_join_social_club),
              href: a,
              ga: {
                event: "cta_signup",
                text: ja.sc_link_join_social_club.defaultMessage,
                element_placement: "Account Menu"
              },
              dataTestId: "signUpLink"
            }, Ha(e)])(i, x, w);
            return e
          }), [i, x, w, N]), [S, T] = (0, c.useState)(0), C = (0, c.createRef)(), M = () => {
            if (C.current) {
              const {
                current: e
              } = C, t = e?.scrollHeight, a = window.getComputedStyle(e);
              if (a) {
                let e = 16 * parseInt(a.getPropertyValue("--scSubNav-opened-margin"), 10) * 2;
                Number.isNaN(e) && (e = 0), T(t + e)
              } else T(t)
            }
          };
          return (0, c.useEffect)((() => {
            const e = encodeURIComponent(`${document.location.pathname}${document.location.search}`);
            v(e)
          }), [y]), (0, c.useEffect)((() => {
            p(!1)
          }), []), (0, c.useEffect)((() => {
            M(), $a()((() => {
              setTimeout(M, 0)
            }), 300)
          }), [a, s]), (0, u.jsxs)(u.Fragment, {
            children: [(0, u.jsx)("nav", {
              className: "rockstargames-sites-legacyb1552e1f97b08ee4337f78fa4486ffac",
              children: (0, u.jsx)("div", {
                className: "rockstargames-sites-legacyc5bc9bec611f9f0514176014ce835e1e",
                "data-logged-in": "false",
                ref: C,
                style: {
                  "--scNavWrap-max-height": `${g+S}px`
                },
                children: j.map((e => (0, c.createElement)(qa, {
                  ...e,
                  activeSubNavId: l,
                  setActiveSubNavId: d,
                  setSubNavExtraHeight: f,
                  key: e.text
                })))
              })
            }), (0, u.jsx)("div", {
              className: "rockstargames-sites-legacya6c12c94e8656e88958552d645fe51fe",
              style: {
                visibility: _ ? null : "hidden"
              },
              children: (0, u.jsx)(Ua.LanguageSelector, {
                parent: "header",
                theme: "sc-menu",
                languageSelectorOpened: r,
                setLanguageSelectorOpened: e => {
                  d(-1), n(e)
                },
                defaultMessage: "Select a Language"
              })
            })]
          })
        },
        Ya = e => {
          let {
            characterData: t,
            setMobileCardWidth: s,
            tabIndex: i
          } = e;
          const r = (0, o.useIntl)(),
            {
              currentCharId: n,
              setCurrentCharId: l
            } = (0, R.useRockstarUserState)(),
            {
              track: d
            } = (0, R.useGtmTrack)(),
            m = (0, c.createRef)(),
            {
              platform: g,
              platformUsername: f,
              mugshotUrl: p,
              stats: _
            } = t,
            [h, k] = (0, c.useState)(p),
            [b] = (0, c.useState)(t.index),
            v = wa(g, "large"),
            y = n === t.index;
          return (0, c.useEffect)((() => {
            m.current && s && s(m?.current?.offsetWidth)
          }), [m]), (0, u.jsxs)("button", {
            className: "rockstargames-sites-legacyd76e785563451a50438064ac368aae4b",
            type: "button",
            "aria-hidden": y,
            onClick: e => {
              e.stopPropagation(), l(b);
              let t = "";
              "pc" === g ? t = "PC" : "ps4" === g ? t = "PS4" : "ps5" === g ? t = "PS5" : "xboxone" === g ? t = "Xbox One" : "xboxsx" === g && (t = "Xbox Series X|S"), d({
                event: "character_selector_select",
                event_action: "select",
                event_category: "character_selector",
                event_label: t,
                position: b
              })
            },
            ref: m,
            tabIndex: i,
            children: [(0, u.jsx)("div", {
              className: "rockstargames-sites-legacybbdf69fe97471593355fc51ec9a6d13a",
              "data-size": "small",
              children: (0, u.jsx)("img", {
                src: h,
                alt: r.formatMessage(ja.profile_selector_mugshot, {
                  userName: f
                }),
                onError: () => {
                  k(a(71084))
                }
              })
            }), (0, u.jsxs)("div", {
              className: "rockstargames-sites-legacyc0dc303ef48255c09faa4ad2f4e953e7",
              children: [(0, u.jsxs)("div", {
                className: "rockstargames-sites-legacye9fbbbcea66d86dbd58b8548a5f6bea8",
                children: [(0, u.jsx)("img", {
                  src: v.src,
                  alt: v.alt
                }), (0, u.jsx)("div", {
                  className: "rockstargames-sites-legacyb3726d8b480695f64fddc723c6f35205",
                  "data-size": "small",
                  children: f
                })]
              }), (0, u.jsx)("div", {
                className: "rockstargames-sites-legacya5e3df42966a50f3dd88bbcb57536617",
                children: (0, u.jsxs)("div", {
                  className: "rockstargames-sites-legacya6776312350028898320ba59145a39be",
                  children: [(0, u.jsx)("img", {
                    className: "rockstargames-sites-legacyb266652910ad34c0e8e097b212a958f0",
                    src: Na(_.overview.rank.value),
                    alt: r.formatMessage(ja.profile_selector_rp_icon)
                  }), (0, u.jsx)("span", {
                    children: t.stats.overview.rank.value
                  })]
                })
              })]
            })]
          })
        },
        Ka = {
          pillBtn: "rockstargames-sites-legacyd9464c4b4d92881abe5578988bd68af7",
          selected: "rockstargames-sites-legacybc0a950bffee0ee9e28213912da51427",
          scProfileDetails: "rockstargames-sites-legacyb954455f6ff25f2350e1a0960ba97d3e",
          scAvatar: "rockstargames-sites-legacyc15a60de0fc8df4960d84ab96caa8a62",
          scAvatarPlatform: "rockstargames-sites-legacya8f66dccf33827dc81107cae3196cfbe",
          scProfileStats: "rockstargames-sites-legacyc91f8623fa10edbeba8c79c7d6b26a28",
          scNames: "rockstargames-sites-legacyda83fc27513bcac6a8a31eadc89b1c2c",
          scTagsNames: "rockstargames-sites-legacyd7ce73d22672e2e2f59e9193c2632531",
          scUserName: "rockstargames-sites-legacyd5814836ce152affaa22d226819b5b12",
          scCrewName: "rockstargames-sites-legacyb7777817be6d756cc2d1585c1377734c",
          scCrewRankBar: "rockstargames-sites-legacya581d240520cf347e5ff5f6a62a36a97",
          scCrewRankBarItem: "rockstargames-sites-legacybdb056c03ef06b99d69426c87cec67c5",
          scProgress: "rockstargames-sites-legacydc3020fbe81a916a8da4719ef052c278",
          scRpLevel: "rockstargames-sites-legacyb2ea0e0d19182355913368bf7be016b8",
          scRpIcon: "rockstargames-sites-legacyf17a712b43b5234c07dc44f674433cf6",
          scMoney: "rockstargames-sites-legacyf14849be516f588e1bc9e252a109c76f",
          scCash: "rockstargames-sites-legacyb3e35cdc6557f7c3886700245af352dd",
          scBank: "rockstargames-sites-legacyec696aafed90a7a4c69dc53da0a5bb36"
        },
        Qa = e => {
          let {
            character: t,
            platformTag: s
          } = e;
          const {
            data: i
          } = (0, R.useRockstarUser)(), {
            track: r
          } = (0, R.useGtmTrack)(), n = (0, o.useIntl)(), [l, d] = (0, c.useState)([]), [m, g] = (0, c.useState)(null), [f, p] = (0, c.useState)(null), [_, h] = (0, c.useState)(!1), [k, b] = (0, c.useState)(-1), [v, y] = (0, c.useState)([]), [x, w] = (0, c.useState)(0), N = a(71084), [j, S] = (0, c.useState)("0"), [T, C] = (0, c.useState)("0"), M = e => parseInt(e, 10).toLocaleString("en-US", {
            minimumFractionDigits: 0
          }), I = () => {
            L((0, u.jsx)("img", {
              src: N,
              alt: n.formatMessage(ja.profile_selector_mugshot, {
                userName: i.nickname
              })
            }))
          }, [E, L] = (0, c.useState)((0, u.jsx)("img", {
            className: Ka.scAvatarImg,
            src: t.mugshotUrl,
            alt: n.formatMessage(ja.profile_selector_mugshot, {
              userName: i.nickname
            }),
            onError: I
          }));
          (0, c.useEffect)((() => {
            d(i.crews ?? [])
          }), [i]), (0, c.useEffect)((() => {
            L((0, u.jsx)("img", {
              src: t.mugshotUrl,
              alt: i.nickname,
              onError: I
            })), S(M(t.stats.overview.bank.value)), C(M(t.stats.overview.cash.value)), w(parseInt(t.stats.overview.rank.value))
          }), [t, i]), (0, c.useEffect)((() => {
            l && l.forEach((e => {
              !0 === e.isPrimary && (g(e.crewTag), p(e.crewColour), b(e.rankOrder), h(!1), !0 === Object.prototype.hasOwnProperty.call(e, "crewType") && "rockstar" === e.crewType && h(!0))
            }))
          }), [l]), (0, c.useEffect)((() => {
            const e = [];
            if (!_ && k > -1)
              for (let t = 5; t > k; t -= 1) e.push((0, u.jsx)("div", {
                className: Ka.scCrewRankBarItem,
                style: {
                  backgroundColor: null !== f ? f : ""
                }
              }, `crewrankbar-${t}`));
            y(e)
          }), [k, _, f]);
          const z = e => {
            e.stopPropagation(), r({
              event: "character_selector_profile_click",
              event_action: "profile_click",
              event_category: "character_selector",
              event_label: s.alt,
              link_url: void 0
            })
          };
          return (0, u.jsxs)("div", {
            className: Ka.scProfileDetails,
            onClick: z,
            onKeyUp: z,
            role: "button",
            tabIndex: -1,
            children: [(0, u.jsxs)("div", {
              className: Ka.scAvatar,
              children: [E, (0, u.jsx)("div", {
                className: Ka.scAvatarPlatform,
                "data-platform": t.platform,
                children: (0, u.jsx)("img", {
                  src: s.src,
                  alt: s.alt
                })
              })]
            }), (0, u.jsxs)("div", {
              className: Ka.scProfileStats,
              children: [(0, u.jsx)("div", {
                className: Ka.scNames,
                children: (0, u.jsxs)("div", {
                  className: Ka.scTagsNames,
                  children: [(0, u.jsx)("span", {
                    className: Ka.scUserName,
                    children: t.platformUsername
                  }), m && (0, u.jsxs)("span", {
                    className: Ka.scCrewName,
                    "data-arrow-tag": _,
                    children: [m, !_ && (0, u.jsx)("div", {
                      className: Ka.scCrewRankBar,
                      children: v
                    })]
                  })]
                })
              }), (0, u.jsxs)("div", {
                className: Ka.scProgress,
                children: [(0, u.jsxs)("div", {
                  className: Ka.scRpLevel,
                  children: [(0, u.jsx)("img", {
                    className: Ka.scRpIcon,
                    src: Na(x),
                    alt: n.formatMessage(ja.profile_selector_rp_icon)
                  }), (0, u.jsx)("span", {
                    children: t.stats.overview.rank.value
                  })]
                }), (0, u.jsxs)("div", {
                  className: Ka.scMoney,
                  children: [(0, u.jsxs)("span", {
                    className: Ka.scCash,
                    children: ["$", T]
                  }), (0, u.jsxs)("span", {
                    className: Ka.scBank,
                    children: ["$", j]
                  })]
                })]
              })]
            })]
          })
        },
        Za = (e, t) => {
          const [a, s] = (0, c.useState)(0);
          return (0, c.useEffect)((() => {
            if (e.current) {
              const {
                current: a
              } = e, i = a.getBoundingClientRect(), {
                width: r
              } = i;
              let n = r;
              if (!0 === t) {
                const e = window.getComputedStyle(a);
                n += parseInt(e.marginLeft, 10) + parseInt(e.marginRight, 10)
              }
              s(n)
            }
          }), [e]), a
        },
        Ja = e => {
          let {
            dragThreshold: t = 80,
            interactionDelay: a = 1e3,
            mobileGutterWidth: s = 17,
            slideChangeCallback: i = null,
            slideClickCallback: r = null,
            children: n = [],
            disablePager: o = !1,
            disableSwiper: l = !1
          } = e;
          const d = (0, c.createRef)(),
            m = Za(d, !1),
            [g, f] = (0, c.useState)(!1),
            [p, _] = (0, c.useState)(0),
            [h, k] = (0, c.useState)(0),
            [b, v] = (0, c.useState)([s]),
            [y, x] = (0, c.useState)(b[0]),
            [w, N] = (0, c.useState)(252),
            [j, S] = (0, c.useState)(0),
            [T, C] = (0, c.useState)([]),
            [M, I] = (0, c.useState)([]),
            [E, L] = (0, c.useState)(!1),
            z = e => {
              if (!0 === g || !0 === l) return;
              const t = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
              k(t)
            },
            P = e => {
              if (!0 === g || 0 === h || !0 === l) return;
              const a = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX,
                s = a > h ? 1 : -1,
                r = Math.abs(h - a);
              r > t ? (s > 0 ? (() => {
                if (!0 === g) return;
                f(!0);
                const e = p - 1 < 0 ? 0 : p - 1;
                _(e), x(b[e]), i && i(e)
              })() : (() => {
                if (!0 === g) return;
                f(!0);
                let e = p + 1 >= b.length ? b.length - 1 : p + 1;
                e < 0 && (e = 0), _(e), x(b[e]), i && i(e)
              })(), k(0)) : x(b[p] + r * s)
            },
            O = () => {
              !0 !== g && !0 !== l && (f(!0), !0 !== g && (x(b[p]), k(0)))
            };
          return (0, c.useEffect)((() => {
            const e = [];
            n.forEach((() => {
              e.push((0, c.createRef)())
            })), C(e)
          }), [n]), (0, c.useEffect)((() => {
            if (T.length < 1) return;
            N(T[0]?.current?.clientWidth || 0);
            const e = T[0]?.current.firstChild,
              t = Number(window.getComputedStyle(e).marginRight.replace("px", "")),
              a = Number(window.getComputedStyle(e).marginLeft.replace("px", ""));
            S(a + t)
          }), [T]), (0, c.useEffect)((() => {
            !1 !== g && setTimeout((() => {
              f(!1)
            }), a)
          }), [g, a]), (0, c.useEffect)((() => {
            v(n.map(((e, t) => (e => {
              let t = 0;
              const a = n.length;
              return 1 === a ? .5 * m - .5 * w - 2 * s + j : (0 === e && (t = s - e * w), e === a - 1 && a > 1 && (t = a * w * -1 + (m - (s - j))), e > 0 && e < a - 1 && (t = e * w * -1 + (.5 * m - .5 * w + .5 * j)), t)
            })(t)))), 1 === n.length ? L(!0) : L(!1)
          }), [d.current, n, m]), (0, c.useEffect)((() => {
            const e = (t = p, n.map(((e, a) => {
              const s = {
                active: !1
              };
              return a === t && (s.active = !0), s
            })));
            var t;
            I(e)
          }), [n, p]), (0, c.useEffect)((() => {
            !0 !== o && !0 !== l || x(b[0])
          }), [l, o, b]), (0, u.jsxs)(u.Fragment, {
            children: [(0, u.jsx)("div", {
              className: "rockstargames-sites-legacyab70c3f9c67ecd69d19216a5f4de5049",
              ref: d,
              onTouchStart: z,
              onTouchMove: P,
              onTouchEnd: O,
              onMouseDown: z,
              onMouseMove: P,
              onMouseUp: O,
              onClick: () => {
                null !== r && r(p)
              },
              onKeyPress: () => null,
              tabIndex: -1,
              role: "presentation",
              children: (0, u.jsx)("div", {
                className: "rockstargames-sites-legacya93be1084a583cafa7f3f97a8ce8a6be",
                "data-interaction-blocked": g,
                "data-single-item": E,
                style: {
                  transform: E ? null : `translateX(${y}px)`
                },
                children: n.map(((e, t) => (0, u.jsx)("div", {
                  className: "rockstargames-sites-legacyc013369a930e076d1729d086fb51903e",
                  ref: T[t],
                  children: e
                }, `csItem-${e?.props?.characterData?.mugshotUrl}`)))
              })
            }), M.length > 1 && !1 === o && (0, u.jsx)("div", {
              className: "rockstargames-sites-legacyda8cfef07bf44e9a44839e2723ec61bb",
              children: M.map((e => (0, u.jsx)("div", {
                className: "rockstargames-sites-legacyfe87ea0922034610a1f6cb3a4edbe195",
                "data-active": e.active
              }, e.mugshotUrl)))
            })]
          })
        },
        es = {
          pillBtn: "rockstargames-sites-legacyaa374e2f7806799cb073de8a9b2a2e7d",
          selected: "rockstargames-sites-legacyd402a10393179390abdaf3684a02f1ba",
          scProfile: "rockstargames-sites-legacydde9053261079ebfb5d95975239fe87d",
          scCharacterSelector: "rockstargames-sites-legacyc47913b4c686bbbc9a0c8ee6ed7666bf",
          scCharacterSelectBtn: "rockstargames-sites-legacya4f9dafe071f5c9a825bf57348835309",
          open: "rockstargames-sites-legacyb1f5708c9a0e35681c54a58f04661c1c",
          scCharacterList: "rockstargames-sites-legacya1d1104b9df769c9237fa1a06633ffe7",
          scNav: "rockstargames-sites-legacya326b0feea8d083ed2265571010d79d3",
          scLanguageSelector: "rockstargames-sites-legacyd19713d1362bcd54ff539975adbb2ecc",
          scNavHeader: "rockstargames-sites-legacybb74821846f47bbe5fc0896364efd520",
          scNavWrap: "rockstargames-sites-legacya7f1e2d78519eaf099bd43c6ad07abc9"
        },
        ts = (0, F.withTranslations)((e => {
          let {
            sc: t,
            charListHidden: a,
            hideCharacterList: s,
            refCharacterListDesktop: i,
            menuPadding: r,
            longCharList: n,
            setLongCharList: l,
            isMobileMode: d,
            setIsMobileMode: g
          } = e;
          const {
            windowWidth: f,
            windowHeight: p
          } = (0, F.useWindowResize)(), _ = (0, o.useIntl)(), {
            languageSelectorOpened: k,
            setLanguageSelectorOpened: b,
            activeSubNavId: v,
            setActiveSubNavId: y,
            subNavExtraHeight: x,
            setSubNavExtraHeight: w,
            scNavOpened: N,
            setScNavOpened: j
          } = Fa(), [S, T] = (0, c.useState)(""), C = (0, m.useLocation)(), {
            lsSettings: M
          } = (0, F.useRockstarWebLSSettings)(), {
            track: I
          } = (0, R.useGtmTrack)(), E = (0, h.useRockstarTokenPing)(), {
            data: L,
            loggedIn: z
          } = (0, R.useRockstarUser)(), {
            charactersNeeded: P,
            currentCharId: O,
            hasNotifications: A,
            navOpen: D,
            setCurrentCharId: B,
            setHasNotifications: V,
            setSelectedCharacterTuple: $,
            setUserData: U
          } = (0, R.useRockstarUserState)(), [G, H] = (0, c.useState)(null), [W, q] = (0, c.useState)(null), [X, Y] = (0, c.useState)(!1), [K, Q] = (0, c.useState)(!1), [Z, J] = (0, c.useState)(0), ee = (0, c.createRef)(), te = Za(ee, !1), ae = (0, c.createRef)(), [se, ie] = (0, c.useState)(0), [re, ne] = (0, c.useState)([]), [ce, oe] = (0, c.useState)(244), le = (0, c.useRef)(null), de = (0, c.useMemo)((() => (0, pt.c)()), []), me = (0, c.useMemo)((() => ((e, t, a, s, i) => [{
            text: e.formatMessage(ja.sc_link_activity_feed),
            location: {
              domain: pt.U.socialClub,
              path: "/"
            },
            target: "_self",
            ga: {
              ...Ga,
              text: ja.sc_link_activity_feed.defaultMessage
            },
            dataTestId: "activityFeedLink"
          }, {
            text: e.formatMessage(ja.sc_link_account),
            target: "_self",
            dataTestId: "accountButton",
            children: [{
              text: e.formatMessage(ja.sc_link_settings),
              location: {
                domain: pt.U.socialClub,
                path: "/settings"
              },
              target: "_self",
              ga: {
                ...Ga,
                text: ja.sc_link_settings.defaultMessage
              },
              dataTestId: "settingsLink"
            }, {
              text: e.formatMessage(ja.sc_link_view_my_profile),
              href: a.profile_link,
              target: "_self",
              ga: {
                ...Ga,
                text: ja.sc_link_view_my_profile.defaultMessage
              },
              dataTestId: "viewMyProfileLink"
            }, {
              text: e.formatMessage(ja.sc_link_messages),
              location: {
                domain: pt.U.socialClub,
                path: "/message"
              },
              target: "_self",
              ga: {
                ...Ga,
                text: ja.sc_link_messages.defaultMessage
              },
              dataTestId: "messagesLink"
            }, {
              text: e.formatMessage(ja.sc_link_game_activation),
              location: {
                domain: pt.U.socialClub,
                path: "/activate"
              },
              target: "_self",
              ga: {
                ...Ga,
                text: ja.sc_link_game_activation.defaultMessage
              },
              dataTestId: "gameActivationLink"
            }]
          }, {
            text: e.formatMessage(ja.sc_link_notifications),
            location: {
              domain: pt.U.socialClub,
              path: "/notifications"
            },
            target: "_self",
            hasNotifications: s,
            ga: {
              ...Ga,
              text: ja.sc_link_notifications.defaultMessage,
              location: {
                domain: pt.U.socialClub,
                path: "/notifications"
              }
            },
            dataTestId: "notificationsLink"
          }, {
            text: e.formatMessage(ja.sc_link_crews),
            location: {
              domain: pt.U.socialClub,
              path: `/member/${a.nickname}/crews`
            },
            target: "_self",
            ga: {
              ...Ga,
              text: ja.sc_link_crews.defaultMessage
            },
            dataTestId: "crewsLink"
          }, {
            text: e.formatMessage(ja.sc_link_friends),
            target: "_self",
            dataTestId: "friendsButton",
            children: [{
              text: e.formatMessage(ja.sc_link_my_friends),
              location: {
                domain: pt.U.socialClub,
                path: `/member/${a.nickname}/friends`
              },
              target: "_self",
              ga: {
                ...Ga,
                text: ja.sc_link_my_friends.defaultMessage
              },
              dataTestId: "myFriendsLink"
            }, {
              text: e.formatMessage(ja.sc_link_import_friends),
              location: {
                domain: pt.U.socialClub,
                path: "/friends/import"
              },
              target: "_self",
              ga: {
                ...Ga,
                text: ja.sc_link_import_friends.defaultMessage
              },
              dataTestId: "importFriendsLink"
            }, {
              text: e.formatMessage(ja.sc_link_find_friends),
              location: {
                domain: pt.U.socialClub,
                path: "/members"
              },
              target: "_self",
              ga: {
                ...Ga,
                text: ja.sc_link_import_friends.defaultMessage
              },
              dataTestId: "findFriendsLink"
            }]
          }, Ha(e), {
            text: e.formatMessage(ja.sc_link_log_out),
            href: `${t.logout}?returnUrl=${i}`,
            target: "_self",
            reloadDocument: !0,
            ga: {
              ...Ga,
              text: ja.sc_link_log_out.defaultMessage
            },
            dataTestId: "logoutButton"
          }])(_, t, L, A, S, window)), [_, t, L, A, S, de]), ge = () => {
            Q(r + ce * Z < te)
          }, ue = () => {
            if (ae.current) {
              const {
                current: e
              } = ae, t = e?.scrollHeight, a = window.getComputedStyle(e);
              if (a) {
                let e = 16 * parseInt(a.getPropertyValue("--scSubNav-opened-margin"), 10) * 2;
                Number.isNaN(e) && (e = 0), ie(t + e)
              } else ie(t)
            }
          };
          return (0, c.useEffect)((() => {
            let e = encodeURIComponent(`${document.location.pathname}${document.location.search}`);
            de.currentSite?.site === pt.U.socialClub && (e = encodeURIComponent("/")), T(e)
          }), [C]), (0, c.useEffect)((() => {
            ne(L.characters[P] ?? [])
          }), [L, P]), (0, c.useEffect)((() => {
            L && U(L)
          }), [L]), (0, c.useEffect)((() => {
            const e = L?.characters.gtao;
            if (null !== z && !e.length) return void $(!1);
            if (null == O || !e.length) return;
            const t = e?.[O] ?? e?.[0] ?? null;
            $(!!t?.platform && [t.platform, t.characterSlot])
          }), [O, L, z]), (0, c.useEffect)((() => {
            (async () => {
              if (!L?.id) return;
              const {
                count: e
              } = await (0, F.coreScApiFetch)("notification/count", {
                pingBearer: E
              });
              V(e > 0)
            })()
          }), [L]), (0, c.useEffect)((() => {
            ge()
          }), [ce]), (0, c.useEffect)((() => {
            s(!0), g(f < 768), g(f < 768 || p < 649)
          }), [f, p]), (0, c.useEffect)((() => {
            let e = re.length - 1;
            e < 0 && (e = 0), J(e);
            const t = re.length > 0 ? re[O] ?? re[0] : null;
            if (!t) return;
            const a = null !== t ? wa(t.platform, "large") : null;
            q(a), H(t), re.length > 1 ? Y(!0) : Y(!1), l(re.length - 1 > 3)
          }), [O, re]), (0, c.useEffect)((() => {
            ge()
          }), [Z, d, f, re]), (0, c.useEffect)((() => {
            ue(), $a()((() => {
              setTimeout(ue, 0)
            }), 300)
          }), [f, p]), (0, c.useEffect)((() => {
            const e = M?.currentCharId ?? 0;
            e !== O && B(Math.max(0, Math.min(e, re.length - 1)))
          }), [re, M]), (0, u.jsxs)(u.Fragment, {
            children: [null !== G && "gtao" === P && (0, u.jsxs)("div", {
              className: es.scProfile,
              ref: le,
              tabIndex: -1,
              "aria-label": _.formatMessage(ja.profile_selector_profile_card),
              children: [(0, u.jsx)(Qa, {
                s: es,
                character: G,
                platformTag: W
              }), !0 === X && (0, u.jsxs)("div", {
                className: es.scCharacterSelector,
                children: [(0, u.jsx)("button", {
                  className: es.scCharacterSelectBtn,
                  "aria-hidden": !D,
                  type: "button",
                  onClick: e => {
                    e.stopPropagation();
                    const t = !a;
                    s(t), I({
                      event: t ? "character_selector_close" : "character_selector_open",
                      event_action: !0 === t ? "close" : "open",
                      event_category: "character_selector"
                    })
                  },
                  "data-list-closed": a,
                  children: (0, u.jsx)("span", {
                    children: (0, u.jsx)(o.FormattedMessage, {
                      ...ja.profile_selector_switch_character
                    })
                  })
                }), !1 === d && (0, u.jsx)("div", {
                  className: es.scCharacterList,
                  "data-long-list": n,
                  "aria-hidden": a,
                  ref: i,
                  children: re.map((e => (0, u.jsx)(Ya, {
                    tabIndex: a ? -1 : 0,
                    characterData: e,
                    setMobileCardWidth: oe
                  }, e.mugshotUrl)))
                }), !0 === d && (0, u.jsx)("div", {
                  className: es.scCharacterList,
                  "data-single-item": 2 === re.length,
                  "data-swiper-disabled": K,
                  "aria-hidden": a,
                  ref: ee,
                  children: (0, u.jsx)(Ja, {
                    interactionDelay: 350,
                    mobileGutterWidth: 17,
                    dragThreshold: 40,
                    slideChangeCallback: () => {
                      I({
                        event: "carousel_swipe",
                        event_category: "carousel",
                        event_action: "swipe",
                        event_label: "character_selector"
                      })
                    },
                    disablePager: K,
                    disableSwiper: K,
                    children: re.filter(((e, t) => t !== O)).map((e => (0, c.createElement)(Ya, {
                      characterData: e,
                      setMobileCardWidth: oe,
                      key: e.mugshotUrl,
                      tabIndex: a ? -1 : 0
                    })))
                  })
                })]
              })]
            }), (0, u.jsxs)("nav", {
              className: es.scNav,
              "aria-hidden": !D,
              children: [(0, u.jsx)("button", {
                className: es.scNavHeader,
                type: "button",
                "data-opened": N,
                "data-nav-opened": D,
                tabIndex: N ? -1 : 0,
                onClick: e => {
                  e.stopPropagation(), N || j(!0)
                },
                "data-testid": "playerButton",
                children: (0, u.jsx)("span", {
                  children: L.nickname
                })
              }), (0, u.jsx)("div", {
                className: es.scNavWrap,
                "data-opened": N,
                "data-logged-in": "true",
                ref: ae,
                style: {
                  "--scNavWrap-max-height": `${se+x}px`
                },
                children: me.map(((e, t) => (0, c.createElement)(qa, {
                  ...e,
                  id: t,
                  activeSubNavId: v,
                  setActiveSubNavId: y,
                  setSubNavExtraHeight: w,
                  key: e.text
                })))
              })]
            }), (0, u.jsx)("div", {
              className: es.scLanguageSelector,
              style: {
                visibility: D ? null : "hidden"
              },
              children: (0, u.jsx)(Ua.LanguageSelector, {
                parent: "header",
                theme: "sc-menu",
                languageSelectorOpened: k,
                setLanguageSelectorOpened: b
              })
            })]
          })
        })),
        as = {
          scMenu: "rockstargames-sites-legacyebc4c779cfe9d0b7cfd678424e57370c",
          pillBtn: "rockstargames-sites-legacyf333ffbc5b9f9d571b81be0a7235190d",
          selected: "rockstargames-sites-legacye3bdabe09c3d1b98b61f3d0484209912",
          navOpen: "rockstargames-sites-legacyff929155ac480a9cfa5540dfd3e70ae9",
          dragHandle: "rockstargames-sites-legacyba4968108b922dd8165c6e53557f5f2e",
          dragHandleBtn: "rockstargames-sites-legacyd362ba3eeee50f90600a413c05761431",
          scOverlay: "rockstargames-sites-legacyd8e443f5d0d9171449f5f1042f80aa17"
        },
        ss = (0, o.withIntl)((() => {
          const {
            windowHeight: e
          } = (0, F.useWindowResize)(), t = (0, o.useIntl)(), {
            languageSelectorOpened: s,
            setLanguageSelectorOpened: i,
            setActiveSubNavId: r,
            scNavOpened: n,
            setScNavOpened: l,
            charListHidden: d,
            setCharListHidden: m
          } = Fa(), [g, f] = (0, c.useState)(!1), {
            navHidden: p = !1
          } = (0, h.useState)(), {
            loggedIn: _
          } = (0, R.useRockstarUser)(), {
            currentCharId: k,
            navOpen: b,
            setNavOpen: v,
            userData: y
          } = (0, R.useRockstarUserState)(), {
            track: x
          } = (0, R.useGtmTrack)(), [w, N] = (0, c.useState)(!1), j = (0, h.useReactiveVar)(R.scConfig), S = (0, c.useRef)(), [T, C] = (0, c.useState)(0), M = (0, c.createRef)(), [I, E] = (0, c.useState)(!1), [L, z] = (0, c.useState)(0), [P, O] = (0, c.useState)(!1), {
            mutateLSSettings: A,
            lsSettings: D
          } = (0, F.useRockstarWebLSSettings)(), B = (0, c.useCallback)((e => {
            m(e), S.current && !0 === e && (S.current.scrollTop = 0)
          }), [S]);
          return (0, c.useEffect)((() => {
            null !== k && D.currentCharId !== k && A({
              key: "currentCharId",
              value: k
            }), !1 === _ ? A({
              key: "currentCharId",
              value: null
            }) : _ && !y && x({
              event: "account_synced"
            })
          }), [k, _]), (0, c.useEffect)((() => {
            S.current && (!1 === d && !1 === w && (S.current.style.height = `${S.current.scrollHeight}px`), !0 === d && (S.current.style.height = null))
          }), [d, S, w]), (0, c.useEffect)((() => {
            const e = () => {
                v(!1), B(!0)
              },
              t = t => {
                "Escape" === t.code && e()
              };
            return document.addEventListener("click", e), document.addEventListener("keyup", t), () => {
              document.removeEventListener("click", e), document.removeEventListener("keyup", t)
            }
          }), []), (0, c.useEffect)((() => {
            v(!1), B(!0)
          }), [p]), (0, c.useEffect)((() => {
            if (M.current) {
              const {
                current: e
              } = M, t = window.getComputedStyle(e);
              C(parseInt(t.paddingRight, 10) + parseInt(t.paddingLeft, 10))
            }
          }), [M]), (0, c.useEffect)((() => {
            O(window.navigator.userAgent.includes("Mac"))
          }), []), (0, c.useEffect)((() => {
            M.current && f(M?.current?.scrollHeight >= e)
          }), [M, e]), (0, c.useEffect)((() => {
            b || (r(-1), i(!1))
          }), [b]), (0, c.useEffect)((() => {
            s && (d || B(!0), n && (l(!1), r(-1)))
          }), [s]), (0, c.useEffect)((() => {
            n && (s && i(!1), d || B(!0))
          }), [n]), null === _ ? null : (0, u.jsxs)(Ca.c, {
            enabled: !!b,
            removeScrollBar: !1,
            children: [(0, u.jsxs)("div", {
              className: [as.scMenu, b ? as.navOpen : ""].join(" "),
              "data-logged-in": _,
              "data-mac-browser": P,
              "data-scroll-mode": g,
              ref: M,
              "aria-hidden": !b,
              children: [(0, u.jsx)("button", {
                className: as.dragHandleBtn,
                type: "button",
                onTouchStart: e => {
                  const t = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
                  z(t)
                },
                onTouchMove: e => {
                  if (0 === L) return;
                  const t = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX;
                  Math.abs(L - t) > 1 && (z(0), v(!1))
                },
                children: (0, u.jsx)("img", {
                  className: as.dragHandle,
                  src: a(60328),
                  alt: t.formatMessage(ja.sc_menu_drag_handle)
                })
              }), _ ? (0, u.jsx)(ts, {
                sc: j,
                charListHidden: d,
                hideCharacterList: B,
                refCharacterListDesktop: S,
                menuPadding: T,
                longCharList: w,
                setLongCharList: N,
                isMobileMode: I,
                setIsMobileMode: E
              }) : (0, u.jsx)(Xa, {
                sc: j,
                navOpen: b
              })]
            }), (0, u.jsx)("div", {
              className: [as.scOverlay, b ? as.navOpen : ""].join(" "),
              "data-logged-in": _
            })]
          })
        }), l),
        is = a(71084),
        rs = a(29314),
        ns = (0, o.withIntl)((e => {
          let {
            setOtherHeaderDropdowns: t
          } = e;
          const a = (0, o.useIntl)(),
            {
              data: s
            } = (0, R.useRockstarUser)(),
            {
              charactersNeeded: i,
              currentCharId: r,
              navOpen: n,
              setNavOpen: l
            } = (0, R.useRockstarUserState)(),
            {
              track: d
            } = (0, R.useGtmTrack)(),
            [m, g] = (0, c.useState)(null),
            [f, p] = (0, c.useState)(!1),
            [_, h] = (0, c.useState)(null),
            [k, b] = (0, c.useState)(!1),
            [v, y] = (0, c.useState)([]);
          (0, c.useEffect)((() => {
            y(s.characters[i] ?? [])
          }), [s, i]);
          const x = (0, c.useCallback)((e => {
            e.stopPropagation(), l(!n), 1 == !n && t(null), d({
              event: "account_menu_click",
              element_placement: "Account Menu",
              text: n ? "close" : "open"
            })
          }), [n]);
          return (0, c.useEffect)((() => {
            const e = s?.id ?? !1,
              t = e ? (v?.[r]?.mugshotUrl ?? s?.avatar) || is : rs,
              a = wa(v?.[r]?.platform, "small") ?? null;
            h(a), g(t), p(e), b(!!v?.[r]?.mugshotUrl)
          }), [s, v, r, is, rs]), (0, u.jsxs)("button", {
            className: "rockstargames-sites-legacydc519cef2feb621e4715bd3fcdf09791",
            "data-img-set": k,
            "aria-label": a.formatMessage(n ? ja.sc_menu_close : ja.sc_menu_open),
            "aria-expanded": n,
            type: "button",
            onClick: x,
            "data-testid": "avaterMenuButton",
            children: [(0, u.jsx)("img", {
              className: "rockstargames-sites-legacyce75eaa6d65692d36b60d31f3f660ff0",
              src: m || "",
              onError: () => {
                g(is)
              },
              alt: s?.nickname || ""
            }), f && null !== _ && (0, u.jsx)("img", {
              className: "rockstargames-sites-legacyaaf21e74a659089f743bb160bdf95046",
              src: _.src,
              alt: _.alt
            }), f && (0, u.jsx)("div", {
              "data-ui-name": "avatar",
              className: "rockstargames-sites-legacycf6b9e7404c64067bdfef9b79e9eb287",
              "data-platform": v?.[r]?.platform ?? null
            })]
          })
        }), l),
        cs = {
          pillBtn: "rockstargames-sites-legacyb03cc125f63972f13ae84119af852edc",
          selected: "rockstargames-sites-legacyfbcf46d7ef0b32e64b374eee6e3cda3e",
          promoModule: "rockstargames-sites-legacya586d11bf592ca821d65db7660518322",
          promoModuleImage: "rockstargames-sites-legacyccd749d613ceb73aedb825d77d22cd0b",
          gradient: "rockstargames-sites-legacye4f178a3d1e3dfef8b42f73eabd9919e",
          promoModuleContentContainer: "rockstargames-sites-legacyd8348a62030f7e2f3c7a53cf67bef0f1",
          left: "rockstargames-sites-legacye56a5b7d9a696ea8ca340cc9b67998fc",
          right: "rockstargames-sites-legacyc84d09e0c4466d20792d5a9016a00236",
          promoModuleTextContent: "rockstargames-sites-legacybf34746d222495ab8e30cede8de42d71",
          promoModuleWrapper: "rockstargames-sites-legacyf6d46a24b050aad98fc3aae387b75586"
        },
        os = e => {
          let {
            backgroundColor: t,
            brands: a = [],
            description: s = "",
            ctaLabel: i,
            ctaLink: r = "https://rockstargames.com",
            gradient: n = !0,
            image: o,
            imageOrientation: l = "right",
            title: d = "",
            name: m = ""
          } = e;
          const [g, f] = (0, c.useState)(!1), {
            ref: p,
            inView: _
          } = (0, W.useInView)({
            threshold: .6
          }), {
            track: h
          } = (0, R.useGtmTrack)(), k = {
            "--promo-background": t ?? "var(--black-200)",
            "--promo-image": `url(${(0,C.useGetCdnSource)(o)??"var(--promo-background)"})`,
            "--promo-order": "left" === l ? "row" : "row-reverse"
          };
          return (0, c.useEffect)((() => {
            _ && !g && (h({
              event: "page_section_impression",
              event_action: "impression",
              event_category: "page_section",
              event_label: "promo module",
              element_placement: m
            }), f(!0))
          }), [_]), (0, u.jsx)(u.Fragment, {
            children: (0, u.jsx)("div", {
              className: cs.promoModuleWrapper,
              children: (0, u.jsxs)(Fe.motion.div, {
                className: cs.promoModule,
                style: {
                  ...k
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
                ref: p,
                children: [(0, u.jsx)("div", {
                  className: [cs.promoModuleImage, n ? cs.gradient : "", "left" === l ? cs.left : cs.right].join(" ")
                }), (0, u.jsxs)("div", {
                  className: cs.promoModuleContentContainer,
                  children: [(0, u.jsx)(j, {
                    brands: a,
                    className: cs.promoModuleBrands
                  }), (0, u.jsxs)("div", {
                    className: cs.promoModuleTextContent,
                    children: [d && (0, u.jsx)("h3", {
                      children: d
                    }), s && (0, u.jsx)("p", {
                      children: s
                    })]
                  }), i && (0, u.jsx)(L, {
                    to: r,
                    text: i,
                    onClick: () => {
                      h({
                        event: "cta_other",
                        event_category: "cta",
                        event_action: "other",
                        event_label: i,
                        element_placement: "promo module",
                        link_url: r,
                        text: i
                      })
                    }
                  })]
                })]
              })
            })
          })
        },
        ls = {
          rating: "rockstargames-sites-legacya1271bbed316bf567eb67e78d2143808",
          withDescriptors: "rockstargames-sites-legacycba248edc2520d3f1ad195a8495dc1f8",
          withOutDescriptors: "rockstargames-sites-legacyff919f7a60b854473b61075a671deb6a",
          text: "rockstargames-sites-legacyd47cd2b7c7415cb44cddef00b1c9b35f"
        },
        ds = (0, o.defineMessages)({
          components_ratings_link_alt: {
            id: "components_ratings_link_alt",
            defaultMessage: "Rating: {rating}. Click here learn more about rating systems"
          }
        });
      var ms = a(13316);
      const gs = void 0 !== ms.GameData ? ms.GameData : GameDataDefault;
      (0, F.importAll)(a(52884));
      const us = st((0, o.withIntl)((e => {
          let {
            descriptors: t = null,
            footer: s = null,
            href: i,
            img: r = null,
            titleSlug: n = null,
            style: l = {},
            className: d
          } = e;
          const [m, g] = (0, c.useState)(!1), {
            inView: p
          } = (0, W.useInView)({
            threshold: .6
          }), [_, k] = (0, c.useState)({
            ratingDescriptors: t,
            ratingFooter: s,
            ratingImg: r,
            ratingUrl: i
          }), {
            track: b
          } = (0, R.useGtmTrack)(), v = (0, o.useIntl)(), {
            data: y
          } = (0, h.useQuery)(gs, {
            variables: {
              titleSlug: n
            },
            skip: !n
          });
          if ((0, c.useEffect)((() => {
              y && k(y?.game)
            }), [y]), (0, c.useEffect)((() => {
              p && !m && _.img_rating && (b({
                event: "page_section_impression",
                event_action: "impression",
                event_category: "page_section",
                event_label: "rating",
                element_placement: "rating"
              }), g(!0))
            }), [p]), !_.ratingImg) return null;
          const x = !!_.ratingDescriptors;
          return (0, u.jsxs)("div", {
            className: [ls.rating, x ? ls.withDescriptors : ls.withOutDescriptors, d || ""].join(" "),
            style: (0, F.safeStyles)(l),
            children: [(0, u.jsx)(f, {
              to: _.ratingUrl,
              target: "_blank",
              children: (0, u.jsx)("img", {
                alt: v.formatMessage(ds.components_ratings_link_alt, {
                  rating: (w = _.ratingImg, w.replace(/_/g, " ").split(".")[0].toUpperCase())
                }),
                src: a(7e4)(`./${_.ratingImg}`)
              })
            }), x && (0, u.jsxs)("div", {
              className: ls.text,
              children: [(0, u.jsx)("p", {
                className: ls.descriptors,
                dangerouslySetInnerHTML: {
                  __html: _?.ratingDescriptors?.split(/<br\s?\/?>/).join(", ") || ""
                }
              }), _.ratingFooter && (0, u.jsx)("hr", {}), _.ratingFooter && (0, u.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: _.ratingFooter.replace(/ \//g, ", ")
                }
              })]
            })]
          });
          var w
        }), l)),
        fs = {
          responsiveFlexBox: "rockstargames-sites-legacycef355ba53827b9ec44655c80b247b2e",
          responsiveFlexItem: "rockstargames-sites-legacya8f5d10f689c3d40c8378e3ae8a07517",
          responsiveImage: "rockstargames-sites-legacybee8268780b292e5bc0da0b497e2c28f"
        },
        ps = e => {
          let {
            children: t,
            className: a,
            style: s
          } = e;
          return (0, u.jsx)("div", {
            className: [fs.responsiveFlexBox, void 0 !== a ? a : ""].join(" "),
            style: s,
            children: t
          })
        },
        _s = {
          responsiveFlexItem: "rockstargames-sites-legacyae579f6183cf73c897e68c8aae5c9d9d"
        },
        hs = e => {
          let {
            children: t,
            className: a,
            style: s
          } = e;
          return (0, u.jsx)("div", {
            className: [_s.responsiveFlexItem, void 0 !== a ? a : ""].join(" "),
            style: s,
            children: t
          })
        },
        ks = {
          responsiveGridBox: "rockstargames-sites-legacya28c0b7a44e1a2d5fb257161ce36a24f",
          responsiveGridItem: "rockstargames-sites-legacybeddf36313a28976090b5a8b04d2594a"
        },
        bs = e => {
          let {
            children: t,
            cols: a,
            className: s,
            rows: i,
            style: r
          } = e;
          const n = r ? {
            ...r
          } : {};
          return void 0 !== a && (n.gridTemplateColumns = `repeat(${a}, 1fr)`), void 0 !== i && (n.gridTemplateRows = `repeat(${i}, 1fr)`), (0, u.jsx)("div", {
            className: [ks.responsiveGridBox, void 0 !== s ? s : ""].join(" "),
            style: n,
            children: t
          })
        },
        vs = {
          responsiveGridBox: "rockstargames-sites-legacya39e7c7140ada0ab28537c8c901e816f",
          responsiveGridItem: "rockstargames-sites-legacybe7a0966e2f0457c1172ac9da99020c6"
        },
        ys = e => {
          let {
            children: t,
            className: a,
            style: s
          } = e;
          return (0, u.jsx)("div", {
            className: [vs.responsiveGridItem, void 0 !== a ? a : ""].join(" "),
            style: s,
            children: t
          })
        },
        xs = {
          responsiveImage: "rockstargames-sites-legacye31b43dce2e720669fb90bf539d22197"
        },
        ws = e => {
          let {
            src: t,
            className: a = "",
            animate: s,
            ariaLabel: i,
            style: r = {}
          } = e;
          const [n, c] = (0, F.usePreloadImg)(t);
          return n ? (r.backgroundImage = `url(${t})`, (0, u.jsx)("div", {
            role: "img",
            "aria-label": i ?? "R* Games",
            className: [xs.responsiveImage, s ? xs.animateBox : "", a].join(" "),
            style: {
              ...r,
              "--aspect-ratio": c.width / c.height
            }
          })) : null
        },
        Ns = {
          responsiveSection: "rockstargames-sites-legacyfb7094e43a166c19080ccfe92ed7420d",
          maxWidth: "rockstargames-sites-legacybdc35dbaa55c59ddd2831fd3ac05c5a7"
        },
        js = e => {
          let {
            children: t,
            className: a,
            style: s,
            maxWidth: i
          } = e;
          return (0, u.jsx)("section", {
            className: [Ns.responsiveSection, void 0 !== a ? a : ""].join(" "),
            style: s,
            children: i ? (0, u.jsx)("div", {
              className: Ns.maxWidth,
              children: t
            }) : t
          })
        },
        Ss = () => (0, u.jsx)(f, {
          className: "rockstargames-sites-legacyba0c20f78999975dfb8d9cff0de44b34",
          alt: "Rockstar Games Home",
          to: "/"
        }),
        Ts = e => {
          let {
            thresholds: t,
            onThresholdReached: a,
            children: s
          } = e;
          const [i, r] = (0, c.useState)([]), [n, o] = (0, c.useState)(new Set);
          return (0, c.useEffect)((() => {
            const e = Array.from(new Set(t));
            e.sort(((e, t) => e - t)), r(e)
          }), [t]), (0, u.jsxs)("div", {
            style: {
              position: "relative"
            },
            children: [i.map((e => (0, u.jsx)(W.InView, {
              threshold: e,
              onChange: t => ((e, t) => {
                e && !n.has(t) && o((e => {
                  const s = new Set(e);
                  return i.forEach((e => {
                    e <= t && !s.has(e) && (s.add(e), a(e))
                  })), s
                }))
              })(t, e),
              triggerOnce: !0,
              children: t => {
                let {
                  ref: a
                } = t;
                return (0, u.jsx)("div", {
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
        Cs = () => {
          const {
            pathname: e
          } = (0, m.useLocation)();
          return (0, c.useEffect)((() => {
            const e = document.scrollingElement || document.documentElement;
            setTimeout((() => {
              e.scrollTop = 0
            }), 0)
          }), [e]), null
        },
        Ms = (0, c.forwardRef)(((e, t) => {
          const {
            threshold: a,
            callback: s,
            children: i,
            requireUser: r
          } = e, {
            track: n
          } = (0, R.useGtmTrack)(r), [o, l] = (0, c.useState)(t?.current);
          return (0, c.useEffect)((() => {
            t?.current && l(t.current)
          }), [t]), ((e, t, a) => {
            const [s, i] = (0, c.useState)({
              scrollDepths: e,
              scrollY: 0
            }), {
              scrollDepths: r,
              scrollY: n
            } = s;
            (0, c.useEffect)((() => {
              "undefined" != typeof window && 0 !== window.pageYOffset && i((e => ({
                ...e,
                scrollY: window.pageYOffset
              })))
            }), []), (0, c.useEffect)((() => {
              i({
                scrollDepths: e,
                scrollY: 0
              })
            }), [window.location.pathname]);
            const o = (0, c.useCallback)((() => {
              const e = document.documentElement,
                n = document.body,
                c = a?.scrollTop || e.scrollTop || n.scrollTop,
                l = a?.scrollHeight || e.scrollHeight || n.scrollHeight,
                {
                  clientHeight: d
                } = e,
                m = c / (l - d) * 100;
              if (r) {
                const e = Math.min(...r, l);
                if (m >= e) {
                  const s = r.filter((t => t !== e));
                  0 === s.length && (a ?? window).removeEventListener("scroll", o), t && t({
                    scrollY: e,
                    scrollPercent: m,
                    remainingDepths: s
                  }), i({
                    scrollY: e,
                    scrollDepths: s
                  })
                }
              } else i({
                ...s,
                scrollY: m
              })
            }), [r, a, t]);
            (0, c.useEffect)((() => {
              if ("undefined" == typeof window) return;
              const e = a ?? window;
              return e.addEventListener("scroll", o), () => e.removeEventListener("scroll", o)
            }), [o])
          })(a, (e => {
            let {
              scrollY: t
            } = e;
            n({
              event: "page_scroll",
              event_category: "page_scroll",
              event_action: t,
              scroll_depth: t
            }), "function" == typeof s && s(t)
          }), o), i
        }));
      Ms.displayName = "ScrollTracker";
      const Is = Ms,
        Es = (0, F.withTranslations)((e => {
          let {
            t
          } = e;
          const [a] = (0, c.useState)(""), s = (0, m.useNavigate)(), i = (0, h.useMutateState)();
          return (0, u.jsxs)("form", {
            action: "#",
            className: "rockstargames-sites-legacyb82052ce07e004075e77261c373bfc50",
            onSubmit: e => {
              e.preventDefault(), i({
                navOpen: !1
              }), document.activeElement?.blur(), s(`/search?q=${e.target.q.value}`)
            },
            role: "search",
            children: [(0, u.jsx)("button", {
              type: "submit",
              role: "button",
              title: "Submit"
            }), (0, u.jsx)("input", {
              autoComplete: "off",
              defaultValue: a,
              enterKeyHint: "search",
              name: "q",
              placeholder: t("Search Rockstar Games")
            })]
          })
        })),
        Ls = {
          skeleton: "rockstargames-sites-legacyf963a1ae95f7f5ac2c5192c3f357b6dc",
          pulse: "rockstargames-sites-legacye00ed88d692bbfc1a301dcfc61a077a9",
          gen9Hero: "rockstargames-sites-legacydb0b80177710d337d93bddb97b8a7dea"
        },
        zs = e => {
          let {
            skeleton: t
          } = e;
          return t ? (0, u.jsx)("div", {
            className: [Ls.skeleton, Ls[t]].join(" ")
          }) : null
        },
        Ps = (0, o.defineMessages)({
          components_track_list_title: {
            id: "components_track_list_title",
            defaultMessage: "Tracklist"
          }
        }),
        Os = {
          bodySmall: "rockstargames-sites-legacyc048aacaedc7fb642f38c7f163c193e3"
        },
        As = e => {
          let {
            track: t,
            artist: a
          } = e;
          return (0, u.jsxs)("div", {
            className: Os.track,
            children: [(0, u.jsx)("p", {
              children: t
            }), (0, u.jsx)("p", {
              className: Os.bodySmall,
              children: a
            })]
          })
        },
        Ds = (0, o.withIntl)((e => {
          let {
            content: t = []
          } = e;
          return (0, u.jsxs)("div", {
            className: "rockstargames-sites-legacye6c19f2cdd68a4352e248a8324383aa2",
            children: [(0, u.jsx)("h4", {
              className: "rockstargames-sites-legacycd3895fbae93ba04f1401487f6e6eddf",
              children: (0, u.jsx)(o.FormattedMessage, {
                ...Ps.components_track_list_title
              })
            }), (0, u.jsx)("div", {
              className: "rockstargames-sites-legacyef0cde8b15ded961605237d0e8328a9b",
              children: (0, u.jsx)("div", {
                className: "rockstargames-sites-legacybdd54186db17d27b3daebc4b9d58e09a",
                children: t?.map((e => (0, u.jsx)(As, {
                  track: e.track,
                  artist: e.artist
                }, e.key)))
              })
            })]
          })
        }), l),
        Bs = "rockstargames-sites-legacyeca98eb0b5b84a0c9a2e6d952545a2d5",
        Vs = "rockstargames-sites-legacyd3d0b4ecd3bddba96c73f49fcca34ed8",
        Fs = {
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
        Rs = e => {
          let {
            title: t = "thumbnail gallery",
            thumbsPerView: a = 3,
            loop: s = !1,
            navigation: i = !1,
            slideChildren: r = [],
            variants: n = {
              parent: void 0,
              main: void 0,
              thumbs: void 0
            },
            transition: o = {
              parent: void 0,
              main: void 0,
              thumbs: void 0
            }
          } = e;
          const {
            track: l
          } = (0, R.useGtmTrack)(), [d, m] = (0, c.useState)([Je.O4, Je.Hj, Je.eM]), [g, f] = (0, c.useState)(null), [p, _] = (0, c.useState)(null);
          return (0, c.useEffect)((() => {
            const e = [Je.O4, Je.Hj, Je.eM];
            i && e.push(Je._2), m(e)
          }), [i]), (0, c.useEffect)((() => {
            if (!r) return;
            const e = r.map(((e, t) => (0, u.jsx)(P.Ky, {
              children: e
            }, Symbol(t).toString())));
            _(e)
          }), [r]), p ? (0, u.jsxs)(Fe.motion.div, {
            className: "rockstargames-sites-legacyd4f245838b94234f21463a08a8112910",
            variants: n.parent,
            transition: o.parent,
            initial: "initial",
            animate: "animate",
            children: [(0, u.jsx)(Fe.motion.div, {
              className: Bs,
              variants: n.main,
              transition: o.main,
              initial: "initial",
              animate: "animate",
              children: (0, u.jsx)(P.wx, {
                loop: s,
                navigation: i,
                pagination: {
                  clickable: !0
                },
                thumbs: {
                  swiper: g
                },
                modules: d,
                breakpoints: Fs,
                className: Bs,
                onSlideNextTransitionEnd: () => {
                  l({
                    event_action: "next",
                    event_category: "carousel",
                    event: "carousel_next",
                    event_label: t?.toLowerCase() ?? "",
                    element_placement: t?.toLowerCase() ?? ""
                  })
                },
                onSlidePrevTransitionEnd: () => {
                  l({
                    event_action: "previous",
                    event_category: "carousel",
                    event: "carousel_previous",
                    event_label: t?.toLowerCase() ?? "",
                    element_placement: t?.toLowerCase() ?? ""
                  })
                },
                onSlideChangeTransitionEnd: () => {
                  l({
                    event_action: "swipe",
                    event_category: "carousel",
                    event: "carousel_swipe",
                    event_label: t?.toLowerCase() ?? "",
                    element_placement: t?.toLowerCase() ?? ""
                  })
                },
                children: p
              })
            }), (0, u.jsx)(Fe.motion.div, {
              className: Vs,
              variants: n.thumbs,
              transition: o.thumbs,
              initial: "initial",
              animate: "animate",
              children: (0, u.jsx)(P.wx, {
                threshold: 50,
                onSwiper: f,
                loop: s,
                breakpoints: Fs,
                slidesPerView: a,
                freeMode: !0,
                watchSlidesProgress: !0,
                modules: d,
                className: Vs,
                children: p
              })
            })]
          }) : null
        };
      var $s = a(504);
      const Us = e => {
          let {
            id: t = null,
            ids: a = null,
            setTitleDataPath: s = null,
            sync: i = !1
          } = e;
          const r = a ?? [t],
            {
              data: n
            } = (0, h.useQuery)($s.TinaModulesInfo, {
              variables: {
                ids: r,
                sync: i
              },
              setTitleDataPath: s,
              skip: !r.length
            });
          return n?.tinaModulesInfo ?? null
        },
        Gs = st((e => {
          let {
            components: t = {},
            id: a = null,
            ids: s = null,
            skeleton: i
          } = e;
          const r = Us({
            id: a,
            ids: s
          });
          if (!r) return (0, u.jsx)(zs, {
            skeleton: i
          });
          const n = r?.[0]?.tina;
          return n ? (0, u.jsx)(u.Fragment, {
            children: r.map(((e, a) => {
              let {
                tina: s
              } = e;
              return (0, u.jsx)(C.TinaParser, {
                components: t,
                tina: s,
                componentProps: {
                  tinaModulesInfo: r
                }
              }, a)
            }))
          }) : null
        })),
        Hs = e => {
          let {
            children: t,
            style: a,
            theme: s
          } = e;
          const [i, r] = (0, c.useState)(s);
          return (0, c.useEffect)((() => {
            s && r(s)
          }), [s]), (0, u.jsx)("div", {
            className: "rockstargames-sites-legacya3cc68ab0d512c3d8835ee9abb7a51c4",
            style: a,
            "data-theme": i,
            children: t
          })
        };
      var Ws = a(19168);
      const qs = {
          pillBtn: "rockstargames-sites-legacyae56f3a5bf16f1160a0cbc040c7611fa",
          selected: "rockstargames-sites-legacyd7e34a082f54f22035320df51e8b4ed9",
          userVote: "rockstargames-sites-legacyfd538df1ac730062880ff9ca1292dcc4",
          info: "rockstargames-sites-legacydd49c22b2bd842d7e8c11ac45b3a536b",
          voteContent: "rockstargames-sites-legacyeb3c4c0d7629a1182cd138d3d2e6e081",
          loggedOutButtons: "rockstargames-sites-legacyd00b4195df0f175083f6aa2a7d847d72",
          voteButtons: "rockstargames-sites-legacyfdd10a481e3da0f8e9511b6a577052e0",
          downVote: "rockstargames-sites-legacyabdbb2656b0080d66eb4d39b7e1eb38d",
          upVote: "rockstargames-sites-legacyea25ed07e937e2efdce0b99d076fbbe1",
          voteButtonActive: "rockstargames-sites-legacyc31731d09d8118c6a82fe6edb193dc50"
        },
        Xs = e => {
          let {
            description: t,
            foreign_id: a = document.location.pathname,
            foreign_type: s = "url",
            title: i
          } = e;
          const {
            track: r
          } = (0, R.useGtmTrack)(), {
            loggedIn: n
          } = (0, R.useRockstarUser)(), {
            refetch: o
          } = (0, h.useQuery)(Ws.UserGetVote, {
            skip: !0
          }), [l] = (0, h.useMutation)(Ws.UserCastVote), [d, m] = (0, c.useState)(null), g = (0, c.useCallback)((async e => {
            r({
              event_action: d ? "like" : "dislike",
              event_category: "cta",
              event: "cta_" + (e ? "like" : "dislike"),
              event_label: a
            });
            const t = {
                foreign_id: a,
                foreign_type: s,
                vote: e
              },
              i = await l({
                variables: t
              });
            m(i?.data?.userCastVote?.vote ?? null)
          }), [a, s]);
          return (0, c.useEffect)((() => {
            (async () => {
              if (!n || !a || !s) return;
              const e = await o({
                foreign_id: a,
                foreign_type: s
              });
              m(e?.data?.userGetVote?.vote ?? null)
            })()
          }), [a, s, n]), (0, u.jsx)("div", {
            className: qs.userVote,
            children: (0, u.jsxs)("div", {
              className: qs.voteContent,
              children: [(0, u.jsxs)("div", {
                className: qs.info,
                children: [(0, u.jsx)("h3", {
                  children: i
                }), (0, u.jsx)("p", {
                  children: t
                })]
              }), (0, u.jsxs)("div", {
                className: [qs.voteButtons, n ? "" : qs.loggedOutButtons].join(" "),
                children: [(0, u.jsx)("button", {
                  onClick: () => g(!0),
                  className: [qs.upVote, d ? qs.voteButtonActive : ""].join(" "),
                  type: "button",
                  "aria-label": "Vote up"
                }), (0, u.jsx)("button", {
                  className: [qs.downVote, !1 === d ? qs.voteButtonActive : ""].join(" "),
                  onClick: () => g(!1),
                  type: "button",
                  "aria-label": "Vote down"
                })]
              })]
            })
          })
        },
        Ys = {
          carousel: "rockstargames-sites-legacyd8e71d378f6d4a968e8ac7d621e5f32a",
          text: "rockstargames-sites-legacya3f73d86b98d36a296bf8f621f1c340f",
          info: "rockstargames-sites-legacyf46d7fc75c302b1d3f4db01d8572bea8",
          active: "rockstargames-sites-legacyd26d1267cc02f841fee8a874d679aebd",
          title: "rockstargames-sites-legacya879dfc151f7cf8da6bf5642b51436bb",
          gameTitle: "rockstargames-sites-legacyb42d96124219141b4dbb454131b8c37b",
          videoTitle: "rockstargames-sites-legacyc5ff8983fae65d6a3d7c741360bd3606",
          cta: "rockstargames-sites-legacye25e320fda75ce4076c9fe68b540a2fa",
          track: "rockstargames-sites-legacydd0d39c46df512d3eff8ba48e469af0a",
          disableClick: "rockstargames-sites-legacyb169e1b67f64de28605dd5056a740584",
          items: "rockstargames-sites-legacydddc42d4babcaec339a7c1bd04420e6e",
          dragging: "rockstargames-sites-legacya7313e3ff4e99b5313f8698890d0dd8c",
          dots: "rockstargames-sites-legacye1d7433489996eb9fa890d452ebcb042"
        },
        Ks = (0, F.withLocale)((e => {
          let {
            locale: t,
            t: a,
            videos: s
          } = e;
          const {
            track: i
          } = (0, R.useGtmTrack)(), {
            setBodyIsLocked: r
          } = (0, F.useBodyScrollable)("VideoCarousel"), [n, o] = (0, c.useState)(0), [l, d] = (0, c.useState)(0), m = (0, c.useRef)(null), g = (0, c.useRef)(null);
          return (0, c.useEffect)((() => {
            if (!m.current || !g.current) return;
            const e = new(_())(m.current);
            e.get("press").set({
              time: 0
            }), e.get("tap").set({
              time: 150
            });
            const t = () => "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0,
              a = () => {
                o(n - 1 < 0 ? 0 : n - 1), d(0)
              },
              i = () => {
                const e = n + 1 >= s.length - 1 ? s.length - 1 : n + 1;
                o(e), d(0)
              },
              c = e => {
                d(e.isFinal ? 0 : e.deltaX), "panleft" !== e.additionalEvent && "panright" !== e.additionalEvent || !g.current?.classList.contains(Ys.dragging) || t() && r(!0)
              },
              l = () => {
                t() && r(!1), d(0)
              },
              u = e => {
                "press" === e.type && m.current?.classList.add(`${Ys.disableClick}`), "tap" === e.type && (m.current?.classList.remove(`${Ys.disableClick}`), document.elementFromPoint(e.center.x, e.center.y).click())
              },
              f = () => {
                t() && r(!1), m.current && m.current.classList.remove(`${Ys.disableClick}`)
              },
              p = () => {
                t() && r(!1)
              };
            return g.current.addEventListener("transitionend", p), e.on("swiperight", a), e.on("swipeleft", i), e.on("pan", c), e.on("panend", l), e.on("press tap", u), e.on("pressup", f), () => {
              e.off("swiperight", a), e.off("swipeleft", i), e.off("pan", c), e.off("panend", l), e.off("press tap", u), e.off("pressup", f), g.current && g.current.removeEventListener("transitionend", p), d(0)
            }
          }), [m.current, n]), (0, u.jsxs)("section", {
            className: Ys.carousel,
            children: [(0, u.jsx)("div", {
              className: Ys.track,
              ref: m,
              children: (0, u.jsx)("div", {
                className: `${Ys.items} ${0!==l?Ys.dragging:""}`,
                ref: g,
                style: {
                  transform: `translateX(calc(-${100*n}% + ${l}px))`
                },
                children: s.map(((e, t) => (0, u.jsx)(f, {
                  "data-gtm-category": "Carousel",
                  "data-gtm-action": "Click-through screencap",
                  "data-gtm-label": `/videos/${e.id}`,
                  to: `/videos/${e.id}`,
                  className: n === t ? Ys.active : "",
                  role: "link",
                  title: e.title,
                  tabIndex: n === t ? 0 : -1,
                  children: (0, u.jsx)(ci, {
                    video: e,
                    size: 1280
                  })
                }, e.id)))
              })
            }), (0, u.jsxs)("footer", {
              children: [(0, u.jsx)("div", {
                className: Ys.text,
                children: s.map(((e, s) => {
                  return (0, u.jsx)(f, {
                    "data-gtm-category": "Carousel",
                    "data-gtm-action": "Click-through footer",
                    "data-gtm-label": `/videos/${e.id}`,
                    to: `/videos/${e.id}`,
                    role: "link",
                    title: e.title,
                    tabIndex: n === s ? 0 : -1,
                    children: (0, u.jsxs)("div", {
                      className: [Ys.info, s === n ? Ys.active : ""].join(" "),
                      children: [(0, u.jsxs)("div", {
                        className: Ys.title,
                        children: [(0, u.jsx)("div", {
                          className: Ys.gameTitle,
                          children: `${e.game.title}${"fr_fr"===t?" ":""}`
                        }), (0, u.jsx)("h2", {
                          className: Ys.videoTitle,
                          children: `${e.title}`
                        })]
                      }), (0, u.jsx)(T, {
                        className: Ys.cta,
                        onClick: (r = `/videos/${e.id}`, () => {
                          i({
                            event: "cta_watch_video",
                            text: "watch now",
                            link_url: r,
                            element_placement: "video carousel"
                          })
                        }),
                        children: a("Watch Now")
                      })]
                    })
                  }, e.id);
                  var r
                }))
              }), (0, u.jsx)("div", {
                className: Ys.dots,
                children: s.map(((e, t) => (0, u.jsx)("button", {
                  "aria-label": `Slide ${t+1}`,
                  "data-gtm-category": "Marquee",
                  "data-gtm-action": "Dot click",
                  "data-gtm-label": `Dot clicked to ${t}`,
                  onClick: () => o(t),
                  className: n === t ? Ys.active : "",
                  type: "button"
                }, e.id)))
              })]
            })]
          })
        })),
        Qs = (0, o.defineMessages)({
          next_button_label: {
            id: "next_button_label",
            defaultMessage: "Next video page"
          },
          previous_button_label: {
            id: "previous_button_label",
            defaultMessage: "Previous video page"
          }
        }),
        Zs = {
          img: "rockstargames-sites-legacye3f505a2281df28eb1acdf2d586e7fbd",
          wide: "rockstargames-sites-legacyc3a6d60e0087f92bbf7062fe2f36e200"
        };
      (0, F.importAll)(a(18016));
      const Js = e => {
          let {
            isWideCard: t = !1,
            size: s = 640,
            title: i,
            titleSlug: r
          } = e;
          const {
            isMobile: n
          } = (0, F.useWindowResize)(), o = (0, c.useMemo)((() => {
            let e = "";
            return t && (e = n ? a(72027)(`./${r}/mobile.png`) : a(83408)(`./${r}/desktop.png`)), e || (e = a(14512)(`./${r}.jpg`), e += `?im=Resize=${s}`), e
          }), [n, r]), [l] = (0, F.usePreloadImg)(o);
          return (0, u.jsx)("div", {
            role: "img",
            "aria-label": i,
            className: [Zs.img, l ? Zs.startAnimation : "", t ? Zs.wide : ""].join(" "),
            style: {
              backgroundImage: `url(${o})`
            }
          })
        },
        ei = {
          fobLink: "rockstargames-sites-legacyfded54fb94f7325c5a0b57590585b175",
          wide: "rockstargames-sites-legacya9b41f96042bda8a8c77b7b7b10f84d5"
        },
        ti = e => {
          let {
            game: t,
            to: a
          } = e;
          const {
            titleSlug: s,
            urlOfficial: i = ""
          } = t, r = ["VI"].includes(s);
          return (0, u.jsx)(f, {
            "data-gtm-category": "Games",
            "data-gtm-action": "Game Click-through",
            "data-gtm-label": s,
            "data-testid": `${s}-gamecard`,
            to: a ?? i,
            target: "_self",
            className: [ei.fobLink, r ? ei.wide : ""].join(" "),
            children: (0, u.jsx)(Js, {
              title: t.title,
              titleSlug: s,
              isWideCard: r
            })
          })
        },
        ai = {
          videoList: "rockstargames-sites-legacya77794780421c410f7ea55ed11ae6340",
          sectionHeader: "rockstargames-sites-legacyed556e2220733d99eae5df36ba41f9c7",
          arrowNav: "rockstargames-sites-legacyffeb6a2e829d49f94fea4ee7f5a0d2c8",
          items: "rockstargames-sites-legacyffe2263cdad39631ef304714ba89465d",
          trackWrapper: "rockstargames-sites-legacycbdef484a85e8f352a06609b394d4da7",
          partial: "rockstargames-sites-legacyb33af3fff1e38a693bdc09f20d8e6f81",
          track: "rockstargames-sites-legacyf3f263effe27f3c21f2ab822b9ee5dcf",
          arrow: "rockstargames-sites-legacyc8012415449630a832011f490b9d2b72",
          previous: "rockstargames-sites-legacyf30d899a31937a4cf395643951224469",
          next: "rockstargames-sites-legacyd9d5a85633fc0f0b7f98219d735e6e05",
          disabled: "rockstargames-sites-legacyc806076a1e3e23c77528ee12e32771a3"
        },
        si = (0, o.withIntl)((e => {
          let {
            vids: t,
            games: a,
            title: s,
            gameTitleNecessary: i
          } = e;
          const r = (0, o.useIntl)(),
            {
              track: n
            } = (0, R.useGtmTrack)(),
            l = void 0 !== a ? "games" : "videos",
            [d, m] = (0, c.useState)(),
            [g, f] = (0, c.useState)(),
            [p, _] = (0, c.useState)(0),
            h = (0, c.useRef)(null),
            k = (0, c.useRef)(null);
          (0, c.useEffect)((() => {
            f({
              nextEl: k.current,
              prevEl: h.current
            })
          }), [k, h]), (0, c.useEffect)((() => {
            const e = () => {
              const e = e => window.matchMedia(`(max-width: ${e})`).matches;
              let t = 4;
              e("768px") ? t = 1 : e("990px") || e("1440px") ? t = 2.2 : e("1920px") && (t = 3.2), _(t)
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), [p]);
          const b = e => {
            d?.slideTo(e)
          };
          let v;
          return v = "games" === l ? (0, u.jsx)(u.Fragment, {
            children: a.results.map(((e, t) => "775700as" !== e.id && (0, u.jsx)(P.Ky, {
              className: ai.slide,
              onFocus: () => b(t),
              children: (0, u.jsx)(ti, {
                game: e,
                dontOverrideTo: !0,
                to: `/videos?type=game&gameId=${e.id}`
              })
            }, e.id)))
          }) : (0, u.jsx)(u.Fragment, {
            children: t.map(((e, t) => (0, u.jsx)(P.Ky, {
              className: ai.slide,
              onFocus: () => b(t),
              children: (0, u.jsx)(Ua.VideoCard.Link, {
                video: e,
                gameTitleNecessary: i
              })
            }, e.id)))
          }), (0, u.jsxs)("section", {
            className: ai.videoList,
            children: [(0, u.jsxs)("h3", {
              className: ai.sectionHeader,
              children: [s, (0, u.jsxs)("div", {
                className: ai.arrowNav,
                children: [(0, u.jsx)("button", {
                  className: [ai.arrow, ai.previous].join(" "),
                  type: "button",
                  ref: h,
                  "aria-label": r.formatMessage(Qs.previous_button_label)
                }), (0, u.jsx)("button", {
                  className: [ai.arrow, ai.next].join(" "),
                  type: "button",
                  ref: k,
                  "aria-label": r.formatMessage(Qs.next_button_label),
                  onKeyDown: e => {
                    if ("Tab" === e.key && !e.shiftKey) {
                      const t = d?.slides[d?.activeIndex].querySelector('a, button, [role="button"]');
                      t && (e.preventDefault(), t.focus())
                    }
                  }
                })]
              })]
            }), (0, u.jsx)("div", {
              className: [ai.items, p % 1 != 0 ? ai.partial : ""].join(" "),
              children: (0, u.jsx)("div", {
                className: ai.trackWrapper,
                children: p && (0, u.jsx)(P.wx, {
                  className: ai.track,
                  slidesPerView: p,
                  spaceBetween: 24,
                  onInit: e => {
                    m(e)
                  },
                  grabCursor: !0,
                  navigation: g,
                  modules: [Je._2],
                  slideClass: (0, C.classList)("swiper-slide"),
                  onSlideNextTransitionEnd: () => {
                    n({
                      event_action: "next",
                      event_category: "carousel",
                      event: "carousel_next",
                      event_label: s?.toLowerCase() ?? "",
                      element_placement: s?.toLowerCase() ?? ""
                    })
                  },
                  onSlidePrevTransitionEnd: () => {
                    n({
                      event_action: "previous",
                      event_category: "carousel",
                      event: "carousel_previous",
                      event_label: s?.toLowerCase() ?? "",
                      element_placement: s?.toLowerCase() ?? ""
                    })
                  },
                  onSlideChangeTransitionEnd: () => {
                    n({
                      event_action: "swipe",
                      event_category: "carousel",
                      event: "carousel_swipe",
                      event_label: s?.toLowerCase() ?? "",
                      element_placement: s?.toLowerCase() ?? ""
                    })
                  },
                  children: v
                })
              })
            })]
          })
        }), l),
        ii = e => {
          let {
            children: t,
            ...a
          } = e;
          return (0, u.jsx)("span", {
            ...a,
            className: "rockstargames-sites-legacyf7f61ab4bc6dd2a49f80662ead7d8a51",
            children: t
          })
        },
        ri = (0, F.withTranslations)((e => {
          let {
            error: t,
            t: a,
            domain: s = ""
          } = e;
          console.error({
            error: t
          });
          let i = t?.message ?? a("error-404-new");
          i = a("error-404-new");
          const r = t?.code ?? 398,
            n = (0, c.useRef)(null);
          return (0, c.useEffect)((() => {
            n && n?.current && n.current.focus()
          }), [n]), (0, u.jsxs)("div", {
            className: "rockstargames-sites-legacyd988ce20c420c26fc5e455279bf94cb9",
            children: [(0, u.jsx)("h3", {
              tabIndex: -1,
              ref: n,
              children: `${i} (${r})`
            }), (0, u.jsx)(f, {
              to: "/",
              children: a("Home")
            }), "clr" !== s && (0, u.jsx)(Es, {})]
          })
        })),
        ni = {
          videoPreview: "rockstargames-sites-legacyc6739cc628fda235abe2bafeb30ad7cf",
          card: "rockstargames-sites-legacyec6e68ffa1188155be202dfef3f92829",
          info: "rockstargames-sites-legacyab8da127fbcdb98f874bc3f1377669a2",
          title: "rockstargames-sites-legacye84fa4b2b140994c96a13607410d30a3",
          screencap: "rockstargames-sites-legacya322c3d2275cedd594a3b17800154066",
          screencapLoaded: "rockstargames-sites-legacyf68c57f5459778024e5a98918ae61ab2",
          gameTitle: "rockstargames-sites-legacydebff452a4923aded7de826c081bab5d"
        },
        ci = e => {
          let {
            video: t,
            size: a = 640
          } = e;
          const s = () => t.screencap.includes("akamai") ? `${t.screencap}?im=Resize=${a}` : t.screencap,
            [i] = (0, F.usePreloadImg)(s());
          return (0, u.jsx)("div", {
            className: [ni.screencap, i ? ni.screencapLoaded : ""].join(" "),
            style: {
              background: `url(${s()}) center/cover`
            }
          })
        },
        oi = e => {
          let {
            gameTitleNecessary: t = !0,
            openInNewWindow: a = !1,
            video: s,
            size: i,
            toExplicit: r
          } = e;
          const n = r ?? `/videos/${s.id}`,
            c = {
              className: ni.videoPreview,
              "data-gtm-category": "Videos",
              "data-gtm-action": "Video Click-through",
              "data-gtm-label": n
            },
            o = (0, u.jsxs)("div", {
              className: ni.card,
              children: [(0, u.jsx)(ci, {
                video: s,
                size: i
              }), (0, u.jsxs)("div", {
                className: ni.info,
                children: [t ? (0, u.jsx)("div", {
                  className: ni.gameTitle,
                  dangerouslySetInnerHTML: {
                    __html: s.game.title
                  }
                }) : "", (0, u.jsx)("h5", {
                  className: ni.title,
                  dangerouslySetInnerHTML: {
                    __html: s.title
                  }
                })]
              })]
            });
          return a ? (0, u.jsx)("a", {
            href: n,
            target: "_blank",
            ...c,
            children: o
          }) : (0, u.jsx)(f, {
            to: n,
            ...c,
            children: o
          })
        };
      class li extends c.Component {
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
          return null !== this.state.error.code ? (0, u.jsx)(ri, {
            error: this.state.error
          }) : this.props.children
        }
      }
      const di = function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return function(a) {
            return (0, u.jsx)(li, {
              header: t,
              children: (0, u.jsx)(e, {
                ...a
              })
            })
          }
        },
        mi = (0, c.forwardRef)(((e, t) => {
          const {
            children: a,
            tag: s = "div"
          } = e, i = Fe.m[s];
          return (0, u.jsx)(Fe.LazyMotion, {
            features: Fe.domAnimation,
            children: (0, u.jsx)(i, {
              ref: t,
              ...e,
              children: a
            })
          })
        }));
      mi.displayName = "LiteMotion";
      const gi = mi,
        ui = {
          visible: {
            opacity: 1
          },
          hidden: {
            opacity: 0
          }
        },
        fi = {
          ease: "easeIn",
          duration: .4
        },
        pi = e => {
          let {
            children: t
          } = e;
          return (0, u.jsx)(Fe.motion.div, Object.assign({
            className: "rockstargames-sites-legacyf0ee4e641f1ac92151be887c9ebb8392",
            variants: ui,
            initial: "hidden",
            whileInView: "visible",
            viewport: {
              margin: "-20%",
              once: !0
            },
            transition: fi
          }, {
            children: t
          }))
        },
        _i = e => t => (0, u.jsx)(pi, {
          children: (0, u.jsx)(e, Object.assign({}, t))
        }),
        hi = {
          visible: {
            opacity: 1,
            y: 0
          },
          hidden: {
            opacity: 0,
            y: 40
          }
        },
        ki = {
          ease: "easeIn",
          duration: .75
        },
        bi = e => {
          let {
            children: t
          } = e;
          return (0, u.jsx)(Fe.motion.div, {
            className: "rockstargames-sites-legacya479a10c5475b17a0564b60fecf98c8b",
            variants: hi,
            initial: "hidden",
            whileInView: "visible",
            viewport: {
              margin: "-20%",
              once: !0
            },
            transition: ki,
            children: t
          })
        },
        vi = e => t => (0, u.jsx)(bi, {
          children: (0, u.jsx)(e, {
            ...t
          })
        }),
        yi = {
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
        xi = {
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
        wi = function() {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "collapsed";
          return xi[arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "imageMask"][e]
        };
      var Ni = a(45164);
      const ji = JSON.parse('{"assets":[],"layers":[{"ddd":0,"ind":0,"ty":4,"nm":"Shape Layer 1","ks":{"o":{"k":100},"r":{"k":0},"p":{"k":[300,300,0]},"a":{"k":[0,0,0]},"s":{"k":[244,244,100]}},"ao":0,"shapes":[{"d":1,"ty":"el","s":{"k":[100,100]},"p":{"k":[0,0]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"tm","s":{"k":[{"i":{"x":[0.439],"y":[1.016]},"o":{"x":[0.561],"y":[0.015]},"n":["0p439_1p016_0p561_0p015"],"t":5,"s":[100],"e":[0]},{"t":33.0000013441176}],"ix":1},"e":{"k":[{"i":{"x":[0.439],"y":[1.017]},"o":{"x":[0.561],"y":[0.016]},"n":["0p439_1p017_0p561_0p016"],"t":0,"s":[100],"e":[0]},{"t":30.0000012219251}],"ix":2},"o":{"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim"},{"ty":"st","fillEnabled":true,"c":{"k":[1,1,1,1]},"o":{"k":100},"w":{"k":16},"lc":2,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke"}],"ip":0,"op":900.000036657751,"st":0,"bm":0,"sr":1}],"v":"4.5.3","ddd":0,"ip":1.00000004073083,"op":33.0000013441175,"fr":29.9700012207031,"w":600,"h":600}'),
        Si = JSON.parse('{"v":"5.7.3","fr":60,"ip":0,"op":64,"w":300,"h":300,"nm":"Dot_Loading","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"center","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":10,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":22,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":34,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[17.667,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"right","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":5,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":17,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":29,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[12.333,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 2","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"left","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":0,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":12,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":24,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[7,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 3","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0}],"markers":[]}'),
        Ti = {
          SPINNING: "spinning",
          THREE_DOTS: "threeDots"
        },
        Ci = e => {
          let t, {
            type: a = Ti.SPINNING
          } = e;
          switch (a) {
            case Ti.THREE_DOTS:
              t = Si;
              break;
            case Ti.SPINNING:
            default:
              t = ji
          }
          const s = {
            loop: !0,
            autoplay: !0,
            animationData: t,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice"
            }
          };
          return (0, u.jsx)(Ni.c, {
            options: s,
            height: 50,
            width: 50
          })
        }
    },
    53592: (e, t, a) => {
      "use strict";
      a.d(t, {
        U: () => s,
        c: () => r
      });
      const s = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store"
        },
        i = [{
          id: "prod",
          sites: {
            www: "www",
            socialClub: "socialclub",
            support: "support",
            store: "store"
          },
          cookieIdentifier: "prod"
        }],
        r = () => {
          let e;
          const {
            location: t
          } = window, a = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), s = i.findIndex((t => Object.entries(t.sites).findIndex((t => {
            let [s, i] = t;
            return i === a && (e = {
              site: s,
              subDomain: i
            }, !0)
          })) >= 0)), r = i[s >= 0 ? s : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...r,
            currentSite: e
          }
        }
    },
    90048: e => {
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

      function i(e, t) {
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
          definitions: [i(e, t)]
        };
        e.hasOwnProperty("loc") && (a.loc = e.loc);
        var r = s[t] || new Set,
          n = new Set,
          c = new Set;
        for (r.forEach((function(e) {
            c.add(e)
          })); c.size > 0;) {
          var o = c;
          c = new Set, o.forEach((function(e) {
            n.has(e) || (n.add(e), (s[e] || new Set).forEach((function(e) {
              c.add(e)
            })))
          }))
        }
        return n.forEach((function(t) {
          var s = i(e, t);
          s && a.definitions.push(s)
        })), a
      }(t, "GetAudioAlbum")
    },
    58652: e => {
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

      function i(e, t) {
        for (var a = 0; a < e.definitions.length; a++) {
          var s = e.definitions[a];
          if (s.name && s.name.value == t) return s
        }
      }

      function r(e, t) {
        var a = {
          kind: e.kind,
          definitions: [i(e, t)]
        };
        e.hasOwnProperty("loc") && (a.loc = e.loc);
        var r = s[t] || new Set,
          n = new Set,
          c = new Set;
        for (r.forEach((function(e) {
            c.add(e)
          })); c.size > 0;) {
          var o = c;
          c = new Set, o.forEach((function(e) {
            n.has(e) || (n.add(e), (s[e] || new Set).forEach((function(e) {
              c.add(e)
            })))
          }))
        }
        return n.forEach((function(t) {
          var s = i(e, t);
          s && a.definitions.push(s)
        })), a
      }
      t.definitions.forEach((function(e) {
        if (e.name) {
          var t = new Set;
          a(e, t), s[e.name.value] = t
        }
      })), e.exports = t, e.exports.UserGetVote = r(t, "UserGetVote"), e.exports.UserCastVote = r(t, "UserCastVote")
    },
    13316: e => {
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

      function i(e, t) {
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
          definitions: [i(e, t)]
        };
        e.hasOwnProperty("loc") && (a.loc = e.loc);
        var r = s[t] || new Set,
          n = new Set,
          c = new Set;
        for (r.forEach((function(e) {
            c.add(e)
          })); c.size > 0;) {
          var o = c;
          c = new Set, o.forEach((function(e) {
            n.has(e) || (n.add(e), (s[e] || new Set).forEach((function(e) {
              c.add(e)
            })))
          }))
        }
        return n.forEach((function(t) {
          var s = i(e, t);
          s && a.definitions.push(s)
        })), a
      }(t, "GameData")
    },
    504: e => {
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
                value: "types"
              }
            },
            type: {
              kind: "ListType",
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
                  value: "types"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "types"
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
                        value: "id"
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
                        value: "type"
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
          end: 963
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
        body: "query TinaModulesList($types: [String], $locale: String!) {\n    tinaModulesList(types: $types, locale: $locale) {\n        results {\n            id_hash\n            id\n            title\n            type\n        }\n    }\n}\n\nquery TinaModulesInfo(\n    $ids: [String]!\n    $locale: String!\n    $sync: Boolean = false\n    $cache: Boolean = false\n) {\n    tinaModulesInfo(ids: $ids, locale: $locale, cache: $cache) {\n        id: id_hash\n        title\n        title_doc\n        type\n        sync_hash\n        to\n        visible\n        children {\n            title\n            id_hash\n            to\n            tina {\n                payload\n                variables {\n                    keys\n                }\n            }\n        }\n        tina {\n            payload\n            variables {\n                keys\n                _translations @include(if: $sync) {\n                    locale\n                    keys\n                }\n            }\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function i(e, t) {
        for (var a = 0; a < e.definitions.length; a++) {
          var s = e.definitions[a];
          if (s.name && s.name.value == t) return s
        }
      }

      function r(e, t) {
        var a = {
          kind: e.kind,
          definitions: [i(e, t)]
        };
        e.hasOwnProperty("loc") && (a.loc = e.loc);
        var r = s[t] || new Set,
          n = new Set,
          c = new Set;
        for (r.forEach((function(e) {
            c.add(e)
          })); c.size > 0;) {
          var o = c;
          c = new Set, o.forEach((function(e) {
            n.has(e) || (n.add(e), (s[e] || new Set).forEach((function(e) {
              c.add(e)
            })))
          }))
        }
        return n.forEach((function(t) {
          var s = i(e, t);
          s && a.definitions.push(s)
        })), a
      }
      t.definitions.forEach((function(e) {
        if (e.name) {
          var t = new Set;
          a(e, t), s[e.name.value] = t
        }
      })), e.exports = t, e.exports.TinaModulesList = r(t, "TinaModulesList"), e.exports.TinaModulesInfo = r(t, "TinaModulesInfo")
    },
    19168: e => {
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

      function i(e, t) {
        for (var a = 0; a < e.definitions.length; a++) {
          var s = e.definitions[a];
          if (s.name && s.name.value == t) return s
        }
      }

      function r(e, t) {
        var a = {
          kind: e.kind,
          definitions: [i(e, t)]
        };
        e.hasOwnProperty("loc") && (a.loc = e.loc);
        var r = s[t] || new Set,
          n = new Set,
          c = new Set;
        for (r.forEach((function(e) {
            c.add(e)
          })); c.size > 0;) {
          var o = c;
          c = new Set, o.forEach((function(e) {
            n.has(e) || (n.add(e), (s[e] || new Set).forEach((function(e) {
              c.add(e)
            })))
          }))
        }
        return n.forEach((function(t) {
          var s = i(e, t);
          s && a.definitions.push(s)
        })), a
      }
      t.definitions.forEach((function(e) {
        if (e.name) {
          var t = new Set;
          a(e, t), s[e.name.value] = t
        }
      })), e.exports = t, e.exports.UserGetVote = r(t, "UserGetVote"), e.exports.UserCastVote = r(t, "UserCastVote")
    },
    55492: (e, t, a) => {
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
          end: 537
        }
      };
      s.loc.source = {
        body: '#import "@rockstargames/graph-client/operations/fragments/newswire-post.graphql"\n#import "@rockstargames/graph-client/operations/fragments/paging.graphql"\n\nquery NewswireList(\n    $locale: String!\n    $page: Int!\n    $tagId: Int\n    $metaUrl: String!\n    $cache: Boolean = true\n) {\n    meta: metaUrl(url: $metaUrl, domain: "www", locale: $locale) {\n        title\n    }\n    posts(page: $page, tagId: $tagId, locale: $locale) {\n        paging {\n            ...paging\n        }\n        results {\n            ...postFields\n        }\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var i = {};

      function r(e) {
        return e.filter((function(e) {
          if ("FragmentDefinition" !== e.kind) return !0;
          var t = e.name.value;
          return !i[t] && (i[t] = !0, !0)
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
      s.definitions = s.definitions.concat(r(a(73784).definitions)), s.definitions = s.definitions.concat(r(a(28540).definitions));
      var c = {};

      function o(e, t) {
        for (var a = 0; a < e.definitions.length; a++) {
          var s = e.definitions[a];
          if (s.name && s.name.value == t) return s
        }
      }
      s.definitions.forEach((function(e) {
        if (e.name) {
          var t = new Set;
          n(e, t), c[e.name.value] = t
        }
      })), e.exports = s, e.exports.NewswireList = function(e, t) {
        var a = {
          kind: e.kind,
          definitions: [o(e, t)]
        };
        e.hasOwnProperty("loc") && (a.loc = e.loc);
        var s = c[t] || new Set,
          i = new Set,
          r = new Set;
        for (s.forEach((function(e) {
            r.add(e)
          })); r.size > 0;) {
          var n = r;
          r = new Set, n.forEach((function(e) {
            i.has(e) || (i.add(e), (c[e] || new Set).forEach((function(e) {
              r.add(e)
            })))
          }))
        }
        return i.forEach((function(t) {
          var s = o(e, t);
          s && a.definitions.push(s)
        })), a
      }(s, "NewswireList")
    },
    13892: (e, t, a) => {
      var s = {
        "./left.svg": 2440,
        "./pc.svg": 66584,
        "./ps.svg": 38407,
        "./ps3.svg": 31972,
        "./ps4.svg": 3052,
        "./ps5.svg": 92243,
        "./right.svg": 61837,
        "./switch.svg": 99868,
        "./x.svg": 72428,
        "./xbox.svg": 68868,
        "./xboxone.svg": 98092,
        "./xboxseriesxs.svg": 73040
      };

      function i(e) {
        var t = r(e);
        return a(t)
      }

      function r(e) {
        if (!a.o(s, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        }
        return s[e]
      }
      i.keys = function() {
        return Object.keys(s)
      }, i.resolve = r, e.exports = i, i.id = 13892
    },
    52884: (e, t, a) => {
      var s = {
        "./cero_a.png": 38604,
        "./cero_b.svg": 14276,
        "./cero_c.svg": 75264,
        "./cero_d.svg": 4268,
        "./cero_rp.png": 87336,
        "./cero_z.svg": 68696,
        "./djctq_10.svg": 29375,
        "./djctq_12.svg": 7056,
        "./djctq_14.svg": 72804,
        "./djctq_16.svg": 99900,
        "./djctq_18.svg": 72192,
        "./djctq_er.svg": 71732,
        "./djctq_l.svg": 44428,
        "./esrb_ao.svg": 42144,
        "./esrb_e.svg": 49492,
        "./esrb_e10plus.svg": 50711,
        "./esrb_m.svg": 10292,
        "./esrb_m_ao.svg": 18404,
        "./esrb_rp.svg": 29600,
        "./esrb_rplm17.svg": 44656,
        "./esrb_t.svg": 24884,
        "./fpb_13.svg": 60896,
        "./fpb_16.svg": 47932,
        "./fpb_18.svg": 92948,
        "./fpb_pg.svg": 66620,
        "./grac_12.svg": 43788,
        "./grac_15.svg": 94164,
        "./grac_18.svg": 94916,
        "./grac_19.svg": 29976,
        "./grac_a.svg": 77304,
        "./gsrr_0.svg": 92284,
        "./gsrr_12.svg": 12024,
        "./gsrr_15.svg": 51040,
        "./gsrr_18.svg": 26632,
        "./gsrr_6.svg": 17372,
        "./nmc_12.svg": 51423,
        "./nmc_16.svg": 92596,
        "./nmc_18.svg": 63980,
        "./nmc_21.svg": 7240,
        "./nmc_3.svg": 65140,
        "./nmc_7.svg": 66884,
        "./oflc_g.svg": 28704,
        "./oflc_m.svg": 74116,
        "./oflc_ma15.svg": 42856,
        "./oflc_pg.svg": 65888,
        "./oflc_r18.svg": 94780,
        "./pegi_12.svg": 18564,
        "./pegi_16.svg": 50524,
        "./pegi_18.svg": 33173,
        "./pegi_3.svg": 90100,
        "./pegi_4.svg": 20064,
        "./pegi_6.svg": 95228,
        "./pegi_7.svg": 44308,
        "./pegi_rp.png": 96480,
        "./rars_0.svg": 48112,
        "./rars_12.svg": 77767,
        "./rars_16.svg": 35740,
        "./rars_18.svg": 96708,
        "./rars_6.svg": 24264,
        "./usk_0.svg": 75084,
        "./usk_12.svg": 5384,
        "./usk_16.svg": 21804,
        "./usk_18.svg": 21367,
        "./usk_6.svg": 45568,
        "./usk_rp.svg": 46096,
        "./vaci_rp.png": 86616
      };

      function i(e) {
        var t = r(e);
        return a(t)
      }

      function r(e) {
        if (!a.o(s, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        }
        return s[e]
      }
      i.keys = function() {
        return Object.keys(s)
      }, i.resolve = r, e.exports = i, i.id = 52884
    },
    7e4: (e, t, a) => {
      var s = {
        "./cero_a.png": 38604,
        "./cero_b.svg": 14276,
        "./cero_c.svg": 75264,
        "./cero_d.svg": 4268,
        "./cero_rp.png": 87336,
        "./cero_z.svg": 68696,
        "./djctq_10.svg": 29375,
        "./djctq_12.svg": 7056,
        "./djctq_14.svg": 72804,
        "./djctq_16.svg": 99900,
        "./djctq_18.svg": 72192,
        "./djctq_er.svg": 71732,
        "./djctq_l.svg": 44428,
        "./esrb_ao.svg": 42144,
        "./esrb_e.svg": 49492,
        "./esrb_e10plus.svg": 50711,
        "./esrb_m.svg": 10292,
        "./esrb_m_ao.svg": 18404,
        "./esrb_rp.svg": 29600,
        "./esrb_rplm17.svg": 44656,
        "./esrb_t.svg": 24884,
        "./fpb_13.svg": 60896,
        "./fpb_16.svg": 47932,
        "./fpb_18.svg": 92948,
        "./fpb_pg.svg": 66620,
        "./grac_12.svg": 43788,
        "./grac_15.svg": 94164,
        "./grac_18.svg": 94916,
        "./grac_19.svg": 29976,
        "./grac_a.svg": 77304,
        "./gsrr_0.svg": 92284,
        "./gsrr_12.svg": 12024,
        "./gsrr_15.svg": 51040,
        "./gsrr_18.svg": 26632,
        "./gsrr_6.svg": 17372,
        "./nmc_12.svg": 51423,
        "./nmc_16.svg": 92596,
        "./nmc_18.svg": 63980,
        "./nmc_21.svg": 7240,
        "./nmc_3.svg": 65140,
        "./nmc_7.svg": 66884,
        "./oflc_g.svg": 28704,
        "./oflc_m.svg": 74116,
        "./oflc_ma15.svg": 42856,
        "./oflc_pg.svg": 65888,
        "./oflc_r18.svg": 94780,
        "./pegi_12.svg": 18564,
        "./pegi_16.svg": 50524,
        "./pegi_18.svg": 33173,
        "./pegi_3.svg": 90100,
        "./pegi_4.svg": 20064,
        "./pegi_6.svg": 95228,
        "./pegi_7.svg": 44308,
        "./pegi_rp.png": 96480,
        "./rars_0.svg": 48112,
        "./rars_12.svg": 77767,
        "./rars_16.svg": 35740,
        "./rars_18.svg": 96708,
        "./rars_6.svg": 24264,
        "./usk_0.svg": 75084,
        "./usk_12.svg": 5384,
        "./usk_16.svg": 21804,
        "./usk_18.svg": 21367,
        "./usk_6.svg": 45568,
        "./usk_rp.svg": 46096,
        "./vaci_rp.png": 86616
      };

      function i(e) {
        var t = r(e);
        return a(t)
      }

      function r(e) {
        if (!a.o(s, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        }
        return s[e]
      }
      i.keys = function() {
        return Object.keys(s)
      }, i.resolve = r, e.exports = i, i.id = 7e4
    },
    6572: (e, t, a) => {
      var s = {
        "./bounty.png": 30752,
        "./collector.png": 40056,
        "./moonshiner.png": 41444,
        "./naturalist.png": 73268,
        "./trader.png": 74688
      };

      function i(e) {
        var t = r(e);
        return a(t)
      }

      function r(e) {
        if (!a.o(s, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        }
        return s[e]
      }
      i.keys = function() {
        return Object.keys(s)
      }, i.resolve = r, e.exports = i, i.id = 6572
    },
    18016: (e, t, a) => {
      var s = {
        "./GTAOnline.jpg": 14464,
        "./GTATrilogy.jpg": 57116,
        "./IV.jpg": 74308,
        "./V.jpg": 53956,
        "./VI/desktop.png": 44616,
        "./VI/mobile.png": 17076,
        "./agent.jpg": 43160,
        "./beaterator.jpg": 42796,
        "./bully-scholarshipedition.jpg": 72116,
        "./bully.jpg": 96300,
        "./chinatownwars.jpg": 78272,
        "./episodesfromlibertycity.jpg": 46380,
        "./grandtheftauto-gba.jpg": 87868,
        "./grandtheftauto3.jpg": 19008,
        "./gta-online.jpg": 432,
        "./gta-v.jpg": 23916,
        "./gta.jpg": 27380,
        "./gta2.jpg": 93468,
        "./gtacomplete.jpg": 40188,
        "./gtalondon.jpg": 72824,
        "./italianjob.jpg": 40676,
        "./lanoire-vr-case-files.jpg": 97448,
        "./lanoire.jpg": 39848,
        "./lanoire_2.jpg": 58544,
        "./libertycitystories.jpg": 60380,
        "./manhunt.jpg": 2528,
        "./manhunt2.jpg": 99056,
        "./maxpayne.jpg": 72396,
        "./maxpayne2.jpg": 47108,
        "./maxpayne3.jpg": 30056,
        "./midnightclub.jpg": 51840,
        "./midnightclub2.jpg": 90460,
        "./midnightclub3.jpg": 40468,
        "./midnightclubLA-complete.jpg": 92807,
        "./midnightclubLA.jpg": 17516,
        "./oni.jpg": 56468,
        "./rdr-goty.jpg": 23504,
        "./reddeadonline.jpg": 48600,
        "./reddeadredemption.jpg": 92256,
        "./reddeadredemption2.jpg": 68588,
        "./reddeadrevolver.jpg": 18444,
        "./rockstar-games-collection-edition-1.jpg": 32392,
        "./sanandreas.jpg": 10107,
        "./skateanddestroy.jpg": 65852,
        "./smugglersrun.jpg": 37620,
        "./smugglersrun2.jpg": 66556,
        "./smugglersrunwarzones.jpg": 43360,
        "./stateofemergency.jpg": 73904,
        "./tabletennis.jpg": 97896,
        "./theballadofgaytony.jpg": 10304,
        "./thelostanddamned.jpg": 98368,
        "./thewarriors.jpg": 71791,
        "./undeadnightmare.jpg": 51300,
        "./vicecity.jpg": 59199,
        "./vicecitystories.jpg": 37764,
        "./wildmetal.jpg": 95420
      };

      function i(e) {
        var t = r(e);
        return a(t)
      }

      function r(e) {
        if (!a.o(s, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        }
        return s[e]
      }
      i.keys = function() {
        return Object.keys(s)
      }, i.resolve = r, e.exports = i, i.id = 18016
    },
    14512: (e, t, a) => {
      var s = {
        "./GTAOnline.jpg": 14464,
        "./GTATrilogy.jpg": 57116,
        "./IV.jpg": 74308,
        "./V.jpg": 53956,
        "./agent.jpg": 43160,
        "./beaterator.jpg": 42796,
        "./bully-scholarshipedition.jpg": 72116,
        "./bully.jpg": 96300,
        "./chinatownwars.jpg": 78272,
        "./episodesfromlibertycity.jpg": 46380,
        "./grandtheftauto-gba.jpg": 87868,
        "./grandtheftauto3.jpg": 19008,
        "./gta-online.jpg": 432,
        "./gta-v.jpg": 23916,
        "./gta.jpg": 27380,
        "./gta2.jpg": 93468,
        "./gtacomplete.jpg": 40188,
        "./gtalondon.jpg": 72824,
        "./italianjob.jpg": 40676,
        "./lanoire-vr-case-files.jpg": 97448,
        "./lanoire.jpg": 39848,
        "./lanoire_2.jpg": 58544,
        "./libertycitystories.jpg": 60380,
        "./manhunt.jpg": 2528,
        "./manhunt2.jpg": 99056,
        "./maxpayne.jpg": 72396,
        "./maxpayne2.jpg": 47108,
        "./maxpayne3.jpg": 30056,
        "./midnightclub.jpg": 51840,
        "./midnightclub2.jpg": 90460,
        "./midnightclub3.jpg": 40468,
        "./midnightclubLA-complete.jpg": 92807,
        "./midnightclubLA.jpg": 17516,
        "./oni.jpg": 56468,
        "./rdr-goty.jpg": 23504,
        "./reddeadonline.jpg": 48600,
        "./reddeadredemption.jpg": 92256,
        "./reddeadredemption2.jpg": 68588,
        "./reddeadrevolver.jpg": 18444,
        "./rockstar-games-collection-edition-1.jpg": 32392,
        "./sanandreas.jpg": 10107,
        "./skateanddestroy.jpg": 65852,
        "./smugglersrun.jpg": 37620,
        "./smugglersrun2.jpg": 66556,
        "./smugglersrunwarzones.jpg": 43360,
        "./stateofemergency.jpg": 73904,
        "./tabletennis.jpg": 97896,
        "./theballadofgaytony.jpg": 10304,
        "./thelostanddamned.jpg": 98368,
        "./thewarriors.jpg": 71791,
        "./undeadnightmare.jpg": 51300,
        "./vicecity.jpg": 59199,
        "./vicecitystories.jpg": 37764,
        "./wildmetal.jpg": 95420
      };

      function i(e) {
        var t = r(e);
        return a(t)
      }

      function r(e) {
        if (!a.o(s, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        }
        return s[e]
      }
      i.keys = function() {
        return Object.keys(s)
      }, i.resolve = r, e.exports = i, i.id = 14512
    },
    83408: (e, t, a) => {
      var s = {
        "./VI/desktop.png": 44616
      };

      function i(e) {
        var t = r(e);
        return a(t)
      }

      function r(e) {
        if (!a.o(s, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        }
        return s[e]
      }
      i.keys = function() {
        return Object.keys(s)
      }, i.resolve = r, e.exports = i, i.id = 83408
    },
    72027: (e, t, a) => {
      var s = {
        "./VI/mobile.png": 17076
      };

      function i(e) {
        var t = r(e);
        return a(t)
      }

      function r(e) {
        if (!a.o(s, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        }
        return s[e]
      }
      i.keys = function() {
        return Object.keys(s)
      }, i.resolve = r, e.exports = i, i.id = 72027
    },
    2440: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3c6134ba61610ead6af640361535e346.svg"
    },
    66584: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c050b43f15f34e2cd0592fad6dc48fd.svg"
    },
    38407: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/27ae07e3226006749e6cb6428bc62bb1.svg"
    },
    31972: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d118a14a73ce72b4687d9eb69724f4d2.svg"
    },
    3052: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3f9f55567df4006813f8bf50ad383ea0.svg"
    },
    92243: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b12e4e9678e7a4ebea34905926feeb90.svg"
    },
    61837: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cf1b78cec82c717ea9c2155ce4093736.svg"
    },
    99868: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/925d3b2d0b0e784c366e20d3f1a660da.svg"
    },
    72428: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7c453a914f0b049334120adfcba614e5.svg"
    },
    68868: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f74e871585118640ffd9ce881181a176.svg"
    },
    98092: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f91e4753c491fb23c2b364f69480c9e.svg"
    },
    73040: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5bd8456deb2338503b8fd44786b5fa07.svg"
    },
    60328: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/44d747ec4a149ad5386114f6b5c60f2d.svg"
    },
    29314: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a29e26aa160e7be7e845708c335b3c39.svg"
    },
    71084: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8271b67c2f5834856448ca1eef6dba3f.png"
    },
    66452: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5be68b0895e242db88f00aae46effad7.svg"
    },
    14120: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6054f77c4450b075b6059eda658a510d.svg"
    },
    33788: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c577e2612120d70330b797e6ee5487d9.svg"
    },
    37284: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c8ee10e269f42d96c58c1eb016717e1.svg"
    },
    19916: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61f1cfebde0508725354fa6c2bdda0b4.svg"
    },
    80804: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/77896e8c17472d9127fc3a09244bcdec.svg"
    },
    70564: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/941a1141a404ed211f7d23ed36ccee23.svg"
    },
    62756: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/04d319f216248f3df7f9727df641b832.svg"
    },
    12064: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3e18ef78074a128424a94ab6313dd332.svg"
    },
    7748: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c91f19b5ea19868e280034220acf6740.svg"
    },
    84184: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3d0b47d69ca8bee8a00a608ebd896198.svg"
    },
    69450: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2a7a3f3a2974f306eaf16cbc851622ec.svg"
    },
    85724: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9c9f8a365923c42d238fc1f94659f4a7.svg"
    },
    31216: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/13287de69dbdd8bdcd042ce6285f2bae.svg"
    },
    38604: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51b141250a4851d7ec3673d88dbd20a.png"
    },
    14276: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7ac89f9e00ded04ef4b2dd3eaf3e8734.svg"
    },
    75264: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f44dd7aad9d6c62e40a11f51252f59b8.svg"
    },
    4268: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/204116b24cd9e9ab4e71af21b3a96179.svg"
    },
    87336: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/676b3908098d8b19f1019ce361af45ec.png"
    },
    68696: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/03ab76c58ed61a83bf035c923dbe32b2.svg"
    },
    29375: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f468aef6f0b5399d5c0f6b2e95b60cc5.svg"
    },
    7056: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0b31c79d361cfd92e1a405dbbf4890bd.svg"
    },
    72804: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3689ac97526f00a4537e1b38ec82a074.svg"
    },
    99900: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/07f9f9e93ec430813e74cbce545962c4.svg"
    },
    72192: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/608f591c35aff9d47091dd7fe9a8fb13.svg"
    },
    71732: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/198ced82807c854e92e84e23f7434c91.svg"
    },
    44428: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/edf01daa4f0392081705c17a74d8a146.svg"
    },
    42144: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c4dd58f5b5b97796b6c6177de364dd36.svg"
    },
    49492: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/201de0eb81b09ea93aa1aef2a6824b7c.svg"
    },
    50711: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/534078f6307f97ce0d70e0bb885f9d77.svg"
    },
    10292: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f4b0d9409df1e8a420b2118e4e601263.svg"
    },
    18404: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/092865e0ddae5190dc3c0284ee3c21bd.svg"
    },
    29600: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/80dd50a2fa9aae3b5d6effdb2d9c2661.svg"
    },
    44656: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5d471eef7883043fdabe1b3ed17a72b3.svg"
    },
    24884: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/35cf853d7882b090b56837bd08127da1.svg"
    },
    60896: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/72e8749316b4d1f52925b95e075e9c24.svg"
    },
    47932: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c2acdad576048f5c48b2ee6a2a2a90a3.svg"
    },
    92948: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f52c5ab315a1ff90360e06372c3f2c0.svg"
    },
    66620: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d1f569db6c94b4f81417f62e91759082.svg"
    },
    43788: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fe262661c6667d97f441e045067f4a0f.svg"
    },
    94164: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1b457cab77cb82e1c05ad12628414576.svg"
    },
    94916: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1a3660d76f39527a79f8a49bb27a74be.svg"
    },
    29976: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1a3660d76f39527a79f8a49bb27a74be.svg"
    },
    77304: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/515f2884036e870905ae53f156692721.svg"
    },
    92284: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a3931a545299e205758648bce29e5c49.svg"
    },
    12024: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/05e9f2f27883d4cbabb3d4e4e16c9c74.svg"
    },
    51040: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f2fc4de3decfa0ac007f6cbd91658a9.svg"
    },
    26632: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cd57122be57f5e3a9dc4d0a0f2503fb1.svg"
    },
    17372: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2d910a48fc0914f58ca80dc0732a7677.svg"
    },
    51423: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6e99540df7fd07d75b08a5fbc02d4815.svg"
    },
    92596: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/937b7a0c5a128c39addf2adeba2d2f23.svg"
    },
    63980: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/46a27d8d16855dcc2a217f48243c6d82.svg"
    },
    7240: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e5792c85d5a88a0b7c75af087e4c6ee2.svg"
    },
    65140: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4da522682784ded3799c5a6f9f8c213a.svg"
    },
    66884: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/29ea20c333709a952c2eb3a2591d435d.svg"
    },
    28704: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7c66fbb7c204e32da80ccb1693d15e00.svg"
    },
    74116: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/954d63889440be17e1ebef30b7026369.svg"
    },
    42856: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2eb8777f38cbd4d721261ad736c1f2e7.svg"
    },
    65888: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6079496697e537802f8a0eb5a83d2e94.svg"
    },
    94780: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a2a19fbf81b03db0fda00839496a3ce5.svg"
    },
    18564: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/129ef1c1a15ffc7afb86ce282e48decb.svg"
    },
    50524: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a2a5d9ca87a5bd107da9bb33d3d718e8.svg"
    },
    33173: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dabd13175cc0894dcb3f942d3d2dab86.svg"
    },
    90100: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/64d281825da1c782681bcc096d693e32.svg"
    },
    20064: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b43dddd485139df895fc531e79c75e68.svg"
    },
    95228: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c01f38f1051e751caa633d533202873c.svg"
    },
    44308: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/27a26f477c8db29df4ceec4517c7f42b.svg"
    },
    96480: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a380d3ce353544a356e8ce48f8586804.png"
    },
    48112: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/bba2f70e014e82b336a9f80625053089.svg"
    },
    77767: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/85250e8a0e5a5a1209f214423f6ebe43.svg"
    },
    35740: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f1a94d5705ae3ddeb4c8c2fde79bfe81.svg"
    },
    96708: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a825976dddc59e33b3ce146ad6cd3d20.svg"
    },
    24264: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/01b0cd4466759aa349ac4036594ab6ae.svg"
    },
    75084: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9c699f3b76c15209c8059f02507e11b5.svg"
    },
    5384: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b48e041f1412ff62c8a92dc424b59aa5.svg"
    },
    21804: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/07362df5a2671c08b232a97d503cd6bf.svg"
    },
    21367: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c3fe2a9610ca8b42807dfa99073d68b3.svg"
    },
    45568: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/056d3bdf1f300bcb7efa4aebcfc5224d.svg"
    },
    46096: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/278e84e5a41407499c43a30f545da3e8.svg"
    },
    86616: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/703a546f7a5109c1e2af87a212135aad.png"
    },
    30752: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/48754c6fc2f75b0554098423f2bda6d1.png"
    },
    40056: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e111377ba943e9eefaa9204f77c77093.png"
    },
    41444: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4639a2711d1bca49a87c302784050ee3.png"
    },
    73268: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/898794daaec68a69ef5ec4afaefe1948.png"
    },
    74688: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6e77bb0f25a6ea37e8d831b12df9fa3c.png"
    },
    14464: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5dc0952c9e5beba577aeffe0289478bd.jpg"
    },
    57116: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/214a1cd1a2e7bb8f9b1e5d3846ca2993.jpg"
    },
    74308: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0b01707ef5603a26c1f542088f8f7c09.jpg"
    },
    53956: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ccac790d960f612fa0746c78b8052926.jpg"
    },
    44616: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f1aba112359a3d6747ad694a8c02a07c.png"
    },
    17076: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/26f95aa7677031d8cd56ea75250c7bdd.png"
    },
    43160: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5d66bfe06a724f04c0941073de283297.jpg"
    },
    42796: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1b95ab415fdd8bec89099d433d23e3c7.jpg"
    },
    72116: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5704d117b387578dfebe1290e556f963.jpg"
    },
    96300: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f58d386594d32f34c887da75032c5be.jpg"
    },
    78272: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a8074783730a47af2fe5c2b67ddf7d31.jpg"
    },
    46380: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0281770395dc77e41c1f40559a3d5989.jpg"
    },
    87868: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/15b671d990b1f3f941c6359b3235abf3.jpg"
    },
    19008: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/81001f378e085cd20f8ee0182e23cb7c.jpg"
    },
    432: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5dc0952c9e5beba577aeffe0289478bd.jpg"
    },
    23916: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ccac790d960f612fa0746c78b8052926.jpg"
    },
    27380: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f34231941013a609948485830c84c072.jpg"
    },
    93468: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/48371205a1d87d858baa85712d1f91bb.jpg"
    },
    40188: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/089fe525338554e2120a1aaaf81766d6.jpg"
    },
    72824: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dbc4dbe3e1d52c3fc405579090868d08.jpg"
    },
    40676: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/809c3d6f72a6752f0ebcc6c92d43db67.jpg"
    },
    97448: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b13400360d3873aa5ed169d38da1ff9f.jpg"
    },
    39848: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b1034f3c525b39db31d9017268a0aeb5.jpg"
    },
    58544: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b1034f3c525b39db31d9017268a0aeb5.jpg"
    },
    60380: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ab528316ca7d31c2b041b62c4ce5dd36.jpg"
    },
    2528: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fa649a5d6b52121271093a7c564cc56a.jpg"
    },
    99056: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/116555df6799e584310484375c97a43f.jpg"
    },
    72396: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fd74a091e2e5765c8769668cc515e494.jpg"
    },
    47108: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0e7d916fcce2bbe9b6419f914f290597.jpg"
    },
    30056: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0f31b4df90bff5bab740485f2d4b8253.jpg"
    },
    51840: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dd4b0f40e745f4347c822594da56a119.jpg"
    },
    90460: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/774943ec47ce732040f48df3943a0a7c.jpg"
    },
    40468: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e8ae1f733bc7d3b05c506de67f4b4f7f.jpg"
    },
    92807: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a549b321910f5308200496f1893c2a5f.jpg"
    },
    17516: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/659db20d7a19cc70a0510c7d197cedf3.jpg"
    },
    56468: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8977d6b170f295068d78c5bbb7b6f02d.jpg"
    },
    23504: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61a79de8dea0228576a18068e4f2660a.jpg"
    },
    48600: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dbc01cf29aa31b9d15a5d06483a0a1a3.jpg"
    },
    92256: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5aa471f90eaff248e0fbef79400cbbf3.jpg"
    },
    68588: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/082b847bcab37655faf903149f80f1e4.jpg"
    },
    18444: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2d3ee871568fd751956d5ea1242a4f2d.jpg"
    },
    32392: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f79f3baf4a020b34cf9d3cf29d71f4e.jpg"
    },
    10107: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/bbcbd2a2bb65ddad76e831c91c17b421.jpg"
    },
    65852: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a69bebbefae64314172002dd2bae0a34.jpg"
    },
    37620: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4393d2466a2f8931669e345898541812.jpg"
    },
    66556: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4a1657ff0ab4e3d45469556ba2f899c3.jpg"
    },
    43360: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/16e65ca64eafabe331ef1d2bef9c6f16.jpg"
    },
    73904: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/404be4f04081372768bb660a6c1991ba.jpg"
    },
    97896: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5df3b2d018d1e8e9b424b9eaebc86b16.jpg"
    },
    10304: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/14448aca4ceaab8680323ce19c963d68.jpg"
    },
    98368: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f9b044c847e4c971c6ac5d096fe3e0eb.jpg"
    },
    71791: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5239707dea0f2f4ea8351f64e6b5a921.jpg"
    },
    51300: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/14312e604f0637a2afd376dd571345d9.jpg"
    },
    59199: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6bf5412b358a42300603159932412051.jpg"
    },
    37764: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c82125e0b20342dba2008b0dcc6d55f6.jpg"
    },
    95420: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5d0b53035bf66e851116bd0244ba6ace.jpg"
    },
    43976: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8787df71c723ebe44f82fd13ed216e09.jpg"
    },
    61820: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61ae357c3bfbabb5d765e9a7c794d08f.png"
    },
    43352: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/59c4aadbdbfcdb8d06d7caa54bdc9f60.svg"
    }
  }
]);