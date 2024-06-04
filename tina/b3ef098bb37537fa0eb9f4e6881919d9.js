! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "dca02fef-e52e-4b37-9afd-d86ae022261d", e._sentryDebugIdIdentifier = "sentry-dbid-dca02fef-e52e-4b37-9afd-d86ae022261d")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/tina",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_tina = self.webpackChunk_rockstargames_tina || []).push([
  [720], {
    7100: (e, t, a) => {
      "use strict";
      a.d(t, {
        ML: () => Na,
        cp: () => ni,
        w$: () => ni
      });
      let s, i, r, n, o, c, l, d, m, u, f, g = {
          autoSleep: 120,
          force3D: "auto",
          nullTargetWarn: 1,
          units: {
            lineHeight: ""
          }
        },
        _ = {
          duration: .5,
          overwrite: !1,
          delay: 0
        },
        p = 1e8,
        h = 1e-8,
        k = 2 * Math.PI,
        b = k / 4,
        v = 0,
        x = Math.sqrt,
        y = Math.cos,
        w = Math.sin,
        N = e => "string" == typeof e,
        S = e => "function" == typeof e,
        j = e => "number" == typeof e,
        T = e => void 0 === e,
        C = e => "object" == typeof e,
        M = e => !1 !== e,
        I = () => "undefined" != typeof window,
        E = e => S(e) || N(e),
        L = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {},
        P = Array.isArray,
        O = /(?:-?\.?\d|\.)+/gi,
        z = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        A = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        B = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        D = /[+-]=-?[.\d]+/,
        R = /[^,'"\[\]\s]+/gi,
        V = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
        F = {},
        $ = {},
        U = e => ($ = ke(e, F)) && xa,
        G = (e, t) => console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()"),
        H = (e, t) => !t && console.warn(e),
        q = (e, t) => e && (F[e] = t) && $ && ($[e] = t) || F,
        W = () => 0,
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
          if (C(s) || S(s) || (e = [e]), !(t = (s._gsap || {}).harness)) {
            for (a = se.length; a-- && !se[a].targetTest(s););
            t = se[a]
          }
          for (a = e.length; a--;) e[a] && (e[a]._gsap || (e[a]._gsap = new zt(e[a], t))) || e.splice(a, 1);
          return e
        },
        ne = e => e._gsap || re(Ye(e))[0]._gsap,
        oe = (e, t, a) => (a = e[t]) && S(a) ? e[t]() : T(a) && e.getAttribute && e.getAttribute(t) || a,
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
        fe = () => {
          let e, t, a = Z.length,
            s = Z.slice(0);
          for (J = {}, Z.length = 0, e = 0; e < a; e++) t = s[e], t && t._lazy && (t.render(t._lazy[0], t._lazy[1], !0)._lazy = 0)
        },
        ge = (e, t, a, s) => {
          Z.length && !i && fe(), e.render(t, a, s || i && t < 0 && (e._initted || e._startAt)), Z.length && !i && fe()
        },
        _e = e => {
          let t = parseFloat(e);
          return (t || 0 === t) && (e + "").match(R).length < 2 ? t : N(e) ? e.trim() : e
        },
        pe = e => e,
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
        xe = e => {
          let t = e.parent || n,
            a = e.keyframes ? (s = P(e.keyframes), (e, t) => {
              for (let a in t) a in e || "duration" === a && s || "ease" === a || (e[a] = t[a])
            }) : he;
          var s;
          if (M(e.inherit))
            for (; t;) a(e, t.vars.defaults), t = t.parent || t._dp;
          return e
        },
        ye = function(e, t) {
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
        Se = (e, t) => {
          if (e && (!t || t._end > e._dur || t._start < 0)) {
            let t = e;
            for (; t;) t._dirty = 1, t = t.parent
          }
          return e
        },
        je = (e, t, a, s) => e._startAt && (i ? e._startAt.revert(Y) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(t, !0, s)),
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
          return a && a.smoothChildTiming && e._ts && (e._start = de(a._time - (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)), Ee(e), a._dirty || Se(a, e)), e
        },
        Pe = (e, t) => {
          let a;
          if ((t._time || !t._dur && t._initted || t._start < e._time && (t._dur || !t.add)) && (a = Ie(e.rawTime(), t), (!t._dur || He(0, t.totalDuration(), a) - t._tTime > h) && t.render(a, !0)), Se(e, t)._dp && e._initted && e._time >= e._dur && e._ts) {
            if (e._dur < e.duration())
              for (a = e; a._dp;) a.rawTime() >= 0 && a.totalTime(a._tTime), a = a._dp;
            e._zTime = -1e-8
          }
        },
        Oe = (e, t, a, s) => (t.parent && Ne(t), t._start = de((j(a) ? a : a || e !== n ? $e(e, a, t) : e._time) + t._delay), t._end = de(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)), ye(e, t, "_first", "_last", e._sort ? "_start" : 0), De(t) || (e._recent = t), s || Pe(e, t), e._ts < 0 && Le(e, e._tTime), e),
        ze = (e, t) => (F.ScrollTrigger || G("scrollTrigger", t)) && F.ScrollTrigger.create(t, e),
        Ae = (e, t, a, s, r) => (Ut(e, t, r), e._initted ? !a && e._pt && !i && (e._dur && !1 !== e.vars.lazy || !e._dur && e.vars.lazy) && m !== yt.frame ? (Z.push(e), e._lazy = [r, s], 1) : void 0 : 1),
        Be = e => {
          let {
            parent: t
          } = e;
          return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || Be(t))
        },
        De = e => {
          let {
            data: t
          } = e;
          return "isFromStart" === t || "isStart" === t
        },
        Re = (e, t, a, s) => {
          let i = e._repeat,
            r = de(t) || 0,
            n = e._tTime / e._tDur;
          return n && !s && (e._time *= r / e._dur), e._dur = r, e._tDur = i ? i < 0 ? 1e10 : de(r * (i + 1) + e._rDelay * i) : r, n > 0 && !s && Le(e, e._tTime = e._tDur * n), e.parent && Ee(e), a || Se(e.parent, e), e
        },
        Ve = e => e instanceof Bt ? Se(e) : Re(e, e._dur),
        Fe = {
          _start: 0,
          endTime: W,
          totalDuration: W
        },
        $e = (e, t, a) => {
          let s, i, r, n = e.labels,
            o = e._recent || Fe,
            c = e.duration() >= p ? o.endTime(!1) : e._dur;
          return N(t) && (isNaN(t) || t in n) ? (i = t.charAt(0), r = "%" === t.substr(-1), s = t.indexOf("="), "<" === i || ">" === i ? (s >= 0 && (t = t.replace(/=/, "")), ("<" === i ? o._start : o.endTime(o._repeat >= 0)) + (parseFloat(t.substr(1)) || 0) * (r ? (s < 0 ? o : a).totalDuration() / 100 : 1)) : s < 0 ? (t in n || (n[t] = c), n[t]) : (i = parseFloat(t.charAt(s - 1) + t.substr(s + 1)), r && a && (i = i / 100 * (P(a) ? a[0] : a).totalDuration()), s > 1 ? $e(e, t.substr(0, s - 1), a) + i : c + i)) : null == t ? c : +t
        },
        Ue = (e, t, a) => {
          let s, i, r = j(t[1]),
            n = (r ? 2 : 1) + (e < 2 ? 0 : 1),
            o = t[n];
          if (r && (o.duration = t[1]), o.parent = a, e) {
            for (s = o, i = a; i && !("immediateRender" in s);) s = i.vars.defaults || {}, i = M(i.vars.inherit) && i.parent;
            o.immediateRender = M(s.immediateRender), e < 2 ? o.runBackwards = 1 : o.startAt = t[n - 1]
          }
          return new Xt(t[0], o, t[n + 1])
        },
        Ge = (e, t) => e || 0 === e ? t(e) : t,
        He = (e, t, a) => a < e ? e : a > t ? t : a,
        qe = (e, t) => N(e) && (t = V.exec(e)) ? t[1] : "",
        We = [].slice,
        Xe = (e, t) => e && C(e) && "length" in e && (!t && !e.length || e.length - 1 in e && C(e[0])) && !e.nodeType && e !== o,
        Ye = (e, t, a) => r && !t && r.selector ? r.selector(e) : !N(e) || a || !c && wt() ? P(e) ? function(e, t) {
          let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          return e.forEach((e => N(e) && !t || Xe(e, 1) ? a.push(...Ye(e)) : a.push(e))) || a
        }(e, a) : Xe(e) ? We.call(e, 0) : e ? [e] : [] : We.call((t || l).querySelectorAll(e), 0),
        Ke = e => (e = Ye(e)[0] || H("Invalid scope") || {}, t => {
          let a = e.current || e.nativeElement || e;
          return Ye(t, a.querySelectorAll ? a : a === e ? H("Invalid scope") || l.createElement("div") : e)
        }),
        Qe = e => e.sort((() => .5 - Math.random())),
        Ze = e => {
          if (S(e)) return e;
          let t = C(e) ? e : {
              each: e
            },
            a = It(t.ease),
            s = t.from || 0,
            i = parseFloat(t.base) || 0,
            r = {},
            n = s > 0 && s < 1,
            o = isNaN(s) || n,
            c = t.axis,
            l = s,
            d = s;
          return N(s) ? l = d = {
            center: .5,
            edges: .5,
            end: 1
          } [s] || 0 : !n && o && (l = s[0], d = s[1]), (e, n, m) => {
            let u, f, g, _, h, k, b, v, y, w = (m || t).length,
              N = r[w];
            if (!N) {
              if (y = "auto" === t.grid ? 0 : (t.grid || [1, p])[1], !y) {
                for (b = -p; b < (b = m[y++].getBoundingClientRect().left) && y < w;);
                y--
              }
              for (N = r[w] = [], u = o ? Math.min(y, w) * l - .5 : s % y, f = y === p ? 0 : o ? w * d / y - .5 : s / y | 0, b = 0, v = p, k = 0; k < w; k++) g = k % y - u, _ = f - (k / y | 0), N[k] = h = c ? Math.abs("y" === c ? _ : g) : x(g * g + _ * _), h > b && (b = h), h < v && (v = h);
              "random" === s && Qe(N), N.max = b - v, N.min = v, N.v = w = (parseFloat(t.amount) || parseFloat(t.each) * (y > w ? w - 1 : c ? "y" === c ? w / y : y : Math.max(y, w / y)) || 0) * ("edges" === s ? -1 : 1), N.b = w < 0 ? i - w : i, N.u = qe(t.amount || t.each) || 0, a = a && w < 0 ? Ct(a) : a
            }
            return w = (N[e] - N.min) / N.max || 0, de(N.b + (a ? a(w) : w) * N.v) + N.u
          }
        },
        Je = e => {
          let t = Math.pow(10, ((e + "").split(".")[1] || "").length);
          return a => {
            let s = de(Math.round(parseFloat(a) / e) * e * t);
            return (s - s % 1) / t + (j(a) ? 0 : qe(a))
          }
        },
        et = (e, t) => {
          let a, s, i = P(e);
          return !i && C(e) && (a = i = e.radius || p, e.values ? (e = Ye(e.values), (s = !j(e[0])) && (a *= a)) : e = Je(e.increment)), Ge(t, i ? S(e) ? t => (s = e(t), Math.abs(s - t) <= a ? s : t) : t => {
            let i, r, n = parseFloat(s ? t.x : t),
              o = parseFloat(s ? t.y : 0),
              c = p,
              l = 0,
              d = e.length;
            for (; d--;) s ? (i = e[d].x - n, r = e[d].y - o, i = i * i + r * r) : i = Math.abs(e[d] - n), i < c && (c = i, l = d);
            return l = !a || c <= a ? e[l] : t, s || l === t || j(t) ? l : l + qe(t)
          } : Je(e))
        },
        tt = (e, t, a, s) => Ge(P(e) ? !t : !0 === a ? !!(a = 0) : !s, (() => P(e) ? e[~~(Math.random() * e.length)] : (a = a || 1e-5) && (s = a < 1 ? 10 ** ((a + "").length - 2) : 1) && Math.floor(Math.round((e - a / 2 + Math.random() * (t - e + .99 * a)) / a) * a * s) / s)),
        at = (e, t, a) => Ge(a, (a => e[~~t(a)])),
        st = function(e, t, a) {
          let s = t - e;
          return P(e) ? at(e, st(0, e.length), t) : Ge(a, (t => (s + (t - e) % s) % s + e))
        },
        it = (e, t, a) => {
          let s = t - e,
            i = 2 * s;
          return P(e) ? at(e, it(0, e.length - 1), t) : Ge(a, (t => e + ((t = (i + (t - e) % i) % i || 0) > s ? i - t : t)))
        },
        rt = e => {
          let t, a, s, i, r = 0,
            n = "";
          for (; ~(t = e.indexOf("random(", r));) s = e.indexOf(")", t), i = "[" === e.charAt(t + 7), a = e.substr(t + 7, s - t - 7).match(i ? R : O), n += e.substr(r, t - r) + tt(i ? a : +a[0], i ? 0 : +a[1], +a[2] || 1e-5), r = s + 1;
          return n + e.substr(r, e.length - r)
        },
        nt = (e, t, a, s, i) => {
          let r = t - e,
            n = s - a;
          return Ge(i, (t => a + ((t - e) / r * n || 0)))
        },
        ot = (e, t, a, s) => {
          let i = isNaN(e + t) ? 0 : a => (1 - a) * e + a * t;
          if (!i) {
            let r, n, o, c, l, d = N(e),
              m = {};
            if (!0 === a && (s = 1) && (a = null), d) e = {
              p: e
            }, t = {
              p: t
            };
            else if (P(e) && !P(t)) {
              for (o = [], c = e.length, l = c - 2, n = 1; n < c; n++) o.push(ot(e[n - 1], e[n]));
              c--, i = e => {
                e *= c;
                let t = Math.min(l, ~~e);
                return o[t](e - t)
              }, a = t
            } else s || (e = ke(P(e) ? [] : {}, e));
            if (!o) {
              for (r in t) Ft.call(m, e, r, "get", t[r]);
              i = t => sa(t, m) || (d ? e.p : e)
            }
          }
          return Ge(a, i)
        },
        ct = (e, t, a) => {
          let s, i, r, n = e.labels,
            o = p;
          for (s in n) i = n[s] - t, i < 0 == !!a && i && o > (i = Math.abs(i)) && (r = s, o = i);
          return r
        },
        lt = (e, t, a) => {
          let s, i, n, o = e.vars,
            c = o[t],
            l = r,
            d = e._ctx;
          if (c) return s = o[t + "Params"], i = o.callbackScope || e, a && Z.length && fe(), d && (r = d), n = s ? c.apply(i, s) : c.call(i), r = l, n
        },
        dt = e => (Ne(e), e.scrollTrigger && e.scrollTrigger.kill(!!i), e.progress() < 1 && lt(e, "onInterrupt"), e),
        mt = [],
        ut = e => {
          if (I() && e) {
            let t = (e = !e.name && e.default || e).name,
              a = S(e),
              s = t && !a && e.init ? function() {
                this._props = []
              } : e,
              i = {
                init: W,
                render: sa,
                add: Ft,
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
            q(t, s), e.register && e.register(xa, s, ca)
          } else e && mt.push(e)
        },
        ft = 255,
        gt = {
          aqua: [0, ft, ft],
          lime: [0, ft, 0],
          silver: [192, 192, 192],
          black: [0, 0, 0],
          maroon: [128, 0, 0],
          teal: [0, 128, 128],
          blue: [0, 0, ft],
          navy: [0, 0, 128],
          white: [ft, ft, ft],
          olive: [128, 128, 0],
          yellow: [ft, ft, 0],
          orange: [ft, 165, 0],
          gray: [128, 128, 128],
          purple: [128, 0, 128],
          green: [0, 128, 0],
          red: [ft, 0, 0],
          pink: [ft, 192, 203],
          cyan: [0, ft, ft],
          transparent: [ft, ft, ft, 0]
        },
        _t = (e, t, a) => (6 * (e += e < 0 ? 1 : e > 1 ? -1 : 0) < 1 ? t + (a - t) * e * 6 : e < .5 ? a : 3 * e < 2 ? t + (a - t) * (2 / 3 - e) * 6 : t) * ft + .5 | 0,
        pt = (e, t, a) => {
          let s, i, r, n, o, c, l, d, m, u, f = e ? j(e) ? [e >> 16, e >> 8 & ft, e & ft] : 0 : gt.black;
          if (!f) {
            if ("," === e.substr(-1) && (e = e.substr(0, e.length - 1)), gt[e]) f = gt[e];
            else if ("#" === e.charAt(0)) {
              if (e.length < 6 && (s = e.charAt(1), i = e.charAt(2), r = e.charAt(3), e = "#" + s + s + i + i + r + r + (5 === e.length ? e.charAt(4) + e.charAt(4) : "")), 9 === e.length) return f = parseInt(e.substr(1, 6), 16), [f >> 16, f >> 8 & ft, f & ft, parseInt(e.substr(7), 16) / 255];
              f = [(e = parseInt(e.substr(1), 16)) >> 16, e >> 8 & ft, e & ft]
            } else if ("hsl" === e.substr(0, 3))
              if (f = u = e.match(O), t) {
                if (~e.indexOf("=")) return f = e.match(z), a && f.length < 4 && (f[3] = 1), f
              } else n = +f[0] % 360 / 360, o = +f[1] / 100, c = +f[2] / 100, i = c <= .5 ? c * (o + 1) : c + o - c * o, s = 2 * c - i, f.length > 3 && (f[3] *= 1), f[0] = _t(n + 1 / 3, s, i), f[1] = _t(n, s, i), f[2] = _t(n - 1 / 3, s, i);
            else f = e.match(O) || gt.transparent;
            f = f.map(Number)
          }
          return t && !u && (s = f[0] / ft, i = f[1] / ft, r = f[2] / ft, l = Math.max(s, i, r), d = Math.min(s, i, r), c = (l + d) / 2, l === d ? n = o = 0 : (m = l - d, o = c > .5 ? m / (2 - l - d) : m / (l + d), n = l === s ? (i - r) / m + (i < r ? 6 : 0) : l === i ? (r - s) / m + 2 : (s - i) / m + 4, n *= 60), f[0] = ~~(n + .5), f[1] = ~~(100 * o + .5), f[2] = ~~(100 * c + .5)), a && f.length < 4 && (f[3] = 1), f
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
          let s, i, r, n, o = "",
            c = (e + o).match(bt),
            l = t ? "hsla(" : "rgba(",
            d = 0;
          if (!c) return e;
          if (c = c.map((e => (e = pt(e, t, 1)) && l + (t ? e[0] + "," + e[1] + "%," + e[2] + "%," + e[3] : e.join(",")) + ")")), a && (r = ht(e), s = a.c, s.join(o) !== r.c.join(o)))
            for (i = e.replace(bt, "1").split(A), n = i.length - 1; d < n; d++) o += i[d] + (~s.indexOf(d) ? c.shift() || l + "0,0,0,0)" : (r.length ? r : c.length ? c : a).shift());
          if (!i)
            for (i = e.split(bt), n = i.length - 1; d < n; d++) o += i[d] + c[d];
          return o + i[n]
        },
        bt = function() {
          let e, t = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
          for (e in gt) t += "|" + e + "\\b";
          return new RegExp(t + ")", "gi")
        }(),
        vt = /hsl[a]?\(/,
        xt = e => {
          let t, a = e.join(" ");
          if (bt.lastIndex = 0, bt.test(a)) return t = vt.test(a), e[1] = kt(e[1], t), e[0] = kt(e[0], t, ht(e[1])), !0
        },
        yt = function() {
          let e, t, a, s, i, r, n = Date.now,
            m = 500,
            u = 33,
            g = n(),
            _ = g,
            p = 1e3 / 240,
            h = p,
            k = [],
            b = a => {
              let o, c, l, d, f = n() - _,
                v = !0 === a;
              if (f > m && (g += f - u), _ += f, l = _ - g, o = l - h, (o > 0 || v) && (d = ++s.frame, i = l - 1e3 * s.time, s.time = l /= 1e3, h += o + (o >= p ? 4 : p - o), c = 1), v || (e = t(b)), c)
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
              d && (!c && I() && (o = c = window, l = o.document || {}, F.gsap = xa, (o.gsapVersions || (o.gsapVersions = [])).push(xa.version), U($ || o.GreenSockGlobals || !o.gsap && o || {}), a = o.requestAnimationFrame, mt.forEach(ut)), e && s.sleep(), t = a || (e => setTimeout(e, h - 1e3 * s.time + 1 | 0)), f = 1, b(2))
            },
            sleep() {
              (a ? o.cancelAnimationFrame : clearTimeout)(e), f = 0, t = W
            },
            lagSmoothing(e, t) {
              m = e || 1 / 0, u = Math.min(t || 33, m)
            },
            fps(e) {
              p = 1e3 / (e || 240), h = 1e3 * s.time + p
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
        wt = () => !f && yt.wake(),
        Nt = {},
        St = /^[\d.\-M][\d.\-,\s]/,
        jt = /["']/g,
        Tt = e => {
          let t, a, s, i = {},
            r = e.substr(1, e.length - 3).split(":"),
            n = r[0],
            o = 1,
            c = r.length;
          for (; o < c; o++) a = r[o], t = o !== c - 1 ? a.lastIndexOf(",") : a.length, s = a.substr(0, t), i[n] = isNaN(s) ? s.replace(jt, "").trim() : +s, n = a.substr(t + 1).trim();
          return i
        },
        Ct = e => t => 1 - e(1 - t),
        Mt = (e, t) => {
          let a, s = e._first;
          for (; s;) s instanceof Bt ? Mt(s, t) : !s.vars.yoyoEase || s._yoyo && s._repeat || s._yoyo === t || (s.timeline ? Mt(s.timeline, t) : (a = s._ease, s._ease = s._yEase, s._yEase = a, s._yoyo = t)), s = s._next
        },
        It = (e, t) => e && (S(e) ? e : Nt[e] || (e => {
          let t = (e + "").split("("),
            a = Nt[t[0]];
          return a && t.length > 1 && a.config ? a.config.apply(null, ~e.indexOf("{") ? [Tt(t[1])] : (e => {
            let t = e.indexOf("(") + 1,
              a = e.indexOf(")"),
              s = e.indexOf("(", t);
            return e.substring(t, ~s && s < a ? e.indexOf(")", a + 1) : a)
          })(e).split(",").map(_e)) : Nt._CE && St.test(e) ? Nt._CE("", e) : a
        })(e)) || t,
        Et = function(e, t) {
          let a, s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e => 1 - t(1 - e),
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : e => e < .5 ? t(2 * e) / 2 : 1 - t(2 * (1 - e)) / 2,
            r = {
              easeIn: t,
              easeOut: s,
              easeInOut: i
            };
          return ce(e, (e => {
            Nt[e] = F[e] = r, Nt[a = e.toLowerCase()] = s;
            for (let t in r) Nt[a + ("easeIn" === t ? ".in" : "easeOut" === t ? ".out" : ".inOut")] = Nt[e + "." + t] = r[t]
          })), r
        },
        Lt = e => t => t < .5 ? (1 - e(1 - 2 * t)) / 2 : .5 + e(2 * (t - .5)) / 2,
        Pt = (e, t, a) => {
          let s = t >= 1 ? t : 1,
            i = (a || (e ? .3 : .45)) / (t < 1 ? t : 1),
            r = i / k * (Math.asin(1 / s) || 0),
            n = e => 1 === e ? 1 : s * 2 ** (-10 * e) * w((e - r) * i) + 1,
            o = "out" === e ? n : "in" === e ? e => 1 - n(1 - e) : Lt(n);
          return i = k / i, o.config = (t, a) => Pt(e, t, a), o
        },
        Ot = function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1.70158,
            a = e => e ? --e * e * ((t + 1) * e + t) + 1 : 0,
            s = "out" === e ? a : "in" === e ? e => 1 - a(1 - e) : Lt(a);
          return s.config = t => Ot(e, t), s
        };
      ce("Linear,Quad,Cubic,Quart,Quint,Strong", ((e, t) => {
        let a = t < 5 ? t + 1 : t;
        Et(e + ",Power" + (a - 1), t ? e => e ** a : e => e, (e => 1 - (1 - e) ** a), (e => e < .5 ? (2 * e) ** a / 2 : 1 - (2 * (1 - e)) ** a / 2))
      })), Nt.Linear.easeNone = Nt.none = Nt.Linear.easeIn, Et("Elastic", Pt("in"), Pt("out"), Pt()), ((e, t) => {
        let a = a => a < .36363636363636365 ? e * a * a : a < .7272727272727273 ? e * (a - 1.5 / t) ** 2 + .75 : a < .9090909090909092 ? e * (a -= 2.25 / t) * a + .9375 : e * (a - 2.625 / t) ** 2 + .984375;
        Et("Bounce", (e => 1 - a(1 - e)), a)
      })(7.5625, 2.75), Et("Expo", (e => e ? 2 ** (10 * (e - 1)) : 0)), Et("Circ", (e => -(x(1 - e * e) - 1))), Et("Sine", (e => 1 === e ? 1 : 1 - y(e * b))), Et("Back", Ot("in"), Ot("out"), Ot()), Nt.SteppedEase = Nt.steps = F.SteppedEase = {
        config() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            t = arguments.length > 1 ? arguments[1] : void 0,
            a = 1 / e,
            s = e + (t ? 0 : 1),
            i = t ? 1 : 0;
          return e => ((s * He(0, .99999999, e) | 0) + i) * a
        }
      }, _.ease = Nt["quad.out"], ce("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", (e => ie += e + "," + e + "Params,"));
      class zt {
        constructor(e, t) {
          this.id = v++, e._gsap = this, this.target = e, this.harness = t, this.get = t ? t.get : oe, this.set = t ? t.getSetter : Jt
        }
      }
      class At {
        constructor(e) {
          this.vars = e, this._delay = +e.delay || 0, (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) && (this._rDelay = e.repeatDelay || 0, this._yoyo = !!e.yoyo || !!e.yoyoEase), this._ts = 1, Re(this, +e.duration, 1, 1), this.data = e.data, r && (this._ctx = r, r.data.push(this)), f || yt.wake()
        }
        delay(e) {
          return e || 0 === e ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + e - this._delay), this._delay = e, this) : this._delay
        }
        duration(e) {
          return arguments.length ? this.totalDuration(this._repeat > 0 ? e + (e + this._rDelay) * this._repeat : e) : this.totalDuration() && this._dur
        }
        totalDuration(e) {
          return arguments.length ? (this._dirty = 0, Re(this, this._repeat < 0 ? e : (e - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
        }
        totalTime(e, t) {
          if (wt(), !arguments.length) return this._tTime;
          let a = this._dp;
          if (a && a.smoothChildTiming && this._ts) {
            for (Le(this, e), !a._dp || a.parent || Pe(a, this); a && a.parent;) a.parent._time !== a._start + (a._ts >= 0 ? a._tTime / a._ts : (a.totalDuration() - a._tTime) / -a._ts) && a.totalTime(a._tTime, !0), a = a.parent;
            !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && e < this._tDur || this._ts < 0 && e > 0 || !this._tDur && !e) && Oe(this._dp, this, this._start - this._delay)
          }
          return (this._tTime !== e || !this._dur && !t || this._initted && Math.abs(this._zTime) === h || !e && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = e), ge(this, e, t)), this
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
            return t && (t._sort || !this.parent) && Oe(t, this, e - this._delay), this
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
          return arguments.length ? (this._repeat = e === 1 / 0 ? -2 : e, Ve(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
        }
        repeatDelay(e) {
          if (arguments.length) {
            let t = this._time;
            return this._rDelay = e, Ve(this), t ? this.time(t) : this
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
            let s = S(e) ? e : pe,
              i = () => {
                let e = t.then;
                t.then = null, S(s) && (s = s(t)) && (s.then || s === t) && (t.then = e), a(s), t.then = e
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
      class Bt extends At {
        constructor() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = arguments.length > 1 ? arguments[1] : void 0;
          super(e), this.labels = {}, this.smoothChildTiming = !!e.smoothChildTiming, this.autoRemoveChildren = !!e.autoRemoveChildren, this._sort = M(e.sortChildren), n && Oe(e.parent || n, this, t), e.reversed && this.reverse(), e.paused && this.paused(!0), e.scrollTrigger && ze(this, e.scrollTrigger)
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
          return t.duration = 0, t.parent = this, xe(t).repeatDelay || (t.repeat = 0), t.immediateRender = !!t.immediateRender, new Xt(e, t, $e(this, a), 1), this
        }
        call(e, t, a) {
          return Oe(this, Xt.delayedCall(0, e, t), a)
        }
        staggerTo(e, t, a, s, i, r, n) {
          return a.duration = t, a.stagger = a.stagger || s, a.onComplete = r, a.onCompleteParams = n, a.parent = this, new Xt(e, a, $e(this, i)), this
        }
        staggerFrom(e, t, a, s, i, r, n) {
          return a.runBackwards = 1, xe(a).immediateRender = M(a.immediateRender), this.staggerTo(e, t, a, s, i, r, n)
        }
        staggerFromTo(e, t, a, s, i, r, n, o) {
          return s.startAt = a, xe(s).immediateRender = M(s.immediateRender), this.staggerTo(e, t, s, i, r, n, o)
        }
        render(e, t, a) {
          let s, r, o, c, l, d, m, u, f, g, _, p, k = this._time,
            b = this._dirty ? this.totalDuration() : this._tDur,
            v = this._dur,
            x = e <= 0 ? 0 : de(e),
            y = this._zTime < 0 != e < 0 && (this._initted || !v);
          if (this !== n && x > b && e >= 0 && (x = b), x !== this._tTime || a || y) {
            if (k !== this._time && v && (x += this._time - k, e += this._time - k), s = x, f = this._start, u = this._ts, d = !u, y && (v || (k = this._zTime), (e || !t) && (this._zTime = e)), this._repeat) {
              if (_ = this._yoyo, l = v + this._rDelay, this._repeat < -1 && e < 0) return this.totalTime(100 * l + e, t, a);
              if (s = de(x % l), x === b ? (c = this._repeat, s = v) : (c = ~~(x / l), c && c === x / l && (s = v, c--), s > v && (s = v)), g = Me(this._tTime, l), !k && this._tTime && g !== c && this._tTime - g * l - this._dur <= 0 && (g = c), _ && 1 & c && (s = v - s, p = 1), c !== g && !this._lock) {
                let e = _ && 1 & g,
                  a = e === (_ && 1 & c);
                if (c < g && (e = !e), k = e ? 0 : x % v ? v : x, this._lock = 1, this.render(k || (p ? 0 : de(c * l)), t, !v)._lock = 0, this._tTime = x, !t && this.parent && lt(this, "onRepeat"), this.vars.repeatRefresh && !p && (this.invalidate()._lock = 1), k && k !== this._time || d !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                if (v = this._dur, b = this._tDur, a && (this._lock = 2, k = e ? v : -1e-4, this.render(k, !0), this.vars.repeatRefresh && !p && this.invalidate()), this._lock = 0, !this._ts && !d) return this;
                Mt(this, p)
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
              })(this, de(k), de(s)), m && (x -= s - (s = m._start))), this._tTime = x, this._time = s, this._act = !u, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = e, k = 0), !k && s && !t && !c && (lt(this, "onStart"), this._tTime !== x)) return this;
            if (s >= k && e >= 0)
              for (r = this._first; r;) {
                if (o = r._next, (r._act || s >= r._start) && r._ts && m !== r) {
                  if (r.parent !== this) return this.render(e, t, a);
                  if (r.render(r._ts > 0 ? (s - r._start) * r._ts : (r._dirty ? r.totalDuration() : r._tDur) + (s - r._start) * r._ts, t, a), s !== this._time || !this._ts && !d) {
                    m = 0, o && (x += this._zTime = -1e-8);
                    break
                  }
                }
                r = o
              } else {
                r = this._last;
                let n = e < 0 ? e : s;
                for (; r;) {
                  if (o = r._prev, (r._act || n <= r._end) && r._ts && m !== r) {
                    if (r.parent !== this) return this.render(e, t, a);
                    if (r.render(r._ts > 0 ? (n - r._start) * r._ts : (r._dirty ? r.totalDuration() : r._tDur) + (n - r._start) * r._ts, t, a || i && (r._initted || r._startAt)), s !== this._time || !this._ts && !d) {
                      m = 0, o && (x += this._zTime = n ? -1e-8 : h);
                      break
                    }
                  }
                  r = o
                }
              }
            if (m && !t && (this.pause(), m.render(s >= k ? 0 : -1e-8)._zTime = s >= k ? 1 : -1, this._ts)) return this._start = f, Ee(this), this.render(e, t, a);
            this._onUpdate && !t && lt(this, "onUpdate", !0), (x === b && this._tTime >= this.totalDuration() || !x && k) && (f !== this._start && Math.abs(u) === Math.abs(this._ts) || this._lock || ((e || !v) && (x === b && this._ts > 0 || !x && this._ts < 0) && Ne(this, 1), t || e < 0 && !k || !x && !k && b || (lt(this, x === b && e >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(x < b && this.timeScale() > 0) && this._prom())))
          }
          return this
        }
        add(e, t) {
          if (j(t) || (t = $e(this, t, e)), !(e instanceof At)) {
            if (P(e)) return e.forEach((e => this.add(e, t))), this;
            if (N(e)) return this.addLabel(e, t);
            if (!S(e)) return this;
            e = Xt.delayedCall(0, e)
          }
          return this !== e ? Oe(this, e, t) : this
        }
        getChildren() {
          let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            a = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
            s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -p,
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
          return N(e) ? this.removeLabel(e) : S(e) ? this.killTweensOf(e) : (we(this, e), e === this._recent && (this._recent = this._last), Se(this))
        }
        totalTime(e, t) {
          return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = de(yt.time - (this._ts > 0 ? e / this._ts : (this.totalDuration() - e) / -this._ts))), super.totalTime(e, t), this._forcing = 0, this) : this._tTime
        }
        addLabel(e, t) {
          return this.labels[e] = $e(this, t), this
        }
        removeLabel(e) {
          return delete this.labels[e], this
        }
        addPause(e, t, a) {
          let s = Xt.delayedCall(0, t || W, a);
          return s.data = "isPause", this._hasPause = 1, Oe(this, s, $e(this, e))
        }
        removePause(e) {
          let t = this._first;
          for (e = $e(this, e); t;) t._start === e && "isPause" === t.data && Ne(t), t = t._next
        }
        killTweensOf(e, t, a) {
          let s = this.getTweensOf(e, a),
            i = s.length;
          for (; i--;) Dt !== s[i] && s[i].kill(e, t);
          return this
        }
        getTweensOf(e, t) {
          let a, s = [],
            i = Ye(e),
            r = this._first,
            n = j(t);
          for (; r;) r instanceof Xt ? ue(r._targets, i) && (n ? (!Dt || r._initted && r._ts) && r.globalTime(0) <= t && r.globalTime(r.totalDuration()) > t : !t || r.isActive()) && s.push(r) : (a = r.getTweensOf(i, t)).length && s.push(...a), r = r._next;
          return s
        }
        tweenTo(e, t) {
          t = t || {};
          let a, s = this,
            i = $e(s, e),
            {
              startAt: r,
              onStart: n,
              onStartParams: o,
              immediateRender: c
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
                  l._dur !== e && Re(l, e, 0, 1).render(l._time, !0, !0), a = 1
                }
                n && n.apply(l, o || [])
              }
            }, t));
          return c ? l.render(0) : l
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
          return ct(this, $e(this, e))
        }
        previousLabel() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._time;
          return ct(this, $e(this, e), 1)
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
          return Se(this)
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
          return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), Se(this)
        }
        totalDuration(e) {
          let t, a, s, i = 0,
            r = this,
            o = r._last,
            c = p;
          if (arguments.length) return r.timeScale((r._repeat < 0 ? r.duration() : r.totalDuration()) / (r.reversed() ? -e : e));
          if (r._dirty) {
            for (s = r.parent; o;) t = o._prev, o._dirty && o.totalDuration(), a = o._start, a > c && r._sort && o._ts && !r._lock ? (r._lock = 1, Oe(r, o, a - o._delay, 1)._lock = 0) : c = a, a < 0 && o._ts && (i -= a, (!s && !r._dp || s && s.smoothChildTiming) && (r._start += a / r._ts, r._time -= a, r._tTime -= a), r.shiftChildren(-a, !1, -Infinity), c = 0), o._end > i && o._ts && (i = o._end), o = t;
            Re(r, r === n && r._time > i ? r._time : i, 1, 1), r._dirty = 0
          }
          return r._tDur
        }
        static updateRoot(e) {
          if (n._ts && (ge(n, Ie(e, n)), m = yt.frame), yt.frame >= ae) {
            ae += g.autoSleep || 120;
            let e = n._first;
            if ((!e || !e._ts) && g.autoSleep && yt._listeners.length < 2) {
              for (; e && !e._ts;) e = e._next;
              e || yt.sleep()
            }
          }
        }
      }
      he(Bt.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
      });
      let Dt, Rt, Vt = function(e, t, a, s, i, r, n) {
          let o, c, l, d, m, u, f, g, _ = new ca(this._pt, e, t, 0, 1, aa, null, i),
            p = 0,
            h = 0;
          for (_.b = a, _.e = s, a += "", (f = ~(s += "").indexOf("random(")) && (s = rt(s)), r && (g = [a, s], r(g, e, t), a = g[0], s = g[1]), c = a.match(B) || []; o = B.exec(s);) d = o[0], m = s.substring(p, o.index), l ? l = (l + 1) % 5 : "rgba(" === m.substr(-5) && (l = 1), d !== c[h++] && (u = parseFloat(c[h - 1]) || 0, _._pt = {
            _next: _._pt,
            p: m || 1 === h ? m : ",",
            s: u,
            c: "=" === d.charAt(1) ? me(u, d) - u : parseFloat(d) - u,
            m: l && l < 4 ? Math.round : 0
          }, p = B.lastIndex);
          return _.c = p < s.length ? s.substring(p, s.length) : "", _.fp = n, (D.test(s) || f) && (_.e = 0), this._pt = _, _
        },
        Ft = function(e, t, a, s, i, r, n, o, c, l) {
          S(s) && (s = s(i || 0, e, r));
          let d, m = e[t],
            u = "get" !== a ? a : S(m) ? c ? e[t.indexOf("set") || !S(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](c) : e[t]() : m,
            f = S(m) ? c ? Qt : Kt : Yt;
          if (N(s) && (~s.indexOf("random(") && (s = rt(s)), "=" === s.charAt(1) && (d = me(u, s) + (qe(u) || 0), (d || 0 === d) && (s = d))), !l || u !== s || Rt) return isNaN(u * s) || "" === s ? (!m && !(t in e) && G(t, s), Vt.call(this, e, t, u, s, f, o || g.stringFilter, c)) : (d = new ca(this._pt, e, t, +u || 0, s - (u || 0), "boolean" == typeof m ? ta : ea, 0, f), c && (d.fp = c), n && d.modifier(n, this, e), this._pt = d)
        },
        $t = (e, t, a, s, i, r) => {
          let n, o, c, l;
          if (ee[e] && !1 !== (n = new ee[e]).init(i, n.rawVars ? t[e] : ((e, t, a, s, i) => {
              if (S(e) && (e = Ht(e, i, t, a, s)), !C(e) || e.style && e.nodeType || P(e) || L(e)) return N(e) ? Ht(e, i, t, a, s) : e;
              let r, n = {};
              for (r in e) n[r] = Ht(e[r], i, t, a, s);
              return n
            })(t[e], s, i, r, a), a, s, r) && (a._pt = o = new ca(a._pt, i, e, 0, 1, n.render, n, 0, n.priority), a !== u))
            for (c = a._ptLookup[a._targets.indexOf(i)], l = n._props.length; l--;) c[n._props[l]] = o;
          return n
        },
        Ut = (e, t, a) => {
          let r, o, c, l, d, m, u, f, g, k, b, v, x, y = e.vars,
            {
              ease: w,
              startAt: N,
              immediateRender: S,
              lazy: j,
              onUpdate: T,
              onUpdateParams: C,
              callbackScope: I,
              runBackwards: E,
              yoyoEase: L,
              keyframes: P,
              autoRevert: O
            } = y,
            z = e._dur,
            A = e._startAt,
            B = e._targets,
            D = e.parent,
            R = D && "nested" === D.data ? D.vars.targets : B,
            V = "auto" === e._overwrite && !s,
            F = e.timeline;
          if (F && (!P || !w) && (w = "none"), e._ease = It(w, _.ease), e._yEase = L ? Ct(It(!0 === L ? w : L, _.ease)) : 0, L && e._yoyo && !e._repeat && (L = e._yEase, e._yEase = e._ease, e._ease = L), e._from = !F && !!y.runBackwards, !F || P && !y.stagger) {
            if (f = B[0] ? ne(B[0]).harness : 0, v = f && y[f.prop], r = ve(y, Q), A && (A._zTime < 0 && A.progress(1), t < 0 && E && S && !O ? A.render(-1, !0) : A.revert(E && z ? Y : X), A._lazy = 0), N) {
              if (Ne(e._startAt = Xt.set(B, he({
                  data: "isStart",
                  overwrite: !1,
                  parent: D,
                  immediateRender: !0,
                  lazy: !A && M(j),
                  startAt: null,
                  delay: 0,
                  onUpdate: T,
                  onUpdateParams: C,
                  callbackScope: I,
                  stagger: 0
                }, N))), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (i || !S && !O) && e._startAt.revert(Y), S && z && t <= 0 && a <= 0) return void(t && (e._zTime = t))
            } else if (E && z && !A)
              if (t && (S = !1), c = he({
                  overwrite: !1,
                  data: "isFromStart",
                  lazy: S && !A && M(j),
                  immediateRender: S,
                  stagger: 0,
                  parent: D
                }, r), v && (c[f.prop] = v), Ne(e._startAt = Xt.set(B, c)), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (i ? e._startAt.revert(Y) : e._startAt.render(-1, !0)), e._zTime = t, S) {
                if (!t) return
              } else Ut(e._startAt, h, h);
            for (e._pt = e._ptCache = 0, j = z && M(j) || j && !z, o = 0; o < B.length; o++) {
              if (d = B[o], u = d._gsap || re(B)[o]._gsap, e._ptLookup[o] = k = {}, J[u.id] && Z.length && fe(), b = R === B ? o : R.indexOf(d), f && !1 !== (g = new f).init(d, v || r, e, b, R) && (e._pt = l = new ca(e._pt, d, g.name, 0, 1, g.render, g, 0, g.priority), g._props.forEach((e => {
                  k[e] = l
                })), g.priority && (m = 1)), !f || v)
                for (c in r) ee[c] && (g = $t(c, r, e, b, d, R)) ? g.priority && (m = 1) : k[c] = l = Ft.call(e, d, c, "get", r[c], b, R, 0, y.stringFilter);
              e._op && e._op[o] && e.kill(d, e._op[o]), V && e._pt && (Dt = e, n.killTweensOf(d, k, e.globalTime(t)), x = !e.parent, Dt = 0), e._pt && j && (J[u.id] = 1)
            }
            m && oa(e), e._onInit && e._onInit(e)
          }
          e._onUpdate = T, e._initted = (!e._op || e._pt) && !x, P && t <= 0 && F.render(p, !0, !0)
        },
        Gt = (e, t, a, s) => {
          let i, r, n = t.ease || s || "power1.inOut";
          if (P(t)) r = a[e] || (a[e] = []), t.forEach(((e, a) => r.push({
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
        Ht = (e, t, a, s, i) => S(e) ? e.call(t, a, s, i) : N(e) && ~e.indexOf("random(") ? rt(e) : e,
        qt = ie + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
        Wt = {};
      ce(qt + ",id,stagger,delay,duration,paused,scrollTrigger", (e => Wt[e] = 1));
      class Xt extends At {
        constructor(e, t, a, i) {
          "number" == typeof t && (a.duration = t, t = a, a = null), super(i ? t : xe(t));
          let r, o, c, l, d, m, u, f, {
              duration: _,
              delay: p,
              immediateRender: h,
              stagger: k,
              overwrite: b,
              keyframes: v,
              defaults: x,
              scrollTrigger: y,
              yoyoEase: w
            } = this.vars,
            N = t.parent || n,
            S = (P(e) || L(e) ? j(e[0]) : "length" in t) ? [e] : Ye(e);
          if (this._targets = S.length ? re(S) : H("GSAP target " + e + " not found. https://greensock.com", !g.nullTargetWarn) || [], this._ptLookup = [], this._overwrite = b, v || k || E(_) || E(p)) {
            if (t = this.vars, r = this.timeline = new Bt({
                data: "nested",
                defaults: x || {},
                targets: N && "nested" === N.data ? N.vars.targets : S
              }), r.kill(), r.parent = r._dp = this, r._start = 0, k || E(_) || E(p)) {
              if (l = S.length, u = k && Ze(k), C(k))
                for (d in k) ~qt.indexOf(d) && (f || (f = {}), f[d] = k[d]);
              for (o = 0; o < l; o++) c = ve(t, Wt), c.stagger = 0, w && (c.yoyoEase = w), f && ke(c, f), m = S[o], c.duration = +Ht(_, this, o, m, S), c.delay = (+Ht(p, this, o, m, S) || 0) - this._delay, !k && 1 === l && c.delay && (this._delay = p = c.delay, this._start += p, c.delay = 0), r.to(m, c, u ? u(o, m, S) : 0), r._ease = Nt.none;
              r.duration() ? _ = p = 0 : this.timeline = 0
            } else if (v) {
              xe(he(r.vars.defaults, {
                ease: "none"
              })), r._ease = It(v.ease || t.ease || "none");
              let e, a, s, i = 0;
              if (P(v)) v.forEach((e => r.to(S, e, ">"))), r.duration();
              else {
                for (d in c = {}, v) "ease" === d || "easeEach" === d || Gt(d, v[d], c, v.easeEach);
                for (d in c)
                  for (e = c[d].sort(((e, t) => e.t - t.t)), i = 0, o = 0; o < e.length; o++) a = e[o], s = {
                    ease: a.e,
                    duration: (a.t - (o ? e[o - 1].t : 0)) / 100 * _
                  }, s[d] = a.v, r.to(S, s, i), i += s.duration;
                r.duration() < _ && r.to({}, {
                  duration: _ - r.duration()
                })
              }
            }
            _ || this.duration(_ = r.duration())
          } else this.timeline = 0;
          !0 !== b || s || (Dt = this, n.killTweensOf(S), Dt = 0), Oe(N, this, a), t.reversed && this.reverse(), t.paused && this.paused(!0), (h || !_ && !v && this._start === de(N._time) && M(h) && Te(this) && "nested" !== N.data) && (this._tTime = -1e-8, this.render(Math.max(0, -p) || 0)), y && ze(this, y)
        }
        render(e, t, a) {
          let s, r, n, o, c, l, d, m, u, f = this._time,
            g = this._tDur,
            _ = this._dur,
            p = e < 0,
            k = e > g - h && !p ? g : e < h ? 0 : e;
          if (_) {
            if (k !== this._tTime || !e || a || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== p) {
              if (s = k, m = this.timeline, this._repeat) {
                if (o = _ + this._rDelay, this._repeat < -1 && p) return this.totalTime(100 * o + e, t, a);
                if (s = de(k % o), k === g ? (n = this._repeat, s = _) : (n = ~~(k / o), n && n === k / o && (s = _, n--), s > _ && (s = _)), l = this._yoyo && 1 & n, l && (u = this._yEase, s = _ - s), c = Me(this._tTime, o), s === f && !a && this._initted) return this._tTime = k, this;
                n !== c && (m && this._yEase && Mt(m, l), !this.vars.repeatRefresh || l || this._lock || (this._lock = a = 1, this.render(de(o * n), !0).invalidate()._lock = 0))
              }
              if (!this._initted) {
                if (Ae(this, p ? e : s, a, t, k)) return this._tTime = 0, this;
                if (f !== this._time) return this;
                if (_ !== this._dur) return this.render(e, t, a)
              }
              if (this._tTime = k, this._time = s, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = d = (u || this._ease)(s / _), this._from && (this.ratio = d = 1 - d), s && !f && !t && !n && (lt(this, "onStart"), this._tTime !== k)) return this;
              for (r = this._pt; r;) r.r(d, r.d), r = r._next;
              m && m.render(e < 0 ? e : !s && l ? -1e-8 : m._dur * m._ease(s / this._dur), t, a) || this._startAt && (this._zTime = e), this._onUpdate && !t && (p && je(this, e, 0, a), lt(this, "onUpdate")), this._repeat && n !== c && this.vars.onRepeat && !t && this.parent && lt(this, "onRepeat"), k !== this._tDur && k || this._tTime !== k || (p && !this._onUpdate && je(this, e, 0, !0), (e || !_) && (k === this._tDur && this._ts > 0 || !k && this._ts < 0) && Ne(this, 1), t || p && !f || !(k || f || l) || (lt(this, k === g ? "onComplete" : "onReverseComplete", !0), this._prom && !(k < g && this.timeScale() > 0) && this._prom()))
            }
          } else((e, t, a, s) => {
            let r, n, o, c = e.ratio,
              l = t < 0 || !t && (!e._start && Be(e) && (e._initted || !De(e)) || (e._ts < 0 || e._dp._ts < 0) && !De(e)) ? 0 : 1,
              d = e._rDelay,
              m = 0;
            if (d && e._repeat && (m = He(0, e._tDur, t), n = Me(m, d), e._yoyo && 1 & n && (l = 1 - l), n !== Me(e._tTime, d) && (c = 1 - l, e.vars.repeatRefresh && e._initted && e.invalidate())), l !== c || i || s || e._zTime === h || !t && e._zTime) {
              if (!e._initted && Ae(e, t, s, a, m)) return;
              for (o = e._zTime, e._zTime = t || (a ? h : 0), a || (a = t && !o), e.ratio = l, e._from && (l = 1 - l), e._time = 0, e._tTime = m, r = e._pt; r;) r.r(l, r.d), r = r._next;
              t < 0 && je(e, t, 0, !0), e._onUpdate && !a && lt(e, "onUpdate"), m && e._repeat && !a && e.parent && lt(e, "onRepeat"), (t >= e._tDur || t < 0) && e.ratio === l && (l && Ne(e, 1), a || i || (lt(e, l ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()))
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
          f || yt.wake(), this._ts || this.play();
          let i, r = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
          return this._initted || Ut(this, r), i = this._ease(r / this._dur), ((e, t, a, s, i, r, n) => {
            let o, c, l, d, m = (e._pt && e._ptCache || (e._ptCache = {}))[t];
            if (!m)
              for (m = e._ptCache[t] = [], l = e._ptLookup, d = e._targets.length; d--;) {
                if (o = l[d][t], o && o.d && o.d._pt)
                  for (o = o.d._pt; o && o.p !== t && o.fp !== t;) o = o._next;
                if (!o) return Rt = 1, e.vars[t] = "+=0", Ut(e, n), Rt = 0, 1;
                m.push(o)
              }
            for (d = m.length; d--;) c = m[d], o = c._pt || c, o.s = !s && 0 !== s || i ? o.s + (s || 0) + r * o.c : s, o.c = a - o.s, c.e && (c.e = le(a) + qe(c.e)), c.b && (c.b = o.s + qe(c.b))
          })(this, e, t, a, s, i, r) ? this.resetTo(e, t, a, s) : (Le(this, 0), this.parent || ye(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
        }
        kill(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "all";
          if (!(e || t && "all" !== t)) return this._lazy = this._pt = 0, this.parent ? dt(this) : this;
          if (this.timeline) {
            let a = this.timeline.totalDuration();
            return this.timeline.killTweensOf(e, t, Dt && !0 !== Dt.vars.overwrite)._first || dt(this), this.parent && a !== this.timeline.totalDuration() && Re(this, this._dur * this.timeline._tDur / a, 0, 1), this
          }
          let a, s, i, r, n, o, c, l = this._targets,
            d = e ? Ye(e) : l,
            m = this._ptLookup,
            u = this._pt;
          if ((!t || "all" === t) && ((e, t) => {
              let a = e.length,
                s = a === t.length;
              for (; s && a-- && e[a] === t[a];);
              return a < 0
            })(l, d)) return "all" === t && (this._pt = 0), dt(this);
          for ((a = this._op = this._op || [], "all" !== t && (N(t) && (n = {}, ce(t, (e => n[e] = 1)), t = n), t = ((e, t) => {
              let a, s, i, r, n = e[0] ? ne(e[0]).harness : 0,
                o = n && n.aliases;
              if (!o) return t;
              for (s in a = ke({}, t), o)
                if (s in a)
                  for (r = o[s].split(","), i = r.length; i--;) a[r[i]] = a[s];
              return a
            })(l, t)), c = l.length); c--;)
            if (~d.indexOf(l[c]))
              for (n in s = m[c], "all" === t ? (a[c] = t, r = s, i = {}) : (i = a[c] = a[c] || {}, r = t), r) o = s && s[n], o && ("kill" in o.d && !0 !== o.d.kill(n) || we(this, o, "_pt"), delete s[n]), "all" !== i && (i[n] = 1);
          return this._initted && !this._pt && u && dt(this), this
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
      }), ce("staggerTo,staggerFrom,staggerFromTo", (e => {
        Xt[e] = function() {
          let t = new Bt,
            a = We.call(arguments, 0);
          return a.splice("staggerFromTo" === e ? 5 : 4, 0, 0), t[e].apply(t, a)
        }
      }));
      let Yt = (e, t, a) => e[t] = a,
        Kt = (e, t, a) => e[t](a),
        Qt = (e, t, a, s) => e[t](s.fp, a),
        Zt = (e, t, a) => e.setAttribute(t, a),
        Jt = (e, t) => S(e[t]) ? Kt : T(e[t]) && e.setAttribute ? Zt : Yt,
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
        oa = e => {
          let t, a, s, i, r = e._pt;
          for (; r;) {
            for (t = r._next, a = s; a && a.pr > r.pr;) a = a._next;
            (r._prev = a ? a._prev : i) ? r._prev._next = r: s = r, (r._next = a) ? a._prev = r : i = r, r = t
          }
          e._pt = s
        };
      class ca {
        constructor(e, t, a, s, i, r, n, o, c) {
          this.t = t, this.s = s, this.c = i, this.p = a, this.r = r || ea, this.d = n || this, this.set = o || Yt, this.pr = c || 0, this._next = e, e && (e._prev = this)
        }
        modifier(e, t, a) {
          this.mSet = this.mSet || this.set, this.set = na, this.m = e, this.mt = a, this.tween = t
        }
      }
      ce(ie + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", (e => Q[e] = 1)), F.TweenMax = F.TweenLite = Xt, F.TimelineLite = F.TimelineMax = Bt, n = new Bt({
        sortChildren: !1,
        defaults: _,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
      }), g.stringFilter = xt;
      let la = [],
        da = {},
        ma = [],
        ua = 0,
        fa = 0,
        ga = e => (da[e] || ma).map((e => e())),
        _a = () => {
          let e = Date.now(),
            t = [];
          e - ua > 2 && (ga("matchMediaInit"), la.forEach((e => {
            let a, s, i, r, n = e.queries,
              c = e.conditions;
            for (s in n) a = o.matchMedia(n[s]).matches, a && (i = 1), a !== c[s] && (c[s] = a, r = 1);
            r && (e.revert(), i && t.push(e))
          })), ga("matchMediaRevert"), t.forEach((e => e.onMatch(e))), ua = e, ga("matchMedia"))
        };
      class pa {
        constructor(e, t) {
          this.selector = t && Ke(t), this.data = [], this._r = [], this.isReverted = !1, this.id = fa++, e && this.add(e)
        }
        add(e, t, a) {
          S(e) && (a = t, t = e, e = S);
          let s = this,
            i = function() {
              let e, i = r,
                n = s.selector;
              return i && i !== s && i.data.push(s), a && (s.selector = Ke(a)), r = s, e = t.apply(s, arguments), S(e) && s._r.push(e), r = i, s.selector = n, s.isReverted = !1, e
            };
          return s.last = i, e === S ? i(s) : e ? s[e] = i : i
        }
        ignore(e) {
          let t = r;
          r = null, e(this), r = t
        }
        getTweens() {
          let e = [];
          return this.data.forEach((t => t instanceof pa ? e.push(...t.getTweens()) : t instanceof Xt && !(t.parent && "nested" === t.parent.data) && e.push(t))), e
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
          let s, i, n, c = new pa(0, a || this.scope),
            l = c.conditions = {};
          for (i in r && !c.selector && (c.selector = r.selector), this.contexts.push(c), t = c.add("onMatch", t), c.queries = e, e) "all" === i ? n = 1 : (s = o.matchMedia(e[i]), s && (la.indexOf(c) < 0 && la.push(c), (l[i] = s.matches) && (n = 1), s.addListener ? s.addListener(_a) : s.addEventListener("change", _a)));
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
        timeline: e => new Bt(e),
        getTweensOf: (e, t) => n.getTweensOf(e, t),
        getProperty(e, t, a, s) {
          N(e) && (e = Ye(e)[0]);
          let i = ne(e || {}).get,
            r = a ? pe : _e;
          return "native" === a && (a = ""), e ? t ? r((ee[t] && ee[t].get || i)(e, t, a, s)) : (t, a, s) => r((ee[t] && ee[t].get || i)(e, t, a, s)) : e
        },
        quickSetter(e, t, a) {
          if ((e = Ye(e)).length > 1) {
            let s = e.map((e => xa.quickSetter(e, t, a))),
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
              u._pt = 0, i.init(e, a ? t + a : t, u, 0, [e]), i.render(1, i), u._pt && sa(1, u)
            } : i.set(e, r);
          return s ? n : t => n(e, r, a ? t + a : t, i, 1)
        },
        quickTo(e, t, a) {
          let s = xa.to(e, ke({
              [t]: "+=0.1",
              paused: !0
            }, a || {})),
            i = (e, a, i) => s.resetTo(t, e, a, i);
          return i.tween = s, i
        },
        isTweening: e => n.getTweensOf(e, !0).length > 0,
        defaults: e => (e && e.ease && (e.ease = It(e.ease, _.ease)), be(_, e || {})),
        config: e => be(g, e || {}),
        registerEffect(e) {
          let {
            name: t,
            effect: a,
            plugins: s,
            defaults: i,
            extendTimeline: r
          } = e;
          (s || "").split(",").forEach((e => e && !ee[e] && !F[e] && H(t + " effect requires " + e + " plugin."))), te[t] = (e, t, s) => a(Ye(e), he(t || {}, i), s), r && (Bt.prototype[t] = function(e, a, s) {
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
            i = new Bt(a);
          for (i.smoothChildTiming = M(a.smoothChildTiming), n.remove(i), i._dp = 0, i._time = i._tTime = n._time, e = n._first; e;) t = e._next, !s && !e._dur && e instanceof Xt && e.vars.onComplete === e._targets[0] || Oe(i, e, e._start - e._delay), e = t;
          return Oe(n, i, 0), i
        },
        context: (e, t) => e ? new pa(e, t) : r,
        matchMedia: e => new ha(e),
        matchMediaRefresh: () => la.forEach((e => {
          let t, a, s = e.conditions;
          for (a in s) s[a] && (s[a] = !1, t = 1);
          t && e.revert()
        })) || _a(),
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
          getUnit: qe,
          clamp: (e, t, a) => Ge(a, (a => He(e, t, a))),
          splitColor: pt,
          toArray: Ye,
          selector: Ke,
          mapRange: nt,
          pipe: function() {
            for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
            return e => t.reduce(((e, t) => t(e)), e)
          },
          unitize: (e, t) => a => e(parseFloat(a)) + (t || qe(a)),
          interpolate: ot,
          shuffle: Qe
        },
        install: U,
        effects: te,
        ticker: yt,
        updateRoot: Bt.updateRoot,
        plugins: ee,
        globalTimeline: n,
        core: {
          PropTween: ca,
          globals: q,
          Tween: Xt,
          Timeline: Bt,
          Animation: At,
          getCache: ne,
          _removeLinkedListItem: we,
          reverting: () => i,
          context: e => (e && r && (r.data.push(e), e._ctx = r), r),
          suppressOverwrites: e => s = e
        }
      };
      ce("to,from,fromTo,delayedCall,set,killTweensOf", (e => ka[e] = Xt[e])), yt.add(Bt.updateRoot), u = ka.to({}, {
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
              if (N(a) && (s = {}, ce(a, (e => s[e] = 1)), a = s), t) {
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
      const xa = ka.registerPlugin({
        name: "attr",
        init(e, t, a, s, i) {
          let r, n, o;
          for (r in this.tween = a, t) o = e.getAttribute(r) || "", n = this.add(e, "setAttribute", (o || 0) + "", t[r], s, i, 0, 0, r), n.op = r, n.b = o, this._props.push(r)
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
      Xt.version = Bt.version = xa.version = "3.12.2", d = 1, I() && wt();
      const {
        Power0: ya,
        Power1: wa,
        Power2: Na,
        Power3: Sa,
        Power4: ja,
        Linear: Ta,
        Quad: Ca,
        Cubic: Ma,
        Quart: Ia,
        Quint: Ea,
        Strong: La,
        Elastic: Pa,
        Back: Oa,
        SteppedEase: za,
        Bounce: Aa,
        Sine: Ba,
        Expo: Da,
        Circ: Ra
      } = Nt;
      let Va, Fa, $a, Ua, Ga, Ha, qa, Wa, Xa, Ya = {},
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
        os = (e, t) => t.set(t.t, t.p, e ? t.e : t.b, t),
        cs = (e, t) => t.set(t.t, t.p, 1 !== e ? t.b : t.e, t),
        ls = (e, t, a) => e.style[t] = a,
        ds = (e, t, a) => e.style.setProperty(t, a),
        ms = (e, t, a) => e._gsap[t] = a,
        us = (e, t, a) => e._gsap.scaleX = e._gsap.scaleY = a,
        fs = (e, t, a, s, i) => {
          let r = e._gsap;
          r.scaleX = r.scaleY = a, r.renderTransform(i, r)
        },
        gs = (e, t, a, s, i) => {
          let r = e._gsap;
          r[t] = a, r.renderTransform(i, r)
        },
        _s = "transform",
        ps = _s + "Origin",
        hs = function(e, t) {
          let a = this.target,
            s = a.style;
          if (e in Ya && s) {
            if (this.tfm = this.tfm || {}, "transform" === e) return as.transform.split(",").forEach((e => hs.call(this, e, t)));
            if (~(e = as[e] || e).indexOf(",") ? e.split(",").forEach((e => this.tfm[e] = zs(a, e))) : this.tfm[e] = a._gsap.x ? a._gsap[e] : zs(a, e), this.props.indexOf(_s) >= 0) return;
            a._gsap.svg && (this.svgo = a.getAttribute("data-svg-origin"), this.props.push(ps, t, "")), e = _s
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
            r.svg && (r.renderTransform(), s.setAttribute("data-svg-origin", this.svgo || "")), e = Wa(), e && e.isStart || i[_s] || (ks(i), r.uncache = 1)
          }
        },
        vs = (e, t) => {
          let a = {
            target: e,
            props: [],
            revert: bs,
            save: hs
          };
          return e._gsap || xa.core.getCache(e), t && t.split(",").forEach((e => a.save(e))), a
        },
        xs = (e, t) => {
          let a = Fa.createElementNS ? Fa.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : Fa.createElement(e);
          return a.style ? a : Fa.createElement(e)
        },
        ys = (e, t, a) => {
          let s = getComputedStyle(e);
          return s[t] || s.getPropertyValue(t.replace(Ja, "-$1").toLowerCase()) || s.getPropertyValue(t) || !a && ys(e, Ns(t) || t, 1) || ""
        },
        ws = "O,Moz,ms,Ms,Webkit".split(","),
        Ns = (e, t, a) => {
          let s = (t || Ga).style,
            i = 5;
          if (e in s && !a) return e;
          for (e = e.charAt(0).toUpperCase() + e.substr(1); i-- && !(ws[i] + e in s););
          return i < 0 ? null : (3 === i ? "ms" : i >= 0 ? ws[i] : "") + e
        },
        Ss = () => {
          "undefined" != typeof window && window.document && (Va = window, Fa = Va.document, $a = Fa.documentElement, Ga = xs("div") || {
            style: {}
          }, Ha = xs("div"), _s = Ns(_s), ps = _s + "Origin", Ga.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Xa = !!Ns("perspective"), Wa = xa.core.reverting, Ua = 1)
        },
        js = function(e) {
          let t, a = xs("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
            s = this.parentNode,
            i = this.nextSibling,
            r = this.style.cssText;
          if ($a.appendChild(a), a.appendChild(this), this.style.display = "block", e) try {
            t = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = js
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
            t = js.call(e, !0)
          }
          return t && (t.width || t.height) || e.getBBox === js || (t = js.call(e, !0)), !t || t.width || t.x || t.y ? t : {
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
            t in Ya && t !== ps && (t = _s), a.removeProperty ? ("ms" !== t.substr(0, 2) && "webkit" !== t.substr(0, 6) || (t = "-" + t), a.removeProperty(t.replace(Ja, "-$1").toLowerCase())) : a.removeAttribute(t)
          }
        },
        Es = (e, t, a, s, i, r) => {
          let n = new ca(e._pt, t, a, 0, 1, r ? cs : os);
          return e._pt = n, n.b = s, n.e = i, e._props.push(a), n
        },
        Ls = {
          deg: 1,
          rad: 1,
          turn: 1
        },
        Ps = {
          grid: 1,
          flex: 1
        },
        Os = (e, t, a, s) => {
          let i, r, n, o, c = parseFloat(a) || 0,
            l = (a + "").trim().substr((c + "").length) || "px",
            d = Ga.style,
            m = es.test(t),
            u = "svg" === e.tagName.toLowerCase(),
            f = (u ? "client" : "offset") + (m ? "Width" : "Height"),
            g = 100,
            _ = "px" === s,
            p = "%" === s;
          return s === l || !c || Ls[s] || Ls[l] ? c : ("px" !== l && !_ && (c = Os(e, t, a, "px")), o = e.getCTM && Ms(e), !p && "%" !== l || !Ya[t] && !~t.indexOf("adius") ? (d[m ? "width" : "height"] = g + (_ ? l : s), r = ~t.indexOf("adius") || "em" === s && e.appendChild && !u ? e : e.parentNode, o && (r = (e.ownerSVGElement || {}).parentNode), r && r !== Fa && r.appendChild || (r = Fa.body), n = r._gsap, n && p && n.width && m && n.time === yt.time && !n.uncache ? le(c / n.width * g) : ((p || "%" === l) && !Ps[ys(r, "display")] && (d.position = ys(e, "position")), r === e && (d.position = "static"), r.appendChild(Ga), i = Ga[f], r.removeChild(Ga), d.position = "absolute", m && p && (n = ne(r), n.time = yt.time, n.width = r[f]), le(_ ? i * c / g : i && c ? g / i * c : 0))) : (i = o ? e.getBBox()[m ? "width" : "height"] : e[f], le(p ? c / i * g : c / 100 * i)))
        },
        zs = (e, t, a, s) => {
          let i;
          return Ua || Ss(), t in as && "transform" !== t && ~(t = as[t]).indexOf(",") && (t = t.split(",")[0]), Ya[t] && "transform" !== t ? (i = Ws(e, s), i = "transformOrigin" !== t ? i[t] : i.svg ? i.origin : Xs(ys(e, ps)) + " " + i.zOrigin + "px") : (i = e.style[t], (!i || "auto" === i || s || ~(i + "").indexOf("calc(")) && (i = Vs[t] && Vs[t](e, t, a) || ys(e, t) || oe(e, t) || ("opacity" === t ? 1 : 0))), a && !~(i + "").trim().indexOf(" ") ? Os(e, t, i, a) + a : i
        },
        As = function(e, t, a, s) {
          if (!a || "none" === a) {
            let s = Ns(t, e, 1),
              i = s && ys(e, s, 1);
            i && i !== a ? (t = s, a = i) : "borderColor" === t && (a = ys(e, "borderTopColor"))
          }
          let i, r, n, o, c, l, d, m, u, f, _, p, h = new ca(this._pt, e.style, t, 0, 1, aa),
            k = 0,
            b = 0;
          if (h.b = a, h.e = s, a += "", "auto" == (s += "") && (e.style[t] = s, s = ys(e, t) || s, e.style[t] = a), i = [a, s], xt(i), s = i[1], n = (a = i[0]).match(A) || [], p = s.match(A) || [], p.length) {
            for (; r = A.exec(s);) d = r[0], u = s.substring(k, r.index), c ? c = (c + 1) % 5 : "rgba(" !== u.substr(-5) && "hsla(" !== u.substr(-5) || (c = 1), d !== (l = n[b++] || "") && (o = parseFloat(l) || 0, _ = l.substr((o + "").length), "=" === d.charAt(1) && (d = me(o, d) + _), m = parseFloat(d), f = d.substr((m + "").length), k = A.lastIndex - f.length, f || (f = f || g.units[t] || _, k === s.length && (s += f, h.e += f)), _ !== f && (o = Os(e, t, l, f) || 0), h._pt = {
              _next: h._pt,
              p: u || 1 === b ? u : ",",
              s: o,
              c: m - o,
              m: c && c < 4 || "zIndex" === t ? Math.round : 0
            });
            h.c = k < s.length ? s.substring(k, s.length) : ""
          } else h.r = "display" === t && "none" === s ? cs : os;
          return D.test(s) && (h.e = 0), this._pt = h, h
        },
        Bs = {
          top: "0%",
          bottom: "100%",
          left: "0%",
          right: "100%",
          center: "50%"
        },
        Ds = e => {
          let t = e.split(" "),
            a = t[0],
            s = t[1] || "50%";
          return "top" !== a && "bottom" !== a && "left" !== s && "right" !== s || (e = a, a = s, s = e), t[0] = Bs[a] || a, t[1] = Bs[s] || s, t.join(" ")
        },
        Rs = (e, t) => {
          if (t.tween && t.tween._time === t.tween._dur) {
            let e, a, s, i = t.t,
              r = i.style,
              n = t.u,
              o = i._gsap;
            if ("all" === n || !0 === n) r.cssText = "", a = 1;
            else
              for (n = n.split(","), s = n.length; --s > -1;) e = n[s], Ya[e] && (a = 1, e = "transformOrigin" === e ? ps : _s), Is(i, e);
            a && (Is(i, _s), o && (o.svg && i.removeAttribute("transform"), Ws(i, 1), o.uncache = 1, ks(r)))
          }
        },
        Vs = {
          clearProps(e, t, a, s, i) {
            if ("isFromStart" !== i.data) {
              let r = e._pt = new ca(e._pt, t, a, 0, 0, Rs);
              return r.u = s, r.pr = -10, r.tween = i, e._props.push(a), 1
            }
          }
        },
        Fs = [1, 0, 0, 1, 0, 0],
        $s = {},
        Us = e => "matrix(1, 0, 0, 1, 0, 0)" === e || "none" === e || !e,
        Gs = e => {
          let t = ys(e, _s);
          return Us(t) ? Fs : t.substr(7).match(z).map(le)
        },
        Hs = (e, t) => {
          let a, s, i, r, n = e._gsap || ne(e),
            o = e.style,
            c = Gs(e);
          return n.svg && e.getAttribute("transform") ? (i = e.transform.baseVal.consolidate().matrix, c = [i.a, i.b, i.c, i.d, i.e, i.f], "1,0,0,1,0,0" === c.join(",") ? Fs : c) : (c !== Fs || e.offsetParent || e === $a || n.svg || (i = o.display, o.display = "block", a = e.parentNode, a && e.offsetParent || (r = 1, s = e.nextElementSibling, $a.appendChild(e)), c = Gs(e), i ? o.display = i : Is(e, "display"), r && (s ? a.insertBefore(e, s) : a ? a.appendChild(e) : $a.removeChild(e))), t && c.length > 6 ? [c[0], c[1], c[4], c[5], c[12], c[13]] : c)
        },
        qs = (e, t, a, s, i, r) => {
          let n, o, c, l, d = e._gsap,
            m = i || Hs(e, !0),
            u = d.xOrigin || 0,
            f = d.yOrigin || 0,
            g = d.xOffset || 0,
            _ = d.yOffset || 0,
            p = m[0],
            h = m[1],
            k = m[2],
            b = m[3],
            v = m[4],
            x = m[5],
            y = t.split(" "),
            w = parseFloat(y[0]) || 0,
            N = parseFloat(y[1]) || 0;
          a ? m !== Fs && (o = p * b - h * k) && (c = w * (b / o) + N * (-k / o) + (k * x - b * v) / o, l = w * (-h / o) + N * (p / o) - (p * x - h * v) / o, w = c, N = l) : (n = Cs(e), w = n.x + (~y[0].indexOf("%") ? w / 100 * n.width : w), N = n.y + (~(y[1] || y[0]).indexOf("%") ? N / 100 * n.height : N)), s || !1 !== s && d.smooth ? (v = w - u, x = N - f, d.xOffset = g + (v * p + x * k) - v, d.yOffset = _ + (v * h + x * b) - x) : d.xOffset = d.yOffset = 0, d.xOrigin = w, d.yOrigin = N, d.smooth = !!s, d.origin = t, d.originIsAbsolute = !!a, e.style[ps] = "0px 0px", r && (Es(r, d, "xOrigin", u, w), Es(r, d, "yOrigin", f, N), Es(r, d, "xOffset", g, d.xOffset), Es(r, d, "yOffset", _, d.yOffset)), e.setAttribute("data-svg-origin", w + " " + N)
        },
        Ws = (e, t) => {
          let a = e._gsap || new zt(e);
          if ("x" in a && !t && !a.uncache) return a;
          let s, i, r, n, o, c, l, d, m, u, f, _, p, h, k, b, v, x, y, w, N, S, j, T, C, M, I, E, L, P, O, z, A = e.style,
            B = a.scaleX < 0,
            D = "px",
            R = "deg",
            V = getComputedStyle(e),
            F = ys(e, ps) || "0";
          return s = i = r = c = l = d = m = u = f = 0, n = o = 1, a.svg = !(!e.getCTM || !Ms(e)), V.translate && ("none" === V.translate && "none" === V.scale && "none" === V.rotate || (A[_s] = ("none" !== V.translate ? "translate3d(" + (V.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== V.rotate ? "rotate(" + V.rotate + ") " : "") + ("none" !== V.scale ? "scale(" + V.scale.split(" ").join(",") + ") " : "") + ("none" !== V[_s] ? V[_s] : "")), A.scale = A.rotate = A.translate = "none"), h = Hs(e, a.svg), a.svg && (a.uncache ? (C = e.getBBox(), F = a.xOrigin - C.x + "px " + (a.yOrigin - C.y) + "px", T = "") : T = !t && e.getAttribute("data-svg-origin"), qs(e, T || F, !!T || a.originIsAbsolute, !1 !== a.smooth, h)), _ = a.xOrigin || 0, p = a.yOrigin || 0, h !== Fs && (x = h[0], y = h[1], w = h[2], N = h[3], s = S = h[4], i = j = h[5], 6 === h.length ? (n = Math.sqrt(x * x + y * y), o = Math.sqrt(N * N + w * w), c = x || y ? Za(y, x) * Ka : 0, m = w || N ? Za(w, N) * Ka + c : 0, m && (o *= Math.abs(Math.cos(m * Qa))), a.svg && (s -= _ - (_ * x + p * w), i -= p - (_ * y + p * N))) : (z = h[6], P = h[7], I = h[8], E = h[9], L = h[10], O = h[11], s = h[12], i = h[13], r = h[14], k = Za(z, L), l = k * Ka, k && (b = Math.cos(-k), v = Math.sin(-k), T = S * b + I * v, C = j * b + E * v, M = z * b + L * v, I = S * -v + I * b, E = j * -v + E * b, L = z * -v + L * b, O = P * -v + O * b, S = T, j = C, z = M), k = Za(-w, L), d = k * Ka, k && (b = Math.cos(-k), v = Math.sin(-k), T = x * b - I * v, C = y * b - E * v, M = w * b - L * v, O = N * v + O * b, x = T, y = C, w = M), k = Za(y, x), c = k * Ka, k && (b = Math.cos(k), v = Math.sin(k), T = x * b + y * v, C = S * b + j * v, y = y * b - x * v, j = j * b - S * v, x = T, S = C), l && Math.abs(l) + Math.abs(c) > 359.9 && (l = c = 0, d = 180 - d), n = le(Math.sqrt(x * x + y * y + w * w)), o = le(Math.sqrt(j * j + z * z)), k = Za(S, j), m = Math.abs(k) > 2e-4 ? k * Ka : 0, f = O ? 1 / (O < 0 ? -O : O) : 0), a.svg && (T = e.getAttribute("transform"), a.forceCSS = e.setAttribute("transform", "") || !Us(ys(e, _s)), T && e.setAttribute("transform", T))), Math.abs(m) > 90 && Math.abs(m) < 270 && (B ? (n *= -1, m += c <= 0 ? 180 : -180, c += c <= 0 ? 180 : -180) : (o *= -1, m += m <= 0 ? 180 : -180)), t = t || a.uncache, a.x = s - ((a.xPercent = s && (!t && a.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-s) ? -50 : 0))) ? e.offsetWidth * a.xPercent / 100 : 0) + D, a.y = i - ((a.yPercent = i && (!t && a.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-i) ? -50 : 0))) ? e.offsetHeight * a.yPercent / 100 : 0) + D, a.z = r + D, a.scaleX = le(n), a.scaleY = le(o), a.rotation = le(c) + R, a.rotationX = le(l) + R, a.rotationY = le(d) + R, a.skewX = m + R, a.skewY = u + R, a.transformPerspective = f + D, (a.zOrigin = parseFloat(F.split(" ")[2]) || 0) && (A[ps] = Xs(F)), a.xOffset = a.yOffset = 0, a.force3D = g.force3D, a.renderTransform = a.svg ? ti : Xa ? ei : Ks, a.uncache = 0, a
        },
        Xs = e => (e = e.split(" "))[0] + " " + e[1],
        Ys = (e, t, a) => {
          let s = qe(t);
          return le(parseFloat(t) + parseFloat(Os(e, "x", a + "px", s))) + s
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
            rotation: o,
            rotationY: c,
            rotationX: l,
            skewX: d,
            skewY: m,
            scaleX: u,
            scaleY: f,
            transformPerspective: g,
            force3D: _,
            target: p,
            zOrigin: h
          } = t || this, k = "", b = "auto" === _ && e && 1 !== e || !0 === _;
          if (h && (l !== Qs || c !== Qs)) {
            let e, t = parseFloat(c) * Qa,
              a = Math.sin(t),
              s = Math.cos(t);
            t = parseFloat(l) * Qa, e = Math.cos(t), i = Ys(p, i, a * e * -h), r = Ys(p, r, -Math.sin(t) * -h), n = Ys(p, n, s * e * -h + h)
          }
          g !== Zs && (k += "perspective(" + g + Js), (a || s) && (k += "translate(" + a + "%, " + s + "%) "), (b || i !== Zs || r !== Zs || n !== Zs) && (k += n !== Zs || b ? "translate3d(" + i + ", " + r + ", " + n + ") " : "translate(" + i + ", " + r + Js), o !== Qs && (k += "rotate(" + o + Js), c !== Qs && (k += "rotateY(" + c + Js), l !== Qs && (k += "rotateX(" + l + Js), d === Qs && m === Qs || (k += "skew(" + d + ", " + m + Js), 1 === u && 1 === f || (k += "scale(" + u + ", " + f + Js), p.style[_s] = k || "translate(0, 0)"
        },
        ti = function(e, t) {
          let a, s, i, r, n, {
              xPercent: o,
              yPercent: c,
              x: l,
              y: d,
              rotation: m,
              skewX: u,
              skewY: f,
              scaleX: g,
              scaleY: _,
              target: p,
              xOrigin: h,
              yOrigin: k,
              xOffset: b,
              yOffset: v,
              forceCSS: x
            } = t || this,
            y = parseFloat(l),
            w = parseFloat(d);
          m = parseFloat(m), u = parseFloat(u), f = parseFloat(f), f && (f = parseFloat(f), u += f, m += f), m || u ? (m *= Qa, u *= Qa, a = Math.cos(m) * g, s = Math.sin(m) * g, i = Math.sin(m - u) * -_, r = Math.cos(m - u) * _, u && (f *= Qa, n = Math.tan(u - f), n = Math.sqrt(1 + n * n), i *= n, r *= n, f && (n = Math.tan(f), n = Math.sqrt(1 + n * n), a *= n, s *= n)), a = le(a), s = le(s), i = le(i), r = le(r)) : (a = g, r = _, s = i = 0), (y && !~(l + "").indexOf("px") || w && !~(d + "").indexOf("px")) && (y = Os(p, "x", l, "px"), w = Os(p, "y", d, "px")), (h || k || b || v) && (y = le(y + h - (h * a + k * i) + b), w = le(w + k - (h * s + k * r) + v)), (o || c) && (n = p.getBBox(), y = le(y + o / 100 * n.width), w = le(w + c / 100 * n.height)), n = "matrix(" + a + "," + s + "," + i + "," + r + "," + y + "," + w + ")", p.setAttribute("transform", n), x && (p.style[_s] = n)
        },
        ai = function(e, t, a, s, i) {
          let r, n, o = 360,
            c = N(i),
            l = parseFloat(i) * (c && ~i.indexOf("rad") ? Ka : 1) - s,
            d = s + l + "deg";
          return c && (r = i.split("_")[1], "short" === r && (l %= o, l !== l % 180 && (l += l < 0 ? o : -360)), "cw" === r && l < 0 ? l = (l + 36e9) % o - ~~(l / o) * o : "ccw" === r && l > 0 && (l = (l - 36e9) % o - ~~(l / o) * o)), e._pt = n = new ca(e._pt, t, a, s, l, is), n.e = d, n.u = "deg", e._props.push(a), n
        },
        si = (e, t) => {
          for (let a in t) e[a] = t[a];
          return e
        },
        ii = (e, t, a) => {
          let s, i, r, n, o, c, l, d, m = si({}, a._gsap),
            u = a.style;
          for (i in m.svg ? (r = a.getAttribute("transform"), a.setAttribute("transform", ""), u[_s] = t, s = Ws(a, 1), Is(a, _s), a.setAttribute("transform", r)) : (r = getComputedStyle(a)[_s], u[_s] = t, s = Ws(a, 1), u[_s] = r), Ya) r = m[i], n = s[i], r !== n && "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) < 0 && (l = qe(r), d = qe(n), o = l !== d ? Os(a, i, r, d) : parseFloat(r), c = parseFloat(n), e._pt = new ca(e._pt, s, i, o, c - o, ss), e._pt.u = d || 0, e._props.push(i));
          si(s, m)
        };
      ce("padding,margin,Width,Radius", ((e, t) => {
        let a = "Top",
          s = "Right",
          i = "Bottom",
          r = "Left",
          n = (t < 3 ? [a, s, i, r] : [a + r, a + s, i + s, i + r]).map((a => t < 2 ? e + a : "border" + a + e));
        Vs[t > 1 ? "border" + e : e] = function(e, t, a, s, i) {
          let r, o;
          if (arguments.length < 4) return r = n.map((t => zs(e, t, a))), o = r.join(" "), 5 === o.split(r[0]).length ? r[0] : o;
          r = (s + "").split(" "), o = {}, n.forEach(((e, t) => o[e] = r[t] = r[t] || r[(t - 1) / 2 | 0])), e.init(t, o, i)
        }
      }));
      const ri = {
        name: "css",
        register: Ss,
        targetTest: e => e.style && e.nodeType,
        init(e, t, a, s, i) {
          let r, n, o, c, l, d, m, u, f, _, p, h, k, b, v, x, y = this._props,
            w = e.style,
            S = a.vars.startAt;
          for (m in Ua || Ss(), this.styles = this.styles || vs(e), x = this.styles.props, this.tween = a, t)
            if ("autoRound" !== m && (n = t[m], !ee[m] || !$t(m, t, a, s, e, i)))
              if (l = typeof n, d = Vs[m], "function" === l && (n = n.call(a, s, e, i), l = typeof n), "string" === l && ~n.indexOf("random(") && (n = rt(n)), d) d(this, e, m, n, a) && (v = 1);
              else if ("--" === m.substr(0, 2)) r = (getComputedStyle(e).getPropertyValue(m) + "").trim(), n += "", bt.lastIndex = 0, bt.test(r) || (u = qe(r), f = qe(n)), f ? u !== f && (r = Os(e, m, r, f) + f) : u && (n += u), this.add(w, "setProperty", r, n, s, i, 0, 0, m), y.push(m), x.push(m, 0, w[m]);
          else if ("undefined" !== l) {
            if (S && m in S ? (r = "function" == typeof S[m] ? S[m].call(a, s, e, i) : S[m], N(r) && ~r.indexOf("random(") && (r = rt(r)), qe(r + "") || (r += g.units[m] || qe(zs(e, m)) || ""), "=" === (r + "").charAt(1) && (r = zs(e, m))) : r = zs(e, m), c = parseFloat(r), _ = "string" === l && "=" === n.charAt(1) && n.substr(0, 2), _ && (n = n.substr(2)), o = parseFloat(n), m in as && ("autoAlpha" === m && (1 === c && "hidden" === zs(e, "visibility") && o && (c = 0), x.push("visibility", 0, w.visibility), Es(this, w, "visibility", c ? "inherit" : "hidden", o ? "inherit" : "hidden", !o)), "scale" !== m && "transform" !== m && (m = as[m], ~m.indexOf(",") && (m = m.split(",")[0]))), p = m in Ya, p)
              if (this.styles.save(m), h || (k = e._gsap, k.renderTransform && !t.parseTransform || Ws(e, t.parseTransform), b = !1 !== t.smoothOrigin && k.smooth, h = this._pt = new ca(this._pt, w, _s, 0, 1, k.renderTransform, k, 0, -1), h.dep = 1), "scale" === m) this._pt = new ca(this._pt, k, "scaleY", k.scaleY, (_ ? me(k.scaleY, _ + o) : o) - k.scaleY || 0, ss), this._pt.u = 0, y.push("scaleY", m), m += "X";
              else {
                if ("transformOrigin" === m) {
                  x.push(ps, 0, w[ps]), n = Ds(n), k.svg ? qs(e, n, 0, b, 0, this) : (f = parseFloat(n.split(" ")[2]) || 0, f !== k.zOrigin && Es(this, k, "zOrigin", k.zOrigin, f), Es(this, w, m, Xs(r), Xs(n)));
                  continue
                }
                if ("svgOrigin" === m) {
                  qs(e, n, 1, b, 0, this);
                  continue
                }
                if (m in $s) {
                  ai(this, k, m, c, _ ? me(c, _ + n) : n);
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
            if (p || (o || 0 === o) && (c || 0 === c) && !ts.test(n) && m in w) u = (r + "").substr((c + "").length), o || (o = 0), f = qe(n) || (m in g.units ? g.units[m] : u), u !== f && (c = Os(e, m, r, f)), this._pt = new ca(this._pt, p ? k : w, m, c, (_ ? me(c, _ + o) : o) - c, p || "px" !== f && "zIndex" !== m || !1 === t.autoRound ? ss : ns), this._pt.u = f || 0, u !== f && "%" !== f && (this._pt.b = r, this._pt.r = rs);
            else if (m in w) As.call(this, e, m, r, _ ? _ + n : n);
            else if (m in e) this.add(e, m, r || e[m], _ ? _ + n : n, s, i);
            else if ("parseTransform" !== m) {
              G(m, n);
              continue
            }
            p || (m in w ? x.push(m, 0, w[m]) : x.push(m, 1, r || e[m])), y.push(m)
          }
          v && oa(this)
        },
        render(e, t) {
          if (t.tween._time || !Wa()) {
            let a = t._pt;
            for (; a;) a.r(e, a.d), a = a._next
          } else t.styles.revert()
        },
        get: zs,
        aliases: as,
        getSetter(e, t, a) {
          let s = as[t];
          return s && s.indexOf(",") < 0 && (t = s), t in Ya && t !== ps && (e._gsap.x || zs(e, "x")) ? a && qa === a ? "scale" === t ? us : ms : (qa = a || {}) && ("scale" === t ? fs : gs) : e.style && !T(e.style[t]) ? ls : ~t.indexOf("-") ? ds : Jt(e, t)
        },
        core: {
          _removeProperty: Is,
          _getMatrix: Hs
        }
      };
      xa.utils.checkPrefix = Ns, xa.core.getStyleSaver = vs,
        function(e, t, a, s) {
          let i = ce(e + "," + t + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", (e => {
            Ya[e] = 1
          }));
          ce(t, (e => {
            g.units[e] = "deg", $s[e] = 1
          })), as[i[13]] = e + "," + t, ce("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", (e => {
            let t = e.split(":");
            as[t[1]] = i[t[0]]
          }))
        }("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY"), ce("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", (e => {
          g.units[e] = "px"
        })), xa.registerPlugin(ri);
      const ni = xa.registerPlugin(ri) || xa;
      ni.core.Tween
    },
    232: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        A: () => E,
        AudioPlayer: () => V,
        Badge: () => F,
        Brands: () => $,
        Button: () => G,
        ButtonGroup: () => K,
        CalloutSection: () => pe,
        Carousel: () => ae,
        ConditionalBlock: () => ce,
        CookieAB: () => xe,
        CountryInputField: () => ve,
        Cta: () => je,
        DescriptionArea: () => Ve,
        DiscountsBadge: () => He,
        DotLoader: () => We,
        Dropdown: () => Ke,
        Embed: () => et,
        ExpandingPlatformButton: () => lt,
        FadeInContent: () => mt,
        GameCard: () => s,
        GameSiteHeader: () => ht,
        Gen9Button: () => Y,
        Gen9CoreCarousel: () => Nt,
        Grid: () => Ze,
        HTMLElement: () => Pt,
        Hero: () => Lt,
        HookStore: () => re,
        ImageWithBadge: () => $t,
        InViewTracker: () => Xt,
        LanguageSelector: () => Bt,
        LayeredImage: () => Vt,
        LoadingAnimation: () => qi,
        MultiSourceImage: () => Ie,
        NewswireBlocks: () => ra,
        NewswireCard: () => Zt,
        NewswireList: () => ta,
        NewswireRelated: () => sa,
        NewswireTag: () => Kt,
        OrderedList: () => ca,
        PackList: () => ba,
        PackListMenu: () => Pa,
        Paging: () => Aa,
        ParallaxCacheBuster: () => Da,
        ParallaxInnerLayer: () => Fa,
        ParallaxOuterLayer: () => Ua,
        ParallaxWrapper: () => Va,
        ProfileSwitcher: () => i,
        PromoModule: () => Ms,
        Rating: () => Ps,
        ResponsiveFlexBox: () => zs,
        ResponsiveFlexItem: () => Bs,
        ResponsiveGridBox: () => Rs,
        ResponsiveGridItem: () => Fs,
        ResponsiveImg: () => Us,
        ResponsiveSection: () => Hs,
        RockstarLogo: () => qs,
        ScrollToTop: () => Ws,
        ScrollTracker: () => Ys,
        SearchBox: () => Ks,
        Separator: () => Be,
        Skeleton: () => Zs,
        SrcsetImage: () => Gt,
        TextFit: () => $e,
        ThumbsGallery: () => ni,
        TinaModuleFetchNRender: () => li,
        TinaWrapper: () => di,
        TrackList: () => ai,
        UnorderedList: () => ze,
        UserVote: () => fi,
        VideoCard: () => r,
        VideoCarousel: () => _i,
        VideoList: () => ki,
        VisuallyHidden: () => bi,
        Wasted: () => vi,
        framer: () => o,
        useTinaModuleFetchByIds: () => ci,
        withInViewTracker: () => qt,
        withSearchbarErrorBoundary: () => Si,
        withSimpleErrorBoundary: () => yt
      });
      var s = {};
      a.r(s), a.d(s, {
        Art: () => ft,
        Link: () => _t
      });
      var i = {};
      a.r(i), a.d(i, {
        CharacterCard: () => Xa,
        Menu: () => Ns,
        MenuButton: () => Ts
      });
      var r = {};
      a.r(r), a.d(r, {
        Art: () => yi,
        Link: () => wi
      });
      var n = {};
      a.r(n), a.d(n, {
        getVariant: () => Fi,
        transitions: () => Ri,
        variants: () => Vi
      });
      var o = {};
      a.r(o), a.d(o, {
        Animations: () => n,
        LiteMotion: () => Ii,
        withFadeIn: () => Oi,
        withFadeUp: () => Di
      });
      var c = a(1664),
        l = a(5052),
        d = a(3832),
        m = a(5688),
        u = a(2936);
      const f = "www",
        g = "socialClub",
        _ = [{
          id: "prod",
          sites: {
            www: "www",
            socialClub: "socialclub",
            support: "support",
            store: "store"
          },
          cookieIdentifier: "prod"
        }],
        p = () => {
          let e;
          const {
            location: t
          } = window, a = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), s = _.findIndex((t => Object.entries(t.sites).findIndex((t => {
            let [s, i] = t;
            return i === a && (e = {
              site: s,
              subDomain: i
            }, !0)
          })) >= 0)), i = _[s >= 0 ? s : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...i,
            currentSite: e
          }
        },
        h = (e, t) => {
          e && t ? document.cookie = `${e}=${t}; domain=${k()}; path=/;` : console.log(`Couldn't set cookie (${e}) to value (${t})`)
        },
        k = () => {
          const e = window.location.hostname.split(".");
          return e.slice(e.length - 2).join(".")
        },
        b = e => {
          const t = document.cookie.split("; "),
            a = `${e}=`,
            s = t.find((e => e.startsWith(a))),
            i = s?.substring(a.length, s.length);
          return i
        },
        v = [{
          label: "Deutsch",
          subdomain: "de",
          subdomaincom: "de",
          support: "de",
          iso: "de-DE"
        }, {
          label: "English",
          subdomain: "en-US",
          subdomaincom: "en",
          support: "us",
          iso: "en-US"
        }, {
          label: "Español",
          subdomain: "es",
          subdomaincom: "es",
          support: "es",
          iso: "es-ES"
        }, {
          label: "Español Latinoamérica",
          subdomain: "es-mx",
          subdomaincom: "mx",
          support: "es-mx",
          iso: "es-MX"
        }, {
          label: "Français",
          subdomain: "fr",
          subdomaincom: "fr",
          support: "fr",
          iso: "fr-FR"
        }, {
          label: "Italiano",
          subdomain: "it",
          subdomaincom: "it",
          support: "it",
          iso: "it-IT"
        }, {
          label: "日本語",
          subdomain: "ja",
          subdomaincom: "jp",
          support: "jp",
          iso: "ja-JP"
        }, {
          label: "한국어",
          subdomain: "ko",
          subdomaincom: "kr",
          support: "kr",
          iso: "ko-KR"
        }, {
          label: "Polski",
          subdomain: "pl",
          subdomaincom: "pl",
          support: "pl",
          iso: "pl-PL"
        }, {
          label: "Português do Brasil",
          subdomain: "pt",
          subdomaincom: "br",
          support: "br",
          iso: "pt-BR"
        }, {
          label: "Русский",
          subdomain: "ru",
          subdomaincom: "ru",
          support: "ru",
          iso: "ru-RU"
        }, {
          label: "繁體中文",
          subdomain: "zh",
          subdomaincom: "tw",
          support: "tw",
          iso: "zh-TW"
        }, {
          label: "简体中文",
          subdomain: "zh-cn",
          subdomaincom: "zh",
          support: "zh",
          iso: "zh-CN"
        }],
        x = v,
        y = v[1],
        w = () => {
          const {
            location: e
          } = window, t = p(), a = (e => {
            const t = x.map((e => e.subdomaincom)),
              a = e.pathname.substring(1).split("/"),
              s = "detect-locals" === a[0] ? 1 : 0;
            return -1 !== t.indexOf(a[s]) ? a[s] : null
          })(e), s = (e => {
            const t = e.search.substring(1).split("&").find((e => e.startsWith("lang")));
            return t?.split("=")[1]
          })(e), i = y;
          let r = i;
          const n = `rockstarweb_lang.${t.cookieIdentifier}`,
            o = b(n);
          r = t.currentSite?.site === f ? x.find((e => e.subdomaincom === s)) || x.find((e => e.subdomaincom === a)) || i : x.find((e => e.iso === o)) || i;
          const [c, l] = function(e, t) {
            let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            const s = b(e);
            return s && !a || h(e, t), [s, (i = e, e => {
              h(i, e)
            })];
            var i
          }(n, r.iso);
          return [r, l]
        };
      var N = a(5240);
      const S = e => {
        let {
          locales: t,
          lang: a,
          children: s
        } = e;
        const i = (0, c.useMemo)((() => function(e) {
            let [t, a] = e.split(/[-_]/);
            return a = a?.toLowerCase(), "cn" === a && (a = "hans"), t && a || (t = "en", a = "us"), [t, a]
          }(a)), [a]),
          r = (0, c.useMemo)((() => function(e, t) {
            return e?.[t] ?? {}
          }(t, i[1])), [a, t]);
        return (0, N.jsx)(u.c, {
          messages: r,
          locale: i[0],
          defaultLocale: "en",
          children: s
        }, i[0])
      };

      function j(e, t) {
        return a => {
          const [{
            iso: s
          }] = w();
          return (0, N.jsx)(S, {
            locales: t,
            lang: s,
            children: (0, N.jsx)(e, {
              ...a
            })
          })
        }
      }
      a(3061);
      const T = JSON.parse('{"us":{"aria_label_open_new_window":"(Opens in a new window)","pl_card_badge_content_complete":"Complete","plm_nav_scroll_left":"Scroll Left","plm_nav_scroll_right":"Scroll Right","language_selector_default":"Select a Language","nofications_new":"New notifications","profile_selector_mugshot":"{userName} mugshot","profile_selector_profile_card":"Profile Card","profile_selector_rp_icon":"RP Category","profile_selector_switch_character":"Switch Character","sc_link_account":"Account","sc_link_activity_feed":"Activity Feed","sc_link_cookies_policy":"Cookies Policy","sc_link_cookies_settings":"Cookies Settings","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Do Not Sell My Information","sc_link_find_friends":"Find Friends","sc_link_friends":"Friends","sc_link_game_activation":"Game Activation","sc_link_help":"Help","sc_link_import_friends":"Import Friends","sc_link_join_social_club":"Sign Up","sc_link_legal":"Legal","sc_link_log_out":"Log Out","sc_link_messages":"Messages","sc_link_my_friends":"My Friends","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Privacy Policy","sc_link_settings":"Settings","sc_link_sign_in":"Sign In","sc_link_support":"Support","sc_link_view_my_profile":"View My Profile","sc_menu_close":"Close player menu","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"Open player menu","rp_icon":"RP Category","components_track_list_title":"Tracklist","next_button_label":"Next video page","previous_button_label":"Previous video page"},"de":{"aria_label_open_new_window":"(Öffnet ein neues Fenster)","pl_card_badge_content_complete":"Abgeschlossen","plm_nav_scroll_left":"Links scrollen","plm_nav_scroll_right":"Rechts scrollen","language_selector_default":"Eine Sprache auswählen","nofications_new":"Neue Benachrichtigungen","profile_selector_mugshot":"Verbrecherfoto von {userName}","profile_selector_profile_card":"Profildaten","profile_selector_rp_icon":"RP-Kategorie","profile_selector_switch_character":"Charakter wechseln","sc_link_account":"Konto","sc_link_activity_feed":"Aktivitäten-Feed","sc_link_cookies_policy":"Cookie-Richtlinie","sc_link_cookies_settings":"Cookie-Einstellungen","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Meine Informationen nicht verkaufen","sc_link_find_friends":"Freunde finden","sc_link_friends":"Freunde","sc_link_game_activation":"Spielaktivierung","sc_link_help":"Hilfe","sc_link_import_friends":"Freunde importieren","sc_link_join_social_club":"Registrieren","sc_link_legal":"Rechtliches","sc_link_log_out":"Abmelden","sc_link_messages":"Nachrichten","sc_link_my_friends":"Meine Freunde","sc_link_notifications":"Benachrichtigungen","sc_link_privacy_policy":"Datenschutzrichtlinien","sc_link_settings":"Einstellungen","sc_link_sign_in":"Anmelden","sc_link_support":"Support","sc_link_view_my_profile":"Mein Profil ansehen","sc_menu_close":"Spielermenü schließen","sc_menu_drag_handle":"Menü öffnen bzw. schließen","sc_menu_open":"Spielermenü öffnen","rp_icon":"RP-Kategorie","components_track_list_title":"Trackliste","next_button_label":"Nächste Videoseite","previous_button_label":"Vorherige Videoseite"},"es":{"aria_label_open_new_window":"(Se abre en una ventana nueva)","pl_card_badge_content_complete":"Completado","plm_nav_scroll_left":"Desplazar hacia la izquierda","plm_nav_scroll_right":"Desplazar hacia la derecha","language_selector_default":"Selecciona un idioma","nofications_new":"Nuevas notificaciones","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Tarjeta de perfil","profile_selector_rp_icon":"Categoría de RP","profile_selector_switch_character":"Cambiar personaje","sc_link_account":"Cuenta","sc_link_activity_feed":"Actividades","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Ajustes de cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"No quiero que vendáis mis datos","sc_link_find_friends":"Buscar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Activación del juego","sc_link_help":"Ayuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Registrarse","sc_link_legal":"Aviso legal","sc_link_log_out":"Cerrar sesión","sc_link_messages":"Mensajes","sc_link_my_friends":"Mis amigos","sc_link_notifications":"Notificaciones","sc_link_privacy_policy":"Política de privacidad","sc_link_settings":"Ajustes","sc_link_sign_in":"Iniciar sesión","sc_link_support":"Asistencia técnica","sc_link_view_my_profile":"Ver mi perfil","sc_menu_close":"Cerrar menú de jugador","sc_menu_drag_handle":"Arrastrar el controlador del menú","sc_menu_open":"Abrir menú de jugador","rp_icon":"Categoría de RP","components_track_list_title":"Lista de pistas","next_button_label":"Página de vídeo siguiente","previous_button_label":"Página de vídeo anterior"},"mx":{"aria_label_open_new_window":"(Se abre en una ventana nueva)","pl_card_badge_content_complete":"Completado","plm_nav_scroll_left":"Desplazarse hacia la izquierda","plm_nav_scroll_right":"Desplazarse hacia la derecha","language_selector_default":"Seleccionar un idioma","nofications_new":"Nuevas notificaciones","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Tarjeta del perfil","profile_selector_rp_icon":"Categoría de RP","profile_selector_switch_character":"Cambiar personaje","sc_link_account":"Cuenta","sc_link_activity_feed":"Muro de actividades","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Configuración de cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"No quiero que vendan mis datos","sc_link_find_friends":"Encontrar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Activación de juegos","sc_link_help":"Ayuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Registro","sc_link_legal":"Legal","sc_link_log_out":"Cerrar sesión","sc_link_messages":"Mensajes","sc_link_my_friends":"Mis amigos","sc_link_notifications":"Notificaciones","sc_link_privacy_policy":"Política de privacidad","sc_link_settings":"Configuración","sc_link_sign_in":"Iniciar sesión","sc_link_support":"Soporte","sc_link_view_my_profile":"Ver mi perfil","sc_menu_close":"Cerrar menú del reproductor","sc_menu_drag_handle":"Mover el handle del menú","sc_menu_open":"Abrir menú del reproductor","rp_icon":"Categoría de RP","components_track_list_title":"Lista de canciones","next_button_label":"Página de video siguiente","previous_button_label":"Página de video anterior"},"fr":{"aria_label_open_new_window":"(S’ouvre dans une nouvelle fenêtre)","pl_card_badge_content_complete":"Terminé","plm_nav_scroll_left":"Faire défiler vers la gauche","plm_nav_scroll_right":"Faire défiler vers la droite","language_selector_default":"Sélectionner une langue","nofications_new":"Nouvelles notifications","profile_selector_mugshot":"Photo d\'identité : {userName}","profile_selector_profile_card":"Carte du profil","profile_selector_rp_icon":"Catégorie de RP","profile_selector_switch_character":"Changer de personnage","sc_link_account":"Compte","sc_link_activity_feed":"Fil d\'activités","sc_link_cookies_policy":"Politique en matière de cookies","sc_link_cookies_settings":"Paramètres des cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Ne pas vendre mes informations","sc_link_find_friends":"Trouver des amis","sc_link_friends":"Amis","sc_link_game_activation":"Activation de jeux","sc_link_help":"Aide","sc_link_import_friends":"Importer des amis","sc_link_join_social_club":"S’inscrire","sc_link_legal":"Mentions légales","sc_link_log_out":"Se déconnecter","sc_link_messages":"Messages","sc_link_my_friends":"Mes amis","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Charte de confidentialité","sc_link_settings":"Paramètres","sc_link_sign_in":"Se connecter","sc_link_support":"Assistance","sc_link_view_my_profile":"Voir mon profil","sc_menu_close":"Fermer le menu Joueur","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"Ouvrir le menu Joueur","rp_icon":"Catégorie : RP","components_track_list_title":"Liste des morceaux","next_button_label":"Page vidéo suivante","previous_button_label":"Page vidéo précédente"},"it":{"aria_label_open_new_window":"(Apri in una nuova finestra)","pl_card_badge_content_complete":"Completamento","plm_nav_scroll_left":"Scorri a sinistra","plm_nav_scroll_right":"Scorri a destra","language_selector_default":"Seleziona una lingua","nofications_new":"Nuove notifiche","profile_selector_mugshot":"Foto segnaletica di {userName}","profile_selector_profile_card":"Scheda del profilo","profile_selector_rp_icon":"Categoria RP","profile_selector_switch_character":"Cambia personaggio","sc_link_account":"Account","sc_link_activity_feed":"Feed attività","sc_link_cookies_policy":"Politica sui cookie","sc_link_cookies_settings":"Impostazioni dei cookie","sc_link_crews":"Crew","sc_link_do_not_sell_my_information":"Non vendere le mie informazioni","sc_link_find_friends":"Trova amici","sc_link_friends":"Amici","sc_link_game_activation":"Attivazione gioco","sc_link_help":"Assistenza","sc_link_import_friends":"Importa amici","sc_link_join_social_club":"Registrati","sc_link_legal":"Note legali","sc_link_log_out":"Esci","sc_link_messages":"Messaggi","sc_link_my_friends":"I miei amici","sc_link_notifications":"Notifiche","sc_link_privacy_policy":"Politica sulla privacy","sc_link_settings":"Impostazioni","sc_link_sign_in":"Accedi","sc_link_support":"Supporto","sc_link_view_my_profile":"Visualizza il mio profilo","sc_menu_close":"Chiudi Menu giocatore","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"Apri Menu giocatore","rp_icon":"Categoria RP","components_track_list_title":"Tracklist","next_button_label":"Pagina di video successiva","previous_button_label":"Pagina di video precedente"},"jp":{"aria_label_open_new_window":"(新しいウィンドウで開きます)","pl_card_badge_content_complete":"完了","plm_nav_scroll_left":"左にスクロール","plm_nav_scroll_right":"右にスクロール","language_selector_default":"言語を選択","nofications_new":"新しいお知らせ","profile_selector_mugshot":"{userName}顔写真","profile_selector_profile_card":"プロフィールカード","profile_selector_rp_icon":"RPカテゴリー","profile_selector_switch_character":"キャラクター変更","sc_link_account":"アカウント","sc_link_activity_feed":"アクティビティフィード","sc_link_cookies_policy":"クッキーポリシー","sc_link_cookies_settings":"クッキー設定","sc_link_crews":"クルー","sc_link_do_not_sell_my_information":"個人情報を売らないでください","sc_link_find_friends":"フレンドを検索","sc_link_friends":"フレンド","sc_link_game_activation":"ゲームアクティベーション","sc_link_help":"ヘルプ","sc_link_import_friends":"フレンドをインポート","sc_link_join_social_club":"サインアップ","sc_link_legal":"利用規約","sc_link_log_out":"ログアウト","sc_link_messages":"メッセージ","sc_link_my_friends":"フレンド","sc_link_notifications":"通知","sc_link_privacy_policy":"プライバシーポリシー","sc_link_settings":"設定","sc_link_sign_in":"サインイン","sc_link_support":"サポート","sc_link_view_my_profile":"プロフィールを表示","sc_menu_close":"プレイヤーメニューを閉じる","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"プレイヤーメニューを開く","rp_icon":"RPカテゴリー","components_track_list_title":"トラックリスト","next_button_label":"次のビデオページ","previous_button_label":"前のビデオページ"},"kr":{"aria_label_open_new_window":"(새 창에서 열기)","pl_card_badge_content_complete":"완료","plm_nav_scroll_left":"왼쪽 스크롤","plm_nav_scroll_right":"오른쪽 스크롤","language_selector_default":"언어 선택","nofications_new":"새 알림","profile_selector_mugshot":"{userName} 머그샷","profile_selector_profile_card":"프로필 카드","profile_selector_rp_icon":"RP 카테고리","profile_selector_switch_character":"캐릭터 교체","sc_link_account":"계정","sc_link_activity_feed":"활동 피드","sc_link_cookies_policy":"쿠키 정책","sc_link_cookies_settings":"쿠키 설정","sc_link_crews":"조직","sc_link_do_not_sell_my_information":"내 정보 판매 안 함","sc_link_find_friends":"친구 찾기","sc_link_friends":"친구","sc_link_game_activation":"게임 활성화","sc_link_help":"도움말","sc_link_import_friends":"친구 불러오기","sc_link_join_social_club":"가입","sc_link_legal":"법률 관련","sc_link_log_out":"로그아웃","sc_link_messages":"메시지","sc_link_my_friends":"내 친구","sc_link_notifications":"알림","sc_link_privacy_policy":"개인 정보 보호 정책","sc_link_settings":"설정","sc_link_sign_in":"로그인","sc_link_support":"지원","sc_link_view_my_profile":"내 프로필 보기","sc_menu_close":"플레이어 메뉴 닫기","sc_menu_drag_handle":"드래그 메뉴 핸들","sc_menu_open":"플레이어 메뉴 열기","rp_icon":"RP 카테고리","components_track_list_title":"트랙리스트","next_button_label":"다음 비디오 페이지","previous_button_label":"이전 비디오 페이지"},"pl":{"aria_label_open_new_window":"(Otwórz w nowym oknie)","pl_card_badge_content_complete":"Ukończono","plm_nav_scroll_left":"Przesuń w lewo","plm_nav_scroll_right":"Przesuń w prawo","language_selector_default":"Wybierz język","nofications_new":"Nowe powiadomienia","profile_selector_mugshot":"Zdjęcie – {userName}","profile_selector_profile_card":"Karta profilu","profile_selector_rp_icon":"Poziom RP","profile_selector_switch_character":"Zmień postać","sc_link_account":"Konto","sc_link_activity_feed":"Zajęcia","sc_link_cookies_policy":"Polityka plików cookie","sc_link_cookies_settings":"Ustawienia plików cookie","sc_link_crews":"Ekipy","sc_link_do_not_sell_my_information":"Zabraniam sprzedaży moich danych","sc_link_find_friends":"Szukaj znajomych","sc_link_friends":"Znajomi","sc_link_game_activation":"Aktywacja gry","sc_link_help":"Pomoc","sc_link_import_friends":"Importuj znajomych","sc_link_join_social_club":"Zarejestruj się","sc_link_legal":"Informacje prawne","sc_link_log_out":"Wyloguj się","sc_link_messages":"Wiadomości","sc_link_my_friends":"Moi znajomi","sc_link_notifications":"Powiadomienia","sc_link_privacy_policy":"Polityka prywatności","sc_link_settings":"Ustawienia","sc_link_sign_in":"Zaloguj się","sc_link_support":"Wsparcie","sc_link_view_my_profile":"Przeglądaj profil","sc_menu_close":"Zamknij menu gracza","sc_menu_drag_handle":"Przeciągnij uchwyt menu","sc_menu_open":"Otwórz menu gracza","rp_icon":"Poziom RP","components_track_list_title":"Lista utworów","next_button_label":"Następna strona z filmami","previous_button_label":"Poprzednia strona z filmami"},"br":{"aria_label_open_new_window":"(Abre em uma nova janela)","pl_card_badge_content_complete":"Concluiu","plm_nav_scroll_left":"Rolar para a esquerda","plm_nav_scroll_right":"Rolar para a direita","language_selector_default":"Selecione um idioma","nofications_new":"Novas notificações","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Cartão de perfil","profile_selector_rp_icon":"Categoria de RP","profile_selector_switch_character":"Alternar personagem","sc_link_account":"Conta","sc_link_activity_feed":"Feed de atividade","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Configurações de cookies","sc_link_crews":"Comandos","sc_link_do_not_sell_my_information":"Não vendam a minha informação","sc_link_find_friends":"Encontrar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Ativação de jogos","sc_link_help":"Ajuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Inscrever-se","sc_link_legal":"Aviso legal","sc_link_log_out":"Sair","sc_link_messages":"Mensagens","sc_link_my_friends":"Meus amigos","sc_link_notifications":"Notificações","sc_link_privacy_policy":"Política de Privacidade","sc_link_settings":"Configurações","sc_link_sign_in":"Iniciar sessão","sc_link_support":"Suporte","sc_link_view_my_profile":"Visualizar meu perfil","sc_menu_close":"Fechar menu de jogador","sc_menu_drag_handle":"Arrastar título do menu","sc_menu_open":"Abrir menu de jogador","rp_icon":"Categoria de RP","components_track_list_title":"Lista de faixas","next_button_label":"Próxima página de vídeos","previous_button_label":"Página anterior de vídeos"},"ru":{"aria_label_open_new_window":"(ссылка откроется в новом окне)","pl_card_badge_content_complete":"Завершено","plm_nav_scroll_left":"Пролистать влево","plm_nav_scroll_right":"Пролистать вправо","language_selector_default":"Выбрать язык","nofications_new":"Новые уведомления","profile_selector_mugshot":"Фотография игрока {userName}","profile_selector_profile_card":"Карта профиля","profile_selector_rp_icon":"Категория опыта","profile_selector_switch_character":"Сменить персонажа","sc_link_account":"Учетная запись","sc_link_activity_feed":"Лента событий","sc_link_cookies_policy":"Политика использования файлов Cookie","sc_link_cookies_settings":"Настройки файлов Cookie","sc_link_crews":"Банды","sc_link_do_not_sell_my_information":"Я запрещаю продавать свою личную информацию","sc_link_find_friends":"Поиск друзей","sc_link_friends":"Друзья","sc_link_game_activation":"Активация игры","sc_link_help":"Помощь","sc_link_import_friends":"Импорт друзей","sc_link_join_social_club":"Регистрация","sc_link_legal":"Юридическая информация","sc_link_log_out":"Выход","sc_link_messages":"Сообщения","sc_link_my_friends":"Мои друзья","sc_link_notifications":"Уведомления","sc_link_privacy_policy":"Политика конфиденциальности","sc_link_settings":"Настройки","sc_link_sign_in":"Войти","sc_link_support":"Поддержка","sc_link_view_my_profile":"Моя учетная запись","sc_menu_close":"Закрыть меню игрока","sc_menu_drag_handle":"Перенести маркер меню","sc_menu_open":"Открыть меню игрока","rp_icon":"Категория опыта","components_track_list_title":"Список песен","next_button_label":"Следующая страница с видео","previous_button_label":"Предыдущая страница с видео"},"hans":{"aria_label_open_new_window":"（在新窗口中打开）","pl_card_badge_content_complete":"完成","plm_nav_scroll_left":"向左滚动","plm_nav_scroll_right":"向右滚动","language_selector_default":"选择一种语言","nofications_new":"新通知","profile_selector_mugshot":"{userName} 面部照片","profile_selector_profile_card":"档案卡","profile_selector_rp_icon":"声望值类别","profile_selector_switch_character":"切换角色","sc_link_account":"账户","sc_link_activity_feed":"活动动态","sc_link_cookies_policy":"Cookie 政策","sc_link_cookies_settings":"Cookie 设置","sc_link_crews":"帮会","sc_link_do_not_sell_my_information":"请勿出售我的信息","sc_link_find_friends":"查找好友","sc_link_friends":"好友","sc_link_game_activation":"游戏激活","sc_link_help":"帮助","sc_link_import_friends":"导入好友","sc_link_join_social_club":"注册","sc_link_legal":"法律声明","sc_link_log_out":"登出","sc_link_messages":"信息","sc_link_my_friends":"我的好友","sc_link_notifications":"通知","sc_link_privacy_policy":"隐私政策","sc_link_settings":"设置","sc_link_sign_in":"登录","sc_link_support":"支持","sc_link_view_my_profile":"查看我的档案","sc_menu_close":"关闭玩家菜单","sc_menu_drag_handle":"拖动菜单处理","sc_menu_open":"打开玩家菜单","rp_icon":"声望值类别","components_track_list_title":"曲目列表","next_button_label":"下一页视频","previous_button_label":"上一页视频"},"tw":{"aria_label_open_new_window":"（在新視窗開啟）","pl_card_badge_content_complete":"完成","plm_nav_scroll_left":"向左捲動","plm_nav_scroll_right":"向右捲動","language_selector_default":"選擇語言","nofications_new":"新通知","profile_selector_mugshot":"{userName} 罪犯檔案照","profile_selector_profile_card":"資料卡","profile_selector_rp_icon":"聲望值類別","profile_selector_switch_character":"切換角色","sc_link_account":"帳戶","sc_link_activity_feed":"動態活動","sc_link_cookies_policy":"Cookie 政策","sc_link_cookies_settings":"Cookie 設定","sc_link_crews":"幫會","sc_link_do_not_sell_my_information":"不要販售我的個人資料","sc_link_find_friends":"尋找好友","sc_link_friends":"好友","sc_link_game_activation":"遊戲啟用","sc_link_help":"幫助","sc_link_import_friends":"匯入好友","sc_link_join_social_club":"註冊","sc_link_legal":"法律聲明","sc_link_log_out":"登出","sc_link_messages":"訊息","sc_link_my_friends":"我的好友","sc_link_notifications":"通知","sc_link_privacy_policy":"隱私權政策","sc_link_settings":"設定","sc_link_sign_in":"登入","sc_link_support":"支援","sc_link_view_my_profile":"查看我的設定檔","sc_menu_close":"關閉玩家選單","sc_menu_drag_handle":"拖曳選單控點","sc_menu_open":"開啟玩家選單","rp_icon":"聲望值類別","components_track_list_title":"曲目清單","next_button_label":"下一個影片頁面","previous_button_label":"上一個影片頁面"}}'),
        C = (0, l.Os)({
          aria_label_open_new_window: {
            id: "aria_label_open_new_window",
            defaultMessage: "(Opens in a new window)"
          }
        });
      var M = a(4832);
      const I = "rockstargames-tinaff481c537a56a6fcdb1be85dfbc8944e",
        E = j((e => {
          let {
            children: t,
            to: a = "#",
            alt: s = "",
            autoBlank: i = !1,
            onClick: r = (() => {}),
            focused: n = !1,
            ...o
          } = e;
          const l = (0, c.useRef)(null),
            d = (0, m.c)(),
            u = !/^(https?|mailto):/i.test(a),
            f = /^#/.test(a),
            g = o?.target ?? (i ? "_blank" : "_self");
          let {
            ..._
          } = o, p = "";
          if ("aria-label" in _ && _["aria-label"] && (p = "_blank" === g ? `${_["aria-label"]} ${d.formatMessage(C.aria_label_open_new_window)}` : _["aria-label"]), (0, c.useEffect)((() => {
              n && l?.current && l.current.focus()
            }), [l?.current, n]), f) {
            const e = e => {
              e.preventDefault(), document?.querySelector(`[id='${a.replace("#","")}']`)?.scrollIntoView({
                behavior: "smooth",
                block: "center"
              }), r && r(e)
            };
            return (0, N.jsxs)("a", {
              title: s,
              href: a,
              onClick: e,
              ..._,
              "aria-label": p,
              ref: l,
              children: [t, "_blank" === g && !p && (0, N.jsx)("span", {
                className: I,
                children: d.formatMessage(C.aria_label_open_new_window)
              })]
            })
          }
          if (u) return (0, N.jsxs)(M.Af, {
            title: s,
            to: a,
            onClick: e => r(e),
            ..._,
            "aria-label": p,
            ref: l,
            children: [t, "_blank" === g && !p && (0, N.jsx)("span", {
              className: I,
              children: d.formatMessage(C.aria_label_open_new_window)
            })]
          });
          const h = Object.keys(_).filter((e => !["activeClassName", "key", "end"].includes(e))).reduce(((e, t) => ({
            ...e,
            [t]: o[t]
          })), {});
          return "function" == typeof h?.className && delete h.className, (0, N.jsxs)("a", {
            href: a,
            title: s,
            onClick: e => r(e),
            target: g,
            ...h,
            "aria-label": p,
            ref: l,
            children: [t, "_blank" === g && !p && (0, N.jsx)("span", {
              className: I,
              children: d.formatMessage(C.aria_label_open_new_window)
            })]
          })
        }), T);
      var L = a(5772),
        P = a.n(L),
        O = a(3052),
        z = a(48);
      const A = {
          player: "rockstargames-tinabb43df423657efcc0f1f38630a24e5e8",
          fixedToBottom: "rockstargames-tinae1f497e3ec34c2fd721b124969e27dd5",
          tracksOpen: "rockstargames-tinae8f2736f0ae21a56045104071a7a9fd7",
          tracks: "rockstargames-tinaea84096a931648765b1db46f708f70aa",
          iconBurger: "rockstargames-tinab91aad66a2102668715c5ddaaecede2e",
          trackList: "rockstargames-tinac44536ca7b7fa7236e86c65ae309057e",
          trackActive: "rockstargames-tinaac7826f934fc777f58017b1a5752419a",
          trackTitle: "rockstargames-tinaaafc522e642572d5ff93c7408b941829",
          trackIndex: "rockstargames-tinab880baa4707c71eb543f905816d8e952",
          controls: "rockstargames-tinaff92c8eddfc0a0fa7bc7f444973e4f28",
          controlsCurrentBg: "rockstargames-tinaa81d9465f14d65e8e20800d7b25f77d9",
          controlsCurrentBgVisible: "rockstargames-tinac87bd14d2bbc9248d9c197b77454f345",
          controlsTrack: "rockstargames-tinac23bf574089d1af93750f6af8ebb489f",
          controlsTrackTitle: "rockstargames-tinae4b77d29e904f9928cca1de93f5c7745",
          controlsTrackAnimating: "rockstargames-tinaba49949a9cd8c22385708f267c625029",
          scrollText: "rockstargames-tinafd9c80e5afaa1ed38ce85f2c3d70eae4",
          controlsTrackArtist: "rockstargames-tinac93c1e5399d9fd5e96ca246fdbfb307b",
          controlsTrackBurger: "rockstargames-tinab4e1a16e3460b40c1aacd92afe219856",
          controlsButtons: "rockstargames-tinad136125994c1d0db1449fce51af559ca",
          controlsScrub: "rockstargames-tinad3d935648408f71928bd49d2f7c5a9ff",
          controlsPlayPause: "rockstargames-tinaf5de7526c8cee98bdd7363fd7f2cf8ae",
          controlsPlayPausePlaying: "rockstargames-tinaefb6194f0df966e6c8c759937d2fb826",
          controlsNextTrack: "rockstargames-tinaf286e0ce01c5401e56dd579b076f1aae",
          controlsPrevTrack: "rockstargames-tinaa56bb7cb4b0e2de481777d1f09c3f2f2",
          controlsScrubTrack: "rockstargames-tinab8f38f45353fa54fcb6f9e2a3d0d5a85"
        },
        B = e => {
          let {
            src: t
          } = e;
          return (0, N.jsx)("div", {
            className: A.cover,
            style: {
              background: `url(${t}) center/cover`
            }
          })
        },
        D = e => {
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
          const u = (0, c.useRef)(null),
            f = (0, c.useRef)(null),
            g = (0, c.useRef)(null),
            [_, p] = (0, c.useState)(null),
            [h, k] = (0, c.useState)(!1),
            b = e => {
              const t = new Date(1e3 * e),
                a = t.getUTCMinutes(),
                s = t.getSeconds();
              return `${a.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")}`
            };
          return (0, c.useEffect)((() => {
            if (!f.current || !g.current) return;
            const e = () => {
              g.current && f.current && p(g.current.clientWidth > f.current.clientWidth)
            };
            return window.addEventListener("resize", e), e(), () => window.removeEventListener("resize", e)
          }), [g, f, t]), (0, c.useEffect)((() => {
            if (!u.current || !t?.duration) return;
            let e = null;
            const a = new(P())(u.current),
              i = e => {
                if (u.current) {
                  const a = u.current.clientWidth;
                  if (!u.current.contains(e.srcEvent.target)) return;
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
          }), [u.current, t.duration]), (0, c.useEffect)((() => {
            const e = Number(s?.currentTime);
            (a || !isNaN(e) && 0 !== e) && k(!0)
          }), [a, s?.currentTime]), (0, N.jsxs)("div", {
            className: A.controls,
            style: {
              "--track-color": o.color,
              "--track-mix-blend-mode": o.mix_blend_mode,
              "--current-pct": t.current / t.duration
            },
            children: [(0, N.jsx)("div", {
              className: [A.controlsCurrentBg, h ? A.controlsCurrentBgVisible : ""].join(" ")
            }), (0, N.jsx)("div", {
              className: A.controlsTrack,
              ref: f,
              children: (0, N.jsx)("span", {
                className: [A.controlsTrackTitle, _ ? A.controlsTrackAnimating : ""].join(" "),
                ref: g,
                children: o.title
              })
            }), (0, N.jsxs)("div", {
              className: A.controlsButtons,
              children: [(0, N.jsx)("div", {
                className: A.controlsPrevTrack,
                onClick: () => {
                  d && (l(d[0]), m(!0), i(!0))
                }
              }), (0, N.jsx)("div", {
                className: [A.controlsPlayPause, a ? A.controlsPlayPausePlaying : ""].join(" "),
                onClick: () => {
                  i(!a)
                }
              }), (0, N.jsx)("div", {
                className: A.controlsNextTrack,
                onClick: () => {
                  d && (l(d[1]), m(!0), i(!0))
                }
              })]
            }), (0, N.jsx)("div", {
              active: r ? "" : null,
              className: A.controlsTrackBurger,
              children: (0, N.jsx)("div", {
                className: A.iconBurger,
                onClick: () => {
                  n(!r)
                }
              })
            }), (0, N.jsxs)("div", {
              className: A.controlsScrub,
              children: [(0, N.jsx)("span", {
                children: b(t.current)
              }), (0, N.jsx)("div", {
                className: A.controlsScrubTrack,
                ref: u
              }), (0, N.jsx)("span", {
                children: b(t.duration)
              })]
            })]
          })
        },
        R = e => {
          let {
            tracks: t,
            trackId: a,
            setTrackId: s,
            tracksOpen: i,
            setTracksOpen: r,
            setPlaying: n,
            setAutoNext: o
          } = e;
          return (0, N.jsxs)("div", {
            className: A.tracks,
            children: [(0, N.jsx)("h4", {
              children: "Tracks"
            }), (0, N.jsx)("div", {
              className: A.trackBurger,
              onClick: () => {
                r(!i)
              }
            }), (0, N.jsx)("div", {
              className: A.trackList,
              children: t.map(((e, t) => (0, N.jsxs)("a", {
                style: {
                  "--highlight-color": e.color
                },
                className: a === e.id ? A.trackActive : "",
                onClick: () => {
                  s(e.id), n(!0), o(!0)
                },
                children: [(0, N.jsx)("span", {
                  className: A.trackIndex,
                  children: String(t + 1).padStart(2, "0")
                }), (0, N.jsx)("span", {
                  className: A.trackTitle,
                  children: e.title
                }), (0, N.jsx)("span", {
                  className: A.trackTime,
                  children: e.duration
                })]
              }, e.id)))
            })]
          })
        },
        V = e => {
          let {
            id: t,
            className: a = ""
          } = e;
          const {
            data: s
          } = (0, O.useQuery)(z.GetAudioAlbum, {
            variables: {
              id: t
            }
          }), [i, r] = (0, c.useState)(), [n, o] = (0, c.useState)(), [l, d] = (0, c.useState)(), [m, u] = (0, c.useState)(!1), [f, g] = (0, c.useState)(!1), [_, p] = (0, c.useState)(new HTMLAudioElement), [h, k] = (0, c.useState)({
            current: 0,
            duration: 0
          }), [b, v] = (0, c.useState)(!0);
          return (0, c.useEffect)((() => {
            const e = "audio",
              t = t => {
                t?.data?.rockstarAudioPlayerPlayTrackId && (o(t.data.rockstarAudioPlayerPlayTrackId), v(!1), g(!0)), f && t?.data?.attentionBlurredElsewhere && t?.data?.from !== e && g(!1)
              };
            return f && window.postMessage({
              attentionBlurredElsewhere: !0,
              from: e
            }), window.addEventListener("message", t, !1), () => window.removeEventListener("message", t, !1)
          }), [f]), (0, c.useEffect)((() => {
            if (!_) return;
            const e = () => {
                isNaN(_.duration) || k({
                  duration: _?.duration ?? 0,
                  current: _?.currentTime ?? 0
                })
              },
              t = () => {
                b && i && o(i[1])
              };
            return _.addEventListener("loadedmetadata", e), _.addEventListener("timeupdate", e), _.addEventListener("ended", t), () => {
              _.removeEventListener("loadedmetadata", e), _.removeEventListener("timeupdate", e), _.removeEventListener("ended", t)
            }
          }), [_, i, b]), (0, c.useEffect)((() => {
            f && window.postMessage({
              attentionBlurredElsewhere: !0,
              from: "audio"
            })
          }), [f]), (0, c.useEffect)((() => {
            _ && (f ? _.play() : _.pause(), u(!1))
          }), [f, _, l?.id]), (0, c.useEffect)((() => {
            if (!n) return;
            const {
              tracks: e
            } = s.audioAlbum, t = s.audioAlbum.tracks.findIndex((e => e.id === n));
            r([e[t - 1]?.id ?? e[e.length - 1].id, e[t + 1]?.id ?? e[0].id]), d(e[t])
          }), [n]), (0, c.useEffect)((() => {
            s && o(s.audioAlbum.tracks[0].id)
          }), [s]), l ? (0, N.jsxs)("div", {
            className: [A.player, A[a], m ? A.tracksOpen : ""].join(" "),
            children: [(0, N.jsx)("audio", {
              ref: e => {
                p(e)
              },
              src: l.mp3_src
            }), (0, N.jsx)(R, {
              tracks: s.audioAlbum.tracks,
              setTrackId: o,
              trackId: n,
              tracksOpen: m,
              setTracksOpen: u,
              setPlaying: g,
              setAutoNext: v
            }), (0, N.jsx)(B, {
              src: l.cover_src
            }), (0, N.jsx)(D, {
              setTrackId: o,
              trackBounds: i,
              tracksOpen: m,
              setTracksOpen: u,
              playing: f,
              setPlaying: g,
              timing: h,
              trackData: l,
              audioRef: _,
              setAutoNext: v
            })]
          }) : null
        },
        F = e => {
          let {
            text: t,
            style: a
          } = e;
          return (0, N.jsx)("div", {
            className: "rockstargames-tinab61bd7f274fd6d93c4bf33a9284b6b67",
            style: a,
            children: t
          })
        },
        $ = e => {
          let {
            brands: t = []
          } = e;
          return t.length ? (0, N.jsx)("div", {
            className: "rockstargames-tinacde08e212f23b312d5afca7f2ea1105c",
            children: t.map(((e, t) => {
              let {
                brand: a
              } = e;
              return (0, N.jsx)("div", {
                className: "rockstargames-tinac894fe869384587702b5370da072be86",
                "data-brand": a
              }, t)
            }))
          }) : null
        },
        U = {
          button: "rockstargames-tinae056494c33cff1fe89431f279fdb6b9a",
          secondary: "rockstargames-tinad340cf27f380a4347994e59544432eb3"
        },
        G = e => {
          let {
            className: t = "",
            children: a,
            context: s = "",
            to: i,
            onClick: r,
            ...n
          } = e;
          const o = [U.button, U[s], t].join(" ");
          return i ? (0, N.jsx)(E, {
            ...n,
            to: i,
            className: o,
            onClick: r ? () => r() : () => {},
            children: a
          }) : (0, N.jsx)("button", {
            ...n,
            type: "button",
            className: o,
            onClick: r ? () => r() : () => {},
            children: a
          })
        };
      var H = a(1740);
      const q = {
          pillBtn: "rockstargames-tinab59962d0e68ccd73b5ee2e571528d469",
          selected: "rockstargames-tinaf5c57dad202e0d6ff855d5a4aca2c804",
          plusButton: "rockstargames-tinacffaf489342637258d28f9b3b718836a",
          small: "rockstargames-tinab8abf927f0ba0af0d8ac0e9c77690d34",
          btnText: "rockstargames-tinae6e56461bfc2e426c4abc5451cd17284",
          btnTexticon: "rockstargames-tinacef9f9ce913d167a1fe2e7118a407cdd",
          whiteBtn: "rockstargames-tinab257e0629b9f8e101791d7a948ed15be",
          blackBtn: "rockstargames-tinacb03bccaee79394858682d2ce4d08253",
          transparentBtn: "rockstargames-tinad0460159a17533d4d23686d7dca76794",
          iconBtn: "rockstargames-tinaac61186c3c22346c9a4ee2cd2820d341",
          link: "rockstargames-tinac5920e56149b82f20f4db2ad9d397495",
          xboxone: "rockstargames-tinaa7057f2e6d398341f57bc462716d0508",
          xboxseriesxs: "rockstargames-tinaa693ab5879f34d7dea1737d3172ed4e4",
          ps4: "rockstargames-tinaa029ff88fc9aef470aaeef8053f90436",
          ps5: "rockstargames-tinae25638751cf3e7267db23c6a401fcc36",
          pc: "rockstargames-tinae03d92653f19a7ae3c4b3d5137bc9909"
        },
        W = e => {
          let {
            children: t,
            className: a,
            onClick: s,
            style: i
          } = e;
          return (0, N.jsx)("button", {
            className: a,
            onClick: s ? () => s() : () => {},
            style: i,
            type: "button",
            children: t
          })
        },
        X = e => {
          let {
            children: t,
            className: a,
            onClick: s,
            style: i,
            to: r
          } = e;
          return (0, N.jsx)(M.Af, {
            className: a,
            onClick: s ? () => s() : () => {},
            style: i,
            to: r,
            children: t
          })
        },
        Y = e => {
          let {
            btnColor: t = "#fff",
            className: a = "",
            consoleBtn: s,
            icon: i = "",
            img: r,
            labelColor: n = "#000",
            onClick: o,
            secondText: c,
            size: l,
            text: d,
            to: m,
            type: u = ""
          } = e;
          const f = [q.plusButton, q[u] ?? "", q[l] ?? "", q[s] ?? "", a].join(" "),
            g = {
              "--hvr-color": t ?? n,
              "--hvr-bg-color": n ?? t,
              "--hvr-border-color": t ?? n
            },
            _ = (0, N.jsxs)(N.Fragment, {
              children: [r ? (0, N.jsx)("img", {
                src: r,
                alt: ""
              }) : "", (0, N.jsxs)("div", {
                className: q.btnText,
                icon: i,
                children: [d, c ? (0, N.jsx)("span", {
                  children: c
                }) : ""]
              })]
            });
          if (m) {
            if (m.startsWith("http")) {
              const e = m.startsWith(document.location.origin) ? "_self" : "_blank";
              return (0, N.jsx)("span", {
                onClick: o ? () => o() : () => {},
                onKeyDown: o,
                className: f,
                role: "button",
                tabIndex: 0,
                children: (0, N.jsx)("a", {
                  href: m,
                  target: e,
                  children: _
                })
              })
            }
            return (0, N.jsx)(X, {
              className: f,
              onClick: o ? () => o() : () => {},
              style: g,
              to: m,
              children: _
            })
          }
          return (0, N.jsx)(W, {
            className: f,
            onClick: o ? () => o() : () => {},
            style: g,
            children: _
          })
        },
        K = e => {
          let {
            buttons: t = [],
            className: a
          } = e;
          return t.length ? (0, N.jsx)("div", {
            className: (0, H.classList)("rockstargames-tinab411a36e7fd12ab75861fe560b31b206", a),
            children: t.map(((e, t) => {
              let {
                icon: a,
                title: s,
                to: i
              } = e;
              return s ? (0, N.jsx)(Y, {
                icon: a,
                text: s,
                to: i
              }, t) : ""
            }))
          }) : null
        };
      var Q = a(8111),
        Z = a(8e3);
      const J = {
          deprecatedCarousel: "rockstargames-tinaeb5df7b3d51dffc4d993ca7abce4e944",
          "swiper-scrollbar-disabled": "rockstargames-tinaeb2dda6769a7c20a31e7996ff62e41f8",
          "swiper-horizontal": "rockstargames-tinab11093de3cb4f18ea2d59b8d4d1db44c",
          "swiper-vertical": "rockstargames-tinafa3209fdf995734a1aeeac2cc72cc1ea",
          renderedWithChildren: "rockstargames-tinac9f15e74b3166cd0db40501fcc70e868",
          panorama: "rockstargames-tinaf2a7e77af5dff445e978fd575a567508",
          img: "rockstargames-tinaf1d3d54c266a20fa0cbe9c342b0d98da",
          hideMobile: "rockstargames-tinae70d5eaa273e4a0a40ee62a308491810",
          hideLarge: "rockstargames-tinabace2af6c822ba7b36b53923629cba0f",
          imageAreaBg: "rockstargames-tinaf4bb071e6dad07c75b78ea21269ca662",
          infinite_false: "rockstargames-tinad6c3d175b843462bf23a1a1f3af6b095",
          track: "rockstargames-tinab5ff781c4a96bf031e8e7f5e0c9af395",
          perico: "rockstargames-tinabb97d296d17b7e801c6c0719a79463dd",
          dotsSlide: "rockstargames-tinadd55a6f93254ed13542089c6f36e0048",
          siblings: "rockstargames-tinaa59cf4385528c371a13be9962b67131b",
          active: "rockstargames-tinaaa5e195e0c7c6336929553314d52a896",
          "swiper-preloader-spin": "rockstargames-tinac05cc0faa8239c85cdc7d53c7e120e8e"
        },
        ee = e => {
          let {
            item: t
          } = e;
          return (0, N.jsxs)("div", {
            children: [(0, N.jsx)($t, {
              image: t?.image,
              badge: t?.badge ?? t?.image?.badge,
              badgeType: "badge3",
              role: t?.role ?? t?.image?.role,
              splitter: t?.splitter ?? t?.image?.splitter,
              type: t?.type,
              ariaLabel: t?.image?.ariaLabel ?? t.description,
              style: t?.style,
              className: (0, H.classList)(J.img, t?.className)
            }), (t?.title || t?.description) && (0, N.jsx)(Ve, {
              item: t
            })]
          })
        },
        te = e => {
          let {
            current: t,
            total: a
          } = e;
          return (0, N.jsx)("div", {
            className: "swiper-scrollbar",
            style: {
              "--current-slide": t,
              "--total-slides": a
            },
            children: (0, N.jsx)("div", {
              className: "swiper-scrollbar-drag"
            })
          })
        },
        ae = e => {
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
          const [u, f] = (0, c.useState)(0), g = (0, c.useMemo)((() => t && Array.isArray(t) ? t.map((() => (0, Z.v4)())) : null), [t]);
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
          return (0, N.jsxs)("div", {
            className: (0, H.classList)(J.deprecatedCarousel, J[n], J[`infinite_${!i}`], t ? J.renderedWithChildren : "", r),
            style: s,
            children: [(0, N.jsxs)(Q.wx, {
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
              children: [(0, N.jsx)("div", {
                className: J.trackWrapper,
                children: (0, N.jsxs)("div", {
                  className: J.track,
                  children: [a?.map((e => (0, N.jsx)(Q.Ky, {
                    children: (0, N.jsx)(ee, {
                      item: e
                    })
                  }, e.key))), t && t.map(((e, t) => e && (0, N.jsx)(Q.Ky, {
                    children: e
                  }, g && g[t])))]
                })
              }), (0, N.jsx)(te, {
                current: u,
                total: t ? t.length : a.length
              })]
            }), (o?.title || o?.description) && (0, N.jsx)(Ve, {
              item: o
            })]
          })
        };
      var se = a(5792),
        ie = a(2836);
      const re = (0, a(2748).U1)(),
        ne = e => e.some((e => !e)),
        oe = e => {
          let {
            condition: t = null,
            children: a
          } = e;
          const [s, i] = (0, c.useState)(!1), r = (e => {
            const [t] = (0, M.k5)(), [a, s] = (0, c.useState)(null), i = (0, ie.useRockstarUser)(), {
              loggedIn: r
            } = i, {
              currentCharId: n
            } = (0, ie.useRockstarUserState)(), o = function(e) {
              let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "gtao";
              return (0, c.useMemo)((() => {
                const s = e?.data?.characters?.[a];
                return "1" === (s?.[t]?.stats?.overview?.hasGtaPlus?.value ?? "0")
              }), [e, a, t])
            }(i, n);
            return (0, c.useEffect)((() => {
              const a = "true" === t.get("conditionPreview");
              if (!e?.length > 0) return;
              re.applyFilters("preview_conditions", e);
              const i = [];
              return e.forEach((e => {
                const {
                  value: s
                } = e;
                if (a) return "true" === t.get(s) ? (i.push(!0), !0) : (i.push(!1), !1);
                if (ne(i)) return !1;
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
              })), s(!ne(i)), () => {}
            }), [t, e, o, i, r]), a
          })(t);
          return (0, c.useEffect)((() => {
            i(r)
          }), [r]), (0, c.useMemo)((() => s ? a : null), [s])
        },
        ce = (0, se.withTranslations)((e => {
          let {
            children: t
          } = e;
          return c.Children.map(c.Children.toArray(t), (e => (0, N.jsx)(oe, {
            ...e?.props
          })))
        }));
      var le = a(4348),
        de = a(8652);
      const me = e => {
          let {
            className: t
          } = e;
          return (0, N.jsxs)("svg", {
            className: t,
            width: "16",
            height: "17",
            viewBox: "0 0 16 17",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, N.jsx)("path", {
              d: "M3.33203 8.5H12.6654",
              stroke: "white",
              strokeWidth: "1.33",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }), (0, N.jsx)("path", {
              d: "M8 3.83331L12.6667 8.49998L8 13.1666",
              stroke: "white",
              strokeWidth: "1.33",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })]
          })
        },
        ue = {
          pillBtn: "rockstargames-tinae3158363419b66e5afa2264e4928890c",
          selected: "rockstargames-tinaa9649249223f164eff11174ffc72616b",
          calloutContainer: "rockstargames-tinae6bd244761fdf3ebe3888539d9942921",
          calloutSection: "rockstargames-tinab1b8c93299158ef7d0f9eb04e14a7a64",
          calloutHeaders: "rockstargames-tinac81810436a5b57307c41f4d7a704b2f7",
          calloutHeaderMargins: "rockstargames-tinab4e1f72dfa9b38f23017e5f8ef48b9cb",
          calloutHeader: "rockstargames-tinab7964754215256201dd703aedca18b6f",
          calloutSubheader: "rockstargames-tinaac660fa7995007ed875e03a257e447d7",
          calloutVoteForm: "rockstargames-tinabee0795a36dd5adf822e1e50a7260f3d",
          voteButton: "rockstargames-tinab1baa545566a61b791b696c9ebf560ad",
          upvote: "rockstargames-tinab9c17ddd3e1052acb5097909ae2b07a1",
          downvote: "rockstargames-tinaf26b53e66e552183743465cce6a8d3a8",
          active: "rockstargames-tinad38a1764483a36e8a1509aee5b88ec31",
          calloutButton: "rockstargames-tinab7eb76afce3c6e686be44c356837b627",
          calloutLink: "rockstargames-tinaaefe6c5a233047c943a864cd56a7de2d",
          calloutLinkIcon: "rockstargames-tinaa74bf6baa632ad9b5f87efd2043cfed5",
          actionBlock: "rockstargames-tinacc491ddd715196ecd6ef54017ff05ec0",
          actionFooter: "rockstargames-tinadb26fed58ce50f4affc114670885721a"
        },
        fe = e => {
          let {
            foreign_id: t,
            foreign_type: a
          } = e;
          const {
            track: s
          } = (0, ie.useGtmTrack)(), {
            refetch: i
          } = (0, O.useQuery)(de.UserGetVote, {
            skip: !0
          }), [r] = (0, O.useMutation)(de.UserCastVote), [n, o] = (0, c.useState)(null), l = (0, c.useCallback)((e => {
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
          }), [t, a]), (0, N.jsxs)("div", {
            className: ue.calloutVoteForm,
            children: [(0, N.jsx)("button", {
              "aria-label": "upvote",
              className: [ue.upvote, ue.voteButton, n ? ue.active : ""].join(" "),
              name: "upvote",
              onClick: () => l(!0),
              type: "button"
            }), (0, N.jsx)("button", {
              "aria-label": "downvote",
              className: [ue.downvote, ue.voteButton, !1 === n ? ue.active : ""].join(" "),
              name: "downvote",
              onClick: () => l(!1),
              type: "button"
            })]
          })
        },
        ge = e => {
          let {
            action_text: t,
            link: a,
            trackingData: s
          } = e;
          const {
            track: i
          } = (0, ie.useGtmTrack)();
          return (0, N.jsx)("a", {
            href: a,
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, N.jsxs)("button", {
              className: ue.calloutLink,
              type: "button",
              onClick: s ? () => i({
                ...s
              }) : () => {},
              children: [t, (0, N.jsx)(me, {
                className: ue.calloutLinkIcon
              })]
            })
          })
        },
        _e = e => {
          let {
            helperText: t,
            linkText: a,
            link: s,
            trackingData: i
          } = e;
          const {
            track: r
          } = (0, ie.useGtmTrack)();
          return (0, N.jsxs)("div", {
            className: ue.actionFooter,
            children: [t, a && " ", a && (0, N.jsx)("a", {
              href: s ?? "",
              onClick: () => r({
                ...i
              }),
              children: a
            })]
          })
        },
        pe = (0, se.withTranslations)((e => {
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
            actionFooterLink: u,
            trackingData: f = {},
            actionFooterLinkTrackingData: g = {},
            t: _,
            ...p
          } = e;
          const {
            loggedIn: h
          } = (0, ie.useRockstarUser)(), {
            track: k
          } = (0, ie.useGtmTrack)(), b = `${document.location.origin}/auth/sc-auth-login?returnUrl=${window.location.pathname}`, {
            ref: v,
            inView: x
          } = (0, le.useInView)({
            threshold: .6
          }), [y, w] = (0, c.useState)(!1);
          let S;
          if ((0, c.useEffect)((() => {
              x && !y && (k({
                event: "page_section_impression",
                event_action: "impression",
                event_category: "page_section",
                event_label: "callout section",
                element_placement: `callout section - ${p?.sectionName??p?._memoq?.header}`
              }), w(!0))
            }), [x]), !t && !a) return null;
          switch (s) {
            case "vote":
              if (!h) {
                S = (0, N.jsx)(G, {
                  to: b,
                  className: ue.calloutButton,
                  onClick: f ? () => k({
                    ...f
                  }) : () => {},
                  children: "Log In"
                });
                break
              }
              S = (0, N.jsx)(fe, {
                foreign_id: n,
                foreign_type: o
              });
              break;
            case "button":
              i && r && (S = (0, N.jsx)(G, {
                to: r,
                className: ue.calloutButton,
                onClick: f ? () => k({
                  ...f
                }) : () => {},
                children: i
              }));
              break;
            case "link":
              i && r && (S = (0, N.jsx)(ge, {
                action_text: i,
                link: r,
                trackingData: f
              }));
              break;
            default:
              S = null
          }
          return (0, N.jsx)("div", {
            className: `${ue.calloutContainer} ${l||""}`,
            ref: v,
            children: (0, N.jsxs)("div", {
              className: ue.calloutSection,
              children: [(0, N.jsxs)("div", {
                className: [ue.calloutHeaders, S ? ue.calloutHeaderMargins : ""].join(" "),
                children: [t && (0, N.jsx)("h2", {
                  className: ue.calloutHeader,
                  children: _(t)
                }), a && (0, N.jsx)("h3", {
                  className: ue.calloutSubheader,
                  children: _(a)
                })]
              }), (0, N.jsxs)("div", {
                className: ue.actionBlock,
                children: [S, d && (0, N.jsx)(_e, {
                  helperText: d,
                  linkText: m,
                  link: u,
                  trackingData: g
                })]
              })]
            })
          })
        }));
      var he = a(300),
        ke = a(4236),
        be = a.n(ke);
      const ve = e => {
          let {
            isMulti: t,
            allowSelectAll: a,
            label: s,
            miscProps: i
          } = e;
          const [r, n] = (0, c.useState)(""), o = (0, c.useMemo)((() => be()().getData()), []);
          return (0, N.jsx)(he.cp, {
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
        xe = e => {
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
        },
        ye = {
          ps: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1506c5bba61fa270f73c874e3d60a94f.svg",
          ps3: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d118a14a73ce72b4687d9eb69724f4d2.svg",
          ps4: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3f9f55567df4006813f8bf50ad383ea0.svg",
          ps5: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6e8f340ded0fd6b0b0d434e8c6c8b75e.svg",
          switch: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/925d3b2d0b0e784c366e20d3f1a660da.svg",
          xbox: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d6d2cb861c79506282c6d6cbf1170f81.svg",
          xboxone: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f91e4753c491fb23c2b364f69480c9e.svg",
          xboxseriesxs: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/205366df6706c3b367fb5ff4f26ab7f3.svg",
          xbox360: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c5cee7464423693de19149a4554b3c2.svg",
          pc: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c050b43f15f34e2cd0592fad6dc48fd.svg",
          play: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/59c4aadbdbfcdb8d06d7caa54bdc9f60.svg",
          applestore: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/38a6e85fa4a378c5620efa9fde8ff223.svg",
          googleplay: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ca4e52b102306a186549cfd712b1c8f8.svg",
          questionMark: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e6833fa9baf4a5382bdd84b0b7d2c03f.svg",
          default: ""
        },
        we = e => ye[e] || null,
        Ne = {
          cta: "rockstargames-tinabc76de01fdd1260e254c482984d2a924",
          xbox: "rockstargames-tinaf591c5444c08121b0514f0c675da1479",
          xboxone: "rockstargames-tinae5124beff89c5b4093a4029a9fee3367",
          xboxseriesxs: "rockstargames-tinae52c94654eb462a8e65aa7607f5e21b5",
          ps: "rockstargames-tinac53b78d3d062ee8d58f63a0acb1df137",
          ps4: "rockstargames-tinaf4a27aba1505f555d7cd8c920645245a",
          ps5: "rockstargames-tinab5826d3700572b9bf36874e34d5c2a22",
          pc: "rockstargames-tinac7ee0cfc54be00a8b152c47997ce76ac",
          switch: "rockstargames-tinaa9b276d1c119e9cd14df54c4459197b0",
          googleplay: "rockstargames-tinaa4ccd0de63b104d4aa48c8c3176618f3",
          platformIcon: "rockstargames-tinac4ab0a89b65025cfe63b851116fb3a32",
          applestore: "rockstargames-tinaa13111cbe8acbd75f62da1c53de2c3df",
          btnIcon: "rockstargames-tinacb0ad8d8dd93218dc12091b883767967",
          label: "rockstargames-tinab81011c72b601075ebe54d7ceaa7d2d8",
          primary: "rockstargames-tinadbcf41d5c23e0eaf5089021f4d41c121",
          btnContent: "rockstargames-tinaf5e832587747dc414e10ab8e0bd843a9",
          icon: "rockstargames-tinac7a3f1a29594b307606d15e6827f63f9",
          "icon-left": "rockstargames-tinabd623c6039c3f4122936775ed4214bd4",
          "icon-right": "rockstargames-tinac79040e66c1f48e302291d8cf1335742",
          disabled: "rockstargames-tinad87326174de12b895401f738a23b177a",
          pillBtn: "rockstargames-tinabf9c11ff862c409ecb412254932a66d0",
          selected: "rockstargames-tinae07887131c72b6346c408895888f4fa7"
        },
        Se = e => {
          let {
            platform: t = ""
          } = e;
          const a = t ? we(t) : null,
            s = a ? (0, N.jsx)("img", {
              className: Ne.platformIcon,
              src: a,
              alt: "Platform Icon"
            }) : null;
          return (0, N.jsx)("span", {
            className: [Ne.btnContent, Ne.platformButton].join(" "),
            children: s
          })
        },
        je = e => {
          let {
            children: t,
            href: a,
            style: s,
            content: i,
            variant: r = null,
            icon: n,
            iconPosition: o = "none",
            iconStyle: l,
            badge: d,
            badgeStyle: m,
            platformItem: u,
            gtm: f = {},
            disabled: g,
            className: _
          } = e;
          const {
            track: p
          } = (0, ie.useGtmTrack)(), h = (0, se.useDataLayer)(), k = i ?? t, b = `Redirect to ${a}`, v = (0, c.useMemo)((() => {
            const e = window.location.hostname;
            let t;
            try {
              t = new URL(a)?.hostname
            } catch (a) {
              t = e
            }
            return e === t
          }), [a]), x = (0, c.useCallback)((() => {
            g || p({
              event: "cta_other",
              ...h,
              ...f,
              link_url: a ?? void 0,
              text: k ?? void 0
            })
          }), [f, a, h]), y = () => n ? (0, N.jsx)("span", {
            className: [Ne.icon, `icon-${o}`].join(" "),
            style: l,
            children: (0, N.jsx)("img", {
              className: Ne.btnIcon,
              src: we(n) || "",
              alt: `${n} icon`
            })
          }) : null;
          return (0, N.jsx)(M.Af, {
            to: a,
            target: v ? "_self" : "_blank",
            className: [Ne.cta, "platform" === r && u ? Ne[u] : "", g ? Ne.disabled : "", _].join(" "),
            style: s,
            "data-variant": r,
            onClick: x,
            disabled: g,
            "aria-label": b,
            children: "platform" === r && u ? (0, N.jsx)(Se, {
              platform: u
            }) : (0, N.jsxs)("div", {
              className: Ne.btnContent,
              children: ["left" === o && y(), (0, N.jsx)("span", {
                children: k
              }), "right" === o && y(), d ? (0, N.jsx)("span", {
                className: Ne.badge,
                style: m,
                children: d
              }) : null]
            })
          })
        };
      var Te = a(3272);
      const Ce = "rockstargames-tinaeb64520e04e486931cd65dc5b3fa61e8",
        Me = e => {
          let {
            alt: t,
            className: s,
            src: i,
            style: r
          } = e;
          const [n, o] = (0, se.usePreloadImg)(i);
          let c = i;
          !1 === n && ("rockstargames-tinaee609f31f3685766122c2c6fc0ef0710" === s && (c = a(1820)), c = a(3976));
          const {
            width: l,
            height: d
          } = o, m = {
            "--aspect-ratio": Number.isNaN(l / d) ? "" : l / d,
            ...r
          };
          return (0, N.jsx)("img", {
            src: c,
            className: s ?? "",
            alt: t,
            style: m
          })
        },
        Ie = e => {
          let {
            className: t,
            style: s = {},
            image: i = {},
            imageStyle: r = {}
          } = e, {
            alt: n,
            src: o
          } = (0, Te.useImageParser)(i);
          const {
            isMobile: c
          } = (0, se.useWindowResize)();
          return o.desktop || o.mobile || (n = "", o = {
            mobile: a(1820),
            desktop: a(3976)
          }), (0, N.jsx)("div", {
            className: i.frame ? `${i.frame} ${Ce}` : Ce,
            style: s,
            children: (0, N.jsx)(Me, {
              style: {
                ...r,
                ...i?.style
              },
              src: c ? o.mobile || o.desktop : o?.desktop || o?.mobile,
              alt: n,
              className: t
            })
          })
        };
      var Ee = a(8560),
        Le = a.n(Ee);
      const Pe = {
          grid: "rockstargames-tinaac295ed5b9cb441ed17843b34e83ea17",
          itemList: "rockstargames-tinacaf5589ddeca00ed09213e547674b1f3",
          gtaplus: "rockstargames-tinab291112adcf994a0f6acadd86f73b78a",
          rdo: "rockstargames-tinad146e8f862baefb60e91be5aa3c17b6e",
          noImg: "rockstargames-tinaba9b5ae08642b0213a3f04b3db9a9dac",
          gtao: "rockstargames-tinab6f2bdfd6a1d57b7ce840f7a56cc510b",
          custom: "rockstargames-tinaaf89164a043648d1464686ff13363ee4",
          yellow: "rockstargames-tinad244b17b74fc46269e8a106a99ab0f87",
          hotPink: "rockstargames-tinad90b28503318563cfd6059146d1fb6b6",
          red: "rockstargames-tinac3f8a8706901874d906f94c626be3c1e",
          turquoise: "rockstargames-tinafe2ec36e92e2bb4d453fdc4b05966418",
          purple: "rockstargames-tinaf5f7baf5b56f5b2ada053a93392bbf7a",
          teal: "rockstargames-tinaf4a229f41cd20f181d810c311416e3f2",
          blue: "rockstargames-tinaf6f689d687bcd482ea2cd2990fd66878",
          green: "rockstargames-tinaab270f1b4d3ad43e7bc51393b7c5c089",
          darkRed: "rockstargames-tinadc24ce78d962f3472b06955bf8855103",
          darkBlue: "rockstargames-tinab354493baac7389b21b511009f287428",
          goldenrod: "rockstargames-tinae4a078efee11d24c64e93ccf0744a33f",
          skull: "rockstargames-tinad4581a495de14e6762bb15debe5bb810"
        },
        {
          sanitize: Oe
        } = Le(),
        ze = e => {
          let {
            list: t,
            string: a,
            starColor: s,
            style: i,
            className: r,
            game: n,
            noImg: o,
            columns: l,
            mobileColumns: d
          } = e;
          const [m, u] = (0, c.useState)(null), f = a ? a.split("_#_") : t;
          return (0, c.useEffect)((() => {
            u(t)
          }), [t]), a || t ? l && m ? (0, N.jsx)("div", {
            className: Pe.grid,
            style: {
              "--unordered-list-grid-column": l,
              "--unordered-list-grid-column-mobile": d ?? l
            },
            children: (0, N.jsx)("ul", {
              style: (0, se.safeStyles)(i),
              className: (0, H.classList)(Pe.itemList, Pe.noImg, Pe[s], Pe[n]),
              children: m.map((e => (0, N.jsx)("li", {
                dangerouslySetInnerHTML: {
                  __html: Oe(e.content)
                }
              }, e.content)))
            })
          }) : (0, N.jsx)("ul", {
            style: (0, se.safeStyles)(i),
            className: (0, H.classList)(Pe.itemList, Pe.custom, o ? Pe.noImg : "", s ? Pe[s] : "", n ? Pe[n] : "", r ?? ""),
            children: f.map((e => (0, N.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: Oe(e?.content ?? e)
              }
            }, e?.content)))
          }) : null
        },
        Ae = {
          hr: "rockstargames-tinaf5cd418ab2ef6a89df6c95d2caa06ba8",
          redLine: "rockstargames-tinaf8b44ef9bbd3e7feb22bf79cc009b16e",
          gtao: "rockstargames-tinac442f7264db862a7cca6d9a56dacc205"
        },
        Be = e => {
          let {
            style: t,
            className: a = "",
            type: s
          } = e;
          return (0, N.jsx)("div", {
            style: t,
            className: [Ae.hr, Ae[s], a].join(" ")
          })
        },
        De = "rockstargames-tinafa6885b15a718acb24f48949c52e31f1",
        Re = e => {
          let {
            to: t,
            children: a
          } = e;
          return t ? (0, N.jsx)("a", {
            href: t,
            target: "_blank",
            rel: "noreferrer",
            children: a
          }) : a
        },
        Ve = e => {
          let {
            item: t,
            className: a = ""
          } = e;
          return (0, N.jsxs)("div", {
            className: (0, H.classList)("rockstargames-tinaef9e6981551ac5ce250ebff8b18d7a29", a),
            children: [t.title && (0, N.jsx)(Re, {
              to: t?.href ?? t?.to,
              children: (0, N.jsx)("h3", {
                children: t.title
              })
            }), Array.isArray(t?.description?.content) ? t.description.content?.map(((e, t) => e?.unorderedList ? (0, N.jsx)(ze, {
              columns: e.unorderedList.columns ?? null,
              style: {
                "--unordered-list-padding": "var(--grid-gap-static-sm)",
                "--unordered-list-margin-bottom": ".5rem"
              },
              noImg: !0,
              list: e.unorderedList.list
            }, t) : e?.image ? (0, N.jsx)(Ie, {
              image: e.image,
              className: e?.className,
              ariaLabel: e.image?.ariaLabel
            }, t) : e?.separator ? (0, N.jsx)("div", {
              style: {
                margin: `${e.separator.spacing} 0`
              },
              children: (0, N.jsx)(Be, {})
            }, t) : (0, N.jsx)("p", {
              children: (0, N.jsx)("span", {
                className: De,
                dangerouslySetInnerHTML: {
                  __html: e
                }
              })
            }, t))) : (0, N.jsx)("span", {
              className: De,
              dangerouslySetInnerHTML: {
                __html: t.description
              }
            })]
          })
        };
      var Fe = a(8936);
      const $e = e => {
          let {
            children: t,
            ...a
          } = e;
          const [s, i] = (0, c.useState)(!1);
          return (0, N.jsx)(Fe.cR, {
            ...a,
            onReady: () => {
              document.fonts.ready.then((() => {
                i(!0)
              }))
            },
            children: t
          })
        },
        Ue = {
          badge: "rockstargames-tinae279e2cebfa338f34b03fd732416e836",
          badgeSizeUpdate: "rockstargames-tinad7362a3e27ccaad9d2aadd2f31691340",
          badge2: "rockstargames-tinad697f4a5f7c876d5e540a96da1e0ca3a",
          badge3: "rockstargames-tinae1bba3cd4554abbb48a030af24bbada5"
        },
        Ge = e => {
          let {
            wrapper: t,
            children: a,
            role: s,
            splitter: i
          } = e;
          return i || s ? t(a) : a
        },
        He = e => {
          let {
            badge: t,
            badgeType: s,
            role: i,
            splitter: r
          } = e;
          const n = [];
          r ? t.split(r).map(((e, t) => n.push(e))) : n.push(t);
          let o = 100;
          return 2 == n.length && n[1].length < 4 && "off" !== n[1].toLowerCase() && 45, (0, N.jsxs)(Ge, {
            splitter: r,
            role: i,
            wrapper: e => (0, N.jsx)("div", {
              className: `${Ue.badge} ${s?Ue[s]:""} `,
              children: e
            }),
            children: [(0, N.jsx)(N.Fragment, {
              children: i && (0, N.jsx)(Ie, {
                image: {
                  alt: i,
                  desktop: a(6572)(`./${i}.png`)
                }
              })
            }), (0, N.jsx)($e, {
              className: `${r||i?"":Ue.badge} ${s?Ue[s]:""}`,
              min: 8,
              max: 1e3,
              mode: r || i ? "single" : "multi",
              children: n[0]
            }), (0, N.jsx)(N.Fragment, {
              children: n.shift() && r && n.length >= 1 && (0, N.jsx)($e, {
                min: 8,
                max: 1e3,
                mode: "single",
                forceSingleModeWidth: !0,
                children: n.join(" ")
              })
            })]
          }, "badge-wrapper")
        },
        qe = "rockstargames-tinac63cfb461217f059c8c25eec09602b30",
        We = e => {
          let {
            color: t
          } = e;
          return (0, N.jsxs)("div", {
            className: "rockstargames-tinaa481f47ab7e8af4042a665fab5aea27c",
            style: {
              "--loader-color": t
            },
            children: [(0, N.jsx)("div", {
              className: qe
            }), (0, N.jsx)("div", {
              className: qe
            }), (0, N.jsx)("div", {
              className: qe
            })]
          })
        };
      var Xe = a(1544);
      const Ye = {
          dropdownWrapper: "rockstargames-tinab951912c02de0e5e881fedd391d04810",
          items: "rockstargames-tinab0a8f220641417f889d4fd6039fe6bac",
          open: "rockstargames-tinaf5eb88111734e6e70d34ef2b095c44f6",
          opener: "rockstargames-tinaecb577af64f747d0d39cf03939ee3c73",
          secondary: "rockstargames-tinab64c3515fcd91f6b84410bd14640da81"
        },
        Ke = e => {
          let {
            children: t,
            className: a,
            title: s
          } = e;
          const [i, r] = (0, c.useState)(!1);
          return (0, N.jsx)(Xe.cp, {
            disabled: !i,
            children: (0, N.jsxs)("div", {
              className: [Ye.dropdownWrapper, i ? Ye.open : "", void 0 !== a ? a : ""].join(" "),
              children: [(0, N.jsx)("button", {
                className: Ye.opener,
                onClick: () => r(!i),
                children: s
              }), i && (0, N.jsx)("div", {
                className: Ye.items,
                onClick: () => r(!1),
                children: t
              })]
            })
          })
        };
      var Qe = a(5356);
      const Ze = e => {
          let {
            children: t,
            context: a = null,
            game: s,
            image: i = {},
            style: r = {},
            template: n = null,
            theme: o = null,
            reversedOnMobile: c = !1,
            className: l = "",
            id: d = null
          } = e;
          const m = (0, Te.useImageParser)(i),
            u = {
              ...r
            };
          if (m?.src?.desktop) {
            const e = (i?.style && i?.style["--background-image-size"]) ?? "var(--grid-background-size, cover)",
              t = (i?.style && i?.style["--background-image-repeat"]) ?? "var(--grid-background-repeat, no-repeat)",
              a = `var(--grid-background-position, center)/${e??"cover"}`;
            if (u.background = `url(${m?.src?.desktop}) ${t} ${a}`, i?.style && i?.style["--linear-gradient"]) u.background = `linear-gradient(${i?.style["--linear-gradient"]}), url(${m?.src?.desktop}) ${t} ${a}`;
            else if (i?.style && i?.style["--gradient-height"]) {
              const e = i?.style["--gradient-height"] || "3",
                s = i?.style["--gradient-start-color"] || "var(--background-color, transparent)",
                r = i?.style["--gradient-end-color"] || "var(--background-color, transparent)";
              u.background = `linear-gradient(180deg, ${s}, transparent ${e}%, transparent ${100-e}%, ${r}), url(${m?.src?.desktop}) ${t} ${a}`
            }
          }
          return (0, N.jsx)("div", {
            id: d,
            className: (0, Qe.classList)("rockstargames-tinaf42b4606ed4a5b16b7647ad7b7eb229d", c ? "rockstargames-tinab00444166ce6346d7ca364a75a335ecc" : "", l),
            "data-game": "community" === n ? null : s,
            style: (0, se.safeStyles)(u),
            "data-context": a,
            "data-template": n,
            "data-theme": o,
            children: t
          })
        },
        Je = e => {
          let {
            caption: t,
            children: a,
            ...s
          } = e;
          return t ? (0, N.jsxs)("figure", {
            ...s,
            children: [a, (0, N.jsx)("figcaption", {
              dangerouslySetInnerHTML: {
                __html: t
              }
            })]
          }) : a
        },
        et = e => {
          let {
            componentTitle: t,
            type: a,
            items: s
          } = e;
          return s?.length ? (0, N.jsx)("div", {
            className: "rockstargames-tinad393ab6eb68d416b116b6281abdb5e14",
            type: a,
            children: (0, N.jsxs)(Ze, {
              children: [t && (0, N.jsx)("h3", {
                children: t
              }), (0, N.jsx)(Ze, {
                className: "rockstargames-tinaed3ee31cb8e357d795886157f95a742a",
                children: s.map(((e, t) => {
                  return e?.embed ? (0, N.jsx)(Je, {
                    caption: e?.caption,
                    children: (0, N.jsx)("div", {
                      className: "rockstargames-tinadcf1c30612026a517f59af64d8703bc4",
                      dangerouslySetInnerHTML: {
                        __html: (a = e.embed, a.replace(/&gt;/g, ">").replace(/&lt;/g, "<"))
                      }
                    }, `${e?.key??t}_div`)
                  }, e?.key ?? t) : e?.text ? (0, N.jsx)("p", {
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
      var tt = a(1388);
      const at = {
          type: "spring",
          stiffness: 650,
          damping: 45
        },
        st = {
          ease: "easeOut",
          duration: .9,
          delay: .3
        },
        it = {
          open: {
            opacity: 0,
            transition: {
              ease: "easeOut",
              duration: .3
            }
          },
          closed: {
            opacity: 1,
            transition: st
          }
        },
        rt = {
          open: {
            opacity: 1,
            display: "grid",
            height: "auto",
            transition: {
              opacity: st,
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
              height: at
            },
            transitionEnd: {
              display: "none"
            }
          }
        },
        nt = {
          open: {
            "--cta-border-color": "var(--white-15)",
            "--cta-background-color": "rgba(255,255,255,.1)",
            "--cta-background-color-noBlur": "var(--black-100)",
            padding: "var(--padding-sm)",
            gridGap: "var(--grid-gap-sm)",
            pointerEvents: "none",
            "--btn-hover-bg-color": "var(--black-15)",
            "--btn-hover-bg-color-noBlur": "var(--black-100)",
            "--btn-hover-font-color": "var(--white-100)",
            "--btn-hover-border-color": "var(--white-15)"
          },
          closed: {
            "--cta-border-color": "var(--white-100)",
            "--cta-background-color": "var(--black-15)",
            "--cta-background-color-noBlur": "var(--black-15)",
            padding: "var(--padding-sm) var(--padding-md)",
            gridGap: 0,
            transition: at,
            transitionEnd: {
              "--btn-hover-bg-color": "var(--white-100)",
              "--btn-hover-bg-color-noBlur": "var(--white-100)",
              "--btn-hover-font-color": "var(--black-100)",
              "--btn-hover-border-color": "var(--white-100)"
            }
          }
        },
        ot = {
          pillBtn: "rockstargames-tinaba37d7130b54bd53bd309b0cd04717ff",
          selected: "rockstargames-tinac9c0bba52c010c4e3571f2702eef944b",
          container: "rockstargames-tinabfcd1a0671c127c9135d8c2feac75c34",
          content: "rockstargames-tinaa1cf623c9dd51dd05772a395d8311dac",
          unexpandedButton: "rockstargames-tinaba4683b82274b0f8ca98f97fd2b0a1c9",
          expandedArea: "rockstargames-tinadd25aa78f935c7d4cafdb1c8bc6d7932",
          closeButton: "rockstargames-tinac559c930e0a5a7caa72b3de9a3362a0a",
          platformButtons: "rockstargames-tinad6bfc47d3110920d77ea2e70dac9c898",
          platformButton: "rockstargames-tinab04a9bd68b598682a5dbe99dd1a2f06d",
          xbox: "rockstargames-tinafe4a687dfc69ef746fcbe4184c7a9574",
          xboxone: "rockstargames-tinab1f46a1ff640d7398e7736e814a5ed8f",
          xboxseriesxs: "rockstargames-tinae23b6f1412ea1ecb8a616b4f25d2888d",
          ps: "rockstargames-tinae0b107bda3c03c1e82c94195bfbc055b",
          ps4: "rockstargames-tinadcf3078cbde57db42e66e6ba4c269fbe",
          ps5: "rockstargames-tinae047116842d7619f0e04a3c9b6dbec13",
          pc: "rockstargames-tinadaa32798c37b9055cd280b838972e63e",
          switch: "rockstargames-tinaae7bc564778d8af6cf5f8a0491ef7dc8",
          buttonText: "rockstargames-tinac2fb2fb5ec39a5c3b3c14ee6c0505b53"
        },
        ct = e => {
          let {
            buttonText: t = "",
            link: s = "",
            platform: i = "",
            target: r = null,
            onClick: n
          } = e;
          const o = r ?? (s.startsWith(document.location.origin) ? "_self" : "_blank"),
            c = [ot.platformButton, ot[i]].join(" "),
            l = i ? a(3892)(`./${i}.svg`) : null,
            d = (0, N.jsxs)(N.Fragment, {
              children: [l ? (0, N.jsx)("img", {
                src: l,
                alt: t
              }) : "", !l && (0, N.jsx)("div", {
                className: ot.buttonText,
                children: t
              })]
            });
          return s.startsWith("http") ? (0, N.jsx)("a", {
            href: s,
            className: c,
            target: o,
            onClick: n,
            "aria-label": t,
            children: d
          }) : (0, N.jsx)(M.Af, {
            className: c,
            onClick: n,
            to: s,
            "aria-label": t,
            children: d
          })
        },
        lt = e => {
          let {
            buttonText: t = "Subscribe",
            className: s,
            children: i,
            platformsAndLinks: r = [],
            trackingType: n = "buy",
            trackingParent: o,
            target: l = null,
            trackingOId: d = null
          } = e;
          const [m, u] = (0, c.useState)(!1), {
            track: f
          } = (0, ie.useGtmTrack)();
          return (0, N.jsxs)("div", {
            className: (0, H.classList)(ot.container, s),
            children: [(0, N.jsx)(tt.q.div, {
              className: ot.content,
              animate: m ? "open" : "close",
              variants: it,
              "aria-hidden": !!m,
              children: i
            }), (0, N.jsxs)(tt.q.div, {
              className: ot.unexpandedButton,
              animate: m ? "open" : "closed",
              variants: nt,
              initial: !1,
              children: [(0, N.jsx)(tt.q.button, {
                className: ot.buttonText,
                "aria-expanded": m,
                onClick: () => {
                  u(!m), m || f("select_platform" === n ? {
                    event: "select_platform",
                    event_action: "select_platform",
                    event_category: "cta",
                    event_label: o,
                    text: t?.toLowerCase() ?? "subscribe"
                  } : "link_account" === n ? {
                    element_placement: o,
                    event: "cta_link_account",
                    event_action: "link_account",
                    event_category: "cta",
                    event_label: o,
                    o_id: d,
                    text: t?.toLowerCase()
                  } : {
                    event: "cta_buy",
                    event_action: "buy",
                    event_category: "cta",
                    event_label: o,
                    text: t?.toLowerCase() ?? "subscribe"
                  })
                },
                children: "string" == typeof t ? t : "Subscribe"
              }), (0, N.jsx)(Xe.cp, {
                disabled: !m,
                returnFocus: !0,
                children: (0, N.jsxs)(tt.q.div, {
                  className: ot.expandedArea,
                  animate: m ? "open" : "closed",
                  variants: rt,
                  initial: !1,
                  "aria-hidden": !m,
                  children: [(0, N.jsx)("button", {
                    className: ot.closeButton,
                    onClick: () => u(!1),
                    "aria-label": "Close",
                    children: (0, N.jsx)("img", {
                      src: a(2428),
                      alt: "Close"
                    })
                  }), (0, N.jsx)("div", {
                    className: ot.platformButtons,
                    children: r.length ? r.map((e => (0, N.jsx)(ct, {
                      buttonText: e.buttonText ?? (0, se.findPlatform)(e.platform)?.friendlyName ?? "",
                      link: e.href,
                      platform: e.platform,
                      onClick: () => (e => {
                        let {
                          href: t,
                          platform: a
                        } = e;
                        f({
                          element_placement: o,
                          event: "cta_store_link",
                          event_action: "store_link",
                          event_category: "cta",
                          event_label: "expanding platform button",
                          link_url: t,
                          text: a
                        })
                      })(e),
                      target: l
                    }, `${e.key}-${e.href}-${e.platform}`))) : ""
                  })]
                })
              })]
            })]
          })
        },
        dt = {
          animateBox: "rockstargames-tinae9374e74c542c1028a2068dfbd1e85a3",
          fadeArea: "rockstargames-tinaa63de5cdf9849ac45a0f6b4f7617cfa5",
          visible: "rockstargames-tinad7458685114194d602f94e2581de0f08",
          barGrow: "rockstargames-tinab0f4d843b626e3741c9dd38fcb3f56b0",
          bar: "rockstargames-tinaa4b99f54f3ce3987765143d8a151360a",
          animateMe: "rockstargames-tinaf9c3869a2a1e10490bdfbcb3ee89d7da"
        },
        mt = e => {
          let {
            children: t,
            style: a
          } = e;
          const s = (0, c.useRef)(null);
          return (0, c.useEffect)((() => {
            new IntersectionObserver((e => {
              e.forEach((e => {
                e.isIntersecting && e.target.classList.add([dt.visible])
              }))
            })).observe(s?.current)
          }), []), (0, N.jsx)("div", {
            style: a,
            className: [dt.fadeArea].join(" "),
            ref: s,
            children: t
          })
        },
        ut = {
          img: "rockstargames-tinae3f505a2281df28eb1acdf2d586e7fbd",
          startAnimation: "rockstargames-tinaa27e4d6733cea4a38e469425ef32ed3a"
        };
      (0, se.importAll)(a(8016));
      const ft = e => {
          let {
            fob640: t,
            isWideCard: s = !1,
            title: i,
            titleSlug: r
          } = e;
          const {
            isMobile: n
          } = (0, se.useWindowResize)(), o = (0, c.useMemo)((() => s && n ? a(2027)(`./${r}/mobile.png`) : s && !n ? a(3408)(`./${r}/desktop.png`) : t), [t, n, r]), [l] = (0, se.usePreloadImg)(o);
          return (0, N.jsx)("div", {
            role: "img",
            "aria-label": i,
            className: [ut.img, l ? ut.startAnimation : ""].join(" "),
            style: {
              backgroundImage: `url(${o})`
            }
          })
        },
        gt = {
          fobLink: "rockstargames-tinafded54fb94f7325c5a0b57590585b175",
          wide: "rockstargames-tinaa9b41f96042bda8a8c77b7b7b10f84d5"
        },
        _t = e => {
          let {
            game: t,
            to: a
          } = e;
          const {
            fob_640: s,
            site_in_rockstar: i = !1,
            title_slug: r
          } = t;
          let n = r;
          "V" === r && (n = "gta-v"), "GTAOnline" === r && (n = "gta-online"), "undeadnightmare" === r && (n = "reddeadredemption");
          const o = a ?? `${i?"":"/games"}/${n}`,
            c = ["VI"].includes(r);
          return (0, N.jsx)(E, {
            "data-gtm-category": "Games",
            "data-gtm-action": "Game Click-through",
            "data-gtm-label": r,
            "data-testid": `${r}-gamecard`,
            to: o,
            target: "_self",
            className: [gt.fobLink, c ? gt.wide : ""].join(" "),
            children: (0, N.jsx)(ft, {
              fob640: s,
              title: t.title,
              titleSlug: r,
              isWideCard: c
            })
          })
        },
        pt = {
          gameSiteHeader: "rockstargames-tinacb7cada84679a7af263e1436675a518a",
          activeNavItem: "rockstargames-tinaaa4aa7ed96facb38ed09c72eededb418",
          navHidden: "rockstargames-tinaac1cb9d2005f287ed666d334f816f8c5",
          navContent: "rockstargames-tinae5abd79468866e31fdad2780b169f687",
          headerNavOpen: "rockstargames-tinab98508d0923c5bb442c15772fbad9764",
          headerLogo: "rockstargames-tinae666ff4f0b91dfe78991244ac1a759a5",
          bg: "rockstargames-tinacfc6fd456ca2f3e9db06f780f412660f"
        },
        ht = e => {
          let {
            buttonText: t = null,
            gameOverrideStyles: a,
            navLinks: s,
            cta: i = "",
            game: r
          } = e;
          const [n, o] = (0, c.useState)(!1), l = (0, O.useMutateState)(), {
            navHidden: d
          } = (0, O.useState)();
          return (0, c.useEffect)((() => {
            l({
              gameSiteNavOpen: n
            })
          }), [n]), (0, c.useEffect)((() => {
            const e = () => {
              o(!1)
            };
            return document.addEventListener("click", e), () => document.removeEventListener("click", e)
          }), []), (0, N.jsxs)("header", {
            "data-game": r,
            className: [pt.gameSiteHeader, n ? pt.headerNavOpen : "", d ? pt.navHidden : "", a.gameSiteHeader, n ? a.headerNavOpen : ""].join(" "),
            children: [(0, N.jsx)("button", {
              className: [pt.headerLogo, a.headerLogo].join(" "),
              onClick: e => {
                o(!n), e.nativeEvent.stopImmediatePropagation()
              },
              type: "button",
              "aria-label": "Open Game Site Nav",
              dangerouslySetInnerHTML: {
                __html: t
              }
            }), (0, N.jsx)("div", {
              className: pt.bg
            }), (0, N.jsx)("nav", {
              children: (0, N.jsx)("div", {
                className: pt.navContent,
                children: s
              })
            }), i]
          })
        };
      var kt = a(1403),
        bt = a(3660),
        vt = a.n(bt);
      class xt extends c.Component {
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
          return this?.state?.error?.message ? (0, N.jsxs)("div", {
            className: "rockstargames-tinaf903c45f8ecc18bd55f702e202f3763a",
            children: [(0, N.jsx)("h1", {
              children: this.state.header ?? "An error occurred."
            }), (0, N.jsx)("span", {
              children: this.state.error.message
            })]
          }) : this.props.children
        }
      }
      const yt = function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return function(a) {
            return (0, N.jsx)(xt, {
              header: t,
              children: (0, N.jsx)(e, {
                ...a
              })
            })
          }
        },
        wt = e => {
          let {
            prevRef: t,
            nextRef: a,
            onNextClicked: s,
            onPrevClicked: i,
            onNextKeyDown: r
          } = e;
          return (0, N.jsxs)("div", {
            className: "rockstargames-tinad98f432655f19a842390597c4434db06",
            children: [(0, N.jsx)("button", {
              className: "rockstargames-tinac06ca360ce11f2cef7baf8c5fba05a42",
              ref: t,
              onClick: i,
              "aria-label": "Previous",
              role: "button"
            }), (0, N.jsx)("button", {
              className: "rockstargames-tinaa4f98606cdef508fbd2e69c5564a92d8",
              ref: a,
              onClick: s,
              onKeyDown: r,
              "aria-label": "Next",
              role: "button"
            })]
          })
        },
        Nt = yt((e => {
          let {
            description: t,
            slideChildren: a,
            size: s,
            title: i,
            customSlidesPerView: r = null,
            customSpaceBetween: n = null,
            slideClass: o,
            style: l,
            className: d,
            cardSizeBreakpoints: m,
            customAspectRatio: u,
            titleBadge: f
          } = e;
          const {
            track: g
          } = (0, ie.useGtmTrack)(), _ = (0, c.useRef)(null), p = (0, c.useRef)(null), h = (0, c.useRef)(null), [k, b] = (0, c.useState)(null), [v, x] = (0, c.useState)(!1), [y, w] = (0, c.useState)(null), [S, j] = (0, c.useState)(), [T, C] = (0, c.useState)(), {
            ref: M,
            inView: I
          } = (0, le.useInView)({
            threshold: .6
          }), [E, L] = (0, c.useState)(!1), [P, O] = (0, c.useState)(null), [z, A] = (0, c.useState)(!1);
          let B = !1;
          B = !0;
          const [D, R] = (0, c.useState)(0), [V, F] = (0, c.useState)(0);
          (0, c.useEffect)((() => {
            const e = () => {
              A(window.innerWidth < 1024)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), []), (0, c.useEffect)((() => {
            const e = () => {
              S && !(0, bt.isEmpty)(S) && S?.height > 0 && S?.height !== D && R(S?.height)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), [S]);
          const $ = {
            0: {
              spaceBetween: n ?? 16
            },
            1024: {
              spaceBetween: n ?? 18
            },
            1920: {
              spaceBetween: n ?? 20
            },
            2560: {
              spaceBetween: n ?? 22
            }
          };
          (0, c.useEffect)((() => {
            if (!_.current) return;
            const e = () => {
              if (_.current) {
                const e = r || Number(window.getComputedStyle(_.current).getPropertyValue("--slides-per-view")),
                  t = r ? 1 : Number(window.getComputedStyle(_.current).getPropertyValue("--slides-per-view-multiplier"));
                w(e * t)
              }
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), [_, r]), (0, c.useEffect)((() => {
            if (!a) return;
            let e = !1;
            a.forEach((t => {
              "cover-card" === t?.props?.tina?.payload?.meta?.type && (e = !0, O(t))
            })), L(e);
            const t = a.map(((e, t) => "cover-card" === e?.props?.tina?.payload?.meta?.type && z ? null : (0, N.jsx)(Q.Ky, {
              className: "rockstargames-tinaf58e79e329504e170dc9cb4595ea011b",
              onFocus: () => q(t),
              children: e
            }, Symbol(t).toString())));
            b(t)
          }), [a, z]), (0, c.useEffect)((() => {
            C({
              nextEl: h.current,
              prevEl: p.current
            })
          }), [h, p]), (0, c.useEffect)((() => {
            I && !v && a && (g({
              event: "page_section_impression",
              event_action: "impression",
              event_category: "page_section",
              event_label: `deck - ${i}`.toLowerCase(),
              element_placement: `deck - ${i}`.toLowerCase()
            }), x(!0))
          }), [I, a]);
          let U = "custom" === s ? {
            "--custom-aspect-ratio": u,
            ...l
          } : {
            ...l
          };
          const G = 0 !== D ? `${D}px` : "100%";
          U = {
            ...U,
            "--carousel-cards-height": G,
            "--carousel-nav-opacity": V
          };
          const q = e => {
            S?.slideTo(e)
          };
          return (0, N.jsxs)("div", {
            className: (0, H.classList)("rockstargames-tinad0c3d91603036c852633939015a6cb48", d),
            "data-size": s,
            "data-sm": m?.sm ? m?.sm : s,
            "data-md": m?.md ? m?.md : s,
            "data-lg": m?.lg ? m?.lg : s,
            "data-xl": m?.xl ? m?.xl : s,
            "data-xxl": m?.xxl ? m?.xxl : s,
            "data-has-covercard": E,
            "data-new-carousel-nav": !0,
            ref: _,
            style: U,
            children: [(0, N.jsx)("div", {
              className: "rockstargames-tinaddeb75a59ed783554b94e8298897a1fa",
              ref: M
            }), E && z && (0, N.jsx)("div", {
              className: "rockstargames-tinad5f00d41fdd2c864a0eb9e069cf08db0",
              children: P
            }), (0, N.jsx)("div", {
              className: "rockstargames-tinacdc60dbde3f8db6f466aba8a3e19fa96",
              children: (0, N.jsxs)("div", {
                className: "rockstargames-tinafb8e207418c783fc2f53b44c19faedca",
                children: [(0, N.jsxs)("div", {
                  className: "rockstargames-tinab779ba2045a88302079083935c90f7b3",
                  children: [!E && i && (0, N.jsxs)("div", {
                    className: "rockstargames-tinaedf90c7c5ee1c79049f5a6442f14c949",
                    children: [(0, N.jsx)("h2", {
                      children: i
                    }), f && (0, N.jsx)("span", {
                      className: "rockstargames-tinad7a4aaeb70d68fdee39312192efb990b",
                      children: f
                    })]
                  }), (0, N.jsx)(wt, {
                    prevRef: p,
                    nextRef: h,
                    onNextClicked: () => {},
                    onPrevClicked: () => {},
                    onNextKeyDown: e => {
                      if ("Tab" === e.key && !e.shiftKey) {
                        const t = S?.slides[S?.activeIndex].querySelector('a, button, [role="button"]');
                        t && (e.preventDefault(), t.focus())
                      }
                    }
                  })]
                }), t && (0, N.jsx)("div", {
                  className: "rockstargames-tinaa1007d13e3a321bb18b5fc667025d545",
                  dangerouslySetInnerHTML: {
                    __html: t
                  }
                })]
              })
            }), y ? (0, N.jsx)(Q.wx, {
              slidesPerView: y,
              onInit: e => {
                j(e);
                const t = setInterval((() => {
                  const {
                    height: a
                  } = e;
                  a > 0 && (R(a), F(1), clearInterval(t))
                }), 500)
              },
              grabCursor: !0,
              navigation: T,
              modules: [kt._2],
              breakpoints: $,
              slideClass: (0, H.classList)("swiper-slide", o),
              onSlideNextTransitionEnd: () => {
                g({
                  event_action: "next",
                  event_category: "carousel",
                  event: "carousel_next",
                  event_label: i?.toLowerCase() ?? ""
                })
              },
              onSlidePrevTransitionEnd: () => {
                g({
                  event_action: "previous",
                  event_category: "carousel",
                  event: "carousel_previous",
                  event_label: i?.toLowerCase() ?? ""
                })
              },
              onSlideChangeTransitionEnd: () => {
                g({
                  event_action: "swipe",
                  event_category: "carousel",
                  event: "carousel_swipe",
                  event_label: i?.toLowerCase() ?? ""
                })
              },
              children: k
            }) : ""]
          })
        }), null),
        St = {
          pillBtn: "rockstargames-tinad008b074498ad02717806cc094b8a780",
          selected: "rockstargames-tinabe9a2e37ec59e339b0d72cd8e5256703",
          hero: "rockstargames-tinad1346f9b98fbaac26948e361bd98b4c6",
          images: "rockstargames-tinac9c078a3102a96b26f1bf1f98306384f",
          background: "rockstargames-tinaa271224ca2caf56b470059cdb98d9a42",
          gradient: "rockstargames-tinaae257e9d159ae9bd7c8685e38ba16f59",
          layered: "rockstargames-tinaf663886f051e47ea04f097c85ae6625b",
          content: "rockstargames-tinaf9c204f451f3a53bcc307c00eb5f907f",
          descriptions: "rockstargames-tinad1bbf288f3fe6c79e658764847d2890a",
          buttonGroup: "rockstargames-tinafb373367ffd03ba01edaf671175244ab",
          legalText: "rockstargames-tinaf625ffdd1b33a1642aa0dec12efe7897",
          shardsCarousel: "rockstargames-tinae999b9cecfe233bcee8cab8682fb96bf"
        },
        jt = {
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
        Tt = {
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
        Ct = e => {
          let {
            title: t = "",
            mobileImg: a,
            desktopImg: s
          } = e;
          const i = (0, H.useGetCdnSource)(a ?? null),
            r = (0, H.useGetCdnSource)(s ?? i);
          return (0, N.jsx)("div", {
            className: St.shard,
            style: {
              "--background-image-mobile": `url(${i})`,
              "--background-image-desktop": `url(${r})`
            },
            children: (0, N.jsx)("h5", {
              children: t
            })
          })
        },
        Mt = e => {
          let {
            title: t = "Membership Rewards",
            shards: a
          } = e;
          const [s, i] = (0, c.useState)(null);
          return (0, c.useEffect)((() => {
            a && i(a.reduce(((e, t) => {
              if (!t?.shardImg) return e;
              const {
                title: a,
                shardImg: s
              } = t, {
                mobile: i,
                desktop: r
              } = s;
              return e.push((0, N.jsx)(Ct, {
                title: a,
                mobileImg: i?.full_src,
                desktopImg: r?.full_src
              })), e
            }), []))
          }), [a]), s ? (0, N.jsx)("div", {
            className: St.shardsCarousel,
            children: (0, N.jsx)(Nt, {
              title: t,
              slideChildren: s,
              size: "lg",
              customSpaceBetween: 0
            })
          }) : null
        },
        It = e => {
          let {
            animated: t = !1,
            ctas: a = [],
            description: s,
            expandingButtonLabel: i = "Subscribe",
            title: r
          } = e;
          const [n, o] = (0, c.useState)([]), [l, d] = (0, c.useState)([]);
          return (0, c.useEffect)((() => {
            o(a.reduce(((e, t) => t.isInExpandingButton ? (e.push({
              href: t.href,
              platform: t.platform,
              buttonText: t.buttonText
            }), e) : e), [])), d(a.reduce(((e, t) => (t.isInExpandingButton || e.push({
              icon: t.platform ? t.platform : "",
              title: t.buttonText,
              to: t.href
            }), e)), []))
          }), a), a.length ? n.length ? (0, N.jsx)(tt.q.div, {
            variants: t ? Tt : void 0,
            children: (0, N.jsxs)(lt, {
              buttonText: i,
              platformsAndLinks: n,
              children: [(0, N.jsxs)(tt.q.div, {
                className: St.descriptions,
                variants: t ? Tt : void 0,
                children: [(0, N.jsx)("h2", {
                  dangerouslySetInnerHTML: {
                    __html: r
                  }
                }), (0, N.jsx)("p", {
                  dangerouslySetInnerHTML: {
                    __html: s
                  }
                })]
              }), !!l && !!l.length && (0, N.jsx)(tt.q.div, {
                variants: Tt,
                children: (0, N.jsx)(K, {
                  buttons: l,
                  className: St.buttonGroup
                })
              })]
            })
          }) : (0, N.jsxs)(N.Fragment, {
            children: [(0, N.jsxs)(tt.q.div, {
              className: St.descriptions,
              variants: t ? Tt : void 0,
              children: [(0, N.jsx)("h2", {
                dangerouslySetInnerHTML: {
                  __html: r
                }
              }), (0, N.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: s
                }
              })]
            }), !!l && !!l.length && (0, N.jsx)(tt.q.div, {
              variants: Tt,
              children: (0, N.jsx)(K, {
                buttons: l,
                className: St.buttonGroup
              })
            })]
          }) : (0, N.jsxs)(tt.q.div, {
            className: St.descriptions,
            variants: t ? Tt : void 0,
            children: [(0, N.jsx)("h2", {
              dangerouslySetInnerHTML: {
                __html: r
              }
            }), (0, N.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: s
              }
            })]
          })
        },
        Et = e => {
          let {
            animated: t = !1,
            brands: a = [],
            ctas: s = [],
            description: i = "",
            expandingButtonLabel: r = "Subscribe",
            title: n = "",
            legalText: o
          } = e;
          return (0, N.jsxs)(tt.q.div, {
            className: St.content,
            initial: "hidden",
            animate: "visible",
            variants: t ? jt : void 0,
            children: [(0, N.jsx)(tt.q.div, {
              variants: t ? Tt : void 0,
              children: (0, N.jsx)($, {
                brands: a
              })
            }), (0, N.jsx)(It, {
              animated: t,
              ctas: s,
              description: i,
              expandingButtonLabel: r,
              title: n
            }), o && (0, N.jsx)(tt.q.div, {
              className: St.legalText,
              variants: t ? Tt : void 0,
              children: (0, N.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: o
                }
              })
            })]
          })
        },
        Lt = e => {
          let {
            animated: t = !1,
            backgroundImage: a,
            brands: s = [],
            className: i,
            ctas: r = [],
            description: n = "",
            expandingButtonLabel: o = "Subscribe",
            layeredImage: c,
            layeredImageSettings: l,
            legalText: d,
            shardsSection: m = {},
            theme: u = "gen9",
            title: f = ""
          } = e;
          const g = (e => {
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
            })(l),
            _ = (0, H.useGetCdnSource)(a?.mobile?.full_src ?? null),
            p = (0, H.useGetCdnSource)(a?.desktop?.full_src ?? _),
            h = (0, H.useGetCdnSource)(c?.mobile?.full_src ?? null),
            k = (0, H.useGetCdnSource)(c?.desktop?.full_src ?? h);
          return (0, N.jsxs)(tt.q.div, {
            className: (0, H.classList)(St.hero, i),
            style: {
              "--background-image-desktop": `url(${p})`,
              "--background-image-mobile": `url(${_})`,
              "--layered-image-desktop": `url(${k})`,
              "--layered-image-mobile": `url(${h})`
            },
            initial: "hidden",
            animate: "visible",
            variants: t ? jt : void 0,
            "data-type": "hero",
            theme: u,
            children: [(0, N.jsxs)("div", {
              className: St.images,
              children: [p && _ ? (0, N.jsx)("div", {
                className: St.background,
                style: a?.style ?? {}
              }) : "", h && k ? (0, N.jsx)("div", {
                className: St.layered,
                style: l ? g : {}
              }) : "", (0, N.jsx)("div", {
                className: St.gradient
              })]
            }), (0, N.jsx)(Et, {
              animated: t,
              ctas: r,
              description: n,
              expandingButtonLabel: o,
              title: f,
              brands: s,
              legalText: d
            }), m?.shards && (0, N.jsx)(Mt, {
              ...m
            })]
          })
        },
        Pt = e => {
          let {
            children: t,
            attributes: a = {},
            className: s = "",
            style: i = {}
          } = e;
          return (0, N.jsx)("span", {
            className: (0, H.classList)(s, a?.className, "rockstargames-tinaa7f106a8036d74ed9282a741476c6b5a"),
            style: (0, se.safeStyles)(i ?? a?.style ?? {}),
            dangerouslySetInnerHTML: {
              __html: vt().unescape(t)
            }
          })
        };
      var Ot = a(9088);
      const zt = (0, l.Os)({
          language_selector_default: {
            id: "language_selector_default",
            defaultMessage: "Select a Language"
          }
        }),
        At = {
          pillBtn: "rockstargames-tinacb792ef8796eaa09f8b5c1ee0230fcd7",
          selected: "rockstargames-tinac951b9f5173e8a37be389854c40995ee",
          scMenuStyles: "rockstargames-tinafa91a55e22ad688cba0bc1210eaf4726",
          languageSelector: "rockstargames-tinab631f2ce92e4a89f8eddebd32e8ed30a",
          open: "rockstargames-tinaedc598921a872174190475d0ad016d15",
          linkWrapper: "rockstargames-tinac4b7087d1fcbaad6967e61b84160ff79",
          links: "rockstargames-tinac7d345d5c7e567e0ee75b792d5bdfb88",
          selectBoxWrapper: "rockstargames-tinae3e55a10507405de05ae92006ec0d02b",
          selectBox: "rockstargames-tinac646a2bff16ec3003b027857488cd612",
          selectBoxOption: "rockstargames-tinabcccd1077d13d7fe1585655e5c5f8363"
        },
        Bt = j((e => {
          let {
            theme: t,
            languageSelectorOpened: a,
            setLanguageSelectorOpened: s
          } = e;
          const i = (0, Ot.IT)(),
            r = (0, m.c)(),
            [n, o] = w(),
            [l, u] = (0, c.useState)(!1),
            g = (0, c.useMemo)((() => p()), []),
            _ = (0, c.useCallback)((e => {
              let t = i.pathname;
              const a = t.split("/");
              return x.map((e => e.subdomaincom)).includes(a[0]) && (t = a.slice(1).join("/")), g.currentSite?.site === f ? "en" === e ? `${window.location.origin}${t}${i.search}` : `${window.location.origin}/${e}${t}${i.search}` : `${window.location.origin}${t}${i.search}`
            }), [i]),
            h = (0, c.useRef)(null),
            [k, b] = (0, c.useState)(0),
            v = matchMedia("(hover: none) and (pointer: coarse)").matches,
            y = e => {
              if (s && s(!1), n.subdomaincom === e || "none" === e) return void(s && s(!1));
              const t = x.find((t => t.subdomaincom === e));
              t && (o(t.iso), window.location.href = _(e))
            };
          return (0, c.useEffect)((() => {
            void 0 !== a && !1 === a && !0 === l && u(!1)
          }), [a]), (0, c.useEffect)((() => {
            h.current && b(h.current.scrollHeight)
          }), [h]), (0, N.jsxs)("div", {
            className: [At.languageSelector, l ? At.open : ""].join(" "),
            "data-theme": t,
            children: [v && "sc-menu" === t && (0, N.jsx)("div", {
              className: At.selectBoxWrapper,
              children: (0, N.jsxs)("select", {
                className: At.selectBox,
                onClick: e => e.stopPropagation(),
                onChange: e => {
                  y(e.currentTarget.value)
                },
                "aria-label": r.formatMessage(zt.language_selector_default),
                children: [(0, N.jsx)("option", {
                  className: At.selectBoxOption,
                  value: "none",
                  children: (0, N.jsx)(d.c, {
                    ...zt.language_selector_default
                  })
                }), x.map((e => {
                  let {
                    label: t,
                    subdomaincom: a
                  } = e;
                  return (0, N.jsx)("option", {
                    className: At.selectBoxOption,
                    value: a,
                    children: t
                  }, `mobile-${a}`)
                }))]
              })
            }), (!v || "sc-menu" !== t) && (0, N.jsxs)(N.Fragment, {
              children: [(0, N.jsxs)("button", {
                onClick: e => {
                  e.stopPropagation(), s && s(!l), u(!l)
                },
                type: "button",
                "aria-label": r.formatMessage(zt.language_selector_default),
                children: [(0, N.jsx)("i", {}), (0, N.jsx)("span", {
                  children: (0, N.jsx)(d.c, {
                    ...zt.language_selector_default
                  })
                })]
              }), (0, N.jsx)("div", {
                className: At.linkWrapper,
                ref: h,
                style: {
                  "--ls-linkWrapper-opened-height": `${k}px`
                },
                children: (0, N.jsx)("div", {
                  className: At.links,
                  children: x.map((e => {
                    let {
                      subdomaincom: t,
                      label: a
                    } = e;
                    return (0, N.jsx)(E, {
                      to: _(t),
                      onClick: () => {
                        y(t)
                      },
                      tabIndex: l ? 0 : -1,
                      children: a
                    }, `desktop-${t}`)
                  }))
                })
              })]
            })]
          })
        }), T),
        Dt = {
          layeredImage: "rockstargames-tinaa29c233d553c5905763bb69412c1ece4",
          layersWrapper: "rockstargames-tinaaabf78eb3e1fe545556ad0fa5639296e",
          "hero-lg": "rockstargames-tinaca666917bdeaed43fd0a7af7dc30a0f7",
          "hero-md": "rockstargames-tinaf0a202fcbf13f1e91157e531ae829ea3",
          "hero-sm": "rockstargames-tinae03dbf5d16aeab81ca65f4cb7e64446f",
          contain: "rockstargames-tinac4c3c929b11e88540e3f19d5715393ec",
          cover: "rockstargames-tinab283d6381c82abf4dde21c57b8fc5f66",
          fill: "rockstargames-tinae9d16b94c1ed476c9346cb6f48f5ad3e",
          "bg-img": "rockstargames-tinae45fabf9c4e04bf3ee27e9c84c50c09b",
          imageLayer: "rockstargames-tinaed8d0ad18a62f087629ff5831fa0ac55",
          "layer-lg-height": "rockstargames-tinafaf1d5c6b2fe2ad27d4bb95ba7388f3d",
          "layer-md-height": "rockstargames-tinab41041f11a5ef98325948acc3dec956c",
          "layer-sm-height": "rockstargames-tinaba7d5822aa073c9e01cd682d65c18944",
          "layer-xl-height": "rockstargames-tinaec2399a1f7e79e9aacba81b242ad0602",
          "layer-xs-height": "rockstargames-tinaa6ec38ac99c762fcf0dd99aa2ced8f2b",
          "layer-xxl-height": "rockstargames-tinad7c1314e717273dfbb2acd3d5e06e585",
          "layer-lg-width": "rockstargames-tinaca0dd7a55a5db5ee358ce51a166e5431",
          "layer-md-width": "rockstargames-tinabd4c246f4f0eaf7173d104ed1e7c2d06",
          "layer-sm-width": "rockstargames-tinafe3f49cba9cc10e4e076a43a6b36b862",
          "layer-xl-width": "rockstargames-tinabde3d6485ac7bb483dcca1ad4e2bbe67",
          "layer-xs-width": "rockstargames-tinab87efd95b330cacd4a5eaecf83528f4d",
          "layer-xxl-width": "rockstargames-tinaac872df7985f9d591c85f97c72d451dc",
          "bottom-y": "rockstargames-tinad63fdb49c964c28c5e8952cd79a393a0",
          "center-x": "rockstargames-tinad248443eb924360a5d1d7211094ea827",
          "center-y": "rockstargames-tinaa8d87c765a51d98f0e3a9afd149ed0dc",
          "left-x": "rockstargames-tinadcaa6339b43850be2e14967cab730041",
          "right-x": "rockstargames-tinab656d800e3d134bd3a7e273a5f6d7ae6",
          "top-y": "rockstargames-tinaadaf230f139f906eb912b58b315406ac",
          border: "rockstargames-tinac73e199a8978fb80895753c9a38fcdff",
          shards: "rockstargames-tinae650a715d6f220ad49bb568768154b0e",
          shards_three: "rockstargames-tinab0c8be28788c6b23cea904bdc60d7e07",
          shards_two: "rockstargames-tinae41252d3a0aee1d229f6bddc20c38d47",
          dual: "rockstargames-tinadb575e1d021e69ebb4265a29484e2888"
        },
        Rt = e => {
          let {
            style: t,
            className: a
          } = e;
          const s = {
              ...t
            },
            i = t["--border-image-source"],
            r = (0, H.useGetCdnSource)(i || null);
          return i && (s["--border-image-source"] = `url(${r})`), (0, N.jsx)("div", {
            className: (0, H.classList)(Dt.border, a),
            style: {
              ...s
            }
          })
        },
        Vt = e => e?.images ? (0, N.jsx)("div", {
          className: (0, H.classList)(Dt.layeredImage, Dt[e?.variantClass], Dt[e?.wrapperSizeClass]),
          style: {
            ...e?.style ?? {}
          },
          children: (0, N.jsxs)("div", {
            className: Dt.layersWrapper,
            children: [e?.images?.map(((e, t) => {
              const {
                image: a,
                paddingClass: s,
                imageSizeClass: i,
                objectFitClass: r,
                positionClassX: n,
                positionClassY: o,
                zIndex: c,
                className: l,
                style: d,
                alt: m,
                displayClass: u
              } = e;
              return (0, N.jsx)(Ie, {
                image: a,
                style: {
                  zIndex: c ?? t + 1
                },
                imageStyle: d,
                className: (0, H.classList)(l, u, Dt.imageLayer, Dt[s], Dt[i], Dt[r], Dt[n], Dt[o]),
                alt: m
              }, c ?? t + 1)
            })), e?.borderImage && (0, N.jsx)(Rt, {
              style: e?.borderImage,
              className: e?.borderImage?.displayClass
            })]
          })
        }) : null,
        Ft = e => {
          let {
            hero: t,
            children: a
          } = e;
          return t ? (0, N.jsx)("div", {
            className: "rockstargames-tinaefc561ad30f5dfe75c79d939737650dc",
            children: a
          }) : a
        },
        $t = e => {
          let {
            badge: t = null,
            badgeType: a,
            discountTxt: s,
            splitter: i,
            image: r,
            style: n,
            className: o = "",
            attributes: c = {},
            role: l,
            hero: d = !1
          } = e;
          return (0, N.jsx)(Ft, {
            hero: d,
            children: (0, N.jsx)("figure", {
              children: (0, N.jsxs)("div", {
                className: (0, H.classList)("rockstargames-tinacab262c98c7f5bb3e982d9b075b3c2a8", d ? "rockstargames-tinacefd6d8859aeec1057caed28caa160c3" : "", c?.hiddenMobile ? "hiddenMobile" : "", c?.hiddenLarge ? "hiddenLarge" : "", c?.className, o),
                style: (0, se.safeStyles)({
                  ...n,
                  ...c?.style
                }),
                ...c,
                children: [(0, N.jsx)(Ie, {
                  image: r,
                  className: o
                }), (r?.badge || r?.discountTxt || t || s) && (0, N.jsx)(He, {
                  badge: r?.discountTxt ?? r?.badge ?? t ?? s,
                  badgeType: a,
                  splitter: r?.splitter ?? i,
                  role: r?.role ?? l
                }), r?.caption && (0, N.jsx)("figcaption", {
                  dangerouslySetInnerHTML: {
                    __html: r.caption
                  }
                })]
              })
            })
          })
        },
        Ut = {
          pillBtn: "rockstargames-tinaeea0db67b0aabf28288b288845324afe",
          selected: "rockstargames-tinad1d25362fd730ca979d5ad79de088f89",
          multiSourceContainer: "rockstargames-tinadc538bbfc2f407ed9fe840097ccac819",
          multiSourceImage: "rockstargames-tinaee782a29692a8eb06db1287a4984c243",
          animatePlaceholder: "rockstargames-tinafbd73f5f70c2ce64aa9c9bd398f1a3b5",
          "loader-keyframes": "rockstargames-tinaf6040b2ae96a9b0dcdb2d283c9caff59"
        },
        Gt = e => {
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
          return (0, N.jsxs)("div", {
            className: Ut.multiSourceContainer,
            children: [!l && (0, N.jsx)("img", {
              className: [a, Ut.animatePlaceholder].join(" "),
              src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiBmaWxsPSIjMzMzMzMzIi8+Cjwvc3ZnPgo=",
              sizes: "(max-width: 1024px) 100vw, 1024px",
              alt: "Loading...",
              style: i
            }), (0, N.jsx)("img", {
              className: [Ut.multiSourceImage, a].join(" "),
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
        Ht = e => {
          let {
            impressionTracking: t,
            gtm: a = {},
            children: s
          } = e;
          return t?.shouldTrack ? (0, N.jsx)(Xt, {
            threshold: t?.threshold,
            gtm: a,
            children: s
          }) : s
        },
        qt = (e, t) => a => ((e, t, a) => (0, N.jsx)(Ht, {
          impressionTracking: a?.impressionTracking,
          gtm: a?.gtm,
          children: (0, N.jsx)(e, {
            ...t
          })
        }))(e, a, t),
        Wt = {
          event: "page_section_impression",
          event_action: "impression",
          event_category: "page_section",
          event_label: null,
          element_placement: null
        },
        Xt = e => {
          let {
            threshold: t = .6,
            children: a,
            gtm: s = {}
          } = e;
          const {
            track: i
          } = (0, ie.useGtmTrack)(), {
            ref: r,
            inView: n
          } = (0, le.useInView)({
            threshold: t,
            trackVisibility: !0,
            delay: 100
          }), [o, l] = (0, c.useState)(!1);
          return (0, c.useEffect)((() => {
            n && !o && (i({
              ...Wt,
              ...s
            }), l(!0))
          }), [n, r]), (0, N.jsx)("section", {
            ref: r,
            children: a
          })
        },
        Yt = {
          tag: "rockstargames-tinaed77774d2704bc0ebc0ac156542ae053"
        },
        Kt = e => {
          let {
            className: t,
            href: a,
            title: s,
            style: i
          } = e;
          const r = (0, N.jsxs)("div", {
            style: i,
            className: [Yt.tag, t].join(" "),
            children: [(0, N.jsx)("i", {}), s]
          });
          return void 0 !== a ? (0, N.jsx)(E, {
            to: a,
            children: r
          }) : r
        },
        Qt = {
          newswireBlock: "rockstargames-tinaa793f470884d207243d6c3caac8ad811",
          info: "rockstargames-tinad50f6d2bc5f983c05311292acb4c78a5",
          title: "rockstargames-tinacc389449dc1495fc9c323fc2c547857d",
          newswireBlockNoSpecialOrder: "rockstargames-tinaffd167124f27c8e26a147f49c88796e5",
          preview: "rockstargames-tinabbfbcf32c8c892ea29f4178949643475",
          previewMobile: "rockstargames-tinaf88852766488b21a28c42d230ea529a1",
          top: "rockstargames-tinafa1a6f4c7d94b94f5af2dc1ac9af79f1",
          startAnimation: "rockstargames-tinae380e8c67066df6f33fc018341ea96e5"
        },
        Zt = e => {
          let {
            index: t,
            post: a,
            noSpecialOrder: s = !1,
            focused: i,
            style: r = {}
          } = e;
          const [n] = (0, M.k5)(), o = a.preview_images_parsed.newswire_block, c = {
            default: 0 !== t || s ? o.square || o.d16x9 || o._fallback : o.d16x9 || o.square || o._fallback,
            mobile: o.square || o._fallback
          }, [l, d] = (0, se.usePreloadImg)(c.default), [m, u] = (0, se.usePreloadImg)(c.mobile), f = {
            default: {
              backgroundImage: `url(${c.default})`
            },
            mobile: {
              backgroundImage: `url(${c.mobile})`
            }
          };
          return (0, N.jsx)(E, {
            "data-gtm-category": "Newswire",
            "data-gtm-action": "Article Block Click",
            "data-gtm-label": `${a.title}`,
            to: a.url,
            className: [Qt.newswireBlock, s ? Qt.newswireBlockNoSpecialOrder : "", null !== l ? Qt.startAnimation : ""].join(" "),
            focused: i,
            children: (0, N.jsxs)(N.Fragment, {
              children: [0 !== t || n.get("tag_id") ? (0, N.jsx)("div", {
                className: Qt.preview,
                style: f.default
              }) : (0, N.jsxs)(N.Fragment, {
                children: [(0, N.jsx)("div", {
                  className: Qt.previewMobile,
                  style: f.mobile
                }), (0, N.jsx)("div", {
                  className: Qt.preview,
                  style: f.default
                })]
              }), (0, N.jsxs)("div", {
                className: Qt.info,
                children: [(0, N.jsxs)("div", {
                  className: Qt.top,
                  children: [a.primary_tags.length ? (0, N.jsx)(Kt, {
                    title: a.primary_tags[a.primary_tags.length > 1 && 722 === a.primary_tags[0].id ? 1 : 0].name
                  }) : "", (0, N.jsx)("time", {
                    dateTime: a.created,
                    children: a.created_formatted
                  })]
                }), (0, N.jsx)("h5", {
                  className: Qt.title,
                  dangerouslySetInnerHTML: {
                    __html: a.title
                  }
                })]
              })]
            })
          })
        };
      var Jt = a(5492),
        ea = a.n(Jt);
      const ta = (0, se.withTranslations)((e => {
          let {
            relativeTo: t = "",
            tagId: a = null,
            metaUrl: s = "/newswire",
            t: i
          } = e;
          const [r] = (0, M.k5)(), {
            tagId: n = null
          } = (0, Ot.W4)(), [o, l] = (0, c.useState)(n ?? a ?? r.get("tag_id")), [d, m] = (0, c.useState)(1), [u, f] = (0, c.useState)([]), [g, _] = (0, c.useState)(null), {
            data: p
          } = (0, O.useQuery)(ea(), {
            variables: {
              tagId: Number(o),
              page: d,
              metaUrl: s
            },
            autoSetLoading: !0
          });
          return (0, c.useEffect)((() => {
            m(1), f([]), l(n ?? a ?? r.get("tag_id"))
          }), [r.get("tag_id")]), (0, c.useEffect)((() => {
            p && p.posts && p.posts.paging && _(p.posts.paging), p && p.posts && p.posts.results && f(u.concat(p.posts.results))
          }), [p]), u.length ? (0, N.jsxs)(N.Fragment, {
            children: [(0, N.jsx)(ra, {
              posts: u,
              relativeTo: t,
              noSpecialOrder: null !== o
            }), null !== g && g.nextPage ? (0, N.jsx)(G, {
              onClick: () => m(d + 1),
              disabled: !1,
              context: "secondary",
              children: i("More Stories")
            }) : ""]
          }) : null
        })),
        aa = {
          pillBtn: "rockstargames-tinaafd0af959edb4a463c41ad4e9cc5dadc",
          selected: "rockstargames-tinabcd59aa4a9e88d86a2cbe8d4972f8f51",
          related: "rockstargames-tinaa748ad776070dab831edc1f67f66af08",
          posts: "rockstargames-tinac0aa38678decd13ca38886b4547efedd",
          just1post: "rockstargames-tinab1a31ddf7fd4458ee860d354a6a0ac92"
        },
        sa = (0, se.withTranslations)((e => {
          let {
            posts: t,
            t: a
          } = e;
          return (0, N.jsxs)("section", {
            className: aa.related,
            children: [(0, N.jsx)("h2", {
              children: a("Related Stories")
            }), (0, N.jsx)("div", {
              className: [aa.posts, 1 === t.length ? aa.just1post : ""].join(" "),
              children: t.map((e => (0, N.jsx)(Zt, {
                noSpecialOrder: !0,
                post: e
              }, e.id)))
            })]
          })
        })),
        ia = {
          newswireBlocks: "rockstargames-tinac2c8eedd25de7e186655f98b2a8d8960",
          noSpecialOrder: "rockstargames-tinac0d0db9dfc71c9f4f959b9c017b1ae4b"
        },
        ra = (0, se.withGtmTracking)((e => {
          let {
            noSpecialOrder: t = !1,
            posts: a,
            gtmTrack: s,
            relativeTo: i
          } = e;
          const [r, n] = (0, c.useState)(null);
          return (0, c.useEffect)((() => {
            if (!a.length) return;
            const e = {
              event: "trackEvent",
              eventCategory: "Home",
              eventAction: "Newswire Impressions",
              ecommerce: {
                impressions: []
              }
            };
            a.map(((t, a) => {
              e.ecommerce.impressions.push({
                name: t.title,
                id: t.id,
                position: a + 1,
                list: "Home"
              })
            })), s(e), n(a.length)
          }), [a.length]), (0, N.jsx)("div", {
            className: [ia.newswireBlocks, t ? ia.noSpecialOrder : "", ia.contextHome].join(" "),
            children: a.map(((e, a) => (0, N.jsx)(Zt, {
              index: a,
              noSpecialOrder: t,
              post: e,
              focused: a === r
            }, e.id)))
          })
        })),
        na = {
          pillBtn: "rockstargames-tinaf87ac9a7d56545847cf4d8ca471b03e6",
          selected: "rockstargames-tinaa8ea61e57fd58bfcb99aef7e6d687045",
          grid: "rockstargames-tinaa57241f29873f89f89ab8b27994e71c3",
          itemList: "rockstargames-tinadaec3f5ce63d42cb07e3e724737c8361",
          gtaplus: "rockstargames-tinabd78cfb71ed31029ba4279325166bfab",
          rdo: "rockstargames-tinaa6244398a800ffddab72c14f717b0eab",
          noImg: "rockstargames-tinae88f741af7d5e0529ff4fb6bb82af04f",
          gtao: "rockstargames-tinaab60d91453348d2e4c090ef3ebb04347",
          custom: "rockstargames-tinac20e7ba6ceaba3afd37095b172797711",
          yellow: "rockstargames-tinab16672deedfe102b065925cbe0fb931c",
          hotPink: "rockstargames-tinad0d01601de7131d9d6d11321b4299e59",
          red: "rockstargames-tinad1b5397aff94d33b57674b04a3456e03",
          turquoise: "rockstargames-tinad6541b973ce158c8f2fb81483015211f",
          purple: "rockstargames-tinaf3e34d902681219d4d8490eb164f7727",
          teal: "rockstargames-tinaa6c3b6b6a2395eb18a1174294f26f4ea",
          blue: "rockstargames-tinaeade6e843c5afd48d3a8959fb0b88222",
          green: "rockstargames-tinaa82c313f8f85fc6304ddb703be2fa271",
          darkRed: "rockstargames-tinad394c61fdce2bf8894ffb801ee680c2a",
          darkBlue: "rockstargames-tinaf1d73cc00a3ab644aab949183a8298a7",
          goldenrod: "rockstargames-tinacdcb0c5076309a329da2a6e857cc3bdf",
          skull: "rockstargames-tinaba4bd16bff2fbc40616457007b4a7442"
        },
        {
          sanitize: oa
        } = Le(),
        ca = e => {
          let {
            list: t,
            string: a,
            starColor: s,
            style: i,
            className: r,
            game: n,
            noImg: o,
            columns: l,
            mobileColumns: d
          } = e;
          const [m, u] = (0, c.useState)(null);
          return (0, c.useEffect)((() => {
            u(t)
          }), [t]), a || t ? l && m ? (0, N.jsx)("div", {
            className: na.grid,
            style: {
              "--ordered-list-grid-column": l,
              "--ordered-list-grid-column-mobile": d ?? l
            },
            children: (0, N.jsx)("ol", {
              style: (0, se.safeStyles)(i),
              className: (0, H.classList)(na.itemList, na.noImg, na[s], na[n]),
              children: m.map((e => (0, N.jsx)("li", {
                dangerouslySetInnerHTML: {
                  __html: oa(e.content)
                }
              }, e.content)))
            })
          }) : (0, N.jsx)("ol", {
            style: (0, se.safeStyles)(i),
            className: (0, H.classList)(na.itemList, na.custom, o ? na.noImg : "", s ? na[s] : "", n ? na[n] : "", r ?? ""),
            children: t.map((e => (0, N.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: oa(e?.content ?? e)
              }
            }, e?.content)))
          }) : null
        };
      var la = a(7100),
        da = a(4296);
      const ma = (e, t) => {
          const a = e.tiers && e.tiers.every((e => e.isComplete)),
            s = t.tiers && t.tiers.every((e => e.isComplete));
          return a && !s ? 1 : !a && s ? -1 : 0
        },
        ua = (0, l.Os)({
          pl_card_badge_content_complete: {
            id: "pl_card_badge_content_complete",
            defaultMessage: "Complete"
          }
        }),
        fa = {
          pillBtn: "rockstargames-tinae6891f053f06919f1ef0dc72cafe9ae7",
          selected: "rockstargames-tinae5cce3088e494e8ddb9b0cf5528697a3",
          packCardTierIndicator: "rockstargames-tinaeee874b61946e2a65886d622445e1c38",
          tierIndicator: "rockstargames-tinabf9ed66cb83cf9a38bfc6fbb8e105fb7",
          active: "rockstargames-tinacfa711252c08391d3a0f1ecd8728a61a"
        },
        ga = e => {
          let {
            tiers: t
          } = e;
          return (0, N.jsx)("div", {
            className: fa.packCardTierIndicator,
            children: t?.map(((e, t) => (0, N.jsx)("div", {
              className: [fa.tierIndicator, e.isComplete ? fa.active : ""].join(" ")
            }, t)))
          })
        },
        _a = {
          pillBtn: "rockstargames-tinae2e4b892ddcbdb2e09d3c3599a7e6c56",
          selected: "rockstargames-tinaff5c3c023fc12b68c6bf92b560c479b1",
          packCard: "rockstargames-tinad6ef486c5f60d41c5662b092336c1f52",
          packCardImageBox: "rockstargames-tinaeb4637cb1c81d1def1fd92252f90d675",
          packCompleted: "rockstargames-tinafcd5bbd0d1e3ebd45cf2cb372468e62c",
          packCardTextBox: "rockstargames-tinaa124ee1b0383d30157e84108cf10b83b",
          badge: "rockstargames-tinad42fb1fd7d553d75675a251df2a255ee",
          icon: "rockstargames-tinacbc69eda17393995ac9d41a8b4b531e8",
          label: "rockstargames-tinad4649f3812d37e7407503d49dcaaba04"
        },
        pa = [{
          isComplete: !1
        }, {
          isComplete: !1
        }, {
          isComplete: !1
        }, {
          isComplete: !1
        }],
        ha = e => {
          let {
            title: t,
            url: a,
            images: s,
            className: i,
            tiers: r,
            onClick: n,
            imageSize: o = 420,
            imageLoaded: l
          } = e;
          const {
            isMobile: d
          } = (0, se.useWindowResize)(), {
            loggedIn: u
          } = (0, ie.useRockstarUser)(), {
            selectedCharacterTuple: f
          } = (0, ie.useRockstarUserState)(), [g, _] = (0, c.useState)(!1), [p, h] = (0, c.useState)(l), [k, b] = (0, c.useState)(!1), v = (0, m.c)(), x = !!r?.length;
          (0, c.useEffect)((() => {
            if (Array.isArray(f)) {
              const e = f?.[0];
              b((0, se.getGen9Consoles)().includes(e))
            }
          }), [String(f)]), (0, c.useEffect)((() => {
            if (r && r.length > 0) {
              const e = r.some((e => !e.isComplete));
              _(!e)
            } else _(!1)
          }), [r]);
          const y = `${d?s?.mobile:s?.desktop}?im=Resize,height=${o}`;
          return (0, se.usePreloadImg)(y, (() => h(!0))), (0, N.jsx)(M.Af, {
            className: [_a.packCard, i, g ? _a.packCompleted : ""].join(" "),
            to: a,
            onClick: n,
            children: (0, N.jsxs)("div", {
              className: [_a.packCardImageBox, p ? _a.packCardImageLoaded : ""].join(" "),
              style: {
                "--background-image": `url(${y})`
              },
              children: [g && (0, N.jsxs)("div", {
                className: _a.badge,
                children: [(0, N.jsx)("div", {
                  className: _a.icon
                }), (0, N.jsx)("div", {
                  className: _a.label,
                  children: v.formatMessage(ua.pl_card_badge_content_complete)
                })]
              }), (0, N.jsxs)("div", {
                className: _a.packCardTextBox,
                children: [(0, N.jsx)("h4", {
                  children: t
                }), u && !g && k && (0, N.jsx)(ga, {
                  tiers: x ? r : pa
                })]
              })]
            })
          })
        },
        ka = {
          pillBtn: "rockstargames-tinac0607ec9e0a3925181496fc555721e0a",
          selected: "rockstargames-tinaff76988869bea7d18917be00339b2434",
          packList: "rockstargames-tinaffeeb1f272f99c5cb4711e4956c65f7f",
          headerVisible: "rockstargames-tinaf6652e03be6ce55bd8f068900093a707",
          packCard: "rockstargames-tinaa53b37fe7ab10b353eceea86123258a1",
          packGrid: "rockstargames-tinab85775dc95fb3881171ee42e49076cbf"
        };
      la.w$.registerPlugin(da.Q);
      const ba = e => {
          let {
            isHeaderVisible: t,
            packListItems: a,
            packCardClassName: s = ka.packCard,
            packListClassName: i = ka.packList,
            packGridClassName: r = ka.packGrid,
            selectPackCard: n,
            sortFunction: o = ma
          } = e;
          const l = (0, c.useRef)(null),
            d = [...a].sort(o),
            [m, u] = (0, c.useState)(),
            [f, g] = (0, c.useState)(!1);
          return (0, c.useEffect)((() => {
            if (!0 === f) return;
            clearTimeout(m);
            const e = setTimeout((() => {
              g(!0)
            }), 1e3);
            u(e)
          }), []), (0, da.Q)((() => {
            if (!1 !== f && l?.current) {
              const e = l.current.children;
              la.w$.to(e, {
                opacity: 1,
                y: 0,
                duration: .5,
                stagger: .05,
                ease: la.ML.easeInOut
              })
            }
          }), {
            dependencies: [f, a],
            scope: l,
            revertOnUpdate: !0
          }), (0, N.jsx)("div", {
            className: [i, t ? ka.headerVisible : ""].join(" "),
            "data-testid": "pack-list",
            children: (0, N.jsx)("div", {
              ref: l,
              className: r,
              "data-testid": "pack-grid",
              children: d.map(((e, t) => {
                let {
                  id: a,
                  name: i,
                  title: r,
                  url: o,
                  images: c,
                  tiers: l
                } = e;
                return (0, N.jsx)(ha, {
                  title: r,
                  url: o,
                  className: s,
                  images: c,
                  tiers: l,
                  onClick: () => ((e, t, a, s, i) => {
                    n(e, t, a, s, i)
                  })(i, r, o, a, t)
                }, r)
              }))
            })
          })
        },
        va = {
          pillBtn: "rockstargames-tinadb4bf6cb61b2370932e4811235d51afa",
          selected: "rockstargames-tinab691088f1c9719532c68ca7b97487e5b",
          chipButton: "rockstargames-tinabfe6fefc1068ed81c8b38519a854285f"
        },
        xa = e => {
          let {
            title: t,
            onClick: a,
            selected: s
          } = e;
          return (0, N.jsx)("button", {
            type: "button",
            onClick: a,
            tabIndex: 0,
            "aria-label": t,
            className: [va.chipButton, s ? va.selected : ""].join(" "),
            children: (0, N.jsx)("div", {
              children: t
            })
          })
        };
      var ya;

      function wa() {
        return wa = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = arguments[t];
            for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
          }
          return e
        }, wa.apply(this, arguments)
      }
      const Na = e => c.createElement("svg", wa({
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        fill: "none"
      }, e), ya || (ya = c.createElement("path", {
        stroke: "#fff",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "m15 18-6-6 6-6"
      })));
      var Sa;

      function ja() {
        return ja = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = arguments[t];
            for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
          }
          return e
        }, ja.apply(this, arguments)
      }
      const Ta = e => c.createElement("svg", ja({
          xmlns: "http://www.w3.org/2000/svg",
          width: 24,
          height: 24,
          fill: "none"
        }, e), Sa || (Sa = c.createElement("path", {
          stroke: "#fff",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
          d: "m9 18 6-6-6-6"
        }))),
        Ca = {
          pillBtn: "rockstargames-tinaf5c8cbcdc2408c602e1d5c5ef98091a1",
          selected: "rockstargames-tinaf05732bff172f32532936ffdf636a215",
          navScrollButton: "rockstargames-tinaef8ca38f98b731ff5dfe07937b1bbe34"
        },
        Ma = e => {
          let {
            direction: t,
            className: a,
            ...s
          } = e;
          return (0, N.jsxs)("button", {
            type: "button",
            className: [a, Ca.navScrollButton].join(" "),
            ...s,
            children: ["left" === t && (0, N.jsx)(Na, {}), "right" === t && (0, N.jsx)(Ta, {})]
          })
        },
        Ia = (0, l.Os)({
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
          pln_scroll_left: {
            id: "pln_scroll_left",
            defaultMessage: "Scroll Left"
          },
          pln_scroll_right: {
            id: "pln_scroll_right",
            defaultMessage: "Scroll Right"
          }
        }),
        Ea = {
          pillBtn: "rockstargames-tinac07e609b8b71ab690ceb8c0ce0a10e3b",
          selected: "rockstargames-tinab7277764b073fb1731f97500d63602dd",
          chipsContainer: "rockstargames-tinab12cbbc254604b2d0a9e23a794cc306b",
          chips: "rockstargames-tinafde4c31ca848c29a1064a0fee3686f93",
          nextChipNavButton: "rockstargames-tinae753e2314e48a7d59ead26e77cac50aa",
          previousChipNavButton: "rockstargames-tinace3553d0304e228596f67c2308240648",
          nextNavIcon: "rockstargames-tinaef938f00847374bd89f70d0e5b1f97a8",
          previousNavIcon: "rockstargames-tinaf750c5a49886ae190c14e52aa026a417"
        },
        La = e => {
          let {
            navItems: t,
            category: a,
            setCategory: s,
            chipsContainerClass: i = Ea.chipsContainer,
            previousChipButtonClass: r = "",
            nextChipBtnClass: n = ""
          } = e;
          const o = (0, m.c)(),
            {
              track: l
            } = (0, ie.useGtmTrack)(),
            {
              pathname: d
            } = (0, Ot.IT)(),
            u = (0, c.useMemo)((() => Math.max(t.findIndex((e => e.name === a)), 0)), [t, d]),
            [f, g] = (0, c.useState)(u),
            [_, p] = (0, c.useState)(!1),
            [h, k] = (0, c.useState)(!1),
            [b, v] = (0, c.useState)(!1),
            x = (0, c.useRef)(null),
            y = (0, c.useRef)(null),
            w = (0, c.useRef)(null),
            S = (0, c.useCallback)(((e, t) => {
              w.current && w.current.slideTo(e), g(e), j(`Career Progress Nav > ${t}`)
            }), [l]),
            j = (e, t) => {
              l({
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
            s(f)
          }), [f]);
          const T = e => {
            e.isEnd ? k(!0) : k(!1), e.isBeginning ? v(!0) : v(!1)
          };
          return (0, c.useEffect)((() => {
            w.current && ((w.current.wrapperEl.clientWidth || 0) > (w.current.el.clientWidth || 0) ? (p(!0), w.current.params.centeredSlides = !0, w.current.params.centeredSlidesBounds = !0) : (p(!1), w.current.params.centeredSlides = !1, w.current.params.centeredSlidesBounds = !1))
          }), [w.current?.wrapperEl.clientWidth, w.current?.el.clientWidth]), (0, N.jsxs)("div", {
            className: i,
            children: [!b && _ && (0, N.jsx)("div", {
              ref: y,
              className: (0, H.classList)(Ea.previousChipNavButton, r),
              children: (0, N.jsx)(Ma, {
                direction: "left",
                className: Ea.previousNavIcon,
                onClick: () => {
                  w.current && (w.current?.slidePrev(), w.current.isBeginning ? v(!0) : v(!1), l({
                    event: "carousel_previous",
                    event_action: "click",
                    event_category: "carousel",
                    element_placement: "career progress page"
                  }))
                },
                "aria-label": o.formatMessage(Ia.pln_scroll_left)
              })
            }), (0, N.jsx)("div", {
              className: Ea.chips,
              children: (0, N.jsx)(Q.wx, {
                onBeforeInit: e => w.current = e,
                onInit: T,
                className: Ea.chips,
                direction: "horizontal",
                grabCursor: !0,
                slidesPerView: "auto",
                initialSlide: f,
                onSlideChange: T,
                onResize: T,
                children: t.map(((e, t) => {
                  let {
                    title: a
                  } = e;
                  return (0, N.jsx)(Q.Ky, {
                    children: (0, N.jsx)(xa, {
                      title: a,
                      onClick: () => S(t, a),
                      selected: f === t
                    })
                  }, a)
                }))
              })
            }), !h && _ && (0, N.jsx)("div", {
              ref: x,
              className: (0, H.classList)(Ea.nextChipNavButton, n),
              children: (0, N.jsx)(Ma, {
                direction: "right",
                className: Ea.nextNavIcon,
                onClick: () => {
                  w.current && (w.current?.slideNext(), w.current.isEnd ? k(!0) : k(!1), l({
                    event: "carousel_next",
                    event_action: "click",
                    event_category: "carousel",
                    element_placement: "career progress page"
                  }))
                },
                "aria-label": o.formatMessage(Ia.pln_scroll_right)
              })
            })]
          })
        },
        Pa = e => {
          let {
            navItems: t,
            onNavItemClick: a,
            isOpen: s,
            isHeaderVisible: i
          } = e;
          const {
            track: r
          } = (0, ie.useGtmTrack)(), [n, o] = (0, c.useState)(0), l = (0, c.useCallback)(((e, s) => {
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
          return (0, N.jsx)(tt.q.div, {
            className: "rockstargames-tinaaa2ce15f29ac99fe06895664698bb6cc",
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
            children: (0, N.jsxs)("div", {
              className: "rockstargames-tinaf2f85d11f6ee99282db61467ebdbd00f",
              children: [(0, N.jsx)("div", {
                className: "rockstargames-tinac5288c05172905ec86e3fb56c010d6d3",
                children: (0, N.jsx)(La, {
                  navItems: t,
                  category: t[n]?.name,
                  setCategory: o,
                  nextChipBtnClass: "rockstargames-tinac8a45e31d035c8e867358deea365ceac",
                  prevChipBtnClass: "rockstargames-tinae9684050ab2f4aa408ae565c740cf50c"
                })
              }), (0, N.jsx)("div", {
                className: "rockstargames-tinaf1adea94eb32de966a0e622247370f4e",
                children: (0, N.jsx)(ba, {
                  isHeaderVisible: i,
                  packListItems: t[n]?.subNavItems ?? [],
                  selectPackCard: l
                })
              })]
            })
          })
        },
        Oa = "rockstargames-tinac54c374409e11d1429ce99457cbf7441",
        za = e => {
          let {
            children: t,
            data: a,
            onPageUpdate: s,
            page: i,
            className: r
          } = e;
          return (0, N.jsx)("a", {
            href: "#",
            className: i === a.page ? `rockstargames-tinac0eebf4f915ff9f5cc362e22d6d7d976 ${r??""}` : "",
            onClick: e => {
              e.preventDefault(), s(i)
            },
            children: t
          })
        },
        Aa = e => {
          let {
            data: t,
            onPageUpdate: a,
            className: s
          } = e;
          if (1 === t.pageCount) return null;
          const i = Array.from(new Array(Math.min(t.pageCount, 8)), ((e, a) => a + Math.min(Math.max(t.pageCount - 8, 1), Math.max(2, t.page - 4))));
          return (0, N.jsxs)("div", {
            className: `rockstargames-tinaa626faab2a5a03e3466dda5c79960575 ${s??""}`,
            children: [t.pageCount > 8 ? (0, N.jsxs)(N.Fragment, {
              children: [(0, N.jsx)(za, {
                data: t,
                onPageUpdate: a,
                page: 1,
                children: "1"
              }), 2 !== i[0] ? (0, N.jsx)("div", {
                className: Oa,
                children: "..."
              }) : ""]
            }) : "", i.map((e => (0, N.jsx)(za, {
              data: t,
              onPageUpdate: a,
              page: e,
              className: s,
              children: e
            }, e))), t.pageCount > 8 ? (0, N.jsxs)(N.Fragment, {
              children: [i.slice(-1)[0] + 1 < t.pageCount ? (0, N.jsx)("div", {
                className: Oa,
                children: "..."
              }) : "", (0, N.jsx)(za, {
                data: t,
                onPageUpdate: a,
                page: t.pageCount,
                children: t.pageCount
              })]
            }) : ""]
          })
        };
      var Ba = a(7616);
      const Da = e => {
          let {
            children: t
          } = e;
          const {
            parallaxController: a
          } = (0, Ba.oZ)();
          return (0, c.useLayoutEffect)((() => {
            if (!a) return;
            const e = setInterval((() => {
              a.update()
            }), 500);
            return () => clearInterval(e)
          }), [a]), t
        },
        Ra = {
          parallaxWrapper: "rockstargames-tinadb1ab316d17367d31cf94cdde25e463a",
          large: "rockstargames-tinad520d28c6e4e797aea99f61c89ad2bd8",
          medium: "rockstargames-tinaf008365ee42d37e24e606107346b1c83",
          small: "rockstargames-tinacb5937d1a102ac4a66c4e373e6253946"
        },
        Va = e => {
          let {
            scrollAxis: t = "vertical",
            size: a = "",
            style: s = {},
            children: i
          } = e;
          return (0, N.jsx)(Ba.qK, {
            scrollAxis: t,
            children: (0, N.jsx)(Da, {
              children: (0, N.jsx)("div", {
                className: (0, H.classList)(Ra.parallaxWrapper, Ra[a]),
                style: s,
                "data-context": "parallax-wrapper",
                children: i ? i.map(((e, a) => (0, c.cloneElement)(e, {
                  scrollAxis: t,
                  style: {
                    ...e?.props?.style,
                    zIndex: a
                  }
                }))) : (0, N.jsx)("div", {})
              })
            })
          })
        },
        Fa = e => {
          let {
            layers: t = [],
            displayClass: a = "",
            style: s = {}
          } = e;
          const i = (0, H.useGenerateCdnSource)();
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
          return (0, N.jsx)(Ba.Sr, {
            className: (0, H.classList)("rockstargames-tinab8c85703a3c76902e49a61a6afcb81bc", a),
            layers: r,
            style: s
          })
        },
        $a = "rockstargames-tinac4aa8e5d29b433c400796d0c493a9a4d",
        Ua = e => {
          let {
            minOffset: t = 0,
            maxOffset: a = 0,
            scrollAxis: s = "vertical",
            displayClass: i = "",
            style: r = {},
            children: n
          } = e;
          return "horizontal" === s ? (0, N.jsx)(Ba.mw, {
            x: [t, a],
            className: (0, H.classList)($a, i),
            styleOuter: r,
            children: n
          }) : (0, N.jsx)(Ba.mw, {
            y: [t, a],
            className: (0, H.classList)($a, i),
            styleOuter: r,
            children: n
          })
        },
        Ga = (e, t) => {
          switch (e) {
            case "pc":
              return "small" === t ? {
                src: a(6452),
                alt: "PC"
              } : {
                src: a(804),
                alt: "PC"
              };
            case "ps4":
              return "small" === t ? {
                src: a(4120),
                alt: "PS4"
              } : {
                src: a(564),
                alt: "PS4"
              };
            case "ps5":
              return "small" === t ? {
                src: a(3788),
                alt: "PS5"
              } : {
                src: a(2756),
                alt: "PS5"
              };
            case "xboxone":
              return "small" === t ? {
                src: a(4904),
                alt: "Xbox One"
              } : {
                src: a(2064),
                alt: "Xbox One"
              };
            case "xboxsx":
              return "small" === t ? {
                src: a(9916),
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
        Ha = e => a(e < 100 ? 4184 : e > 99 && e < 500 ? 9450 : e > 499 && e < 750 ? 1216 : 3344),
        qa = (0, l.Os)({
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
        Wa = {
          pillBtn: "rockstargames-tinae4a42eaa9bfb682035e61ac2e2a34515",
          selected: "rockstargames-tinaeb889d8958be54a67b790d7529530986",
          scCharacterCard: "rockstargames-tinadf279e92086c0d3c96905b3a91b369ed",
          scAvatar: "rockstargames-tinac1890feda663c93b0f767890394cbdcf",
          scCharNames: "rockstargames-tinae79d7f5515617d849d7d13cd4ff048ce",
          scCharacterStats: "rockstargames-tinac721f3aeef9e5ae6b98adca1253e4709",
          scUserName: "rockstargames-tinaeabff0cc0139013f5a60fea6f48c56f6",
          scRpLevel: "rockstargames-tinab1f87c58a800ad546200fbf17e029f35",
          scRpIcon: "rockstargames-tinaf1e0bcba6214698c490b8201bbd850b7"
        },
        Xa = j((e => {
          let {
            characterData: t
          } = e;
          const s = (0, m.c)(),
            {
              platform: i,
              platformUsername: r,
              mugshotUrl: n,
              stats: o
            } = t,
            [l, d] = (0, c.useState)(n),
            u = Ga(i, "large");
          return (0, N.jsxs)("div", {
            className: Wa.scCharacterCard,
            children: [(0, N.jsx)("div", {
              className: Wa.scAvatar,
              "data-size": "small",
              children: (0, N.jsx)("img", {
                src: l,
                alt: s.formatMessage(qa.profile_selector_mugshot, {
                  userName: r
                }),
                onError: () => {
                  d(a(1084))
                }
              })
            }), (0, N.jsx)("div", {
              className: Wa.scCharacterStats,
              children: (0, N.jsxs)("div", {
                className: Wa.scCharNames,
                children: [(0, N.jsx)("img", {
                  src: u.src,
                  alt: u.alt
                }), (0, N.jsx)("div", {
                  className: Wa.scUserName,
                  "data-size": "small",
                  children: r
                }), (0, N.jsx)("div", {
                  className: Wa.scRp,
                  children: (0, N.jsxs)("div", {
                    className: Wa.scRpLevel,
                    children: [(0, N.jsx)("img", {
                      className: Wa.scRpIcon,
                      src: Ha(o.overview.rank.value),
                      alt: s.formatMessage(qa.profile_selector_rp_icon)
                    }), (0, N.jsx)("span", {
                      children: t.stats.overview.rank.value
                    })]
                  })
                })]
              })
            })]
          })
        }), T);
      var Ya = a(9724);
      const Ka = (0, O.makeVarNamespace)("@rockstargames/components/profile-switcher"),
        Qa = Ka("languageSelectorOpenedReactive", !1),
        Za = e => Qa(e),
        Ja = Ka("activeSubNavIdReactive", -1),
        es = e => Ja(e),
        ts = Ka("subNavExtraHeightReactive", -1),
        as = e => ts(e),
        ss = Ka("scNavOpenedReactive", !0),
        is = e => ss(e),
        rs = Ka("charListHiddenReactive", !0),
        ns = e => rs(e),
        os = () => {
          const e = (0, O.useReactiveVar)(Qa),
            t = (0, O.useReactiveVar)(Ja),
            a = (0, O.useReactiveVar)(ts),
            s = (0, O.useReactiveVar)(ss),
            i = (0, O.useReactiveVar)(rs);
          return (0, c.useEffect)((() => {
            i || (e && Za(!1), s && (is(!1), es(-1)))
          }), [i]), (0, c.useEffect)((() => {
            !e && i && (s || is(!0))
          }), [e, i]), (0, c.useMemo)((() => ({
            languageSelectorOpened: e,
            setLanguageSelectorOpened: Za,
            activeSubNavId: t,
            setActiveSubNavId: es,
            subNavExtraHeight: a,
            setSubNavExtraHeight: as,
            scNavOpened: s,
            setScNavOpened: is,
            charListHidden: i,
            setCharListHidden: ns
          })), [e, t, a, s, i])
        };
      var cs = a(9760),
        ls = a.n(cs),
        ds = a(9860);
      const ms = {
          event: "account_menu_click",
          element_placement: "Account Menu"
        },
        us = e => ({
          text: e.formatMessage(qa.sc_link_help),
          target: "_self",
          ga: {
            ...ms,
            text: qa.sc_link_help.defaultMessage
          },
          dataTestId: "helpButton",
          children: [{
            text: e.formatMessage(qa.sc_link_support),
            location: {
              domain: "support",
              path: "/"
            },
            target: "_self",
            ga: {
              ...ms,
              text: qa.sc_link_support.defaultMessage
            },
            dataTestId: "supportLink"
          }, {
            text: e.formatMessage(qa.sc_link_legal),
            location: {
              domain: f,
              path: "/legal"
            },
            target: "_self",
            ga: {
              ...ms,
              text: qa.sc_link_legal.defaultMessage
            },
            dataTestId: "legalLink"
          }, {
            text: e.formatMessage(qa.sc_link_privacy_policy),
            location: {
              domain: f,
              path: "/privacy"
            },
            target: "_self",
            ga: {
              ...ms,
              text: qa.sc_link_privacy_policy.defaultMessage
            },
            dataTestId: "privacyPolicyLink"
          }, {
            text: e.formatMessage(qa.sc_link_cookies_policy),
            location: {
              domain: f,
              path: "/cookies"
            },
            target: "_self",
            ga: {
              ...ms,
              text: qa.sc_link_cookies_policy.defaultMessage
            },
            dataTestId: "cookiesPolicyLink"
          }, {
            text: e.formatMessage(qa.sc_link_cookies_settings),
            onClickCallback: e => {
              e.preventDefault(), window.OneTrust?.ToggleInfoDisplay()
            },
            target: "_self",
            ga: {
              ...ms,
              text: qa.sc_link_cookies_settings.defaultMessage
            },
            dataTestId: "cookiesSettingsLink"
          }, {
            text: e.formatMessage(qa.sc_link_do_not_sell_my_information),
            location: {
              domain: f,
              path: "/ccpa"
            },
            target: "_self",
            ga: {
              ...ms,
              text: qa.sc_link_do_not_sell_my_information.defaultMessage
            },
            dataTestId: "doNotSellMyInformationLink"
          }]
        }),
        fs = e => {
          let {
            text: t,
            target: a,
            href: s,
            location: i,
            ga: r,
            dataTestId: n,
            isSubLink: o,
            hasNotifications: c = !1,
            onClickCallback: l = (() => {}),
            tabIndex: d,
            reloadDocument: u = !1
          } = e;
          const {
            track: f
          } = (0, ie.useGtmTrack)(), g = p(), _ = (0, m.c)();
          let h = s;
          i && (h = i.domain === g.currentSite?.site ? i.path : `https://${g.sites[i.domain]}.rockstargames.com${i.path}`);
          const k = {
            ...r,
            link_url: h
          };
          return (0, N.jsxs)(M.cH, {
            className: o ? "rockstargames-tinafdaa918acc06706cbe191dedd40974af" : "rockstargames-tinacbc80932118c48d8ec14448d8913d068",
            "data-testid": n || "menuLink",
            title: t,
            to: h,
            target: a,
            rel: "noreferrer",
            reloadDocument: u,
            tabIndex: d,
            onClick: e => {
              f(k), l(e)
            },
            children: [t, c && (0, N.jsx)("div", {
              className: "rockstargames-tinaa2d268c9fb03a7271b47de447d663da9",
              children: (0, N.jsx)("span", {
                className: "rockstargames-tinacf5a6b05c52c6c4faf3236055d4670c3",
                children: _.formatMessage(qa.nofications_new)
              })
            })]
          })
        },
        gs = e => {
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
            setActiveSubNavId: u,
            setSubNavExtraHeight: f,
            reloadDocument: g = !1,
            onClickCallback: _ = (() => {})
          } = e;
          const {
            windowWidth: p,
            windowHeight: h
          } = (0, se.useWindowResize)(), {
            track: k
          } = (0, ie.useGtmTrack)(), {
            navOpen: b
          } = (0, ie.useRockstarUserState)(), v = (0, c.useRef)(null), [x, y] = (0, c.useState)(0), [w, S] = (0, c.useState)(0), [j, T] = (0, c.useState)(!0);
          return (0, c.useEffect)((() => {
            m !== t && !1 === j && T(!0), m === t && T(!1)
          }), [m]), (0, c.useEffect)((() => {
            if (!v.current) return;
            y(v?.current?.scrollHeight);
            const e = window.getComputedStyle(v.current);
            if (e) {
              let t = 16 * parseInt(e.getPropertyValue("--scSubNav-opened-margin"), 10);
              Number.isNaN(t) && (t = 0), S(t)
            }
          }), [v, p, h]), d.length > 0 ? (0, N.jsxs)(N.Fragment, {
            children: [(0, N.jsxs)("button", {
              className: "rockstargames-tinaaf10b4154b04475edc11366934576ecd",
              type: "button",
              "data-testid": l || "menuButton",
              title: a,
              tabIndex: b ? 0 : -1,
              "data-children-hidden": j,
              onClick: e => {
                e.stopPropagation(), k(n), m === t ? (u(-1), f(0)) : (u(t), f(x + w + w))
              },
              children: [(0, N.jsx)("span", {
                className: "rockstargames-tinafd722aa4f6d05656ee6e37f952bd13d0",
                children: a
              }), (0, N.jsx)("span", {
                className: "rockstargames-tinabe674f27adc299eab348b49f71429b71"
              })]
            }, a), (0, N.jsx)("nav", {
              className: "rockstargames-tinaff1911053a3515534dd825554a85909e",
              ref: v,
              "aria-hidden": j,
              style: {
                height: j ? 0 : `${x}px`
              },
              children: d.map((e => (0, c.createElement)(fs, {
                ...e,
                isSubLink: !0,
                key: e.text,
                tabIndex: j || !b ? -1 : 0
              })))
            })]
          }) : (0, N.jsx)(fs, {
            text: a,
            target: s,
            href: i,
            location: r,
            ga: n,
            hasNotifications: o,
            dataTestId: l,
            isSubLink: !1,
            onClickCallback: _,
            tabIndex: b ? 0 : -1,
            reloadDocument: g
          })
        },
        _s = e => {
          let {
            sc: t
          } = e;
          const {
            windowWidth: a,
            windowHeight: s
          } = (0, se.useWindowResize)(), i = (0, m.c)(), {
            languageSelectorOpened: r,
            setLanguageSelectorOpened: n,
            activeSubNavId: o,
            setActiveSubNavId: l,
            subNavExtraHeight: d,
            setSubNavExtraHeight: u
          } = os(), {
            setSelectedCharacterTuple: f,
            navOpen: g
          } = (0, ie.useRockstarUserState)(), _ = (0, se.useLocale)(), h = (0, se.toScLocaleString)(_), [k, b] = (0, c.useState)(""), v = (0, Ot.IT)(), x = `${t.login}?returnUrl=${k}&lang=${h}`, y = `${t.signup}&returnUrl=${k}&lang=${h}`, w = (0, c.useMemo)((() => p()), []), S = (0, c.useMemo)((() => {
            const e = ((e, t, a) => [{
              text: e.formatMessage(qa.sc_link_sign_in),
              href: t,
              ga: {
                event: "cta_login",
                text: qa.sc_link_sign_in.defaultMessage,
                element_placement: "Account Menu"
              },
              dataTestId: "loginLink"
            }, {
              text: e.formatMessage(qa.sc_link_join_social_club),
              href: a,
              ga: {
                event: "cta_signup",
                text: qa.sc_link_join_social_club.defaultMessage,
                element_placement: "Account Menu"
              },
              dataTestId: "signUpLink"
            }, us(e)])(i, x, y);
            return e
          }), [i, x, y, w]), [j, T] = (0, c.useState)(0), C = (0, c.createRef)(), M = () => {
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
            b(e)
          }), [v]), (0, c.useEffect)((() => {
            f(!1)
          }), []), (0, c.useEffect)((() => {
            M(), ls()((() => {
              setTimeout(M, 0)
            }), 300)
          }), [a, s]), (0, N.jsxs)(N.Fragment, {
            children: [(0, N.jsx)("nav", {
              className: "rockstargames-tinab1552e1f97b08ee4337f78fa4486ffac",
              children: (0, N.jsx)("div", {
                className: "rockstargames-tinac5bc9bec611f9f0514176014ce835e1e",
                "data-logged-in": "false",
                ref: C,
                style: {
                  "--scNavWrap-max-height": `${d+j}px`
                },
                children: S.map((e => (0, c.createElement)(gs, {
                  ...e,
                  activeSubNavId: o,
                  setActiveSubNavId: l,
                  setSubNavExtraHeight: u,
                  key: e.text
                })))
              })
            }), (0, N.jsx)("div", {
              className: "rockstargames-tinaa6c12c94e8656e88958552d645fe51fe",
              style: {
                visibility: g ? null : "hidden"
              },
              children: (0, N.jsx)(ds.LanguageSelector, {
                theme: "sc-menu",
                languageSelectorOpened: r,
                setLanguageSelectorOpened: e => {
                  l(-1), n(e)
                },
                defaultMessage: "Select a Language"
              })
            })]
          })
        },
        ps = e => {
          let {
            characterData: t,
            setMobileCardWidth: s,
            tabIndex: i
          } = e;
          const r = (0, m.c)(),
            {
              currentCharId: n,
              setCurrentCharId: o
            } = (0, ie.useRockstarUserState)(),
            {
              track: l
            } = (0, ie.useGtmTrack)(),
            d = (0, c.createRef)(),
            {
              platform: u,
              platformUsername: f,
              mugshotUrl: g,
              stats: _
            } = t,
            [p, h] = (0, c.useState)(g),
            [k] = (0, c.useState)(t.index),
            b = Ga(u, "large"),
            v = n === t.index;
          return (0, c.useEffect)((() => {
            d.current && s && s(d?.current?.offsetWidth)
          }), [d]), (0, N.jsxs)("button", {
            className: "rockstargames-tinad76e785563451a50438064ac368aae4b",
            type: "button",
            "aria-hidden": v,
            onClick: e => {
              e.stopPropagation(), o(k);
              let t = "";
              "pc" === u ? t = "PC" : "ps4" === u ? t = "PS4" : "ps5" === u ? t = "PS5" : "xboxone" === u ? t = "Xbox One" : "xboxsx" === u && (t = "Xbox Series X|S"), l({
                event: "character_selector_select",
                event_action: "select",
                event_category: "character_selector",
                event_label: t,
                position: k
              })
            },
            ref: d,
            tabIndex: i,
            children: [(0, N.jsx)("div", {
              className: "rockstargames-tinabbdf69fe97471593355fc51ec9a6d13a",
              "data-size": "small",
              children: (0, N.jsx)("img", {
                src: p,
                alt: r.formatMessage(qa.profile_selector_mugshot, {
                  userName: f
                }),
                onError: () => {
                  h(a(1084))
                }
              })
            }), (0, N.jsxs)("div", {
              className: "rockstargames-tinac0dc303ef48255c09faa4ad2f4e953e7",
              children: [(0, N.jsxs)("div", {
                className: "rockstargames-tinae9fbbbcea66d86dbd58b8548a5f6bea8",
                children: [(0, N.jsx)("img", {
                  src: b.src,
                  alt: b.alt
                }), (0, N.jsx)("div", {
                  className: "rockstargames-tinab3726d8b480695f64fddc723c6f35205",
                  "data-size": "small",
                  children: f
                })]
              }), (0, N.jsx)("div", {
                className: "rockstargames-tinaa5e3df42966a50f3dd88bbcb57536617",
                children: (0, N.jsxs)("div", {
                  className: "rockstargames-tinaa6776312350028898320ba59145a39be",
                  children: [(0, N.jsx)("img", {
                    className: "rockstargames-tinab266652910ad34c0e8e097b212a958f0",
                    src: Ha(_.overview.rank.value),
                    alt: r.formatMessage(qa.profile_selector_rp_icon)
                  }), (0, N.jsx)("span", {
                    children: t.stats.overview.rank.value
                  })]
                })
              })]
            })]
          })
        },
        hs = {
          pillBtn: "rockstargames-tinad9464c4b4d92881abe5578988bd68af7",
          selected: "rockstargames-tinabc0a950bffee0ee9e28213912da51427",
          scProfileDetails: "rockstargames-tinab954455f6ff25f2350e1a0960ba97d3e",
          scAvatar: "rockstargames-tinac15a60de0fc8df4960d84ab96caa8a62",
          scAvatarPlatform: "rockstargames-tinaa8f66dccf33827dc81107cae3196cfbe",
          scProfileStats: "rockstargames-tinac91f8623fa10edbeba8c79c7d6b26a28",
          scNames: "rockstargames-tinada83fc27513bcac6a8a31eadc89b1c2c",
          scTagsNames: "rockstargames-tinad7ce73d22672e2e2f59e9193c2632531",
          scUserName: "rockstargames-tinad5814836ce152affaa22d226819b5b12",
          scCrewName: "rockstargames-tinab7777817be6d756cc2d1585c1377734c",
          scCrewRankBar: "rockstargames-tinaa581d240520cf347e5ff5f6a62a36a97",
          scCrewRankBarItem: "rockstargames-tinabdb056c03ef06b99d69426c87cec67c5",
          scProgress: "rockstargames-tinadc3020fbe81a916a8da4719ef052c278",
          scRpLevel: "rockstargames-tinab2ea0e0d19182355913368bf7be016b8",
          scRpIcon: "rockstargames-tinaf17a712b43b5234c07dc44f674433cf6",
          scMoney: "rockstargames-tinaf14849be516f588e1bc9e252a109c76f",
          scCash: "rockstargames-tinab3e35cdc6557f7c3886700245af352dd",
          scBank: "rockstargames-tinaec696aafed90a7a4c69dc53da0a5bb36"
        },
        ks = e => {
          let {
            character: t,
            platformTag: s
          } = e;
          const {
            data: i
          } = (0, ie.useRockstarUser)(), {
            track: r
          } = (0, ie.useGtmTrack)(), n = (0, m.c)(), [o, l] = (0, c.useState)([]), [d, u] = (0, c.useState)(null), [f, g] = (0, c.useState)(null), [_, p] = (0, c.useState)(!1), [h, k] = (0, c.useState)(-1), [b, v] = (0, c.useState)([]), [x, y] = (0, c.useState)(0), w = a(1084), [S, j] = (0, c.useState)("0"), [T, C] = (0, c.useState)("0"), M = e => parseInt(e, 10).toLocaleString("en-US", {
            minimumFractionDigits: 0
          }), I = () => {
            L((0, N.jsx)("img", {
              src: w,
              alt: n.formatMessage(qa.profile_selector_mugshot, {
                userName: i.nickname
              })
            }))
          }, [E, L] = (0, c.useState)((0, N.jsx)("img", {
            className: hs.scAvatarImg,
            src: t.mugshotUrl,
            alt: n.formatMessage(qa.profile_selector_mugshot, {
              userName: i.nickname
            }),
            onError: I
          }));
          (0, c.useEffect)((() => {
            l(i.crews ?? [])
          }), [i]), (0, c.useEffect)((() => {
            L((0, N.jsx)("img", {
              src: t.mugshotUrl,
              alt: i.nickname,
              onError: I
            })), j(M(t.stats.overview.bank.value)), C(M(t.stats.overview.cash.value)), y(parseInt(t.stats.overview.rank.value))
          }), [t, i]), (0, c.useEffect)((() => {
            o && o.forEach((e => {
              !0 === e.isPrimary && (u(e.crewTag), g(e.crewColour), k(e.rankOrder), p(!1), !0 === Object.prototype.hasOwnProperty.call(e, "crewType") && "rockstar" === e.crewType && p(!0))
            }))
          }), [o]), (0, c.useEffect)((() => {
            const e = [];
            if (!_ && h > -1)
              for (let t = 5; t > h; t -= 1) e.push((0, N.jsx)("div", {
                className: hs.scCrewRankBarItem,
                style: {
                  backgroundColor: null !== f ? f : ""
                }
              }, `crewrankbar-${t}`));
            v(e)
          }), [h, _, f]);
          const P = e => {
            e.stopPropagation(), r({
              event: "character_selector_profile_click",
              event_action: "profile_click",
              event_category: "character_selector",
              event_label: s.alt,
              link_url: void 0
            })
          };
          return (0, N.jsxs)("div", {
            className: hs.scProfileDetails,
            onClick: P,
            onKeyUp: P,
            role: "button",
            tabIndex: -1,
            children: [(0, N.jsxs)("div", {
              className: hs.scAvatar,
              children: [E, (0, N.jsx)("div", {
                className: hs.scAvatarPlatform,
                "data-platform": t.platform,
                children: (0, N.jsx)("img", {
                  src: s.src,
                  alt: s.alt
                })
              })]
            }), (0, N.jsxs)("div", {
              className: hs.scProfileStats,
              children: [(0, N.jsx)("div", {
                className: hs.scNames,
                children: (0, N.jsxs)("div", {
                  className: hs.scTagsNames,
                  children: [(0, N.jsx)("span", {
                    className: hs.scUserName,
                    children: t.platformUsername
                  }), d && (0, N.jsxs)("span", {
                    className: hs.scCrewName,
                    "data-arrow-tag": _,
                    children: [d, !_ && (0, N.jsx)("div", {
                      className: hs.scCrewRankBar,
                      children: b
                    })]
                  })]
                })
              }), (0, N.jsxs)("div", {
                className: hs.scProgress,
                children: [(0, N.jsxs)("div", {
                  className: hs.scRpLevel,
                  children: [(0, N.jsx)("img", {
                    className: hs.scRpIcon,
                    src: Ha(x),
                    alt: n.formatMessage(qa.profile_selector_rp_icon)
                  }), (0, N.jsx)("span", {
                    children: t.stats.overview.rank.value
                  })]
                }), (0, N.jsxs)("div", {
                  className: hs.scMoney,
                  children: [(0, N.jsxs)("span", {
                    className: hs.scCash,
                    children: ["$", T]
                  }), (0, N.jsxs)("span", {
                    className: hs.scBank,
                    children: ["$", S]
                  })]
                })]
              })]
            })]
          })
        },
        bs = (e, t) => {
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
        vs = e => {
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
            m = bs(d, !1),
            [u, f] = (0, c.useState)(!1),
            [g, _] = (0, c.useState)(0),
            [p, h] = (0, c.useState)(0),
            [k, b] = (0, c.useState)([s]),
            [v, x] = (0, c.useState)(k[0]),
            [y, w] = (0, c.useState)(252),
            [S, j] = (0, c.useState)(0),
            [T, C] = (0, c.useState)([]),
            [M, I] = (0, c.useState)([]),
            [E, L] = (0, c.useState)(!1),
            P = e => {
              if (!0 === u || !0 === l) return;
              const t = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
              h(t)
            },
            O = e => {
              if (!0 === u || 0 === p || !0 === l) return;
              const a = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX,
                s = a > p ? 1 : -1,
                r = Math.abs(p - a);
              r > t ? (s > 0 ? (() => {
                if (!0 === u) return;
                f(!0);
                const e = g - 1 < 0 ? 0 : g - 1;
                _(e), x(k[e]), i && i(e)
              })() : (() => {
                if (!0 === u) return;
                f(!0);
                let e = g + 1 >= k.length ? k.length - 1 : g + 1;
                e < 0 && (e = 0), _(e), x(k[e]), i && i(e)
              })(), h(0)) : x(k[g] + r * s)
            },
            z = () => {
              !0 !== u && !0 !== l && (f(!0), !0 !== u && (x(k[g]), h(0)))
            };
          return (0, c.useEffect)((() => {
            const e = [];
            n.forEach((() => {
              e.push((0, c.createRef)())
            })), C(e)
          }), [n]), (0, c.useEffect)((() => {
            if (T.length < 1) return;
            w(T[0]?.current?.clientWidth || 0);
            const e = T[0]?.current.firstChild,
              t = Number(window.getComputedStyle(e).marginRight.replace("px", "")),
              a = Number(window.getComputedStyle(e).marginLeft.replace("px", ""));
            j(a + t)
          }), [T]), (0, c.useEffect)((() => {
            !1 !== u && setTimeout((() => {
              f(!1)
            }), a)
          }), [u, a]), (0, c.useEffect)((() => {
            b(n.map(((e, t) => (e => {
              let t = 0;
              const a = n.length;
              return 1 === a ? .5 * m - .5 * y - 2 * s + S : (0 === e && (t = s - e * y), e === a - 1 && a > 1 && (t = a * y * -1 + (m - (s - S))), e > 0 && e < a - 1 && (t = e * y * -1 + (.5 * m - .5 * y + .5 * S)), t)
            })(t)))), 1 === n.length ? L(!0) : L(!1)
          }), [d.current, n, m]), (0, c.useEffect)((() => {
            const e = (t = g, n.map(((e, a) => {
              const s = {
                active: !1
              };
              return a === t && (s.active = !0), s
            })));
            var t;
            I(e)
          }), [n, g]), (0, c.useEffect)((() => {
            !0 !== o && !0 !== l || x(k[0])
          }), [l, o, k]), (0, N.jsxs)(N.Fragment, {
            children: [(0, N.jsx)("div", {
              className: "rockstargames-tinaab70c3f9c67ecd69d19216a5f4de5049",
              ref: d,
              onTouchStart: P,
              onTouchMove: O,
              onTouchEnd: z,
              onMouseDown: P,
              onMouseMove: O,
              onMouseUp: z,
              onClick: () => {
                null !== r && r(g)
              },
              onKeyPress: () => null,
              tabIndex: -1,
              role: "presentation",
              children: (0, N.jsx)("div", {
                className: "rockstargames-tinaa93be1084a583cafa7f3f97a8ce8a6be",
                "data-interaction-blocked": u,
                "data-single-item": E,
                style: {
                  transform: E ? null : `translateX(${v}px)`
                },
                children: n.map(((e, t) => (0, N.jsx)("div", {
                  className: "rockstargames-tinac013369a930e076d1729d086fb51903e",
                  ref: T[t],
                  children: e
                }, `csItem-${e?.props?.characterData?.mugshotUrl}`)))
              })
            }), M.length > 1 && !1 === o && (0, N.jsx)("div", {
              className: "rockstargames-tinada8cfef07bf44e9a44839e2723ec61bb",
              children: M.map((e => (0, N.jsx)("div", {
                className: "rockstargames-tinafe87ea0922034610a1f6cb3a4edbe195",
                "data-active": e.active
              }, e.mugshotUrl)))
            })]
          })
        },
        xs = {
          pillBtn: "rockstargames-tinaaa374e2f7806799cb073de8a9b2a2e7d",
          selected: "rockstargames-tinad402a10393179390abdaf3684a02f1ba",
          scProfile: "rockstargames-tinadde9053261079ebfb5d95975239fe87d",
          scCharacterSelector: "rockstargames-tinac47913b4c686bbbc9a0c8ee6ed7666bf",
          scCharacterSelectBtn: "rockstargames-tinaa4f9dafe071f5c9a825bf57348835309",
          open: "rockstargames-tinab1f5708c9a0e35681c54a58f04661c1c",
          scCharacterList: "rockstargames-tinaa1d1104b9df769c9237fa1a06633ffe7",
          scNav: "rockstargames-tinaa326b0feea8d083ed2265571010d79d3",
          scLanguageSelector: "rockstargames-tinad19713d1362bcd54ff539975adbb2ecc",
          scNavHeader: "rockstargames-tinabb74821846f47bbe5fc0896364efd520",
          scNavWrap: "rockstargames-tinaa7f1e2d78519eaf099bd43c6ad07abc9"
        },
        ys = (0, se.withTranslations)((e => {
          let {
            sc: t,
            charListHidden: a,
            hideCharacterList: s,
            refCharacterListDesktop: i,
            menuPadding: r,
            longCharList: n,
            setLongCharList: o,
            isMobileMode: l,
            setIsMobileMode: u
          } = e;
          const {
            windowWidth: f,
            windowHeight: _
          } = (0, se.useWindowResize)(), h = (0, m.c)(), {
            languageSelectorOpened: k,
            setLanguageSelectorOpened: b,
            activeSubNavId: v,
            setActiveSubNavId: x,
            subNavExtraHeight: y,
            setSubNavExtraHeight: w,
            scNavOpened: S,
            setScNavOpened: j
          } = os(), [T, C] = (0, c.useState)(""), M = (0, Ot.IT)(), {
            lsSettings: I
          } = (0, se.useRockstarWebLSSettings)(), {
            track: E
          } = (0, ie.useGtmTrack)(), L = (0, O.useRockstarTokenPing)(), {
            data: P,
            loggedIn: z
          } = (0, ie.useRockstarUser)(), {
            charactersNeeded: A,
            currentCharId: B,
            hasNotifications: D,
            navOpen: R,
            setCurrentCharId: V,
            setHasNotifications: F,
            setSelectedCharacterTuple: $,
            setUserData: U
          } = (0, ie.useRockstarUserState)(), [G, H] = (0, c.useState)(null), [q, W] = (0, c.useState)(null), [X, Y] = (0, c.useState)(!1), [K, Q] = (0, c.useState)(!1), [Z, J] = (0, c.useState)(0), ee = (0, c.createRef)(), te = bs(ee, !1), ae = (0, c.createRef)(), [re, ne] = (0, c.useState)(0), [oe, ce] = (0, c.useState)([]), [le, de] = (0, c.useState)(244), me = (0, c.useRef)(null), ue = (0, c.useMemo)((() => p()), []), fe = (0, c.useMemo)((() => ((e, t, a, s, i) => [{
            text: e.formatMessage(qa.sc_link_activity_feed),
            location: {
              domain: g,
              path: "/"
            },
            target: "_self",
            ga: {
              ...ms,
              text: qa.sc_link_activity_feed.defaultMessage
            },
            dataTestId: "activityFeedLink"
          }, {
            text: e.formatMessage(qa.sc_link_account),
            target: "_self",
            dataTestId: "accountButton",
            children: [{
              text: e.formatMessage(qa.sc_link_settings),
              location: {
                domain: g,
                path: "/settings"
              },
              target: "_self",
              ga: {
                ...ms,
                text: qa.sc_link_settings.defaultMessage
              },
              dataTestId: "settingsLink"
            }, {
              text: e.formatMessage(qa.sc_link_view_my_profile),
              href: a.profile_link,
              target: "_self",
              ga: {
                ...ms,
                text: qa.sc_link_view_my_profile.defaultMessage
              },
              dataTestId: "viewMyProfileLink"
            }, {
              text: e.formatMessage(qa.sc_link_messages),
              location: {
                domain: g,
                path: "/message"
              },
              target: "_self",
              ga: {
                ...ms,
                text: qa.sc_link_messages.defaultMessage
              },
              dataTestId: "messagesLink"
            }, {
              text: e.formatMessage(qa.sc_link_game_activation),
              location: {
                domain: g,
                path: "/activate"
              },
              target: "_self",
              ga: {
                ...ms,
                text: qa.sc_link_game_activation.defaultMessage
              },
              dataTestId: "gameActivationLink"
            }]
          }, {
            text: e.formatMessage(qa.sc_link_notifications),
            location: {
              domain: g,
              path: "/notifications"
            },
            target: "_self",
            hasNotifications: s,
            ga: {
              ...ms,
              text: qa.sc_link_notifications.defaultMessage,
              location: {
                domain: g,
                path: "/notifications"
              }
            },
            dataTestId: "notificationsLink"
          }, {
            text: e.formatMessage(qa.sc_link_crews),
            location: {
              domain: g,
              path: `/member/${a.nickname}/crews`
            },
            target: "_self",
            ga: {
              ...ms,
              text: qa.sc_link_crews.defaultMessage
            },
            dataTestId: "crewsLink"
          }, {
            text: e.formatMessage(qa.sc_link_friends),
            target: "_self",
            dataTestId: "friendsButton",
            children: [{
              text: e.formatMessage(qa.sc_link_my_friends),
              location: {
                domain: g,
                path: `/member/${a.nickname}/friends`
              },
              target: "_self",
              ga: {
                ...ms,
                text: qa.sc_link_my_friends.defaultMessage
              },
              dataTestId: "myFriendsLink"
            }, {
              text: e.formatMessage(qa.sc_link_import_friends),
              location: {
                domain: g,
                path: "/friends/import"
              },
              target: "_self",
              ga: {
                ...ms,
                text: qa.sc_link_import_friends.defaultMessage
              },
              dataTestId: "importFriendsLink"
            }, {
              text: e.formatMessage(qa.sc_link_find_friends),
              location: {
                domain: g,
                path: "/members"
              },
              target: "_self",
              ga: {
                ...ms,
                text: qa.sc_link_import_friends.defaultMessage
              },
              dataTestId: "findFriendsLink"
            }]
          }, us(e), {
            text: e.formatMessage(qa.sc_link_log_out),
            href: `${t.logout}?returnUrl=${i}`,
            target: "_self",
            reloadDocument: !0,
            ga: {
              ...ms,
              text: qa.sc_link_log_out.defaultMessage
            },
            dataTestId: "logoutButton"
          }])(h, t, P, D, T, window)), [h, t, P, D, T, ue]), ge = () => {
            Q(r + le * Z < te)
          }, _e = () => {
            if (ae.current) {
              const {
                current: e
              } = ae, t = e?.scrollHeight, a = window.getComputedStyle(e);
              if (a) {
                let e = 16 * parseInt(a.getPropertyValue("--scSubNav-opened-margin"), 10) * 2;
                Number.isNaN(e) && (e = 0), ne(t + e)
              } else ne(t)
            }
          };
          return (0, c.useEffect)((() => {
            let e = encodeURIComponent(`${document.location.pathname}${document.location.search}`);
            ue.currentSite?.site === g && (e = encodeURIComponent("/")), C(e)
          }), [M]), (0, c.useEffect)((() => {
            ce(P.characters[A] ?? [])
          }), [P, A]), (0, c.useEffect)((() => {
            P && U(P)
          }), [P]), (0, c.useEffect)((() => {
            const e = P?.characters.gtao;
            if (null !== z && !e.length) return void $(!1);
            if (null == B || !e.length) return;
            const t = e?.[B] ?? e?.[0] ?? null;
            $(!!t?.platform && [t.platform, t.characterSlot])
          }), [B, P, z]), (0, c.useEffect)((() => {
            (async () => {
              if (!P?.id) return;
              const {
                count: e
              } = await (0, se.coreScApiFetch)("notification/count", {
                pingBearer: L
              });
              F(e > 0)
            })()
          }), [P]), (0, c.useEffect)((() => {
            ge()
          }), [le]), (0, c.useEffect)((() => {
            s(!0), u(f < 768), u(f < 768 || _ < 649)
          }), [f, _]), (0, c.useEffect)((() => {
            let e = oe.length - 1;
            e < 0 && (e = 0), J(e);
            const t = oe.length > 0 ? oe[B] ?? oe[0] : null;
            if (!t) return;
            const a = null !== t ? Ga(t.platform, "large") : null;
            W(a), H(t), oe.length > 1 ? Y(!0) : Y(!1), o(oe.length - 1 > 3)
          }), [B, oe]), (0, c.useEffect)((() => {
            ge()
          }), [Z, l, f, oe]), (0, c.useEffect)((() => {
            _e(), ls()((() => {
              setTimeout(_e, 0)
            }), 300)
          }), [f, _]), (0, c.useEffect)((() => {
            const e = I?.currentCharId ?? 0;
            e !== B && V(Math.max(0, Math.min(e, oe.length - 1)))
          }), [oe, I]), (0, N.jsxs)(N.Fragment, {
            children: [null !== G && "gtao" === A && (0, N.jsxs)("div", {
              className: xs.scProfile,
              ref: me,
              tabIndex: -1,
              "aria-label": h.formatMessage(qa.profile_selector_profile_card),
              children: [(0, N.jsx)(ks, {
                s: xs,
                character: G,
                platformTag: q
              }), !0 === X && (0, N.jsxs)("div", {
                className: xs.scCharacterSelector,
                children: [(0, N.jsx)("button", {
                  className: xs.scCharacterSelectBtn,
                  "aria-hidden": !R,
                  type: "button",
                  onClick: e => {
                    e.stopPropagation();
                    const t = !a;
                    s(t), E({
                      event: t ? "character_selector_close" : "character_selector_open",
                      event_action: !0 === t ? "close" : "open",
                      event_category: "character_selector"
                    })
                  },
                  "data-list-closed": a,
                  children: (0, N.jsx)("span", {
                    children: (0, N.jsx)(d.c, {
                      ...qa.profile_selector_switch_character
                    })
                  })
                }), !1 === l && (0, N.jsx)("div", {
                  className: xs.scCharacterList,
                  "data-long-list": n,
                  "aria-hidden": a,
                  ref: i,
                  children: oe.map((e => (0, N.jsx)(ps, {
                    tabIndex: a ? -1 : 0,
                    characterData: e,
                    setMobileCardWidth: de
                  }, e.mugshotUrl)))
                }), !0 === l && (0, N.jsx)("div", {
                  className: xs.scCharacterList,
                  "data-single-item": 2 === oe.length,
                  "data-swiper-disabled": K,
                  "aria-hidden": a,
                  ref: ee,
                  children: (0, N.jsx)(vs, {
                    interactionDelay: 350,
                    mobileGutterWidth: 17,
                    dragThreshold: 40,
                    slideChangeCallback: () => {
                      E({
                        event: "carousel_swipe",
                        event_category: "carousel",
                        event_action: "swipe",
                        event_label: "character_selector"
                      })
                    },
                    disablePager: K,
                    disableSwiper: K,
                    children: oe.filter(((e, t) => t !== B)).map((e => (0, c.createElement)(ps, {
                      characterData: e,
                      setMobileCardWidth: de,
                      key: e.mugshotUrl,
                      tabIndex: a ? -1 : 0
                    })))
                  })
                })]
              })]
            }), (0, N.jsxs)("nav", {
              className: xs.scNav,
              "aria-hidden": !R,
              children: [(0, N.jsx)("button", {
                className: xs.scNavHeader,
                type: "button",
                "data-opened": S,
                "data-nav-opened": R,
                tabIndex: S ? -1 : 0,
                onClick: e => {
                  e.stopPropagation(), S || j(!0)
                },
                "data-testid": "playerButton",
                children: (0, N.jsx)("span", {
                  children: P.nickname
                })
              }), (0, N.jsx)("div", {
                className: xs.scNavWrap,
                "data-opened": S,
                "data-logged-in": "true",
                ref: ae,
                style: {
                  "--scNavWrap-max-height": `${re+y}px`
                },
                children: fe.map(((e, t) => (0, c.createElement)(gs, {
                  ...e,
                  id: t,
                  activeSubNavId: v,
                  setActiveSubNavId: x,
                  setSubNavExtraHeight: w,
                  key: e.text
                })))
              })]
            }), (0, N.jsx)("div", {
              className: xs.scLanguageSelector,
              style: {
                visibility: R ? null : "hidden"
              },
              children: (0, N.jsx)(ds.LanguageSelector, {
                theme: "sc-menu",
                languageSelectorOpened: k,
                setLanguageSelectorOpened: b
              })
            })]
          })
        })),
        ws = {
          scMenu: "rockstargames-tinaebc4c779cfe9d0b7cfd678424e57370c",
          pillBtn: "rockstargames-tinaf333ffbc5b9f9d571b81be0a7235190d",
          selected: "rockstargames-tinae3bdabe09c3d1b98b61f3d0484209912",
          navOpen: "rockstargames-tinaff929155ac480a9cfa5540dfd3e70ae9",
          dragHandle: "rockstargames-tinaba4968108b922dd8165c6e53557f5f2e",
          dragHandleBtn: "rockstargames-tinad362ba3eeee50f90600a413c05761431",
          scOverlay: "rockstargames-tinad8e443f5d0d9171449f5f1042f80aa17"
        },
        Ns = j((() => {
          const {
            windowHeight: e
          } = (0, se.useWindowResize)(), t = (0, m.c)(), {
            languageSelectorOpened: s,
            setLanguageSelectorOpened: i,
            setActiveSubNavId: r,
            scNavOpened: n,
            setScNavOpened: o,
            charListHidden: l,
            setCharListHidden: d
          } = os(), [u, f] = (0, c.useState)(!1), {
            navHidden: g = !1
          } = (0, O.useState)(), {
            loggedIn: _
          } = (0, ie.useRockstarUser)(), {
            currentCharId: p,
            navOpen: h,
            setNavOpen: k,
            userData: b
          } = (0, ie.useRockstarUserState)(), {
            track: v
          } = (0, ie.useGtmTrack)(), [x, y] = (0, c.useState)(!1), w = (0, O.useReactiveVar)(ie.scConfig), S = (0, c.useRef)(), [j, T] = (0, c.useState)(0), C = (0, c.createRef)(), [M, I] = (0, c.useState)(!1), [E, L] = (0, c.useState)(0), [P, z] = (0, c.useState)(!1), {
            mutateLSSettings: A,
            lsSettings: B
          } = (0, se.useRockstarWebLSSettings)(), D = (0, c.useCallback)((e => {
            d(e), S.current && !0 === e && (S.current.scrollTop = 0)
          }), [S]);
          return (0, c.useEffect)((() => {
            null !== p && B.currentCharId !== p && A({
              key: "currentCharId",
              value: p
            }), !1 === _ ? A({
              key: "currentCharId",
              value: null
            }) : _ && !b && v({
              event: "account_synced"
            })
          }), [p, _]), (0, c.useEffect)((() => {
            S.current && (!1 === l && !1 === x && (S.current.style.height = `${S.current.scrollHeight}px`), !0 === l && (S.current.style.height = null))
          }), [l, S, x]), (0, c.useEffect)((() => {
            const e = () => {
                k(!1), D(!0)
              },
              t = t => {
                "Escape" === t.code && e()
              };
            return document.addEventListener("click", e), document.addEventListener("keyup", t), () => {
              document.removeEventListener("click", e), document.removeEventListener("keyup", t)
            }
          }), []), (0, c.useEffect)((() => {
            k(!1), D(!0)
          }), [g]), (0, c.useEffect)((() => {
            if (C.current) {
              const {
                current: e
              } = C, t = window.getComputedStyle(e);
              T(parseInt(t.paddingRight, 10) + parseInt(t.paddingLeft, 10))
            }
          }), [C]), (0, c.useEffect)((() => {
            z(window.navigator.userAgent.includes("Mac"))
          }), []), (0, c.useEffect)((() => {
            C.current && f(C?.current?.scrollHeight >= e)
          }), [C, e]), (0, c.useEffect)((() => {
            h || (r(-1), i(!1))
          }), [h]), (0, c.useEffect)((() => {
            s && (l || D(!0), n && (o(!1), r(-1)))
          }), [s]), (0, c.useEffect)((() => {
            n && (s && i(!1), l || D(!0))
          }), [n]), null === _ ? null : (0, N.jsxs)(Ya.c, {
            enabled: !!h,
            removeScrollBar: !1,
            children: [(0, N.jsxs)("div", {
              className: [ws.scMenu, h ? ws.navOpen : ""].join(" "),
              "data-logged-in": _,
              "data-mac-browser": P,
              "data-scroll-mode": u,
              ref: C,
              "aria-hidden": !h,
              children: [(0, N.jsx)("button", {
                className: ws.dragHandleBtn,
                type: "button",
                onTouchStart: e => {
                  const t = void 0 !== e.changedTouches ? e.touches[0].screenX : e.screenX;
                  L(t)
                },
                onTouchMove: e => {
                  if (0 === E) return;
                  const t = void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX;
                  Math.abs(E - t) > 1 && (L(0), k(!1))
                },
                children: (0, N.jsx)("img", {
                  className: ws.dragHandle,
                  src: a(2708),
                  alt: t.formatMessage(qa.sc_menu_drag_handle)
                })
              }), _ ? (0, N.jsx)(ys, {
                sc: w,
                charListHidden: l,
                hideCharacterList: D,
                refCharacterListDesktop: S,
                menuPadding: j,
                longCharList: x,
                setLongCharList: y,
                isMobileMode: M,
                setIsMobileMode: I
              }) : (0, N.jsx)(_s, {
                sc: w,
                navOpen: h
              })]
            }), (0, N.jsx)("div", {
              className: [ws.scOverlay, h ? ws.navOpen : ""].join(" "),
              "data-logged-in": _
            })]
          })
        }), T),
        Ss = a(1084),
        js = a(9314),
        Ts = j((e => {
          let {
            setOtherHeaderDropdowns: t
          } = e;
          const a = (0, m.c)(),
            {
              data: s
            } = (0, ie.useRockstarUser)(),
            {
              charactersNeeded: i,
              currentCharId: r,
              navOpen: n,
              setNavOpen: o
            } = (0, ie.useRockstarUserState)(),
            {
              track: l
            } = (0, ie.useGtmTrack)(),
            [d, u] = (0, c.useState)(null),
            [f, g] = (0, c.useState)(!1),
            [_, p] = (0, c.useState)(null),
            [h, k] = (0, c.useState)(!1),
            [b, v] = (0, c.useState)([]);
          (0, c.useEffect)((() => {
            v(s.characters[i] ?? [])
          }), [s, i]);
          const x = (0, c.useCallback)((e => {
            e.stopPropagation(), o(!n), 1 == !n && t(null), l({
              event: "account_menu_click",
              element_placement: "Account Menu",
              text: n ? "close" : "open"
            })
          }), [n]);
          return (0, c.useEffect)((() => {
            const e = s?.id ?? !1,
              t = e ? (b?.[r]?.mugshotUrl ?? s?.avatar) || Ss : js,
              a = Ga(b?.[r]?.platform, "small") ?? null;
            p(a), u(t), g(e), k(!!b?.[r]?.mugshotUrl)
          }), [s, b, r, Ss, js]), (0, N.jsxs)("button", {
            className: "rockstargames-tinadc519cef2feb621e4715bd3fcdf09791",
            "data-img-set": h,
            "aria-label": a.formatMessage(n ? qa.sc_menu_close : qa.sc_menu_open),
            "aria-expanded": n,
            type: "button",
            onClick: x,
            "data-testid": "avaterMenuButton",
            children: [(0, N.jsx)("img", {
              className: "rockstargames-tinace75eaa6d65692d36b60d31f3f660ff0",
              src: d || "",
              onError: () => {
                u(Ss)
              },
              alt: s?.nickname || ""
            }), f && null !== _ && (0, N.jsx)("img", {
              className: "rockstargames-tinaaaf21e74a659089f743bb160bdf95046",
              src: _.src,
              alt: _.alt
            }), f && (0, N.jsx)("div", {
              "data-ui-name": "avatar",
              className: "rockstargames-tinacf6b9e7404c64067bdfef9b79e9eb287",
              "data-platform": b?.[r]?.platform ?? null
            })]
          })
        }), T),
        Cs = {
          pillBtn: "rockstargames-tinab03cc125f63972f13ae84119af852edc",
          selected: "rockstargames-tinafbcf46d7ef0b32e64b374eee6e3cda3e",
          promoModule: "rockstargames-tinaa586d11bf592ca821d65db7660518322",
          promoModuleImage: "rockstargames-tinaccd749d613ceb73aedb825d77d22cd0b",
          gradient: "rockstargames-tinae4f178a3d1e3dfef8b42f73eabd9919e",
          promoModuleContentContainer: "rockstargames-tinad8348a62030f7e2f3c7a53cf67bef0f1",
          left: "rockstargames-tinae56a5b7d9a696ea8ca340cc9b67998fc",
          right: "rockstargames-tinac84d09e0c4466d20792d5a9016a00236",
          promoModuleTextContent: "rockstargames-tinabf34746d222495ab8e30cede8de42d71",
          promoModuleWrapper: "rockstargames-tinaf6d46a24b050aad98fc3aae387b75586"
        },
        Ms = e => {
          let {
            backgroundColor: t,
            brands: a = [],
            description: s = "",
            ctaLabel: i = "Click here",
            ctaLink: r = "https://rockstargames.com",
            gradient: n = !0,
            image: o,
            imageOrientation: l = "right",
            title: d = ""
          } = e;
          const [m, u] = (0, c.useState)(!1), {
            ref: f,
            inView: g
          } = (0, le.useInView)({
            threshold: .6
          }), {
            track: _
          } = (0, ie.useGtmTrack)(), p = {
            "--promo-background": t ?? "var(--black-200)",
            "--promo-image": `url(${(0,H.useGetCdnSource)(o)})` ?? 0,
            "--promo-order": "left" === l ? "row" : "row-reverse"
          };
          return (0, c.useEffect)((() => {
            g && !m && (_({
              event: "page_section_impression",
              event_action: "impression",
              event_category: "page_section",
              event_label: "promo module",
              element_placement: "promo module"
            }), u(!0))
          }), [g]), (0, N.jsx)(N.Fragment, {
            children: (0, N.jsx)("div", {
              className: Cs.promoModuleWrapper,
              children: (0, N.jsxs)(tt.q.div, {
                className: Cs.promoModule,
                style: p,
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
                ref: f,
                children: [(0, N.jsx)("div", {
                  className: [Cs.promoModuleImage, n ? Cs.gradient : "", "left" === l ? Cs.left : Cs.right].join(" ")
                }), (0, N.jsxs)("div", {
                  className: Cs.promoModuleContentContainer,
                  children: [(0, N.jsx)($, {
                    brands: a,
                    className: Cs.promoModuleBrands
                  }), (0, N.jsxs)("div", {
                    className: Cs.promoModuleTextContent,
                    children: [d && (0, N.jsx)("h3", {
                      children: d
                    }), s && (0, N.jsx)("p", {
                      children: s
                    })]
                  }), i && (0, N.jsx)(Y, {
                    to: r,
                    text: i,
                    onClick: () => {
                      _({
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
        };
      var Is = a(1532);
      const Es = {
          rating: "rockstargames-tinaa1271bbed316bf567eb67e78d2143808",
          withDescriptors: "rockstargames-tinacba248edc2520d3f1ad195a8495dc1f8",
          withOutDescriptors: "rockstargames-tinaff919f7a60b854473b61075a671deb6a",
          text: "rockstargames-tinad47cd2b7c7415cb44cddef00b1c9b35f"
        },
        Ls = (0, l.Os)({
          components_ratings_link_alt: {
            id: "components_ratings_link_alt",
            defaultMessage: "Rating: {rating}. Click here learn more about rating systems"
          }
        });
      (0, se.importAll)(a(2884));
      const Ps = yt(j((e => {
          let {
            descriptors: t = null,
            footer: s = null,
            href: i,
            img: r = null,
            titleSlug: n = null,
            style: o = {},
            className: l
          } = e;
          const [d, u] = (0, c.useState)(!1), {
            inView: f
          } = (0, le.useInView)({
            threshold: .6
          }), [g, _] = (0, c.useState)({
            img_rating: r,
            rating_descriptors: t,
            rating_footer: s,
            url_rating: i
          }), {
            track: p
          } = (0, ie.useGtmTrack)(), h = (0, m.c)(), {
            data: k
          } = (0, O.useQuery)(Is.GameData, {
            variables: {
              titleSlug: n
            },
            skip: !n
          });
          if ((0, c.useEffect)((() => {
              k && _(k?.game)
            }), [k]), (0, c.useEffect)((() => {
              f && !d && g.img_rating && (p({
                event: "page_section_impression",
                event_action: "impression",
                event_category: "page_section",
                event_label: "rating",
                element_placement: "rating"
              }), u(!0))
            }), [f]), !g.img_rating) return null;
          const b = !!g.rating_descriptors;
          return (0, N.jsxs)("div", {
            className: [Es.rating, b ? Es.withDescriptors : Es.withOutDescriptors, l || ""].join(" "),
            style: (0, se.safeStyles)(o),
            children: [(0, N.jsx)(E, {
              to: g.url_rating,
              target: "_blank",
              children: (0, N.jsx)("img", {
                alt: h.formatMessage(Ls.components_ratings_link_alt, {
                  rating: (v = g.img_rating, v.replace(/_/g, " ").split(".")[0].toUpperCase())
                }),
                src: a(0)(`./${g.img_rating}`)
              })
            }), b && (0, N.jsxs)("div", {
              className: Es.text,
              children: [(0, N.jsx)("p", {
                className: Es.descriptors,
                dangerouslySetInnerHTML: {
                  __html: g?.rating_descriptors?.split(/<br\s?\/?>/).join(", ") || ""
                }
              }), g.rating_footer && (0, N.jsx)("hr", {}), g.rating_footer && (0, N.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: g.rating_footer.replace(/ \//g, ", ")
                }
              })]
            })]
          });
          var v
        }), T)),
        Os = {
          responsiveFlexBox: "rockstargames-tinacef355ba53827b9ec44655c80b247b2e",
          responsiveFlexItem: "rockstargames-tinaa8f5d10f689c3d40c8378e3ae8a07517",
          responsiveImage: "rockstargames-tinabee8268780b292e5bc0da0b497e2c28f"
        },
        zs = e => {
          let {
            children: t,
            className: a,
            style: s
          } = e;
          return (0, N.jsx)("div", {
            className: [Os.responsiveFlexBox, void 0 !== a ? a : ""].join(" "),
            style: s,
            children: t
          })
        },
        As = {
          responsiveFlexItem: "rockstargames-tinaae579f6183cf73c897e68c8aae5c9d9d"
        },
        Bs = e => {
          let {
            children: t,
            className: a,
            style: s
          } = e;
          return (0, N.jsx)("div", {
            className: [As.responsiveFlexItem, void 0 !== a ? a : ""].join(" "),
            style: s,
            children: t
          })
        },
        Ds = {
          responsiveGridBox: "rockstargames-tinaa28c0b7a44e1a2d5fb257161ce36a24f",
          responsiveGridItem: "rockstargames-tinabeddf36313a28976090b5a8b04d2594a"
        },
        Rs = e => {
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
          return void 0 !== a && (n.gridTemplateColumns = `repeat(${a}, 1fr)`), void 0 !== i && (n.gridTemplateRows = `repeat(${i}, 1fr)`), (0, N.jsx)("div", {
            className: [Ds.responsiveGridBox, void 0 !== s ? s : ""].join(" "),
            style: n,
            children: t
          })
        },
        Vs = {
          responsiveGridBox: "rockstargames-tinaa39e7c7140ada0ab28537c8c901e816f",
          responsiveGridItem: "rockstargames-tinabe7a0966e2f0457c1172ac9da99020c6"
        },
        Fs = e => {
          let {
            children: t,
            className: a,
            style: s
          } = e;
          return (0, N.jsx)("div", {
            className: [Vs.responsiveGridItem, void 0 !== a ? a : ""].join(" "),
            style: s,
            children: t
          })
        },
        $s = {
          responsiveImage: "rockstargames-tinae31b43dce2e720669fb90bf539d22197"
        },
        Us = e => {
          let {
            src: t,
            className: a = "",
            animate: s,
            ariaLabel: i,
            style: r = {}
          } = e;
          const [n, o] = (0, se.usePreloadImg)(t);
          return n ? (r.backgroundImage = `url(${t})`, (0, N.jsx)("div", {
            role: "img",
            "aria-label": i ?? "R* Games",
            className: [$s.responsiveImage, s ? $s.animateBox : "", a].join(" "),
            style: {
              ...r,
              "--aspect-ratio": o.width / o.height
            }
          })) : null
        },
        Gs = {
          responsiveSection: "rockstargames-tinafb7094e43a166c19080ccfe92ed7420d",
          maxWidth: "rockstargames-tinabdc35dbaa55c59ddd2831fd3ac05c5a7"
        },
        Hs = e => {
          let {
            children: t,
            className: a,
            style: s,
            maxWidth: i
          } = e;
          return (0, N.jsx)("section", {
            className: [Gs.responsiveSection, void 0 !== a ? a : ""].join(" "),
            style: s,
            children: i ? (0, N.jsx)("div", {
              className: Gs.maxWidth,
              children: t
            }) : t
          })
        },
        qs = () => (0, N.jsx)(E, {
          className: "rockstargames-tinaba0c20f78999975dfb8d9cff0de44b34",
          alt: "Rockstar Games Home",
          to: "/"
        }),
        Ws = () => {
          const {
            pathname: e
          } = (0, Ot.IT)();
          return (0, c.useEffect)((() => {
            const e = document.scrollingElement || document.documentElement;
            setTimeout((() => {
              e.scrollTop = 0
            }), 0)
          }), [e]), null
        },
        Xs = (0, c.forwardRef)(((e, t) => {
          const {
            threshold: a,
            callback: s,
            children: i,
            requireUser: r
          } = e, {
            track: n
          } = (0, ie.useGtmTrack)(r), [o, l] = (0, c.useState)(t?.current);
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
      Xs.displayName = "ScrollTracker";
      const Ys = Xs,
        Ks = (0, se.withTranslations)((e => {
          let {
            t
          } = e;
          const [a] = (0, c.useState)(""), s = (0, Ot.i6)(), i = (0, O.useMutateState)();
          return (0, N.jsxs)("form", {
            action: "#",
            className: "rockstargames-tinab82052ce07e004075e77261c373bfc50",
            onSubmit: e => {
              e.preventDefault(), i({
                navOpen: !1
              }), document.activeElement?.blur(), s(`/search?q=${e.target.q.value}`)
            },
            role: "search",
            children: [(0, N.jsx)("button", {
              type: "submit",
              role: "button",
              title: "Submit"
            }), (0, N.jsx)("input", {
              autoComplete: "off",
              defaultValue: a,
              enterKeyHint: "search",
              name: "q",
              placeholder: t("Search Rockstar Games")
            })]
          })
        })),
        Qs = {
          skeleton: "rockstargames-tinaf963a1ae95f7f5ac2c5192c3f357b6dc",
          pulse: "rockstargames-tinae00ed88d692bbfc1a301dcfc61a077a9",
          gen9Hero: "rockstargames-tinadb0b80177710d337d93bddb97b8a7dea"
        },
        Zs = e => {
          let {
            skeleton: t
          } = e;
          return t ? (0, N.jsx)("div", {
            className: [Qs.skeleton, Qs[t]].join(" ")
          }) : null
        },
        Js = (0, l.Os)({
          components_track_list_title: {
            id: "components_track_list_title",
            defaultMessage: "Tracklist"
          }
        }),
        ei = {
          bodySmall: "rockstargames-tinac048aacaedc7fb642f38c7f163c193e3"
        },
        ti = e => {
          let {
            track: t,
            artist: a
          } = e;
          return (0, N.jsxs)("div", {
            className: ei.track,
            children: [(0, N.jsx)("p", {
              children: t
            }), (0, N.jsx)("p", {
              className: ei.bodySmall,
              children: a
            })]
          })
        },
        ai = j((e => {
          let {
            children: t
          } = e;
          return (0, N.jsxs)("div", {
            className: "rockstargames-tinae6c19f2cdd68a4352e248a8324383aa2",
            children: [(0, N.jsx)("h4", {
              className: "rockstargames-tinacd3895fbae93ba04f1401487f6e6eddf",
              children: (0, N.jsx)(d.c, {
                ...Js.components_track_list_title
              })
            }), (0, N.jsx)("div", {
              className: "rockstargames-tinaef0cde8b15ded961605237d0e8328a9b",
              children: (0, N.jsx)("div", {
                className: "rockstargames-tinabdd54186db17d27b3daebc4b9d58e09a",
                children: c.Children.map(c.Children.toArray(t), (e => (0, N.jsx)(ti, {
                  ...e?.props
                })))
              })
            })]
          })
        }), T),
        si = "rockstargames-tinaeca98eb0b5b84a0c9a2e6d952545a2d5",
        ii = "rockstargames-tinad3d0b4ecd3bddba96c73f49fcca34ed8",
        ri = {
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
        ni = e => {
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
          } = (0, ie.useGtmTrack)(), [d, m] = (0, c.useState)([kt.O4, kt.Hj, kt.eM]), [u, f] = (0, c.useState)(null), [g, _] = (0, c.useState)(null);
          return (0, c.useEffect)((() => {
            const e = [kt.O4, kt.Hj, kt.eM];
            i && e.push(kt._2), m(e)
          }), [i]), (0, c.useEffect)((() => {
            if (!r) return;
            const e = r.map(((e, t) => (0, N.jsx)(Q.Ky, {
              children: e
            }, Symbol(t).toString())));
            _(e)
          }), [r]), g ? (0, N.jsxs)(tt.q.div, {
            className: "rockstargames-tinad4f245838b94234f21463a08a8112910",
            variants: n.parent,
            transition: o.parent,
            initial: "initial",
            animate: "animate",
            children: [(0, N.jsx)(tt.q.div, {
              className: si,
              variants: n.main,
              transition: o.main,
              initial: "initial",
              animate: "animate",
              children: (0, N.jsx)(Q.wx, {
                loop: s,
                navigation: i,
                pagination: {
                  clickable: !0
                },
                thumbs: {
                  swiper: u
                },
                modules: d,
                breakpoints: ri,
                className: si,
                onSlideNextTransitionEnd: () => {
                  l({
                    event_action: "next",
                    event_category: "carousel",
                    event: "carousel_next",
                    event_label: t?.toLowerCase() ?? ""
                  })
                },
                onSlidePrevTransitionEnd: () => {
                  l({
                    event_action: "previous",
                    event_category: "carousel",
                    event: "carousel_previous",
                    event_label: t?.toLowerCase() ?? ""
                  })
                },
                onSlideChangeTransitionEnd: () => {
                  l({
                    event_action: "swipe",
                    event_category: "carousel",
                    event: "carousel_swipe",
                    event_label: t?.toLowerCase() ?? ""
                  })
                },
                children: g
              })
            }), (0, N.jsx)(tt.q.div, {
              className: ii,
              variants: n.thumbs,
              transition: o.thumbs,
              initial: "initial",
              animate: "animate",
              children: (0, N.jsx)(Q.wx, {
                threshold: 50,
                onSwiper: f,
                loop: s,
                breakpoints: ri,
                slidesPerView: a,
                freeMode: !0,
                watchSlidesProgress: !0,
                modules: d,
                className: ii,
                children: g
              })
            })]
          }) : null
        };
      var oi = a(504);
      const ci = e => {
          let {
            id: t = null,
            ids: a = null,
            setTitleDataPath: s = null,
            sync: i = !1
          } = e;
          const r = a ?? [t],
            {
              data: n
            } = (0, O.useQuery)(oi.TinaModulesInfo, {
              variables: {
                ids: r,
                sync: i
              },
              setTitleDataPath: s,
              skip: !r.length
            });
          return n?.tinaModulesInfo ?? null
        },
        li = yt((e => {
          let {
            components: t = {},
            id: a = null,
            ids: s = null,
            skeleton: i
          } = e;
          const r = ci({
            id: a,
            ids: s
          });
          if (!r) return (0, N.jsx)(Zs, {
            skeleton: i
          });
          const n = r?.[0]?.tina;
          return n ? (0, N.jsx)(N.Fragment, {
            children: r.map(((e, a) => {
              let {
                tina: s
              } = e;
              return (0, N.jsx)(H.TinaParser, {
                components: t,
                tina: s,
                componentProps: {
                  tinaModulesInfo: r
                }
              }, a)
            }))
          }) : null
        })),
        di = e => {
          let {
            children: t,
            style: a,
            theme: s
          } = e;
          const [i, r] = (0, c.useState)(s);
          return (0, c.useEffect)((() => {
            s && r(s)
          }), [s]), (0, N.jsx)("div", {
            className: "rockstargames-tinaa3cc68ab0d512c3d8835ee9abb7a51c4",
            style: a,
            "data-theme": i,
            children: t
          })
        };
      var mi = a(9168);
      const ui = {
          pillBtn: "rockstargames-tinaae56f3a5bf16f1160a0cbc040c7611fa",
          selected: "rockstargames-tinad7e34a082f54f22035320df51e8b4ed9",
          userVote: "rockstargames-tinafd538df1ac730062880ff9ca1292dcc4",
          info: "rockstargames-tinadd49c22b2bd842d7e8c11ac45b3a536b",
          voteContent: "rockstargames-tinaeb3c4c0d7629a1182cd138d3d2e6e081",
          loggedOutButtons: "rockstargames-tinad00b4195df0f175083f6aa2a7d847d72",
          voteButtons: "rockstargames-tinafdd10a481e3da0f8e9511b6a577052e0",
          downVote: "rockstargames-tinaabdbb2656b0080d66eb4d39b7e1eb38d",
          upVote: "rockstargames-tinaea25ed07e937e2efdce0b99d076fbbe1",
          voteButtonActive: "rockstargames-tinac31731d09d8118c6a82fe6edb193dc50"
        },
        fi = e => {
          let {
            description: t,
            foreign_id: a = document.location.pathname,
            foreign_type: s = "url",
            title: i
          } = e;
          const {
            track: r
          } = (0, ie.useGtmTrack)(), {
            loggedIn: n
          } = (0, ie.useRockstarUser)(), {
            refetch: o
          } = (0, O.useQuery)(mi.UserGetVote, {
            skip: !0
          }), [l] = (0, O.useMutation)(mi.UserCastVote), [d, m] = (0, c.useState)(null), u = (0, c.useCallback)((async e => {
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
          }), [a, s, n]), (0, N.jsx)("div", {
            className: ui.userVote,
            children: (0, N.jsxs)("div", {
              className: ui.voteContent,
              children: [(0, N.jsxs)("div", {
                className: ui.info,
                children: [(0, N.jsx)("h3", {
                  children: i
                }), (0, N.jsx)("p", {
                  children: t
                })]
              }), (0, N.jsxs)("div", {
                className: [ui.voteButtons, n ? "" : ui.loggedOutButtons].join(" "),
                children: [(0, N.jsx)("button", {
                  onClick: () => u(!0),
                  className: [ui.upVote, d ? ui.voteButtonActive : ""].join(" "),
                  type: "button",
                  "aria-label": "Vote up"
                }), (0, N.jsx)("button", {
                  className: [ui.downVote, !1 === d ? ui.voteButtonActive : ""].join(" "),
                  onClick: () => u(!1),
                  type: "button",
                  "aria-label": "Vote down"
                })]
              })]
            })
          })
        },
        gi = {
          carousel: "rockstargames-tinad8e71d378f6d4a968e8ac7d621e5f32a",
          text: "rockstargames-tinaa3f73d86b98d36a296bf8f621f1c340f",
          info: "rockstargames-tinaf46d7fc75c302b1d3f4db01d8572bea8",
          active: "rockstargames-tinad26d1267cc02f841fee8a874d679aebd",
          title: "rockstargames-tinaa879dfc151f7cf8da6bf5642b51436bb",
          gameTitle: "rockstargames-tinab42d96124219141b4dbb454131b8c37b",
          videoTitle: "rockstargames-tinac5ff8983fae65d6a3d7c741360bd3606",
          cta: "rockstargames-tinae25e320fda75ce4076c9fe68b540a2fa",
          track: "rockstargames-tinadd0d39c46df512d3eff8ba48e469af0a",
          disableClick: "rockstargames-tinab169e1b67f64de28605dd5056a740584",
          items: "rockstargames-tinadddc42d4babcaec339a7c1bd04420e6e",
          dragging: "rockstargames-tinaa7313e3ff4e99b5313f8698890d0dd8c",
          dots: "rockstargames-tinae1d7433489996eb9fa890d452ebcb042"
        },
        _i = (0, se.withLocale)((e => {
          let {
            locale: t,
            t: a,
            videos: s
          } = e;
          const {
            setBodyIsScrollable: i
          } = (0, se.useBodyScrollable)(), [r, n] = (0, c.useState)(0), [o, l] = (0, c.useState)(0), d = (0, c.useRef)(null), m = (0, c.useRef)(null);
          return (0, c.useEffect)((() => {
            if (!d.current || !m.current) return;
            const e = new(P())(d.current);
            e.get("press").set({
              time: 0
            }), e.get("tap").set({
              time: 150
            });
            const t = () => "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0,
              a = () => {
                n(r - 1 < 0 ? 0 : r - 1), l(0)
              },
              o = () => {
                const e = r + 1 >= s.length - 1 ? s.length - 1 : r + 1;
                n(e), l(0)
              },
              c = e => {
                l(e.isFinal ? 0 : e.deltaX), "panleft" !== e.additionalEvent && "panright" !== e.additionalEvent || !m.current?.classList.contains(gi.dragging) || t() && i(!1)
              },
              u = () => {
                t() && i(!0), l(0)
              },
              f = e => {
                "press" === e.type && d.current?.classList.add(`${gi.disableClick}`), "tap" === e.type && (d.current?.classList.remove(`${gi.disableClick}`), document.elementFromPoint(e.center.x, e.center.y).click())
              },
              g = () => {
                t() && i(!0), d.current && d.current.classList.remove(`${gi.disableClick}`)
              },
              _ = () => {
                t() && i(!0)
              };
            return m.current.addEventListener("transitionend", _), e.on("swiperight", a), e.on("swipeleft", o), e.on("pan", c), e.on("panend", u), e.on("press tap", f), e.on("pressup", g), () => {
              e.off("swiperight", a), e.off("swipeleft", o), e.off("pan", c), e.off("panend", u), e.off("press tap", f), e.off("pressup", g), m.current && m.current.removeEventListener("transitionend", _), l(0)
            }
          }), [d.current, r]), (0, N.jsxs)("section", {
            className: gi.carousel,
            children: [(0, N.jsx)("div", {
              className: gi.track,
              ref: d,
              children: (0, N.jsx)("div", {
                className: `${gi.items} ${0!==o?gi.dragging:""}`,
                ref: m,
                style: {
                  transform: `translateX(calc(-${100*r}% + ${o}px))`
                },
                children: s.map(((e, t) => (0, N.jsx)(E, {
                  "data-gtm-category": "Carousel",
                  "data-gtm-action": "Click-through screencap",
                  "data-gtm-label": `/videos/${e.id}`,
                  to: `/videos/${e.id}`,
                  className: r === t ? gi.active : "",
                  role: "link",
                  title: e.title,
                  tabIndex: r === t ? 0 : -1,
                  children: (0, N.jsx)(yi, {
                    video: e,
                    size: 1280
                  })
                }, e.id)))
              })
            }), (0, N.jsxs)("footer", {
              children: [(0, N.jsx)("div", {
                className: gi.text,
                children: s.map(((e, s) => (0, N.jsx)(E, {
                  "data-gtm-category": "Carousel",
                  "data-gtm-action": "Click-through footer",
                  "data-gtm-label": `/videos/${e.id}`,
                  to: `/videos/${e.id}`,
                  role: "link",
                  title: e.title,
                  tabIndex: r === s ? 0 : -1,
                  children: (0, N.jsxs)("div", {
                    className: [gi.info, s === r ? gi.active : ""].join(" "),
                    children: [(0, N.jsxs)("div", {
                      className: gi.title,
                      children: [(0, N.jsx)("div", {
                        className: gi.gameTitle,
                        children: `${e.game.title}${"fr_fr"===t?" ":""}`
                      }), (0, N.jsx)("h2", {
                        className: gi.videoTitle,
                        children: `${e.title}`
                      })]
                    }), (0, N.jsx)(G, {
                      className: gi.cta,
                      children: a("Watch Now")
                    })]
                  })
                }, e.id)))
              }), (0, N.jsx)("div", {
                className: gi.dots,
                children: s.map(((e, t) => (0, N.jsx)("button", {
                  "aria-label": `Slide ${t+1}`,
                  "data-gtm-category": "Marquee",
                  "data-gtm-action": "Dot click",
                  "data-gtm-label": `Dot clicked to ${t}`,
                  onClick: () => n(t),
                  className: r === t ? gi.active : "",
                  type: "button"
                }, e.id)))
              })]
            })]
          })
        })),
        pi = (0, l.Os)({
          next_button_label: {
            id: "next_button_label",
            defaultMessage: "Next video page"
          },
          previous_button_label: {
            id: "previous_button_label",
            defaultMessage: "Previous video page"
          }
        }),
        hi = {
          videoList: "rockstargames-tinaa77794780421c410f7ea55ed11ae6340",
          sectionHeader: "rockstargames-tinaed556e2220733d99eae5df36ba41f9c7",
          arrowNav: "rockstargames-tinaffeb6a2e829d49f94fea4ee7f5a0d2c8",
          items: "rockstargames-tinaffe2263cdad39631ef304714ba89465d",
          trackWrapper: "rockstargames-tinacbdef484a85e8f352a06609b394d4da7",
          partial: "rockstargames-tinab33af3fff1e38a693bdc09f20d8e6f81",
          track: "rockstargames-tinaf3f263effe27f3c21f2ab822b9ee5dcf",
          arrow: "rockstargames-tinac8012415449630a832011f490b9d2b72",
          previous: "rockstargames-tinaf30d899a31937a4cf395643951224469",
          next: "rockstargames-tinad9d5a85633fc0f0b7f98219d735e6e05",
          disabled: "rockstargames-tinac806076a1e3e23c77528ee12e32771a3"
        },
        ki = j((e => {
          let {
            vids: t,
            games: a,
            title: s,
            gameTitleNecessary: i
          } = e;
          const r = (0, m.c)(),
            {
              track: n
            } = (0, ie.useGtmTrack)(),
            o = void 0 !== a ? "games" : "videos",
            [l, d] = (0, c.useState)(),
            [u, f] = (0, c.useState)(),
            [g, _] = (0, c.useState)(0),
            p = (0, c.useRef)(null),
            h = (0, c.useRef)(null);
          (0, c.useEffect)((() => {
            f({
              nextEl: h.current,
              prevEl: p.current
            })
          }), [h, p]), (0, c.useEffect)((() => {
            const e = () => {
              const e = e => window.matchMedia(`(max-width: ${e})`).matches;
              let t = 4;
              e("768px") ? t = 1 : e("990px") || e("1440px") ? t = 2.2 : e("1920px") && (t = 3.2), _(t)
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), [g]);
          const k = e => {
            l?.slideTo(e)
          };
          let b;
          return b = "games" === o ? (0, N.jsx)(N.Fragment, {
            children: a.results.map(((e, t) => 666 !== e.id && (0, N.jsx)(Q.Ky, {
              className: hi.slide,
              onFocus: () => k(t),
              children: (0, N.jsx)(_t, {
                game: e,
                dontOverrideTo: !0,
                to: `/videos?type=game&gameId=${e.id}`
              })
            }, e.id)))
          }) : (0, N.jsx)(N.Fragment, {
            children: t.map(((e, t) => (0, N.jsx)(Q.Ky, {
              className: hi.slide,
              onFocus: () => k(t),
              children: (0, N.jsx)(wi, {
                video: e,
                gameTitleNecessary: i
              })
            }, e.id)))
          }), (0, N.jsxs)("section", {
            className: hi.videoList,
            children: [(0, N.jsxs)("h3", {
              className: hi.sectionHeader,
              children: [s, (0, N.jsxs)("div", {
                className: hi.arrowNav,
                children: [(0, N.jsx)("button", {
                  className: [hi.arrow, hi.previous].join(" "),
                  type: "button",
                  ref: p,
                  "aria-label": r.formatMessage(pi.previous_button_label)
                }), (0, N.jsx)("button", {
                  className: [hi.arrow, hi.next].join(" "),
                  type: "button",
                  ref: h,
                  "aria-label": r.formatMessage(pi.next_button_label),
                  onKeyDown: e => {
                    if ("Tab" === e.key && !e.shiftKey) {
                      const t = l?.slides[l?.activeIndex].querySelector('a, button, [role="button"]');
                      t && (e.preventDefault(), t.focus())
                    }
                  }
                })]
              })]
            }), (0, N.jsx)("div", {
              className: [hi.items, g % 1 != 0 ? hi.partial : ""].join(" "),
              children: (0, N.jsx)("div", {
                className: hi.trackWrapper,
                children: g && (0, N.jsx)(Q.wx, {
                  className: hi.track,
                  slidesPerView: g,
                  spaceBetween: 24,
                  onInit: e => {
                    d(e)
                  },
                  grabCursor: !0,
                  navigation: u,
                  modules: [kt._2],
                  slideClass: (0, H.classList)("swiper-slide"),
                  onSlideNextTransitionEnd: () => {
                    n({
                      event_action: "next",
                      event_category: "carousel",
                      event: "carousel_next",
                      event_label: s?.toLowerCase() ?? ""
                    })
                  },
                  onSlidePrevTransitionEnd: () => {
                    n({
                      event_action: "previous",
                      event_category: "carousel",
                      event: "carousel_previous",
                      event_label: s?.toLowerCase() ?? ""
                    })
                  },
                  onSlideChangeTransitionEnd: () => {
                    n({
                      event_action: "swipe",
                      event_category: "carousel",
                      event: "carousel_swipe",
                      event_label: s?.toLowerCase() ?? ""
                    })
                  },
                  children: b
                })
              })
            })]
          })
        }), T),
        bi = e => {
          let {
            children: t,
            ...a
          } = e;
          return (0, N.jsx)("span", {
            ...a,
            className: "rockstargames-tinaf7f61ab4bc6dd2a49f80662ead7d8a51",
            children: t
          })
        },
        vi = (0, se.withTranslations)((e => {
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
          }), [n]), (0, N.jsxs)("div", {
            className: "rockstargames-tinad988ce20c420c26fc5e455279bf94cb9",
            children: [(0, N.jsx)("h3", {
              tabIndex: -1,
              ref: n,
              children: `${i} (${r})`
            }), (0, N.jsx)(E, {
              to: "/",
              children: a("Home")
            }), "clr" !== s && (0, N.jsx)(Ks, {})]
          })
        })),
        xi = {
          videoPreview: "rockstargames-tinac6739cc628fda235abe2bafeb30ad7cf",
          card: "rockstargames-tinaec6e68ffa1188155be202dfef3f92829",
          info: "rockstargames-tinaab8da127fbcdb98f874bc3f1377669a2",
          title: "rockstargames-tinae84fa4b2b140994c96a13607410d30a3",
          screencap: "rockstargames-tinaa322c3d2275cedd594a3b17800154066",
          screencapLoaded: "rockstargames-tinaf68c57f5459778024e5a98918ae61ab2",
          gameTitle: "rockstargames-tinadebff452a4923aded7de826c081bab5d"
        },
        yi = e => {
          let {
            video: t,
            size: a = 640
          } = e;
          const s = `${t.screencap}?im=Resize=${a}`,
            [i] = (0, se.usePreloadImg)(s);
          return (0, N.jsx)("div", {
            className: [xi.screencap, i ? xi.screencapLoaded : ""].join(" "),
            style: {
              background: `url(${s}) center/cover`
            }
          })
        },
        wi = e => {
          let {
            gameTitleNecessary: t = !0,
            openInNewWindow: a = !1,
            video: s,
            size: i,
            toExplicit: r
          } = e;
          const n = r ?? `/videos/${s.id}`,
            o = {
              className: xi.videoPreview,
              "data-gtm-category": "Videos",
              "data-gtm-action": "Video Click-through",
              "data-gtm-label": n
            },
            c = (0, N.jsxs)("div", {
              className: xi.card,
              children: [(0, N.jsx)(yi, {
                video: s,
                size: i
              }), (0, N.jsxs)("div", {
                className: xi.info,
                children: [t ? (0, N.jsx)("div", {
                  className: xi.gameTitle,
                  dangerouslySetInnerHTML: {
                    __html: s.game.title
                  }
                }) : "", (0, N.jsx)("h5", {
                  className: xi.title,
                  dangerouslySetInnerHTML: {
                    __html: s.title
                  }
                })]
              })]
            });
          return a ? (0, N.jsx)("a", {
            href: n,
            target: "_blank",
            ...o,
            children: c
          }) : (0, N.jsx)(E, {
            to: n,
            ...o,
            children: c
          })
        };
      class Ni extends c.Component {
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
          return null !== this.state.error.code ? (0, N.jsx)(vi, {
            error: this.state.error
          }) : this.props.children
        }
      }
      const Si = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return function(a) {
          return (0, N.jsx)(Ni, {
            header: t,
            children: (0, N.jsx)(e, {
              ...a
            })
          })
        }
      };
      var ji = a(1267),
        Ti = a(688),
        Ci = a(5636);
      const Mi = (0, c.forwardRef)(((e, t) => {
        const {
          children: a,
          tag: s = "div"
        } = e, i = ji.m[s];
        return (0, N.jsx)(Ti.O, {
          features: Ci.i,
          children: (0, N.jsx)(i, {
            ref: t,
            ...e,
            children: a
          })
        })
      }));
      Mi.displayName = "LiteMotion";
      const Ii = Mi,
        Ei = {
          visible: {
            opacity: 1
          },
          hidden: {
            opacity: 0
          }
        },
        Li = {
          ease: "easeIn",
          duration: .4
        },
        Pi = e => {
          let {
            children: t
          } = e;
          return (0, N.jsx)(tt.q.div, Object.assign({
            className: "rockstargames-tinaf0ee4e641f1ac92151be887c9ebb8392",
            variants: Ei,
            initial: "hidden",
            whileInView: "visible",
            viewport: {
              margin: "-20%",
              once: !0
            },
            transition: Li
          }, {
            children: t
          }))
        },
        Oi = e => t => (0, N.jsx)(Pi, {
          children: (0, N.jsx)(e, Object.assign({}, t))
        }),
        zi = {
          visible: {
            opacity: 1,
            y: 0
          },
          hidden: {
            opacity: 0,
            y: 40
          }
        },
        Ai = {
          ease: "easeIn",
          duration: .75
        },
        Bi = e => {
          let {
            children: t
          } = e;
          return (0, N.jsx)(tt.q.div, {
            className: "rockstargames-tinaa479a10c5475b17a0564b60fecf98c8b",
            variants: zi,
            initial: "hidden",
            whileInView: "visible",
            viewport: {
              margin: "-20%",
              once: !0
            },
            transition: Ai,
            children: t
          })
        },
        Di = e => t => (0, N.jsx)(Bi, {
          children: (0, N.jsx)(e, {
            ...t
          })
        }),
        Ri = {
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
        Vi = {
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
        Fi = function() {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "collapsed";
          return Vi[arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "imageMask"][e]
        };
      var $i = a(5164);
      const Ui = JSON.parse('{"assets":[],"layers":[{"ddd":0,"ind":0,"ty":4,"nm":"Shape Layer 1","ks":{"o":{"k":100},"r":{"k":0},"p":{"k":[300,300,0]},"a":{"k":[0,0,0]},"s":{"k":[244,244,100]}},"ao":0,"shapes":[{"d":1,"ty":"el","s":{"k":[100,100]},"p":{"k":[0,0]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"tm","s":{"k":[{"i":{"x":[0.439],"y":[1.016]},"o":{"x":[0.561],"y":[0.015]},"n":["0p439_1p016_0p561_0p015"],"t":5,"s":[100],"e":[0]},{"t":33.0000013441176}],"ix":1},"e":{"k":[{"i":{"x":[0.439],"y":[1.017]},"o":{"x":[0.561],"y":[0.016]},"n":["0p439_1p017_0p561_0p016"],"t":0,"s":[100],"e":[0]},{"t":30.0000012219251}],"ix":2},"o":{"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim"},{"ty":"st","fillEnabled":true,"c":{"k":[1,1,1,1]},"o":{"k":100},"w":{"k":16},"lc":2,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke"}],"ip":0,"op":900.000036657751,"st":0,"bm":0,"sr":1}],"v":"4.5.3","ddd":0,"ip":1.00000004073083,"op":33.0000013441175,"fr":29.9700012207031,"w":600,"h":600}'),
        Gi = JSON.parse('{"v":"5.7.3","fr":60,"ip":0,"op":64,"w":300,"h":300,"nm":"Dot_Loading","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"center","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":10,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":22,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":34,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[17.667,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"right","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":5,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":17,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":29,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[12.333,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 2","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"left","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":0,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":12,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":24,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[7,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 3","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0}],"markers":[]}'),
        Hi = {
          SPINNING: "spinning",
          THREE_DOTS: "threeDots"
        },
        qi = e => {
          let t, {
            type: a = Hi.SPINNING
          } = e;
          switch (a) {
            case Hi.THREE_DOTS:
              t = Gi;
              break;
            case Hi.SPINNING:
            default:
              t = Ui
          }
          const s = {
            loop: !0,
            autoplay: !0,
            animationData: t,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice"
            }
          };
          return (0, N.jsx)($i.c, {
            options: s,
            height: 50,
            width: 50
          })
        }
    },
    48: e => {
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
          o = new Set;
        for (r.forEach((function(e) {
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
          var s = i(e, t);
          s && a.definitions.push(s)
        })), a
      }(t, "GetAudioAlbum")
    },
    8652: e => {
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
          o = new Set;
        for (r.forEach((function(e) {
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
          o = new Set;
        for (r.forEach((function(e) {
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
    9168: e => {
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
          o = new Set;
        for (r.forEach((function(e) {
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
    5492: (e, t, a) => {
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
      s.definitions = s.definitions.concat(r(a(3784).definitions)), s.definitions = s.definitions.concat(r(a(8540).definitions));
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
          i = new Set,
          r = new Set;
        for (s.forEach((function(e) {
            r.add(e)
          })); r.size > 0;) {
          var n = r;
          r = new Set, n.forEach((function(e) {
            i.has(e) || (i.add(e), (o[e] || new Set).forEach((function(e) {
              r.add(e)
            })))
          }))
        }
        return i.forEach((function(t) {
          var s = c(e, t);
          s && a.definitions.push(s)
        })), a
      }(s, "NewswireList")
    },
    3892: (e, t, a) => {
      var s = {
        "./left.svg": 2440,
        "./pc.svg": 6584,
        "./ps.svg": 8407,
        "./ps3.svg": 1972,
        "./ps4.svg": 672,
        "./ps5.svg": 2243,
        "./right.svg": 1837,
        "./switch.svg": 9868,
        "./x.svg": 2428,
        "./xbox.svg": 8868,
        "./xboxone.svg": 8092,
        "./xboxseriesxs.svg": 3040
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
      }, i.resolve = r, e.exports = i, i.id = 3892
    },
    2884: (e, t, a) => {
      var s = {
        "./cero_a.png": 8604,
        "./cero_b.svg": 4276,
        "./cero_c.svg": 5264,
        "./cero_d.svg": 4268,
        "./cero_rp.png": 9716,
        "./cero_z.svg": 8696,
        "./djctq_10.svg": 9375,
        "./djctq_12.svg": 7056,
        "./djctq_14.svg": 2804,
        "./djctq_16.svg": 9900,
        "./djctq_18.svg": 2192,
        "./djctq_er.svg": 1732,
        "./djctq_l.svg": 4428,
        "./esrb_ao.svg": 2144,
        "./esrb_e.svg": 9492,
        "./esrb_e10plus.svg": 711,
        "./esrb_m.svg": 292,
        "./esrb_m_ao.svg": 8404,
        "./esrb_rp.svg": 9600,
        "./esrb_rplm17.svg": 4656,
        "./esrb_t.svg": 4884,
        "./fpb_13.svg": 896,
        "./fpb_16.svg": 7932,
        "./fpb_18.svg": 568,
        "./fpb_pg.svg": 6620,
        "./grac_12.svg": 1407,
        "./grac_15.svg": 4164,
        "./grac_18.svg": 4916,
        "./grac_19.svg": 9976,
        "./grac_a.svg": 7304,
        "./gsrr_0.svg": 2284,
        "./gsrr_12.svg": 2024,
        "./gsrr_15.svg": 1040,
        "./gsrr_18.svg": 6632,
        "./gsrr_6.svg": 7372,
        "./nmc_12.svg": 1423,
        "./nmc_16.svg": 2596,
        "./nmc_18.svg": 3980,
        "./nmc_21.svg": 4859,
        "./nmc_3.svg": 5140,
        "./nmc_7.svg": 6884,
        "./oflc_g.svg": 8704,
        "./oflc_m.svg": 4116,
        "./oflc_ma15.svg": 2856,
        "./oflc_pg.svg": 5888,
        "./oflc_r18.svg": 4780,
        "./pegi_12.svg": 8564,
        "./pegi_16.svg": 524,
        "./pegi_18.svg": 3173,
        "./pegi_3.svg": 100,
        "./pegi_4.svg": 64,
        "./pegi_6.svg": 5228,
        "./pegi_7.svg": 4308,
        "./pegi_rp.png": 6480,
        "./rars_0.svg": 8112,
        "./rars_12.svg": 7767,
        "./rars_16.svg": 5740,
        "./rars_18.svg": 6708,
        "./rars_6.svg": 4264,
        "./usk_0.svg": 5084,
        "./usk_12.svg": 3004,
        "./usk_16.svg": 1804,
        "./usk_18.svg": 1367,
        "./usk_6.svg": 5568,
        "./usk_rp.svg": 3716,
        "./vaci_rp.png": 6616
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
      }, i.resolve = r, e.exports = i, i.id = 2884
    },
    0: (e, t, a) => {
      var s = {
        "./cero_a.png": 8604,
        "./cero_b.svg": 4276,
        "./cero_c.svg": 5264,
        "./cero_d.svg": 4268,
        "./cero_rp.png": 9716,
        "./cero_z.svg": 8696,
        "./djctq_10.svg": 9375,
        "./djctq_12.svg": 7056,
        "./djctq_14.svg": 2804,
        "./djctq_16.svg": 9900,
        "./djctq_18.svg": 2192,
        "./djctq_er.svg": 1732,
        "./djctq_l.svg": 4428,
        "./esrb_ao.svg": 2144,
        "./esrb_e.svg": 9492,
        "./esrb_e10plus.svg": 711,
        "./esrb_m.svg": 292,
        "./esrb_m_ao.svg": 8404,
        "./esrb_rp.svg": 9600,
        "./esrb_rplm17.svg": 4656,
        "./esrb_t.svg": 4884,
        "./fpb_13.svg": 896,
        "./fpb_16.svg": 7932,
        "./fpb_18.svg": 568,
        "./fpb_pg.svg": 6620,
        "./grac_12.svg": 1407,
        "./grac_15.svg": 4164,
        "./grac_18.svg": 4916,
        "./grac_19.svg": 9976,
        "./grac_a.svg": 7304,
        "./gsrr_0.svg": 2284,
        "./gsrr_12.svg": 2024,
        "./gsrr_15.svg": 1040,
        "./gsrr_18.svg": 6632,
        "./gsrr_6.svg": 7372,
        "./nmc_12.svg": 1423,
        "./nmc_16.svg": 2596,
        "./nmc_18.svg": 3980,
        "./nmc_21.svg": 4859,
        "./nmc_3.svg": 5140,
        "./nmc_7.svg": 6884,
        "./oflc_g.svg": 8704,
        "./oflc_m.svg": 4116,
        "./oflc_ma15.svg": 2856,
        "./oflc_pg.svg": 5888,
        "./oflc_r18.svg": 4780,
        "./pegi_12.svg": 8564,
        "./pegi_16.svg": 524,
        "./pegi_18.svg": 3173,
        "./pegi_3.svg": 100,
        "./pegi_4.svg": 64,
        "./pegi_6.svg": 5228,
        "./pegi_7.svg": 4308,
        "./pegi_rp.png": 6480,
        "./rars_0.svg": 8112,
        "./rars_12.svg": 7767,
        "./rars_16.svg": 5740,
        "./rars_18.svg": 6708,
        "./rars_6.svg": 4264,
        "./usk_0.svg": 5084,
        "./usk_12.svg": 3004,
        "./usk_16.svg": 1804,
        "./usk_18.svg": 1367,
        "./usk_6.svg": 5568,
        "./usk_rp.svg": 3716,
        "./vaci_rp.png": 6616
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
      }, i.resolve = r, e.exports = i, i.id = 0
    },
    6572: (e, t, a) => {
      var s = {
        "./bounty.png": 752,
        "./collector.png": 56,
        "./moonshiner.png": 1444,
        "./naturalist.png": 3268,
        "./trader.png": 4688
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
    8016: (e, t, a) => {
      var s = {
        "./VI/desktop.png": 4616,
        "./VI/mobile.png": 7076
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
      }, i.resolve = r, e.exports = i, i.id = 8016
    },
    3408: (e, t, a) => {
      var s = {
        "./VI/desktop.png": 4616
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
      }, i.resolve = r, e.exports = i, i.id = 3408
    },
    2027: (e, t, a) => {
      var s = {
        "./VI/mobile.png": 7076
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
      }, i.resolve = r, e.exports = i, i.id = 2027
    },
    2440: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3c6134ba61610ead6af640361535e346.svg"
    },
    6584: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c050b43f15f34e2cd0592fad6dc48fd.svg"
    },
    8407: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/27ae07e3226006749e6cb6428bc62bb1.svg"
    },
    1972: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d118a14a73ce72b4687d9eb69724f4d2.svg"
    },
    672: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3f9f55567df4006813f8bf50ad383ea0.svg"
    },
    2243: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b12e4e9678e7a4ebea34905926feeb90.svg"
    },
    1837: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cf1b78cec82c717ea9c2155ce4093736.svg"
    },
    9868: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/925d3b2d0b0e784c366e20d3f1a660da.svg"
    },
    2428: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7c453a914f0b049334120adfcba614e5.svg"
    },
    8868: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f74e871585118640ffd9ce881181a176.svg"
    },
    8092: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f91e4753c491fb23c2b364f69480c9e.svg"
    },
    3040: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5bd8456deb2338503b8fd44786b5fa07.svg"
    },
    2708: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/44d747ec4a149ad5386114f6b5c60f2d.svg"
    },
    9314: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a29e26aa160e7be7e845708c335b3c39.svg"
    },
    1084: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8271b67c2f5834856448ca1eef6dba3f.png"
    },
    6452: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5be68b0895e242db88f00aae46effad7.svg"
    },
    4120: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6054f77c4450b075b6059eda658a510d.svg"
    },
    3788: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c577e2612120d70330b797e6ee5487d9.svg"
    },
    4904: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c8ee10e269f42d96c58c1eb016717e1.svg"
    },
    9916: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61f1cfebde0508725354fa6c2bdda0b4.svg"
    },
    804: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/77896e8c17472d9127fc3a09244bcdec.svg"
    },
    564: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/941a1141a404ed211f7d23ed36ccee23.svg"
    },
    2756: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/04d319f216248f3df7f9727df641b832.svg"
    },
    2064: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3e18ef78074a128424a94ab6313dd332.svg"
    },
    7748: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c91f19b5ea19868e280034220acf6740.svg"
    },
    4184: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3d0b47d69ca8bee8a00a608ebd896198.svg"
    },
    9450: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2a7a3f3a2974f306eaf16cbc851622ec.svg"
    },
    3344: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9c9f8a365923c42d238fc1f94659f4a7.svg"
    },
    1216: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/13287de69dbdd8bdcd042ce6285f2bae.svg"
    },
    8604: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51b141250a4851d7ec3673d88dbd20a.png"
    },
    4276: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7ac89f9e00ded04ef4b2dd3eaf3e8734.svg"
    },
    5264: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f44dd7aad9d6c62e40a11f51252f59b8.svg"
    },
    4268: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/204116b24cd9e9ab4e71af21b3a96179.svg"
    },
    9716: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/676b3908098d8b19f1019ce361af45ec.png"
    },
    8696: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/03ab76c58ed61a83bf035c923dbe32b2.svg"
    },
    9375: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f468aef6f0b5399d5c0f6b2e95b60cc5.svg"
    },
    7056: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0b31c79d361cfd92e1a405dbbf4890bd.svg"
    },
    2804: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3689ac97526f00a4537e1b38ec82a074.svg"
    },
    9900: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/07f9f9e93ec430813e74cbce545962c4.svg"
    },
    2192: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/608f591c35aff9d47091dd7fe9a8fb13.svg"
    },
    1732: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/198ced82807c854e92e84e23f7434c91.svg"
    },
    4428: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/edf01daa4f0392081705c17a74d8a146.svg"
    },
    2144: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c4dd58f5b5b97796b6c6177de364dd36.svg"
    },
    9492: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/201de0eb81b09ea93aa1aef2a6824b7c.svg"
    },
    711: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/534078f6307f97ce0d70e0bb885f9d77.svg"
    },
    292: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f4b0d9409df1e8a420b2118e4e601263.svg"
    },
    8404: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/092865e0ddae5190dc3c0284ee3c21bd.svg"
    },
    9600: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/80dd50a2fa9aae3b5d6effdb2d9c2661.svg"
    },
    4656: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5d471eef7883043fdabe1b3ed17a72b3.svg"
    },
    4884: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/35cf853d7882b090b56837bd08127da1.svg"
    },
    896: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/72e8749316b4d1f52925b95e075e9c24.svg"
    },
    7932: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c2acdad576048f5c48b2ee6a2a2a90a3.svg"
    },
    568: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f52c5ab315a1ff90360e06372c3f2c0.svg"
    },
    6620: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d1f569db6c94b4f81417f62e91759082.svg"
    },
    1407: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fe262661c6667d97f441e045067f4a0f.svg"
    },
    4164: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1b457cab77cb82e1c05ad12628414576.svg"
    },
    4916: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1a3660d76f39527a79f8a49bb27a74be.svg"
    },
    9976: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1a3660d76f39527a79f8a49bb27a74be.svg"
    },
    7304: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/515f2884036e870905ae53f156692721.svg"
    },
    2284: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a3931a545299e205758648bce29e5c49.svg"
    },
    2024: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/05e9f2f27883d4cbabb3d4e4e16c9c74.svg"
    },
    1040: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f2fc4de3decfa0ac007f6cbd91658a9.svg"
    },
    6632: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cd57122be57f5e3a9dc4d0a0f2503fb1.svg"
    },
    7372: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2d910a48fc0914f58ca80dc0732a7677.svg"
    },
    1423: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6e99540df7fd07d75b08a5fbc02d4815.svg"
    },
    2596: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/937b7a0c5a128c39addf2adeba2d2f23.svg"
    },
    3980: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/46a27d8d16855dcc2a217f48243c6d82.svg"
    },
    4859: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e5792c85d5a88a0b7c75af087e4c6ee2.svg"
    },
    5140: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4da522682784ded3799c5a6f9f8c213a.svg"
    },
    6884: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/29ea20c333709a952c2eb3a2591d435d.svg"
    },
    8704: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7c66fbb7c204e32da80ccb1693d15e00.svg"
    },
    4116: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/954d63889440be17e1ebef30b7026369.svg"
    },
    2856: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2eb8777f38cbd4d721261ad736c1f2e7.svg"
    },
    5888: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6079496697e537802f8a0eb5a83d2e94.svg"
    },
    4780: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a2a19fbf81b03db0fda00839496a3ce5.svg"
    },
    8564: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/129ef1c1a15ffc7afb86ce282e48decb.svg"
    },
    524: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a2a5d9ca87a5bd107da9bb33d3d718e8.svg"
    },
    3173: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dabd13175cc0894dcb3f942d3d2dab86.svg"
    },
    100: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/64d281825da1c782681bcc096d693e32.svg"
    },
    64: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b43dddd485139df895fc531e79c75e68.svg"
    },
    5228: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c01f38f1051e751caa633d533202873c.svg"
    },
    4308: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/27a26f477c8db29df4ceec4517c7f42b.svg"
    },
    6480: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a380d3ce353544a356e8ce48f8586804.png"
    },
    8112: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/bba2f70e014e82b336a9f80625053089.svg"
    },
    7767: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/85250e8a0e5a5a1209f214423f6ebe43.svg"
    },
    5740: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f1a94d5705ae3ddeb4c8c2fde79bfe81.svg"
    },
    6708: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a825976dddc59e33b3ce146ad6cd3d20.svg"
    },
    4264: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/01b0cd4466759aa349ac4036594ab6ae.svg"
    },
    5084: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9c699f3b76c15209c8059f02507e11b5.svg"
    },
    3004: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b48e041f1412ff62c8a92dc424b59aa5.svg"
    },
    1804: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/07362df5a2671c08b232a97d503cd6bf.svg"
    },
    1367: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c3fe2a9610ca8b42807dfa99073d68b3.svg"
    },
    5568: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/056d3bdf1f300bcb7efa4aebcfc5224d.svg"
    },
    3716: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/278e84e5a41407499c43a30f545da3e8.svg"
    },
    6616: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/703a546f7a5109c1e2af87a212135aad.png"
    },
    752: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/48754c6fc2f75b0554098423f2bda6d1.png"
    },
    56: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e111377ba943e9eefaa9204f77c77093.png"
    },
    1444: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4639a2711d1bca49a87c302784050ee3.png"
    },
    3268: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/898794daaec68a69ef5ec4afaefe1948.png"
    },
    4688: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6e77bb0f25a6ea37e8d831b12df9fa3c.png"
    },
    4616: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f1aba112359a3d6747ad694a8c02a07c.png"
    },
    7076: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/26f95aa7677031d8cd56ea75250c7bdd.png"
    },
    3976: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8787df71c723ebe44f82fd13ed216e09.jpg"
    },
    1820: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61ae357c3bfbabb5d765e9a7c794d08f.png"
    }
  }
]);